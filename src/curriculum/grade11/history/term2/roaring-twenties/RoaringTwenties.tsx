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
            {"date": "1913", "title": "Ford perfects assembly line", "description": "Henry Ford's moving assembly line transformed manufacturing by cutting time and cost. It made mass-produced goods, especially cars, affordable to more Americans."},
            {"date": "1920", "title": "Prohibition begins", "description": "The 18th Amendment and Volstead Act banned the manufacture and sale of alcohol. Instead of ending drinking, Prohibition encouraged bootlegging and organised crime."},
            {"date": "1920s", "title": "Consumer boom accelerates", "description": "Americans increasingly bought cars, radios, and appliances on credit. Consumer spending became a major engine of economic growth during the decade."},
            {"date": "1920s", "title": "Jazz Age spreads nationally", "description": "Jazz music, radio, cinema, and sport helped create a shared popular culture. New urban lifestyles and flapper culture challenged older social norms."},
            {"date": "1920s", "title": "Harlem Renaissance flourishes", "description": "African American writers, musicians, and artists made Harlem a major cultural centre. The movement celebrated Black creativity despite persistent racism and segregation."},
            {"date": "1924–1925", "title": "KKK reaches new peak", "description": "The revived Ku Klux Klan gained millions of members in the mid-1920s. Its growth revealed the racism and intolerance hidden beneath the decade's prosperity."},
            {"date": "1920s", "title": "Farmers face hard times", "description": "Many rural Americans did not share in the boom because crop prices stayed low. Rural poverty showed that the Roaring Twenties were prosperous for some, not all."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Mass production and the consumer revolution',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Henry Ford's assembly line</strong> transformed manufacturing. By standardising production, Ford made the Model T affordable for ordinary Americans. A new culture of <strong>consumerism</strong> — buying goods on credit — emerged.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Assembly line:</strong>
            <p className="text-slate-600">Each worker performs one repeated task; production is faster and cheaper. Ford's factories paid workers enough to buy his cars — a deliberate strategy.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Consumerism:</strong>
            <p className="text-slate-600">Americans bought cars, radios, and fridges on credit (hire purchase). Spending on consumer goods drove economic growth throughout the 1920s.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The economic boom of the 1920s',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The 1920s saw unprecedented prosperity in the USA: industrial output soared, wages rose for many workers, and the <strong>stock market</strong> reached record highs. Ordinary Americans invested in shares, often using borrowed money.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-lg">
          <p className="font-bold text-slate-800">Key industries driving growth:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-2">
            <li>Automobile manufacturing (Ford, General Motors)</li>
            <li>Electrical goods (radios, refrigerators)</li>
            <li>Construction — skyscrapers and suburban housing</li>
            <li>Advertising and the entertainment industry</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Social change — the Jazz Age',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The 1920s were a decade of cultural transformation. <strong>Jazz music</strong> — rooted in African American culture — swept the nation. <strong>Flappers</strong> challenged traditional gender roles. Cities grew rapidly and new forms of entertainment emerged.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Cultural change:</strong>
            <p className="text-slate-600">Radio, cinema, jazz clubs, and professional sport created a shared popular culture across the USA for the first time.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Harlem Renaissance:</strong>
            <p className="text-slate-600">African American artists, writers, and musicians flourished in New York's Harlem, creating a powerful cultural movement despite ongoing racism.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The other side of the Twenties',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Beneath the prosperity lay serious inequalities. Not everyone shared in the boom:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Prohibition</strong>
            <p className="text-slate-600">Banning alcohol (1920–1933) created organised crime; gangsters like Al Capone grew powerful through bootlegging.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Racism and the KKK</strong>
            <p className="text-slate-600">The Ku Klux Klan revived to 4 million members. Jim Crow laws kept African Americans segregated and oppressed across the South.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Rural poverty</strong>
            <p className="text-slate-600">Farmers suffered falling crop prices throughout the 1920s. African Americans and immigrants faced discrimination and poor wages.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What innovation did Henry Ford introduce that transformed manufacturing?',
    options: [
      'The moving assembly line — workers perform one task repeatedly',
      'Steam-powered factories replacing human workers',
      'A system of barter replacing wages',
      'Collective ownership of all car factories',
    ],
    answer: 'The moving assembly line — workers perform one task repeatedly',
    explanation: 'Ford\'s assembly line dramatically cut production time and cost, making the Model T affordable for ordinary Americans.',
  },
  {
    prompt: 'What is consumerism?',
    options: [
      'A culture of buying goods — often on credit — as a lifestyle and economic driver',
      'A communist economic system',
      'A government policy of taxing luxury goods',
      'The process of manufacturing goods in factories',
    ],
    answer: 'A culture of buying goods — often on credit — as a lifestyle and economic driver',
    explanation: 'The 1920s consumer revolution saw Americans buying cars, radios, and fridges on hire purchase, driving the economic boom.',
  },
  {
    prompt: 'Which cultural movement saw African American artists, writers, and musicians flourish in New York?',
    options: ['The Harlem Renaissance', 'The New Deal', 'The Jazz Age in Chicago', 'The Progressive Movement'],
    answer: 'The Harlem Renaissance',
    explanation: 'The Harlem Renaissance was a flowering of African American culture in the 1920s despite ongoing racial segregation.',
  },
  {
    prompt: 'What was Prohibition (1920–1933)?',
    options: [
      'A constitutional ban on alcohol that created organised crime and bootlegging',
      'A law prohibiting strikes by workers',
      'A trade tariff preventing European imports',
      'A ban on immigration from Eastern Europe',
    ],
    answer: 'A constitutional ban on alcohol that created organised crime and bootlegging',
    explanation: 'Prohibition created a black market; gangsters like Al Capone grew rich and powerful supplying illegal alcohol.',
  },
  {
    prompt: 'Why did ordinary Americans invest heavily in the stock market in the 1920s?',
    options: [
      'Share prices rose steadily, making speculation seem like guaranteed profit, often with borrowed money',
      'The government required all citizens to own shares',
      'Companies paid workers in shares instead of wages',
      'Banks refused to hold cash savings',
    ],
    answer: 'Share prices rose steadily, making speculation seem like guaranteed profit, often with borrowed money',
    explanation: 'Easy credit and rising share prices encouraged dangerous speculation that would contribute to the 1929 Crash.',
  },
  {
    prompt: 'What were "flappers" in 1920s America?',
    options: [
      'Young women who challenged traditional gender norms through fashion, music, and independence',
      'Female factory workers in Ford\'s assembly plants',
      'Members of the Ku Klux Klan',
      'Women who campaigned for Prohibition',
    ],
    answer: 'Young women who challenged traditional gender norms through fashion, music, and independence',
    explanation: 'Flappers symbolised the social change of the 1920s — shorter skirts, jazz dancing, and visible independence for women.',
  },
  {
    prompt: 'Which group suffered falling income throughout the 1920s, contrary to the general boom?',
    options: ['Farmers', 'Car factory workers', 'Wall Street bankers', 'Hollywood actors'],
    answer: 'Farmers',
    explanation: 'Farm prices fell throughout the 1920s — the rural sector did not share in the prosperity of the industrial economy.',
  },
  {
    prompt: 'How did the Roaring Twenties prosperity contribute to the eventual crash of 1929?',
    options: [
      'Excessive credit, over-production, and stock market speculation created an unsustainable bubble',
      'Too many workers were paid too much, causing inflation',
      'The USA spent too much on foreign aid to Europe',
      'The government raised taxes too high, destroying businesses',
    ],
    answer: 'Excessive credit, over-production, and stock market speculation created an unsustainable bubble',
    explanation: 'The prosperity of the 1920s was built on fragile foundations — cheap credit, speculation, and over-production — setting the stage for the Great Crash.',
  },
  {
    prompt: 'What does a historian mean when describing the Roaring Twenties as a period of "contradictions"?',
    options: [
      'Great prosperity for many existed alongside racism, rural poverty, and inequality for others',
      'The economy grew and shrank every year alternately',
      'Americans supported both capitalism and communism',
      'The government expanded and cut spending simultaneously',
    ],
    answer: 'Great prosperity for many existed alongside racism, rural poverty, and inequality for others',
    explanation: 'CAPS emphasises that historical periods are complex — the 1920s boom co-existed with the KKK, Jim Crow, and rural suffering.',
  },
];

const RoaringTwenties = () => (
  <CapsSubjectTopic
    title="The Roaring Twenties"
    subtitle="Mass production, consumerism, the Jazz Age, and the limits of prosperity"
    learnSteps={learnSteps}
    task="gr11-roaring-twenties-t2"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default RoaringTwenties;
