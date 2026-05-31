import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'A global war with local South African links',
    image: {
      src: '/curriculum/grade8/his/term4/world-war-i/diagram.webp',
      alt: 'Grade 8 learners studying trench warfare, wartime propaganda, and South African participation in World War I',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          World War I was shaped by nationalism, alliance systems, and industrial warfare. Learners investigate trench
          life, propaganda, women&apos;s contributions, and South African stories including Delville Wood and the SS
          Mendi, then connect the war to the Treaty of Versailles.
        </p>
      </div>
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
    options: [
      'Strong loyalty to a nation that can increase rivalry with others',
      'A world government with no borders',
      'A farming method used in trenches',
      'A policy of ending all newspapers',
    ],
    answer: 'Strong loyalty to a nation that can increase rivalry with others',
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
    options: [
      'Soldiers fought from long defensive ditches with harsh living conditions',
      'Most battles happened only at sea',
      'Armies fought mainly with bows and spears',
      'Troops avoided defensive positions',
    ],
    answer: 'Soldiers fought from long defensive ditches with harsh living conditions',
    explanation: 'Trenches were defensive systems marked by mud, danger, and long stalemates.',
  },
  {
    prompt: 'What was a main purpose of wartime propaganda?',
    options: [
      'To influence public opinion and support for the war effort',
      'To record weather patterns for farming',
      'To publish neutral exam timetables',
      'To map tectonic plate movement',
    ],
    answer: 'To influence public opinion and support for the war effort',
    explanation: 'Governments used propaganda posters and media to shape attitudes and behaviour.',
  },
  {
    prompt: 'Which statement about women in World War I is most accurate?',
    options: [
      'Many women took on factory, transport, and nursing roles',
      'Women were banned from all wartime work',
      'Women only worked as military generals',
      'Women replaced all soldiers in trenches',
    ],
    answer: 'Many women took on factory, transport, and nursing roles',
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
