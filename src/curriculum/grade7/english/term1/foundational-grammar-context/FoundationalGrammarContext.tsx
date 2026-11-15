import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { SpeechChange } from '../../../../../components/diagrams/english/SpeechChange';
import { TenseTimeline } from '../../../../../components/diagrams/english/TenseDiagrams';
import { WordChange, WordOrder } from '../../../../../components/diagrams/english/Grade7EnglishPictures';
import { LEBO, MUSA, SIPHO, SVO, THANDI, beForm, directSpeech, pluralOf, reportedSpeech, slotsText } from '../../../../../components/diagrams/english/grade7english';

// Plurals, speech and word order come from these tested helpers (grade7english.test.ts).
const plurals = ['learner', 'class', 'story'].map((w) => ({ from: w, to: pluralOf(w) }));
const lebo = { direct: directSpeech(LEBO), reported: reportedSpeech(LEBO) };
const musa = { direct: directSpeech(MUSA), reported: reportedSpeech(MUSA) };
const wrongReport = 'Lebo said that I am tired.';

// "Check yourself", answers from the helpers
const c1 = pluralOf('story');
const c3 = reportedSpeech(THANDI);
const c4 = reportedSpeech(SIPHO);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Singular, plural and agreement',
    content: slide(
      <>
        <Rule>
          Singular means one, plural means more than one. Most nouns add <strong>-s</strong>. Nouns ending in s, x, ch or sh add <strong>-es</strong>, and a consonant plus y changes to <strong>-ies</strong>. The verb must agree: one thing takes “{beForm(false)}”, many things take “{beForm(true)}”.
        </Rule>
        <WordChange pairs={plurals} aria="Three nouns and their plurals. Learner becomes learners, class becomes classes, story becomes stories. The new ending is highlighted." />
        <Worked
          title="“The ___ are reading quietly.”"
          steps={[
            <>The verb is “are”, so the missing noun must be plural.</>,
            <>Take the singular “learner” and add -s: <strong>{pluralOf('learner')}</strong>.</>,
            <>“The {pluralOf('learner')} are reading quietly.”</>,
          ]}
        />
        <Mistake>Treating a team as many separate people: “The team are ready.” When the team acts as one group, use the singular verb: “The team {beForm(false)} ready for the debate.”</Mistake>
      </>,
    ),
  },
  {
    title: 'Tense: when does it happen?',
    content: slide(
      <>
        <Rule>Tense shows when something happens: past (already happened), present (happening now) or future (will happen). Keep one tense in a sentence unless the time really changes.</Rule>
        <TenseTimeline verb="walk" plural={false} tenses={['past', 'present', 'future']} before="She" after="to school" />
        <Worked
          title="Which sentence is in the past tense?"
          steps={[
            <>Look for a time clue: “She completed the homework <strong>yesterday</strong>.” Yesterday is already over.</>,
            <>Look at the verb: “completed” ends in -ed, the past form.</>,
            <>The other choices say “every day” (present), “now” (present) and “tomorrow” (future).</>,
          ]}
        />
        <Mistake>Mixing tenses: “Yesterday we walked to school and play soccer.” Yesterday means both verbs are past: “we walked … and played soccer.”</Mistake>
      </>,
    ),
  },
  {
    title: 'Word order',
    content: slide(
      <>
        <Rule>A simple English sentence usually runs subject, verb, object: who does it, what they do, and what receives the action. Changing the order changes the meaning or ruins it.</Rule>
        <WordOrder slots={SVO} />
        <Worked
          title="Put the words in order"
          steps={[
            <>Words: read, carefully, class, poem, the, the.</>,
            <>Find the doer: “the class” is the subject. The action “read” is the verb.</>,
            <>Add what was read: <strong>{slotsText(SVO)}</strong></>,
          ]}
        />
        <Mistake>Scrambling words: “The man bit the dog” and “The dog bit the man” use the same words but mean different things. Order tells the reader who did what.</Mistake>
      </>,
    ),
  },
  {
    title: 'Direct and indirect speech',
    content: slide(
      <>
        <Rule>Direct speech gives the exact words inside quotation marks. Indirect (reported) speech tells what was said without the marks: add “that”, change the pronoun, and step the tense back (am becomes was, will becomes would).</Rule>
        <SpeechChange />
        <Worked
          title={lebo.direct}
          steps={[
            <>Drop the quotation marks and add “that”.</>,
            <>Change “I” to “she”, because Lebo is the speaker.</>,
            <>Step the tense back: “am” becomes “was”. Result: <strong>{lebo.reported}</strong></>,
            <>Same method: {musa.direct} becomes <strong>{musa.reported}</strong> (“tonight” becomes “that night”).</>,
          ]}
        />
        <Mistake>Leaving the speaker’s words as they were: “{wrongReport}” keeps “I” and “am”. Both must change.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Write the plural of “story”.</li>
            <li>Correct the tense: “Last week Thabo cooked supper and washes the dishes.”</li>
            <li>Change to indirect speech: {directSpeech(THANDI)}</li>
            <li>Change to indirect speech: {directSpeech(SIPHO)}</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{c1}: the y follows a consonant, so it changes to -ies.</li>
            <li>“Last week Thabo cooked supper and washed the dishes.” Last week means both verbs are past.</li>
            <li>{c3}</li>
            <li>{c4}</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Choose the correct plural form: "The ___ are reading quietly."',
    options: ['learners', 'learner', 'learnerss', 'learn'],
    answer: 'learners',
    explanation: 'The sentence needs a plural noun to match "are".',
  },
  {
    prompt: 'Which sentence is in the past tense?',
    options: [
      'She completed the homework yesterday.',
      'She completes the homework every day.',
      'She is completing the homework now.',
      'She will complete the homework tomorrow.',
    ],
    answer: 'She completed the homework yesterday.',
    explanation: 'The verb "completed" shows past tense.',
  },
  {
    prompt: 'Which word order is correct?',
    options: [
      'The class read the poem carefully.',
      'Read carefully the class poem the.',
      'Carefully poem the read class the.',
      'Poem the class carefully read the.',
    ],
    answer: 'The class read the poem carefully.',
    explanation: 'This sentence follows clear subject-verb-object order.',
  },
  {
    prompt: 'Which sentence uses direct speech?',
    options: [
      '"I will revise tonight," said Musa.',
      'Musa said that he would revise that night.',
      'Musa was revising that night.',
      'Musa planned revision for the exam.',
    ],
    answer: '"I will revise tonight," said Musa.',
    explanation: 'Direct speech uses quotation marks for exact words.',
  },
  {
    prompt: 'Change to indirect speech: "Lebo said, \'I am tired.\'"',
    options: [
      'Lebo said that she was tired.',
      'Lebo said, she tired is.',
      'Lebo said that I am tired.',
      'Lebo says she will tired.',
    ],
    answer: 'Lebo said that she was tired.',
    explanation: 'Indirect speech shifts pronoun and tense correctly.',
  },
  {
    prompt: 'Which sentence has correct subject-verb agreement?',
    options: [
      'The team is ready for the debate.',
      'The team are ready for the debate.',
      'The team be ready for the debate.',
      'The team ready for the debate.',
    ],
    answer: 'The team is ready for the debate.',
    explanation: 'The singular noun "team" takes the singular verb "is".',
  },
  {
    prompt: 'Which edit fixes tense consistency?',
    options: [
      'Yesterday we walked to school and played soccer.',
      'Yesterday we walk to school and played soccer.',
      'Yesterday we walked to school and play soccer.',
      'Yesterday we walking to school and play soccer.',
    ],
    answer: 'Yesterday we walked to school and played soccer.',
    explanation: 'Both verbs stay in the past tense for consistency.',
  },
  {
    prompt: 'Which punctuation is needed in direct speech before the spoken words?',
    options: ['Quotation marks', 'Semicolon only', 'Hyphen only', 'No punctuation'],
    answer: 'Quotation marks',
    explanation: 'Quotation marks show the exact words being spoken.',
  },
];

const FoundationalGrammarContext = () => (
  <CapsSubjectTopic
    title="Foundational Grammar in Context"
    subtitle="Sentence accuracy with tense, word order and speech forms"
    learnSteps={learnSteps}
    task="gr7-foundational-grammar-context-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default FoundationalGrammarContext;
