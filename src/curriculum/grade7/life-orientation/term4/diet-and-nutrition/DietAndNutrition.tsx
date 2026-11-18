import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'What your body needs from food',
    content: slide(
      <>
        <Rule>Food gives your body energy and the materials to grow and stay healthy. Carbohydrates, such as maize meal, bread and rice, give energy. Proteins, such as beans, eggs, meat, fish and milk, build and repair the body. Fats give energy in small amounts, and vitamins, minerals and water keep the body working. Vegetables and fruit give vitamins, minerals and fibre.</Rule>
        <FactCards
          cards={[
            { title: 'Energy foods', line1: 'maize meal, bread,', line2: 'rice and potatoes' },
            { title: 'Body-building', line1: 'beans, eggs, meat,', line2: 'fish and milk' },
            { title: 'Protective', line1: 'vegetables and fruit for', line2: 'vitamins and minerals' },
            { title: 'Water', line1: 'drink water to', line2: 'stay hydrated' },
          ]}
          aria="What the body needs. Energy foods: maize meal, bread, rice and potatoes. Body-building foods: beans, eggs, meat, fish and milk. Protective foods: vegetables and fruit for vitamins and minerals. Water: drink water to stay hydrated."
        />
        <Worked
          title="Match the food to its job"
          steps={[
            'A bowl of pap gives energy.',
            'Beans and an egg help the body to grow and repair.',
            'Spinach and an orange give vitamins and help the body to fight infections.',
          ]}
        />
        <Mistake>Thinking that you only need one kind of food. The body needs a mix of foods and plenty of water.</Mistake>
      </>,
    ),
  },
  {
    title: 'A balanced diet and a healthy eating plan',
    content: slide(
      <>
        <Rule>A balanced diet has a variety of foods in the right amounts: mostly vegetables, fruit and starchy foods, some protein, and only a little fat, sugar and salt. A healthy eating plan has three meals a day, healthy snacks, vegetables or fruit at most meals and water to drink. Breakfast gives you energy for school.</Rule>
        <StepFlow steps={['Eat breakfast.', 'Add vegetables or fruit to meals.', 'Choose water, not sweet drinks.', 'Eat sweets and fried food less often.']} aria="Four parts of a healthy eating plan: eat breakfast, add vegetables or fruit to meals, choose water instead of sweet drinks, and eat sweets and fried food less often." />
        <Worked
          title="Improve a day of meals"
          steps={[
            'Breakfast: porridge with milk, and a banana.',
            'Lunch: a sandwich or pap with beans and a salad, and water.',
            'Supper: rice, chicken and cooked vegetables. A sweet drink is replaced by water.',
          ]}
        />
        <Mistake>Skipping breakfast to save time. It makes it harder to concentrate in class.</Mistake>
      </>,
    ),
  },
  {
    title: 'What influences what we eat',
    content: slide(
      <>
        <Rule>Many things affect your food choices: money, what is sold nearby, culture and family customs, advertising and what friends eat. You can make healthier choices with limited money by buying seasonal vegetables, beans and eggs, cooking at home, planting a food garden and drinking water. Reading the labels on packets helps you to choose.</Rule>
        <FactCards
          cards={[
            { title: 'Money', line1: 'what the family', line2: 'can afford' },
            { title: 'Culture', line1: 'customs and traditional', line2: 'foods' },
            { title: 'Advertising', line1: 'adverts make some', line2: 'foods look better' },
            { title: 'Choices', line1: 'gardens, cooking at home,', line2: 'seasonal food' },
          ]}
          aria="What influences food choices. Money: what the family can afford. Culture: customs and traditional foods. Advertising: adverts make some foods look better. Choices: gardens, cooking at home and seasonal food."
        />
        <Worked
          title="Make a healthy choice on a small budget"
          steps={[
            'A family has little money for food.',
            'They buy dry beans, eggs, and seasonal vegetables, and grow spinach in a garden.',
            'They eat more healthy meals for less money than if they bought fast food.',
          ]}
        />
        <Mistake>Believing that healthy food is always expensive. Beans, eggs and seasonal vegetables are cheap and healthy.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which kind of food gives energy?</>,
          <>Which foods help the body to grow and repair?</>,
          <>What is a balanced diet?</>,
          <>Give one way to eat healthily on a small budget.</>,
        ]}
        answers={[
          <>Carbohydrates, such as maize meal, bread and rice.</>,
          <>Proteins, such as beans, eggs, meat and milk.</>,
          <>A variety of foods in the right amounts.</>,
          <>Buy beans, eggs and seasonal vegetables, or grow a garden.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which kind of food fuels the body for the day?",
    options: ["Water from a tap in the yard", "Salt from a shaker on a table", "Starchy food such as maize meal", "Vitamin pills taken every day"],
    answer: "Starchy food such as maize meal",
    explanation: "Starchy foods give the body energy.",
  },
  {
    prompt: "Which foods does the body use to build and mend itself?",
    options: ["Beans, eggs, milk and meat", "Sweets and sugary drinks", "Salt and pepper in small amounts", "Fizzy drinks from a shop"],
    answer: "Beans, eggs, milk and meat",
    explanation: "Proteins build and repair the body.",
  },
  {
    prompt: "Which foods give vitamins and minerals?",
    options: ["Sweets and chips", "Sugary drinks", "Sauces from bottles", "Vegetables and fruit"],
    answer: "Vegetables and fruit",
    explanation: "Vegetables and fruit protect the body.",
  },
  {
    prompt: "Why does your body need water?",
    options: ["To make you feel sleepy", "To keep the body working and hydrated", "To make food taste salty", "To take the place of all food"],
    answer: "To keep the body working and hydrated",
    explanation: "Water is needed all day.",
  },
  {
    prompt: "What is a balanced diet?",
    options: ["Only one favourite food every day", "A variety of foods in good amounts", "Only sweet foods and drinks", "Only fried foods and chips"],
    answer: "A variety of foods in good amounts",
    explanation: "A mix of foods gives the body all it needs.",
  },
  {
    prompt: "Which should make up most of a healthy plate?",
    options: ["Sweets and sugary biscuits", "Fried food and salty chips", "Sugary drinks and fruit juice", "Vegetables, fruit and starchy foods"],
    answer: "Vegetables, fruit and starchy foods",
    explanation: "Eat only a little fat, sugar and salt.",
  },
  {
    prompt: "Why is breakfast important for school?",
    options: ["It gives energy to concentrate", "It makes you sleepy", "It is only for adults", "It replaces water"],
    answer: "It gives energy to concentrate",
    explanation: "Skipping breakfast makes it hard to concentrate.",
  },
  {
    prompt: "Which drink is the best everyday choice?",
    options: ["A sweet fizzy drink", "A sugary juice", "Water", "An energy drink"],
    answer: "Water",
    explanation: "Water has no added sugar.",
  },
  {
    prompt: "How can you eat healthily on a small budget?",
    options: ["Buy only fast food every day", "Skip all meals in the week", "Buy only sweets and biscuits", "Buy beans, eggs and seasonal vegetables"],
    answer: "Buy beans, eggs and seasonal vegetables",
    explanation: "These foods are cheap and healthy.",
  },
  {
    prompt: "Which of these can influence what you eat?",
    options: ["Only the weather", "Money, culture and advertising", "Only the day of the week", "Only the colour of your shirt"],
    answer: "Money, culture and advertising",
    explanation: "Many things shape our food choices.",
  },
  {
    prompt: "What can you read on a food packet to help you choose?",
    options: ["The label", "The colour of the bag", "The name of the shop", "The size of the picture"],
    answer: "The label",
    explanation: "Labels show what is in the food.",
  },
  {
    prompt: "How can a family get fresh vegetables cheaply?",
    options: ["Buy only imported food", "Stop eating vegetables", "Grow a food garden", "Eat only sweets"],
    answer: "Grow a food garden",
    explanation: "A garden gives cheap, fresh vegetables.",
  },
  {
    prompt: "Which is a healthy snack?",
    options: ["A bag of sweets", "A slice of fried cake", "A piece of fruit", "A fizzy drink"],
    answer: "A piece of fruit",
    explanation: "Fruit gives vitamins and fibre.",
  },
  {
    prompt: "Which meal pattern is part of a healthy eating plan?",
    options: ["Three meals and healthy snacks", "One large meal every single day", "Only sweets from the shop", "Only drinks between the classes"],
    answer: "Three meals and healthy snacks",
    explanation: "Regular meals help your body and your concentration.",
  },
];

const DietAndNutrition = () => (
  <CapsSubjectTopic
    title="Diet and Nutrition"
    subtitle="What the body needs, a balanced diet and healthy eating plan, and what influences food choices"
    learnSteps={learnSteps}
    task="gr7-diet-and-nutrition-t4"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default DietAndNutrition;
