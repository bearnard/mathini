import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { UtilityBars } from '../../../../../components/diagrams/econ11/Econ11';
import { GOODS, MU, allocate, marginalUtility, maxTuQuantity, mudivp, totalUtility, tuSchedule } from '../../../../../components/diagrams/econ11/econ11Helpers';

// Every number comes from econ11Helpers.ts (tested in econ11Helpers.test.ts and g11EconGaps.test.ts, including a brute-force check of the best purchase). Utility is measured in imaginary units ("utils").
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const tu = tuSchedule(MU);
const eq = allocate(GOODS, 8);

export const learnSteps: LearnStep[] = [
  {
    title: 'Total and marginal utility',
    content: slide(
      <>
        <Rule>Utility is the satisfaction that a consumer gets from a good or service. Total utility (TU) is the total satisfaction from all the units consumed. Marginal utility (MU) is the extra satisfaction from one more unit: MU = change in TU ÷ change in quantity. Total utility is the running total of the marginal utilities.</Rule>
        <UtilityBars mu={MU} />
        <Worked
          title="Slices of pizza (utils)"
          steps={[
            `The marginal utilities of slices 1 to 5 are ${MU.slice(0, 5).join(', ')}.`,
            `TU after 1, 2 and 3 slices = ${tu[0]}, ${tu[1]} and ${tu[2]}: for example 20 + 16 + 12 = ${totalUtility(MU, 3)}.`,
            `The MU of the 4th slice = TU(4) − TU(3) = ${tu[3]} − ${tu[2]} = ${marginalUtility(tu, 4)}.`,
          ]}
        />
        <Mistake>Mixing up total and marginal utility. Total utility is all the satisfaction; marginal utility is only the satisfaction from the last unit.</Mistake>
      </>,
    ),
  },
  {
    title: 'Diminishing marginal utility',
    content: slide(
      <>
        <Rule>The law of diminishing marginal utility says that as a consumer consumes more units of a good, the extra satisfaction from each additional unit gets smaller. Total utility keeps rising while MU is positive, is at its maximum where MU = 0, and falls if MU becomes negative. This is why the demand curve slopes downwards: consumers will only pay less for each extra unit.</Rule>
        <FactCards
          cards={[
            { title: 'MU positive', line1: 'total utility rises, but', line2: 'more and more slowly' },
            { title: 'MU = 0', line1: `total utility is at its maximum`, line2: `(${tu[maxTuQuantity(MU) - 1]} utils at slice ${maxTuQuantity(MU)})` },
            { title: 'MU negative', line1: 'one more unit makes the', line2: 'consumer worse off' },
          ]}
          aria="Diminishing marginal utility. While the marginal utility is positive, total utility rises more and more slowly. Where the marginal utility is zero, total utility is at its maximum. If the marginal utility is negative, one more unit makes the consumer worse off."
        />
        <Worked
          title="Read the schedule"
          steps={[
            `Marginal utility falls from ${MU[0]} to ${MU[4]} over slices 1 to 5: each extra slice gives less.`,
            `The 6th slice has MU = ${MU[5]}, so TU stops rising: it stays at ${tu[5]}.`,
            `The 7th slice has MU = ${MU[6]}, so TU falls to ${tu[6]}.`,
          ]}
        />
        <Mistake>Saying that total utility falls as soon as marginal utility falls. Total utility only falls when marginal utility is negative.</Mistake>
      </>,
    ),
  },
  {
    title: 'Consumer equilibrium and demand',
    content: slide(
      <>
        <Rule>A consumer with a limited budget gets the most total utility by spending each rand where it gives the most marginal utility per rand (MU ÷ price). The consumer is in equilibrium when MU ÷ price is the same for all the goods bought and the whole budget is spent. When the price of a good falls, the MU per rand rises, so the consumer buys more: this links marginal utility to the downward-sloping demand curve.</Rule>
        <FactCards
          cards={[
            { title: `Bread at R${GOODS[0].price}`, line1: `MU per rand: ${GOODS[0].mu.slice(0, 3).map((_, k) => mudivp(GOODS[0], k + 1)).join(', ')}`, line2: 'for the 1st, 2nd and 3rd loaf' },
            { title: `Milk at R${GOODS[1].price}`, line1: `MU per rand: ${GOODS[1].mu.slice(0, 3).map((_, k) => mudivp(GOODS[1], k + 1)).join(', ')}`, line2: 'for the 1st, 2nd and 3rd litre' },
            { title: 'Budget R8', line1: `best buy: ${eq.counts[0]} loaves and`, line2: `${eq.counts[1]} litre of milk` },
          ]}
          aria="Consumer equilibrium with a budget of R8. Bread costs R2 and its marginal utility per rand is 8, 6 and 4. Milk costs R4 and its marginal utility per rand is 6, 5 and 3. The best buy is 2 loaves of bread and 1 litre of milk, where the marginal utility per rand is 6 for both."
        />
        <Worked
          title="Spend R8 on bread (R2) and milk (R4)"
          steps={[
            `Buy the units with the highest MU per rand first: bread 1 (${mudivp(GOODS[0], 1)}), then bread 2 (${mudivp(GOODS[0], 2)}) and milk 1 (${mudivp(GOODS[1], 1)}).`,
            `This spends 2 + 2 + 4 = R${eq.spent}: ${eq.counts[0]} loaves and ${eq.counts[1]} litre of milk.`,
            `The last unit of each has MU per rand = ${mudivp(GOODS[0], 2)}, so the consumer is in equilibrium and total utility = ${eq.utility} utils.`,
          ]}
        />
        <Mistake>Comparing marginal utilities without prices. Compare the MU per rand, because the goods cost different amounts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is marginal utility?</>,
          <>MU of slices 1, 2 and 3 are 20, 16 and 12. What is the total utility of 3 slices?</>,
          <>What happens to total utility when marginal utility is zero?</>,
          <>What is the condition for consumer equilibrium?</>,
        ]}
        answers={[
          <>The extra satisfaction from one more unit.</>,
          <>{totalUtility(MU, 3)} utils.</>,
          <>It is at its maximum.</>,
          <>MU ÷ price is equal for all goods bought and the budget is spent.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is utility?",
    options: ["The price of a good", "The cost of producing a good", "A consumer's satisfaction", "The profit of a business"],
    answer: "A consumer's satisfaction",
    explanation: "Utility is satisfaction.",
  },
  {
    prompt: "What is total utility?",
    options: ["The total satisfaction from all the units consumed", "The satisfaction from the last unit", "The price of all the units", "The satisfaction from the first unit only"],
    answer: "The total satisfaction from all the units consumed",
    explanation: "Total utility is the sum of the satisfaction from all units.",
  },
  {
    prompt: "What is marginal utility?",
    options: ["The total satisfaction from all units", "The price of one more unit", "The cost of one more unit", "The extra satisfaction from one more unit"],
    answer: "The extra satisfaction from one more unit",
    explanation: "MU is the change in total utility from one more unit.",
  },
  {
    prompt: "The marginal utilities of slices 1, 2 and 3 are 20, 16 and 12. What is the total utility of 3 slices?",
    options: ["12 utils", "48 utils", "16 utils", "36 utils"],
    answer: "48 utils",
    explanation: "20 + 16 + 12 = 48.",
  },
  {
    prompt: "Total utility is 56 after 4 slices and 48 after 3 slices. What is the marginal utility of the 4th slice?",
    options: ["48 utils", "8 utils", "56 utils", "104 utils"],
    answer: "8 utils",
    explanation: "Marginal utility is the change in total utility: 56 − 48 = 8 utils for the 4th slice.",
  },
  {
    prompt: "What does the law of diminishing marginal utility say?",
    options: ["Each extra unit costs less", "Total utility always falls", "Marginal utility rises with consumption", "Each extra unit gives less extra satisfaction"],
    answer: "Each extra unit gives less extra satisfaction",
    explanation: "Marginal utility falls as more units are consumed.",
  },
  {
    prompt: "When does total utility reach its maximum?",
    options: ["Where marginal utility is zero", "Where marginal utility is highest", "Where the price is zero", "At the first unit"],
    answer: "Where marginal utility is zero",
    explanation: "After MU = 0, more units add nothing or reduce satisfaction.",
  },
  {
    prompt: "Marginal utility is positive but falling. What happens to total utility?",
    options: ["It falls", "It stays the same", "It rises, but more slowly", "It rises faster"],
    answer: "It rises, but more slowly",
    explanation: "Each unit still adds something, but less than the one before.",
  },
  {
    prompt: "Marginal utility becomes negative. What happens to total utility?",
    options: ["It rises", "It stays the same", "It doubles", "It falls"],
    answer: "It falls",
    explanation: "One more unit makes the consumer worse off.",
  },
  {
    prompt: "The marginal utility of bread is 8 utils per rand for the first loaf and 6 for the second. What does this show?",
    options: ["The price of bread is rising", "Diminishing marginal utility", "Bread is a luxury good", "Total utility is falling"],
    answer: "Diminishing marginal utility",
    explanation: "This is diminishing marginal utility.",
  },
  {
    prompt: "Bread costs R2 and its marginal utility is 12. What is the marginal utility per rand?",
    options: ["6", "24", "14", "10"],
    answer: "6",
    explanation: "12 ÷ 2 = 6 utils per rand.",
  },
  {
    prompt: "Which condition shows that a consumer is in equilibrium?",
    options: ["All the prices are equal", "The consumer buys only one good", "Equal MU per rand, budget spent", "Total utility is zero"],
    answer: "Equal MU per rand, budget spent",
    explanation: "Equilibrium needs equal MU per rand and a fully spent budget.",
  },
  {
    prompt: "With R8, bread at R2 (MU per rand 8, 6, 4) and milk at R4 (MU per rand 6, 5, 3). What is the best buy?",
    options: ["4 loaves of bread", "2 litres of milk", "2 loaves of bread and 1 litre of milk", "1 loaf of bread and 1 litre of milk"],
    answer: "2 loaves of bread and 1 litre of milk",
    explanation: "The highest MU per rand units are bread 1 (8), bread 2 (6) and milk 1 (6), costing R8.",
  },
  {
    prompt: "How does marginal utility explain the downward-sloping demand curve?",
    options: ["Consumers pay less for each extra unit", "Consumers pay more for each extra unit", "Prices never change", "Utility is always constant"],
    answer: "Consumers pay less for each extra unit",
    explanation: "Because the extra satisfaction falls, the price consumers will pay falls.",
  },
];

const MarginalUtility = () => (
  <CapsSubjectTopic
    title="Marginal Utility"
    subtitle="Total and marginal utility, diminishing marginal utility, consumer equilibrium and demand"
    learnSteps={learnSteps}
    task="gr11-marginal-utility-t2"
    bank={bank}
    apiPath="/api/caps/econ"
  />
);

export default MarginalUtility;
