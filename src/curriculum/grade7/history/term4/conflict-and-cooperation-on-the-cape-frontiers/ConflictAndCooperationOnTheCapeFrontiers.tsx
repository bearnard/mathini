import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Frontier life involved conflict and cooperation',
    image: {
      src: '/curriculum/grade7/his/term4/conflict-and-cooperation-on-the-cape-frontiers/diagram.webp',
      alt: 'Grade 7 learners studying Cape frontier interactions including trade, migration, and resistance',
    },
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
    options: ['As organised efforts to defend communities, land, and autonomy', 'As support for colonial expansion', 'As trade agreements only', 'As unrelated to frontier change'],
    answer: 'As organised efforts to defend communities, land, and autonomy',
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
    options: ['Trade, negotiation, and local exchange between groups', 'No contact between groups', 'Only military conflict', 'Ignoring all economic links'],
    answer: 'Trade, negotiation, and local exchange between groups',
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
    options: ['The Cape frontiers changed through both violent conflict and economic cooperation', 'Only one group shaped frontier history', 'Frontier history has no connection to migration', 'Trade and conflict never happened together'],
    answer: 'The Cape frontiers changed through both violent conflict and economic cooperation',
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
