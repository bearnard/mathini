import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { VIETNAM as V, dateText } from '../../_shared/coldWarFacts';
import { SourceBox } from '../../_shared/SourceBox';

export const learnSteps: LearnStep[] = [
  {
    title: 'Key events, 1954 to 1982',
    content: (
      <div className="space-y-4">
        <Timeline
          events={[
            { date: dateText(V.dienBienPhu), title: 'The French are defeated at Dien Bien Phu', description: 'Ho Chi Minh\'s forces end French colonial rule in the north.' },
            { date: `${V.genevaAccords.month} ${V.genevaAccords.year}`, title: 'The Geneva Accords', description: `Vietnam is divided at the ${V.parallel}th parallel: a communist North and a US-backed South. Elections planned for 1956 are never held.` },
            { date: `${V.nlf.month} ${V.nlf.year}`, title: 'The National Liberation Front is formed', description: 'The communist-led rebels in the South become known as the Viet Cong.' },
            { date: dateText(V.tonkinResolution), title: 'The Gulf of Tonkin Resolution', description: 'The US Congress gives the president wide powers to act in Vietnam.' },
            { date: dateText(V.marinesLanded), title: 'US combat troops arrive', description: 'The first Marines land at Da Nang as the bombing of the North grows.' },
            { date: `${V.tet.month} ${V.tet.year}`, title: 'The Tet Offensive', description: 'A surprise attack on towns across South Vietnam shocks American opinion.' },
            { date: dateText(V.kentState), title: 'Kent State', description: `Troops shoot ${V.kentState.killed} students at an anti-war protest in the USA.` },
            { date: dateText(V.parisAccords), title: 'The Paris Peace Accords', description: 'The USA agrees to withdraw its forces.' },
            { date: dateText(V.saigonFell), title: 'Saigon falls', description: `North Vietnam takes the capital of the South; Vietnam is formally reunified in ${V.reunified.month} ${V.reunified.year}.` },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Background: from French colony to divided country',
    content: (
      <div className="space-y-4">
        <Rule>Vietnam&rsquo;s war was both a war for national independence and a Cold War conflict.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>France ruled Vietnam as a colony. After the Second World War Ho Chi Minh&rsquo;s Viet Minh fought for independence and defeated the French in {V.dienBienPhu.year}.</li>
          <li>The Geneva Accords divided the country at the {V.parallel}th parallel until elections could unite it. The elections never took place.</li>
          <li>The North was communist under Ho Chi Minh. The South, under Ngo Dinh Diem, was backed by the USA.</li>
          <li>The USA feared the &ldquo;domino theory&rdquo;: that if one state fell to communism its neighbours would follow.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Three phases of the war',
    content: (
      <div className="space-y-4">
        <Rule>CAPS describes three phases. Knowing them gives order to your essay.</Rule>
        <Worked
          title="From insurgency to American withdrawal"
          steps={[
            <><strong>1957 to 1965:</strong> a struggle between the South Vietnamese army and communist-trained rebels, the Viet Cong. American advisers and money supported the South.</>,
            <><strong>1965 to 1969:</strong> the war becomes a North Vietnam versus USA conflict. The USA bombs the North and sends hundreds of thousands of troops. The Tet Offensive in {V.tet.year} shocked American opinion and showed that the end was not near.</>,
            <><strong>1969 to 1975:</strong> President Nixon &ldquo;Vietnamises&rdquo; the war, handing the fighting to the South while US troops leave. The Paris Peace Accords ({V.parisAccords.year}) end US involvement and Saigon falls in {V.saigonFell.year}.</>,
          ]}
        />
        <Mistake>Do not write that the USA lost every battle. Its forces often won on the ground; it lost because it could not win the support of the people or keep the war going at home.</Mistake>
      </div>
    ),
  },
  {
    title: 'Two perspectives, and a global issue',
    content: (
      <div className="space-y-4">
        <Rule>The same war looked different to the Americans and to the Vietnamese, and it became a global issue.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4 text-sm text-slate-700"><strong className="text-indigo-700">The American view</strong><p className="mt-1">A war to contain communism and keep a promise to an ally. Public support fell as casualties and costs grew and as television showed the fighting.</p></div>
          <div className="rounded-xl bg-rose-50 p-4 text-sm text-slate-700"><strong className="text-rose-700">The Vietnamese view</strong><p className="mt-1">A long struggle for independence, first against France and then against the USA. Guerrilla tactics, supply routes and the support of many villagers helped the weaker side.</p></div>
        </div>
        <p className="text-left text-sm text-slate-700">The war drew in other powers: the USSR and China supplied the North, and protests against the war took place far beyond the USA.</p>
        <SourceBox label="Source A" provenance="An original description written for this lesson, in the style of an American news report of early 1968.">
          <p>&ldquo;Viet Cong fighters attacked towns across the South, and the American public asked how the war could be nearly won when the enemy could still do this.&rdquo;</p>
        </SourceBox>
        <Worked title="Use the source" steps={[<>It reflects American public opinion after Tet.</>, <>It does not say that the Tet Offensive failed militarily for the Viet Cong, so it shows reaction, not the military result.</>]} />
      </div>
    ),
  },
  {
    title: 'Withdrawal, protest and memory',
    content: (
      <div className="space-y-4">
        <Rule>The USA left Vietnam under pressure from the battlefield and from protest at home. The war is remembered differently in the two countries.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Student and anti-war movements grew in the USA. In {V.kentState.year} troops shot {V.kentState.killed} students at Kent State.</li>
          <li>The Paris Peace Accords were signed on {dateText(V.parisAccords)}. In {V.saigonFell.year} North Vietnamese forces took Saigon.</li>
          <li>In the USA the Vietnam Veterans Memorial in Washington ({V.memorial.year}) honours those who served and died. In Vietnam the war is remembered as a war of resistance, and is often called the American War.</li>
        </ul>
        <Mistake>The Paris Accords ended American involvement, not the war. Fighting continued until Saigon fell in 1975.</Mistake>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Where was Vietnam divided in 1954?</>,
          <>Name the three phases of the war in CAPS terms.</>,
          <>Why was the Tet Offensive a turning point?</>,
          <>Give one way in which the war is remembered in the USA and one in Vietnam.</>,
        ]}
        answers={[
          <>At the 17th parallel.</>,
          <>1957 to 1965 (South Vietnam against the Viet Cong), 1965 to 1969 (North Vietnam against the USA), 1969 to 1975 (US withdrawal).</>,
          <>It shocked American opinion, which had been told that the end was near, and support for the war fell.</>,
          <>USA: the Vietnam Veterans Memorial. Vietnam: as a war of resistance, the American War.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'At which parallel was Vietnam divided by the Geneva Accords of 1954?',
    options: ['The 38th parallel', 'The 49th parallel', 'The 17th parallel', 'The 10th parallel'],
    answer: 'The 17th parallel',
    explanation: 'The 17th parallel separated communist North Vietnam from the US-backed South. The 38th parallel divided Korea.',
  },
  {
    prompt: 'What was the "domino theory" held by American leaders?',
    options: ['Neighbours would follow one that fell', 'Small states fall when large states fight', 'Democracy spreads from state to state', 'Trade follows the flag of a great power'],
    answer: 'Neighbours would follow one that fell',
    explanation: 'The domino theory held that if one state fell to communism its neighbours would follow. It explained why the USA felt it had to defend South Vietnam.',
  },
  {
    prompt: 'Who were the Viet Cong?',
    options: ['The regular army of South Vietnam', 'American advisers in the North', 'French colonial troops in Hanoi', 'Communist rebels in South Vietnam'],
    answer: 'Communist rebels in South Vietnam',
    explanation: 'The National Liberation Front, known as the Viet Cong, fought the South Vietnamese government with support from the North.',
  },
  {
    prompt: 'What did the Gulf of Tonkin Resolution of August 1964 give the American president?',
    options: ['A promise to end the war', 'Wide powers to act in Vietnam', 'A ceasefire with the North', 'Control of the United Nations'],
    answer: 'Wide powers to act in Vietnam',
    explanation: 'Congress allowed the president to use force in Vietnam without a declaration of war, which led to the escalation of 1965.',
  },
  {
    prompt: 'Which statement describes the phase of the war from 1965 to 1969?',
    options: ['A struggle limited to a few villages', 'A peaceful time of negotiation', 'A war between China and the USSR', 'North Vietnam against the USA'],
    answer: 'North Vietnam against the USA',
    explanation: 'In this phase the USA bombed the North and sent large numbers of troops, so the war became a struggle between the two states.',
  },
  {
    prompt: 'Why was the Tet Offensive of January 1968 a turning point?',
    options: ['It ended the war within a few weeks', 'It brought the USSR into the war', 'It shocked American opinion', 'It gave the USA a decisive victory'],
    answer: 'It shocked American opinion',
    explanation: 'Although the attacks failed militarily, they showed that the end was not near and turned many Americans against the war.',
  },
  {
    prompt: 'What was President Nixon\'s policy of "Vietnamisation"?',
    options: ['Sending more American troops to the North', 'Handing the fighting to the South', 'Giving the North control of the South', 'Ending all aid to South Vietnam'],
    answer: 'Handing the fighting to the South',
    explanation: 'From 1969 Nixon reduced American troop numbers and trained and equipped the South Vietnamese army to fight on its own.',
  },
  {
    prompt: 'What happened at Kent State University on 4 May 1970?',
    options: ['The Tet Offensive began in the north', 'The Paris Accords were signed there', 'The Viet Cong took Saigon that day', 'Troops shot four protesting students'],
    answer: 'Troops shot four protesting students',
    explanation: 'The shootings shocked the USA and became a symbol of the divisions that the war had caused.',
  },
  {
    prompt: 'What did the Paris Peace Accords of January 1973 achieve?',
    options: ['The immediate end of fighting between North and South', 'The permanent division of Vietnam', 'The USA agreed to withdraw its forces', 'The surrender of North Vietnam'],
    answer: 'The USA agreed to withdraw its forces',
    explanation: 'The accords ended American involvement. Fighting between North and South continued until Saigon fell on 30 April 1975.',
  },
  {
    prompt: 'Which statement best explains why the USA lost the war although it had far stronger forces?',
    options: ['It lost nearly every battle on the ground', 'The USSR sent troops to defend the North', 'It could not win support at home', 'The USA did not use its air power'],
    answer: 'It could not win support at home',
    explanation: 'A strong army could not win a war against guerrillas supported by many villagers, while support for the war collapsed in the USA.',
  },
  {
    prompt: 'How is the war remembered in Vietnam?',
    options: ['As a civil war with no foreign part', 'As a war that France won in the end', 'As a war of resistance', 'As a short border conflict'],
    answer: 'As a war of resistance',
    explanation: 'Vietnamese memory stresses the long struggle for independence against France and then the USA.',
  },
  {
    prompt: 'The Vietnam Veterans Memorial in Washington, dedicated in 1982, mainly shows how the war is remembered in which way?',
    options: ['It celebrates a great military victory', 'It marks the day the war began', 'It honours Ho Chi Minh and his army', 'It honours Americans who died'],
    answer: 'It honours Americans who died',
    explanation: 'The memorial lists the names of the American dead and is a place of remembrance, not a victory monument.',
  },
  {
    prompt: 'An American news report from early 1968 says the public asked how the war could be nearly won when the enemy could still attack towns. What does the source show best?',
    options: ['American opinion after the Tet Offensive', 'The military result of Tet for the Viet Cong', 'The view of North Vietnamese leaders', 'The cost of the war in Vietnamese lives'],
    answer: 'American opinion after the Tet Offensive',
    explanation: 'It reports the reaction of the American public. It does not give the military result of the offensive or the Vietnamese view.',
  },
  {
    prompt: 'Why is the Vietnam War described as a global issue?',
    options: ['It was fought on several continents at once', 'Other powers supplied the sides', 'It involved no outside countries at all', 'Asian states took an interest in it'],
    answer: 'Other powers supplied the sides',
    explanation: 'It was global because other powers supplied the sides (the USSR and China supplied the North, American allies supported the USA) and anti-war protests grew in many countries.',
  },
];
