import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NEW_ORDER as N, dateText } from '../../_shared/newWorldOrderFacts';
import { SourceBox } from '../../_shared/SourceBox';

export const learnSteps: LearnStep[] = [
  {
    title: 'Key events',
    content: (
      <div className="space-y-4">
        <Timeline
          events={[
            { date: `${N.brettonWoods.month} ${N.brettonWoods.year}`, title: 'Bretton Woods', description: 'Allied states agree to set up the IMF and the World Bank.' },
            { date: `${N.rio.month} ${N.rio.year}`, title: 'The Earth Summit in Rio', description: 'Governments and environmental groups meet on the environment and development.' },
            { date: dateText(N.wto), title: 'The WTO begins', description: 'The World Trade Organization replaces the GATT as the body for trade rules.' },
            { date: dateText(N.seattle), title: 'Protests in Seattle', description: 'Large protests disrupt a meeting of the WTO.' },
            { date: dateText(N.nineEleven), title: 'The 9/11 attacks', description: 'Terrorist attacks on the United States lead to a \u201Cwar on terror\u201D.' },
            { date: `${N.bricsSummit.year}`, title: 'The first BRICS summit', description: 'Brazil, Russia, India and China hold a leaders’ summit; South Africa joins in 2010.' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Globalisation and Western capitalism',
    content: (
      <div className="space-y-4">
        <Rule>Globalisation means that trade, money, people and ideas move more freely across borders. After the Cold War it grew quickly, led by the capitalist economies of the West.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>The <strong>International Monetary Fund (IMF)</strong> and the <strong>World Bank</strong> were set up at Bretton Woods in {N.brettonWoods.year}. The IMF lends to states in financial trouble, and the World Bank lends for development.</li>
          <li>The <strong>World Trade Organization (WTO)</strong> began in {N.wto.year}. It sets rules for trade and settles disputes between states.</li>
          <li>The <strong>IT revolution</strong>, with computers, the internet and mobile phones, made it cheap to move information and money across the world.</li>
        </ul>
        <Mistake>Globalisation is not only about trade. Supporters point to growth and cheaper goods; critics point to unequal gains and the power of large companies.</Mistake>
      </div>
    ),
  },
  {
    title: 'Balance of power and Africa',
    content: (
      <div className="space-y-4">
        <Rule>After the Cold War the United States was the strongest state, but power became more spread out.</Rule>
        <Worked
          title="North, South and BRICS"
          steps={[
            <><strong>North&ndash;South:</strong> the rich industrialised &ldquo;North&rdquo; and the poorer developing &ldquo;South&rdquo;. Many African states depended on loans and aid from the North, often with conditions attached by the IMF and World Bank.</>,
            <><strong>South&ndash;South:</strong> developing states are working together, for example on trade and investment.</>,
            <><strong>BRICS:</strong> Brazil, Russia, India and China held their first summit in {N.bricsSummit.year}. South Africa joined in {N.saJoinsBrics.year}, as a voice for Africa.</>,
          ]}
        />
        <p className="text-left text-sm text-slate-600">Loans with conditions helped some states and hurt others. Historians and economists disagree about how far they helped African development.</p>
      </div>
    ),
  },
  {
    title: 'Reactions to globalisation',
    content: (
      <div className="space-y-4">
        <Rule>Not everyone welcomed the new order. Reactions took several forms.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Civil-society resistance:</strong> trade unions and activists protested against the WTO and the IMF, for example in Seattle on {dateText(N.seattle)}.</li>
          <li><strong>Environmental groups:</strong> groups such as Greenpeace argued that growth was damaging the environment. The Earth Summit in Rio took place in {N.rio.month} {N.rio.year}.</li>
          <li><strong>Nationalism:</strong> some people turned to national or ethnic identity when they feared that globalisation threatened their jobs or culture.</li>
          <li><strong>Extremism:</strong> the attacks of {dateText(N.nineEleven)} on the United States were carried out by extremists, and led to a &ldquo;war on terror&rdquo;.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'South Africa: reconciliation and unfinished liberation',
    content: (
      <div className="space-y-4">
        <Rule>South Africa joined the global economy after 1994. Its challenge was to build unity and to deliver a better life for all.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>The <strong>Truth and Reconciliation Commission</strong>, set up by an Act of {N.trc.year}, heard victims and offered amnesty to those who told the whole truth about political crimes.</li>
          <li>Political freedom was won, but inequality, poverty and unemployment remained. Many describe liberation as <em>unfinished</em>.</li>
        </ul>
        <SourceBox label="Source E" provenance="An original description written for this lesson, in the style of a 2009 community newspaper.">
          <p>&ldquo;We have the vote, but many young people in our town still have no work. Freedom is not complete until they have a future.&rdquo;</p>
        </SourceBox>
        <Worked
          title="Judge its use"
          steps={[
            <>It shows how one community felt about unfinished liberation.</>,
            <>It is one local opinion and does not give national figures.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Which two institutions were set up at Bretton Woods?</>,
          <>What does BRICS stand for?</>,
          <>Give one reaction to globalisation.</>,
          <>What was the Truth and Reconciliation Commission?</>,
        ]}
        answers={[
          <>The IMF and the World Bank.</>,
          <>Brazil, Russia, India, China and South Africa.</>,
          <>Any one of: civil-society protest, environmental groups, nationalism, extremism.</>,
          <>A body set up in 1995 that heard victims and offered amnesty to those who told the whole truth.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which institutions were created at Bretton Woods in 1944?',
    options: ['NATO and the Warsaw Pact', 'The WTO and the United Nations', 'BRICS and the African Union', 'The IMF and the World Bank'],
    answer: 'The IMF and the World Bank',
    explanation: 'The IMF and the World Bank were set up at Bretton Woods, and the WTO followed in 1995.',
  },
  {
    prompt: 'What is the main task of the World Trade Organization?',
    options: ['To lend money to poor states for roads', 'To protect the environment of the oceans', 'To set trade rules and settle disputes', 'To keep peace between warring states'],
    answer: 'To set trade rules and settle disputes',
    explanation: 'The WTO began in 1995 and sets rules for trade between states.',
  },
  {
    prompt: 'What does globalisation mean?',
    options: ['States stop trading with each other', 'Trade and ideas move across borders', 'Every state follows the same government', 'People are not allowed to travel abroad'],
    answer: 'Trade and ideas move across borders',
    explanation: 'Globalisation is the growing movement of trade, money, people and ideas across borders, helped by the IT revolution.',
  },
  {
    prompt: 'How did the IT revolution help globalisation?',
    options: ['It ended trade with the poorer states', 'It stopped companies working abroad', 'It made the World Bank no longer needed', 'It made it cheap to move information'],
    answer: 'It made it cheap to move information',
    explanation: 'Computers, the internet and mobile phones made it quick and cheap to move information and money across the world.',
  },
  {
    prompt: 'What does "North-South" refer to in the new world order?',
    options: ['The two halves of old Germany', 'The two rival blocs of the Cold War', 'Rich and poorer developing states', 'The members of the Warsaw Pact'],
    answer: 'Rich and poorer developing states',
    explanation: 'The "North" means the rich industrialised states and the "South" the poorer developing states.',
  },
  {
    prompt: 'What does South-South cooperation mean?',
    options: ['Rich states giving aid to poorer states', 'Africa joining the Warsaw Pact', 'Trade between Europe and America', 'Developing states working together'],
    answer: 'Developing states working together',
    explanation: 'South-South cooperation is cooperation between developing states, for example on trade and investment.',
  },
  {
    prompt: 'Which states made up BRICS when South Africa joined in 2010?',
    options: ['Brazil, Russia, India, China, South Africa', 'Britain, Russia, Indonesia, Cuba and Sudan', 'Brazil, Romania, India, Chile and Tanzania', 'Belgium, Ghana, Italy, Canada and Portugal'],
    answer: 'Brazil, Russia, India, China, South Africa',
    explanation: 'BRICS began as Brazil, Russia, India and China, held its first summit in 2009, and South Africa joined in 2010.',
  },
  {
    prompt: 'What did the protests in Seattle on 30 November 1999 oppose?',
    options: ['The war in Vietnam and its costs', 'The opening of the Berlin Wall', 'The WTO and its rules on trade', 'The end of the Soviet Union'],
    answer: 'The WTO and its rules on trade',
    explanation: 'Trade unions and activists protested against the WTO, which they said served rich states and large companies.',
  },
  {
    prompt: 'What was the main concern of environmental groups at the time of the Rio Earth Summit?',
    options: ['Trade was too slow between states', 'Growth was damaging the environment', 'Governments were printing too much money', 'Cities were too small for factories'],
    answer: 'Growth was damaging the environment',
    explanation: 'Environmental groups argued that economic growth was harming the environment and needed limits.',
  },
  {
    prompt: 'Why did some people turn to nationalism as a reaction to globalisation?',
    options: ['They wanted to join the IMF at once', 'They wanted more foreign companies', 'They believed borders had disappeared', 'They feared for jobs and culture'],
    answer: 'They feared for jobs and culture',
    explanation: 'Some people felt that globalisation threatened their jobs or culture and turned to national or ethnic identity.',
  },
  {
    prompt: 'What followed the attacks on the United States of 11 September 2001?',
    options: ['The end of the WTO', 'The start of the Cold War', 'A "war on terror"', 'The fall of the Berlin Wall'],
    answer: 'A "war on terror"',
    explanation: 'The attacks were carried out by extremists and led the United States and its allies to begin a "war on terror".',
  },
  {
    prompt: 'What was the Truth and Reconciliation Commission set up in 1995?',
    options: ['A court that jailed all those who had served apartheid', 'A group that wrote the 1996 Constitution', 'A body that heard victims and offered amnesty', 'A trade body for African states'],
    answer: 'A body that heard victims and offered amnesty',
    explanation: 'The commission heard victims and offered amnesty to those who told the whole truth about political crimes.',
  },
  {
    prompt: 'Why do some people say that liberation in South Africa is unfinished?',
    options: ['The vote has still not been granted', 'The economy has stopped growing since 1994', 'Freedom was won but inequality remained', 'Apartheid laws are still in force'],
    answer: 'Freedom was won but inequality remained',
    explanation: 'Many argue that political freedom was won in 1994, but poverty, unemployment and inequality remain.',
  },
];
