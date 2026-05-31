import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Refine final performances with aural and genre revision',
    image: {
      src: '/curriculum/grade8/ca/term4/music/diagram.webp',
      alt: 'Grade 8 learners rehearsing a final music item with stage etiquette',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Music in Term 4 revises practical and theory content through performance preparation, genre comparison, and
          aural recall. Learners also apply respectful stage etiquette in showcases.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Aural recall means...',
    options: ['Remembering and identifying sounds by listening', 'Reading only visual art notes', 'Dancing without music', 'Choosing costume colours'],
    answer: 'Remembering and identifying sounds by listening',
    explanation: 'Aural tasks assess what learners hear and remember.',
  },
  {
    prompt: 'Genre comparison in music focuses on...',
    options: ['Differences and similarities in style features', 'Only volume levels', 'Only classroom seating', 'Only instrument prices'],
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
    options: ['Target difficult sections repeatedly', 'Play only easy sections once', 'Avoid feedback completely', 'Change tempo randomly'],
    answer: 'Target difficult sections repeatedly',
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
    options: ['Count beats or use a pulse cue', 'Speed up each phrase', 'Ignore the group leader', 'Pause at random places'],
    answer: 'Count beats or use a pulse cue',
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
    options: ['One success and one improvement goal', 'Only audience size', 'Only stage colour', 'No mention of technique'],
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
