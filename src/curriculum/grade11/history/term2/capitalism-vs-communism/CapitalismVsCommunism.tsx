import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1917", "title": "Bolsheviks reject capitalism", "description": "The Russian Revolution created a state committed to abolishing private ownership of major production. It presented communism as an alternative to capitalist inequality."},
            {"date": "1920s", "title": "US capitalism booms", "description": "In the United States, private ownership, free markets, and profit-making drove rapid industrial growth. Mass consumerism and stock market investment became hallmarks of capitalist prosperity."},
            {"date": "1928", "title": "USSR adopts central planning", "description": "Stalin's first Five-Year Plan replaced market forces with state targets. Soviet leaders claimed planning would build equality and avoid capitalist crises."},
            {"date": "1929", "title": "Great Depression begins", "description": "The Wall Street Crash exposed severe weaknesses in capitalism, including speculation and inequality. Communist propaganda used the Depression as proof that capitalism was unstable."},
            {"date": "1933", "title": "New Deal middle path", "description": "Roosevelt responded to the Depression with relief, recovery, and reform. The New Deal kept private property but expanded state intervention and welfare."},
            {"date": "1930s", "title": "Ideological battle intensifies", "description": "Capitalism and communism were increasingly compared as rival systems. Historians and propagandists alike debated private ownership, state planning, freedom, and equality."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Core features of capitalism',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Capitalism</strong> is an economic system based on private ownership, free markets, and the profit motive. In the 1920s USA, capitalism produced great wealth — but also the inequalities that led to the Great Depression.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Private ownership</strong>
            <p className="text-slate-600">Individuals and companies own the means of production — factories, land, businesses.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Free market</strong>
            <p className="text-slate-600">Prices are set by supply and demand, not by the government. Competition between producers is encouraged.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Profit motive</strong>
            <p className="text-slate-600">The drive to make profit drives innovation, investment, and economic growth — but also inequality.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Core features of communism',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Communism</strong> (as practised in the USSR) replaced private ownership with state ownership and the market with central planning. It aimed for an equal, classless society — but in practice created a one-party dictatorship.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">State ownership</strong>
            <p className="text-slate-600">All factories, land, and resources belong to the state and in theory to all citizens collectively.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Central planning</strong>
            <p className="text-slate-600">The government decides what to produce, how much, and at what prices — no free market.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Classless society</strong>
            <p className="text-slate-600">In theory, there are no exploiting and exploited classes — all citizens share equally. In practice, the Communist Party formed a new elite.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The 1930s debate — how much should the state intervene?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Great Depression forced a major debate within capitalism: should the state intervene to manage the economy? The New Deal represented a <strong>middle path</strong> between laissez-faire capitalism and communism.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Laissez-faire capitalism (Hoover):</strong>
            <p className="text-slate-600">Minimal government intervention; let the market correct itself. Workers must be self-reliant.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Keynesian/New Deal capitalism (FDR):</strong>
            <p className="text-slate-600">Government should spend during recessions to stimulate demand and provide welfare — but keep private ownership.</p>
          </div>
        </div>
        <p className="text-slate-600 mt-2">Meanwhile, Stalin's USSR used the Depression to argue that <em>only</em> communism could prevent economic crisis.</p>
      </div>
    ),
  },
  {
    title: 'Analysing sources for ideological perspective',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In CAPS History, you must be able to <strong>identify the ideological perspective</strong> in a source — is it written from a capitalist, communist, or neutral viewpoint?
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left max-w-lg mx-auto">
          <p className="font-bold text-slate-700 mb-2">Questions to ask about any source:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>Who wrote it? What was their background?</li>
            <li>When and why was it written?</li>
            <li>Does it praise or criticise state intervention?</li>
            <li>Does it defend private property or collective ownership?</li>
            <li>What language gives away the author&apos;s ideology?</li>
          </ul>
        </div>
        <p className="text-sm text-slate-500 mt-2">Example: A Soviet propaganda poster claiming the New Deal proves capitalism is failing presents a communist ideological perspective — not an objective fact.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the "profit motive" in capitalism?',
    options: [
      'The drive to earn profit, which encourages investment and innovation',
      'A government policy rewarding businesses that employ the most workers',
      'A communist idea about sharing profits equally',
      'The desire of workers to earn more wages',
    ],
    answer: 'The drive to earn profit, which encourages investment and innovation',
    explanation: 'The profit motive is central to capitalism — it drives businesses to compete, innovate, and invest, but also generates inequality.',
  },
  {
    prompt: 'What is "central planning" as used in the communist USSR?',
    options: [
      'The government decides what to produce, how much, and at what prices',
      'Factories are owned privately but follow government guidelines',
      'Workers vote on what to produce in their factory',
      'Prices are set by international markets',
    ],
    answer: 'The government decides what to produce, how much, and at what prices',
    explanation: 'In central planning, the state replaces the market entirely — there is no supply-and-demand price mechanism.',
  },
  {
    prompt: 'What does "laissez-faire" capitalism mean?',
    options: [
      'Minimal government interference; let the free market operate without regulation',
      'State ownership of all major industries',
      'Government planning of the economy combined with private property rights',
      'A system where workers own the factories',
    ],
    answer: 'Minimal government interference; let the free market operate without regulation',
    explanation: 'Laissez-faire (French: "let do") capitalism holds that markets are most efficient when left alone by governments.',
  },
  {
    prompt: 'How did the New Deal represent a "middle path" between capitalism and communism?',
    options: [
      'It kept private ownership but introduced state intervention, welfare, and market regulation',
      'It abolished private property but allowed some free market trade',
      'It adopted central planning but allowed some political freedom',
      'It removed the profit motive but kept the stock market',
    ],
    answer: 'It kept private ownership but introduced state intervention, welfare, and market regulation',
    explanation: 'The New Deal reformed capitalism rather than replacing it — a pragmatic response to the Depression\'s failures.',
  },
  {
    prompt: 'How did the USSR use the Great Depression in its propaganda?',
    options: [
      'To argue that capitalism had failed and only communism could prevent economic crises',
      'To offer economic aid to the USA in exchange for political concessions',
      'To demonstrate the superiority of private farming over collective farms',
      'To prove that democracy and capitalism were compatible',
    ],
    answer: 'To argue that capitalism had failed and only communism could prevent economic crises',
    explanation: 'Soviet propaganda used the Depression as proof of capitalism\'s instability, while claiming the USSR\'s planned economy was superior.',
  },
  {
    prompt: 'What is a key difference between capitalism and communism regarding property?',
    options: [
      'In capitalism, property is privately owned; in communism, it is owned by the state on behalf of all citizens',
      'In capitalism, the state owns all factories; in communism, individuals own them',
      'Both systems allow private ownership of the means of production',
      'Neither system allows any form of private property',
    ],
    answer: 'In capitalism, property is privately owned; in communism, it is owned by the state on behalf of all citizens',
    explanation: 'Private versus state/collective ownership of the means of production is the fundamental difference between the two systems.',
  },
  {
    prompt: 'A 1930s Soviet poster shows American workers starving outside closed factories with the caption "This is capitalism". Which statement about this source is most accurate?',
    options: [
      'It is communist propaganda using the Depression to discredit capitalism — not an objective analysis',
      'It is an unbiased statistical source about US unemployment levels',
      'It is American government propaganda about communism',
      'It is a neutral historical document with no ideological perspective',
    ],
    answer: 'It is communist propaganda using the Depression to discredit capitalism — not an objective analysis',
    explanation: 'Identifying the ideological origin and purpose of sources is a core CAPS History skill — sources produced by a state are never neutral.',
  },
  {
    prompt: 'Which statement correctly contrasts the US and USSR economic systems in the 1930s?',
    options: [
      'The USA maintained capitalism with state intervention (New Deal); the USSR used central state planning (Five-Year Plans)',
      'Both the USA and USSR used free market capitalism in the 1930s',
      'The USA nationalised all industry; the USSR introduced a free market',
      'Both systems failed completely and were replaced by fascism',
    ],
    answer: 'The USA maintained capitalism with state intervention (New Deal); the USSR used central state planning (Five-Year Plans)',
    explanation: 'The 1930s represented a critical test of two competing economic models during the global Depression.',
  },
];

const CapitalismVsCommunism = () => (
  <CapsSubjectTopic
    title="Capitalism versus Communism"
    subtitle="Comparing economic systems and identifying ideological perspective in sources"
    learnSteps={learnSteps}
    task="gr11-capitalism-vs-communism-t2"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default CapitalismVsCommunism;
