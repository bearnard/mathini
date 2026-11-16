import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { weeklyMinutes } from '../../../../../components/diagrams/lo/gr10Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// The recreation time comes from gr10Helpers (tested in gr10Helpers.test.ts).
const fun = { sessions: 3, minutes: 45, week: weeklyMinutes(3, 45) };

export const learnSteps: LearnStep[] = [
  {
    title: 'Risk behaviour and its consequences',
    content: slide(
      <>
        <Rule>Some behaviour can lead to sexual intercourse that you did not plan, to teenage pregnancy, sexual abuse or rape: giving in to peer pressure, using alcohol or drugs, being alone in unsafe places, chatting online with strangers, or accepting gifts or money from an older person. The consequences can be pregnancy, STIs including HIV, injury and lasting emotional harm.</Rule>
        <StepFlow
          steps={['Alcohol at a party.', 'Weaker judgement.', 'An unsafe situation.', 'Possible harm.']}
          aria="Four steps of a risk chain: alcohol at a party leads to weaker judgement, then to an unsafe situation, and then to possible harm."
        />
        <Worked
          title="Planning ahead"
          steps={[
            <>Karabo is invited to a party with alcohol and no adults.</>,
            <>She knows that alcohol weakens judgement, and that the situation could become unsafe.</>,
            <>She decides not to go, and she suggests a film at a friend&apos;s house instead.</>,
            <>Result: she avoids the risk and keeps her friends.</>,
          ]}
        />
        <Mistake>Thinking that abuse is the fault of the person who was hurt. The person who abuses someone is always responsible.</Mistake>
      </>,
    ),
  },
  {
    title: 'Values that protect you',
    content: slide(
      <>
        <Rule>Values guide responsible decisions: respect for yourself and others, abstinence, self-control, the right to privacy, the right to protect yourself, the right to say no, and taking responsibility for your own actions. Consent means a free and clear yes. Pressure, force, threats, alcohol or drugs mean there is no consent.</Rule>
        <Hub
          centre="My values"
          spokes={['Respect', 'Abstinence', 'Self-control', 'Privacy', 'Right to say no', 'Responsibility']}
          aria="A hub with My values in the centre and six spokes: respect for self and others, abstinence, self-control, privacy, the right to say no and taking responsibility for your own actions."
        />
        <Worked
          title="The right to privacy and to say no"
          steps={[
            <>Someone asks Aisha for a private picture of herself.</>,
            <>She has the right to privacy and the right to protect herself.</>,
            <>She says no, and she does not have to give a reason.</>,
            <>A person who respects her accepts her answer.</>,
          ]}
        />
        <Mistake>Believing that saying no means that you do not care about the other person. A caring person respects your no.</Mistake>
      </>,
    ),
  },
  {
    title: 'Skills for responsible decisions',
    content: slide(
      <>
        <Rule>Skills help you act on your values: self-awareness, critical thinking, decision-making, problem-solving, assertiveness, negotiation, communication, refusal, goal-setting and finding information. To be assertive is to say what you want or do not want clearly and respectfully.</Rule>
        <StepFlow
          steps={['Say no clearly.', 'Give a reason.', 'Suggest another plan.', 'Leave if needed.']}
          aria="Four refusal skills in order: say no clearly, give a reason, suggest another plan, and leave if you need to."
        />
        <Worked
          title="Refusing pressure"
          steps={[
            <>A friend says, &quot;Everyone is going, don&apos;t be boring.&quot;</>,
            <>Thabo says no calmly: &quot;I am not going.&quot;</>,
            <>His reason: he wants to protect his goal of passing Grade 10 with good marks.</>,
            <>He suggests another plan and goes home if the pressure continues.</>,
          ]}
        />
        <Mistake>Thinking that assertive means rude or aggressive. Assertive people are firm and respectful at the same time.</Mistake>
      </>,
    ),
  },
  {
    title: 'The law and where to find help',
    content: slide(
      <>
        <Rule>The age of consent for sex in South Africa is 16. Sex without consent is rape, at any age. Under the Children&apos;s Act a child of 12 or older can ask a clinic for an HIV test or contraceptives. If you need help, talk to a trusted adult, a school counsellor, a clinic nurse, a social worker or the police, or phone Childline on 116.</Rule>
        <Worked
          title="A learner needs help"
          steps={[
            <>A learner is touched in a way that they do not want, by a person they know.</>,
            <>It is not the learner&apos;s fault, and they can tell a trusted adult. If they are not believed, they tell another one.</>,
            <>They can report it to the police and phone Childline on 116.</>,
            <>After rape the learner should go to a clinic or hospital as soon as possible. Medicine that helps to prevent HIV works best within 72 hours.</>,
          ]}
        />
        <Mistake>Keeping abuse secret to protect the family or because of threats. Telling someone you trust is the first step to being safe.</Mistake>
      </>,
    ),
  },
  {
    title: 'Recreation and emotional health',
    content: slide(
      <>
        <Rule>Recreation, such as sport, music, art, hobbies and time with friends, supports your emotional health. It lowers stress, builds friendships and self-esteem, and gives you healthy ways to enjoy yourself, so you are in a better position to make responsible decisions.</Rule>
        <Worked
          title="A week with recreation"
          steps={[
            <>Aisha plans {fun.sessions} recreation sessions a week.</>,
            <>Each session is {fun.minutes} minutes: {fun.sessions} × {fun.minutes} = {fun.week} minutes.</>,
            <>She chooses a walk, a dance class and time with friends.</>,
            <>She feels less stressed and has more energy for her schoolwork.</>,
          ]}
        />
        <Mistake>Believing that recreation wastes study time. Rest and enjoyable activities help you to concentrate and to cope with stress.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two kinds of behaviour that can lead to harm, and one consequence.</>,
          <>What is consent? Say when there is no consent.</>,
          <>Name the four refusal skills you can use when you are pressured.</>,
          <>Name two places where you can find help, and the age of consent in South Africa.</>,
        ]}
        answers={[
          <>For example using alcohol or drugs, or being alone in an unsafe place. Consequences include pregnancy, STIs including HIV, abuse and emotional harm.</>,
          <>A free and clear yes. There is no consent when there is pressure, force, threats, or alcohol or drugs.</>,
          <>Say no clearly, give a reason, suggest another plan and leave if needed.</>,
          <>For example a trusted adult, a school counsellor, a clinic nurse or Childline on 116. The age of consent is 16.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which behaviour can lead to an unsafe situation for a teenager?',
    options: ['Studying with a friend at the school library', 'Using alcohol at a party without any adults', 'Going for a walk with the family on Sunday', 'Playing a team sport after school each week'],
    answer: 'Using alcohol at a party without any adults',
    explanation: 'Alcohol weakens judgement, and a party without adults can become unsafe.',
  },
  {
    prompt: 'What effect does alcohol have on a person\'s decisions?',
    options: ['It weakens judgement', 'It makes thinking clearer', 'It makes a person safer at a party', 'It improves self-control'],
    answer: 'It weakens judgement',
    explanation: 'Alcohol and drugs weaken judgement, so people may do things that they would not otherwise do.',
  },
  {
    prompt: 'Which of these is a consequence of unprotected sex?',
    options: ['A higher mark in the next school test at school', 'A bigger circle of friends at school this year', 'A stronger heart and better fitness for sport', 'Teenage pregnancy or an STI such as HIV'],
    answer: 'Teenage pregnancy or an STI such as HIV',
    explanation: 'Unprotected sex can lead to pregnancy and to sexually transmitted infections, including HIV.',
  },
  {
    prompt: 'A learner was abused by someone. Whose fault is it?',
    options: ['The learner who was in the wrong place at the time', 'The learner who did not fight back at the time', 'The person who abused the learner', 'Both people who were together at the time'],
    answer: 'The person who abused the learner',
    explanation: 'The person who abuses another person is responsible. It is never the fault of the learner who was hurt.',
  },
  {
    prompt: 'What does consent mean?',
    options: ['A silence that is not answered', 'A free and clear yes', 'A yes that was given after threats', 'A yes that was given under pressure'],
    answer: 'A free and clear yes',
    explanation: 'Consent must be given freely and clearly. Pressure, threats, force, alcohol or drugs mean that there is no consent.',
  },
  {
    prompt: 'Which of these means that there is NO consent?',
    options: ['The person says yes because of a threat', 'The person says a clear yes and is free to say no', 'The person says yes and has not been pressured', 'The person says that she is happy to go ahead'],
    answer: 'The person says yes because of a threat',
    explanation: 'A yes that is given because of a threat, pressure, force, alcohol or drugs is not consent.',
  },
  {
    prompt: 'Which of these is one of the values that protect a young person?',
    options: ['Peer pressure', 'Revenge', 'Secrecy', 'Self-control'],
    answer: 'Self-control',
    explanation: 'Respect, abstinence, self-control, privacy, the right to say no and responsibility are protective values.',
  },
  {
    prompt: 'Someone asks Aisha for a private picture of herself. Which right does she use when she says no?',
    options: ['The right to be paid for the picture', 'The right to ask her friends for an opinion', 'The right to privacy and to protect herself', 'The right to leave school without telling anyone'],
    answer: 'The right to privacy and to protect herself',
    explanation: 'She has the right to privacy and to protect herself, and she does not have to give a reason.',
  },
  {
    prompt: 'What does it mean to be assertive?',
    options: ['To get what you want by being rude to other people', 'To say what you want clearly and with respect', 'To agree with the group whatever you really think', 'To stay quiet so that nobody is upset by your answer'],
    answer: 'To say what you want clearly and with respect',
    explanation: 'Assertive people are firm and respectful. They are not rude or aggressive, and they do not stay silent.',
  },
  {
    prompt: 'Which is the correct order of the refusal skills?',
    options: ['Say no, give a reason, suggest a plan, leave', 'Give a reason, leave, say no, suggest another plan', 'Leave, say no, suggest another plan, give a reason', 'Suggest another plan, leave, give a reason, say no'],
    answer: 'Say no, give a reason, suggest a plan, leave',
    explanation: 'Say no clearly first, then give a reason, suggest something else and leave if the pressure continues.',
  },
  {
    prompt: 'A friend says, "Everyone is going, don\'t be boring." What is the best response?',
    options: ['Go along so that the friend is not upset', 'Argue and shout at the friend in public', 'Say nothing and follow the group', 'Say no calmly and suggest another plan'],
    answer: 'Say no calmly and suggest another plan',
    explanation: 'A calm, clear no with another plan protects your goals and keeps the friendship if the friend is willing.',
  },
  {
    prompt: 'What is the age of consent for sex in South Africa?',
    options: ['12', '14', '16', '18'],
    answer: '16',
    explanation: 'The age of consent is 16. Sex without consent is rape at any age.',
  },
  {
    prompt: 'Which number can a child phone to get help from Childline?',
    options: ['10111', '116', '112', '999'],
    answer: '116',
    explanation: 'Childline can be reached on 116.',
  },
  {
    prompt: 'How does recreation help your emotional health?',
    options: ['It lowers stress and builds self-esteem', 'It wastes the time that you need to study', 'It makes you tired so that you cannot think', 'It stops you from seeing your friends'],
    answer: 'It lowers stress and builds self-esteem',
    explanation: 'Sport, music, art, hobbies and time with friends lower stress and support emotional health.',
  },
];

const ResponsibleDecisions = () => (
  <CapsSubjectTopic
    title="Responsible Decisions about Sexuality and Lifestyle"
    subtitle="Risk behaviour, protective values, refusal skills, the law and where to find help"
    learnSteps={learnSteps}
    task="gr10-responsible-decisions-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default ResponsibleDecisions;
