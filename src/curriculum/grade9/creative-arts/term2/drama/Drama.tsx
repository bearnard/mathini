import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Interpret scripts and explore South African theatre',
    image: {
      src: '/curriculum/grade9/creative-arts/term2/drama/image1.jpg',
      alt: 'Grade 9 learners interpreting scripts and exploring character choices',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Drama in Grade 9 Term 2 explores South African theatre and script interpretation. You analyze scripts with stronger character choices and cultural awareness, develop voice and gesture control, follow stage directions with precision, and connect performance to historical or social contexts.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Script interpretation means...',
    options: ['Finding meaning and making acting choices based on the text', 'Just reading words aloud', 'Ignoring the author', 'No creativity needed'],
    answer: 'Finding meaning and making acting choices based on the text',
    explanation: 'Interpretation bridges text and performance through character understanding.',
  },
  {
    prompt: 'South African theatre often reflects...',
    options: ['Local history, social issues, languages, and cultural experiences', 'Only European plays', 'No local content', 'Nothing contemporary'],
    answer: 'Local history, social issues, languages, and cultural experiences',
    explanation: 'SA theatre gives voice to diverse stories and perspectives.',
  },
  {
    prompt: 'Character motivation refers to...',
    options: ['Why a character acts, speaks, or feels a certain way', 'Just facial expressions', 'Only external appearance', 'Random choices'],
    answer: 'Why a character acts, speaks, or feels a certain way',
    explanation: 'Strong motivation makes characters believable and consistent.',
  },
  {
    prompt: 'Voice and gesture in drama help to...',
    options: ['Communicate character emotion, intention, and personality to the audience', 'Make no difference', 'Only words matter', 'Silent performance only'],
    answer: 'Communicate character emotion, intention, and personality to the audience',
    explanation: 'Non-verbal communication is often more powerful than words alone.',
  },
  {
    prompt: 'Stage directions are...',
    options: ['Written instructions for movement, position, tone, and action', 'Suggestions only', 'Not important', 'For directors only'],
    answer: 'Written instructions for movement, position, tone, and action',
    explanation: 'Stage directions guide performers and create coherent scenes.',
  },
  {
    prompt: 'Cultural awareness in performance means...',
    options: ['Understanding the social and historical context of a character or story', 'Ignoring context', 'No research needed', 'Any portrayal is acceptable'],
    answer: 'Understanding the social and historical context of a character or story',
    explanation: 'Context deepens understanding and prevents stereotyping.',
  },
  {
    prompt: 'A staged reading is...',
    options: ['A performance of a script with actors on stage using scripts', 'Only in your head', 'Never performed', 'With memorized lines always'],
    answer: 'A performance of a script with actors on stage using scripts',
    explanation: 'Staged readings allow exploration without full memorization.',
  },
  {
    prompt: 'When analyzing a script, you should ask...',
    options: ['Who are the characters, what do they want, what is the conflict?', 'No questions needed', 'What does the actor look like?', 'Just read it once'],
    answer: 'Who are the characters, what do they want, what is the conflict?',
    explanation: 'Script analysis reveals dramatic structure and character drivers.',
  },
];

const Drama = () => (
  <CapsSubjectTopic
    title="Drama"
    subtitle="South African theatre, script interpretation, voice, gesture, and stage directions"
    learnSteps={learnSteps}
    task="gr9-drama-t2"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Drama;
