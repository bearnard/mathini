import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Compare, Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { TimelineStrip } from '../../../../../components/diagrams/history/HistoryPictures';
import { CAPE_EVENTS } from '../../../../../components/diagrams/history/historyHelpers';

// The dates come from a tested list (historyHelpers.test.ts), the same dates as the topic's own timeline.
const ev = (label: string) => CAPE_EVENTS.find((e) => e.label.includes(label))!;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'The Cape frontiers: a timeline',
    content: slide(
      <>
        <Rule>
          Put the events in order. British control of the Cape strengthens, then slavery is abolished in {Math.floor(ev('Slavery').year)}, and then the Great Trek begins.
        </Rule>
        <TimelineStrip events={CAPE_EVENTS} id="cape" title="The Cape frontiers, 1795 to 1836" />
        <Worked
          title="Order three events"
          steps={[<>Britain first occupied the Cape in {Math.floor(ev('Britain').year)}, and British rule expanded in the early 19th century.</>, <>Slavery was legally abolished at the Cape in {Math.floor(ev('Slavery').year)}.</>, <>The Great Trek began in {Math.floor(ev('Great Trek').year)}. The correct order is: British control strengthens, slavery abolished in 1834, Great Trek begins.</>]}
        />
        <Mistake>Putting the Great Trek before the abolition of slavery. On the timeline, 1834 comes before 1836.</Mistake>
      </>,
    ),
  },
  {
    title: 'Why the frontier wars happened',
    content: slide(
      <>
        <Rule>
          From 1806 the Cape was ruled by Britain, which took it from the Dutch. The Cape frontier wars were mainly about land, cattle and political control.
        </Rule>
        <Terms
          rows={[
            ['Land', 'settlers and Xhosa communities both wanted the same land'],
            ['Cattle', 'a valuable resource that both sides wanted, so it was a cause of conflict'],
            ['Political control', 'who would rule the frontier and make the laws'],
          ]}
        />
        <Worked
          title="The Fourth Frontier War, 1811 to 1812"
          steps={[<>British-led forces drove many Xhosa out of the Zuurveld, the land west of the Great Fish River, and across the river to its east.</>, <>The war was driven by land, cattle and colonial control.</>, <>In 1820 thousands of British settlers arrived in the eastern Cape, which increased the pressure on land.</>]}
        />
        <Mistake>Thinking the frontier wars were only random fighting. They were closely linked to land and resource control.</Mistake>
      </>,
    ),
  },
  {
    title: 'Xhosa resistance',
    content: slide(
      <>
        <Rule>
          Xhosa resistance should be understood as organised efforts to defend communities, land and independence. It is an important part of frontier history.
        </Rule>
        <Worked
          title="Two moments of resistance"
          steps={[<>In 1819, Xhosa forces led by Maqana Nxele attacked Grahamstown in resistance to colonial expansion. The attack failed, but it became a key moment.</>, <>In 1834 and 1835, the Sixth Frontier War broke out between Xhosa communities and colonial forces.</>, <>It showed both fierce resistance and the instability of the eastern frontier.</>]}
        />
        <Mistake>Describing Xhosa resistance as simple raiding. It was an organised effort to defend people, land and independence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cooperation on the frontier',
    content: slide(
      <>
        <Rule>
          Frontier societies experienced both conflict and forms of cooperation. Cooperation includes trade, negotiation and local exchange between groups.
        </Rule>
        <Compare
          left={{ title: 'Conflict', tone: 'amber', rows: ['frontier wars over land, cattle and control', 'resistance to colonial expansion'] }}
          right={{ title: 'Cooperation', tone: 'emerald', rows: ['trade between groups', 'negotiation', 'local exchange'] }}
        />
        <Worked
          title="A balanced paragraph"
          steps={[<>A strong topic sentence captures both sides of frontier interactions.</>, <>For example: The Cape frontiers changed through conflict and economic cooperation.</>, <>Then give evidence for each side: wars and resistance, and trade and negotiation.</>]}
        />
        <Mistake>Writing only about wars. The frontier also had trade, negotiation and exchange.</Mistake>
      </>,
    ),
  },
  {
    title: 'Abolition of slavery and the Great Trek',
    content: slide(
      <>
        <Rule>
          Slavery was legally abolished at the Cape in 1834. The Great Trek involved groups moving inland from the Cape, some settlers leaving the Cape Colony in the 1830s.
        </Rule>
        <Terms
          rows={[
            ['1834', 'slavery abolished by Britain at the Cape. Former slave owners were compensated, but freed people still faced major inequality.'],
            ['1836', 'the Great Trek: many Boers left the Cape Colony and moved inland'],
            ['Reasons for the Trek', 'dissatisfaction with British rule, frontier insecurity and changing labour systems'],
          ]}
        />
        <Worked
          title="Link cause and effect"
          steps={[<>Abolition changed labour systems at the Cape.</>, <>Together with frontier insecurity and dissatisfaction with British rule, this influenced some Boers to leave.</>, <>The result was the Great Trek, a migration inland.</>]}
        />
        <Mistake>Saying that abolition ended inequality. Slavery was abolished in law, but inequality persisted.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>After the Dutch East India Company, which country took over the Cape in 1806? What were the frontier wars fought over?</li>
            <li>Why is it wrong to call Xhosa fighting on the frontier simple raiding?</li>
            <li>When did British law end slavery at the Cape? What do we call the journey of settlers who left the colony for the interior in the 1830s?</li>
            <li>Name two ways people worked together across the frontier. Which timeline order is correct? Which topic sentence fits this unit best?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Britain. Land, cattle and political control.</li>
            <li>It was organised defence of communities, land and independence.</li>
            <li>In 1834 (it was legally abolished). The Great Trek.</li>
            <li>Trade and negotiation, with local exchange between groups. British control strengthens → slavery abolished in 1834 → Great Trek begins. The Cape frontiers changed through conflict and economic cooperation.</li>
          </ol>
        }
      />,
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
