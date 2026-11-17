import CapsSubjectTopic, { type CapsItem, type LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { AirBar, GreenhouseDiagram, LayersScale, TempDrop } from '../../../../../components/diagrams/science/Ns9Pictures';
import * as e from '../../../../../components/diagrams/science/ns9Energy';

// CAPS Natural Sciences Grade 9 Term 4 (Planet Earth and Beyond): the atmosphere: composition of air, density with height, four layers and their temperature
// gradients (troposphere about 1 °C per 100 m), ozone in the stratosphere, the greenhouse effect and global warming. Numbers come from ns9Energy.ts.
// The CAPS text says greenhouse gases "trap the ultraviolet radiation"; physically it is heat (infrared) that is trapped, so the lesson teaches "trap heat"
// (docs/notes/g9-natural-sciences-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
const c = (n: number) => String(n).replace('.', ',').replace('-', '−');

const surface = 25;
const pts = [0, 1000, 2000, 3000].map((h) => ({ heightM: h, tempC: e.tempAtHeight(surface, h) }));
const check = { t: e.tempAtHeight(30, 2500), cm: e.drawnCm(e.thickness('Stratosphere'), 10) };

export const learnSteps: LearnStep[] = [
  {
    title: 'What air is made of',
    content: slide(
      <>
        <Rule>The atmosphere is the layer of gases held around the Earth by gravity. This mixture of gases is called air. Air is nitrogen (78%), oxygen (21%), carbon dioxide (less than 1%) and other gases, including water vapour, which together make up about 1%.</Rule>
        <AirBar nitrogen={78} oxygen={21} other={1} />
        <Worked
          title="Adding up the gases"
          steps={[
            <>Nitrogen 78% + oxygen 21% = <strong>{78 + 21}%</strong>.</>,
            <>That leaves {100 - 78 - 21}% for carbon dioxide, water vapour and all the other gases.</>,
            <>The air is thickest near the Earth. The further you go from the Earth, the thinner the air, because the gas particles are further apart.</>,
          ]}
        />
        <Mistake>Thinking that oxygen is the biggest part of air. Nitrogen is the biggest part, 78%. Oxygen is 21%.</Mistake>
      </>,
    ),
  },
  {
    title: 'The four layers',
    content: slide(
      <>
        <Rule>The atmosphere has four layers: the troposphere, the stratosphere, the mesosphere and the thermosphere. Each layer has a different temperature gradient, which is how much the temperature changes with height above sea level.</Rule>
        <LayersScale layers={[...e.LAYERS]} />
        <Worked
          title="A scale drawing: 1 cm for every 10 km"
          steps={[
            <>Troposphere: 0 to 10 km, which is {e.thickness('Troposphere')} km thick. Drawn: {e.drawnCm(e.thickness('Troposphere'), 10)} cm.</>,
            <>Stratosphere: 10 to 50 km, {e.thickness('Stratosphere')} km thick. Drawn: <strong>{e.drawnCm(e.thickness('Stratosphere'), 10)} cm</strong>.</>,
            <>Mesosphere: 50 to 80 km, {e.thickness('Mesosphere')} km thick. Drawn: {e.drawnCm(e.thickness('Mesosphere'), 10)} cm.</>,
            <>The thermosphere starts above 80 km and fades out at about 350 km. The International Space Station orbits at about 370 km.</>,
          ]}
        />
        <Mistake>Giving the height of a layer instead of its thickness. The stratosphere ends at 50 km but is only 40 km thick (50 − 10).</Mistake>
      </>,
    ),
  },
  {
    title: 'Temperature in the troposphere',
    content: slide(
      <>
        <Rule>The troposphere reaches from sea level to about 10 km. It holds more than 70% of the mass of the atmosphere, it has the greatest density, all the weather occurs in it, and all animals and plants live in it. The temperature falls as you go up, by about 1 °C for every 100 m in still air.</Rule>
        <TempDrop points={pts} />
        <Worked
          title="Temperature at a height"
          steps={[
            <>The temperature at sea level is {surface} °C. At 3 000 m the height is 3 000 ÷ 100 = 30 steps of 100 m.</>,
            <>The temperature falls by 30 × 1 = 30 °C: {surface} − 30 = <strong>{c(e.tempAtHeight(surface, 3000))} °C</strong>.</>,
            <>At 1 000 m it is {surface} − 10 = {c(e.tempAtHeight(surface, 1000))} °C.</>,
          ]}
        />
        <Mistake>Using 1 °C for every 1 000 m. The temperature falls by about 1 °C for every 100 m, which is 10 °C for 1 000 m.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ozone, the greenhouse effect and global warming',
    content: slide(
      <>
        <Rule>The stratosphere has a band of ozone gas (O₃), which absorbs ultraviolet radiation from the Sun, so the stratosphere gets warmer with height. The greenhouse effect is natural and warms the atmosphere enough for life. Greenhouse gases trap heat near the Earth. More greenhouse gases cause global warming.</Rule>
        <GreenhouseDiagram />
        <Worked
          title="From greenhouse gases to global warming"
          steps={[
            <>The most common greenhouse gases are carbon dioxide, water vapour and methane. They trap heat, as the glass of a greenhouse does.</>,
            <>An increase in greenhouse gases leads to <strong>global warming</strong>, an increase in the average temperature of the atmosphere.</>,
            <>Global warming can lead to climate change, rising sea levels, food shortages and mass extinctions.</>,
            <>Too much ultraviolet radiation harms life: human health, photosynthesis and the sizes of populations.</>,
          ]}
        />
        <Mistake>Saying that the greenhouse effect is the cause of the hole in the ozone layer, or that it is always bad. The greenhouse effect is natural and keeps the Earth warm. Too many greenhouse gases are the problem.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>The temperature at sea level is 30 °C. What is it at 2 500 m in still air in the troposphere?</>,
            <>On a scale drawing of 1 cm for every 10 km, how thick should the stratosphere be drawn?</>,
            <>Nitrogen is 78% and oxygen is 21%. What per cent is left for all the other gases?</>,
            <>Which layer has a band of ozone?</>,
          ]}
          answers={[
            <>2 500 ÷ 100 = 25 steps, so the temperature falls by 25 °C: 30 − 25 = <strong>{c(check.t)} °C</strong>.</>,
            <>40 km ÷ 10 = <strong>{c(check.cm)} cm</strong>.</>,
            <>100 − 78 − 21 = <strong>{100 - 78 - 21}%</strong>.</>,
            <>The <strong>stratosphere</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from mapwork.ts; skillsA.test.ts recomputes every key independently).
export const bank: CapsItem[] = [
  { prompt: "Which gas makes up most of the air?", options: ["Nitrogen","Oxygen","Carbon dioxide","Water vapour"], answer: "Nitrogen", explanation: "Air is about 78% nitrogen and 21% oxygen." },
  { prompt: "What percentage of the air is oxygen?", options: ["78%","21%","1%","50%"], answer: "21%", explanation: "Air is nitrogen 78%, oxygen 21% and about 1% for the other gases." },
  { prompt: "What holds the atmosphere around the Earth?", options: ["Magnetism","Wind","Gravity","The Moon"], answer: "Gravity", explanation: "The atmosphere is the mixture of gases held around the Earth by gravity." },
  { prompt: "How does the density of the air change as you go higher above the Earth?", options: ["It increases","It stays the same","It increases and then stops","It decreases"], answer: "It decreases", explanation: "The gas particles are further apart the further away from the Earth, so the air becomes thinner." },
  { prompt: "Which is the correct order of the layers of the atmosphere, starting nearest the Earth?", options: ["Troposphere, stratosphere, mesosphere, thermosphere","Stratosphere, troposphere, thermosphere, mesosphere","Mesosphere, troposphere, stratosphere, thermosphere","Thermosphere, mesosphere, stratosphere, troposphere"], answer: "Troposphere, stratosphere, mesosphere, thermosphere", explanation: "The four layers, from the Earth upwards, are the troposphere, stratosphere, mesosphere and thermosphere." },
  { prompt: "In which layer does the weather occur and in which do all animals and plants live?", options: ["The stratosphere","The troposphere","The mesosphere","The thermosphere"], answer: "The troposphere", explanation: "The troposphere is the lowest layer, from sea level to about 10 km, and it contains most of the mass of the air." },
  { prompt: "How thick is the stratosphere, which extends from about 10 km to about 50 km?", options: ["50 km","60 km","40 km","4 km"], answer: "40 km", explanation: "50 km − 10 km = 40 km." },
  { prompt: "On a scale drawing with 1 cm for every 10 km, how many centimetres should the mesosphere (50 to 80 km) be drawn?", options: ["8 cm","5 cm","30 cm","3 cm"], answer: "3 cm", explanation: "The mesosphere is 80 − 50 = 30 km thick. 30 ÷ 10 = 3 cm." },
  { prompt: "The temperature at sea level is 25 °C. What is the temperature at 3 000 m in still air in the troposphere, where it falls by about 1 °C per 100 m?", options: ["−5 °C","22 °C","−30 °C","−5,5 °C"], answer: "−5 °C", explanation: "3 000 m is 30 steps of 100 m, so the temperature falls by 30 °C: 25 − 30 = −5 °C." },
  { prompt: "The temperature at sea level is 20 °C. At what height in the troposphere will it be 5 °C, if it falls by about 1 °C per 100 m?", options: ["150 m","1 500 m","15 m","2 000 m"], answer: "1 500 m", explanation: "The temperature must fall by 20 − 5 = 15 °C, which is 15 × 100 m = 1 500 m." },
  { prompt: "Which gas in the stratosphere absorbs ultraviolet radiation from the Sun?", options: ["Nitrogen","Methane","Ozone","Water vapour"], answer: "Ozone", explanation: "The band of ozone (O₃) in the stratosphere absorbs ultraviolet radiation." },
  { prompt: "Why does the stratosphere get warmer with height?", options: ["It is nearer to the Sun's core","It holds the weather of the Earth","The air is denser there","Ozone absorbs ultraviolet radiation"], answer: "Ozone absorbs ultraviolet radiation", explanation: "The absorption of ultraviolet radiation by ozone heats the stratosphere, so the further from the Earth, the warmer the air." },
  { prompt: "Which layer burns up small rocks and dust from space, seen as shooting stars?", options: ["The mesosphere","The troposphere","The stratosphere","The thermosphere"], answer: "The mesosphere", explanation: "There is still enough air in the mesosphere to burn up small rocks and dust entering from space." },
  { prompt: "Which of these is a greenhouse gas?", options: ["Nitrogen","Carbon dioxide","Oxygen","Argon"], answer: "Carbon dioxide", explanation: "The most common greenhouse gases are carbon dioxide, water vapour and methane." },
  { prompt: "What can an increase in greenhouse gases lead to?", options: ["A colder atmosphere","More ozone in the troposphere","Global warming","Less water vapour in the air"], answer: "Global warming", explanation: "More greenhouse gases trap more heat, which increases the average temperature of the atmosphere: global warming." },
];

const Atmosphere = () => (
  <CapsSubjectTopic
    title="The Atmosphere"
    subtitle="Air, the four layers, temperature, ozone and the greenhouse effect"
    learnSteps={learnSteps}
    task="gr9-atmosphere-t4"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default Atmosphere;
