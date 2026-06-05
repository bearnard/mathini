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
            {"date": "1920s", "title": "Boom built on weaknesses", "description": "The prosperity of the 1920s depended on over-production, easy credit, and speculation. Share prices rose far beyond the real value of many companies."},
            {"date": "24 Oct 1929", "title": "Black Thursday panic", "description": "Investors rushed to sell shares on Wall Street as confidence collapsed. Bankers briefly slowed the fall, but panic had already begun."},
            {"date": "29 Oct 1929", "title": "Black Tuesday collapse", "description": "Selling intensified and stock values crashed dramatically. Billions of dollars were wiped out, destroying savings and confidence."},
            {"date": "1930–1931", "title": "Banks and firms fail", "description": "Banks called in loans, many borrowers defaulted, and thousands of banks collapsed. Businesses cut production, dismissed workers, and deepened the downturn."},
            {"date": "1932", "title": "Mass unemployment peaks", "description": "About 13 million Americans were unemployed by 1932, roughly one in four workers. Breadlines and Hoovervilles became symbols of the Depression."},
            {"date": "1930s", "title": "Dust Bowl worsens misery", "description": "Drought and poor farming practices devastated the Great Plains. Many farming families lost their land and migrated west in search of work."},
            {"date": "1929–1934", "title": "Depression spreads globally", "description": "US banks withdrew loans from Europe and world trade fell sharply. The crisis helped destabilise countries such as Germany, where extremist parties gained support."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Causes of the Crash — over-production and speculation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The prosperity of the 1920s rested on fragile foundations. <strong>Over-production</strong> meant factories produced more goods than consumers could afford to buy. Meanwhile, <strong>speculation</strong> on the stock market — using borrowed money — inflated share prices far beyond real value.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Over-production:</strong>
            <p className="text-slate-600">By 1929, warehouses overflowed with unsold goods. Factories began cutting production and laying off workers.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Stock market bubble:</strong>
            <p className="text-slate-600">Shares were bought on credit ("margin buying"). When confidence fell, panic selling was inevitable.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Black Thursday and Tuesday — the Crash of October 1929',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          On <strong>24 October 1929</strong> (Black Thursday), panic hit Wall Street. Investors rushed to sell shares; prices collapsed. By <strong>29 October</strong> (Black Tuesday), $14 billion in stock value was wiped out in a single day.
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-left max-w-lg">
          <p className="font-bold text-red-700">Immediate consequences:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li>Banks called in loans — borrowers defaulted</li>
            <li>Banks themselves collapsed as depositors withdrew savings</li>
            <li>Businesses cut production and laid off workers</li>
            <li>A downward economic spiral began</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'The Great Depression — mass unemployment and poverty',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          By 1932, <strong>one in four Americans</strong> was unemployed — around 13 million people. Poverty was widespread, visible in "Hoovervilles" (shanty towns) and breadlines.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Hoovervilles:</strong>
            <p className="text-slate-600">Shantytowns of unemployed families named mockingly after President Hoover, who was blamed for inaction.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">The Dust Bowl:</strong>
            <p className="text-slate-600">Severe drought and poor farming practices turned the Great Plains to dust. Hundreds of thousands of farming families (Okies) fled west to California.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Global impact — the Depression spreads',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Depression was not only an American crisis. American banks recalled loans from Europe; world trade collapsed; unemployment soared globally — helping extremist parties like the Nazis gain support in Germany.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-left max-w-lg">
          <p className="font-bold text-indigo-700">Global effects:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li>European banks failed as US loans were recalled</li>
            <li>World trade fell by 65% between 1929 and 1934</li>
            <li>Mass unemployment in Germany empowered Hitler's Nazi Party</li>
            <li>Commodity prices collapsed, devastating African and South American economies</li>
          </ul>
        </div>
        <p className="text-sm text-slate-500 mt-2">The Great Depression shows how interconnected the global economy had become — and how economic crises can have profound political consequences.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does "over-production" mean in the context of the 1929 Crash?',
    options: [
      'Factories produced more goods than consumers could afford to buy',
      'The government printed too much money',
      'Farmers grew too many crops, flooding world markets',
      'Workers produced goods too slowly',
    ],
    answer: 'Factories produced more goods than consumers could afford to buy',
    explanation: 'Over-production meant unsold goods piled up; factories cut production and laid off workers, triggering a downward spiral.',
  },
  {
    prompt: 'What is "margin buying" or buying on the margin in the stock market?',
    options: [
      'Buying shares with borrowed money, hoping prices will rise enough to repay the loan',
      'Buying small amounts of shares at low prices',
      'A government scheme to support small investors',
      'Purchasing shares at below-market prices from bankrupt companies',
    ],
    answer: 'Buying shares with borrowed money, hoping prices will rise enough to repay the loan',
    explanation: 'Margin buying amplified the crash — when prices fell, investors could not repay loans, forcing banks to fail.',
  },
  {
    prompt: 'On which dates did the Wall Street Crash begin?',
    options: [
      'Black Thursday (24 October) and Black Tuesday (29 October) 1929',
      'Black Monday (October 1987)',
      '25 October and 30 October 1928',
      'November 1929 and January 1930',
    ],
    answer: 'Black Thursday (24 October) and Black Tuesday (29 October) 1929',
    explanation: 'The Crash began on Black Thursday and culminated on Black Tuesday with catastrophic losses — $14 billion in one day.',
  },
  {
    prompt: 'What were "Hoovervilles"?',
    options: [
      'Shanty towns of unemployed and homeless people, named mockingly after President Hoover',
      'Government housing built by the Hoover administration',
      'New factories built during Hoover\'s presidency',
      'Campaign offices for Hoover\'s re-election',
    ],
    answer: 'Shanty towns of unemployed and homeless people, named mockingly after President Hoover',
    explanation: 'Hoovervilles symbolised public anger at Hoover\'s failure to act decisively to relieve suffering during the Depression.',
  },
  {
    prompt: 'What was the Dust Bowl?',
    options: [
      'Severe drought and poor farming practices that turned Great Plains farmland to dust, displacing hundreds of thousands',
      'A flood that destroyed crops across the Mississippi valley',
      'A sandstorm in the deserts of Nevada and Arizona',
      'A government term for empty stockrooms during the Depression',
    ],
    answer: 'Severe drought and poor farming practices that turned Great Plains farmland to dust, displacing hundreds of thousands',
    explanation: 'The Dust Bowl compounded the Depression for farming communities — "Okies" fled to California as their land became barren.',
  },
  {
    prompt: 'By 1932, approximately how many Americans were unemployed?',
    options: ['About 13 million — one in four workers', 'About 1 million', 'About 5 million', 'About 30 million'],
    answer: 'About 13 million — one in four workers',
    explanation: 'Unemployment reached 25% at the depth of the Great Depression, causing widespread poverty and social crisis.',
  },
  {
    prompt: 'How did the Wall Street Crash affect Germany?',
    options: [
      'American banks recalled loans; unemployment soared and helped Hitler\'s Nazi Party gain mass support',
      'Germany benefited because it could buy American goods cheaply',
      'Germany\'s economy was unaffected because it did not trade with the USA',
      'Germany\'s strong gold reserves protected it from global recession',
    ],
    answer: 'American banks recalled loans; unemployment soared and helped Hitler\'s Nazi Party gain mass support',
    explanation: 'The global Depression is a key cause of the Nazi rise to power — economic desperation made extremist promises attractive.',
  },
  {
    prompt: 'What happened to world trade between 1929 and 1934?',
    options: [
      'It fell by approximately 65%',
      'It grew by 20% as countries found new markets',
      'It remained stable because of international agreements',
      'It doubled as governments printed more money',
    ],
    answer: 'It fell by approximately 65%',
    explanation: 'The collapse in world trade devastated economies globally, showing how interconnected the capitalist world economy had become.',
  },
  {
    prompt: 'Which of these is the best explanation of why the Depression became global?',
    options: [
      'American banks withdrew loans from Europe and US tariffs cut world trade, spreading the crisis internationally',
      'All countries were directly hit by the Wall Street Crash because all shared one stock market',
      'The League of Nations deliberately spread the crisis to punish Germany',
      'Communism spread from the USSR, undermining capitalist economies',
    ],
    answer: 'American banks withdrew loans from Europe and US tariffs cut world trade, spreading the crisis internationally',
    explanation: 'The USA\'s central role in the global economy meant its financial crisis spread rapidly through international banking and trade links.',
  },
];

const WallStreetCrash = () => (
  <CapsSubjectTopic
    title="The Wall Street Crash and Great Depression"
    subtitle="Over-production, speculation, collapse, and the global impact"
    learnSteps={learnSteps}
    task="gr11-wall-street-crash-t2"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default WallStreetCrash;
