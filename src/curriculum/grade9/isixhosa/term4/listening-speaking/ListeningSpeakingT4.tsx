import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Revision of speeches, listening practice, oral feedback, and fluency consolidation',
    image: {
      src: '/curriculum/grade9/isixhosa/term4/listening-speaking/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners revising speeches and practising fluent, confident oral delivery',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 Listening & Speaking focuses on <strong>revision of speeches, listening practice,</strong>{' '}
          oral feedback, and fluency consolidation.
        </p>
        <p className="text-slate-600">
          Learners consolidate speaking and listening routines in preparation for end-of-year assessment.
        </p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practice these formal oral-task words before speeches, interviews, summaries, or discussions.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Intetho"} phonetic={"[in'tɛːtʰɔ]"} meaning={"Speech"} lang="xh" />
          <PronunciationPlayer word={"Ingxoxo"} phonetic={"[iŋ'xɔxɔ]"} meaning={"Discussion"} lang="xh" />
          <PronunciationPlayer word={"Udliwano-ndlebe"} phonetic={"[udli'wanɔ ndlɛbɛ]"} meaning={"Interview"} lang="xh" />
          <PronunciationPlayer word={"Phulaphula"} phonetic={"[pʰula'pʰula]"} meaning={"Listen"} lang="xh" />
          <PronunciationPlayer word={"Thetha"} phonetic={"[tɛta]"} meaning={"Speak"} lang="xh" />
          <PronunciationPlayer word={"Isishwankathelo"} phonetic={"[isiʃwaŋka'tʰeːlɔ]"} meaning={"Summary"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Revisiting key speaking skills helps you...',
    options: ['build confidence and consistency before the final assessment', 'waste time that you need for new work', 'bring in new errors that were not there before', 'make you forget what you learned earlier'],
    answer: 'build confidence and consistency before the final assessment',
    explanation: 'Revision strengthens skills and reduces anxiety about performance.',
  },
  {
    prompt: 'Oral feedback from peers or teachers should focus on...',
    options: ['specific strengths and areas for improvement', 'personal criticism of the speaker', 'negative comments and no praise', 'details that have no link to the performance'],
    answer: 'specific strengths and areas for improvement',
    explanation: 'Constructive feedback is more helpful and motivating.',
  },
  {
    prompt: 'Fluency in speaking develops through...',
    options: ['repeated practice and exposure to natural speech', 'reading silently to yourself each day', 'avoiding speaking so that you make no errors', 'memorising set scripts and nothing else'],
    answer: 'repeated practice and exposure to natural speech',
    explanation: 'Practice builds automaticity and reduces hesitation.',
  },
  {
    prompt: 'When practising listening, focusing on key words helps you...',
    options: ['get the meaning even when you miss some words', 'understand every word that the speaker says', 'feel more confused by the extra detail', 'give up when you hear an unknown word'],
    answer: 'get the meaning even when you miss some words',
    explanation: 'Selective listening is a realistic and practical skill.',
  },
  {
    prompt: 'Self-assessment of your own oral performance involves...',
    options: ['reflecting on what went well and what needs work', 'ignoring your performance once it is over', 'comparing yourself with other learners only', 'finding excuses for the weak parts'],
    answer: 'reflecting on what went well and what needs work',
    explanation: 'Self-reflection promotes metacognition and lifelong learning.',
  },
  {
    prompt: 'A revision strategy for listening comprehension is to...',
    options: ['listen to different speakers and topics often', 'avoid listening until the day of the test', 'listen to one speaker once and then stop', 'listen while doing other things at the same time'],
    answer: 'listen to different speakers and topics often',
    explanation: 'Exposure to variety improves adaptability and comprehension.',
  },
  {
    prompt: 'Asking for clarification during revision shows...',
    options: ['a desire to improve and learn', 'that you do not understand anything', 'weakness', 'disrespect for the teacher'],
    answer: 'a desire to improve and learn',
    explanation: 'Asking questions demonstrates active engagement.',
  },
  {
    prompt: 'To evaluate your fluency, you should consider...',
    options: ['pace, pronunciation and confidence, with few long pauses', 'speed alone, since faster is better', 'volume alone, since louder is clearer', 'your appearance and your clothing on the day'],
    answer: 'pace, pronunciation and confidence, with few long pauses',
    explanation: 'True fluency involves multiple components beyond just speed.',
  },
];

const ListeningSpeakingT4 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Revision of speeches, listening practice, oral feedback, and fluency consolidation"
    learnSteps={learnSteps}
    task="gr9-listening-speaking-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT4;
