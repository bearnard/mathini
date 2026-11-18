import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { ProfitSplit } from '../../../../../components/diagrams/ems/Ems8bPictures';
import { randNb } from '../../../../../components/diagrams/ems/emsHelpers';
import { CC_NOTE, FORMS, OWNERSHIP_ROLES, SHARE_NAMES, limitedLiability, partnerShares } from '../../../../../components/diagrams/ems/ems8c-helpers';

// Every statement and amount comes from ems8c-helpers.ts (tested in ems8c-helpers.test.ts and g8EmsT3.test.ts). Characteristics level only: no legal detail.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const split = partnerShares(60000, [3, 2]);

export const learnSteps: LearnStep[] = [
  {
    title: 'Sole traders and partnerships',
    content: slide(
      <>
        <Rule>A sole trader is a business owned and run by one person. The owner keeps all the profit, makes all the decisions and is personally responsible for all the debts. A partnership has two or more partners who share the ownership, the work and the profit, usually in the ratio agreed in a partnership agreement. Partners are also personally responsible for the debts.</Rule>
        <ProfitSplit profit={60000} labels={['Partner A', 'Partner B']} amounts={split} ratio={[3, 2]} />
        <Worked
          title="Share a profit of R60 000 in the ratio 3 : 2"
          steps={[
            `Total parts: 3 + 2 = 5, so one part is R60 000 ÷ 5 = ${randNb(12000)}.`,
            `Partner A gets 3 parts = ${randNb(split[0])}; Partner B gets 2 parts = ${randNb(split[1])}.`,
            `Check: ${randNb(split[0])} + ${randNb(split[1])} = ${randNb(split[0] + split[1])}, the whole profit.`,
          ]}
        />
        <Mistake>Dividing the profit equally when the partners agreed on another ratio. Use the agreed ratio.</Mistake>
      </>,
    ),
  },
  {
    title: 'Close corporations and companies',
    content: slide(
      <>
        <Rule>A close corporation ({SHARE_NAMES.cc}) is a business owned by its members and is a separate legal person, so its members have limited liability. {CC_NOTE}. A private company ({SHARE_NAMES.private}) is owned by shareholders and its shares are not sold to the public. A public company ({SHARE_NAMES.public}) is owned by shareholders and its shares can be bought by the public, so it can raise the most capital. Shareholders have limited liability.</Rule>
        <FactCards
          cards={[
            { title: 'Close corporation (CC)', line1: 'members own it; limited liability;', line2: 'no new CCs since 1 May 2011' },
            { title: 'Private company (Pty) Ltd', line1: 'shareholders own it; shares are', line2: 'not sold to the public' },
            { title: 'Public company Ltd', line1: 'shares can be bought by the', line2: 'public; the most capital' },
            { title: 'Limited liability', line1: 'owners are not personally', line2: 'responsible for the debts' },
          ]}
          aria="Close corporations and companies. A close corporation: the members own it, it has limited liability, and no new close corporations can be registered since 1 May 2011. A private company: the shareholders own it and its shares are not sold to the public. A public company: its shares can be bought by the public and it can raise the most capital. With limited liability the owners are not personally responsible for the debts."
        />
        <Worked
          title="Which form?"
          steps={[
            `Limited liability: ${FORMS.map((f) => `${f.form} (${limitedLiability(f.form) ? 'yes' : 'no'})`).join(', ')}.`,
            'A business whose shares are traded on a stock exchange is a public company.',
            'Existing close corporations continue to trade, which is why we still study them.',
          ]}
        />
        <Mistake>Saying that a sole trader has limited liability. A sole trader and the partners are personally responsible for the debts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Advantages and disadvantages',
    content: slide(
      <>
        <Rule>Each form has advantages and disadvantages. A sole trader is simple and cheap to start but has limited capital and unlimited personal liability. A partnership has more capital and skills but partners can disagree and are personally responsible. Companies have limited liability and can raise more capital but are more expensive to set up and have more rules.</Rule>
        <FactCards
          cards={[
            { title: 'Sole trader', line1: 'easy to start, keeps all profit;', line2: 'limited capital, personal risk' },
            { title: 'Partnership', line1: 'more capital and skills;', line2: 'disagreements, personal risk' },
            { title: 'Company', line1: 'limited liability, more capital;', line2: 'costly to set up, more rules' },
          ]}
          aria="Advantages and disadvantages. Sole trader: easy to start and keeps all the profit, but has limited capital and personal risk. Partnership: more capital and skills, but there can be disagreements and personal risk. Company: limited liability and more capital, but it is costly to set up and has more rules."
        />
        <Worked
          title="Advise a friend"
          steps={[
            'A friend wants to start a small hair salon alone with little money: a sole trader is the simplest.',
            'Two friends want to start a bakery together: a partnership shares the work and the capital.',
            'A business that needs a lot of capital to grow could become a company.',
          ]}
        />
        <Mistake>Saying that one form is always best. The best form depends on the size, the capital and the risk.</Mistake>
      </>,
    ),
  },
  {
    title: 'Jobs and natural resources',
    content: slide(
      <>
        <Rule>Businesses play a role in sustainable job creation: {OWNERSHIP_ROLES.jobs}. They also have a role in the sustainable use of natural resources: {OWNERSHIP_ROLES.resources}. Sustainable means that something can continue for the future without being used up.</Rule>
        <FactCards
          cards={[
            { title: 'Sustainable jobs', line1: 'jobs that last because the', line2: 'business keeps trading' },
            { title: 'Sustainable resources', line1: 'use water, energy and materials', line2: 'so they are not used up' },
            { title: 'All forms', line1: 'every form of ownership can', line2: 'create jobs and protect resources' },
          ]}
          aria="Jobs and natural resources. Sustainable jobs last because the business keeps trading. Sustainable use of resources means using water, energy and materials so that they are not used up. Every form of ownership can create jobs and protect resources."
        />
        <Worked
          title="A sustainable business"
          steps={[
            'A sole trader who recycles packaging uses fewer natural resources.',
            'A growing partnership hires more staff, which creates jobs.',
            'A public company can report on how it uses water and energy, so its shareholders can see its impact.',
          ]}
        />
        <Mistake>Thinking that only big companies create jobs. Sole traders and partnerships do too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the form of ownership that has a single owner.</>,
          <>Find the first partner's share of R60 000 divided 3 : 2.</>,
          <>Which forms have limited liability?</>,
          <>Why can no new close corporations be registered?</>,
        ]}
        answers={[
          <>A sole trader.</>,
          <>{randNb(split[0])}.</>,
          <>Close corporations, private companies and public companies.</>,
          <>The law changed on 1 May 2011; existing ones continue.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which form of business is owned by only one person?",
    options: ["A partnership", "A public company", "A sole trader", "A close corporation"],
    answer: "A sole trader",
    explanation: "A sole trader is owned and run by one person.",
  },
  {
    prompt: "What is a partnership?",
    options: ["A business owned by two or more partners", "A business owned by one person", "A business owned by the government", "A business with shares on the stock exchange"],
    answer: "A business owned by two or more partners",
    explanation: "Partners share the ownership, work and profit.",
  },
  {
    prompt: "Two partners share R60 000 of profit 3 : 2. How much does the first partner receive?",
    options: ["R24 000", "R30 000", "R12 000", "R36 000"],
    answer: "R36 000",
    explanation: "One part is 60 000 ÷ 5 = 12 000, so 3 parts are 36 000.",
  },
  {
    prompt: "A profit of R90 000 is shared 2 : 1 between two partners. What does the partner with one part get?",
    options: ["R60 000", "R30 000", "R45 000", "R90 000"],
    answer: "R30 000",
    explanation: "90 000 ÷ 3 = 30 000 per part.",
  },
  {
    prompt: "A profit of R40 000 is shared equally by two partners. What does each get?",
    options: ["R40 000", "R20 000", "R10 000", "R80 000"],
    answer: "R20 000",
    explanation: "40 000 ÷ 2 = 20 000.",
  },
  {
    prompt: "Who is personally responsible for the debts of a sole trader?",
    options: ["The government", "The customers", "Nobody", "The owner"],
    answer: "The owner",
    explanation: "A sole trader has unlimited personal liability.",
  },
  {
    prompt: "What does limited liability mean?",
    options: ["Owners are not personally responsible for the debts", "Owners must pay all the debts", "The business can borrow no money", "The business is limited to one product"],
    answer: "Owners are not personally responsible for the debts",
    explanation: "With limited liability the owners' own property is protected.",
  },
  {
    prompt: "Which of these forms has limited liability?",
    options: ["A sole trader", "A partnership", "A private company", "A street trader on her own"],
    answer: "A private company",
    explanation: "Companies and close corporations have limited liability.",
  },
  {
    prompt: "Which form has shares that can be bought by the public?",
    options: ["A private company", "A sole trader", "A partnership", "A public company"],
    answer: "A public company",
    explanation: "A public company sells shares to the public.",
  },
  {
    prompt: "What does (Pty) Ltd after a business name show?",
    options: ["A public company", "A private company", "A partnership", "A sole trader"],
    answer: "A private company",
    explanation: "Pty Ltd stands for a private company.",
  },
  {
    prompt: "What is true of close corporations in South Africa since 1 May 2011?",
    options: ["No new ones can be registered", "All must close at once", "Only the government may start one", "They may now sell shares to the public"],
    answer: "No new ones can be registered",
    explanation: "Existing close corporations continue to trade.",
  },
  {
    prompt: "Which form can raise the most capital?",
    options: ["A sole trader", "A partnership", "A public company", "A street trader"],
    answer: "A public company",
    explanation: "Shares sold to many members of the public bring in a lot of capital.",
  },
  {
    prompt: "Which is an advantage of being a sole trader?",
    options: ["It has the most capital", "It has limited liability", "It is simple and cheap to start", "It shares risk with partners"],
    answer: "It is simple and cheap to start",
    explanation: "A sole trader needs few rules and little money to begin.",
  },
  {
    prompt: "How do businesses help the sustainable use of natural resources?",
    options: ["By not using them up", "By using as much as possible", "By ignoring all the waste", "By avoiding all production"],
    answer: "By not using them up",
    explanation: "Sustainable use means resources last for the future.",
  },
];

const FormsOfOwnership = () => (
  <CapsSubjectTopic
    title="Forms of Ownership"
    subtitle="Sole traders, partnerships, close corporations, private and public companies, jobs and resources"
    learnSteps={learnSteps}
    task="gr8-forms-of-ownership-t3"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default FormsOfOwnership;
