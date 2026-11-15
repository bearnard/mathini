import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Cross-application data flow',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Integrated CAT solutions move data seamlessly between word processing, spreadsheets, databases, and web pages.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Spreadsheet → Word processor</strong>
            <p className="text-slate-600">Embed or link a spreadsheet table or chart into a report. Use Paste Special → Link to keep a live connection.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Database → Report / Mail merge</strong>
            <p className="text-slate-600">Use database records as the data source for a mail merge or as the record source for an Access report.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Spreadsheet → Database</strong>
            <p className="text-slate-600">Export a spreadsheet as CSV, then import into a database table. Verify data types and field names match.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Database → HTML table</strong>
            <p className="text-slate-600">Export query results and present them in an HTML table on a web page for online publishing.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Social implications of technology',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Technology creates significant social, ethical, and environmental challenges.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Digital divide</strong>
            <p className="text-slate-600">Inequality in access to computers and internet — widened by cost, location (urban vs rural), and education level. A major SA challenge.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">E-waste</strong>
            <p className="text-slate-600">Discarded electronic devices contain hazardous materials (lead, mercury). Improper disposal pollutes soil and water. Recycle through certified centres.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Copyright and piracy</strong>
            <p className="text-slate-600">Software, music, and films are protected by copyright. Piracy (illegal copying/distribution) is a criminal offence in South Africa.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Cybercrime</strong>
            <p className="text-slate-600">The Cybercrimes Act 19 of 2020 criminalises unlawful access (hacking), cyber fraud, cyber extortion and harmful malware or data interference in South Africa.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Case-study analysis technique',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Exam-style case studies require structured analysis using command words.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <table className="text-slate-700 text-sm w-full">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="pr-6 py-1">Command word</th>
                <th className="py-1">What to do</th>
              </tr>
            </thead>
            <tbody className="space-y-1">
              <tr><td className="pr-6 py-1 font-medium">Define</td><td>Give the exact meaning of a term</td></tr>
              <tr><td className="pr-6 py-1 font-medium">Describe</td><td>Give details of characteristics/features</td></tr>
              <tr><td className="pr-6 py-1 font-medium">Explain</td><td>Give reasons or show how/why</td></tr>
              <tr><td className="pr-6 py-1 font-medium">Compare</td><td>Show similarities and differences</td></tr>
              <tr><td className="pr-6 py-1 font-medium">Evaluate</td><td>Weigh up advantages and disadvantages, give a judgement</td></tr>
              <tr><td className="pr-6 py-1 font-medium">Discuss</td><td>Examine multiple aspects and present a balanced argument</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    title: 'Troubleshooting common computer problems',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Systematic troubleshooting resolves most hardware and software problems efficiently.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Problem: Computer won't start</strong>
            <p className="text-slate-600">Check power cable, power outlet, and whether the power light turns on. Try a different power cable or socket.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Problem: Very slow performance</strong>
            <p className="text-slate-600">Check for malware (antivirus scan), close unnecessary programs (Task Manager), clear disk space, check for updates.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Problem: No internet connection</strong>
            <p className="text-slate-600">Restart router and device, check Wi-Fi is enabled, check network settings, contact ISP if all else fails.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Problem: Printer not printing</strong>
            <p className="text-slate-600">Check cable/Wi-Fi connection, paper and ink/toner levels, print queue for stuck jobs, and ensure correct printer is selected.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'A learner links a chart from a spreadsheet into a Word report. She then changes the data in the spreadsheet. What happens to the chart in the Word document?',
    options: ['Nothing changes — it is a separate copy', 'The chart in the Word document updates automatically', 'The Word document closes', 'The chart disappears'],
    answer: 'The chart in the Word document updates automatically',
    explanation: 'A linked object maintains a live connection to the source file. Changes in the source spreadsheet are reflected in the linked object in the Word document.',
  },
  {
    prompt: 'The digital divide in South Africa refers to:',
    options: ['The gap between users of PCs and users of Macs', 'Unequal access to computers and the internet due to cost and place', 'The difference in speed between 4G and 5G networks', 'The split between online and offline gaming'],
    answer: 'Unequal access to computers and the internet due to cost and place',
    explanation: 'South Africa\'s digital divide is characterised by unequal access to technology between urban/rural areas and different socioeconomic groups.',
  },
  {
    prompt: 'A student downloads and installs a cracked version of Microsoft Office without paying. This is:',
    options: ['Acceptable if the software is older than 5 years', 'Software piracy — a violation of copyright law', 'Legal if used only for school work', 'Permitted under the open-source licence'],
    answer: 'Software piracy — a violation of copyright law',
    explanation: 'Installing software without a valid licence is software piracy, which is illegal under South African copyright law (the Copyright Act 98 of 1978).',
  },
  {
    prompt: 'E-waste should be disposed of by:',
    options: ['Throwing it away in a regular dustbin', 'Burying it in the garden behind the house', 'Taking it to a certified e-waste recycling centre', 'Burning it to recover the metal that is inside'],
    answer: 'Taking it to a certified e-waste recycling centre',
    explanation: 'Electronic devices contain hazardous materials. Certified recycling centres process them safely, extracting reusable materials and disposing of toxins correctly.',
  },
  {
    prompt: 'An exam question says "Evaluate the use of cloud storage for a small business." What should the answer include?',
    options: ['Only the advantages of using cloud storage', 'Only the definition of what cloud storage is', 'Advantages and disadvantages, plus a justified conclusion', 'A list of all of the cloud storage providers'],
    answer: 'Advantages and disadvantages, plus a justified conclusion',
    explanation: '"Evaluate" requires weighing up both sides and providing a reasoned judgement — not a one-sided list.',
  },
  {
    prompt: 'A school wants to use a database of learner details as the source for personalised report card letters sent to 500 parents. Which integrated solution is most efficient?',
    options: ['Typing each letter individually', 'Using mail merge with the database as the data source', 'Copying and pasting each learner\'s name manually', 'Creating 500 separate Word templates'],
    answer: 'Using mail merge with the database as the data source',
    explanation: 'Mail merge automates the creation of personalised documents — one template + database data source = 500 personalised letters with no manual copying.',
  },
  {
    prompt: 'Which South African law specifically criminalises hacking and cyber fraud?',
    options: ['POPIA (2013)', 'The Films and Publications Act', 'The Cybercrimes Act (2020)', 'The Electronic Communications Act'],
    answer: 'The Cybercrimes Act (2020)',
    explanation: 'South Africa\'s Cybercrimes Act 19 of 2020 criminalises unlawful access to computer systems, cyber fraud, cyber extortion and the distribution of harmful malware.',
  },
  {
    prompt: 'When troubleshooting a slow computer, which step should be done FIRST?',
    options: ['Replace the hard drive with a new one', 'Buy a brand new computer to replace the old one', 'Run an antivirus scan and check Task Manager for heavy processes', 'Reinstall the operating system from scratch'],
    answer: 'Run an antivirus scan and check Task Manager for heavy processes',
    explanation: 'Start with the simplest, non-destructive steps: malware and unnecessary processes are common causes of slowdown and can be resolved without hardware changes.',
  },
  {
    prompt: 'A learner exports database query results as a CSV and imports them into a spreadsheet. Phone numbers lose their leading zeros. How should this be fixed?',
    options: ['Add 27 before each number', 'Format the phone number column as Text before importing', 'Use a formula to add zeros back', 'Ignore it — zeros are not important in phone numbers'],
    answer: 'Format the phone number column as Text before importing',
    explanation: 'Numbers formatted as numeric values lose leading zeros. Setting the column to Text format before import preserves the "0" prefix of SA phone numbers.',
  },
  {
    prompt: 'An exam question asks you to "Compare" wired and wireless networks. Your answer should:',
    options: ['Define wired networks and leave out wireless ones', 'List the advantages of wireless networks only', 'Identify similarities AND differences between the two', 'Describe how to set up a Wi-Fi router at home'],
    answer: 'Identify similarities AND differences between the two',
    explanation: '"Compare" requires addressing both similarities and differences. A good compare answer is structured (e.g. in a table or using both/while/whereas language).',
  },
];

const ApplicationIntegrationCaseStudies = () => (
  <CapsSubjectTopic
    title="Application Integration and Case Studies"
    subtitle="Cross-application workflows, social implications, and exam command words"
    learnSteps={learnSteps}
    task="gr11-application-integration-case-studies-t4"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default ApplicationIntegrationCaseStudies;
