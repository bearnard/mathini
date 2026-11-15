import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow, TwoColumns } from '../../../../../components/diagrams/english/Grade8Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Essay structure',
    content: slide(
      <>
        <Rule>An introduction introduces the topic and engages the reader. Body paragraphs develop the idea. A conclusion brings closure and reinforces the main idea.</Rule>
        <StepFlow
          items={[
            { label: 'Introduction', note: 'topic and a hook' },
            { label: 'Body paragraphs', note: 'one idea each' },
            { label: 'Conclusion', note: 'closure, main idea again' },
          ]}
          aria="An essay in three parts: an introduction with the topic and a hook, body paragraphs with one idea each, and a conclusion that closes and reinforces the main idea."
        />
        <Worked
          title="Essay topic: A day I will never forget"
          steps={[
            <>Introduction: &ldquo;The morning the taxi broke down, I thought my day was ruined.&rdquo; It opens with a hook and names the topic.</>,
            <>Body: one paragraph for the breakdown, one for how strangers helped.</>,
            <>Conclusion: &ldquo;That day taught me that help can come from anyone.&rdquo; It closes the story and returns to the main idea.</>,
          ]}
        />
        <Mistake>Starting a new, unrelated topic in the conclusion. It should tie earlier ideas together, not repeat every sentence word for word.</Mistake>
      </>,
    ),
  },
  {
    title: 'Coherent paragraphs',
    content: slide(
      <>
        <Rule>Coherence means the ideas in a paragraph connect logically, so the reader can follow your reasoning. Use a topic sentence, supporting detail and linking words.</Rule>
        <StepFlow
          items={[
            { label: 'Topic sentence', note: 'the one idea' },
            { label: 'Supporting detail', note: 'shows the idea' },
            { label: 'Linking word', note: 'then, because, however' },
          ]}
          aria="A paragraph built in order: a topic sentence with the one idea, supporting detail, and linking words such as then, because and however."
        />
        <Worked
          title="Make the sentences connect"
          steps={[
            <>Topic sentence: &ldquo;Our walk to school taught me patience.&rdquo;</>,
            <>Detail: &ldquo;The path was flooded, so we waited for the water to drop.&rdquo; &ldquo;So&rdquo; links cause and result.</>,
            <>Next: &ldquo;Then we crossed one by one.&rdquo; Every sentence supports the topic sentence.</>,
          ]}
        />
        <Mistake>A paragraph where each sentence is about something different. Sentences that do not support the topic sentence break coherence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Narrative and reflective essays',
    content: slide(
      <>
        <Rule>A narrative essay tells what happened, in order. A reflective essay looks inward at your own experience: what it meant to you and what you learned.</Rule>
        <TwoColumns
          left={{ title: 'Narrative', lines: ['tells the event', 'in order'] }}
          right={{ title: 'Reflective', lines: ['personal experience', 'insight gained'] }}
          aria="Two columns. A narrative essay tells the event in order. A reflective essay explores personal experience and the insight gained."
        />
        <Worked
          title="One event, two essays"
          steps={[
            <>Event: our netball team lost the final.</>,
            <>Narrative sentence: &ldquo;In the last minute, the ball slipped through my fingers and the whistle blew.&rdquo;</>,
            <>Reflective sentence: &ldquo;Losing that final showed me that a team is more than its score.&rdquo; It gives an insight, not just events.</>,
          ]}
        />
        <Mistake>Writing a reflective essay that only lists events. Say what the experience meant to you.</Mistake>
      </>,
    ),
  },
  {
    title: 'Style: detail, variety and devices',
    content: slide(
      <>
        <Rule>Descriptive detail is specific and uses the senses. Sentence variety changes how sentences begin. A stylistic device is a language technique that creates an effect.</Rule>
        <StepFlow
          items={[
            { label: 'Simile', note: 'like or as: fast as a taxi' },
            { label: 'Metaphor', note: 'is: the road was a river' },
            { label: 'Personification', note: 'the wind whispered' },
          ]}
          aria="Three stylistic devices with examples: a simile uses like or as, a metaphor says one thing is another, and personification gives human actions to a non-human thing."
        />
        <Worked
          title="Make it vivid and varied"
          steps={[
            <>Vague: &ldquo;It was nice, and everyone enjoyed the day.&rdquo; We learn nothing.</>,
            <>Specific: &ldquo;The wind sliced through the narrow alley as papers spun.&rdquo; Sensory detail makes a picture.</>,
            <>Variety: instead of &ldquo;We went there&rdquo; three times, write &ldquo;After the rain stopped, we finally entered the field.&rdquo;</>,
          ]}
        />
        <Mistake>Starting every sentence the same way, or using vague words such as &ldquo;thing&rdquo; and &ldquo;nice&rdquo;. Both make writing flat.</Mistake>
      </>,
    ),
  },
  {
    title: 'Revise with purpose',
    content: slide(
      <>
        <Rule>When you revise, the most important check is whether each paragraph supports the essay&apos;s purpose.</Rule>
        <Worked
          title="Revise a paragraph"
          steps={[
            <>Purpose: show that the taxi breakdown taught me to ask for help.</>,
            <>Read each paragraph and ask: does this support the purpose? A paragraph about my favourite lunch does not, so cut it.</>,
            <>Then check openings for variety, replace vague words with specific ones, and make sure the conclusion links back to the purpose.</>,
          ]}
        />
        <Mistake>Revising only the spelling. Correcting commas matters, but a well-spelt paragraph that does not support the purpose still weakens the essay.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What job does the opening paragraph of an essay have?</>,
          <>What does paragraph coherence mean?</>,
          <>Which kind of essay focuses on personal experience and insight?</>,
          <>During revision, what is the most important check?</>,
        ]}
        answers={[
          <>Introduce the topic and engage the reader.</>,
          <>The ideas in the paragraph connect logically.</>,
          <>A reflective essay.</>,
          <>Whether each paragraph supports the essay&apos;s purpose.</>,
        ]}
      />,
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
