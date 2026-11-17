import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "Which sector takes raw materials from nature?",
    options: ["The secondary sector", "The tertiary sector", "The government sector", "The primary sector"],
    answer: "The primary sector",
    explanation: "Farming, mining, fishing and forestry take raw materials from the land and the sea.",
  },
  {
    prompt: "Which sector makes goods from raw materials?",
    options: ["The primary sector", "The tertiary sector", "The secondary sector", "The household sector"],
    answer: "The secondary sector",
    explanation: "Manufacturing and construction turn raw materials into finished goods and buildings.",
  },
  {
    prompt: "Which sector provides services such as trade, transport and banking?",
    options: ["The primary sector", "The secondary sector", "The household sector", "The tertiary sector"],
    answer: "The tertiary sector",
    explanation: "The tertiary sector sells services instead of goods.",
  },
  {
    prompt: "A farmer grows wheat. In which sector does the farmer work?",
    options: ["Primary", "Secondary", "Tertiary", "Household"],
    answer: "Primary",
    explanation: "Growing a crop takes a raw material from the land, so farming is a primary activity.",
  },
  {
    prompt: "A miner digs out iron ore. In which sector does the miner work?",
    options: ["Secondary", "Primary", "Tertiary", "Household"],
    answer: "Primary",
    explanation: "Mining takes a raw material from the earth.",
  },
  {
    prompt: "A mill grinds wheat into flour. In which sector does the mill work?",
    options: ["Primary", "Tertiary", "Secondary", "Household"],
    answer: "Secondary",
    explanation: "The mill changes a raw material into a new product, which is manufacturing.",
  },
  {
    prompt: "Cars are put together in a factory. In which sector does the factory work?",
    options: ["Primary", "Tertiary", "Household", "Secondary"],
    answer: "Secondary",
    explanation: "Assembling cars from parts is manufacturing.",
  },
  {
    prompt: "A builder constructs a house. In which sector does the builder work?",
    options: ["Secondary", "Primary", "Tertiary", "Household"],
    answer: "Secondary",
    explanation: "Construction is part of the secondary sector.",
  },
  {
    prompt: "A shop sells bread. In which sector does the shop work?",
    options: ["Primary", "Tertiary", "Secondary", "Household"],
    answer: "Tertiary",
    explanation: "The shop does not make the bread. It provides the service of selling it.",
  },
  {
    prompt: "A teacher teaches a class. In which sector does the teacher work?",
    options: ["Primary", "Secondary", "Tertiary", "Household"],
    answer: "Tertiary",
    explanation: "Education is a service, so it belongs to the tertiary sector.",
  },
  {
    prompt: "A fisher catches hake in the sea. In which sector does the fisher work?",
    options: ["Secondary", "Tertiary", "Household", "Primary"],
    answer: "Primary",
    explanation: "Fishing takes a resource from nature.",
  },
  {
    prompt: "A taxi driver transports people to work. In which sector does the driver work?",
    options: ["Tertiary", "Primary", "Secondary", "Household"],
    answer: "Tertiary",
    explanation: "Transport is a service.",
  },
  {
    prompt: "A wheat farm supplies a flour mill, which supplies a bakery, which supplies a shop. What does this chain show?",
    options: ["Each sector works alone", "The tertiary sector makes the wheat", "The sectors depend on each other", "The primary sector sells the bread"],
    answer: "The sectors depend on each other",
    explanation: "Each sector uses the work of the one before it, so a problem in one sector affects the others.",
  },
  {
    prompt: "A bad harvest means that the farm grows less wheat. Which sectors are affected as a result?",
    options: ["Just the farm and its workers", "Just the shop at the end", "No sector apart from the farm", "The mill, bakery and shop"],
    answer: "The mill, bakery and shop",
    explanation: "Less wheat means less flour, less bread and less to sell, so the sectors that follow are affected.",
  },
];

const SectorsEconomy = () => (
  <CapsSubjectTopic
    title="Sectors of the Economy"
    subtitle="The primary, secondary and tertiary sectors, and how they depend on each other"
    learnSteps={learnSteps}
    task="gr9-sectors-economy-t2"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default SectorsEconomy;
