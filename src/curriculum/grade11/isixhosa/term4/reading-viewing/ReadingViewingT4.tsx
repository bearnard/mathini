import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ReadingViewingT4.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'What is the most important step when integrating a quotation into an essay answer?',
    options: [
      'Explaining the significance of the quotation in relation to your argument',
      'Placing the quotation in the largest font',
      'Using a quotation that is longer than three sentences',
      'Ending your paragraph with the quotation',
    ],
    answer: 'Explaining the significance of the quotation in relation to your argument',
    explanation: 'A quotation without explanation is worthless — the explanation demonstrates your analytical understanding.',
  },
  {
    prompt: 'In a summary task, which practice will LOSE you marks?',
    options: [
      'Copying sentences verbatim from the source text',
      'Paraphrasing ideas in your own words',
      'Keeping to the required number of points',
      'Using correct grammar and punctuation',
    ],
    answer: 'Copying sentences verbatim from the source text',
    explanation: 'CAPS summary tasks require you to demonstrate comprehension by restating ideas in your own words — verbatim copying earns no credit.',
  },
  {
    prompt: 'What is the difference between a "literal" and an "inferential" comprehension question?',
    options: [
      'Literal questions can be answered directly from the text; inferential questions require reading between the lines',
      'Literal questions are always about vocabulary; inferential ones are about grammar',
      'Literal questions are harder than inferential ones',
      'They mean exactly the same thing',
    ],
    answer: 'Literal questions can be answered directly from the text; inferential questions require reading between the lines',
    explanation: 'Literal comprehension = stated information; inferential comprehension = implied meaning that requires reasoning from context.',
  },
  {
    prompt: 'What does a "dynamic character" do across the narrative?',
    options: [
      'Changes and develops as a result of the events they experience',
      'Remains exactly the same from start to finish',
      'Appears only in one scene',
      'Is always the main villain',
    ],
    answer: 'Changes and develops as a result of the events they experience',
    explanation: 'Dynamic characters grow or change — their development is often tied to the central theme of the text.',
  },
  {
    prompt: 'When analysing a visual advertisement, what should you identify FIRST?',
    options: [
      'The purpose — what the advertisement is trying to achieve',
      'The number of colours used',
      'The physical dimensions of the image',
      'Whether the advertisement is in colour or black and white',
    ],
    answer: 'The purpose — what the advertisement is trying to achieve',
    explanation: 'Understanding purpose frames all subsequent analysis — a sales ad, an awareness campaign, and a political poster use design very differently.',
  },
  {
    prompt: 'How should you handle a word you do not know in an unseen comprehension passage?',
    options: ['Use context clues to infer its likely meaning', 'Leave the question blank and move on', 'Translate the word directly into English', 'Assume it means the opposite of the word before it'],
    answer: 'Use context clues to infer its likely meaning',
    explanation: 'Context clues — definition, example, contrast, and general sense — help you infer meaning even for unfamiliar vocabulary.',
  },
  {
    prompt: 'What is the purpose of a "tagline" or caption in a visual text?',
    options: [
      'To reinforce or complement the visual image with words, creating a unified message',
      'To provide technical information about the printing process',
      'To list the names of everyone who created the advertisement',
      'To describe the background of the image',
    ],
    answer: 'To reinforce or complement the visual image with words, creating a unified message',
    explanation: 'Taglines anchor the visual — they direct how the viewer interprets the image and reinforce the desired message.',
  },
  {
    prompt: 'In a summary, why must you keep to the required number of points?',
    options: ['Marks go per relevant point; extra points earn nothing and confuse', 'The question is only asking for a count of sentences', 'Longer summaries always earn higher marks', 'The marker ignores any points beyond the first one'],
    answer: 'Marks go per relevant point; extra points earn nothing and confuse',
    explanation: 'In CAPS, summary marks are allocated per point — adding extra points wastes time and can introduce incorrect information.',
  },
  {
    prompt: 'When revising themes in a literature set work, what evidence should you primarily use?',
    options: [
      'Character actions, dialogue, and specific events in the plot',
      'The author\'s biography and personal life',
      'The book\'s cover design and publication date',
      'Reviews written by other learners',
    ],
    answer: 'Character actions, dialogue, and specific events in the plot',
    explanation: 'Theme analysis must be grounded in the text — character behaviour, spoken words, and plot events are the evidence base.',
  },
];

const ReadingViewingT4 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Literature revision, comprehension skills, visual texts, and summary writing"
    learnSteps={learnSteps}
    task="gr11-xho-reading-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT4;
