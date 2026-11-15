import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: 'Aural recall means...',
    options: ['Remembering and naming sounds by listening', 'Reading notes on visual art and nothing else', 'Dancing without any music', 'Choosing the colours of costumes'],
    answer: 'Remembering and naming sounds by listening',
    explanation: 'Aural tasks assess what learners hear and remember.',
  },
  {
    prompt: 'Genre comparison in music focuses on...',
    options: ['Differences and similarities in style features', 'The volume levels of the pieces', 'The seating plan of the classroom', 'The prices of the instruments'],
    answer: 'Differences and similarities in style features',
    explanation: 'Genre analysis considers rhythm, instrumentation, and context.',
  },
  {
    prompt: 'Good stage etiquette includes...',
    options: ['Entering and exiting respectfully', 'Talking through other performances', 'Ignoring conductor cues', 'Turning away from audience always'],
    answer: 'Entering and exiting respectfully',
    explanation: 'Professional behaviour supports a positive performance environment.',
  },
  {
    prompt: 'Performance revision is most effective when learners...',
    options: ['Work on the difficult sections again and again', 'Play only the easy sections one time', 'Avoid feedback from anyone', 'Change the tempo whenever you feel like it'],
    answer: 'Work on the difficult sections again and again',
    explanation: 'Focused practice improves weak spots in prepared pieces.',
  },
  {
    prompt: 'A warm-up before singing or playing helps to...',
    options: ['Prepare technique and reduce strain', 'Increase mistakes intentionally', 'Replace rehearsal', 'Skip breathing control'],
    answer: 'Prepare technique and reduce strain',
    explanation: 'Warm-ups support safe and accurate performance.',
  },
  {
    prompt: 'To keep tempo steady in rehearsal, learners can...',
    options: ['Count the beats or use a pulse cue', 'Speed up at the start of each phrase', 'Ignore the leader of the group', 'Pause for a while after each phrase'],
    answer: 'Count the beats or use a pulse cue',
    explanation: 'Pulse awareness keeps group timing consistent.',
  },
  {
    prompt: 'If a listening question asks for genre clues, a good answer uses...',
    options: ['Specific musical features heard', 'Only personal preference', 'Only performer clothing', 'Only classroom noise'],
    answer: 'Specific musical features heard',
    explanation: 'Evidence-based answers should describe audible style features.',
  },
  {
    prompt: 'After a performance, self-evaluation should include...',
    options: ['One success and one improvement goal', 'The audience size and nothing else', 'The colour of the stage and nothing else', 'A remark that leaves out any technique'],
    answer: 'One success and one improvement goal',
    explanation: 'Practical reflection helps guide future practice.',
  },
];

const Music = () => (
  <CapsSubjectTopic
    title="Music"
    subtitle="Performance revision, genre comparison, aural recall, and stage etiquette"
    learnSteps={learnSteps}
    task="gr8-music-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Music;
