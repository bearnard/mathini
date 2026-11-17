import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { DURATIONS, rangeText } from '@/components/diagrams/english/oralHelpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const group = DURATIONS.find((d) => d.text.startsWith('Debate'))!;

export const learnSteps: LearnStep[] = [
  {
    title: 'Conversation and informal discussion',
    content: slide(
      <>
        <Rule>In a conversation or an informal discussion you start and keep the talk going, take turns, share ideas, defend your position and, where needed, negotiate. A conversation or discussion of this kind is suggested to last {rangeText(group)}.</Rule>
        <KeyTable
          title="Skills in a discussion"
          head={['Skill', 'What it looks like']}
          aria="Skills in an informal discussion. Initiate and sustain: ask a question to start and keep the talk going. Turn-taking: wait for the speaker to finish and then speak. Defend a position: give reasons for your view. Negotiate: find a middle way when views differ. Encourage: help a shy speaker to join in."
          rows={[
            ['Initiate and sustain', 'Ask a question to start and keep going'],
            ['Turn-taking', 'Wait, then speak'],
            ['Defend a position', 'Give reasons for your view'],
            ['Negotiate', 'Find a middle way'],
            ['Encourage', 'Draw in a quiet speaker'],
          ]}
        />
        <Worked
          steps={[
            <>&ldquo;That is a good point, Sipho. Can I add something? I think the rule should apply to everyone, because…&rdquo;</>,
            <>Listen to the whole point, respond to it, and use polite words even when you disagree.</>,
          ]}
        />
        <Mistake>Talking over another speaker. Turn-taking is part of what is assessed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Debate: resolution, teams and rebuttal',
    content: slide(
      <>
        <Rule>A debate is about a resolution, a statement that two teams argue. The affirmative team agrees with the resolution and has the burden of proof. The negative team disagrees and presents a logical case that refutes the affirmative. A rebuttal explains why one team disagrees with the other.</Rule>
        <KeyTable
          title="Debate terms"
          head={['Term', 'Meaning']}
          aria="Debate terms. Resolution: the statement that two teams argue. Affirmative team: agrees with the resolution, has the burden of proof, and begins and ends the debate. Negative team: disagrees with the resolution and refutes the affirmative. Rebuttal: explains why one team disagrees with the other. Burden of proof: the duty to prove the case."
          rows={[
            ['Resolution', 'The statement being argued'],
            ['Affirmative', 'Agrees; begins and ends'],
            ['Negative', 'Disagrees; refutes'],
            ['Rebuttal', 'Why you disagree with the other team'],
            ['Burden of proof', 'The duty to prove the case'],
          ]}
        />
        <Worked
          steps={[
            <>Resolution: &ldquo;Cellphones should be banned at school.&rdquo; The affirmative team argues for a ban. The negative team argues against it.</>,
            <>After the arguments, each team has a break of 5 to 10 minutes to prepare rebuttals. Each team gives two rebuttals and states its own two reasons.</>,
          ]}
        />
        <Mistake>Attacking the person who speaks. A rebuttal attacks the argument and gives a reason, not an insult.</Mistake>
      </>,
    ),
  },
  {
    title: 'Panel and forum discussions: the chairperson',
    content: slide(
      <>
        <Rule>In a panel discussion, speakers talk about a particular aspect of the topic, and a chairperson runs the session. The chairperson keeps order, manages time, keeps to the agenda, encourages participation, stays neutral, and calls for proposals or votes. Speakers use conventional phrases.</Rule>
        <KeyTable
          title="Duties of the chairperson"
          head={['Duty', 'Example']}
          aria="Duties of the chairperson. Keep order: ask for one speaker at a time. Manage time: give each speaker three minutes. Keep to the agenda: bring the talk back to the topic. Encourage participation: invite quiet members to speak. Remain neutral: do not take sides. Call for proposals or votes: ask the group to vote."
          rows={[
            ['Keep order', 'One speaker at a time'],
            ['Manage time', 'Three minutes per speaker'],
            ['Keep to the agenda', 'Return to the topic'],
            ['Encourage participation', 'Invite quiet members'],
            ['Remain neutral', 'Do not take sides'],
            ['Call for votes', 'Ask the group to vote'],
          ]}
        />
        <Worked
          steps={[
            <>Conventional phrases: &ldquo;Thank you, Madam Chairperson.&rdquo; &ldquo;I would like to propose that…&rdquo; &ldquo;On a point of order…&rdquo;</>,
            <>The chairperson says: &ldquo;Thank you. We have two minutes left, so could the next speaker be brief?&rdquo;</>,
          ]}
        />
        <Mistake>A chairperson who argues for one side. The chairperson must stay neutral.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a resolution in a debate?</>,
          <>Which team has the burden of proof?</>,
          <>What is a rebuttal?</>,
          <>Name two duties of a chairperson.</>,
        ]}
        answers={[
          <>The statement that two teams argue.</>,
          <>The affirmative team.</>,
          <>An explanation of why one team disagrees with the other.</>,
          <>Any two of: keeping order, managing time, keeping to the agenda, encouraging participation, remaining neutral, calling for votes.</>,
        ]}
      />,
    ),
  },
];
