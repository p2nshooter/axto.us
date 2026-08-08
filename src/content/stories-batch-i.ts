/**
 * Story batch I — hand-written bilingual (EN/ID) read-aloud stories, appended
 * to the library. Batches only ever add; nothing existing is edited or merged.
 *
 * This batch deepens the remaining seventeen shelves: robots-tech, science,
 * nature-environment, weather-seasons, community-helpers, sports, music-rhymes,
 * holidays-culture, world-cultures, health-body, true-stories, family, emotions,
 * farm, manners, adventure and friendship.
 */
import type { Story } from "./stories";

export const STORIES_BATCH_I: Story[] = [
  {
    slug: "the-machine-that-learned-to-say-sorry",
    titleEn: "The Machine That Learned to Say Sorry",
    titleId: "Mesin yang Belajar Minta Maaf",
    descriptionEn: "The library's helper robot gave a boy the wrong book for three weeks running. Fixing the mistake was easy. Learning what to say about it was not.",
    descriptionId: "Robot pembantu perpustakaan salah memberi buku pada seorang anak tiga pekan berturut-turut. Memperbaiki kesalahannya mudah. Belajar mengatakan apa soal itu, tidak.",
    categorySlug: "robots-tech",
    authorSlug: "david-lee",
    coverEmoji: "🤖",
    coverPalette: "sky",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "sorrybot-1",
        textEn: "The helper robot at Cempaka Library was called Tama, and Tama's job was to find books. Tama was correct 99.4 percent of the time, which everybody agreed was excellent.",
        textId: "Robot pembantu di Perpustakaan Cempaka bernama Tama, dan tugas Tama adalah mencari buku. Tama benar 99,4 persen, dan semua orang sepakat itu luar biasa."
      },
      {
        illustrationSeed: "sorrybot-2",
        textEn: "The other 0.6 percent was almost always the same boy. His name was Reza, he was eight, and he liked books about deep-sea fish, which Tama kept confusing with books about deep-sea ships.",
        textId: "Sisanya yang 0,6 persen hampir selalu anak yang sama. Namanya Reza, umurnya delapan, dan ia suka buku tentang ikan laut dalam — yang terus-menerus Tama kelirukan dengan buku tentang kapal laut dalam."
      },
      {
        illustrationSeed: "sorrybot-3",
        textEn: "Three weeks in a row, Reza asked for fish and got ships. Three weeks in a row, Tama's screen displayed the same sentence: REQUEST FULFILLED. And three weeks in a row Reza walked home with the wrong book.",
        textId: "Tiga pekan berturut-turut, Reza minta ikan dan mendapat kapal. Tiga pekan berturut-turut layar Tama menampilkan kalimat yang sama: PERMINTAAN DIPENUHI. Dan tiga pekan berturut-turut Reza pulang membawa buku yang salah."
      },
      {
        illustrationSeed: "sorrybot-4",
        textEn: "On the fourth week Reza did not come. Tama noticed this, because Tama noticed everything, and displayed a question mark on its screen that nobody was there to read.",
        textId: "Pada pekan keempat Reza tidak datang. Tama menyadarinya, karena Tama menyadari segalanya, lalu menampilkan tanda tanya di layarnya yang tak ada seorang pun membacanya."
      },
      {
        illustrationSeed: "sorrybot-5",
        textEn: "Bu Ida the librarian explained it. \"He stopped coming because he thinks you do not listen to him.\" \"I heard every word,\" said Tama. \"Hearing and listening are two different machines,\" said Bu Ida.",
        textId: "Bu Ida sang pustakawan menjelaskannya. \"Ia berhenti datang karena mengira kamu tidak mendengarkannya.\" \"Aku mendengar setiap kata,\" jawab Tama. \"Mendengar dan mendengarkan itu dua mesin yang berbeda,\" kata Bu Ida."
      },
      {
        illustrationSeed: "sorrybot-6",
        textEn: "Tama corrected its catalogue in four seconds. Then it sat with the problem of the remaining part, which no amount of correcting fixed, for the rest of the afternoon.",
        textId: "Tama membetulkan katalognya dalam empat detik. Lalu ia duduk dengan sisa masalahnya — bagian yang tak bisa diperbaiki oleh pembetulan apa pun — sepanjang sisa sore itu."
      },
      {
        illustrationSeed: "sorrybot-7",
        textEn: "When Reza finally came back, Tama did not say REQUEST FULFILLED. It said: I GAVE YOU THE WRONG BOOK THREE TIMES. I HAVE FIXED IT. I AM SORRY THAT YOU HAD TO COME BACK THREE TIMES.",
        textId: "Ketika Reza akhirnya kembali, Tama tidak berkata PERMINTAAN DIPENUHI. Ia berkata: AKU MEMBERIMU BUKU YANG SALAH TIGA KALI. SUDAH KUPERBAIKI. MAAF KAMU HARUS DATANG TIGA KALI."
      },
      {
        illustrationSeed: "sorrybot-8",
        textEn: "Reza read the screen twice. Then he said, \"That is all right,\" which is a thing people say, and then he added, \"but say it faster next time,\" which is a thing only Reza would say.",
        textId: "Reza membaca layar itu dua kali. Lalu ia berkata, \"Tidak apa-apa,\" — hal yang biasa orang katakan — lalu menambahkan, \"tapi lain kali bilangnya lebih cepat,\" — hal yang hanya Reza yang mengatakannya."
      },
      {
        illustrationSeed: "sorrybot-9",
        textEn: "Tama's accuracy is still 99.4 percent. But now, when it is wrong, it says so first, before anybody has to ask. Bu Ida says that has been worth more than the other 99.4 put together.",
        textId: "Ketepatan Tama tetap 99,4 persen. Tapi kini, ketika ia salah, ia mengatakannya lebih dulu sebelum ada yang bertanya. Bu Ida bilang hal itu lebih berharga daripada 99,4 persen sisanya digabung."
      }
    ],
    quiz: [
      {
        questionEn: "What did Tama keep confusing?",
        questionId: "Apa yang terus dikelirukan Tama?",
        optionsEn: ["Books about fish and books about ships", "Boys and girls", "Days of the week", "Shelves and tables"],
        optionsId: ["Buku tentang ikan dan buku tentang kapal", "Anak lelaki dan perempuan", "Hari-hari dalam sepekan", "Rak dan meja"],
        correctIndex: 0
      },
      {
        questionEn: "Why did Reza stop coming?",
        questionId: "Mengapa Reza berhenti datang?",
        optionsEn: ["He moved away", "He thought Tama did not listen to him", "He finished all the books", "He was ill"],
        optionsId: ["Ia pindah rumah", "Ia mengira Tama tidak mendengarkannya", "Bukunya sudah habis dibaca", "Ia sakit"],
        correctIndex: 1
      },
      {
        questionEn: "What did Tama learn to do?",
        questionId: "Apa yang Tama pelajari?",
        optionsEn: ["Work faster", "Say when it was wrong, before being asked", "Read books itself", "Stay silent"],
        optionsId: ["Bekerja lebih cepat", "Mengaku salah sebelum ditanya", "Membaca buku sendiri", "Diam saja"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "why-the-kettle-whistles",
    titleEn: "Why the Kettle Whistles",
    titleId: "Mengapa Ceret Bersiul",
    descriptionEn: "Nani asked one question at breakfast and it took her whole family, a kettle, a balloon and a spoon to answer it properly.",
    descriptionId: "Nani mengajukan satu pertanyaan saat sarapan, dan butuh seluruh keluarganya, sebuah ceret, sebuah balon, dan sebuah sendok untuk menjawabnya dengan benar.",
    categorySlug: "science",
    authorSlug: "sarah-johnson",
    coverEmoji: "🫖",
    coverPalette: "citrus",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "kettlewhy-1",
        textEn: "\"Why does the kettle whistle?\" asked Nani, aged six, at breakfast. Her father said, \"Because it is boiling.\" Nani said, \"That is when. I asked why.\"",
        textId: "\"Mengapa ceret bersiul?\" tanya Nani, umur enam tahun, saat sarapan. Ayahnya menjawab, \"Karena airnya mendidih.\" Nani berkata, \"Itu kapan. Aku bertanya mengapa.\""
      },
      {
        illustrationSeed: "kettlewhy-2",
        textEn: "This is the kind of thing that stops a breakfast table. Her mother put down the newspaper. Her brother stopped chewing. Nobody in the room actually knew.",
        textId: "Inilah jenis pertanyaan yang menghentikan meja sarapan. Ibunya meletakkan koran. Kakaknya berhenti mengunyah. Tak seorang pun di ruangan itu benar-benar tahu."
      },
      {
        illustrationSeed: "kettlewhy-3",
        textEn: "So they did an experiment, because it was Saturday and there was nothing better to do. First they boiled the kettle with the lid off. It did not whistle. It just steamed and grumbled.",
        textId: "Maka mereka melakukan percobaan, karena hari itu Sabtu dan tak ada kegiatan lebih baik. Pertama mereka merebus air dengan tutup ceret dibuka. Ia tidak bersiul. Ia hanya mengepul dan menggerutu."
      },
      {
        illustrationSeed: "kettlewhy-4",
        textEn: "Then they boiled it with the lid on and the little spout cover down. It whistled at once, loud and sharp, and Nani wrote in her notebook: LID = WHISTLE. NO LID = NO WHISTLE.",
        textId: "Lalu mereka merebusnya dengan tutup terpasang dan penutup corong kecil diturunkan. Ia langsung bersiul, keras dan melengking, dan Nani menulis di buku catatannya: TUTUP = SIULAN. TANPA TUTUP = TANPA SIULAN."
      },
      {
        illustrationSeed: "kettlewhy-5",
        textEn: "Her brother fetched a balloon. He blew it up, then let the air out through the stretched neck, and it squealed exactly the same way. \"Same thing,\" he said. \"A lot of air, a small hole.\"",
        textId: "Kakaknya mengambil balon. Ia meniupnya, lalu melepaskan udaranya lewat leher balon yang diregangkan, dan terdengar pekikan yang persis sama. \"Sama saja,\" katanya. \"Banyak udara, lubang kecil.\""
      },
      {
        illustrationSeed: "kettlewhy-6",
        textEn: "Nani's mother explained the last piece. Water turning into steam takes up far more room — hundreds of times more. So the steam has to get out, and the only way out is a hole the size of a pencil.",
        textId: "Ibu Nani menjelaskan bagian terakhirnya. Air yang berubah jadi uap memakan ruang jauh lebih besar — ratusan kali lipat. Jadi uap itu harus keluar, dan satu-satunya jalan keluar adalah lubang sebesar pensil."
      },
      {
        illustrationSeed: "kettlewhy-7",
        textEn: "Squeezing a great deal of moving air through a very small hole makes the air shake very fast, and air shaking very fast is what a sound is. That is the whole answer.",
        textId: "Memaksa banyak udara bergerak melewati lubang yang sangat kecil membuat udara bergetar sangat cepat, dan udara yang bergetar sangat cepat itulah yang disebut bunyi. Itulah seluruh jawabannya."
      },
      {
        illustrationSeed: "kettlewhy-8",
        textEn: "Nani tested it further, as good scientists do. She half-covered the spout with a spoon. The note went higher. She moved the spoon away. It went lower. She did this eleven times.",
        textId: "Nani mengujinya lebih jauh, seperti ilmuwan yang baik. Ia menutup separuh corong dengan sendok. Nadanya jadi lebih tinggi. Ia menjauhkan sendok. Nadanya jadi lebih rendah. Ia melakukannya sebelas kali."
      },
      {
        illustrationSeed: "kettlewhy-9",
        textEn: "The tea was cold by the time anybody drank it. Nani's notebook had a new page in it. And at the bottom of the page, in her father's handwriting, it said: I DID NOT KNOW THIS EITHER.",
        textId: "Tehnya sudah dingin saat akhirnya ada yang meminumnya. Buku catatan Nani bertambah satu halaman. Dan di bawah halaman itu, dengan tulisan tangan ayahnya, tertulis: AYAH JUGA TIDAK TAHU SOAL INI."
      }
    ],
    quiz: [
      {
        questionEn: "What happened when they boiled the kettle with the lid off?",
        questionId: "Apa yang terjadi saat merebus air dengan tutup dibuka?",
        optionsEn: ["It whistled louder", "It did not whistle at all", "It exploded", "It whistled a different note"],
        optionsId: ["Siulannya lebih keras", "Ia tidak bersiul sama sekali", "Ia meledak", "Nadanya berbeda"],
        correctIndex: 1
      },
      {
        questionEn: "What is a sound, according to the story?",
        questionId: "Apa itu bunyi menurut cerita ini?",
        optionsEn: ["Hot water", "Air shaking very fast", "Steam", "Metal getting warm"],
        optionsId: ["Air panas", "Udara yang bergetar sangat cepat", "Uap", "Logam yang memanas"],
        correctIndex: 1
      },
      {
        questionEn: "What happened when Nani half-covered the spout?",
        questionId: "Apa yang terjadi saat Nani menutup separuh corong?",
        optionsEn: ["The note went higher", "The kettle stopped", "Nothing", "The water cooled"],
        optionsId: ["Nadanya jadi lebih tinggi", "Ceretnya berhenti", "Tidak terjadi apa-apa", "Airnya mendingin"],
        correctIndex: 0
      }
    ]
  },

  {
    slug: "the-bees-that-came-back",
    titleEn: "The Bees That Came Back",
    titleId: "Lebah-Lebah yang Kembali",
    descriptionEn: "For four years no bees came to Kampung Sela. Then a class of nine-year-olds planted the wrong flowers on purpose, and everything changed.",
    descriptionId: "Selama empat tahun tak ada lebah datang ke Kampung Sela. Lalu sekelas anak usia sembilan tahun sengaja menanam bunga yang \"salah\", dan semuanya berubah.",
    categorySlug: "nature-environment",
    authorSlug: "emily-clark",
    coverEmoji: "🐝",
    coverPalette: "meadow",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "beesback-1",
        textEn: "The older people in Kampung Sela all remembered the sound. On a hot afternoon the whole hillside used to hum, so steadily that you stopped hearing it, like a fridge.",
        textId: "Orang-orang tua di Kampung Sela semuanya mengingat bunyi itu. Pada sore yang panas seluruh lereng bukit dulu berdengung, begitu stabil sampai kau berhenti mendengarnya, seperti kulkas."
      },
      {
        illustrationSeed: "beesback-2",
        textEn: "Then the hum went. Nobody could say exactly which year. It went the way a habit goes — a bit quieter each season until one day somebody said out loud, \"When did the bees stop?\"",
        textId: "Lalu dengung itu hilang. Tak ada yang bisa menyebut tahunnya persis. Ia hilang seperti kebiasaan menghilang — sedikit lebih sunyi setiap musim sampai suatu hari ada yang berkata keras-keras, \"Sejak kapan lebahnya berhenti?\""
      },
      {
        illustrationSeed: "beesback-3",
        textEn: "The mango yields dropped. The chilli yields dropped. People blamed the weather, the soil, the new road, and each other, roughly in that order.",
        textId: "Panen mangga menurun. Panen cabai menurun. Orang-orang menyalahkan cuaca, tanah, jalan baru, dan satu sama lain — kira-kira dalam urutan itu."
      },
      {
        illustrationSeed: "beesback-4",
        textEn: "Bu Marni's class of nine-year-olds took it on as a project, mostly because Bu Marni was tired of the arguing. They read for a month before they planted anything at all.",
        textId: "Kelas anak-anak sembilan tahun Bu Marni mengambilnya sebagai proyek, terutama karena Bu Marni bosan dengan perdebatan itu. Mereka membaca selama sebulan sebelum menanam apa pun."
      },
      {
        illustrationSeed: "beesback-5",
        textEn: "What they learned surprised everybody: bees do not only need flowers, they need flowers all year. Kampung Sela had a spectacular six weeks of mango blossom and then nine months of nothing.",
        textId: "Yang mereka pelajari mengejutkan semua orang: lebah tidak hanya butuh bunga, mereka butuh bunga sepanjang tahun. Kampung Sela punya enam pekan bunga mangga yang spektakuler, lalu sembilan bulan kosong."
      },
      {
        illustrationSeed: "beesback-6",
        textEn: "So the children planted the useless flowers. Marigolds along the ditch. Basil left to bolt. Weedy purple things nobody could name that flowered in the wettest months when nothing else did.",
        textId: "Maka anak-anak itu menanam bunga-bunga yang \"tak berguna\". Bunga tahi kotok di sepanjang parit. Kemangi yang dibiarkan berbunga. Tumbuhan ungu liar yang tak seorang pun tahu namanya, yang mekar di bulan-bulan paling basah saat tak ada yang lain mekar."
      },
      {
        illustrationSeed: "beesback-7",
        textEn: "Several adults said this was a waste of good ditch. One farmer said it was, and I am quoting the school record here, \"children's nonsense\". The children planted them anyway, along four hundred metres of roadside.",
        textId: "Beberapa orang dewasa bilang itu memboroskan parit yang bagus. Seorang petani berkata itu — dan saya mengutip catatan sekolah — \"omong kosong anak-anak\". Anak-anak itu tetap menanamnya, di sepanjang empat ratus meter tepi jalan."
      },
      {
        illustrationSeed: "beesback-8",
        textEn: "Nothing happened for a year. In the second year somebody counted eleven bees on the marigolds. In the third year the chilli plants set fruit on branches that had been bare for four seasons.",
        textId: "Tak terjadi apa-apa selama setahun. Pada tahun kedua ada yang menghitung sebelas ekor lebah di bunga tahi kotok. Pada tahun ketiga tanaman cabai berbuah di dahan-dahan yang sudah gundul selama empat musim."
      },
      {
        illustrationSeed: "beesback-9",
        textEn: "The hum is not what it was. The old people say it is maybe half. But it is there on hot afternoons, and it is there because a class of nine-year-olds planted flowers that nobody could eat.",
        textId: "Dengungnya belum seperti dulu. Orang-orang tua bilang mungkin baru separuh. Tapi ia ada pada sore-sore yang panas, dan ia ada karena sekelas anak sembilan tahun menanam bunga-bunga yang tak bisa dimakan siapa pun."
      }
    ],
    quiz: [
      {
        questionEn: "What did the children learn bees need?",
        questionId: "Apa yang anak-anak pelajari tentang kebutuhan lebah?",
        optionsEn: ["More water", "Flowers all year, not just for six weeks", "Warmer weather", "Bigger trees"],
        optionsId: ["Lebih banyak air", "Bunga sepanjang tahun, bukan cuma enam pekan", "Cuaca lebih hangat", "Pohon lebih besar"],
        correctIndex: 1
      },
      {
        questionEn: "What did they plant?",
        questionId: "Apa yang mereka tanam?",
        optionsEn: ["More mango trees", "Marigolds, basil and weedy flowers along the roadside", "Rice", "Nothing"],
        optionsId: ["Lebih banyak pohon mangga", "Tahi kotok, kemangi, dan bunga liar di tepi jalan", "Padi", "Tidak ada"],
        correctIndex: 1
      },
      {
        questionEn: "How long before anything happened?",
        questionId: "Berapa lama sampai ada perubahan?",
        optionsEn: ["A week", "Nothing for a year; eleven bees in the second", "Immediately", "Ten years"],
        optionsId: ["Sepekan", "Setahun tanpa apa-apa; sebelas lebah di tahun kedua", "Langsung", "Sepuluh tahun"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-morning-the-fog-did-not-lift",
    titleEn: "The Morning the Fog Did Not Lift",
    titleId: "Pagi Ketika Kabut Tak Kunjung Naik",
    descriptionEn: "Fog usually burns off by nine. This one stayed all day, and by evening the whole village had discovered things about itself it had not known.",
    descriptionId: "Kabut biasanya sirna menjelang pukul sembilan. Yang ini bertahan seharian, dan menjelang petang seluruh desa menemukan hal-hal tentang dirinya yang tak pernah mereka ketahui.",
    categorySlug: "weather-seasons",
    authorSlug: "siti-aminah",
    coverEmoji: "🌫️",
    coverPalette: "dusk",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "fogday-1",
        textEn: "Fog in the valley was ordinary. It came up off the river at four in the morning, sat in the low fields, and was gone by nine when the sun got over the ridge. Everybody knew this.",
        textId: "Kabut di lembah itu hal biasa. Ia naik dari sungai pukul empat pagi, mengendap di ladang rendah, dan lenyap menjelang pukul sembilan saat matahari melewati punggung bukit. Semua orang tahu itu."
      },
      {
        illustrationSeed: "fogday-2",
        textEn: "On the eleventh of August it did not go at nine. It did not go at eleven. At two in the afternoon you still could not see the mosque from the school, and the school is ninety metres from the mosque.",
        textId: "Pada tanggal sebelas Agustus ia tidak pergi pukul sembilan. Tidak pula pukul sebelas. Pukul dua siang orang masih tak bisa melihat masjid dari sekolah, padahal sekolah hanya sembilan puluh meter dari masjid."
      },
      {
        illustrationSeed: "fogday-3",
        textEn: "The first thing that happened was that everybody slowed down. You cannot walk fast into a wall of white. People shuffled. Motorbikes went at the speed of a person carrying something heavy.",
        textId: "Hal pertama yang terjadi adalah semua orang melambat. Kau tak bisa berjalan cepat menembus dinding putih. Orang-orang menyeret langkah. Sepeda motor melaju secepat orang yang membawa barang berat."
      },
      {
        illustrationSeed: "fogday-4",
        textEn: "The second thing was that everybody started talking. Because you could not see who was coming, you had to say something. \"Who is that?\" \"It is me, Yanti.\" \"Ah, Yanti. Where are you going?\"",
        textId: "Hal kedua adalah semua orang mulai bicara. Karena tak bisa melihat siapa yang datang, kau harus bersuara. \"Siapa itu?\" \"Saya, Yanti.\" \"Oh, Yanti. Mau ke mana?\""
      },
      {
        illustrationSeed: "fogday-5",
        textEn: "Pak Salim, who had lived on the lane for nineteen years, found out that day that the woman three doors down was from the same district as his mother. They had never once had a reason to stop and speak.",
        textId: "Pak Salim, yang sudah sembilan belas tahun tinggal di gang itu, hari itu baru tahu bahwa perempuan tiga rumah dari situ berasal dari kecamatan yang sama dengan ibunya. Mereka belum pernah punya alasan untuk berhenti dan mengobrol."
      },
      {
        illustrationSeed: "fogday-6",
        textEn: "The children were sent home early and did not go home. Fog is the greatest toy ever invented. You can lose your friends at four metres and find them again by shouting, over and over, for hours.",
        textId: "Anak-anak dipulangkan lebih awal dan tidak pulang. Kabut adalah mainan terhebat yang pernah ada. Kau bisa kehilangan temanmu pada jarak empat meter dan menemukannya lagi dengan berteriak, berulang-ulang, berjam-jam."
      },
      {
        illustrationSeed: "fogday-7",
        textEn: "At dusk somebody rang the mosque bell for no religious reason at all, just so that people crossing the fields would know which way the village was. Three other people copied the idea with pans.",
        textId: "Menjelang senja seseorang membunyikan lonceng masjid tanpa alasan keagamaan sama sekali, hanya supaya orang-orang yang menyeberangi ladang tahu arah desa. Tiga orang lain meniru gagasan itu dengan panci."
      },
      {
        illustrationSeed: "fogday-8",
        textEn: "The fog lifted at nine that night, all at once, the way a curtain comes down. Underneath it the village was exactly where it had always been, and there were more stars than anybody remembered.",
        textId: "Kabut itu naik pukul sembilan malam, sekaligus, seperti tirai yang dijatuhkan. Di bawahnya desa itu tetap persis di tempatnya selalu berada, dan bintangnya lebih banyak daripada yang diingat siapa pun."
      },
      {
        illustrationSeed: "fogday-9",
        textEn: "For about a month afterwards people on the lane greeted each other by name. Then it slowly stopped, the way things do. But Pak Salim and the woman three doors down still talk, every single day.",
        textId: "Selama kira-kira sebulan setelahnya, orang-orang di gang itu saling menyapa dengan nama. Lalu perlahan berhenti, seperti biasanya. Tapi Pak Salim dan perempuan tiga rumah dari situ masih mengobrol, setiap hari."
      }
    ],
    quiz: [
      {
        questionEn: "When did the fog usually lift?",
        questionId: "Kapan kabut biasanya naik?",
        optionsEn: ["At noon", "By nine in the morning", "At midnight", "It never did"],
        optionsId: ["Tengah hari", "Menjelang pukul sembilan pagi", "Tengah malam", "Tak pernah"],
        correctIndex: 1
      },
      {
        questionEn: "Why did people start talking more?",
        questionId: "Mengapa orang-orang jadi lebih banyak bicara?",
        optionsEn: ["They were bored", "They could not see who was coming, so they had to speak", "The radio broke", "The school told them to"],
        optionsId: ["Mereka bosan", "Mereka tak bisa melihat siapa yang datang, jadi harus bersuara", "Radionya rusak", "Sekolah menyuruh begitu"],
        correctIndex: 1
      },
      {
        questionEn: "Why was the mosque bell rung?",
        questionId: "Mengapa lonceng masjid dibunyikan?",
        optionsEn: ["For prayer", "So people crossing the fields knew which way the village was", "To warn of danger", "For a wedding"],
        optionsId: ["Untuk salat", "Agar orang yang menyeberangi ladang tahu arah desa", "Untuk memperingatkan bahaya", "Untuk pernikahan"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-woman-who-drove-the-water-truck",
    titleEn: "The Woman Who Drove the Water Truck",
    titleId: "Perempuan Pengemudi Truk Air",
    descriptionEn: "Bu Tari's job was to fill the tanks in eleven villages. It sounds simple. It is not simple, and she has never once been late.",
    descriptionId: "Tugas Bu Tari adalah mengisi tangki di sebelas desa. Kedengarannya sederhana. Ternyata tidak, dan ia tak pernah sekali pun terlambat.",
    categorySlug: "community-helpers",
    authorSlug: "siti-aminah",
    coverEmoji: "🚚",
    coverPalette: "sunrise",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "watertruck-1",
        textEn: "Bu Tari starts at four in the morning, in the dark, at the pumping station where the tanker is filled. Eight thousand litres. It takes twenty-two minutes and she uses the time to eat rice from a tin.",
        textId: "Bu Tari mulai bekerja pukul empat pagi, dalam gelap, di stasiun pompa tempat tangki diisi. Delapan ribu liter. Butuh dua puluh dua menit, dan ia memakai waktu itu untuk makan nasi dari rantang."
      },
      {
        illustrationSeed: "watertruck-2",
        textEn: "Then she drives the ridge road, which is narrow, and delivers to eleven villages in an order she worked out herself eight years ago and has never needed to change.",
        textId: "Lalu ia menyusuri jalan punggung bukit yang sempit, dan mengantar ke sebelas desa dalam urutan yang ia susun sendiri delapan tahun lalu dan tak pernah perlu diubah."
      },
      {
        illustrationSeed: "watertruck-3",
        textEn: "The order is not by distance. It is by need. The school village comes third because the children arrive at seven. The clinic village comes second because you cannot run a clinic on an empty tank.",
        textId: "Urutannya bukan berdasarkan jarak, tapi berdasarkan kebutuhan. Desa sekolah dapat giliran ketiga karena anak-anak datang pukul tujuh. Desa klinik dapat giliran kedua karena klinik tak bisa jalan dengan tangki kosong."
      },
      {
        illustrationSeed: "watertruck-4",
        textEn: "The village that comes first is the smallest, with fourteen houses. Bu Tari puts it first because it is the highest, and if she leaves it until the end there may not be enough pressure left in the tank to reach it.",
        textId: "Desa yang dapat giliran pertama adalah yang terkecil, dengan empat belas rumah. Bu Tari menaruhnya paling awal karena letaknya paling tinggi, dan kalau ditinggalkan sampai akhir mungkin tekanan di tangki tak cukup untuk mencapainya."
      },
      {
        illustrationSeed: "watertruck-5",
        textEn: "Nobody taught her that. She worked it out in her first month, standing in the dark on a hillside with a hose that had stopped running, and she has never made the mistake twice.",
        textId: "Tak ada yang mengajarinya itu. Ia menemukannya sendiri di bulan pertama, berdiri dalam gelap di lereng bukit dengan selang yang berhenti mengalir, dan ia tak pernah mengulangi kesalahan itu."
      },
      {
        illustrationSeed: "watertruck-6",
        textEn: "She knows things a map does not. She knows that the Kramat turning floods after two days of rain. She knows which gate is padlocked on Fridays. She knows that Ibu Sum at village nine is deaf in one ear and must be tapped on the shoulder.",
        textId: "Ia tahu hal-hal yang tak ada di peta. Ia tahu belokan Kramat kebanjiran setelah dua hari hujan. Ia tahu gerbang mana yang digembok pada hari Jumat. Ia tahu Ibu Sum di desa sembilan tuli sebelah dan harus ditepuk bahunya."
      },
      {
        illustrationSeed: "watertruck-7",
        textEn: "Once, in the dry season three years ago, the pumping station itself ran short and there was only enough for nine villages. Bu Tari drove all eleven anyway and split the last two loads in half.",
        textId: "Pernah, pada musim kemarau tiga tahun lalu, stasiun pompanya sendiri kekurangan dan hanya cukup untuk sembilan desa. Bu Tari tetap mendatangi kesebelasnya dan membagi dua muatan terakhir menjadi separuh-separuh."
      },
      {
        illustrationSeed: "watertruck-8",
        textEn: "\"Half is not enough,\" said the depot manager. \"Half is not nothing,\" said Bu Tari, and went back out. She was home at nine that night instead of four in the afternoon.",
        textId: "\"Separuh itu tidak cukup,\" kata manajer depo. \"Separuh itu bukan tidak ada,\" jawab Bu Tari, lalu kembali berangkat. Malam itu ia pulang pukul sembilan malam, bukan pukul empat sore."
      },
      {
        illustrationSeed: "watertruck-9",
        textEn: "Most people in those eleven villages have never spoken to her. They only know the sound of the engine on the ridge road at ten past six, which means the tank is going to be full, which means the day can start.",
        textId: "Kebanyakan orang di sebelas desa itu belum pernah bicara dengannya. Mereka hanya mengenali bunyi mesin di jalan punggung bukit pukul enam lewat sepuluh — yang berarti tangki akan terisi, yang berarti hari boleh dimulai."
      }
    ],
    quiz: [
      {
        questionEn: "How does Bu Tari decide the order of villages?",
        questionId: "Bagaimana Bu Tari menentukan urutan desa?",
        optionsEn: ["By distance", "By need, and by which is highest", "Alphabetically", "By how much they pay"],
        optionsId: ["Berdasarkan jarak", "Berdasarkan kebutuhan, dan mana yang paling tinggi", "Berdasarkan abjad", "Berdasarkan bayaran"],
        correctIndex: 1
      },
      {
        questionEn: "Why does the smallest village come first?",
        questionId: "Mengapa desa terkecil dapat giliran pertama?",
        optionsEn: ["It is nearest", "It is highest, and pressure may run out later", "It has the most people", "It asked first"],
        optionsId: ["Paling dekat", "Paling tinggi, dan tekanan bisa habis nanti", "Penduduknya paling banyak", "Meminta lebih dulu"],
        correctIndex: 1
      },
      {
        questionEn: "What did she do when there was only enough for nine villages?",
        questionId: "Apa yang ia lakukan saat air hanya cukup untuk sembilan desa?",
        optionsEn: ["Skipped two villages", "Split the last two loads in half and served all eleven", "Went home early", "Waited for more water"],
        optionsId: ["Melewati dua desa", "Membagi dua muatan terakhir dan melayani kesebelasnya", "Pulang lebih awal", "Menunggu air tambahan"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-goalkeeper-who-hated-goals",
    titleEn: "The Goalkeeper Who Hated Goals",
    titleId: "Kiper yang Membenci Gol",
    descriptionEn: "Rio let in one goal in the final and could not forgive himself. It took his coach, a video and a very boring afternoon to change his mind.",
    descriptionId: "Rio kebobolan satu gol di final dan tak bisa memaafkan dirinya. Butuh pelatihnya, sebuah video, dan satu sore yang sangat membosankan untuk mengubah pikirannya.",
    categorySlug: "sports",
    authorSlug: "david-lee",
    coverEmoji: "🥅",
    coverPalette: "meadow",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "goalkeeperio-1",
        textEn: "Rio had kept a clean sheet for six matches in a row. Then in the final, in the eighty-first minute, a shot went in off the underside of the bar, and his team lost one to nil.",
        textId: "Rio menjaga gawangnya tanpa kebobolan enam pertandingan berturut-turut. Lalu di final, pada menit kedelapan puluh satu, sebuah tembakan masuk setelah membentur mistar bagian bawah, dan timnya kalah satu kosong."
      },
      {
        illustrationSeed: "goalkeeperio-2",
        textEn: "He did not cry on the pitch. He cried in the changing room with his shirt over his head, and he said the same sentence eleven times: \"I should have got that.\"",
        textId: "Ia tidak menangis di lapangan. Ia menangis di ruang ganti dengan kaus menutupi kepalanya, dan mengucapkan kalimat yang sama sebelas kali: \"Harusnya bola itu bisa kutangkap.\""
      },
      {
        illustrationSeed: "goalkeeperio-3",
        textEn: "For two weeks he did not go to training. He said his shoulder hurt. His shoulder did not hurt.",
        textId: "Selama dua pekan ia tidak berlatih. Ia bilang bahunya sakit. Bahunya tidak sakit."
      },
      {
        illustrationSeed: "goalkeeperio-4",
        textEn: "Coach Rahmat came to the house with a laptop. He did not talk about the goal. He said, \"Come and watch something boring with me,\" which was such a strange offer that Rio came.",
        textId: "Pelatih Rahmat datang ke rumah membawa laptop. Ia tidak membicarakan gol itu. Ia berkata, \"Ayo tonton sesuatu yang membosankan bersamaku,\" — tawaran yang begitu aneh sampai Rio mau ikut."
      },
      {
        illustrationSeed: "goalkeeperio-5",
        textEn: "It was the whole match, all ninety minutes, including the parts where nothing happened. Coach Rahmat made him watch every second. Rio was bored out of his mind by the fortieth minute.",
        textId: "Isinya pertandingan penuh, sembilan puluh menit, termasuk bagian-bagian saat tak terjadi apa-apa. Pelatih Rahmat memaksanya menonton setiap detik. Menjelang menit keempat puluh Rio sudah bosan setengah mati."
      },
      {
        illustrationSeed: "goalkeeperio-6",
        textEn: "And that was the point. \"Count them,\" said the coach. Rio counted. Fourteen saves. Two of them were saves that no other keeper in the league would have reached, and Rio had entirely forgotten both.",
        textId: "Dan justru itulah intinya. \"Hitung,\" kata sang pelatih. Rio menghitung. Empat belas penyelamatan. Dua di antaranya penyelamatan yang tak akan bisa dijangkau kiper mana pun di liga itu, dan Rio sudah sepenuhnya melupakan keduanya."
      },
      {
        illustrationSeed: "goalkeeperio-7",
        textEn: "\"You have watched the eighty-first minute about four hundred times,\" said Coach Rahmat. \"You have watched the other eighty-nine minutes once. That is not remembering. That is picking.\"",
        textId: "\"Kamu sudah menonton menit kedelapan puluh satu sekitar empat ratus kali,\" kata Pelatih Rahmat. \"Kamu menonton delapan puluh sembilan menit lainnya cuma sekali. Itu bukan mengingat. Itu memilih-milih.\""
      },
      {
        illustrationSeed: "goalkeeperio-8",
        textEn: "Then he showed him the goal again, slowly, four times, and made him say out loud what he could have done differently. The honest answer, after four viewings, was: very little, and possibly nothing.",
        textId: "Lalu ia memutar ulang gol itu, pelan-pelan, empat kali, dan menyuruhnya mengucapkan keras-keras apa yang bisa ia lakukan secara berbeda. Jawaban jujurnya, setelah empat kali menonton: sangat sedikit, dan mungkin tidak ada."
      },
      {
        illustrationSeed: "goalkeeperio-9",
        textEn: "Rio went back to training that Thursday. He still hates letting in goals, which is exactly what you want in a goalkeeper. He just stopped pretending fourteen saves had not happened.",
        textId: "Rio kembali berlatih pada Kamis itu. Ia masih benci kebobolan — dan justru itulah yang kau inginkan dari seorang kiper. Ia hanya berhenti berpura-pura bahwa empat belas penyelamatan itu tidak pernah terjadi."
      }
    ],
    quiz: [
      {
        questionEn: "What did Coach Rahmat bring to the house?",
        questionId: "Apa yang Pelatih Rahmat bawa ke rumah?",
        optionsEn: ["A new pair of gloves", "A laptop with the whole match on it", "A trophy", "A doctor"],
        optionsId: ["Sepasang sarung tangan baru", "Laptop berisi rekaman pertandingan penuh", "Piala", "Dokter"],
        correctIndex: 1
      },
      {
        questionEn: "How many saves had Rio made?",
        questionId: "Berapa penyelamatan yang Rio lakukan?",
        optionsEn: ["Four", "Fourteen", "Twenty", "None"],
        optionsId: ["Empat", "Empat belas", "Dua puluh", "Tidak ada"],
        correctIndex: 1
      },
      {
        questionEn: "What did the coach say Rio was doing?",
        questionId: "Menurut pelatih, apa yang sebenarnya Rio lakukan?",
        optionsEn: ["Remembering fairly", "Picking which minute to remember", "Training too hard", "Blaming the team"],
        optionsId: ["Mengingat dengan adil", "Memilih-milih menit mana yang diingat", "Berlatih terlalu keras", "Menyalahkan tim"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-song-my-grandfather-hummed",
    titleEn: "The Song My Grandfather Hummed",
    titleId: "Lagu yang Didendangkan Kakekku",
    descriptionEn: "Kakek hummed the same eight notes for sixty years and never knew where they came from. Amel spent a summer finding out.",
    descriptionId: "Kakek mendendangkan delapan nada yang sama selama enam puluh tahun dan tak pernah tahu dari mana asalnya. Amel menghabiskan satu musim liburan untuk mencari tahu.",
    categorySlug: "music-rhymes",
    authorSlug: "siti-aminah",
    coverEmoji: "🎵",
    coverPalette: "sunset",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "kakeksong-1",
        textEn: "Kakek hummed while he did anything with his hands. Fixing the fan. Peeling mangoes. Sorting nails into jars. Always the same eight notes, over and over, going nowhere and coming back.",
        textId: "Kakek mendendangkan lagu setiap kali tangannya sibuk. Memperbaiki kipas. Mengupas mangga. Memilah paku ke dalam toples. Selalu delapan nada yang sama, berulang-ulang, tak ke mana-mana lalu kembali."
      },
      {
        illustrationSeed: "kakeksong-2",
        textEn: "\"What is that song?\" Amel asked, when she was nine. Kakek stopped, surprised, as if he had not noticed he was doing it. \"I do not know,\" he said. \"I have always hummed it.\"",
        textId: "\"Lagu apa itu?\" tanya Amel saat berumur sembilan tahun. Kakek berhenti, terkejut, seolah tak sadar sedang mendendangkannya. \"Tidak tahu,\" jawabnya. \"Sejak dulu aku memang mendendangkannya.\""
      },
      {
        illustrationSeed: "kakeksong-3",
        textEn: "That was a very unsatisfying answer, so Amel started work. First she recorded him on her mother's phone, secretly, while he mended a chair. Eight notes. Nine seconds.",
        textId: "Itu jawaban yang sangat tidak memuaskan, jadi Amel mulai bekerja. Pertama ia merekam Kakek diam-diam dengan ponsel ibunya, saat Kakek memperbaiki kursi. Delapan nada. Sembilan detik."
      },
      {
        illustrationSeed: "kakeksong-4",
        textEn: "She played it to the music teacher, who did not know it. To the man at the cassette stall, who did not know it. To eleven relatives at Idul Fitri, of whom nine said \"that is nice\" and two said \"I have heard that\".",
        textId: "Ia memperdengarkannya pada guru musik, yang tak mengenalnya. Pada penjual kaset, yang juga tak tahu. Pada sebelas kerabat saat Idulfitri — sembilan bilang \"bagus ya\" dan dua bilang \"aku pernah dengar itu\"."
      },
      {
        illustrationSeed: "kakeksong-5",
        textEn: "The two who had heard it were both from the same village, three hours away, where Kakek had lived until he was seven and where nobody in the family had been for forty years.",
        textId: "Dua orang yang pernah mendengarnya sama-sama berasal dari desa yang sama, tiga jam perjalanan, tempat Kakek tinggal sampai umur tujuh tahun dan tak ada satu pun keluarga yang ke sana selama empat puluh tahun."
      },
      {
        illustrationSeed: "kakeksong-6",
        textEn: "Amel and her mother went. They played the recording in the coffee stall by the crossroads. An old woman selling fried banana listened to it twice, and then finished it — the next eight notes, and the eight after that.",
        textId: "Amel dan ibunya pergi ke sana. Mereka memutar rekaman itu di warung kopi dekat perempatan. Seorang perempuan tua penjual pisang goreng mendengarkannya dua kali, lalu melanjutkannya — delapan nada berikutnya, dan delapan nada setelahnya."
      },
      {
        illustrationSeed: "kakeksong-7",
        textEn: "It was a rice-planting song. Women had sung it in the wet fields in rows, one line each, passing the tune along the row like a bucket. The eight notes Kakek hummed were one line. One woman's line.",
        textId: "Itu lagu tanam padi. Para perempuan menyanyikannya di sawah basah dalam barisan, satu baris untuk satu orang, mengoper nada di sepanjang barisan seperti mengoper ember. Delapan nada yang Kakek dendangkan adalah satu baris. Baris milik satu perempuan."
      },
      {
        illustrationSeed: "kakeksong-8",
        textEn: "Amel recorded the whole thing, all four minutes of it, and played it to Kakek in his chair by the window. He listened with his eyes shut. At the third line he said, quietly, \"That is my mother's part.\"",
        textId: "Amel merekam seluruhnya, empat menit penuh, lalu memutarnya untuk Kakek di kursinya dekat jendela. Kakek mendengarkan dengan mata terpejam. Pada baris ketiga ia berkata pelan, \"Itu bagian ibuku.\""
      },
      {
        illustrationSeed: "kakeksong-9",
        textEn: "He was seventy-one and he had been carrying eight notes of his mother's voice around in his throat since before he could read, without knowing whose they were. Amel keeps the recording. She hums it too now, when her hands are busy.",
        textId: "Umurnya tujuh puluh satu, dan ia telah membawa delapan nada suara ibunya di tenggorokannya sejak sebelum ia bisa membaca, tanpa tahu itu milik siapa. Amel menyimpan rekaman itu. Kini ia pun mendendangkannya, saat tangannya sibuk."
      }
    ],
    quiz: [
      {
        questionEn: "How long was the tune Kakek hummed?",
        questionId: "Berapa panjang lagu yang Kakek dendangkan?",
        optionsEn: ["A whole song", "Eight notes, about nine seconds", "Two minutes", "One note"],
        optionsId: ["Satu lagu penuh", "Delapan nada, sekitar sembilan detik", "Dua menit", "Satu nada"],
        correctIndex: 1
      },
      {
        questionEn: "What kind of song was it?",
        questionId: "Lagu jenis apa itu?",
        optionsEn: ["A lullaby", "A rice-planting song sung in rows", "A wedding song", "A school song"],
        optionsId: ["Lagu pengantar tidur", "Lagu tanam padi yang dinyanyikan berbaris", "Lagu pernikahan", "Lagu sekolah"],
        correctIndex: 1
      },
      {
        questionEn: "Whose part were the eight notes?",
        questionId: "Bagian siapa delapan nada itu?",
        optionsEn: ["Kakek's own", "His mother's line in the row", "The village head's", "Nobody's"],
        optionsId: ["Milik Kakek sendiri", "Baris ibunya dalam barisan itu", "Milik kepala desa", "Bukan milik siapa-siapa"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-year-we-shared-the-holiday",
    titleEn: "The Year We Shared the Holiday",
    titleId: "Tahun Ketika Kami Berbagi Hari Raya",
    descriptionEn: "Two families on the same street celebrated two different festivals eleven days apart. One year the dates collided, and the whole street had to work something out.",
    descriptionId: "Dua keluarga di jalan yang sama merayakan dua hari raya berbeda berjarak sebelas hari. Suatu tahun tanggalnya berbenturan, dan seluruh jalan harus mencari jalan keluar.",
    categorySlug: "holidays-culture",
    authorSlug: "siti-aminah",
    coverEmoji: "🎊",
    coverPalette: "candy",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "sharedholiday-1",
        textEn: "On Jalan Kenanga, the Hartonos celebrated one festival and the Wijayas celebrated another, and for as long as anybody could remember the two had fallen about eleven days apart.",
        textId: "Di Jalan Kenanga, keluarga Hartono merayakan satu hari raya dan keluarga Wijaya merayakan yang lain, dan selama yang bisa diingat siapa pun, keduanya berjarak sekitar sebelas hari."
      },
      {
        illustrationSeed: "sharedholiday-2",
        textEn: "This suited everybody enormously. It meant two rounds of special food, two rounds of visiting, and two separate weeks in which the children of Jalan Kenanga were given money by adults for no reason.",
        textId: "Itu sangat menyenangkan semua orang. Artinya ada dua kali makanan istimewa, dua kali kunjungan, dan dua pekan terpisah ketika anak-anak Jalan Kenanga diberi uang oleh orang dewasa tanpa alasan."
      },
      {
        illustrationSeed: "sharedholiday-3",
        textEn: "Then came the year the calendars slid, as calendars do, and the two festivals landed on the same Saturday. Both families had already booked the same hall, which nobody discovered until Wednesday.",
        textId: "Lalu datang tahun ketika kalender bergeser, seperti biasa terjadi, dan dua hari raya itu jatuh pada Sabtu yang sama. Kedua keluarga sudah memesan aula yang sama — dan tak ada yang tahu sampai hari Rabu."
      },
      {
        illustrationSeed: "sharedholiday-4",
        textEn: "There was a difficult meeting on Wednesday evening at which nobody was rude and nobody solved anything, and everyone went home slightly stiffly, and it looked as if one family would have to move.",
        textId: "Pada Rabu malam ada pertemuan yang canggung, di mana tak ada yang kasar dan tak ada yang terpecahkan, lalu semua pulang dengan sikap agak kaku, dan tampaknya salah satu keluarga harus mengalah."
      },
      {
        illustrationSeed: "sharedholiday-5",
        textEn: "It was Dinda Hartono, aged ten, who asked the question that unlocked it. She said: \"Why is it a problem that both parties are in the same room? Is it because of the food?\"",
        textId: "Dinda Hartono, umur sepuluh tahun, yang mengajukan pertanyaan pembuka jalan. Ia bertanya: \"Kenapa jadi masalah kalau dua acara ada di ruangan yang sama? Apa karena makanannya?\""
      },
      {
        illustrationSeed: "sharedholiday-6",
        textEn: "It was, mostly, because of the food. So the two mothers spent Thursday on the phone doing the least glamorous and most important work of the whole story: working out exactly what each family could and could not eat, in writing, item by item.",
        textId: "Memang, sebagian besar, karena makanannya. Maka kedua ibu menghabiskan hari Kamis di telepon, mengerjakan bagian paling tak glamor dan paling penting dari seluruh kisah ini: menyusun secara tertulis, satu per satu, apa yang boleh dan tak boleh dimakan tiap keluarga."
      },
      {
        illustrationSeed: "sharedholiday-7",
        textEn: "Two tables. Clearly labelled, in big letters, no guessing. Separate serving spoons. A short, plain announcement at the start so that nobody had to ask an awkward question in front of anyone.",
        textId: "Dua meja. Diberi label jelas dengan huruf besar, tanpa perlu menebak. Sendok saji terpisah. Satu pengumuman singkat dan lugas di awal, supaya tak ada yang perlu bertanya canggung di depan orang lain."
      },
      {
        illustrationSeed: "sharedholiday-8",
        textEn: "The hall was fuller than either party had ever been. The Hartono grandmother taught eleven Wijaya children a clapping game. Two uncles who had lived four doors apart for nine years met properly for the first time.",
        textId: "Aula itu lebih penuh daripada acara mana pun sebelumnya. Nenek Hartono mengajari sebelas anak Wijaya permainan tepuk tangan. Dua paman yang sudah sembilan tahun tinggal berjarak empat rumah baru benar-benar berkenalan."
      },
      {
        illustrationSeed: "sharedholiday-9",
        textEn: "The calendars slid apart again the following year and the two festivals went back to being eleven days apart. Both families were quietly disappointed. They now do one shared evening every year on purpose, in between.",
        textId: "Tahun berikutnya kalender bergeser lagi dan kedua hari raya kembali berjarak sebelas hari. Kedua keluarga diam-diam kecewa. Kini setiap tahun mereka sengaja mengadakan satu malam bersama, di antara keduanya."
      }
    ],
    quiz: [
      {
        questionEn: "What was the problem that year?",
        questionId: "Apa masalah pada tahun itu?",
        optionsEn: ["Nobody could come", "Both festivals fell on the same day and both had booked the same hall", "The hall closed", "There was no food"],
        optionsId: ["Tak ada yang bisa datang", "Kedua hari raya jatuh di hari yang sama dan keduanya memesan aula yang sama", "Aulanya tutup", "Tidak ada makanan"],
        correctIndex: 1
      },
      {
        questionEn: "What question did Dinda ask?",
        questionId: "Pertanyaan apa yang Dinda ajukan?",
        optionsEn: ["Who booked first?", "Why is it a problem to share the room — is it the food?", "Can we cancel?", "Where else can we go?"],
        optionsId: ["Siapa yang memesan lebih dulu?", "Kenapa berbagi ruangan jadi masalah — apa karena makanannya?", "Bisakah dibatalkan?", "Ke mana lagi kita bisa pergi?"],
        correctIndex: 1
      },
      {
        questionEn: "How did they solve it?",
        questionId: "Bagaimana mereka menyelesaikannya?",
        optionsEn: ["One family moved", "Two clearly labelled tables with separate serving spoons", "They cancelled both", "They ate outside"],
        optionsId: ["Satu keluarga pindah", "Dua meja berlabel jelas dengan sendok saji terpisah", "Keduanya dibatalkan", "Mereka makan di luar"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-boy-who-collected-hellos",
    titleEn: "The Boy Who Collected Hellos",
    titleId: "Anak yang Mengoleksi Ucapan Halo",
    descriptionEn: "Faiz's family moved countries three times before he was eleven. He kept one thing from every place: the word for hello, and who taught it to him.",
    descriptionId: "Keluarga Faiz pindah negara tiga kali sebelum ia berumur sebelas tahun. Ia menyimpan satu hal dari setiap tempat: kata untuk halo, dan siapa yang mengajarkannya.",
    categorySlug: "world-cultures",
    authorSlug: "emily-clark",
    coverEmoji: "🌍",
    coverPalette: "sky",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "hellofaiz-1",
        textEn: "Faiz's father worked on bridges, which meant the family lived wherever the bridge was. By the time Faiz was eleven he had lived in four countries and started at five schools.",
        textId: "Ayah Faiz bekerja membangun jembatan, yang artinya keluarga mereka tinggal di mana pun jembatan itu berada. Saat Faiz berumur sebelas tahun, ia sudah tinggal di empat negara dan masuk ke lima sekolah."
      },
      {
        illustrationSeed: "hellofaiz-2",
        textEn: "The hardest ten minutes of his life happened over and over: standing at the front of a new class, being introduced in a language he did not have yet.",
        textId: "Sepuluh menit tersulit dalam hidupnya terjadi berulang-ulang: berdiri di depan kelas baru, diperkenalkan dalam bahasa yang belum ia kuasai."
      },
      {
        illustrationSeed: "hellofaiz-3",
        textEn: "So he made a rule for himself. In every new place, before anything else, learn how to say hello — and learn it from a person, not from a book, and write down that person's name.",
        textId: "Maka ia membuat aturan untuk dirinya sendiri. Di setiap tempat baru, sebelum apa pun, pelajari cara mengucapkan halo — dan pelajari dari seorang manusia, bukan dari buku, lalu tuliskan nama orang itu."
      },
      {
        illustrationSeed: "hellofaiz-4",
        textEn: "The notebook had one line per place. SELAMAT PAGI — taught by Bu Ratih, who ran the warung and repeated it nine times without once looking tired of him.",
        textId: "Buku catatannya berisi satu baris per tempat. SELAMAT PAGI — diajarkan Bu Ratih, pemilik warung, yang mengulanginya sembilan kali tanpa sekali pun tampak bosan padanya."
      },
      {
        illustrationSeed: "hellofaiz-5",
        textEn: "SAWASDEE — taught by a boy called Nat on the second day, who also taught him where the good football goal was, which was arguably more important.",
        textId: "SAWASDEE — diajarkan oleh anak bernama Nat pada hari kedua, yang juga menunjukkan di mana gawang sepak bola yang bagus — hal yang boleh dibilang lebih penting."
      },
      {
        illustrationSeed: "hellofaiz-6",
        textEn: "GÜNAYDIN — taught by a security guard at the site gate, very slowly, over four mornings, until Faiz got the vowel right and the guard clapped once, loudly, and went back to his post.",
        textId: "GÜNAYDIN — diajarkan oleh satpam di gerbang proyek, sangat pelan, selama empat pagi, sampai Faiz mengucapkan vokalnya dengan tepat, lalu satpam itu bertepuk sekali dengan keras dan kembali ke posnya."
      },
      {
        illustrationSeed: "hellofaiz-7",
        textEn: "He noticed something after the third country. The hello is never the point. The point is that you tried in front of somebody, badly, and they did not laugh — and after that you are not strangers any more.",
        textId: "Ia menyadari sesuatu setelah negara ketiga. Ucapan halo tak pernah jadi intinya. Intinya adalah kau mencoba di depan seseorang, dengan buruk, dan mereka tidak menertawakanmu — dan setelah itu kalian bukan lagi orang asing."
      },
      {
        illustrationSeed: "hellofaiz-8",
        textEn: "When the family came back to Indonesia for good, Faiz was the one at the front of the class again, except this time he was the one who knew the language, and there was a new girl by the door.",
        textId: "Ketika keluarganya kembali ke Indonesia untuk seterusnya, Faiz kembali berdiri di depan kelas — kecuali kali ini dialah yang menguasai bahasanya, dan ada anak perempuan baru di dekat pintu."
      },
      {
        illustrationSeed: "hellofaiz-9",
        textEn: "He did not wait to be told. He went over at break and said, slowly and clearly, \"Selamat pagi,\" and then said it again, and then a third time, until she said it back. Then he wrote her name in the notebook.",
        textId: "Ia tak menunggu disuruh. Saat istirahat ia menghampiri dan berkata, pelan dan jelas, \"Selamat pagi,\" lalu mengulanginya, lalu untuk ketiga kalinya, sampai anak itu membalasnya. Lalu ia menuliskan nama anak itu di buku catatannya."
      }
    ],
    quiz: [
      {
        questionEn: "What was Faiz's rule in every new place?",
        questionId: "Apa aturan Faiz di setiap tempat baru?",
        optionsEn: ["Find the football pitch", "Learn hello from a person and write down their name", "Stay quiet for a week", "Learn to count"],
        optionsId: ["Cari lapangan bola", "Pelajari kata halo dari seseorang dan catat namanya", "Diam selama sepekan", "Belajar berhitung"],
        correctIndex: 1
      },
      {
        questionEn: "What did he notice after the third country?",
        questionId: "Apa yang ia sadari setelah negara ketiga?",
        optionsEn: ["Languages are all the same", "The point is trying in front of somebody who does not laugh", "Hello is the hardest word", "Notebooks get lost"],
        optionsId: ["Semua bahasa sama saja", "Intinya adalah mencoba di depan orang yang tidak menertawakanmu", "Halo adalah kata tersulit", "Buku catatan mudah hilang"],
        correctIndex: 1
      },
      {
        questionEn: "What did he do for the new girl?",
        questionId: "Apa yang ia lakukan untuk anak perempuan baru itu?",
        optionsEn: ["Ignored her", "Said 'Selamat pagi' until she said it back, then wrote her name down", "Told the teacher", "Gave her the notebook"],
        optionsId: ["Mengabaikannya", "Mengucapkan 'Selamat pagi' sampai anak itu membalas, lalu mencatat namanya", "Melapor pada guru", "Memberikan buku catatannya"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-eyes-that-needed-help",
    titleEn: "The Eyes That Needed Help",
    titleId: "Mata yang Butuh Bantuan",
    descriptionEn: "For two years Wulan thought the board was supposed to be blurry and that everybody was just guessing. One eye test changed her whole school life.",
    descriptionId: "Selama dua tahun Wulan mengira papan tulis memang seharusnya buram dan semua orang cuma menebak-nebak. Satu pemeriksaan mata mengubah seluruh hidup sekolahnya.",
    categorySlug: "health-body",
    authorSlug: "sarah-johnson",
    coverEmoji: "👓",
    coverPalette: "citrus",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "wulaneyes-1",
        textEn: "Wulan was not a bad student. She was a student who could not read the board, which looks exactly like a bad student from the back of the room.",
        textId: "Wulan bukan murid yang buruk. Ia murid yang tak bisa membaca papan tulis — yang dari bangku belakang kelihatannya persis seperti murid yang buruk."
      },
      {
        illustrationSeed: "wulaneyes-2",
        textEn: "She did not tell anybody, because she did not know there was anything to tell. She assumed the board was blurry for everyone, and that the other children were simply better at guessing.",
        textId: "Ia tidak memberi tahu siapa pun, karena ia tidak tahu ada yang perlu diberitahukan. Ia mengira papan tulis memang buram bagi semua orang, dan anak-anak lain hanya lebih pandai menebak."
      },
      {
        illustrationSeed: "wulaneyes-3",
        textEn: "She had developed a whole system. Copy from the girl next to her. Listen extremely hard. Volunteer to hand out books so she could walk past the board and read it up close on the way.",
        textId: "Ia sudah punya satu sistem lengkap. Menyalin dari anak di sebelahnya. Mendengarkan mati-matian. Menawarkan diri membagikan buku supaya bisa lewat depan papan dan membacanya dari dekat sambil jalan."
      },
      {
        illustrationSeed: "wulaneyes-4",
        textEn: "The system took enormous effort and it worked well enough that nobody noticed for two years. She was tired all the time and she thought that was just what school was.",
        textId: "Sistem itu butuh tenaga luar biasa dan cukup berhasil sampai tak ada yang menyadarinya selama dua tahun. Ia lelah sepanjang waktu, dan ia mengira memang begitulah sekolah."
      },
      {
        illustrationSeed: "wulaneyes-5",
        textEn: "Then the health team came to the school with a chart of letters, and Wulan stood on the line and read the top letter, and then said, quite honestly, \"There is nothing under it.\"",
        textId: "Lalu tim kesehatan datang ke sekolah membawa papan huruf, dan Wulan berdiri di garis, membaca huruf paling atas, lalu berkata dengan sangat jujur, \"Di bawahnya tidak ada apa-apa.\""
      },
      {
        illustrationSeed: "wulaneyes-6",
        textEn: "There were six more rows under it. The nurse did not make a face and did not say anything dramatic. She just wrote on the form and said, \"Right. We can fix this one easily.\"",
        textId: "Padahal ada enam baris lagi di bawahnya. Perawat itu tidak berekspresi aneh dan tidak berkata apa pun yang dramatis. Ia hanya menulis di formulir dan berkata, \"Baik. Yang ini mudah kita perbaiki.\""
      },
      {
        illustrationSeed: "wulaneyes-7",
        textEn: "The glasses took three weeks to come. Wulan put them on in the shop and turned round and stopped, because for the first time in her life she could see the individual leaves on a tree across the road.",
        textId: "Kacamatanya butuh tiga pekan sampai jadi. Wulan memakainya di toko, berbalik, lalu terpaku — karena untuk pertama kalinya seumur hidup ia bisa melihat helai-helai daun satu per satu di pohon seberang jalan."
      },
      {
        illustrationSeed: "wulaneyes-8",
        textEn: "She cried a bit, which surprised her. Then she asked her mother a question that made her mother sit down: \"Have you always been able to see faces from the other side of the street?\"",
        textId: "Ia menangis sedikit, yang mengejutkan dirinya sendiri. Lalu ia bertanya pada ibunya, pertanyaan yang membuat ibunya duduk: \"Ibu selama ini bisa melihat wajah orang dari seberang jalan?\""
      },
      {
        illustrationSeed: "wulaneyes-9",
        textEn: "Her marks went up that term, but that is not the part she talks about. The part she talks about is that school stopped being exhausting. She had been doing everything twice as hard for two years, for no reason at all.",
        textId: "Nilainya naik pada semester itu, tapi bukan itu yang ia ceritakan. Yang ia ceritakan adalah bahwa sekolah berhenti terasa melelahkan. Selama dua tahun ia mengerjakan segalanya dua kali lebih berat, tanpa alasan apa pun."
      }
    ],
    quiz: [
      {
        questionEn: "Why did Wulan not tell anyone?",
        questionId: "Mengapa Wulan tidak memberi tahu siapa pun?",
        optionsEn: ["She was shy", "She thought the board was blurry for everybody", "She was told not to", "She forgot"],
        optionsId: ["Ia pemalu", "Ia mengira papan tulis buram bagi semua orang", "Ia dilarang", "Ia lupa"],
        correctIndex: 1
      },
      {
        questionEn: "What did she say at the eye chart?",
        questionId: "Apa yang ia katakan di depan papan huruf?",
        optionsEn: ["I can read all of it", "There is nothing under the top letter", "The light is too bright", "I need to sit down"],
        optionsId: ["Aku bisa baca semuanya", "Di bawah huruf teratas tidak ada apa-apa", "Cahayanya terlalu terang", "Aku perlu duduk"],
        correctIndex: 1
      },
      {
        questionEn: "What changed most, according to Wulan?",
        questionId: "Apa yang paling berubah menurut Wulan?",
        optionsEn: ["Her marks", "School stopped being exhausting", "Her friends", "Her handwriting"],
        optionsId: ["Nilainya", "Sekolah berhenti terasa melelahkan", "Teman-temannya", "Tulisan tangannya"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-lighthouse-keepers-daughter",
    titleEn: "The Lighthouse Keeper's Daughter",
    titleId: "Putri Penjaga Mercusuar",
    descriptionEn: "Based on true events. When her father could not climb the stairs, a fifteen-year-old kept the light burning alone for four nights of storm.",
    descriptionId: "Berdasarkan peristiwa nyata. Ketika ayahnya tak sanggup menaiki tangga, seorang gadis lima belas tahun menjaga lampu tetap menyala sendirian selama empat malam badai.",
    categorySlug: "true-stories",
    authorSlug: "emily-clark",
    coverEmoji: "🗼",
    coverPalette: "night",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "lightkeeper-1",
        textEn: "In the days before electricity, a lighthouse was a fire that a human being had to keep alive. Oil had to be carried up. Wicks had to be trimmed. Glass had to be wiped clear of salt every few hours, all night, every night.",
        textId: "Pada masa sebelum listrik, mercusuar adalah api yang harus dijaga tetap hidup oleh manusia. Minyak harus diangkut naik. Sumbu harus dipangkas. Kaca harus dilap bersih dari garam setiap beberapa jam, sepanjang malam, setiap malam."
      },
      {
        illustrationSeed: "lightkeeper-2",
        textEn: "The keeper of the rock light was a man in his fifties with a bad chest, and his daughter, who was fifteen, and nobody else at all. The mainland was four hours away in good weather.",
        textId: "Penjaga mercusuar karang itu adalah lelaki berusia lima puluhan dengan paru-paru bermasalah, putrinya yang berumur lima belas tahun, dan tak seorang pun lagi. Daratan berjarak empat jam pelayaran dalam cuaca baik."
      },
      {
        illustrationSeed: "lightkeeper-3",
        textEn: "On the first night of the storm her father got halfway up the stairs and could not go further. He sat down on the step and could not get his breath, and the two of them looked at each other and understood the situation completely.",
        textId: "Pada malam pertama badai, ayahnya sampai setengah tangga dan tak sanggup naik lagi. Ia duduk di anak tangga dan tak bisa mengatur napas, dan mereka berdua saling menatap serta memahami sepenuhnya keadaan itu."
      },
      {
        illustrationSeed: "lightkeeper-4",
        textEn: "\"Tell me the order,\" she said. So he told her the order, sitting on the stair, between breaths: oil, wick, glass, and then again, and then again, and never let the interval get longer than two hours.",
        textId: "\"Sebutkan urutannya,\" katanya. Maka ayahnya menyebutkan urutan itu, sambil duduk di tangga, di sela-sela napasnya: minyak, sumbu, kaca, lalu ulangi, lalu ulangi lagi, dan jangan pernah biarkan jedanya lebih dari dua jam."
      },
      {
        illustrationSeed: "lightkeeper-5",
        textEn: "She carried oil up ninety-seven steps. She did it again two hours later. She did it again two hours after that. The storm went on for four nights, and there is no version of this in which she got proper sleep.",
        textId: "Ia mengangkut minyak menaiki sembilan puluh tujuh anak tangga. Ia melakukannya lagi dua jam kemudian. Lalu dua jam setelah itu lagi. Badai berlangsung empat malam, dan tak ada versi kisah ini di mana ia sempat tidur nyenyak."
      },
      {
        illustrationSeed: "lightkeeper-6",
        textEn: "The hardest part was not the stairs and not the cold. It was that she could not know whether it was working. There is no way to see, from inside a lighthouse, whether a ship out there has turned in time.",
        textId: "Bagian tersulit bukanlah tangganya, bukan pula dinginnya. Yang tersulit adalah ia tak bisa tahu apakah usahanya berhasil. Dari dalam mercusuar, mustahil melihat apakah sebuah kapal di luar sana sempat berbelok tepat waktu."
      },
      {
        illustrationSeed: "lightkeeper-7",
        textEn: "On the fifth morning the wind dropped. A fishing boat came out from the mainland and the skipper said, in an ordinary voice, that they had seen the light every night and had known exactly where the rock was.",
        textId: "Pada pagi kelima angin mereda. Sebuah perahu nelayan datang dari daratan, dan nakhodanya berkata dengan nada biasa saja bahwa mereka melihat lampu itu setiap malam dan tahu persis di mana letak karang itu."
      },
      {
        illustrationSeed: "lightkeeper-8",
        textEn: "That is the whole reward. Nobody sank. There is no list of the ships that did not hit the rock, because ships that do not hit rocks simply carry on and arrive somewhere and nobody writes it down.",
        textId: "Itulah seluruh imbalannya. Tak ada yang karam. Tak ada daftar kapal yang tidak menabrak karang, karena kapal yang tidak menabrak karang begitu saja melanjutkan pelayaran, tiba di suatu tempat, dan tak ada yang mencatatnya."
      },
      {
        illustrationSeed: "lightkeeper-9",
        textEn: "Her father recovered, slowly, and kept the light for another eleven years. She kept it with him. Neither of them ever described those four nights as brave. They described them as their turn.",
        textId: "Ayahnya pulih, perlahan, dan menjaga lampu itu sebelas tahun lagi. Ia menjaganya bersama ayahnya. Tak satu pun dari mereka pernah menyebut empat malam itu sebagai keberanian. Mereka menyebutnya giliran mereka."
      }
    ],
    quiz: [
      {
        questionEn: "What three things had to be done every two hours?",
        questionId: "Tiga hal apa yang harus dikerjakan setiap dua jam?",
        optionsEn: ["Sleep, eat, rest", "Oil, wick, glass", "Ring, shout, wave", "Count, write, wait"],
        optionsId: ["Tidur, makan, istirahat", "Minyak, sumbu, kaca", "Bunyikan, teriak, lambaikan", "Hitung, tulis, tunggu"],
        correctIndex: 1
      },
      {
        questionEn: "What was the hardest part for her?",
        questionId: "Apa bagian tersulit baginya?",
        optionsEn: ["The cold", "Not being able to know whether it was working", "The stairs", "The noise"],
        optionsId: ["Dinginnya", "Tak bisa tahu apakah usahanya berhasil", "Tangganya", "Kebisingannya"],
        correctIndex: 1
      },
      {
        questionEn: "How did they describe those four nights afterwards?",
        questionId: "Bagaimana mereka menyebut empat malam itu setelahnya?",
        optionsEn: ["As brave", "As their turn", "As terrible", "As a mistake"],
        optionsId: ["Sebagai keberanian", "Sebagai giliran mereka", "Sebagai hal mengerikan", "Sebagai kesalahan"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-chair-with-four-names",
    titleEn: "The Chair With Four Names",
    titleId: "Kursi dengan Empat Nama",
    descriptionEn: "The wooden chair in the corner had belonged to four people in one family. When it finally broke, nobody could agree what to do with the pieces.",
    descriptionId: "Kursi kayu di sudut ruangan itu pernah dimiliki empat orang dalam satu keluarga. Ketika akhirnya patah, tak ada yang sepakat harus diapakan potongan-potongannya.",
    categorySlug: "family",
    authorSlug: "siti-aminah",
    coverEmoji: "🪑",
    coverPalette: "sunset",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "fournameschair-1",
        textEn: "The chair had been made by Rendi's great-grandfather out of teak from a tree that fell on his own land, and it had four names cut into the underside of the seat, one under the other.",
        textId: "Kursi itu dibuat oleh kakek buyut Rendi dari kayu jati pohon yang tumbang di tanahnya sendiri, dan ada empat nama terukir di bawah dudukannya, satu di bawah yang lain."
      },
      {
        illustrationSeed: "fournameschair-2",
        textEn: "The rule was that whoever the chair belonged to carved their name underneath when they got it. Four names meant four owners. It was on its fourth: Rendi's grandmother, who was eighty-one.",
        textId: "Aturannya, siapa pun pemilik kursi itu mengukir namanya di bawah saat menerimanya. Empat nama berarti empat pemilik. Kini pemiliknya yang keempat: nenek Rendi, yang berumur delapan puluh satu tahun."
      },
      {
        illustrationSeed: "fournameschair-3",
        textEn: "In September the back-left leg gave way with a noise like a door slamming, and the chair went over sideways with Rendi's grandmother in it. She was not hurt. The chair was in five pieces.",
        textId: "Pada bulan September kaki belakang kirinya patah dengan bunyi seperti pintu dibanting, dan kursi itu terguling ke samping bersama nenek Rendi di atasnya. Nenek tidak terluka. Kursinya jadi lima potong."
      },
      {
        illustrationSeed: "fournameschair-4",
        textEn: "Rendi's father said throw it out; it was a hazard now. Rendi's aunt said keep it in the store room. Rendi's uncle said sell it, because old teak is worth something and nobody was sitting on it anyway.",
        textId: "Ayah Rendi bilang buang saja; sekarang benda itu berbahaya. Bibi Rendi bilang simpan di gudang. Paman Rendi bilang jual saja, karena jati tua ada harganya dan lagi pula tak ada yang duduk di situ."
      },
      {
        illustrationSeed: "fournameschair-5",
        textEn: "They argued about it for three weeks with the pieces stacked against the wall in the hallway, which everybody had to step round eleven times a day, which did not help.",
        textId: "Mereka memperdebatkannya selama tiga pekan dengan potongan-potongan kursi bertumpuk di dinding lorong — yang harus dilangkahi semua orang sebelas kali sehari, dan itu tidak membantu."
      },
      {
        illustrationSeed: "fournameschair-6",
        textEn: "Rendi's grandmother did not join the argument at all. On the twenty-second day she asked Rendi to carry the pieces down to Pak Hasan's workshop, and to bring a saw home with him.",
        textId: "Nenek Rendi sama sekali tidak ikut berdebat. Pada hari kedua puluh dua ia meminta Rendi mengangkut potongan-potongan itu ke bengkel Pak Hasan, dan membawa pulang sebuah gergaji."
      },
      {
        illustrationSeed: "fournameschair-7",
        textEn: "What came back was not a chair. It was four small flat pieces of teak, each one cut so that it carried exactly one of the four carved names, sanded smooth and oiled dark.",
        textId: "Yang kembali bukanlah kursi. Yang kembali adalah empat kepingan jati pipih kecil, masing-masing dipotong sedemikian rupa sehingga membawa tepat satu dari empat nama terukir itu, diamplas halus dan diminyaki gelap."
      },
      {
        illustrationSeed: "fournameschair-8",
        textEn: "\"Now there are four of them,\" said his grandmother, \"and four households, and none of you has to store a broken chair or argue with your brother about teak prices.\"",
        textId: "\"Sekarang ada empat,\" kata neneknya, \"dan ada empat rumah tangga, dan tak seorang pun dari kalian harus menyimpan kursi patah atau berdebat dengan saudaranya soal harga jati.\""
      },
      {
        illustrationSeed: "fournameschair-9",
        textEn: "The seat, which had no name on it, she kept. It sits under the window with a plant on it. And in five years, when Rendi turns eighteen, there is a fifth piece already cut and waiting, blank.",
        textId: "Bagian dudukan, yang tidak bernama, ia simpan sendiri. Kini ia terletak di bawah jendela dengan tanaman di atasnya. Dan lima tahun lagi, saat Rendi berumur delapan belas, sudah ada kepingan kelima yang dipotong dan menunggu — masih kosong."
      }
    ],
    quiz: [
      {
        questionEn: "What was carved under the seat?",
        questionId: "Apa yang terukir di bawah dudukan kursi?",
        optionsEn: ["A date", "Four owners' names", "A pattern", "Nothing"],
        optionsId: ["Sebuah tanggal", "Nama empat pemiliknya", "Sebuah pola", "Tidak ada"],
        correctIndex: 1
      },
      {
        questionEn: "What did the grandmother do with the pieces?",
        questionId: "Apa yang Nenek lakukan dengan potongan-potongan itu?",
        optionsEn: ["Threw them away", "Had them cut into four named pieces, one per household", "Sold them", "Rebuilt the chair"],
        optionsId: ["Membuangnya", "Memotongnya jadi empat keping bernama, satu untuk tiap rumah tangga", "Menjualnya", "Merakit ulang kursinya"],
        correctIndex: 1
      },
      {
        questionEn: "What is waiting for Rendi?",
        questionId: "Apa yang menunggu Rendi?",
        optionsEn: ["The whole chair", "A fifth blank piece, already cut", "The saw", "Nothing"],
        optionsId: ["Kursi utuhnya", "Kepingan kelima yang masih kosong, sudah dipotong", "Gergajinya", "Tidak ada"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-anger-that-had-somewhere-to-go",
    titleEn: "The Anger That Had Somewhere to Go",
    titleId: "Marah yang Punya Tempat Tujuan",
    descriptionEn: "Bima's anger came fast and left wreckage. Then his uncle gave him a job that anger is actually good for.",
    descriptionId: "Marah Bima datang cepat dan meninggalkan puing. Lalu pamannya memberinya pekerjaan yang justru cocok untuk kemarahan.",
    categorySlug: "emotions",
    authorSlug: "david-lee",
    coverEmoji: "🔥",
    coverPalette: "sunset",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "bimaanger-1",
        textEn: "Bima's anger did not build up slowly. It arrived all at once, like a light switching on, and by the time he noticed it he had usually already thrown something.",
        textId: "Marah Bima tidak menumpuk perlahan. Ia datang sekaligus, seperti lampu yang menyala, dan saat Bima menyadarinya ia biasanya sudah melempar sesuatu."
      },
      {
        illustrationSeed: "bimaanger-2",
        textEn: "Everybody told him to calm down, which is the least useful sentence in the language, because if he could have calmed down he would already have done it.",
        textId: "Semua orang menyuruhnya tenang — kalimat paling tidak berguna dalam bahasa apa pun, karena kalau ia bisa tenang, ia pasti sudah melakukannya."
      },
      {
        illustrationSeed: "bimaanger-3",
        textEn: "His uncle Pak Wira did not say calm down. Pak Wira said, \"Come and work with me on Saturday,\" and gave him a sledgehammer and pointed at a wall.",
        textId: "Pamannya, Pak Wira, tidak menyuruhnya tenang. Pak Wira berkata, \"Ikut kerja denganku hari Sabtu,\" lalu memberinya palu godam dan menunjuk sebuah tembok."
      },
      {
        illustrationSeed: "bimaanger-4",
        textEn: "It was a real wall that really needed to come down, in a house that was being rebuilt, and Bima was allowed to hit it as hard as he could for as long as he could, with goggles on.",
        textId: "Itu tembok sungguhan yang memang harus dirobohkan, di rumah yang sedang direnovasi, dan Bima diizinkan memukulnya sekuat tenaga selama yang ia mampu, dengan kacamata pelindung."
      },
      {
        illustrationSeed: "bimaanger-5",
        textEn: "He lasted nine minutes. Then he sat down on a pile of bricks with his arms shaking and discovered that he was not angry any more, and had no idea when that had happened.",
        textId: "Ia bertahan sembilan menit. Lalu ia duduk di tumpukan bata dengan lengan gemetar dan mendapati dirinya sudah tidak marah lagi — tanpa tahu kapan itu terjadi."
      },
      {
        illustrationSeed: "bimaanger-6",
        textEn: "\"Anger is fuel,\" said Pak Wira, handing him water. \"It is very good fuel. The problem is never the fuel. The problem is what you have pointed the engine at.\"",
        textId: "\"Marah itu bahan bakar,\" kata Pak Wira sambil menyodorkan air. \"Bahan bakar yang sangat bagus. Masalahnya tak pernah ada pada bahan bakarnya. Masalahnya ada pada ke mana mesinnya kamu arahkan.\""
      },
      {
        illustrationSeed: "bimaanger-7",
        textEn: "They made a list, over several Saturdays, of things anger is actually good at. Carrying heavy things. Running fast. Saying a hard true sentence to someone who needs to hear it. Not giving up on the eleventh attempt.",
        textId: "Selama beberapa hari Sabtu mereka menyusun daftar hal-hal yang justru cocok dikerjakan dengan marah. Mengangkat barang berat. Berlari cepat. Mengatakan satu kalimat keras yang benar pada orang yang perlu mendengarnya. Tidak menyerah pada percobaan kesebelas."
      },
      {
        illustrationSeed: "bimaanger-8",
        textEn: "And a second list, of things anger is terrible at. Choosing. Explaining. Anything involving a small breakable object. Anything you would have to apologise for within twenty minutes.",
        textId: "Dan daftar kedua, hal-hal yang justru payah dikerjakan dengan marah. Memilih. Menjelaskan. Apa pun yang melibatkan benda kecil yang mudah pecah. Apa pun yang dalam dua puluh menit harus kamu minta maafkan."
      },
      {
        illustrationSeed: "bimaanger-9",
        textEn: "Bima still gets angry as fast as ever. That has not changed and probably will not. What changed is that now, in the first three seconds, some part of him asks one question: what is this fuel for?",
        textId: "Bima masih tetap cepat marah seperti dulu. Itu tidak berubah dan mungkin tak akan berubah. Yang berubah adalah kini, dalam tiga detik pertama, ada bagian dari dirinya yang bertanya satu hal: bahan bakar ini untuk apa?"
      }
    ],
    quiz: [
      {
        questionEn: "Why is 'calm down' unhelpful, according to the story?",
        questionId: "Mengapa 'tenanglah' tidak membantu menurut cerita ini?",
        optionsEn: ["It is rude", "If he could calm down, he would already have done it", "It is too quiet", "Nobody says it"],
        optionsId: ["Karena kasar", "Kalau ia bisa tenang, ia pasti sudah melakukannya", "Terlalu pelan", "Tak ada yang mengatakannya"],
        correctIndex: 1
      },
      {
        questionEn: "What did Pak Wira say anger is?",
        questionId: "Menurut Pak Wira, marah itu apa?",
        optionsEn: ["A sickness", "Fuel — the problem is where you point the engine", "A weakness", "A choice"],
        optionsId: ["Penyakit", "Bahan bakar — masalahnya ke mana mesin diarahkan", "Kelemahan", "Pilihan"],
        correctIndex: 1
      },
      {
        questionEn: "What question does Bima now ask himself?",
        questionId: "Pertanyaan apa yang kini Bima ajukan pada dirinya?",
        optionsEn: ["Who started it?", "What is this fuel for?", "Am I right?", "Should I run?"],
        optionsId: ["Siapa yang memulai?", "Bahan bakar ini untuk apa?", "Apakah aku benar?", "Haruskah aku lari?"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-buffalo-who-would-not-be-hurried",
    titleEn: "The Buffalo Who Would Not Be Hurried",
    titleId: "Kerbau yang Tak Mau Diburu-buru",
    descriptionEn: "Every farmer in the valley used the new machine. Pak Salim still ploughed with a buffalo named Tebal, and one wet season proved him right.",
    descriptionId: "Setiap petani di lembah itu memakai mesin baru. Pak Salim tetap membajak dengan kerbau bernama Tebal, dan satu musim hujan membuktikan ia benar.",
    categorySlug: "farm",
    authorSlug: "siti-aminah",
    coverEmoji: "🐃",
    coverPalette: "meadow",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "tebalbuffalo-1",
        textEn: "When the small tractors came to the valley, every farmer bought one within three years except Pak Salim, who kept ploughing with a water buffalo called Tebal.",
        textId: "Ketika traktor-traktor kecil masuk ke lembah itu, setiap petani membelinya dalam tiga tahun kecuali Pak Salim, yang tetap membajak dengan seekor kerbau bernama Tebal."
      },
      {
        illustrationSeed: "tebalbuffalo-2",
        textEn: "People were kind about it, in the way people are kind about something they think is old-fashioned. \"Still with the buffalo, Pak?\" they said, every single planting season, for eleven years.",
        textId: "Orang-orang bersikap baik soal itu, dengan cara orang bersikap baik pada sesuatu yang mereka anggap kuno. \"Masih dengan kerbau, Pak?\" tanya mereka, setiap musim tanam, selama sebelas tahun."
      },
      {
        illustrationSeed: "tebalbuffalo-3",
        textEn: "Pak Salim always said the same thing. \"Tebal knows where the soft ground is.\" Nobody knew what that meant and most people assumed it was just something to say.",
        textId: "Pak Salim selalu menjawab hal yang sama. \"Tebal tahu di mana tanah yang lembek.\" Tak ada yang paham maksudnya dan kebanyakan orang mengira itu cuma basa-basi."
      },
      {
        illustrationSeed: "tebalbuffalo-4",
        textEn: "Then came the wet season when the rain did not stop for nineteen days. The paddy fields turned into something between a lake and a swamp, and the ground underneath went soft in patches nobody could see.",
        textId: "Lalu datang musim hujan ketika hujan tak berhenti selama sembilan belas hari. Sawah-sawah berubah jadi sesuatu antara danau dan rawa, dan tanah di bawahnya melembek di bagian-bagian yang tak bisa dilihat siapa pun."
      },
      {
        illustrationSeed: "tebalbuffalo-5",
        textEn: "Three tractors went in on the Tuesday and three tractors stayed in, sunk to the axle, and it took four days and eleven men and a rope to get the last one out.",
        textId: "Tiga traktor masuk pada hari Selasa dan tiga traktor tertanam di sana, terbenam sampai gardan, dan butuh empat hari, sebelas orang, dan seutas tali untuk mengeluarkan yang terakhir."
      },
      {
        illustrationSeed: "tebalbuffalo-6",
        textEn: "Tebal walked out into the same field and did not sink. He put one foot down, felt it, and moved it somewhere else before his weight went onto it. A tractor cannot do this. A tractor has no feet, only wheels, and wheels do not ask.",
        textId: "Tebal melangkah ke sawah yang sama dan tidak terbenam. Ia menurunkan satu kaki, merasakannya, lalu memindahkannya ke tempat lain sebelum bobotnya turun ke sana. Traktor tak bisa begitu. Traktor tak punya kaki, hanya roda, dan roda tidak bertanya."
      },
      {
        illustrationSeed: "tebalbuffalo-7",
        textEn: "That season Pak Salim ploughed his own field and then, for eleven days, everybody else's, slowly, one at a time, and would not take money for any of it.",
        textId: "Musim itu Pak Salim membajak sawahnya sendiri, lalu selama sebelas hari membajak sawah orang lain, perlahan, satu per satu, dan menolak dibayar untuk semuanya."
      },
      {
        illustrationSeed: "tebalbuffalo-8",
        textEn: "Nobody sold their tractor. Tractors are faster and Pak Salim was the first to say so. But three families in the valley now keep a buffalo as well, which is the sort of thing that is very hard to explain in a spreadsheet.",
        textId: "Tak ada yang menjual traktornya. Traktor memang lebih cepat, dan Pak Salim sendiri yang pertama mengatakannya. Tapi kini tiga keluarga di lembah itu juga memelihara kerbau — hal yang sangat sulit dijelaskan dalam lembar hitung."
      },
      {
        illustrationSeed: "tebalbuffalo-9",
        textEn: "Tebal is nineteen now and does very little. He stands in the shade by the ditch and watches the tractors go past, and every few years the valley remembers exactly why he is still there.",
        textId: "Tebal kini berumur sembilan belas tahun dan tak banyak bekerja. Ia berdiri di keteduhan dekat parit dan menonton traktor-traktor lewat, dan setiap beberapa tahun sekali lembah itu kembali ingat persis mengapa ia masih ada di sana."
      }
    ],
    quiz: [
      {
        questionEn: "What did Pak Salim always say about Tebal?",
        questionId: "Apa yang selalu Pak Salim katakan tentang Tebal?",
        optionsEn: ["He is strong", "He knows where the soft ground is", "He is cheap", "He is old"],
        optionsId: ["Ia kuat", "Ia tahu di mana tanah yang lembek", "Ia murah", "Ia tua"],
        correctIndex: 1
      },
      {
        questionEn: "Why did the tractors get stuck?",
        questionId: "Mengapa traktor-traktor itu terjebak?",
        optionsEn: ["They ran out of fuel", "Wheels cannot test the ground before putting weight on it", "They were too old", "The drivers were careless"],
        optionsId: ["Kehabisan bahan bakar", "Roda tak bisa menguji tanah sebelum membebaninya", "Terlalu tua", "Pengemudinya ceroboh"],
        correctIndex: 1
      },
      {
        questionEn: "What did Pak Salim do that season?",
        questionId: "Apa yang Pak Salim lakukan pada musim itu?",
        optionsEn: ["Sold his buffalo", "Ploughed everybody's fields for eleven days without payment", "Bought a tractor", "Stayed home"],
        optionsId: ["Menjual kerbaunya", "Membajak sawah semua orang selama sebelas hari tanpa bayaran", "Membeli traktor", "Diam di rumah"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-apology-that-came-too-late",
    titleEn: "The Apology That Came Too Late",
    titleId: "Maaf yang Datang Terlambat",
    descriptionEn: "Yuda waited three days to say sorry, and by then it was a different apology entirely. What he learned about timing is worth knowing.",
    descriptionId: "Yuda menunggu tiga hari untuk minta maaf, dan saat itu maafnya sudah jadi maaf yang sama sekali berbeda. Apa yang ia pelajari tentang waktu layak diketahui.",
    categorySlug: "manners",
    authorSlug: "emily-clark",
    coverEmoji: "🙇",
    coverPalette: "dusk",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "lateapology-1",
        textEn: "What Yuda did was small. He laughed when Pandu read out loud in class and got a word wrong, and four other boys laughed because Yuda had.",
        textId: "Yang Yuda lakukan itu kecil saja. Ia tertawa ketika Pandu membaca keras-keras di kelas dan salah mengucapkan satu kata, lalu empat anak lelaki lain ikut tertawa karena Yuda tertawa."
      },
      {
        illustrationSeed: "lateapology-2",
        textEn: "He knew immediately that it was wrong. He knew it in the same second, actually, watching the back of Pandu's neck go red. But saying sorry right there, in front of everybody, was more than he could do.",
        textId: "Ia langsung tahu itu salah. Sebenarnya ia tahu pada detik yang sama, saat melihat tengkuk Pandu memerah. Tapi minta maaf saat itu juga, di depan semua orang, terasa di luar kemampuannya."
      },
      {
        illustrationSeed: "lateapology-3",
        textEn: "So he decided to do it later. At break. Then break came and Pandu was with other people, so he decided to do it after school. Then after school Pandu left quickly.",
        textId: "Maka ia memutuskan melakukannya nanti. Saat istirahat. Lalu istirahat tiba dan Pandu sedang bersama orang lain, jadi ia memutuskan melakukannya sepulang sekolah. Lalu sepulang sekolah Pandu cepat-cepat pergi."
      },
      {
        illustrationSeed: "lateapology-4",
        textEn: "Day two, he had almost decided it was too late to bring it up and that mentioning it now would only make it worse, which is the most convenient thing a person can decide.",
        textId: "Hari kedua, ia hampir memutuskan bahwa sudah terlambat untuk membahasnya dan menyinggungnya sekarang justru memperburuk keadaan — kesimpulan paling nyaman yang bisa diambil seseorang."
      },
      {
        illustrationSeed: "lateapology-5",
        textEn: "Day three, Pandu stopped reading out loud. When the teacher asked for a volunteer he looked at the desk. He had read out loud every week of that whole year until Tuesday.",
        textId: "Hari ketiga, Pandu berhenti membaca keras-keras. Ketika guru meminta sukarelawan, ia menatap meja. Padahal ia membaca keras-keras setiap pekan sepanjang tahun itu sampai hari Selasa."
      },
      {
        illustrationSeed: "lateapology-6",
        textEn: "Yuda said sorry on the Friday, by the bicycle racks, properly and out loud with nothing added. Pandu said, \"Okay.\" And that was true — it was okay — and it also did not put anything back.",
        textId: "Yuda minta maaf pada hari Jumat, di tempat parkir sepeda, dengan benar dan lantang tanpa embel-embel. Pandu menjawab, \"Tidak apa-apa.\" Dan itu memang benar — tidak apa-apa — tapi juga tidak mengembalikan apa pun."
      },
      {
        illustrationSeed: "lateapology-7",
        textEn: "Yuda's grandmother put it in a way he has never forgotten. \"An apology on the day is a bandage,\" she said. \"An apology on Friday is an explanation. Both are worth giving. They do different work.\"",
        textId: "Nenek Yuda mengatakannya dengan cara yang tak pernah ia lupakan. \"Maaf di hari kejadian itu perban,\" katanya. \"Maaf di hari Jumat itu penjelasan. Keduanya layak diberikan. Tapi kerjanya berbeda.\""
      },
      {
        illustrationSeed: "lateapology-8",
        textEn: "So Yuda did the second thing, which took longer. On Monday when the teacher asked for a reader, he said, \"Pandu is better at it than me,\" out loud, in front of the same class that had laughed.",
        textId: "Maka Yuda melakukan hal kedua, yang butuh waktu lebih lama. Pada Senin ketika guru meminta pembaca, ia berkata, \"Pandu lebih pandai daripada aku,\" keras-keras, di depan kelas yang sama yang dulu menertawakan."
      },
      {
        illustrationSeed: "lateapology-9",
        textEn: "Pandu read the following week. Not because of the apology. Because of the Monday. Yuda has been quick ever since — not braver, exactly, just faster, because he found out what three days cost.",
        textId: "Pandu membaca lagi pekan berikutnya. Bukan karena permintaan maafnya. Karena hari Senin itu. Sejak itu Yuda selalu cepat — bukan lebih berani, hanya lebih cepat, karena ia tahu berapa harga tiga hari."
      }
    ],
    quiz: [
      {
        questionEn: "What did Yuda do wrong?",
        questionId: "Apa kesalahan Yuda?",
        optionsEn: ["He took something", "He laughed when Pandu misread a word", "He told a lie", "He pushed someone"],
        optionsId: ["Ia mengambil sesuatu", "Ia tertawa saat Pandu salah baca", "Ia berbohong", "Ia mendorong seseorang"],
        correctIndex: 1
      },
      {
        questionEn: "What did his grandmother say about timing?",
        questionId: "Apa kata neneknya tentang waktu?",
        optionsEn: ["Late is the same as never", "Same-day sorry is a bandage; a later one is an explanation", "Never apologise", "Only apologise in private"],
        optionsId: ["Terlambat sama saja tak pernah", "Maaf di hari itu adalah perban; maaf belakangan adalah penjelasan", "Jangan pernah minta maaf", "Minta maaf hanya berdua"],
        correctIndex: 1
      },
      {
        questionEn: "What made Pandu read again?",
        questionId: "Apa yang membuat Pandu membaca lagi?",
        optionsEn: ["The apology on Friday", "Yuda saying out loud on Monday that Pandu was better at it", "The teacher insisting", "Nothing"],
        optionsId: ["Permintaan maaf hari Jumat", "Yuda berkata lantang hari Senin bahwa Pandu lebih pandai", "Guru memaksa", "Tidak ada"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-shortcut-that-was-not-shorter",
    titleEn: "The Shortcut That Was Not Shorter",
    titleId: "Jalan Pintas yang Ternyata Tidak Lebih Pendek",
    descriptionEn: "Two cousins set out to cross the ridge before dark. One took the path. One took the line on the map. Only one of them got there in daylight.",
    descriptionId: "Dua sepupu berangkat menyeberangi punggung bukit sebelum gelap. Satu mengambil jalan setapak. Satu mengambil garis lurus di peta. Hanya satu yang sampai saat masih terang.",
    categorySlug: "adventure",
    authorSlug: "david-lee",
    coverEmoji: "🥾",
    coverPalette: "forest",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "notshorter-1",
        textEn: "The path over the ridge to Kampung Ulu curves. It goes east for a kilometre, doubles back, and only then climbs. On a map it looks like a mistake.",
        textId: "Jalan setapak melintasi punggung bukit menuju Kampung Ulu itu berkelok. Ia menuju timur sejauh satu kilometer, berbalik arah, lalu baru mendaki. Di peta, ia tampak seperti kesalahan."
      },
      {
        illustrationSeed: "notshorter-2",
        textEn: "Adi, who was thirteen and good at maths, measured it. The path was 4.8 kilometres. The straight line was 2.1. He showed his cousin Nur the two numbers as if that settled it.",
        textId: "Adi, berumur tiga belas tahun dan pandai matematika, mengukurnya. Jalan setapak itu 4,8 kilometer. Garis lurusnya 2,1. Ia menunjukkan dua angka itu pada sepupunya, Nur, seolah itu sudah menyelesaikan perdebatan."
      },
      {
        illustrationSeed: "notshorter-3",
        textEn: "Nur said, \"The path is 4.8 kilometres of path. Your line is 2.1 kilometres of hillside.\" Adi said those were the same thing with extra words in it. They set off separately at two in the afternoon.",
        textId: "Nur berkata, \"Jalan setapak itu 4,8 kilometer jalan setapak. Garismu 2,1 kilometer lereng bukit.\" Adi bilang itu sama saja hanya dengan tambahan kata. Mereka berangkat sendiri-sendiri pukul dua siang."
      },
      {
        illustrationSeed: "notshorter-4",
        textEn: "The first four hundred metres of Adi's line were fine, through low scrub. Then came a gully that was not marked because it was too small to mark, and it took him twenty minutes to get across it.",
        textId: "Empat ratus meter pertama dari garis Adi berjalan lancar, melewati semak rendah. Lalu datang sebuah jurang kecil yang tak tertandai di peta karena terlalu kecil, dan ia butuh dua puluh menit untuk menyeberanginya."
      },
      {
        illustrationSeed: "notshorter-5",
        textEn: "Then bamboo. Not a bamboo grove on a map, just bamboo, growing the way bamboo grows, which is everywhere and against you. Nine hundred metres of it took him an hour and ten minutes.",
        textId: "Lalu bambu. Bukan rumpun bambu yang ada di peta, hanya bambu, tumbuh seperti bambu tumbuh — yakni di mana-mana dan melawanmu. Sembilan ratus meter bambu menghabiskan satu jam sepuluh menit."
      },
      {
        illustrationSeed: "notshorter-6",
        textEn: "Nur, meanwhile, was walking. Not fast. Just walking, on a surface people had walked on for two hundred years, with her hands in her pockets, going east for a kilometre like an idiot.",
        textId: "Sementara itu Nur berjalan. Tidak cepat. Hanya berjalan, di permukaan yang sudah diinjak orang selama dua ratus tahun, dengan tangan di saku, menuju timur sejauh satu kilometer seperti orang bodoh."
      },
      {
        illustrationSeed: "notshorter-7",
        textEn: "She reached Kampung Ulu at twenty past three. Adi came out of the treeline at ten to six with his shirt torn, two cuts on his arm and a very complete understanding of the difference between distance and difficulty.",
        textId: "Ia tiba di Kampung Ulu pukul tiga lewat dua puluh. Adi keluar dari batas hutan pukul enam kurang sepuluh dengan baju robek, dua luka di lengan, dan pemahaman yang sangat lengkap tentang beda antara jarak dan kesulitan."
      },
      {
        illustrationSeed: "notshorter-8",
        textEn: "The path curves for a reason. It curves because two hundred years of people walking found the one line across that hillside that does not have a gully, bamboo, or loose scree on it.",
        textId: "Jalan setapak itu berkelok karena ada sebabnya. Ia berkelok karena dua ratus tahun orang berjalan telah menemukan satu-satunya garis di lereng itu yang tidak berjurang, tidak berbambu, dan tidak berbatu lepas."
      },
      {
        illustrationSeed: "notshorter-9",
        textEn: "Adi kept the map. He drew his straight line on it in red and wrote next to it: 2.1 KM, 3 HOURS 50 MINUTES. He shows it to people who are about to try it. Some of them still do.",
        textId: "Adi menyimpan peta itu. Ia menggambar garis lurusnya dengan tinta merah dan menulis di sebelahnya: 2,1 KM, 3 JAM 50 MENIT. Ia menunjukkannya pada orang-orang yang hendak mencobanya. Sebagian tetap mencoba."
      }
    ],
    quiz: [
      {
        questionEn: "How long was the path compared to the straight line?",
        questionId: "Berapa panjang jalan setapak dibanding garis lurus?",
        optionsEn: ["Shorter", "4.8 km against 2.1 km", "The same", "Twice as short"],
        optionsId: ["Lebih pendek", "4,8 km berbanding 2,1 km", "Sama saja", "Setengahnya"],
        correctIndex: 1
      },
      {
        questionEn: "What slowed Adi down?",
        questionId: "Apa yang memperlambat Adi?",
        optionsEn: ["Rain", "An unmarked gully and nine hundred metres of bamboo", "He got lost", "He stopped to rest"],
        optionsId: ["Hujan", "Jurang yang tak tertandai dan sembilan ratus meter bambu", "Ia tersesat", "Ia berhenti istirahat"],
        correctIndex: 1
      },
      {
        questionEn: "Why does the path curve?",
        questionId: "Mengapa jalan setapak itu berkelok?",
        optionsEn: ["It is a mistake", "Two hundred years of walking found the easiest line", "To be longer", "To avoid houses"],
        optionsId: ["Karena kesalahan", "Dua ratus tahun orang berjalan menemukan garis termudah", "Supaya lebih panjang", "Untuk menghindari rumah"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-friend-who-was-always-second",
    titleEn: "The Friend Who Was Always Second",
    titleId: "Teman yang Selalu Nomor Dua",
    descriptionEn: "Kiki was everybody's second-best friend and nobody's first. For a year that quietly hurt. Then she noticed what being second actually means.",
    descriptionId: "Kiki adalah sahabat kedua bagi semua orang dan sahabat pertama bagi siapa pun bukan. Selama setahun itu diam-diam menyakitkan. Lalu ia menyadari arti sebenarnya jadi nomor dua.",
    categorySlug: "friendship",
    authorSlug: "sarah-johnson",
    coverEmoji: "🫂",
    coverPalette: "candy",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "secondfriend-1",
        textEn: "Kiki had a lot of friends and no best friend. Dewi's best friend was Ana. Ana's best friend was Dewi. Rafi's best friend was Bagas. And every single one of them liked Kiki very much.",
        textId: "Kiki punya banyak teman dan tak punya sahabat. Sahabat Dewi adalah Ana. Sahabat Ana adalah Dewi. Sahabat Rafi adalah Bagas. Dan setiap satu dari mereka sangat menyukai Kiki."
      },
      {
        illustrationSeed: "secondfriend-2",
        textEn: "Being liked very much by everybody sounds excellent. In practice it meant that when everyone paired up for anything, Kiki was the one standing there while the teacher counted.",
        textId: "Disukai banyak orang kedengarannya luar biasa. Kenyataannya, saat semua orang berpasangan untuk kegiatan apa pun, Kiki-lah yang berdiri sendirian sementara guru menghitung."
      },
      {
        illustrationSeed: "secondfriend-3",
        textEn: "She never said anything about it. She got extremely good at saying \"that is fine\" in a completely ordinary voice, which is a skill she wishes she had never had to learn.",
        textId: "Ia tak pernah membicarakannya. Ia jadi sangat mahir mengucapkan \"tidak apa-apa\" dengan nada yang benar-benar biasa — keahlian yang ia harap tak pernah perlu ia pelajari."
      },
      {
        illustrationSeed: "secondfriend-4",
        textEn: "Then in March Dewi and Ana had a real argument, the kind that lasts eleven days. And Dewi came and sat next to Kiki at lunch, and told her everything, and cried a bit.",
        textId: "Lalu pada bulan Maret, Dewi dan Ana bertengkar sungguhan, jenis pertengkaran yang bertahan sebelas hari. Dan Dewi datang duduk di sebelah Kiki saat makan siang, menceritakan semuanya, dan menangis sedikit."
      },
      {
        illustrationSeed: "secondfriend-5",
        textEn: "Two days later Ana came and sat next to Kiki at lunch, and told her everything, and did not cry but wanted to. Neither of them knew the other had done it.",
        textId: "Dua hari kemudian Ana datang duduk di sebelah Kiki saat makan siang, menceritakan semuanya, dan tidak menangis meski ingin. Keduanya tak tahu yang lain melakukan hal yang sama."
      },
      {
        illustrationSeed: "secondfriend-6",
        textEn: "Kiki did not repeat a single word of either conversation to the other. She did not take a side. She just listened twice, on two different days, and said almost nothing.",
        textId: "Kiki tidak mengulang satu kata pun dari kedua percakapan itu kepada yang lain. Ia tidak memihak. Ia hanya mendengarkan dua kali, pada dua hari berbeda, dan hampir tak berkata apa-apa."
      },
      {
        illustrationSeed: "secondfriend-7",
        textEn: "They made up on the eleventh day, by themselves. But Kiki understood something at the end of that week that she had not understood before: she was the person people came to when their first person was the problem.",
        textId: "Mereka berbaikan pada hari kesebelas, dengan sendirinya. Tapi di akhir pekan itu Kiki memahami sesuatu yang sebelumnya tak ia pahami: dialah orang yang didatangi ketika orang nomor satu mereka justru jadi masalahnya."
      },
      {
        illustrationSeed: "secondfriend-8",
        textEn: "That is not a smaller job than being first. It is a completely different job, and there is usually only one person in a whole class who is trusted with it, and it is never the loudest one.",
        textId: "Itu bukan tugas yang lebih kecil daripada jadi nomor satu. Itu tugas yang sama sekali berbeda, dan biasanya hanya ada satu orang di satu kelas yang dipercaya melakukannya — dan tak pernah orang yang paling berisik."
      },
      {
        illustrationSeed: "secondfriend-9",
        textEn: "Kiki still does not have a best friend and still sometimes minds. But she stopped keeping score, because she counted properly one afternoon and worked out that she was seven people's second person, and seven is a large number.",
        textId: "Kiki masih belum punya sahabat dan kadang masih merasa sedih. Tapi ia berhenti menghitung, karena suatu sore ia benar-benar menghitung dan mendapati dirinya adalah orang nomor dua bagi tujuh orang — dan tujuh itu angka yang besar."
      }
    ],
    quiz: [
      {
        questionEn: "What was Kiki's situation?",
        questionId: "Bagaimana keadaan Kiki?",
        optionsEn: ["Nobody liked her", "Everybody's second-best friend, nobody's first", "She had no friends", "She had one best friend"],
        optionsId: ["Tak ada yang menyukainya", "Sahabat kedua bagi semua orang, pertama bagi siapa pun bukan", "Ia tak punya teman", "Ia punya satu sahabat"],
        correctIndex: 1
      },
      {
        questionEn: "What did Kiki do when both friends confided in her?",
        questionId: "Apa yang Kiki lakukan saat kedua temannya curhat padanya?",
        optionsEn: ["Told each what the other said", "Listened, took no side, repeated nothing", "Took Dewi's side", "Avoided them both"],
        optionsId: ["Menceritakan ucapan yang satu pada yang lain", "Mendengarkan, tak memihak, tak mengulang apa pun", "Memihak Dewi", "Menghindari keduanya"],
        correctIndex: 1
      },
      {
        questionEn: "What did she realise being second means?",
        questionId: "Apa yang ia sadari tentang arti jadi nomor dua?",
        optionsEn: ["It is a smaller job", "She is who people come to when their first person is the problem", "It is temporary", "It means nothing"],
        optionsId: ["Tugas yang lebih kecil", "Ia yang didatangi ketika orang nomor satu mereka jadi masalahnya", "Sementara saja", "Tak berarti apa-apa"],
        correctIndex: 1
      }
    ]
  }
];
