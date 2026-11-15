import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: 'Final performance preparation includes...',
    options: ['Polishing rehearsals, technical finish and building confidence', 'No rehearsal, as the cast already knows the show', 'Being unprepared, since the audience will not notice', 'Taking the stage and hoping that the show will go well'],
    answer: 'Polishing rehearsals, technical finish and building confidence',
    explanation: 'Thorough preparation leads to strong, confident performances.',
  },
  {
    prompt: 'Aural skills include...',
    options: ['Listening, and naming intervals, rhythms and chords by ear', 'Reading music from a page and nothing else', 'Skills that need no listening at all', 'Guessing the notes without any training'],
    answer: 'Listening, and naming intervals, rhythms and chords by ear',
    explanation: 'Aural training develops musicianship and ear awareness.',
  },
  {
    prompt: 'Score reading fluency means...',
    options: ['Reading written notation quickly and correctly', 'Reading a score slowly, note by note', 'A skill that is not needed by most musicians', 'Guessing what each symbol on the page means'],
    answer: 'Reading written notation quickly and correctly',
    explanation: 'Fluency enables musicians to learn new material efficiently.',
  },
  {
    prompt: 'Music careers include...',
    options: ['Performer, composer, teacher, sound engineer or therapist', 'Performing, which is the only career in music', 'No careers are open in the field of music', 'Hobbies that cannot become professional work'],
    answer: 'Performer, composer, teacher, sound engineer or therapist',
    explanation: 'Music offers diverse fulfilling career paths.',
  },
  {
    prompt: 'Stage etiquette for musicians includes...',
    options: ['Smart dress, respectful conduct and thanking the audience', 'No rules are needed once you are on stage', 'Casual behaviour is fine at a school concert', 'Ignoring the audience once the music has started'],
    answer: 'Smart dress, respectful conduct and thanking the audience',
    explanation: 'Stage etiquette reflects respect and professionalism.',
  },
  {
    prompt: 'Revision of music theory should include...',
    options: ['Key signatures, scales, chord functions and form analysis', 'Nothing, as theory is learned once and kept for life', 'No study, since the exam is mostly practical', 'Any topics that happen to come to mind'],
    answer: 'Key signatures, scales, chord functions and form analysis',
    explanation: 'Theory understanding supports performance and composition.',
  },
  {
    prompt: 'Demonstrating musical maturity means...',
    options: ['Playing musically, with control, expression and confidence', 'Hitting the right notes and nothing more', 'Playing without any expression at all', 'Playing in a mechanical way, note after note'],
    answer: 'Playing musically, with control, expression and confidence',
    explanation: 'Maturity comes from technical skill combined with emotional expression.',
  },
  {
    prompt: 'Listening analysis for final assessment might include...',
    options: ['Naming style, form, instruments and emotional response', 'Guessing the answer and hoping it is right', 'Listening without having to think about it', 'Ignoring the details and writing a general comment'],
    answer: 'Naming style, form, instruments and emotional response',
    explanation: 'Comprehensive listening analysis demonstrates understanding.',
  },
];

const Music = () => (
  <CapsSubjectTopic
    title="Music"
    subtitle="Performance showcase, aural revision, score reading, and music careers"
    learnSteps={learnSteps}
    task="gr9-music-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Music;
