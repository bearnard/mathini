import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Perform with teamwork and safe technique',
    image: {
      src: '/curriculum/grade8/lo/term3/physical-education-task/diagram.webp',
      alt: 'grade 8 learners doing relay athletics and indigenous games with teamwork',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 PET develops athletics skills, relay routines, indigenous games, flexibility, and cooperation in
          movement challenges.
        </p>
      </div>
    ),
  },
  {
    title: 'Track effort and participation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Progress comes from safe practice, positive teamwork, and regular reflection on personal performance.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In relay events, what is most important during baton exchange?',
    options: [
      'Timing and clear communication',
      'Running without lane awareness',
      'Ignoring teammate signals',
      'Starting before instructions',
    ],
    answer: 'Timing and clear communication',
    explanation: 'Efficient exchange depends on coordination and trust.',
  },
  {
    prompt: 'Why are indigenous games included in PET?',
    options: [
      'They build movement skills and cultural appreciation',
      'They replace all teamwork',
      'They remove fitness demands',
      'They are only for spectators',
    ],
    answer: 'They build movement skills and cultural appreciation',
    explanation: 'Indigenous games support coordination, social skills, and heritage learning.',
  },
  {
    prompt: 'Which action improves flexibility safely?',
    options: [
      'Controlled stretching after warm-up',
      'Forcing painful stretches suddenly',
      'Skipping warm-ups',
      'Holding breath during all stretches',
    ],
    answer: 'Controlled stretching after warm-up',
    explanation: 'Warm muscles respond better to safe flexibility work.',
  },
  {
    prompt: 'What is a key teamwork behaviour in athletics activities?',
    options: [
      'Encouraging peers and following instructions',
      'Distracting others during events',
      'Refusing to take turns',
      'Ignoring safety zones',
    ],
    answer: 'Encouraging peers and following instructions',
    explanation: 'Supportive behaviour strengthens both performance and class culture.',
  },
  {
    prompt: 'How can learners reduce injury risk in PE?',
    options: [
      'Use proper warm-up, technique, and cool-down',
      'Rush into maximum effort immediately',
      'Compete with unsafe equipment',
      'Ignore pain signals',
    ],
    answer: 'Use proper warm-up, technique, and cool-down',
    explanation: 'Preparation and recovery are essential for safe movement.',
  },
  {
    prompt: 'What does endurance mean in athletics?',
    options: [
      'Sustaining effort over a period of time',
      'One short sprint only',
      'Avoiding physical activity',
      'Stopping after every step',
    ],
    answer: 'Sustaining effort over a period of time',
    explanation: 'Endurance supports longer performance with controlled energy use.',
  },
  {
    prompt: 'Which reflection question supports PET improvement?',
    options: [
      'Which skill improved, and what will I practise next?',
      'Who should I blame for all mistakes?',
      'How can I avoid activity next class?',
      'How can I skip safety routines?',
    ],
    answer: 'Which skill improved, and what will I practise next?',
    explanation: 'Constructive reflection guides next-step practice goals.',
  },
  {
    prompt: 'What is a sign of fair participation in games?',
    options: [
      'Following rules and respecting every player',
      'Arguing about every decision',
      'Cheating when losing',
      'Excluding weaker teammates',
    ],
    answer: 'Following rules and respecting every player',
    explanation: 'Fair participation creates safe, inclusive sport experiences.',
  },
];

const PhysicalEducationTask = () => (
  <CapsSubjectTopic
    title="Physical Education Task"
    subtitle="Athletics, relays, indigenous games, flexibility, teamwork, and safe participation"
    learnSteps={learnSteps}
    task="gr8-physical-education-task-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default PhysicalEducationTask;
