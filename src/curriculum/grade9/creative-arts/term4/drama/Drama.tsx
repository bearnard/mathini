import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Create and evaluate final production',
    image: {
      src: '/curriculum/grade9/creative-arts/term4/drama/image1.jpg',
      alt: 'Grade 9 learners staging a final production with technical theatre elements',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Drama in Grade 9 Term 4 culminates with a final production. You stage a short performance, develop awareness of technical theatre roles, reflect on acting and design choices, evaluate teamwork and audience impact, and explore drama as a career. Demonstrate theatrical maturity and collaborative excellence.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Final production work involves...',
    options: ['Staging a complete performance with design elements and technical support', 'Just rehearsing', 'No performance needed', 'Solo work only'],
    answer: 'Staging a complete performance with design elements and technical support',
    explanation: 'Full production demonstrates integrated theatrical creativity.',
  },
  {
    prompt: 'Technical theatre roles include...',
    options: ['Lighting, sound, set design, costume, stage management', 'Only acting', 'Nothing behind scenes', 'No support needed'],
    answer: 'Lighting, sound, set design, costume, stage management',
    explanation: 'Technical roles support and enhance performance quality.',
  },
  {
    prompt: 'Acting evaluation considers...',
    options: ['Character believability, vocal projection, movement quality, and engagement', 'Just looks', 'No standards needed', 'Subjective only'],
    answer: 'Character believability, vocal projection, movement quality, and engagement',
    explanation: 'Comprehensive evaluation recognizes diverse acting strengths.',
  },
  {
    prompt: 'Design choices in drama refer to...',
    options: ['Costume, lighting, set, and props that support the production\'s vision', 'Just decoration', 'No planning needed', 'Random choices only'],
    answer: 'Costume, lighting, set, and props that support the production\'s vision',
    explanation: 'Design creates atmosphere and supports storytelling.',
  },
  {
    prompt: 'Evaluating teamwork includes considering...',
    options: ['Communication, support for peers, meeting deadlines, and shared responsibility', 'No evaluation', 'Solo credit only', 'No collaboration'],
    answer: 'Communication, support for peers, meeting deadlines, and shared responsibility',
    explanation: 'Strong teamwork enables successful complex productions.',
  },
  {
    prompt: 'Audience impact in theatre means...',
    options: ['How viewers emotionally and intellectually respond to the performance', 'Just loud reaction', 'No connection needed', 'Audience irrelevant'],
    answer: 'How viewers emotionally and intellectually respond to the performance',
    explanation: 'Powerful theatre connects with and moves audiences.',
  },
  {
    prompt: 'Drama careers might include...',
    options: ['Actor, director, playwright, dramaturge, or drama therapist', 'Only performing', 'No careers exist', 'Nothing professional'],
    answer: 'Actor, director, playwright, dramaturge, or drama therapist',
    explanation: 'Drama offers diverse fulfilling professional pathways.',
  },
  {
    prompt: 'Reflection on your final production helps you to...',
    options: ['Assess learning, celebrate successes, and identify future growth areas', 'Nothing to reflect', 'No learning occurred', 'Forget everything'],
    answer: 'Assess learning, celebrate successes, and identify future growth areas',
    explanation: 'Reflection consolidates learning and informs future growth.',
  },
];

const Drama = () => (
  <CapsSubjectTopic
    title="Drama"
    subtitle="Final production, technical theatre, reflection, and evaluation"
    learnSteps={learnSteps}
    task="gr9-drama-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Drama;
