import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { SAMPLE, errorRate, estimatedErrors, everyKth } from '../../../../../components/diagrams/accounting/auditExamples';

// The numbers come from auditExamples.ts (tested in auditExamples.test.ts and g12AccCcControl.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const rate = errorRate(SAMPLE.errors, SAMPLE.sampleSize);
const est = estimatedErrors(SAMPLE.population, SAMPLE.errors, SAMPLE.sampleSize);
const picked = everyKth(1, SAMPLE.population, SAMPLE.population / SAMPLE.sampleSize, 5);

const SampleTable = () => (
  <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-slate-900 text-left">
    <table aria-label={`An audit sample: ${SAMPLE.sampleSize} invoices checked out of ${SAMPLE.population}, ${SAMPLE.errors} with errors, an error rate of ${rate}%, so about ${est} errors are estimated in all ${SAMPLE.population} invoices.`} className="w-full border-collapse text-[13px] text-slate-100">
      <caption className="px-3 pt-2.5 text-left text-sm font-extrabold text-amber-300">An audit sample</caption>
      <tbody>
        {[['Invoices in the population', String(SAMPLE.population)], ['Invoices in the sample', String(SAMPLE.sampleSize)], ['Invoices with errors', String(SAMPLE.errors)], ['Error rate', `${rate}%`], ['Estimated errors in the population', String(est)]].map(([a, b]) => (
          <tr key={a} className="border-t border-slate-700"><td className="px-3 py-1.5">{a}</td><td className="px-3 py-1.5 text-right font-semibold text-emerald-300">{b}</td></tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const learnSteps: LearnStep[] = [
  {
    title: 'Internal and external auditors',
    content: slide(
      <>
        <Rule>An internal auditor works for the business and checks whether its controls work and whether its resources are used well. An external auditor is independent of the business and gives an opinion on whether the financial statements are fair.</Rule>
        <Worked
          title="Two different roles"
          steps={[
            <><strong>Internal auditor:</strong> an employee or a department. Checks controls all year round. Reports to management.</>,
            <><strong>External auditor:</strong> an independent professional, appointed by the owners. Checks the financial statements once a year. Reports to the owners.</>,
            <>The external auditor may use the work of the internal auditor, but the opinion belongs to the external auditor.</>,
          ]}
        />
        <Mistake>Thinking that the internal auditor can give the opinion on the financial statements. That is the external auditor&rsquo;s task, because the external auditor is independent.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gathering audit evidence',
    content: slide(
      <>
        <Rule>An auditor must have evidence to support what the report says. Evidence is gathered in several ways.</Rule>
        <Worked
          steps={[
            <><strong>Inspecting documents:</strong> invoices, receipts, bank statements.</>,
            <><strong>Observation:</strong> watching how a procedure is carried out, such as the counting of the cash.</>,
            <><strong>Inquiry:</strong> asking staff and managers about the controls.</>,
            <><strong>Re-calculation:</strong> working out the totals again.</>,
            <><strong>Confirmation:</strong> asking a debtor or creditor to confirm the balance.</>,
            <><strong>Physical count:</strong> counting the stock and the cash.</>,
          ]}
        />
        <Mistake>Believing what a manager says without checking. A statement needs evidence, such as a document or a count.</Mistake>
      </>,
    ),
  },
  {
    title: 'Audit sampling',
    content: slide(
      <>
        <Rule>Auditors cannot check everything, so they check a sample and use it to judge the whole. The sample must be chosen so that it represents the population, and the basic techniques are random sampling and systematic sampling.</Rule>
        <SampleTable />
        <Worked
          steps={[
            <><strong>Random:</strong> every invoice has the same chance of being chosen.</>,
            <><strong>Systematic:</strong> choose every {SAMPLE.population / SAMPLE.sampleSize}th invoice from a starting number, for example {picked.slice(0, 3).join(', ')}, and so on to {picked.at(-1)}.</>,
            `Error rate: ${SAMPLE.errors} ÷ ${SAMPLE.sampleSize} = ${rate}%. Estimated errors: ${SAMPLE.population} × ${rate}% = ${est}.`,
          ]}
        />
        <Mistake>Choosing the sample from the invoices that look neat. A sample chosen by the auditor&rsquo;s taste is not representative.</Mistake>
      </>,
    ),
  },
  {
    title: 'Internal audit reports and accountable management',
    content: slide(
      <>
        <Rule>The internal auditor writes a report for management. Managers are accountable: they must answer for how the resources of the business are used.</Rule>
        <Worked
          title="What an internal audit report contains"
          steps={[
            <>What was checked (the scope), for example the cash procedures.</>,
            <>What was found: the weak controls and any errors.</>,
            <>Recommendations, such as a second person to count the cash.</>,
            <>Management&rsquo;s reply and the date by which the weakness will be fixed.</>,
          ]}
        />
        <Mistake>Filing the report and doing nothing. A report is only useful if management acts on the recommendations.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two differences between an internal and an external auditor.</>,
          <>Give two ways of gathering audit evidence.</>,
          <>A sample of 40 invoices has 2 errors. What is the error rate?</>,
          <>Who must act on the recommendations of an internal audit report?</>,
        ]}
        answers={[
          <>Internal: works for the business and reports to management. External: independent and reports to the owners.</>,
          <>Any two of: inspecting documents, observation, inquiry, re-calculation, confirmation, a physical count.</>,
          <>2 ÷ 40 = <strong>5%</strong>.</>,
          <>Management.</>,
        ]}
      />,
    ),
  },
];
