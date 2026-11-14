import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Create devised drama from social themes with control',
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
    options: ['Theatre made by the performers from ideas, without a written script', 'Plays that have been rehearsed from a published script', 'Plays in which every line is learned word for word', 'Theatre made by professional companies only'],
    answer: 'Theatre made by the performers from ideas, without a written script',
    explanation: 'Devised theatre lets performers develop original material collaboratively.',
  },
  {
    prompt: 'A role in drama is...',
    options: ['The character that a performer plays', 'A job title held by a member of the crew', 'A name for the part of the stage where actors enter', 'A piece of costume that suggests the character'],
    answer: 'The character that a performer plays',
    explanation: 'Roles are distinct personae with motivations, relationships, and personalities.',
  },
  {
    prompt: 'Mood in a scene refers to...',
    options: ['The emotional feeling that a scene creates', 'The stage lighting that is used in the scene', 'How loudly the actors need to speak', 'The volume of the music that plays in the scene'],
    answer: 'The emotional feeling that a scene creates',
    explanation: 'Mood is created through tone, pace, tension, and performer choices.',
  },
  {
    prompt: 'Conflict in drama usually means...',
    options: ['A clash or tension between characters or forces', 'A physical fight between two actors on stage', 'Being unkind to the other people in a scene', 'Keeping away from the other actors in a scene'],
    answer: 'A clash or tension between characters or forces',
    explanation: 'Conflict drives plot and character development in drama.',
  },
  {
    prompt: 'Physical theatre emphasizes...',
    options: ['Movement, gesture and body expression more than dialogue', 'Speech alone, with no use of the body', 'Sitting still on stage while the lines are spoken', 'A loud voice that is heard at the back of the hall'],
    answer: 'Movement, gesture and body expression more than dialogue',
    explanation: 'Physical theatre uses the body as the primary storytelling tool.',
  },
  {
    prompt: 'Stage space awareness means performers should...',
    options: ['Know where you are and use the whole stage on purpose', 'Stay in one corner of the stage to be safe', 'Move around the stage without any plan or purpose', 'Face away from the audience for the whole scene'],
    answer: 'Know where you are and use the whole stage on purpose',
    explanation: 'Good spatial awareness creates visual composition and communication.',
  },
  {
    prompt: 'A social theme for devised drama might include...',
    options: ['Bullying, friendship, family, identity or community issues', 'Fairy tales that were told long ago', 'Dates of historic events that learners must recall', 'Maths problems that are set in a class test'],
    answer: 'Bullying, friendship, family, identity or community issues',
    explanation: 'Strong themes connect to learners\' experiences and understanding of society.',
  },
  {
    prompt: 'Voice control in drama helps performers to...',
    options: ['Project, vary pace and tone and show emotion well', 'Whisper through the whole scene to sound real', 'Shout every line so that it can be heard', 'Keep one volume for all the lines in a play'],
    answer: 'Project, vary pace and tone and show emotion well',
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
