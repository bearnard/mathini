import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ReadingViewingT2.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'Which of the following is a social theme commonly found in isiXhosa prose?',
    options: [
      'Tension between cultural tradition and modern life',
      'The physics of sound waves',
      'Mathematical problem solving',
      'Cooking recipes from the Eastern Cape',
    ],
    answer: 'Tension between cultural tradition and modern life',
    explanation: 'Social themes reflect real community experiences; the clash between tradition and modernity is a recurring theme in South African literature.',
  },
  {
    prompt: 'What does "perspective" refer to when analysing a novel?',
    options: ['The point of view of the telling, and how it shapes meaning', 'The physical setting in which the story takes place', 'The length of the chapters of the novel', 'The font that is used in the printed edition'],
    answer: 'The point of view of the telling, and how it shapes meaning',
    explanation: 'Perspective (narrative voice) determines what readers know and feel — different narrators create different interpretations.',
  },
  {
    prompt: 'Which question is most useful when assessing the reliability of a media text?',
    options: [
      'Are the sources cited credible and verifiable?',
      'Is the text written in a colourful font?',
      'Does the text use short paragraphs?',
      'Is the text longer than one page?',
    ],
    answer: 'Are the sources cited credible and verifiable?',
    explanation: 'Reliable texts support claims with identifiable, credible sources — this is a key media literacy skill.',
  },
  {
    prompt: 'In visual literacy, what do connotations of colour help you analyse?',
    options: ['The emotional and cultural meanings that a designer intends', 'The exact brightness of the image on the page', 'The printing cost of the document', 'Whether the text is fiction or non-fiction'],
    answer: 'The emotional and cultural meanings that a designer intends',
    explanation: 'Colour choice is deliberate: designers use colours to trigger emotional associations and guide the viewer\'s response.',
  },
  {
    prompt: 'When comparing two media sources on the same topic, what should you do FIRST?',
    options: [
      'Identify the viewpoint and evidence in Source A',
      'Decide which source is correct before reading both',
      'Summarise only the longer source',
      'Count the number of images in each source',
    ],
    answer: 'Identify the viewpoint and evidence in Source A',
    explanation: 'Systematic comparison begins with clearly identifying and recording what each source says before drawing comparisons.',
  },
  {
    prompt: 'What language feature signals objectivity in a media text?',
    options: [
      'Neutral vocabulary, balanced reporting, and cited evidence',
      'Emotive language and one-sided claims',
      'Use of slang and personal opinions',
      'Large, bold headlines that express strong emotion',
    ],
    answer: 'Neutral vocabulary, balanced reporting, and cited evidence',
    explanation: 'Objective media texts present multiple views fairly, use neutral language, and support claims with verifiable evidence.',
  },
  {
    prompt: 'Why is "font size" a visual literacy element worth analysing?',
    options: [
      'Larger or bolder text signals importance and directs the reader\'s attention',
      'It only indicates the printer\'s preference',
      'It has no effect on how a reader receives the message',
      'It determines the mood of the text independently of words',
    ],
    answer: 'Larger or bolder text signals importance and directs the reader\'s attention',
    explanation: 'Typographical choices — size, weight, style — guide the reader\'s eye and communicate hierarchy and emphasis.',
  },
  {
    prompt: 'Which narrative perspective allows the reader to know the thoughts of ALL characters?',
    options: [
      'Third-person omniscient narrator',
      'First-person narrator',
      'Second-person narrator',
      'Third-person limited narrator',
    ],
    answer: 'Third-person omniscient narrator',
    explanation: 'An omniscient narrator has god-like knowledge of every character\'s thoughts and feelings throughout the story.',
  },
  {
    prompt: 'What does a "justified interpretation" of a text require?',
    options: [
      'Supporting your reading with direct evidence (quotations or examples) from the text',
      'Agreeing with your teacher\'s interpretation',
      'Writing the longest possible answer',
      'Using only your personal feelings without reference to the text',
    ],
    answer: 'Supporting your reading with direct evidence (quotations or examples) from the text',
    explanation: 'In CAPS, any interpretation must be grounded in evidence — personal response alone is insufficient.',
  },
];

const ReadingViewingT2 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Prose study, media texts, visual literacy, social themes, and perspective"
    learnSteps={learnSteps}
    task="gr11-xho-reading-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT2;
