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
    title: "Key events: diamonds in Kimberley",
    content: slide(
      <Timeline
        events={[
          { date: "1867", title: "A diamond is found", description: "A diamond found near the Orange River starts a search for more." },
          { date: "1871", title: "The rush to Kimberley", description: "Thousands of diggers move to the diamond fields. Britain takes over Griqualand West." },
          { date: "1870s", title: "The claims become deeper and costlier", description: "Digging deeper brings falling walls, flooding and higher costs, and small claim-holders sell out." },
          { date: "1888", title: "De Beers Consolidated Mines", description: "Cecil Rhodes joins the main companies into one. It controls most of the supply of diamonds." },
        ]}
      />,
    ),
  },
  {
    title: "Why diamonds are valuable, and the British take-over",
    content: slide(
      <>
        <Rule>{"Diamonds are very hard and rare, and people value them as jewels and for cutting tools. After the rush to the diamond fields in 1871, Britain took over Griqualand West, the diamond-rich area that was claimed by Griqua leaders and by the Boer republics."}</Rule>
        <FactCards
          cards={[
            { title: "Valuable", line1: "hard, rare and", line2: "sought as jewels" },
            { title: "1867", line1: "a diamond is found", line2: "near the Orange River" },
            { title: "1871", line1: "the rush to the", line2: "Kimberley fields" },
            { title: "Britain", line1: "takes over", line2: "Griqualand West" },
          ]}
          aria={"Diamonds and the British. Diamonds are valuable because they are hard, rare and sought as jewels. A diamond was found in 1867. In 1871 there was a rush to the Kimberley fields. Britain took over Griqualand West."}
        />
        <Worked
          title={"Link cause and effect"}
          steps={[
            "Diamonds are rare, so they sell for a high price.",
            "A high price brought thousands of diggers to Kimberley.",
            "The wealth of the diamond fields drew Britain into taking control of the area.",
          ]}
        />
        <Mistake>{"Saying that nobody owned the land before the diggers came. The land was claimed by Griqua and Boer leaders, and the British take-over in 1871 ignored their claims."}</Mistake>
      </>,
    ),
  },
  {
    title: "Claims, black claimholders and digging deeper",
    content: slide(
      <>
        <Rule>{"At first one person could hold one claim, a small square of ground. Black diggers also held claims, but white diggers and the new rules pushed most of them out, so African men mostly became wage workers. As the pits grew deeper there were falls of rock, flooding and higher costs, so small claimholders sold to companies."}</Rule>
        <FactCards
          cards={[
            { title: "One person,", line1: "one claim", line2: "a small square" },
            { title: "Black claimholders", line1: "pushed out by rules", line2: "and white diggers" },
            { title: "Deeper pits", line1: "rock falls, water,", line2: "higher costs" },
            { title: "Companies", line1: "buy up the claims", line2: "of small diggers" },
          ]}
          aria={"Claims and companies. One person could hold one claim, a small square of ground. Black claimholders were pushed out by new rules and white diggers. Deeper pits meant rock falls, water and higher costs. Companies bought up the claims of small diggers."}
        />
        <SourceBox label={"Source A"} provenance={"An original paraphrase written for this lesson, in the style of a digger's letter."}>
          <p>{"The digger wrote that his claim was now so deep that the walls kept falling in, and that the cost of pumping water was more than he could pay."}</p>
        </SourceBox>
        <Worked
          title={"Judge the source"}
          steps={[
            "It is useful for the problems of deep mining and the costs that small diggers faced.",
            "It does not explain why black claimholders lost their claims.",
            "To fill the gap we would use other sources, such as government rules and the accounts of African diggers.",
          ]}
        />
        <Mistake>{"Thinking that black diggers were never claimholders. Some held claims at first, but the rules and the pressure from white diggers drove most of them out."}</Mistake>
      </>,
    ),
  },
  {
    title: "Rhodes, Barnato and De Beers",
    content: slide(
      <>
        <Rule>{"Cecil John Rhodes and Barney Barnato bought up many claims and built large companies. In 1888 Rhodes joined the main companies into De Beers Consolidated Mines. A single company could control how many diamonds were sold, and so keep the price high."}</Rule>
        <FactCards
          cards={[
            { title: "Rhodes", line1: "Cecil John Rhodes", line2: "buys up claims" },
            { title: "Barnato", line1: "Barney Barnato,", line2: "a rival owner" },
            { title: "1888", line1: "De Beers Consolidated", line2: "Mines is formed" },
            { title: "Supply", line1: "one company controls", line2: "the supply and price" },
          ]}
          aria={"De Beers. Cecil John Rhodes bought up claims. Barney Barnato was a rival owner. In 1888 De Beers Consolidated Mines was formed. One company controlled the supply and the price of diamonds."}
        />
        <SourceBox label={"Source B"} provenance={"An original paraphrase written for this lesson, in the style of a company report."}>
          <p>{"The report said that selling fewer diamonds would keep the price from falling, and that one company could manage the supply better than many small owners."}</p>
        </SourceBox>
        <Worked
          title={"Explain the monopoly"}
          steps={[
            "A monopoly means one company controls the supply.",
            "With control of the supply, the company could limit how many diamonds reached the market.",
            "This kept prices high for the company, but it left small diggers and African workers with little power.",
          ]}
        />
        <Mistake>{"Saying that De Beers was a government. It was a private company, though it became powerful and had close links with the British colonial rulers."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "Why are diamonds valuable?",
          "What happened to most black claimholders at Kimberley?",
          "Why did small diggers sell their claims as the pits grew deeper?",
          "What was De Beers Consolidated Mines?",
        ]}
        answers={[
          "They are very hard and rare, and people want them as jewels and tools.",
          "The new rules and pressure from white diggers pushed most of them out.",
          "Digging deeper brought rock falls, flooding and higher costs.",
          "A company formed in 1888 that controlled most of the supply of diamonds.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Where were diamonds found in 1867?",
    options: ["On the Witwatersrand", "In Natal", "Near the Orange River", "In the Free State towns"],
    answer: "Near the Orange River",
    explanation: "The first diamond was found near the Orange River.",
  },
  {
    prompt: "Why are diamonds valuable?",
    options: ["They are rare and very hard", "They are common and very soft", "They are cheap to dig up", "They are used as food"],
    answer: "They are rare and very hard",
    explanation: "Diamonds are rare and very hard.",
  },
  {
    prompt: "Which place became the centre of the diamond rush from 1871?",
    options: ["Johannesburg", "Pretoria", "Durban", "Kimberley"],
    answer: "Kimberley",
    explanation: "Kimberley grew from the diamond rush.",
  },
  {
    prompt: "Which area did Britain take over after the rush?",
    options: ["Natal", "Griqualand West", "The Zulu kingdom", "Mozambique"],
    answer: "Griqualand West",
    explanation: "Britain took over Griqualand West in 1871.",
  },
  {
    prompt: "What did 'one person, one claim' mean?",
    options: ["Everyone shared one big claim", "One person dug for the whole field", "Each digger held one claim", "Each claim had to be on a farm"],
    answer: "Each digger held one claim",
    explanation: "The rule limited how many claims one person could hold.",
  },
  {
    prompt: "What happened to most black claimholders?",
    options: ["Most were pushed out by new rules", "They became owners of the companies", "They were given more land to dig", "They left for India to work"],
    answer: "Most were pushed out by new rules",
    explanation: "Most African diggers lost their claims and became workers.",
  },
  {
    prompt: "What problem did digging deeper bring?",
    options: ["Cheaper work and bigger profits", "More diamonds that were easy to find near the top", "Shorter hours for the workers", "Rock falls, flooding and higher costs"],
    answer: "Rock falls, flooding and higher costs",
    explanation: "Deeper mines were costly and dangerous.",
  },
  {
    prompt: "Why did small diggers sell their claims to companies?",
    options: ["They had found enough gold to retire", "Deep digging cost too much", "The government banned digging", "They moved to India to farm"],
    answer: "Deep digging cost too much",
    explanation: "Small claimholders could not pay the costs of deep mining.",
  },
  {
    prompt: "Who joined the main diamond companies into one?",
    options: ["Barney Barnato", "Paul Kruger", "Cecil John Rhodes", "Cetshwayo of the Zulu"],
    answer: "Cecil John Rhodes",
    explanation: "Rhodes formed De Beers Consolidated Mines in 1888.",
  },
  {
    prompt: "Which rival of Rhodes also built a large diamond company?",
    options: ["Barney Barnato", "Cecil Rhodes", "Jan Smuts", "George Harrison"],
    answer: "Barney Barnato",
    explanation: "Barnato was Rhodes's main rival at Kimberley.",
  },
  {
    prompt: "In which year was De Beers Consolidated Mines formed?",
    options: ["1788", "1988", "1867", "1888"],
    answer: "1888",
    explanation: "De Beers was formed in 1888.",
  },
  {
    prompt: "What is a monopoly?",
    options: ["Many small firms compete for sales", "One company controls supply", "The government sets the prices", "A worker owns the whole mine"],
    answer: "One company controls supply",
    explanation: "A monopoly gives one company control of supply and price.",
  },
  {
    prompt: "Why did De Beers want to control how many diamonds were sold?",
    options: ["To make diamonds cheaper", "To end mining", "To keep the price high", "To pay workers more"],
    answer: "To keep the price high",
    explanation: "Limiting the supply keeps prices high.",
  },
  {
    prompt: "Which source would best balance a company report about De Beers?",
    options: ["An African worker's account", "A second company report only", "A map of Natal", "A list of sugar prices"],
    answer: "An African worker's account",
    explanation: "A worker's account gives another point of view.",
  },
];

const KimberleyDiamondsAndMonopoly = () => (
  <CapsSubjectTopic
    title={"Diamond Mining in Kimberley"}
    subtitle={"Why diamonds matter, the claims, black claimholders and the rise of De Beers"}
    learnSteps={learnSteps}
    task={"gr8-kimberley-diamonds-and-monopoly-t1"}
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default KimberleyDiamondsAndMonopoly;
