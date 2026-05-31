import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Build character and conflict for staged scenes',
    image: {
      src: '/curriculum/grade8/ca/term3/drama/diagram.webp',
      alt: 'Grade 8 learners rehearsing a scripted scene with conflict and character focus',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Drama in Term 3 deepens characterisation, conflict, and staging. Learners rehearse scripted or devised
          scenes with stronger focus, purposeful movement, and clearer dialogue delivery.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Characterisation means...',
    options: ['Building believable characters through choices', 'Reading lines with no emotion', 'Standing still throughout', 'Only choosing costumes'],
    answer: 'Building believable characters through choices',
    explanation: 'Characterisation includes voice, movement, motivation, and reaction.',
  },
  {
    prompt: 'Conflict in drama usually...',
    options: ['Drives the action of the scene', 'Ends the scene immediately', 'Removes all tension', 'Avoids character decisions'],
    answer: 'Drives the action of the scene',
    explanation: 'Conflict creates dramatic interest and motivates characters.',
  },
  {
    prompt: 'Staging refers to...',
    options: ['How actors and action are arranged in performance space', 'Only script font size', 'Only sound volume', 'Only costume colour'],
    answer: 'How actors and action are arranged in performance space',
    explanation: 'Staging choices affect visibility, meaning, and audience focus.',
  },
  {
    prompt: 'Scripted dialogue helps learners to...',
    options: ['Practise timing, cues, and interpretation', 'Avoid any rehearsal', 'Ignore punctuation', 'Remove character intentions'],
    answer: 'Practise timing, cues, and interpretation',
    explanation: 'Dialogue provides structure for performance decisions.',
  },
  {
    prompt: 'Rehearsal discipline includes...',
    options: ['Arriving prepared and using time productively', 'Talking over scenes', 'Skipping warm-ups', 'Changing scenes without agreement'],
    answer: 'Arriving prepared and using time productively',
    explanation: 'Discipline improves consistency and final performance quality.',
  },
  {
    prompt: 'Hot-seating is an activity where...',
    options: ['A learner answers questions in role as a character', 'The audience leaves early', 'Actors change costumes only', 'Lines are read silently'],
    answer: 'A learner answers questions in role as a character',
    explanation: 'Hot-seating deepens understanding of character thoughts and motives.',
  },
  {
    prompt: 'Strong focus on stage means performers...',
    options: ['Stay committed to the scene objective', 'Break character often', 'Face away from all cues', 'Move without purpose'],
    answer: 'Stay committed to the scene objective',
    explanation: 'Focused acting keeps the dramatic world believable.',
  },
  {
    prompt: 'A useful rehearsal reflection question is...',
    options: ['How did staging choices support the conflict?', 'How many desks were in class?', 'What was the weather outside?', 'Which snack was sold at break?'],
    answer: 'How did staging choices support the conflict?',
    explanation: 'Reflection should connect techniques to dramatic meaning.',
  },
];

const Drama = () => (
  <CapsSubjectTopic
    title="Drama"
    subtitle="Characterisation, conflict, staging, scripted dialogue, and rehearsal"
    learnSteps={learnSteps}
    task="gr8-drama-t3"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Drama;
