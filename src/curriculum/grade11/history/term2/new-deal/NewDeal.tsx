import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/his/term2/new-deal/diagram.webp", alt: "Roosevelt" },
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "1929", "title": "Crash discredits Hoover ideas", "description": "The Wall Street Crash plunged the USA into depression and exposed the limits of Hoover's belief in minimal government action. As unemployment rose, public faith in 'rugged individualism' collapsed."},
            {"date": "Nov 1932", "title": "Roosevelt wins election", "description": "Franklin D. Roosevelt defeated Herbert Hoover by a landslide. He promised Americans a 'New Deal' to confront the crisis."},
            {"date": "Mar–Jun 1933", "title": "Hundred Days reforms", "description": "In Roosevelt's first months, Congress passed emergency banking and relief measures. These early laws launched the New Deal's programme of relief, recovery, and reform."},
            {"date": "Mar 1933", "title": "CCC starts work", "description": "The Civilian Conservation Corps hired young men for environmental projects such as planting trees and building parks. It provided jobs and visible federal relief."},
            {"date": "May 1933", "title": "TVA transforms region", "description": "The Tennessee Valley Authority built dams and power stations in a poor rural area. It created jobs, controlled flooding, and expanded access to electricity."},
            {"date": "Jun 1933", "title": "FDIC restores confidence", "description": "Federal deposit insurance protected savings in approved banks. This helped end bank runs and rebuild trust in the financial system."},
            {"date": "1935", "title": "Social Security created", "description": "The Social Security Act introduced old-age pensions and unemployment insurance. It created the first nationwide welfare safety net in US history, though many workers were excluded."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Hoover\'s response — too little, too late',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          President <strong>Herbert Hoover</strong> believed the economy would recover naturally through "rugged individualism" — that the government should not directly intervene in the economy. His limited response failed, and by 1932 he was deeply unpopular.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-lg">
          <p className="font-bold text-slate-700">Hoover&apos;s view:</p>
          <p className="text-slate-600 mt-2">Direct government relief would undermine Americans' self-reliance. He believed voluntary charity and time would fix the crisis — but unemployment kept rising.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'FDR and the New Deal — the three Rs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Franklin D. Roosevelt (FDR)</strong> won the 1932 election by a landslide, promising a "New Deal" for Americans. His programme was based on three goals:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Relief</strong>
            <p className="text-slate-600">Immediate help for the unemployed and the poor — food, shelter, and emergency employment.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Recovery</strong>
            <p className="text-slate-600">Restarting the economy through government spending and stimulating demand.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Reform</strong>
            <p className="text-slate-600">Long-term changes to the system so that another Depression could not happen — regulating banks and markets.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Key New Deal programmes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          FDR introduced dozens of "alphabet agencies" to implement the New Deal. Key examples:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">CCC (Civilian Conservation Corps):</strong>
            <p className="text-slate-600">Employed young men in environmental work — planting trees, building parks and dams.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">TVA (Tennessee Valley Authority):</strong>
            <p className="text-slate-600">Built dams and power stations in a poor rural region, providing electricity and thousands of jobs.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">FDIC (Federal Deposit Insurance):</strong>
            <p className="text-slate-600">Guaranteed bank deposits up to $5000 — restoring public confidence in the banking system.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Social Security Act (1935):</strong>
            <p className="text-slate-600">Created unemployment insurance and old-age pensions — the USA's first welfare safety net.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Critics, legacy, and debates about the New Deal',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The New Deal was controversial. Critics on the <strong>right</strong> said it gave the government too much power and undermined capitalism. Critics on the <strong>left</strong> said it did not go far enough to help the poorest Americans or challenge racial inequality.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Right-wing critics:</strong>
            <p className="text-slate-600">Business leaders called FDR a "socialist"; the Supreme Court struck down several New Deal laws as unconstitutional.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Left-wing critics:</strong>
            <p className="text-slate-600">Many New Deal programmes excluded African Americans; the Social Security Act did not cover domestic workers — disproportionately Black women.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500 mt-2">The New Deal permanently expanded the role of the federal government in American life and remains a landmark in the history of state intervention in a capitalist economy.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What was Hoover\'s "rugged individualism" belief?',
    options: [
      'That Americans should overcome hardship without government handouts, and the economy would recover naturally',
      'That the government should directly employ all unemployed workers',
      'That the USA should adopt communism to end the Depression',
      'That military spending would revive the economy',
    ],
    answer: 'That Americans should overcome hardship without government handouts, and the economy would recover naturally',
    explanation: 'Hoover\'s belief in minimal government intervention meant he failed to provide adequate relief during the Depression.',
  },
  {
    prompt: 'What do the three Rs of the New Deal stand for?',
    options: [
      'Relief, Recovery, Reform',
      'Resolve, Rebuild, Restore',
      'Revenue, Regulation, Redistribution',
      'Rights, Resources, Reconstruction',
    ],
    answer: 'Relief, Recovery, Reform',
    explanation: 'The three Rs summarise FDR\'s New Deal approach: immediate relief for the poor, economic recovery, and long-term reform to prevent future crises.',
  },
  {
    prompt: 'What did the CCC (Civilian Conservation Corps) do?',
    options: [
      'Employed young men in environmental projects — planting forests, building parks and conservation works',
      'Regulated commercial banking and insured deposits',
      'Built hydroelectric dams in the Tennessee Valley',
      'Managed agricultural subsidies for farmers',
    ],
    answer: 'Employed young men in environmental projects — planting forests, building parks and conservation works',
    explanation: 'The CCC gave employment to millions of young men and left a lasting legacy of conservation infrastructure.',
  },
  {
    prompt: 'What was the main purpose of the Federal Deposit Insurance Corporation (FDIC)?',
    options: [
      'To guarantee bank deposits, restoring public confidence in the banking system',
      'To nationalise all private banks under government control',
      'To regulate the stock market and prevent speculation',
      'To pay off the national debt caused by the Depression',
    ],
    answer: 'To guarantee bank deposits, restoring public confidence in the banking system',
    explanation: 'The FDIC guaranteed deposits up to $5000, ending bank runs and restoring trust in the banking system.',
  },
  {
    prompt: 'When was the Social Security Act passed, and what did it create?',
    options: [
      '1935 — it created unemployment insurance and old-age pensions for the first time in the USA',
      '1929 — it provided emergency relief immediately after the Crash',
      '1932 — it nationalised the steel industry',
      '1940 — it extended the New Deal to cover World War II costs',
    ],
    answer: '1935 — it created unemployment insurance and old-age pensions for the first time in the USA',
    explanation: 'The Social Security Act was a landmark reform — America\'s first welfare safety net — though it excluded many workers.',
  },
  {
    prompt: 'Why did right-wing critics oppose the New Deal?',
    options: [
      'They believed it gave the government too much power over the economy and undermined capitalism',
      'They argued it spent too little money and did not go far enough',
      'They wanted the government to nationalise all industries',
      'They felt it was unfair to farmers but generous to factory workers',
    ],
    answer: 'They believed it gave the government too much power over the economy and undermined capitalism',
    explanation: 'Business leaders and conservative politicians feared the New Deal was a step towards socialism and challenged it in the Supreme Court.',
  },
  {
    prompt: 'Why did left-wing critics argue the New Deal did not go far enough?',
    options: [
      'Many programmes excluded African Americans; the Social Security Act omitted domestic and agricultural workers',
      'The New Deal nationalised industries too aggressively',
      'FDR spent too much on the military at the expense of social programmes',
      'The New Deal abolished all private businesses',
    ],
    answer: 'Many programmes excluded African Americans; the Social Security Act omitted domestic and agricultural workers',
    explanation: 'Racial exclusions in New Deal programmes meant African Americans benefited far less — a major limitation of the reforms.',
  },
  {
    prompt: 'What was the Tennessee Valley Authority (TVA)?',
    options: [
      'A government agency that built dams and power stations, providing electricity and jobs in a poor rural region',
      'A relief fund for unemployed coal miners',
      'A scheme to relocate Dust Bowl farmers to the Tennessee Valley',
      'A private company that managed river transport',
    ],
    answer: 'A government agency that built dams and power stations, providing electricity and jobs in a poor rural region',
    explanation: 'The TVA was a major example of state-led economic development — transforming a poverty-stricken region through infrastructure investment.',
  },
  {
    prompt: 'Why is the New Deal historically significant for capitalism?',
    options: [
      'It showed that capitalist governments could intervene to manage the economy and provide welfare without becoming communist',
      'It proved that capitalism works best with no government involvement',
      'It replaced capitalism with a communist economic system in the USA',
      'It ended the stock market and replaced it with state planning',
    ],
    answer: 'It showed that capitalist governments could intervene to manage the economy and provide welfare without becoming communist',
    explanation: 'The New Deal permanently changed the relationship between government and economy in the USA — proving that state intervention and capitalism could coexist.',
  },
];

const NewDeal = () => (
  <CapsSubjectTopic
    title="Roosevelt's New Deal"
    subtitle="State intervention, the three Rs, key programmes, and their legacy"
    learnSteps={learnSteps}
    task="gr11-new-deal-t2"
    bank={bank}
    apiPath="/api/caps/his"
  />
);

export default NewDeal;
