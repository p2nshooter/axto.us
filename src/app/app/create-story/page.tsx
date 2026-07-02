'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { speak, stopSpeaking, isSpeechSupported } from '@/lib/tts/webSpeech';
import type { GeneratedStoryContent } from '@/lib/storyGenerator';

export default function CreateStoryPage() {
  const { t, locale } = useTranslation();
  const [childName, setChildName] = useState('');
  const [childAge, setChildAge] = useState(6);
  const [favoriteAnimal, setFavoriteAnimal] = useState('');
  const [favoriteColor, setFavoriteColor] = useState('');
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState<GeneratedStoryContent | null>(null);
  const [playing, setPlaying] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStory(null);
    try {
      const res = await fetch('/api/create-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          childName,
          childAge,
          favoriteAnimal,
          favoriteColor,
          locale: locale === 'id' ? 'id' : 'en'
        })
      });
      const data = (await res.json()) as any;
      if (res.ok) setStory(data.story);
    } finally {
      setLoading(false);
    }
  }

  function playStory() {
    if (!story) return;
    if (playing) {
      stopSpeaking();
      setPlaying(false);
      return;
    }
    setPlaying(true);
    speak(story.paragraphs.join(' '), locale, () => setPlaying(false));
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-black text-slate-900 dark:text-white">{t('createStory.title')}</h1>
      <p className="mt-1 text-slate-500 dark:text-slate-400">{t('createStory.subtitle')}</p>

      <form onSubmit={onSubmit} className="card mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="label">{t('createStory.childName')}</label>
          <input className="input" required value={childName} onChange={(e) => setChildName(e.target.value)} />
        </div>
        <div>
          <label className="label">{t('createStory.age')}</label>
          <input
            type="number"
            min={1}
            max={14}
            className="input"
            required
            value={childAge}
            onChange={(e) => setChildAge(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="label">{t('createStory.favoriteAnimal')}</label>
          <input className="input" required value={favoriteAnimal} onChange={(e) => setFavoriteAnimal(e.target.value)} />
        </div>
        <div>
          <label className="label">{t('createStory.favoriteColor')}</label>
          <input className="input" required value={favoriteColor} onChange={(e) => setFavoriteColor(e.target.value)} />
        </div>
        <button type="submit" disabled={loading} className="btn-primary sm:col-span-2">
          {loading ? t('createStory.generating') : t('createStory.generate')}
        </button>
      </form>

      {story && (
        <div className="card mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">{story.title}</h2>
            {isSpeechSupported() && (
              <button onClick={playStory} className="btn-secondary !px-3 !py-1.5 text-sm">
                {playing ? '⏸' : '▶️'} {t('reader.playVoice')}
              </button>
            )}
          </div>
          <div className="prose prose-sm mt-4 max-w-none space-y-3 text-slate-700 dark:text-slate-300">
            {story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
