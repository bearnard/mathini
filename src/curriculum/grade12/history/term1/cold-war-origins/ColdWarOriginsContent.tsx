import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ORIGINS as O, dateText } from '../../_shared/coldWarFacts';
import { SourceBox } from '../../_shared/SourceBox';

export const learnSteps: LearnStep[] = [
  {
    title: 'Key events, 1945 to 1962',
    content: (
      <div className="space-y-4">
        <Timeline
          events={[
            { date: dateText(O.veDay), title: 'The war in Europe ends', description: 'The Soviet Union and the Western Allies now face each other across a divided Europe.' },
            { date: dateText(O.ironCurtainSpeech), title: 'The "iron curtain" speech', description: 'Winston Churchill, speaking in the United States, says that an "iron curtain" has come down across Europe.' },
            { date: dateText(O.trumanDoctrine), title: 'The Truman Doctrine', description: 'The USA promises to support free peoples resisting communist pressure, starting with Greece and Turkey.' },
            { date: dateText(O.marshallSpeech), title: 'The Marshall Plan is announced', description: 'American money to rebuild Western Europe, offered in a speech; the aid began in 1948.' },
            { date: `${dateText(O.blockadeStart)} to ${dateText(O.blockadeEnd)}`, title: 'The Berlin Blockade', description: 'The Soviet Union cuts land routes to West Berlin; the Western powers supply the city by air.' },
            { date: dateText(O.nato), title: 'NATO is founded', description: 'A Western military alliance. The Soviet bloc answers with the Warsaw Pact in ' + O.warsawPact.year + '.' },
            { date: dateText(O.wallBuilt), title: 'The Berlin Wall goes up', description: 'East Germany seals the border between East and West Berlin.' },
            { date: `${dateText(O.cubaStart)} to ${dateText(O.cubaEnd)}`, title: 'The Cuban Missile Crisis', description: 'Thirteen days in which the superpowers came close to nuclear war.' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Why a "Cold War"?',
    content: (
      <div className="space-y-4">
        <Rule>The Cold War was a struggle between two superpowers, the USA and the USSR, that never became a direct war between them, because new nuclear weapons made that too dangerous.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>It was fought through <strong>proxy wars</strong> in other countries, aid and pressure on weaker states, spying and propaganda.</li>
          <li>It was also a <strong>race</strong>: for nuclear weapons, for space and for success in sport.</li>
          <li>Each superpower built a <strong>sphere of influence</strong>: a group of states that followed its lead. Soviet-friendly governments were set up in the &ldquo;satellite states&rdquo; of Eastern Europe.</li>
        </ul>
        <Mistake>The Cold War was not a quiet time. Many wars in Korea, Vietnam and Angola were part of it. &ldquo;Cold&rdquo; refers only to the lack of direct fighting between the USA and the USSR.</Mistake>
      </div>
    ),
  },
  {
    title: 'Containment and the two alliances',
    content: (
      <div className="space-y-4">
        <Rule>The USA&rsquo;s policy of containment aimed to stop the spread of communism, using money as well as military power.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4 text-sm text-slate-700">
            <strong className="text-indigo-700">The West</strong>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>The Truman Doctrine ({O.trumanDoctrine.year}): help for governments facing communist pressure.</li>
              <li>The Marshall Plan: money to rebuild Western Europe, which also made communism less attractive there.</li>
              <li>NATO ({O.nato.year}): a military alliance.</li>
            </ul>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-sm text-slate-700">
            <strong className="text-rose-700">The Soviet bloc</strong>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Soviet-friendly governments in the satellite states.</li>
              <li>A rejection of the Marshall Plan, and a plan of its own for economic ties in the East.</li>
              <li>The Warsaw Pact ({O.warsawPact.year}): the Eastern military alliance.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Berlin and Cuba: brinkmanship',
    content: (
      <div className="space-y-4">
        <Rule>Brinkmanship is pushing a dangerous situation to the edge of war, hoping the other side backs down first.</Rule>
        <Worked
          title="Two crises"
          steps={[
            <><strong>Berlin ({O.blockadeStart.year} to {O.blockadeEnd.year}):</strong> Germany and Berlin were divided into zones. When the Western powers joined their zones, the USSR blocked the roads and rail into West Berlin. The West flew in supplies until the blockade was lifted.</>,
            <><strong>The Wall ({O.wallBuilt.year}):</strong> so many East Germans fled through Berlin that East Germany closed the border with a wall. It stood until it fell on {dateText(O.wallFell)}.</>,
            <><strong>Cuba ({O.cubaStart.year}):</strong> the USA found Soviet missiles in Cuba and set up a naval blockade. After thirteen days the USSR agreed to remove them, and the USA promised not to invade Cuba.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Who was to blame? Reading a source',
    content: (
      <div className="space-y-4">
        <Rule>Historians disagree about who caused the Cold War. Your task is to weigh evidence, not to choose a side without proof.</Rule>
        <ul className="space-y-1.5 text-left text-sm text-slate-700">
          <li><strong>Traditional view:</strong> Soviet expansion into Eastern Europe forced the West to respond.</li>
          <li><strong>Revisionist view:</strong> American economic and political power pushed the USSR into a defensive position.</li>
          <li><strong>Post-revisionist view:</strong> both sides were suspicious, misread each other and shared the blame.</li>
        </ul>
        <SourceBox label="Source A" provenance="An original description written for this lesson, in the style of a Western newspaper editorial of the late 1940s.">
          <p>&ldquo;Governments friendly to Moscow have replaced elected ones across Eastern Europe. A free world must now draw the line.&rdquo;</p>
        </SourceBox>
        <Worked
          title="Judge its usefulness"
          steps={[
            <>Who wrote it, and for whom? A Western editorial writes for readers who already fear communism.</>,
            <>What does it say? Soviet-friendly governments replaced others, which is a claim that can be checked.</>,
            <>What does it leave out? It says nothing about the USSR&rsquo;s fear after a war that cost it millions of lives, or about American power.</>,
            <>So it is useful for what Westerners believed, but one-sided as proof of who started the Cold War.</>,
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
          <>Why was the Cold War called &ldquo;cold&rdquo;?</>,
          <>Name the two military alliances and the year each was formed.</>,
          <>What did the Marshall Plan offer, and why did the USA offer it?</>,
          <>A source is a newspaper editorial from one side. Give one reason it is useful and one reason to be careful.</>,
        ]}
        answers={[
          <>The USA and the USSR did not fight each other directly, because nuclear weapons made that too dangerous.</>,
          <>NATO ({O.nato.year}) and the Warsaw Pact ({O.warsawPact.year}).</>,
          <>Money to rebuild Western Europe. It helped Europeans recover and made communism less attractive there.</>,
          <>It shows what that side believed (useful), but it is one-sided and written to persuade (be careful).</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Why was the period after 1945 called the "Cold War"?',
    options: ['They did not fight each other directly', 'The fighting took place in cold regions', 'It was a war fought without any weapons', 'It began during a very cold winter'],
    answer: 'They did not fight each other directly',
    explanation: 'New nuclear weapons made a direct war too dangerous. The two superpowers competed through proxy wars, aid, spying, propaganda and arms and space races.',
  },
  {
    prompt: 'Which term describes a group of states that follow the lead of a superpower?',
    options: ['A sphere of influence', 'A neutral zone', 'A free trade area', 'A demilitarised border'],
    answer: 'A sphere of influence',
    explanation: 'Each superpower built a sphere of influence. The satellite states of Eastern Europe fell in the Soviet sphere.',
  },
  {
    prompt: 'What was the main aim of the American policy of containment?',
    options: ['To stop the spread of communism', 'To conquer the Soviet Union itself', 'To end its trade with Europe now', 'To bring American troops home'],
    answer: 'To stop the spread of communism',
    explanation: 'Containment, shown in the Truman Doctrine and the Marshall Plan, aimed to keep communism from spreading beyond the areas the USSR already controlled.',
  },
  {
    prompt: 'What did the Truman Doctrine of March 1947 promise?',
    options: ['A military alliance of Eastern states', 'Withdrawal of troops from Germany', 'A shared space programme with the USSR', 'Help for peoples resisting communism'],
    answer: 'Help for peoples resisting communism',
    explanation: 'President Truman asked Congress for aid to Greece and Turkey and said that the USA would support free peoples facing communist pressure.',
  },
  {
    prompt: 'The Marshall Plan aimed to rebuild Western Europe. Why did it also serve the American policy of containment?',
    options: ['It gave the USSR control of Western Europe', 'It forced Germany to repay the USA', 'Recovery made communism less attractive', 'It replaced NATO with a trade body'],
    answer: 'Recovery made communism less attractive',
    explanation: 'Poverty and ruined economies made communism more attractive. Rebuilding Western Europe was a way of containing it.',
  },
  {
    prompt: 'The Berlin Blockade began in June 1948. What did the Western powers do in response?',
    options: ['They attacked East Berlin by land', 'They gave West Berlin to the USSR', 'They moved their capital to Moscow', 'They supplied the city by air'],
    answer: 'They supplied the city by air',
    explanation: 'The Berlin Airlift flew in food and fuel. The blockade ended in May 1949 without a shot being fired between the superpowers.',
  },
  {
    prompt: 'Which pair gives the two military alliances of the Cold War in Europe?',
    options: ['NATO and the Warsaw Pact', 'NATO and the United Nations', 'The Warsaw Pact and the League of Nations', 'The Marshall Plan and the Truman Doctrine'],
    answer: 'NATO and the Warsaw Pact',
    explanation: 'NATO (1949) was the Western alliance and the Warsaw Pact (1955) was the Soviet-led alliance. The Marshall Plan and Truman Doctrine were American policies.',
  },
  {
    prompt: 'Why did East Germany build the Berlin Wall in August 1961?',
    options: ['To protect East Berlin from an American invasion', 'To divide a city that was always two cities', 'To mark the end of the Berlin Airlift', 'To stop East Germans fleeing to the West'],
    answer: 'To stop East Germans fleeing to the West',
    explanation: 'Large numbers of East Germans were leaving through Berlin, which was losing East Germany its workers. The Wall closed that gap.',
  },
  {
    prompt: 'What is brinkmanship?',
    options: ['Signing a treaty with a rival state', 'Pushing a crisis to the edge of war', 'Building a wall along a border', 'Spying on an ally in secret'],
    answer: 'Pushing a crisis to the edge of war',
    explanation: 'Brinkmanship was a feature of the Cold War, as in the Berlin and Cuban crises.',
  },
  {
    prompt: 'How did the Cuban Missile Crisis end in October 1962?',
    options: ['The USA and the USSR then went to war', 'The USSR agreed to remove the missiles', 'Cuba removed the missiles on its own', 'The United Nations took control of Cuba'],
    answer: 'The USSR agreed to remove the missiles',
    explanation: 'After thirteen days Khrushchev agreed to remove the missiles. The USA also promised not to invade Cuba. The crisis showed how close nuclear war could come.',
  },
  {
    prompt: 'A historian argues that the USA, by using its economic power to shape Europe, pushed the USSR into a defensive position. Which interpretation is this?',
    options: ['The traditional view', 'The post-revisionist view', 'The revisionist view', 'The Soviet propaganda view'],
    answer: 'The revisionist view',
    explanation: 'This is the revisionist view: it puts more weight on American power and policy. The traditional view blames Soviet expansion, and post-revisionists share the blame.',
  },
  {
    prompt: 'Which statement best describes the post-revisionist view of the origins of the Cold War?',
    options: ['Both sides were suspicious', 'The USSR was mostly to blame', 'The USA was mostly to blame', 'Neither side had any influence'],
    answer: 'Both sides were suspicious',
    explanation: 'Post-revisionist historians see a shared responsibility, with mistrust and misunderstanding on both sides.',
  },
  {
    prompt: 'A newspaper editorial from a Western country in 1947 says "Governments friendly to Moscow have replaced elected ones in Eastern Europe." Why must a historian be careful when using it?',
    options: ['It was written too long ago to be of help', 'Newspapers do not contain any facts', 'It is one-sided and written to persuade', 'It does not name any single country'],
    answer: 'It is one-sided and written to persuade',
    explanation: 'The source is useful for Western opinion, but because it is one-sided it cannot alone show who caused the Cold War.',
  },
  {
    prompt: 'Which pair of dates is correct for the Berlin Wall?',
    options: ['Built in 1948, fell in 1961', 'Built in 1961, fell in 1989', 'Built in 1955, fell in 1990', 'Built in 1989, fell in 1961'],
    answer: 'Built in 1961, fell in 1989',
    explanation: 'Construction began on 13 August 1961 and the Wall fell on 9 November 1989.',
  },
];
