/**
 * Kebijakan konten berdasarkan umur/kelas/kategori — ini bagian "smart" dari
 * smart engine. Tidak ada request generate (teks/narasi/video) yang boleh
 * jalan tanpa lewat sini dulu. Menambah band umur baru atau menyesuaikan
 * kalimat kebijakan HANYA di file ini, jangan hardcode di tempat lain.
 */

export type AgeBand = '3-5' | '6-8' | '9-12';

// "Kelas" sekolah Indonesia → band umur. Dipakai kalau request datang dengan
// kelas (dari akun siswa sekolah) alih-alih ageMin/ageMax langsung.
const GRADE_TO_BAND: Record<string, AgeBand> = {
  paud: '3-5',
  tk: '3-5',
  'sd-1': '6-8',
  'sd-2': '6-8',
  'sd-3': '6-8',
  'sd-4': '9-12',
  'sd-5': '9-12',
  'sd-6': '9-12'
};

export function resolveAgeBand(input: { ageMin?: number; ageMax?: number; grade?: string }): AgeBand {
  if (input.grade) {
    const band = GRADE_TO_BAND[input.grade.toLowerCase()];
    if (band) return band;
  }
  const mid = ((input.ageMin ?? 6) + (input.ageMax ?? input.ageMin ?? 6)) / 2;
  if (mid <= 5) return '3-5';
  if (mid <= 8) return '6-8';
  return '9-12';
}

type BandPolicy = {
  label: string;
  textGuidance: string;
  maxWordsPerPage: number;
  narrationVoiceStyle: string;
  narrationPaceHint: string;
  videoStyleGuidance: string;
  videoMaxSceneSeconds: number;
};

const BAND_POLICY: Record<AgeBand, BandPolicy> = {
  '3-5': {
    label: 'PAUD/TK (3-5 tahun)',
    textGuidance:
      'Gunakan kalimat sangat pendek (4-8 kata), sangat repetitif dan mudah ditebak, kosakata konkret sehari-hari saja (tidak ada kata abstrak), satu ide per kalimat, akhir cerita selalu hangat dan menenangkan.',
    maxWordsPerPage: 25,
    narrationVoiceStyle: 'calm_warm',
    narrationPaceHint: 'slow',
    videoStyleGuidance:
      'Satu aksi sederhana per adegan, gerakan kamera minimal, warna cerah dan kontras tinggi, tidak ada adegan gelap/menegangkan sama sekali.',
    videoMaxSceneSeconds: 4
  },
  '6-8': {
    label: 'SD kelas 1-3 (6-8 tahun)',
    textGuidance:
      'Kalimat pendek-sedang, boleh perkenalkan 1-2 kosakata baru per halaman asal ada petunjuk konteks, alur cerita jelas (awal-tengah-akhir), boleh ada humor ringan atau ketegangan kecil yang terselesaikan dengan baik.',
    maxWordsPerPage: 60,
    narrationVoiceStyle: 'warm_expressive',
    narrationPaceHint: 'normal',
    videoStyleGuidance:
      'Alur 3 babak sederhana, transisi adegan jelas, boleh ada humor visual ringan, konflik diselesaikan tanpa kekerasan.',
    videoMaxSceneSeconds: 6
  },
  '9-12': {
    label: 'SD kelas 4-6 (9-12 tahun)',
    textGuidance:
      'Kalimat dan paragraf lebih kaya, kosakata lebih luas, boleh ada subplot ringan dan sedikit ketegangan/misteri asal resolusinya positif dan tidak menakutkan berlebihan.',
    maxWordsPerPage: 120,
    narrationVoiceStyle: 'natural_engaged',
    narrationPaceHint: 'normal',
    videoStyleGuidance: 'Alur multi-adegan dengan sedikit dinamika kamera, boleh ada plot twist ringan yang ramah anak.',
    videoMaxSceneSeconds: 8
  }
};

// Berlaku untuk SEMUA band umur, tidak peduli kategori — pagar keamanan dasar
// yang selalu disisipkan ke prompt, karena audiensnya anak-anak.
export const UNIVERSAL_SAFETY_GUIDANCE = [
  'Tidak ada kekerasan nyata, senjata, darah, atau ancaman fisik serius.',
  'Tidak ada konten seram/horor yang bisa menimbulkan mimpi buruk.',
  'Tidak menyebut merek dagang, tokoh publik, atau IP berhak cipta pihak lain.',
  'Tidak meminta atau menampilkan data pribadi (nama lengkap asli, alamat, sekolah asli).',
  'Semua konflik harus terselesaikan secara damai dan positif di akhir cerita.',
  'Bahasa dan budaya harus netral/inklusif — hindari asumsi budaya yang spesifik ke satu negara saja kecuali relevan dengan kategori cerita.'
].join(' ');

export type ContentPolicy = BandPolicy & {
  band: AgeBand;
  categoryId: string;
  language: string;
  safetyGuidance: string;
};

/**
 * Titik masuk WAJIB sebelum generate apa pun. Menghasilkan parameter konkret
 * yang dipakai smart-engine.ts untuk menyusun prompt & memilih parameter
 * narasi/video — bukan LLM/TTS/video model yang menebak sendiri.
 */
export function resolveContentPolicy(input: {
  ageMin?: number;
  ageMax?: number;
  grade?: string;
  categoryId: string;
  language: string;
}): ContentPolicy {
  const band = resolveAgeBand(input);
  return {
    ...BAND_POLICY[band],
    band,
    categoryId: input.categoryId,
    language: input.language,
    safetyGuidance: UNIVERSAL_SAFETY_GUIDANCE
  };
}
