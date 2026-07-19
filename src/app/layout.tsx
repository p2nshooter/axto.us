import type { Metadata } from 'next';
import './globals.css';
import { getServerLocale } from '@/lib/i18n/server';
import { LOCALE_META } from '@/lib/i18n/locales';
import { LocaleProvider } from '@/lib/i18n/LocaleProvider';

export const metadata: Metadata = {
  title: 'AXTO — Adventures eXplore Together, Unlimited Stories',
  description:
    'AXTO adalah platform e-book anak dengan AI Voice, multi-bahasa, dan pengalaman membaca interaktif untuk anak, orang tua, dan pendidik.',
  metadataBase: new URL('https://axto.us')
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getServerLocale();
  const dir = LOCALE_META[locale].dir;

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        {/* Google AdSense — loader + account meta on every page. */}
        <meta name="google-adsense-account" content="ca-pub-6371903555702163" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6371903555702163"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
