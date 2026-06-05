import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Narrative and descriptive essays with clear structure and audience awareness',
    image: {
      src: '/curriculum/grade9/isixhosa/term1/writing-presenting/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners writing narrative and descriptive essays with planning and drafting',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 1 Writing & Presenting focuses on <strong>narrative and descriptive essays, personal reflection,</strong>{' '}
          friendly letters, and structured planning.
        </p>
        <p className="text-slate-600">
          Learners write more developed responses with clearer structure, detail, and awareness of their audience.
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
    prompt: 'A good essay typically has...',
    options: ['introduction, body paragraphs, conclusion', 'only one sentence', 'no structure', 'random order'],
    answer: 'introduction, body paragraphs, conclusion',
    explanation: 'Clear structure helps readers follow your ideas from start to finish.',
  },
  {
    prompt: 'Paragraph unity means...',
    options: ['all sentences in a paragraph focus on one main idea', 'paragraphs should be very long', 'mix all topics together', 'no topic sentences needed'],
    answer: 'all sentences in a paragraph focus on one main idea',
    explanation: 'Unified paragraphs are easier to understand and more persuasive.',
  },
  {
    prompt: 'A topic sentence in a paragraph...',
    options: ['introduces the main idea', 'tells a joke', 'ends the paragraph', 'is always hidden'],
    answer: 'introduces the main idea',
    explanation: 'Topic sentences guide readers and organize your essay effectively.',
  },
  {
    prompt: 'Good descriptive writing uses...',
    options: ['sensory details and vivid language', 'only adjectives', 'technical jargon', 'no verbs'],
    answer: 'sensory details and vivid language',
    explanation: 'Details help readers visualize and engage with your description.',
  },
  {
    prompt: 'When planning an essay, you should first...',
    options: ['brainstorm ideas and create an outline', 'start writing the final copy', 'only use one idea', 'skip planning entirely'],
    answer: 'brainstorm ideas and create an outline',
    explanation: 'Planning saves time and improves the quality of your final essay.',
  },
  {
    prompt: 'Tone in writing should match...',
    options: ['your audience and purpose', 'the longest words you know', 'how angry you feel', 'random choices'],
    answer: 'your audience and purpose',
    explanation: 'Matching tone to context makes your message more effective and professional.',
  },
  {
    prompt: 'A friendly letter typically includes...',
    options: ['greeting, body, closing, and signature', 'only numbers', 'no organization', 'irrelevant information'],
    answer: 'greeting, body, closing, and signature',
    explanation: 'This format is expected and shows respect for the reader.',
  },
  {
    prompt: 'Supporting details in narrative writing should...',
    options: ['develop the plot and help readers understand events', 'confuse the reader', 'be unrelated to the story', 'contradict the main idea'],
    answer: 'develop the plot and help readers understand events',
    explanation: 'Good details create a coherent, engaging narrative that readers can follow.',
  },
];

const WritingPresentingT1 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Narrative and descriptive essays, personal reflection, friendly letters, and planning"
    learnSteps={learnSteps}
    task="gr9-writing-presenting-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT1;
