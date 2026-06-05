import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Quality control vs quality assurance',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Both <strong>quality control (QC)</strong> and <strong>quality assurance (QA)</strong> aim to deliver excellent products and services, but they work differently.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Quality Control (QC)</strong>
            <p className="text-slate-600">Reactive — inspects <em>finished</em> products to detect defects before they reach customers. Example: inspecting bottles on a production line.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Quality Assurance (QA)</strong>
            <p className="text-slate-600">Proactive — builds quality into <em>every step</em> of the process to prevent defects. Example: TQM, ISO certification, documented procedures.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Total Quality Management (TQM) and ISO',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>TQM</strong> is a management philosophy focused on continuous improvement across the entire organisation. <strong>ISO</strong> is an internationally recognised quality standard.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <p className="font-bold text-slate-800 mb-2">Key TQM principles:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Customer focus — meeting and exceeding customer expectations</li>
            <li>Employee involvement — everyone is responsible for quality</li>
            <li>Continuous improvement (Kaizen) — always look for small improvements</li>
            <li>Process approach — manage activities as interconnected processes</li>
          </ul>
        </div>
        <p className="text-sm text-slate-500">ISO 9001 is a widely used quality management standard that certifies a business meets international quality requirements.</p>
      </div>
    ),
  },
  {
    title: 'Ethics in business',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Business ethics</strong> are the moral principles that guide decision-making and behaviour in a company.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Ethical behaviour examples</strong>
            <ul className="list-disc list-inside text-slate-700 mt-1 text-sm space-y-1">
              <li>Honest advertising</li>
              <li>Fair treatment of employees</li>
              <li>Paying suppliers on time</li>
              <li>Environmental responsibility</li>
            </ul>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Unethical behaviour examples</strong>
            <ul className="list-disc list-inside text-slate-700 mt-1 text-sm space-y-1">
              <li>False advertising</li>
              <li>Bribery and corruption</li>
              <li>Exploiting cheap labour</li>
              <li>Dumping waste illegally</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Professionalism in the workplace',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Professionalism</strong> means behaving with integrity, competence and respect in all workplace interactions.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <p className="font-bold text-amber-800 mb-2">Key professional qualities:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li><strong>Punctuality:</strong> arriving on time and meeting deadlines</li>
            <li><strong>Reliability:</strong> consistently delivering on commitments</li>
            <li><strong>Respect:</strong> treating colleagues, clients and managers with dignity</li>
            <li><strong>Confidentiality:</strong> keeping sensitive business information private</li>
            <li><strong>Continuous development:</strong> upgrading skills and staying current</li>
          </ul>
        </div>
        <p className="text-sm text-slate-500">A Code of Ethics is a written document that sets out the standards of ethical and professional conduct expected of all employees.</p>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'An inspector samples 20 jars of peanut butter from a batch and rejects any that do not meet the weight standard. This is an example of:',
    options: ['Quality assurance', 'Total Quality Management', 'Quality control', 'ISO certification'],
    answer: 'Quality control',
    explanation: 'Quality control involves inspecting finished products or samples to detect defects — this reactive approach catches problems after production.',
  },
  {
    prompt: 'Which quality approach builds quality into every step of the production process rather than checking outputs at the end?',
    options: ['Quality control', 'Quality assurance', 'Product inspection', 'After-sales service'],
    answer: 'Quality assurance',
    explanation: 'Quality assurance is proactive — it embeds quality standards and documented procedures throughout the process to prevent defects before they occur.',
  },
  {
    prompt: 'What does TQM stand for in business studies?',
    options: ['Total Trade Management', 'Total Quality Management', 'Technical Quality Measurement', 'Target Quality Monitoring'],
    answer: 'Total Quality Management',
    explanation: 'TQM is a management philosophy that involves all employees in continuous improvement to meet and exceed customer expectations throughout the entire organisation.',
  },
  {
    prompt: 'A marketing manager approves an advertisement that exaggerates a product\'s health benefits. This is an example of:',
    options: ['Competitive pricing', 'Ethical marketing', 'Unethical behaviour (false advertising)', 'Corporate social responsibility'],
    answer: 'Unethical behaviour (false advertising)',
    explanation: 'Deliberately misleading consumers about product benefits is unethical and may also be illegal under the Consumer Protection Act.',
  },
  {
    prompt: 'Which ISO standard is specifically related to quality management systems?',
    options: ['ISO 14001', 'ISO 9001', 'ISO 45001', 'ISO 26000'],
    answer: 'ISO 9001',
    explanation: 'ISO 9001 is the internationally recognised standard for quality management systems, certifying that a business consistently meets customer and regulatory requirements.',
  },
  {
    prompt: 'An employee keeps a client\'s business plan confidential and does not share it with competitors. Which professional quality is this?',
    options: ['Punctuality', 'Reliability', 'Confidentiality', 'Continuous development'],
    answer: 'Confidentiality',
    explanation: 'Confidentiality means protecting sensitive business or client information — a core professional responsibility in any business environment.',
  },
  {
    prompt: 'Which of the following BEST describes a Code of Ethics in a business?',
    options: [
      'A law passed by Parliament',
      'A written document outlining the standards of ethical and professional conduct expected from all employees',
      'A financial reporting standard',
      'A customer complaint procedure',
    ],
    answer: 'A written document outlining the standards of ethical and professional conduct expected from all employees',
    explanation: 'A Code of Ethics is an internal business document that guides employees\' behaviour and decision-making in line with the company\'s values.',
  },
  {
    prompt: 'Which TQM principle involves all employees — not just managers — taking responsibility for quality?',
    options: ['Customer focus', 'Continuous improvement', 'Employee involvement', 'Process approach'],
    answer: 'Employee involvement',
    explanation: 'TQM requires that every employee, at every level, understands their role in maintaining quality — it is not just management\'s responsibility.',
  },
  {
    prompt: 'A business pays a government official to secure a contract. This is an example of:',
    options: ['Legitimate lobbying', 'CSR activity', 'Bribery and corruption', 'Professional networking'],
    answer: 'Bribery and corruption',
    explanation: 'Paying officials to gain unfair advantage is bribery — an unethical and illegal practice that undermines fair competition and public trust.',
  },
];

const QualityEthicsProfessionalism = () => (
  <CapsSubjectTopic
    title="Quality, Ethics and Professionalism"
    subtitle="Standards of conduct and quality in business contexts"
    learnSteps={learnSteps}
    task="gr11-quality-ethics-professionalism-t2"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default QualityEthicsProfessionalism;
