import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    title: 'Read poetry closely and connect to prescribed texts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Poetry study in Term 2 focuses on <strong>stanza</strong>, <strong>rhyme</strong>,{' '}
          <strong>imagery</strong>, and <strong>tone</strong>. Learners also connect ideas in poems to prescribed
          prose or drama texts.
        </p>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"The Tyger\" — William Blake"}
        text={"Tyger Tyger, burning bright, in the forests of the night; what immortal hand or eye could frame thy fearful symmetry?"}
        annotations={[
          { start: 13, end: 27, device: "imagery", note: "The phrase makes the tiger feel luminous and unforgettable." },
          { start: 36, end: 56, device: "symbolism", note: "Night becomes symbolic of mystery and danger surrounding the tiger." },
          { start: 63, end: 83, device: "allusion", note: "The speaker hints at a divine maker beyond ordinary human power." },
          { start: 100, end: 116, device: "tone", note: "The uneasy phrase mixes awe with fear, shaping the poem’s questioning tone." },
        ]}
      />
    ),
  },
  {
    title: 'Use line references and textual clues',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Line-reference questions require careful reading of exact words. Use clues in the line to infer mood,
          meaning, and speaker attitude.
        </p>
      </div>
    ),
  },
  {
    title: 'Explain how poetic techniques shape meaning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Imagery creates mental pictures while tone shows feeling. Together they guide how readers interpret the poem.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A stanza in poetry is...',
    options: ['a grouped set of lines', 'a punctuation rule', 'a character in a play', 'the title font'],
    answer: 'a grouped set of lines',
    explanation: 'A stanza is like a paragraph in a poem.',
  },
  {
    prompt: 'Rhyme refers to...',
    options: [
      'similar sounds at the ends of words',
      'a sentence that gives instructions',
      'a list of character names',
      'the order of chapters',
    ],
    answer: 'similar sounds at the ends of words',
    explanation: 'Rhyme is a sound pattern, often at line endings.',
  },
  {
    prompt: 'What is imagery in a poem?',
    options: [
      'language that creates pictures in the mind',
      'the author signature only',
      'the number of pages in the book',
      'the test timetable',
    ],
    answer: 'language that creates pictures in the mind',
    explanation: 'Imagery helps readers imagine sights, sounds, and feelings.',
  },
  {
    prompt: 'Tone tells the reader...',
    options: [
      'the attitude or feeling in the poem',
      'the poem publication date only',
      'the number of stanzas only',
      'which desk the poet used',
    ],
    answer: 'the attitude or feeling in the poem',
    explanation: 'Tone reflects the emotional quality of the speaker voice.',
  },
  {
    prompt: 'Why are line references important in a poetry question?',
    options: [
      'They direct you to exact evidence in the poem',
      'They replace reading the poem',
      'They show only punctuation marks',
      'They remove the need for interpretation',
    ],
    answer: 'They direct you to exact evidence in the poem',
    explanation: 'Line references show where to find support for your answer.',
  },
  {
    prompt: 'If a poem describes "a silver moon smiling over quiet roofs", the phrase mainly uses...',
    options: ['imagery', 'stage directions', 'dialogue format', 'formal register'],
    answer: 'imagery',
    explanation: 'The phrase paints a visual picture for the reader.',
  },
  {
    prompt: 'Connecting a poem to a prescribed novel helps learners to...',
    options: [
      'compare themes across different texts',
      'change poetry into factual writing',
      'skip character analysis',
      'avoid using evidence',
    ],
    answer: 'compare themes across different texts',
    explanation: 'Cross-text comparison deepens literary understanding.',
  },
  {
    prompt: 'Which question is most likely about tone?',
    options: [
      'How does the speaker feel about the journey?',
      'How many commas are in line two?',
      'What is the printer brand of the textbook?',
      'How long is the exam room?',
    ],
    answer: 'How does the speaker feel about the journey?',
    explanation: 'Tone questions focus on feeling and attitude.',
  },
];

const PoetryPrescribedTextWork = () => (
  <CapsSubjectTopic
    title="Poetry and Prescribed Text Work"
    subtitle="Stanza, rhyme, imagery, tone and line-based interpretation"
    learnSteps={learnSteps}
    task="gr7-poetry-prescribed-text-work-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default PoetryPrescribedTextWork;

