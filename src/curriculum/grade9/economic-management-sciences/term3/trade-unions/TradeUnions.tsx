import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "What is the main purpose of a trade union?",
    options: ["To set the wages for all employers", "To collect the tax of workers", "To lend money to the workers at a low rate", "To protect the interests of workers"],
    answer: "To protect the interests of workers",
    explanation: "A union speaks for its members on pay, working hours and safety.",
  },
  {
    prompt: "Which document says that workers may form and join a union?",
    options: ["The Companies Act", "The Constitution", "The National Credit Act", "The Road Traffic Act"],
    answer: "The Constitution",
    explanation: "Section 23 of the Constitution gives every worker the right to form and join a trade union.",
  },
  {
    prompt: "Why do workers join a union rather than ask on their own?",
    options: ["Together they have more power to bargain", "A union can close down the business", "A union pays the wages of its members", "Members cannot be dismissed for any reason"],
    answer: "Together they have more power to bargain",
    explanation: "One worker has little bargaining power. Workers together have more.",
  },
  {
    prompt: "What is collective bargaining?",
    options: ["Each worker negotiates on their own now", "The union negotiates for all its members", "The state alone sets the wages of all workers", "The employer sets pay without talks"],
    answer: "The union negotiates for all its members",
    explanation: "Collective bargaining is negotiation by the union on behalf of the group of workers.",
  },
  {
    prompt: "What is a collective agreement?",
    options: ["A list of the members of a union", "A law that parliament has just passed", "A strike notice sent by the union to staff", "Terms of work that both sides agree on"],
    answer: "Terms of work that both sides agree on",
    explanation: "The agreement sets down pay, hours and leave, and both sides accept it.",
  },
  {
    prompt: "What is a shop steward?",
    options: ["A member elected to speak for workers", "The owner of the business itself", "An inspector of shops for the state", "A person who sells goods in a shop here"],
    answer: "A member elected to speak for workers",
    explanation: "Shop stewards are elected by the union members where they work.",
  },
  {
    prompt: "Wages and working hours are being negotiated. Which step comes first?",
    options: ["A strike by all the workers", "Arbitration by a neutral person", "A lock-out by the employer", "Negotiation between the sides"],
    answer: "Negotiation between the sides",
    explanation: "The two sides first try to agree. Only if that fails does the dispute go on to the next steps.",
  },
  {
    prompt: "What does the CCMA do?",
    options: ["Collects the income tax of workers", "Sets the price of goods", "Helps to settle labour disputes", "Pays the wages of all strikers"],
    answer: "Helps to settle labour disputes",
    explanation: "The Commission for Conciliation, Mediation and Arbitration helps unions and employers to settle disputes.",
  },
  {
    prompt: "What happens in conciliation?",
    options: ["A neutral person decides who is right now", "A neutral person helps the sides agree", "The workers all stop work together", "The employer sends workers home"],
    answer: "A neutral person helps the sides agree",
    explanation: "A conciliator helps. The two sides still decide for themselves.",
  },
  {
    prompt: "What happens in arbitration?",
    options: ["A neutral person helps the sides talk", "A neutral person decides the dispute", "The workers vote to go on strike", "The employer makes a final offer"],
    answer: "A neutral person decides the dispute",
    explanation: "An arbitrator hears both sides and makes a decision.",
  },
  {
    prompt: "What is a strike?",
    options: ["The employer stops the workers working", "A meeting of the union and the employer", "Workers stop work to pressure the employer", "A decision made by a neutral person later on"],
    answer: "Workers stop work to pressure the employer",
    explanation: "A strike is a refusal by workers to work. When the employer stops the work, it is a lock-out.",
  },
  {
    prompt: "What is a lock-out?",
    options: ["Workers stop working together", "The union closes its own office", "The employer stops the workers working", "Workers lose the right to join a union"],
    answer: "The employer stops the workers working",
    explanation: "A lock-out is the employer's way of putting pressure on workers.",
  },
  {
    prompt: "Which is a cost of a strike for the workers who take part?",
    options: ["They get double pay for the period", "They usually lose pay while on strike", "The employer pays them for the strike", "There is no cost of any kind to them"],
    answer: "They usually lose pay while on strike",
    explanation: "Workers who do not work are usually not paid, so a strike has a cost for them too.",
  },
  {
    prompt: "Which is a cost of a long strike for the economy?",
    options: ["More output and more jobs", "Lower prices for all goods", "A bigger tax income for the state", "Less output and fewer jobs"],
    answer: "Less output and fewer jobs",
    explanation: "When businesses stop producing, output falls, and some firms may cut jobs.",
  },
];

const TradeUnions = () => (
  <CapsSubjectTopic
    title="Trade Unions"
    subtitle="The role of a union, collective bargaining, settling disputes, and strikes"
    learnSteps={learnSteps}
    task="gr9-trade-unions-t3"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default TradeUnions;
