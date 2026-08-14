/*
 * Naskah komentar lomba "Garis Akhir" — dibacakan seperti komentator lari.
 * Dua pelari: NO NEIM (mencuri start) dan JOFA (pemenang).
 *
 * Detiknya disamakan dengan teks yang muncul di layar pada
 * public/animasi/lari/anim.js. Kata serapan ditulis dengan ejaan Indonesia
 * Kata serapan ditulis dengan ejaan Indonesia ("finis"), dan nama Inggris
 * ditulis mengikuti bunyinya ("NO NEIM") supaya narator tidak mengejanya
 * huruf per huruf. Teks yang tampil di layar tetap "NO NAME".
 */
(function (global) {
  'use strict';

  var LINES = [
    { t: 2.4, text: 'Selamat datang di final seribu meter!' },
    { t: 5.6, text: 'Stadion penuh malam ini, dan dua pelari sudah masuk ke lintasan.' },
    { t: 11.0, text: 'Di lajur dalam NO NEIM, di lajur luar JOFA.' },
    { t: 15.6, text: 'Keduanya masuk balok start.' },
    { t: 19.4, text: 'Bersedia… siap…' },
    { t: 21.4, text: 'Astaga! NO NEIM lari sebelum aba-aba!' },
    { t: 25.4, text: 'Ia mencuri start! JOFA baru berangkat sekarang!' },
    { t: 30.6, text: 'NO NEIM sudah puluhan meter di depan. Ini keunggulan yang besar sekali.' },
    { t: 37.0, text: 'JOFA tertinggal jauh. Penonton mulai berdiri.' },
    { t: 42.0, text: 'Seratus meter berlalu, dan jaraknya justru semakin lebar.' },
    { t: 48.0, text: 'Hampir semua orang di stadion ini yakin NO NEIM akan menang.' },
    { t: 54.4, text: 'Tetapi lihat langkah JOFA. Ia tidak panik sama sekali.' },
    { t: 60.0, text: 'Napasnya teratur. Langkahnya rapi. Ia sedang menabung tenaga.' },
    { t: 66.6, text: 'Empat ratus meter. NO NEIM masih memimpin jauh.' },
    { t: 71.4, text: 'Tapi kecepatannya, saudara-saudara, kecepatannya mulai turun!' },
    { t: 77.4, text: 'Enam ratus meter, dan langkah NO NEIM mulai berat.' },
    { t: 83.0, text: 'JOFA justru menambah kecepatan! Jaraknya menyusut!' },
    { t: 89.0, text: 'Delapan puluh meter… tujuh puluh… enam puluh!' },
    { t: 95.0, text: 'Penonton mulai bersorak. Perlombaan ini belum selesai!' },
    { t: 101.0, text: 'Delapan ratus meter. JOFA terus mendekat!' },
    { t: 106.0, text: 'NO NEIM menoleh ke belakang! Ia terkejut!' },
    { t: 111.0, text: 'Ia mencoba mempercepat langkah, tetapi tenaganya sudah habis!' },
    { t: 117.0, text: 'JOFA tidak menoleh sedikit pun!' },
    { t: 122.4, text: 'Sembilan ratus meter! Mereka hampir berdampingan!' },
    { t: 127.4, text: 'Ini duel! Bahu bertemu bahu!' },
    { t: 131.4, text: 'JOFA menyalip! JOFA memimpin!' },
    { t: 135.0, text: 'Sepuluh meter… lima meter…' },
    { t: 139.0, text: 'Dan JOFA! JOFA menyentuh garis akhir lebih dulu!' },
    { t: 144.0, text: 'Luar biasa! Pelari yang tadi paling belakang keluar sebagai pemenang!' },
    { t: 150.6, text: 'Stadion bergemuruh untuk JOFA!' },
    { t: 154.4, text: 'Dan inilah pelajarannya: kemenangan bukan milik yang memulai lebih cepat,' },
    { t: 160.0, text: 'melainkan milik yang terus bergerak sampai akhir.' },
    { t: 164.4, text: 'Jangan bandingkan bab pertama hidupmu dengan bab terakhir hidup orang lain.' },
    { t: 170.4, text: 'Selama garis akhir belum kaulewati, perlombaanmu belum selesai.' }
  ];

  global.AXTONarasi = { LINES: LINES };
})(typeof window !== 'undefined' ? window : globalThis);
