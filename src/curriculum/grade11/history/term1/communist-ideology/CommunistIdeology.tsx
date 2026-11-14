import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/his/term1/communist-ideology/diagram.webp", alt: "Communist Ideology" },
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1848", "title": "Communist Manifesto published", "description": "Karl Marx and Friedrich Engels published the Communist Manifesto. It argued that history is driven by class struggle between exploiters and workers."},
            {"date": "1867", "title": "Das Kapital appears", "description": "Marx published the first volume of Das Kapital. It developed his critique of capitalism, including exploitation and surplus value."},
            {"date": "1902", "title": "Lenin argues vanguard party", "description": "In What Is to Be Done?, Lenin argued that a disciplined revolutionary party must lead workers. This became a key feature of Leninism."},
            {"date": "Apr 1917", "title": "April Theses redefine revolution", "description": "Lenin adapted Marxism to Russian conditions by demanding immediate socialist revolution. He called for Soviet power, land redistribution, and an end to the war."},
            {"date": "1918–1921", "title": "One-party rule hardens", "description": "After the Bolshevik takeover, opposition parties were increasingly repressed and Communist Party control expanded. The idea of the 'dictatorship of the proletariat' became one-party dictatorship in practice."},
            {"date": "1930s", "title": "Stalin cult intensifies", "description": "Under Stalin, propaganda saturated Soviet society through posters, film, schools, and socialist realism. Stalin was portrayed as an infallible father figure, and criticism was harshly punished."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Marxism — the foundation of communist thought',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Karl Marx</strong> and <strong>Friedrich Engels</strong> argued in the <em>Communist Manifesto</em> (1848) that all history is a history of class struggle. In capitalist societies, the <strong>bourgeoisie</strong> (ruling class) exploit the <strong>proletariat</strong> (working class) by taking the profits of their labour.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Key Marxist concepts:</strong>
            <ul className="list-disc list-inside text-slate-600 space-y-1 mt-1">
              <li><strong>Means of production:</strong> factories, land, tools</li>
              <li><strong>Class struggle:</strong> workers vs owners</li>
              <li><strong>Surplus value:</strong> profit extracted from workers&apos; labour</li>
            </ul>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Marx&apos;s prediction:</strong>
            <p className="text-slate-600">Workers would eventually overthrow capitalism in a revolution and create a classless, stateless communist society.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Leninism — adapting Marxism for Russia',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Lenin</strong> adapted Marxism for conditions in Russia. He argued that a revolution needed a disciplined <strong>vanguard party</strong> — a small, professional group of revolutionaries — to lead the proletariat to power.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-left max-w-lg">
          <p className="font-bold text-indigo-700">Leninist additions to Marxism:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li><strong>Vanguard party:</strong> the Bolsheviks as professional revolutionaries</li>
            <li><strong>Dictatorship of the proletariat:</strong> temporary party rule to crush opposition</li>
            <li><strong>Imperialism:</strong> Lenin argued capitalism exported itself through colonial empire</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'The communist state — ownership, planning, and control',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In the USSR, communist ideology shaped the entire economy and society:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">State ownership</strong>
            <p className="text-slate-600">All factories, farms, and resources belonged to the state — no private property in production.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Central planning</strong>
            <p className="text-slate-600">The government, not the market, decided what to produce, in what quantities, and at what prices.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">One-party rule</strong>
            <p className="text-slate-600">Only the Communist Party was allowed to exist; dissent was crushed as "counter-revolutionary".</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Propaganda and the cult of personality',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Communist regimes used <strong>propaganda</strong> extensively — art, posters, film, education, and the media all promoted the ideology and the leader. Under Stalin, this became a <strong>cult of personality</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Forms of propaganda:</strong>
            <p className="text-slate-600">Socialist realist art depicted heroic workers; the party controlled all newspapers, films, and schools.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Cult of personality:</strong>
            <p className="text-slate-600">Stalin was portrayed as an all-knowing father figure. His image was everywhere; criticism was punished by arrest or death.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500 mt-2">When analysing historical sources, identifying whether a source promotes communist ideology is a key CAPS skill.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In Marxist theory, who are the bourgeoisie?',
    options: [
      'The capitalist class who own the means of production',
      'The working class who sell their labour',
      'The tsarist aristocracy only',
      'All people who live in cities',
    ],
    answer: 'The capitalist class who own the means of production',
    explanation: 'Marx defined the bourgeoisie as those who own factories, land, and resources, and profit from workers\' labour.',
  },
  {
    prompt: 'What did Marx mean by the "means of production"?',
    options: ['The factories, land, machinery and resources used to make goods', 'The workers who make the goods in the factories', 'The economic plans that the government draws up', 'The money that is held in the banks of a country'],
    answer: 'The factories, land, machinery and resources used to make goods',
    explanation: 'Control over the means of production determines which class holds power in Marxist analysis.',
  },
  {
    prompt: 'What is the "vanguard party" in Leninist theory?',
    options: ['A small, disciplined group of revolutionaries leading workers', 'The most popular political party in a democracy', 'A military unit that was set up to defend the revolution', 'A committee that is elected by the factory workers'],
    answer: 'A small, disciplined group of revolutionaries leading workers',
    explanation: 'Lenin argued that workers could not develop revolutionary consciousness alone; they needed a vanguard party to guide them.',
  },
  {
    prompt: 'What is "dictatorship of the proletariat" in communist theory?',
    options: ['Temporary Party rule to crush capitalist opposition after the revolution', 'Rule by one working-class dictator for ever', 'A kind of liberal democracy with worker representatives', 'An elected council of factory workers that runs the state'],
    answer: 'Temporary Party rule to crush capitalist opposition after the revolution',
    explanation: 'Lenin argued this phase was necessary before achieving a stateless communist society — though in the USSR it became permanent one-party rule.',
  },
  {
    prompt: 'How did the Soviet economy differ from a capitalist economy?',
    options: ['The state owned all production and planned output centrally', 'Private firms competed freely in an open market', 'Workers set their own wages one by one', 'The government had no part in economic decisions'],
    answer: 'The state owned all production and planned output centrally',
    explanation: 'In a communist planned economy, the state replaces the market — determining production, prices, and distribution.',
  },
  {
    prompt: 'What is a "cult of personality"?',
    options: ['A leader shown as an almost god-like figure through propaganda', 'An artistic movement in communist countries', 'A religious practice of the Russian Orthodox Church', 'A system where many parties compete in elections'],
    answer: 'A leader shown as an almost god-like figure through propaganda',
    explanation: 'Stalin\'s cult of personality used art, film, statues, and education to present him as an all-knowing, all-powerful protector.',
  },
  {
    prompt: 'Which book set out the basic ideas of Marxism in 1848?',
    options: ['The Communist Manifesto by Marx and Engels', 'Das Kapital by Marx on his own', 'The April Theses that Lenin wrote in 1917', 'What Is To Be Done? that Lenin wrote in 1902'],
    answer: 'The Communist Manifesto by Marx and Engels',
    explanation: 'Published in 1848, The Communist Manifesto called on workers to unite and overthrow capitalism.',
  },
  {
    prompt: 'What is "socialist realism" as used in the USSR?',
    options: ['A state-directed art form showing heroic workers to promote communism', 'A style of painting that showed realistic landscapes', 'An economic theory about the wages of workers', 'A literary movement that criticised Soviet policies'],
    answer: 'A state-directed art form showing heroic workers to promote communism',
    explanation: 'Socialist realist art served as propaganda — artists were required to glorify the Soviet state and communist ideals.',
  },
  {
    prompt: 'A historian finds a Soviet poster showing Stalin as a heroic father protecting happy workers. This is best described as:',
    options: [
      'A primary source showing communist propaganda and the cult of personality',
      'An objective view of working conditions in the USSR',
      'Evidence that Stalin was genuinely loved by all workers',
      'A source with no ideological perspective',
    ],
    answer: 'A primary source showing communist propaganda and the cult of personality',
    explanation: 'Identifying sources as propaganda and recognising ideological perspective is a core CAPS History source analysis skill.',
  },
];

const CommunistIdeology = () => (
  <CapsSubjectTopic
    title="Communist Ideology"
    subtitle="Marxism, Leninism, the communist state, and propaganda"
    learnSteps={learnSteps}
    task="gr11-communist-ideology-t1"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default CommunistIdeology;
