import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Healthy vs Unhealthy Relationships',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          All relationships — with friends, family, or romantic partners — can be placed on a spectrum from <strong>healthy</strong> to <strong>unhealthy</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Healthy relationship markers</strong>
            <ul className="list-disc list-inside text-slate-600 mt-1 space-y-1 text-sm">
              <li>Mutual respect and trust</li>
              <li>Open, honest communication</li>
              <li>Support for each other's goals</li>
              <li>Healthy boundaries respected</li>
            </ul>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Unhealthy relationship markers</strong>
            <ul className="list-disc list-inside text-slate-600 mt-1 space-y-1 text-sm">
              <li>Control and jealousy</li>
              <li>Manipulation and dishonesty</li>
              <li>Ignoring or dismissing feelings</li>
              <li>Pressure and coercion</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Consent and Sexuality',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Consent</strong> means freely and voluntarily agreeing to something without pressure, threats, or manipulation. It applies to all physical contact and sexual activity.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-3 text-left">
          <p className="font-bold text-slate-800">Consent must be:</p>
          <div className="grid gap-2 md:grid-cols-2 text-slate-600 text-sm">
            <p>✔ <strong>Freely given</strong> — no pressure or fear</p>
            <p>✔ <strong>Reversible</strong> — can be withdrawn at any time</p>
            <p>✔ <strong>Informed</strong> — all parties understand what they are agreeing to</p>
            <p>✔ <strong>Enthusiastic</strong> — active agreement, not just silence</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm">South African law sets the age of consent at <strong>16 years</strong>. Sexual activity without consent is a criminal offence.</p>
      </div>
    ),
  },
  {
    title: 'Reproductive Health Knowledge',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Accurate reproductive health knowledge supports responsible decision-making and protects wellbeing.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">STI prevention</strong>
            <p className="text-slate-600 text-sm">Consistent and correct condom use significantly reduces transmission of HIV and other STIs.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Contraception</strong>
            <p className="text-slate-600 text-sm">Multiple contraceptive options exist; abstinence is the only 100% effective method.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Menstrual health</strong>
            <p className="text-slate-600 text-sm">Understanding the menstrual cycle is important for all genders in healthy relationships.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Testing and treatment</strong>
            <p className="text-slate-600 text-sm">Free HIV testing and treatment (ARVs) are available at public health clinics across South Africa.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Communication and Decision-Making in Relationships',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective communication prevents misunderstanding and builds trust. Responsible decision-making protects your physical and emotional health.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2 text-left">
          <p className="font-bold text-slate-800">Communication strategies:</p>
          <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
            <li>Use "I" statements to express feelings without blame.</li>
            <li>Listen actively — give full attention without interrupting.</li>
            <li>Clarify before reacting — ask questions to understand.</li>
            <li>Set and communicate your boundaries clearly and calmly.</li>
          </ul>
        </div>
        <p className="text-slate-600 text-sm">A helpful decision-making tool: consider the <strong>consequences</strong>, your <strong>values</strong>, your <strong>rights</strong>, and who you could <strong>talk to</strong> before acting.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which of the following is a sign of a healthy relationship?',
    options: [
      'One partner controls the other\'s social media',
      'Both partners support each other\'s individual goals',
      'Jealousy is shown as a form of care',
      'One partner makes all the decisions',
    ],
    answer: 'Both partners support each other\'s individual goals',
    explanation: 'Healthy relationships involve mutual support, respect, and encouragement for individual growth.',
  },
  {
    prompt: 'What does consent mean in the context of sexual activity?',
    options: ['Doing what your partner expects of you', 'Staying silent when you are asked a question', 'Freely agreeing, with no pressure, threats or manipulation', 'Giving permission once, which then lasts for ever'],
    answer: 'Freely agreeing, with no pressure, threats or manipulation',
    explanation: 'Consent must be freely given, reversible, informed, and enthusiastic.',
  },
  {
    prompt: 'At what age does South African law set the age of sexual consent?',
    options: ['14', '15', '16', '18'],
    answer: '16',
    explanation: 'South African law sets the minimum age of consent at 16 years.',
  },
  {
    prompt: 'Which of the following is the ONLY 100% effective method of preventing both pregnancy and STIs?',
    options: ['The contraceptive pill', 'Condoms', 'Abstinence', 'Withdrawal method'],
    answer: 'Abstinence',
    explanation: 'Abstinence (not having sex) is the only method that is 100% effective against both pregnancy and STIs.',
  },
  {
    prompt: 'A person says "yes" only because they fear the consequences of saying "no". Is this valid consent?',
    options: ['Yes, because the person still said the word yes', 'No, because consent given out of fear is not freely given', 'Yes, if the relationship has lasted a long time', 'It depends on the situation and on the people involved'],
    answer: 'No, because consent given out of fear is not freely given',
    explanation: 'True consent must be freely given without any pressure, threats, or fear of consequences.',
  },
  {
    prompt: 'Which communication technique involves expressing your feelings without blaming the other person?',
    options: ['"You" statements', '"I" statements', 'Passive silence', 'Aggressive confrontation'],
    answer: '"I" statements',
    explanation: '"I feel hurt when..." focuses on your own feelings rather than attacking the other person.',
  },
  {
    prompt: 'How does consistent and correct condom use benefit sexual health?',
    options: [
      'It prevents all STIs and pregnancies with 100% certainty',
      'It significantly reduces the risk of HIV and other STI transmission',
      'It is only necessary for people who already have an STI',
      'It eliminates the need for communication in relationships',
    ],
    answer: 'It significantly reduces the risk of HIV and other STI transmission',
    explanation: 'Condoms are highly effective when used consistently and correctly, though not 100% foolproof.',
  },
  {
    prompt: 'Which behaviour indicates an unhealthy relationship dynamic?',
    options: ['Talking openly about boundaries in the relationship', "One partner checking the other's phone without permission", 'Spending time with separate groups of friends', 'Disagreeing but settling the conflict with respect'],
    answer: "One partner checking the other's phone without permission",
    explanation: 'Invading privacy is a controlling behaviour and a sign of an unhealthy, potentially abusive relationship.',
  },
  {
    prompt: 'Free HIV testing is available in South Africa at:',
    options: ['Private hospitals only, for a fee', 'Public health clinics across the country', 'School campuses only, on set days', 'Major cities only, at large hospitals'],
    answer: 'Public health clinics across the country',
    explanation: 'South Africa offers free HIV testing and ARV treatment at public clinics nationwide.',
  },
  {
    prompt: 'Which of the following best describes "active listening" in a relationship?',
    options: [
      'Waiting for your turn to speak while planning what to say',
      'Giving full attention, not interrupting, and checking understanding',
      'Agreeing with everything the other person says',
      'Using your phone while the other person talks',
    ],
    answer: 'Giving full attention, not interrupting, and checking understanding',
    explanation: 'Active listening means being fully present and focused on understanding what the other person is communicating.',
  },
];

const RelationshipsSexualityHealth = () => (
  <CapsSubjectTopic
    title="Relationships, Sexuality and Health"
    subtitle="Healthy relationships, consent, reproductive health and responsible communication"
    learnSteps={learnSteps}
    task="gr11-relationships-sexuality-health-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default RelationshipsSexualityHealth;
