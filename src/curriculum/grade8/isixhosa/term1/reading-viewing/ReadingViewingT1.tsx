import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Interpret words and visuals in different short texts',
    image: {
      src: '/curriculum/grade8/xho/term1/reading-viewing/diagram.webp',
      alt: 'Grade 8 learners analysing an advertisement, short story, and poem for meaning clues',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          This topic covers <strong>visual texts, advertisements, short stories, and poems</strong> with comprehension
          strategies.
        </p>
        <p className="text-slate-600">
          Focus on finding key details, main ideas, sequence, and vocabulary in context.
        </p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practice these reading-and-viewing words so that key text types are easy to recognise and discuss.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Ibali"} phonetic={"[i'baːli]"} meaning={"Story"} lang="xh" />
          <PronunciationPlayer word={"Isaziso"} phonetic={"[isa'ziːso]"} meaning={"Notice"} lang="xh" />
          <PronunciationPlayer word={"Isibhengezo"} phonetic={"[isi.bhɛŋ'gɛːzo]"} meaning={"Advertisement / poster"} lang="xh" />
          <PronunciationPlayer word={"Umfanekiso"} phonetic={"[umfa'nɛkiso]"} meaning={"Picture / image"} lang="xh" />
          <PronunciationPlayer word={"Umbongo"} phonetic={"[um'bɔŋgɔ]"} meaning={"Poem"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'The main purpose of an advertisement is usually to...',
    options: ['persuade an audience', 'tell a folktale', 'explain grammar rules', 'record attendance'],
    answer: 'persuade an audience',
    explanation: 'Advertisements are designed to influence readers or viewers.',
  },
  {
    prompt: 'Which question checks the main idea of a passage?',
    options: ['What is the text mostly about?', 'How many commas are there?', 'Who printed the page?', 'What colour is the desk?'],
    answer: 'What is the text mostly about?',
    explanation: 'Main idea asks for the central meaning of the text.',
  },
  {
    prompt: 'In a short story, sequence questions ask learners to...',
    options: ['order events correctly', 'count only adjectives', 'rename all characters', 'change the ending'],
    answer: 'order events correctly',
    explanation: 'Sequencing checks understanding of event order.',
  },
  {
    prompt: 'Visual literacy includes reading...',
    options: ['images, layout, and symbols', 'only long paragraphs', 'math equations only', 'spelling lists only'],
    answer: 'images, layout, and symbols',
    explanation: 'Visual texts communicate meaning beyond words.',
  },
  {
    prompt: 'If a poem repeats a word, it often helps to...',
    options: ['emphasise an idea or mood', 'hide the topic completely', 'remove all imagery', 'change the writer'],
    answer: 'emphasise an idea or mood',
    explanation: 'Repetition often strengthens feeling or meaning.',
  },
  {
    prompt: 'Vocabulary in context means you should...',
    options: ['use nearby clues to find meaning', 'ignore the sentence', 'choose the longest word', 'translate every line first'],
    answer: 'use nearby clues to find meaning',
    explanation: 'Context clues help determine a word’s meaning.',
  },
  {
    prompt: 'A supporting detail in comprehension is...',
    options: ['evidence that backs the main idea', 'the title font style', 'a random opinion only', 'the page number'],
    answer: 'evidence that backs the main idea',
    explanation: 'Supporting details provide proof from the text.',
  },
  {
    prompt: 'The best way to answer a text-based question is to...',
    options: ['refer to evidence from the passage', 'guess without reading', 'copy any option quickly', 'skip the question'],
    answer: 'refer to evidence from the passage',
    explanation: 'Evidence-based answers are more accurate and reliable.',
  },
];

const ReadingViewingT1 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Visual texts, advertisements, short stories, poems, and comprehension strategies"
    learnSteps={learnSteps}
    task="gr8-reading-viewing-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT1;
