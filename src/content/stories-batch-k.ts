/**
 * Story batch K — hand-written bilingual (EN/ID) read-aloud stories, appended
 * to the library. Batches only ever add; nothing existing is edited or merged.
 *
 * A fifth book for the other seventeen shelves: robots-tech, science,
 * nature-environment, weather-seasons, community-helpers, sports, music-rhymes,
 * holidays-culture, world-cultures, health-body, true-stories, family, emotions,
 * farm, manners, adventure and friendship.
 */
import type { Story } from "./stories";

export const STORIES_BATCH_K: Story[] = [
  {
    slug: "the-robot-that-counted-the-birds",
    titleEn: "The Robot That Counted the Birds",
    titleId: "Robot yang Menghitung Burung",
    descriptionEn: "A camera on a pole was built to count lorries. It counted birds instead, for eleven years, and nobody found out until the road was widened.",
    descriptionId: "Sebuah kamera di tiang dibangun untuk menghitung truk. Ia justru menghitung burung, selama sebelas tahun, dan tak ada yang tahu sampai jalan itu diperlebar.",
    categorySlug: "robots-tech",
    authorSlug: "sarah-johnson",
    coverEmoji: "📷",
    coverPalette: "sky",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "birdcounter-1",
        textEn: "On the coast road there was a camera on a pole. Its job was to count lorries, so the district could work out when to repair the tarmac.",
        textId: "Di jalan pantai itu ada sebuah kamera di atas tiang. Tugasnya menghitung truk, supaya pemerintah daerah bisa memperkirakan kapan aspalnya perlu diperbaiki."
      },
      {
        illustrationSeed: "birdcounter-2",
        textEn: "The engineer who set it up, a woman called Bu Endah, wrote the counting program herself. She wrote it to count anything that moved across the frame and to write the shape into a log file.",
        textId: "Insinyur yang memasangnya, seorang perempuan bernama Bu Endah, menulis sendiri program penghitungnya. Ia menulisnya agar menghitung apa pun yang bergerak melintasi bingkai kamera dan mencatat bentuknya ke dalam berkas log."
      },
      {
        illustrationSeed: "birdcounter-3",
        textEn: "This was slightly more than she needed to do. But she had built it that way because taking things out of a program is easy and putting them back in later is not.",
        textId: "Itu sedikit lebih banyak dari yang perlu ia lakukan. Tapi ia membangunnya begitu karena mengeluarkan sesuatu dari program itu mudah, sedangkan memasukkannya kembali nanti tidak."
      },
      {
        illustrationSeed: "birdcounter-4",
        textEn: "So for eleven years the camera counted lorries, and also cars, and also motorbikes, and also — because they crossed the frame twice a year in enormous numbers — migrating birds.",
        textId: "Maka selama sebelas tahun kamera itu menghitung truk, dan juga mobil, dan juga sepeda motor, dan juga — karena mereka melintasi bingkai kamera dua kali setahun dalam jumlah luar biasa — burung-burung yang bermigrasi."
      },
      {
        illustrationSeed: "birdcounter-5",
        textEn: "Nobody read those numbers. They went into a folder on a server. The folder got bigger every year and nobody opened it, because nobody had asked a question that the folder answered.",
        textId: "Tak ada yang membaca angka-angka itu. Semuanya masuk ke sebuah folder di server. Folder itu makin besar setiap tahun dan tak ada yang membukanya, karena tak ada yang mengajukan pertanyaan yang bisa dijawab folder itu."
      },
      {
        illustrationSeed: "birdcounter-6",
        textEn: "Then the road was going to be widened, and a study had to be done, and the study needed to know whether the coast road crossed a bird migration route. Nobody had that information. Nobody in the country had it.",
        textId: "Lalu jalan itu hendak diperlebar, sebuah kajian harus dilakukan, dan kajian itu perlu tahu apakah jalan pantai itu melintasi jalur migrasi burung. Tak seorang pun punya informasi itu. Tak seorang pun di negeri itu punya."
      },
      {
        illustrationSeed: "birdcounter-7",
        textEn: "Bu Endah, who was by then retired and living four hundred kilometres away, saw the news and made one phone call, which was the shortest and most useful phone call of her career.",
        textId: "Bu Endah, yang saat itu sudah pensiun dan tinggal empat ratus kilometer jauhnya, melihat beritanya dan menelepon sekali — telepon terpendek dan paling berguna sepanjang kariernya."
      },
      {
        illustrationSeed: "birdcounter-8",
        textEn: "Eleven years of twice-yearly counts, from one fixed point, taken at the same hours every day. It is the best record of that route that exists, and it was made entirely by accident by a machine watching for lorries.",
        textId: "Sebelas tahun penghitungan dua kali setahun, dari satu titik tetap, diambil pada jam-jam yang sama setiap hari. Itu catatan terbaik tentang jalur itu yang ada, dan ia dibuat sepenuhnya secara tak sengaja oleh mesin yang mengawasi truk."
      },
      {
        illustrationSeed: "birdcounter-9",
        textEn: "The road was widened on the other side of the hill. Bu Endah still says the same thing to every student she meets: keep more than you need, because you cannot know in advance which question somebody will ask.",
        textId: "Jalan itu akhirnya diperlebar di sisi lain bukit. Bu Endah masih mengatakan hal yang sama pada setiap mahasiswa yang ia temui: simpan lebih banyak dari yang kau butuhkan, karena kau tak bisa tahu lebih dulu pertanyaan apa yang akan diajukan orang."
      }
    ],
    quiz: [
      {
        questionEn: "What was the camera built to count?",
        questionId: "Kamera itu dibangun untuk menghitung apa?",
        optionsEn: ["Birds", "Lorries", "People", "Clouds"],
        optionsId: ["Burung", "Truk", "Orang", "Awan"],
        correctIndex: 1
      },
      {
        questionEn: "Why did it also count birds?",
        questionId: "Mengapa ia juga menghitung burung?",
        optionsEn: ["It was told to", "Bu Endah wrote it to log anything that moved", "It made a mistake", "Somebody changed it later"],
        optionsId: ["Karena diperintahkan", "Bu Endah menulisnya agar mencatat apa pun yang bergerak", "Ia keliru", "Ada yang mengubahnya kemudian"],
        correctIndex: 1
      },
      {
        questionEn: "What is Bu Endah's advice?",
        questionId: "Apa nasihat Bu Endah?",
        optionsEn: ["Delete old data", "Keep more than you need — you cannot know the future question", "Build smaller programs", "Count only what matters"],
        optionsId: ["Hapus data lama", "Simpan lebih dari yang dibutuhkan — kau tak tahu pertanyaan masa depan", "Buat program lebih kecil", "Hitung yang penting saja"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "why-the-bridge-hums",
    titleEn: "Why the Bridge Hums",
    titleId: "Mengapa Jembatan Berdengung",
    descriptionEn: "On windy days the footbridge made a low note you could feel in your teeth. Three children with a ruler found out exactly why.",
    descriptionId: "Pada hari berangin, jembatan penyeberangan itu mengeluarkan nada rendah yang terasa sampai ke gigi. Tiga anak dengan sebuah penggaris menemukan sebabnya.",
    categorySlug: "science",
    authorSlug: "david-lee",
    coverEmoji: "🌉",
    coverPalette: "sky",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "bridgehum-1",
        textEn: "The footbridge over the highway was steel, painted green, and on windy days it made a sound. Not a rattle. A note — low and even, the sort of thing you feel in your back teeth.",
        textId: "Jembatan penyeberangan di atas jalan raya itu terbuat dari baja, dicat hijau, dan pada hari berangin ia mengeluarkan suara. Bukan bunyi berderak. Sebuah nada — rendah dan rata, jenis bunyi yang terasa di geraham belakangmu."
      },
      {
        illustrationSeed: "bridgehum-2",
        textEn: "Three children — Vira, Deni and Sari — decided to find out why. They were nine, nine and ten, and the only equipment they had was a thirty-centimetre plastic ruler.",
        textId: "Tiga anak — Vira, Deni, dan Sari — memutuskan mencari tahu sebabnya. Umur mereka sembilan, sembilan, dan sepuluh, dan satu-satunya peralatan yang mereka punya adalah penggaris plastik tiga puluh sentimeter."
      },
      {
        illustrationSeed: "bridgehum-3",
        textEn: "They started with the ruler on the edge of a desk. Push it down, let it go, and it twangs. Push more of it over the edge and the note goes lower. Push less and the note goes higher.",
        textId: "Mereka mulai dengan penggaris di tepi meja. Tekan ke bawah, lepaskan, dan ia bergetar berbunyi. Julurkan lebih panjang keluar tepi meja, nadanya makin rendah. Julurkan lebih pendek, nadanya makin tinggi."
      },
      {
        illustrationSeed: "bridgehum-4",
        textEn: "That is the whole principle. Long things wobble slowly and make low notes. Short things wobble quickly and make high notes. Vira wrote this down as: LONGER = LOWER.",
        textId: "Itulah seluruh prinsipnya. Benda panjang bergetar lambat dan menghasilkan nada rendah. Benda pendek bergetar cepat dan menghasilkan nada tinggi. Vira mencatatnya: LEBIH PANJANG = LEBIH RENDAH."
      },
      {
        illustrationSeed: "bridgehum-5",
        textEn: "Then they went and looked at the bridge properly, which is the part most people skip. Underneath it there were eleven steel rods running along the length, and they were all the same length as each other.",
        textId: "Lalu mereka pergi mengamati jembatan itu dengan saksama — bagian yang biasanya dilewatkan kebanyakan orang. Di bawahnya ada sebelas batang baja memanjang, dan semuanya sama panjang satu sama lain."
      },
      {
        illustrationSeed: "bridgehum-6",
        textEn: "Eleven rods the same length are eleven rulers on eleven desks. When the wind pushes them, they all wobble at the same speed, so they all make the same note, and eleven of the same note is loud.",
        textId: "Sebelas batang dengan panjang sama adalah sebelas penggaris di sebelas meja. Ketika angin mendorongnya, semuanya bergetar dengan kecepatan sama, jadi semuanya menghasilkan nada yang sama — dan sebelas nada yang sama itu keras."
      },
      {
        illustrationSeed: "bridgehum-7",
        textEn: "Deni asked the obvious next question: why does it only hum on windy days? Because on still days nothing is pushing the rods. A ruler on a desk that nobody flicks makes no sound at all.",
        textId: "Deni mengajukan pertanyaan lanjutan yang jelas: mengapa ia hanya berdengung pada hari berangin? Karena pada hari tenang tak ada yang mendorong batang-batang itu. Penggaris di meja yang tak disentil sama sekali tak berbunyi."
      },
      {
        illustrationSeed: "bridgehum-8",
        textEn: "They wrote it all up, with the ruler experiment drawn out, and gave it to their teacher, who gave it to the district engineer, who read it and then came to the school to meet them.",
        textId: "Mereka menuliskan semuanya, lengkap dengan gambar percobaan penggarisnya, lalu memberikannya pada guru mereka, yang memberikannya pada insinyur daerah, yang membacanya lalu datang ke sekolah untuk menemui mereka."
      },
      {
        illustrationSeed: "bridgehum-9",
        textEn: "He said their explanation was correct in every particular. He also said the bridge is perfectly safe and the hum is harmless, and that he would rather have three children who measured than a hundred who complained.",
        textId: "Ia bilang penjelasan mereka benar dalam setiap rinciannya. Ia juga bilang jembatan itu sepenuhnya aman dan dengungnya tak berbahaya, dan bahwa ia lebih memilih tiga anak yang mengukur daripada seratus anak yang mengeluh."
      }
    ],
    quiz: [
      {
        questionEn: "What did the ruler experiment show?",
        questionId: "Apa yang ditunjukkan percobaan penggaris?",
        optionsEn: ["Longer = higher note", "Longer = lower note", "Length does not matter", "Plastic is loud"],
        optionsId: ["Lebih panjang = nada lebih tinggi", "Lebih panjang = nada lebih rendah", "Panjang tidak berpengaruh", "Plastik itu nyaring"],
        correctIndex: 1
      },
      {
        questionEn: "Why was the hum so loud?",
        questionId: "Mengapa dengungnya begitu keras?",
        optionsEn: ["The bridge was old", "Eleven rods the same length all made the same note", "Cars underneath", "The paint"],
        optionsId: ["Jembatannya tua", "Sebelas batang sama panjang menghasilkan nada yang sama", "Mobil di bawahnya", "Catnya"],
        correctIndex: 1
      },
      {
        questionEn: "Why only on windy days?",
        questionId: "Mengapa hanya pada hari berangin?",
        optionsEn: ["Wind is cold", "On still days nothing pushes the rods", "The bridge moves less", "People walk less"],
        optionsId: ["Angin itu dingin", "Pada hari tenang tak ada yang mendorong batangnya", "Jembatannya kurang bergerak", "Orang jarang lewat"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-tree-that-was-worth-more-standing",
    titleEn: "The Tree That Was Worth More Standing",
    titleId: "Pohon yang Lebih Berharga Kalau Tetap Berdiri",
    descriptionEn: "The old durian tree could be sold for timber. A boy did the arithmetic on the back of a receipt and changed his family's mind.",
    descriptionId: "Pohon durian tua itu bisa dijual sebagai kayu. Seorang anak menghitungnya di balik struk belanja dan mengubah pikiran keluarganya.",
    categorySlug: "nature-environment",
    authorSlug: "emily-clark",
    coverEmoji: "🌳",
    coverPalette: "forest",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "standingtree-1",
        textEn: "There was a durian tree behind the house that Rendra's great-grandfather had planted. It was older than the house and taller than everything around it.",
        textId: "Ada pohon durian di belakang rumah yang ditanam kakek buyut Rendra. Usianya lebih tua daripada rumah itu dan tingginya melebihi apa pun di sekitarnya."
      },
      {
        illustrationSeed: "standingtree-2",
        textEn: "A timber buyer came in June and offered a large sum of money for it. Everybody in the family agreed the sum was large. Nobody in the family disagreed that they needed money.",
        textId: "Seorang pembeli kayu datang pada bulan Juni dan menawarkan sejumlah besar uang untuk pohon itu. Semua orang di keluarga sepakat jumlahnya besar. Tak ada yang membantah bahwa mereka butuh uang."
      },
      {
        illustrationSeed: "standingtree-3",
        textEn: "Rendra was thirteen and did not have an opinion about trees. What he had was a maths exercise book and the habit of checking whether numbers are actually true.",
        textId: "Rendra berumur tiga belas tahun dan tidak punya pendapat khusus tentang pohon. Yang ia punya adalah buku latihan matematika dan kebiasaan memeriksa apakah angka-angka itu benar."
      },
      {
        illustrationSeed: "standingtree-4",
        textEn: "So he worked out what the tree produced. It made between sixty and ninety durians a year. His mother sold them at the roadside. He asked her for the last four years of numbers, which she had, in a notebook.",
        textId: "Maka ia menghitung apa yang dihasilkan pohon itu. Ia menghasilkan antara enam puluh sampai sembilan puluh buah durian setahun. Ibunya menjualnya di pinggir jalan. Ia meminta angka empat tahun terakhir, yang memang ibunya punya, dalam sebuah buku catatan."
      },
      {
        illustrationSeed: "standingtree-5",
        textEn: "The tree earned, on average, about a ninth of the timber offer every single year. So the offer was worth about nine years of fruit. The tree was ninety years old and durian trees live past a hundred and fifty.",
        textId: "Rata-rata, pohon itu menghasilkan sekitar sepersembilan dari tawaran kayu itu setiap tahun. Jadi tawaran itu setara sekitar sembilan tahun panen buah. Pohon itu berumur sembilan puluh tahun, dan pohon durian bisa hidup melewati seratus lima puluh tahun."
      },
      {
        illustrationSeed: "standingtree-6",
        textEn: "He wrote it on the back of a shop receipt in four lines and put it on the table at dinner. Nobody said anything for a while. Then his uncle picked it up and read it twice.",
        textId: "Ia menuliskannya di balik struk belanja dalam empat baris dan menaruhnya di meja saat makan malam. Beberapa saat tak ada yang bicara. Lalu pamannya mengambil kertas itu dan membacanya dua kali."
      },
      {
        illustrationSeed: "standingtree-7",
        textEn: "There was still an argument, because a large sum of money now is genuinely worth more than a small sum of money for many years, and that is a real point and Rendra's uncle made it well.",
        textId: "Tetap ada perdebatan, karena sejumlah besar uang sekarang memang benar-benar lebih berharga daripada sejumlah kecil uang selama bertahun-tahun — itu argumen yang sahih dan paman Rendra menyampaikannya dengan baik."
      },
      {
        illustrationSeed: "standingtree-8",
        textEn: "But the receipt changed the conversation from \"should we sell the tree\" to \"what do we actually need the money for\", and it turned out what they needed it for cost about a third of the offer.",
        textId: "Tapi struk itu mengubah percakapannya dari \"haruskah kita jual pohonnya\" menjadi \"sebenarnya uangnya untuk apa\" — dan ternyata yang mereka butuhkan biayanya sekitar sepertiga dari tawaran itu."
      },
      {
        illustrationSeed: "standingtree-9",
        textEn: "They sold two smaller trees instead. The durian is still there. Rendra is twenty now and keeps the receipt in the back of the same exercise book, where the four lines are still perfectly legible.",
        textId: "Mereka menjual dua pohon yang lebih kecil sebagai gantinya. Pohon durian itu masih ada. Rendra kini berumur dua puluh dan menyimpan struk itu di belakang buku latihan yang sama, di mana keempat barisnya masih terbaca jelas."
      }
    ],
    quiz: [
      {
        questionEn: "What did Rendra work out?",
        questionId: "Apa yang Rendra hitung?",
        optionsEn: ["The height of the tree", "How much fruit the tree earned each year", "The age of the house", "The timber price only"],
        optionsId: ["Tinggi pohonnya", "Berapa hasil buah pohon itu tiap tahun", "Umur rumahnya", "Hanya harga kayunya"],
        correctIndex: 1
      },
      {
        questionEn: "How many years of fruit was the offer worth?",
        questionId: "Tawaran itu setara berapa tahun panen buah?",
        optionsEn: ["Ninety", "About nine", "Two", "A hundred and fifty"],
        optionsId: ["Sembilan puluh", "Sekitar sembilan", "Dua", "Seratus lima puluh"],
        correctIndex: 1
      },
      {
        questionEn: "What did the receipt change?",
        questionId: "Apa yang diubah oleh struk itu?",
        optionsEn: ["Nothing", "The conversation, from selling to what the money was actually for", "The timber price", "The family's plans to move"],
        optionsId: ["Tidak ada", "Percakapannya, dari soal menjual jadi soal uangnya untuk apa", "Harga kayunya", "Rencana keluarga pindah"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-hailstones-in-the-freezer",
    titleEn: "The Hailstones in the Freezer",
    titleId: "Butiran Es Hujan di Dalam Kulkas",
    descriptionEn: "Hail fell in a town where it had never fallen before. One woman put four stones in her freezer, and eleven years later a scientist knocked on her door.",
    descriptionId: "Hujan es turun di kota yang belum pernah mengalaminya. Seorang perempuan menyimpan empat butir di kulkasnya, dan sebelas tahun kemudian seorang ilmuwan mengetuk pintunya.",
    categorySlug: "weather-seasons",
    authorSlug: "sarah-johnson",
    coverEmoji: "🧊",
    coverPalette: "sky",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "hailfreezer-1",
        textEn: "It hailed in Ampenan on a Thursday in November, which had never happened in living memory and which everybody talked about for a week and then stopped talking about.",
        textId: "Hujan es turun di Ampenan pada suatu Kamis di bulan November — hal yang tak pernah terjadi seingat siapa pun, yang dibicarakan semua orang selama sepekan lalu berhenti dibicarakan."
      },
      {
        illustrationSeed: "hailfreezer-2",
        textEn: "Ibu Nur was forty-nine and had never seen ice fall out of the sky. She went outside while it was still coming down, picked up four of the biggest stones, and put them in a container in her freezer.",
        textId: "Ibu Nur berumur empat puluh sembilan tahun dan belum pernah melihat es jatuh dari langit. Ia keluar saat hujan es masih turun, memungut empat butir yang paling besar, dan menaruhnya dalam wadah di kulkasnya."
      },
      {
        illustrationSeed: "hailfreezer-3",
        textEn: "She could not have told you why. She said afterwards that it seemed wrong to let something that had never happened before simply melt into the drain.",
        textId: "Ia tak bisa menjelaskan alasannya. Belakangan ia bilang rasanya salah membiarkan sesuatu yang belum pernah terjadi begitu saja meleleh ke dalam selokan."
      },
      {
        illustrationSeed: "hailfreezer-4",
        textEn: "They stayed in the freezer. They were moved twice, once when the freezer broke and once when she moved house, and both times somebody said \"what is this?\" and she said \"leave it\".",
        textId: "Butiran itu tetap di kulkas. Ia dipindahkan dua kali, sekali saat kulkasnya rusak dan sekali saat ia pindah rumah, dan kedua kali ada yang bertanya \"ini apa?\" dan ia menjawab \"biarkan saja\"."
      },
      {
        illustrationSeed: "hailfreezer-5",
        textEn: "Eleven years later a research group came to the district studying unusual weather, and one of them mentioned in a public meeting that the hardest thing about the 2013 hail was that no samples existed.",
        textId: "Sebelas tahun kemudian sebuah kelompok peneliti datang ke kecamatan itu mempelajari cuaca tak lazim, dan salah satu dari mereka menyebut dalam pertemuan warga bahwa hal tersulit tentang hujan es 2013 adalah tak adanya sampel yang tersisa."
      },
      {
        illustrationSeed: "hailfreezer-6",
        textEn: "Ibu Nur put her hand up at the back and said, in a completely ordinary voice, \"I have four of them in my freezer.\" There was a pause of about three seconds and then a great deal of noise.",
        textId: "Ibu Nur mengangkat tangan dari barisan belakang dan berkata dengan nada biasa saja, \"Saya punya empat butir di kulkas saya.\" Hening sekitar tiga detik, lalu terdengar keriuhan hebat."
      },
      {
        illustrationSeed: "hailfreezer-7",
        textEn: "A hailstone has layers inside it, like an onion, one for each time it went up and came down inside the storm cloud. Reading the layers tells you how the storm was built.",
        textId: "Butiran es hujan punya lapisan di dalamnya, seperti bawang, satu lapisan untuk setiap kali ia naik dan turun di dalam awan badai. Membaca lapisan-lapisan itu memberi tahu bagaimana badai itu terbentuk."
      },
      {
        illustrationSeed: "hailfreezer-8",
        textEn: "Three of the four had partly collapsed over eleven years. The fourth was intact. It had nine layers, which means it went up and down nine times before it was heavy enough to fall.",
        textId: "Tiga dari empat butir sudah sebagian rusak selama sebelas tahun. Yang keempat masih utuh. Ia punya sembilan lapisan — artinya ia naik dan turun sembilan kali sebelum cukup berat untuk jatuh."
      },
      {
        illustrationSeed: "hailfreezer-9",
        textEn: "Ibu Nur is in the acknowledgements of a scientific paper she cannot read, under her full name. She has the page pinned to the fridge, about thirty centimetres above where the hailstones used to be.",
        textId: "Nama lengkap Ibu Nur tercantum dalam ucapan terima kasih sebuah makalah ilmiah yang tak bisa ia baca. Halaman itu ia tempel di kulkas, sekitar tiga puluh sentimeter di atas tempat butiran es itu dulu disimpan."
      }
    ],
    quiz: [
      {
        questionEn: "What did Ibu Nur do during the hail?",
        questionId: "Apa yang Ibu Nur lakukan saat hujan es?",
        optionsEn: ["Took photographs", "Put four hailstones in her freezer", "Sheltered indoors", "Called the news"],
        optionsId: ["Memotret", "Menaruh empat butir es di kulkasnya", "Berteduh di dalam rumah", "Menelepon media"],
        correctIndex: 1
      },
      {
        questionEn: "What is inside a hailstone?",
        questionId: "Apa yang ada di dalam butiran es hujan?",
        optionsEn: ["Water only", "Layers, one for each trip up and down inside the cloud", "Air", "Dust"],
        optionsId: ["Hanya air", "Lapisan-lapisan, satu untuk tiap perjalanan naik-turun di dalam awan", "Udara", "Debu"],
        correctIndex: 1
      },
      {
        questionEn: "How many layers did the intact stone have?",
        questionId: "Berapa lapisan yang dimiliki butir yang masih utuh?",
        optionsEn: ["Four", "Nine", "Eleven", "One"],
        optionsId: ["Empat", "Sembilan", "Sebelas", "Satu"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-man-who-fixed-the-street-lamps",
    titleEn: "The Man Who Fixed the Street Lamps",
    titleId: "Lelaki yang Memperbaiki Lampu Jalan",
    descriptionEn: "Pak Gito was not employed by anybody. For nineteen years he replaced the bulbs in his neighbourhood himself, and nobody organised it.",
    descriptionId: "Pak Gito tidak dipekerjakan siapa pun. Selama sembilan belas tahun ia mengganti sendiri bohlam lampu di lingkungannya, dan tak ada yang mengaturnya.",
    categorySlug: "community-helpers",
    authorSlug: "siti-aminah",
    coverEmoji: "💡",
    coverPalette: "dusk",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "lampfixer-1",
        textEn: "There are eleven street lamps on Jalan Sawo. For nineteen years, whenever one of them went out, it was working again within about two days, and nobody could have told you who did it.",
        textId: "Ada sebelas lampu jalan di Jalan Sawo. Selama sembilan belas tahun, setiap kali satu di antaranya padam, ia menyala lagi dalam sekitar dua hari, dan tak seorang pun bisa memberi tahu siapa yang melakukannya."
      },
      {
        illustrationSeed: "lampfixer-2",
        textEn: "Pak Gito had been an electrician before his knees stopped letting him climb properly. He kept the ladder. He kept a box of bulbs. He did it at about six in the morning, which is why nobody saw.",
        textId: "Pak Gito dulu seorang teknisi listrik sebelum lututnya tak lagi mengizinkannya memanjat dengan benar. Ia menyimpan tangganya. Ia menyimpan sekotak bohlam. Ia melakukannya sekitar pukul enam pagi — karena itulah tak ada yang melihatnya."
      },
      {
        illustrationSeed: "lampfixer-3",
        textEn: "He did not do it to be helpful, exactly. He did it because a dark street bothered him in a way he could not explain and could not ignore, and fixing it took eleven minutes.",
        textId: "Ia tidak melakukannya semata-mata untuk menolong. Ia melakukannya karena jalan yang gelap mengganggunya dengan cara yang tak bisa ia jelaskan dan tak bisa ia abaikan, dan memperbaikinya cuma butuh sebelas menit."
      },
      {
        illustrationSeed: "lampfixer-4",
        textEn: "The district office was supposed to do it. The district office was slow, not because anybody there was lazy but because there are nine thousand street lamps and eleven of them are on Jalan Sawo.",
        textId: "Seharusnya kantor kecamatan yang melakukannya. Kantor kecamatan lambat, bukan karena ada yang malas di sana, tapi karena ada sembilan ribu lampu jalan dan sebelas di antaranya ada di Jalan Sawo."
      },
      {
        illustrationSeed: "lampfixer-5",
        textEn: "He fell in the nineteenth year. Not badly, but badly enough that his daughter took the ladder away and would not give it back, which was completely correct of her.",
        textId: "Ia jatuh pada tahun kesembilan belas. Tidak parah, tapi cukup parah sampai putrinya menyita tangganya dan tak mau mengembalikannya — dan itu sepenuhnya benar."
      },
      {
        illustrationSeed: "lampfixer-6",
        textEn: "The third lamp went out in April and stayed out. Then the seventh. By July four of the eleven were dark and everybody on the street noticed at approximately the same time that something had been happening for nineteen years.",
        textId: "Lampu ketiga padam pada bulan April dan tetap padam. Lalu yang ketujuh. Menjelang Juli, empat dari sebelas lampu gelap, dan semua orang di jalan itu menyadari kira-kira pada saat yang sama bahwa selama sembilan belas tahun ada sesuatu yang telah terjadi."
      },
      {
        illustrationSeed: "lampfixer-7",
        textEn: "They went and asked him. He told them where the bulbs were kept, which fitting needs the short screwdriver, and that lamp number nine has a loose connection that needs a twist not a replacement.",
        textId: "Mereka mendatanginya dan bertanya. Ia memberi tahu di mana bohlam disimpan, fitting mana yang butuh obeng pendek, dan bahwa lampu nomor sembilan punya sambungan longgar yang butuh diputar, bukan diganti."
      },
      {
        illustrationSeed: "lampfixer-8",
        textEn: "Four younger men do it now, on a rota, with a better ladder. It takes each of them about eleven minutes, four times a year, which is nothing at all, which is exactly the point.",
        textId: "Kini empat lelaki muda yang melakukannya, secara bergilir, dengan tangga yang lebih baik. Masing-masing butuh sekitar sebelas menit, empat kali setahun — waktu yang sama sekali tak berarti, dan justru itulah intinya."
      },
      {
        illustrationSeed: "lampfixer-9",
        textEn: "Pak Gito sits outside in the evening and looks at the street being lit. Somebody asked him once whether it bothers him that he cannot do it any more. He said no. He said the street is still lit.",
        textId: "Pak Gito duduk di luar pada petang hari dan menatap jalan yang terang. Seseorang pernah bertanya apakah ia terganggu karena tak bisa lagi melakukannya. Ia menjawab tidak. Ia bilang jalannya tetap terang."
      }
    ],
    quiz: [
      {
        questionEn: "Who was paying Pak Gito?",
        questionId: "Siapa yang membayar Pak Gito?",
        optionsEn: ["The district office", "Nobody", "The neighbours", "His daughter"],
        optionsId: ["Kantor kecamatan", "Tidak ada", "Para tetangga", "Putrinya"],
        correctIndex: 1
      },
      {
        questionEn: "How did the neighbours find out?",
        questionId: "Bagaimana para tetangga akhirnya tahu?",
        optionsEn: ["He told them", "The lamps stopped being fixed after he fell", "They saw him at six in the morning", "The district office said so"],
        optionsId: ["Ia memberi tahu mereka", "Lampu-lampu berhenti diperbaiki setelah ia jatuh", "Mereka melihatnya pukul enam pagi", "Kantor kecamatan yang bilang"],
        correctIndex: 1
      },
      {
        questionEn: "Who does it now?",
        questionId: "Siapa yang melakukannya sekarang?",
        optionsEn: ["Pak Gito still", "Four younger men on a rota", "The district office", "Nobody"],
        optionsId: ["Masih Pak Gito", "Empat lelaki muda secara bergilir", "Kantor kecamatan", "Tidak ada"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-swimmer-in-lane-eight",
    titleEn: "The Swimmer in Lane Eight",
    titleId: "Perenang di Lintasan Delapan",
    descriptionEn: "Lane eight is where they put the slowest qualifier. Tias had been in lane eight four times. The fifth time, she did something nobody had planned for.",
    descriptionId: "Lintasan delapan adalah tempat perenang lolos paling lambat ditaruh. Tias sudah empat kali di lintasan delapan. Kali kelima, ia melakukan sesuatu yang tak diperhitungkan siapa pun.",
    categorySlug: "sports",
    authorSlug: "david-lee",
    coverEmoji: "🏊",
    coverPalette: "ocean",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "laneeight-1",
        textEn: "In a swimming final the fastest qualifier gets lane four, in the middle, with the best water. The slowest gets lane eight, at the edge, where the wash comes off the wall.",
        textId: "Dalam final renang, perenang lolos tercepat mendapat lintasan empat, di tengah, dengan air terbaik. Yang paling lambat mendapat lintasan delapan, di tepi, tempat pantulan gelombang datang dari dinding kolam."
      },
      {
        illustrationSeed: "laneeight-2",
        textEn: "Tias had swum in lane eight in four finals. She had come eighth, seventh, eighth and sixth. Her coach said, honestly, that sixth was a very good swim, and it was.",
        textId: "Tias sudah berenang di lintasan delapan dalam empat final. Ia finis kedelapan, ketujuh, kedelapan, dan keenam. Pelatihnya berkata jujur bahwa peringkat keenam itu renang yang sangat bagus — dan memang begitu."
      },
      {
        illustrationSeed: "laneeight-3",
        textEn: "The thing about lane eight is that you cannot see the race. In lane four you have swimmers on both sides and you know exactly where you are. In lane eight there is a wall on one side and nothing to measure yourself against.",
        textId: "Soal lintasan delapan adalah kau tak bisa melihat jalannya lomba. Di lintasan empat ada perenang di kedua sisimu dan kau tahu persis posisimu. Di lintasan delapan ada dinding di satu sisi dan tak ada apa pun untuk mengukur dirimu."
      },
      {
        illustrationSeed: "laneeight-4",
        textEn: "Tias had always found this frightening. Before the fifth final she decided to treat it as the opposite: if she could not see anybody, then nobody could set her pace for her, so she would set her own.",
        textId: "Tias selalu merasa itu menakutkan. Sebelum final kelima ia memutuskan menganggapnya sebaliknya: kalau ia tak bisa melihat siapa pun, maka tak ada yang bisa menentukan iramanya, jadi ia akan menentukan iramanya sendiri."
      },
      {
        illustrationSeed: "laneeight-5",
        textEn: "She had a plan and the plan was unusual. Everybody else goes out fast and holds on. Tias went out ninth-fastest on purpose, and swam the second half faster than the first, which almost nobody does.",
        textId: "Ia punya rencana dan rencananya tak lazim. Semua orang berangkat cepat lalu bertahan. Tias sengaja berangkat paling lambat kesembilan, dan berenang paruh kedua lebih cepat daripada paruh pertama — hal yang hampir tak pernah dilakukan siapa pun."
      },
      {
        illustrationSeed: "laneeight-6",
        textEn: "At the halfway turn she was last. She did not know she was last, because she was in lane eight and could not see, which was exactly the point of the plan.",
        textId: "Pada putaran paruh jalan ia berada di posisi terakhir. Ia tidak tahu ia terakhir, karena ia di lintasan delapan dan tak bisa melihat — dan justru itulah inti rencananya."
      },
      {
        illustrationSeed: "laneeight-7",
        textEn: "She came fourth. Not first. Fourth, by nine hundredths of a second, in a race she had been expected to finish last in, with the fastest second half of any swimmer in the pool.",
        textId: "Ia finis keempat. Bukan pertama. Keempat, dengan selisih sembilan perseratus detik, dalam lomba yang diperkirakan akan ia akhiri di posisi terakhir — dengan paruh kedua tercepat di antara semua perenang di kolam itu."
      },
      {
        illustrationSeed: "laneeight-8",
        textEn: "Her coach said afterwards that lane eight had been an advantage for exactly one swimmer in that pool, and only because she had decided in advance that it would be.",
        textId: "Pelatihnya berkata setelahnya bahwa lintasan delapan jadi keuntungan bagi tepat satu perenang di kolam itu — dan hanya karena perenang itu memutuskan lebih dulu bahwa lintasan itu akan jadi keuntungan."
      },
      {
        illustrationSeed: "laneeight-9",
        textEn: "Tias qualified into lane five the following season, with swimmers on both sides. She says it is much easier and much less interesting, and she still swims the second half faster.",
        textId: "Musim berikutnya Tias lolos ke lintasan lima, dengan perenang di kedua sisinya. Ia bilang itu jauh lebih mudah dan jauh kurang menarik, dan ia masih berenang paruh kedua lebih cepat."
      }
    ],
    quiz: [
      {
        questionEn: "Who gets lane eight?",
        questionId: "Siapa yang mendapat lintasan delapan?",
        optionsEn: ["The fastest qualifier", "The slowest qualifier", "The youngest", "It is random"],
        optionsId: ["Perenang lolos tercepat", "Perenang lolos paling lambat", "Yang termuda", "Diundi"],
        correctIndex: 1
      },
      {
        questionEn: "What was unusual about Tias's plan?",
        questionId: "Apa yang tak lazim dari rencana Tias?",
        optionsEn: ["She started fastest", "She swam the second half faster than the first", "She did not turn", "She swam underwater"],
        optionsId: ["Ia berangkat paling cepat", "Ia berenang paruh kedua lebih cepat dari paruh pertama", "Ia tidak berbalik", "Ia berenang di bawah air"],
        correctIndex: 1
      },
      {
        questionEn: "Where did she finish?",
        questionId: "Di posisi berapa ia finis?",
        optionsEn: ["First", "Fourth", "Eighth", "She did not finish"],
        optionsId: ["Pertama", "Keempat", "Kedelapan", "Ia tidak finis"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-drum-that-was-out-of-tune",
    titleEn: "The Drum That Was Out of Tune",
    titleId: "Gendang yang Fals",
    descriptionEn: "One drum in the gamelan set had been wrong for forty years. When they finally fixed it, the whole village said it sounded worse.",
    descriptionId: "Satu gendang dalam perangkat gamelan itu sudah fals selama empat puluh tahun. Ketika akhirnya diperbaiki, seluruh desa bilang bunyinya jadi lebih jelek.",
    categorySlug: "music-rhymes",
    authorSlug: "siti-aminah",
    coverEmoji: "🥁",
    coverPalette: "sunset",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "outoftunedrum-1",
        textEn: "The village gamelan set was old. One of the bronze keys — the fourth one along on the middle instrument — was slightly flat, and had been for at least forty years.",
        textId: "Perangkat gamelan desa itu sudah tua. Salah satu bilah perunggunya — bilah keempat pada instrumen tengah — nadanya sedikit turun, dan sudah begitu setidaknya selama empat puluh tahun."
      },
      {
        illustrationSeed: "outoftunedrum-2",
        textEn: "Everybody knew. It was mentioned about once a year, usually by a visitor, and the village would agree that yes, one day, somebody really should get that seen to.",
        textId: "Semua orang tahu. Hal itu disinggung kira-kira setahun sekali, biasanya oleh tamu, dan warga desa akan sepakat bahwa ya, suatu hari nanti, seseorang memang harus mengurusnya."
      },
      {
        illustrationSeed: "outoftunedrum-3",
        textEn: "In the sixtieth year a grant arrived, and a bronze specialist came from the city, and he took the key away and brought it back four weeks later tuned exactly right.",
        textId: "Pada tahun keenam puluh datanglah bantuan dana, dan seorang ahli perunggu datang dari kota, dan ia membawa bilah itu pergi lalu mengembalikannya empat pekan kemudian dengan nada yang benar-benar tepat."
      },
      {
        illustrationSeed: "outoftunedrum-4",
        textEn: "They played the first piece that evening. It was correct. Every note was where it should be. And every single person in the room thought it sounded wrong, and nobody wanted to say so.",
        textId: "Mereka memainkan lagu pertama malam itu. Nadanya benar. Setiap nada berada di tempat seharusnya. Dan setiap orang di ruangan itu merasa bunyinya salah, dan tak ada yang mau mengatakannya."
      },
      {
        illustrationSeed: "outoftunedrum-5",
        textEn: "Pak Wardi, who was seventy-eight and had played that set since he was nine, said it out loud eventually. He said: \"That is not our sound. That is somebody's sound. It is not ours.\"",
        textId: "Pak Wardi, umur tujuh puluh delapan tahun dan sudah memainkan perangkat itu sejak umur sembilan, akhirnya mengatakannya keras-keras. Ia berkata: \"Itu bukan suara kita. Itu suara siapa saja. Bukan suara kita.\""
      },
      {
        illustrationSeed: "outoftunedrum-6",
        textEn: "Here is the thing. Every player in that village had learned every piece with that flat note in it. Their ears had been built around it. Forty years of music had grown into the shape of one small mistake.",
        textId: "Begini masalahnya. Setiap pemain di desa itu mempelajari setiap lagu dengan nada turun itu di dalamnya. Telinga mereka terbentuk di sekelilingnya. Empat puluh tahun musik telah tumbuh mengikuti bentuk satu kesalahan kecil."
      },
      {
        illustrationSeed: "outoftunedrum-7",
        textEn: "There was a long argument. The young players said correct is correct. The old players said the recordings of their grandparents have that note in them. Both sides were completely right.",
        textId: "Terjadilah perdebatan panjang. Pemain muda bilang yang benar tetaplah yang benar. Pemain tua bilang rekaman kakek-nenek mereka mengandung nada itu. Kedua pihak sepenuhnya benar."
      },
      {
        illustrationSeed: "outoftunedrum-8",
        textEn: "They solved it the way villages solve things, which is by refusing to choose. The tuned key stays in the set. The old key was not thrown away. It is in a wooden box, and for two ceremonies a year they put it back in.",
        textId: "Mereka menyelesaikannya dengan cara desa menyelesaikan sesuatu, yaitu dengan menolak memilih. Bilah yang sudah disetel tetap dalam perangkat. Bilah lama tidak dibuang. Ia disimpan dalam kotak kayu, dan pada dua upacara setiap tahun mereka memasangnya kembali."
      },
      {
        illustrationSeed: "outoftunedrum-9",
        textEn: "Visitors at those two ceremonies always say the gamelan sounds slightly odd. The village agrees with them politely and does not explain. It is not really a thing you can explain in an evening.",
        textId: "Tamu-tamu di dua upacara itu selalu bilang gamelannya terdengar agak aneh. Warga desa mengiyakan dengan sopan dan tidak menjelaskan. Itu bukan hal yang benar-benar bisa dijelaskan dalam satu malam."
      }
    ],
    quiz: [
      {
        questionEn: "What was wrong with the gamelan?",
        questionId: "Apa yang salah pada gamelan itu?",
        optionsEn: ["It was broken", "One key was slightly flat", "It was too loud", "It was missing a key"],
        optionsId: ["Ia rusak", "Satu bilah nadanya sedikit turun", "Terlalu keras", "Ada bilah yang hilang"],
        correctIndex: 1
      },
      {
        questionEn: "Why did the corrected version sound wrong?",
        questionId: "Mengapa versi yang sudah dibetulkan terdengar salah?",
        optionsEn: ["The specialist made a mistake", "Everybody had learned the music with the flat note in it", "The bronze was new", "It was played badly"],
        optionsId: ["Ahlinya keliru", "Semua orang mempelajari musiknya dengan nada turun itu", "Perunggunya baru", "Dimainkan dengan buruk"],
        correctIndex: 1
      },
      {
        questionEn: "How did they solve it?",
        questionId: "Bagaimana mereka menyelesaikannya?",
        optionsEn: ["Threw the old key away", "Kept both, and put the old key back for two ceremonies a year", "Stopped playing", "Bought a new set"],
        optionsId: ["Membuang bilah lamanya", "Menyimpan keduanya, dan memasang bilah lama pada dua upacara setahun", "Berhenti bermain", "Membeli perangkat baru"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-lantern-that-was-not-lit",
    titleEn: "The Lantern That Was Not Lit",
    titleId: "Lampion yang Tidak Dinyalakan",
    descriptionEn: "Every house on the lane hung a lit lantern for the festival. Number eleven hung one and left it dark, every year, and nobody asked why until Adi did.",
    descriptionId: "Setiap rumah di gang itu menggantung lampion menyala untuk perayaan. Rumah nomor sebelas menggantung satu dan membiarkannya gelap, setiap tahun, dan tak ada yang bertanya sampai Adi bertanya.",
    categorySlug: "holidays-culture",
    authorSlug: "siti-aminah",
    coverEmoji: "🏮",
    coverPalette: "night",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "unlitlantern-1",
        textEn: "For the festival, every house on the lane hung a paper lantern above the door and lit it at dusk. Thirty-one houses. Thirty warm orange lights and one that stayed dark.",
        textId: "Untuk perayaan itu, setiap rumah di gang menggantung lampion kertas di atas pintu dan menyalakannya saat senja. Tiga puluh satu rumah. Tiga puluh cahaya jingga yang hangat dan satu yang tetap gelap."
      },
      {
        illustrationSeed: "unlitlantern-2",
        textEn: "Number eleven, Ibu Sri's house, hung a lantern like everybody else. Same paper, same hook, same care in the folding. She simply never put a candle in it.",
        textId: "Rumah nomor sebelas, rumah Ibu Sri, menggantung lampion seperti yang lain. Kertas yang sama, gantungan yang sama, kerapian melipat yang sama. Ia hanya tak pernah memasang lilin di dalamnya."
      },
      {
        illustrationSeed: "unlitlantern-3",
        textEn: "Children make up explanations for things adults do not explain. The story among the children of the lane was that Ibu Sri did not like the festival. This was not true and it made her sad.",
        textId: "Anak-anak mengarang penjelasan untuk hal yang tidak dijelaskan orang dewasa. Cerita yang beredar di antara anak-anak gang itu adalah Ibu Sri tidak suka perayaan itu. Itu tidak benar dan itu membuatnya sedih."
      },
      {
        illustrationSeed: "unlitlantern-4",
        textEn: "Adi was nine and had been told four times not to bother her about it. On the fifth year he went and knocked on the door and asked, politely, in the afternoon, before the lights went on.",
        textId: "Adi berumur sembilan tahun dan sudah empat kali dilarang mengganggunya soal itu. Pada tahun kelima ia mengetuk pintu dan bertanya dengan sopan, pada sore hari, sebelum lampu-lampu dinyalakan."
      },
      {
        illustrationSeed: "unlitlantern-5",
        textEn: "Ibu Sri asked him in and gave him a glass of water and told him. Her son had gone to sea at nineteen and had not come back, and there had never been any news either way, and that was thirty-one years ago.",
        textId: "Ibu Sri mempersilakannya masuk, memberinya segelas air, lalu menceritakannya. Putranya pergi melaut pada umur sembilan belas dan tak pernah kembali, dan tak pernah ada kabar apa pun ke arah mana pun, dan itu tiga puluh satu tahun lalu."
      },
      {
        illustrationSeed: "unlitlantern-6",
        textEn: "In her family's custom, the lantern is lit by the youngest person in the house. She hangs it every year because it is his lantern and it belongs above the door. She does not light it because she is not the one who lights it.",
        textId: "Dalam adat keluarganya, lampion dinyalakan oleh orang termuda di rumah. Ia menggantungnya setiap tahun karena itu lampion putranya dan tempatnya memang di atas pintu. Ia tidak menyalakannya karena bukan dia yang seharusnya menyalakannya."
      },
      {
        illustrationSeed: "unlitlantern-7",
        textEn: "Adi thought about this for four days. Then he went back, on the afternoon of the festival, and said: \"I am the youngest person on this lane. May I come and light it?\"",
        textId: "Adi memikirkannya selama empat hari. Lalu ia kembali, pada sore hari perayaan, dan berkata: \"Saya orang termuda di gang ini. Boleh saya datang dan menyalakannya?\""
      },
      {
        illustrationSeed: "unlitlantern-8",
        textEn: "She said no. She said it kindly and she meant it and she explained why: it is not a rule about age. It is a rule about whose house it is, and Adi's house is number nineteen.",
        textId: "Ia menjawab tidak. Ia mengatakannya dengan lembut dan sungguh-sungguh, lalu menjelaskan alasannya: itu bukan aturan soal umur. Itu aturan soal rumah siapa, dan rumah Adi nomor sembilan belas."
      },
      {
        illustrationSeed: "unlitlantern-9",
        textEn: "So Adi did the only other thing available. He told the other children the true story, and the year after that, thirty houses lit their lanterns and thirty families knew exactly what the dark one meant.",
        textId: "Maka Adi melakukan satu-satunya hal lain yang bisa ia lakukan. Ia menceritakan kisah sebenarnya pada anak-anak lain, dan tahun berikutnya, tiga puluh rumah menyalakan lampionnya dan tiga puluh keluarga tahu persis apa arti lampion yang gelap itu."
      }
    ],
    quiz: [
      {
        questionEn: "What did Ibu Sri do every year?",
        questionId: "Apa yang Ibu Sri lakukan setiap tahun?",
        optionsEn: ["Nothing", "Hung a lantern but never lit it", "Lit two lanterns", "Took the lantern down"],
        optionsId: ["Tidak ada", "Menggantung lampion tapi tak pernah menyalakannya", "Menyalakan dua lampion", "Menurunkan lampionnya"],
        correctIndex: 1
      },
      {
        questionEn: "Why did she not light it?",
        questionId: "Mengapa ia tidak menyalakannya?",
        optionsEn: ["She disliked the festival", "In her custom the youngest in the house lights it, and her son never came home", "She had no candles", "It was broken"],
        optionsId: ["Ia tidak suka perayaannya", "Dalam adatnya, orang termuda di rumah yang menyalakan, dan putranya tak pernah pulang", "Ia tak punya lilin", "Lampionnya rusak"],
        correctIndex: 1
      },
      {
        questionEn: "What did Adi do in the end?",
        questionId: "Apa yang akhirnya Adi lakukan?",
        optionsEn: ["Lit it himself", "Told the other children the true story", "Took the lantern", "Nothing"],
        optionsId: ["Menyalakannya sendiri", "Menceritakan kisah sebenarnya pada anak-anak lain", "Mengambil lampionnya", "Tidak melakukan apa-apa"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-word-that-does-not-translate",
    titleEn: "The Word That Does Not Translate",
    titleId: "Kata yang Tak Bisa Diterjemahkan",
    descriptionEn: "Mei's grandmother used a word for a feeling that has no English equivalent. Mei spent a year trying to explain it to her class.",
    descriptionId: "Nenek Mei memakai satu kata untuk sebuah perasaan yang tak ada padanannya dalam bahasa Inggris. Mei menghabiskan setahun mencoba menjelaskannya pada kelasnya.",
    categorySlug: "world-cultures",
    authorSlug: "emily-clark",
    coverEmoji: "💬",
    coverPalette: "candy",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "untranslatable-1",
        textEn: "Mei's grandmother had a word she used about four times a year, always in the same kind of moment, and Mei had grown up knowing exactly what it meant and never once needing to define it.",
        textId: "Nenek Mei punya satu kata yang ia pakai kira-kira empat kali setahun, selalu dalam momen sejenis, dan Mei tumbuh besar dengan tahu persis artinya tanpa sekali pun perlu mendefinisikannya."
      },
      {
        illustrationSeed: "untranslatable-2",
        textEn: "The moment was this: when something good is happening and you are already sad because it is going to end. Not during. Not after. During, but with the after already inside it.",
        textId: "Momennya begini: ketika sesuatu yang baik sedang terjadi dan kau sudah sedih karena itu akan berakhir. Bukan saat sedang berlangsung. Bukan setelahnya. Saat berlangsung, tapi dengan \"setelahnya\" sudah ada di dalamnya."
      },
      {
        illustrationSeed: "untranslatable-3",
        textEn: "In class, Bu Dini asked everybody to bring in a word from home. Mei brought hers. Then she had to explain it, and discovered that she could not, and that this was extremely annoying.",
        textId: "Di kelas, Bu Dini meminta semua orang membawa satu kata dari rumah. Mei membawa kata itu. Lalu ia harus menjelaskannya, dan mendapati bahwa ia tak bisa — dan itu sangat menjengkelkan."
      },
      {
        illustrationSeed: "untranslatable-4",
        textEn: "She tried \"sad\". Not sad. She tried \"nostalgia\". Nostalgia is about the past and this word is about right now. She tried \"bittersweet\", which was the closest, and it was still wrong.",
        textId: "Ia mencoba \"sedih\". Bukan sedih. Ia mencoba \"nostalgia\". Nostalgia tentang masa lalu, sementara kata ini tentang saat ini. Ia mencoba \"manis-pahit\", yang paling mendekati, dan itu pun masih keliru."
      },
      {
        illustrationSeed: "untranslatable-5",
        textEn: "In the end she gave up on defining it and described a situation instead. \"It is the last afternoon of the holidays,\" she said, \"and it is a really good afternoon, and that is why it hurts.\"",
        textId: "Akhirnya ia menyerah mendefinisikannya dan justru menggambarkan sebuah situasi. \"Ini sore terakhir liburan,\" katanya, \"dan sorenya benar-benar menyenangkan, dan justru karena itulah rasanya sakit.\""
      },
      {
        illustrationSeed: "untranslatable-6",
        textEn: "Every single person in the room understood immediately. Eleven of them said they had felt it that week. Four of them said they had thought it was something wrong with them.",
        textId: "Setiap orang di ruangan itu langsung paham. Sebelas orang bilang mereka merasakannya pekan itu. Empat orang bilang mereka mengira ada yang salah dengan diri mereka."
      },
      {
        illustrationSeed: "untranslatable-7",
        textEn: "That is the useful part. A word does not create a feeling — everybody already had this one. What the word does is tell you that other people have it too, and that it is common enough to be worth naming.",
        textId: "Itulah bagian yang bergunanya. Sebuah kata tidak menciptakan perasaan — semua orang sudah memilikinya. Yang dilakukan kata itu adalah memberi tahumu bahwa orang lain juga memilikinya, dan bahwa itu cukup umum sampai layak diberi nama."
      },
      {
        illustrationSeed: "untranslatable-8",
        textEn: "Bu Dini's class collected forty-one words that year, from eleven languages, most of them for things there is no single English word for. They put them on the back wall on cards.",
        textId: "Kelas Bu Dini mengumpulkan empat puluh satu kata tahun itu, dari sebelas bahasa, kebanyakan untuk hal-hal yang tak punya satu kata dalam bahasa Inggris. Mereka menempelkannya di dinding belakang pada kartu-kartu."
      },
      {
        illustrationSeed: "untranslatable-9",
        textEn: "Mei's grandmother came in to see the wall. She read all forty-one cards, slowly, and then said something Mei has never forgotten: \"So that is what everybody else has been calling it.\"",
        textId: "Nenek Mei datang melihat dinding itu. Beliau membaca keempat puluh satu kartunya, perlahan, lalu mengatakan sesuatu yang tak pernah Mei lupakan: \"Oh, jadi begitu orang lain menyebutnya selama ini.\""
      }
    ],
    quiz: [
      {
        questionEn: "What did the word describe?",
        questionId: "Kata itu menggambarkan apa?",
        optionsEn: ["Missing the past", "Being sad during something good because it will end", "Being angry", "Being tired"],
        optionsId: ["Merindukan masa lalu", "Sedih saat sesuatu yang baik berlangsung karena ia akan berakhir", "Marah", "Lelah"],
        correctIndex: 1
      },
      {
        questionEn: "How did Mei finally explain it?",
        questionId: "Bagaimana akhirnya Mei menjelaskannya?",
        optionsEn: ["With a dictionary", "By describing the last afternoon of the holidays", "She never did", "With a drawing"],
        optionsId: ["Dengan kamus", "Dengan menggambarkan sore terakhir liburan", "Ia tak pernah berhasil", "Dengan gambar"],
        correctIndex: 1
      },
      {
        questionEn: "What does a word actually do, according to the story?",
        questionId: "Menurut cerita ini, apa sebenarnya fungsi sebuah kata?",
        optionsEn: ["Creates the feeling", "Tells you other people have it too", "Makes it stronger", "Removes it"],
        optionsId: ["Menciptakan perasaannya", "Memberi tahu bahwa orang lain juga merasakannya", "Membuatnya lebih kuat", "Menghilangkannya"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-boy-who-would-not-drink-water",
    titleEn: "The Boy Who Would Not Drink Water",
    titleId: "Anak yang Tak Mau Minum Air",
    descriptionEn: "Faris had a headache every afternoon for two years. Four doctors found nothing. The answer was in his school bag the whole time.",
    descriptionId: "Faris sakit kepala setiap sore selama dua tahun. Empat dokter tak menemukan apa pun. Jawabannya ada di dalam tas sekolahnya selama ini.",
    categorySlug: "health-body",
    authorSlug: "sarah-johnson",
    coverEmoji: "💧",
    coverPalette: "sky",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "farisheadache-1",
        textEn: "Faris got a headache at about two in the afternoon nearly every school day. Not a bad one. A dull, grey one, that made the last two lessons feel twice as long.",
        textId: "Faris sakit kepala sekitar pukul dua siang hampir setiap hari sekolah. Bukan sakit yang parah. Sakit yang tumpul dan kelabu, yang membuat dua jam pelajaran terakhir terasa dua kali lebih panjang."
      },
      {
        illustrationSeed: "farisheadache-2",
        textEn: "This went on for two years. He was taken to four different doctors, who checked his eyes, his ears, his blood and his sleep, and found absolutely nothing wrong with any of them.",
        textId: "Ini berlangsung dua tahun. Ia dibawa ke empat dokter berbeda, yang memeriksa matanya, telinganya, darahnya, dan tidurnya, dan sama sekali tak menemukan yang salah pada satu pun."
      },
      {
        illustrationSeed: "farisheadache-3",
        textEn: "It was the school nurse, Bu Ratna, who found it, and she found it by asking a question none of the doctors had asked: \"How much do you drink between breakfast and going home?\"",
        textId: "Perawat sekolah, Bu Ratna, yang menemukannya — dan ia menemukannya dengan mengajukan pertanyaan yang tak diajukan satu pun dokter: \"Berapa banyak kamu minum antara sarapan dan pulang sekolah?\""
      },
      {
        illustrationSeed: "farisheadache-4",
        textEn: "The honest answer was: nothing. Not one mouthful, for six and a half hours, five days a week, for two years.",
        textId: "Jawaban jujurnya: tidak ada. Tidak seteguk pun, selama enam setengah jam, lima hari sepekan, selama dua tahun."
      },
      {
        illustrationSeed: "farisheadache-5",
        textEn: "He had a water bottle. It went to school full and came home full. The reason was not that he was not thirsty. The reason was that he did not want to ask to go to the toilet during a lesson.",
        textId: "Ia punya botol air. Botol itu berangkat penuh dan pulang tetap penuh. Alasannya bukan karena ia tidak haus. Alasannya karena ia tak mau minta izin ke toilet saat pelajaran berlangsung."
      },
      {
        illustrationSeed: "farisheadache-6",
        textEn: "So the two-year headache was not a medical mystery. It was a nine-year-old being too embarrassed to put his hand up, and then being thirsty for six hours a day for the whole of year three and four.",
        textId: "Jadi sakit kepala dua tahun itu bukan misteri medis. Itu seorang anak sembilan tahun yang terlalu malu mengangkat tangan, lalu kehausan enam jam sehari sepanjang kelas tiga dan kelas empat."
      },
      {
        illustrationSeed: "farisheadache-7",
        textEn: "Bu Ratna did two things. She told Faris to drink, obviously. And then she went to the staff meeting and raised the actual problem, which was not about Faris at all.",
        textId: "Bu Ratna melakukan dua hal. Ia menyuruh Faris minum, tentu saja. Lalu ia pergi ke rapat guru dan mengangkat masalah yang sebenarnya, yang sama sekali bukan tentang Faris."
      },
      {
        illustrationSeed: "farisheadache-8",
        textEn: "The school changed the rule. You do not ask to go; you take the wooden pass from the hook by the door and go, and come back. No hand up. No explaining in front of thirty people.",
        textId: "Sekolah mengubah aturannya. Kamu tidak perlu minta izin; kamu ambil kartu kayu dari gantungan dekat pintu, pergi, lalu kembali. Tanpa mengangkat tangan. Tanpa menjelaskan di depan tiga puluh orang."
      },
      {
        illustrationSeed: "farisheadache-9",
        textEn: "Faris's headaches stopped in eleven days. So, quietly, did four other children's. Nobody had ever counted them, because nobody had known there was anything to count.",
        textId: "Sakit kepala Faris berhenti dalam sebelas hari. Begitu pula, diam-diam, sakit kepala empat anak lain. Tak ada yang pernah menghitungnya, karena tak ada yang tahu ada sesuatu yang perlu dihitung."
      }
    ],
    quiz: [
      {
        questionEn: "What question did Bu Ratna ask?",
        questionId: "Pertanyaan apa yang Bu Ratna ajukan?",
        optionsEn: ["Do you sleep well?", "How much do you drink at school?", "Do your eyes hurt?", "Are you worried?"],
        optionsId: ["Apa kamu tidur nyenyak?", "Berapa banyak kamu minum di sekolah?", "Apa matamu sakit?", "Apa kamu cemas?"],
        correctIndex: 1
      },
      {
        questionEn: "Why did Faris not drink?",
        questionId: "Mengapa Faris tidak minum?",
        optionsEn: ["He was not thirsty", "He did not want to ask to go to the toilet in class", "He had no bottle", "The water tasted bad"],
        optionsId: ["Ia tidak haus", "Ia tak mau minta izin ke toilet saat pelajaran", "Ia tak punya botol", "Airnya tidak enak"],
        correctIndex: 1
      },
      {
        questionEn: "What did the school change?",
        questionId: "Apa yang sekolah ubah?",
        optionsEn: ["Lesson times", "A wooden pass by the door, so nobody has to ask", "Water bottles", "The nurse's room"],
        optionsId: ["Jam pelajaran", "Kartu kayu di dekat pintu, agar tak perlu minta izin", "Botol air", "Ruang perawat"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-nurse-who-wrote-everything-down",
    titleEn: "The Nurse Who Wrote Everything Down",
    titleId: "Perawat yang Mencatat Segalanya",
    descriptionEn: "Based on true events. In a hospital with no data, one nurse recorded every case in a notebook for nine years — and proved where the illness was coming from.",
    descriptionId: "Berdasarkan peristiwa nyata. Di rumah sakit tanpa data, seorang perawat mencatat setiap kasus dalam buku selama sembilan tahun — dan membuktikan dari mana penyakit itu berasal.",
    categorySlug: "true-stories",
    authorSlug: "emily-clark",
    coverEmoji: "📓",
    coverPalette: "citrus",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "nursenotebook-1",
        textEn: "The district hospital had eleven beds, two doctors and no records worth the name. When somebody came in, they were treated, and when they went home, that was the end of it.",
        textId: "Rumah sakit kecamatan itu punya sebelas ranjang, dua dokter, dan tak punya catatan yang layak disebut catatan. Ketika ada yang datang, mereka dirawat, dan ketika mereka pulang, selesai sudah."
      },
      {
        illustrationSeed: "nursenotebook-2",
        textEn: "A nurse called Suster Mariam started writing things down. Not because anybody asked. She wrote the date, the village, the age, and what was wrong, in a ruled notebook, for every single patient.",
        textId: "Seorang perawat bernama Suster Mariam mulai mencatat. Bukan karena ada yang meminta. Ia menulis tanggal, desa asal, umur, dan keluhannya, dalam buku bergaris, untuk setiap pasien tanpa kecuali."
      },
      {
        illustrationSeed: "nursenotebook-3",
        textEn: "It took her about forty seconds per patient. Over nine years that is a very large number of forty seconds, and it is also nine years of something that did not otherwise exist.",
        textId: "Butuh sekitar empat puluh detik per pasien. Selama sembilan tahun itu jadi sangat banyak empat puluh detik, dan itu juga sembilan tahun catatan atas sesuatu yang tanpanya tidak akan pernah ada."
      },
      {
        illustrationSeed: "nursenotebook-4",
        textEn: "In the ninth year there was an outbreak of a stomach illness. Children mostly. Everybody assumed it was the market, because that is what everybody always assumes.",
        textId: "Pada tahun kesembilan terjadi wabah penyakit perut. Kebanyakan anak-anak. Semua orang mengira penyebabnya pasar, karena itulah yang selalu diduga semua orang."
      },
      {
        illustrationSeed: "nursenotebook-5",
        textEn: "Suster Mariam went home and sat with her notebooks and did what nobody else in the district could do: she counted. Not this month's cases. Nine years of cases, by village, by month.",
        textId: "Suster Mariam pulang, duduk bersama buku-buku catatannya, dan melakukan apa yang tak bisa dilakukan siapa pun di kecamatan itu: ia menghitung. Bukan kasus bulan itu. Sembilan tahun kasus, per desa, per bulan."
      },
      {
        illustrationSeed: "nursenotebook-6",
        textEn: "The pattern came out immediately. Cases were not spread across the district. They came from four villages, all four downstream of the same point on the same river, and they spiked every year after heavy rain.",
        textId: "Polanya langsung terlihat. Kasus-kasus itu tidak tersebar merata di kecamatan. Semuanya datang dari empat desa, keempatnya berada di hilir dari titik yang sama di sungai yang sama, dan angkanya melonjak setiap tahun setelah hujan deras."
      },
      {
        illustrationSeed: "nursenotebook-7",
        textEn: "That is not a guess. Four villages, nine years, the same spike every wet season, and no spike at all in the eleven villages upstream. Nine years of forty seconds had produced a proof.",
        textId: "Itu bukan tebakan. Empat desa, sembilan tahun, lonjakan yang sama setiap musim hujan, dan sama sekali tak ada lonjakan di sebelas desa di hulu. Sembilan tahun dari empat puluh detik telah menghasilkan sebuah bukti."
      },
      {
        illustrationSeed: "nursenotebook-8",
        textEn: "The problem was a broken sanitation pipe upstream that flooded into the river above those four villages. It had been broken for years. Fixing it took eleven days once anybody knew where to look.",
        textId: "Masalahnya adalah pipa sanitasi yang rusak di hulu, yang meluap ke sungai di atas keempat desa itu. Ia sudah rusak bertahun-tahun. Memperbaikinya butuh sebelas hari begitu ada yang tahu di mana harus mencari."
      },
      {
        illustrationSeed: "nursenotebook-9",
        textEn: "Suster Mariam did not think of herself as a scientist and did not use the word data. She thought she was being tidy. Being tidy for nine years turns out to be one of the more powerful things a person can do.",
        textId: "Suster Mariam tak menganggap dirinya ilmuwan dan tak pernah memakai kata data. Ia merasa hanya sedang bersikap rapi. Bersikap rapi selama sembilan tahun ternyata salah satu hal paling berkuasa yang bisa dilakukan seseorang."
      }
    ],
    quiz: [
      {
        questionEn: "What did Suster Mariam write down?",
        questionId: "Apa yang Suster Mariam catat?",
        optionsEn: ["Only serious cases", "Date, village, age and illness for every patient", "Her own notes", "Doctors' names"],
        optionsId: ["Hanya kasus berat", "Tanggal, desa, umur, dan penyakit setiap pasien", "Catatan pribadinya", "Nama para dokter"],
        correctIndex: 1
      },
      {
        questionEn: "What did the nine years of records show?",
        questionId: "Apa yang ditunjukkan catatan sembilan tahun itu?",
        optionsEn: ["Nothing useful", "Cases came from four villages downstream of one point, spiking after rain", "The market was to blame", "Cases were random"],
        optionsId: ["Tidak ada yang berguna", "Kasus datang dari empat desa di hilir satu titik, melonjak setelah hujan", "Pasarlah penyebabnya", "Kasusnya acak"],
        correctIndex: 1
      },
      {
        questionEn: "What was the actual cause?",
        questionId: "Apa penyebab sebenarnya?",
        optionsEn: ["The market", "A broken sanitation pipe upstream", "The weather", "Nobody found out"],
        optionsId: ["Pasar", "Pipa sanitasi rusak di hulu", "Cuaca", "Tak pernah diketahui"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-brother-who-came-back",
    titleEn: "The Brother Who Came Back",
    titleId: "Kakak yang Kembali",
    descriptionEn: "Ilham left for the city when Nia was four. He came home when she was eleven, and neither of them knew how to talk to the other.",
    descriptionId: "Ilham pergi ke kota saat Nia berumur empat tahun. Ia pulang saat Nia sebelas, dan keduanya tak tahu bagaimana harus bicara satu sama lain.",
    categorySlug: "family",
    authorSlug: "siti-aminah",
    coverEmoji: "🏠",
    coverPalette: "sunset",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "brotherback-1",
        textEn: "Nia's brother Ilham went to work in the city when she was four. She remembered him the way you remember someone from photographs: as a shape, a laugh, and one very specific memory about a kite.",
        textId: "Kakak Nia, Ilham, pergi bekerja ke kota saat Nia berumur empat tahun. Ia mengingat kakaknya seperti orang mengingat seseorang dari foto: sebagai sebuah sosok, sebuah tawa, dan satu ingatan yang sangat spesifik tentang layang-layang."
      },
      {
        illustrationSeed: "brotherback-2",
        textEn: "He sent money every month for seven years and came home for four days a year, during which everybody was so pleased to see him that nobody actually spoke to him.",
        textId: "Ia mengirim uang setiap bulan selama tujuh tahun dan pulang empat hari setahun — hari-hari saat semua orang begitu senang melihatnya sampai tak seorang pun benar-benar mengobrol dengannya."
      },
      {
        illustrationSeed: "brotherback-3",
        textEn: "Then the factory closed and he came home for good, with two bags, and the house had to be a house with him in it every day rather than four days a year.",
        textId: "Lalu pabriknya tutup dan ia pulang untuk seterusnya, dengan dua tas, dan rumah itu harus jadi rumah dengan dia di dalamnya setiap hari, bukan cuma empat hari setahun."
      },
      {
        illustrationSeed: "brotherback-4",
        textEn: "It was awkward for eleven weeks. He did not know the rules of the house any more. She did not know how to be a sister to a twenty-four-year-old man. They were polite to each other, which was the worst part.",
        textId: "Suasananya canggung selama sebelas pekan. Ia tak lagi mengenal aturan rumah itu. Nia tak tahu bagaimana jadi adik bagi lelaki dua puluh empat tahun. Mereka saling bersikap sopan — dan itulah bagian terburuknya."
      },
      {
        illustrationSeed: "brotherback-5",
        textEn: "What broke it was completely accidental. He found a broken kite in the store room, the one from her one clear memory, and asked whether she wanted to fix it, and she said yes before she had decided to.",
        textId: "Yang memecahkan kebekuan itu benar-benar tak sengaja. Ia menemukan layang-layang rusak di gudang, layang-layang dari satu-satunya ingatan jelasnya, dan bertanya apakah Nia mau memperbaikinya, dan Nia menjawab ya bahkan sebelum ia memutuskannya."
      },
      {
        illustrationSeed: "brotherback-6",
        textEn: "It took them four evenings. Almost none of that time was spent talking about anything important. They talked about bamboo, and glue, and whether the tail was too heavy, which it was.",
        textId: "Butuh empat malam. Hampir tak ada waktu itu dipakai membicarakan hal penting. Mereka membicarakan bambu, dan lem, dan apakah ekornya terlalu berat — dan memang terlalu berat."
      },
      {
        illustrationSeed: "brotherback-7",
        textEn: "That turns out to be how it works. You cannot sit two people down and instruct them to know each other. You have to give them a task that takes four evenings and lets them look at the task instead of at each other.",
        textId: "Ternyata begitulah caranya. Kau tak bisa mendudukkan dua orang lalu menyuruh mereka saling mengenal. Kau harus memberi mereka satu pekerjaan yang butuh empat malam dan membuat mereka menatap pekerjaan itu, bukan saling menatap."
      },
      {
        illustrationSeed: "brotherback-8",
        textEn: "By the fourth evening he was telling her about the city, properly, including the parts that had been hard, which he had never told their parents and still has not.",
        textId: "Menjelang malam keempat ia bercerita padanya tentang kota, sungguh-sungguh, termasuk bagian-bagian yang berat — yang tak pernah ia ceritakan pada orang tua mereka dan sampai kini belum."
      },
      {
        illustrationSeed: "brotherback-9",
        textEn: "The kite flies badly. The tail is still too heavy and they both know it and neither of them has fixed it, because fixing it would finish the job, and the job is not really about the kite.",
        textId: "Layang-layang itu terbangnya buruk. Ekornya masih terlalu berat dan keduanya tahu itu dan tak satu pun memperbaikinya, karena memperbaikinya berarti menyelesaikan pekerjaan itu — dan pekerjaan itu sebenarnya bukan tentang layang-layang."
      }
    ],
    quiz: [
      {
        questionEn: "How old was Nia when Ilham left?",
        questionId: "Berapa umur Nia saat Ilham pergi?",
        optionsEn: ["Eleven", "Four", "Seven", "Nine"],
        optionsId: ["Sebelas", "Empat", "Tujuh", "Sembilan"],
        correctIndex: 1
      },
      {
        questionEn: "What broke the awkwardness?",
        questionId: "Apa yang memecahkan kecanggungan itu?",
        optionsEn: ["A long talk", "Fixing a broken kite together over four evenings", "A family meeting", "Their parents"],
        optionsId: ["Obrolan panjang", "Memperbaiki layang-layang rusak bersama selama empat malam", "Rapat keluarga", "Orang tua mereka"],
        correctIndex: 1
      },
      {
        questionEn: "Why have they not fixed the tail?",
        questionId: "Mengapa mereka belum memperbaiki ekornya?",
        optionsEn: ["They cannot", "Finishing the job would end the thing that is not really about the kite", "They forgot", "It flies fine"],
        optionsId: ["Mereka tidak bisa", "Menyelesaikannya akan mengakhiri hal yang sebenarnya bukan tentang layang-layang", "Mereka lupa", "Terbangnya sudah bagus"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-feeling-with-no-name",
    titleEn: "The Feeling With No Name",
    titleId: "Perasaan Tanpa Nama",
    descriptionEn: "Something was wrong with Laras and she could not say what. Her counsellor gave her a list of thirty words, and one of them fitted exactly.",
    descriptionId: "Ada yang tidak beres pada Laras dan ia tak bisa menyebutkan apa. Konselornya memberinya daftar tiga puluh kata, dan satu di antaranya pas persis.",
    categorySlug: "emotions",
    authorSlug: "sarah-johnson",
    coverEmoji: "🫧",
    coverPalette: "twilight",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "nonamefeeling-1",
        textEn: "Laras was not sad. People kept asking whether she was sad and she kept saying no, honestly, because she was not sad and she was not angry and she was definitely not fine.",
        textId: "Laras tidak sedih. Orang-orang terus bertanya apakah ia sedih dan ia terus menjawab tidak, dengan jujur, karena ia memang tidak sedih dan tidak marah dan jelas tidak baik-baik saja."
      },
      {
        illustrationSeed: "nonamefeeling-2",
        textEn: "The problem with having no word for it is that you cannot ask for help. \"Something is wrong and I do not know what\" is a sentence adults find very difficult to do anything useful with.",
        textId: "Masalah tidak punya kata untuk sesuatu adalah kau tak bisa meminta tolong. \"Ada yang tidak beres dan aku tidak tahu apa\" adalah kalimat yang sangat sulit ditindaklanjuti orang dewasa."
      },
      {
        illustrationSeed: "nonamefeeling-3",
        textEn: "The school counsellor, Bu Ayu, did not ask her how she felt. She put a sheet of paper on the table with about thirty words on it and said, \"Cross out the ones that are definitely wrong.\"",
        textId: "Konselor sekolah, Bu Ayu, tidak menanyakan bagaimana perasaannya. Ia meletakkan selembar kertas berisi sekitar tiga puluh kata di meja dan berkata, \"Coret yang jelas-jelas tidak cocok.\""
      },
      {
        illustrationSeed: "nonamefeeling-4",
        textEn: "That is a much easier job. Laras crossed out twenty-one of them in about four minutes. Angry, no. Frightened, no. Jealous, no. Sad, no, and she crossed that one out hard.",
        textId: "Itu pekerjaan yang jauh lebih mudah. Laras mencoret dua puluh satu kata dalam sekitar empat menit. Marah, bukan. Takut, bukan. Iri, bukan. Sedih, bukan — dan ia mencoret yang satu itu kuat-kuat."
      },
      {
        illustrationSeed: "nonamefeeling-5",
        textEn: "Nine words were left. They went through them one at a time. Two of them were close. One of them, when Laras read it, made her put the pen down and sit very still.",
        textId: "Tersisa sembilan kata. Mereka membahasnya satu per satu. Dua di antaranya mendekati. Satu di antaranya, ketika Laras membacanya, membuatnya meletakkan pena dan duduk sangat diam."
      },
      {
        illustrationSeed: "nonamefeeling-6",
        textEn: "The word was \"left out\". Not bullied. Not disliked. Nobody had done anything to her at all. She was simply, quietly, consistently not included, which is a thing that leaves no evidence.",
        textId: "Kata itu adalah \"tersisih\". Bukan dirundung. Bukan dibenci. Sama sekali tak ada yang berbuat apa-apa padanya. Ia hanya, diam-diam dan terus-menerus, tidak diikutsertakan — hal yang tidak meninggalkan bukti apa pun."
      },
      {
        illustrationSeed: "nonamefeeling-7",
        textEn: "That is why she could not name it. There was nothing to point at. Nobody had said a word to her. The whole thing was made of things that had not happened, and you cannot describe an absence to somebody who was not looking for it.",
        textId: "Itulah sebabnya ia tak bisa menamainya. Tak ada yang bisa ditunjuk. Tak ada yang mengucapkan sepatah kata pun padanya. Seluruhnya tersusun dari hal-hal yang tidak terjadi, dan kau tak bisa menggambarkan sebuah ketiadaan pada orang yang tidak mencarinya."
      },
      {
        illustrationSeed: "nonamefeeling-8",
        textEn: "Naming it did not fix it. Bu Ayu said so straight away, which Laras appreciated. But once it had a name, she could tell her mother in one sentence instead of eleven, and her mother understood immediately.",
        textId: "Menamainya tidak menyelesaikannya. Bu Ayu langsung mengatakan itu, dan Laras menghargainya. Tapi begitu ia punya nama, Laras bisa memberi tahu ibunya dalam satu kalimat, bukan sebelas — dan ibunya langsung paham."
      },
      {
        illustrationSeed: "nonamefeeling-9",
        textEn: "Laras keeps the sheet of paper. Twenty-one words crossed out, eight circled lightly, one circled four times. She says it is the most useful piece of paper anybody ever gave her.",
        textId: "Laras menyimpan lembar kertas itu. Dua puluh satu kata dicoret, delapan dilingkari tipis, satu dilingkari empat kali. Ia bilang itu selembar kertas paling berguna yang pernah diberikan orang padanya."
      }
    ],
    quiz: [
      {
        questionEn: "What did Bu Ayu ask Laras to do?",
        questionId: "Apa yang Bu Ayu minta Laras lakukan?",
        optionsEn: ["Explain her feelings", "Cross out the words that were definitely wrong", "Write a story", "Draw a picture"],
        optionsId: ["Menjelaskan perasaannya", "Mencoret kata-kata yang jelas tidak cocok", "Menulis cerita", "Menggambar"],
        correctIndex: 1
      },
      {
        questionEn: "What was the word?",
        questionId: "Kata apa itu?",
        optionsEn: ["Sad", "Left out", "Angry", "Frightened"],
        optionsId: ["Sedih", "Tersisih", "Marah", "Takut"],
        correctIndex: 1
      },
      {
        questionEn: "Why was it so hard to name?",
        questionId: "Mengapa itu begitu sulit dinamai?",
        optionsEn: ["It was rare", "It was made of things that had not happened", "It was too strong", "Nobody had that word"],
        optionsId: ["Karena langka", "Karena tersusun dari hal-hal yang tidak terjadi", "Karena terlalu kuat", "Karena tak ada yang punya kata itu"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-seed-that-took-three-years",
    titleEn: "The Seed That Took Three Years",
    titleId: "Benih yang Butuh Tiga Tahun",
    descriptionEn: "Pak Umar planted a row of seeds that everybody said would never come up. Two years later he was still watering bare soil.",
    descriptionId: "Pak Umar menanam sebaris benih yang menurut semua orang tak akan pernah tumbuh. Dua tahun kemudian ia masih menyirami tanah yang kosong.",
    categorySlug: "farm",
    authorSlug: "emily-clark",
    coverEmoji: "🌱",
    coverPalette: "meadow",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "slowseed-1",
        textEn: "Pak Umar got the seeds from a forestry officer: a hardwood tree that used to grow all over the district and now grew nowhere, because everything had been cut and nothing had been replanted.",
        textId: "Pak Umar mendapat benih itu dari petugas kehutanan: pohon kayu keras yang dulu tumbuh di seluruh kecamatan dan kini tak tumbuh di mana pun, karena semuanya sudah ditebang dan tak ada yang ditanam kembali."
      },
      {
        illustrationSeed: "slowseed-2",
        textEn: "The officer told him honestly what he was getting into. The seeds need a long time in the ground. Sometimes two years. Sometimes three. Sometimes they simply do not.",
        textId: "Petugas itu jujur memberi tahu apa yang akan ia hadapi. Benihnya butuh waktu lama di dalam tanah. Kadang dua tahun. Kadang tiga. Kadang memang tidak tumbuh."
      },
      {
        illustrationSeed: "slowseed-3",
        textEn: "He planted eleven of them along the edge of his top field, in a straight line, with a stick at each end so he would know where they were. Then he watered a strip of empty soil.",
        textId: "Ia menanam sebelas benih di sepanjang tepi ladang atasnya, dalam garis lurus, dengan patok di kedua ujungnya supaya ia tahu di mana letaknya. Lalu ia menyirami sejalur tanah kosong."
      },
      {
        illustrationSeed: "slowseed-4",
        textEn: "For the first six months this was a normal thing to be doing. By month fourteen it had become a village joke, entirely affectionate, about the man who waters nothing.",
        textId: "Dalam enam bulan pertama ini hal yang wajar dilakukan. Menjelang bulan keempat belas ini sudah jadi lelucon desa, sepenuhnya penuh kasih sayang, tentang lelaki yang menyirami ketiadaan."
      },
      {
        illustrationSeed: "slowseed-5",
        textEn: "His grandson Yoga asked him in the second year whether he was sure. Pak Umar said no, he was not sure, and that being sure was not the same as being right and had never been a requirement for doing anything.",
        textId: "Cucunya, Yoga, bertanya pada tahun kedua apakah ia yakin. Pak Umar menjawab tidak, ia tidak yakin, dan bahwa yakin itu tidak sama dengan benar, dan tak pernah jadi syarat untuk mengerjakan apa pun."
      },
      {
        illustrationSeed: "slowseed-6",
        textEn: "Four came up in the third March, within about eleven days of each other. They were the size of a pencil and they had two leaves each and they were, by any measure, extremely unimpressive.",
        textId: "Empat tumbuh pada bulan Maret tahun ketiga, dalam rentang sekitar sebelas hari satu sama lain. Ukurannya sebesar pensil, masing-masing berdaun dua, dan dari segi mana pun sama sekali tak mengesankan."
      },
      {
        illustrationSeed: "slowseed-7",
        textEn: "Seven never came up at all. Pak Umar had expected that and had planted eleven for exactly that reason. Planting more than you need is not optimism. It is arithmetic.",
        textId: "Tujuh lainnya sama sekali tak tumbuh. Pak Umar sudah menduganya dan menanam sebelas justru karena alasan itu. Menanam lebih banyak dari yang dibutuhkan bukan sikap optimis. Itu perhitungan."
      },
      {
        illustrationSeed: "slowseed-8",
        textEn: "The trees are nine years old now and about four metres tall. They will be worth cutting in something like sixty years, which is a length of time Pak Umar was completely clear about from the first day.",
        textId: "Pohon-pohon itu kini berumur sembilan tahun dan tingginya sekitar empat meter. Mereka baru layak ditebang kira-kira enam puluh tahun lagi — rentang waktu yang sepenuhnya Pak Umar pahami sejak hari pertama."
      },
      {
        illustrationSeed: "slowseed-9",
        textEn: "Yoga plants a row every year now, on his own land, and waters bare soil for two or three years like an idiot, and the village makes the same joke about him. He does not mind. He knows how it ends.",
        textId: "Kini Yoga menanam sebaris setiap tahun, di tanahnya sendiri, dan menyirami tanah kosong selama dua atau tiga tahun seperti orang bodoh, dan warga desa membuat lelucon yang sama tentangnya. Ia tidak keberatan. Ia tahu bagaimana akhirnya."
      }
    ],
    quiz: [
      {
        questionEn: "How long can the seeds take?",
        questionId: "Berapa lama benih itu bisa butuh waktu?",
        optionsEn: ["A week", "Two or three years, and sometimes never", "Six months", "Ten years"],
        optionsId: ["Sepekan", "Dua atau tiga tahun, dan kadang tak pernah", "Enam bulan", "Sepuluh tahun"],
        correctIndex: 1
      },
      {
        questionEn: "Why did he plant eleven?",
        questionId: "Mengapa ia menanam sebelas?",
        optionsEn: ["It was his lucky number", "Because most would not come up — it is arithmetic", "He had eleven seeds only", "The officer told him to"],
        optionsId: ["Angka keberuntungannya", "Karena kebanyakan tak akan tumbuh — itu perhitungan", "Ia hanya punya sebelas benih", "Petugasnya menyuruh begitu"],
        correctIndex: 1
      },
      {
        questionEn: "What did Pak Umar say about being sure?",
        questionId: "Apa kata Pak Umar tentang keyakinan?",
        optionsEn: ["He was completely sure", "Being sure is not the same as being right", "You must be sure first", "Nobody can be sure"],
        optionsId: ["Ia sepenuhnya yakin", "Yakin itu tidak sama dengan benar", "Kau harus yakin dulu", "Tak ada yang bisa yakin"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-guest-who-arrived-early",
    titleEn: "The Guest Who Arrived Early",
    titleId: "Tamu yang Datang Kepagian",
    descriptionEn: "Pak Hendra turned up an hour before the party, when the house was chaos. What he did next is the reason he gets invited to everything.",
    descriptionId: "Pak Hendra datang satu jam sebelum acara, ketika rumah masih berantakan. Apa yang ia lakukan setelahnya adalah alasan ia selalu diundang ke mana-mana.",
    categorySlug: "manners",
    authorSlug: "siti-aminah",
    coverEmoji: "🚪",
    coverPalette: "citrus",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "earlyguest-1",
        textEn: "The party was at four. At three o'clock the house looked like a house one hour before a party, which is to say it looked like a disaster with cooking in it.",
        textId: "Acaranya pukul empat. Pukul tiga rumah itu tampak seperti rumah satu jam sebelum acara — artinya tampak seperti bencana yang sedang memasak."
      },
      {
        illustrationSeed: "earlyguest-2",
        textEn: "The doorbell rang. Everybody froze. Ibu Tari, who had flour to her elbows and had not changed her clothes, said a word under her breath and went to the door.",
        textId: "Bel pintu berbunyi. Semua orang membeku. Ibu Tari, yang tepungnya sampai ke siku dan belum berganti baju, menggumamkan satu kata lalu pergi ke pintu."
      },
      {
        illustrationSeed: "earlyguest-3",
        textEn: "It was Pak Hendra from four doors down. He looked at the state of the hallway, and at Ibu Tari's flour, and at the general condition of everything, and he did not say \"am I early?\"",
        textId: "Yang datang Pak Hendra dari empat rumah di ujung sana. Ia melihat keadaan lorong rumah, dan tepung di tangan Ibu Tari, dan kondisi umum segala sesuatu — dan ia tidak berkata \"apakah saya kepagian?\""
      },
      {
        illustrationSeed: "earlyguest-4",
        textEn: "He said: \"I am an hour early because I am useless at reading invitations. Give me a job or send me away, both are completely fine.\"",
        textId: "Ia berkata: \"Saya datang sejam lebih awal karena saya payah membaca undangan. Beri saya pekerjaan atau usir saya, dua-duanya sama sekali tak masalah.\""
      },
      {
        illustrationSeed: "earlyguest-5",
        textEn: "This is a very small speech and it does an enormous amount of work. It takes the blame. It offers a way out. And it makes it easy for the host to say the true thing, which was: please carry the chairs.",
        textId: "Itu pidato yang sangat pendek dan ia mengerjakan sangat banyak hal. Ia mengambil kesalahan. Ia menawarkan jalan keluar. Dan ia memudahkan tuan rumah mengatakan hal yang sebenarnya, yaitu: tolong angkut kursinya."
      },
      {
        illustrationSeed: "earlyguest-6",
        textEn: "He carried eleven chairs, moved a table, found a bin bag without being told where the bin bags were, and then took the children outside for forty minutes, which was the single most valuable thing anybody did that day.",
        textId: "Ia mengangkut sebelas kursi, memindahkan satu meja, menemukan kantong sampah tanpa diberi tahu di mana kantong sampah disimpan, lalu membawa anak-anak keluar selama empat puluh menit — hal paling berharga yang dilakukan siapa pun hari itu."
      },
      {
        illustrationSeed: "earlyguest-7",
        textEn: "At four o'clock he came back in, sat down in the front room like a guest, and behaved exactly like somebody who had just arrived. He never mentioned the chairs again, then or ever.",
        textId: "Pukul empat ia masuk lagi, duduk di ruang depan seperti tamu, dan bersikap persis seperti orang yang baru saja datang. Ia tak pernah menyinggung soal kursi lagi, saat itu maupun sesudahnya."
      },
      {
        illustrationSeed: "earlyguest-8",
        textEn: "That last part matters as much as the helping. Help that gets mentioned afterwards turns into a debt. Help that is never mentioned again stays a gift.",
        textId: "Bagian terakhir itu sama pentingnya dengan pertolongannya. Pertolongan yang disebut-sebut belakangan berubah jadi utang. Pertolongan yang tak pernah disebut lagi tetap jadi hadiah."
      },
      {
        illustrationSeed: "earlyguest-9",
        textEn: "Pak Hendra is invited to everything on that lane. Nobody has ever explained to him why. He assumes it is because he is quite good company, and he is, and that is not the reason.",
        textId: "Pak Hendra diundang ke segala acara di gang itu. Tak ada yang pernah menjelaskan padanya mengapa. Ia mengira karena ia teman ngobrol yang cukup menyenangkan — dan memang begitu, tapi bukan itu alasannya."
      }
    ],
    quiz: [
      {
        questionEn: "What did Pak Hendra say at the door?",
        questionId: "Apa yang Pak Hendra katakan di pintu?",
        optionsEn: ["Am I early?", "I am early because I am useless at reading invitations — give me a job or send me away", "Sorry to disturb", "Nothing"],
        optionsId: ["Apa saya kepagian?", "Saya kepagian karena payah membaca undangan — beri saya pekerjaan atau usir saya", "Maaf mengganggu", "Tidak berkata apa-apa"],
        correctIndex: 1
      },
      {
        questionEn: "What was the most valuable thing he did?",
        questionId: "Apa hal paling berharga yang ia lakukan?",
        optionsEn: ["Carried chairs", "Took the children outside for forty minutes", "Cooked", "Cleaned the kitchen"],
        optionsId: ["Mengangkut kursi", "Membawa anak-anak keluar selama empat puluh menit", "Memasak", "Membersihkan dapur"],
        correctIndex: 1
      },
      {
        questionEn: "Why does help stay a gift?",
        questionId: "Mengapa pertolongan tetap jadi hadiah?",
        optionsEn: ["If it is large", "If it is never mentioned again", "If it is paid for", "If it is public"],
        optionsId: ["Kalau besar", "Kalau tak pernah disebut lagi", "Kalau dibayar", "Kalau dilakukan di depan umum"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-cave-that-was-only-mud",
    titleEn: "The Cave That Was Only Mud",
    titleId: "Gua yang Ternyata Cuma Lumpur",
    descriptionEn: "Four children spent a summer digging towards a legendary cave. They found no cave at all, and it was still the best summer of their lives.",
    descriptionId: "Empat anak menghabiskan satu musim liburan menggali menuju gua legendaris. Mereka sama sekali tak menemukan gua, dan itu tetap musim liburan terbaik dalam hidup mereka.",
    categorySlug: "adventure",
    authorSlug: "david-lee",
    coverEmoji: "⛏️",
    coverPalette: "forest",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "mudcave-1",
        textEn: "Everybody in Kampung Belat knew about the cave behind the quarry. It had gold in it, or a river, or a Japanese tunnel, depending on who was telling you and how old they were.",
        textId: "Semua orang di Kampung Belat tahu tentang gua di belakang galian batu. Isinya emas, atau sungai, atau terowongan Jepang, tergantung siapa yang bercerita dan berapa umurnya."
      },
      {
        illustrationSeed: "mudcave-2",
        textEn: "Four children — Beni, Sari, Tono and Ika — decided in the first week of the holidays that they were going to find it. They had two spades, a bucket, and eleven weeks.",
        textId: "Empat anak — Beni, Sari, Tono, dan Ika — memutuskan pada pekan pertama liburan bahwa mereka akan menemukannya. Mereka punya dua sekop, satu ember, dan sebelas pekan."
      },
      {
        illustrationSeed: "mudcave-3",
        textEn: "They were systematic, which is the surprising part. They talked to nine adults first and wrote down where each one said the entrance was, and then dug where the answers clustered.",
        textId: "Mereka bekerja sistematis — dan itulah bagian mengejutkannya. Mereka mewawancarai sembilan orang dewasa lebih dulu dan mencatat di mana masing-masing menyebut pintu masuknya, lalu menggali di tempat jawaban-jawaban itu berkerumun."
      },
      {
        illustrationSeed: "mudcave-4",
        textEn: "They dug for nine weeks. They moved a genuinely impressive amount of earth. They built a drainage channel because the hole kept filling with water, which was Ika's idea and worked.",
        textId: "Mereka menggali sembilan pekan. Mereka memindahkan tanah dalam jumlah yang sungguh mengesankan. Mereka membuat saluran air karena lubangnya terus terisi air — gagasan Ika, dan berhasil."
      },
      {
        illustrationSeed: "mudcave-5",
        textEn: "They found: four hundred kilograms of clay, two rusted tins, one buffalo bone, a coin from 1974, and no cave whatsoever, at any depth, in any direction.",
        textId: "Mereka menemukan: empat ratus kilogram tanah liat, dua kaleng berkarat, satu tulang kerbau, sekeping koin tahun 1974, dan sama sekali tidak ada gua, pada kedalaman berapa pun, ke arah mana pun."
      },
      {
        illustrationSeed: "mudcave-6",
        textEn: "On the last Sunday Tono's grandfather came down to look at the hole. He walked round it, looked in, and said, \"There is no cave. There has never been a cave. I dug here in 1968.\"",
        textId: "Pada Minggu terakhir kakek Tono turun melihat lubang itu. Ia berjalan mengelilinginya, mengintip ke dalam, lalu berkata, \"Tidak ada gua. Tidak pernah ada gua. Saya menggali di sini tahun 1968.\""
      },
      {
        illustrationSeed: "mudcave-7",
        textEn: "All four children were, for about eleven seconds, completely furious. Then Sari asked the question that made it all right: \"Why did nobody tell us?\" And he said, \"Would you have listened?\"",
        textId: "Keempat anak itu, selama sekitar sebelas detik, benar-benar murka. Lalu Sari mengajukan pertanyaan yang membuat semuanya baik-baik saja: \"Kenapa tidak ada yang memberi tahu kami?\" Dan kakeknya menjawab, \"Memangnya kalian mau mendengarkan?\""
      },
      {
        illustrationSeed: "mudcave-8",
        textEn: "They would not have listened. All four of them agree about that now, twenty years later, and they still argue about whose fault the drainage channel collapse was.",
        textId: "Mereka memang tidak akan mendengarkan. Keempatnya sepakat soal itu sekarang, dua puluh tahun kemudian, dan mereka masih berdebat soal siapa yang salah dalam runtuhnya saluran air itu."
      },
      {
        illustrationSeed: "mudcave-9",
        textEn: "The hole is still there. It has a mango tree in it now, planted by somebody who does not know what it was. Ika is a civil engineer. She says she learned drainage in a field in Kampung Belat at the age of ten.",
        textId: "Lubang itu masih ada. Kini ada pohon mangga di dalamnya, ditanam oleh seseorang yang tak tahu itu bekas apa. Ika kini insinyur sipil. Ia bilang ia belajar sistem drainase di sebuah ladang di Kampung Belat pada umur sepuluh tahun."
      }
    ],
    quiz: [
      {
        questionEn: "How did they choose where to dig?",
        questionId: "Bagaimana mereka memilih tempat menggali?",
        optionsEn: ["At random", "By asking nine adults and digging where the answers clustered", "A map", "The oldest person said so"],
        optionsId: ["Secara acak", "Dengan bertanya pada sembilan orang dewasa dan menggali di tempat jawabannya berkerumun", "Sebuah peta", "Orang tertua yang menentukan"],
        correctIndex: 1
      },
      {
        questionEn: "What did they find?",
        questionId: "Apa yang mereka temukan?",
        optionsEn: ["The cave", "Clay, two tins, a bone, a coin — and no cave", "Gold", "A tunnel"],
        optionsId: ["Guanya", "Tanah liat, dua kaleng, tulang, sekeping koin — dan tidak ada gua", "Emas", "Terowongan"],
        correctIndex: 1
      },
      {
        questionEn: "What did Ika learn?",
        questionId: "Apa yang Ika pelajari?",
        optionsEn: ["Nothing", "Drainage, which became her profession", "How to give up", "Where the gold was"],
        optionsId: ["Tidak ada", "Sistem drainase, yang kelak jadi profesinya", "Cara menyerah", "Di mana emasnya"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-friend-who-told-me-the-truth",
    titleEn: "The Friend Who Told Me the Truth",
    titleId: "Teman yang Mengatakan yang Sebenarnya",
    descriptionEn: "Everybody told Dinda her song was wonderful. One friend told her the third verse did not work, and that is why the song is good now.",
    descriptionId: "Semua orang bilang lagu Dinda luar biasa. Satu teman bilang bait ketiganya tidak jalan, dan itulah sebabnya lagunya bagus sekarang.",
    categorySlug: "friendship",
    authorSlug: "sarah-johnson",
    coverEmoji: "🎤",
    coverPalette: "candy",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "truthfriend-1",
        textEn: "Dinda wrote a song. She played it to eleven people over two weeks, and eleven people said it was wonderful, and she started to feel slightly strange about that.",
        textId: "Dinda menulis sebuah lagu. Ia memainkannya untuk sebelas orang selama dua pekan, dan sebelas orang bilang lagunya luar biasa, dan ia mulai merasa sedikit aneh soal itu."
      },
      {
        illustrationSeed: "truthfriend-2",
        textEn: "She felt strange because she knew, in the part of her head that does not lie, that the third verse did not work. She just did not know why, and nobody was helping her find out.",
        textId: "Ia merasa aneh karena ia tahu, di bagian kepalanya yang tak bisa berbohong, bahwa bait ketiga itu tidak jalan. Ia hanya tak tahu mengapa, dan tak ada yang membantunya mencari tahu."
      },
      {
        illustrationSeed: "truthfriend-3",
        textEn: "The twelfth person was Rafa, who listened all the way through with her eyes shut, and then said, \"The first two verses are really good. The third one is not finished.\"",
        textId: "Orang kedua belas adalah Rafa, yang mendengarkan sampai habis dengan mata terpejam, lalu berkata, \"Dua bait pertama benar-benar bagus. Bait ketiga belum selesai.\""
      },
      {
        illustrationSeed: "truthfriend-4",
        textEn: "Dinda's first reaction was to be hurt, and she was, for about four hours. Her second reaction, at about eleven that night, was enormous relief, because somebody had finally said the thing she already knew.",
        textId: "Reaksi pertama Dinda adalah merasa terluka, dan memang begitu, selama sekitar empat jam. Reaksi keduanya, sekitar pukul sebelas malam itu, adalah kelegaan yang luar biasa, karena akhirnya ada yang mengatakan hal yang sudah ia ketahui."
      },
      {
        illustrationSeed: "truthfriend-5",
        textEn: "The next day she asked Rafa what specifically was wrong. Rafa did not know. Rafa said, \"I am not a musician. I just noticed I stopped listening at that bit,\" which turned out to be exactly the right information.",
        textId: "Keesokan harinya ia bertanya pada Rafa apa persisnya yang salah. Rafa tak tahu. Rafa berkata, \"Aku bukan musisi. Aku cuma sadar aku berhenti menyimak di bagian itu,\" — dan ternyata itulah informasi yang persis dibutuhkan."
      },
      {
        illustrationSeed: "truthfriend-6",
        textEn: "The third verse repeated the idea of the second verse instead of adding to it. That is why attention slid off it. Dinda could not see this from inside the song. Rafa could see it from outside without knowing what she was seeing.",
        textId: "Bait ketiga mengulang gagasan bait kedua alih-alih menambahnya. Itulah sebabnya perhatian tergelincir. Dinda tak bisa melihat ini dari dalam lagunya. Rafa bisa melihatnya dari luar tanpa tahu apa yang sedang ia lihat."
      },
      {
        illustrationSeed: "truthfriend-7",
        textEn: "The rewrite took nine days. The song is good now, properly good, and it is good because of one sentence that took Rafa about four seconds to say and was not comfortable to say.",
        textId: "Menulis ulangnya butuh sembilan hari. Lagu itu bagus sekarang, benar-benar bagus, dan ia bagus karena satu kalimat yang butuh sekitar empat detik untuk Rafa ucapkan dan tidak nyaman diucapkan."
      },
      {
        illustrationSeed: "truthfriend-8",
        textEn: "Dinda has thought a lot about the eleven people who said it was wonderful. None of them lied. They liked it. But liking something and being useful about it are two different acts of friendship, and most people only manage the first.",
        textId: "Dinda banyak memikirkan sebelas orang yang bilang lagunya luar biasa. Tak satu pun berbohong. Mereka memang menyukainya. Tapi menyukai sesuatu dan berguna terhadapnya adalah dua tindakan persahabatan yang berbeda, dan kebanyakan orang hanya mampu yang pertama."
      },
      {
        illustrationSeed: "truthfriend-9",
        textEn: "She plays new things to Rafa first now, always. And Rafa still says \"I am not a musician\" every single time, and is still, every single time, completely right about where the attention slides off.",
        textId: "Kini ia selalu memainkan karya barunya untuk Rafa lebih dulu. Dan Rafa masih berkata \"aku bukan musisi\" setiap kali, dan setiap kali pula benar-benar tepat soal di mana perhatian mulai tergelincir."
      }
    ],
    quiz: [
      {
        questionEn: "What did the first eleven people say?",
        questionId: "Apa kata sebelas orang pertama?",
        optionsEn: ["It needed work", "It was wonderful", "Nothing", "They did not like it"],
        optionsId: ["Perlu diperbaiki", "Lagunya luar biasa", "Tidak berkomentar", "Mereka tidak suka"],
        correctIndex: 1
      },
      {
        questionEn: "What did Rafa notice?",
        questionId: "Apa yang Rafa sadari?",
        optionsEn: ["The tune was wrong", "She stopped listening at the third verse", "It was too long", "The words were unclear"],
        optionsId: ["Nadanya salah", "Ia berhenti menyimak di bait ketiga", "Terlalu panjang", "Kata-katanya tidak jelas"],
        correctIndex: 1
      },
      {
        questionEn: "What was actually wrong with the third verse?",
        questionId: "Apa sebenarnya yang salah pada bait ketiga?",
        optionsEn: ["It was too short", "It repeated the second verse instead of adding to it", "It was out of tune", "It had no rhyme"],
        optionsId: ["Terlalu pendek", "Ia mengulang bait kedua alih-alih menambahnya", "Nadanya fals", "Tidak berima"],
        correctIndex: 1
      }
    ]
  }
];
