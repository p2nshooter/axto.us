'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import type { Locale } from '@/lib/i18n/locales';
import { PlayIcon, PauseIcon, HeartIcon, MoonIcon, DownloadIcon } from '@/components/ui/Icons';
import { speakSentences, stopSpeaking, isSpeechSupported } from '@/lib/tts/webSpeech';
import { splitIntoSentences } from '@/lib/text';
import { saveBookOffline, isBookSavedOffline } from '@/lib/offline';
import { WordHelperText } from './WordHelperText';
import { QuizPanel } from './QuizPanel';

type Book = {
  id: string;
  slug: string;
  titleEn: string;
  titleId: string;
  coverEmoji: string;
  coverPalette: string;
  isPremium: boolean;
  pageCount: number;
};

type Page = {
  id: string;
  pageNumber: number;
  textEn: string;
  textId: string;
  textEs?: string | null;
  textFr?: string | null;
  textAr?: string | null;
  textJa?: string | null;
};

type Quiz = {
  id: string;
  questionEn: string;
  questionId: string;
  optionsEnJson: string;
  optionsIdJson: string;
  correctIndex: number;
  xpReward: number;
};

const FONT_SIZES = ['text-base', 'text-lg', 'text-xl'];

export function Reader({
  book,
  pages,
  quiz,
  isFavorited,
  initialPage,
  alreadyCompleted
}: {
  book: Book;
  pages: Page[];
  quiz: Quiz[];
  isFavorited: boolean;
  initialPage: number;
  alreadyCompleted: boolean;
}) {
  const { t, locale } = useTranslation();
  const router = useRouter();

  const [index, setIndex] = useState(Math.min(Math.max(initialPage - 1, 0), pages.length - 1));
  const [showTranslation, setShowTranslation] = useState(false);
  const [fontSizeIdx, setFontSizeIdx] = useState(1);
  const [nightMode, setNightMode] = useState(false);
  const [favorited, setFavorited] = useState(isFavorited);
  const [playing, setPlaying] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [activeSentence, setActiveSentence] = useState<number | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [savedOffline, setSavedOffline] = useState(false);

  const autoPlayNextRef = useRef(false);

  const page = pages[index];
  const title = locale === 'id' ? book.titleId : book.titleEn;

  useEffect(() => {
    setSavedOffline(isBookSavedOffline(book.id));
  }, [book.id]);

  // Pick the page text in the current UI language, but also track WHICH
  // language we actually ended up showing. If a book hasn't been translated
  // into the current locale yet we fall back to English text — and in that
  // case the narration voice must be English too, otherwise (e.g. Arabic UI
  // with only English text) the TTS reads English words with an Arabic voice.
  const { text: pageTextByLocale, textLocale } = useMemo((): { text: string; textLocale: Locale } => {
    if (!page) return { text: '', textLocale: 'en' };
    const map: Record<string, string | null | undefined> = {
      en: page.textEn,
      id: page.textId,
      es: page.textEs,
      fr: page.textFr,
      ar: page.textAr,
      ja: page.textJa
    };
    const chosen = map[locale];
    if (chosen) return { text: chosen, textLocale: locale };
    return { text: page.textEn, textLocale: 'en' };
  }, [page, locale]);

  const displayText = showTranslation ? page?.textEn ?? '' : pageTextByLocale;
  // The voice must always match the language of displayText, never the raw UI
  // locale (which may differ when we fell back to English text above).
  const speechLocale: Locale = showTranslation ? 'en' : textLocale;
  const sentences = useMemo(() => splitIntoSentences(displayText), [displayText]);

  function persistProgress(nextPage: number, opts?: { completed?: boolean; quizScore?: number; xpEarned?: number }) {
    fetch('/api/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bookId: book.id, currentPage: nextPage, ...opts })
    }).catch(() => {});
  }

  function startNarration() {
    if (!isSpeechSupported() || sentences.length === 0) return;
    setPlaying(true);
    setActiveSentence(0);
    speakSentences(sentences, speechLocale, {
      onSentenceStart: (i) => setActiveSentence(i),
      onEnd: () => {
        setPlaying(false);
        setActiveSentence(null);
        if (autoAdvance && index < pages.length - 1) {
          autoPlayNextRef.current = true;
          goTo(index + 1);
        }
      }
    });
  }

  function togglePlay() {
    if (playing) {
      stopSpeaking();
      setPlaying(false);
      setActiveSentence(null);
      return;
    }
    startNarration();
  }

  // Continues narration onto the next page automatically once its text is
  // ready, when the previous page finished reading naturally (not stopped
  // by the user) and "auto-next" is on.
  useEffect(() => {
    if (autoPlayNextRef.current) {
      autoPlayNextRef.current = false;
      const timer = setTimeout(() => startNarration(), 350);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    return () => stopSpeaking();
  }, []);

  function goTo(next: number) {
    if (next < 0) return;
    if (next >= pages.length) {
      stopSpeaking();
      setPlaying(false);
      setShowQuiz(true);
      return;
    }
    stopSpeaking();
    setPlaying(false);
    setActiveSentence(null);
    setIndex(next);
    persistProgress(next + 1);
  }

  async function toggleFavorite() {
    setFavorited((v) => !v);
    await fetch('/api/favorites', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ bookId: book.id })
    }).catch(() => {});
  }

  function downloadOffline() {
    saveBookOffline({
      bookId: book.id,
      slug: book.slug,
      titleEn: book.titleEn,
      titleId: book.titleId,
      coverEmoji: book.coverEmoji,
      coverPalette: book.coverPalette,
      savedAt: Date.now(),
      pages: pages.map((p) => ({ pageNumber: p.pageNumber, textEn: p.textEn, textId: p.textId }))
    });
    setSavedOffline(true);
  }

  function onQuizFinished(score: number, xpEarned: number) {
    persistProgress(pages.length, { completed: true, quizScore: score, xpEarned });
  }

  if (showQuiz) {
    return (
      <QuizPanel
        bookTitle={title}
        quiz={quiz}
        onFinish={onQuizFinished}
        onBackToLibrary={() => router.push('/app/library')}
      />
    );
  }

  return (
    <div className={`mx-auto max-w-2xl ${nightMode ? 'rounded-3xl bg-slate-900 p-6 text-slate-100' : ''}`}>
      <div className="mb-4 flex items-center justify-between">
        <Link href="/app/library" className="text-sm text-slate-500 hover:text-brand-600">
          ← {t('common.back')}
        </Link>
        <h1 className="truncate text-sm font-semibold">{title}</h1>
        <span className="text-xs text-slate-400">
          {t('reader.page')} {index + 1}/{pages.length}
        </span>
      </div>

      <div
        className={`flex aspect-[4/3] items-center justify-center rounded-2xl text-8xl ${
          nightMode ? 'bg-slate-800' : 'bg-gradient-to-br from-brand-100 to-white dark:from-slate-800 dark:to-slate-900'
        }`}
      >
        <span aria-hidden>{book.coverEmoji}</span>
      </div>

      <div className={`mt-5 leading-relaxed ${FONT_SIZES[fontSizeIdx]}`}>
        <WordHelperText sentences={sentences} activeIndex={playing ? activeSentence : null} locale={speechLocale} />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <button onClick={togglePlay} className="btn-primary !px-4 !py-2 text-sm" disabled={!isSpeechSupported()}>
          {playing ? <PauseIcon className="h-4 w-4" /> : <PlayIcon className="h-4 w-4" />}
          {playing ? t('reader.pause') : t('reader.playVoice')}
        </button>
        <button
          onClick={() => setAutoAdvance((v) => !v)}
          className={`btn-secondary !px-4 !py-2 text-sm ${autoAdvance ? '!border-brand-500 !text-brand-600' : ''}`}
          title={locale === 'id' ? 'Otomatis lanjut ke halaman berikutnya' : 'Automatically continue to the next page'}
        >
          ⏭️ {locale === 'id' ? 'Auto-lanjut' : 'Auto-next'}
        </button>
        <button
          onClick={() => setShowTranslation((v) => !v)}
          className={`btn-secondary !px-4 !py-2 text-sm ${showTranslation ? '!border-brand-500 !text-brand-600' : ''}`}
        >
          🌐 {t('reader.translate')}
        </button>
        <button
          onClick={() => setFontSizeIdx((i) => (i + 1) % FONT_SIZES.length)}
          className="btn-secondary !px-4 !py-2 text-sm"
        >
          Aa
        </button>
        <button
          onClick={() => setNightMode((v) => !v)}
          className={`btn-secondary !px-4 !py-2 text-sm ${nightMode ? '!border-brand-500 !text-brand-600' : ''}`}
        >
          <MoonIcon className="h-4 w-4" />
        </button>
        <button onClick={toggleFavorite} className="btn-secondary !px-4 !py-2 text-sm">
          <HeartIcon className="h-4 w-4" filled={favorited} />
        </button>
        {book.isPremium && (
          <button
            onClick={downloadOffline}
            disabled={savedOffline}
            className="btn-secondary !px-4 !py-2 text-sm disabled:opacity-50"
          >
            <DownloadIcon className="h-4 w-4" />
            {savedOffline ? '✓' : t('reader.download')}
          </button>
        )}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button onClick={() => goTo(index - 1)} disabled={index === 0} className="btn-secondary disabled:opacity-40">
          ← {t('common.back')}
        </button>
        <div className="h-1.5 flex-1 mx-4 rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-1.5 rounded-full bg-brand-500 transition-all"
            style={{ width: `${((index + 1) / pages.length) * 100}%` }}
          />
        </div>
        <button onClick={() => goTo(index + 1)} className="btn-primary">
          {index === pages.length - 1 ? '🎉' : t('common.next')} →
        </button>
      </div>
    </div>
  );
}
