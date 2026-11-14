import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Curate a mini-portfolio and prepare a showcase',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 Creative Arts consolidates the year through <strong>portfolio curation</strong> and an integrated
          showcase. Learners choose work that demonstrates growth and quality.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Curation</p>
            <p className="text-slate-600">select meaningful evidence of learning</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Rehearsal discipline</p>
            <p className="text-slate-600">consistent focused practice</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Integrated showcase</p>
            <p className="text-slate-600">combine visual and performing elements</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Self-evaluation</p>
            <p className="text-slate-600">reflect on strengths and next steps</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use feedback to polish final presentations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners improve communication by using self- and peer-assessment. Polished work shows planning, rehearsal,
          and clear choices for an audience.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Audience focus</p>
            <p className="text-slate-600">deliver message clearly and confidently</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Peer feedback</p>
            <p className="text-slate-600">specific comments for improvement</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Organisation</p>
            <p className="text-slate-600">logical order of portfolio pieces</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Final polish</p>
            <p className="text-slate-600">timing, transitions, and detail checks</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is portfolio curation?',
    options: ['Selecting and organising work that shows learning progress', 'Keeping every draft without reviewing it', 'Choosing only the task that you did quickest', 'Showing the work in an order that has no pattern'],
    answer: 'Selecting and organising work that shows learning progress',
    explanation: 'Curation highlights quality, growth, and reflection across tasks.',
  },
  {
    prompt: 'Which criterion helps choose portfolio pieces?',
    options: [
      'Evidence of improvement and skill range',
      'Only the oldest work in the file',
      'Pieces with no feedback at all',
      'Random selection without purpose',
    ],
    answer: 'Evidence of improvement and skill range',
    explanation: 'Strong portfolios show development and variety of competencies.',
  },
  {
    prompt: 'What does rehearsal discipline look like?',
    options: ['Arriving prepared and practising consistently', 'Skipping practice and improvising everything', 'Ignoring timing cues in group work', 'Stopping whenever tasks get hard'],
    answer: 'Arriving prepared and practising consistently',
    explanation: 'Discipline builds confidence and reliable performance quality.',
  },
  {
    prompt: 'What is an integrated showcase?',
    options: [
      'A presentation combining different art forms',
      'A single worksheet with no performance',
      'A test with only multiple-choice questions',
      'A warm-up drill without artistic content',
    ],
    answer: 'A presentation combining different art forms',
    explanation: 'Integration links visual, musical, movement, or dramatic elements.',
  },
  {
    prompt: 'Which question fits self-evaluation?',
    options: ['How clearly did my work communicate to the audience?', 'Did I finish before everyone else did?', 'Was my costume the most expensive one?', 'Did I avoid all of the suggestions made?'],
    answer: 'How clearly did my work communicate to the audience?',
    explanation: 'Self-evaluation focuses on effectiveness and improvement.',
  },
  {
    prompt: 'Which peer feedback is most helpful?',
    options: ['Your transitions improved; slow down the opening line', 'This is bad and pointless work', 'No one should comment on the work of others', 'Only marks matter and not improvement'],
    answer: 'Your transitions improved; slow down the opening line',
    explanation: 'Helpful feedback is specific, balanced, and actionable.',
  },
  {
    prompt: 'Why organise portfolio pieces in logical order?',
    options: [
      'It helps viewers see growth and intention',
      'It makes reflection impossible',
      'It hides strengths from assessors',
      'It removes the need for labels or notes',
    ],
    answer: 'It helps viewers see growth and intention',
    explanation: 'Order supports storytelling of your learning journey.',
  },
  {
    prompt: 'What should learners check before final presentation?',
    options: [
      'Timing, transitions, and clarity of message',
      'Only whether the room is cold',
      'How fast they can finish speaking',
      'Whether peers are watching only',
    ],
    answer: 'Timing, transitions, and clarity of message',
    explanation: 'Final checks improve confidence and audience understanding.',
  },
];

const CreativeArtsT4 = () => (
  <CapsSubjectTopic
    title="Creative Arts"
    subtitle="Portfolio curation, rehearsal discipline, integrated showcase, and self-evaluation"
    learnSteps={learnSteps}
    task="gr7-creative-arts-t4"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default CreativeArtsT4;
