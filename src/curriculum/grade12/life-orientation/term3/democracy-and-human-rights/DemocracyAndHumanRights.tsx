import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Constitutional Values and Rights',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">South Africa’s democracy is built on values such as human dignity, equality, freedom and accountability. Human rights protect people from abuse and help create conditions for fair participation in society.</p>
      </div>
    ),
  },
  {
    title: 'Recognising Violations and Discrimination',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Human rights violations happen when individuals, groups or institutions deny people their legal and moral protections. Discrimination based on race, gender, disability, religion or other factors damages dignity and social justice.</p>
      </div>
    ),
  },
  {
    title: 'Redress and Accountability',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Redress means taking steps to correct injustice and restore fairness. Accountability requires people and institutions to answer for violations and to support lawful remedies through reporting, legal processes or institutional action.</p>
      </div>
    ),
  },
  {
    title: 'Using Evidence in Rights-Based Responses',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Strong rights-based arguments use facts, examples and constitutional principles. Learners should move beyond opinion and explain why a response protects dignity, fairness and democratic participation.</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: 'Which constitutional value is directly harmed by discrimination?',
    options: [
      'Convenience',
      'Human dignity',
      'Silence',
      'Competition',
    ],
    answer: 1,
    explanation: 'Discrimination undermines a person’s dignity and equal worth.',
  },
  {
    prompt: 'What is a human rights violation?',
    options: [
      'A minor disagreement between friends',
      'An action that denies protected rights or dignity',
      'A school timetable change',
      'Any difficult decision',
    ],
    answer: 1,
    explanation: 'A rights violation occurs when protected rights are denied or abused.',
  },
  {
    prompt: 'What does redress aim to do?',
    options: ['Punish offenders without a fair hearing', 'Correct injustice and restore fairness', 'Hide the problem to keep peace', 'Reward those who caused the harm'],
    answer: 1,
    explanation: 'Redress seeks to address harm and move toward justice.',
  },
  {
    prompt: 'Why is accountability important in a democracy?',
    options: [
      'It allows leaders to act without explanation',
      'It ensures actions can be questioned and corrected',
      'It weakens rights',
      'It only applies to citizens',
    ],
    answer: 1,
    explanation: 'Accountability helps protect democracy by requiring answerability for decisions and conduct.',
  },
  {
    prompt: 'Which example best shows unfair discrimination?',
    options: [
      'Applying safety rules equally',
      'Refusing someone access because of disability',
      'Choosing a school sport captain by trial',
      'Asking for homework on time',
    ],
    answer: 1,
    explanation: 'Excluding someone because of disability is discriminatory and unjust.',
  },
  {
    prompt: 'What strengthens a rights-based argument?',
    options: ['Strong opinions repeated loudly', 'Facts linked to constitutional principles', 'Insults aimed at the people on the other side', 'Support from a large online crowd'],
    answer: 1,
    explanation: 'Evidence and constitutional reasoning make the response credible and fair.',
  },
  {
    prompt: 'Which institution or process can support redress?',
    options: [
      'Reporting through proper school or legal channels',
      'Posting unverified claims online only',
      'Threatening violence',
      'Doing nothing',
    ],
    answer: 0,
    explanation: 'Formal reporting and lawful channels support fair accountability and redress.',
  },
  {
    prompt: 'Why should learners study global and local rights issues?',
    options: ['It shows that rights are the same everywhere', 'It helps them compare issues and defend justice', 'It proves that local issues matter less than global ones', 'It lets them avoid community involvement'],
    answer: 1,
    explanation: 'Studying different contexts strengthens analysis and informed citizenship.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const DemocracyAndHumanRights = () => (
  <CapsSubjectTopic
    title='Democracy and Human Rights'
    subtitle='Human rights violations, discrimination, redress, constitutional values and accountability.'
    learnSteps={learnSteps}
    task='gr12-democracy-and-human-rights-t3'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default DemocracyAndHumanRights;
