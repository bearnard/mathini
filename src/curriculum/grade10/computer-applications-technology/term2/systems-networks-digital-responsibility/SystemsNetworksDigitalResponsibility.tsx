'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'System software and utility tools',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          System software manages the computer and allows application software to run. Learners should distinguish
          between operating systems, utility programs and application software.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Operating system</strong>
            <p className="mt-1 text-slate-600">Controls hardware, files, memory and user interaction.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Utility software</strong>
            <p className="mt-1 text-slate-600">Helps maintain the system through backup, antivirus and disk management tools.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Networks and data sharing',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Networks connect devices so that users can share files, printers, internet access and communication tools.
          A LAN covers a small area, while a WAN connects over larger distances.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">LAN</strong>
            <p className="mt-1 text-slate-600">A local area network inside a school, office or home.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">WAN</strong>
            <p className="mt-1 text-slate-600">A wide area network that links sites across towns, provinces or countries.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">Client-server</strong>
            <p className="mt-1 text-slate-600">A central server provides services and storage to connected client devices.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Digital responsibility and cyber safety',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Responsible digital users protect their accounts, respect privacy and evaluate online behaviour carefully.
          Cyber safety includes strong passwords, software updates, backups and suspicious-link awareness.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Digital citizenship</strong>
            <p className="mt-1 text-slate-600">Using technology respectfully, legally and ethically in school, work and social spaces.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Cyber threats</strong>
            <p className="mt-1 text-slate-600">Phishing, malware, identity theft and unsafe sharing can harm users and organisations.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Legal and ethical use of information',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          CAPS also covers plagiarism, copyright and fair use. Learners should cite sources, avoid illegal downloads
          and understand that personal data must be handled carefully.
        </p>
        <p className="rounded-xl bg-slate-50 p-4 text-slate-700">
          A responsible user does not only ask, Can I do this online? They also ask, Should I do this, and who could be affected?
        </p>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'What is the main role of an operating system?',
    options: ['A. To manage hardware and system resources', 'B. To replace the keyboard', 'C. To print photographs only', 'D. To design web pages automatically'],
    answer: 'A. To manage hardware and system resources',
    explanation: 'The operating system controls hardware and provides a platform for software and users.',
  },
  {
    prompt: 'A network inside one school building is usually a:',
    options: ['A. WAN', 'B. LAN', 'C. Satellite only', 'D. Search engine'],
    answer: 'B. LAN',
    explanation: 'A local area network covers a limited area such as a school or office.',
  },
  {
    prompt: 'Which action improves cyber safety?',
    options: ['A. Using one simple password everywhere', 'B. Clicking every link in an email', 'C. Updating software regularly', 'D. Sharing passwords with friends'],
    answer: 'C. Updating software regularly',
    explanation: 'Updates often fix security weaknesses and improve protection against threats.',
  },
  {
    prompt: 'Copying work from a website without acknowledgement is called:',
    options: ['A. Encryption', 'B. Compression', 'C. Plagiarism', 'D. Backup'],
    answer: 'C. Plagiarism',
    explanation: 'Plagiarism means using someone else work or ideas without proper credit.',
  },
  {
    prompt: 'In a client-server network, the server mainly:',
    options: ['A. Provides shared services to clients', 'B. Replaces all of the cables in the network', 'C. Is used only to play games on', 'D. Cannot store files for the users'],
    answer: 'A. Provides shared services to clients',
    explanation: 'Servers store data, manage users and provide services to connected client computers.',
  },
];

export default function SystemsNetworksDigitalResponsibility() {
  return (
    <CapsSubjectTopic
      title="Systems, Networks and Digital Responsibility"
      subtitle="Grade 10 · Computer Applications Technology · Term 2"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-systems-networks-digital-responsibility"
      apiPath="/api/caps/cat"
      grade={10}
    />
  );
}
