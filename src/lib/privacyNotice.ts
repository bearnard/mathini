// Privacy notice copy: the ONE place to edit the wording. It is shown on the
// register form (PRIVACY_LINE) and on the /privacy page (PRIVACY_SECTIONS).
//
// When the meaning of this text changes, bump CONSENT_VERSION below so we can
// tell which notice a learner agreed to. The server stores it with the consent.

/** Version of the notice + tick-box text. Bump whenever either changes. */
export const CONSENT_VERSION = 'privacy-2026-11-15-v5';

/** The required sign-up tick-box (and the one-time prompt for existing learners). */
export const CONSENT_CHECKBOX_LABEL =
  'My parent or guardian agrees that PrepPals may record my activity and approximate town or city to improve the app.';

export const PRIVACY_LINE =
  "We count how PrepPals is used (pages, topics and practice) and your approximate city, to make the app better. We never store your IP address. Only the app's owner can see this.";

export interface PrivacySection {
  heading: string;
  body: string[];
}

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    heading: 'What we collect',
    body: [
      'When you use PrepPals we record simple activity: which pages and topics you open, when you start and finish practice or a mock test, and when you sign up or log in.',
      'We also record your approximate location (country, province and city, worked out by our hosting provider from your connection) and the type of device, browser and operating system you use. We do not keep exact positions: coordinates are rounded to about 10 km.',
      'If you have an account, this activity is linked to it, together with your answers to practice questions, so you can see your progress.',
    ],
  },
  {
    heading: 'What we do not collect',
    body: [
      'We never store your IP address, and we do not keep your full browser details.',
      'The app and the learner, parent and teacher areas never show ads and never use third-party analytics. We do not sell or share this information.',
    ],
  },
  {
    heading: 'Why',
    body: ['To understand how PrepPals is used, find topics that learners struggle with, and make the app better.'],
  },
  {
    heading: 'Who can see it',
    body: [
      'The owner of PrepPals can see how the app is used. This information is kept for up to 400 days.',
      'A parent or guardian who has linked their child to their own PrepPals account can see their child\'s progress, practice and consent setting. If a learner joins a class with a code from their teacher, that teacher sees the learner\'s nickname and progress in that class. The learner is told this before joining and can leave at any time.',
      'Nobody else can see a learner\'s activity.',
    ],
  },
  {
    heading: 'Parent or guardian agreement',
    body: [
      'To create an account, a learner ticks a box to confirm that their parent or guardian agrees that PrepPals may record their activity and approximate town or city. Learners who already had an account are asked the same question once, and can choose "Not now" and keep learning.',
      'Without that agreement we do not link activity to the learner and we do not record their town or city. We only count that a visit happened, with the country and province it came from.',
    ],
  },
  {
    heading: 'Parent and teacher accounts',
    body: [
      'Parents and teachers sign in with their email address. We keep the address, a record of their sign-ins, and for a parent the children they have linked and their weekly-email setting.',
      'A teacher also gives their SACE registration number, school and province. We use them only to check the teacher before approving the account, and they are deleted with the account.',
      'Sign-in links and the optional weekly summary are delivered by our email provider, Resend. It is the only other company that handles any of this, and the emails only contain a sign-in link or a learner\'s practice results.',
      'A parent can give or withdraw consent for their child at any time, and a parent\'s consent replaces the tick-box the learner ticked.',
    ],
  },
  {
    heading: 'Google Tag Manager, Analytics and ads on the public pages',
    body: [
      'The public pages (the home page, the grade, subject and topic pages, For parents, For teachers and this page) can use Google Tag Manager and Google Analytics to count visits. They only run if you press Accept in the banner. If you press Decline, or your browser sends Do Not Track or Global Privacy Control, they do not.',
      'The same Accept also lets the topic and subject pages show a Google ad (Google AdSense). These ads are non-personalised: we ask Google not to use your interests or browsing history, and we switch off ad personalisation and ad storage in Tag Manager. If you press Decline, no ad is requested and Google\'s ad code does not load. Your choice is kept in your browser for six months, and you can change it at any time with the button below.',
      'Neither Google\'s analytics nor its ads are ever loaded inside the app, or in the learner, parent or teacher areas, the admin or the review pages. Those areas never show ads.',
    ],
  },
  {
    heading: 'Do Not Track',
    body: [
      'If your browser sends a Do Not Track signal, we only count that a page was visited. We do not link it to your account, your city or your device.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      'You, or your parent or guardian, can ask us to delete your account and everything linked to it. Contact the person who gave you access to PrepPals.',
      'Parents and teachers can delete their own account at any time from their account page. That removes the account, the links to children, a teacher\'s application and SACE number, and a teacher\'s classes. It does not delete any learner\'s account.',
    ],
  },
];
