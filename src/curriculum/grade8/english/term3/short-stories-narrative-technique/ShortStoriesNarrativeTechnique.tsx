import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow, StoryArc } from '../../../../../components/diagrams/english/Grade8Pictures';
import { viewpointOf } from '../../../../../components/diagrams/english/grade8';

// Which person a narrator uses is decided by a tested helper (grade8.test.ts).
const n1 = 'I stepped into the cold water and my heart pounded.';
const n2 = 'Thandi stepped into the cold water and her heart pounded.';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Conflict and climax',
    content: slide(
      <>
        <Rule>Conflict is the struggle that drives the plot forward. The climax is the point of highest tension, where the conflict peaks.</Rule>
        <StoryArc aria="A line that rises from the opening, through conflict that builds, to a high peak labelled climax, then falls through the falling action to the ending." />
        <Worked
          title="A short invented story"
          steps={[
            <>Opening: Thandi must reach the clinic, but a stream has flooded the path.</>,
            <>Conflict: Thandi against the water. It builds tension as she tries other routes and fails.</>,
            <>Climax: she steps into the stream. The tension is highest here. Afterwards she reaches the far bank and the story winds down.</>,
          ]}
        />
        <Mistake>Calling the opening description the climax. The opening sets the scene; the climax is the turning point where tension peaks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Narrator and viewpoint',
    content: slide(
      <>
        <Rule>A first-person narrator uses I and we. A third-person narrator uses he, she and they. A limited viewpoint means the narrator knows only one character&apos;s thoughts.</Rule>
        <StepFlow
          items={[
            { label: 'First person', note: 'I, we' },
            { label: 'Third person', note: 'he, she, they' },
            { label: 'Limited viewpoint', note: 'only one character’s thoughts' },
          ]}
          aria="Three narrator types: first person uses I and we, third person uses he, she and they, and limited viewpoint means the narrator knows only one character's thoughts."
        />
        <Worked
          title="Same moment, two narrators"
          steps={[
            <>&ldquo;{n1}&rdquo; The pronoun I tells us: {viewpointOf(n1)}.</>,
            <>&ldquo;{n2}&rdquo; Thandi and her: {viewpointOf(n2)}.</>,
            <>If the narrator tells only Thandi&apos;s fears and never what the others think, the viewpoint is limited.</>,
          ]}
        />
        <Mistake>Thinking that any story with &ldquo;you&rdquo; or &ldquo;they&rdquo; is first person. First person means the narrator uses I and we, as part of the story.</Mistake>
      </>,
    ),
  },
  {
    title: 'Sequencing and flashback',
    content: slide(
      <>
        <Rule>Putting events in order helps readers understand cause and effect. A flashback rearranges the sequence to reveal background that deepens the present events.</Rule>
        <StepFlow
          items={[
            { label: 'Event 1', note: 'the rain falls all night' },
            { label: 'Event 2', note: 'the stream floods' },
            { label: 'Event 3', note: 'the path is blocked' },
          ]}
          aria="Three events in order. The rain falls all night, so the stream floods, so the path is blocked. Each event causes the next."
        />
        <Worked
          title="Order the events and spot the cause"
          steps={[
            <>The rain fell, so the stream flooded. The flood caused the blocked path. The order shows the chain of cause and effect.</>,
            <>Flashback: while she stands at the water, Thandi remembers her grandmother teaching her to swim.</>,
            <>The flashback gives background that explains why she dares to cross.</>,
          ]}
        />
        <Mistake>Thinking a flashback only slows the story or removes tension. A well-placed flashback adds depth and meaning to what is happening now.</Mistake>
      </>,
    ),
  },
  {
    title: 'Characterisation and evidence',
    content: slide(
      <>
        <Rule>Characterisation shows who a character is through actions, words and thoughts. Support every claim with evidence from the text: specific words and details.</Rule>
        <StepFlow
          items={[
            { label: 'Claim', note: 'Sipho is generous.' },
            { label: 'Evidence', note: 'He shares his food though he is hungry.' },
            { label: 'Explain', note: 'Giving up food shows kindness.' },
          ]}
          aria="Three boxes in order: a claim that Sipho is generous, evidence that he shares food though hungry, and an explanation that giving up food shows kindness."
        />
        <Worked
          title="Prove a claim about the narrator's attitude"
          steps={[
            <>&ldquo;She stared at the miserable little shed.&rdquo; The words &ldquo;miserable&rdquo; and &ldquo;little&rdquo; carry feeling.</>,
            <>Claim: the narrator dislikes the shed. Evidence: those specific words.</>,
            <>If the story said &ldquo;the cosy little shed&rdquo;, the attitude would change. Word choice reveals attitude.</>,
          ]}
        />
        <Mistake>Using evidence that proves nothing, such as the number of pages, the date on the cover or the title position. Evidence must come from what the characters do and how events are described.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>At which point in a plot does the climax occur?</>,
          <>Which pronouns does a first-person narrator use?</>,
          <>Why is conflict important in a story?</>,
          <>Why might a writer use a flashback?</>,
        ]}
        answers={[
          <>At the point of highest tension.</>,
          <>I and we.</>,
          <>It drives the plot forward.</>,
          <>To reveal background that deepens the current events.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the climax in a short story?',
    options: ['the point of highest tension', 'the opening description of setting', 'the list of characters only', 'the publication details section'],
    answer: 'the point of highest tension',
    explanation: 'The climax is the turning point where conflict peaks.',
  },
  {
    prompt: 'First-person narration uses pronouns such as...',
    options: ['I and we', 'he and she only', 'they and them only', 'you and your only'],
    answer: 'I and we',
    explanation: 'First-person narrators speak from their own viewpoint.',
  },
  {
    prompt: 'Which choice best shows characterisation?',
    options: ['The character shares food despite being hungry.', 'The page has three paragraphs of equal length.', 'The story title is centred on the first page.', 'The font of the heading is bold and large.'],
    answer: 'The character shares food despite being hungry.',
    explanation: 'Actions reveal values and personality.',
  },
  {
    prompt: 'Sequencing events helps readers to...',
    options: ['understand cause and effect', 'ignore plot development', 'avoid inferencing', 'replace all evidence'],
    answer: 'understand cause and effect',
    explanation: 'Correct order clarifies how events connect.',
  },
  {
    prompt: 'If the narrator only knows one character’s thoughts, this is...',
    options: ['limited viewpoint', 'objective headline style', 'passive voice structure', 'indirect command'],
    answer: 'limited viewpoint',
    explanation: 'A limited narrator provides restricted perspective.',
  },
  {
    prompt: 'Conflict in narrative technique is important because it...',
    options: ['drives the plot forward', 'removes the need for characters', 'creates bibliography entries', 'is only a grammar feature'],
    answer: 'drives the plot forward',
    explanation: 'Conflict creates tension and motivates action.',
  },
  {
    prompt: 'Which evidence best supports a claim about narrator attitude?',
    options: ['specific words describing events with emotion', 'the number of pages in the book', 'the date that is printed on the cover', 'the colour of the wall of the classroom'],
    answer: 'specific words describing events with emotion',
    explanation: 'Word choice reveals attitude and perspective.',
  },
  {
    prompt: 'Why might a writer rearrange sequence with a flashback?',
    options: ['to reveal background that deepens current events', 'to remove all of the tension from the story', 'to avoid any development of the characters', 'to switch the genre to a news report'],
    answer: 'to reveal background that deepens current events',
    explanation: 'Flashbacks provide context that enriches interpretation.',
  },
];

const ShortStoriesNarrativeTechnique = () => (
  <CapsSubjectTopic
    title="Short Stories and Narrative Technique"
    subtitle="Narrator, sequencing, conflict, climax and evidence-based character analysis"
    learnSteps={learnSteps}
    task="gr8-short-stories-narrative-technique-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ShortStoriesNarrativeTechnique;
