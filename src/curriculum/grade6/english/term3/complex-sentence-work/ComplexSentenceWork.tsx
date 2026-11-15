import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { CompoundComplex, JoinSplitVary, SentenceKey } from '@/components/diagrams/english/SentenceBlocks';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Phrases and clauses',
    content: slide(
      <>
        <Rule>
          A phrase adds information but does not have a complete idea of its own. A clause has a subject and a verb. An independent clause can stand on its own.
        </Rule>
        <SentenceKey />
        <Worked
          title="Phrase or clause?"
          steps={[
            <>“under the old bridge”: no subject and verb, no full idea. It is a phrase.</>,
            <>“The rain stopped suddenly”: subject “the rain”, verb “stopped”. It is an independent clause.</>,
            <>“After the game, Sipho smiled”: “After the game” is a phrase and “Sipho smiled” is an independent clause.</>,
          ]}
        />
        <Mistake>Thinking a long group of words must be a sentence. “under the old bridge” is long enough but has no subject and verb.</Mistake>
      </>,
    ),
  },
  {
    title: 'Compound sentences',
    content: slide(
      <>
        <Rule>A conjunction joins words, phrases or clauses. A compound sentence joins two complete ideas with a conjunction such as and, but or so.</Rule>
        <Worked
          title="Build a compound sentence"
          steps={[
            <>Idea 1: Lebo packed his bag. It can stand alone.</>,
            <>Idea 2: he ran to the taxi. It can stand alone too.</>,
            <>Join with a comma and a conjunction: “Lebo packed his bag, and he ran to the taxi.”</>,
            <>Two complete ideas joined by a conjunction make a compound sentence.</>,
          ]}
        />
        <Mistake>Joining two full ideas with only a comma. A comma alone is not enough; add a conjunction.</Mistake>
      </>,
    ),
  },
  {
    title: 'Complex sentences',
    content: slide(
      <>
        <Rule>
          A complex sentence joins an independent clause to a dependent clause. A dependent clause cannot stand alone. Words such as although, because and when often start a dependent clause.
        </Rule>
        <CompoundComplex />
        <Worked
          title="Find the dependent clause"
          steps={[
            <>Read: “When the bell rang, the class cheered.”</>,
            <>“the class cheered” can stand alone: independent clause.</>,
            <>“When the bell rang” starts with “When” and cannot stand alone: it is the dependent clause.</>,
            <>Another example: “Because Lebo packed early, he was ready on time.” The clause beginning with “Because” is dependent.</>,
          ]}
        />
        <Mistake>Calling the first clause the independent one by position. Test it: can it stand alone? “When the bell rang” cannot.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fixing run-ons and varying sentences',
    content: slide(
      <>
        <Rule>
          Fix a run-on by joining the ideas with punctuation and a conjunction, or by splitting them. Vary your sentence types to make writing smoother and more interesting.
        </Rule>
        <JoinSplitVary />
        <Worked
          title="Fix a run-on"
          steps={[
            <>Run-on: “Thandi finished her homework she went outside.” Two full ideas run together.</>,
            <>Join them: “Thandi finished her homework, and she went outside.”</>,
            <>Or split them into two sentences.</>,
            <>Then mix short, compound and complex sentences so the reader stays interested.</>,
          ]}
        />
        <Mistake>Writing only short sentences or only long ones. Varying the sentence types improves flow.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which is a phrase: “The rain stopped suddenly” or “under the old bridge”?</li>
            <li>What does a conjunction do? Which sentence is compound: “Zinzi packed her lunch, and she walked to school”?</li>
            <li>In “After the storm passed, the farmers checked the fields,” which words form the dependent clause? Name a word that starts one.</li>
            <li>Fix this run-on: “Thandi finished her homework she went outside.” Why vary sentence types?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>“under the old bridge” is a phrase. (“The rain stopped suddenly” is an independent clause.)</li>
            <li>It joins words, phrases or clauses. Yes: two complete ideas joined by “and”.</li>
            <li>“After the storm passed” (the clause beginning with “After”). For example although, because, when.</li>
            <li>“Thandi finished her homework, and she went outside.” To make writing smoother and more interesting.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which group of words is an independent clause?',
    options: [
      'The rain stopped suddenly',
      'under the old bridge',
      'because the rain stopped',
      'after the bell',
    ],
    answer: 'The rain stopped suddenly',
    explanation: 'An independent clause has a subject and verb and can stand on its own.',
  },
  {
    prompt: 'Which option is a phrase?',
    options: ['under the old bridge', 'The dog barked loudly', 'because the bus was late', 'She finished first'],
    answer: 'under the old bridge',
    explanation: 'A phrase adds information but does not contain a full idea on its own.',
  },
  {
    prompt: 'Which sentence is compound?',
    options: [
      'Lebo packed his bag, and he ran to the taxi',
      'Because Lebo packed early, he was ready on time',
      'After the game',
      'When the whistle blew',
    ],
    answer: 'Lebo packed his bag, and he ran to the taxi',
    explanation: 'A compound sentence joins two complete ideas with a conjunction.',
  },
  {
    prompt: 'Which sentence is complex?',
    options: [
      'Because Lebo packed early, he was ready on time',
      'Lebo packed his bag, and he ran to the taxi',
      'The taxi arrived',
      'Near the busy road',
    ],
    answer: 'Because Lebo packed early, he was ready on time',
    explanation: 'A complex sentence combines a dependent clause with an independent clause.',
  },
  {
    prompt: 'What does a conjunction do?',
    options: [
      'It joins words, phrases, or clauses',
      'It shows how to draw a picture',
      'It names the main character only',
      'It changes a noun into a number',
    ],
    answer: 'It joins words, phrases, or clauses',
    explanation: 'Conjunctions connect parts of a sentence so ideas relate clearly.',
  },
  {
    prompt: 'In the sentence "When the bell rang, the class cheered," which words form the dependent clause?',
    options: ['The clause beginning with “When”', 'The clause ending with “cheered”', 'Only the single word “the”', 'The words “class cheered loudly”'],
    answer: 'The clause beginning with “When”',
    explanation: 'The clause begins with a subordinating conjunction and cannot stand alone.',
  },
  {
    prompt: 'Which sentence fixes a run-on correctly?',
    options: [
      'Thandi finished her homework, and she went outside',
      'Thandi finished her homework she went outside',
      'Thandi finished and outside',
      'Homework went outside because Thandi',
    ],
    answer: 'Thandi finished her homework, and she went outside',
    explanation: 'The corrected sentence clearly joins two complete ideas with punctuation and a conjunction.',
  },
  {
    prompt: 'Why should writers vary sentence types?',
    options: [
      'To make writing smoother and more interesting',
      'To remove all meaning from a paragraph',
      'To make every sentence exactly the same',
      'To avoid using verbs in writing',
    ],
    answer: 'To make writing smoother and more interesting',
    explanation: 'Sentence variety improves flow and keeps the reader engaged.',
  },
  {
    prompt: 'Which word can introduce a dependent clause?',
    options: ['although', 'pencil', 'bright', 'quickly'],
    answer: 'although',
    explanation: 'Words such as although, because, and when often start dependent clauses.',
  },
  {
    prompt: 'Which sentence contains a phrase and an independent clause?',
    options: [
      'After the game, Sipho smiled',
      'Because the rain fell',
      'Under the table',
      'Although she tried',
    ],
    answer: 'After the game, Sipho smiled',
    explanation: '"After the game" is a phrase, and "Sipho smiled" is an independent clause.',
  },
];

const ComplexSentenceWork = () => (
  <CapsSubjectTopic
    title="Complex Sentence Work"
    subtitle="Using phrases, clauses, and conjunctions to build varied sentences"
    learnSteps={learnSteps}
    task="complex-sentence-work"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ComplexSentenceWork;
