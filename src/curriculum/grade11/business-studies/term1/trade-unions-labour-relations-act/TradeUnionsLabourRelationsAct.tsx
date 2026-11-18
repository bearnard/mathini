import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The Labour Relations Act: nature and purpose',
    content: slide(
      <>
        <Rule>The Labour Relations Act (LRA) is the law that governs the relationship between employers, employees and trade unions. Its purpose is to promote fair labour practices, to encourage collective bargaining and to provide orderly ways to settle disputes, including the right to strike and the employer's right to lock out workers.</Rule>
        <FactCards
          cards={[
            { title: 'Parties', line1: 'employer, employees', line2: 'and trade unions' },
            { title: 'Purpose', line1: 'fair labour practices', line2: 'for everyone' },
            { title: 'Bargaining', line1: 'talks about pay and', line2: 'working conditions' },
            { title: 'Disputes', line1: 'settled in an', line2: 'orderly way' },
          ]}
          aria="The Labour Relations Act. Parties: the employer, employees and trade unions. Purpose: fair labour practices for everyone. Bargaining: talks about pay and working conditions. Disputes: settled in an orderly way."
        />
        <Worked
          title="Why does the Act matter?"
          steps={[
            'A dispute over pay arises between a factory and its workers.',
            'The Act gives both sides a procedure to follow instead of leaving the problem to chance.',
            'Fair treatment and orderly settlement protect the workers and the business.',
          ]}
        />
        <Mistake>Thinking that the Act only protects workers. It sets rules for employers and employees, so both sides have rights and duties.</Mistake>
      </>,
    ),
  },
  {
    title: 'What is a trade union, and where did unions come from?',
    content: slide(
      <>
        <Rule>A trade union is an organisation of workers that protects and promotes the interests of its members. Unions grew up where large numbers of people worked together in factories and mines. In South Africa, many black workers were not legally recognised as employees with union rights until the late 1970s, and a large federation of unions, COSATU, was formed in 1985.</Rule>
        <FactCards
          cards={[
            { title: 'Union', line1: 'workers join together', line2: 'to protect their interests' },
            { title: 'Origin', line1: 'factories and mines', line2: 'with many workers' },
            { title: 'Struggle', line1: 'recognition for all', line2: 'workers came late' },
            { title: 'Today', line1: 'unions are formed under', line2: 'the Act' },
          ]}
          aria="Trade unions. A union is workers joining together to protect their interests. Unions began in factories and mines with many workers. In South Africa, recognition for all workers came late. Today unions are formed and recognised under the Labour Relations Act."
        />
        <Worked
          title="Why workers join together"
          steps={[
            'One worker who asks for better pay may be ignored.',
            'A union speaks for all its members together.',
            'This gives workers more bargaining power.',
          ]}
        />
        <Mistake>Thinking that a trade union is run by the employer. It belongs to its worker members.</Mistake>
      </>,
    ),
  },
  {
    title: 'Roles and functions of trade unions',
    content: slide(
      <>
        <Rule>A trade union bargains with the employer for better pay and working conditions, represents members who have a grievance or are facing a disciplinary hearing, and informs members of their rights. Unions also work for safe workplaces, and in a workplace forum the employer and employees meet to consult on matters that affect the workplace.</Rule>
        <FactCards
          cards={[
            { title: 'Bargain', line1: 'pay, hours and', line2: 'conditions' },
            { title: 'Represent', line1: 'help members with', line2: 'grievances' },
            { title: 'Inform', line1: 'teach members', line2: 'their rights' },
            { title: 'Consult', line1: 'workplace forum with', line2: 'the employer' },
          ]}
          aria="Functions of a trade union. Bargain over pay, hours and conditions. Represent members with grievances. Inform members of their rights. Consult the employer in a workplace forum."
        />
        <Worked
          title="Match the function"
          steps={[
            'A union negotiates a yearly wage increase: bargaining.',
            'A shop steward helps a member at a disciplinary hearing: representation.',
            'A union holds a meeting on safety rights: informing members.',
          ]}
        />
        <Mistake>Thinking that a union only calls strikes. Most of its work is bargaining, representing members and informing them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Strikes, go-slows and lockouts',
    content: slide(
      <>
        <Rule>A strike is when workers together refuse to work to put pressure on the employer. A go-slow is when workers stay at work but deliberately work slowly. A lockout is when the employer stops workers from entering or working in order to put pressure on them. In a dispute the parties should first try to negotiate, and a body such as the CCMA (Commission for Conciliation, Mediation and Arbitration) helps to settle it.</Rule>
        <FactCards
          cards={[
            { title: 'Strike', line1: 'workers stop working', line2: 'together' },
            { title: 'Go-slow', line1: 'workers work', line2: 'deliberately slowly' },
            { title: 'Lockout', line1: 'the employer keeps', line2: 'workers out' },
            { title: 'CCMA', line1: 'helps to settle', line2: 'disputes' },
          ]}
          aria="Industrial action. A strike is workers stopping work together. A go-slow is workers working deliberately slowly. A lockout is the employer keeping workers out. The CCMA helps to settle disputes."
        />
        <Worked
          title="Name the action"
          steps={[
            'All the drivers park their trucks and refuse to work: a strike.',
            'The packers stay at their tables but pack at half speed: a go-slow.',
            'The owner locks the gate so workers cannot come in: a lockout.',
          ]}
        />
        <Mistake>Mixing up a lockout and a strike. In a strike the workers stop; in a lockout the employer stops them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Who owns and controls a trade union?</>,
          <>Which action is it when the owner shuts the gate on workers during a dispute?</>,
          <>Give one function of a trade union.</>,
          <>Which body helps to settle labour disputes?</>,
        ]}
        answers={[
          <>Its worker members.</>,
          <>A lockout.</>,
          <>Bargaining, representing members or informing them.</>,
          <>The CCMA.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which law governs the relationship between employers, employees and unions?",
    options: ["The Companies Act", "The Consumer Protection Act", "The Labour Relations Act", "The Road Traffic Act"],
    answer: "The Labour Relations Act",
    explanation: "The LRA deals with labour relations.",
  },
  {
    prompt: "What is one purpose of the Labour Relations Act?",
    options: ["To promote fair labour practices", "To set the price of goods", "To fix the rate of tax", "To license new companies"],
    answer: "To promote fair labour practices",
    explanation: "The Act promotes fairness and orderly settlement of disputes.",
  },
  {
    prompt: "What is a trade union?",
    options: ["A group of employers who agree on prices", "A state department that inspects firms", "A company that sells tools to workers", "A body formed by workers to protect their interests"],
    answer: "A body formed by workers to protect their interests",
    explanation: "A union belongs to its worker members.",
  },
  {
    prompt: "Why do workers have more bargaining power in a union than alone?",
    options: ["The union owns the business", "The union speaks for all members together", "The union sets the products' prices", "The union pays the wages"],
    answer: "The union speaks for all members together",
    explanation: "Acting together gives workers more power.",
  },
  {
    prompt: "Which of these is a function of a trade union?",
    options: ["Setting the prices of goods", "Bargaining for better pay", "Hiring the managers", "Paying the company's tax"],
    answer: "Bargaining for better pay",
    explanation: "Unions bargain for pay and conditions.",
  },
  {
    prompt: "A union official helps a member at a disciplinary hearing. Which function is this?",
    options: ["Setting prices", "Locking out workers", "Advertising a product", "Representing members"],
    answer: "Representing members",
    explanation: "Representing members with grievances is a union function.",
  },
  {
    prompt: "Which action is it when workers stay at work but deliberately work slowly?",
    options: ["A go-slow", "A strike", "A lockout", "A merger"],
    answer: "A go-slow",
    explanation: "In a go-slow workers do not stop but slow the work down.",
  },
  {
    prompt: "Which action is it when all workers stop work together to pressure the employer?",
    options: ["A lockout", "A takeover", "A strike", "A go-slow"],
    answer: "A strike",
    explanation: "A strike is a collective stoppage of work.",
  },
  {
    prompt: "Which action is it when the employer prevents workers from entering the workplace during a dispute?",
    options: ["A strike", "A go-slow", "A promotion", "A lockout"],
    answer: "A lockout",
    explanation: "A lockout is started by the employer.",
  },
  {
    prompt: "Which body helps to settle labour disputes in South Africa?",
    options: ["The JSE", "The CCMA", "SARS", "SABS"],
    answer: "The CCMA",
    explanation: "The CCMA conciliates, mediates and arbitrates disputes.",
  },
  {
    prompt: "In a workplace forum, who meets to talk about workplace matters?",
    options: ["The employer and the employees", "Only the shareholders", "Only the customers", "Only the suppliers"],
    answer: "The employer and the employees",
    explanation: "A workplace forum is a consultation body for the employer and employees.",
  },
  {
    prompt: "When was the large union federation COSATU formed?",
    options: ["In 1910", "In 1948", "In 1985", "In 2004"],
    answer: "In 1985",
    explanation: "COSATU was formed in 1985.",
  },
  {
    prompt: "Which statement about unions in South Africa's history is correct?",
    options: ["All workers were always recognised", "Unions were never allowed", "Recognition for all workers came late", "Unions began in 2000"],
    answer: "Recognition for all workers came late",
    explanation: "Many black workers were not recognised with union rights until the late 1970s.",
  },
  {
    prompt: "Which is a way a union informs its members?",
    options: ["By holding meetings on their rights", "By setting their wage alone", "By closing the workplace", "By paying the tax for them"],
    answer: "By holding meetings on their rights",
    explanation: "Informing members of their rights is a union function.",
  },
];

const TradeUnionsLabourRelationsAct = () => (
  <CapsSubjectTopic
    title="Trade Unions and the Labour Relations Act"
    subtitle="The LRA, trade unions, strikes, go-slows and lockouts"
    learnSteps={learnSteps}
    task="gr11-trade-unions-labour-relations-act-t1"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default TradeUnionsLabourRelationsAct;
