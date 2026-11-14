import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Phrases and clauses do different jobs',
    image: {
      src: '/curriculum/grade6/eng/term3/complex-sentence-work/diagram.webp',
      alt: 'colourful sentence strips showing phrases and clauses joining together',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>phrase</strong> adds meaning but does not have its own complete idea. A
          <strong> clause</strong> contains a subject and a verb. Knowing the difference helps you build
          better sentences.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-amber-50 p-4 text-slate-700">
            <strong>Phrase</strong>
            <br />
            useful words without a full idea
          </div>
          <div className="rounded-xl bg-sky-50 p-4 text-slate-700">
            <strong>Independent clause</strong>
            <br />
            can stand alone as a sentence
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-slate-700">
            <strong>Dependent clause</strong>
            <br />
            needs another clause to complete it
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Compound and complex sentences join ideas',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Writers combine ideas with <strong>conjunctions</strong>. Compound sentences join two complete
          ideas, while complex sentences join a complete idea to a dependent clause.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-rose-50 p-4 text-slate-700">
            <strong>Compound</strong>
            <br />
            two full ideas joined together
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-slate-700">
            <strong>Complex</strong>
            <br />
            one full idea plus one dependent clause
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-slate-700">
            <strong>Conjunction</strong>
            <br />
            words like and, but, because, although
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Join and split sentences for better flow',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Good writers edit sentences by joining short ideas, splitting run-on sentences, and choosing
          sentence types that make writing smoother and more varied.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4 text-slate-700">
            <strong>Join</strong>
            <br />
            connect related ideas clearly
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-slate-700">
            <strong>Split</strong>
            <br />
            fix long or confusing run-ons
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-slate-700">
            <strong>Vary</strong>
            <br />
            mix sentence patterns for interest
          </div>
        </div>
      </div>
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
    options: ['When the bell rang', 'the class cheered', 'the bell', 'class cheered loudly'],
    answer: 'When the bell rang',
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
