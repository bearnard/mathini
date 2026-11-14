import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

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
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"House Divided\" — Abraham Lincoln"}
        text={"A house divided against itself cannot stand. I do not expect the house to fall, but I do expect it will cease to be divided."}
        annotations={[
          { start: 0, end: 30, device: "metaphor", note: "The nation is compared to a split house to make political conflict easy to visualise." },
          { start: 31, end: 43, device: "imagery", note: "The image of a collapsing building strengthens the warning." },
          { start: 104, end: 123, device: "tone", note: "The closing phrase shifts the passage toward a determined, corrective tone." },
        ]}
      />
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
    options: ['to influence the audience to think or act', 'to list facts that are not related', 'to describe the weather patterns of a place', 'to present the script of a play'],
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
    options: ['A short, catchy phrase that is easy to remember', 'A long paragraph with many references', 'A table of the marks from an exam', 'A chapter summary from a novel'],
    answer: 'A short, catchy phrase that is easy to remember',
    explanation: 'Slogans are brief and memorable to support persuasion.',
  },
  {
    prompt: 'Why is layout important in a poster?',
    options: ["It guides the viewer's eye to the key information", 'It removes the need for any images', 'It changes a work of fiction into a poem', 'It only increases the word count'],
    answer: "It guides the viewer's eye to the key information",
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
    options: ['Who is this text for, and what does it want them to do?', 'How many desks are in the classroom?', 'What is the weather going to be this weekend?', 'Who printed the copies of the worksheet?'],
    answer: 'Who is this text for, and what does it want them to do?',
    explanation: 'Audience-purpose analysis asks exactly this.',
  },
  {
    prompt: 'A poster uses bright colours and a large image of sports shoes. The most likely target audience is...',
    options: ['young people who are interested in sport', 'retired historians who study the past', 'marine biologists who study the sea', 'book publishers and no other readers'],
    answer: 'young people who are interested in sport',
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

