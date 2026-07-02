'use client';

import type { Locale } from '@/lib/i18n/locales';

const LOCALE_TO_BCP47: Record<Locale, string> = {
  id: 'id-ID',
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  ar: 'ar-SA',
  ja: 'ja-JP'
};

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

// Chrome (desktop & Android) silently stops the speech queue after ~15s of
// continuous speaking unless it's nudged with pause()/resume(). Without this,
// long pages cut off mid-sentence. See: crbug.com/679437 (long-standing,
// still present as of this writing).
let keepAliveTimer: ReturnType<typeof setInterval> | null = null;

function startKeepAlive() {
  stopKeepAlive();
  keepAliveTimer = setInterval(() => {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }
  }, 10000);
}

function stopKeepAlive() {
  if (keepAliveTimer) {
    clearInterval(keepAliveTimer);
    keepAliveTimer = null;
  }
}

function pickVoice(lang: string): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices();
  return voices.find((v) => v.lang === lang) || voices.find((v) => v.lang.startsWith(lang.split('-')[0]));
}

export type SpeakHandlers = {
  onSentenceStart?: (index: number) => void;
  onEnd?: () => void;
};

// Bumped on every new call so a stale, in-flight utterance chain from a
// previous page/section can never fire callbacks after being superseded.
let currentToken = 0;

/**
 * Speaks every sentence in order as its own utterance (chained via onend),
 * instead of one giant utterance. This is what makes long pages read to the
 * very end without Chrome cutting them off, and lets the caller highlight /
 * auto-scroll to the sentence currently being read.
 */
export function speakSentences(sentences: string[], locale: Locale, handlers: SpeakHandlers = {}): void {
  if (!isSpeechSupported() || sentences.length === 0) {
    handlers.onEnd?.();
    return;
  }

  window.speechSynthesis.cancel();
  const token = ++currentToken;
  const lang = LOCALE_TO_BCP47[locale];
  startKeepAlive();

  let i = 0;
  const speakNext = () => {
    if (token !== currentToken) return;
    if (i >= sentences.length) {
      stopKeepAlive();
      handlers.onEnd?.();
      return;
    }

    handlers.onSentenceStart?.(i);
    const utterance = new SpeechSynthesisUtterance(sentences[i]);
    utterance.lang = lang;
    utterance.rate = 0.95;
    utterance.pitch = 1.05;
    const voice = pickVoice(lang);
    if (voice) utterance.voice = voice;

    const advance = () => {
      if (token !== currentToken) return;
      i += 1;
      speakNext();
    };
    // Never let one bad/unsupported sentence kill the whole narration —
    // skip it and keep going instead of silently stopping.
    utterance.onend = advance;
    utterance.onerror = advance;

    window.speechSynthesis.speak(utterance);
  };

  speakNext();
}

export function stopSpeaking(): void {
  currentToken++;
  stopKeepAlive();
  if (isSpeechSupported()) window.speechSynthesis.cancel();
}
