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
    options: ['Holding the body correctly to prevent injury and move well', 'Dancing in a neat line with the other dancers', 'Moving at speed to keep up with the music', 'Wearing the same costume as the rest of the group'],
    answer: 'Holding the body correctly to prevent injury and move well',
    explanation: 'Proper alignment protects joints and allows clean, powerful movement.',
  },
  {
    prompt: 'Travelling steps in dance are...',
    options: ['Steps that carry the dancer across the floor', 'Turns that are done on the spot in one place', 'Moves in which the dancer stands still and breathes', 'Movements of the arms that are done on the spot'],
    answer: 'Steps that carry the dancer across the floor',
    explanation: 'Travelling includes walks, runs, skips, slides, and hops that cover space.',
  },
  {
    prompt: 'Dynamics in dance refers to...',
    options: ['Changes in speed, weight and energy of movement', 'The loudness of the music that is played', 'Keeping the same tempo from start to end', 'The height and build of the dancer on stage'],
    answer: 'Changes in speed, weight and energy of movement',
    explanation: 'Dynamics create expressive contrast and hold audience interest.',
  },
  {
    prompt: 'A longer movement phrase includes...',
    options: ['Several linked steps and positions done in order', 'A single step that is repeated again and again', 'A pose in which the dancer stands quite still', 'A series of turns done in one spot only'],
    answer: 'Several linked steps and positions done in order',
    explanation: 'Phrases are the building blocks of choreography and performance.',
  },
  {
    prompt: 'Safe conditioning for dancers involves...',
    options: ['Gradual warm-ups, stretching and strengthening exercises', 'Skipping stretches so that the muscles stay tight', 'Pushing through pain to build strength faster', 'Starting to dance straight from a cold start'],
    answer: 'Gradual warm-ups, stretching and strengthening exercises',
    explanation: 'Proper conditioning prevents injury and improves performance quality.',
  },
  {
    prompt: 'Contrast in a dance piece means...',
    options: ['Different movements, speeds or energy placed side by side', 'Repeating one movement in exactly the same way', 'Keeping the same speed and mood from start to end', 'Using one kind of movement with no changes'],
    answer: 'Different movements, speeds or energy placed side by side',
    explanation: 'Contrast keeps choreography interesting and communicates ideas clearly.',
  },
  {
    prompt: 'Posture in dance is important because it...',
    options: ['It prevents injury, looks polished and lets movement stay clean', 'It makes dancers look shorter on the stage', 'It looks stiff and uncomfortable to an audience', 'It has no effect on how well a dancer moves'],
    answer: 'It prevents injury, looks polished and lets movement stay clean',
    explanation: 'Good posture is foundational to all dance technique and expression.',
  },
  {
    prompt: 'A non-locomotor movement is...',
    options: ['Movement that stays in one place, such as bending or twisting', 'Movement that travels across the floor in a line', 'Movement in which the dancer must stand still', 'Movement in which the dancer jumps from place to place'],
    answer: 'Movement that stays in one place, such as bending or twisting',
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
