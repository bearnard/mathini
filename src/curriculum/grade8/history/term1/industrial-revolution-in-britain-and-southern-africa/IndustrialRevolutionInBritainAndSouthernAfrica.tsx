import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Industrial change reshaped work and society',
    image: {
      src: '/curriculum/grade8/his/term1/industrial-revolution-in-britain-and-southern-africa/diagram.webp',
      alt: 'Grade 8 learners comparing factories in Britain, growing towns, and early diamond mining in Kimberley',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Industrial Revolution brought machine production, factory work, and fast urban growth. It also raised
          serious social questions about child labour and workers&apos; rights, while southern Africa changed through
          expanding trade and the rise of diamond mining in Kimberley.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does industrialisation mean?',
    options: [
      'A shift from mainly hand production to machine-based factory production',
      'The end of all farming in Europe',
      'A system where only kings controlled trade',
      'Moving national borders every year',
    ],
    answer: 'A shift from mainly hand production to machine-based factory production',
    explanation: 'Industrialisation is the move toward machines, factories, and mass production.',
  },
  {
    prompt: 'What is urbanisation?',
    options: [
      'The growth of towns and cities as people move there',
      'The decline of all transport systems',
      'A ban on factory work',
      'The replacement of railways with ships',
    ],
    answer: 'The growth of towns and cities as people move there',
    explanation: 'Urbanisation happens when more people live and work in urban areas.',
  },
  {
    prompt: 'Why was child labour a major issue during the Industrial Revolution?',
    options: [
      'Many children worked long hours in unsafe conditions',
      'Children were not allowed to attend any schools in the world',
      'Children owned most factories',
      'Children were paid higher wages than adults',
    ],
    answer: 'Many children worked long hours in unsafe conditions',
    explanation: 'Historical sources show many children faced harsh factory and mine working conditions.',
  },
  {
    prompt: 'What was a key purpose of early trade unions?',
    options: [
      'To organise workers to demand better pay and conditions',
      'To make laws for all countries',
      'To stop all machines from being used',
      'To replace schools with factories',
    ],
    answer: 'To organise workers to demand better pay and conditions',
    explanation: 'Trade unions helped workers act together for fairer treatment.',
  },
  {
    prompt: 'Which invention helped power many factories and mines in this period?',
    options: ['Steam engines', 'Solar panels', 'Jet aircraft', 'Digital computers'],
    answer: 'Steam engines',
    explanation: 'Steam power drove machinery, transport, and industrial expansion.',
  },
  {
    prompt: 'Why did Kimberley become important in southern Africa in the late 1800s?',
    options: [
      'Diamonds were discovered there',
      'It became the first capital of Africa',
      'It was the main port for Atlantic slavery',
      'Its farms produced all South African wheat',
    ],
    answer: 'Diamonds were discovered there',
    explanation: 'Diamond discoveries turned Kimberley into a major mining centre.',
  },
  {
    prompt: 'A factory rulebook from 1840 is best classified as which type of source?',
    options: ['A written historical source', 'An oral source', 'A modern satellite image', 'An archaeological fossil'],
    answer: 'A written historical source',
    explanation: 'A rulebook is a written document from the period being studied.',
  },
  {
    prompt: 'Which statement shows a clear cause-and-consequence link?',
    options: [
      'Factory growth increased jobs, which drew more people into cities',
      'Cities shrank because factories closed before they opened',
      'Trade unions ended all industries immediately',
      'Diamond mining happened before any tools were invented',
    ],
    answer: 'Factory growth increased jobs, which drew more people into cities',
    explanation: 'Industrial jobs were a major cause of urban growth.',
  },
  {
    prompt: 'Which event happened first?',
    options: [
      'Diamond mining in Kimberley began before gold mining on the Witwatersrand',
      'Gold mining on the Witwatersrand began before diamond mining in Kimberley',
      'Both began in exactly the same year',
      'Neither happened in South Africa',
    ],
    answer: 'Diamond mining in Kimberley began before gold mining on the Witwatersrand',
    explanation: 'Major diamond mining started in Kimberley before the Witwatersrand gold boom.',
  },
];

const IndustrialRevolutionInBritainAndSouthernAfrica = () => (
  <CapsSubjectTopic
    title="Industrial Revolution in Britain and Southern Africa"
    subtitle="Industrialisation, urbanisation, labour change, and Kimberley diamonds"
    learnSteps={learnSteps}
    task="gr8-industrial-revolution-in-britain-and-southern-africa-t1"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default IndustrialRevolutionInBritainAndSouthernAfrica;
