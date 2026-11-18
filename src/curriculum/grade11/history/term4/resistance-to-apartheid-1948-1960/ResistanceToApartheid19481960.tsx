import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { SourceBox } from '../../../../grade12/history/_shared/SourceBox';
import { RESISTANCE as R, when } from '../../_shared/topic5Facts';

// Facts come from topic5Facts.ts and are asserted in g11HisResistance.test.ts. Every source box is an original or paraphrased description written for the lesson.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const MARCHERS = '20\u00a0000';

export const learnSteps: LearnStep[] = [
  {
    title: 'Key events: resistance, 1948 to 1959',
    content: slide(
      <Timeline
        events={[
          { date: String(R.nationalParty), title: 'The National Party wins the election', description: 'Apartheid laws follow, including the Group Areas Act and the Suppression of Communism Act of 1950.' },
          { date: String(R.programmeOfAction), title: 'The ANC adopts the Programme of Action', description: 'The Youth League wins support for strikes, boycotts and civil disobedience.' },
          { date: when(R.defiance), title: 'The Defiance Campaign begins', description: 'Volunteers break unjust laws peacefully and go to prison.' },
          { date: when(R.charter), title: 'The Freedom Charter is adopted', description: 'The Congress of the People meets at Kliptown.' },
          { date: when(R.womenMarch), title: 'Women march to the Union Buildings', description: 'About 20 000 women protest against passes for women.' },
          { date: String(R.pacFounded), title: 'The Pan Africanist Congress is formed', description: 'Robert Sobukwe leads a group that breaks away from the ANC.' },
        ]}
      />,
    ),
  },
  {
    title: 'From the Programme of Action to the Defiance Campaign',
    content: slide(
      <>
        <Rule>After 1948 the National Party passed laws such as the Group Areas Act and the Suppression of Communism Act (both {R.groupAreas}). Young leaders in the ANC Youth League, formed in {R.youthLeague}, wanted a more active struggle. The Programme of Action of {R.programmeOfAction} called for strikes, boycotts and civil disobedience, and the Defiance Campaign began on {when(R.defiance)}, run together with the South African Indian Congress.</Rule>
        <FactCards
          cards={[
            { title: `${R.youthLeague}`, line1: 'the ANC Youth League', line2: 'is formed' },
            { title: `${R.programmeOfAction}`, line1: 'Programme of Action:', line2: 'mass action' },
            { title: `${R.defiance.year}`, line1: 'the Defiance Campaign', line2: 'with the Indian Congress' },
            { title: 'Method', line1: 'peaceful law-breaking,', line2: 'arrest on purpose' },
          ]}
          aria={`Early resistance. The Youth League was formed in ${R.youthLeague}. The Programme of Action of ${R.programmeOfAction} called for mass action. The Defiance Campaign of ${R.defiance.year} was run with the South African Indian Congress. Volunteers broke unjust laws peacefully and were arrested on purpose.`}
        />
        <SourceBox label="Source A" provenance="An original paraphrase written for this lesson, in the style of a 1952 volunteer's report.">
          <p>The volunteer describes walking into a railway waiting room marked for whites only, giving her name to the police and being arrested without resisting. She says the aim was to show that the law was unjust and to fill the prisons.</p>
        </SourceBox>
        <Worked
          title="Use the source"
          steps={[
            'The source shows the method of the campaign: peaceful law-breaking and arrest on purpose.',
            'It is one volunteer’s account, so it does not tell us how the government planned its reply.',
          ]}
        />
        <Mistake>Saying the Defiance Campaign used violence. Its volunteers were trained to stay peaceful, and the state answered with arrests and new laws.</Mistake>
      </>,
    ),
  },
  {
    title: 'The Freedom Charter and the Treason Trial',
    content: slide(
      <>
        <Rule>The Congress of the People met at Kliptown, near Johannesburg, and adopted the Freedom Charter on {when(R.charter)}. It begins by saying that South Africa belongs to all who live in it. In December {R.treasonArrests} {R.treasonAccused} leaders were arrested for treason. The trial dragged on, and by {R.treasonAcquittal} the accused had been found not guilty.</Rule>
        <FactCards
          cards={[
            { title: `${R.charter.year}`, line1: 'the Freedom Charter', line2: 'at Kliptown' },
            { title: 'Aim', line1: 'South Africa belongs', line2: 'to all who live in it' },
            { title: `${R.treasonArrests}`, line1: `${R.treasonAccused} leaders arrested`, line2: 'for treason' },
            { title: `${R.treasonAcquittal}`, line1: 'the accused are', line2: 'found not guilty' },
          ]}
          aria={`The Freedom Charter and the Treason Trial. The Freedom Charter was adopted at Kliptown in ${R.charter.year}. It says South Africa belongs to all who live in it. In ${R.treasonArrests} ${R.treasonAccused} leaders were arrested for treason, and by ${R.treasonAcquittal} they had been found not guilty.`}
        />
        <SourceBox label="Source B" provenance="A short extract from the Freedom Charter, 1955.">
          <p>South Africa belongs to all who live in it, black and white.</p>
        </SourceBox>
        <Worked
          title="Judge its use"
          steps={[
            'It is useful because it states what the Congress Alliance itself wanted.',
            'It shows one side only, so a historian also reads the government’s view of the charge of treason.',
          ]}
        />
        <Mistake>Thinking that the Treason Trial ended in a conviction. It lasted about five years, but the accused were found not guilty.</Mistake>
      </>,
    ),
  },
  {
    title: 'Women, passes and the Pan Africanist Congress',
    content: slide(
      <>
        <Rule>On {when(R.womenMarch)} about {MARCHERS} women marched to the Union Buildings to protest against passes for African women. In {R.pacFounded} the Pan Africanist Congress (PAC) was formed under Robert Sobukwe by Africanists who broke away from the ANC because they rejected the Freedom Charter and its multiracial aims.</Rule>
        <FactCards
          cards={[
            { title: `${R.womenMarch.day} Aug`, line1: `about ${MARCHERS} women`, line2: 'march to Pretoria' },
            { title: 'Protest', line1: 'passes for', line2: 'African women' },
            { title: `${R.pacFounded}`, line1: 'the PAC breaks', line2: 'away from the ANC' },
            { title: 'Leader', line1: 'Robert Sobukwe', line2: 'of the PAC' },
          ]}
          aria={`Women and the PAC. On ${when(R.womenMarch)} about ${R.womenMarchers} women marched to the Union Buildings against passes for women. In ${R.pacFounded} the Pan Africanist Congress broke away from the ANC under Robert Sobukwe.`}
        />
        <Worked
          title="Explain the split"
          steps={[
            'The ANC and its allies worked with people of all races, as the Freedom Charter said.',
            'The Africanists wanted African leadership and rejected the Charter, so they formed the PAC.',
            'Both groups wanted an end to the pass laws, and their rivalry shaped the events of 1960.',
          ]}
        />
        <Mistake>Saying that the PAC and the ANC were the same organisation. They shared aims against the pass laws but had different views on race and leadership.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which ANC plan of 1949 pushed for mass action?</>,
          <>What happened to the leaders who stood trial for treason from 1956?</>,
          <>Where was the Freedom Charter adopted?</>,
          <>Who led the new group that broke away from the ANC in 1959?</>,
        ]}
        answers={[
          <>The Programme of Action.</>,
          <>They were found not guilty by {R.treasonAcquittal}.</>,
          <>At Kliptown, near Johannesburg.</>,
          <>Robert Sobukwe, who led the PAC.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which ANC programme of 1949 called for strikes, boycotts and civil disobedience?",
    options: ["The Freedom Charter of 1955 at Kliptown", "The Atlantic Charter of the wartime Allies", "The Programme of Action", "The Pass Book Act of the government"],
    answer: "The Programme of Action",
    explanation: "The Programme of Action of 1949 pushed by the Youth League moved the ANC towards mass action.",
  },
  {
    prompt: "Which group of young leaders pushed the ANC towards mass action in the 1940s?",
    options: ["The ANC Youth League", "The Black Sash women's group", "The Broederbond secret society", "The Natal Indian Congress elders"],
    answer: "The ANC Youth League",
    explanation: "Young men such as Mandela, Sisulu and Tambo formed the Youth League in 1944 to make the ANC more active.",
  },
  {
    prompt: "In which year did the Defiance Campaign begin?",
    options: ["1948", "1960", "1956", "1952"],
    answer: "1952",
    explanation: "The Defiance Campaign began on 26 June 1952, when trained volunteers set out to break unjust laws.",
  },
  {
    prompt: "What did the volunteers in the Defiance Campaign do?",
    options: ["They attacked police stations at night", "They broke unjust laws peacefully", "They left the country in large groups", "They joined the army to fight abroad"],
    answer: "They broke unjust laws peacefully",
    explanation: "Volunteers entered places reserved for whites and ignored curfews, and were arrested on purpose to show the laws were unjust.",
  },
  {
    prompt: "Which two organisations led the Defiance Campaign together?",
    options: ["The ANC and the Pan Africanist Congress of Sobukwe", "The PAC and the Black Sash movement", "The SACP and the Broederbond society", "The ANC and the South African Indian Congress"],
    answer: "The ANC and the South African Indian Congress",
    explanation: "The ANC and the South African Indian Congress worked together in 1952; the PAC did not yet exist.",
  },
  {
    prompt: "Where was the Freedom Charter adopted in 1955?",
    options: ["At the Union Buildings in Pretoria", "At Kliptown near Johannesburg", "At Sharpeville township on the Vaal", "At the Rivonia farm outside the city"],
    answer: "At Kliptown near Johannesburg",
    explanation: "The Congress of the People met at Kliptown on 25 and 26 June 1955 and adopted the Freedom Charter.",
  },
  {
    prompt: "Which sentence opens the Freedom Charter of 1955?",
    options: ["South Africa belongs to all who live in it", "South Africa belongs to the Afrikaner volk and the Crown", "The people shall be governed by their chiefs", "The land shall pass to the mine owners"],
    answer: "South Africa belongs to all who live in it",
    explanation: "The Charter begins by saying that South Africa belongs to all who live in it, black and white.",
  },
  {
    prompt: "Why was the Treason Trial that began in 1956 important?",
    options: ["Mandela and Sisulu were sentenced to life in prison", "The ANC was banned on the first day", "156 leaders were charged and all were cleared", "The Freedom Charter was declared legal"],
    answer: "156 leaders were charged and all were cleared",
    explanation: "The trial tied up the Congress leaders for years, yet in 1961 the court found them not guilty.",
  },
  {
    prompt: "On what date in 1956 did about 20 000 women march to the Union Buildings?",
    options: ["16 June 1976", "9 August 1956", "21 March 1960", "12 December 1956"],
    answer: "9 August 1956",
    explanation: "The women's march of 9 August 1956 is remembered every year as National Women's Day.",
  },
  {
    prompt: "What did the women who marched in 1956 protest against?",
    options: ["Taxes on the sale of imported wine", "Rules about school uniforms", "The price of bread and milk", "Passes for African women"],
    answer: "Passes for African women",
    explanation: "The government planned to make African women carry passes, and the women delivered petitions to the Prime Minister's office.",
  },
  {
    prompt: "Who led the Pan Africanist Congress when it was formed in 1959?",
    options: ["Albert Luthuli", "Oliver Tambo", "Robert Sobukwe", "Walter Sisulu"],
    answer: "Robert Sobukwe",
    explanation: "Robert Sobukwe became the first president of the PAC, which broke away from the ANC in April 1959.",
  },
  {
    prompt: "Why did some Africanists break away from the ANC in 1959?",
    options: ["They rejected the Freedom Charter's multiracial aims", "They wanted an armed war against the state from the start", "They opposed the Programme of Action of 1949", "They wanted to work closely with the Liberal Party"],
    answer: "They rejected the Freedom Charter's multiracial aims",
    explanation: "The Africanists wanted African leadership and disliked the Freedom Charter's multiracial approach.",
  },
  {
    prompt: "Which law of 1950 banned the Communist Party and let the state ban its critics?",
    options: ["The Population Registration Act of 1950", "The Suppression of Communism Act", "The Public Safety Act of 1953", "The Native Laws Amendment Act"],
    answer: "The Suppression of Communism Act",
    explanation: "The Act defined communism very widely, so the minister could ban many opponents of apartheid.",
  },
  {
    prompt: "Why is the Freedom Charter useful evidence of what the Congress Alliance wanted?",
    options: ["It was written by the National Party government of 1955", "It lists the rulings of the Treason Trial judges", "It records the casualties of a later massacre", "It states the aims of the Congress Alliance directly"],
    answer: "It states the aims of the Congress Alliance directly",
    explanation: "It is a primary source written by the Alliance, though a historian must remember that it shows one side.",
  },
];

const ResistanceToApartheid19481960 = () => (
  <CapsSubjectTopic
    title="Resistance to Apartheid 1948 to 1960"
    subtitle="The Programme of Action, the Defiance Campaign, the Freedom Charter, the women’s march and the PAC"
    learnSteps={learnSteps}
    task="gr11-resistance-to-apartheid-1948-1960-t4"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default ResistanceToApartheid19481960;
