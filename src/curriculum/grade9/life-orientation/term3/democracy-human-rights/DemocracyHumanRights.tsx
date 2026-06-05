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
    options: ['Rule by one person', 'A system where power rests with the people through voting and participation', 'Only elections', 'A type of government run by all'],
    answer: 'A system where power rests with the people through voting and participation',
    explanation: 'Democracy is based on popular sovereignty and citizen participation.',
  },
  {
    prompt: 'What is citizenship?',
    options: ['Just living somewhere', 'The status of belonging to a country with rights and responsibilities', 'Only for adults', 'A type of job'],
    answer: 'The status of belonging to a country with rights and responsibilities',
    explanation: 'Citizenship involves both freedoms and obligations to your country.',
  },
  {
    prompt: 'What is the Constitution?',
    options: ['A book of rules', 'The supreme law of a country that protects rights and defines government', 'Just history', 'Outdated'],
    answer: 'The supreme law of a country that protects rights and defines government',
    explanation: 'The Constitution is the highest legal document guiding all other laws.',
  },
  {
    prompt: 'What are fundamental rights?',
    options: ['Only for rich people', 'Basic freedoms and protections guaranteed to all citizens', 'Privileges earned', 'Not guaranteed'],
    answer: 'Basic freedoms and protections guaranteed to all citizens',
    explanation: 'Rights like freedom of speech, education, and dignity belong to everyone.',
  },
  {
    prompt: 'What are civic duties?',
    options: ['Only for government', 'Responsibilities citizens have toward society and each other', 'Optional', 'Not important'],
    answer: 'Responsibilities citizens have toward society and each other',
    explanation: 'Duties include respecting others\' rights, obeying laws, and voting.',
  },
  {
    prompt: 'How do citizens participate in democracy?',
    options: ['They do not', 'Through voting, joining organizations, and advocating for issues', 'Only once', 'Passively'],
    answer: 'Through voting, joining organizations, and advocating for issues',
    explanation: 'Active participation strengthens democracy.',
  },
  {
    prompt: 'What is the purpose of elections?',
    options: ['Entertainment', 'To allow citizens to choose their leaders and influence policy', 'Only for publicity', 'No real impact'],
    answer: 'To allow citizens to choose their leaders and influence policy',
    explanation: 'Elections give citizens a voice in government.',
  },
  {
    prompt: 'What does the South African Constitution protect?',
    options: ['Only government', 'The rights, freedoms, and dignity of all people', 'Just property', 'Only adults'],
    answer: 'The rights, freedoms, and dignity of all people',
    explanation: 'South Africa\'s Constitution is one of the world\'s most progressive.',
  },
  {
    prompt: 'How can young people participate in democracy?',
    options: ['They cannot', 'Through school government, advocacy, community service, and later voting', 'Only later', 'Barely at all'],
    answer: 'Through school government, advocacy, community service, and later voting',
    explanation: 'Young people have important roles in democracy now and in the future.',
  },
  {
    prompt: 'What happens if government violates rights?',
    options: ['Nothing', 'Citizens can challenge it through courts and institutions', 'No recourse', 'Accept it'],
    answer: 'Citizens can challenge it through courts and institutions',
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
