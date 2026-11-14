// Privacy notice copy: the ONE place to edit the wording. It is shown on the
// register form (PRIVACY_LINE) and on the /privacy page (PRIVACY_SECTIONS).
//
// When the meaning of this text changes, bump CONSENT_VERSION below so we can
// tell which notice a learner agreed to. The server stores it with the consent.

/** Version of the notice + tick-box text. Bump whenever either changes. */
export const CONSENT_VERSION = 'privacy-2026-11-14-v2';

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
      'We do not use advertising or third-party analytics, and we do not sell or share this information.',
    ],
  },
  {
    heading: 'Why',
    body: ['To understand how PrepPals is used, find topics that learners struggle with, and make the app better.'],
  },
  {
    heading: 'Who can see it',
    body: ['Only the owner of PrepPals can see this information. It is kept for up to 400 days.'],
  },
  {
    heading: 'Parent or guardian agreement',
    body: [
      'To create an account, a learner ticks a box to confirm that their parent or guardian agrees that PrepPals may record their activity and approximate town or city. Learners who already had an account are asked the same question once, and can choose "Not now" and keep learning.',
      'Without that agreement we do not link activity to the learner and we do not record their town or city. We only count that a visit happened, with the country and province it came from.',
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
    ],
  },
];
