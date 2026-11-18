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
    title: 'Key events: Afrikaner nationalism, 1899 to 1948',
    content: slide(
      <Timeline
        events={[
          { date: `${A.warStart} to ${A.warEnd}`, title: 'The South African War', description: 'Britain defeats the Boer republics. Many Boer women and children die in British camps.' },
          { date: String(A.npFounded), title: 'The National Party is founded', description: 'J. B. M. Hertzog leads a party that puts Afrikaner interests first.' },
          { date: String(A.broederbond), title: 'The Broederbond is founded', description: 'A secret society works to advance Afrikaner interests.' },
          { date: String(A.afrikaansOfficial), title: 'Afrikaans becomes an official language', description: 'It replaces Dutch as an official language of the Union.' },
          { date: String(A.fak), title: 'The FAK is formed', description: 'The Federation of Afrikaans Cultural Organisations unites many cultural groups.' },
          { date: String(A.centenary), title: 'The Great Trek centenary', description: 'Mass celebrations, including a symbolic ox-wagon trek, strengthen Afrikaner pride.' },
          { date: String(A.election), title: 'The National Party wins the election', description: 'It wins a majority of seats and begins to govern.' },
        ]}
      />,
    ),
  },
  {
    title: 'Background: war, poverty and the fear of losing a language',
    content: slide(
      <>
        <Rule>Afrikaner nationalism grew out of the South African War of {A.warStart} to {A.warEnd}, in which the Boer republics lost their independence and more than 20 000 Boer women and children died in British camps. After the war many Afrikaners saw their language and culture under pressure from English, and many were poor: the Carnegie Commission of {A.carnegieReport} found that a large number of poor white people, most of them Afrikaans-speaking, were living in deep poverty in the towns and countryside.</Rule>
        <FactCards
          cards={[
            { title: 'War', line1: `${A.warStart} to ${A.warEnd}, republics lose`, line2: 'their independence' },
            { title: 'Camps', line1: 'deaths among women', line2: 'and children' },
            { title: 'Language', line1: 'fear that English', line2: 'would take over' },
            { title: 'Poverty', line1: 'many poor Afrikaners', line2: 'in towns and on farms' },
          ]}
          aria={`Background to Afrikaner nationalism. The war of ${A.warStart} to ${A.warEnd} ended the republics' independence. Many women and children died in the camps. There was a fear that English would take over. Many Afrikaners were poor, as the Carnegie Commission found in ${A.carnegieReport}.`}
        />
        <Worked
          title="Link causes to the rise of nationalism"
          steps={[
            'Defeat and the camps left bitter memories and a wish to protect the Afrikaner identity.',
            'Poverty in the towns made leaders look for ways to help poor Afrikaners.',
            'Language and culture became the symbols that joined people of different classes.',
          ]}
        />
        <Mistake>Saying that all Afrikaners were poor, or that all supported the nationalists. Afrikaners were divided, and some, such as the followers of Smuts, rejected the nationalists.</Mistake>
      </>,
    ),
  },
  {
    title: 'The language movement and cultural organisations',
    content: slide(
      <>
        <Rule>Leaders worked to make Afrikaans a language of schools, churches, books and government. Afrikaans replaced Dutch as an official language in {A.afrikaansOfficial}, and the first full Afrikaans Bible was completed in {A.bible}. The Federation of Afrikaans Cultural Organisations (FAK, {A.fak}) joined many cultural groups, and the Broederbond ({A.broederbond}), a secret society open only to white Afrikaans-speaking men, helped its members to find posts and influence. Newspapers such as Die Burger ({A.dieBurger}) and Die Transvaler ({A.dieTransvaler}) spread the nationalist message.</Rule>
        <FactCards
          cards={[
            { title: `${A.afrikaansOfficial}`, line1: 'Afrikaans replaces', line2: 'Dutch as official' },
            { title: `${A.fak}`, line1: 'the FAK joins cultural', line2: 'organisations' },
            { title: `${A.broederbond}`, line1: 'the secret Broederbond', line2: 'is founded' },
            { title: 'Media', line1: `Die Burger ${A.dieBurger},`, line2: `Die Transvaler ${A.dieTransvaler}` },
          ]}
          aria={`Language and culture. In ${A.afrikaansOfficial} Afrikaans replaced Dutch as an official language. The FAK was formed in ${A.fak}. The secret Broederbond was founded in ${A.broederbond}. Newspapers: Die Burger from ${A.dieBurger} and Die Transvaler from ${A.dieTransvaler}.`}
        />
        <SourceBox label="Source A" provenance="An original paraphrase written for this lesson, in the style of a 1930s cultural pamphlet.">
          <p>The pamphlet urged Afrikaners to read Afrikaans books, to speak Afrikaans at home and at work, and to support Afrikaans schools and societies.</p>
        </SourceBox>
        <Worked
          title="Judge its use"
          steps={[
            'It is useful for the aims of the cultural movement: to build pride and unity around language.',
            'It does not tell us how many people agreed, or what other groups, such as Black South Africans, thought of it.',
          ]}
        />
        <Mistake>Describing the Broederbond as a public cultural society. It was secret, and its members were chosen by invitation.</Mistake>
      </>,
    ),
  },
  {
    title: 'Economic upliftment and the civilised labour policy',
    content: slide(
      <>
        <Rule>Nationalists also tried to improve the position of poor Afrikaners. Afrikaner-owned businesses such as Sanlam ({A.sanlam}) and Volkskas ({A.volkskas}) were set up, and in {A.reddingsdaadbond} the Reddingsdaadbond encouraged Afrikaners to save and invest. After the Pact government came to power, its civilised labour policy of {A.civilisedLabour} gave white workers preference in government jobs and state industries such as the railways and Eskom. This works like a form of affirmative action, but only for white South Africans.</Rule>
        <FactCards
          cards={[
            { title: 'Business', line1: `Sanlam ${A.sanlam},`, line2: `Volkskas ${A.volkskas}` },
            { title: 'Saving', line1: `the Reddingsdaadbond,`, line2: `${A.reddingsdaadbond}` },
            { title: 'Jobs', line1: `civilised labour policy,`, line2: `${A.civilisedLabour}` },
            { title: 'Who gained', line1: 'poor white South', line2: 'Africans' },
          ]}
          aria={`Economic upliftment. Business: Sanlam in ${A.sanlam} and Volkskas in ${A.volkskas}. Saving: the Reddingsdaadbond in ${A.reddingsdaadbond}. Jobs: the civilised labour policy of ${A.civilisedLabour}. The people who gained were poor white South Africans.`}
        />
        <Worked
          title="Explain the effect"
          steps={[
            'State jobs were reserved for white workers, which lifted many poor Afrikaners into steady employment.',
            'Black workers were pushed out of those jobs or paid less.',
            'So the same policy helped one group and harmed another.',
          ]}
        />
        <Mistake>Calling this affirmative action in the modern sense. Today the term means help for groups that were disadvantaged, and this policy helped the group that already held political power.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which war left bitter memories that fed Afrikaner nationalism?</>,
          <>In which year did Afrikaans replace Dutch as an official language?</>,
          <>Name the secret society that worked to advance Afrikaner interests.</>,
          <>Who benefited from the civilised labour policy?</>,
        ]}
        answers={[
          <>The South African War, {A.warStart} to {A.warEnd}.</>,
          <>{A.afrikaansOfficial}.</>,
          <>The Broederbond.</>,
          <>White workers, especially poor Afrikaners.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which war left bitter memories that helped Afrikaner nationalism to grow?",
    options: ["The First World War of 1914 to 1918", "The Second World War of 1939 to 1945", "The South African War of 1899 to 1902", "The Zulu War of 1879 in Natal"],
    answer: "The South African War of 1899 to 1902",
    explanation: "The loss of the republics and the camps shaped Afrikaner memory.",
  },
  {
    prompt: "Which report of 1932 described the poverty of many white South Africans?",
    options: ["The Carnegie Commission report", "The Freedom Charter of the people", "The Wiehahn report on labour", "The Mabo report on land rights"],
    answer: "The Carnegie Commission report",
    explanation: "The Carnegie Commission found deep poverty among poor whites, mostly Afrikaans-speaking.",
  },
  {
    prompt: "In which year did Afrikaans replace Dutch as an official language?",
    options: ["1899", "1948", "1994", "1925"],
    answer: "1925",
    explanation: "Afrikaans was recognised as an official language in 1925.",
  },
  {
    prompt: "In which year was the full Afrikaans Bible completed?",
    options: ["1910", "1933", "1948", "1961"],
    answer: "1933",
    explanation: "The Afrikaans Bible of 1933 was a landmark for the language.",
  },
  {
    prompt: "What did the FAK bring together?",
    options: ["Afrikaans and English newspapers", "Many Afrikaans cultural organisations", "Black trade unions", "Rural schools"],
    answer: "Many Afrikaans cultural organisations",
    explanation: "The Federation of Afrikaans Cultural Organisations united cultural groups.",
  },
  {
    prompt: "In which year was the FAK formed?",
    options: ["1918", "1938", "1948", "1929"],
    answer: "1929",
    explanation: "The FAK was formed in 1929.",
  },
  {
    prompt: "What was the Broederbond?",
    options: ["A secret society of Afrikaans men", "A public sports club for the town", "A newspaper company in Cape Town", "A trade union of the gold miners"],
    answer: "A secret society of Afrikaans men",
    explanation: "Members were invited, and it worked to advance Afrikaner interests.",
  },
  {
    prompt: "Which kind of men could join the Broederbond?",
    options: ["Men of any race", "Women of any language", "White Afrikaans-speaking men", "Foreign visitors"],
    answer: "White Afrikaans-speaking men",
    explanation: "Membership was by invitation and limited to white Afrikaans-speaking men.",
  },
  {
    prompt: "Which newspapers spread the nationalist message?",
    options: ["The Rand Daily Mail and Drum", "The Cape Argus and The Star", "Drum magazine and Bona magazine", "Die Burger and Die Transvaler"],
    answer: "Die Burger and Die Transvaler",
    explanation: "These Afrikaans papers backed the nationalist cause.",
  },
  {
    prompt: "Which Afrikaner-owned business was set up in 1918?",
    options: ["Eskom", "Sanlam", "Anglo American", "De Beers"],
    answer: "Sanlam",
    explanation: "Sanlam, an insurance company, was set up in 1918.",
  },
  {
    prompt: "What did the civilised labour policy of 1924 do?",
    options: ["Gave whites preference in state jobs", "Raised the wages of all workers", "Banned every trade union in the land", "Opened all state jobs to all races"],
    answer: "Gave whites preference in state jobs",
    explanation: "State jobs were reserved to lift poor white workers.",
  },
  {
    prompt: "Who lost out under the civilised labour policy?",
    options: ["White workers", "Afrikaner farmers", "Black workers", "Mine owners only"],
    answer: "Black workers",
    explanation: "Black workers were pushed out of jobs or paid less.",
  },
  {
    prompt: "What event of 1938 strengthened Afrikaner pride?",
    options: ["The founding of Union", "The Rand Revolt", "The Great Trek centenary", "The Freedom Charter"],
    answer: "The Great Trek centenary",
    explanation: "Mass celebrations, including an ox-wagon trek, stirred nationalist feeling.",
  },
  {
    prompt: "Why is it wrong to say that all Afrikaners supported the nationalists?",
    options: ["Afrikaners were divided in their politics", "All Afrikaners were English-speaking", "Afrikaners could not vote", "The party did not exist"],
    answer: "Afrikaners were divided in their politics",
    explanation: "Many Afrikaners, for example followers of Smuts, rejected the nationalists.",
  },
];

const AfrikanerNationalismRise = () => (
  <CapsSubjectTopic
    title="The Rise of Afrikaner Nationalism"
    subtitle="Background, the language movement, cultural organisations and economic upliftment"
    learnSteps={learnSteps}
    task="gr11-afrikaner-nationalism-rise-t3"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default AfrikanerNationalismRise;
