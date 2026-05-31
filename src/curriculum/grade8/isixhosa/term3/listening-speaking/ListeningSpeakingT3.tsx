import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Respond independently in prepared and collaborative oral tasks',
    image: {
      src: '/curriculum/grade8/xho/term3/listening-speaking/diagram.webp',
      alt: 'Grade 8 learners delivering prepared speeches and taking part in role-play discussion',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 oral work includes <strong>prepared speeches, discussions, role play,</strong> and oral responses to
          literature.
        </p>
        <p className="text-slate-600">
          Build confidence in group interaction and support opinions with evidence from texts.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A prepared speech should include...',
    options: ['an organised introduction, body, and ending', 'random points only', 'no planning', 'one repeated line'],
    answer: 'an organised introduction, body, and ending',
    explanation: 'A clear structure helps listeners follow your ideas.',
  },
  {
    prompt: 'In a discussion, respectful participation means...',
    options: ['listening and responding to others', 'interrupting continuously', 'changing topic each turn', 'ignoring all questions'],
    answer: 'listening and responding to others',
    explanation: 'Good discussions depend on active listening and relevant replies.',
  },
  {
    prompt: 'Role play tasks are used to...',
    options: ['simulate real communication situations', 'memorise punctuation symbols only', 'avoid speaking', 'write long essays'],
    answer: 'simulate real communication situations',
    explanation: 'Role play develops practical language use.',
  },
  {
    prompt: 'When responding orally to literature, you should...',
    options: ['refer to details from the text', 'speak without reading', 'ignore characters', 'invent a different story'],
    answer: 'refer to details from the text',
    explanation: 'Textual evidence strengthens literary responses.',
  },
  {
    prompt: 'Which is the best opening for a prepared talk?',
    options: ['Namhlanje ndiza kuthetha ngo...', 'Andazi ukuba kutheni ndimi apha.', 'Ndinexesha elincinci kuphela.', 'Mna ndigqibile.'],
    answer: 'Namhlanje ndiza kuthetha ngo...',
    explanation: 'A focused opening signals the topic clearly.',
  },
  {
    prompt: 'If a partner disagrees in a role play, you should...',
    options: ['respond politely with reasons', 'stop the task', 'mock the partner', 'repeat the same sentence loudly'],
    answer: 'respond politely with reasons',
    explanation: 'Constructive disagreement supports communication skills.',
  },
  {
    prompt: 'Oral fluency improves when learners...',
    options: ['practise and organise key points', 'avoid preparation', 'speak with no pauses ever', 'ignore audience reactions'],
    answer: 'practise and organise key points',
    explanation: 'Preparation and practice improve confidence and flow.',
  },
  {
    prompt: 'A strong oral conclusion should...',
    options: ['summarise the main message', 'add unrelated facts', 'restart the introduction', 'end without final idea'],
    answer: 'summarise the main message',
    explanation: 'Conclusions reinforce the key takeaway for listeners.',
  },
];

const ListeningSpeakingT3 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Prepared speeches, discussions, role play, and oral response to literature"
    learnSteps={learnSteps}
    task="gr8-listening-speaking-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT3;
