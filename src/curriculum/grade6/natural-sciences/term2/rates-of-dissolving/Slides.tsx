import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CardList, ValueBars } from '../../../../../components/diagrams/g6nst/G6Nst';
import { FAIR_AMOUNTS, GRAIN_TRIALS, STIR_TRIALS, TEMP_TRIALS, fastest, secondsSaved, timesAsLong } from '../../../../../components/diagrams/g6nst/g6nstHelpers';

// Every number below comes from g6nstHelpers.ts (tested in g6nstHelpers.test.ts and g6NstDissolvingFuels.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const bars = (ts: { label: string; seconds: number }[]) => ts.map((t) => ({ label: t.label, value: t.seconds }));
const [cold, , hot] = TEMP_TRIALS;
const [still, stirred] = STIR_TRIALS;
const [coarse, fine] = GRAIN_TRIALS;

export const learnSteps: LearnStep[] = [
  {
    title: 'What changes how fast things dissolve',
    content: slide(
      <>
        <Rule>The rate of dissolving is how quickly a solute dissolves. Three things change it: the temperature of the water, stirring or shaking, and the size of the grains of the solute.</Rule>
        <CardList
          cards={[
            { title: 'Temperature', line1: 'hot water dissolves', line2: 'a solute faster' },
            { title: 'Stirring or shaking', line1: 'moving the mixture', line2: 'speeds dissolving up' },
            { title: 'Grain size', line1: 'fine grains dissolve', line2: 'faster than coarse' },
          ]}
          aria="Three things that make a solute dissolve faster. Hotter water. Stirring or shaking the mixture. Smaller, finer grains of the solute."
        />
        <Worked
          title="Sugar in tea"
          steps={[
            'Sugar dissolves faster in hot tea than in cold tea.',
            'It dissolves faster when you stir.',
            'Fine sugar dissolves faster than a big sugar lump.',
          ]}
        />
        <Mistake>Thinking that stirring makes more sugar dissolve in the end. Stirring only makes it dissolve faster.</Mistake>
      </>,
    ),
  },
  {
    title: 'Temperature',
    content: slide(
      <>
        <Rule>A solute dissolves faster in hot water than in cold water. We measure the time it takes to dissolve, and a shorter time means a faster rate.</Rule>
        <ValueBars items={bars(TEMP_TRIALS)} title="Seconds for the salt to dissolve" unit="s" aria="Bar graph of the time salt takes to dissolve in water. Cold water: 90 seconds. Warm water: 50 seconds. Hot water: 20 seconds. The hotter the water, the shorter the time." />
        <Worked
          title="Read the graph"
          steps={[
            `In ${cold.label} water the salt took ${cold.seconds} s. In ${hot.label} water it took ${hot.seconds} s.`,
            `The hot water saved ${cold.seconds} − ${hot.seconds} = ${secondsSaved(cold, hot)} s.`,
            `The ${fastest(TEMP_TRIALS).label} water had the shortest bar, so it gave the fastest rate.`,
          ]}
        />
        <Mistake>Thinking that the longest bar is the fastest. The longest bar is the longest time, so it is the slowest rate.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stirring and grain size',
    content: slide(
      <>
        <Rule>Stirring or shaking makes a solute dissolve faster, and so do smaller grains. Fine grains have more surface touching the water.</Rule>
        <ValueBars items={bars([...STIR_TRIALS, ...GRAIN_TRIALS])} title="Seconds for the salt to dissolve" unit="s" color="#818cf8" aria="Bar graph of dissolving times. Not stirred: 60 seconds. Stirred: 20 seconds. Coarse salt: 70 seconds. Fine salt: 30 seconds. Stirring and fine grains both gave shorter times." />
        <Worked
          title="Compare the pairs"
          steps={[
            `Stirring: ${still.seconds} s became ${stirred.seconds} s, so it took ${timesAsLong(still, stirred)} times as long without stirring.`,
            `Grain size: ${coarse.seconds} s for coarse salt and ${fine.seconds} s for fine salt, a difference of ${secondsSaved(coarse, fine)} s.`,
            'In each pair only one thing was different.',
          ]}
        />
        <Mistake>Comparing coarse salt in cold water with fine salt in hot water. Two things are different, so we cannot tell which one made the difference.</Mistake>
      </>,
    ),
  },
  {
    title: 'A fair test',
    content: slide(
      <>
        <Rule>In a fair test we change only one thing and keep everything else the same. For dissolving we use the same amount of solute and the same amount of water each time.</Rule>
        <CardList
          cards={[
            { title: 'Change one thing', line1: 'for example only', line2: 'the water temperature' },
            { title: 'Keep the same', line1: `${FAIR_AMOUNTS.soluteMl} ml of salt and`, line2: `${FAIR_AMOUNTS.waterMl} ml of water` },
            { title: 'Measure', line1: 'the time to dissolve,', line2: 'and draw a graph' },
          ]}
          aria={`The steps of a fair test. Change only one thing, for example the water temperature. Keep the same ${FAIR_AMOUNTS.soluteMl} millilitres of salt and ${FAIR_AMOUNTS.waterMl} millilitres of water each time. Measure the time to dissolve and draw a graph.`}
        />
        <Worked
          title="Is it a fair test?"
          steps={[
            `Test 1: ${FAIR_AMOUNTS.soluteMl} ml of fine salt in ${FAIR_AMOUNTS.waterMl} ml of cold water. Test 2: ${FAIR_AMOUNTS.soluteMl} ml of fine salt in ${FAIR_AMOUNTS.waterMl} ml of hot water.`,
            'Only the temperature changed, so the test is fair.',
            'If test 2 used 250 ml of water, it would not be fair, because the amount of water changed too.',
          ]}
        />
        <Mistake>Changing the amount of salt as well as the temperature. Then the result could be because of either one.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the three things that change how fast a solute dissolves.</>,
          <>Salt takes 90 s in cold water and 20 s in hot water. How many seconds faster is the hot water?</>,
          <>In a fair test, how many things do you change?</>,
          <>Which bar is the fastest rate on a graph of dissolving times?</>,
        ]}
        answers={[
          <>Temperature, stirring or shaking, and grain size.</>,
          <>90 − 20 = {secondsSaved(cold, hot)} s.</>,
          <>Only one.</>,
          <>The shortest bar, because the solute dissolved in the shortest time.</>,
        ]}
      />,
    ),
  },
];
