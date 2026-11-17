import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Timeline from '../../../../../components/subjects/Timeline';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CIVIL_RIGHTS as R, dateText } from '../../_shared/civilSocietyFacts';
import { SourceBox } from '../../_shared/SourceBox';

export const learnSteps: LearnStep[] = [
  {
    title: 'Key events, 1954 to 1968',
    content: (
      <div className="space-y-4">
        <Timeline
          events={[
            { date: dateText(R.brown), title: 'Brown v. Board of Education', description: 'The Supreme Court rules that segregated public schools are unconstitutional.' },
            { date: `${dateText(R.boycottStart)} to ${dateText(R.boycottEnd)}`, title: 'The Montgomery bus boycott', description: 'After Rosa Parks\'s arrest on 1 December 1955, Black residents boycott the city\'s buses for over a year.' },
            { date: `${R.littleRock.month} ${R.littleRock.year}`, title: 'Little Rock', description: `${R.littleRockStudents} Black students enter Central High School under the protection of federal troops.` },
            { date: dateText(R.greensboro), title: 'The Greensboro sit-ins', description: 'Students sit at a whites-only lunch counter and refuse to leave; sit-ins spread across the South.' },
            { date: dateText(R.marchOnWashington), title: 'The March on Washington', description: 'A huge peaceful march ends at the Lincoln Memorial, where Martin Luther King speaks.' },
            { date: dateText(R.civilRightsAct), title: 'The Civil Rights Act', description: 'Segregation in public places and discrimination in jobs are outlawed.' },
            { date: `${dateText(R.bloodySunday)} to ${dateText(R.selmaEnd)}`, title: 'Selma to Montgomery', description: 'Marchers demanding the vote are attacked on "Bloody Sunday"; a later march reaches Montgomery.' },
            { date: dateText(R.votingRightsAct), title: 'The Voting Rights Act', description: 'Barriers to Black voting, such as literacy tests, are outlawed.' },
            { date: dateText(R.kingKilled), title: 'Martin Luther King is assassinated', description: 'He is shot in Memphis, Tennessee.' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Background, King and non-violence',
    content: (
      <div className="space-y-4">
        <Rule>In the Southern states, laws separated Black and white Americans in schools, buses and public places, and Black citizens were kept from voting. The Civil Rights Movement set out to change this.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>The movement grew from churches, student groups and organisations such as the NAACP and the Southern Christian Leadership Conference ({R.sclc.year}).</li>
          <li><strong>Martin Luther King Jr</strong> became its best-known leader. He taught non-violent protest and was influenced by <strong>Mahatma Gandhi</strong>&rsquo;s passive resistance in India.</li>
          <li>Civil disobedience meant breaking unjust laws peacefully and accepting the punishment, to show the injustice to the country and the world.</li>
        </ul>
        <Mistake>Non-violent does not mean passive in the everyday sense. Boycotts, sit-ins and marches were planned, disciplined and often risky for those who took part.</Mistake>
      </div>
    ),
  },
  {
    title: 'Forms of protest',
    content: (
      <div className="space-y-4">
        <Rule>The movement used several forms of protest. For each, know what happened and what it achieved.</Rule>
        <Worked
          title="Four examples"
          steps={[
            <><strong>Montgomery bus boycott ({R.boycottStart.year} to {R.boycottEnd.year}):</strong> Black residents walked or shared cars for over a year. The bus company lost income and the Supreme Court ruled that segregation on buses was unconstitutional.</>,
            <><strong>Sit-ins ({R.greensboro.year}):</strong> students occupied seats at whites-only lunch counters. They were arrested or abused but the protests spread.</>,
            <><strong>Birmingham ({R.birmingham.year}) and the march on Washington ({R.marchOnWashington.year}):</strong> mass marches, including by children, drew national attention to police violence, and the Lincoln Memorial march showed broad support for a civil rights law.</>,
            <><strong>Selma ({R.bloodySunday.year}):</strong> the attack on marchers on &ldquo;Bloody Sunday&rdquo; shocked the country and led to the Voting Rights Act.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Little Rock: school desegregation',
    content: (
      <div className="space-y-4">
        <Rule>After the Supreme Court ruled in {R.brown.year} that segregated schools were unconstitutional, many white officials resisted. Little Rock shows how the ruling was tested.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>In {R.littleRock.year}, {R.littleRockStudents} Black students, the &ldquo;Little Rock Nine&rdquo;, tried to enter Central High School in Little Rock, Arkansas.</li>
          <li>The state governor used the National Guard to keep them out, and angry crowds gathered.</li>
          <li>President Eisenhower sent federal troops to protect the students. The nine entered the school, but they faced abuse inside and a long struggle for equal schooling.</li>
        </ul>
        <p className="text-left text-sm text-slate-600">The case showed that a court ruling needed enforcement, and that the federal government could be pushed to act.</p>
      </div>
    ),
  },
  {
    title: 'Gains, limits and reading sources',
    content: (
      <div className="space-y-4">
        <Rule>Judge the movement by short-term and long-term results.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-slate-700"><strong className="text-emerald-700">Short term</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>The Civil Rights Act ({R.civilRightsAct.year}).</li><li>The Voting Rights Act ({R.votingRightsAct.year}).</li></ul></div>
          <div className="rounded-xl bg-amber-50 p-4 text-sm text-slate-700"><strong className="text-amber-700">Long term</strong><ul className="mt-1 list-disc space-y-1 pl-5"><li>More Black voters and elected officials.</li><li>Inequality in jobs, housing and schools remained.</li></ul></div>
        </div>
        <SourceBox label="Source A" provenance="An original description written for this lesson, in the style of a boycott leaflet, December 1955.">
          <p>&ldquo;Do not ride the buses on Monday. Walk, share a car, or stay home. The buses must treat every passenger with respect.&rdquo;</p>
        </SourceBox>
        <Worked
          title="Judge its use"
          steps={[
            <>It was written by organisers, to call people to act. It shows their aims and methods.</>,
            <>It does not show how many people took part or how the bus company reacted.</>,
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
          <>Which leader of the movement was influenced by Gandhi?</>,
          <>Name two forms of protest used by the movement.</>,
          <>What was the effect of the Selma marches?</>,
          <>Give one short-term and one long-term result of the movement.</>,
        ]}
        answers={[
          <>Martin Luther King Jr.</>,
          <>Any two of: the Montgomery boycott, sit-ins, the Birmingham campaign, the march on Washington, the Selma marches.</>,
          <>The attack on the marchers shocked the country and helped to bring about the Voting Rights Act of 1965.</>,
          <>Short term: the Civil Rights Act or the Voting Rights Act. Long term: more Black voters and officials, although inequality remained.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What did the Supreme Court decide in Brown v. Board of Education (1954)?',
    options: ['Public buses must stay segregated by race', 'Segregated schools were unconstitutional', 'Black citizens could vote in every state', 'Southern schools had to close for a year'],
    answer: 'Segregated schools were unconstitutional',
    explanation: 'The 1954 decision ended the legal basis for segregated schools, although resistance in the South meant that change was slow.',
  },
  {
    prompt: 'Which leader was influenced by the passive resistance of Mahatma Gandhi?',
    options: ['Malcolm X (Nation of Islam)', 'Stokely Carmichael (SNCC)', 'Martin Luther King Jr (SCLC)', 'Huey Newton (Black Panthers)'],
    answer: 'Martin Luther King Jr (SCLC)',
    explanation: 'King adopted Gandhi\'s methods of non-violent resistance and civil disobedience.',
  },
  {
    prompt: 'What is civil disobedience?',
    options: ['Breaking an unjust law without violence', 'Fighting with the police in the streets', 'Obeying each law without asking why', 'Leaving the country to protest abroad'],
    answer: 'Breaking an unjust law without violence',
    explanation: 'Civil disobedience shows the injustice of a law by breaking it openly and without violence.',
  },
  {
    prompt: 'What started the Montgomery bus boycott in December 1955?',
    options: ['The arrest of Rosa Parks', 'The passing of the Voting Rights Act', 'The Little Rock school crisis', 'The march to the Lincoln Memorial'],
    answer: 'The arrest of Rosa Parks',
    explanation: 'Rosa Parks was arrested on 1 December 1955 for refusing to give up her seat, and the boycott began four days later.',
  },
  {
    prompt: 'What did the Montgomery bus boycott achieve?',
    options: ['The immediate end of segregation in the South', 'The passing of the Civil Rights Act of 1964', 'The removal of the city\'s mayor from office', 'A ruling that segregated buses were unlawful'],
    answer: 'A ruling that segregated buses were unlawful',
    explanation: 'After more than a year of boycott, the bus company lost income and the Supreme Court ruled against segregation on buses.',
  },
  {
    prompt: 'What were the Greensboro sit-ins of 1960?',
    options: ['Workers occupied a car factory for a month', 'A march of thousands to the Lincoln Memorial', 'A strike by bus drivers in the city centre', 'Students sat at a whites-only lunch counter'],
    answer: 'Students sat at a whites-only lunch counter',
    explanation: 'The non-violent sit-in began in Greensboro on 1 February 1960 and spread across the South.',
  },
  {
    prompt: 'What happened at Little Rock in 1957?',
    options: ['The first lunch counter sit-in took place', 'Troops guarded Black pupils at Central High', 'The Voting Rights Act was signed into law', 'Martin Luther King was shot dead in the city'],
    answer: 'Troops guarded Black pupils at Central High',
    explanation: 'The Little Rock Nine entered the school with the protection of troops sent by President Eisenhower after the state resisted.',
  },
  {
    prompt: 'What was the main purpose of the March on Washington of August 1963?',
    options: ['To protest against the war in Vietnam', 'To mark the end of the Cold War', 'To celebrate the new Voting Rights Act', 'To win support for a civil rights law'],
    answer: 'To win support for a civil rights law',
    explanation: 'Hundreds of thousands marched peacefully to the Lincoln Memorial, which helped to build support for the Civil Rights Act.',
  },
  {
    prompt: 'What did the Civil Rights Act of 1964 do?',
    options: ['Banned segregation in public places and at work', 'Gave Black Americans the vote for the first time', 'Ended American involvement in the Vietnam War', 'Created the Black Panther Party for self-defence'],
    answer: 'Banned segregation in public places and at work',
    explanation: 'The act banned segregation in public places and discrimination in employment. Voting rights followed in 1965.',
  },
  {
    prompt: 'Why were the Selma marches of 1965 important?',
    options: ['They helped to bring about the Voting Rights Act', 'They ended segregation in public schools', 'They started the Montgomery bus boycott', 'They brought Martin Luther King\'s career to an end'],
    answer: 'They helped to bring about the Voting Rights Act',
    explanation: 'Television pictures of the attack on marchers on "Bloody Sunday" shocked the country and led to the Voting Rights Act in August 1965.',
  },
  {
    prompt: 'Which of the following was a long-term result of the Civil Rights Movement?',
    options: ['Equality in jobs, housing and schooling', 'The return of legal segregation in the South', 'More Black voters and elected officials', 'The repeal of the Voting Rights Act'],
    answer: 'More Black voters and elected officials',
    explanation: 'The movement opened politics to Black citizens, although inequality in jobs, housing and schools remained.',
  },
  {
    prompt: 'A boycott leaflet of December 1955 tells people not to ride the buses. What does it show a historian?',
    options: ['The number of people who joined the boycott', 'The reaction of the bus company to the boycott', 'The aims and methods of the organisers', 'The opinion of the city government on the boycott'],
    answer: 'The aims and methods of the organisers',
    explanation: 'The leaflet comes from the organisers and shows what they wanted and how they asked people to act, not how many took part.',
  },
  {
    prompt: 'Why is non-violence not the same as doing nothing?',
    options: ['Protesters were not arrested by the police', 'Protesters stayed at home and waited', 'Protests were planned and often risky', 'The movement avoided public attention'],
    answer: 'Protests were planned and often risky',
    explanation: 'Non-violent protest took discipline and courage, as protesters faced arrest, abuse and violence.',
  },
];
