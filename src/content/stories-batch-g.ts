/**
 * Story batch G — hand-written bilingual (EN/ID) read-aloud stories, appended
 * to the library. Batches only ever add; nothing existing is edited or merged.
 *
 * This batch clears the last seven two-book shelves — robots-tech,
 * nature-environment, weather-seasons, sports, music-rhymes, holidays-culture
 * and true-stories — and tops up family, farm and manners.
 */
import type { Story } from "./stories";

export const STORIES_BATCH_G: Story[] = [
  {
    slug: "the-robot-that-asked-why",
    titleEn: "The Robot That Asked Why",
    titleId: "Robot yang Bertanya Mengapa",
    descriptionEn: "Unit Six has sorted eleven million mangoes without a single mistake. Then it picks up one that is good and bad at the same time, and stops.",
    descriptionId: "Unit Enam sudah memilah sebelas juta mangga tanpa satu pun kesalahan. Lalu ia mengangkat satu mangga yang baik sekaligus buruk, dan berhenti.",
    categorySlug: "robots-tech",
    authorSlug: "david-lee",
    coverEmoji: "🤖",
    coverPalette: "sky",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "unitsix-1",
        textEn: "The sorting robot in the fruit warehouse was called Unit Six, and its whole job in the world was to put good mangoes on the left and bad mangoes on the right.",
        textId: "Robot pemilah di gudang buah itu bernama Unit Enam, dan seluruh tugasnya di dunia ini adalah menaruh mangga bagus di kiri dan mangga buruk di kanan."
      },
      {
        illustrationSeed: "unitsix-2",
        textEn: "It was extremely good at this. It had looked closely at eleven million mangoes, one after another, and it had never once been tired and never once been wrong.",
        textId: "Ia sangat mahir melakukannya. Ia sudah menatap cermat sebelas juta mangga, satu demi satu, dan belum pernah sekali pun lelah maupun keliru."
      },
      {
        illustrationSeed: "unitsix-3",
        textEn: "One Tuesday it stopped. There was a mango sitting in its gripper, and it did not put the mango on the left, and it did not put the mango on the right. It simply held it.",
        textId: "Pada suatu Selasa ia berhenti. Ada sebutir mangga di penjepitnya, dan ia tidak menaruhnya di kiri, dan tidak pula di kanan. Ia hanya memegangnya."
      },
      {
        illustrationSeed: "unitsix-4",
        textEn: "The engineer, Pak Danu, came down from the office with his tablet. \"What is the fault?\" he asked. The screen answered with two words he had never seen it use: NO FAULT. QUERY.",
        textId: "Sang teknisi, Pak Danu, turun dari kantor membawa tabletnya. \"Apa kerusakannya?\" tanyanya. Layar menjawab dengan dua kata yang belum pernah ia lihat dipakai mesin itu: TIDAK RUSAK. BERTANYA."
      },
      {
        illustrationSeed: "unitsix-5",
        textEn: "The mango had one small brown patch on its side. Everything else about it was perfect. \"Good, or bad?\" the robot wrote on the screen, which was not a thing it had ever done before.",
        textId: "Mangga itu punya satu bercak cokelat kecil di sisinya. Selebihnya sempurna. \"Bagus, atau buruk?\" tulis robot itu di layar — sesuatu yang belum pernah sekali pun ia lakukan."
      },
      {
        illustrationSeed: "unitsix-6",
        textEn: "Pak Danu turned the mango over in his hand. \"Bad for the shop,\" he said slowly. \"Good for my mother's kitchen. She would cut that patch off and never think about it again.\"",
        textId: "Pak Danu membolak-balik mangga itu di tangannya. \"Buruk untuk toko,\" katanya perlahan. \"Bagus untuk dapur ibuku. Beliau akan memotong bercaknya dan tidak memikirkannya lagi.\""
      },
      {
        illustrationSeed: "unitsix-7",
        textEn: "\"Then the rule is wrong,\" said the screen. And Pak Danu sat down on an empty crate, because the rule was wrong, and it had been wrong for eleven million mangoes.",
        textId: "\"Kalau begitu aturannya salah,\" tulis layar itu. Dan Pak Danu duduk di peti kosong, karena memang aturannya salah, dan sudah salah sepanjang sebelas juta mangga."
      },
      {
        illustrationSeed: "unitsix-8",
        textEn: "They built a third bin. It took two weeks, a new set of instructions, and one long argument with the manager. The third bin went to the staff canteen, and then to a school, and then to two schools.",
        textId: "Mereka membuat bak ketiga. Butuh dua pekan, satu set perintah baru, dan satu perdebatan panjang dengan manajer. Bak ketiga itu dikirim ke kantin karyawan, lalu ke sebuah sekolah, lalu ke dua sekolah."
      },
      {
        illustrationSeed: "unitsix-9",
        textEn: "Unit Six went back to work and never asked another question. But every single day, thirty or forty mangoes went into a bin that had not existed until the day it did.",
        textId: "Unit Enam kembali bekerja dan tak pernah bertanya lagi. Tapi setiap hari, tiga puluh atau empat puluh mangga masuk ke sebuah bak yang tadinya tidak pernah ada sampai hari ia bertanya."
      }
    ],
    quiz: [
      {
        questionEn: "What was Unit Six's job?",
        questionId: "Apa tugas Unit Enam?",
        optionsEn: ["Sorting good and bad mangoes", "Driving trucks", "Watering the trees", "Counting boxes"],
        optionsId: ["Memilah mangga bagus dan buruk", "Mengemudikan truk", "Menyiram pohon", "Menghitung kardus"],
        correctIndex: 0
      },
      {
        questionEn: "Why did the robot stop?",
        questionId: "Mengapa robot itu berhenti?",
        optionsEn: ["It was broken", "A mango was partly good and partly bad, and the rule had no answer", "It ran out of power", "It was tired"],
        optionsId: ["Karena rusak", "Ada mangga yang sebagian bagus dan sebagian buruk, dan aturannya tak punya jawaban", "Dayanya habis", "Ia kelelahan"],
        correctIndex: 1
      },
      {
        questionEn: "What did they build afterwards?",
        questionId: "Apa yang mereka buat setelah itu?",
        optionsEn: ["A new robot", "A third bin for the partly-good fruit", "A bigger warehouse", "A thicker rule book"],
        optionsId: ["Robot baru", "Bak ketiga untuk buah yang setengah bagus", "Gudang yang lebih besar", "Buku aturan yang lebih tebal"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-river-that-was-given-back",
    titleEn: "The River That Was Given Back",
    titleId: "Sungai yang Dikembalikan",
    descriptionEn: "There used to be a river through the middle of town. Then it was a pipe, then a car park — and it was still down there, running in the dark.",
    descriptionId: "Dulu ada sungai membelah kota. Lalu ia jadi pipa, lalu jadi lahan parkir — dan ia masih ada di bawah sana, mengalir dalam gelap.",
    categorySlug: "nature-environment",
    authorSlug: "emily-clark",
    coverEmoji: "🏞️",
    coverPalette: "forest",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "givenback-1",
        textEn: "There had been a river through the middle of the town once. Karim's grandfather could remember swimming in it as a boy. By the time Karim was born it was a road.",
        textId: "Dulu ada sungai yang membelah kota itu. Kakek Karim masih ingat berenang di sana waktu kecil. Ketika Karim lahir, tempat itu sudah jadi jalan."
      },
      {
        illustrationSeed: "givenback-2",
        textEn: "Not simply covered by a road — underneath one. They had put the whole river inside a concrete pipe and poured a car park over the top, and then everybody forgot it was there.",
        textId: "Bukan sekadar tertutup jalan — tapi berada di bawahnya. Seluruh sungai dimasukkan ke dalam pipa beton lalu di atasnya dicor lahan parkir, dan sesudah itu semua orang lupa sungai itu ada."
      },
      {
        illustrationSeed: "givenback-3",
        textEn: "Except when it rained hard. Then the pipe filled up and the water came out of the drains in the market, brown and angry, and everybody blamed the drains.",
        textId: "Kecuali saat hujan deras. Pipa itu penuh dan air menyembur keluar dari saluran di pasar, cokelat dan marah, dan semua orang menyalahkan saluran airnya."
      },
      {
        illustrationSeed: "givenback-4",
        textEn: "A woman from the city office came with drawings. \"We can dig it up,\" she said. \"The river is still down there. It has been running all this time, in the dark, under your feet.\"",
        textId: "Seorang perempuan dari kantor kota datang membawa gambar rancangan. \"Kita bisa membongkarnya,\" katanya. \"Sungainya masih di bawah sana. Selama ini ia terus mengalir, dalam gelap, di bawah kaki kalian.\""
      },
      {
        illustrationSeed: "givenback-5",
        textEn: "Nobody believed her at first. The shopkeepers were furious about losing the parking. It took four years of meetings, and the meetings were not always polite.",
        textId: "Mulanya tak ada yang percaya. Para pemilik toko marah besar karena lahan parkir akan hilang. Butuh empat tahun rapat, dan rapat-rapat itu tidak selalu sopan."
      },
      {
        illustrationSeed: "givenback-6",
        textEn: "But they dug. Karim was eleven the day the first machine broke through the concrete, and the water underneath was there, exactly as promised, moving.",
        textId: "Tapi mereka tetap menggali. Karim berumur sebelas tahun pada hari mesin pertama menembus beton, dan air di bawahnya memang ada, persis seperti dijanjikan, mengalir."
      },
      {
        illustrationSeed: "givenback-7",
        textEn: "They put stones in for the fish, and planted the banks, and made the sides gentle enough for a child to climb out. For the first year it looked raw and bare and disappointing.",
        textId: "Mereka menaruh batu-batu untuk ikan, menanami tepiannya, dan membuat sisi-sisinya cukup landai agar anak-anak bisa naik keluar. Tahun pertama tampilannya masih gundul, kasar, dan mengecewakan."
      },
      {
        illustrationSeed: "givenback-8",
        textEn: "By the third year there were reeds and dragonflies, and one heron that several families argued about the ownership of. The market has not flooded since.",
        textId: "Pada tahun ketiga sudah ada gelagah dan capung, dan seekor bangau yang kepemilikannya diperdebatkan beberapa keluarga. Sejak itu pasar tidak pernah banjir lagi."
      },
      {
        illustrationSeed: "givenback-9",
        textEn: "Karim's grandfather came to see it. He stood a long time and did not say anything clever. He only said, \"There it is,\" which turned out to be the entire point.",
        textId: "Kakek Karim datang melihatnya. Ia berdiri lama dan tidak mengucapkan kalimat bijak apa pun. Ia hanya berkata, \"Itu dia,\" dan ternyata itulah seluruh intinya."
      }
    ],
    quiz: [
      {
        questionEn: "What had happened to the river?",
        questionId: "Apa yang terjadi pada sungai itu?",
        optionsEn: ["It dried up", "It was put in a pipe under a car park", "It moved somewhere else", "It froze"],
        optionsId: ["Ia mengering", "Ia dimasukkan ke pipa di bawah lahan parkir", "Ia berpindah ke tempat lain", "Ia membeku"],
        correctIndex: 1
      },
      {
        questionEn: "Why did the market flood?",
        questionId: "Mengapa pasar itu banjir?",
        optionsEn: ["Too much rain alone", "The buried pipe filled up and the water came out of the drains", "The sea rose", "Rubbish blocked the drains"],
        optionsId: ["Semata-mata karena hujan terlalu deras", "Pipa yang terkubur penuh lalu airnya keluar dari saluran", "Air laut naik", "Sampah menyumbat saluran"],
        correctIndex: 1
      },
      {
        questionEn: "What was there three years after they dug it up?",
        questionId: "Apa yang ada tiga tahun setelah sungai itu dibongkar?",
        optionsEn: ["Nothing", "Reeds, dragonflies and a heron — and no more flooding", "It dried up again", "They covered it over again"],
        optionsId: ["Tidak ada apa-apa", "Gelagah, capung, dan seekor bangau — dan tidak ada banjir lagi", "Sungainya mengering lagi", "Mereka menutupnya kembali"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-year-the-rain-came-late",
    titleEn: "The Year the Rain Came Late",
    titleId: "Tahun Ketika Hujan Datang Terlambat",
    descriptionEn: "The rain always comes in the last week of October. The year it did not, Nadia learned to read clouds and to tell small from nothing.",
    descriptionId: "Hujan selalu datang pada pekan terakhir Oktober. Pada tahun ia tidak datang, Nadia belajar membaca awan dan membedakan sedikit dari tidak ada sama sekali.",
    categorySlug: "weather-seasons",
    authorSlug: "siti-aminah",
    coverEmoji: "🌧️",
    coverPalette: "dusk",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "latelain-1",
        textEn: "In Nadia's village the rain was supposed to come in the last week of October. People planted a few days before it, the way you set the table before the guests arrive.",
        textId: "Di kampung Nadia hujan seharusnya datang pada pekan terakhir Oktober. Orang menanam beberapa hari sebelumnya, seperti kita menata meja sebelum tamu tiba."
      },
      {
        illustrationSeed: "latelain-2",
        textEn: "That year it did not come. Not in October, and not in the first week of November either. The seed sat in dry ground and did absolutely nothing.",
        textId: "Tahun itu hujan tidak datang. Tidak di Oktober, tidak juga di pekan pertama November. Benih-benih itu duduk di tanah kering dan sama sekali tidak melakukan apa-apa."
      },
      {
        illustrationSeed: "latelain-3",
        textEn: "Some people planted a second time anyway. Nadia's mother did not. \"Twice is how you lose two lots of seed instead of one,\" she said. \"We wait.\"",
        textId: "Sebagian orang tetap menanam untuk kedua kalinya. Ibu Nadia tidak. \"Menanam dua kali itu cara kehilangan dua tumpuk benih, bukan satu,\" katanya. \"Kita tunggu.\""
      },
      {
        illustrationSeed: "latelain-4",
        textEn: "Nadia hated the waiting. Every afternoon there were clouds — big, grey, serious-looking clouds — and every single evening they went somewhere else instead.",
        textId: "Nadia benci menunggu. Setiap sore ada awan — awan besar, kelabu, tampak sungguh-sungguh — dan setiap malam awan itu justru pergi ke tempat lain."
      },
      {
        illustrationSeed: "latelain-5",
        textEn: "Her grandmother taught her to read them. \"That one is too high. That one is travelling too fast. You want the one that goes slowly and then sits down on the hills.\"",
        textId: "Neneknya mengajarinya membaca awan. \"Yang itu terlalu tinggi. Yang itu bergerak terlalu cepat. Yang kamu tunggu adalah yang jalannya pelan lalu duduk di atas perbukitan.\""
      },
      {
        illustrationSeed: "latelain-6",
        textEn: "On the nineteenth of November a cloud sat down on the hills. It stayed there. The air went strange and thick, and the birds got very loud and then very quiet.",
        textId: "Pada tanggal sembilan belas November sebuah awan duduk di atas perbukitan. Ia bertahan di sana. Udara jadi aneh dan pekat, dan burung-burung jadi sangat berisik lalu sangat sunyi."
      },
      {
        illustrationSeed: "latelain-7",
        textEn: "It rained for two whole days. Nadia stood out in it until she was told to come inside, and then she stood in the doorway instead, which was allowed.",
        textId: "Hujan turun dua hari penuh. Nadia berdiri di bawahnya sampai disuruh masuk, lalu ia berdiri di ambang pintu sebagai gantinya, dan itu diperbolehkan."
      },
      {
        illustrationSeed: "latelain-8",
        textEn: "The harvest that year was small. Not nothing — small. Her mother said that small and late is a completely different thing from nothing, and that you must never confuse the two.",
        textId: "Panen tahun itu sedikit. Bukan tidak ada — sedikit. Ibunya berkata bahwa sedikit dan terlambat itu hal yang sama sekali berbeda dari tidak ada, dan keduanya jangan pernah dicampuradukkan."
      },
      {
        illustrationSeed: "latelain-9",
        textEn: "The next October the rain came on time. Nadia noticed. She had never once noticed before, and after that year she noticed every single time it did.",
        textId: "Oktober berikutnya hujan datang tepat waktu. Nadia menyadarinya. Sebelumnya ia tak pernah sekali pun menyadarinya, dan setelah tahun itu ia selalu menyadarinya."
      }
    ],
    quiz: [
      {
        questionEn: "When was the rain supposed to come?",
        questionId: "Kapan hujan seharusnya datang?",
        optionsEn: ["The last week of October", "In June", "In January", "Nobody knew"],
        optionsId: ["Pekan terakhir Oktober", "Bulan Juni", "Bulan Januari", "Tak ada yang tahu"],
        correctIndex: 0
      },
      {
        questionEn: "Why did Nadia's mother not plant a second time?",
        questionId: "Mengapa ibu Nadia tidak menanam untuk kedua kalinya?",
        optionsEn: ["She had no seed left", "Planting twice is how you lose two lots of seed", "She was ill", "She had moved away"],
        optionsId: ["Benihnya sudah habis", "Menanam dua kali adalah cara kehilangan dua tumpuk benih", "Ia sedang sakit", "Ia sudah pindah"],
        correctIndex: 1
      },
      {
        questionEn: "Which kind of cloud brings the rain, said her grandmother?",
        questionId: "Menurut neneknya, awan macam apa yang membawa hujan?",
        optionsEn: ["A high, fast one", "One that goes slowly and sits down on the hills", "A small white one", "A red one at sunset"],
        optionsId: ["Awan yang tinggi dan cepat", "Awan yang jalannya pelan lalu duduk di atas perbukitan", "Awan putih kecil", "Awan merah saat senja"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-fourth-runner-home",
    titleEn: "The Fourth Runner Home",
    titleId: "Pelari Keempat yang Sampai",
    descriptionEn: "Rafi is the slowest runner in his school and is picked for the cross-country team anyway — because he finishes, and half of them do not.",
    descriptionId: "Rafi adalah pelari paling lambat di sekolahnya dan tetap dipilih masuk tim lintas alam — karena ia selalu sampai garis akhir, sementara separuh yang lain tidak.",
    categorySlug: "sports",
    authorSlug: "axto-creative-team",
    coverEmoji: "🏃",
    coverPalette: "citrus",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "slowrunner-1",
        textEn: "Every school has a fastest runner. Rafi's school had Bagus, who could finish the hundred metres before you had finished being impressed. Rafi was the slowest.",
        textId: "Setiap sekolah punya pelari tercepat. Sekolah Rafi punya Bagus, yang bisa menuntaskan lari seratus meter sebelum kamu selesai kagum. Rafi adalah yang paling lambat."
      },
      {
        illustrationSeed: "slowrunner-2",
        textEn: "He knew it, and he was not unhappy about it in the way people expected him to be. He simply liked running, which turns out to be a separate thing from being fast at it.",
        textId: "Ia tahu itu, dan ia tidak sedih seperti yang orang-orang kira. Ia memang menyukai lari, dan ternyata itu hal yang berbeda dari pandai berlari cepat."
      },
      {
        illustrationSeed: "slowrunner-3",
        textEn: "The coach put him in the cross-country team anyway. \"Not because you are going to win,\" she said, honestly. \"Because you finish, and half of them do not.\"",
        textId: "Pelatihnya tetap memasukkannya ke tim lintas alam. \"Bukan karena kamu akan menang,\" katanya jujur. \"Tapi karena kamu selalu sampai garis akhir, sementara separuh yang lain tidak.\""
      },
      {
        illustrationSeed: "slowrunner-4",
        textEn: "The course was eight kilometres, through a wood and up a hill that everybody underestimated from the bottom. At three kilometres the fast boys were far, far ahead.",
        textId: "Lintasannya delapan kilometer, menembus hutan lalu mendaki bukit yang selalu diremehkan orang dari bawah. Di kilometer ketiga anak-anak cepat itu sudah jauh, jauh di depan."
      },
      {
        illustrationSeed: "slowrunner-5",
        textEn: "At five kilometres Rafi passed two of them walking. At six he passed a third one sitting down at the side. He did not say anything to any of them, because there was nothing kind to say.",
        textId: "Di kilometer kelima Rafi melewati dua di antaranya yang sedang berjalan. Di kilometer keenam ia melewati yang ketiga, duduk di pinggir lintasan. Ia tidak berkata apa-apa, karena tak ada yang bisa dikatakan tanpa menyakiti."
      },
      {
        illustrationSeed: "slowrunner-6",
        textEn: "He came thirty-first out of sixty. Thirty-first is not a story. But the team score counts your first four runners, and Rafi was his school's fourth.",
        textId: "Ia finis di urutan ketiga puluh satu dari enam puluh. Peringkat ketiga puluh satu bukan cerita hebat. Tapi nilai tim dihitung dari empat pelari pertama, dan Rafi adalah pelari keempat sekolahnya."
      },
      {
        illustrationSeed: "slowrunner-7",
        textEn: "They came second overall. Bagus, who had won his own race by a long way, worked the arithmetic out on the bus home and looked at Rafi rather differently for a while afterwards.",
        textId: "Sekolah mereka juara kedua secara keseluruhan. Bagus, yang menang telak di nomornya sendiri, menghitung angkanya di bus pulang dan sesudah itu memandang Rafi dengan cara yang agak berbeda."
      },
      {
        illustrationSeed: "slowrunner-8",
        textEn: "\"How do you keep going up the hill?\" he asked. Rafi thought about it properly before answering. \"I do not go fast at the bottom,\" he said. \"That is the whole thing.\"",
        textId: "\"Bagaimana caramu terus mendaki bukit itu?\" tanya Bagus. Rafi memikirkannya baik-baik sebelum menjawab. \"Aku tidak ngebut di bawah,\" katanya. \"Cuma itu rahasianya.\""
      },
      {
        illustrationSeed: "slowrunner-9",
        textEn: "He never did get quick. He got a shelf with four small medals on it, every one of them a team medal, every one of them won by not being the person who sat down.",
        textId: "Ia tak pernah jadi cepat. Ia hanya punya rak berisi empat medali kecil, semuanya medali beregu, dan semuanya diraih karena ia bukan orang yang duduk menyerah."
      }
    ],
    quiz: [
      {
        questionEn: "Why did the coach pick Rafi?",
        questionId: "Mengapa pelatih memilih Rafi?",
        optionsEn: ["He was the fastest", "Because he finishes, and half the others do not", "He asked to be picked", "Nobody else was left"],
        optionsId: ["Karena ia yang tercepat", "Karena ia selalu sampai garis akhir, sementara separuh yang lain tidak", "Karena ia meminta dipilih", "Karena tak ada calon lain"],
        correctIndex: 1
      },
      {
        questionEn: "What place did Rafi finish in?",
        questionId: "Rafi finis di urutan berapa?",
        optionsEn: ["First", "Thirty-first out of sixty", "Last", "He did not finish"],
        optionsId: ["Pertama", "Ketiga puluh satu dari enam puluh", "Terakhir", "Ia tidak sampai garis akhir"],
        correctIndex: 1
      },
      {
        questionEn: "What was his secret on the hill?",
        questionId: "Apa rahasianya saat mendaki bukit?",
        optionsEn: ["Running hard at the start", "Not going fast at the bottom", "Walking the whole way", "Following Bagus"],
        optionsId: ["Berlari kencang sejak awal", "Tidak ngebut di bagian bawah", "Berjalan kaki sepanjang lintasan", "Mengikuti Bagus"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-drum-that-belonged-to-everyone",
    titleEn: "The Drum That Belonged to Everyone",
    titleId: "Gendang Milik Semua Orang",
    descriptionEn: "Ida hits the village drum hard for a whole year and it never sounds right. Then Pak Umar tells her to stop listening to her hands.",
    descriptionId: "Setahun penuh Ida memukul gendang kampung sekuat tenaga dan bunyinya tak pernah benar. Lalu Pak Umar menyuruhnya berhenti mendengarkan tangannya sendiri.",
    categorySlug: "music-rhymes",
    authorSlug: "siti-aminah",
    coverEmoji: "🥁",
    coverPalette: "candy",
    ageMin: 4,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "villagedrum-1",
        textEn: "In the village hall there was a big drum on a wooden stand, and the rule about it was a strange one: it belonged to nobody, so anybody could play it, but nobody could take it home.",
        textId: "Di balai kampung ada gendang besar di atas dudukan kayu, dan aturannya aneh: gendang itu bukan milik siapa-siapa, jadi siapa pun boleh memainkannya, tapi tak seorang pun boleh membawanya pulang."
      },
      {
        illustrationSeed: "villagedrum-2",
        textEn: "Small children hit it as hard as they possibly could, which is not really playing at all. The drum did not mind. It had a deep patient voice and it forgave absolutely everything.",
        textId: "Anak-anak kecil memukulnya sekuat tenaga, dan itu sama sekali bukan bermain gendang. Gendang itu tidak keberatan. Suaranya dalam dan sabar, dan ia memaafkan segalanya."
      },
      {
        illustrationSeed: "villagedrum-3",
        textEn: "Old Pak Umar played it at weddings. He hardly moved his hands at all. Somehow the sound went straight down through the floor and came up again into your feet.",
        textId: "Pak Umar yang sudah tua memainkannya di pesta pernikahan. Tangannya nyaris tidak bergerak. Entah bagaimana bunyinya turun menembus lantai lalu naik lagi ke telapak kakimu."
      },
      {
        illustrationSeed: "villagedrum-4",
        textEn: "Ida wanted to play like that. She hit the drum hard for a whole year and it never once sounded like Pak Umar. It sounded like a girl hitting a drum, which is what it was.",
        textId: "Ida ingin bisa bermain seperti itu. Setahun penuh ia memukul gendang sekuat tenaga dan bunyinya tak pernah sekali pun seperti Pak Umar. Bunyinya seperti anak perempuan memukul gendang, dan memang begitulah adanya."
      },
      {
        illustrationSeed: "villagedrum-5",
        textEn: "\"You are listening to your hands,\" he told her. \"Stop that. Listen to the room instead. The room is the one that tells you when to hit it again.\"",
        textId: "\"Kamu sedang mendengarkan tanganmu sendiri,\" katanya. \"Berhenti. Dengarkan ruangannya. Ruangan itulah yang memberitahumu kapan harus memukul lagi.\""
      },
      {
        illustrationSeed: "villagedrum-6",
        textEn: "So she sat and listened. The hall had a small echo in it, about as long as one quiet breath. If you hit the drum again before the echo had finished, the two sounds fought each other.",
        textId: "Maka ia duduk dan mendengarkan. Balai itu punya gema kecil, kira-kira sepanjang satu tarikan napas yang tenang. Kalau kamu memukul lagi sebelum gemanya habis, kedua bunyi itu saling berkelahi."
      },
      {
        illustrationSeed: "villagedrum-7",
        textEn: "If you waited — exactly that long, no more — the echo and the new note leaned on one another, and the whole hall hummed, and that was the sound she had been chasing all year.",
        textId: "Kalau kamu menunggu — persis selama itu, tidak lebih — gema dan nada baru saling bersandar, dan seluruh balai berdengung, dan itulah bunyi yang setahun ini ia kejar."
      },
      {
        illustrationSeed: "villagedrum-8",
        textEn: "She was eleven when she played her first wedding. Her hands hardly moved. Somebody's grandmother said, \"That is the old way of playing,\" which is the best thing anyone has ever said to her.",
        textId: "Ia berumur sebelas tahun saat pertama kali mengiringi pesta pernikahan. Tangannya nyaris tidak bergerak. Nenek seseorang berkata, \"Itu cara main yang lama,\" dan itulah pujian terbaik yang pernah ia terima."
      },
      {
        illustrationSeed: "villagedrum-9",
        textEn: "The drum is still there and it still belongs to nobody. Ida teaches four children now, and the very first thing she teaches them is how to sit still and listen to a room.",
        textId: "Gendang itu masih ada dan masih bukan milik siapa-siapa. Kini Ida mengajar empat anak, dan hal pertama yang ia ajarkan adalah cara duduk diam dan mendengarkan sebuah ruangan."
      }
    ],
    quiz: [
      {
        questionEn: "What was the rule about the village drum?",
        questionId: "Apa aturan tentang gendang kampung itu?",
        optionsEn: ["Only adults could play it", "Anybody could play it, but nobody could take it home", "You had to pay to play it", "It was only for weddings"],
        optionsId: ["Hanya orang dewasa yang boleh memainkannya", "Siapa pun boleh memainkannya, tapi tak seorang pun boleh membawanya pulang", "Harus membayar untuk memainkannya", "Hanya untuk pesta pernikahan"],
        correctIndex: 1
      },
      {
        questionEn: "What did Pak Umar tell Ida to listen to?",
        questionId: "Pak Umar menyuruh Ida mendengarkan apa?",
        optionsEn: ["Her own hands", "The room, and its echo", "The singers", "The wind outside"],
        optionsId: ["Tangannya sendiri", "Ruangan, dan gemanya", "Para penyanyi", "Angin di luar"],
        correctIndex: 1
      },
      {
        questionEn: "What happens if you hit the drum before the echo finishes?",
        questionId: "Apa yang terjadi kalau gendang dipukul sebelum gemanya habis?",
        optionsEn: ["It sounds better", "The two sounds fight each other", "Nothing happens", "The drum breaks"],
        optionsId: ["Bunyinya jadi lebih bagus", "Kedua bunyi itu saling berkelahi", "Tidak terjadi apa-apa", "Gendangnya pecah"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "two-kitchens-on-one-street",
    titleEn: "Two Kitchens on One Street",
    titleId: "Dua Dapur di Satu Jalan",
    descriptionEn: "The Salims and the Fernandes live either side of a low wall. For most of the year it is just a wall. Twice a year it is a counter.",
    descriptionId: "Keluarga Salim dan keluarga Fernandes tinggal di dua sisi tembok rendah. Sepanjang tahun tembok itu hanya tembok. Dua kali setahun ia jadi meja hidang.",
    categorySlug: "holidays-culture",
    authorSlug: "axto-creative-team",
    coverEmoji: "🍲",
    coverPalette: "sunrise",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "twokitchens-1",
        textEn: "The Salim family and the Fernandes family lived on either side of a low wall, and for most of the year the wall was simply a wall and nobody thought about it.",
        textId: "Keluarga Salim dan keluarga Fernandes tinggal di dua sisi sebuah tembok rendah, dan sepanjang tahun tembok itu hanya sekadar tembok yang tak dipikirkan siapa pun."
      },
      {
        illustrationSeed: "twokitchens-2",
        textEn: "Twice a year it became a counter. In Ramadan the Salims cooked all afternoon, and in December the Fernandes did, and the smell went straight over the top regardless of anybody's opinion.",
        textId: "Dua kali setahun tembok itu jadi meja hidang. Saat Ramadan keluarga Salim memasak sepanjang sore, dan pada bulan Desember giliran keluarga Fernandes, dan aromanya melintas begitu saja tanpa peduli pendapat siapa pun."
      },
      {
        illustrationSeed: "twokitchens-3",
        textEn: "Lina Fernandes was seven the year she asked why the Salims ate at night. Her mother said, \"Go and ask them, they are right there,\" which was not the answer she had been expecting.",
        textId: "Lina Fernandes berumur tujuh tahun saat ia bertanya mengapa keluarga Salim makan malam-malam. Ibunya menjawab, \"Tanya saja langsung, orangnya ada di sebelah,\" dan itu bukan jawaban yang ia harapkan."
      },
      {
        illustrationSeed: "twokitchens-4",
        textEn: "So she asked. Ibu Salim explained about fasting from first light, and about the single date you eat first, and about how the first sip of water is the best sip of the whole year.",
        textId: "Maka ia bertanya. Ibu Salim menjelaskan tentang berpuasa sejak fajar, tentang sebutir kurma yang dimakan lebih dulu, dan tentang bagaimana teguk air pertama adalah teguk terbaik sepanjang tahun."
      },
      {
        illustrationSeed: "twokitchens-5",
        textEn: "\"Every year?\" said Lina. \"Every year, and it is never once less good than the year before,\" said Ibu Salim. \"That is the strange part, and I have no explanation for it.\"",
        textId: "\"Setiap tahun?\" tanya Lina. \"Setiap tahun, dan tak pernah sekali pun kalah nikmat dari tahun sebelumnya,\" kata Ibu Salim. \"Itu bagian anehnya, dan Ibu tidak punya penjelasannya.\""
      },
      {
        illustrationSeed: "twokitchens-6",
        textEn: "In December, Adnan Salim leaned over the wall to ask why the Fernandes had put a tree indoors, which is an entirely fair question if nobody has ever explained it to you.",
        textId: "Pada bulan Desember, Adnan Salim mencondongkan badan melewati tembok untuk bertanya mengapa keluarga Fernandes menaruh pohon di dalam rumah — pertanyaan yang sangat wajar kalau memang belum pernah ada yang menjelaskannya."
      },
      {
        illustrationSeed: "twokitchens-7",
        textEn: "He got an answer about light in the darkest part of the year, and a slice of cake shaped like a log, and a story about a baby born in the place where the animals were kept.",
        textId: "Ia mendapat jawaban tentang cahaya di bagian tergelap sepanjang tahun, sepotong kue berbentuk batang kayu, dan sebuah kisah tentang bayi yang lahir di tempat hewan-hewan dikandangkan."
      },
      {
        illustrationSeed: "twokitchens-8",
        textEn: "Neither family changed anything. Nobody joined anything. The wall stayed exactly where it had always been and not one person suggested taking it down.",
        textId: "Tidak ada keluarga yang mengubah apa pun. Tak seorang pun ikut apa pun. Tembok itu tetap di tempatnya seperti selalu dan tak seorang pun mengusulkan merobohkannya."
      },
      {
        illustrationSeed: "twokitchens-9",
        textEn: "But twice a year the plates go over it, in both directions, and every child on that street has grown up knowing two different answers to the question of why we are doing this today.",
        textId: "Tapi dua kali setahun piring-piring melintasinya, ke dua arah, dan setiap anak di jalan itu tumbuh besar dengan mengetahui dua jawaban berbeda atas pertanyaan mengapa hari ini kita melakukan ini."
      }
    ],
    quiz: [
      {
        questionEn: "What did Lina want to know?",
        questionId: "Apa yang ingin diketahui Lina?",
        optionsEn: ["Why the Salims ate at night", "How to cook", "Where the wall came from", "Why it was December"],
        optionsId: ["Mengapa keluarga Salim makan malam-malam", "Cara memasak", "Asal-usul tembok itu", "Mengapa saat itu bulan Desember"],
        correctIndex: 0
      },
      {
        questionEn: "What did Ibu Salim say about the first sip of water?",
        questionId: "Apa kata Ibu Salim tentang teguk air pertama?",
        optionsEn: ["It is never less good, year after year", "It tastes completely normal", "It is always cold", "It comes at noon"],
        optionsId: ["Tak pernah kalah nikmat, dari tahun ke tahun", "Rasanya biasa saja", "Selalu dingin", "Datangnya tengah hari"],
        correctIndex: 0
      },
      {
        questionEn: "What happened to the wall between the houses?",
        questionId: "Apa yang terjadi pada tembok di antara kedua rumah?",
        optionsEn: ["It was taken down", "It stayed where it was, and plates go over it both ways", "It was made taller", "It was painted"],
        optionsId: ["Tembok itu dirobohkan", "Ia tetap di tempatnya, dan piring-piring melintasinya ke dua arah", "Ia ditinggikan", "Ia dicat"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-librarians-who-rode-horses",
    titleEn: "The Librarians Who Rode Horses",
    titleId: "Pustakawan yang Menunggang Kuda",
    descriptionEn: "A true story: in the Kentucky mountains in the 1930s, women rode a hundred miles a week to carry books to families with no road and no school.",
    descriptionId: "Kisah nyata: di pegunungan Kentucky pada tahun 1930-an, para perempuan menunggang kuda ratusan kilometer tiap pekan untuk mengantar buku ke keluarga tanpa jalan dan tanpa sekolah.",
    categorySlug: "true-stories",
    authorSlug: "emily-clark",
    coverEmoji: "📚",
    coverPalette: "meadow",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "packhorse-1",
        textEn: "This one is true. In the mountains of Kentucky, in America, in the 1930s, there were families living far up the creeks with no road, no school bus and no shop.",
        textId: "Yang satu ini kisah nyata. Di pegunungan Kentucky, Amerika, pada tahun 1930-an, ada keluarga-keluarga yang tinggal jauh di hulu sungai kecil tanpa jalan, tanpa bus sekolah, dan tanpa toko."
      },
      {
        illustrationSeed: "packhorse-2",
        textEn: "There was no money either. The whole country was in the worst money trouble it had ever had, and there was certainly none spare for building libraries up a mountain.",
        textId: "Uang pun tidak ada. Seluruh negeri sedang mengalami kesulitan uang terburuk sepanjang sejarahnya, dan jelas tak ada sisa dana untuk membangun perpustakaan di atas gunung."
      },
      {
        illustrationSeed: "packhorse-3",
        textEn: "So somebody had an idea that sounds made up: pay people a small wage to carry the books to the houses instead. On horseback. Up the creeks. In every kind of weather.",
        textId: "Maka seseorang punya gagasan yang terdengar mengada-ada: bayar orang dengan upah kecil untuk mengantarkan bukunya ke rumah-rumah. Dengan menunggang kuda. Menyusuri hulu sungai. Dalam segala cuaca."
      },
      {
        illustrationSeed: "packhorse-4",
        textEn: "Most of the riders were women. They were paid about twenty-eight dollars a month. They rode their own horses, some of them rode mules, and one of them walked her route after her horse died.",
        textId: "Sebagian besar penunggangnya perempuan. Upah mereka sekitar dua puluh delapan dolar sebulan. Mereka menunggang kuda sendiri, sebagian menunggang bagal, dan seorang di antaranya menempuh rutenya dengan berjalan kaki setelah kudanya mati."
      },
      {
        illustrationSeed: "packhorse-5",
        textEn: "A rider might cover a hundred and twenty miles in a week. She went to the same houses again and again, so she learned what each family liked, and she brought it next time.",
        textId: "Seorang penunggang bisa menempuh hampir dua ratus kilometer dalam sepekan. Ia mendatangi rumah yang sama berulang-ulang, sehingga ia hafal kesukaan tiap keluarga, dan ia membawakannya pada kunjungan berikutnya."
      },
      {
        illustrationSeed: "packhorse-6",
        textEn: "There were never enough books. So the librarians took the ones that had fallen to pieces and cut them up, and made scrapbooks — recipes, stories, patterns for quilts — and those were often the most popular things in the bag.",
        textId: "Bukunya tak pernah cukup. Maka para pustakawan mengambil buku-buku yang sudah tercerai-berai lalu menggunting isinya, dan membuat buku tempel — resep, cerita, pola selimut jahit — dan justru itulah yang paling digemari di dalam tas mereka."
      },
      {
        illustrationSeed: "packhorse-7",
        textEn: "Some of the families could not read at all. The riders would sit on the step and read out loud for as long as they could spare, and then get back on the horse and go on to the next place.",
        textId: "Sebagian keluarga sama sekali tidak bisa membaca. Para penunggang akan duduk di undakan rumah dan membacakan keras-keras selama waktu mereka mengizinkan, lalu naik kuda lagi dan melanjutkan ke rumah berikutnya."
      },
      {
        illustrationSeed: "packhorse-8",
        textEn: "It ran for about eight years, and it stopped when the money for it stopped — not because it had failed. By then it had reached something like a hundred thousand people.",
        textId: "Program itu berjalan sekitar delapan tahun, dan berhenti ketika dananya berhenti — bukan karena gagal. Sampai saat itu ia sudah menjangkau kira-kira seratus ribu orang."
      },
      {
        illustrationSeed: "packhorse-9",
        textEn: "There is a photograph of one of them on a horse in deep snow, with the saddlebags full of books. It is worth finding one day. Everything in this story actually happened.",
        textId: "Ada sebuah foto salah seorang dari mereka di atas kuda dalam salju tebal, dengan kantong pelana penuh buku. Suatu hari nanti foto itu layak dicari. Semua yang ada dalam kisah ini benar-benar terjadi."
      }
    ],
    quiz: [
      {
        questionEn: "Where and when did this really happen?",
        questionId: "Di mana dan kapan kisah ini benar-benar terjadi?",
        optionsEn: ["Kentucky, in America, in the 1930s", "India, in 1900", "Indonesia, last year", "Nobody knows"],
        optionsId: ["Kentucky, Amerika, pada tahun 1930-an", "India, tahun 1900", "Indonesia, tahun lalu", "Tak ada yang tahu"],
        correctIndex: 0
      },
      {
        questionEn: "How did the books reach the families?",
        questionId: "Bagaimana buku-buku itu sampai ke keluarga-keluarga itu?",
        optionsEn: ["By post", "Carried on horseback by riders, most of them women", "By car", "The families came down to town"],
        optionsId: ["Lewat pos", "Diantar dengan menunggang kuda, sebagian besar oleh perempuan", "Dengan mobil", "Keluarganya yang turun ke kota"],
        correctIndex: 1
      },
      {
        questionEn: "What did the librarians make from books that had fallen apart?",
        questionId: "Apa yang dibuat para pustakawan dari buku-buku yang sudah tercerai-berai?",
        optionsEn: ["Firewood", "Scrapbooks of recipes, stories and quilt patterns", "Nothing at all", "New covers only"],
        optionsId: ["Kayu bakar", "Buku tempel berisi resep, cerita, dan pola selimut jahit", "Tidak dibuat apa-apa", "Hanya sampul baru"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-chair-nobody-sat-in",
    titleEn: "The Chair Nobody Sat In",
    titleId: "Kursi yang Tak Pernah Diduduki",
    descriptionEn: "It had been Kakek's chair. Six months and eleven days later, Zaki is the only one willing to ask out loud whether they are keeping it empty forever.",
    descriptionId: "Itu dulu kursi Kakek. Enam bulan sebelas hari kemudian, hanya Zaki yang berani bertanya keras-keras apakah kursi itu akan dibiarkan kosong selamanya.",
    categorySlug: "family",
    authorSlug: "axto-creative-team",
    coverEmoji: "🪑",
    coverPalette: "twilight",
    ageMin: 5,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "emptychair-1",
        textEn: "There was a chair at the end of the table that nobody sat in. It was not a rule, exactly. It was just something everybody did, the way you walk around a puddle without deciding to.",
        textId: "Ada satu kursi di ujung meja yang tak pernah diduduki siapa pun. Bukan aturan, sebenarnya. Itu hanya kebiasaan semua orang, seperti kita menghindari genangan air tanpa memutuskannya lebih dulu."
      },
      {
        illustrationSeed: "emptychair-2",
        textEn: "It had been Kakek's chair. He had died in March. It was now September, which made the chair empty for six months and eleven days, and Zaki had counted them.",
        textId: "Itu dulu kursi Kakek. Beliau meninggal bulan Maret. Sekarang sudah September, yang berarti kursi itu kosong selama enam bulan sebelas hari, dan Zaki menghitungnya."
      },
      {
        illustrationSeed: "emptychair-3",
        textEn: "Visitors sat in it sometimes, because how would they know. Nobody ever said anything. Everybody minded. Afterwards there was always a strange quiet washing-up.",
        textId: "Kadang tamu duduk di situ, karena mana mungkin mereka tahu. Tak seorang pun berkata apa-apa. Semua orang keberatan. Sesudahnya selalu ada acara cuci piring yang sunyi dan aneh."
      },
      {
        illustrationSeed: "emptychair-4",
        textEn: "Zaki was the youngest and the only one who would say things out loud. At dinner, with a spoon in his hand, he asked, \"Are we keeping it empty forever?\"",
        textId: "Zaki paling kecil dan satu-satunya yang berani mengucapkan sesuatu keras-keras. Saat makan malam, dengan sendok di tangan, ia bertanya, \"Kursi itu mau kita biarkan kosong selamanya?\""
      },
      {
        illustrationSeed: "emptychair-5",
        textEn: "Nobody answered for a moment. Then his mother put down her spoon and said, \"I do not know. I have been waiting six months for somebody to ask me that.\"",
        textId: "Sesaat tak ada yang menjawab. Lalu ibunya meletakkan sendoknya dan berkata, \"Ibu tidak tahu. Sudah enam bulan Ibu menunggu ada yang menanyakan itu.\""
      },
      {
        illustrationSeed: "emptychair-6",
        textEn: "They talked about it for a long time that evening. Some of them cried, which Zaki had expected. Some of them laughed, which he had not expected at all.",
        textId: "Malam itu mereka membicarakannya lama sekali. Sebagian menangis, dan itu sudah Zaki duga. Sebagian tertawa, dan itu sama sekali tidak ia duga."
      },
      {
        illustrationSeed: "emptychair-7",
        textEn: "His aunt said that Kakek would have hated all this. He had complained about that chair for twenty years — one leg was short — and he had never once got round to fixing it.",
        textId: "Bibinya berkata Kakek pasti benci semua ini. Selama dua puluh tahun beliau mengeluhkan kursi itu — salah satu kakinya pendek — dan tak sekali pun sempat memperbaikinya."
      },
      {
        illustrationSeed: "emptychair-8",
        textEn: "So on Sunday they fixed the leg. It took a small wedge of wood and about four minutes, and it was the first time anybody had touched that chair since March.",
        textId: "Maka pada hari Minggu mereka membetulkan kakinya. Butuh sepotong ganjal kayu kecil dan sekitar empat menit, dan itulah pertama kalinya ada yang menyentuh kursi itu sejak bulan Maret."
      },
      {
        illustrationSeed: "emptychair-9",
        textEn: "Then Zaki sat in it, because he was smallest and it was easiest to ask him. It was just a chair. It was also not just a chair. Both of those were true at once, and the family managed to hold both.",
        textId: "Lalu Zaki duduk di situ, karena ia paling kecil dan paling gampang diminta. Itu hanya sebuah kursi. Itu juga bukan sekadar kursi. Keduanya benar pada saat yang sama, dan keluarga itu sanggup memegang keduanya."
      }
    ],
    quiz: [
      {
        questionEn: "Whose chair had it been?",
        questionId: "Itu dulu kursi siapa?",
        optionsEn: ["Zaki's", "His grandfather's", "A visitor's", "Nobody's"],
        optionsId: ["Kursi Zaki", "Kursi kakeknya", "Kursi tamu", "Bukan kursi siapa-siapa"],
        correctIndex: 1
      },
      {
        questionEn: "Who finally asked about it out loud?",
        questionId: "Siapa yang akhirnya bertanya keras-keras tentang kursi itu?",
        optionsEn: ["His mother", "Zaki, the youngest", "His aunt", "Nobody ever did"],
        optionsId: ["Ibunya", "Zaki, yang paling kecil", "Bibinya", "Tidak pernah ada"],
        correctIndex: 1
      },
      {
        questionEn: "What did the family do on Sunday?",
        questionId: "Apa yang dilakukan keluarga itu pada hari Minggu?",
        optionsEn: ["Threw the chair away", "Fixed its short leg", "Bought a new one", "Moved it to another room"],
        optionsId: ["Membuang kursi itu", "Membetulkan kakinya yang pendek", "Membeli kursi baru", "Memindahkannya ke ruangan lain"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-cow-that-would-not-come-in",
    titleEn: "The Cow That Would Not Come In",
    titleId: "Sapi yang Tak Mau Masuk",
    descriptionEn: "Every cow comes in by itself except Kembang. Ari shouts for three evenings, until his father tells him to go and stand where the cow is standing.",
    descriptionId: "Semua sapi pulang sendiri kecuali Kembang. Tiga sore Ari berteriak-teriak, sampai ayahnya menyuruhnya berdiri di tempat sapi itu berdiri.",
    categorySlug: "farm",
    authorSlug: "siti-aminah",
    coverEmoji: "🐄",
    coverPalette: "meadow",
    ageMin: 4,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "kembang-1",
        textEn: "Every evening the cows came in by themselves. All of them, in the same order, without being asked — except Kembang, who stood at the far end of the field and did not.",
        textId: "Setiap sore sapi-sapi pulang sendiri. Semuanya, dalam urutan yang sama, tanpa disuruh — kecuali Kembang, yang berdiri di ujung padang dan tidak beranjak."
      },
      {
        illustrationSeed: "kembang-2",
        textEn: "Ari was ten and fetching her was his job. He shouted. He waved a stick, which he had been told not to do. He pushed her shoulder, which is like pushing a wall that happens to be warm.",
        textId: "Ari berumur sepuluh tahun dan menjemputnya adalah tugasnya. Ia berteriak. Ia mengibaskan tongkat, padahal sudah dilarang. Ia mendorong bahu sapi itu, yang rasanya seperti mendorong tembok yang kebetulan hangat."
      },
      {
        illustrationSeed: "kembang-3",
        textEn: "His father watched all this for three evenings and then said, \"Stop. Go and stand exactly where she is standing, and look at what she is looking at.\"",
        textId: "Ayahnya memperhatikan semua itu selama tiga sore lalu berkata, \"Berhenti. Pergi dan berdirilah persis di tempat sapi itu berdiri, lalu lihat apa yang sedang ia lihat.\""
      },
      {
        illustrationSeed: "kembang-4",
        textEn: "Ari went and stood beside the cow. From there he could see the gate, and in front of the gate, in the mud, there was a dark wet patch that looked exactly like a hole.",
        textId: "Ari pergi dan berdiri di samping sapi itu. Dari sana ia bisa melihat gerbang, dan di depan gerbang, di lumpur, ada bercak basah gelap yang tampak persis seperti lubang."
      },
      {
        illustrationSeed: "kembang-5",
        textEn: "It was not a hole. It was a puddle sitting over a black stone. But if you were a cow, and nobody had ever explained reflections to you, it looked like the ground had opened up.",
        textId: "Itu bukan lubang. Itu genangan air di atas batu hitam. Tapi kalau kamu seekor sapi, dan tak seorang pun pernah menjelaskan soal pantulan, itu tampak seperti tanah yang terbelah."
      },
      {
        illustrationSeed: "kembang-6",
        textEn: "\"She is not being difficult,\" said his father. \"She is being careful. Those two are not the same thing, and you will save yourself years if you learn the difference now.\"",
        textId: "\"Ia bukan sedang membangkang,\" kata ayahnya. \"Ia sedang berhati-hati. Keduanya bukan hal yang sama, dan kamu akan menghemat bertahun-tahun hidupmu kalau belajar bedanya sekarang.\""
      },
      {
        illustrationSeed: "kembang-7",
        textEn: "They rolled the stone out and filled the dip with gravel. It took twenty minutes. That evening Kembang walked in with all the others as though there had never been any argument at all.",
        textId: "Mereka menggulingkan batu itu keluar dan menimbun cekungannya dengan kerikil. Butuh dua puluh menit. Sore itu Kembang masuk bersama sapi-sapi lain seolah-olah tak pernah ada perselisihan apa pun."
      },
      {
        illustrationSeed: "kembang-8",
        textEn: "Ari thought about all the shouting he had done. \"I was wrong for three days,\" he said. \"You were wrong for three days out loud,\" said his father. \"That is the useful kind.\"",
        textId: "Ari teringat semua teriakannya. \"Aku salah selama tiga hari,\" katanya. \"Kamu salah selama tiga hari secara terbuka,\" kata ayahnya. \"Itu jenis kesalahan yang berguna.\""
      },
      {
        illustrationSeed: "kembang-9",
        textEn: "After that, whenever an animal would not do something, Ari went and stood where it was standing first. It worked far more often than anybody expected, including him.",
        textId: "Sejak itu, setiap kali ada hewan yang tak mau menuruti sesuatu, Ari lebih dulu berdiri di tempat hewan itu berdiri. Cara itu berhasil jauh lebih sering daripada dugaan siapa pun, termasuk dugaannya sendiri."
      }
    ],
    quiz: [
      {
        questionEn: "Why would Kembang not come in?",
        questionId: "Mengapa Kembang tidak mau masuk?",
        optionsEn: ["She was lazy", "A puddle over a dark stone looked like a hole to her", "She was ill", "She was hungry"],
        optionsId: ["Ia malas", "Genangan di atas batu hitam tampak seperti lubang baginya", "Ia sakit", "Ia lapar"],
        correctIndex: 1
      },
      {
        questionEn: "What did Ari's father tell him to do?",
        questionId: "Apa yang ayah Ari suruh lakukan?",
        optionsEn: ["Push harder", "Stand where the cow was standing and look at what she saw", "Leave her outside", "Fetch a rope"],
        optionsId: ["Mendorong lebih kuat", "Berdiri di tempat sapi itu berdiri dan melihat apa yang ia lihat", "Membiarkannya di luar", "Mengambil tali"],
        correctIndex: 1
      },
      {
        questionEn: "Which difference did his father want him to learn?",
        questionId: "Perbedaan apa yang ayahnya ingin ia pelajari?",
        optionsEn: ["Between fast and slow", "Between being difficult and being careful", "Between cows and goats", "Between morning and evening"],
        optionsId: ["Antara cepat dan lambat", "Antara membangkang dan berhati-hati", "Antara sapi dan kambing", "Antara pagi dan sore"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-word-that-was-hard-to-say",
    titleEn: "The Word That Was Hard to Say",
    titleId: "Kata yang Sulit Diucapkan",
    descriptionEn: "Tara can say please and thank you in two languages. She cannot say sorry — because she has always thought it meant something it does not mean.",
    descriptionId: "Tara bisa berkata tolong dan terima kasih dalam dua bahasa. Ia tidak bisa berkata maaf — karena selama ini ia mengira kata itu berarti sesuatu yang sebenarnya bukan artinya.",
    categorySlug: "manners",
    authorSlug: "axto-creative-team",
    coverEmoji: "🤝",
    coverPalette: "sky",
    ageMin: 4,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "hardword-1",
        textEn: "Tara could say please. She could say thank you in two languages. She could say excuse me so politely that visiting adults commented on it to her mother.",
        textId: "Tara bisa berkata tolong. Ia bisa berkata terima kasih dalam dua bahasa. Ia bisa berkata permisi dengan begitu sopan sampai tamu-tamu dewasa memujinya kepada ibunya."
      },
      {
        illustrationSeed: "hardword-2",
        textEn: "She could not say sorry. The word got stuck somewhere behind her teeth and came out as a different word instead — nearly always the word \"but\".",
        textId: "Ia tidak bisa berkata maaf. Kata itu tersangkut entah di mana di balik giginya dan keluar sebagai kata lain — hampir selalu kata \"tapi\"."
      },
      {
        illustrationSeed: "hardword-3",
        textEn: "On Wednesday she knocked over Dimas's model boat. It was an accident, which she said eleven times, and the boat was in three pieces, about which she said nothing at all.",
        textId: "Pada hari Rabu ia menjatuhkan perahu mainan Dimas. Itu tidak sengaja, dan ia mengatakannya sebelas kali, sementara perahu itu patah jadi tiga bagian, dan tentang itu ia tidak berkata apa-apa."
      },
      {
        illustrationSeed: "hardword-4",
        textEn: "\"You have not said sorry,\" said Dimas. \"It was an accident,\" said Tara. \"Yes,\" said Dimas. \"You can be sorry about an accident. That is exactly what sorry is for.\"",
        textId: "\"Kamu belum bilang maaf,\" kata Dimas. \"Aku kan tidak sengaja,\" kata Tara. \"Iya,\" kata Dimas. \"Kamu boleh menyesal atas hal yang tidak disengaja. Justru untuk itulah kata maaf ada.\""
      },
      {
        illustrationSeed: "hardword-5",
        textEn: "Tara had honestly never thought about it that way. She had believed sorry meant I did it on purpose and I admit it, which is why the word had always felt like a trap she was being walked into.",
        textId: "Sejujurnya Tara tak pernah memikirkannya seperti itu. Ia mengira maaf berarti aku sengaja melakukannya dan aku mengakuinya, dan karena itulah kata tersebut selalu terasa seperti jebakan yang sedang dipasang untuknya."
      },
      {
        illustrationSeed: "hardword-6",
        textEn: "She went home and thought about it all evening. She practised the word in the bathroom, out loud, to the mirror, which felt entirely ridiculous and helped anyway.",
        textId: "Ia pulang dan memikirkannya sepanjang malam. Ia melatih kata itu di kamar mandi, keras-keras, di depan cermin, yang terasa sangat konyol dan tetap saja membantu."
      },
      {
        illustrationSeed: "hardword-7",
        textEn: "The next morning she said it. Two syllables. It took about half a second and it did not cost her anything at all, which was the genuinely surprising part.",
        textId: "Keesokan paginya ia mengucapkannya. Dua suku kata. Butuh sekitar setengah detik dan sama sekali tidak merugikannya, dan itulah bagian yang benar-benar mengejutkan."
      },
      {
        illustrationSeed: "hardword-8",
        textEn: "Dimas said \"okay\" and that was the entire response. Then the two of them went and looked at whether the boat could be glued, and it could, mostly.",
        textId: "Dimas menjawab \"oke\" dan hanya itu seluruh tanggapannya. Lalu mereka berdua pergi memeriksa apakah perahu itu bisa dilem, dan ternyata bisa, sebagian besarnya."
      },
      {
        illustrationSeed: "hardword-9",
        textEn: "It is still a hard word for Tara. She says it anyway now, and quickly, before the \"but\" can get in front of it. That is the whole trick, and she will tell anybody who asks.",
        textId: "Kata itu masih sulit bagi Tara. Sekarang ia tetap mengucapkannya, dan cepat-cepat, sebelum kata \"tapi\" sempat menyerobot di depannya. Itulah seluruh triknya, dan ia akan memberitahukannya kepada siapa saja yang bertanya."
      }
    ],
    quiz: [
      {
        questionEn: "Which word was hard for Tara to say?",
        questionId: "Kata apa yang sulit diucapkan Tara?",
        optionsEn: ["Please", "Sorry", "Thank you", "Excuse me"],
        optionsId: ["Tolong", "Maaf", "Terima kasih", "Permisi"],
        correctIndex: 1
      },
      {
        questionEn: "What had Tara wrongly believed sorry meant?",
        questionId: "Selama ini Tara keliru mengira kata maaf berarti apa?",
        optionsEn: ["That she did it on purpose and admitted it", "That she was sad", "That she was leaving", "That she was right"],
        optionsId: ["Bahwa ia sengaja melakukannya dan mengakuinya", "Bahwa ia sedang sedih", "Bahwa ia mau pergi", "Bahwa ia yang benar"],
        correctIndex: 0
      },
      {
        questionEn: "What is her trick now?",
        questionId: "Apa triknya sekarang?",
        optionsEn: ["Saying nothing at all", "Saying sorry quickly, before the \"but\" gets in front of it", "Writing it down instead", "Asking an adult to say it"],
        optionsId: ["Tidak berkata apa-apa", "Mengucapkan maaf cepat-cepat, sebelum kata \"tapi\" menyerobot di depannya", "Menuliskannya saja", "Meminta orang dewasa yang mengucapkannya"],
        correctIndex: 1
      }
    ]
  }
];
