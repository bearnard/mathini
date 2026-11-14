import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1712", "title": "Newcomen engine introduced", "description": "Thomas Newcomen's steam engine was first used to pump water from mines. Steam power later became vital to factories and industrial growth."},
            {"date": "1764", "title": "Spinning Jenny invented", "description": "James Hargreaves invented the Spinning Jenny, allowing workers to spin more thread at once. It helped accelerate mechanised textile production in Britain."},
            {"date": "1780s", "title": "Factories rapidly expand", "description": "Machine production spread through Britain's textile industry and factory towns grew quickly. This drove urbanisation and changed how people worked and lived."},
            {"date": "1833", "title": "Factory Act passed", "description": "Britain passed a Factory Act to limit some forms of child labour and regulate working hours. It reflected growing concern about workers' rights and unsafe conditions."},
            {"date": "1867", "title": "Diamonds found near Kimberley", "description": "Diamond discoveries in southern Africa transformed Kimberley into a major mining centre. This linked industrial change in Britain to new economic changes in the region."},
            {"date": "1871", "title": "Kimberley rush intensifies", "description": "Large numbers of diggers moved to the Kimberley fields and mining expanded rapidly. Town growth, labour demand, and trade all increased."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Industrial change reshaped work and society',
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
    options: ['A shift from hand production to machine factory production', 'The end of all farming in Europe', 'A system in which only kings controlled trade', 'The moving of national borders every year'],
    answer: 'A shift from hand production to machine factory production',
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
    options: ['To organise workers to demand better pay and conditions', 'To make the laws for all of the countries', 'To stop the use of all machines in factories', 'To take the place of schools with factories'],
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
