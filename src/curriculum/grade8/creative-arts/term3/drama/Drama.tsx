import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Build character and conflict for staged scenes',
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
    options: ['Building believable characters through choices', 'Reading the lines with no emotion', 'Standing still throughout the scene', 'Choosing the costumes and nothing else'],
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
    options: ['How actors and action are placed on stage', 'The font size that is used in the script text', 'The sound volume of the whole performance', 'The colour of the costumes worn on stage'],
    answer: 'How actors and action are placed on stage',
    explanation: 'Staging choices affect visibility, meaning, and audience focus.',
  },
  {
    prompt: 'Scripted dialogue helps learners to...',
    options: ['Practise timing, cues and interpretation', 'Avoid rehearsals before the show', 'Ignore the punctuation in the lines', 'Take out the intentions of the characters'],
    answer: 'Practise timing, cues and interpretation',
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
    options: ['A learner answers questions while in role as a character', 'The audience leaves before the scene ends', 'The actors only change their costumes', 'The lines are read silently by each actor'],
    answer: 'A learner answers questions while in role as a character',
    explanation: 'Hot-seating deepens understanding of character thoughts and motives.',
  },
  {
    prompt: 'Strong focus on stage means performers...',
    options: ['Stay committed to the aim of the scene', 'Break character quite often during the scene', 'Face away from all of the cues', 'Move about without any purpose'],
    answer: 'Stay committed to the aim of the scene',
    explanation: 'Focused acting keeps the dramatic world believable.',
  },
  {
    prompt: 'A useful rehearsal reflection question is...',
    options: ['How did staging choices support the conflict?', 'How many desks were in the classroom?', 'What was the weather like outside?', 'Which snack was sold at break time?'],
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
