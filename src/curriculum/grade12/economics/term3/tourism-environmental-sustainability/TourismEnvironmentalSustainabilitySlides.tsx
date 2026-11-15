import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { TourismMultiplier } from '../../../../../components/diagrams/economics/TourismMultiplier';
import { EXAMPLE, limit, rounds, totalSpent } from '../../../../../components/diagrams/economics/tourism';
import type { LearnStep } from '../../_shared/types';

// The multiplier numbers are an illustration, computed in tourism.ts (tested in tourism.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const rs = rounds(EXAMPLE.initial, EXAMPLE.keptShare, EXAMPLE.n);
const keptPct = Math.round(EXAMPLE.keptShare * 100);
const leakPct = 100 - keptPct;
const sumFour = totalSpent(rs);
const forever = limit(EXAMPLE.initial, EXAMPLE.keptShare);

export const learnSteps: LearnStep[] = [
  {
    title: 'Tourism earns foreign exchange and multiplies',
    content: slide(
      <>
        <Rule>Foreign visitors bring spending into the economy, which earns foreign exchange. Their first rand is then re-spent by businesses and workers, creating more rounds of income and jobs: the tourism multiplier.</Rule>
        <TourismMultiplier rounds={rs} keptPct={keptPct} />
        <Worked
          title={`Example: R${EXAMPLE.initial} of tourist spending (illustration, not real data)`}
          steps={[
            <>Round 1: a tourist spends R{rs[0].spent}. The local business keeps and re-spends {keptPct}%: R{rs[0].kept}.</>,
            <>Round 2: R{rs[1].spent} is spent, and R{rs[1].kept} goes on to round 3, then R{rs[2].kept}, and so on.</>,
            <>Four rounds already add up to R{rs[0].spent} + R{rs[1].spent} + R{rs[2].spent} + R{rs[3].spent} = <strong>R{sumFour}</strong>, more than the first R{EXAMPLE.initial}.</>,
          ]}
        />
        <Mistake>Thinking tourist spending stays in the one business that received it. It circulates and supports more income and jobs in linked sectors.</Mistake>
      </>,
    ),
  },
  {
    title: 'Leakages and seasonality',
    content: slide(
      <>
        <Rule>A leakage is income that leaves the local economy, so less is re-spent locally. Seasonality means tourism demand changes during the year, rising in holiday peaks and falling off-peak.</Rule>
        <Worked
          title="Spot the leakage"
          steps={[
            <>A lodge buys imported goods and sends profits to a foreign owner. Both leave the local economy: <strong>leakages</strong>.</>,
            <>In the example above, {leakPct}% leaks out in every round, which is why the amounts shrink: R{rs[0].spent} to R{rs[1].spent} to R{rs[2].spent}.</>,
            <>Peak seasons bring crowds and jobs. Off-peak seasons bring empty rooms and uneven employment: <strong>unstable demand</strong>.</>,
          ]}
        />
        <Mistake>Believing leakages create jobs or that seasonality means demand is the same every month. Leakages reduce the income kept locally, and demand rises and falls.</Mistake>
      </>,
    ),
  },
  {
    title: 'Negative externalities and carrying capacity',
    content: slide(
      <>
        <Rule>A negative externality is a cost that falls on other people or the environment and is not paid by the tourist or the business: litter, congestion, water stress and habitat damage. Carrying capacity is the maximum number of visitors an area can handle sustainably, without serious damage.</Rule>
        <Worked
          title="Apply the idea"
          steps={[
            <>A popular trail gets so many hikers that the path erodes and litter builds up.</>,
            <>Erosion and litter are costs borne by nature and by the community: negative externalities.</>,
            <>The visitors have gone past the trail’s <strong>carrying capacity</strong>. Limiting numbers protects the attraction.</>,
          ]}
        />
        <Mistake>Saying heavy tourism always means cleaner beaches or less congestion. Heavy tourism more often brings litter, congestion and environmental pressure.</Mistake>
      </>,
    ),
  },
  {
    title: 'Sustainable development and ecotourism',
    content: slide(
      <>
        <Rule>Sustainable development means meeting present needs without harming future generations’ ability to meet theirs. Ecotourism is responsible travel that emphasises conservation and supports local communities.</Rule>
        <Worked
          title="Choose strategies that keep the attraction alive"
          steps={[
            <>Conserve: use entry fees to protect habitats and keep numbers within carrying capacity.</>,
            <>Involve the community: hire and buy locally, which also cuts leakages.</>,
            <>Use resources efficiently and encourage responsible visitor behaviour.</>,
            <>Result: growth that lasts, instead of damaging the nature visitors come to see.</>,
          ]}
        />
        <Mistake>Treating sustainability as opposing tourism. If tourism damages natural assets it weakens the very attractions that support long-term income, so protecting them is good economics.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is a tourism leakage? Give one example.</li>
            <li>In the example, a tourist spends R{EXAMPLE.initial} and {keptPct}% is re-spent. How much is spent in round 2?</li>
            <li>What does carrying capacity mean?</li>
            <li>What is ecotourism?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Income that leaves the local economy, for example profits sent to a foreign owner or imported goods.</li>
            <li>R{EXAMPLE.initial} × {keptPct}% = R{rs[1].spent}.</li>
            <li>The maximum number of visitors an area can handle sustainably, without serious damage.</li>
            <li>Responsible travel that emphasises conservation and supports local communities.</li>
          </ol>
        }
      />,
    ),
  },
];

