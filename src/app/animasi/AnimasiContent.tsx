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

const SCRIPT_SRC = '/animasi/anim.js';
const BASE = '/animasi/satu-puncak-banyak-jalan';

export default function AnimasiContent() {
  const { locale } = useTranslation();
  const isId = locale === 'id';

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const playingRef = useRef(true);
  const startRef = useRef(0);
  const pausedAtRef = useRef(0);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(true);

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

      const loop = (now: number) => {
        if (playingRef.current) engine.render(ctx, (now - startRef.current) / 1000);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    }

    if (window.AXTOAnim) {
      start();
    } else {
      const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
      const script = existing ?? document.createElement('script');
      script.addEventListener('load', start);
      if (!existing) {
        script.src = SCRIPT_SRC;
        script.async = true;
        document.body.appendChild(script);
      }
      return () => {
        cancelled = true;
        script.removeEventListener('load', start);
        cancelAnimationFrame(frame);
      };
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, []);

  function toggle() {
    if (playingRef.current) {
      pausedAtRef.current = performance.now();
      playingRef.current = false;
      setPlaying(false);
    } else {
      startRef.current += performance.now() - pausedAtRef.current;
      playingRef.current = true;
      setPlaying(true);
    }
  }

  function restart() {
    startRef.current = performance.now();
    playingRef.current = true;
    setPlaying(true);
  }

  const downloads = [
    { href: `${BASE}.mp4`, label: 'MP4 · 1920×1080', primary: true },
    { href: `${BASE}.gif`, label: 'GIF · 720p' },
    { href: `${BASE}.webm`, label: 'WebM' },
    { href: `${BASE}-poster.png`, label: isId ? 'Poster PNG' : 'Poster PNG' }
  ];

  const lessons = isId
    ? [
        {
          k: '01',
          title: 'Medan menentukan cara',
          body: 'Pegangan yang menyelamatkan di tebing tidak berguna di pasir. Cara selalu terikat pada tempatnya.'
        },
        {
          k: '02',
          title: 'Rintangan tidak bisa dipilih',
          body: 'Batu runtuh, badai, dan jeram datang tanpa diminta. Yang bisa dipilih hanyalah tanggapan kita.'
        },
        {
          k: '03',
          title: 'Beradaptasi, bukan memaksa',
          body: 'Ganti jalur, berhenti sebentar, ikuti arus — bertahan sering berarti menyesuaikan diri.'
        },
        {
          k: '04',
          title: 'Berhasil bukan berarti hebat',
          body: 'Cara yang berhasil hari ini bisa gagal di medan lain. Maka tetap belajar dan tetap rendah hati.'
        }
      ]
    : [
        {
          k: '01',
          title: 'The terrain decides the method',
          body: 'A grip that saves you on rock is useless in sand. Every method belongs to its place.'
        },
        {
          k: '02',
          title: 'Obstacles are not chosen',
          body: 'Falling rock, sandstorms, and rapids arrive uninvited. Only the response is ours to choose.'
        },
        {
          k: '03',
          title: 'Adapt instead of forcing',
          body: 'Switch routes, pause, follow the current — endurance is often just adjusting well.'
        },
        {
          k: '04',
          title: 'Succeeding is not greatness',
          body: 'What works today may fail on different ground. So keep learning, and stay humble.'
        }
      ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-[0.3em] text-brand-500">
        {isId ? 'Animasi' : 'Animation'}
      </p>
      <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
        {isId ? 'Satu Puncak, Banyak Jalan' : 'One Summit, Many Paths'}
      </h1>
      <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
        {isId
          ? 'Tiga pejalan menuju puncak yang sama lewat tebing, gurun, dan sungai. Tujuannya sama, tetapi caranya tidak pernah sama — karena medannya berbeda. Tidak ada cara yang sempurna; yang menentukan adalah kemampuan beradaptasi dan ketangguhan melewati rintangan.'
          : 'Three travellers head for the same summit across rock, desert, and river. The goal is shared, the method never is — the terrain sees to that. No approach is perfect; what carries you through is adaptability and resilience.'}
      </p>

      <div className="mt-8 overflow-hidden rounded-xl2 border border-slate-200 bg-[#05040f] dark:border-slate-800">
        <canvas ref={canvasRef} className="block h-auto w-full" aria-label="Satu Puncak, Banyak Jalan" />
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
      </div>

      <h2 className="mt-10 text-lg font-semibold">{isId ? 'Unduh' : 'Download'}</h2>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        {isId
          ? 'Bebas dipakai untuk kelas, presentasi, atau materi belajar.'
          : 'Free to use for classrooms, talks, or learning material.'}
      </p>
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

      <h2 className="mt-12 text-lg font-semibold">{isId ? 'Yang ingin disampaikan' : 'What it teaches'}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {lessons.map((l) => (
          <div key={l.k} className="rounded-xl2 border border-slate-200 p-5 dark:border-slate-800">
            <span className="text-xs font-bold tracking-widest text-brand-500">{l.k}</span>
            <h3 className="mt-2 font-semibold">{l.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{l.body}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
