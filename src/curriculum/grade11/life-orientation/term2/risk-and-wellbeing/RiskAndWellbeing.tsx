import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Substance Abuse: Causes and Consequences',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Substance abuse</strong> is the harmful or hazardous use of psychoactive substances — including alcohol, tobacco, cannabis, tik, and prescription drugs misused outside medical advice.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Risk factors (why people use)</strong>
            <p className="text-slate-600 text-sm">Peer pressure, trauma, family history, mental health challenges, poverty, boredom, availability.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Consequences</strong>
            <p className="text-slate-600 text-sm">Addiction, health problems (liver, brain), violence, school failure, fractured relationships, legal trouble.</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm">South Africa has very high rates of alcohol and substance abuse, linked to social inequality and limited youth opportunities in many communities.</p>
      </div>
    ),
  },
  {
    title: 'Trauma, Violence and Their Impact',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Trauma</strong> is an emotional response to a deeply distressing event. Violence — including domestic violence, gender-based violence, and community violence — is a major source of trauma in South Africa.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-3 text-left">
          <p className="font-bold text-slate-800">Effects of trauma on wellbeing:</p>
          <div className="grid gap-2 md:grid-cols-2 text-slate-600 text-sm">
            <p>• Anxiety and depression</p>
            <p>• Difficulty trusting others</p>
            <p>• Sleep disturbances and nightmares</p>
            <p>• Difficulty concentrating</p>
            <p>• Substance use as a coping mechanism</p>
            <p>• Anger and aggression</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm">Recognising trauma responses in yourself or others is the first step to getting appropriate support.</p>
      </div>
    ),
  },
  {
    title: 'Protective Factors and Healthy Coping Strategies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Protective factors</strong> reduce the likelihood of risk behaviour. <strong>Healthy coping strategies</strong> help manage stress and trauma without causing further harm.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Protective factors</strong>
            <p className="text-slate-600 text-sm">Strong family support, positive role models, school engagement, faith communities, recreational activities, clear values.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Healthy coping strategies</strong>
            <p className="text-slate-600 text-sm">Exercise, creative expression, journalling, talking to a trusted adult, mindfulness, maintaining routine, seeking professional help.</p>
          </div>
        </div>
        <p className="text-slate-600 text-sm">Unhealthy coping (substance use, self-harm, isolation) provides short-term relief but worsens the underlying problem.</p>
      </div>
    ),
  },
  {
    title: 'Support Networks and Services',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          No one needs to face substance abuse, trauma, or violence alone. South Africa has a range of support services available.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">School-based support</strong>
            <p className="text-slate-600 text-sm">School counsellors, Life Orientation teachers, peer support programmes, school-based social workers.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Community services</strong>
            <p className="text-slate-600 text-sm">SANCA (South African National Council on Alcoholism), SADAG (South African Depression and Anxiety Group), Department of Social Development, clinics.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Crisis lines</strong>
            <p className="text-slate-600 text-sm">SADAG: 0800 21 22 23 | Childline: 116 | GBV helpline: 0800 428 428</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Why seek help?</strong>
            <p className="text-slate-600 text-sm">Early intervention leads to better outcomes. Seeking help is a sign of strength and self-awareness, not weakness.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is substance abuse?',
    options: [
      'Taking prescribed medication exactly as directed by a doctor',
      'The harmful or hazardous use of psychoactive substances',
      'Drinking one glass of wine with dinner',
      'Using caffeine for energy',
    ],
    answer: 'The harmful or hazardous use of psychoactive substances',
    explanation: 'Substance abuse involves using substances in a way that harms health, relationships, or functioning.',
  },
  {
    prompt: 'Which of the following is a RISK factor for substance abuse?',
    options: [
      'Having positive role models in the family',
      'Being engaged in school activities and sport',
      'Experiencing peer pressure and social isolation',
      'Having clear personal values and goals',
    ],
    answer: 'Experiencing peer pressure and social isolation',
    explanation: 'Risk factors increase the likelihood of substance abuse, including peer pressure, trauma, and limited positive opportunities.',
  },
  {
    prompt: 'What is "trauma"?',
    options: ['A physical injury, such as a broken bone', 'An emotional response to a deeply distressing event', 'Feeling sad after watching a sad film', 'The normal stress of everyday school life'],
    answer: 'An emotional response to a deeply distressing event',
    explanation: 'Trauma results from events that overwhelm a person\'s ability to cope — such as violence, loss, or abuse.',
  },
  {
    prompt: 'Using alcohol or drugs to cope with emotional pain is an example of:',
    options: ['A healthy coping strategy that eases the pain', 'An unhealthy coping strategy that worsens the underlying problem', 'A form of medical treatment for emotional pain', 'A protective factor that guards against harm'],
    answer: 'An unhealthy coping strategy that worsens the underlying problem',
    explanation: 'Substance use as a coping mechanism provides temporary relief but deepens trauma and creates additional problems like addiction.',
  },
  {
    prompt: 'Which of the following is a protective factor against substance abuse?',
    options: [
      'Spending time with substance-using peers',
      'Having clear personal values and strong family support',
      'Having limited access to recreational activities',
      'Experiencing chronic stress without support',
    ],
    answer: 'Having clear personal values and strong family support',
    explanation: 'Protective factors like strong family bonds, values, and positive activities reduce the likelihood of substance abuse.',
  },
  {
    prompt: 'SANCA refers to:',
    options: [
      'South African National Council on Alcoholism',
      'South African National Community Association',
      'School And Nutrition Community Action',
      'Social Assistance and National Care Agency',
    ],
    answer: 'South African National Council on Alcoholism',
    explanation: 'SANCA provides substance abuse counselling, treatment, and prevention services across South Africa.',
  },
  {
    prompt: 'Which of the following is a healthy coping strategy for dealing with trauma?',
    options: ['Isolating yourself and avoiding all social contact', 'Talking to a trusted adult or counsellor and keeping a routine', 'Using substances to numb the pain for a while', 'Ignoring every feeling about the traumatic event'],
    answer: 'Talking to a trusted adult or counsellor and keeping a routine',
    explanation: 'Healthy coping strategies address the root cause of distress and build resilience without creating further harm.',
  },
  {
    prompt: 'What is the Childline South Africa toll-free number?',
    options: ['0800 21 22 23', '116', '10111', '0800 428 428'],
    answer: '116',
    explanation: 'Childline South Africa operates a 24/7 toll-free helpline on 116 for children experiencing abuse or in need of support.',
  },
  {
    prompt: 'Why is early intervention important when someone is showing signs of substance abuse?',
    options: ['It is not important, as the person will stop alone', 'It improves recovery and stops the problem getting worse', 'It should happen only after the person asks for help', 'Intervention helps adults and does not help adolescents'],
    answer: 'It improves recovery and stops the problem getting worse',
    explanation: 'Identifying and addressing substance abuse early reduces harm and significantly improves the chances of full recovery.',
  },
  {
    prompt: 'Which of the following is a consequence of long-term substance abuse?',
    options: ['Improved academic performance at school', 'Stronger relationships with family members', 'Addiction, health problems and failure at school or work', 'Greater financial security in later life'],
    answer: 'Addiction, health problems and failure at school or work',
    explanation: 'Chronic substance abuse causes physical harm (brain, liver), damages relationships, and impairs academic and occupational functioning.',
  },
];

const RiskAndWellbeing = () => (
  <CapsSubjectTopic
    title="Risk and Wellbeing"
    subtitle="Substance abuse, trauma, protective factors, coping strategies and support services"
    learnSteps={learnSteps}
    task="gr11-risk-and-wellbeing-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default RiskAndWellbeing;
