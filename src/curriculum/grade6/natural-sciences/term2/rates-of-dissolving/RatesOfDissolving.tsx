import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is meant by the rate of dissolving?",
    options: ["How much a solute weighs", "What colour the solution is", "How many solutes are in a cup", "How quickly a solute dissolves"],
    answer: "How quickly a solute dissolves",
    explanation: "The rate of dissolving is the speed at which a solute dissolves, measured by the time it takes.",
  },
  {
    prompt: "Which change makes sugar dissolve faster in water?",
    options: ["Using cold water", "Using hot water", "Not touching it at all", "Using larger lumps of sugar"],
    answer: "Using hot water",
    explanation: "A solute dissolves faster in hot water than in cold water.",
  },
  {
    prompt: "Which of these helps a solute to dissolve faster?",
    options: ["Stirring or shaking the mixture", "Leaving the mixture to stand still", "Putting a lid on the cup", "Cooling the mixture in a fridge"],
    answer: "Stirring or shaking the mixture",
    explanation: "Stirring or shaking moves the solute through the water and speeds up dissolving.",
  },
  {
    prompt: "Which salt will usually dissolve the fastest in the same amount of water?",
    options: ["Coarse salt", "One big lump of rock salt", "Fine salt", "They all dissolve at the same speed"],
    answer: "Fine salt",
    explanation: "Small grains have more surface touching the water, so they dissolve faster than big ones.",
  },
  {
    prompt: "A pinch of salt dissolves in 90 seconds in cold water and in 20 seconds in hot water. By how many seconds is the hot water quicker?",
    options: ["70 seconds", "110 seconds", "20 seconds", "90 seconds"],
    answer: "70 seconds",
    explanation: "90 − 20 = 70 seconds.",
  },
  {
    prompt: "On a graph of the time salt takes to dissolve, which bar shows the fastest rate?",
    options: ["The longest bar", "The middle bar", "The shortest bar", "The bar on the left"],
    answer: "The shortest bar",
    explanation: "The shortest bar is the shortest time, so the solute dissolved fastest.",
  },
  {
    prompt: "Salt takes 60 seconds to dissolve when it is not stirred and 20 seconds when it is stirred. How many times as long does it take without stirring?",
    options: ["40 times", "3 times", "2 times", "4 times"],
    answer: "3 times",
    explanation: "60 ÷ 20 = 3, so it takes 3 times as long without stirring.",
  },
  {
    prompt: "Coarse salt takes 70 seconds to dissolve and fine salt takes 30 seconds. How many seconds longer does the coarse salt take?",
    options: ["100 seconds", "30 seconds", "70 seconds", "40 seconds"],
    answer: "40 seconds",
    explanation: "70 − 30 = 40 seconds.",
  },
  {
    prompt: "How many things should you change in a fair test?",
    options: ["Two", "All of them", "Only one", "None of them"],
    answer: "Only one",
    explanation: "In a fair test we change one thing and keep everything else the same, so we know what caused the result.",
  },
  {
    prompt: "A learner tests how temperature changes the rate of dissolving salt. What should stay the same in every test?",
    options: ["The amount of salt and the amount of water", "The temperature of the water each time", "The time shown on the school clock", "The name of the learner who does it"],
    answer: "The amount of salt and the amount of water",
    explanation: "Only the temperature should change. The same amounts of solute and water are used each time.",
  },
  {
    prompt: "Which test is a fair test of whether stirring speeds up dissolving?",
    options: ["A cup of hot water with fine salt and a cup of cold water with coarse salt", "A stirred cup with 5 ml of salt and an unstirred cup with 10 ml of salt", "A cup with 125 ml of water and a cup with 250 ml of water, both stirred", "Two cups with 5 ml of fine salt in 125 ml of cold water, one stirred and one not"],
    answer: "Two cups with 5 ml of fine salt in 125 ml of cold water, one stirred and one not",
    explanation: "Only stirring is different. In the other tests, more than one thing is different.",
  },
  {
    prompt: "Why is it not fair to compare coarse salt in cold water with fine salt in hot water?",
    options: ["Salt can never dissolve at all in cold water, ever", "Two things differ, so we cannot tell which one caused it", "Fine salt cannot ever be called a true solute", "Hot water cannot be measured with any tool at all"],
    answer: "Two things differ, so we cannot tell which one caused it",
    explanation: "Both grain size and temperature changed, so we cannot tell which one made the difference.",
  },
];

const RatesOfDissolving = () => (
  <CapsSubjectTopic
    title="Rates of Dissolving"
    subtitle="Temperature, stirring, grain size and a fair test"
    learnSteps={learnSteps}
    task="gr6-rates-of-dissolving-t2"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default RatesOfDissolving;
