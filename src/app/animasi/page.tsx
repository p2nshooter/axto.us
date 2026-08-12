import type { Metadata } from 'next';
import { getCurrentUser } from '@/lib/auth/session';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import AnimasiContent from './AnimasiContent';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Satu Puncak, Banyak Jalan — Animasi AXTO',
  description:
    'Animasi karakter: tiga pejalan, tiga medan, satu tujuan. Tidak ada cara yang sempurna — yang menentukan adalah kemampuan beradaptasi dan ketangguhan. Bisa diunduh sebagai MP4, GIF, atau WebM.',
  openGraph: {
    title: 'Satu Puncak, Banyak Jalan — Animasi AXTO',
    description:
      'Tiga pejalan, tiga medan, satu tujuan. Unduh animasinya sebagai MP4, GIF, atau WebM.',
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
