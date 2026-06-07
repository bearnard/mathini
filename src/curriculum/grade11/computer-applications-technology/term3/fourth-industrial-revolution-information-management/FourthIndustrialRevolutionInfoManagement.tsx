import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/cat/term3/fourth-industrial-revolution-information-management/diagram.webp", alt: "Fourth Industrial Revolution and Information Management" },
    title: 'The Fourth Industrial Revolution (4IR)',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Fourth Industrial Revolution (4IR)</strong> is characterised by the fusion of digital, physical, and biological systems through advanced technologies.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">AI and machine learning</strong>
            <p className="text-slate-600">Systems that learn from data to make decisions. E.g. recommendation engines, voice assistants, fraud detection.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Robotics and automation</strong>
            <p className="text-slate-600">Robots perform manufacturing, surgery, and delivery tasks. Automation replaces repetitive human tasks.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">IoT and smart cities</strong>
            <p className="text-slate-600">Interconnected devices manage traffic, utilities, and public services intelligently in real time.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">3D printing</strong>
            <p className="text-slate-600">Creates physical objects from digital models. Used in medicine (prosthetics), construction, and manufacturing.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Blockchain</strong>
            <p className="text-slate-600">A decentralised, tamper-resistant ledger. Used for cryptocurrency, supply-chain tracking, and secure voting.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">5IR emerging</strong>
            <p className="text-slate-600">Focuses on collaboration between humans and intelligent machines, emphasising sustainability and human wellbeing.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Impact of 4IR on employment',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          4IR creates new job categories while automating others — especially in South Africa's economy.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Jobs at risk</strong>
            <p className="text-slate-600">Routine, repetitive tasks: cashiers, assembly-line workers, data capturers, basic bookkeepers.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">New and growing jobs</strong>
            <p className="text-slate-600">Data scientists, AI engineers, cybersecurity specialists, drone operators, social media managers.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The information management cycle and PAT',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>PAT (Practical Assessment Task)</strong> follows the information management cycle.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Phase 1 — Planning and collecting</strong>
            <p className="text-slate-600">Define the problem, set research questions, plan data collection methods (surveys, observations, internet research).</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Phase 2 — Processing</strong>
            <p className="text-slate-600">Capture data in a spreadsheet or database, create charts and queries, check data quality.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Phase 3 — Presenting</strong>
            <p className="text-slate-600">Produce the final report using word processor, include graphs, analysis, conclusions, and references.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Data quality checks</strong>
            <p className="text-slate-600">Check for accuracy, completeness, consistency, and timeliness of collected data before processing.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Search strategies and referencing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective searching and proper referencing are core information management skills.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Search strategies</strong>
            <p className="text-slate-600">Use specific keywords, Boolean operators (AND, OR, NOT), quotation marks for exact phrases, and filter by date or source type.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Referencing</strong>
            <p className="text-slate-600">In-text citation (Author, Year) and bibliography at the end. Prevents plagiarism and allows readers to verify sources.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'Which 4IR technology creates physical objects layer by layer from a digital design file?',
    options: ['Blockchain', '3D printing', 'Virtual reality', 'Cloud computing'],
    answer: '3D printing',
    explanation: '3D printing (additive manufacturing) builds objects layer by layer from digital models, used in medicine, engineering, and product design.',
  },
  {
    prompt: 'In the context of 4IR, what does "machine learning" mean?',
    options: ['Teaching humans to use machines', 'Systems that improve automatically from experience/data without being explicitly reprogrammed', 'Repairing broken machines', 'Designing factory machines'],
    answer: 'Systems that improve automatically from experience/data without being explicitly reprogrammed',
    explanation: 'Machine learning is a subset of AI where algorithms learn patterns from data to make predictions or decisions.',
  },
  {
    prompt: 'Which job role is MOST LIKELY to be created (not lost) as a result of 4IR?',
    options: ['Data capturer', 'Assembly-line factory worker', 'Cybersecurity specialist', 'Bank teller'],
    answer: 'Cybersecurity specialist',
    explanation: '4IR increases the need for cybersecurity professionals to protect connected systems. Routine data-capturing and assembly jobs are at risk from automation.',
  },
  {
    prompt: 'Blockchain technology is best described as:',
    options: ['A type of social network', 'A decentralised, tamper-resistant record-keeping system', 'A cloud-based word processor', 'An antivirus programme'],
    answer: 'A decentralised, tamper-resistant record-keeping system',
    explanation: 'Blockchain stores data in linked, cryptographically secured blocks distributed across many nodes, making records extremely difficult to alter.',
  },
  {
    prompt: 'In which PAT phase would a learner create charts and queries to analyse their collected data?',
    options: ['Phase 1 — Planning', 'Phase 2 — Processing', 'Phase 3 — Presenting', 'Phase 4 — Editing'],
    answer: 'Phase 2 — Processing',
    explanation: 'Phase 2 (Processing) involves entering data into a spreadsheet or database, running queries, creating charts, and performing analysis.',
  },
  {
    prompt: 'A learner searches Google for information about climate change in SA. Using the phrase "climate change South Africa" in quotation marks will:',
    options: ['Exclude all South African results', 'Find only pages containing that exact phrase', 'Search all possible meanings of the words', 'Limit results to government websites'],
    answer: 'Find only pages containing that exact phrase',
    explanation: 'Enclosing words in quotation marks tells the search engine to find pages with that exact sequence of words, narrowing results significantly.',
  },
  {
    prompt: 'What characterises the Fifth Industrial Revolution (5IR) compared to 4IR?',
    options: ['5IR focuses purely on robotics replacing humans', '5IR emphasises human-machine collaboration and sustainability alongside advanced technology', '5IR has not started yet', '5IR only affects manufacturing industries'],
    answer: '5IR emphasises human-machine collaboration and sustainability alongside advanced technology',
    explanation: '5IR builds on 4IR technologies but focuses on humans working together with smart machines, with greater emphasis on sustainability and human wellbeing.',
  },
  {
    prompt: 'Why is checking data quality important in the PAT processing phase?',
    options: ['To make the report look longer', 'Inaccurate or incomplete data leads to incorrect conclusions and an unreliable PAT', 'The examiner requires a minimum number of data points', 'Data quality is only important for large companies'],
    answer: 'Inaccurate or incomplete data leads to incorrect conclusions and an unreliable PAT',
    explanation: 'Data quality (accuracy, completeness, consistency) directly affects the validity of analysis and conclusions drawn in the PAT.',
  },
  {
    prompt: 'Which Boolean search operator would you use to EXCLUDE results containing the word "crime" from a search about "cybersecurity"?',
    options: ['cybersecurity AND crime', 'cybersecurity OR crime', 'cybersecurity NOT crime', '"cybersecurity crime"'],
    answer: 'cybersecurity NOT crime',
    explanation: 'The NOT (or minus sign in Google) operator excludes pages containing the specified term from search results.',
  },
  {
    prompt: 'In which PAT phase does the learner produce the final written report with graphs and conclusions?',
    options: ['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'],
    answer: 'Phase 3',
    explanation: 'Phase 3 (Presenting) involves compiling the final report: writing up findings, inserting charts, drawing conclusions, and listing references.',
  },
];

const FourthIndustrialRevolutionInfoManagement = () => (
  <CapsSubjectTopic
    title="Fourth Industrial Revolution and Information Management"
    subtitle="4IR technologies, employment impact, PAT phases, and search strategies"
    learnSteps={learnSteps}
    task="gr11-fourth-industrial-revolution-information-management-t3"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default FourthIndustrialRevolutionInfoManagement;
