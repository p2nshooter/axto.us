/*
 * AXTO — "Satu Puncak, Banyak Jalan"
 * Animasi karakter deterministik di atas satu canvas.
 *
 * Seluruh gambar adalah fungsi murni dari waktu: render(ctx, t) selalu
 * menghasilkan frame yang sama untuk t yang sama. Itu membuat animasi ini
 * bisa diputar live di browser sekaligus dirender frame-per-frame menjadi
 * video (lihat scripts/render-animation.mjs) tanpa perbedaan hasil.
 */
(function (global) {
  'use strict';

  var W = 1920;
  var H = 1080;
  var FPS = 30;
  var DURATION = 92; // detik

  /* Alur waktu (detik).
   * Adegan kartu dan puncak punya "beat" internal yang ditulis dalam skala
   * ringkasnya sendiri, lalu diregangkan memakai RATE di bawah ini supaya
   * total durasi bisa diubah tanpa menulis ulang setiap detailnya. */
  var FIELD_START = 7.8;
  var FIELD_SPAN = 44;
  var FIELD_BEATS = 16.6;                        // panjang "beat" internal kartu
  var FIELD_RATE = FIELD_BEATS / FIELD_SPAN;     // ≈ 0,377 — gerak jadi lebih tenang
  var SUMMIT_START = 50.4;
  var SUMMIT_SPAN = 26;
  var SUMMIT_BEATS = 9.2;
  var SUMMIT_RATE = SUMMIT_BEATS / SUMMIT_SPAN;  // ≈ 0,354
  var OUTRO_START = 72.5;

  /* ------------------------------------------------------------------ *
   * Utilitas
   * ------------------------------------------------------------------ */

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function seg(t, a, b) { return clamp((t - a) / (b - a), 0, 1); }
  function smooth(t) { return t * t * (3 - 2 * t); }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function easeIn(t) { return t * t * t; }
  function easeInOut(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

  // Amplop kemunculan: naik selama `fi` detik, turun selama `fo` detik.
  function env(t, a, b, fi, fo) {
    if (t <= a || t >= b) return 0;
    return Math.min(smooth(seg(t, a, a + fi)), smooth(1 - seg(t, b - fo, b)));
  }

  function mulberry32(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
      var x = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }

  function rgba(hex, a) {
    var n = parseInt(hex.slice(1), 16);
    return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')';
  }

  function mix(hexA, hexB, t) {
    var a = parseInt(hexA.slice(1), 16), b = parseInt(hexB.slice(1), 16);
    var r = Math.round(lerp((a >> 16) & 255, (b >> 16) & 255, t));
    var g = Math.round(lerp((a >> 8) & 255, (b >> 8) & 255, t));
    var bl = Math.round(lerp(a & 255, b & 255, t));
    return 'rgb(' + r + ',' + g + ',' + bl + ')';
  }

  /* ------------------------------------------------------------------ *
   * Palet & tipografi
   * ------------------------------------------------------------------ */

  var C = {
    ink0: '#05040f',
    ink1: '#0b0a20',
    ink2: '#171034',
    line: '#2a2350',
    text: '#f3f0ff',
    muted: '#a79ed0',
    faint: '#6f68a0',
    rock: '#9d70ff',
    sand: '#f5b544',
    river: '#35d1c2',
    brand: '#7f3dfb',
    dawn0: '#1b1440',
    dawn1: '#6b3a7a',
    dawn2: '#e8845f',
    dawn3: '#ffcf8f'
  };

  var FONT = '"Liberation Sans", "DejaVu Sans", Arial, sans-serif';

  // Tiga tokoh: nama, warna, dan medan yang dihadapinya.
  var KADUS = [
    { name: 'KADUS 1', color: '#9d70ff', terrain: 'TEBING BATU' },
    { name: 'KADUS 2', color: '#f5b544', terrain: 'GURUN PASIR' },
    { name: 'KADUS 3', color: '#35d1c2', terrain: 'ARUS SUNGAI' }
  ];

  function font(size, weight) {
    return (weight || 400) + ' ' + size + 'px ' + FONT;
  }

  // Teks dengan letter-spacing manual supaya konsisten di semua mesin render.
  function tracked(ctx, str, x, y, tracking, align) {
    var chars = String(str).split('');
    var i, w = [], total = 0;
    for (i = 0; i < chars.length; i++) { w[i] = ctx.measureText(chars[i]).width; total += w[i]; }
    total += tracking * (chars.length - 1);
    var cx = align === 'center' ? x - total / 2 : align === 'right' ? x - total : x;
    for (i = 0; i < chars.length; i++) { ctx.fillText(chars[i], cx, y); cx += w[i] + tracking; }
    return total;
  }

  function label(ctx, str, x, y, o) {
    o = o || {};
    ctx.save();
    ctx.globalAlpha *= o.alpha === undefined ? 1 : o.alpha;
    ctx.font = font(o.size || 20, o.weight || 400);
    ctx.fillStyle = o.color || C.text;
    ctx.textBaseline = o.baseline || 'alphabetic';
    if (o.tracking) tracked(ctx, str, x, y, o.tracking, o.align || 'left');
    else { ctx.textAlign = o.align || 'left'; ctx.fillText(str, x, y); }
    ctx.restore();
  }

  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  /* ------------------------------------------------------------------ *
   * Data acak yang dibekukan (agar setiap render identik)
   * ------------------------------------------------------------------ */

  var rnd = mulberry32(20260812);

  var STARS = (function () {
    var a = [], i;
    for (i = 0; i < 150; i++) {
      a.push({ x: rnd() * W, y: rnd() * (H * 0.72), r: 0.5 + rnd() * 1.5, p: rnd() * 6.283, s: 0.4 + rnd() * 1.2 });
    }
    return a;
  })();

  var CLIFF_NOISE = (function () { var a = [], i; for (i = 0; i < 40; i++) a.push(rnd()); return a; })();
  var GRAIN = (function () { var a = [], i; for (i = 0; i < 90; i++) a.push({ x: rnd(), y: rnd(), r: rnd() }); return a; })();
  var STORM = (function () {
    var a = [], i;
    for (i = 0; i < 90; i++) a.push({ y: rnd(), sp: 0.6 + rnd() * 1.1, len: 20 + rnd() * 90, off: rnd(), o: 0.15 + rnd() * 0.5 });
    return a;
  })();

  /* ------------------------------------------------------------------ *
   * Karakter: figur berartikulasi sederhana
   * ------------------------------------------------------------------ */

  // Konvensi sudut: 0 = mengarah ke bawah, PI = ke atas, positif = miring ke +x.
  function tip(x, y, ang, len) { return [x + Math.sin(ang) * len, y + Math.cos(ang) * len]; }

  // Kain bendera yang berkibar; (x, y) = ujung atas tiang.
  function pennant(ctx, x, y, w, h, color, phase) {
    var u, i;
    ctx.beginPath();
    for (i = 0; i <= 10; i++) {
      u = i / 10;
      ctx.lineTo(x + u * w, y + Math.sin(u * 4.6 + phase) * 3.2 + u * 2);
    }
    for (i = 10; i >= 0; i--) {
      u = i / 10;
      ctx.lineTo(x + u * w, y + h + Math.sin(u * 4.6 + phase) * 3.2 + u * 2);
    }
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  function limb(ctx, x, y, a1, l1, a2, l2, w) {
    var m = tip(x, y, a1, l1);
    var e = tip(m[0], m[1], a2, l2);
    ctx.lineWidth = w;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(m[0], m[1]);
    ctx.lineTo(e[0], e[1]);
    ctx.stroke();
    return e;
  }

  /**
   * Menggambar satu karakter.
   * o = { x, y, s, color, lean, flip, arms:[[a,b],[a,b]], legs:[[a,b],[a,b]],
   *       pack, headTilt, alpha, glow }
   */
  function figure(ctx, o) {
    var s = o.s === undefined ? 1 : o.s;
    var flip = o.flip ? -1 : 1;
    var lean = o.lean || 0;
    var col = o.color || C.text;

    // Pencerminan cukup dilakukan lewat transformasi kanvas; sudut sendi tetap.
    ctx.save();
    ctx.translate(o.x, o.y);
    ctx.scale(flip * s, s);
    ctx.globalAlpha *= o.alpha === undefined ? 1 : o.alpha;

    var torsoAng = Math.PI + lean;
    var sh = tip(0, 0, torsoAng, 44);
    var headC = tip(sh[0], sh[1], torsoAng + (o.headTilt || 0), 19);

    if (o.glow) {
      ctx.shadowColor = rgba(col, 0.55);
      ctx.shadowBlur = 22;
    }

    // Tungkai & lengan belakang (lebih redup untuk kesan kedalaman)
    ctx.strokeStyle = rgba(col, 0.42);
    limb(ctx, 0, 0, o.legs[1][0], 30, o.legs[1][1], 30, 9);
    limb(ctx, sh[0], sh[1], o.arms[1][0], 25, o.arms[1][1], 24, 8);

    // Ransel
    if (o.pack) {
      ctx.save();
      ctx.translate(lerp(0, sh[0], 0.55), lerp(0, sh[1], 0.55));
      ctx.rotate(-lean);
      ctx.fillStyle = rgba(col, 0.85);
      roundRect(ctx, -20, -16, 17, 32, 7);
      ctx.fill();
      ctx.restore();
    }

    // Bendera kecil yang dibawa di punggung
    if (o.flag !== undefined) {
      ctx.save();
      ctx.translate(lerp(0, sh[0], 0.6), lerp(0, sh[1], 0.6));
      ctx.rotate(-lean);
      ctx.strokeStyle = rgba('#efe9ff', 0.85);
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(-14, 16);
      ctx.lineTo(-22, -60);
      ctx.stroke();
      pennant(ctx, -22, -60, 32, 15, o.flag, o.flagPhase || 0);
      ctx.restore();
    }

    // Badan
    ctx.strokeStyle = col;
    ctx.lineWidth = 13;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(sh[0], sh[1]);
    ctx.stroke();

    // Kepala
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(headC[0], headC[1], 13, 0, 6.2832);
    ctx.fill();

    // Tungkai & lengan depan
    ctx.strokeStyle = col;
    limb(ctx, 0, 0, o.legs[0][0], 30, o.legs[0][1], 30, 9);
    var hand = limb(ctx, sh[0], sh[1], o.arms[0][0], 25, o.arms[0][1], 24, 8);

    ctx.restore();
    return { hand: hand, shoulder: sh };
  }

  function poseWalk(p, amp) {
    amp = amp === undefined ? 1 : amp;
    var s1 = Math.sin(p), s2 = Math.sin(p + Math.PI);
    return {
      legs: [
        [0.52 * amp * s1, 0.52 * amp * s1 + 0.42 * amp * (1 - Math.cos(p)) * 0.5],
        [0.52 * amp * s2, 0.52 * amp * s2 + 0.42 * amp * (1 - Math.cos(p + Math.PI)) * 0.5]
      ],
      arms: [
        [0.42 * amp * s2, 0.42 * amp * s2 + 0.35],
        [0.42 * amp * s1, 0.42 * amp * s1 + 0.35]
      ],
      bob: -Math.abs(Math.sin(p)) * 3 * amp
    };
  }

  function poseClimb(p) {
    var a = Math.sin(p), b = Math.sin(p + Math.PI);
    // Tangan bergantian meraih ke atas, kaki menahan berat di bawah.
    return {
      arms: [
        [Math.PI * 0.96 + 0.14 * a, Math.PI * 0.9 + 0.2 * a],
        [Math.PI * 0.84 + 0.14 * b, Math.PI * 0.78 + 0.2 * b]
      ],
      legs: [
        [0.3 + 0.16 * b, 0.14 + 0.2 * b],
        [-0.24 + 0.16 * a, -0.1 + 0.2 * a]
      ],
      bob: -Math.abs(Math.sin(p * 0.5)) * 2
    };
  }

  function poseCrouch(k) {
    // k: 0 = berjalan biasa, 1 = berhenti, kaki mengangkang menahan angin,
    // satu lengan menutupi wajah dari terpaan pasir.
    return {
      arms: [
        [lerp(0.3, 2.45, k), lerp(0.5, 3.35, k)],
        [lerp(-0.3, -0.65, k), lerp(-0.5, -0.3, k)]
      ],
      legs: [
        [lerp(0.12, 0.46, k), lerp(0.12, 0.12, k)],
        [lerp(-0.12, -0.34, k), lerp(-0.12, -0.06, k)]
      ],
      bob: k * 7
    };
  }

  // Berdiri di atas rakit sambil menggalah; `crouch` merendahkan tubuh saat jeram.
  function posePole(poleAng, crouch, sway) {
    return {
      arms: [
        [poleAng + 0.1, poleAng - 0.05],
        [poleAng - 0.28, poleAng - 0.1]
      ],
      legs: [
        [lerp(0.26, 0.62, crouch) + sway * 0.04, lerp(0.1, -0.34, crouch)],
        [lerp(-0.26, -0.5, crouch) + sway * 0.04, lerp(-0.1, 0.3, crouch)]
      ],
      bob: -crouch * 12
    };
  }

  /* ------------------------------------------------------------------ *
   * Latar
   * ------------------------------------------------------------------ */

  function backdrop(ctx, t, dawn) {
    var g = ctx.createLinearGradient(0, 0, 0, H);
    if (dawn > 0) {
      g.addColorStop(0, mix(C.ink0, C.dawn0, dawn));
      g.addColorStop(0.45, mix(C.ink1, C.dawn1, dawn * 0.85));
      g.addColorStop(0.75, mix(C.ink2, C.dawn2, dawn * 0.8));
      g.addColorStop(1, mix(C.ink0, C.dawn3, dawn * 0.55));
    } else {
      g.addColorStop(0, C.ink0);
      g.addColorStop(0.5, C.ink1);
      g.addColorStop(1, C.ink2);
    }
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // Cahaya lembut yang bergerak pelan
    var blobs = [
      { x: 320 + Math.sin(t * 0.13) * 90, y: 210, r: 620, c: C.brand, a: 0.2 },
      { x: 1560 + Math.cos(t * 0.11) * 80, y: 300, r: 560, c: C.river, a: 0.13 }
    ];
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    blobs.forEach(function (b) {
      var rg = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
      rg.addColorStop(0, rgba(b.c, b.a * (1 - dawn * 0.7)));
      rg.addColorStop(1, rgba(b.c, 0));
      ctx.fillStyle = rg;
      ctx.fillRect(b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);
    });
    ctx.restore();

    // Bintang
    ctx.save();
    STARS.forEach(function (s) {
      var tw = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * s.s + s.p));
      ctx.globalAlpha = tw * 0.75 * (1 - dawn);
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, 6.2832);
      ctx.fill();
    });
    ctx.restore();
  }

  function vignette(ctx) {
    var g = ctx.createRadialGradient(W / 2, H / 2, H * 0.34, W / 2, H / 2, H * 1.02);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, 'rgba(0,0,0,0.55)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }

  /* ------------------------------------------------------------------ *
   * Kop & kaki layar
   * ------------------------------------------------------------------ */

  function chrome(ctx, t, chapter, alpha) {
    if (alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha = alpha;

    ctx.fillStyle = C.brand;
    ctx.beginPath();
    ctx.arc(84, 74, 7, 0, 6.2832);
    ctx.fill();

    // Kop kiri atas: TKJ 3 · "Team Kemenangan JOFA" · JILID 3
    ctx.textBaseline = 'alphabetic';
    var hx = 104;
    ctx.font = font(23, 700);
    ctx.fillStyle = C.text;
    hx += tracked(ctx, 'TKJ 3', hx, 82, 5, 'left') + 20;
    ctx.font = font(17, 400);
    ctx.fillStyle = C.muted;
    hx += tracked(ctx, '"Team Kemenangan JOFA"', hx, 82, 1.4, 'left') + 18;
    ctx.font = font(16, 700);
    ctx.fillStyle = C.faint;
    tracked(ctx, 'JILID 3', hx, 82, 3, 'left');

    label(ctx, 'created by : Yusron Efendi', W - 84, 60, {
      size: 19, color: C.text, tracking: 1.4, align: 'right', weight: 700
    });
    if (chapter) {
      label(ctx, chapter, W - 84, 88, { size: 15, color: C.faint, tracking: 3.4, align: 'right' });
    }

    ctx.strokeStyle = rgba('#ffffff', 0.07);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(84, 110);
    ctx.lineTo(W - 84, 110);
    ctx.stroke();
    ctx.restore();
  }

  /* ------------------------------------------------------------------ *
   * Babak 1 — Judul
   * ------------------------------------------------------------------ */

  function sceneIntro(ctx, t, a) {
    if (a <= 0) return;
    ctx.save();
    ctx.globalAlpha = a;

    var cy = 452;

    // Garis tipis yang merekah dari tengah
    var lw = easeOut(seg(t, 0.5, 2.6)) * 420;
    var lg = ctx.createLinearGradient(W / 2 - lw, 0, W / 2 + lw, 0);
    lg.addColorStop(0, rgba(C.brand, 0));
    lg.addColorStop(0.5, rgba(C.rock, 0.9));
    lg.addColorStop(1, rgba(C.brand, 0));
    ctx.strokeStyle = lg;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(W / 2 - lw, cy - 118);
    ctx.lineTo(W / 2 + lw, cy - 118);
    ctx.stroke();

    // Kata pembuka
    var e0 = smooth(seg(t, 0.7, 2.0));
    label(ctx, 'SEBUAH CATATAN PERJALANAN', W / 2, cy - 152, {
      size: 19, color: C.muted, tracking: 8.5, align: 'center', alpha: e0
    });

    // Judul
    var e1 = smooth(seg(t, 1.4, 3.2));
    ctx.save();
    ctx.globalAlpha *= e1;
    ctx.translate(0, (1 - easeOut(e1)) * 26);
    var tg = ctx.createLinearGradient(W / 2 - 620, 0, W / 2 + 620, 0);
    tg.addColorStop(0, C.rock);
    tg.addColorStop(0.5, '#ffffff');
    tg.addColorStop(1, C.river);
    ctx.font = font(92, 700);
    ctx.fillStyle = tg;
    ctx.textBaseline = 'alphabetic';
    tracked(ctx, 'SATU PUNCAK, BANYAK JALAN', W / 2, cy, 5, 'center');
    ctx.restore();

    // Sub-judul
    var e2 = smooth(seg(t, 2.4, 3.8));
    label(ctx, 'Tujuan yang sama. Medan yang berbeda. Cara yang tak pernah sama.', W / 2, cy + 66, {
      size: 30, color: C.muted, align: 'center', alpha: e2, tracking: 0.6
    });

    // Tiga pembawa bendera diperkenalkan satu per satu
    var groundY = cy + 306;
    ctx.save();
    ctx.strokeStyle = rgba('#ffffff', 0.12);
    ctx.lineWidth = 1;
    ctx.globalAlpha *= smooth(seg(t, 3.2, 4.4));
    ctx.beginPath();
    ctx.moveTo(W / 2 - 460, groundY + 6);
    ctx.lineTo(W / 2 + 460, groundY + 6);
    ctx.stroke();
    ctx.restore();

    KADUS.forEach(function (m, i) {
      var pop = smooth(seg(t, 3.3 + i * 0.7, 4.6 + i * 0.7));
      if (pop <= 0) return;
      var w = poseWalk(t * 5.4 + i * 2.1, 0.75);
      var x = W / 2 + (i - 1) * 270;
      figure(ctx, {
        x: x, y: groundY - 58 * pop + w.bob, s: 1.0 * pop, color: m.color, lean: 0.07,
        arms: w.arms, legs: w.legs, pack: true, alpha: pop, glow: true,
        flag: m.color, flagPhase: t * 4 + i
      });
      label(ctx, m.name, x, groundY + 52, {
        size: 22, weight: 700, color: m.color, tracking: 4.4, align: 'center',
        alpha: smooth(seg(t, 4.0 + i * 0.7, 5.0 + i * 0.7))
      });
    });

    ctx.restore();
  }

  /* ------------------------------------------------------------------ *
   * Babak 2 — Tiga medan (kartu)
   * ------------------------------------------------------------------ */

  var CARD = { top: 208, h: 690, pad: 34 };

  function cardFrame(ctx, i, alpha) {
    var x = i * (W / 3) + 46;
    var w = W / 3 - 92;
    ctx.save();
    ctx.globalAlpha *= alpha;
    var g = ctx.createLinearGradient(x, CARD.top, x, CARD.top + CARD.h);
    g.addColorStop(0, 'rgba(255,255,255,0.055)');
    g.addColorStop(1, 'rgba(255,255,255,0.012)');
    roundRect(ctx, x, CARD.top, w, CARD.h, 26);
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.09)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
    return { x: x, y: CARD.top, w: w, h: CARD.h };
  }

  function cardHeader(ctx, r, idx, title, color, alpha, who) {
    ctx.save();
    ctx.globalAlpha *= alpha;
    label(ctx, idx, r.x + CARD.pad, r.y + 54, { size: 17, color: color, weight: 700, tracking: 2 });
    label(ctx, title, r.x + CARD.pad + 46, r.y + 54, { size: 25, color: C.text, weight: 700, tracking: 3.4 });
    if (who) {
      label(ctx, who, r.x + r.w - CARD.pad, r.y + 54, {
        size: 19, color: color, weight: 700, tracking: 3, align: 'right'
      });
    }
    ctx.strokeStyle = rgba(color, 0.35);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(r.x + CARD.pad, r.y + 76);
    ctx.lineTo(r.x + r.w - CARD.pad, r.y + 76);
    ctx.stroke();
    ctx.restore();
  }

  function cardFooter(ctx, r, color, method, note, noteAlpha, alpha) {
    ctx.save();
    ctx.globalAlpha *= alpha;
    var y = r.y + r.h - 108;
    label(ctx, 'CARA YANG DIPAKAI', r.x + CARD.pad, y, { size: 14, color: C.faint, tracking: 3.2 });
    var words = method.split('\n');
    words.forEach(function (line, i) {
      label(ctx, line, r.x + CARD.pad, y + 32 + i * 28, { size: 21, color: C.text, tracking: 0.3 });
    });
    if (noteAlpha > 0) {
      ctx.save();
      ctx.globalAlpha *= noteAlpha;
      var bw = r.w - CARD.pad * 2;
      roundRect(ctx, r.x + CARD.pad, y - 74, bw, 46, 12);
      ctx.fillStyle = rgba(color, 0.14);
      ctx.fill();
      ctx.strokeStyle = rgba(color, 0.42);
      ctx.lineWidth = 1;
      ctx.stroke();
      label(ctx, note, r.x + CARD.pad + 16, y - 44, { size: 18, color: color, tracking: 0.4 });
      ctx.restore();
    }
    ctx.restore();
  }

  function stageClip(ctx, r) {
    var s = { x: r.x + 1, y: r.y + 96, w: r.w - 2, h: 400 };
    ctx.beginPath();
    ctx.rect(s.x, s.y, s.w, s.h);
    ctx.clip();
    return s;
  }

  // --- Medan 1: tebing batu ------------------------------------------

  function cliffEdge(y01) {
    // Profil dinding: tepi bergerigi yang tetap sepanjang animasi
    var i = Math.floor(y01 * 7);
    var f = y01 * 7 - i;
    var a = CLIFF_NOISE[i % CLIFF_NOISE.length];
    var b = CLIFF_NOISE[(i + 1) % CLIFF_NOISE.length];
    return lerp(a, b, smooth(f));
  }

  function drawCliff(ctx, s, t, tr) {
    // tr = progres babak rintangan (0..1)
    var baseX = s.x + s.w * 0.76; // tepi kanan dinding — batu mengisi hampir seluruh panggung
    ctx.save();

    // Dinding batu
    var edgeAt = function (y01) { return baseX - cliffEdge(y01) * 52; };
    ctx.beginPath();
    ctx.moveTo(s.x, s.y + s.h);
    ctx.lineTo(s.x, s.y);
    var y;
    for (y = 0; y <= 1.0001; y += 0.035) ctx.lineTo(edgeAt(y), s.y + y * s.h);
    ctx.lineTo(s.x, s.y + s.h);
    ctx.closePath();
    var g = ctx.createLinearGradient(s.x, 0, baseX, 0);
    g.addColorStop(0, '#1a1338');
    g.addColorStop(0.55, '#332764');
    g.addColorStop(1, '#463578');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = rgba(C.rock, 0.55);
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    for (y = 0; y <= 1.0001; y += 0.035) ctx.lineTo(edgeAt(y), s.y + y * s.h);
    ctx.stroke();

    // Lapisan batuan & retakan
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    for (y = 0; y <= 1.0001; y += 0.035) ctx.lineTo(edgeAt(y), s.y + y * s.h);
    ctx.lineTo(s.x, s.y + s.h);
    ctx.closePath();
    ctx.clip();
    ctx.strokeStyle = rgba('#ffffff', 0.06);
    ctx.lineWidth = 1;
    for (var L = 0; L < 7; L++) {
      var ly = s.y + s.h * (0.08 + L * 0.13);
      ctx.beginPath();
      ctx.moveTo(s.x - 10, ly + Math.sin(L * 2.1) * 8);
      ctx.lineTo(baseX + 10, ly - 14 + Math.cos(L * 1.7) * 9);
      ctx.stroke();
    }
    GRAIN.slice(0, 26).forEach(function (p) {
      ctx.globalAlpha = 0.06 + p.r * 0.06;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(s.x + p.x * s.w * 0.8, s.y + p.y * s.h, 1 + p.r * 2.4, 0, 6.2832);
      ctx.fill();
    });
    ctx.globalAlpha = 1;
    ctx.restore();

    // Dua jalur pegangan di muka tebing
    var routeX = function (which, y01) {
      return edgeAt(y01) - (which === 0 ? 66 : 168);
    };

    ctx.lineWidth = 1.4;
    [0, 1].forEach(function (w) {
      var alpha = w === 0 ? 0.34 * (1 - tr * 0.5) : 0.12 + 0.4 * tr;
      ctx.strokeStyle = rgba(C.rock, alpha);
      ctx.setLineDash([5, 9]);
      ctx.beginPath();
      for (y = 0; y <= 1.0001; y += 0.03) ctx.lineTo(routeX(w, y), s.y + s.h - y * s.h);
      ctx.stroke();
      ctx.setLineDash([]);
      // Titik pegangan
      for (var k = 0.06; k < 1; k += 0.12) {
        ctx.globalAlpha = alpha * 1.6;
        ctx.fillStyle = C.rock;
        ctx.beginPath();
        ctx.arc(routeX(w, k) + Math.sin(k * 21) * 7, s.y + s.h - k * s.h, 2.6, 0, 6.2832);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    });
    ctx.restore();
    return { routeX: routeX, baseX: baseX, edgeAt: edgeAt };
  }

  function sceneCliff(ctx, r, t, tt) {
    // tt: waktu lokal sejak kartu muncul
    ctx.save();
    var s = stageClip(ctx, r);

    // Fase: naik (0-8.4s) → batu runtuh & berhenti (8.4-10.6) → pindah jalur (10.6-12) → naik lagi
    var stall = smooth(seg(tt, 8.4, 9.0)) * (1 - smooth(seg(tt, 11.0, 12.0)));
    var shift = smooth(seg(tt, 10.3, 12.0));
    var tr = smooth(seg(tt, 8.4, 12.0));

    var geo = drawCliff(ctx, s, t, tr);

    // Naik → berhenti saat batu runtuh → pindah jalur → naik lagi
    var climb;
    if (tt < 8.4) climb = 0.05 + tt * 0.055;
    else if (tt < 11.0) climb = 0.05 + 8.4 * 0.055;
    else climb = 0.05 + 8.4 * 0.055 + (tt - 11.0) * 0.062;
    var y01 = clamp(climb, 0, 0.93);
    var x = lerp(geo.routeX(0, y01), geo.routeX(1, y01), shift);
    var y = s.y + s.h - y01 * (s.h - 60) - 46;

    // Batu yang runtuh menyusuri jalur pertama
    var rockT = seg(tt, 8.3, 10.4);
    if (rockT > 0 && rockT < 1) {
      for (var i = 0; i < 6; i++) {
        var p = clamp(rockT * 1.5 - i * 0.11, 0, 1);
        if (p <= 0 || p >= 1) continue;
        var ry = s.y - 30 + p * (s.h + 60);
        var rx = geo.routeX(0, clamp(1 - (ry - s.y) / s.h, 0, 1)) + Math.sin(i * 2.1) * 12;
        var rr = 5 + (i % 3) * 3;
        ctx.globalAlpha = 0.9 * (1 - p * 0.25);
        ctx.fillStyle = '#8f7ac9';
        ctx.beginPath();
        ctx.arc(rx, ry, rr, 0, 6.2832);
        ctx.fill();
        ctx.strokeStyle = rgba('#d9cdff', 0.35);
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(rx, ry - rr);
        ctx.lineTo(rx - 3, ry - rr - 34);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    // Karakter memanjat — irama tangan mengikuti kecepatan naiknya
    var speed = (stall > 0.5 ? 1.2 : 4.0) * (FIELD_RATE * 2.4);
    var pose = poseClimb(t * speed);
    var hold = stall; // saat menunggu, tubuh merapat ke dinding

    // Bayangan lembut di dinding memberi kesan menempel
    ctx.save();
    var sg = ctx.createRadialGradient(x + 26, y - 26, 6, x + 26, y - 26, 74);
    sg.addColorStop(0, 'rgba(0,0,0,0.22)');
    sg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = sg;
    ctx.fillRect(x - 60, y - 110, 180, 180);
    ctx.restore();

    figure(ctx, {
      x: x, y: y + pose.bob, s: 0.7, color: C.rock, flip: true,
      lean: lerp(0.16, 0.05, hold),
      arms: pose.arms, legs: pose.legs, pack: true, glow: true,
      flag: KADUS[0].color, flagPhase: t * 3
    });

    // Serpih batu kecil yang jatuh dari pijakan
    var puff = Math.max(0, Math.sin(t * speed)) * (1 - hold);
    for (var d = 0; d < 4; d++) {
      var dp = ((t * 0.9 + d * 0.37) % 1);
      ctx.globalAlpha = puff * (1 - dp) * 0.35;
      ctx.fillStyle = '#d9cdff';
      ctx.beginPath();
      ctx.arc(x + 8 + Math.sin(d * 3) * 12, y + 10 + dp * 90, 1.6, 0, 6.2832);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    ctx.restore();
    return { shift: shift, stall: stall };
  }

  // --- Medan 2: gurun pasir ------------------------------------------

  function duneY(s, x01, layer) {
    var k = [0.42, 0.56, 0.72][layer];
    var amp = [46, 34, 22][layer];
    var ph = [0.6, 2.4, 4.1][layer];
    return s.y + s.h * k + Math.sin(x01 * 3.1 + ph) * amp + Math.sin(x01 * 6.7 + ph * 2) * amp * 0.28;
  }

  function sceneDune(ctx, r, t, tt) {
    ctx.save();
    var s = stageClip(ctx, r);

    var stormA = env(tt, 8.2, 12.4, 1.0, 1.4);
    var shelter = env(tt, 8.8, 11.6, 0.8, 0.8); // saat berlindung

    // Bukit pasir berlapis
    var colors = ['#3a2a4e', '#4a3352', '#5d3f52'];
    for (var L = 0; L < 3; L++) {
      ctx.beginPath();
      ctx.moveTo(s.x, s.y + s.h);
      for (var i = 0; i <= 60; i++) {
        var x01 = i / 60;
        ctx.lineTo(s.x + x01 * s.w, duneY(s, x01, L));
      }
      ctx.lineTo(s.x + s.w, s.y + s.h);
      ctx.closePath();
      var g = ctx.createLinearGradient(0, s.y + s.h * 0.3, 0, s.y + s.h);
      g.addColorStop(0, mix(colors[L], C.sand, 0.16));
      g.addColorStop(1, colors[L]);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.strokeStyle = rgba(C.sand, L === 0 ? 0.4 : 0.16);
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      for (var j = 0; j <= 60; j++) {
        var xx = j / 60;
        ctx.lineTo(s.x + xx * s.w, duneY(s, xx, L));
      }
      ctx.stroke();
    }

    // Perjalanan: langkah panjang → badai → berhenti → langkah pendek yang hemat
    var walked;
    if (tt < 8.2) walked = tt * 0.055;
    else if (tt < 11.8) walked = 0.451 + (tt - 8.2) * 0.006;
    else walked = 0.473 + (tt - 11.8) * 0.036;
    var x01 = clamp(walked, 0, 0.94);
    var px = s.x + 40 + x01 * (s.w - 90);
    var py = duneY(s, (px - s.x) / s.w, 0);

    // Jejak kaki yang tertinggal
    ctx.save();
    for (var f = 1; f <= 14; f++) {
      var fx01 = x01 - f * 0.042;
      if (fx01 < 0.01) break;
      var fx = s.x + 40 + fx01 * (s.w - 90);
      ctx.globalAlpha = clamp(0.3 - f * 0.018, 0, 1);
      ctx.fillStyle = '#241a34';
      ctx.beginPath();
      ctx.ellipse(fx, duneY(s, (fx - s.x) / s.w, 0) + 3, 7, 3.2, 0, 0, 6.2832);
      ctx.fill();
    }
    ctx.restore();

    // Karakter: berjalan, lalu jongkok berlindung, lalu berjalan lagi
    // Setelah badai: ritme lebih pelan & hemat tenaga
    var stepSpeed = (tt < 8.2 ? 5.2 : 3.4) * (FIELD_RATE * 2.65);
    var amp = tt < 8.2 ? 1 : 0.68;
    var wk = poseWalk(t * stepSpeed, amp);
    var cr = poseCrouch(shelter);
    var mixk = shelter;
    var pose = {
      arms: [
        [lerp(wk.arms[0][0], cr.arms[0][0], mixk), lerp(wk.arms[0][1], cr.arms[0][1], mixk)],
        [lerp(wk.arms[1][0], cr.arms[1][0], mixk), lerp(wk.arms[1][1], cr.arms[1][1], mixk)]
      ],
      legs: [
        [lerp(wk.legs[0][0], cr.legs[0][0], mixk), lerp(wk.legs[0][1], cr.legs[0][1], mixk)],
        [lerp(wk.legs[1][0], cr.legs[1][0], mixk), lerp(wk.legs[1][1], cr.legs[1][1], mixk)]
      ],
      bob: lerp(wk.bob, cr.bob, mixk)
    };
    // Pinggul diangkat setinggi panjang tungkai agar telapak kaki menapak pasir
    figure(ctx, {
      x: px, y: py - 58 * 0.62 + pose.bob, s: 0.62, color: C.sand,
      lean: lerp(0.12, 0.34, shelter),
      arms: pose.arms, legs: pose.legs, pack: true, glow: true,
      flag: KADUS[1].color, flagPhase: t * 5 + stormA * 3
    });

    // Badai pasir
    if (stormA > 0) {
      ctx.save();
      ctx.globalAlpha = stormA;
      STORM.forEach(function (p) {
        var xx = ((p.off + t * p.sp * 0.35) % 1.25) * (s.w + 220) - 160;
        var yy = s.y + p.y * s.h;
        ctx.strokeStyle = rgba(C.sand, p.o * 0.55);
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(s.x + xx, yy);
        ctx.lineTo(s.x + xx + p.len, yy + 3);
        ctx.stroke();
      });
      var hz = ctx.createLinearGradient(s.x, 0, s.x + s.w, 0);
      hz.addColorStop(0, rgba('#d8a45e', 0.02));
      hz.addColorStop(0.5, rgba('#d8a45e', 0.16));
      hz.addColorStop(1, rgba('#d8a45e', 0.02));
      ctx.fillStyle = hz;
      ctx.fillRect(s.x, s.y, s.w, s.h);
      ctx.restore();
    }

    ctx.restore();
    return { storm: stormA, shelter: shelter };
  }

  // --- Medan 3: arus sungai ------------------------------------------

  function waveY(s, x01, t, k) {
    return s.y + s.h * (0.40 + k * 0.082) +
      Math.sin(x01 * 7.0 + t * (1.5 + k * 0.4) + k) * (9 - k * 1.2) +
      Math.sin(x01 * 13.0 - t * 1.1 + k * 2) * 4;
  }

  function sceneRiver(ctx, r, t, tt) {
    ctx.save();
    var s = stageClip(ctx, r);

    // Tebing seberang di kejauhan
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(s.x, s.y + s.h * 0.42);
    for (var b = 0; b <= 40; b++) {
      var bx = b / 40;
      ctx.lineTo(s.x + bx * s.w, s.y + s.h * 0.30 - Math.sin(bx * 4.2 + 1.1) * 26 - Math.sin(bx * 9) * 9);
    }
    ctx.lineTo(s.x + s.w, s.y + s.h * 0.42);
    ctx.closePath();
    ctx.fillStyle = '#131a3c';
    ctx.fill();
    ctx.strokeStyle = rgba(C.river, 0.28);
    ctx.lineWidth = 1.2;
    ctx.stroke();
    // Pepohonan kecil di tepi seberang
    ctx.fillStyle = '#0e1430';
    for (var tr2 = 0; tr2 < 9; tr2++) {
      var tx = s.x + (0.06 + tr2 * 0.11) * s.w;
      var ty = s.y + s.h * 0.30 - Math.sin((0.06 + tr2 * 0.11) * 4.2 + 1.1) * 26 - Math.sin((0.06 + tr2 * 0.11) * 9) * 9;
      ctx.beginPath();
      ctx.moveTo(tx - 7, ty + 3);
      ctx.lineTo(tx, ty - 16 - (tr2 % 3) * 5);
      ctx.lineTo(tx + 7, ty + 3);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();

    // Air
    var g = ctx.createLinearGradient(0, s.y + s.h * 0.36, 0, s.y + s.h);
    g.addColorStop(0, '#143a54');
    g.addColorStop(1, '#0a172c');
    ctx.fillStyle = g;
    ctx.fillRect(s.x, s.y + s.h * 0.40, s.w, s.h * 0.60);

    // Riak
    for (var k = 0; k < 7; k++) {
      ctx.strokeStyle = rgba(C.river, 0.06 + k * 0.03);
      ctx.lineWidth = k === 0 ? 2 : 1.2;
      ctx.beginPath();
      for (var i = 0; i <= 60; i++) {
        var x01 = i / 60;
        ctx.lineTo(s.x + x01 * s.w, waveY(s, x01, t, k));
      }
      ctx.stroke();
    }

    // Tanda arah arus
    ctx.save();
    for (var c = 0; c < 5; c++) {
      var cx = s.x + ((t * 46 + c * 120) % (s.w + 120)) - 60;
      var cy = s.y + s.h * 0.82 + Math.sin(c) * 12;
      ctx.globalAlpha = 0.22;
      ctx.strokeStyle = C.river;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - 12, cy - 7);
      ctx.lineTo(cx, cy);
      ctx.lineTo(cx - 12, cy + 7);
      ctx.stroke();
    }
    ctx.restore();

    // Batu jeram muncul saat rintangan
    var rockA = env(tt, 8.0, 14.6, 0.7, 1.2);
    var rockX = s.x + s.w * 0.66;
    var rockY = waveY(s, 0.66, t, 2) + 26;
    if (rockA > 0) {
      ctx.save();
      ctx.globalAlpha = rockA;
      ctx.fillStyle = '#2b2547';
      ctx.beginPath();
      ctx.moveTo(rockX - 44, rockY + 20);
      ctx.lineTo(rockX - 16, rockY - 34);
      ctx.lineTo(rockX + 10, rockY - 16);
      ctx.lineTo(rockX + 42, rockY + 20);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = rgba(C.river, 0.5);
      ctx.lineWidth = 1.4;
      ctx.stroke();
      // Buih
      for (var b = 0; b < 12; b++) {
        var bp = (t * 1.6 + b * 0.29) % 1;
        ctx.globalAlpha = rockA * (1 - bp) * 0.5;
        ctx.fillStyle = '#cfefe9';
        ctx.beginPath();
        ctx.arc(rockX - 36 - bp * 46, rockY + 16 + Math.sin(b * 2 + t * 3) * 7, 2.4 + bp * 3, 0, 6.2832);
        ctx.fill();
      }
      ctx.restore();
    }

    // Rakit hanyut; saat jeram: menunduk lalu berbelok mengikuti arus
    var drift;
    if (tt < 8.6) drift = 0.12 + tt * 0.05;
    else drift = clamp(0.55 + (tt - 8.6) * 0.038, 0, 0.95);
    var bx = s.x + 30 + clamp(drift, 0, 0.95) * (s.w - 80);
    var steer = env(tt, 9.4, 14.6, 1.2, 2.0);
    var wobble = env(tt, 9.6, 11.2, 0.35, 0.9);
    var by = waveY(s, (bx - s.x) / s.w, t, 2) - 6 - steer * 30;
    var tilt = Math.sin(t * 2.2) * 0.06 + wobble * Math.sin(t * 9) * 0.16 - steer * 0.07;

    ctx.save();
    ctx.translate(bx, by);
    ctx.rotate(tilt);

    // Galah panjang: bergantian menancap ke kiri dan ke kanan
    var stroke = Math.sin(t * 1.15);
    var side = stroke > 0 ? 1 : -1;
    var dip = 0.5 + 0.5 * Math.cos(t * 3.4);
    var poleDX = (34 + dip * 16) * side;
    var poleDY = 86;
    var poleAng = Math.atan2(poleDX, poleDY);
    var handX = -6, handY = -54;
    ctx.strokeStyle = rgba('#efe9ff', 0.72);
    ctx.lineWidth = 3.2;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(handX - poleDX * 0.34, handY - poleDY * 0.34);
    ctx.lineTo(handX + poleDX * 0.9, handY + poleDY * 0.9);
    ctx.stroke();

    // Rakit
    ctx.fillStyle = '#5a4433';
    roundRect(ctx, -48, 0, 96, 14, 7);
    ctx.fill();
    ctx.strokeStyle = rgba(C.river, 0.5);
    ctx.lineWidth = 1.3;
    ctx.stroke();
    ctx.strokeStyle = rgba('#000000', 0.3);
    ctx.lineWidth = 1;
    [-24, 0, 24].forEach(function (lx) {
      ctx.beginPath();
      ctx.moveTo(lx, 1.5);
      ctx.lineTo(lx, 12.5);
      ctx.stroke();
    });

    // Penggalah berdiri; tubuh merendah saat melewati jeram
    var crouch = clamp(wobble * 0.85 + steer * 0.35, 0, 1);
    var pd = posePole(poleAng, crouch, Math.sin(t * 2.6));
    figure(ctx, {
      x: 0, y: -36 + pd.bob, s: 0.6, color: C.river,
      lean: 0.06 + crouch * 0.22,
      arms: pd.arms, legs: pd.legs, pack: false, glow: true,
      flag: KADUS[2].color, flagPhase: t * 4.5
    });
    ctx.restore();

    // Jejak air di belakang rakit
    ctx.save();
    ctx.globalAlpha = 0.35;
    ctx.strokeStyle = rgba('#cfefe9', 0.5);
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(bx - 50, by + 14);
    ctx.quadraticCurveTo(bx - 100, by + 20, bx - 150, by + 12);
    ctx.stroke();
    ctx.restore();

    ctx.restore();
    return { steer: steer };
  }

  /* ------------------------------------------------------------------ *
   * Babak 2 — perakitan tiga kartu
   * ------------------------------------------------------------------ */

  function sceneField(ctx, t, a) {
    if (a <= 0) return;
    // Beat internal kartu diregangkan ke seluruh durasi babak.
    var tt = (t - FIELD_START) * FIELD_RATE;
    ctx.save();
    ctx.globalAlpha = a;

    var cards = [
      { idx: '01', title: 'TEBING BATU', color: C.rock,
        method: 'Pegangan kuat, ritme napas,\ntiga titik selalu menempel.',
        note: 'Beradaptasi: pindah ke jalur retakan kedua' },
      { idx: '02', title: 'GURUN PASIR', color: C.sand,
        method: 'Langkah pendek, hemat tenaga,\nberhenti saat badai lewat.',
        note: 'Beradaptasi: berlindung dulu, baru melangkah' },
      { idx: '03', title: 'ARUS SUNGAI', color: C.river,
        method: 'Membaca arus, tubuh rendah,\nmengikuti — bukan melawan.',
        note: 'Beradaptasi: haluan digeser, arus dipakai' }
    ];

    for (var i = 0; i < 3; i++) {
      var appear = smooth(seg(t, FIELD_START + i * 0.8, FIELD_START + 2.0 + i * 0.8));
      var r = cardFrame(ctx, i, appear);
      ctx.save();
      ctx.globalAlpha *= appear;
      cardHeader(ctx, r, cards[i].idx, cards[i].title, cards[i].color, 1, KADUS[i].name);
      if (i === 0) sceneCliff(ctx, r, t, tt);
      else if (i === 1) sceneDune(ctx, r, t, tt);
      else sceneRiver(ctx, r, t, tt);

      // Garis bawah panggung
      ctx.strokeStyle = rgba('#ffffff', 0.08);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(r.x + CARD.pad, r.y + 496);
      ctx.lineTo(r.x + r.w - CARD.pad, r.y + 496);
      ctx.stroke();

      var noteA = smooth(seg(tt, 9.4 + i * 0.3, 10.4 + i * 0.3));
      cardFooter(ctx, r, cards[i].color, cards[i].method, cards[i].note, noteA, 1);
      ctx.restore();
    }

    ctx.restore();
  }

  /* ------------------------------------------------------------------ *
   * Babak 3 — Puncak bersama
   * ------------------------------------------------------------------ */

  var PEAK = { x: W * 0.5, y: 502 };

  function hump(x, cx, w, h) {
    var d = (x - cx) / w;
    return h * Math.exp(-d * d);
  }

  // Profil punggungan utama: satu puncak tinggi dengan bahu-bahu di kiri dan kanan.
  function mountainY(x) {
    var y = 1010;
    y -= hump(x, PEAK.x, 430, 1010 - PEAK.y - 70);
    y -= hump(x, PEAK.x + 8, 196, 78); // bahu puncak, cukup lebar untuk istana
    y -= hump(x, 430, 300, 210);
    y -= hump(x, 1520, 340, 250);
    y -= hump(x, 1180, 150, 60);
    y += Math.sin(x * 0.017) * 9 + Math.sin(x * 0.041 + 1.3) * 5;
    return y;
  }

  // Punggungan latar belakang (perspektif udara)
  function backY(x, layer) {
    var cfg = [
      { cx: 520, w: 520, h: 420, base: 940, ph: 0.7 },
      { cx: 1420, w: 480, h: 500, base: 980, ph: 2.9 }
    ][layer];
    return cfg.base - hump(x, cfg.cx, cfg.w, cfg.h) -
      hump(x, cfg.cx + 640, cfg.w * 0.7, cfg.h * 0.55) +
      Math.sin(x * 0.011 + cfg.ph) * 18 + Math.sin(x * 0.03 + cfg.ph * 2) * 8;
  }

  /**
   * Istana di puncak: teras, gerbang, dua menara sudut, dan menara utama
   * berkubah. `appear` 0..1 mengatur kemunculan, `lit` menyalakan jendela.
   */
  function palace(ctx, cx, baseY, appear, lit, dawn, t) {
    if (appear <= 0) return;
    var body = mix('#1a1338', '#3a2650', dawn);
    var roof = mix('#2b2058', '#6b3f63', dawn);
    var edge = rgba('#ffffff', 0.22 + dawn * 0.2);
    var warm = rgba('#ffd79a', 0.85 * lit);

    ctx.save();
    ctx.translate(cx, baseY);
    ctx.globalAlpha *= appear;
    ctx.scale(1, lerp(0.86, 1, smooth(appear)));

    // Kaki batu: menyatukan teras dengan punggungan gunung di bawahnya
    ctx.beginPath();
    ctx.moveTo(-132, -10);
    ctx.lineTo(132, -10);
    ctx.lineTo(168, 56);
    ctx.lineTo(-168, 56);
    ctx.closePath();
    ctx.fillStyle = mix('#0d0a26', '#1e1234', dawn * 0.75);
    ctx.fill();
    ctx.strokeStyle = rgba('#ffffff', 0.09 + dawn * 0.08);
    ctx.lineWidth = 1;
    ctx.stroke();

    // Teras
    ctx.fillStyle = mix('#141029', '#2e1f3f', dawn);
    roundRect(ctx, -132, -16, 264, 20, 5);
    ctx.fill();
    ctx.strokeStyle = edge;
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Sayap kiri & kanan
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.rect(-108, -78, 216, 62);
    ctx.fill();
    ctx.strokeStyle = edge;
    ctx.stroke();

    // Atap sayap
    ctx.fillStyle = roof;
    ctx.beginPath();
    ctx.moveTo(-116, -78);
    ctx.lineTo(0, -104);
    ctx.lineTo(116, -78);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = edge;
    ctx.stroke();

    // Menara sudut
    [-108, 108].forEach(function (tx) {
      ctx.fillStyle = body;
      ctx.beginPath();
      ctx.rect(tx - 17, -122, 34, 106);
      ctx.fill();
      ctx.strokeStyle = edge;
      ctx.stroke();
      ctx.fillStyle = roof;
      ctx.beginPath();
      ctx.moveTo(tx - 23, -122);
      ctx.lineTo(tx, -164);
      ctx.lineTo(tx + 23, -122);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = edge;
      ctx.stroke();
      // Jendela menara
      ctx.fillStyle = warm;
      ctx.beginPath();
      ctx.rect(tx - 4, -104, 8, 13);
      ctx.rect(tx - 4, -74, 8, 13);
      ctx.fill();
    });

    // Menara utama + kubah
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.rect(-31, -168, 62, 90);
    ctx.fill();
    ctx.strokeStyle = edge;
    ctx.stroke();
    ctx.fillStyle = roof;
    ctx.beginPath();
    ctx.moveTo(-38, -168);
    ctx.quadraticCurveTo(0, -232, 38, -168);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = edge;
    ctx.stroke();

    // Tiang & bendera puncak istana
    ctx.strokeStyle = rgba('#ffffff', 0.85);
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(0, -214);
    ctx.lineTo(0, -268);
    ctx.stroke();
    pennant(ctx, 0, -268, 40, 19, rgba(C.brand, 0.92), t * 5);

    // Gerbang & jendela
    ctx.fillStyle = warm;
    ctx.beginPath();
    ctx.moveTo(-17, -16);
    ctx.lineTo(-17, -46);
    ctx.quadraticCurveTo(0, -66, 17, -46);
    ctx.lineTo(17, -16);
    ctx.closePath();
    ctx.fill();
    [-84, -58, 58, 84].forEach(function (wx) {
      ctx.beginPath();
      ctx.rect(wx - 6, -62, 12, 16);
      ctx.fill();
    });
    ctx.beginPath();
    ctx.rect(-8, -150, 16, 20);
    ctx.fill();

    // Cahaya hangat yang keluar dari bangunan
    if (lit > 0) {
      var gl = ctx.createRadialGradient(0, -70, 10, 0, -70, 300);
      gl.addColorStop(0, rgba('#ffc987', 0.2 * lit));
      gl.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gl;
      ctx.fillRect(-300, -370, 600, 400);
    }
    ctx.restore();
  }

  function fillProfile(ctx, fn, color, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.moveTo(-20, H + 20);
    for (var x = -20; x <= W + 20; x += 12) ctx.lineTo(x, fn(x));
    ctx.lineTo(W + 20, H + 20);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  // Tiga jalur: punggungan kiri, muka tebing tengah (zig-zag), punggungan kanan.
  function routeAt(which, p) {
    if (which === 1) {
      var y = lerp(H + 70, PEAK.y + 34, easeIn(p) * 0.35 + p * 0.65);
      var x = PEAK.x + Math.sin(p * Math.PI * 3.1 + 0.4) * (1 - p) * 250 - 30 * (1 - p);
      return [x, y];
    }
    var x0 = which === 0 ? 60 : 1860;
    var xx = lerp(x0, PEAK.x, smooth(p));
    return [xx, mountainY(xx) - 5];
  }

  function drawRoute(ctx, which, prog, color) {
    if (prog <= 0) return;
    ctx.save();
    ctx.strokeStyle = rgba(color, 0.6);
    ctx.lineWidth = 2.4;
    ctx.setLineDash([10, 12]);
    ctx.lineCap = 'round';
    ctx.shadowColor = rgba(color, 0.4);
    ctx.shadowBlur = 10;
    ctx.beginPath();
    for (var i = 0; i <= 90; i++) {
      var q = routeAt(which, (i / 90) * prog);
      if (i === 0) ctx.moveTo(q[0], q[1]); else ctx.lineTo(q[0], q[1]);
    }
    ctx.stroke();
    ctx.restore();
  }

  function sceneSummit(ctx, t, a, dawn) {
    if (a <= 0) return;
    var tt = (t - SUMMIT_START) * SUMMIT_RATE;
    ctx.save();
    ctx.globalAlpha = a;

    // Matahari terbit di sisi kanan puncak
    var sunP = smooth(seg(tt, 3.0, 8.0));
    if (sunP > 0) {
      var sx = PEAK.x + 350, sy = lerp(660, 470, sunP);
      var rg = ctx.createRadialGradient(sx, sy, 0, sx, sy, 460);
      rg.addColorStop(0, rgba('#ffd9a0', 0.55 * sunP));
      rg.addColorStop(0.4, rgba('#ff9d5c', 0.2 * sunP));
      rg.addColorStop(1, rgba('#ff9d5c', 0));
      ctx.fillStyle = rg;
      ctx.fillRect(sx - 460, sy - 460, 920, 920);
      ctx.fillStyle = rgba('#fff1d4', 0.85 * sunP);
      ctx.beginPath();
      ctx.arc(sx, sy, 46, 0, 6.2832);
      ctx.fill();
    }

    // Punggungan berlapis (perspektif udara)
    fillProfile(ctx, function (x) { return backY(x, 0); }, mix('#241a52', C.dawn1, dawn * 0.55), 0.5);
    fillProfile(ctx, function (x) { return backY(x, 1); }, mix('#1b1442', '#4a2a5c', dawn * 0.6), 0.7);
    fillProfile(ctx, mountainY, mix('#0d0a26', '#1e1234', dawn * 0.75), 1);

    // Puncak bersalju: tudung yang mengikuti punggungan lalu menipis ke bawah
    ctx.save();
    var capW = 340;
    ctx.beginPath();
    var cx0;
    for (cx0 = -capW; cx0 <= capW; cx0 += 8) ctx.lineTo(PEAK.x + cx0, mountainY(PEAK.x + cx0));
    for (cx0 = capW; cx0 >= -capW; cx0 -= 8) {
      var taper = Math.pow(Math.cos((cx0 / capW) * Math.PI / 2), 1.2);
      ctx.lineTo(PEAK.x + cx0, mountainY(PEAK.x + cx0) + (210 + Math.sin(cx0 * 0.05) * 12) * taper);
    }
    ctx.closePath();
    var snow = ctx.createLinearGradient(0, PEAK.y - 10, 0, PEAK.y + 175);
    snow.addColorStop(0, rgba('#ffffff', 0.5 + dawn * 0.3));
    snow.addColorStop(0.55, rgba('#ffffff', 0.14 + dawn * 0.1));
    snow.addColorStop(1, rgba('#ffffff', 0));
    ctx.fillStyle = snow;
    ctx.fill();
    ctx.restore();

    // Cahaya yang jatuh di lereng kanan (radial supaya tanpa tepi keras)
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(-20, H + 20);
    for (var mx = -20; mx <= W + 20; mx += 8) ctx.lineTo(mx, mountainY(mx));
    ctx.lineTo(W + 20, H + 20);
    ctx.closePath();
    ctx.clip();
    var lit = ctx.createRadialGradient(PEAK.x + 140, PEAK.y + 90, 20, PEAK.x + 140, PEAK.y + 90, 700);
    lit.addColorStop(0, rgba(dawn > 0.3 ? '#ffb27a' : '#8f7fd8', 0.22 + dawn * 0.26));
    lit.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = lit;
    ctx.fillRect(0, PEAK.y - 40, W, H);

    // Alur-alur batu supaya lereng tidak terbaca datar
    ctx.strokeStyle = rgba('#ffffff', 0.05 + dawn * 0.04);
    ctx.lineWidth = 1.4;
    for (var gl = -4; gl <= 4; gl++) {
      if (gl === 0) continue;
      var gx = PEAK.x + gl * 26;
      ctx.beginPath();
      ctx.moveTo(gx, mountainY(gx) + 20);
      ctx.quadraticCurveTo(PEAK.x + gl * 170, PEAK.y + 330, PEAK.x + gl * 260, H);
      ctx.stroke();
    }
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = rgba('#ffffff', 0.16 + dawn * 0.18);
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    for (var rx = -20; rx <= W + 20; rx += 8) ctx.lineTo(rx, mountainY(rx));
    ctx.stroke();
    ctx.restore();

    // Tiga jalur menuju satu puncak
    var cols = [C.rock, C.sand, C.river];
    var arrive = [];
    for (var i = 0; i < 3; i++) {
      var prog = smooth(clamp(seg(tt, 0.7 + i * 0.35, 5.4 + i * 0.3), 0, 1));
      drawRoute(ctx, i, prog, cols[i]);
      arrive.push(prog);
    }

    // Istana Sukakarya berdiri di titik tertinggi
    var castleUp = smooth(seg(tt, 3.4, 5.2));
    var castleLit = smooth(seg(tt, 4.6, 6.6));
    palace(ctx, PEAK.x, mountainY(PEAK.x) + 6, castleUp, castleLit, dawn, t);
    if (castleUp > 0.4) {
      label(ctx, 'ISTANA SUKAKARYA', PEAK.x, mountainY(PEAK.x) + 96, {
        size: 23, weight: 700, color: '#ffe1b0', tracking: 6.5, align: 'center',
        alpha: smooth(seg(tt, 4.8, 6.0))
      });
    }

    // Rombongan berdiri di punggungan kiri, di depan istana
    var slots = [-424, -326, -228];

    for (var j = 0; j < 3; j++) {
      var p = arrive[j];
      var pos = routeAt(j, p);
      var atTop = p >= 0.999;
      var sx2 = PEAK.x + slots[j];
      var x = atTop ? sx2 : pos[0];
      var y = atTop ? mountainY(sx2) - 4 : pos[1];
      var moving = !atTop;
      var pose;
      if (moving) {
        pose = poseWalk(t * 5.0 * (SUMMIT_RATE * 2.6) + j * 1.7, 0.85);
      } else {
        var breathe = Math.sin(t * 1.6 + j) * 0.03;
        pose = {
          arms: [[0.16 + breathe, 0.26], [-0.16 + breathe, -0.26]],
          legs: [[0.12, 0.1], [-0.12, -0.1]],
          bob: Math.sin(t * 1.6 + j) * 1.4
        };
        // Sesaat setelah tiba: satu tangan terangkat pelan, lalu turun lagi
        var wave = env(tt, 6.0 + j * 0.45, 7.8 + j * 0.45, 0.6, 0.8);
        pose.arms[0] = [lerp(0.16, Math.PI * 0.78, wave), lerp(0.26, Math.PI * 0.9, wave)];
      }
      var fs = atTop ? 0.52 : 0.46;
      var planted = smooth(seg(tt, 6.0 + j * 0.5, 7.2 + j * 0.5));

      figure(ctx, {
        x: x, y: y - 58 * fs + pose.bob, s: fs, color: cols[j],
        lean: moving ? 0.14 : 0.02, flip: !moving ? false : j === 2,
        arms: pose.arms, legs: pose.legs, pack: true, glow: true,
        // Bendera pindah dari punggung ke tanah begitu ditancapkan
        flag: planted > 0.9 ? undefined : cols[j], flagPhase: t * 4 + j
      });

      // Bendera kemenangan yang ditancapkan di sisi masing-masing
      if (atTop && planted > 0) {
        ctx.save();
        ctx.globalAlpha *= planted;
        var px2 = sx2 + 34;
        var py2 = mountainY(px2) - 2;
        var poleH = 96 * planted;
        ctx.strokeStyle = rgba('#f6f2ff', 0.9);
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(px2, py2);
        ctx.lineTo(px2, py2 - poleH);
        ctx.stroke();
        pennant(ctx, px2, py2 - poleH, 52 * planted, 24, rgba(cols[j], 0.92), t * 4.2 + j * 1.3);
        label(ctx, KADUS[j].name, px2 + 6, py2 + 26, {
          size: 17, weight: 700, color: cols[j], tracking: 2.6, align: 'center',
          alpha: smooth(seg(tt, 6.8 + j * 0.5, 7.8 + j * 0.5))
        });
        ctx.restore();
      }
    }

    // Judul di atas puncak
    var head = smooth(seg(tt, 7.4, 8.6));
    if (head > 0) {
      ctx.save();
      ctx.globalAlpha *= head;
      var hy = 168;
      var hg = ctx.createLinearGradient(PEAK.x - 460, 0, PEAK.x + 460, 0);
      hg.addColorStop(0, C.rock);
      hg.addColorStop(0.5, '#ffffff');
      hg.addColorStop(1, C.river);
      ctx.font = font(52, 700);
      ctx.fillStyle = hg;
      tracked(ctx, 'BENDERA KEMENANGAN', PEAK.x, hy, 9, 'center');
      var rw = 300 * head;
      var rg2 = ctx.createLinearGradient(PEAK.x - rw, 0, PEAK.x + rw, 0);
      rg2.addColorStop(0, rgba(C.brand, 0));
      rg2.addColorStop(0.5, rgba('#ffe1b0', 0.75));
      rg2.addColorStop(1, rgba(C.brand, 0));
      ctx.strokeStyle = rg2;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(PEAK.x - rw, hy + 24);
      ctx.lineTo(PEAK.x + rw, hy + 24);
      ctx.stroke();
      ctx.restore();
    }

    ctx.restore();
  }

  /* ------------------------------------------------------------------ *
   * Teks naratif
   * ------------------------------------------------------------------ */

  var CAPTIONS = [
    [10.5, 16.0, 'Tiga orang berangkat menuju satu tujuan yang sama.', C.text],
    [16.4, 22.0, 'Kadus 1 lewat tebing batu, Kadus 2 lewat gurun pasir, Kadus 3 lewat arus sungai.', C.text],
    [22.4, 28.0, 'Masing-masing membawa benderanya sendiri — dan caranya sendiri.', C.text],
    [28.4, 34.0, 'Cara yang menyelamatkan di tebing tidak berguna di atas pasir.', C.muted],
    [34.4, 40.0, 'Lalu rintangan datang: batu runtuh, badai pasir, jeram yang deras.', C.text],
    [40.4, 45.6, 'Rintangan tidak bisa dipilih —', C.muted],
    [45.8, 50.4, 'yang bisa dipilih adalah cara menghadapinya: menyesuaikan, bukan memaksa.', C.text],
    [52.0, 58.0, 'Jalur berbeda, langkah berbeda, tetapi arahnya satu.', C.text],
    [58.4, 64.0, 'Di puncak berdiri Istana Sukakarya — tempat ketiganya akhirnya bertemu.', C.text],
    [64.4, 70.4, 'Tiga bendera kemenangan ditancapkan berdampingan.', C.text]
  ];

  function captions(ctx, t) {
    CAPTIONS.forEach(function (c) {
      var a = env(t, c[0], c[1], 0.55, 0.55);
      if (a <= 0) return;
      ctx.save();
      ctx.globalAlpha = a;
      var y = 986;
      ctx.fillStyle = rgba(C.brand, 0.9);
      ctx.beginPath();
      ctx.arc(W / 2 - 0, y - 44, 3.2, 0, 6.2832);
      ctx.fill();
      label(ctx, c[2], W / 2, y, { size: 31, color: c[3], align: 'center', tracking: 0.4 });
      ctx.restore();
    });
  }

  function sceneOutro(ctx, t) {
    var tt = t - OUTRO_START;
    if (tt <= 0) return;

    // Panel gelap lembut supaya teks tetap terbaca di atas langit fajar
    var panel = smooth(seg(tt, 0, 0.9));
    ctx.save();
    ctx.globalAlpha = panel * 0.72;
    var g = ctx.createLinearGradient(0, 620, 0, H);
    g.addColorStop(0, 'rgba(4,3,14,0)');
    g.addColorStop(0.45, 'rgba(4,3,14,0.85)');
    g.addColorStop(1, 'rgba(4,3,14,0.96)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 620, W, H - 620);
    ctx.restore();

    var lines = [
      [1.0, 'Tidak ada satu cara yang sempurna.', 34, C.text],
      [3.2, 'Yang berhasil hari ini belum tentu berhasil di medan lain.', 34, C.text],
      [5.4, 'Maka kekuatan sesungguhnya bukan pada caranya —', 30, C.muted],
      [7.0, 'tapi pada kemampuan menyesuaikan diri dan bertahan.', 30, C.muted]
    ];
    lines.forEach(function (l, i) {
      var a = smooth(seg(tt, l[0], l[0] + 1.2));
      if (a <= 0) return;
      ctx.save();
      ctx.globalAlpha = a * (1 - smooth(seg(tt, 10.2, 11.2)));
      ctx.translate(0, (1 - easeOut(a)) * 14);
      label(ctx, l[1], W / 2, 760 + i * 52, { size: l[2], color: l[3], align: 'center', tracking: 0.3 });
      ctx.restore();
    });

    // Kalimat penutup
    var last = DURATION - OUTRO_START;
    var fa = smooth(seg(tt, 11.0, 12.4)) * (1 - smooth(seg(tt, last - 1.2, last - 0.4)));
    if (fa > 0) {
      ctx.save();
      ctx.globalAlpha = fa;
      var tg = ctx.createLinearGradient(W / 2 - 520, 0, W / 2 + 520, 0);
      tg.addColorStop(0, C.rock);
      tg.addColorStop(0.5, '#ffffff');
      tg.addColorStop(1, C.river);
      ctx.font = font(46, 700);
      ctx.fillStyle = tg;
      tracked(ctx, 'TETAP TANGGUH. TETAP BELAJAR. TETAP RENDAH HATI.', W / 2, 812, 3.2, 'center');
      label(ctx, 'Berhasil melewati satu rintangan bukan tanda hebat — hanya tanda bahwa cara itu cocok, kali ini.',
        W / 2, 866, { size: 25, color: C.muted, align: 'center' });

      // Tanda penutup: titik + TKJ 3, ditengahkan
      ctx.font = font(28, 700);
      var mark = 'TKJ 3';
      var mw = ctx.measureText(mark).width + 6 * (mark.length - 1);
      var mx = W / 2 - (mw + 26) / 2;
      ctx.fillStyle = C.brand;
      ctx.beginPath();
      ctx.arc(mx + 7, 946, 7, 0, 6.2832);
      ctx.fill();
      ctx.fillStyle = C.text;
      ctx.textBaseline = 'alphabetic';
      tracked(ctx, mark, mx + 26, 955, 6, 'left');
      ctx.restore();
    }
  }

  /* ------------------------------------------------------------------ *
   * Render utama
   * ------------------------------------------------------------------ */

  function render(ctx, time) {
    var t = ((time % DURATION) + DURATION) % DURATION;

    var aIntro = env(t, 0, 8.8, 0.8, 1.0);
    var aField = env(t, FIELD_START, FIELD_START + FIELD_SPAN + 1.6, 1.0, 1.2);
    var aSummit = env(t, SUMMIT_START, DURATION, 1.4, 0.8);
    var dawn = smooth(seg(t, SUMMIT_START + 7, SUMMIT_START + 20)) * Math.min(1, aSummit * 1.6);

    ctx.save();
    ctx.clearRect(0, 0, W, H);
    backdrop(ctx, t, dawn);

    sceneIntro(ctx, t, aIntro);
    sceneField(ctx, t, aField);
    sceneSummit(ctx, t, aSummit, dawn);

    captions(ctx, t);
    sceneOutro(ctx, t);

    var chap =
      t < 8.0 ? '' :
      t < 28.0 ? 'BAB 01 · TIGA MEDAN' :
      t < 50.0 ? 'BAB 02 · RINTANGAN' :
      t < 62.0 ? 'BAB 03 · SATU PUNCAK' :
      t < 72.0 ? 'BAB 04 · ISTANA SUKAKARYA' : 'BAB 05 · RENDAH HATI';
    chrome(ctx, t, chap, env(t, 0.4, DURATION, 1.2, 0.8) * 0.95);

    vignette(ctx);

    // Fade masuk/keluar supaya pengulangan terasa mulus
    var edge = 1 - Math.min(smooth(seg(t, 0, 0.8)), smooth(1 - seg(t, DURATION - 0.9, DURATION)));
    if (edge > 0) {
      ctx.fillStyle = 'rgba(3,2,10,' + edge + ')';
      ctx.fillRect(0, 0, W, H);
    }
    ctx.restore();
  }

  global.AXTOAnim = { W: W, H: H, FPS: FPS, DURATION: DURATION, render: render };
})(typeof window !== 'undefined' ? window : globalThis);
