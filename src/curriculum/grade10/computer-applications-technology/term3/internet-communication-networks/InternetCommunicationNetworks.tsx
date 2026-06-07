'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/cat/term3/internet-communication-networks/diagram.webp", alt: "Internet, Communication and Networks" },
    title: 'Internet services and browsers',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The internet supports web browsing, email, cloud storage, streaming and online collaboration. Browsers allow
          users to access websites, while search engines help find information efficiently.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Browser</strong>
            <p className="mt-1 text-slate-600">Software used to access and display web pages.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Search engine</strong>
            <p className="mt-1 text-slate-600">A service that indexes online content and returns search results.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Search techniques and information quality',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Strong searches use keywords, quotation marks, filtering and careful source evaluation. Learners should avoid
          trusting the first result automatically.
        </p>
        <div className="rounded-xl bg-slate-50 p-5 text-slate-700">
          Search smarter by combining specific terms such as South Africa, Grade 10, spreadsheet formulas or digital safety.
        </div>
      </div>
    ),
  },
  {
    title: 'Email and digital communication etiquette',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Good digital communication is clear, polite and purposeful. Emails should include a subject line, a greeting,
          concise content and a professional closing.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Do</strong>
            <p className="mt-1 text-slate-600">Check tone, attachment names and recipient details before sending.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Do not</strong>
            <p className="mt-1 text-slate-600">Send rude messages, open unknown attachments or share private information carelessly.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Networks, communication and safety',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Internet communication depends on networks. Routers, cables, wireless signals and service providers all help
          connect devices, but users must still protect privacy and data.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-slate-700">
          <li>Use secure websites when entering personal data.</li>
          <li>Be cautious with public Wi-Fi networks.</li>
          <li>Log out of shared devices after use.</li>
        </ul>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'What is the main function of a browser?',
    options: ['A. To scan paper documents', 'B. To display and access web pages', 'C. To print only', 'D. To create hardware drivers'],
    answer: 'B. To display and access web pages',
    explanation: 'Browsers such as Chrome or Edge allow users to open and interact with websites.',
  },
  {
    prompt: 'Quotation marks in a web search are useful when you want:',
    options: ['A. A specific phrase', 'B. Only images', 'C. To delete history', 'D. To go offline'],
    answer: 'A. A specific phrase',
    explanation: 'Quotation marks help search engines return results containing the exact phrase.',
  },
  {
    prompt: 'Which email practice is most professional?',
    options: ['A. Leaving the subject blank', 'B. Writing a clear subject line', 'C. Typing only in capital letters', 'D. Sending to the wrong contact'],
    answer: 'B. Writing a clear subject line',
    explanation: 'A clear subject line helps the reader understand the purpose of the message quickly.',
  },
  {
    prompt: 'Why should users be cautious on public Wi-Fi?',
    options: ['A. It can expose data to security risks', 'B. It increases printer ink', 'C. It stops search engines', 'D. It changes file extensions'],
    answer: 'A. It can expose data to security risks',
    explanation: 'Public Wi-Fi may be less secure, so sensitive data should be handled carefully.',
  },
  {
    prompt: 'A search engine differs from a browser because a search engine:',
    options: ['A. Helps locate information online', 'B. Is the physical screen', 'C. Is a file manager', 'D. Stores RAM'],
    answer: 'A. Helps locate information online',
    explanation: 'Search engines index information, while browsers are the tools used to access websites.',
  },
];

export default function InternetCommunicationNetworks() {
  return (
    <CapsSubjectTopic
      title="Internet, Communication and Networks"
      subtitle="Grade 10 · Computer Applications Technology · Term 3"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-internet-communication-networks"
      apiPath="/api/caps/cat"
      grade={10}
    />
  );
}
