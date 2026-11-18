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
    title: "Key events: Southern Africa to 1869",
    content: slide(
      <Timeline
        events={[
          { date: "1834", title: "Slavery ends in the British Empire", description: "Slave-owners in the colonies must find other sources of labour." },
          { date: "1852 and 1854", title: "Boer republics recognised", description: "Britain recognises the South African Republic and the Orange Free State." },
          { date: "1860", title: "Indentured labour reaches Natal", description: "The first Indian workers arrive to work on the sugar plantations." },
          { date: "1869", title: "Passenger Indians arrive", description: "Indian traders and others begin to arrive in Natal, paying their own fares." },
        ]}
      />,
    ),
  },
  {
    title: "Southern Africa in 1860: who ruled where",
    content: slide(
      <>
        <Rule>{"By 1860 southern Africa was divided between different rulers. Britain held the Cape Colony and Natal. The Boer republics, the South African Republic and the Orange Free State, governed themselves. Large areas were still ruled by independent African kingdoms and chiefdoms, such as the Zulu kingdom."}</Rule>
        <FactCards
          cards={[
            { title: "Cape and Natal", line1: "British colonies", line2: "on the coast" },
            { title: "Boer republics", line1: "the South African", line2: "Republic, Orange Free State" },
            { title: "African kingdoms", line1: "such as the Zulu,", line2: "still independent" },
            { title: "Not yet", line1: "one country,", line2: "or one ruler" },
          ]}
          aria={"Who ruled where in 1860. The Cape and Natal were British colonies. The Boer republics were the South African Republic and the Orange Free State. African kingdoms such as the Zulu were still independent. South Africa was not yet one country."}
        />
        <Worked
          title={"Read a political map"}
          steps={[
            "A map for 1860 uses different colours for colonies, republics and African kingdoms.",
            "It shows that Britain did not yet control all of southern Africa.",
            "Compare it with a map of 1913 to see how much the balance of power changed.",
          ]}
        />
        <Mistake>{"Thinking that all of South Africa was British in 1860. Britain held two colonies, and many African kingdoms and the Boer republics were independent."}</Mistake>
      </>,
    ),
  },
  {
    title: "Why Natal planters wanted workers from India",
    content: slide(
      <>
        <Rule>{"Sugar was in demand in Britain, and planters in Natal wanted workers for their plantations. The Zulu kingdom was independent, and many Africans in the region could live from their own land, so planters could not easily force them to work for low wages. India was a British colony where many people were poor, so planters recruited workers there."}</Rule>
        <FactCards
          cards={[
            { title: "Sugar", line1: "high demand", line2: "in Britain" },
            { title: "Planters", line1: "needed many cheap", line2: "workers in Natal" },
            { title: "Zulu kingdom", line1: "still independent,", line2: "not under British rule" },
            { title: "India", line1: "a British colony", line2: "with much poverty" },
          ]}
          aria={"Why Indian workers came. There was high demand for sugar in Britain. Planters in Natal needed many cheap workers. The Zulu kingdom was still independent. India was a British colony with much poverty, so planters recruited workers there."}
        />
        <SourceBox label={"Source A"} provenance={"An original paraphrase written for this lesson, in the style of a planter's letter."}>
          <p>{"The planter wrote that sugar could make the colony rich, but that he could not find enough workers who would stay on the plantation for the wages he offered."}</p>
        </SourceBox>
        <Worked
          title={"Judge the source"}
          steps={[
            "It tells us what the planter wanted: a steady supply of cheap labour.",
            "It does not tell us what the workers wanted, or what they were promised.",
            "To balance it we need a source from a labourer or from a government report.",
          ]}
        />
        <Mistake>{"Saying that planters simply invited people to a better life. Recruiters made promises, and many workers found the conditions harder than they were told."}</Mistake>
      </>,
    ),
  },
  {
    title: "Conditions under indenture, and the Passenger Indians",
    content: slide(
      <>
        <Rule>{"Indentured workers signed a contract, usually for five years, to work for one planter. They lived in barracks, worked long hours and could be punished for leaving. After their contract some became farmers, traders or workers elsewhere. Passenger Indians were traders and others who arrived from 1869, paying their own fares."}</Rule>
        <FactCards
          cards={[
            { title: "Contract", line1: "usually five years,", line2: "one planter" },
            { title: "Life", line1: "barracks, long hours,", line2: "strict rules" },
            { title: "After indenture", line1: "some farmed, traded", line2: "or worked elsewhere" },
            { title: "Passenger Indians", line1: "paid their own fare,", line2: "from 1869" },
          ]}
          aria={"Indenture and Passenger Indians. Workers signed a contract, usually for five years, for one planter. They lived in barracks, worked long hours and had to follow strict rules. After indenture some farmed, traded or worked elsewhere. Passenger Indians paid their own fares and arrived from 1869."}
        />
        <SourceBox label={"Source B"} provenance={"An original paraphrase written for this lesson, in the style of a labourer's account."}>
          <p>{"The labourer said that the work began before sunrise, that the barracks were crowded, and that he had hoped for better land and pay than he found."}</p>
        </SourceBox>
        <Worked
          title={"Compare the two sources"}
          steps={[
            "Source A shows the planter's need for labour; Source B shows the worker's experience.",
            "Together they show that indenture suited the planters better than the workers.",
            "Neither source tells us how every worker felt, so a historian would look for more.",
          ]}
        />
        <Mistake>{"Mixing up indentured workers and Passenger Indians. Indentured workers were bound by a contract and did not pay for the voyage; Passenger Indians paid their own way."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "Which two kinds of rulers governed southern Africa in 1860, besides the British?",
          "Why did Natal planters look for workers in India?",
          "What was a contract of indenture?",
          "Who were the Passenger Indians?",
        ]}
        answers={[
          "The Boer republics and independent African kingdoms such as the Zulu.",
          "They wanted cheap labour, and India was a British colony with much poverty.",
          "An agreement to work for one planter for a set number of years, usually five.",
          "Traders and others who came from 1869 and paid their own fares.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which two colonies did Britain rule in southern Africa in 1860?",
    options: ["The Transvaal and the Orange Free State", "Zululand and Basutoland", "The Cape Colony and Natal", "Natal and the Transvaal"],
    answer: "The Cape Colony and Natal",
    explanation: "The British held the Cape Colony and Natal.",
  },
  {
    prompt: "Which of these was a Boer republic in 1860?",
    options: ["The South African Republic", "The Cape Colony on the coast", "Natal, the sugar colony", "The Zulu kingdom of the north"],
    answer: "The South African Republic",
    explanation: "The South African Republic and the Orange Free State were Boer republics.",
  },
  {
    prompt: "Which kingdom was still independent in 1860?",
    options: ["The Cape Colony", "The Orange Free State", "Natal", "The Zulu kingdom"],
    answer: "The Zulu kingdom",
    explanation: "The Zulu kingdom was independent until 1879.",
  },
  {
    prompt: "What does a political map of 1860 show?",
    options: ["Only the weather", "Who ruled which areas", "Where gold was found", "The height of mountains"],
    answer: "Who ruled which areas",
    explanation: "A political map shows the areas of different rulers.",
  },
  {
    prompt: "What crop did Natal planters grow that was in demand in Britain?",
    options: ["Wheat", "Diamonds", "Sugar", "Maize only"],
    answer: "Sugar",
    explanation: "Sugar was in demand in Britain, and Natal planters grew it.",
  },
  {
    prompt: "Why was India a source of workers for Natal?",
    options: ["It was a British colony with much poverty", "It was ruled by the Zulu king", "It had no farms or villages", "It was a Boer republic with many farms and workers"],
    answer: "It was a British colony with much poverty",
    explanation: "India was a British colony, and poverty made recruitment easier.",
  },
  {
    prompt: "Why could Natal planters not easily find African workers?",
    options: ["The Zulu king sent soldiers to the farms", "There were no Africans in Natal", "Africans were not allowed on farms", "Many could live from their own land"],
    answer: "Many could live from their own land",
    explanation: "Planters needed workers who would accept low wages, and many Africans were not forced to.",
  },
  {
    prompt: "What is an indentured labourer?",
    options: ["A free trader who paid his own fare to Natal", "A worker bound by contract to one employer", "A soldier in the colonial army", "The owner of a sugar plantation"],
    answer: "A worker bound by contract to one employer",
    explanation: "Indenture bound the worker to a contract for a number of years.",
  },
  {
    prompt: "How long was a typical contract of indenture?",
    options: ["One week", "About one month", "Usually five years", "Usually fifty years"],
    answer: "Usually five years",
    explanation: "Contracts were usually for five years.",
  },
  {
    prompt: "When did the first indentured workers arrive in Natal?",
    options: ["1860", "1760", "1960", "1830"],
    answer: "1860",
    explanation: "The first Indian indentured workers arrived in 1860.",
  },
  {
    prompt: "Who were the Passenger Indians?",
    options: ["Indentured sugar workers on contract", "Boer farmers in the republics", "British soldiers sent to Natal", "Traders who paid their own fare"],
    answer: "Traders who paid their own fare",
    explanation: "Passenger Indians paid for their own journey.",
  },
  {
    prompt: "Why is a planter's letter alone not a fair picture of indenture?",
    options: ["It was written by a labourer on the farm", "It shows the planter's view", "It has no date at the top", "It is about diamond mining"],
    answer: "It shows the planter's view",
    explanation: "A fair picture needs the workers' views as well.",
  },
  {
    prompt: "Which source would best balance a planter's letter?",
    options: ["A second planter's letter only", "A map of the Boer republics", "A labourer's account", "A price list for sugar"],
    answer: "A labourer's account",
    explanation: "A labourer's account gives another point of view.",
  },
  {
    prompt: "What did many indentured workers find on arrival in Natal?",
    options: ["Hard work and strict rules", "Free land and no work to do", "A comfortable life in towns", "A place in the colonial government"],
    answer: "Hard work and strict rules",
    explanation: "The conditions were often harder than the recruiters promised.",
  },
];

const SouthernAfrica1860IndenturedLabour = () => (
  <CapsSubjectTopic
    title={"Southern Africa by 1860 and Indentured Labour"}
    subtitle={"Who ruled where, sugar in Natal, and workers brought from India"}
    learnSteps={learnSteps}
    task={"gr8-southern-africa-1860-indentured-labour-t1"}
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default SouthernAfrica1860IndenturedLabour;
