import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Build music literacy through beat, rhythm, and listening',
    image: {
      src: '/curriculum/grade8/ca/term1/music/diagram.webp',
      alt: 'Grade 8 learners clapping rhythms and reading simple music patterns together',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In Term 1 music you identify beat, rhythm, metre, pitch, and dynamics while reading basic notation. You
          also practise attentive listening and accurate response to short patterns.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the beat in music?',
    options: ['The steady pulse you can count', 'The melody lyrics', 'A silent pause only', 'The final note only'],
    answer: 'The steady pulse you can count',
    explanation: 'Beat is the regular pulse that helps performers stay together.',
  },
  {
    prompt: 'Rhythm is best described as...',
    options: ['Patterns of long and short sounds', 'Volume level only', 'Instrument shape', 'Audience movement'],
    answer: 'Patterns of long and short sounds',
    explanation: 'Rhythm is how note lengths are arranged in time.',
  },
  {
    prompt: 'Metre in common time often groups beats in...',
    options: ['Regular sets', 'Random order', 'Only one beat forever', 'No pulse at all'],
    answer: 'Regular sets',
    explanation: 'Metre organises beats into repeating groups, such as 4-beat bars.',
  },
  {
    prompt: 'Pitch tells us whether a sound is...',
    options: ['High or low', 'Fast or slow', 'Loud or soft only', 'Long or short only'],
    answer: 'High or low',
    explanation: 'Pitch describes how high or low a note sounds.',
  },
  {
    prompt: 'Dynamics in music refer to...',
    options: ['How loud or soft sounds are', 'How many players are present', 'The shape of an instrument', 'The language of song words'],
    answer: 'How loud or soft sounds are',
    explanation: 'Dynamics are volume changes used for expression.',
  },
  {
    prompt: 'Which notation symbol means silence for a set duration?',
    options: ['Rest', 'Clef', 'Tie', 'Staff'],
    answer: 'Rest',
    explanation: 'A rest tells the performer to pause for a measured time.',
  },
  {
    prompt: 'In a clap-back activity, learners should mainly...',
    options: ['Listen and repeat the rhythm accurately', 'Sing louder than everyone else', 'Change every pattern', 'Ignore the beat'],
    answer: 'Listen and repeat the rhythm accurately',
    explanation: 'Clap-back tasks assess listening accuracy and rhythm memory.',
  },
  {
    prompt: 'A good way to stay in time in an ensemble is to...',
    options: ['Count the beat internally', 'Speed up when nervous', 'Watch only your own hands', 'Skip difficult bars'],
    answer: 'Count the beat internally',
    explanation: 'Internal counting helps keep timing steady with a group.',
  },
];

const Music = () => (
  <CapsSubjectTopic
    title="Music"
    subtitle="Beat, rhythm, metre, pitch, dynamics, notation basics, and listening skills"
    learnSteps={learnSteps}
    task="gr8-music-t1"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Music;
