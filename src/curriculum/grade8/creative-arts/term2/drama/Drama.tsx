import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Shape storytelling scenes with focus and tension',
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
    options: ['Use voice and body so the meaning reaches viewers', 'Ignore eye line and projection on stage', 'Turn away from the audience for the whole scene', 'Speak the lines with no expression at all'],
    answer: 'Use voice and body so the meaning reaches viewers',
    explanation: 'Audience awareness improves clarity and engagement.',
  },
  {
    prompt: 'A script excerpt gives learners...',
    options: ['A short section of dialogue and action', 'A full music score for an orchestra', 'Instructions on costumes and nothing else', 'A reference picture for a painting'],
    answer: 'A short section of dialogue and action',
    explanation: 'Excerpts are selected parts used for focused performance practice.',
  },
  {
    prompt: 'Improvisation in storytelling tasks helps learners...',
    options: ['Try out ideas quickly before settling the scenes', 'Avoid working with the other learners', 'Memorise lines without understanding them', 'Skip the rehearsals for the final scene'],
    answer: 'Try out ideas quickly before settling the scenes',
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
    options: ['Specific examples of strengths and improvements', 'The volume of the applause at the end', 'The prices of the props that were used', 'A general remark that leaves out any technique'],
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
