import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '@/components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as o from '@/components/diagrams/english/oral789';

// Grade 9 English HL oral skills: meeting orals (roles, agenda, chairing, proposals, voting, minutes). General criteria; no marks. Written minutes are a separate lesson.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The parts of a formal meeting",
    content: slide(
      <>
        <Rule>A formal meeting follows an agenda, a list of the items to be discussed, in order. The chairperson opens the meeting, guides it and keeps order. The secretary writes the minutes, the record of what was decided. Members speak through the chairperson. The meeting usually starts with apologies and the minutes of the last meeting, and ends with a closing.</Rule>
        <InfoTable
          cols={[{ title: "Role", w: 30 }, { title: "What the person does", w: 70 }]}
          rows={[
            ["Chairperson", "opens, guides, keeps order"],
            ["Secretary", "takes the minutes"],
            ["Members", "speak and vote"],
            ["Timekeeper", "watches the time"],
          ]}
          aria={"A table of meeting roles. Chairperson: opens, guides and keeps order. Secretary: takes the minutes. Members: speak and vote. Timekeeper: watches the time."}
        />
        <Worked
          title="Planning the time"
          steps={[
            <>An agenda has {o.MEETING9.items} items of about {o.MEETING9.minutesEach} minutes each.</>,
            <>The discussion takes {o.MEETING9.items} × {o.MEETING9.minutesEach} = {o.meetingMinutes()} minutes.</>,
            <>Add a few minutes for the opening and the closing.</>,
          ]}
        />
        <Mistake>Starting a meeting without an agenda. The agenda keeps the discussion in order and on time.</Mistake>
      </>,
    ),
  },
  {
    title: "Chairing and speaking at a meeting",
    content: slide(
      <>
        <Rule>The chairperson announces each item, invites speakers, keeps to the time and sums up before a vote. A member asks for the floor, speaks briefly and politely, and addresses the chairperson. A proposal is a suggestion for the meeting to decide, and another member seconds it. A point of order is raised when a rule of the meeting is broken.</Rule>
        <FlowSteps
          aria={"How an item is handled at a meeting. The chair announces the item, members ask for the floor, a proposal is made and seconded, then there is discussion and a vote."}
          steps={[{ label: "Chair announces the item" }, { label: "Members ask for the floor" }, { label: "A proposal is made and seconded" }, { label: "Discussion, then a vote" }]}
        />
        <Worked
          title="A vote"
          steps={[
            <>{o.VOTE9.forVotes} members vote for a proposal, {o.VOTE9.against} vote against and {o.VOTE9.abstain} abstain.</>,
            <>Votes cast = {o.VOTE9.forVotes} + {o.VOTE9.against} = {o.votesCast()}, and {o.present()} members were present.</>,
            <>More voted for than against, so the proposal is carried.</>,
          ]}
        />
        <Mistake>Speaking without asking for the floor. Members speak through the chairperson.</Mistake>
      </>,
    ),
  },
  {
    title: "Meeting language, minutes and a rubric",
    content: slide(
      <>
        <Rule>Use formal, polite language at a meeting: &quot;Madam Chair, I would like to propose that...&quot; The secretary records the date, the people present, the apologies, the decisions and who must act, in the past tense and in a short, factual style. A rubric for a meeting oral looks at the role played, language, courtesy, contribution and listening.</Rule>
        <InfoTable
          cols={[{ title: "Criterion", w: 30 }, { title: "What is judged", w: 70 }]}
          rows={[
            ["Role", "does the job of the role well"],
            ["Language", "formal and polite"],
            ["Courtesy", "waits, listens, does not interrupt"],
            ["Contribution", "useful points, to the topic"],
          ]}
          aria={"A table of meeting-oral criteria. Role: does the job of the role well. Language: formal and polite. Courtesy: waits, listens and does not interrupt. Contribution: useful points that stay on the topic."}
        />
        <Worked
          title="From speech to minutes"
          steps={[
            <>Spoken: &quot;I propose that we hold the clean-up on Saturday.&quot;</>,
            <>Minute: &quot;Mr Dlamini proposed that the clean-up be held on Saturday. Seconded by Ms Naidoo. Carried.&quot;</>,
            <>Minutes use the past tense and the passive voice.</>,
          ]}
        />
        <Mistake>Writing the minutes as a story of everything said. Minutes record the decisions and who must act.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is an agenda?</>,
          <>Who takes the minutes?</>,
          <>How long do 6 agenda items of 5 minutes each take?</>,
          <>What does the secretary record?</>,
        ]}
        answers={[
          <>A list of the items to be <strong>discussed in order</strong>.</>,
          <>The <strong>secretary</strong>.</>,
          <>6 × 5 = <strong>{o.meetingMinutes()} minutes</strong>.</>,
          <>The <strong>decisions</strong> and who must act.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is an agenda?",
    options: ["A record of what was decided at the end", "A list of items to be discussed in order", "A speech that is given at the closing", "A list of the names of the people there"],
    answer: "A list of items to be discussed in order",
    explanation: "The agenda guides the meeting.",
  },
  {
    prompt: "What are minutes?",
    options: ["The time that the meeting starts", "A list of the topics ahead", "A speech of the chairperson", "The record of what the meeting decided"],
    answer: "The record of what the meeting decided",
    explanation: "Minutes record decisions and actions.",
  },
  {
    prompt: "Which role is responsible for order during a meeting?",
    options: ["The chairperson", "The secretary", "The doorkeeper", "The audience"],
    answer: "The chairperson",
    explanation: "The chairperson guides the meeting.",
  },
  {
    prompt: "Who writes the minutes?",
    options: ["The chairperson", "The timekeeper", "The secretary", "Every member alone"],
    answer: "The secretary",
    explanation: "The secretary records them.",
  },
  {
    prompt: "Why do members speak through the chairperson?",
    options: ["To make the meeting longer", "To keep the meeting in order", "To hide their opinions", "To avoid the agenda"],
    answer: "To keep the meeting in order",
    explanation: "Turns are given by the chair.",
  },
  {
    prompt: "An agenda has 6 items of 5 minutes each. How long is the discussion?",
    options: ["11 minutes", "25 minutes", "35 minutes", "30 minutes"],
    answer: "30 minutes",
    explanation: "6 × 5 = 30 minutes.",
  },
  {
    prompt: "An agenda has 4 items of 10 minutes each. How long is the discussion?",
    options: ["40 minutes", "14 minutes", "30 minutes", "50 minutes"],
    answer: "40 minutes",
    explanation: "4 × 10 = 40 minutes.",
  },
  {
    prompt: "What is a proposal?",
    options: ["A list of the rules of the meeting", "A record of who was at the meeting", "A suggestion for the meeting to decide", "A reason for being late to the meeting"],
    answer: "A suggestion for the meeting to decide",
    explanation: "Members vote on a proposal.",
  },
  {
    prompt: "What does it mean to second a proposal?",
    options: ["To reject it at once without a vote", "To support it so that it can be discussed", "To change the agenda before the vote", "To end the meeting as soon as possible"],
    answer: "To support it so that it can be discussed",
    explanation: "A second shows that another member supports it.",
  },
  {
    prompt: "12 vote for, 7 vote against and 3 abstain. How many votes are cast for or against?",
    options: ["22", "15", "12", "19"],
    answer: "19",
    explanation: "12 + 7 = 19 votes cast.",
  },
  {
    prompt: "12 vote for, 7 vote against and 3 abstain. How many members are present?",
    options: ["22", "19", "15", "10"],
    answer: "22",
    explanation: "12 + 7 + 3 = 22 members.",
  },
  {
    prompt: "12 vote for, 7 vote against and 3 abstain. What happens to the proposal?",
    options: ["It is rejected", "It is not counted", "It is carried", "It is voted on again"],
    answer: "It is carried",
    explanation: "More voted for than against.",
  },
  {
    prompt: "What does a point of order mean?",
    options: ["A new item is being added to the agenda", "A rule of the meeting is being broken", "The meeting is over and members may leave", "A vote is being counted by the secretary"],
    answer: "A rule of the meeting is being broken",
    explanation: "A member raises a point of order to keep the rules.",
  },
  {
    prompt: "Which sentence is suitable at a formal meeting?",
    options: ["Hey, listen to me, everyone, I will speak now!", "That idea is stupid, so just forget about it.", "I am not going to say anything to anyone.", "Madam Chair, I would like to propose a clean-up."],
    answer: "Madam Chair, I would like to propose a clean-up.",
    explanation: "Formal and polite language suits a meeting.",
  },
];

const MeetingOralTasks = () => (
  <CapsSubjectTopic
    title="Meeting Oral Tasks"
    subtitle="The roles at a meeting, chairing, proposals and votes, meeting language and minutes"
    learnSteps={learnSteps}
    task="gr9-meeting-oral-tasks-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={9}
  />
);

export default MeetingOralTasks;
