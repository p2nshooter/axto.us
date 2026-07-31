/**
 * Story batch B — hand-written bilingual (EN/ID) read-aloud stories, appended
 * to the library. Batches only ever add; nothing existing is edited or merged.
 *
 * This batch fills the next thinnest categories: space, dinosaur, bedtime,
 * learning, superheroes, humor, fantasy, mystery, pirates and princess-knights.
 */
import type { Story } from "./stories";

export const STORIES_BATCH_B: Story[] = [
  {
    slug: "the-astronaut-who-was-afraid-of-the-dark",
    titleEn: "The Astronaut Who Was Afraid of the Dark",
    titleId: "Astronaut yang Takut Gelap",
    descriptionEn: "Commander Zahra has flown further than anyone alive. She has also slept with a light on since she was six.",
    descriptionId: "Komandan Zahra telah terbang lebih jauh dari siapa pun yang masih hidup. Ia juga selalu tidur dengan lampu menyala sejak usia enam tahun.",
    categorySlug: "space",
    authorSlug: "axto-creative-team",
    coverEmoji: "🚀",
    coverPalette: "twilight",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "dark-1",
        textEn: "Commander Zahra had flown three missions. She had repaired a satellite with her own hands and once spent eleven hours outside the station with nothing between her and everything but a suit.",
        textId: "Komandan Zahra telah menjalani tiga misi. Ia pernah memperbaiki satelit dengan tangannya sendiri dan pernah menghabiskan sebelas jam di luar stasiun tanpa apa pun di antara dirinya dan kehampaan kecuali sebuah baju antariksa."
      },
      {
        illustrationSeed: "dark-2",
        textEn: "She had also, since she was six years old, been afraid of the dark. Not a little afraid. Properly afraid, the kind that makes your ears listen too hard.",
        textId: "Ia juga, sejak berusia enam tahun, takut gelap. Bukan sedikit takut. Benar-benar takut, jenis rasa takut yang membuat telinga mendengar terlalu tajam."
      },
      {
        illustrationSeed: "dark-3",
        textEn: "Nobody knew. On Earth she left a small lamp on. On the station there was always something glowing — a screen, a switch, the blue line of the planet turning below the window.",
        textId: "Tidak ada yang tahu. Di Bumi ia menyalakan lampu kecil. Di stasiun selalu ada sesuatu yang bercahaya — layar, sakelar, atau garis biru planet yang berputar di bawah jendela."
      },
      {
        illustrationSeed: "dark-4",
        textEn: "Then came the fault. A quiet click, and the whole module went black — no screens, no switches, and the window facing away from Earth into nothing at all.",
        textId: "Lalu terjadilah kerusakan. Bunyi klik pelan, dan seluruh modul menjadi gelap — tanpa layar, tanpa sakelar, dan jendela menghadap menjauhi Bumi, ke arah kehampaan."
      },
      {
        illustrationSeed: "dark-5",
        textEn: "Zahra's hands went cold on the rail. She was thirty-eight years old, four hundred kilometres above her own house, and for a moment she was six again in a bedroom with the door shut.",
        textId: "Tangan Zahra mendingin di pegangan. Usianya tiga puluh delapan tahun, empat ratus kilometer di atas rumahnya sendiri, dan sesaat ia kembali menjadi anak enam tahun di kamar dengan pintu tertutup."
      },
      {
        illustrationSeed: "dark-6",
        textEn: "So she did what her grandmother had taught her long ago. She said out loud, into the dark, exactly what was there. \"A rail. My left hand. The hatch, two metres behind me. Tomo, asleep in the next module.\"",
        textId: "Maka ia melakukan apa yang diajarkan neneknya dahulu. Ia berkata lantang, ke dalam kegelapan, tentang apa saja yang ada di sana. \"Sebuah pegangan. Tangan kiriku. Palka, dua meter di belakangku. Tomo, sedang tidur di modul sebelah.\""
      },
      {
        illustrationSeed: "dark-7",
        textEn: "Naming them did not switch the lights on. But it made the dark into a room again instead of a nowhere, and a room can be crossed. She moved hand over hand toward the panel.",
        textId: "Menyebut nama-nama itu tidak menyalakan lampu. Tetapi itu mengubah kegelapan menjadi sebuah ruangan lagi, bukan ketiadaan, dan ruangan bisa diseberangi. Ia bergerak tangan demi tangan menuju panel."
      },
      {
        illustrationSeed: "dark-8",
        textEn: "It took her nine minutes to find the tripped breaker by touch. When the lights came back, Tomo floated in rubbing his eyes and said, \"Everything all right?\" Zahra said, \"Yes.\" Then she thought about it. \"No. But it is now.\"",
        textId: "Ia butuh sembilan menit untuk menemukan sakelar yang jatuh, hanya dengan sentuhan. Ketika lampu menyala kembali, Tomo melayang masuk sambil mengucek mata dan bertanya, \"Semua baik-baik saja?\" Zahra menjawab, \"Ya.\" Lalu ia berpikir lagi. \"Tidak. Tapi sekarang iya.\""
      },
      {
        illustrationSeed: "dark-9",
        textEn: "She still sleeps with a light on. She has decided that is allowed. Being brave, it turns out, is not the same as not being frightened — it is knowing what to do while you are.",
        textId: "Ia masih tidur dengan lampu menyala. Ia memutuskan itu boleh saja. Ternyata, menjadi berani bukan berarti tidak takut — melainkan tahu apa yang harus dilakukan saat sedang takut."
      }
    ],
    quiz: [
      {
        questionEn: "What was Zahra secretly afraid of?",
        questionId: "Apa yang diam-diam Zahra takuti?",
        optionsEn: ["Heights", "The dark", "Water", "Loud noises"],
        optionsId: ["Ketinggian", "Kegelapan", "Air", "Suara keras"],
        correctIndex: 1
      },
      {
        questionEn: "What did she do when the lights went out?",
        questionId: "Apa yang ia lakukan saat lampu padam?",
        optionsEn: ["Shouted for help", "Named out loud everything that was there", "Went back to sleep", "Closed her eyes"],
        optionsId: ["Berteriak minta tolong", "Menyebut lantang segala sesuatu yang ada di sana", "Kembali tidur", "Memejamkan mata"],
        correctIndex: 1
      },
      {
        questionEn: "What does the story say bravery is?",
        questionId: "Menurut cerita ini, apa itu keberanian?",
        optionsEn: ["Never being frightened", "Knowing what to do while you are frightened", "Being the strongest", "Working alone"],
        optionsId: ["Tidak pernah merasa takut", "Tahu apa yang harus dilakukan saat sedang takut", "Menjadi yang terkuat", "Bekerja sendirian"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-smallest-dinosaur-in-the-valley",
    titleEn: "The Smallest Dinosaur in the Valley",
    titleId: "Dinosaurus Terkecil di Lembah",
    descriptionEn: "Everyone in the valley is enormous except Rui, who is the size of a chicken — and the only one who can hear the river changing.",
    descriptionId: "Semua penghuni lembah bertubuh raksasa kecuali Rui, yang sebesar ayam — dan satu-satunya yang bisa mendengar sungai berubah.",
    categorySlug: "dinosaur",
    authorSlug: "axto-creative-team",
    coverEmoji: "🦕",
    coverPalette: "forest",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "rui-1",
        textEn: "In the green valley between two ridges lived some of the largest creatures that have ever walked. There were long-necks who ate from the tops of trees and heavy-tails who shook the ground.",
        textId: "Di lembah hijau di antara dua punggung bukit hiduplah beberapa makhluk terbesar yang pernah berjalan di bumi. Ada si leher panjang yang makan dari pucuk pohon dan si ekor berat yang mengguncang tanah."
      },
      {
        illustrationSeed: "rui-2",
        textEn: "And there was Rui. Rui was a dinosaur too, but he was the size of a chicken, with feathers on his arms and very quick eyes.",
        textId: "Dan ada Rui. Rui juga seekor dinosaurus, tetapi ukurannya sebesar ayam, dengan bulu di lengannya dan mata yang sangat gesit."
      },
      {
        illustrationSeed: "rui-3",
        textEn: "The big ones were kind to him in the way big things often are: they did not notice him much. When they talked about the valley, they talked over his head, because his head was near their feet.",
        textId: "Para raksasa bersikap baik kepadanya seperti umumnya makhluk besar: mereka tidak terlalu memperhatikannya. Ketika membicarakan lembah, mereka bicara di atas kepalanya, karena kepalanya ada di dekat kaki mereka."
      },
      {
        illustrationSeed: "rui-4",
        textEn: "But being close to the ground meant Rui heard things nobody else did. He heard beetles under bark. He heard rain three valleys away. And one afternoon, he heard the river change its voice.",
        textId: "Namun berada dekat tanah membuat Rui mendengar hal-hal yang tak didengar siapa pun. Ia mendengar kumbang di balik kulit kayu. Ia mendengar hujan dari tiga lembah jauhnya. Dan suatu sore, ia mendengar sungai berubah suaranya."
      },
      {
        illustrationSeed: "rui-5",
        textEn: "It had been a wide, slow, chuckling sound for as long as he had lived. Now it was tighter and higher, the way a voice goes when something is squeezing it.",
        textId: "Selama ia hidup, suaranya selalu lebar, lambat, dan seperti tertawa kecil. Kini suaranya lebih rapat dan lebih tinggi, seperti suara orang yang sedang tertekan."
      },
      {
        illustrationSeed: "rui-6",
        textEn: "Rui ran upstream on his quick feet and found it: a landslide of rock and mud from the ridge, damming the water into a swelling grey pool that was rising toward the low meadow where everyone slept.",
        textId: "Rui berlari ke hulu dengan kakinya yang gesit dan menemukannya: longsoran batu dan lumpur dari punggung bukit, membendung air menjadi kolam kelabu yang membengkak dan naik ke arah padang rendah tempat semua tidur."
      },
      {
        illustrationSeed: "rui-7",
        textEn: "He ran back and shouted. Nobody heard him — his voice was small and they were high up. So Rui did the only thing left: he climbed the tail of the biggest long-neck and shrieked directly into her ear.",
        textId: "Ia berlari kembali dan berteriak. Tidak ada yang mendengarnya — suaranya kecil dan mereka berada jauh di atas. Maka Rui melakukan satu-satunya hal yang tersisa: ia memanjat ekor si leher panjang terbesar dan memekik tepat di telinganya."
      },
      {
        illustrationSeed: "rui-8",
        textEn: "She listened. Then she bellowed, and the whole valley moved. All night the big ones pushed and rolled the fallen rock aside while Rui stood on a stump and told them where to shove.",
        textId: "Ia mendengarkan. Lalu ia mengaum, dan seluruh lembah bergerak. Sepanjang malam para raksasa mendorong dan menggulingkan batu-batu yang jatuh sementara Rui berdiri di atas tunggul dan menunjukkan ke mana harus mendorong."
      },
      {
        illustrationSeed: "rui-9",
        textEn: "By morning the river ran wide and slow and chuckling again. And after that, when the big ones talked about the valley, somebody always thought to look down first and ask Rui what he could hear.",
        textId: "Menjelang pagi sungai kembali mengalir lebar, lambat, dan seperti tertawa kecil. Dan setelah itu, ketika para raksasa membicarakan lembah, selalu ada yang ingat untuk menunduk lebih dulu dan bertanya kepada Rui apa yang ia dengar."
      }
    ],
    quiz: [
      {
        questionEn: "What made Rui different from the others?",
        questionId: "Apa yang membuat Rui berbeda dari yang lain?",
        optionsEn: ["He could fly", "He was very small and close to the ground", "He was the oldest", "He could swim"],
        optionsId: ["Ia bisa terbang", "Ia sangat kecil dan dekat dengan tanah", "Ia paling tua", "Ia bisa berenang"],
        correctIndex: 1
      },
      {
        questionEn: "What had happened to the river?",
        questionId: "Apa yang terjadi pada sungai?",
        optionsEn: ["It dried up", "A landslide had dammed it", "It froze", "It changed colour"],
        optionsId: ["Sungainya kering", "Longsoran membendungnya", "Sungainya membeku", "Warnanya berubah"],
        correctIndex: 1
      },
      {
        questionEn: "How did Rui finally get the big ones to listen?",
        questionId: "Bagaimana akhirnya Rui membuat para raksasa mendengarkan?",
        optionsEn: ["He wrote a note", "He climbed up and shrieked into an ear", "He waited a week", "He gave up"],
        optionsId: ["Ia menulis pesan", "Ia memanjat dan memekik di telinga", "Ia menunggu seminggu", "Ia menyerah"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "one-hundred-sheep-and-one-that-wandered",
    titleEn: "One Hundred Sheep and One That Wandered",
    titleId: "Seratus Domba dan Satu yang Berkelana",
    descriptionEn: "A very quiet bedtime story for counting down, in which everybody eventually gets where they are going.",
    descriptionId: "Cerita pengantar tidur yang sangat tenang untuk menghitung mundur, di mana semua akhirnya sampai di tujuan.",
    categorySlug: "bedtime",
    authorSlug: "axto-creative-team",
    coverEmoji: "🌙",
    coverPalette: "twilight",
    ageMin: 2,
    ageMax: 6,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "sheep-1",
        textEn: "On a hill above a sleeping village there were one hundred sheep, and one shepherd, and one very old dog whose name was Pillow because that is where he slept.",
        textId: "Di sebuah bukit di atas desa yang tertidur ada seratus domba, seorang gembala, dan seekor anjing yang sangat tua bernama Bantal, karena di situlah ia tidur."
      },
      {
        illustrationSeed: "sheep-2",
        textEn: "When the sun went down, the sheep began to walk home. They walked slowly, because sheep never hurry, and one by one they went in through the gate.",
        textId: "Ketika matahari terbenam, domba-domba mulai berjalan pulang. Mereka berjalan perlahan, karena domba tidak pernah terburu-buru, dan satu per satu mereka masuk lewat gerbang."
      },
      {
        illustrationSeed: "sheep-3",
        textEn: "Ninety went in without stopping. Then five stopped to look at the moon, which was the colour of milk, and then they went in too. That left five outside, and then four.",
        textId: "Sembilan puluh masuk tanpa berhenti. Lalu lima berhenti memandang bulan, yang berwarna susu, dan kemudian mereka pun masuk. Tinggal lima di luar, lalu empat."
      },
      {
        illustrationSeed: "sheep-4",
        textEn: "Number four had wool over her eyes and went in sideways. Number three followed her friend. Number two was already half asleep and simply leaned in the right direction until she arrived.",
        textId: "Domba nomor empat matanya tertutup bulu dan masuk dengan menyamping. Nomor tiga mengikuti temannya. Nomor dua sudah setengah tertidur dan hanya bersandar ke arah yang benar sampai ia tiba."
      },
      {
        illustrationSeed: "sheep-5",
        textEn: "That left one. And number one was not by the gate at all. She was far up the hill, at the very top, standing quite still in the long blue grass.",
        textId: "Tinggal satu. Dan nomor satu sama sekali tidak ada di dekat gerbang. Ia jauh di atas bukit, di puncaknya, berdiri diam sekali di rumput biru yang panjang."
      },
      {
        illustrationSeed: "sheep-6",
        textEn: "The shepherd did not shout. He walked up, all the way, with Pillow padding beside him, and when he got there he did not say anything either. He just looked at what she was looking at.",
        textId: "Sang gembala tidak berteriak. Ia berjalan naik, sampai ke puncak, dengan Bantal melangkah di sisinya, dan ketika sampai ia juga tidak berkata apa-apa. Ia hanya menatap apa yang sedang domba itu tatap."
      },
      {
        illustrationSeed: "sheep-7",
        textEn: "Below them the whole valley lay folded in the dark, with three small lights in it, and above them there were more stars than anybody has ever counted, even the people who try.",
        textId: "Di bawah mereka seluruh lembah terlipat dalam gelap, dengan tiga titik cahaya kecil di dalamnya, dan di atas mereka ada lebih banyak bintang daripada yang pernah dihitung siapa pun, bahkan oleh mereka yang mencoba."
      },
      {
        illustrationSeed: "sheep-8",
        textEn: "After a while the sheep turned round on her own and started down. The shepherd walked behind her. Pillow walked behind them both, stopping twice to sniff something and then forgetting what it was.",
        textId: "Setelah beberapa lama domba itu berbalik sendiri dan mulai menuruni bukit. Sang gembala berjalan di belakangnya. Bantal berjalan di belakang keduanya, berhenti dua kali untuk mengendus sesuatu lalu lupa apa itu."
      },
      {
        illustrationSeed: "sheep-9",
        textEn: "One hundred sheep. One gate. One old dog already snoring. And on the hill, the long blue grass moving very slowly, as if it too were finally going to sleep.",
        textId: "Seratus domba. Satu gerbang. Satu anjing tua yang sudah mendengkur. Dan di bukit, rumput biru panjang bergerak sangat perlahan, seolah-olah ia pun akhirnya hendak tidur."
      }
    ],
    quiz: [
      {
        questionEn: "How many sheep were on the hill?",
        questionId: "Berapa jumlah domba di bukit itu?",
        optionsEn: ["Ten", "Fifty", "One hundred", "One"],
        optionsId: ["Sepuluh", "Lima puluh", "Seratus", "Satu"],
        correctIndex: 2
      },
      {
        questionEn: "Why was the dog called Pillow?",
        questionId: "Mengapa anjing itu dinamai Bantal?",
        optionsEn: ["He was soft", "That is where he slept", "He was white", "He was noisy"],
        optionsId: ["Karena lembut", "Karena di situlah ia tidur", "Karena putih", "Karena berisik"],
        correctIndex: 1
      },
      {
        questionEn: "What did the shepherd do about the last sheep?",
        questionId: "Apa yang gembala lakukan pada domba terakhir?",
        optionsEn: ["Shouted at her", "Walked up and waited quietly with her", "Left her there", "Carried her down"],
        optionsId: ["Membentaknya", "Naik dan menunggu dengan tenang bersamanya", "Meninggalkannya di sana", "Menggendongnya turun"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-question-that-would-not-sit-down",
    titleEn: "The Question That Would Not Sit Down",
    titleId: "Pertanyaan yang Tak Mau Duduk Diam",
    descriptionEn: "Ilham asks why the sky is blue. Nobody can answer properly — so he spends a whole year finding out.",
    descriptionId: "Ilham bertanya mengapa langit berwarna biru. Tak seorang pun bisa menjawab dengan benar — maka ia menghabiskan setahun penuh untuk mencari tahu.",
    categorySlug: "learning",
    authorSlug: "axto-creative-team",
    coverEmoji: "📚",
    coverPalette: "ocean",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "why-1",
        textEn: "Ilham asked his question on a Tuesday, lying on his back in the yard. \"Why is the sky blue?\" His sister said, \"Because it is.\" That is not an answer, and Ilham knew it.",
        textId: "Ilham mengajukan pertanyaannya pada hari Selasa, sambil telentang di halaman. \"Mengapa langit berwarna biru?\" Kakaknya menjawab, \"Ya karena memang begitu.\" Itu bukan jawaban, dan Ilham tahu itu."
      },
      {
        illustrationSeed: "why-2",
        textEn: "He asked his father, who said it was something to do with the sea reflecting. He asked his uncle, who said it was the air. Both answers sounded confident. Only one of them could be right, and in fact neither was.",
        textId: "Ia bertanya kepada ayahnya, yang menjawab bahwa itu ada hubungannya dengan pantulan laut. Ia bertanya kepada pamannya, yang menjawab bahwa itu karena udara. Keduanya terdengar yakin. Hanya satu yang bisa benar, dan ternyata tidak satu pun benar."
      },
      {
        illustrationSeed: "why-3",
        textEn: "At school, his teacher Bu Ratna did something better than answering. She said, \"I am not certain. Shall we find out properly?\" And she wrote the question on a card and pinned it to the wall.",
        textId: "Di sekolah, gurunya Bu Ratna melakukan hal yang lebih baik daripada menjawab. Ia berkata, \"Saya kurang yakin. Mau kita cari tahu bersama?\" Lalu ia menulis pertanyaan itu di sebuah kartu dan menempelkannya di dinding."
      },
      {
        illustrationSeed: "why-4",
        textEn: "First they discovered that white light is not white at all. Bu Ratna held a prism in the window and there it was on the floor — red, orange, yellow, green, blue, indigo, violet, all hiding inside the sunlight.",
        textId: "Pertama mereka menemukan bahwa cahaya putih sebenarnya sama sekali tidak putih. Bu Ratna memegang prisma di jendela dan warnanya muncul di lantai — merah, jingga, kuning, hijau, biru, nila, ungu, semuanya bersembunyi di dalam sinar matahari."
      },
      {
        illustrationSeed: "why-5",
        textEn: "Then they learned that light travels in waves, and that blue waves are short and bunched-up while red waves are long and stretched out, like ripples of different sizes crossing a pond.",
        textId: "Lalu mereka belajar bahwa cahaya merambat sebagai gelombang, dan bahwa gelombang biru itu pendek dan rapat sementara gelombang merah panjang dan renggang, seperti riak berbeda ukuran yang menyeberangi kolam."
      },
      {
        illustrationSeed: "why-6",
        textEn: "And then the piece that made it click. The air is full of tiny specks — bits of gas far too small to see. Short bunched-up waves bump into them and scatter everywhere. Long stretched-out waves mostly sail straight past.",
        textId: "Lalu tibalah bagian yang membuat semuanya masuk akal. Udara penuh dengan bintik-bintik amat kecil — partikel gas yang jauh terlalu kecil untuk dilihat. Gelombang pendek yang rapat menabraknya dan terhambur ke mana-mana. Gelombang panjang yang renggang umumnya lewat begitu saja."
      },
      {
        illustrationSeed: "why-7",
        textEn: "\"So,\" said Ilham slowly, working it out, \"the blue is bouncing all over the sky. That is why it comes at me from everywhere at once — not from one place, like the sun does.\" Bu Ratna smiled and said nothing, which meant yes.",
        textId: "\"Jadi,\" kata Ilham perlahan, sambil menalar, \"warna birunya terpantul ke seluruh langit. Itu sebabnya biru datang kepadaku dari segala arah sekaligus — bukan dari satu titik, seperti matahari.\" Bu Ratna tersenyum dan tidak berkata apa-apa, yang berarti benar."
      },
      {
        illustrationSeed: "why-8",
        textEn: "\"Then why is sunset red?\" he asked immediately. And Bu Ratna laughed and wrote that on a second card, and pinned it up beside the first.",
        textId: "\"Lalu mengapa matahari terbenam berwarna merah?\" tanyanya seketika. Bu Ratna tertawa dan menuliskannya di kartu kedua, lalu menempelkannya di samping yang pertama."
      },
      {
        illustrationSeed: "why-9",
        textEn: "By the end of the year the wall was covered in cards. Some had answers under them. Some did not, and Bu Ratna left those up too, because a question nobody has answered yet is the most interesting thing in any room.",
        textId: "Menjelang akhir tahun, dinding itu penuh dengan kartu. Beberapa sudah ada jawabannya di bawahnya. Beberapa belum, dan Bu Ratna membiarkannya tetap terpasang, karena pertanyaan yang belum terjawab adalah hal paling menarik di ruangan mana pun."
      }
    ],
    quiz: [
      {
        questionEn: "What did Bu Ratna do when she did not know the answer?",
        questionId: "Apa yang Bu Ratna lakukan ketika ia tidak tahu jawabannya?",
        optionsEn: ["Made one up", "Said so and offered to find out together", "Changed the subject", "Told him to stop asking"],
        optionsId: ["Mengarang jawaban", "Mengakuinya dan mengajak mencari tahu bersama", "Mengalihkan pembicaraan", "Menyuruhnya berhenti bertanya"],
        correctIndex: 1
      },
      {
        questionEn: "Why does the sky look blue?",
        questionId: "Mengapa langit tampak biru?",
        optionsEn: ["It reflects the sea", "Short blue waves scatter off tiny specks in the air", "The sun is blue", "The air is painted"],
        optionsId: ["Memantulkan laut", "Gelombang biru yang pendek terhambur oleh partikel kecil di udara", "Mataharinya biru", "Udaranya dicat"],
        correctIndex: 1
      },
      {
        questionEn: "Why did Bu Ratna leave unanswered cards on the wall?",
        questionId: "Mengapa Bu Ratna membiarkan kartu yang belum terjawab tetap di dinding?",
        optionsEn: ["She forgot them", "Because unanswered questions are interesting", "To punish the class", "There was no space elsewhere"],
        optionsId: ["Ia lupa", "Karena pertanyaan yang belum terjawab itu menarik", "Untuk menghukum kelas", "Tidak ada tempat lain"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-superhero-with-no-powers",
    titleEn: "The Superhero With No Powers",
    titleId: "Pahlawan Super Tanpa Kekuatan",
    descriptionEn: "The city has four heroes who can fly, freeze and lift buses. It also has Dewi, who notices things.",
    descriptionId: "Kota itu punya empat pahlawan yang bisa terbang, membekukan, dan mengangkat bus. Kota itu juga punya Dewi, yang pandai memperhatikan.",
    categorySlug: "superheroes",
    authorSlug: "axto-creative-team",
    coverEmoji: "🦸",
    coverPalette: "citrus",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "dewi-1",
        textEn: "The city of Kertasari was protected by four heroes. Blaze could throw fire. Tide could stop a river. Iron Anna could lift a bus, and Wisp could be in two places at once, which was confusing for everybody including Wisp.",
        textId: "Kota Kertasari dilindungi oleh empat pahlawan. Blaze bisa melemparkan api. Tide bisa menghentikan sungai. Iron Anna bisa mengangkat bus, dan Wisp bisa berada di dua tempat sekaligus, yang membingungkan semua orang termasuk Wisp sendiri."
      },
      {
        illustrationSeed: "dewi-2",
        textEn: "Dewi could not do any of those things. Dewi was eleven, wore glasses that slid down her nose, and had exactly one talent: she noticed things, and she remembered them.",
        textId: "Dewi tidak bisa melakukan satu pun dari itu. Dewi berusia sebelas tahun, memakai kacamata yang melorot di hidungnya, dan punya tepat satu bakat: ia pandai memperhatikan, dan ia mengingatnya."
      },
      {
        illustrationSeed: "dewi-3",
        textEn: "When the museum was robbed, the four heroes searched the whole city. They flew over rooftops and froze the harbour and lifted three buses looking underneath, and they found nothing at all.",
        textId: "Ketika museum dirampok, keempat pahlawan menyisir seluruh kota. Mereka terbang di atas atap, membekukan pelabuhan, dan mengangkat tiga bus untuk melihat ke bawahnya, dan mereka sama sekali tidak menemukan apa-apa."
      },
      {
        illustrationSeed: "dewi-4",
        textEn: "Dewi did not search anywhere. She sat on the museum steps with a notebook and thought about what she had seen there on Tuesday, and Wednesday, and every day for a month on her way to school.",
        textId: "Dewi tidak menyisir ke mana pun. Ia duduk di anak tangga museum dengan buku catatan dan memikirkan apa yang ia lihat di sana pada hari Selasa, Rabu, dan setiap hari selama sebulan dalam perjalanan ke sekolah."
      },
      {
        illustrationSeed: "dewi-5",
        textEn: "The bins had been emptied on a Thursday for three weeks, she wrote. But this week the lorry came on Monday, and it was a different lorry, and the driver did not have the little blue sticker on his window.",
        textId: "Tempat sampah dikosongkan setiap Kamis selama tiga minggu, tulisnya. Tetapi minggu ini truknya datang hari Senin, dan itu truk yang berbeda, dan sopirnya tidak punya stiker biru kecil di jendelanya."
      },
      {
        illustrationSeed: "dewi-6",
        textEn: "She showed the page to Iron Anna, who read it twice and went very quiet. Then Anna said a word she was not supposed to say in front of children, and went to find the bin lorry.",
        textId: "Ia menunjukkan halaman itu kepada Iron Anna, yang membacanya dua kali dan terdiam. Lalu Anna mengucapkan sebuah kata yang seharusnya tidak diucapkan di depan anak-anak, dan pergi mencari truk sampah itu."
      },
      {
        illustrationSeed: "dewi-7",
        textEn: "The paintings were inside it, wrapped in plastic under the rubbish, exactly where nobody who could fly would ever think to look.",
        textId: "Lukisan-lukisan itu ada di dalamnya, terbungkus plastik di bawah sampah, persis di tempat yang tak akan pernah terpikirkan oleh siapa pun yang bisa terbang."
      },
      {
        illustrationSeed: "dewi-8",
        textEn: "At the ceremony, the mayor asked Dewi what her power was. Dewi thought about it seriously, the way she thought about everything. \"I pay attention,\" she said. \"For a long time. Even when nothing is happening.\"",
        textId: "Pada upacara penghargaan, wali kota bertanya kepada Dewi apa kekuatannya. Dewi memikirkannya dengan serius, seperti ia memikirkan segalanya. \"Saya memperhatikan,\" katanya. \"Dalam waktu lama. Bahkan ketika tidak sedang terjadi apa-apa.\""
      },
      {
        illustrationSeed: "dewi-9",
        textEn: "Blaze still throws fire and Iron Anna still lifts buses. But now, before they start, one of them always goes and knocks on a certain window and asks a girl in glasses what she has noticed lately.",
        textId: "Blaze masih melemparkan api dan Iron Anna masih mengangkat bus. Tetapi kini, sebelum mulai, salah satu dari mereka selalu pergi mengetuk sebuah jendela dan bertanya kepada seorang gadis berkacamata apa yang belakangan ini ia perhatikan."
      }
    ],
    quiz: [
      {
        questionEn: "What was Dewi's only talent?",
        questionId: "Apa satu-satunya bakat Dewi?",
        optionsEn: ["Flying", "Noticing and remembering things", "Lifting heavy objects", "Running fast"],
        optionsId: ["Terbang", "Memperhatikan dan mengingat", "Mengangkat benda berat", "Berlari cepat"],
        correctIndex: 1
      },
      {
        questionEn: "Where were the stolen paintings?",
        questionId: "Di mana lukisan-lukisan yang dicuri itu?",
        optionsEn: ["In the harbour", "Inside a bin lorry", "On a rooftop", "Under a bus"],
        optionsId: ["Di pelabuhan", "Di dalam truk sampah", "Di atas atap", "Di bawah bus"],
        correctIndex: 1
      },
      {
        questionEn: "Why did the four heroes not find them?",
        questionId: "Mengapa keempat pahlawan tidak menemukannya?",
        optionsEn: ["They were not trying", "They looked in dramatic places, not ordinary ones", "They were too slow", "The thief was invisible"],
        optionsId: ["Mereka tidak berusaha", "Mereka mencari di tempat dramatis, bukan tempat biasa", "Mereka terlalu lambat", "Pencurinya tak terlihat"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-day-everything-was-upside-down",
    titleEn: "The Day Everything Was Upside Down",
    titleId: "Hari Ketika Semuanya Terbalik",
    descriptionEn: "Grandpa Wira insists that on Wednesdays the rules are different. A gloriously silly story about a very serious old man.",
    descriptionId: "Kakek Wira bersikeras bahwa pada hari Rabu aturannya berbeda. Cerita konyol yang meriah tentang seorang kakek yang sangat serius.",
    categorySlug: "humor",
    authorSlug: "axto-creative-team",
    coverEmoji: "🙃",
    coverPalette: "citrus",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "upside-1",
        textEn: "Grandpa Wira was a serious man. He wore a pressed shirt every day of his life and folded his newspaper into exact quarters. This is important to know, because of what happened on Wednesdays.",
        textId: "Kakek Wira adalah orang yang serius. Ia mengenakan kemeja licin setiap hari dalam hidupnya dan melipat korannya menjadi seperempat yang presisi. Ini penting diketahui, mengingat apa yang terjadi setiap hari Rabu."
      },
      {
        illustrationSeed: "upside-2",
        textEn: "On Wednesdays, Grandpa Wira announced that the rules were different, and then behaved as though this were the most ordinary fact in the world.",
        textId: "Pada hari Rabu, Kakek Wira mengumumkan bahwa aturannya berbeda, lalu bersikap seolah-olah itu fakta paling biasa di dunia."
      },
      {
        illustrationSeed: "upside-3",
        textEn: "Breakfast was at night. Dinner was at seven in the morning, and it was soup, and he ate it looking out of the window at people going to work, and he waved at them with his spoon.",
        textId: "Sarapan disantap malam hari. Makan malam pukul tujuh pagi, berupa sup, dan ia menyantapnya sambil memandang keluar jendela ke arah orang-orang yang berangkat kerja, dan ia melambai kepada mereka dengan sendok."
      },
      {
        illustrationSeed: "upside-4",
        textEn: "He walked backwards to the shop. He said goodbye when he arrived and hello when he left. The shopkeeper had long ago stopped commenting and simply said the opposite thing back.",
        textId: "Ia berjalan mundur ke toko. Ia mengucapkan selamat tinggal saat tiba dan halo saat pergi. Pemilik toko sudah lama berhenti berkomentar dan hanya membalas dengan kata yang sebaliknya."
      },
      {
        illustrationSeed: "upside-5",
        textEn: "His grandson Adi thought this was the funniest thing that had ever happened to anybody. He also thought, secretly, that it was a bit embarrassing when his friends were watching.",
        textId: "Cucunya, Adi, menganggap ini hal paling lucu yang pernah terjadi pada siapa pun. Ia juga diam-diam merasa agak malu ketika teman-temannya menonton."
      },
      {
        illustrationSeed: "upside-6",
        textEn: "One Wednesday, Adi asked him to stop. Just for one week. Just while his class walked past. Grandpa Wira put down his newspaper, which he had folded into exact quarters, and thought about it.",
        textId: "Suatu Rabu, Adi memintanya berhenti. Cukup satu minggu saja. Hanya selama kelasnya lewat. Kakek Wira meletakkan korannya, yang telah dilipat menjadi seperempat yang presisi, lalu berpikir."
      },
      {
        illustrationSeed: "upside-7",
        textEn: "\"When I was young,\" he said, \"I did everything correctly for forty years. Correct shirt. Correct hours. Correct opinions at correct volumes. It was not a bad life. But it was very quiet in here.\" He tapped his chest.",
        textId: "\"Ketika saya muda,\" katanya, \"saya melakukan semuanya dengan benar selama empat puluh tahun. Kemeja yang benar. Jam yang benar. Pendapat yang benar dengan volume yang benar. Itu bukan hidup yang buruk. Tetapi di dalam sini sangat sepi.\" Ia menepuk dadanya."
      },
      {
        illustrationSeed: "upside-8",
        textEn: "\"So now I have Wednesday,\" he said. \"One day out of seven where nothing has to be the right way round. You may join me or not. But I am not giving it back.\"",
        textId: "\"Maka sekarang saya punya hari Rabu,\" katanya. \"Satu hari dari tujuh, ketika tidak ada yang harus berada pada posisi yang benar. Kau boleh ikut atau tidak. Tetapi hari itu tidak akan saya kembalikan.\""
      },
      {
        illustrationSeed: "upside-9",
        textEn: "The following Wednesday, Adi's whole class walked past. Grandpa Wira was outside, walking backwards, waving with a spoon. And Adi, after a moment, waved back with both hands and shouted, \"Goodbye, Grandpa!\"",
        textId: "Rabu berikutnya, seluruh kelas Adi lewat. Kakek Wira ada di luar, berjalan mundur, melambai dengan sendok. Dan Adi, setelah sejenak, membalas melambai dengan kedua tangan sambil berteriak, \"Selamat tinggal, Kek!\""
      }
    ],
    quiz: [
      {
        questionEn: "What happened on Wednesdays?",
        questionId: "Apa yang terjadi pada hari Rabu?",
        optionsEn: ["Grandpa stayed in bed", "Grandpa did everything the opposite way round", "Nothing", "It always rained"],
        optionsId: ["Kakek tetap di tempat tidur", "Kakek melakukan segalanya secara terbalik", "Tidak terjadi apa-apa", "Selalu hujan"],
        correctIndex: 1
      },
      {
        questionEn: "Why did Grandpa Wira invent Wednesday?",
        questionId: "Mengapa Kakek Wira menciptakan hari Rabu?",
        optionsEn: ["To annoy people", "Because he had spent forty years doing everything correctly", "He lost a bet", "He was confused"],
        optionsId: ["Untuk mengganggu orang", "Karena empat puluh tahun ia melakukan semuanya dengan benar", "Ia kalah taruhan", "Ia bingung"],
        correctIndex: 1
      },
      {
        questionEn: "What did Adi do at the end?",
        questionId: "Apa yang Adi lakukan di akhir cerita?",
        optionsEn: ["Hid from his class", "Waved back and joined in", "Asked him to stop again", "Walked away"],
        optionsId: ["Bersembunyi dari kelasnya", "Membalas lambaian dan ikut serta", "Memintanya berhenti lagi", "Pergi menjauh"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-library-with-one-locked-door",
    titleEn: "The Library With One Locked Door",
    titleId: "Perpustakaan dengan Satu Pintu Terkunci",
    descriptionEn: "Every door in the old library is open except one. Maya has three weeks of summer and a very good reason to be curious.",
    descriptionId: "Setiap pintu di perpustakaan tua itu terbuka kecuali satu. Maya punya tiga minggu liburan dan alasan yang sangat kuat untuk penasaran.",
    categorySlug: "mystery",
    authorSlug: "axto-creative-team",
    coverEmoji: "🔍",
    coverPalette: "twilight",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "locked-1",
        textEn: "The library on Kenanga Street had eleven doors. Ten of them were propped open all summer to let the air through. The eleventh, at the end of the north corridor, was locked, and had been for as long as anybody could remember.",
        textId: "Perpustakaan di Jalan Kenanga punya sebelas pintu. Sepuluh di antaranya diganjal terbuka sepanjang musim panas agar udara mengalir. Yang kesebelas, di ujung koridor utara, terkunci, dan sudah terkunci selama yang bisa diingat siapa pun."
      },
      {
        illustrationSeed: "locked-2",
        textEn: "Maya asked the librarian, Pak Yusuf, what was behind it. He said, \"Nothing interesting.\" Which is, of course, exactly the wrong thing to say to somebody like Maya.",
        textId: "Maya bertanya kepada pustakawan, Pak Yusuf, apa yang ada di baliknya. Ia menjawab, \"Tidak ada yang menarik.\" Yang tentu saja merupakan hal paling keliru untuk dikatakan kepada orang seperti Maya."
      },
      {
        illustrationSeed: "locked-3",
        textEn: "She began collecting facts, which is what you do when you cannot get in. Fact one: the door had a keyhole, so there was a key. Fact two: there was no dust on the handle.",
        textId: "Ia mulai mengumpulkan fakta, yang memang harus dilakukan ketika tidak bisa masuk. Fakta satu: pintu itu punya lubang kunci, jadi ada kuncinya. Fakta dua: tidak ada debu di gagangnya."
      },
      {
        illustrationSeed: "locked-4",
        textEn: "Fact three, and the best one: on the outside wall of the library, the north side had a window that did not match any room she had ever been in. She counted the windows twice from the street to be sure.",
        textId: "Fakta tiga, dan yang terbaik: di dinding luar perpustakaan, sisi utara punya sebuah jendela yang tidak cocok dengan ruangan mana pun yang pernah ia masuki. Ia menghitung jendela dua kali dari jalan untuk memastikan."
      },
      {
        illustrationSeed: "locked-5",
        textEn: "For eight days she watched from the reading table. On the ninth day, at four in the afternoon, Pak Yusuf took a small brass key from his pocket, went down the north corridor, and did not come back for an hour.",
        textId: "Selama delapan hari ia mengamati dari meja baca. Pada hari kesembilan, pukul empat sore, Pak Yusuf mengeluarkan kunci kuningan kecil dari sakunya, menyusuri koridor utara, dan tidak kembali selama satu jam."
      },
      {
        illustrationSeed: "locked-6",
        textEn: "Maya could have followed him. She thought about it for a long time. In the end she did something braver and much harder: on the tenth day, she waited until four, walked up to him, and asked.",
        textId: "Maya bisa saja mengikutinya. Ia memikirkannya lama. Pada akhirnya ia melakukan sesuatu yang lebih berani dan jauh lebih sulit: pada hari kesepuluh, ia menunggu sampai pukul empat, menghampirinya, dan bertanya."
      },
      {
        illustrationSeed: "locked-7",
        textEn: "Pak Yusuf looked at her for a while. Then he said, \"You counted the windows, didn't you.\" And he took out the brass key and opened the door.",
        textId: "Pak Yusuf memandanginya sejenak. Lalu ia berkata, \"Kau menghitung jendelanya, bukan?\" Dan ia mengeluarkan kunci kuningan itu lalu membuka pintunya."
      },
      {
        illustrationSeed: "locked-8",
        textEn: "Inside was a small room full of books that were falling apart. Loose spines. Torn pages. A long table with glue, thread, thin brushes and weights. Pak Yusuf had been repairing them, one at a time, for nineteen years.",
        textId: "Di dalamnya ada ruangan kecil penuh buku yang hampir hancur. Punggung buku lepas. Halaman robek. Sebuah meja panjang dengan lem, benang, kuas halus, dan pemberat. Pak Yusuf telah memperbaikinya, satu per satu, selama sembilan belas tahun."
      },
      {
        illustrationSeed: "locked-9",
        textEn: "\"It is not a secret,\" he said. \"It is just quiet work, and quiet work needs a door.\" Maya spent the rest of the summer in that room, learning to sew a spine, and she never once told anybody where she went at four o'clock.",
        textId: "\"Ini bukan rahasia,\" katanya. \"Ini hanya pekerjaan yang tenang, dan pekerjaan yang tenang butuh pintu.\" Maya menghabiskan sisa liburannya di ruangan itu, belajar menjahit punggung buku, dan ia tidak pernah sekali pun memberi tahu siapa pun ke mana ia pergi pukul empat."
      }
    ],
    quiz: [
      {
        questionEn: "What clue told Maya there was a hidden room?",
        questionId: "Petunjuk apa yang membuat Maya tahu ada ruangan tersembunyi?",
        optionsEn: ["A map", "A window that matched no room she knew", "A note", "A sound"],
        optionsId: ["Sebuah peta", "Jendela yang tidak cocok dengan ruangan mana pun", "Sebuah catatan", "Sebuah suara"],
        correctIndex: 1
      },
      {
        questionEn: "What did Maya finally decide to do?",
        questionId: "Apa yang akhirnya Maya putuskan untuk dilakukan?",
        optionsEn: ["Sneak in", "Simply ask Pak Yusuf", "Take the key", "Tell everyone"],
        optionsId: ["Menyelinap masuk", "Bertanya langsung kepada Pak Yusuf", "Mengambil kuncinya", "Memberi tahu semua orang"],
        correctIndex: 1
      },
      {
        questionEn: "What was behind the locked door?",
        questionId: "Apa yang ada di balik pintu terkunci itu?",
        optionsEn: ["Treasure", "A workshop for repairing damaged books", "An empty room", "A staircase"],
        optionsId: ["Harta karun", "Bengkel untuk memperbaiki buku rusak", "Ruangan kosong", "Sebuah tangga"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-pirate-who-kept-every-promise",
    titleEn: "The Pirate Who Kept Every Promise",
    titleId: "Bajak Laut yang Menepati Setiap Janji",
    descriptionEn: "Captain Rahma is the most feared pirate in the southern sea, entirely because of one strange habit.",
    descriptionId: "Kapten Rahma adalah bajak laut paling ditakuti di laut selatan, sepenuhnya karena satu kebiasaan yang aneh.",
    categorySlug: "pirates",
    authorSlug: "axto-creative-team",
    coverEmoji: "🏴‍☠️",
    coverPalette: "ocean",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "rahma-1",
        textEn: "Captain Rahma was the most feared pirate in the southern sea, and not one person could tell you why. She had no cannon. Her ship was small. She had never once taken anything by force.",
        textId: "Kapten Rahma adalah bajak laut paling ditakuti di laut selatan, dan tak seorang pun bisa menjelaskan alasannya. Ia tidak punya meriam. Kapalnya kecil. Ia tidak pernah sekali pun merampas apa pun dengan kekerasan."
      },
      {
        illustrationSeed: "rahma-2",
        textEn: "What she had was a habit. When Captain Rahma said a thing would happen, it happened. When she said it would not, it did not. In twenty years at sea she had never broken her word once.",
        textId: "Yang ia punya adalah sebuah kebiasaan. Ketika Kapten Rahma mengatakan sesuatu akan terjadi, hal itu terjadi. Ketika ia mengatakan tidak, maka tidak. Dalam dua puluh tahun di laut, ia tidak pernah sekali pun mengingkari ucapannya."
      },
      {
        illustrationSeed: "rahma-3",
        textEn: "This turns out to be terrifying. When she pulled alongside a merchant ship and said, \"Give me the cargo and every one of you goes home,\" they believed her, because she had never lied — and so they gave it.",
        textId: "Ternyata itu menakutkan. Ketika ia merapat ke kapal dagang dan berkata, \"Serahkan muatannya dan kalian semua pulang dengan selamat,\" mereka percaya, karena ia tidak pernah berbohong — maka mereka menyerahkannya."
      },
      {
        illustrationSeed: "rahma-4",
        textEn: "The other pirates thought she was soft. Captain Bram of the Iron Gull told everyone that promises were for children. He also told a crew he would spare them, and then did not, and word travelled.",
        textId: "Bajak laut lain menganggapnya lembek. Kapten Bram dari kapal Iron Gull memberi tahu semua orang bahwa janji itu untuk anak-anak. Ia juga berjanji akan mengampuni satu awak kapal, lalu ingkar, dan kabar itu menyebar."
      },
      {
        illustrationSeed: "rahma-5",
        textEn: "After that, every ship Bram approached fought him to the last plank, because they had nothing to gain by surrendering. He lost two ships and eleven men in a single season and never understood why.",
        textId: "Setelah itu, setiap kapal yang Bram dekati melawan sampai papan terakhir, karena mereka tidak punya apa pun untuk diperoleh dengan menyerah. Ia kehilangan dua kapal dan sebelas anak buah dalam satu musim dan tidak pernah paham mengapa."
      },
      {
        illustrationSeed: "rahma-6",
        textEn: "One winter, Rahma made a promise she regretted. She told a fisherman's widow she would bring her son home from the prison island by the first day of spring, before she knew how hard it would be.",
        textId: "Suatu musim dingin, Rahma membuat janji yang ia sesali. Ia berkata kepada janda seorang nelayan bahwa ia akan membawa pulang putranya dari pulau penjara sebelum hari pertama musim semi, sebelum ia tahu betapa sulitnya itu."
      },
      {
        illustrationSeed: "rahma-7",
        textEn: "Her crew told her to let it go. It was one promise. Nobody would blame her. Rahma said, \"They would not blame me. They would simply stop believing me. And then I would have nothing at all.\"",
        textId: "Awak kapalnya menyuruhnya melupakan saja. Itu hanya satu janji. Tidak ada yang akan menyalahkannya. Rahma berkata, \"Mereka memang tidak akan menyalahkanku. Mereka hanya akan berhenti mempercayaiku. Dan saat itu aku tidak punya apa-apa lagi.\""
      },
      {
        illustrationSeed: "rahma-8",
        textEn: "It took her nine weeks, three bribes, one storm and a rope ladder she made herself. She delivered the boy to his mother's door on the last night of winter, one day early, because she had said the first day of spring.",
        textId: "Butuh sembilan minggu, tiga kali menyuap, satu badai, dan tangga tali yang ia buat sendiri. Ia mengantar anak itu ke depan pintu ibunya pada malam terakhir musim dingin, sehari lebih awal, karena ia berjanji sebelum hari pertama musim semi."
      },
      {
        illustrationSeed: "rahma-9",
        textEn: "They still tell the story in the southern ports. Not because of the rescue. Because of what it proved: that the most valuable thing a person can own is that when they say something, everybody knows it is true.",
        textId: "Kisah itu masih diceritakan di pelabuhan-pelabuhan selatan. Bukan karena penyelamatannya. Melainkan karena apa yang dibuktikannya: bahwa hal paling berharga yang bisa dimiliki seseorang adalah bahwa ketika ia berkata sesuatu, semua orang tahu itu benar."
      }
    ],
    quiz: [
      {
        questionEn: "Why was Captain Rahma feared?",
        questionId: "Mengapa Kapten Rahma ditakuti?",
        optionsEn: ["She had the biggest cannon", "She always kept her word", "She had the fastest ship", "She had the largest crew"],
        optionsId: ["Ia punya meriam terbesar", "Ia selalu menepati ucapannya", "Kapalnya tercepat", "Awaknya terbanyak"],
        correctIndex: 1
      },
      {
        questionEn: "What happened to Captain Bram after he broke a promise?",
        questionId: "Apa yang terjadi pada Kapten Bram setelah ia ingkar janji?",
        optionsEn: ["He became rich", "Every ship fought him to the end", "Nothing changed", "He was made a hero"],
        optionsId: ["Ia menjadi kaya", "Setiap kapal melawannya sampai akhir", "Tidak ada yang berubah", "Ia dijadikan pahlawan"],
        correctIndex: 1
      },
      {
        questionEn: "Why did Rahma keep the difficult promise?",
        questionId: "Mengapa Rahma menepati janji yang sulit itu?",
        optionsEn: ["For the money", "Because being believed was everything she had", "Because she was ordered to", "By accident"],
        optionsId: ["Demi uang", "Karena dipercaya adalah segalanya yang ia miliki", "Karena diperintah", "Secara kebetulan"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-knight-who-would-not-fight",
    titleEn: "The Knight Who Would Not Fight",
    titleId: "Ksatria yang Menolak Bertarung",
    descriptionEn: "Sir Anindita is the finest swordsman in the kingdom. She has also not drawn her sword in six years, and there is a reason.",
    descriptionId: "Sir Anindita adalah pemain pedang terbaik di kerajaan. Ia juga tidak menghunus pedangnya selama enam tahun, dan ada alasannya.",
    categorySlug: "princess-knights",
    authorSlug: "axto-creative-team",
    coverEmoji: "👑",
    coverPalette: "forest",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "anin-1",
        textEn: "Sir Anindita had won every tournament she entered before she was twenty. She was the finest swordsman the kingdom had produced in a hundred years, and everybody said so, including the people she had beaten.",
        textId: "Sir Anindita telah memenangi setiap turnamen yang ia ikuti sebelum berusia dua puluh tahun. Ia pemain pedang terbaik yang dihasilkan kerajaan dalam seratus tahun, dan semua orang mengatakannya, termasuk mereka yang ia kalahkan."
      },
      {
        illustrationSeed: "anin-2",
        textEn: "Then, one autumn, she stopped. She did not resign. She did not explain. She simply stopped drawing her sword, and for six years nobody could persuade her to say why.",
        textId: "Lalu, pada suatu musim gugur, ia berhenti. Ia tidak mengundurkan diri. Ia tidak menjelaskan. Ia hanya berhenti menghunus pedangnya, dan selama enam tahun tak seorang pun bisa membujuknya menjelaskan alasannya."
      },
      {
        illustrationSeed: "anin-3",
        textEn: "The young knights whispered that she had lost her nerve. The old ones said nothing, because they had been at the border that autumn too and they remembered what a battle actually looks like afterwards.",
        textId: "Para ksatria muda berbisik bahwa ia sudah kehilangan nyali. Para ksatria tua tidak berkata apa-apa, karena mereka juga berada di perbatasan pada musim gugur itu dan mereka ingat seperti apa sebenarnya rupa medan perang sesudahnya."
      },
      {
        illustrationSeed: "anin-4",
        textEn: "When the dispute with the river villages began, the council wanted Anindita to lead. She said she would go, but not to fight. \"Then what use are you?\" asked a young lord. She said, \"We shall see.\"",
        textId: "Ketika perselisihan dengan desa-desa tepi sungai dimulai, dewan ingin Anindita memimpin. Ia berkata ia akan pergi, tetapi bukan untuk bertarung. \"Lalu apa gunanya kau?\" tanya seorang bangsawan muda. Ia menjawab, \"Kita lihat nanti.\""
      },
      {
        illustrationSeed: "anin-5",
        textEn: "She rode to the river alone, without armour, and sat down on the bank in full view of both sides. She stayed there three days. On the first day people shouted at her. On the second, they came to look.",
        textId: "Ia berkuda ke sungai seorang diri, tanpa baju zirah, lalu duduk di tepian dalam pandangan kedua pihak. Ia bertahan di sana tiga hari. Hari pertama orang-orang meneriakinya. Hari kedua, mereka datang untuk melihat."
      },
      {
        illustrationSeed: "anin-6",
        textEn: "On the third day the headman of the river villages sat down beside her, because it is very difficult to keep shouting at somebody who will not shout back and has clearly brought her own lunch.",
        textId: "Hari ketiga kepala desa dari desa tepi sungai duduk di sampingnya, karena sangat sulit terus berteriak kepada orang yang tidak membalas berteriak dan jelas-jelas membawa bekal makan siangnya sendiri."
      },
      {
        illustrationSeed: "anin-7",
        textEn: "What they were arguing about, it turned out, was a weir built forty years earlier that flooded one village every spring and dried another every summer. Nobody had asked. Everybody had assumed.",
        textId: "Ternyata yang mereka perselisihkan adalah sebuah bendungan yang dibangun empat puluh tahun sebelumnya, yang membanjiri satu desa setiap musim semi dan mengeringkan desa lain setiap musim panas. Tidak ada yang pernah bertanya. Semua hanya berasumsi."
      },
      {
        illustrationSeed: "anin-8",
        textEn: "It took eleven days and two arguments and one afternoon when everything nearly collapsed. But at the end of it there was a plan for the weir, signed by both sides, and not one person had been hurt.",
        textId: "Butuh sebelas hari, dua kali pertengkaran, dan satu sore ketika semuanya nyaris gagal. Tetapi di akhirnya ada rencana untuk bendungan itu, ditandatangani kedua pihak, dan tidak seorang pun terluka."
      },
      {
        illustrationSeed: "anin-9",
        textEn: "Back at the castle the young lord asked her again what use a knight was who would not fight. Anindita said, \"The sword was always the easy part. Anyone can end a thing. Try beginning one.\"",
        textId: "Kembali di kastel, bangsawan muda itu bertanya lagi apa gunanya ksatria yang menolak bertarung. Anindita menjawab, \"Pedang selalu bagian yang mudah. Siapa pun bisa mengakhiri sesuatu. Cobalah memulai sesuatu.\""
      }
    ],
    quiz: [
      {
        questionEn: "What had Sir Anindita stopped doing?",
        questionId: "Apa yang berhenti dilakukan Sir Anindita?",
        optionsEn: ["Riding horses", "Drawing her sword", "Speaking", "Wearing armour to feasts"],
        optionsId: ["Menunggang kuda", "Menghunus pedangnya", "Berbicara", "Memakai zirah ke perjamuan"],
        correctIndex: 1
      },
      {
        questionEn: "What did she do at the river?",
        questionId: "Apa yang ia lakukan di sungai?",
        optionsEn: ["Attacked at dawn", "Sat down in view of both sides for three days", "Built a wall", "Burned the weir"],
        optionsId: ["Menyerang saat fajar", "Duduk dalam pandangan kedua pihak selama tiga hari", "Membangun tembok", "Membakar bendungan"],
        correctIndex: 1
      },
      {
        questionEn: "What was the argument really about?",
        questionId: "Sebenarnya apa yang mereka perselisihkan?",
        optionsEn: ["An old insult", "A weir that flooded one village and dried another", "A stolen horse", "A border stone"],
        optionsId: ["Hinaan lama", "Bendungan yang membanjiri satu desa dan mengeringkan desa lain", "Kuda yang dicuri", "Batu perbatasan"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-shop-that-sold-nothing",
    titleEn: "The Shop That Sold Nothing",
    titleId: "Toko yang Tidak Menjual Apa-apa",
    descriptionEn: "A strange little shop appears between the baker and the barber, and the sign in the window says exactly what it has in stock.",
    descriptionId: "Sebuah toko kecil yang aneh muncul di antara toko roti dan tukang cukur, dan papan di jendelanya menyebutkan persis apa yang tersedia.",
    categorySlug: "fantasy",
    authorSlug: "axto-creative-team",
    coverEmoji: "🪄",
    coverPalette: "twilight",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "nothing-1",
        textEn: "The shop appeared on a Tuesday, in a gap between the baker and the barber where there had never been a gap before. It was narrow, painted green, and the sign in the window said: WE SELL NOTHING.",
        textId: "Toko itu muncul pada hari Selasa, di sebuah celah antara toko roti dan tukang cukur, tempat yang sebelumnya tidak pernah ada celah. Toko itu sempit, dicat hijau, dan papan di jendelanya bertuliskan: KAMI MENJUAL KETIADAAN."
      },
      {
        illustrationSeed: "nothing-2",
        textEn: "Inside there were shelves, and on the shelves there were jars, and in the jars there was — as advertised — nothing at all. Each jar had a small handwritten label.",
        textId: "Di dalamnya ada rak-rak, dan di rak-rak itu ada toples, dan di dalam toples itu ada — persis seperti diiklankan — ketiadaan. Setiap toples punya label kecil yang ditulis tangan."
      },
      {
        illustrationSeed: "nothing-3",
        textEn: "A NIGHT WITH NOTHING TO WORRY ABOUT, said one. A MORNING WITH NOTHING TO RUSH FOR, said another. Bening read them all and said, \"But the jars are empty.\" The shopkeeper said, \"Yes. That is what you are buying.\"",
        textId: "SATU MALAM TANPA HAL YANG DICEMASKAN, tulis salah satunya. SATU PAGI TANPA HAL YANG DIKEJAR, tulis yang lain. Bening membaca semuanya lalu berkata, \"Tapi toplesnya kosong.\" Penjaga toko menjawab, \"Ya. Itulah yang kau beli.\""
      },
      {
        illustrationSeed: "nothing-4",
        textEn: "The prices were strange. A NIGHT WITH NOTHING TO WORRY ABOUT cost one worry, handed over. A MORNING WITH NOTHING TO RUSH FOR cost one appointment, cancelled. Everything was paid for in the thing it removed.",
        textId: "Harganya aneh. SATU MALAM TANPA HAL YANG DICEMASKAN berharga satu kecemasan, yang diserahkan. SATU PAGI TANPA HAL YANG DIKEJAR berharga satu janji temu, yang dibatalkan. Semuanya dibayar dengan hal yang dihilangkannya."
      },
      {
        illustrationSeed: "nothing-5",
        textEn: "Bening's mother came in the next day. She was carrying so many things that she had to put three of them down to open the door, and she stood in front of the shelves for a long time without speaking.",
        textId: "Ibu Bening datang keesokan harinya. Ia membawa begitu banyak barang sampai harus meletakkan tiga di antaranya untuk membuka pintu, dan ia berdiri lama di depan rak-rak itu tanpa berkata apa-apa."
      },
      {
        illustrationSeed: "nothing-6",
        textEn: "She bought AN AFTERNOON WITH NOTHING IN IT. The price was one afternoon of things she had agreed to do for people who had not thanked her. She paid it, and the shopkeeper wrapped the empty jar in brown paper.",
        textId: "Ia membeli SATU SORE YANG KOSONG. Harganya adalah satu sore penuh urusan yang ia sanggupi untuk orang-orang yang tidak berterima kasih. Ia membayarnya, dan penjaga toko membungkus toples kosong itu dengan kertas cokelat."
      },
      {
        illustrationSeed: "nothing-7",
        textEn: "That Sunday, Bening's mother did not do anything. She sat on the back step with a cup of tea going cold beside her and watched a bird on the fence for about forty minutes. It was the best afternoon of her year.",
        textId: "Minggu itu, ibu Bening tidak melakukan apa-apa. Ia duduk di anak tangga belakang dengan secangkir teh yang mendingin di sampingnya dan mengamati seekor burung di pagar selama sekitar empat puluh menit. Itu sore terbaik sepanjang tahunnya."
      },
      {
        illustrationSeed: "nothing-8",
        textEn: "On Monday the shop was gone. The gap between the baker and the barber had closed as if it had never been there, and the wall was old brick with moss on it, the way it had always been.",
        textId: "Pada hari Senin toko itu lenyap. Celah antara toko roti dan tukang cukur telah menutup seolah-olah tidak pernah ada, dan dindingnya adalah bata tua berlumut, seperti sedia kala."
      },
      {
        illustrationSeed: "nothing-9",
        textEn: "Bening still has the brown paper. And every few weeks her mother says, \"I think I shall have an afternoon with nothing in it,\" and goes and sits on the step. It turns out you do not actually need the shop.",
        textId: "Bening masih menyimpan kertas cokelat itu. Dan setiap beberapa minggu ibunya berkata, \"Sepertinya aku mau satu sore yang kosong,\" lalu pergi duduk di anak tangga. Ternyata kita tidak benar-benar membutuhkan toko itu."
      }
    ],
    quiz: [
      {
        questionEn: "What did the shop sell?",
        questionId: "Apa yang dijual toko itu?",
        optionsEn: ["Magic potions", "Jars of nothing", "Bread", "Old books"],
        optionsId: ["Ramuan sihir", "Toples berisi ketiadaan", "Roti", "Buku tua"],
        correctIndex: 1
      },
      {
        questionEn: "How did people pay?",
        questionId: "Bagaimana orang membayarnya?",
        optionsEn: ["With gold", "With the very thing being removed", "With songs", "It was free"],
        optionsId: ["Dengan emas", "Dengan hal yang justru dihilangkan itu", "Dengan lagu", "Gratis"],
        correctIndex: 1
      },
      {
        questionEn: "What did Bening's mother learn?",
        questionId: "Apa yang dipelajari ibu Bening?",
        optionsEn: ["To buy more jars", "That she can give herself an empty afternoon without the shop", "That the shop was a trick", "To work harder"],
        optionsId: ["Membeli lebih banyak toples", "Bahwa ia bisa memberi dirinya sore yang kosong tanpa toko itu", "Bahwa toko itu tipuan", "Bekerja lebih keras"],
        correctIndex: 1
      }
    ]
  }
];
