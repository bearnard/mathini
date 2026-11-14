import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Perform and compare South African music styles',
    image: {
      src: '/curriculum/grade8/ca/term2/music/diagram.webp',
      alt: 'Grade 8 learners performing a call-and-response ensemble with balanced sound',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 2 music includes style comparison, melody work, texture awareness, and ensemble balance. Learners use
          call-and-response and listening logs to discuss similarities and differences in local musical traditions.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Call-and-response is a musical structure where...',
    options: ['One phrase is answered by another', 'All performers stay silent', 'Only instruments can play', 'No beat is used'],
    answer: 'One phrase is answered by another',
    explanation: 'Call-and-response alternates a lead phrase with a reply phrase.',
  },
  {
    prompt: 'Melody is...',
    options: ['A sequence of pitched notes that forms a tune', 'The speed at which a song is played', 'The loudness level at which a song is played', 'A direction about movement on the stage'],
    answer: 'A sequence of pitched notes that forms a tune',
    explanation: 'Melody is the tune listeners can usually sing back.',
  },
  {
    prompt: 'Musical texture describes...',
    options: ['How many layers of sound are heard', 'The colour of instruments', 'How long rehearsal lasts', 'The language of lyrics'],
    answer: 'How many layers of sound are heard',
    explanation: 'Texture can be thin or thick depending on sound layers.',
  },
  {
    prompt: 'Good ensemble balance means...',
    options: ['No part overpowers the others', 'Everyone sings at maximum volume', 'Only one learner performs', 'Tempo changes every bar'],
    answer: 'No part overpowers the others',
    explanation: 'Balanced ensembles let each part be heard clearly.',
  },
  {
    prompt: 'Which is an important listening skill in style comparison?',
    options: ['Spotting similarities and differences', 'Ignoring the rhythm patterns in the pieces', 'Judging the pieces by the clothing of the players', 'Skipping the class discussion on the pieces'],
    answer: 'Spotting similarities and differences',
    explanation: 'Style comparison depends on evidence from listening.',
  },
  {
    prompt: 'In group rehearsal, counting-in before starting helps...',
    options: ['Everyone begin together in time', 'Only the strongest voices lead', 'Avoid all dynamics', 'Remove the melody'],
    answer: 'Everyone begin together in time',
    explanation: 'A count-in sets a shared beat and tempo.',
  },
  {
    prompt: 'If one section is too loud, the best adjustment is to...',
    options: ['Lower that section and rebalance', 'Stop all music', 'Remove rhythm completely', 'Double the tempo'],
    answer: 'Lower that section and rebalance',
    explanation: 'Volume control keeps ensemble blend clear.',
  },
  {
    prompt: 'A listening log is used to...',
    options: ['Record what you noticed while listening', 'Write down the costume sizes of the players', 'Store the repair records of the instruments', 'Take the place of the practical assessment'],
    answer: 'Record what you noticed while listening',
    explanation: 'Listening logs capture evidence for reflection and comparison.',
  },
];

const Music = () => (
  <CapsSubjectTopic
    title="Music"
    subtitle="South African styles, melody, texture, ensemble balance, and call-and-response"
    learnSteps={learnSteps}
    task="gr8-music-t2"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Music;
