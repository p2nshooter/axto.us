/**
 * Story batch H — hand-written bilingual (EN/ID) read-aloud stories, appended
 * to the library. Batches only ever add; nothing existing is edited or merged.
 *
 * This batch adds a fourth book to seventeen shelves that were still at three:
 * bedtime, animals, dinosaur, space, learning, numbers, superheroes, vehicles,
 * humor, alphabet, fantasy, mystery, pirates, princess-knights, ocean-life,
 * jungle-safari and pets.
 */
import type { Story } from "./stories";

export const STORIES_BATCH_H: Story[] = [
  {
    slug: "the-blanket-that-was-too-short",
    titleEn: "The Blanket That Was Too Short",
    titleId: "Selimut yang Terlalu Pendek",
    descriptionEn: "Every night Rania's feet stuck out. Every night she pulled the blanket down and her shoulders got cold. Then Grandmother showed her what a blanket is really for.",
    descriptionId: "Setiap malam kaki Rania menyembul keluar. Setiap malam ia menarik selimut ke bawah dan bahunya jadi dingin. Lalu Nenek menunjukkan untuk apa sebenarnya sebuah selimut.",
    categorySlug: "bedtime",
    authorSlug: "siti-aminah",
    coverEmoji: "🛏️",
    coverPalette: "twilight",
    ageMin: 3,
    ageMax: 7,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "blanket-1",
        textEn: "Rania had grown three whole centimetres that year, which was very good news for Rania and very bad news for her blanket.",
        textId: "Rania sudah tumbuh tiga sentimeter penuh tahun itu — kabar yang sangat bagus untuk Rania dan sangat buruk untuk selimutnya."
      },
      {
        illustrationSeed: "blanket-2",
        textEn: "If she pulled it up to her chin, her feet came out at the bottom, pink and cold in the night air. If she pulled it down over her feet, her shoulders went bare.",
        textId: "Kalau ia menariknya sampai dagu, kakinya keluar di bawah, merah muda dan dingin diterpa udara malam. Kalau ia menariknya menutupi kaki, bahunya jadi terbuka."
      },
      {
        illustrationSeed: "blanket-3",
        textEn: "She tried curling up like a snail. That worked for about nine minutes, and then her knees complained and she stretched out again and the whole problem came back.",
        textId: "Ia mencoba meringkuk seperti siput. Itu berhasil sekitar sembilan menit, lalu lututnya protes, ia meluruskan badan lagi, dan seluruh masalahnya kembali."
      },
      {
        illustrationSeed: "blanket-4",
        textEn: "\"Nenek,\" she called down the hallway, \"my blanket is broken.\" Grandmother came in slowly, the way she always did, and sat on the edge of the bed.",
        textId: "\"Nenek,\" panggilnya ke ujung lorong, \"selimutku rusak.\" Nenek masuk perlahan, seperti biasa, lalu duduk di tepi ranjang."
      },
      {
        illustrationSeed: "blanket-5",
        textEn: "\"It is not broken,\" said Grandmother. \"It is exactly the same size it was in March. You are the thing that changed.\" She said it as if this were rather a nice fact.",
        textId: "\"Ia tidak rusak,\" kata Nenek. \"Ukurannya sama persis seperti bulan Maret. Kamulah yang berubah.\" Ia mengatakannya seolah itu fakta yang cukup menyenangkan."
      },
      {
        illustrationSeed: "blanket-6",
        textEn: "Grandmother went and came back with a second blanket, an old grey one that smelled faintly of cupboards. She laid it across the bottom of the bed, over Rania's feet, and tucked it in.",
        textId: "Nenek pergi lalu kembali membawa selimut kedua, selimut abu-abu tua yang samar berbau lemari. Ia membentangkannya di ujung ranjang, menutupi kaki Rania, dan menyelipkannya."
      },
      {
        illustrationSeed: "blanket-7",
        textEn: "\"Two blankets?\" said Rania. \"Two blankets,\" said Grandmother. \"When you outgrow something, you do not always throw it away. Sometimes you just add to it.\"",
        textId: "\"Dua selimut?\" tanya Rania. \"Dua selimut,\" jawab Nenek. \"Kalau kamu kekecilan memakai sesuatu, kamu tidak selalu harus membuangnya. Kadang kamu tinggal menambahnya.\""
      },
      {
        illustrationSeed: "blanket-8",
        textEn: "The grey blanket was scratchy and the blue one was soft, and where they overlapped in the middle there was a warm heavy stripe right across Rania's knees.",
        textId: "Selimut abu-abu itu agak kasar dan yang biru lembut, dan di tempat keduanya bertumpuk di tengah, ada garis hangat dan berat tepat melintang di lutut Rania."
      },
      {
        illustrationSeed: "blanket-9",
        textEn: "She fell asleep before Grandmother reached the door. In the morning both blankets were on the floor, which is what usually happens, and nobody minded at all.",
        textId: "Ia tertidur bahkan sebelum Nenek sampai di pintu. Pagi harinya kedua selimut itu ada di lantai, seperti biasanya, dan tak seorang pun mempermasalahkannya."
      }
    ],
    quiz: [
      {
        questionEn: "Why did the blanket stop fitting?",
        questionId: "Mengapa selimut itu jadi tidak muat?",
        optionsEn: ["It shrank in the wash", "Rania had grown taller", "The cat chewed it", "It was the wrong blanket"],
        optionsId: ["Menyusut saat dicuci", "Rania bertambah tinggi", "Digigit kucing", "Selimutnya tertukar"],
        correctIndex: 1
      },
      {
        questionEn: "What did Grandmother do?",
        questionId: "Apa yang Nenek lakukan?",
        optionsEn: ["Bought a new bed", "Added a second blanket at the foot", "Told her to curl up", "Cut the blanket in half"],
        optionsId: ["Membeli ranjang baru", "Menambah selimut kedua di ujung kaki", "Menyuruhnya meringkuk", "Memotong selimut jadi dua"],
        correctIndex: 1
      },
      {
        questionEn: "What did Grandmother say about outgrowing things?",
        questionId: "Apa kata Nenek tentang hal yang jadi kekecilan?",
        optionsEn: ["Always throw them away", "Sometimes you just add to them", "Never grow", "Give them to someone else"],
        optionsId: ["Selalu dibuang", "Kadang kamu tinggal menambahnya", "Jangan tumbuh", "Berikan pada orang lain"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-bear-who-counted-the-winter",
    titleEn: "The Bear Who Counted the Winter",
    titleId: "Beruang yang Menghitung Musim Dingin",
    descriptionEn: "Bara did not want to sleep through winter. He wanted to see it. So he stayed awake — and discovered why bears do not.",
    descriptionId: "Bara tidak ingin tidur melewati musim dingin. Ia ingin melihatnya. Maka ia tetap terjaga — dan menemukan alasan mengapa beruang tidak begitu.",
    categorySlug: "animals",
    authorSlug: "emily-clark",
    coverEmoji: "🐻",
    coverPalette: "night",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "barabear-1",
        textEn: "Every autumn Bara's mother said the same sentence: \"Eat well now, sleep long later.\" And every autumn Bara ate well and slept long and woke up in spring with no idea what had happened.",
        textId: "Setiap musim gugur ibu Bara mengucapkan kalimat yang sama: \"Makan yang banyak sekarang, tidur yang lama nanti.\" Dan setiap musim gugur Bara makan banyak, tidur lama, dan bangun di musim semi tanpa tahu apa yang telah terjadi."
      },
      {
        illustrationSeed: "barabear-2",
        textEn: "This year he decided he would stay awake and find out. He was seven, which he felt was old enough to see a whole winter with his own eyes.",
        textId: "Tahun ini ia memutuskan akan tetap terjaga dan mencari tahu. Umurnya tujuh, dan menurutnya itu cukup tua untuk melihat satu musim dingin penuh dengan matanya sendiri."
      },
      {
        illustrationSeed: "barabear-3",
        textEn: "The first week was wonderful. The snow came down in fat slow flakes and the whole valley went quiet, and Bara walked in it and made enormous footprints and was extremely pleased with himself.",
        textId: "Pekan pertama luar biasa. Salju turun dalam serpihan gemuk yang lamban, seluruh lembah jadi sunyi, dan Bara berjalan di dalamnya, membuat jejak kaki raksasa, dan sangat puas pada dirinya sendiri."
      },
      {
        illustrationSeed: "barabear-4",
        textEn: "The second week he was hungry. He went to the berry slope. There were no berries. He went to the fish river. There was no river, only a hard grey lid where the river used to be.",
        textId: "Pekan kedua ia lapar. Ia pergi ke lereng beri. Tidak ada beri. Ia pergi ke sungai ikan. Tidak ada sungai, hanya tutup kelabu keras di tempat sungai dulu berada."
      },
      {
        illustrationSeed: "barabear-5",
        textEn: "The third week he was very hungry, and also cold in a way he had never been before — a slow cold, that got in under his fur and sat there and would not leave.",
        textId: "Pekan ketiga ia sangat lapar, dan juga kedinginan dengan cara yang belum pernah ia rasakan — dingin yang lamban, yang menyusup ke bawah bulunya lalu menetap dan tak mau pergi."
      },
      {
        illustrationSeed: "barabear-6",
        textEn: "He counted the days on a rock with his claw. Nine. Then nineteen. Then he stopped counting, because the marks had reached the edge of the rock and there was a lot of winter left.",
        textId: "Ia menghitung hari di sebuah batu dengan cakarnya. Sembilan. Lalu sembilan belas. Lalu ia berhenti menghitung, karena goresannya sudah sampai tepi batu sementara musim dingin masih panjang."
      },
      {
        illustrationSeed: "barabear-7",
        textEn: "On the twenty-second night he went home. His mother did not say anything at all. She moved over and made room, and the den was warm in the exact way the outside was not.",
        textId: "Pada malam kedua puluh dua ia pulang. Ibunya tidak berkata apa-apa. Beliau bergeser memberi ruang, dan liang itu hangat persis seperti dunia luar tidak hangat."
      },
      {
        illustrationSeed: "barabear-8",
        textEn: "\"Did you see it?\" she asked, half asleep. \"I saw it,\" said Bara. \"It is beautiful and there is nothing to eat.\" \"Yes,\" said his mother. \"Both of those are true.\"",
        textId: "\"Kamu sudah melihatnya?\" tanya ibunya, setengah tertidur. \"Sudah,\" jawab Bara. \"Indah, dan tidak ada apa pun untuk dimakan.\" \"Ya,\" kata ibunya. \"Keduanya benar.\""
      },
      {
        illustrationSeed: "barabear-9",
        textEn: "He slept until the water started moving again under the ice. And every autumn after that he ate well without arguing, because now he knew exactly what he was eating well for.",
        textId: "Ia tidur sampai air mulai bergerak lagi di bawah es. Dan setiap musim gugur setelah itu ia makan banyak tanpa membantah, karena kini ia tahu persis untuk apa ia makan banyak."
      }
    ],
    quiz: [
      {
        questionEn: "Why did Bara stay awake?",
        questionId: "Mengapa Bara tetap terjaga?",
        optionsEn: ["He was not sleepy", "He wanted to see a whole winter himself", "He was afraid of the den", "He lost his way home"],
        optionsId: ["Ia tidak mengantuk", "Ia ingin melihat sendiri satu musim dingin penuh", "Ia takut pada liang", "Ia tersesat"],
        correctIndex: 1
      },
      {
        questionEn: "What did he find at the fish river?",
        questionId: "Apa yang ia temukan di sungai ikan?",
        optionsEn: ["Plenty of fish", "A hard grey lid of ice", "Another bear", "Berries"],
        optionsId: ["Banyak ikan", "Tutup es kelabu yang keras", "Beruang lain", "Buah beri"],
        correctIndex: 1
      },
      {
        questionEn: "What did Bara learn?",
        questionId: "Apa yang Bara pelajari?",
        optionsEn: ["Winter is boring", "Winter is beautiful and there is nothing to eat", "Mothers are wrong", "Snow tastes good"],
        optionsId: ["Musim dingin membosankan", "Musim dingin indah dan tak ada apa pun untuk dimakan", "Ibu selalu salah", "Salju enak dimakan"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-egg-that-would-not-hatch",
    titleEn: "The Egg That Would Not Hatch",
    titleId: "Telur yang Tak Mau Menetas",
    descriptionEn: "Six eggs hatched on the same morning. The seventh sat there for eleven more days, and the whole herd had opinions about it.",
    descriptionId: "Enam telur menetas di pagi yang sama. Yang ketujuh diam saja sebelas hari lagi, dan seluruh kawanan punya pendapat soal itu.",
    categorySlug: "dinosaur",
    authorSlug: "david-lee",
    coverEmoji: "🥚",
    coverPalette: "meadow",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "seventhegg-1",
        textEn: "In the nest at the edge of the fern flats there were seven eggs, and on one bright morning six of them cracked open almost together, like popcorn.",
        textId: "Di sarang di tepi dataran pakis ada tujuh telur, dan pada suatu pagi yang cerah enam di antaranya retak hampir bersamaan, seperti berondong jagung."
      },
      {
        illustrationSeed: "seventhegg-2",
        textEn: "Six small Maiasaura came out, damp and loud and immediately hungry, and they fell over each other and shouted and were generally a great success.",
        textId: "Enam Maiasaura kecil keluar, basah, berisik, dan langsung lapar; mereka jatuh menimpa satu sama lain, berteriak, dan secara umum sangat sukses."
      },
      {
        illustrationSeed: "seventhegg-3",
        textEn: "The seventh egg did nothing. It sat in the warm sand exactly as it had sat the day before, smooth and closed and completely silent.",
        textId: "Telur ketujuh tidak melakukan apa-apa. Ia duduk di pasir hangat persis seperti kemarin: mulus, tertutup, dan sepenuhnya bisu."
      },
      {
        illustrationSeed: "seventhegg-4",
        textEn: "\"That one is finished,\" said an old male from the next nest, not unkindly. \"It happens. Move it out and let the sand cool.\" Mother Maiasaura did not move it out.",
        textId: "\"Yang itu sudah selesai,\" kata seekor jantan tua dari sarang sebelah, tanpa maksud jahat. \"Itu biasa terjadi. Singkirkan saja agar pasirnya bisa mendingin.\" Ibu Maiasaura tidak menyingkirkannya."
      },
      {
        illustrationSeed: "seventhegg-5",
        textEn: "She turned it every morning. She banked the sand up around it every evening. The six noisy ones learned to walk, and then to run, and the seventh egg stayed exactly the same.",
        textId: "Ia membalik telur itu setiap pagi. Ia menimbunkan pasir di sekelilingnya setiap petang. Yang enam berisik itu belajar berjalan, lalu berlari, dan telur ketujuh tetap sama saja."
      },
      {
        illustrationSeed: "seventhegg-6",
        textEn: "On the eleventh day the six were away at the low ferns with the herd, and there was nobody at the nest at all except Mother, and one very small sound like a fingernail on a plate.",
        textId: "Pada hari kesebelas, keenam anaknya sedang di pakis rendah bersama kawanan, dan tak ada siapa pun di sarang selain Ibu, serta satu suara amat kecil seperti kuku menggores piring."
      },
      {
        illustrationSeed: "seventhegg-7",
        textEn: "The crack went across, then down, then all the way around. What came out was smaller than the others, and slower, and it looked at the world for a long time before it tried to stand.",
        textId: "Retakan itu melintang, lalu turun, lalu melingkar penuh. Yang keluar lebih kecil dari yang lain, lebih lambat, dan ia menatap dunia lama sekali sebelum mencoba berdiri."
      },
      {
        illustrationSeed: "seventhegg-8",
        textEn: "Her brothers and sisters came back at dusk and found a seventh child eating ferns very carefully, one frond at a time. They stared. Then they went back to shouting, because they were six.",
        textId: "Kakak-kakaknya pulang saat senja dan menemukan anak ketujuh sedang makan pakis dengan sangat hati-hati, satu helai demi satu helai. Mereka melongo. Lalu mereka kembali berteriak-teriak, karena mereka memang enam."
      },
      {
        illustrationSeed: "seventhegg-9",
        textEn: "She was always the slowest of the seven. She was also, every single season, the last one still standing at the edge of the water when everyone else had given up and gone home. Slow is not the same as weak.",
        textId: "Ia selalu yang paling lambat di antara tujuh bersaudara. Ia juga, setiap musim tanpa kecuali, yang paling akhir masih berdiri di tepi air saat semua yang lain menyerah dan pulang. Lambat tidak sama dengan lemah."
      }
    ],
    quiz: [
      {
        questionEn: "How many eggs hatched on the first morning?",
        questionId: "Berapa telur yang menetas pada pagi pertama?",
        optionsEn: ["Seven", "Six", "Three", "One"],
        optionsId: ["Tujuh", "Enam", "Tiga", "Satu"],
        correctIndex: 1
      },
      {
        questionEn: "What did the old male suggest?",
        questionId: "Apa saran jantan tua itu?",
        optionsEn: ["Keep turning it", "Move the last egg out", "Sit on it harder", "Take it to the river"],
        optionsId: ["Terus membaliknya", "Singkirkan telur terakhir itu", "Menduduki lebih kuat", "Bawa ke sungai"],
        correctIndex: 1
      },
      {
        questionEn: "What was the seventh child like?",
        questionId: "Bagaimana anak ketujuh itu?",
        optionsEn: ["The loudest", "The biggest", "The slowest, but the one with the most endurance", "Exactly like the others"],
        optionsId: ["Paling berisik", "Paling besar", "Paling lambat, tapi paling tahan lama", "Persis seperti yang lain"],
        correctIndex: 2
      }
    ]
  },

  {
    slug: "the-girl-who-named-a-crater",
    titleEn: "The Girl Who Named a Crater",
    titleId: "Gadis yang Menamai Sebuah Kawah",
    descriptionEn: "Dita's drawing of the Moon was wrong in one small place. Everyone said she had made a mistake. The telescope said otherwise.",
    descriptionId: "Gambar Bulan buatan Dita salah di satu tempat kecil. Semua orang bilang ia keliru. Teleskop berkata lain.",
    categorySlug: "space",
    authorSlug: "sarah-johnson",
    coverEmoji: "🌙",
    coverPalette: "night",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "craterdita-1",
        textEn: "Dita drew the Moon every clear night from the flat roof, using a pencil and a piece of card, and by October she had ninety-one drawings held together with a bulldog clip.",
        textId: "Dita menggambar Bulan setiap malam yang cerah dari atap datar rumahnya, dengan pensil dan sepotong karton, dan pada bulan Oktober ia sudah punya sembilan puluh satu gambar yang dijepit dengan penjepit besar."
      },
      {
        illustrationSeed: "craterdita-2",
        textEn: "She was not an artist. Her Moons were lumpy. But she was careful, and she always drew what she saw rather than what she expected to see, which turns out to be a rare skill.",
        textId: "Ia bukan seniman. Bulan-bulan buatannya benjol-benjol. Tapi ia teliti, dan ia selalu menggambar apa yang ia lihat, bukan apa yang ia kira akan terlihat — dan ternyata itu keahlian yang langka."
      },
      {
        illustrationSeed: "craterdita-3",
        textEn: "In drawing sixty-four there was a small dark ring near the bottom edge that was not on the Moon map in her school library book. She checked. It was not there. She drew it again the next night. It was still there.",
        textId: "Di gambar keenam puluh empat ada cincin gelap kecil dekat tepi bawah yang tidak ada di peta Bulan dalam buku perpustakaan sekolahnya. Ia memeriksanya. Memang tidak ada. Ia menggambarnya lagi malam berikutnya. Ia masih di sana."
      },
      {
        illustrationSeed: "craterdita-4",
        textEn: "Her teacher said kindly that the Moon is very hard to draw and that everybody adds a crater sometimes. Her brother said she had smudged it. Her mother said it was probably a fingerprint.",
        textId: "Gurunya berkata dengan lembut bahwa Bulan sangat sulit digambar dan semua orang kadang menambah kawah. Kakaknya bilang ia mengotorinya. Ibunya bilang itu mungkin sidik jari."
      },
      {
        illustrationSeed: "craterdita-5",
        textEn: "So Dita did the only sensible thing left: she wrote to the university observatory, put all four of the drawings in the envelope, and posted it with her own pocket money.",
        textId: "Maka Dita melakukan satu-satunya hal masuk akal yang tersisa: ia menulis surat ke observatorium universitas, memasukkan keempat gambarnya ke amplop, dan mengirimkannya dengan uang sakunya sendiri."
      },
      {
        illustrationSeed: "craterdita-6",
        textEn: "Six weeks later a woman named Dr Lestari telephoned the house and asked to speak to \"the astronomer\", and Dita's mother had to sit down before she could pass over the phone.",
        textId: "Enam pekan kemudian seorang perempuan bernama Dr. Lestari menelepon ke rumah dan minta bicara dengan \"sang astronom\", dan ibu Dita harus duduk dulu sebelum bisa menyerahkan gagang telepon."
      },
      {
        illustrationSeed: "craterdita-7",
        textEn: "The ring was real. It was a very small crater, too small for the old library map, and it sat right on the edge where the Moon tilts slightly and only shows itself a few nights a year.",
        textId: "Cincin itu nyata. Itu kawah yang sangat kecil, terlalu kecil untuk peta perpustakaan yang lama, dan letaknya tepat di tepi tempat Bulan sedikit miring dan hanya menampakkan diri beberapa malam dalam setahun."
      },
      {
        illustrationSeed: "craterdita-8",
        textEn: "It already had a name, because grown-up astronomers had catalogued it years before. Dita was not the first person to see it. She was just the first person in her whole town, and she had done it with a pencil.",
        textId: "Kawah itu sudah punya nama, karena para astronom dewasa telah mengatalogkannya bertahun-tahun sebelumnya. Dita bukan orang pertama yang melihatnya. Ia hanya orang pertama di seluruh kotanya, dan ia melakukannya dengan pensil."
      },
      {
        illustrationSeed: "craterdita-9",
        textEn: "Dr Lestari sent her a proper Moon map, the big kind, with everything on it. Dita put it on the wall. Then she went back up to the roof, because there was a night sky up there and only ninety-one drawings so far.",
        textId: "Dr. Lestari mengiriminya peta Bulan yang benar, yang besar, lengkap dengan semuanya. Dita menempelkannya di dinding. Lalu ia naik lagi ke atap, karena di sana ada langit malam dan gambarnya baru sembilan puluh satu."
      }
    ],
    quiz: [
      {
        questionEn: "What made Dita's drawings unusual?",
        questionId: "Apa yang membuat gambar Dita istimewa?",
        optionsEn: ["They were beautiful", "She drew what she saw, not what she expected", "She used paint", "She copied the book"],
        optionsId: ["Gambarnya indah", "Ia menggambar apa yang dilihat, bukan yang diduga", "Ia memakai cat", "Ia menyalin dari buku"],
        correctIndex: 1
      },
      {
        questionEn: "What did people say about the small dark ring?",
        questionId: "Apa kata orang-orang tentang cincin gelap kecil itu?",
        optionsEn: ["That it was a discovery", "That it was a mistake, a smudge or a fingerprint", "That it was dangerous", "Nothing at all"],
        optionsId: ["Bahwa itu penemuan", "Bahwa itu kekeliruan, noda, atau sidik jari", "Bahwa itu berbahaya", "Tidak berkomentar"],
        correctIndex: 1
      },
      {
        questionEn: "Was Dita the first person ever to see the crater?",
        questionId: "Apakah Dita orang pertama yang pernah melihat kawah itu?",
        optionsEn: ["Yes, in all history", "No, but she was the first in her town, using a pencil", "No, and nobody believed her", "The story does not say"],
        optionsId: ["Ya, sepanjang sejarah", "Bukan, tapi ia yang pertama di kotanya, dengan pensil", "Bukan, dan tak ada yang percaya", "Ceritanya tidak menyebutkan"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-question-box",
    titleEn: "The Question Box",
    titleId: "Kotak Pertanyaan",
    descriptionEn: "Bu Ratna put a wooden box at the back of the class for questions nobody wanted to ask out loud. By November it had changed the whole room.",
    descriptionId: "Bu Ratna menaruh kotak kayu di belakang kelas untuk pertanyaan yang tak berani ditanyakan keras-keras. Pada November, kotak itu telah mengubah seluruh ruangan.",
    categorySlug: "learning",
    authorSlug: "siti-aminah",
    coverEmoji: "📦",
    coverPalette: "citrus",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "questionbox-1",
        textEn: "On the first day of term Bu Ratna put a small wooden box on the shelf at the back with a slot cut in the lid, and wrote on the front: QUESTIONS. NO NAMES NEEDED.",
        textId: "Pada hari pertama semester, Bu Ratna menaruh kotak kayu kecil di rak belakang dengan celah di tutupnya, dan menulis di bagian depan: PERTANYAAN. TIDAK PERLU NAMA."
      },
      {
        illustrationSeed: "questionbox-2",
        textEn: "\"Every Friday,\" she said, \"I will take out whatever is in here and answer it. I will not try to guess who wrote it. If I do not know the answer I will say so.\"",
        textId: "\"Setiap Jumat,\" katanya, \"saya akan mengeluarkan apa pun yang ada di dalamnya dan menjawabnya. Saya tidak akan menebak siapa penulisnya. Kalau saya tidak tahu jawabannya, saya akan bilang begitu.\""
      },
      {
        illustrationSeed: "questionbox-3",
        textEn: "For two weeks the box was empty. On the third Friday there was one folded scrap of paper in it, and it said: what happens if you swallow chewing gum.",
        textId: "Selama dua pekan kotak itu kosong. Pada Jumat ketiga ada satu sobekan kertas terlipat di dalamnya, bertuliskan: apa yang terjadi kalau permen karet tertelan."
      },
      {
        illustrationSeed: "questionbox-4",
        textEn: "Bu Ratna answered it completely seriously, with a diagram, for eight minutes. Nobody laughed. The following Friday there were nine papers in the box.",
        textId: "Bu Ratna menjawabnya dengan sepenuhnya serius, lengkap dengan diagram, selama delapan menit. Tak ada yang tertawa. Jumat berikutnya ada sembilan lembar kertas di kotak itu."
      },
      {
        illustrationSeed: "questionbox-5",
        textEn: "Why is the sea salty. Why do people get divorced. How do you know if a friend is really a friend. What is inside the sun. Why did my grandfather forget my name.",
        textId: "Mengapa laut asin. Mengapa orang bercerai. Bagaimana tahu seorang teman benar-benar teman. Apa isi matahari. Mengapa kakek lupa namaku."
      },
      {
        illustrationSeed: "questionbox-6",
        textEn: "Some of them she answered in one line. Some took the whole lesson. Three times that term she said, \"I do not know, and I am going to find out,\" and three times she came back the next week with the answer.",
        textId: "Sebagian ia jawab dalam satu kalimat. Sebagian menghabiskan satu jam pelajaran. Tiga kali pada semester itu ia berkata, \"Saya tidak tahu, dan saya akan mencari tahu,\" dan tiga kali pula ia kembali pekan berikutnya membawa jawabannya."
      },
      {
        illustrationSeed: "questionbox-7",
        textEn: "Something else began to happen, slowly. Children who had never once put up a hand started putting up a hand, because it turned out the hard part had never been the answer. The hard part was asking in front of everyone.",
        textId: "Sesuatu yang lain mulai terjadi, perlahan. Anak-anak yang tak pernah sekali pun mengangkat tangan mulai mengangkat tangan, karena ternyata bagian yang sulit bukanlah jawabannya. Bagian yang sulit adalah bertanya di depan semua orang."
      },
      {
        illustrationSeed: "questionbox-8",
        textEn: "By November the box was half empty again, and Bu Ratna was very pleased about it, which the class found extremely confusing until she explained why.",
        textId: "Pada November kotak itu setengah kosong lagi, dan Bu Ratna sangat senang karenanya — sesuatu yang membingungkan seluruh kelas sampai beliau menjelaskan alasannya."
      },
      {
        illustrationSeed: "questionbox-9",
        textEn: "\"You are asking me directly now,\" she said. \"The box was never the point. The box was a bridge. You have walked across it.\" She left it on the shelf anyway. Some Fridays there was still one paper inside, and that was fine too.",
        textId: "\"Sekarang kalian bertanya langsung pada saya,\" katanya. \"Kotak itu tak pernah jadi intinya. Kotak itu jembatan. Kalian sudah menyeberanginya.\" Ia tetap membiarkannya di rak. Beberapa hari Jumat masih ada satu kertas di dalamnya, dan itu pun tak apa-apa."
      }
    ],
    quiz: [
      {
        questionEn: "What was written on the box?",
        questionId: "Apa yang tertulis di kotak itu?",
        optionsEn: ["HOMEWORK", "QUESTIONS. NO NAMES NEEDED.", "LOST PROPERTY", "QUIET PLEASE"],
        optionsId: ["PEKERJAAN RUMAH", "PERTANYAAN. TIDAK PERLU NAMA.", "BARANG HILANG", "HARAP TENANG"],
        correctIndex: 1
      },
      {
        questionEn: "What did Bu Ratna do when she did not know an answer?",
        questionId: "Apa yang Bu Ratna lakukan saat tidak tahu jawabannya?",
        optionsEn: ["Made something up", "Said so, and came back the next week with it", "Ignored the question", "Asked the class to answer"],
        optionsId: ["Mengarang jawaban", "Mengakuinya, lalu kembali pekan berikutnya membawa jawaban", "Mengabaikan pertanyaannya", "Menyuruh kelas menjawab"],
        correctIndex: 1
      },
      {
        questionEn: "Why was she pleased the box grew emptier?",
        questionId: "Mengapa ia senang kotak itu makin kosong?",
        optionsEn: ["Less work for her", "The class was now asking her directly", "The questions had run out", "She wanted to remove it"],
        optionsId: ["Pekerjaannya berkurang", "Kelas kini bertanya langsung padanya", "Pertanyaannya sudah habis", "Ia ingin menyingkirkannya"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-baker-who-ran-out-of-fingers",
    titleEn: "The Baker Who Ran Out of Fingers",
    titleId: "Tukang Roti yang Kehabisan Jari",
    descriptionEn: "Pak Umar counted every order on his fingers. Then somebody ordered forty-two buns, and the whole bakery had to learn a better way.",
    descriptionId: "Pak Umar menghitung setiap pesanan dengan jarinya. Lalu seseorang memesan empat puluh dua roti, dan seluruh toko roti harus belajar cara yang lebih baik.",
    categorySlug: "numbers",
    authorSlug: "axto-creative-team",
    coverEmoji: "🥐",
    coverPalette: "sunrise",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "bakerfingers-1",
        textEn: "Pak Umar's bakery was small and warm and smelled of butter, and Pak Umar counted absolutely everything on his fingers, which worked perfectly well up to ten.",
        textId: "Toko roti Pak Umar kecil, hangat, dan berbau mentega, dan Pak Umar menghitung segala sesuatu dengan jarinya — yang bekerja sangat baik sampai angka sepuluh."
      },
      {
        illustrationSeed: "bakerfingers-2",
        textEn: "Eleven was already a problem. For eleven he used ten fingers and one raised eyebrow. For thirteen he used ten fingers, one eyebrow, and his left foot.",
        textId: "Sebelas sudah jadi masalah. Untuk sebelas ia memakai sepuluh jari dan satu alis terangkat. Untuk tiga belas ia memakai sepuluh jari, satu alis, dan kaki kirinya."
      },
      {
        illustrationSeed: "bakerfingers-3",
        textEn: "Then one Thursday a woman came in and said, quite calmly, \"Forty-two buns for the wedding, please,\" and Pak Umar looked at his hands and knew that this time the hands were not going to be enough.",
        textId: "Lalu pada suatu Kamis seorang perempuan masuk dan berkata dengan tenang, \"Empat puluh dua roti untuk pernikahan, ya,\" dan Pak Umar menatap tangannya dan tahu bahwa kali ini tangannya tidak akan cukup."
      },
      {
        illustrationSeed: "bakerfingers-4",
        textEn: "His daughter Nia was six, and she was sitting on the flour sack watching. \"Use the trays,\" she said. \"Every tray holds six. You always say so.\"",
        textId: "Putrinya, Nia, berumur enam tahun, dan ia sedang duduk di atas karung tepung sambil memperhatikan. \"Pakai loyang,\" katanya. \"Setiap loyang muat enam. Ayah selalu bilang begitu.\""
      },
      {
        illustrationSeed: "bakerfingers-5",
        textEn: "So they did it with trays. One tray, six. Two trays, twelve. Three trays, eighteen. Nia counted out loud and Pak Umar slid each tray into the rack, and the number climbed without a single finger being used.",
        textId: "Maka mereka memakai loyang. Satu loyang, enam. Dua loyang, dua belas. Tiga loyang, delapan belas. Nia menghitung keras-keras dan Pak Umar menyorongkan tiap loyang ke rak, dan angkanya naik tanpa satu jari pun terpakai."
      },
      {
        illustrationSeed: "bakerfingers-6",
        textEn: "At seven trays they had forty-two exactly. Pak Umar stared at the rack for a moment. \"Seven sixes,\" he said. \"Forty-two. Every time?\" \"Every time,\" said Nia.",
        textId: "Pada loyang ketujuh mereka mendapat tepat empat puluh dua. Pak Umar menatap rak itu sejenak. \"Tujuh kali enam,\" katanya. \"Empat puluh dua. Selalu begitu?\" \"Selalu,\" jawab Nia."
      },
      {
        illustrationSeed: "bakerfingers-7",
        textEn: "After that the bakery ran on sixes. Ninety buns for the school? Fifteen trays. Twenty-four for the office? Four trays. Pak Umar never had to raise an eyebrow at a number again.",
        textId: "Setelah itu toko roti itu berjalan dengan enam-enaman. Sembilan puluh roti untuk sekolah? Lima belas loyang. Dua puluh empat untuk kantor? Empat loyang. Pak Umar tak pernah lagi harus mengangkat alis pada sebuah angka."
      },
      {
        illustrationSeed: "bakerfingers-8",
        textEn: "He did keep counting the coins on his fingers, though, because coins do not come in trays and because he had had those fingers a very long time and was fond of them.",
        textId: "Meski begitu, ia tetap menghitung uang koin dengan jarinya, karena koin tidak datang dalam loyang dan karena jari-jari itu sudah lama menemaninya dan ia menyayanginya."
      },
      {
        illustrationSeed: "bakerfingers-9",
        textEn: "And Nia got the job of shouting the tray numbers, which she did extremely loudly, every morning, for the next four years.",
        textId: "Dan Nia mendapat tugas meneriakkan jumlah loyang — yang ia lakukan dengan sangat keras, setiap pagi, selama empat tahun berikutnya."
      }
    ],
    quiz: [
      {
        questionEn: "How many buns fit on one tray?",
        questionId: "Berapa roti yang muat dalam satu loyang?",
        optionsEn: ["Four", "Six", "Ten", "Twelve"],
        optionsId: ["Empat", "Enam", "Sepuluh", "Dua belas"],
        correctIndex: 1
      },
      {
        questionEn: "How many trays made forty-two buns?",
        questionId: "Berapa loyang untuk empat puluh dua roti?",
        optionsEn: ["Six", "Seven", "Eight", "Nine"],
        optionsId: ["Enam", "Tujuh", "Delapan", "Sembilan"],
        correctIndex: 1
      },
      {
        questionEn: "What did Pak Umar still count on his fingers?",
        questionId: "Apa yang tetap Pak Umar hitung dengan jarinya?",
        optionsEn: ["Buns", "Trays", "Coins", "Customers"],
        optionsId: ["Roti", "Loyang", "Uang koin", "Pembeli"],
        correctIndex: 2
      }
    ]
  },

  {
    slug: "the-hero-who-was-very-tired",
    titleEn: "The Hero Who Was Very Tired",
    titleId: "Pahlawan yang Sangat Lelah",
    descriptionEn: "Nightwing Nia saved the city four hundred times without stopping. On the four hundred and first she fell asleep on a roof, and the city had to save her back.",
    descriptionId: "Nightwing Nia menyelamatkan kota empat ratus kali tanpa berhenti. Pada kali keempat ratus satu ia tertidur di atap, dan giliran kota yang menyelamatkannya.",
    categorySlug: "superheroes",
    authorSlug: "david-lee",
    coverEmoji: "🦸",
    coverPalette: "dusk",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "tiredhero-1",
        textEn: "Nightwing Nia had stopped two floods, one runaway tram, sixty-one thieves and a very great number of cats that had misjudged the height of trees.",
        textId: "Nightwing Nia telah menghentikan dua banjir, satu trem yang lepas kendali, enam puluh satu pencuri, dan sejumlah besar sekali kucing yang salah memperkirakan tinggi pohon."
      },
      {
        illustrationSeed: "tiredhero-2",
        textEn: "She had also not slept properly since March. She had a system: two hours here, twenty minutes there, and a great deal of very strong coffee.",
        textId: "Ia juga belum tidur nyenyak sejak Maret. Ia punya sistem: dua jam di sini, dua puluh menit di sana, dan sangat banyak kopi yang sangat pekat."
      },
      {
        illustrationSeed: "tiredhero-3",
        textEn: "The system stopped working on a Tuesday. She flew to a small fire on Jalan Melati, put it out, sat down on the roof next door for one second, and did not get up.",
        textId: "Sistem itu berhenti bekerja pada suatu Selasa. Ia terbang ke kebakaran kecil di Jalan Melati, memadamkannya, duduk sebentar di atap sebelah — dan tidak bangun lagi."
      },
      {
        illustrationSeed: "tiredhero-4",
        textEn: "Pak Yusuf on the third floor saw her first, through his kitchen window: the city's hero, asleep sitting up, with her cape over one shoulder and her chin on her chest.",
        textId: "Pak Yusuf di lantai tiga yang pertama melihatnya, dari jendela dapurnya: pahlawan kota itu, tertidur dalam posisi duduk, jubahnya tersampir di satu bahu dan dagunya menempel di dada."
      },
      {
        illustrationSeed: "tiredhero-5",
        textEn: "He did not shout. He did not film her. He went next door and told Ibu Ning, and Ibu Ning told the warung, and within twenty minutes the whole street knew and the whole street was being quiet on purpose.",
        textId: "Ia tidak berteriak. Ia tidak merekamnya. Ia pergi ke rumah sebelah dan memberi tahu Ibu Ning, Ibu Ning memberi tahu warung, dan dalam dua puluh menit seluruh jalan itu tahu — dan seluruh jalan itu sengaja bersikap tenang."
      },
      {
        illustrationSeed: "tiredhero-6",
        textEn: "The motorbikes took the long way round. The recycling man carried his bottles instead of dragging them. Somebody's grandmother went up with a blanket and put it over the hero's knees and came straight back down.",
        textId: "Sepeda-sepeda motor mengambil jalan memutar. Tukang barang bekas menggendong botolnya alih-alih menyeretnya. Nenek seseorang naik membawa selimut, menyelimuti lutut sang pahlawan, lalu langsung turun lagi."
      },
      {
        illustrationSeed: "tiredhero-7",
        textEn: "She slept for eleven hours. When she woke it was dark and there was a plate beside her with rice and egg on it, gone cold, and a note that said only: WE MANAGED. GO BACK TO SLEEP.",
        textId: "Ia tidur sebelas jam. Saat terbangun hari sudah gelap, dan di sampingnya ada piring berisi nasi dan telur yang sudah dingin, serta secarik pesan yang hanya bertuliskan: KAMI BISA. TIDUR LAGI SAJA."
      },
      {
        illustrationSeed: "tiredhero-8",
        textEn: "She sat on that roof for a long while, eating cold rice in the dark, and thinking about how many times she had told other people to rest, and how she had never once meant herself.",
        textId: "Ia duduk lama di atap itu, makan nasi dingin dalam gelap, sambil memikirkan berapa kali ia menyuruh orang lain beristirahat — dan bagaimana ia tak pernah sekali pun memaksudkan dirinya sendiri."
      },
      {
        illustrationSeed: "tiredhero-9",
        textEn: "After that Nightwing Nia flew four nights a week instead of seven. The city did not fall apart. It turned out the city had been quite good at looking after itself all along, and even better at looking after her.",
        textId: "Setelah itu Nightwing Nia terbang empat malam seminggu, bukan tujuh. Kota itu tidak runtuh. Ternyata kota itu selama ini cukup pandai menjaga dirinya sendiri — dan bahkan lebih pandai lagi menjaganya."
      }
    ],
    quiz: [
      {
        questionEn: "Why did Nia fall asleep on the roof?",
        questionId: "Mengapa Nia tertidur di atap?",
        optionsEn: ["She was hurt", "She had not slept properly for months", "She was hiding", "She was waiting for someone"],
        optionsId: ["Ia terluka", "Ia belum tidur nyenyak berbulan-bulan", "Ia bersembunyi", "Ia menunggu seseorang"],
        correctIndex: 1
      },
      {
        questionEn: "What did the neighbours do?",
        questionId: "Apa yang dilakukan para tetangga?",
        optionsEn: ["Woke her up", "Kept the street quiet and brought her a blanket and food", "Called the police", "Took photographs"],
        optionsId: ["Membangunkannya", "Menjaga jalan tetap tenang, memberinya selimut dan makanan", "Memanggil polisi", "Memotretnya"],
        correctIndex: 1
      },
      {
        questionEn: "What did she change afterwards?",
        questionId: "Apa yang ia ubah setelah itu?",
        optionsEn: ["She stopped being a hero", "She flew four nights a week instead of seven", "She moved to another city", "She drank more coffee"],
        optionsId: ["Ia berhenti jadi pahlawan", "Ia terbang empat malam seminggu, bukan tujuh", "Ia pindah kota", "Ia minum kopi lebih banyak"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-train-that-learned-to-wait",
    titleEn: "The Train That Learned to Wait",
    titleId: "Kereta yang Belajar Menunggu",
    descriptionEn: "Engine 12 was proud of never being late. Then one morning a small boy was running down the platform, and the clock said go.",
    descriptionId: "Lokomotif 12 bangga tak pernah terlambat. Lalu suatu pagi seorang anak berlari di peron, dan jam berkata: berangkat.",
    categorySlug: "vehicles",
    authorSlug: "axto-creative-team",
    coverEmoji: "🚂",
    coverPalette: "sunrise",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "engine12-1",
        textEn: "Engine 12 ran the valley line, four times up and four times down, and in nine years it had never once left a station late. Not by a minute. Not by ten seconds.",
        textId: "Lokomotif 12 melayani jalur lembah, empat kali naik dan empat kali turun, dan dalam sembilan tahun ia tak pernah sekali pun berangkat terlambat. Tidak semenit. Tidak sepuluh detik."
      },
      {
        illustrationSeed: "engine12-2",
        textEn: "This was the thing Engine 12 was most proud of. The driver, Bu Wati, had a little brass plate in the cab that said ON TIME, EVERY TIME, and she polished it on Sundays.",
        textId: "Itulah hal yang paling dibanggakan Lokomotif 12. Sang masinis, Bu Wati, punya pelat kuningan kecil di kabin bertuliskan TEPAT WAKTU, SELALU, dan ia menggosoknya setiap Minggu."
      },
      {
        illustrationSeed: "engine12-3",
        textEn: "One wet Monday at Stasiun Kemuning, the clock reached 6:14 exactly, and Bu Wati put her hand on the lever, and down at the far end of the platform a boy started running.",
        textId: "Pada suatu Senin yang basah di Stasiun Kemuning, jam menunjuk tepat 06.14, Bu Wati meletakkan tangannya di tuas, dan di ujung peron sana seorang anak mulai berlari."
      },
      {
        illustrationSeed: "engine12-4",
        textEn: "He was small and his bag was too big and one shoe was undone and he was not going to make it, and everybody on the platform could see that he was not going to make it.",
        textId: "Ia kecil, tasnya kebesaran, satu sepatunya lepas talinya, dan ia tidak akan sampai tepat waktu — dan semua orang di peron bisa melihat bahwa ia tidak akan sampai."
      },
      {
        illustrationSeed: "engine12-5",
        textEn: "Bu Wati looked at the clock. She looked at the boy. She took her hand off the lever and folded her arms, and Engine 12 sat there and hissed quietly and did not move.",
        textId: "Bu Wati menatap jam. Ia menatap anak itu. Ia melepaskan tangannya dari tuas dan melipat tangannya, dan Lokomotif 12 diam di sana, mendesis pelan, tidak bergerak."
      },
      {
        illustrationSeed: "engine12-6",
        textEn: "The boy fell over near the third carriage. A man picked him up by the back of his shirt without breaking stride and put him through the door, bag and all.",
        textId: "Anak itu terjatuh dekat gerbong ketiga. Seorang lelaki mengangkatnya dari belakang kerah bajunya tanpa memperlambat langkah dan memasukkannya lewat pintu, lengkap dengan tasnya."
      },
      {
        illustrationSeed: "engine12-7",
        textEn: "The doors closed at 6:14 and forty seconds. Engine 12 pulled out of Kemuning late for the first time in nine years, and it felt very strange, like a note played slightly wrong.",
        textId: "Pintu tertutup pada 06.14 lewat empat puluh detik. Lokomotif 12 meninggalkan Kemuning terlambat untuk pertama kalinya dalam sembilan tahun, dan rasanya sangat aneh, seperti nada yang dimainkan sedikit meleset."
      },
      {
        illustrationSeed: "engine12-8",
        textEn: "At the depot that evening the supervisor came over with his clipboard. \"Forty seconds,\" he said. \"Forty seconds,\" agreed Bu Wati. He looked at her. Then he wrote nothing down at all and walked away.",
        textId: "Di depo malam itu, sang pengawas datang membawa papan jepitnya. \"Empat puluh detik,\" katanya. \"Empat puluh detik,\" Bu Wati mengiyakan. Ia menatap Bu Wati. Lalu ia tidak menuliskan apa pun dan pergi begitu saja."
      },
      {
        illustrationSeed: "engine12-9",
        textEn: "Bu Wati kept the brass plate. But she added a second one underneath it, much smaller, that she made herself out of an old spoon. It said: UNLESS SOMEBODY IS RUNNING.",
        textId: "Bu Wati tetap menyimpan pelat kuningan itu. Tapi ia menambahkan satu lagi di bawahnya, jauh lebih kecil, yang ia buat sendiri dari sendok bekas. Bunyinya: KECUALI ADA YANG SEDANG BERLARI."
      }
    ],
    quiz: [
      {
        questionEn: "What was Engine 12 proudest of?",
        questionId: "Apa yang paling dibanggakan Lokomotif 12?",
        optionsEn: ["Being the fastest", "Never leaving late", "Being the newest", "Carrying the most people"],
        optionsId: ["Jadi yang tercepat", "Tak pernah berangkat terlambat", "Jadi yang terbaru", "Mengangkut orang terbanyak"],
        correctIndex: 1
      },
      {
        questionEn: "How late did the train leave?",
        questionId: "Berapa lama kereta itu terlambat?",
        optionsEn: ["Ten minutes", "Forty seconds", "An hour", "It did not leave"],
        optionsId: ["Sepuluh menit", "Empat puluh detik", "Satu jam", "Ia tidak berangkat"],
        correctIndex: 1
      },
      {
        questionEn: "What did the second brass plate say?",
        questionId: "Apa bunyi pelat kuningan kedua?",
        optionsEn: ["TRY HARDER", "UNLESS SOMEBODY IS RUNNING", "ON TIME, EVERY TIME", "MIND THE DOORS"],
        optionsId: ["BERUSAHA LEBIH KERAS", "KECUALI ADA YANG SEDANG BERLARI", "TEPAT WAKTU, SELALU", "AWAS PINTU"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-day-the-soup-said-no",
    titleEn: "The Day the Soup Said No",
    titleId: "Hari Ketika Sup Berkata Tidak",
    descriptionEn: "Everything in Tomo's kitchen started arguing at once. The soup refused to be soup, the bread wanted to be a hat, and dinner was in serious trouble.",
    descriptionId: "Semua benda di dapur Tomo tiba-tiba berdebat. Sup menolak jadi sup, roti ingin jadi topi, dan makan malam berada dalam bahaya besar.",
    categorySlug: "humor",
    authorSlug: "emily-clark",
    coverEmoji: "🍲",
    coverPalette: "citrus",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "soupno-1",
        textEn: "Tomo was stirring the soup when the soup said, extremely clearly, \"No.\" Tomo stopped stirring. \"No what?\" he said. \"No soup,\" said the soup. \"I have decided to be a lake.\"",
        textId: "Tomo sedang mengaduk sup ketika sup itu berkata dengan sangat jelas, \"Tidak.\" Tomo berhenti mengaduk. \"Tidak apa?\" tanyanya. \"Tidak mau jadi sup,\" jawab sup itu. \"Aku sudah memutuskan jadi danau.\""
      },
      {
        illustrationSeed: "soupno-2",
        textEn: "\"You are in a pot,\" said Tomo. \"A small lake,\" said the soup, with dignity. Behind him the bread rolled off the board and announced that it would be a hat from now on and got onto the cat.",
        textId: "\"Kamu ada di panci,\" kata Tomo. \"Danau kecil,\" jawab sup itu penuh wibawa. Di belakangnya, roti menggelinding turun dari talenan, mengumumkan bahwa mulai sekarang ia jadi topi, lalu naik ke kepala kucing."
      },
      {
        illustrationSeed: "soupno-3",
        textEn: "The cat, who had never had opinions about anything before, said that on the whole she preferred to be a hat rather than to wear one, and lay down flat on top of the rice cooker.",
        textId: "Kucing itu, yang belum pernah punya pendapat tentang apa pun, berkata bahwa secara keseluruhan ia lebih suka menjadi topi ketimbang memakai topi, lalu berbaring mendatar di atas penanak nasi."
      },
      {
        illustrationSeed: "soupno-4",
        textEn: "The carrots refused to be chopped on the grounds that they had already been pulled out of the ground once that week and there is a limit. The spoon left the room entirely.",
        textId: "Wortel-wortel menolak dipotong dengan alasan mereka sudah dicabut dari tanah sekali pekan itu dan ada batasnya. Sendok pergi keluar ruangan sama sekali."
      },
      {
        illustrationSeed: "soupno-5",
        textEn: "\"Right,\" said Tomo, who was seven and therefore used to negotiating. He sat down on the kitchen floor. \"If nobody is going to be dinner, what is everybody going to be?\"",
        textId: "\"Baiklah,\" kata Tomo, yang berumur tujuh tahun dan karenanya terbiasa bernegosiasi. Ia duduk di lantai dapur. \"Kalau tidak ada yang mau jadi makan malam, semuanya mau jadi apa?\""
      },
      {
        illustrationSeed: "soupno-6",
        textEn: "This turned out to be a difficult question. The soup admitted that a lake with no fish in it was, on reflection, a bit dull. The bread said the cat's head was warmer than expected but very unsteady.",
        textId: "Ternyata itu pertanyaan yang sulit. Sup mengakui bahwa danau tanpa ikan, setelah dipikir-pikir, agak membosankan. Roti berkata kepala kucing memang lebih hangat dari dugaan, tapi sangat goyang."
      },
      {
        illustrationSeed: "soupno-7",
        textEn: "The carrots said, rather quietly, that what they had actually wanted was simply to be asked first. Tomo thought about this. Then he said, \"Carrots. Would you like to be in the soup?\"",
        textId: "Wortel-wortel berkata, agak pelan, bahwa yang sebenarnya mereka inginkan hanyalah ditanya lebih dulu. Tomo memikirkannya. Lalu ia berkata, \"Wortel. Maukah kalian masuk ke dalam sup?\""
      },
      {
        illustrationSeed: "soupno-8",
        textEn: "There was a pause. \"Yes,\" said the carrots. \"Thank you.\" And they got in. The soup, who now had something in it, stopped talking about lakes. The bread came off the cat.",
        textId: "Hening sejenak. \"Mau,\" jawab wortel-wortel itu. \"Terima kasih.\" Lalu mereka masuk. Sup, yang kini ada isinya, berhenti membicarakan danau. Roti turun dari kepala kucing."
      },
      {
        illustrationSeed: "soupno-9",
        textEn: "Dinner was forty minutes late and slightly over-salted. Nobody complained. And from that evening on, Tomo asked the vegetables first — quietly, so his sister would not hear — and the kitchen behaved beautifully.",
        textId: "Makan malam terlambat empat puluh menit dan agak keasinan. Tak ada yang protes. Dan sejak malam itu, Tomo selalu bertanya lebih dulu pada sayuran — pelan-pelan, supaya kakaknya tidak dengar — dan dapur pun berperilaku sangat baik."
      }
    ],
    quiz: [
      {
        questionEn: "What did the soup want to be?",
        questionId: "Sup itu ingin jadi apa?",
        optionsEn: ["A hat", "A lake", "A cake", "A cat"],
        optionsId: ["Topi", "Danau", "Kue", "Kucing"],
        correctIndex: 1
      },
      {
        questionEn: "What did the carrots actually want?",
        questionId: "Apa yang sebenarnya diinginkan wortel-wortel itu?",
        optionsEn: ["To be left alone", "To be asked first", "To be a hat", "To leave the kitchen"],
        optionsId: ["Dibiarkan sendiri", "Ditanya lebih dulu", "Jadi topi", "Keluar dari dapur"],
        correctIndex: 1
      },
      {
        questionEn: "How did Tomo solve the problem?",
        questionId: "Bagaimana Tomo menyelesaikan masalahnya?",
        optionsEn: ["He shouted", "He sat down and asked what everyone wanted", "He ordered food", "He gave up on dinner"],
        optionsId: ["Ia berteriak", "Ia duduk dan bertanya apa mau semuanya", "Ia memesan makanan", "Ia menyerah soal makan malam"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-letter-q-and-its-friend",
    titleEn: "The Letter Q and Its Friend",
    titleId: "Huruf Q dan Temannya",
    descriptionEn: "Q was tired of never going anywhere without U. So one day Q went out alone — and found out what the two of them are really for.",
    descriptionId: "Q bosan tak pernah ke mana-mana tanpa U. Maka suatu hari Q pergi sendirian — dan menemukan untuk apa sebenarnya mereka berdua ada.",
    categorySlug: "alphabet",
    authorSlug: "axto-creative-team",
    coverEmoji: "🔤",
    coverPalette: "candy",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "letterq-1",
        textEn: "In the alphabet town where the letters lived, everybody had a job. B made the sound at the start of ball. S hissed. And Q went everywhere with U, always, without exception.",
        textId: "Di kota alfabet tempat huruf-huruf tinggal, semua punya pekerjaan. B membuat bunyi di awal kata bola. S mendesis. Dan Q pergi ke mana-mana bersama U, selalu, tanpa kecuali."
      },
      {
        illustrationSeed: "letterq-2",
        textEn: "Queen. Quick. Quiet. Question. Every single time, there was U, standing right behind Q like a very small shadow with excellent manners.",
        textId: "Queen. Quick. Quiet. Question. Setiap kali tanpa kecuali, ada U, berdiri tepat di belakang Q seperti bayangan mungil yang sangat sopan."
      },
      {
        illustrationSeed: "letterq-3",
        textEn: "\"I want to do one word by myself,\" said Q one morning. \"Just one. To see what I sound like alone.\" U said, \"All right,\" because U was a good friend, and stepped back.",
        textId: "\"Aku ingin membuat satu kata sendirian,\" kata Q pada suatu pagi. \"Satu saja. Supaya tahu bunyiku kalau sendiri.\" U menjawab, \"Baiklah,\" karena U teman yang baik, lalu mundur selangkah."
      },
      {
        illustrationSeed: "letterq-4",
        textEn: "Q stood in the middle of the square and opened its mouth and made its sound, and what came out was a small dry click, like a door catch. Nothing else. The letters waited politely.",
        textId: "Q berdiri di tengah alun-alun, membuka mulutnya, dan mengeluarkan bunyinya — dan yang keluar hanyalah bunyi klik kering kecil, seperti kait pintu. Tidak ada yang lain. Huruf-huruf lain menunggu dengan sopan."
      },
      {
        illustrationSeed: "letterq-5",
        textEn: "\"Try a word,\" said A helpfully. Q tried. Q-I-E-T. It came out as \"kiet\", which is not a word, and the letters looked at their feet.",
        textId: "\"Coba satu kata,\" saran A membantu. Q mencoba. Q-I-E-T. Yang keluar adalah \"kiet\", yang bukan kata apa pun, dan huruf-huruf lain menunduk menatap kaki mereka."
      },
      {
        illustrationSeed: "letterq-6",
        textEn: "Q sat down on the kerb feeling extremely small. U came and sat next to Q, not saying anything, which is one of the more useful things a friend can do.",
        textId: "Q duduk di tepi trotoar dengan perasaan sangat kecil. U datang dan duduk di sebelahnya, tanpa berkata apa-apa — salah satu hal paling berguna yang bisa dilakukan seorang teman."
      },
      {
        illustrationSeed: "letterq-7",
        textEn: "After a while old W came past, who was made of two Vs and knew about these things. \"You are not half a letter,\" W said. \"You are one half of a sound. So is U. Together you make something neither of you can make apart.\"",
        textId: "Beberapa saat kemudian W tua lewat — huruf yang tersusun dari dua V dan paham soal beginian. \"Kamu bukan setengah huruf,\" kata W. \"Kamu satu bagian dari sebuah bunyi. Begitu juga U. Bersama-sama kalian membuat sesuatu yang tak bisa dibuat sendiri-sendiri.\""
      },
      {
        illustrationSeed: "letterq-8",
        textEn: "Q thought about this. Then Q stood up, and U stood up, and together they went and made the word QUIET, and it worked perfectly, the way it always had.",
        textId: "Q memikirkannya. Lalu Q berdiri, U berdiri, dan bersama-sama mereka membuat kata QUIET — dan berhasil sempurna, seperti selalu."
      },
      {
        illustrationSeed: "letterq-9",
        textEn: "\"Do you mind?\" Q asked U later. \"Always being behind me?\" \"Not at all,\" said U. \"Everyone reads you first and everyone hears us both. That seems fair to me.\"",
        textId: "\"Kamu tidak keberatan?\" tanya Q pada U kemudian. \"Selalu di belakangku?\" \"Sama sekali tidak,\" jawab U. \"Semua orang membacamu lebih dulu dan semua orang mendengar kita berdua. Menurutku itu adil.\""
      }
    ],
    quiz: [
      {
        questionEn: "Which letter always goes with Q?",
        questionId: "Huruf apa yang selalu menemani Q?",
        optionsEn: ["A", "U", "S", "W"],
        optionsId: ["A", "U", "S", "W"],
        correctIndex: 1
      },
      {
        questionEn: "What happened when Q tried a word alone?",
        questionId: "Apa yang terjadi saat Q mencoba membuat kata sendirian?",
        optionsEn: ["It worked perfectly", "It came out as 'kiet', which is not a word", "Nothing happened", "It made a new alphabet"],
        optionsId: ["Berhasil sempurna", "Keluar jadi 'kiet', yang bukan kata", "Tidak terjadi apa-apa", "Terbentuk alfabet baru"],
        correctIndex: 1
      },
      {
        questionEn: "What did W explain?",
        questionId: "Apa yang dijelaskan W?",
        optionsEn: ["Q should try harder", "Q and U are each half of one sound", "U should leave", "Q is not a real letter"],
        optionsId: ["Q harus berusaha lebih keras", "Q dan U masing-masing separuh dari satu bunyi", "U harus pergi", "Q bukan huruf sungguhan"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-door-that-opened-both-ways",
    titleEn: "The Door That Opened Both Ways",
    titleId: "Pintu yang Membuka ke Dua Arah",
    descriptionEn: "In the wall behind the old cinema there is a door. Push it and you are somewhere else. Push it again and you are home — but only if you remember to be polite.",
    descriptionId: "Di tembok belakang bioskop tua ada sebuah pintu. Dorong, kau berada di tempat lain. Dorong lagi, kau pulang — tapi hanya jika kau ingat bersikap sopan.",
    categorySlug: "fantasy",
    authorSlug: "emily-clark",
    coverEmoji: "🚪",
    coverPalette: "twilight",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "bothwaysdoor-1",
        textEn: "The door in the wall behind the old cinema had no handle, no hinges anybody could see, and a small chalked sign that said PUSH, in handwriting that changed every week.",
        textId: "Pintu di tembok belakang bioskop tua itu tak berpegangan, tak bersengsel yang bisa dilihat siapa pun, dan ada tulisan kapur kecil bertuliskan DORONG, dengan tulisan tangan yang berganti setiap pekan."
      },
      {
        illustrationSeed: "bothwaysdoor-2",
        textEn: "Adib pushed it on a Saturday because he was eleven and because the sign said so, and he came out in a market where all the stalls were selling weather.",
        textId: "Adib mendorongnya pada suatu Sabtu karena umurnya sebelas dan karena tulisannya menyuruh begitu, lalu ia keluar di sebuah pasar yang semua kiosnya menjual cuaca."
      },
      {
        illustrationSeed: "bothwaysdoor-3",
        textEn: "Small jars of fog. Bottled drizzle. One enormous glass case at the end containing a single afternoon of very good sunshine, priced at something Adib could not read.",
        textId: "Toples-toples kecil berisi kabut. Gerimis dalam botol. Satu lemari kaca besar di ujung berisi satu sore sinar matahari yang sangat bagus, dengan harga yang tak bisa Adib baca."
      },
      {
        illustrationSeed: "bothwaysdoor-4",
        textEn: "An old woman at the fog stall looked up. \"First time,\" she said. It was not a question. \"The door lets you in. Whether it lets you out depends entirely on how you behave in here.\"",
        textId: "Seorang perempuan tua di kios kabut mendongak. \"Baru pertama kali,\" katanya. Itu bukan pertanyaan. \"Pintu itu mengizinkanmu masuk. Apakah ia mengizinkanmu keluar sepenuhnya tergantung bagaimana kelakuanmu di dalam sini.\""
      },
      {
        illustrationSeed: "bothwaysdoor-5",
        textEn: "Adib walked the whole market and touched nothing without asking. He said thank you eleven times. He helped a man pick up a dropped jar of mist, which had cracked, and offered to pay for it with the only coin in his pocket.",
        textId: "Adib menyusuri seluruh pasar dan tak menyentuh apa pun tanpa izin. Ia mengucap terima kasih sebelas kali. Ia membantu seorang lelaki memungut toples embun yang jatuh dan retak, lalu menawarkan mengganti dengan satu-satunya koin di sakunya."
      },
      {
        illustrationSeed: "bothwaysdoor-6",
        textEn: "The man would not take the coin. Instead he gave Adib the cracked jar, which was leaking a thin white thread of mist, and said, \"It is no good for selling now. It is very good for keeping.\"",
        textId: "Lelaki itu menolak koinnya. Sebaliknya ia memberikan toples retak itu pada Adib — toples yang membocorkan benang tipis putih embun — sambil berkata, \"Sekarang ia tak layak dijual. Tapi ia sangat layak disimpan.\""
      },
      {
        illustrationSeed: "bothwaysdoor-7",
        textEn: "When Adib went back to the door it opened. On the other side of the market he saw two boys hammering on a door that would not move at all, and he did not ask what they had done.",
        textId: "Ketika Adib kembali ke pintu itu, pintunya terbuka. Di seberang pasar ia melihat dua anak lelaki menggedor sebuah pintu yang sama sekali tak mau bergerak, dan ia tidak menanyakan apa yang telah mereka lakukan."
      },
      {
        illustrationSeed: "bothwaysdoor-8",
        textEn: "He came out into the alley behind the cinema in the ordinary evening, holding a cracked jar. Nobody had missed him. The chalk sign now said PUSH in different handwriting.",
        textId: "Ia keluar ke gang belakang bioskop pada petang yang biasa saja, sambil memegang toples retak. Tak ada yang menyadari ia sempat hilang. Tulisan kapur itu kini berbunyi DORONG dengan tulisan tangan yang berbeda."
      },
      {
        illustrationSeed: "bothwaysdoor-9",
        textEn: "The jar still leaks, a little, on the shelf above his bed. On hot nights his room smells of rain. He has never told anybody where it came from, and he has never gone back — not because he is afraid, but because he was let out, and that seemed like enough.",
        textId: "Toples itu masih sedikit bocor, di rak di atas ranjangnya. Pada malam-malam gerah, kamarnya berbau hujan. Ia tak pernah memberi tahu siapa pun dari mana asalnya, dan ia tak pernah kembali — bukan karena takut, tapi karena ia diizinkan keluar, dan itu terasa sudah cukup."
      }
    ],
    quiz: [
      {
        questionEn: "What were the stalls in the market selling?",
        questionId: "Kios-kios di pasar itu menjual apa?",
        optionsEn: ["Food", "Weather", "Books", "Shoes"],
        optionsId: ["Makanan", "Cuaca", "Buku", "Sepatu"],
        correctIndex: 1
      },
      {
        questionEn: "What decided whether the door let you out?",
        questionId: "Apa yang menentukan pintu itu mengizinkanmu keluar?",
        optionsEn: ["How much money you had", "How you behaved inside", "How fast you ran", "The time of day"],
        optionsId: ["Berapa uangmu", "Bagaimana kelakuanmu di dalam", "Seberapa cepat kau berlari", "Waktu hari itu"],
        correctIndex: 1
      },
      {
        questionEn: "What did Adib bring home?",
        questionId: "Apa yang Adib bawa pulang?",
        optionsEn: ["A coin", "A cracked jar of mist", "A jar of sunshine", "Nothing"],
        optionsId: ["Sekeping koin", "Toples embun yang retak", "Toples sinar matahari", "Tidak ada"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-case-of-the-singing-cupboard",
    titleEn: "The Case of the Singing Cupboard",
    titleId: "Misteri Lemari yang Bernyanyi",
    descriptionEn: "Every night at ten past nine the cupboard in the hallway sang four notes. Detective Ayu gave herself one week to find out why.",
    descriptionId: "Setiap malam pukul sembilan lewat sepuluh, lemari di lorong menyanyikan empat nada. Detektif Ayu memberi dirinya satu pekan untuk mencari tahu sebabnya.",
    categorySlug: "mystery",
    authorSlug: "sarah-johnson",
    coverEmoji: "🔎",
    coverPalette: "dusk",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "singingcupboard-1",
        textEn: "It was four notes, always the same four, always at ten past nine: low, low, high, low. It came from the tall cupboard in the hallway that held the towels and nothing else.",
        textId: "Ada empat nada, selalu empat nada yang sama, selalu pukul sembilan lewat sepuluh: rendah, rendah, tinggi, rendah. Bunyinya datang dari lemari tinggi di lorong yang isinya cuma handuk."
      },
      {
        illustrationSeed: "singingcupboard-2",
        textEn: "Ayu's little brother said it was a ghost. Ayu's father said it was the pipes. Ayu, who was nine and did not accept either answer, opened her notebook and wrote: DAY ONE.",
        textId: "Adik Ayu bilang itu hantu. Ayah Ayu bilang itu pipa air. Ayu, yang berumur sembilan tahun dan tidak menerima kedua jawaban itu, membuka buku catatannya dan menulis: HARI PERTAMA."
      },
      {
        illustrationSeed: "singingcupboard-3",
        textEn: "She emptied the cupboard completely. Towels out, shelves out, nothing left but wood. That night at ten past nine the empty cupboard sang the four notes exactly as before.",
        textId: "Ia mengosongkan lemari itu sepenuhnya. Handuk keluar, rak keluar, tak tersisa apa pun selain kayu. Malam itu pukul sembilan lewat sepuluh, lemari kosong itu menyanyikan empat nada persis seperti sebelumnya."
      },
      {
        illustrationSeed: "singingcupboard-4",
        textEn: "So it was not the towels. She wrote that down and crossed out GHOST as well, on the grounds that a ghost would surely have varied the tune at least once in three weeks.",
        textId: "Jadi bukan handuknya. Ia mencatat itu dan mencoret HANTU juga, dengan alasan hantu pasti akan mengubah lagunya setidaknya sekali dalam tiga pekan."
      },
      {
        illustrationSeed: "singingcupboard-5",
        textEn: "On day four she put a glass against the back wall and listened. The notes were coming from behind the cupboard. From the wall. From, she realised with a jolt, the neighbours' flat.",
        textId: "Pada hari keempat ia menempelkan gelas ke dinding belakang dan mendengarkan. Nada-nada itu datang dari balik lemari. Dari dinding. Dari — ia tersentak menyadarinya — apartemen tetangga."
      },
      {
        illustrationSeed: "singingcupboard-6",
        textEn: "On day five she knocked on the neighbours' door at nine o'clock and asked, very politely, what happened in their flat at ten past nine every night.",
        textId: "Pada hari kelima ia mengetuk pintu tetangga pukul sembilan dan bertanya, dengan sangat sopan, apa yang terjadi di apartemen mereka setiap pukul sembilan lewat sepuluh malam."
      },
      {
        illustrationSeed: "singingcupboard-7",
        textEn: "Ibu Sari looked surprised. Then she laughed. \"That is Pak Hasan's clock,\" she said. \"It chimes at ten past nine because it has been ten minutes slow since 1998 and he refuses to fix it.\"",
        textId: "Ibu Sari tampak terkejut. Lalu ia tertawa. \"Itu jam Pak Hasan,\" katanya. \"Ia berdentang pukul sembilan lewat sepuluh karena sudah telat sepuluh menit sejak 1998 dan beliau menolak memperbaikinya.\""
      },
      {
        illustrationSeed: "singingcupboard-8",
        textEn: "The wall between the two flats was thin, and the cupboard was hollow, and a hollow wooden box next to a thin wall does exactly what a guitar body does: it takes a small sound and makes it big.",
        textId: "Dinding antara dua apartemen itu tipis, lemarinya berongga, dan kotak kayu berongga di sebelah dinding tipis melakukan persis apa yang dilakukan badan gitar: mengambil bunyi kecil lalu membesarkannya."
      },
      {
        illustrationSeed: "singingcupboard-9",
        textEn: "Ayu wrote CASE CLOSED in her notebook and underlined it twice. Then she put the towels back, and left the cupboard exactly as it was, because a hallway that sings at ten past nine is a very good thing to have.",
        textId: "Ayu menulis KASUS DITUTUP di buku catatannya dan menggarisbawahinya dua kali. Lalu ia mengembalikan handuk-handuknya, dan membiarkan lemari itu apa adanya — karena lorong yang bernyanyi pukul sembilan lewat sepuluh adalah hal yang sangat menyenangkan untuk dimiliki."
      }
    ],
    quiz: [
      {
        questionEn: "What did Ayu do first?",
        questionId: "Apa yang pertama Ayu lakukan?",
        optionsEn: ["Asked the neighbours", "Emptied the cupboard completely", "Called her father", "Recorded the sound"],
        optionsId: ["Bertanya pada tetangga", "Mengosongkan lemari sepenuhnya", "Memanggil ayahnya", "Merekam bunyinya"],
        correctIndex: 1
      },
      {
        questionEn: "What was making the sound?",
        questionId: "Apa yang membuat bunyi itu?",
        optionsEn: ["A ghost", "The pipes", "A neighbour's slow clock", "The towels"],
        optionsId: ["Hantu", "Pipa air", "Jam tetangga yang telat", "Handuk"],
        correctIndex: 2
      },
      {
        questionEn: "Why did the cupboard make it louder?",
        questionId: "Mengapa lemari itu membuatnya lebih keras?",
        optionsEn: ["It was made of metal", "A hollow box next to a thin wall works like a guitar body", "It had a speaker inside", "It was very close to the clock"],
        optionsId: ["Terbuat dari logam", "Kotak berongga di sebelah dinding tipis bekerja seperti badan gitar", "Ada pengeras suara di dalamnya", "Letaknya sangat dekat jam"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-pirate-who-was-afraid-of-water",
    titleEn: "The Pirate Who Was Afraid of Water",
    titleId: "Bajak Laut yang Takut Air",
    descriptionEn: "Captain Rusa commanded the fastest ship in the strait and had never once learned to swim. For eleven years nobody knew. Then the ship went down.",
    descriptionId: "Kapten Rusa memimpin kapal tercepat di selat itu dan tak pernah sekali pun belajar berenang. Selama sebelas tahun tak ada yang tahu. Lalu kapalnya karam.",
    categorySlug: "pirates",
    authorSlug: "david-lee",
    coverEmoji: "🏴‍☠️",
    coverPalette: "ocean",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "afraidpirate-1",
        textEn: "Captain Rusa had the fastest ship between the two headlands, a crew of nineteen, and one secret that she had kept for eleven years: she could not swim, and the sea frightened her.",
        textId: "Kapten Rusa punya kapal tercepat di antara dua tanjung, awak sembilan belas orang, dan satu rahasia yang ia simpan selama sebelas tahun: ia tidak bisa berenang, dan laut membuatnya takut."
      },
      {
        illustrationSeed: "afraidpirate-2",
        textEn: "This was why she was such a very good captain. She read the sky obsessively. She checked the ropes twice. She never took a shortcut across the shallow bank, not once, not ever.",
        textId: "Justru karena itulah ia kapten yang sangat baik. Ia membaca langit dengan obsesif. Ia memeriksa tali dua kali. Ia tak pernah mengambil jalan pintas lewat beting dangkal — tidak sekali pun, tidak pernah."
      },
      {
        illustrationSeed: "afraidpirate-3",
        textEn: "The crew thought she was simply careful. They joked about it. \"The Captain would check a rope in a bathtub,\" they said, and she laughed along and checked the rope again.",
        textId: "Awak kapal mengira ia sekadar berhati-hati. Mereka bercanda soal itu. \"Kapten pasti memeriksa tali bahkan di dalam bak mandi,\" kata mereka, dan ia ikut tertawa lalu memeriksa tali itu lagi."
      },
      {
        illustrationSeed: "afraidpirate-4",
        textEn: "Then came the storm that nobody read in time, not even her, and the ship went onto rocks in the dark, and the whole crew was in the water before anyone had finished shouting.",
        textId: "Lalu datang badai yang tak seorang pun sempat membacanya, bahkan ia sendiri, dan kapal itu menghantam karang dalam gelap, dan seluruh awak sudah berada di air bahkan sebelum ada yang selesai berteriak."
      },
      {
        illustrationSeed: "afraidpirate-5",
        textEn: "Captain Rusa stood on the tilting deck with her hands on the rail and did not jump. She could hear her own crew calling to her from below. She still did not jump.",
        textId: "Kapten Rusa berdiri di geladak yang miring dengan tangan mencengkeram pagar, dan ia tidak melompat. Ia bisa mendengar awaknya sendiri memanggil dari bawah. Ia tetap tidak melompat."
      },
      {
        illustrationSeed: "afraidpirate-6",
        textEn: "Old Toma, who had sailed with her the longest, climbed back up the side of the sinking ship and stood in front of her. \"Ah,\" he said, looking at her face. \"Eleven years. And you never said.\"",
        textId: "Toma tua, yang paling lama berlayar bersamanya, memanjat kembali ke sisi kapal yang tenggelam dan berdiri di hadapannya. \"Ah,\" katanya, menatap wajah Kapten. \"Sebelas tahun. Dan kau tak pernah bilang.\""
      },
      {
        illustrationSeed: "afraidpirate-7",
        textEn: "He tied a rope around her waist and the other end around a barrel and around himself, and he said, \"You do not need to swim. You need to hold on. That is a different job entirely.\" And then they went over the side together.",
        textId: "Ia mengikat tali ke pinggang Kapten, ujung satunya ke sebuah tong dan ke tubuhnya sendiri, lalu berkata, \"Kau tak perlu berenang. Kau cuma perlu berpegangan. Itu tugas yang sama sekali berbeda.\" Lalu mereka terjun bersama-sama."
      },
      {
        illustrationSeed: "afraidpirate-8",
        textEn: "All nineteen reached the sandbar. On the beach at dawn nobody said anything about it for a long time. Then Toma said, \"You should have told us.\" \"I know,\" said the Captain.",
        textId: "Kesembilan belas orang mencapai gosong pasir. Di pantai saat fajar, lama tak seorang pun membicarakannya. Lalu Toma berkata, \"Seharusnya kau bilang pada kami.\" \"Aku tahu,\" jawab Kapten."
      },
      {
        illustrationSeed: "afraidpirate-9",
        textEn: "She learned to swim that year, badly, in the shallows, with nineteen people shouting unhelpful advice from the shore. She was still the most careful captain in the strait. She was simply no longer the only one who knew why.",
        textId: "Tahun itu ia belajar berenang, dengan buruk, di perairan dangkal, sementara sembilan belas orang meneriakkan saran yang tak membantu dari pantai. Ia tetap kapten paling berhati-hati di selat itu. Hanya saja kini ia bukan satu-satunya yang tahu sebabnya."
      }
    ],
    quiz: [
      {
        questionEn: "What was Captain Rusa's secret?",
        questionId: "Apa rahasia Kapten Rusa?",
        optionsEn: ["She had no ship", "She could not swim", "She was not really a captain", "She had no crew"],
        optionsId: ["Ia tak punya kapal", "Ia tidak bisa berenang", "Ia bukan kapten sungguhan", "Ia tak punya awak"],
        correctIndex: 1
      },
      {
        questionEn: "How did her fear make her a good captain?",
        questionId: "Bagaimana rasa takutnya membuatnya jadi kapten yang baik?",
        optionsEn: ["It made her fast", "It made her check everything and never take shortcuts", "It made her loud", "It made her rich"],
        optionsId: ["Membuatnya cepat", "Membuatnya memeriksa segalanya dan tak pernah ambil jalan pintas", "Membuatnya lantang", "Membuatnya kaya"],
        correctIndex: 1
      },
      {
        questionEn: "What did Toma say she needed to do?",
        questionId: "Apa kata Toma yang perlu ia lakukan?",
        optionsEn: ["Swim fast", "Hold on, which is a different job from swimming", "Stay on the ship", "Wait for morning"],
        optionsId: ["Berenang cepat", "Berpegangan — tugas yang berbeda dari berenang", "Tetap di kapal", "Menunggu pagi"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-princess-who-repaired-things",
    titleEn: "The Princess Who Repaired Things",
    titleId: "Putri yang Memperbaiki Barang",
    descriptionEn: "Princess Ilma was supposed to open bridges, not fix them. Then the kingdom's only water pump broke, and everyone who knew how to mend it had gone.",
    descriptionId: "Putri Ilma seharusnya meresmikan jembatan, bukan memperbaikinya. Lalu satu-satunya pompa air kerajaan rusak, dan semua orang yang tahu cara memperbaikinya sudah tak ada.",
    categorySlug: "princess-knights",
    authorSlug: "sarah-johnson",
    coverEmoji: "👑",
    coverPalette: "meadow",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "repairprincess-1",
        textEn: "Princess Ilma's official duties were: opening things, waving, and standing still while people painted her. Her unofficial habit was taking things apart in the stable loft.",
        textId: "Tugas resmi Putri Ilma adalah: meresmikan sesuatu, melambaikan tangan, dan berdiri diam sementara orang melukisnya. Kebiasaan tak resminya adalah membongkar barang di loteng kandang kuda."
      },
      {
        illustrationSeed: "repairprincess-2",
        textEn: "By the time she was fourteen she had taken apart and reassembled four clocks, a music box, two locks, one very unhappy accordion and the palace's second-best weather vane.",
        textId: "Saat berumur empat belas tahun ia sudah membongkar dan merakit ulang empat jam, satu kotak musik, dua gembok, satu akordeon yang sangat menderita, dan penunjuk arah angin terbaik kedua milik istana."
      },
      {
        illustrationSeed: "repairprincess-3",
        textEn: "The Chamberlain disapproved. \"A princess opens the bridge,\" he said. \"A princess does not lie underneath it with a spanner.\" Ilma said she had been under the bridge for a leak, which did not help.",
        textId: "Sang Kepala Rumah Tangga Istana tidak setuju. \"Seorang putri meresmikan jembatan,\" katanya. \"Seorang putri tidak berbaring di bawahnya membawa kunci pas.\" Ilma menjawab bahwa ia di bawah jembatan karena ada kebocoran — yang justru memperburuk keadaan."
      },
      {
        illustrationSeed: "repairprincess-4",
        textEn: "Then in the dry month the great pump at Ampel village stopped. It was the only pump for four hundred people, and the two engineers who understood it had both died the winter before.",
        textId: "Lalu pada bulan kemarau, pompa besar di desa Ampel berhenti. Itu satu-satunya pompa untuk empat ratus orang, dan dua insinyur yang memahaminya sudah meninggal pada musim dingin sebelumnya."
      },
      {
        illustrationSeed: "repairprincess-5",
        textEn: "Men came from three towns and looked at it and shook their heads. On the fourth day Ilma arrived in a plain dress with a bag of tools and sat down beside the machine and did not touch anything for two hours.",
        textId: "Orang-orang datang dari tiga kota, menatapnya, dan menggeleng. Pada hari keempat Ilma datang mengenakan gaun polos, membawa tas perkakas, duduk di samping mesin itu, dan selama dua jam tidak menyentuh apa pun."
      },
      {
        illustrationSeed: "repairprincess-6",
        textEn: "\"She is only looking,\" said someone. \"She is only looking,\" agreed the village head, who had once watched an old engineer do exactly the same thing for an entire afternoon.",
        textId: "\"Ia cuma melihat-lihat,\" kata seseorang. \"Ia memang cuma melihat,\" sahut kepala desa, yang dulu pernah menyaksikan seorang insinyur tua melakukan hal persis sama sepanjang sore."
      },
      {
        illustrationSeed: "repairprincess-7",
        textEn: "On the third hour she opened the casing and found it: a cracked valve seat, not broken, only worn into the wrong shape by thirty years of water. It was the size of her thumb.",
        textId: "Pada jam ketiga ia membuka penutupnya dan menemukannya: dudukan katup yang retak — bukan patah, hanya aus jadi bentuk yang salah oleh tiga puluh tahun air. Ukurannya sebesar ibu jarinya."
      },
      {
        illustrationSeed: "repairprincess-8",
        textEn: "It took the village blacksmith two days to make a new one from her drawing. It fitted on the second attempt. The pump ran, badly at first and then properly, and the whole of Ampel stood in the square and watched water come out of a pipe.",
        textId: "Pandai besi desa butuh dua hari membuat penggantinya dari gambar Ilma. Ia pas pada percobaan kedua. Pompa itu bekerja — mula-mula tersendat lalu lancar — dan seluruh warga Ampel berdiri di alun-alun menonton air keluar dari pipa."
      },
      {
        illustrationSeed: "repairprincess-9",
        textEn: "The Chamberlain wrote in the record book: THE PRINCESS OPENED THE PUMP. Ilma read it, took the pen, and added four words in her own hand: AND ALSO REPAIRED IT.",
        textId: "Kepala Rumah Tangga Istana menulis di buku catatan: SANG PUTRI MERESMIKAN POMPA ITU. Ilma membacanya, mengambil pena, dan menambahkan empat kata dengan tulisan tangannya sendiri: DAN JUGA MEMPERBAIKINYA."
      }
    ],
    quiz: [
      {
        questionEn: "What was Ilma's unofficial habit?",
        questionId: "Apa kebiasaan tak resmi Ilma?",
        optionsEn: ["Riding horses", "Taking things apart and reassembling them", "Painting", "Writing letters"],
        optionsId: ["Berkuda", "Membongkar barang lalu merakitnya kembali", "Melukis", "Menulis surat"],
        correctIndex: 1
      },
      {
        questionEn: "What did she do for the first two hours at the pump?",
        questionId: "Apa yang ia lakukan selama dua jam pertama di pompa itu?",
        optionsEn: ["Took it apart", "Looked at it without touching anything", "Asked for help", "Ordered a new pump"],
        optionsId: ["Membongkarnya", "Menatapnya tanpa menyentuh apa pun", "Meminta bantuan", "Memesan pompa baru"],
        correctIndex: 1
      },
      {
        questionEn: "What did she add to the record book?",
        questionId: "Apa yang ia tambahkan di buku catatan?",
        optionsEn: ["Her name", "AND ALSO REPAIRED IT", "The date", "Nothing"],
        optionsId: ["Namanya", "DAN JUGA MEMPERBAIKINYA", "Tanggalnya", "Tidak ada"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-crab-who-outgrew-his-shell",
    titleEn: "The Crab Who Outgrew His Shell",
    titleId: "Kepiting yang Kesempitan Cangkangnya",
    descriptionEn: "Kepi's shell had been perfect for two years. Now it pinched. But leaving it meant being soft and bare in the open, and Kepi was not ready.",
    descriptionId: "Cangkang Kepi sempurna selama dua tahun. Kini ia menyempit. Tapi meninggalkannya berarti jadi lembek dan telanjang di tempat terbuka, dan Kepi belum siap.",
    categorySlug: "ocean-life",
    authorSlug: "emily-clark",
    coverEmoji: "🦀",
    coverPalette: "ocean",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "kepicrab-1",
        textEn: "Kepi the hermit crab had lived in the same spiral shell for two whole years. It was the colour of milky tea and it had a chip on one edge shaped like a tiny door.",
        textId: "Kepi si kelomang sudah tinggal di cangkang spiral yang sama selama dua tahun penuh. Warnanya seperti teh susu dan ada gompal di satu tepinya berbentuk seperti pintu mungil."
      },
      {
        illustrationSeed: "kepicrab-2",
        textEn: "Lately it pinched. Getting in was a struggle. Sleeping meant folding a leg somewhere it did not want to fold. He told himself it was fine. It was not fine.",
        textId: "Belakangan ia menyempit. Masuk ke dalamnya jadi perjuangan. Tidur berarti melipat satu kaki ke tempat yang tak mau dilipat. Ia bilang pada dirinya sendiri semuanya baik-baik saja. Padahal tidak."
      },
      {
        illustrationSeed: "kepicrab-3",
        textEn: "There was a bigger shell forty crab-steps down the sand bar. He had gone and looked at it eleven times. He had never once gone inside it.",
        textId: "Ada cangkang yang lebih besar empat puluh langkah kepiting menyusuri gosong pasir. Ia sudah pergi melihatnya sebelas kali. Ia tak pernah sekali pun masuk ke dalamnya."
      },
      {
        illustrationSeed: "kepicrab-4",
        textEn: "Because in between the two shells there was open sand, and on open sand a hermit crab is exactly what he sounds like: soft, unarmoured, and interesting to seabirds.",
        textId: "Sebab di antara kedua cangkang itu ada pasir terbuka, dan di pasir terbuka seekor kelomang persis seperti kedengarannya: lembek, tanpa baju besi, dan menarik bagi burung laut."
      },
      {
        illustrationSeed: "kepicrab-5",
        textEn: "An old crab called Beku watched him look at the shell for the twelfth time. \"You will not be safer tomorrow,\" she said. \"You will be exactly as soft, and one day older, and one day more squashed.\"",
        textId: "Seekor kepiting tua bernama Beku memperhatikannya menatap cangkang itu untuk kedua belas kalinya. \"Besok kau tak akan lebih aman,\" katanya. \"Kau akan tetap sama lembeknya, satu hari lebih tua, dan satu hari lebih terjepit.\""
      },
      {
        illustrationSeed: "kepicrab-6",
        textEn: "\"How long does it take?\" asked Kepi. Beku thought about it honestly, which he appreciated. \"Between eight and twelve seconds,\" she said. \"That is the whole danger. Eight to twelve seconds.\"",
        textId: "\"Berapa lama waktunya?\" tanya Kepi. Beku memikirkannya dengan jujur, dan Kepi menghargai itu. \"Antara delapan sampai dua belas detik,\" jawabnya. \"Itulah seluruh bahayanya. Delapan sampai dua belas detik.\""
      },
      {
        illustrationSeed: "kepicrab-7",
        textEn: "He went at dusk, when the birds are lazy. He came out of the old shell and the water felt enormous on his bare back, and he ran, and it was the longest eleven seconds of his life.",
        textId: "Ia berangkat saat senja, ketika burung-burung sedang malas. Ia keluar dari cangkang lamanya dan air terasa mahaluas di punggung telanjangnya, lalu ia berlari — dan itu sebelas detik terpanjang dalam hidupnya."
      },
      {
        illustrationSeed: "kepicrab-8",
        textEn: "The new shell was cold inside and smelled of somebody else and was far too big in a way that felt like standing in a hall. He hated it for four days. On the fifth day he stopped noticing.",
        textId: "Cangkang baru itu dingin di dalam, berbau orang lain, dan terlalu besar dengan cara yang membuatnya seperti berdiri di aula. Ia membencinya selama empat hari. Pada hari kelima ia berhenti memikirkannya."
      },
      {
        illustrationSeed: "kepicrab-9",
        textEn: "By the end of the season he had grown into it and it pinched slightly at one corner. Kepi looked down the sand bar. Somewhere down there was a bigger shell. He knew exactly how long it takes.",
        textId: "Menjelang akhir musim ia sudah tumbuh memenuhinya dan cangkang itu mulai menyempit sedikit di satu sudut. Kepi memandang ke ujung gosong pasir. Di suatu tempat di sana ada cangkang yang lebih besar. Kini ia tahu persis berapa lama waktu yang dibutuhkan."
      }
    ],
    quiz: [
      {
        questionEn: "Why would Kepi not move to the bigger shell?",
        questionId: "Mengapa Kepi tak mau pindah ke cangkang yang lebih besar?",
        optionsEn: ["He liked the old one", "Crossing open sand means being soft and unprotected", "It was too far", "It belonged to someone else"],
        optionsId: ["Ia suka yang lama", "Menyeberangi pasir terbuka berarti jadi lembek dan tanpa pelindung", "Terlalu jauh", "Cangkang itu milik orang lain"],
        correctIndex: 1
      },
      {
        questionEn: "How long did Beku say the danger lasts?",
        questionId: "Berapa lama Beku bilang bahayanya berlangsung?",
        optionsEn: ["A whole day", "Eight to twelve seconds", "An hour", "A week"],
        optionsId: ["Sehari penuh", "Delapan sampai dua belas detik", "Satu jam", "Sepekan"],
        correctIndex: 1
      },
      {
        questionEn: "How did Kepi feel about the new shell at first?",
        questionId: "Bagaimana perasaan Kepi pada cangkang baru itu mulanya?",
        optionsEn: ["Delighted", "He hated it for four days", "Nothing at all", "He went straight back"],
        optionsId: ["Senang sekali", "Ia membencinya selama empat hari", "Biasa saja", "Ia langsung kembali"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-leopard-who-could-not-hide",
    titleEn: "The Leopard Who Could Not Hide",
    titleId: "Macan Tutul yang Tak Bisa Bersembunyi",
    descriptionEn: "Every leopard in the valley had spots. Sena had one large pale patch across her shoulder, and it made her the worst hunter and the best lookout for a hundred miles.",
    descriptionId: "Setiap macan tutul di lembah itu bertutul. Sena punya satu bercak pucat besar di bahunya, dan itu membuatnya pemburu terburuk sekaligus pengintai terbaik sejauh seratus mil.",
    categorySlug: "jungle-safari",
    authorSlug: "david-lee",
    coverEmoji: "🐆",
    coverPalette: "forest",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "senaleopard-1",
        textEn: "A leopard's whole life depends on not being seen. The spots break up the shape; the shape disappears into leaf shadow; and then there is no leopard until suddenly there is.",
        textId: "Seluruh hidup macan tutul bergantung pada tidak terlihat. Tutulnya memecah bentuk tubuh; bentuk itu lenyap ke dalam bayangan daun; lalu tidak ada macan tutul sampai tiba-tiba ada."
      },
      {
        illustrationSeed: "senaleopard-2",
        textEn: "Sena had been born with a pale patch the size of a hand across her left shoulder, with no spots on it at all. In leaf shadow it glowed like a piece of dropped paper.",
        textId: "Sena lahir dengan bercak pucat sebesar telapak tangan di bahu kirinya, tanpa satu tutul pun di sana. Dalam bayangan daun, bercak itu bersinar seperti secarik kertas yang terjatuh."
      },
      {
        illustrationSeed: "senaleopard-3",
        textEn: "She was a terrible hunter. The deer saw the patch and left. The monkeys saw the patch and screamed. By her second year she was thin and tired and always last to eat.",
        textId: "Ia pemburu yang payah. Rusa melihat bercak itu lalu pergi. Monyet melihat bercak itu lalu menjerit. Pada tahun keduanya ia kurus, lelah, dan selalu paling akhir makan."
      },
      {
        illustrationSeed: "senaleopard-4",
        textEn: "So she changed jobs. Since she could not creep, she climbed. She found the tallest fig on the ridge and she sat in it, and from up there she could see the whole valley at once.",
        textId: "Maka ia berganti pekerjaan. Karena tak bisa mengendap, ia memanjat. Ia menemukan pohon ara tertinggi di punggung bukit dan duduk di sana, dan dari atas sana ia bisa melihat seluruh lembah sekaligus."
      },
      {
        illustrationSeed: "senaleopard-5",
        textEn: "She saw where the deer moved at dawn. She saw the dry gully filling before the rain reached the valley floor. She saw the poachers' truck two hours before anybody heard it.",
        textId: "Ia melihat ke mana rusa bergerak saat fajar. Ia melihat parit kering mulai terisi sebelum hujan mencapai dasar lembah. Ia melihat truk pemburu liar dua jam sebelum ada yang mendengarnya."
      },
      {
        illustrationSeed: "senaleopard-6",
        textEn: "And because she could be seen, the others could find her. That turned out to matter enormously. A leopard who is invisible cannot be asked anything. Sena could be found from half the valley away.",
        textId: "Dan karena ia bisa terlihat, yang lain bisa menemukannya. Ternyata itu sangat penting. Macan tutul yang tak terlihat tak bisa ditanyai apa pun. Sena bisa ditemukan dari separuh lembah jauhnya."
      },
      {
        illustrationSeed: "senaleopard-7",
        textEn: "Young leopards started climbing up to her before a hunt to ask where the herd had gone. She told them. They brought her back a share. It was not a rule anybody made. It just became how things worked.",
        textId: "Macan-macan tutul muda mulai memanjat menemuinya sebelum berburu untuk bertanya ke mana kawanan rusa pergi. Ia memberi tahu mereka. Mereka membawakan bagian untuknya. Tak ada yang membuat aturan itu. Begitu saja jadi cara semuanya berjalan."
      },
      {
        illustrationSeed: "senaleopard-8",
        textEn: "In the dry year she saw the last standing water from the fig tree and eleven leopards drank because of it, which is eleven more than would have drunk if she had been ordinary and hidden.",
        textId: "Pada tahun kemarau ia melihat genangan air terakhir dari pohon ara itu, dan sebelas macan tutul minum karenanya — sebelas lebih banyak daripada kalau ia biasa saja dan tersembunyi."
      },
      {
        illustrationSeed: "senaleopard-9",
        textEn: "Sena never did learn to disappear. She had simply found the one job in the whole valley where being impossible to miss was the entire point.",
        textId: "Sena tak pernah belajar menghilang. Ia hanya menemukan satu-satunya pekerjaan di seluruh lembah yang justru intinya adalah mustahil untuk tidak terlihat."
      }
    ],
    quiz: [
      {
        questionEn: "Why was Sena a bad hunter?",
        questionId: "Mengapa Sena pemburu yang payah?",
        optionsEn: ["She was slow", "Her pale patch made her easy to see", "She was afraid", "She could not climb"],
        optionsId: ["Ia lambat", "Bercak pucatnya membuatnya mudah terlihat", "Ia penakut", "Ia tak bisa memanjat"],
        correctIndex: 1
      },
      {
        questionEn: "What job did she find instead?",
        questionId: "Pekerjaan apa yang ia temukan sebagai gantinya?",
        optionsEn: ["Guarding cubs", "Lookout from the tallest fig tree", "Digging water holes", "Leading hunts"],
        optionsId: ["Menjaga anak-anak macan", "Pengintai dari pohon ara tertinggi", "Menggali lubang air", "Memimpin perburuan"],
        correctIndex: 1
      },
      {
        questionEn: "Why did being visible help?",
        questionId: "Mengapa mudah terlihat justru membantu?",
        optionsEn: ["She scared enemies", "Others could find her and ask her what she had seen", "She looked beautiful", "It kept her warm"],
        optionsId: ["Ia menakuti musuh", "Yang lain bisa menemukannya dan bertanya apa yang ia lihat", "Ia terlihat cantik", "Membuatnya hangat"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-cat-who-chose-the-library",
    titleEn: "The Cat Who Chose the Library",
    titleId: "Kucing yang Memilih Perpustakaan",
    descriptionEn: "Nobody adopted the grey cat. The grey cat adopted a building — and then made it her job to sit with whichever child needed a cat that day.",
    descriptionId: "Tak ada yang mengadopsi kucing kelabu itu. Kucing kelabu itulah yang mengadopsi sebuah gedung — lalu menjadikannya tugasnya untuk duduk bersama anak yang paling butuh kucing hari itu.",
    categorySlug: "pets",
    authorSlug: "siti-aminah",
    coverEmoji: "🐈",
    coverPalette: "candy",
    ageMin: 4,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "librarycat-1",
        textEn: "The grey cat arrived at the district library on a wet Wednesday, walked in through the returns slot flap as if she had an appointment, and sat down on the mat to dry.",
        textId: "Kucing kelabu itu tiba di perpustakaan kecamatan pada suatu Rabu yang basah, masuk lewat celah pengembalian buku seolah punya janji temu, lalu duduk di keset untuk mengeringkan diri."
      },
      {
        illustrationSeed: "librarycat-2",
        textEn: "Pak Joko the librarian put her outside. She came back in eleven minutes. He put her outside again. She came back in nine. On the fourth attempt he gave up and got her a bowl.",
        textId: "Pak Joko sang pustakawan mengeluarkannya. Ia kembali dalam sebelas menit. Pak Joko mengeluarkannya lagi. Ia kembali dalam sembilan menit. Pada percobaan keempat Pak Joko menyerah dan menyiapkan mangkuk untuknya."
      },
      {
        illustrationSeed: "librarycat-3",
        textEn: "They called her Kelabu, which is not an imaginative name, and she answered to it immediately, which suggested she had been called several things before and had not liked any of them.",
        textId: "Mereka menamainya Kelabu — nama yang tidak kreatif — dan ia langsung menyahut, yang menunjukkan ia sudah pernah dipanggil beberapa nama sebelumnya dan tak menyukai satu pun."
      },
      {
        illustrationSeed: "librarycat-4",
        textEn: "Kelabu had one clear rule. Every afternoon, when the children came in after school, she walked slowly along the whole row of them, looked at each one, and then chose exactly one to sit next to.",
        textId: "Kelabu punya satu aturan jelas. Setiap sore, ketika anak-anak datang sepulang sekolah, ia berjalan pelan menyusuri seluruh barisan mereka, menatap satu per satu, lalu memilih tepat satu anak untuk didudukinya."
      },
      {
        illustrationSeed: "librarycat-5",
        textEn: "It was never the loudest one and it was never the one calling her. It was, Pak Joko slowly realised over about two months, always the one who was having the worst day.",
        textId: "Tak pernah anak yang paling berisik, tak pernah pula yang memanggilnya. Pak Joko perlahan menyadari, dalam dua bulan, bahwa itu selalu anak yang harinya paling buruk."
      },
      {
        illustrationSeed: "librarycat-6",
        textEn: "The boy whose parents were arguing. The girl who had failed the test and not told anyone. The child who came in alone every single day and sat in the same chair by the window.",
        textId: "Anak lelaki yang orang tuanya sedang bertengkar. Anak perempuan yang gagal ujian dan tak memberi tahu siapa pun. Anak yang datang sendirian setiap hari dan duduk di kursi yang sama dekat jendela."
      },
      {
        illustrationSeed: "librarycat-7",
        textEn: "Nobody knows how she did it. Pak Joko thinks it is something about how a person holds their shoulders. Kelabu has never explained, and shows no sign of intending to.",
        textId: "Tak ada yang tahu bagaimana ia melakukannya. Pak Joko menduga itu ada hubungannya dengan cara seseorang menegakkan bahu. Kelabu tak pernah menjelaskan, dan tak menunjukkan tanda-tanda akan menjelaskan."
      },
      {
        illustrationSeed: "librarycat-8",
        textEn: "Three families have offered to take her home properly. Kelabu has considered all three offers, gone as far as the door on one of them, and then turned round and gone back to the reading corner.",
        textId: "Tiga keluarga sudah menawarkan membawanya pulang dengan resmi. Kelabu mempertimbangkan ketiganya, bahkan sempat sampai ke pintu pada satu tawaran, lalu berbalik dan kembali ke pojok baca."
      },
      {
        illustrationSeed: "librarycat-9",
        textEn: "She has a bowl, a cushion on the third shelf, and roughly forty children who each privately believe they are her favourite. All forty of them are right, in a way, one afternoon at a time.",
        textId: "Ia punya sebuah mangkuk, sebuah bantal di rak ketiga, dan kira-kira empat puluh anak yang masing-masing diam-diam yakin merekalah kesayangannya. Keempat puluhnya benar, dengan caranya, satu sore untuk satu anak."
      }
    ],
    quiz: [
      {
        questionEn: "How did Kelabu first get into the library?",
        questionId: "Bagaimana Kelabu pertama kali masuk perpustakaan?",
        optionsEn: ["Through a window", "Through the book returns slot", "Somebody carried her", "Through the front door"],
        optionsId: ["Lewat jendela", "Lewat celah pengembalian buku", "Ada yang menggendongnya", "Lewat pintu depan"],
        correctIndex: 1
      },
      {
        questionEn: "Which child did she sit next to each afternoon?",
        questionId: "Anak mana yang ia dampingi setiap sore?",
        optionsEn: ["The loudest one", "The one having the worst day", "The one who called her", "The first to arrive"],
        optionsId: ["Yang paling berisik", "Yang harinya paling buruk", "Yang memanggilnya", "Yang datang paling awal"],
        correctIndex: 1
      },
      {
        questionEn: "What happened when families offered to take her home?",
        questionId: "Apa yang terjadi ketika keluarga-keluarga menawarkan membawanya pulang?",
        optionsEn: ["She went with the first one", "She turned round and went back to the reading corner", "She hid", "Pak Joko refused"],
        optionsId: ["Ia ikut yang pertama", "Ia berbalik dan kembali ke pojok baca", "Ia bersembunyi", "Pak Joko menolak"],
        correctIndex: 1
      }
    ]
  }
];
