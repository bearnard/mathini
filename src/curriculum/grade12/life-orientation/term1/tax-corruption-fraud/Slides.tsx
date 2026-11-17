import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Why tax is paid and who collects it',
    content: slide(
      <>
        <Rule>Tax is money that people and businesses pay to the government. In South Africa the South African Revenue Service (SARS) collects it. The government uses tax to pay for services such as schools, clinics, roads, police and social grants.</Rule>
        <KeyTable
          title="What tax pays for"
          head={['Service', 'Who benefits']}
          aria="A table of what tax pays for. Schools and teachers: learners. Clinics and hospitals: patients. Roads and public transport: commuters and businesses. Police and courts: everyone who needs safety. Social grants: people who need support."
          rows={[
            ['Schools and teachers', 'Learners'],
            ['Clinics and hospitals', 'Patients'],
            ['Roads and transport', 'Commuters, businesses'],
            ['Police and courts', 'The community'],
            ['Social grants', 'People who need support'],
          ]}
        />
        <Worked
          steps={[
            <>When a person with a salary pays tax, it goes to SARS. The government then shares it between services.</>,
            <>Shops, companies and entrepreneurs also pay tax on their profit.</>,
          ]}
        />
        <Mistake>Thinking that tax is a punishment. It is a shared contribution that pays for services that everyone uses.</Mistake>
      </>,
    ),
  },
  {
    title: 'Your basic tax obligations',
    content: slide(
      <>
        <Rule>A person who earns an income above the tax threshold must be registered with SARS and has an income tax number. An employee&rsquo;s employer deducts tax from each salary (called PAYE) and pays it to SARS. A self-employed person, such as the owner of a stall, must declare the profit and pay the tax due.</Rule>
        <KeyTable
          title="Basic tax obligations"
          head={['Who', 'What they do']}
          aria="A table of basic tax obligations. Employee: has a tax number and the employer deducts PAYE. Employer: deducts PAYE and pays it to SARS. Self-employed person: registers with SARS, keeps records, declares the profit and pays the tax due. Everyone who must file: submits an annual tax return on time."
          rows={[
            ['Employee', 'Has a tax number; PAYE is deducted'],
            ['Employer', 'Deducts PAYE, pays it to SARS'],
            ['Self-employed', 'Registers, keeps records, declares profit'],
            ['Taxpayer', 'Submits the annual tax return on time'],
          ]}
        />
        <Worked
          steps={[
            <>A food-stall owner keeps a book with the sales and costs. The profit in that book is what goes on the tax return.</>,
            <>Not declaring income is tax evasion. It is a crime, and SARS can charge penalties and interest.</>,
          ]}
        />
        <Mistake>Believing that a small business or an informal job does not have to be declared. Income above the threshold must be declared, however it is earned.</Mistake>
      </>,
    ),
  },
  {
    title: 'Corruption and fraud',
    content: slide(
      <>
        <Rule>Corruption is the misuse of a position of power for personal gain, for example taking a bribe. Fraud is deliberate deception to get money or something of value, for example a false invoice or a fake identity.</Rule>
        <KeyTable
          title="Corruption and fraud: examples"
          head={['Type', 'Example']}
          aria="A table of corruption and fraud examples. Bribery: paying an official to get a licence quickly. Tender corruption: an official gives a contract to a relative. Invoice fraud: a clerk sends a false invoice and keeps the money. Identity fraud: using another person's identity to get a loan."
          rows={[
            ['Bribery', 'Paying an official for a licence'],
            ['Tender corruption', 'A contract given to a relative'],
            ['Invoice fraud', 'A false invoice, money kept'],
            ['Identity fraud', 'Another person’s name used for a loan'],
          ]}
        />
        <Worked
          steps={[
            <>Corruption needs a person with power. The official is paid to break the rules.</>,
            <>Report it to the police, to your employer, or to the National Anti-Corruption Hotline. You can report without giving your name.</>,
          ]}
        />
        <Mistake>Saying that a small bribe does not matter. Any bribe is a crime and it makes services unfair.</Mistake>
      </>,
    ),
  },
  {
    title: 'The impact of corruption and fraud',
    content: slide(
      <>
        <Rule>Corruption and fraud harm the individual, the company, the community and the country. The money lost is money that could have paid for services.</Rule>
        <KeyTable
          title="Who is harmed, and how"
          head={['Who', 'Harm']}
          aria="A table of the impact of corruption and fraud. Individual: lost savings and a damaged name. Company: lost money, lost jobs and a damaged reputation. Community: poor services, such as a clinic with no medicine. Country: less tax for services, fewer investors, and less trust in government."
          rows={[
            ['Individual', 'Lost savings, a damaged name'],
            ['Company', 'Lost money, jobs and trust'],
            ['Community', 'Poor services, a clinic with no medicine'],
            ['Country', 'Less money for services, less trust'],
          ]}
        />
        <Worked
          steps={[
            <>A fake invoice scheme takes money from a company. The company has less to pay wages, and workers may lose their jobs.</>,
            <>When money for a road is stolen, the road is not built, and the community pays the price.</>,
          ]}
        />
        <Mistake>Thinking that corruption harms only the government. Individuals, companies and communities lose too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which body collects tax in South Africa?</>,
          <>What is PAYE?</>,
          <>What is the difference between corruption and fraud?</>,
          <>Give one way in which corruption harms a community.</>,
        ]}
        answers={[
          <>The South African Revenue Service (SARS).</>,
          <>Tax that the employer deducts from each salary and pays to SARS.</>,
          <>Corruption is misuse of power for personal gain, such as a bribe. Fraud is deliberate deception to get money, such as a false invoice.</>,
          <>For example: a clinic with no medicine, or a road that is not built.</>,
        ]}
      />,
    ),
  },
];
