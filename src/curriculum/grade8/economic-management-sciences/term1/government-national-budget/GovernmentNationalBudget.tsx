import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { BudgetBars, SpheresOfGovernment } from '../../../../../components/diagrams/ems/EmsPictures';
import { randNb } from '../../../../../components/diagrams/ems/emsHelpers';
import { EXPENDITURE, LEVELS, LIFESTYLES, TAXES, VAT_RATE, budgetResult, priceInclVat, vatOn } from '../../../../../components/diagrams/ems/ems8a-helpers';

// Every amount comes from ems8a-helpers.ts (tested in ems8a-helpers.test.ts and g8EmsT1.test.ts). The budget example is a small imaginary one.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const res = budgetResult(500000, 450000);

export const learnSteps: LearnStep[] = [
  {
    title: 'Levels of government and their roles',
    content: slide(
      <>
        <Rule>Government is the body that makes decisions and runs services for a country. South Africa has three levels of government: national, provincial and local. Each level uses resources and supplies services to households and to businesses. Government is a consumer when it buys goods and services, and a producer when it supplies services such as education.</Rule>
        <SpheresOfGovernment />
        <Worked
          title="Match the level to the service"
          steps={[
            `National: ${LEVELS[0].roles}.`,
            `Provincial: ${LEVELS[1].roles}.`,
            `Local: ${LEVELS[2].roles}. Households use these services, and businesses use them too, for example water and electricity.`,
          ]}
        />
        <Mistake>Thinking that government only spends money. It also produces services and buys goods from businesses as a consumer.</Mistake>
      </>,
    ),
  },
  {
    title: 'The National Budget',
    content: slide(
      <>
        <Rule>The National Budget shows the government's expected revenue (income) and expenditure (spending). Revenue comes mainly from taxes. A direct tax is {TAXES.direct}. An indirect tax is {TAXES.indirect}. Expenditure is on services such as {EXPENDITURE.join(', ')}. If revenue is more than expenditure there is a surplus, and if it is less there is a deficit.</Rule>
        <BudgetBars income={500000} spending={450000} aria="A small imaginary budget: revenue of R500 000 against expenditure of R450 000, which is a surplus of R50 000." />
        <Worked
          title="A small imaginary budget and VAT"
          steps={[
            `Revenue ${randNb(500000)} and expenditure ${randNb(450000)}: a ${res.kind} of ${randNb(res.amount)}.`,
            `VAT at ${VAT_RATE}% (the rate used here) on a service priced at ${randNb(200)} is ${randNb(vatOn(200))}.`,
            `The price including VAT is ${randNb(priceInclVat(200))}. The customer pays the VAT in the price, which is why VAT is an indirect tax.`,
          ]}
        />
        <Mistake>Calling income tax an indirect tax. It is a direct tax because it is paid straight to the government by the earner.</Mistake>
      </>,
    ),
  },
  {
    title: 'Growth, inequality and standard of living',
    content: slide(
      <>
        <Rule>The National Budget influences economic growth and can help to redress economic inequalities, for example by spending on education, housing and social grants. The standard of living is how well people live. It depends on lifestyle: self-sufficient, rural or modern. Development can harm the environment, and unemployment lowers the standard of living, so resources should be used productively to keep the environment healthy.</Rule>
        <FactCards
          cards={[
            { title: LIFESTYLES[0].type[0].toUpperCase() + LIFESTYLES[0].type.slice(1), line1: 'households grow or make most of', line2: 'what they need' },
            { title: 'Rural', line1: 'people live outside towns and', line2: 'depend on the land' },
            { title: 'Modern', line1: 'people buy goods and services', line2: 'and use technology' },
            { title: 'Unemployment', line1: 'no income, so a lower', line2: 'standard of living' },
          ]}
          aria="Lifestyles and the standard of living. Self-sufficient: households grow or make most of what they need. Rural: people live outside towns and depend on the land. Modern: people buy goods and services and use technology. Unemployment means no income, so a lower standard of living."
        />
        <Worked
          title="How does the budget redress inequality?"
          steps={[
            'Tax is collected from those who can pay more.',
            'Spending on housing, grants, health and education reaches poorer households.',
            'Better services raise the standard of living and help the economy to grow.',
          ]}
        />
        <Mistake>Saying that a higher standard of living always means more money. It also depends on services, jobs and a healthy environment.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which level of government supplies water and refuse removal?</>,
          <>Government revenue of R500 000 and expenditure of R450 000: surplus or deficit?</>,
          <>Is VAT a direct or an indirect tax?</>,
          <>Name one service paid for by government expenditure.</>,
        ]}
        answers={[
          <>Local government.</>,
          <>A surplus of {randNb(res.amount)}.</>,
          <>An indirect tax.</>,
          <>For example education, health or housing.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "How many levels of government does South Africa have?",
    options: ["Two", "Four", "Three", "Five"],
    answer: "Three",
    explanation: "The levels are national, provincial and local.",
  },
  {
    prompt: "Which level of government supplies water, electricity and refuse removal to a town?",
    options: ["Local government", "National government", "Provincial government", "The reserve bank"],
    answer: "Local government",
    explanation: "Local government supplies these services to households and businesses.",
  },
  {
    prompt: "Which level of government runs the police and defence?",
    options: ["Local government", "Provincial government", "A school governing body", "National government"],
    answer: "National government",
    explanation: "National government is responsible for defence, police and the revenue service.",
  },
  {
    prompt: "When government buys goods and services from businesses, what is it acting as?",
    options: ["A producer", "A consumer", "A tax collector", "An owner of capital"],
    answer: "A consumer",
    explanation: "Government is a consumer when it buys, and a producer when it supplies services.",
  },
  {
    prompt: "What is a direct tax?",
    options: ["A tax included in the price of goods", "A tax paid straight to government by the earner", "A fine for breaking a law", "A gift to a charity"],
    answer: "A tax paid straight to government by the earner",
    explanation: "Income tax is a direct tax.",
  },
  {
    prompt: "Which of these is an indirect tax?",
    options: ["Income tax", "A school fee", "A bank charge", "VAT"],
    answer: "VAT",
    explanation: "VAT is included in the price of goods and services.",
  },
  {
    prompt: "VAT is 15% in the example. What is the VAT on a service priced at R200 before VAT?",
    options: ["R30", "R15", "R200", "R230"],
    answer: "R30",
    explanation: "15% of R200 = R30.",
  },
  {
    prompt: "Using VAT of 15%, what is a R200 service priced at, including VAT?",
    options: ["R30", "R215", "R230", "R170"],
    answer: "R230",
    explanation: "R200 + R30 VAT = R230.",
  },
  {
    prompt: "What does the National Budget show?",
    options: ["Only the salaries of teachers", "The profit of one business", "The price of petrol", "Expected revenue and spending"],
    answer: "Expected revenue and spending",
    explanation: "The budget shows expected income from taxes and spending on services.",
  },
  {
    prompt: "Revenue is R500 000 and expenditure is R450 000. What is this?",
    options: ["A deficit of R50 000", "A surplus of R50 000", "A surplus of R950 000", "A balanced budget"],
    answer: "A surplus of R50 000",
    explanation: "Revenue is more than expenditure by R50 000.",
  },
  {
    prompt: "Revenue is R400 000 and expenditure is R450 000. What is this?",
    options: ["A deficit of R50 000", "A surplus of R50 000", "A balanced budget", "A profit of R850 000"],
    answer: "A deficit of R50 000",
    explanation: "Expenditure is more than revenue by R50 000.",
  },
  {
    prompt: "Which of these is government expenditure?",
    options: ["Income tax collected", "VAT collected", "Spending on social grants", "Customs duties"],
    answer: "Spending on social grants",
    explanation: "Social grants, education, health and housing are expenditure.",
  },
  {
    prompt: "How can the National Budget help redress economic inequalities?",
    options: ["By taxing only the poor", "By stopping all spending", "By spending on services for the poor", "By closing all the schools"],
    answer: "By spending on services for the poor",
    explanation: "Spending on housing, grants, health and education reaches poorer households.",
  },
  {
    prompt: "In which kind of society do households grow or make most of what they need?",
    options: ["A self-sufficient society", "A modern society", "A trading company", "A government department"],
    answer: "A self-sufficient society",
    explanation: "Self-sufficient households produce most of what they need.",
  },
];

const GovernmentNationalBudget = () => (
  <CapsSubjectTopic
    title="Government and the National Budget"
    subtitle="Levels of government, taxes, the National Budget and the standard of living"
    learnSteps={learnSteps}
    task="gr8-government-national-budget-t1"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default GovernmentNationalBudget;
