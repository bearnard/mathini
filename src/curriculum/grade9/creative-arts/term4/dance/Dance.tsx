import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: 'Final choreography refinement involves...',
    options: ['Perfecting timing, clarity, transitions and steady quality', 'Leaving the dance as it is, since no change is needed', 'Treating the first draft as the finished dance', 'Changing steps on the day to surprise the audience'],
    answer: 'Perfecting timing, clarity, transitions and steady quality',
    explanation: 'Refinement elevates choreography to professional standard.',
  },
  {
    prompt: 'Polished performance includes...',
    options: ['Technical accuracy, expressive delivery and a confident presence', 'Moving through the steps without much care', 'Putting in little effort, since the piece is known', 'Moving in an uncertain way that looks unrehearsed'],
    answer: 'Technical accuracy, expressive delivery and a confident presence',
    explanation: 'Polish reflects preparation and artistic commitment.',
  },
  {
    prompt: 'Dance communication means...',
    options: ['Using movement to show emotion, story or theme to viewers', 'Entertainment for its own sake and nothing else', 'A dance that needs no meaning to be understood', 'Movement made without any link to an idea'],
    answer: 'Using movement to show emotion, story or theme to viewers',
    explanation: 'Effective communication creates meaningful audience connection.',
  },
  {
    prompt: 'Dance appreciation involves...',
    options: ['Understanding styles, respecting traditions and artistic choices', 'Liking only the styles that you perform yourself', 'Showing no respect for the traditions of other people', 'Judging every dance harshly and as quickly as possible'],
    answer: 'Understanding styles, respecting traditions and artistic choices',
    explanation: 'Appreciation broadens perspective and supports artistic community.',
  },
  {
    prompt: 'Community performance opportunities in dance might include...',
    options: ['School events, cultural celebrations or public showcases', 'Private studios and nothing else', 'There are no places to perform for young dancers', 'Solo shows by professional dancers only'],
    answer: 'School events, cultural celebrations or public showcases',
    explanation: 'Community performances share dance and build engagement.',
  },
  {
    prompt: 'Timing in a final dance performance means...',
    options: ['Exact timing with the music and the other dancers throughout', 'Rushing is fine, as long as you finish with the music', 'Timing is not important in a group dance', 'Each dancer keeps a different count in the piece'],
    answer: 'Exact timing with the music and the other dancers throughout',
    explanation: 'Timing unity creates powerful, professional performances.',
  },
  {
    prompt: 'Peer feedback on your final performance should focus on...',
    options: ['Technical skill, expression and how the dance affected them', 'Criticism only, so that the dancer can improve fast', 'Praise only, to keep the dancer motivated', 'No feedback, since the audience will give it'],
    answer: 'Technical skill, expression and how the dance affected them',
    explanation: 'Comprehensive feedback supports growth and artistic understanding.',
  },
  {
    prompt: 'Demonstrating artistic maturity in dance includes...',
    options: ['Control, expression, confidence, respect and audience awareness', 'Showing off your best tricks to impress the others', 'Not needing to think about the audience in a hall', 'Being careless, since the dance has been rehearsed well'],
    answer: 'Control, expression, confidence, respect and audience awareness',
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
