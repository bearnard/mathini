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
    options: ['Interpret written dialogue and stage directions', 'Improvise every line as it comes to you', 'Avoid all blocking on the stage', 'Ignore the motives of the character'],
    answer: 'Interpret written dialogue and stage directions',
    explanation: 'Scripted work combines text interpretation with performance craft.',
  },
  {
    prompt: 'Audience etiquette includes...',
    options: ['Listening respectfully during performances', 'Talking loudly through the scenes', 'Walking onto the stage without invitation', 'Using phones in the front row'],
    answer: 'Listening respectfully during performances',
    explanation: 'Respectful audiences support concentration and communication.',
  },
  {
    prompt: 'Clear articulation helps because it...',
    options: ['It makes spoken lines easier to understand', 'It removes the need for any expression', 'It takes the place of rehearsal', 'It makes all of the scenes shorter'],
    answer: 'It makes spoken lines easier to understand',
    explanation: 'Articulation improves clarity of words and meaning.',
  },
  {
    prompt: 'Cue accuracy in drama means...',
    options: ['Coming in or speaking at the right moment', 'Speaking before every one of the lines', 'Ignoring the timing of your partner', 'Changing scenes whenever you wish'],
    answer: 'Coming in or speaking at the right moment',
    explanation: 'Accurate cues keep scenes flowing smoothly.',
  },
  {
    prompt: 'When evaluating a scene, learners should discuss...',
    options: ["How the techniques affected the audience's understanding", 'The colour of the costumes and nothing else', 'The furniture in the classroom', 'The price of the tickets for the show'],
    answer: "How the techniques affected the audience's understanding",
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
