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
            {"date": "1894", "title": "Nicholas II becomes tsar", "description": "Nicholas II came to power as an autocrat who believed in divine right. He rejected constitutional limits and relied on repression to preserve tsarism."},
            {"date": "1904–1905", "title": "Russo-Japanese War humiliation", "description": "Russia suffered a shocking defeat against Japan. The war exposed the weakness of the regime and deepened popular anger."},
            {"date": "22 Jan 1905", "title": "Bloody Sunday massacre", "description": "Tsarist troops fired on peaceful marchers led by Father Gapon near the Winter Palace. The killings shattered faith in the 'Little Father' and sparked revolution."},
            {"date": "Jun 1905", "title": "Potemkin mutiny erupts", "description": "Sailors on the battleship Potemkin mutinied against their officers. The revolt showed that unrest had spread even into the armed forces."},
            {"date": "Oct 1905", "title": "October Manifesto issued", "description": "Facing strikes and uprisings, Nicholas II promised civil liberties and an elected Duma. The manifesto calmed the crisis temporarily but did not solve Russia's deeper problems."},
            {"date": "1906", "title": "Tsar limits the Duma", "description": "Nicholas II quickly weakened the new parliament through the Fundamental Laws and continued repression. The survival of autocracy left the causes of revolution unresolved."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Autocracy under Tsar Nicholas II',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Russia in the early 1900s was ruled by <strong>Tsar Nicholas II</strong>, an autocrat who believed he had a divine right to rule. He refused to share power with parliament and used the secret police (Okhrana) to crush opposition.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Society:</strong>
            <p className="text-slate-600">A tiny nobility and growing middle class sat above millions of impoverished peasants and exploited factory workers.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Key concept — Autocracy:</strong>
            <p className="text-slate-600">Rule by a single person with absolute, unchecked power. No freedom of speech or political parties were allowed.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Discontent and growing opposition',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          By 1905 opposition to the Tsar had grown from several directions, each with different demands:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Peasants</strong>
            <p className="text-slate-600">Wanted land reform; suffered poverty, famine, and heavy taxation.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Workers</strong>
            <p className="text-slate-600">Faced brutal conditions in factories; demanded shorter hours, better wages, and trade union rights.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Intelligentsia</strong>
            <p className="text-slate-600">Educated professionals, socialists, and liberals demanded a constitution and representative government.</p>
          </div>
        </div>
        <p className="text-slate-600">Russia's humiliating defeat in the <strong>Russo-Japanese War (1904–05)</strong> intensified all these grievances.</p>
      </div>
    ),
  },
  {
    title: 'Bloody Sunday and the 1905 Revolution',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          On <strong>22 January 1905</strong>, a peaceful march of workers led by Father Gapon to the Winter Palace was fired on by tsarist troops. Hundreds were killed in what became known as <strong>Bloody Sunday</strong>.
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-left max-w-lg">
          <p className="font-bold text-red-700">Consequences of Bloody Sunday:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li>Nationwide strikes and uprisings spread across Russia</li>
            <li>Sailors mutinied on the battleship Potemkin</li>
            <li>The Tsar was forced to issue the October Manifesto</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'The October Manifesto and its limits',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Facing revolution, Nicholas II issued the <strong>October Manifesto (1905)</strong>, promising civil liberties and an elected parliament (Duma). It temporarily calmed the crisis but solved little.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">What it promised:</strong>
            <p className="text-slate-600">Freedom of speech, assembly, and conscience; a legislative Duma with real powers.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">The reality:</strong>
            <p className="text-slate-600">Nicholas undermined the Duma's powers and used the Okhrana to arrest revolutionaries. Root causes remained unresolved — setting the stage for 1917.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is autocracy?',
    options: [
      'Rule by a single person with absolute, unchecked power',
      'A democratic system with free elections',
      'Rule by a council of nobles',
      'Government controlled by the military',
    ],
    answer: 'Rule by a single person with absolute, unchecked power',
    explanation: 'An autocrat like Nicholas II ruled without any constitutional limits or accountability to a parliament.',
  },
  {
    prompt: 'What was the name of the tsarist secret police?',
    options: ['Okhrana', 'Gestapo', 'NKVD', 'Cheka'],
    answer: 'Okhrana',
    explanation: 'The Okhrana was the Tsar\'s secret police, tasked with crushing political opposition.',
  },
  {
    prompt: 'What event on 22 January 1905 triggered the 1905 Revolution?',
    options: [
      'Bloody Sunday — troops fired on peaceful marchers near the Winter Palace',
      'The assassination of the Tsar',
      'Russia\'s victory in the Russo-Japanese War',
      'The Bolshevik October Revolution',
    ],
    answer: 'Bloody Sunday — troops fired on peaceful marchers near the Winter Palace',
    explanation: 'Hundreds of workers marching peacefully were shot by tsarist soldiers, sparking nationwide rebellion.',
  },
  {
    prompt: 'Which war weakened the Tsar\'s prestige and intensified opposition before 1905?',
    options: ['The Russo-Japanese War', 'World War I', 'The Crimean War', 'The Franco-Prussian War'],
    answer: 'The Russo-Japanese War',
    explanation: 'Russia\'s humiliating defeat by Japan in 1905 undermined confidence in tsarist leadership.',
  },
  {
    prompt: 'What did the October Manifesto of 1905 promise?',
    options: [
      'Civil liberties and an elected parliament (Duma)',
      'The abolition of private land ownership',
      'Russia\'s withdrawal from the war',
      'The execution of the Tsar',
    ],
    answer: 'Civil liberties and an elected parliament (Duma)',
    explanation: 'The October Manifesto promised basic freedoms and a legislative Duma to prevent full revolution.',
  },
  {
    prompt: 'Why did the October Manifesto fail to solve Russia\'s problems?',
    options: [
      'Nicholas II later undermined the Duma\'s powers and left root causes unresolved',
      'The Duma was given too much power',
      'Workers refused all reforms',
      'The manifesto was never published',
    ],
    answer: 'Nicholas II later undermined the Duma\'s powers and left root causes unresolved',
    explanation: 'Nicholas stripped the Duma of power and continued repression, meaning the 1905 Revolution was only a temporary setback.',
  },
  {
    prompt: 'Which group mutinied on the battleship Potemkin during the 1905 Revolution?',
    options: ['Sailors', 'Factory workers', 'Peasants', 'Students'],
    answer: 'Sailors',
    explanation: 'The Potemkin Mutiny showed how revolutionary sentiment had spread even into the armed forces.',
  },
  {
    prompt: 'What best describes the condition of Russian peasants under the Tsar?',
    options: [
      'They suffered poverty, heavy taxation, and lacked land rights',
      'They owned large estates and were prosperous',
      'They had full political rights and representation',
      'They controlled the industrial economy',
    ],
    answer: 'They suffered poverty, heavy taxation, and lacked land rights',
    explanation: 'The vast majority of Russians were peasants living in desperate conditions, which fuelled revolutionary anger.',
  },
  {
    prompt: 'What is the significance of the 1905 Revolution for later events?',
    options: [
      'It revealed deep structural problems that remained unresolved and would lead to 1917',
      'It fully satisfied the demands of workers and peasants',
      'It led to the immediate end of tsarist rule',
      'It brought communism to Russia',
    ],
    answer: 'It revealed deep structural problems that remained unresolved and would lead to 1917',
    explanation: 'Lenin called 1905 a "dress rehearsal" — the tsarist regime survived but its fundamental weaknesses were exposed.',
  },
];

const TsarismAnd1905Revolution = () => (
  <CapsSubjectTopic
    title="Tsarism and the 1905 Revolution"
    subtitle="Autocracy, discontent, Bloody Sunday, and the limits of reform"
    learnSteps={learnSteps}
    task="gr11-tsarism-1905-revolution-t1"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default TsarismAnd1905Revolution;
