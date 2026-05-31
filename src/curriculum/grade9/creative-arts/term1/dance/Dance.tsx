import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Develop technique, alignment, and expressive movement',
    image: {
      src: '/curriculum/grade9/creative-arts/term1/dance/image1.jpg',
      alt: 'Grade 9 learners performing longer phrases with clear alignment and dynamic variation',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Dance in Grade 9 Term 1 builds technical control. You develop clearer alignment and posture, master travelling steps with precision, explore dynamics and contrast, and safely condition your body. Perform longer movement phrases with greater expression and confidence.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Alignment in dance means...',
    options: ['Correct posture and body positioning to prevent injury and create efficiency', 'Dancing in a line', 'Moving quickly', 'Wearing the same outfit'],
    answer: 'Correct posture and body positioning to prevent injury and create efficiency',
    explanation: 'Proper alignment protects joints and allows clean, powerful movement.',
  },
  {
    prompt: 'Travelling steps in dance are...',
    options: ['Steps that move the dancer across the floor', 'Only turns', 'Standing still only', 'Arm movements only'],
    answer: 'Steps that move the dancer across the floor',
    explanation: 'Travelling includes walks, runs, skips, slides, and hops that cover space.',
  },
  {
    prompt: 'Dynamics in dance refers to...',
    options: ['Variation in speed, weight, and energy of movement', 'Only loud music', 'Same tempo always', 'How tall the dancer is'],
    answer: 'Variation in speed, weight, and energy of movement',
    explanation: 'Dynamics create expressive contrast and hold audience interest.',
  },
  {
    prompt: 'A longer movement phrase includes...',
    options: ['Multiple linked steps and positions performed in sequence', 'Only one step', 'Standing still', 'Turning only'],
    answer: 'Multiple linked steps and positions performed in sequence',
    explanation: 'Phrases are the building blocks of choreography and performance.',
  },
  {
    prompt: 'Safe conditioning for dancers involves...',
    options: ['Gradual warm-ups, stretching, and strengthening exercises', 'Never stretching', 'Pushing through pain', 'Cold muscles only'],
    answer: 'Gradual warm-ups, stretching, and strengthening exercises',
    explanation: 'Proper conditioning prevents injury and improves performance quality.',
  },
  {
    prompt: 'Contrast in a dance piece means...',
    options: ['Different movements, speeds, or energy levels placed together', 'Repeating exactly', 'Staying the same always', 'No variety'],
    answer: 'Different movements, speeds, or energy levels placed together',
    explanation: 'Contrast keeps choreography interesting and communicates ideas clearly.',
  },
  {
    prompt: 'Posture in dance is important because it...',
    options: ['Prevents injury, creates a professional appearance, and allows clean movement', 'Makes dancers shorter', 'Looks uncomfortable', 'Has no effect'],
    answer: 'Prevents injury, creates a professional appearance, and allows clean movement',
    explanation: 'Good posture is foundational to all dance technique and expression.',
  },
  {
    prompt: 'A non-locomotor movement is...',
    options: ['Movement that stays in place, like bending, twisting, or arching', 'Only travelling', 'Standing still always', 'Jumping only'],
    answer: 'Movement that stays in place, like bending, twisting, or arching',
    explanation: 'Non-locomotor movements can be combined with travelling to create rich phrases.',
  },
];

const Dance = () => (
  <CapsSubjectTopic
    title="Dance"
    subtitle="Technique, alignment, travelling steps, dynamics, and safe conditioning"
    learnSteps={learnSteps}
    task="gr9-dance-t1"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Dance;
