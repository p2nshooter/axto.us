export type GeneratedStoryInput = {
  childName: string;
  childAge: number;
  favoriteAnimal: string;
  favoriteColor: string;
};

export type GeneratedStoryContent = {
  title: string;
  paragraphs: string[];
};

function pick<T>(arr: T[], seed: number): T {
  return arr[seed % arr.length];
}

function simpleHash(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) h = (h * 31 + input.charCodeAt(i)) >>> 0;
  return h;
}

export function generateStory(input: GeneratedStoryInput, locale: 'id' | 'en' = 'en'): GeneratedStoryContent {
  const { childName, childAge, favoriteAnimal, favoriteColor } = input;
  const seed = simpleHash(`${childName}-${favoriteAnimal}-${favoriteColor}-${childAge}`);
  const simple = childAge <= 5;

  if (locale === 'id') {
    const title = pick(
      [
        `${childName} dan Petualangan ${favoriteAnimal} ${favoriteColor}`,
        `${childName} dan Sahabat ${favoriteAnimal}`,
        `${childName} Menjelajah Bersama ${favoriteAnimal} ${favoriteColor}`
      ],
      seed
    );

    const paragraphs = simple
      ? [
          `Pada suatu hari, ${childName} bertemu seekor ${favoriteAnimal} berwarna ${favoriteColor} di taman.`,
          `${favoriteAnimal} itu sangat ramah. Ia mengajak ${childName} bermain bersama.`,
          `Mereka berlari, tertawa, dan bermain sepanjang sore yang cerah.`,
          `${childName} sangat senang punya teman baru. Mereka berjanji akan bermain lagi besok.`
        ]
      : [
          `Suatu pagi yang cerah, ${childName} menemukan seekor ${favoriteAnimal} berwarna ${favoriteColor} tersesat di dekat rumah.`,
          `"Kamu baik-baik saja?" tanya ${childName} dengan lembut. ${favoriteAnimal} itu mengangguk dan menceritakan bahwa ia sedang mencari jalan pulang ke hutan ajaib.`,
          `${childName} pun memutuskan untuk membantunya. Mereka menyeberangi sungai kecil, mendaki bukit berumput, dan mengikuti jejak bunga ${favoriteColor} yang bersinar.`,
          `Setelah perjalanan yang seru, mereka akhirnya menemukan pintu masuk hutan ajaib, tersembunyi di balik air terjun.`,
          `${favoriteAnimal} itu berterima kasih dan memberi ${childName} sebuah kalung berkilau sebagai kenang-kenangan persahabatan mereka.`,
          `Sejak hari itu, ${childName} tahu bahwa keberanian untuk menolong selalu membawa kebahagiaan — dan seorang sahabat baru yang istimewa.`
        ];

    return { title, paragraphs };
  }

  const title = pick(
    [
      `${childName} and the ${favoriteColor} ${favoriteAnimal} Adventure`,
      `${childName} and the ${favoriteAnimal} Friend`,
      `${childName} Explores with a ${favoriteColor} ${favoriteAnimal}`
    ],
    seed
  );

  const paragraphs = simple
    ? [
        `One day, ${childName} met a ${favoriteColor} ${favoriteAnimal} in the park.`,
        `The ${favoriteAnimal} was very friendly and asked ${childName} to play together.`,
        `They ran, laughed, and played all through the sunny afternoon.`,
        `${childName} was so happy to have a new friend. They promised to play again tomorrow.`
      ]
    : [
        `One bright morning, ${childName} found a ${favoriteColor} ${favoriteAnimal} lost near home.`,
        `"Are you okay?" ${childName} asked gently. The ${favoriteAnimal} nodded and explained it was searching for the way back to a magical forest.`,
        `${childName} decided to help. Together they crossed a little stream, climbed a grassy hill, and followed a trail of glowing ${favoriteColor} flowers.`,
        `After an exciting journey, they finally found the entrance to the magical forest, hidden behind a waterfall.`,
        `The ${favoriteAnimal} thanked ${childName} and gave a sparkling necklace as a keepsake of their friendship.`,
        `From that day on, ${childName} knew that the courage to help always brings happiness — and a very special new friend.`
      ];

  return { title, paragraphs };
}
