/**
 * Story batch M — hand-written bilingual (EN/ID) read-aloud stories.
 *
 * A sixth book for the last nine shelves that still held only five, plus five
 * more spread across the busier ones. With this batch every one of the 36
 * categories holds at least six books.
 *
 * Batches only add; nothing existing is edited, replaced or merged. Seven
 * stories drafted for this batch were dropped before it landed because their
 * premises were already taken by earlier batches — a library that carries the
 * same idea twice is worse than a smaller one.
 */
import type { Story } from "./stories";

export const STORIES_BATCH_M: Story[] = [
  {
    slug: "the-river-that-came-back",
    titleEn: "The River That Came Back",
    titleId: "Sungai yang Kembali",
    descriptionEn: "The stream behind the school had been a concrete drain for thirty years. Then a class measured the water, and kept measuring, for four years.",
    descriptionId: "Aliran air di belakang sekolah sudah tiga puluh tahun menjadi selokan beton. Lalu satu kelas mengukur airnya, dan terus mengukur, selama empat tahun.",
    categorySlug: "nature-environment",
    authorSlug: "sarah-johnson",
    coverEmoji: "🌊",
    coverPalette: "forest",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      { illustrationSeed: "riverback-1", textEn: "Nobody called it a river. It was a straight grey channel two metres wide with concrete on both sides and a fence, and children were told not to go near it because of what was in it.", textId: "Tak ada yang menyebutnya sungai. Itu saluran kelabu lurus selebar dua meter dengan beton di kedua sisinya dan sebuah pagar, dan anak-anak dilarang mendekat karena isinya." },
      { illustrationSeed: "riverback-2", textEn: "In the school's storeroom there was a photograph from 1961 showing the same place with willow trees and a wooden footbridge and three children standing in the water up to their knees.", textId: "Di gudang sekolah ada foto dari tahun 1961 yang memperlihatkan tempat yang sama dengan pohon dedalu, sebuah jembatan kayu, dan tiga anak berdiri di air setinggi lutut." },
      { illustrationSeed: "riverback-3", textEn: "A teacher pinned the photograph on the wall and a class of nine-year-olds asked the obvious question, which is the question adults had stopped asking: where did that go?", textId: "Seorang guru menempelkan foto itu di dinding dan sekelas anak sembilan tahun mengajukan pertanyaan yang paling jelas — pertanyaan yang sudah berhenti diajukan orang dewasa: ke mana perginya semua itu?" },
      { illustrationSeed: "riverback-4", textEn: "They could not fix it. Nine-year-olds cannot dig up concrete. So they did the only thing they could: every Friday at eleven o'clock they measured the water. Temperature, clarity, and what lived in it.", textId: "Mereka tak bisa memperbaikinya. Anak sembilan tahun tak bisa membongkar beton. Maka mereka melakukan satu-satunya hal yang bisa: setiap Jumat pukul sebelas mereka mengukur airnya. Suhu, kejernihan, dan apa yang hidup di dalamnya." },
      { illustrationSeed: "riverback-5", textEn: "The first year they found nothing alive at all. The second year they found one kind of small worm that can live almost anywhere. Both of those are results, and they wrote them down exactly.", textId: "Tahun pertama mereka tak menemukan satu pun makhluk hidup. Tahun kedua mereka menemukan satu jenis cacing kecil yang bisa hidup hampir di mana saja. Keduanya adalah hasil, dan mereka mencatatnya persis apa adanya." },
      { illustrationSeed: "riverback-6", textEn: "That class moved up and handed the clipboard to the class below them, who handed it down again. Four years of Fridays is about a hundred and sixty measurements, all in one folder, all in children's handwriting.", textId: "Kelas itu naik tingkat dan menyerahkan papan jepitnya kepada kelas di bawahnya, yang kemudian menyerahkannya lagi. Empat tahun hari Jumat berarti sekitar seratus enam puluh pengukuran, semuanya dalam satu map, semuanya dengan tulisan tangan anak-anak." },
      { illustrationSeed: "riverback-7", textEn: "In the fourth year the city held a meeting about the drains. A parent brought the folder. Nobody else in the room had four years of weekly data, because collecting it is boring and nobody had been paid to be bored.", textId: "Pada tahun keempat kota mengadakan rapat tentang saluran air. Seorang orang tua membawa map itu. Tak ada orang lain di ruangan itu yang punya data mingguan empat tahun, karena mengumpulkannya membosankan dan tak ada yang dibayar untuk bosan." },
      { illustrationSeed: "riverback-8", textEn: "The concrete came out of a two-hundred-metre stretch the following spring. They put stones and gravel back in, and let the water find its own line instead of the straight one.", textId: "Beton di bentangan dua ratus meter dibongkar pada musim semi berikutnya. Mereka mengembalikan batu dan kerikil, dan membiarkan air mencari jalurnya sendiri, bukan jalur lurus itu." },
      { illustrationSeed: "riverback-9", textEn: "It does not look like the 1961 photograph and it never will. But there are willows again, small ones, and the Friday measurements now find eleven kinds of creature instead of none. The clipboard is still going.", textId: "Tempat itu tidak tampak seperti foto 1961 dan tak akan pernah. Tapi ada dedalu lagi, yang masih kecil, dan pengukuran hari Jumat kini menemukan sebelas jenis makhluk, bukan nol. Papan jepit itu masih berjalan." }
    ],
    quiz: [
      { questionEn: "What did the children do every Friday?", questionId: "Apa yang dilakukan anak-anak itu setiap hari Jumat?", optionsEn: ["Cleaned the water", "Measured the water and what lived in it", "Planted trees", "Wrote letters"], optionsId: ["Membersihkan airnya", "Mengukur air dan makhluk yang hidup di dalamnya", "Menanam pohon", "Menulis surat"], correctIndex: 1 },
      { questionEn: "Why was their folder so useful at the city meeting?", questionId: "Mengapa map mereka begitu berguna dalam rapat kota?", optionsEn: ["It was beautifully written", "Nobody else had four years of weekly data", "It was very short", "It had photographs"], optionsId: ["Tulisannya indah", "Tak ada orang lain yang punya data mingguan empat tahun", "Isinya sangat singkat", "Ada fotonya"], correctIndex: 1 },
      { questionEn: "What did they find in the first year?", questionId: "Apa yang mereka temukan pada tahun pertama?", optionsEn: ["Eleven kinds of creature", "Nothing alive at all", "Fish", "Willow trees"], optionsId: ["Sebelas jenis makhluk", "Tidak ada makhluk hidup sama sekali", "Ikan", "Pohon dedalu"], correctIndex: 1 }
    ]
  },
  {
    slug: "the-day-the-fog-would-not-lift",
    titleEn: "The Day the Fog Would Not Lift",
    titleId: "Hari Ketika Kabut Tak Mau Pergi",
    descriptionEn: "The mountain village woke inside a cloud and stayed there for three days. By the second afternoon everybody had learned to find their way home by sound.",
    descriptionId: "Desa pegunungan itu terbangun di dalam awan dan bertahan di sana selama tiga hari. Pada sore hari kedua, semua orang sudah belajar pulang dengan mengandalkan suara.",
    categorySlug: "weather-seasons",
    authorSlug: "emily-clark",
    coverEmoji: "🌫️",
    coverPalette: "dusk",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      { illustrationSeed: "fogdays-1", textEn: "Fog is not really a thing that arrives. It is a cloud that has come to rest on the ground, and if you live high enough up a mountain, you live inside clouds fairly often.", textId: "Kabut sebenarnya bukan sesuatu yang datang. Ia adalah awan yang singgah di tanah, dan kalau kau tinggal cukup tinggi di gunung, kau cukup sering tinggal di dalam awan." },
      { illustrationSeed: "fogdays-2", textEn: "But this fog was thicker than any that anybody remembered. From the front step you could not see the gate. From the gate you could not see the step you had just left.", textId: "Tapi kabut kali ini lebih tebal daripada yang bisa diingat siapa pun. Dari undakan depan kau tak bisa melihat gerbang. Dari gerbang kau tak bisa melihat undakan yang baru saja kau tinggalkan." },
      { illustrationSeed: "fogdays-3", textEn: "School was cancelled, which sounds wonderful and is only wonderful for about two hours. After that a village with no visible outside is quite a small place.", textId: "Sekolah diliburkan — kedengarannya menyenangkan, dan memang menyenangkan sekitar dua jam saja. Setelah itu, sebuah desa tanpa dunia luar yang terlihat terasa sangat sempit." },
      { illustrationSeed: "fogdays-4", textEn: "By the afternoon people had started finding their way by ear. The generator hums at the top of the lane. The tap in the square drips. Pak Deri's dog barks at anything that moves and at several things that do not.", textId: "Menjelang sore orang-orang mulai mencari jalan dengan telinga. Genset berdengung di ujung atas gang. Keran di alun-alun menetes. Anjing Pak Deri menggonggong pada apa pun yang bergerak, dan pada beberapa hal yang tidak." },
      { illustrationSeed: "fogdays-5", textEn: "A girl called Sari discovered that her own house could be found by the sound of the loose sheet of roofing that ticked in the wind. She had heard it every night of her life and had never once listened to it.", textId: "Seorang anak bernama Sari menemukan bahwa rumahnya sendiri bisa dikenali dari bunyi lembar atap yang longgar dan berdetak ditiup angin. Ia mendengarnya setiap malam sepanjang hidupnya dan tak pernah sekali pun benar-benar mendengarkannya." },
      { illustrationSeed: "fogdays-6", textEn: "On the second day the village did something it had not done in years. Everybody ate in the meeting hall, because it was the only building anyone could find without thinking about it.", textId: "Pada hari kedua desa itu melakukan sesuatu yang sudah bertahun-tahun tak dilakukan. Semua orang makan di balai desa, karena hanya bangunan itu yang bisa ditemukan siapa saja tanpa perlu berpikir." },
      { illustrationSeed: "fogdays-7", textEn: "The oldest woman in the village told everybody about a fog in her childhood that lasted nine days, which was almost certainly not true, and nobody minded at all.", textId: "Perempuan tertua di desa bercerita tentang kabut di masa kecilnya yang berlangsung sembilan hari — yang hampir pasti tidak benar — dan tak seorang pun keberatan." },
      { illustrationSeed: "fogdays-8", textEn: "On the third morning it lifted the way fog always lifts, which is all at once. One minute the world ended four steps away, and the next the whole valley was there, wet and shining and completely ordinary.", textId: "Pada pagi hari ketiga kabut itu pergi seperti kabut selalu pergi: sekaligus. Semenit yang lalu dunia berakhir empat langkah di depan, dan sesaat kemudian seluruh lembah terhampar di sana, basah, berkilau, dan sepenuhnya biasa." },
      { illustrationSeed: "fogdays-9", textEn: "Sari still knows her house by the roofing sheet. She can find it with her eyes shut from anywhere in the village, and she says the fog gave her that, and that nobody can take it away.", textId: "Sari masih mengenali rumahnya dari bunyi lembar atap itu. Ia bisa menemukannya dengan mata terpejam dari mana pun di desa, dan katanya kabut itulah yang memberinya kemampuan tersebut, dan tak seorang pun bisa mengambilnya." }
    ],
    quiz: [
      { questionEn: "What is fog, really?", questionId: "Kabut itu sebenarnya apa?", optionsEn: ["Smoke", "A cloud resting on the ground", "Rain that has not fallen", "Dust"], optionsId: ["Asap", "Awan yang singgah di tanah", "Hujan yang belum turun", "Debu"], correctIndex: 1 },
      { questionEn: "How did people find their way?", questionId: "Bagaimana orang-orang menemukan jalan?", optionsEn: ["By torchlight", "By sound", "By counting steps", "They stayed indoors"], optionsId: ["Dengan cahaya senter", "Dengan suara", "Dengan menghitung langkah", "Mereka tinggal di dalam rumah"], correctIndex: 1 },
      { questionEn: "What does Sari keep from those three days?", questionId: "Apa yang Sari simpan dari tiga hari itu?", optionsEn: ["A photograph", "Knowing her house by the sound of its roof", "A new friend", "A fear of fog"], optionsId: ["Sebuah foto", "Kemampuan mengenali rumahnya dari bunyi atapnya", "Seorang teman baru", "Rasa takut pada kabut"], correctIndex: 1 }
    ]
  },
  {
    slug: "the-night-shift-at-the-bakery",
    titleEn: "The Night Shift at the Bakery",
    titleId: "Giliran Malam di Toko Roti",
    descriptionEn: "While the town sleeps, four people work in a warm room so that there is bread at six in the morning. Nobody ever sees them do it.",
    descriptionId: "Ketika kota tertidur, empat orang bekerja di ruangan hangat supaya ada roti pada pukul enam pagi. Tak seorang pun pernah melihat mereka melakukannya.",
    categorySlug: "community-helpers",
    authorSlug: "siti-aminah",
    coverEmoji: "🥖",
    coverPalette: "sunrise",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      { illustrationSeed: "nightbake-1", textEn: "The bakery opens at six in the morning. This is a lie of a kind, because by six the work has already been going for eight hours.", textId: "Toko roti itu buka pukul enam pagi. Itu semacam kebohongan, karena pada pukul enam pekerjaannya sudah berjalan delapan jam." },
      { illustrationSeed: "nightbake-2", textEn: "Bu Tini arrives at ten at night, when everybody else is going to bed. She turns on the ovens first, because an oven takes an hour to become properly hot and there is no hurrying it.", textId: "Bu Tini datang pukul sepuluh malam, ketika semua orang lain hendak tidur. Ia menyalakan oven lebih dulu, karena oven butuh satu jam untuk benar-benar panas dan itu tak bisa dipercepat." },
      { illustrationSeed: "nightbake-3", textEn: "Then the dough, which was mixed the evening before and has been slowly rising in the cold room all this time. Bread is mostly waiting. The waiting is the part that makes it taste of something.", textId: "Lalu adonan, yang diuleni sore sebelumnya dan sejak itu mengembang perlahan di ruang dingin. Membuat roti sebagian besar adalah menunggu. Menunggu itulah yang membuatnya punya rasa." },
      { illustrationSeed: "nightbake-4", textEn: "At midnight Pak Ilham comes, then Rani, then a boy called Bayu who is learning and who is allowed to shape the small rolls but not yet the big loaves.", textId: "Tengah malam Pak Ilham datang, lalu Rani, lalu seorang anak laki-laki bernama Bayu yang sedang belajar dan baru boleh membentuk roti kecil, belum roti besar." },
      { illustrationSeed: "nightbake-5", textEn: "The room is warm and smells of flour, and the radio plays quietly because loud music at two in the morning makes everybody strange. They talk about ordinary things and they work with their hands.", textId: "Ruangan itu hangat dan beraroma tepung, dan radio diputar pelan karena musik keras pada pukul dua pagi membuat semua orang jadi aneh. Mereka membicarakan hal-hal biasa sambil bekerja dengan tangan." },
      { illustrationSeed: "nightbake-6", textEn: "At half past three the first loaves come out. This is the moment the whole night has been built towards, and it happens in silence, because by then everybody is too tired to say anything about it.", textId: "Pukul setengah empat roti pertama keluar. Inilah saat yang dituju seluruh malam itu, dan ia terjadi dalam sunyi, karena saat itu semua orang sudah terlalu lelah untuk mengomentarinya." },
      { illustrationSeed: "nightbake-7", textEn: "By five the shelves are full. By half past five the street sweepers come past and stop for the ends of yesterday's bread, which is a thing that has happened every day for nineteen years without ever being arranged.", textId: "Pukul lima rak sudah penuh. Pukul setengah enam para penyapu jalan lewat dan berhenti untuk mengambil ujung roti kemarin — hal yang terjadi setiap hari selama sembilan belas tahun tanpa pernah dijanjikan." },
      { illustrationSeed: "nightbake-8", textEn: "At six the door is unlocked. The first customer is always the same man, and he always says the same thing, which is that it smells good in here, and nobody has ever told him he is the four hundredth person to say it that year.", textId: "Pukul enam pintu dibuka. Pelanggan pertama selalu orang yang sama, dan ia selalu mengatakan hal yang sama — bahwa di sini harum — dan tak pernah ada yang memberitahunya bahwa ia orang keempat ratus yang mengatakan itu tahun ini." },
      { illustrationSeed: "nightbake-9", textEn: "Then the night shift goes home to sleep while the town starts its day. If you buy bread at eight in the morning, the person who made it has been asleep for two hours, and you will never meet them.", textId: "Lalu giliran malam pulang untuk tidur sementara kota memulai harinya. Kalau kau membeli roti pukul delapan pagi, orang yang membuatnya sudah dua jam tertidur, dan kau tak akan pernah bertemu dengannya." }
    ],
    quiz: [
      { questionEn: "Why does Bu Tini turn on the ovens first?", questionId: "Mengapa Bu Tini menyalakan oven lebih dulu?", optionsEn: ["To warm the room", "An oven takes an hour to get properly hot", "To scare the mice", "So the radio works"], optionsId: ["Untuk menghangatkan ruangan", "Oven butuh satu jam untuk benar-benar panas", "Untuk mengusir tikus", "Supaya radionya menyala"], correctIndex: 1 },
      { questionEn: "What makes bread taste of something?", questionId: "Apa yang membuat roti punya rasa?", optionsEn: ["Sugar", "The slow waiting while it rises", "Very hot ovens", "Salt"], optionsId: ["Gula", "Penantian lambat saat ia mengembang", "Oven yang sangat panas", "Garam"], correctIndex: 1 },
      { questionEn: "What happens at half past five each morning?", questionId: "Apa yang terjadi setiap pukul setengah enam pagi?", optionsEn: ["The shop opens", "The street sweepers stop for yesterday's bread", "The ovens go off", "Bayu goes home"], optionsId: ["Toko buka", "Para penyapu jalan berhenti untuk roti kemarin", "Oven dimatikan", "Bayu pulang"], correctIndex: 1 }
    ]
  },
  {
    slug: "the-lantern-that-was-lit-last",
    titleEn: "The Lantern That Was Lit Last",
    titleId: "Lampion yang Dinyalakan Terakhir",
    descriptionEn: "In one village the festival has a rule nobody wrote down: the last lantern belongs to whoever had the hardest year.",
    descriptionId: "Di satu desa, perayaan itu punya aturan yang tak tertulis: lampion terakhir adalah milik siapa pun yang menjalani tahun paling berat.",
    categorySlug: "holidays-culture",
    authorSlug: "siti-aminah",
    coverEmoji: "🏮",
    coverPalette: "sunset",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      { illustrationSeed: "lastlantern-1", textEn: "On the last night of the festival the village hangs three hundred paper lanterns along the river path, and lights them one by one, starting at the bridge.", textId: "Pada malam terakhir perayaan, desa itu menggantung tiga ratus lampion kertas di sepanjang jalan setapak tepi sungai, dan menyalakannya satu per satu, dimulai dari jembatan." },
      { illustrationSeed: "lastlantern-2", textEn: "It takes about an hour. Small children light the first ones because the first ones are easy and low. Then it goes up the path, and the crowd walks along behind the light as it spreads.", textId: "Butuh sekitar satu jam. Anak-anak kecil menyalakan yang pertama karena yang pertama mudah dan rendah. Lalu berlanjut menyusuri jalan setapak, dan kerumunan berjalan mengikuti cahaya yang menyebar." },
      { illustrationSeed: "lastlantern-3", textEn: "The last lantern is the one at the far end, above the old well. It is not the biggest or the prettiest. But everybody stops walking when they reach it, and the crowd goes quiet, and somebody is called forward.", textId: "Lampion terakhir adalah yang di ujung jauh, di atas sumur tua. Bukan yang paling besar atau paling indah. Tapi semua orang berhenti berjalan saat sampai di sana, kerumunan menjadi hening, dan seseorang dipanggil ke depan." },
      { illustrationSeed: "lastlantern-4", textEn: "Nobody chooses out loud. There is no committee and there is no vote. Somewhere in the week before, without any discussion anybody remembers, the village has agreed who it is.", textId: "Tak ada yang memilih dengan suara keras. Tak ada panitia dan tak ada pemungutan suara. Entah bagaimana, pada minggu sebelumnya, tanpa perundingan yang diingat siapa pun, desa itu sudah sepakat siapa orangnya." },
      { illustrationSeed: "lastlantern-5", textEn: "It goes to whoever had the hardest year. The family whose roof went in the storm. The man whose shop burned. The woman who nursed her husband for nine months and then buried him in March.", textId: "Lampion itu untuk siapa pun yang menjalani tahun paling berat. Keluarga yang atapnya roboh diterjang badai. Lelaki yang tokonya terbakar. Perempuan yang merawat suaminya sembilan bulan lalu memakamkannya pada bulan Maret." },
      { illustrationSeed: "lastlantern-6", textEn: "The year Rifa was eight, it was her mother. Rifa walked up the path holding her mother's hand and could feel it shaking, and she did not understand why until much later.", textId: "Pada tahun Rifa berusia delapan, lampion itu untuk ibunya. Rifa berjalan menyusuri jalan setapak sambil menggenggam tangan ibunya dan merasakan tangan itu bergetar, dan ia baru mengerti alasannya jauh kemudian." },
      { illustrationSeed: "lastlantern-7", textEn: "Being given the last lantern means the village has been watching you all year without saying so. It means the difficulty you thought you were carrying quietly was not carried as quietly as you believed.", textId: "Diberi lampion terakhir berarti desa itu telah memperhatikanmu sepanjang tahun tanpa mengatakannya. Artinya kesulitan yang kaupikir kau pikul diam-diam ternyata tidak sesunyi yang kaukira." },
      { illustrationSeed: "lastlantern-8", textEn: "Rifa's mother lit it and then stood there for a while, and three hundred lanterns were behind her, and nobody hurried her, and that is the whole ceremony.", textId: "Ibu Rifa menyalakannya lalu berdiri di sana beberapa saat, dengan tiga ratus lampion di belakangnya, dan tak seorang pun mendesaknya, dan hanya itulah seluruh upacaranya." },
      { illustrationSeed: "lastlantern-9", textEn: "Rifa is grown up and lives in a city where the festival is bigger and brighter and has a stage. She goes home for it every year. She says the city version is beautiful, and that it is missing the only part that matters.", textId: "Rifa kini dewasa dan tinggal di kota tempat perayaan itu lebih besar, lebih terang, dan punya panggung. Ia pulang setiap tahun untuk itu. Katanya versi kota memang indah, dan ia kehilangan satu-satunya bagian yang penting." }
    ],
    quiz: [
      { questionEn: "Who lights the last lantern?", questionId: "Siapa yang menyalakan lampion terakhir?", optionsEn: ["The village head", "Whoever had the hardest year", "The oldest person", "The youngest child"], optionsId: ["Kepala desa", "Siapa pun yang menjalani tahun paling berat", "Orang tertua", "Anak termuda"], correctIndex: 1 },
      { questionEn: "How is the person chosen?", questionId: "Bagaimana orangnya dipilih?", optionsEn: ["By a vote", "By a committee", "Without any announcement — the village simply agrees", "By drawing lots"], optionsId: ["Lewat pemungutan suara", "Oleh panitia", "Tanpa pengumuman — desa itu sekadar sepakat", "Dengan undian"], correctIndex: 2 },
      { questionEn: "What does receiving the lantern mean?", questionId: "Apa arti menerima lampion itu?", optionsEn: ["You are the richest", "The village has been watching and knows what you carried", "You must host next year", "You won a contest"], optionsId: ["Kau yang paling kaya", "Desa telah memperhatikan dan tahu apa yang kaupikul", "Kau harus jadi tuan rumah tahun depan", "Kau memenangi lomba"], correctIndex: 1 }
    ]
  },
  {
    slug: "what-the-doctor-heard",
    titleEn: "What the Doctor Heard",
    titleId: "Apa yang Didengar Dokter",
    descriptionEn: "A stethoscope is a tube and two earpieces. What it does is let one person listen to the inside of another, which is stranger than it sounds.",
    descriptionId: "Stetoskop hanyalah selang dan dua penyumbat telinga. Fungsinya membuat satu orang bisa mendengarkan bagian dalam orang lain — dan itu lebih ajaib daripada kedengarannya.",
    categorySlug: "health-body",
    authorSlug: "david-lee",
    coverEmoji: "🩺",
    coverPalette: "candy",
    ageMin: 5,
    ageMax: 10,
    isPremium: false,
    pages: [
      { illustrationSeed: "stetho-1", textEn: "Arif was seven and did not like the clinic. He did not like the smell, the chairs, or the poster of the inside of a person, which he felt nobody had needed to draw.", textId: "Arif berusia tujuh tahun dan tidak suka klinik. Ia tidak suka baunya, kursinya, atau poster bagian dalam tubuh manusia — yang menurutnya tak perlu digambar siapa pun." },
      { illustrationSeed: "stetho-2", textEn: "The doctor did not start with Arif. She put the round metal end of her stethoscope against her own chest and let him listen first.", textId: "Dokter itu tidak mulai dari Arif. Ia menempelkan ujung logam bundar stetoskopnya ke dadanya sendiri dan membiarkan Arif mendengarkan lebih dulu." },
      { illustrationSeed: "stetho-3", textEn: "It was much louder than he expected. Two sounds, close together, over and over: a soft one and then a sharper one. Lub, and then dub. Not at all like the word thump.", textId: "Suaranya jauh lebih keras daripada dugaannya. Dua bunyi berdekatan, berulang-ulang: yang lembut lalu yang lebih tajam. Lub, lalu dub. Sama sekali tidak seperti kata debam." },
      { illustrationSeed: "stetho-4", textEn: "The doctor explained that the two sounds are doors closing. The heart has four rooms and little doors between them, and the sounds are the doors shutting so the blood cannot go backwards.", textId: "Dokter itu menjelaskan bahwa kedua bunyi tersebut adalah pintu-pintu yang menutup. Jantung punya empat ruang dan pintu kecil di antaranya, dan bunyi itu adalah pintu yang menutup supaya darah tidak mengalir mundur." },
      { illustrationSeed: "stetho-5", textEn: "Then she let him listen to his own. His was faster. Children's hearts run quicker than adults', which is why children can run about all afternoon and adults sit down.", textId: "Lalu ia membiarkan Arif mendengarkan jantungnya sendiri. Miliknya lebih cepat. Jantung anak-anak berdetak lebih cepat daripada orang dewasa — itulah sebabnya anak-anak bisa berlarian sepanjang sore sementara orang dewasa duduk." },
      { illustrationSeed: "stetho-6", textEn: "Then she moved it to his back and asked him to breathe in slowly. Lungs do not go lub-dub. They sound like wind in a doorway, and they sound different when something is wrong, which is the whole point.", textId: "Lalu ia memindahkannya ke punggung Arif dan memintanya menarik napas perlahan. Paru-paru tidak berbunyi lub-dub. Bunyinya seperti angin di ambang pintu, dan bunyinya berbeda ketika ada yang tidak beres — dan itulah intinya." },
      { illustrationSeed: "stetho-7", textEn: "Arif asked whether she could hear thoughts. She said no, and that she had been asked that eleven times and it was still the best question anybody asked her.", textId: "Arif bertanya apakah dokter bisa mendengar pikiran. Dokter menjawab tidak, dan bahwa pertanyaan itu sudah diajukan sebelas kali kepadanya dan tetap pertanyaan terbaik yang pernah ia terima." },
      { illustrationSeed: "stetho-8", textEn: "The stethoscope is nearly two hundred years old and it was invented because a doctor did not want to press his ear against a patient's chest. He rolled up a sheet of paper instead, and it worked better.", textId: "Stetoskop berusia hampir dua ratus tahun dan diciptakan karena seorang dokter tidak ingin menempelkan telinganya ke dada pasien. Ia menggulung selembar kertas sebagai gantinya, dan ternyata hasilnya lebih baik." },
      { illustrationSeed: "stetho-9", textEn: "Arif still does not love the clinic. But he knows what his own heart sounds like, and there are not many things a person can say that about, and he no longer minds the poster.", textId: "Arif masih belum menyukai klinik. Tapi ia tahu seperti apa bunyi jantungnya sendiri, dan tidak banyak hal yang bisa dikatakan seseorang seperti itu, dan ia tak lagi terganggu oleh poster itu." }
    ],
    quiz: [
      { questionEn: "What makes the lub-dub sound?", questionId: "Apa yang menghasilkan bunyi lub-dub?", optionsEn: ["Blood splashing", "Small doors in the heart closing", "The lungs", "The stethoscope itself"], optionsId: ["Darah yang memercik", "Pintu-pintu kecil di jantung yang menutup", "Paru-paru", "Stetoskopnya sendiri"], correctIndex: 1 },
      { questionEn: "Whose heart did Arif listen to first?", questionId: "Jantung siapa yang pertama kali didengarkan Arif?", optionsEn: ["His own", "The doctor's", "His mother's", "Nobody's"], optionsId: ["Jantungnya sendiri", "Jantung sang dokter", "Jantung ibunya", "Tidak ada"], correctIndex: 1 },
      { questionEn: "How was the stethoscope invented?", questionId: "Bagaimana stetoskop diciptakan?", optionsEn: ["In a factory", "A doctor rolled up a sheet of paper instead of using his ear", "By a child", "It was always there"], optionsId: ["Di sebuah pabrik", "Seorang dokter menggulung selembar kertas alih-alih memakai telinganya", "Oleh seorang anak", "Sudah ada sejak dulu"], correctIndex: 1 }
    ]
  },
  {
    slug: "the-boy-who-returned-the-wallet",
    titleEn: "The Boy Who Returned the Wallet",
    titleId: "Anak yang Mengembalikan Dompet",
    descriptionEn: "There was enough money in it to buy the bicycle he had wanted for two years. He counted it twice, which is the honest part of the story.",
    descriptionId: "Uang di dalamnya cukup untuk membeli sepeda yang ia idamkan selama dua tahun. Ia menghitungnya dua kali — dan itulah bagian jujur dari cerita ini.",
    categorySlug: "moral-stories",
    authorSlug: "siti-aminah",
    coverEmoji: "👛",
    coverPalette: "sunrise",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      { illustrationSeed: "walletboy-1", textEn: "Hasan found it on the pavement outside the pharmacy at half past four, a brown wallet with a broken strap, lying in the place where a person's pocket would have been.", textId: "Hasan menemukannya di trotoar depan apotek pukul setengah lima, sebuah dompet cokelat dengan tali putus, tergeletak di tempat yang seharusnya jadi posisi saku seseorang." },
      { illustrationSeed: "walletboy-2", textEn: "He picked it up and stepped into the alley beside the pharmacy, which he would later be embarrassed about, because stepping into an alley is what you do when you do not want to be seen.", textId: "Ia memungutnya dan melangkah ke gang di samping apotek — hal yang kelak membuatnya malu, karena melangkah ke gang adalah yang kaulakukan ketika tak ingin terlihat." },
      { illustrationSeed: "walletboy-3", textEn: "Inside there was money. Quite a lot of money. Hasan counted it, and then he counted it again, and the second count is the part he has never left out when he tells this.", textId: "Di dalamnya ada uang. Cukup banyak uang. Hasan menghitungnya, lalu menghitungnya lagi, dan hitungan kedua itulah bagian yang tak pernah ia hilangkan setiap kali menceritakannya." },
      { illustrationSeed: "walletboy-4", textEn: "It was enough for the bicycle. Not almost enough, the way things usually are. Enough, with some left over.", textId: "Cukup untuk sepeda itu. Bukan hampir cukup, seperti biasanya. Cukup, bahkan bersisa." },
      { illustrationSeed: "walletboy-5", textEn: "He stood in that alley for four or five minutes. Nobody who tells you a story about honesty stood there for four or five minutes, which is why most of those stories are not much use to anybody.", textId: "Ia berdiri di gang itu empat atau lima menit. Orang yang menceritakan kisah kejujuran biasanya tidak berdiri di sana empat atau lima menit — itulah sebabnya kebanyakan kisah seperti itu tak banyak gunanya." },
      { illustrationSeed: "walletboy-6", textEn: "What decided it was not the money. It was a photograph behind a plastic window: two children on a step, one of them holding a smaller one badly, the way children hold babies.", textId: "Yang menentukan bukan uangnya. Melainkan sebuah foto di balik jendela plastik: dua anak di undakan, salah satunya menggendong yang lebih kecil dengan canggung, seperti anak-anak menggendong bayi." },
      { illustrationSeed: "walletboy-7", textEn: "He took it to the pharmacy counter and gave it in. The pharmacist wrote down his name and address, which Hasan had not expected and did not want.", textId: "Ia membawanya ke meja apotek dan menyerahkannya. Apoteker mencatat nama dan alamatnya — yang tak Hasan duga dan tak ia inginkan." },
      { illustrationSeed: "walletboy-8", textEn: "Three days later the owner came to the house. He was a driver, and the money was three months of savings for a deposit on a room, and his hands shook when he said so.", textId: "Tiga hari kemudian pemiliknya datang ke rumah. Ia seorang sopir, dan uang itu tabungan tiga bulan untuk uang muka sewa kamar, dan tangannya bergetar saat mengatakannya." },
      { illustrationSeed: "walletboy-9", textEn: "He offered Hasan a reward. Hasan's mother said no before Hasan could say anything at all, which he minded at the time and does not mind now. He got the bicycle two years later. He still has the habit of counting twice.", textId: "Lelaki itu menawarkan imbalan. Ibu Hasan berkata tidak sebelum Hasan sempat berkata apa pun — hal yang saat itu ia sesalkan dan kini tidak lagi. Ia mendapat sepedanya dua tahun kemudian. Ia masih punya kebiasaan menghitung dua kali." }
    ],
    quiz: [
      { questionEn: "Why did Hasan step into the alley?", questionId: "Mengapa Hasan melangkah ke gang?", optionsEn: ["To hide from rain", "Because he did not want to be seen", "To find the owner", "To meet a friend"], optionsId: ["Untuk berteduh dari hujan", "Karena ia tak ingin terlihat", "Untuk mencari pemiliknya", "Untuk menemui teman"], correctIndex: 1 },
      { questionEn: "What finally decided it for him?", questionId: "Apa yang akhirnya menentukan keputusannya?", optionsEn: ["The money was too little", "A photograph of two children inside the wallet", "Somebody saw him", "He was afraid of the police"], optionsId: ["Uangnya terlalu sedikit", "Foto dua anak di dalam dompet", "Ada yang melihatnya", "Ia takut polisi"], correctIndex: 1 },
      { questionEn: "Why does Hasan always mention counting the money twice?", questionId: "Mengapa Hasan selalu menyebut bahwa ia menghitung uangnya dua kali?", optionsEn: ["To show he is good at maths", "Because it is the honest part — he really was tempted", "Because he miscounted", "To make the story longer"], optionsId: ["Untuk menunjukkan ia pandai berhitung", "Karena itu bagian jujurnya — ia memang tergoda", "Karena ia salah hitung", "Supaya ceritanya lebih panjang"], correctIndex: 1 }
    ]
  },
  {
    slug: "why-the-kettle-sings",
    titleEn: "Why the Kettle Sings",
    titleId: "Mengapa Cerek Bernyanyi",
    descriptionEn: "A kettle makes its loudest noise just before it boils, and then goes quiet. Almost nobody knows why, and the answer is delightful.",
    descriptionId: "Cerek mengeluarkan bunyi paling keras tepat sebelum mendidih, lalu menjadi hening. Nyaris tak ada yang tahu alasannya, dan jawabannya menyenangkan.",
    categorySlug: "science",
    authorSlug: "david-lee",
    coverEmoji: "🫖",
    coverPalette: "citrus",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      { illustrationSeed: "kettlesing-1", textEn: "Listen to a kettle from the beginning. For the first minute it is almost silent. Then it starts a low hiss, then a rattle, then a real roar — and then, just before it boils, it goes quiet.", textId: "Dengarkan cerek dari awal. Semenit pertama nyaris hening. Lalu mulai berdesis pelan, lalu bergemeretak, lalu meraung sungguhan — dan kemudian, tepat sebelum mendidih, ia menjadi hening." },
      { illustrationSeed: "kettlesing-2", textEn: "That is backwards from what you would expect. Boiling is the most violent thing the water does, and it is the quietest part.", textId: "Itu terbalik dari dugaanmu. Mendidih adalah hal paling dahsyat yang dilakukan air, dan justru itulah bagian paling sunyi." },
      { illustrationSeed: "kettlesing-3", textEn: "Here is what is happening. The bottom of the kettle is much hotter than the water above it. Down there, tiny bubbles of steam form on the metal, even while the water higher up is still cool.", textId: "Beginilah yang terjadi. Dasar cerek jauh lebih panas daripada air di atasnya. Di bawah sana, gelembung uap kecil terbentuk di logam, bahkan ketika air di bagian atas masih dingin." },
      { illustrationSeed: "kettlesing-4", textEn: "Each bubble leaves the hot metal and rises about a centimetre into the cooler water, where it cannot survive. It collapses. Not gently — it slams shut, and the water rushes in to fill the space.", textId: "Setiap gelembung meninggalkan logam panas dan naik sekitar satu sentimeter ke air yang lebih dingin, tempat ia tak bisa bertahan. Ia runtuh. Bukan perlahan — ia menutup dengan keras, dan air menyerbu mengisi ruangnya." },
      { illustrationSeed: "kettlesing-5", textEn: "That slam is a tiny click. Thousands of them a second, all over the base of the kettle, is the noise you hear. The kettle is not singing about boiling. It is singing about bubbles dying.", textId: "Hentakan itu berupa klik yang sangat kecil. Ribuan klik per detik, di seluruh dasar cerek, itulah bunyi yang kaudengar. Cerek tidak sedang menyanyikan tentang mendidih. Ia menyanyikan tentang gelembung-gelembung yang mati." },
      { illustrationSeed: "kettlesing-6", textEn: "Now you can see why it goes quiet. When the whole body of water finally reaches boiling point, the bubbles no longer collapse. They survive all the way to the top and burst into the air.", textId: "Sekarang kau bisa mengerti mengapa ia menjadi hening. Ketika seluruh badan air akhirnya mencapai titik didih, gelembung tak lagi runtuh. Mereka bertahan sampai ke permukaan dan pecah di udara." },
      { illustrationSeed: "kettlesing-7", textEn: "A bubble that survives is a quiet bubble. So the silence is the signal: the water is not almost boiling any more, it is boiling.", textId: "Gelembung yang bertahan adalah gelembung yang tenang. Jadi keheningan itulah sinyalnya: airnya bukan lagi hampir mendidih, melainkan sudah mendidih." },
      { illustrationSeed: "kettlesing-8", textEn: "People who make tea properly have always known this without knowing why. They listen for the quiet, not for the roar, and they are right.", textId: "Orang-orang yang menyeduh teh dengan benar selalu tahu hal ini tanpa tahu alasannya. Mereka menunggu keheningan, bukan raungan, dan mereka benar." },
      { illustrationSeed: "kettlesing-9", textEn: "The same collapsing bubbles chew holes in ship propellers and in pump blades, which is a serious engineering problem. The thing that makes your kitchen sound cosy can destroy a lump of solid steel.", textId: "Gelembung-gelembung runtuh yang sama juga menggerogoti lubang pada baling-baling kapal dan bilah pompa — sebuah masalah rekayasa yang serius. Hal yang membuat dapurmu terdengar nyaman bisa menghancurkan bongkahan baja padat." }
    ],
    quiz: [
      { questionEn: "What makes the kettle's noise?", questionId: "Apa yang menghasilkan bunyi cerek?", optionsEn: ["Steam escaping the spout", "Tiny bubbles collapsing in cooler water", "The metal expanding", "The lid rattling"], optionsId: ["Uap yang keluar dari corong", "Gelembung kecil yang runtuh di air yang lebih dingin", "Logam yang memuai", "Tutupnya bergemeretak"], correctIndex: 1 },
      { questionEn: "Why does it go quiet just before boiling?", questionId: "Mengapa cerek menjadi hening tepat sebelum mendidih?", optionsEn: ["The heat is turned down", "The bubbles stop collapsing and survive to the top", "The water runs out", "The kettle switches off"], optionsId: ["Panasnya dikecilkan", "Gelembung berhenti runtuh dan bertahan sampai ke permukaan", "Airnya habis", "Cereknya mati sendiri"], correctIndex: 1 },
      { questionEn: "What else do collapsing bubbles do?", questionId: "Apa lagi yang dilakukan gelembung yang runtuh?", optionsEn: ["Make ice", "Chew holes in ship propellers", "Clean water", "Nothing at all"], optionsId: ["Membuat es", "Menggerogoti lubang pada baling-baling kapal", "Membersihkan air", "Tidak melakukan apa-apa"], correctIndex: 1 }
    ]
  },
  {
    slug: "the-jar-of-difficult-days",
    titleEn: "The Jar of Difficult Days",
    titleId: "Toples Hari-Hari Sulit",
    descriptionEn: "Every time something was hard, Rara wrote it on a slip of paper and put it in a jar. She was not allowed to throw any away until December.",
    descriptionId: "Setiap kali ada hal yang sulit, Rara menulisnya di secarik kertas dan memasukkannya ke dalam toples. Ia tak boleh membuang satu pun sampai bulan Desember.",
    categorySlug: "emotions",
    authorSlug: "emily-clark",
    coverEmoji: "🫙",
    coverPalette: "candy",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      { illustrationSeed: "hardjar-1", textEn: "The jar had held pickles and it still smelled faintly of them, which Rara said was appropriate.", textId: "Toples itu dulunya berisi acar dan masih tercium samar aromanya, yang menurut Rara justru cocok." },
      { illustrationSeed: "hardjar-2", textEn: "The rule was simple. When something was hard, she wrote it on a slip of paper — one line, no explaining — folded it, and dropped it in. She was not allowed to take any out until the last day of the year.", textId: "Aturannya sederhana. Ketika ada hal yang sulit, ia menulisnya di secarik kertas — satu baris, tanpa penjelasan — melipatnya, dan menjatuhkannya ke dalam. Ia tak boleh mengeluarkan satu pun sampai hari terakhir tahun itu." },
      { illustrationSeed: "hardjar-3", textEn: "In February the jar filled quickly. Maths test. Argument with Bagas. Nobody sat with me. Forgot my lines in the play and stood there.", textId: "Pada bulan Februari toples itu cepat terisi. Ulangan matematika. Bertengkar dengan Bagas. Tak ada yang mau duduk denganku. Lupa dialogku di pentas dan hanya berdiri mematung." },
      { illustrationSeed: "hardjar-4", textEn: "In March her mother lost her job, and the slip for that one took a long time to write and said only: Mum's work. Rara looked at it for a while before she folded it.", textId: "Pada bulan Maret ibunya kehilangan pekerjaan, dan kertas untuk yang satu itu butuh waktu lama ditulis dan hanya berbunyi: kerjaan Ibu. Rara menatapnya cukup lama sebelum melipatnya." },
      { illustrationSeed: "hardjar-5", textEn: "By August the jar was two-thirds full and Rara had stopped enjoying it. Some days she wrote three. It began to feel like proof of something bad.", textId: "Menjelang Agustus toples itu terisi dua pertiga dan Rara sudah tak menikmatinya. Ada hari-hari ia menulis tiga. Toples itu mulai terasa seperti bukti sesuatu yang buruk." },
      { illustrationSeed: "hardjar-6", textEn: "On the last day of December she was allowed to open it. She tipped everything onto the floor and unfolded them one at a time, which took most of an afternoon.", textId: "Pada hari terakhir Desember ia boleh membukanya. Ia menumpahkan semuanya ke lantai dan membuka lipatannya satu per satu, yang memakan hampir seluruh sore." },
      { illustrationSeed: "hardjar-7", textEn: "Here is the thing she had not expected. Most of them she could not remember at all. Not vaguely — completely. Slips in her own handwriting about days that had felt unbearable and had left no trace whatsoever.", textId: "Inilah yang tak ia duga. Sebagian besar sama sekali tak bisa ia ingat. Bukan samar-samar — benar-benar tidak. Kertas-kertas dengan tulisan tangannya sendiri tentang hari-hari yang terasa tak tertanggungkan dan tak meninggalkan jejak apa pun." },
      { illustrationSeed: "hardjar-8", textEn: "A few she remembered exactly, and those ones she read twice. Her mother's work. A friend moving. The dog. Four slips out of ninety-one.", textId: "Beberapa ia ingat persis, dan yang itu ia baca dua kali. Pekerjaan ibunya. Teman yang pindah. Anjingnya. Empat kertas dari sembilan puluh satu." },
      { illustrationSeed: "hardjar-9", textEn: "Rara still keeps the jar. She says it does not make hard days easier while they are happening, and that it never claimed to. What it tells you is which ones you will still be carrying in December, and the answer is: hardly any of them.", textId: "Rara masih menyimpan toples itu. Katanya toples itu tidak membuat hari sulit jadi lebih ringan saat sedang berlangsung, dan memang tak pernah mengaku begitu. Yang ia beritahukan adalah mana yang masih akan kaubawa sampai Desember — dan jawabannya: hampir tak ada." }
    ],
    quiz: [
      { questionEn: "What was the rule about the jar?", questionId: "Apa aturan tentang toples itu?", optionsEn: ["Open it every week", "Write hard things down and take none out until the last day of the year", "Only write happy things", "Fill it with coins"], optionsId: ["Buka setiap minggu", "Tulis hal-hal sulit dan jangan keluarkan satu pun sampai hari terakhir tahun itu", "Hanya tulis hal-hal gembira", "Isi dengan koin"], correctIndex: 1 },
      { questionEn: "What surprised Rara when she opened it?", questionId: "Apa yang mengejutkan Rara saat membukanya?", optionsEn: ["It was empty", "She could not remember most of them at all", "The paper had faded", "There were too few slips"], optionsId: ["Toplesnya kosong", "Ia sama sekali tak bisa mengingat sebagian besar isinya", "Kertasnya memudar", "Kertasnya terlalu sedikit"], correctIndex: 1 },
      { questionEn: "What does Rara say the jar is for?", questionId: "Menurut Rara, untuk apa toples itu?", optionsEn: ["Making bad days easier", "Showing which hard days you will still be carrying later", "Counting mistakes", "Storing secrets"], optionsId: ["Membuat hari buruk jadi lebih ringan", "Menunjukkan hari sulit mana yang masih akan kaubawa nanti", "Menghitung kesalahan", "Menyimpan rahasia"], correctIndex: 1 }
    ]
  },
  {
    slug: "the-hen-that-would-not-be-counted",
    titleEn: "The Hen That Would Not Be Counted",
    titleId: "Ayam yang Tak Mau Dihitung",
    descriptionEn: "Every evening the farm counted twenty-nine hens into the coop, and every evening there were thirty in the morning. It took a boy with a torch to solve it.",
    descriptionId: "Setiap sore peternakan itu menghitung dua puluh sembilan ayam masuk kandang, dan setiap pagi jumlahnya tiga puluh. Butuh seorang anak dengan senter untuk memecahkannya.",
    categorySlug: "farm",
    authorSlug: "axto-creative-team",
    coverEmoji: "🐔",
    coverPalette: "meadow",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      { illustrationSeed: "hencount-1", textEn: "The farm had thirty hens. This is a fact that everybody agreed on and that the evening count refused to confirm.", textId: "Peternakan itu punya tiga puluh ayam. Ini fakta yang disepakati semua orang dan yang selalu ditolak oleh hitungan sore hari." },
      { illustrationSeed: "hencount-2", textEn: "Every evening Pak Sam counted them into the coop and got twenty-nine. Every morning he counted them out and got thirty. He did this for eleven days.", textId: "Setiap sore Pak Sam menghitung mereka masuk kandang dan mendapat dua puluh sembilan. Setiap pagi ia menghitung mereka keluar dan mendapat tiga puluh. Ini berlangsung sebelas hari." },
      { illustrationSeed: "hencount-3", textEn: "He assumed he was miscounting, because that is a reasonable thing to assume when you are the one doing the counting. He counted twice. Then three times. Twenty-nine, twenty-nine, twenty-nine.", textId: "Ia mengira dirinya salah hitung, karena itulah dugaan yang masuk akal ketika kaulah yang menghitung. Ia menghitung dua kali. Lalu tiga kali. Dua puluh sembilan, dua puluh sembilan, dua puluh sembilan." },
      { illustrationSeed: "hencount-4", textEn: "His nephew Rio was staying for the holidays and was eight and had been given a torch for his birthday, which is the most dangerous thing you can give an eight-year-old.", textId: "Keponakannya, Rio, sedang menginap selama liburan, berusia delapan tahun, dan baru saja mendapat senter sebagai hadiah ulang tahun — benda paling berbahaya yang bisa kauberikan kepada anak delapan tahun." },
      { illustrationSeed: "hencount-5", textEn: "Rio decided to watch. He sat behind the water tank from five o'clock, which is a long time for an eight-year-old to sit still, and he had eaten all his snacks by twenty past five.", textId: "Rio memutuskan untuk mengintai. Ia duduk di balik tangki air sejak pukul lima — waktu yang lama bagi anak delapan tahun untuk duduk diam — dan camilannya sudah habis pukul lima lewat dua puluh." },
      { illustrationSeed: "hencount-6", textEn: "At ten to six one hen walked away from the group, went round the back of the coop, and squeezed under the shed through a gap the width of a hand.", textId: "Pukul enam kurang sepuluh, seekor ayam menyingkir dari kelompoknya, memutar ke belakang kandang, dan menyelinap ke kolong gudang melalui celah selebar telapak tangan." },
      { illustrationSeed: "hencount-7", textEn: "Rio shone the torch under the shed. There was a hollow in the dry soil, and in it there were nineteen eggs, and the hen was extremely annoyed about the torch.", textId: "Rio menyorotkan senternya ke kolong gudang. Ada cekungan di tanah kering, dan di dalamnya ada sembilan belas telur, dan ayam itu sangat kesal karena senter tersebut." },
      { illustrationSeed: "hencount-8", textEn: "She had been slipping out every evening after the count and slipping back in before the morning one, which means she had solved a problem that nobody had set her and had done it eleven times without being caught.", textId: "Ia menyelinap keluar setiap sore setelah dihitung dan menyelinap kembali sebelum hitungan pagi — artinya ia telah memecahkan masalah yang tak seorang pun berikan kepadanya, dan melakukannya sebelas kali tanpa tertangkap." },
      { illustrationSeed: "hencount-9", textEn: "They left her the nest and put a small door in the shed wall so she did not have to squeeze. She is called Twenty-Nine now, which she does not know and would probably object to.", textId: "Mereka membiarkan sarangnya dan memasang pintu kecil di dinding gudang supaya ia tak perlu berdesakan. Kini ia dipanggil Dua Puluh Sembilan — nama yang tak ia ketahui dan mungkin akan ia protes." }
    ],
    quiz: [
      { questionEn: "What was strange about the count?", questionId: "Apa yang aneh dari hitungan itu?", optionsEn: ["Thirty in the evening, twenty-nine in the morning", "Twenty-nine in the evening, thirty in the morning", "It changed every hour", "Nobody counted at all"], optionsId: ["Tiga puluh di sore hari, dua puluh sembilan di pagi hari", "Dua puluh sembilan di sore hari, tiga puluh di pagi hari", "Berubah setiap jam", "Tak ada yang menghitung"], correctIndex: 1 },
      { questionEn: "How did Rio solve it?", questionId: "Bagaimana Rio memecahkannya?", optionsEn: ["He counted more carefully", "He sat and watched, then used his torch", "He asked Pak Sam", "He built a new coop"], optionsId: ["Ia menghitung lebih teliti", "Ia duduk mengintai, lalu memakai senternya", "Ia bertanya pada Pak Sam", "Ia membangun kandang baru"], correctIndex: 1 },
      { questionEn: "What was under the shed?", questionId: "Apa yang ada di kolong gudang?", optionsEn: ["A hole in the fence", "A nest with nineteen eggs", "Another hen", "Nothing"], optionsId: ["Lubang di pagar", "Sarang berisi sembilan belas telur", "Ayam lain", "Tidak ada apa-apa"], correctIndex: 1 }
    ]
  },
  {
    slug: "the-apology-that-took-three-tries",
    titleEn: "The Apology That Took Three Tries",
    titleId: "Permintaan Maaf yang Butuh Tiga Kali",
    descriptionEn: "The first apology made things worse. The second made them worse again. Nobody teaches you that an apology is a thing you can get wrong.",
    descriptionId: "Permintaan maaf pertama justru memperburuk keadaan. Yang kedua memperburuknya lagi. Tak ada yang mengajarimu bahwa permintaan maaf itu bisa salah.",
    categorySlug: "manners",
    authorSlug: "siti-aminah",
    coverEmoji: "🤝",
    coverPalette: "sunrise",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      { illustrationSeed: "threetries-1", textEn: "Danu broke Mira's model boat. Not on purpose, but not entirely by accident either — he had picked it up after being asked twice not to.", textId: "Danu memecahkan kapal model milik Mira. Bukan sengaja, tapi juga bukan sepenuhnya tak sengaja — ia memungutnya setelah dua kali diminta jangan." },
      { illustrationSeed: "threetries-2", textEn: "His first apology was: sorry, but it was already cracked. This is not an apology. It has an apology at the front and an argument behind it, and the argument is the part people hear.", textId: "Permintaan maaf pertamanya: maaf, tapi kapalnya memang sudah retak. Itu bukan permintaan maaf. Ada kata maaf di depan dan pembelaan di belakangnya, dan pembelaan itulah yang didengar orang." },
      { illustrationSeed: "threetries-3", textEn: "Mira did not speak to him for two days. Danu felt this was unreasonable, since he had apologised, which is what everybody thinks after the first kind of apology.", textId: "Mira tak berbicara dengannya selama dua hari. Danu merasa itu tidak masuk akal, karena ia sudah minta maaf — pikiran yang selalu muncul setelah permintaan maaf jenis pertama." },
      { illustrationSeed: "threetries-4", textEn: "His second attempt was: I'm sorry you're upset. This is worse. It sounds like an apology and it is actually a comment about her, and Mira went from not speaking to him to properly angry.", textId: "Percobaan keduanya: maaf ya kamu jadi kesal. Ini lebih buruk. Kedengarannya seperti permintaan maaf padahal sebenarnya komentar tentang dirinya, dan Mira berubah dari diam menjadi benar-benar marah." },
      { illustrationSeed: "threetries-5", textEn: "Danu's grandmother, who had been listening from the kitchen and saying nothing, finally said one sentence: tell her what you did.", textId: "Nenek Danu, yang sedari tadi mendengarkan dari dapur tanpa berkata apa-apa, akhirnya mengucapkan satu kalimat: ceritakan padanya apa yang kaulakukan." },
      { illustrationSeed: "threetries-6", textEn: "That is the whole trick and it is the part everybody skips. An apology has to contain the thing itself, said out loud, without softening.", textId: "Itulah seluruh kuncinya, dan itulah bagian yang selalu dilewati orang. Permintaan maaf harus memuat perbuatannya sendiri, diucapkan keras-keras, tanpa diperhalus." },
      { illustrationSeed: "threetries-7", textEn: "The third attempt was: I picked up your boat after you told me not to, and I broke the mast, and it took you a month to make. Danu found it very hard to say and it took about nine seconds.", textId: "Percobaan ketiga: aku mengambil kapalmu setelah kamu bilang jangan, dan aku mematahkan tiangnya, padahal kamu membuatnya sebulan. Danu merasa sangat berat mengucapkannya, dan itu hanya makan sembilan detik." },
      { illustrationSeed: "threetries-8", textEn: "Mira said all right. Not thank you, not it's fine — just all right. That was enough. An apology is not a payment that buys forgiveness; it is a description that lets the other person stop explaining.", textId: "Mira berkata ya sudah. Bukan terima kasih, bukan tidak apa-apa — hanya ya sudah. Itu cukup. Permintaan maaf bukan pembayaran untuk membeli maaf; ia adalah penjelasan yang membuat orang lain berhenti harus menjelaskan." },
      { illustrationSeed: "threetries-9", textEn: "They rebuilt the mast together the following weekend, which was not part of the apology and which mattered as much. Danu still says the third version is the only one that was actually an apology, and that the first two were about himself.", textId: "Mereka membangun ulang tiang itu bersama akhir pekan berikutnya — bukan bagian dari permintaan maaf, tapi sama pentingnya. Danu masih berkata bahwa versi ketiga adalah satu-satunya yang benar-benar permintaan maaf, dan dua yang pertama hanyalah tentang dirinya sendiri." }
    ],
    quiz: [
      { questionEn: "What was wrong with \"sorry, but it was already cracked\"?", questionId: "Apa yang salah dengan \"maaf, tapi kapalnya memang sudah retak\"?", optionsEn: ["It was too short", "It has an argument behind it, and that is what people hear", "It was said too quietly", "It was not true"], optionsId: ["Terlalu pendek", "Ada pembelaan di belakangnya, dan itulah yang didengar orang", "Diucapkan terlalu pelan", "Tidak benar"], correctIndex: 1 },
      { questionEn: "What was the grandmother's advice?", questionId: "Apa nasihat sang nenek?", optionsEn: ["Buy her a new boat", "Tell her what you did", "Give her time", "Say sorry again"], optionsId: ["Belikan dia kapal baru", "Ceritakan padanya apa yang kaulakukan", "Beri dia waktu", "Minta maaf lagi"], correctIndex: 1 },
      { questionEn: "What is an apology for, according to the story?", questionId: "Menurut cerita ini, untuk apa permintaan maaf itu?", optionsEn: ["To buy forgiveness", "To describe what happened so the other person can stop explaining", "To end the argument quickly", "To make yourself feel better"], optionsId: ["Untuk membeli maaf", "Untuk menjelaskan apa yang terjadi supaya orang lain berhenti harus menjelaskan", "Untuk cepat mengakhiri pertengkaran", "Untuk membuat dirimu merasa lega"], correctIndex: 1 }
    ]
  },
  {
    slug: "the-vacuum-that-drew-a-map",
    titleEn: "The Vacuum That Drew a Map",
    titleId: "Penyedot Debu yang Menggambar Peta",
    descriptionEn: "The little robot bumped into things for a week and then produced a floor plan of the whole flat — including a room the family had forgotten about.",
    descriptionId: "Robot kecil itu menabrak-nabrak selama seminggu lalu menghasilkan denah seluruh apartemen — termasuk satu ruangan yang sudah dilupakan keluarganya.",
    categorySlug: "robots-tech",
    authorSlug: "david-lee",
    coverEmoji: "🧹",
    coverPalette: "twilight",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      { illustrationSeed: "vacmap-1", textEn: "The robot vacuum arrived in a box and was, on the first day, extremely stupid. It went forward until it hit something, turned a random amount, and went forward again.", textId: "Robot penyedot debu itu datang dalam kardus dan, pada hari pertama, sangat bodoh. Ia maju sampai menabrak sesuatu, berbelok sembarang arah, lalu maju lagi." },
      { illustrationSeed: "vacmap-2", textEn: "Nabila, who was nine, thought this was hilarious and followed it around for two hours. It got stuck under the sofa twice and fell in love with one particular chair leg.", textId: "Nabila, sembilan tahun, merasa itu sangat lucu dan mengikutinya selama dua jam. Robot itu tersangkut di bawah sofa dua kali dan seolah jatuh cinta pada satu kaki kursi tertentu." },
      { illustrationSeed: "vacmap-3", textEn: "But it was writing things down. Every bump, every turn, every distance travelled between bumps, all saved. A bump is not a failure to the robot; a bump is a measurement of where a wall is.", textId: "Tapi ia sedang mencatat. Setiap tabrakan, setiap belokan, setiap jarak yang ditempuh di antara tabrakan, semuanya disimpan. Bagi robot itu, tabrakan bukan kegagalan; tabrakan adalah pengukuran letak dinding." },
      { illustrationSeed: "vacmap-4", textEn: "On the fourth day it stopped wandering randomly and began going up and down in neat straight lines, like somebody mowing a lawn. It had worked out the shape of the rooms.", textId: "Pada hari keempat ia berhenti berkeliling acak dan mulai bergerak maju-mundur dalam garis lurus rapi, seperti orang memotong rumput. Ia sudah memahami bentuk ruangan." },
      { illustrationSeed: "vacmap-5", textEn: "On the seventh day the app showed a picture: a floor plan of the flat, drawn entirely out of collisions. Every wall on it was somewhere the robot had bumped into, a hundred times over.", textId: "Pada hari ketujuh aplikasinya menampilkan sebuah gambar: denah apartemen, digambar sepenuhnya dari tabrakan. Setiap dinding di sana adalah tempat robot itu pernah menabrak, ratusan kali." },
      { illustrationSeed: "vacmap-6", textEn: "Nabila's father looked at the plan for a while and then said something odd. He said there was a rectangle in it that should not be there, off the hallway, about two metres by one.", textId: "Ayah Nabila menatap denah itu cukup lama lalu mengatakan sesuatu yang aneh. Katanya ada sebuah persegi panjang yang seharusnya tidak ada, di samping lorong, kira-kira dua kali satu meter." },
      { illustrationSeed: "vacmap-7", textEn: "It was a cupboard. It had been papered over by whoever lived there before them, and the family had walked past that piece of wall every day for six years without noticing there was a room-shaped gap behind it.", textId: "Itu sebuah lemari dinding. Penghuni sebelumnya telah menutupinya dengan kertas dinding, dan keluarga itu melewati bagian tembok tersebut setiap hari selama enam tahun tanpa menyadari ada rongga berbentuk ruangan di baliknya." },
      { illustrationSeed: "vacmap-8", textEn: "Inside there were four tins of paint, a broken umbrella and a bundle of letters from 1978 tied with string. Nothing valuable. Everybody agreed it was the best thing that had ever happened in that flat.", textId: "Di dalamnya ada empat kaleng cat, payung rusak, dan seikat surat dari tahun 1978 yang diikat tali. Tak ada yang berharga. Semua sepakat itu hal paling seru yang pernah terjadi di apartemen tersebut." },
      { illustrationSeed: "vacmap-9", textEn: "The robot did not find the cupboard. It has no idea what a cupboard is. It measured the flat honestly, including the part nobody was looking at, and a person read the measurement.", textId: "Robot itu tidak menemukan lemari tersebut. Ia sama sekali tak tahu apa itu lemari. Ia mengukur apartemen dengan jujur, termasuk bagian yang tak diperhatikan siapa pun, dan seorang manusialah yang membaca hasil pengukurannya." }
    ],
    quiz: [
      { questionEn: "What is a bump to the robot?", questionId: "Apa arti tabrakan bagi robot itu?", optionsEn: ["A failure", "A measurement of where a wall is", "A reason to stop", "A mistake to avoid"], optionsId: ["Sebuah kegagalan", "Pengukuran letak dinding", "Alasan untuk berhenti", "Kesalahan yang harus dihindari"], correctIndex: 1 },
      { questionEn: "What did the floor plan reveal?", questionId: "Apa yang terungkap dari denah itu?", optionsEn: ["A leak", "A papered-over cupboard nobody knew about", "A missing wall", "The robot was broken"], optionsId: ["Kebocoran", "Lemari dinding tertutup kertas yang tak diketahui siapa pun", "Dinding yang hilang", "Robotnya rusak"], correctIndex: 1 },
      { questionEn: "Who actually made the discovery?", questionId: "Siapa yang sebenarnya membuat penemuan itu?", optionsEn: ["The robot", "A person reading the robot's honest measurements", "Nabila's teacher", "The previous owner"], optionsId: ["Robotnya", "Seorang manusia yang membaca hasil pengukuran jujur robot itu", "Guru Nabila", "Pemilik sebelumnya"], correctIndex: 1 }
    ]
  },
  {
    slug: "the-goalkeeper-who-watched-the-standing-foot",
    titleEn: "The Goalkeeper Who Watched the Standing Foot",
    titleId: "Penjaga Gawang yang Memperhatikan Kaki Tumpu",
    descriptionEn: "Everybody watches the ball. Rasyid watched the other foot — the one that does not kick — and it told him where the penalty was going.",
    descriptionId: "Semua orang menatap bola. Rasyid menatap kaki yang satunya — yang tidak menendang — dan kaki itulah yang memberitahunya arah penalti.",
    categorySlug: "sports",
    authorSlug: "david-lee",
    coverEmoji: "🧤",
    coverPalette: "meadow",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      { illustrationSeed: "standfoot-1", textEn: "Rasyid was not tall, and for a goalkeeper that is a real problem. He could not reach the top corners, and everybody who played against him knew it by the second half.", textId: "Rasyid tidak tinggi, dan bagi penjaga gawang itu masalah nyata. Ia tak bisa menjangkau sudut atas, dan setiap lawan mengetahuinya menjelang babak kedua." },
      { illustrationSeed: "standfoot-2", textEn: "What he had instead was a habit of watching. Not the ball — everybody watches the ball, and the ball tells you nothing until it is already too late.", textId: "Yang ia miliki sebagai gantinya adalah kebiasaan memperhatikan. Bukan bolanya — semua orang menatap bola, dan bola tidak memberitahumu apa pun sampai semuanya sudah terlambat." },
      { illustrationSeed: "standfoot-3", textEn: "He watched the standing foot. When somebody kicks a ball, one foot swings and the other one plants itself on the ground, and that planted foot has to point roughly where the ball is going.", textId: "Ia memperhatikan kaki tumpu. Ketika seseorang menendang bola, satu kaki mengayun dan yang lain menancap di tanah, dan kaki yang menancap itu harus mengarah kira-kira ke tujuan bola." },
      { illustrationSeed: "standfoot-4", textEn: "It has to. It is not a choice and it is not a habit somebody can train away — it is where the leg needs to be for the swing to work at all.", textId: "Memang harus begitu. Itu bukan pilihan dan bukan kebiasaan yang bisa dilatih hilang — itu posisi yang dibutuhkan kaki agar ayunannya berfungsi sama sekali." },
      { illustrationSeed: "standfoot-5", textEn: "The trouble is that the standing foot only plants about a third of a second before the kick. Rasyid spent a whole winter learning to look at it and move at the same time, which sounds simple and is not.", textId: "Masalahnya, kaki tumpu baru menancap sekitar sepertiga detik sebelum tendangan. Rasyid menghabiskan satu musim dingin penuh belajar menatapnya dan bergerak pada saat bersamaan — kedengarannya sederhana, padahal tidak." },
      { illustrationSeed: "standfoot-6", textEn: "He practised with his little sister taking penalties in the yard. She scored ninety times out of a hundred at the start. By March it was sixty, and she was extremely annoyed about it.", textId: "Ia berlatih dengan adik perempuannya yang menendang penalti di halaman. Awalnya adiknya mencetak sembilan puluh dari seratus. Menjelang Maret tinggal enam puluh, dan adiknya sangat kesal karenanya." },
      { illustrationSeed: "standfoot-7", textEn: "In the district final it went to penalties. Rasyid saved two. He did not guess either of them, and afterwards he could describe exactly what both standing feet had done.", textId: "Di final tingkat kabupaten pertandingan berlanjut ke adu penalti. Rasyid menepis dua. Ia tidak menebak satu pun, dan sesudahnya ia bisa menjelaskan persis apa yang dilakukan kedua kaki tumpu itu." },
      { illustrationSeed: "standfoot-8", textEn: "A boy on the other team accused him of cheating, which is the highest compliment a goalkeeper can receive and is also, in this case, completely wrong.", textId: "Seorang anak dari tim lawan menuduhnya curang — pujian tertinggi yang bisa diterima seorang penjaga gawang, dan dalam hal ini juga sepenuhnya keliru." },
      { illustrationSeed: "standfoot-9", textEn: "Rasyid is still not tall. He tells young keepers that height is the thing you cannot change and attention is the thing you can, and that most people are looking at the wrong foot.", textId: "Rasyid tetap tidak tinggi. Ia berkata kepada penjaga gawang muda bahwa tinggi badan adalah hal yang tak bisa diubah dan perhatian adalah hal yang bisa, dan bahwa kebanyakan orang menatap kaki yang keliru." }
    ],
    quiz: [
      { questionEn: "What does Rasyid watch instead of the ball?", questionId: "Apa yang Rasyid perhatikan alih-alih bola?", optionsEn: ["The kicker's eyes", "The standing foot", "The referee", "The crowd"], optionsId: ["Mata penendang", "Kaki tumpu", "Wasit", "Penonton"], correctIndex: 1 },
      { questionEn: "Why does the standing foot give the direction away?", questionId: "Mengapa kaki tumpu membocorkan arah tendangan?", optionsEn: ["Players forget about it", "It has to point where the ball is going for the swing to work", "It is bigger", "Coaches teach it that way"], optionsId: ["Pemain melupakannya", "Kaki itu harus mengarah ke tujuan bola agar ayunannya berfungsi", "Ukurannya lebih besar", "Pelatih mengajarkannya begitu"], correctIndex: 1 },
      { questionEn: "What does Rasyid tell young goalkeepers?", questionId: "Apa yang Rasyid katakan kepada penjaga gawang muda?", optionsEn: ["Grow taller", "Height cannot be changed, attention can", "Always dive left", "Guess early"], optionsId: ["Tumbuhlah lebih tinggi", "Tinggi badan tak bisa diubah, perhatian bisa", "Selalu menepis ke kiri", "Menebaklah lebih awal"], correctIndex: 1 }
    ]
  },
  {
    slug: "the-choir-that-sang-one-note-each",
    titleEn: "The Choir That Sang One Note Each",
    titleId: "Paduan Suara yang Menyanyikan Satu Nada Seorang",
    descriptionEn: "Nobody in the village could hold a tune. So the teacher gave each person exactly one note and told them when to open their mouth.",
    descriptionId: "Tak seorang pun di desa itu bisa menjaga nada. Maka sang guru memberi setiap orang tepat satu nada dan memberitahu kapan harus membuka mulut.",
    categorySlug: "music-rhymes",
    authorSlug: "emily-clark",
    coverEmoji: "🎼",
    coverPalette: "sunrise",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      { illustrationSeed: "onenote-1", textEn: "The village had been asked to sing at the district gathering, and the village had a problem, which was that the village could not sing.", textId: "Desa itu diminta bernyanyi pada pertemuan tingkat kabupaten, dan desa itu punya masalah: desa itu tidak bisa bernyanyi." },
      { illustrationSeed: "onenote-2", textEn: "Not shy — genuinely unable. Twenty-six adults who had never been taught, all of whom drifted off the note within four bars and then argued about whose fault it was.", textId: "Bukan malu — memang benar-benar tidak bisa. Dua puluh enam orang dewasa yang tak pernah diajari, yang semuanya melenceng dari nada dalam empat birama lalu saling menyalahkan." },
      { illustrationSeed: "onenote-3", textEn: "The new teacher, Bu Ina, listened to them for one afternoon and then did something nobody had tried. She gave each person one note. Just one, for the whole song.", textId: "Guru baru, Bu Ina, mendengarkan mereka satu sore lalu melakukan sesuatu yang belum pernah dicoba siapa pun. Ia memberi setiap orang satu nada. Hanya satu, untuk seluruh lagu." },
      { illustrationSeed: "onenote-4", textEn: "Pak Umar had a low one. Bu Sari had the one above it. Nobody had to move between notes, which is the part that had been going wrong, and everybody could hold one note if they only had to hold one.", textId: "Pak Umar mendapat nada rendah. Bu Sari nada di atasnya. Tak ada yang perlu berpindah antarnada — dan justru itulah bagian yang selama ini kacau — dan semua orang bisa menjaga satu nada kalau hanya perlu menjaga satu." },
      { illustrationSeed: "onenote-5", textEn: "Then she gave them the only other instruction: when to open your mouth, and when to close it. She stood in front and pointed, and the melody happened between them, passed from person to person.", textId: "Lalu ia memberikan satu-satunya instruksi lain: kapan membuka mulut, dan kapan menutupnya. Ia berdiri di depan dan menunjuk, dan melodinya terjadi di antara mereka, berpindah dari orang ke orang." },
      { illustrationSeed: "onenote-6", textEn: "Not one of them was singing the tune. Every one of them was singing one note. And what came out into the room was, unmistakably, the tune.", textId: "Tak satu pun dari mereka menyanyikan melodinya. Masing-masing hanya menyanyikan satu nada. Dan yang keluar memenuhi ruangan itu, tak salah lagi, adalah melodinya." },
      { illustrationSeed: "onenote-7", textEn: "It is an old idea and bells do it too — a ring of bells cannot each play a song, so they take one note each and take turns. Bu Ina had simply noticed that people can be bells.", textId: "Itu gagasan lama dan lonceng pun begitu — sekumpulan lonceng tak bisa masing-masing memainkan lagu, jadi mereka mengambil satu nada seorang dan bergantian. Bu Ina hanya menyadari bahwa manusia bisa menjadi lonceng." },
      { illustrationSeed: "onenote-8", textEn: "At the district gathering they sang for four minutes and nobody in the audience could work out how it was being done, which delighted the village enormously.", textId: "Pada pertemuan kabupaten mereka bernyanyi selama empat menit dan tak seorang pun penonton bisa memahami bagaimana itu dilakukan — yang membuat warga desa amat gembira." },
      { illustrationSeed: "onenote-9", textEn: "They still sing. Some of them have learned two notes now, which they consider a great advancement. Pak Umar has stayed loyally on his one low note for nine years and says it is the important one.", textId: "Mereka masih bernyanyi. Sebagian kini sudah menguasai dua nada, yang mereka anggap kemajuan besar. Pak Umar setia pada satu nada rendahnya selama sembilan tahun dan berkata itulah nada yang penting." }
    ],
    quiz: [
      { questionEn: "What was the village's problem?", questionId: "Apa masalah desa itu?", optionsEn: ["They were shy", "They drifted off the note and could not hold a tune", "They had no songs", "They had no teacher"], optionsId: ["Mereka pemalu", "Mereka melenceng dari nada dan tak bisa menjaga melodi", "Mereka tak punya lagu", "Mereka tak punya guru"], correctIndex: 1 },
      { questionEn: "What was Bu Ina's solution?", questionId: "Apa solusi Bu Ina?", optionsEn: ["Practise more", "Give each person one note and tell them when to sing it", "Sing more quietly", "Use instruments"], optionsId: ["Berlatih lebih banyak", "Beri setiap orang satu nada dan beri tahu kapan menyanyikannya", "Bernyanyi lebih pelan", "Memakai alat musik"], correctIndex: 1 },
      { questionEn: "What does the story compare the singers to?", questionId: "Dengan apa cerita ini membandingkan para penyanyi?", optionsEn: ["Birds", "A ring of bells", "A river", "A choir of children"], optionsId: ["Burung", "Sekumpulan lonceng", "Sungai", "Paduan suara anak"], correctIndex: 1 }
    ]
  },
  {
    slug: "the-doctor-who-drew-the-cholera-map",
    titleEn: "The Doctor Who Drew the Cholera Map",
    titleId: "Dokter yang Menggambar Peta Kolera",
    descriptionEn: "In London in 1854 people believed disease travelled in bad air. One doctor drew a map of who had died, and the map pointed at a water pump.",
    descriptionId: "Di London tahun 1854 orang percaya penyakit menyebar lewat udara buruk. Seorang dokter menggambar peta siapa saja yang meninggal, dan peta itu menunjuk pada sebuah pompa air.",
    categorySlug: "true-stories",
    authorSlug: "david-lee",
    coverEmoji: "🚰",
    coverPalette: "dusk",
    ageMin: 8,
    ageMax: 12,
    isPremium: false,
    pages: [
      { illustrationSeed: "cholera-1", textEn: "In August 1854, in a crowded part of London, people began dying of cholera very quickly — some within a day of falling ill. In one small district more than five hundred died in ten days.", textId: "Pada Agustus 1854, di sebuah kawasan padat London, orang-orang mulai meninggal karena kolera dengan sangat cepat — sebagian dalam sehari sejak jatuh sakit. Di satu distrik kecil, lebih dari lima ratus orang meninggal dalam sepuluh hari." },
      { illustrationSeed: "cholera-2", textEn: "Nearly everybody, including most doctors, believed cholera travelled through bad air. The smell in the streets was terrible, people got ill, and the two facts seemed obviously connected.", textId: "Hampir semua orang, termasuk kebanyakan dokter, percaya kolera menyebar lewat udara buruk. Bau di jalanan sangat menyengat, orang jatuh sakit, dan kedua fakta itu tampak jelas berkaitan." },
      { illustrationSeed: "cholera-3", textEn: "A doctor called John Snow did not believe it. He thought it was in the water. He could not prove it by arguing, because the other side had a smell and he only had an idea.", textId: "Seorang dokter bernama John Snow tidak memercayainya. Ia menduga penyebabnya ada di air. Ia tak bisa membuktikannya lewat perdebatan, karena pihak lain punya bau busuk sedangkan ia hanya punya gagasan." },
      { illustrationSeed: "cholera-4", textEn: "So he walked the streets and knocked on doors and asked, house by house, who had died. Then he drew a map of the district and put a small black mark at every address where somebody had.", textId: "Maka ia menyusuri jalanan, mengetuk pintu, dan bertanya dari rumah ke rumah siapa yang meninggal. Lalu ia menggambar peta distrik itu dan menaruh tanda hitam kecil di setiap alamat yang kehilangan seseorang." },
      { illustrationSeed: "cholera-5", textEn: "The marks were not spread out. They were packed tightly around one thing: a public water pump in Broad Street. The further you lived from that pump, the fewer marks there were.", textId: "Tanda-tanda itu tidak tersebar merata. Semuanya berkerumun rapat di sekitar satu benda: pompa air umum di Broad Street. Makin jauh kau tinggal dari pompa itu, makin sedikit tandanya." },
      { illustrationSeed: "cholera-6", textEn: "The best part of the map is the exceptions, because a good investigator chases the places the pattern fails. A brewery full of workers had almost no deaths — the workers drank beer, not water.", textId: "Bagian terbaik dari peta itu adalah pengecualiannya, karena penyelidik yang baik mengejar tempat-tempat di mana polanya gagal. Sebuah pabrik bir yang penuh pekerja hampir tak punya korban — para pekerjanya minum bir, bukan air." },
      { illustrationSeed: "cholera-7", textEn: "And a woman who had died lived far away, which looked wrong until Snow found out she liked the taste of Broad Street water so much that a cart brought her a bottle of it every day.", textId: "Dan seorang perempuan yang meninggal tinggal jauh dari sana — yang tampak menyalahi pola sampai Snow mengetahui bahwa perempuan itu begitu menyukai rasa air Broad Street sehingga sebuah gerobak mengantarkan sebotol untuknya setiap hari." },
      { illustrationSeed: "cholera-8", textEn: "Snow took the map to the local officials and asked them to remove the pump handle so nobody could use it. They did not believe his theory. They removed the handle anyway.", textId: "Snow membawa peta itu kepada pejabat setempat dan meminta mereka melepas gagang pompa supaya tak ada yang bisa memakainya. Mereka tidak memercayai teorinya. Mereka tetap melepas gagangnya." },
      { illustrationSeed: "cholera-9", textEn: "It took years for the water idea to be accepted, and Snow did not live to see it. But the method survived him: when you cannot win an argument, go and collect the facts, and then draw them.", textId: "Butuh bertahun-tahun agar gagasan air itu diterima, dan Snow tak sempat menyaksikannya. Tapi metodenya bertahan melampauinya: ketika kau tak bisa memenangi perdebatan, pergilah kumpulkan faktanya, lalu gambarkan." }
    ],
    quiz: [
      { questionEn: "What did most people in 1854 believe caused cholera?", questionId: "Menurut kebanyakan orang pada 1854, apa penyebab kolera?", optionsEn: ["Dirty water", "Bad air", "Rats", "Cold weather"], optionsId: ["Air kotor", "Udara buruk", "Tikus", "Cuaca dingin"], correctIndex: 1 },
      { questionEn: "How did Snow make his case?", questionId: "Bagaimana Snow membangun buktinya?", optionsEn: ["By arguing with other doctors", "By mapping every address where somebody had died", "By testing the water in a laboratory", "By writing a book"], optionsId: ["Dengan berdebat dengan dokter lain", "Dengan memetakan setiap alamat tempat ada yang meninggal", "Dengan menguji air di laboratorium", "Dengan menulis buku"], correctIndex: 1 },
      { questionEn: "Why does the story call the exceptions the best part?", questionId: "Mengapa cerita ini menyebut pengecualian sebagai bagian terbaik?", optionsEn: ["They were funny", "A good investigator chases the places the pattern fails", "They proved him wrong", "They were the largest group"], optionsId: ["Karena lucu", "Penyelidik yang baik mengejar tempat di mana polanya gagal", "Karena membuktikan ia keliru", "Karena kelompok terbesar"], correctIndex: 1 }
    ]
  }
];
