import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand report structure and audience awareness',
    image: {
      src: '/curriculum/grade9/english/term3/reports-instructional-texts/image1.jpg',
      alt: 'learner organizing report information with headings and clear structure for a specific purpose',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reports present information clearly and objectively, organized by headings and sections. Writers must 
          understand the audience and purpose to choose appropriate detail level, technical language, and layout.
        </p>
      </div>
    ),
  },
  {
    title: 'Master instructional writing with clear sequencing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Instructions guide a reader through steps to achieve a goal. Use numbered lists, imperative verbs 
          (command form), and clear language. Each step must be logical and complete so the reader can follow without 
          confusion.
        </p>
      </div>
    ),
  },
  {
    title: 'Control narrative perspective and organize information',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reports maintain objective tone and third-person perspective unless otherwise appropriate. Functional texts 
          require audience awareness to determine detail, vocabulary, and structure that best serves the reader\'s needs.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main purpose of a report?',
    options: ['to present information clearly and objectively', 'to tell a fictional story', 'to express personal opinions only', 'to entertain without facts'],
    answer: 'to present information clearly and objectively',
    explanation: 'Reports inform readers with factual, organized information.',
  },
  {
    prompt: 'Which feature is essential in a report?',
    options: ['clear headings and logical organization', 'creative storytelling', 'emotional language', 'no structure needed'],
    answer: 'clear headings and logical organization',
    explanation: 'Structure helps readers find and understand information quickly.',
  },
  {
    prompt: 'What should instructions include?',
    options: ['numbered steps, imperative verbs, and clear language', 'only nouns and adjectives', 'no verb forms', 'random ordering'],
    answer: 'numbered steps, imperative verbs, and clear language',
    explanation: 'Effective instructions guide readers through sequential actions.',
  },
  {
    prompt: 'An imperative verb in an instruction is used to...',
    options: ['give a command or tell someone to do something', 'ask a question', 'describe the past', 'express doubt'],
    answer: 'give a command or tell someone to do something',
    explanation: 'Imperative mood gives direct instructions: "Open the box." "Mix well."',
  },
  {
    prompt: 'What point of view should a report use?',
    options: ['third person for objectivity', 'first person exclusively', 'only dialogue', 'no pronouns at all'],
    answer: 'third person for objectivity',
    explanation: 'Third person maintains the formal, unbiased tone reports require.',
  },
  {
    prompt: 'When organizing information in a report, you should consider...',
    options: ['audience, purpose, and what details they need', 'only alphabetical order', 'random arrangement', 'the longest information first always'],
    answer: 'audience, purpose, and what details they need',
    explanation: 'Organization choices depend on reader needs and context.',
  },
  {
    prompt: 'What makes instructions easy to follow?',
    options: ['logical sequence, one action per step, and clear language', 'combining multiple actions in one step', 'using complex technical terms only', 'no numbering or organization'],
    answer: 'logical sequence, one action per step, and clear language',
    explanation: 'Clear structure allows readers to complete tasks successfully.',
  },
  {
    prompt: 'Why is audience awareness important in functional writing?',
    options: ['Different audiences need different detail levels and vocabulary.', 'All audiences are identical in need.', 'Audience doesn\'t affect writing choices.', 'Only experts matter as audiences.'],
    answer: 'Different audiences need different detail levels and vocabulary.',
    explanation: 'Purpose and audience shape all functional writing decisions.',
  },
];

const ReportsInstructionalTexts = () => (
  <CapsSubjectTopic
    title="Reports and Instructional Texts"
    subtitle="Report writing, instructions, sequencing, audience awareness and information organization"
    learnSteps={learnSteps}
    task="gr9-reports-instructional-texts-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ReportsInstructionalTexts;
