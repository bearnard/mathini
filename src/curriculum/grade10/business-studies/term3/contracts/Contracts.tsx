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
    title: 'What is a contract?',
    content: slide(
      <>
        <Rule>A contract is an agreement between two or more parties that the law will enforce. For a valid contract the parties must agree freely, they must be able to enter into the agreement, and its purpose must be lawful. Some contracts must be in writing and signed. A contract states the rights and the responsibilities of each party, and breaking it can have legal results.</Rule>
        <FactCards
          cards={[
            { title: 'Agreement', line1: 'parties agree', line2: 'freely' },
            { title: 'Capacity', line1: 'parties may legally', line2: 'make a contract' },
            { title: 'Lawful', line1: 'the purpose must', line2: 'be legal' },
            { title: 'Written', line1: 'some must be', line2: 'written and signed' },
          ]}
          aria="What makes a contract valid. Agreement: the parties agree freely. Capacity: the parties may legally make a contract. Lawful: the purpose must be legal. Written: some contracts must be written and signed."
        />
        <Worked
          title="Is it a contract?"
          steps={[
            'A shop owner and a supplier agree on the price and delivery of stock and sign an order.',
            'Both parties must do what they agreed: the owner pays and the supplier delivers.',
            'If one party does not, the other may take legal steps.',
          ]}
        />
        <Mistake>Believing that only written agreements count. Many verbal agreements are contracts, but a written contract is easier to prove.</Mistake>
      </>,
    ),
  },
  {
    title: 'Types of contracts and their parties',
    content: slide(
      <>
        <Rule>The contracts that you must know are the employment contract (employer and employee), insurance (insurer and insured), a lease agreement (lessor and lessee), a hire purchase agreement (seller and buyer) and a rental agreement (landlord and tenant). Each type is controlled by laws that protect the parties, for example laws on labour, insurance, consumer protection, credit and rental housing.</Rule>
        <InfoTable
          cols={[{ title: 'Contract', w: 32 }, { title: 'Parties', w: 30 }, { title: 'What it covers', w: 38 }]}
          rows={[
            ['Employment', 'employer, employee', 'work, pay and conditions'],
            ['Insurance', 'insurer, insured', 'protection against loss'],
            ['Lease', 'lessor, lessee', 'use of an asset for a time'],
            ['Hire purchase', 'seller, buyer', 'buy by instalments'],
            ['Rental', 'landlord, tenant', 'use of property for rent'],
          ]}
          aria="A table of contracts and parties. Employment: employer and employee, covering work, pay and conditions. Insurance: insurer and insured, protection against loss. Lease: lessor and lessee, use of an asset for a time. Hire purchase: seller and buyer, buying by instalments. Rental: landlord and tenant, use of property for rent."
        />
        <Worked
          title="Name the contract and parties"
          steps={[
            'A shop pays R2 000 a month to use a building owned by someone else under a written agreement: a rental agreement; the landlord and the tenant are the parties.',
            'A business pays a premium so that a fire will be paid for: an insurance contract between the insurer and the insured.',
            'A baker buys an oven by paying a deposit and monthly instalments: a hire purchase agreement.',
          ]}
        />
        <Mistake>Mixing up lease and hire purchase. Under a lease you use an asset for a period and normally return it, and under hire purchase you pay by instalments to become the owner.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rights and responsibilities of the parties',
    content: slide(
      <>
        <Rule>Every contract gives each party rights and responsibilities. An employer has the right to the employee&rsquo;s work and the responsibility to pay and to provide safe conditions, and an employee has the right to fair pay and the responsibility to work honestly. An insurer must pay a valid claim, and the insured must pay the premium and tell the truth. A tenant must pay the rent and look after the property, and a landlord must keep it fit for use.</Rule>
        <InfoTable
          cols={[{ title: 'Party', w: 26 }, { title: 'Right', w: 36 }, { title: 'Responsibility', w: 38 }]}
          rows={[
            ['Employer', 'receives work', 'pays and keeps workers safe'],
            ['Employee', 'is paid fairly', 'works honestly'],
            ['Insured', 'a valid claim is paid', 'pays premium, tells the truth'],
            ['Tenant', 'quiet use of property', 'pays rent, takes care'],
          ]}
          aria="A table of rights and responsibilities. Employer: receives work; pays and keeps workers safe. Employee: is paid fairly; works honestly. Insured: a valid claim is paid; pays the premium and tells the truth. Tenant: quiet use of the property; pays rent and takes care."
        />
        <Worked
          title="What happens if a party breaks the contract?"
          steps={[
            'A supplier delivers late and the buyer loses sales: the buyer may claim for the loss.',
            'A tenant does not pay the rent: the landlord may end the agreement by following the proper steps.',
            'The law protects both sides, so each must follow the contract and the law.',
          ]}
        />
        <Mistake>Thinking that a party can end a contract whenever it likes. A contract must be ended in the way that it and the law allow.</Mistake>
      </>,
    ),
  },
  {
    title: 'Hire purchase: counting the cost',
    content: slide(
      <>
        <Rule>Under a hire purchase agreement the buyer pays a deposit and equal instalments, and becomes the owner after the last payment. The total price = deposit + (number of instalments × the instalment), and it is more than the cash price because it includes interest and costs. Read the contract before you sign it, and compare the total with the cash price.</Rule>
        <InfoTable
          cols={[{ title: 'Item', w: 54 }, { title: 'Amount', w: 46 }]}
          rows={[
            ['Cash price', formatRand(b.HP.cash)],
            ['Deposit', formatRand(b.HP.deposit)],
            [`${b.HP.n} instalments of ${formatRand(b.HP.each)}`, formatRand(b.HP.n * b.HP.each)],
            ['Total price', formatRand(b.hpTotal())],
            ['Extra cost', formatRand(b.hpExtra())],
          ]}
          aria={`A hire purchase example. Cash price ${formatRand(b.HP.cash)}. Deposit ${formatRand(b.HP.deposit)}. ${b.HP.n} instalments of ${formatRand(b.HP.each)} come to ${formatRand(b.HP.n * b.HP.each)}. Total price ${formatRand(b.hpTotal())}. Extra cost ${formatRand(b.hpExtra())}.`}
        />
        <Worked
          title="Find the extra cost"
          steps={[
            `Instalments: ${b.HP.n} × ${formatRand(b.HP.each)} = ${formatRand(b.HP.n * b.HP.each)}.`,
            `Total = deposit + instalments = ${formatRand(b.HP.deposit)} + ${formatRand(b.HP.n * b.HP.each)} = ${formatRand(b.hpTotal())}.`,
            `Extra cost = ${formatRand(b.hpTotal())} − cash price ${formatRand(b.HP.cash)} = ${formatRand(b.hpExtra())}.`,
          ]}
        />
        <Mistake>Looking only at the size of the monthly instalment. A small instalment over a long time can make the total much higher than the cash price.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a contract?</>,
          <>Name the two parties to an insurance contract.</>,
          <>Which contract is between a landlord and a tenant?</>,
          <>A buyer pays a R500 deposit and 10 instalments of R300. What is the total price?</>,
        ]}
        answers={[
          <>An agreement between parties that the law will enforce.</>,
          <>The insurer and the insured.</>,
          <>A rental agreement.</>,
          <>R500 + 10 × R300 = R3 500.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is a contract?",
    options: ["A promise that cannot be enforced", "A list of goods", "An agreement that the law will enforce", "A kind of tax"],
    answer: "An agreement that the law will enforce",
    explanation: "The parties must agree freely.",
  },
  {
    prompt: "Which is needed for a valid contract?",
    options: ["The purpose must be lawful", "The purpose may be illegal", "One party must be unaware", "It must always be verbal"],
    answer: "The purpose must be lawful",
    explanation: "A contract for an illegal purpose is not valid.",
  },
  {
    prompt: "Which two parties make an employment contract?",
    options: ["Landlord and tenant", "Insurer and insured", "Seller and buyer", "Employer and employee"],
    answer: "Employer and employee",
    explanation: "It covers work, pay and conditions.",
  },
  {
    prompt: "Which two parties make an insurance contract?",
    options: ["Employer and employee", "Insurer and insured", "Landlord and tenant", "Lessor and lessee"],
    answer: "Insurer and insured",
    explanation: "The insured pays a premium.",
  },
  {
    prompt: "Which contract is between a landlord and a tenant?",
    options: ["An employment contract", "A rental agreement", "A hire purchase agreement", "An insurance contract"],
    answer: "A rental agreement",
    explanation: "The tenant pays rent for the use of the property.",
  },
  {
    prompt: "A business pays to use an asset owned by someone else for a set time. Which contract is this?",
    options: ["A hire purchase", "An employment contract", "An insurance contract", "A lease"],
    answer: "A lease",
    explanation: "A lessee uses the asset of a lessor.",
  },
  {
    prompt: "In a hire purchase agreement, when does the buyer become the owner?",
    options: ["After the last payment", "At the first payment", "Before any payment", "Never"],
    answer: "After the last payment",
    explanation: "The buyer pays a deposit and instalments first.",
  },
  {
    prompt: "Who must pay the premium in an insurance contract?",
    options: ["The insurer", "The landlord", "The insured", "The employer"],
    answer: "The insured",
    explanation: "The insurer must pay a valid claim.",
  },
  {
    prompt: "Who must keep a rented property fit for use?",
    options: ["The tenant only", "The neighbours", "The bank", "The landlord"],
    answer: "The landlord",
    explanation: "The tenant must pay rent and take care of it.",
  },
  {
    prompt: "An employer's responsibility under the contract is to",
    options: ["ignore the working hours of staff", "pay the employee and keep workers safe", "avoid paying any wages at all", "give no safety equipment to staff"],
    answer: "pay the employee and keep workers safe",
    explanation: "The employee must work honestly.",
  },
  {
    prompt: "A supplier delivers late and the buyer loses sales. What may the buyer do?",
    options: ["Claim for the loss under the contract", "Do nothing about it at all", "Cancel every other contract", "Burn the goods in a yard"],
    answer: "Claim for the loss under the contract",
    explanation: "A breach of contract can have legal results.",
  },
  {
    prompt: "A buyer pays a R500 deposit and 10 instalments of R300. What is the total price?",
    options: ["R3 000", "R800", "R3 500", "R3 800"],
    answer: "R3 500",
    explanation: "R500 + 10 x R300 = R3 500.",
  },
  {
    prompt: "The cash price is R3 000 and the hire purchase total is R3 500. What is the extra cost?",
    options: ["R3 500", "R300", "R500", "R6 500"],
    answer: "R500",
    explanation: "R3 500 - R3 000 = R500.",
  },
  {
    prompt: "Why should you read a hire purchase contract before you sign it?",
    options: ["The total can be far more than the cash price", "The total is always the cash price", "Instalments are never charged", "The deposit is returned"],
    answer: "The total can be far more than the cash price",
    explanation: "Compare the total with the cash price.",
  },
];

const Contracts = () => (
  <CapsSubjectTopic
    title="Contracts"
    subtitle="Types of contracts, their parties, rights and responsibilities, and counting the cost of hire purchase"
    learnSteps={learnSteps}
    task="gr10-contracts-t3"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={10}
  />
);

export default Contracts;
