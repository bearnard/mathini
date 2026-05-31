import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Analyse visual and persuasive texts',
    image: {
      src: '/curriculum/grade7/eng/term3/visual-literacy-persuasive-texts/diagram.webp',
      alt: 'learner analysing an advertisement and poster for persuasive language and audience',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Visual literacy in Term 3 focuses on advertisements and posters. Learners identify persuasive language, image
          choices, and layout features that influence readers.
        </p>
      </div>
    ),
  },
  {
    title: 'Identify audience and purpose',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Every persuasive text targets a specific audience. Good analysis explains who the text is aimed at and what
          response it wants from that audience.
        </p>
      </div>
    ),
  },
  {
    title: 'Evaluate hooks, slogans and design choices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong posters use eye-catching hooks, memorable slogans, and deliberate layout to attract attention and
          drive action.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main purpose of persuasive language in an advertisement?',
    options: [
      'to influence the audience to think or act',
      'to list unrelated facts only',
      'to describe weather patterns',
      'to present a play script',
    ],
    answer: 'to influence the audience to think or act',
    explanation: 'Persuasive language aims to convince people.',
  },
  {
    prompt: 'A target audience is...',
    options: [
      'the specific group a text is aimed at',
      'all people in the country at once',
      'the teacher marking the test',
      'only the writer family',
    ],
    answer: 'the specific group a text is aimed at',
    explanation: 'Writers design texts for particular readers or viewers.',
  },
  {
    prompt: 'Which feature is most likely a slogan?',
    options: [
      'A short, catchy phrase that is easy to remember',
      'A long paragraph with references',
      'A table of exam marks',
      'A chapter summary from a novel',
    ],
    answer: 'A short, catchy phrase that is easy to remember',
    explanation: 'Slogans are brief and memorable to support persuasion.',
  },
  {
    prompt: 'Why is layout important in a poster?',
    options: [
      'It guides the viewer eye to key information',
      'It removes the need for images',
      'It changes fiction into poetry',
      'It only increases word count',
    ],
    answer: 'It guides the viewer eye to key information',
    explanation: 'Layout controls how quickly and clearly viewers process content.',
  },
  {
    prompt: 'Which phrase is an example of a persuasive hook?',
    options: ['Act now and protect your future!', 'The file is on page 12.', 'It was cloudy yesterday.', 'The bell rang at ten.'],
    answer: 'Act now and protect your future!',
    explanation: 'This phrase is direct and urges immediate action.',
  },
  {
    prompt: 'In AIDA, the letter A at the start usually stands for...',
    options: ['Attention', 'Accuracy', 'Assessment', 'Action plan'],
    answer: 'Attention',
    explanation: 'AIDA begins by grabbing the audience attention.',
  },
  {
    prompt: 'Which question best checks audience and purpose?',
    options: [
      'Who is this text for, and what does it want them to do?',
      'How many desks are in the classroom?',
      'What is the weather this weekend?',
      'Who printed the worksheet?',
    ],
    answer: 'Who is this text for, and what does it want them to do?',
    explanation: 'Audience-purpose analysis asks exactly this.',
  },
  {
    prompt: 'A poster uses bright colours and a large image of sports shoes. The most likely target audience is...',
    options: ['young people interested in sport', 'retired historians', 'marine biologists only', 'book publishers only'],
    answer: 'young people interested in sport',
    explanation: 'Visual clues suggest the poster is aimed at youth sport consumers.',
  },
];

const VisualLiteracyPersuasiveTexts = () => (
  <CapsSubjectTopic
    title="Visual Literacy and Persuasive Texts"
    subtitle="Advertisements, posters, audience targeting and persuasive techniques"
    learnSteps={learnSteps}
    task="gr7-visual-literacy-persuasive-texts-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default VisualLiteracyPersuasiveTexts;

