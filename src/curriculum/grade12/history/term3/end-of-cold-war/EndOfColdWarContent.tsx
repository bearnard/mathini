import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { END_OF_COLD_WAR as E, dateText } from '../../_shared/newWorldOrderFacts';
import { SourceBox } from '../../_shared/SourceBox';

export const learnSteps: LearnStep[] = [
  {
    title: 'Key events, 1985 to 1994',
    content: (
      <div className="space-y-4">
        <Timeline
          events={[
            { date: `${E.gorbachev.month} ${E.gorbachev.year}`, title: 'Gorbachev takes power', description: 'He begins reforms known as glasnost (openness) and perestroika (restructuring).' },
            { date: dateText(E.newYorkAccords), title: 'The New York Accords', description: 'South Africa, Angola and Cuba agree on Cuban withdrawal and Namibian independence.' },
            { date: dateText(E.afghanistan), title: 'Soviet troops leave Afghanistan', description: 'The Soviet Union ends a war it could not win.' },
            { date: dateText(E.polishElection), title: 'Poland votes', description: 'In semi-free elections, Solidarity candidates win the seats open to them.' },
            { date: dateText(E.wallFell), title: 'The Berlin Wall opens', description: 'East Germans cross freely; communist governments across Eastern Europe fall within months.' },
            { date: dateText(E.deKlerkSpeech), title: 'South Africa: organisations unbanned', description: 'F.W. de Klerk announces the unbanning of the ANC, PAC and SACP; Mandela is freed on 11 February 1990.' },
            { date: dateText(E.reunification), title: 'Germany is reunified', description: 'East and West Germany become one state.' },
            { date: dateText(E.gorbachevResigned), title: 'The Soviet Union ends', description: 'Gorbachev resigns; the Soviet Union ceases to exist the next day.' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Gorbachev\u2019s reforms',
    content: (
      <div className="space-y-4">
        <Rule>When Gorbachev became leader in {E.gorbachev.month} {E.gorbachev.year}, the Soviet economy was weak and the arms race was costly. He tried to reform communism, not to end it.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Glasnost</strong> (openness): more freedom to criticise and to publish.</li>
          <li><strong>Perestroika</strong> (restructuring): changes to the economy, including some private enterprise.</li>
          <li>He ended the war in Afghanistan, and told East European leaders that the Soviet army would no longer prop up their governments.</li>
        </ul>
        <Mistake>The reforms did not set out to break up the Soviet Union. Historians debate how far they caused its end, or whether deeper weaknesses would have done so anyway.</Mistake>
      </div>
    ),
  },
  {
    title: 'Poland and the events of 1989',
    content: (
      <div className="space-y-4">
        <Rule>The year 1989 was one of rapid change in Eastern Europe. Know the main stages.</Rule>
        <Worked
          title="From Solidarity to the Wall"
          steps={[
            <><strong>Poland:</strong> a strike at the Gdansk shipyard in {E.solidarity.month} {E.solidarity.year} led to Solidarity, a free trade union led by Lech Walesa. It was banned for years but returned. In the elections of {dateText(E.polishElection)}, Solidarity candidates won the seats open to them.</>,
            <><strong>Other states:</strong> Hungary opened its border to Austria, and Czechoslovakia and Romania also changed government late in 1989. In Romania the change was violent.</>,
            <><strong>Germany:</strong> the Berlin Wall opened on {dateText(E.wallFell)} and Germany was reunified on {dateText(E.reunification)}.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The end of the Soviet Union',
    content: (
      <div className="space-y-4">
        <Rule>The Soviet Union fell apart in 1991. Several causes worked together.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Economic weakness and the cost of the arms race.</li>
          <li>Demands for independence in republics such as the Baltic states.</li>
          <li>A hardline coup against Gorbachev from 19 to 21 August 1991 failed, which weakened the central government.</li>
          <li>Gorbachev resigned on {dateText(E.gorbachevResigned)}, and the Soviet Union ceased to exist the next day.</li>
        </ul>
        <p className="text-left text-sm text-slate-600">To judge how far the reforms were responsible, weigh the reforms against the economy, nationalism and pressure from the West.</p>
      </div>
    ),
  },
  {
    title: 'The turning point for South Africa',
    content: (
      <div className="space-y-4">
        <Rule>The end of the Cold War changed South Africa&rsquo;s position. Historians give weight to different causes.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-slate-700"><strong className="text-emerald-700">Links to the Cold War</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>The New York Accords ({E.newYorkAccords.year}) and Namibian independence ({E.namibia.year}) ended the regional war.</li><li>The fear of communism, used to defend apartheid, lost force.</li></ul></div>
          <div className="rounded-xl bg-amber-50 p-4 text-sm text-slate-700"><strong className="text-amber-700">Other causes</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>Internal resistance and the cost of repression.</li><li>Sanctions and economic pressure.</li></ul></div>
        </div>
        <p className="text-left text-sm text-slate-700">De Klerk announced the unbanning of organisations on {dateText(E.deKlerkSpeech)} and Mandela was freed on {dateText(E.mandelaReleased)}. The first democratic election was held on {dateText(E.election)}. Cuito Cuanavale is also given weight by some accounts, and others dispute it (see the Angola lesson).</p>
        <SourceBox label="Source D" provenance="An original description written for this lesson, in the style of a 1989 newspaper report from Berlin.">
          <p>&ldquo;On Thursday night crowds gathered at the border posts. Guards, unsure of their orders, opened the gates, and people walked through in the dark.&rdquo;</p>
        </SourceBox>
        <Worked
          title="Judge its use"
          steps={[
            <>It describes the first night at the border from an observer&rsquo;s view.</>,
            <>It does not explain the political decisions behind the opening.</>,
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
          <>What were glasnost and perestroika?</>,
          <>When did the Berlin Wall open?</>,
          <>Name two causes of the end of the Soviet Union.</>,
          <>Give one link between the end of the Cold War and the changes in South Africa.</>,
        ]}
        answers={[
          <>Openness and restructuring: Gorbachev&rsquo;s reforms of politics and the economy.</>,
          <>On {dateText(E.wallFell)}.</>,
          <>Any two of: economic weakness, nationalism in the republics, the failed coup, the cost of the arms race.</>,
          <>The regional war ended with the New York Accords, and the fear of communism lost force.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What was glasnost?',
    options: ['Openness and freedom to criticise', 'A plan to restructure farm production', 'A treaty to reduce nuclear weapons', 'A military alliance of communist states'],
    answer: 'Openness and freedom to criticise',
    explanation: 'Glasnost meant openness: more freedom to publish and to criticise the government in the Soviet Union.',
  },
  {
    prompt: 'What was perestroika?',
    options: ['A pact among the Soviet republics', 'An agreement to end the war in Angola', 'Restructuring of the Soviet economy', 'A secret police force in the USSR'],
    answer: 'Restructuring of the Soviet economy',
    explanation: 'Perestroika meant restructuring, including some private enterprise, to improve the weak Soviet economy.',
  },
  {
    prompt: 'What did Gorbachev tell East European leaders in the late 1980s?',
    options: ['Soviet troops would invade any reformer', 'Soviet troops would not prop them up', 'They must copy the Soviet reforms exactly', 'They must leave the Warsaw Pact at once'],
    answer: 'Soviet troops would not prop them up',
    explanation: 'Gorbachev ended the use of Soviet force to prop up communist governments, which allowed change in 1989.',
  },
  {
    prompt: 'What was Solidarity in Poland?',
    options: ['A free trade union led by Lech Walesa', 'A party loyal to the Polish government', 'A military force of the Warsaw Pact', 'A group set up by the Soviet army'],
    answer: 'A free trade union led by Lech Walesa',
    explanation: 'Solidarity grew from the Gdansk shipyard strike of 1980 and became a mass movement against communist rule.',
  },
  {
    prompt: 'What happened in the Polish elections of 4 June 1989?',
    options: ['Solidarity won the seats open to it', 'The communist party won every seat', 'Solidarity was banned from standing', 'The elections were cancelled by the army'],
    answer: 'Solidarity won the seats open to it',
    explanation: 'The elections were only semi-free, but Solidarity won the seats it could contest, which weakened communist rule.',
  },
  {
    prompt: 'When did the Berlin Wall open?',
    options: ['13 August 1961', '9 November 1989', '3 October 1990', '25 December 1991'],
    answer: '9 November 1989',
    explanation: 'The wall opened on 9 November 1989. It had been built on 13 August 1961, and Germany was reunified on 3 October 1990.',
  },
  {
    prompt: 'What happened to Germany on 3 October 1990?',
    options: ['The Berlin Wall was first built', 'Germany joined the Warsaw Pact', 'The Soviet Union was dissolved', 'The two Germanys were reunified'],
    answer: 'The two Germanys were reunified',
    explanation: 'Germany was reunified on 3 October 1990, less than a year after the Berlin Wall opened.',
  },
  {
    prompt: 'What was the result of the failed coup of August 1991?',
    options: ['It removed the Baltic states from the USSR', 'It restored the old communist system', 'It ended the war in Afghanistan', 'It weakened the central Soviet government'],
    answer: 'It weakened the central Soviet government',
    explanation: 'The coup by hardliners failed in three days, and Gorbachev\'s authority and the central government were weakened.',
  },
  {
    prompt: 'When did Gorbachev resign?',
    options: ['25 December 1989', '9 November 1989', '2 February 1990', '25 December 1991'],
    answer: '25 December 1991',
    explanation: 'Gorbachev resigned on 25 December 1991, and the Soviet Union ceased to exist the next day.',
  },
  {
    prompt: 'Which statement about the end of the Soviet Union is fair?',
    options: ['Reforms, economy and nationalism had a role', 'It was caused by the reforms and nothing else', 'It was caused by American force alone', 'It was a surprise with no deeper causes'],
    answer: 'Reforms, economy and nationalism had a role',
    explanation: 'Historians weigh the reforms against economic weakness, nationalism and outside pressure rather than naming a single cause.',
  },
  {
    prompt: 'Which event ended the regional war and led to Namibian independence?',
    options: ['The Soweto uprising of 1976', 'The 1988 New York Accords', 'The Treaty of Versailles', 'The CODESA talks of 1991'],
    answer: 'The 1988 New York Accords',
    explanation: 'South Africa, Angola and Cuba signed the accords on 22 December 1988, and Namibia became independent on 21 March 1990.',
  },
  {
    prompt: 'How did the end of the Cold War change South Africa\'s position?',
    options: ['Western states began to support apartheid', 'The Soviet Union began to arm the ANC', 'Sanctions against apartheid were lifted', 'The fear of communism lost its force'],
    answer: 'The fear of communism lost its force',
    explanation: 'The government had defended apartheid as a defence against communism. Once the Cold War ended, this argument weakened. Other causes also mattered.',
  },
  {
    prompt: 'A 1989 report says guards opened the gates and people walked through in the dark. What does it show a historian?',
    options: ['What happened at the border that night', 'Why the leaders chose to open the border', 'What the whole country thought of it', 'How the Soviet leader planned the event'],
    answer: 'What happened at the border that night',
    explanation: 'The report is an observer\'s account of one scene, so it shows what happened there but not the political decisions behind it.',
  },
];
