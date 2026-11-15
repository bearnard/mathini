import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1924", "title": "Lenin dies", "description": "Lenin's death triggered a power struggle inside the Communist Party. Stalin gradually outmanoeuvred rivals such as Trotsky, Zinoviev, and Bukharin."},
            {"date": "1928", "title": "Stalin consolidates power", "description": "By 1928 Stalin had secured dominant control of the USSR. He abandoned the New Economic Policy and pushed rapid state-led transformation."},
            {"date": "1928", "title": "First Five-Year Plan", "description": "Stalin launched the first Five-Year Plan to accelerate heavy industry. The state set strict production targets for coal, steel, and electricity."},
            {"date": "1929", "title": "Collectivisation begins", "description": "Peasants were forced onto collective farms, or kolkhozy. Kulaks were targeted as 'class enemies' and deported, imprisoned, or killed."},
            {"date": "1932–1933", "title": "Famine devastates countryside", "description": "Collectivisation and grain seizures helped cause a catastrophic famine, especially in Ukraine. Millions died in the Holodomor and other famine-stricken regions."},
            {"date": "1936–1938", "title": "Great Terror unfolds", "description": "Stalin purged party leaders, army officers, and ordinary citizens through arrests, show trials, and executions. Millions also passed through the Gulag system of forced labour camps."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Stalin\'s rise to power',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After Lenin's death in 1924, <strong>Joseph Stalin</strong> outmanoeuvred rivals including Trotsky, Zinoviev, and Bukharin in a bitter power struggle. By 1928, Stalin had consolidated absolute power.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Lenin's New Economic Policy (NEP):</strong>
            <p className="text-slate-600">A mixed economy allowing some private trade. Stalin abandoned it in 1928 to begin rapid state-led industrialisation.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Stalin's methods:</strong>
            <p className="text-slate-600">He used his position as Party General Secretary to place loyal supporters in key posts and isolate opponents.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Collectivisation — transforming the countryside',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          From 1929, Stalin forced peasants onto collective farms (<strong>kolkhozy</strong>). Wealthy peasants — the <strong>kulaks</strong> — were "liquidated as a class": arrested, deported to the Gulag, or killed.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-left max-w-lg">
          <p className="font-bold text-amber-700">Consequences of collectivisation:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li>Peasants resisted by slaughtering livestock rather than surrendering it</li>
            <li>Famine of 1932–33 killed millions — especially in Ukraine (the Holodomor)</li>
            <li>Agricultural output collapsed in the short term</li>
            <li>The peasantry was effectively destroyed as an independent class</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Industrialisation — the Five-Year Plans',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Stalin launched the <strong>Five-Year Plans</strong> (1928, 1933, 1938) to rapidly transform the USSR into an industrial power. The state set production targets for coal, steel, electricity, and heavy industry.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Achievements:</strong>
            <p className="text-slate-600">Steel production tripled; massive new industrial cities were built; the USSR became an industrial giant by the late 1930s.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">The human cost:</strong>
            <p className="text-slate-600">Workers faced brutal conditions, long hours, and severe punishment for "sabotage". Consumer goods were neglected. Living standards were poor.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The Great Terror — purges and the Gulag',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          From 1936–1938, Stalin launched the <strong>Great Terror (Purges)</strong>. Old Bolsheviks, military officers, party officials, and ordinary citizens were arrested on false charges of sabotage and treason.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Show trials:</strong>
            <p className="text-slate-600">Prominent leaders including Zinoviev and Bukharin were forced to confess in staged public trials, then executed.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">The Gulag:</strong>
            <p className="text-slate-600">A vast network of forced labour camps in Siberia. Millions were sent there; well over a million died from overwork, cold, and starvation.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500 mt-2">The purges eliminated any possible challenge to Stalin's absolute power and created a climate of fear throughout Soviet society.</p>
      </div>
    ),
  },
  {
    title: "Collectivisation and the animals",
    content: (
      <div className="space-y-4">
        <GapRule>{"When Stalin forced peasants onto collective farms, many killed their cattle and sheep rather than surrender them. Herds shrank, grain collapsed and famine followed."}</GapRule>
        <GapWorked title={"Trace the result"} steps={["Farms are merged and animals must be handed to the collective.", "Villagers slaughter and eat them first.", "Fewer animals and less grain mean hunger."]} />
        <GapMistake>{"Assuming the peasants cooperated."}</GapMistake>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What were collective farms in the USSR called?',
    options: ['Kolkhozy', 'Kulaks', 'Gulag units', 'Soviets'],
    answer: 'Kolkhozy',
    explanation: 'Kolkhozy (collective farms) were state-run farms to which peasants were forced to move their land and livestock.',
  },
  {
    prompt: 'Who were the kulaks?',
    options: ['Wealthier peasants who owned more land and livestock', 'Bolshevik managers who ran the large factories', 'Members of the secret police of the tsar', 'Officers who served in the Red Army'],
    answer: 'Wealthier peasants who owned more land and livestock',
    explanation: 'Stalin targeted kulaks as class enemies during collectivisation — they were arrested, deported, or killed.',
  },
  {
    prompt: 'What was the Holodomor?',
    options: ['A deadly famine in Ukraine caused by Soviet collectivisation', 'A Ukrainian word for a Five-Year Plan of the state', 'The name of a Gulag labour camp in Siberia', 'A battle that was fought in the Russian Civil War'],
    answer: 'A deadly famine in Ukraine caused by Soviet collectivisation',
    explanation: 'The Holodomor (1932–33) killed millions of Ukrainians as grain was seized from starving peasants to meet state quotas.',
  },
  {
    prompt: 'What was the main aim of Stalin\'s Five-Year Plans?',
    options: [
      'To rapidly industrialise the USSR through state-set production targets',
      'To improve peasant living standards through land redistribution',
      'To introduce free market capitalism',
      'To prepare for democratic elections',
    ],
    answer: 'To rapidly industrialise the USSR through state-set production targets',
    explanation: 'The Five-Year Plans transformed the USSR into a major industrial power in heavy industry, steel, and energy.',
  },
  {
    prompt: 'What were the show trials of 1936–38?',
    options: ['Staged trials where leading Bolsheviks confessed and were executed', 'Public elections to choose a new Party leader', 'Military court hearings that tried German spies', 'Fair trials that exposed real corruption in government'],
    answer: 'Staged trials where leading Bolsheviks confessed and were executed',
    explanation: 'Show trials were propaganda events used by Stalin to eliminate rivals like Zinoviev and Bukharin under false charges.',
  },
  {
    prompt: 'What was the Gulag?',
    options: [
      'A network of Soviet forced labour camps',
      'The Soviet parliament',
      'A propaganda ministry',
      'A collective farm management system',
    ],
    answer: 'A network of Soviet forced labour camps',
    explanation: 'Millions were sent to the Gulag\'s remote camps in Siberia, where many died from brutal conditions.',
  },
  {
    prompt: 'Why did peasants slaughter their livestock during collectivisation?',
    options: ['They preferred to destroy animals than hand them to collective farms', 'The state ordered all animals killed to stop disease', 'There was no food left with which to feed the animals', 'It was an old religious tradition among peasants'],
    answer: 'They preferred to destroy animals than hand them to collective farms',
    explanation: 'Peasant resistance included destroying livestock, which contributed to famine and the collapse of agricultural output.',
  },
  {
    prompt: 'How did Stalin gain power after Lenin\'s death?',
    options: ['As General Secretary he placed loyal allies in key posts and isolated rivals', 'He won a democratic election within the Communist Party', 'He staged a military coup against the Politburo', 'Lenin appointed him directly as successor in his will'],
    answer: 'As General Secretary he placed loyal allies in key posts and isolated rivals',
    explanation: 'Stalin\'s control of the party machinery allowed him to outmanoeuvre rivals like Trotsky, Zinoviev, and Bukharin by 1928.',
  },
  {
    prompt: 'Which of the following is a valid criticism of the Five-Year Plans?',
    options: ['Harsh conditions for workers and neglect of consumer goods', 'No industrial growth was achieved by the plans at all', 'The plans benefited only the class of the kulaks', 'Stalin refused to build factories outside of Moscow'],
    answer: 'Harsh conditions for workers and neglect of consumer goods',
    explanation: 'Industrial targets were met at enormous human cost, with ordinary workers bearing the burden of rapid industrialisation.',
  },
];

const StalinsUSSR = () => (
  <CapsSubjectTopic
    title="Stalin's USSR"
    subtitle="Collectivisation, the Five-Year Plans, and the Great Terror"
    learnSteps={learnSteps}
    task="gr11-stalins-ussr-t1"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default StalinsUSSR;
