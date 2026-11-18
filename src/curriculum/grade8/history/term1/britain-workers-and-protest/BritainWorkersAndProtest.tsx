import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { SourceBox } from '../../../../grade12/history/_shared/SourceBox';

// Dates and facts are asserted independently in g8HistoryA.test.ts. Every source box is an original or paraphrased description written for the lesson.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Key events: working life in Britain",
    content: slide(
      <Timeline
        events={[
          { date: "1811 to 1816", title: "The Luddites", description: "Textile workers in parts of England break machines that they say lower wages and take jobs." },
          { date: "1830", title: "The Swing Riots", description: "Farm labourers in the south of England destroy threshing machines and ask for better pay." },
          { date: "1833", title: "The Factory Act", description: "Britain limits the hours of young children in textile mills and sends inspectors to check." },
          { date: "1833", title: "The Grand National Consolidated Trades Union", description: "Workers try to join many trades into one big union. It does not last long." },
          { date: "1842", title: "The Mines Act", description: "Women and young boys may no longer work underground in coal mines." },
        ]}
      />,
    ),
  },
  {
    title: "Towns, housing and the workhouse",
    content: slide(
      <>
        <Rule>{"During the Industrial Revolution many people moved from farms to growing towns to work in factories. Housing was crowded, water and sanitation were poor, and wages were low. People who could not support themselves could be sent to a workhouse."}</Rule>
        <FactCards
          cards={[
            { title: "Towns", line1: "people move from farms", line2: "to factory towns" },
            { title: "Homes", line1: "crowded, damp rooms", line2: "shared water pumps" },
            { title: "Money", line1: "low wages, poverty", line2: "for most workers" },
            { title: "Workhouse", line1: "a place for the poor", line2: "who could not cope" },
          ]}
          aria={"Life in the new towns. Towns grew as people moved from farms to factories. Homes were crowded and damp with shared water pumps. Most workers earned low wages. The poor who could not cope might be sent to a workhouse."}
        />
        <SourceBox label={"Source A"} provenance={"An original description written for this lesson, in the style of a report by a town doctor."}>
          <p>{"Whole families lived in one damp room. Several houses shared a single pump, and many people were ill."}</p>
        </SourceBox>
        <Worked
          title={"Use the source"}
          steps={[
            "It is useful: it shows what housing and health could be like for working families.",
            "It does not tell us about all towns, or about the better homes of richer people.",
            "To check it we would compare it with other sources, such as census records or letters.",
          ]}
        />
        <Mistake>{"Saying that everyone in the towns was poor. Factory owners and merchants grew rich, and conditions differed from town to town, but many working families lived in crowded, unhealthy homes."}</Mistake>
      </>,
    ),
  },
  {
    title: "Child labour in mills and mines",
    content: slide(
      <>
        <Rule>{"Children worked in mills and mines because they were cheap and small. They worked long hours for low pay. Reformers pushed for laws, and the Factory Act of 1833 limited the hours of young children in textile mills. The Mines Act of 1842 banned women and young boys from working underground."}</Rule>
        <FactCards
          cards={[
            { title: "Mills", line1: "children tend machines", line2: "for long hours" },
            { title: "Mines", line1: "children open doors", line2: "and pull coal carts" },
            { title: "Reform", line1: "the Factory Act, 1833", line2: "limits young workers" },
            { title: "Mines Act", line1: "1842 bans women and", line2: "young boys underground" },
          ]}
          aria={"Child labour. In mills children tended machines for long hours. In mines children opened doors and pulled coal carts. The Factory Act of 1833 limited the hours of young children in textile mills. The Mines Act of 1842 banned women and young boys from working underground."}
        />
        <SourceBox label={"Source B"} provenance={"Two original paraphrases written for this lesson to show two points of view."}>
          <p>{"A reformer wrote that the work harmed children and kept them from school. A mill owner replied that poor families needed the children's wages and that children had always worked on farms."}</p>
        </SourceBox>
        <Worked
          title={"Compare the two views"}
          steps={[
            "The reformer looks at the health of the children and their lack of schooling.",
            "The mill owner looks at the family income and compares mill work with farm work.",
            "Both views were held at the time; the laws show that the reformers' argument won more support.",
          ]}
        />
        <Mistake>{"Thinking that the Factory Act of 1833 ended child labour. It limited the hours of young children in textile mills, and at first it was hard to enforce."}</Mistake>
      </>,
    ),
  },
  {
    title: "Workers organise: Luddites, Swing Riots and a big union",
    content: slide(
      <>
        <Rule>{"Workers protested in different ways. The Luddites were textile workers who broke machines, and the Swing Riots were protests by farm labourers against threshing machines. In 1833 the Grand National Consolidated Trades Union tried to unite many trades into one union. It did not last, but trade unions grew later."}</Rule>
        <FactCards
          cards={[
            { title: "Luddites", line1: "textile workers break", line2: "machines, 1811 to 1816" },
            { title: "Swing Riots", line1: "farm labourers, 1830,", line2: "threshing machines" },
            { title: "GNCTU", line1: "1833, one big union", line2: "for many trades" },
            { title: "Britain", line1: "richer and more", line2: "powerful overall" },
          ]}
          aria={"Worker protest. The Luddites were textile workers who broke machines between 1811 and 1816. The Swing Riots of 1830 were protests by farm labourers against threshing machines. The Grand National Consolidated Trades Union of 1833 tried to unite many trades in one union. Britain as a whole became richer and more powerful."}
        />
        <Worked
          title={"Explain the protests"}
          steps={[
            "The Luddites and the farm labourers both feared losing jobs and wages to machines.",
            "The government punished machine-breaking harshly, so many workers turned to unions and petitions.",
            "At the same time Britain grew richer and more powerful, helped by wealth from trade, including the slave trade, and by its factories.",
          ]}
        />
        <Mistake>{"Saying that the Luddites hated all new technology. Their anger was about wages, jobs and working conditions."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "Name the two groups that protested against machines, one in industry and one in farming.",
          "Why were children used in mills and mines?",
          "What was the Grand National Consolidated Trades Union?",
          "Why is a mill owner's view useful but not complete?",
        ]}
        answers={[
          "The Luddites (industry) and the Swing Riots (farm labourers).",
          "They were cheap and small, so owners could pay them very little.",
          "An attempt in 1833 to unite workers from many trades into one big union.",
          "It shows the owner's reasons, but it leaves out the children's own experience.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Why did many people move to the new industrial towns?",
    options: ["To escape the cotton mills", "Because the government forced them to", "To find work in the factories", "To farm the new land there"],
    answer: "To find work in the factories",
    explanation: "People left farms to find work in factories and mills.",
  },
  {
    prompt: "Which word describes the growth of towns as people move there?",
    options: ["Urbanisation", "Colonisation", "Mechanisation", "Emigration"],
    answer: "Urbanisation",
    explanation: "Urbanisation is the growth of towns and cities.",
  },
  {
    prompt: "What was a workhouse?",
    options: ["A factory that employed skilled workers", "A school for factory children", "A hospital for mill owners", "A home for people too poor to cope"],
    answer: "A home for people too poor to cope",
    explanation: "Workhouses were set up for people who could not support themselves.",
  },
  {
    prompt: "Why were children useful to mill and mine owners?",
    options: ["They were stronger than adults and paid more", "They were cheap and small", "They were better paid than adults", "They asked for shorter hours than adults"],
    answer: "They were cheap and small",
    explanation: "Owners paid children very little, and their size suited some jobs.",
  },
  {
    prompt: "What did the Factory Act of 1833 do?",
    options: ["It ended work for children in mills and mines", "It gave workers the vote in towns", "It limited young children's hours in mills", "It closed the workhouses of Britain"],
    answer: "It limited young children's hours in mills",
    explanation: "The Act limited hours and sent inspectors, but it did not end child labour.",
  },
  {
    prompt: "Who were the Luddites?",
    options: ["Textile workers who broke machines", "Farm labourers who burned hay", "Mine owners who built railways", "Reformers who wrote to the newspapers"],
    answer: "Textile workers who broke machines",
    explanation: "The Luddites broke machines in protest about wages and jobs.",
  },
  {
    prompt: "What were the Swing Riots?",
    options: ["A strike by railway workers in the north of England", "A revolt in a British colony overseas", "Demonstrations by mill owners in towns", "Farm labourers' protests against machines"],
    answer: "Farm labourers' protests against machines",
    explanation: "The Swing Riots of 1830 were farm labourers' protests.",
  },
  {
    prompt: "Which industry did the Luddites work in?",
    options: ["Farming", "Textiles", "Coal mining", "Shipbuilding"],
    answer: "Textiles",
    explanation: "The Luddites were textile workers.",
  },
  {
    prompt: "What was the aim of the Grand National Consolidated Trades Union?",
    options: ["To train children for factory work", "To start a new factory for workers", "To unite workers of many trades", "To buy machines for farmers"],
    answer: "To unite workers of many trades",
    explanation: "The union of 1833 tried to bring many trades together.",
  },
  {
    prompt: "What happened to the Grand National Consolidated Trades Union?",
    options: ["It did not last long", "It ruled Britain for many years", "It became the British government", "It was never formed"],
    answer: "It did not last long",
    explanation: "The union collapsed after a short time, though trade unions grew later.",
  },
  {
    prompt: "A reformer's report on child labour is useful because it",
    options: ["settles what happened in the mills", "was written by a mill owner", "contains no opinions about the children", "shows one point of view"],
    answer: "shows one point of view",
    explanation: "A source shows a point of view and must be compared with others.",
  },
  {
    prompt: "Which source would best balance a reformer's report on mills?",
    options: ["A report by the same reformer", "A mill owner's reply", "A photograph of a new machine", "A list of British kings"],
    answer: "A mill owner's reply",
    explanation: "Comparing different points of view makes a fairer picture.",
  },
  {
    prompt: "What did the Mines Act of 1842 ban?",
    options: ["The sale of coal to other countries", "The use of machines in factories", "Women and boys working underground", "Children living in towns"],
    answer: "Women and boys working underground",
    explanation: "The Mines Act of 1842 banned women and young boys from underground work.",
  },
  {
    prompt: "Why did the Industrial Revolution make Britain more powerful?",
    options: ["Its factories, trade and wealth grew", "The country became smaller and poorer", "Its farming ended in the south", "Its workers got the vote at once"],
    answer: "Its factories, trade and wealth grew",
    explanation: "Britain's wealth and factories grew, helped by trade, including the slave trade.",
  },
];

const BritainWorkersAndProtest = () => (
  <CapsSubjectTopic
    title={"Workers and Protest in Industrial Britain"}
    subtitle={"Town life, child labour, the Luddites, the Swing Riots and the first big trade union"}
    learnSteps={learnSteps}
    task={"gr8-britain-workers-and-protest-t1"}
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default BritainWorkersAndProtest;
