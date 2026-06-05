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
            {"date": "1652", "title": "VOC founds Cape settlement", "description": "Jan van Riebeeck established a refreshment station for the Dutch East India Company at Table Bay. This began formal Dutch colonisation at the Cape."},
            {"date": "1657", "title": "Free burghers created", "description": "Some VOC employees were released from company service and allowed to farm independently. Their farms increased settler expansion beyond the original station."},
            {"date": "1658", "title": "Slaves imported to Cape", "description": "The VOC imported enslaved people to meet labour demands in the colony. Slavery became central to farming and domestic work at the Cape."},
            {"date": "1679", "title": "Stellenbosch established", "description": "The founding of Stellenbosch encouraged further farming inland. This deepened colonial occupation and pressure on local land and resources."},
            {"date": "1688", "title": "French Huguenots arrive", "description": "French Protestant refugees settled at the Cape and added to the settler population. They contributed to agriculture, especially wine farming."},
            {"date": "18th century", "title": "Trekboers move inland", "description": "Semi-nomadic settler farmers moved deeper into the interior in search of grazing and land. Their expansion increased dispossession and conflict with indigenous communities."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The Cape changed under Dutch colonial expansion',
    image: {
      src: '/curriculum/grade7/his/term3/colonisation-of-the-cape/diagram.webp',
      alt: 'Grade 7 learners tracing VOC settlement growth, farming expansion, and slavery at the Cape',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Dutch East India Company (<strong>VOC</strong>) established a settlement at the Cape in 1652. Over time,
          farming expansion, enslavement, and land seizure reshaped life for many communities.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does VOC stand for in Cape history?',
    options: ['Dutch East India Company', 'Victorian Overseas Council', 'Village of Colonists', 'Voluntary Oceanic Commission'],
    answer: 'Dutch East India Company',
    explanation: 'VOC is the Dutch East India Company, which set up the Cape settlement.',
  },
  {
    prompt: 'In which year was the Dutch settlement founded at the Cape?',
    options: ['1652', '1492', '1795', '1910'],
    answer: '1652',
    explanation: 'The VOC established a refreshment station at the Cape in 1652.',
  },
  {
    prompt: 'Who were free burghers in the Cape colony?',
    options: ['Settlers allowed to farm outside direct VOC service', 'Only ship captains from Britain', 'Missionaries from North America', 'Enslaved workers on plantations'],
    answer: 'Settlers allowed to farm outside direct VOC service',
    explanation: 'Free burghers were released from VOC service to become farmers.',
  },
  {
    prompt: 'Who were trekboers?',
    options: ['Semi-nomadic farmers moving inland with livestock', 'Officials working only in port offices', 'West African merchants in Timbuktu', 'Industrial miners near Johannesburg'],
    answer: 'Semi-nomadic farmers moving inland with livestock',
    explanation: 'Trekboers moved inland in search of grazing and land.',
  },
  {
    prompt: 'Which phrase best describes land dispossession?',
    options: ['Communities losing control of their land through colonial expansion', 'Farmers rotating crops each season', 'Cities building new schools', 'Traders reducing caravan size'],
    answer: 'Communities losing control of their land through colonial expansion',
    explanation: 'Dispossession refers to people being forced off land or denied land rights.',
  },
  {
    prompt: 'Why is source analysis important for this topic?',
    options: ['Different sources can show different perspectives on colonial events', 'All sources always agree fully', 'Only maps matter in history', 'Paragraph writing is not needed'],
    answer: 'Different sources can show different perspectives on colonial events',
    explanation: 'Using multiple sources helps learners compare perspectives and evidence.',
  },
  {
    prompt: 'Which statement shows cause and consequence?',
    options: ['Expansion of settler farming increased pressure on land and resources', 'Cape settlement ended Atlantic trade immediately', 'Slavery reduced labour demand', 'VOC ruled because of rail transport'],
    answer: 'Expansion of settler farming increased pressure on land and resources',
    explanation: 'As farming expanded, competition over land and water often intensified.',
  },
  {
    prompt: 'Which writing task best fits this unit?',
    options: ['A paragraph explaining how colonisation changed the Cape', 'A lab report on plant growth', 'A geometry proof', 'A weather forecast only'],
    answer: 'A paragraph explaining how colonisation changed the Cape',
    explanation: 'CAPS history tasks include paragraph writing using evidence and sequence.',
  },
];

const ColonisationOfTheCape = () => (
  <CapsSubjectTopic
    title="Colonisation of the Cape"
    subtitle="VOC rule, slavery, free burghers, trekboers, and land dispossession"
    learnSteps={learnSteps}
    task="gr7-colonisation-of-the-cape-t3"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default ColonisationOfTheCape;
