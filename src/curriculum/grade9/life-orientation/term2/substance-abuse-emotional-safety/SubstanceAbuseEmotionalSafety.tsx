import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Branches, Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Substance abuse and dependence',
    content: slide(
      <>
        <Rule>Substance abuse is the harmful use of alcohol, drugs or other substances. Dependence is when your body or mind relies on a substance. Young people are more vulnerable because their brains are still developing.</Rule>
        <StepFlow steps={['Harmful use of a substance.', 'Using it again and again.', 'Body or mind relies on it: dependence.']} aria="Three steps in order: harmful use of a substance, using it again and again, then dependence when the body or mind relies on it." />
        <Worked
          title="Sam uses a substance to feel calm"
          steps={[<>He uses it to escape a worry.</>, <>He uses it again when the worry returns.</>, <>Now he feels he cannot cope without it: that is dependence.</>]}
        />
        <Mistake>Thinking “just once cannot hurt” or “it only happens to other people”. Anyone can become dependent, and young people are at greater risk.</Mistake>
      </>,
    ),
  },
  {
    title: 'Warning signs and the effect on your future',
    content: slide(
      <>
        <Rule>Warning signs of substance abuse include neglecting school, mood swings and risky behaviour. Substance abuse harms your education, health, relationships and careers.</Rule>
        <Hub centre="Your future" spokes={['Education', 'Health', 'Relationships', 'Careers']} aria="A circle labelled Your future with four things that substance abuse harms: education, health, relationships and careers." />
        <Worked
          title="A friend skips school, has mood swings and takes risks"
          steps={[<>Spot the signs: school, mood and risks.</>, <>Look for a pattern, not one bad day.</>, <>Show you care and think about how to help.</>]}
        />
        <Mistake>Deciding after one bad day that someone abuses substances. Look for a pattern of signs over time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Pressure, stress and healthy coping',
    content: slide(
      <>
        <Rule>Peers may encourage use, which makes saying no hard. Stress may lead people to use substances to cope. Healthy coping strategies are exercise, talking, hobbies and creative activities.</Rule>
        <Branches
          problem="You feel stressed after a bad test"
          options={[
            { choice: 'Use a substance', outcome: 'The stress returns and a new risk begins.' },
            { choice: 'Exercise and talk to someone', outcome: 'You cope and stay safe.' },
          ]}
          aria="A decision tree. You feel stressed after a bad test. Using a substance means the stress returns and a new risk begins. Exercising and talking to someone means you cope and stay safe."
        />
        <Worked
          title="Choose a healthy way to cope"
          steps={[<>Name the stress: a bad test.</>, <>List healthy options: a run, a talk, a hobby.</>, <>Pick one and do it today.</>]}
        />
        <Mistake>Believing a substance solves stress. It does not remove the problem, and it adds new risks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Getting help and helping a friend',
    content: slide(
      <>
        <Rule>You can get help from counsellors, doctors, support groups, helplines and trusted adults. If a friend shows warning signs, speak to them with care and urge them to get help.</Rule>
        <StepFlow steps={['Choose a calm, private moment.', 'Say you care and what you have noticed.', 'Listen without judging.', 'Urge them to talk to a trusted adult.']} aria="Four steps for helping a friend in order: choose a calm private moment, say you care and what you noticed, listen without judging, urge them to talk to a trusted adult." />
        <Worked
          title="You are worried about a friend"
          steps={[<>Find a private moment, not in front of others.</>, <>Say: “I care about you, and I noticed you are missing school.”</>, <>Listen to the answer.</>, <>Suggest talking to a counsellor or a trusted adult together.</>]}
        />
        <Mistake>Shaming your friend or ignoring the problem. Both leave your friend alone. Speak with care and point to support.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is substance abuse, and what is dependence?" answer="Substance abuse is the harmful use of alcohol, drugs or other substances. Dependence is when your body or mind relies on a substance." />
        <Check question="Name two warning signs of substance abuse." answer="Any two of: neglecting school, mood swings, risky behaviour." />
        <Check question="Give two healthy ways to cope with stress." answer="Any two of: exercise, talking, hobbies, creative activities." />
        <Check question="A friend shows warning signs. What should you do, and who can help?" answer="Speak to them with care and urge them to get help. Counsellors, doctors, support groups, helplines and trusted adults can help." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is substance abuse?',
    options: ['Taking any medicine, even one prescribed by a doctor', 'The harmful use of alcohol, drugs or other substances', 'The use of illegal drugs and nothing else', 'The use of tobacco and nothing else'],
    answer: 'The harmful use of alcohol, drugs or other substances',
    explanation: 'Substance abuse is misuse of any substance that causes harm to health or wellbeing.',
  },
  {
    prompt: 'Why are young people more vulnerable to addiction?',
    options: ['They are not', 'Their brains are still developing', 'Age does not matter', 'Only adults become addicted'],
    answer: 'Their brains are still developing',
    explanation: 'Adolescent brains are more susceptible to addiction, and early use increases long-term risk.',
  },
  {
    prompt: 'What is a warning sign of substance abuse?',
    options: ['Normal teenage behaviour that is not a concern', 'Neglecting school, mood swings and risky behaviour', 'Missing a day of school because of a cold', 'Spending time with a large group of friends'],
    answer: 'Neglecting school, mood swings and risky behaviour',
    explanation: 'Multiple changes in behaviour and priorities often signal substance abuse.',
  },
  {
    prompt: 'What is dependence?',
    options: ['Having close friends that you rely on for support', 'When your body or mind relies on a substance', 'Using a substance now and then in a normal way', 'A habit that you can stop by choosing to do so'],
    answer: 'When your body or mind relies on a substance',
    explanation: 'Dependence means the body or mind needs the substance to function normally.',
  },
  {
    prompt: 'How can substance abuse affect your future?',
    options: ['It cannot affect the future of a young person', 'It harms education, health, relationships and careers', 'It has only a small effect that fades quickly', 'It is easily fixed once a person decides to stop'],
    answer: 'It harms education, health, relationships and careers',
    explanation: 'Substance abuse has serious long-term consequences across all life areas.',
  },
  {
    prompt: 'What are healthy coping strategies?',
    options: ['Using alcohol or drugs to feel calm for a while', 'Exercise, talking, hobbies and creative activities', 'Sleeping for long hours to avoid the problem', 'Staying alone in your room until the stress ends'],
    answer: 'Exercise, talking, hobbies and creative activities',
    explanation: 'Healthy coping builds resilience and manages stress without harm.',
  },
  {
    prompt: 'Where can you get help for substance abuse?',
    options: ['Nowhere, as nobody helps people with this problem', 'Counsellors, doctors, support groups, helplines and trusted adults', 'Only from friends, who understand it best', 'Nowhere, because the help is private and not for teens'],
    answer: 'Counsellors, doctors, support groups, helplines and trusted adults',
    explanation: 'Many professional and community resources offer confidential help.',
  },
  {
    prompt: 'How does social pressure contribute to substance abuse?',
    options: ['It does not, since each person chooses alone', 'Peers may encourage use, which makes saying no hard', 'All of your friends use substances, so it is normal', 'It happens only at parties and not in other places'],
    answer: 'Peers may encourage use, which makes saying no hard',
    explanation: 'Social pressure is a major factor in youth substance abuse.',
  },
  {
    prompt: 'What role does stress play in substance abuse?',
    options: ['It has no part, since stress and substances are unrelated', 'Stress may lead people to use substances to cope', 'Stress helps to prevent substance abuse', 'Stress leads to abuse in adults but not in teenagers'],
    answer: 'Stress may lead people to use substances to cope',
    explanation: 'Unmanaged stress is often linked to substance abuse, especially in young people.',
  },
  {
    prompt: 'What should you do if a friend shows signs of substance abuse?',
    options: ['Do nothing, as it is their own business', 'Speak to them with care and urge them to get help', 'Tell everyone at school about the problem', 'Ignore them and hope that the problem fades'],
    answer: 'Speak to them with care and urge them to get help',
    explanation: 'Supporting a friend means expressing concern and encouraging professional help.',
  },
];

const SubstanceAbuseEmotionalSafety = () => (
  <CapsSubjectTopic
    title="Substance Abuse and Emotional Safety"
    subtitle="Recognizing harmful behaviour and finding support"
    learnSteps={learnSteps}
    task="gr9-substance-abuse-emotional-safety-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default SubstanceAbuseEmotionalSafety;
