export const CATEGORIES = [
  { slug: 'bedtime', icon: '🌙', nameEn: 'Bedtime', nameId: 'Dongeng Tidur', sortOrder: 1 },
  { slug: 'fairy-tales', icon: '🏰', nameEn: 'Fairy Tales', nameId: 'Dongeng', sortOrder: 2 },
  { slug: 'adventure', icon: '🧭', nameEn: 'Adventure', nameId: 'Petualangan', sortOrder: 3 },
  { slug: 'animals', icon: '🐾', nameEn: 'Animals', nameId: 'Hewan', sortOrder: 4 },
  { slug: 'dinosaur', icon: '🦕', nameEn: 'Dinosaur', nameId: 'Dinosaurus', sortOrder: 5 },
  { slug: 'space', icon: '🚀', nameEn: 'Space', nameId: 'Antariksa', sortOrder: 6 },
  { slug: 'science', icon: '🔬', nameEn: 'Science', nameId: 'Sains', sortOrder: 7 },
  { slug: 'learning', icon: '📚', nameEn: 'Learning', nameId: 'Belajar', sortOrder: 8 },
  { slug: 'moral-stories', icon: '❤️', nameEn: 'Moral Stories', nameId: 'Cerita Moral', sortOrder: 9 },
  { slug: 'alphabet', icon: '🔤', nameEn: 'Alphabet & Letters', nameId: 'Abjad & Huruf', sortOrder: 10 },
  { slug: 'numbers', icon: '🔢', nameEn: 'Numbers & Counting', nameId: 'Angka & Berhitung', sortOrder: 11 },
  { slug: 'friendship', icon: '🤝', nameEn: 'Friendship', nameId: 'Persahabatan', sortOrder: 12 },
  { slug: 'family', icon: '👨‍👩‍👧‍👦', nameEn: 'Family', nameId: 'Keluarga', sortOrder: 13 },
  { slug: 'emotions', icon: '😊', nameEn: 'Feelings & Emotions', nameId: 'Perasaan & Emosi', sortOrder: 14 },
  { slug: 'fantasy', icon: '🪄', nameEn: 'Fantasy & Magic', nameId: 'Fantasi & Sihir', sortOrder: 15 },
  { slug: 'superheroes', icon: '🦸', nameEn: 'Superheroes', nameId: 'Pahlawan Super', sortOrder: 16 },
  { slug: 'mystery', icon: '🔍', nameEn: 'Mystery & Detective', nameId: 'Misteri & Detektif', sortOrder: 17 },
  { slug: 'pirates', icon: '🏴‍☠️', nameEn: 'Pirates & Treasure', nameId: 'Bajak Laut & Harta Karun', sortOrder: 18 },
  { slug: 'princess-knights', icon: '👑', nameEn: 'Princesses & Knights', nameId: 'Putri & Ksatria', sortOrder: 19 },
  { slug: 'ocean-life', icon: '🐠', nameEn: 'Ocean & Sea Life', nameId: 'Laut & Kehidupan Bawah Laut', sortOrder: 20 },
  { slug: 'jungle-safari', icon: '🦁', nameEn: 'Jungle & Safari', nameId: 'Hutan & Safari', sortOrder: 21 },
  { slug: 'farm', icon: '🐄', nameEn: 'Farm Life', nameId: 'Kehidupan di Peternakan', sortOrder: 22 },
  { slug: 'pets', icon: '🐶', nameEn: 'Pets', nameId: 'Hewan Peliharaan', sortOrder: 23 },
  { slug: 'vehicles', icon: '🚗', nameEn: 'Vehicles & Transportation', nameId: 'Kendaraan & Transportasi', sortOrder: 24 },
  { slug: 'robots-tech', icon: '🤖', nameEn: 'Robots & Technology', nameId: 'Robot & Teknologi', sortOrder: 25 },
  { slug: 'nature-environment', icon: '🌳', nameEn: 'Nature & Environment', nameId: 'Alam & Lingkungan', sortOrder: 26 },
  { slug: 'weather-seasons', icon: '🌦️', nameEn: 'Weather & Seasons', nameId: 'Cuaca & Musim', sortOrder: 27 },
  { slug: 'community-helpers', icon: '👩‍🚒', nameEn: 'Community Helpers', nameId: 'Profesi & Pahlawan Sehari-hari', sortOrder: 28 },
  { slug: 'sports', icon: '⚽', nameEn: 'Sports & Games', nameId: 'Olahraga & Permainan', sortOrder: 29 },
  { slug: 'music-rhymes', icon: '🎵', nameEn: 'Music & Rhymes', nameId: 'Musik & Pantun', sortOrder: 30 },
  { slug: 'holidays-culture', icon: '🎉', nameEn: 'Holidays & Celebrations', nameId: 'Hari Raya & Perayaan', sortOrder: 31 },
  { slug: 'world-cultures', icon: '🌍', nameEn: 'World Cultures & Folktales', nameId: 'Budaya Dunia & Cerita Rakyat', sortOrder: 32 },
  { slug: 'health-body', icon: '🩺', nameEn: 'Health & My Body', nameId: 'Kesehatan & Tubuhku', sortOrder: 33 },
  { slug: 'manners', icon: '🙏', nameEn: 'Manners & Good Habits', nameId: 'Sopan Santun & Kebiasaan Baik', sortOrder: 34 },
  { slug: 'humor', icon: '😂', nameEn: 'Silly & Funny Stories', nameId: 'Cerita Lucu & Konyol', sortOrder: 35 },
  { slug: 'true-stories', icon: '🌟', nameEn: 'Inspiring True Stories', nameId: 'Kisah Nyata Inspiratif', sortOrder: 36 }
] as const;

// Age bands are a second, independent filter — every book already carries
// ageMin/ageMax, so this maps that range onto named bands for the UI
// instead of needing its own database table.
export const AGE_BANDS = [
  { slug: 'baby', min: 0, max: 2, icon: '🍼', nameEn: 'Baby (0-2)', nameId: 'Bayi (0-2 th)' },
  { slug: 'preschool', min: 3, max: 5, icon: '🧒', nameEn: 'Preschool (3-5)', nameId: 'Prasekolah (3-5 th)' },
  { slug: 'early-reader', min: 6, max: 8, icon: '📖', nameEn: 'Early Reader (6-8)', nameId: 'Pembaca Awal (6-8 th)' },
  { slug: 'middle-grade', min: 9, max: 12, icon: '🎒', nameEn: 'Middle Grade (9-12)', nameId: 'Anak Sekolah (9-12 th)' }
] as const;
