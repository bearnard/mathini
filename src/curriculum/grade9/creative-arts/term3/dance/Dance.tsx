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
    options: ['Making sequences that several dancers perform together', 'A solo piece made and danced by one person', 'Work that each dancer creates on their own', 'Dance done with no sharing of ideas'],
    answer: 'Making sequences that several dancers perform together',
    explanation: 'Group choreography requires shared vision and coordinated execution.',
  },
  {
    prompt: 'Transitions in choreography are...',
    options: ['Links between sections that flow smoothly', 'Sudden stops that break up the dance', 'Changes that are made without any thought', 'A gap with no link from one section to the next'],
    answer: 'Links between sections that flow smoothly',
    explanation: 'Smooth transitions keep audience engaged and performance coherent.',
  },
  {
    prompt: 'Expressive intent in dance means...',
    options: ['The feeling or theme you want the movement to show', 'Technique and nothing else in the dance', 'A dance that needs no feeling at all', 'Moves that carry no clear meaning for anyone'],
    answer: 'The feeling or theme you want the movement to show',
    explanation: 'Intent gives meaning and purpose to movement choices.',
  },
  {
    prompt: 'Rehearsal logs help dancers to...',
    options: ['Track progress, record what was learned and show what to improve', 'Waste rehearsal time that could be used to dance', 'Keep records that are not needed by any dancer', 'Help dancers forget what happened in the last rehearsal'],
    answer: 'Track progress, record what was learned and show what to improve',
    explanation: 'Documentation supports reflection and strategic improvement.',
  },
  {
    prompt: 'Ensemble discipline means...',
    options: ['Consistency, focus, punctuality and commitment to group goals', 'Doing what you want while the others follow the plan', 'Having no rules, so each dancer decides alone', 'Being easily distracted while the group is working'],
    answer: 'Consistency, focus, punctuality and commitment to group goals',
    explanation: 'Discipline creates professional, polished group performances.',
  },
  {
    prompt: 'Self-evaluation in performance involves...',
    options: ['Honestly judging your technical skill, expression and contribution', 'Skipping reflection, since the audience will judge', 'Blaming the other performers for the weak parts', 'Ignoring your mistakes and moving on to the next piece'],
    answer: 'Honestly judging your technical skill, expression and contribution',
    explanation: 'Self-awareness drives personal growth and ensemble improvement.',
  },
  {
    prompt: 'Linking movement sections means...',
    options: ['Making smooth links so the sections flow as one whole', 'Keeping the sections as separate pieces', 'Leaving out links, since none are needed', 'Breaking up the sections so each one stands alone'],
    answer: 'Making smooth links so the sections flow as one whole',
    explanation: 'Linked sections create unified, memorable choreography.',
  },
  {
    prompt: 'Performance gaps you might identify include...',
    options: ['Technical errors, timing problems or missing emotional involvement', 'Nothing to improve, as the performance was good enough', 'Gaps that are never found in a performance', 'Gaps that exist only in the work of weak dancers'],
    answer: 'Technical errors, timing problems or missing emotional involvement',
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
