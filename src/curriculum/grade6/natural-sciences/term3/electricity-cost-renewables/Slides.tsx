import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CardList, ValueBars } from '../../../../../components/diagrams/g6nst/G6Nst';
import { APPLIANCES, leastPower, mostPower } from '../../../../../components/diagrams/g6nst/g6nstHelpers';

// Every number below comes from g6nstHelpers.ts (tested in g6nstHelpers.test.ts and g6NstDissolvingFuels.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const w = (n: number) => `${String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} W`;
const kettle = APPLIANCES.find((a) => a.name === 'kettle')!;
const radio = APPLIANCES.find((a) => a.name === 'radio')!;

export const learnSteps: LearnStep[] = [
  {
    title: 'Why electricity costs money',
    content: slide(
      <>
        <Rule>Electricity is costly because it needs a lot of equipment and work. The more electricity we use, the more we pay and the more coal is used up.</Rule>
        <CardList
          cards={[
            { title: 'Making it', line1: 'coal mines, transport', line2: 'and power stations' },
            { title: 'Carrying it', line1: 'pylons, substations', line2: 'and wiring' },
            { title: 'Using it', line1: 'the more we use,', line2: 'the more we pay' },
          ]}
          aria="Why electricity costs money. Making it needs coal mines, transport and power stations. Carrying it needs pylons, substations and wiring. The more we use, the more we pay."
        />
        <Worked
          title="Follow the money"
          steps={[
            'Coal has to be mined and transported to the power station.',
            'The power station and the pylons that carry the electricity have to be built and looked after.',
            'We pay for all of this on our electricity bill.',
          ]}
        />
        <Mistake>Thinking that electricity is free once it reaches the plug. Someone paid for the mines, power stations and wires.</Mistake>
      </>,
    ),
  },
  {
    title: 'Some appliances use more',
    content: slide(
      <>
        <Rule>The label on an appliance shows how much power it needs, in watts (W). Heating appliances use the most.</Rule>
        <ValueBars items={APPLIANCES.map((a) => ({ label: a.name, value: a.watts }))} title="Power needed (label, in watts)" unit="W" aria="Bar graph of the power needed by five appliances, from the labels. Kettle 2000 watts. Room heater 1500 watts. Television 100 watts. Radio 15 watts. Energy-saving bulb 10 watts. The two heating appliances need the most." />
        <Worked
          title="Compare the labels"
          steps={[
            `The ${kettle.name} needs ${w(kettle.watts)} and the ${radio.name} only ${w(radio.watts)}.`,
            `The ${mostPower(APPLIANCES).name} needs the most power and the ${leastPower(APPLIANCES).name} the least.`,
            'The two heating appliances, the kettle and the room heater, are the two that use the most.',
          ]}
        />
        <Mistake>Thinking that a bigger appliance always uses more. A radio and a kettle are about the same size to carry, but the kettle needs far more power.</Mistake>
      </>,
    ),
  },
  {
    title: 'Saving electricity and staying safe',
    content: slide(
      <>
        <Rule>We can save energy by using energy-saving light bulbs and solar water heaters. Illegal electrical connections are dangerous because they are often unsafe.</Rule>
        <CardList
          cards={[
            { title: 'Energy-saving bulbs', line1: 'give the same light', line2: 'with less power' },
            { title: 'Solar water heaters', line1: 'the Sun heats the water', line2: 'instead of electricity' },
            { title: 'Illegal connections', line1: 'unsafe: never touch,', line2: 'tell an adult' },
          ]}
          aria="Saving electricity and staying safe. Energy-saving bulbs give the same light with less power. Solar water heaters use the Sun to heat water instead of electricity. Illegal connections are unsafe: never touch them and tell an adult."
        />
        <Worked
          title="Ways to save"
          steps={[
            'Switch off lights and appliances when you are not using them.',
            'Use energy-saving bulbs.',
            'A solar water heater heats the water with sunlight, so a kettle or geyser needs less electricity.',
          ]}
        />
        <Mistake>Thinking that an illegal connection is a harmless way to save money. The wires are often unsafe and very dangerous.</Mistake>
      </>,
    ),
  },
  {
    title: 'Renewable ways to make electricity',
    content: slide(
      <>
        <Rule>People are looking for renewable ways to make electricity. Wind generators, solar panels and hydro-electric power use sources that do not run out.</Rule>
        <CardList
          cards={[
            { title: 'Wind generators', line1: 'moving air turns', line2: 'the blades and a generator' },
            { title: 'Solar panels', line1: 'sunlight is changed', line2: 'directly to electricity' },
            { title: 'Hydro-electric', line1: 'falling water turns', line2: 'a turbine and generator' },
          ]}
          aria="Three renewable ways to make electricity. Wind generators, where moving air turns the blades and a generator. Solar panels, where sunlight is changed directly into electricity. Hydro-electric power, where falling water turns a turbine and a generator."
        />
        <Worked
          title="Why are they renewable?"
          steps={[
            'The wind keeps blowing, so a wind generator will not use it up.',
            'The Sun keeps shining on a solar panel.',
            'Rivers keep flowing, so falling water keeps turning the turbine.',
            'A solar panel makes electricity. A solar water heater only heats water: they are different.',
          ]}
        />
        <Mistake>Mixing up a solar panel and a solar water heater. The panel makes electricity, the heater makes hot water.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give two reasons why electricity is costly.</>,
          <>Which uses more power, a kettle or a radio?</>,
          <>Why are illegal electrical connections dangerous?</>,
          <>Name two renewable ways to make electricity.</>,
        ]}
        answers={[
          <>It needs coal mines, transport, power stations, pylons, substations and wiring.</>,
          <>The kettle, because heating appliances use the most.</>,
          <>They are often unsafe.</>,
          <>Any two of wind, solar panels and hydro-electric power.</>,
        ]}
      />,
    ),
  },
];
