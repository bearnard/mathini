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
    title: "Key events: gold on the Witwatersrand",
    content: slide(
      <Timeline
        events={[
          { date: "1886", title: "Gold is found", description: "Gold is found on the Witwatersrand and Johannesburg begins to grow." },
          { date: "1889", title: "The Chamber of Mines", description: "Mine owners form the Chamber of Mines to act together on wages and labour." },
          { date: "1890s", title: "Deep-level mining", description: "Large companies dig deep shafts to reach the gold-bearing rock." },
          { date: "1900s", title: "Black and white workers", description: "Black migrant workers and white skilled workers do very different jobs for very different pay." },
        ]}
      />,
    ),
  },
  {
    title: "Why gold is valuable, and how it was mined",
    content: slide(
      <>
        <Rule>{"Gold is rare, does not rust and has been used as money and jewellery for a long time. On the Witwatersrand the gold lay deep underground in hard rock, so mining needed shafts, machines and a lot of money. Large companies run by the Randlords did the mining."}</Rule>
        <FactCards
          cards={[
            { title: "Valuable", line1: "rare, does not rust,", line2: "used as money" },
            { title: "Deep", line1: "gold lies far below", line2: "the surface" },
            { title: "Shafts", line1: "tunnels, drills", line2: "and machines" },
            { title: "Randlords", line1: "rich mine owners", line2: "with large companies" },
          ]}
          aria={"Gold mining. Gold is valuable because it is rare, does not rust and is used as money. On the Witwatersrand it lay deep below the surface. Mining needed shafts, drills and machines. The Randlords were rich mine owners with large companies."}
        />
        <Worked
          title={"Link cause and effect"}
          steps={[
            "The gold lay deep, so mining cost a lot.",
            "Only rich companies could pay for shafts and machines.",
            "This helped a small group of Randlords to gain great wealth and influence.",
          ]}
        />
        <Mistake>{"Saying that anyone could dig for gold on the Witwatersrand, as at Kimberley in the early days. Deep gold needed large amounts of money and big companies."}</Mistake>
      </>,
    ),
  },
  {
    title: "Life underground and the migrant workers",
    content: slide(
      <>
        <Rule>{"Underground work was hot, dusty and dangerous, with falls of rock and illness. Most workers were Black migrant men who lived in compounds, away from their families. The Chamber of Mines, formed in 1889, helped owners act together to recruit workers and keep wages low."}</Rule>
        <FactCards
          cards={[
            { title: "Underground", line1: "hot, dusty,", line2: "dangerous work" },
            { title: "Migrant workers", line1: "men from the reserves", line2: "and other countries" },
            { title: "Compounds", line1: "housing owned", line2: "by the mines" },
            { title: "Chamber of Mines", line1: "owners act together,", line2: "formed in 1889" },
          ]}
          aria={"Life underground. Underground work was hot, dusty and dangerous. Migrant workers were men from the reserves and other countries. They lived in compounds owned by the mines. The Chamber of Mines was formed in 1889 so that owners could act together."}
        />
        <SourceBox label={"Source A"} provenance={"An original paraphrase written for this lesson, in the style of a miner's memory."}>
          <p>{"The miner said that the drills filled the tunnel with dust, that the heat was hard to bear, and that he could not see his family for months at a time."}</p>
        </SourceBox>
        <Worked
          title={"Use the source"}
          steps={[
            "It shows what daily work could be like underground.",
            "It does not tell us about every mine, or what the owners said about safety.",
            "A company report would give the owners' point of view for comparison.",
          ]}
        />
        <Mistake>{"Thinking that migrant workers lived in the cities with their families. Most lived in compounds and went home to the reserves when their contracts ended."}</Mistake>
      </>,
    ),
  },
  {
    title: "White workers, Indian traders and resistance",
    content: slide(
      <>
        <Rule>{"Skilled white workers did the better-paid jobs, while unskilled white workers soon began to demand protection from cheaper Black labour. In the Transvaal laws limited where Indian traders could live and trade. Black workers resisted by slowing their work, leaving the mines or going on strike, and many women in the reserves carried more of the farm and family burden."}</Rule>
        <FactCards
          cards={[
            { title: "White workers", line1: "skilled jobs,", line2: "higher pay" },
            { title: "Indian traders", line1: "laws limit where", line2: "they trade and live" },
            { title: "Resistance", line1: "go-slows, desertion,", line2: "strikes" },
            { title: "Women", line1: "carry more at home", line2: "in the reserves" },
          ]}
          aria={"Divisions and resistance. Skilled white workers did better paid jobs. Laws in the Transvaal limited where Indian traders could live and trade. Black workers resisted by going slow, leaving or striking. Women in the reserves carried more at home."}
        />
        <SourceBox label={"Source B"} provenance={"An original paraphrase written for this lesson, in the style of a Randlord's speech."}>
          <p>{"The speaker said that the mines needed cheap, steady labour, or the mines would close and Johannesburg would lose its wealth."}</p>
        </SourceBox>
        <Worked
          title={"Balance the sources"}
          steps={[
            "Source A shows the worker's experience; Source B shows the owner's argument for cheap labour.",
            "The Randlord's view explains why wages were kept low; it does not mention the cost to workers and their families.",
            "Johannesburg grew quickly because of the gold, and it became a city of rich and poor, white and Black, with different rights.",
          ]}
        />
        <Mistake>{"Saying that all workers on the gold mines were treated the same. Pay, jobs, housing and rights were very different for white and Black workers."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "Why did gold mining on the Witwatersrand need big companies?",
          "What was the Chamber of Mines?",
          "Where did most Black migrant workers live while at the mines?",
          "Name one way in which Black workers resisted.",
        ]}
        answers={[
          "The gold lay deep, so shafts and machines cost a lot of money.",
          "A body formed in 1889 by mine owners to act together.",
          "In compounds owned by the mines.",
          "They went slow, left the mines or went on strike.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "In which year was gold found on the Witwatersrand?",
    options: ["1686", "1986", "1886", "1867"],
    answer: "1886",
    explanation: "Gold was found in 1886.",
  },
  {
    prompt: "Which city grew because of the gold?",
    options: ["Johannesburg", "Cape Town", "Durban", "Bloemfontein"],
    answer: "Johannesburg",
    explanation: "Johannesburg began in 1886 and grew quickly.",
  },
  {
    prompt: "Why did gold mining on the Rand need big companies?",
    options: ["The gold lay in shallow, open ground", "Gold needed no workers to dig it", "Miners worked without any tools", "Shafts and machines cost a lot"],
    answer: "Shafts and machines cost a lot",
    explanation: "Deep mining needed shafts, drills and machines.",
  },
  {
    prompt: "Who were the Randlords?",
    options: ["Soldiers in the Boer republics' army", "Rich owners of mining companies", "African chiefs of the Rand", "Skilled white workers"],
    answer: "Rich owners of mining companies",
    explanation: "The Randlords were wealthy mine owners.",
  },
  {
    prompt: "Which body did the mine owners form in 1889?",
    options: ["The South African Native National Congress", "The Transvaal Indian Congress", "The Chamber of Mines", "The Broederbond"],
    answer: "The Chamber of Mines",
    explanation: "The Chamber of Mines helped owners act together.",
  },
  {
    prompt: "What was the Chamber of Mines used for?",
    options: ["To help owners act together", "To give workers the vote in Johannesburg", "To run schools for miners' children", "To build railways for workers"],
    answer: "To help owners act together",
    explanation: "It helped owners recruit workers and keep wages low.",
  },
  {
    prompt: "Where did most Black migrant workers live while at the mines?",
    options: ["In Johannesburg suburbs", "In the mine managers' homes", "On farms they owned", "In compounds"],
    answer: "In compounds",
    explanation: "Migrant workers lived in company compounds.",
  },
  {
    prompt: "Which statement about underground work is true?",
    options: ["It was cool, quiet and very safe", "It was hot, dusty and dangerous", "It was done by machines alone", "It was easy work"],
    answer: "It was hot, dusty and dangerous",
    explanation: "Underground work was hot, dusty and dangerous.",
  },
  {
    prompt: "Why did women in the reserves carry a heavier burden?",
    options: ["The men lived at home", "Women worked in the mines underground", "Men were away at the mines", "The reserves had no farms"],
    answer: "Men were away at the mines",
    explanation: "Women carried more at home while men were away.",
  },
  {
    prompt: "Who did the better-paid skilled jobs on the mines?",
    options: ["White workers", "Black migrant workers", "Women from the reserves", "Children"],
    answer: "White workers",
    explanation: "Skilled jobs went mainly to white workers.",
  },
  {
    prompt: "What did laws in the Transvaal do to Indian traders?",
    options: ["Gave them mines to run in the Transvaal", "Made them mine owners", "Sent them to Natal at once", "Limited where they could trade"],
    answer: "Limited where they could trade",
    explanation: "Anti-Indian laws limited where Indians could live and trade.",
  },
  {
    prompt: "Name one way in which Black workers resisted.",
    options: ["Becoming Randlords", "Going slow or striking", "Voting in elections", "Joining the Chamber of Mines"],
    answer: "Going slow or striking",
    explanation: "Workers resisted by slowing work, leaving or striking.",
  },
  {
    prompt: "Why would a Randlord's speech not be a full picture?",
    options: ["It was written by a worker", "It describes Kimberley", "It shows the owners' side", "It has no opinions in it"],
    answer: "It shows the owners' side",
    explanation: "A fair picture needs workers' accounts too.",
  },
  {
    prompt: "What does a miner's memory tell us?",
    options: ["What daily work underground was like", "Why gold is rare and valuable", "What the Randlords planned next", "How many mines were open on the Rand"],
    answer: "What daily work underground was like",
    explanation: "A worker's memory shows daily life and working conditions.",
  },
];

const GoldRandlordsAndMiners = () => (
  <CapsSubjectTopic
    title={"Gold on the Witwatersrand"}
    subtitle={"Deep mining, the Randlords, the Chamber of Mines and the workers"}
    learnSteps={learnSteps}
    task={"gr8-gold-randlords-and-miners-t2"}
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default GoldRandlordsAndMiners;
