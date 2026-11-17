import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does food hygiene mean?",
    options: ["Keeping food clean and safe", "Choosing the sweetest food to buy", "Eating food as fast as you can", "Cooking food in a very big pot"],
    answer: "Keeping food clean and safe",
    explanation: "Food hygiene means keeping food clean and safe so that it does not make us ill.",
  },
  {
    prompt: "Which of these foods is not safe to eat?",
    options: ["Washed apples from the shop", "Milk that is in date", "Bread with green mould", "A well-cooked chicken"],
    answer: "Bread with green mould",
    explanation: "Mouldy food can make us ill, so it must be thrown away.",
  },
  {
    prompt: "Why should you check the date on food in a shop or at home?",
    options: ["Old food may make you ill", "Old food is always cheaper", "Dates show which food is sweet", "Dates show where food was made"],
    answer: "Old food may make you ill",
    explanation: "Food that is past its date can have germs that make us ill.",
  },
  {
    prompt: "A loaf of bread has a small patch of mould. What is the best thing to do?",
    options: ["Cut off the mould and eat the rest", "Toast the bread to kill it", "Throw the whole loaf away", "Give it to a younger child"],
    answer: "Throw the whole loaf away",
    explanation: "Germs and poisons can be all through mouldy food, so the whole loaf is thrown away.",
  },
  {
    prompt: "Which is the right time to wash your hands with soap?",
    options: ["After you have finished eating", "Before you touch or eat food", "When your hands look very dirty", "Once a day in the early morning"],
    answer: "Before you touch or eat food",
    explanation: "Wash your hands with soap and water before you touch food, for about 20 seconds.",
  },
  {
    prompt: "A good hand wash with soap takes about how long?",
    options: ["About 2 seconds", "Just a few seconds", "About 20 seconds", "About 5 minutes"],
    answer: "About 20 seconds",
    explanation: "About 20 seconds of washing with soap and water removes germs from your hands.",
  },
  {
    prompt: "Why should you cook chicken right through?",
    options: ["To kill the germs in it", "To make it look larger", "To make it cool faster", "To keep it from smelling"],
    answer: "To kill the germs in it",
    explanation: "Raw or half-cooked chicken can have germs, and cooking right through kills them.",
  },
  {
    prompt: "Why use a separate board for raw meat and for vegetables?",
    options: ["Boards should match the knives", "Germs can pass to other food", "It makes the meat cook faster", "It keeps the knives very sharp"],
    answer: "Germs can pass to other food",
    explanation: "Germs from raw meat can pass to food that is eaten raw, such as salad.",
  },
  {
    prompt: "Which place keeps milk and leftovers safe from germs?",
    options: ["On the table in the sun", "In a warm cupboard", "On a shelf by the stove", "In the fridge"],
    answer: "In the fridge",
    explanation: "Cold slows down germs, so milk and leftovers belong in the fridge.",
  },
  {
    prompt: "Why must food be covered?",
    options: ["To keep flies and germs away", "To keep the food warm for days", "To make the food taste sweeter", "To stop the food from drying up"],
    answer: "To keep flies and germs away",
    explanation: "Flies walk on dirt and carry germs, so food is covered.",
  },
  {
    prompt: "Which description fits a food-borne disease?",
    options: ["An illness from a stray dog bite", "An illness caused by too much sun", "An illness caused by tight shoes", "Illness from germs in your food"],
    answer: "Illness from germs in your food",
    explanation: "A food-borne disease is caused by germs or poisons in food or drink.",
  },
  {
    prompt: "Which is a sign of a food-borne disease?",
    options: ["A tummy ache and diarrhoea", "A very red and runny nose", "A sore toe after a long walk", "A dry and itchy skin on the head"],
    answer: "A tummy ache and diarrhoea",
    explanation: "Tummy ache, vomiting and diarrhoea are signs, and sometimes there is a fever.",
  },
];

const FoodHygieneT4 = () => (
  <CapsSubjectTopic
    title="Food Hygiene"
    subtitle="Safe and harmful food, preparing and storing food, and food-borne diseases"
    learnSteps={learnSteps}
    task="gr6-food-hygiene-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default FoodHygieneT4;
