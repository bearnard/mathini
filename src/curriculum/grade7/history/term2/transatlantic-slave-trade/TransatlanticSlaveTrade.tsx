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
            {"date": "1502", "title": "Enslaved Africans reach Americas", "description": "The first recorded shipment of enslaved Africans arrived in the Spanish Caribbean. This marked the early growth of the transatlantic slave trade."},
            {"date": "16th–18th centuries", "title": "Middle Passage expands", "description": "European traders transported millions of enslaved Africans across the Atlantic under brutal conditions. West and West-Central Africa were heavily affected by this forced migration."},
            {"date": "1619", "title": "Africans arrive in Virginia", "description": "A ship brought captive Africans to the English colony of Virginia. This became an important moment in the history of slavery in English North America."},
            {"date": "1791", "title": "Haitian Revolution begins", "description": "Enslaved people in Saint-Domingue launched a major revolt against slavery and colonial rule. It became the most successful slave uprising in Atlantic history."},
            {"date": "1807", "title": "Britain ends slave trade", "description": "The British Parliament abolished the transatlantic slave trade in the British Empire. Although illegal trading continued, abolitionists had won a major victory."},
            {"date": "1833", "title": "Britain abolishes slavery", "description": "The Slavery Abolition Act ended slavery in most British colonies. Enslaved people still faced apprenticeship schemes and continuing inequality."},
            {"date": "1888", "title": "Brazil abolishes slavery", "description": "Brazil passed the Golden Law and became the last country in the Americas to abolish slavery. This marked the final legal end of slavery in the Atlantic world."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The transatlantic slave trade reshaped many societies',
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
    options: ['The sea voyage of enslaved Africans to the Americas', 'A mountain pass in the Alps of Europe', 'A trade route inside the city of Timbuktu', 'A railway line that ran out to Cape Town'],
    answer: 'The sea voyage of enslaved Africans to the Americas',
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
    options: ['Resistance took many forms, from revolt to everyday defiance', 'There was never any resistance at all', 'Resistance took place in Europe and nowhere else', 'Resistance meant agreeing to enslavement'],
    answer: 'Resistance took many forms, from revolt to everyday defiance',
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
    options: ['Social and population disruption in African societies', 'Immediate equality in all of the colonies', 'No effect on the economies of the Atlantic', 'The end of all trade around the world'],
    answer: 'Social and population disruption in African societies',
    explanation: 'Forced removal of millions of people had major long-term effects.',
  },
  {
    prompt: 'Which sentence correctly shows cause and consequence?',
    options: ['Demand for plantation labour raised forced Atlantic transport', 'Abolition caused the start of the trade', 'Resistance ended before the trade had begun', 'The trade began because railways were expanding'],
    answer: 'Demand for plantation labour raised forced Atlantic transport',
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
