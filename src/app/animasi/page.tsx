import type { Metadata } from 'next';
import { getCurrentUser } from '@/lib/auth/session';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import AnimasiContent from './AnimasiContent';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'TKJ 3 — Satu Puncak, Banyak Jalan',
  description:
    'Animasi karakter: Kadus 1, Kadus 2, dan Kadus 3 menuju Istana Sukakarya lewat tiga medan yang berbeda. Tidak ada cara yang sempurna — yang menentukan adalah kemampuan beradaptasi dan ketangguhan. Bisa diunduh sebagai MP4, GIF, atau WebM.',
  openGraph: {
    title: 'TKJ 3 — Satu Puncak, Banyak Jalan',
    description:
      'Tiga Kadus, tiga medan, satu tujuan: Istana Sukakarya. Unduh animasinya sebagai MP4, GIF, atau WebM.',
    images: ['/animasi/satu-puncak-banyak-jalan-poster.png']
  }
};

export default async function AnimasiPage() {
  const user = await getCurrentUser();
  return (
    <div>
      <Navbar user={user} />
      <AnimasiContent />
      <Footer />
    </div>
  );
}
