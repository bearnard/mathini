import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    title: 'Analyse core narrative structure',
    image: {
      src: '/curriculum/grade8/eng/term3/short-stories-narrative-technique/diagram.webp',
      alt: 'learner mapping narrator sequencing conflict climax and characterisation in a short story',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Short stories rely on clear structure. Track exposition, rising action, climax, and resolution to understand
          how the writer builds impact.
        </p>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"The Fall of the House of Usher\" — Edgar Allan Poe"}
        text={"During the whole of a dull, dark, and soundless day in the autumn of the year, I had been passing alone, on horseback, through a singularly dreary tract of country."}
        annotations={[
          { start: 22, end: 47, device: "diction", note: "The repeated gloomy adjectives show how word choice shapes atmosphere." },
          { start: 90, end: 117, device: "imagery", note: "The narrator’s lonely movement gives readers a clear visual entry into the setting." },
          { start: 129, end: 163, device: "tone", note: "The description establishes the bleak tone that drives the story forward." },
        ]}
      />
    ),
  },
  {
    title: 'Evaluate narrator viewpoint and sequencing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Narrator perspective affects what readers know and feel. Sequencing choices also shape suspense and
          understanding.
        </p>
      </div>
    ),
  },
  {
    title: 'Use textual evidence for characterisation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Characterisation is shown through actions, speech, and choices. Evidence-based answers explain how details
          reveal personality and motivation.
        </p>
      </div>
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
