'use client';

import { useState } from 'react';
import { useTranslation } from '@/lib/i18n/LocaleProvider';

export default function ForSchoolsContent() {
  const { locale } = useTranslation();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const isId = locale === 'id';

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch('/api/schools/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, school, message })
    }).catch(() => {});
    setSent(true);
    setLoading(false);
  }

  return (
    <section className="container-page py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">
          {isId ? 'AXTO untuk Sekolah' : 'AXTO for Schools'}
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {isId
            ? 'Dashboard sekolah, banyak kelas, laporan membaca detail, dan dukungan khusus untuk institusi pendidikan.'
            : 'A school dashboard, multiple classes, detailed reading reports, and dedicated support for educational institutions.'}
        </p>
      </div>

      <div className="card mx-auto mt-10 max-w-md">
        {sent ? (
          <p className="text-center text-brand-700 dark:text-brand-300">
            {isId ? 'Terima kasih! Tim kami akan menghubungi Anda segera.' : "Thank you! Our team will reach out shortly."}
          </p>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="label">{isId ? 'Nama' : 'Name'}</label>
              <input className="input" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label className="label">{isId ? 'Nama Sekolah' : 'School Name'}</label>
              <input className="input" required value={school} onChange={(e) => setSchool(e.target.value)} />
            </div>
            <div>
              <label className="label">Email</label>
              <input type="email" className="input" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="label">{isId ? 'Pesan' : 'Message'}</label>
              <textarea className="input" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full">
              {isId ? 'Kirim' : 'Send'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
