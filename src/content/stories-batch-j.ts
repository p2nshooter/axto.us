/**
 * Story batch J — hand-written bilingual (EN/ID) read-aloud stories, appended
 * to the library. Batches only ever add; nothing existing is edited or merged.
 *
 * A fifth book for seventeen shelves: bedtime, animals, dinosaur, space,
 * learning, numbers, superheroes, vehicles, humor, alphabet, fantasy, mystery,
 * pirates, princess-knights, ocean-life, jungle-safari and pets.
 */
import type { Story } from "./stories";

export const STORIES_BATCH_J: Story[] = [
  {
    slug: "the-night-the-streetlight-broke",
    titleEn: "The Night the Streetlight Broke",
    titleId: "Malam Ketika Lampu Jalan Padam",
    descriptionEn: "Sofia had slept with the streetlight in her window every night of her life. The night it went out, she found out what the dark actually contains.",
    descriptionId: "Sofia selalu tidur dengan cahaya lampu jalan di jendelanya sepanjang hidupnya. Malam ketika lampu itu padam, ia menemukan apa sebenarnya isi kegelapan.",
    categorySlug: "bedtime",
    authorSlug: "siti-aminah",
    coverEmoji: "🌃",
    coverPalette: "night",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "streetlight-1",
        textEn: "There was a streetlight outside Sofia's window, and it had been on every single night since before she was born. Her room was never fully dark and she had never once thought about it.",
        textId: "Ada lampu jalan di luar jendela Sofia, dan lampu itu menyala setiap malam bahkan sejak sebelum ia lahir. Kamarnya tak pernah benar-benar gelap dan ia tak pernah sekali pun memikirkannya."
      },
      {
        illustrationSeed: "streetlight-2",
        textEn: "On a Tuesday in June it went out with a small tick, and the room turned into a different room. The wardrobe stopped being a wardrobe. The chair with clothes on it became something with shoulders.",
        textId: "Pada suatu Selasa di bulan Juni lampu itu padam dengan bunyi tik kecil, dan kamar itu berubah jadi kamar yang lain. Lemari berhenti jadi lemari. Kursi bertumpuk baju berubah jadi sesuatu yang berbahu."
      },
      {
        illustrationSeed: "streetlight-3",
        textEn: "Sofia lay very still, which is what you do, and after nine minutes she called out, once, not loudly. Her father came in and did not turn on the light, which surprised her.",
        textId: "Sofia berbaring sangat diam, seperti yang biasa dilakukan orang, dan setelah sembilan menit ia memanggil, sekali, tidak keras. Ayahnya masuk dan tidak menyalakan lampu — dan itu mengejutkannya."
      },
      {
        illustrationSeed: "streetlight-4",
        textEn: "He sat on the end of the bed. \"Let us find out what everything is,\" he said. \"Not with the light. With your hands and with your ears. We will do the whole room.\"",
        textId: "Ia duduk di ujung ranjang. \"Ayo cari tahu semua ini apa,\" katanya. \"Bukan dengan lampu. Dengan tanganmu dan telingamu. Kita periksa seluruh kamar.\""
      },
      {
        illustrationSeed: "streetlight-5",
        textEn: "The thing with shoulders was the chair with her school shirt on it. They both touched it. The very tall shape by the door was the door, open. The soft clicking was the fan cooling down, tick, tick, slower.",
        textId: "Yang berbahu itu ternyata kursi dengan baju sekolahnya di atasnya. Mereka berdua menyentuhnya. Bentuk sangat tinggi dekat pintu ternyata pintu yang terbuka. Bunyi klik pelan itu kipas angin yang mendingin — tik, tik, makin lambat."
      },
      {
        illustrationSeed: "streetlight-6",
        textEn: "\"What is that?\" said Sofia, about a scraping noise. Her father listened for a long moment. \"That,\" he said, \"is the neighbour's cat on the tin roof. That is a cat who thinks nobody can hear her.\"",
        textId: "\"Itu apa?\" tanya Sofia tentang bunyi menggores. Ayahnya mendengarkan lama sekali. \"Itu,\" katanya, \"kucing tetangga di atap seng. Itu kucing yang mengira tak ada yang bisa mendengarnya.\""
      },
      {
        illustrationSeed: "streetlight-7",
        textEn: "By the end of it there were fourteen things in the room and Sofia knew what all fourteen were. The dark had not got any brighter. It had simply stopped being a place where anything could be.",
        textId: "Pada akhirnya ada empat belas benda di kamar itu dan Sofia tahu keempat belasnya apa. Kegelapannya tidak jadi lebih terang. Ia hanya berhenti jadi tempat di mana apa pun bisa ada."
      },
      {
        illustrationSeed: "streetlight-8",
        textEn: "\"Fear is mostly a list you have not made yet,\" said her father, at the door. It is the kind of sentence a person remembers for thirty years.",
        textId: "\"Rasa takut itu kebanyakan hanya daftar yang belum kamu susun,\" kata ayahnya, di ambang pintu. Itu jenis kalimat yang diingat orang selama tiga puluh tahun."
      },
      {
        illustrationSeed: "streetlight-9",
        textEn: "The council fixed the streetlight on Thursday. Sofia asked for her curtain to be closed properly from then on, which is the exact opposite of what everybody expected, and she has slept in the dark ever since.",
        textId: "Petugas memperbaiki lampu jalan itu pada Kamis. Sejak itu Sofia minta tirainya ditutup rapat — kebalikan persis dari dugaan semua orang — dan ia tidur dalam gelap sejak saat itu."
      }
    ],
    quiz: [
      {
        questionEn: "What did Sofia's father NOT do?",
        questionId: "Apa yang TIDAK dilakukan ayah Sofia?",
        optionsEn: ["Sit on the bed", "Turn on the light", "Listen with her", "Touch the chair"],
        optionsId: ["Duduk di ranjang", "Menyalakan lampu", "Mendengarkan bersamanya", "Menyentuh kursi"],
        correctIndex: 1
      },
      {
        questionEn: "What was the shape with shoulders?",
        questionId: "Bentuk berbahu itu apa?",
        optionsEn: ["A person", "The chair with her school shirt on it", "The wardrobe", "The cat"],
        optionsId: ["Seseorang", "Kursi dengan baju sekolahnya", "Lemari", "Kucing"],
        correctIndex: 1
      },
      {
        questionEn: "What did her father say fear mostly is?",
        questionId: "Menurut ayahnya, rasa takut itu kebanyakan apa?",
        optionsEn: ["Something real", "A list you have not made yet", "A bad dream", "Just tiredness"],
        optionsId: ["Sesuatu yang nyata", "Daftar yang belum kamu susun", "Mimpi buruk", "Sekadar kelelahan"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-goose-who-flew-the-wrong-way",
    titleEn: "The Goose Who Flew the Wrong Way",
    titleId: "Angsa yang Terbang ke Arah Salah",
    descriptionEn: "Every autumn the flock went south. One year a young goose named Pila turned north instead, and everybody was certain she was lost.",
    descriptionId: "Setiap musim gugur kawanan itu terbang ke selatan. Suatu tahun angsa muda bernama Pila justru berbelok ke utara, dan semua yakin ia tersesat.",
    categorySlug: "animals",
    authorSlug: "emily-clark",
    coverEmoji: "🦢",
    coverPalette: "sky",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "pilagoose-1",
        textEn: "Geese do not decide to fly south. It is not a choice they make around a table. Something in them turns, the way a compass needle turns, and then they go.",
        textId: "Angsa tidak memutuskan untuk terbang ke selatan. Itu bukan pilihan yang mereka rundingkan di meja. Sesuatu di dalam diri mereka berputar, seperti jarum kompas berputar, lalu mereka berangkat."
      },
      {
        illustrationSeed: "pilagoose-2",
        textEn: "In Pila's first autumn the whole flock lifted off the lake at dawn and turned south, and Pila lifted off with them and turned north, and kept going.",
        textId: "Pada musim gugur pertama Pila, seluruh kawanan lepas landas dari danau saat fajar dan berbelok ke selatan, dan Pila ikut lepas landas lalu berbelok ke utara, dan terus terbang."
      },
      {
        illustrationSeed: "pilagoose-3",
        textEn: "Two older geese peeled off and came back for her, calling. She could hear them perfectly well. She turned north again anyway, because the turning in her chest was pointing that way and she did not know how to argue with it.",
        textId: "Dua angsa yang lebih tua memisahkan diri dan kembali menjemputnya sambil memanggil. Ia mendengar mereka dengan sangat jelas. Ia tetap berbelok ke utara, karena putaran di dadanya menunjuk ke sana dan ia tak tahu cara membantahnya."
      },
      {
        illustrationSeed: "pilagoose-4",
        textEn: "She flew alone for two days. On the second evening she came down on a stretch of grey water she had never seen, in a place with different reeds, and she was the only goose there.",
        textId: "Ia terbang sendirian selama dua hari. Pada petang kedua ia turun di hamparan air kelabu yang belum pernah ia lihat, di tempat dengan alang-alang berbeda, dan ia satu-satunya angsa di sana."
      },
      {
        illustrationSeed: "pilagoose-5",
        textEn: "It was cold. It was going to get colder. Everything she had ever been told said that this was the wrong place and that geese who do this do not come back in spring.",
        textId: "Di sana dingin. Dan akan makin dingin. Segala yang pernah diajarkan padanya mengatakan bahwa ini tempat yang salah, dan angsa yang berbuat begini tidak kembali di musim semi."
      },
      {
        illustrationSeed: "pilagoose-6",
        textEn: "On the fourth morning nine hundred geese came out of the mist behind her. Not her flock. A different flock, from somewhere further north still, that had stopped at this same water for the last two thousand years.",
        textId: "Pada pagi keempat, sembilan ratus ekor angsa muncul dari kabut di belakangnya. Bukan kawanannya. Kawanan lain, dari tempat yang lebih jauh lagi ke utara, yang selama dua ribu tahun terakhir selalu singgah di perairan yang sama ini."
      },
      {
        illustrationSeed: "pilagoose-7",
        textEn: "Pila had not flown the wrong way. She had flown a route that her flock did not use, to a staging ground her flock did not know about, at exactly the right time of year to meet a flock that did.",
        textId: "Pila tidak terbang ke arah yang salah. Ia menempuh jalur yang tidak dipakai kawanannya, menuju tempat singgah yang tidak dikenal kawanannya, tepat pada waktu yang benar dalam setahun untuk bertemu kawanan yang mengenalnya."
      },
      {
        illustrationSeed: "pilagoose-8",
        textEn: "She went south with them, three weeks later than her own flock, on a completely different line, and arrived at a completely different wintering marsh, and was perfectly fine.",
        textId: "Ia terbang ke selatan bersama mereka, tiga pekan lebih lambat dari kawanannya sendiri, lewat garis yang sama sekali berbeda, tiba di rawa musim dingin yang sama sekali berbeda pula — dan baik-baik saja."
      },
      {
        illustrationSeed: "pilagoose-9",
        textEn: "In spring she came back to the first lake and everybody was extremely surprised. She has flown her strange route every year since. Four young geese followed her last autumn. That is how a new route begins.",
        textId: "Pada musim semi ia kembali ke danau pertama dan semua sangat terkejut. Sejak itu ia menempuh jalurnya yang aneh setiap tahun. Empat angsa muda mengikutinya musim gugur lalu. Begitulah sebuah jalur baru bermula."
      }
    ],
    quiz: [
      {
        questionEn: "Which way did Pila turn?",
        questionId: "Ke arah mana Pila berbelok?",
        optionsEn: ["South, with the flock", "North, alone", "East", "She did not fly"],
        optionsId: ["Selatan, bersama kawanan", "Utara, sendirian", "Timur", "Ia tidak terbang"],
        correctIndex: 1
      },
      {
        questionEn: "What did she find on the fourth morning?",
        questionId: "Apa yang ia temukan pada pagi keempat?",
        optionsEn: ["Her own flock", "Nine hundred geese from a different flock", "Nothing", "A frozen lake"],
        optionsId: ["Kawanannya sendiri", "Sembilan ratus angsa dari kawanan lain", "Tidak ada apa-apa", "Danau beku"],
        correctIndex: 1
      },
      {
        questionEn: "What happened last autumn?",
        questionId: "Apa yang terjadi musim gugur lalu?",
        optionsEn: ["She got lost", "Four young geese followed her route", "She stopped flying", "The flock forgot her"],
        optionsId: ["Ia tersesat", "Empat angsa muda mengikuti jalurnya", "Ia berhenti terbang", "Kawanan melupakannya"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-footprint-in-the-riverbank",
    titleEn: "The Footprint in the Riverbank",
    titleId: "Jejak Kaki di Tebing Sungai",
    descriptionEn: "A flood cut away the riverbank and revealed a footprint the size of a bathtub. What the village did next mattered more than the footprint.",
    descriptionId: "Banjir mengikis tebing sungai dan menyingkap jejak kaki sebesar bak mandi. Apa yang dilakukan desa itu setelahnya lebih penting daripada jejaknya sendiri.",
    categorySlug: "dinosaur",
    authorSlug: "sarah-johnson",
    coverEmoji: "🦕",
    coverPalette: "forest",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "riverfootprint-1",
        textEn: "The flood took four metres off the outside bend of the river in one night, which the village was upset about, because that bend had a path on it.",
        textId: "Banjir mengikis empat meter tepi luar tikungan sungai dalam satu malam — dan desa itu kesal karenanya, sebab di tikungan itu ada jalan setapak."
      },
      {
        illustrationSeed: "riverfootprint-2",
        textEn: "It also exposed a layer of grey rock that nobody had seen since it was mud, and pressed into that rock, deep and clear, was a three-toed footprint the size of a bathtub.",
        textId: "Banjir itu juga menyingkap lapisan batu kelabu yang belum pernah dilihat siapa pun sejak masih berupa lumpur, dan tertekan di batu itu, dalam dan jelas, ada jejak kaki berjari tiga sebesar bak mandi."
      },
      {
        illustrationSeed: "riverfootprint-3",
        textEn: "A boy called Egi found it. His first instinct, which he is not proud of, was to try to chip a toe off it to take to school. He got the chisel and then he stopped and thought for a minute.",
        textId: "Seorang anak bernama Egi menemukannya. Naluri pertamanya — yang tak ia banggakan — adalah mencoba memahat satu jarinya untuk dibawa ke sekolah. Ia sudah mengambil pahat lalu berhenti dan berpikir sejenak."
      },
      {
        illustrationSeed: "riverfootprint-4",
        textEn: "He put the chisel down and ran to get his teacher instead. That single decision, made by an eleven-year-old with a chisel in his hand, is the reason the footprint still exists.",
        textId: "Ia meletakkan pahat itu dan berlari memanggil gurunya. Satu keputusan itu, yang diambil anak sebelas tahun dengan pahat di tangan, adalah alasan jejak kaki itu masih ada sampai sekarang."
      },
      {
        illustrationSeed: "riverfootprint-5",
        textEn: "The teacher photographed it with a ruler in the frame, which is exactly the right thing to do, and sent the photographs to the provincial museum, and then covered the whole thing with a tarpaulin and four sandbags.",
        textId: "Sang guru memotretnya dengan penggaris di dalam bingkai foto — hal yang persis benar untuk dilakukan — lalu mengirimkan fotonya ke museum provinsi, kemudian menutup seluruhnya dengan terpal dan empat karung pasir."
      },
      {
        illustrationSeed: "riverfootprint-6",
        textEn: "It took the museum nine days to send anybody. In those nine days the village took turns sitting with it at night, not because anybody would steal it, but because the river was still high and nobody was quite sure.",
        textId: "Museum butuh sembilan hari untuk mengirim orang. Dalam sembilan hari itu warga desa bergiliran menungguinya pada malam hari — bukan karena ada yang mau mencurinya, tapi karena air sungai masih tinggi dan tak ada yang benar-benar yakin."
      },
      {
        illustrationSeed: "riverfootprint-7",
        textEn: "There were eventually eleven prints in a line, from one animal, walking. Not running. You can tell from the spacing. It walked along a muddy shore about a hundred and forty million years ago and then it went somewhere and nobody knows where.",
        textId: "Akhirnya ditemukan sebelas jejak dalam satu garis, dari satu hewan, sedang berjalan. Bukan berlari. Itu bisa diketahui dari jaraknya. Ia berjalan di tepi berlumpur sekitar seratus empat puluh juta tahun lalu, lalu pergi entah ke mana dan tak ada yang tahu."
      },
      {
        illustrationSeed: "riverfootprint-8",
        textEn: "The museum wanted to cut the slab out and take it. The village said no, and after two years of letters the museum built a small roof over it instead, on the riverbank, where it happened.",
        textId: "Museum ingin memotong lempeng batunya dan membawanya pergi. Warga desa menolak, dan setelah dua tahun bersurat, museum justru membangun atap kecil di atasnya, di tebing sungai, di tempat kejadiannya."
      },
      {
        illustrationSeed: "riverfootprint-9",
        textEn: "Egi is twenty-two now and takes school groups down to see it on Saturdays. He always tells them the bit about the chisel. He thinks it is the most useful part of the whole story.",
        textId: "Egi kini berumur dua puluh dua tahun dan mengantar rombongan sekolah melihatnya setiap Sabtu. Ia selalu menceritakan bagian tentang pahat itu. Menurutnya itulah bagian paling berguna dari seluruh kisah ini."
      }
    ],
    quiz: [
      {
        questionEn: "What did Egi almost do?",
        questionId: "Apa yang hampir Egi lakukan?",
        optionsEn: ["Fill it in", "Chip a toe off to take to school", "Photograph it", "Tell nobody"],
        optionsId: ["Menimbunnya", "Memahat satu jari untuk dibawa ke sekolah", "Memotretnya", "Merahasiakannya"],
        correctIndex: 1
      },
      {
        questionEn: "Why did the teacher put a ruler in the photograph?",
        questionId: "Mengapa guru itu menaruh penggaris di dalam foto?",
        optionsEn: ["To measure the river", "So the scale of the print can be seen", "To hold the mud", "For decoration"],
        optionsId: ["Untuk mengukur sungai", "Agar ukuran jejaknya bisa terlihat", "Untuk menahan lumpur", "Untuk hiasan"],
        correctIndex: 1
      },
      {
        questionEn: "Where did the footprint end up?",
        questionId: "Di mana jejak kaki itu akhirnya berada?",
        optionsEn: ["In the museum", "Still on the riverbank, under a small roof", "It was destroyed", "In Egi's house"],
        optionsId: ["Di museum", "Tetap di tebing sungai, di bawah atap kecil", "Ia hancur", "Di rumah Egi"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-satellite-that-would-not-die",
    titleEn: "The Satellite That Would Not Die",
    titleId: "Satelit yang Tak Mau Mati",
    descriptionEn: "It was built to last two years. Forty-one years later it was still sending, and one old engineer was still listening.",
    descriptionId: "Ia dirancang bertahan dua tahun. Empat puluh satu tahun kemudian ia masih mengirim sinyal, dan seorang insinyur tua masih setia mendengarkan.",
    categorySlug: "space",
    authorSlug: "sarah-johnson",
    coverEmoji: "🛰️",
    coverPalette: "night",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "oldsatellite-1",
        textEn: "The satellite was called Merpati-1 and it was the size of a washing machine. It was designed to work for two years, which is what its builders promised and roughly what they expected.",
        textId: "Satelit itu bernama Merpati-1 dan ukurannya sebesar mesin cuci. Ia dirancang bekerja selama dua tahun — itulah yang dijanjikan pembuatnya dan kira-kira itu pula yang mereka harapkan."
      },
      {
        illustrationSeed: "oldsatellite-2",
        textEn: "It sent back weather pictures. Grainy ones, in grey, of cloud over the sea. In the first two years these were extremely useful and everybody was pleased.",
        textId: "Ia mengirim balik gambar cuaca. Gambar berbintik, kelabu, berisi awan di atas laut. Dalam dua tahun pertama gambar-gambar itu sangat berguna dan semua orang senang."
      },
      {
        illustrationSeed: "oldsatellite-3",
        textEn: "In year three it kept going. In year six, better satellites went up and nobody needed the grainy pictures. The funding stopped. The team was moved to other projects. Merpati-1 kept going.",
        textId: "Pada tahun ketiga ia masih berjalan. Pada tahun keenam, satelit yang lebih baik diluncurkan dan tak ada lagi yang butuh gambar berbintik itu. Pendanaannya berhenti. Timnya dipindah ke proyek lain. Merpati-1 tetap berjalan."
      },
      {
        illustrationSeed: "oldsatellite-4",
        textEn: "One engineer, Pak Widodo, kept an old receiver in the corner of his office and switched it on for eleven minutes every Tuesday, when Merpati-1 came over. Nobody asked him to. It was not his job.",
        textId: "Seorang insinyur, Pak Widodo, menyimpan penerima tua di sudut kantornya dan menyalakannya sebelas menit setiap Selasa, ketika Merpati-1 melintas. Tak ada yang menyuruhnya. Itu bukan tugasnya."
      },
      {
        illustrationSeed: "oldsatellite-5",
        textEn: "He logged what it sent in a paper notebook. Temperature. Battery voltage. Whether the picture came through. Forty-one years of Tuesdays, in one handwriting that got shakier towards the end.",
        textId: "Ia mencatat apa yang dikirimkan satelit itu di buku catatan kertas. Suhu. Tegangan baterai. Apakah gambarnya sampai. Empat puluh satu tahun hari Selasa, dalam satu tulisan tangan yang makin gemetar menjelang akhir."
      },
      {
        illustrationSeed: "oldsatellite-6",
        textEn: "Here is why that mattered, and nobody knew it would. Forty-one years of the same instrument measuring the same thing over the same ocean is a record almost nothing else in the world has.",
        textId: "Inilah alasan mengapa itu penting — dan tak ada yang menyangkanya. Empat puluh satu tahun satu alat yang sama mengukur hal yang sama di atas lautan yang sama adalah catatan yang hampir tak dimiliki apa pun di dunia."
      },
      {
        illustrationSeed: "oldsatellite-7",
        textEn: "When climate researchers came looking for long records of that sea, everything they found was either three years long or made by four different instruments. Then somebody mentioned an old man with a notebook.",
        textId: "Ketika para peneliti iklim mencari catatan panjang tentang laut itu, semua yang mereka temukan panjangnya cuma tiga tahun atau dibuat oleh empat alat berbeda. Lalu seseorang menyebut seorang lelaki tua dengan buku catatan."
      },
      {
        illustrationSeed: "oldsatellite-8",
        textEn: "The notebooks are in a university archive now, scanned page by page. Pak Widodo did not think he was doing science. He thought he was being polite to a machine that had outlived its instructions.",
        textId: "Buku-buku catatan itu kini ada di arsip universitas, dipindai halaman demi halaman. Pak Widodo tak merasa sedang melakukan sains. Ia merasa sedang bersikap sopan pada mesin yang hidup melampaui perintahnya."
      },
      {
        illustrationSeed: "oldsatellite-9",
        textEn: "Merpati-1 stopped in a March, quietly, between one Tuesday and the next. Pak Widodo waited three more Tuesdays before he wrote the last line. It says: NO SIGNAL. THANK YOU.",
        textId: "Merpati-1 berhenti pada suatu bulan Maret, diam-diam, di antara satu Selasa dan Selasa berikutnya. Pak Widodo menunggu tiga Selasa lagi sebelum menulis baris terakhir. Bunyinya: TIDAK ADA SINYAL. TERIMA KASIH."
      }
    ],
    quiz: [
      {
        questionEn: "How long was Merpati-1 designed to last?",
        questionId: "Berapa lama Merpati-1 dirancang bertahan?",
        optionsEn: ["Forty-one years", "Two years", "Ten years", "Forever"],
        optionsId: ["Empat puluh satu tahun", "Dua tahun", "Sepuluh tahun", "Selamanya"],
        correctIndex: 1
      },
      {
        questionEn: "What did Pak Widodo do every Tuesday?",
        questionId: "Apa yang Pak Widodo lakukan setiap Selasa?",
        optionsEn: ["Repaired the satellite", "Switched on a receiver and logged what it sent", "Wrote reports for his boss", "Nothing"],
        optionsId: ["Memperbaiki satelitnya", "Menyalakan penerima dan mencatat kiriman satelit", "Menulis laporan untuk atasannya", "Tidak melakukan apa-apa"],
        correctIndex: 1
      },
      {
        questionEn: "Why did the notebooks turn out to be valuable?",
        questionId: "Mengapa buku-buku catatan itu ternyata berharga?",
        optionsEn: ["They were rare books", "Forty-one years of the same instrument over the same ocean", "They were signed", "They had photographs"],
        optionsId: ["Karena buku langka", "Empat puluh satu tahun alat yang sama di atas laut yang sama", "Karena ada tanda tangannya", "Karena berisi foto"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-hardest-word-in-the-book",
    titleEn: "The Hardest Word in the Book",
    titleId: "Kata Tersulit dalam Buku Itu",
    descriptionEn: "Nino could read every word on the page except one, and that one word stopped him for six weeks. What unlocked it was not more practice.",
    descriptionId: "Nino bisa membaca setiap kata di halaman itu kecuali satu, dan satu kata itu menghentikannya selama enam pekan. Yang membukanya bukanlah latihan yang lebih banyak.",
    categorySlug: "learning",
    authorSlug: "siti-aminah",
    coverEmoji: "📖",
    coverPalette: "citrus",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "hardestword-1",
        textEn: "Nino could read. He was slow, but he could read, and by the middle of the year he had got all the way to page nineteen of the book about the lighthouse.",
        textId: "Nino bisa membaca. Ia lambat, tapi ia bisa membaca, dan pada pertengahan tahun ia sudah sampai halaman sembilan belas dari buku tentang mercusuar."
      },
      {
        illustrationSeed: "hardestword-2",
        textEn: "On page nineteen there was a word he could not do. Every time he reached it his eyes slid off it, like a foot slipping on a wet step, and he had to start the sentence again.",
        textId: "Di halaman sembilan belas ada satu kata yang tak bisa ia baca. Setiap kali sampai di sana matanya tergelincir melewatinya, seperti kaki terpeleset di anak tangga basah, dan ia harus mengulang kalimatnya dari awal."
      },
      {
        illustrationSeed: "hardestword-3",
        textEn: "He tried it fifty times over six weeks. Sounding it out. Covering half of it. Whispering it. His teacher gave him three different strategies and all three of them failed on that one word.",
        textId: "Ia mencobanya lima puluh kali dalam enam pekan. Mengeja bunyinya. Menutup separuhnya. Membisikkannya. Gurunya memberi tiga strategi berbeda dan ketiganya gagal pada kata itu."
      },
      {
        illustrationSeed: "hardestword-4",
        textEn: "The word was \"knee\". Nino had never met a silent K. Everything he knew about letters said that K makes a sound, always, and this K was sitting there making no sound at all and nobody had warned him.",
        textId: "Kata itu adalah \"knee\". Nino belum pernah bertemu huruf K yang bisu. Semua yang ia tahu tentang huruf mengatakan K itu berbunyi, selalu, dan K yang ini duduk di sana tanpa bunyi sama sekali dan tak ada yang memperingatkannya."
      },
      {
        illustrationSeed: "hardestword-5",
        textEn: "He was not failing to read. He was refusing to accept a rule that had been broken without being explained, which is a completely reasonable thing for a person to do.",
        textId: "Ia bukan gagal membaca. Ia menolak menerima aturan yang dilanggar tanpa dijelaskan — dan itu hal yang sepenuhnya masuk akal dilakukan seseorang."
      },
      {
        illustrationSeed: "hardestword-6",
        textEn: "It was the school cleaner, Pak Deni, who worked it out. He was mopping and he heard Nino stop at the same place for the fourth afternoon, and he said, \"Which one is it?\"",
        textId: "Yang menemukannya adalah petugas kebersihan sekolah, Pak Deni. Ia sedang mengepel dan mendengar Nino berhenti di tempat yang sama untuk sore keempat kalinya, lalu bertanya, \"Yang mana?\""
      },
      {
        illustrationSeed: "hardestword-7",
        textEn: "\"That one,\" said Nino. Pak Deni looked. \"Ah,\" he said. \"That K does not work. It is broken. There are about eleven of them in the whole language and they are all broken in the same way.\"",
        textId: "\"Yang itu,\" jawab Nino. Pak Deni menatapnya. \"Ah,\" katanya. \"K yang itu tidak bekerja. Ia rusak. Ada sekitar sebelas kata seperti itu di seluruh bahasa dan semuanya rusak dengan cara yang sama.\""
      },
      {
        illustrationSeed: "hardestword-8",
        textEn: "That was it. That was the entire fix. Nino needed the rule to have an exception with a name, not more practice, and one sentence from a man with a mop gave him that.",
        textId: "Hanya itu. Itulah seluruh solusinya. Nino butuh aturan itu punya pengecualian yang punya nama, bukan latihan yang lebih banyak — dan satu kalimat dari lelaki bergagang pel memberikannya."
      },
      {
        illustrationSeed: "hardestword-9",
        textEn: "He finished the book in nine days. He now collects broken letters in a list at the back of his exercise book. He is up to thirty-one, which is twenty more than Pak Deni thought there were.",
        textId: "Ia menyelesaikan buku itu dalam sembilan hari. Kini ia mengoleksi huruf-huruf rusak dalam daftar di belakang buku tulisnya. Sudah tiga puluh satu — dua puluh lebih banyak dari perkiraan Pak Deni."
      }
    ],
    quiz: [
      {
        questionEn: "What was the word Nino could not read?",
        questionId: "Kata apa yang tak bisa Nino baca?",
        optionsEn: ["lighthouse", "knee", "nineteen", "sound"],
        optionsId: ["lighthouse", "knee", "nineteen", "sound"],
        correctIndex: 1
      },
      {
        questionEn: "Why was it so hard for him?",
        questionId: "Mengapa itu begitu sulit baginya?",
        optionsEn: ["It was very long", "The silent K broke a rule nobody had explained", "It was in another language", "The print was small"],
        optionsId: ["Katanya sangat panjang", "K yang bisu melanggar aturan yang tak pernah dijelaskan", "Katanya bahasa asing", "Hurufnya kecil"],
        correctIndex: 1
      },
      {
        questionEn: "Who solved it?",
        questionId: "Siapa yang memecahkannya?",
        optionsEn: ["His teacher", "Pak Deni, the school cleaner", "His mother", "Nobody"],
        optionsId: ["Gurunya", "Pak Deni, petugas kebersihan sekolah", "Ibunya", "Tidak ada"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-market-stall-that-gave-change",
    titleEn: "The Market Stall That Gave Change",
    titleId: "Kios Pasar yang Memberi Kembalian",
    descriptionEn: "Ibu Yati never used a calculator in forty years. Her grandson watched her for one week and worked out exactly how she did it.",
    descriptionId: "Ibu Yati tak pernah memakai kalkulator selama empat puluh tahun. Cucunya mengamatinya selama sepekan dan menemukan persis bagaimana caranya.",
    categorySlug: "numbers",
    authorSlug: "axto-creative-team",
    coverEmoji: "🧮",
    coverPalette: "sunrise",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "ibuyatimath-1",
        textEn: "Ibu Yati sold vegetables at the corner of the wet market and had done so for forty years. She had no calculator, no phone, and no piece of paper.",
        textId: "Ibu Yati menjual sayuran di sudut pasar basah dan sudah melakukannya selama empat puluh tahun. Ia tak punya kalkulator, tak punya ponsel, dan tak punya secarik kertas."
      },
      {
        illustrationSeed: "ibuyatimath-2",
        textEn: "A customer would put down eleven things. Ibu Yati would look at them, say a number, take the money, and hand back change, all in about four seconds, and she was never wrong.",
        textId: "Seorang pembeli meletakkan sebelas macam barang. Ibu Yati menatapnya, menyebut satu angka, menerima uang, lalu menyerahkan kembalian — semuanya dalam sekitar empat detik, dan ia tak pernah keliru."
      },
      {
        illustrationSeed: "ibuyatimath-3",
        textEn: "Her grandson Fikri was nine and had just started long addition at school, where eleven numbers took him about four minutes and one rubber. He decided to watch her for a week.",
        textId: "Cucunya, Fikri, berumur sembilan tahun dan baru mulai belajar penjumlahan bersusun di sekolah, di mana sebelas angka butuh empat menit dan satu penghapus. Ia memutuskan mengamati neneknya selama sepekan."
      },
      {
        illustrationSeed: "ibuyatimath-4",
        textEn: "The first thing he noticed was that she never added the numbers she was given. She added different numbers. A bunch of spinach was not 3,500. It was \"half of seven\".",
        textId: "Hal pertama yang ia perhatikan: neneknya tak pernah menjumlahkan angka yang diberikan. Ia menjumlahkan angka yang berbeda. Seikat bayam bukan 3.500. Ia adalah \"separuh dari tujuh\"."
      },
      {
        illustrationSeed: "ibuyatimath-5",
        textEn: "She grouped things into round numbers before she added anything. Two items at 2,500 became one five. Four items at 2,500 became one ten. She was building tens, then counting the tens.",
        textId: "Ia mengelompokkan barang jadi angka bulat sebelum menjumlahkan apa pun. Dua barang seharga 2.500 jadi satu lima. Empat barang seharga 2.500 jadi satu sepuluh. Ia membangun puluhan, lalu menghitung puluhannya."
      },
      {
        illustrationSeed: "ibuyatimath-6",
        textEn: "The second thing he noticed was about the change. She did not subtract. She counted up. If the total was 34,000 and you gave her 50,000, she said \"thirty-five, forty, fifty\" and put down the notes as she said it.",
        textId: "Hal kedua yang ia perhatikan adalah soal kembalian. Ia tidak mengurangkan. Ia menghitung naik. Kalau totalnya 34.000 dan kau memberi 50.000, ia berkata \"tiga puluh lima, empat puluh, lima puluh\" sambil meletakkan uangnya."
      },
      {
        illustrationSeed: "ibuyatimath-7",
        textEn: "Fikri showed his teacher on Monday. His teacher, to her enormous credit, stopped the lesson she had planned and asked him to teach the class instead, which took him eleven minutes and he was terrified.",
        textId: "Fikri menunjukkannya pada gurunya hari Senin. Gurunya — dan ini sangat patut dipuji — menghentikan pelajaran yang sudah ia siapkan dan memintanya mengajari kelas, yang butuh sebelas menit dan membuatnya ketakutan."
      },
      {
        illustrationSeed: "ibuyatimath-8",
        textEn: "Neither method is better. Long addition works on paper for any numbers at all, which counting up does not. Ibu Yati's method works in four seconds with your hands full, which long addition does not.",
        textId: "Tak ada metode yang lebih baik. Penjumlahan bersusun bekerja di atas kertas untuk angka apa pun, dan menghitung-naik tidak begitu. Metode Ibu Yati bekerja dalam empat detik dengan tangan penuh barang, dan penjumlahan bersusun tidak begitu."
      },
      {
        illustrationSeed: "ibuyatimath-9",
        textEn: "Fikri uses both now, depending. And Ibu Yati, when told that her method had been taught in a classroom, said only, \"Of course. What else would you do with your hands full?\"",
        textId: "Kini Fikri memakai keduanya, tergantung situasi. Dan Ibu Yati, ketika diberi tahu metodenya diajarkan di kelas, hanya berkata, \"Ya tentu saja. Memangnya mau bagaimana lagi kalau tangan penuh?\""
      }
    ],
    quiz: [
      {
        questionEn: "What did Ibu Yati build before adding?",
        questionId: "Apa yang Ibu Yati bangun sebelum menjumlahkan?",
        optionsEn: ["Long columns", "Round numbers — tens", "A written list", "Nothing"],
        optionsId: ["Kolom bersusun", "Angka bulat — puluhan", "Daftar tertulis", "Tidak ada"],
        correctIndex: 1
      },
      {
        questionEn: "How did she give change?",
        questionId: "Bagaimana ia memberi kembalian?",
        optionsEn: ["By subtracting", "By counting up from the total to the money given", "With a calculator", "She guessed"],
        optionsId: ["Dengan mengurangkan", "Dengan menghitung naik dari total ke uang yang diberikan", "Dengan kalkulator", "Ia menebak"],
        correctIndex: 1
      },
      {
        questionEn: "Which method is better?",
        questionId: "Metode mana yang lebih baik?",
        optionsEn: ["Ibu Yati's", "Long addition", "Neither — each suits a different situation", "Both are wrong"],
        optionsId: ["Metode Ibu Yati", "Penjumlahan bersusun", "Tidak ada — masing-masing cocok untuk situasi berbeda", "Keduanya salah"],
        correctIndex: 2
      }
    ]
  },

  {
    slug: "the-villain-who-wanted-a-day-off",
    titleEn: "The Villain Who Wanted a Day Off",
    titleId: "Penjahat yang Ingin Libur Sehari",
    descriptionEn: "Doctor Kelam had been attacking the city every Thursday for nine years. One Thursday he sent a letter instead, and the hero had to read it twice.",
    descriptionId: "Doktor Kelam sudah menyerang kota itu setiap Kamis selama sembilan tahun. Suatu Kamis ia justru mengirim surat, dan sang pahlawan harus membacanya dua kali.",
    categorySlug: "superheroes",
    authorSlug: "david-lee",
    coverEmoji: "🦹",
    coverPalette: "dusk",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "villaindayoff-1",
        textEn: "Doctor Kelam attacked the city every Thursday at four. Not Wednesday, not Friday. Thursday at four, for nine years, four hundred and sixty-eight times.",
        textId: "Doktor Kelam menyerang kota itu setiap Kamis pukul empat. Bukan Rabu, bukan Jumat. Kamis pukul empat, selama sembilan tahun, empat ratus enam puluh delapan kali."
      },
      {
        illustrationSeed: "villaindayoff-2",
        textEn: "The hero, Baja, always stopped him. The city had got so used to it that the market stalls packed up at half past three and the buses took a different route without being asked.",
        textId: "Sang pahlawan, Baja, selalu menghentikannya. Kota itu sudah begitu terbiasa sampai kios-kios pasar berkemas pukul setengah empat dan bus-bus mengambil rute lain tanpa perlu disuruh."
      },
      {
        illustrationSeed: "villaindayoff-3",
        textEn: "On a Thursday in October, at four o'clock exactly, nothing happened. At ten past, a boy on a bicycle delivered an envelope to Baja's rooftop. It was on proper paper and it was typed.",
        textId: "Pada suatu Kamis di bulan Oktober, tepat pukul empat, tak terjadi apa-apa. Pukul empat lewat sepuluh, seorang anak bersepeda mengantar amplop ke atap markas Baja. Ditulis di kertas resmi dan diketik."
      },
      {
        illustrationSeed: "villaindayoff-4",
        textEn: "It said: I AM TIRED. I HAVE BEEN DOING THIS SINCE I WAS TWENTY-SIX. I WOULD LIKE ONE THURSDAY OFF. I AM NOT PLANNING ANYTHING. THIS IS NOT A TRICK. SINCERELY, DR KELAM.",
        textId: "Isinya: AKU LELAH. AKU MELAKUKAN INI SEJAK UMUR DUA PULUH ENAM. AKU INGIN LIBUR SATU KAMIS. AKU TIDAK MERENCANAKAN APA PUN. INI BUKAN JEBAKAN. HORMAT SAYA, DR. KELAM."
      },
      {
        illustrationSeed: "villaindayoff-5",
        textEn: "Baja read it four times. Then he flew to the warehouse on the docks, which everybody had always known about and nobody had ever raided, and knocked on the door instead of coming through the roof.",
        textId: "Baja membacanya empat kali. Lalu ia terbang ke gudang di dermaga — yang selama ini semua orang tahu letaknya dan tak pernah digerebek siapa pun — dan mengetuk pintunya alih-alih menerobos atap."
      },
      {
        illustrationSeed: "villaindayoff-6",
        textEn: "Doctor Kelam was sitting at a table with a cup of tea and a lot of paperwork. He looked up and said, without any dramatic voice at all, \"Did you get my letter?\"",
        textId: "Doktor Kelam sedang duduk di meja dengan secangkir teh dan setumpuk berkas. Ia mendongak dan berkata, tanpa nada dramatis sedikit pun, \"Suratku sudah sampai?\""
      },
      {
        illustrationSeed: "villaindayoff-7",
        textEn: "They talked for two hours. It turned out Doctor Kelam had started all this to make the city notice that the eastern district had no clean water, which it still did not, nine years and four hundred and sixty-eight attacks later.",
        textId: "Mereka bicara dua jam. Ternyata Doktor Kelam memulai semua ini agar kota itu menyadari bahwa distrik timur tak punya air bersih — yang sampai kini masih begitu, sembilan tahun dan empat ratus enam puluh delapan serangan kemudian."
      },
      {
        illustrationSeed: "villaindayoff-8",
        textEn: "\"You could have said,\" said Baja. \"I did say,\" said Doctor Kelam. \"Twice. In year one. Nobody printed it. Then I turned a fountain into a laser and it was on the front page, and I never got off that.\"",
        textId: "\"Kau bisa bilang saja,\" kata Baja. \"Aku sudah bilang,\" jawab Doktor Kelam. \"Dua kali. Di tahun pertama. Tak ada yang memuatnya. Lalu aku mengubah air mancur jadi laser dan itu masuk halaman depan, dan aku tak pernah bisa lepas dari situ.\""
      },
      {
        illustrationSeed: "villaindayoff-9",
        textEn: "The eastern district got a water main eleven months later. Doctor Kelam still attacks the city, but only about four times a year now, and always on subjects Baja privately agrees with.",
        textId: "Distrik timur mendapat saluran air sebelas bulan kemudian. Doktor Kelam masih menyerang kota itu, tapi kini hanya sekitar empat kali setahun, dan selalu soal hal-hal yang diam-diam disetujui Baja."
      }
    ],
    quiz: [
      {
        questionEn: "How often did Doctor Kelam attack?",
        questionId: "Seberapa sering Doktor Kelam menyerang?",
        optionsEn: ["Every day", "Every Thursday at four", "Once a month", "Randomly"],
        optionsId: ["Setiap hari", "Setiap Kamis pukul empat", "Sebulan sekali", "Sembarangan"],
        correctIndex: 1
      },
      {
        questionEn: "Why had he started attacking in the first place?",
        questionId: "Mengapa awalnya ia mulai menyerang?",
        optionsEn: ["For money", "To make the city notice the eastern district had no clean water", "For fame", "He was bored"],
        optionsId: ["Demi uang", "Agar kota menyadari distrik timur tak punya air bersih", "Demi ketenaran", "Ia bosan"],
        correctIndex: 1
      },
      {
        questionEn: "What did Baja do instead of fighting?",
        questionId: "Apa yang Baja lakukan alih-alih bertarung?",
        optionsEn: ["Ignored the letter", "Knocked on the door and talked for two hours", "Arrested him", "Left the city"],
        optionsId: ["Mengabaikan suratnya", "Mengetuk pintu dan bicara dua jam", "Menangkapnya", "Meninggalkan kota"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-boat-with-two-names",
    titleEn: "The Boat With Two Names",
    titleId: "Perahu dengan Dua Nama",
    descriptionEn: "The old wooden boat had one name painted on the bow and a different one carved inside the hull. Finding out why took Rani the whole summer.",
    descriptionId: "Perahu kayu tua itu punya satu nama tertulis di haluan dan nama berbeda terukir di dalam lambungnya. Mencari tahu sebabnya menghabiskan seluruh liburan Rani.",
    categorySlug: "vehicles",
    authorSlug: "emily-clark",
    coverEmoji: "⛵",
    coverPalette: "ocean",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "twonamesboat-1",
        textEn: "The boat had been pulled up on the sand at the end of the village for as long as Rani could remember, tilted over, with grass growing through the bottom boards.",
        textId: "Perahu itu sudah teronggok di atas pasir di ujung desa selama yang bisa Rani ingat, miring ke samping, dengan rumput tumbuh menembus papan dasarnya."
      },
      {
        illustrationSeed: "twonamesboat-2",
        textEn: "On the bow, in paint that had almost gone, it said HARAPAN. Rani knew that. Everybody knew that. It is what the boat was called.",
        textId: "Di haluannya, dengan cat yang hampir habis, tertulis HARAPAN. Rani tahu itu. Semua orang tahu itu. Itulah nama perahu itu."
      },
      {
        illustrationSeed: "twonamesboat-3",
        textEn: "One July she climbed inside it, which she was not supposed to do, and lay on her back on the ribs and looked up at the underside of the foredeck, where nobody looks. Someone had carved a name there.",
        textId: "Pada suatu Juli ia memanjat masuk ke dalamnya, hal yang sebenarnya tak boleh ia lakukan, lalu berbaring telentang di atas gading-gading perahu dan menatap ke bawah geladak depan, tempat yang tak pernah dilihat siapa pun. Ada nama terukir di sana."
      },
      {
        illustrationSeed: "twonamesboat-4",
        textEn: "It said SITI, and then a date, and then three small marks that might have been a wave. It was cut deep, with something sharp and not much patience.",
        textId: "Tertulis SITI, lalu sebuah tanggal, lalu tiga goresan kecil yang mungkin berbentuk ombak. Diukir dalam-dalam, dengan sesuatu yang tajam dan tidak banyak kesabaran."
      },
      {
        illustrationSeed: "twonamesboat-5",
        textEn: "Nobody in the village would tell her. Not because it was secret, but because everybody assumed everybody already knew, so nobody had ever said it out loud in front of a child.",
        textId: "Tak seorang pun di desa itu mau menceritakannya. Bukan karena rahasia, tapi karena semua orang mengira semua orang sudah tahu, jadi tak pernah ada yang mengucapkannya keras-keras di depan anak-anak."
      },
      {
        illustrationSeed: "twonamesboat-6",
        textEn: "It was Pak Ridwan, ninety-one, who finally explained it, sitting on a plastic chair in the shade with his eyes shut. The boat had been built by his brother. Siti was his brother's wife.",
        textId: "Pak Ridwan, sembilan puluh satu tahun, yang akhirnya menjelaskannya, duduk di kursi plastik di keteduhan dengan mata terpejam. Perahu itu dibuat oleh kakaknya. Siti adalah istri kakaknya."
      },
      {
        illustrationSeed: "twonamesboat-7",
        textEn: "You do not name a boat after a living person here — it is thought to be unlucky. So he carved her name inside, where the sea would never see it, and painted HARAPAN on the outside for everybody else.",
        textId: "Di sini orang tidak menamai perahu dengan nama orang yang masih hidup — dianggap membawa sial. Maka ia mengukir nama istrinya di dalam, di tempat yang tak akan pernah dilihat laut, dan mengecat HARAPAN di luar untuk semua orang."
      },
      {
        illustrationSeed: "twonamesboat-8",
        textEn: "\"Forty-one years he went out in that boat,\" said Pak Ridwan, \"and every single one of those days he was sitting inside her name and nobody on the water knew it.\"",
        textId: "\"Empat puluh satu tahun ia melaut dengan perahu itu,\" kata Pak Ridwan, \"dan setiap hari itu ia duduk di dalam nama istrinya, dan tak seorang pun di laut yang tahu.\""
      },
      {
        illustrationSeed: "twonamesboat-9",
        textEn: "The boat is still on the sand. Rani goes and sits in it sometimes. She has not repainted the outside, and she has not touched the carving, and she has told exactly two people, both of whom needed to know.",
        textId: "Perahu itu masih di atas pasir. Rani kadang pergi dan duduk di dalamnya. Ia tidak mengecat ulang bagian luarnya, tidak menyentuh ukiran itu, dan hanya menceritakannya pada dua orang — keduanya memang perlu tahu."
      }
    ],
    quiz: [
      {
        questionEn: "What was painted on the bow?",
        questionId: "Apa yang tertulis di haluan?",
        optionsEn: ["SITI", "HARAPAN", "A date", "Nothing"],
        optionsId: ["SITI", "HARAPAN", "Sebuah tanggal", "Tidak ada"],
        correctIndex: 1
      },
      {
        questionEn: "Why was the second name carved inside?",
        questionId: "Mengapa nama kedua diukir di dalam?",
        optionsEn: ["To hide it from thieves", "Naming a boat after a living person was thought unlucky", "There was no paint left", "It was a mistake"],
        optionsId: ["Untuk menyembunyikannya dari pencuri", "Menamai perahu dengan nama orang yang masih hidup dianggap sial", "Catnya habis", "Itu kekeliruan"],
        correctIndex: 1
      },
      {
        questionEn: "Who was Siti?",
        questionId: "Siapa Siti?",
        optionsEn: ["Pak Ridwan's daughter", "The wife of the man who built the boat", "A fisherman", "Rani's grandmother"],
        optionsId: ["Putri Pak Ridwan", "Istri lelaki pembuat perahu itu", "Seorang nelayan", "Nenek Rani"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-competition-for-the-worst-idea",
    titleEn: "The Competition for the Worst Idea",
    titleId: "Lomba Ide Terburuk",
    descriptionEn: "Bu Anis was tired of children being afraid to answer. So she ran a competition where the prize went to the worst possible idea.",
    descriptionId: "Bu Anis bosan melihat anak-anak takut menjawab. Maka ia mengadakan lomba yang hadiahnya diberikan pada ide paling buruk.",
    categorySlug: "humor",
    authorSlug: "emily-clark",
    coverEmoji: "🏆",
    coverPalette: "candy",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "worstidea-1",
        textEn: "Bu Anis had a class of thirty-one children of whom about four ever put a hand up. The other twenty-seven had good ideas. She could tell. They simply were not going to risk them in public.",
        textId: "Bu Anis punya kelas berisi tiga puluh satu anak, dan hanya sekitar empat yang pernah mengangkat tangan. Dua puluh tujuh sisanya punya ide bagus. Ia bisa melihatnya. Mereka hanya tak mau mempertaruhkannya di depan umum."
      },
      {
        illustrationSeed: "worstidea-2",
        textEn: "So on a Monday she announced the Worst Idea Competition. The problem: how do we stop the school gate from squeaking? The prize: a biscuit, for the very worst suggestion in the room.",
        textId: "Maka pada suatu Senin ia mengumumkan Lomba Ide Terburuk. Masalahnya: bagaimana caranya agar gerbang sekolah tidak berderit? Hadiahnya: sebuah biskuit, untuk usulan paling buruk di ruangan itu."
      },
      {
        illustrationSeed: "worstidea-3",
        textEn: "Twenty-nine hands went up within about four seconds. This is the entire point of the story and Bu Anis had known it would happen.",
        textId: "Dua puluh sembilan tangan terangkat dalam sekitar empat detik. Inilah seluruh inti ceritanya, dan Bu Anis sudah tahu itu akan terjadi."
      },
      {
        illustrationSeed: "worstidea-4",
        textEn: "Suggestion one: remove the gate. Suggestion two: remove the school. Suggestion three: train everybody to walk in through the window so the gate is never opened.",
        textId: "Usulan satu: singkirkan gerbangnya. Usulan dua: singkirkan sekolahnya. Usulan tiga: latih semua orang masuk lewat jendela supaya gerbangnya tak pernah dibuka."
      },
      {
        illustrationSeed: "worstidea-5",
        textEn: "Suggestion nine: shout louder than the gate at all times. Suggestion fourteen: replace the gate with a slightly larger gate that squeaks in a nicer key.",
        textId: "Usulan sembilan: berteriak lebih keras daripada gerbangnya setiap saat. Usulan empat belas: ganti gerbangnya dengan gerbang yang sedikit lebih besar yang deritnya lebih merdu."
      },
      {
        illustrationSeed: "worstidea-6",
        textEn: "Suggestion nineteen came from a boy called Tio who had never spoken in class all year. He said, very quietly, \"Put butter on it.\" The room went completely silent for a second.",
        textId: "Usulan kesembilan belas datang dari anak bernama Tio yang belum pernah bicara di kelas sepanjang tahun. Ia berkata sangat pelan, \"Olesi mentega.\" Ruangan hening total sedetik."
      },
      {
        illustrationSeed: "worstidea-7",
        textEn: "Then Bu Anis said, \"That is not the worst idea. That is very nearly the right idea. Butter is a bad choice, but you have understood that a squeak is two dry things touching.\"",
        textId: "Lalu Bu Anis berkata, \"Itu bukan ide terburuk. Itu justru nyaris ide yang benar. Mentega pilihan yang buruk, tapi kamu sudah paham bahwa derit adalah dua benda kering yang bersentuhan.\""
      },
      {
        illustrationSeed: "worstidea-8",
        textEn: "They fixed the gate that afternoon with cooking oil from the canteen and a rag, and it worked, and Tio got the biscuit anyway on the grounds that it was technically the worst material for the job.",
        textId: "Mereka memperbaiki gerbang itu sore harinya dengan minyak goreng dari kantin dan sepotong lap, dan berhasil, dan Tio tetap mendapat biskuitnya dengan alasan mentega secara teknis memang bahan terburuk untuk pekerjaan itu."
      },
      {
        illustrationSeed: "worstidea-9",
        textEn: "Bu Anis runs the Worst Idea Competition about once a month now. She says she has never once had to hand out the prize for an idea that was actually the worst, because there is no such thing.",
        textId: "Kini Bu Anis mengadakan Lomba Ide Terburuk kira-kira sebulan sekali. Ia bilang belum pernah sekali pun harus memberikan hadiah untuk ide yang benar-benar terburuk, karena hal semacam itu tidak ada."
      }
    ],
    quiz: [
      {
        questionEn: "Why did Bu Anis ask for the worst idea?",
        questionId: "Mengapa Bu Anis meminta ide terburuk?",
        optionsEn: ["She wanted bad answers", "So nobody was afraid to put a hand up", "To waste time", "As a punishment"],
        optionsId: ["Ia ingin jawaban buruk", "Agar tak ada yang takut mengangkat tangan", "Untuk membuang waktu", "Sebagai hukuman"],
        correctIndex: 1
      },
      {
        questionEn: "What did Tio suggest?",
        questionId: "Apa usulan Tio?",
        optionsEn: ["Remove the gate", "Put butter on it", "Shout louder", "Use a bigger gate"],
        optionsId: ["Singkirkan gerbangnya", "Olesi mentega", "Berteriak lebih keras", "Pakai gerbang lebih besar"],
        correctIndex: 1
      },
      {
        questionEn: "What is a squeak, according to Bu Anis?",
        questionId: "Menurut Bu Anis, derit itu apa?",
        optionsEn: ["Old metal", "Two dry things touching", "A broken hinge", "Too much weight"],
        optionsId: ["Logam tua", "Dua benda kering yang bersentuhan", "Engsel rusak", "Beban terlalu berat"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-letters-that-lived-in-the-wrong-order",
    titleEn: "The Letters That Lived in the Wrong Order",
    titleId: "Huruf-Huruf yang Tinggal di Urutan Salah",
    descriptionEn: "One morning the alphabet woke up shuffled. Nobody could read anything, and it took the letters all day to work out why the order had ever mattered.",
    descriptionId: "Suatu pagi alfabet bangun dalam keadaan teracak. Tak seorang pun bisa membaca apa pun, dan butuh seharian bagi huruf-huruf untuk memahami mengapa urutannya penting.",
    categorySlug: "alphabet",
    authorSlug: "axto-creative-team",
    coverEmoji: "🔡",
    coverPalette: "citrus",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "shuffledabc-1",
        textEn: "In alphabet town the letters lived in a long row of houses, A at one end and Z at the other, and they had lived that way for so long that nobody remembered anybody deciding it.",
        textId: "Di kota alfabet, huruf-huruf tinggal dalam deretan panjang rumah, A di satu ujung dan Z di ujung lain, dan mereka sudah tinggal begitu begitu lama sampai tak ada yang ingat siapa yang memutuskannya."
      },
      {
        illustrationSeed: "shuffledabc-2",
        textEn: "One Tuesday they woke up shuffled. M was where B had been. Q was living between two vowels and was extremely happy about it. A was somewhere near the end, next to the postbox.",
        textId: "Pada suatu Selasa mereka bangun dalam keadaan teracak. M berada di tempat B dulu. Q tinggal di antara dua huruf vokal dan sangat senang karenanya. A entah bagaimana ada di dekat ujung, di sebelah kotak pos."
      },
      {
        illustrationSeed: "shuffledabc-3",
        textEn: "At first this was fine. Nobody actually needs to stand in order to make a word. K and A and T can make CAT from any three houses in town.",
        textId: "Awalnya tak apa-apa. Sebenarnya tak ada yang perlu berbaris berurutan untuk membentuk kata. K dan A dan T bisa membentuk CAT dari rumah mana pun di kota itu."
      },
      {
        illustrationSeed: "shuffledabc-4",
        textEn: "Then the library opened, and the trouble started. The librarian, who was a very tidy owl, could not find a single book, because all the books were shelved by a rule that no longer existed.",
        textId: "Lalu perpustakaan buka, dan mulailah kerepotan. Sang pustakawan, seekor burung hantu yang sangat rapi, tak bisa menemukan satu buku pun, karena semua buku disusun menurut aturan yang kini tak ada lagi."
      },
      {
        illustrationSeed: "shuffledabc-5",
        textEn: "Then the dictionary fell over and could not be put back together. Then the phone book became a very long list of names in no particular order, which is exactly the same as no list at all.",
        textId: "Lalu kamus itu jatuh dan tak bisa disusun kembali. Lalu buku telepon berubah jadi daftar nama yang sangat panjang tanpa urutan tertentu — yang persis sama dengan tidak ada daftar sama sekali."
      },
      {
        illustrationSeed: "shuffledabc-6",
        textEn: "By lunchtime the letters understood the problem. The order does not help you make words. The order helps you find things. Those are two completely separate jobs and only one of them had broken.",
        textId: "Menjelang makan siang huruf-huruf itu memahami masalahnya. Urutan tidak membantumu membentuk kata. Urutan membantumu menemukan sesuatu. Itu dua tugas yang sepenuhnya terpisah, dan hanya satu yang rusak."
      },
      {
        illustrationSeed: "shuffledabc-7",
        textEn: "They tried inventing a new order. By height: I was first and W was last. By noise: S and Z at one end, silent letters at the other. Both worked, in the sense that they were orders, and both were completely useless.",
        textId: "Mereka mencoba menciptakan urutan baru. Berdasarkan tinggi: I paling depan dan W paling belakang. Berdasarkan bunyi: S dan Z di satu ujung, huruf-huruf bisu di ujung lain. Keduanya berhasil, dalam arti keduanya memang urutan, dan keduanya sama sekali tak berguna."
      },
      {
        illustrationSeed: "shuffledabc-8",
        textEn: "Useless, because everybody outside alphabet town — every dictionary, every library, every phone book in the world — was still using the old one. An order is only useful if other people are using the same one.",
        textId: "Tak berguna, karena semua orang di luar kota alfabet — setiap kamus, setiap perpustakaan, setiap buku telepon di dunia — masih memakai urutan yang lama. Sebuah urutan hanya berguna kalau orang lain memakai urutan yang sama."
      },
      {
        illustrationSeed: "shuffledabc-9",
        textEn: "They moved back before supper. It took four hours and there was some grumbling from Q, who had liked living between the vowels. The library reopened on Wednesday and nobody outside town ever knew.",
        textId: "Mereka pindah kembali sebelum makan malam. Butuh empat jam dan ada sedikit gerutuan dari Q, yang menyukai hidup di antara huruf vokal. Perpustakaan buka lagi hari Rabu dan tak seorang pun di luar kota itu pernah tahu."
      }
    ],
    quiz: [
      {
        questionEn: "What still worked when the letters were shuffled?",
        questionId: "Apa yang tetap berfungsi saat huruf-huruf teracak?",
        optionsEn: ["The library", "Making words", "The dictionary", "The phone book"],
        optionsId: ["Perpustakaan", "Membentuk kata", "Kamus", "Buku telepon"],
        correctIndex: 1
      },
      {
        questionEn: "What is the alphabet order actually for?",
        questionId: "Sebenarnya urutan alfabet itu untuk apa?",
        optionsEn: ["Making words", "Finding things", "Looking tidy", "Singing"],
        optionsId: ["Membentuk kata", "Menemukan sesuatu", "Terlihat rapi", "Bernyanyi"],
        correctIndex: 1
      },
      {
        questionEn: "Why were the new orders useless?",
        questionId: "Mengapa urutan-urutan baru itu tak berguna?",
        optionsEn: ["They were too hard", "Everybody outside town used the old one", "They had no vowels", "They were too long"],
        optionsId: ["Terlalu sulit", "Semua orang di luar kota memakai yang lama", "Tak ada huruf vokal", "Terlalu panjang"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-shop-that-bought-worries",
    titleEn: "The Shop That Bought Worries",
    titleId: "Toko yang Membeli Kecemasan",
    descriptionEn: "There is a shop in the old arcade with a sign that says WE BUY WORRIES. It pays fairly. But you have to say the worry out loud first.",
    descriptionId: "Ada sebuah toko di arkade tua dengan papan bertuliskan KAMI MEMBELI KECEMASAN. Bayarannya adil. Tapi kau harus mengucapkan kecemasanmu keras-keras lebih dulu.",
    categorySlug: "fantasy",
    authorSlug: "emily-clark",
    coverEmoji: "🏪",
    coverPalette: "twilight",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "worryshop-1",
        textEn: "The shop is between the key-cutter and the place that repairs umbrellas. It is very narrow. The sign in the window is hand-painted and says WE BUY WORRIES — FAIR PRICES — NO EXCHANGES.",
        textId: "Toko itu terletak di antara tukang kunci dan tempat servis payung. Sangat sempit. Papan di jendelanya dicat tangan dan bertuliskan KAMI MEMBELI KECEMASAN — HARGA ADIL — TIDAK BISA DITUKAR."
      },
      {
        illustrationSeed: "worryshop-2",
        textEn: "Hana went in because she was twelve and because she had a worry she had been carrying for four months and had not said to anybody, which is exactly how a worry gets heavy.",
        textId: "Hana masuk karena umurnya dua belas tahun dan karena ia memikul satu kecemasan selama empat bulan tanpa pernah menceritakannya pada siapa pun — dan persis begitulah kecemasan jadi berat."
      },
      {
        illustrationSeed: "worryshop-3",
        textEn: "The man behind the counter did not look up. \"Say it,\" he said. \"Out loud. All of it. That is the whole transaction. I cannot buy something you have not put on the counter.\"",
        textId: "Lelaki di balik meja itu tidak mendongak. \"Katakan,\" ujarnya. \"Keras-keras. Semuanya. Itulah seluruh transaksinya. Aku tak bisa membeli sesuatu yang belum kau letakkan di meja.\""
      },
      {
        illustrationSeed: "worryshop-4",
        textEn: "It took Hana nine minutes to get the first sentence out. The worry was about her mother's job and what it would mean if it went, and about whether she was allowed to be scared about it when nobody had said anything was wrong.",
        textId: "Butuh sembilan menit bagi Hana untuk mengeluarkan kalimat pertamanya. Kecemasannya tentang pekerjaan ibunya dan apa artinya kalau pekerjaan itu hilang, dan tentang apakah ia boleh merasa takut sementara tak ada yang bilang ada yang salah."
      },
      {
        illustrationSeed: "worryshop-5",
        textEn: "The man listened all the way to the end without saying anything, which almost nobody does. Then he wrote something on a card and slid it across, and said, \"That is what I will pay.\"",
        textId: "Lelaki itu mendengarkan sampai akhir tanpa berkata apa-apa — hal yang hampir tak pernah dilakukan siapa pun. Lalu ia menulis sesuatu di sebuah kartu, menggesernya, dan berkata, \"Itu yang akan kubayar.\""
      },
      {
        illustrationSeed: "worryshop-6",
        textEn: "The card said: THIS IS A REASONABLE THING TO BE WORRIED ABOUT. YOU ARE NOT BEING SILLY. YOU ARE TWELVE AND THIS IS TOO BIG TO CARRY ALONE.",
        textId: "Kartu itu bertuliskan: INI HAL YANG MASUK AKAL UNTUK DICEMASKAN. KAMU TIDAK KONYOL. UMURMU DUA BELAS DAN INI TERLALU BESAR UNTUK DIPIKUL SENDIRIAN."
      },
      {
        illustrationSeed: "worryshop-7",
        textEn: "\"That is not money,\" said Hana. \"No,\" the man agreed. \"It is what the worry is worth. Money would be an insult.\" He put the card in a small paper bag as if it were shopping.",
        textId: "\"Itu bukan uang,\" kata Hana. \"Bukan,\" lelaki itu mengiyakan. \"Itu nilai kecemasanmu. Uang justru akan jadi penghinaan.\" Ia memasukkan kartu itu ke kantong kertas kecil seolah itu barang belanjaan."
      },
      {
        illustrationSeed: "worryshop-8",
        textEn: "Hana walked out and the worry was still there. It had not been removed. But it now weighed what it actually weighed, instead of what it had been weighing while it was secret, and that is a very large difference.",
        textId: "Hana keluar dan kecemasannya masih ada. Ia tidak dihilangkan. Tapi kini bobotnya sesuai bobot sebenarnya, bukan bobot yang ia rasakan selama masih jadi rahasia — dan itu perbedaan yang sangat besar."
      },
      {
        illustrationSeed: "worryshop-9",
        textEn: "She told her mother that evening. Her mother had been worried about exactly the same thing, in exactly the same silence, for exactly the same four months. Neither of them went back to the shop. Neither of them needed to.",
        textId: "Malam itu ia bercerita pada ibunya. Ternyata ibunya mencemaskan hal yang persis sama, dalam kebisuan yang persis sama, selama empat bulan yang persis sama. Tak satu pun dari mereka kembali ke toko itu. Tak satu pun perlu."
      }
    ],
    quiz: [
      {
        questionEn: "What does the shop require before it will buy?",
        questionId: "Apa yang toko itu syaratkan sebelum membeli?",
        optionsEn: ["Money", "You must say the worry out loud", "A receipt", "A parent's permission"],
        optionsId: ["Uang", "Kau harus mengucapkan kecemasanmu keras-keras", "Struk", "Izin orang tua"],
        correctIndex: 1
      },
      {
        questionEn: "What did the man pay her?",
        questionId: "Apa yang lelaki itu bayarkan padanya?",
        optionsEn: ["Coins", "A card saying the worry was reasonable and too big to carry alone", "Nothing", "An umbrella"],
        optionsId: ["Uang koin", "Kartu bertuliskan bahwa kecemasannya masuk akal dan terlalu besar dipikul sendirian", "Tidak ada", "Sebuah payung"],
        correctIndex: 1
      },
      {
        questionEn: "What changed after she left the shop?",
        questionId: "Apa yang berubah setelah ia keluar dari toko?",
        optionsEn: ["The worry vanished", "The worry weighed what it actually weighed", "She forgot it", "She got money"],
        optionsId: ["Kecemasannya lenyap", "Kecemasannya berbobot sesuai bobot sebenarnya", "Ia melupakannya", "Ia mendapat uang"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-case-of-the-extra-chair",
    titleEn: "The Case of the Extra Chair",
    titleId: "Misteri Kursi yang Berlebih",
    descriptionEn: "The classroom had thirty children and thirty-one chairs, and had done for two years. Detective Nabil decided to find out where the extra one came from.",
    descriptionId: "Kelas itu berisi tiga puluh anak dan tiga puluh satu kursi, dan sudah begitu selama dua tahun. Detektif Nabil memutuskan mencari tahu dari mana kursi lebih itu berasal.",
    categorySlug: "mystery",
    authorSlug: "sarah-johnson",
    coverEmoji: "🪑",
    coverPalette: "dusk",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "extrachair-1",
        textEn: "There were thirty children in class 4B and thirty-one chairs. Nobody had ever mentioned this. Nabil noticed it in October while counting things instead of listening.",
        textId: "Ada tiga puluh anak di kelas 4B dan tiga puluh satu kursi. Tak ada yang pernah menyinggungnya. Nabil menyadarinya pada bulan Oktober saat sedang menghitung barang alih-alih mendengarkan pelajaran."
      },
      {
        illustrationSeed: "extrachair-2",
        textEn: "The extra chair was at the back on the left. It was slightly different from the others: darker wood, and a small square of blue paint on one leg. Nabil wrote this down.",
        textId: "Kursi lebih itu berada di belakang sebelah kiri. Bentuknya sedikit berbeda dari yang lain: kayunya lebih gelap, dan ada bercak cat biru berbentuk persegi kecil di salah satu kakinya. Nabil mencatatnya."
      },
      {
        illustrationSeed: "extrachair-3",
        textEn: "He counted the other classrooms. Every one of them had exactly the right number. 4B was the only room in the school with a spare, which made it, in detective terms, extremely interesting.",
        textId: "Ia menghitung kelas-kelas lain. Semuanya punya jumlah yang tepat. 4B satu-satunya ruangan di sekolah yang punya kursi cadangan — yang, dalam istilah detektif, sangat menarik."
      },
      {
        illustrationSeed: "extrachair-4",
        textEn: "He asked the caretaker, who said the chairs had all come from the same delivery eleven years ago. He asked the office, who said the inventory said thirty. He asked Bu Hesti, who said, \"Ah,\" and then said nothing else for a moment.",
        textId: "Ia bertanya pada penjaga sekolah, yang bilang semua kursi datang dari satu pengiriman sebelas tahun lalu. Ia bertanya ke kantor, yang bilang di inventaris tertulis tiga puluh. Ia bertanya pada Bu Hesti, yang berkata, \"Ah,\" lalu diam sejenak."
      },
      {
        illustrationSeed: "extrachair-5",
        textEn: "Bu Hesti told him after school, with the door shut. Two years ago there had been thirty-one children in her class. The thirty-first was a girl called Wida, who had been ill for a long time and had died in the March.",
        textId: "Bu Hesti menceritakannya sepulang sekolah, dengan pintu tertutup. Dua tahun lalu ada tiga puluh satu anak di kelasnya. Yang ketiga puluh satu adalah anak perempuan bernama Wida, yang sakit lama dan meninggal pada bulan Maret."
      },
      {
        illustrationSeed: "extrachair-6",
        textEn: "The school had offered to take the chair away. Bu Hesti had said no. She had not made a speech about it and she had not told any class since. She had simply never let anybody remove it.",
        textId: "Pihak sekolah menawarkan untuk menyingkirkan kursi itu. Bu Hesti menolak. Ia tidak berpidato soal itu dan tidak memberi tahu kelas mana pun sejak saat itu. Ia hanya tak pernah membiarkan siapa pun memindahkannya."
      },
      {
        illustrationSeed: "extrachair-7",
        textEn: "\"The blue paint,\" said Nabil. \"Yes,\" said Bu Hesti. \"She did that in year two with a brush she was not supposed to have. It is the reason I can always tell which chair it is.\"",
        textId: "\"Cat birunya,\" kata Nabil. \"Ya,\" jawab Bu Hesti. \"Ia melakukannya di kelas dua dengan kuas yang sebenarnya tak boleh ia pegang. Itulah sebabnya saya selalu bisa mengenali kursi yang mana.\""
      },
      {
        illustrationSeed: "extrachair-8",
        textEn: "Nabil closed his notebook. He did not write the last part down and he has never written it down since, which for a boy who writes everything down is the largest thing in this story.",
        textId: "Nabil menutup buku catatannya. Ia tidak menuliskan bagian terakhir itu dan tak pernah menuliskannya sejak saat itu — dan bagi anak yang mencatat segalanya, itulah hal terbesar dalam kisah ini."
      },
      {
        illustrationSeed: "extrachair-9",
        textEn: "The chair is still at the back on the left. Sometimes people put bags on it. Bu Hesti does not mind that at all. She minds only when somebody tries to carry it out of the room.",
        textId: "Kursi itu masih di belakang sebelah kiri. Kadang orang menaruh tas di atasnya. Bu Hesti sama sekali tak keberatan soal itu. Ia hanya keberatan kalau ada yang mencoba membawanya keluar ruangan."
      }
    ],
    quiz: [
      {
        questionEn: "How did Nabil tell the extra chair apart?",
        questionId: "Bagaimana Nabil membedakan kursi lebih itu?",
        optionsEn: ["It was bigger", "Darker wood and a square of blue paint on a leg", "It had a name on it", "It was broken"],
        optionsId: ["Ukurannya lebih besar", "Kayunya lebih gelap dan ada bercak cat biru di kakinya", "Ada namanya", "Kursinya rusak"],
        correctIndex: 1
      },
      {
        questionEn: "Why was there an extra chair?",
        questionId: "Mengapa ada kursi lebih?",
        optionsEn: ["A delivery mistake", "It had belonged to a pupil who died, and Bu Hesti kept it", "For visitors", "Nobody knows"],
        optionsId: ["Kesalahan pengiriman", "Kursi itu milik murid yang meninggal, dan Bu Hesti menyimpannya", "Untuk tamu", "Tak ada yang tahu"],
        correctIndex: 1
      },
      {
        questionEn: "What did Nabil do at the end?",
        questionId: "Apa yang Nabil lakukan pada akhirnya?",
        optionsEn: ["Told the whole class", "Closed his notebook and did not write it down", "Reported it to the office", "Moved the chair"],
        optionsId: ["Menceritakan pada seluruh kelas", "Menutup buku catatannya dan tidak menuliskannya", "Melaporkannya ke kantor", "Memindahkan kursinya"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-pirate-who-drew-the-coastline",
    titleEn: "The Pirate Who Drew the Coastline",
    titleId: "Bajak Laut yang Menggambar Garis Pantai",
    descriptionEn: "Bakti stole cargo for eleven years and drew every bay he hid in. His maps outlived his crew, his ship and his reputation.",
    descriptionId: "Bakti merampas muatan kapal selama sebelas tahun dan menggambar setiap teluk tempatnya bersembunyi. Peta-petanya hidup lebih lama daripada awaknya, kapalnya, dan reputasinya.",
    categorySlug: "pirates",
    authorSlug: "david-lee",
    coverEmoji: "🗺️",
    coverPalette: "ocean",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "mappirate-1",
        textEn: "Bakti was not a good man. That has to be said at the start, because the rest of this story is about something useful he did, and useful is not the same as good.",
        textId: "Bakti bukan orang baik. Itu harus disebut di awal, karena sisa kisah ini tentang sesuatu yang berguna yang ia lakukan — dan berguna tidak sama dengan baik."
      },
      {
        illustrationSeed: "mappirate-2",
        textEn: "He took cargo off other people's ships for eleven years along a coast of four hundred islands, and he stayed uncaught for all eleven of them, which required knowing that coast better than anybody alive.",
        textId: "Ia merampas muatan dari kapal orang lain selama sebelas tahun di sepanjang pantai berisi empat ratus pulau, dan selama sebelas tahun itu ia tak pernah tertangkap — yang menuntutnya mengenal pantai itu lebih baik daripada siapa pun yang hidup."
      },
      {
        illustrationSeed: "mappirate-3",
        textEn: "So he drew it. Every bay he hid in, he drew. Depths he had sounded with a knotted rope. Where the current turned. Which channel was passable at low water and which one killed you.",
        textId: "Maka ia menggambarnya. Setiap teluk tempatnya bersembunyi, ia gambar. Kedalaman yang ia ukur dengan tali bersimpul. Di mana arus berbelok. Alur mana yang bisa dilewati saat air surut dan alur mana yang membunuhmu."
      },
      {
        illustrationSeed: "mappirate-4",
        textEn: "He drew badly, in pencil, on whatever paper he had, and he never once meant it to be useful to anybody else. He drew it so that he could go somewhere in the dark and come out again.",
        textId: "Ia menggambar dengan buruk, dengan pensil, di kertas apa pun yang ada, dan ia tak pernah sekali pun bermaksud membuatnya berguna bagi orang lain. Ia menggambar agar bisa masuk ke suatu tempat dalam gelap dan keluar lagi."
      },
      {
        illustrationSeed: "mappirate-5",
        textEn: "He was caught in the eleventh year, in a bay he had drawn, by a navy captain who had spent four years learning the same water the slow way, and that is the whole irony of it.",
        textId: "Ia tertangkap pada tahun kesebelas, di sebuah teluk yang ia gambar sendiri, oleh seorang kapten angkatan laut yang menghabiskan empat tahun mempelajari perairan yang sama dengan cara lambat — dan itulah seluruh ironinya."
      },
      {
        illustrationSeed: "mappirate-6",
        textEn: "In the sea chest they took off his ship there were forty-one sheets of pencil coastline. The captain looked at them for a long time and then did something unusual: he did not burn them.",
        textId: "Di peti laut yang mereka ambil dari kapalnya ada empat puluh satu lembar garis pantai bergambar pensil. Sang kapten menatapnya lama sekali lalu melakukan sesuatu yang tak biasa: ia tidak membakarnya."
      },
      {
        illustrationSeed: "mappirate-7",
        textEn: "He sent them to the harbour office, where a clerk copied them onto proper chart paper over the following two years, and where they were checked against soundings and found to be very nearly all correct.",
        textId: "Ia mengirimkannya ke kantor pelabuhan, tempat seorang juru tulis menyalinnya ke kertas peta yang benar selama dua tahun berikutnya, dan tempat peta-peta itu diperiksa terhadap pengukuran kedalaman serta ternyata hampir seluruhnya benar."
      },
      {
        illustrationSeed: "mappirate-8",
        textEn: "Those charts kept fishing boats off two reefs for the next sixty years. Nobody using them knew where the lines had come from. The clerk had copied the depths and left the name off.",
        textId: "Peta-peta itu menjauhkan perahu nelayan dari dua karang selama enam puluh tahun berikutnya. Tak seorang pun yang memakainya tahu dari mana garis-garis itu berasal. Sang juru tulis menyalin kedalamannya dan menghilangkan namanya."
      },
      {
        illustrationSeed: "mappirate-9",
        textEn: "Bakti spent the rest of his life in a prison on a hill with a view of the sea he had mapped. He never knew what happened to the papers. This is not a story about a pirate becoming good. It is a story about work outliving the person who did it.",
        textId: "Bakti menghabiskan sisa hidupnya di penjara di atas bukit dengan pemandangan laut yang ia petakan. Ia tak pernah tahu apa yang terjadi pada kertas-kertas itu. Ini bukan kisah bajak laut yang jadi baik. Ini kisah tentang karya yang hidup lebih lama daripada pembuatnya."
      }
    ],
    quiz: [
      {
        questionEn: "Why did Bakti draw the coast?",
        questionId: "Mengapa Bakti menggambar garis pantai?",
        optionsEn: ["To help sailors", "So he could hide and get out again in the dark", "To sell the maps", "For the navy"],
        optionsId: ["Untuk membantu pelaut", "Agar bisa bersembunyi dan keluar lagi dalam gelap", "Untuk menjual petanya", "Untuk angkatan laut"],
        correctIndex: 1
      },
      {
        questionEn: "What did the navy captain do with the maps?",
        questionId: "Apa yang kapten angkatan laut lakukan pada peta-peta itu?",
        optionsEn: ["Burned them", "Sent them to the harbour office to be copied", "Kept them himself", "Gave them back"],
        optionsId: ["Membakarnya", "Mengirimkannya ke kantor pelabuhan untuk disalin", "Menyimpannya sendiri", "Mengembalikannya"],
        correctIndex: 1
      },
      {
        questionEn: "What is this story about?",
        questionId: "Kisah ini tentang apa?",
        optionsEn: ["A pirate becoming good", "Work outliving the person who did it", "Treasure", "Escaping prison"],
        optionsId: ["Bajak laut yang jadi baik", "Karya yang hidup lebih lama daripada pembuatnya", "Harta karun", "Melarikan diri dari penjara"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-knight-who-carried-the-water",
    titleEn: "The Knight Who Carried the Water",
    titleId: "Kesatria yang Mengangkut Air",
    descriptionEn: "Sir Danu won every tournament for nine years. Then the siege came, and the thing that saved the castle was not a single sword.",
    descriptionId: "Sir Danu memenangkan setiap turnamen selama sembilan tahun. Lalu datang pengepungan, dan yang menyelamatkan istana bukanlah satu pun pedang.",
    categorySlug: "princess-knights",
    authorSlug: "sarah-johnson",
    coverEmoji: "🛡️",
    coverPalette: "meadow",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "waterknight-1",
        textEn: "Sir Danu was the best fighter in the kingdom and everybody said so, including Sir Danu, who said it fairly often. He had won nine tournaments and lost none.",
        textId: "Sir Danu adalah petarung terbaik di kerajaan itu dan semua orang mengatakannya, termasuk Sir Danu sendiri, yang cukup sering mengatakannya. Ia memenangkan sembilan turnamen dan tak pernah kalah."
      },
      {
        illustrationSeed: "waterknight-2",
        textEn: "When the siege came he expected the siege to be like a tournament, only longer. He put on his armour on the first morning and stood on the wall and waited to be needed.",
        textId: "Ketika pengepungan datang, ia mengira pengepungan itu seperti turnamen, hanya lebih lama. Ia mengenakan zirahnya pada pagi pertama, berdiri di atas tembok, dan menunggu dibutuhkan."
      },
      {
        illustrationSeed: "waterknight-3",
        textEn: "Nobody attacked. That is not what a siege is. A siege is a very large number of people sitting outside your wall doing nothing at all, waiting for you to run out of something.",
        textId: "Tak ada yang menyerang. Bukan itu arti pengepungan. Pengepungan adalah sangat banyak orang duduk di luar tembokmu tanpa melakukan apa pun, menunggu sampai kau kehabisan sesuatu."
      },
      {
        illustrationSeed: "waterknight-4",
        textEn: "By the eleventh day the thing they were going to run out of was clear. The castle well was low, and the only other water was the spring in the lower courtyard, which was outside the inner wall and within bowshot.",
        textId: "Pada hari kesebelas jelas sudah apa yang akan habis. Sumur istana menyusut, dan satu-satunya sumber air lain adalah mata air di halaman bawah, yang berada di luar tembok dalam dan dalam jangkauan panah."
      },
      {
        illustrationSeed: "waterknight-5",
        textEn: "So somebody had to run out, fill four buckets, and run back. Every four hours. All day and all night. It was the most dangerous job in the castle and it was also just carrying water.",
        textId: "Jadi seseorang harus berlari keluar, mengisi empat ember, dan berlari kembali. Setiap empat jam. Siang dan malam. Itu pekerjaan paling berbahaya di istana dan sekaligus cuma mengangkut air."
      },
      {
        illustrationSeed: "waterknight-6",
        textEn: "Sir Danu volunteered on the eleventh day and did it for thirty-one days. He was not good at it at first. Armour is not designed for running with buckets, and he lost the first two loads entirely.",
        textId: "Sir Danu mengajukan diri pada hari kesebelas dan melakukannya selama tiga puluh satu hari. Awalnya ia tidak mahir. Zirah tidak dirancang untuk berlari sambil membawa ember, dan ia menumpahkan seluruh dua muatan pertamanya."
      },
      {
        illustrationSeed: "waterknight-7",
        textEn: "He got better. He worked out that going at dusk was safer, that two smaller buckets spilled less than one large one, and that if he went at an irregular rhythm the archers could not time him.",
        textId: "Ia jadi lebih baik. Ia menemukan bahwa pergi saat senja lebih aman, bahwa dua ember kecil lebih sedikit tumpah daripada satu ember besar, dan bahwa jika ia bergerak dengan irama tak beraturan para pemanah tak bisa memperkirakan waktunya."
      },
      {
        illustrationSeed: "waterknight-8",
        textEn: "The siege lifted in the sixth week. There had been no battle at all. Not one. Sir Danu did not draw his sword once in forty-two days, and the castle held, and it held because it had water.",
        textId: "Pengepungan diangkat pada pekan keenam. Sama sekali tak ada pertempuran. Tidak satu pun. Sir Danu tak pernah sekali pun menghunus pedangnya dalam empat puluh dua hari, dan istana itu bertahan — dan ia bertahan karena punya air."
      },
      {
        illustrationSeed: "waterknight-9",
        textEn: "He never won another tournament, because he stopped entering them. When people asked why, he said the same thing every time: \"I already know I can win a fight. I did not know I could carry water.\"",
        textId: "Ia tak pernah memenangkan turnamen lagi, karena ia berhenti mengikutinya. Ketika orang bertanya mengapa, ia selalu menjawab hal yang sama: \"Aku sudah tahu aku bisa menang bertarung. Aku tidak tahu aku bisa mengangkut air.\""
      }
    ],
    quiz: [
      {
        questionEn: "What is a siege?",
        questionId: "Apa itu pengepungan?",
        optionsEn: ["A long battle", "People waiting outside until you run out of something", "A tournament", "A retreat"],
        optionsId: ["Pertempuran panjang", "Orang-orang menunggu di luar sampai kau kehabisan sesuatu", "Sebuah turnamen", "Sebuah penarikan mundur"],
        correctIndex: 1
      },
      {
        questionEn: "What job did Sir Danu take?",
        questionId: "Pekerjaan apa yang Sir Danu ambil?",
        optionsEn: ["Guarding the gate", "Running out to the spring for water every four hours", "Leading the army", "Nothing"],
        optionsId: ["Menjaga gerbang", "Berlari ke mata air mengambil air setiap empat jam", "Memimpin pasukan", "Tidak ada"],
        correctIndex: 1
      },
      {
        questionEn: "How many times did he draw his sword?",
        questionId: "Berapa kali ia menghunus pedangnya?",
        optionsEn: ["Every day", "Not once in forty-two days", "Nine times", "Twice"],
        optionsId: ["Setiap hari", "Tidak sekali pun dalam empat puluh dua hari", "Sembilan kali", "Dua kali"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-fish-that-cleaned-the-others",
    titleEn: "The Fish That Cleaned the Others",
    titleId: "Ikan yang Membersihkan Ikan Lain",
    descriptionEn: "Pipit was too small to fight and too slow to flee. So she opened a shop on the reef, and even the sharks queued politely.",
    descriptionId: "Pipit terlalu kecil untuk melawan dan terlalu lambat untuk kabur. Maka ia membuka toko di terumbu karang, dan bahkan para hiu mengantre dengan sopan.",
    categorySlug: "ocean-life",
    authorSlug: "emily-clark",
    coverEmoji: "🐟",
    coverPalette: "ocean",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "cleanerfish-1",
        textEn: "Pipit was a very small fish on a very busy reef. She had no spines, no poison, no speed and no interesting colours. By every normal measure she was somebody else's lunch.",
        textId: "Pipit adalah ikan yang sangat kecil di terumbu karang yang sangat ramai. Ia tak punya duri, tak punya racun, tak punya kecepatan, dan tak punya warna menarik. Menurut ukuran normal mana pun, ia adalah santapan siang bagi yang lain."
      },
      {
        illustrationSeed: "cleanerfish-2",
        textEn: "What she had was a very precise mouth and a great deal of patience, and she discovered by accident that big fish are covered in things that itch and that they cannot reach.",
        textId: "Yang ia punya adalah mulut yang sangat presisi dan kesabaran yang sangat besar, dan ia menemukan secara tak sengaja bahwa ikan-ikan besar penuh dengan hal-hal yang gatal dan tak bisa mereka jangkau."
      },
      {
        illustrationSeed: "cleanerfish-3",
        textEn: "She started with an old grouper who was too tired to chase anything. She worked along his gills for nine minutes. He did not eat her. He came back the next day and brought a friend.",
        textId: "Ia mulai dengan seekor kerapu tua yang terlalu lelah untuk mengejar apa pun. Ia bekerja di sepanjang insangnya selama sembilan menit. Kerapu itu tidak memakannya. Ia kembali esok harinya dan membawa seorang teman."
      },
      {
        illustrationSeed: "cleanerfish-4",
        textEn: "Within a season Pipit had a station: a particular gap between two brain corals where anybody could come, hold still, open their mouth, and be attended to.",
        textId: "Dalam satu musim Pipit sudah punya pos: sebuah celah tertentu di antara dua karang otak, tempat siapa pun bisa datang, diam, membuka mulut, dan dilayani."
      },
      {
        illustrationSeed: "cleanerfish-5",
        textEn: "The rule at the station was absolute and everybody kept it. Nobody eats anybody at the station. A grouper who ate the cleaner would be clean for one afternoon and itching for the rest of his life.",
        textId: "Aturan di pos itu mutlak dan semua mematuhinya. Tak ada yang memakan siapa pun di pos itu. Kerapu yang memakan si pembersih akan bersih satu sore dan gatal seumur hidupnya."
      },
      {
        illustrationSeed: "cleanerfish-6",
        textEn: "There were queues. Genuinely, there were queues. Four or five large fish hanging in the water in a rough line, waiting, while a fish the length of your finger worked her way along somebody's jaw.",
        textId: "Ada antrean. Sungguh, ada antrean. Empat atau lima ikan besar melayang di air dalam barisan kasar, menunggu, sementara ikan sepanjang jarimu bekerja menyusuri rahang seseorang."
      },
      {
        illustrationSeed: "cleanerfish-7",
        textEn: "A young reef shark came once and hung in the queue behind two parrotfish, waiting his turn, which is one of the more remarkable things that happens on a reef and happens every single day.",
        textId: "Seekor hiu karang muda pernah datang dan melayang dalam antrean di belakang dua ikan kakatua, menunggu gilirannya — salah satu hal paling luar biasa yang terjadi di terumbu karang, dan itu terjadi setiap hari."
      },
      {
        illustrationSeed: "cleanerfish-8",
        textEn: "Pipit was never safe because she was strong. She was safe because she was useful, and because being useful to enough people is a kind of armour that nothing on the reef can bite through.",
        textId: "Pipit tak pernah aman karena ia kuat. Ia aman karena ia berguna, dan karena berguna bagi cukup banyak makhluk adalah semacam zirah yang tak bisa digigit tembus oleh apa pun di terumbu itu."
      },
      {
        illustrationSeed: "cleanerfish-9",
        textEn: "She lived four years, which for a fish that size is a very long time, and when she went, two other small fish took over the gap between the brain corals within a week. The station is still there.",
        textId: "Ia hidup empat tahun — waktu yang sangat panjang bagi ikan seukurannya — dan ketika ia tiada, dua ikan kecil lain mengambil alih celah di antara karang otak itu dalam sepekan. Posnya masih ada sampai sekarang."
      }
    ],
    quiz: [
      {
        questionEn: "What did Pipit do for other fish?",
        questionId: "Apa yang Pipit lakukan untuk ikan lain?",
        optionsEn: ["Guided them", "Cleaned the itchy things they could not reach", "Fed them", "Warned them of danger"],
        optionsId: ["Memandu mereka", "Membersihkan hal-hal gatal yang tak bisa mereka jangkau", "Memberi mereka makan", "Memperingatkan bahaya"],
        correctIndex: 1
      },
      {
        questionEn: "Why did nobody eat her?",
        questionId: "Mengapa tak ada yang memakannya?",
        optionsEn: ["She was poisonous", "Eating her means itching for the rest of your life", "She was too fast", "She hid"],
        optionsId: ["Ia beracun", "Memakannya berarti gatal seumur hidup", "Ia terlalu cepat", "Ia bersembunyi"],
        correctIndex: 1
      },
      {
        questionEn: "What kind of armour did Pipit have?",
        questionId: "Zirah macam apa yang Pipit punya?",
        optionsEn: ["Thick scales", "Being useful to enough people", "Sharp spines", "A hard shell"],
        optionsId: ["Sisik tebal", "Berguna bagi cukup banyak makhluk", "Duri tajam", "Cangkang keras"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-elephant-path",
    titleEn: "The Elephant Path",
    titleId: "Jalan Gajah",
    descriptionEn: "The new road cut straight through where the elephants had walked for four hundred years. Both sides were angry. A schoolteacher found the third answer.",
    descriptionId: "Jalan baru itu memotong lurus tempat gajah-gajah berjalan selama empat ratus tahun. Kedua pihak marah. Seorang guru sekolah menemukan jawaban ketiga.",
    categorySlug: "jungle-safari",
    authorSlug: "david-lee",
    coverEmoji: "🐘",
    coverPalette: "forest",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "elephantpath-1",
        textEn: "Elephants do not wander. They walk the same routes their grandmothers walked, between the same water and the same feeding forest, and they have been doing it for longer than any village has existed.",
        textId: "Gajah tidak berkeliaran sembarangan. Mereka menempuh jalur yang sama dengan yang ditempuh nenek mereka, antara sumber air yang sama dan hutan pakan yang sama, dan mereka sudah melakukannya jauh lebih lama daripada usia desa mana pun."
      },
      {
        illustrationSeed: "elephantpath-2",
        textEn: "The new road was built straight across one of those routes, because on the survey map that was the shortest line between two towns and nobody had drawn the elephants on the map.",
        textId: "Jalan baru itu dibangun memotong lurus salah satu jalur tersebut, karena di peta survei itulah garis terpendek antara dua kota, dan tak ada yang menggambar gajah di peta itu."
      },
      {
        illustrationSeed: "elephantpath-3",
        textEn: "For two years it was awful for everybody. Elephants came through gardens because the route now went through gardens. Two people were hurt. Four elephants were hurt, one of them badly.",
        textId: "Selama dua tahun keadaannya buruk bagi semua pihak. Gajah-gajah melewati kebun karena jalurnya kini melewati kebun. Dua orang terluka. Empat gajah terluka, satu di antaranya parah."
      },
      {
        illustrationSeed: "elephantpath-4",
        textEn: "The two sides in the argument were: build a bigger fence, and move the elephants. Both had been tried elsewhere. Fences get pushed over. Elephants moved to a new place walk back.",
        textId: "Dua kubu dalam perdebatan itu adalah: bangun pagar yang lebih besar, dan pindahkan gajah-gajahnya. Keduanya sudah dicoba di tempat lain. Pagar didorong roboh. Gajah yang dipindahkan ke tempat baru berjalan kembali."
      },
      {
        illustrationSeed: "elephantpath-5",
        textEn: "A schoolteacher called Bu Rina spent one wet season doing something nobody had done: she asked eleven of the oldest farmers to draw, from memory, where the elephants used to go before the road.",
        textId: "Seorang guru bernama Bu Rina menghabiskan satu musim hujan melakukan hal yang belum pernah dilakukan siapa pun: ia meminta sebelas petani tertua menggambar dari ingatan ke mana gajah-gajah dulu berjalan sebelum ada jalan itu."
      },
      {
        illustrationSeed: "elephantpath-6",
        textEn: "Eleven drawings, done separately, none of them shown to each other. Nine of them put the crossing in the same place, within about two hundred metres. That is not memory. That is data.",
        textId: "Sebelas gambar, dibuat terpisah, tak satu pun ditunjukkan pada yang lain. Sembilan di antaranya menempatkan titik penyeberangan di tempat yang sama, dalam radius sekitar dua ratus meter. Itu bukan ingatan. Itu data."
      },
      {
        illustrationSeed: "elephantpath-7",
        textEn: "The third answer was neither fence nor relocation. It was an underpass, built at that exact spot, wide and high and open at both ends, with the road going over the top of it.",
        textId: "Jawaban ketiganya bukan pagar, bukan pula pemindahan. Jawabannya adalah terowongan bawah, dibangun tepat di titik itu, lebar dan tinggi serta terbuka di kedua ujungnya, dengan jalan raya melintas di atasnya."
      },
      {
        illustrationSeed: "elephantpath-8",
        textEn: "It took four years and a great deal of money and the elephants ignored it completely for eleven months. Then a single old female went through it, and after her, everybody.",
        textId: "Butuh empat tahun dan biaya sangat besar, dan gajah-gajah itu sepenuhnya mengabaikannya selama sebelas bulan. Lalu seekor betina tua melewatinya, dan sesudah dia, semuanya ikut."
      },
      {
        illustrationSeed: "elephantpath-9",
        textEn: "There is a camera on it now. It records about forty crossings a month. Nobody has been hurt on that stretch of road in six years, and the elephants are walking where their grandmothers walked.",
        textId: "Kini ada kamera di sana. Ia merekam sekitar empat puluh penyeberangan sebulan. Tak ada seorang pun terluka di ruas jalan itu selama enam tahun, dan gajah-gajah berjalan di tempat nenek mereka dulu berjalan."
      }
    ],
    quiz: [
      {
        questionEn: "Why did the road cause trouble?",
        questionId: "Mengapa jalan itu menimbulkan masalah?",
        optionsEn: ["It was too narrow", "It cut across a route elephants had used for centuries", "It flooded", "It was too far away"],
        optionsId: ["Terlalu sempit", "Ia memotong jalur yang dipakai gajah selama berabad-abad", "Ia kebanjiran", "Letaknya terlalu jauh"],
        correctIndex: 1
      },
      {
        questionEn: "What did Bu Rina do?",
        questionId: "Apa yang Bu Rina lakukan?",
        optionsEn: ["Built a fence", "Asked eleven old farmers to draw the old crossing from memory", "Moved the elephants", "Closed the road"],
        optionsId: ["Membangun pagar", "Meminta sebelas petani tua menggambar titik penyeberangan lama dari ingatan", "Memindahkan gajah-gajahnya", "Menutup jalannya"],
        correctIndex: 1
      },
      {
        questionEn: "What was the third answer?",
        questionId: "Apa jawaban ketiganya?",
        optionsEn: ["A taller fence", "An underpass at the old crossing point", "Moving the village", "Nothing"],
        optionsId: ["Pagar yang lebih tinggi", "Terowongan bawah di titik penyeberangan lama", "Memindahkan desanya", "Tidak ada"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-dog-who-knew-the-bus",
    titleEn: "The Dog Who Knew the Bus",
    titleId: "Anjing yang Hafal Bus",
    descriptionEn: "Every weekday at ten past five, Kopi walked to the bus stop alone. It took the neighbourhood two years to work out how he knew the time.",
    descriptionId: "Setiap hari kerja pukul lima lewat sepuluh, Kopi berjalan sendirian ke halte bus. Butuh dua tahun bagi warga untuk memahami bagaimana ia tahu waktunya.",
    categorySlug: "pets",
    authorSlug: "siti-aminah",
    coverEmoji: "🐕",
    coverPalette: "sunset",
    ageMin: 4,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "kopidog-1",
        textEn: "Kopi belonged to Pak Anwar, who worked in the town and came home on the 5:20 bus, which stopped at the corner of Jalan Duku at about twenty-five past.",
        textId: "Kopi milik Pak Anwar, yang bekerja di kota dan pulang naik bus pukul 17.20, yang berhenti di sudut Jalan Duku sekitar pukul 17.25."
      },
      {
        illustrationSeed: "kopidog-2",
        textEn: "Every weekday, at ten past five, Kopi got up from wherever he was sleeping, walked down the lane on his own, and sat at the corner facing the direction the bus comes from.",
        textId: "Setiap hari kerja, pukul lima lewat sepuluh, Kopi bangkit dari tempatnya tidur, berjalan sendirian menyusuri gang, lalu duduk di sudut jalan menghadap ke arah datangnya bus."
      },
      {
        illustrationSeed: "kopidog-3",
        textEn: "Not on Sunday. On Sunday he stayed on the step all afternoon. Not on public holidays either. The neighbourhood found this considerably more impressive than the weekday part.",
        textId: "Tidak pada hari Minggu. Pada hari Minggu ia tetap di teras sepanjang sore. Tidak juga pada hari libur nasional. Warga menganggap bagian ini jauh lebih mengesankan daripada bagian hari kerjanya."
      },
      {
        illustrationSeed: "kopidog-4",
        textEn: "Theories were offered. He could smell Pak Anwar from two kilometres away. He could hear the bus. He had learned to read the wall clock. He was, several people said seriously, simply a very clever dog.",
        textId: "Berbagai teori bermunculan. Ia bisa mencium bau Pak Anwar dari dua kilometer. Ia bisa mendengar busnya. Ia sudah belajar membaca jam dinding. Beberapa orang berkata dengan serius bahwa ia hanyalah anjing yang sangat cerdas."
      },
      {
        illustrationSeed: "kopidog-5",
        textEn: "A girl called Ratih, who was eleven and had a notebook, spent two months timing him. Kopi was never late and never early by more than about four minutes. But on one Tuesday he did not go at all.",
        textId: "Seorang anak bernama Ratih, umur sebelas tahun dan punya buku catatan, menghabiskan dua bulan mencatat waktunya. Kopi tak pernah telat dan tak pernah lebih cepat lebih dari sekitar empat menit. Tapi pada suatu Selasa ia sama sekali tidak pergi."
      },
      {
        illustrationSeed: "kopidog-6",
        textEn: "That Tuesday, Ratih later found out, the school across the road had closed early for exams, so the school bell at five past five had not rung.",
        textId: "Pada Selasa itu, kemudian Ratih ketahui, sekolah di seberang jalan tutup lebih awal karena ujian, jadi lonceng sekolah pukul lima lewat lima tidak berbunyi."
      },
      {
        illustrationSeed: "kopidog-7",
        textEn: "That was the whole answer. Kopi was not telling the time. He was waiting for a bell that rang five minutes before he needed to leave — a bell that does not ring on Sundays or public holidays.",
        textId: "Itulah seluruh jawabannya. Kopi tidak membaca waktu. Ia menunggu lonceng yang berbunyi lima menit sebelum ia perlu berangkat — lonceng yang tidak berbunyi pada hari Minggu atau hari libur nasional."
      },
      {
        illustrationSeed: "kopidog-8",
        textEn: "This is less magical than a dog who can read a clock. It is also much more interesting, because it means Kopi had found the one signal in the whole neighbourhood that carried the information he needed.",
        textId: "Ini kurang ajaib dibanding anjing yang bisa membaca jam. Tapi jauh lebih menarik, karena artinya Kopi telah menemukan satu-satunya sinyal di seluruh lingkungan itu yang memuat informasi yang ia butuhkan."
      },
      {
        illustrationSeed: "kopidog-9",
        textEn: "Pak Anwar retired last year and no longer takes the bus. Kopi still goes to the corner at ten past five on weekdays. He sits for about eleven minutes, then comes home. Nobody has the heart to stop him.",
        textId: "Pak Anwar pensiun tahun lalu dan tak lagi naik bus. Kopi masih pergi ke sudut jalan pukul lima lewat sepuluh setiap hari kerja. Ia duduk sekitar sebelas menit, lalu pulang. Tak ada yang tega menghentikannya."
      }
    ],
    quiz: [
      {
        questionEn: "When did Kopi go to the corner?",
        questionId: "Kapan Kopi pergi ke sudut jalan?",
        optionsEn: ["Every day at noon", "Weekdays at ten past five", "Only Sundays", "Whenever he liked"],
        optionsId: ["Setiap hari tengah hari", "Hari kerja pukul lima lewat sepuluh", "Hanya hari Minggu", "Kapan saja ia mau"],
        correctIndex: 1
      },
      {
        questionEn: "How did he know when to go?",
        questionId: "Bagaimana ia tahu kapan harus pergi?",
        optionsEn: ["He could read the clock", "The school bell at five past five", "He smelled Pak Anwar", "He heard the bus"],
        optionsId: ["Ia bisa membaca jam", "Lonceng sekolah pukul lima lewat lima", "Ia mencium bau Pak Anwar", "Ia mendengar busnya"],
        correctIndex: 1
      },
      {
        questionEn: "Why did he not go on Sundays?",
        questionId: "Mengapa ia tidak pergi pada hari Minggu?",
        optionsEn: ["He was tired", "The school bell does not ring then", "The bus does not run", "He forgot"],
        optionsId: ["Ia lelah", "Lonceng sekolah tidak berbunyi hari itu", "Busnya tidak beroperasi", "Ia lupa"],
        correctIndex: 1
      }
    ]
  }
];
