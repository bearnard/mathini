import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Match writing format to purpose',
    image: {
      src: '/curriculum/grade7/eng/term2/formal-functional-writing/diagram.webp',
      alt: 'learner choosing between formal letter, email, dialogue and descriptive writing formats',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Functional writing asks learners to choose the correct text type for a task, such as a formal letter, email,
          dialogue, or descriptive essay.
        </p>
      </div>
    ),
  },
  {
    title: 'Use register appropriate to audience',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Register</strong> means language style. Formal register is polite and structured, while informal
          register is relaxed and conversational.
        </p>
      </div>
    ),
  },
  {
    title: 'Apply layout conventions correctly',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Correct layout helps the reader follow your message. Include expected features such as greeting, subject,
          paragraphing, and closing where needed.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which text type is most suitable for writing to a principal about school uniform concerns?',
    options: ['Formal letter', 'Comic strip', 'Poem', 'Personal diary'],
    answer: 'Formal letter',
    explanation: 'A formal letter suits official communication with school leadership.',
  },
  {
    prompt: 'Which opening shows formal register?',
    options: ['Dear Sir or Madam,', 'Hey there!', 'Yo friend,', 'What is up?'],
    answer: 'Dear Sir or Madam,',
    explanation: 'Formal writing uses respectful and professional greetings.',
  },
  {
    prompt: 'What is the main purpose of a dialogue text?',
    options: [
      'to show conversation between speakers',
      'to list references in alphabetical order',
      'to report statistics in a table',
      'to describe lab equipment',
    ],
    answer: 'to show conversation between speakers',
    explanation: 'Dialogues present spoken exchanges between people.',
  },
  {
    prompt: 'Which choice best fits a descriptive essay?',
    options: [
      'Detailed sensory language about a place or event',
      'Only short commands with no detail',
      'A formal complaint heading and signature',
      'A list of test marks only',
    ],
    answer: 'Detailed sensory language about a place or event',
    explanation: 'Descriptive writing uses vivid detail to create a clear picture.',
  },
  {
    prompt: 'Audience awareness in formal writing means...',
    options: ['choosing respectful words for the intended reader', 'using slang in every one of the sentences', 'ignoring the instructions of the task', 'switching topics in each new paragraph'],
    answer: 'choosing respectful words for the intended reader',
    explanation: 'Writers adjust language to suit the audience and purpose.',
  },
  {
    prompt: 'Which closing line is most appropriate in a formal letter?',
    options: ['Yours faithfully,', 'See you later!', 'Cheers my buddy,', 'Cool, thanks!'],
    answer: 'Yours faithfully,',
    explanation: 'Formal correspondence ends with a respectful closing.',
  },
  {
    prompt: 'Why should an email have a clear subject line?',
    options: [
      'It tells the reader what the message is about',
      'It replaces the body of the email',
      'It makes punctuation unnecessary',
      'It is only decorative',
    ],
    answer: 'It tells the reader what the message is about',
    explanation: 'A subject line helps the reader quickly understand purpose.',
  },
  {
    prompt: 'Which text type best fits a task that asks for spoken turns between two classmates?',
    options: ['Dialogue', 'News report', 'Memoir', 'Summary paragraph'],
    answer: 'Dialogue',
    explanation: 'Dialogue format uses alternating speaker turns.',
  },
];

const FormalFunctionalWriting = () => (
  <CapsSubjectTopic
    title="Formal and Functional Writing"
    subtitle="Format, register and audience-purpose choices in practical writing"
    learnSteps={learnSteps}
    task="gr7-formal-functional-writing-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default FormalFunctionalWriting;

