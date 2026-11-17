import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Why is a clean supply of water important?",
    options: ["Only people in towns need it", "Only plants need it to grow", "People, plants and animals all need it", "Nobody needs it at home"],
    answer: "People, plants and animals all need it",
    explanation: "People, plants and animals need clean water to stay healthy.",
  },
  {
    prompt: "Which tool catches leaves and sticks in dirty water?",
    options: ["A sieve", "A magnet", "A thermometer", "A spoon"],
    answer: "A sieve",
    explanation: "A sieve catches the big bits and lets the water through.",
  },
  {
    prompt: "Muddy water is left still in a bucket and the mud sinks to the bottom. What is this process called?",
    options: ["Boiling", "Evaporating", "Freezing", "Settling"],
    answer: "Settling",
    explanation: "Heavy bits sink to the bottom when water is still. This is settling.",
  },
  {
    prompt: "What is decanting?",
    options: ["Heating the water until it boils", "Pouring off the clear water from the top", "Adding some chemicals to the water", "Freezing the water into solid ice"],
    answer: "Pouring off the clear water from the top",
    explanation: "After settling, the clear water on top is poured off gently. This is decanting.",
  },
  {
    prompt: "What does a filter do to dirty water?",
    options: ["It kills all the germs in it", "It holds back small solid bits", "It turns the water into steam", "It dissolves the mud in it"],
    answer: "It holds back small solid bits",
    explanation: "A filter holds back small solid bits, but it cannot take out germs or dissolved pollutants.",
  },
  {
    prompt: "Which pair of methods for cleaning water destroys germs?",
    options: ["Sieving and settling", "Decanting and sieving", "Filtering and settling", "Boiling and adding chemicals"],
    answer: "Boiling and adding chemicals",
    explanation: "Boiling and chemicals such as chlorine kill germs. Sieving, settling, decanting and filtering take out solid bits.",
  },
  {
    prompt: "Why must boiled water be left to cool with a lid on?",
    options: ["So that no new germs get into it", "So that it turns back into mud", "So that it freezes quickly", "So that it becomes salty"],
    answer: "So that no new germs get into it",
    explanation: "Covering the water keeps new germs out until it is used.",
  },
  {
    prompt: "Which layer is on top in a sand filter?",
    options: ["Gravel", "Coarse sand", "Fine sand", "Clay"],
    answer: "Fine sand",
    explanation: "Fine sand is on top to catch the small bits, with coarser sand and gravel below.",
  },
  {
    prompt: "A sand filter is 20 cm tall and fine sand is 40% of it. How tall is the fine sand layer?",
    options: ["4 cm", "6 cm", "12 cm", "8 cm"],
    answer: "8 cm",
    explanation: "40% of 20 cm = 20 × 0,4 = 8 cm.",
  },
  {
    prompt: "A sand filter is 20 cm tall and each of the coarse sand and gravel layers is 30% of it. How tall are the two layers together?",
    options: ["6 cm", "12 cm", "10 cm", "14 cm"],
    answer: "12 cm",
    explanation: "Each is 20 × 0,3 = 6 cm, so together 6 + 6 = 12 cm.",
  },
  {
    prompt: "Why is boiling the last step when a system is designed to clean dirty water?",
    options: ["It kills germs but cannot take out solid bits", "It is the cheapest and simplest step to do", "It removes the leaves and the sticks and mud", "It makes the sand filter work much better"],
    answer: "It kills germs but cannot take out solid bits",
    explanation: "Solid bits are removed first so that the water is clear, and boiling then kills the germs.",
  },
  {
    prompt: "Learners clean dirty water in a class experiment with a sieve, a sand filter and a kettle. What should they do with the cleaned water?",
    options: ["Drink it at break", "Give it to a younger class", "Not drink it", "Use it to make juice"],
    answer: "Not drink it",
    explanation: "Water cleaned in a class experiment must not be drunk, because it cannot be tested to make sure that it is safe.",
  },
];

const PurifyingWater = () => (
  <CapsSubjectTopic
    title="Purifying Dirty Water"
    subtitle="Sieving, settling, decanting, filtering, boiling and chemicals"
    learnSteps={learnSteps}
    task="gr6-purifying-water-t2"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default PurifyingWater;
