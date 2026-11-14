import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'The Pythagorean Theorem',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Understand the relationship a² + b² = c² in right triangles and when it applies.
        </p>
      </div>
    ),
  },
  {
    title: 'Finding Unknown Sides',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use the theorem to calculate missing side lengths and verify right angles in geometric figures.
        </p>
      </div>
    ),
  },
  {
    title: 'Practical Applications',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Apply Pythagoras to real-world contexts with appropriate units and precision in answers.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'In a right triangle, the two legs are 3 cm and 4 cm. What is the hypotenuse?',
    options: ['5 cm', '7 cm', '6 cm', '8 cm'],
    answer: '5 cm',
    explanation: 'Using a² + b² = c²: 3² + 4² = 9 + 16 = 25, so c = √25 = 5 cm.',
  },
  {
    prompt: 'Which set of lengths can form a right triangle?',
    options: ['3, 4, 6', '5, 12, 13', '2, 3, 4', '6, 8, 10 but not 5, 12, 13'],
    answer: '5, 12, 13',
    explanation: '5² + 12² = 25 + 144 = 169 = 13², confirming a right triangle.',
  },
  {
    prompt: 'A right triangle has a hypotenuse of 10 cm and one leg of 6 cm. What is the other leg?',
    options: ['4 cm', '8 cm', '12 cm', '16 cm'],
    answer: '8 cm',
    explanation: 'Using a² + 6² = 10²: a² + 36 = 100, so a² = 64, and a = 8 cm.',
  },
  {
    prompt: 'What is the Pythagorean theorem relationship?',
    options: ['a + b = c', 'a × b = c', 'a² + b² = c²', 'a² - b² = c²'],
    answer: 'a² + b² = c²',
    explanation: 'This is the fundamental relationship for right triangles.',
  },
  {
    prompt: 'A ladder of length 13 m leans against a wall. If the base is 5 m from the wall, how high is the ladder?',
    options: ['8 m', '10 m', '12 m', '15 m'],
    answer: '12 m',
    explanation: 'Using 5² + h² = 13²: 25 + h² = 169, so h² = 144, and h = 12 m.',
  },
  {
    prompt: 'Is 6, 8, 10 a Pythagorean triple?',
    options: ['Yes', 'No', 'Only if multiplied by 2', 'Cannot determine'],
    answer: 'Yes',
    explanation: '6² + 8² = 36 + 64 = 100 = 10², so yes, it is a Pythagorean triple.',
  },
  {
    prompt: 'In a right triangle with legs 7 cm and 24 cm, the hypotenuse is approximately:',
    options: ['25 cm', '26 cm', '24.5 cm', '31 cm'],
    answer: '25 cm',
    explanation: '7² + 24² = 49 + 576 = 625, so c = 25 cm.',
  },
  {
    prompt: 'What does the hypotenuse represent?',
    options: ['The shortest side, next to the right angle', 'One of the two legs that meet at the right angle', 'The longest side opposite the right angle', 'The side opposite the smallest angle'],
    answer: 'The longest side opposite the right angle',
    explanation: 'The hypotenuse (c) is always opposite the right angle and is the longest side.',
  },
];

const PythagorasTheorem = () => (
  <CapsSubjectTopic
    title="Theorem of Pythagoras"
    subtitle="Right-triangle relationships and unknown side calculations"
    learnSteps={learnSteps}
    task="gr9-pythagoras-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default PythagorasTheorem;
