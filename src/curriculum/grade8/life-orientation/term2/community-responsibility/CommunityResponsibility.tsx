import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Branches, Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What community responsibility means',
    content: slide(
      <>
        <Rule>A community is people who share places and services. Community responsibility means taking actions that support shared wellbeing, such as following rules and helping keep areas safe.</Rule>
        <Hub centre="Shared places" spokes={['School', 'Clinic', 'Library', 'Streets']} aria="A circle labelled Shared places with four examples around it: school, clinic, library and streets." />
        <Worked
          title="Your school is a community"
          steps={[<>Follow the school rules.</>, <>Keep classrooms and grounds tidy.</>, <>Help a learner who needs it.</>, <>Tell a teacher about anything unsafe.</>]}
        />
        <Mistake>Thinking community responsibility is only the job of adults or the government. Learners are part of the community, so their actions count too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Services and reporting problems',
    content: slide(
      <>
        <Rule>Community services, such as clinics, schools, police and water and electricity supply, support health, safety and basic needs. Report faults through the school or the municipality. In an emergency call the police on 10111 or an ambulance on 10177.</Rule>
        <StepFlow steps={['Notice the problem.', 'Tell a teacher or the principal.', 'Report it through the school or municipal channel.', 'Check that it was fixed.']} aria="Four steps for reporting a community problem in order: notice it, tell a teacher or the principal, report it through the school or municipal channel, check that it was fixed." />
        <Worked
          title="A streetlight near the school is broken"
          steps={[<>Notice: the street is dark when learners walk home.</>, <>Tell your teacher what and where.</>, <>The school or you report it to the municipality.</>, <>Check later that it was repaired.</>]}
        />
        <Mistake>Assuming someone else will report it, or trying to fix an electrical fault yourself. Report it through the right channel.</Mistake>
      </>,
    ),
  },
  {
    title: 'Empathy and volunteering',
    content: slide(
      <>
        <Rule>Empathy means understanding how others feel. You show it by listening and offering practical help. Volunteering is giving your time without pay, for example at a supervised clean-up or reading club.</Rule>
        <Worked
          title="A new learner eats alone"
          steps={[<>Notice how they might feel.</>, <>Greet them and listen.</>, <>Offer practical help: invite them to sit with you.</>, <>Join a supervised group project together.</>]}
        />
        <Mistake>Thinking empathy is only feeling sorry for someone. Empathy shows in what you do. Volunteer in supervised activities, not alone in unsafe places.</Mistake>
      </>,
    ),
  },
  {
    title: 'Shared spaces and belonging',
    content: slide(
      <>
        <Rule>Shared spaces such as toilets, classrooms, sports fields and parks belong to everyone. Use facilities with respect and report damage. Taking part builds belonging and problem-solving skills.</Rule>
        <Branches
          problem="A tap in the school toilets is broken"
          options={[
            { choice: 'Ignore it', outcome: 'Water is wasted and others are affected.' },
            { choice: 'Report it', outcome: 'It is fixed sooner for everyone.' },
          ]}
          aria="A decision tree. A tap in the school toilets is broken. Choice one: ignore it, and water is wasted and others are affected. Choice two: report it, and it is fixed sooner for everyone."
        />
        <Worked
          title="A responsible citizen at school"
          steps={[<>Follow the rules.</>, <>Use the facilities with respect.</>, <>Report damage to a teacher.</>, <>Help keep areas safe.</>]}
        />
        <Mistake>Thinking a shared space is not your problem because it is not yours alone. It belongs to everyone, so everyone helps look after it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What does community responsibility mean?" answer="Taking actions that support shared wellbeing, such as following rules and helping keep areas safe." />
        <Check question="A streetlight near school is broken. What is the best response?" answer="Report it through the school or municipal channel, and check later that it was fixed." />
        <Check question="Name one positive way for learners to volunteer and one way to protect shared spaces." answer="Help at a supervised clean-up or reading club. Use facilities with respect and report damage." />
        <Check question="Why are community services important, and what is a benefit of taking part in the community?" answer="They support health, safety and basic needs. Taking part builds belonging and problem-solving skills." />
      </>,
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
    prompt: 'How can you protect shared spaces?',
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
