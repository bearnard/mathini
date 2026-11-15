import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Branches, Hub, PairLinks } from '../../../../../components/diagrams/lo/PswPictures';
import { Tiers } from '../../../../../components/diagrams/lo/Lo10Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Democracy and citizenship',
    content: slide(
      <>
        <Rule>Democracy is a system where power rests with the people through voting and taking part. Citizenship means belonging to a country, with rights and responsibilities.</Rule>
        <Hub centre="Citizen" spokes={['Vote', 'Join groups', 'Speak up', 'Help locally']} aria="A circle labelled Citizen with four ways to take part in democracy: vote, join groups, speak up and help locally." />
        <Worked
          title="Naledi wants a safer road crossing at her school"
          steps={[<>Learn the problem: how many learners cross, and where.</>, <>Speak up through your school's learner council (the RCL).</>, <>Join other learners and community members who agree.</>, <>Later, when she is old enough, she can also vote.</>]}
        />
        <Mistake>Thinking democracy is only about voting, or only for adults. Young people can take part now through school councils, advocacy and community service.</Mistake>
      </>,
    ),
  },
  {
    title: 'The Constitution: the highest law',
    content: slide(
      <>
        <Rule>The Constitution is the highest law of South Africa, adopted in 1996. It protects the rights, freedoms and dignity of all people, and every other law and rule must agree with it.</Rule>
        <Tiers tiers={[{ title: 'The Constitution', line: 'Highest law' }, { title: 'Acts of Parliament', line: 'Must follow it' }, { title: 'School and community rules', line: 'Must follow both' }]} aria="Three tiers from top to bottom: the Constitution is the highest law, Acts of Parliament must follow it, and school and community rules must follow both." />
        <Worked
          title="A school rule treats girls and boys differently"
          steps={[<>Find the right involved: equality (section 9).</>, <>Compare the rule with the Constitution.</>, <>The Constitution is higher, so the rule must change.</>]}
        />
        <Mistake>Believing a school or community rule can override the Constitution. The lower rule must change, not the Constitution.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rights, duties and elections',
    content: slide(
      <>
        <Rule>Fundamental rights are basic freedoms guaranteed to everyone. Civic duties are responsibilities to society: respect others' rights, obey the law and vote. Elections let citizens choose leaders and influence policy.</Rule>
        <PairLinks pairs={[{ right: 'Freedom of expression', duty: 'Speak without hurting others' }, { right: 'Education', duty: 'Attend and respect learning time' }, { right: 'Dignity', duty: "Respect other people's rights" }]} aria="Three rights matched with a duty: freedom of expression with speaking without hurting others, education with attending and respecting learning time, dignity with respecting other people's rights." />
        <Worked
          title="Taking part in an election"
          steps={[<>Learn what each party or candidate promises.</>, <>Vote when you are old enough. The voting age in South Africa is 18.</>, <>The votes decide who leads.</>, <>Leaders must then listen to the people who chose them.</>]}
        />
        <Mistake>Thinking rights come without duties. Your freedoms depend on everyone respecting each other's rights.</Mistake>
      </>,
    ),
  },
  {
    title: 'When rights are violated',
    content: slide(
      <>
        <Rule>In a constitutional democracy the government's power is checked. If the government violates rights, citizens can challenge it through the courts.</Rule>
        <Branches
          problem="The government breaks a right"
          options={[
            { choice: 'Do nothing', outcome: 'The problem stays.' },
            { choice: 'Challenge it in court', outcome: 'A court can rule.' },
          ]}
          aria="A decision tree. The government breaks a right. If citizens do nothing, the problem stays. If they challenge it in court, a court can rule."
        />
        <Worked
          title="Challenging a violation"
          steps={[<>Name the right that was broken.</>, <>Gather the facts and evidence.</>, <>Ask an organisation or a lawyer for help.</>, <>The court decides. The Constitutional Court is the highest court for constitutional matters.</>]}
        />
        <Mistake>Thinking citizens must accept every government decision. The Constitution lets you challenge it through the courts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is democracy, and what is citizenship?" answer="Democracy is a system where power rests with the people through voting and taking part. Citizenship is belonging to a country, with rights and responsibilities." />
        <Check question="Why is the Constitution important, and what happens to a rule that goes against it?" answer="It is the highest law and protects the rights, freedoms and dignity of all people. A rule that goes against it must change." />
        <Check question="Give two ways a Grade 9 learner can take part in democracy." answer="Through school councils, advocacy and community service. Voting comes later, when you are 18." />
        <Check question="What can citizens do if the government violates their rights?" answer="Challenge it through the courts." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is democracy?',
    options: ['Rule by one leader who is chosen for life', 'A system where power rests with the people through voting and taking part', 'A system in which elections are held but have no effect', 'A system where the army decides who rules'],
    answer: 'A system where power rests with the people through voting and taking part',
    explanation: 'Democracy is based on popular sovereignty and citizen participation.',
  },
  {
    prompt: 'What is citizenship?',
    options: ['Living in a place for a long time, whatever your status', 'Belonging to a country, with rights and responsibilities', 'A status that applies to adults and not to learners', 'A job in the public service of a country'],
    answer: 'Belonging to a country, with rights and responsibilities',
    explanation: 'Citizenship involves both freedoms and obligations to your country.',
  },
  {
    prompt: 'What is the Constitution?',
    options: ['A book of school rules that learners must follow', 'The highest law of the country, which protects rights', 'A history of the country and its leaders', 'An old document that no longer has legal force'],
    answer: 'The highest law of the country, which protects rights',
    explanation: 'The Constitution is the highest legal document guiding all other laws.',
  },
  {
    prompt: 'What are fundamental rights?',
    options: ['Rights that only wealthy citizens may claim', 'Basic freedoms and protections guaranteed to all citizens', 'Privileges that a person earns by good behaviour', 'Rights that the government may take away at any time'],
    answer: 'Basic freedoms and protections guaranteed to all citizens',
    explanation: 'Rights like freedom of speech, education, and dignity belong to everyone.',
  },
  {
    prompt: 'What are civic duties?',
    options: ['Tasks that only government officials need to perform', 'Responsibilities that citizens have towards society', 'Choices that citizens may take or leave as they please', 'Matters that have little effect on how a country works'],
    answer: 'Responsibilities that citizens have towards society',
    explanation: 'Duties include respecting others\' rights, obeying laws, and voting.',
  },
  {
    prompt: 'How do citizens participate in democracy?',
    options: ['They do not take part, since government does it all', 'By voting, joining organisations and speaking up on issues', 'They take part once in five years, on election day', 'They take part by watching the news and doing nothing'],
    answer: 'By voting, joining organisations and speaking up on issues',
    explanation: 'Active participation strengthens democracy.',
  },
  {
    prompt: 'What is the purpose of elections?',
    options: ['To entertain the public with speeches and rallies', 'To let citizens choose leaders and influence policy', 'To give parties a way to advertise themselves', 'To give a look of choice to decisions already made'],
    answer: 'To let citizens choose leaders and influence policy',
    explanation: 'Elections give citizens a voice in government.',
  },
  {
    prompt: 'What does the South African Constitution protect?',
    options: ['The power and the offices of the government only', 'The rights, freedoms and dignity of all people', 'The property of the people who own land only', 'The rights of adults and not those of children'],
    answer: 'The rights, freedoms and dignity of all people',
    explanation: 'South Africa\'s Constitution is one of the world\'s most progressive.',
  },
  {
    prompt: 'How can young people participate in democracy?',
    options: ['They cannot take part, as they are too young', 'Through school councils, advocacy, community service and later voting', 'They can only join once they are old enough to vote', 'They can barely take part until they leave school'],
    answer: 'Through school councils, advocacy, community service and later voting',
    explanation: 'Young people have important roles in democracy now and in the future.',
  },
  {
    prompt: 'What happens if government violates rights?',
    options: ['Nothing happens, as the government is above the law', 'Citizens can challenge it through the courts', 'There is no way to complain once a right is broken', 'Citizens must accept it, since the government knows best'],
    answer: 'Citizens can challenge it through the courts',
    explanation: 'Constitutional democracies have checks on government power.',
  },
];

const DemocracyHumanRights = () => (
  <CapsSubjectTopic
    title="Democracy and Human Rights"
    subtitle="Citizenship, the Constitution, and participation"
    learnSteps={learnSteps}
    task="gr9-democracy-human-rights-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default DemocracyHumanRights;
