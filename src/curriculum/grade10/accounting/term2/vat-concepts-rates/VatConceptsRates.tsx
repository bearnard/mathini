import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import { formatRand } from '../../../../../components/diagrams/maths/mathsHelpers';
import * as a from '../../../../../components/diagrams/accounting/acc10';

// Every amount comes from acc10.ts (whole cents, exact arithmetic; tested in acc10.test.ts and g10AccGaps.test.ts). All data are imaginary teaching data.
const R = (c: number): string => formatRand(c).replace(/,00$/, '');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'The need for and purpose of VAT',
    content: slide(
      <>
        <Rule>Value-added tax (VAT) is a tax on the buying of most goods and services. The government needs tax income to pay for services such as schools, clinics and roads, and VAT is one of its biggest sources. Businesses that are registered for VAT, called vendors, collect it for the South African Revenue Service (SARS) and pay it over. The current VAT rate is {a.VAT_RATE}%.</Rule>
        <FactCards
          cards={[
            { title: 'Need', line1: 'the state needs tax', line2: 'income for services' },
            { title: 'Purpose', line1: 'collect tax on what', line2: 'consumers buy' },
            { title: 'Vendor', line1: 'a registered business', line2: 'that collects VAT' },
            { title: 'Rate', line1: `${a.VAT_RATE}% on VAT-able`, line2: 'goods and services' },
          ]}
          aria={`The need for and purpose of VAT. Need: the state needs tax income for services. Purpose: collect tax on what consumers buy. Vendor: a registered business that collects VAT. Rate: ${a.VAT_RATE} percent on VAT-able goods and services.`}
        />
        <Worked
          title="Who really pays the VAT?"
          steps={[
            `A shop sells a jacket for ${R(a.inclOf(20000))} including VAT.`,
            `Of this, ${R(20000)} is the price of the jacket and ${R(a.vatOn(20000))} is VAT.`,
            'The customer pays the VAT. The shop only collects it and pays it to SARS, so VAT is not the shop’s own expense.',
          ]}
        />
        <Mistake>Thinking that VAT is a cost of the business. A vendor collects VAT for SARS, and the consumer pays it in the price.</Mistake>
      </>,
    ),
  },
  {
    title: 'The principles of VAT',
    content: slide(
      <>
        <Rule>A vendor charges output VAT on its sales and pays input VAT on the goods and services it buys for the business. The vendor pays SARS the difference: output VAT less input VAT. If input VAT is more than output VAT, SARS pays the difference back. The vendor shows the VAT separately on each tax invoice.</Rule>
        <InfoTable
          cols={[{ title: 'Term', w: 30 }, { title: 'Meaning', w: 40 }, { title: 'Vendor', w: 30 }]}
          rows={[
            ['Output VAT', 'VAT charged on sales', 'collects for SARS'],
            ['Input VAT', 'VAT paid on purchases', 'may claim back'],
            ['Net VAT', 'output less input', 'pays or is refunded'],
            ['Tax invoice', 'shows the VAT amount', 'a vendor must issue'],
          ]}
          aria="A table of VAT principles. Output VAT: VAT charged on sales, which the vendor collects for SARS. Input VAT: VAT paid on purchases, which the vendor may claim back. Net VAT: output less input, which the vendor pays or is refunded. Tax invoice: shows the VAT amount, and a vendor must issue it."
        />
        <Worked
          title="Output and input"
          steps={[
            `A shop sells goods for ${R(20000)} plus ${R(a.vatOn(20000))} VAT: the ${R(a.vatOn(20000))} is output VAT.`,
            `It buys stock for ${R(10000)} plus ${R(a.vatOn(10000))} VAT: the ${R(a.vatOn(10000))} is input VAT.`,
            `Net VAT to SARS = ${R(a.vatOn(20000))} − ${R(a.vatOn(10000))} = ${R(a.vatOn(20000) - a.vatOn(10000))}.`,
          ]}
        />
        <Mistake>Mixing up input and output VAT. Output VAT comes from your sales, and input VAT is the VAT that you paid on your purchases.</Mistake>
      </>,
    ),
  },
  {
    title: 'VAT-able, zero-rated and VAT-exempt items',
    content: slide(
      <>
        <Rule>Most goods and services are VAT-able: VAT is charged at the standard rate of {a.VAT_RATE}%. Some items are zero-rated: VAT is charged at 0%, such as basic foods like brown bread, maize meal, rice, milk and fresh fruit and vegetables, and exports. The vendor still claims input VAT on zero-rated sales. Some items are VAT-exempt, such as financial services, rent of a home and educational services: no VAT is charged, and no input VAT can be claimed on them.</Rule>
        <InfoTable
          cols={[{ title: 'Kind', w: 22 }, { title: 'VAT charged', w: 24 }, { title: 'Examples', w: 54 }]}
          rows={[
            ['VAT-able', `${a.VAT_RATE}%`, 'clothes, furniture, airtime'],
            ['Zero-rated', '0%', 'brown bread, maize meal, milk, exports'],
            ['VAT-exempt', 'none', 'financial services, home rent, education'],
          ]}
          aria={`A table of kinds of items. VAT-able: ${a.VAT_RATE} percent is charged, for example clothes, furniture and airtime. Zero-rated: 0 percent is charged, for example brown bread, maize meal, milk and exports. VAT-exempt: no VAT is charged, for example financial services, home rent and education.`}
        />
        <Worked
          title="Sort the items"
          steps={[
            'A pair of shoes: VAT-able, so 15% VAT is added.',
            'A loaf of brown bread: zero-rated, so the VAT is 0%.',
            'The interest charged by a bank: a financial service, so VAT-exempt.',
          ]}
        />
        <Mistake>Treating zero-rated and exempt as the same. Zero-rated items are VAT items taxed at 0%, and a vendor can claim input VAT; exempt items are outside VAT, with no input VAT claim.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the current VAT rate?</>,
          <>What is output VAT?</>,
          <>Is brown bread VAT-able, zero-rated or VAT-exempt?</>,
          <>A price excluding VAT is R200. What is the VAT?</>,
        ]}
        answers={[
          <>{a.VAT_RATE}%.</>,
          <>The VAT that a vendor charges on its sales.</>,
          <>Zero-rated.</>,
          <>{R(a.vatOn(20000))}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Why does the government charge value-added tax?",
    options: ["To pay the wages of every vendor", "To lower the price of all goods", "To raise income for public services", "To reward the businesses that sell"],
    answer: "To raise income for public services",
    explanation: "VAT is a major source of state income that pays for schools, clinics and roads.",
  },
  {
    prompt: "Who is a VAT vendor?",
    options: ["A business registered with SARS for VAT", "A person who only buys from shops", "A customer who pays at the till", "A worker who earns a monthly wage"],
    answer: "A business registered with SARS for VAT",
    explanation: "A vendor is a registered business that collects the tax and pays it over to SARS.",
  },
  {
    prompt: "Who carries the burden of VAT in the end?",
    options: ["The vendor who sells the goods", "The supplier of the raw materials", "The auditor of the business books", "The final consumer who buys the goods"],
    answer: "The final consumer who buys the goods",
    explanation: "The consumer pays VAT inside the price, and the vendor only collects it for the state.",
  },
  {
    prompt: "What is the standard VAT rate in this course?",
    options: ["14%", "15%", "10%", "0%"],
    answer: "15%",
    explanation: "The current rate of VAT on VAT-able goods and services is 15%, as used in all these lessons.",
  },
  {
    prompt: "Which body receives the VAT that a vendor collects?",
    options: ["The Reserve Bank of the country", "The South African Revenue Service", "The Department of Basic Education", "The local municipality of the town"],
    answer: "The South African Revenue Service",
    explanation: "SARS collects tax for the state, so vendors pay the net VAT over to it.",
  },
  {
    prompt: "What is output VAT?",
    options: ["VAT that a vendor pays on purchases", "VAT that a vendor pays on wages", "VAT that SARS pays on its own costs", "VAT that a vendor charges on sales"],
    answer: "VAT that a vendor charges on sales",
    explanation: "Output VAT comes from the sales that the vendor makes.",
  },
  {
    prompt: "What is input VAT?",
    options: ["VAT that a vendor pays on purchases", "VAT that a vendor charges on sales", "VAT that a vendor pays on salaries", "VAT that a consumer claims from SARS"],
    answer: "VAT that a vendor pays on purchases",
    explanation: "Input VAT is included in the price of VAT-able items that the vendor buys for the business.",
  },
  {
    prompt: "Which document shows the VAT amount separately?",
    options: ["A bank statement of the owner", "A letter of the business name", "A tax invoice", "A diary of the weekly tasks"],
    answer: "A tax invoice",
    explanation: "A vendor must issue a tax invoice that shows the VAT on the sale.",
  },
  {
    prompt: "A shop sells a bag for R200 excluding VAT. How much VAT is charged at 15%?",
    options: ["R20", "R15", "R230", "R30"],
    answer: "R30",
    explanation: "15% of R200 is 0,15 × 200 = R30, so the price including VAT is R230.",
  },
  {
    prompt: "Which of these items is zero-rated?",
    options: ["A new pair of shoes", "Brown bread", "A cellphone airtime voucher", "A leather lounge suite"],
    answer: "Brown bread",
    explanation: "Basic foods such as brown bread are zero-rated, so VAT of 0% is charged on them.",
  },
  {
    prompt: "What does zero-rated mean?",
    options: ["VAT is charged at 0% on the item", "No VAT of any kind applies", "VAT is charged at 15% only", "VAT is paid by the owner alone"],
    answer: "VAT is charged at 0% on the item",
    explanation: "Zero-rated items are still VAT items, but the rate is 0%, so the vendor can claim input VAT.",
  },
  {
    prompt: "Which of these is VAT-exempt?",
    options: ["Fresh milk from a dairy", "A new school jersey", "Financial services such as interest", "A garden chair from a shop"],
    answer: "Financial services such as interest",
    explanation: "Financial services are exempt, so no VAT is charged and no input VAT can be claimed.",
  },
  {
    prompt: "What is the difference between zero-rated and exempt supplies?",
    options: ["Only exempt sales allow an input VAT claim", "Both allow the same claim of input VAT", "Only zero-rated sales allow an input VAT claim", "Neither allows any claim of input VAT"],
    answer: "Only zero-rated sales allow an input VAT claim",
    explanation: "A vendor of zero-rated goods claims input VAT, but a supplier of exempt services cannot.",
  },
  {
    prompt: "A shop sells only VAT-able clothes. What rate of VAT is added to the selling price?",
    options: ["15%", "0%", "5%", "30%"],
    answer: "15%",
    explanation: "Clothes are VAT-able at the standard rate, so 15% is added to the price excluding VAT.",
  },
];

const VatConceptsRates = () => (
  <CapsSubjectTopic
    title="VAT: Need, Purpose, Principles and Rates"
    subtitle="Why VAT exists, vendors, output and input VAT, and VAT-able, zero-rated and exempt items"
    learnSteps={learnSteps}
    task="gr10-vat-concepts-rates-t2"
    bank={bank}
    apiPath="/api/caps/acc"
    grade={10}
  />
);

export default VatConceptsRates;
