import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Interpret scripts and explore South African theatre',
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
    options: ['Finding meaning and making acting choices from the text', 'Reading the words aloud as they are printed', 'Ignoring what the author meant to say', 'Following the script with no creative choices'],
    answer: 'Finding meaning and making acting choices from the text',
    explanation: 'Interpretation bridges text and performance through character understanding.',
  },
  {
    prompt: 'South African theatre often reflects...',
    options: ['Local history, social issues, languages and cultures', 'European plays that are staged in translation', 'Foreign stories with no local content', 'Old plays and no new or modern work'],
    answer: 'Local history, social issues, languages and cultures',
    explanation: 'SA theatre gives voice to diverse stories and perspectives.',
  },
  {
    prompt: 'Character motivation refers to...',
    options: ['Why a character acts, speaks or feels as they do', 'The look on the face of the character', 'The outer appearance and costume of the character', 'The lines that the character has in the script'],
    answer: 'Why a character acts, speaks or feels as they do',
    explanation: 'Strong motivation makes characters believable and consistent.',
  },
  {
    prompt: 'Voice and gesture in drama help to...',
    options: ["Show a character's feelings, aims and personality to the audience", 'They make no difference to the way a part is played', 'They matter less than the words that are spoken', 'They are used in silent performance only'],
    answer: "Show a character's feelings, aims and personality to the audience",
    explanation: 'Non-verbal communication is often more powerful than words alone.',
  },
  {
    prompt: 'Stage directions are...',
    options: ['Written instructions for movement, position, tone and action', 'Suggestions that the actors may ignore', 'Notes that matter little when performing a play', 'Notes that the director reads and the actors do not'],
    answer: 'Written instructions for movement, position, tone and action',
    explanation: 'Stage directions guide performers and create coherent scenes.',
  },
  {
    prompt: 'Cultural awareness in performance means...',
    options: ['Understanding the social and historical setting of a character', 'Ignoring the setting of the story when performing', 'Acting without doing any research on the story', 'Believing that any portrayal is acceptable'],
    answer: 'Understanding the social and historical setting of a character',
    explanation: 'Context deepens understanding and prevents stereotyping.',
  },
  {
    prompt: 'A staged reading is...',
    options: ['A performance in which actors hold scripts and read on stage', 'A reading done silently in the mind of one actor', 'A script that is read but never performed', 'A play in which every line has been memorised'],
    answer: 'A performance in which actors hold scripts and read on stage',
    explanation: 'Staged readings allow exploration without full memorization.',
  },
  {
    prompt: 'When analyzing a script, you should ask...',
    options: ['Who are the characters, what do they want, what is the conflict?', 'How many pages does the script have to run?', 'What does each actor look like on the stage?', 'How quickly can the script be read once through?'],
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
