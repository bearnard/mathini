import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Explore world music and improve ensemble listening',
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
    options: ['Polyrhythm, call-and-response and percussion', 'Single melodies played with no rhythmic pattern at all', 'Music that is made without any rhythmic pattern', 'Long stretches of silence between the notes played'],
    answer: 'Polyrhythm, call-and-response and percussion',
    explanation: 'African traditions have deep rhythmic sophistication and interactive performance.',
  },
  {
    prompt: 'Listening analysis involves...',
    options: ['Naming the musical elements, style and your response to them', 'Guessing the name of the piece and nothing more', 'Listening without paying attention to the music', 'Ignoring the music and reading about the composer'],
    answer: 'Naming the musical elements, style and your response to them',
    explanation: 'Active listening develops musical understanding and appreciation.',
  },
  {
    prompt: 'Harmony in music refers to...',
    options: ['Several notes sounding together to form chords', 'A single melody played on its own', 'The pattern of long and short sounds', 'The quiet moments between sounds'],
    answer: 'Several notes sounding together to form chords',
    explanation: 'Harmony adds depth and emotional quality to music.',
  },
  {
    prompt: 'Texture in music describes...',
    options: ['How many sounds or layers are heard at one time', 'How soft or rough an instrument feels to touch', 'The melody that is played in a song', 'The age and experience of the performer'],
    answer: 'How many sounds or layers are heard at one time',
    explanation: 'Texture ranges from sparse to dense depending on layers and combinations.',
  },
  {
    prompt: 'Ensemble balance means...',
    options: ['All parts are heard at the right volume', 'One part is always the loudest of all', 'All parts play as quietly as possible', 'The players do not need to listen to one another'],
    answer: 'All parts are heard at the right volume',
    explanation: 'Balance creates cohesion and clarity in group performance.',
  },
  {
    prompt: 'Call-and-response is a form where...',
    options: ['A phrase is answered or echoed by another part', 'Only one part plays, with no reply', 'The same phrase is not repeated again', 'A silent pause is left between the parts'],
    answer: 'A phrase is answered or echoed by another part',
    explanation: 'Call-and-response is foundational to African, jazz, and blues traditions.',
  },
  {
    prompt: 'World music includes styles such as...',
    options: ['African, Latin, Indian, Asian and Middle Eastern music', 'Western classical music and nothing else', 'Music that has no tradition behind it', 'Music of a single genre from one country'],
    answer: 'African, Latin, Indian, Asian and Middle Eastern music',
    explanation: 'World music encompasses diverse cultural musical traditions.',
  },
  {
    prompt: 'To recognize different instruments by ear, you should...',
    options: ['Listen often and learn their tone colours and ranges', 'Never listen, since reading is enough', 'Read about them in books and not listen to them', 'Ignore the differences in the timbre of each'],
    answer: 'Listen often and learn their tone colours and ranges',
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
