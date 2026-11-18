import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';

// Functions, plan parts and formulas follow the Grade 9 EMS plan; numbers come from ems9-plan.ts (docs/notes/g9-ems-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The nine functions of a business",
    content: slide(
      <>
        <Rule>The functions of a business are the main jobs that must be done to keep it running. There are nine: administration, purchasing, marketing, finances, public relations, human resources, production, general management and risk management. Each function has its own role, and the business suffers when one is neglected. The first five are shown here.</Rule>
        <FactCards
          cards={[
            { title: "Administration", line1: "keeps records, files and letters" },
            { title: "Purchasing", line1: "buys goods and materials from suppliers" },
            { title: "Marketing", line1: "finds customers and sells the products" },
            { title: "Finances", line1: "manages the money of the business" },
            { title: "Public relations", line1: "builds a good image with the public" },
          ]}
          aria="Administration: keeps records, files and letters. Purchasing: buys goods and materials from suppliers. Marketing: finds customers and sells the products. Finances: manages the money of the business. Public relations: builds a good image with the public."
        />
        <Worked
          title="Name the function"
          steps={[
            "A clerk files the invoices and answers the letters: administration.",
            "A buyer orders flour from a supplier at a good price: purchasing.",
            "A person designs a poster and a social media post to attract buyers: marketing.",
          ]}
        />
        <Mistake>Thinking that only production matters. A business that makes a good product but keeps no records or finds no customers cannot survive.</Mistake>
      </>,
    ),
  },
  {
    title: "The other four functions",
    content: slide(
      <>
        <Rule>Human resources recruits, trains, pays and looks after the workers. Production makes the product or provides the service. General management plans, organises, leads and controls all the other functions so that they work towards the same goals. Risk management finds the risks that could harm the business, such as theft, fire and accidents, and reduces them.</Rule>
        <FactCards
          cards={[
            { title: "Human resources", line1: "recruits, trains and pays the workers" },
            { title: "Production", line1: "makes the product or provides the service" },
            { title: "General management", line1: "plans, organises, leads and controls" },
            { title: "Risk management", line1: "finds risks and reduces them" },
          ]}
          aria="Human resources: recruits, trains and pays the workers. Production: makes the product or provides the service. General management: plans, organises, leads and controls. Risk management: finds risks and reduces them."
        />
        <Worked
          title="Name the function"
          steps={[
            "The owner interviews a new baker and arranges a training day: human resources.",
            "The bakers mix and bake the bread: production.",
            "The owner buys insurance and installs a fire extinguisher: risk management.",
          ]}
        />
        <Mistake>Thinking that human resources only means hiring. It also covers training, pay and the wellbeing of workers.</Mistake>
      </>,
    ),
  },
  {
    title: "How the functions work together",
    content: slide(
      <>
        <Rule>Each function has its own tasks, but the functions depend on each other and share the same goals. In a small business one person may carry out several functions. In a large business each function may have its own department. Remember that the role of every function matters, and that a problem in one function affects the others.</Rule>
        <FactCards
          cards={[
            { title: "Dependence", line1: "the functions need each other" },
            { title: "Small business", line1: "one person, several functions" },
            { title: "Large business", line1: "a department for each function" },
          ]}
          aria="Dependence: the functions need each other. Small business: one person, several functions. Large business: a department for each function."
        />
        <NumberedSteps steps={["Marketing attracts the customer", "Purchasing buys the flour", "Production bakes the bread", "Administration records the order", "Finances collects the payment"].map((text) => ({ text }))} tone="amber" label="A bakery order passing through five functions" />
        <Worked
          title="Follow a bakery order through the business"
          steps={[
            "Marketing attracts a customer who orders ten loaves.",
            "Purchasing makes sure that there is enough flour, and production bakes the bread.",
            "Administration records the order and finances collects the payment.",
          ]}
        />
        <Mistake>Treating the functions as separate islands. If purchasing is late, production stops and marketing cannot deliver.</Mistake>
      </>,
    ),
  },
  {
    title: "Which function does the task belong to?",
    content: slide(
      <>
        <Rule>To decide which function a task belongs to, ask what the task is for. Is it for keeping records, buying, selling, handling money, the image of the business, people, making things, directing the whole business or protecting it against loss? Public relations builds the image of the business and answers to the public, while marketing aims at selling products.</Rule>
        <FactCards
          cards={[
            { title: "Handling a complaint politely in public", line1: "public relations" },
            { title: "Drawing up the monthly budget", line1: "finances" },
            { title: "Setting the goals for next year", line1: "general management" },
            { title: "Locking the stock room at night", line1: "risk management" },
          ]}
          aria="Handling a complaint politely in public: public relations. Drawing up the monthly budget: finances. Setting the goals for next year: general management. Locking the stock room at night: risk management."
        />
        <Worked
          title="Sort three tasks"
          steps={[
            "Sending a thank-you note to a sponsor builds the image of the business: public relations.",
            "Paying the workers on Friday is about money and people: finances and human resources.",
            "Checking that the machine is safe for the workers reduces risk: risk management.",
          ]}
        />
        <Mistake>Mixing up public relations and marketing. Marketing sells products and public relations looks after the image of the business.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which function keeps the records and files?</>,
          <>Which function buys goods from suppliers?</>,
          <>Which function plans, organises, leads and controls?</>,
          <>Which function reduces the risk of theft and fire?</>,
        ]}
        answers={[
          <>Administration.</>,
          <>Purchasing.</>,
          <>General management.</>,
          <>Risk management.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "A clerk files the invoices and answers letters. Which function is this?",
    options: ["Purchasing", "Marketing", "Administration", "Production"],
    answer: "Administration",
    explanation: "Administration keeps records and handles documents and letters.",
  },
  {
    prompt: "A buyer orders flour from a supplier at a fair price. Which function is this?",
    options: ["Purchasing", "Administration", "Public relations", "Finances"],
    answer: "Purchasing",
    explanation: "Purchasing buys goods and materials from suppliers.",
  },
  {
    prompt: "A business designs a poster to attract new customers. Which function does this?",
    options: ["Purchasing", "Risk management", "Administration", "Marketing"],
    answer: "Marketing",
    explanation: "Marketing finds customers and promotes the products.",
  },
  {
    prompt: "Which function draws up the budget and pays the accounts?",
    options: ["Production", "Finances", "Human resources", "Public relations"],
    answer: "Finances",
    explanation: "Finances manages the money of the business.",
  },
  {
    prompt: "A business sends a thank-you note to a sponsor and answers a complaint politely. Which function is this?",
    options: ["Marketing", "Production", "Public relations", "Purchasing"],
    answer: "Public relations",
    explanation: "Public relations builds and protects the image of the business.",
  },
  {
    prompt: "An owner interviews a new worker and arranges training. Which function is this?",
    options: ["Human resources", "Administration", "Risk management", "Purchasing"],
    answer: "Human resources",
    explanation: "Human resources recruits, trains, pays and looks after workers.",
  },
  {
    prompt: "The bakers mix and bake the bread for sale. Which function is this?",
    options: ["Marketing", "Finances", "Administration", "Production"],
    answer: "Production",
    explanation: "Production makes the product or provides the service.",
  },
  {
    prompt: "Which function makes sure that all the other functions work towards the same goals?",
    options: ["Purchasing", "General management", "Administration", "Public relations"],
    answer: "General management",
    explanation: "General management plans, organises, leads and controls the functions.",
  },
  {
    prompt: "An owner buys insurance and fits a fire extinguisher. Which function is this?",
    options: ["Finances", "Marketing", "Risk management", "Human resources"],
    answer: "Risk management",
    explanation: "Risk management finds risks such as fire and theft and reduces them.",
  },
  {
    prompt: "What happens when purchasing is late with the flour for a bakery?",
    options: ["Production stops and orders are late", "Marketing becomes easier", "The risks disappear", "Administration is not needed"],
    answer: "Production stops and orders are late",
    explanation: "The functions depend on each other, so a delay in one affects the others.",
  },
  {
    prompt: "In a small business one person often carries out several functions. What does this show?",
    options: ["Small businesses have no functions", "Only large firms need marketing", "Just one function is enough", "Every business needs the functions"],
    answer: "Every business needs the functions",
    explanation: "Every business must carry out the functions, whether in departments or by one owner.",
  },
  {
    prompt: "Which function aims at selling products, as opposed to building the image of the business?",
    options: ["Public relations", "Marketing", "Administration", "Risk management"],
    answer: "Marketing",
    explanation: "Marketing sells products and public relations looks after the image.",
  },
  {
    prompt: "How many functions of a business are named in this lesson?",
    options: ["Five", "Seven", "Nine", "Twelve"],
    answer: "Nine",
    explanation: "The nine functions are administration, purchasing, marketing, finances, public relations, human resources, production, general management and risk management.",
  },
  {
    prompt: "Why is every function important to a business?",
    options: ["The business suffers if one is neglected", "Only production earns money", "Most functions can be ignored", "They all do the same task"],
    answer: "The business suffers if one is neglected",
    explanation: "Each function has its own role, and the functions depend on each other.",
  },
];

const FunctionsOfABusiness = () => (
  <CapsSubjectTopic
    title="Functions of a Business"
    subtitle="Administration, purchasing, marketing, finances, public relations, human resources, production, general management and risk management"
    learnSteps={learnSteps}
    task="gr9-functions-of-a-business-t3"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default FunctionsOfABusiness;
