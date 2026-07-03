import type { Locale } from '@/lib/i18n/locales';

export type IntroSlide = {
  icon: 'read' | 'listen' | 'learn' | 'personalize' | 'download';
  emoji: string;
  headingEn: string;
  headingId: string;
  sentencesEn: [string, string];
  sentencesId: [string, string];
};

// Narrated by the hero demo player. Two sentences per slide — the voice
// advances one slide every two sentences (see Hero.tsx onSentenceStart).
export const INTRO_SLIDES: IntroSlide[] = [
  {
    icon: 'read',
    emoji: '📖',
    headingEn: 'Read',
    headingId: 'Baca',
    sentencesEn: ['Hi there, welcome to AXTO!', "Here you can read hundreds of exciting stories made just for kids."],
    sentencesId: ['Halo, selamat datang di AXTO!', 'Di sini kamu bisa membaca ratusan cerita seru untuk anak-anak.']
  },
  {
    icon: 'listen',
    emoji: '🎧',
    headingEn: 'Listen',
    headingId: 'Dengarkan',
    sentencesEn: [
      'Every story can be read aloud by our AI voice narrator.',
      'Perfect for bedtime, or just relaxing together as a family.'
    ],
    sentencesId: [
      'Setiap cerita bisa didengarkan langsung dengan suara AI.',
      'Cocok untuk didengarkan sebelum tidur, atau sambil santai bersama keluarga.'
    ]
  },
  {
    icon: 'learn',
    emoji: '🌍',
    headingEn: 'Learn',
    headingId: 'Belajar',
    sentencesEn: [
      'AXTO supports many languages, so kids can learn while they read.',
      "There's a fun quiz at the end of every story to test what they've learned."
    ],
    sentencesId: [
      'AXTO mendukung banyak bahasa, jadi anak bisa belajar sambil membaca.',
      'Ada juga kuis seru di setiap akhir cerita untuk menguji pemahaman.'
    ]
  },
  {
    icon: 'download',
    emoji: '⬇️',
    headingEn: 'Download',
    headingId: 'Unduh',
    sentencesEn: [
      'Got a premium account? Download favorite stories to read offline anytime.',
      'Everything works even without an internet connection.'
    ],
    sentencesId: [
      'Punya akun premium? Unduh cerita favorit untuk dibaca offline kapan saja.',
      'Semua tetap bisa dibaca walau tanpa koneksi internet.'
    ]
  },
  {
    icon: 'personalize',
    emoji: '✨',
    headingEn: 'Personalize',
    headingId: 'Personalisasi',
    sentencesEn: [
      "Story recommendations are tailored to your child's age and interests.",
      "Let's start your first reading adventure with AXTO today!"
    ],
    sentencesId: [
      'Rekomendasi cerita disesuaikan dengan usia dan minat anakmu.',
      'Yuk, mulai petualangan membaca pertamamu bersama AXTO sekarang!'
    ]
  }
];

export function introSentences(locale: Locale): string[] {
  const useId = locale === 'id';
  return INTRO_SLIDES.flatMap((s) => (useId ? s.sentencesId : s.sentencesEn));
}
