import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Refine and perform polished choreography',
    image: {
      src: '/curriculum/grade9/creative-arts/term4/dance/image1.jpg',
      alt: 'Grade 9 learners performing refined choreography to appreciative audience',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Dance in Grade 9 Term 4 culminates the year with a final performance. You refine and polish choreography, achieve consistent timing and expression, discuss how your dance communicates ideas to audiences, explore appreciation and diverse dance forms, and consider community performance opportunities. Demonstrate technical mastery and artistic maturity.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Final choreography refinement involves...',
    options: ['Perfecting timing, clarity, transitions, and consistent performance quality', 'No changes needed', 'First draft is final', 'Random improvements only'],
    answer: 'Perfecting timing, clarity, transitions, and consistent performance quality',
    explanation: 'Refinement elevates choreography to professional standard.',
  },
  {
    prompt: 'Polished performance includes...',
    options: ['Technical accuracy, expressive delivery, and confident stage presence', 'Just moving', 'No effort needed', 'Uncertain movement only'],
    answer: 'Technical accuracy, expressive delivery, and confident stage presence',
    explanation: 'Polish reflects preparation and artistic commitment.',
  },
  {
    prompt: 'Dance communication means...',
    options: ['Using movement to convey emotion, narrative, or thematic ideas to viewers', 'Just entertainment', 'No meaning needed', 'Random movement only'],
    answer: 'Using movement to convey emotion, narrative, or thematic ideas to viewers',
    explanation: 'Effective communication creates meaningful audience connection.',
  },
  {
    prompt: 'Dance appreciation involves...',
    options: ['Understanding diverse styles, respecting traditions, and recognizing artistic choices', 'Only liking what you do', 'No respect needed', 'Judging harshly always'],
    answer: 'Understanding diverse styles, respecting traditions, and recognizing artistic choices',
    explanation: 'Appreciation broadens perspective and supports artistic community.',
  },
  {
    prompt: 'Community performance opportunities in dance might include...',
    options: ['School events, cultural celebrations, or public showcases', 'Only private studios', 'No opportunities', 'Solo performance only'],
    answer: 'School events, cultural celebrations, or public showcases',
    explanation: 'Community performances share dance and build engagement.',
  },
  {
    prompt: 'Timing in a final dance performance means...',
    options: ['Precise synchronization with music and other dancers throughout', 'Rushing is fine', 'No accuracy needed', 'Everyone different'],
    answer: 'Precise synchronization with music and other dancers throughout',
    explanation: 'Timing unity creates powerful, professional performances.',
  },
  {
    prompt: 'Peer feedback on your final performance should focus on...',
    options: ['Technical skill, emotional expression, and how the dance affected them', 'Just criticism', 'Only praise needed', 'No input helpful'],
    answer: 'Technical skill, emotional expression, and how the dance affected them',
    explanation: 'Comprehensive feedback supports growth and artistic understanding.',
  },
  {
    prompt: 'Demonstrating artistic maturity in dance includes...',
    options: ['Control, expression, confidence, respect for the art form, and audience awareness', 'Just showing off', 'No awareness needed', 'Careless always'],
    answer: 'Control, expression, confidence, respect for the art form, and audience awareness',
    explanation: 'Maturity reflects deep artistic commitment and understanding.',
  },
];

const Dance = () => (
  <CapsSubjectTopic
    title="Dance"
    subtitle="Final choreography, appreciation, refinement, and community performance"
    learnSteps={learnSteps}
    task="gr9-dance-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Dance;
