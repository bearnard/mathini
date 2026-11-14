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
            {"date": "1795", "title": "Britain first occupies Cape", "description": "Britain seized the Cape Colony during the wars with revolutionary France. British control would shape frontier politics in the nineteenth century."},
            {"date": "1811–1812", "title": "Fourth Frontier War", "description": "British-led forces expelled many Xhosa west of the Fish River. The war was driven by land, cattle, and colonial control."},
            {"date": "1819", "title": "Nxele attacks Grahamstown", "description": "Xhosa forces led by Maqana Nxele attacked Grahamstown in resistance to colonial expansion. The failed attack became a key moment in frontier conflict."},
            {"date": "1820", "title": "British settlers arrive", "description": "Thousands of British settlers were placed in the eastern Cape. Their arrival strengthened colonial presence on the frontier and increased pressure on land."},
            {"date": "1834", "title": "Slavery abolished at Cape", "description": "Britain legally abolished slavery in the Cape Colony. Former slave owners were compensated, but freed people still faced major inequality."},
            {"date": "1834–1835", "title": "Sixth Frontier War", "description": "A major war broke out between Xhosa communities and colonial forces. It showed both fierce resistance and the instability of the eastern frontier."},
            {"date": "1836", "title": "Great Trek begins", "description": "Many Boers left the Cape Colony and moved inland. Migration was influenced by dissatisfaction with British rule, frontier insecurity, and changing labour systems."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Frontier life involved conflict and cooperation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The early 19th-century Cape frontiers saw both conflict and exchange. Learners study frontier wars, Xhosa
          resistance, abolition of slavery, migration, and changing trade connections.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which power gained control of the Cape in the early 1800s?',
    options: ['Britain', 'Portugal', 'Mali Empire', 'Ottoman Empire'],
    answer: 'Britain',
    explanation: 'British rule expanded at the Cape during the early 19th century.',
  },
  {
    prompt: 'What were the Cape frontier wars mainly about?',
    options: ['Land, cattle, and political control', 'Space travel routes', 'Industrial factory wages only', 'Polar exploration rights'],
    answer: 'Land, cattle, and political control',
    explanation: 'Frontier conflict was closely linked to land and resource control.',
  },
  {
    prompt: 'How should Xhosa resistance best be understood in this period?',
    options: ['As organised efforts to defend communities, land and independence', 'As support for the expansion of the colony', 'As trade agreements and nothing more', 'As something unrelated to change on the frontier'],
    answer: 'As organised efforts to defend communities, land and independence',
    explanation: 'Xhosa resistance formed an important part of frontier history.',
  },
  {
    prompt: 'What happened to slavery under British rule at the Cape?',
    options: ['It was legally abolished in 1834', 'It expanded after 1850', 'It ended in 1652', 'It was replaced by voting rights only'],
    answer: 'It was legally abolished in 1834',
    explanation: 'Slavery was abolished at the Cape in 1834, though inequality persisted.',
  },
  {
    prompt: 'Which movement is linked to some settlers leaving the Cape Colony in the 1830s?',
    options: ['The Great Trek', 'The Mfecane only', 'The Mineral Revolution', 'The Soweto Uprising'],
    answer: 'The Great Trek',
    explanation: 'The Great Trek involved groups moving inland from the Cape.',
  },
  {
    prompt: 'What does “cooperation” on frontiers include?',
    options: ['Trade, negotiation and local exchange between groups', 'No contact at all between the groups', 'Military conflict and nothing else', 'Ignoring all of the economic links between groups'],
    answer: 'Trade, negotiation and local exchange between groups',
    explanation: 'Frontier societies experienced both conflict and forms of cooperation.',
  },
  {
    prompt: 'Which timeline order is correct?',
    options: ['British control strengthens → slavery abolished in 1834 → Great Trek begins', 'Great Trek begins → VOC founded in 1652 → abolition in 1834', 'Abolition in 1834 → Dutch arrive in 1500', 'Frontier wars end before British arrival'],
    answer: 'British control strengthens → slavery abolished in 1834 → Great Trek begins',
    explanation: 'This sequence matches the broad early 19th-century chronology.',
  },
  {
    prompt: 'Which paragraph topic sentence best fits this unit?',
    options: ['The Cape frontiers changed through conflict and economic cooperation', 'Only one group shaped the history of the frontier', 'Frontier history has no link to migration', 'Trade and conflict never took place together'],
    answer: 'The Cape frontiers changed through conflict and economic cooperation',
    explanation: 'A strong topic sentence captures both sides of frontier interactions.',
  },
];

const ConflictAndCooperationOnTheCapeFrontiers = () => (
  <CapsSubjectTopic
    title="Conflict and Cooperation on the Cape Frontiers"
    subtitle="British expansion, frontier wars, resistance, abolition, migration, and trade"
    learnSteps={learnSteps}
    task="gr7-conflict-and-cooperation-on-the-cape-frontiers-t4"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default ConflictAndCooperationOnTheCapeFrontiers;
