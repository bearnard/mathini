import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, WeekBars, Zones } from '../../../../../components/diagrams/lo/PswPictures';
import { weekPlan } from '../../../../../components/diagrams/lo/pswHelpers';
import { GrowthBars } from '../../../../../components/diagrams/lo/CaPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// The week total comes from the tested weekPlan helper.
const practice = weekPlan([15, 15, 15, 15, 15]);
const hoursMinutes = (m: number) => `${Math.floor(m / 60)} h ${m % 60} min`;

export const learnSteps: LearnStep[] = [
  {
    title: 'Curating a portfolio',
    content: slide(
      <>
        <Rule>Portfolio curation means selecting and organising work that shows your learning progress. Choose pieces that show improvement and a range of skills, and put them in a logical order.</Rule>
        <GrowthBars labels={['Draft', 'Redo', 'Final']} values={[2, 3, 5]} aria="Three bars rising from left to right: a draft, a redo and a final piece, showing improvement." />
        <Worked
          title="Choose pieces for a mini-portfolio"
          steps={[<>You have a first sketch, an improved sketch, a mixed-media piece and a performance photo.</>, <>Keep the first and improved sketch: they show improvement.</>, <>Keep the mixed-media piece and the photo: they show a range of skills.</>, <>Order them by date and add a short note on what you learned.</>]}
        />
        <Mistake>Choosing only the prettiest pieces, or putting work in a random order. The order should help viewers see your growth and intention.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rehearsal discipline',
    content: slide(
      <>
        <Rule>Rehearsal discipline means arriving prepared and practising consistently. It builds confidence and reliable performance quality.</Rule>
        <WeekBars days={['Mon', 'Tue', 'Wed', 'Thu', 'Fri']} minutes={[15, 15, 15, 15, 15]} aria="Five bars for Monday to Friday, each showing 15 minutes of rehearsal, 75 minutes in the week." />
        <Worked
          title="A rehearsal plan"
          steps={[<>Practise your piece for 15 minutes each weekday.</>, <>5 × 15 = {practice.total} minutes, or {hoursMinutes(practice.total)}, in the week.</>, <>Arrive with your lines, music or props ready.</>]}
        />
        <Mistake>Practising only the night before, or arriving at rehearsal without what you need. Regular practice is what makes a performance reliable.</Mistake>
      </>,
    ),
  },
  {
    title: 'An integrated showcase',
    content: slide(
      <>
        <Rule>An integrated showcase is a presentation that combines different art forms. It links visual, musical, movement or dramatic elements around one message.</Rule>
        <Hub centre="Showcase" spokes={['Visual art', 'Music', 'Movement', 'Drama']} aria="A circle labelled Showcase with four art forms around it: visual art, music, movement and drama." />
        <Worked
          title="A showcase on the theme “Water”"
          steps={[<>Visual art: a blue poster backdrop.</>, <>Music: a flowing rhythm on a drum.</>, <>Movement: a ripple passing along the group.</>, <>Drama: one spoken line about saving water.</>]}
        />
        <Mistake>Adding an art form that has nothing to do with your message just to have more parts. Every part should help the message.</Mistake>
      </>,
    ),
  },
  {
    title: 'Feedback and final checks',
    content: slide(
      <>
        <Rule>Self-evaluation asks how clearly your work communicated to the audience. Helpful peer feedback is specific, balanced and tells you what to do next. Before presenting, check timing, transitions and clarity of message.</Rule>
        <Zones zones={[{ title: 'Vague', line: '“It was good.”' }, { title: 'Helpful', line: 'A strength and a next step' }, { title: 'Unkind', line: 'Insults the person' }]} aria="Three kinds of feedback side by side: vague feedback such as it was good, helpful feedback with a strength and a next step, and unkind feedback that insults the person." />
        <Worked
          title="Make feedback helpful"
          steps={[<>Not helpful: “It was not good.”</>, <>Helpful: “Your transitions improved; slow down the opening line.”</>, <>Then run through timing, transitions and your message once more.</>]}
        />
        <Mistake>Skipping the final run-through. Checking timing, transitions and clarity of message gives you confidence on the day.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is portfolio curation, and which two things help you choose pieces?" answer="Selecting and organising work that shows learning progress. Choose pieces that show improvement and a range of skills." />
        <Check question="What does rehearsal discipline look like?" answer="Arriving prepared and practising consistently." />
        <Check question="What is an integrated showcase?" answer="A presentation combining different art forms." />
        <Check question="Name three things to check before the final presentation." answer="Timing, transitions and clarity of message." />
      </>,
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
