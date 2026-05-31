import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Debate, prepared speech, oral response to literature, and panel discussion',
    image: {
      src: '/curriculum/grade9/isixhosa/term3/listening-speaking/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners engaging in debate and oral literary discussions',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 Listening & Speaking focuses on <strong>debate, prepared speeches, oral responses to literature,</strong>{' '}
          and panel discussion.
        </p>
        <p className="text-slate-600">
          Learners argue points of view more clearly and respond to literature and social issues in spoken form.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A debate is a formal discussion where...',
    options: ['two sides present arguments and counter-arguments', 'only one person speaks', 'no evidence is needed', 'no one listens carefully'],
    answer: 'two sides present arguments and counter-arguments',
    explanation: 'Debate requires structured argument, evidence, and respectful opposition.',
  },
  {
    prompt: 'In a debate, a strong argument includes...',
    options: ['clear claim, supporting evidence, and logical reasoning', 'only opinions', 'feelings without facts', 'ad hominem attacks'],
    answer: 'clear claim, supporting evidence, and logical reasoning',
    explanation: 'Evidence-based arguments are more persuasive and intellectually honest.',
  },
  {
    prompt: 'An oral response to a literary text should show...',
    options: ['understanding through examples and interpretation', 'that you did not read the text', 'only emotion', 'random ideas'],
    answer: 'understanding through examples and interpretation',
    explanation: 'Responses supported by textual evidence demonstrate genuine comprehension.',
  },
  {
    prompt: 'A panel discussion differs from a debate because...',
    options: ['multiple experts discuss a topic from different perspectives', 'one person talks the whole time', 'there is no clear topic', 'no questions are asked'],
    answer: 'multiple experts discuss a topic from different perspectives',
    explanation: 'Panels explore nuance; debates typically have winners and losers.',
  },
  {
    prompt: 'When preparing a speech for debate, you should...',
    options: ['research thoroughly, plan your points, and anticipate counter-arguments', 'wing it and hope', 'memorize everything verbatim', 'be unprepared'],
    answer: 'research thoroughly, plan your points, and anticipate counter-arguments',
    explanation: 'Preparation shows respect for your audience and strengthens your position.',
  },
  {
    prompt: 'Responding to an opposing view in debate should...',
    options: ['acknowledge the point, refute respectfully with evidence', 'dismiss it angrily', 'ignore it completely', 'agree without thought'],
    answer: 'acknowledge the point, refute respectfully with evidence',
    explanation: 'Respectful engagement makes debates productive and credible.',
  },
  {
    prompt: 'A quotation from a text in oral response serves to...',
    options: ['support your interpretation with direct evidence', 'fill time', 'confuse listeners', 'avoid analysis'],
    answer: 'support your interpretation with direct evidence',
    explanation: 'Direct quotes anchor your analysis and show close reading.',
  },
  {
    prompt: 'In a panel discussion, listening to other speakers helps you...',
    options: ['build on ideas, find common ground, and ask informed follow-up questions', 'plan your own speech only', 'wait to argue', 'miss important points'],
    answer: 'build on ideas, find common ground, and ask informed follow-up questions',
    explanation: 'Active listening in dialogue creates meaningful, coherent discussion.',
  },
];

const ListeningSpeakingT3 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Debate, prepared speech, oral response to literature, and panel discussion"
    learnSteps={learnSteps}
    task="gr9-listening-speaking-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT3;
