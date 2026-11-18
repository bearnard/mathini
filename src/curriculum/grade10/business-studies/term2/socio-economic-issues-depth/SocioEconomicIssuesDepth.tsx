import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import { formatRand } from '../../../../../components/diagrams/maths/mathsHelpers';
import * as b from '../../../../../components/diagrams/business10/bus10';

// Numbers come from bus10.ts (tested in bus10.test.ts and g10BsGaps.test.ts). All data are imaginary teaching data; Acts are named only as areas of law.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Piracy and counterfeiting',
    content: slide(
      <>
        <Rule>Piracy is the illegal copying and selling of protected work, such as music, films and software. Counterfeiting is making fake goods and selling them under another maker&rsquo;s brand, such as a fake brand of shoes. Both are against the law. They take sales from honest businesses, cost jobs and tax income, and fake goods can be unsafe for buyers.</Rule>
        <InfoTable
          cols={[{ title: 'Issue', w: 28 }, { title: 'What happens', w: 40 }, { title: 'Effect on business', w: 32 }]}
          rows={[
            ['Piracy', 'Illegal copies of films,\nmusic and software', 'Lost sales and jobs'],
            ['Counterfeiting', 'Fake goods sold under\na real brand', 'Lost sales, damaged\nbrand, unsafe goods'],
          ]}
          aria="A table of piracy and counterfeiting. Piracy: illegal copies of films, music and software, causing lost sales and jobs. Counterfeiting: fake goods sold under a real brand, causing lost sales, a damaged brand and unsafe goods."
        />
        <Worked
          title="Name the issue"
          steps={[
            'A stall sells burnt copies of a new film: piracy.',
            'A market sells shoes that carry a famous label but are made by someone else: counterfeiting.',
            'A business can respond by reporting the sellers, protecting its brand and teaching customers to buy the real product.',
          ]}
        />
        <Mistake>Believing that buying a cheap copy only affects a large company. Honest small businesses also lose sales, and fake goods can be dangerous.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gambling and pyramid schemes',
    content: slide(
      <>
        <Rule>Gambling is risking money on a chance outcome, and it can lead to debt and addiction; it is controlled by law. A pyramid scheme promises high returns for recruiting new members who each pay to join. The money of new members pays the older ones, and the scheme collapses when no new members can be found. Pyramid schemes are illegal.</Rule>
        <InfoTable
          cols={[{ title: 'Level', w: 18 }, { title: 'Members needed', w: 40 }, { title: 'Growth', w: 42 }]}
          rows={[1, 2, 3, 10].map((n) => [String(n), b.nbsp(String(b.level(3, n))), n === 10 ? 'far too many' : '3 times more'])}
          aria={`A table of a pyramid scheme in which each member must recruit 3 new members. Level 1 needs 3, level 2 needs 9, level 3 needs 27 and level 10 needs ${b.level(3, 10)} new members. The number needed grows too fast to continue.`}
        />
        <Worked
          title="Why a pyramid scheme must collapse"
          steps={[
            'Each member must recruit 3 new members, so the numbers are 3, 9, 27, 81 and so on (3 times as many at each level).',
            `By level 10 the scheme needs ${b.nbsp(String(b.level(3, 10)))} new members, and by level 17 more than ${b.nbsp(String(b.SA_POPULATION / 1000000n))} million, which is about all South Africans.`,
            'So most members at the bottom cannot recruit anyone and lose their money.',
          ]}
        />
        <Mistake>Thinking that a pyramid scheme is a business. No product or service creates the profit; the money comes only from new members.</Mistake>
      </>,
    ),
  },
  {
    title: 'Crime, violence and strikes',
    content: slide(
      <>
        <Rule>Crime and violence, such as theft, fraud and robbery, raise a business&rsquo;s costs through losses, security and insurance, and they frighten customers and staff. Strikes stop or slow work, so production and income fall, although they can also bring talks about workers&rsquo; demands. Businesses can respond by improving security, training staff and talking to workers and the community.</Rule>
        <FactCards
          cards={[
            { title: 'Crime', line1: 'theft and fraud cost', line2: 'money and trust' },
            { title: 'Violence', line1: 'frightens staff', line2: 'and customers' },
            { title: 'Strikes', line1: 'stop production and', line2: 'income' },
            { title: 'Response', line1: 'security, training and', line2: 'dialogue' },
          ]}
          aria="Crime, violence and strikes. Crime: theft and fraud cost money and trust. Violence: frightens staff and customers. Strikes: stop production and income. Response: security, training and dialogue."
        />
        <Worked
          title="Link the issue to a cost"
          steps={[
            'Theft from a shop: lost stock and the cost of a guard and cameras.',
            'A strike at a factory: no output for the days of the strike, so late deliveries and lost sales.',
            'A business that talks to its workers early may avoid a strike.',
          ]}
        />
        <Mistake>Treating these issues as only a government problem. Businesses are affected and can take action too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Inclusivity and business responses',
    content: slide(
      <>
        <Rule>Inclusivity means that all people, whatever their gender, race, age, disability or background, can take part and benefit. A business can support inclusivity by fair hiring, accessible premises, equal pay and training for those who were disadvantaged. Businesses also respond to the issues in this lesson through social responsibility projects and by following the law.</Rule>
        <InfoTable
          cols={[{ title: 'Issue', w: 34 }, { title: 'A business response', w: 66 }]}
          rows={[
            ['Unemployment, poverty', 'Create jobs, offer learnerships'],
            ['Crime, fraud', 'Security, training, controls'],
            ['Piracy, counterfeiting', 'Protect the brand, report sellers'],
            ['Exclusion', 'Fair hiring, accessible premises'],
          ]}
          aria="A table of issues and business responses. Unemployment and poverty: create jobs and offer learnerships. Crime and fraud: security, training and controls. Piracy and counterfeiting: protect the brand and report sellers. Exclusion: fair hiring and accessible premises."
        />
        <Worked
          title="Choose a response"
          steps={[
            'A shop with steps at the entrance cannot serve customers who use wheelchairs: add a ramp.',
            'A company that wants to lower unemployment in its town: run a learnership programme.',
            'A brand that finds fakes of its product: report them and tell customers how to spot the real one.',
          ]}
        />
        <Mistake>Giving a response that does not match the issue. Read the problem first, then choose an action that deals with its cause.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between piracy and counterfeiting?</>,
          <>Why must a pyramid scheme collapse?</>,
          <>Name one effect of crime on a business.</>,
          <>Give one way in which a business can support inclusivity.</>,
        ]}
        answers={[
          <>Piracy is illegal copying of protected work; counterfeiting is selling fake goods under a real brand.</>,
          <>It needs more and more new members, and the numbers grow too fast.</>,
          <>For example lost stock or higher security costs.</>,
          <>Fair hiring, accessible premises or equal pay.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is piracy?",
    options: ["Selling goods at a market stall", "Opening a branch in another country", "Illegal copying and selling of work", "Paying a licence fee to the owner"],
    answer: "Illegal copying and selling of work",
    explanation: "Films, music and software are often pirated.",
  },
  {
    prompt: "What is counterfeiting?",
    options: ["Making fakes of a real brand", "Making goods for a paying client", "Importing goods in a legal way", "Paying taxes on the goods made"],
    answer: "Making fakes of a real brand",
    explanation: "Counterfeit goods copy a real maker's brand.",
  },
  {
    prompt: "Which is an effect of counterfeiting on a business?",
    options: ["More sales for the real brand", "Lower costs for the real brand", "No effect at all", "Lost sales and a damaged brand"],
    answer: "Lost sales and a damaged brand",
    explanation: "Fake goods take sales and can harm the name of the brand.",
  },
  {
    prompt: "A stall sells burnt copies of a new film. Which issue is this?",
    options: ["Counterfeiting", "Piracy", "Gambling", "Inclusivity"],
    answer: "Piracy",
    explanation: "Illegal copying of a film is piracy.",
  },
  {
    prompt: "What is a pyramid scheme?",
    options: ["A scheme that sells real goods fairly", "Older members are paid by new members", "A scheme run by the national government", "A scheme that never needs new members"],
    answer: "Older members are paid by new members",
    explanation: "No product creates profit, only recruits.",
  },
  {
    prompt: "Why must a pyramid scheme collapse?",
    options: ["It sells too many goods", "It pays too little tax", "It has too few rules", "It needs ever more new members"],
    answer: "It needs ever more new members",
    explanation: "The numbers needed grow too fast.",
  },
  {
    prompt: "In a pyramid scheme each member must recruit 3 people. How many are needed at level 3?",
    options: ["27", "9", "81", "6"],
    answer: "27",
    explanation: "Each level has 3 times as many: 3 x 3 x 3 = 27 new members at level 3.",
  },
  {
    prompt: "In a pyramid scheme each member must recruit 3 people. How many are needed at level 4?",
    options: ["12", "27", "81", "243"],
    answer: "81",
    explanation: "Level 4 needs three times as many as level 3: 27 x 3 = 81 new members.",
  },
  {
    prompt: "Is a pyramid scheme legal in South Africa?",
    options: ["Yes, if the members agree", "Yes, if it pays taxes", "Yes, for small groups", "No, it is illegal"],
    answer: "No, it is illegal",
    explanation: "Pyramid schemes are against the law.",
  },
  {
    prompt: "Which is a risk of gambling?",
    options: ["Guaranteed income", "Debt and addiction", "Lower prices", "Fewer taxes"],
    answer: "Debt and addiction",
    explanation: "Gambling is a risk of losing money.",
  },
  {
    prompt: "Which is an effect of theft on a business?",
    options: ["Lost stock and higher security costs", "Higher profits for the year", "Lower insurance for the shop", "More customers in the shop"],
    answer: "Lost stock and higher security costs",
    explanation: "Crime raises costs.",
  },
  {
    prompt: "How does a strike affect a factory?",
    options: ["Production rises", "Costs vanish", "Production and income fall", "Customers increase"],
    answer: "Production and income fall",
    explanation: "Work stops or slows.",
  },
  {
    prompt: "What does inclusivity mean in a business?",
    options: ["Only managers can take part", "Only young people may work", "All people can take part and benefit", "Only one group is hired"],
    answer: "All people can take part and benefit",
    explanation: "Inclusivity covers gender, race, age and disability.",
  },
  {
    prompt: "Which action supports inclusivity?",
    options: ["Adding a ramp for wheelchair users", "Hiring only friends", "Hiding job adverts", "Paying some staff less for the same work"],
    answer: "Adding a ramp for wheelchair users",
    explanation: "Accessible premises include more customers and staff.",
  },
];

const SocioEconomicIssuesDepth = () => (
  <CapsSubjectTopic
    title="Contemporary Socio-economic Issues in Depth"
    subtitle="Piracy, counterfeiting, gambling, pyramid schemes, crime, violence, strikes and inclusivity"
    learnSteps={learnSteps}
    task="gr10-socio-economic-issues-depth-t2"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={10}
  />
);

export default SocioEconomicIssuesDepth;
