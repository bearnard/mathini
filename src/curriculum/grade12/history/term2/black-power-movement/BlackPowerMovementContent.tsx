import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { BLACK_POWER as B, CIVIL_RIGHTS as R, dateText } from '../../_shared/civilSocietyFacts';
import { SourceBox } from '../../_shared/SourceBox';

export const learnSteps: LearnStep[] = [
  {
    title: 'Key events, 1964 to 1968',
    content: (
      <div className="space-y-4">
        <Timeline
          events={[
            { date: `${B.malcolmLeftNoi.year}`, title: 'Malcolm X leaves the Nation of Islam', description: 'He changes some of his views on race after a pilgrimage to Mecca.' },
            { date: dateText(B.malcolmKilled), title: 'Malcolm X is assassinated', description: 'He is shot at a meeting in New York.' },
            { date: `${B.watts.month} ${B.watts.year}`, title: 'The Watts uprising', description: 'Days of unrest in a Black suburb of Los Angeles, soon after the Voting Rights Act.' },
            { date: `${B.slogan.month} ${B.slogan.year}`, title: '\u201CBlack Power\u201D', description: 'Stokely Carmichael uses the slogan during a march in Mississippi.' },
            { date: `${B.panthers.month} ${B.panthers.year}`, title: 'The Black Panther Party', description: 'Huey Newton and Bobby Seale found the party in Oakland, California.' },
            { date: dateText(R.kingKilled), title: 'Martin Luther King is assassinated', description: 'Unrest follows in many American cities.' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Why did Black Power arise?',
    content: (
      <div className="space-y-4">
        <Rule>Black Power grew out of frustration. Many Black Americans felt that the Civil Rights Acts of {R.civilRightsAct.year} and {R.votingRightsAct.year} had changed the law but not daily life.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>In Northern cities there was no segregation law to repeal, but there were poor housing, few jobs and police violence.</li>
          <li>Unrest such as the Watts uprising ({B.watts.month} {B.watts.year}) showed anger in the cities.</li>
          <li>Some activists, tired of violence against non-violent marchers, argued that Black communities should control their own organisations and defend themselves.</li>
        </ul>
        <Mistake>Black Power was not one organisation or one plan. It included political groups, cultural movements and community programmes that did not all agree.</Mistake>
      </div>
    ),
  },
  {
    title: 'Malcolm X and Stokely Carmichael',
    content: (
      <div className="space-y-4">
        <Rule>Two leaders shaped the ideas of Black Power. Know what each stood for and how they differed from Martin Luther King.</Rule>
        <Worked
          title="Two voices"
          steps={[
            <><strong>Malcolm X</strong> was a spokesman for the Nation of Islam. He urged Black pride, self-reliance and self-defence. After he left the Nation of Islam in {B.malcolmLeftNoi.year} his views on race changed. He was assassinated in February {B.malcolmKilled.year}.</>,
            <><strong>Stokely Carmichael</strong> led the Student Non-Violent Coordinating Committee (SNCC). In {B.slogan.month} {B.slogan.year} he used the slogan &ldquo;Black Power&rdquo;, calling for Black political and economic strength and pride.</>,
            <><strong>Difference from King:</strong> King sought change through non-violence and integration. Black Power leaders stressed community control, pride and the right to self-defence.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The Black Panthers',
    content: (
      <div className="space-y-4">
        <Rule>The Black Panther Party was founded by Huey Newton and Bobby Seale in Oakland in {B.panthers.month} {B.panthers.year}.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Its Ten-Point Programme demanded jobs, housing, education and an end to police brutality.</li>
          <li>Members patrolled streets, armed, to monitor the police.</li>
          <li>The party ran free breakfast programmes for children and health clinics in poor communities.</li>
          <li>The government agency, the FBI, targeted the party with spying and arrests, and some members were killed. The party also split.</li>
        </ul>
        <p className="text-left text-sm text-slate-600">Historians judge the Panthers differently: some stress their community work, others their armed image and the conflicts with the police.</p>
      </div>
    ),
  },
  {
    title: 'Gains, limits and reading sources',
    content: (
      <div className="space-y-4">
        <Rule>Judge Black Power by what it changed in the short and the long term.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-slate-700"><strong className="text-emerald-700">Gains</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>A stronger sense of Black identity and pride, for example the idea that &ldquo;Black is beautiful&rdquo;.</li><li>Black studies courses and community programmes.</li></ul></div>
          <div className="rounded-xl bg-amber-50 p-4 text-sm text-slate-700"><strong className="text-amber-700">Limits</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>Many white Americans feared it, and it lost some support.</li><li>State attacks and splits weakened the movement.</li></ul></div>
        </div>
        <SourceBox label="Source B" provenance="An original description written for this lesson, in the style of a 1967 community newsletter.">
          <p>&ldquo;Every morning this month, volunteers will feed local children before school. We do this because no one else is doing it.&rdquo;</p>
        </SourceBox>
        <Worked
          title="Judge its use"
          steps={[
            <>It shows what the community programme did and why the group said it did it.</>,
            <>It comes from the group itself, so it does not show how outsiders such as the police saw it.</>,
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
          <>Who used the slogan &ldquo;Black Power&rdquo; in {B.slogan.year}?</>,
          <>Name two community programmes run by the Black Panthers.</>,
          <>How did Black Power differ from the approach of Martin Luther King?</>,
          <>Give one gain and one limit of the Black Power movement.</>,
        ]}
        answers={[
          <>Stokely Carmichael.</>,
          <>Free breakfast programmes for children and health clinics.</>,
          <>King stressed non-violence and integration; Black Power leaders stressed community control, pride and self-defence.</>,
          <>Gain: Black pride or Black studies. Limit: government attacks, splits or fear among white Americans.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Why did many Black Americans turn to Black Power in the mid-1960s?',
    options: ['The new laws had not changed daily life', 'The Civil Rights Acts had been repealed', 'Segregation had ended in every city', 'Non-violent protest had been banned by law'],
    answer: 'The new laws had not changed daily life',
    explanation: 'Many felt the Civil Rights Acts changed the law but not poverty, housing, jobs or police violence in their own cities.',
  },
  {
    prompt: 'Who used the slogan "Black Power" in June 1966?',
    options: ['Stokely Carmichael (SNCC)', 'Martin Luther King Jr (SCLC)', 'Rosa Parks (Montgomery)', 'President Lyndon Johnson'],
    answer: 'Stokely Carmichael (SNCC)',
    explanation: 'Carmichael, a leader of SNCC, used the slogan during a march in Mississippi in June 1966.',
  },
  {
    prompt: 'What did Malcolm X urge before he left the Nation of Islam?',
    options: ['Total integration into white society', 'Voting for the political parties of the day', 'Black pride, self-reliance and self-defence', 'A boycott of buses in southern cities'],
    answer: 'Black pride, self-reliance and self-defence',
    explanation: 'As a spokesman for the Nation of Islam he stressed pride, self-reliance and the right to defend oneself.',
  },
  {
    prompt: 'When was Malcolm X assassinated?',
    options: ['December 1955', 'August 1963', 'April 1968', 'February 1965'],
    answer: 'February 1965',
    explanation: 'Malcolm X was shot at a meeting in New York on 21 February 1965, after he had left the Nation of Islam in 1964.',
  },
  {
    prompt: 'Who founded the Black Panther Party in Oakland in 1966?',
    options: ['Stokely Carmichael and Malcolm X', 'Martin Luther King and Rosa Parks', 'Medgar Evers and Thurgood Marshall', 'Huey Newton and Bobby Seale'],
    answer: 'Huey Newton and Bobby Seale',
    explanation: 'The two founded the party in Oakland, California, in October 1966.',
  },
  {
    prompt: 'Which of these was a community programme of the Black Panthers?',
    options: ['A nationwide bus service', 'Free breakfast for children', 'A network of private schools', 'A bank lending to farmers'],
    answer: 'Free breakfast for children',
    explanation: 'The breakfast programme and health clinics were among the best-known community programmes of the party.',
  },
  {
    prompt: 'What did the Black Panthers\' armed street patrols aim to do?',
    options: ['Win seats in the national parliament', 'Monitor the police in their streets', 'Protect the buses during the boycott', 'Guard the schools of white suburbs'],
    answer: 'Monitor the police in their streets',
    explanation: 'The Panthers said that patrols were needed to monitor police behaviour in Black communities.',
  },
  {
    prompt: 'How did the FBI treat the Black Panther Party?',
    options: ['It gave the party money for its clinics', 'It helped the party recruit members', 'It left the party entirely alone', 'It spied on the party and its members'],
    answer: 'It spied on the party and its members',
    explanation: 'The FBI targeted the party with spying, arrests and other action, which together with internal splits weakened it.',
  },
  {
    prompt: 'How did Black Power differ from the approach of Martin Luther King?',
    options: ['It stressed obeying segregation laws', 'It rejected pride in Black culture', 'It ended all political activity', 'It urged self-reliance and pride'],
    answer: 'It urged self-reliance and pride',
    explanation: 'King sought change through non-violence and integration, while Black Power leaders stressed pride, community control and the right to defend oneself.',
  },
  {
    prompt: 'Which was a lasting gain of the Black Power movement?',
    options: ['The end of every form of inequality', 'A separate Black state inside America', 'The repeal of the Voting Rights Act', 'A stronger sense of Black identity'],
    answer: 'A stronger sense of Black identity',
    explanation: 'Ideas such as "Black is beautiful" and Black studies courses were lasting gains, although inequality remained.',
  },
  {
    prompt: 'Which was a limit on the Black Power movement?',
    options: ['State attacks and splits in groups', 'A shortage of young people to join', 'Support from the white majority', 'A ban on Black newspapers in cities'],
    answer: 'State attacks and splits in groups',
    explanation: 'Spying, arrests and disagreements among leaders weakened the groups, and many white Americans feared them.',
  },
  {
    prompt: 'A 1967 community newsletter says volunteers will feed local children each morning. What does it show a historian?',
    options: ['How the local police saw the group', 'How many children ate each morning', 'What the group did, in its own words', 'What the national government thought'],
    answer: 'What the group did, in its own words',
    explanation: 'The source comes from the group itself, so it shows its own aims and claims, not the view of outsiders.',
  },
];
