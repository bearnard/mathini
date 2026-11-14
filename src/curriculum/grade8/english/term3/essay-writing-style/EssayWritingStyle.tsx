import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    title: 'Build clear essay structure',
    image: {
      src: '/curriculum/grade8/eng/term3/essay-writing-style/diagram.webp',
      alt: 'learner planning introduction body paragraphs and conclusion for an essay',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Narrative and reflective essays need a strong introduction, coherent body paragraphs, and a conclusion that
          closes the central idea.
        </p>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"Hard Times\" — Charles Dickens"}
        text={"It was a town of red brick, or of brick that would have been red if the smoke and ashes had allowed it."}
        annotations={[
          { start: 45, end: 64, device: "irony", note: "The line points out how industrial pollution has ruined what should have been bright and ordinary." },
          { start: 72, end: 87, device: "imagery", note: "The concrete details make the polluted town easy to picture." },
          { start: 88, end: 102, device: "personification", note: "Smoke and ashes are treated as if they can choose to withhold colour." },
        ]}
      />
    ),
  },
  {
    title: 'Develop style with detail and variety',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective writing uses sentence variety, descriptive detail, and selected stylistic devices to make ideas
          vivid and purposeful.
        </p>
      </div>
    ),
  },
  {
    title: 'Revise for coherence and impact',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Revision checks whether paragraphs link logically, examples are relevant, and language choices match tone and
          audience.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What should an essay introduction mainly do?',
    options: ['introduce the topic and engage the reader', 'list all grammar rules', 'copy the conclusion exactly', 'present unrelated examples only'],
    answer: 'introduce the topic and engage the reader',
    explanation: 'Introductions set direction and create interest.',
  },
  {
    prompt: 'Paragraph coherence means...',
    options: ['ideas in a paragraph connect logically', 'all sentences are the same length', 'each paragraph has one word', 'paragraphs ignore the topic'],
    answer: 'ideas in a paragraph connect logically',
    explanation: 'Coherence helps readers follow reasoning smoothly.',
  },
  {
    prompt: 'Which sentence opening adds variety?',
    options: ['After the rain stopped, we finally entered the field.', 'We went there. We went there. We went there.', 'Thing happened. Thing happened again.', 'Good day. End.'],
    answer: 'After the rain stopped, we finally entered the field.',
    explanation: 'Different structures create more engaging writing.',
  },
  {
    prompt: 'A reflective essay usually focuses on...',
    options: ['personal experience and insight', 'news headlines only', 'dictionary definitions only', 'script stage directions only'],
    answer: 'personal experience and insight',
    explanation: 'Reflective essays examine experience and learning.',
  },
  {
    prompt: 'Which detail is most descriptive?',
    options: ['The wind sliced through the narrow alley as papers spun.', 'It was nice, and everyone enjoyed the day.', 'Things happened quickly and then it was over.', 'There was a place where people used to meet.'],
    answer: 'The wind sliced through the narrow alley as papers spun.',
    explanation: 'Specific sensory language creates vivid imagery.',
  },
  {
    prompt: 'What is the purpose of a concluding paragraph?',
    options: ['to bring closure and reinforce the main idea', 'to introduce a new unrelated topic', 'to repeat every sentence word for word', 'to remove all links to earlier paragraphs'],
    answer: 'to bring closure and reinforce the main idea',
    explanation: 'Conclusions tie key ideas together and end effectively.',
  },
  {
    prompt: 'A stylistic device in writing is...',
    options: ['a language technique that creates effect', 'a punctuation correction only', 'a timetable entry', 'an index page format'],
    answer: 'a language technique that creates effect',
    explanation: 'Stylistic devices strengthen voice and meaning.',
  },
  {
    prompt: 'During revision, which check matters most?',
    options: ['whether each paragraph supports the essay purpose', 'whether the title has the longest word', 'whether every sentence starts the same way', 'whether commas are completely removed'],
    answer: 'whether each paragraph supports the essay purpose',
    explanation: 'Purpose-driven revision improves relevance and quality.',
  },
];

const EssayWritingStyle = () => (
  <CapsSubjectTopic
    title="Essay Writing and Style"
    subtitle="Narrative and reflective essay structure, coherence and stylistic control"
    learnSteps={learnSteps}
    task="gr8-essay-writing-style-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default EssayWritingStyle;
