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
            {"date": "1914", "title": "Russia enters World War I", "description": "Russia joined World War I in 1914. Heavy losses, food shortages, and military failures steadily weakened the tsarist state."},
            {"date": "Feb 1917", "title": "Petrograd bread strikes begin", "description": "Women workers in Petrograd launched strikes demanding bread. Soldiers soon refused to fire on crowds and joined the unrest."},
            {"date": "2 Mar 1917", "title": "Nicholas II abdicates", "description": "Tsar Nicholas II gave up the throne, ending Romanov rule. A Provisional Government took power but chose to continue the war."},
            {"date": "Apr 1917", "title": "Lenin issues April Theses", "description": "Lenin returned from exile and called for 'Peace, Land, Bread' and 'All power to the Soviets.' These demands won growing support for the Bolsheviks."},
            {"date": "25–26 Oct 1917", "title": "Bolsheviks seize Petrograd", "description": "Led by Lenin and Trotsky, the Bolsheviks took key points in Petrograd and overthrew the Provisional Government. The Winter Palace fell with little resistance."},
            {"date": "Mar 1918", "title": "Brest-Litovsk ends war", "description": "The Bolshevik government signed the Treaty of Brest-Litovsk with Germany. Russia left World War I but surrendered vast territories."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Russia in World War I — collapse from within',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Russia entered World War I in 1914. By 1917, over 1.7 million soldiers had died and millions more were wounded. Food shortages, military disasters, and a breakdown in government authority brought the country to the brink of collapse.
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-left max-w-lg">
          <p className="font-bold text-red-700">Key pressures by 1917:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li>Massive military casualties and defeats</li>
            <li>Food and fuel shortages in cities</li>
            <li>Tsar Nicholas II took personal command — blamed directly for failures</li>
            <li>Tsarina Alexandra's reliance on Rasputin undermined the royal family's credibility</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'The February Revolution 1917',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In February 1917 (March in the Western calendar), women workers in Petrograd went on strike demanding bread. The strikes spread rapidly and soldiers refused to fire on protesters, joining the revolution instead.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Outcome:</strong>
            <p className="text-slate-600">Tsar Nicholas II abdicated on 2 March 1917, ending over 300 years of Romanov rule.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">The Provisional Government:</strong>
            <p className="text-slate-600">A liberal Provisional Government took power but made the fatal mistake of continuing the war, weakening its popular support.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Lenin and the Bolsheviks — "Peace, Land, Bread"',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Vladimir Lenin</strong> returned from exile in April 1917 in the "sealed train" arranged by Germany. His <strong>April Theses</strong> called for an immediate end to the war, transfer of land to peasants, and all power to the Soviets (workers' councils).
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-left max-w-lg">
          <p className="font-bold text-indigo-700">Bolshevik slogan:</p>
          <p className="text-2xl font-bold text-indigo-900 mt-2 text-center">"Peace, Land, Bread"</p>
          <p className="text-slate-600 mt-2">This directly addressed the three greatest needs of ordinary Russians and won mass support for the Bolsheviks.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'The October Revolution — Bolsheviks seize power',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          On the night of <strong>25–26 October 1917</strong> (7 November new calendar), the Bolsheviks — led by Lenin and <strong>Leon Trotsky</strong> — seized key points in Petrograd and stormed the Winter Palace. The Provisional Government fell with barely a fight.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Why did the Bolsheviks succeed?</strong>
            <p className="text-slate-600">The Provisional Government was weak and unpopular; the Bolsheviks had disciplined organisation and a popular programme.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Immediate changes:</strong>
            <p className="text-slate-600">The Bolsheviks ended the war (Treaty of Brest-Litovsk 1918), nationalised land, and banned opposition parties.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What was the immediate trigger of the February Revolution 1917?',
    options: ['Women workers in Petrograd striking for bread, joined by soldiers', 'A Bolshevik uprising that Lenin had planned in advance', 'The German army invading the city of Petrograd', 'The murder of a minister in the government'],
    answer: 'Women workers in Petrograd striking for bread, joined by soldiers',
    explanation: 'Bread shortages sparked strikes that spread rapidly when soldiers refused orders to suppress protesters.',
  },
  {
    prompt: 'What fatal mistake did the Provisional Government make after February 1917?',
    options: [
      'It continued fighting in World War I, losing popular support',
      'It gave too much land to peasants too quickly',
      'It invited Lenin back from exile',
      'It abolished private property immediately',
    ],
    answer: 'It continued fighting in World War I, losing popular support',
    explanation: 'Continuing the unpopular war was the Provisional Government\'s greatest mistake, alienating workers, soldiers, and peasants.',
  },
  {
    prompt: 'What were Lenin\'s April Theses?',
    options: ['A plan to end the war, give land to peasants and power to the Soviets', 'A peace treaty that was signed with Germany', 'A plan to share power with the Provisional Government', 'A call for elections to a constituent assembly only'],
    answer: 'A plan to end the war, give land to peasants and power to the Soviets',
    explanation: 'The April Theses set the Bolshevik agenda and won mass support with its clear, popular demands.',
  },
  {
    prompt: 'What was a Soviet?',
    options: [
      'An elected workers\' and soldiers\' council',
      'A type of secret police',
      'A Bolshevik military unit',
      'A tsarist government department',
    ],
    answer: 'An elected workers\' and soldiers\' council',
    explanation: 'Soviets were democratic councils representing workers and soldiers that the Bolsheviks used as a base of power.',
  },
  {
    prompt: 'What slogan captured Bolshevik popular support in 1917?',
    options: ['"Peace, Land, Bread"', '"God, Tsar, Russia"', '"Liberty, Equality, Fraternity"', '"One Party, One State, One Leader"'],
    answer: '"Peace, Land, Bread"',
    explanation: 'This slogan directly addressed Russia\'s three most urgent needs: ending the war, land redistribution, and food security.',
  },
  {
    prompt: 'Who organised the Bolshevik military seizure of power in October 1917?',
    options: ['Leon Trotsky', 'Joseph Stalin', 'Alexander Kerensky', 'Father Gapon'],
    answer: 'Leon Trotsky',
    explanation: 'Trotsky led the Military Revolutionary Committee that coordinated the Bolshevik seizure of Petrograd\'s key points.',
  },
  {
    prompt: 'On what date did Tsar Nicholas II abdicate?',
    options: ['2 March 1917', '25 October 1917', '22 January 1905', '4 August 1914'],
    answer: '2 March 1917',
    explanation: 'Nicholas II abdicated on 2 March 1917 (old calendar), ending over 300 years of Romanov rule.',
  },
  {
    prompt: 'What treaty ended Russia\'s involvement in World War I?',
    options: [
      'The Treaty of Brest-Litovsk (1918)',
      'The Treaty of Versailles (1919)',
      'The October Manifesto (1905)',
      'The Treaty of Portsmouth (1905)',
    ],
    answer: 'The Treaty of Brest-Litovsk (1918)',
    explanation: 'The Bolsheviks signed the Treaty of Brest-Litovsk in 1918, surrendering large territories to Germany to exit the war.',
  },
  {
    prompt: 'Why did Germany arrange for Lenin to travel to Russia in the "sealed train"?',
    options: ['Germany hoped he would cause revolution and end the war', 'Germany wished to support the Provisional Government', 'Germany feared a Bolshevik alliance with Britain', 'Germany planned to arrest Lenin on his arrival'],
    answer: 'Germany hoped he would cause revolution and end the war',
    explanation: 'Germany calculated that a Bolshevik revolution would end Russia\'s military involvement, freeing German troops for the Western Front.',
  },
];

const The1917RussianRevolution = () => (
  <CapsSubjectTopic
    title="The 1917 Russian Revolution"
    subtitle="From the February Revolution to the Bolshevik seizure of power"
    learnSteps={learnSteps}
    task="gr11-1917-russian-revolution-t1"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default The1917RussianRevolution;
