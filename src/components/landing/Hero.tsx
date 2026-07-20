'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { BookIcon, HeadphoneIcon, GlobeIcon, DownloadIcon, SparkleIcon, PlayIcon, PauseIcon } from '@/components/ui/Icons';
import { INTRO_SLIDES } from '@/content/introScript';
import { isSpeechSupported, speakSentences, stopSpeaking } from '@/lib/tts/webSpeech';

const AMBIENT_INTERVAL_MS = 4000;

export function Hero() {
  const { t, locale } = useTranslation();

  const features = [
    { icon: BookIcon, label: t('features.read.title') },
    { icon: HeadphoneIcon, label: t('features.listen.title') },
    { icon: GlobeIcon, label: t('features.learn.title') },
    { icon: DownloadIcon, label: t('features.download.title') },
    { icon: SparkleIcon, label: t('features.personalize.title') }
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const speechOk = useRef(isSpeechSupported());

  // Ambient auto-cycling of slides when idle — purely visual, no audio,
  // so it's allowed to autoplay (browsers only block audio, not CSS/JS motion).
  useEffect(() => {
    if (playing) return;
    const id = setInterval(() => {
      setActiveSlide((s) => (s + 1) % INTRO_SLIDES.length);
    }, AMBIENT_INTERVAL_MS);
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => stopSpeaking, []);

  function togglePlay() {
    if (playing) {
      stopSpeaking();
      setPlaying(false);
      return;
    }
    if (!speechOk.current) {
      // No Web Speech API support (rare/older browser) — just run the silent
      // visual walkthrough a bit faster instead of doing nothing.
      setActiveSlide(0);
      return;
    }
    setPlaying(true);
    setSentenceIndex(0);
    setActiveSlide(0);
    const sentences = INTRO_SLIDES.flatMap((s) => (locale === 'id' ? s.sentencesId : s.sentencesEn));
    speakSentences(sentences, locale, {
      pitch: 1.15,
      rate: 1,
      onSentenceStart: (i) => {
        setSentenceIndex(i);
        setActiveSlide(Math.floor(i / 2));
      },
      onEnd: () => setPlaying(false)
    });
  }

  const slide = INTRO_SLIDES[activeSlide];
  const heading = locale === 'id' ? slide.headingId : slide.headingEn;
  const caption = locale === 'id' ? slide.sentencesId[0] : slide.sentencesEn[0];
  const totalSentences = INTRO_SLIDES.length * 2;
  const progressPct = playing ? ((sentenceIndex + 1) / totalSentences) * 100 : ((activeSlide + 1) / INTRO_SLIDES.length) * 100;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container-page grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
            <SparkleIcon className="h-3.5 w-3.5" /> {t('hero.eyebrow')}
          </p>
          <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl dark:text-white">
            {t('hero.title1')}
            <br />
            <span className="text-brand-600">{t('hero.title2')}</span>
            <br />
            {t('hero.title3')}
          </h1>
          <p className="mt-5 max-w-lg text-lg text-slate-600 dark:text-slate-300">{t('hero.subtitle')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/library" className="btn-primary">
              {t('hero.ctaStart')}
            </Link>
            <a href="#categories" className="btn-secondary">
              {t('hero.ctaBrowse')}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex -space-x-2">
              {['🦊', '🐻', '🐰', '🐼'].map((e, i) => (
                <span
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-100 text-base dark:border-slate-950"
                >
                  {e}
                </span>
              ))}
            </div>
            {t('hero.usedBy')}
          </div>

          <div className="mt-10 grid grid-cols-5 gap-2 sm:gap-4">
            {features.map((f, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  stopSpeaking();
                  setPlaying(false);
                  setActiveSlide(i);
                }}
                className={`flex flex-col items-center gap-2 text-center transition ${
                  activeSlide === i ? 'scale-105' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm transition ${
                    activeSlide === i
                      ? 'bg-brand-600 text-white'
                      : 'bg-white text-brand-600 dark:bg-slate-800'
                  }`}
                >
                  <f.icon className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-medium text-slate-600 sm:text-xs dark:text-slate-400">{f.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-6 -top-6 h-24 w-24 animate-float-slow rounded-full bg-yellow-200 blur-2xl dark:bg-yellow-500/20" />
          <div
            className="absolute -right-6 bottom-0 h-32 w-32 animate-float-slow rounded-full bg-brand-200 blur-2xl dark:bg-brand-500/20"
            style={{ animationDelay: '1.5s' }}
          />
          <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">AXTO — {heading}</span>
              <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                {activeSlide + 1} / {INTRO_SLIDES.length}
              </span>
            </div>

            <div
              key={activeSlide}
              className="mt-4 flex aspect-[4/3] animate-slide-fade-in items-center justify-center rounded-2xl bg-gradient-to-br from-orange-200 via-amber-100 to-lime-100 text-7xl dark:from-brand-900/40 dark:via-slate-800 dark:to-slate-800"
            >
              {slide.icon === 'listen' && playing ? (
                <div className="flex items-end gap-1.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className="w-2 animate-wave-bar rounded-full bg-brand-500"
                      style={{ height: '2.5rem', animationDelay: `${i * 0.12}s` }}
                    />
                  ))}
                </div>
              ) : (
                <span>{slide.emoji}</span>
              )}
            </div>

            <p key={`${activeSlide}-caption`} className="mt-4 min-h-[2.5rem] animate-slide-fade-in text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {caption}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? t('hero.pauseIntro') : t('hero.playIntro')}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white transition hover:bg-brand-700"
              >
                {playing ? <PauseIcon className="h-3.5 w-3.5" /> : <PlayIcon className="h-3.5 w-3.5" />}
              </button>
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className="h-1.5 rounded-full bg-brand-500 transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
              <span className="text-xs text-slate-400">{playing ? '🔊' : '🔈'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
