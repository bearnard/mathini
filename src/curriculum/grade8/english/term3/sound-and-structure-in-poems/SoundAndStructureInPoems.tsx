import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PoemBox } from '../../../../../components/subjects/lesson/PoemBox';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

// Poems are either written for this lesson (and say so) or public domain (author, title and year are given). See docs/notes/g8-poetry-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Rhyme and rhyme scheme",
    content: slide(
      <>
        <Rule>{"Words rhyme when their endings sound the same, such as day and play. The rhyme scheme is the pattern of rhymes at the ends of lines. Give a letter to each new end sound: the first sound is A, the next new sound is B, and a repeated sound gets its letter again."}</Rule>
        <PoemBox label={"Poem A"} provenance={"Original poem written for this lesson."} lines={[
            "The puddles hold the sky today,",
            "the gutters gargle, gulp and gleam,",
            "the children splash and run and play",
            "and every window starts to steam.",
        ]} />
        <FactCards
          cards={[
            { title: "Rhyme", line1: "endings that sound", line2: "the same" },
            { title: "Scheme", line1: "a pattern of", line2: "letters, such as ABAB" },
            { title: "A", line1: "the first end sound", line2: "in the poem" },
            { title: "B", line1: "the next new", line2: "end sound" },
          ]}
          aria={"Rhyme and rhyme scheme. Words rhyme when their endings sound the same. The rhyme scheme is the pattern of letters, such as ABAB. A is the first end sound and B is the next new end sound."}
        />
        <Worked
          title={"Mark Poem A"}
          steps={[
            "Line 1 ends with \"today\": call it A.",
            "Line 2 ends with \"gleam\", a new sound: B. Line 3 ends with \"play\", which rhymes with \"today\": A. Line 4 ends with \"steam\", which rhymes with \"gleam\": B.",
            "The rhyme scheme is ABAB.",
          ]}
        />
        <Mistake>{"Choosing words that look alike but sound different. Rhyme depends on sound, not spelling: \"gleam\" rhymes with \"steam\", and \"love\" does not rhyme with \"move\"."}</Mistake>
      </>,
    ),
  },
  {
    title: "Rhythm, alliteration and repetition",
    content: slide(
      <>
        <Rule>{"Rhythm is the beat made by stressed and unstressed syllables. Alliteration is the repetition of the same sound at the start of words close together. Repetition of words or lines gives emphasis and a pattern. Together they give a poem its music."}</Rule>
        <PoemBox label={"Poem B"} provenance={"Public domain: Robert Louis Stevenson, \"From a Railway Carriage\", 1885 (first four lines)."} lines={[
            "Faster than fairies, faster than witches,",
            "Bridges and houses, hedges and ditches;",
            "And charging along like troops in a battle,",
            "All through the meadows the horses and cattle:",
        ]} />
        <PoemBox label={"Poem C"} provenance={"Public domain: William Blake, \"The Tyger\", 1794 (first stanza)."} lines={[
            "Tyger Tyger, burning bright,",
            "In the forests of the night;",
            "What immortal hand or eye,",
            "Could frame thy fearful symmetry?",
        ]} />
        <FactCards
          cards={[
            { title: "Rhythm", line1: "the beat of stressed", line2: "and unstressed syllables" },
            { title: "Alliteration", line1: "the same sound at the", line2: "start of nearby words" },
            { title: "Repetition", line1: "words or lines that", line2: "return for emphasis" },
            { title: "Music", line1: "sound that adds", line2: "to the meaning" },
          ]}
          aria={"Rhythm, alliteration and repetition. Rhythm is the beat of stressed and unstressed syllables. Alliteration is the same sound at the start of nearby words. Repetition returns words or lines for emphasis. Together they add music to the poem."}
        />
        <Worked
          title={"Find them in Poems B and C"}
          steps={[
            "Poem B: \"Faster than fairies, faster than witches\" repeats \"faster than\" and has f and w sounds. The quick beat makes us feel the train rushing.",
            "Poem B: \"hedges and ditches\" and \"bridges and houses\" repeat the same pattern, so the lines seem to rattle past like the scenery.",
            "Poem C: \"Tyger Tyger, burning bright\" repeats the name and has a strong, steady beat, like a drum.",
          ]}
        />
        <Mistake>{"Saying that alliteration means the same letter. It is the same sound: \"phone\" and \"fun\" alliterate, even though they begin with different letters."}</Mistake>
      </>,
    ),
  },
  {
    title: "Structure, couplets and the refrain",
    content: slide(
      <>
        <Rule>{"Lines that rhyme in pairs are called couplets (scheme AABB). A refrain is a line or group of lines that returns in a poem. The structure, which includes how many lines are in each stanza and how they rhyme, shapes how the poem sounds and what it stresses."}</Rule>
        <PoemBox label={"Poem D"} provenance={"Public domain: Christina Rossetti, \"Who Has Seen the Wind?\", 1872."} lines={[
            "Who has seen the wind?",
            "Neither I nor you:",
            "But when the leaves hang trembling,",
            "The wind is passing through.",
            "",
            "Who has seen the wind?",
            "Neither you nor I:",
            "But when the trees bow down their heads,",
            "The wind is passing by.",
        ]} />
        <FactCards
          cards={[
            { title: "Couplet", line1: "two lines that", line2: "rhyme: AABB" },
            { title: "Refrain", line1: "a line that", line2: "returns in the poem" },
            { title: "Stanza", line1: "lines grouped to", line2: "organise ideas" },
            { title: "Effect", line1: "the pattern stresses", line2: "a main idea" },
          ]}
          aria={"Structure. A couplet is two lines that rhyme, as in the pattern AABB. A refrain is a line that returns in the poem. A stanza groups lines to organise ideas. The pattern stresses a main idea."}
        />
        <Worked
          title={"Look at Poems B, C and D"}
          steps={[
            "Poem B: witches and ditches rhyme in a couplet, and battle and cattle in the next couplet: AABB.",
            "Poem C: bright and night rhyme, and eye and symmetry rhyme in a pair: AABB.",
            "Poem D: lines 2 and 4 rhyme (you and through), the first and fifth lines repeat as a refrain, and the question returns in each stanza.",
          ]}
        />
        <Mistake>{"Treating a refrain as a mistake or padding. A refrain is a deliberate choice that stresses an idea or mood."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "What is a rhyme scheme?",
          "What is alliteration?",
          "What is a refrain?",
          "What is a couplet?",
        ]}
        answers={[
          "The pattern of end rhymes, shown with letters such as ABAB.",
          "The repetition of the same sound at the start of words that are close together.",
          "A line or group of lines that returns in a poem.",
          "Two lines that rhyme next to each other.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which pair of words rhymes?",
    options: ["Cough and dough", "Bread and bead", "Light and night", "Cost and most"],
    answer: "Light and night",
    explanation: "Light and night end with the same sound.",
  },
  {
    prompt: "What is the rhyme scheme of this poem? 'The sun comes up, / the cock will crow, / the night is gone, / the dew will go.' (A / marks the end of a line.)",
    options: ["ABCB", "AABB", "ABAB", "ABBA"],
    answer: "ABCB",
    explanation: "The second and fourth lines rhyme.",
  },
  {
    prompt: "What is the rhyme scheme of this poem? 'We climbed the hill, / we crossed the stream, / we sat and chill, / we watched it gleam.'",
    options: ["AABB", "ABBA", "ABCB", "ABAB"],
    answer: "ABAB",
    explanation: "Hill rhymes with chill, and stream with gleam: ABAB.",
  },
  {
    prompt: "What is the rhyme scheme when line 1 rhymes with line 2 and line 3 rhymes with line 4?",
    options: ["ABAB", "AABB", "ABBA", "ABCB"],
    answer: "AABB",
    explanation: "This pattern is made of two couplets.",
  },
  {
    prompt: "What is a couplet?",
    options: ["A line that returns in a poem", "Four lines of a stanza", "Two lines that rhyme", "A word that sounds like a noise"],
    answer: "Two lines that rhyme",
    explanation: "A couplet is a pair of rhyming lines.",
  },
  {
    prompt: "Which line has alliteration?",
    options: ["The silver snake slid silently away", "The snake went home to the rock by the river", "The snake is a long reptile found in Africa", "The snake sat quietly on the warm rock"],
    answer: "The silver snake slid silently away",
    explanation: "The s sound is repeated at the start of words.",
  },
  {
    prompt: "Which sentence is alliterative?",
    options: ["Three bears walked slowly home from the hills", "A bear is a big animal in the woods", "The bears were in the woods by the river", "Big brown bears bounded by the bush"],
    answer: "Big brown bears bounded by the bush",
    explanation: "The b sound is repeated.",
  },
  {
    prompt: "What is rhythm in a poem?",
    options: ["The pattern of rhymes at line ends", "The beat of the syllables", "The picture a poem makes", "The title of the poem"],
    answer: "The beat of the syllables",
    explanation: "Rhythm is the pattern of beats.",
  },
  {
    prompt: "What does a refrain do in a poem?",
    options: ["It ends the poem for good", "It names the poet in the line", "It repeats to stress an idea", "It changes the speaker midway"],
    answer: "It repeats to stress an idea",
    explanation: "The returning line stresses what matters.",
  },
  {
    prompt: "Which of these is repetition?",
    options: ["'Never again, never again'", "'I said it was over, and went home'", "'The room was cold, and then quiet'", "'Over the hills, we went at dawn'"],
    answer: "'Never again, never again'",
    explanation: "The phrase never again is repeated.",
  },
  {
    prompt: "Which effect can a fast rhythm have?",
    options: ["It can make the poem sound slow and sleepy", "It can make the poem rhyme", "It can make the lines longer", "It can make the poem feel quick"],
    answer: "It can make the poem feel quick",
    explanation: "A quick beat suggests speed or excitement.",
  },
  {
    prompt: "Why do poets use rhyme?",
    options: ["To fill space on the page", "To make the poem musical", "To make words harder to read", "To replace the title"],
    answer: "To make the poem musical",
    explanation: "Rhyme adds music and helps us remember.",
  },
  {
    prompt: "Which pair of words does NOT rhyme?",
    options: ["Gleam and steam", "Play and today", "Love and move", "Light and flight"],
    answer: "Love and move",
    explanation: "Love and move are spelled alike at the end but sound different.",
  },
  {
    prompt: "Which sound device is shown in 'the buzzing bees bumbled by'?",
    options: ["Alliteration", "A simile with like", "A refrain at the end", "A couplet of two lines"],
    answer: "Alliteration",
    explanation: "The b sound begins several words.",
  },
];

const SoundAndStructureInPoems = () => (
  <CapsSubjectTopic
    title={"Sound and Structure in Poems"}
    subtitle={"Rhyme and rhyme scheme, rhythm, alliteration, repetition and the refrain"}
    learnSteps={learnSteps}
    task={"gr8-sound-and-structure-in-poems-t3"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default SoundAndStructureInPoems;
