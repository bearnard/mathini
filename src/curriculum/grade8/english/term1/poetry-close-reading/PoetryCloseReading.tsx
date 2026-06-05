import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    title: 'Read poems line by line for meaning',
    image: {
      src: '/curriculum/grade8/eng/term1/poetry-close-reading/diagram.webp',
      alt: 'learner close reading a poem for imagery tone rhyme and theme',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Close reading means slowing down and noticing how each line contributes to meaning. Pay attention to stanza
          structure, rhyme, and repeated language.
        </p>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"I Wandered Lonely as a Cloud\" — William Wordsworth"}
        text={"I wandered lonely as a cloud that floats on high o'er vales and hills, when all at once I saw a crowd, a host, of golden daffodils."}
        annotations={[
          { start: 11, end: 28, device: "simile", note: "The speaker compares himself to a drifting cloud to show isolation and movement." },
          { start: 94, end: 109, device: "hyperbole", note: "The flowers are described in enlarged terms to emphasise their abundance." },
          { start: 114, end: 130, device: "imagery", note: "The bright colour makes the natural scene vivid and memorable." },
          { start: 34, end: 48, device: "tone", note: "The gentle phrase creates a calm, reflective tone before the joyful discovery." },
        ]}
      />
    ),
  },
  {
    title: 'Track imagery, tone and theme',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Imagery creates pictures in the mind, tone shows attitude, and theme expresses the central idea of the
          poem.
        </p>
      </div>
    ),
  },
  {
    title: 'Support answers with line references',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong poetry responses point to exact words or lines. Evidence from the text makes interpretations clearer
          and more convincing.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a stanza?',
    options: ['a grouped section of lines in a poem', 'a type of newspaper heading', 'a grammar rule for verbs', 'a letter closing phrase'],
    answer: 'a grouped section of lines in a poem',
    explanation: 'Stanzas are like poem paragraphs made of lines.',
  },
  {
    prompt: 'Imagery in poetry mainly helps readers to...',
    options: ['picture ideas through sensory language', 'count punctuation marks only', 'ignore tone completely', 'change prose into dialogue'],
    answer: 'picture ideas through sensory language',
    explanation: 'Imagery uses descriptive words that appeal to the senses.',
  },
  {
    prompt: 'Tone is best described as the...',
    options: ['attitude or feeling in the poem', 'number of stanzas', 'topic heading format', 'order of bibliography entries'],
    answer: 'attitude or feeling in the poem',
    explanation: 'Tone shows how the speaker feels about the subject.',
  },
  {
    prompt: 'If a poet repeats the word "alone", the likely effect is to highlight...',
    options: ['a key emotional idea', 'a spelling mistake', 'a random unrelated detail', 'a timetable instruction'],
    answer: 'a key emotional idea',
    explanation: 'Repetition draws attention to important meaning.',
  },
  {
    prompt: 'Which response shows close reading?',
    options: ['quoting a line and explaining its effect', 'retelling the title only', 'guessing without evidence', 'copying unrelated notes'],
    answer: 'quoting a line and explaining its effect',
    explanation: 'Close reading links specific words to interpretation.',
  },
  {
    prompt: 'A shift from joyful words to dark images most likely signals...',
    options: ['a tone change', 'a change from poetry to drama', 'a punctuation error only', 'a missing bibliography'],
    answer: 'a tone change',
    explanation: 'Contrasting word choices often indicate a change in tone.',
  },
  {
    prompt: 'Theme in poetry refers to...',
    options: ['the central message or idea', 'the page number position', 'the poet’s home address', 'the number of commas per line'],
    answer: 'the central message or idea',
    explanation: 'Theme is the deeper meaning readers take from the poem.',
  },
  {
    prompt: 'Why are line references useful in poetry answers?',
    options: ['They show where your evidence comes from.', 'They replace explanation completely.', 'They remove the need to read the poem.', 'They are only for spelling tests.'],
    answer: 'They show where your evidence comes from.',
    explanation: 'Line references make textual support precise and credible.',
  },
];

const PoetryCloseReading = () => (
  <CapsSubjectTopic
    title="Poetry and Close Reading"
    subtitle="Stanza, imagery, tone and theme with evidence-based interpretation"
    learnSteps={learnSteps}
    task="gr8-poetry-close-reading-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default PoetryCloseReading;
