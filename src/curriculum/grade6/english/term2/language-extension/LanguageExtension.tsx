import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { TenseCheck, TenseTimeline } from '@/components/diagrams/english/TenseDiagrams';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Synonyms and antonyms',
    content: slide(
      <>
        <Rule>A synonym is a word with a similar meaning. An antonym is a word with the opposite meaning. Knowing both helps you choose stronger words.</Rule>
        <Worked
          title="Find a synonym and an antonym"
          steps={[
            <>Synonym for “happy”: glad. It has a similar meaning.</>,
            <>Antonym for “ancient”: modern. It is the opposite of ancient.</>,
            <>Check with a sentence: “The glad children saw a modern building.”</>,
          ]}
        />
        <Mistake>Mixing the two up. Synonym = same meaning; antonym = opposite meaning.</Mistake>
      </>,
    ),
  },
  {
    title: 'Idioms and precise words',
    content: slide(
      <>
        <Rule>An idiom is a phrase whose meaning is not the meaning of its separate words. “Break the ice” means start a friendly conversation. Choose precise words: “whispered” shows how someone spoke.</Rule>
        <Worked
          title="Understand and improve"
          steps={[
            <>“Break the ice” does not mean to smash ice. It means to make people feel relaxed and ready to talk.</>,
            <>Read: “She said softly.”</>,
            <>Which word best replaces “said”? “Whispered”, because it shows how she spoke.</>,
            <>“She whispered” is more precise than “She said softly”.</>,
          ]}
        />
        <Mistake>Reading an idiom word for word. “Break the ice” is not about real ice.</Mistake>
      </>,
    ),
  },
  {
    title: 'Keep the tense consistent',
    content: slide(
      <>
        <Rule>The past tense shows an action that already happened. Keep the tense consistent: use the same tense for the actions in one sentence.</Rule>
        <Worked
          title="Check the tense"
          steps={[
            <>“We walked to school yesterday.” Walked shows the action already happened: past tense.</>,
            <>“Lebo packed her bag and hurried to the gate.” Packed and hurried are both past tense, so the tense is consistent.</>,
            <>“Lebo packed her bag and hurries to the gate” mixes past and present, so it is not consistent.</>,
          ]}
        />
        <Mistake>Switching between past and present in one sentence. Choose one tense and keep it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Punctuation and editing',
    content: slide(
      <>
        <Rule>
          End a sentence that asks something with a question mark. Use a capital letter, a comma after a name you speak to, and a full stop. Edit your own writing to correct mistakes and improve meaning.
        </Rule>
        <Worked
          title="Punctuate and edit"
          steps={[
            <>“Where is my bag” asks something, so end with a question mark: “Where is my bag?”</>,
            <>“thandi please bring your book” needs a capital letter, a comma after the name and a full stop.</>,
            <>Corrected: “Thandi, please bring your book.”</>,
            <>Read it again: edit to correct mistakes and choose clearer language.</>,
          ]}
        />
        <Mistake>Skipping the edit because the writing “feels done”. Editing helps you fix errors and improve meaning.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Give a synonym for “big” and an antonym for “brave”.</li>
            <li>What does “spill the beans” mean, and which word replaces “walked” in “He walked slowly home”?</li>
            <li>Which stays in one tense: “Sipho opened the door and greeted his gran.” or “Sipho opened the door and greets his gran.”?</li>
            <li>Which mark ends a question? Punctuate: thandi please bring your book. Why edit?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Large (or huge); cowardly (or fearful).</li>
            <li>Tell a secret by accident. Strolled (or trudged).</li>
            <li>“Sipho opened the door and greeted his gran.” (both verbs are past tense)</li>
            <li>A question mark. “Thandi, please bring your book.” To correct mistakes and improve meaning.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which word is a synonym for happy?',
    options: ['Glad', 'Angry', 'Heavy', 'Silent'],
    answer: 'Glad',
    explanation: 'Glad has a similar meaning to happy.',
  },
  {
    prompt: 'Which word is an antonym for ancient?',
    options: ['Modern', 'Old', 'Broken', 'Large'],
    answer: 'Modern',
    explanation: 'Modern is the opposite of ancient.',
  },
  {
    prompt: 'What does the idiom “break the ice” usually mean?',
    options: ['Start a friendly conversation', 'Smash a block of frozen water', 'Win a race by a short distance', 'Become very cold in winter weather'],
    answer: 'Start a friendly conversation',
    explanation: 'This idiom means making people feel relaxed and ready to talk.',
  },
  {
    prompt: 'Which sentence is written in the past tense?',
    options: ['We walked to school yesterday.', 'We walk to school every day.', 'We will walk to school tomorrow.', 'We are walking to school now.'],
    answer: 'We walked to school yesterday.',
    explanation: 'Walked shows that the action already happened.',
  },
  {
    prompt: 'Which sentence keeps the tense consistent?',
    options: ['Lebo packed her bag and hurried to the gate.', 'Lebo packed her bag and hurries to the gate.', 'Lebo packs her bag and hurried to the gate.', 'Lebo will pack her bag and hurried to the gate.'],
    answer: 'Lebo packed her bag and hurried to the gate.',
    explanation: 'Both verbs stay in the past tense, so the sentence is clear and consistent.',
  },
  {
    prompt: 'Which punctuation mark belongs at the end of a question?',
    options: ['Question mark', 'Comma', 'Colon', 'Apostrophe'],
    answer: 'Question mark',
    explanation: 'A question mark shows that a sentence is asking something.',
  },
  {
    prompt: 'Which sentence is punctuated correctly?',
    options: ['Thandi, please bring your book.', 'Thandi please bring your book', 'thandi, please bring your book.', 'Thandi please, bring your book'],
    answer: 'Thandi, please bring your book.',
    explanation: 'It uses a capital letter, a comma after the name, and a full stop.',
  },
  {
    prompt: 'Which word best replaces “said” in: “She said softly”?',
    options: ['Whispered', 'Jumped', 'Opened', 'Ran'],
    answer: 'Whispered',
    explanation: 'Whispered is more precise because it shows how she spoke.',
  },
  {
    prompt: 'Why should you edit your own writing?',
    options: ['To correct mistakes and improve meaning', 'To make every sentence longer', 'To remove all punctuation', 'To change every topic at the end'],
    answer: 'To correct mistakes and improve meaning',
    explanation: 'Editing helps you fix errors and choose clearer language.',
  },
];

const LanguageExtension = () => (
  <CapsSubjectTopic
    title="Language Extension"
    subtitle="Building vocabulary and editing with grammar, tense, and punctuation"
    learnSteps={learnSteps}
    task="language-extension"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default LanguageExtension;
