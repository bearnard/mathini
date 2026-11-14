import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1870s", "title": "European rivalry intensifies", "description": "European powers increased their competition for African territory, trade, and resources. This rivalry set the stage for rapid colonisation."},
            {"date": "1884–1885", "title": "Berlin Conference held", "description": "European leaders met in Berlin to set rules for claiming African territory. Africans were excluded from decisions about their own lands."},
            {"date": "1896", "title": "Ethiopia wins at Adwa", "description": "Ethiopian forces defeated Italy at the Battle of Adwa. It became one of the most important examples of successful African resistance."},
            {"date": "1896", "title": "Prempeh I exiled", "description": "The British removed Ashanti king Prempeh I and sent him into exile. This weakened Ashanti independence but did not end resistance."},
            {"date": "1900", "title": "Yaa Asantewaa leads revolt", "description": "Yaa Asantewaa led the War of the Golden Stool against British rule in Ashanti. The conflict showed determined military and political resistance to colonisation."},
            {"date": "Early 1900s", "title": "Colonial borders harden", "description": "European powers fixed borders across Africa without respecting many local societies and political systems. These boundaries had lasting consequences for the continent."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Colonial competition and African resistance',
    image: {
      src: '/curriculum/grade8/his/term3/scramble-for-africa/diagram.webp',
      alt: 'Grade 8 learners studying a map of Africa, the Berlin Conference, and examples of resistance',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In the late nineteenth century, European powers competed to control African land and resources. The Berlin
          Conference guided European claims, while African societies including the Ashanti resisted in different ways.
          These events had lasting political and social consequences.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does the term "Scramble for Africa" describe?',
    options: [
      'Competition among European powers to control African territories',
      'Migration of African farmers to Europe for factory jobs',
      'A trade agreement between all African kingdoms',
      'The spread of railways built by African unions',
    ],
    answer: 'Competition among European powers to control African territories',
    explanation: 'The phrase refers to rapid colonial expansion in Africa during the late 1800s.',
  },
  {
    prompt: 'What was the main purpose of the Berlin Conference (1884-1885)?',
    options: [
      'To set rules for European claims in Africa',
      'To grant full independence to African states',
      'To end all trade between Europe and Africa',
      'To establish the Union of South Africa',
    ],
    answer: 'To set rules for European claims in Africa',
    explanation: 'European states used the conference to organise and justify territorial claims.',
  },
  {
    prompt: 'In this context, colonisation means:',
    options: ['A foreign power taking political and economic control of a region', 'Local communities choosing their own leaders', 'Farmers moving to the cities to look for work', 'Countries trading goods with one another at fair prices'],
    answer: 'A foreign power taking political and economic control of a region',
    explanation: 'Colonisation involves external control over land, people, and resources.',
  },
  {
    prompt: 'The Ashanti kingdom, often studied in this topic, was located in which part of Africa?',
    options: ['West Africa', 'North Africa', 'Southern Africa', 'East Africa'],
    answer: 'West Africa',
    explanation: 'The Ashanti kingdom was in West Africa, in present-day Ghana.',
  },
  {
    prompt: 'What is British imperialism in the context of this topic?',
    options: ['Britain widening its political and economic influence over lands', 'Britain ending all of its trade overseas', 'Britain giving equal voting rights across Africa', 'Britain refusing to build any ports'],
    answer: 'Britain widening its political and economic influence over lands',
    explanation: 'Imperialism refers to expanding control and influence beyond a country’s borders.',
  },
  {
    prompt: 'Which is an example of African resistance to colonisation?',
    options: [
      'Military defence and political negotiation by African leaders',
      'Accepting every colonial demand without response',
      'Ending all local leadership structures immediately',
      'Moving all capitals to Europe',
    ],
    answer: 'Military defence and political negotiation by African leaders',
    explanation: 'Resistance took different forms, including armed defence and diplomacy.',
  },
  {
    prompt: 'One long-term consequence of the Scramble for Africa was that:',
    options: ['Many borders were drawn with no regard for local communities', 'All of the African territories became one country', 'The European powers stopped competing around the world', 'Traditional economies disappeared overnight'],
    answer: 'Many borders were drawn with no regard for local communities',
    explanation: 'Colonial borders often ignored existing languages, cultures, and political systems.',
  },
  {
    prompt: 'When analysing a source about empire, which question best checks for bias?',
    options: ['Who made the source and what view are they promoting?', 'What colour is the paper that was used to print it?', 'How many pages long is the source, in pages only?', 'Was the source put in a museum recently?'],
    answer: 'Who made the source and what view are they promoting?',
    explanation: 'Identifying creator and perspective helps learners assess bias and reliability.',
  },
  {
    prompt: 'Which event happened first?',
    options: [
      'The Berlin Conference took place before most formal colonial boundaries were finalised',
      'Most formal colonial boundaries were finalised before the Berlin Conference',
      'Both happened in exactly the same month',
      'Neither event is related to this topic',
    ],
    answer: 'The Berlin Conference took place before most formal colonial boundaries were finalised',
    explanation: 'The Berlin Conference came early and shaped later colonial partition processes.',
  },
];

const ScrambleForAfrica = () => (
  <CapsSubjectTopic
    title="The Scramble for Africa"
    subtitle="Berlin Conference, colonisation, resistance, and historical consequences"
    learnSteps={learnSteps}
    task="gr8-scramble-for-africa-t3"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default ScrambleForAfrica;
