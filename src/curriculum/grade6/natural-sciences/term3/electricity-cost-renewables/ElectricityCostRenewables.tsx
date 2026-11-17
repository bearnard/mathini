import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Why is electricity costly to make and deliver?",
    options: ["It is made only on very sunny days", "It is carried to homes by lorry", "It must be bought from other planets", "It needs mines, power stations, pylons and wiring"],
    answer: "It needs mines, power stations, pylons and wiring",
    explanation: "Coal mines, transport, power stations, pylons, substations and wiring all cost money.",
  },
  {
    prompt: "What happens to a family's electricity bill if it uses more electricity?",
    options: ["It pays less", "It pays more", "It pays the same", "It pays nothing"],
    answer: "It pays more",
    explanation: "The more electricity we use, the more we pay.",
  },
  {
    prompt: "What also happens when we use more electricity, if it comes from a coal power station?",
    options: ["More coal is used up", "Less coal is used up", "The coal turns to wood", "The coal is made again"],
    answer: "More coal is used up",
    explanation: "More electricity means more coal is burnt in the power station.",
  },
  {
    prompt: "What does the label on an electrical appliance show?",
    options: ["How old the appliance is", "How many people made it", "How much power it needs, in watts", "What colour it was painted"],
    answer: "How much power it needs, in watts",
    explanation: "Labels show the power an appliance needs. Watts are written as W.",
  },
  {
    prompt: "A kettle's label says 2 000 W and a radio's label says 15 W. Which needs more power?",
    options: ["The kettle", "The radio", "They need the same", "Neither of them"],
    answer: "The kettle",
    explanation: "2 000 W is much more than 15 W, so the kettle needs more power.",
  },
  {
    prompt: "Which kind of electrical appliance uses the most electricity?",
    options: ["Radios", "Torches with batteries", "Heating appliances", "Energy-saving bulbs"],
    answer: "Heating appliances",
    explanation: "Appliances that make heat, such as kettles and room heaters, use the most electricity.",
  },
  {
    prompt: "A table lists a television at 100 W, a radio at 15 W and an energy-saving bulb at 10 W. Which uses the least power?",
    options: ["The television", "The energy-saving bulb", "The radio", "They all use the same"],
    answer: "The energy-saving bulb",
    explanation: "10 W is the smallest number, so the bulb needs the least power.",
  },
  {
    prompt: "Which of these helps a family to save electricity?",
    options: ["Leaving lights on all night", "Using the heater with the window open", "Boiling a full kettle for one cup", "Using energy-saving light bulbs"],
    answer: "Using energy-saving light bulbs",
    explanation: "Energy-saving bulbs give the same light using less power.",
  },
  {
    prompt: "How does a solar water heater save electricity?",
    options: ["It burns coal to heat the water", "It stores cold water for later", "It uses the Sun to heat the water", "It makes the water boil by itself"],
    answer: "It uses the Sun to heat the water",
    explanation: "A solar water heater uses sunlight to heat water, so less electricity is needed.",
  },
  {
    prompt: "Why are illegal electrical connections a danger to people?",
    options: ["They are often unsafe", "They make the lights too dim", "They are always too expensive", "They use too little power"],
    answer: "They are often unsafe",
    explanation: "Illegal connections are often not made safely, which can be very dangerous.",
  },
  {
    prompt: "Which pair are both renewable ways to make electricity?",
    options: ["Coal and also natural gas", "Oil and also wind generators", "Natural gas and also solar panels", "Wind generators and hydro-electric power"],
    answer: "Wind generators and hydro-electric power",
    explanation: "Wind and falling water do not run out. Coal, oil and natural gas do.",
  },
  {
    prompt: "What is the difference between a solar panel and a solar water heater?",
    options: ["The panel makes hot water and the heater makes electricity", "The panel makes electricity and the heater makes hot water", "Both make only cold water", "There is no difference between them"],
    answer: "The panel makes electricity and the heater makes hot water",
    explanation: "Solar panels (photovoltaics) change sunlight into electricity. Solar water heaters only heat water.",
  },
];

const ElectricityCostRenewables = () => (
  <CapsSubjectTopic
    title="Cost, Saving and Renewable Electricity"
    subtitle="Why electricity costs, how to save it, and renewable ways to make it"
    learnSteps={learnSteps}
    task="gr6-electricity-cost-renewables-t3"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default ElectricityCostRenewables;
