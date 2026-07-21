import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How AXTO collects, uses and protects your information, including advertising cookies.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-xs text-neutral-500">Last updated: 21 July 2026</p>

      <p className="mt-6 leading-relaxed">
        AXTO (&quot;we&quot;, &quot;the site&quot;) is a children&apos;s e-book and reading platform. This page explains what
        information we collect, how it is used, and the choices you have.
      </p>

      <section className="mt-8 space-y-2">
        <h2 className="text-lg font-semibold">Cookies &amp; advertising (Google AdSense)</h2>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          This site shows ads served by Google AdSense to help fund it. Google and its partners may use cookies —
          including, where applicable, cookies for personalised advertising — to serve ads based on your visits to this
          and other websites. You can opt out of personalised advertising at any time via Google&apos;s Ads Settings
          (adssettings.google.com), and you can read how Google uses data from sites that use its services at
          policies.google.com/technologies/partner-sites. Visitors in the EEA/UK are shown a consent message where
          required.
        </p>
      </section>

      <section className="mt-6 space-y-2">
        <h2 className="text-lg font-semibold">Information we collect</h2>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          A language-preference cookie and the advertising cookies described above. If you create an account we store the
          email and display name you provide, and your reading progress/library so the experience works across devices.
          Anonymous analytics (page path, coarse country, UI language) help us improve the site; no precise location is
          stored.
        </p>
      </section>

      <section className="mt-6 space-y-2">
        <h2 className="text-lg font-semibold">Payments</h2>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          Paid plans are processed directly by our payment providers (e.g. PayPal, Midtrans). We never see or store your
          card number or banking credentials — only the plan you chose and its status.
        </p>
      </section>

      <section className="mt-6 space-y-2">
        <h2 className="text-lg font-semibold">Children&apos;s privacy</h2>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          AXTO is designed for families and is intended to be used by children under the guidance of a parent or teacher.
          We do not knowingly collect personal information directly from children beyond what a parent/guardian provides
          when setting up an account. Parents can review or request deletion of their family&apos;s data at any time by
          contacting us.
        </p>
      </section>

      <section className="mt-6 space-y-2">
        <h2 className="text-lg font-semibold">How we share data</h2>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          We do not sell personal data. Data is shared only with the advertising partner above (Google AdSense) and the
          payment processors, and only to provide the service you requested.
        </p>
      </section>

      <section className="mt-6 space-y-2">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          Questions about this policy or your data can be sent to{' '}
          <a className="underline" href="mailto:salam@ulyah.com">salam@ulyah.com</a>.
        </p>
      </section>
    </main>
  );
}
