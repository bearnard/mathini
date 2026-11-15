'use client';

import dynamic from 'next/dynamic';
import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Network structure and communication paths',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Learners should be able to describe how data travels from a device on a LAN to a wider network such as the internet.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-mono text-sm text-slate-700">
          <p>Laptop → Switch → Router → ISP → Internet → Web server</p>
        </div>
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Concept: Switch vs router</p>
          <p className="text-slate-600 mt-1">
            A switch connects devices inside the same LAN. A router forwards packets between different networks.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Protocols and internet services',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Protocols are the agreed rules that let devices exchange data correctly. In exams, link each protocol to the service it provides.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
            <p className="font-semibold text-emerald-800">Web and naming</p>
            <p className="mt-1 text-slate-600">HTTP/HTTPS deliver web pages, while DNS translates domain names into IP addresses.</p>
          </div>
          <div className="rounded-xl bg-purple-50 border border-purple-200 p-4">
            <p className="font-semibold text-purple-800">Transport and addressing</p>
            <p className="mt-1 text-slate-600">TCP manages reliable delivery and IP handles addressing and routing across networks.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Network security essentials',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Strong answers connect the threat to the matching control instead of listing random security terms.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <div className="grid min-w-[28rem] grid-cols-3 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700">
            <p>Threat</p>
            <p>Best control</p>
            <p>Why it helps</p>
          </div>
          <div className="grid min-w-[28rem] grid-cols-3 text-sm text-slate-600">
            <p className="border-r border-t border-slate-200 px-4 py-3">Phishing</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">User training + MFA</p>
            <p className="border-t border-slate-200 px-4 py-3">Reduces stolen-password risk</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">Malware</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">Updates + antivirus</p>
            <p className="border-t border-slate-200 px-4 py-3">Closes known vulnerabilities</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">Unauthorised access</p>
            <p className="border-r border-t border-slate-200 px-4 py-3">Firewall + least privilege</p>
            <p className="border-t border-slate-200 px-4 py-3">Blocks or limits risky traffic</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Systems integration',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Modern organisations often connect apps, cloud services and databases so that information entered once can be reused elsewhere.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-mono text-sm text-slate-700">
          <p>School App → API → Student Database → Reporting Dashboard</p>
        </div>
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam Tip</p>
          <p className="text-slate-600 mt-1">
            Integration improves efficiency, but it also increases the need for access control, compatibility and secure data sharing.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Secure pages, scams and the second login step",
    content: (
      <div className="space-y-4">
        <GapRule>{"Pages that begin with https scramble the data on its way across the network, so eavesdroppers see nonsense. Scammers pretend to be someone you trust to get you to hand over details. A second, independent check at login stops a stolen password from being enough."}</GapRule>
        <GapWorked title={"Protect an account"} steps={["Use https pages for log in so data is encrypted in transit.", "Do not click a link in an email that asks for your password.", "Turn on the extra login check so a stolen password is not enough."]} />
        <GapMistake>{"Thinking https proves a site is honest."}</GapMistake>
      </div>
    ),
  },
];

const items: Array<{ prompt: string; options: string[]; answer: number; explanation: string }> = [
  {
    prompt: "Which device mainly forwards data between different networks?",
    options: ["Keyboard", "Router", "Projector", "Scanner"],
    answer: 1,
    explanation: "A router directs packets between networks such as a LAN and the internet.",
  },
  {
    prompt: "What does DNS do?",
    options: ["Encrypts every file on a computer", "Translates domain names into IP addresses", "Creates firewall rules automatically", "Measures processor temperature"],
    answer: 1,
    explanation: "DNS helps users access websites by translating readable names into IP addresses.",
  },
  {
    prompt: "Why is HTTPS more secure than HTTP?",
    options: ["It hides the website name from everyone forever", "It uses encryption to protect data in transit", "It prevents all viruses automatically", "It works without the internet"],
    answer: 1,
    explanation: "HTTPS uses encrypted communication so that intercepted web traffic is harder to read.",
  },
  {
    prompt: "What is phishing?",
    options: ['A backup strategy that uses cloud storage', 'A social engineering attack that tricks users into revealing information', 'A method of joining two tables on a shared field using a foreign key in SQL', 'A type of cable used to connect a monitor'],
    answer: 1,
    explanation: "Phishing attacks use fake messages or websites to trick users into sharing credentials or other sensitive data.",
  },
  {
    prompt: "What is the main purpose of a firewall?",
    options: ["To cool the server room", "To filter and control network traffic", "To increase screen brightness", "To replace the operating system"],
    answer: 1,
    explanation: "A firewall helps block or allow network traffic according to security rules.",
  },
  {
    prompt: "What does two-factor authentication add?",
    options: ["A second independent proof of identity", "A duplicate copy of every database", "A faster internet connection", "An automatic report designer"],
    answer: 0,
    explanation: "Two-factor authentication requires an extra step, such as a code or device, beyond just a password.",
  },
  {
    prompt: "Why do integrated systems often use an API?",
    options: ['To let different applications exchange data and services in a controlled way', 'To remove the need for any security', 'To convert all of the tables into images', 'To store the data of each application in one shared text file without tables'],
    answer: 0,
    explanation: "An API provides a defined way for one system to request or send data to another.",
  },
  {
    prompt: "What does the principle of least privilege mean?",
    options: ["Every user should have administrator rights", "Users should receive only the access needed for their work", "All network traffic should be blocked permanently", "Passwords should never be changed"],
    answer: 1,
    explanation: "Least privilege reduces risk by limiting access to only what is necessary.",
  },
];

const bank: ITItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const NetworksSecuritySystemsIntegration = () => (
  <CapsSubjectTopic
    title="Networks, Security and Systems Integration"
    subtitle="Explaining modern communication structures and protecting connected systems"
    learnSteps={learnSteps}
    task="gr12-networks-security-systems-integration-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default NetworksSecuritySystemsIntegration;
