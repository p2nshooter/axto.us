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

export function speak(text: string, locale: Locale, onEnd?: () => void): void {
  if (!isSpeechSupported()) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = LOCALE_TO_BCP47[locale];
  utterance.rate = 0.95;
  utterance.pitch = 1.05;

  const voices = window.speechSynthesis.getVoices();
  const match = voices.find((v) => v.lang === utterance.lang) || voices.find((v) => v.lang.startsWith(locale));
  if (match) utterance.voice = match;

  if (onEnd) utterance.onend = onEnd;
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking(): void {
  if (isSpeechSupported()) window.speechSynthesis.cancel();
}
