import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "What is a species?",
    options: ["A group of living things of the same type that can reproduce to make more of the same type", "A group of living things that live in exactly the same habitat as each other", "A group of living things that all eat the same food as each other in the wild", "A group of living things that look completely identical to each other in size"],
    answer: "A group of living things of the same type that can reproduce to make more of the same type",
    explanation: "Members of one species can reproduce to make more of their own kind. Humans are one species and dogs are another.",
  },
  {
    prompt: "What do we call the differences between living things of the same species?",
    options: ["Classification", "Adaptation", "Variation", "Reproduction"],
    answer: "Variation",
    explanation: "Differences between members of the same species, such as height, are called variation.",
  },
  {
    prompt: "All people belong to which species?",
    options: ["Canis familiaris", "Homo sapiens", "Felis catus", "Pan troglodytes"],
    answer: "Homo sapiens",
    explanation: "All people are human, Homo sapiens, and so belong to one species.",
  },
  {
    prompt: "A Great Dane and a small terrier look very different. What are they?",
    options: ["Two different species of animal", "Two different groups of plants", "The same animal at different ages", "The same species with variation in size"],
    answer: "The same species with variation in size",
    explanation: "Both are dogs. Dogs of different sizes can reproduce together, so they are one species with variation.",
  },
  {
    prompt: "Which of these is an inherited characteristic in people?",
    options: ["Having a scar on the knee", "Speaking isiXhosa at home", "Being able to roll the tongue", "Wearing a school uniform"],
    answer: "Being able to roll the tongue",
    explanation: "Tongue rolling and height are passed from parents to children. A scar, a language and a uniform are not inherited.",
  },
  {
    prompt: "Out of 30 learners, 21 are able to roll their tongues. What is that as a percentage?",
    options: ["70%", "21%", "30%", "9%"],
    answer: "70%",
    explanation: "21 ÷ 30 × 100 = 70%.",
  },
  {
    prompt: "Nine of the 30 learners in a class cannot roll their tongues. What percentage of the class is that?",
    options: ["9%", "21%", "70%", "30%"],
    answer: "30%",
    explanation: "9 learners cannot: 9 ÷ 30 × 100 = 30%. Together with the 70% who can, the total is 100%.",
  },
  {
    prompt: "In a family of 5 people, 3 can roll their tongues. What percentage of the family can roll?",
    options: ["30%", "60%", "40%", "35%"],
    answer: "60%",
    explanation: "3 ÷ 5 × 100 = 60%.",
  },
  {
    prompt: "A class has a tallest learner of 157 cm and a shortest learner of 142 cm. By how much do their heights vary?",
    options: ["14 cm", "15 cm", "299 cm", "142 cm"],
    answer: "15 cm",
    explanation: "Subtract the smallest from the largest: 157 − 142 = 15 cm.",
  },
  {
    prompt: "In a height survey the 140–144 cm group has 2 learners, the 145–149 cm group has 12, the 150–154 cm group has 13 and the 155–159 cm group has 3. How many learners were measured?",
    options: ["30", "13", "15", "28"],
    answer: "30",
    explanation: "Add all the bars: 2 + 12 + 13 + 3 = 30 learners.",
  },
  {
    prompt: "A class survey sorts 30 heights into four groups. Three groups have 2, 12 and 3 learners. How many learners are in the fourth group?",
    options: ["13", "17", "12", "30"],
    answer: "13",
    explanation: "The bars must add up to 30 learners: 30 − (2 + 12 + 3) = 13.",
  },
  {
    prompt: "Why should height groups such as 140–144 and 145–149 not overlap?",
    options: ["So that the graph has fewer bars to draw", "So that every group holds the same number", "So that each learner is counted only once", "So that the tallest learner is left out"],
    answer: "So that each learner is counted only once",
    explanation: "If the groups overlapped, a learner on the border would be counted in two bars.",
  },
  {
    prompt: "Which graph is best for showing how many learners fall into each height group?",
    options: ["A map", "A food chain", "A flow chart", "A bar graph"],
    answer: "A bar graph",
    explanation: "A bar graph shows the count in each group, so the variation in the class is easy to see.",
  },
  {
    prompt: "Which pair shows variation within one species?",
    options: ["A lion and a zebra", "Two learners of different heights", "A rose bush and a gum tree", "A frog and a snake"],
    answer: "Two learners of different heights",
    explanation: "Variation is a difference inside one species. The other pairs are two different species.",
  },
];

const Variation = () => (
  <CapsSubjectTopic
    title="Variation"
    subtitle="How living things of one species are different from each other"
    learnSteps={learnSteps}
    task="gr7-variation-t1"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default Variation;
