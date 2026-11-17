import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Chain, SourceColumns, WattBars } from '../../../../../components/diagrams/g7ns/G7Ns';
import { BULBS, GRID_CHAIN, SOURCES, timesMore, wattsSaved } from '../../../../../components/diagrams/g7ns/g7nsMatterEnergy';

// Every number below comes from g7nsMatterEnergy.ts (tested in g7nsMatterEnergy.test.ts and g7NsLessons2.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const [oldBulb, newBulb] = BULBS;
const list = (renewable: boolean) => SOURCES.filter((s) => s.renewable === renewable).map((s) => s.name).join(', ');

export const DYNAMO_CHAIN = [
  { title: 'Moving parts', note: 'pedal or wind the handle' },
  { title: 'Dynamo', note: 'a small generator' },
  { title: 'Electricity', note: 'movement becomes electricity' },
  { title: 'Light or sound', note: 'the lamp or radio uses it' },
] as const;

export const learnSteps: LearnStep[] = [
  {
    title: 'From the power station to your home',
    content: slide(
      <>
        <Rule>The national electricity grid is a system. Energy from a source is transferred to a turbine, the turbine to a generator, and the generator puts electricity into the wires that carry it to homes.</Rule>
        <Chain steps={GRID_CHAIN} aria="The national electricity grid as five steps from the top to the bottom: the energy source, the turbine, the generator, the supply wires, and the home with its appliances and lights." />
        <Worked
          title="Trace the energy in a coal power station"
          steps={[
            'Burning coal releases heat, which is energy stored in the coal.',
            'The energy is transferred to a turbine, which spins.',
            'The turbine drives a generator, which changes mechanical movement into electricity.',
            'The wires of the grid carry the electricity to the lights and appliances.',
          ]}
        />
        <Mistake>Saying that the generator makes energy from nothing. It only changes the energy of movement into electricity.</Mistake>
      </>,
    ),
  },
  {
    title: 'Sources of energy for the grid',
    content: slide(
      <>
        <Rule>The grid uses many sources of energy. Non-renewable sources get used up. Renewable sources are replaced or do not run out.</Rule>
        <SourceColumns sources={SOURCES} />
        <Worked
          title="Sort the sources"
          steps={[
            `Non-renewable: ${list(false)}.`,
            `Renewable: ${list(true)}.`,
            'South Africa makes most of its electricity from coal, a non-renewable source.',
          ]}
        />
        <Mistake>Thinking that nuclear fuel is renewable because it makes little smoke. It is a non-renewable fuel that can be used up.</Mistake>
      </>,
    ),
  },
  {
    title: 'Dynamos are small generators',
    content: slide(
      <>
        <Rule>A dynamo is a small generator. It also changes mechanical movement into electricity.</Rule>
        <Chain steps={DYNAMO_CHAIN} color="#fbbf24" aria="Four steps in a dynamo: moving parts, the dynamo, electricity, then the light or sound." />
        <Worked
          title="Where do we use dynamos?"
          steps={[
            'On some bicycle lights, the wheel turns the dynamo and the lamp glows.',
            'In mine helmets and wind-up torches, you turn a handle to light the lamp.',
            'In wind-up radios, winding the handle gives the radio its electricity.',
          ]}
        />
        <Mistake>Thinking that a wind-up torch needs a battery. The dynamo makes the electricity from the movement of your hand.</Mistake>
      </>,
    ),
  },
  {
    title: 'Saving electricity at home',
    content: slide(
      <>
        <Rule>South Africa has a limited supply of electrical energy, so we should use energy wisely at home.</Rule>
        <WattBars items={BULBS} />
        <Worked
          title="Choose a better bulb"
          steps={[
            `The ${oldBulb.name} uses ${oldBulb.watts} W. The ${newBulb.name} uses ${newBulb.watts} W.`,
            `The difference is ${oldBulb.watts} − ${newBulb.watts} = ${wattsSaved(oldBulb, newBulb)} W less.`,
            `${oldBulb.watts} ÷ ${newBulb.watts} = ${timesMore(oldBulb, newBulb)}, so the old bulb uses ${timesMore(oldBulb, newBulb)} times as much power.`,
            'Other ways to save: switch off lights and appliances, use efficient appliances, match the pot to the stove plate, use a hotbox for cooking, and stop cold draughts.',
          ]}
        />
        <Mistake>Leaving lights on in an empty room because the bulb is small. Switching off is the quickest way to save.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Put these in order: generator, turbine, home, energy source, supply wires.</>,
          <>Name two renewable sources of energy.</>,
          <>What does a dynamo change into electricity?</>,
          <>A {oldBulb.watts} W bulb is swapped for a {newBulb.watts} W bulb. How many watts are saved?</>,
        ]}
        answers={[
          <>Energy source, turbine, generator, supply wires, home.</>,
          <>Falling water and wind.</>,
          <>Mechanical movement.</>,
          <>{oldBulb.watts} − {newBulb.watts} = {wattsSaved(oldBulb, newBulb)} W.</>,
        ]}
      />,
    ),
  },
];
