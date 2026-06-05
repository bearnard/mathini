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
            {"date": "1897", "title": "First Zionist Congress", "description": "The First Zionist Congress met in Basel under Theodor Herzl's leadership. It helped organise Zionism as a nationalist movement seeking a Jewish homeland."},
            {"date": "1917", "title": "Balfour Declaration issued", "description": "Britain declared support for a national home for the Jewish people in Palestine. This intensified Arab fears because Palestine already had an Arab majority population."},
            {"date": "1922", "title": "British Mandate begins", "description": "The League of Nations confirmed British rule in Palestine. Britain then tried unsuccessfully to manage competing Arab and Zionist national claims."},
            {"date": "1936–1939", "title": "Arab Revolt erupts", "description": "Palestinian Arabs rebelled against British rule and growing Jewish immigration. The revolt showed how deeply conflict over land, power, and identity had grown."},
            {"date": "29 Nov 1947", "title": "UN approves partition", "description": "The United Nations voted to partition Palestine into Jewish and Arab states. Zionist leaders accepted the plan more readily than Arab leaders, and violence escalated."},
            {"date": "14 May 1948", "title": "Israel declares independence", "description": "The State of Israel was proclaimed as the British Mandate ended. Neighbouring Arab states then entered the war."},
            {"date": "1948–1949", "title": "Nakba and refugee crisis", "description": "The Arab-Israeli War ended with Israeli survival and territorial expansion. Hundreds of thousands of Palestinians were displaced, creating the refugee crisis remembered as the Nakba."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Origins of Zionism and the Balfour Declaration',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Zionism</strong> emerged in late 19th-century Europe as a nationalist movement calling for a Jewish homeland in Palestine. <strong>Theodor Herzl</strong> became one of its most influential early thinkers. During World War I, Britain issued the <strong>Balfour Declaration (1917)</strong>, supporting a "national home for the Jewish people" in Palestine.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Zionist aim</strong>
            <p className="text-slate-600">To secure safety and self-determination for Jews after centuries of persecution.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Immediate problem</strong>
            <p className="text-slate-600">Palestine was already home to an Arab population with its own political claims and identity.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Arab nationalism and competing claims to Palestine',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Arab nationalism</strong> grew as the Ottoman Empire declined and as Arab peoples resisted foreign control. Many Palestinian Arabs saw Britain's promises and later Jewish immigration as a threat to majority rule and to their land, rights, and political future.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-2xl">
          <p className="font-bold text-slate-700">Why conflict deepened:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li>Two nationalist movements claimed the same territory.</li>
            <li>British rule tried and failed to balance incompatible expectations.</li>
            <li>Violence increased as trust and compromise broke down.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'The 1948 Arab-Israeli War and the refugee crisis',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In 1948, the state of <strong>Israel</strong> was declared and war broke out between Israel and neighbouring Arab states. The war ended with Israeli survival and expansion, but also with the displacement of hundreds of thousands of Palestinians, creating a major <strong>refugee crisis</strong> known by Palestinians as the <strong>Nakba</strong> (catastrophe).
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Israeli perspective</strong>
            <p className="text-slate-600">1948 is often seen as a war of independence and state survival.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Palestinian perspective</strong>
            <p className="text-slate-600">1948 is remembered as dispossession, exile, and the destruction of communities.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Historical interpretation and ongoing conflict',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Middle East conflict cannot be understood from one source alone. CAPS History asks you to compare perspectives, identify bias, and explain why different groups interpret the same events differently.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left max-w-2xl mx-auto">
          <p className="font-bold text-indigo-700 mb-2">Source analysis questions:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>Who produced the source and for which audience?</li>
            <li>What language shows sympathy for one national claim over another?</li>
            <li>What evidence is missing, and whose voice is not represented?</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What was Zionism?',
    options: [
      'A nationalist movement calling for a Jewish homeland in Palestine',
      'An Arab movement to unite the Ottoman Empire',
      'A British policy to end all nationalism',
      'A socialist campaign in the Soviet Union',
    ],
    answer: 'A nationalist movement calling for a Jewish homeland in Palestine',
    explanation: 'Zionism grew in response to anti-Semitism and the desire for Jewish self-determination.',
  },
  {
    prompt: 'Who is most closely associated with the early development of Zionism?',
    options: ['Theodor Herzl', 'Kwame Nkrumah', 'W. E. B. Du Bois', 'Cecil Rhodes'],
    answer: 'Theodor Herzl',
    explanation: 'Herzl became one of the best-known early advocates of a Jewish national homeland.',
  },
  {
    prompt: 'What did the Balfour Declaration of 1917 support?',
    options: [
      'The establishment of a national home for the Jewish people in Palestine',
      'Immediate Palestinian independence under Arab rule',
      'The end of British influence in the Middle East',
      'The abolition of nationalism in Europe',
    ],
    answer: 'The establishment of a national home for the Jewish people in Palestine',
    explanation: 'Britain backed a Jewish national home while also ruling a region with an existing Arab population.',
  },
  {
    prompt: 'Why did Arab nationalism matter in Palestine?',
    options: [
      'Palestinian Arabs had their own claims to land, political rights, and self-determination',
      'Arab nationalism rejected any attachment to territory',
      'It supported British control over Palestine permanently',
      'It developed only after 1948 with no earlier roots',
    ],
    answer: 'Palestinian Arabs had their own claims to land, political rights, and self-determination',
    explanation: 'Conflict grew because two national movements claimed the same land.',
  },
  {
    prompt: 'What happened in 1948?',
    options: [
      'The state of Israel was declared and war broke out with neighbouring Arab states',
      'The Ottoman Empire regained control of Palestine',
      'Britain withdrew and peace was immediately established',
      'The Balfour Declaration was cancelled before any conflict',
    ],
    answer: 'The state of Israel was declared and war broke out with neighbouring Arab states',
    explanation: '1948 was a turning point that reshaped the region and the experiences of both Israelis and Palestinians.',
  },
  {
    prompt: 'What is the Nakba?',
    options: [
      'The Palestinian experience of dispossession and refugee flight during the 1948 war',
      'The Israeli name for independence day',
      'A British military operation in Egypt',
      'The name of a Zionist newspaper',
    ],
    answer: 'The Palestinian experience of dispossession and refugee flight during the 1948 war',
    explanation: 'Nakba means "catastrophe" and refers to mass displacement and the loss of homes and communities.',
  },
  {
    prompt: 'Why is the Palestinian refugee crisis historically important?',
    options: [
      'It became a long-term regional and human rights issue that remains unresolved',
      'It ended within weeks and had no lasting impact',
      'It affected only Europe and not the Middle East',
      'It was unrelated to war or nationalism',
    ],
    answer: 'It became a long-term regional and human rights issue that remains unresolved',
    explanation: 'The displacement of Palestinians shaped later politics, identity, and conflict across the Middle East.',
  },
  {
    prompt: 'How should historians approach sources on Zionism and Arab nationalism?',
    options: [
      'By comparing perspectives, identifying bias, and noting missing voices',
      'By accepting all official statements as neutral truth',
      'By using only one side\'s interpretation',
      'By ignoring the purpose and audience of sources',
    ],
    answer: 'By comparing perspectives, identifying bias, and noting missing voices',
    explanation: 'This topic requires careful comparison because different groups remember the same events very differently.',
  },
];

const ZionismArabNationalism = () => (
  <CapsSubjectTopic
    title="Zionism and Arab Nationalism"
    subtitle="Competing national claims, the 1948 war, and the roots of the Palestinian refugee crisis"
    learnSteps={learnSteps}
    task="gr11-zionism-arab-nationalism-t4"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default ZionismArabNationalism;
