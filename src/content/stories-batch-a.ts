/**
 * Story batch A — hand-written bilingual (EN/ID) read-aloud stories, appended
 * to the library. Nothing here replaces or edits an existing story; batches
 * only ever add. Concatenated into STORIES (see stories.ts) so
 * `npm run generate:seed` writes them straight into seed/seed.sql.
 *
 * This batch fills the categories that had only a single book: alphabet,
 * numbers, vehicles, robots-tech, community-helpers, weather-seasons,
 * health-body, music-rhymes, sports and pets.
 */
import type { Story } from "./stories";

export const STORIES_BATCH_A: Story[] = [
  {
    slug: "the-letter-that-went-missing",
    titleEn: "The Letter That Went Missing",
    titleId: "Huruf yang Hilang",
    descriptionEn: "When the letter S wanders off, the whole alphabet has to work together to find it — and nothing sounds right until they do.",
    descriptionId: "Ketika huruf S menghilang, seluruh abjad harus bekerja sama mencarinya — dan tidak ada yang terdengar benar sebelum ia ditemukan.",
    categorySlug: "alphabet",
    authorSlug: "axto-creative-team",
    coverEmoji: "🔤",
    coverPalette: "sunrise",
    ageMin: 3,
    ageMax: 6,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "letter-s-1",
        textEn: "In a quiet little town called Wordville, all twenty-six letters lived together on one long shelf. Every morning they lined up in order, from A all the way to Z, ready for the day's words.",
        textId: "Di sebuah kota kecil yang tenang bernama Wordville, kedua puluh enam huruf tinggal bersama di satu rak panjang. Setiap pagi mereka berbaris berurutan, dari A sampai Z, siap untuk kata-kata hari itu."
      },
      {
        illustrationSeed: "letter-s-2",
        textEn: "But one Tuesday morning, there was a gap on the shelf. Right between R and T, where S always stood, there was nothing but empty air.",
        textId: "Namun pada suatu Selasa pagi, ada celah di rak itu. Tepat di antara R dan T, tempat S biasa berdiri, hanya ada udara kosong."
      },
      {
        illustrationSeed: "letter-s-3",
        textEn: "Without S, everything went strange. The sun became the un. The stars became the tars. And when little A tried to say sorry, all that came out was orry.",
        textId: "Tanpa S, semuanya jadi aneh. Matahari kehilangan namanya. Bintang-bintang terdengar salah. Dan ketika si kecil A mencoba berkata maaf, yang keluar hanyalah bunyi yang tidak lengkap."
      },
      {
        illustrationSeed: "letter-s-4",
        textEn: "\"We must find S,\" said B in his steady voice. So the letters set out together, following the sound of a soft hiss through the tall grass.",
        textId: "\"Kita harus menemukan S,\" kata B dengan suara mantap. Maka huruf-huruf itu berangkat bersama, mengikuti bunyi desis lembut di antara rumput tinggi."
      },
      {
        illustrationSeed: "letter-s-5",
        textEn: "They searched by the stream, where S liked to curve like the water. They searched by the snake's rock, and by the sleepy old shed. No S anywhere.",
        textId: "Mereka mencari di tepi sungai, tempat S suka melengkung seperti air. Mereka mencari di batu tempat ular berjemur, dan di gudang tua yang mengantuk. S tidak ada di mana-mana."
      },
      {
        illustrationSeed: "letter-s-6",
        textEn: "At last, tiny I heard something. Behind the library, curled up small and quiet, sat S with her head down. \"Nobody needs me,\" she whispered. \"There are twenty-five other letters.\"",
        textId: "Akhirnya, si mungil I mendengar sesuatu. Di belakang perpustakaan, meringkuk kecil dan diam, duduklah S dengan kepala tertunduk. \"Tidak ada yang membutuhkanku,\" bisiknya. \"Masih ada dua puluh lima huruf lain.\""
      },
      {
        illustrationSeed: "letter-s-7",
        textEn: "The letters looked at one another. Then O stepped forward. \"Say our names,\" she said gently. \"Say them without you.\" And S tried — and could not make sun, or star, or sister, or smile.",
        textId: "Huruf-huruf itu saling berpandangan. Lalu O melangkah maju. \"Sebutkan nama-nama kami,\" katanya lembut. \"Sebutkan tanpa dirimu.\" S mencoba — dan tidak bisa membuat kata matahari, bintang, saudara, atau senyum."
      },
      {
        illustrationSeed: "letter-s-8",
        textEn: "S stood up slowly. All the way home, the letters walked beside her, and the closer they came to the shelf, the more the words in the air began to sound right again.",
        textId: "S berdiri perlahan. Sepanjang jalan pulang, huruf-huruf berjalan di sisinya, dan semakin dekat ke rak, semakin benar pula bunyi kata-kata di udara."
      },
      {
        illustrationSeed: "letter-s-9",
        textEn: "That evening, when the sun set over Wordville, every letter was in its place. And S sat between R and T, small and shining, knowing something she had not known that morning: every single one of them mattered.",
        textId: "Malam itu, ketika matahari terbenam di atas Wordville, setiap huruf berada di tempatnya. Dan S duduk di antara R dan T, kecil dan bercahaya, mengetahui sesuatu yang belum ia ketahui pagi tadi: setiap huruf itu penting."
      }
    ],
    quiz: [
      {
        questionEn: "Which letter went missing?",
        questionId: "Huruf mana yang menghilang?",
        optionsEn: ["The letter A", "The letter S", "The letter Z", "The letter M"],
        optionsId: ["Huruf A", "Huruf S", "Huruf Z", "Huruf M"],
        correctIndex: 1
      },
      {
        questionEn: "Why did S hide behind the library?",
        questionId: "Mengapa S bersembunyi di belakang perpustakaan?",
        optionsEn: ["She was playing a game", "She thought nobody needed her", "She was tired", "She was lost"],
        optionsId: ["Ia sedang bermain", "Ia merasa tidak dibutuhkan siapa pun", "Ia lelah", "Ia tersesat"],
        correctIndex: 1
      },
      {
        questionEn: "What did the letters help S understand?",
        questionId: "Apa yang membuat S mengerti berkat bantuan huruf-huruf lain?",
        optionsEn: ["That she was the best letter", "That every letter matters", "That she should stay hidden", "That words are easy"],
        optionsId: ["Bahwa ia huruf terbaik", "Bahwa setiap huruf itu penting", "Bahwa ia sebaiknya tetap bersembunyi", "Bahwa kata itu mudah"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "seven-seeds-for-grandmother",
    titleEn: "Seven Seeds for Grandmother",
    titleId: "Tujuh Benih untuk Nenek",
    descriptionEn: "Dita has seven sunflower seeds and a whole garden to plan. A gentle counting story about sharing, waiting and watching things grow.",
    descriptionId: "Dita punya tujuh benih bunga matahari dan sebuah kebun untuk direncanakan. Cerita berhitung yang lembut tentang berbagi, menunggu, dan melihat sesuatu tumbuh.",
    categorySlug: "numbers",
    authorSlug: "axto-creative-team",
    coverEmoji: "🌻",
    coverPalette: "meadow",
    ageMin: 3,
    ageMax: 6,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "seeds-1",
        textEn: "Grandmother gave Dita a small paper packet. Inside were seven sunflower seeds — flat, striped, and light as buttons. \"Count them,\" said Grandmother. So Dita did. One, two, three, four, five, six, seven.",
        textId: "Nenek memberi Dita sebuah bungkus kertas kecil. Di dalamnya ada tujuh benih bunga matahari — pipih, bergaris, dan seringan kancing. \"Hitunglah,\" kata Nenek. Maka Dita menghitung. Satu, dua, tiga, empat, lima, enam, tujuh."
      },
      {
        illustrationSeed: "seeds-2",
        textEn: "Dita planted the first seed by the gate, so it could say hello to everyone who came. That left six seeds in the packet.",
        textId: "Dita menanam benih pertama di dekat gerbang, supaya ia bisa menyapa siapa pun yang datang. Tinggal enam benih di dalam bungkus."
      },
      {
        illustrationSeed: "seeds-3",
        textEn: "She planted the second and third seeds side by side under the window, so they would grow up together like sisters. Five seeds left.",
        textId: "Ia menanam benih kedua dan ketiga berdampingan di bawah jendela, supaya keduanya tumbuh bersama seperti kakak beradik. Tinggal lima benih."
      },
      {
        illustrationSeed: "seeds-4",
        textEn: "The fourth seed went to her neighbour Bayu, who had no garden at all, only a blue pot on a step. Four seeds left, and Bayu grinning at his pot.",
        textId: "Benih keempat diberikan kepada tetangganya, Bayu, yang tidak punya kebun sama sekali, hanya sebuah pot biru di anak tangga. Tinggal empat benih, dan Bayu tersenyum lebar menatap potnya."
      },
      {
        illustrationSeed: "seeds-5",
        textEn: "The fifth and sixth seeds she pressed into the earth behind the kitchen, where the afternoon sun stayed longest. Two seeds left, rattling in the packet.",
        textId: "Benih kelima dan keenam ia tekan ke dalam tanah di belakang dapur, tempat matahari sore bertahan paling lama. Tinggal dua benih, bergemerincing di dalam bungkus."
      },
      {
        illustrationSeed: "seeds-6",
        textEn: "Dita held the last two in her palm and thought for a long time. Then she planted one — and kept one. \"For next year,\" she told herself. \"So there is always a beginning left over.\"",
        textId: "Dita menggenggam dua benih terakhir di telapak tangannya dan berpikir lama. Lalu ia menanam satu — dan menyimpan satu. \"Untuk tahun depan,\" katanya pada diri sendiri. \"Supaya selalu ada permulaan yang tersisa.\""
      },
      {
        illustrationSeed: "seeds-7",
        textEn: "Then came the hardest part: waiting. Nothing happened on Monday. Nothing happened on Tuesday. Dita checked every single morning, and the soil stayed brown and quiet.",
        textId: "Lalu tibalah bagian tersulit: menunggu. Tidak ada apa-apa pada Senin. Tidak ada apa-apa pada Selasa. Dita memeriksa setiap pagi, dan tanah tetap cokelat dan diam."
      },
      {
        illustrationSeed: "seeds-8",
        textEn: "On the ninth morning, one green loop pushed up by the gate. By the end of the month there were six green stems, and on Bayu's blue step, a seventh reaching for the light.",
        textId: "Pada pagi kesembilan, satu lengkungan hijau menyembul di dekat gerbang. Menjelang akhir bulan ada enam batang hijau, dan di anak tangga biru milik Bayu, batang ketujuh menjulur ke arah cahaya."
      },
      {
        illustrationSeed: "seeds-9",
        textEn: "In summer they stood taller than Dita, taller than Grandmother, six golden faces turning slowly through the day. And in Dita's pocket, wrapped in paper, one seed waited quietly for next year.",
        textId: "Di musim panas mereka berdiri lebih tinggi dari Dita, lebih tinggi dari Nenek, enam wajah keemasan yang berputar perlahan sepanjang hari. Dan di saku Dita, terbungkus kertas, satu benih menunggu dengan tenang untuk tahun depan."
      }
    ],
    quiz: [
      {
        questionEn: "How many seeds did Grandmother give Dita?",
        questionId: "Berapa benih yang Nenek berikan kepada Dita?",
        optionsEn: ["Five", "Six", "Seven", "Ten"],
        optionsId: ["Lima", "Enam", "Tujuh", "Sepuluh"],
        correctIndex: 2
      },
      {
        questionEn: "Who did Dita give one seed to?",
        questionId: "Kepada siapa Dita memberikan satu benih?",
        optionsEn: ["Her teacher", "Her neighbour Bayu", "Her cat", "Nobody"],
        optionsId: ["Gurunya", "Tetangganya, Bayu", "Kucingnya", "Tidak ada"],
        correctIndex: 1
      },
      {
        questionEn: "Why did Dita keep the very last seed?",
        questionId: "Mengapa Dita menyimpan benih yang terakhir?",
        optionsEn: ["She forgot to plant it", "To save a beginning for next year", "She dropped it", "She did not like it"],
        optionsId: ["Ia lupa menanamnya", "Untuk menyimpan permulaan bagi tahun depan", "Ia menjatuhkannya", "Ia tidak menyukainya"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-bus-that-was-always-late",
    titleEn: "The Bus That Was Always Late",
    titleId: "Bus yang Selalu Terlambat",
    descriptionEn: "Number 12 is the slowest bus in the city, and everybody complains — until the morning they find out why.",
    descriptionId: "Bus Nomor 12 adalah bus paling lambat di kota, dan semua orang mengeluh — sampai suatu pagi mereka tahu alasannya.",
    categorySlug: "vehicles",
    authorSlug: "axto-creative-team",
    coverEmoji: "🚌",
    coverPalette: "citrus",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "bus12-1",
        textEn: "Every bus in the city had a number, and every number had a reputation. Number 3 was fast. Number 8 was clean. And Number 12 was always, always late.",
        textId: "Setiap bus di kota punya nomor, dan setiap nomor punya nama baik atau buruk. Nomor 3 cepat. Nomor 8 bersih. Dan Nomor 12 selalu, selalu terlambat."
      },
      {
        illustrationSeed: "bus12-2",
        textEn: "\"Four minutes behind,\" people muttered at the stop by the market. \"Six minutes,\" they said at the school gates. Number 12 never argued. He just opened his doors and said good morning.",
        textId: "\"Terlambat empat menit,\" gerutu orang-orang di halte dekat pasar. \"Enam menit,\" kata mereka di gerbang sekolah. Nomor 12 tidak pernah membantah. Ia hanya membuka pintunya dan mengucapkan selamat pagi."
      },
      {
        illustrationSeed: "bus12-3",
        textEn: "One rainy Thursday, a girl named Sari decided to find out why. She got on at the very first stop, sat at the very front, and watched the whole route from beginning to end.",
        textId: "Pada suatu Kamis yang hujan, seorang gadis bernama Sari memutuskan mencari tahu sebabnya. Ia naik di halte paling pertama, duduk paling depan, dan mengamati seluruh rute dari awal sampai akhir."
      },
      {
        illustrationSeed: "bus12-4",
        textEn: "At the third stop, Number 12 waited while old Pak Harun folded his umbrella and climbed the step, one hand on the rail. That took a while. Nobody hurried him.",
        textId: "Di halte ketiga, Nomor 12 menunggu sementara Pak Harun yang sudah tua melipat payungnya dan menaiki tangga, satu tangan memegang pegangan. Itu memakan waktu. Tidak ada yang menyuruhnya cepat."
      },
      {
        illustrationSeed: "bus12-5",
        textEn: "At the seventh stop, he waited for a mother with a stroller and a bag of shopping, and then he knelt down — the whole front of him tilting toward the kerb — so she would not have to lift anything.",
        textId: "Di halte ketujuh, ia menunggu seorang ibu dengan kereta bayi dan tas belanjaan, lalu ia merunduk — seluruh bagian depannya miring ke arah trotoar — supaya ibu itu tidak perlu mengangkat apa pun."
      },
      {
        illustrationSeed: "bus12-6",
        textEn: "At the eleventh stop, a boy came running down the hill, one shoe untied, waving. Number 12 had already closed his doors. He opened them again.",
        textId: "Di halte kesebelas, seorang anak lelaki berlari menuruni bukit, satu talinya lepas, sambil melambai. Nomor 12 sudah menutup pintunya. Ia membukanya lagi."
      },
      {
        illustrationSeed: "bus12-7",
        textEn: "Sari counted it all up in her notebook. Four minutes here, six there. Every single minute belonged to somebody. Not one of them had been wasted.",
        textId: "Sari menghitung semuanya di buku catatannya. Empat menit di sini, enam menit di sana. Setiap menit adalah milik seseorang. Tidak satu pun yang terbuang."
      },
      {
        illustrationSeed: "bus12-8",
        textEn: "The next morning, Sari pinned a paper to the shelter by the market. It said: THE NUMBER 12 IS LATE BECAUSE HE WAITS FOR US. And underneath, in smaller letters: THANK YOU.",
        textId: "Pagi berikutnya, Sari menempelkan selembar kertas di halte dekat pasar. Isinya: NOMOR 12 TERLAMBAT KARENA IA MENUNGGU KITA. Dan di bawahnya, dengan huruf lebih kecil: TERIMA KASIH."
      },
      {
        illustrationSeed: "bus12-9",
        textEn: "People still checked their watches at the stop by the market. But now, when the old blue bus came round the corner four minutes behind, somebody usually smiled.",
        textId: "Orang-orang masih melihat jam tangan mereka di halte dekat pasar. Tetapi kini, ketika bus biru tua itu membelok terlambat empat menit, biasanya ada yang tersenyum."
      }
    ],
    quiz: [
      {
        questionEn: "What was Number 12 known for?",
        questionId: "Nomor 12 terkenal karena apa?",
        optionsEn: ["Being the fastest", "Being always late", "Being the cleanest", "Being the newest"],
        optionsId: ["Paling cepat", "Selalu terlambat", "Paling bersih", "Paling baru"],
        correctIndex: 1
      },
      {
        questionEn: "Why was the bus late?",
        questionId: "Mengapa bus itu terlambat?",
        optionsEn: ["He was broken", "He waited for people who needed time", "He took the wrong road", "He stopped for lunch"],
        optionsId: ["Ia rusak", "Ia menunggu orang-orang yang butuh waktu", "Ia salah jalan", "Ia berhenti untuk makan siang"],
        correctIndex: 1
      },
      {
        questionEn: "What did Sari put up at the bus shelter?",
        questionId: "Apa yang Sari tempelkan di halte?",
        optionsEn: ["A complaint", "A note explaining and thanking him", "A timetable", "A drawing of herself"],
        optionsId: ["Surat keluhan", "Catatan penjelasan dan ucapan terima kasih", "Jadwal", "Gambar dirinya"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "pip-the-robot-who-could-not-hurry",
    titleEn: "Pip, the Robot Who Could Not Hurry",
    titleId: "Pip, Robot yang Tak Bisa Terburu-buru",
    descriptionEn: "Every robot in the workshop is built for speed except Pip, who does one thing at a time — until the day speed is not what is needed.",
    descriptionId: "Setiap robot di bengkel dirancang untuk cepat, kecuali Pip, yang mengerjakan satu hal pada satu waktu — sampai tiba hari ketika kecepatan bukanlah yang dibutuhkan.",
    categorySlug: "robots-tech",
    authorSlug: "axto-creative-team",
    coverEmoji: "🤖",
    coverPalette: "twilight",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "pip-1",
        textEn: "In a workshop at the edge of the city, seven robots worked all day. Six of them were fast. Zeta could sort a thousand bolts in a minute. Orin could paint a whole wall before lunch.",
        textId: "Di sebuah bengkel di pinggir kota, tujuh robot bekerja sepanjang hari. Enam di antaranya cepat. Zeta bisa memilah seribu baut dalam semenit. Orin bisa mengecat seluruh dinding sebelum makan siang."
      },
      {
        illustrationSeed: "pip-2",
        textEn: "And then there was Pip. Pip was small and round and moved as if he were thinking about each step. One bolt. Then the next bolt. Then the one after that.",
        textId: "Lalu ada Pip. Pip kecil dan bulat, dan bergerak seolah-olah memikirkan setiap langkahnya. Satu baut. Lalu baut berikutnya. Lalu yang setelah itu."
      },
      {
        illustrationSeed: "pip-3",
        textEn: "\"You are too slow,\" the other robots beeped, not unkindly. \"We finish before you have started.\" Pip did not argue. He picked up the next bolt and turned it over in his little claw.",
        textId: "\"Kau terlalu lambat,\" bunyi robot-robot lain, tanpa maksud jahat. \"Kami sudah selesai sebelum kau mulai.\" Pip tidak membantah. Ia mengambil baut berikutnya dan membolak-baliknya dengan capit kecilnya."
      },
      {
        illustrationSeed: "pip-4",
        textEn: "One winter morning, the workshop's oldest machine stopped. It was the great weaving loom, the one that made the blankets for the whole town, and inside it something had come loose.",
        textId: "Pada suatu pagi musim dingin, mesin tertua di bengkel itu berhenti. Itu adalah alat tenun besar, yang membuat selimut untuk seluruh kota, dan di dalamnya ada sesuatu yang lepas."
      },
      {
        illustrationSeed: "pip-5",
        textEn: "Zeta went in first and came out in four seconds. \"Too many threads,\" she said. Orin tried and came out faster still. \"Can't see. Can't reach. Can't tell what's broken.\"",
        textId: "Zeta masuk lebih dulu dan keluar dalam empat detik. \"Terlalu banyak benang,\" katanya. Orin mencoba dan keluar lebih cepat lagi. \"Tidak terlihat. Tidak terjangkau. Tidak jelas apa yang rusak.\""
      },
      {
        illustrationSeed: "pip-6",
        textEn: "Pip went in last. He did not rush. He followed one thread with his light, all the way from the top to the bottom. Then the second thread. Then the third.",
        textId: "Pip masuk paling akhir. Ia tidak tergesa. Ia menyusuri satu benang dengan lampunya, dari ujung atas sampai ujung bawah. Lalu benang kedua. Lalu ketiga."
      },
      {
        illustrationSeed: "pip-7",
        textEn: "It took him until the light outside went orange. But on the four hundred and sixth thread, he found it — a tiny cracked hook, no bigger than a grain of rice, holding everything still.",
        textId: "Waktunya sampai cahaya di luar berubah jingga. Namun pada benang keempat ratus enam, ia menemukannya — sebuah kait kecil yang retak, tak lebih besar dari sebutir beras, yang menahan semuanya."
      },
      {
        illustrationSeed: "pip-8",
        textEn: "Pip lifted the broken hook out and set a new one in. The loom shuddered, hummed, and began to weave. Outside, the six fast robots were quiet.",
        textId: "Pip mengangkat kait yang patah dan memasang yang baru. Alat tenun itu bergetar, berdengung, dan mulai menenun. Di luar, enam robot cepat itu terdiam."
      },
      {
        illustrationSeed: "pip-9",
        textEn: "After that, nobody in the workshop said Pip was too slow. They said Pip was careful. And when something small and important went wrong, they knew exactly who to ask.",
        textId: "Sejak itu, tidak ada lagi yang mengatakan Pip terlalu lambat. Mereka mengatakan Pip teliti. Dan ketika ada sesuatu yang kecil namun penting rusak, mereka tahu persis siapa yang harus diminta bantuan."
      }
    ],
    quiz: [
      {
        questionEn: "What made Pip different from the other robots?",
        questionId: "Apa yang membuat Pip berbeda dari robot lain?",
        optionsEn: ["He was the biggest", "He worked slowly and carefully", "He never worked", "He was the newest"],
        optionsId: ["Ia paling besar", "Ia bekerja lambat dan teliti", "Ia tidak pernah bekerja", "Ia paling baru"],
        correctIndex: 1
      },
      {
        questionEn: "What was broken inside the loom?",
        questionId: "Apa yang rusak di dalam alat tenun?",
        optionsEn: ["A large wheel", "A tiny cracked hook", "The roof", "A whole engine"],
        optionsId: ["Roda besar", "Kait kecil yang retak", "Atapnya", "Seluruh mesin"],
        correctIndex: 1
      },
      {
        questionEn: "What did the other robots learn about Pip?",
        questionId: "Apa yang dipelajari robot lain tentang Pip?",
        optionsEn: ["That he was too slow", "That being careful is its own kind of skill", "That he should work faster", "That he was broken"],
        optionsId: ["Bahwa ia terlalu lambat", "Bahwa teliti juga sebuah keahlian", "Bahwa ia harus lebih cepat", "Bahwa ia rusak"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-night-the-lights-stayed-on",
    titleEn: "The Night the Lights Stayed On",
    titleId: "Malam Ketika Lampu Tetap Menyala",
    descriptionEn: "A storm knocks out the power on the busiest street in town, and a small girl discovers how many people quietly keep a city running.",
    descriptionId: "Badai memadamkan listrik di jalan tersibuk di kota, dan seorang gadis kecil menemukan betapa banyak orang yang diam-diam menjaga kota tetap berjalan.",
    categorySlug: "community-helpers",
    authorSlug: "axto-creative-team",
    coverEmoji: "👩‍🚒",
    coverPalette: "twilight",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "lights-1",
        textEn: "The storm came in fast, the way storms do. First the wind. Then the rain, sideways against the windows. And then, all at once, every light on Melati Street went out.",
        textId: "Badai datang cepat, seperti biasanya badai datang. Mula-mula angin. Lalu hujan, menyamping menerpa jendela. Dan kemudian, sekaligus, setiap lampu di Jalan Melati padam."
      },
      {
        illustrationSeed: "lights-2",
        textEn: "Nadia stood at the window with a candle. Below, the street was dark except for one thing: the hospital at the end of the road, still glowing, every window bright.",
        textId: "Nadia berdiri di jendela dengan sebatang lilin. Di bawah, jalanan gelap kecuali satu hal: rumah sakit di ujung jalan, masih bercahaya, setiap jendelanya terang."
      },
      {
        illustrationSeed: "lights-3",
        textEn: "\"How is it still on?\" she asked. Her father pointed. \"Look properly,\" he said. And Nadia saw a small figure in a yellow coat, standing in the rain beside a humming grey box.",
        textId: "\"Kenapa masih menyala?\" tanyanya. Ayahnya menunjuk. \"Lihat baik-baik,\" katanya. Dan Nadia melihat sesosok kecil bermantel kuning, berdiri di tengah hujan di samping kotak abu-abu yang berdengung."
      },
      {
        illustrationSeed: "lights-4",
        textEn: "That was Bu Rina, the engineer. She had left her dinner on the table and driven out in the dark to start the backup generator, and she would stand there until the power came back.",
        textId: "Itu Bu Rina, sang teknisi. Ia meninggalkan makan malamnya di meja dan berkendara dalam gelap untuk menyalakan genset cadangan, dan ia akan berdiri di sana sampai listrik kembali."
      },
      {
        illustrationSeed: "lights-5",
        textEn: "Down at the corner, two firefighters were dragging a fallen branch off the road so the ambulances could pass. One of them was singing, very badly, to keep the other one laughing.",
        textId: "Di ujung jalan, dua petugas pemadam kebakaran menyeret dahan tumbang dari jalan supaya ambulans bisa lewat. Salah satunya bernyanyi, sangat sumbang, agar temannya tetap tertawa."
      },
      {
        illustrationSeed: "lights-6",
        textEn: "In the little shop below, Pak Umar had opened his door and set out a box of candles. \"Take what you need,\" said the sign. \"Pay me on Friday.\" People came and went all evening.",
        textId: "Di toko kecil di bawah, Pak Umar membuka pintunya dan meletakkan sekotak lilin. \"Ambil seperlunya,\" tulis papannya. \"Bayar hari Jumat.\" Orang-orang datang dan pergi sepanjang malam."
      },
      {
        illustrationSeed: "lights-7",
        textEn: "And on the third floor, Bu Sari the teacher went door to door with a torch, knocking gently, checking that everyone who lived alone had water, a light, and somebody who knew where they were.",
        textId: "Dan di lantai tiga, Bu Sari sang guru berkeliling dari pintu ke pintu dengan senter, mengetuk pelan, memastikan setiap orang yang tinggal sendirian punya air, penerangan, dan seseorang yang tahu keberadaannya."
      },
      {
        illustrationSeed: "lights-8",
        textEn: "At half past two in the morning, the streetlights flickered and came back on all together. Nadia was still awake. She watched Bu Rina climb into her van, soaked through, and drive home.",
        textId: "Pukul setengah tiga dini hari, lampu jalan berkedip dan menyala kembali serentak. Nadia masih terjaga. Ia melihat Bu Rina naik ke mobilnya, basah kuyup, lalu pulang."
      },
      {
        illustrationSeed: "lights-9",
        textEn: "The next day the street looked ordinary again. But Nadia knew something new about it now. A city does not run by itself. It runs because, in the dark, people go outside.",
        textId: "Keesokan harinya jalan itu tampak biasa lagi. Tetapi kini Nadia tahu sesuatu yang baru. Sebuah kota tidak berjalan dengan sendirinya. Ia berjalan karena, dalam kegelapan, ada orang-orang yang keluar rumah."
      }
    ],
    quiz: [
      {
        questionEn: "Why did the hospital still have lights?",
        questionId: "Mengapa rumah sakit masih punya penerangan?",
        optionsEn: ["It had its own sun", "An engineer started the backup generator", "It was not in the storm", "The lights never go out there"],
        optionsId: ["Ia punya matahari sendiri", "Seorang teknisi menyalakan genset cadangan", "Ia tidak terkena badai", "Lampunya tidak pernah padam"],
        correctIndex: 1
      },
      {
        questionEn: "What did Pak Umar do with his candles?",
        questionId: "Apa yang Pak Umar lakukan dengan lilin-lilinnya?",
        optionsEn: ["Sold them at a high price", "Let people take what they needed and pay later", "Kept them for himself", "Threw them away"],
        optionsId: ["Menjualnya dengan harga tinggi", "Membiarkan orang mengambil seperlunya dan membayar nanti", "Menyimpannya sendiri", "Membuangnya"],
        correctIndex: 1
      },
      {
        questionEn: "What did Nadia understand by the end?",
        questionId: "Apa yang Nadia pahami di akhir cerita?",
        optionsEn: ["Storms are fun", "A city keeps running because people go out and help", "Lights fix themselves", "She should stay awake every night"],
        optionsId: ["Badai itu menyenangkan", "Kota tetap berjalan karena ada orang yang keluar dan menolong", "Lampu memperbaiki dirinya sendiri", "Ia harus begadang setiap malam"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "four-seasons-in-one-garden",
    titleEn: "Four Seasons in One Garden",
    titleId: "Empat Musim dalam Satu Kebun",
    descriptionEn: "An old apple tree tells a boy what she does all year — and why the empty months matter as much as the full ones.",
    descriptionId: "Sebatang pohon apel tua bercerita kepada seorang anak tentang apa yang ia lakukan sepanjang tahun — dan mengapa bulan-bulan yang kosong sama pentingnya dengan yang penuh.",
    categorySlug: "weather-seasons",
    authorSlug: "axto-creative-team",
    coverEmoji: "🌦️",
    coverPalette: "meadow",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "seasons-1",
        textEn: "In the corner of the garden stood an apple tree so old that nobody remembered planting her. Arif liked to sit against her trunk and talk, and sometimes it seemed as though she answered.",
        textId: "Di sudut kebun berdiri sebatang pohon apel yang begitu tua sampai tidak ada yang ingat siapa menanamnya. Arif suka duduk bersandar di batangnya sambil berbicara, dan kadang seolah-olah pohon itu menjawab."
      },
      {
        illustrationSeed: "seasons-2",
        textEn: "In spring she was covered in white blossom, so thick that the bees came from three gardens away. \"This is the loud part,\" she said. \"Everybody likes me in spring.\"",
        textId: "Di musim semi ia dipenuhi bunga putih, begitu lebat sampai lebah datang dari tiga kebun jauhnya. \"Ini bagian yang ramai,\" katanya. \"Semua orang menyukaiku di musim semi.\""
      },
      {
        illustrationSeed: "seasons-3",
        textEn: "In summer the blossom fell and small hard green knots appeared where each flower had been. \"Nothing to see,\" said Arif, disappointed. \"Everything to do,\" said the tree.",
        textId: "Di musim panas bunga berguguran dan muncul bulatan hijau kecil dan keras di tempat setiap bunga tadi berada. \"Tidak ada yang bisa dilihat,\" kata Arif, kecewa. \"Justru banyak yang sedang dikerjakan,\" kata pohon itu."
      },
      {
        illustrationSeed: "seasons-4",
        textEn: "All through the hot months she drank from deep down and pushed sweetness up into every green knot, slowly, without any fuss at all. Arif went to the sea and came back taller.",
        textId: "Sepanjang bulan-bulan panas ia minum dari kedalaman tanah dan mendorong rasa manis ke setiap bulatan hijau, perlahan, tanpa keributan sedikit pun. Arif pergi ke laut dan pulang dengan badan lebih tinggi."
      },
      {
        illustrationSeed: "seasons-5",
        textEn: "In autumn the apples came down. Red ones, yellow ones, some with a bruise on one side. The whole family carried baskets, and the kitchen smelled of them for weeks.",
        textId: "Di musim gugur apel-apel berjatuhan. Ada yang merah, ada yang kuning, ada yang memar di satu sisi. Seluruh keluarga membawa keranjang, dan dapur berbau apel selama berminggu-minggu."
      },
      {
        illustrationSeed: "seasons-6",
        textEn: "Then the leaves turned and let go, one at a time, until the tree stood dark and bare against a grey sky. Arif looked up at her and felt sad. \"Are you finished?\" he asked.",
        textId: "Lalu daun-daun berubah warna dan berlepasan, satu per satu, sampai pohon itu berdiri gelap dan gundul di bawah langit kelabu. Arif menengadah dan merasa sedih. \"Apakah kau sudah selesai?\" tanyanya."
      },
      {
        illustrationSeed: "seasons-7",
        textEn: "\"I am resting,\" she said. \"Under the ground I am still working, but slowly, in the dark, where nobody claps. If I did not have winter, I could not have spring.\"",
        textId: "\"Aku sedang beristirahat,\" katanya. \"Di bawah tanah aku masih bekerja, tetapi perlahan, dalam gelap, tempat tak seorang pun bertepuk tangan. Jika aku tidak punya musim dingin, aku tidak akan punya musim semi.\""
      },
      {
        illustrationSeed: "seasons-8",
        textEn: "Arif thought about that all winter. He thought about it on the days he was tired, and on the days when nothing he did seemed to show, and it made him feel a little better.",
        textId: "Arif memikirkan itu sepanjang musim dingin. Ia memikirkannya pada hari-hari ketika ia lelah, dan pada hari-hari ketika apa pun yang ia kerjakan tampak tidak membuahkan hasil, dan itu membuatnya sedikit lebih tenang."
      },
      {
        illustrationSeed: "seasons-9",
        textEn: "In March, one morning, he found a single white bud on the lowest branch. He did not tell anybody for three days. He just came out each morning to look at it.",
        textId: "Pada bulan Maret, suatu pagi, ia menemukan satu kuncup putih di dahan terbawah. Ia tidak memberi tahu siapa pun selama tiga hari. Ia hanya keluar setiap pagi untuk memandanginya."
      }
    ],
    quiz: [
      {
        questionEn: "What did the tree say she was doing in summer?",
        questionId: "Apa yang dikatakan pohon sedang ia lakukan di musim panas?",
        optionsEn: ["Nothing at all", "Pushing sweetness into the small green apples", "Sleeping", "Growing new leaves only"],
        optionsId: ["Tidak melakukan apa-apa", "Mendorong rasa manis ke apel hijau kecil", "Tidur", "Hanya menumbuhkan daun baru"],
        correctIndex: 1
      },
      {
        questionEn: "Why does the tree need winter?",
        questionId: "Mengapa pohon itu membutuhkan musim dingin?",
        optionsEn: ["To hide from people", "Because resting is what makes spring possible", "Because she dislikes apples", "She does not need it"],
        optionsId: ["Untuk bersembunyi dari orang", "Karena istirahat itulah yang memungkinkan musim semi", "Karena ia tidak suka apel", "Ia tidak membutuhkannya"],
        correctIndex: 1
      },
      {
        questionEn: "What did Arif find in March?",
        questionId: "Apa yang Arif temukan pada bulan Maret?",
        optionsEn: ["A ripe apple", "A single white bud", "A bird's nest", "A fallen branch"],
        optionsId: ["Apel matang", "Satu kuncup putih", "Sarang burung", "Dahan tumbang"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-boy-who-forgot-to-breathe",
    titleEn: "The Boy Who Forgot to Breathe",
    titleId: "Anak yang Lupa Bernapas",
    descriptionEn: "Before every race, Ravi's chest goes tight and fast. His grandfather teaches him the oldest trick there is for getting it back.",
    descriptionId: "Sebelum setiap lomba, dada Ravi terasa sesak dan berdebar. Kakeknya mengajarkan cara paling tua untuk menenangkannya kembali.",
    categorySlug: "health-body",
    authorSlug: "axto-creative-team",
    coverEmoji: "🫁",
    coverPalette: "ocean",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "breathe-1",
        textEn: "Ravi could run. Everybody said so. But on the morning of a race, something happened that he could not explain: his chest went tight, his hands went cold, and his breath came in small quick sips.",
        textId: "Ravi bisa berlari. Semua orang mengatakannya. Tetapi pada pagi hari lomba, ada sesuatu yang tidak bisa ia jelaskan: dadanya terasa sesak, tangannya dingin, dan napasnya datang pendek-pendek dan cepat."
      },
      {
        illustrationSeed: "breathe-2",
        textEn: "\"You are breathing like a rabbit,\" said his grandfather, watching him at the kitchen table. \"Little sips at the top. Nothing reaching the bottom.\"",
        textId: "\"Kau bernapas seperti kelinci,\" kata kakeknya, memperhatikannya di meja dapur. \"Tegukan kecil di bagian atas. Tidak ada yang sampai ke bawah.\""
      },
      {
        illustrationSeed: "breathe-3",
        textEn: "Grandfather put one of Ravi's hands on his own chest and one on his belly. \"Now,\" he said. \"Which hand is moving?\" Ravi felt. Only the top one. The belly hand was still.",
        textId: "Kakek meletakkan satu tangan Ravi di dadanya sendiri dan satu di perutnya. \"Sekarang,\" katanya. \"Tangan mana yang bergerak?\" Ravi merasakannya. Hanya yang atas. Tangan di perut diam saja."
      },
      {
        illustrationSeed: "breathe-4",
        textEn: "\"Your lungs go all the way down here,\" said Grandfather, tapping the low hand. \"When you are frightened you forget the bottom half. So we are going to remember it.\"",
        textId: "\"Paru-parumu sampai ke bawah sini,\" kata Kakek sambil menepuk tangan yang bawah. \"Saat kau takut, kau lupa separuh bagian bawahnya. Jadi kita akan mengingatnya kembali.\""
      },
      {
        illustrationSeed: "breathe-5",
        textEn: "They practised on the step outside. In through the nose while counting to four. Hold, gently, for four. Out through the mouth, slowly, for six — longer going out than coming in.",
        textId: "Mereka berlatih di anak tangga depan rumah. Tarik lewat hidung sambil menghitung sampai empat. Tahan, pelan-pelan, empat hitungan. Buang lewat mulut, perlahan, enam hitungan — lebih lama keluar daripada masuk."
      },
      {
        illustrationSeed: "breathe-6",
        textEn: "The first time, Ravi felt silly. The second time, he noticed his shoulders had come down. The fourth time, the belly hand moved, and something in his chest let go.",
        textId: "Pertama kali, Ravi merasa konyol. Kedua kali, ia menyadari bahunya sudah turun. Keempat kali, tangan di perut ikut bergerak, dan ada sesuatu di dadanya yang mengendur."
      },
      {
        illustrationSeed: "breathe-7",
        textEn: "\"It is not magic,\" Grandfather said. \"A long breath out tells your body the danger has passed. Your body believes your breathing before it believes your thinking.\"",
        textId: "\"Ini bukan sihir,\" kata Kakek. \"Napas panjang yang dikeluarkan memberi tahu tubuhmu bahwa bahaya sudah lewat. Tubuhmu lebih percaya napasmu daripada pikiranmu.\""
      },
      {
        illustrationSeed: "breathe-8",
        textEn: "On Saturday, at the line, Ravi's hands went cold as usual. He put one on his belly where nobody could see. In for four. Hold. Out for six. And again.",
        textId: "Pada hari Sabtu, di garis start, tangan Ravi dingin seperti biasa. Ia meletakkan satu tangan di perutnya, tempat tak seorang pun melihat. Masuk empat hitungan. Tahan. Keluar enam hitungan. Dan sekali lagi."
      },
      {
        illustrationSeed: "breathe-9",
        textEn: "He came third. He was not sure whether the breathing made him faster. But he knew it made the waiting bearable, and that was the part he had been dreading all along.",
        textId: "Ia finis di urutan ketiga. Ia tidak yakin apakah latihan napas itu membuatnya lebih cepat. Tetapi ia tahu itu membuat masa menunggu jadi tertahankan, dan bagian itulah yang selama ini paling ia takuti."
      }
    ],
    quiz: [
      {
        questionEn: "What happened to Ravi before a race?",
        questionId: "Apa yang terjadi pada Ravi sebelum lomba?",
        optionsEn: ["He felt sleepy", "His chest went tight and his breath went short", "He got hungry", "He forgot the way"],
        optionsId: ["Ia mengantuk", "Dadanya sesak dan napasnya pendek", "Ia lapar", "Ia lupa jalan"],
        correctIndex: 1
      },
      {
        questionEn: "What did Grandfather teach him to do?",
        questionId: "Apa yang Kakek ajarkan kepadanya?",
        optionsEn: ["Run faster", "Breathe in for four and out for six", "Skip the race", "Hold his breath"],
        optionsId: ["Berlari lebih cepat", "Menarik napas empat hitungan dan mengeluarkan enam hitungan", "Membolos lomba", "Menahan napas"],
        correctIndex: 1
      },
      {
        questionEn: "Why does a long breath out help?",
        questionId: "Mengapa napas panjang yang dikeluarkan itu membantu?",
        optionsEn: ["It makes you taller", "It tells the body the danger has passed", "It makes noise", "It uses less air"],
        optionsId: ["Membuat kita lebih tinggi", "Memberi tahu tubuh bahwa bahaya sudah lewat", "Menimbulkan suara", "Menghemat udara"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-song-with-no-words",
    titleEn: "The Song With No Words",
    titleId: "Lagu Tanpa Kata",
    descriptionEn: "A new girl at school speaks a language nobody else does — until somebody hands her a drum.",
    descriptionId: "Seorang murid baru di sekolah berbicara dalam bahasa yang tak seorang pun mengerti — sampai seseorang memberinya sebuah gendang.",
    categorySlug: "music-rhymes",
    authorSlug: "axto-creative-team",
    coverEmoji: "🥁",
    coverPalette: "citrus",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "song-1",
        textEn: "Amara arrived at the school in the middle of term, which is the hardest time to arrive. She had a red bag, careful eyes, and not one word of the language everybody else was speaking.",
        textId: "Amara tiba di sekolah di tengah semester, waktu yang paling sulit untuk datang. Ia membawa tas merah, bermata hati-hati, dan tidak menguasai satu kata pun bahasa yang dipakai semua orang."
      },
      {
        illustrationSeed: "song-2",
        textEn: "For two weeks she said almost nothing. She smiled when people smiled. She followed where people went. At break she sat by the wall and watched the games she did not know the rules of.",
        textId: "Selama dua minggu ia hampir tidak berbicara. Ia tersenyum ketika orang tersenyum. Ia mengikuti ke mana orang pergi. Saat istirahat ia duduk di dekat tembok dan menonton permainan yang aturannya tidak ia ketahui."
      },
      {
        illustrationSeed: "song-3",
        textEn: "On a Thursday, the music room door was open. Inside there were shakers, a xylophone, and an old drum with a cracked rim that nobody chose because it looked broken.",
        textId: "Pada suatu Kamis, pintu ruang musik terbuka. Di dalamnya ada marakas, xilofon, dan sebuah gendang tua dengan bibir retak yang tidak dipilih siapa pun karena terlihat rusak."
      },
      {
        illustrationSeed: "song-4",
        textEn: "Amara picked up the drum. She turned it over once. Then she began to play — not loudly, but with a pattern underneath it, a rhythm that went somewhere and came back.",
        textId: "Amara mengambil gendang itu. Ia membaliknya sekali. Lalu ia mulai memainkannya — tidak keras, tetapi dengan pola di dalamnya, irama yang pergi ke suatu tempat lalu kembali."
      },
      {
        illustrationSeed: "song-5",
        textEn: "One by one, children stopped what they were doing and came to the doorway. Nobody asked her anything. They just listened, because for once there was nothing to translate.",
        textId: "Satu per satu, anak-anak berhenti dari kegiatan mereka dan datang ke ambang pintu. Tidak ada yang bertanya apa pun. Mereka hanya mendengarkan, karena untuk sekali ini tidak ada yang perlu diterjemahkan."
      },
      {
        illustrationSeed: "song-6",
        textEn: "When she finished, a boy called Tomas picked up two shakers and tried to copy the pattern. He got it wrong. Amara laughed out loud — the first sound anyone had heard from her — and showed him again.",
        textId: "Ketika ia selesai, seorang anak bernama Tomas mengambil dua marakas dan mencoba menirukan polanya. Ia salah. Amara tertawa lepas — suara pertama yang pernah didengar orang darinya — lalu menunjukkannya lagi."
      },
      {
        illustrationSeed: "song-7",
        textEn: "By the end of break there were nine of them, banging and shaking and counting under their breath, and the pattern was going all the way round the room and back to Amara.",
        textId: "Menjelang akhir istirahat, ada sembilan anak, memukul dan mengocok dan menghitung dalam hati, dan pola itu berkeliling seluruh ruangan lalu kembali kepada Amara."
      },
      {
        illustrationSeed: "song-8",
        textEn: "She still could not ask for a pencil. She still went quiet when the teacher asked a question. But at break she was never by the wall again, and by December she was correcting Tomas in two languages.",
        textId: "Ia masih belum bisa meminta pensil. Ia masih terdiam ketika guru bertanya. Tetapi saat istirahat ia tidak pernah lagi duduk di dekat tembok, dan pada bulan Desember ia sudah membetulkan Tomas dalam dua bahasa."
      },
      {
        illustrationSeed: "song-9",
        textEn: "Years later, when somebody asked Tomas how they had become friends, he had to think about it. \"She didn't tell me anything,\" he said at last. \"She just played, and I heard her.\"",
        textId: "Bertahun-tahun kemudian, ketika seseorang bertanya kepada Tomas bagaimana mereka bisa berteman, ia harus berpikir sejenak. \"Ia tidak mengatakan apa-apa,\" katanya akhirnya. \"Ia hanya bermain, dan aku mendengarnya.\""
      }
    ],
    quiz: [
      {
        questionEn: "Why was it hard for Amara at first?",
        questionId: "Mengapa awalnya sulit bagi Amara?",
        optionsEn: ["She was not allowed outside", "She did not speak the language", "She had no bag", "She did not like school"],
        optionsId: ["Ia tidak boleh keluar", "Ia tidak bisa berbahasa itu", "Ia tidak punya tas", "Ia tidak suka sekolah"],
        correctIndex: 1
      },
      {
        questionEn: "What did Amara find in the music room?",
        questionId: "Apa yang Amara temukan di ruang musik?",
        optionsEn: ["A piano", "An old drum with a cracked rim", "A guitar", "A flute"],
        optionsId: ["Piano", "Gendang tua dengan bibir retak", "Gitar", "Seruling"],
        correctIndex: 1
      },
      {
        questionEn: "What helped the children get to know her?",
        questionId: "Apa yang membuat anak-anak mulai mengenalnya?",
        optionsEn: ["A test", "Playing rhythm together", "A teacher's instruction", "A letter"],
        optionsId: ["Ujian", "Bermain irama bersama", "Perintah guru", "Sepucuk surat"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-slowest-runner-on-the-team",
    titleEn: "The Slowest Runner on the Team",
    titleId: "Pelari Paling Lambat di Tim",
    descriptionEn: "Lina is last in every race she enters. So why does the coach put her name down for the relay?",
    descriptionId: "Lina selalu finis terakhir di setiap lomba. Lalu mengapa pelatih menuliskan namanya untuk lomba estafet?",
    categorySlug: "sports",
    authorSlug: "axto-creative-team",
    coverEmoji: "🏃",
    coverPalette: "meadow",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "relay-1",
        textEn: "Lina was the slowest runner on the team. This was not an opinion; it was a fact with a stopwatch behind it. She had finished last in the sixty metres four times in a row.",
        textId: "Lina adalah pelari paling lambat di tim. Itu bukan pendapat; itu fakta dengan stopwatch sebagai buktinya. Ia sudah finis terakhir di lari enam puluh meter empat kali berturut-turut."
      },
      {
        illustrationSeed: "relay-2",
        textEn: "So when the relay list went up on the board and her name was on it, she assumed it was a mistake. She stood in front of it for a long time, waiting for somebody to notice.",
        textId: "Maka ketika daftar estafet dipasang di papan dan namanya ada di sana, ia mengira itu keliru. Ia berdiri lama di depannya, menunggu ada yang menyadarinya."
      },
      {
        illustrationSeed: "relay-3",
        textEn: "\"It is not a mistake,\" said Coach Devi, without looking up. \"You are running second leg.\" Lina said, \"But I am the slowest.\" Coach Devi said, \"Yes. And you are the best at the handover.\"",
        textId: "\"Itu bukan keliru,\" kata Pelatih Devi tanpa mendongak. \"Kau lari di kaki kedua.\" Lina berkata, \"Tapi saya paling lambat.\" Pelatih Devi berkata, \"Ya. Dan kau paling baik dalam serah terima tongkat.\""
      },
      {
        illustrationSeed: "relay-4",
        textEn: "It was true, though Lina had never thought of it as a skill. She had spent weeks practising while the others raced: the reach, the flat palm, the not-looking-back, the timing of the first step.",
        textId: "Itu benar, meskipun Lina tidak pernah menganggapnya keahlian. Ia menghabiskan berminggu-minggu berlatih sementara yang lain berlomba: menjulurkan tangan, telapak yang rata, tidak menoleh ke belakang, dan waktu langkah pertama."
      },
      {
        illustrationSeed: "relay-5",
        textEn: "\"A relay is not four races,\" Coach Devi said. \"It is three exchanges with running in between. You can gain more in a clean handover than a fast runner gains in ten metres.\"",
        textId: "\"Estafet bukan empat lomba,\" kata Pelatih Devi. \"Itu tiga pergantian dengan lari di antaranya. Kau bisa mendapat lebih banyak dari serah terima yang bersih dibanding pelari cepat yang berlari sepuluh meter.\""
      },
      {
        illustrationSeed: "relay-6",
        textEn: "On the day, the first leg went out and came back level with two other teams. Lina heard the footsteps behind her, put her hand back without turning, and felt the baton land exactly in her palm.",
        textId: "Pada hari lomba, pelari pertama berangkat dan kembali sejajar dengan dua tim lain. Lina mendengar langkah kaki di belakangnya, menjulurkan tangan ke belakang tanpa menoleh, dan merasakan tongkat mendarat tepat di telapaknya."
      },
      {
        illustrationSeed: "relay-7",
        textEn: "She ran her leg slowly — everybody knew she would. Two teams passed her. But at the far end she put the baton into the third runner's hand without either of them breaking stride, and the third runner was gone.",
        textId: "Ia berlari di bagiannya dengan lambat — semua orang tahu itu akan terjadi. Dua tim melewatinya. Tetapi di ujung sana ia memindahkan tongkat ke tangan pelari ketiga tanpa keduanya kehilangan langkah, dan pelari ketiga melesat."
      },
      {
        illustrationSeed: "relay-8",
        textEn: "The other two teams fumbled. One dropped the baton entirely; the other stopped, turned, and lost four seconds. Lina's team came second, and the four of them stood together not quite believing it.",
        textId: "Dua tim lain kacau. Satu menjatuhkan tongkat sama sekali; yang lain berhenti, menoleh, dan kehilangan empat detik. Tim Lina finis kedua, dan mereka berempat berdiri bersama, hampir tidak percaya."
      },
      {
        illustrationSeed: "relay-9",
        textEn: "Lina was still the slowest runner on the team. She was also, from that day, the one nobody wanted to run without. Both of those things were true, and only one of them had a stopwatch.",
        textId: "Lina tetap pelari paling lambat di tim. Ia juga, sejak hari itu, orang yang tak seorang pun mau berlari tanpanya. Kedua hal itu benar, dan hanya satu yang bisa diukur dengan stopwatch."
      }
    ],
    quiz: [
      {
        questionEn: "Why did the coach pick Lina for the relay?",
        questionId: "Mengapa pelatih memilih Lina untuk estafet?",
        optionsEn: ["By mistake", "Because she was best at the baton handover", "Because she was fastest", "Because nobody else wanted to"],
        optionsId: ["Karena keliru", "Karena ia paling baik dalam serah terima tongkat", "Karena ia paling cepat", "Karena tidak ada yang mau"],
        correctIndex: 1
      },
      {
        questionEn: "What did the other teams do wrong?",
        questionId: "Apa kesalahan tim-tim lain?",
        optionsEn: ["They ran too slowly", "They fumbled and dropped the baton", "They started early", "They ran the wrong way"],
        optionsId: ["Mereka berlari terlalu lambat", "Mereka gugup dan menjatuhkan tongkat", "Mereka start terlalu awal", "Mereka salah arah"],
        correctIndex: 1
      },
      {
        questionEn: "What is the lesson of the story?",
        questionId: "Apa pelajaran dari cerita ini?",
        optionsEn: ["Only speed matters", "A team needs different skills, not just the fastest one", "Never run relays", "Stopwatches measure everything"],
        optionsId: ["Hanya kecepatan yang penting", "Tim butuh keahlian berbeda-beda, bukan hanya yang tercepat", "Jangan pernah ikut estafet", "Stopwatch mengukur segalanya"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-dog-who-chose-us",
    titleEn: "The Dog Who Chose Us",
    titleId: "Anjing yang Memilih Kami",
    descriptionEn: "The family went to the shelter to pick a puppy. A grey old dog with one ear had other ideas.",
    descriptionId: "Keluarga itu datang ke penampungan untuk memilih anak anjing. Seekor anjing tua berbulu kelabu dengan satu telinga punya rencana lain.",
    categorySlug: "pets",
    authorSlug: "axto-creative-team",
    coverEmoji: "🐕",
    coverPalette: "sunrise",
    ageMin: 4,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "shelter-1",
        textEn: "We went to the shelter on a Saturday to choose a puppy. That was the plan. A puppy: small, golden, bouncing, the sort of dog that is on the front of a calendar.",
        textId: "Kami pergi ke penampungan pada hari Sabtu untuk memilih anak anjing. Itu rencananya. Anak anjing: kecil, keemasan, lincah, jenis anjing yang ada di sampul kalender."
      },
      {
        illustrationSeed: "shelter-2",
        textEn: "There were six puppies, and they were exactly as advertised. They tumbled. They chewed shoelaces. My little brother lay on the floor and let them walk over his back.",
        textId: "Ada enam anak anjing, dan mereka persis seperti dijanjikan. Mereka berguling-guling. Mereka menggigit tali sepatu. Adikku berbaring di lantai dan membiarkan mereka berjalan di punggungnya."
      },
      {
        illustrationSeed: "shelter-3",
        textEn: "In the last pen, on his own, there was a grey dog with a white face and one ear that stood up while the other did not. The card on his gate said: BUDI. AGE 9. HERE 14 MONTHS.",
        textId: "Di kandang terakhir, seorang diri, ada seekor anjing kelabu berwajah putih dengan satu telinga berdiri sementara yang lain tidak. Kartu di gerbangnya bertuliskan: BUDI. UMUR 9. DI SINI 14 BULAN."
      },
      {
        illustrationSeed: "shelter-4",
        textEn: "\"Fourteen months,\" my mother said quietly. Budi did not jump up. He did not bark. He walked to the front of the pen, sat down, and looked at us the way you look at a bus you have missed before.",
        textId: "\"Empat belas bulan,\" kata ibuku pelan. Budi tidak melompat. Ia tidak menggonggong. Ia berjalan ke depan kandang, duduk, dan memandangi kami seperti orang memandangi bus yang pernah ia lewatkan."
      },
      {
        illustrationSeed: "shelter-5",
        textEn: "We went back to the puppies. We came back to Budi. We went back to the puppies again. And each time we returned, he was already sitting at the front, waiting, as if he had known.",
        textId: "Kami kembali ke anak-anak anjing. Kami kembali ke Budi. Kami kembali lagi ke anak-anak anjing. Dan setiap kali kami kembali, ia sudah duduk di depan, menunggu, seolah-olah ia sudah tahu."
      },
      {
        illustrationSeed: "shelter-6",
        textEn: "\"He is nine,\" the man at the desk said, being honest. \"He sleeps a great deal. He cannot do stairs quickly. He will not be with you as long as a puppy would.\"",
        textId: "\"Umurnya sembilan tahun,\" kata petugas di meja, dengan jujur. \"Ia banyak tidur. Ia tidak bisa cepat menaiki tangga. Ia tidak akan bersama kalian selama anak anjing bisa.\""
      },
      {
        illustrationSeed: "shelter-7",
        textEn: "My father was quiet for a moment. Then he said, \"How long has anybody asked about him?\" And the man at the desk looked down at his hands and said, \"Not this year.\"",
        textId: "Ayahku terdiam sejenak. Lalu ia berkata, \"Sudah berapa lama tidak ada yang menanyakannya?\" Dan petugas itu menunduk menatap tangannya dan berkata, \"Tahun ini belum ada.\""
      },
      {
        illustrationSeed: "shelter-8",
        textEn: "Budi came home in the back of the car with his chin on my knee. He slept for most of the first week. On the eighth day he brought a shoe to the kitchen and put it down, very seriously, as a gift.",
        textId: "Budi pulang di bagian belakang mobil dengan dagunya di lututku. Ia tidur hampir sepanjang minggu pertama. Pada hari kedelapan ia membawa sepatu ke dapur dan meletakkannya, dengan sangat serius, sebagai hadiah."
      },
      {
        illustrationSeed: "shelter-9",
        textEn: "We had gone to choose a dog. We came back understanding that it had gone the other way round. Budi had sat down at the front of his pen and chosen us, and he had been right.",
        textId: "Kami datang untuk memilih anjing. Kami pulang dengan pemahaman bahwa yang terjadi justru sebaliknya. Budi duduk di depan kandangnya dan memilih kami, dan ternyata ia benar."
      }
    ],
    quiz: [
      {
        questionEn: "What had the family planned to get?",
        questionId: "Apa yang keluarga itu rencanakan untuk dibawa pulang?",
        optionsEn: ["An old dog", "A puppy", "A cat", "A bird"],
        optionsId: ["Anjing tua", "Anak anjing", "Kucing", "Burung"],
        correctIndex: 1
      },
      {
        questionEn: "How long had Budi been at the shelter?",
        questionId: "Berapa lama Budi berada di penampungan?",
        optionsEn: ["Two weeks", "Fourteen months", "One day", "Nine years"],
        optionsId: ["Dua minggu", "Empat belas bulan", "Satu hari", "Sembilan tahun"],
        correctIndex: 1
      },
      {
        questionEn: "What did the family realise at the end?",
        questionId: "Apa yang keluarga itu sadari di akhir cerita?",
        optionsEn: ["They should have taken a puppy", "That Budi had chosen them", "That dogs are difficult", "That they were too late"],
        optionsId: ["Mereka seharusnya mengambil anak anjing", "Bahwa Budi yang memilih mereka", "Bahwa anjing itu merepotkan", "Bahwa mereka terlambat"],
        correctIndex: 1
      }
    ]
  }
];
