import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Apply oral strategies in revision and exam-style contexts',
    image: {
      src: '/curriculum/grade8/xho/term4/listening-speaking/diagram.webp',
      alt: 'Grade 8 learners revising oral fluency through listening quizzes and prepared responses',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 Listening & Speaking focuses on <strong>oral revision, listening comprehension, prepared responses,</strong>{' '}
          and fluency.
        </p>
        <p className="text-slate-600">
          Use year-end strategies to answer accurately and present ideas confidently.
        </p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say these health, feelings, and celebration words aloud to build confidence for revision conversations.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Impilo"} phonetic={"[im'piːlɔ]"} meaning={"Health"} lang="xh" />
          <PronunciationPlayer word={"Uvuyo"} phonetic={"[u'vujɔ]"} meaning={"Joy"} lang="xh" />
          <PronunciationPlayer word={"Usizi"} phonetic={"[u'siːzi]"} meaning={"Sadness"} lang="xh" />
          <PronunciationPlayer word={"Ndidiniwe"} phonetic={"[ndi.di'niːwe]"} meaning={"I am tired"} lang="xh" />
          <PronunciationPlayer word={"Umnyhadala"} phonetic={"[umɲa'dala]"} meaning={"Celebration / event"} lang="xh" />
          <PronunciationPlayer word={"Phumla"} phonetic={"[pʰum'la]"} meaning={"Rest"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In oral revision, learners should mainly...',
    options: ['review and practise the core speaking skills', 'avoid all of the speaking tasks', 'change the topic every time they speak', 'ignore the feedback that they are given'],
    answer: 'review and practise the core speaking skills',
    explanation: 'Revision consolidates previously learned oral skills.',
  },
  {
    prompt: 'Listening quizzes usually test learners’ ability to...',
    options: ['recall key details from what they hear', 'draw diagrams of what is said', 'write poetry about what is said', 'translate every word of what is said'],
    answer: 'recall key details from what they hear',
    explanation: 'Listening tasks focus on comprehension and detail retrieval.',
  },
  {
    prompt: 'Prepared responses should be...',
    options: ['structured and relevant to the prompt', 'completely memorised without meaning', 'random and unrelated', 'one-word answers only'],
    answer: 'structured and relevant to the prompt',
    explanation: 'Strong responses stay focused and well organised.',
  },
  {
    prompt: 'Fluency in oral tasks is improved by...',
    options: ['practice, pacing and clear speech', 'rushing through the answers quickly', 'avoiding all of the pauses', 'speaking away from the topic'],
    answer: 'practice, pacing and clear speech',
    explanation: 'Fluency depends on clarity and controlled delivery.',
  },
  {
    prompt: 'Which is a useful exam-style speaking strategy?',
    options: ['pause briefly to plan before answering', 'answer before hearing the question', 'avoid main points', 'speak without structure'],
    answer: 'pause briefly to plan before answering',
    explanation: 'Short planning time improves answer quality.',
  },
  {
    prompt: 'When a listening text is replayed, learners should...',
    options: ['check and refine their first answers', 'start a new topic of their own', 'ignore the notes that they made before', 'erase all of the responses on the page'],
    answer: 'check and refine their first answers',
    explanation: 'A replay helps verify and improve accuracy.',
  },
  {
    prompt: 'In group oral revision, respectful behaviour includes...',
    options: ["taking turns and building on others' ideas", 'interrupting every speaker in the group', 'rejecting all of the other views', 'staying silent from start to end'],
    answer: "taking turns and building on others' ideas",
    explanation: 'Collaboration improves discussion quality.',
  },
  {
    prompt: 'A strong final oral answer should...',
    options: ['state the point clearly and briefly support it', 'repeat the question and nothing more', 'add examples that have no link to the point', 'avoid giving a conclusion at the end'],
    answer: 'state the point clearly and briefly support it',
    explanation: 'Clarity and support are key in assessment responses.',
  },
];

const ListeningSpeakingT4 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Oral revision, listening comprehension, prepared responses, and fluency"
    learnSteps={learnSteps}
    task="gr8-listening-speaking-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT4;
