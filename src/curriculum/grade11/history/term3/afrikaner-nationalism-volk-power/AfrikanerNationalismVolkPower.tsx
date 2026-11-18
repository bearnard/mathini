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
    title: 'Who belonged to the Volk?',
    content: slide(
      <>
        <Rule>Afrikaner nationalists spoke of the Volk, the people, and defined it by language (Afrikaans), religion (mostly the Dutch Reformed churches), history (the Great Trek and the South African War) and race (white). Those who did not fit were left out: Black South Africans, Coloured and Indian South Africans, and also English-speaking white people. The nationalists did not agree among themselves on every point, and the definition changed over time.</Rule>
        <FactCards
          cards={[
            { title: 'Language', line1: 'Afrikaans', line2: 'as the mother tongue' },
            { title: 'Religion', line1: 'mostly the Dutch', line2: 'Reformed churches' },
            { title: 'History', line1: 'the Great Trek and', line2: 'the South African War' },
            { title: 'Race', line1: 'white, so others', line2: 'were left out' },
          ]}
          aria="Who belonged to the Volk. Language: Afrikaans as the mother tongue. Religion: mostly the Dutch Reformed churches. History: the Great Trek and the South African War. Race: white, so other South Africans were left out."
        />
        <Worked
          title="Test the definition"
          steps={[
            'An Afrikaans-speaking white Dutch Reformed farmer fits all four marks.',
            'An English-speaking white person fits the race mark but not language or history.',
            'A Black South African is left out by the race mark, whatever the person’s language or religion.',
          ]}
        />
        <Mistake>Using &ldquo;Afrikaner&rdquo; and &ldquo;white South African&rdquo; as if they mean the same thing. Many white South Africans were English-speaking.</Mistake>
      </>,
    ),
  },
  {
    title: 'Class, education, labour and religion',
    content: slide(
      <>
        <Rule>Nationalists linked the Volk to class and race in education, work and church. Christian-National Education (CNE) wanted children taught in their mother tongue in schools shaped by Christian-national values. In the labour market, white Afrikaner workers who feared competition from cheaper Black labour took part in strikes such as the Rand Revolt of {A.randRevolt}, and nationalists called for a nation that united workers and employers. The Dutch Reformed churches supported the idea that the Afrikaner people had a special calling.</Rule>
        <FactCards
          cards={[
            { title: 'Education', line1: 'Christian-National', line2: 'Education (CNE)' },
            { title: 'Labour', line1: `white strike, ${A.randRevolt},`, line2: 'against cheaper labour' },
            { title: 'Church', line1: 'the Dutch Reformed', line2: 'churches backed the idea' },
            { title: 'Class', line1: 'workers and employers', line2: 'asked to unite' },
          ]}
          aria={`Class, education, labour and religion. Education: Christian-National Education. Labour: the white strike of ${A.randRevolt} against cheaper labour. Church: the Dutch Reformed churches backed the idea. Class: workers and employers were asked to unite as one people.`}
        />
        <SourceBox label="Source B" provenance="An original paraphrase written for this lesson, in the style of a 1940s education policy document.">
          <p>The document said that Afrikaans children should be taught in Afrikaans, in schools built on Christian and national values, separate from the schools of other groups.</p>
        </SourceBox>
        <Worked
          title="Judge its use"
          steps={[
            'It is useful for showing what the nationalists wanted from schools: a separate education built on language, religion and nation.',
            'It does not show how many parents supported the plan or how it worked in classrooms.',
          ]}
        />
        <Mistake>Saying that nationalism removed class differences. It asked people of different classes to unite, but rich and poor Afrikaners still had different interests.</Mistake>
      </>,
    ),
  },
  {
    title: 'The power of nationalism, and its effects on Black South Africans',
    content: slide(
      <>
        <Rule>The nationalists wanted political power as well as cultural unity. The National Party won the election of {A.election}, and it used the state to carry out apartheid. Segregation did not begin with the nationalists: the Natives Land Act of {A.landAct} and the removal of Cape African voters from the common roll in {A.nativeRepresentation} were passed before {A.election}, with the support of many white voters of both language groups. Under the National Party, apartheid made the system more complete and more rigid, and Black South Africans were excluded from the nation and from the vote.</Rule>
        <FactCards
          cards={[
            { title: `${A.landAct}`, line1: 'Natives Land Act limits', line2: 'Black land ownership' },
            { title: `${A.nativeRepresentation}`, line1: 'Cape African voters', line2: 'taken off the roll' },
            { title: `${A.election}`, line1: 'National Party wins,', line2: 'apartheid follows' },
            { title: 'Effect', line1: 'Black South Africans', line2: 'excluded from the nation' },
          ]}
          aria={`The power of nationalism. In ${A.landAct} the Natives Land Act limited Black land ownership. In ${A.nativeRepresentation} Cape African voters were taken off the common roll. In ${A.election} the National Party won and apartheid followed. The effect was that Black South Africans were excluded from the nation.`}
        />
        <Worked
          title="Give a balanced explanation"
          steps={[
            'Nationalism gave poor Afrikaners pride, jobs and a political voice.',
            'It also defined the nation as white, so it denied political and economic rights to the majority.',
            'Segregation had earlier roots, so the National Party built on laws that already existed.',
          ]}
        />
        <Mistake>Blaming one language group alone for segregation. Support for segregation came from many white South Africans before and after {A.election}.</Mistake>
      </>,
    ),
  },
  {
    title: 'How historians explain Afrikaner nationalism',
    content: slide(
      <>
        <Rule>Historians give different explanations. One view sees nationalism as a response to British imperialism and the fear of losing a language and a culture. A second view stresses class: leaders from a rising Afrikaner middle class used the idea of a united people to win support and build Afrikaner businesses. A third view stresses race and the wish of white people to keep power and privilege. Most historians combine more than one of these explanations.</Rule>
        <FactCards
          cards={[
            { title: 'Culture', line1: 'a response to British', line2: 'imperialism and anglicisation' },
            { title: 'Class', line1: 'a middle class built', line2: 'support and businesses' },
            { title: 'Race', line1: 'white people keeping', line2: 'power and privilege' },
            { title: 'Together', line1: 'most historians', line2: 'combine the views' },
          ]}
          aria="How historians explain Afrikaner nationalism. Culture: a response to British imperialism and the fear of losing a language and culture. Class: a middle class built support and businesses. Race: white people keeping power and privilege. Together: most historians combine these views."
        />
        <Worked
          title="Use more than one explanation"
          steps={[
            'The war and poverty explain why many Afrikaners listened to nationalists.',
            'The Broederbond and new banks show how leaders built networks and wealth.',
            'The laws on land, voting and jobs show how race was used to keep power.',
          ]}
        />
        <Mistake>Choosing one explanation and ignoring the others. A strong answer weighs the evidence for each.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two marks that nationalists used to define the Volk.</>,
          <>What did Christian-National Education want for Afrikaans children?</>,
          <>In which year did the National Party win power?</>,
          <>Did segregation begin only after the National Party won?</>,
        ]}
        answers={[
          <>For example language, religion, history or race.</>,
          <>Mother-tongue schooling built on Christian-national values.</>,
          <>{A.election}.</>,
          <>No. Segregation laws such as the {A.landAct} Land Act came earlier.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What did nationalists mean by the Volk?",
    options: ["All South Africans of every language and race", "All of the workers who were in the mines", "The Afrikaner people, by language and race", "All members of the Union Parliament"],
    answer: "The Afrikaner people, by language and race",
    explanation: "The Volk meant a white, Afrikaans-speaking, mostly Dutch Reformed people.",
  },
  {
    prompt: "Which of these was a mark of the Volk?",
    options: ["Afrikaans as the mother tongue", "English as the language of the home", "Membership of a trade union", "Citizenship of Britain"],
    answer: "Afrikaans as the mother tongue",
    explanation: "Language was one of the main marks.",
  },
  {
    prompt: "Why were English-speaking white people not part of the Volk?",
    options: ["They were not regarded as white at all", "They were not allowed to vote at all", "They were not Christians of any kind", "They lacked the language and history"],
    answer: "They lacked the language and history",
    explanation: "The Volk was defined by language and history as well as race.",
  },
  {
    prompt: "What did Christian-National Education want?",
    options: ["Free schools in which all races learned together", "Mother-tongue, Christian-national schools", "Schools without any religion at all", "Only English-medium schools for every child"],
    answer: "Mother-tongue, Christian-national schools",
    explanation: "CNE aimed at separate schools shaped by religion and nation.",
  },
  {
    prompt: "The Rand Revolt of 1922 was a strike by whom?",
    options: ["Black miners", "White miners", "Mine owners", "Farmers"],
    answer: "White miners",
    explanation: "White workers struck against cheaper Black labour.",
  },
  {
    prompt: "How did nationalists try to deal with class differences among Afrikaners?",
    options: ["By ending all paid work in the country", "By closing the gold mines of the Rand", "By banning the churches of the Volk", "By asking all classes to unite as a people"],
    answer: "By asking all classes to unite as a people",
    explanation: "The idea of the Volk joined people of different classes.",
  },
  {
    prompt: "Which churches supported the idea of a special calling for the Afrikaner people?",
    options: ["The Dutch Reformed churches", "The Catholic Church", "The Zionist churches", "The Anglican Church"],
    answer: "The Dutch Reformed churches",
    explanation: "Many Dutch Reformed leaders backed Afrikaner nationalism.",
  },
  {
    prompt: "In which year did the National Party win the election?",
    options: ["1910", "1933", "1948", "1961"],
    answer: "1948",
    explanation: "The National Party won in 1948 and began to build apartheid.",
  },
  {
    prompt: "Which law of 1913 limited Black land ownership?",
    options: ["The Group Areas Act", "The Bantu Education Act", "The Pass Act", "The Natives Land Act"],
    answer: "The Natives Land Act",
    explanation: "The Natives Land Act of 1913 came before the National Party's rule.",
  },
  {
    prompt: "What happened to Cape African voters in 1936?",
    options: ["They gained the vote", "They were removed from the common roll", "They were sent to the Free State", "They were made chiefs"],
    answer: "They were removed from the common roll",
    explanation: "The Representation of Natives Act took them off the common voters' roll.",
  },
  {
    prompt: "What does the 1913 and 1936 evidence show about segregation?",
    options: ["It began before 1948", "It began only in the year 1948", "It was never supported by white voters", "It began only after the year 1994"],
    answer: "It began before 1948",
    explanation: "Many white voters of both language groups supported earlier segregation.",
  },
  {
    prompt: "What was the effect of the Volk idea on Black South Africans?",
    options: ["They were given extra political rights", "They were asked to rule the country", "They were left out of the nation", "They were counted as part of the Volk"],
    answer: "They were left out of the nation",
    explanation: "The nation was defined as white, so they were excluded from the vote.",
  },
  {
    prompt: "A historian says that a rising middle class used the Volk idea to build support. Which explanation is this?",
    options: ["A race-only explanation", "A weather explanation", "A class explanation", "A purely military explanation"],
    answer: "A class explanation",
    explanation: "The class view stresses the leaders who built networks and businesses.",
  },
  {
    prompt: "Why does a strong answer use more than one explanation of Afrikaner nationalism?",
    options: ["Culture, class and race all played a part", "Only one is ever correct", "Historians all agree on one", "The explanations are unrelated"],
    answer: "Culture, class and race all played a part",
    explanation: "Most historians combine several explanations.",
  },
];

const AfrikanerNationalismVolkPower = () => (
  <CapsSubjectTopic
    title="Defining the Volk and the Power of Nationalism"
    subtitle="Who belonged to the Volk, class, education, labour, religion, apartheid and how historians explain it"
    learnSteps={learnSteps}
    task="gr11-afrikaner-nationalism-volk-power-t3"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default AfrikanerNationalismVolkPower;
