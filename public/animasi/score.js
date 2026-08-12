/*
 * AXTO — skor musik untuk "Satu Puncak, Banyak Jalan".
 *
 * Disintesis penuh lewat Web Audio (tanpa berkas sampel): lapisan pad,
 * dentingan seperti piano, bas lembut, dan tekstur tiap medan (angin gurun,
 * riak sungai, gema tebing). Semua nilainya tetap, jadi hasil render selalu
 * sama — cocok untuk digabungkan ke video frame-per-frame.
 *
 * buildScore(ctx, duration) menyusun seluruh lagu ke dalam AudioContext
 * (biasanya OfflineAudioContext) lalu mengembalikan node keluarannya.
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

  var A4 = 440;
  // Nada dalam notasi ilmiah, mis. 'A3', 'C#4'
  var STEP = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  function hz(note) {
    var m = /^([A-G])(#|b)?(-?\d)$/.exec(note);
    var semis = STEP[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
    var oct = parseInt(m[3], 10);
    return A4 * Math.pow(2, (semis - 9) / 12 + (oct - 4));
  }

  /* Progresi akord per babak — Dm / Bb / F / C, sederhana dan hangat. */
  var SECTIONS = [
    { at: 0.0, chord: ['D3', 'A3', 'F4', 'A4'], level: 0.55 },   // judul
    { at: 8.0, chord: ['B2', 'F3', 'D4', 'F4'], level: 0.6 },    // tiga medan
    { at: 18.0, chord: ['F2', 'C3', 'A3', 'C4'], level: 0.62 },
    { at: 28.0, chord: ['D3', 'A3', 'F4', 'A4'], level: 0.62 },
    { at: 36.0, chord: ['G2', 'D3', 'A3', 'B3'], level: 0.7 },   // rintangan
    { at: 44.0, chord: ['A2', 'E3', 'C4', 'E4'], level: 0.72 },
    { at: 50.5, chord: ['F2', 'C3', 'A3', 'F4'], level: 0.66 },  // menuju puncak
    { at: 58.0, chord: ['C3', 'G3', 'E4', 'G4'], level: 0.7 },
    { at: 64.0, chord: ['F2', 'C3', 'A3', 'C4'], level: 0.82 },  // istana & bendera
    { at: 72.0, chord: ['B2', 'F3', 'D4', 'A4'], level: 0.78 },  // penutup
    { at: 80.0, chord: ['F2', 'C3', 'A3', 'C4'], level: 0.72 },
    { at: 86.0, chord: ['D3', 'A3', 'D4', 'F4'], level: 0.6 }
  ];

  /* Denting melodi: [waktu, nada, keras] */
  var MELODY = [
    [2.6, 'A4', 0.5], [3.4, 'D5', 0.45], [4.6, 'F5', 0.4], [6.0, 'E5', 0.35],
    [9.0, 'D5', 0.42], [11.0, 'F5', 0.38], [13.4, 'A5', 0.34], [15.6, 'G5', 0.3],
    [19.0, 'F5', 0.4], [21.4, 'C5', 0.36], [24.0, 'A4', 0.34], [26.4, 'D5', 0.32],
    [29.0, 'A4', 0.4], [31.6, 'D5', 0.36], [34.0, 'E5', 0.34],
    [37.0, 'D5', 0.44], [39.4, 'B4', 0.4], [42.0, 'G4', 0.38],
    [45.0, 'A4', 0.42], [47.4, 'C5', 0.4], [49.4, 'E5', 0.38],
    [51.5, 'F5', 0.46], [54.0, 'C5', 0.4], [56.4, 'A4', 0.38],
    [58.6, 'C5', 0.44], [60.6, 'E5', 0.42], [62.6, 'G5', 0.4],
    [64.6, 'A5', 0.52], [66.4, 'F5', 0.46], [68.2, 'C5', 0.42], [70.0, 'A5', 0.5],
    [72.6, 'F5', 0.4], [75.0, 'D5', 0.38], [77.4, 'A4', 0.34],
    [80.6, 'F5', 0.42], [83.0, 'C5', 0.36], [85.4, 'A4', 0.34],
    [87.6, 'D5', 0.4], [89.4, 'A4', 0.3]
  ];

  function impulse(ctx, seconds, decay) {
    var rate = ctx.sampleRate;
    var len = Math.floor(rate * seconds);
    var buf = ctx.createBuffer(2, len, rate);
    var r = rng(4242);
    for (var c = 0; c < 2; c++) {
      var d = buf.getChannelData(c);
      for (var i = 0; i < len; i++) {
        d[i] = (r() * 2 - 1) * Math.pow(1 - i / len, decay);
      }
    }
    return buf;
  }

  function noiseBuffer(ctx, seconds) {
    var len = Math.floor(ctx.sampleRate * seconds);
    var buf = ctx.createBuffer(1, len, ctx.sampleRate);
    var d = buf.getChannelData(0);
    var r = rng(90210);
    var last = 0;
    for (var i = 0; i < len; i++) {
      // derau merah muda sederhana: lebih lembut di telinga
      last = (last + (r() * 2 - 1) * 0.08) * 0.995;
      d[i] = last;
    }
    return buf;
  }

  function ramp(param, value, at, dur) {
    param.setValueAtTime(Math.max(param.value, 0.0001), at);
    param.exponentialRampToValueAtTime(Math.max(value, 0.0001), at + dur);
  }

  function buildScore(ctx, duration) {
    var master = ctx.createGain();
    master.gain.value = 0.9;

    // Sedikit kompresi supaya dinamikanya rapi
    var comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.knee.value = 24;
    comp.ratio.value = 3;
    comp.attack.value = 0.02;
    comp.release.value = 0.3;

    var reverb = ctx.createConvolver();
    reverb.buffer = impulse(ctx, 3.6, 2.6);
    var wet = ctx.createGain();
    wet.gain.value = 0.34;
    var dry = ctx.createGain();
    dry.gain.value = 0.8;

    var bus = ctx.createGain();
    bus.connect(dry).connect(comp);
    bus.connect(reverb).connect(wet).connect(comp);
    comp.connect(master).connect(ctx.destination);

    // --- Pad: tiga osilator sedikit sumbang per nada akord ---
    SECTIONS.forEach(function (sec, i) {
      var next = SECTIONS[i + 1];
      var end = next ? next.at + 2.2 : duration;
      var start = Math.max(0, sec.at - 1.6);
      var padGain = ctx.createGain();
      padGain.gain.value = 0.0001;
      var filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 900;
      filter.Q.value = 0.6;
      padGain.connect(filter).connect(bus);

      ramp(padGain.gain, 0.052 * sec.level, start, 2.0);
      padGain.gain.setValueAtTime(0.052 * sec.level, Math.max(start + 2.0, end - 2.4));
      padGain.gain.exponentialRampToValueAtTime(0.0001, end);
      filter.frequency.setValueAtTime(620, start);
      filter.frequency.linearRampToValueAtTime(1500, Math.min(end, start + 6));

      sec.chord.forEach(function (note, k) {
        [-4.5, 0, 4.5].forEach(function (detune, d) {
          var osc = ctx.createOscillator();
          osc.type = d === 1 ? 'triangle' : 'sawtooth';
          osc.frequency.value = hz(note);
          osc.detune.value = detune + (k - 1.5) * 1.5;
          var g = ctx.createGain();
          g.gain.value = (d === 1 ? 0.5 : 0.22) / (1 + k * 0.35);
          osc.connect(g).connect(padGain);
          osc.start(start);
          osc.stop(end + 0.1);
        });
      });

      // Bas lembut pada nada dasar
      var bass = ctx.createOscillator();
      bass.type = 'sine';
      bass.frequency.value = hz(sec.chord[0]) / 2;
      var bg = ctx.createGain();
      bg.gain.value = 0.0001;
      bass.connect(bg).connect(bus);
      ramp(bg.gain, 0.16 * sec.level, start, 1.8);
      bg.gain.setValueAtTime(0.16 * sec.level, Math.max(start + 1.8, end - 2.0));
      bg.gain.exponentialRampToValueAtTime(0.0001, end);
      bass.start(start);
      bass.stop(end + 0.1);
    });

    // --- Denting melodi (sintesis FM ringan, meniru dawai/piano) ---
    MELODY.forEach(function (n) {
      var at = n[0], f = hz(n[1]), lvl = n[2];
      if (at > duration - 0.5) return;
      var carrier = ctx.createOscillator();
      carrier.type = 'sine';
      carrier.frequency.value = f;
      var mod = ctx.createOscillator();
      mod.type = 'sine';
      mod.frequency.value = f * 2.01;
      var modGain = ctx.createGain();
      modGain.gain.setValueAtTime(f * 1.6, at);
      modGain.gain.exponentialRampToValueAtTime(1, at + 0.5);
      mod.connect(modGain).connect(carrier.frequency);

      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(lvl * 0.3, at + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, at + 3.4);
      carrier.connect(g).connect(bus);
      carrier.start(at);
      carrier.stop(at + 3.6);
      mod.start(at);
      mod.stop(at + 3.6);
    });

    // --- Tekstur medan: angin (gurun) & aliran air (sungai) ---
    var nb = noiseBuffer(ctx, Math.min(duration, 60));
    function texture(startAt, endAt, freq, q, peak, type) {
      var src = ctx.createBufferSource();
      src.buffer = nb;
      src.loop = true;
      var f = ctx.createBiquadFilter();
      f.type = type || 'bandpass';
      f.frequency.value = freq;
      f.Q.value = q;
      var g = ctx.createGain();
      g.gain.value = 0.0001;
      src.connect(f).connect(g).connect(bus);
      ramp(g.gain, peak, startAt, 2.5);
      g.gain.setValueAtTime(peak, Math.max(startAt + 2.5, endAt - 3));
      g.gain.exponentialRampToValueAtTime(0.0001, endAt);
      src.start(startAt);
      src.stop(endAt + 0.1);
      return f;
    }
    // Angin gurun menguat saat badai (±34–46 dtk)
    var wind = texture(20, 52, 700, 1.1, 0.3);
    wind.frequency.setValueAtTime(600, 20);
    wind.frequency.linearRampToValueAtTime(1500, 40);
    wind.frequency.linearRampToValueAtTime(700, 50);
    // Riak air, lebih tinggi dan tipis
    texture(14, 50, 3200, 0.8, 0.22);
    // Deru rendah di bagian rintangan
    texture(34, 50, 120, 0.7, 0.3, 'lowpass');

    // --- Debur/geluduk halus penanda babak ---
    [8.0, 28.0, 36.0, 50.5, 64.0, 72.5].forEach(function (at) {
      if (at > duration - 1) return;
      var o = ctx.createOscillator();
      o.type = 'sine';
      o.frequency.setValueAtTime(120, at);
      o.frequency.exponentialRampToValueAtTime(42, at + 1.1);
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, at);
      g.gain.exponentialRampToValueAtTime(0.5, at + 0.06);
      g.gain.exponentialRampToValueAtTime(0.0001, at + 2.2);
      o.connect(g).connect(bus);
      o.start(at);
      o.stop(at + 2.4);
    });

    // --- Sapuan lembut sebelum puncak & sebelum penutup ---
    [[47.5, 50.6], [69.5, 72.6]].forEach(function (r) {
      var src = ctx.createBufferSource();
      src.buffer = nb;
      src.loop = true;
      var f = ctx.createBiquadFilter();
      f.type = 'bandpass';
      f.Q.value = 1.4;
      f.frequency.setValueAtTime(300, r[0]);
      f.frequency.exponentialRampToValueAtTime(4200, r[1]);
      var g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, r[0]);
      g.gain.exponentialRampToValueAtTime(0.4, r[1] - 0.15);
      g.gain.exponentialRampToValueAtTime(0.0001, r[1] + 0.9);
      src.connect(f).connect(g).connect(bus);
      src.start(r[0]);
      src.stop(r[1] + 1.0);
    });

    // Masuk & keluar halus
    master.gain.setValueAtTime(0.0001, 0);
    master.gain.exponentialRampToValueAtTime(0.9, 2.2);
    master.gain.setValueAtTime(0.9, duration - 3.2);
    master.gain.exponentialRampToValueAtTime(0.0001, duration - 0.15);

    return master;
  }

  global.AXTOScore = { build: buildScore, SECTIONS: SECTIONS };
})(typeof window !== 'undefined' ? window : globalThis);
