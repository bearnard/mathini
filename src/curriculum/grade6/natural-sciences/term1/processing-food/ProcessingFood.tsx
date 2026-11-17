import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is the raw material when maize meal is made from maize?",
    options: ["The bag the maize meal is sold in", "The pap that is cooked for supper", "The maize that comes from the farm", "The pot that the pap is cooked in"],
    answer: "The maize that comes from the farm",
    explanation: "The raw material is the food before it is processed. The maize meal is the product.",
  },
  {
    prompt: "Which is a reason for processing food?",
    options: ["To make it last longer", "To make it grow bigger", "To make it heavier to carry", "To make it harder to chew"],
    answer: "To make it last longer",
    explanation: "We process food to make it edible, to make it last longer (preserving) and to improve its nutrients.",
  },
  {
    prompt: "Why do we cook maize meal into pap before we eat it?",
    options: ["To make it freeze", "To make it dry", "To make it sour", "To make it edible"],
    answer: "To make it edible",
    explanation: "Cooking makes many foods soft, safe and edible.",
  },
  {
    prompt: "What does combining mean in food processing?",
    options: ["Taking all the water out", "Mixing ingredients together", "Making the food very cold", "Leaving the food in the sun"],
    answer: "Mixing ingredients together",
    explanation: "Combining means mixing ingredients, such as flour, water and yeast for bread.",
  },
  {
    prompt: "Which process takes the water out of fruit so that it lasts longer?",
    options: ["Freezing", "Drying", "Pickling", "Fermenting"],
    answer: "Drying",
    explanation: "Dried fruit has had its water removed, so germs cannot grow easily.",
  },
  {
    prompt: "What does freezing do to the germs in food?",
    options: ["It turns them into vitamins", "It makes them grow faster", "It changes them into salt", "It stops them from growing"],
    answer: "It stops them from growing",
    explanation: "The cold stops germs growing, but they can start again when the food thaws.",
  },
  {
    prompt: "Which ingredient is used in pickling?",
    options: ["Vinegar", "Sugar-free tea", "Maize meal", "Cooking oil"],
    answer: "Vinegar",
    explanation: "Pickled foods, such as cucumbers, are kept in vinegar.",
  },
  {
    prompt: "How is biltong made?",
    options: ["Strips of meat are boiled in milk", "Strips of meat are frozen in vinegar", "Strips of meat are salted and dried", "Strips of meat are baked into bread"],
    answer: "Strips of meat are salted and dried",
    explanation: "Biltong is an indigenous way to keep meat: it is salted and dried.",
  },
  {
    prompt: "Which of these is made by fermenting milk?",
    options: ["Maize meal", "Dried fruit", "Frozen peas", "Maas (amasi)"],
    answer: "Maas (amasi)",
    explanation: "Tiny living things change the milk into sour maas, which is also called amasi.",
  },
  {
    prompt: "Which tiny living things take part in fermenting?",
    options: ["Worms and beetles", "Bacteria and yeast", "Fish and frogs", "Ants and flies"],
    answer: "Bacteria and yeast",
    explanation: "Bacteria and yeast are the tiny living things that ferment food.",
  },
  {
    prompt: "A learner boils spinach for a long time in a lot of water and pours the water away. What happens?",
    options: ["Some vitamins are lost", "All the germs turn into vitamins", "The spinach gains more nutrients", "The water becomes salt"],
    answer: "Some vitamins are lost",
    explanation: "Vitamins wash out into the cooking water, so many foods lose some nutrients during processing.",
  },
  {
    prompt: "Which cooking habit keeps more of the vitamins in vegetables?",
    options: ["Cook them for hours in a large pot", "Boil them and then throw the water away", "Cook them for a short time in a little water", "Peel them very thickly first"],
    answer: "Cook them for a short time in a little water",
    explanation: "A short cooking time and little water means fewer vitamins are lost.",
  },
];

const ProcessingFood = () => (
  <CapsSubjectTopic
    title="Methods for Processing Food"
    subtitle="Why we process food, and ways to cook, keep and ferment it"
    learnSteps={learnSteps}
    task="gr6-processing-food-t1"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default ProcessingFood;
