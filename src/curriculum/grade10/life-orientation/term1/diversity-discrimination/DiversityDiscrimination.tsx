import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { MatchColumns } from '../../../../../components/diagrams/lo/lo7Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Diversity, discrimination and violations',
    content: slide(
      <>
        <Rule>Diversity means the differences among people. Discrimination is treating a person unfairly because of the group they belong to. A human rights violation happens when a person&apos;s rights are denied or harmed.</Rule>
        <Hub
          centre="Diversity"
          spokes={['Race', 'Religion', 'Culture', 'Language', 'Gender', 'Age']}
          aria="A hub with Diversity in the centre and six spokes: race, religion, culture, language, gender and age. These are some of the ways in which people differ."
        />
        <Worked
          title="A learner is kept out of the school team"
          steps={[
            <>A learner is told that they cannot join the team because they are HIV positive.</>,
            <>They are treated unfairly because of their health status: this is discrimination.</>,
            <>Their rights to equality and to human dignity are violated.</>,
            <>Diversity is not the problem. The unfair treatment is.</>,
          ]}
        />
        <Mistake>Thinking that discrimination only happens because of race. People are also discriminated against because of religion, culture, language, gender, age, where they live, where they come from or their health status.</Mistake>
      </>,
    ),
  },
  {
    title: 'Contexts and types of violations',
    content: slide(
      <>
        <Rule>Discrimination and rights violations show up in many contexts: race, religion, culture, language, gender, age, rural or urban living, xenophobia, human trafficking and HIV and AIDS status.</Rule>
        <MatchColumns
          leftTitle="Term"
          rightTitle="What it means"
          pairs={[
            { left: 'Xenophobia', right: 'Fear or hatred of foreigners' },
            { left: 'Human trafficking', right: 'Moving people by force or lies to exploit them' },
            { left: 'HIV stigma', right: 'Unfair judgement of people living with HIV' },
          ]}
          aria="Three terms matched with their meanings. Xenophobia is fear or hatred of foreigners. Human trafficking is moving people by force or lies to exploit them. HIV stigma is unfair judgement of people living with HIV."
        />
        <Worked
          title="Name the violation"
          steps={[
            <>A shop owner refuses to serve a customer because he comes from another country.</>,
            <>The reason is the customer&apos;s nationality.</>,
            <>This is xenophobia, a form of discrimination.</>,
            <>It violates the customer&apos;s right to human dignity.</>,
          ]}
        />
        <Mistake>Thinking that xenophobia and human trafficking are the same thing. Xenophobia is hatred or fear of foreigners. Human trafficking is exploiting people who have been moved by force, fraud or deception.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bias, prejudice and discrimination',
    content: slide(
      <>
        <Rule>Bias is leaning for or against someone without good reason. Prejudice is an opinion formed without knowing the facts. Discrimination is acting on that prejudice. They can lead to oppression and to violations of human rights.</Rule>
        <StepFlow
          steps={['Stereotype: a fixed idea.', 'Prejudice: a pre-judged opinion.', 'Discrimination: unfair action.', 'Rights violated.']}
          aria="Four steps. A stereotype is a fixed idea. It leads to prejudice, a pre-judged opinion. Prejudice leads to discrimination, an unfair action. Discrimination can lead to the violation of rights."
        />
        <Worked
          title="From prejudice to discrimination"
          steps={[
            <>Prejudice: &quot;People from that village are lazy.&quot; (no facts)</>,
            <>Discrimination: a manager refuses to hire a person from that village.</>,
            <>Impact on the person: lost opportunity and hurt dignity.</>,
            <>Impact on society: it divides people, causes conflict between groups and wastes talent.</>,
          ]}
        />
        <Mistake>Thinking prejudice and discrimination are the same. Prejudice is an attitude in the mind. Discrimination is the unfair action that follows.</Mistake>
      </>,
    ),
  },
  {
    title: 'Challenging prejudice and discrimination',
    content: slide(
      <>
        <Rule>Individuals and organisations challenge prejudice and discrimination. Organisations include the South African Human Rights Commission and the Commission for Gender Equality. You can speak up, refuse to join in, report violations and learn about other people.</Rule>
        <Worked
          title="A joke about someone&apos;s language"
          steps={[
            <>A learner hears classmates mock another learner&apos;s home language.</>,
            <>She says calmly, &quot;That is not funny. It hurts.&quot;</>,
            <>She tells a teacher and invites the learner to join her group.</>,
            <>Result: the group learns that this behaviour is not accepted.</>,
          ]}
        />
        <Mistake>Believing that staying silent is neutral. When you say nothing, the person who is being treated unfairly stays alone, and the behaviour continues.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between diversity and discrimination?</>,
          <>A customer is refused service because he comes from another country. Name this violation.</>,
          <>What is the difference between prejudice and discrimination?</>,
          <>Name two ways in which you can challenge prejudice at school.</>,
        ]}
        answers={[
          <>Diversity means differences among people. Discrimination is treating someone unfairly because of a difference.</>,
          <>Xenophobia, a form of discrimination that violates the person&apos;s dignity.</>,
          <>Prejudice is an opinion formed without the facts. Discrimination is the unfair action that follows from it.</>,
          <>For example say that the behaviour is not acceptable, report it to a teacher, include the person who is left out, or learn about their culture.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does diversity mean?',
    options: ['The belief that one group of people is better than the others', 'The differences among people, such as culture and language', 'The rules that a school makes for the learners in its classes', 'The fear that people have of meeting a stranger from far away'],
    answer: 'The differences among people, such as culture and language',
    explanation: 'Diversity is the variety of differences among people, for example race, culture, religion, language, gender and age.',
  },
  {
    prompt: 'What is discrimination?',
    options: ['Treating a person unfairly because of the group they belong to', 'Having a different opinion from another person in a debate', 'Choosing your friends according to the sports that they play', 'Treating all people in exactly the same way, whatever they need'],
    answer: 'Treating a person unfairly because of the group they belong to',
    explanation: 'Discrimination is unfair treatment based on a person\'s group, such as race, gender, religion or health status.',
  },
  {
    prompt: 'What is a violation of human rights?',
    options: ['A person chooses not to use a right that they have been given', 'A person is asked to follow a rule in a classroom or school', 'A person disagrees with a decision that a teacher made', 'A person\'s rights are denied or harmed by someone\'s actions'],
    answer: 'A person\'s rights are denied or harmed by someone\'s actions',
    explanation: 'A violation happens when a right, such as equality or dignity, is denied or harmed.',
  },
  {
    prompt: 'A learner is kept out of the school team because they are HIV positive. This is:',
    options: ['A fair rule, because it protects the health of the other players', 'A normal choice that the coach is allowed to make for the whole team', 'Discrimination that violates their dignity and equality', 'A fair way to give other learners a better chance to play'],
    answer: 'Discrimination that violates their dignity and equality',
    explanation: 'Treating someone unfairly because of their health status is discrimination, and it violates their rights.',
  },
  {
    prompt: 'Which of these is a context in which discrimination can happen?',
    options: ['The height of a building that a person lives in', 'Race, religion, culture, language, gender or age', 'The brand of shoes that a person is wearing', 'The number of pets that a family keeps in the house'],
    answer: 'Race, religion, culture, language, gender or age',
    explanation: 'People are discriminated against because of race, religion, culture, language, gender, age, where they live or their health status.',
  },
  {
    prompt: 'What is xenophobia?',
    options: ['The fear or hatred of foreigners', 'The fear of heights and of falling from a great height', 'The belief that all people should speak the same language', 'The love of travelling to other countries for a holiday'],
    answer: 'The fear or hatred of foreigners',
    explanation: 'Xenophobia is fear or hatred of people from other countries.',
  },
  {
    prompt: 'A shop owner refuses to serve a customer who comes from another country. This is an example of:',
    options: ['Human trafficking', 'Peer pressure', 'Self-motivation', 'Xenophobia'],
    answer: 'Xenophobia',
    explanation: 'Refusing to serve someone because of their nationality is xenophobia, a form of discrimination.',
  },
  {
    prompt: 'What is human trafficking?',
    options: ['Travelling from one country to another country to find work', 'Taking a bus or a taxi from a town to a big city', 'Moving people by force, fraud or deception to exploit them', 'Helping a person to get a visa for a visit to another country'],
    answer: 'Moving people by force, fraud or deception to exploit them',
    explanation: 'Human trafficking means recruiting or moving people by force or deception so that they can be exploited. It is a serious human rights violation.',
  },
  {
    prompt: 'What is prejudice?',
    options: ['A fair decision that is made after listening to both sides', 'An opinion formed about a person without knowing the facts', 'A law that protects the rights of a group of people', 'A rule that every person in the school has to follow'],
    answer: 'An opinion formed about a person without knowing the facts',
    explanation: 'Prejudice means pre-judging a person, based on a group, without knowing the facts.',
  },
  {
    prompt: 'What is the difference between prejudice and discrimination?',
    options: ['Prejudice is an attitude and discrimination is an unfair action', 'Prejudice is a law and discrimination is a punishment', 'Prejudice is a kind of help and discrimination is a kind of respect', 'Prejudice and discrimination are two words for the same thing'],
    answer: 'Prejudice is an attitude and discrimination is an unfair action',
    explanation: 'Prejudice is an opinion in the mind. Discrimination is the unfair action that follows from it.',
  },
  {
    prompt: 'Which of these shows the usual order from a stereotype to a rights violation?',
    options: ['Rights violated, discrimination, prejudice, stereotype', 'Discrimination, stereotype, rights violated, prejudice', 'Prejudice, rights violated, stereotype, discrimination', 'Stereotype, prejudice, discrimination, rights violated'],
    answer: 'Stereotype, prejudice, discrimination, rights violated',
    explanation: 'A fixed idea leads to a pre-judged opinion, then to unfair action, and this can violate a person\'s rights.',
  },
  {
    prompt: 'What is one effect of discrimination on a society?',
    options: ['It makes people trust each other and work together well', 'It gives people equal chances in every part of life', 'It divides people and causes conflict between groups', 'It protects the dignity of the people who are in the minority'],
    answer: 'It divides people and causes conflict between groups',
    explanation: 'Discrimination divides people, causes conflict and stops people from using their talents.',
  },
  {
    prompt: 'Which of these is an organisation that works to protect human rights in South Africa?',
    options: ['The South African Revenue Service', 'The South African Human Rights Commission', 'The South African Broadcasting Corporation', 'The South African Football Association'],
    answer: 'The South African Human Rights Commission',
    explanation: 'The South African Human Rights Commission promotes, protects and monitors human rights.',
  },
  {
    prompt: 'A learner hears classmates mock another learner\'s home language. Which response helps to challenge prejudice?',
    options: ['Say that it is not acceptable and tell a teacher', 'Laugh along with the group so that you are not left out', 'Say nothing because it is not your business', 'Copy the joke so that people will think that you are friendly'],
    answer: 'Say that it is not acceptable and tell a teacher',
    explanation: 'Speaking up and reporting the behaviour helps to challenge prejudice. Staying silent allows it to continue.',
  },
];

const DiversityDiscrimination = () => (
  <CapsSubjectTopic
    title="Diversity, Discrimination and Human Rights Violations"
    subtitle="Understanding differences, prejudice and how to challenge unfair treatment"
    learnSteps={learnSteps}
    task="gr10-diversity-discrimination-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default DiversityDiscrimination;
