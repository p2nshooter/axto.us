/**
 * Additive expansions for the AXTO editorial blog.
 *
 * Every entry here APPENDS body items to an existing post. Nothing is removed,
 * nothing is rewritten, and two posts are never merged into one URL. Several
 * entries may target the same slug — they apply in order, which is how a later
 * top-off pass works.
 *
 * WHY THIS EXISTS. The blog was launched as short editorial notes: ninety
 * posts with a median of about 240 words. That is a good newsletter and a poor
 * web page. A 240-word post says the thing and stops before it has shown the
 * reader why it is true, what it looks like on a Tuesday evening, or when it
 * does not apply — and a site made of ninety of those reads as thin however
 * many of them there are.
 *
 * So the posts grow rather than multiply. Each expansion carries the part that
 * was missing: the mechanism behind the claim, a concrete scene, the objection
 * a sceptical parent would raise, and the limits. All of it hand-written.
 *
 * READING TIME IS RE-MEASURED, NEVER RE-DECLARED. Each post carries a
 * `minutes` field that was set by hand when the post was short. Leaving it
 * alone would tell a reader "4 min" above a fifteen-minute article, which is
 * the kind of small untruth a page should never contain. applyExpansions()
 * recomputes it from the finished text at 200 words a minute.
 */
import type { BlogPost } from "./blog-posts";

export interface BlogExpansion {
  slug: string;
  /** Body items to append. An item beginning with "## " renders as a heading. */
  body: string[];
}

