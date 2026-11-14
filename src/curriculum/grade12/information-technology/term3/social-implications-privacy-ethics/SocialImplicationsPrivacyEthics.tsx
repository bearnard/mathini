'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Privacy and responsible data use',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Privacy questions in South Africa should connect to ideas such as consent, purpose limitation and protecting personal information from unnecessary exposure.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
            <p className="font-semibold text-blue-800">Collect minimally</p>
            <p className="mt-1 text-slate-600">Ask only for the data needed for the stated purpose.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <p className="font-semibold text-emerald-800">Store securely</p>
            <p className="mt-1 text-slate-600">Protect data with access control, encryption and sensible retention periods.</p>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
            <p className="font-semibold text-amber-800">Share carefully</p>
            <p className="mt-1 text-slate-600">Only share when there is a lawful, ethical reason and the user understands why.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Ethical behaviour in digital work',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Ethical computing is about honesty, fairness and respect for people. Learners should identify what is wrong in a scenario and suggest a better action.
        </p>
        <CodeBlock language="text" code={`IF code or media came from another creator
  THEN acknowledge the source
  AND check permission or licence terms
ELSE do not present it as your own work`} />
        <div className="rounded-xl bg-rose-50 border border-rose-200 p-4">
          <p className="font-semibold text-rose-800">Key ethical issue</p>
          <p className="text-slate-600 mt-1">
            Copying work without acknowledgement is plagiarism, even if the learner changes small details.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Access, inclusion and the digital divide',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Technology choices should be judged not only by technical power, but also by whether people can realistically access and use them.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-purple-50 border border-purple-200 p-4">
            <p className="font-semibold text-purple-800">Barriers</p>
            <p className="mt-1 text-slate-600">Cost, connectivity, disability, language and lack of training can all exclude users.</p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">Inclusive choices</p>
            <p className="mt-1 text-slate-600">Accessible design, low-bandwidth options, local language support and assistive technologies improve fairness.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Environmental responsibility',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Computing affects the environment through electricity use, manufacturing and e-waste. Green computing means making practical choices that reduce this impact.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-mono text-sm text-slate-700">
          <p>Buy carefully → Use efficiently → Repair / reuse → Recycle responsibly</p>
        </div>
        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
          <p className="font-semibold text-emerald-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            Avoid vague answers like “care for the environment”. Name concrete actions such as power-saving modes, fewer printouts and proper e-waste disposal.
          </p>
        </div>
      </div>
    ),
  },
];

const items: Array<{ prompt: string; options: string[]; answer: number; explanation: string }> = [
  {
    prompt: "Which action best respects privacy when collecting learner data online?",
    options: ["Collect every possible detail just in case it may help later", "Collect only the information needed for the stated purpose", "Share the data with any interested company", "Post the full list publicly for transparency"],
    answer: 1,
    explanation: "Responsible data collection limits information to what is necessary for the specific purpose.",
  },
  {
    prompt: "What is the ethical problem with copying someone else's program and pretending it is your own work?",
    options: ["Compression", "Plagiarism", "Encryption", "Virtualisation"],
    answer: 1,
    explanation: "Using another person's work without acknowledgement is plagiarism and is ethically dishonest.",
  },
  {
    prompt: "Which tool most directly supports accessibility for a visually impaired user?",
    options: ["Screen reader", "Thermal printer", "Barcode scanner", "Joystick only"],
    answer: 0,
    explanation: "A screen reader reads on-screen text aloud and supports navigation for visually impaired users.",
  },
  {
    prompt: "What does the digital divide describe?",
    options: ["A type of network cable", "The gap between people who do and do not have effective access to digital technology", "A programming language difference", "A split screen on a monitor"],
    answer: 1,
    explanation: "The digital divide is the inequality in access to devices, connectivity and digital skills.",
  },
  {
    prompt: "Before sharing a dataset for research, what is often the safest privacy step?",
    options: ["Add more names to make the file complete", "Remove or anonymise personal identifiers where appropriate", "Send the password in the same message as the file", "Allow everyone to edit the original data"],
    answer: 1,
    explanation: "Removing identifying details reduces the risk of exposing personal information unnecessarily.",
  },
  {
    prompt: "Which practice supports greener computing?",
    options: ["Leaving unused computers on all night", "Replacing devices every year even if they work", "Using power-saving settings and disposing of e-waste responsibly", "Printing every draft in colour"],
    answer: 2,
    explanation: "Green computing reduces waste and energy use through practical choices such as power saving and proper disposal.",
  },
  {
    prompt: "What makes consent for data collection meaningful?",
    options: ["The user understands what is being collected and agrees freely", "The form is hidden in a long unreadable document", "The data is sold immediately after collection", "The system never explains its purpose"],
    answer: 0,
    explanation: "Meaningful consent requires clear information and a genuine choice by the user.",
  },
  {
    prompt: "Why is biometric data usually treated as especially sensitive?",
    options: ["It is always public already", "It is linked closely to a person's identity and is hard to change if exposed", "It can only be stored on paper", "It is less accurate than a username"],
    answer: 1,
    explanation: "Biometric data such as fingerprints is strongly linked to identity, so exposure can create serious risks.",
  },
];

const bank: ITItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const SocialImplicationsPrivacyEthics = () => (
  <CapsSubjectTopic
    title="Social Implications, Privacy and Ethics"
    subtitle="Evaluating the human impact of data use and digital decision-making"
    learnSteps={learnSteps}
    task="gr12-social-implications-privacy-ethics-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default SocialImplicationsPrivacyEthics;
