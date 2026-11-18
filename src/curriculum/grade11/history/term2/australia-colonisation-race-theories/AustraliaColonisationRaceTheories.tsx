import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { SourceBox } from '../../../../grade12/history/_shared/SourceBox';
import { AFRIKANER as A, AUSTRALIA as S } from '../../_shared/gaps11Facts';

// Dates come from gaps11Facts.ts and are asserted in g11HisGaps.test.ts. Every source box is an original or paraphrased description written for the lesson.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const date = (d: { day: number; month: string; year: number }) => `${d.day} ${d.month} ${d.year}`;
export const learnSteps: LearnStep[] = [
  {
    title: 'Key events: Australia, 1788 to 1973',
    content: slide(
      <Timeline
        events={[
          { date: String(S.firstFleet), title: 'The First Fleet arrives', description: 'British ships land convicts and soldiers at Sydney Cove and begin the colonisation of the continent.' },
          { date: String(S.federation), title: 'Federation and the Immigration Restriction Act', description: 'The colonies join as the Commonwealth of Australia, and a law is passed to keep non-white immigrants out. It becomes known as the White Australia policy.' },
          { date: `${S.waAboriginesAct}`, title: 'Western Australia\'s Aborigines Act', description: 'A Chief Protector becomes the legal guardian of Aboriginal children in the state.' },
          { date: 'After 1945', title: 'Post-war immigration drive', description: 'The government encourages white migrants and children from Britain to settle in Australia.' },
          { date: String(S.whiteAustraliaEnded), title: 'The White Australia policy ends', description: 'The last race-based immigration rules are removed.' },
        ]}
      />,
    ),
  },
  {
    title: 'Background: the colonisation of Australia',
    content: slide(
      <>
        <Rule>Aboriginal and Torres Strait Islander peoples had lived in Australia for tens of thousands of years, in many nations with their own languages and laws, when the British arrived in {S.firstFleet}. The British treated the land as if it belonged to no one, a legal idea called terra nullius, and took it for settlers. Disease, loss of land and violence on the frontier greatly reduced the Indigenous population.</Rule>
        <FactCards
          cards={[
            { title: 'Before 1788', line1: 'many nations, languages', line2: 'and laws on the land' },
            { title: '1788', line1: 'British settlement', line2: 'begins at Sydney Cove' },
            { title: 'Terra nullius', line1: 'land treated as owned', line2: 'by no one' },
            { title: 'Result', line1: 'dispossession, disease', line2: 'and a falling population' },
          ]}
          aria="The colonisation of Australia. Before 1788: many Indigenous nations, languages and laws. In 1788 British settlement began at Sydney Cove. Terra nullius treated the land as owned by no one. The result was dispossession, disease and a falling Indigenous population."
        />
        <Worked
          title="Explain how the idea shaped events"
          steps={[
            'The British said that the land belonged to no one.',
            'So settlers took land without treaties or payment, although Indigenous nations used and cared for it.',
            'The High Court rejected terra nullius in the Mabo decision of 1992 and recognised that native title can exist.',
          ]}
        />
        <Mistake>Describing Indigenous Australians as one people. There were many nations with different languages and customs.</Mistake>
      </>,
    ),
  },
  {
    title: 'Race theories in early twentieth-century Australia',
    content: slide(
      <>
        <Rule>In the early twentieth century many Australians, like many people in Europe and the United States, accepted theories that sorted people into a hierarchy of races. Two ideas were common: &ldquo;race suicide&rdquo;, the fear that the white birth rate was falling, and &ldquo;race degeneration&rdquo;, the fear that the white population was weakening. Many officials also wrongly believed that Aboriginal people were a dying race, and some supporters of eugenics wanted to control who had children.</Rule>
        <FactCards
          cards={[
            { title: 'Hierarchy', line1: 'people ranked by', line2: 'so-called race' },
            { title: 'Race suicide', line1: 'fear of a falling', line2: 'white birth rate' },
            { title: 'Degeneration', line1: 'fear of a weaker', line2: 'white population' },
            { title: 'Dying race', line1: 'a false belief about', line2: 'Aboriginal people' },
          ]}
          aria="Race theories in Australia. Hierarchy: people ranked by so-called race. Race suicide: fear of a falling white birth rate. Degeneration: fear of a weaker white population. Dying race: a false belief about Aboriginal people."
        />
        <Worked
          title="Link the theory to a policy"
          steps={[
            'If officials believed that white numbers must grow, they wanted more white immigrants.',
            'If they believed that Aboriginal people were dying out, they planned to guide those who remained into white society.',
            'The modern understanding is that there are no biological human races, which the Human Genome Project confirmed.',
          ]}
        />
        <Mistake>Presenting these theories as accepted science that was correct at the time. They were widely held but based on prejudice, and scientists later disproved them.</Mistake>
      </>,
    ),
  },
  {
    title: 'White immigration and children sent from Britain',
    content: slide(
      <>
        <Rule>After federation in {S.federation} the new government wanted a white Australia and passed the Immigration Restriction Act, which used a language test to keep non-white immigrants out. After the Second World War the government feared that Australia was thinly populated and encouraged mass immigration, with a strong preference for white British migrants. Thousands of British children from orphanages and care homes were sent to Australia, many without their parents fully understanding what was happening.</Rule>
        <FactCards
          cards={[
            { title: `${S.federation}`, line1: 'law to keep out', line2: 'non-white immigrants' },
            { title: 'After 1945', line1: 'mass immigration with', line2: 'a white British preference' },
            { title: 'Children', line1: 'sent from British homes', line2: 'to Australia' },
            { title: 'Later', line1: `apologies in ${S.childMigrantApologyAustralia}`, line2: `and ${S.childMigrantApologyBritain}` },
          ]}
          aria={`White immigration policy. In ${S.federation} a law was passed to keep out non-white immigrants. After 1945 there was mass immigration with a white British preference. Children were sent from British homes to Australia. The Australian and British governments apologised in ${S.childMigrantApologyAustralia} and ${S.childMigrantApologyBritain}.`}
        />
        <SourceBox label="Source A" provenance="An original description written for this lesson, in the style of a government pamphlet of the late 1940s.">
          <p>&ldquo;Australia needs more people. Families and children from Britain will be welcomed, and help will be given with the journey.&rdquo;</p>
        </SourceBox>
        <Worked
          title="Judge its use"
          steps={[
            'It shows the aim of the government: to increase the population with people from Britain.',
            'It does not say who was left out, or how the children felt about being sent.',
          ]}
        />
        <Mistake>Thinking that the White Australia policy ended in 1901. It began then and lasted until the 1970s.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>In which year did the First Fleet arrive?</>,
          <>What was the legal idea that treated the land as owned by no one?</>,
          <>What was meant by the fear of &ldquo;race suicide&rdquo;?</>,
          <>Which policy used a language test to keep non-white immigrants out?</>,
        ]}
        answers={[
          <>{S.firstFleet}.</>,
          <>Terra nullius.</>,
          <>The fear that the white birth rate was falling.</>,
          <>The White Australia policy, begun in {S.federation}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "In which year did the First Fleet arrive at Sydney Cove?",
    options: ["1801", "1770", "1788", "1851"],
    answer: "1788",
    explanation: "The First Fleet landed in 1788 and began British settlement.",
  },
  {
    prompt: "Which legal idea treated Australia as land that belonged to no one?",
    options: ["Terra nullius", "Habeas corpus", "Federation", "Native title"],
    answer: "Terra nullius",
    explanation: "Terra nullius let the British take land without treaties.",
  },
  {
    prompt: "In 1992 the High Court rejected terra nullius. In which decision?",
    options: ["The Brown decision", "The Rudd decision", "The Canberra decision", "The Mabo decision"],
    answer: "The Mabo decision",
    explanation: "Mabo recognised that native title can exist.",
  },
  {
    prompt: "Which statement about Indigenous Australians before 1788 is correct?",
    options: ["They formed one single nation", "They lived in many nations with different languages", "They had arrived only a few years earlier", "They had no laws or customs"],
    answer: "They lived in many nations with different languages",
    explanation: "There were many nations, each with its own languages and laws.",
  },
  {
    prompt: "What did the fear of \"race suicide\" refer to?",
    options: ["A rise in the Aboriginal population", "A falling white birth rate", "A war between the colonies", "A shortage of food in cities"],
    answer: "A falling white birth rate",
    explanation: "Some people feared that the white population was not growing fast enough.",
  },
  {
    prompt: "What did the fear of \"race degeneration\" refer to?",
    options: ["A belief that all races were equal", "A rise in Asian migration to the ports", "A fall in the price of Australian wool", "A belief that whites were weakening"],
    answer: "A belief that whites were weakening",
    explanation: "It was a fear, based on prejudice, that the white population would become weaker.",
  },
  {
    prompt: "What false belief did many officials hold about Aboriginal people?",
    options: ["That they were a dying race", "That they were the largest group", "That they had come from Europe", "That they all lived in cities"],
    answer: "That they were a dying race",
    explanation: "Officials expected the Aboriginal population to die out, which shaped policy.",
  },
  {
    prompt: "Which finding of modern science disproves the old race hierarchies?",
    options: ["Races differ in intelligence", "Skull shape shows ability", "There are no biological human races", "Skin colour fixes character"],
    answer: "There are no biological human races",
    explanation: "The Human Genome Project showed that people are genetically very similar.",
  },
  {
    prompt: "Which policy used a language test to keep out non-white immigrants?",
    options: ["The Marshall Plan", "The New Deal", "The assimilation policy", "The White Australia policy"],
    answer: "The White Australia policy",
    explanation: "The Immigration Restriction Act of 1901 began the White Australia policy.",
  },
  {
    prompt: "In which year did Australia's colonies federate into the Commonwealth?",
    options: ["1788", "1901", "1937", "1973"],
    answer: "1901",
    explanation: "Federation took place in 1901.",
  },
  {
    prompt: "In which decade did the last race-based immigration rules end?",
    options: ["The 1970s", "The 1920s", "The 1940s", "The 1990s"],
    answer: "The 1970s",
    explanation: "The White Australia policy ended in 1973.",
  },
  {
    prompt: "Why did the Australian government encourage immigration after 1945?",
    options: ["It already had far too many people", "It wanted fewer jobs in its factories", "It feared the country was too empty", "It wanted to close all of its ports"],
    answer: "It feared the country was too empty",
    explanation: "The government wanted a larger population, with a preference for white British migrants.",
  },
  {
    prompt: "Where were many British children sent after the Second World War?",
    options: ["From Australia back to Britain", "From India to Australia by rail", "From care homes to Australia", "From Canada to Britain by sea"],
    answer: "From care homes to Australia",
    explanation: "Thousands were sent from orphanages and care homes.",
  },
  {
    prompt: "In a source about immigration, which question helps a historian judge its use?",
    options: ["Who wrote it, and what is left out?", "Is the paper still white in colour?", "How long is the title of the page?", "Was it written with blue ink?"],
    answer: "Who wrote it, and what is left out?",
    explanation: "A historian checks the author's aim and what the source does not say.",
  },
];

const AustraliaColonisationRaceTheories = () => (
  <CapsSubjectTopic
    title="Australia: Colonisation and Race Theories"
    subtitle="Colonisation, race theories, the White Australia policy and children sent from Britain"
    learnSteps={learnSteps}
    task="gr11-australia-colonisation-race-theories-t2"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default AustraliaColonisationRaceTheories;
