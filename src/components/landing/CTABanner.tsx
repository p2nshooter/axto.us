'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/i18n/LocaleProvider';

export function CTABanner() {
  const { dict } = useTranslation();
  const c = dict.ctaBanner;

  return (
    <section className="container-page pb-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-14 text-center text-white">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
        <h3 className="relative text-2xl font-black sm:text-3xl">{c.title}</h3>
        <p className="relative mx-auto mt-3 max-w-lg text-brand-100">{c.subtitle}</p>
        <Link
          href="/register"
          className="relative mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow hover:bg-brand-50"
        >
          {c.button}
        </Link>
      </div>
    </section>
  );
}
