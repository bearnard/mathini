import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { FlowDiagram } from '../../../../../components/diagrams/science/SciencePictures4';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'The writing process',
    content: slide(
      <>
        <Rule>Good writing grows in steps: plan, draft, revise, edit. Always plan your ideas first, because planning decides your purpose, your topic and the order of your ideas.</Rule>
        <FlowDiagram
          id="write"
          title="The writing process"
          desc="Four steps in a row: plan, draft, revise, edit."
          nodes={[
            { id: 'p', label: 'plan', x: 24, y: 50, color: '#7dd3fc' },
            { id: 'd', label: 'draft', x: 62, y: 50, color: '#fcd34d' },
            { id: 'r', label: 'revise', x: 100, y: 50, color: '#86efac' },
            { id: 'e', label: 'edit', x: 138, y: 50, color: '#fda4af' },
          ]}
          edges={[
            { from: 'p', to: 'd', label: '' },
            { from: 'd', to: 'r', label: '' },
            { from: 'r', to: 'e', label: '' },
          ]}
        />
        <Worked
          title="Write about a school trip"
          steps={[
            <>Plan: decide the purpose and list your ideas in order.</>,
            <>Draft: write the first version in full sentences.</>,
            <>Revise: improve the ideas and paragraphs.</>,
            <>Edit: check spelling, punctuation and grammar.</>,
          ]}
        />
        <Mistake>Starting to write before you plan, or fixing spelling before the ideas are right. Plan first; edit last.</Mistake>
      </>,
    ),
  },
  {
    title: 'Text types',
    content: slide(
      <>
        <Rule>
          A summary is a short version with only the main points. A narrative essay tells a story. A descriptive essay uses detail and the senses to create a picture. A friendly letter is personal and has a greeting and a sign-off.
        </Rule>
        <Worked
          title="Choose the text type"
          steps={[
            <>A story about a lost puppy that finds its way home: a narrative essay, because it tells a sequence of events.</>,
            <>The sights and sounds of a busy market: a descriptive essay, because it uses detail and the senses.</>,
            <>A short version of a long article: a summary, because it keeps only the main points.</>,
            <>A letter to a cousin: a friendly letter, with a greeting (“Dear Sipho,”) and a sign-off (“Love, Ayanda”).</>,
          ]}
        />
        <Mistake>Putting every detail into a summary. A summary leaves out extra detail and keeps only the main points.</Mistake>
      </>,
    ),
  },
  {
    title: 'Dialogue and paragraphs',
    content: slide(
      <>
        <Rule>Quotation marks show the exact words a speaker says. Each paragraph has one main idea, and the paragraphs follow a clear order.</Rule>
        <Worked
          title="Punctuate speech"
          steps={[
            <>Spoken words: I am ready to go.</>,
            <>Put quotation marks round the exact words: “I am ready to go,” said Thandi.</>,
            <>When a new person speaks, begin a new line.</>,
            <>Keep one main idea in each paragraph, and put the paragraphs in a clear order.</>,
          ]}
        />
        <Mistake>Leaving out the quotation marks, so the reader cannot tell what was said and what was written about it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Nouns, pronouns, conjunctions and adverbs',
    content: slide(
      <>
        <Rule>
          A noun is a word that names a person, place or thing. A pronoun replaces a noun (he, she, it, they). A conjunction joins words or ideas (and, but, because). An adverb tells us how an action is done.
        </Rule>
        <Worked
          title="Label “The choir sang beautifully”"
          steps={[
            <>“choir” names a group of people: it is a noun.</>,
            <>“sang” is the action. Ask: how did the choir sing?</>,
            <>“beautifully” answers how: it is the adverb.</>,
            <>Replace “the choir” with “they” (a pronoun) and join two ideas with “because” (a conjunction).</>,
          ]}
        />
        <Mistake>Thinking every describing word is an adjective. A word that tells how an action is done, such as beautifully, is an adverb.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What do you do first in the writing process? What is a summary?</>,
          <>Which text type tells a story about a lost puppy, and which helps readers imagine a busy market?</>,
          <>What marks show spoken words, and what two things belong in a friendly letter?</>,
          <>In “The choir sang beautifully”, which word is the adverb? What is a noun, and what does a pronoun do?</>,
        ]}
        answers={[
          <>Plan your ideas. A summary is a short version with only the main points.</>,
          <>A narrative essay tells the story; a descriptive essay creates the picture.</>,
          <>Quotation marks. A greeting and a sign-off.</>,
          <>“beautifully”. A noun names a person, place or thing; a pronoun replaces a noun.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What should you do first in the process writing cycle?',
    options: ['Plan your ideas', 'Print the final copy', 'Ignore the topic', 'Add random sentences'],
    answer: 'Plan your ideas',
    explanation: 'Planning helps you decide your purpose, topic, and the order of your ideas before drafting.',
  },
  {
    prompt: 'What is a summary?',
    options: [
      'A short version with only the main points',
      'A story with a surprise ending',
      'A private diary page full of feelings',
      'A list of every small detail',
    ],
    answer: 'A short version with only the main points',
    explanation: 'A summary keeps the important ideas and leaves out extra detail.',
  },
  {
    prompt: 'Which text type is best for telling a story about a lost puppy that finds its way home?',
    options: ['Narrative essay', 'Friendly letter', 'Summary', 'Poster caption'],
    answer: 'Narrative essay',
    explanation: 'A narrative essay tells a sequence of events in story form.',
  },
  {
    prompt: 'Which text type is best for helping the reader imagine the sights and sounds of a busy market?',
    options: ['Descriptive essay', 'Summary', 'Timetable', 'Shopping receipt'],
    answer: 'Descriptive essay',
    explanation: 'A descriptive essay uses detail and the senses to create a picture in the reader’s mind.',
  },
  {
    prompt: 'Which feature belongs in a friendly letter?',
    options: ['A greeting and a sign-off', 'A headline and byline', 'A bar graph', 'Stage directions only'],
    answer: 'A greeting and a sign-off',
    explanation: 'Friendly letters are personal and usually open with a greeting and close with a sign-off.',
  },
  {
    prompt: 'Which punctuation marks usually show spoken words in dialogue?',
    options: ['Quotation marks', 'Brackets', 'Semicolons', 'Slashes'],
    answer: 'Quotation marks',
    explanation: 'Quotation marks show the exact words a speaker says.',
  },
  {
    prompt: 'What is a noun?',
    options: [
      'A word that names a person, place, or thing',
      'A word that joins two ideas',
      'A word that replaces a noun',
      'A word that shows strong feeling only',
    ],
    answer: 'A word that names a person, place, or thing',
    explanation: 'Nouns name people, places, things, and ideas.',
  },
  {
    prompt: 'What does a pronoun do?',
    options: [
      'It replaces a noun',
      'It adds a question mark',
      'It tells the exact colour of a noun',
      'It changes a paragraph into a heading',
    ],
    answer: 'It replaces a noun',
    explanation: 'Pronouns such as he, she, it, and they can stand in for nouns.',
  },
  {
    prompt: 'What does a conjunction do?',
    options: [
      'It joins words or ideas',
      'It names a person or place',
      'It shows only one sound',
      'It turns a statement into a picture',
    ],
    answer: 'It joins words or ideas',
    explanation: 'Conjunctions like and, but, and because connect parts of a sentence.',
  },
  {
    prompt: 'Which word is the adverb in the sentence “The choir sang beautifully” ?',
    options: ['beautifully', 'choir', 'sang', 'the'],
    answer: 'beautifully',
    explanation: 'Beautifully tells us how the choir sang, so it is an adverb.',
  },
];

const ProcessWritingGrammar = () => (
  <CapsSubjectTopic
    title="Process Writing and Core Grammar"
    subtitle="Planning, drafting, and polishing clear English writing"
    learnSteps={learnSteps}
    task="process-writing-grammar"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ProcessWritingGrammar;
