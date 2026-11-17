import CapsSubjectTopic, { type CapsItem, type LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { GridLoss } from '../../../../../components/diagrams/science/Ns9Pictures';
import { FlowSteps } from '../../../../../components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as e from '../../../../../components/diagrams/science/ns9Energy';

// CAPS Natural Sciences Grade 9 Term 3: energy and the national electricity grid: a power station as a system (coal boils water, steam turns a turbine,
// the turbine turns a generator), alternative sources compared on sustainability and environmental impact, nuclear power at Koeberg and nuclear waste, and the
// national grid (high voltage lines, transformers step down, 15% lost as heat, surges and overload). Numbers come from ns9Energy.ts.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
const c = (n: number) => String(n).replace('.', ',');

const sent = 100;
const check = { delivered: e.delivered(400), lost: e.lost(400) };

export const learnSteps: LearnStep[] = [
  {
    title: 'A coal power station as a system',
    content: slide(
      <>
        <Rule>A power station is a system for generating electricity. Most power stations in South Africa use coal as a fuel to boil water. The steam turns a turbine, and the turbine turns a generator, which produces electricity.</Rule>
        <FlowSteps
          aria="The steps in a coal power station: burning coal heats water in a boiler, the water becomes steam, the steam turns a turbine, the turbine turns a generator, and the generator produces electricity that goes to the national grid."
          steps={[
            { label: 'Coal is burnt', sub: 'chemical energy to heat' },
            { label: 'Water boils to steam', sub: 'in the boiler' },
            { label: 'Steam turns a turbine' },
            { label: 'The turbine turns a generator', sub: 'electricity is produced' },
            { label: 'Electricity goes to the grid' },
          ]}
        />
        <Worked
          title="Energy changes along the chain"
          steps={[
            <>The chemical energy in the coal is changed into heat when the coal burns.</>,
            <>The heat boils the water, and the steam carries the energy to the turbine as movement.</>,
            <>The generator changes the movement of the turbine into electrical energy.</>,
            <>Coal is a fossil fuel. It is not renewable, and burning it releases carbon dioxide and other pollutants.</>,
          ]}
        />
        <Mistake>Thinking that the coal is burnt inside the generator. The coal heats the water in the boiler. The generator is turned by the turbine.</Mistake>
      </>,
    ),
  },
  {
    title: 'Alternative sources of energy',
    content: slide(
      <>
        <Rule>Coal is not the only way to drive a turbine and generator. Alternatives include wind, falling water (hydroelectric), sun-heated steam, nuclear fission and waves in the sea. We compare them by how sustainable they are and what effect they have on the environment.</Rule>
        <InfoTable
          cols={[{ title: 'Source', w: 24 }, { title: 'How it drives a turbine', w: 40 }, { title: 'Impact', w: 36 }]}
          rows={[
            ['Wind', 'Moving air turns\nthe blades', 'Renewable; depends\non the wind'],
            ['Falling water', 'Water from a dam\nturns the turbine', 'Renewable; dams\nflood land'],
            ['Sun-heated steam', 'Mirrors heat water\nto make steam', 'Renewable; needs\nsunny weather'],
            ['Nuclear fission', 'Heat from fission\nboils water', 'No smoke; waste\nis radioactive'],
            ['Waves', 'Moving sea water\nturns a generator', 'Renewable; still\nbeing developed'],
          ]}
          aria="A table of alternative sources of energy. Wind: moving air turns the blades; renewable but depends on the wind. Falling water: water from a dam turns the turbine; renewable but dams flood land. Sun-heated steam: mirrors heat water to make steam; renewable but needs sunny weather. Nuclear fission: heat from fission boils water; no smoke but the waste is radioactive. Waves: moving sea water turns a generator; renewable but still being developed."
        />
        <Worked
          title="Comparing two sources"
          steps={[
            <>Wind and sun are <strong>renewable</strong>: they will not run out. Coal is not.</>,
            <>Wind and sun do not burn a fuel, so they release no carbon dioxide while working, but they depend on the weather.</>,
            <>A dam gives steady power but floods land and changes a river.</>,
          ]}
        />
        <Mistake>Calling a source &quot;free of impact&quot;. Every source has some effect on the environment, so compare them rather than ranking one as perfect.</Mistake>
      </>,
    ),
  },
  {
    title: 'Nuclear power and Koeberg',
    content: slide(
      <>
        <Rule>A nuclear power station, such as Koeberg in the Western Cape, uses radioactive fuel. The radioactivity produces heat by nuclear fission. The heat boils water, the steam turns a turbine, and the turbine turns a generator.</Rule>
        <FlowSteps
          aria="The steps in a nuclear power station: radioactive fuel produces heat by nuclear fission, the heat boils water to make steam, the steam turns a turbine, the turbine turns a generator, and the electricity goes to the national grid. The used fuel is radioactive waste that must be disposed of carefully."
          steps={[
            { label: 'Fission of radioactive fuel', sub: 'produces heat' },
            { label: 'Water boils to steam' },
            { label: 'Steam turns a turbine' },
            { label: 'The turbine turns a generator' },
            { label: 'Electricity goes to the grid' },
          ]}
        />
        <Worked
          title="Fuel and waste"
          steps={[
            <>Coal and nuclear stations are alike after the heat is made: both use steam, a turbine and a generator.</>,
            <>They differ in the fuel. Coal is burnt. Nuclear fuel gives heat by fission and gives no smoke.</>,
            <>Spent nuclear fuel (nuclear waste) stays radioactive for many hundreds of years, so it must be disposed of properly so that it is not a danger to life.</>,
          ]}
        />
        <Mistake>Saying that a nuclear power station explodes like a bomb to make electricity. It uses the heat of controlled fission to boil water.</Mistake>
      </>,
    ),
  },
  {
    title: 'The national electricity grid',
    content: slide(
      <>
        <Rule>The national grid is a network of connected parts, a system: a change in one part affects the other parts. Power stations feed energy into the grid at high voltage, power lines carry it, and transformers step the voltage down for local distributors and consumers. About 15% of the energy is wasted as heat in the lines and transformers.</Rule>
        <GridLoss sent={sent} delivered={e.delivered(sent)} />
        <Worked
          title="Energy lost in the grid"
          steps={[
            <>{sent} MWh are sent into the grid. 15% is lost: {sent} × 0,15 = <strong>{e.lost(sent)} MWh</strong>.</>,
            <>The energy delivered is {sent} − {e.lost(sent)} = <strong>{e.delivered(sent)} MWh</strong>.</>,
            <>A power surge or an overload can disrupt the power supply, because the parts of the grid depend on each other.</>,
          ]}
        />
        <Mistake>Thinking that all the energy that leaves the power station reaches the homes. About 15% is lost as heat on the way.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Put in order: generator, steam, coal burns, turbine.</>,
            <>400 MWh are sent into the grid, and 15% is lost. How much is delivered?</>,
            <>Which is renewable: coal or wind?</>,
            <>Give one danger of leaving spent nuclear fuel lying around.</>,
          ]}
          answers={[
            <><strong>Coal burns, steam, turbine, generator</strong>.</>,
            <>400 × 0,85 = <strong>{c(check.delivered)} MWh</strong> delivered, and {c(check.lost)} MWh is lost.</>,
            <><strong>Wind</strong>.</>,
            <>It stays <strong>radioactive</strong> for many hundreds of years, so it is a danger to life.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from mapwork.ts; skillsA.test.ts recomputes every key independently).
export const bank: CapsItem[] = [
  { prompt: "Which fuel do most power stations in South Africa use?", options: ["Coal","Natural gas","Wood","Uranium"], answer: "Coal", explanation: "Most power stations in South Africa burn coal to boil water." },
  { prompt: "In a coal power station, what turns the turbine?", options: ["Smoke","Steam","Coal dust","Hot ash"], answer: "Steam", explanation: "Steam from the boiling water turns the turbine." },
  { prompt: "What is turned by the turbine in a power station?", options: ["A transformer","A boiler","A generator","A battery"], answer: "A generator", explanation: "The turbine turns a generator, which produces the electricity." },
  { prompt: "Which is the correct order of events in a coal power station?", options: ["Run generator, turn turbine, boil water, burn coal","Boil water, burn coal, run generator, turn turbine","Turn turbine, burn coal, run generator, boil water","Burn coal, boil water, turn turbine, run generator"], answer: "Burn coal, boil water, turn turbine, run generator", explanation: "Coal is burnt to boil water. The steam turns the turbine, which runs the generator." },
  { prompt: "Which of these can drive a turbine as an alternative to coal?", options: ["Falling water","Petrol in a car engine","A torch battery","A candle flame"], answer: "Falling water", explanation: "Falling water (hydroelectric power), wind, sun-heated steam, nuclear fission and waves can drive turbines." },
  { prompt: "How does a wind power station make electricity?", options: ["Wind boils water to make steam","Moving air turns the blades of a turbine","Wind heats a nuclear reactor","Wind pushes electrons straight through a wire"], answer: "Moving air turns the blades of a turbine", explanation: "The moving air turns the turbine blades, and the turbine turns a generator." },
  { prompt: "Which South African power station uses nuclear fission?", options: ["Medupi","Kusile","Koeberg","Majuba"], answer: "Koeberg", explanation: "Koeberg in the Western Cape is the nuclear power station. Medupi, Kusile and Majuba burn coal." },
  { prompt: "What does a nuclear power station use the heat of fission for?", options: ["To turn the generator directly","To burn coal faster","To cool the steam","To boil water to make steam"], answer: "To boil water to make steam", explanation: "The heat from fission boils water. The steam then turns the turbine." },
  { prompt: "Why must nuclear waste be disposed of carefully?", options: ["It stays radioactive for many years","It catches fire when it meets air","It slowly turns into coal","It is too heavy to move far"], answer: "It stays radioactive for many years", explanation: "Spent nuclear fuel stays radioactive for many hundreds of years, so it is dangerous to life." },
  { prompt: "What is the national electricity grid?", options: ["One very large power station","A network joining stations to users","A special kind of transformer","A big store of electricity"], answer: "A network joining stations to users", explanation: "The grid is a network of power stations, power lines and transformers: a system." },
  { prompt: "What do transformers do in the national grid?", options: ["They make more electricity","They step the voltage up for houses","They step the voltage down for local users","They store energy for later"], answer: "They step the voltage down for local users", explanation: "Power lines carry electricity at high voltage. Transformers step it down for distributors and consumers." },
  { prompt: "About 15% of energy is wasted in the grid. If 200 MWh are sent into the grid, how much is delivered?", options: ["185 MWh","30 MWh","215 MWh","170 MWh"], answer: "170 MWh", explanation: "15% of 200 = 30 MWh is lost. 200 − 30 = 170 MWh is delivered." },
  { prompt: "Why is energy lost in the national grid?", options: ["The power lines and transformers heat up","Power stations switch off at night","The wires get longer each year","The electricity leaks into the air"], answer: "The power lines and transformers heat up", explanation: "Energy is wasted as heat in the transmission lines and transformers." },
  { prompt: "What can happen if the grid is overloaded?", options: ["More power stations start by themselves","The power supply can be disrupted","The grid makes extra energy","The wires become thicker"], answer: "The power supply can be disrupted", explanation: "Power surges and grid overload can disrupt the power supply." },
];

const GenerationGrid = () => (
  <CapsSubjectTopic
    title="Electricity Generation and the National Grid"
    subtitle="Power stations, alternative sources, Koeberg and how energy reaches us"
    learnSteps={learnSteps}
    task="gr9-electricity-generation-grid-t3"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default GenerationGrid;
