import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Who is at a meeting",
    content: slide(
      <>
        <Rule>A formal meeting has people with set roles. The chairperson leads the meeting, the secretary keeps the records, and the members take part and vote. Meetings follow rules so that everyone is heard and decisions are fair. A meeting oral task is usually 10 to 15 minutes.</Rule>
        <KeyTable
          title="Roles at a meeting"
          head={["Role", "Task"]}
          aria="Roles at a meeting. Chairperson: Opens the meeting, keeps order and guides the agenda. Secretary: Prepares the agenda and records the minutes. Member: Takes part, proposes and votes. Quorum: The number of members needed to hold a valid meeting. Duration: About 10 to 15 minutes in an oral task."
          rows={[["Chairperson", "Opens the meeting, keeps order and guides the agenda"], ["Secretary", "Prepares the agenda and records the minutes"], ["Member", "Takes part, proposes and votes"], ["Quorum", "The number of members needed to hold a valid meeting"], ["Duration", "About 10 to 15 minutes in an oral task"]]}
        />
        <Worked
          steps={[
            <>The secretary sends out the agenda before the meeting so that members know what will be discussed.</>,
            <>The chairperson checks that there is a quorum before starting.</>,
          ]}
        />
        <Mistake>Starting the meeting without enough members. Decisions may not be valid without a quorum.</Mistake>
      </>,
    ),
  },
  {
    title: "The agenda",
    content: slide(
      <>
        <Rule>The agenda lists the items in the order in which they will be discussed. A typical agenda opens with a welcome, apologies and the minutes of the last meeting, then the main items, general matters and the closure. Following the agenda keeps the meeting short and fair.</Rule>
        <KeyTable
          title="A typical agenda"
          head={["Item", "What happens"]}
          aria="A typical agenda. Welcome: The chairperson opens the meeting. Apologies: Absent members are noted. Minutes of the last meeting: Read, corrected and accepted. Matters arising and main items: The business of the day. General: Any other business. Closure: Date of the next meeting; the chair closes."
          rows={[["Welcome", "The chairperson opens the meeting"], ["Apologies", "Absent members are noted"], ["Minutes of the last meeting", "Read, corrected and accepted"], ["Matters arising and main items", "The business of the day"], ["General", "Any other business"], ["Closure", "Date of the next meeting; the chair closes"]]}
        />
        <Worked
          steps={[
            <>At a sports committee meeting the secretary reads the apologies of two members who are at a match.</>,
            <>The main item is the date of the school athletics day.</>,
          ]}
        />
        <Mistake>Raising a new topic out of order. Bring it up under general business.</Mistake>
      </>,
    ),
  },
  {
    title: "Motions and voting",
    content: slide(
      <>
        <Rule>Decisions are made by a motion. A member proposes an idea, another member seconds it, the members discuss it, and then the chairperson calls for a vote. A majority decides. The chairperson stays neutral and makes sure that everyone has a chance to speak.</Rule>
        <KeyTable
          title="How a decision is made"
          head={["Step", "Meaning"]}
          aria="How a decision is made. Propose: A member puts forward a motion. Second: Another member supports it. Discuss: Members give their views. Vote: Members show agreement or disagreement. Record: The secretary writes the decision in the minutes."
          rows={[["Propose", "A member puts forward a motion"], ["Second", "Another member supports it"], ["Discuss", "Members give their views"], ["Vote", "Members show agreement or disagreement"], ["Record", "The secretary writes the decision in the minutes"]]}
        />
        <Worked
          steps={[
            <>Sipho proposes that the club buys a new net, Naledi seconds, the members discuss, and a majority votes in favour.</>,
            <>The secretary records who proposed and seconded.</>,
          ]}
        />
        <Mistake>Voting before a motion is seconded. The motion needs a second before it is discussed.</Mistake>
      </>,
    ),
  },
  {
    title: "Minutes and language",
    content: slide(
      <>
        <Rule>Minutes are the official record of a meeting. They give the name of the group, the date, time and place, the people present and absent, and what was discussed and decided. They are written in the past tense and in formal language. Spoken meeting language is also polite and formal.</Rule>
        <KeyTable
          title="Minutes"
          head={["Part of the minutes", "Content"]}
          aria="Minutes. Heading: Name of the group, date, time and place. Attendance: Present and apologies. Discussion: Short summary of each item. Decisions: What was agreed and who must act. Signature: The chairperson signs when the minutes are accepted."
          rows={[["Heading", "Name of the group, date, time and place"], ["Attendance", "Present and apologies"], ["Discussion", "Short summary of each item"], ["Decisions", "What was agreed and who must act"], ["Signature", "The chairperson signs when the minutes are accepted"]]}
        />
        <Worked
          steps={[
            <>The minutes say that the committee agreed to hold a cake sale on the second Friday of the term and that Naledi will arrange it.</>,
            <>At the next meeting the minutes are read and accepted.</>,
          ]}
        />
        <Mistake>Writing every word that was said. Minutes summarise discussion and record decisions.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Who keeps the records of a meeting?</>,
          <>What does the agenda list?</>,
          <>What must happen before members vote on a motion?</>,
          <>In which tense are minutes written?</>,
        ]}
        answers={[
          <>The secretary.</>,
          <>The items in the order they will be discussed.</>,
          <>It must be proposed and seconded.</>,
          <>The past tense.</>,
        ]}
      />,
    ),
  },
];
