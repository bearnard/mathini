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
    title: "Key events: from 1902 to 1914",
    content: slide(
      <Timeline
        events={[
          { date: "1902", title: "The war ends; the APO is formed", description: "Britain defeats the Boer republics. The African Political Organisation is formed." },
          { date: "1903", title: "The Transvaal Indian Congress", description: "Indian South Africans in the Transvaal form a congress to protest against unfair laws." },
          { date: "1906", title: "The Bambatha Rebellion", description: "A protest against a new tax in Natal leads to a rebellion that is put down." },
          { date: "1910", title: "Union", description: "The Cape, Natal, the Transvaal and the Orange Free State join as the Union of South Africa." },
          { date: "1912", title: "The SANNC is formed", description: "African leaders form the South African Native National Congress, later called the ANC." },
          { date: "1913", title: "The Land Act", description: "Africans may no longer buy or rent land outside the reserves." },
          { date: "1913 to 1914", title: "The Satyagraha campaign", description: "Indian South Africans protest peacefully against unfair laws." },
        ]}
      />,
    ),
  },
  {
    title: "War, new power and the first organisations",
    content: slide(
      <>
        <Rule>{"By 1902 Britain had defeated the Boer republics in the South African War, and gold and diamonds had pulled British power across the region. In the same years people who were left out of power began to form organisations. The African Political Organisation was formed in 1902 and the Transvaal Indian Congress in 1903."}</Rule>
        <FactCards
          cards={[
            { title: "War, 1902", line1: "Britain defeats", line2: "the Boer republics" },
            { title: "APO, 1902", line1: "the African Political", line2: "Organisation" },
            { title: "TIC, 1903", line1: "the Transvaal", line2: "Indian Congress" },
            { title: "Aim", line1: "to protest against", line2: "unfair laws" },
          ]}
          aria={"War and new organisations. In 1902 Britain defeated the Boer republics. In 1902 the African Political Organisation, the APO, was formed. In 1903 the Transvaal Indian Congress, the TIC, was formed. Their aim was to protest against unfair laws."}
        />
        <Worked
          title={"Link cause and effect"}
          steps={[
            "Gold and diamonds had brought British power and changed the balance of power.",
            "People who were left out of power formed organisations to ask for their rights.",
            "The APO spoke mainly for people of colour in the Cape, and the TIC for Indian South Africans in the Transvaal.",
          ]}
        />
        <Mistake>{"Saying that these organisations began after Union. The APO and TIC were formed before Union, in 1902 and 1903."}</Mistake>
      </>,
    ),
  },
  {
    title: "Resistance, Union and the SANNC",
    content: slide(
      <>
        <Rule>{"In 1906 the Bambatha Rebellion in Natal was a protest against a new tax, and it was put down by force. In 1910 the four colonies joined in the Union of South Africa. Africans did not take part in the Union negotiations, so in 1912 African leaders formed the South African Native National Congress, later called the ANC."}</Rule>
        <FactCards
          cards={[
            { title: "1906", line1: "the Bambatha", line2: "Rebellion, a tax protest" },
            { title: "1910", line1: "Union of South Africa", line2: "four colonies join" },
            { title: "Excluded", line1: "Africans not part of", line2: "the Union talks" },
            { title: "1912", line1: "the SANNC is formed,", line2: "later the ANC" },
          ]}
          aria={"Resistance and Union. In 1906 the Bambatha Rebellion was a protest against a new tax. In 1910 four colonies joined to make the Union of South Africa. Africans were not part of the Union talks. In 1912 the South African Native National Congress was formed, later the ANC."}
        />
        <SourceBox label={"Source A"} provenance={"An original paraphrase written for this lesson, in the style of an African leader's speech."}>
          <p>{"The speaker said that the Union had been made without the people of the land, and that Africans must now unite to speak with one voice."}</p>
        </SourceBox>
        <Worked
          title={"Judge the source"}
          steps={[
            "It is useful: it shows why African leaders formed the SANNC.",
            "It does not show what white leaders at Union said about their plans.",
            "A report on the Union talks would add that point of view.",
          ]}
        />
        <Mistake>{"Saying that the Union included all South Africans in making decisions. White leaders made the Union, and most Africans had no say."}</Mistake>
      </>,
    ),
  },
  {
    title: "The Land Act, Satyagraha and the changed map",
    content: slide(
      <>
        <Rule>{"The Land Act of 1913 said that Africans could not buy or rent land outside the reserves. In 1913 and 1914 Mohandas Gandhi and others led the Satyagraha campaign, a peaceful protest against unfair laws affecting Indian South Africans. A map of 1913 shows one white-ruled Union, while a map of 1860 shows many independent kingdoms."}</Rule>
        <FactCards
          cards={[
            { title: "1913", line1: "the Land Act limits", line2: "African land ownership" },
            { title: "1913 to 1914", line1: "Satyagraha:", line2: "peaceful protest" },
            { title: "Map 1860", line1: "colonies, republics", line2: "and many kingdoms" },
            { title: "Map 1913", line1: "one Union,", line2: "white-ruled" },
          ]}
          aria={"The Land Act and a changed map. The Land Act of 1913 limited where Africans could own land. In 1913 and 1914 the Satyagraha campaign was a peaceful protest led by Gandhi. A map of 1860 shows colonies, republics and many kingdoms. A map of 1913 shows one Union ruled by whites."}
        />
        <SourceBox label={"Source B"} provenance={"An original paraphrase written for this lesson, in the style of a farmer's letter."}>
          <p>{"The farmer wrote that after the Land Act he had to leave the land he had farmed for years, and that no one asked him what he wished to do."}</p>
        </SourceBox>
        <Worked
          title={"Compare the two maps"}
          steps={[
            "In 1860 southern Africa had colonies, Boer republics and independent African kingdoms.",
            "By 1913 the kingdoms had lost their independence and the land was ruled as a white-led Union.",
            "The Mineral Revolution was a turning point: wealth, land laws and labour control had shifted power.",
          ]}
        />
        <Mistake>{"Thinking that Satyagraha was a violent campaign. It was a peaceful protest, based on refusing to obey unjust laws and accepting the punishment."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "When was the African Political Organisation formed?",
          "What was the SANNC, and when was it formed?",
          "What did the Land Act of 1913 do?",
          "What was the Satyagraha campaign?",
        ]}
        answers={[
          "In 1902.",
          "The South African Native National Congress, formed in 1912 and later called the ANC.",
          "It limited Africans' land ownership to the reserves.",
          "A peaceful protest by Indian South Africans against unfair laws, 1913 to 1914.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "When did Britain defeat the Boer republics?",
    options: ["1802", "1913", "1902", "1860"],
    answer: "1902",
    explanation: "The war ended in 1902.",
  },
  {
    prompt: "Which group of people of colour in the Cape set up an organisation in 1902?",
    options: ["The African Political Organisation", "The South African Native National Congress", "The Chamber of Mines", "De Beers Consolidated Mines"],
    answer: "The African Political Organisation",
    explanation: "The APO was formed in 1902.",
  },
  {
    prompt: "Indian South Africans in the Transvaal set up which congress in 1903?",
    options: ["The African Political Organisation", "The Chamber of Mines", "The Union Government", "The Transvaal Indian Congress"],
    answer: "The Transvaal Indian Congress",
    explanation: "The TIC was formed in 1903.",
  },
  {
    prompt: "What caused the Bambatha Rebellion of 1906?",
    options: ["A diamond rush", "A new tax in Natal", "The Land Act", "The end of slavery"],
    answer: "A new tax in Natal",
    explanation: "The rebellion was a protest against a new tax.",
  },
  {
    prompt: "Which year did the Union of South Africa begin?",
    options: ["1810", "1913", "1910", "1902"],
    answer: "1910",
    explanation: "The Union began in 1910.",
  },
  {
    prompt: "Which colonies made up the new country of 1910?",
    options: ["The Cape, Natal, the Transvaal and the Orange Free State", "The Cape, Natal, Basutoland and the Bechuanaland Protectorate", "The Cape, the Transvaal, Rhodesia and the Orange Free State", "The Cape, Natal, the Transvaal and the Zulu kingdom of Zululand"],
    answer: "The Cape, Natal, the Transvaal and the Orange Free State",
    explanation: "Four colonies joined in 1910.",
  },
  {
    prompt: "Why was the SANNC formed in 1912?",
    options: ["The British asked them to rule the Union", "The gold mines needed new managers", "The Boer army had been defeated", "Africans had no say in the Union"],
    answer: "Africans had no say in the Union",
    explanation: "African leaders wanted to speak with one voice.",
  },
  {
    prompt: "What was the SANNC later called?",
    options: ["The Chamber of Mines in Johannesburg", "The African National Congress", "The African Political Organisation", "The Union Government"],
    answer: "The African National Congress",
    explanation: "The SANNC became the ANC.",
  },
  {
    prompt: "What did the Land Act of 1913 do?",
    options: ["Gave Africans land across the Union", "Ended the Union of South Africa", "Kept African land to the reserves", "Gave the vote to Africans"],
    answer: "Kept African land to the reserves",
    explanation: "Africans could not buy or rent land outside the reserves.",
  },
  {
    prompt: "Who led the Satyagraha campaign of 1913 to 1914?",
    options: ["Mohandas Gandhi", "Cecil John Rhodes", "Paul Kruger of the Transvaal", "King Cetshwayo"],
    answer: "Mohandas Gandhi",
    explanation: "Gandhi and others led the campaign.",
  },
  {
    prompt: "What kind of protest was Satyagraha?",
    options: ["A violent armed rebellion", "A secret plot", "A workers' strike underground", "A peaceful protest"],
    answer: "A peaceful protest",
    explanation: "Satyagraha was a peaceful protest.",
  },
  {
    prompt: "How does a map of 1913 differ from a map of 1860?",
    options: ["More independent African kingdoms and republics", "One white-ruled Union, not many kingdoms", "No borders between the places", "No British colonies"],
    answer: "One white-ruled Union, not many kingdoms",
    explanation: "By 1913 the kingdoms had lost their independence.",
  },
  {
    prompt: "Why do historians call the Mineral Revolution a turning point?",
    options: ["It ended mining in the region", "It gave Africans the vote in the Union", "It changed power, land and labour", "It made Britain a smaller country"],
    answer: "It changed power, land and labour",
    explanation: "Wealth from minerals shifted power and shaped laws.",
  },
  {
    prompt: "Which source would best balance an African leader's speech about Union?",
    options: ["A report of white leaders' plans", "Another speech by the same leader", "A price list for gold in 1910", "A map of the Atlantic Ocean"],
    answer: "A report of white leaders' plans",
    explanation: "The white leaders' plans give another point of view.",
  },
];

const MineralRevolutionTurningPoint = () => (
  <CapsSubjectTopic
    title={"The Mineral Revolution as a Turning Point"}
    subtitle={"War, new organisations, Union, the Land Act and a changed map"}
    learnSteps={learnSteps}
    task={"gr8-mineral-revolution-turning-point-t2"}
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default MineralRevolutionTurningPoint;
