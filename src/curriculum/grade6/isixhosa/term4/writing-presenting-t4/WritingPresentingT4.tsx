import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Write connected paragraphs',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In Term 4, learners write a <strong>personal paragraph</strong> with a clear topic, supporting ideas, and a
          simple ending sentence.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Topic sentence</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">main point</span>
              <span className="rounded-full bg-white px-3 py-1">clear focus</span>
            </div>
          </div>
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Details</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">examples</span>
              <span className="rounded-full bg-white px-3 py-1">linked ideas</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Vocabulary</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">familiar words</span>
              <span className="rounded-full bg-white px-3 py-1">correct meaning</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Closing</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">final thought</span>
              <span className="rounded-full bg-white px-3 py-1">complete paragraph</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Practise simple reviews and messages',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Writing tasks include short <strong>reviews</strong>, messages, and revision activities. Match tone and
          purpose to the audience.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Review</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">what you liked</span>
              <span className="rounded-full bg-white px-3 py-1">simple reason</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Message</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">to whom</span>
              <span className="rounded-full bg-white px-3 py-1">what is needed</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Purpose</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">inform</span>
              <span className="rounded-full bg-white px-3 py-1">request</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Tone</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">polite</span>
              <span className="rounded-full bg-white px-3 py-1">clear</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use picture writing and editing checks',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Picture prompts help learners generate ideas. After writing, edit spelling, punctuation, and sentence order
          before presenting final work.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Observe</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">who</span>
              <span className="rounded-full bg-white px-3 py-1">where</span>
              <span className="rounded-full bg-white px-3 py-1">what happens</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Draft</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">first version</span>
              <span className="rounded-full bg-white px-3 py-1">do not panic</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Edit</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">spelling</span>
              <span className="rounded-full bg-white px-3 py-1">punctuation</span>
            </div>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <strong className="text-yellow-800">Present</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-yellow-700">
              <span className="rounded-full bg-white px-3 py-1">neat layout</span>
              <span className="rounded-full bg-white px-3 py-1">final copy</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Use these revision words while polishing messages, reviews, summaries, and final written responses.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Umhlathi"} phonetic={"[um'ɬaːti]"} meaning={"Paragraph"} lang="xh" />
          <PronunciationPlayer word={"Umyalezo"} phonetic={"[umja'lɛzo]"} meaning={"Message"} lang="xh" />
          <PronunciationPlayer word={"Uphononongo"} phonetic={"[upʰɔ.nɔ'nɔŋgɔ]"} meaning={"Review"} lang="xh" />
          <PronunciationPlayer word={"Isishwankathelo"} phonetic={"[isiʃwaŋka'tʰeːlɔ]"} meaning={"Summary"} lang="xh" />
          <PronunciationPlayer word={"Ukuhlela"} phonetic={"[uku'ɬɛla]"} meaning={"Editing"} lang="xh" />
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What should a personal paragraph begin with?',
    options: ['A clear topic sentence', 'A random punctuation mark', 'Only a greeting word', 'A list of unrelated numbers'],
    answer: 'A clear topic sentence',
    explanation: 'A topic sentence introduces the main idea of the paragraph.',
  },
  {
    prompt: 'Which detail best supports a topic sentence?',
    options: ['A relevant example linked to the topic', 'A sentence about a different subject', 'A repeated heading with no detail', 'A copied line that changes meaning'],
    answer: 'A relevant example linked to the topic',
    explanation: 'Supporting details should explain or develop the main point.',
  },
  {
    prompt: 'When writing a short message, what is most important?',
    options: ['State who the message is for and the purpose', 'Use as many difficult words as possible', 'Avoid all punctuation completely', 'Write unrelated jokes only'],
    answer: 'State who the message is for and the purpose',
    explanation: 'Messages must be clear about audience and reason.',
  },
  {
    prompt: 'A simple review should include…',
    options: ['an opinion and a reason', 'only copied dictionary definitions', 'no personal response at all', 'a full history chapter'],
    answer: 'an opinion and a reason',
    explanation: 'A review briefly says what you thought and why.',
  },
  {
    prompt: 'In picture writing, what should you do first?',
    options: ['Look carefully at people, place, and action', 'Write the final copy immediately', 'Skip planning and editing', 'Ignore what the picture shows'],
    answer: 'Look carefully at people, place, and action',
    explanation: 'Observing the picture gives accurate ideas for writing.',
  },
  {
    prompt: 'What is the purpose of editing before presenting?',
    options: ['To correct spelling and punctuation mistakes', 'To remove every full sentence', 'To change the topic completely', 'To shorten writing to one word'],
    answer: 'To correct spelling and punctuation mistakes',
    explanation: 'Editing improves accuracy and clarity in the final text.',
  },
  {
    prompt: 'Which tone is best for a school message to a teacher?',
    options: ['Polite and respectful', 'Rude and demanding', 'Careless and confusing', 'Mocking and sarcastic'],
    answer: 'Polite and respectful',
    explanation: 'School writing should use respectful tone for the audience.',
  },
  {
    prompt: 'How can a writer make a paragraph more connected?',
    options: ['Keep ideas in logical order', 'Jump between unrelated events', 'Repeat one sentence many times', 'Use no full stops at all'],
    answer: 'Keep ideas in logical order',
    explanation: 'Logical sequence helps the reader follow your writing.',
  },
  {
    prompt: 'Which task matches Term 4 Writing & Presenting?',
    options: ['Writing a short connected piece from a familiar prompt', 'Designing a science experiment report only', 'Solving long division worksheets', 'Memorising map coordinates'],
    answer: 'Writing a short connected piece from a familiar prompt',
    explanation: 'Term 4 writing focuses on connected short texts with relevant vocabulary.',
  },
];

const WritingPresentingT4 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Paragraphs, short messages, reviews, and picture-based writing"
    learnSteps={learnSteps}
    task="writing-presenting-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default WritingPresentingT4;
