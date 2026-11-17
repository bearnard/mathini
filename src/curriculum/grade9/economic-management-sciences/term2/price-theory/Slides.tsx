import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { MarketTable, SupplyDemandChart } from '../../../../../components/diagrams/ems/Ems9dPictures';
import { BREAD, BREAD_PRICES, equilibrium, marketTable, shiftDemand, shiftSupply } from '../../../../../components/diagrams/ems/ems9d-helpers';

// Every number below comes from ems9d-helpers.ts (tested in ems9d-helpers.test.ts and g9EmsEconomy.test.ts): the bread market, qd = 220 - 10p and qs = 10p - 20.
const rows = marketTable(BREAD, BREAD_PRICES);
const eq = equilibrium(BREAD);
const up = equilibrium(shiftDemand(BREAD, 40));
const down = equilibrium(shiftSupply(BREAD, -40));
const at = (p: number) => rows.find((r) => r.price === p)!;
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Demand',
    content: slide(
      <>
        <Rule>Demand is the quantity of a good that buyers are willing and able to buy at each price. The law of demand says that when the price rises, the quantity demanded falls.</Rule>
        <SupplyDemandChart market={BREAD} prices={BREAD_PRICES} show="demand" aria={`A demand line for bread. The price goes up the side from R${BREAD_PRICES[0]} to R${BREAD_PRICES[BREAD_PRICES.length - 1]} and the quantity along the bottom. The line slopes down: at R${at(8).price} buyers want ${at(8).demanded} loaves and at R${at(16).price} they want ${at(16).demanded}.`} />
        <Worked
          title="Loaves of bread demanded each day"
          steps={[
            `At R${at(8).price} a loaf, buyers want ${at(8).demanded} loaves.`,
            `At R${at(12).price} a loaf, they want ${at(12).demanded} loaves.`,
            `At R${at(16).price} a loaf, they want only ${at(16).demanded} loaves. A higher price means a smaller quantity demanded.`,
          ]}
        />
        <Mistake>Saying that demand rises when the price rises. When the price rises, people buy less, so the quantity demanded falls.</Mistake>
      </>,
    ),
  },
  {
    title: 'Supply',
    content: slide(
      <>
        <Rule>Supply is the quantity of a good that sellers are willing to sell at each price. The law of supply says that when the price rises, the quantity supplied rises, because selling becomes more profitable.</Rule>
        <SupplyDemandChart market={BREAD} prices={BREAD_PRICES} show="supply" aria={`A supply line for bread. The line slopes up: at R${at(8).price} bakers supply ${at(8).supplied} loaves and at R${at(16).price} they supply ${at(16).supplied}.`} />
        <Worked
          title="Loaves of bread supplied each day"
          steps={[
            `At R${at(8).price} a loaf, bakers supply ${at(8).supplied} loaves.`,
            `At R${at(12).price} a loaf, they supply ${at(12).supplied} loaves.`,
            `At R${at(16).price} a loaf, they supply ${at(16).supplied} loaves. A higher price means a larger quantity supplied.`,
          ]}
        />
        <Mistake>Mixing up the two laws. Buyers want less at a high price, but sellers want to sell more.</Mistake>
      </>,
    ),
  },
  {
    title: 'Equilibrium',
    content: slide(
      <>
        <Rule>The equilibrium price is the price where the quantity demanded equals the quantity supplied. Below it there is a shortage and above it there is a surplus.</Rule>
        <SupplyDemandChart market={BREAD} prices={BREAD_PRICES} aria={`Demand and supply lines for bread crossing at the equilibrium: a price of R${eq.price} and ${eq.qty} loaves.`} />
        <MarketTable rows={rows} aria={`The bread market at six prices. Equilibrium at R${eq.price}, where ${eq.qty} loaves are wanted and supplied.`} />
        <Worked
          steps={[
            `At R${eq.price} buyers want ${at(12).demanded} loaves and bakers supply ${at(12).supplied}. This is the equilibrium: R${eq.price} and ${eq.qty} loaves.`,
            `At R${at(8).price} there is a shortage: ${at(8).demanded} are wanted but only ${at(8).supplied} are supplied, a shortage of ${at(8).gap}. The price tends to rise.`,
            `At R${at(16).price} there is a surplus: ${at(16).supplied} are supplied but only ${at(16).demanded} are wanted, a surplus of ${at(16).gap}. The price tends to fall.`,
          ]}
        />
        <Mistake>Calling a shortage a lack of money. A shortage means that the quantity demanded is more than the quantity supplied at that price.</Mistake>
      </>,
    ),
  },
  {
    title: 'When demand or supply shifts',
    content: slide(
      <>
        <Rule>A change in the price moves us along a curve. A change in something else, such as buyers&rsquo; incomes or the cost of making the good, shifts the whole curve and gives a new equilibrium.</Rule>
        <SupplyDemandChart market={BREAD} prices={BREAD_PRICES} shifted={{ kind: 'demand', by: 40 }} aria={`The demand line shifts to the right, with 40 more loaves wanted at every price. The new equilibrium is R${up.price} and ${up.qty} loaves, up from R${eq.price} and ${eq.qty}.`} />
        <Worked
          steps={[
            `Demand rises (for example, incomes rise): ${40} more loaves are wanted at every price. The new equilibrium is R${up.price} and ${up.qty} loaves: a higher price and a larger quantity.`,
            `Supply falls (for example, the cost of wheat rises): ${40} fewer loaves are supplied at every price. The new equilibrium is R${down.price} and ${down.qty} loaves: a higher price and a smaller quantity.`,
          ]}
        />
        <Mistake>Treating a change of price as a shift of the curve. Only a change in a factor other than the price shifts the curve.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What happens to the quantity demanded when the price of a good rises?</>,
          <>At R14 a loaf, bakers supply 120 loaves and buyers want 80. Is there a shortage or a surplus, and of how many?</>,
          <>Incomes rise and more bread is wanted at every price. What happens to the equilibrium price?</>,
        ]}
        answers={[
          <>It falls.</>,
          <>A surplus of 120 − 80 = <strong>40</strong> loaves.</>,
          <>It rises.</>,
        ]}
      />,
    ),
  },
];
