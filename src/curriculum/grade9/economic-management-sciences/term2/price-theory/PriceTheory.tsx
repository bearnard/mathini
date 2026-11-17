import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "What does the law of demand say?",
    options: ["When the price rises, the quantity demanded rises", "When the price rises, the quantity demanded falls", "When the price falls, the quantity supplied rises", "When incomes rise, the price always falls"],
    answer: "When the price rises, the quantity demanded falls",
    explanation: "Buyers buy less of a good when it becomes more expensive.",
  },
  {
    prompt: "What does the law of supply say?",
    options: ["When the price rises, the quantity supplied rises", "When the price rises, the quantity supplied falls", "When the price falls, the quantity demanded falls", "When costs rise, the price always falls"],
    answer: "When the price rises, the quantity supplied rises",
    explanation: "A higher price makes selling more profitable, so sellers offer more.",
  },
  {
    prompt: "In the bread market, buyers want 140 loaves at R8 and 60 loaves at R16. What does this show?",
    options: ["The quantity demanded rises as the price rises", "The supply of bread is falling", "Bread has no equilibrium price", "The quantity demanded falls as the price rises"],
    answer: "The quantity demanded falls as the price rises",
    explanation: "Buyers want fewer loaves at the higher price, as the law of demand says.",
  },
  {
    prompt: "Bakers supply 60 loaves at R8 and 140 loaves at R16. What does this show?",
    options: ["The quantity supplied falls as the price rises", "The demand for bread is rising", "The quantity supplied rises as the price rises", "Buyers want more bread at a higher price"],
    answer: "The quantity supplied rises as the price rises",
    explanation: "Bakers offer more loaves at the higher price, as the law of supply says.",
  },
  {
    prompt: "What is the equilibrium price?",
    options: ["The lowest price that sellers accept", "The top price that buyers can pay", "The price where demand equals supply", "A price that the state has set"],
    answer: "The price where demand equals supply",
    explanation: "At the equilibrium price the market clears: there is neither a shortage nor a surplus.",
  },
  {
    prompt: "At R12 a loaf, buyers want 100 loaves and bakers supply 100 loaves. What is R12?",
    options: ["A shortage price here", "The equilibrium price", "A surplus price here", "A maximum price here"],
    answer: "The equilibrium price",
    explanation: "The quantity demanded equals the quantity supplied, so R12 is the equilibrium price.",
  },
  {
    prompt: "At R8 a loaf, buyers want 140 loaves and bakers supply 60 loaves. How big is the shortage?",
    options: ["200 loaves", "60 loaves", "80 loaves", "140 loaves"],
    answer: "80 loaves",
    explanation: "140 − 60 = 80 loaves are wanted but not supplied.",
  },
  {
    prompt: "At R16 a loaf, buyers want 60 loaves and bakers supply 140 loaves. What is the result?",
    options: ["A surplus of 80 loaves", "A shortage of 80 loaves", "A surplus of 200 loaves", "Equilibrium"],
    answer: "A surplus of 80 loaves",
    explanation: "140 − 60 = 80 loaves are supplied but not wanted.",
  },
  {
    prompt: "At a price above the equilibrium price, what usually happens to the price?",
    options: ["It rises", "It stays the same", "It falls", "It is set to zero"],
    answer: "It falls",
    explanation: "A surplus builds up, so sellers lower the price to sell the extra goods.",
  },
  {
    prompt: "At a price below the equilibrium price, what usually happens to the price?",
    options: ["It falls", "It rises", "It stays the same", "It becomes the equilibrium price at once"],
    answer: "It rises",
    explanation: "A shortage means that buyers compete for the limited supply, so the price tends to rise.",
  },
  {
    prompt: "Incomes rise, and buyers want 40 more loaves at every price. What is the new equilibrium?",
    options: ["R12 and 140 loaves", "R10 and 120 loaves", "R14 and 80 loaves", "R14 and 120 loaves"],
    answer: "R14 and 120 loaves",
    explanation: "Demand shifts to the right. At R14 buyers want 120 and bakers supply 120, so the price and the quantity both rise.",
  },
  {
    prompt: "The cost of wheat rises, and bakers supply 40 fewer loaves at every price. What is the new equilibrium?",
    options: ["R14 and 80 loaves", "R14 and 120 loaves", "R10 and 120 loaves", "R12 and 60 loaves"],
    answer: "R14 and 80 loaves",
    explanation: "Supply shifts to the left. At R14 buyers want 80 and bakers supply 80, so the price rises and the quantity falls.",
  },
  {
    prompt: "Which change shifts the demand curve for bread?",
    options: ["A rise in the price of bread", "A rise in the incomes of buyers", "A fall in the price of bread", "A rise in the quantity supplied"],
    answer: "A rise in the incomes of buyers",
    explanation: "A change in the price of the good moves us along the curve. A change in incomes shifts the whole curve.",
  },
  {
    prompt: "Which change shifts the supply curve for bread?",
    options: ["A rise in the price of bread", "A fall in the price of bread", "A rise in bread-making costs", "A rise in the quantity demanded"],
    answer: "A rise in bread-making costs",
    explanation: "Higher costs make bakers supply less at every price. A change in the price of bread only moves us along the curve.",
  },
];

const PriceTheory = () => (
  <CapsSubjectTopic
    title="Price Theory: Demand and Supply"
    subtitle="Demand, supply, the equilibrium price, shortages and surpluses, and shifts of the curves"
    learnSteps={learnSteps}
    task="gr9-price-theory-t2"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default PriceTheory;
