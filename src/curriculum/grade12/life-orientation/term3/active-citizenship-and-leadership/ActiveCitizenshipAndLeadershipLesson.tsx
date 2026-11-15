import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Loop, Spokes } from '@/components/diagrams/lo/LoPictures';

export const actions = {
  active: ['Helping run an anti-bullying campaign', 'Learning about a school issue before speaking about it', 'Joining a clean-up of a local park'],
  notActive: ['Ignoring unfair treatment of others', 'Waiting for the principal to act first', 'Posting rumours about a bully online'],
};
export const planSteps = ['Consult', 'Plan', 'Act lawfully', 'Reflect'] as const;
export const spokes = ['Informed', 'Involved', 'Respectful', 'Takes action'] as const;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const text = 'text-lg leading-8 text-slate-600';

export const learnSteps: LearnStep[] = [
  {
    title: 'What active citizenship means',
    content: slide(
      <>
        <p className={text}>Active citizenship is more than knowing your rights. It is informed, ongoing involvement in community life, with respectful dialogue and a willingness to act when problems affect justice, inclusion or wellbeing. A citizen who votes and then stops taking part is not yet an active citizen.</p>
        <Spokes centre="Active citizen" spokes={spokes} aria="A centre circle, active citizen, with four spokes: informed, involved, respectful, and takes action." />
        <Worked
          title="Active or not?"
          steps={[
            <>Active: {actions.active[0].toLowerCase()}. It is informed, respectful and practical.</>,
            <>Not active: {actions.notActive[0].toLowerCase()}, or {actions.notActive[1].toLowerCase()}.</>,
            <>Not responsible: {actions.notActive[2].toLowerCase()}. Rumours spread harm. They are not informed action.</>,
          ]}
        />
        <Mistake>Waiting for leaders to solve problems, or voting once every five years and stopping. Citizenship is ongoing and informed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ethical leadership',
    content: slide(
      <>
        <p className={text}>Leadership in Life Orientation is based on service and ethics. Good leaders listen, include other people, model fairness and use their influence to meet real needs. They take responsibility and use evidence. They do not seek control at any cost, ignore other viewpoints or use fear.</p>
        <Rule>An ethical leader serves others fairly and responsibly.</Rule>
        <Worked
          title="Leading a school anti-bullying committee"
          steps={[
            <>Listen: ask learners from every grade what they experience.</>,
            <>Include: invite quieter learners and those who disagree to join.</>,
            <>Model fairness: apply the same rules to friends and to others.</>,
          ]}
        />
        <Mistake>Thinking leadership is status or control. A leader who excludes people who disagree is not leading ethically.</Mistake>
      </>,
    ),
  },
  {
    title: 'Diversity, social cohesion and justice',
    content: slide(
      <>
        <p className={text}>Diversity means people have different backgrounds and experiences. A democracy is stronger when diversity is respected, because it supports equality, participation and richer problem-solving. Social cohesion is belonging and cooperation in society despite differences. Social justice means everyone deserves fair treatment and rights.</p>
        <Rule>Social cohesion is not identical views. It is people living and working together across differences.</Rule>
        <Worked
          title="Building cohesion in a mixed team"
          steps={[
            <>A project team has learners from different cultures and language groups.</>,
            <>Reject prejudice: judge ideas on their merit, not on who said them.</>,
            <>Build belonging: give every member a real role and a voice.</>,
          ]}
        />
        <Mistake>Believing differences should be hidden to avoid disagreement. Hiding them weakens inclusion. Respecting them strengthens it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Planning ethical action',
    content: slide(
      <>
        <p className={text}>Civic action such as campaigns, awareness drives, dialogue forums and service projects needs clear goals, lawful methods and thought about the consequences. Ethical action protects rights and keeps participation fair. Before launching, leaders should consult others, use the available evidence and plan realistically.</p>
        <Loop steps={planSteps} aria="A loop of four steps: consult, plan, act lawfully, reflect, then back to consulting." />
        <Worked
          title="An anti-bullying awareness drive"
          steps={[
            <>Consult: learners, teachers and the school's counsellor.</>,
            <>Plan: a clear goal, a date, tasks for each team member, and a lawful, respectful method such as posters and an assembly talk.</>,
            <>Act, then reflect: what changed, who was left out, what to improve next time?</>,
          ]}
        />
        <Mistake>Assuming you already know every answer or ignoring the evidence. Action planned without consultation is less effective and less inclusive.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Define active citizenship in one sentence.</>,
          <>Give two qualities of an ethical leader.</>,
          <>What is social cohesion, and why does a democracy need diversity?</>,
          <>Put these in order: act lawfully, consult, reflect, plan.</>,
        ]}
        answers={[
          <>Informed, ongoing involvement in community life, with respect and action when problems arise.</>,
          <>For example: serves others fairly, listens, includes others, takes responsibility.</>,
          <>Social cohesion is belonging and cooperation despite differences. Diversity brings different experiences and strengthens inclusion.</>,
          <>{planSteps.join(', ').toLowerCase()}. Consultation and planning come before action.</>,
        ]}
      />,
    ),
  },
];

