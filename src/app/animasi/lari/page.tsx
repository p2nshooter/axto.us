import type { Metadata } from 'next';
import { getCurrentUser } from '@/lib/auth/session';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import LariContent from './LariContent';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Garis Akhir — animasi dua pelari',
  description:
    'Animasi sinematik: pelari pertama mencuri start dan unggul jauh, tetapi yang menyentuh garis akhir lebih dulu justru pelari kedua. Bisa diunduh sebagai MP4, WebM, atau GIF.',
  openGraph: {
    title: 'Garis Akhir — animasi dua pelari',
    description:
      'Yang memulai lebih dulu belum tentu tiba lebih dulu. Unduh animasinya sebagai MP4, WebM, atau GIF.',
    images: ['/animasi/lari/garis-akhir-poster.png']
  }
};

export default async function LariPage() {
  const user = await getCurrentUser();
  return (
    <div>
      <Navbar user={user} />
      <LariContent />
      <Footer />
    </div>
  );
}
