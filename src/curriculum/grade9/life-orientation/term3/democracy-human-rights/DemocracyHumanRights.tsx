import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding Democracy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Democracy</strong> means power rests with the people through voting and participation.
          <strong> Citizenship</strong> is the status of belonging to a country with rights and responsibilities.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">South Africa is a constitutional democracy with a Bill of Rights.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'The Constitution and Rights',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>The Constitution</strong> is the supreme law of the country.
          <strong> Rights</strong> are freedoms and protections guaranteed to all people.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Rights</strong>
            <p className="text-slate-600">Freedom, equality, dignity, education.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Duties</strong>
            <p className="text-slate-600">Respect rights of others, obey laws, vote.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Democratic Participation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Democratic participation means getting involved in decisions that affect your community.
          This includes voting, joining groups, and advocating for change.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">Ways to participate:</p>
          <p className="text-slate-600">Voting, speaking up, joining organizations, and serving your community.</p>
        </div>
      </div>
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
