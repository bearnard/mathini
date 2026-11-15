import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { SpeechChange } from '@/components/diagrams/english/SpeechChange';
import { TenseCheck, TenseTimeline, WordRoles } from '@/components/diagrams/english/TenseDiagrams';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Nouns and adjectives',
    content: slide(
      <>
        <Rule>A noun names a person, place, thing or idea. An adjective describes a noun.</Rule>
        <WordRoles />
        <Worked
          title="Find the noun and the adjective"
          steps={[
            <>“The teacher praised the class”: who or what is named? “teacher” names a person: a noun.</>,
            <>“the noisy classroom”: which word describes the classroom? “noisy”.</>,
            <>“noisy” describes a noun, so it is an adjective. In the picture, “noisy” describes the noun “class”, and “praised” is the verb.</>,
          ]}
        />
        <Mistake>Calling “noisy” a noun because it sits next to one. An adjective describes a noun; it does not name a person, place or thing.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tenses',
    content: slide(
      <>
        <Rule>Tense shows time. A word such as “yesterday” shows the action happened in the past. Keep the tense consistent in a sentence.</Rule>
        <TenseTimeline verb="write" plural={false} tenses={['past', 'present']} before="She" after="neatly." />
        <TenseCheck which="revised" />
        <Worked
          title="Choose the correct past tense"
          steps={[
            <>“They walk to school yesterday” has a problem: “yesterday” shows the past.</>,
            <>Use the past tense: “They walked to school yesterday.”</>,
            <>“We revised the poem and answered the questions” keeps both verbs in the past tense, so the tense is consistent.</>,
          ]}
        />
        <Mistake>Mixing tenses, such as “revised the poem and answer the questions”. Both verbs must be in the same tense.</Mistake>
      </>,
    ),
  },
  {
    title: 'Direct and indirect speech',
    content: slide(
      <>
        <Rule>
          Direct speech quotes the exact words, with a reporting clause, a comma and speech marks. Indirect speech reports what was said without quoting the exact words.
        </Rule>
        <SpeechChange />
        <Worked
          title="Change direct speech to indirect speech"
          steps={[
            <>Direct: Mia said, “I am ready.” (reporting clause, comma, speech marks)</>,
            <>Indirect: Sam said that he was tired. (no speech marks, “that” added)</>,
            <>Drop the speech marks, add “that”, and move the verb back in time (am becomes was). The picture shows the same changes: “She writes neatly,” he said becomes He said that she wrote neatly.</>,
          ]}
        />
        <Mistake>Keeping the speech marks in indirect speech. Indirect speech does not quote the exact words.</Mistake>
      </>,
    ),
  },
  {
    title: 'Punctuation and spelling',
    content: slide(
      <>
        <Rule>
          We use punctuation to make meaning clear for the reader. To check spelling, use look, cover, write, compare.
        </Rule>
        <Worked
          title="Punctuate and spell"
          steps={[
            <>“after lunch we revised grammar” needs a capital letter, a comma after the introductory phrase and a full stop.</>,
            <>Correct: “After lunch, we revised grammar.”</>,
            <>Spelling: look at the word, cover it, write it, then compare it with the correct spelling.</>,
          ]}
        />
        <Mistake>Leaving out the comma after an introductory phrase. It tells the reader where to pause.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>In “The teacher praised the class”, which word is a noun? In “the noisy classroom”, which is an adjective?</li>
            <li>Which sentence is in the past tense, and which keeps the tense consistent?</li>
            <li>Which sentence is direct speech, and which is indirect speech?</li>
            <li>Why do we use punctuation? How can you check spelling?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>teacher; noisy.</li>
            <li>“They walked to school yesterday.” “We revised the poem and answered the questions.”</li>
            <li>Mia said, “I am ready.” Sam said that he was tired.</li>
            <li>To make meaning clear for the reader. Look, cover, write, compare.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which word is a noun in the sentence: “The teacher praised the class”?',
    options: ['teacher', 'praised', 'the', 'praised the'],
    answer: 'teacher',
    explanation: 'A noun names a person, place, thing, or idea. “Teacher” names a person.',
  },
  {
    prompt: 'Choose the correct past tense sentence.',
    options: ['They walked to school yesterday.', 'They walk to school yesterday.', 'They walking to school yesterday.', 'They will walked to school yesterday.'],
    answer: 'They walked to school yesterday.',
    explanation: '“Yesterday” shows the action happened in the past, so “walked” is correct.',
  },
  {
    prompt: 'Which sentence uses direct speech correctly?',
    options: ['Mia said, “I am ready.”', 'Mia said that I am ready.', 'Mia said, I am ready.', 'Mia said “I am ready”. because'],
    answer: 'Mia said, “I am ready.”',
    explanation: 'Direct speech uses a reporting clause, comma, speech marks, and punctuation in the right place.',
  },
  {
    prompt: 'Which sentence is in indirect speech?',
    options: ['Sam said that he was tired.', 'Sam said, “I am tired.”', '“Sam tired,” said he.', 'Sam, tired, said.'],
    answer: 'Sam said that he was tired.',
    explanation: 'Indirect speech reports what was said without quoting the exact words.',
  },
  {
    prompt: 'Which word is an adjective in the phrase “the noisy classroom”?',
    options: ['noisy', 'classroom', 'the', 'the noisy'],
    answer: 'noisy',
    explanation: 'An adjective describes a noun. “Noisy” describes the classroom.',
  },
  {
    prompt: 'Why do we use punctuation?',
    options: ['To make meaning clear for the reader', 'To make every sentence longer', 'To avoid using verbs', 'To replace spelling completely'],
    answer: 'To make meaning clear for the reader',
    explanation: 'Punctuation helps readers understand pauses, speech, questions, and sentence boundaries.',
  },
  {
    prompt: 'Choose the correctly punctuated sentence.',
    options: ['After lunch, we revised grammar.', 'After lunch we revised grammar', 'After lunch; we revised grammar,', 'after lunch, We revised grammar'],
    answer: 'After lunch, we revised grammar.',
    explanation: 'The sentence starts with a capital letter, uses the comma correctly after the introductory phrase, and ends with a full stop.',
  },
  {
    prompt: 'Which strategy best helps you check spelling?',
    options: ['Look, cover, write, compare', 'Guess quickly and move on', 'Change every word to a shorter word', 'Use no vowels at all'],
    answer: 'Look, cover, write, compare',
    explanation: 'This strategy helps you remember the correct letter pattern of a word.',
  },
  {
    prompt: 'Which sentence keeps the tense consistent?',
    options: ['We revised the poem and answered the questions.', 'We revise the poem and answered the questions.', 'We revised the poem and answer the questions.', 'We revising the poem and answered the questions.'],
    answer: 'We revised the poem and answered the questions.',
    explanation: 'Both verbs stay in the past tense, so the sentence is consistent.',
  },
];

const LanguageConsolidation = () => (
  <CapsSubjectTopic
    title="Language Consolidation"
    subtitle="Revising grammar, tense, speech, punctuation, and spelling"
    learnSteps={learnSteps}
    task="language-consolidation"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default LanguageConsolidation;
