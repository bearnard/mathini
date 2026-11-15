import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PoemPicture } from '../../../../../components/diagrams/english/Grade7EnglishPictures';
import { POEM, lastWord, poemLines, rhymeScheme } from '../../../../../components/diagrams/english/grade7english';

// The poem is original and lives in grade7english.ts, where a test checks its rhymes.
const lines = poemLines();
const scheme = rhymeScheme(lines);
const line = (n: number) => lines[n - 1].text;
const rhymePair = (a: number, b: number) => `“${lastWord(line(a))}” and “${lastWord(line(b))}”`;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Lines and stanzas',
    content: slide(
      <>
        <Rule>A poem is written in lines. A <strong>stanza</strong> is a group of lines, like a paragraph in a poem. This poem has {lines.length} lines in {POEM.stanzas.length} stanzas of four lines each.</Rule>
        <PoemPicture />
        <Worked
          title="Count and describe"
          steps={[
            <>Look for the gap between groups of lines. That marks a new stanza.</>,
            <>Stanza 1 is lines 1 to 4. Stanza 2 is lines 5 to 8.</>,
            <>Stanza 1 is about a quiet morning walk. Stanza 2 shows Gogo waiting at the gate while the speaker walks on, sure of not being late.</>,
          ]}
        />
        <Mistake>Calling the whole poem a stanza. The stanza is one group of lines; a poem usually has several.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rhyme',
    content: slide(
      <>
        <Rule><strong>Rhyme</strong> is a pattern of similar sounds at the ends of words, often at line endings. We label each new end sound A, B, C and so on to show the rhyme scheme.</Rule>
        <PoemPicture rhyme />
        <Worked
          title="Find the rhymes in stanza 1"
          steps={[
            <>Read the end words: {lines.slice(0, 4).map((l) => lastWord(l.text)).join(', ')}.</>,
            <>Lines 1 and 3 rhyme: {rhymePair(1, 3)}. Call that sound A.</>,
            <>Lines 2 and 4 rhyme: {rhymePair(2, 4)}. Call that sound B. The scheme is <strong>{scheme.slice(0, 4).join(' ')}</strong>.</>,
          ]}
        />
        <Mistake>Judging rhyme by spelling alone. Rhyme is about sound: listen to the ending of each word when you read the line aloud.</Mistake>
      </>,
    ),
  },
  {
    title: 'Imagery',
    content: slide(
      <>
        <Rule><strong>Imagery</strong> is language that creates pictures in the mind. It can describe things we see, hear, smell, taste or touch.</Rule>
        <Worked
          title={`Find the imagery in line 2: “${line(2)}”`}
          steps={[
            <>Ask: what can I picture? A silver mist drifting over a road.</>,
            <>The words “silver” and “drifts” help us see colour and slow movement.</>,
            <>This is imagery, because it paints a picture. Another example: “a silver moon smiling over quiet roofs”.</>,
          ]}
        />
        <Mistake>Thinking imagery means drawings or pictures on the page. Imagery is made of words that help readers imagine sights, sounds and feelings.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tone and line references',
    content: slide(
      <>
        <Rule><strong>Tone</strong> is the attitude or feeling in the poem. Read the word choice for clues. A <strong>line reference</strong> such as “lines 5 to 8” tells you exactly where to find your evidence.</Rule>
        <Worked
          title="How does the speaker feel about the walk in lines 5 to 8?"
          steps={[
            <>Go to lines 5 to 8, as the reference says.</>,
            <>Find clues: “{line(5)}” and “{line(8)}”.</>,
            <>The words “heart is light” and “will not be late” show a cheerful, eager tone. Quote them as evidence.</>,
          ]}
        />
        <Mistake>Answering from general ideas and ignoring the line numbers. A line reference points to the exact words, so quote them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Linking poems to prescribed texts',
    content: slide(
      <>
        <Rule>You can connect a poem to a novel, story or play you are studying by comparing <strong>themes</strong>. Ask what big idea each text shows, then say how the ideas are alike or different.</Rule>
        <Worked
          title="Compare this poem with “The Whistle” (a story from the story-study lesson)"
          steps={[
            <>Poem theme: the speaker feels hopeful and loved because someone waits at the gate.</>,
            <>Story theme: honesty and responsibility solve problems.</>,
            <>Link: both texts show characters facing a task. This poem is cheerful, while the story builds tension before the relief at the end. Quote evidence from each.</>,
          ]}
        />
        <Mistake>Turning the comparison into a retelling or skipping evidence. Name the themes, compare them, and support each point from the texts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is a stanza?</li>
            <li>Which end words in stanza 2 rhyme with “light”?</li>
            <li>What does imagery do?</li>
            <li>Why is a line reference useful in a poetry question?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A group of lines in a poem.</li>
            <li>“{lastWord(line(7))}” in line 7 rhymes with “{lastWord(line(5))}” in line 5.</li>
            <li>It creates pictures in the reader’s mind.</li>
            <li>It sends you to the exact words that give your evidence.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A stanza in poetry is...',
    options: ['a grouped set of lines', 'a punctuation rule', 'a character in a play', 'the title font'],
    answer: 'a grouped set of lines',
    explanation: 'A stanza is like a paragraph in a poem.',
  },
  {
    prompt: 'Rhyme refers to...',
    options: [
      'similar sounds at the ends of words',
      'a sentence that gives instructions',
      'a list of character names',
      'the order of chapters',
    ],
    answer: 'similar sounds at the ends of words',
    explanation: 'Rhyme is a sound pattern, often at line endings.',
  },
  {
    prompt: 'What is imagery in a poem?',
    options: [
      'language that creates pictures in the mind',
      'the author signature only',
      'the number of pages in the book',
      'the test timetable',
    ],
    answer: 'language that creates pictures in the mind',
    explanation: 'Imagery helps readers imagine sights, sounds, and feelings.',
  },
  {
    prompt: 'Tone tells the reader...',
    options: [
      'the attitude or feeling in the poem',
      'the poem publication date only',
      'the number of stanzas only',
      'which desk the poet used',
    ],
    answer: 'the attitude or feeling in the poem',
    explanation: 'Tone reflects the emotional quality of the speaker voice.',
  },
  {
    prompt: 'Why are line references important in a poetry question?',
    options: [
      'They direct you to exact evidence in the poem',
      'They replace reading the poem',
      'They show only punctuation marks',
      'They remove the need for interpretation',
    ],
    answer: 'They direct you to exact evidence in the poem',
    explanation: 'Line references show where to find support for your answer.',
  },
  {
    prompt: 'If a poem describes "a silver moon smiling over quiet roofs", the phrase mainly uses...',
    options: ['imagery', 'stage directions', 'dialogue format', 'formal register'],
    answer: 'imagery',
    explanation: 'The phrase paints a visual picture for the reader.',
  },
  {
    prompt: 'Connecting a poem to a prescribed novel helps learners to...',
    options: [
      'compare themes across different texts',
      'change poetry into factual writing',
      'skip character analysis',
      'avoid using evidence',
    ],
    answer: 'compare themes across different texts',
    explanation: 'Cross-text comparison deepens literary understanding.',
  },
  {
    prompt: 'Which question is most likely about tone?',
    options: [
      'How does the speaker feel about the journey?',
      'How many commas are in line two?',
      'What is the printer brand of the textbook?',
      'How long is the exam room?',
    ],
    answer: 'How does the speaker feel about the journey?',
    explanation: 'Tone questions focus on feeling and attitude.',
  },
];

const PoetryPrescribedTextWork = () => (
  <CapsSubjectTopic
    title="Poetry and Prescribed Text Work"
    subtitle="Stanza, rhyme, imagery, tone and line-based interpretation"
    learnSteps={learnSteps}
    task="gr7-poetry-prescribed-text-work-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default PoetryPrescribedTextWork;

