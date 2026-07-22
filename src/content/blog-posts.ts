/**
 * AXTO editorial blog — original articles for parents, teachers, and young
 * readers, drawn from the platform's own practice (children's e-books,
 * AI read-aloud voice, multilingual reading). Static module: prerenderable,
 * no database round-trip, indexed by the sitemap.
 */
import { BLOG_POSTS_2 } from "./blog-posts-batch2";
import AUTO_POSTS from "./auto-blog-posts.json";
import { BLOG_POSTS_3 } from "./blog-posts-batch3";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  tag: string;
  minutes: number;
  body: string[]; // paragraphs; lines starting with "## " render as h2
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "read-aloud-builds-readers",
    title: "Why Reading Aloud Builds Better Readers — Even After Kids Can Read",
    description:
      "Parents often stop reading aloud the moment a child reads independently. Research and practice both say: keep going.",
    date: "2026-07-02",
    tag: "Parents",
    minutes: 6,
    body: [
      "There is a quiet milestone in most families: the evening a child reads a page alone, and the read-aloud ritual starts to fade. It feels like graduation. It is actually an interruption.",
      "Listening comprehension runs years ahead of reading comprehension throughout primary school. A seven-year-old who decodes simple sentences can happily follow a story written for ten-year-olds — if someone reads it to them. Those richer stories carry the vocabulary, sentence shapes, and ideas the child will need on the page later.",
      "## What listening does that decoding cannot",
      "When a child listens, all their attention goes to meaning: the plot, the joke, the new word whose sense arrives from context. When a child decodes, much of that attention is spent on the mechanics. Both are essential — but only one of them can be outsourced to a parent's voice, a teacher's, or an AI narrator, and it happens to be the one that grows vocabulary fastest.",
      "## Practical ways to keep the ritual alive",
      "Alternate pages: you read one, they read one — the story keeps its pace while practice still happens. Choose above-level books for listening and at-level books for reading; they serve different purposes. Use narrated e-books on the days you cannot be there: AXTO's read-aloud voice keeps the listening stream going in the family's own language, and the highlighted text quietly links the sound of words to their shapes.",
      "The families who keep reading aloud past the 'they can do it themselves' point are not slowing independence down. They are feeding it.",
    ],
  },
  {
    slug: "screen-time-that-counts",
    title: "Not All Screen Time Is Equal: A Simple Test for Kids' Apps",
    description:
      "Instead of counting minutes, ask what the minutes are made of. Three questions that separate junk-food apps from nourishing ones.",
    date: "2026-07-04",
    tag: "Parents",
    minutes: 6,
    body: [
      "The screen-time debate usually collapses into arithmetic — how many minutes are too many? A more useful question is qualitative: what happens during those minutes?",
      "## Question 1 — Who is doing the work?",
      "In a slot-machine-style app, the app does the work and the child receives stimulation. In a reading app, the child does the work: following a story, predicting, connecting. The test: could the child describe what happened afterwards? A story, yes. An hour of auto-playing clips, rarely.",
      "## Question 2 — Does it end?",
      "Healthy media has a natural stopping point — the chapter closes, the book ends. Infinite feeds are engineered against endings. An e-book with a real last page teaches something subtle and valuable: attention has an arc, and finishing feels good.",
      "## Question 3 — Does it connect to the offline world?",
      "The best signal of worthwhile screen time is what spills off the screen: a child using a new word at dinner, retelling a story to a sibling, asking for 'the next one about the sea'. Multilingual stories add another spillover — a child who hears the same tale in two languages is doing real linguistic work that no minute-counter can capture.",
      "Count minutes if you like — limits are healthy. But choose the minutes first. Twenty minutes inside a finished story beats two supervised hours of infinite scroll.",
    ],
  },
  {
    slug: "bilingual-reading-two-languages",
    title: "Raising a Bilingual Reader: How Stories Do the Heavy Lifting",
    description:
      "Grammar drills bore children; stories do not. How reading the same book in two languages builds real bilingualism.",
    date: "2026-07-06",
    tag: "Learning",
    minutes: 7,
    body: [
      "Children do not acquire a second language from vocabulary lists. They acquire it the way they acquired the first one: from meaningful input, repeated in context, attached to feelings and events they care about. Nothing packages meaningful input like a story.",
      "## The same-story method",
      "Take one story the child already loves and read it in the second language. Because the plot is known, comprehension never collapses — the child maps new words onto known events instead of translating word by word. This is why AXTO publishes its stories multilingually with matched narration: the same adventure, the same pictures, a different voice.",
      "## Listening first, always",
      "In a second language, the ear must lead the eye. Narrated e-books let a child hear native rhythm and pronunciation attached to the exact text in front of them. Ten minutes of story-listening daily outperforms an hour of weekend drilling because acquisition compounds with frequency, not intensity.",
      "## What parents actually need to do",
      "Less than you fear. Choose stories slightly below the child's first-language level, keep sessions short and warm, let the child re-listen to favorites endlessly (repetition is a feature, not a rut), and never turn the story into a quiz. The comprehension questions can wait; the affection for the language cannot.",
      "Bilingualism built on stories has a durability that classroom-only learning rarely reaches — because the child is not studying the language. The child is using it, to find out how the story ends.",
    ],
  },
  {
    slug: "ai-voice-narration-kids",
    title: "AI Narration for Children's Books: What Good Looks Like",
    description:
      "A robotic voice can ruin a story; a warm one can carry it. What we learned building read-aloud for young listeners.",
    date: "2026-07-08",
    tag: "Product",
    minutes: 6,
    body: [
      "Narration for children is a harder engineering problem than narration for adults, for one humbling reason: children stop listening the moment the voice feels wrong. Adults tolerate monotony; a six-year-old votes with their feet.",
      "## Pace is the first feature",
      "Children process spoken language more slowly than adults. Good children's narration runs measurably slower than podcast pace, with real pauses at sentence boundaries — pauses that give a young listener time to build the scene. When we tuned AXTO's read-aloud voice, pace adjustments improved story completion more than any voice-quality change.",
      "## Highlighting closes the loop",
      "Narration alone entertains; narration synchronized with highlighted text teaches. The moving highlight quietly binds the sound of a word to its printed shape — incidental phonics, delivered inside a story the child chose. This is the mechanism that turns listening time into pre-reading time.",
      "## The language must be the family's",
      "A read-aloud feature that only speaks English serves only some families. Browser-native speech lets AXTO narrate in the reader's own interface language at no cost, with premium neural voices as an upgrade path — the architecture keeps the choice with the family, not the platform.",
      "AI narration will not replace a parent's lap and voice — nothing should. Its job is the car ride, the waiting room, the evening the parent works late: keeping the story stream alive when a human reader is not available.",
    ],
  },
  {
    slug: "choosing-books-by-age",
    title: "Choosing E-Books by Age: A Practical Guide From 2 to 12",
    description:
      "The right book at the wrong age fails twice. A stage-by-stage map of what young readers actually need.",
    date: "2026-07-10",
    tag: "Learning",
    minutes: 7,
    body: [
      "Age recommendations on books are guesses about an average child who does not exist. What follows is a stage map instead — match the stage, not the birthday.",
      "## Ages 2–4: The naming stage",
      "Stories are an excuse for pointing and naming. Choose books with one clear picture per idea, repetitive structures, and short sessions. Interactivity should mean 'tap the cat and it meows', not puzzles. Narration works beautifully here because the child's whole job is listening and looking.",
      "## Ages 4–6: The pattern stage",
      "Children now crave predictable structure with one twist: the three attempts, the repeated refrain, the villain who is silly rather than scary. Rhyme and rhythm carry pre-reading skills. This is the golden window for the same story in two languages, because tolerance for repetition is at its lifetime peak.",
      "## Ages 6–9: The chapter bridge",
      "The move from picture books to chapters fails when it is abrupt. Bridge with heavily illustrated chapter books and mixed reading (adult or narrator reads the even chapters, the child reads the odd ones). Series matter enormously now — familiar characters lower the cost of every next book.",
      "## Ages 9–12: The identity stage",
      "Readers now choose books to explore who they are: adventure, friendship trouble, injustice, humor. The parent's job shifts from selecting to supplying — keep the pipeline full and judge none of it. A child devouring 'easy' books is consolidating fluency; volume at this stage beats difficulty.",
      "At every stage the same rule holds: the best book is the one the child asks for again. Everything else is commentary.",
    ],
  },
  {
    slug: "reading-habits-family-routine",
    title: "The 15-Minute Family Reading Routine That Actually Survives",
    description:
      "Most reading resolutions die in a week. The routines that last are small, anchored, and shame-free.",
    date: "2026-07-12",
    tag: "Parents",
    minutes: 5,
    body: [
      "Every September, families resolve to read more; by October, the resolution is a memory. The failure is almost never motivation. It is design.",
      "## Anchor, don't schedule",
      "Routines attached to clock times break the first busy evening. Routines attached to existing anchors survive: after brushing teeth, before lights out, during breakfast on weekends. The anchor does the remembering for you.",
      "## Shrink it until it cannot fail",
      "Fifteen minutes is the ceiling, not the floor. On a bad night, one page counts. The metric that matters is consecutive days, not minutes — a chain of tiny sessions builds the identity ('we are a reading family') that long irregular sessions never do.",
      "## Let the child drive the choice",
      "The fastest way to kill the routine is to use it for the books you think they should read. Choice is the engine of the habit; curation can happen upstream, in what enters the library at all. A digital library helps precisely here: the shelf can be full without the house being full.",
      "## Close with talk, not tests",
      "One question ends the session well: 'what was your favorite part?' It signals that stories are for savoring, not examination — and it hands you tomorrow's anchor, because the answer almost always ends with 'can we read the next one?'",
    ],
  },
  {
    slug: "why-kids-need-stories-from-everywhere",
    title: "Why Children Need Stories From Everywhere",
    description:
      "A bookshelf where every hero looks and lives the same way teaches its own quiet lesson. Diverse story worlds are not decoration — they are equipment.",
    date: "2026-07-14",
    tag: "Learning",
    minutes: 5,
    body: [
      "Stories are the first maps children get of the world. If every map shows the same neighborhood, the world beyond it becomes either invisible or frightening — and both are failures of the bookshelf, not the child.",
      "## Mirrors and windows",
      "Educators describe books as mirrors and windows: mirrors in which a child sees their own life dignified in print, and windows through which they watch lives unlike theirs. Every child needs both. The child who never finds a mirror learns their story does not count; the child who never looks through a window meets difference late, and warily.",
      "## What global stories train",
      "Following a hero through an unfamiliar setting is cognitive exercise: new names, new foods, new rules of politeness, held in mind while the plot moves. Children who read across cultures practice exactly the flexibility that multilingual, multicultural adult life demands. It is empathy training disguised as adventure — which is the only disguise empathy training has ever worked in.",
      "## Building the shelf",
      "Aim for range across three axes: place (stories set beyond your country), voice (authors and traditions beyond your own), and language (the same story read across languages does double duty). A digital library makes the logistics trivial — the shelf is as wide as the catalog — but the intent still has to be yours.",
      "Children raised on stories from everywhere are not just better read. They are harder to convince that anyone's story does not matter.",
    ],
  },
  {
    slug: "schools-digital-library",
    title: "What a Classroom Gains From a Digital Library (and What It Doesn't)",
    description:
      "For schools weighing e-book platforms: the genuine wins, the honest limits, and the questions to ask any vendor.",
    date: "2026-07-16",
    tag: "Schools",
    minutes: 6,
    body: [
      "Digital libraries are pitched to schools with sweeping promises. Having built one used by families and classrooms, we can be more precise about where the value is real.",
      "## The genuine wins",
      "Simultaneous access: thirty children can open the same title tonight — impossible with three paper copies. Built-in narration: struggling readers and second-language learners get an always-patient reading partner, which frees the teacher's voice for teaching. Reach into homes: the classroom shelf follows the child home, including homes that own few books — the equity effect no paper collection matches. And selection data: seeing what children actually finish (not just borrow) tells a teacher more than any survey.",
      "## The honest limits",
      "Screens add management overhead in class; paper never needs charging. Very young children still gain motor and attention benefits from physical page-turning. And no platform replaces the daily read-aloud by a teacher who loves the book — technology extends that ritual; it must never be allowed to substitute for it.",
      "## Questions to ask any vendor",
      "Can families use it in their home language? Does pricing cover the whole school or meter per child? What happens to student data — and can you answer that in one sentence? Does the catalog include stories from the cultures your students actually come from? A vendor who answers all four plainly is worth piloting. AXTO's for-schools program was designed to make those four answers short.",
    ],
  },
  {
    slug: "reluctant-readers-what-works",
    title: "Reluctant Readers: What Actually Works (and What Backfires)",
    description:
      "Some children fight every page. The approaches that turn resistance into appetite — and the well-meaning moves that deepen it.",
    date: "2026-07-18",
    tag: "Parents",
    minutes: 7,
    body: [
      "A reluctant reader is rarely a child who cannot read. More often it is a child for whom reading has become associated with performance, correction, or boredom — and every one of those associations was installed by adults, which is the good news, because adults can uninstall them.",
      "## What backfires",
      "Making reading a condition for treats teaches that reading is the chore standing between the child and the good stuff. Correcting every stumble turns a story into a test. Forcing 'good' books at the expense of comics, joke books, and game guides tells the child their taste is wrong — and taste is the engine you need.",
      "## What works",
      "Absolute freedom of choice within a curated shelf: you control what enters the library; the child controls what leaves it. Comics and graphic novels count — the vocabulary in a good comic routinely exceeds everyday conversation. Series are gold: the second book of a loved series costs the child almost no activation energy.",
      "## The audio bridge",
      "For many reluctant readers, listening is the unlocked door. A narrated story with the text highlighted lets the child enjoy plots at their interest level while their decoding catches up — no performance, no correction, just story. Many children drift from listening, to following along, to reading ahead of the voice, without anyone announcing a lesson.",
      "## Lower the stakes, shrink the sessions",
      "Ten relaxed minutes beat forty supervised ones. End sessions while the child still wants more. And let them see YOU read for pleasure — children believe what adults do long before they believe what adults say.",
    ],
  },
  {
    slug: "audiobooks-count-as-reading",
    title: "Do Audiobooks Count as Reading? What the Evidence Says",
    description:
      "Parents worry narrated books are cheating. Comprehension research — and common sense about how children learn — says otherwise.",
    date: "2026-07-19",
    tag: "Learning",
    minutes: 6,
    body: [
      "The worry usually arrives around age seven: if my child listens to books instead of reading them, are they falling behind? The short answer from comprehension research: for understanding, story, and vocabulary, listening and reading are close cousins, not rivals.",
      "## What listening builds",
      "Comprehension studies consistently find large overlap between listening and reading comprehension — the same mental machinery builds the scene, tracks the characters, and infers what is unsaid. Vocabulary growth is at least as strong through the ear, because narrators pronounce, pace, and emotionally frame words a young reader might skip on the page.",
      "## What listening does not build",
      "Decoding — mapping letters to sounds — only grows by meeting print. That is the honest limit. The practical answer is not to ration audio but to connect it to print: narrated e-books with synchronized highlighting do exactly this, letting the ear carry the story while the eye quietly learns the words' shapes.",
      "## The both/and household",
      "Use audio for above-level stories, car rides, and tired evenings; use print for at-level practice and bedtime rituals; use both together for the bridge. A child who devours audiobooks is not avoiding reading. They are building the comprehension, vocabulary, and love of story that decoding will soon plug into — arriving at fluent reading with the hard part already in place.",
    ],
  },
  {
    slug: "dialogic-reading-questions",
    title: "The Five Questions That Turn Story Time Into Language Time",
    description:
      "Dialogic reading — reading WITH a child rather than TO them — doubles the developmental value of the same book.",
    date: "2026-07-20",
    tag: "Parents",
    minutes: 6,
    body: [
      "Two families read the same picture book. In one, the parent reads and the child listens. In the other, the book becomes a conversation. Decades of research on dialogic reading show the second child gains measurably more language — from the identical book.",
      "## The five question moves",
      "Completion: pause and let the child finish the line — rhymes make this irresistible. Recall: what happened to the boat before? Open-ended: what is happening on this page? — then wait, longer than feels natural. Wh-questions: what is that called, why is she hiding? Distancing: has anything like this happened to you? — the bridge from book to life, where vocabulary becomes usable.",
      "## Follow, repeat, expand",
      "Whatever the child answers, take it seriously: repeat it back (confirming), expand it by a word or two (modeling), and follow their interest even if it derails your page plan. The goal is not finishing the book; it is the number of conversational turns. A book half-read with forty exchanges beats a book finished in silence.",
      "## Digital story time counts too",
      "Dialogic technique works identically with an e-book — pause the narration, ask, wonder, predict. The device does not decide the interaction; the adult does. And on solo days, a child who has been read to dialogically starts asking the questions to themselves, which is the entire point: the voice moves inside.",
    ],
  },
  {
    slug: "kids-writing-their-own-stories",
    title: "From Reader to Author: Why Kids Should Write Their Own Stories",
    description:
      "Story-making is reading's secret accelerator. How composing tales — dictated, drawn, or typed — deepens every literacy skill.",
    date: "2026-07-21",
    tag: "Learning",
    minutes: 6,
    body: [
      "Ask a child to write a story and you have secretly asked them to do everything reading requires — plus invention. Plot structure, character motive, word choice, sequencing: composition exercises the same muscles comprehension uses, against heavier weights.",
      "## Start before they can write",
      "Dictation is the open secret: the child tells, the adult (or a device) transcribes, and suddenly a four-year-old is an author. Reading back their own words is the most motivating decoding practice that exists — no printed sentence matters to a child like the one they made.",
      "## Scaffolds that help",
      "Story starters beat blank pages: a character, a place, a problem. Familiar shapes help too — three wishes, a journey there and back, a villain defeated by cleverness. Children compose confidently inside structures they have absorbed from dozens of stories, which is one more argument for a deep reading diet. Tools that let kids assemble and illustrate their own tales (AXTO's create-story space was built for exactly this) lower the mechanical friction so the inventing stays fun.",
      "## Respond as a reader, not an editor",
      "When a child shares a story, the first response must be about the story: the funny part, the surprise, what happens next. Spelling can wait years; authorship cannot be un-discouraged. Children who think of themselves as story-makers read differently — they notice how books are built, because they are in the building trade themselves.",
    ],
  },
  {
    slug: "reading-rewards-motivation",
    title: "Stickers, Streaks, and Stars: Using Rewards Without Killing the Joy",
    description:
      "Reward systems can spark a habit or hollow it out. The motivation science parents need before launching a reading chart.",
    date: "2026-07-22",
    tag: "Parents",
    minutes: 6,
    body: [
      "Psychology has a warning label for rewards: pay someone for what they already enjoy and the enjoyment can shrink — the overjustification effect. But the same literature shows rewards work brilliantly for STARTING behaviors that have not become enjoyable yet. The art is knowing which phase you are in.",
      "## When rewards help",
      "For a child with no reading habit, small immediate acknowledgments — a sticker, a filled star, a streak counter — get the repetitions happening in which enjoyment can grow. Reward the showing up (we read tonight), never the metrics that distort (pages, speed, difficulty), which teach skimming and book-inflation.",
      "## Design details that matter",
      "Celebrate effort and completion, not comparison — leaderboards discourage every child not at the top. Keep rewards symbolic rather than material where possible: badges and achievements carry surprisingly durable motivation (this is why AXTO ships achievements rather than prizes). And build in surprise: unexpected recognition resists the entitlement treadmill that scheduled prizes create.",
      "## The planned obsolescence",
      "A good reward system is designed to become unnecessary. As the habit takes root, let the external rewards quietly thin while the intrinsic ones — choosing the next book, staying up ten minutes later to finish a chapter — take over. If the chart disappears and the reading continues, the system worked. If reading stops the day the stickers do, it was measuring compliance, not building a reader.",
    ],
  },
  {
    slug: "early-literacy-milestones",
    title: "Early Literacy Milestones: What to Expect From 2 to 8 (Without Panic)",
    description:
      "Reading development has a wide normal range. The genuine milestones, the myths, and the few signs worth acting on.",
    date: "2026-07-23",
    tag: "Learning",
    minutes: 7,
    body: [
      "Few topics generate more quiet parental anxiety than reading timelines. The truth practitioners keep repeating: the normal range is wide, and most 'behind' children are simply on the later side of normal. Here is the map, minus the panic.",
      "## Ages 2-4: print awareness",
      "Books have a right way up; pages turn one way; those squiggles are words and they say the same thing every time. Add phonological play — rhyming, clapping syllables, delight in silly sounds. Children read to daily arrive at these effortlessly.",
      "## Ages 4-6: the code cracks",
      "Letter names, then letter sounds, then the electric discovery that sounds blend into words. First 'reading' is often memorized favorites recited with the page — this is not cheating, it is rehearsal. By six, most children decode simple regular words; many do not, and still turn out fine readers.",
      "## Ages 6-8: from decoding to fluency",
      "Word-by-word reading smooths into phrases; silent reading appears; comprehension starts outrunning the mouth. Volume matters most now — easy books in quantity build the automaticity that makes hard books possible later.",
      "## When to actually seek help",
      "Persistent difficulty naming letters by six, no sound-blending by seven, family history of dyslexia plus struggle, or a child whose frustration is turning into avoidance — these earn a professional look, early, because intervention works best young. Everything else mostly earns patience, daily stories, and resistance to comparing children at dinner parties.",
    ],
  },
  {
    slug: "multilingual-home-library",
    title: "Building a Multilingual Home Library on an Ordinary Budget",
    description:
      "Heritage languages survive on stories. Practical sourcing, balancing, and daily habits for a home library in two (or more) tongues.",
    date: "2026-07-24",
    tag: "Learning",
    minutes: 6,
    body: [
      "Families raising children in two languages hear plenty about speaking — and too little about shelves. Yet the home library quietly decides which language feels like a whole world and which feels like a kitchen dialect. Books give a language its dragons, jokes, and science; a language with no books becomes, to a child, a language with no stories.",
      "## Balancing the shelf",
      "Aim for meaningful presence, not parity: enough books in the heritage language that choosing it is normal, including some titles that exist ONLY in that language — exclusivity creates desire. Same-story pairs (one tale, both languages) do double duty: comprehension support in the weaker language, and proof that both tongues carry the same magic.",
      "## Sourcing without a fortune",
      "Digital libraries change the economics completely: a multilingual catalog puts hundreds of titles in the minority language behind one subscription, where importing paper would cost a fortune in shipping (AXTO's multilingual shelf exists precisely for these families). Add grandparent pipelines — relatives abroad sending one book per visit builds a collection with built-in emotional value.",
      "## The habits that activate it",
      "Anchor each language to a ritual: perhaps weekend breakfasts belong to one language's stories, bedtime to the other. Let narration help on pronunciation days when the parent is the less confident reader — hearing native rhythm keeps the child's ear honest. And never present the heritage language as homework; present it as the language some of the best stories happen to live in.",
    ],
  },
  {
    slug: "rereading-same-book-again",
    title: "Again! Why Children Demand the Same Book 400 Times — and Why You Should Comply",
    description:
      "Rereading feels unproductive to adults and is developmental gold to children. The science of the 'again' phase.",
    date: "2026-07-25",
    tag: "Parents",
    minutes: 5,
    body: [
      "Every parent knows the ritual: the same book, every night, for months. The adult brain screams for variety; the child's brain knows exactly what it is doing.",
      "## What repetition builds",
      "Word-learning studies find children acquire vocabulary faster from repeated readings of one story than single readings of many — each pass frees attention that decoding novelty consumed, letting it land on new words, story logic, and detail. Prediction is comprehension practice: the child who announces the next page is rehearsing narrative structure. And the mastery feeling — knowing a book completely — is early confidence in the reader identity itself.",
      "## Surviving it as the adult",
      "Vary your performance rather than the book: new voices, deliberate mistakes for the child to catch (they adore this), pausing for them to complete lines. Hand a round to the narrator on nights your patience is spent — the book is the ritual, the voice can rotate.",
      "## When it ends",
      "The phase retires itself: one night the child chooses something new, having extracted everything the old book had to teach. Rereading remains a lifelong reader's habit — adults do it with beloved novels for the same reason children do: known stories are where the mind goes deepest. The four-hundredth reading was never a rut. It was practice.",
    ],
  },
];

// Batch 2 — twenty more original articles, kept in a separate module for
// readability and concatenated here so every consumer (blog index, [slug]
// pages, sitemap, getPost) sees one flat list.
BLOG_POSTS.push(...BLOG_POSTS_2);

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
BLOG_POSTS.push(...BLOG_POSTS_3);

// Autonomous content bot output (committed by the ulyah.com Orchestra).
BLOG_POSTS.push(...(AUTO_POSTS as unknown as BlogPost[]));
