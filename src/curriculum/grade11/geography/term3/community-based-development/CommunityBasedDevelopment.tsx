import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import * as g from '../../../../../components/diagrams/geo11/geo11';
import { AtlasGrid, CoreRings, PairBars, RainBars, RostowSteps, SustainCircles, WeekGraph } from '../../../../../components/diagrams/geo11/Geo11Pictures';

// Every number comes from geo11.ts (tested in geo11.test.ts and g11GeoGaps.test.ts). All data are imaginary teaching data.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Community-based development',
    content: slide(
      <>
        <Rule>Community-based development is planned and run with the people it is meant to help. It is a bottom-up approach: the community decides what it needs, uses its own knowledge and labour, and owns the result. This differs from top-down development, where officials or outside experts decide.</Rule>
        <FactCards
          cards={[
            { title: 'Top-down', line1: 'outside experts decide', line2: 'and manage' },
            { title: 'Bottom-up', line1: 'the community decides', line2: 'and takes part' },
            { title: 'Local skills', line1: 'knowledge of the area', line2: 'is used' },
            { title: 'Ownership', line1: 'people look after', line2: 'what they built' },
          ]}
          aria="Two approaches. Top-down: outside experts decide and manage. Bottom-up: the community decides and takes part. Community-based projects use local skills and give people ownership of the results."
        />
        <Worked
          title="Which approach?"
          steps={[
            'A department builds a borehole where its engineers choose: top-down.',
            'Villagers choose the site, dig the trench and elect a committee to maintain the pump: bottom-up.',
            'The second pump is more likely to be kept in working order because the villagers own it.',
          ]}
        />
        <Mistake>Thinking that community-based development needs no outside help. Communities often still need funds, training or advice.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rural development approaches',
    content: slide(
      <>
        <Rule>In rural areas community-based projects often deal with water, food, income and basic services: boreholes and tanks, community gardens, farmers' co-operatives and small loans. Examples from around the world include the Grameen Bank in Bangladesh, which lends small amounts to poor borrowers, and the Green Belt Movement in Kenya, which pays women to plant trees.</Rule>
        <FactCards
          cards={[
            { title: 'Water', line1: 'community boreholes', line2: 'and rainwater tanks' },
            { title: 'Food', line1: 'gardens and farmers', line2: 'co-operatives' },
            { title: 'Income', line1: 'small loans and', line2: 'savings groups' },
            { title: 'Land', line1: 'tree planting to', line2: 'stop soil erosion' },
          ]}
          aria="Rural community projects. Water: community boreholes and rainwater tanks. Food: gardens and farmers' co-operatives. Income: small loans and savings groups. Land: tree planting to stop soil erosion."
        />
        <Worked
          title="A savings group"
          steps={[
            `${g.GROUP.members} members each save R${g.GROUP.monthly} a month.`,
            `Each month the group saves ${g.GROUP.members} × R${g.GROUP.monthly} = R${g.sp(g.groupPerMonth())}.`,
            `In a year it holds 12 × R${g.sp(g.groupPerMonth())} = R${g.sp(g.groupPerYear())}, which it can lend to members to start small businesses.`,
          ]}
        />
        <Mistake>Thinking that these projects only need money. They also need the members' time, trust and rules that everyone accepts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Urban development approaches',
    content: slide(
      <>
        <Rule>In cities, community-based approaches deal with housing, services and safety. Examples are upgrading an informal settlement where it stands instead of moving the people, community policing, food gardens on vacant land and recycling groups. Residents take part in planning, so the project fits what the people really need.</Rule>
        <FactCards
          cards={[
            { title: 'Housing', line1: 'upgrade the settlement', line2: 'where it stands' },
            { title: 'Services', line1: 'residents help plan', line2: 'water and toilets' },
            { title: 'Safety', line1: 'community policing', line2: 'and street lighting' },
            { title: 'Work', line1: 'food gardens and', line2: 'recycling groups' },
          ]}
          aria="Urban community projects. Housing: upgrade the settlement where it stands. Services: residents help plan water and toilets. Safety: community policing and street lighting. Work: food gardens and recycling groups."
        />
        <Worked
          title="Plan with the residents"
          steps={[
            'A municipality wants to move an informal settlement far from town.',
            'The residents say they would lose their jobs and schools nearby.',
            'Upgrading the settlement in place, with the residents helping to plan, meets their needs better.',
          ]}
        />
        <Mistake>Believing that residents have nothing to offer a planner. Their daily knowledge of the area is a resource.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Is a project in which villagers choose, build and run a water pump top-down or bottom-up?</>,
          <>Name one rural community-based project.</>,
          <>{g.GROUP.members} members each save R{g.GROUP.monthly} a month. How much does the group save in a year?</>,
          <>Give one way in which a city can use community-based development.</>,
        ]}
        answers={[
          <>Bottom-up.</>,
          <>A borehole, a food garden or a savings group.</>,
          <>R{g.sp(g.groupPerYear())}.</>,
          <>Upgrading a settlement where it stands, with residents planning.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "In which approach do the people affected decide what is needed?",
    options: ["Top-down development", "Colonial development", "Bottom-up development", "Emergency development"],
    answer: "Bottom-up development",
    explanation: "Bottom-up means the community plans and takes part.",
  },
  {
    prompt: "In which approach do outside experts decide and manage?",
    options: ["Top-down development", "Bottom-up development", "Community-based development", "Co-operative development"],
    answer: "Top-down development",
    explanation: "Top-down is controlled from above.",
  },
  {
    prompt: "Villagers choose the site for a water pump and elect a committee to maintain it. Which approach is this?",
    options: ["Top-down", "Colonial", "Emergency relief", "Community-based"],
    answer: "Community-based",
    explanation: "The people take part and own the result.",
  },
  {
    prompt: "Why are community-based projects often better looked after?",
    options: ["They need no money", "The people feel they own them", "They need no skills", "They are always government projects"],
    answer: "The people feel they own them",
    explanation: "Ownership gives people a reason to maintain what they built.",
  },
  {
    prompt: "Which is an example of a rural community-based project?",
    options: ["A new airport", "A farmers' co-operative", "A national highway", "A stock exchange"],
    answer: "A farmers' co-operative",
    explanation: "Co-operatives are run by the farmers themselves.",
  },
  {
    prompt: "In a savings group each of 20 members pays in R50 every month. What is the monthly total?",
    options: ["R70", "R100", "R10 000", "R1 000"],
    answer: "R1 000",
    explanation: "20 members × R50 = R1 000 a month.",
  },
  {
    prompt: "For a whole year the same group keeps saving every month. How much will it hold after 12 months?",
    options: ["R12 000", "R1 000", "R600", "R2 400"],
    answer: "R12 000",
    explanation: "12 months × R1 000 = R12 000.",
  },
  {
    prompt: "What does the Grameen Bank in Bangladesh do?",
    options: ["Sells large mining loans abroad", "Trades in foreign currency", "Lends small sums to the poor", "Builds roads for the state"],
    answer: "Lends small sums to the poor",
    explanation: "It is an example of small loans for poor people.",
  },
  {
    prompt: "What does the Green Belt Movement in Kenya do?",
    options: ["Builds large dams", "Mines coal for export", "Runs a national airline", "Pays women to plant trees"],
    answer: "Pays women to plant trees",
    explanation: "It links tree planting with income for women.",
  },
  {
    prompt: "Which is an example of urban community-based development?",
    options: ["Moving all residents far away", "Upgrading a settlement where it stands", "Banning informal trading", "Closing a clinic"],
    answer: "Upgrading a settlement where it stands",
    explanation: "Residents stay and help to plan.",
  },
  {
    prompt: "Residents of an informal settlement say they would lose jobs if moved. What does community-based development suggest?",
    options: ["Upgrade the settlement in place", "Move them to a far-away site", "Ignore their views on the plan", "Close the schools nearby"],
    answer: "Upgrade the settlement in place",
    explanation: "Listening to residents gives a plan that meets their needs.",
  },
  {
    prompt: "Which is an example of community policing?",
    options: ["A private army for hire", "A new prison on the edge", "Residents patrolling with police", "A border fence"],
    answer: "Residents patrolling with police",
    explanation: "Community policing involves the residents.",
  },
  {
    prompt: "Which resource do residents bring to a planning process?",
    options: ["Government permits", "Foreign aid", "Daily knowledge of the area", "Mining rights"],
    answer: "Daily knowledge of the area",
    explanation: "Local knowledge is a resource for planners.",
  },
  {
    prompt: "Why may a community still need outside help?",
    options: ["It may lack funds or training", "It never needs any help", "It has too much money", "It has no knowledge"],
    answer: "It may lack funds or training",
    explanation: "Outside help can supply funds, training or advice.",
  },
];

const CommunityBasedDevelopment = () => (
  <CapsSubjectTopic
    title="Community-Based Development"
    subtitle="Top-down and bottom-up approaches, rural and urban community projects"
    learnSteps={learnSteps}
    task="gr11-community-based-development-t3"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default CommunityBasedDevelopment;
