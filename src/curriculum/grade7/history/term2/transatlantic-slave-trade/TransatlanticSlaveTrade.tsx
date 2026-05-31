import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'The transatlantic slave trade reshaped many societies',
    image: {
      src: '/curriculum/grade7/his/term2/transatlantic-slave-trade/diagram.webp',
      alt: 'Grade 7 learners studying Atlantic routes linked to West Africa, the Americas, and Europe',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Between the 16th and 19th centuries, millions of enslaved Africans were forced across the Atlantic. This
          system caused deep human suffering and long-term social and economic consequences.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which region was a major point of forced departure in this trade system?',
    options: ['West Africa', 'Siberia', 'Antarctica', 'South Pacific islands only'],
    answer: 'West Africa',
    explanation: 'Many enslaved people were captured in West Africa and transported across the Atlantic.',
  },
  {
    prompt: 'What does the term “Middle Passage” refer to?',
    options: ['The sea journey carrying enslaved Africans to the Americas', 'A mountain pass in Europe', 'A trade route inside Timbuktu', 'A railway line to Cape Town'],
    answer: 'The sea journey carrying enslaved Africans to the Americas',
    explanation: 'The Middle Passage was the Atlantic crossing under brutal conditions.',
  },
  {
    prompt: 'Why did plantation owners demand enslaved labour?',
    options: ['To maximise profits from cash crops', 'To teach navigation skills', 'To reduce sea travel', 'To build desert caravans'],
    answer: 'To maximise profits from cash crops',
    explanation: 'Plantation economies used forced labour to increase production and profit.',
  },
  {
    prompt: 'Which statement best describes resistance by enslaved people?',
    options: ['Resistance happened in many forms, including revolt and everyday acts of defiance', 'There was never any resistance', 'Resistance only happened in Europe', 'Resistance meant agreeing with enslavement'],
    answer: 'Resistance happened in many forms, including revolt and everyday acts of defiance',
    explanation: 'Enslaved people resisted in different ways despite severe control and danger.',
  },
  {
    prompt: 'What does abolition mean in this context?',
    options: ['Ending the legal slave trade and slavery', 'Starting new trade monopolies', 'Replacing ships with camels', 'Building more plantations'],
    answer: 'Ending the legal slave trade and slavery',
    explanation: 'Abolition movements worked to end the trade and institution of slavery.',
  },
  {
    prompt: 'Which skill helps when judging whether a source is reliable?',
    options: ['Source analysis', 'Long division', 'Map colouring', 'Physical training drills'],
    answer: 'Source analysis',
    explanation: 'Source analysis checks origin, purpose, and evidence quality.',
  },
  {
    prompt: 'Which is a likely long-term impact of the transatlantic slave trade?',
    options: ['Demographic and social disruption in African societies', 'Immediate equality across all colonies', 'No effect on Atlantic economies', 'The end of all global trade'],
    answer: 'Demographic and social disruption in African societies',
    explanation: 'Forced removal of millions of people had major long-term effects.',
  },
  {
    prompt: 'Which sentence correctly shows cause and consequence?',
    options: ['Demand for plantation labour increased forced transportation across the Atlantic', 'Abolition caused the start of the trade', 'Resistance ended before the trade began', 'The trade began because railways expanded'],
    answer: 'Demand for plantation labour increased forced transportation across the Atlantic',
    explanation: 'Economic demand helped drive the expansion of forced labour systems.',
  },
];

const TransatlanticSlaveTrade = () => (
  <CapsSubjectTopic
    title="The Transatlantic Slave Trade"
    subtitle="Middle Passage, plantations, resistance, abolition, and historical consequence"
    learnSteps={learnSteps}
    task="gr7-transatlantic-slave-trade-t2"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default TransatlanticSlaveTrade;
