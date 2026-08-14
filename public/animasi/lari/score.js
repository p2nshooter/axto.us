/*
 * Skor musik "Garis Akhir" — bertenaga, mengikuti jalannya lomba.
 *
 * Susunannya: hening menegang sebelum start → tembakan pistol → groove
 * kejar-mengejar yang temponya naik → jeda mencekam saat NO NAME menoleh →
 * klimaks saat menyalip → kemenangan yang terang → penutup yang melega.
 *
 * Semua bunyi disintesis lewat Web Audio (drum, bas, kuningan, gesek) tanpa
 * berkas sampel, dan hasilnya deterministik supaya cocok untuk render video.
 */
(function (global) {
  'use strict';

  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x9e3779b9) | 0;
      var x = Math.imul(seed ^ (seed >>> 16), 0x21f0aaad);
      x = Math.imul(x ^ (x >>> 15), 0x735a2d97);
      return ((x ^ (x >>> 15)) >>> 0) / 4294967296;
    };
  }

  var STEP = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  function hz(note) {
    var m = /^([A-G])(#|b)?(-?\d)$/.exec(note);
    var semis = STEP[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
    return 440 * Math.pow(2, (semis - 9) / 12 + (parseInt(m[3], 10) - 4));
  }

  /* ------------------------------------------------------------------ *
   * Susunan babak: akord, tempo, dan seberapa penuh aransemennya
   * ------------------------------------------------------------------ */

  var PARTS = [
    // at, sampai, akord,                 bpm,  isi (0..1), nama babak
    { at: 0,     to: 14,  chord: ['A2', 'E3', 'A3', 'C4'], bpm: 84,  drive: 0.15 }, // pembuka
    { at: 14,    to: 23,  chord: ['A2', 'E3', 'A3', 'B3'], bpm: 88,  drive: 0.28 }, // bersiap
    { at: 23,    to: 37,  chord: ['A2', 'E3', 'C4', 'E4'], bpm: 104, drive: 0.72 }, // start & curi start
    { at: 37,    to: 53,  chord: ['F2', 'C3', 'A3', 'C4'], bpm: 104, drive: 0.66 }, // tertinggal jauh
    { at: 53,    to: 71,  chord: ['D3', 'A3', 'D4', 'F4'], bpm: 108, drive: 0.62 }, // JOFA menjaga ritme
    { at: 71,    to: 89,  chord: ['G2', 'D3', 'B3', 'D4'], bpm: 112, drive: 0.74 }, // NO NAME melemah
    { at: 89,    to: 106, chord: ['A2', 'E3', 'C4', 'G4'], bpm: 118, drive: 0.84 }, // jarak menyusut
    { at: 106,   to: 122, chord: ['F2', 'C3', 'A3', 'F4'], bpm: 124, drive: 0.9 },  // panik & mengejar
    { at: 122,   to: 131, chord: ['G2', 'D3', 'B3', 'G4'], bpm: 132, drive: 1.0 },  // duel
    { at: 131,   to: 145, chord: ['C3', 'G3', 'E4', 'G4'], bpm: 136, drive: 1.0 },  // menyalip
    { at: 145,   to: 153, chord: ['F2', 'C3', 'A3', 'C5'], bpm: 128, drive: 0.95 }, // menang
    { at: 153,   to: 166, chord: ['C3', 'G3', 'E4', 'C5'], bpm: 100, drive: 0.5 },  // pesan penutup
    { at: 166,   to: 178, chord: ['F2', 'C3', 'A3', 'C4'], bpm: 92,  drive: 0.3 }   // menutup
  ];

  function partAt(t) {
    for (var i = 0; i < PARTS.length; i++) if (t >= PARTS[i].at && t < PARTS[i].to) return PARTS[i];
    return PARTS[PARTS.length - 1];
  }

  /* Melodi kuningan: [detik, nada, panjang, keras] */
  var HORNS = [
    [23.0, 'A4', 0.5, 0.5], [23.6, 'C5', 0.4, 0.45], [24.2, 'E5', 1.1, 0.5],
    [37.0, 'F4', 0.8, 0.34], [39.0, 'A4', 0.8, 0.32],
    [53.0, 'D5', 0.7, 0.34], [55.2, 'A4', 0.7, 0.3],
    [71.0, 'B4', 0.6, 0.38], [72.4, 'D5', 0.6, 0.36], [73.8, 'G4', 1.0, 0.34],
    [89.0, 'C5', 0.55, 0.44], [90.2, 'E5', 0.55, 0.42], [91.4, 'A4', 1.0, 0.4],
    [106.0, 'F5', 0.5, 0.5], [107.0, 'C5', 0.5, 0.46], [108.0, 'A4', 0.9, 0.44],
    [122.0, 'D5', 0.45, 0.56], [122.9, 'G5', 0.45, 0.54], [123.8, 'B4', 0.8, 0.5],
    [131.0, 'E5', 0.5, 0.62], [131.8, 'G5', 0.5, 0.6], [132.6, 'C6', 1.2, 0.64],
    [139.0, 'G5', 0.5, 0.6], [140.0, 'E5', 0.5, 0.58],
    [145.0, 'C6', 1.4, 0.7], [147.0, 'A5', 1.0, 0.6], [149.0, 'F5', 1.4, 0.56],
    [153.5, 'E5', 1.2, 0.4], [157.0, 'C5', 1.2, 0.36], [161.0, 'G4', 1.4, 0.34],
    [166.5, 'A4', 1.6, 0.3], [171.0, 'F4', 1.8, 0.26]
  ];

  function impulse(ctx, seconds, decay) {
    var len = Math.floor(ctx.sampleRate * seconds);
    var buf = ctx.createBuffer(2, len, ctx.sampleRate);
    var r = rng(9091);
    for (var c = 0; c < 2; c++) {
      var d = buf.getChannelData(c);
      for (var i = 0; i < len; i++) d[i] = (r() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return buf;
  }

  function noiseBuffer(ctx, seconds, seed) {
    var len = Math.floor(ctx.sampleRate * seconds);
    var buf = ctx.createBuffer(1, len, ctx.sampleRate);
    var d = buf.getChannelData(0);
    var r = rng(seed || 4242);
    for (var i = 0; i < len; i++) d[i] = r() * 2 - 1;
    return buf;
  }

  function build(ctx, duration) {
    var master = ctx.createGain();
    master.gain.value = 0.92;

    var comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.knee.value = 20;
    comp.ratio.value = 3.6;
    comp.attack.value = 0.008;
    comp.release.value = 0.22;

    var reverb = ctx.createConvolver();
    reverb.buffer = impulse(ctx, 2.6, 2.8);
    var wet = ctx.createGain(); wet.gain.value = 0.22;
    var dry = ctx.createGain(); dry.gain.value = 0.88;

    var bus = ctx.createGain();
    bus.connect(dry).connect(comp);
    bus.connect(reverb).connect(wet).connect(comp);
    comp.connect(master).connect(ctx.destination);

    var white = noiseBuffer(ctx, 2, 777);

    /* --- Alat perkusi --------------------------------------------------- */

    function kick(at, level) {
      var o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.setValueAtTime(150, at);
      o.frequency.exponentialRampToValueAtTime(45, at + 0.11);
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(level, at + 0.006);
      g.gain.exponentialRampToValueAtTime(0.0001, at + 0.42);
      o.connect(g).connect(bus);
      o.start(at); o.stop(at + 0.45);
    }

    function snare(at, level) {
      var src = ctx.createBufferSource();
      src.buffer = white;
      var f = ctx.createBiquadFilter();
      f.type = 'bandpass'; f.frequency.value = 1900; f.Q.value = 0.7;
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(level, at + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, at + 0.19);
      src.connect(f).connect(g).connect(bus);
      src.start(at); src.stop(at + 0.25);
      var body = ctx.createOscillator();
      body.type = 'triangle';
      body.frequency.setValueAtTime(210, at);
      var bg = ctx.createGain();
      bg.gain.setValueAtTime(0.0001, at);
      bg.gain.exponentialRampToValueAtTime(level * 0.5, at + 0.004);
      bg.gain.exponentialRampToValueAtTime(0.0001, at + 0.13);
      body.connect(bg).connect(bus);
      body.start(at); body.stop(at + 0.16);
    }

    function hat(at, level, open) {
      var src = ctx.createBufferSource();
      src.buffer = white;
      var f = ctx.createBiquadFilter();
      f.type = 'highpass'; f.frequency.value = 7200;
      var g = ctx.createGain();
      var dur = open ? 0.22 : 0.055;
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(level, at + 0.003);
      g.gain.exponentialRampToValueAtTime(0.0001, at + dur);
      src.connect(f).connect(g).connect(bus);
      src.start(at); src.stop(at + dur + 0.05);
    }

    function tom(at, freq, level) {
      var o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.setValueAtTime(freq, at);
      o.frequency.exponentialRampToValueAtTime(freq * 0.6, at + 0.25);
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(level, at + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, at + 0.32);
      o.connect(g).connect(bus);
      o.start(at); o.stop(at + 0.35);
    }

    /* --- Pola drum sepanjang lomba -------------------------------------- */

    var t = 0;
    var beatIndex = 0;
    while (t < duration - 0.5) {
      var part = partAt(t);
      var beat = 60 / part.bpm;
      var d = part.drive;
      var inBar = beatIndex % 4;

      if (d > 0.2) {
        // Jantung lomba: bas drum di ketukan 1 dan 3, plus sinkopasi saat panas
        if (inBar === 0) kick(t, 0.85 * d);
        else if (inBar === 2) kick(t, 0.72 * d);
        if (d > 0.75 && inBar === 3) kick(t + beat * 0.5, 0.5 * d);

        if (d > 0.45 && (inBar === 1 || inBar === 3)) snare(t, 0.5 * d);

        // Hi-hat: makin rapat saat perlombaan makin panas
        var div = d > 0.8 ? 4 : d > 0.55 ? 2 : 1;
        for (var h = 0; h < div; h++) {
          hat(t + beat * h / div, (h === 0 ? 0.2 : 0.12) * d, d > 0.9 && h === div - 1);
        }
      } else if (inBar === 0) {
        // Sebelum start: hanya detak pelan seperti degup jantung
        kick(t, 0.35);
        kick(t + beat * 0.42, 0.22);
      }

      t += beat;
      beatIndex++;
    }

    // Isian tom menjelang momen-momen penting
    [[21.4, 0.7], [88.4, 0.75], [121.4, 0.85], [130.4, 0.95], [144.2, 1.0]].forEach(function (f) {
      for (var i = 0; i < 4; i++) tom(f[0] + i * 0.11, 260 - i * 34, 0.5 * f[1]);
    });

    /* --- Bas berjalan ---------------------------------------------------- */

    var bt = 0, bi = 0;
    while (bt < duration - 0.5) {
      var p2 = partAt(bt);
      var bb = 60 / p2.bpm;
      if (p2.drive > 0.25) {
        var root = hz(p2.chord[0]);
        var note = bi % 4 === 2 ? root * 1.5 : bi % 8 === 7 ? root * 1.335 : root;
        var o = ctx.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = note;
        var f = ctx.createBiquadFilter();
        f.type = 'lowpass';
        f.frequency.setValueAtTime(180 + 500 * p2.drive, bt);
        f.Q.value = 6;
        var g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, bt);
        g.gain.exponentialRampToValueAtTime(0.20 * p2.drive, bt + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, bt + bb * 0.9);
        o.connect(f).connect(g).connect(bus);
        o.start(bt); o.stop(bt + bb);
      }
      bt += bb;
      bi++;
    }

    /* --- Lapisan gesek/pad yang menahan akord ---------------------------- */

    PARTS.forEach(function (p3) {
      var start = Math.max(0, p3.at - 1.0);
      var end = Math.min(duration, p3.to + 1.2);
      var pad = ctx.createGain();
      pad.gain.value = 0.0001;
      var filt = ctx.createBiquadFilter();
      filt.type = 'lowpass';
      filt.frequency.value = 700 + p3.drive * 1500;
      pad.connect(filt).connect(bus);
      var level = 0.042 * (0.5 + p3.drive * 0.7);
      pad.gain.setValueAtTime(0.0001, start);
      pad.gain.exponentialRampToValueAtTime(level, start + 1.2);
      pad.gain.setValueAtTime(level, Math.max(start + 1.2, end - 1.4));
      pad.gain.exponentialRampToValueAtTime(0.0001, end);

      p3.chord.forEach(function (note, k) {
        [-6, 0, 6].forEach(function (det, di) {
          var o = ctx.createOscillator();
          o.type = di === 1 ? 'triangle' : 'sawtooth';
          o.frequency.value = hz(note);
          o.detune.value = det + (k - 1.5) * 2;
          var g = ctx.createGain();
          g.gain.value = (di === 1 ? 0.5 : 0.22) / (1 + k * 0.3);
          o.connect(g).connect(pad);
          o.start(start); o.stop(end + 0.1);
        });
      });
    });

    /* --- Kuningan: melodi utama ------------------------------------------ */

    HORNS.forEach(function (n) {
      var at = n[0], f0 = hz(n[1]), len = n[2], lvl = n[3];
      if (at > duration - 0.3) return;
      [0, 7, 12].forEach(function (semi, i) {
        var o = ctx.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = f0 * Math.pow(2, semi / 12);
        o.detune.value = (i - 1) * 5;
        var f = ctx.createBiquadFilter();
        f.type = 'lowpass';
        f.frequency.setValueAtTime(700, at);
        f.frequency.linearRampToValueAtTime(2600, at + 0.09);
        f.frequency.linearRampToValueAtTime(1200, at + len);
        var g = ctx.createGain();
        var amp = lvl * (i === 0 ? 0.5 : i === 1 ? 0.22 : 0.16);
        g.gain.setValueAtTime(0.0001, at);
        g.gain.exponentialRampToValueAtTime(amp, at + 0.045);
        g.gain.setValueAtTime(amp, at + len * 0.7);
        g.gain.exponentialRampToValueAtTime(0.0001, at + len + 0.25);
        o.connect(f).connect(g).connect(bus);
        o.start(at); o.stop(at + len + 0.3);
      });
    });

    /* --- Tembakan pistol start ------------------------------------------- */

    (function (at) {
      var src = ctx.createBufferSource();
      src.buffer = white;
      var f = ctx.createBiquadFilter();
      f.type = 'bandpass'; f.frequency.value = 2100; f.Q.value = 0.6;
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(0.95, at + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, at + 0.7);
      src.connect(f).connect(g).connect(bus);
      src.start(at); src.stop(at + 0.8);
      var thud = ctx.createOscillator();
      thud.type = 'sine';
      thud.frequency.setValueAtTime(190, at);
      thud.frequency.exponentialRampToValueAtTime(38, at + 0.45);
      var tg = ctx.createGain();
      tg.gain.setValueAtTime(0.0001, at);
      tg.gain.exponentialRampToValueAtTime(0.8, at + 0.006);
      tg.gain.exponentialRampToValueAtTime(0.0001, at + 1.2);
      thud.connect(tg).connect(bus);
      thud.start(at); thud.stop(at + 1.3);
    })(23.0);

    /* --- Suara stadion & sapuan ------------------------------------------ */

    function crowd(a, b, peak, freq) {
      var src = ctx.createBufferSource();
      src.buffer = white; src.loop = true;
      var f = ctx.createBiquadFilter();
      f.type = 'bandpass'; f.frequency.value = freq || 900; f.Q.value = 0.5;
      var g = ctx.createGain(); g.gain.value = 0.0001;
      src.connect(f).connect(g).connect(bus);
      g.gain.setValueAtTime(0.0001, a);
      g.gain.exponentialRampToValueAtTime(peak, a + 1.6);
      g.gain.setValueAtTime(peak, Math.max(a + 1.6, b - 2.2));
      g.gain.exponentialRampToValueAtTime(0.0001, b);
      src.start(a); src.stop(b + 0.1);
    }
    crowd(4, duration - 1, 0.05, 800);        // riuh tipis sepanjang lomba
    crowd(120, 158, 0.16, 1300);              // sorak saat duel & finis

    [[20.6, 23.0], [128.6, 131.2], [142.6, 145.1]].forEach(function (r) {
      var src = ctx.createBufferSource();
      src.buffer = white; src.loop = true;
      var f = ctx.createBiquadFilter();
      f.type = 'bandpass'; f.Q.value = 1.2;
      f.frequency.setValueAtTime(220, r[0]);
      f.frequency.exponentialRampToValueAtTime(5200, r[1]);
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, r[0]);
      g.gain.exponentialRampToValueAtTime(0.3, r[1] - 0.1);
      g.gain.exponentialRampToValueAtTime(0.0001, r[1] + 0.7);
      src.connect(f).connect(g).connect(bus);
      src.start(r[0]); src.stop(r[1] + 0.8);
    });

    master.gain.setValueAtTime(0.0001, 0);
    master.gain.exponentialRampToValueAtTime(0.92, 2.0);
    master.gain.setValueAtTime(0.92, duration - 3.0);
    master.gain.exponentialRampToValueAtTime(0.0001, duration - 0.12);
    return master;
  }

  global.AXTOScore = { build: build, PARTS: PARTS };
})(typeof window !== 'undefined' ? window : globalThis);
