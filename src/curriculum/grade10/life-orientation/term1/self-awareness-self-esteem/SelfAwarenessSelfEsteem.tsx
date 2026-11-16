import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub } from '../../../../../components/diagrams/lo/PswPictures';
import { Compare } from '../../../../../components/diagrams/lo/Lo9Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Self-awareness and self-esteem',
    content: slide(
      <>
        <Rule>Self-awareness is knowing your own strengths, weaknesses, feelings and values. Self-esteem is how much you value and respect yourself. Honest self-awareness helps you build healthy self-esteem.</Rule>
        <Hub
          centre="Self-awareness"
          spokes={['Strengths', 'Weaknesses', 'Feelings', 'Values', 'Interests']}
          aria="A hub with Self-awareness in the centre and five spokes: your strengths, weaknesses, feelings, values and interests. Knowing all five is what self-awareness means."
        />
        <Worked
          title="Sipho thinks about himself"
          steps={[
            <>Strength: he explains maths clearly to friends.</>,
            <>Weakness: his voice shakes when he speaks to the whole class.</>,
            <>Self-awareness: he knows both, and he does not hide the weakness from himself.</>,
            <>Self-esteem: &quot;I am worth respect, and I can practise speaking in front of people.&quot;</>,
          ]}
        />
        <Mistake>Thinking that high self-esteem means believing you are better than other people. Healthy self-esteem is respecting yourself, and it does not need you to look down on anyone.</Mistake>
      </>,
    ),
  },
  {
    title: 'What shapes how you see yourself',
    content: slide(
      <>
        <Rule>Your self-awareness and self-esteem are shaped by many factors: family, friends, teachers, your results, your culture and the media. Some of these build you up and some can wear you down.</Rule>
        <Compare
          left={{ title: 'Can build self-esteem', items: ['Encouragement from family', 'Finishing a task well', 'Friends who respect you'] }}
          right={{ title: 'Can lower self-esteem', items: ['Being teased or bullied', 'Always comparing yourself', 'Edited images in the media'] }}
          aria="Two columns. Things that can build self-esteem: encouragement from family, finishing a task well, and friends who respect you. Things that can lower it: being teased or bullied, always comparing yourself, and edited images in the media."
        />
        <Worked
          title="Lerato scrolls through edited photos"
          steps={[
            <>She feels she does not look good enough.</>,
            <>She remembers that many photos are edited and chosen to look perfect.</>,
            <>She limits her time on the app and follows people who share real life.</>,
            <>Result: the media has less power over how she sees herself.</>,
          ]}
        />
        <Mistake>Believing that the pictures and stories in the media show how most people really look and live. They are often edited, selected or made to sell something.</Mistake>
      </>,
    ),
  },
  {
    title: 'Building confidence in yourself and others',
    content: slide(
      <>
        <Rule>Confidence grows from what you do. You can build it in yourself, and in other people, by communicating well, completing tasks, taking part in community life (a chance to contribute and feel valued), making good decisions and affirming others.</Rule>
        <Hub
          centre="Confidence"
          spokes={['Communicate', 'Finish tasks', 'Join community life', 'Decide well', 'Affirm others']}
          aria="A hub with Confidence in the centre and five spokes: communicate, finish tasks, join community life, decide well and affirm others. These are the strategies for building confidence in yourself and in others."
        />
        <Worked
          title="Thabo organises a class clean-up"
          steps={[
            <>He speaks to the class and listens to ideas (communicate).</>,
            <>He plans the project and finishes it (complete a task).</>,
            <>He thanks each helper by name (affirm others).</>,
            <>Result: he feels capable and his classmates feel valued.</>,
          ]}
        />
        <Mistake>Thinking confidence only comes from praise, or that confident people never fail. Confidence grows from trying, finishing and learning, even after a mistake.</Mistake>
      </>,
    ),
  },
  {
    title: 'Respecting the uniqueness of self and others',
    content: slide(
      <>
        <Rule>Every person is unique. To respect differences of race, gender and ability, accept that people are different, listen, avoid stereotypes and treat people with dignity. A difference makes no person better or worse than another.</Rule>
        <Worked
          title="A group project with a classmate who uses a wheelchair"
          steps={[
            <>Zanele uses a wheelchair, and the group wants to hold its meeting upstairs.</>,
            <>The group sees that this would shut Zanele out.</>,
            <>They move the meeting to a ground-floor room.</>,
            <>Result: everyone can take part, because the group respected a difference.</>,
          ]}
        />
        <Mistake>Thinking that respect means pretending differences do not exist. Fair treatment sometimes means making a small change so that everyone can take part.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between self-awareness and self-esteem?</>,
          <>Name two factors that can lower a teenager&apos;s self-esteem, and one way to protect it.</>,
          <>Name three ways to build confidence in other people.</>,
          <>Why is saying &quot;all people should be treated exactly the same, whatever they need&quot; not always fair?</>,
        ]}
        answers={[
          <>Self-awareness is knowing your strengths, weaknesses, feelings and values. Self-esteem is how much you value and respect yourself.</>,
          <>For example teasing or bullying, and comparing yourself with edited images. Protect it by limiting time on those, and by spending time with people who respect you.</>,
          <>For example listen to them, affirm what they do well, and invite them to join a project or community activity.</>,
          <>Because some people need a small change to take part, such as a ground-floor room. Fairness means everyone can take part with dignity.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is self-awareness?',
    options: ['Being known and liked by most of the other learners in your class', 'Knowing your own strengths, weaknesses, feelings and values', 'Knowing which subjects give you your highest marks', 'Believing that you are better than other people'],
    answer: 'Knowing your own strengths, weaknesses, feelings and values',
    explanation: 'Self-awareness means understanding who you are: your strengths, weaknesses, feelings and values.',
  },
  {
    prompt: 'What is self-esteem?',
    options: ['How much you value and respect yourself', 'How popular you are with the other learners', 'How many marks you get in a test', 'How well other people think of you'],
    answer: 'How much you value and respect yourself',
    explanation: 'Self-esteem is your own sense of worth. It does not depend only on marks or popularity.',
  },
  {
    prompt: 'Which statement about healthy self-esteem is correct?',
    options: ['It means believing that you are better than other people you know', 'It means never admitting to a weakness in public', 'It means being praised by everyone that you meet', 'It is respecting yourself, with no need to look down on others'],
    answer: 'It is respecting yourself, with no need to look down on others',
    explanation: 'Healthy self-esteem is respect for yourself. It does not need you to feel superior to anyone.',
  },
  {
    prompt: 'Sipho knows he explains maths well but gets nervous when he speaks to the whole class. What does this show?',
    options: ['Low self-esteem, because he has a weakness in one subject area', 'Arrogance, because he knows that he is good at maths', 'Self-awareness, because he is aware of both', 'Peer pressure, because he is nervous in front of others'],
    answer: 'Self-awareness, because he is aware of both',
    explanation: 'Knowing both strengths and weaknesses honestly is self-awareness. A weakness does not mean low self-esteem.',
  },
  {
    prompt: 'Which of these is a factor that can build a teenager\'s self-esteem?',
    options: ['Being teased by classmates about their appearance', 'Finishing a task well and being encouraged', 'Comparing themselves with edited photos online', 'Being ignored by the people around them'],
    answer: 'Finishing a task well and being encouraged',
    explanation: 'Achieving something and getting encouragement from others both build self-esteem.',
  },
  {
    prompt: 'Why can edited photos in the media lower self-esteem?',
    options: ['They make people feel that they should look perfect', 'They show people exactly as they look in real life, with no changes', 'They are shown to people who are older than you', 'They are not allowed to show ordinary people'],
    answer: 'They make people feel that they should look perfect',
    explanation: 'Edited images are not realistic. Comparing yourself with them can make you feel that you are not good enough.',
  },
  {
    prompt: 'Lerato feels bad after scrolling through edited photos. Which response protects her self-esteem?',
    options: ['Posting edited photos of herself so that she can compete', 'Deleting every one of her friends from her phone', 'Telling herself that she must try to look like the people in the photos', 'Remembering that images are edited and limiting her time on the app'],
    answer: 'Remembering that images are edited and limiting her time on the app',
    explanation: 'Understanding how media images are made, and limiting the time spent on them, reduces their effect on self-esteem.',
  },
  {
    prompt: 'Which of these is a strategy for building confidence in yourself?',
    options: ['Avoiding each task that could go wrong, to stay safe', 'Doing what other people tell you to do, without question', 'Completing a task or a project', 'Waiting until you feel perfectly sure of yourself first'],
    answer: 'Completing a task or a project',
    explanation: 'Completing tasks and projects shows you what you can do, and this builds confidence.',
  },
  {
    prompt: 'Which action builds confidence in other people?',
    options: ['Pointing out each mistake that they make', 'Affirming what they do well', 'Leaving them out of group activities', 'Doing their work for them'],
    answer: 'Affirming what they do well',
    explanation: 'Affirmation, such as thanking people and noticing what they do well, builds confidence in others.',
  },
  {
    prompt: 'Taking part in a community organisation can build confidence because it:',
    options: ['Gives you the chance to contribute and to feel valued', 'Means that you do not have to make any decisions at all', 'Lets you avoid your schoolwork for a few hours a week', 'Proves that you are better than the other members'],
    answer: 'Gives you the chance to contribute and to feel valued',
    explanation: 'Taking part in community life lets you use your skills and gives you a sense of belonging and purpose.',
  },
  {
    prompt: 'What does it mean to respect the uniqueness of other people?',
    options: ['To treat people in exactly the same way, whatever each one needs', 'To avoid speaking to people who are different from you', 'To expect other people to become more like you over time', 'To accept that people are different and treat them with dignity'],
    answer: 'To accept that people are different and treat them with dignity',
    explanation: 'Respecting uniqueness means accepting differences, such as race, gender and ability, and treating each person with dignity.',
  },
  {
    prompt: 'A group moves its meeting to a ground-floor room so a classmate who uses a wheelchair can join. This shows:',
    options: ['That the classmate is weaker than the others', 'That the group does not want to work upstairs', 'Respect for a difference in ability', 'A way of avoiding the group project'],
    answer: 'Respect for a difference in ability',
    explanation: 'Making a small change so that everyone can take part is respect for a difference in ability.',
  },
  {
    prompt: 'What should you do to respect differences of race, gender and ability?',
    options: ['Ignore the differences so that you do not offend other people', 'Accept the differences, listen and treat people with dignity', 'Treat people the same way, whatever each one needs', 'Keep away from people who are different from you'],
    answer: 'Accept the differences, listen and treat people with dignity',
    explanation: 'To respect differences, accept that people are different, listen, avoid stereotypes and treat each person with dignity.',
  },
  {
    prompt: 'Which factor can have BOTH a positive and a negative effect on how you see yourself?',
    options: ['The media', 'The weather', 'The time of day', 'Your shoe size'],
    answer: 'The media',
    explanation: 'The media can show positive role models, and it can also show unrealistic images that lower self-esteem.',
  },
];

const SelfAwarenessSelfEsteem = () => (
  <CapsSubjectTopic
    title="Self-awareness, Self-esteem and Self-development"
    subtitle="Know yourself, build confidence and respect the uniqueness of others"
    learnSteps={learnSteps}
    task="gr10-self-awareness-self-esteem-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default SelfAwarenessSelfEsteem;
