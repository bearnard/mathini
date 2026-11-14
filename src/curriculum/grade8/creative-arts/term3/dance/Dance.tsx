import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use space, energy, and choreographic devices effectively',
    image: {
      src: '/curriculum/grade8/ca/term3/dance/diagram.webp',
      alt: 'Grade 8 learners linking choreographed phrases using space and energy changes',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 dance extends choreography through space and energy choices. Learners link phrases, apply devices
          like canon or unison, and discuss cultural dance styles with respectful understanding.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In dance, energy quality describes...',
    options: ['How movement feels, such as sharp or smooth', 'The colour of the costumes worn', 'The volume of the music played', 'The temperature of the classroom'],
    answer: 'How movement feels, such as sharp or smooth',
    explanation: 'Energy quality changes expression and style.',
  },
  {
    prompt: 'A choreographic device is...',
    options: ['A method used to develop movement ideas', 'A speaker that is used to play music', 'A tool used to repair costumes', 'A timetable for the rehearsals'],
    answer: 'A method used to develop movement ideas',
    explanation: 'Devices like repetition, canon, and unison shape choreography.',
  },
  {
    prompt: 'Using different pathways in dance mainly affects...',
    options: ['How dancers travel through space', 'How marks are calculated', 'How costumes are stored', 'How music is recorded'],
    answer: 'How dancers travel through space',
    explanation: 'Pathways create variety in floor patterns and direction.',
  },
  {
    prompt: 'Cultural dance study should emphasise...',
    options: ['Respect for origins, purpose, and context', 'Imitating without understanding', 'Ignoring community meaning', 'Removing all traditional elements'],
    answer: 'Respect for origins, purpose, and context',
    explanation: 'Cultural understanding builds respectful artistic practice.',
  },
  {
    prompt: 'A transition in choreography helps to...',
    options: ['Connect one movement phrase to the next', 'Stop all movement quite suddenly', 'Take the place of the rhythm entirely', 'Remove the expression from the dance'],
    answer: 'Connect one movement phrase to the next',
    explanation: 'Transitions keep sequences fluent and coherent.',
  },
  {
    prompt: 'Performance quality improves when dancers show...',
    options: ['Timing, control and expression', 'Speed and nothing else', 'Eye contact with the floor only', 'Spacing that changes with every count'],
    answer: 'Timing, control and expression',
    explanation: 'Quality performance combines technical accuracy and communication.',
  },
  {
    prompt: 'Constructive peer feedback in dance should be...',
    options: ['Specific, respectful, and practical', 'Negative without examples', 'Only about costumes', 'Given before seeing the dance'],
    answer: 'Specific, respectful, and practical',
    explanation: 'Useful feedback points to observable strengths and next steps.',
  },
  {
    prompt: 'When discussing style choices, learners should explain...',
    options: ['Why the movement choices suit the dance idea', 'How hard the routine was to learn', 'How long the song was in minutes', 'How big the rehearsal room was'],
    answer: 'Why the movement choices suit the dance idea',
    explanation: 'Style analysis links artistic choices to meaning and effect.',
  },
];

const Dance = () => (
  <CapsSubjectTopic
    title="Dance"
    subtitle="Space, energy, choreographic devices, cultural dance study, and performance quality"
    learnSteps={learnSteps}
    task="gr8-dance-t3"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Dance;
