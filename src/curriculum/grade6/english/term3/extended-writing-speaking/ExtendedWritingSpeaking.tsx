import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Plan for audience and purpose first',
    image: {
      src: '/curriculum/grade6/eng/term3/extended-writing-speaking/diagram.webp',
      alt: 'learner planning a book review and oral talk with cue cards',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Extended writing and speaking improve when you know <strong>who</strong> you are speaking or
          writing for and <strong>why</strong> you are communicating. This helps you choose the best tone,
          details, and examples.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-sky-50 p-4 text-slate-700">
            <strong>Audience</strong>
            <br />
            the people reading or listening
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-slate-700">
            <strong>Purpose</strong>
            <br />
            to inform, entertain, review, or persuade
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-slate-700">
            <strong>Tone</strong>
            <br />
            the style that suits the task
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Strong structure keeps ideas organised',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reviews, narrative essays, interviews, and oral responses need clear openings, useful middle
          details, and endings that leave the audience with a final thought.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-rose-50 p-4 text-slate-700">
            <strong>Opening</strong>
            <br />
            hook the audience and introduce the topic
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-slate-700">
            <strong>Middle</strong>
            <br />
            add organised facts, events, or reasons
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-slate-700">
            <strong>Closing</strong>
            <br />
            end with a clear summary or final opinion
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Detail and delivery make communication stronger',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use vivid detail in writing, ask thoughtful interview questions, and speak clearly with pace,
          expression, and eye contact. These choices help your audience stay interested.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4 text-slate-700">
            <strong>Detail</strong>
            <br />
            examples make ideas specific
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-slate-700">
            <strong>Delivery</strong>
            <br />
            speak audibly and with confidence
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-slate-700">
            <strong>Convention</strong>
            <br />
            choose a fitting opening and ending
          </div>
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What should you think about before planning an oral or written response?',
    options: [
      'Audience and purpose',
      'Only your favourite colour',
      'How long the school break is',
      'The price of a bus ticket',
    ],
    answer: 'Audience and purpose',
    explanation: 'Audience and purpose guide the tone, detail, and structure of the response.',
  },
  {
    prompt: 'What makes a strong opening in an oral presentation?',
    options: [
      'A hook that grabs attention and introduces the topic',
      'Reading the whole conclusion first',
      'Speaking as softly as possible',
      'Listing unrelated facts at random',
    ],
    answer: 'A hook that grabs attention and introduces the topic',
    explanation: 'A strong opening helps the audience know what to expect and keeps them interested.',
  },
  {
    prompt: 'Which ending works best for extended writing?',
    options: [
      'A clear closing that sums up the main idea',
      'Stopping in the middle of a sentence',
      'Adding a new topic with no link',
      'Repeating the title many times only',
    ],
    answer: 'A clear closing that sums up the main idea',
    explanation: 'A good ending brings the response to a purposeful finish.',
  },
  {
    prompt: 'Which detail makes a book review stronger?',
    options: [
      'Specific reasons and examples from the book',
      'A guess with no support',
      'The reviewer\'s lunch menu',
      'A copy of the back cover only',
    ],
    answer: 'Specific reasons and examples from the book',
    explanation: 'Reviews need evidence from the text to support the opinion.',
  },
  {
    prompt: 'What does a narrative essay need?',
    options: [
      'Events organised in a logical order',
      'No beginning or ending',
      'Only one short sentence',
      'A list of disconnected words',
    ],
    answer: 'Events organised in a logical order',
    explanation: 'Narrative writing becomes clear when events follow a sensible sequence.',
  },
  {
    prompt: 'Which interview question is the most useful?',
    options: [
      'How did that event change the way you felt?',
      'What is your shoe size today?',
      'How many windows are in this room?',
      'What is the answer to every maths problem?',
    ],
    answer: 'How did that event change the way you felt?',
    explanation: 'Thoughtful interview questions help the speaker give meaningful information.',
  },
  {
    prompt: 'What does audience awareness mean?',
    options: [
      'Choosing words and details that suit the listeners or readers',
      'Ignoring who will hear or read the response',
      'Always using the same style for every task',
      'Writing without checking if ideas make sense',
    ],
    answer: 'Choosing words and details that suit the listeners or readers',
    explanation: 'Audience awareness helps communication feel appropriate and effective.',
  },
  {
    prompt: 'Which note card is best for an oral response?',
    options: [
      'Short key words instead of a full script',
      'A page filled with tiny unreadable writing',
      'A completely blank card',
      'A card with only the date on it',
    ],
    answer: 'Short key words instead of a full script',
    explanation: 'Key words support speaking without forcing the learner to read every line.',
  },
  {
    prompt: 'Which sentence suits a formal review opening?',
    options: [
      'This book keeps the reader interested from the first page',
      'Yo, this story is wild and stuff',
      'I forgot what the book was about',
      'There is no reason to explain my opinion',
    ],
    answer: 'This book keeps the reader interested from the first page',
    explanation: 'A formal review opening uses clear, suitable language for the audience and purpose.',
  },
];

const ExtendedWritingSpeaking = () => (
  <CapsSubjectTopic
    title="Extended Writing and Speaking"
    subtitle="Organising reviews, essays, interviews, and oral responses for an audience"
    learnSteps={learnSteps}
    task="extended-writing-speaking"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ExtendedWritingSpeaking;
