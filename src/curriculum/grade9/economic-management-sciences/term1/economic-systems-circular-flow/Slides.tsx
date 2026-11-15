import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
// randNb is rand() with non-breaking spaces so amounts do not split across lines.
import { randNb as rand } from '../../../../../components/diagrams/ems/emsHelpers';
import { householdSpending, perWorker } from '../../../../../components/diagrams/ems/ems9a-helpers';
import { CircularFlow, SystemsRow } from '../../../../../components/diagrams/ems/Ems9aPictures';
import { FactorsOfProduction } from '../../../../../components/diagrams/ems/EmsPictures';

// Every amount below comes from ems9a-helpers.ts (tested in ems9a-helpers.test.ts and ems9a-lessons.test.ts).
const flow = householdSpending(20_000, 4_000, 2_000);
const flowQ = householdSpending(12_000, 2_000, 1_000);
const allSaved = householdSpending(5_000, 0, 5_000);
const handTools = { output: 200, workers: 10 };
const tractor = { output: 350, workers: 10 };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Planned, market and mixed economies',
    content: slide(
      <>
        <Rule>An economic system decides what is made and for whom. In a planned economy the government decides. In a market economy supply and demand set prices. A mixed economy combines both.</Rule>
        <SystemsRow />
        <Worked
          title="Which system?"
          steps={[
            'The state decides how many cars are built and what they cost: planned.',
            'Shops raise the price of a scarce product because buyers want it: market.',
            'Private firms trade freely, but government provides services and rules: mixed.',
          ]}
        />
        <Mistake>Thinking a market economy has no rules. Even where prices are set by buyers and sellers, government makes laws on contracts, safety and fair trading. A mixed economy uses market forces plus government oversight.</Mistake>
      </>,
    ),
  },
  {
    title: 'The circular flow',
    content: slide(
      <>
        <Rule>The circular flow shows money and goods moving between households, businesses and government. Households earn wages, then spend, pay tax and save.</Rule>
        <CircularFlow
          income={flow.income}
          tax={flow.tax}
          saved={flow.saved}
          spent={flow.spent}
          aria={`Circular flow. Businesses pay households ${rand(flow.income)} in wages. Households pay ${rand(flow.tax)} tax to government, save ${rand(flow.saved)} with the financial sector and spend ${rand(flow.spent)} on goods from businesses.`}
        />
        <Worked
          title={`A household earns ${rand(flow.income)} in wages`}
          steps={[<>Tax to government: {rand(flow.tax)}. Savings: {rand(flow.saved)}.</>, <>Left to spend: {rand(flow.income)} − {rand(flow.tax)} − {rand(flow.saved)} = {rand(flow.spent)}.</>, <>That {rand(flow.spent)} becomes income for businesses, who pay wages again.</>]}
        />
        <Mistake>Believing households can save all their income. Then spending would be {rand(allSaved.spent)}, so firms would earn no sales income from households and jobs would be lost.</Mistake>
      </>,
    ),
  },
  {
    title: 'Factors of production and growth',
    content: slide(
      <>
        <Rule>Every product needs land, labour, capital and entrepreneurship. Using them better raises productivity and helps the economy grow.</Rule>
        <FactorsOfProduction />
        <Worked
          title="Ten workers on a farm"
          steps={[<>With hand tools they produce {handTools.output} crates: {perWorker(handTools.output, handTools.workers)} per worker.</>, <>With a tractor (capital) the same {tractor.workers} workers produce {tractor.output}: {perWorker(tractor.output, tractor.workers)} per worker.</>, 'Better capital raised productivity.']}
        />
        <Mistake>Saying only land owners help growth. All four factors matter, and growth depends on how well they are used.</Mistake>
      </>,
    ),
  },
  {
    title: 'South Africa in the global economy',
    content: slide(
      <>
        <Rule>The global economy gives South Africa trading partners, investment opportunities and commodity markets. World trade affects its prices and jobs.</Rule>
        <NumberedSteps
          label="How exports support jobs"
          heading="How trade supports jobs"
          tone="teal"
          steps={[
            { lead: 'A South African firm', text: ' sells goods abroad.' },
            { lead: 'The firm earns', text: ' income from foreign buyers.' },
            { lead: 'It pays wages', text: ' to local workers.' },
            { lead: 'Households spend', text: ' and the circular flow continues.' },
          ]}
        />
        <Worked
          title="Why trade with many countries?"
          steps={['Many partners means many markets for our minerals and goods.', 'If one partner buys less, others can still buy.', 'Foreign investment can build factories and create jobs.']}
        />
        <Mistake>Thinking South Africa trades only with its neighbours or one large partner. It trades with many.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>In which kind of economy does the government control production and distribution?</>,
          <>A household earns {rand(flowQ.income)}, pays {rand(flowQ.tax)} tax and saves {rand(flowQ.saved)}. How much is left to spend?</>,
          <>Name the four factors of production.</>,
          <>What is the benefit of an economy that blends government planning with free markets?</>,
        ]}
        answers={[
          <>A planned economy.</>,
          <>{rand(flowQ.income)} − {rand(flowQ.tax)} − {rand(flowQ.saved)} = {rand(flowQ.spent)}.</>,
          <>Land, labour, capital and entrepreneurship.</>,
          <>To balance efficiency with social welfare and stability.</>,
        ]}
      />,
    ),
  },
];
