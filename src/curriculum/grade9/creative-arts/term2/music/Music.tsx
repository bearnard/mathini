import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Explore world music and improve ensemble listening',
    image: {
      src: '/curriculum/grade9/creative-arts/term2/music/image1.jpg',
      alt: 'Grade 9 learners exploring African instruments and comparing musical styles',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Music in Grade 9 Term 2 broadens your cultural awareness. You explore African and world music styles, develop listening analysis skills, investigate harmony and texture, and strengthen ensemble balance. Compare styles, recognize different instruments, and apply listening insights to group work.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'African music often features...',
    options: ['Complex rhythms, polyrhythm, call-and-response, and percussion instruments', 'Only single melodies', 'No rhythm patterns', 'Silence only'],
    answer: 'Complex rhythms, polyrhythm, call-and-response, and percussion instruments',
    explanation: 'African traditions have deep rhythmic sophistication and interactive performance.',
  },
  {
    prompt: 'Listening analysis involves...',
    options: ['Identifying musical elements, style characteristics, and emotional response', 'Only guessing', 'Not paying attention', 'Ignoring the music'],
    answer: 'Identifying musical elements, style characteristics, and emotional response',
    explanation: 'Active listening develops musical understanding and appreciation.',
  },
  {
    prompt: 'Harmony in music refers to...',
    options: ['Multiple notes sounding together to create chords and progression', 'Only melody', 'Just rhythm', 'Silence'],
    answer: 'Multiple notes sounding together to create chords and progression',
    explanation: 'Harmony adds depth and emotional quality to music.',
  },
  {
    prompt: 'Texture in music describes...',
    options: ['How many different sounds or layers are present at once', 'How soft something feels', 'Only the melody', 'The performer\'s age'],
    answer: 'How many different sounds or layers are present at once',
    explanation: 'Texture ranges from sparse to dense depending on layers and combinations.',
  },
  {
    prompt: 'Ensemble balance means...',
    options: ['All instruments and voices are heard at appropriate volumes', 'One part is loudest always', 'Quiet only', 'No listening needed'],
    answer: 'All instruments and voices are heard at appropriate volumes',
    explanation: 'Balance creates cohesion and clarity in group performance.',
  },
  {
    prompt: 'Call-and-response is a form where...',
    options: ['A melody or phrase is answered or echoed by another part', 'Only one part speaks', 'No repetition occurs', 'Silence happens'],
    answer: 'A melody or phrase is answered or echoed by another part',
    explanation: 'Call-and-response is foundational to African, jazz, and blues traditions.',
  },
  {
    prompt: 'World music includes styles such as...',
    options: ['Jazz, Latin, Indian, Asian, and Middle Eastern music', 'Only Western classical', 'No traditions', 'Single genre only'],
    answer: 'Jazz, Latin, Indian, Asian, and Middle Eastern music',
    explanation: 'World music encompasses diverse cultural musical traditions.',
  },
  {
    prompt: 'To recognize different instruments by ear, you should...',
    options: ['Listen frequently and learn their unique tone colours and ranges', 'Never listen', 'Only read about them', 'Ignore timbre differences'],
    answer: 'Listen frequently and learn their unique tone colours and ranges',
    explanation: 'Developing ear training improves musical listening and communication.',
  },
];

const Music = () => (
  <CapsSubjectTopic
    title="Music"
    subtitle="African and world music, listening analysis, harmony, texture, and ensemble work"
    learnSteps={learnSteps}
    task="gr9-music-t2"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Music;
