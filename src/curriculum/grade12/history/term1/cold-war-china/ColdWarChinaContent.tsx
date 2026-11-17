import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CHINA as C, dateText } from '../../_shared/coldWarFacts';
import { SourceBox } from '../../_shared/SourceBox';

export const learnSteps: LearnStep[] = [
  {
    title: 'Key events, 1949 to 1980',
    content: (
      <div className="space-y-4">
        <Timeline
          events={[
            { date: dateText(C.prc), title: 'The People\'s Republic of China', description: 'Mao Zedong proclaims a communist state after the Communist Party defeats the Nationalists, who retreat to Taiwan.' },
            { date: String(C.indiaWar.year), title: 'War with India', description: 'A border war in the Himalayas that China wins quickly.' },
            { date: dateText(C.atomicBomb), title: 'China tests an atomic bomb', description: 'China joins the nuclear powers.' },
            { date: `${C.culturalRevolution.from} to ${C.culturalRevolution.to}`, title: 'The Cultural Revolution', description: 'Mao mobilises young Red Guards against those he calls enemies of the revolution.' },
            { date: dateText(C.unSeat), title: 'China takes the UN seat', description: 'The People\'s Republic replaces Taiwan as China\'s representative at the United Nations.' },
            { date: C.nixonVisit.from + ' to ' + C.nixonVisit.to, title: 'President Nixon visits China', description: 'The first visit by a US president to the People\'s Republic.' },
            { date: dateText(C.maoDied), title: 'Mao Zedong dies', description: 'The Cultural Revolution ends.' },
            { date: String(C.reforms.year), title: 'Deng Xiaoping\'s reforms begin', description: 'China opens to markets and foreign trade; Special Economic Zones follow from ' + C.specialEconomicZones.year + '.' },
            { date: dateText(C.diplomaticRelations), title: 'Full US-China diplomatic relations', description: 'The two states exchange ambassadors.' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'China, the USSR and the Soviet split',
    content: (
      <div className="space-y-4">
        <Rule>At first China allied with the USSR. By the 1960s the two communist powers were rivals, which shows that the Cold War was not simply &ldquo;communism against capitalism&rdquo;.</Rule>
        <Worked
          title="Why did they fall out?"
          steps={[
            <>In 1950 China and the USSR signed a treaty of friendship, and China looked to Moscow for help.</>,
            <>Ideas divided them: Soviet leaders spoke of &ldquo;peaceful coexistence&rdquo; with the West, while Mao saw that as weakness.</>,
            <>Mao also wanted China to lead the communist world, not follow Moscow.</>,
            <>By 1969 there were armed clashes on the Soviet border. China now feared the USSR more than the USA.</>,
          ]}
        />
        <Mistake>Do not write that all communist states were allies. The Sino-Soviet split is the standard example that national interests and competing ideologies mattered as much as the two blocs.</Mistake>
      </div>
    ),
  },
  {
    title: 'The Cultural Revolution',
    content: (
      <div className="space-y-4">
        <Rule>The Cultural Revolution ({C.culturalRevolution.from} to {C.culturalRevolution.to}) was Mao&rsquo;s campaign to renew the revolution and strengthen his own authority.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Young people, the <strong>Red Guards</strong>, attacked teachers, officials and anything labelled &ldquo;old&rdquo;. Many schools and universities closed.</li>
          <li>Intellectuals and party members who were seen as too moderate were denounced and punished.</li>
          <li>The campaign disrupted the economy and the government, and it ended only with Mao&rsquo;s death in {C.maoDied.year}.</li>
        </ul>
        <SourceBox label="Source A" provenance="An original description written for this lesson, in the style of a Red Guard wall poster.">
          <p>&ldquo;Down with those who follow the old ways! Study the Chairman&rsquo;s thoughts and defend the revolution.&rdquo;</p>
        </SourceBox>
        <Worked title="Use the source" steps={[<>It was written by supporters of Mao, to rally and to threaten.</>, <>It shows the slogans and the pressure to conform, but not what happened to the people attacked.</>]} />
      </div>
    ),
  },
  {
    title: 'China and its neighbours',
    content: (
      <div className="space-y-4">
        <Rule>China used force and diplomacy to defend what it saw as its borders and its interests.</Rule>
        <ul className="space-y-1.5 text-left text-sm text-slate-700">
          <li><strong>Tibet:</strong> Chinese troops entered Tibet in 1950 and China took control.</li>
          <li><strong>India:</strong> a border war in {C.indiaWar.year} ended in a Chinese victory.</li>
          <li><strong>Vietnam:</strong> China backed North Vietnam against the USA, but the two later fought a short border war in 1979.</li>
          <li><strong>Taiwan:</strong> the Nationalist government on Taiwan was backed by the USA. China claims the island as its own territory.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'A superpower by 1976? New links with the USA',
    content: (
      <div className="space-y-4">
        <Rule>To judge whether China was a superpower, weigh its strengths against its weaknesses.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-slate-700"><strong className="text-emerald-700">Strengths</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>Atomic bomb ({C.atomicBomb.year}).</li><li>A seat at the United Nations ({C.unSeat.year}).</li><li>A huge population and army.</li></ul></div>
          <div className="rounded-xl bg-rose-50 p-4 text-sm text-slate-700"><strong className="text-rose-700">Weaknesses</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>A poor, disrupted economy.</li><li>Weaker technology than the USA and USSR.</li><li>Little global reach.</li></ul></div>
        </div>
        <Worked
          title="Why did China turn to the USA?"
          steps={[
            <>It feared the USSR after the border clashes of 1969.</>,
            <>The USA wanted China as a counterweight to the USSR and help in leaving Vietnam.</>,
            <>China needed trade and technology. Nixon visited in {C.nixonVisit.to.slice(-4)}, and full relations followed in {C.diplomaticRelations.year}.</>,
            <>After Mao&rsquo;s death Deng Xiaoping&rsquo;s reforms ({C.reforms.year}) opened the economy and began China&rsquo;s rise.</>,
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
          <>Give one reason why China and the USSR fell out.</>,
          <>Who were the Red Guards?</>,
          <>Name one strength and one weakness of China in 1976.</>,
          <>Why did China improve relations with the USA in the early 1970s?</>,
        ]}
        answers={[
          <>Any one of: disagreement over &ldquo;peaceful coexistence&rdquo;, Mao&rsquo;s wish to lead the communist world, border disputes.</>,
          <>Young supporters of Mao who attacked those seen as enemies of the revolution during the Cultural Revolution.</>,
          <>Strength: an atomic bomb or a UN seat. Weakness: a poor, disrupted economy.</>,
          <>It feared the USSR, and wanted trade and technology; the USA wanted a counterweight to the USSR.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'On what date did Mao Zedong proclaim the People\'s Republic of China?',
    options: ['1 January 1949', '16 October 1964', '1 October 1949', '9 September 1976'],
    answer: '1 October 1949',
    explanation: 'The People\'s Republic was proclaimed on 1 October 1949 after the Communist Party won the civil war. The Nationalists retreated to Taiwan.',
  },
  {
    prompt: 'Which statement best explains the Sino-Soviet split?',
    options: ['Mao would not follow Moscow', 'China joined NATO against the USSR', 'The USSR attacked China in 1950', 'China wanted to copy Soviet industry'],
    answer: 'Mao would not follow Moscow',
    explanation: 'Ideological disagreement, Mao\'s wish to lead the communist world and border disputes drove the two powers apart.',
  },
  {
    prompt: 'What was the main aim of the Cultural Revolution launched by Mao in 1966?',
    options: ['To renew the revolution and his power', 'To open China to foreign investors', 'To make peace with the USA at last', 'To end the rule of the Communist Party'],
    answer: 'To renew the revolution and his power',
    explanation: 'Mao used it to remove rivals and moderates and to keep the revolution "pure". It disrupted the economy and the government.',
  },
  {
    prompt: 'Who were the Red Guards?',
    options: ['The leaders of the Nationalist army', 'Soldiers who guarded the Great Wall', 'Soviet advisers sent to Beijing', 'Young people attacking "enemies"'],
    answer: 'Young people attacking "enemies"',
    explanation: 'The Red Guards, mostly students, carried out Mao\'s campaign by attacking teachers, officials and symbols of the "old" order.',
  },
  {
    prompt: 'Which event ended the Cultural Revolution?',
    options: ['Mao Zedong\'s death in 1976', 'The Sino-Indian War of 1962', 'Nixon\'s visit to China', 'China\'s first atomic bomb test'],
    answer: 'Mao Zedong\'s death in 1976',
    explanation: 'The campaign lost its driving force when Mao died on 9 September 1976, and it ended soon afterwards.',
  },
  {
    prompt: 'China fought a short border war in 1962. With which neighbour?',
    options: ['Japan', 'India', 'Mongolia', 'Korea'],
    answer: 'India',
    explanation: 'The Sino-Indian War of October to November 1962 was a border war in the Himalayas that China won quickly.',
  },
  {
    prompt: 'Why did China regard Taiwan as a problem in its foreign relations?',
    options: ['Taiwan had joined the Warsaw Pact', 'Taiwan attacked China in 1949', 'The USA backed it; China claimed it', 'Taiwan refused to trade with anyone'],
    answer: 'The USA backed it; China claimed it',
    explanation: 'The defeated Nationalists ruled Taiwan with American support, while the People\'s Republic claimed it as part of China.',
  },
  {
    prompt: 'In what way was China\'s weakness shown in 1976?',
    options: ['It had no seat at the United Nations', 'It had no nuclear weapons', 'It had no army', 'Its economy was poor and disrupted'],
    answer: 'Its economy was poor and disrupted',
    explanation: 'China had atomic weapons (1964) and a UN seat (1971), but the Cultural Revolution left a weak economy, which limited its claim to be a superpower.',
  },
  {
    prompt: 'Which of the following was an event of 1971 in China\'s relations with the world?',
    options: ['President Nixon visited Beijing', 'China took the UN seat', 'The USA and China swapped ambassadors', 'Deng Xiaoping began reforms'],
    answer: 'China took the UN seat',
    explanation: 'The UN seat came in October 1971. Nixon\'s visit was in February 1972, ambassadors followed in 1979 and Deng\'s reforms began in 1978.',
  },
  {
    prompt: 'Why did the USA want better relations with China in the early 1970s?',
    options: ['It wanted a check on the USSR', 'It wanted to hand Taiwan to the USSR', 'It wanted to join the Warsaw Pact', 'It wanted China to join NATO'],
    answer: 'It wanted a check on the USSR',
    explanation: 'Dividing the two communist powers helped the USA, and China\'s help was useful in ending the war in Vietnam.',
  },
  {
    prompt: 'Which event marked the first visit by a US president to the People\'s Republic of China?',
    options: ['President Truman in 1947', 'President Kennedy in 1962', 'President Carter in 1976', 'President Nixon in 1972'],
    answer: 'President Nixon in 1972',
    explanation: 'Nixon\'s February 1972 visit opened a new phase of relations, which led to full diplomatic relations on 1 January 1979.',
  },
  {
    prompt: 'What was the main effect of Deng Xiaoping\'s reforms that began in 1978?',
    options: ['China closed its borders to trade', 'China opened to markets and trade', 'China joined the Warsaw Pact', 'China gave up its nuclear weapons'],
    answer: 'China opened to markets and trade',
    explanation: 'Special Economic Zones and market reforms began China\'s rapid growth after Mao\'s death.',
  },
  {
    prompt: 'A Red Guard wall poster from 1966 shouts "Down with those who follow the old ways!" What does it tell a historian?',
    options: ['The exact number of people punished', 'The slogans and pressure to conform', 'The views of the victims of the campaign', 'The view of the American government'],
    answer: 'The slogans and pressure to conform',
    explanation: 'Written by supporters of Mao to rally and threaten, the poster shows the mood and the slogans but not the experience of the victims.',
  },
];
