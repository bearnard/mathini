import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

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
    prompt: 'A prepared talk should be...',
    options: ['practised beforehand and timed to fit', 'made up on the spot as you speak', 'read word for word from a page of paper', 'given with no planning of its parts'],
    answer: 'practised beforehand and timed to fit',
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
    options: ['polite, standard and professional language', 'slang and casual speech in a relaxed tone', 'very technical terms that few people know', 'a tone that shows disrespect for the panel'],
    answer: 'polite, standard and professional language',
    explanation: 'Formal register shows respect and professionalism in official contexts.',
  },
  {
    prompt: 'Role play helps learners...',
    options: ['practise real-world language in a safe setting', 'waste lesson time on acting games', 'avoid real communication with others', 'memorise passages from a textbook'],
    answer: 'practise real-world language in a safe setting',
    explanation: 'Role play builds confidence and allows experimentation without high stakes.',
  },
  {
    prompt: 'In informal discussion with classmates, you may use...',
    options: ['conversational language and colloquial expressions', 'formal academic language only, at all times', 'full sentences with no short forms', 'half-finished sentences in every reply'],
    answer: 'conversational language and colloquial expressions',
    explanation: 'Informal settings allow for a more relaxed register while remaining respectful.',
  },
  {
    prompt: 'To ask effective interview questions, you should...',
    options: ['ask open-ended questions that invite full replies', 'ask only yes-or-no questions that are quick', 'ask leading questions that suggest the reply', 'ask questions with no link to the topic'],
    answer: 'ask open-ended questions that invite full replies',
    explanation: 'Open questions generate rich information and genuine conversation.',
  },
  {
    prompt: 'When listening in a group discussion, you should...',
    options: ['listen actively, take notes and plan replies', 'interrupt each speaker to give your own view', 'ignore the speakers who disagree with you', 'think only about your own next point to make'],
    answer: 'listen actively, take notes and plan replies',
    explanation: 'Active listening makes discussions productive and respectful.',
  },
  {
    prompt: 'A good summary is...',
    options: ['brief, accurate and in your own words', 'a word-for-word copy of the original', 'longer than the text it summarises', 'missing the key facts of the original'],
    answer: 'brief, accurate and in your own words',
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
