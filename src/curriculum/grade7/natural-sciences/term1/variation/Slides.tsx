import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { HeightFigures, PercentBar, SurveyBars } from '../../../../../components/diagrams/g7ns/G7Ns';
import { CLASS_HEIGHTS, TONGUE, bins, countTrue, percent, range, shortest, tallest } from '../../../../../components/diagrams/g7ns/g7nsHelpers';

// Every number below comes from g7nsHelpers.ts (tested in g7nsHelpers.test.ts and g7NsLessons.test.ts).
const dc = (n: number) => String(n).replace('.', ',');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const SIX = { names: ['Thandi', 'Pieter', 'Aisha', 'Sipho', 'Lerato', 'Joe'], heights: [145, 150, 142, 157, 153, 148] };
export const GROUPS = bins(CLASS_HEIGHTS, 140, 5, 4);
const rolls = countTrue(TONGUE);
const rollPct = percent(rolls, TONGUE.length);
const cannot = TONGUE.length - rolls;

export const learnSteps: LearnStep[] = [
  {
    title: 'Species and variation',
    content: slide(
      <>
        <Rule>A species is a group of living things of the same type that can reproduce to make more of the same type. Differences between living things of one species are called variation.</Rule>
        <HeightFigures names={SIX.names} heights={SIX.heights} />
        <Worked
          title="Is every person the same?"
          steps={[
            'All people are human (Homo sapiens), so they belong to one species. Dogs are a different species.',
            `The learners in the picture are all human, but their heights differ: from ${shortest(SIX.heights)} cm to ${tallest(SIX.heights)} cm.`,
            'A difference between members of the same species is variation.',
          ]}
        />
        <Mistake>Thinking that two animals that look very different must be different species. A big dog and a small dog are still one species, with variation in size.</Mistake>
      </>,
    ),
  },
  {
    title: 'Inherited variation',
    content: slide(
      <>
        <Rule>Some variation can be inherited: it is passed from parents to their children. Height and tongue rolling are inherited characteristics.</Rule>
        <PercentBar yes={rolls} no={cannot} yesLabel="can roll" noLabel="cannot roll" pct={rollPct} />
        <Worked
          title={`${rolls} learners in a class of ${TONGUE.length} can roll their tongues. What percentage is that?`}
          steps={[
            `Write the part over the whole: ${rolls} out of ${TONGUE.length}.`,
            `Divide and multiply by 100: ${rolls} ÷ ${TONGUE.length} × 100 = ${dc(rollPct)}%.`,
            `So ${cannot} learners (${dc(percent(cannot, TONGUE.length))}%) cannot roll their tongues. Both groups are part of normal variation.`,
            `Do the same for a family: if 3 of 5 people can roll their tongues, that is ${dc(percent(3, 5))}%.`,
          ]}
        />
        <Mistake>Saying that a learner who cannot roll the tongue is wrong or odd. Variation is only a difference, not better or worse.</Mistake>
      </>,
    ),
  },
  {
    title: 'Showing the variation in a graph',
    content: slide(
      <>
        <Rule>To show variation, measure every learner, sort the heights into groups that do not overlap, count each group and draw a bar graph.</Rule>
        <SurveyBars bins={GROUPS} title={`Heights of ${CLASS_HEIGHTS.length} learners`} unit="height in cm" />
        <Worked
          title="Read the graph"
          steps={[
            `Add the bars: ${GROUPS.map((g) => g.count).join(' + ')} = ${CLASS_HEIGHTS.length} learners, so nobody is missed.`,
            `The tallest group is ${GROUPS.reduce((a, b) => (b.count > a.count ? b : a)).label} cm, with ${Math.max(...GROUPS.map((g) => g.count))} learners.`,
            `The tallest learner is ${tallest(CLASS_HEIGHTS)} cm and the shortest ${shortest(CLASS_HEIGHTS)} cm, so heights vary by ${range(CLASS_HEIGHTS)} cm.`,
          ]}
        />
        <Mistake>Using groups that overlap, such as 140–145 and 145–150. A learner of 145 cm would be counted twice.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is variation?</>,
          <>In a class of 20 learners, 14 can roll their tongues. What percentage can roll?</>,
          <>Why are the height groups 140–144 and 145–149 better than 140–145 and 145–150?</>,
          <>Give one inherited characteristic of people.</>,
        ]}
        answers={[
          <>Differences between living things of the same species.</>,
          <>14 ÷ 20 × 100 = {dc(percent(14, 20))}%.</>,
          <>The groups do not overlap, so a learner of 145 cm is counted once.</>,
          <>Height, or the ability to roll the tongue.</>,
        ]}
      />,
    ),
  },
];
