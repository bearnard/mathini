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
    options: ['mechanical, electrical and material parts working towards a goal', 'one single tool that is used for just one task only', 'a computer program that has no parts that you can touch', 'a drawing of a product that has not been made yet'],
    answer: 'mechanical, electrical and material parts working towards a goal',
    explanation: 'Systems thinking helps understand how different technologies interact in real-world applications.',
  },
  {
    prompt: 'Why is sustainability important in technology?',
    options: ['sustainable design uses fewer resources and makes less waste and pollution', 'sustainable design always costs more and works less well', 'sustainable design uses only new materials and never reuses', 'sustainable design makes products last only a short time'],
    answer: 'sustainable design uses fewer resources and makes less waste and pollution',
    explanation: 'Sustainable technology ensures long-term environmental and economic viability.',
  },
  {
    prompt: 'What is the importance of safety in technology design?',
    options: ['safety protects users from harm and makes products dependable', 'safety makes products look more modern to buyers', 'safety is the job of the user and not the designer', 'safety is needed only when making large machines'],
    answer: 'safety protects users from harm and makes products dependable',
    explanation: 'Design must identify hazards and implement safeguards to prevent injuries.',
  },
  {
    prompt: 'How does clear communication affect technology adoption?',
    options: ['clear communication helps people understand and use designs well', 'clear communication makes designs cheaper to build', 'clear communication replaces the need to test a design', 'clear communication matters only to the designer'],
    answer: 'clear communication helps people understand and use designs well',
    explanation: 'Effective diagrams, instructions, and specifications enable correct use of technology.',
  },
  {
    prompt: 'What should a complete PAT project include?',
    options: ['design brief, research, sketches, model, test results and evaluation', 'the final product and the receipt for the materials', 'the drawings and a list of the tools used', 'a class photograph and the marks of the teacher'],
    answer: 'design brief, research, sketches, model, test results and evaluation',
    explanation: 'Comprehensive documentation demonstrates design thinking and problem-solving across the project.',
  },
  {
    prompt: 'How do you present technical information in exam-style responses?',
    options: ['use neat labelled diagrams, show calculations and give reasons for choices', 'write only the final answer so that no time is wasted', 'draw only rough sketches with no labels at all', 'copy the question and add a long list of facts'],
    answer: 'use neat labelled diagrams, show calculations and give reasons for choices',
    explanation: 'Structured, detailed responses demonstrate comprehensive understanding and earn maximum marks.',
  },
  {
    prompt: 'What is the relationship between environmental and economic considerations in sustainable technology?',
    options: ['responsible environmental choices often save money in the long run', 'environmental choices always cost more in the long run', 'environmental choices make no difference to costs', 'making money always needs more pollution to be made'],
    answer: 'responsible environmental choices often save money in the long run',
    explanation: 'Sustainable design balances environmental protection with economic viability.',
  },
  {
    prompt: 'How should you approach revision of all four terms of technology content?',
    options: ['review key ideas, practise sums, redraw designs and do past papers', 'read through the notes once and then skip past papers', 'study only the one topic that you enjoy the most', 'learn the textbook by heart without any practising'],
    answer: 'review key ideas, practise sums, redraw designs and do past papers',
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
