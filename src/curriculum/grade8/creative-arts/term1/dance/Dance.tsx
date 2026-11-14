import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Control movement, timing, and safe technique',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Dance in Term 1 builds movement vocabulary through locomotor and non-locomotor actions. Learners practise
          posture, space awareness, timing, and safe stretching for confident sequence work.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which movement is locomotor?',
    options: ['Skipping across the room', 'Bending knees in one spot', 'Twisting on one spot', 'Reaching upward while standing'],
    answer: 'Skipping across the room',
    explanation: 'Locomotor movement travels from one place to another.',
  },
  {
    prompt: 'A non-locomotor movement usually...',
    options: ['Stays mostly in one place', 'Travels quickly across the floor', 'Needs a partner lift', 'Uses no rhythm'],
    answer: 'Stays mostly in one place',
    explanation: 'Non-locomotor actions include bending, twisting, and stretching on the spot.',
  },
  {
    prompt: 'Good posture in dance helps with...',
    options: ['Balance and safe movement', 'Ignoring counts', 'Moving without control', 'Skipping warm-ups'],
    answer: 'Balance and safe movement',
    explanation: 'Aligned posture protects the body and improves control.',
  },
  {
    prompt: 'Why do dancers count beats?',
    options: ['To keep timing accurate', 'To make music louder', 'To avoid movement changes', 'To remove expression'],
    answer: 'To keep timing accurate',
    explanation: 'Counting helps dancers enter and finish movements together.',
  },
  {
    prompt: 'Safe stretching should be...',
    options: ['Controlled and not forced', 'Fast and jerky', 'Done without warming up', 'Painful to be effective'],
    answer: 'Controlled and not forced',
    explanation: 'Safe stretching is gradual and controlled to avoid injury.',
  },
  {
    prompt: 'Changing from high to low level in dance affects...',
    options: ['The use of space and visual interest', 'Only costume colour', 'The number of learners present', 'The name of the song'],
    answer: 'The use of space and visual interest',
    explanation: 'Level changes help make movement phrases clearer and more interesting.',
  },
  {
    prompt: 'In group dance, spatial awareness means...',
    options: ['Knowing where others are so you avoid collisions', 'Keeping your eyes on the mirror and nowhere else', 'Dancing at your own tempo, whatever the music does', 'Keeping to the formation lines even if others move'],
    answer: 'Knowing where others are so you avoid collisions',
    explanation: 'Awareness of spacing keeps the group safe and coordinated.',
  },
  {
    prompt: 'A cool-down after dance is useful because it...',
    options: ['Helps the body recover gradually', 'Replaces all rehearsals', 'Makes timing unnecessary', 'Removes the need for water'],
    answer: 'Helps the body recover gradually',
    explanation: 'Cool-down reduces strain and supports safer recovery after activity.',
  },
];

const Dance = () => (
  <CapsSubjectTopic
    title="Dance"
    subtitle="Locomotor and non-locomotor movement, posture, timing, and safety"
    learnSteps={learnSteps}
    task="gr8-dance-t1"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Dance;
