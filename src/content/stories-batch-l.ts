/**
 * Story batch L — hand-written bilingual (EN/ID) read-aloud stories, appended
 * to the library. Batches only ever add; nothing existing is edited or merged.
 *
 * A sixth book for seventeen shelves: animals, dinosaur, space, bedtime,
 * learning, numbers, superheroes, vehicles, humor, alphabet, fantasy, mystery,
 * pirates, princess-knights, ocean-life, jungle-safari and pets.
 */
import type { Story } from "./stories";

export const STORIES_BATCH_L: Story[] = [
  {
    slug: "the-elephant-who-remembered-the-well",
    titleEn: "The Elephant Who Remembered the Well",
    titleId: "Gajah yang Mengingat Sumur",
    descriptionEn: "In the third year without rain, an old elephant led her family four days across dry country to a waterhole she had last seen when she was young.",
    descriptionId: "Pada tahun ketiga tanpa hujan, seekor gajah tua memimpin keluarganya berjalan empat hari melintasi tanah kering menuju sebuah lubang air yang terakhir ia lihat saat masih muda.",
    categorySlug: "animals",
    authorSlug: "sarah-johnson",
    coverEmoji: "🐘",
    coverPalette: "sunset",
    ageMin: 5,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "wellmemory-1",
        textEn: "The oldest elephant in the family was called Grandmother by everyone, even the elephants who were not related to her. She was fifty-eight. Her ears were torn at the edges like old maps.",
        textId: "Gajah tertua dalam keluarga itu dipanggil Nenek oleh semuanya, bahkan oleh gajah-gajah yang bukan kerabatnya. Usianya lima puluh delapan tahun. Tepi telinganya sobek-sobek seperti peta tua."
      },
      {
        illustrationSeed: "wellmemory-2",
        textEn: "For two years the rains had been thin. In the third year they did not come at all. The river became a road of cracked grey plates, and the young elephants dug in the sand with their feet and found nothing but more sand.",
        textId: "Selama dua tahun hujan turun tipis-tipis. Pada tahun ketiga hujan tidak datang sama sekali. Sungai berubah menjadi jalan dari lempengan-lempengan kelabu yang retak, dan gajah-gajah muda menggali pasir dengan kaki mereka dan tidak menemukan apa pun selain pasir lagi."
      },
      {
        illustrationSeed: "wellmemory-3",
        textEn: "One evening Grandmother stopped eating, which she never did, and stood facing north-west with her trunk lifted. She stayed like that for a long time. Then she began to walk, and the family followed her, because that is what a family does.",
        textId: "Suatu petang Nenek berhenti makan — sesuatu yang tak pernah ia lakukan — dan berdiri menghadap barat laut dengan belalai terangkat. Ia bertahan begitu untuk waktu yang lama. Lalu ia mulai berjalan, dan keluarganya mengikuti, karena begitulah keluarga."
      },
      {
        illustrationSeed: "wellmemory-4",
        textEn: "They walked for four days. There was no water on the way and everybody knew it. The smallest calf had to be pushed along by two aunts on the third afternoon, one on each side, like a cart with two wheels missing.",
        textId: "Mereka berjalan selama empat hari. Tidak ada air di sepanjang jalan dan semua tahu itu. Anak gajah terkecil harus didorong oleh dua bibinya pada sore hari ketiga, satu di setiap sisi, seperti gerobak yang kehilangan dua roda."
      },
      {
        illustrationSeed: "wellmemory-5",
        textEn: "Nobody asked Grandmother where she was going, because elephants do not ask questions like that. But if they could have, the answer would have been strange: she was going to a place she had seen once, when she was nine years old.",
        textId: "Tak ada yang bertanya pada Nenek hendak ke mana, karena gajah tidak mengajukan pertanyaan seperti itu. Tapi seandainya bisa, jawabannya akan terdengar aneh: ia menuju sebuah tempat yang pernah ia lihat sekali, ketika berusia sembilan tahun."
      },
      {
        illustrationSeed: "wellmemory-6",
        textEn: "In that far-off year there had also been a drought, and her own grandmother had walked this same line across the same dry country. A nine-year-old elephant had followed and had drunk, and had not forgotten. Forty-nine years is a long time to hold a direction in your head.",
        textId: "Pada tahun yang jauh itu juga pernah terjadi kekeringan, dan nenek Nenek sendiri telah menempuh garis yang sama melintasi tanah kering yang sama. Seekor gajah berusia sembilan tahun mengikuti dan minum di sana, dan tidak pernah lupa. Empat puluh sembilan tahun adalah waktu yang panjang untuk menyimpan satu arah di kepala."
      },
      {
        illustrationSeed: "wellmemory-7",
        textEn: "On the fourth day they came over a low ridge of red stone, and below it, in a hollow shaded by three fig trees, there was a pool the size of a courtyard, fed from underneath by something the drought could not reach.",
        textId: "Pada hari keempat mereka menuruni punggungan rendah dari batu merah, dan di bawahnya, di sebuah cekungan yang dinaungi tiga pohon ara, ada kolam seluas halaman rumah, yang diberi air dari bawah oleh sesuatu yang tak terjangkau kekeringan."
      },
      {
        illustrationSeed: "wellmemory-8",
        textEn: "The young ones ran. Grandmother did not run. She walked down slowly, put her trunk in the water, and stood there without drinking for almost a minute, the way you stand in a room you have not entered since you were small.",
        textId: "Yang muda-muda berlari. Nenek tidak berlari. Ia menuruni lereng perlahan, memasukkan belalainya ke air, dan berdiri di sana tanpa minum hampir satu menit penuh, seperti caramu berdiri di sebuah ruangan yang tak kau masuki sejak kecil."
      },
      {
        illustrationSeed: "wellmemory-9",
        textEn: "The rains came back the next year, as rains do. But the smallest calf, who was by then not small, had walked the four days and had seen the ridge of red stone. She will be somebody's grandmother one day. She knows the way.",
        textId: "Hujan kembali pada tahun berikutnya, sebagaimana hujan selalu begitu. Tapi anak gajah terkecil, yang saat itu sudah tidak kecil lagi, telah menempuh empat hari perjalanan dan telah melihat punggungan batu merah itu. Suatu hari ia akan menjadi nenek bagi seseorang. Ia tahu jalannya."
      }
    ],
    quiz: [
      {
        questionEn: "How did Grandmother know where the water was?",
        questionId: "Bagaimana Nenek tahu di mana air itu berada?",
        optionsEn: ["She smelled it from far away", "She remembered going there at the age of nine", "Another elephant told her", "She guessed"],
        optionsId: ["Ia menciumnya dari jauh", "Ia ingat pernah ke sana saat berusia sembilan tahun", "Gajah lain memberitahunya", "Ia menebak"],
        correctIndex: 1
      },
      {
        questionEn: "How many days did the family walk?",
        questionId: "Berapa hari keluarga itu berjalan?",
        optionsEn: ["One", "Two", "Four", "Nine"],
        optionsId: ["Satu", "Dua", "Empat", "Sembilan"],
        correctIndex: 2
      },
      {
        questionEn: "Why does the story end with the smallest calf?",
        questionId: "Mengapa cerita ini berakhir dengan anak gajah terkecil?",
        optionsEn: ["She was the fastest", "She now carries the memory of the way for the future", "She found the pool first", "She stayed behind"],
        optionsId: ["Ia yang paling cepat", "Kini ia membawa ingatan tentang jalan itu untuk masa depan", "Ia yang pertama menemukan kolam", "Ia tertinggal di belakang"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-dinosaur-that-was-a-bird-all-along",
    titleEn: "The Dinosaur That Was a Bird All Along",
    titleId: "Dinosaurus yang Ternyata Burung",
    descriptionEn: "A slab of grey rock sat in a museum drawer for thirty years labelled 'lizard, unremarkable'. A ten-year-old with a torch noticed something nobody else had.",
    descriptionId: "Sebongkah batu kelabu tersimpan di laci museum selama tiga puluh tahun dengan label 'kadal, tidak istimewa'. Seorang anak sepuluh tahun dengan senter melihat sesuatu yang tak dilihat orang lain.",
    categorySlug: "dinosaur",
    authorSlug: "david-lee",
    coverEmoji: "🦖",
    coverPalette: "dusk",
    ageMin: 6,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "featherfossil-1",
        textEn: "Museums keep far more than they show. Behind the halls with the big skeletons there are corridors of grey metal drawers, and in the drawers there are thousands of rocks that nobody has looked at properly.",
        textId: "Museum menyimpan jauh lebih banyak daripada yang dipamerkan. Di balik aula-aula berisi kerangka besar ada lorong-lorong berisi laci logam kelabu, dan di dalam laci-laci itu tersimpan ribuan batu yang belum pernah diperiksa dengan benar."
      },
      {
        illustrationSeed: "featherfossil-2",
        textEn: "Drawer 41-C held a slab the size of a dinner tray. The label, typed in 1974, said: SMALL REPTILE, PARTIAL, LIZARD?, UNREMARKABLE. Somebody had underlined the question mark and then, apparently, gone to lunch and never come back.",
        textId: "Laci 41-C berisi lempengan batu sebesar nampan makan. Labelnya, diketik pada 1974, berbunyi: REPTIL KECIL, TIDAK LENGKAP, KADAL?, TIDAK ISTIMEWA. Seseorang pernah menggarisbawahi tanda tanyanya lalu, tampaknya, pergi makan siang dan tak pernah kembali."
      },
      {
        illustrationSeed: "featherfossil-3",
        textEn: "On a Saturday in March, the museum ran a children's morning called Behind the Doors. Ten children were allowed into the corridor with an assistant curator and a box of small torches.",
        textId: "Pada suatu Sabtu di bulan Maret, museum mengadakan acara anak-anak bernama Di Balik Pintu. Sepuluh anak diizinkan masuk ke lorong itu bersama seorang asisten kurator dan sekotak senter kecil."
      },
      {
        illustrationSeed: "featherfossil-4",
        textEn: "A girl named Wulan was given drawer 41-C because it was low down and she was the shortest. She was told to look and describe what she saw. She did this for four minutes, which is a long time to look at one rock.",
        textId: "Seorang anak perempuan bernama Wulan mendapat laci 41-C karena letaknya rendah dan ia yang paling pendek. Ia diminta mengamati dan menceritakan apa yang dilihatnya. Ia melakukannya selama empat menit — waktu yang lama untuk menatap satu batu."
      },
      {
        illustrationSeed: "featherfossil-5",
        textEn: "\"There's fluff,\" she said. The assistant curator said there was not fluff, because rocks do not have fluff. Wulan said it was around the arms, and only when the torch was held nearly flat against the stone, and would he like to try.",
        textId: "\"Ada bulu halusnya,\" katanya. Asisten kurator berkata tidak ada bulu halus, karena batu tidak punya bulu halus. Wulan berkata bulu itu ada di sekitar lengan, dan hanya tampak kalau senternya dipegang nyaris rata dengan permukaan batu — apakah ia mau mencoba."
      },
      {
        illustrationSeed: "featherfossil-6",
        textEn: "He tried. Light held flat across a surface throws a shadow into every dent, which is why archaeologists photograph at dawn. In the low light, along both forearms of the little skeleton, there were rows of fine parallel marks.",
        textId: "Ia mencoba. Cahaya yang dipegang rata di atas permukaan melemparkan bayangan ke setiap cekungan — itulah sebabnya para arkeolog memotret saat fajar. Dalam cahaya rendah itu, di sepanjang kedua lengan bawah kerangka kecil tersebut, tampak deretan garis halus yang sejajar."
      },
      {
        illustrationSeed: "featherfossil-7",
        textEn: "They were feathers. Not soft down but proper feathers with a shaft down the middle and barbs coming off each side, pressed into mud a hundred and twenty million years ago and turned to stone with the animal that wore them.",
        textId: "Itu bulu. Bukan bulu halus, melainkan bulu sejati dengan tangkai di tengah dan helai-helai yang keluar di kedua sisinya, terhimpit lumpur seratus dua puluh juta tahun lalu dan berubah menjadi batu bersama hewan yang memakainya."
      },
      {
        illustrationSeed: "featherfossil-8",
        textEn: "The slab was not a lizard. It was a small meat-eating dinosaur, a cousin of the ones everybody draws with teeth, and it had been feathered like a chicken. It had been sitting in a drawer, correctly filed and completely misunderstood, for thirty years.",
        textId: "Lempengan itu bukan kadal. Itu dinosaurus pemakan daging berukuran kecil, sepupu dari yang biasa digambar orang bergigi tajam, dan ia berbulu seperti ayam. Ia telah tersimpan di laci, terarsip dengan benar namun sepenuhnya disalahpahami, selama tiga puluh tahun."
      },
      {
        illustrationSeed: "featherfossil-9",
        textEn: "The specimen is in the main hall now, in a case at child height, lit from the side on purpose. The card beside it names the finder. Wulan is a geologist and says the whole job is mostly this: look at the thing everyone has already decided about.",
        textId: "Spesimen itu kini ada di aula utama, dalam kotak kaca setinggi anak-anak, disorot dari samping dengan sengaja. Kartu di sebelahnya mencantumkan nama penemunya. Wulan kini seorang geolog dan berkata bahwa pekerjaannya sebagian besar memang begini: perhatikan benda yang sudah terlanjur diputuskan orang lain."
      }
    ],
    quiz: [
      {
        questionEn: "What did the old label say the fossil was?",
        questionId: "Menurut label lama, fosil itu apa?",
        optionsEn: ["A feathered dinosaur", "An unremarkable lizard", "A fish", "A bird"],
        optionsId: ["Dinosaurus berbulu", "Kadal biasa yang tidak istimewa", "Ikan", "Burung"],
        correctIndex: 1
      },
      {
        questionEn: "Why did holding the torch flat against the stone help?",
        questionId: "Mengapa memegang senter rata dengan batu itu membantu?",
        optionsEn: ["It made the rock warmer", "Low, flat light throws a shadow into every tiny dent", "It made the rock transparent", "It cleaned the surface"],
        optionsId: ["Membuat batu lebih hangat", "Cahaya rendah dan rata melemparkan bayangan ke setiap cekungan kecil", "Membuat batu menjadi tembus pandang", "Membersihkan permukaannya"],
        correctIndex: 1
      },
      {
        questionEn: "What is Wulan's lesson about doing science?",
        questionId: "Apa pelajaran Wulan tentang bekerja secara ilmiah?",
        optionsEn: ["Only trust old labels", "Look again at the thing everyone has already decided about", "Work quickly", "Never use torches"],
        optionsId: ["Percayai saja label lama", "Periksa ulang hal yang sudah terlanjur diputuskan orang", "Bekerjalah dengan cepat", "Jangan pernah pakai senter"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-rock-that-fell-in-the-cabbage-field",
    titleEn: "The Rock That Fell in the Cabbage Field",
    titleId: "Batu yang Jatuh di Ladang Kubis",
    descriptionEn: "It came down at 4.40 in the morning, hot, from between the stars. Pak Umar found it in his cabbages and did the one thing that made it valuable.",
    descriptionId: "Ia jatuh pukul 04.40 pagi, panas, dari antara bintang-bintang. Pak Umar menemukannya di ladang kubisnya dan melakukan satu hal yang membuatnya berharga.",
    categorySlug: "space",
    authorSlug: "siti-aminah",
    coverEmoji: "☄️",
    coverPalette: "night",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "cabbagerock-1",
        textEn: "Pak Umar grew cabbages on a slope above a river. He got up at half past four every morning of his life, which is why he was outside and awake when the sky made a noise.",
        textId: "Pak Umar menanam kubis di lereng di atas sungai. Ia bangun pukul setengah lima setiap pagi sepanjang hidupnya — itulah sebabnya ia sedang di luar dan terjaga ketika langit mengeluarkan suara."
      },
      {
        illustrationSeed: "cabbagerock-2",
        textEn: "It was not a bang. It was a long tearing sound, like heavy cloth pulled apart very slowly, and a green-white light that put shadows on the ground where there had been none.",
        textId: "Bukan suara ledakan. Itu suara sobekan panjang, seperti kain tebal yang ditarik perlahan sekali, disertai cahaya hijau keputihan yang menaruh bayangan di tanah yang tadinya tidak berbayang."
      },
      {
        illustrationSeed: "cabbagerock-3",
        textEn: "Then a thump, quite close, in row eleven. Pak Umar counted to two hundred before he went to look, because he was a careful man and had no idea what had landed.",
        textId: "Lalu terdengar bunyi bedebum, cukup dekat, di barisan sebelas. Pak Umar menghitung sampai dua ratus sebelum pergi melihat, karena ia orang yang hati-hati dan tak tahu apa yang baru saja mendarat."
      },
      {
        illustrationSeed: "cabbagerock-4",
        textEn: "In row eleven there was a hole the width of a bucket, and at the bottom of the hole, a black stone the size of a fist. Frost was forming on its outside even though it had just fallen out of the sky burning hot.",
        textId: "Di barisan sebelas ada lubang selebar ember, dan di dasar lubang itu ada batu hitam sebesar kepalan tangan. Embun beku terbentuk di permukaan luarnya padahal ia baru saja jatuh dari langit dalam keadaan membara."
      },
      {
        illustrationSeed: "cabbagerock-5",
        textEn: "That is the strange thing about meteorites. They are freezing all the way through from space and only their skin gets hot on the way down. Take one out of a hole and it will chill your hand, not burn it.",
        textId: "Itulah hal aneh tentang meteorit. Bagian dalamnya beku sedingin ruang angkasa, dan hanya kulitnya yang memanas saat jatuh. Ambil satu dari lubangnya dan ia akan mendinginkan tanganmu, bukan membakarnya."
      },
      {
        illustrationSeed: "cabbagerock-6",
        textEn: "Here is what Pak Umar did, and it is the whole reason this story is worth telling. He did not pick it up. He went back to the house, got a plastic bag, a pencil and the tape measure, and he wrote things down.",
        textId: "Inilah yang dilakukan Pak Umar, dan justru inilah alasan cerita ini layak diceritakan. Ia tidak memungutnya. Ia kembali ke rumah, mengambil kantong plastik, pensil, dan meteran, lalu ia mencatat.",
      },
      {
        illustrationSeed: "cabbagerock-7",
        textEn: "The time. The direction the light had come from. How deep the hole was. Which way the splashed soil pointed. Then he lifted the stone with the bag over his hand, so his skin never touched it, and put it in the bag.",
        textId: "Waktunya. Arah datangnya cahaya. Berapa dalam lubangnya. Ke mana tanah yang terlempar itu mengarah. Lalu ia mengangkat batu itu dengan tangan terbungkus kantong, supaya kulitnya tak pernah menyentuhnya, dan memasukkannya ke dalam kantong."
      },
      {
        illustrationSeed: "cabbagerock-8",
        textEn: "Meteorites that people handle, wash and keep on a shelf are almost worthless to science. Skin oil, tap water and dust get into them within hours. What arrives at a laboratory sealed and unhandled, with the time and the direction written down, is a different object entirely.",
        textId: "Meteorit yang dipegang, dicuci, dan disimpan orang di rak hampir tak bernilai bagi ilmu pengetahuan. Minyak kulit, air keran, dan debu meresap ke dalamnya hanya dalam hitungan jam. Yang tiba di laboratorium dalam keadaan tersegel dan tak tersentuh, disertai catatan waktu dan arah, adalah benda yang sama sekali berbeda."
      },
      {
        illustrationSeed: "cabbagerock-9",
        textEn: "The stone was older than the Earth. It had been drifting since before there was a planet here to fall onto. It has a name now, the name of Pak Umar's village, and a page in a catalogue that lists exactly what he wrote on the back of a seed packet at ten to five in the morning.",
        textId: "Batu itu lebih tua daripada Bumi. Ia telah melayang sejak sebelum ada planet di sini untuk ditumpanginya jatuh. Kini ia punya nama — nama desa Pak Umar — dan sebuah halaman dalam katalog yang memuat persis apa yang ia tulis di balik bungkus benih pada pukul sepuluh menit sebelum lima pagi."
      }
    ],
    quiz: [
      {
        questionEn: "Why was the fallen stone cold, not hot?",
        questionId: "Mengapa batu yang jatuh itu dingin, bukan panas?",
        optionsEn: ["It landed in water", "It is frozen through from space; only its skin heats up on the way down", "It was made of ice", "The night was cold"],
        optionsId: ["Ia mendarat di air", "Bagian dalamnya beku dari ruang angkasa; hanya kulitnya yang memanas saat jatuh", "Ia terbuat dari es", "Malam itu dingin"],
        correctIndex: 1
      },
      {
        questionEn: "What did Pak Umar do that made the meteorite valuable to science?",
        questionId: "Apa yang dilakukan Pak Umar sehingga meteorit itu berharga bagi ilmu pengetahuan?",
        optionsEn: ["He washed it carefully", "He recorded the details and never touched it with bare skin", "He broke it open", "He kept it on a shelf"],
        optionsId: ["Ia mencucinya dengan hati-hati", "Ia mencatat detailnya dan tak pernah menyentuhnya dengan kulit telanjang", "Ia memecahkannya", "Ia menyimpannya di rak"],
        correctIndex: 1
      },
      {
        questionEn: "How old is the stone?",
        questionId: "Berapa tua batu itu?",
        optionsEn: ["A hundred years", "Older than the Earth", "As old as the village", "Nobody can tell"],
        optionsId: ["Seratus tahun", "Lebih tua daripada Bumi", "Setua desa itu", "Tak ada yang bisa tahu"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-night-the-house-listened",
    titleEn: "The Night the House Listened",
    titleId: "Malam Ketika Rumah Mendengarkan",
    descriptionEn: "A very quiet bedtime story about all the small sounds a house makes when everyone has stopped talking.",
    descriptionId: "Cerita pengantar tidur yang sangat tenang tentang segala bunyi kecil yang dibuat sebuah rumah ketika semua orang sudah berhenti bicara.",
    categorySlug: "bedtime",
    authorSlug: "emily-clark",
    coverEmoji: "🌙",
    coverPalette: "night",
    ageMin: 3,
    ageMax: 7,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "houselisten-1",
        textEn: "When the last light goes off, the house does not go quiet. It only gets quiet enough for you to hear it.",
        textId: "Ketika lampu terakhir dimatikan, rumah tidak menjadi sunyi. Ia hanya menjadi cukup tenang untuk bisa kaudengar."
      },
      {
        illustrationSeed: "houselisten-2",
        textEn: "First there is the fridge, humming in the kitchen like somebody thinking with their mouth closed. It stops sometimes. Then it starts again, a little louder, as if it remembered something.",
        textId: "Pertama ada kulkas, berdengung di dapur seperti seseorang yang berpikir dengan mulut tertutup. Kadang ia berhenti. Lalu mulai lagi, sedikit lebih keras, seolah baru teringat sesuatu."
      },
      {
        illustrationSeed: "houselisten-3",
        textEn: "Then the roof, ticking. All day the sun leaned on it and the metal grew a tiny bit wider. Now the night is cooling it and it is getting smaller again, one small tick at a time.",
        textId: "Lalu atap, berdetik-detik. Sepanjang hari matahari bersandar padanya dan logamnya memuai sedikit. Kini malam mendinginkannya dan ia menyusut kembali, satu detik kecil demi satu detik kecil."
      },
      {
        illustrationSeed: "houselisten-4",
        textEn: "Then the water in the pipe behind the wall, which is not going anywhere but shifts a little when somebody two houses away turns a tap.",
        textId: "Lalu air di dalam pipa di balik dinding, yang sebenarnya tidak ke mana-mana tapi bergeser sedikit ketika seseorang dua rumah dari sini memutar keran."
      },
      {
        illustrationSeed: "houselisten-5",
        textEn: "Then the gecko above the doorframe, who says his own name five times and then stops, apparently satisfied.",
        textId: "Lalu cicak di atas kusen pintu, yang menyebut namanya sendiri lima kali lalu berhenti, tampaknya sudah puas."
      },
      {
        illustrationSeed: "houselisten-6",
        textEn: "Then the wind, arriving from the direction of the field, moving through the mango tree in one long push and coming out the other side thinner.",
        textId: "Lalu angin, datang dari arah ladang, bergerak menembus pohon mangga dalam satu dorongan panjang dan keluar di sisi seberang dalam keadaan lebih tipis."
      },
      {
        illustrationSeed: "houselisten-7",
        textEn: "Then someone in another room turning over. Just once. The bed says one word about it and then agrees to say nothing more.",
        textId: "Lalu seseorang di kamar lain berbalik badan. Hanya sekali. Ranjangnya mengucapkan satu kata tentang itu lalu setuju untuk tidak berkata apa-apa lagi."
      },
      {
        illustrationSeed: "houselisten-8",
        textEn: "Then, further off, a motorbike going home along the main road. You can hear it get smaller for a long time. Nobody has ever heard the end of one of those. They just become the sound of not being able to hear them.",
        textId: "Lalu, lebih jauh lagi, sebuah sepeda motor pulang menyusuri jalan raya. Kau bisa mendengarnya mengecil untuk waktu yang lama. Tak pernah ada yang mendengar ujung suaranya. Ia hanya berubah menjadi bunyi ketidakmampuan kita mendengarnya."
      },
      {
        illustrationSeed: "houselisten-9",
        textEn: "And then the last sound, which is the softest one and the one you never quite catch, because by the time it happens you are already asleep, and the house is listening to you breathing.",
        textId: "Dan lalu bunyi terakhir, yang paling lembut dan yang tak pernah benar-benar kau tangkap, karena saat ia terjadi kau sudah tertidur, dan rumahlah yang sedang mendengarkan napasmu."
      }
    ],
    quiz: [
      {
        questionEn: "Why does the roof tick at night?",
        questionId: "Mengapa atap berdetik-detik di malam hari?",
        optionsEn: ["Birds are walking on it", "It cools down and shrinks after the sun warmed it", "Rain is falling", "Somebody is on the roof"],
        optionsId: ["Ada burung berjalan di atasnya", "Ia mendingin dan menyusut setelah dipanaskan matahari", "Hujan turun", "Ada orang di atap"],
        correctIndex: 1
      },
      {
        questionEn: "What does the gecko do?",
        questionId: "Apa yang dilakukan cicak itu?",
        optionsEn: ["Runs across the floor", "Says his own name five times and stops", "Eats the moth", "Falls off the wall"],
        optionsId: ["Berlari melintasi lantai", "Menyebut namanya sendiri lima kali lalu berhenti", "Memakan ngengat", "Jatuh dari dinding"],
        correctIndex: 1
      },
      {
        questionEn: "Who is listening at the very end?",
        questionId: "Siapa yang mendengarkan di bagian paling akhir?",
        optionsEn: ["The gecko", "The house, listening to you breathing", "The motorbike", "The wind"],
        optionsId: ["Cicak", "Rumah, mendengarkan napasmu", "Sepeda motor", "Angin"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "twenty-nine-wrong-answers",
    titleEn: "Twenty-Nine Wrong Answers",
    titleId: "Dua Puluh Sembilan Jawaban Salah",
    descriptionEn: "Deni wanted to tie the knot his grandfather used on the boats. It took him twenty-nine tries, and he counted every single one.",
    descriptionId: "Deni ingin bisa mengikat simpul yang dipakai kakeknya di perahu. Butuh dua puluh sembilan kali percobaan, dan ia menghitung setiap satunya.",
    categorySlug: "learning",
    authorSlug: "sarah-johnson",
    coverEmoji: "🪢",
    coverPalette: "ocean",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "knot29-1",
        textEn: "Deni's grandfather could tie a bowline one-handed, in the dark, in a wind, while holding a torch in his teeth. He had done it perhaps a hundred thousand times.",
        textId: "Kakek Deni bisa mengikat simpul kambing dengan satu tangan, dalam gelap, di tengah angin, sambil menggigit senter. Ia sudah melakukannya mungkin seratus ribu kali."
      },
      {
        illustrationSeed: "knot29-2",
        textEn: "Deni asked to be taught. His grandfather did it slowly four times, and each time it looked like the rope simply agreed to become a knot. Then he gave Deni the rope.",
        textId: "Deni minta diajari. Kakeknya melakukannya perlahan empat kali, dan setiap kali tampak seperti tali itu memang setuju saja menjadi simpul. Lalu ia menyerahkan tali itu kepada Deni."
      },
      {
        illustrationSeed: "knot29-3",
        textEn: "The first attempt was a lump. The second was a different lump. Deni said he could not do it, which is a thing people say on attempt two roughly always.",
        textId: "Percobaan pertama menghasilkan gumpalan. Yang kedua menghasilkan gumpalan yang berbeda. Deni berkata ia tidak bisa — kalimat yang hampir selalu diucapkan orang pada percobaan kedua."
      },
      {
        illustrationSeed: "knot29-4",
        textEn: "His grandfather said something unusual. He said: \"Do not try to get it right. Get it wrong twenty more times and tell me how each one was wrong.\" And he went to mend a net.",
        textId: "Kakeknya mengatakan sesuatu yang tidak biasa. Katanya: \"Jangan berusaha benar. Salahlah dua puluh kali lagi, lalu ceritakan bagaimana tiap kesalahannya.\" Lalu ia pergi memperbaiki jala."
      },
      {
        illustrationSeed: "knot29-5",
        textEn: "So Deni got it wrong on purpose and paid attention. Wrong number six: the loop was made the wrong way round. Wrong number nine: same as six. Wrong number ten: he fixed six and then pulled the tail through the front instead of the back.",
        textId: "Maka Deni sengaja membuatnya salah dan memperhatikan. Kesalahan nomor enam: lingkarannya dibuat terbalik arah. Kesalahan nomor sembilan: sama seperti nomor enam. Kesalahan nomor sepuluh: ia memperbaiki nomor enam lalu menarik ujung talinya lewat depan, bukan lewat belakang."
      },
      {
        illustrationSeed: "knot29-6",
        textEn: "By wrong number seventeen he had stopped making the first mistake entirely. By twenty-two he had stopped making the second. Twenty-three to twenty-eight were all the same new mistake, which is how you know you have found the last one.",
        textId: "Pada kesalahan nomor tujuh belas, ia sudah berhenti sama sekali melakukan kekeliruan pertama. Pada nomor dua puluh dua, ia berhenti melakukan yang kedua. Nomor dua puluh tiga sampai dua puluh delapan semuanya kesalahan baru yang sama — begitulah caramu tahu kau sudah sampai pada yang terakhir."
      },
      {
        illustrationSeed: "knot29-7",
        textEn: "Attempt twenty-nine was a bowline. It was not a lucky one either — he did it again immediately, and again, and it kept being a bowline.",
        textId: "Percobaan kedua puluh sembilan menghasilkan simpul kambing. Dan itu bukan kebetulan — ia mengulanginya langsung, lalu lagi, dan hasilnya tetap simpul kambing."
      },
      {
        illustrationSeed: "knot29-8",
        textEn: "His grandfather looked up from the net and said only: \"Twenty-nine. Mine was over forty.\" This was almost certainly not true, but it was the right thing to say.",
        textId: "Kakeknya mendongak dari jala dan hanya berkata: \"Dua puluh sembilan. Punyaku dulu lebih dari empat puluh.\" Itu hampir pasti tidak benar, tapi itulah kalimat yang tepat untuk diucapkan."
      },
      {
        illustrationSeed: "knot29-9",
        textEn: "Deni is grown up and teaches sailing. He tells every beginner the same thing on the first morning: you are not going to get it right, you are going to run out of ways to get it wrong. Those are different jobs and the second one is finishable.",
        textId: "Deni kini dewasa dan mengajar berlayar. Ia mengatakan hal yang sama kepada setiap pemula pada pagi pertama: kau tidak akan langsung benar, kau akan kehabisan cara untuk salah. Itu dua pekerjaan yang berbeda, dan yang kedua bisa diselesaikan."
      }
    ],
    quiz: [
      {
        questionEn: "What unusual advice did the grandfather give?",
        questionId: "Nasihat tidak biasa apa yang diberikan sang kakek?",
        optionsEn: ["Practise faster", "Get it wrong twenty more times and describe each mistake", "Use a shorter rope", "Watch him again"],
        optionsId: ["Berlatihlah lebih cepat", "Salahlah dua puluh kali lagi dan jelaskan tiap kesalahannya", "Pakai tali yang lebih pendek", "Perhatikan dia sekali lagi"],
        correctIndex: 1
      },
      {
        questionEn: "How did Deni know he had found his last mistake?",
        questionId: "Bagaimana Deni tahu ia sudah menemukan kesalahan terakhirnya?",
        optionsEn: ["His grandfather told him", "Attempts twenty-three to twenty-eight were all the same new mistake", "The rope broke", "He got it right first time"],
        optionsId: ["Kakeknya memberitahunya", "Percobaan dua puluh tiga sampai dua puluh delapan semuanya kesalahan baru yang sama", "Talinya putus", "Ia langsung benar pada percobaan pertama"],
        correctIndex: 1
      },
      {
        questionEn: "What does Deni tell beginners now?",
        questionId: "Apa yang kini Deni katakan kepada para pemula?",
        optionsEn: ["Never make mistakes", "You will run out of ways to get it wrong — and that job is finishable", "Only experts can tie knots", "Twenty-nine is the magic number"],
        optionsId: ["Jangan pernah berbuat salah", "Kau akan kehabisan cara untuk salah — dan pekerjaan itu bisa diselesaikan", "Hanya ahli yang bisa mengikat simpul", "Dua puluh sembilan adalah angka ajaib"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-market-stall-that-ran-on-sevens",
    titleEn: "The Market Stall That Ran on Sevens",
    titleId: "Kios Pasar yang Berjalan dengan Angka Tujuh",
    descriptionEn: "Bu Ratih sold chillies faster than anyone could add up, using a trick with round numbers that she had never once written down.",
    descriptionId: "Bu Ratih menjual cabai lebih cepat daripada kemampuan siapa pun menjumlah, memakai trik angka bulat yang tak pernah sekali pun ia tuliskan.",
    categorySlug: "numbers",
    authorSlug: "siti-aminah",
    coverEmoji: "🌶️",
    coverPalette: "citrus",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "sevens-1",
        textEn: "Bu Ratih's stall was the third on the left and it was famous for two things: the chillies, and the fact that she never used a calculator, a pencil or an abacus.",
        textId: "Kios Bu Ratih adalah yang ketiga di sebelah kiri, dan ia terkenal karena dua hal: cabainya, dan kenyataan bahwa ia tidak pernah memakai kalkulator, pensil, atau sempoa."
      },
      {
        illustrationSeed: "sevens-2",
        textEn: "A customer would put down five bunches at 7,000 each, three at 12,000, and a bag of shallots at 9,500, and before the last item touched the table Bu Ratih would say the total.",
        textId: "Seorang pembeli meletakkan lima ikat seharga 7.000 per ikat, tiga ikat seharga 12.000, dan sekantong bawang merah seharga 9.500 — dan sebelum barang terakhir menyentuh meja, Bu Ratih sudah menyebutkan totalnya."
      },
      {
        illustrationSeed: "sevens-3",
        textEn: "Her grandson Bayu, who was nine and good at school maths, tried to catch her out for a whole week. He could not. He also could not work out how she did it, which annoyed him considerably more.",
        textId: "Cucunya, Bayu, yang berusia sembilan tahun dan pandai matematika di sekolah, berusaha menjebaknya selama seminggu penuh. Ia tidak berhasil. Ia juga tidak bisa memahami caranya, dan itu jauh lebih menjengkelkan baginya."
      },
      {
        illustrationSeed: "sevens-4",
        textEn: "At last he asked. She said: \"Seven is nearly ten.\" Bayu said that seven was not nearly ten, seven was seven. She said: \"Five sevens. Go on.\" He said thirty-five, after a moment.",
        textId: "Akhirnya ia bertanya. Neneknya berkata: \"Tujuh itu hampir sepuluh.\" Bayu berkata tujuh bukan hampir sepuluh, tujuh ya tujuh. Neneknya berkata: \"Lima kali tujuh. Ayo.\" Ia menjawab tiga puluh lima, setelah berhenti sejenak."
      },
      {
        illustrationSeed: "sevens-5",
        textEn: "\"Too slow,\" she said. \"Five tens is fifty. You know that without thinking. Now take away five threes, which is fifteen. Fifty take fifteen is thirty-five. Nobody has to work out five sevens. You work out five tens and give some back.\"",
        textId: "\"Terlalu lambat,\" katanya. \"Lima kali sepuluh itu lima puluh. Kau tahu itu tanpa berpikir. Sekarang kurangi lima kali tiga, yaitu lima belas. Lima puluh dikurangi lima belas sama dengan tiga puluh lima. Tak seorang pun perlu menghitung lima kali tujuh. Kau menghitung lima kali sepuluh lalu mengembalikan sebagiannya.\""
      },
      {
        illustrationSeed: "sevens-6",
        textEn: "Then the shallots. \"Nine thousand five hundred is ten thousand minus five hundred. Never add the awkward number. Add the round one and take the difference off at the end.\"",
        textId: "Lalu bawang merahnya. \"Sembilan ribu lima ratus itu sepuluh ribu dikurangi lima ratus. Jangan pernah menjumlahkan angka yang menyusahkan. Jumlahkan angka bulatnya, lalu kurangi selisihnya di akhir.\""
      },
      {
        illustrationSeed: "sevens-7",
        textEn: "Bayu tried it on the whole basket. Five at seven: fifty minus fifteen, thirty-five. Three at twelve: thirty plus six, thirty-six. Shallots: ten minus a half. Total: eighty-one thousand five hundred. He said it out loud and it was right and it had taken him about four seconds.",
        textId: "Bayu mencobanya pada seluruh keranjang. Lima kali tujuh: lima puluh dikurangi lima belas, tiga puluh lima. Tiga kali dua belas: tiga puluh ditambah enam, tiga puluh enam. Bawang merah: sepuluh dikurangi setengah. Totalnya: delapan puluh satu ribu lima ratus. Ia mengucapkannya keras-keras, dan itu benar, dan hanya butuh sekitar empat detik."
      },
      {
        illustrationSeed: "sevens-8",
        textEn: "\"Who taught you that?\" he asked. She said her mother, at this stall, at about his age, and that her mother had not called it anything. It did not have a name. It was just how you sold chillies without keeping people waiting.",
        textId: "\"Siapa yang mengajarimu itu?\" tanyanya. Neneknya berkata: ibunya, di kios ini juga, kira-kira pada usia yang sama, dan ibunya tidak menamai cara itu apa pun. Ia tidak punya nama. Itu hanya cara menjual cabai tanpa membuat orang menunggu."
      },
      {
        illustrationSeed: "sevens-9",
        textEn: "It has a name, actually. Bayu found it in a book years later, in a chapter about mental arithmetic, described as a technique. He wrote in the margin, next to it, the words \"third stall on the left\", which is the only place he has ever seen it work at full speed.",
        textId: "Sebenarnya cara itu punya nama. Bayu menemukannya di sebuah buku bertahun-tahun kemudian, dalam bab tentang berhitung di kepala, disebut sebagai sebuah teknik. Di pinggir halaman ia menulis, di sebelahnya, kata-kata \"kios ketiga di sebelah kiri\" — satu-satunya tempat ia pernah melihat cara itu bekerja pada kecepatan penuh."
      }
    ],
    quiz: [
      {
        questionEn: "How does Bu Ratih work out five sevens?",
        questionId: "Bagaimana Bu Ratih menghitung lima kali tujuh?",
        optionsEn: ["She counts on her fingers", "Five tens is fifty, then give back five threes", "She memorised every total", "She uses a calculator"],
        optionsId: ["Ia menghitung dengan jari", "Lima kali sepuluh sama dengan lima puluh, lalu kembalikan lima kali tiga", "Ia menghafal semua totalnya", "Ia memakai kalkulator"],
        correctIndex: 1
      },
      {
        questionEn: "What is her rule for an awkward number like 9,500?",
        questionId: "Apa aturannya untuk angka yang menyusahkan seperti 9.500?",
        optionsEn: ["Round it up and forget the rest", "Add the round number, then take the difference off at the end", "Skip it", "Ask the customer"],
        optionsId: ["Bulatkan ke atas dan lupakan sisanya", "Jumlahkan angka bulatnya, lalu kurangi selisihnya di akhir", "Lewati saja", "Tanyakan pada pembeli"],
        correctIndex: 1
      },
      {
        questionEn: "Where did Bu Ratih learn the method?",
        questionId: "Di mana Bu Ratih mempelajari cara itu?",
        optionsEn: ["At school", "From her mother, at the same stall", "From a book", "She invented it"],
        optionsId: ["Di sekolah", "Dari ibunya, di kios yang sama", "Dari sebuah buku", "Ia menciptakannya sendiri"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-superhero-who-was-very-slow",
    titleEn: "The Superhero Who Was Very Slow",
    titleId: "Pahlawan Super yang Sangat Lambat",
    descriptionEn: "Everyone else in the city could fly, lift buses or run through walls. Pelan could only do one thing: move slower than anybody thought possible.",
    descriptionId: "Semua orang lain di kota itu bisa terbang, mengangkat bus, atau menembus tembok. Pelan hanya bisa satu hal: bergerak lebih lambat daripada yang bisa dibayangkan siapa pun.",
    categorySlug: "superheroes",
    authorSlug: "david-lee",
    coverEmoji: "🐢",
    coverPalette: "twilight",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "slowhero-1",
        textEn: "In the city of Kertagara there were eleven registered heroes. Ten of them were fast. One of them was Pelan, whose power was that he could move so slowly that he was, for practical purposes, not moving.",
        textId: "Di kota Kertagara ada sebelas pahlawan terdaftar. Sepuluh di antaranya cepat. Satu lagi adalah Pelan, yang kekuatannya adalah bisa bergerak begitu lambat sehingga, untuk keperluan praktis, ia dianggap tidak bergerak."
      },
      {
        illustrationSeed: "slowhero-2",
        textEn: "This is not an impressive power. It cannot stop a falling crane. It cannot catch anyone. On the hero rankings printed in the newspaper each month, Pelan was eleventh out of eleven, every month, for six years.",
        textId: "Ini bukan kekuatan yang mengesankan. Ia tak bisa menghentikan derek yang jatuh. Ia tak bisa menangkap siapa pun. Dalam peringkat pahlawan yang dicetak koran setiap bulan, Pelan menempati urutan kesebelas dari sebelas, setiap bulan, selama enam tahun."
      },
      {
        illustrationSeed: "slowhero-3",
        textEn: "Then the Glass Tower job. A thief had taken something from the top floor and the whole building had been sealed, and everyone knew the thief was still inside because nothing had left through any door.",
        textId: "Lalu datanglah kasus Menara Kaca. Seorang pencuri mengambil sesuatu dari lantai teratas dan seluruh gedung telah disegel, dan semua tahu pencuri itu masih di dalam karena tak ada apa pun yang keluar lewat pintu mana pun."
      },
      {
        illustrationSeed: "slowhero-4",
        textEn: "The ten fast heroes searched the building four times in eleven minutes. Nothing. They searched it again. Still nothing. Somebody made a joke about calling Pelan, and then, because there was nothing left to try, somebody actually called Pelan.",
        textId: "Sepuluh pahlawan cepat menggeledah gedung itu empat kali dalam sebelas menit. Nihil. Mereka menggeledahnya lagi. Tetap nihil. Seseorang berkelakar tentang memanggil Pelan, lalu, karena tak ada lagi yang bisa dicoba, seseorang benar-benar memanggil Pelan."
      },
      {
        illustrationSeed: "slowhero-5",
        textEn: "Pelan came in and stood in the lobby. He did not search. He said: \"I am going to look at the seventh floor for one hour.\" The other heroes went outside to wait, and some of them laughed, though not all.",
        textId: "Pelan masuk dan berdiri di lobi. Ia tidak menggeledah. Ia berkata: \"Saya akan memandangi lantai tujuh selama satu jam.\" Para pahlawan lain keluar untuk menunggu, dan sebagian tertawa, meski tidak semuanya."
      },
      {
        illustrationSeed: "slowhero-6",
        textEn: "Here is the thing about hiding. A person can hold still for a minute easily. For ten minutes it is hard. For an hour it is nearly impossible: a shoulder drops, a knee shifts, a breath comes out too long.",
        textId: "Begini soal bersembunyi. Seseorang bisa diam tak bergerak selama satu menit dengan mudah. Selama sepuluh menit itu sulit. Selama satu jam nyaris mustahil: sebuah bahu turun, sebuah lutut bergeser, sebuah embusan napas keluar terlalu panjang."
      },
      {
        illustrationSeed: "slowhero-7",
        textEn: "Fast heroes never find still things, because to a fast hero a still thing looks exactly like furniture. Pelan spent fifty-one minutes looking at one corridor, and in the fifty-second minute a curtain that had hung perfectly straight moved about the width of a finger.",
        textId: "Pahlawan cepat tak pernah menemukan benda yang diam, karena bagi pahlawan cepat benda yang diam tampak persis seperti perabot. Pelan menghabiskan lima puluh satu menit memandangi satu koridor, dan pada menit kelima puluh dua sebuah tirai yang tadinya tergantung lurus sempurna bergerak sekitar selebar jari."
      },
      {
        illustrationSeed: "slowhero-8",
        textEn: "That was the whole job. The thief had beaten ten of the fastest people in the country and was defeated by one person who was willing to be bored for fifty-two minutes.",
        textId: "Itulah keseluruhan tugasnya. Sang pencuri telah mengalahkan sepuluh orang tercepat di negeri itu, dan dikalahkan oleh satu orang yang bersedia merasa bosan selama lima puluh dua menit."
      },
      {
        illustrationSeed: "slowhero-9",
        textEn: "The rankings did not change. Pelan is still eleventh, because the rankings measure speed. But the police call him first now for anything that has gone missing indoors, and he always says yes, and he always takes an hour.",
        textId: "Peringkatnya tidak berubah. Pelan tetap di urutan kesebelas, karena peringkat itu mengukur kecepatan. Tapi kini polisi meneleponnya lebih dulu untuk apa pun yang hilang di dalam ruangan, dan ia selalu menyanggupi, dan ia selalu memakai waktu satu jam."
      }
    ],
    quiz: [
      {
        questionEn: "What was Pelan's power?",
        questionId: "Apa kekuatan Pelan?",
        optionsEn: ["Flying", "Moving extremely slowly", "Super strength", "Invisibility"],
        optionsId: ["Terbang", "Bergerak sangat lambat", "Kekuatan super", "Menghilang"],
        correctIndex: 1
      },
      {
        questionEn: "Why could the fast heroes not find the thief?",
        questionId: "Mengapa para pahlawan cepat tak bisa menemukan pencurinya?",
        optionsEn: ["The building was too big", "To a fast hero, a still person looks like furniture", "The thief had left already", "It was too dark"],
        optionsId: ["Gedungnya terlalu besar", "Bagi pahlawan cepat, orang yang diam tampak seperti perabot", "Pencurinya sudah pergi", "Terlalu gelap"],
        correctIndex: 1
      },
      {
        questionEn: "What finally gave the thief away?",
        questionId: "Apa yang akhirnya membongkar persembunyian sang pencuri?",
        optionsEn: ["A sneeze", "A curtain moved the width of a finger after fifty-one minutes", "A dropped coin", "An alarm"],
        optionsId: ["Bersin", "Sebuah tirai bergerak selebar jari setelah lima puluh satu menit", "Koin yang terjatuh", "Alarm"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "bus-number-nine-takes-the-long-way",
    titleEn: "Bus Number Nine Takes the Long Way",
    titleId: "Bus Nomor Sembilan Lewat Jalan Memutar",
    descriptionEn: "For eight years the last bus of the night added two extra streets to its route. The timetable never mentioned it, and neither did the driver.",
    descriptionId: "Selama delapan tahun bus terakhir malam itu menambahkan dua jalan ekstra pada rutenya. Jadwal tak pernah menyebutkannya, dan begitu pula sopirnya.",
    categorySlug: "vehicles",
    authorSlug: "emily-clark",
    coverEmoji: "🚌",
    coverPalette: "dusk",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "bus9-1",
        textEn: "Bus number nine ran from the station to the edge of town, eleven stops, the last one at 23:40. Pak Har had driven the late shift for eight years.",
        textId: "Bus nomor sembilan melayani rute dari stasiun ke pinggir kota, sebelas halte, keberangkatan terakhir pukul 23.40. Pak Har sudah menyetir untuk giliran malam selama delapan tahun."
      },
      {
        illustrationSeed: "bus9-2",
        textEn: "Between stop nine and stop ten the official route goes straight along Jalan Kenari. The late bus did not go straight. It turned right, went down two small streets, and rejoined the route four hundred metres later.",
        textId: "Antara halte sembilan dan halte sepuluh, rute resminya lurus menyusuri Jalan Kenari. Bus malam itu tidak lurus. Ia belok kanan, menyusuri dua jalan kecil, lalu kembali ke rute empat ratus meter kemudian."
      },
      {
        illustrationSeed: "bus9-3",
        textEn: "It cost ninety seconds. Nobody complained, partly because at that hour the bus usually had between one and four people on it, and partly because nobody knew the route well enough to notice.",
        textId: "Itu memakan waktu sembilan puluh detik. Tak ada yang protes, sebagian karena pada jam itu bus biasanya hanya berisi satu sampai empat orang, dan sebagian karena tak ada yang cukup hafal rutenya untuk menyadari."
      },
      {
        illustrationSeed: "bus9-4",
        textEn: "The two small streets had no bus stop, no shelter and no sign. What they had was a hospital laundry, where the shift ended at 23:30, and about nine women who worked in it.",
        textId: "Dua jalan kecil itu tidak punya halte, tidak punya peneduh, tidak punya rambu. Yang mereka punya adalah tempat cuci rumah sakit, yang giliran kerjanya berakhir pukul 23.30, dan sekitar sembilan perempuan yang bekerja di sana."
      },
      {
        illustrationSeed: "bus9-5",
        textEn: "Before the detour, those women walked nineteen minutes in the dark to reach stop ten, or paid for a motorbike taxi that cost more than an hour of their pay.",
        textId: "Sebelum ada jalan memutar itu, para perempuan tersebut berjalan sembilan belas menit dalam gelap untuk mencapai halte sepuluh, atau membayar ojek yang ongkosnya lebih besar daripada upah satu jam mereka."
      },
      {
        illustrationSeed: "bus9-6",
        textEn: "Pak Har had noticed them one night in the rain. He did not report it, ask permission or tell his supervisor. He simply turned right, and then he turned right every night for eight years.",
        textId: "Pak Har memperhatikan mereka pada suatu malam hujan. Ia tidak melaporkannya, tidak meminta izin, tidak memberi tahu atasannya. Ia hanya belok kanan, lalu ia belok kanan setiap malam selama delapan tahun."
      },
      {
        illustrationSeed: "bus9-7",
        textEn: "It came out when the company put tracking units in the buses and a manager saw a small loop appearing in the same place at the same time, every single night, on one vehicle.",
        textId: "Hal itu terbongkar ketika perusahaan memasang perangkat pelacak di bus-bus dan seorang manajer melihat sebuah putaran kecil muncul di tempat yang sama pada jam yang sama, setiap malam tanpa kecuali, pada satu kendaraan."
      },
      {
        illustrationSeed: "bus9-8",
        textEn: "There was a meeting. Pak Har expected to be in trouble and had prepared nothing to say, because there is not much to say. He said: \"It is ninety seconds.\" The meeting lasted twenty minutes.",
        textId: "Diadakanlah rapat. Pak Har mengira ia akan kena masalah dan tak menyiapkan apa pun untuk dikatakan, karena memang tak banyak yang bisa dikatakan. Ia berkata: \"Cuma sembilan puluh detik.\" Rapat itu berlangsung dua puluh menit."
      },
      {
        illustrationSeed: "bus9-9",
        textEn: "Route nine now goes down those two streets officially, on every service, all day. There is a shelter. The timetable at the station shows a stop called Laundry, which is not a beautiful name, but the nine women can see it printed there, which is a kind of proof that they exist.",
        textId: "Rute sembilan kini melewati dua jalan itu secara resmi, pada setiap perjalanan, sepanjang hari. Sudah ada peneduhnya. Jadwal di stasiun menampilkan halte bernama Laundry — bukan nama yang indah, tapi kesembilan perempuan itu bisa melihatnya tercetak di sana, dan itu semacam bukti bahwa mereka ada."
      }
    ],
    quiz: [
      {
        questionEn: "Why did Pak Har turn off the official route?",
        questionId: "Mengapa Pak Har keluar dari rute resmi?",
        optionsEn: ["To avoid traffic", "To pick up laundry workers who finished at 23:30", "To save fuel", "He was lost"],
        optionsId: ["Untuk menghindari macet", "Untuk menjemput pekerja laundry yang selesai pukul 23.30", "Untuk menghemat bahan bakar", "Ia tersesat"],
        correctIndex: 1
      },
      {
        questionEn: "How was the detour discovered?",
        questionId: "Bagaimana jalan memutar itu terbongkar?",
        optionsEn: ["A passenger complained", "Tracking units showed the same small loop every night", "Pak Har told his supervisor", "The bus was late"],
        optionsId: ["Ada penumpang yang protes", "Perangkat pelacak menunjukkan putaran kecil yang sama setiap malam", "Pak Har memberi tahu atasannya", "Busnya terlambat"],
        correctIndex: 1
      },
      {
        questionEn: "What happened in the end?",
        questionId: "Apa yang terjadi pada akhirnya?",
        optionsEn: ["Pak Har lost his job", "The detour became part of the official route, with a shelter and a named stop", "The bus was cancelled", "Nothing changed"],
        optionsId: ["Pak Har kehilangan pekerjaannya", "Jalan memutar itu menjadi bagian rute resmi, lengkap dengan peneduh dan halte bernama", "Busnya dihapus", "Tak ada yang berubah"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-goat-who-ate-the-school-timetable",
    titleEn: "The Goat Who Ate the School Timetable",
    titleId: "Kambing yang Memakan Jadwal Pelajaran",
    descriptionEn: "The only copy. Laminated. From the noticeboard. Three metres off the ground. Nobody has ever explained how.",
    descriptionId: "Satu-satunya salinan. Dilaminasi. Dari papan pengumuman. Tiga meter di atas tanah. Sampai kini tak ada yang bisa menjelaskan caranya.",
    categorySlug: "humor",
    authorSlug: "axto-creative-team",
    coverEmoji: "🐐",
    coverPalette: "meadow",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "goattable-1",
        textEn: "The goat belonged to nobody, which is a normal arrangement for a goat. She lived behind the school kitchen and was called Ibu Kepala by the students, a title she had not earned and did not decline.",
        textId: "Kambing itu bukan milik siapa-siapa, yang merupakan pengaturan normal bagi seekor kambing. Ia tinggal di belakang dapur sekolah dan dipanggil Ibu Kepala oleh para murid — gelar yang tidak ia raih dan tidak pula ia tolak."
      },
      {
        illustrationSeed: "goattable-2",
        textEn: "On the Monday of the second week of term, the school timetable disappeared from the noticeboard in the courtyard. This was serious. It was the only copy. The teacher who had made it had retired in June and moved to another island.",
        textId: "Pada hari Senin minggu kedua semester, jadwal pelajaran sekolah lenyap dari papan pengumuman di halaman. Ini serius. Itu satu-satunya salinan. Guru yang membuatnya sudah pensiun bulan Juni dan pindah ke pulau lain."
      },
      {
        illustrationSeed: "goattable-3",
        textEn: "Evidence at the scene: four drawing pins on the ground, one corner of laminated plastic still attached to the board, and hoofprints. Not near the board. Directly below it.",
        textId: "Barang bukti di lokasi: empat paku payung di tanah, satu sudut plastik laminasi masih menempel di papan, dan jejak kuku. Bukan di dekat papan. Persis di bawahnya."
      },
      {
        illustrationSeed: "goattable-4",
        textEn: "The board is three metres off the ground. Goats can jump. Goats cannot jump three metres. The physics teacher spent an entire free period on this and produced a diagram with three question marks on it.",
        textId: "Papan itu berada tiga meter di atas tanah. Kambing bisa melompat. Kambing tidak bisa melompat tiga meter. Guru fisika menghabiskan satu jam kosong penuh untuk soal ini dan menghasilkan diagram dengan tiga tanda tanya di atasnya."
      },
      {
        illustrationSeed: "goattable-5",
        textEn: "A theory involving the dustbin was proposed, tested, and abandoned when the dustbin turned out to have been locked inside the storeroom all weekend.",
        textId: "Sebuah teori yang melibatkan tong sampah diajukan, diuji, dan ditinggalkan setelah ternyata tong sampah itu terkunci di dalam gudang sepanjang akhir pekan."
      },
      {
        illustrationSeed: "goattable-6",
        textEn: "Meanwhile the school still had to run. For nine days everybody worked from memory. Class 4B claimed they had double sport every afternoon. Nobody could prove otherwise, which is why Class 4B remembers that term extremely fondly.",
        textId: "Sementara itu sekolah tetap harus berjalan. Selama sembilan hari semua orang bekerja dari ingatan. Kelas 4B mengaku mereka punya pelajaran olahraga dua jam setiap sore. Tak ada yang bisa membuktikan sebaliknya — itulah sebabnya Kelas 4B mengenang semester itu dengan sangat gembira."
      },
      {
        illustrationSeed: "goattable-7",
        textEn: "On day ten the headmaster gave up and asked every class to write down every lesson they were sure of. The lists were put together on a big sheet of paper. Where the lists disagreed, the class with the most convincing argument won.",
        textId: "Pada hari kesepuluh kepala sekolah menyerah dan meminta setiap kelas menuliskan semua pelajaran yang mereka yakini. Daftar-daftar itu disatukan pada selembar kertas besar. Di bagian yang daftarnya bertentangan, kelas dengan argumen paling meyakinkan yang menang."
      },
      {
        illustrationSeed: "goattable-8",
        textEn: "The new timetable was better than the old one. Two classes had been double-booked in the school hall since March and nobody had noticed for five months.",
        textId: "Jadwal baru itu lebih baik daripada yang lama. Dua kelas ternyata sudah bentrok memakai aula sekolah sejak bulan Maret dan tak ada yang menyadarinya selama lima bulan."
      },
      {
        illustrationSeed: "goattable-9",
        textEn: "There are three laminated copies now, in three buildings, and one photograph of it on the office wall. Ibu Kepala still lives behind the kitchen. She has never admitted anything. Goats generally do not.",
        textId: "Sekarang ada tiga salinan berlaminasi, di tiga gedung, dan satu foto jadwal itu di dinding kantor. Ibu Kepala masih tinggal di belakang dapur. Ia tak pernah mengakui apa pun. Kambing memang umumnya begitu."
      }
    ],
    quiz: [
      {
        questionEn: "Why was losing the timetable such a problem?",
        questionId: "Mengapa hilangnya jadwal itu jadi masalah besar?",
        optionsEn: ["It was expensive", "It was the only copy and its maker had retired and moved away", "It was very colourful", "The goat was hungry"],
        optionsId: ["Harganya mahal", "Itu satu-satunya salinan dan pembuatnya sudah pensiun dan pindah jauh", "Warnanya sangat menarik", "Kambingnya lapar"],
        correctIndex: 1
      },
      {
        questionEn: "How did the school make a new timetable?",
        questionId: "Bagaimana sekolah membuat jadwal baru?",
        optionsEn: ["They telephoned the retired teacher", "Every class wrote down the lessons they were sure of", "They copied another school", "They gave up"],
        optionsId: ["Mereka menelepon guru yang sudah pensiun", "Setiap kelas menuliskan pelajaran yang mereka yakini", "Mereka meniru sekolah lain", "Mereka menyerah"],
        correctIndex: 1
      },
      {
        questionEn: "What surprising thing did the new timetable reveal?",
        questionId: "Hal mengejutkan apa yang terungkap dari jadwal baru itu?",
        optionsEn: ["There were no maths lessons", "Two classes had been double-booked in the hall since March", "The school had too many teachers", "Class 4B really did have double sport"],
        optionsId: ["Tidak ada pelajaran matematika", "Dua kelas sudah bentrok memakai aula sejak bulan Maret", "Sekolah punya terlalu banyak guru", "Kelas 4B memang benar punya olahraga dua jam"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-sign-painter-ran-out-of-letter-e",
    titleEn: "The Sign Painter Ran Out of E",
    titleId: "Tukang Papan Nama Kehabisan Huruf E",
    descriptionEn: "Pak Joko had a set of metal letter stencils. He had eleven E's. On the morning of the big order, he needed fourteen.",
    descriptionId: "Pak Joko punya satu set cetakan huruf dari logam. Ia punya sebelas huruf E. Pada pagi hari pesanan besar itu, ia butuh empat belas.",
    categorySlug: "alphabet",
    authorSlug: "siti-aminah",
    coverEmoji: "🔤",
    coverPalette: "citrus",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "letterE-1",
        textEn: "Pak Joko painted shop signs. He worked with a wooden case of metal stencils, one drawer per letter, and he had owned it since 1988.",
        textId: "Pak Joko melukis papan nama toko. Ia bekerja dengan kotak kayu berisi cetakan huruf logam, satu laci untuk setiap huruf, dan ia sudah memilikinya sejak 1988."
      },
      {
        illustrationSeed: "letterE-2",
        textEn: "The drawers were not equal. Whoever made the set had thought about how often each letter is used, so there were fifteen A's, eleven E's, twelve I's, and exactly two Q's, which had never both been used at once.",
        textId: "Laci-lacinya tidak sama isinya. Siapa pun yang membuat set itu telah memikirkan seberapa sering tiap huruf dipakai, jadi ada lima belas huruf A, sebelas huruf E, dua belas huruf I, dan tepat dua huruf Q — yang tak pernah sekali pun dipakai berbarengan."
      },
      {
        illustrationSeed: "letterE-3",
        textEn: "On a Tuesday he was given the biggest order of his life: a banner for a school celebration, one line, painted in one go. The line was: SELAMAT DATANG DI PEKAN SENI PELAJAR SE-KECAMATAN.",
        textId: "Pada suatu Selasa ia mendapat pesanan terbesar dalam hidupnya: spanduk untuk perayaan sekolah, satu baris, dilukis sekali jadi. Barisnya berbunyi: SELAMAT DATANG DI PEKAN SENI PELAJAR SE-KECAMATAN."
      },
      {
        illustrationSeed: "letterE-4",
        textEn: "Pak Joko laid out the stencils on the floor to check, which he always did first. He got as far as PELAJAR and stopped. He counted again. He needed fourteen E's. He had eleven.",
        textId: "Pak Joko menata cetakan-cetakan itu di lantai untuk memeriksanya, seperti yang selalu ia lakukan lebih dulu. Ia sampai di kata PELAJAR lalu berhenti. Ia menghitung ulang. Ia butuh empat belas huruf E. Ia hanya punya sebelas."
      },
      {
        illustrationSeed: "letterE-5",
        textEn: "E is the most common letter in Indonesian, and in English, and in most languages written with this alphabet. Whoever packed the case in 1988 had known that and had still not packed enough, because nobody expects one long banner.",
        textId: "E adalah huruf paling sering muncul dalam bahasa Indonesia, juga dalam bahasa Inggris, dan dalam kebanyakan bahasa yang ditulis dengan abjad ini. Siapa pun yang mengemas kotak itu pada 1988 sudah tahu hal tersebut dan tetap saja kurang, karena tak ada yang menduga akan ada satu spanduk sepanjang itu."
      },
      {
        illustrationSeed: "letterE-6",
        textEn: "The shop that sold stencils was in the city, four hours away, and the banner was due the next morning.",
        textId: "Toko yang menjual cetakan huruf ada di kota, empat jam perjalanan, sedangkan spanduk itu harus jadi keesokan paginya."
      },
      {
        illustrationSeed: "letterE-7",
        textEn: "His granddaughter, who was seven and had been watching from the doorway eating a mango, said: \"Do the E's last.\" Pak Joko said that made no difference, and then, a moment later, understood that it made all the difference.",
        textId: "Cucunya yang berusia tujuh tahun, yang sedari tadi menonton dari ambang pintu sambil makan mangga, berkata: \"Huruf E-nya dikerjakan terakhir saja.\" Pak Joko berkata itu tidak ada bedanya, lalu, sesaat kemudian, ia paham bahwa itu justru menentukan segalanya."
      },
      {
        illustrationSeed: "letterE-8",
        textEn: "A stencil is not used up. It is only busy. He painted every letter except E, then lifted the eleven E stencils off the wet banner, wiped them, and used them again for the last three. One drawer of eleven had done the work of fourteen.",
        textId: "Cetakan huruf tidak habis terpakai. Ia hanya sedang sibuk. Pak Joko melukis semua huruf kecuali E, lalu mengangkat kesebelas cetakan E dari spanduk yang masih basah, mengelapnya, dan memakainya lagi untuk tiga huruf terakhir. Satu laci berisi sebelas telah mengerjakan pekerjaan empat belas."
      },
      {
        illustrationSeed: "letterE-9",
        textEn: "The banner hung across the road for nine days. Pak Joko still has eleven E's. He has never bought more, and he now paints every job in order of rarest letter first, which his granddaughter finds extremely funny and entirely her doing.",
        textId: "Spanduk itu terbentang melintasi jalan selama sembilan hari. Pak Joko masih punya sebelas huruf E. Ia tak pernah membeli tambahan, dan kini ia mengerjakan setiap pesanan dengan urutan huruf paling langka lebih dulu — hal yang menurut cucunya sangat lucu dan sepenuhnya berkat dirinya."
      }
    ],
    quiz: [
      {
        questionEn: "Why were there more A stencils than Q stencils?",
        questionId: "Mengapa cetakan huruf A lebih banyak daripada huruf Q?",
        optionsEn: ["A is a bigger letter", "Some letters are used far more often than others", "Q was more expensive", "It was a mistake"],
        optionsId: ["A adalah huruf yang lebih besar", "Sebagian huruf jauh lebih sering dipakai daripada yang lain", "Huruf Q lebih mahal", "Itu sebuah kekeliruan"],
        correctIndex: 1
      },
      {
        questionEn: "What was the granddaughter's idea?",
        questionId: "Apa ide sang cucu?",
        optionsEn: ["Buy more stencils", "Paint the E's last, then lift and reuse them", "Change the wording", "Use a smaller banner"],
        optionsId: ["Beli cetakan tambahan", "Kerjakan huruf E terakhir, lalu angkat dan pakai ulang", "Ubah kalimatnya", "Pakai spanduk yang lebih kecil"],
        correctIndex: 1
      },
      {
        questionEn: "How does Pak Joko work now?",
        questionId: "Bagaimana cara kerja Pak Joko sekarang?",
        optionsEn: ["He paints left to right", "He paints in order of rarest letter first", "He uses a computer", "He refuses long banners"],
        optionsId: ["Ia melukis dari kiri ke kanan", "Ia melukis dengan urutan huruf paling langka lebih dulu", "Ia memakai komputer", "Ia menolak spanduk panjang"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-library-that-only-opened-in-fog",
    titleEn: "The Library That Only Opened in Fog",
    titleId: "Perpustakaan yang Hanya Buka Saat Kabut",
    descriptionEn: "There is a door at the end of Jalan Cendana that is a wall on clear days. Maya went in on a Thursday and came out having read a book that had not been written yet.",
    descriptionId: "Ada sebuah pintu di ujung Jalan Cendana yang berubah menjadi tembok pada hari cerah. Maya masuk ke sana pada suatu Kamis dan keluar setelah membaca buku yang belum ditulis.",
    categorySlug: "fantasy",
    authorSlug: "emily-clark",
    coverEmoji: "📚",
    coverPalette: "twilight",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "fogbrary-1",
        textEn: "Jalan Cendana ends in a wall. Everybody in the neighbourhood knows this and nobody thinks about it, in the way that nobody thinks about their own elbows.",
        textId: "Jalan Cendana berujung pada sebuah tembok. Semua orang di lingkungan itu tahu, dan tak ada yang memikirkannya — sebagaimana tak ada orang yang memikirkan sikunya sendiri."
      },
      {
        illustrationSeed: "fogbrary-2",
        textEn: "In fog, the wall has a door in it. Not a hidden door. A completely ordinary green door with a letterbox and a bootscraper, which is somehow much stranger than a hidden one.",
        textId: "Saat berkabut, tembok itu memiliki pintu. Bukan pintu rahasia. Sebuah pintu hijau yang sepenuhnya biasa, lengkap dengan lubang surat dan pengerik sepatu — yang entah bagaimana justru terasa jauh lebih aneh daripada pintu rahasia."
      },
      {
        illustrationSeed: "fogbrary-3",
        textEn: "Maya went in because the door was open and it was raining and she was eleven, which are three good reasons.",
        textId: "Maya masuk karena pintunya terbuka, karena sedang hujan, dan karena usianya sebelas tahun — tiga alasan yang bagus."
      },
      {
        illustrationSeed: "fogbrary-4",
        textEn: "Inside was a library with a card catalogue, a stove, and a librarian who did not look up. The shelves went back further than the street outside was long, which Maya decided not to think about just yet.",
        textId: "Di dalamnya ada perpustakaan dengan katalog kartu, sebuah tungku, dan seorang pustakawan yang tidak mendongak. Rak-raknya menjulur lebih jauh daripada panjang jalan di luar — hal yang Maya putuskan untuk tidak dipikirkan dulu."
      },
      {
        illustrationSeed: "fogbrary-5",
        textEn: "\"You may read anything,\" said the librarian, still not looking up. \"You may not take anything out, and you may not copy anything down. Those are the only two rules and they are the same rule.\"",
        textId: "\"Kau boleh membaca apa saja,\" kata pustakawan itu, masih tanpa mendongak. \"Kau tidak boleh membawa apa pun keluar, dan tidak boleh menyalin apa pun. Itu dua-duanya aturan, dan sebenarnya aturan yang sama.\""
      },
      {
        illustrationSeed: "fogbrary-6",
        textEn: "Maya found a book with her own surname on the spine. Inside it was an account of a bridge collapse in a town she had never heard of, written in the past tense, dated eleven years in the future.",
        textId: "Maya menemukan sebuah buku dengan nama keluarganya sendiri di punggungnya. Di dalamnya ada laporan tentang runtuhnya sebuah jembatan di kota yang belum pernah ia dengar, ditulis dalam bentuk lampau, bertanggal sebelas tahun ke depan."
      },
      {
        illustrationSeed: "fogbrary-7",
        textEn: "She read it twice, put it back, and stood there for a while. Then she asked the librarian what the point of a library was if nothing could leave it.",
        textId: "Ia membacanya dua kali, mengembalikannya, lalu berdiri di sana beberapa saat. Kemudian ia bertanya pada pustakawan itu, apa gunanya perpustakaan kalau tak ada yang boleh keluar darinya."
      },
      {
        illustrationSeed: "fogbrary-8",
        textEn: "The librarian looked up for the first time. \"Nothing leaves,\" he agreed. \"But you do. You are not a book. Nobody said anything about what you are allowed to remember.\"",
        textId: "Pustakawan itu mendongak untuk pertama kalinya. \"Tak ada yang keluar,\" ia setuju. \"Tapi kau keluar. Kau bukan buku. Tak ada yang bilang apa-apa tentang apa yang boleh kau ingat.\""
      },
      {
        illustrationSeed: "fogbrary-9",
        textEn: "Maya is a bridge engineer. She has never been able to find the door again, though she has walked to the end of Jalan Cendana in fog perhaps two hundred times. She checks that particular kind of joint on every bridge she inspects. She has never had to explain why, and once, in a town she had never heard of, it mattered.",
        textId: "Maya kini seorang insinyur jembatan. Ia tak pernah bisa menemukan pintu itu lagi, meski ia sudah berjalan ke ujung Jalan Cendana saat berkabut mungkin dua ratus kali. Ia selalu memeriksa jenis sambungan tertentu pada setiap jembatan yang ia periksa. Ia tak pernah harus menjelaskan alasannya, dan pada suatu kali, di sebuah kota yang belum pernah ia dengar, hal itu menentukan."
      }
    ],
    quiz: [
      {
        questionEn: "When can the door be seen?",
        questionId: "Kapan pintu itu bisa terlihat?",
        optionsEn: ["At midnight", "In fog", "On Sundays", "In summer"],
        optionsId: ["Tengah malam", "Saat berkabut", "Pada hari Minggu", "Saat musim panas"],
        correctIndex: 1
      },
      {
        questionEn: "What were the library's rules?",
        questionId: "Apa aturan perpustakaan itu?",
        optionsEn: ["Be quiet and pay a fee", "Take nothing out and copy nothing down", "Read only one book", "Return within a week"],
        optionsId: ["Harus tenang dan membayar iuran", "Jangan bawa apa pun keluar dan jangan menyalin apa pun", "Hanya boleh membaca satu buku", "Kembalikan dalam seminggu"],
        correctIndex: 1
      },
      {
        questionEn: "What did the librarian point out at the end?",
        questionId: "Apa yang ditunjukkan pustakawan itu di akhir?",
        optionsEn: ["That the book was fiction", "That Maya is not a book, and nobody limited what she may remember", "That the door would reopen", "That she must pay"],
        optionsId: ["Bahwa bukunya fiksi belaka", "Bahwa Maya bukan buku, dan tak ada yang membatasi apa yang boleh ia ingat", "Bahwa pintunya akan terbuka lagi", "Bahwa ia harus membayar"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-case-of-the-footprints-going-backwards",
    titleEn: "The Case of the Footprints Going Backwards",
    titleId: "Kasus Jejak Kaki yang Berjalan Mundur",
    descriptionEn: "Fresh snow, one set of prints, leading from the locked shed to the house and not the other way. Ilham solved it before breakfast.",
    descriptionId: "Salju baru, satu deret jejak kaki, dari gudang terkunci menuju rumah dan bukan sebaliknya. Ilham memecahkannya sebelum sarapan.",
    categorySlug: "mystery",
    authorSlug: "david-lee",
    coverEmoji: "🔍",
    coverPalette: "dusk",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "backprints-1",
        textEn: "It snowed on the mountain village overnight, which happened perhaps four times a year, and in the morning the family's bicycle was gone from the shed.",
        textId: "Salju turun di desa pegunungan itu semalaman — sesuatu yang terjadi mungkin empat kali setahun — dan pada pagi harinya sepeda keluarga itu hilang dari gudang."
      },
      {
        illustrationSeed: "backprints-2",
        textEn: "The shed was locked. The key hung inside the kitchen. And in the fresh snow between the shed and the back door there was one single line of footprints, pointing towards the house.",
        textId: "Gudang itu terkunci. Kuncinya tergantung di dalam dapur. Dan di atas salju baru antara gudang dan pintu belakang ada satu deret jejak kaki, mengarah menuju rumah."
      },
      {
        illustrationSeed: "backprints-3",
        textEn: "Ilham's older cousin said this proved a thief had come out of the shed, walked to the house, and vanished. Ilham said it proved nothing of the kind, and was told he was eight and should eat his rice.",
        textId: "Sepupu Ilham yang lebih tua berkata ini membuktikan seorang pencuri keluar dari gudang, berjalan ke rumah, lalu lenyap. Ilham berkata itu tidak membuktikan apa-apa, dan dijawab bahwa ia baru delapan tahun dan sebaiknya menghabiskan nasinya."
      },
      {
        illustrationSeed: "backprints-4",
        textEn: "Ilham went outside and knelt at the first print for a long time. Then he walked back to the house, walking backwards, in his own tracks, watching where his heels landed.",
        textId: "Ilham keluar dan berlutut lama sekali di jejak pertama. Lalu ia berjalan kembali ke rumah — berjalan mundur, di dalam jejaknya sendiri, sambil memperhatikan di mana tumitnya mendarat."
      },
      {
        illustrationSeed: "backprints-5",
        textEn: "Here is what he had noticed. When you walk forwards, your heel lands first and it drives deep, and your toe pushes off and throws a little spray of snow forwards out of the print. Every print has a spatter in front of it.",
        textId: "Inilah yang ia perhatikan. Ketika kau berjalan maju, tumitmu mendarat lebih dulu dan menekan dalam, lalu ujung kakimu mendorong dan melemparkan sedikit percikan salju ke depan dari jejak itu. Setiap jejak punya cipratan di depannya."
      },
      {
        illustrationSeed: "backprints-6",
        textEn: "These prints had the deep mark under the toe, not the heel, and the spray of snow lay behind each one. They had been made by somebody walking backwards, from the house towards the shed.",
        textId: "Jejak-jejak ini punya bekas dalam di bawah ujung kaki, bukan tumit, dan percikan saljunya berada di belakang setiap jejak. Jejak itu dibuat oleh seseorang yang berjalan mundur, dari rumah menuju gudang."
      },
      {
        illustrationSeed: "backprints-7",
        textEn: "So nobody had come out of the shed. Somebody had gone into it, walking backwards to make it look otherwise, and that somebody had left from inside the house, where the key was, at a time when the snow was already falling.",
        textId: "Jadi tak ada seorang pun yang keluar dari gudang. Ada seseorang yang masuk ke sana, berjalan mundur agar tampak sebaliknya, dan orang itu berangkat dari dalam rumah, tempat kuncinya berada, pada saat salju sudah turun."
      },
      {
        illustrationSeed: "backprints-8",
        textEn: "The bicycle was in the shed the whole time, under a tarpaulin, behind the firewood. The cousin had hidden it there at five in the morning to get out of riding it to the market, which was a chore he hated, and had been rather too clever about the footprints.",
        textId: "Sepeda itu ada di dalam gudang sepanjang waktu, di bawah terpal, di balik tumpukan kayu bakar. Sepupunya menyembunyikannya di sana pukul lima pagi supaya lolos dari tugas mengayuhnya ke pasar — pekerjaan yang ia benci — dan ia terlalu pintar mengurus jejak kaki."
      },
      {
        illustrationSeed: "backprints-9",
        textEn: "Ilham did not tell the adults. He told his cousin what he had worked out, and then rode the bicycle to the market himself, once, and never again. The cousin has told this story at every family gathering for twenty years. He always tells it against himself.",
        textId: "Ilham tidak memberi tahu orang dewasa. Ia menceritakan temuannya kepada sepupunya, lalu mengayuh sepeda itu ke pasar sendiri, sekali, dan tak pernah lagi. Sepupunya menceritakan kisah ini di setiap kumpul keluarga selama dua puluh tahun. Ia selalu menceritakannya dengan menertawakan dirinya sendiri."
      }
    ],
    quiz: [
      {
        questionEn: "How can you tell a footprint was made walking forwards?",
        questionId: "Bagaimana cara mengetahui sebuah jejak dibuat sambil berjalan maju?",
        optionsEn: ["It is bigger", "The heel mark is deeper and the snow sprays forwards", "It is closer together", "It points left"],
        optionsId: ["Ukurannya lebih besar", "Bekas tumitnya lebih dalam dan saljunya terciprat ke depan", "Jaraknya lebih rapat", "Arahnya ke kiri"],
        correctIndex: 1
      },
      {
        questionEn: "What did the prints actually show?",
        questionId: "Apa yang sebenarnya ditunjukkan jejak-jejak itu?",
        optionsEn: ["A thief leaving the shed", "Somebody walking backwards from the house into the shed", "Two people", "An animal"],
        optionsId: ["Pencuri meninggalkan gudang", "Seseorang berjalan mundur dari rumah ke dalam gudang", "Dua orang", "Seekor hewan"],
        correctIndex: 1
      },
      {
        questionEn: "Why had the cousin hidden the bicycle?",
        questionId: "Mengapa sepupunya menyembunyikan sepeda itu?",
        optionsEn: ["To sell it", "To get out of riding it to the market", "To play a game", "It was broken"],
        optionsId: ["Untuk menjualnya", "Supaya lolos dari tugas mengayuhnya ke pasar", "Untuk bermain-main", "Sepedanya rusak"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-pirate-who-kept-the-receipts",
    titleEn: "The Pirate Who Kept the Receipts",
    titleId: "Bajak Laut yang Menyimpan Semua Struk",
    descriptionEn: "Captain Rasyi was a poor swordsman and a worse swimmer. She commanded the most successful ship in the strait for nine years, on paperwork.",
    descriptionId: "Kapten Rasyi payah bermain pedang dan lebih payah lagi berenang. Ia memimpin kapal paling sukses di selat itu selama sembilan tahun — dengan urusan tulis-menulis.",
    categorySlug: "pirates",
    authorSlug: "sarah-johnson",
    coverEmoji: "🏴‍☠️",
    coverPalette: "ocean",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "receiptpirate-1",
        textEn: "Every pirate ship in the strait had a captain who could fight. The Kesturi had Captain Rasyi, who could not, and who had been elected anyway by a crew of forty-one on a show of hands.",
        textId: "Setiap kapal bajak laut di selat itu punya kapten yang jago bertarung. Kapal Kesturi punya Kapten Rasyi, yang tidak jago bertarung, dan yang tetap saja terpilih oleh empat puluh satu awak lewat pengangkatan tangan."
      },
      {
        illustrationSeed: "receiptpirate-2",
        textEn: "What she had was a locked chest containing not treasure but nine ledgers, and a rule that everything the ship took or spent was written down within the hour, by two different people, who both signed.",
        textId: "Yang ia miliki adalah sebuah peti terkunci yang berisi bukan harta karun melainkan sembilan buku besar, dan sebuah aturan bahwa segala yang diambil atau dibelanjakan kapal itu harus dicatat dalam waktu satu jam, oleh dua orang berbeda, yang keduanya membubuhkan tanda tangan."
      },
      {
        illustrationSeed: "receiptpirate-3",
        textEn: "Pirate crews did not usually fall apart in battle. They fell apart afterwards, over the share-out, when somebody was sure they had been cheated and there was no way on earth to prove it either way.",
        textId: "Awak bajak laut biasanya tidak bubar di tengah pertempuran. Mereka bubar sesudahnya, saat pembagian hasil, ketika seseorang yakin dirinya dicurangi dan tak ada satu pun cara di dunia ini untuk membuktikannya."
      },
      {
        illustrationSeed: "receiptpirate-4",
        textEn: "On the Kesturi you could ask, and there was an answer, in ink, with two names beside it. In nine years the Kesturi had one dispute about money. It lasted eleven minutes and ended when the ledger was opened.",
        textId: "Di Kesturi kau bisa bertanya, dan ada jawabannya, tertulis dengan tinta, dengan dua nama di sebelahnya. Dalam sembilan tahun, Kesturi hanya mengalami satu perselisihan soal uang. Perselisihan itu berlangsung sebelas menit dan berakhir ketika buku besarnya dibuka."
      },
      {
        illustrationSeed: "receiptpirate-5",
        textEn: "Other ships lost half their crew every season to arguments and desertion. The Kesturi lost almost nobody, and the best sailors in three ports were quietly trying to get aboard.",
        textId: "Kapal-kapal lain kehilangan separuh awaknya setiap musim karena pertengkaran dan pembelotan. Kesturi hampir tak kehilangan siapa pun, dan pelaut-pelaut terbaik di tiga pelabuhan diam-diam berusaha ikut naik."
      },
      {
        illustrationSeed: "receiptpirate-6",
        textEn: "The ledgers also recorded what was NOT taken. Rasyi's second rule: never touch a fishing boat, never touch a boat carrying medicine, and write down that you passed it and why.",
        textId: "Buku-buku besar itu juga mencatat apa yang TIDAK diambil. Aturan kedua Rasyi: jangan pernah mengusik perahu nelayan, jangan pernah mengusik perahu pengangkut obat, dan catatlah bahwa kau melewatkannya beserta alasannya."
      },
      {
        illustrationSeed: "receiptpirate-7",
        textEn: "This looked soft. It was not. Fishermen in the strait told the Kesturi where the rich ships were, because the Kesturi was the one ship that had never taken anything from them, and there was a book that proved it.",
        textId: "Ini kelihatannya lembek. Padahal tidak. Para nelayan di selat itu memberi tahu Kesturi di mana kapal-kapal kaya berada, karena Kesturi adalah satu-satunya kapal yang tak pernah mengambil apa pun dari mereka, dan ada buku yang membuktikannya."
      },
      {
        illustrationSeed: "receiptpirate-8",
        textEn: "When it finally ended, Rasyi was not caught in a fight. She walked into a colonial court with the nine ledgers under her arm and negotiated for two days, and the court had to admit that her records were better kept than its own.",
        textId: "Ketika semuanya akhirnya berakhir, Rasyi tidak tertangkap dalam pertempuran. Ia berjalan masuk ke sebuah pengadilan kolonial dengan sembilan buku besar terselip di lengannya dan bernegosiasi selama dua hari, dan pengadilan itu terpaksa mengakui bahwa catatannya lebih rapi daripada catatan mereka sendiri."
      },
      {
        illustrationSeed: "receiptpirate-9",
        textEn: "Seven of the nine ledgers survive in a museum. Historians use them constantly, because they are the most detailed account of trade in that strait in that century — written, as it happens, by the people who were robbing it.",
        textId: "Tujuh dari sembilan buku besar itu masih tersimpan di sebuah museum. Para sejarawan terus-menerus memakainya, karena itulah catatan perdagangan paling rinci di selat tersebut pada abad itu — yang, kebetulan, ditulis oleh orang-orang yang merampoknya."
      }
    ],
    quiz: [
      {
        questionEn: "What was in Captain Rasyi's locked chest?",
        questionId: "Apa isi peti terkunci Kapten Rasyi?",
        optionsEn: ["Gold", "Nine ledgers", "Weapons", "Maps"],
        optionsId: ["Emas", "Sembilan buku besar", "Senjata", "Peta"],
        correctIndex: 1
      },
      {
        questionEn: "Why did keeping records hold the crew together?",
        questionId: "Mengapa mencatat segalanya membuat awak kapal tetap bersatu?",
        optionsEn: ["It was entertaining", "Share-out arguments could be settled with proof instead of suspicion", "It impressed other ships", "It was the law"],
        optionsId: ["Karena mengasyikkan", "Perselisihan pembagian bisa diselesaikan dengan bukti, bukan kecurigaan", "Karena mengesankan kapal lain", "Karena diwajibkan hukum"],
        correctIndex: 1
      },
      {
        questionEn: "Why did fishermen help the Kesturi?",
        questionId: "Mengapa para nelayan membantu Kesturi?",
        optionsEn: ["They were paid", "The Kesturi never took from them, and the ledgers proved it", "They were afraid", "They were family"],
        optionsId: ["Mereka dibayar", "Kesturi tak pernah mengambil dari mereka, dan buku besarnya membuktikan itu", "Mereka takut", "Mereka masih kerabat"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-princess-who-read-the-contract",
    titleEn: "The Princess Who Read the Contract",
    titleId: "Putri yang Membaca Surat Perjanjian",
    descriptionEn: "The kingdom had promised the dragon one cow a year for three hundred years. Princess Ayu asked to see the actual document.",
    descriptionId: "Kerajaan itu telah berjanji memberi sang naga satu ekor sapi setiap tahun selama tiga ratus tahun. Putri Ayu meminta untuk melihat dokumen aslinya.",
    categorySlug: "princess-knights",
    authorSlug: "siti-aminah",
    coverEmoji: "📜",
    coverPalette: "sunset",
    ageMin: 6,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "contractprincess-1",
        textEn: "Every autumn the kingdom of Warnasari sent one cow up the mountain to the dragon. It had done this for three hundred and four years, and every year it cost the kingdom one cow, which is not nothing.",
        textId: "Setiap musim gugur kerajaan Warnasari mengirim seekor sapi ke atas gunung untuk sang naga. Mereka telah melakukannya selama tiga ratus empat tahun, dan setiap tahun itu merugikan kerajaan satu ekor sapi — yang bukan berarti tidak ada apa-apanya."
      },
      {
        illustrationSeed: "contractprincess-2",
        textEn: "Nobody questioned it. Six knights had questioned it over the centuries by riding up the mountain with a sword, and the mountain had kept all six.",
        textId: "Tak ada yang mempertanyakannya. Enam kesatria pernah mempertanyakannya sepanjang berabad-abad dengan menunggang kuda ke gunung sambil membawa pedang, dan gunung itu menyimpan keenam-enamnya."
      },
      {
        illustrationSeed: "contractprincess-3",
        textEn: "Princess Ayu was fourteen and asked a question nobody had asked: was there a document? There was. It took the royal archivist nine days to find it, in a box, under a box.",
        textId: "Putri Ayu berusia empat belas tahun dan mengajukan pertanyaan yang belum pernah diajukan siapa pun: apakah ada dokumennya? Ternyata ada. Arsiparis kerajaan butuh sembilan hari untuk menemukannya, di dalam sebuah kotak, di bawah kotak lain."
      },
      {
        illustrationSeed: "contractprincess-4",
        textEn: "The agreement was one page. It was signed by a king who had been dead for three centuries and by a claw-mark. And it had a clause that everybody had stopped reading, because it was at the bottom and the important part was clearly at the top.",
        textId: "Perjanjian itu hanya satu halaman. Ditandatangani oleh seorang raja yang sudah tiga abad wafat dan oleh sebuah bekas cakar. Dan ada satu pasal yang tak lagi dibaca siapa pun, karena letaknya di bawah sedangkan bagian pentingnya jelas ada di atas."
      },
      {
        illustrationSeed: "contractprincess-5",
        textEn: "The clause said the arrangement was payment for the dragon's protection of the eastern pass, and that it would end if the pass were ever left undefended for one full year.",
        textId: "Pasal itu menyebutkan bahwa pengaturan tersebut adalah bayaran atas perlindungan sang naga terhadap celah gunung sebelah timur, dan bahwa perjanjian berakhir jika celah itu pernah dibiarkan tanpa penjagaan selama satu tahun penuh."
      },
      {
        illustrationSeed: "contractprincess-6",
        textEn: "The eastern pass had been undefended since roughly 1710, because a landslide had closed it and there was no longer any pass to defend.",
        textId: "Celah timur itu sudah tak dijaga sejak kira-kira tahun 1710, karena longsor telah menutupnya dan tak ada lagi celah yang perlu dijaga."
      },
      {
        illustrationSeed: "contractprincess-7",
        textEn: "Ayu rode up the mountain with the document and no sword. This is a considerably braver thing to do than riding up with a sword, and she knew it, and went anyway.",
        textId: "Ayu menunggang naik ke gunung membawa dokumen itu dan tanpa pedang. Ini jauh lebih berani daripada naik membawa pedang, dan ia tahu itu, dan tetap pergi."
      },
      {
        illustrationSeed: "contractprincess-8",
        textEn: "The dragon read it. Dragons can read; nobody had ever tried them. Then it said the thing Ayu had been hoping for and had not dared expect: \"Yes. That is correct. I wondered when someone would look.\"",
        textId: "Sang naga membacanya. Naga bisa membaca; tak ada yang pernah mencoba mengujinya. Lalu ia mengucapkan hal yang diharapkan Ayu dan tak berani ia harapkan: \"Ya. Itu benar. Aku bertanya-tanya kapan ada yang akan memeriksanya.\""
      },
      {
        illustrationSeed: "contractprincess-9",
        textEn: "The cow stopped. The dragon still lives on the mountain and has, twice since, come down to help put out a forest fire, unpaid and unasked. Ayu is queen now. The first thing she built was an archive with a proper index.",
        textId: "Pengiriman sapi pun berhenti. Sang naga masih tinggal di gunung dan, dua kali sejak itu, turun membantu memadamkan kebakaran hutan — tanpa dibayar dan tanpa diminta. Ayu kini menjadi ratu. Hal pertama yang ia bangun adalah sebuah arsip dengan indeks yang benar."
      }
    ],
    quiz: [
      {
        questionEn: "What had six knights tried before Ayu?",
        questionId: "Apa yang telah dicoba enam kesatria sebelum Ayu?",
        optionsEn: ["Reading the document", "Riding up the mountain with a sword", "Paying two cows", "Moving the kingdom"],
        optionsId: ["Membaca dokumennya", "Menunggang naik gunung dengan pedang", "Membayar dua ekor sapi", "Memindahkan kerajaan"],
        correctIndex: 1
      },
      {
        questionEn: "What did the forgotten clause say?",
        questionId: "Apa isi pasal yang terlupakan itu?",
        optionsEn: ["The dragon could take two cows", "The deal ends if the eastern pass is undefended for a year", "The king must visit yearly", "The dragon owned the mountain"],
        optionsId: ["Naga boleh mengambil dua ekor sapi", "Perjanjian berakhir jika celah timur tak dijaga selama setahun", "Raja harus berkunjung setiap tahun", "Naga memiliki gunung itu"],
        correctIndex: 1
      },
      {
        questionEn: "What did Ayu build first as queen?",
        questionId: "Apa yang pertama kali dibangun Ayu sebagai ratu?",
        optionsEn: ["A wall", "An archive with a proper index", "A new palace", "A bridge"],
        optionsId: ["Sebuah tembok", "Sebuah arsip dengan indeks yang benar", "Istana baru", "Sebuah jembatan"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-octopus-and-the-jam-jar",
    titleEn: "The Octopus and the Jam Jar",
    titleId: "Gurita dan Toples Selai",
    descriptionEn: "The aquarium staff put a crab in a screw-top jar to see what would happen. What happened took four minutes and changed how they built every tank afterwards.",
    descriptionId: "Petugas akuarium memasukkan seekor kepiting ke dalam toples berulir untuk melihat apa yang akan terjadi. Yang terjadi memakan waktu empat menit dan mengubah cara mereka membangun setiap tangki setelahnya.",
    categorySlug: "ocean-life",
    authorSlug: "sarah-johnson",
    coverEmoji: "🐙",
    coverPalette: "ocean",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "octojar-1",
        textEn: "The octopus in tank six had no name for eleven months because the staff had a rule against naming animals that would be released. By month twelve she was called Ratu by everybody, including the person who had made the rule.",
        textId: "Gurita di tangki enam tidak punya nama selama sebelas bulan karena para petugas punya aturan melarang memberi nama pada hewan yang akan dilepasliarkan. Pada bulan kedua belas semua orang memanggilnya Ratu, termasuk orang yang membuat aturan itu."
      },
      {
        illustrationSeed: "octojar-2",
        textEn: "An octopus has about five hundred million nerve cells and more than half of them are not in its head. They are in its arms. Each arm can taste, and each arm can solve a small problem more or less on its own.",
        textId: "Seekor gurita punya sekitar lima ratus juta sel saraf dan lebih dari separuhnya tidak berada di kepalanya. Sel-sel itu ada di lengan-lengannya. Setiap lengan bisa mengecap, dan setiap lengan bisa memecahkan masalah kecil kurang lebih sendirian."
      },
      {
        illustrationSeed: "octojar-3",
        textEn: "One Thursday somebody lowered a glass jar into tank six. Inside the jar was a small crab. The lid was screwed on tight, the way a jam jar is when nobody has opened it yet.",
        textId: "Pada suatu Kamis seseorang menurunkan sebuah toples kaca ke tangki enam. Di dalam toples itu ada seekor kepiting kecil. Tutupnya dipasang kencang, seperti toples selai yang belum pernah dibuka siapa pun."
      },
      {
        illustrationSeed: "octojar-4",
        textEn: "Ratu came over immediately, which was not surprising. She went round the jar twice, which was also not surprising. Then she stopped moving entirely for about forty seconds, and that was the interesting part.",
        textId: "Ratu langsung mendekat, dan itu tidak mengejutkan. Ia mengelilingi toples itu dua kali, dan itu juga tidak mengejutkan. Lalu ia berhenti bergerak sama sekali selama sekitar empat puluh detik — dan itulah bagian yang menarik."
      },
      {
        illustrationSeed: "octojar-5",
        textEn: "Then she wrapped two arms around the body of the jar and two around the lid, and turned them in opposite directions. Not randomly. She did not try pulling first. She went straight to twisting.",
        textId: "Lalu ia melingkarkan dua lengan pada badan toples dan dua lengan pada tutupnya, dan memutar keduanya ke arah berlawanan. Bukan asal-asalan. Ia tidak mencoba menarik lebih dulu. Ia langsung memutar."
      },
      {
        illustrationSeed: "octojar-6",
        textEn: "It took four minutes and eleven seconds. The staff watched it in complete silence, which is unusual for that room. Then she ate the crab, and put the lid back down on the sand, which nobody has ever fully explained.",
        textId: "Butuh empat menit sebelas detik. Para petugas menyaksikannya dalam kesunyian total, sesuatu yang tidak biasa di ruangan itu. Lalu ia memakan kepitingnya, dan meletakkan kembali tutup toples itu di atas pasir — sesuatu yang sampai kini tak pernah benar-benar bisa dijelaskan siapa pun."
      },
      {
        illustrationSeed: "octojar-7",
        textEn: "The second jar, a week later, took forty seconds. The third took twenty-two. She was not getting stronger. She was remembering.",
        textId: "Toples kedua, seminggu kemudian, butuh empat puluh detik. Yang ketiga butuh dua puluh dua detik. Ia tidak menjadi lebih kuat. Ia sedang mengingat."
      },
      {
        illustrationSeed: "octojar-8",
        textEn: "This is why every octopus tank in that aquarium now has a lid that clamps, and a puzzle delivered on Tuesdays. An octopus with nothing to solve gets ill. That is not sentimental; it is written into the care manual.",
        textId: "Inilah sebabnya setiap tangki gurita di akuarium itu kini punya tutup yang dijepit, dan sebuah teka-teki yang diantar setiap Selasa. Gurita yang tak punya apa pun untuk dipecahkan akan jatuh sakit. Itu bukan sentimentalitas; itu tertulis dalam buku panduan perawatan."
      },
      {
        illustrationSeed: "octojar-9",
        textEn: "Ratu was released in her second spring, off the reef she had been found on. She lived perhaps another year, because octopuses do not live long, which is the saddest fact in this whole story: the cleverest animal in the sea gets about four years to be clever in.",
        textId: "Ratu dilepasliarkan pada musim semi keduanya, di dekat terumbu tempat ia ditemukan. Ia hidup mungkin setahun lagi, karena gurita tidak berumur panjang — dan itulah fakta paling menyedihkan dalam seluruh cerita ini: hewan paling cerdas di laut hanya diberi sekitar empat tahun untuk menjadi cerdas."
      }
    ],
    quiz: [
      {
        questionEn: "Where are most of an octopus's nerve cells?",
        questionId: "Di mana letak sebagian besar sel saraf gurita?",
        optionsEn: ["In its head", "In its arms", "In its eyes", "In its skin"],
        optionsId: ["Di kepalanya", "Di lengan-lengannya", "Di matanya", "Di kulitnya"],
        correctIndex: 1
      },
      {
        questionEn: "Why did the second and third jars take less time?",
        questionId: "Mengapa toples kedua dan ketiga butuh waktu lebih singkat?",
        optionsEn: ["The lids were looser", "She remembered how to do it", "She was stronger", "The crabs helped"],
        optionsId: ["Tutupnya lebih longgar", "Ia mengingat caranya", "Ia menjadi lebih kuat", "Kepitingnya membantu"],
        correctIndex: 1
      },
      {
        questionEn: "Why does the aquarium deliver puzzles every Tuesday?",
        questionId: "Mengapa akuarium itu mengantar teka-teki setiap Selasa?",
        optionsEn: ["To entertain visitors", "An octopus with nothing to solve gets ill", "To test the lids", "To feed them"],
        optionsId: ["Untuk menghibur pengunjung", "Gurita yang tak punya apa pun untuk dipecahkan akan jatuh sakit", "Untuk menguji tutupnya", "Untuk memberi mereka makan"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-tiger-that-was-counted-twice",
    titleEn: "The Tiger That Was Counted Twice",
    titleId: "Harimau yang Terhitung Dua Kali",
    descriptionEn: "The forest survey said there were nineteen tigers. A woman with a stack of photographs and a lot of patience proved there were eleven.",
    descriptionId: "Survei hutan menyebut ada sembilan belas harimau. Seorang perempuan dengan setumpuk foto dan kesabaran yang besar membuktikan hanya ada sebelas.",
    categorySlug: "jungle-safari",
    authorSlug: "david-lee",
    coverEmoji: "🐅",
    coverPalette: "forest",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "stripecount-1",
        textEn: "Counting tigers is much harder than it sounds, because a tiger does not stand still to be counted and does not care about your survey.",
        textId: "Menghitung harimau jauh lebih sulit daripada kedengarannya, karena harimau tidak mau berdiri diam untuk dihitung dan tidak peduli pada surveimu."
      },
      {
        illustrationSeed: "stripecount-2",
        textEn: "For years the method was footprints. A ranger would find a pugmark, measure it, and record a tiger. Two rangers in two valleys could record the same animal twice and nobody would ever know.",
        textId: "Selama bertahun-tahun metodenya adalah jejak kaki. Seorang penjaga hutan menemukan tapak, mengukurnya, dan mencatat satu harimau. Dua penjaga di dua lembah bisa mencatat hewan yang sama dua kali dan tak akan pernah ada yang tahu."
      },
      {
        illustrationSeed: "stripecount-3",
        textEn: "The 2003 survey for that forest reported nineteen tigers, which was good news, and was used in a report, and appeared in a newspaper.",
        textId: "Survei tahun 2003 untuk hutan itu melaporkan sembilan belas harimau — kabar baik, yang lalu dipakai dalam sebuah laporan, dan muncul di surat kabar."
      },
      {
        illustrationSeed: "stripecount-4",
        textEn: "Ibu Warni did not believe it. She had walked that forest for eleven years and thought she knew roughly how many large animals it could feed, and nineteen was not that number.",
        textId: "Ibu Warni tidak percaya. Ia sudah menyusuri hutan itu selama sebelas tahun dan merasa tahu kira-kira berapa banyak hewan besar yang bisa dihidupi hutan tersebut, dan sembilan belas bukan angka itu."
      },
      {
        illustrationSeed: "stripecount-5",
        textEn: "So she used stripes. Every tiger's stripe pattern is different, like a fingerprint, and — this is the part that makes it work — the pattern on the left flank is different from the pattern on the right flank of the same animal.",
        textId: "Maka ia memakai belang. Pola belang setiap harimau berbeda, seperti sidik jari, dan — inilah bagian yang membuatnya berhasil — pola di sisi kiri berbeda dari pola di sisi kanan pada hewan yang sama."
      },
      {
        illustrationSeed: "stripecount-6",
        textEn: "She put out cameras in facing pairs, so every animal that walked between them was photographed on both sides at the same instant. Then she spent four months matching photographs on the floor of a spare room.",
        textId: "Ia memasang kamera berpasangan saling berhadapan, sehingga setiap hewan yang lewat di antaranya terfoto pada kedua sisi di saat yang sama. Lalu ia menghabiskan empat bulan mencocokkan foto-foto di lantai sebuah kamar kosong."
      },
      {
        illustrationSeed: "stripecount-7",
        textEn: "Eleven tigers. Three of them had been counted twice by the old survey and one unlucky animal, who liked walking along a particular ridge, had been counted four times.",
        textId: "Sebelas harimau. Tiga di antaranya telah terhitung dua kali oleh survei lama, dan satu hewan yang sial, yang suka berjalan menyusuri sebuah punggungan tertentu, telah terhitung empat kali."
      },
      {
        illustrationSeed: "stripecount-8",
        textEn: "Reporting a smaller number is not a comfortable thing to do. It looks like failure and it is used against you. Ibu Warni published it anyway, with every photograph pair printed in the back of the report.",
        textId: "Melaporkan angka yang lebih kecil bukanlah hal yang nyaman dilakukan. Itu tampak seperti kegagalan dan bisa dipakai untuk menyerangmu. Ibu Warni tetap menerbitkannya, dengan setiap pasangan foto dicetak di bagian belakang laporan."
      },
      {
        illustrationSeed: "stripecount-9",
        textEn: "Eleven was the true number, and because it was the true number the forest got a real protection plan instead of a comfortable one. The population is nineteen now. It took twenty-two years, and it is the honest nineteen.",
        textId: "Sebelas adalah angka yang benar, dan karena itu angka yang benar, hutan tersebut mendapat rencana perlindungan yang sungguhan alih-alih yang sekadar menenangkan. Populasinya kini sembilan belas. Butuh dua puluh dua tahun, dan inilah sembilan belas yang jujur."
      }
    ],
    quiz: [
      {
        questionEn: "Why is a tiger's stripe pattern useful for counting?",
        questionId: "Mengapa pola belang harimau berguna untuk menghitung?",
        optionsEn: ["All tigers look the same", "Every pattern is unique, and the left side differs from the right", "Stripes change each year", "Stripes glow at night"],
        optionsId: ["Semua harimau tampak sama", "Setiap pola unik, dan sisi kiri berbeda dari sisi kanan", "Belangnya berubah tiap tahun", "Belangnya bercahaya di malam hari"],
        correctIndex: 1
      },
      {
        questionEn: "Why did Ibu Warni place cameras in facing pairs?",
        questionId: "Mengapa Ibu Warni memasang kamera berpasangan saling berhadapan?",
        optionsEn: ["To get better light", "To photograph both flanks of the same animal at once", "To save batteries", "To cover more ground"],
        optionsId: ["Untuk mendapat cahaya lebih baik", "Untuk memotret kedua sisi hewan yang sama sekaligus", "Untuk menghemat baterai", "Untuk menjangkau wilayah lebih luas"],
        correctIndex: 1
      },
      {
        questionEn: "Why did reporting the smaller number matter?",
        questionId: "Mengapa melaporkan angka yang lebih kecil itu penting?",
        optionsEn: ["It made the report shorter", "The true number brought a real protection plan instead of a comfortable one", "It won a prize", "It saved money"],
        optionsId: ["Membuat laporannya lebih pendek", "Angka yang benar mendatangkan rencana perlindungan sungguhan, bukan yang sekadar menenangkan", "Memenangkan hadiah", "Menghemat biaya"],
        correctIndex: 1
      }
    ]
  },

  {
    slug: "the-old-cat-and-the-new-baby",
    titleEn: "The Old Cat and the New Baby",
    titleId: "Kucing Tua dan Bayi Baru",
    descriptionEn: "Miu had run the house for fourteen years. Then a very small person arrived who could not be reasoned with, and everything had to be renegotiated.",
    descriptionId: "Miu telah mengurus rumah itu selama empat belas tahun. Lalu datanglah seorang manusia yang sangat kecil yang tak bisa diajak berunding, dan semuanya harus dirundingkan ulang.",
    categorySlug: "pets",
    authorSlug: "emily-clark",
    coverEmoji: "🐈",
    coverPalette: "candy",
    ageMin: 4,
    ageMax: 8,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "cataby-1",
        textEn: "Miu had lived in the house longer than anyone except the grandmother. She had four places that were hers: the third stair, the top of the fridge, the blue chair, and the sunny square on the floor that moved during the day.",
        textId: "Miu sudah tinggal di rumah itu lebih lama daripada siapa pun kecuali sang nenek. Ia punya empat tempat yang menjadi miliknya: anak tangga ketiga, atas kulkas, kursi biru, dan kotak cahaya matahari di lantai yang berpindah-pindah sepanjang hari."
      },
      {
        illustrationSeed: "cataby-2",
        textEn: "Then the family brought home a baby. Miu inspected it from the doorway for two days without going closer than a metre and a half, which is a cat's way of reading a document carefully.",
        textId: "Lalu keluarga itu membawa pulang seorang bayi. Miu memeriksanya dari ambang pintu selama dua hari tanpa mendekat lebih dari satu setengah meter — cara kucing membaca sebuah dokumen dengan saksama."
      },
      {
        illustrationSeed: "cataby-3",
        textEn: "The baby was loud at unpredictable times. It smelled wrong. It had been given the blue chair. Worst of all, it could not be reasoned with, and Miu had spent fourteen years learning exactly how to reason with humans.",
        textId: "Bayi itu berisik pada waktu yang tak bisa ditebak. Baunya salah. Dan ia diberi kursi biru. Yang terburuk, ia tak bisa diajak berunding, padahal Miu telah menghabiskan empat belas tahun mempelajari persis cara berunding dengan manusia."
      },
      {
        illustrationSeed: "cataby-4",
        textEn: "So Miu did what old cats do. She went upstairs and stayed there for eleven days, coming down only at night to eat, and everybody in the house felt terrible about it and told each other it would pass.",
        textId: "Maka Miu melakukan apa yang dilakukan kucing tua. Ia naik ke lantai atas dan bertahan di sana selama sebelas hari, turun hanya pada malam hari untuk makan, dan semua orang di rumah merasa bersalah dan saling meyakinkan bahwa ini akan berlalu."
      },
      {
        illustrationSeed: "cataby-5",
        textEn: "On day twelve the grandmother did something clever. She did not carry Miu to the baby. She put the baby's blanket, unwashed, on the third stair, and then went away and left it there.",
        textId: "Pada hari kedua belas sang nenek melakukan sesuatu yang cerdas. Ia tidak menggendong Miu ke arah bayi. Ia meletakkan selimut bayi itu, yang belum dicuci, di anak tangga ketiga, lalu pergi dan membiarkannya di sana."
      },
      {
        illustrationSeed: "cataby-6",
        textEn: "A cat needs to arrive at a decision by itself. Anything you carry a cat towards becomes a thing the cat was carried towards. Anything a cat walks over to becomes the cat's own idea.",
        textId: "Seekor kucing perlu sampai pada keputusannya sendiri. Apa pun yang kau bawakan padanya menjadi sesuatu yang ia dipaksa dekati. Apa pun yang ia datangi sendiri menjadi gagasannya sendiri."
      },
      {
        illustrationSeed: "cataby-7",
        textEn: "Miu sat on the blanket that afternoon. Then she sat on the blanket in the room where the baby was. Then, on a Sunday, she got into the cot, walked around the baby's feet twice, and lay down against them with her back turned, which is the most trusting position a cat has.",
        textId: "Sore itu Miu duduk di atas selimut tersebut. Lalu ia duduk di atas selimut itu di ruangan tempat bayinya berada. Lalu, pada suatu Minggu, ia masuk ke boks bayi, mengelilingi kaki si bayi dua kali, dan berbaring menempel di sana dengan punggung membelakangi — posisi paling percaya yang dimiliki seekor kucing."
      },
      {
        illustrationSeed: "cataby-8",
        textEn: "She did not become a friendly cat. She stayed exactly as she had always been: mildly disappointed in everyone. But she was in the room from then on, always, whenever the baby was in it.",
        textId: "Ia tidak lantas menjadi kucing yang ramah. Ia tetap persis seperti sebelumnya: agak kecewa pada semua orang. Tapi sejak saat itu ia selalu berada di ruangan yang sama, kapan pun bayi itu ada di sana."
      },
      {
        illustrationSeed: "cataby-9",
        textEn: "Miu lived another four years, which for a cat of fourteen is a good innings. The baby's first word was not \"mama\" and it was not \"papa\". It was \"Miu\", and the cat, who was on the third stair, did not look round.",
        textId: "Miu hidup empat tahun lagi — untuk kucing berumur empat belas tahun, itu masa yang panjang. Kata pertama sang bayi bukan \"mama\" dan bukan \"papa\". Kata itu adalah \"Miu\", dan sang kucing, yang sedang di anak tangga ketiga, tidak menoleh."
      }
    ],
    quiz: [
      {
        questionEn: "What did Miu do when the baby first arrived?",
        questionId: "Apa yang dilakukan Miu saat bayi itu baru datang?",
        optionsEn: ["Slept in the cot", "Stayed upstairs for eleven days", "Ran away", "Played with it"],
        optionsId: ["Tidur di boks bayi", "Bertahan di lantai atas selama sebelas hari", "Kabur dari rumah", "Bermain dengannya"],
        correctIndex: 1
      },
      {
        questionEn: "What clever thing did the grandmother do?",
        questionId: "Hal cerdas apa yang dilakukan sang nenek?",
        optionsEn: ["Carried Miu to the baby", "Left the baby's blanket on Miu's stair and walked away", "Bought new food", "Shut the door"],
        optionsId: ["Menggendong Miu ke arah bayi", "Meninggalkan selimut bayi di anak tangga milik Miu lalu pergi", "Membeli makanan baru", "Menutup pintunya"],
        correctIndex: 1
      },
      {
        questionEn: "Why does a cat need to arrive at a decision itself?",
        questionId: "Mengapa seekor kucing perlu sampai pada keputusannya sendiri?",
        optionsEn: ["Cats cannot walk far", "What a cat walks over to becomes the cat's own idea", "Cats dislike blankets", "Cats have poor memories"],
        optionsId: ["Kucing tak bisa berjalan jauh", "Apa yang ia datangi sendiri menjadi gagasannya sendiri", "Kucing tidak suka selimut", "Ingatan kucing buruk"],
        correctIndex: 1
      }
    ]
  }
];
