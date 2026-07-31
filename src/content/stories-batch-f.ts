/**
 * Story batch F — hand-written bilingual (EN/ID) read-aloud stories, appended
 * to the library. Batches only ever add; nothing existing is edited or merged.
 *
 * This batch deliberately fills the ten thinnest shelves: dinosaur, space,
 * alphabet, numbers, fantasy, superheroes, mystery, pirates, princess-knights
 * and pets.
 */
import type { Story } from "./stories";

export const STORIES_BATCH_F: Story[] = [
  {
    slug: "the-dinosaur-that-was-mostly-feathers",
    titleEn: "The Dinosaur That Was Mostly Feathers",
    titleId: "Dinosaurus yang Ternyata Berbulu",
    descriptionEn: "Rani has visited the same grey museum dinosaur her whole life. Then they take it apart, because new fossils showed everyone had it wrong.",
    descriptionId: "Seumur hidup Rani menengok dinosaurus kelabu yang sama di museum. Lalu dinosaurus itu dibongkar, karena fosil baru menunjukkan semua orang telah keliru.",
    categorySlug: "dinosaur",
    authorSlug: "axto-creative-team",
    coverEmoji: "🦖",
    coverPalette: "citrus",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "feathers-1",
        textEn: "Every Saturday Rani visited the same dinosaur. It stood in the middle of the museum hall, grey and bare and enormous, and she had known it her whole life.",
        textId: "Setiap Sabtu Rani menengok dinosaurus yang sama. Dinosaurus itu berdiri di tengah aula museum, kelabu dan gundul dan raksasa, dan Rani sudah mengenalnya seumur hidupnya."
      },
      {
        illustrationSeed: "feathers-2",
        textEn: "Then one Saturday the hall was shut. Behind the plastic sheeting she could see the dinosaur lying in pieces on the floor, like a chair somebody was mending.",
        textId: "Lalu pada suatu Sabtu aula itu ditutup. Di balik lembaran plastik ia melihat dinosaurus itu tergeletak berkeping-keping di lantai, seperti kursi yang sedang diperbaiki."
      },
      {
        illustrationSeed: "feathers-3",
        textEn: "A woman in a dusty apron let her in. \"We are not throwing it away,\" she said. \"We are making it right. We were wrong about this animal for forty years.\"",
        textId: "Seorang perempuan bercelemek berdebu mempersilakannya masuk. \"Kami tidak membuangnya,\" katanya. \"Kami sedang membetulkannya. Selama empat puluh tahun kami keliru tentang hewan ini.\""
      },
      {
        illustrationSeed: "feathers-4",
        textEn: "\"Wrong how?\" said Rani. The woman held up a photograph of a fossil from a quarry far away. Around the bones, pressed into the stone, were thin dark lines — thousands of them. \"Feathers,\" she said.",
        textId: "\"Keliru bagaimana?\" tanya Rani. Perempuan itu mengangkat foto sebuah fosil dari tambang batu yang jauh. Di sekeliling tulang-tulangnya, tercetak di batu, ada garis-garis gelap tipis — ribuan jumlahnya. \"Bulu,\" katanya."
      },
      {
        illustrationSeed: "feathers-5",
        textEn: "\"But it is a dinosaur,\" said Rani. \"Yes,\" said the woman. \"And it had feathers. Not for flying. For keeping warm, and for showing off, the way a peacock shows off.\"",
        textId: "\"Tapi dia dinosaurus,\" kata Rani. \"Ya,\" kata perempuan itu. \"Dan dia berbulu. Bukan untuk terbang. Untuk menghangatkan diri, dan untuk pamer, seperti merak pamer.\""
      },
      {
        illustrationSeed: "feathers-6",
        textEn: "Rani felt something she could not name. She had loved the grey bare dinosaur. It felt like being told that her own grandmother had a different name all along.",
        textId: "Rani merasakan sesuatu yang tak bisa ia namai. Ia menyayangi dinosaurus kelabu yang gundul itu. Rasanya seperti diberi tahu bahwa neneknya sendiri sebenarnya punya nama lain."
      },
      {
        illustrationSeed: "feathers-7",
        textEn: "\"Does it bother you?\" the woman asked. Rani said yes. The woman said, \"Good. It bothered me too. That feeling means you were paying attention all those years.\"",
        textId: "\"Kamu terganggu?\" tanya perempuan itu. Rani menjawab ya. Perempuan itu berkata, \"Bagus. Aku juga terganggu. Perasaan itu artinya selama bertahun-tahun kamu benar-benar memperhatikan.\""
      },
      {
        illustrationSeed: "feathers-8",
        textEn: "They worked for a year. When the hall opened again the dinosaur was rust-red and cream, shaggy down the spine, with a fan of long stiff feathers on each arm. Children shrieked with delight.",
        textId: "Mereka bekerja setahun penuh. Ketika aula dibuka kembali, dinosaurus itu berwarna merah karat dan krem, berbulu lebat sepanjang punggung, dengan kipas bulu panjang dan kaku di tiap lengan. Anak-anak memekik senang."
      },
      {
        illustrationSeed: "feathers-9",
        textEn: "Rani stood a long time. Then she said, to nobody in particular, \"If we find out more, we will change it again.\" And that, she decided, was the best thing about the whole museum.",
        textId: "Rani berdiri lama sekali. Lalu ia berkata, entah kepada siapa, \"Kalau nanti kami tahu lebih banyak, kami akan mengubahnya lagi.\" Dan itu, ia putuskan, adalah hal terbaik dari seluruh museum ini."
      }
    ],
    quiz: [
      {
        questionEn: "Why was the museum taking the dinosaur apart?",
        questionId: "Mengapa museum membongkar dinosaurus itu?",
        optionsEn: ["It was broken", "New fossils showed it had feathers", "They needed the space", "It was being sold"],
        optionsId: ["Karena rusak", "Fosil baru menunjukkan dia berbulu", "Ruangannya dibutuhkan", "Dinosaurusnya dijual"],
        correctIndex: 1
      },
      {
        questionEn: "What were the feathers mainly for?",
        questionId: "Bulu itu terutama untuk apa?",
        optionsEn: ["Flying", "Keeping warm and showing off", "Swimming", "Digging"],
        optionsId: ["Untuk terbang", "Untuk menghangatkan diri dan pamer", "Untuk berenang", "Untuk menggali"],
        correctIndex: 1
      },
      {
        questionEn: "What did Rani decide at the end?",
        questionId: "Apa yang Rani putuskan di akhir cerita?",
        optionsEn: ["That museums are boring", "That if we learn more, we should change it again", "That the old model was better", "That feathers are ugly"],
        optionsId: ["Bahwa museum itu membosankan", "Bahwa kalau kita tahu lebih banyak, kita harus mengubahnya lagi", "Bahwa model lama lebih bagus", "Bahwa bulu itu jelek"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-message-that-took-eight-minutes",
    titleEn: "The Message That Took Eight Minutes",
    titleId: "Pesan yang Menempuh Delapan Menit",
    descriptionEn: "Yusuf stands in the sunshine and learns that the light on his neck is eight minutes old — and that the night sky is a pile of very old letters.",
    descriptionId: "Yusuf berdiri di bawah matahari dan tahu bahwa cahaya di tengkuknya sudah berumur delapan menit — dan bahwa langit malam adalah tumpukan surat yang sangat tua.",
    categorySlug: "space",
    authorSlug: "david-lee",
    coverEmoji: "🛰️",
    coverPalette: "night",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "eightmin-1",
        textEn: "Yusuf's uncle worked at a radio dish that listened to the sky. On the day Yusuf visited, his uncle said, \"Before anything else, I want to show you something about sunlight. Go and stand in it.\"",
        textId: "Paman Yusuf bekerja di sebuah parabola radio yang mendengarkan langit. Pada hari Yusuf berkunjung, pamannya berkata, \"Sebelum apa pun, aku mau menunjukkan sesuatu tentang sinar matahari. Pergilah berdiri di bawahnya.\""
      },
      {
        illustrationSeed: "eightmin-2",
        textEn: "Yusuf stood in the yard. The sun was warm on the back of his neck. \"Now,\" said his uncle, \"that light is old. It left the sun eight minutes ago.\"",
        textId: "Yusuf berdiri di halaman. Matahari terasa hangat di tengkuknya. \"Nah,\" kata pamannya, \"cahaya itu sudah tua. Ia meninggalkan matahari delapan menit yang lalu.\""
      },
      {
        illustrationSeed: "eightmin-3",
        textEn: "\"Eight minutes?\" \"Light is fast — it could go around the whole earth seven times in one second. But the sun is very far away. Even at that speed the journey takes eight minutes and twenty seconds.\"",
        textId: "\"Delapan menit?\" \"Cahaya itu cepat — dalam satu detik ia bisa mengelilingi bumi tujuh kali. Tapi matahari sangat jauh. Bahkan dengan kecepatan itu perjalanannya memakan delapan menit dua puluh detik.\""
      },
      {
        illustrationSeed: "eightmin-4",
        textEn: "Yusuf thought about that. \"So if the sun went out—\" \"We would not know for eight minutes. We would sit here in warm old light, not knowing anything was wrong.\"",
        textId: "Yusuf memikirkannya. \"Jadi kalau matahari padam—\" \"Kita tidak akan tahu selama delapan menit. Kita akan duduk di sini dalam cahaya lama yang hangat, tanpa tahu ada yang tidak beres.\""
      },
      {
        illustrationSeed: "eightmin-5",
        textEn: "His uncle took him inside and showed him the dish's log: faint signals from a spacecraft out near Jupiter. \"That one is forty minutes old,\" he said. \"We send a question and wait an hour and a half for the answer.\"",
        textId: "Pamannya mengajaknya masuk dan menunjukkan catatan parabola itu: sinyal samar dari sebuah wahana antariksa di dekat Jupiter. \"Yang itu berumur empat puluh menit,\" katanya. \"Kami mengirim pertanyaan dan menunggu satu setengah jam untuk jawabannya.\""
      },
      {
        illustrationSeed: "eightmin-6",
        textEn: "\"That is a very slow conversation,\" said Yusuf. \"It is the only kind there is out there,\" his uncle said. \"So we have learned to ask a good question the first time.\"",
        textId: "\"Itu percakapan yang sangat lambat,\" kata Yusuf. \"Hanya itu satu-satunya jenis percakapan di luar sana,\" kata pamannya. \"Jadi kami belajar bertanya dengan baik sejak pertanyaan pertama.\""
      },
      {
        illustrationSeed: "eightmin-7",
        textEn: "That night Yusuf lay on the flat roof and looked at the stars, and tried to think of each one as a letter that had been posted a very long time ago.",
        textId: "Malam itu Yusuf berbaring di atap datar dan menatap bintang-bintang, dan mencoba membayangkan tiap bintang sebagai surat yang dikirim sangat lama sekali."
      },
      {
        illustrationSeed: "eightmin-8",
        textEn: "Some were a few years old. Some were older than his grandmother. One, his uncle said, had set out before anybody on earth had thought of planting a seed on purpose.",
        textId: "Ada yang berumur beberapa tahun. Ada yang lebih tua daripada neneknya. Satu di antaranya, kata pamannya, berangkat sebelum ada manusia di bumi yang terpikir menanam benih dengan sengaja."
      },
      {
        illustrationSeed: "eightmin-9",
        textEn: "\"So the sky is not now,\" said Yusuf. \"No,\" said his uncle. \"The sky is a pile of letters, all arriving at once, all written on different days.\"",
        textId: "\"Jadi langit itu bukan sekarang,\" kata Yusuf. \"Bukan,\" kata pamannya. \"Langit adalah tumpukan surat, tiba bersamaan, tapi ditulis pada hari-hari yang berbeda.\""
      }
    ],
    quiz: [
      {
        questionEn: "How long does sunlight take to reach the earth?",
        questionId: "Berapa lama sinar matahari sampai ke bumi?",
        optionsEn: ["About eight minutes", "One second", "One hour", "A whole day"],
        optionsId: ["Sekitar delapan menit", "Satu detik", "Satu jam", "Sehari penuh"],
        correctIndex: 0
      },
      {
        questionEn: "Why is talking to a spacecraft near Jupiter so slow?",
        questionId: "Mengapa berbicara dengan wahana di dekat Jupiter sangat lambat?",
        optionsEn: ["The radio is old", "The signal takes a long time to travel that far", "Nobody is listening", "The spacecraft is asleep"],
        optionsId: ["Radionya tua", "Sinyalnya butuh waktu lama menempuh jarak sejauh itu", "Tidak ada yang mendengarkan", "Wahananya sedang tidur"],
        correctIndex: 1
      },
      {
        questionEn: "What did Yusuf decide the night sky was like?",
        questionId: "Menurut Yusuf, langit malam itu seperti apa?",
        optionsEn: ["A pile of letters written on different days", "A painting", "A map of the earth", "A single photograph"],
        optionsId: ["Tumpukan surat yang ditulis pada hari-hari berbeda", "Sebuah lukisan", "Peta bumi", "Sebuah foto tunggal"],
        correctIndex: 0
      }
    ]
  },
  {
    slug: "the-day-the-rs-fell-off",
    titleEn: "The Day the R's Fell Off",
    titleId: "Hari Ketika Semua Huruf R Rontok",
    descriptionEn: "One Tuesday every letter R in town falls off the signs, and the children have to say each word out loud to find out where the gaps are.",
    descriptionId: "Pada suatu Selasa semua huruf R di kota rontok dari papan nama, dan anak-anak harus mengeja tiap kata dengan suara keras untuk menemukan lubangnya.",
    categorySlug: "alphabet",
    authorSlug: "siti-aminah",
    coverEmoji: "🔤",
    coverPalette: "candy",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "missingr-1",
        textEn: "On Tuesday morning every letter R in town fell off. Not the sound — only the shapes. They dropped out of the signs and lay in the street like little curled leaves.",
        textId: "Selasa pagi semua huruf R di kota rontok. Bukan bunyinya — hanya bentuknya. Huruf-huruf itu jatuh dari papan nama dan tergeletak di jalan seperti daun-daun kecil yang melengkung."
      },
      {
        illustrationSeed: "missingr-2",
        textEn: "The bakery became BAKE_Y. The library became LIB_A_Y. The sign over Rahma's repair shop said only _AHMA'S _EPAI_ SHOP, which meant nothing at all.",
        textId: "Toko roti jadi TOKO _OTI. Perpustakaan jadi PE_PUSTAKAAN. Papan bengkel Rahma tinggal berbunyi BENGKEL _AHMA, yang sama sekali tidak berarti apa-apa."
      },
      {
        illustrationSeed: "missingr-3",
        textEn: "Rahma herself came out and looked up at it for a while. \"I have lost my own name,\" she said. \"And my trade, and my street, and half of everything I mend.\"",
        textId: "Rahma sendiri keluar dan menatapnya lama. \"Namaku hilang,\" katanya. \"Juga pekerjaanku, juga nama jalanku, juga separuh dari semua yang kuperbaiki.\""
      },
      {
        illustrationSeed: "missingr-4",
        textEn: "The children were sent out with baskets to gather the R's. They were surprisingly heavy. Ravi carried nine of them and said afterwards that his arms felt like rope.",
        textId: "Anak-anak dikirim keliling membawa keranjang untuk memungut huruf R. Ternyata berat sekali. Ravi mengangkut sembilan huruf dan setelahnya bilang lengannya terasa seperti tali."
      },
      {
        illustrationSeed: "missingr-5",
        textEn: "But nobody knew where each R belonged. They stood in front of the greengrocer's — WO_TEL, PISANG (which was fine), ST_AWBE_I — and had to say every word out loud to hear the gap.",
        textId: "Tapi tidak ada yang tahu huruf R yang mana milik papan yang mana. Mereka berdiri di depan kios sayur — WO_TEL, PISANG (yang ini aman), ST_OBE_I — dan harus mengucapkan tiap kata keras-keras untuk mendengar lubangnya."
      },
      {
        illustrationSeed: "missingr-6",
        textEn: "\"Wortel,\" said one of them slowly. \"One. Right after the W.\" \"Strawberry — two, and they are not next to each other.\" \"Pisang has none at all, leave it alone.\"",
        textId: "\"Wor-tel,\" ucap salah seorang pelan-pelan. \"Satu. Tepat setelah W.\" \"Stroberi — dua, dan letaknya tidak berdampingan.\" \"Pisang tidak punya R sama sekali, jangan diapa-apakan.\""
      },
      {
        illustrationSeed: "missingr-7",
        textEn: "It took all day. They fixed the shoe shop, the road signs, the doctor's door, and the word REMEMBER, which needed three and very nearly defeated them.",
        textId: "Kerja itu memakan waktu seharian. Mereka membetulkan toko sepatu, rambu jalan, pintu dokter, dan kata BERSEBERANGAN, yang butuh tiga huruf R dan nyaris mengalahkan mereka."
      },
      {
        illustrationSeed: "missingr-8",
        textEn: "By evening only one R was left in the basket, and only one sign was still broken: the one over the school gate. It said ANAK-ANAK _IANG BE_ANI.",
        textId: "Menjelang malam tinggal satu huruf R di keranjang, dan tinggal satu papan yang masih rumpang: papan di atas gerbang sekolah. Bunyinya ANAK-ANAK YANG BE_ANI."
      },
      {
        illustrationSeed: "missingr-9",
        textEn: "They lifted it together and pressed it in. Then they stood back and read the whole street from one end to the other, out loud, because now at last they could.",
        textId: "Mereka mengangkatnya bersama-sama dan menekannya ke tempatnya. Lalu mereka mundur dan membaca seluruh jalan dari ujung ke ujung, keras-keras, karena akhirnya mereka bisa."
      }
    ],
    quiz: [
      {
        questionEn: "What happened to the town on Tuesday?",
        questionId: "Apa yang terjadi pada kota itu hari Selasa?",
        optionsEn: ["All the letter R shapes fell off the signs", "It rained all day", "The school closed", "A parade came through"],
        optionsId: ["Semua bentuk huruf R rontok dari papan nama", "Hujan seharian", "Sekolah diliburkan", "Ada pawai lewat"],
        correctIndex: 0
      },
      {
        questionEn: "How did the children work out where each R belonged?",
        questionId: "Bagaimana anak-anak tahu tiap huruf R milik papan yang mana?",
        optionsEn: ["They guessed", "They said each word out loud to hear the gap", "They asked a computer", "They left them all out"],
        optionsId: ["Mereka menebak", "Mereka mengucapkan tiap kata keras-keras untuk mendengar lubangnya", "Mereka bertanya pada komputer", "Mereka membiarkannya kosong"],
        correctIndex: 1
      },
      {
        questionEn: "Which sign was fixed last?",
        questionId: "Papan mana yang paling terakhir dibetulkan?",
        optionsEn: ["The bakery", "The sign over the school gate", "The doctor's door", "The road sign"],
        optionsId: ["Toko roti", "Papan di atas gerbang sekolah", "Pintu dokter", "Rambu jalan"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "counting-the-chickens-twice",
    titleEn: "Counting the Chickens Twice",
    titleId: "Menghitung Ayam Dua Kali",
    descriptionEn: "Bima gets a different answer every evening, until his grandfather shows him how to make a moving thing stand still — with a tin and some stones.",
    descriptionId: "Setiap sore Bima mendapat angka yang berbeda, sampai kakeknya menunjukkan cara membuat benda bergerak jadi diam — dengan sebuah kaleng dan beberapa batu.",
    categorySlug: "numbers",
    authorSlug: "axto-creative-team",
    coverEmoji: "🐔",
    coverPalette: "meadow",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "chickens-1",
        textEn: "Every evening Bima had to count the chickens. There were meant to be twenty-three of them. Every evening he got a different number, and every evening he was told to go and count again.",
        textId: "Setiap sore Bima harus menghitung ayam. Seharusnya jumlahnya dua puluh tiga. Setiap sore ia mendapat angka yang berbeda, dan setiap sore ia disuruh menghitung ulang."
      },
      {
        illustrationSeed: "chickens-2",
        textEn: "On Monday he got twenty-one. On Tuesday he got twenty-five, which was worse than twenty-one, because it meant he had counted some poor chicken twice.",
        textId: "Hari Senin ia dapat dua puluh satu. Hari Selasa ia dapat dua puluh lima, yang lebih buruk daripada dua puluh satu, karena itu berarti ada ayam malang yang terhitung dua kali."
      },
      {
        illustrationSeed: "chickens-3",
        textEn: "\"Chickens move,\" said his grandfather, who had been watching from the step. \"You cannot count a moving thing the way you count spoons. The spoons stay where you put them.\"",
        textId: "\"Ayam itu bergerak,\" kata kakeknya, yang sedari tadi memperhatikan dari undakan. \"Kamu tidak bisa menghitung benda bergerak seperti menghitung sendok. Sendok diam di tempat kamu meletakkannya.\""
      },
      {
        illustrationSeed: "chickens-4",
        textEn: "So they tried something else. They shut the coop door, and let the chickens out one at a time, and for every single chicken that came out Bima dropped one small stone into a tin.",
        textId: "Maka mereka mencoba cara lain. Mereka menutup pintu kandang, lalu mengeluarkan ayam satu per satu, dan untuk setiap ekor yang keluar Bima menjatuhkan satu batu kecil ke dalam kaleng."
      },
      {
        illustrationSeed: "chickens-5",
        textEn: "When the coop was empty he tipped the stones out onto the step and counted those instead. Stones do not move. Stones do not go behind the water tank. He got twenty-three.",
        textId: "Ketika kandang sudah kosong, ia menumpahkan batu-batu itu ke undakan dan menghitung batunya. Batu tidak bergerak. Batu tidak menyelinap ke belakang tandon air. Ia mendapat dua puluh tiga."
      },
      {
        illustrationSeed: "chickens-6",
        textEn: "\"The stones did the remembering for you,\" said his grandfather. \"Your only job was to make sure that one chicken always meant exactly one stone. Nothing else.\"",
        textId: "\"Batu-batu itu yang mengingat untukmu,\" kata kakeknya. \"Tugasmu cuma satu: memastikan satu ekor ayam selalu berarti tepat satu batu. Tidak lebih, tidak kurang.\""
      },
      {
        illustrationSeed: "chickens-7",
        textEn: "The next evening a stone was missing. Twenty-two. They looked everywhere, and at last found a hen sitting under the water tank, refusing to move, with four warm eggs beneath her.",
        textId: "Sore berikutnya ada satu batu yang kurang. Dua puluh dua. Mereka mencari ke mana-mana, dan akhirnya menemukan seekor induk ayam duduk di bawah tandon air, tak mau beranjak, dengan empat butir telur hangat di bawahnya."
      },
      {
        illustrationSeed: "chickens-8",
        textEn: "\"So the counting worked,\" said Bima. \"The counting told you where to look,\" said his grandfather. \"That is the only thing counting has ever been for.\"",
        textId: "\"Jadi hitungannya berhasil,\" kata Bima. \"Hitungan itu memberitahumu ke mana harus mencari,\" kata kakeknya. \"Hanya untuk itulah menghitung ada sejak dulu.\""
      },
      {
        illustrationSeed: "chickens-9",
        textEn: "After that Bima kept the tin on a nail beside the door, and every evening the stones went in one by one, quiet and honest, while the chickens made all their usual noise.",
        textId: "Sejak itu Bima menggantung kaleng itu di paku samping pintu, dan setiap sore batu-batu masuk satu per satu, tenang dan jujur, sementara ayam-ayam ribut seperti biasa."
      }
    ],
    quiz: [
      {
        questionEn: "Why did Bima keep getting a different number?",
        questionId: "Mengapa Bima selalu mendapat angka yang berbeda?",
        optionsEn: ["The chickens kept moving while he counted", "He could not count", "There were no chickens", "He counted at the wrong time of day"],
        optionsId: ["Ayam-ayamnya terus bergerak saat ia menghitung", "Ia tidak bisa berhitung", "Ayamnya memang tidak ada", "Ia menghitung di jam yang salah"],
        correctIndex: 0
      },
      {
        questionEn: "What did he use to help him count?",
        questionId: "Apa yang ia pakai untuk membantunya menghitung?",
        optionsEn: ["A rope", "One small stone in a tin for each chicken", "A camera", "A big book"],
        optionsId: ["Seutas tali", "Satu batu kecil di kaleng untuk tiap ekor ayam", "Sebuah kamera", "Sebuah buku besar"],
        correctIndex: 1
      },
      {
        questionEn: "What did the missing stone lead them to find?",
        questionId: "Batu yang kurang itu menuntun mereka menemukan apa?",
        optionsEn: ["A hole in the fence", "A hen with four eggs under the water tank", "A fox", "Nothing at all"],
        optionsId: ["Lubang di pagar", "Induk ayam dengan empat telur di bawah tandon air", "Seekor musang", "Tidak menemukan apa-apa"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-door-under-the-stairs",
    titleEn: "The Door Under the Stairs",
    titleId: "Pintu di Bawah Tangga",
    descriptionEn: "Mira finds a key in a jar of buttons, and behind the painted-shut door is a long quiet room where forgotten things sit on shelves and wait.",
    descriptionId: "Mira menemukan sebuah kunci di toples kancing, dan di balik pintu yang katanya sudah tertutup cat ada ruang panjang yang sunyi tempat barang-barang terlupakan menunggu di rak.",
    categorySlug: "fantasy",
    authorSlug: "axto-creative-team",
    coverEmoji: "🚪",
    coverPalette: "dusk",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "underdoor-1",
        textEn: "The door under the stairs in Mira's grandmother's house had no handle, only a keyhole, and everybody said it was a cupboard that had been painted shut long before anyone remembered.",
        textId: "Pintu di bawah tangga di rumah nenek Mira tidak punya gagang, hanya lubang kunci, dan semua orang bilang itu cuma lemari yang sudah tertutup cat sejak sebelum siapa pun ingat."
      },
      {
        illustrationSeed: "underdoor-2",
        textEn: "Mira found the key in a jar of buttons. It looked far too small for the lock — but when she held it near, the lock leaned over and came to meet it.",
        textId: "Mira menemukan kuncinya di toples kancing. Kunci itu tampak jauh terlalu kecil untuk lubangnya — tapi ketika ia mendekatkannya, lubang kunci itu seolah condong dan menjemputnya."
      },
      {
        illustrationSeed: "underdoor-3",
        textEn: "Behind the door was not a cupboard. It was a long low room, lit like a late afternoon in a house with the curtains half drawn, and it was full of shelves, and the shelves were full.",
        textId: "Di balik pintu itu bukan lemari. Di situ ada ruang panjang dan rendah, terang seperti sore menjelang malam di rumah yang tirainya setengah tertutup, penuh rak, dan rak-raknya penuh isi."
      },
      {
        illustrationSeed: "underdoor-4",
        textEn: "A single glove. A song with the middle missing. A word somebody had known for sixty years and lost on a Thursday. The smell of a house that had been pulled down before Mira was born.",
        textId: "Sebelah sarung tangan. Sebuah lagu yang bagian tengahnya hilang. Sebuah kata yang seseorang kuasai selama enam puluh tahun lalu lenyap pada suatu Kamis. Aroma sebuah rumah yang sudah dirobohkan sebelum Mira lahir."
      },
      {
        illustrationSeed: "underdoor-5",
        textEn: "A man sat at a desk with a ledger open in front of him. \"This is where forgotten things wait,\" he said, without looking up. \"Most are collected in the end. Some are not.\"",
        textId: "Seorang lelaki duduk di meja dengan buku besar terbuka di depannya. \"Di sinilah barang-barang yang terlupakan menunggu,\" katanya, tanpa mendongak. \"Kebanyakan akhirnya diambil kembali. Sebagian tidak.\""
      },
      {
        illustrationSeed: "underdoor-6",
        textEn: "\"Can I take something?\" said Mira. \"You may take back what is yours,\" he said. \"Nothing else. That is the whole rule, and it is not negotiable, and it has never once been bent.\"",
        textId: "\"Boleh aku ambil sesuatu?\" tanya Mira. \"Kamu boleh mengambil kembali apa yang memang milikmu,\" katanya. \"Selain itu tidak. Itu seluruh aturannya, tidak bisa ditawar, dan belum pernah sekali pun dilanggar.\""
      },
      {
        illustrationSeed: "underdoor-7",
        textEn: "Mira walked the shelves for what felt like an hour. She found the tune her mother used to hum while cooking, folded inside a small brown box, and when she opened it the box was warm.",
        textId: "Mira menyusuri rak-rak itu selama yang terasa satu jam. Ia menemukan lagu kecil yang dulu sering disenandungkan ibunya saat memasak, terlipat di dalam kotak cokelat mungil, dan ketika ia membukanya kotak itu terasa hangat."
      },
      {
        illustrationSeed: "underdoor-8",
        textEn: "She also found her grandmother's name for her — a nickname from when Mira was two — and she had not known it was gone until she stood there looking straight at it.",
        textId: "Ia juga menemukan panggilan sayang dari neneknya — nama kecil dari saat Mira berumur dua tahun — dan ia baru sadar nama itu hilang justru ketika ia berdiri menatapnya."
      },
      {
        illustrationSeed: "underdoor-9",
        textEn: "She carried both out. By morning the door was a painted cupboard again. But that evening Mira hummed the tune, and her grandmother stopped in the doorway and said the old nickname out loud, without knowing why.",
        textId: "Ia membawa keduanya keluar. Menjelang pagi pintu itu kembali jadi lemari yang tertutup cat. Tapi malamnya Mira menyenandungkan lagu itu, dan neneknya berhenti di ambang pintu lalu mengucapkan nama kecil itu keras-keras, tanpa tahu mengapa."
      }
    ],
    quiz: [
      {
        questionEn: "What was really behind the door?",
        questionId: "Apa yang sebenarnya ada di balik pintu itu?",
        optionsEn: ["A cupboard", "A room where forgotten things wait", "A garden", "Another staircase"],
        optionsId: ["Sebuah lemari", "Ruang tempat barang-barang terlupakan menunggu", "Sebuah taman", "Tangga yang lain"],
        correctIndex: 1
      },
      {
        questionEn: "What was the one rule of the room?",
        questionId: "Apa satu-satunya aturan di ruang itu?",
        optionsEn: ["Be quiet", "You may only take back what is yours", "Do not touch the shelves", "Leave before dark"],
        optionsId: ["Harus diam", "Kamu hanya boleh mengambil kembali milikmu sendiri", "Jangan menyentuh rak", "Pergi sebelum gelap"],
        correctIndex: 1
      },
      {
        questionEn: "What did Mira bring back with her?",
        questionId: "Apa yang Mira bawa pulang?",
        optionsEn: ["Gold", "A tune her mother hummed, and an old nickname", "A single glove", "A heavy book"],
        optionsId: ["Emas", "Lagu yang dulu disenandungkan ibunya, dan sebuah nama kecil", "Sebelah sarung tangan", "Buku yang berat"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-sidekick-who-did-the-paperwork",
    titleEn: "The Sidekick Who Did the Paperwork",
    titleId: "Pendamping Pahlawan yang Mengurus Berkas",
    descriptionEn: "Everyone knows Captain Meteor. Almost nobody knows Dita, who has never flown once — and who worked out which end of the bridge would go first.",
    descriptionId: "Semua orang kenal Kapten Meteor. Hampir tak ada yang kenal Dita, yang belum pernah sekali pun terbang — dan yang tahu ujung jembatan mana yang akan runtuh lebih dulu.",
    categorySlug: "superheroes",
    authorSlug: "axto-creative-team",
    coverEmoji: "🦸",
    coverPalette: "sky",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "sidekick-1",
        textEn: "Everyone in the city knew Captain Meteor. Almost nobody knew Dita, who worked in a small office behind the launch pad and had never once flown anywhere.",
        textId: "Semua orang di kota itu kenal Kapten Meteor. Hampir tak ada yang kenal Dita, yang bekerja di kantor kecil di belakang landasan peluncuran dan belum pernah sekali pun terbang ke mana-mana."
      },
      {
        illustrationSeed: "sidekick-2",
        textEn: "When Captain Meteor caught a falling crane, the crowd cheered until their throats hurt. When he had gone, Dita arrived with a clipboard and asked whose crane it was, and who would pay to mend the road.",
        textId: "Ketika Kapten Meteor menangkap derek yang jatuh, kerumunan bersorak sampai tenggorokan mereka perih. Setelah ia pergi, Dita datang membawa papan jepit dan bertanya derek itu milik siapa, dan siapa yang akan membayar perbaikan jalan."
      },
      {
        illustrationSeed: "sidekick-3",
        textEn: "She wrote letters. She rang the water company twice. She found the family whose roof had been opened up like a tin, and got them somewhere to sleep that same night.",
        textId: "Ia menulis surat-surat. Ia menelepon perusahaan air dua kali. Ia menemukan keluarga yang atapnya terbuka seperti kaleng, dan mendapatkan tempat tidur untuk mereka pada malam yang sama."
      },
      {
        illustrationSeed: "sidekick-4",
        textEn: "\"You should come out with me sometime,\" Captain Meteor said once. \"You would be good at it.\" Dita said, \"Somebody has to know the name of every single person we save.\"",
        textId: "\"Kapan-kapan ikutlah terbang denganku,\" kata Kapten Meteor suatu kali. \"Kamu pasti hebat.\" Dita menjawab, \"Harus ada yang tahu nama setiap orang yang kita tolong.\""
      },
      {
        illustrationSeed: "sidekick-5",
        textEn: "One winter, the old bridge over the river began to slip. Captain Meteor could hold it — but only one end of it, and only for a while.",
        textId: "Suatu musim hujan, jembatan tua di atas sungai mulai melorot. Kapten Meteor sanggup menahannya — tapi hanya satu ujungnya, dan hanya sebentar."
      },
      {
        illustrationSeed: "sidekick-6",
        textEn: "It was Dita who had the file. Three years of complaints about that bridge, with dates, from people nobody had bothered to listen to. She knew exactly which end would go first.",
        textId: "Ditalah yang menyimpan berkasnya. Tiga tahun aduan tentang jembatan itu, lengkap dengan tanggal, dari orang-orang yang tak pernah didengarkan siapa pun. Ia tahu persis ujung mana yang akan runtuh lebih dulu."
      },
      {
        illustrationSeed: "sidekick-7",
        textEn: "She told him: hold the east side. He held the east side. The west side was already empty, because she had rung the school an hour earlier and they had walked all the children out.",
        textId: "Ia memberi tahu Kapten Meteor: tahan sisi timur. Kapten Meteor menahan sisi timur. Sisi barat sudah kosong, karena satu jam sebelumnya Dita menelepon sekolah dan semua anak sudah dijalankan keluar."
      },
      {
        illustrationSeed: "sidekick-8",
        textEn: "In the newspaper the next day there was a large photograph of a man holding up a bridge. There was no photograph at all of a woman with a telephone and a list of numbers.",
        textId: "Di koran keesokan harinya ada foto besar seorang lelaki menahan jembatan. Sama sekali tidak ada foto seorang perempuan dengan telepon dan daftar nomor."
      },
      {
        illustrationSeed: "sidekick-9",
        textEn: "Dita cut the picture out anyway and pinned it above her desk, right next to the list. Both of these, she thought, are what actually happened.",
        textId: "Dita tetap menggunting foto itu dan menyematkannya di atas mejanya, tepat di sebelah daftar nomornya. Keduanya, pikirnya, barulah kejadian yang sebenarnya."
      }
    ],
    quiz: [
      {
        questionEn: "What was Dita's job?",
        questionId: "Apa pekerjaan Dita?",
        optionsEn: ["Flying beside Captain Meteor", "The paperwork and organising after every rescue", "Building bridges", "Driving the fire engine"],
        optionsId: ["Terbang mendampingi Kapten Meteor", "Mengurus berkas dan penataan setelah tiap penyelamatan", "Membangun jembatan", "Mengemudikan mobil pemadam"],
        correctIndex: 1
      },
      {
        questionEn: "How did she know which end of the bridge would fail?",
        questionId: "Bagaimana ia tahu ujung jembatan mana yang akan runtuh?",
        optionsEn: ["She guessed", "She had three years of complaint files with dates", "Captain Meteor told her", "She saw it crack"],
        optionsId: ["Ia menebak", "Ia punya berkas aduan tiga tahun lengkap dengan tanggal", "Kapten Meteor memberitahunya", "Ia melihat retakannya"],
        correctIndex: 1
      },
      {
        questionEn: "Why were the school children safe?",
        questionId: "Mengapa anak-anak sekolah selamat?",
        optionsEn: ["They were on holiday", "Dita rang the school an hour earlier and they walked out", "Captain Meteor carried them", "The bridge held after all"],
        optionsId: ["Mereka sedang libur", "Dita menelepon sekolah satu jam sebelumnya dan mereka keluar berjalan kaki", "Kapten Meteor menggendong mereka", "Ternyata jembatannya bertahan"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-case-of-the-wet-footprints",
    titleEn: "The Case of the Wet Footprints",
    titleId: "Perkara Jejak Kaki Basah",
    descriptionEn: "Somebody walks through the hallway barefoot before dawn every single morning. Adel decides to solve it properly, with a notebook and no guessing.",
    descriptionId: "Ada yang berjalan bertelanjang kaki di lorong rumah sebelum fajar, setiap pagi. Adel memutuskan memecahkannya dengan benar: pakai buku catatan, tanpa menebak-nebak.",
    categorySlug: "mystery",
    authorSlug: "axto-creative-team",
    coverEmoji: "🔍",
    coverPalette: "forest",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "footprints-1",
        textEn: "Every morning there were wet footprints in the hallway, going from the back door to the kitchen and then back again. Nobody in the house would admit to them.",
        textId: "Setiap pagi ada jejak kaki basah di lorong, dari pintu belakang menuju dapur lalu kembali lagi. Tak seorang pun di rumah itu mau mengaku."
      },
      {
        illustrationSeed: "footprints-2",
        textEn: "Adel decided to be sensible about it. She got a notebook and wrote down what she actually knew, which turned out to be a great deal less than she had expected.",
        textId: "Adel memutuskan untuk bersikap masuk akal. Ia mengambil buku catatan dan menuliskan apa yang benar-benar ia ketahui, yang ternyata jauh lebih sedikit daripada dugaannya."
      },
      {
        illustrationSeed: "footprints-3",
        textEn: "Fact one: the prints were bare feet. Fact two: they were grown-up sized, but not large. Fact three: they were always dry by breakfast, so they were made early — very early.",
        textId: "Fakta satu: jejak itu kaki telanjang. Fakta dua: ukurannya kaki orang dewasa, tapi tidak besar. Fakta tiga: jejaknya selalu sudah kering saat sarapan, jadi dibuat pagi-pagi sekali."
      },
      {
        illustrationSeed: "footprints-4",
        textEn: "Her brother said it was a ghost. Adel wrote that down too, but in a separate list at the back called Ideas With No Evidence, which is exactly where it stayed.",
        textId: "Kakaknya bilang itu hantu. Adel menuliskannya juga, tapi di daftar terpisah di halaman belakang berjudul Gagasan Tanpa Bukti, dan di situlah gagasan itu tinggal."
      },
      {
        illustrationSeed: "footprints-5",
        textEn: "She measured a print against every pair of shoes in the house. Too small for her father. Far too big for her brother. About right for her mother, and about right for her grandmother.",
        textId: "Ia mengukur satu jejak dengan semua sepatu di rumah. Terlalu kecil untuk ayahnya. Jauh terlalu besar untuk kakaknya. Pas untuk ibunya, dan pas juga untuk neneknya."
      },
      {
        illustrationSeed: "footprints-6",
        textEn: "Her mother slept until seven and complained loudly about having to get up. Her grandmother, Adel realised, was always already awake, always already sitting down, always already wearing her slippers.",
        textId: "Ibunya tidur sampai pukul tujuh dan mengeluh keras-keras kalau harus bangun. Neneknya, Adel sadari, selalu sudah bangun, selalu sudah duduk, dan selalu sudah memakai sandal rumah."
      },
      {
        illustrationSeed: "footprints-7",
        textEn: "Always already wearing her slippers. Adel wrote that down and underlined it twice, because a person who has just come in barefoot is exactly the person who would put slippers on.",
        textId: "Selalu sudah memakai sandal. Adel menuliskannya dan menggarisbawahinya dua kali, karena orang yang baru masuk dengan kaki telanjang justru orang yang akan memakai sandal."
      },
      {
        illustrationSeed: "footprints-8",
        textEn: "She got up at half past five. The back door was open. Her grandmother was out in the yard, barefoot in the wet grass, watering the chillies before the sun got high enough to burn them.",
        textId: "Ia bangun pukul setengah enam. Pintu belakang terbuka. Neneknya ada di halaman, bertelanjang kaki di rumput basah, menyiram cabai sebelum matahari cukup tinggi untuk membakarnya."
      },
      {
        illustrationSeed: "footprints-9",
        textEn: "\"You have solved it,\" her grandmother said, not at all surprised. \"Now come and hold the can.\" So the case was closed, and Adel got a new job, and both of those turned out fine.",
        textId: "\"Kamu sudah memecahkannya,\" kata neneknya, sama sekali tidak terkejut. \"Sekarang ke sini, pegang embernya.\" Maka perkara itu ditutup, dan Adel dapat tugas baru, dan keduanya ternyata menyenangkan."
      }
    ],
    quiz: [
      {
        questionEn: "What did Adel do first?",
        questionId: "Apa yang Adel lakukan pertama kali?",
        optionsEn: ["Accused her brother", "Wrote down only what she actually knew", "Set a trap by the door", "Told her father"],
        optionsId: ["Menuduh kakaknya", "Menuliskan hanya apa yang benar-benar ia ketahui", "Memasang jebakan di pintu", "Melapor pada ayahnya"],
        correctIndex: 1
      },
      {
        questionEn: "Where did she put her brother's ghost idea?",
        questionId: "Ke mana ia menaruh gagasan hantu dari kakaknya?",
        optionsEn: ["In the bin", "In a separate list called Ideas With No Evidence", "At the top of her notes", "Nowhere at all"],
        optionsId: ["Ke tempat sampah", "Ke daftar terpisah berjudul Gagasan Tanpa Bukti", "Di baris paling atas catatannya", "Tidak ditaruh di mana-mana"],
        correctIndex: 1
      },
      {
        questionEn: "Who was making the footprints?",
        questionId: "Siapa yang membuat jejak kaki itu?",
        optionsEn: ["Her mother", "Her grandmother, watering the chillies at dawn", "The neighbour", "The cat"],
        optionsId: ["Ibunya", "Neneknya, yang menyiram cabai saat fajar", "Tetangganya", "Kucing"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-pirate-who-kept-a-library",
    titleEn: "The Pirate Who Kept a Library",
    titleId: "Bajak Laut yang Menyimpan Perpustakaan",
    descriptionEn: "Captain Sarina's hold is full of charts instead of gold, and her ship's boy has to write down even the boring days. Then comes the storm.",
    descriptionId: "Palka kapal Kapten Sarina penuh peta, bukan emas, dan bocah kapalnya harus mencatat bahkan hari-hari yang membosankan. Lalu datanglah badai itu.",
    categorySlug: "pirates",
    authorSlug: "emily-clark",
    coverEmoji: "⚓",
    coverPalette: "ocean",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "chartpirate-1",
        textEn: "Captain Sarina's ship was famous along the whole coast for two things: it was very fast, and in twenty years it had never once been lost.",
        textId: "Kapal Kapten Sarina terkenal di sepanjang pesisir karena dua hal: kapal itu sangat cepat, dan selama dua puluh tahun belum pernah sekali pun tersesat."
      },
      {
        illustrationSeed: "chartpirate-2",
        textEn: "Other crews laughed at her cargo. Down in the hold, where the treasure was supposed to be, there were charts — hundreds of them, wrapped in oilcloth, tied in bundles by sea and by season.",
        textId: "Awak kapal lain menertawakan muatannya. Di dalam palka, tempat harta seharusnya berada, yang ada justru peta — ratusan lembar, terbungkus kain minyak, terikat dalam bundel menurut laut dan menurut musim."
      },
      {
        illustrationSeed: "chartpirate-3",
        textEn: "\"Gold sinks,\" Sarina said, whenever anybody asked. \"A chart floats you home. I have watched rich men drown within sight of a beach they could not read.\"",
        textId: "\"Emas itu tenggelam,\" kata Sarina, setiap kali ada yang bertanya. \"Peta membawamu pulang. Aku pernah melihat orang kaya tenggelam tepat di depan pantai yang tak bisa mereka baca.\""
      },
      {
        illustrationSeed: "chartpirate-4",
        textEn: "She bought charts from anybody who had one. Fishermen. Retired harbour pilots. A nervous clerk in a port office who sold her a map of a reef that nobody had ever drawn before.",
        textId: "Ia membeli peta dari siapa saja yang punya. Nelayan. Pandu pelabuhan yang sudah pensiun. Seorang juru tulis gugup di kantor pelabuhan yang menjualnya peta sebuah karang yang belum pernah digambar siapa pun."
      },
      {
        illustrationSeed: "chartpirate-5",
        textEn: "She also made her own. Every single night the ship's boy, Tomas, wrote down the depth, the wind, and anything at all that the water did which it was not supposed to do.",
        textId: "Ia juga membuat sendiri. Setiap malam tanpa terkecuali, bocah kapal bernama Tomas mencatat kedalaman, arah angin, dan apa pun yang dilakukan air yang seharusnya tidak dilakukannya."
      },
      {
        illustrationSeed: "chartpirate-6",
        textEn: "\"Why write down the boring days?\" Tomas asked once, with his hand aching. \"Because a day is only boring until you need it,\" said Sarina. \"Then it is the most useful thing you own.\"",
        textId: "\"Kenapa hari-hari membosankan juga harus dicatat?\" tanya Tomas suatu kali, dengan tangan pegal. \"Karena satu hari itu membosankan hanya sampai kamu membutuhkannya,\" kata Sarina. \"Setelah itu ia jadi milikmu yang paling berguna.\""
      },
      {
        illustrationSeed: "chartpirate-7",
        textEn: "In a storm off a long grey coast, three ships went in and two came out. Sarina's was one of the two, because a fisherman had once mentioned a channel behind an island, and she had written it down.",
        textId: "Dalam badai di lepas pesisir kelabu yang panjang, tiga kapal masuk dan dua keluar. Kapal Sarina salah satu dari yang dua, karena seorang nelayan pernah menyebut soal alur di balik sebuah pulau, dan Sarina mencatatnya."
      },
      {
        illustrationSeed: "chartpirate-8",
        textEn: "The other captain, hauled dripping onto her deck, asked what treasure she was carrying. She took him down and showed him the hold. He laughed until he understood, and then he stopped laughing.",
        textId: "Kapten kapal satunya, yang ditarik ke geladaknya dalam keadaan basah kuyup, bertanya harta apa yang ia bawa. Sarina mengajaknya turun dan menunjukkan palka. Lelaki itu tertawa sampai ia paham, lalu ia berhenti tertawa."
      },
      {
        illustrationSeed: "chartpirate-9",
        textEn: "When Sarina grew old she gave the charts away, to anybody who would copy them properly. That, said Tomas, who was a captain himself by then, was the only thing she ever did that surprised him.",
        textId: "Ketika Sarina menua, ia membagikan semua peta itu kepada siapa saja yang mau menyalinnya dengan benar. Itulah, kata Tomas yang saat itu sudah jadi kapten, satu-satunya hal yang pernah dilakukan Sarina yang mengejutkannya."
      }
    ],
    quiz: [
      {
        questionEn: "What did Captain Sarina keep instead of gold?",
        questionId: "Apa yang disimpan Kapten Sarina alih-alih emas?",
        optionsEn: ["Food", "Charts and maps", "Weapons", "Animals"],
        optionsId: ["Makanan", "Peta dan bagan laut", "Senjata", "Hewan"],
        correctIndex: 1
      },
      {
        questionEn: "Why did Tomas have to write down the boring days too?",
        questionId: "Mengapa Tomas harus mencatat hari-hari yang membosankan juga?",
        optionsEn: ["To practise his writing", "Because a day is only boring until you need it", "To pass the time", "Because the captain liked reading"],
        optionsId: ["Untuk melatih tulisannya", "Karena satu hari itu membosankan hanya sampai kamu membutuhkannya", "Untuk mengisi waktu", "Karena kaptennya suka membaca"],
        correctIndex: 1
      },
      {
        questionEn: "What did Sarina do with the charts when she grew old?",
        questionId: "Apa yang Sarina lakukan dengan peta-petanya ketika ia menua?",
        optionsEn: ["Buried them", "Gave them away to anybody who would copy them", "Sold them for gold", "Burned them"],
        optionsId: ["Menguburnya", "Membagikannya kepada siapa saja yang mau menyalinnya", "Menjualnya demi emas", "Membakarnya"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-knight-who-was-afraid-of-horses",
    titleEn: "The Knight Who Was Afraid of Horses",
    titleId: "Ksatria yang Takut Kuda",
    descriptionEn: "Sir Halim is steady in armour and fair in judgement, and terrified of horses. Princess Amara, who trains them, gives him a task he can actually do.",
    descriptionId: "Sir Halim kokoh berzirah dan adil dalam memutus perkara, tetapi sangat takut pada kuda. Putri Amara, sang pelatih kuda, memberinya tugas yang benar-benar sanggup ia kerjakan.",
    categorySlug: "princess-knights",
    authorSlug: "axto-creative-team",
    coverEmoji: "🛡️",
    coverPalette: "sunset",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "afraidhorse-1",
        textEn: "Sir Halim was a good knight in almost every way. He was steady in armour, he was fair in judgement, he never once shouted at anybody — and he was terrified of horses.",
        textId: "Sir Halim adalah ksatria yang baik dalam hampir segala hal. Ia kokoh berzirah, adil dalam memutus perkara, tak pernah sekali pun membentak siapa pun — dan ia sangat takut pada kuda."
      },
      {
        illustrationSeed: "afraidhorse-2",
        textEn: "He had been kicked when he was seven years old, and the fear had moved in and made itself comfortable, and no amount of being told not to be silly had ever shifted it.",
        textId: "Ia pernah ditendang kuda saat berumur tujuh tahun, dan ketakutan itu masuk lalu betah tinggal, dan segala omelan \"jangan konyol\" tak pernah berhasil mengusirnya."
      },
      {
        illustrationSeed: "afraidhorse-3",
        textEn: "So he walked. He walked to every duty he had, in full armour, and arrived late and hot, and the other knights had a joke about it that was not kind.",
        textId: "Maka ia berjalan kaki. Ia berjalan ke setiap tugasnya, lengkap berzirah, tiba terlambat dan kepanasan, dan para ksatria lain punya lelucon tentang itu yang sama sekali tidak ramah."
      },
      {
        illustrationSeed: "afraidhorse-4",
        textEn: "Princess Amara, who trained every horse in the castle, watched him arrive on foot for the fourth time that month. She did not laugh. She waited until the others had gone.",
        textId: "Putri Amara, yang melatih semua kuda di istana, melihatnya datang berjalan kaki untuk keempat kalinya bulan itu. Ia tidak tertawa. Ia menunggu sampai yang lain pergi."
      },
      {
        illustrationSeed: "afraidhorse-5",
        textEn: "\"Come to the paddock,\" she said. \"Not to ride. Just to stand at the fence. If you touch the fence with one hand, you have done the whole of the task.\"",
        textId: "\"Datanglah ke padang latihan,\" katanya. \"Bukan untuk menunggang. Cukup berdiri di pagar. Kalau kamu menyentuh pagar dengan satu tangan, tugasmu sudah selesai seluruhnya.\""
      },
      {
        illustrationSeed: "afraidhorse-6",
        textEn: "He stood at the fence. That was all. The next week he stood at the fence again. The week after that, a grey mare came over and breathed on his hand, and he did not move, though he badly wanted to.",
        textId: "Ia berdiri di pagar. Hanya itu. Pekan berikutnya ia berdiri lagi di pagar. Pekan berikutnya lagi, seekor kuda betina kelabu mendekat dan mengembuskan napas ke tangannya, dan ia tidak bergerak, meski sangat ingin."
      },
      {
        illustrationSeed: "afraidhorse-7",
        textEn: "\"Horses read you,\" said Amara. \"She knows perfectly well that you are frightened. She does not mind that. What she minds is surprises.\" So he learned to be slow, and to say out loud what he was about to do before he did it.",
        textId: "\"Kuda itu membaca dirimu,\" kata Amara. \"Ia tahu betul kamu takut. Itu tidak jadi soal baginya. Yang jadi soal adalah kejutan.\" Maka Sir Halim belajar bergerak pelan, dan mengucapkan keras-keras apa yang hendak ia lakukan sebelum melakukannya."
      },
      {
        illustrationSeed: "afraidhorse-8",
        textEn: "It took eleven months. He never became a great rider. He became a man who could get onto a horse, ride it at a walk, and get off again without either of them being unhappy about it.",
        textId: "Butuh sebelas bulan. Ia tak pernah jadi penunggang hebat. Ia jadi seorang lelaki yang bisa naik ke punggung kuda, menungganginya dengan langkah pelan, lalu turun lagi tanpa membuat keduanya merasa tidak nyaman."
      },
      {
        illustrationSeed: "afraidhorse-9",
        textEn: "At the spring tournament he came in on horseback, last in the whole line, at a walk. Amara clapped louder than anybody there, because she was the only one who knew what it had cost him.",
        textId: "Pada turnamen musim semi ia masuk dengan menunggang kuda, paling belakang dari seluruh barisan, dengan langkah pelan. Amara bertepuk tangan paling keras di antara semua orang, karena hanya ia yang tahu betapa mahal harganya."
      }
    ],
    quiz: [
      {
        questionEn: "Why was Sir Halim afraid of horses?",
        questionId: "Mengapa Sir Halim takut pada kuda?",
        optionsEn: ["He had never seen one", "A horse kicked him when he was seven", "He was told to be", "He simply preferred walking"],
        optionsId: ["Ia belum pernah melihat kuda", "Seekor kuda menendangnya saat ia berumur tujuh tahun", "Ia disuruh takut", "Ia memang lebih suka berjalan kaki"],
        correctIndex: 1
      },
      {
        questionEn: "What was Amara's first task for him?",
        questionId: "Apa tugas pertama dari Amara untuknya?",
        optionsEn: ["Ride at once", "Just stand at the fence and touch it", "Feed all the horses", "Clean out the stable"],
        optionsId: ["Langsung menunggang", "Cukup berdiri di pagar dan menyentuhnya", "Memberi makan semua kuda", "Membersihkan kandang"],
        correctIndex: 1
      },
      {
        questionEn: "What did he learn to do around horses?",
        questionId: "Apa yang ia pelajari saat berada di dekat kuda?",
        optionsEn: ["Move quickly", "Be slow, and say out loud what he was about to do", "Stay completely silent", "Keep his eyes shut"],
        optionsId: ["Bergerak cepat", "Bergerak pelan, dan mengucapkan keras-keras apa yang hendak ia lakukan", "Diam membisu sepenuhnya", "Memejamkan mata"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-dog-who-waited-at-the-wrong-gate",
    titleEn: "The Dog Who Waited at the Wrong Gate",
    titleId: "Anjing yang Menunggu di Gerbang yang Salah",
    descriptionEn: "The family moved three streets away and took everything, including Poni. Poni keeps going back. It takes Ayu nineteen days and the same three stops.",
    descriptionId: "Keluarga itu pindah tiga jalan jauhnya dan membawa segalanya, termasuk Poni. Poni terus kembali. Butuh sembilan belas hari bagi Ayu, dan tiga perhentian yang sama.",
    categorySlug: "pets",
    authorSlug: "siti-aminah",
    coverEmoji: "🐕",
    coverPalette: "sunrise",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "wronggate-1",
        textEn: "When the Haryanto family moved to the new house, three streets away, they took everything with them: the beds, the pans, the plants in their tins, and the dog, whose name was Poni.",
        textId: "Ketika keluarga Haryanto pindah ke rumah baru, tiga jalan jauhnya, mereka membawa semuanya: ranjang, panci, tanaman dalam kaleng, dan seekor anjing bernama Poni."
      },
      {
        illustrationSeed: "wronggate-2",
        textEn: "On the first morning Poni was gone. They found her at half past six, sitting outside the old gate on Jalan Kemuning, facing the door, waiting.",
        textId: "Pagi pertama Poni menghilang. Mereka menemukannya pukul setengah tujuh, duduk di luar gerbang lama di Jalan Kemuning, menghadap pintu, menunggu."
      },
      {
        illustrationSeed: "wronggate-3",
        textEn: "They brought her home. The next morning she was there again. And the morning after that, and the morning after that one too.",
        textId: "Mereka membawanya pulang. Pagi berikutnya ia ada di sana lagi. Dan pagi berikutnya lagi, dan pagi berikutnya lagi."
      },
      {
        illustrationSeed: "wronggate-4",
        textEn: "\"She thinks we are still inside,\" said Ayu, who was nine and had thought about it a great deal. \"She thinks she is the one who got left behind.\"",
        textId: "\"Ia mengira kita masih di dalam,\" kata Ayu, yang berumur sembilan tahun dan sudah lama memikirkannya. \"Ia mengira dialah yang ditinggalkan.\""
      },
      {
        illustrationSeed: "wronggate-5",
        textEn: "The new family at the old house were kind about it. The grandmother even put a bowl of water out. But she also said, gently, \"You cannot let her keep doing this. She crosses two roads to get here.\"",
        textId: "Keluarga baru di rumah lama itu berbaik hati. Neneknya bahkan menaruh semangkuk air. Tapi ia juga berkata pelan, \"Jangan biarkan ia terus begini. Ia menyeberangi dua jalan untuk sampai ke sini.\""
      },
      {
        illustrationSeed: "wronggate-6",
        textEn: "So Ayu tried something different. Instead of carrying Poni home, she walked her home — the same way every time, slowly, stopping at exactly the same three places.",
        textId: "Maka Ayu mencoba cara lain. Alih-alih menggendong Poni pulang, ia menuntunnya berjalan — lewat jalur yang sama setiap kali, pelan-pelan, berhenti di tiga tempat yang persis sama."
      },
      {
        illustrationSeed: "wronggate-7",
        textEn: "At the corner with the fruit stall, they stopped. At the mosque wall, they stopped. At the blue gate that was theirs now, they stopped, and Ayu opened it and went in first, and Poni followed her in.",
        textId: "Di tikungan dekat lapak buah, mereka berhenti. Di tembok masjid, mereka berhenti. Di gerbang biru yang kini milik mereka, mereka berhenti, lalu Ayu membukanya dan masuk lebih dulu, dan Poni mengikutinya masuk."
      },
      {
        illustrationSeed: "wronggate-8",
        textEn: "It took nineteen days. On the twentieth morning Poni was not at the old gate at all. She was at the corner with the fruit stall — halfway — waiting for Ayu.",
        textId: "Butuh sembilan belas hari. Pada pagi kedua puluh Poni sama sekali tidak ada di gerbang lama. Ia ada di tikungan dekat lapak buah — separuh jalan — menunggu Ayu."
      },
      {
        illustrationSeed: "wronggate-9",
        textEn: "On the thirtieth she was asleep on the step of the new house, in the sun, and she did not get up when the gate opened, because there was no longer anywhere else she needed to be.",
        textId: "Pada hari ketiga puluh ia tertidur di undakan rumah baru, di bawah matahari, dan ia tidak bangun ketika gerbang dibuka, karena tak ada lagi tempat lain yang perlu ia tuju."
      }
    ],
    quiz: [
      {
        questionEn: "Why did Poni keep going back to the old house?",
        questionId: "Mengapa Poni terus kembali ke rumah lama?",
        optionsEn: ["She was hungry", "She thought the family was still inside and she had been left behind", "She did not like the new house", "She was following another dog"],
        optionsId: ["Ia lapar", "Ia mengira keluarganya masih di dalam dan ia ditinggalkan", "Ia tidak suka rumah baru", "Ia mengikuti anjing lain"],
        correctIndex: 1
      },
      {
        questionEn: "What did Ayu do instead of carrying her home?",
        questionId: "Apa yang Ayu lakukan alih-alih menggendongnya pulang?",
        optionsEn: ["Locked the gate", "Walked her home the same way each time, stopping at the same places", "Gave her extra food", "Asked the neighbours to keep her"],
        optionsId: ["Mengunci gerbang", "Menuntunnya pulang lewat jalur yang sama tiap kali, berhenti di tempat yang sama", "Memberinya makan lebih banyak", "Menitipkannya pada tetangga"],
        correctIndex: 1
      },
      {
        questionEn: "Where was Poni on the twentieth morning?",
        questionId: "Di mana Poni pada pagi kedua puluh?",
        optionsEn: ["At the old gate", "Halfway home, at the corner with the fruit stall", "Lost somewhere", "At the mosque"],
        optionsId: ["Di gerbang lama", "Separuh jalan pulang, di tikungan dekat lapak buah", "Hilang entah di mana", "Di masjid"],
        correctIndex: 1
      }
    ]
  }
];
