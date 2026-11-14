import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/bus/term2/operations-marketing-function/diagram.webp", alt: "Operations and Marketing Function" },
    title: 'The operations/production function',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>operations function</strong> transforms inputs into finished goods or services through a production process.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Inputs</strong>
            <p className="text-slate-600">Raw materials, labour, machinery, energy, information and capital.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Process</strong>
            <p className="text-slate-600">Transforming inputs using equipment, technology and skilled workers.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Outputs</strong>
            <p className="text-slate-600">Finished products or completed services ready for customers.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The marketing function and the 7 Ps',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>marketing function</strong> creates, communicates and delivers value to customers. The <strong>7 Ps marketing mix</strong> is the core framework.
        </p>
        <div className="grid gap-2 md:grid-cols-4 text-left text-sm">
          {[
            { p: 'Product', desc: 'What is sold and its features, branding, packaging' },
            { p: 'Price', desc: 'How much customers pay — cost-based, competitive or value-based pricing' },
            { p: 'Place', desc: 'Where and how the product reaches the customer (distribution channels)' },
            { p: 'Promotion', desc: 'Advertising, social media, PR, sales promotions' },
            { p: 'People', desc: 'Staff who deliver the service and their training' },
            { p: 'Process', desc: 'The steps involved in delivering the service' },
            { p: 'Physical evidence', desc: 'Tangible proof of the service — receipt, packaging, décor' },
          ].map(({ p, desc }) => (
            <div key={p} className="rounded-xl bg-slate-100 p-3">
              <strong className="text-slate-700">{p}</strong>
              <p className="text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Marketing research — why it matters',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Marketing research</strong> gathers data about customers, competitors and the market to inform better business decisions.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <p className="font-bold text-slate-800 mb-2">Types of data:</p>
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <strong className="text-blue-700">Primary data</strong>
              <p className="text-slate-600 text-sm">Collected directly — surveys, interviews, focus groups, observations.</p>
            </div>
            <div>
              <strong className="text-purple-700">Secondary data</strong>
              <p className="text-slate-600 text-sm">Already exists — government reports, industry studies, online data.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Linking operations and marketing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Operations and marketing must <strong>work together</strong> — marketing sets the demand and operations must deliver on the promise.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <p className="font-bold text-amber-800 mb-2">Example — a fast food restaurant:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Marketing runs a "R49 meal deal" promotion → creates demand</li>
            <li>Operations must ensure stock, staff and equipment can handle the surge</li>
            <li>If operations fail, the marketing promise is broken → customer dissatisfaction</li>
          </ul>
        </div>
        <p className="text-sm text-slate-500">Exam questions often ask you to show awareness of both functions and their interdependence.</p>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'Which of the following is an example of an INPUT in the production process?',
    options: ['A finished pair of shoes', 'The leather used to make shoes', 'A customer review of shoes', 'A shoe sold at a store'],
    answer: 'The leather used to make shoes',
    explanation: 'Inputs are the raw materials and resources used in production — leather is a raw material input for making shoes.',
  },
  {
    prompt: 'Which P in the marketing mix refers to the advertising and social media used to create awareness?',
    options: ['Product', 'Place', 'Process', 'Promotion'],
    answer: 'Promotion',
    explanation: 'Promotion covers all communication activities that inform, persuade and remind customers about the product — including advertising, social media and public relations.',
  },
  {
    prompt: 'A coffee shop trains its baristas on customer service. Which P of the marketing mix does this relate to?',
    options: ['Product', 'People', 'Process', 'Physical evidence'],
    answer: 'People',
    explanation: 'The People P refers to all employees who interact with customers — training baristas directly improves this element of the service marketing mix.',
  },
  {
    prompt: 'A market researcher conducts interviews with 50 customers at a shopping mall. This is an example of:',
    options: ['Secondary research', 'Desk research', 'Primary research', 'Quantitative secondary data'],
    answer: 'Primary research',
    explanation: 'Primary research involves collecting new data directly from sources — face-to-face interviews with customers are a classic primary research method.',
  },
  {
    prompt: 'Which P of the marketing mix would a business change if it decides to start selling online as well as in-store?',
    options: ['Price', 'Promotion', 'Place', 'Product'],
    answer: 'Place',
    explanation: 'Place refers to the distribution channels and locations where the product is available — adding online sales changes the Place element.',
  },
  {
    prompt: 'An operations manager notices that marketing has launched a major sale but the warehouse does not have enough stock. This shows a breakdown in:',
    options: ['The HR function of the business', 'The link between marketing and operations', 'The financial function of the business', 'The public relations function of the business'],
    answer: 'The link between marketing and operations',
    explanation: 'Marketing creates demand through promotions, but operations must ensure sufficient stock and capacity to fulfil that demand — poor coordination leads to stockouts.',
  },
  {
    prompt: 'A receipt given to a customer after a haircut is an example of which P?',
    options: ['Product, the haircut itself', 'People, the hairdresser who did the cut', 'Process, the steps that were followed', 'Physical evidence'],
    answer: 'Physical evidence',
    explanation: 'Physical evidence includes tangible items that prove a service was delivered — a receipt, certificate or branded packaging are all examples.',
  },
  {
    prompt: 'A government report about consumer spending trends used by a marketing team is an example of:',
    options: ['Primary data', 'Secondary data', 'Qualitative primary data', 'Observational research'],
    answer: 'Secondary data',
    explanation: 'Secondary data already exists and is gathered from published sources like government reports, industry studies and online databases.',
  },
  {
    prompt: 'Which of the following BEST describes the purpose of the operations function?',
    options: ['To advertise the products to consumers', 'To turn inputs into finished goods or services', 'To recruit and train the new staff', 'To manage the relations with investors'],
    answer: 'To turn inputs into finished goods or services',
    explanation: 'The operations (production) function is responsible for the input-process-output model — converting raw materials and resources into goods or services.',
  },
];

const OperationsMarketingFunction = () => (
  <CapsSubjectTopic
    title="Operations and Marketing Function"
    subtitle="Core production and marketing activities in a business"
    learnSteps={learnSteps}
    task="gr11-operations-marketing-function-t2"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default OperationsMarketingFunction;
