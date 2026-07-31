/**
 * Story batch D — hand-written bilingual (EN/ID) read-aloud stories, appended
 * to the library. Batches only ever add; nothing existing is edited or merged.
 *
 * With every category now holding at least two books, this batch deepens the
 * storytelling staples: adventure, friendship, moral-stories, fairy-tales,
 * world-cultures and manners.
 */
import type { Story } from "./stories";

export const STORIES_BATCH_D: Story[] = [
  {
    slug: "the-map-with-one-mistake",
    titleEn: "The Map With One Mistake",
    titleId: "Peta dengan Satu Kekeliruan",
    descriptionEn: "Two children set out to cross the ridge with a map their grandfather drew. It is accurate everywhere except one place.",
    descriptionId: "Dua anak berangkat menyeberangi punggung bukit dengan peta buatan kakek mereka. Peta itu tepat di mana-mana kecuali satu tempat.",
    categorySlug: "adventure",
    authorSlug: "axto-creative-team",
    coverEmoji: "🧭",
    coverPalette: "forest",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "map-1",
        textEn: "Their grandfather had walked the ridge every summer for fifty years, and he had drawn a map of it on the back of a calendar. It showed every stream, every fallen tree, and the four hours it took to cross.",
        textId: "Kakek mereka telah menyusuri punggung bukit itu setiap musim panas selama lima puluh tahun, dan ia menggambar petanya di balik sebuah kalender. Peta itu menunjukkan setiap anak sungai, setiap pohon tumbang, dan empat jam waktu tempuhnya."
      },
      {
        illustrationSeed: "map-2",
        textEn: "Wira was twelve and Nala was ten, and they had permission, water, and a whistle each. They also had the map, folded into eight, in Wira's shirt pocket.",
        textId: "Wira berumur dua belas tahun dan Nala sepuluh, dan mereka sudah mendapat izin, membawa air, dan masing-masing sebuah peluit. Mereka juga membawa peta itu, terlipat delapan, di saku kemeja Wira."
      },
      {
        illustrationSeed: "map-3",
        textEn: "For three hours the map was perfect. The stream was where it said. The split rock was where it said. Nala started calling it the magic paper and Wira stopped checking it as often as he should have.",
        textId: "Selama tiga jam peta itu sempurna. Anak sungai ada persis di tempatnya. Batu belah ada persis di tempatnya. Nala mulai menyebutnya kertas ajaib dan Wira berhenti memeriksanya sesering seharusnya."
      },
      {
        illustrationSeed: "map-4",
        textEn: "Then they came to the fork. The map showed the path going left around a stand of pines. They went left. And after twenty minutes the path simply stopped, at a wall of young trees too thick to push through.",
        textId: "Lalu mereka tiba di persimpangan. Peta menunjukkan jalan setapak membelok kiri mengitari rumpun pinus. Mereka ke kiri. Dan setelah dua puluh menit jalan itu begitu saja berhenti, di dinding pohon muda yang terlalu rapat untuk ditembus."
      },
      {
        illustrationSeed: "map-5",
        textEn: "Nala wanted to force through. Wira wanted to go back. They argued about it for a while, which is what people do when they are frightened and would rather be angry than frightened.",
        textId: "Nala ingin menerobos. Wira ingin kembali. Mereka berdebat cukup lama, seperti yang biasa dilakukan orang ketika takut dan lebih memilih marah daripada mengakui takut."
      },
      {
        illustrationSeed: "map-6",
        textEn: "Then Wira looked at the map properly. The pines were drawn small. Their grandfather had drawn them fifty summers ago, when they were small. Fifty years is a long time for a pine.",
        textId: "Lalu Wira mengamati petanya baik-baik. Pohon-pohon pinus itu digambar kecil. Kakek mereka menggambarnya lima puluh musim panas lalu, ketika pohon-pohon itu memang masih kecil. Lima puluh tahun adalah waktu yang panjang bagi sebatang pinus."
      },
      {
        illustrationSeed: "map-7",
        textEn: "\"The map is not wrong,\" he said slowly. \"It is old. The trees grew.\" And once he had said it out loud, the answer was obvious: the path did not go left any more, because there was no longer a way round on that side.",
        textId: "\"Petanya tidak salah,\" katanya perlahan. \"Petanya sudah tua. Pohonnya tumbuh.\" Dan begitu ia mengucapkannya lantang, jawabannya menjadi jelas: jalan itu tidak lagi ke kiri, karena di sisi itu sudah tidak ada jalan memutar."
      },
      {
        illustrationSeed: "map-8",
        textEn: "They went back to the fork and took the right-hand path, and it curved wide around the pines and rejoined the map exactly where the map said it would, forty minutes later, at a gate with a rusted hinge.",
        textId: "Mereka kembali ke persimpangan dan mengambil jalan kanan, dan jalan itu melengkung lebar mengitari rumpun pinus lalu bertemu kembali dengan peta persis di tempat yang ditunjukkan peta, empat puluh menit kemudian, di sebuah gerbang berengsel karat."
      },
      {
        illustrationSeed: "map-9",
        textEn: "That evening their grandfather listened to the whole story. Then he took a pencil, drew the pines much bigger, drew the new path, wrote the year beside it, and handed the map back to Wira. \"Yours now,\" he said. \"Keep it up to date.\"",
        textId: "Petang itu kakek mereka mendengarkan seluruh cerita. Lalu ia mengambil pensil, menggambar pinus jauh lebih besar, menggambar jalan baru, menuliskan tahunnya di sebelahnya, dan menyerahkan peta itu kembali kepada Wira. \"Sekarang milikmu,\" katanya. \"Jaga supaya tetap mutakhir.\""
      }
    ],
    quiz: [
      {
        questionEn: "Why did the path not go left any more?",
        questionId: "Mengapa jalannya tidak lagi ke kiri?",
        optionsEn: ["Somebody blocked it", "The pines had grown over fifty years", "It flooded", "The map was drawn wrongly"],
        optionsId: ["Ada yang menutupnya", "Pohon pinus tumbuh selama lima puluh tahun", "Kebanjiran", "Petanya salah gambar"],
        correctIndex: 1
      },
      {
        questionEn: "What did Wira work out?",
        questionId: "Apa yang Wira simpulkan?",
        optionsEn: ["The map was a fake", "The map was old, not wrong", "They were lost forever", "Nala had misread it"],
        optionsId: ["Petanya palsu", "Petanya tua, bukan salah", "Mereka tersesat selamanya", "Nala salah membaca"],
        correctIndex: 1
      },
      {
        questionEn: "What did their grandfather do at the end?",
        questionId: "Apa yang kakek mereka lakukan di akhir cerita?",
        optionsEn: ["Threw the map away", "Updated it and gave it to Wira", "Told them off", "Drew a new map alone"],
        optionsId: ["Membuang petanya", "Memperbaruinya dan memberikannya kepada Wira", "Memarahi mereka", "Menggambar peta baru sendiri"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-friend-who-moved-away",
    titleEn: "The Friend Who Moved Away",
    titleId: "Sahabat yang Pindah",
    descriptionEn: "Sena and Tio were best friends for six years. Then one of them moved four hundred kilometres, and both of them had to learn something difficult.",
    descriptionId: "Sena dan Tio bersahabat selama enam tahun. Lalu salah satunya pindah empat ratus kilometer, dan keduanya harus belajar sesuatu yang sulit.",
    categorySlug: "friendship",
    authorSlug: "axto-creative-team",
    coverEmoji: "🤝",
    coverPalette: "sunrise",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "moved-1",
        textEn: "Sena and Tio had been in the same class since they were five. They had a handshake that took eleven seconds and a rule that whoever got to the gate first waited, no matter how long.",
        textId: "Sena dan Tio sekelas sejak umur lima tahun. Mereka punya salaman khas yang memakan waktu sebelas detik dan sebuah aturan bahwa siapa pun yang lebih dulu sampai gerbang harus menunggu, berapa lama pun."
      },
      {
        illustrationSeed: "moved-2",
        textEn: "In March, Tio's father got work in another province. Four hundred kilometres. Tio told Sena on a Wednesday, at the gate, and neither of them said very much afterwards.",
        textId: "Pada bulan Maret, ayah Tio mendapat pekerjaan di provinsi lain. Empat ratus kilometer. Tio memberi tahu Sena pada hari Rabu, di gerbang, dan setelah itu keduanya nyaris tidak berkata apa-apa."
      },
      {
        illustrationSeed: "moved-3",
        textEn: "For the first month they spoke every single day. Then it was every second day. Then Sena sent a message on a Tuesday and Tio replied on the Thursday, and Sena noticed, and it hurt more than he expected.",
        textId: "Bulan pertama mereka bicara setiap hari. Lalu jadi dua hari sekali. Lalu Sena mengirim pesan pada Selasa dan Tio membalas hari Kamis, dan Sena menyadarinya, dan itu lebih menyakitkan daripada yang ia kira."
      },
      {
        illustrationSeed: "moved-4",
        textEn: "What Sena did not know was that Tio was having a bad time. He had nobody to wait for at the gate. He had eaten lunch alone for six weeks. And every time he messaged Sena he felt further away rather than closer.",
        textId: "Yang Sena tidak tahu adalah bahwa Tio sedang mengalami masa sulit. Ia tidak punya siapa pun untuk ditunggu di gerbang. Ia makan siang sendirian selama enam minggu. Dan setiap kali ia mengirim pesan kepada Sena, ia justru merasa makin jauh, bukan makin dekat."
      },
      {
        illustrationSeed: "moved-5",
        textEn: "So they both did the thing people do, which is nothing. Weeks went by. Sena decided Tio had found better friends. Tio decided Sena had stopped caring. Both were wrong, and neither asked.",
        textId: "Maka keduanya melakukan hal yang biasa dilakukan orang, yaitu tidak melakukan apa-apa. Berminggu-minggu berlalu. Sena menyimpulkan Tio sudah punya teman yang lebih baik. Tio menyimpulkan Sena sudah tidak peduli. Keduanya keliru, dan tidak ada yang bertanya."
      },
      {
        illustrationSeed: "moved-6",
        textEn: "In August, Sena's mother made him write a letter. A real one, on paper, because she is from a generation that believes in this. Sena wrote four lines and thought they were stupid and sent it anyway.",
        textId: "Pada bulan Agustus, ibu Sena menyuruhnya menulis surat. Surat sungguhan, di atas kertas, karena ia dari generasi yang memercayai hal itu. Sena menulis empat baris, merasa isinya konyol, dan tetap mengirimkannya."
      },
      {
        illustrationSeed: "moved-7",
        textEn: "The four lines were: I thought you had better friends now. I did not want to be the one always messaging first. I miss the gate thing. Write back or do not, but I wanted you to know that.",
        textId: "Empat baris itu berbunyi: Aku kira sekarang kau punya teman yang lebih baik. Aku tidak mau jadi yang selalu mengirim pesan duluan. Aku rindu kebiasaan menunggu di gerbang. Balas atau tidak, aku hanya ingin kau tahu."
      },
      {
        illustrationSeed: "moved-8",
        textEn: "Tio phoned the day it arrived. They talked for an hour and a half, most of which was arguing about who had stopped first, and then laughing about arguing about it.",
        textId: "Tio menelepon di hari surat itu tiba. Mereka bicara satu setengah jam, sebagian besar berisi perdebatan tentang siapa yang lebih dulu berhenti, lalu tertawa karena memperdebatkannya."
      },
      {
        illustrationSeed: "moved-9",
        textEn: "They are still friends. Not the same as before — you cannot wait at a gate for somebody four hundred kilometres away. But they talk on Sundays, and they both know now that the silence had never meant what either of them thought.",
        textId: "Mereka masih bersahabat. Tidak sama seperti dulu — kau tidak bisa menunggu di gerbang untuk seseorang yang berjarak empat ratus kilometer. Tetapi mereka bicara setiap Minggu, dan kini keduanya tahu bahwa keheningan itu tidak pernah berarti seperti yang mereka kira."
      }
    ],
    quiz: [
      {
        questionEn: "Why did Sena stop messaging?",
        questionId: "Mengapa Sena berhenti mengirim pesan?",
        optionsEn: ["He was busy", "He thought Tio had better friends now", "He lost his phone", "He was angry"],
        optionsId: ["Ia sibuk", "Ia mengira Tio sudah punya teman yang lebih baik", "Ponselnya hilang", "Ia marah"],
        correctIndex: 1
      },
      {
        questionEn: "What was actually happening to Tio?",
        questionId: "Apa yang sebenarnya dialami Tio?",
        optionsEn: ["He was very happy", "He was lonely and eating lunch alone", "He had forgotten Sena", "He had moved again"],
        optionsId: ["Ia sangat bahagia", "Ia kesepian dan makan siang sendirian", "Ia melupakan Sena", "Ia pindah lagi"],
        correctIndex: 1
      },
      {
        questionEn: "What fixed it?",
        questionId: "Apa yang memperbaikinya?",
        optionsEn: ["Time", "Sena writing honestly about what he had assumed", "Tio moving back", "A teacher"],
        optionsId: ["Waktu", "Sena menulis jujur tentang apa yang ia asumsikan", "Tio pindah kembali", "Seorang guru"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-borrowed-bicycle",
    titleEn: "The Borrowed Bicycle",
    titleId: "Sepeda Pinjaman",
    descriptionEn: "Fajar borrows a bicycle without asking, and breaks it. What he does next takes three weeks and costs him more than the repair.",
    descriptionId: "Fajar meminjam sepeda tanpa izin, lalu merusaknya. Apa yang ia lakukan setelahnya memakan tiga minggu dan biayanya lebih dari sekadar perbaikan.",
    categorySlug: "moral-stories",
    authorSlug: "axto-creative-team",
    coverEmoji: "🚲",
    coverPalette: "citrus",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "bike-1",
        textEn: "The bicycle belonged to Pak Sardi, who was seventy and rode it to the mosque and back and nowhere else. It leaned against his wall all day, blue, upright, and completely unlocked.",
        textId: "Sepeda itu milik Pak Sardi, yang berumur tujuh puluh tahun dan mengayuhnya ke masjid pulang pergi dan tidak ke mana-mana lagi. Sepeda itu bersandar di temboknya sepanjang hari, biru, tegak, dan sama sekali tidak dikunci."
      },
      {
        illustrationSeed: "bike-2",
        textEn: "Fajar took it on a Thursday. He told himself it was borrowing, because he intended to bring it back, and because Pak Sardi was asleep and could not be asked, and because he really wanted to ride down the hill road.",
        textId: "Fajar mengambilnya pada hari Kamis. Ia berkata pada dirinya sendiri bahwa itu meminjam, karena ia berniat mengembalikannya, karena Pak Sardi sedang tidur dan tidak bisa dimintai izin, dan karena ia sangat ingin meluncur di jalan menurun."
      },
      {
        illustrationSeed: "bike-3",
        textEn: "The hill road was wonderful for about ninety seconds. Then the front wheel found a drain cover, and the bicycle went one way, and Fajar went the other, and when he got up the front wheel was bent like a plate.",
        textId: "Jalan menurun itu luar biasa selama kira-kira sembilan puluh detik. Lalu roda depan menghantam tutup selokan, sepeda melaju ke satu arah, Fajar ke arah lain, dan ketika ia bangun roda depan itu bengkok seperti piring."
      },
      {
        illustrationSeed: "bike-4",
        textEn: "He could have pushed it back and left it against the wall. Pak Sardi's eyes were not good. It might have been three days before anybody knew. Fajar stood in the road for a long time thinking about exactly that.",
        textId: "Ia bisa saja mendorongnya kembali dan menyandarkannya di tembok. Penglihatan Pak Sardi sudah tidak bagus. Mungkin butuh tiga hari sampai ada yang tahu. Fajar berdiri lama di jalan memikirkan persis hal itu."
      },
      {
        illustrationSeed: "bike-5",
        textEn: "Then he pushed it back and knocked on the door and said what he had done, in one sentence, without any of the softening words he had been assembling on the way.",
        textId: "Lalu ia mendorongnya kembali, mengetuk pintu, dan mengatakan apa yang telah ia perbuat, dalam satu kalimat, tanpa satu pun kata pelunak yang ia susun sepanjang jalan."
      },
      {
        illustrationSeed: "bike-6",
        textEn: "Pak Sardi did not shout. He looked at the wheel for a while. Then he said, \"That is a week of my legs,\" which was worse than shouting, because it was true and it was not an insult.",
        textId: "Pak Sardi tidak berteriak. Ia memandangi roda itu sejenak. Lalu ia berkata, \"Itu seminggu kaki saya,\" yang lebih berat daripada bentakan, karena itu benar dan bukan hinaan."
      },
      {
        illustrationSeed: "bike-7",
        textEn: "The repair cost more than Fajar had. So for three weeks he walked to the mosque with Pak Sardi and back, every day, carrying his bag, at Pak Sardi's speed, which is slower than you think.",
        textId: "Biaya perbaikannya lebih besar daripada uang Fajar. Maka selama tiga minggu ia berjalan ke masjid bersama Pak Sardi dan pulang, setiap hari, membawakan tasnya, dengan kecepatan Pak Sardi, yang lebih lambat daripada yang kau bayangkan."
      },
      {
        illustrationSeed: "bike-8",
        textEn: "They talked. It turned out Pak Sardi had been a mechanic for forty years and could explain exactly why a wheel bends the way it does. By the end of the second week Fajar was asking questions on purpose.",
        textId: "Mereka mengobrol. Ternyata Pak Sardi pernah menjadi montir selama empat puluh tahun dan bisa menjelaskan persis mengapa sebuah roda bengkok seperti itu. Menjelang akhir minggu kedua Fajar mulai bertanya dengan sengaja."
      },
      {
        illustrationSeed: "bike-9",
        textEn: "The wheel got fixed. Fajar still walks with him some mornings, which nobody asked him to do. And the blue bicycle is still unlocked against the wall, which is either very trusting or very well judged.",
        textId: "Roda itu akhirnya diperbaiki. Fajar masih berjalan bersamanya pada beberapa pagi, tanpa ada yang menyuruhnya. Dan sepeda biru itu masih bersandar di tembok tanpa dikunci, yang entah sangat percaya atau sangat tepat menilai orang."
      }
    ],
    quiz: [
      {
        questionEn: "Why did Fajar tell the truth?",
        questionId: "Mengapa Fajar mengatakan yang sebenarnya?",
        optionsEn: ["He was caught", "He chose to, even though he could have hidden it", "Somebody saw him", "Pak Sardi asked"],
        optionsId: ["Ia ketahuan", "Ia memilih begitu, padahal bisa menyembunyikannya", "Ada yang melihatnya", "Pak Sardi bertanya"],
        correctIndex: 1
      },
      {
        questionEn: "What did Pak Sardi say about the broken wheel?",
        questionId: "Apa kata Pak Sardi tentang roda yang rusak?",
        optionsEn: ["Nothing", "That it was a week of his legs", "That Fajar was a thief", "That it did not matter"],
        optionsId: ["Tidak berkata apa-apa", "Bahwa itu seminggu kakinya", "Bahwa Fajar pencuri", "Bahwa itu tidak penting"],
        correctIndex: 1
      },
      {
        questionEn: "How did Fajar make it right?",
        questionId: "Bagaimana Fajar menebus kesalahannya?",
        optionsEn: ["He paid at once", "He walked with Pak Sardi every day for three weeks", "He bought a new bicycle", "He apologised in a letter"],
        optionsId: ["Ia langsung membayar", "Ia berjalan bersama Pak Sardi setiap hari selama tiga minggu", "Ia membeli sepeda baru", "Ia minta maaf lewat surat"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-miller-daughter-and-the-clever-answer",
    titleEn: "The Miller's Daughter and the Clever Answer",
    titleId: "Putri Tukang Giling dan Jawaban yang Cerdik",
    descriptionEn: "A king sets three impossible tasks. A miller's daughter solves all three by refusing to accept the question as it was asked.",
    descriptionId: "Seorang raja memberi tiga tugas mustahil. Putri tukang giling menyelesaikan ketiganya dengan menolak menerima pertanyaannya begitu saja.",
    categorySlug: "fairy-tales",
    authorSlug: "axto-creative-team",
    coverEmoji: "🏰",
    coverPalette: "twilight",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "miller-1",
        textEn: "There was once a king who liked riddles more than he liked ruling, which is a poor arrangement for a kingdom. He announced that whoever solved his three tasks would sit at his council table.",
        textId: "Dahulu ada seorang raja yang lebih menyukai teka-teki daripada memerintah, yang merupakan pengaturan buruk bagi sebuah kerajaan. Ia mengumumkan bahwa siapa pun yang menyelesaikan tiga tugasnya akan duduk di meja dewannya."
      },
      {
        illustrationSeed: "miller-2",
        textEn: "The first task was to come to the palace neither walking nor riding. Forty men tried. They walked, or they rode, or they attempted to hop, which the king ruled was walking badly.",
        textId: "Tugas pertama adalah datang ke istana tidak dengan berjalan maupun berkendara. Empat puluh orang mencoba. Mereka berjalan, atau berkendara, atau mencoba melompat-lompat, yang oleh raja diputuskan sebagai berjalan dengan buruk."
      },
      {
        illustrationSeed: "miller-3",
        textEn: "The miller's daughter, whose name was Sekar, came with one foot on a donkey and one foot on the ground, so that she was doing half of each and therefore neither. The king laughed and allowed it.",
        textId: "Putri tukang giling, yang bernama Sekar, datang dengan satu kaki di atas keledai dan satu kaki di tanah, sehingga ia melakukan separuh dari masing-masing dan karenanya tidak keduanya. Raja tertawa dan mengizinkannya."
      },
      {
        illustrationSeed: "miller-4",
        textEn: "The second task was to bring a gift that was neither given nor kept. Sekar brought a bird in her cupped hands, and when the king reached for it she opened her hands and it flew.",
        textId: "Tugas kedua adalah membawa hadiah yang tidak diberikan dan tidak pula disimpan. Sekar membawa seekor burung dalam kedua telapak tangannya, dan ketika raja hendak meraihnya, ia membuka tangannya dan burung itu terbang."
      },
      {
        illustrationSeed: "miller-5",
        textEn: "\"You have given me nothing,\" said the king. \"I have given you a bird,\" said Sekar. \"You have simply not kept it. That was the task.\" The court went very quiet, and then a lord at the back laughed and could not stop.",
        textId: "\"Kau tidak memberiku apa-apa,\" kata raja. \"Saya memberi Baginda seekor burung,\" kata Sekar. \"Baginda yang tidak menyimpannya. Itulah tugasnya.\" Ruang istana menjadi sangat sunyi, lalu seorang bangsawan di belakang tertawa dan tak bisa berhenti."
      },
      {
        illustrationSeed: "miller-6",
        textEn: "The third task was harder and the king set it in a temper. \"Tell me,\" he said, \"the one thing I own that I cannot lose.\" And he sat back, because he believed there was no such thing.",
        textId: "Tugas ketiga lebih sulit dan raja menetapkannya dengan kesal. \"Katakan padaku,\" ujarnya, \"satu hal yang kumiliki yang tidak bisa kuhilangkan.\" Lalu ia bersandar, karena ia yakin hal semacam itu tidak ada."
      },
      {
        illustrationSeed: "miller-7",
        textEn: "Sekar thought for a day and a night. Then she came back and said, \"What you have already given away, Your Majesty. That is the only thing nobody can take from you, because it is not with you any more.\"",
        textId: "Sekar berpikir sehari semalam. Lalu ia kembali dan berkata, \"Apa yang telah Baginda berikan kepada orang lain. Hanya itulah yang tidak bisa direbut siapa pun dari Baginda, karena hal itu sudah tidak lagi ada pada Baginda.\""
      },
      {
        illustrationSeed: "miller-8",
        textEn: "The king was quiet for a long time. Then he said, \"That is not a riddle answer. That is a true one.\" And Sekar said, \"Yes. You asked for riddles for eleven years and your roads are still bad.\"",
        textId: "Raja terdiam lama. Lalu ia berkata, \"Itu bukan jawaban teka-teki. Itu jawaban yang benar.\" Dan Sekar berkata, \"Betul. Baginda meminta teka-teki selama sebelas tahun dan jalan-jalan Baginda masih rusak.\""
      },
      {
        illustrationSeed: "miller-9",
        textEn: "She sat at the council table for thirty years. The riddles stopped. The roads were mended. And the story that survived was not about a clever answer at all, but about somebody who kept asking what the question was actually for.",
        textId: "Ia duduk di meja dewan selama tiga puluh tahun. Teka-teki itu berhenti. Jalan-jalan diperbaiki. Dan kisah yang bertahan bukanlah tentang jawaban yang cerdik, melainkan tentang seseorang yang terus bertanya untuk apa sebenarnya pertanyaan itu diajukan."
      }
    ],
    quiz: [
      {
        questionEn: "How did Sekar arrive neither walking nor riding?",
        questionId: "Bagaimana Sekar datang tanpa berjalan maupun berkendara?",
        optionsEn: ["She was carried", "One foot on a donkey, one on the ground", "She rowed a boat", "She was pulled in a cart"],
        optionsId: ["Ia digendong", "Satu kaki di keledai, satu di tanah", "Ia mendayung perahu", "Ia ditarik dengan gerobak"],
        correctIndex: 1
      },
      {
        questionEn: "What was her answer to the third task?",
        questionId: "Apa jawabannya untuk tugas ketiga?",
        optionsEn: ["His crown", "What he had already given away", "His name", "His palace"],
        optionsId: ["Mahkotanya", "Apa yang telah ia berikan kepada orang lain", "Namanya", "Istananya"],
        correctIndex: 1
      },
      {
        questionEn: "What changed in the kingdom afterwards?",
        questionId: "Apa yang berubah di kerajaan setelahnya?",
        optionsEn: ["More riddles", "The riddles stopped and the roads were mended", "The king left", "Nothing"],
        optionsId: ["Teka-tekinya bertambah", "Teka-tekinya berhenti dan jalan-jalan diperbaiki", "Rajanya pergi", "Tidak ada"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-stone-soup-of-tanah-rendah",
    titleEn: "The Stone Soup of Tanah Rendah",
    titleId: "Sup Batu dari Tanah Rendah",
    descriptionEn: "A traveller arrives in a hungry village with nothing but a pot and a stone, and cooks a meal that nobody quite understands how they made.",
    descriptionId: "Seorang musafir tiba di desa yang kelaparan dengan hanya membawa panci dan sebuah batu, lalu memasak hidangan yang tak seorang pun benar-benar paham bagaimana mereka membuatnya.",
    categorySlug: "world-cultures",
    authorSlug: "axto-creative-team",
    coverEmoji: "🍲",
    coverPalette: "sunrise",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "soup-1",
        textEn: "The harvest had failed twice in Tanah Rendah, and the village had learned to keep what little it had behind closed doors. When a traveller came down the road, every shutter in the village closed before she reached the well.",
        textId: "Panen di Tanah Rendah gagal dua kali, dan desa itu belajar menyimpan yang sedikit di balik pintu tertutup. Ketika seorang musafir menyusuri jalan, setiap daun jendela di desa itu tertutup sebelum ia sampai di sumur."
      },
      {
        illustrationSeed: "soup-2",
        textEn: "The traveller did not knock on any door. She built a fire in the square, filled a pot from the well, and put in one smooth grey stone. Then she sat down beside it and waited, and stirred it occasionally.",
        textId: "Musafir itu tidak mengetuk satu pintu pun. Ia menyalakan api di alun-alun, mengisi panci dari sumur, dan memasukkan sebuah batu kelabu yang licin. Lalu ia duduk di sampingnya dan menunggu, sesekali mengaduknya."
      },
      {
        illustrationSeed: "soup-3",
        textEn: "After an hour a boy came out. \"What are you making?\" \"Stone soup,\" said the traveller. \"It is very good. It is nearly ready.\" She tasted it thoughtfully. \"It wants a little salt, but never mind. It is still good.\"",
        textId: "Setelah satu jam seorang anak lelaki keluar. \"Sedang masak apa?\" \"Sup batu,\" kata musafir itu. \"Rasanya enak sekali. Sebentar lagi matang.\" Ia mencicipinya sambil berpikir. \"Kurang sedikit garam, tapi tidak apa-apa. Tetap enak.\""
      },
      {
        illustrationSeed: "soup-4",
        textEn: "The boy went home and came back with salt. His mother came out to see where the salt had gone. She tasted the soup and said it was good, and that it would be better with an onion, and she happened to have one onion.",
        textId: "Anak itu pulang dan kembali membawa garam. Ibunya keluar untuk melihat ke mana perginya garam itu. Ia mencicipi sup itu dan berkata rasanya enak, dan akan lebih enak dengan bawang, dan kebetulan ia punya satu bawang."
      },
      {
        illustrationSeed: "soup-5",
        textEn: "The blacksmith brought two carrots that were going soft anyway. The widow at the end brought a handful of rice she had been saving and did not explain why she had decided to stop saving it.",
        textId: "Pandai besi membawa dua wortel yang memang mulai lembek. Janda di ujung jalan membawa segenggam beras yang selama ini ia simpan dan tidak menjelaskan mengapa ia memutuskan berhenti menyimpannya."
      },
      {
        illustrationSeed: "soup-6",
        textEn: "By dusk there were nineteen people around the fire and the pot was full of soup — real soup, with vegetables and rice and salt and a little dried fish that somebody had produced without being asked.",
        textId: "Menjelang senja ada sembilan belas orang mengelilingi api dan panci itu penuh sup — sup sungguhan, dengan sayur dan beras dan garam serta sedikit ikan kering yang dikeluarkan seseorang tanpa diminta."
      },
      {
        illustrationSeed: "soup-7",
        textEn: "They ate together, which they had not done in two years. Somebody found a drum. The blacksmith's wife laughed at something, loudly, and several people looked up because they had not heard her laugh since the second failed harvest.",
        textId: "Mereka makan bersama, sesuatu yang tidak mereka lakukan selama dua tahun. Seseorang menemukan gendang. Istri pandai besi tertawa keras karena sesuatu, dan beberapa orang menoleh karena mereka belum pernah mendengarnya tertawa sejak gagal panen kedua."
      },
      {
        illustrationSeed: "soup-8",
        textEn: "In the morning the traveller washed the pot, took out the stone, and put it in her pocket. The boy watched her do it. \"It was not the stone, was it,\" he said. It was not a question.",
        textId: "Pagi harinya musafir itu mencuci pancinya, mengeluarkan batunya, dan memasukkannya ke saku. Anak lelaki itu memperhatikannya. \"Bukan batunya, kan,\" katanya. Itu bukan pertanyaan."
      },
      {
        illustrationSeed: "soup-9",
        textEn: "\"No,\" she agreed. \"But you all had something. You only needed somewhere to put it that was not your own house.\" Then she walked on, and the village of Tanah Rendah ate together every week after that, without a stone.",
        textId: "\"Bukan,\" ia mengiyakan. \"Tetapi kalian semua punya sesuatu. Kalian hanya butuh tempat untuk meletakkannya yang bukan rumah kalian sendiri.\" Lalu ia melanjutkan perjalanan, dan desa Tanah Rendah makan bersama setiap minggu setelah itu, tanpa batu."
      }
    ],
    quiz: [
      {
        questionEn: "What did the traveller put in the pot first?",
        questionId: "Apa yang pertama kali dimasukkan musafir ke dalam panci?",
        optionsEn: ["Rice", "A stone", "An onion", "Fish"],
        optionsId: ["Beras", "Sebuah batu", "Bawang", "Ikan"],
        correctIndex: 1
      },
      {
        questionEn: "Why did the villagers start bringing food?",
        questionId: "Mengapa warga desa mulai membawa bahan makanan?",
        optionsEn: ["They were ordered to", "Each was invited to add one small thing", "They were paid", "They were tricked into it by force"],
        optionsId: ["Mereka diperintah", "Masing-masing diajak menambahkan satu hal kecil", "Mereka dibayar", "Mereka dipaksa"],
        correctIndex: 1
      },
      {
        questionEn: "What was the real point of the stone?",
        questionId: "Apa sebenarnya guna batu itu?",
        optionsEn: ["It flavoured the soup", "It gave everyone a shared place to contribute", "It was magic", "It was food"],
        optionsId: ["Memberi rasa pada sup", "Memberi semua orang tempat bersama untuk menyumbang", "Ia batu ajaib", "Ia bisa dimakan"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-word-that-costs-nothing",
    titleEn: "The Word That Costs Nothing",
    titleId: "Kata yang Tidak Berbiaya",
    descriptionEn: "A shopkeeper keeps a tally of something unusual for one month, and shows the result to a boy who thinks manners are pointless.",
    descriptionId: "Seorang pemilik toko mencatat sesuatu yang tak biasa selama sebulan, lalu menunjukkan hasilnya kepada seorang anak yang menganggap sopan santun itu percuma.",
    categorySlug: "manners",
    authorSlug: "axto-creative-team",
    coverEmoji: "🙏",
    coverPalette: "meadow",
    ageMin: 5,
    ageMax: 9,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "word-1",
        textEn: "Bu Ida had run the corner shop for twenty-six years. She knew everybody's order, everybody's children, and roughly what kind of week everybody was having by how they came through the door.",
        textId: "Bu Ida telah mengelola toko di sudut jalan selama dua puluh enam tahun. Ia hafal pesanan setiap orang, anak-anak setiap orang, dan kira-kira sedang mengalami minggu seperti apa mereka hanya dari cara mereka masuk pintu."
      },
      {
        illustrationSeed: "word-2",
        textEn: "Dimas came in every day after school and said nothing at all. He put the money down, took the bread, and left. When his aunt told him to say thank you he said, \"Why? She has already been paid.\"",
        textId: "Dimas datang setiap hari sepulang sekolah dan tidak berkata apa-apa. Ia meletakkan uangnya, mengambil roti, dan pergi. Ketika bibinya menyuruhnya berterima kasih ia berkata, \"Untuk apa? Dia kan sudah dibayar.\""
      },
      {
        illustrationSeed: "word-3",
        textEn: "It was a real question and it deserved a real answer, and Bu Ida did not have one ready. So she said, \"Give me a month,\" and she got out a notebook and started a tally.",
        textId: "Itu pertanyaan sungguhan dan layak mendapat jawaban sungguhan, dan Bu Ida tidak punya jawaban yang siap. Maka ia berkata, \"Beri saya waktu sebulan,\" lalu ia mengeluarkan buku catatan dan mulai mencatat."
      },
      {
        illustrationSeed: "word-4",
        textEn: "She did not tell anybody what she was counting. Every time somebody said thank you, or good morning, or asked how she was and waited for the answer, she made a small mark. Nothing else. Just that.",
        textId: "Ia tidak memberi tahu siapa pun apa yang ia hitung. Setiap kali ada yang mengucapkan terima kasih, atau selamat pagi, atau menanyakan kabarnya dan menunggu jawabannya, ia membuat satu coretan kecil. Tidak ada yang lain. Hanya itu."
      },
      {
        illustrationSeed: "word-5",
        textEn: "At the end of the month she showed Dimas the notebook. Then she showed him a second page, which she had also been keeping, listing the things she had done that month that nobody had paid her for.",
        textId: "Di akhir bulan ia menunjukkan buku catatan itu kepada Dimas. Lalu ia menunjukkan halaman kedua, yang juga ia catat, berisi daftar hal-hal yang ia lakukan bulan itu tanpa dibayar siapa pun."
      },
      {
        illustrationSeed: "word-6",
        textEn: "Held a delivery for Bu Ratmi, who was at the hospital. Let the Ariyanto boys take milk on Tuesday and pay Friday. Watched a pram outside for eleven minutes. Wrote down a phone number for somebody who could not read the label.",
        textId: "Menahan kiriman untuk Bu Ratmi, yang sedang di rumah sakit. Membiarkan anak-anak Ariyanto mengambil susu hari Selasa dan bayar hari Jumat. Menjaga kereta bayi di luar selama sebelas menit. Menuliskan nomor telepon untuk seseorang yang tidak bisa membaca labelnya."
      },
      {
        illustrationSeed: "word-7",
        textEn: "\"You are right,\" she told Dimas. \"I have been paid for the bread. I have not been paid for any of this. Nobody has to do any of this, and I do it more for the people on the first page.\"",
        textId: "\"Kamu benar,\" katanya kepada Dimas. \"Saya sudah dibayar untuk roti. Saya tidak dibayar untuk semua ini. Tidak ada yang wajib melakukan semua ini, dan saya lebih sering melakukannya untuk orang-orang di halaman pertama.\""
      },
      {
        illustrationSeed: "word-8",
        textEn: "\"That is not a threat,\" she added, because Dimas had gone red. \"It is just true. Being pleasant is not the same as being paid. It is a different thing entirely, and it buys different things.\"",
        textId: "\"Itu bukan ancaman,\" tambahnya, karena wajah Dimas memerah. \"Itu hanya kenyataan. Bersikap ramah tidak sama dengan membayar. Itu hal yang sama sekali berbeda, dan yang dibelinya pun berbeda.\""
      },
      {
        illustrationSeed: "word-9",
        textEn: "Dimas is nineteen now and works in a bank, and he says good morning to everybody, including the security guard and the woman who empties the bins. He has never once explained why, and Bu Ida has never once mentioned it.",
        textId: "Dimas kini berumur sembilan belas tahun dan bekerja di bank, dan ia mengucapkan selamat pagi kepada semua orang, termasuk satpam dan perempuan yang mengosongkan tempat sampah. Ia tidak pernah sekali pun menjelaskan alasannya, dan Bu Ida tidak pernah sekali pun menyinggungnya."
      }
    ],
    quiz: [
      {
        questionEn: "What was Dimas's question?",
        questionId: "Apa pertanyaan Dimas?",
        optionsEn: ["Why is bread expensive?", "Why say thank you when she has been paid?", "Why does the shop close early?", "Why is she always there?"],
        optionsId: ["Mengapa roti mahal?", "Mengapa berterima kasih kalau dia sudah dibayar?", "Mengapa tokonya tutup lebih awal?", "Mengapa dia selalu ada di sana?"],
        correctIndex: 1
      },
      {
        questionEn: "What did Bu Ida count for a month?",
        questionId: "Apa yang Bu Ida hitung selama sebulan?",
        optionsEn: ["Her money", "Every time somebody was pleasant to her", "Loaves of bread", "Customers"],
        optionsId: ["Uangnya", "Setiap kali ada yang bersikap ramah kepadanya", "Roti", "Pelanggan"],
        correctIndex: 1
      },
      {
        questionEn: "What was on the second page?",
        questionId: "Apa isi halaman kedua?",
        optionsEn: ["Debts", "Kind things she had done that nobody paid for", "Complaints", "Prices"],
        optionsId: ["Utang", "Kebaikan yang ia lakukan tanpa dibayar", "Keluhan", "Daftar harga"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-cave-behind-the-waterfall",
    titleEn: "The Cave Behind the Waterfall",
    titleId: "Gua di Balik Air Terjun",
    descriptionEn: "Three friends find a way behind the falls. What they discover is not treasure — it is older and stranger than that.",
    descriptionId: "Tiga sahabat menemukan jalan ke balik air terjun. Yang mereka temukan bukanlah harta karun — melainkan sesuatu yang jauh lebih tua dan lebih aneh.",
    categorySlug: "adventure",
    authorSlug: "axto-creative-team",
    coverEmoji: "💧",
    coverPalette: "forest",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "cave-1",
        textEn: "The waterfall at Lubuk Panjang came down in one thick rope, and behind it, if you went in at the left where the rock was dry, there was a gap you could turn sideways and fit through.",
        textId: "Air terjun di Lubuk Panjang jatuh dalam satu untaian tebal, dan di baliknya, kalau kau masuk dari sisi kiri tempat batunya kering, ada celah yang bisa kau lewati dengan memiringkan badan."
      },
      {
        illustrationSeed: "cave-2",
        textEn: "Rani found it. Then she made Doni and Sofi swear on three separate things before she would show them, which is how you know a discovery is serious.",
        textId: "Rani yang menemukannya. Lalu ia membuat Doni dan Sofi bersumpah atas tiga hal berbeda sebelum ia mau menunjukkannya, dan begitulah cara kau tahu sebuah penemuan itu serius."
      },
      {
        illustrationSeed: "cave-3",
        textEn: "Inside, the sound changed completely. The roar became a hum you could feel in your chest. Light came through the falling water in green sheets that moved, so the whole cave seemed to be breathing.",
        textId: "Di dalam, suaranya berubah total. Deru itu menjadi dengung yang bisa kau rasakan di dada. Cahaya menembus air yang jatuh dalam lembaran hijau yang bergerak, sehingga seluruh gua tampak seperti sedang bernapas."
      },
      {
        illustrationSeed: "cave-4",
        textEn: "They looked for treasure, because that is what you do. There was none. There was sand, and a lot of old bat droppings, and a wall at the back that Sofi put her torch against and then stopped moving entirely.",
        textId: "Mereka mencari harta karun, karena itulah yang biasa dilakukan. Tidak ada. Yang ada hanya pasir, banyak kotoran kelelawar tua, dan sebuah dinding di belakang tempat Sofi mengarahkan senternya lalu berhenti bergerak sama sekali."
      },
      {
        illustrationSeed: "cave-5",
        textEn: "There were hands on the wall. Dozens of them, in dark red, made by somebody putting a palm flat on the rock and blowing pigment around it. Small hands. Some no bigger than Sofi's own.",
        textId: "Ada telapak tangan di dinding itu. Puluhan, berwarna merah tua, dibuat oleh seseorang yang menempelkan telapaknya rata di batu lalu menyemburkan pewarna di sekelilingnya. Telapak-telapak kecil. Beberapa tak lebih besar dari telapak Sofi sendiri."
      },
      {
        illustrationSeed: "cave-6",
        textEn: "Nobody said anything for a long time. Then Doni reached out to put his own hand next to one, and Rani caught his wrist. \"Don't,\" she said. \"You don't know what it does to it.\" And Doni put his hand back down.",
        textId: "Tidak ada yang berbicara untuk waktu yang lama. Lalu Doni mengulurkan tangan hendak menempelkan telapaknya di samping salah satunya, dan Rani menangkap pergelangannya. \"Jangan,\" katanya. \"Kau tidak tahu efeknya pada gambar itu.\" Dan Doni menurunkan tangannya."
      },
      {
        illustrationSeed: "cave-7",
        textEn: "They argued about what to do, outside, sitting on wet rocks. Keep it secret and it stays theirs. Tell somebody and it stops being theirs, and might be protected, and might be ruined by visitors instead.",
        textId: "Mereka berdebat tentang apa yang harus dilakukan, di luar, sambil duduk di batu basah. Dirahasiakan, maka tetap milik mereka. Diberitahukan, maka berhenti menjadi milik mereka, dan mungkin dilindungi, atau justru dirusak pengunjung."
      },
      {
        illustrationSeed: "cave-8",
        textEn: "In the end Rani said the thing that decided it. \"Those hands are somebody's kids. Somebody put them there so they would still be there. If we keep it secret and the roof falls in, nobody ever knows they existed.\"",
        textId: "Akhirnya Rani mengucapkan hal yang menentukan. \"Telapak-telapak itu milik anak-anak seseorang. Seseorang menaruhnya di sana supaya tetap ada. Kalau kita rahasiakan dan atapnya runtuh, tak seorang pun akan pernah tahu mereka pernah ada.\""
      },
      {
        illustrationSeed: "cave-9",
        textEn: "They told the school, who told the district, who sent two archaeologists in a very old van. The paintings are around nine thousand years old. There is a metal gate now, and a sign, and on the sign there are three names.",
        textId: "Mereka memberi tahu sekolah, sekolah memberi tahu kecamatan, kecamatan mengirim dua arkeolog dengan mobil van yang sangat tua. Lukisan itu berumur sekitar sembilan ribu tahun. Kini ada gerbang besi, sebuah papan, dan di papan itu tertulis tiga nama."
      }
    ],
    quiz: [
      {
        questionEn: "What did the children find on the cave wall?",
        questionId: "Apa yang anak-anak temukan di dinding gua?",
        optionsEn: ["Gold", "Ancient painted handprints", "Writing", "A door"],
        optionsId: ["Emas", "Cap telapak tangan kuno", "Tulisan", "Sebuah pintu"],
        correctIndex: 1
      },
      {
        questionEn: "Why did Rani stop Doni touching the wall?",
        questionId: "Mengapa Rani mencegah Doni menyentuh dinding?",
        optionsEn: ["It was hot", "They did not know what touching would do to it", "It was dirty", "It was forbidden by a sign"],
        optionsId: ["Dindingnya panas", "Mereka tidak tahu efek sentuhan terhadapnya", "Kotor", "Dilarang oleh papan pengumuman"],
        correctIndex: 1
      },
      {
        questionEn: "Why did they decide to tell somebody?",
        questionId: "Mengapa mereka memutuskan memberi tahu orang lain?",
        optionsEn: ["For a reward", "So the paintings would be known about and protected", "They were forced to", "They were bored of it"],
        optionsId: ["Demi hadiah", "Supaya lukisan itu diketahui dan dilindungi", "Mereka dipaksa", "Mereka sudah bosan"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-boy-who-always-won",
    titleEn: "The Boy Who Always Won",
    titleId: "Anak yang Selalu Menang",
    descriptionEn: "Reza wins every game he plays, and slowly runs out of people who want to play with him.",
    descriptionId: "Reza memenangi setiap permainan yang ia mainkan, dan perlahan kehabisan orang yang mau bermain dengannya.",
    categorySlug: "friendship",
    authorSlug: "axto-creative-team",
    coverEmoji: "♟️",
    coverPalette: "twilight",
    ageMin: 6,
    ageMax: 10,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "reza-1",
        textEn: "Reza was good at games. Not a bit good — properly good, in a way that was slightly unfair. He won at chess, at cards, at every playground game with a rule in it, and he won almost every time.",
        textId: "Reza pandai bermain. Bukan sekadar pandai — benar-benar pandai, dengan cara yang sedikit tidak adil. Ia menang catur, kartu, dan setiap permainan di halaman sekolah yang punya aturan, dan ia menang hampir setiap kali."
      },
      {
        illustrationSeed: "reza-2",
        textEn: "He was not unkind about it. He did not gloat. He simply won, and then wanted to play again immediately, and could not really understand why other people did not.",
        textId: "Ia tidak jahat soal itu. Ia tidak menyombongkan diri. Ia hanya menang, lalu ingin bermain lagi seketika, dan tidak benar-benar mengerti mengapa orang lain tidak."
      },
      {
        illustrationSeed: "reza-3",
        textEn: "By the middle of the year something had changed. When Reza brought the chess set to the table, people remembered something they had to do. The games at break started before he got there and were somehow always full.",
        textId: "Menjelang pertengahan tahun ada yang berubah. Ketika Reza membawa papan caturnya ke meja, orang-orang tiba-tiba ingat ada urusan lain. Permainan saat istirahat dimulai sebelum ia tiba dan entah bagaimana selalu sudah penuh."
      },
      {
        illustrationSeed: "reza-4",
        textEn: "He thought they were jealous. That is the easiest explanation and it lasted about six weeks, and then it stopped being enough, because he was eating lunch on his own and jealousy did not explain how that felt.",
        textId: "Ia mengira mereka iri. Itu penjelasan yang paling mudah dan bertahan sekitar enam minggu, lalu berhenti mencukupi, karena ia makan siang sendirian dan rasa iri tidak menjelaskan bagaimana rasanya itu."
      },
      {
        illustrationSeed: "reza-5",
        textEn: "He asked Nabila, who was blunt and therefore useful. She said, \"You do not play with us. You play against us. There is a difference and you have never noticed it.\"",
        textId: "Ia bertanya kepada Nabila, yang blakblakan dan karenanya berguna. Nabila berkata, \"Kau tidak bermain bersama kami. Kau bermain melawan kami. Ada bedanya dan kau tidak pernah menyadarinya.\""
      },
      {
        illustrationSeed: "reza-6",
        textEn: "\"That is what a game is,\" said Reza. \"No,\" said Nabila. \"That is what winning is. A game is an hour with your friends that happens to have rules. You have been treating our hour as your test.\"",
        textId: "\"Memang begitulah permainan,\" kata Reza. \"Bukan,\" kata Nabila. \"Itu namanya menang. Permainan adalah satu jam bersama teman-teman yang kebetulan punya aturan. Kau memperlakukan satu jam kami sebagai ujianmu.\""
      },
      {
        illustrationSeed: "reza-7",
        textEn: "Reza did not like this at all and thought about it for two weeks. Then he did something that cost him a great deal: he asked Doni, who was terrible at chess, to teach him a game Doni was good at instead.",
        textId: "Reza sama sekali tidak menyukai ini dan memikirkannya selama dua minggu. Lalu ia melakukan sesuatu yang harganya mahal baginya: ia meminta Doni, yang payah bermain catur, untuk mengajarinya permainan yang Doni kuasai."
      },
      {
        illustrationSeed: "reza-8",
        textEn: "It was a card game with complicated scoring and Reza lost eleven times in a row, which was the most useful afternoon of his year. Doni explained things patiently and enjoyed himself enormously, and Reza noticed that too.",
        textId: "Itu permainan kartu dengan penilaian rumit dan Reza kalah sebelas kali berturut-turut, yang menjadi sore paling berguna sepanjang tahunnya. Doni menjelaskan dengan sabar dan sangat menikmatinya, dan Reza menyadari itu juga."
      },
      {
        illustrationSeed: "reza-9",
        textEn: "He still wins at chess. Nobody has beaten him yet. But now he plays four other games badly, and laughs when he loses, and the table at break is full again — with him at it.",
        textId: "Ia masih menang catur. Belum ada yang mengalahkannya. Tetapi kini ia memainkan empat permainan lain dengan payah, tertawa ketika kalah, dan meja saat istirahat kembali penuh — dengan dirinya di sana."
      }
    ],
    quiz: [
      {
        questionEn: "Why did people stop playing with Reza?",
        questionId: "Mengapa orang-orang berhenti bermain dengan Reza?",
        optionsEn: ["He cheated", "He played against them rather than with them", "He was rude", "He was too slow"],
        optionsId: ["Ia curang", "Ia bermain melawan mereka, bukan bersama mereka", "Ia kasar", "Ia terlalu lambat"],
        correctIndex: 1
      },
      {
        questionEn: "What did Nabila say a game is?",
        questionId: "Menurut Nabila, apa itu permainan?",
        optionsEn: ["A test of skill", "An hour with your friends that happens to have rules", "A way to win", "A waste of time"],
        optionsId: ["Ujian keterampilan", "Satu jam bersama teman yang kebetulan punya aturan", "Cara untuk menang", "Buang-buang waktu"],
        correctIndex: 1
      },
      {
        questionEn: "What did Reza do about it?",
        questionId: "Apa yang Reza lakukan menanggapinya?",
        optionsEn: ["Stopped playing", "Asked Doni to teach him a game he was bad at", "Practised chess more", "Found new friends"],
        optionsId: ["Berhenti bermain", "Meminta Doni mengajarinya permainan yang tidak ia kuasai", "Berlatih catur lebih giat", "Mencari teman baru"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-fisherman-and-the-two-nets",
    titleEn: "The Fisherman and the Two Nets",
    titleId: "Nelayan dan Dua Jala",
    descriptionEn: "One fisherman uses a net with wide holes and catches less. Everybody laughs at him for nine years.",
    descriptionId: "Seorang nelayan memakai jala berlubang lebar dan mendapat tangkapan lebih sedikit. Semua orang menertawakannya selama sembilan tahun.",
    categorySlug: "moral-stories",
    authorSlug: "axto-creative-team",
    coverEmoji: "🎣",
    coverPalette: "ocean",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "nets-1",
        textEn: "In the fishing village of Muara Kecil there were forty boats, and thirty-nine of them used nets with a fine, tight mesh that caught everything that swam into it, large and small alike.",
        textId: "Di desa nelayan Muara Kecil ada empat puluh perahu, dan tiga puluh sembilan di antaranya memakai jala bermata rapat yang menangkap segala yang masuk, besar maupun kecil."
      },
      {
        illustrationSeed: "nets-2",
        textEn: "Pak Umar used a net with holes wide enough for a young fish to swim straight through. Every evening he came back with less than everybody else, and every evening somebody said something about it.",
        textId: "Pak Umar memakai jala berlubang cukup lebar sehingga ikan muda bisa lolos begitu saja. Setiap petang ia pulang dengan tangkapan lebih sedikit daripada yang lain, dan setiap petang ada saja yang mengomentarinya."
      },
      {
        illustrationSeed: "nets-3",
        textEn: "His son asked him why. Pak Umar said, \"The small ones are not fish yet. They are next year.\" His son said this was a nice thing to say and did not put rice on the table, which was fair.",
        textId: "Anaknya bertanya mengapa. Pak Umar menjawab, \"Yang kecil-kecil itu belum jadi ikan. Mereka itu tahun depan.\" Anaknya berkata itu ucapan yang bagus tetapi tidak menaruh nasi di meja, dan itu memang benar."
      },
      {
        illustrationSeed: "nets-4",
        textEn: "For three years it made no visible difference. Everybody caught plenty. Pak Umar caught slightly less than plenty and was the subject of a joke that had stopped being funny to everyone except the man who made it.",
        textId: "Selama tiga tahun tidak ada bedanya yang kelihatan. Semua orang mendapat banyak. Pak Umar mendapat sedikit kurang dari banyak dan menjadi bahan lelucon yang sudah tidak lucu bagi siapa pun kecuali si pembuat lelucon."
      },
      {
        illustrationSeed: "nets-5",
        textEn: "In the fifth year the catches began to drop. Not sharply. A little each season, the way a thing goes when nobody is measuring it. The boats went further out, which cost more fuel, and caught the same less.",
        textId: "Pada tahun kelima tangkapan mulai menurun. Tidak tajam. Sedikit demi sedikit setiap musim, seperti halnya sesuatu yang tidak diukur siapa pun. Perahu-perahu melaut lebih jauh, yang menghabiskan lebih banyak bahan bakar, dan tetap mendapat lebih sedikit."
      },
      {
        illustrationSeed: "nets-6",
        textEn: "By the ninth year, four boats had been sold and two families had left the village. And Pak Umar was catching what he had always caught: slightly less than plenty, in the same water, close in.",
        textId: "Pada tahun kesembilan, empat perahu telah dijual dan dua keluarga meninggalkan desa. Dan Pak Umar tetap mendapat apa yang selalu ia dapat: sedikit kurang dari banyak, di perairan yang sama, tidak jauh dari pantai."
      },
      {
        illustrationSeed: "nets-7",
        textEn: "The village head came to his house, which took some doing, and asked him about the net. Pak Umar showed him. Then he took him out at dawn and showed him the shallows where the young fish were, thick as smoke.",
        textId: "Kepala desa datang ke rumahnya, yang butuh keberanian tersendiri, dan bertanya tentang jalanya. Pak Umar menunjukkannya. Lalu ia membawanya melaut saat fajar dan menunjukkan perairan dangkal tempat ikan-ikan muda berkumpul, tebal seperti asap."
      },
      {
        illustrationSeed: "nets-8",
        textEn: "It took two years of arguing to change the nets. Some people never forgave him for being right, which is a thing that happens. But the catches came back, slowly, over about six years.",
        textId: "Butuh dua tahun perdebatan untuk mengganti jala. Sebagian orang tidak pernah memaafkannya karena telah benar, dan hal semacam itu memang terjadi. Tetapi tangkapan kembali pulih, perlahan, selama sekitar enam tahun."
      },
      {
        illustrationSeed: "nets-9",
        textEn: "Pak Umar is dead now. The nets in Muara Kecil all have wide holes. Nobody there thinks of it as his idea any more — it is simply how you fish — which is what it looks like when somebody has genuinely won an argument.",
        textId: "Pak Umar kini telah tiada. Jala-jala di Muara Kecil semuanya berlubang lebar. Tidak ada lagi yang menganggapnya gagasan Pak Umar — itu sekadar cara orang menjala — dan begitulah rupanya ketika seseorang benar-benar memenangi sebuah perdebatan."
      }
    ],
    quiz: [
      {
        questionEn: "Why did Pak Umar use a net with wide holes?",
        questionId: "Mengapa Pak Umar memakai jala berlubang lebar?",
        optionsEn: ["It was cheaper", "So young fish could escape and grow", "It was all he had", "It was faster"],
        optionsId: ["Lebih murah", "Supaya ikan muda bisa lolos dan tumbuh", "Hanya itu yang ia punya", "Lebih cepat"],
        correctIndex: 1
      },
      {
        questionEn: "What happened to the other boats after several years?",
        questionId: "Apa yang terjadi pada perahu-perahu lain setelah beberapa tahun?",
        optionsEn: ["They caught more", "Their catches dropped and some were sold", "Nothing changed", "They moved to a river"],
        optionsId: ["Tangkapannya bertambah", "Tangkapannya menurun dan sebagian dijual", "Tidak ada yang berubah", "Mereka pindah ke sungai"],
        correctIndex: 1
      },
      {
        questionEn: "How can you tell Pak Umar won the argument?",
        questionId: "Bagaimana kita tahu Pak Umar memenangi perdebatan itu?",
        optionsEn: ["He became rich", "Wide nets are simply how everyone fishes now", "He was given a prize", "He left the village"],
        optionsId: ["Ia menjadi kaya", "Jala lebar kini sekadar cara semua orang menjala", "Ia diberi hadiah", "Ia meninggalkan desa"],
        correctIndex: 1
      }
    ]
  },
  {
    slug: "the-girl-who-swapped-shoes",
    titleEn: "The Girl Who Swapped Shoes",
    titleId: "Gadis yang Bertukar Sepatu",
    descriptionEn: "An old tale retold: a girl who can walk one day in anybody's shoes, and the three days that change her mind about everyone.",
    descriptionId: "Sebuah kisah lama yang diceritakan ulang: seorang gadis yang bisa berjalan sehari dengan sepatu siapa pun, dan tiga hari yang mengubah pandangannya tentang semua orang.",
    categorySlug: "fairy-tales",
    authorSlug: "axto-creative-team",
    coverEmoji: "👞",
    coverPalette: "twilight",
    ageMin: 7,
    ageMax: 11,
    isPremium: false,
    pages: [
      {
        illustrationSeed: "shoes-1",
        textEn: "A woman at the market sold Lastri a pair of plain brown shoes for almost nothing, and told her the condition as she wrapped them: put them on with somebody else's name in your mouth, and you will have their day.",
        textId: "Seorang perempuan di pasar menjual sepasang sepatu cokelat polos kepada Lastri dengan harga hampir gratis, dan menyampaikan syaratnya sambil membungkusnya: pakailah sepatu ini sambil menyebut nama orang lain, dan kau akan menjalani hari mereka."
      },
      {
        illustrationSeed: "shoes-2",
        textEn: "Lastri did not believe it, so she tried it on the person she liked least: Bu Warni, who was sharp with everybody at the shop and had once made a small child cry over a dropped egg.",
        textId: "Lastri tidak percaya, maka ia mencobanya pada orang yang paling tidak ia sukai: Bu Warni, yang ketus kepada semua orang di toko dan pernah membuat seorang anak kecil menangis karena telur yang jatuh."
      },
      {
        illustrationSeed: "shoes-3",
        textEn: "She had Bu Warni's day. It began at four in the morning. It contained a husband who had not been well for two years, a stock delivery that came short, and eleven hours on feet that hurt with every step.",
        textId: "Ia menjalani hari Bu Warni. Hari itu dimulai pukul empat pagi. Isinya seorang suami yang sudah dua tahun sakit, kiriman barang yang kurang, dan sebelas jam berdiri di atas kaki yang nyeri di setiap langkah."
      },
      {
        illustrationSeed: "shoes-4",
        textEn: "By the afternoon Lastri wanted to snap at somebody, and did, at a child who had dropped something, and heard her own voice come out sharp and was horrified by how easy it had been.",
        textId: "Menjelang sore Lastri ingin membentak seseorang, dan ia melakukannya, kepada seorang anak yang menjatuhkan sesuatu, lalu mendengar suaranya sendiri keluar dengan ketus dan ngeri betapa mudahnya itu terjadi."
      },
      {
        illustrationSeed: "shoes-5",
        textEn: "The next day she chose somebody she envied: Ayu, who was beautiful and clever and had, as far as anybody could tell, no problems at all.",
        textId: "Keesokan harinya ia memilih seseorang yang ia iri: Ayu, yang cantik dan pintar dan, sejauh yang bisa dilihat siapa pun, sama sekali tidak punya masalah."
      },
      {
        illustrationSeed: "shoes-6",
        textEn: "Ayu's day was quiet and comfortable and lonely in a way Lastri had not imagined. Nobody said anything to Ayu that was not about how she looked. Not once, all day, did anybody ask her a real question.",
        textId: "Hari Ayu tenang dan nyaman dan kesepian dengan cara yang tidak pernah Lastri bayangkan. Tak seorang pun berbicara kepada Ayu tentang hal selain penampilannya. Sepanjang hari itu, tak sekali pun ada yang menanyakan pertanyaan sungguhan kepadanya."
      },
      {
        illustrationSeed: "shoes-7",
        textEn: "On the third day, out of curiosity rather than kindness, Lastri said her own name. And she had her own day, from the outside, and watched herself be short with her mother over nothing at all.",
        textId: "Pada hari ketiga, karena penasaran dan bukan karena kebaikan hati, Lastri menyebut namanya sendiri. Dan ia menjalani harinya sendiri, dari luar, dan menyaksikan dirinya bersikap ketus kepada ibunya karena hal yang sama sekali sepele."
      },
      {
        illustrationSeed: "shoes-8",
        textEn: "That was the day that changed things. It is one thing to learn that other people are carrying something. It is quite another to watch yourself from two steps back and see exactly what you look like doing it.",
        textId: "Hari itulah yang mengubah segalanya. Satu hal untuk mengetahui bahwa orang lain sedang memikul sesuatu. Hal lain lagi untuk menyaksikan dirimu sendiri dari dua langkah di belakang dan melihat persis seperti apa rupamu saat melakukannya."
      },
      {
        illustrationSeed: "shoes-9",
        textEn: "Lastri gave the shoes back to the woman at the market. \"Did they work?\" the woman asked. Lastri said, \"They were not for finding out about other people, were they.\" And the woman smiled and wrapped them up for somebody else.",
        textId: "Lastri mengembalikan sepatu itu kepada perempuan di pasar. \"Berhasilkah?\" tanya perempuan itu. Lastri berkata, \"Sepatu ini bukan untuk mengetahui tentang orang lain, kan.\" Dan perempuan itu tersenyum lalu membungkusnya untuk orang berikutnya."
      }
    ],
    quiz: [
      {
        questionEn: "What did the shoes do?",
        questionId: "Apa khasiat sepatu itu?",
        optionsEn: ["Made her run fast", "Let her live somebody else's day", "Made her invisible", "Took her anywhere"],
        optionsId: ["Membuatnya berlari cepat", "Membuatnya menjalani hari orang lain", "Membuatnya tak terlihat", "Membawanya ke mana saja"],
        correctIndex: 1
      },
      {
        questionEn: "What did she discover about Ayu?",
        questionId: "Apa yang ia temukan tentang Ayu?",
        optionsEn: ["She was secretly cruel", "She was lonely and never asked a real question", "She was very poor", "She was pretending"],
        optionsId: ["Ia diam-diam kejam", "Ia kesepian dan tak pernah ditanyai hal sungguhan", "Ia sangat miskin", "Ia berpura-pura"],
        correctIndex: 1
      },
      {
        questionEn: "Which day changed her most?",
        questionId: "Hari mana yang paling mengubahnya?",
        optionsEn: ["Bu Warni's", "Ayu's", "Her own", "The first"],
        optionsId: ["Hari Bu Warni", "Hari Ayu", "Harinya sendiri", "Hari pertama"],
        correctIndex: 2
      }
    ]
  }
];
