import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Master letter formats and register',
    image: {
      src: '/curriculum/grade9/english/term2/letters-reviews/image1.jpg',
      alt: 'learner comparing formal letter and friendly letter layouts with appropriate tone',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Friendly letters use casual language and simple layout; formal letters follow strict conventions with 
          proper salutations, indentation, and professional tone. Register (formal vs informal) must match the relationship 
          and context.
        </p>
      </div>
    ),
  },
  {
    title: 'Write effective reviews with clear criteria',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reviews evaluate products, services, or performances against specific criteria. Use a consistent structure: 
          introduce what you\'re reviewing, assess key aspects, and conclude with a recommendation or overall rating.
        </p>
      </div>
    ),
  },
  {
    title: 'Apply process writing to transactional tasks',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Plan your letter or review before writing to organize ideas and ensure proper structure. Revise to improve 
          clarity, tone, and layout so your message reaches the intended audience effectively.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which is a feature of a formal letter?',
    options: ["sender's address, date, recipient's address and a proper greeting", 'the date at the end and a first-name greeting', 'a slogan at the top and a friendly closing line', 'a casual greeting such as "Hi" and no addresses'],
    answer: "sender's address, date, recipient's address and a proper greeting",
    explanation: 'Formal letters follow strict formatting conventions to show respect and professionalism.',
  },
  {
    prompt: 'What tone should a friendly letter use?',
    options: ['warm, personal, and conversational', 'only formal vocabulary', 'confusing and unclear', 'very short with no detail'],
    answer: 'warm, personal, and conversational',
    explanation: 'Friendly letters prioritize connection and natural expression.',
  },
  {
    prompt: 'Which salutation is appropriate for a formal letter to an unknown person?',
    options: ['Dear Sir or Madam,', 'Hey!', 'Hello buddy,', 'Hi there,'],
    answer: 'Dear Sir or Madam,',
    explanation: 'Formal salutations show respect when you don\'t know the recipient\'s name.',
  },
  {
    prompt: 'What is register in writing?',
    options: ['the level of formality that suits the situation and audience', 'the number of words used in a piece of writing', 'the choice between prose and verse in a text', 'the order in which paragraphs are arranged'],
    answer: 'the level of formality that suits the situation and audience',
    explanation: 'Register helps match your language choices to context and reader.',
  },
  {
    prompt: 'A review should include...',
    options: ['what is reviewed, criteria for judging it and a recommendation', 'only positive comments about what is being reviewed', 'a retelling of the whole plot or the contents of it', 'personal opinions about the people who made it'],
    answer: 'what is reviewed, criteria for judging it and a recommendation',
    explanation: 'Structured reviews help readers make informed decisions.',
  },
  {
    prompt: 'Which statement shows an effective review criterion?',
    options: ['The service was quick and accurate compared to competitors.', 'I liked it a lot and I would use it again.', 'It was nice and I think that others will like it.', 'It is a product that many people use every day.'],
    answer: 'The service was quick and accurate compared to competitors.',
    explanation: 'Specific criteria help readers understand the review\'s basis.',
  },
  {
    prompt: 'How should you close a formal letter?',
    options: ['Yours sincerely,', 'Later!', 'Bye!', 'See you soon!'],
    answer: 'Yours sincerely,',
    explanation: 'Professional closing phrases maintain formality to the end.',
  },
  {
    prompt: 'Why is register important in a letter to a teacher?',
    options: ['It shows respect and professionalism in a school relationship.', 'Teachers do not mind the tone that a learner uses.', 'A casual tone suits a teacher who is friendly.', 'A letter to a teacher needs no planning of its parts.'],
    answer: 'It shows respect and professionalism in a school relationship.',
    explanation: 'Register acknowledges the nature and power dynamic of the relationship.',
  },
];

const LettersReviews = () => (
  <CapsSubjectTopic
    title="Letters and Reviews"
    subtitle="Friendly letters, formal letters, register, review criteria and process writing"
    learnSteps={learnSteps}
    task="gr9-letters-reviews-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LettersReviews;
