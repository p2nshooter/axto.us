/**
 * Story batch E — hand-written bilingual (EN/ID) read-aloud stories, appended
 * to the library. Batches only ever add; nothing existing is edited or merged.
 *
 * This batch spreads across bedtime, animals, ocean-life, science, learning,
 * emotions, humor, vehicles, community-helpers and health-body.
 */
import type { Story } from "./stories";

export const STORIES_BATCH_E: Story[] = [
  {
    slug: "the-house-that-settles-at-night",
    titleEn: "The House That Settles at Night",
    titleId: "Rumah yang Menghela Napas di Malam Hari",
    descriptionEn: "Nabil cannot sleep because the house makes noises. His mother explains every single one of them, in order, until he stops hearing them.",
    descriptionId: "Nabil tidak bisa tidur karena rumahnya berbunyi-bunyi. Ibunya menjelaskan setiap bunyi itu, satu per satu, sampai ia berhenti mendengarnya.",
    categorySlug: "bedtime",
    authorSlug: "axto-creative-team",
    coverEmoji: "🏠",
    coverPalette: "twilight",
    ageMin: 3,
    ageMax: 7,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "settle-1",
        textEn: "Nabil could not sleep, because the house was talking. It only ever talked at night, when everything else had gone quiet, and it said things in creaks and taps and small sighs.",
        textId: "Nabil tidak bisa tidur, karena rumahnya sedang berbicara. Rumah itu hanya berbicara di malam hari, ketika semua yang lain sudah senyap, dan ia berkata-kata lewat derit, ketukan, dan helaan kecil."
      },
      {
        illustrationSeed: "settle-2",
        textEn: "His mother came and sat on the end of the bed. She did not say there was nothing there. She said, \"Let us do them one at a time. Tell me when you hear one.\"",
        textId: "Ibunya datang dan duduk di ujung tempat tidur. Ia tidak berkata bahwa tidak ada apa-apa. Ia berkata, \"Mari kita bahas satu per satu. Beri tahu Ibu kalau kamu dengar salah satunya.\""
      },
      {
        illustrationSeed: "settle-3",
        textEn: "A long slow creak from above. \"That is the roof beam,\" she said. \"It was warm all day and now it is cooling down, and wood gets very slightly smaller when it cools. That noise is the house getting smaller.\"",
        textId: "Terdengar derit panjang dan lambat dari atas. \"Itu balok atap,\" katanya. \"Seharian ia hangat dan sekarang mendingin, dan kayu menyusut sedikit saat mendingin. Bunyi itu adalah rumah yang sedang mengecil.\""
      },
      {
        illustrationSeed: "settle-4",
        textEn: "A tick, tick, tick from the corner. \"That is the radiator pipe. There is water in it that was hot and is now not hot, and metal does the same thing as wood. Everything in this house is shrinking a tiny bit.\"",
        textId: "Terdengar tik, tik, tik dari sudut ruangan. \"Itu pipa penghangat. Ada air di dalamnya yang tadinya panas dan sekarang tidak lagi, dan logam berperilaku seperti kayu. Semua di rumah ini sedang menyusut sedikit sekali.\""
      },
      {
        illustrationSeed: "settle-5",
        textEn: "A soft thump on the floor above. Nabil sat up. His mother said, \"That is the cat getting off the chair. She does it at about this time every night. Listen — in a moment she will scratch the arm.\" The cat scratched the arm.",
        textId: "Terdengar bunyi tumpul lembut di lantai atas. Nabil terduduk. Ibunya berkata, \"Itu kucing turun dari kursi. Ia melakukannya sekitar jam segini setiap malam. Dengarkan — sebentar lagi ia akan mencakar sandaran kursi.\" Kucing itu mencakar sandaran kursi."
      },
      {
        illustrationSeed: "settle-6",
        textEn: "A rush and a hush outside. \"Wind in the mango tree. When it comes from the north it goes through the leaves and sounds like the sea. When it comes from the east it hits the wall and sounds like nothing at all.\"",
        textId: "Terdengar desau lalu senyap di luar. \"Angin di pohon mangga. Kalau datang dari utara ia melewati dedaunan dan terdengar seperti laut. Kalau dari timur ia menabrak tembok dan tidak terdengar apa-apa.\""
      },
      {
        illustrationSeed: "settle-7",
        textEn: "One more: a small knock, twice, from somewhere he could not place. His mother listened properly, and then said, \"I do not know what that one is.\" And oddly, that helped more than any of the others.",
        textId: "Satu lagi: ketukan kecil, dua kali, dari tempat yang tidak bisa ia tentukan. Ibunya mendengarkan baik-baik, lalu berkata, \"Ibu tidak tahu yang itu apa.\" Dan anehnya, itu justru lebih menenangkan daripada semua penjelasan sebelumnya."
      },
      {
        illustrationSeed: "settle-8",
        textEn: "\"There are things in every house that nobody has worked out,\" she said. \"That does not make them frightening. It makes them unfinished. You can go to sleep in the middle of an unfinished thing.\"",
        textId: "\"Di setiap rumah ada hal-hal yang belum dipecahkan siapa pun,\" katanya. \"Itu tidak membuatnya menakutkan. Itu membuatnya belum selesai. Kamu boleh tidur di tengah sesuatu yang belum selesai.\""
      },
      {
        illustrationSeed: "settle-9",
        textEn: "Nabil listened to the house shrinking, and the cat, and the wind in the mango tree from the north. Somewhere in the middle of the list, without noticing he had done it, he stopped listening and went to sleep.",
        textId: "Nabil mendengarkan rumah yang menyusut, kucing itu, dan angin dari utara di pohon mangga. Di suatu titik di tengah daftar itu, tanpa menyadarinya, ia berhenti mendengarkan dan tertidur."
      }
    ],
    quiz: [
      {
        questionEn: "Why does the roof beam creak at night?",
        questionId: "Mengapa balok atap berderit di malam hari?",
        optionsEn: ["Somebody is walking on it", "The wood cools and gets slightly smaller", "It is broken", "Birds sit on it"],
        optionsId: ["Ada yang berjalan di atasnya", "Kayunya mendingin dan menyusut sedikit", "Ia rusak", "Burung hinggap di atasnya"],
        correctIndex: 1
      },
      {
        questionEn: "What did his mother say about the noise she could not explain?",
        questionId: "Apa kata ibunya tentang bunyi yang tidak bisa ia jelaskan?",
        optionsEn: ["It was dangerous", "It was unfinished, not frightening", "It was imaginary", "To ignore it"],
        optionsId: ["Itu berbahaya", "Itu belum selesai, bukan menakutkan", "Itu khayalan", "Abaikan saja"],
        correctIndex: 1
      },
      {
        questionEn: "How did Nabil finally fall asleep?",
        questionId: "Bagaimana akhirnya Nabil tertidur?",
        optionsEn: ["The noises stopped", "He stopped listening without noticing", "He counted sheep", "He moved rooms"],
        optionsId: ["Bunyinya berhenti", "Ia berhenti mendengarkan tanpa sadar", "Ia menghitung domba", "Ia pindah kamar"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-ants-who-built-a-bridge",
    titleEn: "The Ants Who Built a Bridge",
    titleId: "Semut-semut yang Membangun Jembatan",
    descriptionEn: "A boy watches a line of ants meet a gap they cannot cross, and discovers what they do about it.",
    descriptionId: "Seorang anak mengamati barisan semut menemui celah yang tak bisa mereka seberangi, dan menemukan apa yang mereka lakukan.",
    categorySlug: "animals",
    authorSlug: "axto-creative-team",
    coverEmoji: "🐜",
    coverPalette: "meadow",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "ants-1",
        textEn: "There was a crack in the concrete path behind Toni's house, about as wide as his thumb, and a line of ants ran along the path from the drain to the mango tree and back all day long.",
        textId: "Ada retakan di jalan setapak beton di belakang rumah Toni, kira-kira selebar ibu jarinya, dan sebaris semut berjalan di jalan itu dari selokan ke pohon mangga dan kembali sepanjang hari."
      },
      {
        illustrationSeed: "ants-2",
        textEn: "When the ants reached the crack they had to go all the way around, which added a long detour to every single trip. Toni watched them do it for about twenty minutes and found it faintly annoying on their behalf.",
        textId: "Ketika semut-semut sampai di retakan itu mereka harus memutar jauh, yang menambah jalan memutar panjang pada setiap perjalanan. Toni mengamati mereka melakukannya sekitar dua puluh menit dan merasa agak jengkel mewakili mereka."
      },
      {
        illustrationSeed: "ants-3",
        textEn: "Then something changed. Three ants stopped at the edge instead of turning. One reached across with her front legs. Another climbed onto her and reached further. A third gripped the second.",
        textId: "Lalu ada yang berubah. Tiga semut berhenti di tepi alih-alih berbelok. Satu mengulurkan kaki depannya menyeberang. Yang lain memanjat ke atasnya dan mengulur lebih jauh. Yang ketiga mencengkeram yang kedua."
      },
      {
        illustrationSeed: "ants-4",
        textEn: "Toni got down on his stomach on the warm concrete. In eleven minutes the ants had made a chain across the crack out of their own bodies, holding on to one another with their legs and jaws.",
        textId: "Toni tiarap di beton yang hangat. Dalam sebelas menit semut-semut itu telah membuat rantai menyeberangi retakan dari tubuh mereka sendiri, saling berpegangan dengan kaki dan rahang."
      },
      {
        illustrationSeed: "ants-5",
        textEn: "And then the rest of the line simply walked over them. Hundreds of ants, carrying crumbs and seeds and one enormous piece of a dead beetle, walking on the backs of the ones holding still.",
        textId: "Lalu barisan lainnya berjalan begitu saja di atas mereka. Ratusan semut, membawa remah dan biji dan satu potongan besar kumbang mati, berjalan di punggung semut-semut yang diam menahan."
      },
      {
        illustrationSeed: "ants-6",
        textEn: "Toni went and got his mother, who was busy, and made her come and look. She lay down on the concrete next to him in her work clothes and did not say anything for a full minute.",
        textId: "Toni pergi memanggil ibunya, yang sedang sibuk, dan memaksanya datang melihat. Ibunya berbaring di beton di sampingnya dengan pakaian kerjanya dan tidak berkata apa-apa selama satu menit penuh."
      },
      {
        illustrationSeed: "ants-7",
        textEn: "\"How do they know?\" said Toni. His mother said she did not think any single ant knew. \"None of them can see the whole crack. They are each doing one small thing. The bridge is what happens when enough of them do it.\"",
        textId: "\"Bagaimana mereka tahu?\" tanya Toni. Ibunya berkata ia tidak yakin ada satu semut pun yang tahu. \"Tak satu pun dari mereka bisa melihat seluruh retakan. Masing-masing hanya melakukan satu hal kecil. Jembatan itu terjadi ketika cukup banyak yang melakukannya.\""
      },
      {
        illustrationSeed: "ants-8",
        textEn: "The bridge stayed up until dusk. Then, when the traffic stopped, the ants at the bottom let go one at a time and the whole chain came apart and walked home, and there was nothing there at all.",
        textId: "Jembatan itu bertahan sampai senja. Lalu, ketika lalu lintas berhenti, semut-semut di bawah melepaskan pegangan satu per satu dan seluruh rantai terurai lalu berjalan pulang, dan tidak ada apa-apa lagi di sana."
      },
      {
        illustrationSeed: "ants-9",
        textEn: "Toni checked the crack every day for a month. Some days there was a bridge and some days there was not. He never worked out how they decided, and neither, so far, has anybody else.",
        textId: "Toni memeriksa retakan itu setiap hari selama sebulan. Ada hari dengan jembatan dan ada hari tanpa jembatan. Ia tidak pernah bisa memecahkan bagaimana mereka memutuskan, dan sejauh ini, tak seorang pun bisa."
      }
    ],
    quiz: [
      {
        questionEn: "What did the ants do about the crack?",
        questionId: "Apa yang semut-semut lakukan terhadap retakan itu?",
        optionsEn: ["Filled it with soil", "Made a bridge out of their own bodies", "Went around forever", "Gave up"],
        optionsId: ["Menimbunnya dengan tanah", "Membuat jembatan dari tubuh mereka sendiri", "Terus memutar selamanya", "Menyerah"],
        correctIndex: 1
      },
      {
        questionEn: "Does any single ant know the whole plan?",
        questionId: "Apakah ada satu semut yang tahu seluruh rencananya?",
        optionsEn: ["Yes, the queen tells them", "No — each does one small thing", "Yes, the oldest one", "They read a map"],
        optionsId: ["Ya, ratunya memberi tahu", "Tidak — masing-masing melakukan satu hal kecil", "Ya, yang paling tua", "Mereka membaca peta"],
        correctIndex: 1
      },
      {
        questionEn: "What happened to the bridge at dusk?",
        questionId: "Apa yang terjadi pada jembatan itu saat senja?",
        optionsEn: ["It stayed forever", "The ants let go and walked home", "It was washed away", "It turned to stone"],
        optionsId: ["Bertahan selamanya", "Semut-semut melepas pegangan dan pulang", "Hanyut terbawa air", "Berubah menjadi batu"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-whale-that-sang-the-wrong-song",
    titleEn: "The Whale That Sang the Wrong Song",
    titleId: "Paus yang Menyanyikan Lagu yang Salah",
    descriptionEn: "A young whale sings at a pitch no other whale can hear. For eleven years nobody answers — and then somebody does.",
    descriptionId: "Seekor paus muda bernyanyi pada nada yang tak bisa didengar paus lain. Selama sebelas tahun tak ada yang menjawab — lalu ada yang menjawab.",
    categorySlug: "ocean-life",
    authorSlug: "axto-creative-team",
    coverEmoji: "🐋",
    coverPalette: "ocean",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "whale-1",
        textEn: "Whale song carries a very long way. A call made off one coast can be heard by a whale hundreds of kilometres away, which is how they find each other across an ocean that has no roads in it.",
        textId: "Nyanyian paus merambat sangat jauh. Panggilan dari satu pesisir bisa terdengar oleh paus ratusan kilometer jauhnya, dan begitulah cara mereka saling menemukan di samudra yang tidak punya jalan."
      },
      {
        illustrationSeed: "whale-2",
        textEn: "There was a young whale whose song came out at the wrong pitch. Not a little wrong. So high that the other whales in her family could not hear it at all, the way you cannot hear a dog whistle.",
        textId: "Ada seekor paus muda yang nyanyiannya keluar pada nada yang salah. Bukan sedikit salah. Begitu tinggi sampai paus-paus lain di keluarganya sama sekali tidak bisa mendengarnya, seperti manusia tidak bisa mendengar peluit anjing."
      },
      {
        illustrationSeed: "whale-3",
        textEn: "She sang anyway. She sang across the cold water in the north and the warm water in the south, following the routes her mother had taught her, calling and calling and getting nothing back.",
        textId: "Ia tetap bernyanyi. Ia bernyanyi menyeberangi air dingin di utara dan air hangat di selatan, mengikuti rute yang diajarkan ibunya, memanggil dan memanggil dan tidak mendapat balasan."
      },
      {
        illustrationSeed: "whale-4",
        textEn: "Eleven years. That is a long time to keep doing something that has never once worked. She did not stop, because a whale does not really have anything else to do with the inside of her chest.",
        textId: "Sebelas tahun. Itu waktu yang panjang untuk terus melakukan sesuatu yang tak pernah sekali pun berhasil. Ia tidak berhenti, karena seekor paus memang tidak punya kegiatan lain untuk isi dadanya."
      },
      {
        illustrationSeed: "whale-5",
        textEn: "In the twelfth year, some people on a ship put a microphone in the water to listen for something else entirely, and heard her instead: a single voice at a pitch no whale in the record had ever used.",
        textId: "Pada tahun kedua belas, beberapa orang di sebuah kapal menurunkan mikrofon ke dalam air untuk mendengarkan hal lain, dan justru mendengarnya: satu suara pada nada yang belum pernah dipakai paus mana pun dalam catatan."
      },
      {
        illustrationSeed: "whale-6",
        textEn: "They followed her for two seasons. They could not see her often — the ocean is very large and a whale is smaller than the ocean — but they could hear her every night, and they wrote down every note.",
        textId: "Mereka mengikutinya selama dua musim. Mereka jarang bisa melihatnya — samudra sangat luas dan seekor paus lebih kecil daripada samudra — tetapi mereka bisa mendengarnya setiap malam, dan mereka mencatat setiap nadanya."
      },
      {
        illustrationSeed: "whale-7",
        textEn: "And here is the part that matters. In the second season, the recordings changed. There was her voice — and then, faintly, on some nights, other voices in her family answering slightly higher than they used to.",
        textId: "Dan inilah bagian yang penting. Pada musim kedua, rekamannya berubah. Ada suaranya — lalu, samar-samar, pada malam-malam tertentu, suara-suara lain di keluarganya menjawab dengan nada sedikit lebih tinggi daripada biasanya."
      },
      {
        illustrationSeed: "whale-8",
        textEn: "Nobody is certain what happened. The kindest explanation, and the one the scientists put in their paper very carefully, is that the others had been slowly learning to hear her.",
        textId: "Tidak ada yang yakin apa yang terjadi. Penjelasan yang paling murah hati, dan yang para ilmuwan tuliskan dengan sangat hati-hati dalam makalah mereka, adalah bahwa yang lain perlahan belajar mendengarnya."
      },
      {
        illustrationSeed: "whale-9",
        textEn: "She is still out there somewhere, singing her wrong song across a very large amount of water. It took eleven years to be heard. That is a long time. It is not, it turns out, forever.",
        textId: "Ia masih ada di suatu tempat di sana, menyanyikan lagunya yang salah melintasi hamparan air yang sangat luas. Butuh sebelas tahun untuk didengar. Itu waktu yang panjang. Ternyata, itu bukan selamanya."
      }
    ],
    quiz: [
      {
        questionEn: "Why could the other whales not hear her?",
        questionId: "Mengapa paus-paus lain tidak bisa mendengarnya?",
        optionsEn: ["She was too quiet", "Her song was at too high a pitch", "She was too far away", "She never sang"],
        optionsId: ["Suaranya terlalu pelan", "Nyanyiannya terlalu tinggi nadanya", "Ia terlalu jauh", "Ia tidak pernah bernyanyi"],
        correctIndex: 1
      },
      {
        questionEn: "Who heard her first?",
        questionId: "Siapa yang pertama mendengarnya?",
        optionsEn: ["Another whale", "People with a microphone in the water", "A fish", "Nobody ever did"],
        optionsId: ["Paus lain", "Orang-orang dengan mikrofon di dalam air", "Seekor ikan", "Tidak pernah ada"],
        correctIndex: 1
      },
      {
        questionEn: "What changed in the second season of recordings?",
        questionId: "Apa yang berubah pada rekaman musim kedua?",
        optionsEn: ["She stopped singing", "Other whales answered slightly higher than before", "The ship left", "The sea got louder"],
        optionsId: ["Ia berhenti bernyanyi", "Paus lain menjawab dengan nada sedikit lebih tinggi", "Kapalnya pergi", "Lautnya jadi lebih berisik"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-shadow-that-told-the-time",
    titleEn: "The Shadow That Told the Time",
    titleId: "Bayangan yang Menunjukkan Waktu",
    descriptionEn: "Anisa marks where the shed's shadow falls, every hour, for a year. What she finds is not what she expected.",
    descriptionId: "Anisa menandai letak bayangan gudang, setiap jam, selama setahun. Yang ia temukan bukan seperti yang ia duga.",
    categorySlug: "science",
    authorSlug: "axto-creative-team",
    coverEmoji: "🌞",
    coverPalette: "citrus",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "shadow-1",
        textEn: "It started because Anisa's watch broke and nobody would replace it until her birthday. Her grandfather said, \"Then use the sun,\" which she assumed was a joke, and it was not.",
        textId: "Semua bermula karena jam tangan Anisa rusak dan tak seorang pun mau menggantinya sampai ulang tahunnya. Kakeknya berkata, \"Kalau begitu pakai matahari,\" yang ia kira lelucon, padahal bukan."
      },
      {
        illustrationSeed: "shadow-2",
        textEn: "So she drove a stick into the yard and put a stone where the tip of its shadow fell at nine, and another at ten, and another at eleven, all the way to five. Seven stones in a curve.",
        textId: "Maka ia menancapkan sebatang tongkat di halaman dan meletakkan batu di tempat ujung bayangannya jatuh pukul sembilan, satu lagi pukul sepuluh, satu lagi pukul sebelas, sampai pukul lima. Tujuh batu dalam sebuah lengkungan."
      },
      {
        illustrationSeed: "shadow-3",
        textEn: "For a week it worked beautifully. She could tell the time to within about ten minutes just by looking out of the window, and she was extremely pleased with herself, and said so, repeatedly.",
        textId: "Selama seminggu itu berjalan sempurna. Ia bisa menebak waktu dengan selisih sekitar sepuluh menit hanya dengan melihat dari jendela, dan ia sangat bangga pada dirinya sendiri, dan mengatakannya berulang kali."
      },
      {
        illustrationSeed: "shadow-4",
        textEn: "Then in the second month it started going wrong. The shadow at noon was not reaching the noon stone. By the third month it was falling well short, and she checked her stones four times because she assumed somebody had moved them.",
        textId: "Lalu pada bulan kedua mulai meleset. Bayangan tengah hari tidak lagi sampai ke batu tengah hari. Pada bulan ketiga jaraknya jauh kurang, dan ia memeriksa batu-batunya empat kali karena ia mengira ada yang memindahkannya."
      },
      {
        illustrationSeed: "shadow-5",
        textEn: "Her grandfather did not tell her the answer. He said, \"Keep the stones. Add new ones in a different colour. And write the date on a piece of paper each time.\" So Anisa did, for a whole year, which is a long time when you are nine.",
        textId: "Kakeknya tidak memberi tahu jawabannya. Ia berkata, \"Simpan batu-batunya. Tambahkan yang baru dengan warna berbeda. Dan tuliskan tanggalnya di secarik kertas setiap kali.\" Maka Anisa melakukannya, selama setahun penuh, yang terasa lama ketika kau berumur sembilan tahun."
      },
      {
        illustrationSeed: "shadow-6",
        textEn: "By the following autumn there were four curves of stones in the yard, one for each season, and they made a shape: a long flattened figure, wide in winter, tight in summer, sweeping back and forth.",
        textId: "Menjelang musim gugur berikutnya ada empat lengkungan batu di halaman, satu untuk setiap musim, dan semuanya membentuk sebuah pola: sosok panjang yang memipih, lebar di musim dingin, rapat di musim panas, menyapu maju mundur."
      },
      {
        illustrationSeed: "shadow-7",
        textEn: "\"The sun is not in the same place,\" said Anisa. \"Not at the same time. Not on different days.\" Her grandfather said, \"Correct. Now say the other half of it.\" And Anisa thought, and went slightly pale, and said, \"Or we are not.\"",
        textId: "\"Mataharinya tidak di tempat yang sama,\" kata Anisa. \"Tidak pada jam yang sama. Tidak pada hari yang berbeda.\" Kakeknya berkata, \"Benar. Sekarang sebutkan separuh sisanya.\" Anisa berpikir, wajahnya sedikit memucat, dan berkata, \"Atau kitanya yang tidak.\""
      },
      {
        illustrationSeed: "shadow-8",
        textEn: "Which is the whole thing, really. The Earth is tilted, and it goes round, and so the sun stands at a different height at noon in January than in July, and a stick in a yard will tell you that if you are patient enough to watch it for a year.",
        textId: "Dan sebenarnya itulah intinya. Bumi miring, dan ia mengelilingi matahari, sehingga matahari berdiri pada ketinggian berbeda pada tengah hari di bulan Januari dibanding Juli, dan sebatang tongkat di halaman akan memberitahumu itu kalau kau cukup sabar mengamatinya selama setahun."
      },
      {
        illustrationSeed: "shadow-9",
        textEn: "She got a watch for her birthday. The stones are still in the yard. Her grandfather mows around them, carefully, every summer, and has never once suggested taking them up.",
        textId: "Ia mendapat jam tangan di hari ulang tahunnya. Batu-batu itu masih ada di halaman. Kakeknya memangkas rumput mengitarinya, dengan hati-hati, setiap musim panas, dan tidak pernah sekali pun mengusulkan untuk mengangkatnya."
      }
    ],
    quiz: [
      {
        questionEn: "What did Anisa use to tell the time?",
        questionId: "Apa yang Anisa pakai untuk menentukan waktu?",
        optionsEn: ["A clock", "A stick's shadow and marker stones", "The birds", "A candle"],
        optionsId: ["Sebuah jam", "Bayangan tongkat dan batu penanda", "Burung-burung", "Sebatang lilin"],
        correctIndex: 1
      },
      {
        questionEn: "Why did the shadow stop matching her stones?",
        questionId: "Mengapa bayangannya tidak lagi cocok dengan batu-batunya?",
        optionsEn: ["Somebody moved them", "The sun's height at noon changes through the year", "The stick shrank", "It was cloudy"],
        optionsId: ["Ada yang memindahkannya", "Ketinggian matahari di tengah hari berubah sepanjang tahun", "Tongkatnya menyusut", "Cuacanya mendung"],
        correctIndex: 1
      },
      {
        questionEn: "What causes it?",
        questionId: "Apa penyebabnya?",
        optionsEn: ["The sun moving away", "The Earth being tilted as it goes round", "Clouds", "The seasons changing the sun"],
        optionsId: ["Matahari menjauh", "Bumi yang miring saat mengelilingi matahari", "Awan", "Musim yang mengubah matahari"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-boy-who-could-not-read",
    titleEn: "The Boy Who Could Not Read",
    titleId: "Anak yang Tidak Bisa Membaca",
    descriptionEn: "Rangga is nine and the letters move on the page. It takes a long time before anybody realises that is what he means.",
    descriptionId: "Rangga berumur sembilan tahun dan huruf-huruf bergerak di halaman. Butuh waktu lama sampai ada yang menyadari itulah yang ia maksud.",
    categorySlug: "learning",
    authorSlug: "axto-creative-team",
    coverEmoji: "📖",
    coverPalette: "sunrise",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "rangga-1",
        textEn: "Rangga was nine and could not read properly, and everybody had a theory about why. He was lazy. He was not concentrating. He was clever but would not apply himself. He heard all four theories that year.",
        textId: "Rangga berumur sembilan tahun dan belum bisa membaca dengan baik, dan semua orang punya teori tentang sebabnya. Ia malas. Ia tidak berkonsentrasi. Ia pintar tapi tidak mau berusaha. Ia mendengar keempat teori itu tahun itu."
      },
      {
        illustrationSeed: "rangga-2",
        textEn: "What Rangga actually experienced, when he looked at a page, was that the letters would not hold still. They swam a little, and swapped places, and the white spaces between the words closed up like water.",
        textId: "Yang sebenarnya Rangga alami, ketika menatap halaman, adalah huruf-huruf itu tidak mau diam. Mereka sedikit berenang, bertukar tempat, dan ruang-ruang putih di antara kata menutup seperti air."
      },
      {
        illustrationSeed: "rangga-3",
        textEn: "He had said this once, when he was six, in the only words he had. He said, \"It moves.\" The adult had said, \"Books do not move, Rangga,\" quite kindly, and that had been the end of it for three years.",
        textId: "Ia pernah mengatakannya sekali, waktu berumur enam tahun, dengan satu-satunya kata yang ia punya. Ia berkata, \"Itu bergerak.\" Orang dewasa itu menjawab, \"Buku tidak bergerak, Rangga,\" dengan cukup ramah, dan itu jadi akhir pembicaraan selama tiga tahun."
      },
      {
        illustrationSeed: "rangga-4",
        textEn: "In year four he got a teacher called Pak Anton who asked a different question. Not \"why are you not reading\" but \"tell me exactly what you see.\" And then he waited, without filling the silence, for a long time.",
        textId: "Di kelas empat ia mendapat guru bernama Pak Anton yang mengajukan pertanyaan berbeda. Bukan \"mengapa kau tidak membaca\" melainkan \"ceritakan persis apa yang kau lihat.\" Lalu ia menunggu, tanpa mengisi keheningan, cukup lama."
      },
      {
        illustrationSeed: "rangga-5",
        textEn: "Rangga said the letters moved. Pak Anton did not say books do not move. He said, \"Right,\" and wrote it down, and made a phone call, and six weeks later Rangga saw a specialist who used a word he had never heard.",
        textId: "Rangga berkata huruf-hurufnya bergerak. Pak Anton tidak berkata bahwa buku tidak bergerak. Ia berkata, \"Baik,\" lalu mencatatnya, lalu menelepon, dan enam minggu kemudian Rangga bertemu spesialis yang memakai sebuah kata yang belum pernah ia dengar."
      },
      {
        illustrationSeed: "rangga-6",
        textEn: "It has a name. Millions of people have it. It has nothing to do with being lazy or stupid, and a great deal to do with how a particular brain handles the shapes of letters, and there are things that help.",
        textId: "Ada namanya. Jutaan orang mengalaminya. Itu sama sekali tidak berhubungan dengan malas atau bodoh, dan sangat berhubungan dengan cara suatu otak menangani bentuk huruf, dan ada hal-hal yang membantu."
      },
      {
        illustrationSeed: "rangga-7",
        textEn: "Some of them were absurdly simple. A different typeface. Cream paper instead of white. A ruler under the line. A coloured overlay. Reading aloud with somebody. None of it was a cure and all of it was a help.",
        textId: "Sebagian sangat sederhana sampai terasa konyol. Jenis huruf yang berbeda. Kertas krem alih-alih putih. Penggaris di bawah baris. Lembar berwarna transparan. Membaca lantang bersama seseorang. Tidak ada yang menyembuhkan, tetapi semuanya membantu."
      },
      {
        illustrationSeed: "rangga-8",
        textEn: "It still takes Rangga longer than it takes his sister. It will always take longer. But he read a whole book in December, on his own, and phoned Pak Anton from the kitchen to tell him, which Pak Anton has never mentioned to anybody without smiling.",
        textId: "Rangga masih butuh waktu lebih lama daripada adiknya. Akan selalu lebih lama. Tetapi ia membaca satu buku utuh pada bulan Desember, sendirian, dan menelepon Pak Anton dari dapur untuk memberitahunya, dan Pak Anton tidak pernah menceritakan itu tanpa tersenyum."
      },
      {
        illustrationSeed: "rangga-9",
        textEn: "The thing Rangga says now, when he is asked, is this: he had been telling people for three years. The words were right. Nobody had asked the question that would let them be understood.",
        textId: "Yang Rangga katakan sekarang, ketika ditanya, adalah ini: ia sudah memberi tahu orang-orang selama tiga tahun. Kata-katanya benar. Tidak ada yang mengajukan pertanyaan yang memungkinkan kata-kata itu dipahami."
      }
    ],
    quiz: [
      {
        questionEn: "What did Rangga actually see on the page?",
        questionId: "Apa yang sebenarnya Rangga lihat di halaman?",
        optionsEn: ["Nothing", "Letters that would not hold still", "Pictures", "Blank paper"],
        optionsId: ["Tidak ada apa-apa", "Huruf-huruf yang tidak mau diam", "Gambar", "Kertas kosong"],
        correctIndex: 1
      },
      {
        questionEn: "What did Pak Anton do differently?",
        questionId: "Apa yang Pak Anton lakukan secara berbeda?",
        optionsEn: ["Gave him easier books", "Asked exactly what he saw and waited", "Told him to try harder", "Moved his seat"],
        optionsId: ["Memberinya buku lebih mudah", "Bertanya persis apa yang ia lihat lalu menunggu", "Menyuruhnya berusaha lebih keras", "Memindahkan tempat duduknya"],
        correctIndex: 1
      },
      {
        questionEn: "What helped Rangga?",
        questionId: "Apa yang membantu Rangga?",
        optionsEn: ["A cure", "Small changes like typeface, cream paper and a ruler", "Reading less", "Nothing"],
        optionsId: ["Obat penyembuh", "Perubahan kecil seperti jenis huruf, kertas krem, dan penggaris", "Membaca lebih sedikit", "Tidak ada"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-day-i-was-not-chosen",
    titleEn: "The Day I Was Not Chosen",
    titleId: "Hari Ketika Aku Tidak Terpilih",
    descriptionEn: "Ayu practised for six weeks and did not get the part. This is about the fortnight afterwards, which nobody usually writes about.",
    descriptionId: "Ayu berlatih selama enam minggu dan tidak mendapat perannya. Ini tentang dua minggu sesudahnya, yang biasanya tidak ditulis siapa pun.",
    categorySlug: "emotions",
    authorSlug: "axto-creative-team",
    coverEmoji: "🎭",
    coverPalette: "twilight",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "notchosen-1",
        textEn: "I practised for six weeks. I am telling you that first because it matters. Not two days. Six weeks, in my room, with the door shut, including the part where the bird dies.",
        textId: "Aku berlatih selama enam minggu. Aku menyebutkan itu lebih dulu karena itu penting. Bukan dua hari. Enam minggu, di kamarku, dengan pintu tertutup, termasuk bagian ketika burungnya mati."
      },
      {
        illustrationSeed: "notchosen-2",
        textEn: "The list went up on a Thursday. My name was on it, under CHORUS, which is where they put everybody who is not somebody. Dini got the part. Dini had practised for about a week and a half.",
        textId: "Daftarnya dipasang hari Kamis. Namaku ada di sana, di bawah PADUAN SUARA, tempat mereka menaruh semua orang yang bukan siapa-siapa. Dini yang mendapat perannya. Dini berlatih sekitar satu setengah minggu."
      },
      {
        illustrationSeed: "notchosen-3",
        textEn: "Everybody was very kind, which was the worst part. My mother said there would be other plays. My teacher said I had done really well. Somebody said everything happens for a reason, and I had to leave the room.",
        textId: "Semua orang sangat baik, dan itulah bagian terburuknya. Ibuku berkata akan ada pementasan lain. Guruku berkata aku sudah tampil sangat bagus. Seseorang berkata segala sesuatu terjadi karena ada alasannya, dan aku harus keluar ruangan."
      },
      {
        illustrationSeed: "notchosen-4",
        textEn: "For four days I was fine in a way that was not fine. I said I did not care. I said the play was stupid anyway. I was extremely pleasant to Dini, which she noticed, and which was not kind of me at all.",
        textId: "Selama empat hari aku baik-baik saja dengan cara yang tidak baik-baik saja. Aku berkata aku tidak peduli. Aku berkata pementasan itu memang konyol. Aku sangat manis kepada Dini, yang ia sadari, dan itu sama sekali bukan kebaikan dariku."
      },
      {
        illustrationSeed: "notchosen-5",
        textEn: "On the fifth day my grandmother asked how it was going, and I said fine, and she said, \"Yes, but how is it actually going,\" and I cried for about twenty minutes, which I had needed to do since Thursday.",
        textId: "Pada hari kelima nenekku bertanya bagaimana kabarnya, dan aku menjawab baik, dan ia berkata, \"Ya, tapi sebenarnya bagaimana,\" lalu aku menangis sekitar dua puluh menit, yang sebenarnya sudah kubutuhkan sejak Kamis."
      },
      {
        illustrationSeed: "notchosen-6",
        textEn: "She did not tell me it would be all right. She said, \"That is a real disappointment and you are allowed to have it for a while.\" A while turned out to be about nine days, which I would not have believed at the time.",
        textId: "Ia tidak berkata semuanya akan baik-baik saja. Ia berkata, \"Itu kekecewaan yang nyata dan kau boleh memilikinya beberapa saat.\" Beberapa saat itu ternyata sekitar sembilan hari, yang tidak akan kupercaya waktu itu."
      },
      {
        illustrationSeed: "notchosen-7",
        textEn: "On day ten I went back to rehearsal, and I was in the chorus, and it was boring, and then it was not boring, because being in a chorus is quite good fun once you stop thinking about the part you did not get.",
        textId: "Pada hari kesepuluh aku kembali ke latihan, dan aku di paduan suara, dan membosankan, lalu tidak lagi membosankan, karena berada di paduan suara cukup menyenangkan begitu kau berhenti memikirkan peran yang tidak kau dapat."
      },
      {
        illustrationSeed: "notchosen-8",
        textEn: "Dini was good. I want that written down because for two weeks I very much did not want it to be true. She was good, and I could tell she was good, and being able to tell was the thing that finally let it go.",
        textId: "Dini bagus. Aku ingin itu tercatat karena selama dua minggu aku sangat tidak ingin itu benar. Ia bagus, dan aku bisa menilainya bagus, dan kemampuan menilai itulah yang akhirnya melepaskan semuanya."
      },
      {
        illustrationSeed: "notchosen-9",
        textEn: "I got a part the following year. That is not the point of the story. The point is the nine days, and that they ended, and that nobody had told me they would end on their own if I stopped pretending they had not started.",
        textId: "Aku mendapat peran tahun berikutnya. Itu bukan inti ceritanya. Intinya adalah sembilan hari itu, dan bahwa hari-hari itu berakhir, dan bahwa tidak ada yang memberitahuku bahwa hari-hari itu akan berakhir sendiri jika aku berhenti berpura-pura hari-hari itu tidak pernah dimulai."
      }
    ],
    quiz: [
      {
        questionEn: "How long had Ayu practised?",
        questionId: "Berapa lama Ayu berlatih?",
        optionsEn: ["Two days", "Six weeks", "One year", "She had not"],
        optionsId: ["Dua hari", "Enam minggu", "Satu tahun", "Ia tidak berlatih"],
        correctIndex: 1
      },
      {
        questionEn: "What did her grandmother say?",
        questionId: "Apa kata neneknya?",
        optionsEn: ["It will be all right", "That it is a real disappointment and she may have it for a while", "To try harder", "To forget it"],
        optionsId: ["Semua akan baik-baik saja", "Bahwa itu kekecewaan nyata dan ia boleh memilikinya sejenak", "Berusaha lebih keras", "Melupakannya"],
        correctIndex: 1
      },
      {
        questionEn: "What finally let Ayu move on?",
        questionId: "Apa yang akhirnya membuat Ayu bisa melanjutkan hidup?",
        optionsEn: ["Getting the part", "Being able to admit Dini was good", "Leaving the play", "Ignoring it"],
        optionsId: ["Mendapatkan peran itu", "Bisa mengakui bahwa Dini bagus", "Keluar dari pementasan", "Mengabaikannya"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-goat-in-the-headmasters-office",
    titleEn: "The Goat in the Headmaster's Office",
    titleId: "Kambing di Ruang Kepala Sekolah",
    descriptionEn: "Somebody put a goat in the headmaster's office. This is the account of the investigation, which took four days and solved nothing.",
    descriptionId: "Seseorang menaruh seekor kambing di ruang kepala sekolah. Ini catatan penyelidikannya, yang memakan empat hari dan tidak memecahkan apa pun.",
    categorySlug: "humor",
    authorSlug: "axto-creative-team",
    coverEmoji: "🐐",
    coverPalette: "citrus",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "goat-1",
        textEn: "On a Monday morning in October, Pak Hendra opened the door of his office and found a goat standing on his desk. The goat looked at him. He looked at the goat. Neither of them said anything.",
        textId: "Pada suatu Senin pagi di bulan Oktober, Pak Hendra membuka pintu ruangannya dan menemukan seekor kambing berdiri di atas mejanya. Kambing itu menatapnya. Ia menatap kambing itu. Tidak ada yang berkata apa-apa."
      },
      {
        illustrationSeed: "goat-2",
        textEn: "The goat had eaten the top third of a document about fire safety, a bunch of plastic flowers, and — this was the detail that upset him most — one corner of a photograph of his own wedding.",
        textId: "Kambing itu telah memakan sepertiga bagian atas dokumen tentang keselamatan kebakaran, seikat bunga plastik, dan — inilah rincian yang paling membuatnya kesal — satu sudut foto pernikahannya sendiri."
      },
      {
        illustrationSeed: "goat-3",
        textEn: "An investigation was announced at assembly. Pak Hendra said the school would remain in the hall until somebody came forward. Six hundred children sat in complete silence for eleven minutes, and then somebody laughed, and then it was over.",
        textId: "Penyelidikan diumumkan saat apel pagi. Pak Hendra berkata seluruh sekolah akan tetap di aula sampai ada yang mengaku. Enam ratus anak duduk dalam keheningan total selama sebelas menit, lalu ada yang tertawa, dan selesailah sudah."
      },
      {
        illustrationSeed: "goat-4",
        textEn: "Evidence was collected. The goat belonged to a farm two kilometres away. The farmer said she had been missing since Sunday afternoon and that this was the fourth time and he was not surprised.",
        textId: "Bukti dikumpulkan. Kambing itu milik sebuah peternakan dua kilometer jauhnya. Peternaknya berkata kambing itu hilang sejak Minggu sore dan bahwa ini kali keempat dan ia tidak heran."
      },
      {
        illustrationSeed: "goat-5",
        textEn: "The office had been locked. The window was too small. The only key was on Pak Hendra's own keyring, which had not left his pocket, and this fact was raised at the staff meeting and then quickly dropped.",
        textId: "Ruangan itu terkunci. Jendelanya terlalu kecil. Satu-satunya kunci ada di gantungan kunci Pak Hendra sendiri, yang tidak pernah keluar dari sakunya, dan fakta ini disinggung di rapat guru lalu cepat-cepat ditinggalkan."
      },
      {
        illustrationSeed: "goat-6",
        textEn: "Four days of investigation produced: two confessions from children who obviously had not done it, one theory involving the caretaker's brother, and a drawing of the goat that was pinned up in year three and became quite famous.",
        textId: "Empat hari penyelidikan menghasilkan: dua pengakuan dari anak-anak yang jelas bukan pelakunya, satu teori yang melibatkan adik penjaga sekolah, dan sebuah gambar kambing yang dipajang di kelas tiga dan menjadi cukup terkenal."
      },
      {
        illustrationSeed: "goat-7",
        textEn: "On the fifth day Pak Hendra stopped the investigation. He announced this at assembly too. He said, \"I have concluded that this school contains at least one person cleverer than me, and I would rather not find out who.\"",
        textId: "Pada hari kelima Pak Hendra menghentikan penyelidikan. Ia mengumumkannya juga saat apel. Ia berkata, \"Saya menyimpulkan bahwa sekolah ini punya setidaknya satu orang yang lebih pandai daripada saya, dan saya lebih memilih tidak tahu siapa.\""
      },
      {
        illustrationSeed: "goat-8",
        textEn: "Six hundred children applauded for a very long time. It is generally agreed to be the finest thing any headmaster of that school has ever said, and it is quoted at reunions by people who were not even there.",
        textId: "Enam ratus anak bertepuk tangan sangat lama. Umumnya disepakati itu ucapan terbaik yang pernah dilontarkan kepala sekolah mana pun di sekolah itu, dan dikutip di reuni-reuni oleh orang-orang yang bahkan tidak hadir saat itu."
      },
      {
        illustrationSeed: "goat-9",
        textEn: "Nobody ever found out. Pak Hendra retired eleven years later. In his last assembly he said he had one regret, and everybody knew what it was before he said it, and six hundred children shouted the word GOAT.",
        textId: "Tidak ada yang pernah tahu. Pak Hendra pensiun sebelas tahun kemudian. Di apel terakhirnya ia berkata ia punya satu penyesalan, dan semua orang sudah tahu apa itu sebelum ia mengucapkannya, dan enam ratus anak berteriak KAMBING."
      }
    ],
    quiz: [
      {
        questionEn: "What had the goat eaten?",
        questionId: "Apa yang telah dimakan kambing itu?",
        optionsEn: ["The chairs", "A document, plastic flowers and a photo corner", "The curtains", "Nothing"],
        optionsId: ["Kursi-kursinya", "Sebuah dokumen, bunga plastik, dan sudut sebuah foto", "Gordennya", "Tidak ada"],
        correctIndex: 1
      },
      {
        questionEn: "Why was the mystery so hard to solve?",
        questionId: "Mengapa misteri itu sulit dipecahkan?",
        optionsEn: ["Nobody looked", "The office was locked and the only key was in his pocket", "The goat ran away", "There were no witnesses at all"],
        optionsId: ["Tidak ada yang mencari", "Ruangan terkunci dan satu-satunya kunci ada di sakunya", "Kambingnya kabur", "Sama sekali tidak ada saksi"],
        correctIndex: 1
      },
      {
        questionEn: "How did Pak Hendra end the investigation?",
        questionId: "Bagaimana Pak Hendra mengakhiri penyelidikan?",
        optionsEn: ["He punished everyone", "He admitted somebody was cleverer than him and stopped", "He found the culprit", "He resigned"],
        optionsId: ["Ia menghukum semua orang", "Ia mengakui ada yang lebih pandai darinya lalu berhenti", "Ia menemukan pelakunya", "Ia mengundurkan diri"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-ferry-that-crossed-in-fog",
    titleEn: "The Ferry That Crossed in Fog",
    titleId: "Feri yang Menyeberang dalam Kabut",
    descriptionEn: "Captain Marlina has crossed the strait four thousand times. On the morning the fog comes down, a boy learns how she does it.",
    descriptionId: "Kapten Marlina telah menyeberangi selat itu empat ribu kali. Pada pagi ketika kabut turun, seorang anak belajar bagaimana ia melakukannya.",
    categorySlug: "vehicles",
    authorSlug: "axto-creative-team",
    coverEmoji: "⛴️",
    coverPalette: "ocean",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "ferry-1",
        textEn: "The ferry crossed the strait six times a day, and Captain Marlina had been steering it for nineteen years. Her son Adi was allowed on the bridge on Saturdays if he stood in the corner and did not touch anything.",
        textId: "Feri itu menyeberangi selat enam kali sehari, dan Kapten Marlina telah mengemudikannya selama sembilan belas tahun. Anaknya, Adi, boleh naik ke anjungan pada hari Sabtu asalkan ia berdiri di sudut dan tidak menyentuh apa pun."
      },
      {
        illustrationSeed: "ferry-2",
        textEn: "On the Saturday in question, the fog came down between the harbour and the first buoy. It came down the way fog does — not gradually, but all at once, so that the far shore simply stopped existing.",
        textId: "Pada Sabtu yang dimaksud, kabut turun di antara pelabuhan dan pelampung pertama. Ia turun seperti kabut biasanya — bukan berangsur, melainkan sekaligus, sehingga pantai seberang begitu saja berhenti ada."
      },
      {
        illustrationSeed: "ferry-3",
        textEn: "Adi expected his mother to stop. She did not. She reduced speed, put on the lights, sounded the horn twice, and kept going at the same heading she had been on before the fog arrived.",
        textId: "Adi mengira ibunya akan berhenti. Tidak. Ia mengurangi kecepatan, menyalakan lampu, membunyikan klakson dua kali, dan terus melaju pada haluan yang sama seperti sebelum kabut datang."
      },
      {
        illustrationSeed: "ferry-4",
        textEn: "\"How do you know where it is?\" Adi asked. His mother pointed at three things without taking her eyes off the grey. \"Compass. Clock. And that,\" she said, tapping a screen with a slowly turning green line on it.",
        textId: "\"Bagaimana Ibu tahu letaknya?\" tanya Adi. Ibunya menunjuk tiga benda tanpa mengalihkan pandangan dari kelabu di depan. \"Kompas. Jam. Dan itu,\" katanya sambil mengetuk layar dengan garis hijau yang berputar perlahan."
      },
      {
        illustrationSeed: "ferry-5",
        textEn: "\"The compass says which way. The clock says how far, because I know exactly how fast we go. And the radar says what is out there that I cannot see. Three things that do not need eyes.\"",
        textId: "\"Kompas menunjukkan ke arah mana. Jam menunjukkan seberapa jauh, karena saya tahu persis berapa kecepatan kami. Dan radar menunjukkan apa yang ada di luar sana yang tidak bisa saya lihat. Tiga hal yang tidak butuh mata.\""
      },
      {
        illustrationSeed: "ferry-6",
        textEn: "At nine minutes past, she said, \"Bell buoy in about forty seconds, off the port bow.\" Adi counted. At thirty-six seconds a bell rang somewhere out in the white, very close, exactly where she had said.",
        textId: "Pada menit kesembilan, ia berkata, \"Pelampung lonceng sekitar empat puluh detik lagi, di sisi kiri haluan.\" Adi menghitung. Pada detik ketiga puluh enam sebuah lonceng berbunyi di suatu tempat dalam putih itu, sangat dekat, persis di tempat yang ia sebutkan."
      },
      {
        illustrationSeed: "ferry-7",
        textEn: "\"That is not magic,\" she said, seeing his face. \"That is nineteen years of doing the same crossing and writing down the times. I have made a map of this water in my head. The fog does not move the water.\"",
        textId: "\"Itu bukan sihir,\" katanya, melihat wajah Adi. \"Itu sembilan belas tahun menyeberang di rute yang sama sambil mencatat waktunya. Saya sudah membuat peta perairan ini di kepala saya. Kabut tidak memindahkan airnya.\""
      },
      {
        illustrationSeed: "ferry-8",
        textEn: "They docked eleven minutes late, which is nothing. The passengers on the deck below had spent the whole crossing looking at nothing at all and had no idea anything had been required of anybody.",
        textId: "Mereka merapat terlambat sebelas menit, yang berarti tidak apa-apa. Penumpang di dek bawah menghabiskan seluruh penyeberangan memandangi ketiadaan dan sama sekali tidak tahu bahwa ada yang dituntut dari siapa pun."
      },
      {
        illustrationSeed: "ferry-9",
        textEn: "Adi is a deck officer now on a bigger vessel. He keeps a notebook of crossing times, in pencil, the way his mother taught him, even though the ship he works on has equipment that costs more than a house.",
        textId: "Adi kini perwira dek di kapal yang lebih besar. Ia menyimpan buku catatan waktu penyeberangan, dengan pensil, seperti yang diajarkan ibunya, meskipun kapal tempatnya bekerja punya peralatan yang harganya melebihi sebuah rumah."
      }
    ],
    quiz: [
      {
        questionEn: "What did Captain Marlina do when the fog came?",
        questionId: "Apa yang Kapten Marlina lakukan ketika kabut datang?",
        optionsEn: ["Turned back", "Slowed down, sounded the horn and kept her heading", "Stopped completely", "Went faster"],
        optionsId: ["Berbalik arah", "Memperlambat, membunyikan klakson, dan mempertahankan haluan", "Berhenti total", "Menambah kecepatan"],
        correctIndex: 1
      },
      {
        questionEn: "What three things did she rely on?",
        questionId: "Tiga hal apa yang ia andalkan?",
        optionsEn: ["Eyes, ears and luck", "Compass, clock and radar", "Maps, stars and wind", "The passengers"],
        optionsId: ["Mata, telinga, dan keberuntungan", "Kompas, jam, dan radar", "Peta, bintang, dan angin", "Para penumpang"],
        correctIndex: 1
      },
      {
        questionEn: "How did she know where the bell buoy was?",
        questionId: "Bagaimana ia tahu letak pelampung lonceng?",
        optionsEn: ["She guessed", "Nineteen years of recording crossing times", "She could see it", "Somebody radioed"],
        optionsId: ["Ia menebak", "Sembilan belas tahun mencatat waktu penyeberangan", "Ia bisa melihatnya", "Ada yang mengabari lewat radio"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-nurse-who-remembered-names",
    titleEn: "The Nurse Who Remembered Names",
    titleId: "Perawat yang Mengingat Nama",
    descriptionEn: "On a ward where everybody is busy, one nurse does one small thing differently, and a frightened boy notices.",
    descriptionId: "Di bangsal tempat semua orang sibuk, seorang perawat melakukan satu hal kecil secara berbeda, dan seorang anak yang ketakutan menyadarinya.",
    categorySlug: "community-helpers",
    authorSlug: "axto-creative-team",
    coverEmoji: "🩺",
    coverPalette: "ocean",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "nurse-1",
        textEn: "Beni was in hospital for nine days with something that turned out to be fine but did not feel fine at the time. He was seven. The ward was bright and loud and full of people moving quickly.",
        textId: "Beni dirawat di rumah sakit selama sembilan hari karena sesuatu yang ternyata tidak berbahaya tetapi saat itu sama sekali tidak terasa begitu. Ia berumur tujuh tahun. Bangsalnya terang dan berisik dan penuh orang yang bergerak cepat."
      },
      {
        illustrationSeed: "nurse-2",
        textEn: "Everybody was kind. Everybody was in a hurry. Doctors came and said things to his mother over his head, and he understood about a third of it, which is the worst possible amount to understand.",
        textId: "Semua orang baik. Semua orang terburu-buru. Para dokter datang dan mengatakan sesuatu kepada ibunya di atas kepalanya, dan ia memahami sekitar sepertiganya, yang merupakan porsi pemahaman paling buruk yang mungkin."
      },
      {
        illustrationSeed: "nurse-3",
        textEn: "There was a nurse called Bu Winda who did one thing differently. Every time she came to the bed, she said his name first. Not \"how are we today\" — she said, \"Beni. It is Winda. I am going to check your arm.\"",
        textId: "Ada seorang perawat bernama Bu Winda yang melakukan satu hal secara berbeda. Setiap kali datang ke tempat tidurnya, ia menyebut namanya lebih dulu. Bukan \"bagaimana kabar kita hari ini\" — ia berkata, \"Beni. Ini Winda. Saya mau periksa lenganmu.\""
      },
      {
        illustrationSeed: "nurse-4",
        textEn: "And then she said what she was going to do before she did it. Every time. \"This will be cold. This will be a small sharp thing for two seconds. This will not hurt at all and I will tell you if that changes.\"",
        textId: "Lalu ia mengatakan apa yang akan ia lakukan sebelum melakukannya. Setiap kali. \"Ini akan terasa dingin. Ini akan terasa tajam sebentar, dua detik. Ini sama sekali tidak sakit dan saya akan bilang kalau itu berubah.\""
      },
      {
        illustrationSeed: "nurse-5",
        textEn: "It sounds like almost nothing. It was not almost nothing. It was the difference between being a thing on a bed that people did things to, and being a person on a bed who knew what was about to happen.",
        textId: "Kedengarannya hampir tidak berarti. Itu bukan hampir tidak berarti. Itu adalah perbedaan antara menjadi benda di atas ranjang yang dikerjai orang, dan menjadi seorang manusia di atas ranjang yang tahu apa yang akan terjadi."
      },
      {
        illustrationSeed: "nurse-6",
        textEn: "On the fourth night Beni was frightened and could not say why, and Bu Winda did not ask why. She sat on the chair for four minutes and said nothing at all, and then said, \"Right,\" and went back to work.",
        textId: "Pada malam keempat Beni ketakutan dan tidak bisa menjelaskan sebabnya, dan Bu Winda tidak bertanya mengapa. Ia duduk di kursi selama empat menit tanpa berkata apa-apa, lalu berkata, \"Baik,\" dan kembali bekerja."
      },
      {
        illustrationSeed: "nurse-7",
        textEn: "Beni's mother said afterwards that she had watched Bu Winda do this with eleven other beds, and that she never once looked as if she was in a hurry, and that she must have been, because everybody was.",
        textId: "Ibu Beni kemudian berkata bahwa ia mengamati Bu Winda melakukan hal yang sama di sebelas ranjang lain, dan bahwa ia tidak pernah sekali pun tampak terburu-buru, padahal pasti ia terburu-buru, karena semua orang begitu."
      },
      {
        illustrationSeed: "nurse-8",
        textEn: "When Beni went home he made a card. It said THANK YOU BU WINDA and inside, in enormous letters, it said YOU ALWAYS SAID MY NAME FIRST, which is not a thing anybody had ever thanked her for in seventeen years.",
        textId: "Ketika Beni pulang ia membuat kartu. Tulisannya TERIMA KASIH BU WINDA dan di dalamnya, dengan huruf besar sekali, tertulis IBU SELALU MENYEBUT NAMA SAYA LEBIH DULU, yang tidak pernah menjadi alasan siapa pun berterima kasih kepadanya selama tujuh belas tahun."
      },
      {
        illustrationSeed: "nurse-9",
        textEn: "It is on the wall of the staff room. It has been there for six years. New nurses ask about it, and somebody explains, and then most of them start saying the name first, which is how a small thing gets bigger.",
        textId: "Kartu itu terpasang di dinding ruang staf. Sudah enam tahun di sana. Perawat-perawat baru menanyakannya, ada yang menjelaskan, lalu kebanyakan dari mereka mulai menyebut nama lebih dulu, dan begitulah caranya sebuah hal kecil menjadi lebih besar."
      }
    ],
    quiz: [
      {
        questionEn: "What did Bu Winda always do first?",
        questionId: "Apa yang selalu Bu Winda lakukan lebih dulu?",
        optionsEn: ["Check the chart", "Say his name", "Call the doctor", "Open the window"],
        optionsId: ["Memeriksa catatan medis", "Menyebut namanya", "Memanggil dokter", "Membuka jendela"],
        correctIndex: 1
      },
      {
        questionEn: "What else did she do differently?",
        questionId: "Apa lagi yang ia lakukan secara berbeda?",
        optionsEn: ["Worked faster", "Told him what would happen before it did", "Brought toys", "Stayed all night"],
        optionsId: ["Bekerja lebih cepat", "Memberitahunya apa yang akan terjadi sebelum terjadi", "Membawa mainan", "Menemani semalaman"],
        correctIndex: 1
      },
      {
        questionEn: "What happened to Beni's card?",
        questionId: "Apa yang terjadi pada kartu Beni?",
        optionsEn: ["It was lost", "It has been on the staff room wall for six years", "It was thrown away", "It was returned"],
        optionsId: ["Hilang", "Terpasang di dinding ruang staf selama enam tahun", "Dibuang", "Dikembalikan"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-race-i-did-not-finish",
    titleEn: "The Race I Did Not Finish",
    titleId: "Lomba yang Tidak Aku Selesaikan",
    descriptionEn: "Halfway through the cross-country, Tama's knee gives out. What he does in the next four minutes is the part people still talk about.",
    descriptionId: "Di tengah lomba lintas alam, lutut Tama tidak kuat lagi. Yang ia lakukan dalam empat menit berikutnya adalah bagian yang masih dibicarakan orang.",
    categorySlug: "health-body",
    authorSlug: "axto-creative-team",
    coverEmoji: "🦵",
    coverPalette: "meadow",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "knee-1",
        textEn: "Tama had trained for the cross-country since August. Four mornings a week, up the hill behind the estate, in the dark half the time. He was going to come in the first three. Everybody said so, including him.",
        textId: "Tama berlatih untuk lomba lintas alam sejak Agustus. Empat pagi seminggu, mendaki bukit di belakang perumahan, separuh waktunya dalam gelap. Ia akan finis tiga besar. Semua orang mengatakannya, termasuk dirinya."
      },
      {
        illustrationSeed: "knee-2",
        textEn: "At the two-kilometre mark his right knee did something it had been threatening to do for a fortnight. He had felt it twice in training and had told nobody, because telling somebody meant not running.",
        textId: "Di kilometer kedua lutut kanannya melakukan hal yang sudah dua minggu ia rasakan akan terjadi. Ia merasakannya dua kali saat latihan dan tidak memberi tahu siapa pun, karena memberi tahu berarti tidak boleh berlari."
      },
      {
        illustrationSeed: "knee-3",
        textEn: "He went down in the mud. Runners went past him on both sides. He got up, ran nine more steps, and went down again, and the second time it was very clear that this was not something he could run through.",
        textId: "Ia jatuh di lumpur. Para pelari melewatinya dari kedua sisi. Ia bangkit, berlari sembilan langkah lagi, lalu jatuh lagi, dan pada kali kedua sudah sangat jelas bahwa ini bukan sesuatu yang bisa ia paksakan."
      },
      {
        illustrationSeed: "knee-4",
        textEn: "Here is what happened in the next four minutes. A girl from another school, who was in fourth place and running a personal best, stopped beside him. She was called Reni. He had never met her.",
        textId: "Inilah yang terjadi dalam empat menit berikutnya. Seorang gadis dari sekolah lain, yang berada di posisi keempat dan sedang mencetak catatan terbaiknya, berhenti di sampingnya. Namanya Reni. Tama belum pernah bertemu dengannya."
      },
      {
        illustrationSeed: "knee-5",
        textEn: "She did not help him up, which was the right thing, because you do not move somebody whose knee has gone. She knelt in the mud, said do not get up, and shouted for a marshal until one came.",
        textId: "Ia tidak membantunya berdiri, dan itu tindakan yang benar, karena kau tidak boleh memindahkan orang yang lututnya cedera. Ia berlutut di lumpur, berkata jangan bangun, dan berteriak memanggil petugas sampai ada yang datang."
      },
      {
        illustrationSeed: "knee-6",
        textEn: "She lost about four minutes and finished nineteenth. Her own coach was furious, then stopped being furious about an hour later, which is roughly the correct sequence for a coach.",
        textId: "Ia kehilangan sekitar empat menit dan finis di urutan sembilan belas. Pelatihnya sendiri marah besar, lalu berhenti marah sekitar satu jam kemudian, yang kira-kira merupakan urutan yang tepat bagi seorang pelatih."
      },
      {
        illustrationSeed: "knee-7",
        textEn: "Tama's knee needed eleven weeks and a physiotherapist called Pak Doni who explained, in detail, that the injury had been building since August and that the two warnings he had ignored were the whole story.",
        textId: "Lutut Tama butuh sebelas minggu dan seorang fisioterapis bernama Pak Doni yang menjelaskan, dengan rinci, bahwa cedera itu sudah menumpuk sejak Agustus dan bahwa dua peringatan yang ia abaikan adalah inti seluruh ceritanya."
      },
      {
        illustrationSeed: "knee-8",
        textEn: "\"Pain is information,\" Pak Doni said. \"It is not weakness and it is not the enemy. It is your body sending you a message, and you read two of them and put them in your pocket.\"",
        textId: "\"Nyeri itu informasi,\" kata Pak Doni. \"Ia bukan kelemahan dan bukan musuh. Ia pesan dari tubuhmu, dan kau membaca dua di antaranya lalu memasukkannya ke saku.\""
      },
      {
        illustrationSeed: "knee-9",
        textEn: "Tama runs again now. He also stops when something is wrong, which costs him races and has kept him running for four years. And every year, at the cross-country, he looks for a girl from another school to say hello to.",
        textId: "Tama kini berlari lagi. Ia juga berhenti ketika ada yang tidak beres, yang membuatnya kehilangan beberapa lomba dan membuatnya tetap bisa berlari selama empat tahun. Dan setiap tahun, di lomba lintas alam, ia mencari seorang gadis dari sekolah lain untuk disapa."
      }
    ],
    quiz: [
      {
        questionEn: "Why did Tama's knee give way?",
        questionId: "Mengapa lutut Tama cedera?",
        optionsEn: ["He tripped", "An injury had been building and he ignored two warnings", "The mud", "Somebody pushed him"],
        optionsId: ["Ia tersandung", "Cederanya sudah menumpuk dan ia mengabaikan dua peringatan", "Karena lumpur", "Ada yang mendorongnya"],
        correctIndex: 1
      },
      {
        questionEn: "What did Reni do?",
        questionId: "Apa yang Reni lakukan?",
        optionsEn: ["Ran past", "Stopped, kept him still and called a marshal", "Carried him", "Finished first"],
        optionsId: ["Berlari melewatinya", "Berhenti, menahannya agar tidak bergerak, dan memanggil petugas", "Menggendongnya", "Finis pertama"],
        correctIndex: 1
      },
      {
        questionEn: "What did Pak Doni say pain is?",
        questionId: "Menurut Pak Doni, nyeri itu apa?",
        optionsEn: ["Weakness", "Information from your body", "Something to ignore", "Always serious"],
        optionsId: ["Kelemahan", "Informasi dari tubuhmu", "Sesuatu yang harus diabaikan", "Selalu berbahaya"],
        correctIndex: 1
      }
    ]
  }
];
