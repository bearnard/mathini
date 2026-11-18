import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Informal discussion",
    content: slide(
      <>
        <Rule>An informal discussion is a relaxed conversation about a topic. You start and keep a conversation going, take turns, give your view with reasons and show respect for views that differ from yours. You can also encourage a quiet speaker to share.</Rule>
        <KeyTable
          title="Skills for a discussion"
          head={["Skill", "What it means"]}
          aria="Skills for a discussion. Start and sustain: Open the topic and keep it going. Turn-taking: Do not talk over others. Defend a position: Give reasons for what you say. Negotiate: Look for a fair middle way. Encourage: Invite others to speak."
          rows={[["Start and sustain", "Open the topic and keep it going"], ["Turn-taking", "Do not talk over others"], ["Defend a position", "Give reasons for what you say"], ["Negotiate", "Look for a fair middle way"], ["Encourage", "Invite others to speak"]]}
        />
        <Worked
          steps={[
            <>You say that you think the school day is too long, give two reasons and then ask what the others think.</>,
            <>When two people disagree, you suggest a shorter break as a compromise.</>,
          ]}
        />
        <Mistake>Speaking over others and only repeating your own view. A discussion needs listening.</Mistake>
      </>,
    ),
  },
  {
    title: "The panel",
    content: slide(
      <>
        <Rule>A panel discussion is a planned conversation in which several speakers each talk about one aspect of a topic in front of an audience. A chairperson introduces the topic and the speakers, and then guides the discussion. Panels and group discussions usually run for 20 to 30 minutes.</Rule>
        <KeyTable
          title="Roles in a panel"
          head={["Role", "What the person does"]}
          aria="Roles in a panel. Chairperson: Introduces the topic and speakers and guides the talk. Panel speaker: Speaks on one aspect of the topic. Audience: Listens and may ask questions. Timekeeper: Helps the chairperson to keep to time. Duration: About 20 to 30 minutes."
          rows={[["Chairperson", "Introduces the topic and speakers and guides the talk"], ["Panel speaker", "Speaks on one aspect of the topic"], ["Audience", "Listens and may ask questions"], ["Timekeeper", "Helps the chairperson to keep to time"], ["Duration", "About 20 to 30 minutes"]]}
        />
        <Worked
          steps={[
            <>A panel on teenage health has three speakers: one on sleep, one on food and one on exercise.</>,
            <>Each speaker keeps to their own aspect and does not repeat the others.</>,
          ]}
        />
        <Mistake>Choosing the same aspect as another speaker. Divide the topic before the panel starts.</Mistake>
      </>,
    ),
  },
  {
    title: "The chairperson",
    content: slide(
      <>
        <Rule>The chairperson makes a panel work. They keep order, manage time and keep to the agenda. They encourage everyone to take part, stay neutral and call for a proposal or a vote when one is needed.</Rule>
        <KeyTable
          title="Duties of the chairperson"
          head={["Duty", "Example"]}
          aria="Duties of the chairperson. Keep order: Ask one speaker at a time to talk. Manage time: Give each speaker about five minutes. Keep to the agenda: Return to the topic when it drifts. Encourage participation: Invite a quiet member to speak. Remain neutral: Do not argue one side. Call for votes: Ask for a proposal and a vote."
          rows={[["Keep order", "Ask one speaker at a time to talk"], ["Manage time", "Give each speaker about five minutes"], ["Keep to the agenda", "Return to the topic when it drifts"], ["Encourage participation", "Invite a quiet member to speak"], ["Remain neutral", "Do not argue one side"], ["Call for votes", "Ask for a proposal and a vote"]]}
        />
        <Worked
          steps={[
            <>The chairperson notices one speaker has spoken for ten minutes and politely moves on to the next.</>,
            <>A panel member starts a new topic, and the chairperson returns to the agenda.</>,
          ]}
        />
        <Mistake>A chairperson giving a personal opinion on the topic. The chairperson stays neutral.</Mistake>
      </>,
    ),
  },
  {
    title: "Conventional phrases and listening",
    content: slide(
      <>
        <Rule>Panels use fixed polite phrases, such as Thank you, Chairperson, and I would like to add. Listen for appreciation and interaction: respond to body language, show respect for cultural conventions and ask questions that keep the conversation going.</Rule>
        <KeyTable
          title="Useful phrases"
          head={["Purpose", "Example phrase"]}
          aria="Useful phrases. Address the chair: Thank you, Chairperson. Agree and add: I would like to add to that point. Disagree politely: I see it differently, because. Ask a question: Could you explain what you mean by that?. Close: To sum up, the main points were."
          rows={[["Address the chair", "Thank you, Chairperson"], ["Agree and add", "I would like to add to that point"], ["Disagree politely", "I see it differently, because"], ["Ask a question", "Could you explain what you mean by that?"], ["Close", "To sum up, the main points were"]]}
        />
        <Worked
          steps={[
            <>You begin with Thank you, Chairperson, state your view and give one example.</>,
            <>You disagree politely by saying that you see it differently, and then give a reason.</>,
          ]}
        />
        <Mistake>Using rude language to win a point. Conventional phrases keep the discussion respectful.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does a panel speaker talk about?</>,
          <>Name two duties of the chairperson.</>,
          <>How long does a panel discussion last?</>,
          <>What does negotiating mean?</>,
        ]}
        answers={[
          <>One aspect of the topic.</>,
          <>Keeping order and managing time.</>,
          <>About 20 to 30 minutes.</>,
          <>Looking for a fair middle way.</>,
        ]}
      />,
    ),
  },
];
