/*
 * Skor musik "Garis Akhir".
 *
 * Alurnya mengikuti cerita: hening sebelum start, denyut yang menegang saat
 * tertinggal, langkah yang stabil dan makin membesar saat mengejar, lalu
 * pecah menjadi terang di garis akhir dan menutup dengan lembut.
 *
 * Semuanya disintesis lewat Web Audio (tanpa berkas sampel) dan deterministik.
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

  // Akord per babak: mulai gelap (Am), menegang (F/G), lalu terang (C/F/G)
  var SECTIONS = [
    { at: 0, chord: ['A2', 'E3', 'C4', 'E4'], level: 0.45 },
    { at: 14, chord: ['A2', 'E3', 'C4', 'A4'], level: 0.5 },
    { at: 23, chord: ['F2', 'C3', 'A3', 'C4'], level: 0.72 },
    { at: 34, chord: ['D3', 'A3', 'F4', 'A4'], level: 0.62 },
    { at: 46, chord: ['A2', 'E3', 'C4', 'E4'], level: 0.58 },
    { at: 58, chord: ['F2', 'C3', 'A3', 'C4'], level: 0.6 },
    { at: 70, chord: ['G2', 'D3', 'B3', 'D4'], level: 0.66 },
    { at: 84, chord: ['A2', 'E3', 'C4', 'G4'], level: 0.7 },
    { at: 96, chord: ['F2', 'C3', 'A3', 'F4'], level: 0.76 },
    { at: 110, chord: ['G2', 'D3', 'B3', 'G4'], level: 0.82 },
    { at: 122, chord: ['C3', 'G3', 'E4', 'G4'], level: 0.88 },
    { at: 132, chord: ['F2', 'C3', 'A3', 'C5'], level: 0.95 },
    { at: 141, chord: ['C3', 'G3', 'E4', 'C5'], level: 1.0 },
    { at: 151, chord: ['F2', 'C3', 'A3', 'C4'], level: 0.7 },
    { at: 162, chord: ['C3', 'G3', 'E4', 'G4'], level: 0.62 },
    { at: 172, chord: ['A2', 'E3', 'C4', 'E4'], level: 0.5 }
  ];

  // Denting melodi: [detik, nada, keras]
  var MELODY = [
    [3.0, 'E5', 0.34], [6.5, 'C5', 0.3], [10.0, 'A4', 0.28],
    [24.0, 'E5', 0.4], [26.5, 'F5', 0.36], [29.0, 'C5', 0.34],
    [35.0, 'D5', 0.34], [39.0, 'F5', 0.3], [43.0, 'A4', 0.28],
    [47.0, 'C5', 0.32], [51.0, 'E5', 0.3], [55.0, 'A4', 0.28],
    [59.0, 'F5', 0.34], [63.0, 'C5', 0.3], [67.0, 'A4', 0.3],
    [71.0, 'D5', 0.36], [75.0, 'B4', 0.32], [79.0, 'G4', 0.3],
    [85.0, 'C5', 0.38], [89.0, 'E5', 0.34], [93.0, 'A4', 0.32],
    [97.0, 'F5', 0.42], [101.0, 'C5', 0.38], [105.0, 'A5', 0.36],
    [111.0, 'D5', 0.44], [115.0, 'G5', 0.4], [119.0, 'B4', 0.38],
    [123.0, 'E5', 0.5], [126.0, 'G5', 0.46], [129.0, 'C6', 0.44],
    [133.0, 'A5', 0.56], [136.0, 'F5', 0.5], [139.0, 'C6', 0.54],
    [142.0, 'E5', 0.6], [145.0, 'G5', 0.58], [148.0, 'C6', 0.62],
    [152.0, 'A4', 0.4], [157.0, 'F5', 0.36], [163.0, 'C5', 0.34],
    [168.0, 'E5', 0.32], [173.0, 'A4', 0.3]
  ];

  function impulse(ctx, seconds, decay) {
    var len = Math.floor(ctx.sampleRate * seconds);
    var buf = ctx.createBuffer(2, len, ctx.sampleRate);
    var r = rng(1337);
    for (var c = 0; c < 2; c++) {
      var d = buf.getChannelData(c);
      for (var i = 0; i < len; i++) d[i] = (r() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return buf;
  }

  function noiseBuffer(ctx, seconds) {
    var len = Math.floor(ctx.sampleRate * seconds);
    var buf = ctx.createBuffer(1, len, ctx.sampleRate);
    var d = buf.getChannelData(0);
    var r = rng(24601), last = 0;
    for (var i = 0; i < len; i++) {
      last = (last + (r() * 2 - 1) * 0.08) * 0.995;
      d[i] = last;
    }
    return buf;
  }

  function ramp(param, value, at, dur) {
    param.setValueAtTime(Math.max(param.value, 0.0001), at);
    param.exponentialRampToValueAtTime(Math.max(value, 0.0001), at + dur);
  }

  function build(ctx, duration) {
    var master = ctx.createGain();
    master.gain.value = 0.9;

    var comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.knee.value = 22;
    comp.ratio.value = 3.2;
    comp.attack.value = 0.015;
    comp.release.value = 0.28;

    var reverb = ctx.createConvolver();
    reverb.buffer = impulse(ctx, 3.2, 2.4);
    var wet = ctx.createGain(); wet.gain.value = 0.3;
    var dry = ctx.createGain(); dry.gain.value = 0.82;

    var bus = ctx.createGain();
    bus.connect(dry).connect(comp);
    bus.connect(reverb).connect(wet).connect(comp);
    comp.connect(master).connect(ctx.destination);

    // --- Lapisan pad + bas
    SECTIONS.forEach(function (sec, i) {
      var next = SECTIONS[i + 1];
      var end = next ? next.at + 2.0 : duration;
      var start = Math.max(0, sec.at - 1.4);
      var pad = ctx.createGain();
      pad.gain.value = 0.0001;
      var filt = ctx.createBiquadFilter();
      filt.type = 'lowpass';
      filt.frequency.value = 800;
      filt.Q.value = 0.7;
      pad.connect(filt).connect(bus);
      ramp(pad.gain, 0.05 * sec.level, start, 1.6);
      pad.gain.setValueAtTime(0.05 * sec.level, Math.max(start + 1.6, end - 2.0));
      pad.gain.exponentialRampToValueAtTime(0.0001, end);
      filt.frequency.setValueAtTime(560, start);
      filt.frequency.linearRampToValueAtTime(1400 + sec.level * 900, Math.min(end, start + 5));

      sec.chord.forEach(function (note, k) {
        [-5, 0, 5].forEach(function (det, d) {
          var o = ctx.createOscillator();
          o.type = d === 1 ? 'triangle' : 'sawtooth';
          o.frequency.value = hz(note);
          o.detune.value = det + (k - 1.5) * 1.6;
          var g = ctx.createGain();
          g.gain.value = (d === 1 ? 0.5 : 0.2) / (1 + k * 0.32);
          o.connect(g).connect(pad);
          o.start(start);
          o.stop(end + 0.1);
        });
      });

      var bass = ctx.createOscillator();
      bass.type = 'sine';
      bass.frequency.value = hz(sec.chord[0]) / 2;
      var bg = ctx.createGain();
      bg.gain.value = 0.0001;
      bass.connect(bg).connect(bus);
      ramp(bg.gain, 0.17 * sec.level, start, 1.4);
      bg.gain.setValueAtTime(0.17 * sec.level, Math.max(start + 1.4, end - 1.8));
      bg.gain.exponentialRampToValueAtTime(0.0001, end);
      bass.start(start);
      bass.stop(end + 0.1);
    });

    // --- Denyut langkah: nadi yang makin cepat seiring perlombaan
    var pulseStart = 24, pulseEnd = 150;
    var beat = pulseStart;
    while (beat < pulseEnd) {
      var prog = (beat - pulseStart) / (pulseEnd - pulseStart);
      var bpm = 78 + prog * 46;                     // makin lama makin mendesak
      var level = 0.34 + prog * 0.5;
      var o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.setValueAtTime(150, beat);
      o.frequency.exponentialRampToValueAtTime(48, beat + 0.22);
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, beat);
      g.gain.exponentialRampToValueAtTime(level * 0.55, beat + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, beat + 0.55);
      o.connect(g).connect(bus);
      o.start(beat);
      o.stop(beat + 0.6);
      beat += 60 / bpm;
    }

    // --- Denting melodi (FM ringan)
    MELODY.forEach(function (n) {
      var at = n[0], f = hz(n[1]), lvl = n[2];
      if (at > duration - 0.4) return;
      var car = ctx.createOscillator(); car.type = 'sine'; car.frequency.value = f;
      var mod = ctx.createOscillator(); mod.type = 'sine'; mod.frequency.value = f * 2.01;
      var mg = ctx.createGain();
      mg.gain.setValueAtTime(f * 1.5, at);
      mg.gain.exponentialRampToValueAtTime(1, at + 0.45);
      mod.connect(mg).connect(car.frequency);
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(lvl * 0.3, at + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, at + 3.0);
      car.connect(g).connect(bus);
      car.start(at); car.stop(at + 3.2);
      mod.start(at); mod.stop(at + 3.2);
    });

    // --- Suara stadion: derau lembut yang naik saat menyalip & finis
    var nb = noiseBuffer(ctx, Math.min(duration, 60));
    function texture(a, b, freq, q, peak, type) {
      var src = ctx.createBufferSource();
      src.buffer = nb; src.loop = true;
      var f = ctx.createBiquadFilter();
      f.type = type || 'bandpass'; f.frequency.value = freq; f.Q.value = q;
      var g = ctx.createGain(); g.gain.value = 0.0001;
      src.connect(f).connect(g).connect(bus);
      ramp(g.gain, peak, a, 2.0);
      g.gain.setValueAtTime(peak, Math.max(a + 2.0, b - 2.5));
      g.gain.exponentialRampToValueAtTime(0.0001, b);
      src.start(a); src.stop(b + 0.1);
      return g;
    }
    texture(6, duration - 1, 900, 0.7, 0.1);             // riuh penonton, tipis
    texture(126, 158, 1400, 0.6, 0.34);                  // sorak saat menyalip & finis

    // --- Tembakan pistol start
    (function (at) {
      var src = ctx.createBufferSource();
      src.buffer = nb; src.loop = true;
      var f = ctx.createBiquadFilter();
      f.type = 'bandpass'; f.frequency.value = 1800; f.Q.value = 0.8;
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(0.9, at + 0.006);
      g.gain.exponentialRampToValueAtTime(0.0001, at + 0.8);
      src.connect(f).connect(g).connect(bus);
      src.start(at); src.stop(at + 1.0);
      var thud = ctx.createOscillator();
      thud.type = 'sine';
      thud.frequency.setValueAtTime(180, at);
      thud.frequency.exponentialRampToValueAtTime(40, at + 0.5);
      var tg = ctx.createGain();
      tg.gain.setValueAtTime(0.0001, at);
      tg.gain.exponentialRampToValueAtTime(0.7, at + 0.008);
      tg.gain.exponentialRampToValueAtTime(0.0001, at + 1.4);
      thud.connect(tg).connect(bus);
      thud.start(at); thud.stop(at + 1.5);
    })(23.0);

    // --- Sapuan sebelum menyalip dan menjelang penutup
    [[128.5, 133.2], [147.5, 151.2]].forEach(function (r) {
      var src = ctx.createBufferSource();
      src.buffer = nb; src.loop = true;
      var f = ctx.createBiquadFilter();
      f.type = 'bandpass'; f.Q.value = 1.3;
      f.frequency.setValueAtTime(260, r[0]);
      f.frequency.exponentialRampToValueAtTime(4600, r[1]);
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, r[0]);
      g.gain.exponentialRampToValueAtTime(0.42, r[1] - 0.12);
      g.gain.exponentialRampToValueAtTime(0.0001, r[1] + 0.9);
      src.connect(f).connect(g).connect(bus);
      src.start(r[0]); src.stop(r[1] + 1.0);
    });

    master.gain.setValueAtTime(0.0001, 0);
    master.gain.exponentialRampToValueAtTime(0.9, 2.0);
    master.gain.setValueAtTime(0.9, duration - 3.0);
    master.gain.exponentialRampToValueAtTime(0.0001, duration - 0.15);
    return master;
  }

  global.AXTOScore = { build: build, SECTIONS: SECTIONS };
})(typeof window !== 'undefined' ? window : globalThis);
