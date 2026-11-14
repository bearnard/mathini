import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Develop narrative, descriptive, and friendly-format writing',
    image: {
      src: '/curriculum/grade8/xho/term1/writing-presenting/diagram.webp',
      alt: 'Grade 8 learner drafting a narrative paragraph, descriptive text, and friendly letter',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Writing & Presenting in Term 1 includes <strong>narrative paragraphs, descriptive pieces, friendly letters,</strong>{' '}
          and dialogue drafting.
        </p>
        <p className="text-slate-600">
          Plan first, draft clearly, then redraft for better structure and language control.
        </p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practise these personal-information words aloud before writing simple sentences and short paragraphs.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Ndingu..."} phonetic={"[ndiŋ'gu]"} meaning={"I am ... / My name is ..."} lang="xh" />
          <PronunciationPlayer word={"Igama"} phonetic={"[i'gama]"} meaning={"Name"} lang="xh" />
          <PronunciationPlayer word={"Ikhaya"} phonetic={"[i'kʰaja]"} meaning={"Home"} lang="xh" />
          <PronunciationPlayer word={"Isikolo"} phonetic={"[isi'kɔlɔ]"} meaning={"School"} lang="xh" />
          <PronunciationPlayer word={"Umhlobo"} phonetic={"[um'ɬɔbɔ]"} meaning={"Friend"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A narrative paragraph should usually include...',
    options: ['a sequence of events', 'only a shopping list', 'random headings', 'just one isolated word'],
    answer: 'a sequence of events',
    explanation: 'Narratives are built around events in logical order.',
  },
  {
    prompt: 'Descriptive writing is strongest when it uses...',
    options: ['specific sensory details about what is described', 'only numbers and dates, with no description', 'no adjectives at all, to keep it short', 'no clear topic, so that it feels free'],
    answer: 'specific sensory details about what is described',
    explanation: 'Details help readers imagine the scene clearly.',
  },
  {
    prompt: 'Which belongs in a friendly letter?',
    options: ['a greeting and sign-off', 'formal legal language only', 'a bibliography page', 'math calculations'],
    answer: 'a greeting and sign-off',
    explanation: 'Friendly letters follow informal but clear format conventions.',
  },
  {
    prompt: 'Dialogue writing should show...',
    options: ['speaker turns clearly', 'one endless sentence', 'no punctuation', 'no change of voice'],
    answer: 'speaker turns clearly',
    explanation: 'Dialogue needs clear turn-taking between speakers.',
  },
  {
    prompt: 'What is the purpose of drafting?',
    options: ['to shape ideas before the final writing', 'to skip the planning stage of the task', 'to avoid any revision of the work', 'to remove all of the detail from the work'],
    answer: 'to shape ideas before the final writing',
    explanation: 'Drafting helps organize and improve writing before final submission.',
  },
  {
    prompt: 'An effective paragraph usually has...',
    options: ['one main idea with support', 'many unrelated topics', 'no full stops', 'only headings'],
    answer: 'one main idea with support',
    explanation: 'Unity and support make paragraphs clear and coherent.',
  },
  {
    prompt: 'Redrafting improves writing by...',
    options: ['fixing clarity and language errors', 'adding random facts', 'removing punctuation', 'shortening every sentence blindly'],
    answer: 'fixing clarity and language errors',
    explanation: 'Redrafting focuses on quality and accuracy.',
  },
  {
    prompt: 'When presenting written work orally, you should...',
    options: ['speak clearly and keep key points', 'read as fast as possible', 'skip difficult words only', 'avoid eye contact completely'],
    answer: 'speak clearly and keep key points',
    explanation: 'Clear delivery helps the audience follow your writing.',
  },
];

const WritingPresentingT1 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Narrative paragraphs, descriptive writing, friendly letters, dialogue, and drafting"
    learnSteps={learnSteps}
    task="gr8-writing-presenting-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT1;
