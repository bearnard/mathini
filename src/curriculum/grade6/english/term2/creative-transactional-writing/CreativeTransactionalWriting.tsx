import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Different text types have different jobs',
    image: {
      src: '/curriculum/grade6/eng/term2/creative-transactional-writing/diagram.webp',
      alt: 'learner planning a poem, dialogue, script, and short message in a notebook',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          <strong>Creative writing</strong> lets you imagine and express ideas. <strong>Transactional
          writing</strong> helps you communicate clearly for a real purpose. In this term you practise
          poems, dialogues, play scripts, and messages.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-pink-50 p-4">
            <p className="font-bold text-pink-700">Poem</p>
            <p className="text-slate-600">feelings, images, and carefully chosen words</p>
          </div>
          <div className="rounded-xl bg-sky-50 p-4">
            <p className="font-bold text-sky-700">Dialogue / script</p>
            <p className="text-slate-600">speakers, turns, and clear action</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <p className="font-bold text-emerald-700">Message</p>
            <p className="text-slate-600">short, clear, and written for a purpose</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use the full writing process',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Strong writers do not stop after one try. They <strong>plan</strong>, <strong>draft</strong>,
          <strong> revise</strong>, and <strong>redraft</strong> so the final piece matches its audience
          and purpose.
        </p>
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-xl bg-amber-50 p-4">
            <p className="font-bold text-amber-700">Plan</p>
            <p className="text-slate-600">collect ideas and order them</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <p className="font-bold text-indigo-700">Draft</p>
            <p className="text-slate-600">write the first version</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <p className="font-bold text-violet-700">Revise</p>
            <p className="text-slate-600">improve meaning and detail</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4">
            <p className="font-bold text-lime-700">Redraft</p>
            <p className="text-slate-600">fix language and present neatly</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Think about audience, register, and coherence',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Before you write, ask: <strong>Who will read this?</strong> and <strong>Why am I writing it?</strong>
          Your language should suit the audience, and your ideas should stay linked so each paragraph or
          turn makes sense.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-cyan-50 p-4">
            <p className="font-bold text-cyan-700">Audience</p>
            <p className="text-slate-600">friend, teacher, class, or principal</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <p className="font-bold text-rose-700">Register</p>
            <p className="text-slate-600">formal or informal language</p>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4">
            <p className="font-bold text-fuchsia-700">Coherence</p>
            <p className="text-slate-600">ideas connect in a clear order</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main purpose of transactional writing?',
    options: ['To communicate clearly for a specific purpose', 'To hide the meaning of the writing', 'To copy random sentences only', 'To avoid thinking about the reader'],
    answer: 'To communicate clearly for a specific purpose',
    explanation: 'Transactional writing is practical writing aimed at a clear audience and purpose.',
  },
  {
    prompt: 'Which step usually comes first in the writing process?',
    options: ['Planning ideas', 'Publishing immediately', 'Memorising the whole draft', 'Ignoring the topic'],
    answer: 'Planning ideas',
    explanation: 'Planning helps you choose ideas and organise them before drafting.',
  },
  {
    prompt: 'What should a writer do after finishing a first draft?',
    options: ['Read it again and improve it', 'Throw it away at once', 'Change the topic completely', 'Stop checking the work'],
    answer: 'Read it again and improve it',
    explanation: 'Revision and redrafting help make the writing clearer and stronger.',
  },
  {
    prompt: 'Which feature belongs in a play script?',
    options: ['Speaker names and stage directions', 'A list of fractions', 'A weather graph', 'A science table'],
    answer: 'Speaker names and stage directions',
    explanation: 'A script shows who is speaking and what happens on stage.',
  },
  {
    prompt: 'Which message opening best suits a note to your teacher?',
    options: ['Dear Ms Naidoo,', 'Hey bestie!', 'Yo!', 'Guess what!'],
    answer: 'Dear Ms Naidoo,',
    explanation: 'A polite opening matches the audience and keeps the register appropriate.',
  },
  {
    prompt: 'How is dialogue usually organised on the page?',
    options: ['Each speaker takes a clear turn', 'All speakers write in one long paragraph', 'No one is named at all', 'Only the last speaker gets punctuation'],
    answer: 'Each speaker takes a clear turn',
    explanation: 'Dialogue is easier to follow when each speaker has a separate turn.',
  },
  {
    prompt: 'What does paragraph coherence mean?',
    options: ['Ideas link together clearly', 'Every sentence is about a different topic', 'The paragraph has no punctuation', 'Only long words are used'],
    answer: 'Ideas link together clearly',
    explanation: 'Coherence means the writing stays focused and makes sense from one idea to the next.',
  },
  {
    prompt: 'Which text type is most likely to use imagery and feelings to create an effect?',
    options: ['Poem', 'Timetable', 'Invoice', 'Map key'],
    answer: 'Poem',
    explanation: 'Poems often use images, rhythm, and emotion to express ideas.',
  },
  {
    prompt: 'Why is redrafting important?',
    options: ['It helps you improve content and language', 'It means you never need to plan', 'It removes the need for punctuation', 'It makes every text informal'],
    answer: 'It helps you improve content and language',
    explanation: 'Redrafting gives you a chance to refine ideas, structure, and correctness.',
  },
];

const CreativeTransactionalWriting = () => (
  <CapsSubjectTopic
    title="Creative & Transactional Writing"
    subtitle="Using the writing process for poems, dialogues, scripts, and messages"
    learnSteps={learnSteps}
    task="creative-transactional-writing"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default CreativeTransactionalWriting;
