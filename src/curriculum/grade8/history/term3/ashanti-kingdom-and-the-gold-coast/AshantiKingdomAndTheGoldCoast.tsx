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
    title: "Key events: the Ashanti and the British",
    content: slide(
      <Timeline
        events={[
          { date: "1471", title: "Europeans reach the coast", description: "Portuguese traders reach the coast and later build forts to trade for gold." },
          { date: "About 1700", title: "The Ashanti Union", description: "Ashanti clans unite under a king, with the Golden Stool as the symbol of the nation." },
          { date: "1874", title: "British forces enter Kumasi", description: "The British send an army, take the capital for a short time, and then leave." },
          { date: "1896", title: "King Prempeh I is exiled", description: "The British take Kumasi without a fight and send the king away." },
          { date: "1900", title: "The War of the Golden Stool", description: "Queen Mother Yaa Asantewaa leads a rising after the British ask for the Golden Stool." },
          { date: "1901", title: "The Ashanti kingdom is annexed", description: "Britain makes the Ashanti kingdom part of the Gold Coast colony." },
        ]}
      />,
    ),
  },
  {
    title: "The coast and the Ashanti kingdom before colonisation",
    content: slide(
      <>
        <Rule>{"Before the Europeans came, the forest of the Gold Coast was home to the Ashanti kingdom, with its capital at Kumasi. The Ashanti were farmers, traders and miners of gold. They were governed by a king, and the Golden Stool was the symbol that united the nation."}</Rule>
        <FactCards
          cards={[
            { title: "Kumasi", line1: "the Ashanti capital", line2: "in the forest" },
            { title: "Gold", line1: "mined and traded", line2: "to the coast" },
            { title: "King", line1: "rules with chiefs", line2: "and a council" },
            { title: "Golden Stool", line1: "the symbol of", line2: "the whole nation" },
          ]}
          aria={"The Ashanti kingdom. Kumasi was the capital in the forest. Gold was mined and traded to the coast. A king ruled with chiefs and a council. The Golden Stool was the symbol of the whole nation."}
        />
        <SourceBox label={"Source A"} provenance={"An original paraphrase written for this lesson, in the style of an Ashanti elder's explanation."}>
          <p>{"The elder said that the Golden Stool held the spirit of the nation, and that no king and no stranger could sit on it."}</p>
        </SourceBox>
        <Worked
          title={"Use the source"}
          steps={[
            "It shows why the Stool mattered to the Ashanti: it was the soul of the nation, not a chair.",
            "It does not tell us how the British understood the Stool.",
            "The next sources show how the two sides saw it.",
          ]}
        />
        <Mistake>{"Thinking that the Stool was only an object of value. For the Ashanti it was the symbol of the unity of the nation."}</Mistake>
      </>,
    ),
  },
  {
    title: "Early contact with European traders",
    content: slide(
      <>
        <Rule>{"Portuguese traders reached the coast in 1471, and the Dutch, Danish and British followed. Europeans built forts on the coast to trade, and the Ashanti sold gold, kola and other goods, and enslaved people, for guns and cloth. The Ashanti controlled the trade routes, and the Europeans on the coast had to deal with them."}</Rule>
        <FactCards
          cards={[
            { title: "1471", line1: "Portuguese reach", line2: "the coast" },
            { title: "Forts", line1: "built on the coast", line2: "for trade" },
            { title: "Trade", line1: "gold, guns, cloth", line2: "and enslaved people" },
            { title: "Routes", line1: "the Ashanti control", line2: "trade inland" },
          ]}
          aria={"Contact with Europeans. Portuguese traders reached the coast in 1471. Europeans built forts on the coast for trade. The Ashanti traded gold, guns, cloth and enslaved people. The Ashanti controlled trade inland."}
        />
        <SourceBox label={"Source B"} provenance={"An original paraphrase written for this lesson, in the style of a European trader's report."}>
          <p>{"The trader wrote that the king at Kumasi was powerful, that his officials taxed the traders, and that no trade could pass inland without his leave."}</p>
        </SourceBox>
        <Worked
          title={"Judge the source"}
          steps={[
            "It shows that the Ashanti were strong enough to set the terms of trade.",
            "It leaves out how the Ashanti saw the trade, and what happened to the enslaved people.",
            "To balance it we would look for Ashanti accounts or records.",
          ]}
        />
        <Mistake>{"Saying that the Europeans ruled the coast from the start. For a long time they traded on the coast by the leave of African rulers and had to pay for their forts."}</Mistake>
      </>,
    ),
  },
  {
    title: "British colonisation and its results",
    content: slide(
      <>
        <Rule>{"In the nineteenth century Britain wanted more control of the coast and its trade, and the Ashanti and the British fought several wars. In 1896 the British sent King Prempeh I into exile. In 1900 they asked for the Golden Stool, and Yaa Asantewaa led the War of the Golden Stool. The Ashanti were defeated, and in 1901 the kingdom became part of the Gold Coast colony."}</Rule>
        <FactCards
          cards={[
            { title: "1896", line1: "Prempeh I is", line2: "sent into exile" },
            { title: "1900", line1: "Yaa Asantewaa leads", line2: "the Golden Stool war" },
            { title: "1901", line1: "the Ashanti kingdom", line2: "joins the colony" },
            { title: "Later", line1: "the Gold Coast becomes", line2: "Ghana in 1957" },
          ]}
          aria={"Colonisation and results. In 1896 King Prempeh I was sent into exile. In 1900 Yaa Asantewaa led the War of the Golden Stool. In 1901 the Ashanti kingdom became part of the Gold Coast colony. In 1957 the Gold Coast became Ghana."}
        />
        <SourceBox label={"Source C"} provenance={"An original paraphrase written for this lesson, in the style of a colonial official's report."}>
          <p>{"The official wrote that the colony needed peace on the roads and in the gold fields, and that the Ashanti would be better ruled by Britain."}</p>
        </SourceBox>
        <Worked
          title={"Compare the views"}
          steps={[
            "The official gives the British reason: peace and trade, and Britain's own gain.",
            "Source A showed the Ashanti view: the Stool and the nation could not be ruled by a stranger.",
            "The results: the Ashanti lost their independence and Britain gained gold, cocoa and trade, while the Ashanti kept their identity and later became part of independent Ghana.",
          ]}
        />
        <Mistake>{"Saying that the Ashanti did not resist. They fought many battles, and Yaa Asantewaa led a rising in 1900."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "What was the Golden Stool?",
          "Why did the Europeans need the Ashanti?",
          "Who led the War of the Golden Stool?",
          "What happened to the Ashanti kingdom in 1901?",
        ]}
        answers={[
          "The symbol of the unity and spirit of the Ashanti nation.",
          "The Ashanti controlled trade inland and had the gold, so the Europeans had to deal with them.",
          "Yaa Asantewaa, the Queen Mother of Ejisu.",
          "It was annexed and became part of the Gold Coast colony.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What was the capital of the Ashanti kingdom?",
    options: ["Cape Coast", "Accra", "Kumasi", "Elmina"],
    answer: "Kumasi",
    explanation: "Kumasi was the Ashanti capital.",
  },
  {
    prompt: "Which present-day country includes the Ashanti homeland?",
    options: ["Ghana", "Nigeria", "Kenya", "Senegal"],
    answer: "Ghana",
    explanation: "The Gold Coast became Ghana in 1957.",
  },
  {
    prompt: "What was the Golden Stool?",
    options: ["A throne for visiting traders", "A treasure chest of gold coins", "A stool used by British governors", "The symbol of the nation's unity"],
    answer: "The symbol of the nation's unity",
    explanation: "The Stool was the symbol and spirit of the Ashanti nation.",
  },
  {
    prompt: "Which Europeans were the first to reach the Gold Coast, in 1471?",
    options: ["The British traders", "The Portuguese", "The German traders", "The Dutch traders"],
    answer: "The Portuguese",
    explanation: "Portuguese traders arrived in 1471.",
  },
  {
    prompt: "Why did the Europeans build forts on the coast?",
    options: ["To grow sugar on the plantations", "To grow cotton for the mills", "To trade, mainly for gold", "To teach in schools"],
    answer: "To trade, mainly for gold",
    explanation: "The forts were trading stations.",
  },
  {
    prompt: "Which goods did the Ashanti trade to the coast?",
    options: ["Gold, kola and enslaved people", "Cars and trains from the north", "Wool from British farms", "Tea from the plantations of India"],
    answer: "Gold, kola and enslaved people",
    explanation: "The Ashanti sold gold, kola and other goods, including enslaved people.",
  },
  {
    prompt: "Who controlled trade inland?",
    options: ["The Portuguese", "The Dutch", "The British governor", "The Ashanti"],
    answer: "The Ashanti",
    explanation: "The Ashanti controlled the trade routes inland.",
  },
  {
    prompt: "What happened to King Prempeh I in 1896?",
    options: ["He became governor", "He was sent into exile", "He was crowned in London", "He was made king of Britain"],
    answer: "He was sent into exile",
    explanation: "The British exiled the king in 1896.",
  },
  {
    prompt: "What did the British ask for in 1900?",
    options: ["Gold coins from the people", "A treaty of trade", "The Golden Stool", "The Ashanti children as workers"],
    answer: "The Golden Stool",
    explanation: "The demand for the Stool caused the war of 1900.",
  },
  {
    prompt: "Which queen mother led the Ashanti rising of 1900?",
    options: ["Yaa Asantewaa", "King Prempeh I", "Osei Tutu of Kumasi", "Cecil Rhodes"],
    answer: "Yaa Asantewaa",
    explanation: "Yaa Asantewaa led the Ashanti in 1900.",
  },
  {
    prompt: "What was the result of the war for the Ashanti?",
    options: ["They became the rulers of Britain", "They won and ended the colony", "They all left Africa for Europe", "They lost their independence"],
    answer: "They lost their independence",
    explanation: "The kingdom became part of the Gold Coast colony in 1901.",
  },
  {
    prompt: "Which gain did Britain make from the colony?",
    options: ["Free land in the forest only", "Gold, cocoa and trade", "The Golden Stool itself", "Ashanti soldiers for the army"],
    answer: "Gold, cocoa and trade",
    explanation: "Britain gained gold, cocoa and trade.",
  },
  {
    prompt: "Why is a colonial official's report not a full picture?",
    options: ["It was written by Ashanti elders", "It has no dates in it", "It shows the British side", "It is about South Africa"],
    answer: "It shows the British side",
    explanation: "A fair picture needs Ashanti sources as well.",
  },
  {
    prompt: "When did the Gold Coast become the independent country of Ghana?",
    options: ["1957", "1857", "1901", "1896"],
    answer: "1957",
    explanation: "Ghana became independent in 1957.",
  },
];

const AshantiKingdomAndTheGoldCoast = () => (
  <CapsSubjectTopic
    title={"The Ashanti Kingdom and the Gold Coast"}
    subtitle={"The coast before the Europeans, early contact, British colonisation and its results"}
    learnSteps={learnSteps}
    task={"gr8-ashanti-kingdom-and-the-gold-coast-t3"}
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default AshantiKingdomAndTheGoldCoast;
