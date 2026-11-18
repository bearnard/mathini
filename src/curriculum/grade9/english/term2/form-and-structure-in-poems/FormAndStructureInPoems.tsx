import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PoemBox } from '../../../../../components/subjects/lesson/PoemBox';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

// Poems are either written for this lesson (and say so) or public domain (author, title and year are given). See docs/notes/g9-poetry-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Stanza forms and free verse",
    content: slide(
      <>
        <Rule>{"A stanza of two lines is a couplet, of three lines a tercet, and of four lines a quatrain. Rhymed verse follows a pattern of rhyme and rhythm. Free verse has no regular rhyme or rhythm, and the poet decides the line breaks to shape the meaning."}</Rule>
        <PoemBox label={"Poem A"} provenance={"Original poem written for this lesson, in free verse."} lines={[
            "My mother kneads the dough",
            "as if she were arguing with it",
            "and winning.",
            "",
            "The kitchen fills with warm,",
            "slow breath.",
            "",
            "By morning there is bread,",
            "and the arguments are forgotten.",
        ]} />
        <FactCards
          cards={[
            { title: "Couplet", line1: "a stanza of", line2: "two lines" },
            { title: "Tercet", line1: "a stanza of", line2: "three lines" },
            { title: "Quatrain", line1: "a stanza of", line2: "four lines" },
            { title: "Free verse", line1: "no regular rhyme", line2: "or rhythm" },
          ]}
          aria={"Stanza forms. A couplet has two lines. A tercet has three lines. A quatrain has four lines. Free verse has no regular rhyme or rhythm, and the poet chooses the line breaks."}
        />
        <Worked
          title={"Look at Poem A"}
          steps={[
            "Poem A has three stanzas: a tercet, a couplet and a couplet.",
            "It has no regular rhyme or rhythm, so it is free verse.",
            "The short lines \"and winning.\" and \"slow breath.\" make the reader pause, so those ideas stand out.",
          ]}
        />
        <Mistake>{"Thinking that free verse has no form at all. The poet still chooses line breaks, stanzas and pauses carefully."}</Mistake>
      </>,
    ),
  },
  {
    title: "Enjambment and caesura",
    content: slide(
      <>
        <Rule>{"In an end-stopped line the sense and the punctuation stop at the line end. In enjambment the sentence runs on into the next line without a pause. A caesura is a pause inside a line, made by punctuation. Poets use these to control the pace and to stress words."}</Rule>
        <PoemBox label={"Poem A"} provenance={"Original poem written for this lesson, in free verse."} lines={[
            "My mother kneads the dough",
            "as if she were arguing with it",
            "and winning.",
            "",
            "The kitchen fills with warm,",
            "slow breath.",
            "",
            "By morning there is bread,",
            "and the arguments are forgotten.",
        ]} />
        <PoemBox label={"Poem B"} provenance={"Public domain: William Shakespeare, \"Sonnet 18\", 1609 (complete)."} lines={[
            "Shall I compare thee to a summer's day?",
            "Thou art more lovely and more temperate:",
            "Rough winds do shake the darling buds of May,",
            "And summer's lease hath all too short a date;",
            "Sometime too hot the eye of heaven shines,",
            "And often is his gold complexion dimm'd;",
            "And every fair from fair sometime declines,",
            "By chance or nature's changing course untrimm'd;",
            "But thy eternal summer shall not fade,",
            "Nor lose possession of that fair thou ow'st;",
            "Nor shall Death brag thou wander'st in his shade,",
            "When in eternal lines to time thou grow'st:",
            "So long as men can breathe or eyes can see,",
            "So long lives this, and this gives life to thee.",
        ]} />
        <FactCards
          cards={[
            { title: "End-stopped", line1: "the sense stops at", line2: "the end of the line" },
            { title: "Enjambment", line1: "the sentence runs on", line2: "to the next line" },
            { title: "Caesura", line1: "a pause inside", line2: "a line" },
            { title: "Effect", line1: "pace and", line2: "emphasis" },
          ]}
          aria={"Enjambment and caesura. In an end-stopped line the sense stops at the line end. In enjambment the sentence runs on into the next line. A caesura is a pause inside a line. They control pace and emphasis."}
        />
        <Worked
          title={"Look at Poems A and B"}
          steps={[
            "Poem B, line 1, \"Shall I compare thee to a summer's day?\", is end-stopped: the question ends at the line end.",
            "Poem A, lines 1 and 2, \"My mother kneads the dough / as if she were arguing with it\", have no punctuation at the line ends, so the sentence runs on: that is enjambment, and it makes the lines flow like kneading.",
            "Poem B, line 14, \"So long lives this, and this gives life to thee.\", has a comma inside the line: that pause is a caesura.",
          ]}
        />
        <Mistake>{"Confusing enjambment with a missing line break. Enjambment is a choice: the sentence deliberately runs on over the line end."}</Mistake>
      </>,
    ),
  },
  {
    title: "The sonnet",
    content: slide(
      <>
        <Rule>{"A sonnet has fourteen lines. An English (Shakespearean) sonnet has three quatrains and a final couplet, with the rhyme scheme ABAB CDCD EFEF GG. Many sonnets have a turn in thought, called the volta, often before the final couplet. The form suits an argument that is developed and then summed up."}</Rule>
        <PoemBox label={"Poem B"} provenance={"Public domain: William Shakespeare, \"Sonnet 18\", 1609 (complete)."} lines={[
            "Shall I compare thee to a summer's day?",
            "Thou art more lovely and more temperate:",
            "Rough winds do shake the darling buds of May,",
            "And summer's lease hath all too short a date;",
            "Sometime too hot the eye of heaven shines,",
            "And often is his gold complexion dimm'd;",
            "And every fair from fair sometime declines,",
            "By chance or nature's changing course untrimm'd;",
            "But thy eternal summer shall not fade,",
            "Nor lose possession of that fair thou ow'st;",
            "Nor shall Death brag thou wander'st in his shade,",
            "When in eternal lines to time thou grow'st:",
            "So long as men can breathe or eyes can see,",
            "So long lives this, and this gives life to thee.",
        ]} />
        <FactCards
          cards={[
            { title: "14 lines", line1: "three quatrains", line2: "and a couplet" },
            { title: "Scheme", line1: "ABAB CDCD EFEF GG", line2: "in Poem A" },
            { title: "Volta", line1: "a turn in", line2: "the thought" },
            { title: "Couplet", line1: "sums up the", line2: "argument" },
          ]}
          aria={"The sonnet. A sonnet has fourteen lines. A Shakespearean sonnet has three quatrains and a couplet, with the rhyme scheme ABAB CDCD EFEF GG. Many sonnets have a turn in thought, called the volta, and the couplet sums up the argument."}
        />
        <Worked
          title={"Look at Poem B"}
          steps={[
            "Lines 1 to 4 (quatrain 1) rhyme day/May and temperate/date: ABAB.",
            "Lines 5 to 8 and 9 to 12 are quatrains two and three. The turn comes at line 9, \"But thy eternal summer shall not fade\": the argument moves from the faults of summer to the lasting beauty of the loved one.",
            "Lines 13 and 14, see/thee, form the couplet that sums up: this poem will keep the loved one alive.",
          ]}
        />
        <Mistake>{"Counting stanzas as in other poems. A sonnet is a single block of fourteen lines, usually printed without breaks, and the quatrains are found from the rhyme."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "What do we call stanzas of two, three and four lines?",
          "What is free verse?",
          "What is enjambment?",
          "How many lines are in a sonnet?",
        ]}
        answers={[
          "Couplet, tercet and quatrain.",
          "Poetry without regular rhyme or rhythm.",
          "A sentence that runs on from one line to the next without a pause at the line end.",
          "Fourteen.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What do we call a stanza of three lines?",
    options: ["A couplet", "A quatrain", "A tercet", "A sonnet"],
    answer: "A tercet",
    explanation: "A tercet has three lines.",
  },
  {
    prompt: "What do we call a stanza of four lines?",
    options: ["A quatrain", "A couplet stanza", "A tercet stanza", "A refrain stanza"],
    answer: "A quatrain",
    explanation: "A quatrain has four lines.",
  },
  {
    prompt: "What do we call a stanza of two lines?",
    options: ["A tercet", "A quatrain", "A sonnet", "A couplet"],
    answer: "A couplet",
    explanation: "A couplet has two lines.",
  },
  {
    prompt: "Which poem is free verse?",
    options: ["One with a rhyme in every line of it", "One with no set rhyme or rhythm", "One with fourteen lines in total", "One with a refrain in each verse"],
    answer: "One with no set rhyme or rhythm",
    explanation: "Free verse has no set pattern of rhyme or rhythm.",
  },
  {
    prompt: "What does a poet gain by using free verse?",
    options: ["A fixed pattern to follow in each line", "A rhyme in every line", "Freedom to shape the lines", "A longer poem"],
    answer: "Freedom to shape the lines",
    explanation: "The poet chooses line breaks and pauses.",
  },
  {
    prompt: "What is an end-stopped line?",
    options: ["The sense stops at the line end", "A line with no words in it", "A line that rhymes with the title", "A line that runs on into the next"],
    answer: "The sense stops at the line end",
    explanation: "The punctuation and the meaning both stop at the end.",
  },
  {
    prompt: "What is enjambment?",
    options: ["A rhyme at the end of the line of verse", "A pause inside a line of the poem", "A line repeated as a refrain in a poem", "The sentence runs on to the next line"],
    answer: "The sentence runs on to the next line",
    explanation: "The sense continues over the line break.",
  },
  {
    prompt: "What is a caesura?",
    options: ["A line that runs on", "A pause inside a line", "A line that returns", "A rhyme in the middle of a stanza"],
    answer: "A pause inside a line",
    explanation: "Punctuation often creates a pause in the middle of a line.",
  },
  {
    prompt: "Which effect can enjambment have?",
    options: ["It can make the poem rhyme", "It can make the stanza longer", "It can make the poem flow", "It can change the title of it"],
    answer: "It can make the poem flow",
    explanation: "The reader runs on without stopping.",
  },
  {
    prompt: "How many lines does a sonnet have?",
    options: ["14 lines", "10 lines", "12 lines", "16 lines in two stanzas"],
    answer: "14 lines",
    explanation: "A sonnet has fourteen lines.",
  },
  {
    prompt: "Which rhyme scheme belongs to a Shakespearean sonnet?",
    options: ["AABB CCDD EEFF GG", "ABCB DEFE GHIH JJ", "ABBA ABBA CDC DCD", "ABAB CDCD EFEF GG"],
    answer: "ABAB CDCD EFEF GG",
    explanation: "It has three quatrains and a couplet.",
  },
  {
    prompt: "What is the volta in a sonnet?",
    options: ["The last word of the poem", "The turn in thought", "The title of the sonnet", "The first quatrain"],
    answer: "The turn in thought",
    explanation: "The volta is where the thought changes direction.",
  },
  {
    prompt: "What does the final couplet of a sonnet often do?",
    options: ["It begins the poem", "It changes the speaker", "It sums up the argument", "It adds a new title to it"],
    answer: "It sums up the argument",
    explanation: "The couplet gives a conclusion.",
  },
  {
    prompt: "A poem has three lines in its first stanza and two in each of the others. Which description is correct?",
    options: ["A tercet then couplets", "Four quatrains", "A sonnet in fourteen lines", "Two quatrains and a tercet"],
    answer: "A tercet then couplets",
    explanation: "A three-line stanza is a tercet and a two-line stanza is a couplet.",
  },
];

const FormAndStructureInPoems = () => (
  <CapsSubjectTopic
    title={"Form and Structure in Poems"}
    subtitle={"Stanza forms, free verse, enjambment, caesura and the sonnet"}
    learnSteps={learnSteps}
    task={"gr9-form-and-structure-in-poems-t2"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default FormAndStructureInPoems;
