'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/lib/i18n/LocaleProvider';

type AnimEngine = {
  W: number;
  H: number;
  FPS: number;
  DURATION: number;
  render: (ctx: CanvasRenderingContext2D, t: number) => void;
};

declare global {
  interface Window {
    AXTOAnim?: AnimEngine;
  }
}

const SCRIPT = '/animasi/lari/anim.js';
const BASE = '/animasi/lari/garis-akhir';

export default function LariContent() {
  const { locale } = useTranslation();
  const isId = locale === 'id';

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playingRef = useRef(true);
  const soundRef = useRef(false);
  const startRef = useRef(0);
  const pausedAtRef = useRef(0);
  const durationRef = useRef(178);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [sound, setSound] = useState(false);

  useEffect(() => {
    let frame = 0;
    let cancelled = false;

    function start() {
      const engine = window.AXTOAnim;
      const canvas = canvasRef.current;
      if (!engine || !canvas || cancelled) return;
      canvas.width = engine.W;
      canvas.height = engine.H;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      setReady(true);
      startRef.current = performance.now();
      durationRef.current = engine.DURATION;

      const loop = (now: number) => {
        if (playingRef.current) {
          const audio = audioRef.current;
          const t =
            soundRef.current && audio && !audio.paused
              ? audio.currentTime
              : ((now - startRef.current) / 1000) % engine.DURATION;
          engine.render(ctx, t);
        }
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    }

    // Mesin animasi lain mungkin sudah memuat AXTOAnim; muat ulang skrip ini
    // agar yang aktif adalah animasi lomba lari.
    const el = document.createElement('script');
    el.src = SCRIPT;
    el.async = true;
    el.addEventListener('load', start, { once: true });
    document.body.appendChild(el);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      el.remove();
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (playingRef.current) {
      pausedAtRef.current = performance.now();
      playingRef.current = false;
      setPlaying(false);
      if (soundRef.current) audio?.pause();
    } else {
      startRef.current += performance.now() - pausedAtRef.current;
      playingRef.current = true;
      setPlaying(true);
      if (soundRef.current) void audio?.play();
    }
  }

  function restart() {
    startRef.current = performance.now();
    playingRef.current = true;
    setPlaying(true);
    const audio = audioRef.current;
    if (audio && soundRef.current) {
      audio.currentTime = 0;
      void audio.play();
    }
  }

  function toggleSound() {
    const audio = audioRef.current;
    if (!audio) return;
    if (soundRef.current) {
      audio.pause();
      soundRef.current = false;
      setSound(false);
      startRef.current = performance.now() - audio.currentTime * 1000;
    } else {
      soundRef.current = true;
      setSound(true);
      audio.currentTime = ((performance.now() - startRef.current) / 1000) % durationRef.current;
      void audio.play();
    }
  }

  const downloads = [
    { href: `${BASE}.mp4`, label: isId ? 'MP4 · 1080p + suara' : 'MP4 · 1080p with sound', primary: true },
    { href: `${BASE}.webm`, label: 'WebM' },
    { href: `${BASE}.gif`, label: 'GIF' },
    { href: `${BASE}-audio.mp3`, label: isId ? 'Audio MP3 (musik + narasi)' : 'Audio MP3 (music + narration)' },
    { href: `${BASE}-narasi.mp3`, label: isId ? 'Narasi saja' : 'Narration only' },
    { href: `${BASE}-musik.mp3`, label: isId ? 'Musik saja' : 'Music only' },
    { href: `${BASE}-poster.png`, label: 'Poster PNG' }
  ];

  const beats = isId
    ? [
        { k: '01', title: 'Mencuri start', body: 'Pelari pertama lepas sebelum aba-aba dan langsung unggul jauh. Semua mengira perlombaan sudah selesai.' },
        { k: '02', title: 'Tertinggal jauh', body: 'Pelari kedua berangkat terakhir. Jaraknya ratusan meter, dan tidak ada yang menjagokannya.' },
        { k: '03', title: 'Ritme mengalahkan tergesa', body: 'Yang di depan kehabisan tenaga; yang di belakang menjaga napas dan langkah, lalu jaraknya menyusut.' },
        { k: '04', title: 'Garis akhir yang menentukan', body: 'Posisi awal bukan takdir. Yang menyentuh garis akhir lebih dulu justru yang paling belakang saat mulai.' }
      ]
    : [
        { k: '01', title: 'A stolen start', body: 'Runner one leaves before the gun and opens a huge lead. Everyone assumes the race is over.' },
        { k: '02', title: 'Far behind', body: 'Runner two starts last, hundreds of metres adrift, with nobody backing them.' },
        { k: '03', title: 'Rhythm beats haste', body: 'The leader burns out; the chaser keeps breath and stride steady, and the gap shrinks.' },
        { k: '04', title: 'The finish decides', body: 'A starting position is not a destiny. The one who was last at the gun touches the line first.' }
      ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-[0.3em] text-brand-500">
        {isId ? 'Animasi' : 'Animation'}
      </p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
        {isId ? 'Garis Akhir' : 'The Finish Line'}
      </h1>
      <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
        {isId
          ? 'Dua pelari, satu garis akhir. Yang pertama mencuri start dan unggul jauh; yang kedua tertinggal, menjaga ritmenya, lalu menyalip di meter-meter terakhir. Kemenangan bukan milik yang memulai lebih cepat, melainkan milik yang terus bergerak sampai akhir.'
          : 'Two runners, one finish line. The first steals the start and pulls far ahead; the second falls behind, keeps their rhythm, and passes in the final metres. Victory belongs not to whoever starts fastest, but to whoever keeps moving to the end.'}
      </p>

      <div className="mt-8 overflow-hidden rounded-xl2 border border-slate-200 bg-[#05050c] dark:border-slate-800">
        <canvas ref={canvasRef} className="block h-auto w-full" aria-label="Garis Akhir" />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          disabled={!ready}
          className="rounded-full border border-slate-300 px-4 py-2 text-sm disabled:opacity-50 dark:border-slate-700"
        >
          {playing ? (isId ? 'Jeda' : 'Pause') : isId ? 'Putar' : 'Play'}
        </button>
        <button
          type="button"
          onClick={restart}
          disabled={!ready}
          className="rounded-full border border-slate-300 px-4 py-2 text-sm disabled:opacity-50 dark:border-slate-700"
        >
          {isId ? 'Ulang dari awal' : 'Restart'}
        </button>
        <button
          type="button"
          onClick={toggleSound}
          disabled={!ready}
          className="rounded-full border border-slate-300 px-4 py-2 text-sm disabled:opacity-50 dark:border-slate-700"
        >
          {sound
            ? isId ? 'Matikan suara' : 'Mute sound'
            : isId ? 'Nyalakan suara (musik + narasi)' : 'Play sound (music + narration)'}
        </button>
        <audio ref={audioRef} src={`${BASE}-audio.mp3`} loop preload="none" />
      </div>

      <h2 className="mt-10 text-lg font-semibold">{isId ? 'Unduh' : 'Download'}</h2>
      <div className="mt-3 flex flex-wrap gap-3">
        {downloads.map((d) => (
          <a
            key={d.href}
            href={d.href}
            download
            className={
              d.primary
                ? 'rounded-full bg-brand-600 px-5 py-2 text-sm font-medium text-white hover:bg-brand-700'
                : 'rounded-full border border-slate-300 px-5 py-2 text-sm hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800'
            }
          >
            {d.label}
          </a>
        ))}
      </div>

      <h2 className="mt-12 text-lg font-semibold">{isId ? 'Alur ceritanya' : 'The story beats'}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {beats.map((b) => (
          <div key={b.k} className="rounded-xl2 border border-slate-200 p-5 dark:border-slate-800">
            <span className="text-xs font-bold tracking-widest text-brand-500">{b.k}</span>
            <h3 className="mt-2 font-semibold">{b.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{b.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
