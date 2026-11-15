'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Common cyber threats',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Cyber security questions usually ask learners to identify a threat and then explain why it is dangerous in a realistic context.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-rose-50 border border-rose-200 p-4">
            <p className="font-semibold text-rose-800">Ransomware</p>
            <p className="mt-1 text-slate-600">Encrypts files and can stop a school or business from operating until data is restored.</p>
          </div>
          <div className="rounded-xl bg-orange-50 border border-orange-200 p-4">
            <p className="font-semibold text-orange-800">Phishing</p>
            <p className="mt-1 text-slate-600">Uses fake messages or websites to trick users into giving away passwords or personal information.</p>
          </div>
          <div className="rounded-xl bg-purple-50 border border-purple-200 p-4">
            <p className="font-semibold text-purple-800">Spyware</p>
            <p className="mt-1 text-slate-600">Secretly collects information about the user or their device.</p>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <p className="font-semibold text-slate-800">Social engineering</p>
            <p className="mt-1 text-slate-600">Manipulates people instead of attacking hardware directly.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Defensive practices',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Security controls work best in layers. Strong passwords, MFA, updates and backups each reduce a different type of risk.
        </p>
        <CodeBlock language="text" code={`IF email looks urgent AND asks for login details
  THEN do not click immediately
  VERIFY the sender through another trusted channel
  REPORT the message if it is suspicious`} />
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Concept: Defence in depth</p>
          <p className="text-slate-600 mt-1">
            No single safeguard is perfect. Combining controls makes a successful attack much harder.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'AI, IoT and cloud technologies',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Emerging technologies create opportunities, but they also add new risks that must be evaluated carefully.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <p className="font-semibold text-emerald-800">AI</p>
            <p className="mt-1 text-slate-600">Improves automation, but may reflect bias in training data.</p>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
            <p className="font-semibold text-amber-800">IoT</p>
            <p className="mt-1 text-slate-600">Enables smart devices, but weak defaults can widen the attack surface.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-4">
            <p className="font-semibold text-indigo-800">Cloud</p>
            <p className="mt-1 text-slate-600">Offers scalable services, but depends on connectivity and careful access control.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Remote access and responsible adoption',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Remote access should protect both the connection and the identity of the user.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-mono text-sm text-slate-700">
          <p>Home device → VPN / HTTPS → Organisation network → Protected service</p>
        </div>
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            When evaluating new technology, discuss both benefit and risk. CAPS answers score well when they reach a balanced judgement.
          </p>
        </div>
      </div>
    ),
  },
];

const items: Array<{ prompt: string; options: string[]; answer: number; explanation: string }> = [
  {
    prompt: "What does ransomware typically do?",
    options: ["Speeds up a computer automatically", "Encrypts files and demands payment for access", "Fixes weak passwords", "Normalises database tables"],
    answer: 1,
    explanation: "Ransomware commonly locks or encrypts data and then demands a ransom for restoration.",
  },
  {
    prompt: "Which action most improves account security beyond using a password alone?",
    options: ["Using the same password everywhere", "Turning off updates", "Enabling multi-factor authentication", "Saving credentials in a public text file"],
    answer: 2,
    explanation: "Multi-factor authentication adds another proof of identity, making account compromise harder.",
  },
  {
    prompt: "Why are regular backups important?",
    options: ["They help recover data after loss or attack", "They remove the need for antivirus completely", "They make passwords unnecessary", "They stop all phishing messages"],
    answer: 0,
    explanation: "Backups allow important data to be restored after corruption, deletion or ransomware.",
  },
  {
    prompt: "What is a zero-day vulnerability?",
    options: ['A flaw that is unknown or unpatched when attackers start exploiting it', 'A bug that appears only after ten years of use', 'A virus that deletes the backups of a system as its first step and then locks the user out of the server', 'A type of cable used in a network'],
    answer: 0,
    explanation: "A zero-day vulnerability is dangerous because defenders may not yet have a fix available.",
  },
  {
    prompt: "What is a possible risk of AI systems?",
    options: ['They cannot make decisions of any kind', 'They may reflect bias present in training data', 'They remove the privacy concerns that users have about data', 'They work offline and need no data'],
    answer: 1,
    explanation: "AI can inherit bias from the data and choices used to build or train the system.",
  },
  {
    prompt: "Why are IoT devices often a security concern?",
    options: ["They always use printed reports instead of screens", "They can be left with weak default settings on many connected devices", "They cannot connect to networks", "They prevent remote monitoring"],
    answer: 1,
    explanation: "IoT devices increase the attack surface, especially when default passwords and poor updates are left unchanged.",
  },
  {
    prompt: "What is a major benefit of cloud computing?",
    options: ['A guarantee that stored data is protected from loss or attack', 'Scalable access to storage or services over the internet', 'The permanent end of all local devices', 'No need for any user accounts to be created'],
    answer: 1,
    explanation: "Cloud computing allows flexible access to computing resources without all infrastructure being local.",
  },
  {
    prompt: "Which measure best secures remote access to organisational resources?",
    options: ['Using open public Wi-Fi with no extra protection added and a shared password that is posted on the office wall', 'Sharing one password among all of the staff', 'Using encrypted connections such as a VPN with strong authentication', 'Disabling the backups to save storage space'],
    answer: 2,
    explanation: "Remote access should use encrypted channels and strong identity checks to reduce interception and misuse.",
  },
];

const bank: ITItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const CyberSecurityEmergingTechnologies = () => (
  <CapsSubjectTopic
    title="Cyber Security and Emerging Technologies"
    subtitle="Balancing innovation with risk in connected digital environments"
    learnSteps={learnSteps}
    task="gr12-cyber-security-emerging-technologies-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default CyberSecurityEmergingTechnologies;
