import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, PairLinks, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What is a human right?',
    content: slide(
      <>
        <Rule>A human right is a basic freedom and protection that every person should have. In South Africa, the Bill of Rights in the 1996 Constitution protects rights such as equality (section 9), dignity (section 10) and basic education (section 29).</Rule>
        <Hub centre="Human rights" spokes={['Equality', 'Dignity', 'Education', 'Safety']} aria="A circle labelled Human rights with four rights around it: equality, dignity, education and safety." />
        <Worked
          title="Is it a right?"
          steps={[<>Ask: does every person get it, whoever they are?</>, <>Basic education: yes, so it is a right.</>, <>A prize for the top learners: no, it is a reward.</>, <>A uniform rule: no, it is a school rule.</>]}
        />
        <Mistake>Thinking rights are rewards, or that they belong to only one group. Human rights apply to all people.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rights come with responsibilities',
    content: slide(
      <>
        <Rule>Your actions affect other people's rights, so every right comes with a responsibility. The Constitution is the supreme law, and everyone must respect it.</Rule>
        <PairLinks pairs={[{ right: 'Equality', duty: 'Treat classmates fairly' }, { right: 'Dignity', duty: 'Use respectful words' }, { right: 'Safety', duty: 'Do not bully or threaten' }]} aria="Three rights matched with a responsibility: equality with treating classmates fairly, dignity with using respectful words, safety with not bullying or threatening." />
        <Worked
          title="A learner posts a joke about a classmate's name"
          steps={[<>Right affected: the classmate's dignity.</>, <>Responsibility: use respectful words.</>, <>Fix: delete it and apologise.</>]}
        />
        <Mistake>Believing that rights remove all duties, so you can do whatever you like. Your freedom ends where it harms another person's rights.</Mistake>
      </>,
    ),
  },
  {
    title: 'Equality and dignity at school',
    content: slide(
      <>
        <Rule>Equality means everyone deserves fair treatment and opportunity. Dignity means recognising the worth of every person. Discrimination is unfair treatment because of who someone is, such as their race, gender, religion, language or disability.</Rule>
        <Worked
          title="A learner is left out of a team because of her language"
          steps={[<>Rights affected: equality and dignity.</>, <>This is discrimination, not a joke.</>, <>Respond: support her and report it to a teacher.</>, <>Fair action: include her in the team.</>]}
        />
        <Mistake>Joining in to fit with others, staying silent, or treating discrimination as a joke. Each one lets the harm continue.</Mistake>
      </>,
    ),
  },
  {
    title: 'Protecting rights every day',
    content: slide(
      <>
        <Rule>Democracy means everyone has a voice. Learners protect rights daily by listening to different views, using respectful language and challenging unfair behaviour.</Rule>
        <StepFlow steps={['Notice unfair behaviour.', 'Support the person affected.', 'Report it to a teacher.', 'Use respectful words.']} aria="Four steps for protecting rights in order: notice unfair behaviour, support the person affected, report it to a teacher, use respectful words." />
        <Worked
          title="The class decides on a trip"
          steps={[<>Everyone shares an idea.</>, <>Listen to each one with respect.</>, <>Choose by agreement or a vote.</>, <>Accept the decision and keep respecting each other.</>]}
        />
        <Mistake>Shouting down others, refusing to accept the group's decision, or using threats to win. Democracy depends on respectful dialogue.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is a human right? Give one example from the South African Bill of Rights." answer="A basic freedom and protection every person should have. For example, equality, dignity or basic education." />
        <Check question="Why must rights be linked to responsibilities?" answer="Because your actions affect the rights of others." />
        <Check question="A learner sees discrimination at school. What is the best response?" answer="Report it and support the person affected. Do not join in or stay silent." />
        <Check question="Name one behaviour that shows democratic participation." answer="Listening to different views with respect." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a human right?',
    options: ['A basic freedom and protection that every person should have', 'A reward that only the top learners receive', 'A rule about the school uniform and nothing else', 'A privilege that is meant for one group only'],
    answer: 'A basic freedom and protection that every person should have',
    explanation: 'Human rights apply to all people and protect dignity.',
  },
  {
    prompt: 'Why must rights be linked to responsibilities?',
    options: [
      'Because your actions affect the rights of others',
      'Because rights remove all duties',
      'Because only adults have responsibilities',
      'Because rules do not matter in democracy',
    ],
    answer: 'Because your actions affect the rights of others',
    explanation: 'Responsible behaviour helps protect everyone in a community.',
  },
  {
    prompt: 'Which action supports equality at school?',
    options: [
      'Treating classmates fairly regardless of background',
      'Excluding learners for being different',
      'Spreading stereotypes',
      'Allowing unfair treatment',
    ],
    answer: 'Treating classmates fairly regardless of background',
    explanation: 'Equality means everyone deserves fair treatment and opportunity.',
  },
  {
    prompt: 'What does dignity mean in this context?',
    options: [
      'Recognising the worth of every person',
      'Winning every argument',
      'Having more rights than others',
      'Ignoring other viewpoints',
    ],
    answer: 'Recognising the worth of every person',
    explanation: 'Dignity requires respect in words and actions.',
  },
  {
    prompt: 'A learner witnesses discrimination. What is the best response?',
    options: [
      'Report it and support the person affected',
      'Join in to fit with others',
      'Stay silent and spread rumours',
      'Treat it as a joke',
    ],
    answer: 'Report it and support the person affected',
    explanation: 'Speaking up helps protect rights and safety.',
  },
  {
    prompt: 'Which behaviour reflects democratic participation?',
    options: ['Listening to different views with respect', 'Shouting down everyone else in the group', 'Refusing to accept any of the group decisions', 'Using threats in order to win the debate'],
    answer: 'Listening to different views with respect',
    explanation: 'Democracy depends on respectful dialogue and inclusion.',
  },
  {
    prompt: 'What is the role of constitutional rights in South Africa?',
    options: ['They give a framework for protecting people and justice', 'They apply in sport and nowhere else', 'They are optional suggestions for citizens', 'They protect one language group only'],
    answer: 'They give a framework for protecting people and justice',
    explanation: 'Constitutional rights guide lawful and fair treatment.',
  },
  {
    prompt: 'How can you help protect rights every day?',
    options: ['Use respectful language and challenge unfair behaviour', 'Ignore the bullying and the exclusion', 'Mock classmates in front of others', 'Break the rules whenever it is convenient'],
    answer: 'Use respectful language and challenge unfair behaviour',
    explanation: 'Everyday actions can strengthen or weaken rights culture.',
  },
];

const DemocracyAndHumanRights = () => (
  <CapsSubjectTopic
    title="Democracy and Human Rights"
    subtitle="Rights, responsibilities, equality, dignity, respect, and democratic participation"
    learnSteps={learnSteps}
    task="gr8-democracy-and-human-rights-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default DemocracyAndHumanRights;
