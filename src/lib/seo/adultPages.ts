// The words of the /for-parents and /for-teachers pages. One place, so the page and its FAQ structured data say the same thing, and the claims are
// easy to check against what is live (docs/notes/parents.md, docs/notes/adult-auth.md, the teacher area). Do not promise anything that is not built.

export interface Faq { q: string; a: string }
export interface AdultPage {
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  gets: { heading: string; body: string }[];
  steps: string[];
  privacy: string[];
  faq: Faq[];
  cta: { label: string; href: string };
}

export const FOR_PARENTS: AdultPage = {
  path: '/for-parents',
  title: 'PrepPals for Parents: Progress, Consent and PIN Help',
  description: 'See how your child is doing on PrepPals, give or withdraw consent, reset a forgotten PIN and get a short weekly summary. Sign in with your email, no password.',
  h1: 'PrepPals for parents',
  intro: 'Follow how your child is doing, decide what PrepPals may record, and help if their PIN is forgotten. There is no password: you sign in with a link we email you.',
  gets: [
    { heading: 'Progress at a glance', body: 'For each linked child: how ready they are for exams, how many of the last 14 days they practised, and their streak. On request you also see the next step, the subjects with the topics that need the most work, and recent tests.' },
    { heading: 'Consent in your hands', body: 'When you link your child you can confirm that you agree to PrepPals recording their activity and approximate town or city. Your agreement replaces the tick-box your child ticked, and you can withdraw it at any time. Without it we do not link activity to your child or record their town.' },
    { heading: 'PIN reset', body: 'If your child forgets their 4-digit PIN you can make a new one. It is shown to you once, and your child is signed out on every other device.' },
    { heading: 'A short weekly summary', body: 'Once a week, on Sunday, we can email you a short summary of how the children you have given consent for practised: days practised, tests, topics getting better and topics that need attention. Switch it off with one click in any email, or on your page.' },
  ],
  steps: [
    'Sign in with your email address. We send you a link that works once, for 15 minutes.',
    'Link your child: enter their login code and PIN, or open the invite link that your child can make from their own PrepPals screen (it works for 60 minutes).',
    'Tick the box if you agree to PrepPals recording your child’s activity. You can link without ticking, and you can change your mind later.',
  ],
  privacy: [
    'You only ever see children you have linked yourself. You never see their login code, PIN, real name, school or age.',
    'Other learners, other parents and other teachers never see your child’s progress through you.',
    'We do not use advertising or third-party analytics, and we do not sell or share this information. The weekly email is delivered by our email provider, and it only uses your child’s practice results.',
    'You can delete your own account at any time from your account page. Your child’s account and progress stay as they are.',
  ],
  faq: [
    { q: 'Do I need a password?', a: 'No. You sign in with a link we email you. It works once and for 15 minutes.' },
    { q: 'Who can see my child’s progress?', a: 'You, once you have linked your child, and the owner of PrepPals. If your child joins a class, their teacher sees their nickname and progress in that class.' },
    { q: 'Can I withdraw consent?', a: 'Yes, at any time from your page. Activity is then no longer linked to your child, and their town is no longer recorded.' },
    { q: 'My child forgot their PIN. What do I do?', a: 'Sign in, open your child’s card and reset the PIN. You get the new PIN once. Your child is signed out on their other devices.' },
    { q: 'How do I delete my account?', a: 'On your account page there is a two-step delete. It removes your account, your links to children and your email settings. Your child’s account is not touched.' },
  ],
  cta: { label: 'Sign in as a parent', href: '/sign-in' },
};

export const FOR_TEACHERS: AdultPage = {
  path: '/for-teachers',
  title: 'PrepPals for Teachers: Classes, Exam Scope and Progress',
  description: 'Create classes with a join code, set the exam scope and date, and see how your class is doing, by nickname. Every teacher is checked (SACE) before it is turned on.',
  h1: 'PrepPals for teachers',
  intro: 'Create classes, choose what an exam covers and when it is, and see how your class is doing. We check every teacher before teacher tools are turned on.',
  gets: [
    { heading: 'Classes with a join code', body: 'Make a class for a grade and subjects. Learners join with the code you give them and can leave at any time. You see who is in the class by nickname.' },
    { heading: 'How the class is doing', body: 'See which topics the class is finding easy or hard, how mock tests went, and how the class has improved since a date you choose. It is built to encourage: learners are not ranked.' },
    { heading: 'Exam scope and countdown', body: 'Pick the topics an exam covers and its date. Learners in your class get a countdown and practice that matches your scope.' },
  ],
  steps: [
    'Sign in with your email address. We send you a link that works once, for 15 minutes.',
    'Open your account page and choose “Apply as a teacher”. Give your SACE registration number, your school and your province.',
    'We check your details and approve your application. Until then it shows as waiting. If it is not approved you can apply again after 30 days.',
    'Make your first class and share its join code with your learners.',
  ],
  privacy: [
    'Before a learner joins your class they are told what you will see: their nickname and their progress in the class. They can leave at any time.',
    'You only see learners in your own classes. You never see their login code, PIN, real name or school, and you cannot see other teachers’ classes.',
    'Your SACE number is used only to check your application. It is deleted if you delete your account, along with your classes.',
    'We do not use advertising or third-party analytics, and we do not sell or share this information.',
  ],
  faq: [
    { q: 'Why do you check teachers?', a: 'Teachers see learners’ progress, so we confirm each teacher’s SACE registration and school before turning teacher tools on.' },
    { q: 'What do learners tell me?', a: 'Nothing is shared beyond their nickname and their progress in your class. They are told this before they join.' },
    { q: 'How long does approval take?', a: 'We approve applications by hand, so it is not instant. Your account page shows whether your application is waiting.' },
    { q: 'What if my application is not approved?', a: 'Your account page shows the reason we gave, and you can apply again after 30 days.' },
    { q: 'Can I delete my account?', a: 'Yes, from your account page. Your account, your SACE number, your classes and their join codes are removed. Learners’ own accounts are not touched.' },
  ],
  cta: { label: 'Sign in to apply as a teacher', href: '/sign-in' },
};

export const ADULT_PAGES: AdultPage[] = [FOR_PARENTS, FOR_TEACHERS];
