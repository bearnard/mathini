import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Synthesize knowledge of integrated systems',
    image: {
      src: '/curriculum/grade9/technology/term4/technology-society/image1.jpg',
      alt: 'learner analyzing how multiple technologies work together as integrated systems to solve societal problems',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Technology systems integrate mechanical, electrical, and material components. Understanding how systems interact 
          prepares you to design and troubleshoot real-world solutions in transportation, energy, construction, and manufacturing.
        </p>
      </div>
    ),
  },
  {
    title: 'Evaluate sustainability and societal impact',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Technology affects environment, economy, and society. Sustainable design minimizes resource use and waste. 
          Safety considerations protect users. Clear communication of designs ensures understanding and successful implementation.
        </p>
      </div>
    ),
  },
  {
    title: 'Consolidate PAT work and prepare for exams',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Review and refine all PAT projects (structures, electronic systems). Practice exam-style responses: diagrams, 
          calculations, design justifications, and structured written answers. Connect theory to practical work for comprehensive understanding.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a technology system?',
    options: ['a combination of mechanical, electrical, and material components working together to achieve a goal', 'a single tool only', 'just computers', 'a theoretical concept only'],
    answer: 'a combination of mechanical, electrical, and material components working together to achieve a goal',
    explanation: 'Systems thinking helps understand how different technologies interact in real-world applications.',
  },
  {
    prompt: 'Why is sustainability important in technology?',
    options: ['sustainable design minimizes resource consumption, waste, and environmental impact while meeting needs', 'sustainability is not important', 'it only increases costs', 'it has no effect on the environment'],
    answer: 'sustainable design minimizes resource consumption, waste, and environmental impact while meeting needs',
    explanation: 'Sustainable technology ensures long-term environmental and economic viability.',
  },
  {
    prompt: 'What is the importance of safety in technology design?',
    options: ['safety protects users from harm and ensures reliable, responsible product performance', 'safety is not necessary', 'safety adds unnecessary cost', 'only professionals need safety'],
    answer: 'safety protects users from harm and ensures reliable, responsible product performance',
    explanation: 'Design must identify hazards and implement safeguards to prevent injuries.',
  },
  {
    prompt: 'How does clear communication affect technology adoption?',
    options: ['clear communication ensures understanding, proper use, and successful implementation of designs', 'communication does not matter', 'poor communication is beneficial', 'silence is best'],
    answer: 'clear communication ensures understanding, proper use, and successful implementation of designs',
    explanation: 'Effective diagrams, instructions, and specifications enable correct use of technology.',
  },
  {
    prompt: 'What should a complete PAT project include?',
    options: ['design brief, research, sketches, prototype/assembly, testing results, and evaluation against criteria', 'just the final product', 'no documentation', 'only calculations'],
    answer: 'design brief, research, sketches, prototype/assembly, testing results, and evaluation against criteria',
    explanation: 'Comprehensive documentation demonstrates design thinking and problem-solving across the project.',
  },
  {
    prompt: 'How do you present technical information in exam-style responses?',
    options: ['use clear diagrams, label key features, include calculations, explain your reasoning, and justify design choices', 'write without diagrams', 'provide no calculations', 'avoid explanations'],
    answer: 'use clear diagrams, label key features, include calculations, explain your reasoning, and justify design choices',
    explanation: 'Structured, detailed responses demonstrate comprehensive understanding and earn maximum marks.',
  },
  {
    prompt: 'What is the relationship between environmental and economic considerations in sustainable technology?',
    options: ['environmentally responsible choices often lead to long-term economic benefits through efficiency and reduced waste', 'environment and economy are unrelated', 'protecting the environment costs money', 'economic growth harms the environment'],
    answer: 'environmentally responsible choices often lead to long-term economic benefits through efficiency and reduced waste',
    explanation: 'Sustainable design balances environmental protection with economic viability.',
  },
  {
    prompt: 'How should you approach revision of all four terms of technology content?',
    options: ['review key concepts, practice calculations, redraw designs, identify connections between topics, and answer past exam questions', 'review is unnecessary', 'only memorize facts', 'skip practical topics'],
    answer: 'review key concepts, practice calculations, redraw designs, identify connections between topics, and answer past exam questions',
    explanation: 'Active revision strategies deepen understanding and prepare you for varied exam formats.',
  },
];

const TechnologySociety = () => (
  <CapsSubjectTopic
    title="Technology in Society and Exam Consolidation"
    subtitle="Systems integration, sustainability, safety, communication of designs, PAT review, exam-style responses"
    learnSteps={learnSteps}
    task="gr9-technology-society-t4"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default TechnologySociety;
