import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { GridDiagram } from '../../../../../components/diagrams/tech8/Tech8d';
import { CURRENT_TYPE, GRID_STAGES, IMPACT_ISSUES, POWER_STATIONS, transformerType } from '../../../../../components/diagrams/tech8/tech8dHelpers';

// Every statement comes from tech8dHelpers.ts (tested in tech8dHelpers.test.ts and g8TechT4.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Thermal power stations',
    content: slide(
      <>
        <Rule>In a thermal power station a source of heat boils water to make steam, and the steam turns a turbine that drives a generator. The sources of heat include coal, gas, nuclear energy and the sun. Advantages: they supply large amounts of electricity at any time of day. Disadvantages: burning coal or gas pollutes the air and nuclear power makes dangerous waste.</Rule>
        <FactCards
          cards={[
            { title: 'Heat sources', line1: POWER_STATIONS[0].sources.join(', '), line2: 'heat the water' },
            { title: 'Steam', line1: 'steam turns a turbine that', line2: 'drives a generator' },
            { title: 'Trade-off', line1: 'large, reliable supply, but', line2: 'pollution or dangerous waste' },
          ]}
          aria="Thermal power stations. Heat sources: coal, gas, nuclear and the sun heat the water. Steam turns a turbine that drives a generator. The trade-off is a large reliable supply, but pollution or dangerous waste."
        />
        <Worked
          title="Trace the energy"
          steps={[
            'Coal burns and releases heat energy.',
            'The heat boils water, and the steam turns the blades of a turbine.',
            'The turbine turns a generator that makes electrical energy.',
          ]}
        />
        <Mistake>Thinking that the steam comes out of the generator. The steam turns the turbine, which turns the generator.</Mistake>
      </>,
    ),
  },
  {
    title: 'Hydroelectric and wind power',
    content: slide(
      <>
        <Rule>In a hydroelectric power station falling water turns a turbine. A pumped-storage scheme pumps water back uphill when there is spare electricity and releases it when more is needed. A wind-driven turbine uses moving air to turn its blades. Both use renewable energy, but a hydroelectric station needs a dam and a wind turbine works only when the wind blows.</Rule>
        <FactCards
          cards={[
            { title: 'Hydroelectric', line1: 'falling water turns a turbine;', line2: 'pumped storage reuses water' },
            { title: 'Wind', line1: 'moving air turns the blades', line2: 'of the turbine' },
            { title: 'Both', line1: 'renewable, no fuel burned; need', line2: 'a suitable place' },
          ]}
          aria="Hydroelectric and wind power. Hydroelectric: falling water turns a turbine, and pumped storage reuses the water. Wind: moving air turns the blades of the turbine. Both are renewable, burn no fuel, and need a suitable place."
        />
        <Worked
          title="Compare the three"
          steps={[
            `Thermal: ${POWER_STATIONS[0].how}.`,
            `Hydroelectric: ${POWER_STATIONS[1].how}.`,
            `Wind: ${POWER_STATIONS[2].how}.`,
          ]}
        />
        <Mistake>Saying that wind power works all the time. A wind turbine needs wind, so another source is needed when it is calm.</Mistake>
      </>,
    ),
  },
  {
    title: 'AC, transformers and the national grid',
    content: slide(
      <>
        <Rule>The national grid distributes electricity across the country using {CURRENT_TYPE}. A step-up transformer raises the voltage for transmission over long distances, and step-down transformers lower it to a safe voltage for use in homes and industry. The stages are: {GRID_STAGES.join(', ')}.</Rule>
        <GridDiagram />
        <Worked
          title="Which transformer?"
          steps={[
            `A transformer whose secondary coil has more turns than its primary coil is a ${transformerType(100, 1000)} transformer: it raises the voltage.`,
            `One whose secondary coil has fewer turns than its primary coil is a ${transformerType(1000, 100)} transformer: it lowers the voltage.`,
            'After the last step-down transformer the voltage is safe for use in homes.',
          ]}
        />
        <Mistake>Using a transformer on a cell or battery. A transformer works only with alternating current.</Mistake>
      </>,
    ),
  },
  {
    title: 'Energy, safety and fair sharing',
    content: slide(
      <>
        <Rule>Technology can be biased when some people have power and others do not. Energy for heating, lighting and cooking is a problem in rural and informal settlements: {IMPACT_ISSUES.rural}. Illegal connections are an ethical and safety issue: {IMPACT_ISSUES.illegal}. We discuss equitable sharing of resources, because {IMPACT_ISSUES.equitable}.</Rule>
        <FactCards
          cards={[
            { title: 'Rural and informal homes', line1: 'wood, paraffin or candles for', line2: 'heating, light and cooking' },
            { title: 'Illegal connections', line1: 'unsafe, unfair and they', line2: 'overload the supply' },
            { title: 'Equitable sharing', line1: 'industry needs power for jobs;', line2: 'schools for light and computers' },
          ]}
          aria="Energy, safety and fair sharing. Rural and informal homes often use wood, paraffin or candles for heating, light and cooking. Illegal connections are unsafe, unfair and they overload the supply. Equitable sharing: industry needs power for jobs, and schools need power for light and computers."
        />
        <Worked
          title="Write a balanced report"
          steps={[
            'State the problem: many households have no safe, reliable electricity.',
            'Give both sides: illegal connections give light, but they are dangerous and unfair.',
            'Suggest a fair solution, such as a safe, legal, affordable supply, and give reasons.',
          ]}
        />
        <Mistake>Writing only one side of the issue. A balanced report gives advantages and disadvantages.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which energy carrier makes the turbine of a thermal station spin?</>,
          <>Which transformer raises the voltage for long-distance transmission?</>,
          <>Why is alternating current used on the national grid?</>,
          <>Give one problem with illegal electricity connections.</>,
        ]}
        answers={[
          <>Steam.</>,
          <>A step-up transformer.</>,
          <>Its voltage can be changed by a transformer.</>,
          <>They are unsafe (or unfair, or overload the supply).</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "In a thermal power station, what spins the turbine?",
    options: ["Falling water", "Wind", "Steam", "A battery"],
    answer: "Steam",
    explanation: "Heat boils water to make steam, which turns the turbine.",
  },
  {
    prompt: "Which of these can be a source of heat in a thermal power station?",
    options: ["Coal", "Falling water", "Wind", "A fruit battery"],
    answer: "Coal",
    explanation: "Coal, gas, nuclear energy and the sun can heat the water.",
  },
  {
    prompt: "What is a disadvantage of a coal-fired thermal power station?",
    options: ["It uses falling water", "It needs wind", "It works only in sunlight", "It pollutes the air"],
    answer: "It pollutes the air",
    explanation: "Burning coal makes air pollution.",
  },
  {
    prompt: "In a hydroelectric station, what makes the turbine spin?",
    options: ["Steam", "Falling water", "Wind", "Sunlight"],
    answer: "Falling water",
    explanation: "Falling water turns the turbine.",
  },
  {
    prompt: "What does a pumped-storage scheme do?",
    options: ["Burns coal at night", "Pumps water back uphill", "Stores wind in tanks", "Cools the generator"],
    answer: "Pumps water back uphill",
    explanation: "Spare electricity pumps water uphill; it is released when more power is needed.",
  },
  {
    prompt: "What turns the blades of a wind turbine?",
    options: ["Steam", "Falling water", "A generator on its own", "Moving air"],
    answer: "Moving air",
    explanation: "Wind turns the blades.",
  },
  {
    prompt: "What is a disadvantage of wind power?",
    options: ["It needs wind to blow", "It needs coal to run", "It pollutes the air", "It needs steam to work"],
    answer: "It needs wind to blow",
    explanation: "A wind turbine gives little power when it is calm.",
  },
  {
    prompt: "Which type of current is used on the national grid?",
    options: ["Direct current from cells", "Only battery current", "Alternating current", "Static electricity"],
    answer: "Alternating current",
    explanation: "Alternating current can be changed in voltage by transformers.",
  },
  {
    prompt: "What does a step-up transformer do?",
    options: ["It lowers the voltage", "It changes AC to DC", "It stores electricity", "It raises the voltage"],
    answer: "It raises the voltage",
    explanation: "A step-up transformer raises the voltage for transmission.",
  },
  {
    prompt: "Why is the voltage lowered by a step-down transformer before it reaches homes?",
    options: ["To make the current alternating", "To make it safe to use", "To add more turns", "To store energy"],
    answer: "To make it safe to use",
    explanation: "A step-down transformer gives a safe voltage for homes.",
  },
  {
    prompt: "In the national grid, which part comes immediately after the step-up transformer?",
    options: ["Transmission lines", "Homes and industry", "The power station", "The step-down transformer"],
    answer: "Transmission lines",
    explanation: "The stages are power station, step-up transformer, transmission lines, step-down transformer, homes and industry.",
  },
  {
    prompt: "What is a problem with illegal electricity connections?",
    options: ["They make the supply cheaper for everyone", "They make the grid safer", "They are unsafe and unfair", "They give free power with no risk"],
    answer: "They are unsafe and unfair",
    explanation: "Illegal connections are dangerous and overload the supply.",
  },
  {
    prompt: "Many rural and informal households use paraffin or wood. For which purposes?",
    options: ["Only for computers", "Only for radios", "Heating, light and cooking", "Only for power stations"],
    answer: "Heating, light and cooking",
    explanation: "These households often lack a safe electricity supply.",
  },
  {
    prompt: "Why does industry need reliable power?",
    options: ["To create jobs", "To stop using machines", "To avoid paying wages", "To reduce lighting in schools"],
    answer: "To create jobs",
    explanation: "Reliable power helps industry create jobs; schools need it for light and computers.",
  },
];

const ElectricityGenerationGrid = () => (
  <CapsSubjectTopic
    title="Generating Electricity and the National Grid"
    subtitle="Thermal, hydroelectric and wind power, AC, transformers, the grid and fair sharing"
    learnSteps={learnSteps}
    task="gr8-electricity-generation-grid-t4"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default ElectricityGenerationGrid;
