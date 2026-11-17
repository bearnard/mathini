import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Designing a good interface",
    content: slide(
      <>
        <Rule>Human-computer interaction (HCI) is about making a program easy and pleasant to use. Group related components together, label them clearly, keep the design simple, and be consistent.</Rule>
        <KeyTable
          title="HCI principles"
          head={["Principle", "Example"]}
          aria="HCI principles. Grouping: Put related controls together in one area. Clear labels: A button reads Calculate, not Go. Simplicity: Show only what the user needs. Consistency: Same colours, fonts and positions on every screen. Feedback: Show a message when something is done or wrong."
          rows={[["Grouping", "Put related controls together in one area"], ["Clear labels", "A button reads Calculate, not Go"], ["Simplicity", "Show only what the user needs"], ["Consistency", "Same colours, fonts and positions on every screen"], ["Feedback", "Show a message when something is done or wrong"]]}
        />
        <Worked
          steps={[
            <>A form for an order puts the customer details together in one panel and the item details in another.</>,
            <>If the user enters a wrong number, a clear message tells them what to fix.</>,
          ]}
        />
        <Mistake>Crowding many controls on one form with no grouping. Users cannot find what they need.</Mistake>
      </>,
    ),
  },
  {
    title: "Panels, tabbed panes and the timer",
    content: slide(
      <>
        <Rule>A panel groups controls on a form. A tabbed pane (page control) puts groups on separate tabs, so that you do not need many forms in Grade 10. A timer component raises an event at fixed intervals, so that code can run again and again, which is used for simple animation.</Rule>
        <KeyTable
          title="Components"
          head={["Component", "Use"]}
          aria="Components. Panel: Groups related controls. Tabbed pane: Several groups on one form, shown one at a time. Timer: Runs code at an interval, such as every 100 milliseconds. Interval: The time between timer events. Animation: Move an object a little at each timer event."
          rows={[["Panel", "Groups related controls"], ["Tabbed pane", "Several groups on one form, shown one at a time"], ["Timer", "Runs code at an interval, such as every 100 milliseconds"], ["Interval", "The time between timer events"], ["Animation", "Move an object a little at each timer event"]]}
        />
        <Worked
          steps={[
            <>A timer with an interval of 100 milliseconds moves a ball 5 pixels each time. In one second it moves 10 x 5 = 50 pixels.</>,
            <>The timer can be switched on and off with a button.</>,
          ]}
        />
        <Mistake>Setting the timer interval to a very small number for no reason. Too many events can make the program slow.</Mistake>
      </>,
    ),
  },
  {
    title: "Project requirements and program persistence",
    content: slide(
      <>
        <Rule>A project starts with the problem statement and research. User stories say who needs what, and the limits. A diagram gives an overview of the program. For each requirement you plan an IPO, draw a flow chart, list test cases that link to the user stories, write the code and test it. Program persistence keeps the state of the program so that it can be restored.</Rule>
        <KeyTable
          title="Planning a project"
          head={["Step", "Detail"]}
          aria="Planning a project. Problem statement: What must the program do?. Research: Find out what users need. User stories: Who, what, limits. Overview diagram: The main parts of the program. Implement each requirement: IPO, flow chart, test cases, code, test. Persistence: Save the state, such as a score, so it can be loaded later."
          rows={[["Problem statement", "What must the program do?"], ["Research", "Find out what users need"], ["User stories", "Who, what, limits"], ["Overview diagram", "The main parts of the program"], ["Implement each requirement", "IPO, flow chart, test cases, code, test"], ["Persistence", "Save the state, such as a score, so it can be loaded later"]]}
        />
        <Worked
          steps={[
            <>A quiz program saves the highest score to a file, and loads it when the program starts. This is persistence.</>,
            <>A test case for &ldquo;add VAT&rdquo;: input 100, expected output 115.</>,
          ]}
        />
        <Mistake>Writing code before the requirements are clear. Plan first, then code.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Why group related controls?</>,
          <>What does a timer do?</>,
          <>What is program persistence?</>,
          <>What is a test case?</>,
        ]}
        answers={[
          <>So users can find them easily.</>,
          <>Runs code at fixed intervals.</>,
          <>Keeping the state of a program so it can be restored.</>,
          <>An input with the output you expect.</>,
        ]}
      />,
    ),
  },
];