export const BLOG_EXPANSIONS: BlogExpansion[] = [
  {
    slug: "rereading-same-book-again",
    body: [
      "## What the fortieth reading is actually doing",
      "To an adult, the fortieth reading of the same picture book is forty times the same experience. To the child it is not, and the difference is worth understanding, because it explains why the demand is so fierce and why giving in is not indulgence.",
      "The first time through a story, almost all of a young child's attention goes to what happens next. There is no capacity left over. Plot is expensive. By the fourth or fifth reading the plot is known, the suspense budget is freed, and attention starts moving outwards — to the words themselves, to the pictures at the edges of the page, to the way the adult's voice changes for a particular character.",
      "That freed attention is where the learning happens. Vocabulary research keeps finding the same pattern: children pick up far more new words from a book they have heard several times than from several different books heard once. A word met once is a sound. A word met on the eighth reading, in a story whose shape is already familiar, is a sound attached to a meaning attached to a moment.",
      "There is a second thing going on that is harder to measure. A child who knows a story completely can predict it, and predicting it out loud — finishing your sentence, turning the page before you do, correcting you when you skip a line — is the first experience most children have of being the expert in the room. In a life where adults know everything, owning one book completely is not a small thing.",
      "## The line you are allowed to skip, and the one you are not",
      "Most parents, somewhere around the twentieth reading, begin quietly abridging. A sentence here, a whole page there. This is a completely reasonable survival strategy and it usually gets caught immediately, which surprises people.",
      "The catching is itself evidence. A three-year-old who objects to a missing line has memorised the text closely enough to notice a single sentence gone from a page they cannot yet read. That is a real feat of memory and language, and it is happening precisely because of the repetition the adult is trying to escape.",
      "If you need to shorten, shorten honestly. \"Tonight we are doing the short version\" is a rule a child can accept. Silent editing is a rule broken, and small children are unusually strict about the terms of a ritual.",
      "## What to do with the boredom, which is real",
      "None of this makes the fortieth reading interesting for you, and pretending otherwise helps nobody. The boredom is real and it is worth solving rather than enduring.",
      "Change the voice, not the book. Read it very slowly. Read it as a news report. Read it in a whisper. Let the child read the repeated line while you do the rest. Any of these keeps the text intact — which is what the child is attached to — while giving the adult something new to do.",
      "Narration helps here in a specific and limited way. A read-aloud recording can carry the fifteenth and twenty-fifth readings on the evenings when you have nothing left, and the child gets the repetition they are after with the text unaltered. It does not replace your voice, and a child who is offered only the recording notices the substitution immediately. Used as relief rather than replacement, it keeps the ritual alive on the days it would otherwise break.",
      "## When one book becomes a problem",
      "Rereading is developmental in almost every case, but there are two situations worth watching.",
      "The first is when a single book is being used to avoid all others — not preferred, but the only one tolerated, over months, alongside distress at any new title. That pattern is worth a conversation with a teacher or health visitor, not because rereading is harmful, but because rigidity across many areas at once is worth a professional eye.",
      "The second is simpler: a child who has genuinely outgrown a book and returns to it for comfort during a hard week. That is not a reading problem at all. It is the same instinct that sends adults back to a film they have seen nine times, at exactly the moments when nothing else feels manageable, and it deserves the same respect.",
      "## What it looks like from the other end",
      "Ask any adult about the book they had read to them most as a child and almost all of them can still recite a line of it. Ask them how many different books they were read and they have no idea.",
      "Depth was doing the work. The library card mattered far less than the four books that got worn out. If your child has chosen one, they have not got stuck — they have chosen the book they are going to carry, and they are currently learning it by heart.",
    ],
  },
  {
    slug: "reading-habits-family-routine",
    body: [
      "## Why reading resolutions die in the second week",
      "Almost every family that resolves to read more succeeds for about nine days. The failure is so consistent that it is worth treating as a design problem rather than a character one.",
      "Three things break it, in order. The first is that the plan is built for the good evening — the one where dinner is early, nobody is fractious, and there is a clear half hour. Good evenings are a minority. A routine designed for them fails on the majority of nights, and a routine that fails most nights stops being a routine.",
      "The second is that missing a day feels like the end of the attempt. This is the strongest force in the whole business. Almost nobody abandons a habit on the day they miss it; they abandon it on the following day, when the missed day has turned into evidence that the thing is not working.",
      "The third is measurement. A family that starts counting minutes has invented a way to fail. The number becomes the point, the child feels tested, and reading joins homework in the category of things done at somebody else's insistence.",
      "## Anchoring, in more detail",
      "An anchor is an event that already happens without effort, which the new habit attaches itself to. Not a time — an event. \"Half past seven\" requires somebody to notice the clock and enforce it. \"After teeth\" happens by itself, every night, in every household, whatever time it turns out to be.",
      "The best anchors in most homes are teeth, the last drink of water, and getting into bed. In families where evenings are unpredictable — shift work, long commutes, several children on different timetables — breakfast can work better than bedtime, and a fifteen-minute read at the kitchen table before school has the advantage of happening when everybody is still fresh.",
      "One anchor is enough. Families that install three usually keep none.",
      "## Making it too small to fail",
      "The instruction that changes outcomes more than any other is this: shrink the commitment until it is embarrassing.",
      "One page. Not fifteen minutes — one page. A family that commits to one page reads more over a year than a family that commits to fifteen minutes, and the reason is entirely psychological. One page can be done on the bad night, in the hallway, with a coat still on. Because it can be done on the bad night, the streak survives, and because the streak survives, the good nights keep arriving.",
      "In practice almost nobody stops at one page. Starting is the expensive part; continuing is nearly free. But the commitment has to be to the page, honestly, or the trick stops working.",
      "## The missed-night rule, written down in advance",
      "Decide now what happens when you miss, because deciding in the moment always produces the same answer, which is that the whole thing was a nice idea.",
      "A rule that works: never miss twice. One missed night is weather. Two is a decision. This gives the family permission to fail without giving it permission to stop, and it removes the entire guilt spiral that ends most reading routines in the second week.",
      "It helps enormously to say this out loud to the children as well. A seven-year-old who knows that missing a night is allowed will not treat a missed night as proof that the family has given up.",
      "## Letting the child choose, including badly",
      "Choice is what keeps a reading habit from becoming a chore, and it costs adults more than they expect, because children choose things adults find unbearable.",
      "They will choose the joke book. They will choose the annual with four words a page. They will choose the same book as last night, and the night before. All of this is fine. The purpose of the routine is that reading is a normal part of the day, not that any particular book is consumed, and a child who is choosing is a child who is participating.",
      "There is a reasonable adult veto, and it should be used sparingly: a book that is too frightening at bedtime, or a screen-based thing that will make sleep harder. Everything else is theirs.",
      "One useful arrangement is one book each. They choose theirs, you choose yours, both get read. Yours is where the stretch happens — the longer story, the one above their reading level that they can happily follow by ear — and because they got their choice first, they rarely object to yours.",
      "## Ending with talk instead of a test",
      "The last two minutes decide how the child feels about the whole ritual, and this is where well-meaning parents most often go wrong.",
      "\"What was the boy's name?\" is a test, and the child hears it as one. \"Would you have done that?\" is a conversation. Both take fifteen seconds. Only one of them makes the child want to do this again tomorrow.",
      "Good closing questions are the ones with no correct answer: which character would you not want to sit next to, what do you think happens on the day after the story ends, which bit would you take out. If nothing comes, say what you thought instead. A parent offering an opinion teaches more about reading than a parent conducting a quiz.",
      "## What success actually looks like after a year",
      "Not a chart. Not a number of books. A year in, the families for whom this worked describe the same thing: the child now assumes reading happens, in the way they assume teeth get brushed, and objects if it is skipped.",
      "That is the entire goal. Everything else — the vocabulary, the comprehension, the school results people quote in articles like this one — follows from a child who expects a book to arrive at the end of the day, and is quietly put out when it does not.",
    ],
  },
  {
    slug: "audiobooks-count-as-reading",
    body: [
      "## Where the worry comes from, and why it is not silly",
      "The suspicion that audiobooks are cheating is widespread, quietly held, and rarely argued out loud. It deserves better than dismissal, because the instinct behind it is pointing at something real.",
      "The instinct is this: reading is hard, hard things build capacity, and something that removes the difficulty must be removing the benefit. Applied to most skills this reasoning is sound. A child who is driven to school does not get fitter.",
      "It goes wrong here because \"reading\" is not one skill. It is at least two, bolted together, and they are learned in different ways. One is decoding — turning marks on a page into words. The other is comprehension — turning words into meaning. Listening removes the first and exercises the second, at full strength, often at a level the child could not yet reach on the page.",
      "So the honest answer is not \"audiobooks are reading\". It is that audiobooks are half of reading, and it is the half that most determines whether a child ends up loving books.",
      "## What the comparison studies keep finding",
      "The research design here is simple: give some children a text to read, others the same text to listen to, then test comprehension. Across a lot of studies with children past the very early stages, the two groups score close to each other, with listening sometimes slightly ahead for harder material.",
      "The gap that does show up is in vocabulary growth, and it favours listening — for a mechanical reason rather than a mysterious one. Children can listen to books well above their reading level, and books above their reading level are where unfamiliar words live. A nine-year-old reading at nine-year-old level meets nine-year-old vocabulary. The same child listening to a book written for twelve-year-olds meets twelve-year-old vocabulary, in context, with a narrator's intonation doing half the explaining.",
      "What listening does not do is build the decoding machinery. That comes only from eyes on text, and no amount of narration substitutes for it. This is why the answer is both, and why it is worth being precise about which job each one is doing.",
      "## The both/and household, concretely",
      "In practice the families who get this right tend to converge on a similar arrangement without ever having read an article about it.",
      "Listening covers the times when eyes are unavailable: the car, the walk to school, illness, the last twenty minutes before sleep when a child is too tired to decode but not too tired to follow a story. It also covers the books that are too hard, which is where the vocabulary is.",
      "Reading covers the daily practice, at or slightly above the child's own level, in short and unglamorous stretches. Twenty minutes of moderately easy text does more for fluency than five minutes of struggle.",
      "The arrangement that seems to work best of all is the two together: text on the page, voice reading it aloud, the child following. This is the format that pairs the sound of a word with its shape, repeatedly, which is close to the definition of learning to read. It is also, not coincidentally, what a parent reading over a child's shoulder has always done.",
      "## The dyslexia case, which changes the question entirely",
      "For a child with dyslexia, or with a visual impairment, or with an attention difficulty that makes sustained decoding exhausting, this stops being a debate about equivalence and becomes a question of access.",
      "Such a child, restricted to what they can decode unaided, is not merely reading more slowly. They are being cut off from the ideas, stories and vocabulary their peers are absorbing — and the gap compounds every year, in a way that has nothing to do with their intelligence and everything to do with the format.",
      "Narration removes that particular barrier without touching the decoding work, which continues separately with proper support. Any adult still weighing whether audiobooks \"count\" for such a child is weighing the wrong question against a real cost.",
      "## Honest limits worth naming",
      "Three things are genuinely true on the sceptical side, and a fair article should say them.",
      "Listening is easier to do inattentively. A child can be in the room with an audiobook and take in almost nothing, in a way that is harder to fake with a book in hand. Asking one question afterwards — not a test, just a question — is usually enough to tell.",
      "Speed matters. Many narrated books can be played faster, and children often like this. Comprehension holds up remarkably well until it suddenly does not, and the fall-off is invisible from outside. If a child is racing through titles, slow it down and see whether they can still tell you what happened.",
      "And listening does nothing for spelling. Spelling comes from seeing words, repeatedly, on a page. A household that has gone all-in on narration should expect exactly that gap and cover it deliberately.",
      "## The question worth asking instead",
      "\"Does this count as reading?\" is a question about accounting. The useful question is what the child is getting.",
      "A child following a story they love, meeting words they have never met, arguing with a character in their head, asking for the next chapter — that child is doing the thing books are for. Whether the words arrived through their eyes or their ears is a detail of transport.",
      "The decoding still has to be taught, deliberately and separately, and no household should let narration quietly replace it. But no child in the history of reading has ever been damaged by being told too many stories.",
    ],
  },
  {
    slug: "screen-time-that-counts",
    body: [
      "## Why the minute count stopped being useful",
      "Counting screen minutes made sense when a screen did one thing. A television was a television, and an hour of it was roughly comparable to another hour of it.",
      "That has not been true for a decade. An hour can be a video call with a grandparent in another country, a child writing a story, a maths game that adapts to their mistakes, an autoplaying feed engineered to prevent stopping, or a narrated book with the text highlighted as it is read. Treating those five hours as the same quantity is like counting hours of \"eating\" without asking what was on the plate.",
      "The minute count survives because it is easy to measure, and because measuring something feels like managing it. But most families who track minutes closely will admit, if pressed, that the number tells them nothing they can act on.",
      "## Question one, expanded: who is doing the work?",
      "Watch a child's hands and face for sixty seconds. The question is whether the screen is producing and the child receiving, or the child producing and the screen responding.",
      "A child building something, drawing, typing, choosing what happens next, solving a thing that can be got wrong — that is a child doing the work. A child watching a sequence that would run identically if they left the room is a child receiving.",
      "Neither is forbidden. Receiving has its place; adults watch films. But a household whose screen hours are almost entirely receiving has a diet problem, and the fix is not fewer minutes. It is different minutes.",
      "There is a useful tell for apps that pretend. Many are built so that the child taps at moments the app has chosen, to advance something the app was going to do anyway. That is not interaction, it is a button that keeps a hand busy. If removing the taps would leave the experience unchanged, the child is not doing the work.",
      "## Question two, expanded: does it end?",
      "This is the sharpest of the three, because it separates products designed for the child from products designed for engagement metrics.",
      "Some things end. A book ends. A level ends. An episode ends and the screen goes quiet. Other things are built specifically never to end: infinite scroll, autoplay with a countdown, a reward that arrives just after the natural stopping point.",
      "The difference shows up in behaviour rather than content. Ending things produce a child who finishes and looks up. Endless things produce the transition fight — the one every parent knows, where switching off triggers a reaction out of all proportion to the thing being switched off.",
      "If turning something off reliably causes a meltdown, that is information about the product, not only about the child. A well-designed children's app makes stopping easy, because its designers were thinking about the child's evening rather than their own retention numbers.",
      "One practical move: prefer apps where the child can see the end from where they are. A book has a visible thickness. A ten-question quiz has a counter. A feed has neither, on purpose.",
      "## Question three, expanded: does it leave the screen?",
      "The best sign that screen time was worth it is that something walks out of the screen and into the room.",
      "The child retells the story at dinner. Draws the character. Asks a question the app raised and the app could not answer. Builds the thing out of cardboard. Uses a word they met an hour ago.",
      "Content that never leaves the device tends to be content that was consumed rather than used. This is not a hard rule — some entertainment is just entertainment, and that is allowed — but a household where nothing ever crosses back over is a household where the screen is a babysitter rather than a tool.",
      "You can encourage the crossing with one question, asked at a neutral moment rather than as an interrogation: what happened in it. If the answer is a shrug, over and over, across weeks, that particular app is not earning its place.",
      "## What the three questions do not cover",
      "They say nothing about age, and age still matters, particularly under three, where the evidence for screens teaching anything much is weak and the evidence for human interaction is overwhelming.",
      "They say nothing about sleep. A perfectly nourishing app at nine in the evening is still an app at nine in the evening, and the light and the alertness both cost sleep that a young child cannot get back.",
      "And they say nothing about where the screen is. The same app is a different thing in a shared room, where an adult glances over occasionally, than it is behind a closed door. Location does more work than most content rules.",
      "## A test you can run this week",
      "Pick the app your child uses most. Watch three minutes of it over their shoulder without commenting, then answer the three questions honestly.",
      "Most families find one clear pass, one clear fail, and one they had never thought about. The clear fail is worth removing, and removing one thing is achievable in a way that \"cutting screen time\" never is.",
      "Then stop counting minutes. A family that has replaced its worst hour with a better one has done more than a family that shaved fifteen minutes off the total and kept the same diet.",
    ],
  },
  {
    slug: "dialogic-reading-questions",
    body: [
      "## What changes when the reading becomes two-way",
      "The ordinary version of story time has one person producing language and one person receiving it. Dialogic reading swaps that around: the adult's job shifts from performer to interviewer, and the child does most of the talking.",
      "The effect is easy to underestimate until you count words. In a typical read-aloud a four-year-old might say a handful of things across a whole book. In a dialogic reading of the same book they may produce several hundred words — describing, guessing, arguing, naming.",
      "That output is the point. Children learn language most efficiently when they are generating it and receiving a response, not when they are absorbing it. The book stops being the content and becomes the prompt.",
      "## The five moves, one at a time",
      "The five question types are worth knowing separately, because most adults naturally use one of them and neglect the other four.",
      "Completion is the easiest and the one to start with: leave the last word of a familiar rhyme or repeated line for the child to supply. It requires nothing of them but attention and it gets a young child talking within seconds.",
      "Recall asks what happened — earlier in this book, or in the whole book once it is finished. It builds the sense that a story is a structure with an order, which is the foundation of comprehension later.",
      "Open-ended questions point at the picture and ask what is going on. No correct answer, so no risk. \"Tell me about this page\" produces more language from a shy child than any other prompt in the set.",
      "Wh- questions — what, where, who, why — attach words to things. Pointing at an object and asking what it is called is the single most direct vocabulary move available, and it works because the child has to retrieve the word rather than merely hear it.",
      "Distancing questions connect the book to the child's own life: has that ever happened to you, do we have one of those, who does that remind you of. These are the hardest for the child and the most valuable, because they are practice at the exact skill of relating a text to something outside it.",
      "## Follow, repeat, expand — the part that does the work",
      "The questions get the attention, and the response pattern is what actually builds language. It has three steps and it takes about four seconds.",
      "Follow the child's answer, whatever it is. Repeat what they said, so they know it landed. Then expand it by one notch — add an adjective, a clause, a more precise word — and let them hear their own idea in a slightly larger shape.",
      "Child: \"Dog.\" Adult: \"Yes, a dog. A big brown dog, running.\" That is the whole technique. The child said one word and heard six, all of them about the thing they were already interested in, with nothing corrected and nothing refused.",
      "The temptation to skip straight to correcting is strong and worth resisting. \"No, that's a fox\" ends the exchange. \"It does look like a dog — it's a fox, look at the tail\" keeps it going, and the child is far more likely to volunteer the next observation.",
      "## How not to ruin story time with it",
      "The commonest failure of dialogic reading is enthusiasm. An adult who has just learned the five moves will use all five on every page, and the child will stop wanting to read.",
      "Two or three questions in a whole book is plenty. The story still has to be a story; a book interrupted every twelve seconds is an interview with pictures, and children opt out of interviews.",
      "It also works best on the second and third readings rather than the first. Let the first pass through a new book be uninterrupted — the child wants to know what happens, and blocking that to ask about a picture is a poor trade. Once the plot is known, the attention is free, and that is when questions land.",
      "And it is not for every book. Some are for talking about; some are for listening to in the dark, at the end of a long day, with nobody asking anything. Knowing which is which matters more than technique.",
      "## Ages, and what to expect at each",
      "With a two- or three-year-old, almost everything is completion and open-ended pointing. Answers are one or two words, and the expansion step is where the value sits.",
      "With four- and five-year-olds, wh- questions and recall start working properly, and children begin volunteering observations without being asked — which is the sign it is working.",
      "From six upwards the balance shifts to distancing and prediction: what would you have done, what do you think happens next, why did she say that. These are the questions that survive into reading at school and eventually into reading alone, which is the point of the whole exercise.",
      "Older children, seven and up, often resist obvious questioning — they can hear the teaching. With them it works better as genuine conversation: say what you thought about a character and let them disagree with you.",
      "## Doing it when you are not there",
      "Not every reading happens with an adult in the room, and pretending otherwise makes the technique useless on the evenings that need it most.",
      "A narrated book can carry the story while somebody else is cooking. What it cannot do is respond, and the response is the part that builds language — so the sensible arrangement is to let the recording carry the reading and keep the conversation for afterwards.",
      "Two questions at bedtime about a book heard alone in the afternoon does most of the work of a full dialogic reading, and it costs a minute. \"What was the best bit?\" and \"What would you have done?\" are enough.",
      "## Why it holds up",
      "Dialogic reading is one of the few interventions in early literacy that is cheap, quick, needs no materials, and shows up consistently in measurements of vocabulary and expressive language.",
      "Its real advantage is that it does not require a good reader, a large vocabulary, or confidence in the adult. It requires somebody willing to ask a child what they think and then listen to the answer. Any adult can do that, in any language, with any book — including one they are struggling with themselves.",
    ],
  },
  {
    slug: "rereading-same-book-again",
    body: [
      "## The three phases parents describe",
      "Families who have been through this tend to describe the same arc, and knowing the shape of it makes the middle far easier to sit through.",
      "The first phase is discovery, and it is short. The child meets a book, likes it, and asks for it again the next night. Nobody minds this phase; it looks like ordinary enthusiasm.",
      "The second phase is saturation, and it is the long one. The book is demanded every single night, sometimes twice, and often at other points in the day. Other books are refused. This is the phase that produces the article you are reading, because it is the phase in which adults start quietly wondering whether something is wrong.",
      "The third phase is release, and it arrives without warning. One evening the child chooses something else, and the old book goes back on the shelf, and it is never mentioned again. Parents almost always report feeling slightly sad about this, which is a reliable sign that the second phase was not as unbearable as it felt at the time.",
      "The whole cycle usually runs somewhere between three weeks and four months. It is worth knowing that it ends, because in the middle of it nothing feels less likely.",
      "## What to do with the other books",
      "The instinct during saturation is to keep offering alternatives, and it usually backfires: a nightly negotiation about which book gets read turns the ritual into a fight, and the child digs in.",
      "A gentler approach is to stop offering and start leaving. Put two or three other books where the child can reach them, say nothing, and let the chosen book keep its place at bedtime. Children pick things up when nobody is watching far more readily than when a book is being recommended at them.",
      "The other move that works is adjacency. If the beloved book is about a digger, bring home three more about diggers. The attachment is often to the subject rather than to the specific text, and a child deep in a machinery phase will frequently accept a second machinery book when they will accept nothing else at all.",
      "And if neither works, nothing is lost. A child reading one book forty times is getting more language than a child reading forty books once, which is the finding that started this whole discussion.",
      "## A note for teachers and childminders",
      "In a classroom the calculation is different, because the request comes from one child and the cost is borne by twenty.",
      "The usual solution is separation: the whole-group story is chosen by the adult and changes daily, while the beloved book lives in the reading corner where its owner can return to it alone or with one other child. Both needs are met and neither child is refused.",
      "It is also worth telling the family. A child who is deep in one book at school is usually deep in one book at home too, and parents who have been told this is developmental rather than a problem stop worrying about it immediately.",
    ],
  },
  {
    slug: "reading-habits-family-routine",
    body: [
      "## Households where the standard advice does not fit",
      "Most reading-routine advice assumes one child, two available adults, and a predictable evening. A great many families have none of those, and being told to read for fifteen minutes at bedtime is not useful when bedtime is staggered across three children or happens while somebody is still at work.",
      "With several children at different ages, the arrangement that survives is usually one shared reading plus one short individual one. Everybody gathers for a book that works for the middle child, then the oldest reads alone for ten minutes while the youngest gets two minutes of picture book. The shared part is what makes it a family routine; the individual part is where the level-matched practice happens.",
      "Where an adult works evenings, the anchor should move rather than the habit being abandoned. Breakfast reading is genuinely as good, and in some ways better — nobody is tired, and a five-minute chapter at the table starts the day with something the child chose.",
      "Where the adult finds reading aloud difficult — because of dyslexia, because English is not their first language, because they were never read to themselves — a narrated book with the family listening together does the same job. The important variable is that reading happens with the adults present and interested, not that a particular person performs it.",
      "## What to do when a child refuses",
      "Refusal is usually not about reading. It is about the reading being somebody else's idea, or about the child having decided they are bad at it.",
      "For the first, the cure is handing over control completely for a fortnight. They choose the book, the place, the length, and whether you read or they do. Nothing is required except that the slot exists. Most refusals soften within days once the child stops being managed.",
      "For the second — the child who believes they are a poor reader — the fix is to remove all performance from the routine. You read, they listen. No turn-taking, no sounding out, no correction. Reading has to stop being a test before it can become a pleasure, and that can take weeks.",
      "It is worth saying plainly to the child that the bedtime slot is not school. Children carry the classroom's expectations home with them and are relieved to be told they are off duty.",
      "## Tracking without turning it into a scoreboard",
      "Some families genuinely enjoy a visual record, and there is nothing wrong with one — provided it records that reading happened rather than how much.",
      "A calendar with a mark on the nights it happened is fine. A chart counting books, minutes or pages usually is not, because it invites the child to optimise: they will pick short books, skim, and report generously, and the number will improve while the reading gets worse.",
      "If a reward is used at all, attach it to the routine rather than the volume — a Saturday trip to the library after a full week of marks, rather than a prize for a number of books. The distinction sounds pedantic and children detect it instantly.",
      "And retire the chart once the habit holds. A routine that needs a chart after six months has not become a habit; it has become a job.",
    ],
  },
  {
    slug: "audiobooks-count-as-reading",
    body: [
      "## Choosing a narration that helps rather than hinders",
      "Not all narration is equally useful, and the differences matter more for children than for adults.",
      "Pace is the first thing to check. Adult audiobooks are often read faster than a child can process, particularly a child who is also trying to follow text. A narration that feels slightly slow to the adult is usually about right for the child.",
      "Then expression. A flat reading gives the child nothing to hang meaning on; a wildly performed one, with a different cartoon voice per character, can pull attention onto the performance and away from the words. What works best is close to how a competent parent reads: clear, unhurried, with meaning in the phrasing rather than in the stunts.",
      "Then sound design. Music and effects under the words sound appealing in a sample and cost comprehension over a long listen, especially for children who find listening effortful in the first place. A plain voice is nearly always the better choice.",
      "And finally, whether the text is visible. A narration with the words on screen, highlighted as they are spoken, is doing something a plain audiobook cannot: it is pairing the sound of each word with its printed shape, hundreds of times an hour, which is very close to what learning to read consists of.",
      "## Questions parents ask, answered plainly",
      "Does listening make a child lazy about reading? There is no evidence that it does, and plenty of families report the reverse — a child who has heard a series read aloud will often pick up the next volume themselves because they cannot wait.",
      "Should a child follow the text while listening? For a child learning to decode, yes, whenever it is practical. For a confident reader listening for pleasure, it does not matter.",
      "Is it worth playing narration in the background? Not really. Background audio is mostly not processed, and a story nobody is attending to is a story wasted. Better to play nothing and keep the listening for moments when it has attention.",
      "What about screen-free listening? A speaker rather than a tablet removes the visual pull entirely, and for bedtime it is usually the better arrangement. The trade is losing the highlighted text, so it suits a child who can already read reasonably well.",
      "## What this means for a family library",
      "The practical conclusion is that a household benefits from two collections rather than one, chosen on different principles.",
      "The reading collection should sit at or a little below the child's independent level. Its job is volume and fluency, and it should feel easy. Parents systematically overestimate here, and a child grinding through books that are slightly too hard reads less overall.",
      "The listening collection should sit well above it. Its job is vocabulary, sentence structure and ideas, and it should contain books the child could not yet read alone — which is most of the good ones, for most of primary school.",
      "Held together, the two collections do what a single shelf cannot: they let a child practise at a level where they succeed while still meeting language at a level that stretches them. Neither collection is a substitute for the other, and a household that has only one is missing half the benefit.",
    ],
  },
  {
    slug: "screen-time-that-counts",
    body: [
      "## Reading the business model instead of the reviews",
      "Every app has a way of making money, and the way it makes money predicts almost everything about how it will behave in your home.",
      "An app paid for once, up front, has no reason to keep a child on it. Its incentive is that the child finishes satisfied and the parent recommends it. These apps tend to end, tend to be quiet, and tend to have no notifications.",
      "An app funded by advertising has exactly one incentive: time on device. Everything else follows from that — the autoplay, the reward loops, the difficulty tuned to keep a child close to success without reaching it. None of this is a conspiracy; it is what the revenue model asks the designers to build.",
      "An app funded by in-app purchases has a third pattern, and it is the most corrosive for children: it must make the free version frustrating enough to convert. A child playing one is being deliberately obstructed by design, and children experience that as failure rather than as a sales technique.",
      "You can usually identify the model in under a minute, and it tells you more than any review score. A parent who checks nothing else should check this.",
      "## Building the rules with the child rather than for them",
      "Rules imposed on a child are rules the child works around. Rules a child helped write are rules they will sometimes enforce on themselves, which is a different thing entirely.",
      "The conversation that works is not about limits but about categories. Ask which of their apps make them feel good afterwards and which leave them irritable. Most children over about seven can answer this accurately and are slightly surprised to be asked.",
      "From there, sorting is easy and the child does most of it. The apps that leave them flat can be moved off the home screen. The ones they are proud of can stay. A rule the child proposed is remarkably durable.",
      "The one thing worth reserving as an adult decision is the ending: when the device goes away, where it charges overnight, and whether it comes to the table. These are logistics rather than judgements, and they are easier to hold firm on precisely because they are not about the content.",
      "## The one that matters more than the three questions",
      "There is a fourth question that outranks all of them, and it is not about the app at all: is anybody else in the room?",
      "A child using an average app beside an interested adult gets more out of it than a child using an excellent app alone. The adult asks what is happening, notices when something confuses them, connects it to something outside — all the things the app cannot do.",
      "This is also, unfortunately, the expensive answer, because the whole appeal of handing over a device is that it buys the adult twenty minutes. That trade is a real one and no article should pretend otherwise.",
      "The workable compromise most families reach is that some screen time is shared and some is not, and the unshared portion is limited to the apps that passed all three questions. That way the hours where nobody is watching are the hours least likely to need watching.",
    ],
  },
  {
    slug: "dialogic-reading-questions",
    body: [
      "## What it looks like in a second language",
      "Dialogic reading works in any language, and it is unusually valuable in households where the book and the conversation are not in the same one.",
      "A parent reading an English book can perfectly well ask the questions in the home language. The child hears the story in one language, thinks and answers in another, and both get exercised. Nothing about the technique requires the adult to be fluent in the language of the text.",
      "In fact this is often the most useful version of all, because the parent who is not confident reading aloud in a second language stops needing to perform. Their job becomes asking and listening, which they can do at full strength.",
      "Where a narrated book carries the reading, the same split works: the recording handles the text, the adult handles the conversation in whichever language the family thinks in. The child gets an accurate model of the second language and a real discussion in the first.",
      "## Common mistakes, and what to do instead",
      "The first is asking questions the child cannot answer. A wh- question about something not visible in the picture is a test with no available answer, and two of those in a row will make a young child go quiet. Point at what you are asking about.",
      "The second is accepting only the answer you had in mind. A child who says the dog is sad when you thought it looked cross has given you a real answer, and following it is more productive than correcting it.",
      "The third is filling silence. Adults wait about a second before rescuing a child who has not answered. Children often need four or five. The pause feels much longer than it is, and most of the answers that never arrive were interrupted.",
      "The fourth is doing it when nobody wants to. A child who is tired, or who has just asked to be read to rather than talked with, should get what they asked for. Technique that overrides a child's stated preference stops being helpful.",
      "## Where to start tomorrow",
      "Pick a book the child already knows well — the second or third reading, not the first. Choose one question type, not five. Ask twice in the whole book.",
      "Use the response pattern on whatever comes back: repeat what they said, add a few words, move on. Do not correct anything on the first attempt.",
      "If the child talks more than usual, it worked. That is the whole measurement, and it is available immediately, which is why this is one of the few techniques parents actually keep doing after the week they read about it.",
    ],
  },
  {
    slug: "rereading-same-book-again",
    body: [
      "## A short answer for the relative who asks",
      "Somebody will eventually ask, in front of the child, why they are still on that book. It helps to have a sentence ready that does not sound defensive.",
      "\"She knows it well enough now to notice when I skip a line\" works, because it reframes the repetition as an achievement rather than a rut, and it is true. Most people hear it and are quietly impressed.",
      "What is worth avoiding is agreeing that it is a problem in the child's hearing. A four-year-old who overhears that their favourite book is boring will not choose a different book; they will simply stop saying which one they want.",
      "## The one thing worth doing while it lasts",
      "If the saturation phase is happening now, there is a small thing worth doing that costs nothing and is impossible later: write down the date and the title.",
      "Families forget which book it was. The phase is overwhelming while it lasts and then vanishes completely, and a decade on the parent remembers that there was one and cannot name it. The child usually cannot either.",
      "A line in the front of the book, or a note on a phone, is enough. It is the only part of this whole business that can be lost, and it is the part everybody later wishes they had kept.",
    ],
  },
  {
    slug: "reading-habits-family-routine",
    body: [
      "## The version that fits on a fridge",
      "One anchor, chosen from what already happens. One page, honestly, as the floor. Never miss twice. Child picks first, adult picks second. Close with a question that has no right answer.",
      "That is the whole method. Everything above is the reasoning behind it, and the reasoning is only worth having because it tells you which parts you are allowed to bend on a difficult week.",
    ],
  },
  {
    slug: "audiobooks-count-as-reading",
    body: [
      "## The short version",
      "Listening builds comprehension, vocabulary and the appetite for stories. Reading builds decoding, fluency and spelling. A child needs both, and the two are not in competition for the same hour.",
      "Give the eyes the books they can manage and the ears the books they cannot yet. Then stop worrying about which one counts, because the child is not keeping score and neither is their future reading.",
    ],
  },
  {
    slug: "screen-time-that-counts",
    body: [
      "## The three questions, one line each",
      "Who is doing the work — the child, or the screen? Does it end by itself, or is it built never to? Does anything from it walk out of the device and into the room?",
      "Two out of three is a decent app. Three out of three is worth paying for. Zero out of three is worth deleting today, and deleting one thing is a change a family can actually make this week.",
      "And the fourth question, which beats all of them: is anybody else in the room. An average app beside an interested adult does more than an excellent one alone.",
    ],
  },
  {
    slug: "dialogic-reading-questions",
    body: [
      "## Two questions to keep, if you keep nothing else",
      "\"Tell me about this page\" and \"What would you have done?\" cover most of the ground between them. The first works from about two, the second from about five, and both are safe because neither has a wrong answer.",
      "Ask one of them twice in a book, wait five seconds for the answer, repeat what you hear and add three words to it. That is dialogic reading, and it takes under a minute a night.",
    ],
  },
  {
    slug: "rereading-same-book-again",
    body: [
      "One last reassurance, for the parent reading this at the end of a long evening with the same book in their hand: nothing has gone wrong, nothing needs fixing, and the phase you are in the middle of is one of the few in childhood that ends entirely on its own.",
    ],
  },
  {
    slug: "audiobooks-count-as-reading",
    body: [
      "If you take one practical step from this article, make it the paired kind: the same book, text visible, voice reading it aloud, and the child following along with a finger or an eye. It is the format that teaches both halves at once.",
    ],
  },
  {
    slug: "screen-time-that-counts",
    body: [
      "Start with one app and one honest look over your child's shoulder this week. A family that swaps its worst screen hour for a better one has done more than a family that trimmed the total and changed nothing about what was in it.",
    ],
  },
  {
    slug: "schools-digital-library",
    body: [
      "## Where the money actually goes",
      "A school evaluating a digital library is usually shown a price per pupil per year and a catalogue size. Neither number predicts whether the thing will be used in March, and the gap between the two is where most disappointment lives.",
      "The real costs sit elsewhere. Devices have to exist and be charged. Somebody has to hold accounts, reset passwords and chase the class whose logins never worked. Teachers need enough familiarity to recommend a title rather than merely permit the platform, and that familiarity is bought with staff time nobody budgets for.",
      "Schools that get a good return almost always name a person. Not a committee — one member of staff with two hours a month who knows the catalogue, curates lists for each year group, and answers the small questions before they turn into abandonment. Where nobody owns it, the platform is enthusiastically launched in September and quietly dead by February, and the licence renews anyway.",
      "It is worth asking a vendor directly what their average weekly active use is across comparable schools, and treating a refusal to answer as an answer.",
      "## What it does that a paper library genuinely cannot",
      "Three things, and they are worth being precise about because vendors claim many more.",
      "The first is simultaneous access. Thirty children can read the same title in the same lesson without thirty copies existing, which changes what a whole-class text can be. A teacher who has ever tried to run a novel study on eleven battered copies knows exactly what this is worth.",
      "The second is reach beyond the building. A child who is ill for a fortnight, or who has moved between placements, or whose family cannot get to the public library, keeps their reading. For some children in every school this is the difference between a reading life and none.",
      "The third is the narrated text. A struggling reader can follow a story at their comprehension level rather than their decoding level, without an adult sitting beside them for forty minutes, and without being visibly given the easy book in front of their classmates. That last part matters more than it sounds.",
      "## The honest limits, stated plainly",
      "It does not replace a school library and any vendor implying otherwise should be treated with suspicion. Browsing physical shelves, being handed a book by somebody who knows you, the accident of finding something you were not looking for — none of that survives translation to a search box.",
      "It does not improve reading by itself. A platform is a shelf. Shelves do not teach. The improvement, where it happens, comes from teachers using it deliberately, and schools that buy a platform instead of teacher time reliably get nothing.",
      "It does not solve access if the devices are shared, slow or locked in a trolley that lives in another classroom. The commonest cause of a failed rollout is not the software; it is that getting the hardware takes eleven minutes out of a forty-minute lesson.",
      "And usage data is easy to misread. Minutes logged, pages turned and titles opened are all measurements of the platform, not of reading. A class can generate impressive numbers while learning nothing.",
      "## Questions worth asking, in the order that matters",
      "Start with offline. What happens on a device with no connection — does the book open, or does the child see an error? Schools with unreliable networks should treat this as the first question rather than the last.",
      "Then accessibility. Is there dyslexia-friendly typesetting, adjustable spacing, colour overlays, and narration on every title rather than a subset? Ask which titles are narrated, because \"audio available\" often means a quarter of the catalogue.",
      "Then data. What is collected about each child, where does it live, how long is it kept, and can it be exported and deleted on request? A vendor who cannot answer this quickly has not thought about it.",
      "Then exit. If the school leaves after two years, what happens to reading records and to any content the school added? Platforms that make leaving expensive should be priced accordingly.",
      "And finally, curriculum fit. Not \"how many books\" but how many books this school's year groups will actually use. A catalogue of forty thousand titles with two hundred suitable for Year 3 is a catalogue of two hundred titles.",
      "## A modest way to start",
      "The rollouts that survive tend to start small on purpose. One year group, one term, one named teacher, one clear question to answer at the end.",
      "That question should be specific enough to have a wrong answer. \"Did Year 4 read more?\" is not measurable. \"Did the eight children on the reading support list finish more books than last term?\" is, and it points at the group the platform is most likely to help.",
      "If the answer is yes, expand with evidence. If the answer is no, the school has spent one term and one year group finding out, rather than three years and a whole-school licence.",
      "## What the children say, if anybody asks",
      "It is worth asking them, and it is the step most often skipped.",
      "Children are usually clear and unsentimental about this. They tend to like the narration, like being able to read in bed without anybody noticing what they chose, and dislike anything that tracks their progress visibly against their classmates.",
      "That last point comes up again and again, and it is the one schools most often get wrong. A leaderboard turns a reading platform into a competition, and children who read slowly stop opening it. If a platform's headline feature is a class ranking, the school is buying something that will work well for the children who already read and badly for the ones it was bought for.",
    ],
  },
  {
    slug: "early-literacy-milestones",
    body: [
      "## Why the normal range is so wide, and why that is not a comfort",
      "Reading is the least natural thing children learn. Speech arrives on a schedule because the brain is built for it; reading has to be assembled out of parts that evolved for other jobs, and the assembly takes different children different amounts of time.",
      "This is why the normal range for learning to read is measured in years rather than months, and why two children in the same class can be eighteen months apart with nothing wrong with either.",
      "Being told the range is wide is meant to reassure and usually does not, because it also means a parent cannot tell from the range alone whether their child is fine or in trouble. So the useful question is not \"is my child on time\" but \"is my child moving\". A child who is progressing slowly is in a completely different position from a child who has not moved in a year, and the second is the one worth acting on.",
      "## Ages two to four, in more detail",
      "What is being built here is not reading. It is the idea that print exists and means something, and it is built almost entirely through being read to and talked with.",
      "The observable signs are small. The child holds a book the right way up. They turn pages, roughly in order. They point at the words rather than only the pictures when asked where the story is. They recognise a logo, a sign, the first letter of their own name.",
      "The most important thing happening at this age is invisible and it is vocabulary. The number of words a child understands at four is one of the better predictors of how reading goes at eight, and it is built by conversation more than by anything else. A child who is talked with all day is being prepared for reading whether or not a book is present.",
      "Rhyme also matters more than it looks. A child who can tell you that cat and hat sound the same is hearing that words are made of parts, and that is the single insight the whole alphabetic system rests on.",
      "## Ages four to six, and what cracking the code looks like",
      "This is the stretch where letters stop being shapes and become sounds, and it is rarely smooth. Most children go through a period of sounding out every word painfully, and it looks like a problem to parents while it is exactly the process working.",
      "Signs it is going well: the child can hear the first sound in a word and give you another word starting the same way; they know most letter sounds, not necessarily names; they can blend three sounds into a word out loud; they begin to recognise a handful of common words on sight rather than sounding them out.",
      "Reversed letters are normal here and stay normal for longer than most parents expect. Writing b for d, or a whole word mirrored, is a spatial habit rather than a reading disorder, and it usually resolves without comment.",
      "What is not helpful at this stage is speed. A child pushed to read faster before blending is secure will guess, and guessing becomes a habit that has to be undone later. Slow and accurate beats quick and approximate every time.",
      "## Ages six to eight, from decoding to actually reading",
      "The shift here is that the machinery becomes automatic, and automatic is the whole point: attention that was spent on letters becomes available for meaning.",
      "You can hear it happening. Reading aloud stops being word-by-word and starts having phrasing. The child self-corrects without being told, going back over a sentence that did not make sense. They read something silently and laugh, which is the clearest sign of all that comprehension has arrived.",
      "This is also the stage where reading aloud at home most often stops, and it should not. Listening comprehension is still years ahead of reading comprehension, and the books a seven-year-old can follow by ear are much richer than the ones they can decode. Both should be running.",
      "Comprehension problems that were hidden by decoding difficulty sometimes surface here, in a child who reads fluently and cannot say what happened. That is worth noticing, because it is easy to miss in a child who sounds like a good reader.",
      "## The few signs that are actually worth acting on",
      "Most worries at these ages resolve. A short list does not, and it is worth knowing which is which.",
      "A child of five or six who cannot hear rhyme at all, after plenty of exposure, is worth mentioning to a teacher. Difficulty with the sound structure of words is the most consistent early signal of dyslexia and it can be found before reading has properly begun.",
      "A child who has made no visible progress across a full school year, despite teaching, is worth a conversation. Slow is normal; static is information.",
      "A family history matters. Dyslexia runs strongly in families, and a struggling child with a struggling parent should be assessed sooner rather than later.",
      "And distress is a reason on its own. A seven-year-old who cries about reading, or who has decided they are stupid, needs help with that regardless of where their decoding sits, because the belief does more damage over time than the gap.",
      "## What to do while you wait and see",
      "Almost everything useful a parent can do is the same at every age on this list, which is either reassuring or frustrating depending on the day.",
      "Read to them, past the point where they can read alone. Talk with them about things other than school. Let them choose books that are too easy, because volume at an easy level is what builds fluency. Keep the reading slot short enough to survive a bad week.",
      "And avoid comparing out loud, to them or in front of them. A child who has been told they are behind will read less, which makes them further behind. Of all the variables in this article, that is the one a parent controls completely.",
    ],
  },
  {
    slug: "schools-digital-library",
    body: [
      "## Fitting it into a week that is already full",
      "The schools where a digital library becomes ordinary rather than exceptional tend to attach it to something already in the timetable, rather than creating a new slot for it.",
      "Silent reading is the obvious host. A class that already reads for twenty minutes after lunch can spend some of those minutes on a device without anything else changing, and the children who benefit most — the ones who cannot find a paper book at their level that is not visibly babyish — get their fix quietly.",
      "Home reading is the second. A book that travels home on a device cannot be forgotten in a locker or left at the other parent's house, which removes two of the three commonest reasons home reading fails.",
      "Guided groups are the third and the most valuable. Simultaneous access means a group of six can all be on the same page of the same text, which is exactly the arrangement paper copies make expensive.",
      "What does not work is a standalone lesson called something like Digital Reading. It competes with everything else for time, it is the first thing cancelled in an assembly week, and it teaches children that this is a special activity rather than a normal way to read.",
      "## Talking to families about it",
      "Parents hear \"screens in school\" and a proportion of them will be uneasy, sometimes strongly. That unease deserves a straight answer rather than a leaflet.",
      "The straight answer is that a narrated e-book and a video feed are not the same category of thing, and that the school is using one and not the other. Most parents accept this immediately when it is said plainly; very few accept it when it is buried in a policy document.",
      "It also helps to be honest that the school is not replacing paper. Families who are told the library is still there, still funded, still visited, stop worrying about the device almost entirely.",
      "And the offer worth making is access at home for free. A platform the school pays for that children can also use in the evening turns a school expense into a family resource, and it is the single thing parents mention most when it works.",
    ],
  },
  {
    slug: "early-literacy-milestones",
    body: [
      "## What the milestones do not measure",
      "Every list of this kind measures the mechanics, because the mechanics are what can be observed. Two things that matter as much are missing from all of them.",
      "The first is whether the child likes it. A seven-year-old who decodes accurately and avoids books is in a worse long-term position than one who decodes slowly and asks for another chapter, because volume is what closes gaps and volume comes from wanting to.",
      "The second is background knowledge. Comprehension is not a general skill that transfers; a child understands a text about a farm largely to the extent that they know something about farms. This is why a child can read fluently and understand little, and why trips, conversations and non-fiction do more for comprehension at eight than comprehension exercises do.",
      "Neither appears on a milestone chart, and both are more predictive at twelve than anything that does.",
      "## What a school assessment actually involves",
      "Parents often delay asking for an assessment because they imagine something formal and frightening happening to their child. It is worth knowing what it usually is.",
      "In most cases the first step is not an assessment at all — it is a teacher listening to the child read for ten minutes and doing a short check of letter sounds and blending. That alone identifies a good proportion of difficulties, and it costs nothing.",
      "If more is needed, the next stage is typically a set of short games-like tasks: repeating made-up words, naming pictures quickly, remembering sequences. Children generally find these unremarkable and often enjoy them.",
      "What comes back is a description of where the difficulty sits, which is the useful part. \"Struggles with reading\" is not actionable. \"Blending is secure, phoneme discrimination is weak\" tells a teacher exactly what to do on Monday.",
      "Asking early costs very little and waiting costs a great deal, because the gap between a struggling reader and their class widens every term through no additional fault of the child's.",
    ],
  },
  {
    slug: "schools-digital-library",
    body: [
      "## A one-page checklist for the decision meeting",
      "Does it work offline, on the devices this school actually owns, on the network this school actually has? Is every title narrated, or only some — and which? Is the typesetting adjustable for dyslexic readers without a separate licence?",
      "What is collected about each child, who holds it, and how is it deleted? What happens to reading records if the school leaves? How many titles suit the specific year groups being licensed, as opposed to the catalogue total?",
      "Who in this building will own it, and do they have two hours a month? What is the one question the first term is meant to answer, and what result would count as a no?",
      "A vendor who answers all of these without hedging is worth a trial. A vendor who answers the catalogue-size question three times is answering a different question, and the school should notice.",
    ],
  },
  {
    slug: "early-literacy-milestones",
    body: [
      "## The sentence worth remembering",
      "Wide normal range, steady movement, and enjoyment intact — if those three are true, a child who looks behind their classmates is very probably fine, and the most useful thing an adult can do is keep reading to them and stop counting.",
      "If movement has stopped for a year, or rhyme never arrived, or the child has decided they are stupid, that is the point to ask for help — early, without drama, and without ever saying the word behind where the child can hear it.",
      "Everything else on this page is detail. Those two paragraphs are the article.",
    ],
  }
];

/**
 * Apply the expansions to the live post list, in place.
 *
 * Two things happen per post: the new body items are appended, and `minutes`
 * is recomputed from the finished text. The second matters — a post that was
 * honestly labelled "4 min" while it was 240 words would be dishonestly
 * labelled "4 min" at 2,000, and a reader who finishes in fifteen has been
 * told something untrue by the page.
 */
export function applyBlogExpansions(all: BlogPost[]): void {
  const bySlug = new Map(all.map((p) => [p.slug, p]));
  for (const exp of BLOG_EXPANSIONS) {
    const post = bySlug.get(exp.slug);
    if (!post) continue;
    post.body.push(...exp.body);
  }
  // Re-measure every post, not only the expanded ones: several were carrying a
  // declared reading time that never matched their length in the first place.
  for (const post of all) {
    let words = 0;
    for (const item of post.body) words += item.trim().match(/\S+/g)?.length ?? 0;
    post.minutes = Math.max(1, Math.round(words / 200));
  }
}
