'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Social responsibility and ethics',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Social responsibility means that businesses should consider the impact of their decisions on workers,
          customers, communities and the environment. Ethical behaviour supports trust and long-term success.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Ethics</strong>
            <p className="mt-1 text-slate-600">Moral principles such as honesty, fairness, respect and accountability.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Social responsibility</strong>
            <p className="mt-1 text-slate-600">Practical actions such as supporting schools, reducing pollution or treating staff fairly.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Main forms of ownership',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Forms of ownership differ in terms of capital, liability, decision-making and legal identity. Learners must
          compare advantages and disadvantages when recommending an option.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">Sole trader and partnership</strong>
            <p className="mt-1 text-slate-600">Easy to start, but owners often have unlimited liability.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-800">Private company and public company</strong>
            <p className="mt-1 text-slate-600">Separate legal entities with limited liability, but more legal requirements.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Choosing the right ownership form',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The best ownership form depends on the size of the business, the amount of capital needed and the level of
          risk the owners are willing to accept.
        </p>
        <div className="rounded-xl bg-amber-50 p-5">
          <ul className="list-disc space-y-1 pl-5 text-slate-700">
            <li>Small service businesses often begin as sole traders.</li>
            <li>Two or more owners may prefer a partnership if they trust each other and share skills.</li>
            <li>Businesses planning major growth often choose a company structure.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Ownership and responsibility',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          No matter which ownership form is used, the business should act responsibly. Good governance includes obeying
          laws, paying workers fairly, protecting customers and reporting honestly.
        </p>
        <p className="rounded-xl bg-slate-50 p-4 text-slate-700">
          A responsible company does not only aim for profit. It balances profit with people and the environment.
        </p>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'What does unlimited liability mean?',
    options: ['A. Owners can lose personal assets for business debts', 'B. The government owns the business', 'C. Shares are sold publicly', 'D. There is no need for records'],
    answer: 'A. Owners can lose personal assets for business debts',
    explanation: 'With unlimited liability, the owner is personally responsible for business debts.',
  },
  {
    prompt: 'Which ownership form has only one owner?',
    options: ['A. Partnership', 'B. Sole trader', 'C. Public company', 'D. Cooperative bank'],
    answer: 'B. Sole trader',
    explanation: 'A sole trader is owned and usually managed by one person.',
  },
  {
    prompt: 'Ethical behaviour in business includes:',
    options: ['A. False advertising', 'B. Fair treatment of customers', 'C. Hiding defects', 'D. Ignoring the law'],
    answer: 'B. Fair treatment of customers',
    explanation: 'Ethics includes honesty, fairness and respect for all stakeholders.',
  },
  {
    prompt: 'Which factor is most important when choosing a form of ownership?',
    options: ['A. The business needs and level of risk', 'B. The colour of the office', 'C. The owners favourite sport', 'D. The brand of calculator used'],
    answer: 'A. The business needs and level of risk',
    explanation: 'Capital needs, growth plans and liability are key when choosing an ownership form.',
  },
  {
    prompt: 'A company is different from a sole trader because a company:',
    options: ['A. Has no legal identity', 'B. Is a separate legal entity', 'C. Cannot make profit', 'D. Has only informal rules'],
    answer: 'B. Is a separate legal entity',
    explanation: 'Companies exist separately from their owners and usually offer limited liability.',
  },
];

export default function SocialResponsibilityOwnership() {
  return (
    <CapsSubjectTopic
      title="Social Responsibility and Forms of Ownership"
      subtitle="Grade 10 · Business Studies · Term 2"
      learnSteps={learnSteps}
      bank={bank}
      task="gr10-social-responsibility-forms-ownership"
      apiPath="/api/caps/bus"
      grade={10}
    />
  );
}
