import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Create devised drama from social themes with control',
    image: {
      src: '/curriculum/grade9/creative-arts/term1/drama/image1.jpg',
      alt: 'Grade 9 learners creating devised scenes exploring role, mood, and conflict',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Drama in Grade 9 Term 1 develops devised work. You explore role and character, mood and atmosphere, conflict and tension, stage space usage, and physical theatre techniques. Build short scenes from social themes using body and voice with growing control.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Devised drama means...',
    options: ['Theatre created by performers based on themes or ideas, not a written script', 'Only rehearsed plays', 'Memorizing lines exactly', 'Professional theatre only'],
    answer: 'Theatre created by performers based on themes or ideas, not a written script',
    explanation: 'Devised theatre lets performers develop original material collaboratively.',
  },
  {
    prompt: 'A role in drama is...',
    options: ['The character a performer plays or represents', 'Only a job position', 'A type of bread', 'A costume piece'],
    answer: 'The character a performer plays or represents',
    explanation: 'Roles are distinct personae with motivations, relationships, and personalities.',
  },
  {
    prompt: 'Mood in a scene refers to...',
    options: ['The emotional atmosphere or feeling created', 'The stage lighting only', 'How loud to speak', 'The music volume'],
    answer: 'The emotional atmosphere or feeling created',
    explanation: 'Mood is created through tone, pace, tension, and performer choices.',
  },
  {
    prompt: 'Conflict in drama usually means...',
    options: ['Disagreement or tension between characters or forces', 'Fighting physically', 'Being mean to others', 'Avoiding scenes'],
    answer: 'Disagreement or tension between characters or forces',
    explanation: 'Conflict drives plot and character development in drama.',
  },
  {
    prompt: 'Physical theatre emphasizes...',
    options: ['Movement, gesture, and body expression over dialogue', 'Only speaking', 'Sitting still', 'Loud voice only'],
    answer: 'Movement, gesture, and body expression over dialogue',
    explanation: 'Physical theatre uses the body as the primary storytelling tool.',
  },
  {
    prompt: 'Stage space awareness means performers should...',
    options: ['Know their position and use the full stage intentionally', 'Stay in one corner only', 'Move randomly', 'Ignore the audience'],
    answer: 'Know their position and use the full stage intentionally',
    explanation: 'Good spatial awareness creates visual composition and communication.',
  },
  {
    prompt: 'A social theme for devised drama might include...',
    options: ['Bullying, friendship, family relationships, identity, or community issues', 'Fairy tales only', 'Historical dates only', 'Math problems'],
    answer: 'Bullying, friendship, family relationships, identity, or community issues',
    explanation: 'Strong themes connect to learners\' experiences and understanding of society.',
  },
  {
    prompt: 'Voice control in drama helps performers to...',
    options: ['Project, vary pace and tone, and convey emotion effectively', 'Whisper always', 'Shout loudly only', 'Never change volume'],
    answer: 'Project, vary pace and tone, and convey emotion effectively',
    explanation: 'Vocal variety creates believable characters and holds audience attention.',
  },
];

const Drama = () => (
  <CapsSubjectTopic
    title="Drama"
    subtitle="Devised drama, role, mood, conflict, stage space, and physical theatre"
    learnSteps={learnSteps}
    task="gr9-drama-t1"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Drama;
