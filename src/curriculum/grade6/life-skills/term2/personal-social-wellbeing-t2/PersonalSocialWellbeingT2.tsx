import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Healthy friendships',
    content: slide(
      <>
        <Rule>A healthy friendship is based on respect, care and listening, such as listening respectfully when a friend speaks. A friend dares you to break a school rule? Say no and choose the responsible action.</Rule>
        <Worked
          title="Be a good friend"
          steps={[
            <>Your friend is telling you about their day: listen respectfully.</>,
            <>Speak politely and respect their boundaries.</>,
            <>A friend dares you to break a school rule: say no and choose the responsible action.</>,
            <>Good friends should not force you into unsafe or irresponsible choices.</>,
          ]}
        />
        <Mistake>Thinking you must do what a friend dares you to do to keep the friendship. Good friends respect your “no”.</Mistake>
      </>,
    ),
  },
  {
    title: 'Solving conflict fairly',
    content: slide(
      <>
        <Rule>
          When a disagreement starts, calm down and listen first. To solve it fairly, give both people a chance to speak: “Let us each explain what happened.”
        </Rule>
        <Worked
          title="Solve a disagreement"
          steps={[
            <>Pause first: take a breath instead of shouting. Calm down and listen.</>,
            <>Say: “Let us each explain what happened.” Both people speak.</>,
            <>Use kind words to say how you feel, without blaming.</>,
            <>Agree on a plan that both people can follow.</>,
          ]}
        />
        <Mistake>Shouting first or blaming. Staying calm helps both people solve the problem fairly.</Mistake>
      </>,
    ),
  },
  {
    title: 'Trusted adults and safe choices',
    content: slide(
      <>
        <Rule>
          A trusted adult is someone responsible who protects and supports you, such as a teacher who helps you stay safe. If someone you do not know offers you a lift, say no and tell a trusted adult. If a situation feels unsafe, tell a trusted adult as soon as you can.
        </Rule>
        <Worked
          title="Make a safe choice"
          steps={[
            <>A person you do not know offers you a lift.</>,
            <>Say no. Do not go with them.</>,
            <>Tell a trusted adult, such as a parent, caregiver or teacher.</>,
            <>Reporting quickly helps adults protect you and solve the problem.</>,
          ]}
        />
        <Mistake>Keeping an unsafe situation a secret or waiting to tell. Tell a trusted adult as soon as you can.</Mistake>
      </>,
    ),
  },
  {
    title: 'Responsibility and study habits',
    content: slide(
      <>
        <Rule>
          Being responsible means being prepared, such as packing your books and homework the night before. A strong study habit is reviewing your notes over several days before a test, which reduces stress.
        </Rule>
        <Worked
          title="Prepare for a test on Friday"
          steps={[
            <>Pack your books and homework the night before: responsibility at school.</>,
            <>Review a little of your notes each day from Monday: reviewing your notes over several days.</>,
            <>On Thursday night you only need a quick look, so you feel calm.</>,
            <>If you do not understand something, ask for help.</>,
          ]}
        />
        <Mistake>Leaving all the revision to the night before. Regular revision over several days works better and reduces stress.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Is a healthy friend someone who shares their snack, or someone who laughs at your mistakes? What is the safest response to a dare to sneak out of class?</li>
            <li>What should you do first when you and a friend start to argue, and which sentence settles it fairly?</li>
            <li>Who is a trusted adult? What do you do if someone you do not know offers you a lift? What should you do if a place starts to feel unsafe?</li>
            <li>Is handing in homework on time, or leaving it for a friend to copy, the responsible choice at school? Which study habit helps before a test?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Someone who shares their snack. Say no and choose the responsible action.</li>
            <li>Calm down and listen. “Let us each explain what happened.”</li>
            <li>A teacher who helps you stay safe. Say no and tell a trusted adult. Tell a trusted adult as soon as you can.</li>
            <li>Handing in homework on time. Reviewing your notes over several days.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which action shows a healthy friendship?',
    options: ['Listening respectfully when a friend speaks', 'Laughing when a friend is upset', 'Sharing secrets without permission', 'Pressuring a friend to break a rule'],
    answer: 'Listening respectfully when a friend speaks',
    explanation: 'Healthy friendships are based on respect, care, and listening.',
  },
  {
    prompt: 'What is a good first step when a disagreement starts?',
    options: ['Calm down and listen', 'Shout louder', 'Walk away angrily without speaking', 'Blame the other person immediately'],
    answer: 'Calm down and listen',
    explanation: 'Staying calm helps both people solve the problem fairly.',
  },
  {
    prompt: 'Who is the best example of a trusted adult?',
    options: ['A teacher who helps you stay safe', 'A stranger at the shop', 'Someone online you have never met', 'A classmate who dares you to hide a problem'],
    answer: 'A teacher who helps you stay safe',
    explanation: 'A trusted adult is someone responsible who protects and supports you.',
  },
  {
    prompt: 'What should you do if someone offers you a lift and you do not know them?',
    options: ['Say no and tell a trusted adult', 'Get in quickly', 'Keep it secret from everyone', 'Follow them to ask questions'],
    answer: 'Say no and tell a trusted adult',
    explanation: 'Safe choices include refusing unsafe offers and reporting them immediately.',
  },
  {
    prompt: 'Which behaviour shows responsibility at school?',
    options: ['Packing your books and homework the night before', 'Ignoring classwork until the last minute', 'Leaving your things everywhere', 'Refusing to follow instructions'],
    answer: 'Packing your books and homework the night before',
    explanation: 'Being prepared is part of taking responsibility for your learning.',
  },
  {
    prompt: 'Which sentence helps solve a conflict fairly?',
    options: ['Let us each explain what happened', 'It is all your fault', 'I will never listen to you again', 'Only my opinion matters'],
    answer: 'Let us each explain what happened',
    explanation: 'Fair conflict resolution gives both people a chance to speak.',
  },
  {
    prompt: 'A friend dares you to break a school rule. What is the safest response?',
    options: ['Say no and choose the responsible action', 'Do it so the friend likes you', 'Blame another learner', 'Hide from the teacher afterwards'],
    answer: 'Say no and choose the responsible action',
    explanation: 'Good friends should not force you to make unsafe or irresponsible choices.',
  },
  {
    prompt: 'Which study habit is most helpful before a test?',
    options: ['Reviewing your notes over several days', 'Waiting until the test starts', 'Leaving your books at school on purpose', 'Copying from a friend instead of studying'],
    answer: 'Reviewing your notes over several days',
    explanation: 'Regular revision is a strong study habit and reduces stress.',
  },
  {
    prompt: 'If a situation feels unsafe, what should you do?',
    options: ['Tell a trusted adult as soon as you can', 'Keep quiet about it for ever', 'Take a risky chance on your own', 'Pretend that nothing is wrong at all'],
    answer: 'Tell a trusted adult as soon as you can',
    explanation: 'Reporting danger quickly helps adults protect you and solve the problem.',
  },
];

const PersonalSocialWellbeingT2 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Friendships, safety, responsibilities, and fair ways to solve problems"
    learnSteps={learnSteps}
    task="personal-social-wellbeing-t2"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PersonalSocialWellbeingT2;
