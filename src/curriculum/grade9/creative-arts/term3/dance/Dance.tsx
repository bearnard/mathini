import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Create and refine group choreography',
    image: {
      src: '/curriculum/grade9/creative-arts/term3/dance/image1.jpg',
      alt: 'Grade 9 learners creating group choreography with smooth transitions and clear intent',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Dance in Grade 9 Term 3 develops group choreography and performance. You link movement sections into coherent pieces using effective transitions, maintain expressive intent throughout, document rehearsal progress, develop ensemble discipline, and evaluate performance strengths and gaps for continuous improvement.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Group choreography involves...',
    options: ['Creating movement sequences that multiple dancers perform together', 'Solo work only', 'Individual creation', 'No collaboration'],
    answer: 'Creating movement sequences that multiple dancers perform together',
    explanation: 'Group choreography requires shared vision and coordinated execution.',
  },
  {
    prompt: 'Transitions in choreography are...',
    options: ['Connections between movement sections that flow smoothly', 'Sudden stops', 'Random changes', 'No connection needed'],
    answer: 'Connections between movement sections that flow smoothly',
    explanation: 'Smooth transitions keep audience engaged and performance coherent.',
  },
  {
    prompt: 'Expressive intent in dance means...',
    options: ['The emotional or thematic message you want the movement to convey', 'Just technique only', 'No feeling needed', 'Random expression'],
    answer: 'The emotional or thematic message you want the movement to convey',
    explanation: 'Intent gives meaning and purpose to movement choices.',
  },
  {
    prompt: 'Rehearsal logs help dancers to...',
    options: ['Track progress, document what was learned, and identify areas to improve', 'Waste time', 'No record needed', 'Forget everything'],
    answer: 'Track progress, document what was learned, and identify areas to improve',
    explanation: 'Documentation supports reflection and strategic improvement.',
  },
  {
    prompt: 'Ensemble discipline means...',
    options: ['Consistency, focus, punctuality, and commitment to group goals', 'Doing what you want', 'No rules', 'Distraction is fine'],
    answer: 'Consistency, focus, punctuality, and commitment to group goals',
    explanation: 'Discipline creates professional, polished group performances.',
  },
  {
    prompt: 'Self-evaluation in performance involves...',
    options: ['Honestly assessing your technical skill, expressive quality, and contribution', 'No reflection needed', 'Only blaming others', 'Ignoring mistakes'],
    answer: 'Honestly assessing your technical skill, expressive quality, and contribution',
    explanation: 'Self-awareness drives personal growth and ensemble improvement.',
  },
  {
    prompt: 'Linking movement sections means...',
    options: ['Creating smooth connections so sections flow as one coherent whole', 'Separate pieces only', 'No connection needed', 'Disconnected always'],
    answer: 'Creating smooth connections so sections flow as one coherent whole',
    explanation: 'Linked sections create unified, memorable choreography.',
  },
  {
    prompt: 'Performance gaps you might identify include...',
    options: ['Technical inaccuracies, timing issues, or missing emotional engagement', 'Nothing to improve', 'No problems ever', 'All dancing is perfect'],
    answer: 'Technical inaccuracies, timing issues, or missing emotional engagement',
    explanation: 'Identifying gaps allows targeted improvement and stronger future performances.',
  },
];

const Dance = () => (
  <CapsSubjectTopic
    title="Dance"
    subtitle="Group choreography, transitions, expressive intent, rehearsal discipline, and evaluation"
    learnSteps={learnSteps}
    task="gr9-dance-t3"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Dance;
