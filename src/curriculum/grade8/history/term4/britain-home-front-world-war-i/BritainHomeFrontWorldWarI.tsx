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
    title: "Key events: Britain at war",
    content: slide(
      <Timeline
        events={[
          { date: "1914", title: "Volunteers join the army", description: "Posters and newspapers urge men to volunteer, and many do." },
          { date: "1916", title: "Conscription begins", description: "The Military Service Act makes men who are not exempt join the army." },
          { date: "1914 to 1918", title: "Women take on new work", description: "Women work in factories, on farms and on transport while men are away." },
          { date: "1918", title: "Some women get the vote", description: "Women over 30 who meet certain conditions may vote, and men over 21 may vote." },
        ]}
      />,
    ),
  },
  {
    title: "Conscription and propaganda",
    content: slide(
      <>
        <Rule>{"At the start of the war many British men volunteered, but as the war dragged on Britain needed more soldiers. In 1916 conscription began, which meant that men who were not exempt had to join the army. The government used propaganda, such as posters and newspaper stories, to make people support the war."}</Rule>
        <FactCards
          cards={[
            { title: "1914", line1: "many men volunteer", line2: "for the army" },
            { title: "1916", line1: "conscription begins", line2: "by law" },
            { title: "Posters", line1: "urge men to join", line2: "the army" },
            { title: "Propaganda", line1: "shapes what people", line2: "think of the war" },
          ]}
          aria={"Conscription and propaganda. In 1914 many men volunteered for the army. In 1916 conscription began by law. Posters urged men to join the army. Propaganda shaped what people thought of the war."}
        />
        <SourceBox label={"Source A"} provenance={"An original paraphrase written for this lesson, in the style of a recruiting poster."}>
          <p>{"The poster showed a stern soldier pointing at the viewer, and the words said that the country needed every man to do his duty."}</p>
        </SourceBox>
        <Worked
          title={"Read the poster"}
          steps={[
            "It uses a pointing figure and strong words to make the viewer feel guilty about not joining.",
            "It tells us what the government wanted, not what the men felt.",
            "Propaganda is useful to historians because it shows how a government tried to shape opinion.",
          ]}
        />
        <Mistake>{"Treating a poster as a true record of what happened. A poster tells us what the government wanted people to believe."}</Mistake>
      </>,
    ),
  },
  {
    title: "Conscientious objectors, music and poetry",
    content: slide(
      <>
        <Rule>{"Some men refused to fight because of their beliefs and were called conscientious objectors. Some did other work, and some were sent to prison. Songs and poems also shaped how people felt about the war. Early songs cheered the soldiers on, and later poems by soldiers such as Wilfred Owen and Siegfried Sassoon showed the suffering."}</Rule>
        <FactCards
          cards={[
            { title: "Objectors", line1: "refuse to fight", line2: "because of belief" },
            { title: "Tribunals", line1: "decide who may", line2: "be excused" },
            { title: "Songs", line1: "cheer soldiers and", line2: "families at home" },
            { title: "Poems", line1: "Owen and Sassoon show", line2: "the suffering" },
          ]}
          aria={"Objectors, music and poetry. Conscientious objectors refused to fight because of their beliefs. Tribunals decided who might be excused. Songs cheered soldiers and families at home. Poems by Owen and Sassoon showed the suffering."}
        />
        <SourceBox label={"Source B"} provenance={"An original paraphrase written for this lesson, in the style of a soldier-poet."}>
          <p>{"The poet said that the old claim that it is sweet and right to die for one's country was a lie, after what he had seen in the trenches."}</p>
        </SourceBox>
        <Worked
          title={"Compare early songs and later poems"}
          steps={[
            "Early songs cheered the soldiers on and kept up spirits at home.",
            "Later poems told a harsher story of fear and loss.",
            "Both are sources: one shows the mood of 1914, the other the experience of the front by 1917.",
          ]}
        />
        <Mistake>{"Saying that everyone agreed with the war. Many supported it, but conscientious objectors and some poets did not."}</Mistake>
      </>,
    ),
  },
  {
    title: "Women and the vote",
    content: slide(
      <>
        <Rule>{"With men away, women worked in factories, on farms and on transport, and made shells and uniforms. Before the war Emmeline Pankhurst (called Emily in the CAPS) had led the suffragettes in the campaign for the vote. During the war the campaign stopped, and in 1918 some women over 30 won the vote."}</Rule>
        <FactCards
          cards={[
            { title: "Factories", line1: "women make shells", line2: "and uniforms" },
            { title: "Farms", line1: "women work the land", line2: "and in transport" },
            { title: "Pankhurst", line1: "led the suffragettes", line2: "before the war" },
            { title: "1918", line1: "some women over 30", line2: "win the vote" },
          ]}
          aria={"Women and the vote. Women made shells and uniforms in factories. Women worked on farms and on transport. Emmeline Pankhurst led the suffragettes before the war. In 1918 some women over 30 won the vote."}
        />
        <Worked
          title={"Explain the change"}
          steps={[
            "Women proved that they could do work that men had done, and the war made that visible.",
            "The suffragette campaign stopped for the war, and women's work was one reason for the change in 1918.",
            "Not all women could vote in 1918: the age and property conditions left many out.",
          ]}
        />
        <Mistake>{"Saying that all women won the vote in 1918. Women had to be over 30 and meet other conditions, and equal voting came later."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "What is conscription?",
          "What is a conscientious objector?",
          "Name one way in which women helped Britain during the war.",
          "Which two poets showed the suffering of the war?",
        ]}
        answers={[
          "A law that makes men who are not exempt join the army.",
          "A person who refuses to fight because of his or her beliefs.",
          "They made shells and uniforms, or worked on farms and transport.",
          "Wilfred Owen and Siegfried Sassoon.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is conscription?",
    options: ["A request for men to volunteer", "A tax paid by soldiers", "A law that forces men to join", "A reward for brave soldiers"],
    answer: "A law that forces men to join",
    explanation: "Conscription is compulsory military service.",
  },
  {
    prompt: "In which year did conscription begin in Britain?",
    options: ["1916", "1914", "1918", "1912"],
    answer: "1916",
    explanation: "The Military Service Act began conscription in 1916.",
  },
  {
    prompt: "What did poster propaganda aim to do?",
    options: ["Tell people the whole truth", "End the war quickly", "Raise money for farms", "Make people support the war"],
    answer: "Make people support the war",
    explanation: "Propaganda shapes opinion.",
  },
  {
    prompt: "What is a conscientious objector?",
    options: ["A soldier who wins medals in war", "Someone who refuses to fight", "A government official in London", "A newspaper writer in the capital"],
    answer: "Someone who refuses to fight",
    explanation: "Objectors refused to fight because of their beliefs.",
  },
  {
    prompt: "What could happen to a conscientious objector?",
    options: ["Each was made a general in the army by the king", "Each was sent home with pay", "Some did other work, some went to prison", "Each was given land"],
    answer: "Some did other work, some went to prison",
    explanation: "Objectors faced tribunals, other work or prison.",
  },
  {
    prompt: "Which poet wrote about the suffering of soldiers in the trenches?",
    options: ["Wilfred Owen", "William Shakespeare", "Charles Dickens", "Rudyard Kipling"],
    answer: "Wilfred Owen",
    explanation: "Wilfred Owen wrote about the suffering of the front.",
  },
  {
    prompt: "What did early wartime songs do?",
    options: ["Told the truth about the trenches", "Opposed all fighting", "Praised the Germans", "Cheered the soldiers on"],
    answer: "Cheered the soldiers on",
    explanation: "Early songs kept up spirits.",
  },
  {
    prompt: "How is a soldier's poem useful to a historian?",
    options: ["It proves how everyone felt", "It shows one person's view", "It gives exact casualty numbers", "It gives the date of every battle in the war"],
    answer: "It shows one person's view",
    explanation: "A poem is a personal source and shows one view.",
  },
  {
    prompt: "What work did women do during the war?",
    options: ["They led the armies in the field", "They wrote the laws of the war", "They worked in factories and on farms", "They stayed at home and did no paid work"],
    answer: "They worked in factories and on farms",
    explanation: "Women replaced men in many jobs.",
  },
  {
    prompt: "Who led the suffragettes before the war?",
    options: ["Emmeline Pankhurst", "Florence Nightingale", "Queen Victoria", "Edith Cavell"],
    answer: "Emmeline Pankhurst",
    explanation: "Pankhurst led the campaign for women's votes.",
  },
  {
    prompt: "What did the suffragettes want?",
    options: ["Free schools for the poor", "A longer war", "Lower taxes", "The vote for women"],
    answer: "The vote for women",
    explanation: "They campaigned for the vote.",
  },
  {
    prompt: "What happened to the suffragette campaign during the war?",
    options: ["It grew into a larger march", "It stopped for the war", "It won every demand in 1914", "It moved to Germany"],
    answer: "It stopped for the war",
    explanation: "The campaign was paused while women supported the war.",
  },
  {
    prompt: "In 1918 which women won the vote in Britain?",
    options: ["Women of any age in Britain", "Women who joined the army", "Some women over 30", "No women had the vote yet at that time"],
    answer: "Some women over 30",
    explanation: "Only some women over 30 won the vote in 1918.",
  },
  {
    prompt: "Why did the war help to change the position of women?",
    options: ["Women showed they could do men's work", "Men stopped working in the big factories", "Women had asked to fight in the army", "The government ended work for men"],
    answer: "Women showed they could do men's work",
    explanation: "Women's work was one reason for the change in 1918.",
  },
];

const BritainHomeFrontWorldWarI = () => (
  <CapsSubjectTopic
    title={"Britain at Home in World War I"}
    subtitle={"Conscription, propaganda, conscientious objectors, music and poetry, and women"}
    learnSteps={learnSteps}
    task={"gr8-britain-home-front-world-war-i-t4"}
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default BritainHomeFrontWorldWarI;
