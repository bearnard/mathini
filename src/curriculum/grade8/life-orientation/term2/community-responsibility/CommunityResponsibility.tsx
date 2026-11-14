import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Contribute to community wellbeing',
    image: {
      src: '/curriculum/grade8/lo/term2/community-responsibility/diagram.webp',
      alt: 'grade 8 learners volunteering and learning about community support services',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Community responsibility includes empathy, volunteering, caring for shared spaces, and knowing where to
          report local problems.
        </p>
      </div>
    ),
  },
  {
    title: 'Use services and reporting channels',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong communities work when people use support services properly and young people take part in positive
          actions.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does community responsibility mean?',
    options: [
      'Taking actions that support shared wellbeing',
      'Focusing only on personal benefit',
      'Ignoring public spaces',
      'Avoiding all civic duties',
    ],
    answer: 'Taking actions that support shared wellbeing',
    explanation: 'Responsible citizenship considers the needs of others.',
  },
  {
    prompt: 'Which action shows empathy in community life?',
    options: ['Listening to others and offering practical help', 'Mocking people who are in difficulty', 'Spreading harmful rumours about them', 'Refusing to cooperate with the group'],
    answer: 'Listening to others and offering practical help',
    explanation: 'Empathy helps people feel seen and supported.',
  },
  {
    prompt: 'A streetlight near school is broken. What is the best response?',
    options: ['Report it through the school or municipal channel', 'Ignore it for several months', 'Damage more of the public infrastructure', 'Post jokes about it and do nothing more'],
    answer: 'Report it through the school or municipal channel',
    explanation: 'Reporting channels help fix safety and service issues.',
  },
  {
    prompt: 'Why are community services important?',
    options: [
      'They support health, safety, and basic needs',
      'They are only for adults in emergencies',
      'They replace family and school roles completely',
      'They are unrelated to wellbeing',
    ],
    answer: 'They support health, safety, and basic needs',
    explanation: 'Services such as clinics and social support improve quality of life.',
  },
  {
    prompt: 'Which option is a positive volunteering activity for learners?',
    options: ['Helping at a supervised clean-up or reading club', 'Skipping classes to wander around town', 'Writing graffiti on the public walls', 'Taking supplies that were meant for others'],
    answer: 'Helping at a supervised clean-up or reading club',
    explanation: 'Volunteering builds responsibility and social connection.',
  },
  {
    prompt: 'How can learners protect shared spaces?',
    options: ['Use facilities with respect and report damage', 'Treat the equipment in a careless way', 'Leave litter lying in the classrooms', 'Ignore items that are broken or unsafe'],
    answer: 'Use facilities with respect and report damage',
    explanation: 'Shared spaces stay functional when everyone takes ownership.',
  },
  {
    prompt: 'What is a key benefit of community participation?',
    options: ['It builds belonging and problem-solving skills', 'It always brings a reward in money', 'It removes the need for any teamwork', 'It guarantees that there will be no disagreements'],
    answer: 'It builds belonging and problem-solving skills',
    explanation: 'Participation strengthens social bonds and active citizenship.',
  },
  {
    prompt: 'Which behaviour best reflects responsible citizenship at school?',
    options: [
      'Following rules and helping keep areas safe',
      'Ignoring safety instructions',
      'Encouraging vandalism',
      'Refusing all group responsibilities',
    ],
    answer: 'Following rules and helping keep areas safe',
    explanation: 'Responsible choices support a positive learning environment.',
  },
];

const CommunityResponsibility = () => (
  <CapsSubjectTopic
    title="Community Responsibility"
    subtitle="Services, empathy, volunteering, reporting channels, and shared spaces"
    learnSteps={learnSteps}
    task="gr8-community-responsibility-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default CommunityResponsibility;
