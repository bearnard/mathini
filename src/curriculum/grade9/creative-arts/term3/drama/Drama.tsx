import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Write, adapt, and rehearse dramatic scenes',
    image: {
      src: '/curriculum/grade9/creative-arts/term3/drama/image1.jpg',
      alt: 'Grade 9 learners writing scripts and rehearsing collaborative performances',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Drama in Grade 9 Term 3 develops scriptwriting and ensemble work. You write or adapt scenes showing character motivation and clear mood communication, develop collaborative rehearsal discipline, reflect on performance choices, and engage in peer review to strengthen work quality and message clarity.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Script writing begins with...',
    options: ['Understanding character motivation, conflict, and the story you want to tell', 'Just dialogue', 'No planning', 'Random words only'],
    answer: 'Understanding character motivation, conflict, and the story you want to tell',
    explanation: 'Clear story vision guides all scriptwriting decisions.',
  },
  {
    prompt: 'Adapting scenes means...',
    options: ['Taking existing material and rewriting it to fit your intent or cast', 'Copying exactly', 'No changes', 'Ignoring source'],
    answer: 'Taking existing material and rewriting it to fit your intent or cast',
    explanation: 'Adaptation allows creative interpretation while respecting source.',
  },
  {
    prompt: 'Character motivation tells us...',
    options: ['Why a character wants something or acts in a certain way', 'How they look', 'Their age only', 'Random actions'],
    answer: 'Why a character wants something or acts in a certain way',
    explanation: 'Strong motivation makes characters believable and engaging.',
  },
  {
    prompt: 'Rehearsal discipline includes...',
    options: ['Focus, punctuality, openness to direction, and productive collaboration', 'Being distracted', 'No attendance needed', 'Talking over others'],
    answer: 'Focus, punctuality, openness to direction, and productive collaboration',
    explanation: 'Professional rehearsal habits create stronger performances.',
  },
  {
    prompt: 'Peer review in drama means...',
    options: ['Giving constructive feedback to fellow performers or writers', 'Only compliments', 'No critique needed', 'Ignoring work'],
    answer: 'Giving constructive feedback to fellow performers or writers',
    explanation: 'Peer feedback supports growth and improves final work.',
  },
  {
    prompt: 'Collaboration in ensemble work requires...',
    options: ['Listening, compromising, supporting others, and contributing ideas', 'Only your ideas matter', 'No communication', 'Working alone always'],
    answer: 'Listening, compromising, supporting others, and contributing ideas',
    explanation: 'Strong collaboration creates richer, more complex work.',
  },
  {
    prompt: 'Stage directions in your script should tell performers...',
    options: ['Where to move, what tone to use, and what action to take', 'Nothing necessary', 'Only when to sit', 'Guess the meaning'],
    answer: 'Where to move, what tone to use, and what action to take',
    explanation: 'Clear directions ensure coherent, intentional performance.',
  },
  {
    prompt: 'Mood in a scene is created by...',
    options: ['Dialogue, movement, pacing, and performer choices combined', 'Only words spoken', 'No contribution from body', 'Music only'],
    answer: 'Dialogue, movement, pacing, and performer choices combined',
    explanation: 'Mood emerges from all theatrical elements working together.',
  },
];

const Drama = () => (
  <CapsSubjectTopic
    title="Drama"
    subtitle="Script writing, character motivation, rehearsal process, and collaboration"
    learnSteps={learnSteps}
    task="gr9-drama-t3"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Drama;
