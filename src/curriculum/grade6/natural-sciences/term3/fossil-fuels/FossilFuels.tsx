import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What were fossil fuels formed from?",
    options: ["Rocks and sand only", "Water and air only", "Metal and glass", "Dead plants and animals"],
    answer: "Dead plants and animals",
    explanation: "Fossil fuels were formed in the Earth's crust from dead plants and animals.",
  },
  {
    prompt: "How long ago were fossil fuels formed?",
    options: ["A few weeks ago", "Millions of years ago", "Last year", "A hundred years ago"],
    answer: "Millions of years ago",
    explanation: "Fossil fuels took millions of years to form in the Earth's crust.",
  },
  {
    prompt: "Which of these is a fossil fuel?",
    options: ["Coal", "Wood from a young tree", "Wind", "Sunlight"],
    answer: "Coal",
    explanation: "Coal, oil and natural gas are fossil fuels.",
  },
  {
    prompt: "Which pair are both fossil fuels?",
    options: ["Wind and coal", "Sunlight and oil", "Oil and natural gas", "Water and wind"],
    answer: "Oil and natural gas",
    explanation: "Coal, oil and natural gas are the fossil fuels.",
  },
  {
    prompt: "The plants that turned into coal once grew using energy from which source?",
    options: ["The Sun", "The coal mine", "The power station", "The wind"],
    answer: "The Sun",
    explanation: "Plants use energy from the Sun, and that energy is stored in the coal.",
  },
  {
    prompt: "In South Africa, how is coal mostly used?",
    options: ["As a food for farm animals", "As a building block for roads", "As a fuel in power stations", "As a drink for people"],
    answer: "As a fuel in power stations",
    explanation: "Most coal in South Africa is burnt in power stations to make electricity.",
  },
  {
    prompt: "What does burning coal do to the water in a power station?",
    options: ["It freezes the water into ice", "It boils the water into steam", "It filters the water clean", "It turns the water into coal"],
    answer: "It boils the water into steam",
    explanation: "The heat from the burning coal boils the water, and the steam turns the turbine.",
  },
  {
    prompt: "In a coal power station, which of these spins the turbine?",
    options: ["Wind", "Sunlight", "Smoke", "Steam"],
    answer: "Steam",
    explanation: "The steam from the boiling water spins the turbine.",
  },
  {
    prompt: "In a coal power station, which part produces the electricity?",
    options: ["The coal store", "The pylon", "The generator", "The water tank"],
    answer: "The generator",
    explanation: "The turbine turns the generator, and the generator produces the electricity.",
  },
  {
    prompt: "A television is powered by a coal power station. What is the original source of its energy?",
    options: ["The Sun", "The wires", "The turbine", "The television"],
    answer: "The Sun",
    explanation: "The electricity came from coal, the coal from plants, and the plants got their energy from the Sun.",
  },
  {
    prompt: "Why are coal, oil and natural gas called non-renewable resources?",
    options: ["They cannot be burnt in any power station at all", "They are found only on the floor of the sea", "They can be made all over again in just a week", "They take millions of years to form, so they get used up"],
    answer: "They take millions of years to form, so they get used up",
    explanation: "We use fossil fuels much faster than they form, so they will run out.",
  },
  {
    prompt: "What happens to the amount of coal used as we use more electricity?",
    options: ["Less coal is used up", "More coal is used up", "The coal turns into oil", "The coal is not used at all"],
    answer: "More coal is used up",
    explanation: "The more electricity we use, the more coal is burnt in power stations.",
  },
];

const FossilFuels = () => (
  <CapsSubjectTopic
    title="Fossil Fuels and the Power Station"
    subtitle="How coal formed, how it makes electricity, and the trail back to the Sun"
    learnSteps={learnSteps}
    task="gr6-fossil-fuels-t3"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default FossilFuels;
