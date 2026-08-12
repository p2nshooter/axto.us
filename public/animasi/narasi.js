/*
 * Naskah narasi "Satu Puncak, Banyak Jalan" (TKJ 3).
 *
 * Dipakai oleh pemutar di browser: tiap baris diucapkan lewat Web Speech API
 * (suara bawaan perangkat, bahasa Indonesia) tepat pada detik yang tertera,
 * sehingga narasinya jatuh bersamaan dengan teks di layar.
 *
 * Naskah ini juga menjadi acuan bila nanti narasi ingin direkam dengan suara
 * manusia atau layanan TTS premium, lalu digabungkan ke berkas video.
 */
(function (global) {
  'use strict';

  var LINES = [
    { t: 2.8, text: 'Satu puncak, banyak jalan.' },
    { t: 5.2, text: 'Tujuan yang sama, medan yang berbeda, cara yang tak pernah sama.' },
    { t: 10.6, text: 'Tiga orang berangkat menuju satu tujuan yang sama.' },
    { t: 16.5, text: 'Kadus satu lewat tebing batu. Kadus dua lewat gurun pasir. Kadus tiga lewat arus sungai.' },
    { t: 22.6, text: 'Masing-masing membawa benderanya sendiri, dan caranya sendiri.' },
    { t: 28.6, text: 'Cara yang menyelamatkan di tebing tidak berguna di atas pasir.' },
    { t: 34.6, text: 'Lalu rintangan datang: batu runtuh, badai pasir, dan jeram yang deras.' },
    { t: 40.6, text: 'Rintangan tidak bisa dipilih.' },
    { t: 45.9, text: 'Yang bisa dipilih adalah cara menghadapinya: menyesuaikan diri, bukan memaksa.' },
    { t: 52.2, text: 'Jalur berbeda, langkah berbeda, tetapi arahnya satu.' },
    { t: 58.6, text: 'Di puncak berdiri Istana Sukakarya, tempat ketiganya akhirnya bertemu.' },
    { t: 64.6, text: 'Tiga bendera kemenangan ditancapkan berdampingan.' },
    { t: 73.6, text: 'Tidak ada satu cara yang sempurna.' },
    { t: 76.2, text: 'Yang berhasil hari ini belum tentu berhasil di medan lain.' },
    { t: 79.2, text: 'Maka kekuatan sesungguhnya bukan pada caranya, tetapi pada kemampuan menyesuaikan diri dan bertahan.' },
    { t: 84.5, text: 'Tetap tangguh. Tetap belajar. Tetap rendah hati.' }
  ];

  /**
   * Pengucap narasi sederhana: panggil update(t) tiap frame, ia sendiri yang
   * menjaga agar satu baris hanya diucapkan sekali per putaran.
   */
  function createNarrator() {
    var spoken = {};
    var lastT = 0;
    var enabled = false;

    function pickVoice() {
      var voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
      for (var i = 0; i < voices.length; i++) {
        if (/^id(-|_)/i.test(voices[i].lang)) return voices[i];
      }
      return null;
    }

    return {
      get supported() {
        return typeof window !== 'undefined' && 'speechSynthesis' in window;
      },
      get enabled() { return enabled; },
      setEnabled: function (on) {
        enabled = !!on;
        if (!enabled && window.speechSynthesis) window.speechSynthesis.cancel();
        if (enabled) spoken = {};
      },
      reset: function () {
        spoken = {};
        if (window.speechSynthesis) window.speechSynthesis.cancel();
      },
      update: function (t) {
        if (!enabled || !this.supported) { lastT = t; return; }
        if (t < lastT) spoken = {}; // animasi mengulang dari awal
        for (var i = 0; i < LINES.length; i++) {
          var l = LINES[i];
          if (!spoken[i] && t >= l.t && t < l.t + 1.5) {
            spoken[i] = true;
            var u = new SpeechSynthesisUtterance(l.text);
            var v = pickVoice();
            if (v) u.voice = v;
            u.lang = 'id-ID';
            u.rate = 0.92;
            u.pitch = 1.0;
            u.volume = 1.0;
            window.speechSynthesis.speak(u);
          }
        }
        lastT = t;
      }
    };
  }

  global.AXTONarasi = { LINES: LINES, create: createNarrator };
})(typeof window !== 'undefined' ? window : globalThis);
