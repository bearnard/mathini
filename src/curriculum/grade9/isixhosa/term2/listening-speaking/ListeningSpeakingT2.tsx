import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Prepared talks, interviews, summarising, group discussion, and role play',
    image: {
      src: '/curriculum/grade9/isixhosa/term2/listening-speaking/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners giving prepared talks and engaging in group discussions',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 2 Listening & Speaking focuses on <strong>prepared talks, interviews, summarising spoken information,</strong>{' '}
          group discussion, and role play.
        </p>
        <p className="text-slate-600">
          Learners summarise and communicate confidently in formal and informal situations.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A prepared talk should be...',
    options: ['practised beforehand and timed appropriately', 'completely improvised', 'read word-for-word from paper', 'done without any planning'],
    answer: 'practised beforehand and timed appropriately',
    explanation: 'Preparation ensures confidence, clarity, and respect for your audience\'s time.',
  },
  {
    prompt: 'When summarising spoken information, you should focus on...',
    options: ['main ideas and key details', 'every single word', 'irrelevant background', 'your own opinions'],
    answer: 'main ideas and key details',
    explanation: 'Summaries capture the essential message without unnecessary repetition.',
  },
  {
    prompt: 'In a formal interview, appropriate language means...',
    options: ['polite, standard, and professional register', 'slang and casual speech', 'very technical jargon', 'showing disrespect'],
    answer: 'polite, standard, and professional register',
    explanation: 'Formal register shows respect and professionalism in official contexts.',
  },
  {
    prompt: 'Role play helps learners...',
    options: ['practise real-world language in a safe environment', 'waste time', 'avoid actual communication', 'memorise textbooks'],
    answer: 'practise real-world language in a safe environment',
    explanation: 'Role play builds confidence and allows experimentation without high stakes.',
  },
  {
    prompt: 'In informal discussion with classmates, you may use...',
    options: ['conversational language and colloquial expressions', 'only formal academic language', 'no contractions', 'incomplete sentences always'],
    answer: 'conversational language and colloquial expressions',
    explanation: 'Informal settings allow for a more relaxed register while remaining respectful.',
  },
  {
    prompt: 'To ask effective interview questions, you should...',
    options: ['ask open-ended questions that invite detailed responses', 'ask only yes-or-no questions', 'ask leading questions', 'ask irrelevant questions'],
    answer: 'ask open-ended questions that invite detailed responses',
    explanation: 'Open questions generate rich information and genuine conversation.',
  },
  {
    prompt: 'When listening in a group discussion, you should...',
    options: ['listen actively, take notes, and prepare thoughtful responses', 'interrupt constantly', 'ignore other speakers', 'plan only your next point'],
    answer: 'listen actively, take notes, and prepare thoughtful responses',
    explanation: 'Active listening makes discussions productive and respectful.',
  },
  {
    prompt: 'A good summary is...',
    options: ['brief, accurate, and in your own words', 'a word-for-word repetition', 'longer than the original', 'missing key information'],
    answer: 'brief, accurate, and in your own words',
    explanation: 'Effective summaries show understanding by paraphrasing key points concisely.',
  },
];

const ListeningSpeakingT2 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Prepared talks, interviews, summarising, group discussion, and role play"
    learnSteps={learnSteps}
    task="gr9-listening-speaking-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT2;
