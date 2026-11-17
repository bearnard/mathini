import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CardList, StepList } from '../../../../../components/diagrams/g6nst/G6Nst';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const COAL_FORMING = [
  { title: 'Plants grow', note: 'they use energy from the Sun' },
  { title: 'Plants die', note: 'buried under mud and sand' },
  { title: 'Millions of years', note: 'heat and pressure act on them' },
  { title: 'Coal', note: 'the fossil fuel is formed' },
] as const;
export const POWER_STATION = [
  { title: 'Coal burns', note: 'it gives out heat' },
  { title: 'Water boils', note: 'the heat makes steam' },
  { title: 'Turbine turns', note: 'the steam spins it' },
  { title: 'Generator', note: 'the turbine turns it' },
  { title: 'Electricity', note: 'goes into the wires' },
] as const;
export const ENERGY_TRAIL = [
  { title: 'Television', note: 'uses the electricity' },
  { title: 'Wires', note: 'carry it from the power station' },
  { title: 'Generator', note: 'makes the electricity' },
  { title: 'Turbine and steam', note: 'turn the generator' },
  { title: 'Coal', note: 'its heat boils the water' },
  { title: 'Plants', note: 'that became coal' },
  { title: 'The Sun', note: 'the original source' },
] as const;

export const learnSteps: LearnStep[] = [
  {
    title: 'What fossil fuels are',
    content: slide(
      <>
        <Rule>Fossil fuels were formed in the Earth&apos;s crust millions of years ago from dead plants and animals. Coal, oil and natural gas are fossil fuels.</Rule>
        <CardList
          cards={[
            { title: 'Coal', line1: 'a black rock that', line2: 'burns: from old plants' },
            { title: 'Oil', line1: 'a thick liquid that is', line2: 'made into petrol, diesel' },
            { title: 'Natural gas', line1: 'a gas that burns', line2: 'for cooking and heat' },
          ]}
          aria="Three fossil fuels. Coal, a black rock that burns, formed from old plants. Oil, a thick liquid that is made into petrol and diesel. Natural gas, a gas that burns for cooking and heat."
        />
        <Worked
          title="Why are they called fossil fuels?"
          steps={[
            'A fossil is something that was alive a very long time ago.',
            'These fuels were made from the remains of plants and animals.',
            'We burn them as fuels to get heat and energy.',
          ]}
        />
        <Mistake>Thinking that fossil fuels are made from dinosaur bones. They were formed from plants and tiny animals.</Mistake>
      </>,
    ),
  },
  {
    title: 'How coal was formed',
    content: slide(
      <>
        <Rule>Coal was formed from fossilised plants. The plants got their energy from the Sun, and that energy is stored in the coal.</Rule>
        <StepList steps={COAL_FORMING} aria="Four steps in the formation of coal. Plants grow using energy from the Sun. The plants die and are buried under mud and sand. Over millions of years heat and pressure act on them. They become coal." />
        <Worked
          title="Where does the energy in coal come from?"
          steps={[
            'Plants use sunlight to make their food.',
            'The plants died and were buried, with their stored energy.',
            'Millions of years later the coal still holds that energy, and burning it gives out heat.',
          ]}
        />
        <Mistake>Thinking that coal is made in a few years. It takes millions of years to form.</Mistake>
      </>,
    ),
  },
  {
    title: 'A coal power station',
    content: slide(
      <>
        <Rule>In South Africa most coal is used as a fuel in power stations. The coal is used to boil water. The steam turns a turbine, and the turbine turns a generator that produces electricity.</Rule>
        <StepList steps={POWER_STATION} aria="Five steps in a coal power station. Coal burns and gives out heat. The heat boils water into steam. The steam turns a turbine. The turbine turns a generator. The generator produces electricity that goes into the wires." />
        <Worked
          title="Follow the energy"
          steps={[
            'The heat from burning coal boils water.',
            'The steam turns the turbine.',
            'The turbine turns the generator, which makes the electricity.',
          ]}
        />
        <Mistake>Saying that the steam makes the electricity directly. The steam turns the turbine, and the generator makes the electricity.</Mistake>
      </>,
    ),
  },
  {
    title: 'From the television back to the Sun',
    content: slide(
      <>
        <Rule>We can trace the electrical energy in an appliance back to its original source. For a television powered by a coal power station, the original source is the Sun.</Rule>
        <StepList steps={ENERGY_TRAIL} color="#fbbf24" aria="Tracing the energy from a television back to the Sun. The television uses the electricity. Wires carry it from the power station. A generator makes it. A turbine and steam turn the generator. Coal burns to boil the water. The coal came from plants. The plants got their energy from the Sun." />
        <Worked
          title="Trace it back"
          steps={[
            'Television: it uses the electricity.',
            'Power station: coal heat, steam, turbine and generator.',
            'Coal: from old plants, which stored the Sun\'s energy.',
          ]}
        />
        <Mistake>Stopping at the power station. The energy started with the Sun long before, in the plants that became coal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fossil fuels run out',
    content: slide(
      <>
        <Rule>Fossil fuels are non-renewable resources. They take millions of years to form, so once we use them up they are gone.</Rule>
        <CardList
          cards={[
            { title: 'Non-renewable', line1: 'coal, oil and gas:', line2: 'used up, not replaced' },
            { title: 'Why it matters', line1: 'the more electricity', line2: 'we use, the more coal' },
            { title: 'So we should', line1: 'save energy and look', line2: 'for renewable ways' },
          ]}
          aria="Fossil fuels are non-renewable. Coal, oil and gas are used up and not replaced. The more electricity we use, the more coal is burnt. So we should save energy and look for renewable ways to make electricity."
        />
        <Worked
          title="Renewable or non-renewable?"
          steps={[
            'Coal: non-renewable, because it takes millions of years to form.',
            'Wind: renewable, because the wind keeps blowing.',
            'Oil and natural gas: non-renewable, like coal.',
          ]}
        />
        <Mistake>Thinking that there will always be enough coal. We use it much faster than it forms.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two fossil fuels.</>,
          <>What did the plants that became coal get their energy from?</>,
          <>What turns the generator in a coal power station?</>,
          <>Why are fossil fuels called non-renewable?</>,
        ]}
        answers={[
          <>Any two of coal, oil and natural gas.</>,
          <>The Sun.</>,
          <>The turbine, which the steam turns.</>,
          <>They take millions of years to form, so they get used up.</>,
        ]}
      />,
    ),
  },
];
