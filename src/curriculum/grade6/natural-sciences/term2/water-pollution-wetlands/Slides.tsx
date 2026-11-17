import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CardList, TwoColumns, WetlandBars } from '../../../../../components/diagrams/g6nst/G6Nst';
import { RAIN_RUSH, WETLAND_K, peak, reservoir, sumOf } from '../../../../../components/diagrams/g6nst/g6nstHelpers';

// Every number below comes from g6nstHelpers.ts (tested in g6nstHelpers.test.ts and g6NstWater.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const dc = (n: number) => String(n).replace('.', ',');
export const WET = reservoir(RAIN_RUSH, WETLAND_K);

export const learnSteps: LearnStep[] = [
  {
    title: 'What pollutes water',
    content: slide(
      <>
        <Rule>Water is polluted when harmful things get into it. Some pollutants do not dissolve and some do dissolve in water.</Rule>
        <TwoColumns
          left={{ title: 'Do not dissolve', items: ['oil', 'plastics', 'tyres', 'tins and glass', 'toilet waste'] }}
          right={{ title: 'Dissolve', items: ['soaps', 'fertilizers', 'insecticides', 'acids', 'other poisons'] }}
          aria="Two lists of water pollutants. Those that do not dissolve are oil, plastics, tyres, tins and glass, and toilet waste. Those that dissolve in water are soaps, fertilizers, insecticides, acids and other poisons."
        />
        <Worked
          title="Sort the pollutants"
          steps={[
            'A plastic bottle floats in a river and does not dissolve: an insoluble pollutant.',
            'Soap in washing water dissolves and cannot be seen: a soluble pollutant.',
            'Insoluble pollutants can often be filtered out, but soluble ones pass through a filter with the water.',
          ]}
        />
        <Mistake>Thinking that water that looks clear is clean. A dissolved pollutant, such as an insecticide, cannot be seen.</Mistake>
      </>,
    ),
  },
  {
    title: 'Germs and water-borne illness',
    content: slide(
      <>
        <Rule>Toilet waste in water can carry living germs. Drinking water with these germs in it can cause water-borne illnesses such as diarrhoea.</Rule>
        <CardList
          cards={[
            { title: 'Source', line1: 'toilet waste gets', line2: 'into a river or dam' },
            { title: 'Germs', line1: 'living germs spread', line2: 'through the water' },
            { title: 'Illness', line1: 'people who drink it', line2: 'can get diarrhoea' },
          ]}
          aria="How germs make people ill. Toilet waste gets into a river or dam. Living germs spread through the water. People who drink the water can get a water-borne illness such as diarrhoea."
        />
        <Worked
          title="Keeping safe"
          steps={[
            'Do not drink water from a river, dam or puddle.',
            'Use clean tap water, or water that an adult has boiled or treated.',
            'Wash your hands with clean water and soap after you use the toilet.',
          ]}
        />
        <Mistake>Playing in and then drinking from a stream because the water is cold. Cold water can still carry germs.</Mistake>
      </>,
    ),
  },
  {
    title: 'Wetlands clean and store water',
    content: slide(
      <>
        <Rule>A wetland is a natural area that is wet for a long time, such as a marsh or a vlei. Wetlands remove soluble and insoluble substances from water and act like sponges that slow down the flow of water.</Rule>
        <WetlandBars inflow={RAIN_RUSH} outflow={WET.outflow} />
        <Worked
          title="How the wetland acts like a sponge"
          steps={[
            `After a heavy rain the water rushing in peaks at ${peak(RAIN_RUSH)} units.`,
            `The wetland soaks it up. The water that leaves peaks at only ${dc(peak(WET.outflow))} units, and it keeps flowing for longer.`,
            `No water is lost. All ${sumOf(RAIN_RUSH)} units that came in are accounted for: some has already left, and the rest is still stored in the wetland.`,
          ]}
        />
        <Mistake>Thinking that a wetland is a wasted wet place. It cleans the water, controls floods and is a home to many plants and animals.</Mistake>
      </>,
    ),
  },
  {
    title: 'Why wetlands matter',
    content: slide(
      <>
        <Rule>Wetlands are important for the water we use and for the living things that depend on them. If a wetland is lost, the water gets dirtier and plants and animals lose their homes.</Rule>
        <CardList
          cards={[
            { title: 'Water quality', line1: 'plants and soil trap', line2: 'dirt and poisons' },
            { title: 'Water flow', line1: 'the sponge slows floods', line2: 'and releases water later' },
            { title: 'Biodiversity', line1: 'frogs, birds and fish', line2: 'live and breed here' },
          ]}
          aria="Why wetlands are important. For water quality, plants and soil trap dirt and poisons. For water flow, the sponge slows floods and releases water later. For biodiversity, frogs, birds and fish live and breed there."
        />
        <Worked
          title="What if a wetland is drained for a building?"
          steps={[
            'The water is no longer filtered, so the river below gets dirtier.',
            'Heavy rain rushes straight down, so floods are worse.',
            'The animals and plants that lived there lose their habitat.',
          ]}
        />
        <Mistake>Believing that a wetland is only good for the animals. It also helps people, because it cleans and stores water.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name one pollutant that dissolves in water and one that does not.</>,
          <>What can happen to a person who drinks water with germs from toilet waste?</>,
          <>How do wetlands act like sponges?</>,
          <>Give one thing that is lost if a wetland is drained.</>,
        ]}
        answers={[
          <>Dissolves: soap, fertilizer or insecticide. Does not dissolve: oil, plastic or tyres.</>,
          <>They can get a water-borne illness such as diarrhoea.</>,
          <>They soak up the rushing water and release it slowly.</>,
          <>Water cleaning, flood control, or a home for plants and animals.</>,
        ]}
      />,
    ),
  },
];
