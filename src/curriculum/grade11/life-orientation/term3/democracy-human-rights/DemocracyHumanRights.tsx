import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/lo/term3/democracy-human-rights/diagram.webp", alt: "Democracy and Human Rights" },
    title: 'The Bill of Rights and Constitutional Values',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South Africa's <strong>Bill of Rights</strong> in Chapter 2 of the Constitution protects the dignity, equality, and freedom of everyone in the country.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Key protected rights</strong>
            <ul className="list-disc list-inside mt-1 space-y-1 text-sm text-slate-600">
              <li>Human dignity</li>
              <li>Equality and freedom from unfair discrimination</li>
              <li>Freedom of expression, religion, and association</li>
              <li>Access to education, housing, health care, and security</li>
            </ul>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Why rights matter</strong>
            <p className="text-sm text-slate-600">They limit abuse of power, protect vulnerable groups, and give citizens a standard for judging whether treatment is fair and lawful.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Discrimination and Its Effects',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Discrimination</strong> happens when people are treated unfairly because of identity factors such as race, gender, disability, religion, language, or sexual orientation.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 space-y-3 text-left">
          <p className="font-bold text-slate-800">Common forms of discrimination:</p>
          <div className="grid gap-2 md:grid-cols-2 text-sm text-slate-600">
            <p>✔ <strong>Direct discrimination</strong> — openly excluding or insulting someone</p>
            <p>✔ <strong>Indirect discrimination</strong> — rules that seem neutral but disadvantage a group</p>
            <p>✔ <strong>Systemic discrimination</strong> — unfair patterns built into institutions</p>
            <p>✔ <strong>Stereotyping</strong> — judging people by harmful assumptions</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">Its effects include trauma, unequal opportunities, conflict, low self-esteem, and damaged social cohesion.</p>
      </div>
    ),
  },
  {
    title: 'Diversity, Inclusivity and Social Justice',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A democratic society values <strong>diversity</strong> and works for <strong>inclusivity</strong> so that different groups can participate fully and safely.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left text-sm">
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Diversity</strong>
            <p className="text-slate-600">Recognising differences in culture, language, beliefs, abilities, and experiences.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Inclusivity</strong>
            <p className="text-slate-600">Removing barriers so everyone can belong, contribute, and be respected.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Social justice</strong>
            <p className="text-slate-600">Promoting fairness, equity, and equal access to opportunities and resources.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Advocacy Against Injustice',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Advocacy</strong> means speaking and acting to protect rights, challenge injustice, and influence change through lawful and constructive action.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2">
          <p className="font-bold text-slate-800">Advocacy tools:</p>
          <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600">
            <li>Identify the rights issue clearly and gather evidence.</li>
            <li>Report the matter to the relevant authority or support body.</li>
            <li>Use petitions, awareness campaigns, dialogue, or peaceful protest.</li>
            <li>Promote solutions that respect human dignity and the law.</li>
          </ol>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main purpose of the South African Bill of Rights?',
    options: ['To list the rules that apply in a school', 'To protect the dignity, equality and freedom of everyone', 'To explain how taxes are collected from people', 'To describe the political rights of citizens only'],
    answer: 'To protect the dignity, equality and freedom of everyone',
    explanation: 'The Bill of Rights protects fundamental rights and limits unfair treatment or abuse of power.',
  },
  {
    prompt: 'Which right is directly linked to being treated with worth and respect?',
    options: ['The right to housing', 'The right to human dignity', 'The right to vote', 'The right to privacy'],
    answer: 'The right to human dignity',
    explanation: 'Human dignity protects each person\'s inherent worth and value.',
  },
  {
    prompt: 'A school rule prevents a learner with a disability from joining an activity because no accommodation is made. This is an example of:',
    options: ['Fair competition', 'Inclusivity', 'Discrimination', 'Advocacy'],
    answer: 'Discrimination',
    explanation: 'Excluding a learner unfairly because of disability is discriminatory and violates equality principles.',
  },
  {
    prompt: 'Which statement best describes indirect discrimination?',
    options: [
      'Openly insulting someone in public',
      'A neutral-looking rule that unfairly disadvantages a group',
      'Celebrating cultural differences',
      'Helping a vulnerable person access services',
    ],
    answer: 'A neutral-looking rule that unfairly disadvantages a group',
    explanation: 'Indirect discrimination happens when a rule appears fair but has an unfair effect on certain people.',
  },
  {
    prompt: 'Why is diversity important in a democracy?',
    options: [
      'It encourages everyone to think exactly the same way',
      'It recognises different identities and strengthens social understanding',
      'It removes the need for laws',
      'It only matters during elections',
    ],
    answer: 'It recognises different identities and strengthens social understanding',
    explanation: 'Diversity values different people and perspectives, which supports a healthier democracy.',
  },
  {
    prompt: 'What is the goal of social justice?',
    options: ['To punish all of the people who make mistakes', 'To promote fairness, equity and equal access to opportunities', 'To give one group more rights than another group', 'To replace the Constitution with a new law'],
    answer: 'To promote fairness, equity and equal access to opportunities',
    explanation: 'Social justice focuses on fairness and removing barriers that create inequality.',
  },
  {
    prompt: 'Which action is an example of advocacy?',
    options: ['Ignoring unfair treatment because it is so common', 'Starting a petition and reporting a rights violation', 'Using violence to force the changes that you want', 'Sharing a rumour without first checking the facts'],
    answer: 'Starting a petition and reporting a rights violation',
    explanation: 'Advocacy uses lawful, evidence-based action to challenge injustice and promote change.',
  },
  {
    prompt: 'A learner campaign calls for equal access to clean toilets and safe facilities at school. Which principle does this best reflect?',
    options: ['Social justice', 'Propaganda', 'Peer pressure', 'Privacy'],
    answer: 'Social justice',
    explanation: 'The campaign seeks fair access to safe resources and dignity for all learners.',
  },
];

const DemocracyHumanRights = () => (
  <CapsSubjectTopic
    title="Democracy and Human Rights"
    subtitle="The Bill of Rights, discrimination, inclusivity, social justice and advocacy"
    learnSteps={learnSteps}
    task="gr11-democracy-human-rights-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default DemocracyHumanRights;
