/**
 * Story batch C — hand-written bilingual (EN/ID) read-aloud stories, appended
 * to the library. Batches only ever add; nothing existing is edited or merged.
 *
 * This batch covers the categories still holding only one or two books:
 * animals, ocean-life, nature-environment, holidays-culture, true-stories,
 * science, family, emotions, jungle-safari and farm.
 */
import type { Story } from "./stories";

export const STORIES_BATCH_C: Story[] = [
  {
    slug: "the-crow-who-collected-buttons",
    titleEn: "The Crow Who Collected Buttons",
    titleId: "Gagak yang Mengumpulkan Kancing",
    descriptionEn: "A crow takes small shiny things from the whole village. Nobody minds until she takes the wrong one — and then something unexpected happens.",
    descriptionId: "Seekor gagak mengambil benda-benda kecil berkilau dari seluruh desa. Tak ada yang keberatan sampai ia mengambil benda yang salah — lalu terjadilah sesuatu yang tak terduga.",
    categorySlug: "animals",
    authorSlug: "axto-creative-team",
    coverEmoji: "🐦‍⬛",
    coverPalette: "twilight",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "crow-1",
        textEn: "There was a crow in the village of Sumberan who collected things. Not food — she found her own food. She collected small bright objects and kept them in a hollow at the top of the tallest pine.",
        textId: "Ada seekor gagak di desa Sumberan yang suka mengumpulkan benda. Bukan makanan — ia mencari makanannya sendiri. Ia mengumpulkan benda-benda kecil berkilau dan menyimpannya di lubang pohon pinus tertinggi."
      },
      {
        illustrationSeed: "crow-2",
        textEn: "Buttons, mostly. Also a bottle cap, two coins, a hairpin, a key that opened nothing anyone knew of, and one very small spoon. The village had grown used to it. Things went missing. That was simply the crow.",
        textId: "Kebanyakan kancing. Juga tutup botol, dua keping uang logam, jepit rambut, sebuah kunci yang tak diketahui membuka apa, dan satu sendok yang sangat kecil. Desa itu sudah terbiasa. Barang-barang hilang. Itu memang ulah si gagak."
      },
      {
        illustrationSeed: "crow-3",
        textEn: "Then one afternoon she took Bu Tini's wedding ring from the window ledge where it had been left while Bu Tini washed the rice. And that was different, because Bu Tini's husband had died four years earlier.",
        textId: "Lalu suatu sore ia mengambil cincin kawin Bu Tini dari tepi jendela, tempat cincin itu ditaruh saat Bu Tini mencuci beras. Dan itu berbeda, karena suami Bu Tini telah meninggal empat tahun sebelumnya."
      },
      {
        illustrationSeed: "crow-4",
        textEn: "The whole village came out. Some brought ladders. One man brought a slingshot and was told very firmly to put it away. Nobody could climb high enough, and the crow sat at the top and watched them all.",
        textId: "Seluruh desa keluar. Ada yang membawa tangga. Seorang lelaki membawa ketapel dan dengan tegas disuruh menyimpannya kembali. Tak seorang pun bisa memanjat cukup tinggi, dan si gagak duduk di puncak sambil memandangi mereka semua."
      },
      {
        illustrationSeed: "crow-5",
        textEn: "A boy named Eko had a different idea. He had watched the crow all summer, and he had noticed something: she never took a thing. She traded. Wherever something vanished, a small stone or a feather was left behind.",
        textId: "Seorang anak bernama Eko punya gagasan lain. Ia mengamati si gagak sepanjang musim panas, dan ia menyadari sesuatu: gagak itu tidak pernah sekadar mengambil. Ia menukar. Di mana pun sesuatu lenyap, tertinggal sebutir kerikil atau sehelai bulu."
      },
      {
        illustrationSeed: "crow-6",
        textEn: "So Eko put a saucer on the wall by the pine tree. In it he placed the shiniest thing he owned: a broken watch face, silver, catching the light. And then he sat down on the grass and waited, and did not look up.",
        textId: "Maka Eko meletakkan sebuah lepek di tembok dekat pohon pinus. Di atasnya ia taruh benda paling berkilau miliknya: pecahan kaca jam tangan, keperakan, memantulkan cahaya. Lalu ia duduk di rumput dan menunggu, tanpa menengadah."
      },
      {
        illustrationSeed: "crow-7",
        textEn: "It took two days. On the second evening there was a small sound, and when Eko looked, the watch face was gone and the saucer held a hairpin, a bottle cap, and a thin gold ring.",
        textId: "Butuh dua hari. Pada malam kedua terdengar bunyi kecil, dan ketika Eko melihat, pecahan kaca jam itu sudah lenyap dan di lepek tergeletak sebuah jepit rambut, tutup botol, dan sebentuk cincin emas tipis."
      },
      {
        illustrationSeed: "crow-8",
        textEn: "Bu Tini held the ring in her hand for a long moment without saying anything at all. Then she asked Eko how he had known, and Eko said, \"I watched her. She was never stealing. She was swapping.\"",
        textId: "Bu Tini menggenggam cincin itu lama sekali tanpa berkata apa pun. Lalu ia bertanya kepada Eko bagaimana ia bisa tahu, dan Eko menjawab, \"Saya mengamatinya. Ia tidak pernah mencuri. Ia menukar.\""
      },
      {
        illustrationSeed: "crow-9",
        textEn: "The saucer is still on the wall. People put things in it now — a marble, a foil sweet wrapper, a bead. And most mornings there is something else there instead, left by a crow who has always, all along, been trading fairly.",
        textId: "Lepek itu masih ada di tembok. Kini orang-orang meletakkan sesuatu di sana — kelereng, bungkus permen berkilau, manik-manik. Dan hampir setiap pagi ada benda lain sebagai gantinya, ditinggalkan seekor gagak yang sejak dulu selalu menukar dengan adil."
      }
    ],
    quiz: [
      {
        questionEn: "What did the crow collect?",
        questionId: "Apa yang dikumpulkan si gagak?",
        optionsEn: ["Food", "Small shiny objects", "Leaves", "Sticks"],
        optionsId: ["Makanan", "Benda-benda kecil berkilau", "Daun", "Ranting"],
        correctIndex: 1
      },
      {
        questionEn: "What had Eko noticed about her?",
        questionId: "Apa yang Eko sadari tentang si gagak?",
        optionsEn: ["She was hungry", "She always left something behind in trade", "She was afraid of people", "She could speak"],
        optionsId: ["Ia lapar", "Ia selalu meninggalkan sesuatu sebagai tukaran", "Ia takut manusia", "Ia bisa bicara"],
        correctIndex: 1
      },
      {
        questionEn: "How did Eko get the ring back?",
        questionId: "Bagaimana Eko mendapatkan cincin itu kembali?",
        optionsEn: ["He climbed the tree", "He offered something shinier in a saucer", "He frightened the crow", "He asked the village"],
        optionsId: ["Ia memanjat pohon", "Ia menawarkan benda yang lebih berkilau di sebuah lepek", "Ia menakuti si gagak", "Ia meminta bantuan desa"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-octopus-who-redecorated",
    titleEn: "The Octopus Who Redecorated",
    titleId: "Gurita yang Menata Ulang Rumahnya",
    descriptionEn: "Nita the octopus rearranges her doorstep every single day, and a passing turtle wants to know why she bothers.",
    descriptionId: "Nita si gurita menata ulang halaman rumahnya setiap hari, dan seekor penyu yang lewat ingin tahu mengapa ia repot-repot.",
    categorySlug: "ocean-life",
    authorSlug: "axto-creative-team",
    coverEmoji: "🐙",
    coverPalette: "ocean",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "octo-1",
        textEn: "Nita lived under a ledge of rock where the cold water met the warm. She had eight arms, three hearts, and blue blood, all of which were normal, and one habit that was not.",
        textId: "Nita tinggal di bawah tonjolan batu tempat air dingin bertemu air hangat. Ia punya delapan lengan, tiga jantung, dan darah biru, yang semuanya normal, serta satu kebiasaan yang tidak."
      },
      {
        illustrationSeed: "octo-2",
        textEn: "Every morning she rearranged her doorstep. Shells here. Flat stones there. A curve of coral moved half a body-length to the left, considered, and moved back again.",
        textId: "Setiap pagi ia menata ulang halaman rumahnya. Kerang di sini. Batu pipih di sana. Sepotong karang melengkung digeser setengah badan ke kiri, dipertimbangkan, lalu dikembalikan lagi."
      },
      {
        illustrationSeed: "octo-3",
        textEn: "A turtle called Sabar drifted past most weeks, because turtles drift and are in no hurry. \"You did that yesterday,\" he observed. \"And the day before. It looked perfectly fine both times.\"",
        textId: "Seekor penyu bernama Sabar hanyut lewat hampir setiap minggu, karena penyu memang hanyut dan tidak pernah terburu-buru. \"Kau melakukan itu kemarin,\" katanya. \"Dan kemarinnya lagi. Padahal keduanya sudah tampak bagus.\""
      },
      {
        illustrationSeed: "octo-4",
        textEn: "\"It was fine,\" Nita agreed. \"But the light has changed. In summer it comes over the ledge. In autumn it comes under it. A doorstep for summer light is the wrong doorstep in autumn.\"",
        textId: "\"Memang bagus,\" Nita setuju. \"Tetapi cahayanya berubah. Di musim panas cahaya datang dari atas tonjolan. Di musim gugur dari bawahnya. Halaman untuk cahaya musim panas adalah halaman yang keliru di musim gugur.\""
      },
      {
        illustrationSeed: "octo-5",
        textEn: "Sabar thought about this for a while, as turtles do. \"I have had the same shell my whole life,\" he said eventually. \"I have never once rearranged it.\" \"No,\" said Nita kindly. \"You carry your house. I have to build mine.\"",
        textId: "Sabar memikirkannya sejenak, sebagaimana penyu biasanya. \"Aku punya cangkang yang sama seumur hidupku,\" katanya akhirnya. \"Aku tidak pernah sekali pun menatanya ulang.\" \"Memang tidak,\" kata Nita dengan ramah. \"Kau membawa rumahmu. Aku harus membangun rumahku.\""
      },
      {
        illustrationSeed: "octo-6",
        textEn: "Then the storm came. It came from the north and it moved the sand and it broke coral that had stood for forty years. Sabar pulled his head in and let it pass over him.",
        textId: "Lalu datanglah badai. Ia datang dari utara, memindahkan pasir, dan mematahkan karang yang telah berdiri empat puluh tahun. Sabar menarik kepalanya masuk dan membiarkan badai lewat di atasnya."
      },
      {
        illustrationSeed: "octo-7",
        textEn: "When it was over he swam back to the ledge, and he expected to find nothing. Instead he found Nita already outside, moving a shell, because her doorstep had held. All that rearranging had taught her exactly which stones did not shift.",
        textId: "Ketika badai berlalu ia berenang kembali ke tonjolan batu, dan ia mengira tidak akan menemukan apa-apa. Sebaliknya, ia menemukan Nita sudah di luar, memindahkan sebuah kerang, karena halaman rumahnya bertahan. Semua penataan ulang itu telah mengajarinya persis batu mana yang tidak bergeser."
      },
      {
        illustrationSeed: "octo-8",
        textEn: "\"You were not fussing,\" said Sabar slowly. \"You were learning your own front door.\" Nita moved the coral half a body-length to the left, considered it, and left it there this time.",
        textId: "\"Kau bukan sedang cerewet,\" kata Sabar perlahan. \"Kau sedang mempelajari pintu depanmu sendiri.\" Nita menggeser karang itu setengah badan ke kiri, mempertimbangkannya, dan kali ini membiarkannya di sana."
      },
      {
        illustrationSeed: "octo-9",
        textEn: "Sabar still drifts past most weeks. He no longer asks why she bothers. Sometimes he brings her a good flat stone he has found, and she takes it seriously, and puts it somewhere exact.",
        textId: "Sabar masih hanyut lewat hampir setiap minggu. Ia tidak lagi bertanya mengapa Nita repot-repot. Kadang ia membawakan batu pipih bagus yang ia temukan, dan Nita menerimanya dengan serius, lalu meletakkannya di tempat yang tepat."
      }
    ],
    quiz: [
      {
        questionEn: "Why did Nita rearrange her doorstep?",
        questionId: "Mengapa Nita menata ulang halaman rumahnya?",
        optionsEn: ["She was bored", "Because the light changed with the seasons", "To hide from turtles", "She had lost something"],
        optionsId: ["Ia bosan", "Karena cahaya berubah seiring musim", "Untuk bersembunyi dari penyu", "Ia kehilangan sesuatu"],
        correctIndex: 1
      },
      {
        questionEn: "What happened to Nita's doorstep in the storm?",
        questionId: "Apa yang terjadi pada halaman Nita saat badai?",
        optionsEn: ["It was destroyed", "It held", "It floated away", "It turned to sand"],
        optionsId: ["Hancur", "Bertahan", "Hanyut", "Menjadi pasir"],
        correctIndex: 1
      },
      {
        questionEn: "What did Sabar finally understand?",
        questionId: "Apa yang akhirnya Sabar pahami?",
        optionsEn: ["That Nita was fussy", "That all her practice had taught her which stones held", "That storms are harmless", "That turtles are better"],
        optionsId: ["Bahwa Nita cerewet", "Bahwa latihannya mengajarinya batu mana yang kuat", "Bahwa badai tidak berbahaya", "Bahwa penyu lebih baik"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-stream-that-came-back",
    titleEn: "The Stream That Came Back",
    titleId: "Sungai Kecil yang Kembali",
    descriptionEn: "There used to be a stream behind the school. The oldest people remember it. A class of nine-year-olds decides to find out where it went.",
    descriptionId: "Dulu ada sungai kecil di belakang sekolah. Orang-orang tertua mengingatnya. Sekelas anak berusia sembilan tahun memutuskan mencari tahu ke mana perginya.",
    categorySlug: "nature-environment",
    authorSlug: "axto-creative-team",
    coverEmoji: "🌳",
    coverPalette: "meadow",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "stream-1",
        textEn: "Behind the school at Cempaka there was a long strip of dry ground where nothing much grew: hard packed earth, a few thistles, and a shallow dip running along it that nobody thought about.",
        textId: "Di belakang sekolah Cempaka ada sebidang tanah kering memanjang yang hampir tidak ditumbuhi apa-apa: tanah keras memadat, beberapa rumput berduri, dan cekungan dangkal memanjang yang tak seorang pun pikirkan."
      },
      {
        illustrationSeed: "stream-2",
        textEn: "Then Pak Bakri, who was ninety-one and came to every school concert, said something at the end of one. He said, \"We used to catch fish there. Behind the fence. When I was your size.\"",
        textId: "Lalu Pak Bakri, yang berusia sembilan puluh satu tahun dan datang ke setiap pentas sekolah, mengucapkan sesuatu di akhir acara. Ia berkata, \"Dulu kami memancing di sana. Di balik pagar. Waktu saya sebesar kalian.\""
      },
      {
        illustrationSeed: "stream-3",
        textEn: "Class 4B did not let this go. They found an old map in the district office, badly folded, from before any of their parents were born. And on it, running exactly along the dry dip, was a thin blue line.",
        textId: "Kelas 4B tidak melepaskan begitu saja. Mereka menemukan peta tua di kantor kecamatan, terlipat berantakan, dari masa sebelum orang tua mereka lahir. Dan di peta itu, membentang persis di sepanjang cekungan kering, ada garis biru tipis."
      },
      {
        illustrationSeed: "stream-4",
        textEn: "It had not dried up. It had been buried. Somewhere upstream it had been put into a concrete pipe and sent underground, and everything downstream of that had simply stopped being a stream at all.",
        textId: "Sungai itu tidak mengering. Ia dikubur. Di suatu tempat di hulu, ia dimasukkan ke dalam pipa beton dan dialirkan ke bawah tanah, dan segala yang ada di hilirnya berhenti menjadi sungai sama sekali."
      },
      {
        illustrationSeed: "stream-5",
        textEn: "The children wrote letters. Eleven of them, to the district office, the water authority, and a newspaper. Nine got no reply. One got a polite refusal. One got a phone call from an engineer named Bu Hesti who asked to visit.",
        textId: "Anak-anak menulis surat. Sebelas pucuk, kepada kantor kecamatan, dinas pengairan, dan sebuah surat kabar. Sembilan tidak dibalas. Satu dibalas penolakan sopan. Satu berbuah telepon dari seorang insinyur bernama Bu Hesti yang minta berkunjung."
      },
      {
        illustrationSeed: "stream-6",
        textEn: "Bu Hesti walked the dry dip with a class of nine-year-olds explaining it to her, which she said afterwards was the best site visit of her career. Then she said the difficult part: it would cost money, and take years.",
        textId: "Bu Hesti menyusuri cekungan kering itu sementara sekelas anak sembilan tahun menjelaskannya kepadanya, yang kemudian ia sebut kunjungan lapangan terbaik dalam kariernya. Lalu ia mengatakan bagian yang sulit: itu akan makan biaya, dan butuh bertahun-tahun."
      },
      {
        illustrationSeed: "stream-7",
        textEn: "It took six. The children who wrote the letters were fifteen by the time the machines came, and some had moved away. Three came back for the day the pipe was opened.",
        textId: "Butuh enam tahun. Anak-anak yang menulis surat sudah berusia lima belas ketika alat berat datang, dan sebagian sudah pindah. Tiga di antaranya datang kembali pada hari pipa itu dibuka."
      },
      {
        illustrationSeed: "stream-8",
        textEn: "The water came out slowly at first, brown and unsure, feeling its way along a bed it had not used in sixty years. By the second week it ran clear. By the second spring there were reeds, and then frogs, and then, one morning, a heron.",
        textId: "Airnya keluar perlahan mula-mula, cokelat dan ragu, meraba-raba dasar yang tak ia lalui selama enam puluh tahun. Pada minggu kedua airnya jernih. Pada musim semi kedua tumbuh alang-alang, lalu katak, dan kemudian, suatu pagi, seekor bangau."
      },
      {
        illustrationSeed: "stream-9",
        textEn: "Pak Bakri was ninety-seven. They wheeled him down to the bank and he sat and looked at it for a long time. Then he said, \"There,\" and pointed at a bend, \"that is where the fish were.\" And there were fish there.",
        textId: "Pak Bakri berusia sembilan puluh tujuh. Mereka mendorong kursi rodanya ke tepi sungai dan ia duduk memandanginya lama sekali. Lalu ia berkata, \"Di sana,\" sambil menunjuk sebuah tikungan, \"di situlah ikannya dulu.\" Dan memang ada ikan di sana."
      }
    ],
    quiz: [
      {
        questionEn: "What had happened to the stream?",
        questionId: "Apa yang terjadi pada sungai kecil itu?",
        optionsEn: ["It dried up", "It had been buried in a pipe underground", "It changed direction", "It froze"],
        optionsId: ["Mengering", "Dikubur dalam pipa di bawah tanah", "Berubah arah", "Membeku"],
        correctIndex: 1
      },
      {
        questionEn: "How did the children find out?",
        questionId: "Bagaimana anak-anak mengetahuinya?",
        optionsEn: ["They dug a hole", "An old man remembered it and an old map showed it", "A teacher told them", "They guessed"],
        optionsId: ["Mereka menggali lubang", "Seorang kakek mengingatnya dan peta tua menunjukkannya", "Guru memberi tahu", "Mereka menebak"],
        correctIndex: 1
      },
      {
        questionEn: "How long did the work take?",
        questionId: "Berapa lama pengerjaannya?",
        optionsEn: ["Six weeks", "Six months", "Six years", "Sixty years"],
        optionsId: ["Enam minggu", "Enam bulan", "Enam tahun", "Enam puluh tahun"],
        correctIndex: 2
      }
    ]
  },
  {
    slug: "the-lantern-i-was-not-allowed-to-carry",
    titleEn: "The Lantern I Was Not Allowed to Carry",
    titleId: "Lampion yang Tak Boleh Kubawa",
    descriptionEn: "At the festival every child carries a lantern. Ari is six, and this year he is told he is still too small — which is not the end of the story.",
    descriptionId: "Di festival itu setiap anak membawa lampion. Ari berumur enam tahun, dan tahun ini ia dibilang masih terlalu kecil — dan itu belum akhir ceritanya.",
    categorySlug: "holidays-culture",
    authorSlug: "axto-creative-team",
    coverEmoji: "🏮",
    coverPalette: "sunrise",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "lantern-1",
        textEn: "On the last night of the festival, everybody walks from the square to the river carrying a lantern. The small children carry small ones. The older ones carry the tall paper lanterns with a real candle inside.",
        textId: "Pada malam terakhir festival, semua orang berjalan dari alun-alun ke sungai sambil membawa lampion. Anak-anak kecil membawa yang kecil. Yang lebih besar membawa lampion kertas tinggi dengan lilin sungguhan di dalamnya."
      },
      {
        illustrationSeed: "lantern-2",
        textEn: "Ari was six. He had wanted a tall one for two years. This year he asked, and his mother looked at the candle, and looked at Ari, and said, \"Next year.\"",
        textId: "Ari berumur enam tahun. Ia sudah mengingini lampion tinggi selama dua tahun. Tahun ini ia meminta, dan ibunya menatap lilinnya, lalu menatap Ari, lalu berkata, \"Tahun depan.\""
      },
      {
        illustrationSeed: "lantern-3",
        textEn: "Ari was not fine about this. He said several things he did not entirely mean, and then he sat on the step at the back of the house while the drums started in the square without him.",
        textId: "Ari tidak terima. Ia mengucapkan beberapa hal yang sebenarnya tidak sepenuhnya ia maksudkan, lalu duduk di anak tangga belakang rumah sementara tabuhan gendang mulai bergema di alun-alun tanpa dirinya."
      },
      {
        illustrationSeed: "lantern-4",
        textEn: "His grandmother came and sat beside him, which took her a while, and did not tell him he was being silly. She said, \"Do you know what my job was, the year I was six?\"",
        textId: "Neneknya datang dan duduk di sampingnya, yang memakan waktu cukup lama baginya, dan tidak mengatakan bahwa Ari sedang bersikap konyol. Ia berkata, \"Tahukah kau apa tugasku, ketika aku berumur enam tahun?\""
      },
      {
        illustrationSeed: "lantern-5",
        textEn: "\"I carried the matches,\" she said. \"In a tin. All the way to the river. Because the wind comes off the water and lanterns go out, and somebody has to be able to light them again.\"",
        textId: "\"Aku membawa korek api,\" katanya. \"Dalam kaleng. Sepanjang jalan sampai ke sungai. Karena angin bertiup dari air dan lampion bisa padam, dan harus ada yang bisa menyalakannya kembali.\""
      },
      {
        illustrationSeed: "lantern-6",
        textEn: "She took a small tin out of her pocket. It was old, dented, and had a fish painted on the lid. She put it in Ari's hand and closed his fingers over it and said, \"Now it is yours. Do not lose it. Do not open it while we walk.\"",
        textId: "Ia mengeluarkan kaleng kecil dari sakunya. Kaleng itu tua, penyok, dan bergambar ikan di tutupnya. Ia meletakkannya di tangan Ari, mengatupkan jemarinya, dan berkata, \"Sekarang ini milikmu. Jangan hilang. Jangan dibuka selama kita berjalan.\""
      },
      {
        illustrationSeed: "lantern-7",
        textEn: "They walked. Ari carried the smallest lantern in the whole procession and the tin in his other hand, and he did not once look at the tall lanterns, because he was too busy watching for a light going out.",
        textId: "Mereka berjalan. Ari membawa lampion terkecil di seluruh arak-arakan dan kaleng itu di tangan satunya, dan ia sama sekali tidak melirik lampion-lampion tinggi, karena ia terlalu sibuk mengawasi kalau-kalau ada cahaya yang padam."
      },
      {
        illustrationSeed: "lantern-8",
        textEn: "Near the bridge the wind came off the water exactly as his grandmother had said, and four lanterns went dark at once. Ari was there in nine seconds. His hands shook. He got all four.",
        textId: "Di dekat jembatan angin bertiup dari air persis seperti kata neneknya, dan empat lampion padam sekaligus. Ari sampai di sana dalam sembilan detik. Tangannya gemetar. Ia berhasil menyalakan keempatnya."
      },
      {
        illustrationSeed: "lantern-9",
        textEn: "He is nine now and carries a tall one. But he keeps the tin in his pocket every year, and every year he gives it to somebody smaller on the steps at the back of the house, and tells them what it is for.",
        textId: "Kini ia berumur sembilan tahun dan membawa lampion tinggi. Tetapi ia menyimpan kaleng itu di sakunya setiap tahun, dan setiap tahun ia memberikannya kepada anak yang lebih kecil di anak tangga belakang rumah, sambil menjelaskan untuk apa kaleng itu."
      }
    ],
    quiz: [
      {
        questionEn: "Why could Ari not carry a tall lantern?",
        questionId: "Mengapa Ari belum boleh membawa lampion tinggi?",
        optionsEn: ["He had lost his", "He was still too small for the real candle", "He was unwell", "He did not want one"],
        optionsId: ["Miliknya hilang", "Ia masih terlalu kecil untuk lilin sungguhan", "Ia sakit", "Ia tidak menginginkannya"],
        correctIndex: 1
      },
      {
        questionEn: "What did his grandmother give him?",
        questionId: "Apa yang neneknya berikan kepadanya?",
        optionsEn: ["A bigger lantern", "A tin of matches and a job", "Some money", "A drum"],
        optionsId: ["Lampion yang lebih besar", "Sekaleng korek api dan sebuah tugas", "Sejumlah uang", "Sebuah gendang"],
        correctIndex: 1
      },
      {
        questionEn: "What does Ari do now that he is older?",
        questionId: "Apa yang Ari lakukan sekarang setelah lebih besar?",
        optionsEn: ["Keeps the tin to himself", "Passes the tin to somebody smaller each year", "Stopped going to the festival", "Sold the tin"],
        optionsId: ["Menyimpan kaleng itu untuk dirinya", "Memberikan kaleng itu kepada anak yang lebih kecil setiap tahun", "Berhenti ikut festival", "Menjual kaleng itu"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-woman-who-mapped-the-sea-floor",
    titleEn: "The Woman Who Mapped the Sea Floor",
    titleId: "Perempuan yang Memetakan Dasar Laut",
    descriptionEn: "She was not allowed on the ship. So she drew the bottom of the ocean from a desk, and found something that changed what we know about the Earth.",
    descriptionId: "Ia tidak diizinkan naik kapal. Maka ia menggambar dasar samudra dari balik meja, dan menemukan sesuatu yang mengubah pemahaman kita tentang Bumi.",
    categorySlug: "true-stories",
    authorSlug: "axto-creative-team",
    coverEmoji: "🗺️",
    coverPalette: "ocean",
    ageMin: 8,
    ageMax: 12,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "seafloor-1",
        textEn: "For most of human history, nobody knew what the bottom of the ocean looked like. Sailors knew it was deep. That was roughly the extent of it. Maps of the sea were blank, or decorated with guesses.",
        textId: "Sepanjang sebagian besar sejarah manusia, tak seorang pun tahu seperti apa rupa dasar samudra. Para pelaut tahu bahwa laut itu dalam. Kira-kira sebatas itu. Peta laut kosong, atau dihias dengan tebakan."
      },
      {
        illustrationSeed: "seafloor-2",
        textEn: "In the middle of the twentieth century, ships began dragging sound equipment across the Atlantic, sending a ping down and timing how long it took to come back. Long time: deep. Short time: shallow. It produced pages and pages of numbers.",
        textId: "Pada pertengahan abad kedua puluh, kapal-kapal mulai menyeret alat pengukur bunyi melintasi Atlantik, mengirim pantulan ke bawah dan menghitung berapa lama ia kembali. Lama: dalam. Sebentar: dangkal. Hasilnya berlembar-lembar angka."
      },
      {
        illustrationSeed: "seafloor-3",
        textEn: "There was a geologist called Marie Tharp who was extremely good at turning numbers into pictures. She was not permitted on the research ships — at that time women were kept off them — so she worked from a desk on land.",
        textId: "Ada seorang ahli geologi bernama Marie Tharp yang sangat mahir mengubah angka menjadi gambar. Ia tidak diizinkan naik kapal riset — pada masa itu perempuan dilarang ikut — maka ia bekerja dari meja di darat."
      },
      {
        illustrationSeed: "seafloor-4",
        textEn: "The data came back to her in notebooks. She turned each line of soundings into a profile, and each profile into a strip of drawn sea floor, and then she laid the strips side by side to build a picture of a place no human had ever seen.",
        textId: "Data itu kembali kepadanya dalam buku catatan. Ia mengubah setiap baris pengukuran menjadi profil, dan setiap profil menjadi lajur gambar dasar laut, lalu ia menjajarkan lajur-lajur itu untuk menyusun gambaran tempat yang belum pernah dilihat manusia."
      },
      {
        illustrationSeed: "seafloor-5",
        textEn: "And running down the middle of the Atlantic, in profile after profile, there was a mountain range. That was already suspected. But Tharp saw something else: a deep V-shaped valley running along the very top of it, like a split.",
        textId: "Dan membentang di tengah Atlantik, dalam profil demi profil, ada barisan pegunungan. Itu sudah diduga sebelumnya. Tetapi Tharp melihat hal lain: lembah dalam berbentuk V yang membentang tepat di puncaknya, seperti sebuah belahan."
      },
      {
        illustrationSeed: "seafloor-6",
        textEn: "She said what she thought it meant: that the sea floor was splitting apart, and that the continents were therefore moving. Her colleague looked at her work and used a word that has followed the story ever since. He called it girl talk.",
        textId: "Ia menyampaikan apa yang menurutnya berarti: bahwa dasar laut sedang terbelah, dan karenanya benua-benua bergerak. Rekannya melihat hasil kerjanya dan memakai sebuah kata yang terus melekat pada kisah ini. Ia menyebutnya omongan perempuan."
      },
      {
        illustrationSeed: "seafloor-7",
        textEn: "Tharp did not argue. She did something better. She got the map of earthquake locations — where the ground shakes hardest — and laid it over her drawing of the valley. Every earthquake fell inside her line.",
        textId: "Tharp tidak berdebat. Ia melakukan sesuatu yang lebih baik. Ia mengambil peta lokasi gempa — tempat tanah paling keras berguncang — dan menumpangkannya di atas gambar lembahnya. Setiap gempa jatuh persis di dalam garisnya."
      },
      {
        illustrationSeed: "seafloor-8",
        textEn: "You cannot argue with that. The two maps agreed, and they agreed because both were describing the same thing: a seam where the Earth is pulling itself apart, all the way down the middle of an ocean.",
        textId: "Itu tidak bisa dibantah. Kedua peta itu sepakat, dan mereka sepakat karena keduanya menggambarkan hal yang sama: sebuah jahitan tempat Bumi menarik dirinya terbelah, sepanjang tengah samudra."
      },
      {
        illustrationSeed: "seafloor-9",
        textEn: "It took years for people to accept it. Tharp kept drawing, and eventually published a map of the whole world's ocean floor. She finally went to sea in 1968, aged forty-eight, on a ship crossing the ridge she had already drawn from a desk.",
        textId: "Butuh bertahun-tahun sampai orang menerimanya. Tharp terus menggambar, dan akhirnya menerbitkan peta dasar samudra seluruh dunia. Ia baru berlayar pada tahun 1968, pada usia empat puluh delapan, di atas kapal yang melintasi punggungan yang telah ia gambar dari balik meja."
      }
    ],
    quiz: [
      {
        questionEn: "Why did Marie Tharp work from a desk?",
        questionId: "Mengapa Marie Tharp bekerja dari balik meja?",
        optionsEn: ["She preferred it", "Women were not allowed on the research ships then", "She was afraid of water", "There were no ships"],
        optionsId: ["Ia lebih suka begitu", "Saat itu perempuan tidak diizinkan naik kapal riset", "Ia takut air", "Tidak ada kapal"],
        correctIndex: 1
      },
      {
        questionEn: "What did she notice in the middle of the Atlantic?",
        questionId: "Apa yang ia perhatikan di tengah Atlantik?",
        optionsEn: ["A flat plain", "A deep valley along the top of a mountain range", "An island", "A whirlpool"],
        optionsId: ["Dataran rata", "Lembah dalam di sepanjang puncak barisan pegunungan", "Sebuah pulau", "Pusaran air"],
        correctIndex: 1
      },
      {
        questionEn: "How did she prove her idea?",
        questionId: "Bagaimana ia membuktikan gagasannya?",
        optionsEn: ["She argued louder", "She overlaid the earthquake map and they matched", "She went to sea", "She waited"],
        optionsId: ["Ia berdebat lebih keras", "Ia menumpangkan peta gempa dan keduanya cocok", "Ia berlayar", "Ia menunggu"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "why-does-bread-rise",
    titleEn: "Why Does Bread Rise?",
    titleId: "Mengapa Roti Mengembang?",
    descriptionEn: "Fira wants to know what is actually happening inside the dough. Her father hands her two bowls and says: find out.",
    descriptionId: "Fira ingin tahu apa sebenarnya yang terjadi di dalam adonan. Ayahnya menyerahkan dua mangkuk dan berkata: cari tahu sendiri.",
    categorySlug: "science",
    authorSlug: "axto-creative-team",
    coverEmoji: "🍞",
    coverPalette: "sunrise",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "bread-1",
        textEn: "Fira's father made bread every Saturday. Fira had watched him a hundred times: flour, water, salt, a spoonful of grey-brown powder, mixing, waiting, and then the dough was twice the size it had been.",
        textId: "Ayah Fira membuat roti setiap Sabtu. Fira sudah menontonnya seratus kali: tepung, air, garam, sesendok bubuk cokelat keabu-abuan, diaduk, ditunggu, lalu adonan itu menjadi dua kali lipat besarnya."
      },
      {
        illustrationSeed: "bread-2",
        textEn: "\"But where does the extra come from?\" Fira asked. \"You did not add anything.\" Her father said, \"Good question,\" and got out two bowls instead of answering it.",
        textId: "\"Tapi tambahannya dari mana?\" tanya Fira. \"Ayah tidak menambahkan apa-apa.\" Ayahnya berkata, \"Pertanyaan bagus,\" lalu mengeluarkan dua mangkuk alih-alih menjawabnya."
      },
      {
        illustrationSeed: "bread-3",
        textEn: "In both bowls: the same flour, the same water, the same salt. In bowl one he added the grey-brown powder. In bowl two he added nothing. \"Now we wait,\" he said, \"and you write down what you see.\"",
        textId: "Di kedua mangkuk: tepung yang sama, air yang sama, garam yang sama. Di mangkuk satu ia menambahkan bubuk cokelat keabu-abuan itu. Di mangkuk dua ia tidak menambahkan apa pun. \"Sekarang kita tunggu,\" katanya, \"dan kau catat apa yang kau lihat.\""
      },
      {
        illustrationSeed: "bread-4",
        textEn: "After one hour, bowl two looked exactly the same. Bowl one had risen to the rim and had small holes in the surface, and when Fira put her face close to it, it smelled faintly sour and warm.",
        textId: "Setelah satu jam, mangkuk dua tampak persis sama. Mangkuk satu sudah mengembang sampai bibir mangkuk dan permukaannya berlubang-lubang kecil, dan ketika Fira mendekatkan wajahnya, tercium bau asam samar dan hangat."
      },
      {
        illustrationSeed: "bread-5",
        textEn: "\"The powder is alive,\" her father said. \"It is called yeast. It is a fungus, and there are billions of them in that spoonful, and every one of them is very small and very hungry.\"",
        textId: "\"Bubuk itu hidup,\" kata ayahnya. \"Namanya ragi. Ia sejenis jamur, dan ada miliaran di dalam sesendok itu, dan setiap satunya sangat kecil dan sangat lapar."
      },
      {
        illustrationSeed: "bread-6",
        textEn: "\"They eat the sugars in the flour. And like everything that eats, they let something out afterwards. What they let out is a gas — carbon dioxide — and it has nowhere to go, so it makes bubbles, and the bubbles push the dough up.\"",
        textId: "\"Mereka memakan gula dalam tepung. Dan seperti semua makhluk yang makan, mereka mengeluarkan sesuatu sesudahnya. Yang mereka keluarkan adalah gas — karbon dioksida — dan gas itu tidak punya jalan keluar, jadi ia membentuk gelembung, dan gelembung itu mendorong adonan naik.\""
      },
      {
        illustrationSeed: "bread-7",
        textEn: "Fira ran two more tests, because one is never enough. One bowl in the fridge, one on the warm windowsill. The cold one barely moved. The warm one climbed over the edge and onto the sill.",
        textId: "Fira melakukan dua percobaan lagi, karena satu tidak pernah cukup. Satu mangkuk di kulkas, satu di ambang jendela yang hangat. Yang dingin nyaris tidak bergerak. Yang hangat memanjat melewati bibir mangkuk dan tumpah ke ambang jendela."
      },
      {
        illustrationSeed: "bread-8",
        textEn: "\"So they are slow when they are cold and fast when they are warm,\" she said, writing it down, \"like everything else alive.\" And then, after a moment: \"So the holes in bread are where they breathed.\"",
        textId: "\"Jadi mereka lambat saat dingin dan cepat saat hangat,\" katanya sambil mencatat, \"seperti semua makhluk hidup lainnya.\" Lalu, setelah sesaat: \"Berarti lubang-lubang di roti itu bekas mereka bernapas.\""
      },
      {
        illustrationSeed: "bread-9",
        textEn: "Her father put the loaf in the oven, where the heat kills the yeast and sets the bubbles in place forever. Fira ate two slices and looked very carefully at every hole in them, which is a thing you can only do once you know.",
        textId: "Ayahnya memasukkan adonan ke dalam oven, tempat panas mematikan ragi dan mengunci gelembungnya selamanya. Fira memakan dua iris dan mengamati dengan cermat setiap lubang di dalamnya, hal yang hanya bisa kau lakukan setelah kau tahu."
      }
    ],
    quiz: [
      {
        questionEn: "What is yeast?",
        questionId: "Apa itu ragi?",
        optionsEn: ["A kind of flour", "A living fungus", "A salt", "A type of water"],
        optionsId: ["Sejenis tepung", "Jamur yang hidup", "Sejenis garam", "Sejenis air"],
        correctIndex: 1
      },
      {
        questionEn: "What makes the dough rise?",
        questionId: "Apa yang membuat adonan mengembang?",
        optionsEn: ["Stirring", "Bubbles of gas the yeast lets out", "The salt", "The bowl"],
        optionsId: ["Pengadukan", "Gelembung gas yang dikeluarkan ragi", "Garamnya", "Mangkuknya"],
        correctIndex: 1
      },
      {
        questionEn: "What did the fridge experiment show?",
        questionId: "Apa yang ditunjukkan percobaan kulkas?",
        optionsEn: ["Cold makes yeast faster", "Yeast is slow when cold and fast when warm", "Yeast dies in bowls", "Nothing at all"],
        optionsId: ["Dingin membuat ragi lebih cepat", "Ragi lambat saat dingin dan cepat saat hangat", "Ragi mati di dalam mangkuk", "Tidak menunjukkan apa-apa"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "my-brother-does-not-talk",
    titleEn: "My Brother Does Not Talk",
    titleId: "Adikku Tidak Bicara",
    descriptionEn: "Ines is eight. Her little brother Rio is four and has never said a word. This is a story about the year she stopped waiting for one.",
    descriptionId: "Ines berumur delapan tahun. Adiknya, Rio, berumur empat tahun dan belum pernah mengucapkan satu kata pun. Ini kisah tentang tahun ketika Ines berhenti menunggu kata itu.",
    categorySlug: "family",
    authorSlug: "axto-creative-team",
    coverEmoji: "👨‍👩‍👧‍👦",
    coverPalette: "sunrise",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "rio-1",
        textEn: "My brother Rio is four and he does not talk. Not shy-does-not-talk. He has never said a word, not once, and the doctors have a name for it and it does not really help to say the name.",
        textId: "Adikku Rio berumur empat tahun dan ia tidak bicara. Bukan tidak bicara karena malu. Ia belum pernah mengucapkan satu kata pun, sekali pun, dan para dokter punya sebutan untuk itu, dan menyebutkan namanya tidak terlalu membantu."
      },
      {
        illustrationSeed: "rio-2",
        textEn: "For a long time I waited. Everybody waited. Every family dinner had a moment where somebody looked at him hopefully, and then the moment passed, and we all ate our rice.",
        textId: "Lama sekali aku menunggu. Semua orang menunggu. Setiap makan malam keluarga selalu ada saat ketika seseorang menatapnya penuh harap, lalu saat itu berlalu, dan kami semua melanjutkan makan nasi."
      },
      {
        illustrationSeed: "rio-3",
        textEn: "Then, one Tuesday, I stopped waiting. Not because I gave up. Because I noticed that Rio had been telling me things for years and I had been too busy listening for words to hear any of them.",
        textId: "Lalu, pada suatu Selasa, aku berhenti menunggu. Bukan karena menyerah. Melainkan karena aku sadar Rio sudah bertahun-tahun mengatakan banyak hal kepadaku, dan aku terlalu sibuk mendengarkan kata-kata sampai tidak mendengar satu pun."
      },
      {
        illustrationSeed: "rio-4",
        textEn: "When Rio is happy he taps twice on whatever is nearest — a table, a wall, my arm. Two taps. Always two. He has done it since he could reach the table, and I had never once counted them.",
        textId: "Ketika Rio senang ia mengetuk dua kali pada apa pun yang terdekat — meja, dinding, lenganku. Dua ketukan. Selalu dua. Ia melakukannya sejak bisa menggapai meja, dan aku tidak pernah sekali pun menghitungnya."
      },
      {
        illustrationSeed: "rio-5",
        textEn: "When he wants something he does not point at it. He looks at it, then at you, then back at it. That is a whole sentence. It means: that one, please, and I am asking you specifically.",
        textId: "Ketika ia menginginkan sesuatu ia tidak menunjuk. Ia menatap benda itu, lalu menatapmu, lalu menatapnya lagi. Itu satu kalimat utuh. Artinya: yang itu, tolong, dan aku memintanya kepadamu."
      },
      {
        illustrationSeed: "rio-6",
        textEn: "When something is too much — too loud, too bright, too many people — he presses the back of his hand against his cheek. That means stop. It has always meant stop. Nobody in our family knew that until I wrote it down.",
        textId: "Ketika sesuatu terasa berlebihan — terlalu berisik, terlalu terang, terlalu banyak orang — ia menekankan punggung tangannya ke pipi. Itu artinya berhenti. Selalu berarti berhenti. Tidak ada di keluarga kami yang tahu itu sampai aku menuliskannya."
      },
      {
        illustrationSeed: "rio-7",
        textEn: "I made a book. Nine pages, one thing per page, drawn badly with a photograph taped next to it. I gave it to my mother, my father, my grandmother, and Rio's teacher. Then something changed quite fast.",
        textId: "Aku membuat sebuah buku. Sembilan halaman, satu hal per halaman, digambar dengan buruk dengan foto ditempel di sebelahnya. Aku berikan kepada ibuku, ayahku, nenekku, dan guru Rio. Lalu sesuatu berubah cukup cepat."
      },
      {
        illustrationSeed: "rio-8",
        textEn: "Because when people understood him, Rio stopped having as many bad afternoons. It turns out a lot of what we had thought was Rio being difficult was Rio saying something clearly to a room that did not know his language.",
        textId: "Karena ketika orang-orang memahaminya, Rio tidak lagi sering mengalami sore yang buruk. Ternyata banyak dari apa yang kami kira Rio sedang sulit sebenarnya adalah Rio berbicara dengan jelas kepada ruangan yang tidak mengerti bahasanya."
      },
      {
        illustrationSeed: "rio-9",
        textEn: "He still does not talk. He might one day and he might not. But last week he came and found me, on purpose, from another room, and tapped twice on my arm, and I know exactly what that means.",
        textId: "Ia masih tidak bicara. Mungkin suatu hari nanti, mungkin juga tidak. Tetapi minggu lalu ia datang mencariku, dengan sengaja, dari ruangan lain, lalu mengetuk dua kali di lenganku, dan aku tahu persis apa artinya itu."
      }
    ],
    quiz: [
      {
        questionEn: "What does Rio do when he is happy?",
        questionId: "Apa yang Rio lakukan ketika ia senang?",
        optionsEn: ["He sings", "He taps twice on the nearest thing", "He runs", "He claps"],
        optionsId: ["Ia bernyanyi", "Ia mengetuk dua kali pada benda terdekat", "Ia berlari", "Ia bertepuk tangan"],
        correctIndex: 1
      },
      {
        questionEn: "What did Ines make?",
        questionId: "Apa yang Ines buat?",
        optionsEn: ["A toy", "A book explaining what Rio's signs mean", "A song", "A drawing of herself"],
        optionsId: ["Sebuah mainan", "Buku yang menjelaskan arti isyarat Rio", "Sebuah lagu", "Gambar dirinya"],
        correctIndex: 1
      },
      {
        questionEn: "What changed once people understood him?",
        questionId: "Apa yang berubah setelah orang-orang memahaminya?",
        optionsEn: ["Rio started talking", "Rio had far fewer bad afternoons", "Rio moved away", "Nothing changed"],
        optionsId: ["Rio mulai bicara", "Sore-sore buruk Rio jauh berkurang", "Rio pindah", "Tidak ada yang berubah"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-jar-of-difficult-feelings",
    titleEn: "The Jar of Difficult Feelings",
    titleId: "Toples Perasaan Sulit",
    descriptionEn: "Ken is angry a lot and does not know why. His teacher gives him a jar, some paper, and one rule.",
    descriptionId: "Ken sering marah dan tidak tahu sebabnya. Gurunya memberinya sebuah toples, beberapa lembar kertas, dan satu aturan.",
    categorySlug: "emotions",
    authorSlug: "axto-creative-team",
    coverEmoji: "🫙",
    coverPalette: "twilight",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "jar-1",
        textEn: "Ken was angry a lot that year. It arrived without warning, like weather. One minute he was fine and the next his chest was hot and his hands wanted to push something over.",
        textId: "Ken sering marah tahun itu. Kemarahan datang tanpa peringatan, seperti cuaca. Sesaat ia baik-baik saja dan sesaat kemudian dadanya panas dan tangannya ingin mendorong sesuatu sampai jatuh."
      },
      {
        illustrationSeed: "jar-2",
        textEn: "Adults kept asking him why. Ken did not know why. That was the worst part — being asked a question about yourself that you genuinely cannot answer, over and over, by people who think you are hiding it.",
        textId: "Orang dewasa terus bertanya mengapa. Ken tidak tahu mengapa. Itulah bagian terburuknya — ditanya tentang dirimu sendiri padahal kau sungguh tidak bisa menjawabnya, berulang kali, oleh orang yang mengira kau menyembunyikannya."
      },
      {
        illustrationSeed: "jar-3",
        textEn: "Bu Lestari did not ask why. She gave him a glass jar with a screw lid, a stack of small paper squares and a pencil, and one rule: when it happens, write one word. Not a reason. Just what it felt like.",
        textId: "Bu Lestari tidak bertanya mengapa. Ia memberinya toples kaca bertutup ulir, setumpuk kertas kecil persegi dan sebatang pensil, serta satu aturan: ketika itu datang, tulis satu kata. Bukan alasannya. Cukup rasanya seperti apa."
      },
      {
        illustrationSeed: "jar-4",
        textEn: "The first week the jar filled with the same word over and over. ANGRY. ANGRY. ANGRY. Ken thought this proved the whole thing was pointless and said so, fairly loudly.",
        textId: "Minggu pertama toples itu terisi kata yang sama berulang-ulang. MARAH. MARAH. MARAH. Ken mengira ini membuktikan seluruh caranya sia-sia dan mengatakannya, cukup keras."
      },
      {
        illustrationSeed: "jar-5",
        textEn: "\"Keep going,\" said Bu Lestari. In the third week the words started changing. EMBARRASSED, said one. LEFT OUT, said another. One just said TIRED, which surprised him when he read it back.",
        textId: "\"Lanjutkan saja,\" kata Bu Lestari. Pada minggu ketiga kata-katanya mulai berubah. MALU, tulis salah satunya. TERSISIH, tulis yang lain. Satu hanya bertuliskan LELAH, yang mengejutkannya saat ia membacanya kembali."
      },
      {
        illustrationSeed: "jar-6",
        textEn: "At the end of the month they tipped the jar out on the desk and sorted the papers into piles. The ANGRY pile was big. But next to it there were four other piles, and none of them was anger at all.",
        textId: "Di akhir bulan mereka menumpahkan isi toples ke atas meja dan memilah kertas-kertas itu menjadi beberapa tumpukan. Tumpukan MARAH memang besar. Tetapi di sebelahnya ada empat tumpukan lain, dan tak satu pun dari itu kemarahan."
      },
      {
        illustrationSeed: "jar-7",
        textEn: "\"Anger is loud,\" Bu Lestari said. \"It arrives first and shouts over everything else. Most of the time it is standing in front of something quieter.\" She pointed at the LEFT OUT pile, which was the second biggest.",
        textId: "\"Kemarahan itu berisik,\" kata Bu Lestari. \"Ia datang lebih dulu dan berteriak menutupi yang lain. Sebagian besar waktu ia sedang berdiri menutupi sesuatu yang lebih pelan.\" Ia menunjuk tumpukan TERSISIH, yang kedua terbesar."
      },
      {
        illustrationSeed: "jar-8",
        textEn: "It did not fix everything. Ken still got angry, and twice more that year he pushed something over. But now, sometimes, in the middle of the hot feeling, he could think: this is the left-out one. And that changed what he did next.",
        textId: "Itu tidak menyelesaikan segalanya. Ken masih marah, dan dua kali lagi tahun itu ia mendorong sesuatu sampai jatuh. Tetapi kini, kadang, di tengah rasa panas itu, ia bisa berpikir: ini yang tersisih. Dan itu mengubah apa yang ia lakukan setelahnya."
      },
      {
        illustrationSeed: "jar-9",
        textEn: "He kept the jar. It is on his shelf at home with about sixty papers in it. He does not write in it much any more, but he has never thrown it away, because it is the only place he has ever seen his own feelings from the outside.",
        textId: "Ia menyimpan toples itu. Toples itu ada di raknya di rumah dengan sekitar enam puluh lembar kertas di dalamnya. Ia sudah jarang menulis lagi, tetapi ia tidak pernah membuangnya, karena hanya di sanalah ia pernah melihat perasaannya sendiri dari luar."
      }
    ],
    quiz: [
      {
        questionEn: "What was Bu Lestari's one rule?",
        questionId: "Apa satu aturan dari Bu Lestari?",
        optionsEn: ["Explain why you are angry", "Write one word for what it felt like", "Count to ten", "Say sorry"],
        optionsId: ["Jelaskan mengapa kau marah", "Tulis satu kata tentang rasanya", "Hitung sampai sepuluh", "Minta maaf"],
        correctIndex: 1
      },
      {
        questionEn: "What did the piles of paper show?",
        questionId: "Apa yang ditunjukkan tumpukan kertas itu?",
        optionsEn: ["Only anger", "That other feelings were hiding behind the anger", "That the jar was too small", "Nothing useful"],
        optionsId: ["Hanya kemarahan", "Bahwa ada perasaan lain yang bersembunyi di balik kemarahan", "Bahwa toplesnya terlalu kecil", "Tidak ada yang berguna"],
        correctIndex: 1
      },
      {
        questionEn: "What did Bu Lestari say about anger?",
        questionId: "Apa kata Bu Lestari tentang kemarahan?",
        optionsEn: ["It is always bad", "It is loud and often stands in front of something quieter", "It never changes", "It should be hidden"],
        optionsId: ["Selalu buruk", "Ia berisik dan sering menutupi sesuatu yang lebih pelan", "Tidak pernah berubah", "Harus disembunyikan"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-elephant-who-remembered-the-water",
    titleEn: "The Elephant Who Remembered the Water",
    titleId: "Gajah yang Mengingat Letak Air",
    descriptionEn: "In the worst dry season anyone can recall, the herd follows an old matriarch who has not been that way in thirty years.",
    descriptionId: "Pada musim kemarau terburuk yang bisa diingat siapa pun, kawanan itu mengikuti seekor induk tua yang tidak melewati jalan itu selama tiga puluh tahun.",
    categorySlug: "jungle-safari",
    authorSlug: "axto-creative-team",
    coverEmoji: "🐘",
    coverPalette: "citrus",
    ageMin: 5,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "eleph-1",
        textEn: "The dry season came early and stayed. The grass went from green to yellow to grey. The waterhole at the acacia went down and down until it was a ring of cracked mud with a shine in the middle, and then no shine at all.",
        textId: "Musim kemarau datang lebih awal dan bertahan lama. Rumput berubah dari hijau ke kuning ke kelabu. Kubangan air di dekat pohon akasia menyusut terus sampai tinggal lingkaran lumpur retak dengan kilauan di tengahnya, lalu tak ada kilauan sama sekali."
      },
      {
        illustrationSeed: "eleph-2",
        textEn: "The herd waited. Elephants are patient. But the youngest calf had stopped playing, which is the sign every mother in the herd understands without anybody having to say it.",
        textId: "Kawanan itu menunggu. Gajah itu sabar. Tetapi anak gajah termuda sudah berhenti bermain, dan itulah tanda yang dipahami setiap induk dalam kawanan tanpa perlu diucapkan."
      },
      {
        illustrationSeed: "eleph-3",
        textEn: "The matriarch was called Old Ma by everyone, though of course elephants do not have names, only the particular sound the herd makes when they mean her. She was sixty-two years old. She stood for a whole afternoon facing north-west.",
        textId: "Induk pemimpin itu dipanggil Bunda Tua oleh semua, meskipun tentu saja gajah tidak punya nama, hanya bunyi khas yang dibuat kawanan ketika memaksudkan dirinya. Usianya enam puluh dua tahun. Ia berdiri sepanjang sore menghadap barat laut."
      },
      {
        illustrationSeed: "eleph-4",
        textEn: "Then she walked, and the herd walked behind her, because that is what a herd does. They walked away from the river they knew, away from the trees they knew, into flat country with nothing in it.",
        textId: "Lalu ia berjalan, dan kawanan berjalan di belakangnya, karena itulah yang dilakukan sebuah kawanan. Mereka berjalan menjauhi sungai yang mereka kenal, menjauhi pepohonan yang mereka kenal, menuju dataran kosong tanpa apa-apa."
      },
      {
        illustrationSeed: "eleph-5",
        textEn: "The younger mothers were frightened. There was nothing out there. There had never been anything out there in their whole lives, and their whole lives were the only evidence they had.",
        textId: "Para induk yang lebih muda ketakutan. Tidak ada apa-apa di sana. Sepanjang hidup mereka tidak pernah ada apa pun di sana, dan sepanjang hidup mereka adalah satu-satunya bukti yang mereka punya."
      },
      {
        illustrationSeed: "eleph-6",
        textEn: "They walked for three days. Old Ma did not stop to consider or look around. She walked like somebody crossing their own kitchen in the dark, which is what she was doing, except that the kitchen was ninety kilometres wide.",
        textId: "Mereka berjalan tiga hari. Bunda Tua tidak berhenti untuk menimbang atau melihat sekeliling. Ia berjalan seperti orang menyeberangi dapurnya sendiri dalam gelap, dan memang itulah yang ia lakukan, hanya saja dapurnya selebar sembilan puluh kilometer."
      },
      {
        illustrationSeed: "eleph-7",
        textEn: "On the fourth morning the ground changed under their feet, and then there was a line of green, and then there was a spring coming out of rock in a shallow gorge that none of the young ones had ever seen.",
        textId: "Pada pagi keempat tanah di bawah kaki mereka berubah, lalu muncul garis hijau, lalu ada mata air yang keluar dari batu di sebuah ngarai dangkal yang belum pernah dilihat satu pun gajah muda."
      },
      {
        illustrationSeed: "eleph-8",
        textEn: "Old Ma had been there once. She had been a calf herself, in a dry year, following her own mother. That was fifty-four years earlier. She had not been back since, and she had not needed to be.",
        textId: "Bunda Tua pernah ke sana sekali. Waktu itu ia sendiri masih anak gajah, di tahun yang kering, mengikuti induknya sendiri. Itu lima puluh empat tahun sebelumnya. Ia tidak pernah kembali sejak itu, dan memang tidak perlu."
      },
      {
        illustrationSeed: "eleph-9",
        textEn: "The calf drank and drank and then, that evening, started playing again. And the young mothers stood around Old Ma and touched her with their trunks, which is how elephants say the thing there is no sound for.",
        textId: "Anak gajah itu minum dan terus minum, lalu petang itu mulai bermain lagi. Dan para induk muda berdiri mengelilingi Bunda Tua dan menyentuhnya dengan belalai, yang merupakan cara gajah mengucapkan sesuatu yang tak ada bunyinya."
      }
    ],
    quiz: [
      {
        questionEn: "What was the sign that things had become serious?",
        questionId: "Apa tanda bahwa keadaan sudah gawat?",
        optionsEn: ["The grass turned yellow", "The youngest calf stopped playing", "The sun was hot", "The birds left"],
        optionsId: ["Rumput menguning", "Anak gajah termuda berhenti bermain", "Matahari terik", "Burung-burung pergi"],
        correctIndex: 1
      },
      {
        questionEn: "How did Old Ma know where to go?",
        questionId: "Bagaimana Bunda Tua tahu ke mana harus pergi?",
        optionsEn: ["She guessed", "She remembered it from when she was a calf", "She followed birds", "She smelled it"],
        optionsId: ["Ia menebak", "Ia mengingatnya sejak masih anak gajah", "Ia mengikuti burung", "Ia menciumnya"],
        correctIndex: 1
      },
      {
        questionEn: "How long had it been since she was there?",
        questionId: "Berapa lama sejak ia terakhir ke sana?",
        optionsEn: ["Five years", "Fifty-four years", "One year", "She had never been"],
        optionsId: ["Lima tahun", "Lima puluh empat tahun", "Satu tahun", "Ia belum pernah ke sana"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-hen-who-would-not-be-hurried",
    titleEn: "The Hen Who Would Not Be Hurried",
    titleId: "Ayam Betina yang Tak Mau Diburu-buru",
    descriptionEn: "Every hen on the farm lays in the morning. Kembang lays whenever she likes, and a boy learns something about patience the hard way.",
    descriptionId: "Setiap ayam betina di peternakan bertelur pagi hari. Kembang bertelur kapan pun ia suka, dan seorang anak belajar tentang kesabaran dengan cara yang sulit.",
    categorySlug: "farm",
    authorSlug: "axto-creative-team",
    coverEmoji: "🐔",
    coverPalette: "meadow",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "hen-1",
        textEn: "On his grandmother's farm there were fourteen hens, and thirteen of them laid in the morning. You could collect the eggs before breakfast and be done. Then there was Kembang.",
        textId: "Di peternakan neneknya ada empat belas ayam betina, dan tiga belas di antaranya bertelur pagi hari. Kau bisa mengumpulkan telur sebelum sarapan dan selesai. Lalu ada Kembang."
      },
      {
        illustrationSeed: "hen-2",
        textEn: "Kembang laid at eleven. Or at two. Once, memorably, at dusk, in a flowerpot. She was a perfectly good hen in every other respect and she simply would not be organised.",
        textId: "Kembang bertelur pukul sebelas. Atau pukul dua. Pernah sekali, yang tak terlupakan, saat senja, di dalam pot bunga. Dalam hal lain ia ayam yang sangat baik dan ia sekadar tidak mau diatur."
      },
      {
        illustrationSeed: "hen-3",
        textEn: "Bayu was staying for the summer and had been given the eggs as his job. He liked jobs that finished. Kembang meant the job never finished; it just moved around the day like a wasp.",
        textId: "Bayu menginap sepanjang musim liburan dan diberi tugas mengurus telur. Ia suka pekerjaan yang ada selesainya. Kembang membuat pekerjaan itu tidak pernah selesai; ia hanya berpindah-pindah sepanjang hari seperti tawon."
      },
      {
        illustrationSeed: "hen-4",
        textEn: "So Bayu tried to make her hurry. He moved her to the nesting box and shut the door. He stood outside and waited. He came back six times. Kembang did not lay at all that day, or the next.",
        textId: "Maka Bayu berusaha memburu-burunya. Ia memindahkannya ke kotak bertelur dan menutup pintunya. Ia berdiri di luar dan menunggu. Ia kembali enam kali. Kembang sama sekali tidak bertelur hari itu, atau esoknya."
      },
      {
        illustrationSeed: "hen-5",
        textEn: "His grandmother watched all this without saying anything for two days, which is a skill. On the third day she said, \"You have made her frightened. A frightened hen holds on. You will get fewer eggs, not more.\"",
        textId: "Neneknya mengamati semua itu tanpa berkata apa-apa selama dua hari, yang merupakan sebuah keahlian. Pada hari ketiga ia berkata, \"Kau membuatnya takut. Ayam yang takut menahan telurnya. Kau akan dapat lebih sedikit, bukan lebih banyak.\""
      },
      {
        illustrationSeed: "hen-6",
        textEn: "\"Then what am I supposed to do?\" said Bayu, who was hot and cross. His grandmother said, \"Go twice. Once before breakfast for the thirteen. Once before dinner for Kembang. Stop trying to make her be a different hen.\"",
        textId: "\"Lalu aku harus bagaimana?\" kata Bayu, yang kepanasan dan kesal. Neneknya berkata, \"Pergilah dua kali. Sekali sebelum sarapan untuk yang tiga belas. Sekali sebelum makan malam untuk Kembang. Berhentilah memaksanya menjadi ayam yang lain.\""
      },
      {
        illustrationSeed: "hen-7",
        textEn: "It took a week for Kembang to start laying again. When she did, she went back to her old habits entirely: eleven, or two, or once in the flowerpot. Bayu collected them in the evening and stopped counting when they arrived.",
        textId: "Butuh seminggu sampai Kembang mulai bertelur lagi. Ketika ia mulai, ia kembali sepenuhnya ke kebiasaan lamanya: pukul sebelas, atau pukul dua, atau sekali di pot bunga. Bayu mengumpulkannya petang hari dan berhenti mempersoalkan kapan telur itu datang."
      },
      {
        illustrationSeed: "hen-8",
        textEn: "At the end of the summer his grandmother added it up. Kembang had laid more eggs than any other hen on the farm. Not on time. Not conveniently. But more.",
        textId: "Di akhir musim liburan neneknya menghitung semuanya. Kembang bertelur lebih banyak daripada ayam mana pun di peternakan itu. Tidak tepat waktu. Tidak praktis. Tetapi lebih banyak."
      },
      {
        illustrationSeed: "hen-9",
        textEn: "\"Some things go faster if you push them,\" his grandmother said, packing his bag. \"Hens are not one of them. Neither are most of the things worth having.\" Bayu has thought about that sentence quite a lot since.",
        textId: "\"Ada hal-hal yang jadi lebih cepat kalau didorong,\" kata neneknya sambil mengemasi tasnya. \"Ayam bukan salah satunya. Begitu pula kebanyakan hal yang layak dimiliki.\" Bayu cukup sering memikirkan kalimat itu sejak saat itu."
      }
    ],
    quiz: [
      {
        questionEn: "What was unusual about Kembang?",
        questionId: "Apa yang tidak biasa dari Kembang?",
        optionsEn: ["She was very large", "She laid at unpredictable times", "She could not lay eggs", "She lived indoors"],
        optionsId: ["Ia sangat besar", "Ia bertelur pada waktu yang tak terduga", "Ia tidak bisa bertelur", "Ia tinggal di dalam rumah"],
        correctIndex: 1
      },
      {
        questionEn: "What happened when Bayu tried to hurry her?",
        questionId: "Apa yang terjadi ketika Bayu memburu-burunya?",
        optionsEn: ["She laid more", "She stopped laying altogether", "She ran away", "Nothing changed"],
        optionsId: ["Ia bertelur lebih banyak", "Ia berhenti bertelur sama sekali", "Ia kabur", "Tidak ada yang berubah"],
        correctIndex: 1
      },
      {
        questionEn: "How many eggs did Kembang lay over the summer?",
        questionId: "Berapa banyak telur Kembang sepanjang musim liburan?",
        optionsEn: ["The fewest", "More than any other hen", "Exactly average", "None"],
        optionsId: ["Paling sedikit", "Lebih banyak daripada ayam mana pun", "Tepat rata-rata", "Tidak ada"],
        correctIndex: 1
      }
    ]
  }
];
