import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Prepare final performance and revise theory',
    image: {
      src: '/curriculum/grade9/creative-arts/term4/music/image1.jpg',
      alt: 'Grade 9 learners preparing final performance showcase and revising music theory',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Music in Grade 9 Term 4 culminates the year. You prepare a final performance, revise aural and theory skills, practise score reading with fluency, explore music careers, and demonstrate professional stage etiquette. Showcase your technical growth and musical maturity.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Final performance preparation includes...',
    options: ['Rehearsal refinement, technical polish, and confidence building', 'No rehearsal needed', 'Unprepared is fine', 'Winging it always'],
    answer: 'Rehearsal refinement, technical polish, and confidence building',
    explanation: 'Thorough preparation leads to strong, confident performances.',
  },
  {
    prompt: 'Aural skills include...',
    options: ['Listening, identifying intervals, rhythms, and chords by ear', 'Only reading music', 'No listening needed', 'Guessing only'],
    answer: 'Listening, identifying intervals, rhythms, and chords by ear',
    explanation: 'Aural training develops musicianship and ear awareness.',
  },
  {
    prompt: 'Score reading fluency means...',
    options: ['Quickly and accurately interpreting written music notation', 'Slow reading only', 'Not necessary', 'Just guessing symbols'],
    answer: 'Quickly and accurately interpreting written music notation',
    explanation: 'Fluency enables musicians to learn new material efficiently.',
  },
  {
    prompt: 'Music careers include...',
    options: ['Performer, composer, teacher, sound engineer, or music therapist', 'Only performing', 'No career options', 'Nothing professional'],
    answer: 'Performer, composer, teacher, sound engineer, or music therapist',
    explanation: 'Music offers diverse fulfilling career paths.',
  },
  {
    prompt: 'Stage etiquette for musicians includes...',
    options: ['Professional dress, respectful comportment, and audience acknowledgement', 'No rules needed', 'Casual behaviour is fine', 'Ignoring audience'],
    answer: 'Professional dress, respectful comportment, and audience acknowledgement',
    explanation: 'Stage etiquette reflects respect and professionalism.',
  },
  {
    prompt: 'Revision of music theory should include...',
    options: ['Key signatures, scales, chord functions, and form analysis', 'Nothing to review', 'No studying needed', 'Random topics only'],
    answer: 'Key signatures, scales, chord functions, and form analysis',
    explanation: 'Theory understanding supports performance and composition.',
  },
  {
    prompt: 'Demonstrating musical maturity means...',
    options: ['Playing musically with control, expression, and confidence', 'Just hitting notes', 'No expression needed', 'Mechanical only'],
    answer: 'Playing musically with control, expression, and confidence',
    explanation: 'Maturity comes from technical skill combined with emotional expression.',
  },
  {
    prompt: 'Listening analysis for final assessment might include...',
    options: ['Identifying style, form, instruments, and emotional response', 'Guessing randomly', 'No thinking needed', 'Ignoring details'],
    answer: 'Identifying style, form, instruments, and emotional response',
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
