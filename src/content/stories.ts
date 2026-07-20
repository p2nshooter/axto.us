import { WORLD_STORIES } from "./stories-world";
export type StoryPage = { illustrationSeed: string; textEn: string; textId: string };
export type QuizItem = {
  questionEn: string;
  questionId: string;
  optionsEn: string[];
  optionsId: string[];
  correctIndex: number;
};

export type Story = {
  slug: string;
  titleEn: string;
  titleId: string;
  descriptionEn: string;
  descriptionId: string;
  categorySlug: string;
  authorSlug: string;
  coverEmoji: string;
  coverPalette: string;
  ageMin: number;
  ageMax: number;
  isPremium: boolean;
  pages: StoryPage[];
  quiz: QuizItem[];
};

export const STORIES: Story[] = [
  {
    slug: 'the-little-fox',
    titleEn: 'The Little Fox',
    titleId: 'The Little Fox',
    descriptionEn: 'A curious little fox sets off into the forest and discovers that being brave means asking for help too.',
    descriptionId: 'Seekor rubah kecil yang penasaran menjelajahi hutan dan belajar bahwa berani juga berarti berani meminta bantuan.',
    categorySlug: 'adventure',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🦊',
    coverPalette: 'sunrise',
    ageMin: 3,
    ageMax: 7,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'fox-1',
        textEn: 'Once upon a time, in a beautiful forest, there lived a little fox. He was curious, brave, and loved adventures.',
        textId: 'Pada suatu waktu, di sebuah hutan yang indah, hiduplah seekor rubah kecil. Ia penasaran, berani, dan suka berpetualang.'
      },
      {
        illustrationSeed: 'fox-2',
        textEn: 'Every morning, the little fox woke up early to explore a new corner of the forest.',
        textId: 'Setiap pagi, rubah kecil itu bangun lebih awal untuk menjelajahi sudut hutan yang baru.'
      },
      {
        illustrationSeed: 'fox-3',
        textEn: 'One day, he found a path he had never seen before. It wound deep into the tall, whispering trees.',
        textId: 'Suatu hari, ia menemukan jalan setapak yang belum pernah dilihatnya. Jalan itu berkelok masuk ke rimbunnya pepohonan.'
      },
      {
        illustrationSeed: 'fox-4',
        textEn: 'He walked and walked, until suddenly the path split into three directions. The little fox did not know which way to go.',
        textId: 'Ia berjalan terus, sampai tiba-tiba jalan itu bercabang menjadi tiga arah. Rubah kecil tidak tahu harus memilih arah mana.'
      },
      {
        illustrationSeed: 'fox-5',
        textEn: 'A wise old owl saw him standing there. "Being brave doesn\'t mean you have to know everything," she said. "It\'s also brave to ask for help."',
        textId: 'Seekor burung hantu tua yang bijak melihatnya berdiri kebingungan. "Berani bukan berarti harus tahu segalanya," katanya. "Meminta bantuan juga adalah keberanian."'
      },
      {
        illustrationSeed: 'fox-6',
        textEn: 'So the little fox asked the owl for directions. Together, they found the most beautiful meadow he had ever seen.',
        textId: 'Maka rubah kecil pun bertanya arah kepada burung hantu. Bersama-sama, mereka menemukan padang rumput terindah yang pernah ia lihat.'
      },
      {
        illustrationSeed: 'fox-7',
        textEn: 'From that day on, the little fox explored the forest with new friends by his side.',
        textId: 'Sejak hari itu, rubah kecil menjelajahi hutan bersama teman-teman baru di sisinya.'
      },
      {
        illustrationSeed: 'fox-8',
        textEn: 'And he learned that the best adventures are the ones we share with others. The end.',
        textId: 'Dan ia belajar bahwa petualangan terbaik adalah yang dibagikan bersama orang lain. Selesai.'
      }
    ],
    quiz: [
      {
        questionEn: 'What did the little fox love to do?',
        questionId: 'Apa yang disukai rubah kecil?',
        optionsEn: ['Sleeping all day', 'Exploring the forest', 'Baking cookies', 'Swimming in the sea'],
        optionsId: ['Tidur seharian', 'Menjelajahi hutan', 'Membuat kue', 'Berenang di laut'],
        correctIndex: 1
      },
      {
        questionEn: 'Who helped the little fox when the path split into three?',
        questionId: 'Siapa yang membantu rubah kecil saat jalan bercabang tiga?',
        optionsEn: ['A rabbit', 'A wise old owl', 'A fisherman', 'His mother'],
        optionsId: ['Seekor kelinci', 'Burung hantu tua yang bijak', 'Seorang nelayan', 'Ibunya'],
        correctIndex: 1
      },
      {
        questionEn: 'What is the lesson of the story?',
        questionId: 'Apa pelajaran dari cerita ini?',
        optionsEn: [
          'Never leave home',
          'Asking for help is also brave',
          'Foxes cannot get lost',
          'Owls are scary'
        ],
        optionsId: [
          'Jangan pernah keluar rumah',
          'Meminta bantuan juga sebuah keberanian',
          'Rubah tidak bisa tersesat',
          'Burung hantu itu menakutkan'
        ],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'the-brave-lion',
    titleEn: 'The Brave Lion',
    titleId: 'The Brave Lion',
    descriptionEn: 'A young lion who is afraid of the dark discovers that even the bravest hearts can feel scared sometimes.',
    descriptionId: 'Seekor singa muda yang takut gelap belajar bahwa hati yang paling berani pun boleh merasa takut.',
    categorySlug: 'fairy-tales',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🦁',
    coverPalette: 'candy',
    ageMin: 3,
    ageMax: 7,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'lion-1',
        textEn: 'In the golden savanna lived a young lion named Rico, with the fluffiest mane in the whole pride.',
        textId: 'Di padang savana keemasan hiduplah seekor singa muda bernama Rico, dengan surai paling lebat di seluruh kawanan.'
      },
      {
        illustrationSeed: 'lion-2',
        textEn: 'Everyone said lions were the bravest animals of all. But at night, Rico was afraid of the dark.',
        textId: 'Semua orang berkata singa adalah hewan paling berani. Tapi di malam hari, Rico takut pada gelap.'
      },
      {
        illustrationSeed: 'lion-3',
        textEn: 'He worried the other animals would laugh if they knew his secret, so he hid his fear every night.',
        textId: 'Ia khawatir hewan lain akan menertawakannya jika tahu rahasianya, jadi ia menyembunyikan rasa takutnya setiap malam.'
      },
      {
        illustrationSeed: 'lion-4',
        textEn: 'One evening, his little sister Lulu saw him trembling by the rocks. "What is wrong, big brother?" she asked gently.',
        textId: 'Suatu malam, adiknya, Lulu, melihatnya gemetar di dekat bebatuan. "Kenapa, Kak?" tanyanya lembut.'
      },
      {
        illustrationSeed: 'lion-5',
        textEn: 'Rico took a deep breath and told her the truth. Lulu smiled and said, "Even lions can be scared. That is okay."',
        textId: 'Rico menarik napas dalam dan menceritakan yang sebenarnya. Lulu tersenyum, "Singa pun boleh takut. Itu tidak apa-apa."'
      },
      {
        illustrationSeed: 'lion-6',
        textEn: 'From then on, Lulu stayed close to him at night, and together they watched the stars until Rico felt brave again.',
        textId: 'Sejak itu, Lulu selalu menemaninya di malam hari, dan bersama-sama mereka memandangi bintang hingga Rico merasa berani lagi.'
      },
      {
        illustrationSeed: 'lion-7',
        textEn: 'Rico learned that real bravery is not about never being afraid — it is about sharing your feelings with someone who loves you.',
        textId: 'Rico belajar bahwa keberanian sejati bukan berarti tidak pernah takut — melainkan berani berbagi perasaan dengan orang yang menyayangimu.'
      }
    ],
    quiz: [
      {
        questionEn: 'What was Rico afraid of?',
        questionId: 'Apa yang ditakuti Rico?',
        optionsEn: ['Water', 'The dark', 'Loud noises', 'Other lions'],
        optionsId: ['Air', 'Gelap', 'Suara keras', 'Singa lain'],
        correctIndex: 1
      },
      {
        questionEn: 'Who helped Rico feel better?',
        questionId: 'Siapa yang membantu Rico merasa lebih baik?',
        optionsEn: ['His father', 'A zebra', 'His little sister Lulu', 'A hunter'],
        optionsId: ['Ayahnya', 'Seekor zebra', 'Adiknya, Lulu', 'Seorang pemburu'],
        correctIndex: 2
      },
      {
        questionEn: 'What does the story teach about bravery?',
        questionId: 'Apa yang diajarkan cerita ini tentang keberanian?',
        optionsEn: [
          'Brave means never being scared',
          'It is okay to share your fears with someone who loves you',
          'Only lions can be brave',
          'You should hide your feelings'
        ],
        optionsId: [
          'Berani berarti tidak pernah takut',
          'Boleh berbagi rasa takut dengan orang yang menyayangimu',
          'Hanya singa yang bisa berani',
          'Kamu harus menyembunyikan perasaanmu'
        ],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'under-the-sea',
    titleEn: 'Under the Sea',
    titleId: 'Under the Sea',
    descriptionEn: 'A little clownfish explores the coral reef and learns why every creature in the ocean matters.',
    descriptionId: 'Seekor ikan badut kecil menjelajahi terumbu karang dan belajar mengapa setiap makhluk laut itu penting.',
    categorySlug: 'animals',
    authorSlug: 'emily-clark',
    coverEmoji: '🐠',
    coverPalette: 'ocean',
    ageMin: 3,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'sea-1',
        textEn: 'Deep in the turquoise sea, a little clownfish named Coral lived in a soft anemone home.',
        textId: 'Jauh di laut biru toska, seekor ikan badut kecil bernama Coral tinggal di rumah anemon yang lembut.'
      },
      {
        illustrationSeed: 'sea-2',
        textEn: 'Coral loved to swim around the reef, waving hello to crabs, starfish, and gentle sea turtles.',
        textId: 'Coral suka berenang mengelilingi terumbu karang, menyapa kepiting, bintang laut, dan penyu laut yang ramah.'
      },
      {
        illustrationSeed: 'sea-3',
        textEn: 'One day, Coral noticed the coral reef looked pale and tired. "Why do you look sad?" she asked.',
        textId: 'Suatu hari, Coral melihat terumbu karang tampak pucat dan lesu. "Kenapa kau terlihat sedih?" tanyanya.'
      },
      {
        illustrationSeed: 'sea-4',
        textEn: 'A wise sea turtle explained, "The reef needs clean water and all of us working together to stay healthy."',
        textId: '"Terumbu karang butuh air bersih dan kita semua yang saling menjaga agar tetap sehat," jelas penyu laut yang bijak.'
      },
      {
        illustrationSeed: 'sea-5',
        textEn: 'So Coral gathered her friends — crabs, shrimp, and small fish — to help clean up plastic that had drifted in.',
        textId: 'Maka Coral mengajak teman-temannya — kepiting, udang, dan ikan-ikan kecil — untuk membersihkan sampah plastik yang hanyut.'
      },
      {
        illustrationSeed: 'sea-6',
        textEn: 'Slowly, the reef began to sparkle with color again, and all the sea creatures cheered together.',
        textId: 'Perlahan, terumbu karang mulai bersinar penuh warna kembali, dan semua makhluk laut bersorak bersama.'
      },
      {
        illustrationSeed: 'sea-7',
        textEn: 'Coral learned that even a small fish can help take care of a big, beautiful ocean.',
        textId: 'Coral belajar bahwa ikan kecil pun bisa membantu menjaga lautan yang luas dan indah.'
      }
    ],
    quiz: [
      {
        questionEn: 'What kind of fish is Coral?',
        questionId: 'Ikan jenis apakah Coral?',
        optionsEn: ['A shark', 'A clownfish', 'A jellyfish', 'A dolphin'],
        optionsId: ['Hiu', 'Ikan badut', 'Ubur-ubur', 'Lumba-lumba'],
        correctIndex: 1
      },
      {
        questionEn: 'What did the reef need to stay healthy?',
        questionId: 'Apa yang dibutuhkan terumbu karang agar tetap sehat?',
        optionsEn: ['More sand', 'Clean water and teamwork', 'Loud music', 'More plastic'],
        optionsId: ['Lebih banyak pasir', 'Air bersih dan kerja sama', 'Musik keras', 'Lebih banyak plastik'],
        correctIndex: 1
      },
      {
        questionEn: 'What is the moral of the story?',
        questionId: 'Apa pesan moral dari cerita ini?',
        optionsEn: [
          'Only big animals matter',
          'Even small creatures can help protect the ocean',
          'Fish should stay alone',
          'Plastic is good for the sea'
        ],
        optionsId: [
          'Hanya hewan besar yang penting',
          'Makhluk kecil pun bisa membantu menjaga laut',
          'Ikan sebaiknya sendirian',
          'Plastik baik untuk laut'
        ],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'dinosaur-world',
    titleEn: 'Dinosaur World',
    titleId: 'Dinosaur World',
    descriptionEn: 'A gentle young dinosaur discovers that being different from the other dinosaurs is what makes him special.',
    descriptionId: 'Seekor dinosaurus muda yang lembut menyadari bahwa perbedaannya justru membuatnya istimewa.',
    categorySlug: 'dinosaur',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🦕',
    coverPalette: 'forest',
    ageMin: 4,
    ageMax: 9,
    isPremium: true,
    pages: [
      {
        illustrationSeed: 'dino-1',
        textEn: 'Long, long ago, in a valley full of ferns, a little long-necked dinosaur named Dot hatched from her egg.',
        textId: 'Dahulu kali, di sebuah lembah penuh pakis, seekor dinosaurus leher panjang kecil bernama Dot menetas dari telurnya.'
      },
      {
        illustrationSeed: 'dino-2',
        textEn: 'All the other dinosaurs in the valley were loud and fast. But Dot liked to move slowly and look at little things.',
        textId: 'Semua dinosaurus lain di lembah itu berisik dan cepat. Tapi Dot suka bergerak pelan dan memperhatikan hal-hal kecil.'
      },
      {
        illustrationSeed: 'dino-3',
        textEn: 'She noticed tiny flowers between the rocks, and patterns in the clouds that no one else seemed to see.',
        textId: 'Ia memperhatikan bunga-bunga kecil di antara bebatuan, dan bentuk-bentuk awan yang tak disadari yang lain.'
      },
      {
        illustrationSeed: 'dino-4',
        textEn: 'One day, a big storm confused the herd — they could not find the safe cave they always used.',
        textId: 'Suatu hari, badai besar membuat kawanan itu bingung — mereka tidak bisa menemukan gua aman yang biasa mereka pakai.'
      },
      {
        illustrationSeed: 'dino-5',
        textEn: 'But Dot, who always noticed small details, remembered a hidden path marked by a patch of blue flowers.',
        textId: 'Tapi Dot, yang selalu memperhatikan detail kecil, mengingat jalan tersembunyi yang ditandai bunga biru.'
      },
      {
        illustrationSeed: 'dino-6',
        textEn: 'She led the whole herd safely to the cave. Everyone cheered for careful, curious little Dot!',
        textId: 'Ia memimpin seluruh kawanan dengan selamat ke gua itu. Semua bersorak untuk Dot yang teliti dan penasaran!'
      },
      {
        illustrationSeed: 'dino-7',
        textEn: 'From that day, Dot understood that being different was not a weakness — it was her very own kind of strength.',
        textId: 'Sejak hari itu, Dot mengerti bahwa menjadi berbeda bukanlah kelemahan — itu adalah kekuatannya sendiri.'
      }
    ],
    quiz: [
      {
        questionEn: 'What did Dot like to do differently from the other dinosaurs?',
        questionId: 'Apa yang Dot suka lakukan berbeda dari dinosaurus lain?',
        optionsEn: ['Run very fast', 'Move slowly and notice small things', 'Roar loudly', 'Sleep all day'],
        optionsId: ['Berlari sangat cepat', 'Bergerak pelan dan memperhatikan hal kecil', 'Meraung keras', 'Tidur seharian'],
        correctIndex: 1
      },
      {
        questionEn: 'How did Dot help the herd during the storm?',
        questionId: 'Bagaimana Dot membantu kawanan saat badai?',
        optionsEn: [
          'She hid alone',
          'She remembered a hidden path with blue flowers',
          'She called for help loudly',
          'She ran away'
        ],
        optionsId: [
          'Ia bersembunyi sendirian',
          'Ia mengingat jalan tersembunyi dengan bunga biru',
          'Ia berteriak minta tolong',
          'Ia melarikan diri'
        ],
        correctIndex: 1
      },
      {
        questionEn: 'What is the lesson of the story?',
        questionId: 'Apa pelajaran dari cerita ini?',
        optionsEn: [
          'Being different can be a strength',
          'Everyone must be the same',
          'Storms are not dangerous',
          'Only fast dinosaurs are useful'
        ],
        optionsId: [
          'Menjadi berbeda bisa menjadi kekuatan',
          'Semua orang harus sama',
          'Badai tidak berbahaya',
          'Hanya dinosaurus cepat yang berguna'
        ],
        correctIndex: 0
      }
    ]
  },
  {
    slug: 'a-journey-to-space',
    titleEn: 'A Journey to Space',
    titleId: 'A Journey to Space',
    descriptionEn: 'A young astronaut travels past the moon and stars, discovering how small — and how connected — our world truly is.',
    descriptionId: 'Seorang astronaut cilik terbang melewati bulan dan bintang, dan menyadari betapa kecil serta saling terhubungnya dunia kita.',
    categorySlug: 'space',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🚀',
    coverPalette: 'cosmic',
    ageMin: 5,
    ageMax: 10,
    isPremium: true,
    pages: [
      {
        illustrationSeed: 'space-1',
        textEn: 'Maya always dreamed of the stars. One quiet night, a tiny silver rocket landed softly in her backyard.',
        textId: 'Maya selalu memimpikan bintang-bintang. Suatu malam yang tenang, sebuah roket perak kecil mendarat lembut di halaman belakangnya.'
      },
      {
        illustrationSeed: 'space-2',
        textEn: 'A friendly robot named Orbit opened the hatch. "Would you like to see the universe?" it asked.',
        textId: 'Sebuah robot ramah bernama Orbit membuka pintunya. "Mau melihat alam semesta?" tanyanya.'
      },
      {
        illustrationSeed: 'space-3',
        textEn: 'They zoomed past the Moon, where Maya bounced in the low gravity and giggled with delight.',
        textId: 'Mereka melesat melewati Bulan, tempat Maya melompat-lompat dalam gravitasi rendah sambil tertawa senang.'
      },
      {
        illustrationSeed: 'space-4',
        textEn: 'Next, they flew by Saturn, its icy rings sparkling like a giant necklace made of diamonds.',
        textId: 'Selanjutnya, mereka terbang melewati Saturnus, cincin esnya berkilau seperti kalung raksasa dari berlian.'
      },
      {
        illustrationSeed: 'space-5',
        textEn: 'Looking back, Maya saw planet Earth — a tiny blue marble glowing gently in the dark.',
        textId: 'Menoleh ke belakang, Maya melihat planet Bumi — kelereng biru kecil yang bersinar lembut di kegelapan.'
      },
      {
        illustrationSeed: 'space-6',
        textEn: '"It looks so small," Maya whispered. "That is our whole home," said Orbit. "Everyone we love is right there."',
        textId: '"Kecil sekali," bisik Maya. "Itulah rumah kita semua," kata Orbit. "Semua orang yang kita sayangi ada di sana."'
      },
      {
        illustrationSeed: 'space-7',
        textEn: 'Maya returned home with a new feeling in her heart — Earth was small in the universe, but full of everything she loved.',
        textId: 'Maya pulang dengan perasaan baru di hatinya — Bumi memang kecil di alam semesta, tapi penuh dengan segala yang ia cintai.'
      }
    ],
    quiz: [
      {
        questionEn: "Who was Maya's robot friend?",
        questionId: 'Siapa nama robot teman Maya?',
        optionsEn: ['Orbit', 'Rocket', 'Star', 'Luna'],
        optionsId: ['Orbit', 'Rocket', 'Star', 'Luna'],
        correctIndex: 0
      },
      {
        questionEn: 'What did Maya see that looked like a necklace of diamonds?',
        questionId: 'Apa yang dilihat Maya yang tampak seperti kalung berlian?',
        optionsEn: ["The Moon's dust", "Saturn's rings", 'The Sun', 'A comet'],
        optionsId: ['Debu Bulan', 'Cincin Saturnus', 'Matahari', 'Komet'],
        correctIndex: 1
      },
      {
        questionEn: 'What did Maya learn about Earth?',
        questionId: 'Apa yang dipelajari Maya tentang Bumi?',
        optionsEn: [
          'It is the biggest planet',
          'It is small but full of everyone she loves',
          'It has rings like Saturn',
          'It is not important'
        ],
        optionsId: [
          'Bumi adalah planet terbesar',
          'Bumi kecil tapi penuh orang yang ia sayangi',
          'Bumi memiliki cincin seperti Saturnus',
          'Bumi tidak penting'
        ],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'robot-and-me',
    titleEn: 'Robot and Me',
    titleId: 'Robot and Me',
    descriptionEn: 'A shy inventor builds a small robot friend and learns how curiosity and kindness go hand in hand.',
    descriptionId: 'Seorang anak pemalu membuat teman robot kecil dan belajar bahwa rasa ingin tahu dan kebaikan hati berjalan beriringan.',
    categorySlug: 'science',
    authorSlug: 'david-lee',
    coverEmoji: '🤖',
    coverPalette: 'meadow',
    ageMin: 5,
    ageMax: 10,
    isPremium: true,
    pages: [
      {
        illustrationSeed: 'robot-1',
        textEn: 'Ken loved building things out of old boxes, gears, and batteries in his garage workshop.',
        textId: 'Ken suka membuat berbagai hal dari kardus bekas, roda gigi, dan baterai di bengkel garasinya.'
      },
      {
        illustrationSeed: 'robot-2',
        textEn: 'One rainy afternoon, he finally finished his biggest project yet: a small robot he named Bolt.',
        textId: 'Suatu sore yang hujan, ia akhirnya menyelesaikan proyek terbesarnya: robot kecil yang ia beri nama Bolt.'
      },
      {
        illustrationSeed: 'robot-3',
        textEn: 'Bolt could not talk, but it beeped happily and rolled after Ken wherever he went.',
        textId: 'Bolt tidak bisa berbicara, tapi ia berbunyi "beep" gembira dan mengikuti Ken ke mana pun ia pergi.'
      },
      {
        illustrationSeed: 'robot-4',
        textEn: 'At school, Ken was too shy to share his invention. He worried the other kids might laugh.',
        textId: 'Di sekolah, Ken terlalu malu untuk menunjukkan ciptaannya. Ia khawatir teman-teman akan menertawakannya.'
      },
      {
        illustrationSeed: 'robot-5',
        textEn: 'But Bolt rolled out of his backpack by accident — and beeped so cheerfully that the whole class laughed with joy, not mockery.',
        textId: 'Namun Bolt tidak sengaja menggelinding keluar dari tasnya — dan berbunyi begitu ceria hingga seisi kelas tertawa senang, bukan mengejek.'
      },
      {
        illustrationSeed: 'robot-6',
        textEn: 'Soon, every classmate wanted to help Ken build more robot friends, using boxes and gears of their own.',
        textId: 'Segera, semua teman sekelas ingin membantu Ken membuat lebih banyak teman robot, menggunakan kardus dan roda gigi mereka sendiri.'
      },
      {
        illustrationSeed: 'robot-7',
        textEn: 'Ken learned that sharing what you love can turn a quiet idea into something everyone enjoys together.',
        textId: 'Ken belajar bahwa berbagi apa yang kita sukai bisa mengubah ide yang sunyi menjadi sesuatu yang dinikmati bersama.'
      }
    ],
    quiz: [
      {
        questionEn: "What did Ken name his robot?",
        questionId: 'Siapa nama yang Ken berikan untuk robotnya?',
        optionsEn: ['Bolt', 'Spark', 'Gizmo', 'Circuit'],
        optionsId: ['Bolt', 'Spark', 'Gizmo', 'Circuit'],
        correctIndex: 0
      },
      {
        questionEn: 'Why was Ken afraid to share his invention at school?',
        questionId: 'Kenapa Ken takut menunjukkan ciptaannya di sekolah?',
        optionsEn: ['He forgot it at home', 'He worried classmates would laugh', 'It was broken', 'He did not like robots'],
        optionsId: ['Ia lupa membawanya', 'Ia khawatir teman-teman menertawakannya', 'Robotnya rusak', 'Ia tidak suka robot'],
        correctIndex: 1
      },
      {
        questionEn: 'What happened when the class saw Bolt?',
        questionId: 'Apa yang terjadi saat kelas melihat Bolt?',
        optionsEn: [
          'They ignored it',
          'They laughed with joy and wanted to help build more',
          'The teacher took it away',
          'Everyone got scared'
        ],
        optionsId: [
          'Mereka mengabaikannya',
          'Mereka tertawa senang dan ingin membantu membuat lebih banyak',
          'Guru mengambilnya',
          'Semua orang ketakutan'
        ],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'goodnight-little-owl',
    titleEn: 'Goodnight, Little Owl',
    titleId: 'Selamat Malam, Burung Hantu Kecil',
    descriptionEn: 'A tiny owl who is afraid of the daylight learns that everyone has their own perfect time to shine.',
    descriptionId: 'Burung hantu kecil yang takut cahaya siang belajar bahwa setiap makhluk punya waktunya sendiri untuk bersinar.',
    categorySlug: 'bedtime',
    authorSlug: 'siti-aminah',
    coverEmoji: '🦉',
    coverPalette: 'night',
    ageMin: 2,
    ageMax: 6,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'owl-1',
        textEn: 'High in an old oak tree lived a tiny owl named Pip, who loved the cool, quiet night.',
        textId: 'Tinggi di pohon ek tua, hiduplah burung hantu kecil bernama Pip, yang menyukai malam yang sejuk dan tenang.'
      },
      {
        illustrationSeed: 'owl-2',
        textEn: 'While other animals slept, Pip opened her big round eyes and watched the moon rise softly.',
        textId: 'Saat hewan lain tertidur, Pip membuka mata bulatnya yang besar dan menyaksikan bulan terbit perlahan.'
      },
      {
        illustrationSeed: 'owl-3',
        textEn: 'She gently glided from branch to branch, humming a soft tune only the stars could hear.',
        textId: 'Ia terbang lembut dari dahan ke dahan, bersenandung pelan yang hanya bisa didengar oleh bintang-bintang.'
      },
      {
        illustrationSeed: 'owl-4',
        textEn: 'Down below, a little firefly blinked her light. "Aren\'t you scared of the dark?" she asked.',
        textId: 'Di bawah sana, seekor kunang-kunang kecil berkedip. "Kamu tidak takut gelap?" tanyanya.'
      },
      {
        illustrationSeed: 'owl-5',
        textEn: '"The dark is my favorite blanket," said Pip with a smile. "It is soft, quiet, and full of stars."',
        textId: '"Gelap adalah selimut favoritku," kata Pip sambil tersenyum. "Lembut, tenang, dan penuh bintang."'
      },
      {
        illustrationSeed: 'owl-6',
        textEn: 'The firefly smiled back and lit up beside her, and together they made the night feel warm and cozy.',
        textId: 'Kunang-kunang itu tersenyum balik dan bersinar di sampingnya, dan bersama-sama mereka membuat malam terasa hangat.'
      },
      {
        illustrationSeed: 'owl-7',
        textEn: 'As the forest grew sleepy and still, Pip whispered goodnight to the moon — and so do you. Sweet dreams.',
        textId: 'Saat hutan mulai lelap dan tenang, Pip berbisik selamat malam pada bulan — begitu juga kamu. Mimpi indah.'
      }
    ],
    quiz: [
      {
        questionEn: "What is Pip's name?",
        questionId: 'Siapa nama burung hantu kecil itu?',
        optionsEn: ['Pip', 'Hoot', 'Luna', 'Star'],
        optionsId: ['Pip', 'Hoot', 'Luna', 'Star'],
        correctIndex: 0
      },
      {
        questionEn: 'What did Pip call the dark?',
        questionId: 'Apa julukan Pip untuk kegelapan?',
        optionsEn: ['Her favorite blanket', 'Something scary', 'A monster', 'Cold and lonely'],
        optionsId: ['Selimut favoritnya', 'Sesuatu yang menakutkan', 'Monster', 'Dingin dan sepi'],
        correctIndex: 0
      },
      {
        questionEn: 'Who became friends with Pip?',
        questionId: 'Siapa yang berteman dengan Pip?',
        optionsEn: ['A firefly', 'A wolf', 'A cat', 'A bear'],
        optionsId: ['Kunang-kunang', 'Serigala', 'Kucing', 'Beruang'],
        correctIndex: 0
      }
    ]
  },
  {
    slug: 'the-letter-parade',
    titleEn: 'The Letter Parade',
    titleId: 'Parade Huruf',
    descriptionEn: 'The letters of the alphabet come to life for a parade, helping a little girl fall in love with reading.',
    descriptionId: 'Huruf-huruf abjad hidup dan berbaris dalam parade, membuat seorang gadis kecil jatuh cinta pada membaca.',
    categorySlug: 'learning',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🔤',
    coverPalette: 'dusk',
    ageMin: 3,
    ageMax: 6,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'letter-1',
        textEn: 'Every night before bed, little Nadia said, "I don\'t like letters. They look like squiggly lines."',
        textId: 'Setiap malam sebelum tidur, Nadia kecil berkata, "Aku tidak suka huruf. Bentuknya seperti garis-garis aneh."'
      },
      {
        illustrationSeed: 'letter-2',
        textEn: 'One night, a shining letter A hopped off her book. "Would you like to meet my friends?" it asked cheerfully.',
        textId: 'Suatu malam, huruf A yang berkilau melompat keluar dari bukunya. "Mau berkenalan dengan teman-temanku?" tanyanya riang.'
      },
      {
        illustrationSeed: 'letter-3',
        textEn: 'Suddenly, B bounced in like a ball, C curled up like a smiling moon, and D marched like a little drum.',
        textId: 'Tiba-tiba, B memantul seperti bola, C melengkung seperti bulan yang tersenyum, dan D berbaris seperti drum kecil.'
      },
      {
        illustrationSeed: 'letter-4',
        textEn: 'The letters lined up into a parade, and when they marched together, they spelled Nadia\'s name!',
        textId: 'Huruf-huruf itu berbaris membentuk parade, dan ketika berjalan bersama, mereka mengeja nama Nadia!'
      },
      {
        illustrationSeed: 'letter-5',
        textEn: '"Every letter is a puzzle piece," said A. "Put enough pieces together, and you can tell any story in the world."',
        textId: '"Setiap huruf adalah kepingan puzzle," kata A. "Kumpulkan cukup banyak kepingan, dan kamu bisa menceritakan kisah apa pun di dunia."'
      },
      {
        illustrationSeed: 'letter-6',
        textEn: 'From that night on, Nadia looked at every book with new excitement, ready to meet the letters inside.',
        textId: 'Sejak malam itu, Nadia memandang setiap buku dengan semangat baru, siap bertemu huruf-huruf di dalamnya.'
      }
    ],
    quiz: [
      {
        questionEn: 'What did Nadia think of letters at first?',
        questionId: 'Apa pendapat Nadia tentang huruf pada awalnya?',
        optionsEn: ['She loved them', 'She thought they were squiggly lines', 'She thought they were tasty', 'She ignored them'],
        optionsId: ['Ia menyukainya', 'Ia pikir bentuknya aneh', 'Ia pikir rasanya enak', 'Ia mengabaikannya'],
        correctIndex: 1
      },
      {
        questionEn: 'What did the letters spell when they marched together?',
        questionId: 'Apa yang dieja huruf-huruf saat berbaris bersama?',
        optionsEn: ["Nadia's name", 'A number', 'A song', 'Nothing'],
        optionsId: ['Nama Nadia', 'Sebuah angka', 'Sebuah lagu', 'Tidak ada apa-apa'],
        correctIndex: 0
      },
      {
        questionEn: 'What did letter A compare letters to?',
        questionId: 'Huruf A membandingkan huruf dengan apa?',
        optionsEn: ['Puzzle pieces', 'Rocks', 'Clouds', 'Shoes'],
        optionsId: ['Kepingan puzzle', 'Batu', 'Awan', 'Sepatu'],
        correctIndex: 0
      }
    ]
  },
  {
    slug: 'the-honest-woodcutter',
    titleEn: 'The Honest Woodcutter',
    titleId: 'Tukang Kayu yang Jujur',
    descriptionEn: 'A retelling of a timeless folk tale about a poor woodcutter whose honesty is rewarded beyond measure.',
    descriptionId: 'Kisah rakyat abadi tentang tukang kayu miskin yang kejujurannya diganjar dengan berlipat ganda.',
    categorySlug: 'moral-stories',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🪓',
    coverPalette: 'meadow',
    ageMin: 4,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'wood-1',
        textEn: 'Near a quiet village lived a poor woodcutter named Tomo, who worked hard every single day to feed his family.',
        textId: 'Dekat sebuah desa yang tenang, hiduplah tukang kayu miskin bernama Tomo, yang bekerja keras setiap hari demi keluarganya.'
      },
      {
        illustrationSeed: 'wood-2',
        textEn: 'One afternoon, while cutting wood by the river, his old iron axe slipped from his hands and sank into the water.',
        textId: 'Suatu siang, saat menebang kayu di tepi sungai, kapak besinya yang tua terlepas dari tangannya dan tenggelam ke dalam air.'
      },
      {
        illustrationSeed: 'wood-3',
        textEn: 'Tomo sat down and cried, for that old axe was his only tool to earn a living. Suddenly, the river sparkled with light.',
        textId: 'Tomo duduk dan menangis, sebab kapak tua itu adalah satu-satunya alat untuk mencari nafkah. Tiba-tiba, sungai itu berkilau cahaya.'
      },
      {
        illustrationSeed: 'wood-4',
        textEn: 'A kind spirit of the river rose up, holding a golden axe. "Is this your axe?" she asked gently.',
        textId: 'Seorang roh sungai yang baik hati muncul, membawa kapak emas. "Apakah ini kapakmu?" tanyanya lembut.'
      },
      {
        illustrationSeed: 'wood-5',
        textEn: '"No," said Tomo honestly, "mine was old and made of iron, not gold." The spirit smiled and dove again, returning with a silver axe — but Tomo said the same.',
        textId: '"Bukan," jawab Tomo jujur, "milikku sudah tua dan terbuat dari besi, bukan emas." Roh itu tersenyum dan menyelam lagi, kembali membawa kapak perak — namun Tomo tetap berkata jujur bahwa itu bukan miliknya.'
      },
      {
        illustrationSeed: 'wood-6',
        textEn: 'Finally, she returned his old iron axe. "Because you told the truth," she said, "please accept all three axes as a gift."',
        textId: 'Akhirnya, ia mengembalikan kapak besi milik Tomo. "Karena kau berkata jujur," katanya, "terimalah ketiga kapak ini sebagai hadiah."'
      },
      {
        illustrationSeed: 'wood-7',
        textEn: 'Tomo thanked her with a full heart, and from that day, his honesty was known throughout the whole village.',
        textId: 'Tomo berterima kasih dengan hati yang penuh, dan sejak hari itu, kejujurannya dikenal di seluruh desa.'
      }
    ],
    quiz: [
      {
        questionEn: 'What happened to Tomo\'s axe?',
        questionId: 'Apa yang terjadi pada kapak Tomo?',
        optionsEn: ['It broke', 'It fell into the river', 'It was stolen', 'It turned to gold'],
        optionsId: ['Patah', 'Jatuh ke sungai', 'Dicuri', 'Berubah jadi emas'],
        correctIndex: 1
      },
      {
        questionEn: 'What did Tomo say when shown the golden axe?',
        questionId: 'Apa jawaban Tomo saat ditunjukkan kapak emas?',
        optionsEn: ['"Yes, that is mine!"', '"No, mine was iron"', 'He said nothing', 'He took it anyway'],
        optionsId: ['"Ya, itu milikku!"', '"Bukan, milikku dari besi"', 'Ia diam saja', 'Ia tetap mengambilnya'],
        correctIndex: 1
      },
      {
        questionEn: 'Why did the river spirit reward Tomo?',
        questionId: 'Mengapa roh sungai memberi hadiah kepada Tomo?',
        optionsEn: ['Because he was rich', 'Because he was honest', 'Because he was fast', 'Because he asked for gold'],
        optionsId: ['Karena ia kaya', 'Karena ia jujur', 'Karena ia cepat', 'Karena ia meminta emas'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'the-magic-forest',
    titleEn: 'The Magic Forest',
    titleId: 'Hutan Ajaib',
    descriptionEn: 'Two siblings discover a hidden forest where every tree grants a wish — as long as it is a kind one.',
    descriptionId: 'Dua bersaudara menemukan hutan tersembunyi tempat setiap pohon mengabulkan permintaan — asal permintaan itu baik.',
    categorySlug: 'fairy-tales',
    authorSlug: 'sarah-johnson',
    coverEmoji: '🌳',
    coverPalette: 'forest',
    ageMin: 3,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'forest-1',
        textEn: 'Siblings Aya and Budi were chasing a butterfly when they stumbled into a part of the forest they had never seen.',
        textId: 'Kakak beradik Aya dan Budi sedang mengejar kupu-kupu ketika tiba-tiba mereka tersesat ke bagian hutan yang belum pernah mereka lihat.'
      },
      {
        illustrationSeed: 'forest-2',
        textEn: 'The leaves shimmered like silver, and the air smelled like warm honey and rain.',
        textId: 'Daun-daunnya berkilau seperti perak, dan udaranya beraroma madu hangat dan hujan.'
      },
      {
        illustrationSeed: 'forest-3',
        textEn: 'An old tree with kind, glowing eyes spoke softly: "This is the Wishing Forest. Every tree here can grant one kind wish."',
        textId: 'Sebatang pohon tua bermata lembut dan bercahaya berkata pelan, "Ini Hutan Permintaan. Setiap pohon di sini bisa mengabulkan satu permintaan baik."'
      },
      {
        illustrationSeed: 'forest-4',
        textEn: 'Budi wished for a mountain of candy, but the tree only rustled and stayed silent — that wish was not kind, only for himself.',
        textId: 'Budi meminta gunung permen, tapi pohon itu hanya bergemerisik dan diam — permintaan itu tidak baik, hanya untuk dirinya sendiri.'
      },
      {
        illustrationSeed: 'forest-5',
        textEn: 'Then Aya wished for the nearby stream to always have clean water for every animal in the forest.',
        textId: 'Lalu Aya berharap agar sungai di dekat sana selalu memiliki air bersih untuk semua hewan di hutan.'
      },
      {
        illustrationSeed: 'forest-6',
        textEn: 'The tree glowed brightly, and the stream sparkled clean and clear. "A wish for others always grows the strongest," it said.',
        textId: 'Pohon itu bersinar terang, dan sungai berkilau bersih dan jernih. "Permintaan untuk orang lain selalu tumbuh paling kuat," katanya.'
      },
      {
        illustrationSeed: 'forest-7',
        textEn: 'Budi learned from his sister, and the next year, he returned to wish for shelter for the forest\'s smallest animals.',
        textId: 'Budi belajar dari kakaknya, dan tahun berikutnya, ia kembali untuk berharap ada tempat berlindung bagi hewan-hewan terkecil di hutan.'
      }
    ],
    quiz: [
      {
        questionEn: 'What did the trees in the Wishing Forest grant?',
        questionId: 'Apa yang dikabulkan pohon-pohon di Hutan Permintaan?',
        optionsEn: ['Any wish at all', 'Only kind wishes', 'Only wishes for candy', 'No wishes'],
        optionsId: ['Semua jenis permintaan', 'Hanya permintaan baik', 'Hanya permintaan permen', 'Tidak ada permintaan'],
        correctIndex: 1
      },
      {
        questionEn: "Why didn't Budi's first wish come true?",
        questionId: 'Mengapa permintaan pertama Budi tidak dikabulkan?',
        optionsEn: ['It was too big', 'It was only for himself', 'The tree was asleep', 'He asked incorrectly'],
        optionsId: ['Terlalu besar', 'Hanya untuk dirinya sendiri', 'Pohonnya sedang tidur', 'Ia salah bertanya'],
        correctIndex: 1
      },
      {
        questionEn: 'What did Aya wish for?',
        questionId: 'Apa yang diminta Aya?',
        optionsEn: ['A mountain of candy', 'Clean water for the animals', 'A new toy', 'To go home'],
        optionsId: ['Gunung permen', 'Air bersih untuk hewan-hewan', 'Mainan baru', 'Pulang ke rumah'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'princess-aira-and-the-lost-kite',
    titleEn: 'Princess Aira and the Lost Kite',
    titleId: 'Putri Aira dan Layang-Layang yang Hilang',
    descriptionEn: 'A young princess sets aside her crown to chase her kite across the kingdom, making unlikely friends along the way.',
    descriptionId: 'Seorang putri kecil melepas mahkotanya untuk mengejar layang-layangnya, dan menemukan sahabat-sahabat baru yang tak terduga.',
    categorySlug: 'fairy-tales',
    authorSlug: 'siti-aminah',
    coverEmoji: '👑',
    coverPalette: 'dusk',
    ageMin: 4,
    ageMax: 8,
    isPremium: true,
    pages: [
      {
        illustrationSeed: 'aira-1',
        textEn: 'In a kingdom by the hills, Princess Aira loved flying her red kite more than wearing her golden crown.',
        textId: 'Di sebuah kerajaan di antara bukit-bukit, Putri Aira lebih suka menerbangkan layang-layang merahnya daripada memakai mahkota emas.'
      },
      {
        illustrationSeed: 'aira-2',
        textEn: 'One windy afternoon, a strong gust snatched her kite away, carrying it over the castle walls.',
        textId: 'Suatu sore yang berangin, hembusan kencang merenggut layang-layangnya, membawanya melewati tembok istana.'
      },
      {
        illustrationSeed: 'aira-3',
        textEn: 'Without a second thought, Aira took off her crown, put on her walking boots, and ran after it.',
        textId: 'Tanpa berpikir dua kali, Aira melepas mahkotanya, memakai sepatu botnya, dan berlari mengejarnya.'
      },
      {
        illustrationSeed: 'aira-4',
        textEn: 'She met a baker boy who showed her a shortcut through the market, and a farmer girl who pointed toward the hills.',
        textId: 'Ia bertemu seorang anak tukang roti yang menunjukkan jalan pintas melalui pasar, dan seorang anak petani yang menunjuk ke arah bukit.'
      },
      {
        illustrationSeed: 'aira-5',
        textEn: 'At last, she found her kite gently caught in a tall apple tree, with new friends cheering beside her.',
        textId: 'Akhirnya, ia menemukan layang-layangnya tersangkut lembut di pohon apel yang tinggi, dengan teman-teman baru bersorak di sampingnya.'
      },
      {
        illustrationSeed: 'aira-6',
        textEn: 'Together they climbed and freed the kite, laughing as it soared back into the golden evening sky.',
        textId: 'Bersama-sama mereka memanjat dan melepaskan layang-layang itu, tertawa saat ia kembali terbang ke langit senja keemasan.'
      },
      {
        illustrationSeed: 'aira-7',
        textEn: 'Aira returned to the castle without her crown, but with something far more precious — new friends from every corner of the kingdom.',
        textId: 'Aira kembali ke istana tanpa mahkotanya, tetapi membawa sesuatu yang jauh lebih berharga — sahabat baru dari setiap penjuru kerajaan.'
      }
    ],
    quiz: [
      {
        questionEn: 'What did Princess Aira love more than her crown?',
        questionId: 'Apa yang lebih disukai Putri Aira daripada mahkotanya?',
        optionsEn: ['Flying her kite', 'Eating cake', 'Reading books', 'Playing music'],
        optionsId: ['Menerbangkan layang-layang', 'Makan kue', 'Membaca buku', 'Bermain musik'],
        correctIndex: 0
      },
      {
        questionEn: 'Who helped Aira find her way?',
        questionId: 'Siapa yang membantu Aira menemukan jalan?',
        optionsEn: ['A baker boy and a farmer girl', 'The king', 'A dragon', 'No one'],
        optionsId: ['Anak tukang roti dan anak petani', 'Sang raja', 'Seekor naga', 'Tidak ada yang membantu'],
        correctIndex: 0
      },
      {
        questionEn: 'What did Aira gain by the end of the story?',
        questionId: 'Apa yang didapat Aira di akhir cerita?',
        optionsEn: ['A new crown', 'New friends', 'A new kite', 'Gold coins'],
        optionsId: ['Mahkota baru', 'Sahabat baru', 'Layang-layang baru', 'Koin emas'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'counting-stars-with-mira',
    titleEn: 'Counting Stars with Mira',
    titleId: 'Menghitung Bintang Bersama Mira',
    descriptionEn: 'Mira and her grandfather count stars one by one and discover that numbers can be magical.',
    descriptionId: 'Mira dan kakeknya menghitung bintang satu per satu dan menemukan bahwa angka bisa terasa ajaib.',
    categorySlug: 'numbers',
    authorSlug: 'axto-creative-team',
    coverEmoji: '⭐',
    coverPalette: 'cosmic',
    ageMin: 3,
    ageMax: 6,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'mira-1',
        textEn: 'Every clear night, Mira climbed onto the roof with Grandpa to look at the sky.',
        textId: 'Setiap malam cerah, Mira naik ke atap bersama Kakek untuk memandangi langit.'
      },
      {
        illustrationSeed: 'mira-2',
        textEn: '"Let\'s count the stars," said Grandpa. "One star, two stars, three stars!"',
        textId: '"Ayo kita hitung bintangnya," kata Kakek. "Satu bintang, dua bintang, tiga bintang!"'
      },
      {
        illustrationSeed: 'mira-3',
        textEn: 'Mira giggled and pointed at four twinkling stars shaped like a kite, then five more near the moon.',
        textId: 'Mira tertawa dan menunjuk empat bintang berkelip berbentuk layang-layang, lalu lima lagi dekat bulan.'
      },
      {
        illustrationSeed: 'mira-4',
        textEn: 'By the time they reached ten, Mira could count all on her own, without any help at all.',
        textId: 'Saat mereka sampai hitungan sepuluh, Mira sudah bisa menghitung sendiri tanpa bantuan.'
      },
      {
        illustrationSeed: 'mira-5',
        textEn: '"Numbers help us see how big the world is," said Grandpa, "from one tiny star to a thousand."',
        textId: '"Angka membantu kita melihat seberapa besar dunia ini," kata Kakek, "dari satu bintang kecil sampai seribu."'
      },
      {
        illustrationSeed: 'mira-6',
        textEn: 'From that night on, Mira counted everything she loved — her toys, her books, and her stars.',
        textId: 'Sejak malam itu, Mira menghitung semua yang ia sukai — mainannya, bukunya, dan bintang-bintangnya.'
      }
    ],
    quiz: [
      {
        questionEn: 'Who did Mira count stars with?',
        questionId: 'Bersama siapa Mira menghitung bintang?',
        optionsEn: ['Her teacher', 'Grandpa', 'Her dog', 'A neighbor'],
        optionsId: ['Gurunya', 'Kakek', 'Anjingnya', 'Tetangga'],
        correctIndex: 1
      },
      {
        questionEn: 'How many stars could Mira count by the end?',
        questionId: 'Sampai angka berapa Mira bisa menghitung di akhir cerita?',
        optionsEn: ['Five', 'Ten', 'Twenty', 'One hundred'],
        optionsId: ['Lima', 'Sepuluh', 'Dua puluh', 'Seratus'],
        correctIndex: 1
      },
      {
        questionEn: 'What did Mira start counting after that night?',
        questionId: 'Apa yang mulai dihitung Mira setelah malam itu?',
        optionsEn: ['Only stars', 'Everything she loved', 'Nothing', 'Only numbers on a clock'],
        optionsId: ['Hanya bintang', 'Semua yang ia sukai', 'Tidak ada', 'Hanya angka di jam'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'two-best-friends-and-one-umbrella',
    titleEn: 'Two Best Friends and One Umbrella',
    titleId: 'Dua Sahabat dan Satu Payung',
    descriptionEn: 'When sudden rain catches two friends with only one umbrella, they learn that sharing makes any storm smaller.',
    descriptionId: 'Saat hujan tiba-tiba turun dan hanya ada satu payung, dua sahabat belajar bahwa berbagi membuat badai apa pun terasa lebih kecil.',
    categorySlug: 'friendship',
    authorSlug: 'axto-creative-team',
    coverEmoji: '☂️',
    coverPalette: 'ocean',
    ageMin: 3,
    ageMax: 7,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'friends-1',
        textEn: 'Dara and Beni walked home from school together every single day, rain or shine.',
        textId: 'Dara dan Beni selalu berjalan pulang sekolah bersama setiap hari, hujan atau cerah.'
      },
      {
        illustrationSeed: 'friends-2',
        textEn: 'One afternoon, dark clouds rolled in fast, and only Dara remembered to bring an umbrella.',
        textId: 'Suatu sore, awan gelap datang dengan cepat, dan hanya Dara yang ingat membawa payung.'
      },
      {
        illustrationSeed: 'friends-3',
        textEn: '"You take it," said Dara. "No, you take it," said Beni. Neither wanted the other to get wet.',
        textId: '"Kamu pakai saja," kata Dara. "Tidak, kamu saja," kata Beni. Tak ada yang mau temannya basah.'
      },
      {
        illustrationSeed: 'friends-4',
        textEn: 'Then Dara had an idea. "Let\'s hold it together, in the middle, so we both stay dry!"',
        textId: 'Lalu Dara punya ide. "Ayo kita pegang bersama, di tengah, supaya kita berdua tetap kering!"'
      },
      {
        illustrationSeed: 'friends-5',
        textEn: 'They laughed as they splashed through puddles, shoulder to shoulder under the small umbrella.',
        textId: 'Mereka tertawa sambil menerjang genangan air, berdampingan di bawah payung kecil itu.'
      },
      {
        illustrationSeed: 'friends-6',
        textEn: 'They reached home a little damp at the edges, but happier than any dry walk alone.',
        textId: 'Mereka sampai rumah dengan sedikit basah di ujung baju, tapi lebih bahagia daripada jalan sendirian dalam keadaan kering.'
      }
    ],
    quiz: [
      {
        questionEn: 'Who remembered to bring an umbrella?',
        questionId: 'Siapa yang ingat membawa payung?',
        optionsEn: ['Beni', 'Dara', 'Their teacher', 'No one'],
        optionsId: ['Beni', 'Dara', 'Gurunya', 'Tidak ada'],
        correctIndex: 1
      },
      {
        questionEn: 'How did they solve the umbrella problem?',
        questionId: 'Bagaimana mereka menyelesaikan masalah payung itu?',
        optionsEn: ['They ran home separately', 'They held it together', 'They waited for the rain to stop', 'They called a taxi'],
        optionsId: ['Mereka lari pulang sendiri-sendiri', 'Mereka memegangnya bersama', 'Mereka menunggu hujan reda', 'Mereka memanggil taksi'],
        correctIndex: 1
      },
      {
        questionEn: 'What is the lesson of this story?',
        questionId: 'Apa pelajaran dari cerita ini?',
        optionsEn: [
          'Always walk home alone',
          'Sharing makes hard moments easier together',
          'Umbrellas are not useful',
          'Rain should be avoided at all costs'
        ],
        optionsId: [
          'Selalu jalan pulang sendirian',
          'Berbagi membuat saat sulit terasa lebih ringan bersama',
          'Payung tidak berguna',
          'Hujan harus dihindari dengan segala cara'
        ],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'captain-kindness-saves-the-day',
    titleEn: 'Captain Kindness Saves the Day',
    titleId: 'Captain Kindness Menyelamatkan Hari',
    descriptionEn: 'A boy discovers that his cardboard cape and a kind heart make him a real kind of hero.',
    descriptionId: 'Seorang anak menyadari bahwa jubah kardusnya dan hati yang baik menjadikannya pahlawan sungguhan.',
    categorySlug: 'superheroes',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🦸',
    coverPalette: 'dusk',
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'hero-1',
        textEn: 'Eli wore a cardboard cape everywhere he went, pretending to be a mighty superhero.',
        textId: 'Eli memakai jubah kardus ke mana pun ia pergi, berpura-pura menjadi pahlawan super yang hebat.'
      },
      {
        illustrationSeed: 'hero-2',
        textEn: 'He practiced flying poses and superhero landings, but he had never actually saved anyone.',
        textId: 'Ia berlatih pose terbang dan gaya mendarat pahlawan, tapi belum pernah benar-benar menolong siapa pun.'
      },
      {
        illustrationSeed: 'hero-3',
        textEn: 'At the park, he saw a little girl crying because her balloon had floated into a tall tree.',
        textId: 'Di taman, ia melihat seorang gadis kecil menangis karena balonnya tersangkut di pohon tinggi.'
      },
      {
        illustrationSeed: 'hero-4',
        textEn: '"Don\'t worry! Captain Kindness is here!" Eli called out, and he found a long stick to help.',
        textId: '"Jangan khawatir! Captain Kindness datang!" seru Eli, dan ia mencari tongkat panjang untuk membantu.'
      },
      {
        illustrationSeed: 'hero-5',
        textEn: 'With a gentle poke, the balloon floated back down, and the little girl smiled brightly.',
        textId: 'Dengan colekan lembut, balon itu melayang turun kembali, dan gadis kecil itu tersenyum cerah.'
      },
      {
        illustrationSeed: 'hero-6',
        textEn: 'Eli realized his real superpower was not flying — it was noticing when someone needed help.',
        textId: 'Eli menyadari kekuatan sejatinya bukanlah terbang — melainkan peka saat ada yang membutuhkan bantuan.'
      }
    ],
    quiz: [
      {
        questionEn: 'What did Eli wear as his superhero costume?',
        questionId: 'Apa yang dipakai Eli sebagai kostum pahlawannya?',
        optionsEn: ['A cardboard cape', 'A real cape', 'A crown', 'Wings'],
        optionsId: ['Jubah kardus', 'Jubah sungguhan', 'Mahkota', 'Sayap'],
        correctIndex: 0
      },
      {
        questionEn: 'How did Eli help the little girl?',
        questionId: 'Bagaimana Eli membantu gadis kecil itu?',
        optionsEn: ['He flew up to get the balloon', 'He used a long stick', 'He called her parents', 'He gave her a new balloon'],
        optionsId: ['Ia terbang mengambil balon', 'Ia menggunakan tongkat panjang', 'Ia memanggil orang tuanya', 'Ia memberi balon baru'],
        correctIndex: 1
      },
      {
        questionEn: "What did Eli learn was his real superpower?",
        questionId: 'Apa yang Eli sadari sebagai kekuatan sejatinya?',
        optionsEn: ['Flying', 'Noticing when someone needs help', 'Being invisible', 'Super strength'],
        optionsId: ['Terbang', 'Peka saat ada yang butuh bantuan', 'Menghilang', 'Kekuatan super'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'trucky-the-brave-fire-truck',
    titleEn: 'Trucky the Brave Fire Truck',
    titleId: 'Trucky, Mobil Pemadam yang Berani',
    descriptionEn: 'A young fire truck who feels too small learns that courage, not size, is what makes a rescue vehicle brave.',
    descriptionId: 'Sebuah mobil pemadam kebakaran kecil yang merasa terlalu mungil belajar bahwa keberanian, bukan ukuran, yang membuatnya hebat.',
    categorySlug: 'vehicles',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🚒',
    coverPalette: 'candy',
    ageMin: 3,
    ageMax: 7,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'truck-1',
        textEn: 'At Maple Street Fire Station, the newest fire truck was small and shiny red. His name was Trucky.',
        textId: 'Di Stasiun Pemadam Jalan Maple, mobil pemadam terbaru berukuran kecil dan merah mengkilap. Namanya Trucky.'
      },
      {
        illustrationSeed: 'truck-2',
        textEn: 'The big trucks could carry tall ladders and huge hoses. Trucky worried he was too small to help.',
        textId: 'Truk-truk besar bisa membawa tangga tinggi dan selang raksasa. Trucky khawatir ia terlalu kecil untuk membantu.'
      },
      {
        illustrationSeed: 'truck-3',
        textEn: 'One day, an alarm rang for a kitten stuck in a narrow drainpipe that no big truck could reach.',
        textId: 'Suatu hari, alarm berbunyi untuk seekor kucing kecil yang terjebak di pipa saluran sempit yang tak terjangkau truk besar.'
      },
      {
        illustrationSeed: 'truck-4',
        textEn: '"This is a job for someone small and brave," said the fire chief, looking right at Trucky.',
        textId: '"Ini tugas untuk yang kecil dan berani," kata kepala pemadam, menatap langsung ke Trucky.'
      },
      {
        illustrationSeed: 'truck-5',
        textEn: 'Trucky squeezed carefully through the narrow lane, and his crew gently rescued the frightened kitten.',
        textId: 'Trucky menyelinap hati-hati melewati gang sempit, dan krunya menyelamatkan kucing ketakutan itu dengan lembut.'
      },
      {
        illustrationSeed: 'truck-6',
        textEn: 'That day, Trucky learned that every size has its own superpower — his was fitting where big trucks could not.',
        textId: 'Hari itu, Trucky belajar bahwa setiap ukuran punya kekuatannya sendiri — miliknya adalah bisa masuk ke tempat yang tak terjangkau truk besar.'
      }
    ],
    quiz: [
      {
        questionEn: "What was Trucky worried about?",
        questionId: 'Apa yang dikhawatirkan Trucky?',
        optionsEn: ['Being too loud', 'Being too small to help', 'Being too fast', 'Being too red'],
        optionsId: ['Terlalu berisik', 'Terlalu kecil untuk membantu', 'Terlalu cepat', 'Terlalu merah'],
        correctIndex: 1
      },
      {
        questionEn: 'Who needed rescuing in the drainpipe?',
        questionId: 'Siapa yang perlu diselamatkan di pipa saluran?',
        optionsEn: ['A kitten', 'A puppy', 'A bird', 'A ball'],
        optionsId: ['Seekor kucing', 'Seekor anjing', 'Seekor burung', 'Sebuah bola'],
        correctIndex: 0
      },
      {
        questionEn: 'What did Trucky learn about his size?',
        questionId: 'Apa yang dipelajari Trucky tentang ukurannya?',
        optionsEn: [
          'Small size has its own superpower',
          'He should become bigger',
          'Size does not matter at all',
          'Only big trucks can help'
        ],
        optionsId: [
          'Ukuran kecil punya kekuatannya sendiri',
          'Ia harus menjadi lebih besar',
          'Ukuran sama sekali tidak penting',
          'Hanya truk besar yang bisa membantu'
        ],
        correctIndex: 0
      }
    ]
  },
  {
    slug: 'the-drum-that-traveled-the-world',
    titleEn: 'The Drum That Traveled the World',
    titleId: 'Gendang yang Berkeliling Dunia',
    descriptionEn: "A magical drum passes from child to child around the world, teaching that music speaks every language.",
    descriptionId: 'Sebuah gendang ajaib berpindah dari satu anak ke anak lain di seluruh dunia, mengajarkan bahwa musik bisa dimengerti semua orang.',
    categorySlug: 'world-cultures',
    authorSlug: 'siti-aminah',
    coverEmoji: '🥁',
    coverPalette: 'meadow',
    ageMin: 4,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'drum-1',
        textEn: 'In a village by the mountains, a boy named Bayu carved a small wooden drum from a fallen branch.',
        textId: 'Di sebuah desa dekat pegunungan, seorang anak bernama Bayu mengukir gendang kecil dari kayu dahan yang jatuh.'
      },
      {
        illustrationSeed: 'drum-2',
        textEn: 'He played a joyful beat, and the sound traveled on the wind, over oceans, to a girl in West Africa.',
        textId: 'Ia memainkan irama gembira, dan suaranya terbawa angin, melintasi lautan, hingga ke seorang gadis di Afrika Barat.'
      },
      {
        illustrationSeed: 'drum-3',
        textEn: 'She answered with her own rhythm on a talking drum, and children in Brazil began to dance to it.',
        textId: 'Ia membalas dengan iramanya sendiri di gendang berbicara, dan anak-anak di Brasil mulai menari mengikutinya.'
      },
      {
        illustrationSeed: 'drum-4',
        textEn: 'From Brazil, the beat reached Japan, where a boy added the tap of his taiko drum to the song.',
        textId: 'Dari Brasil, irama itu sampai ke Jepang, tempat seorang anak menambahkan ketukan taiko-nya ke lagu tersebut.'
      },
      {
        illustrationSeed: 'drum-5',
        textEn: 'One by one, children from every corner of the world joined in, each adding their own special rhythm.',
        textId: 'Satu per satu, anak-anak dari setiap penjuru dunia ikut bergabung, masing-masing menambahkan irama khas mereka.'
      },
      {
        illustrationSeed: 'drum-6',
        textEn: 'Though none of them spoke the same words, together they made one beautiful song everyone understood.',
        textId: 'Meski tak satu pun berbicara bahasa yang sama, bersama-sama mereka menciptakan satu lagu indah yang dimengerti semua orang.'
      }
    ],
    quiz: [
      {
        questionEn: 'What did Bayu make the drum from?',
        questionId: 'Dari apa Bayu membuat gendangnya?',
        optionsEn: ['Metal', 'A fallen branch', 'Plastic', 'Stone'],
        optionsId: ['Logam', 'Dahan yang jatuh', 'Plastik', 'Batu'],
        correctIndex: 1
      },
      {
        questionEn: 'Which country did the rhythm travel to first?',
        questionId: 'Ke negara mana irama itu pertama kali sampai?',
        optionsEn: ['Japan', 'West Africa', 'Brazil', 'Indonesia'],
        optionsId: ['Jepang', 'Afrika Barat', 'Brasil', 'Indonesia'],
        correctIndex: 1
      },
      {
        questionEn: 'What is the message of the story?',
        questionId: 'Apa pesan dari cerita ini?',
        optionsEn: [
          'Only one country can make music',
          'Music can be understood across every language',
          'Drums are difficult to play',
          'Children should not share instruments'
        ],
        optionsId: [
          'Hanya satu negara yang bisa membuat musik',
          'Musik bisa dimengerti melintasi semua bahasa',
          'Gendang sulit dimainkan',
          'Anak-anak tidak boleh berbagi alat musik'
        ],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'the-sneezing-elephant',
    titleEn: 'The Sneezing Elephant',
    titleId: 'Gajah yang Bersin',
    descriptionEn: 'A silly, giant sneeze causes a chain of giggles across the savanna in this gentle story about laughing together.',
    descriptionId: 'Sebuah bersin raksasa yang konyol memicu deretan tawa di seluruh savana dalam cerita hangat tentang tertawa bersama.',
    categorySlug: 'humor',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🐘',
    coverPalette: 'sunrise',
    ageMin: 2,
    ageMax: 6,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'elephant-1',
        textEn: 'Ellie the elephant felt a tickle in her big trunk. "Ah... ah... AH-CHOO!"',
        textId: 'Ellie si gajah merasa geli di belalainya yang besar. "Hah... hah... HATCHIII!"'
      },
      {
        illustrationSeed: 'elephant-2',
        textEn: 'The sneeze was SO big that it blew all the leaves off the nearest tree in one gust!',
        textId: 'Bersinnya begitu besar sehingga menerbangkan semua daun dari pohon terdekat dalam sekali hembusan!'
      },
      {
        illustrationSeed: 'elephant-3',
        textEn: 'A monkey fell off his branch laughing, which made a giraffe laugh so hard she got hiccups.',
        textId: 'Seekor monyet jatuh dari dahannya karena tertawa, membuat seekor jerapah tertawa begitu keras sampai cegukan.'
      },
      {
        illustrationSeed: 'elephant-4',
        textEn: 'The giraffe\'s "HIC! HIC!" made a family of zebras giggle so much they rolled in the dust.',
        textId: '"HIK! HIK!" jerapah itu membuat sekeluarga zebra tertawa terpingkal-pingkal hingga berguling di tanah.'
      },
      {
        illustrationSeed: 'elephant-5',
        textEn: 'Soon the whole savanna was laughing together, though none of them quite remembered why anymore!',
        textId: 'Tak lama, seluruh savana tertawa bersama, meski tak satu pun lagi ingat kenapa mereka mulai tertawa!'
      },
      {
        illustrationSeed: 'elephant-6',
        textEn: '"Bless you, Ellie," they all said at last, still smiling. One little sneeze had made everyone\'s day brighter.',
        textId: '"Semoga sehat, Ellie," kata mereka semua akhirnya, masih tersenyum. Satu bersin kecil membuat hari semua orang lebih cerah.'
      }
    ],
    quiz: [
      {
        questionEn: "What happened when Ellie sneezed?",
        questionId: 'Apa yang terjadi saat Ellie bersin?',
        optionsEn: ['Nothing happened', 'It blew leaves off a tree', 'It started raining', 'All the animals ran away'],
        optionsId: ['Tidak ada yang terjadi', 'Menerbangkan daun dari pohon', 'Mulai hujan', 'Semua hewan lari'],
        correctIndex: 1
      },
      {
        questionEn: 'What happened to the giraffe?',
        questionId: 'Apa yang terjadi pada jerapah?',
        optionsEn: ['She got hiccups from laughing', 'She fell asleep', 'She sneezed too', 'She got scared'],
        optionsId: ['Ia cegukan karena tertawa', 'Ia tertidur', 'Ia juga bersin', 'Ia ketakutan'],
        correctIndex: 0
      },
      {
        questionEn: 'What is this story mainly about?',
        questionId: 'Cerita ini terutama tentang apa?',
        optionsEn: [
          'A scary storm',
          'A funny chain reaction of laughter',
          'A dangerous adventure',
          'A sad goodbye'
        ],
        optionsId: [
          'Badai yang menakutkan',
          'Reaksi berantai tawa yang lucu',
          'Petualangan berbahaya',
          'Perpisahan yang sedih'
        ],
        correctIndex: 1
      }
    ]
  }
  ,
  {
    slug: 'ellies-alphabet-adventure',
    titleEn: "Ellie's Alphabet Adventure",
    titleId: 'Petualangan Abjad Ellie',
    descriptionEn: 'Ellie meets a shy letter who is scared to appear in words, and helps it find its courage.',
    descriptionId: 'Ellie bertemu sebuah huruf pemalu yang takut muncul di dalam kata, dan membantunya menemukan keberanian.',
    categorySlug: 'alphabet',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🔤',
    coverPalette: 'candy',
    ageMin: 2,
    ageMax: 5,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'alphabet-1',
        textEn: 'Ellie loved singing the alphabet every morning. A, B, C, all the way to Z!',
        textId: 'Ellie suka menyanyikan lagu abjad setiap pagi. A, B, C, sampai ke Z!'
      },
      {
        illustrationSeed: 'alphabet-2',
        textEn: 'One day, she noticed the letter Q hiding behind a big book, looking very shy.',
        textId: 'Suatu hari, ia melihat huruf Q bersembunyi di balik buku besar, terlihat sangat pemalu.'
      },
      {
        illustrationSeed: 'alphabet-3',
        textEn: '"Why are you hiding?" Ellie asked. Q whispered, "I don\'t show up in as many words as the other letters."',
        textId: '"Kenapa kamu sembunyi?" tanya Ellie. Q berbisik, "Aku tidak muncul di banyak kata seperti huruf lain."'
      },
      {
        illustrationSeed: 'alphabet-4',
        textEn: 'Ellie smiled. "But you make wonderful words like queen, quiet, and quilt!" she said.',
        textId: 'Ellie tersenyum. "Tapi kamu membuat kata-kata hebat seperti queen, quiet, dan quilt!" katanya.'
      },
      {
        illustrationSeed: 'alphabet-5',
        textEn: 'Together they found five words that needed Q, and Q felt proud for the very first time.',
        textId: 'Bersama-sama mereka menemukan lima kata yang butuh Q, dan Q merasa bangga untuk pertama kalinya.'
      },
      {
        illustrationSeed: 'alphabet-6',
        textEn: 'From that day, Q always stood tall in the alphabet parade, right between P and R.',
        textId: 'Sejak hari itu, Q selalu berdiri tegak di barisan abjad, tepat di antara P dan R.'
      }
    ],
    quiz: [
      {
        questionEn: 'Which letter was hiding?',
        questionId: 'Huruf apa yang bersembunyi?',
        optionsEn: ['A', 'Q', 'Z', 'M'],
        optionsId: ['A', 'Q', 'Z', 'M'],
        correctIndex: 1
      },
      {
        questionEn: 'Why was the letter shy?',
        questionId: 'Kenapa huruf itu pemalu?',
        optionsEn: ['It was too loud', 'It was in fewer words than others', 'It was upside down', 'It was too big'],
        optionsId: ['Terlalu keras', 'Muncul di lebih sedikit kata', 'Terbalik', 'Terlalu besar'],
        correctIndex: 1
      },
      {
        questionEn: 'How did Ellie help?',
        questionId: 'Bagaimana Ellie membantu?',
        optionsEn: ['She ignored it', 'She found words that use it', 'She erased it', 'She hid too'],
        optionsId: ['Mengabaikannya', 'Mencari kata yang memakainya', 'Menghapusnya', 'Ikut bersembunyi'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'a-day-with-grandma',
    titleEn: 'A Day With Grandma',
    titleId: 'Sehari Bersama Nenek',
    descriptionEn: 'A little girl spends a warm afternoon learning her grandmother\'s favorite recipe and stories.',
    descriptionId: 'Seorang gadis kecil menghabiskan sore yang hangat belajar resep dan cerita favorit neneknya.',
    categorySlug: 'family',
    authorSlug: 'siti-aminah',
    coverEmoji: '👵',
    coverPalette: 'sunrise',
    ageMin: 3,
    ageMax: 7,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'family-1',
        textEn: 'Every Sunday, Nadia visited her grandmother\'s little house at the end of the street.',
        textId: 'Setiap hari Minggu, Nadia mengunjungi rumah kecil neneknya di ujung jalan.'
      },
      {
        illustrationSeed: 'family-2',
        textEn: 'Grandma always smelled like cinnamon and warm bread. "Come help me cook," she said with a smile.',
        textId: 'Nenek selalu berbau kayu manis dan roti hangat. "Ayo bantu Nenek memasak," katanya sambil tersenyum.'
      },
      {
        illustrationSeed: 'family-3',
        textEn: 'They mixed flour, sugar, and a secret ingredient Grandma would only whisper: a pinch of love.',
        textId: 'Mereka mengaduk tepung, gula, dan bahan rahasia yang hanya dibisikkan Nenek: sejumput cinta.'
      },
      {
        illustrationSeed: 'family-4',
        textEn: 'While the cookies baked, Grandma told stories about when she was a little girl, just like Nadia.',
        textId: 'Sambil kue dipanggang, Nenek bercerita tentang masa kecilnya, sama seperti Nadia sekarang.'
      },
      {
        illustrationSeed: 'family-5',
        textEn: 'When the cookies were ready, they shared them with the whole family at the dinner table.',
        textId: 'Ketika kue matang, mereka membagikannya untuk seluruh keluarga di meja makan.'
      },
      {
        illustrationSeed: 'family-6',
        textEn: 'Nadia hugged Grandma tight. "Family is the warmest place in the world," she thought.',
        textId: 'Nadia memeluk Nenek erat. "Keluarga adalah tempat paling hangat di dunia," pikirnya.'
      }
    ],
    quiz: [
      {
        questionEn: 'What day did Nadia visit Grandma?',
        questionId: 'Hari apa Nadia mengunjungi Nenek?',
        optionsEn: ['Monday', 'Sunday', 'Friday', 'Saturday'],
        optionsId: ['Senin', 'Minggu', 'Jumat', 'Sabtu'],
        correctIndex: 1
      },
      {
        questionEn: 'What was Grandma\'s secret ingredient?',
        questionId: 'Apa bahan rahasia Nenek?',
        optionsEn: ['Salt', 'A pinch of love', 'Extra sugar', 'Chocolate'],
        optionsId: ['Garam', 'Sejumput cinta', 'Gula ekstra', 'Cokelat'],
        correctIndex: 1
      },
      {
        questionEn: 'What did they do while the cookies baked?',
        questionId: 'Apa yang mereka lakukan sambil kue dipanggang?',
        optionsEn: ['Watched TV', 'Told stories', 'Went shopping', 'Took a nap'],
        optionsId: ['Menonton TV', 'Bercerita', 'Berbelanja', 'Tidur siang'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'milos-big-feelings',
    titleEn: 'Milo and His Big Feelings',
    titleId: 'Milo dan Perasaan Besarnya',
    descriptionEn: 'Milo learns that it\'s okay to feel angry, sad, or scared, as long as he knows how to talk about it.',
    descriptionId: 'Milo belajar bahwa tidak apa-apa merasa marah, sedih, atau takut, selama ia tahu cara membicarakannya.',
    categorySlug: 'emotions',
    authorSlug: 'sarah-johnson',
    coverEmoji: '😊',
    coverPalette: 'meadow',
    ageMin: 3,
    ageMax: 7,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'emotions-1',
        textEn: 'Milo\'s tower of blocks fell down with a crash. His face turned red and hot.',
        textId: 'Menara balok Milo runtuh dengan suara keras. Wajahnya memerah dan panas.'
      },
      {
        illustrationSeed: 'emotions-2',
        textEn: '"I feel like yelling!" Milo said. His mom sat beside him. "That\'s okay. That feeling is called anger."',
        textId: '"Aku ingin berteriak!" kata Milo. Ibunya duduk di sampingnya. "Tidak apa-apa. Perasaan itu namanya marah."'
      },
      {
        illustrationSeed: 'emotions-3',
        textEn: '"You can feel angry, but we don\'t throw things. Let\'s take a deep breath together," said Mom.',
        textId: '"Kamu boleh merasa marah, tapi kita tidak melempar barang. Yuk tarik napas dalam-dalam bersama," kata Ibu.'
      },
      {
        illustrationSeed: 'emotions-4',
        textEn: 'Milo breathed in slowly, then out slowly. The hot feeling started to cool down.',
        textId: 'Milo menarik napas perlahan, lalu menghembuskannya perlahan. Rasa panas itu mulai mereda.'
      },
      {
        illustrationSeed: 'emotions-5',
        textEn: '"Now let\'s build the tower again, together," Mom said. Milo smiled a little.',
        textId: '"Sekarang ayo bangun menaranya lagi, bersama-sama," kata Ibu. Milo tersenyum sedikit.'
      },
      {
        illustrationSeed: 'emotions-6',
        textEn: 'Milo learned that every feeling has a name, and every feeling can be talked about.',
        textId: 'Milo belajar bahwa setiap perasaan punya nama, dan setiap perasaan bisa dibicarakan.'
      }
    ],
    quiz: [
      {
        questionEn: 'Why did Milo feel upset?',
        questionId: 'Kenapa Milo merasa kesal?',
        optionsEn: ['He lost a toy', 'His tower fell down', 'He was hungry', 'He was tired'],
        optionsId: ['Kehilangan mainan', 'Menaranya runtuh', 'Lapar', 'Mengantuk'],
        correctIndex: 1
      },
      {
        questionEn: 'What helped Milo feel calmer?',
        questionId: 'Apa yang membuat Milo lebih tenang?',
        optionsEn: ['Throwing blocks', 'Taking deep breaths', 'Yelling louder', 'Running away'],
        optionsId: ['Melempar balok', 'Menarik napas dalam', 'Berteriak lebih keras', 'Lari'],
        correctIndex: 1
      },
      {
        questionEn: 'What is the name for the feeling Milo had?',
        questionId: 'Apa nama perasaan yang dirasakan Milo?',
        optionsEn: ['Happiness', 'Anger', 'Sleepiness', 'Hunger'],
        optionsId: ['Bahagia', 'Marah', 'Ngantuk', 'Lapar'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'the-whispering-wand',
    titleEn: 'The Whispering Wand',
    titleId: 'Tongkat yang Berbisik',
    descriptionEn: 'A young girl finds a wand that only grants wishes that help others, teaching her real magic is kindness.',
    descriptionId: 'Seorang gadis kecil menemukan tongkat yang hanya mengabulkan permintaan untuk menolong orang lain.',
    categorySlug: 'fantasy',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🪄',
    coverPalette: 'cosmic',
    ageMin: 5,
    ageMax: 9,
    isPremium: true,
    pages: [
      {
        illustrationSeed: 'fantasy-1',
        textEn: 'Deep in the Whisper Woods, Lira found a wand glowing softly beneath a silver leaf.',
        textId: 'Jauh di dalam Hutan Bisikan, Lira menemukan tongkat yang bersinar lembut di bawah daun perak.'
      },
      {
        illustrationSeed: 'fantasy-2',
        textEn: 'She waved it and wished for a mountain of candy — but nothing happened at all.',
        textId: 'Ia mengayunkannya dan berharap gunung permen muncul — tapi tidak terjadi apa-apa.'
      },
      {
        illustrationSeed: 'fantasy-3',
        textEn: 'A tiny voice giggled from the wand. "I only grant wishes that help someone else," it said.',
        textId: 'Suara kecil terkekeh dari tongkat itu. "Aku hanya mengabulkan permintaan yang menolong orang lain," katanya.'
      },
      {
        illustrationSeed: 'fantasy-4',
        textEn: 'Lira thought of her neighbor, old Mr. Yusuf, whose garden had wilted in the summer heat.',
        textId: 'Lira teringat tetangganya, Pak Yusuf, yang kebunnya layu karena panas musim kemarau.'
      },
      {
        illustrationSeed: 'fantasy-5',
        textEn: 'She wished for rain for his garden. The wand glowed bright, and soft rain fell that very night.',
        textId: 'Ia berharap hujan turun untuk kebun itu. Tongkat itu bersinar terang, dan hujan lembut turun malam itu juga.'
      },
      {
        illustrationSeed: 'fantasy-6',
        textEn: 'The next morning, Mr. Yusuf\'s flowers bloomed again. Lira realized real magic was kindness.',
        textId: 'Keesokan paginya, bunga-bunga Pak Yusuf mekar kembali. Lira sadar bahwa sihir sejati adalah kebaikan.'
      }
    ],
    quiz: [
      {
        questionEn: 'What kind of wish did the wand grant?',
        questionId: 'Permintaan seperti apa yang dikabulkan tongkat itu?',
        optionsEn: ['Wishes for candy', 'Wishes that help someone else', 'Wishes for toys', 'Any wish at all'],
        optionsId: ['Permen', 'Yang menolong orang lain', 'Mainan', 'Apa saja'],
        correctIndex: 1
      },
      {
        questionEn: 'Who did Lira help?',
        questionId: 'Siapa yang ditolong Lira?',
        optionsEn: ['Her teacher', 'Mr. Yusuf', 'Her sister', 'A stranger'],
        optionsId: ['Gurunya', 'Pak Yusuf', 'Adiknya', 'Orang asing'],
        correctIndex: 1
      },
      {
        questionEn: 'What did Lira learn in the end?',
        questionId: 'Apa yang dipelajari Lira pada akhirnya?',
        optionsEn: ['Wands are useless', 'Real magic is kindness', 'Candy is best', 'Rain is scary'],
        optionsId: ['Tongkat tidak berguna', 'Sihir sejati adalah kebaikan', 'Permen paling enak', 'Hujan menakutkan'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'the-case-of-the-missing-cookies',
    titleEn: 'The Case of the Missing Cookies',
    titleId: 'Kasus Kue Kering yang Hilang',
    descriptionEn: 'Detective Nina uses clues, not accusations, to solve the mystery of the empty cookie jar.',
    descriptionId: 'Detektif Nina menggunakan petunjuk, bukan tuduhan, untuk memecahkan misteri toples kue yang kosong.',
    categorySlug: 'mystery',
    authorSlug: 'david-lee',
    coverEmoji: '🔍',
    coverPalette: 'dusk',
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'mystery-1',
        textEn: 'The cookie jar was empty! Nina put on her detective hat and grabbed her magnifying glass.',
        textId: 'Toples kue itu kosong! Nina memakai topi detektifnya dan mengambil kaca pembesar.'
      },
      {
        illustrationSeed: 'mystery-2',
        textEn: 'Clue one: crumbs led from the kitchen counter across the floor toward the living room.',
        textId: 'Petunjuk pertama: remah-remah kue mengarah dari meja dapur ke ruang tamu.'
      },
      {
        illustrationSeed: 'mystery-3',
        textEn: 'Clue two: a small paw print was pressed into a smear of chocolate on the rug.',
        textId: 'Petunjuk kedua: jejak kaki kecil tercetak di noda cokelat di atas karpet.'
      },
      {
        illustrationSeed: 'mystery-4',
        textEn: 'Nina followed the trail behind the couch, where she found her dog Max fast asleep, crumbs on his nose.',
        textId: 'Nina mengikuti jejak itu ke belakang sofa, dan menemukan anjingnya Max tertidur pulas, remah di hidungnya.'
      },
      {
        illustrationSeed: 'mystery-5',
        textEn: '"Case closed!" Nina laughed. "Max, you\'re a cookie thief, but I still love you."',
        textId: '"Kasus selesai!" Nina tertawa. "Max, kamu pencuri kue, tapi aku tetap sayang kamu."'
      },
      {
        illustrationSeed: 'mystery-6',
        textEn: 'From then on, Nina always kept the cookie jar somewhere Max\'s nose couldn\'t reach.',
        textId: 'Sejak itu, Nina selalu menyimpan toples kue di tempat yang tidak terjangkau hidung Max.'
      }
    ],
    quiz: [
      {
        questionEn: 'What tool did Nina use?',
        questionId: 'Alat apa yang digunakan Nina?',
        optionsEn: ['A telescope', 'A magnifying glass', 'A flashlight', 'A camera'],
        optionsId: ['Teropong', 'Kaca pembesar', 'Senter', 'Kamera'],
        correctIndex: 1
      },
      {
        questionEn: 'Who ate the cookies?',
        questionId: 'Siapa yang memakan kue itu?',
        optionsEn: ['Her brother', 'Her dog Max', 'A neighbor', 'Nobody'],
        optionsId: ['Kakaknya', 'Anjingnya Max', 'Tetangga', 'Tidak ada yang makan'],
        correctIndex: 1
      },
      {
        questionEn: 'What clue was on the rug?',
        questionId: 'Petunjuk apa yang ada di karpet?',
        optionsEn: ['A footprint', 'A paw print in chocolate', 'A torn paper', 'A missing shoe'],
        optionsId: ['Jejak kaki manusia', 'Jejak kaki dengan cokelat', 'Kertas sobek', 'Sepatu hilang'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'captain-nanos-treasure-map',
    titleEn: "Captain Nano's Treasure Map",
    titleId: 'Peta Harta Karun Kapten Nano',
    descriptionEn: 'A young pirate learns that the greatest treasure on the island is the friends who sailed with her.',
    descriptionId: 'Seorang bajak laut kecil belajar bahwa harta terbesar di pulau itu adalah teman-teman seperjalanannya.',
    categorySlug: 'pirates',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🏴‍☠️',
    coverPalette: 'ocean',
    ageMin: 4,
    ageMax: 8,
    isPremium: true,
    pages: [
      {
        illustrationSeed: 'pirates-1',
        textEn: 'Captain Nano and her crew found an old map hidden inside a bottle on the beach.',
        textId: 'Kapten Nano dan awaknya menemukan peta tua tersembunyi di dalam botol di pantai.'
      },
      {
        illustrationSeed: 'pirates-2',
        textEn: 'The map showed an X on Coconut Island, three days of sailing across the Blue Sea.',
        textId: 'Peta itu menunjukkan tanda X di Pulau Kelapa, tiga hari berlayar melintasi Laut Biru.'
      },
      {
        illustrationSeed: 'pirates-3',
        textEn: 'Along the way, a storm rocked their little ship, but the crew worked together to steer it safely.',
        textId: 'Di tengah jalan, badai mengguncang kapal kecil mereka, tapi awak kapal bekerja sama untuk mengemudikannya dengan selamat.'
      },
      {
        illustrationSeed: 'pirates-4',
        textEn: 'When they finally dug at the X, they found only a small wooden box with an old note inside.',
        textId: 'Ketika akhirnya mereka menggali di tanda X, mereka hanya menemukan kotak kayu kecil berisi catatan tua.'
      },
      {
        illustrationSeed: 'pirates-5',
        textEn: 'The note read: "The real treasure was the friends who sailed with you." Captain Nano smiled.',
        textId: 'Catatan itu berbunyi: "Harta sesungguhnya adalah teman yang berlayar bersamamu." Kapten Nano tersenyum.'
      },
      {
        illustrationSeed: 'pirates-6',
        textEn: 'They sailed home laughing, already planning their next adventure together.',
        textId: 'Mereka berlayar pulang sambil tertawa, sudah merencanakan petualangan berikutnya bersama.'
      }
    ],
    quiz: [
      {
        questionEn: 'Where did they find the map?',
        questionId: 'Di mana mereka menemukan peta itu?',
        optionsEn: ['In a bottle on the beach', 'In a cave', 'In a chest', 'In a book'],
        optionsId: ['Dalam botol di pantai', 'Dalam gua', 'Dalam peti', 'Dalam buku'],
        correctIndex: 0
      },
      {
        questionEn: 'What happened during the journey?',
        questionId: 'Apa yang terjadi selama perjalanan?',
        optionsEn: ['They got lost forever', 'A storm rocked their ship', 'They found gold early', 'Nothing happened'],
        optionsId: ['Tersesat selamanya', 'Badai mengguncang kapal', 'Menemukan emas lebih awal', 'Tidak terjadi apa-apa'],
        correctIndex: 1
      },
      {
        questionEn: 'What was the real treasure?',
        questionId: 'Apa harta yang sesungguhnya?',
        optionsEn: ['Gold coins', 'Friendship', 'A map', 'A ship'],
        optionsId: ['Koin emas', 'Persahabatan', 'Peta', 'Kapal'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'princess-rosa-and-the-kind-knight',
    titleEn: 'Princess Rosa and the Kind Knight',
    titleId: 'Putri Rosa dan Ksatria yang Baik Hati',
    descriptionEn: 'Princess Rosa learns that true bravery is protecting others with kindness, not just a sword.',
    descriptionId: 'Putri Rosa belajar bahwa keberanian sejati adalah melindungi orang lain dengan kebaikan, bukan hanya pedang.',
    categorySlug: 'princess-knights',
    authorSlug: 'sarah-johnson',
    coverEmoji: '👑',
    coverPalette: 'candy',
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'princess-1',
        textEn: 'In the Kingdom of Meadowlight, Princess Rosa wanted to become a knight more than anything.',
        textId: 'Di Kerajaan Meadowlight, Putri Rosa sangat ingin menjadi seorang ksatria.'
      },
      {
        illustrationSeed: 'princess-2',
        textEn: 'She trained every day with Sir Callum, the gentlest knight in the castle.',
        textId: 'Ia berlatih setiap hari bersama Sir Callum, ksatria paling lembut di istana.'
      },
      {
        illustrationSeed: 'princess-3',
        textEn: 'One day, a baby dragon got stuck in the castle well, crying for help.',
        textId: 'Suatu hari, seekor bayi naga terjebak di sumur istana, menangis meminta tolong.'
      },
      {
        illustrationSeed: 'princess-4',
        textEn: 'Other knights wanted to chase it away, but Rosa knelt down and spoke to it softly.',
        textId: 'Ksatria lain ingin mengusirnya, tapi Rosa berlutut dan berbicara dengan lembut padanya.'
      },
      {
        illustrationSeed: 'princess-5',
        textEn: 'The dragon calmed down and let Rosa gently guide it out of the well with a rope of flowers.',
        textId: 'Naga itu tenang dan membiarkan Rosa menuntunnya keluar dari sumur dengan tali bunga.'
      },
      {
        illustrationSeed: 'princess-6',
        textEn: 'The whole kingdom cheered. Sir Callum said, "You are the bravest knight I know, Rosa."',
        textId: 'Seluruh kerajaan bersorak. Sir Callum berkata, "Kamu ksatria paling berani yang kukenal, Rosa."'
      }
    ],
    quiz: [
      {
        questionEn: 'Who trained Princess Rosa?',
        questionId: 'Siapa yang melatih Putri Rosa?',
        optionsEn: ['The King', 'Sir Callum', 'The dragon', 'Her sister'],
        optionsId: ['Sang Raja', 'Sir Callum', 'Sang naga', 'Kakaknya'],
        correctIndex: 1
      },
      {
        questionEn: 'What was stuck in the well?',
        questionId: 'Apa yang terjebak di sumur?',
        optionsEn: ['A cat', 'A baby dragon', 'A bucket', 'A ball'],
        optionsId: ['Kucing', 'Bayi naga', 'Ember', 'Bola'],
        correctIndex: 1
      },
      {
        questionEn: 'How did Rosa help the dragon?',
        questionId: 'Bagaimana Rosa menolong naga itu?',
        optionsEn: ['She scared it away', 'She spoke to it gently', 'She ignored it', 'She called guards to attack'],
        optionsId: ['Mengusirnya', 'Berbicara dengan lembut', 'Mengabaikannya', 'Memanggil penjaga untuk menyerang'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'bubbles-the-dolphins-new-friend',
    titleEn: "Bubbles the Dolphin's New Friend",
    titleId: 'Teman Baru Bubbles si Lumba-Lumba',
    descriptionEn: 'A playful dolphin helps a lost baby turtle find its way back to its family in the reef.',
    descriptionId: 'Seekor lumba-lumba periang membantu bayi penyu yang tersesat kembali ke keluarganya di terumbu karang.',
    categorySlug: 'ocean-life',
    authorSlug: 'emily-clark',
    coverEmoji: '🐬',
    coverPalette: 'ocean',
    ageMin: 3,
    ageMax: 7,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'ocean-1',
        textEn: 'Bubbles the dolphin loved doing flips near the coral reef every morning.',
        textId: 'Bubbles si lumba-lumba suka melompat-lompat dekat terumbu karang setiap pagi.'
      },
      {
        illustrationSeed: 'ocean-2',
        textEn: 'One day, she found a tiny turtle named Kiko, swimming alone and crying softly.',
        textId: 'Suatu hari, ia menemukan penyu kecil bernama Kiko, berenang sendirian dan menangis pelan.'
      },
      {
        illustrationSeed: 'ocean-3',
        textEn: '"I got separated from my family during the current," Kiko said. Bubbles promised to help.',
        textId: '"Aku terpisah dari keluargaku saat ada arus deras," kata Kiko. Bubbles berjanji akan membantu.'
      },
      {
        illustrationSeed: 'ocean-4',
        textEn: 'They swam past colorful fish and swaying seaweed, following the scent of Kiko\'s home reef.',
        textId: 'Mereka berenang melewati ikan-ikan warna-warni dan rumput laut yang bergoyang, mengikuti aroma terumbu rumah Kiko.'
      },
      {
        illustrationSeed: 'ocean-5',
        textEn: 'At last, they spotted Kiko\'s family waiting anxiously near a big sea sponge.',
        textId: 'Akhirnya, mereka melihat keluarga Kiko menunggu cemas dekat spons laut besar.'
      },
      {
        illustrationSeed: 'ocean-6',
        textEn: 'Kiko\'s family thanked Bubbles with a happy underwater dance, and Bubbles had a new best friend.',
        textId: 'Keluarga Kiko berterima kasih pada Bubbles dengan tarian bahagia di bawah air, dan Bubbles punya sahabat baru.'
      }
    ],
    quiz: [
      {
        questionEn: 'What is the turtle\'s name?',
        questionId: 'Siapa nama penyu itu?',
        optionsEn: ['Kiko', 'Bubbles', 'Rex', 'Fin'],
        optionsId: ['Kiko', 'Bubbles', 'Rex', 'Fin'],
        correctIndex: 0
      },
      {
        questionEn: 'Why was Kiko alone?',
        questionId: 'Kenapa Kiko sendirian?',
        optionsEn: ['He was hiding', 'He got separated in the current', 'He ran away', 'He was sleeping'],
        optionsId: ['Bersembunyi', 'Terpisah karena arus', 'Kabur', 'Tidur'],
        correctIndex: 1
      },
      {
        questionEn: 'How did the story end?',
        questionId: 'Bagaimana akhir ceritanya?',
        optionsEn: ['Kiko stayed lost', 'Kiko found his family', 'Bubbles got lost too', 'They never met again'],
        optionsId: ['Kiko tetap tersesat', 'Kiko menemukan keluarganya', 'Bubbles juga tersesat', 'Mereka tidak pernah bertemu lagi'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'zuri-and-the-lost-cub',
    titleEn: 'Zuri and the Lost Cub',
    titleId: 'Zuri dan Anak Singa yang Tersesat',
    descriptionEn: 'A young elephant helps a lost lion cub find its pride, learning that kindness has no borders.',
    descriptionId: 'Seekor anak gajah membantu anak singa yang tersesat menemukan kelompoknya, belajar bahwa kebaikan tak mengenal batas.',
    categorySlug: 'jungle-safari',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🦁',
    coverPalette: 'meadow',
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'safari-1',
        textEn: 'Zuri the young elephant was drinking at the waterhole when she heard a tiny roar.',
        textId: 'Zuri si anak gajah sedang minum di lubang air ketika ia mendengar auman kecil.'
      },
      {
        illustrationSeed: 'safari-2',
        textEn: 'A lion cub named Jabari was stuck between two rocks, too small to climb out alone.',
        textId: 'Seekor anak singa bernama Jabari terjepit di antara dua batu, terlalu kecil untuk memanjat keluar sendiri.'
      },
      {
        illustrationSeed: 'safari-3',
        textEn: 'Even though lions and elephants usually kept their distance, Zuri gently lifted Jabari with her trunk.',
        textId: 'Meski singa dan gajah biasanya menjaga jarak, Zuri dengan lembut mengangkat Jabari dengan belalainya.'
      },
      {
        illustrationSeed: 'safari-4',
        textEn: '"Thank you," Jabari said, shaking with fear. "I can\'t find my pride anywhere."',
        textId: '"Terima kasih," kata Jabari, gemetar ketakutan. "Aku tidak bisa menemukan kelompokku."'
      },
      {
        illustrationSeed: 'safari-5',
        textEn: 'Zuri used her long trunk to sniff the air and followed the scent all the way to the acacia trees.',
        textId: 'Zuri menggunakan belalai panjangnya untuk mencium udara dan mengikuti aromanya sampai ke pohon akasia.'
      },
      {
        illustrationSeed: 'safari-6',
        textEn: 'There, Jabari\'s mother waited, relieved. From that day, elephants and lions in that savanna were the best of friends.',
        textId: 'Di sana, ibu Jabari menunggu, lega. Sejak hari itu, gajah dan singa di sabana itu menjadi sahabat terbaik.'
      }
    ],
    quiz: [
      {
        questionEn: 'Who got stuck between two rocks?',
        questionId: 'Siapa yang terjepit di antara dua batu?',
        optionsEn: ['Zuri', 'Jabari the lion cub', 'A zebra', 'A bird'],
        optionsId: ['Zuri', 'Jabari si anak singa', 'Zebra', 'Burung'],
        correctIndex: 1
      },
      {
        questionEn: 'How did Zuri find Jabari\'s family?',
        questionId: 'Bagaimana Zuri menemukan keluarga Jabari?',
        optionsEn: ['She asked a bird', 'She followed the scent with her trunk', 'She guessed', 'She waited for them'],
        optionsId: ['Bertanya pada burung', 'Mengikuti aroma dengan belalainya', 'Menebak', 'Menunggu mereka'],
        correctIndex: 1
      },
      {
        questionEn: 'What lesson does the story teach?',
        questionId: 'Pelajaran apa yang diajarkan cerita ini?',
        optionsEn: ['Only help your own kind', 'Kindness has no borders', 'Stay away from strangers', 'Lions are scary'],
        optionsId: ['Hanya tolong sejenis', 'Kebaikan tak mengenal batas', 'Jauhi orang asing', 'Singa menakutkan'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'old-macfarms-missing-rooster',
    titleEn: 'Old MacFarm and the Missing Rooster',
    titleId: 'Peternakan Tua dan Ayam Jantan yang Hilang',
    descriptionEn: 'When the rooster who wakes the farm disappears, the animals must learn to work together.',
    descriptionId: 'Ketika ayam jantan yang membangunkan peternakan menghilang, para hewan harus belajar bekerja sama.',
    categorySlug: 'farm',
    authorSlug: 'siti-aminah',
    coverEmoji: '🐓',
    coverPalette: 'sunrise',
    ageMin: 3,
    ageMax: 6,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'farm-1',
        textEn: 'Every morning, Rudi the rooster crowed "Cock-a-doodle-doo!" to wake up the whole farm.',
        textId: 'Setiap pagi, Rudi si ayam jantan berkokok "Kukuruyuk!" untuk membangunkan seluruh peternakan.'
      },
      {
        illustrationSeed: 'farm-2',
        textEn: 'One morning, there was silence. No crowing at all. Rudi was nowhere to be found!',
        textId: 'Suatu pagi, semua sunyi. Tidak ada kokokan sama sekali. Rudi tidak ditemukan di mana pun!'
      },
      {
        illustrationSeed: 'farm-3',
        textEn: 'The cow, the sheep, and the pig searched everywhere, calling his name across the barn.',
        textId: 'Sapi, domba, dan babi mencari ke mana-mana, memanggil namanya di seluruh kandang.'
      },
      {
        illustrationSeed: 'farm-4',
        textEn: 'The little duck found him stuck in the mud near the pond, his feathers all muddy.',
        textId: 'Bebek kecil menemukannya terjebak di lumpur dekat kolam, bulunya penuh lumpur.'
      },
      {
        illustrationSeed: 'farm-5',
        textEn: 'All the animals worked together, pulling gently, until Rudi popped free with a happy squelch.',
        textId: 'Semua hewan bekerja sama, menarik dengan lembut, sampai Rudi terlepas dengan suara lucu.'
      },
      {
        illustrationSeed: 'farm-6',
        textEn: 'The next morning, Rudi crowed louder than ever, thankful for his wonderful farm friends.',
        textId: 'Keesokan paginya, Rudi berkokok lebih keras dari biasanya, berterima kasih pada teman-teman peternakannya.'
      }
    ],
    quiz: [
      {
        questionEn: 'What does Rudi do every morning?',
        questionId: 'Apa yang dilakukan Rudi setiap pagi?',
        optionsEn: ['He sleeps in', 'He crows to wake everyone', 'He eats breakfast', 'He swims'],
        optionsId: ['Tidur lagi', 'Berkokok membangunkan semua', 'Sarapan', 'Berenang'],
        correctIndex: 1
      },
      {
        questionEn: 'Where was Rudi stuck?',
        questionId: 'Di mana Rudi terjebak?',
        optionsEn: ['In a tree', 'In the mud near the pond', 'In the barn', 'On the roof'],
        optionsId: ['Di pohon', 'Di lumpur dekat kolam', 'Di kandang', 'Di atap'],
        correctIndex: 1
      },
      {
        questionEn: 'How was Rudi rescued?',
        questionId: 'Bagaimana Rudi diselamatkan?',
        optionsEn: ['He escaped alone', 'All the animals worked together', 'The farmer used a machine', 'He was left there'],
        optionsId: ['Kabur sendiri', 'Semua hewan bekerja sama', 'Petani pakai mesin', 'Dibiarkan saja'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'buddys-first-day-home',
    titleEn: "Buddy the Puppy's First Day Home",
    titleId: 'Hari Pertama Buddy si Anak Anjing di Rumah Baru',
    descriptionEn: 'A nervous new puppy learns that his new family will love and take care of him always.',
    descriptionId: 'Seekor anak anjing yang gugup belajar bahwa keluarga barunya akan selalu mencintai dan merawatnya.',
    categorySlug: 'pets',
    authorSlug: 'sarah-johnson',
    coverEmoji: '🐶',
    coverPalette: 'sunrise',
    ageMin: 2,
    ageMax: 6,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'pets-1',
        textEn: 'Buddy the puppy arrived at his new home in a little basket, feeling small and nervous.',
        textId: 'Buddy si anak anjing tiba di rumah barunya dalam keranjang kecil, merasa kecil dan gugup.'
      },
      {
        illustrationSeed: 'pets-2',
        textEn: 'A little boy named Dimas knelt down slowly and held out his hand. "Hi Buddy, I\'m your friend now."',
        textId: 'Seorang anak laki-laki bernama Dimas berlutut pelan dan mengulurkan tangannya. "Hai Buddy, aku temanmu sekarang."'
      },
      {
        illustrationSeed: 'pets-3',
        textEn: 'Buddy sniffed his hand carefully, then wagged his tail just a little bit.',
        textId: 'Buddy mengendus tangan itu hati-hati, lalu mengibaskan ekornya sedikit.'
      },
      {
        illustrationSeed: 'pets-4',
        textEn: 'Dimas showed him his cozy new bed, a bowl of fresh water, and a soft squeaky toy.',
        textId: 'Dimas menunjukkan tempat tidur baru yang nyaman, mangkuk berisi air segar, dan mainan lembut yang berbunyi.'
      },
      {
        illustrationSeed: 'pets-5',
        textEn: 'That night, Buddy curled up next to Dimas\'s bed, feeling safe for the very first time.',
        textId: 'Malam itu, Buddy meringkuk di samping tempat tidur Dimas, merasa aman untuk pertama kalinya.'
      },
      {
        illustrationSeed: 'pets-6',
        textEn: 'By morning, Buddy was already best friends with his whole new family.',
        textId: 'Menjelang pagi, Buddy sudah menjadi sahabat bagi seluruh keluarga barunya.'
      }
    ],
    quiz: [
      {
        questionEn: 'How did Buddy feel when he first arrived?',
        questionId: 'Bagaimana perasaan Buddy saat pertama tiba?',
        optionsEn: ['Excited and loud', 'Small and nervous', 'Angry', 'Sleepy all day'],
        optionsId: ['Bersemangat dan berisik', 'Kecil dan gugup', 'Marah', 'Ngantuk seharian'],
        correctIndex: 1
      },
      {
        questionEn: 'Who welcomed Buddy?',
        questionId: 'Siapa yang menyambut Buddy?',
        optionsEn: ['A cat', 'A boy named Dimas', 'A stranger', 'Nobody'],
        optionsId: ['Kucing', 'Anak bernama Dimas', 'Orang asing', 'Tidak ada'],
        correctIndex: 1
      },
      {
        questionEn: 'Where did Buddy sleep that night?',
        questionId: 'Di mana Buddy tidur malam itu?',
        optionsEn: ['Outside', 'Next to Dimas\'s bed', 'In the kitchen', 'In a basket outside'],
        optionsId: ['Di luar', 'Di samping tempat tidur Dimas', 'Di dapur', 'Dalam keranjang di luar'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'beep-and-the-broken-toy',
    titleEn: 'Beep and the Broken Toy',
    titleId: 'Beep dan Mainan yang Rusak',
    descriptionEn: 'A helpful little robot learns that not everything broken needs fixing — sometimes it just needs care.',
    descriptionId: 'Seekor robot kecil yang suka menolong belajar bahwa tidak semua yang rusak perlu diperbaiki — kadang cukup dirawat.',
    categorySlug: 'robots-tech',
    authorSlug: 'david-lee',
    coverEmoji: '🤖',
    coverPalette: 'cosmic',
    ageMin: 4,
    ageMax: 9,
    isPremium: true,
    pages: [
      {
        illustrationSeed: 'robots-1',
        textEn: 'Beep the robot loved fixing things. Squeaky doors, wobbly tables, anything at all.',
        textId: 'Beep si robot suka memperbaiki barang. Pintu berdecit, meja goyang, apa saja.'
      },
      {
        illustrationSeed: 'robots-2',
        textEn: 'One day, he found a little girl named Wina crying over her torn teddy bear, Coco.',
        textId: 'Suatu hari, ia menemukan gadis kecil bernama Wina menangis karena boneka beruangnya, Coco, robek.'
      },
      {
        illustrationSeed: 'robots-3',
        textEn: '"I can fix him with my tools!" Beep said, reaching for his glue and needle.',
        textId: '"Aku bisa memperbaikinya dengan peralatanku!" kata Beep, mengambil lem dan jarumnya.'
      },
      {
        illustrationSeed: 'robots-4',
        textEn: '"Wait," Wina said softly. "Coco doesn\'t need to be perfect. He just needs a hug and some love."',
        textId: '"Tunggu," kata Wina lembut. "Coco tidak perlu sempurna. Ia hanya butuh pelukan dan kasih sayang."'
      },
      {
        illustrationSeed: 'robots-5',
        textEn: 'Beep paused his tools and thought about it. He gently helped Wina sew one small stitch instead.',
        textId: 'Beep menghentikan peralatannya dan berpikir. Ia membantu Wina menjahit satu jahitan kecil saja.'
      },
      {
        illustrationSeed: 'robots-6',
        textEn: 'Coco was still a little worn, but Wina hugged him tight and smiled. Beep learned love fixes more than tools.',
        textId: 'Coco masih agak usang, tapi Wina memeluknya erat dan tersenyum. Beep belajar bahwa cinta memperbaiki lebih dari sekadar alat.'
      }
    ],
    quiz: [
      {
        questionEn: 'What did Beep love to do?',
        questionId: 'Apa yang disukai Beep?',
        optionsEn: ['Sleeping', 'Fixing things', 'Singing', 'Cooking'],
        optionsId: ['Tidur', 'Memperbaiki barang', 'Bernyanyi', 'Memasak'],
        correctIndex: 1
      },
      {
        questionEn: 'What was broken?',
        questionId: 'Apa yang rusak?',
        optionsEn: ['A chair', 'Wina\'s teddy bear', 'A robot arm', 'A window'],
        optionsId: ['Kursi', 'Boneka beruang Wina', 'Lengan robot', 'Jendela'],
        correctIndex: 1
      },
      {
        questionEn: 'What did Wina say Coco really needed?',
        questionId: 'Apa yang menurut Wina benar-benar dibutuhkan Coco?',
        optionsEn: ['New stuffing', 'A hug and love', 'A new owner', 'To be thrown away'],
        optionsId: ['Isi baru', 'Pelukan dan kasih sayang', 'Pemilik baru', 'Dibuang'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'the-tree-everyone-forgot',
    titleEn: 'The Tree That Everyone Forgot',
    titleId: 'Pohon yang Terlupakan',
    descriptionEn: 'Children rediscover an old forgotten tree in their neighborhood and learn to care for nature together.',
    descriptionId: 'Anak-anak menemukan kembali sebuah pohon tua yang terlupakan di lingkungan mereka dan belajar merawat alam bersama.',
    categorySlug: 'nature-environment',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🌳',
    coverPalette: 'forest',
    ageMin: 4,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'nature-1',
        textEn: 'At the end of Melati Street stood an old tree, its leaves dusty and branches drooping.',
        textId: 'Di ujung Jalan Melati berdiri sebuah pohon tua, daunnya berdebu dan rantingnya menunduk.'
      },
      {
        illustrationSeed: 'nature-2',
        textEn: 'Every day, children walked past it without even noticing it was there.',
        textId: 'Setiap hari, anak-anak melewatinya tanpa menyadari keberadaannya.'
      },
      {
        illustrationSeed: 'nature-3',
        textEn: 'One afternoon, little Arka stopped and looked up. "Why is this tree so sad?" he wondered.',
        textId: 'Suatu sore, Arka kecil berhenti dan menengadah. "Kenapa pohon ini terlihat sedih?" pikirnya.'
      },
      {
        illustrationSeed: 'nature-4',
        textEn: 'He gathered his friends, and together they watered its roots and cleared the trash around it.',
        textId: 'Ia mengumpulkan teman-temannya, dan bersama-sama mereka menyiram akarnya dan membersihkan sampah di sekitarnya.'
      },
      {
        illustrationSeed: 'nature-5',
        textEn: 'Week by week, the tree grew greener. Birds began building nests in its branches again.',
        textId: 'Minggu demi minggu, pohon itu semakin hijau. Burung-burung mulai membuat sarang di rantingnya lagi.'
      },
      {
        illustrationSeed: 'nature-6',
        textEn: 'Now the children call it "Our Tree," and every child on Melati Street helps take care of it.',
        textId: 'Sekarang anak-anak menyebutnya "Pohon Kita," dan setiap anak di Jalan Melati ikut merawatnya.'
      }
    ],
    quiz: [
      {
        questionEn: 'What was wrong with the tree at first?',
        questionId: 'Apa yang salah dengan pohon itu di awal?',
        optionsEn: ['It was cut down', 'It looked dusty and drooping', 'It was on fire', 'It moved away'],
        optionsId: ['Ditebang', 'Terlihat berdebu dan lesu', 'Terbakar', 'Berpindah tempat'],
        correctIndex: 1
      },
      {
        questionEn: 'What did Arka and his friends do?',
        questionId: 'Apa yang dilakukan Arka dan teman-temannya?',
        optionsEn: ['Ignored it', 'Watered it and cleared trash', 'Cut it down', 'Painted it'],
        optionsId: ['Mengabaikannya', 'Menyiram dan membersihkan sampah', 'Menebangnya', 'Mengecatnya'],
        correctIndex: 1
      },
      {
        questionEn: 'What happened after they cared for it?',
        questionId: 'Apa yang terjadi setelah mereka merawatnya?',
        optionsEn: ['It died anyway', 'It grew greener and birds returned', 'Nothing changed', 'It was cut down'],
        optionsId: ['Tetap mati', 'Semakin hijau dan burung kembali', 'Tidak ada yang berubah', 'Ditebang'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'the-rainbow-after-the-rain',
    titleEn: 'The Rainbow After the Rain',
    titleId: 'Pelangi Setelah Hujan',
    descriptionEn: 'A little boy learns why rainbows appear and discovers that even rainy days can lead to something beautiful.',
    descriptionId: 'Seorang anak laki-laki belajar kenapa pelangi muncul dan menemukan bahwa hari hujan pun bisa berujung indah.',
    categorySlug: 'weather-seasons',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🌦️',
    coverPalette: 'dusk',
    ageMin: 2,
    ageMax: 6,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'weather-1',
        textEn: 'Dark clouds rolled in, and rain began to fall. Bayu sighed, "No playing outside today."',
        textId: 'Awan gelap datang, dan hujan mulai turun. Bayu menghela napas, "Tidak bisa main di luar hari ini."'
      },
      {
        illustrationSeed: 'weather-2',
        textEn: 'His grandfather smiled. "Every rain has a surprise waiting at the end, if you\'re patient."',
        textId: 'Kakeknya tersenyum. "Setiap hujan menyimpan kejutan di akhir, kalau kamu sabar menunggu."'
      },
      {
        illustrationSeed: 'weather-3',
        textEn: 'They watched from the window as the rain slowed down, drop by drop, until it finally stopped.',
        textId: 'Mereka menonton dari jendela saat hujan melambat, tetes demi tetes, sampai akhirnya berhenti.'
      },
      {
        illustrationSeed: 'weather-4',
        textEn: 'The sun peeked out from behind a cloud, and light passed through the tiny raindrops in the air.',
        textId: 'Matahari mengintip dari balik awan, dan cahaya melewati tetesan air kecil di udara.'
      },
      {
        illustrationSeed: 'weather-5',
        textEn: 'Suddenly, a rainbow stretched across the sky — red, orange, yellow, green, blue, and purple.',
        textId: 'Tiba-tiba, sebuah pelangi terbentang di langit — merah, jingga, kuning, hijau, biru, dan ungu.'
      },
      {
        illustrationSeed: 'weather-6',
        textEn: '"The rain made room for the rainbow," Grandfather said. Bayu smiled, no longer sad about the rain.',
        textId: '"Hujan memberi ruang untuk pelangi," kata Kakek. Bayu tersenyum, tak lagi sedih karena hujan.'
      }
    ],
    quiz: [
      {
        questionEn: 'What was Bayu sad about?',
        questionId: 'Apa yang membuat Bayu sedih?',
        optionsEn: ['He lost a toy', 'He couldn\'t play outside because of rain', 'He was hungry', 'School was cancelled'],
        optionsId: ['Kehilangan mainan', 'Tidak bisa main di luar karena hujan', 'Lapar', 'Sekolah diliburkan'],
        correctIndex: 1
      },
      {
        questionEn: 'What appeared after the rain?',
        questionId: 'Apa yang muncul setelah hujan?',
        optionsEn: ['Snow', 'A rainbow', 'A storm', 'Fog'],
        optionsId: ['Salju', 'Pelangi', 'Badai', 'Kabut'],
        correctIndex: 1
      },
      {
        questionEn: 'What lesson did Bayu learn?',
        questionId: 'Pelajaran apa yang dipetik Bayu?',
        optionsEn: ['Rain is always bad', 'Rain can lead to something beautiful', 'Rainbows are scary', 'Never go outside'],
        optionsId: ['Hujan selalu buruk', 'Hujan bisa berujung indah', 'Pelangi menakutkan', 'Jangan pernah keluar rumah'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'a-day-with-officer-dan',
    titleEn: 'A Day With Officer Dan',
    titleId: 'Sehari Bersama Petugas Dan',
    descriptionEn: 'A curious boy spends a day shadowing a police officer and learns how community helpers keep everyone safe.',
    descriptionId: 'Seorang anak yang penasaran menghabiskan sehari mengikuti seorang polisi dan belajar bagaimana profesi membantu menjaga keselamatan semua orang.',
    categorySlug: 'community-helpers',
    authorSlug: 'axto-creative-team',
    coverEmoji: '👮',
    coverPalette: 'night',
    ageMin: 3,
    ageMax: 7,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'community-1',
        textEn: 'On School Career Day, Farrel got to spend the morning with Officer Dan, the friendliest police officer in town.',
        textId: 'Di Hari Profesi Sekolah, Farrel menghabiskan pagi bersama Petugas Dan, polisi paling ramah di kota.'
      },
      {
        illustrationSeed: 'community-2',
        textEn: 'First, they helped a group of children cross the busy street safely, holding up a bright stop sign.',
        textId: 'Pertama, mereka membantu sekelompok anak menyeberang jalan ramai dengan aman, mengangkat rambu berhenti yang cerah.'
      },
      {
        illustrationSeed: 'community-3',
        textEn: 'Next, they helped an elderly man who couldn\'t find his way home, guiding him gently back to his street.',
        textId: 'Selanjutnya, mereka membantu seorang kakek yang tersesat, menuntunnya kembali ke jalannya dengan lembut.'
      },
      {
        illustrationSeed: 'community-4',
        textEn: '"Being a helper means noticing when someone needs you," Officer Dan explained with a warm smile.',
        textId: '"Menjadi penolong berarti peka saat seseorang membutuhkanmu," jelas Petugas Dan dengan senyum hangat.'
      },
      {
        illustrationSeed: 'community-5',
        textEn: 'Farrel even got to wave to cars from a bicycle, helping keep the school zone safe at pickup time.',
        textId: 'Farrel bahkan boleh melambai ke mobil dari sepeda, membantu menjaga keamanan zona sekolah saat jam jemput.'
      },
      {
        illustrationSeed: 'community-6',
        textEn: 'That night, Farrel told his family, "I want to be a helper like Officer Dan when I grow up."',
        textId: 'Malam itu, Farrel bercerita ke keluarganya, "Aku ingin jadi penolong seperti Petugas Dan kalau sudah besar."'
      }
    ],
    quiz: [
      {
        questionEn: 'Who did Farrel spend the day with?',
        questionId: 'Farrel menghabiskan hari bersama siapa?',
        optionsEn: ['A doctor', 'Officer Dan', 'A firefighter', 'A teacher'],
        optionsId: ['Dokter', 'Petugas Dan', 'Pemadam kebakaran', 'Guru'],
        correctIndex: 1
      },
      {
        questionEn: 'What did they help the elderly man with?',
        questionId: 'Apa yang mereka bantu untuk kakek itu?',
        optionsEn: ['Carrying groceries', 'Finding his way home', 'Fixing his bike', 'Crossing a river'],
        optionsId: ['Membawa belanjaan', 'Menemukan jalan pulang', 'Memperbaiki sepeda', 'Menyeberangi sungai'],
        correctIndex: 1
      },
      {
        questionEn: 'What did Farrel decide he wanted to be?',
        questionId: 'Farrel ingin menjadi apa?',
        optionsEn: ['A chef', 'A helper like Officer Dan', 'A pilot', 'A painter'],
        optionsId: ['Koki', 'Penolong seperti Petugas Dan', 'Pilot', 'Pelukis'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'team-sunflowers-big-game',
    titleEn: "Team Sunflower's Big Game",
    titleId: 'Pertandingan Besar Tim Bunga Matahari',
    descriptionEn: 'A young player learns that supporting your teammates matters more than winning.',
    descriptionId: 'Seorang pemain kecil belajar bahwa mendukung teman satu tim lebih penting daripada menang.',
    categorySlug: 'sports',
    authorSlug: 'axto-creative-team',
    coverEmoji: '⚽',
    coverPalette: 'meadow',
    ageMin: 5,
    ageMax: 10,
    isPremium: true,
    pages: [
      {
        illustrationSeed: 'sports-1',
        textEn: 'Team Sunflower had practiced all season for the final match against Team Comet.',
        textId: 'Tim Bunga Matahari sudah berlatih sepanjang musim untuk pertandingan final melawan Tim Komet.'
      },
      {
        illustrationSeed: 'sports-2',
        textEn: 'Rayhan, the fastest runner on the team, was so nervous his hands were shaking before the whistle blew.',
        textId: 'Rayhan, pelari tercepat di tim, sangat gugup hingga tangannya gemetar sebelum peluit ditiup.'
      },
      {
        illustrationSeed: 'sports-3',
        textEn: 'In the second half, Rayhan missed an easy goal, and his shoulders slumped in disappointment.',
        textId: 'Di babak kedua, Rayhan gagal mencetak gol yang mudah, dan bahunya turun kecewa.'
      },
      {
        illustrationSeed: 'sports-4',
        textEn: 'His teammate Bimo ran over and patted his back. "We win and lose together. Keep playing!"',
        textId: 'Rekan setimnya, Bimo, berlari dan menepuk punggungnya. "Kita menang dan kalah bersama. Ayo terus main!"'
      },
      {
        illustrationSeed: 'sports-5',
        textEn: 'Cheered on by his team, Rayhan ran faster than ever and passed the ball perfectly to score in the last minute.',
        textId: 'Didukung timnya, Rayhan berlari lebih cepat dari sebelumnya dan mengoper bola dengan sempurna untuk mencetak gol di menit terakhir.'
      },
      {
        illustrationSeed: 'sports-6',
        textEn: 'Team Sunflower won, but Rayhan said the best part was his team believing in him even after a mistake.',
        textId: 'Tim Bunga Matahari menang, tapi bagi Rayhan yang terbaik adalah timnya tetap percaya padanya walau ia sempat gagal.'
      }
    ],
    quiz: [
      {
        questionEn: 'What team did Rayhan play for?',
        questionId: 'Rayhan bermain untuk tim apa?',
        optionsEn: ['Team Comet', 'Team Sunflower', 'Team Star', 'Team Ocean'],
        optionsId: ['Tim Komet', 'Tim Bunga Matahari', 'Tim Bintang', 'Tim Laut'],
        correctIndex: 1
      },
      {
        questionEn: 'What happened when Rayhan missed a goal?',
        questionId: 'Apa yang terjadi saat Rayhan gagal mencetak gol?',
        optionsEn: ['His team got angry', 'His teammate encouraged him', 'He was sent home', 'The game stopped'],
        optionsId: ['Tim marah', 'Rekan setimnya menyemangatinya', 'Ia dipulangkan', 'Pertandingan berhenti'],
        correctIndex: 1
      },
      {
        questionEn: 'What did Rayhan say was the best part?',
        questionId: 'Apa menurut Rayhan bagian terbaiknya?',
        optionsEn: ['Winning the trophy', 'His team believing in him', 'Being the fastest', 'Getting a prize'],
        optionsId: ['Memenangkan trofi', 'Timnya tetap percaya padanya', 'Menjadi tercepat', 'Mendapat hadiah'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'the-song-that-made-the-village-dance',
    titleEn: 'The Song That Made the Village Dance',
    titleId: 'Lagu yang Membuat Desa Menari',
    descriptionEn: 'A shy girl discovers her singing voice can bring an entire village together in joy.',
    descriptionId: 'Seorang gadis pemalu menemukan suara nyanyiannya bisa menyatukan seluruh desa dalam kebahagiaan.',
    categorySlug: 'music-rhymes',
    authorSlug: 'siti-aminah',
    coverEmoji: '🎵',
    coverPalette: 'candy',
    ageMin: 3,
    ageMax: 7,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'music-1',
        textEn: 'Sari loved to hum little tunes, but she was too shy to sing in front of anyone.',
        textId: 'Sari suka menggumamkan lagu-lagu kecil, tapi ia terlalu malu untuk bernyanyi di depan orang.'
      },
      {
        illustrationSeed: 'music-2',
        textEn: 'One evening, the village harvest festival felt quiet and a little sad — the usual singer was sick.',
        textId: 'Suatu malam, festival panen desa terasa sepi dan sedikit sedih — penyanyi biasa sedang sakit.'
      },
      {
        illustrationSeed: 'music-3',
        textEn: 'Sari\'s grandmother whispered, "Music is a gift you share, not something to hide."',
        textId: 'Nenek Sari berbisik, "Musik adalah hadiah yang kau bagikan, bukan yang kau sembunyikan."'
      },
      {
        illustrationSeed: 'music-4',
        textEn: 'With shaking knees, Sari stepped up and began to sing a gentle rhyme about the moon and rice fields.',
        textId: 'Dengan lutut gemetar, Sari maju dan mulai menyanyikan pantun lembut tentang bulan dan sawah.'
      },
      {
        illustrationSeed: 'music-5',
        textEn: 'One by one, the villagers began clapping along, then swaying, then dancing under the stars.',
        textId: 'Satu per satu, warga desa mulai bertepuk tangan, lalu bergoyang, lalu menari di bawah bintang.'
      },
      {
        illustrationSeed: 'music-6',
        textEn: 'From that night on, Sari sang at every festival, no longer afraid to share her gift.',
        textId: 'Sejak malam itu, Sari bernyanyi di setiap festival, tak lagi takut membagikan hadiahnya.'
      }
    ],
    quiz: [
      {
        questionEn: 'Why was the festival feeling sad?',
        questionId: 'Kenapa festival terasa sedih?',
        optionsEn: ['It was raining', 'The usual singer was sick', 'There was no food', 'It was cancelled'],
        optionsId: ['Sedang hujan', 'Penyanyi biasa sedang sakit', 'Tidak ada makanan', 'Dibatalkan'],
        correctIndex: 1
      },
      {
        questionEn: 'What did Sari sing about?',
        questionId: 'Sari bernyanyi tentang apa?',
        optionsEn: ['Cars and roads', 'The moon and rice fields', 'Robots', 'The ocean'],
        optionsId: ['Mobil dan jalan', 'Bulan dan sawah', 'Robot', 'Laut'],
        correctIndex: 1
      },
      {
        questionEn: 'What did the villagers do while Sari sang?',
        questionId: 'Apa yang dilakukan warga desa saat Sari bernyanyi?',
        optionsEn: ['They left', 'They clapped and danced', 'They fell asleep', 'They argued'],
        optionsId: ['Pergi', 'Bertepuk tangan dan menari', 'Tertidur', 'Bertengkar'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'grandmas-lantern-festival',
    titleEn: "Grandma's Lantern Festival",
    titleId: 'Festival Lampion Nenek',
    descriptionEn: 'A boy learns the meaning behind his family\'s lantern festival tradition and why celebrations bring people together.',
    descriptionId: 'Seorang anak belajar makna di balik tradisi festival lampion keluarganya dan kenapa perayaan menyatukan orang.',
    categorySlug: 'holidays-culture',
    authorSlug: 'siti-aminah',
    coverEmoji: '🏮',
    coverPalette: 'night',
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'holidays-1',
        textEn: 'Every year, Bram\'s family made paper lanterns together for the village Lantern Festival.',
        textId: 'Setiap tahun, keluarga Bram membuat lampion kertas bersama untuk Festival Lampion desa.'
      },
      {
        illustrationSeed: 'holidays-2',
        textEn: '"Why do we do this every year, Grandma?" Bram asked, folding red paper carefully.',
        textId: '"Kenapa kita melakukan ini setiap tahun, Nek?" tanya Bram, sambil melipat kertas merah hati-hati.'
      },
      {
        illustrationSeed: 'holidays-3',
        textEn: '"The lanterns carry our wishes for the new year, and light guides family back home," Grandma explained.',
        textId: '"Lampion membawa harapan kita untuk tahun baru, dan cahayanya menuntun keluarga kembali pulang," jelas Nenek.'
      },
      {
        illustrationSeed: 'holidays-4',
        textEn: 'That evening, the whole village gathered, lighting their lanterns one by one until the sky glowed gold.',
        textId: 'Malam itu, seluruh desa berkumpul, menyalakan lampion satu per satu hingga langit bersinar keemasan.'
      },
      {
        illustrationSeed: 'holidays-5',
        textEn: 'Bram wrote his wish on his lantern: "I wish everyone I love stays happy and healthy."',
        textId: 'Bram menulis harapannya di lampionnya: "Aku berharap semua yang kucintai tetap bahagia dan sehat."'
      },
      {
        illustrationSeed: 'holidays-6',
        textEn: 'Watching hundreds of lanterns float into the sky, Bram finally understood why the tradition mattered.',
        textId: 'Melihat ratusan lampion melayang ke langit, Bram akhirnya paham kenapa tradisi ini begitu berarti.'
      }
    ],
    quiz: [
      {
        questionEn: 'What did Bram\'s family make together?',
        questionId: 'Apa yang dibuat keluarga Bram bersama?',
        optionsEn: ['Kites', 'Paper lanterns', 'Cookies', 'Masks'],
        optionsId: ['Layang-layang', 'Lampion kertas', 'Kue', 'Topeng'],
        correctIndex: 1
      },
      {
        questionEn: 'What do the lanterns carry, according to Grandma?',
        questionId: 'Menurut Nenek, apa yang dibawa lampion?',
        optionsEn: ['Food', 'Wishes for the new year', 'Money', 'Nothing special'],
        optionsId: ['Makanan', 'Harapan untuk tahun baru', 'Uang', 'Tidak ada yang khusus'],
        correctIndex: 1
      },
      {
        questionEn: 'What did Bram write on his lantern?',
        questionId: 'Apa yang ditulis Bram di lampionnya?',
        optionsEn: ['A joke', 'A wish for loved ones to be happy and healthy', 'His name only', 'A drawing'],
        optionsId: ['Lelucon', 'Harapan agar orang tercinta bahagia dan sehat', 'Namanya saja', 'Gambar'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'why-teeth-need-brushing',
    titleEn: 'Why Teeth Need Brushing',
    titleId: 'Kenapa Gigi Perlu Disikat',
    descriptionEn: 'A friendly visit to the dentist teaches a reluctant boy why brushing his teeth every day matters.',
    descriptionId: 'Kunjungan yang menyenangkan ke dokter gigi mengajarkan seorang anak yang malas kenapa menyikat gigi setiap hari itu penting.',
    categorySlug: 'health-body',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🦷',
    coverPalette: 'ocean',
    ageMin: 3,
    ageMax: 7,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'health-1',
        textEn: 'Ega never liked brushing his teeth. "It takes too long," he always complained.',
        textId: 'Ega tidak pernah suka menyikat gigi. "Terlalu lama," ia selalu mengeluh.'
      },
      {
        illustrationSeed: 'health-2',
        textEn: 'One day, his tooth started to hurt, so Mom took him to see Dr. Nisa, the dentist.',
        textId: 'Suatu hari, giginya mulai sakit, jadi Ibu membawanya ke Dr. Nisa, dokter gigi.'
      },
      {
        illustrationSeed: 'health-3',
        textEn: 'Dr. Nisa showed him a picture: tiny sugar bugs love hiding in unbrushed teeth and cause holes.',
        textId: 'Dr. Nisa menunjukkan gambar: kuman gula kecil suka bersembunyi di gigi yang tak disikat dan menyebabkan lubang.'
      },
      {
        illustrationSeed: 'health-4',
        textEn: '"Brushing twice a day chases the sugar bugs away before they can make a home in your teeth," she said.',
        textId: '"Menyikat gigi dua kali sehari mengusir kuman gula sebelum mereka bisa tinggal di gigimu," katanya.'
      },
      {
        illustrationSeed: 'health-5',
        textEn: 'Dr. Nisa gently fixed Ega\'s tooth, and gave him a fun new toothbrush shaped like a dinosaur.',
        textId: 'Dr. Nisa memperbaiki gigi Ega dengan lembut, dan memberinya sikat gigi baru berbentuk dinosaurus.'
      },
      {
        illustrationSeed: 'health-6',
        textEn: 'Now Ega brushes every morning and night, proud that his teeth are strong and sugar-bug-free.',
        textId: 'Sekarang Ega menyikat gigi setiap pagi dan malam, bangga giginya kuat dan bebas kuman gula.'
      }
    ],
    quiz: [
      {
        questionEn: 'Why did Ega go to the dentist?',
        questionId: 'Kenapa Ega pergi ke dokter gigi?',
        optionsEn: ['For a checkup only', 'His tooth started to hurt', 'To get a toy', 'For fun'],
        optionsId: ['Cek rutin saja', 'Giginya mulai sakit', 'Untuk dapat mainan', 'Untuk senang-senang'],
        correctIndex: 1
      },
      {
        questionEn: 'What did Dr. Nisa say causes holes in teeth?',
        questionId: 'Menurut Dr. Nisa, apa yang menyebabkan lubang di gigi?',
        optionsEn: ['Cold water', 'Sugar bugs on unbrushed teeth', 'Sunlight', 'Too much sleep'],
        optionsId: ['Air dingin', 'Kuman gula di gigi tak disikat', 'Sinar matahari', 'Terlalu banyak tidur'],
        correctIndex: 1
      },
      {
        questionEn: 'How often should you brush your teeth?',
        questionId: 'Seberapa sering sebaiknya menyikat gigi?',
        optionsEn: ['Once a week', 'Twice a day', 'Only when it hurts', 'Never'],
        optionsId: ['Sekali seminggu', 'Dua kali sehari', 'Hanya saat sakit', 'Tidak pernah'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'the-magic-words',
    titleEn: 'The Magic Words: Please and Thank You',
    titleId: 'Kata Ajaib: Tolong dan Terima Kasih',
    descriptionEn: 'A young rabbit discovers that two small words can turn a grumpy day into a wonderful one.',
    descriptionId: 'Seekor kelinci kecil menemukan bahwa dua kata sederhana bisa mengubah hari yang buruk menjadi menyenangkan.',
    categorySlug: 'manners',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🙏',
    coverPalette: 'sunrise',
    ageMin: 2,
    ageMax: 6,
    isPremium: false,
    pages: [
      {
        illustrationSeed: 'manners-1',
        textEn: 'Kiki the rabbit wanted a carrot from the market stall. "Give me a carrot!" she demanded.',
        textId: 'Kiki si kelinci ingin sebuah wortel dari kios pasar. "Kasih aku wortel!" katanya menuntut.'
      },
      {
        illustrationSeed: 'manners-2',
        textEn: 'The shopkeeper, Mr. Beaver, looked a little sad and slowly turned away without a word.',
        textId: 'Pemilik toko, Pak Berang-berang, terlihat sedikit sedih dan perlahan berbalik tanpa berkata apa-apa.'
      },
      {
        illustrationSeed: 'manners-3',
        textEn: 'Kiki\'s mother whispered gently, "Try asking with the magic words, sweetheart."',
        textId: 'Ibu Kiki berbisik lembut, "Coba minta dengan kata ajaib, Sayang."'
      },
      {
        illustrationSeed: 'manners-4',
        textEn: '"Could I please have a carrot?" Kiki asked, softer this time. Mr. Beaver\'s face lit up with a smile.',
        textId: '"Bolehkah aku minta wortel, tolong?" tanya Kiki, kali ini lebih lembut. Wajah Pak Berang-berang langsung ceria.'
      },
      {
        illustrationSeed: 'manners-5',
        textEn: 'He handed her the biggest, crunchiest carrot in the stall. "Thank you so much!" Kiki said happily.',
        textId: 'Ia memberikan wortel terbesar dan paling renyah di kiosnya. "Terima kasih banyak!" kata Kiki riang.'
      },
      {
        illustrationSeed: 'manners-6',
        textEn: 'From that day, Kiki always remembered: please and thank you make everyone\'s day a little brighter.',
        textId: 'Sejak hari itu, Kiki selalu ingat: tolong dan terima kasih membuat hari semua orang sedikit lebih cerah.'
      }
    ],
    quiz: [
      {
        questionEn: 'How did Kiki first ask for a carrot?',
        questionId: 'Bagaimana Kiki pertama kali meminta wortel?',
        optionsEn: ['Politely', 'By demanding it rudely', 'By singing', 'By writing a note'],
        optionsId: ['Dengan sopan', 'Dengan menuntut kasar', 'Dengan bernyanyi', 'Dengan menulis catatan'],
        correctIndex: 1
      },
      {
        questionEn: 'What are the "magic words"?',
        questionId: 'Apa "kata ajaib" itu?',
        optionsEn: ['Hello and goodbye', 'Please and thank you', 'Yes and no', 'Sorry and okay'],
        optionsId: ['Halo dan sampai jumpa', 'Tolong dan terima kasih', 'Ya dan tidak', 'Maaf dan oke'],
        correctIndex: 1
      },
      {
        questionEn: 'How did Mr. Beaver react to the magic words?',
        questionId: 'Bagaimana reaksi Pak Berang-berang mendengar kata ajaib?',
        optionsEn: ['He got angrier', 'He smiled and gave the best carrot', 'He ignored her', 'He closed his shop'],
        optionsId: ['Makin marah', 'Tersenyum dan memberi wortel terbaik', 'Mengabaikannya', 'Menutup tokonya'],
        correctIndex: 1
      }
    ]
  },
  {
    slug: 'the-girl-who-planted-a-forest',
    titleEn: 'The Girl Who Planted a Forest',
    titleId: 'Gadis yang Menanam Hutan',
    descriptionEn: 'Inspired by real young environmentalists around the world, this story follows a girl whose one small act of planting trees grows into a movement.',
    descriptionId: 'Terinspirasi dari anak-anak pencinta lingkungan di dunia nyata, kisah ini mengikuti seorang gadis yang aksi kecilnya menanam pohon tumbuh menjadi gerakan besar.',
    categorySlug: 'true-stories',
    authorSlug: 'axto-creative-team',
    coverEmoji: '🌟',
    coverPalette: 'forest',
    ageMin: 6,
    ageMax: 11,
    isPremium: true,
    pages: [
      {
        illustrationSeed: 'true-1',
        textEn: 'When Maya was seven, she noticed the hill behind her school had no trees left — only dry, cracked earth.',
        textId: 'Ketika Maya berusia tujuh tahun, ia menyadari bukit di belakang sekolahnya tak ada pohon lagi — hanya tanah kering yang retak.'
      },
      {
        illustrationSeed: 'true-2',
        textEn: 'Her teacher explained that without trees, the soil couldn\'t hold rainwater, and animals had nowhere to live.',
        textId: 'Gurunya menjelaskan bahwa tanpa pohon, tanah tak bisa menahan air hujan, dan hewan tak punya tempat tinggal.'
      },
      {
        illustrationSeed: 'true-3',
        textEn: 'Maya decided to plant just one small seedling that weekend. It felt tiny compared to the whole bare hill.',
        textId: 'Maya memutuskan menanam satu bibit kecil akhir pekan itu. Rasanya kecil sekali dibanding seluruh bukit gundul.'
      },
      {
        illustrationSeed: 'true-4',
        textEn: 'She asked her friends to help the next weekend. Ten children came, then twenty, then the whole school.',
        textId: 'Ia mengajak teman-temannya membantu akhir pekan berikutnya. Sepuluh anak datang, lalu dua puluh, lalu seluruh sekolah.'
      },
      {
        illustrationSeed: 'true-5',
        textEn: 'Within two years, hundreds of young trees covered the hill, and birds and butterflies began to return.',
        textId: 'Dalam dua tahun, ratusan pohon muda menutupi bukit itu, dan burung serta kupu-kupu mulai kembali.'
      },
      {
        illustrationSeed: 'true-6',
        textEn: 'Maya learned that one small act, shared with others, can grow into something as big as a forest.',
        textId: 'Maya belajar bahwa satu tindakan kecil, jika dibagikan bersama orang lain, bisa tumbuh menjadi sebesar hutan.'
      }
    ],
    quiz: [
      {
        questionEn: 'What did Maya notice about the hill?',
        questionId: 'Apa yang disadari Maya tentang bukit itu?',
        optionsEn: ['It had too many trees', 'It had no trees left', 'It was covered in flowers', 'It was underwater'],
        optionsId: ['Terlalu banyak pohon', 'Tidak ada pohon lagi', 'Penuh bunga', 'Terendam air'],
        correctIndex: 1
      },
      {
        questionEn: 'How did Maya\'s small act grow?',
        questionId: 'Bagaimana tindakan kecil Maya berkembang?',
        optionsEn: ['It stayed just her alone', 'Friends and eventually the whole school joined', 'She gave up', 'Nobody noticed'],
        optionsId: ['Tetap sendirian', 'Teman-teman dan akhirnya seluruh sekolah ikut', 'Ia menyerah', 'Tidak ada yang peduli'],
        correctIndex: 1
      },
      {
        questionEn: 'What returned to the hill after the trees grew?',
        questionId: 'Apa yang kembali ke bukit setelah pohon tumbuh?',
        optionsEn: ['Cars', 'Birds and butterflies', 'Buildings', 'Nothing changed'],
        optionsId: ['Mobil', 'Burung dan kupu-kupu', 'Gedung', 'Tidak ada yang berubah'],
        correctIndex: 1
      }
    ]
  }
];

// World folk tales (retold public-domain, ~10 min each) appended to the library.
STORIES.push(...WORLD_STORIES);
