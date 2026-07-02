'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from '@/lib/i18n/LocaleProvider';
import { TrophyIcon } from '@/components/ui/Icons';

type Quiz = {
  id: string;
  questionEn: string;
  questionId: string;
  optionsEnJson: string;
  optionsIdJson: string;
  correctIndex: number;
  xpReward: number;
};

export function QuizPanel({
  bookTitle,
  quiz,
  onFinish,
  onBackToLibrary
}: {
  bookTitle: string;
  quiz: Quiz[];
  onFinish: (score: number, xpEarned: number) => void;
  onBackToLibrary: () => void;
}) {
  const { t, locale } = useTranslation();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (quiz.length === 0 && !submitted) {
      setSubmitted(true);
      onFinish(0, 0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz.length]);

  if (quiz.length === 0) {
    return (
      <div className="mx-auto max-w-md text-center">
        <TrophyIcon className="mx-auto h-14 w-14 text-yellow-500" />
        <h1 className="mt-4 text-xl font-bold">{t('reader.greatJob')}</h1>
        <button onClick={onBackToLibrary} className="btn-primary mt-6">
          {t('portal.library')}
        </button>
      </div>
    );
  }

  function select(questionId: string, optionIndex: number) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }

  function submit() {
    let correct = 0;
    let xp = 0;
    for (const q of quiz) {
      if (answers[q.id] === q.correctIndex) {
        correct += 1;
        xp += q.xpReward;
      }
    }
    setSubmitted(true);
    onFinish(correct, xp);
  }

  const allAnswered = quiz.every((q) => answers[q.id] !== undefined);

  if (submitted) {
    const correct = quiz.filter((q) => answers[q.id] === q.correctIndex).length;
    return (
      <div className="mx-auto max-w-md text-center">
        <TrophyIcon className="mx-auto h-14 w-14 text-yellow-500" />
        <h1 className="mt-4 text-xl font-bold">{t('reader.greatJob')}</h1>
        <p className="mt-2 text-slate-500">
          {correct} / {quiz.length} — {quiz.reduce((s, q) => (answers[q.id] === q.correctIndex ? s + q.xpReward : s), 0)} XP{' '}
          {t('reader.xpEarned')}
        </p>
        <button onClick={onBackToLibrary} className="btn-primary mt-6">
          {t('portal.library')}
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">{t('reader.quizTitle')}</h1>
      <p className="mt-1 text-sm text-slate-500">{bookTitle}</p>

      <div className="mt-6 space-y-6">
        {quiz.map((q, qi) => {
          const options: string[] = JSON.parse(locale === 'id' ? q.optionsIdJson : q.optionsEnJson);
          const question = locale === 'id' ? q.questionId : q.questionEn;
          return (
            <div key={q.id} className="card">
              <p className="font-semibold text-slate-800 dark:text-slate-100">
                {qi + 1}. {question}
              </p>
              <div className="mt-3 space-y-2">
                {options.map((opt, oi) => (
                  <button
                    key={oi}
                    onClick={() => select(q.id, oi)}
                    className={`block w-full rounded-xl border px-4 py-2 text-left text-sm transition ${
                      answers[q.id] === oi
                        ? 'border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300'
                        : 'border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <button onClick={submit} disabled={!allAnswered} className="btn-primary mt-6 w-full disabled:opacity-50">
        {t('reader.quizSubmit')}
      </button>
    </div>
  );
}
