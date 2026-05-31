import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Choose correct correspondence format',
    image: {
      src: '/curriculum/grade8/eng/term2/formal-correspondence-reviews/diagram.webp',
      alt: 'learner drafting a formal letter email and review with correct structure',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Formal and informal letters, emails, and reviews each have clear conventions. Correct format helps readers
          understand purpose immediately.
        </p>
      </div>
    ),
  },
  {
    title: 'Use register that suits audience',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Register means language style. Formal writing uses respectful, precise phrasing, while semi-formal writing
          can be warmer but still controlled.
        </p>
      </div>
    ),
  },
  {
    title: 'Write balanced reviews with evidence',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Good reviews include judgement supported by examples. A clear recommendation should match the reasons given
          in the response.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which opening is most suitable for a formal letter?',
    options: ['Dear Sir or Madam,', 'Hey buddy,', 'Yo there!', 'What is up?'],
    answer: 'Dear Sir or Madam,',
    explanation: 'Formal letters begin with respectful greetings.',
  },
  {
    prompt: 'Which text type best suits feedback to a school principal?',
    options: ['formal letter', 'chat message slang post', 'poem with rhyme only', 'comic strip dialogue'],
    answer: 'formal letter',
    explanation: 'Official school communication needs formal structure and tone.',
  },
  {
    prompt: 'What is the main purpose of a review?',
    options: ['to evaluate a text or performance with reasons', 'to list grammar rules only', 'to provide only personal greetings', 'to record attendance numbers'],
    answer: 'to evaluate a text or performance with reasons',
    explanation: 'Reviews combine opinion with supporting evidence.',
  },
  {
    prompt: 'Which line shows appropriate formal register?',
    options: ['I would appreciate your response at your earliest convenience.', 'Please fix this now, it is ridiculous.', 'You people always ignore us.', 'This is super cool, thanks a lot!'],
    answer: 'I would appreciate your response at your earliest convenience.',
    explanation: 'The sentence is polite and suitable for formal communication.',
  },
  {
    prompt: 'A clear email subject line should...',
    options: ['summarise the email purpose', 'include random emojis only', 'replace the full email body', 'be unrelated to the message'],
    answer: 'summarise the email purpose',
    explanation: 'Subject lines help recipients understand the message quickly.',
  },
  {
    prompt: 'Which closing is best for a formal letter when the recipient is unknown?',
    options: ['Yours faithfully,', 'Cheers!', 'Later!', 'From your fan,'],
    answer: 'Yours faithfully,',
    explanation: 'This is a standard formal closing for unknown recipients.',
  },
  {
    prompt: 'In a review, evidence can include...',
    options: ['specific examples from the text or performance', 'only repeated adjectives', 'unrelated personal stories', 'a random final score with no reason'],
    answer: 'specific examples from the text or performance',
    explanation: 'Examples justify evaluation points clearly.',
  },
  {
    prompt: 'Why does audience awareness matter in correspondence?',
    options: ['It guides tone, detail and format choices.', 'It removes structure requirements.', 'It allows any slang in formal contexts.', 'It is only needed for poetry.'],
    answer: 'It guides tone, detail and format choices.',
    explanation: 'Writers adjust language and structure to suit who will read the text.',
  },
];

const FormalCorrespondenceReviews = () => (
  <CapsSubjectTopic
    title="Formal Correspondence and Reviews"
    subtitle="Letter and email conventions with audience-aware review writing"
    learnSteps={learnSteps}
    task="gr8-formal-correspondence-reviews-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default FormalCorrespondenceReviews;
