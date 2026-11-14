import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Develop motifs into coordinated group dance phrases',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Dance in Term 2 focuses on motif development, rhythm, and coordination in partner or group work. Learners
          build short phrases influenced by folk or social dance and practise accurate formations.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A dance motif is...',
    options: ['A short movement idea', 'A full 30-minute routine', 'A costume list', 'A warm-up only'],
    answer: 'A short movement idea',
    explanation: 'Motifs are small movement units used to build choreography.',
  },
  {
    prompt: 'Motif development can be done by...',
    options: ['Repeating and varying the original movement', 'Taking out all of the detail from the movement', 'Keeping to one frozen pose and nothing else', 'Leaving out rhythm from the movement'],
    answer: 'Repeating and varying the original movement',
    explanation: 'Development changes a motif while keeping its identity.',
  },
  {
    prompt: 'Folk or social dance study helps learners understand...',
    options: ['The style and cultural context of a community', 'The timetable of the exams in the school', 'The steps of a laboratory procedure', 'The painting techniques of a famous artist'],
    answer: 'The style and cultural context of a community',
    explanation: 'Many dance forms reflect community identity and history.',
  },
  {
    prompt: 'A group pattern in dance refers to...',
    options: ['How the dancers are arranged in space', 'The hand gestures that the dancers use', 'The colour of the lights on the stage', 'The title of the song that is played'],
    answer: 'How the dancers are arranged in space',
    explanation: 'Formations such as lines or circles create visual structure.',
  },
  {
    prompt: 'Good coordination in dance means...',
    options: ['Moving in time with the others', 'Ignoring the counts and following your own beat', 'Changing direction whenever you feel like it', 'Standing still when the cues are given'],
    answer: 'Moving in time with the others',
    explanation: 'Coordination combines timing, spacing, and body control.',
  },
  {
    prompt: 'In partner work, safe practice requires...',
    options: ['Clear communication and controlled movement', 'Surprising lifts without warning', 'No eye contact', 'Rushing transitions'],
    answer: 'Clear communication and controlled movement',
    explanation: 'Partner safety depends on communication and shared timing.',
  },
  {
    prompt: 'Rhythm accents in choreography are shown by...',
    options: ['Stressing certain counts or movements', 'Using slow motion for the whole dance', 'Cutting out all of the pauses from the dance', 'Keeping to one speed from start to end'],
    answer: 'Stressing certain counts or movements',
    explanation: 'Accents highlight important beats in the phrase.',
  },
  {
    prompt: 'A choreography journal is useful for...',
    options: ['Recording ideas, changes and reflections', 'Taking the place of the practical rehearsals', 'Storing the props for the production', 'Marking the attendance of the dancers'],
    answer: 'Recording ideas, changes and reflections',
    explanation: 'Journals capture creative decisions during the dance process.',
  },
];

const Dance = () => (
  <CapsSubjectTopic
    title="Dance"
    subtitle="Motif development, folk or social dance, rhythm, group patterns, and coordination"
    learnSteps={learnSteps}
    task="gr8-dance-t2"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default Dance;
