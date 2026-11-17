import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which of these pollutes water and does not dissolve in it?",
    options: ["Soap", "Fertilizer", "Plastic bottles", "Insecticide"],
    answer: "Plastic bottles",
    explanation: "Plastics, oil, tyres, tins and glass do not dissolve in water. Soaps, fertilizers and insecticides dissolve.",
  },
  {
    prompt: "Which of these pollutes water and dissolves in it?",
    options: ["Soap", "Tyres", "Glass", "Tins"],
    answer: "Soap",
    explanation: "Soap dissolves in water, so it cannot be seen. Tyres, glass and tins do not dissolve.",
  },
  {
    prompt: "A farmer puts fertilizer on a field and rain washes it into a river. What kind of pollutant is the fertilizer?",
    options: ["An insoluble pollutant", "A living germ", "A kind of rock", "A soluble pollutant"],
    answer: "A soluble pollutant",
    explanation: "Fertilizer dissolves in water, so it is a soluble pollutant that cannot be filtered out with a sieve.",
  },
  {
    prompt: "Oil is spilled on a dam. What kind of pollutant is oil?",
    options: ["A soluble pollutant", "An insoluble pollutant", "A kind of germ", "A vitamin"],
    answer: "An insoluble pollutant",
    explanation: "Oil does not dissolve in water. It floats on top.",
  },
  {
    prompt: "What do living germs from toilet waste in drinking water cause?",
    options: ["Stronger teeth in young children", "Water-borne illnesses such as diarrhoea", "Clearer and much cleaner water", "Faster growth of green plants"],
    answer: "Water-borne illnesses such as diarrhoea",
    explanation: "Germs in the water can make people ill if they drink it.",
  },
  {
    prompt: "Why is it unsafe to drink water straight from a river or dam?",
    options: ["It is always too cold to drink", "It is always too salty to taste", "It has no water in it", "It can carry germs and pollutants"],
    answer: "It can carry germs and pollutants",
    explanation: "Water from rivers and dams can have germs and pollutants in it, even if it looks clear.",
  },
  {
    prompt: "Why can clear water still be polluted?",
    options: ["Dissolved pollutants and germs cannot be seen", "Clear water is always full of oil", "Pollutants only live in dirty water", "Clear water cannot be tested"],
    answer: "Dissolved pollutants and germs cannot be seen",
    explanation: "Soluble pollutants dissolve and germs are too small to see, so clear water can still be unsafe.",
  },
  {
    prompt: "What is a wetland?",
    options: ["A dry field where maize is grown every year", "A tank for storing clean tap water in town", "A natural area that is wet for a long time, such as a marsh", "A paved road that floods when it rains"],
    answer: "A natural area that is wet for a long time, such as a marsh",
    explanation: "Marshes and vleis are wetlands. They hold water for a long time.",
  },
  {
    prompt: "How does a wetland help to clean water?",
    options: ["It adds salt and soap to the water", "It turns all the water into steam", "It lets every pollutant pass straight through", "It removes soluble and insoluble substances from the water"],
    answer: "It removes soluble and insoluble substances from the water",
    explanation: "Wetland plants and soil trap dirt and take up poisons, so the water leaves cleaner.",
  },
  {
    prompt: "Why do we say that a wetland acts like a sponge?",
    options: ["It is made of soft yellow foam", "It soaks up water and lets it go slowly", "It dries out every day at noon", "It pumps water back up into the sky"],
    answer: "It soaks up water and lets it go slowly",
    explanation: "A wetland soaks up the water from heavy rain and releases it slowly, which helps to prevent floods.",
  },
  {
    prompt: "Heavy rain sends 40 units of water into a wetland in one hour. The water leaving the wetland peaks at 22,5 units. What does this show?",
    options: ["The wetland slows the rush of water", "The wetland makes more water", "The wetland has no effect on water", "The wetland has dried up"],
    answer: "The wetland slows the rush of water",
    explanation: "The peak leaving the wetland, 22,5, is lower than the 40 that came in, because the wetland holds some water back.",
  },
  {
    prompt: "A wetland is drained so that a shopping centre can be built. What is one result?",
    options: ["The river below gets cleaner water", "Floods become smaller after rain", "The animals and plants lose their habitat", "More frogs come to live there"],
    answer: "The animals and plants lose their habitat",
    explanation: "Loss of a wetland means the animals and plants that lived there lose their home, and water quality and flood control get worse.",
  },
];

const WaterPollutionWetlands = () => (
  <CapsSubjectTopic
    title="Water Pollution and Wetlands"
    subtitle="What pollutes water, germs and illness, and why wetlands matter"
    learnSteps={learnSteps}
    task="gr6-water-pollution-wetlands-t2"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default WaterPollutionWetlands;
