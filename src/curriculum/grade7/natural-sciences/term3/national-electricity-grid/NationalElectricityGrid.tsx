import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "What is the national electricity grid?",
    options: ["A single large battery that stores all of the country's electricity", "A system that carries electricity from power stations to the places that use it", "A group of wind-up radios that are linked together", "A machine that changes electricity back into coal"],
    answer: "A system that carries electricity from power stations to the places that use it",
    explanation: "The grid is a system of wires and parts that carries electricity from the power station to homes and other users.",
  },
  {
    prompt: "In a power station, which part first receives energy from the source such as coal or falling water?",
    options: ["The generator", "The supply wires", "The appliance", "The turbine"],
    answer: "The turbine",
    explanation: "Energy from the source is transferred to a turbine, which then drives a generator.",
  },
  {
    prompt: "A generator in a power station changes which kind of energy into electricity?",
    options: ["Mechanical movement", "Light from the Sun", "Water vapour", "Sound waves"],
    answer: "Mechanical movement",
    explanation: "A generator changes energy from mechanical movement into electricity.",
  },
  {
    prompt: "What do the supply wires of the grid do?",
    options: ["They make the electricity from burning coal", "They turn the turbine in the power station", "They carry the electricity to appliances and lights", "They store the energy for the next year"],
    answer: "They carry the electricity to appliances and lights",
    explanation: "The wires of the national supply grid transfer the energy to the appliances and lights.",
  },
  {
    prompt: "Coal is which kind of source of energy?",
    options: ["Renewable", "Neither of the two kinds", "Non-renewable", "Both kinds at the same time"],
    answer: "Non-renewable",
    explanation: "Coal takes millions of years to form, so it gets used up. It is a non-renewable source.",
  },
  {
    prompt: "Which pair are both renewable sources of energy?",
    options: ["Falling water and wind", "Coal and gas", "Oil and nuclear fuel", "Gas and falling water"],
    answer: "Falling water and wind",
    explanation: "Falling water and wind are replaced all the time. Coal, oil, gas and nuclear fuel can be used up.",
  },
  {
    prompt: "What is a dynamo?",
    options: ["A large battery that can power a whole town", "A special kind of bulb that saves electricity", "A long wire that carries electricity to homes", "A small generator that changes movement into electricity"],
    answer: "A small generator that changes movement into electricity",
    explanation: "A dynamo is a small generator. It changes mechanical movement into electricity.",
  },
  {
    prompt: "Which of these uses a dynamo?",
    options: ["An electric kettle", "A wind-up radio", "A fridge at home", "A cellphone charger plugged in"],
    answer: "A wind-up radio",
    explanation: "Dynamos are used in wind-up torches and radios, some bicycle lights and mine helmets.",
  },
  {
    prompt: "In a power station, what does the turbine drive?",
    options: ["The generator", "The supply wires", "The light bulbs", "The coal"],
    answer: "The generator",
    explanation: "The turbine transfers its energy to the generator, which makes the electricity.",
  },
  {
    prompt: "An old bulb uses 60 W and an energy-saving bulb uses 10 W. How many watts less does the energy-saving bulb use?",
    options: ["6 W", "70 W", "50 W", "600 W"],
    answer: "50 W",
    explanation: "60 − 10 = 50 W less.",
  },
  {
    prompt: "An old bulb uses 60 W and an energy-saving bulb uses 10 W. How many times as much power does the old bulb use?",
    options: ["50 times", "6 times", "10 times", "70 times"],
    answer: "6 times",
    explanation: "60 ÷ 10 = 6, so the old bulb uses 6 times as much power.",
  },
  {
    prompt: "Which action saves electricity at home?",
    options: ["Leaving the television on standby overnight", "Boiling a full kettle for one cup of tea", "Using a large pot on a small stove plate", "Switching off lights in an empty room"],
    answer: "Switching off lights in an empty room",
    explanation: "Switching off lights and appliances that are not in use is a simple way to save energy.",
  },
  {
    prompt: "Why should South Africans use electricity wisely?",
    options: ["Electricity is only made on sunny days", "Electricity cannot be carried through wires", "Appliances stop working after they are used often", "The supply of electrical energy is limited"],
    answer: "The supply of electrical energy is limited",
    explanation: "South Africa has a limited supply of electrical energy, so saving it helps everyone.",
  },
  {
    prompt: "What is a hotbox used for?",
    options: ["Making electricity from the heat of a stove", "Finishing the cooking without using more electricity", "Switching off the lights at night automatically", "Keeping a house cool in summer"],
    answer: "Finishing the cooking without using more electricity",
    explanation: "A hotbox keeps food hot so that it finishes cooking, which saves energy.",
  },
];

const NationalElectricityGrid = () => (
  <CapsSubjectTopic
    title="The National Electricity Supply"
    subtitle="From the power station to your home, and saving electricity"
    learnSteps={learnSteps}
    task="gr7-national-electricity-grid-t3"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default NationalElectricityGrid;
