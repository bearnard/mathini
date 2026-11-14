import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Apply Pythagoras in right-angled triangles',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The theorem of Pythagoras links the side lengths of right-angled triangles. Learners identify the hypotenuse
          and solve for unknown sides using square and square-root reasoning.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A right triangle has legs 3 and 4. What is the hypotenuse?',
    options: ['5', '6', '7', '4.5'],
    answer: '5',
    explanation: '3² + 4² = 9 + 16 = 25, so c = 5.',
  },
  {
    prompt: 'In a right triangle, c² equals...',
    options: ['a² + b²', 'a² - b²', '2ab', 'a + b'],
    answer: 'a² + b²',
    explanation: 'This is the statement of Pythagoras.',
  },
  {
    prompt: 'If c = 13 and one leg is 5, the other leg is...',
    options: ['12', '8', '10', '18'],
    answer: '12',
    explanation: '13² - 5² = 169 - 25 = 144, and √144 = 12.',
  },
  {
    prompt: 'If hypotenuse is 10 and one leg is 6, the other leg is...',
    options: ['8', '4', '16', '12'],
    answer: '8',
    explanation: '10² - 6² = 100 - 36 = 64, and √64 = 8.',
  },
  {
    prompt: 'Pythagoras can be used only for...',
    options: ['right-angled triangles', 'all triangles', 'equilateral triangles only', 'circles'],
    answer: 'right-angled triangles',
    explanation: 'The theorem applies only when there is a 90° angle.',
  },
  {
    prompt: 'A triangle has legs 9 and 12. Hypotenuse = ?',
    options: ['15', '13', '18', '21'],
    answer: '15',
    explanation: '9² + 12² = 81 + 144 = 225, and √225 = 15.',
  },
  {
    prompt: 'Which set of side lengths forms a right triangle?',
    options: ['8, 15, 17', '7, 8, 9', '5, 5, 9', '6, 7, 8'],
    answer: '8, 15, 17',
    explanation: '8² + 15² = 64 + 225 = 289 = 17².',
  },
  {
    prompt: 'In a right triangle, the hypotenuse is...',
    options: ['the longest side', 'always vertical', 'the shortest side', 'opposite the smallest angle'],
    answer: 'the longest side',
    explanation: 'It is opposite the right angle and is always longest.',
  },
];

const TheoremOfPythagoras = () => (
  <CapsSubjectTopic
    title="Theorem of Pythagoras"
    subtitle="Right triangles, hypotenuse identification, and unknown side lengths"
    learnSteps={learnSteps}
    task="gr8-theorem-of-pythagoras-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default TheoremOfPythagoras;
