import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, PairLinks, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Diversity: different people, one school',
    content: slide(
      <>
        <Rule>Diversity means people with different backgrounds learning and living together. Diversity recognises and values differences such as language, culture, religion and ability.</Rule>
        <Hub centre="Our school" spokes={['Languages', 'Cultures', 'Religions', 'Abilities']} aria="A circle labelled Our school with four kinds of difference around it: languages, cultures, religions and abilities." />
        <Worked
          title="A new learner speaks isiXhosa and most of the class speaks Sesotho"
          steps={[<>Greet the new learner and ask their name.</>, <>Invite them to join your group.</>, <>Ask them to teach the class a word.</>]}
        />
        <Mistake>Thinking diversity means everyone must be the same, or that differences are a problem. Different backgrounds are valued, not removed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Human rights and responsibilities',
    content: slide(
      <>
        <Rule>The Bill of Rights in the South African Constitution protects everyone's equality (section 9), dignity (section 10) and basic education (section 29). Every right comes with a responsibility.</Rule>
        <PairLinks pairs={[{ right: 'Education', duty: 'Attend class and respect learning time' }, { right: 'Dignity', duty: 'Treat others with dignity' }, { right: 'Equality', duty: 'Treat all learners fairly' }]} aria="Three rights matched with a responsibility: education with attending class and respecting learning time, dignity with treating others with dignity, equality with treating all learners fairly." />
        <Worked
          title="The right to education"
          steps={[<>The right: you may learn at school.</>, <>The responsibility: arrive on time and attend class.</>, <>Also respect learning time so others can learn too.</>]}
        />
        <Mistake>Thinking that having a right means you can do whatever you want. Your rights go together with responsibilities, and you must respect other people's rights.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stereotypes and inclusion',
    content: slide(
      <>
        <Rule>A stereotype is an unfair assumption about a group of people. You can challenge one respectfully by questioning the assumption and including everyone in opportunities.</Rule>
        <Worked
          title="Someone says: “Girls cannot play soccer”"
          steps={[<>Spot the assumption: all girls are the same.</>, <>Ask: is that true for every person?</>, <>Give an example calmly, such as a girl you know who plays well.</>, <>Invite everyone to join the game.</>]}
        />
        <Mistake>Calling a stereotype “just a joke”, or mocking the person who said it. Challenge the idea, listen to other viewpoints in a debate, and keep everyone included.</Mistake>
      </>,
    ),
  },
  {
    title: 'Careers and social change',
    content: slide(
      <>
        <Rule>Career awareness means linking your interests and strengths to possible future work. Positive social change makes society fairer, such as equal sports opportunities for all learners.</Rule>
        <StepFlow steps={['Know your interests.', 'Know your strengths.', 'Find jobs that fit both.', 'Find out more about them.']} aria="Four steps for career awareness in order: know your interests, know your strengths, find jobs that fit both, find out more about them." />
        <Worked
          title="Sam loves animals and is good at science and caring"
          steps={[<>Interest: animals.</>, <>Strengths: science and caring.</>, <>Jobs that could fit: vet or animal nurse.</>, <>Next: find out what they study and do.</>]}
        />
        <Mistake>Choosing a job only because a friend chose it. Start with your own interests and strengths.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What does diversity mean in a school community?" answer="People with different backgrounds learning together. Diversity recognises and values differences." />
        <Check question="Name the right to education and one responsibility that goes with it." answer="Everyone has the right to a basic education (section 29). The responsibility is to attend class and respect learning time." />
        <Check question="What is a stereotype, and how can you challenge one respectfully?" answer="An unfair assumption about a group of people. Question the assumption and include everyone in opportunities." />
        <Check question="How does career awareness begin?" answer="By linking your interests and strengths to possible future work." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does diversity mean in a school community?',
    options: [
      'People with different backgrounds learning together',
      'Everyone must be exactly the same',
      'Only one opinion is allowed',
      'Ignoring cultural differences completely',
    ],
    answer: 'People with different backgrounds learning together',
    explanation: 'Diversity recognises and values differences among people.',
  },
  {
    prompt: 'Which action supports human rights?',
    options: ['Treating all learners with dignity and fairness', 'Excluding others from class activities', 'Using stereotypes to judge classmates', 'Spreading hate speech online'],
    answer: 'Treating all learners with dignity and fairness',
    explanation: 'Human rights protect equality, dignity, and participation.',
  },
  {
    prompt: 'What is a stereotype?',
    options: [
      'An unfair assumption about a group of people',
      'A detailed scientific experiment',
      'A personal goal planner',
      'A method for stretching muscles',
    ],
    answer: 'An unfair assumption about a group of people',
    explanation: 'Stereotypes ignore individual differences and can cause harm.',
  },
  {
    prompt: 'How can learners challenge gender stereotypes respectfully?',
    options: ['Question assumptions and include everyone in opportunities', 'Repeat biased jokes in order to fit in', 'Ban classmates from taking part in activities', 'Ignore the unfair comments that are made'],
    answer: 'Question assumptions and include everyone in opportunities',
    explanation: 'Respectful challenge promotes fairness and inclusion.',
  },
  {
    prompt: 'Which idea best describes career awareness?',
    options: [
      'Linking your interests and strengths to possible future work',
      'Choosing a career only because friends chose it',
      'Deciding your future in one day with no research',
      'Ignoring your skills and values completely',
    ],
    answer: 'Linking your interests and strengths to possible future work',
    explanation: 'Career awareness grows from self-knowledge and exploration.',
  },
  {
    prompt: 'Which example shows positive social change?',
    options: [
      'A community creates equal sports opportunities for all learners',
      'A school removes access for learners with disabilities',
      'A club excludes people by gender',
      'A class accepts bullying as normal',
    ],
    answer: 'A community creates equal sports opportunities for all learners',
    explanation: 'Social change should expand participation and fairness.',
  },
  {
    prompt: 'Which behaviour supports inclusion in class debates?',
    options: [
      'Listening respectfully to different viewpoints',
      'Interrupting others constantly',
      'Mocking accents and identities',
      'Allowing only one learner to speak',
    ],
    answer: 'Listening respectfully to different viewpoints',
    explanation: 'Inclusion requires respectful listening and equal participation.',
  },
  {
    prompt: 'What responsibility is linked to the right to education?',
    options: [
      'Attending class and respecting learning time',
      'Skipping school whenever it feels difficult',
      'Preventing others from learning',
      'Ignoring all school rules',
    ],
    answer: 'Attending class and respecting learning time',
    explanation: 'Rights and responsibilities work together in a healthy learning environment.',
  },
];

const PersonalSocialWellbeingT3 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Diversity, human rights, stereotypes, and career awareness"
    learnSteps={learnSteps}
    task="gr7-personal-social-wellbeing-t3"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PersonalSocialWellbeingT3;
