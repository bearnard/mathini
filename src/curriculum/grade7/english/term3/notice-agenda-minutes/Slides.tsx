import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "A notice",
    content: slide(
      <>
        <Rule>A notice gives information to a group of people. It is short and easy to read. It has a heading that says what it is about, the important facts (what, when and where), the name of the person or group who issued it, a contact if needed, and the date that it was written. Use large, clear lettering for the heading.</Rule>
        <KeyTable
          title={"Parts of a notice"}
          head={["Part", "Example"]}
          aria={"Parts of a notice. heading: Choir Practice. what, when, where: Friday at 14:00 in the school hall. who: Mrs Pillay, music teacher. date issued: 3 May."}
          rows={[["heading", "Choir Practice"], ["what, when, where", "Friday at 14:00 in the school hall"], ["who", "Mrs Pillay, music teacher"], ["date issued", "3 May"]]}
        />
        <Worked
          title={"Write a notice"}
          steps={[
            <>Heading: Choir Practice.</>,
            <>Facts: All choir members, Friday at 14:00 in the school hall. Issued by Mrs Pillay on 3 May.</>,
          ]}
        />
        <Mistake>Leaving out the time or the place. The reader needs both.</Mistake>
      </>,
    ),
  },
  {
    title: "An agenda",
    content: slide(
      <>
        <Rule>An agenda is a list of the items that a meeting will discuss, in the order in which they will be discussed. It is sent before the meeting so that people can prepare. An agenda has the name of the group, the date, time and place, and numbered items. Typical items are: welcome and apologies, minutes of the last meeting, matters to discuss, other business and closure.</Rule>
        <KeyTable
          title={"Parts of an agenda"}
          head={["Item", "Purpose"]}
          aria={"Parts of an agenda. welcome and apologies: greet people and note who is absent. minutes of the last meeting: check what was recorded last time. matters to discuss: the main topics. other business: anything else. closure: end the meeting."}
          rows={[["welcome and apologies", "greet people and note who is absent"], ["minutes of the last meeting", "check what was recorded last time"], ["matters to discuss", "the main topics"], ["other business", "anything else"], ["closure", "end the meeting"]]}
        />
        <Worked
          title={"Order an agenda"}
          steps={[
            <>1. Welcome and apologies.</>,
            <>2. Minutes of the last meeting. 3. The school fete. 4. Other business. 5. Closure.</>,
          ]}
        />
        <Mistake>Writing an agenda as a paragraph. List the items in order.</Mistake>
      </>,
    ),
  },
  {
    title: "Minutes",
    content: slide(
      <>
        <Rule>Minutes are the official record of a meeting. They are written after the meeting. Minutes give the name of the group, the date, time and place, who was present and who sent apologies, what was discussed, what was decided, who must do what, and when the meeting closed. They are written in the past tense and in a neutral, clear style.</Rule>
        <KeyTable
          title={"Parts of minutes"}
          head={["Part", "What it records"]}
          aria={"Parts of minutes. present and apologies: names of people who came and who did not. discussion: what was said, briefly. decisions: what was agreed. action: who must do what."}
          rows={[["present and apologies", "names of people who came and who did not"], ["discussion", "what was said, briefly"], ["decisions", "what was agreed"], ["action", "who must do what"]]}
        />
        <Worked
          title={"Record a decision"}
          steps={[
            <>Discussed: the date of the fete.</>,
            <>Decided: The fete will be held on 20 June. Action: Thabo will book the hall.</>,
          ]}
        />
        <Mistake>Recording every word that people said. Minutes give the main points and decisions.</Mistake>
      </>,
    ),
  },
  {
    title: "Choosing the right text",
    content: slide(
      <>
        <Rule>Choose the text that suits your purpose and audience. Use a notice to announce something to many people. Use an agenda to plan a meeting before it starts. Use minutes to record the meeting after it has finished. Keep the language formal and clear, and check names, dates and times.</Rule>
        <KeyTable
          title={"Which text?"}
          head={["Purpose", "Text"]}
          aria={"Which text?. announce an event to many people: notice. plan a meeting before it starts: agenda. record what happened at a meeting: minutes."}
          rows={[["announce an event to many people", "notice"], ["plan a meeting before it starts", "agenda"], ["record what happened at a meeting", "minutes"]]}
        />
        <Worked
          title={"Choose a text"}
          steps={[
            <>You want to tell the school about a tournament: write a notice.</>,
            <>You want to record who agreed to organise it: write minutes.</>,
          ]}
        />
        <Mistake>Using minutes before the meeting. Minutes are written after it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which text lists the items to discuss at a meeting?</>,
          <>Which tense do minutes use?</>,
          <>What does a notice announce?</>,
          <>When are minutes written?</>,
        ]}
        answers={[
          <>An agenda.</>,
          <>The past tense.</>,
          <>Information for a group.</>,
          <>After the meeting.</>,
        ]}
      />,
    ),
  },
];
