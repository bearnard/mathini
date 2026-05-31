import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Shape storytelling scenes with focus and tension',
    image: {
      src: '/curriculum/grade8/ca/term2/drama/diagram.webp',
      alt: 'Grade 8 learners shaping a storytelling scene with clear focus and tension',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Drama work in Term 2 uses storytelling and script excerpts to build short scenes with clear structure.
          Learners rehearse stronger beginnings, middles, and endings while keeping audience focus.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A clear dramatic story usually has...',
    options: ['Beginning, middle, and ending', 'Only an ending', 'Only dialogue with no action', 'Random events with no link'],
    answer: 'Beginning, middle, and ending',
    explanation: 'Scene structure helps audiences follow what happens and why.',
  },
  {
    prompt: 'Tension in drama is the feeling of...',
    options: ['Expectation or suspense', 'Complete boredom only', 'Background noise', 'Costume colour choice'],
    answer: 'Expectation or suspense',
    explanation: 'Tension keeps viewers interested in what will happen next.',
  },
  {
    prompt: 'Audience awareness means performers should...',
    options: ['Use voice and body so meaning reaches viewers', 'Ignore eye line and projection', 'Turn away all the time', 'Speak without expression'],
    answer: 'Use voice and body so meaning reaches viewers',
    explanation: 'Audience awareness improves clarity and engagement.',
  },
  {
    prompt: 'A script excerpt gives learners...',
    options: ['A short section of dialogue and action', 'A full music score', 'Only costume instructions', 'A painting reference'],
    answer: 'A short section of dialogue and action',
    explanation: 'Excerpts are selected parts used for focused performance practice.',
  },
  {
    prompt: 'Improvisation in storytelling tasks helps learners...',
    options: ['Explore ideas quickly before finalising scenes', 'Avoid collaboration', 'Memorise without understanding', 'Skip all rehearsal'],
    answer: 'Explore ideas quickly before finalising scenes',
    explanation: 'Improvisation develops creative options for scenes.',
  },
  {
    prompt: 'Cue cards are most useful for...',
    options: ['Prompting key points during rehearsal', 'Replacing all acting choices', 'Keeping voices quiet', 'Preventing scene changes'],
    answer: 'Prompting key points during rehearsal',
    explanation: 'Cue cards support memory while performance choices are built.',
  },
  {
    prompt: 'Blocking in drama refers to...',
    options: ['Planned movement on stage', 'Deleting a script', 'Painting scenery only', 'Changing costume colours'],
    answer: 'Planned movement on stage',
    explanation: 'Blocking helps actors move with purpose and clarity.',
  },
  {
    prompt: 'Reflective discussion after performance should include...',
    options: ['Specific examples of strengths and improvements', 'Only applause volume', 'Only prop prices', 'No mention of technique'],
    answer: 'Specific examples of strengths and improvements',
    explanation: 'Evidence-based reflection improves future performance quality.',
  },
];

const Drama = () => (
  <CapsSubjectTopic
    title="Drama"
    subtitle="Storytelling, scene structure, improvisation, focus, tension, and audience awareness"
    learnSteps={learnSteps}
    task="gr8-drama-t2"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Drama;
