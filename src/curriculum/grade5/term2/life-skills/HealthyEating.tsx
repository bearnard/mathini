import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { FoodGroups } from '../../../../components/diagrams/g5/Grade5Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Food groups and what they do',
    content: slide(
      <>
        <Rule>
          Carbohydrates, such as bread, rice and pap, give us energy. Proteins, such as meat, fish, eggs and beans, help the body grow and repair. Fruit and vegetables give vitamins that keep us healthy, and milk and cheese give calcium for strong bones and teeth.
        </Rule>
        <FoodGroups />
        <Worked
          title="Match the food to the job"
          steps={[
            <>Bread, rice and pap give energy to run and learn.</>,
            <>Meat, fish, eggs and beans build and repair the body.</>,
            <>Fruit and vegetables supply vitamins that help the body fight sickness.</>,
            <>Milk and cheese supply calcium, which builds strong bones and teeth.</>,
          ]}
        />
        <Mistake>Thinking one food does everything. Each group does a different job, so we need all of them.</Mistake>
      </>,
    ),
  },
  {
    title: 'A balanced diet and healthy snacks',
    content: slide(
      <>
        <Rule>
          A balanced diet means eating a variety of foods from all the food groups in the right amounts. Good snacks are fruit, vegetables and plain yoghurt. Chips, sweets and fizzy drinks are not healthy snacks.
        </Rule>
        <Worked
          title="Plan a healthy day"
          steps={[
            <>Breakfast: porridge for energy and fruit for vitamins.</>,
            <>Lunch: rice, beans and vegetables for energy, proteins and vitamins.</>,
            <>Snack: an apple instead of chips.</>,
            <>Supper: fish with potatoes and spinach. Over the day you have eaten from every group.</>,
          ]}
        />
        <Mistake>Thinking a balanced diet means eating only vegetables. You need foods from all the groups.</Mistake>
      </>,
    ),
  },
  {
    title: 'Too much sugar and fat, and water',
    content: slide(
      <>
        <Rule>
          Too much sugar and fat can lead to tooth decay and being overweight. Water keeps the body hydrated and helps it work properly, so we should drink water through the day.
        </Rule>
        <Worked
          title="Choose wisely"
          steps={[
            <>A fizzy drink has a lot of sugar. Too much sugar damages teeth.</>,
            <>Fried food has a lot of fat. Too much fat can make you overweight.</>,
            <>Water has no sugar and keeps your body hydrated.</>,
            <>So choose water most of the time and keep sweets and fried foods for treats.</>,
          ]}
        />
        <Mistake>Thinking water is not important because it has no energy. The body needs water to work properly.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which foods give energy?</li>
            <li>Which mineral builds strong bones and teeth, and where do we get it?</li>
            <li>Give an example of a healthy snack.</li>
            <li>What can too much sugar do to your teeth?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Carbohydrates such as bread, rice and pap.</li>
            <li>Calcium, from milk and cheese.</li>
            <li>An apple (or another fruit or vegetable).</li>
            <li>Cause tooth decay.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which food group is the body’s main source of quick energy?',
    options: ['Carbohydrates', 'Vitamins', 'Water', 'Calcium'],
    answer: 'Carbohydrates',
    explanation: 'Bread, rice and pap give energy.',
  },
  {
    prompt: 'Which food helps the body grow and repair?',
    options: ['Beans and eggs', 'Sweets', 'Fizzy drinks', 'Chips'],
    answer: 'Beans and eggs',
    explanation: 'Proteins help the body grow and repair.',
  },
  {
    prompt: 'Which nutrient helps build strong bones?',
    options: ['Calcium', 'Sugar', 'Salt', 'Fat'],
    answer: 'Calcium',
    explanation: 'Milk and cheese contain calcium.',
  },
  {
    prompt: 'A balanced diet means eating…',
    options: ['foods from all the groups in the right amounts', 'only the foods you like', 'as much as you can', 'only fruit'],
    answer: 'foods from all the groups in the right amounts',
    explanation: 'A variety keeps the body healthy.',
  },
  {
    prompt: 'Too much sugar mainly causes…',
    options: ['tooth decay', 'stronger bones', 'faster growth', 'better eyesight'],
    answer: 'tooth decay',
    explanation: 'Sugar damages teeth.',
  },
];

const HealthyEating = () => (
  <CapsSubjectTopic
    title="Healthy Eating"
    subtitle="Food groups, a balanced diet and drinking water"
    learnSteps={learnSteps}
    task="gr5-life-skills-healthy-eating"
    bank={bank}
    apiPath="/api/caps/lsk"
    grade={5}
  />
);

export default HealthyEating;
