import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
// randNb is rand() with non-breaking spaces so amounts do not split across lines.
import { randNb as rand, budgetBalance, equationTrail, ownersEquity, servicesReached } from '../../../../../components/diagrams/ems/emsHelpers';
import { BudgetBars, EquationBalance, SpheresOfGovernment } from '../../../../../components/diagrams/ems/EmsPictures';

// Every amount below comes from emsHelpers.ts (tested in emsHelpers.test.ts).
const town = budgetBalance(9_000_000, 9_600_000); // a deficit
const fundraiser = budgetBalance(12_000, 9_500); // a surplus
const trail = equationTrail([
  { assets: 30_000, equity: 30_000 }, // Thandi puts R30 000 into the business
  { assets: 8_000, liabilities: 8_000 }, // R8 000 of equipment, bought on credit
  { assets: -3_000, liabilities: -3_000 }, // she pays R3 000 of what she owes
]);
const [afterInvest, afterBuy, afterPay] = trail;
const villageA = servicesReached([true, true, true]);
const villageB = servicesReached([false, false, false]);
const q3 = ownersEquity(50_000, 20_000);
const wrongEquity = ownersEquity(afterPay.liabilities, afterPay.equity); // the mistake: liabilities minus equity

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Three levels of government',
    content: slide(
      <>
        <Rule>South Africa has national, provincial and local government. Each level provides different services.</Rule>
        <SpheresOfGovernment />
        <Worked
          title="A municipal water pipe bursts. Who must fix it?"
          steps={[
            'Name the service: water supply to homes.',
            'Match it to a level: water and electricity are local government services.',
            'So the municipality fixes it, not the national government.',
          ]}
        />
        <Mistake>Believing national government runs everything. Public schools and hospitals are provincial, and refuse removal is local.</Mistake>
      </>,
    ),
  },
  {
    title: 'Government income and spending',
    content: slide(
      <>
        <Rule>Government income comes mainly from taxes (such as income tax and VAT) and customs duties on imports. It spends this on services. Income minus spending shows a surplus or a deficit.</Rule>
        <BudgetBars income={town.income} spending={town.spending} aria={`Two bars. A town's income is ${rand(town.income)} and its spending is ${rand(town.spending)}. The spending bar is longer, so the town has a deficit of ${rand(town.amount)}.`} />
        <Worked
          title="Compare income with spending"
          steps={[
            <>Town: {rand(town.income)} income − {rand(town.spending)} spending. Spending is bigger, so it is a <strong>{town.kind}</strong> of {rand(town.amount)}.</>,
            <>School fundraiser: {rand(fundraiser.income)} in, {rand(fundraiser.spending)} out. Income is bigger, so it is a <strong>{fundraiser.kind}</strong> of {rand(fundraiser.amount)}.</>,
          ]}
        />
        <Mistake>Calling it a surplus when spending is bigger. A surplus needs income to be bigger.</Mistake>
      </>,
    ),
  },
  {
    title: 'Standard of living',
    content: slide(
      <>
        <Rule>Standard of living is the quality of life people enjoy: their access to goods and services such as housing, education, healthcare, clean water and electricity.</Rule>
        <NumberedSteps
          label="How to judge a standard of living"
          heading="How to compare two communities"
          tone="teal"
          steps={[
            { lead: 'List', text: ' the services each community can reach.' },
            { lead: 'Compare', text: ' clinic, school, clean water.' },
            { lead: 'Conclude', text: ' better access, higher standard.' },
          ]}
        />
        <Worked
          title="Village A has a clinic, a school and clean water. Village B has none."
          steps={[<>Village A can reach {villageA.got} of the {villageA.of} services.</>, <>Village B can reach {villageB.got} of the {villageB.of}.</>, 'Village A has the higher standard of living.']}
        />
        <Mistake>Thinking it is only the rent or tax a household pays. It is about access to goods and services.</Mistake>
      </>,
    ),
  },
  {
    title: 'Source documents and the accounting equation',
    content: slide(
      <>
        <Rule>Every transaction starts with a source document, such as an invoice, a receipt or a cheque. The accounting equation is: Assets = Liabilities + Owner&apos;s equity. It must always balance.</Rule>
        <EquationBalance
          assets={afterPay.assets}
          liabilities={afterPay.liabilities}
          equity={afterPay.equity}
          aria={`The accounting equation. Assets of ${rand(afterPay.assets)} equal liabilities of ${rand(afterPay.liabilities)} plus owner's equity of ${rand(afterPay.equity)}.`}
        />
        <Worked
          title="Thandi starts a business"
          steps={[
            <>She invests {rand(afterInvest.equity)}: assets {rand(afterInvest.assets)} = equity {rand(afterInvest.equity)}.</>,
            <>Equipment of {rand(afterBuy.liabilities)} on credit (invoice): assets {rand(afterBuy.assets)} = liabilities {rand(afterBuy.liabilities)} + equity {rand(afterBuy.equity)}.</>,
            <>She pays {rand(afterBuy.liabilities - afterPay.liabilities)} (cheque): assets {rand(afterPay.assets)} = liabilities {rand(afterPay.liabilities)} + equity {rand(afterPay.equity)}.</>,
          ]}
        />
        <Mistake>
          Writing Assets = Liabilities − Equity. With Thandi&apos;s numbers that gives {rand(afterPay.liabilities)} − {rand(afterPay.equity)} = {rand(wrongEquity)}, not the {rand(afterPay.assets)} of assets. Liabilities and equity are added.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Double entry and the right journal',
    content: slide(
      <>
        <Rule>Double entry: every transaction has a debit in one account and a credit in another. Record it in the right journal, in date order, so the statements are accurate.</Rule>
        <NumberedSteps
          label="From transaction to financial statements"
          heading="How a transaction is recorded"
          tone="violet"
          steps={[
            { lead: 'Source document', text: ' proves it.' },
            { lead: 'Journal', text: ' records it by date.' },
            { lead: 'Ledger', text: ' sorts it by account.' },
            { lead: 'Statements', text: ' report results.' },
          ]}
        />
        <Worked
          title="A client pays R1 500 for services"
          steps={[
            'Source document: the receipt you give the client.',
            'Money came in, so it goes into the cash receipts journal.',
            'Debit Bank R1 500 (assets rise). Credit Income R1 500.',
          ]}
        />
        <Mistake>Recording one side only. A debit with no credit leaves the equation out of balance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which level of government is responsible for local roads and water?</li>
            <li>Income is {rand(fundraiser.income)} and spending is {rand(fundraiser.spending)}. Surplus or deficit, and how much?</li>
            <li>Assets are {rand(50_000)} and liabilities are {rand(20_000)}. What is the owner&apos;s equity?</li>
            <li>Name a source document, and the journal for money received.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Local government (the municipality).</li>
            <li>A {fundraiser.kind} of {rand(fundraiser.amount)}.</li>
            <li>Equity = {rand(50_000)} − {rand(20_000)} = {rand(q3)}.</li>
            <li>An invoice, receipt or cheque; the cash receipts journal.</li>
          </ol>
        }
      />,
    ),
  },
];

