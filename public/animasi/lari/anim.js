/*
 * "GARIS AKHIR" — dua pelari, satu garis akhir.
 *
 * Pelari pertama mencuri start dan langsung unggul jauh; pelari kedua
 * tertinggal, menjaga ritme, lalu menyalip di meter-meter terakhir.
 *
 * Seperti animasi AXTO lainnya, render(ctx, t) bersifat deterministik: waktu
 * yang sama selalu menghasilkan frame yang sama, sehingga tampilan di browser
 * dan hasil render video identik.
 */
(function (global) {
  'use strict';

  var W = 1920;
  var H = 1080;
  var FPS = 30;
  var DURATION = 178;

  /* ------------------------------------------------------------------ *
   * Utilitas
   * ------------------------------------------------------------------ */

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function seg(t, a, b) { return clamp((t - a) / (b - a), 0, 1); }
  function smooth(t) { return t * t * (3 - 2 * t); }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
  function easeIn(t) { return t * t * t; }
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
    return 'rgb(' + Math.round(lerp((a >> 16) & 255, (b >> 16) & 255, t)) + ',' +
      Math.round(lerp((a >> 8) & 255, (b >> 8) & 255, t)) + ',' +
      Math.round(lerp(a & 255, b & 255, t)) + ')';
  }

  var FONT = '"Liberation Sans", "DejaVu Sans", Arial, sans-serif';
  function font(size, weight) { return (weight || 400) + ' ' + size + 'px ' + FONT; }

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
    if (o.alpha !== undefined && o.alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha *= o.alpha === undefined ? 1 : o.alpha;
    ctx.font = font(o.size || 20, o.weight || 400);
    ctx.fillStyle = o.color || '#ffffff';
    ctx.textBaseline = o.baseline || 'alphabetic';
    if (o.shadow) { ctx.shadowColor = 'rgba(0,0,0,0.55)'; ctx.shadowBlur = o.shadow; }
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
   * Warna & dunia
   * ------------------------------------------------------------------ */

  var C = {
    night: '#0a0a1f',
    dusk: '#241a44',
    dawn: '#7a4a6b',
    warm: '#e8865c',
    gold: '#ffc978',
    day: '#79a8d8',
    track: '#8c3b32',
    trackLine: '#f0e6dd',
    grass: '#1d3a2a',
    stand: '#141a33',
    crowd: '#2a2f52',
    text: '#f6f3ff',
    muted: '#b3aad4',
    faint: '#7b74a6',
    one: '#ff7a4d',   // NO NAME
    two: '#37d6c4'    // JOFA
  };

  var GROUND = 726;          // garis pijak pelari di layar (zoom 1)
  var UNITS_PER_M = 4;       // 1 meter = 4 satuan dunia
  var RACE_LEN = 4000;       // 1000 meter
  var BAR = 118;             // tinggi bilah sinematik atas/bawah
  var STAND_TOP = 296;       // batas atas tribun
  var STAND_BOT = 470;       // batas bawah tribun
  var RUNNER_SCALE = 1.9;    // ukuran dasar pelari pada zoom 1
  var NAME_A = 'NO NAME';
  var NAME_B = 'JOFA';
  var LANE_A = { dy: -84, s: 0.88 };  // lajur jauh (NO NAME)
  var LANE_B = { dy: 52, s: 1.06 };   // lajur dekat (JOFA)
  var TRACK_TOP = 586;                // tepi atas lintasan

  var GUN = 23.0;
  var FALSE_START = 21.0;

  // Titik-titik posisi (detik, satuan dunia); di antaranya diinterpolasi halus.
  var TRACK_A = [
    [0, 0], [FALSE_START, 0], [23, 120], [30, 620], [45, 1500], [60, 2100],
    [78, 2620], [95, 3000], [110, 3260], [125, 3430], [130, 3480], [137, 3540],
    [140, 3640], [150.5, 4000], [156, 4130], [164, 4190], [178, 4215]
  ];
  var TRACK_B = [
    [0, 0], [GUN, 0], [30, 200], [45, 900], [60, 1560], [78, 2180],
    [95, 2680], [110, 3060], [125, 3350], [130, 3450], [137, 3570],
    [140, 3760], [145, 4000], [151, 4160], [159, 4235], [178, 4265]
  ];

  function posAt(keys, t) {
    if (t <= keys[0][0]) return keys[0][1];
    for (var i = 1; i < keys.length; i++) {
      if (t <= keys[i][0]) {
        var k = smooth(seg(t, keys[i - 1][0], keys[i][0]));
        return lerp(keys[i - 1][1], keys[i][1], k);
      }
    }
    return keys[keys.length - 1][1];
  }

  function speedAt(keys, t) {
    var d = 0.12;
    return (posAt(keys, t + d) - posAt(keys, t - d)) / (2 * d);
  }

  /* ------------------------------------------------------------------ *
   * Data acak yang dibekukan
   * ------------------------------------------------------------------ */

  var rnd = mulberry32(7371);
  var CROWD = (function () {
    var a = [], i;
    for (i = 0; i < 520; i++) {
      a.push({ x: rnd(), row: Math.floor(rnd() * 7), ph: rnd() * 6.283, c: rnd(), s: 0.8 + rnd() * 0.5 });
    }
    return a;
  })();
  var STARS = (function () {
    var a = [], i;
    for (i = 0; i < 90; i++) a.push({ x: rnd() * W, y: rnd() * 420, r: 0.5 + rnd() * 1.3, p: rnd() * 6.283 });
    return a;
  })();
  var GRAIN = (function () {
    var a = [], i;
    for (i = 0; i < 260; i++) a.push({ x: rnd(), y: rnd(), a: rnd() });
    return a;
  })();
  var CLOUDS = (function () {
    var a = [], i;
    for (i = 0; i < 7; i++) a.push({ x: rnd(), y: 120 + rnd() * 220, w: 220 + rnd() * 380, h: 26 + rnd() * 34, a: 0.05 + rnd() * 0.1 });
    return a;
  })();

  /* ------------------------------------------------------------------ *
   * Kamera
   * ------------------------------------------------------------------ */

  function cameraAt(t) {
    var a = posAt(TRACK_A, t), b = posAt(TRACK_B, t);
    var gap = Math.abs(a - b);
    var cam = { x: 0, zoom: 1, shake: 0, focus: 0 };

    if (t < 14) {
      // Pembuka: dorongan pelan ke garis start
      cam.zoom = lerp(0.86, 0.98, smooth(seg(t, 0, 14)));
      cam.x = lerp(300, 170, smooth(seg(t, 0, 14)));
    } else if (t < 31) {
      // Garis start
      cam.zoom = lerp(1.0, 1.05, smooth(seg(t, 14, 31)));
      cam.x = lerp(60, 260, smooth(seg(t, 14, 31))) + (t > GUN ? b * 0.45 : 0);
    } else if (t < 96) {
      // Kamera tetap dekat pada JOFA; NO NAME ditampilkan lewat jendela kecil
      cam.zoom = lerp(1.05, 1.0, smooth(seg(t, 31, 44)));
      cam.x = b + 210;
    } else if (t < 128) {
      // Jarak mengecil: bingkai memuat keduanya, tetapi tidak pernah terlalu jauh
      var fit2 = clamp((W * 0.58) / (gap + 420), 0.7, 1.05);
      cam.zoom = fit2;
      cam.x = (a + b) / 2 + 60;
    } else if (t < 141) {
      // Momen menyalip
      cam.zoom = lerp(1.05, 1.28, smooth(seg(t, 128, 134)));
      cam.x = (a + b) / 2 + 40;
    } else if (t < 152) {
      // Garis akhir
      cam.zoom = lerp(1.28, 1.02, smooth(seg(t, 141, 147)));
      cam.x = lerp((a + b) / 2 + 40, RACE_LEN + 60, smooth(seg(t, 141, 147)));
    } else {
      cam.zoom = lerp(1.02, 0.98, smooth(seg(t, 152, 178)));
      cam.x = b - 60;
    }

    // Guncangan: tembakan start, saat menyalip, dan saat menyentuh garis
    cam.shake = env(t, GUN, GUN + 1.1, 0.05, 0.9) * 9 +
      env(t, 132.5, 136, 0.3, 2.2) * 5 +
      env(t, 144.6, 147.5, 0.15, 2.2) * 8;
    return cam;
  }

  function makeProject(cam, t) {
    var shakeX = Math.sin(t * 47) * cam.shake;
    var shakeY = Math.cos(t * 39) * cam.shake * 0.6;
    return function (wx, depth) {
      var d = depth === undefined ? 1 : depth;
      return (wx - cam.x * d) * cam.zoom + W * 0.44 + shakeX;
    };
  }

  /* ------------------------------------------------------------------ *
   * Pelari
   * ------------------------------------------------------------------ */

  function tip(x, y, ang, len) { return [x + Math.sin(ang) * len, y + Math.cos(ang) * len]; }

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
    return { mid: m, end: e };
  }

  /** 0 = berdiri santai, 1 = posisi siap di balok start. */
  function poseSet(k) {
    return {
      legs: [
        [lerp(0.10, 0.92, k), lerp(0.05, 0.06, k)],    // kaki depan: lutut menekuk
        [lerp(-0.10, -0.40, k), lerp(-0.05, -0.16, k)] // kaki belakang: menahan di balok
      ],
      arms: [
        [lerp(0.14, 0.30, k), lerp(0.18, 0.06, k)],    // tangan menumpu ke lintasan
        [lerp(-0.12, 0.16, k), lerp(-0.16, 0.02, k)]
      ],
      lean: lerp(0.03, 1.12, k),
      bob: lerp(0, 12, k)
    };
  }

  /**
   * Satu pelari. `phase` digerakkan oleh jarak tempuh sehingga kaki tidak
   * pernah "menggeser" di tanah. `tired` menurunkan angkatan lutut, ayunan
   * lengan, dan menegakkan/menunduk-kan badan.
   */
  function athlete(ctx, o) {
    var s = o.s === undefined ? 1 : o.s;
    var p = o.phase;
    var tired = clamp(o.tired || 0, 0, 1);
    var col = o.color;
    var amp = lerp(1, 0.62, tired);

    // Paha mengayun; lutut menekuk paling dalam saat kaki menarik ke belakang
    // (tumit mendekat ke pinggul), lalu lurus lagi saat menapak di depan.
    var thighF, thighB, kneeF, kneeB, armF, armB, bob, lean;
    if (o.pose) {
      // Sikap diam (berdiri / siap di balok start / selebrasi)
      thighF = o.pose.legs[0][0]; kneeF = o.pose.legs[0][1];
      thighB = o.pose.legs[1][0]; kneeB = o.pose.legs[1][1];
      armF = o.pose.arms[0][0]; armB = o.pose.arms[1][0];
      bob = o.pose.bob || 0;
      lean = (o.pose.lean || 0) + (o.leanExtra || 0);
    } else {
      thighF = 0.95 * amp * Math.sin(p);
      thighB = 0.95 * amp * Math.sin(p + Math.PI);
      var bendF = (1.9 * amp) * (0.5 - 0.5 * Math.cos(p));
      var bendB = (1.9 * amp) * (0.5 - 0.5 * Math.cos(p + Math.PI));
      kneeF = thighF - bendF;
      kneeB = thighB - bendB;
      armF = 0.62 * amp * Math.sin(p + Math.PI);
      armB = 0.62 * amp * Math.sin(p);
      bob = -7 * amp * Math.max(0, Math.cos(2 * p)) + tired * 3;
      lean = lerp(0.30, 0.13, tired) + (o.leanExtra || 0);
    }

    var foreF = o.pose ? o.pose.arms[0][1] : armF - 1.45;
    var foreB = o.pose ? o.pose.arms[1][1] : armB - 1.45;
    if (o.armsUp) {
      armF = lerp(armF, Math.PI * 0.86, o.armsUp);
      foreF = lerp(foreF, Math.PI * 0.98, o.armsUp);
      armB = lerp(armB, Math.PI * 0.80, o.armsUp);
      foreB = lerp(foreB, Math.PI * 0.94, o.armsUp);
    }

    ctx.save();
    ctx.translate(o.x, o.y + bob * s);
    ctx.scale(s, s);
    ctx.globalAlpha *= o.alpha === undefined ? 1 : o.alpha;
    if (o.glow) { ctx.shadowColor = rgba(col, 0.4); ctx.shadowBlur = 13; }

    var hip = [0, 0];
    var torsoAng = Math.PI - lean;   // condong ke arah lari
    var sh = tip(hip[0], hip[1], torsoAng, 46);
    var headC = tip(sh[0], sh[1], torsoAng - 0.12 + tired * 0.3, 19);

    // Tungkai & lengan belakang
    ctx.strokeStyle = rgba(col, 0.45);
    limb(ctx, hip[0], hip[1], thighB, 36, kneeB, 36, 12);
    limb(ctx, sh[0], sh[1], armB, 26, foreB, 24, 10);

    // Badan
    ctx.strokeStyle = col;
    ctx.lineWidth = 19;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(hip[0], hip[1]);
    ctx.lineTo(sh[0], sh[1]);
    ctx.stroke();

    // Kepala + ikat rambut/nomor punggung untuk membedakan
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(headC[0], headC[1], 12.5, 0, 6.2832);
    ctx.fill();
    if (o.tail) {
      ctx.strokeStyle = rgba(col, 0.8);
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(headC[0] - 9, headC[1] - 1);
      ctx.quadraticCurveTo(headC[0] - 22 - Math.sin(p * 2) * 4, headC[1] + 3, headC[0] - 25, headC[1] + 11);
      ctx.stroke();
    }

    // Tungkai & lengan depan
    ctx.strokeStyle = col;
    var legF = limb(ctx, hip[0], hip[1], thighF, 36, kneeF, 36, 12);
    limb(ctx, sh[0], sh[1], armF, 26, foreF, 24, 10);

    // Telapak kaki depan
    ctx.lineWidth = 8;
    var toe = tip(legF.end[0], legF.end[1], kneeF + 1.5, 15);
    ctx.beginPath();
    ctx.moveTo(legF.end[0], legF.end[1]);
    ctx.lineTo(toe[0], toe[1]);
    ctx.stroke();

    ctx.restore();
  }

  // Papan nama kecil yang mengikuti pelari
  function nameTag(ctx, x, y, text, color, alpha) {
    if (alpha <= 0) return;
    ctx.save();
    ctx.globalAlpha *= alpha;
    ctx.font = font(23, 700);
    var w = ctx.measureText(text).width + 34;
    roundRect(ctx, x - w / 2, y - 34, w, 34, 8);
    ctx.fillStyle = 'rgba(8,10,24,0.72)';
    ctx.fill();
    ctx.strokeStyle = rgba(color, 0.85);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(text, x, y - 11);
    // Ekor kecil menunjuk ke pelari
    ctx.beginPath();
    ctx.moveTo(x - 7, y);
    ctx.lineTo(x + 7, y);
    ctx.lineTo(x, y + 10);
    ctx.closePath();
    ctx.fillStyle = 'rgba(8,10,24,0.72)';
    ctx.fill();
    ctx.restore();
  }

  // Debu kecil di titik-titik pijakan; posisinya turunan dari jarak, jadi tetap.
  function dust(ctx, project, worldX, speed, tone, dy) {
    var stride = 16;
    var base = Math.floor(worldX / stride) * stride;
    ctx.save();
    for (var i = 0; i < 6; i++) {
      var px = base - i * stride;
      var age = (worldX - px) / (stride * 6);
      if (age <= 0 || age >= 1) continue;
      var sx = project(px, 1);
      if (sx < -60 || sx > W + 60) continue;
      ctx.globalAlpha = (1 - age) * 0.22 * clamp(speed / 30, 0, 1);
      ctx.fillStyle = tone;
      ctx.beginPath();
      ctx.ellipse(sx - 6, GROUND + (dy || 0) + 4, 10 + age * 26, 4 + age * 9, 0, 0, 6.2832);
      ctx.fill();
    }
    ctx.restore();
  }

  /* ------------------------------------------------------------------ *
   * Lingkungan
   * ------------------------------------------------------------------ */

  function skyTone(t) {
    // Malam menjelang subuh → pagi terang saat perlombaan berlangsung
    return smooth(seg(t, 10, 150));
  }

  function drawSky(ctx, t) {
    var d = skyTone(t);
    var g = ctx.createLinearGradient(0, 0, 0, GROUND + 60);
    g.addColorStop(0, mix(C.night, '#1d3f6b', d));
    g.addColorStop(0.45, mix(C.dusk, '#4f6f9e', d));
    g.addColorStop(0.78, mix(C.dawn, C.warm, d * 0.85));
    g.addColorStop(1, mix('#3a2350', C.gold, d * 0.8));
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, GROUND + 60);

    ctx.save();
    STARS.forEach(function (s) {
      ctx.globalAlpha = (0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 0.9 + s.p))) * (1 - d) * 0.8;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, 6.2832);
      ctx.fill();
    });
    ctx.restore();

    // Matahari yang perlahan naik
    var sunY = lerp(700, 300, d);
    var sunX = W * 0.72;
    var rg = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, 520);
    rg.addColorStop(0, rgba('#ffd9a0', 0.5 * d + 0.1));
    rg.addColorStop(0.35, rgba('#ff9d5c', 0.16 * d));
    rg.addColorStop(1, rgba('#ff9d5c', 0));
    ctx.fillStyle = rg;
    ctx.fillRect(sunX - 520, sunY - 520, 1040, 1040);
    ctx.fillStyle = rgba('#fff0cf', 0.85 * d);
    ctx.beginPath();
    ctx.arc(sunX, sunY, 54, 0, 6.2832);
    ctx.fill();

    ctx.save();
    ctx.filter = 'blur(9px)';
    ctx.beginPath();
    CLOUDS.forEach(function (c, i) {
      var x = ((c.x + t * 0.004 * (0.4 + i * 0.1)) % 1.3 - 0.15) * (W + 500) - 250;
      ctx.moveTo(x + c.w / 2, c.y);
      ctx.ellipse(x, c.y, c.w / 2, c.h / 2, 0, 0, 6.2832);
    });
    ctx.globalAlpha = 0.1 * (0.5 + d);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.restore();
    ctx.filter = 'none';
  }

  function drawStands(ctx, project, t, roar) {
    var d = skyTone(t);
    // Tribun jauh (dengan blur tipis supaya terasa berjarak)
    ctx.save();
    var topY = STAND_TOP, botY = STAND_BOT;
    ctx.fillStyle = mix(C.stand, '#2b3157', d * 0.45);
    ctx.fillRect(0, topY, W, botY - topY);
    // Undakan tribun
    ctx.strokeStyle = 'rgba(0,0,0,0.35)';
    ctx.lineWidth = 2;
    for (var tier = 1; tier < 7; tier++) {
      var ty = topY + (botY - topY) * tier / 7;
      ctx.beginPath();
      ctx.moveTo(0, ty);
      ctx.lineTo(W, ty);
      ctx.stroke();
    }
    // Atap tribun
    ctx.fillStyle = '#0b0f26';
    ctx.fillRect(0, topY - 16, W, 18);

    // Penonton
    var shift = project(0, 0.25);
    CROWD.forEach(function (p) {
      var x = ((p.x * 2600 + shift * 0.15) % 2600) - 300;
      if (x < -40 || x > W + 40) return;
      var y = lerp(topY + 14, botY - 12, p.row / 6) + Math.sin(t * 3 + p.ph) * (0.8 + roar * 5);
      ctx.globalAlpha = 0.55 + p.c * 0.35;
      ctx.fillStyle = p.c > 0.72 ? mix('#454d80', C.gold, roar * 0.65)
        : p.c > 0.4 ? '#333a68' : '#262c50';
      ctx.beginPath();
      ctx.ellipse(x, y, 3.6 * p.s, 4.6 * p.s, 0, 0, 6.2832);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    // Pagar pembatas depan tribun
    ctx.fillStyle = '#0d1229';
    ctx.fillRect(0, botY - 4, W, 16);
    ctx.restore();

    // Menara lampu
    for (var i = -1; i < 4; i++) {
      var wx = i * 1400 + 200;
      var sx = project(wx, 0.55);
      if (sx < -260 || sx > W + 260) continue;
      ctx.save();
      ctx.globalAlpha = 0.9;
      ctx.strokeStyle = '#0d1128';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(sx, STAND_TOP - 6);
      ctx.lineTo(sx, 214);
      ctx.stroke();
      ctx.fillStyle = '#131936';
      roundRect(ctx, sx - 38, 176, 76, 42, 5);
      ctx.fill();
      for (var r = 0; r < 2; r++) {
        for (var c2 = 0; c2 < 4; c2++) {
          ctx.fillStyle = rgba('#fff3d0', 0.85 - d * 0.45);
          ctx.beginPath();
          ctx.arc(sx - 26 + c2 * 17, 189 + r * 16, 5, 0, 6.2832);
          ctx.fill();
        }
      }
      var lg = ctx.createRadialGradient(sx, 200, 10, sx, 200, 300);
      lg.addColorStop(0, rgba('#ffe9b8', 0.22 * (1 - d * 0.6)));
      lg.addColorStop(1, rgba('#ffe9b8', 0));
      ctx.fillStyle = lg;
      ctx.fillRect(sx - 300, -120, 600, 600);
      ctx.restore();
    }
  }

  function drawTrack(ctx, project, t) {
    var d = skyTone(t);
    // Rumput dalam lapangan
    ctx.fillStyle = mix('#101f18', '#193024', d);
    ctx.fillRect(0, STAND_BOT + 12, W, TRACK_TOP - STAND_BOT - 12);

    // Lintasan
    var g = ctx.createLinearGradient(0, TRACK_TOP, 0, H);
    g.addColorStop(0, mix('#54241e', C.track, d));
    g.addColorStop(0.45, mix('#4a201b', '#7c3229', d));
    g.addColorStop(1, mix('#28120f', '#5c261f', d));
    ctx.fillStyle = g;
    ctx.fillRect(0, TRACK_TOP, W, H - TRACK_TOP);

    // Garis lajur
    ctx.strokeStyle = rgba(C.trackLine, 0.5);
    ctx.lineWidth = 3;
    [-140, -8, 116, 250, 396].forEach(function (dy, i) {
      ctx.globalAlpha = 0.25 + i * 0.12;
      ctx.beginPath();
      ctx.moveTo(0, GROUND + dy);
      ctx.lineTo(W, GROUND + dy);
      ctx.stroke();
    });
    ctx.globalAlpha = 1;

    // Penanda jarak tiap 50 m
    for (var m = 0; m <= 1000; m += 50) {
      var wx = m * UNITS_PER_M;
      var sx = project(wx, 1);
      if (sx < -120 || sx > W + 120) continue;
      ctx.strokeStyle = rgba(C.trackLine, m % 100 === 0 ? 0.3 : 0.14);
      ctx.lineWidth = m % 100 === 0 ? 3 : 2;
      ctx.beginPath();
      ctx.moveTo(sx, GROUND - 140);
      ctx.lineTo(sx, GROUND + 150);
      ctx.stroke();
      if (m % 100 === 0 && m > 0 && m < 1000) {
        label(ctx, m + ' M', sx + 10, GROUND - 152, { size: 19, color: rgba(C.trackLine, 0.42), tracking: 2 });
      }
    }
  }

  function drawStartLine(ctx, project, t) {
    var sx = project(0, 1);
    if (sx < -200 || sx > W + 200) return;
    ctx.save();
    ctx.fillStyle = rgba(C.trackLine, 0.85);
    ctx.fillRect(sx - 4, GROUND - 140, 8, 330);
    label(ctx, 'START', sx + 16, GROUND - 152, { size: 22, weight: 700, color: rgba(C.trackLine, 0.7), tracking: 4 });
    // Balok start
    if (t < GUN + 6) {
      [0, 1].forEach(function (k) {
        ctx.fillStyle = rgba('#d9d2ea', 0.55);
        roundRect(ctx, sx - 34, GROUND + (k === 0 ? LANE_A.dy : LANE_B.dy) + 12, 30, 12, 3);
        ctx.fill();
      });
    }
    ctx.restore();
  }

  function drawFinish(ctx, project, t, broken) {
    var sx = project(RACE_LEN, 1);
    if (sx < -260 || sx > W + 260) return;
    ctx.save();
    // Papan gerbang
    ctx.fillStyle = '#101632';
    ctx.fillRect(sx - 150, 330, 300, 56);
    ctx.strokeStyle = rgba(C.gold, 0.6);
    ctx.lineWidth = 2;
    ctx.strokeRect(sx - 150, 330, 300, 56);
    label(ctx, 'GARIS AKHIR', sx, 367, {
      size: 26, weight: 700, color: C.gold, tracking: 5, align: 'center'
    });
    ctx.strokeStyle = '#101632';
    ctx.lineWidth = 9;
    [-150, 150].forEach(function (dx) {
      ctx.beginPath();
      ctx.moveTo(sx + dx, 386);
      ctx.lineTo(sx + dx, GROUND + 130);
      ctx.stroke();
    });

    // Papan catur di lintasan
    for (var yy = GROUND - 140; yy < GROUND + 190; yy += 24) {
      for (var k = 0; k < 2; k++) {
        ctx.fillStyle = ((yy / 24 | 0) + k) % 2 ? '#f3efe6' : '#20263f';
        ctx.fillRect(sx - 24 + k * 24, yy, 24, 24);
      }
    }

    // Pita
    var tape = broken;
    ctx.strokeStyle = rgba('#ffffff', 0.9);
    ctx.lineWidth = 4;
    if (tape <= 0) {
      ctx.beginPath();
      ctx.moveTo(sx - 4, GROUND - 30);
      ctx.lineTo(sx - 4, GROUND + 120);
      ctx.stroke();
    } else {
      var spread = tape * 90;
      ctx.beginPath();
      ctx.moveTo(sx - 4, GROUND - 30);
      ctx.quadraticCurveTo(sx - 30 - spread, GROUND + 6, sx - 60 - spread * 1.6, GROUND - 16);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(sx - 4, GROUND + 120);
      ctx.quadraticCurveTo(sx - 30 - spread, GROUND + 92, sx - 66 - spread * 1.5, GROUND + 118);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawForeground(ctx, project, t) {
    // Pagar iklan yang melintas cepat di depan kamera (dengan blur = kedalaman)
    ctx.save();
    ctx.filter = 'blur(7px)';
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = '#0b0f24';
    ctx.beginPath();
    for (var i = -2; i < 40; i++) {
      var wx = i * 240 + 40;
      var sx = project(wx, 1.42);
      if (sx < -300 || sx > W + 300) continue;
      ctx.rect(sx, H - 150, 210, 150);
    }
    ctx.fill();
    ctx.restore();
    ctx.filter = 'none';
  }

  /* ------------------------------------------------------------------ *
   * Efek
   * ------------------------------------------------------------------ */

  function speedLines(ctx, t, intensity) {
    if (intensity <= 0) return;
    ctx.save();
    ctx.globalAlpha = intensity * 0.5;
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    for (var i = 0; i < 26; i++) {
      var y = 200 + ((i * 137 + t * 900) % (H - 300));
      var len = 90 + (i % 5) * 70;
      var x = (i * 311 + t * 2600) % (W + 400) - 200;
      ctx.lineWidth = i % 3 === 0 ? 2 : 1;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + len, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  function grain(ctx, t) {
    ctx.save();
    ctx.globalAlpha = 0.05;
    var o = Math.floor(t * 24);
    GRAIN.forEach(function (g, i) {
      var x = ((g.x * 7919 + o * 131 + i) % 1) * W;
      var y = ((g.y * 6271 + o * 197 + i * 3) % 1) * H;
      ctx.fillStyle = g.a > 0.5 ? '#ffffff' : '#000000';
      ctx.fillRect(x, y, 2, 2);
    });
    ctx.restore();
  }

  function letterbox(ctx, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = '#05050c';
    ctx.fillRect(0, 0, W, BAR);
    ctx.fillRect(0, H - BAR, W, BAR);
    ctx.restore();
  }

  function vignette(ctx, amount) {
    var g = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 1.05);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(1, 'rgba(0,0,0,' + amount + ')');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }

  /* ------------------------------------------------------------------ *
   * Antarmuka: papan jarak & keterangan
   * ------------------------------------------------------------------ */

  function hud(ctx, t, alpha) {
    if (alpha <= 0) return;
    var a = posAt(TRACK_A, t), b = posAt(TRACK_B, t);
    ctx.save();
    ctx.globalAlpha = alpha;

    var x0 = 300, x1 = W - 300, y = BAR + 46;
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x0, y);
    ctx.lineTo(x1, y);
    ctx.stroke();

    // Penanda 0 dan garis akhir
    label(ctx, 'START', x0 - 8, y + 30, { size: 14, color: C.faint, tracking: 2.4, align: 'right' });
    label(ctx, 'GARIS AKHIR', x1 + 8, y + 30, { size: 14, color: C.faint, tracking: 2.4 });

    var pxA = x0 + clamp(a / RACE_LEN, 0, 1) * (x1 - x0);
    var pxB = x0 + clamp(b / RACE_LEN, 0, 1) * (x1 - x0);
    var stack = Math.abs(pxA - pxB) < 130; // saling berdekatan → label ditumpuk
    [[pxA, C.one, NAME_A, -22], [pxB, C.two, NAME_B, stack ? -46 : -22]].forEach(function (r) {
      ctx.fillStyle = r[1];
      ctx.beginPath();
      ctx.arc(r[0], y, 7, 0, 6.2832);
      ctx.fill();
      label(ctx, r[2], r[0], y + r[3], {
        size: 15, weight: 700, color: r[1], tracking: 2, align: 'center'
      });
    });

    // Sisa jarak pelari kedua
    var left = Math.max(0, Math.round((RACE_LEN - b) / UNITS_PER_M));
    label(ctx, left > 0 ? 'SISA ' + left + ' M' : 'SELESAI', W / 2, y + 66, {
      size: 22, weight: 700, color: C.text, tracking: 5, align: 'center', alpha: 0.85
    });
    ctx.restore();
  }

  // Teks di layar mengikuti komentar suara (lihat lari/narasi.js)
  var CAPTIONS = [
    [2.4, 5.4, 'Selamat datang di final seribu meter!'],
    [5.6, 10.8, 'Stadion penuh malam ini, dan dua pelari sudah masuk ke lintasan.'],
    [11.0, 15.4, 'Di lajur dalam NO NAME, di lajur luar JOFA.'],
    [15.6, 19.2, 'Keduanya masuk balok start.'],
    [19.4, 21.2, 'Bersedia … siap …'],
    [21.4, 24.2, 'Astaga! NO NAME lari sebelum aba-aba!'],
    [25.4, 30.4, 'Ia mencuri start! JOFA baru berangkat sekarang!'],
    [30.6, 36.8, 'NO NAME sudah puluhan meter di depan. Keunggulan yang besar sekali.'],
    [37.0, 41.8, 'JOFA tertinggal jauh. Penonton mulai berdiri.'],
    [42.0, 47.8, 'Seratus meter berlalu, dan jaraknya justru semakin lebar.'],
    [48.0, 54.2, 'Hampir semua orang yakin NO NAME akan menang.'],
    [54.4, 59.8, 'Tetapi lihat langkah JOFA. Ia tidak panik sama sekali.'],
    [60.0, 66.4, 'Napasnya teratur. Langkahnya rapi. Ia sedang menabung tenaga.'],
    [66.6, 71.2, 'Empat ratus meter. NO NAME masih memimpin jauh.'],
    [71.4, 77.2, 'Tapi kecepatannya mulai turun!'],
    [77.4, 82.8, 'Enam ratus meter, dan langkah NO NAME mulai berat.'],
    [83.0, 88.8, 'JOFA justru menambah kecepatan! Jaraknya menyusut!'],
    [89.0, 94.8, 'Delapan puluh meter … tujuh puluh … enam puluh!'],
    [95.0, 100.8, 'Penonton bersorak. Perlombaan ini belum selesai!'],
    [101.0, 105.8, 'Delapan ratus meter. JOFA terus mendekat!'],
    [106.0, 110.8, 'NO NAME menoleh ke belakang! Ia terkejut!'],
    [111.0, 116.8, 'Ia mencoba mempercepat langkah, tetapi tenaganya sudah habis!'],
    [117.0, 122.2, 'JOFA tidak menoleh sedikit pun!'],
    [122.4, 127.2, 'Sembilan ratus meter! Mereka hampir berdampingan!'],
    [127.4, 131.2, 'Ini duel! Bahu bertemu bahu!'],
    [131.4, 134.8, 'JOFA menyalip! JOFA memimpin!'],
    [135.0, 138.8, 'Sepuluh meter … lima meter …'],
    [139.0, 143.8, 'Dan JOFA! JOFA menyentuh garis akhir lebih dulu!'],
    [144.0, 150.4, 'Luar biasa! Pelari yang tadi paling belakang keluar sebagai pemenang!'],
    [150.6, 154.2, 'Stadion bergemuruh untuk JOFA!']
  ];

  function captions(ctx, t) {
    CAPTIONS.forEach(function (c) {
      var a = env(t, c[0], c[1], 0.45, 0.45);
      if (a <= 0) return;
      ctx.save();
      ctx.globalAlpha = a;
      label(ctx, c[2], W / 2, H - BAR - 46, {
        size: 34, color: C.text, align: 'center', shadow: 12
      });
      ctx.restore();
    });
  }

  /* ------------------------------------------------------------------ *
   * Adegan khusus
   * ------------------------------------------------------------------ */

  function titleCard(ctx, t) {
    var a = env(t, 1.2, 13.0, 1.4, 1.6);
    if (a <= 0) return;
    ctx.save();
    ctx.globalAlpha = a;
    var tg = ctx.createLinearGradient(W / 2 - 520, 0, W / 2 + 520, 0);
    tg.addColorStop(0, C.one);
    tg.addColorStop(0.5, '#ffffff');
    tg.addColorStop(1, C.two);
    ctx.font = font(96, 700);
    ctx.fillStyle = tg;
    ctx.textBaseline = 'alphabetic';
    tracked(ctx, 'GARIS AKHIR', W / 2, 252, 10, 'center');
    label(ctx, 'Yang memulai lebih dulu belum tentu tiba lebih dulu.', W / 2, 306, {
      size: 30, color: C.muted, align: 'center', alpha: smooth(seg(t, 3.4, 5.2))
    });
    ctx.restore();
  }

  function falseStartFx(ctx, project, t) {
    // Kilat & asap pistol start, sengaja terlambat dari larinya pelari pertama
    var flash = env(t, GUN, GUN + 0.45, 0.03, 0.4);
    if (flash > 0) {
      ctx.save();
      ctx.globalAlpha = flash * 0.5;
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, W, H);
      ctx.restore();
    }
    var smoke = env(t, GUN, GUN + 3.2, 0.15, 2.4);
    if (smoke > 0) {
      var sx = project(-90, 1);
      ctx.save();
      ctx.filter = 'blur(6px)';
      ctx.globalAlpha = smoke * 0.2;
      ctx.fillStyle = '#e6e2f5';
      ctx.beginPath();
      for (var i = 0; i < 4; i++) {
        ctx.moveTo(sx - i * 16 + 26 + i * 16, GROUND - 150 - i * 22 - smoke * 30);
        ctx.arc(sx - i * 16, GROUND - 150 - i * 22 - smoke * 30, 26 + i * 16, 0, 6.2832);
      }
      ctx.fill();
      ctx.restore();
      ctx.filter = 'none';
    }

    // Peringatan "mencuri start"
    var warn = env(t, FALSE_START + 0.3, 30.0, 0.5, 1.2);
    if (warn > 0) {
      ctx.save();
      ctx.globalAlpha = warn * (0.65 + 0.35 * Math.sin(t * 6));
      var bw = 560, bx = W / 2 - bw / 2, by = BAR + 128;
      roundRect(ctx, bx, by, bw, 56, 12);
      ctx.fillStyle = rgba(C.one, 0.16);
      ctx.fill();
      ctx.strokeStyle = rgba(C.one, 0.75);
      ctx.lineWidth = 2;
      ctx.stroke();
      label(ctx, NAME_A + ' MENCURI START', W / 2, by + 37, {
        size: 26, weight: 700, color: C.one, tracking: 4.5, align: 'center'
      });
      ctx.restore();
    }
  }

  function outro(ctx, t) {
    var tt = t - 153.0;
    if (tt <= 0) return;
    var scrim = smooth(seg(tt, 0.4, 2.0));
    ctx.save();
    ctx.globalAlpha = scrim * 0.78;
    ctx.fillStyle = '#05050f';
    ctx.fillRect(0, 0, W, H);
    ctx.restore();

    var lines = [
      [1.4, 'Kemenangan bukan milik yang memulai lebih cepat,', 38, C.text],
      [6.6, 'melainkan milik yang terus bergerak sampai akhir.', 38, C.text],
      [11.4, 'Jangan bandingkan bab pertama hidupmu', 32, C.muted],
      [12.6, 'dengan bab terakhir hidup orang lain.', 32, C.muted],
      [17.4, 'Selama garis akhir belum kaulewati,', 32, C.muted],
      [18.6, 'perlombaanmu belum selesai.', 32, C.muted]
    ];
    lines.forEach(function (l, i) {
      var a = smooth(seg(tt, l[0], l[0] + 1.1)) * (1 - smooth(seg(tt, 21.4, 22.4)));
      if (a <= 0) return;
      ctx.save();
      ctx.globalAlpha = a;
      ctx.translate(0, (1 - easeOut(a)) * 16);
      label(ctx, l[1], W / 2, 420 + i * 62, { size: l[2], color: l[3], align: 'center' });
      ctx.restore();
    });

    var fa = smooth(seg(tt, 22.2, 23.4)) * (1 - smooth(seg(tt, 24.2, 25.0)));
    if (fa > 0) {
      ctx.save();
      ctx.globalAlpha = fa;
      var tg = ctx.createLinearGradient(W / 2 - 520, 0, W / 2 + 520, 0);
      tg.addColorStop(0, C.one);
      tg.addColorStop(0.5, '#ffffff');
      tg.addColorStop(1, C.two);
      ctx.font = font(58, 700);
      ctx.fillStyle = tg;
      ctx.textBaseline = 'alphabetic';
      tracked(ctx, 'JANGAN BERHENTI. TERUS BERGERAK.', W / 2, 546, 5, 'center');
      ctx.restore();
    }
  }

  /* ------------------------------------------------------------------ *
   * Render utama
   * ------------------------------------------------------------------ */

  /**
   * Menggambar dunia (langit, tribun, lintasan, pelari) memakai satu kamera.
   * Dipakai dua kali: sekali untuk layar penuh, sekali lagi di dalam jendela
   * kecil yang menyorot pelari yang sedang jauh di depan.
   */
  function drawScene(ctx, t, cam, roar, compact) {
    var project = makeProject(cam, t);
    var a = posAt(TRACK_A, t);
    var b = posAt(TRACK_B, t);
    var va = speedAt(TRACK_A, t);
    var vb = speedAt(TRACK_B, t);

    drawSky(ctx, t);
    drawStands(ctx, project, t, roar);
    drawTrack(ctx, project, t);
    drawStartLine(ctx, project, t);
    drawFinish(ctx, project, t, env(t, 144.8, 178, 0.35, 40));

    // Bayangan kedua pelari (satu operasi berblur untuk keduanya)
    ctx.save();
    ctx.globalAlpha = 0.32;
    ctx.fillStyle = '#000000';
    ctx.filter = 'blur(7px)';
    ctx.beginPath();
    [[a, LANE_A], [b, LANE_B]].forEach(function (r) {
      var sx = project(r[0], 1);
      if (sx < -160 || sx > W + 160) return;
      ctx.moveTo(sx + 8 + 48 * cam.zoom * r[1].s, GROUND + r[1].dy + 10);
      ctx.ellipse(sx + 8, GROUND + r[1].dy + 10, 48 * cam.zoom * r[1].s, 9 * cam.zoom * r[1].s, 0, 0, 6.2832);
    });
    ctx.fill();
    ctx.restore();
    ctx.filter = 'none';

    dust(ctx, project, a, va, '#c98b6a', LANE_A.dy);
    dust(ctx, project, b, vb, '#8fd8cf', LANE_B.dy);

    // NO NAME makin lelah; JOFA menjaga ritme sampai akhir
    var tiredA = smooth(seg(t, 74, 128)) * 0.85;
    var tiredB = smooth(seg(t, 120, 150)) * 0.25;
    var glance = env(t, 105.5, 112, 0.8, 1.2);   // menoleh ke belakang

    // Sebelum aba-aba keduanya diam: berdiri, lalu bersiap di balok start
    var ready = smooth(seg(t, 14.5, 19.6));
    var stance = poseSet(ready);

    var runners = [
      { x: a, v: va, color: C.one, tired: tiredA, tail: false, lean: -glance * 0.16,
        lane: LANE_A, name: NAME_A, pose: t < FALSE_START ? stance : null, armsUp: 0 },
      { x: b, v: vb, color: C.two, tired: tiredB, tail: true, lean: 0,
        lane: LANE_B, name: NAME_B, pose: t < GUN ? stance : null,
        armsUp: env(t, 146.2, DURATION, 1.6, 0) }   // JOFA merayakan setelah finis
    ];

    runners.forEach(function (r) {
      var sx = project(r.x, 1);
      if (sx < -260 || sx > W + 260) return;
      var phase = r.x * 0.39;
      var scale = RUNNER_SCALE * cam.zoom * r.lane.s;
      var gy = GROUND + r.lane.dy;

      var trail = clamp(r.v / 34, 0, 1);
      for (var k = 3; k >= 1; k--) {
        if (r.pose) break;   // tidak ada jejak gerak saat masih diam
        athlete(ctx, {
          x: sx - k * 13 * trail * cam.zoom, y: gy, s: scale, phase: phase - k * 0.16,
          color: r.color, tired: r.tired, alpha: 0.085 * trail * (4 - k) / 3, tail: r.tail
        });
      }
      athlete(ctx, {
        x: sx, y: gy, s: scale, phase: phase, color: r.color,
        tired: r.tired, tail: r.tail, glow: true, leanExtra: r.lean,
        pose: r.pose, armsUp: r.armsUp
      });

      nameTag(ctx, sx, gy - 196 * scale / RUNNER_SCALE, r.name, r.color, compact ? 0 : 0.92);
    });

    if (!compact) drawForeground(ctx, project, t);
    return project;
  }

  /** Jendela kecil yang menyorot pelari terdepan saat ia jauh di luar bingkai. */
  function insetLeader(ctx, t, roar, alpha) {
    if (alpha <= 0) return;
    var a = posAt(TRACK_A, t), b = posAt(TRACK_B, t);
    var view = { x: W - 686, y: BAR + 96, w: 620, h: 306 };
    var cam = { x: a - 30, zoom: 0.92, shake: 0 };
    var cropY = GROUND + LANE_A.dy - view.h * 0.66;

    ctx.save();
    ctx.globalAlpha = alpha;
    roundRect(ctx, view.x, view.y, view.w, view.h, 16);
    ctx.save();
    ctx.clip();
    ctx.translate(view.x + view.w / 2 - W * 0.44, view.y - cropY);
    drawScene(ctx, t, cam, roar, true);
    ctx.restore();

    // Bingkai + keterangan
    roundRect(ctx, view.x, view.y, view.w, view.h, 16);
    ctx.strokeStyle = rgba(C.one, 0.75);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = 'rgba(8,10,24,0.8)';
    roundRect(ctx, view.x, view.y, view.w, 44, 16);
    ctx.fill();
    label(ctx, NAME_A, view.x + 20, view.y + 31, {
      size: 22, weight: 700, color: C.one, tracking: 3
    });
    label(ctx, 'di depan  +' + Math.round((a - b) / UNITS_PER_M) + ' m',
      view.x + view.w - 20, view.y + 31, { size: 20, color: C.text, align: 'right' });
    ctx.restore();
  }

  function render(ctx, time) {
    var t = ((time % DURATION) + DURATION) % DURATION;

    var cam = cameraAt(t);
    var a = posAt(TRACK_A, t);
    var b = posAt(TRACK_B, t);
    var roar = clamp(env(t, 131, 178, 3.5, 8) * 0.8 + env(t, 144, 156, 0.4, 6), 0, 1);

    ctx.save();
    ctx.clearRect(0, 0, W, H);

    var project = drawScene(ctx, t, cam, roar, false);

    // Sorot cahaya saat menyalip
    var pass = env(t, 130, 140, 1.2, 3.0);
    if (pass > 0) {
      ctx.save();
      ctx.globalAlpha = pass * 0.5;
      var px = project(b, 1);
      var rg = ctx.createRadialGradient(px, GROUND + LANE_B.dy - 90, 20, px, GROUND + LANE_B.dy - 90, 420);
      rg.addColorStop(0, rgba(C.two, 0.5));
      rg.addColorStop(1, rgba(C.two, 0));
      ctx.fillStyle = rg;
      ctx.fillRect(px - 420, GROUND + LANE_B.dy - 510, 840, 840);
      ctx.restore();
    }

    speedLines(ctx, t, env(t, 128, 141, 1.5, 2.5) * 0.7 + env(t, 24, 34, 1.2, 3) * 0.4);

    // Kilau saat menyentuh garis akhir
    var win = env(t, 144.9, 150, 0.12, 3.4);
    if (win > 0) {
      ctx.save();
      ctx.globalAlpha = win * 0.75;
      var fx = project(RACE_LEN, 1);
      var wg = ctx.createRadialGradient(fx, GROUND - 80, 10, fx, GROUND - 80, 900);
      wg.addColorStop(0, 'rgba(255,255,255,0.85)');
      wg.addColorStop(0.25, rgba(C.gold, 0.35));
      wg.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = wg;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();
    }

    vignette(ctx, 0.5 + roar * 0.1);
    grain(ctx, t);

    var aScreen = project(a, 1);
    var outOfFrame = clamp((aScreen - (W - 340)) / 220, 0, 1);
    insetLeader(ctx, t, roar, env(t, 30, 128, 1.0, 1.0) * outOfFrame);
    hud(ctx, t, env(t, 15, 150.5, 1.5, 1.5) * 0.95);
    falseStartFx(ctx, project, t);
    captions(ctx, t);
    titleCard(ctx, t);
    outro(ctx, t);

    letterbox(ctx, 1);
    label(ctx, 'created by : Yusron Efendi', W - 64, BAR - 34, {
      size: 19, weight: 700, color: C.text, tracking: 1.4, align: 'right',
      alpha: env(t, 0.6, DURATION, 1.5, 1.2) * 0.9
    });
    label(ctx, 'TKJ 3', 64, BAR - 34, {
      size: 21, weight: 700, color: C.text, tracking: 5,
      alpha: env(t, 0.6, DURATION, 1.5, 1.2) * 0.9
    });

    var edge = 1 - Math.min(smooth(seg(t, 0, 1.4)), smooth(1 - seg(t, DURATION - 1.6, DURATION)));
    if (edge > 0) {
      ctx.fillStyle = 'rgba(3,3,9,' + edge + ')';
      ctx.fillRect(0, 0, W, H);
    }
    ctx.restore();
  }

  global.AXTOAnim = { W: W, H: H, FPS: FPS, DURATION: DURATION, render: render };
})(typeof window !== 'undefined' ? window : globalThis);
