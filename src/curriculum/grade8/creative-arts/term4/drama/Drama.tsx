import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Polish scripted performance and evaluate techniques',
    image: {
      src: '/curriculum/grade8/ca/term4/drama/diagram.webp',
      alt: 'Grade 8 learners presenting a polished scripted performance to an audience',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 drama prepares learners for final performance through disciplined rehearsal, cue accuracy, and
          audience etiquette. Reflection focuses on how dramatic techniques shaped meaning.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Rehearsal discipline is shown when actors...',
    options: ['Arrive prepared and follow rehearsal plans', 'Change scripts without agreement', 'Skip scene objectives', 'Ignore timing cues'],
    answer: 'Arrive prepared and follow rehearsal plans',
    explanation: 'Discipline supports reliable, high-quality performance.',
  },
  {
    prompt: 'A scripted performance requires learners to...',
    options: ['Interpret written dialogue and stage directions', 'Improvise every line', 'Avoid all blocking', 'Ignore character motivation'],
    answer: 'Interpret written dialogue and stage directions',
    explanation: 'Scripted work combines text interpretation with performance craft.',
  },
  {
    prompt: 'Audience etiquette includes...',
    options: ['Listening respectfully during performances', 'Talking loudly through scenes', 'Walking on stage uninvited', 'Using phones in front row'],
    answer: 'Listening respectfully during performances',
    explanation: 'Respectful audiences support concentration and communication.',
  },
  {
    prompt: 'Clear articulation helps because it...',
    options: ['Makes spoken lines easier to understand', 'Removes need for expression', 'Replaces rehearsal', 'Makes all scenes shorter'],
    answer: 'Makes spoken lines easier to understand',
    explanation: 'Articulation improves clarity of words and meaning.',
  },
  {
    prompt: 'Cue accuracy in drama means...',
    options: ['Entering or speaking at the correct moment', 'Speaking before every line', 'Ignoring partner timing', 'Changing scenes randomly'],
    answer: 'Entering or speaking at the correct moment',
    explanation: 'Accurate cues keep scenes flowing smoothly.',
  },
  {
    prompt: 'When evaluating a scene, learners should discuss...',
    options: ['How techniques affected audience understanding', 'Only costume colour', 'Only classroom furniture', 'Only ticket price'],
    answer: 'How techniques affected audience understanding',
    explanation: 'Evaluation links performance choices to meaning.',
  },
  {
    prompt: 'Backstage teamwork is important because it...',
    options: ['Supports smooth transitions and focus', 'Allows everyone to improvise props', 'Replaces all rehearsal', 'Removes performer responsibility'],
    answer: 'Supports smooth transitions and focus',
    explanation: 'Coordinated backstage roles improve performance quality.',
  },
  {
    prompt: 'A strong post-performance reflection should include...',
    options: ['Evidence from specific moments in the scene', 'Only personal feelings with no examples', 'Only audience clothing', 'No mention of dramatic methods'],
    answer: 'Evidence from specific moments in the scene',
    explanation: 'Specific evidence makes evaluation useful and credible.',
  },
];

const Drama = () => (
  <CapsSubjectTopic
    title="Drama"
    subtitle="Scripted performance, rehearsal discipline, audience etiquette, and evaluation"
    learnSteps={learnSteps}
    task="gr8-drama-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Drama;
