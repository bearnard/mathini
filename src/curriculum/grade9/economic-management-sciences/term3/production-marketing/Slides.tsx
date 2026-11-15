import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
// randNb is rand() with non-breaking spaces so amounts do not split across lines.
import { randNb as rand } from '../../../../../components/diagrams/ems/emsHelpers';
import { capacityGap, defectRate, percentOf, priceCheck } from '../../../../../components/diagrams/ems/ems9b-helpers';
import { FourPs } from '../../../../../components/diagrams/ems/Ems9bPictures';

// Every figure below comes from ems9b-helpers.ts (tested in ems9b-helpers.test.ts and ems9b-lessons.test.ts).
const batch = defectRate(200, 6);
const survey = { asked: 40, want: 28, percent: percentOf(28, 40) };
const price = priceCheck(12, 50, 16);
const cap = capacityGap(500, 650);
const q1 = defectRate(500, 25);
const q2 = percentOf(20, 50);
const q3 = priceCheck(20, 25, 25);
const q4 = capacityGap(300, 360);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Production and quality control',
    content: slide(
      <>
        <Rule>Production turns inputs into products. Standardisation gives consistency and fewer errors. Quality control checks that products meet the standard.</Rule>
        <NumberedSteps
          label="The production process"
          heading="The production process"
          tone="teal"
          steps={[
            { lead: 'Inputs', text: ': materials, labour, machines.' },
            { lead: 'Process', text: ': make it to the standard.' },
            { lead: 'Check', text: ': quality control.' },
            { lead: 'Output', text: ': goods ready to sell.' },
          ]}
        />
        <Worked
          title="A batch of school jerseys"
          steps={[<>{batch.made} made, {batch.faulty} faulty: {batch.good} are good.</>, <>Defect rate: {batch.faulty} ÷ {batch.made} × 100 = {batch.percent}%.</>]}
        />
        <Mistake>Thinking checks are a waste once the first products have sold. Quality control builds customer trust and cuts returns.</Mistake>
      </>,
    ),
  },
  {
    title: 'Market research',
    content: slide(
      <>
        <Rule>Marketing identifies what customers need and satisfies them in a fair exchange of value. Market research finds out what customers prefer and what competitors do, which cuts risk.</Rule>
        <Worked
          title="A survey at school"
          steps={[<>Ask {survey.asked} learners: would you buy a vetkoek at break?</>, <>{survey.want} say yes.</>, <>{survey.want} ÷ {survey.asked} × 100 = {survey.percent}% want it, so demand looks good.</>]}
        />
        <Mistake>Skipping research because the owner &ldquo;knows the market&rdquo;. Customers can want different things from what the owner assumes.</Mistake>
      </>,
    ),
  },
  {
    title: 'The 4 Ps of marketing',
    content: slide(
      <>
        <Rule>The marketing mix is the 4 Ps: Product, Price, Place and Promotion. Place means distribution: the right channels reach target customers efficiently.</Rule>
        <FourPs />
        <Worked
          title="Vetkoek at the school tuck shop"
          steps={['Product: fresh vetkoek with mince.', 'Price: set from costs and what rivals charge.', 'Place: sold at the tuck shop window.', 'Promotion: a poster at break.']}
        />
        <Mistake>Thinking marketing is only promotion. Adverts cannot fix a poor product, a wrong price or a hard-to-reach shop.</Mistake>
      </>,
    ),
  },
  {
    title: 'Setting a price',
    content: slide(
      <>
        <Rule>Price using your costs, your competitors&apos; prices and the value customers see. Cost-plus pricing adds a mark-up percentage to the cost.</Rule>
        <Worked
          title={`Cost ${rand(price.cost)}, mark-up ${price.percent}%`}
          steps={[<>Mark-up: {price.percent}% of {rand(price.cost)} = {rand(price.add)}.</>, <>Price: {rand(price.cost)} + {rand(price.add)} = {rand(price.price)}.</>, <>A competitor charges {rand(price.competitor)}. Ours is {rand(price.gap)} {price.verdict}, so we must show better value.</>]}
        />
        <Mistake>Charging as high as possible, or copying a competitor without checking your own costs. Both can lose money or customers.</Mistake>
      </>,
    ),
  },
  {
    title: 'Production and marketing must agree',
    content: slide(
      <>
        <Rule>Production capacity limits what marketing can promise. Overpromising damages a business&apos;s reputation.</Rule>
        <Worked
          title="A bakery can bake 500 loaves a week"
          steps={[<>Marketing promises {cap.promised} loaves to a new customer.</>, <>{cap.promised} − {cap.capacity} = {cap.short} loaves short.</>, 'Fix: promise only what production can deliver, or raise capacity first.']}
        />
        <Mistake>Believing production can be increased overnight. New machines and staff take time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{q1.made} items are made and {q1.faulty} are faulty. What is the defect rate?</li>
            <li>In a survey of 50 learners, 20 want a product. What percentage is that?</li>
            <li>Cost {rand(20)} plus a 25% mark-up. What is the price?</li>
            <li>Capacity is {q4.capacity} a week and marketing promises {q4.promised}. How many are short?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{q1.faulty} ÷ {q1.made} × 100 = {q1.percent}%.</li>
            <li>{q2}%.</li>
            <li>{rand(q3.add)} mark-up, so {rand(q3.price)}.</li>
            <li>{q4.short} short.</li>
          </ol>
        }
      />,
    ),
  },
];
