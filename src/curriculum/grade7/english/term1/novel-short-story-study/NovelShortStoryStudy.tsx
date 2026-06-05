import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    title: 'Read stories through key literary elements',
    image: {
      src: '/curriculum/grade7/eng/term1/novel-short-story-study/diagram.webp',
      alt: 'learner mapping character, plot, conflict, setting and theme from a short story',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In Grade 7 story study, readers track <strong>character</strong>, <strong>plot</strong>,{' '}
          <strong>conflict</strong>, <strong>setting</strong>, and <strong>theme</strong> to explain meaning.
        </p>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"The Secret Garden\" — Frances Hodgson Burnett"}
        text={"The robin flew to the nearest tree and began to sing. Mary felt as if the small bright creature were showing her where to look."}
        annotations={[
          { start: 39, end: 52, device: "tone", note: "The gentle action creates a hopeful, inviting tone in the scene." },
          { start: 64, end: 112, device: "simile", note: "Mary imagines the bird guiding her, revealing how narration can show character feeling." },
          { start: 74, end: 95, device: "diction", note: "These carefully chosen words make the robin seem lively and important." },
          { start: 96, end: 126, device: "personification", note: "The robin is given almost human intention, which adds magic to the episode." },
        ]}
      />
    ),
  },
  {
    title: 'Use evidence when discussing stories',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong answers quote or describe details from the text. Evidence helps you justify why a character acts in
          a certain way or how a conflict develops.
        </p>
      </div>
    ),
  },
  {
    title: 'Sequence events and connect to theme',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Plot sequencing shows cause and effect. When you place events in the correct order, it becomes easier to
          see the story theme and message.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which element tells you where and when a story happens?',
    options: ['Setting', 'Theme', 'Conflict', 'Tone'],
    answer: 'Setting',
    explanation: 'Setting gives the place and time of the story.',
  },
  {
    prompt: 'What is the plot of a short story?',
    options: [
      'The sequence of main events',
      'The list of difficult words',
      'The font style in the book',
      'The number of paragraphs only',
    ],
    answer: 'The sequence of main events',
    explanation: 'Plot is the order in which important events happen.',
  },
  {
    prompt: 'A conflict in a story is best described as...',
    options: ['a problem or struggle', 'the final sentence', 'a title page design', 'a rhyme pattern'],
    answer: 'a problem or struggle',
    explanation: 'Conflict is the challenge characters face.',
  },
  {
    prompt: 'Which question helps identify theme?',
    options: [
      'What big idea does this story teach?',
      'How many commas are in paragraph one?',
      'Which page has the shortest sentence?',
      'What colour is the book cover?',
    ],
    answer: 'What big idea does this story teach?',
    explanation: 'Theme is the deeper idea or message in a story.',
  },
  {
    prompt: 'Why should you use evidence in a literature answer?',
    options: [
      'To support your point with proof from the text',
      'To make your answer longer without meaning',
      'To avoid reading the story carefully',
      'To replace all your own thinking',
    ],
    answer: 'To support your point with proof from the text',
    explanation: 'Evidence shows that your answer is based on the story.',
  },
  {
    prompt: 'If a character gives away food even when hungry, what trait is most likely shown?',
    options: ['Generous', 'Careless', 'Silent', 'Fearful'],
    answer: 'Generous',
    explanation: 'Giving to others in a difficult moment suggests generosity.',
  },
  {
    prompt: 'Which event most likely belongs near the climax?',
    options: [
      'The main conflict reaches its highest tension',
      'The setting is introduced for the first time',
      'The title is read aloud',
      'The chapter index is printed',
    ],
    answer: 'The main conflict reaches its highest tension',
    explanation: 'The climax is the turning point where tension is greatest.',
  },
  {
    prompt: 'Why does sequencing events matter in story study?',
    options: [
      'It helps readers understand cause and effect',
      'It removes the need to read details',
      'It changes fiction into non-fiction',
      'It tells you only how long the story is',
    ],
    answer: 'It helps readers understand cause and effect',
    explanation: 'Correct order shows how one event leads to another.',
  },
];

const NovelShortStoryStudy = () => (
  <CapsSubjectTopic
    title="Novel or Short Story Study"
    subtitle="Character, plot, conflict, setting, theme and evidence-based response"
    learnSteps={learnSteps}
    task="gr7-novel-short-story-study-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default NovelShortStoryStudy;
