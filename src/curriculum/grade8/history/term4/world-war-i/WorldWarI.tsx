import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { Compare, Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { TimelineStrip, TrenchSection } from '../../../../../components/diagrams/history/HistoryPictures';
import { WW1_EVENTS } from '../../../../../components/diagrams/history/historyHelpers';
import { WW1_CAUSE_STEPS } from '../../../../../components/diagrams/history/steps';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'World War I: a timeline',
    content: slide(
      <>
        <Rule>
          World War I took place mainly between 1914 and 1918. The Treaty of Versailles followed in 1919.
        </Rule>
        <TimelineStrip events={WW1_EVENTS} id="ww1" title="World War I, 1914 to 1919" />
        <Worked
          title="Place the events"
          steps={[<>28 June 1914: Archduke Franz Ferdinand is assassinated in Sarajevo, and the war follows within weeks.</>, <>11 November 1918: Germany agrees to an armistice and the fighting stops on the Western Front.</>, <>1919: the Treaty of Versailles. The war lasted from 1914 to 1918.</>]}
        />
        <Mistake>Saying the war ended with the Treaty of Versailles. Fighting stopped with the armistice in 1918. The treaty followed in 1919.</Mistake>
      </>,
    ),
  },
  {
    title: 'Nationalism and alliances',
    content: slide(
      <>
        <Rule>
          Nationalism is strong loyalty to a nation, which can unite people but also raise rivalry. Alliances drew more countries into the war after the initial conflicts.
        </Rule>
        <NumberedSteps steps={WW1_CAUSE_STEPS} tone="amber" label="How a crisis became a world war" />
        <Worked
          title="Explain the spread of the war"
          steps={[<>A regional conflict started when Austria-Hungary declared war on Serbia.</>, <>Alliance commitments meant that other countries had promised to support their allies.</>, <>So a regional conflict became a broader war.</>]}
        />
        <Mistake>Thinking nationalism only unites people. It can unite people inside a country but also intensify tensions between countries.</Mistake>
      </>,
    ),
  },
  {
    title: 'Trench warfare',
    content: slide(
      <>
        <Rule>
          On the Western Front, soldiers fought from long ditches called trenches, in harsh conditions. Trenches were defensive systems marked by mud, danger and long stalemates.
        </Rule>
        <TrenchSection />
        <Worked
          title="Why was movement so slow?"
          steps={[<>Both armies dug long trench systems defended by machine guns and artillery.</>, <>The land between the trenches, no man&apos;s land, was dangerous to cross.</>, <>So neither side could easily advance: a stalemate. Soldiers also endured mud, disease and fear.</>]}
        />
        <Mistake>Picturing trenches as short shelters. They were long defensive systems, stretching along the Western Front.</Mistake>
      </>,
    ),
  },
  {
    title: 'Propaganda and women',
    content: slide(
      <>
        <Rule>
          A main purpose of wartime propaganda was to sway public opinion and support for the war effort. Many women took up factory, transport and nursing work.
        </Rule>
        <Compare
          left={{ title: 'Propaganda', tone: 'amber', rows: ['governments used posters and media', 'aim: to sway public opinion and support for the war effort', 'shaped attitudes and behaviour'] }}
          right={{ title: 'Women at work', tone: 'emerald', rows: ['factory work', 'transport work', 'nursing and other support services'] }}
        />
        <Worked
          title="Read a propaganda poster"
          steps={[<>Ask who made it: a government wanting support for the war.</>, <>Ask what it wants you to do or feel.</>, <>Remember it is not a neutral record: its purpose is to influence the public.</>]}
        />
        <Mistake>Believing women played no part in the war. Women contributed widely to industry, healthcare and support services.</Mistake>
      </>,
    ),
  },
  {
    title: 'South Africa and the end of the war',
    content: slide(
      <>
        <Rule>
          South Africans took part in the war. Delville Wood and the SS Mendi are key parts of South African war history. The Treaty of Versailles (1919) gave Germany harsh terms and territorial losses.
        </Rule>
        <Terms
          rows={[
            ['Delville Wood, July 1916', 'South African troops fought in a major and costly battle during the Somme offensive in France. It is a key memory site.'],
            ['SS Mendi, 21 February 1917', 'the ship sank in the English Channel carrying members of the South African Native Labour Corps. More than 600 Black South Africans died.'],
            ['Treaty of Versailles, 1919', 'Germany faced harsh terms, territorial losses and reparations. Many historians see it as a source of later tension.'],
          ]}
        />
        <Worked
          title="Link South Africa to the war"
          steps={[<>Delville Wood was fought in France in 1916, so South Africans fought far from home.</>, <>The SS Mendi sank in 1917 while carrying Black South African troops.</>, <>After the war, the treaty shaped later tensions in Europe.</>]}
        />
        <Mistake>Thinking the war was only a European story. South African troops and labourers took part, and their sacrifice is remembered.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>In which years was World War I fought? What does nationalism mean in this topic?</>,
          <>Why did a fight between two countries pull in many others? How would you describe life in the trenches of the Western Front?</>,
          <>Why did governments print recruiting posters and slogans during the war? What work did many women do while the men were away?</>,
          <>Why is Delville Wood important? Why is the SS Mendi remembered? What did the 1919 Treaty of Versailles do to Germany?</>,
        ]}
        answers={[
          <>1914 to 1918. Strong loyalty to a nation that can raise rivalry.</>,
          <>They drew more countries into war after initial conflicts. Soldiers fought from long ditches in harsh conditions.</>,
          <>To sway public opinion and support for the war effort. Many women took up factory, transport and nursing work.</>,
          <>South African troops fought there in a major and costly battle. It sank in 1917 while carrying many Black South African troops. Germany faced harsh terms and territorial losses after the war.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'World War I took place mainly between which years?',
    options: ['1914 to 1918', '1901 to 1905', '1929 to 1933', '1939 to 1945'],
    answer: '1914 to 1918',
    explanation: 'The war started in 1914 and fighting ended in 1918.',
  },
  {
    prompt: 'In this topic, nationalism refers to:',
    options: ['Strong loyalty to a nation that can raise rivalry', 'A world government that has no borders at all', 'A farming method that was used in the trenches', 'A policy of ending the printing of newspapers'],
    answer: 'Strong loyalty to a nation that can raise rivalry',
    explanation: 'Nationalism can unite people internally but also intensify international tensions.',
  },
  {
    prompt: 'How did alliances affect the spread of World War I?',
    options: [
      'They drew more countries into war after initial conflicts',
      'They kept every conflict strictly local',
      'They ended warfare in the first week',
      'They prevented military planning completely',
    ],
    answer: 'They drew more countries into war after initial conflicts',
    explanation: 'Alliance commitments turned regional conflict into broader war.',
  },
  {
    prompt: 'What best describes trench warfare on the Western Front?',
    options: ['Soldiers fought from long ditches in harsh conditions', 'Most of the battles took place at sea only', 'Armies fought mainly with bows and spears', 'Troops avoided all kinds of defensive positions'],
    answer: 'Soldiers fought from long ditches in harsh conditions',
    explanation: 'Trenches were defensive systems marked by mud, danger, and long stalemates.',
  },
  {
    prompt: 'What was a main purpose of wartime propaganda?',
    options: ['To sway public opinion and support for the war effort', 'To record the weather patterns for farming', 'To publish neutral timetables for exams', 'To map the movement of tectonic plates'],
    answer: 'To sway public opinion and support for the war effort',
    explanation: 'Governments used propaganda posters and media to shape attitudes and behaviour.',
  },
  {
    prompt: 'Which statement about women in World War I is most accurate?',
    options: ['Many women took up factory, transport and nursing work', 'Women were banned from all war work', 'Women served only as generals of armies', 'Women took the place of all of the soldiers in the trenches'],
    answer: 'Many women took up factory, transport and nursing work',
    explanation: 'Women contributed widely to industry, healthcare, and support services.',
  },
  {
    prompt: 'Why is Delville Wood important in South African history of World War I?',
    options: [
      'South African troops fought there in a major and costly battle',
      'It was the site of the Berlin Conference',
      'It was the first city founded after the war',
      'It was the location of the Treaty of Versailles signing',
    ],
    answer: 'South African troops fought there in a major and costly battle',
    explanation: 'Delville Wood became a key memory site for South African participation in the war.',
  },
  {
    prompt: 'The SS Mendi is remembered because:',
    options: [
      'It sank in 1917 while carrying many Black South African troops',
      'It transported the Treaty of Versailles to Africa',
      'It was the first submarine used in the war',
      'It ended trench warfare on the Western Front',
    ],
    answer: 'It sank in 1917 while carrying many Black South African troops',
    explanation: 'The SS Mendi tragedy is a significant part of South African war history.',
  },
  {
    prompt: 'What was a major result of the Treaty of Versailles (1919)?',
    options: [
      'Germany faced harsh terms and territorial losses after the war',
      'All military alliances were permanently banned worldwide',
      'The war continued unchanged until 1939',
      'Colonial empires ended immediately in 1919',
    ],
    answer: 'Germany faced harsh terms and territorial losses after the war',
    explanation: 'The treaty imposed penalties and border changes that shaped later tensions.',
  },
];

const WorldWarI = () => (
  <CapsSubjectTopic
    title="World War I"
    subtitle="Nationalism, alliances, trench warfare, and South African experiences"
    learnSteps={learnSteps}
    task="gr8-world-war-i-t4"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default WorldWarI;
