import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CardList, SandFilter, StepList } from '../../../../../components/diagrams/g6nst/G6Nst';
import { FILTER_LAYERS, layerHeight } from '../../../../../components/diagrams/g6nst/g6nstHelpers';

// Every number below comes from g6nstHelpers.ts (tested in g6nstHelpers.test.ts and g6NstWater.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const COLUMN_CM = 20;
const heights = FILTER_LAYERS.map((l) => layerHeight(COLUMN_CM, l.share));

export const learnSteps: LearnStep[] = [
  {
    title: 'Taking solid bits out of dirty water',
    content: slide(
      <>
        <Rule>A clean supply of water is important for people, plants and animals. Dirty water can be cleaned by sieving, settling, decanting and filtering, which take out the solid bits.</Rule>
        <CardList
          cards={[
            { title: 'Sieving', line1: 'a sieve catches', line2: 'leaves and big bits' },
            { title: 'Settling', line1: 'heavy bits sink to', line2: 'the bottom when still' },
            { title: 'Decanting', line1: 'pour off the clear', line2: 'water on top' },
            { title: 'Filtering', line1: 'sand or filter paper', line2: 'holds back small bits' },
          ]}
          aria="Four ways to take solid bits out of dirty water. Sieving, where a sieve catches leaves and big bits. Settling, where heavy bits sink to the bottom when the water is still. Decanting, where you pour off the clear water on top. Filtering, where sand or filter paper holds back small bits."
        />
        <Worked
          title="Muddy water in a bucket"
          steps={[
            'Sieve out the leaves and sticks.',
            'Leave the bucket still, so the mud settles at the bottom.',
            'Decant: pour the water on top gently into a clean container, without stirring up the mud.',
          ]}
        />
        <Mistake>Thinking that a filter can take out everything. A filter holds back solid bits, but it cannot remove germs or dissolved pollutants.</Mistake>
      </>,
    ),
  },
  {
    title: 'Killing germs',
    content: slide(
      <>
        <Rule>Boiling and adding chemicals kill germs in water. Water must be cleaned before and after we use it, so it is safe to drink and safe to return to rivers.</Rule>
        <CardList
          cards={[
            { title: 'Boiling', line1: 'heat kills the germs;', line2: 'let it cool, covered' },
            { title: 'Chemicals', line1: 'chlorine or tablets', line2: 'added to kill germs' },
            { title: 'Municipal water', line1: 'cleaned before it is', line2: 'piped, and after use' },
          ]}
          aria="Ways of killing germs. Boiling, where the heat kills the germs and the water is left to cool with a lid on. Adding chemicals such as chlorine or purification tablets. Municipal water, which the town cleans before it is piped to homes and again after we have used it."
        />
        <Worked
          title="Boiling water to make it safe, with an adult"
          steps={[
            'An adult heats the water until it bubbles strongly and keeps it boiling for about a minute.',
            'The water is left to cool with the lid on, so no new germs get in.',
            'It is kept in a clean, covered container.',
          ]}
        />
        <Mistake>Using a sieve or a filter and then drinking the water. Germs are too small to be caught, so the water is still not safe to drink.</Mistake>
      </>,
    ),
  },
  {
    title: 'A sand filter',
    content: slide(
      <>
        <Rule>A sand filter is a column of layers with the finest material on top. Dirty water is poured in at the top and cleaner water comes out at the bottom.</Rule>
        <SandFilter columnCm={COLUMN_CM} />
        <Worked
          title={`A filter ${COLUMN_CM} cm tall`}
          steps={FILTER_LAYERS.map((l, i) => `${l.name}: ${l.share}% of ${COLUMN_CM} cm = ${heights[i]} cm.`).concat([`Check: ${heights.join(' + ')} = ${heights.reduce((a, b) => a + b, 0)} cm.`])}
        />
        <Mistake>Putting the gravel on top. The fine sand must be on top to catch the small bits, with coarser layers below holding it up.</Mistake>
      </>,
    ),
  },
  {
    title: 'Design a system to clean dirty water',
    content: slide(
      <>
        <Rule>To clean dirty water we use several steps in the right order, from the big bits to the tiny germs.</Rule>
        <StepList
          steps={[
            { title: 'Sieve', note: 'take out leaves and sticks' },
            { title: 'Settle', note: 'leave the mud to sink' },
            { title: 'Decant', note: 'pour off the water on top' },
            { title: 'Filter', note: 'through the sand filter' },
            { title: 'Boil', note: 'an adult kills the germs' },
          ]}
          aria="Five steps to clean dirty water, in order. Sieve to take out leaves and sticks. Settle to let the mud sink. Decant to pour off the water on top. Filter through a sand filter. Boil, done by an adult, to kill the germs."
        />
        <Worked
          title="Why this order?"
          steps={[
            'Big bits come out first so they do not block the filter.',
            'Settling and decanting take out the heavy mud so the filter does not clog.',
            'Boiling is last, because it kills germs but cannot take out solid bits.',
            'Water cleaned in a class experiment must not be drunk.',
          ]}
        />
        <Mistake>Boiling the water first and filtering after. The germs could get in again, so the last step must be the one that kills them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which step pours off the clear water from the top without stirring up the mud?</>,
          <>Which two ways of cleaning water kill germs?</>,
          <>In a sand filter, which layer is on top?</>,
          <>A filter is 20 cm tall and gravel is 30% of it. How many centimetres of gravel is that?</>,
        ]}
        answers={[
          <>Decanting.</>,
          <>Boiling and adding chemicals.</>,
          <>Fine sand.</>,
          <>30% of 20 cm = {layerHeight(20, 30)} cm.</>,
        ]}
      />,
    ),
  },
];
