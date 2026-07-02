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
  }
];
