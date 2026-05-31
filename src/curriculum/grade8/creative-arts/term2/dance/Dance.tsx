import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Develop motifs into coordinated group dance phrases',
    image: {
      src: '/curriculum/grade8/ca/term2/dance/diagram.webp',
      alt: 'Grade 8 learners developing dance motifs in group patterns',
    },
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
    options: ['Repeating and varying the original movement', 'Deleting all movement detail', 'Keeping one frozen pose only', 'Avoiding rhythm completely'],
    answer: 'Repeating and varying the original movement',
    explanation: 'Development changes a motif while keeping its identity.',
  },
  {
    prompt: 'Folk or social dance study helps learners understand...',
    options: ['Community style and cultural context', 'Only exam timetables', 'Laboratory procedures', 'Painting techniques'],
    answer: 'Community style and cultural context',
    explanation: 'Many dance forms reflect community identity and history.',
  },
  {
    prompt: 'A group pattern in dance refers to...',
    options: ['How dancers are arranged in space', 'Only hand gestures', 'The colour of lighting', 'The song title'],
    answer: 'How dancers are arranged in space',
    explanation: 'Formations such as lines or circles create visual structure.',
  },
  {
    prompt: 'Good coordination in dance means...',
    options: ['Moving in time with others', 'Ignoring counts', 'Changing direction randomly', 'Standing still during cues'],
    answer: 'Moving in time with others',
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
    options: ['Emphasising certain counts or movements', 'Using only slow motion', 'Removing all pauses', 'Keeping one speed always'],
    answer: 'Emphasising certain counts or movements',
    explanation: 'Accents highlight important beats in the phrase.',
  },
  {
    prompt: 'A choreography journal is useful for...',
    options: ['Recording ideas, changes, and reflections', 'Replacing practical rehearsal', 'Storing props', 'Marking attendance only'],
    answer: 'Recording ideas, changes, and reflections',
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
