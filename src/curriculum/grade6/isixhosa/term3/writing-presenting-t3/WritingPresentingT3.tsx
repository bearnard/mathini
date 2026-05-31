import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Writing invitations, directions, and short recounts',
    image: {
      src: '/curriculum/grade6/xho/term3/writing-presenting-t3/diagram.webp',
      alt: 'learner writing an invitation, route directions, and a short recount paragraph',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Writing and presenting in Term 3 focuses on practical formats: invitations, directions, and short
          recounts linked to familiar events and cultural themes.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Invitation</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">date</span>
              <span className="rounded-full bg-white px-3 py-1">time</span>
              <span className="rounded-full bg-white px-3 py-1">venue</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Directions</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">sequence</span>
              <span className="rounded-full bg-white px-3 py-1">landmarks</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Recount</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">what happened</span>
              <span className="rounded-full bg-white px-3 py-1">order of events</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Connected sentences</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">linking words</span>
              <span className="rounded-full bg-white px-3 py-1">clear meaning</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Planning before writing improves quality',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Good writers plan ideas first. Use a simple structure so each sentence adds information and matches the
          topic.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Topic</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">main focus</span>
              <span className="rounded-full bg-white px-3 py-1">purpose</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Plan</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">idea list</span>
              <span className="rounded-full bg-white px-3 py-1">sequence</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Draft</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">write sentences</span>
              <span className="rounded-full bg-white px-3 py-1">stay on topic</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Edit</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">punctuation</span>
              <span className="rounded-full bg-white px-3 py-1">spelling</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Presenting writing clearly for audience',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Presentation matters. Neat layout, clear sentence flow, and correct format help readers understand your
          message quickly.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Format</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">fit the text type</span>
              <span className="rounded-full bg-white px-3 py-1">required details</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Paragraph flow</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">one main idea</span>
              <span className="rounded-full bg-white px-3 py-1">logical order</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Sentence links</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">then</span>
              <span className="rounded-full bg-white px-3 py-1">after that</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Audience awareness</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">clear message</span>
              <span className="rounded-full bg-white px-3 py-1">appropriate tone</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which detail must appear in a formal invitation?',
    options: ['Date, time, and venue', 'Only a drawing', 'Only one greeting word', 'A random number'],
    answer: 'Date, time, and venue',
    explanation: 'Invitations should include essential event information for the reader.',
  },
  {
    prompt: 'What makes directions easy to follow?',
    options: [
      'Steps written in logical order with landmarks',
      'Mixing all steps without sequence words',
      'Using unrelated details about weather only',
      'Leaving out the destination',
    ],
    answer: 'Steps written in logical order with landmarks',
    explanation: 'Directions need clear sequence and place clues.',
  },
  {
    prompt: 'A recount is mainly used to...',
    options: [
      'Describe events that happened in order',
      'List only nouns without verbs',
      'Give mathematical formulas',
      'Write a poster slogan only',
    ],
    answer: 'Describe events that happened in order',
    explanation: 'Recounts tell what happened and follow event sequence.',
  },
  {
    prompt: 'Why is planning useful before drafting?',
    options: [
      'It helps organise ideas and stay on topic',
      'It removes the need for sentences',
      'It replaces revision completely',
      'It makes format unnecessary',
    ],
    answer: 'It helps organise ideas and stay on topic',
    explanation: 'Planning supports clear structure and focused writing.',
  },
  {
    prompt: 'Which linking word best shows sequence in a paragraph?',
    options: ['After that', 'Blue', 'Mountain', 'Yesterdayly'],
    answer: 'After that',
    explanation: 'Sequence linkers help connect actions in logical order.',
  },
  {
    prompt: 'What should you check during editing?',
    options: ['Spelling and punctuation', 'Only font colour', 'Only page margin size', 'Only desk arrangement'],
    answer: 'Spelling and punctuation',
    explanation: 'Editing improves correctness and readability.',
  },
  {
    prompt: 'Which sentence is best for an invitation opening?',
    options: [
      'You are warmly invited to our cultural day celebration',
      'Come maybe somewhere sometime',
      'I think writing is hard and that is all',
      'This invitation has no purpose',
    ],
    answer: 'You are warmly invited to our cultural day celebration',
    explanation: 'It clearly states the purpose and audience in a suitable tone.',
  },
  {
    prompt: 'What helps a picture paragraph stay connected?',
    options: [
      'Sentences that all describe the same scene',
      'A new unrelated topic in every line',
      'No verbs in any sentence',
      'Only repeating one word',
    ],
    answer: 'Sentences that all describe the same scene',
    explanation: 'Connected sentences should build one clear idea.',
  },
  {
    prompt: 'In CAPS-style writing assessment, format checks mainly look at...',
    options: [
      'Whether the text type features are used correctly',
      'How expensive the pen was',
      'Whether the learner wrote in one minute',
      'Whether the page has stickers',
    ],
    answer: 'Whether the text type features are used correctly',
    explanation: 'Format checks assess if required structural elements are present.',
  },
];

const WritingPresentingT3 = () => (
  <CapsSubjectTopic
    title="Writing and Presenting"
    subtitle="Producing invitations, directions, recounts, and connected paragraphs"
    learnSteps={learnSteps}
    task="writing-presenting-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT3;
