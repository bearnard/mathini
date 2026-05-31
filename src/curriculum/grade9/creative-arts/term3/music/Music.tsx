import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Explore musical form, arrangement, and composition',
    image: {
      src: '/curriculum/grade9/creative-arts/term3/music/image1.jpg',
      alt: 'Grade 9 learners analyzing musical form and creating arrangements',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Music in Grade 9 Term 3 develops analysis and creativity. You analyze binary and ternary form in short pieces, learn basic composition and arrangement, explore ostinato patterns, develop technology awareness in music production, and practise rehearsing with greater independence and confidence.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Binary form (AB) in music consists of...',
    options: ['Two distinct sections with contrasting material', 'Only one section', 'Three parts always', 'No structure'],
    answer: 'Two distinct sections with contrasting material',
    explanation: 'Binary form alternates between different melodic or harmonic ideas.',
  },
  {
    prompt: 'Ternary form (ABA) returns to...',
    options: ['The opening material after a contrasting middle section', 'Only the middle', 'Never repeats', 'Random order'],
    answer: 'The opening material after a contrasting middle section',
    explanation: 'Ternary form creates familiarity and closure through return.',
  },
  {
    prompt: 'Composition in music means...',
    options: ['Creating original music by combining melody, harmony, and rhythm', 'Only performing', 'Reading music only', 'No creativity'],
    answer: 'Creating original music by combining melody, harmony, and rhythm',
    explanation: 'Composition develops musical literacy and creative expression.',
  },
  {
    prompt: 'Arrangement involves...',
    options: ['Adapting existing music for different instruments or voices', 'Only performing exactly', 'No changes allowed', 'Creating from scratch only'],
    answer: 'Adapting existing music for different instruments or voices',
    explanation: 'Arrangement lets familiar pieces reach new audiences and contexts.',
  },
  {
    prompt: 'An ostinato is...',
    options: ['A short musical phrase that repeats consistently throughout a piece', 'Only played once', 'Never repeated', 'A final note'],
    answer: 'A short musical phrase that repeats consistently throughout a piece',
    explanation: 'Ostinato provides foundation and unity in musical structure.',
  },
  {
    prompt: 'Technology in music production includes...',
    options: ['Recording equipment, DAWs, synthesizers, and digital effects', 'Only traditional instruments', 'No modern tools', 'Paper and pencil only'],
    answer: 'Recording equipment, DAWs, synthesizers, and digital effects',
    explanation: 'Technology expands musical possibilities and production methods.',
  },
  {
    prompt: 'Rehearsing with independence means...',
    options: ['Taking initiative to improve, problem-solve, and stay focused without constant direction', 'Always needing help', 'No responsibility', 'Following exactly always'],
    answer: 'Taking initiative to improve, problem-solve, and stay focused without constant direction',
    explanation: 'Independent rehearsal builds ownership and musical maturity.',
  },
  {
    prompt: 'Listening analysis of form helps you to...',
    options: ['Identify structure, follow the music, and understand compositional choices', 'Just hear sounds', 'No understanding', 'Ignore patterns'],
    answer: 'Identify structure, follow the music, and understand compositional choices',
    explanation: 'Form awareness deepens listening comprehension and appreciation.',
  },
];

const Music = () => (
  <CapsSubjectTopic
    title="Music"
    subtitle="Musical form, arrangement, composition, technology awareness, and rehearsal practice"
    learnSteps={learnSteps}
    task="gr9-music-t3"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Music;
