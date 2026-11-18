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
    title: "Key events: control of workers and land",
    content: slide(
      <Timeline
        events={[
          { date: "1880s", title: "Closed compounds", description: "De Beers houses African workers in compounds that they may not leave during their contract." },
          { date: "1878", title: "The Xhosa are defeated", description: "After a long war the British defeat the Xhosa in the Cape." },
          { date: "January 1879", title: "Isandlwana", description: "A Zulu army defeats a British force at Isandlwana." },
          { date: "1879", title: "The Pedi and the Zulu are defeated", description: "The British defeat the Pedi and then the Zulu, and the Zulu kingdom loses its independence." },
        ]}
      />,
    ),
  },
  {
    title: "Compounds and migrant labour",
    content: slide(
      <>
        <Rule>{"Mine owners wanted to control their workers and to stop the theft of diamonds. They built closed compounds, where African workers lived behind fences during their contracts and were searched. Many workers were migrants who left their homes to work for a time, then returned."}</Rule>
        <FactCards
          cards={[
            { title: "Compound", line1: "workers live inside", line2: "a fenced area" },
            { title: "Searches", line1: "to stop the theft", line2: "of diamonds" },
            { title: "Migrants", line1: "work for a time,", line2: "then go home" },
            { title: "Control", line1: "owners control", line2: "wages and movement" },
          ]}
          aria={"Compounds and migrant labour. In a compound workers lived inside a fenced area. They were searched to stop the theft of diamonds. Migrants worked for a time and then went home. The owners controlled wages and movement."}
        />
        <SourceBox label={"Source A"} provenance={"An original paraphrase written for this lesson, in the style of a company manager."}>
          <p>{"The manager said that the compound kept order, prevented the theft of diamonds and made sure that the workers were on time."}</p>
        </SourceBox>
        <Worked
          title={"Judge the source"}
          steps={[
            "It is useful: it shows the owners' reasons for the compound.",
            "It does not tell us how the workers felt about being searched and kept inside.",
            "A worker's account would show the other side.",
          ]}
        />
        <Mistake>{"Saying that the compounds were only for housing. They were also a way of controlling workers and stopping them from selling diamonds."}</Mistake>
      </>,
    ),
  },
  {
    title: "Why Africans took wage work",
    content: slide(
      <>
        <Rule>{"African people lost land and had to pay taxes in money. Many families could no longer live only from their land, so men went to work on the mines to earn wages. The mine owners gained a supply of cheap workers, but families at home carried a heavier burden."}</Rule>
        <FactCards
          cards={[
            { title: "Land", line1: "less land", line2: "for African farmers" },
            { title: "Taxes", line1: "must be paid", line2: "in money" },
            { title: "Wages", line1: "men go to the", line2: "mines to earn" },
            { title: "Families", line1: "women carry more", line2: "farm and home work" },
          ]}
          aria={"Why Africans took wage work. African farmers had less land. Taxes had to be paid in money. Men went to the mines to earn wages. Women carried more of the farm and home work."}
        />
        <Worked
          title={"Explain the chain"}
          steps={[
            "Less land and new taxes meant families needed money.",
            "Money came from wages, so men went to the mines.",
            "This gave mine owners a supply of cheap workers, and left families to cope at home.",
          ]}
        />
        <Mistake>{"Saying that all workers came only because they wanted to. Loss of land and taxes pushed many to go, though some went by choice to earn money for cattle or goods."}</Mistake>
      </>,
    ),
  },
  {
    title: "The defeat of the Xhosa, the Pedi and the Zulu",
    content: slide(
      <>
        <Rule>{"Britain wanted control of more land and of the African kingdoms that stood in the way. After a long war the Xhosa were defeated in 1878. In 1879 the Pedi were defeated and the Zulu army won at Isandlwana, but the British then defeated the Zulu at Ulundi and ended the independence of the kingdom."}</Rule>
        <FactCards
          cards={[
            { title: "1878", line1: "the Xhosa are defeated", line2: "after a long war" },
            { title: "1879", line1: "the Pedi are", line2: "defeated" },
            { title: "Isandlwana", line1: "a Zulu victory over", line2: "a British force" },
            { title: "Result", line1: "African kingdoms lose", line2: "land and independence" },
          ]}
          aria={"Defeat of African kingdoms. In 1878 the Xhosa were defeated after a long war. In 1879 the Pedi were defeated. At Isandlwana a Zulu army defeated a British force. In the end African kingdoms lost land and independence."}
        />
        <SourceBox label={"Source B"} provenance={"An original paraphrase written for this lesson, in the style of a Zulu oral memory."}>
          <p>{"The account says that the Zulu fought bravely at Isandlwana and won, but that later the British sent more soldiers and the kingdom was broken up."}</p>
        </SourceBox>
        <Worked
          title={"Use the source"}
          steps={[
            "It shows that African armies could win battles and had a strong sense of their kingdom.",
            "It does not give the British side, or dates and numbers.",
            "Taken together, sources show both Zulu resistance and the final British victory.",
          ]}
        />
        <Mistake>{"Saying that the Zulu never won a battle. They won at Isandlwana in 1879, but they were defeated later in the war."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "Why were closed compounds used?",
          "What is a migrant worker?",
          "Why did many men go to work on the mines?",
          "Which battle was a Zulu victory in 1879?",
        ]}
        answers={[
          "To control workers and to stop the theft of diamonds.",
          "Someone who leaves home to work for a time and then returns.",
          "They had lost land and had to pay taxes in money, so they needed wages.",
          "Isandlwana.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What was a closed compound?",
    options: ["A school for the workers' children", "A farm owned by the workers", "A fenced place where workers lived", "A hospital for the mine owners"],
    answer: "A fenced place where workers lived",
    explanation: "Workers lived in fenced compounds and were controlled by the owners.",
  },
  {
    prompt: "Why did the owners search workers at the compounds?",
    options: ["To stop diamond theft", "To train the workers", "To pay the workers", "To check their food rations"],
    answer: "To stop diamond theft",
    explanation: "Searches were meant to stop workers from stealing diamonds.",
  },
  {
    prompt: "What is a migrant worker?",
    options: ["A person who owns a mine", "A farmer who stays on the same farm for years", "A soldier in the British army", "Someone who works away from home"],
    answer: "Someone who works away from home",
    explanation: "Migrants leave home to work for a time and then return.",
  },
  {
    prompt: "What pushed many African men to work on the mines?",
    options: ["A law that sent them to Britain", "Loss of land and money taxes", "The wish to join the Boer army", "Free train tickets to the mines"],
    answer: "Loss of land and money taxes",
    explanation: "Land loss and taxes made wages necessary.",
  },
  {
    prompt: "What burden did women in the reserves carry?",
    options: ["The work of managing the compound", "Soldiers' duties", "More of the farming and home work", "Mine owners' tasks"],
    answer: "More of the farming and home work",
    explanation: "Women carried more of the farm and home work when men were away.",
  },
  {
    prompt: "Which people were defeated by the British in 1878?",
    options: ["The Xhosa", "The Zulu", "The Pedi", "The Afrikaners"],
    answer: "The Xhosa",
    explanation: "The Xhosa were defeated in 1878.",
  },
  {
    prompt: "How did the British win the war against the Zulu in the end?",
    options: ["They signed a treaty with the king", "They hired a Boer army", "They gave up the fight", "They sent more soldiers"],
    answer: "They sent more soldiers",
    explanation: "The Zulu kingdom lost its independence in 1879.",
  },
  {
    prompt: "Which battle was won by a Zulu army in January 1879?",
    options: ["Ulundi", "Isandlwana", "Majuba", "Delville Wood"],
    answer: "Isandlwana",
    explanation: "The Zulu won at Isandlwana but were defeated at Ulundi.",
  },
  {
    prompt: "Where were the Zulu defeated in 1879?",
    options: ["Isandlwana", "Kimberley", "Ulundi", "Mafeking"],
    answer: "Ulundi",
    explanation: "The British won at Ulundi and ended Zulu independence.",
  },
  {
    prompt: "What did Britain want from the defeat of African kingdoms?",
    options: ["More land and control", "More peace for Africans", "To give the land back", "To help the Zulu king"],
    answer: "More land and control",
    explanation: "Britain wanted more control of land and labour.",
  },
  {
    prompt: "What was one result of the defeats for African people?",
    options: ["They gained the vote in the colonies", "They became mine owners", "They left South Africa", "They lost land and independence"],
    answer: "They lost land and independence",
    explanation: "African kingdoms lost land and independence.",
  },
  {
    prompt: "Why is a mine manager's report about compounds not a full picture?",
    options: ["It was written by the workers", "It shows the owners' reasons", "It has no date on it", "It was about the Zulu kingdom"],
    answer: "It shows the owners' reasons",
    explanation: "A fair picture needs workers' accounts as well.",
  },
  {
    prompt: "Which source would best balance a mine manager's report?",
    options: ["Another manager's report only", "A map of Britain", "A worker's account", "A list of dates"],
    answer: "A worker's account",
    explanation: "A worker's account gives the other point of view.",
  },
  {
    prompt: "What does the Zulu victory at Isandlwana show?",
    options: ["That African armies could win battles", "That the Zulu were never defeated", "That the British had no army", "That the war ended in 1879 in Zulu favour"],
    answer: "That African armies could win battles",
    explanation: "Isandlwana shows African strength, though the Zulu lost the war.",
  },
];

const LabourControlAndLand = () => (
  <CapsSubjectTopic
    title={"Controlling Workers and Taking Land"}
    subtitle={"Closed compounds, migrant labour, and the defeat of the Xhosa, the Pedi and the Zulu"}
    learnSteps={learnSteps}
    task={"gr8-labour-control-and-land-t2"}
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default LabourControlAndLand;
