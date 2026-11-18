import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Skills, styles and strategies",
    content: slide(
      <>
        <Rule>A study skill is something you do to learn, such as reading actively or making notes. A study style is the way you prefer to learn, such as by seeing, hearing, reading and writing, or doing. A study strategy is the plan you choose for a specific task, depending on what the task demands. Check how well each one works for you.</Rule>
        <KeyTable
          title="Three different ideas"
          head={["Idea", "Meaning"]}
          aria="Three different ideas. Study skill: A learning action, such as summarising. Study style: Your preferred way to learn. Study strategy: The approach you choose for one task. Visual style: You learn well from diagrams and colours. Auditory style: You learn well by listening and talking. Kinaesthetic style: You learn well by doing and practising."
          rows={[["Study skill", "A learning action, such as summarising"], ["Study style", "Your preferred way to learn"], ["Study strategy", "The approach you choose for one task"], ["Visual style", "You learn well from diagrams and colours"], ["Auditory style", "You learn well by listening and talking"], ["Kinaesthetic style", "You learn well by doing and practising"]]}
        />
        <Worked
          steps={[
            <>You learn well from diagrams, so for a science topic you draw a mind map. The mind map is your strategy for that task.</>,
            <>You notice that reading silently is not working, so you read aloud as well.</>,
          ]}
        />
        <Mistake>Thinking that only one study style is correct. Different people learn in different ways, and you can combine styles.</Mistake>
      </>,
    ),
  },
  {
    title: "Strategies that work",
    content: slide(
      <>
        <Rule>Good strategies are active. You make summaries and mind maps, test yourself with questions, do past papers, explain a topic to someone else and revise in short sessions spread over days. Passive strategies, such as only re-reading, work less well.</Rule>
        <KeyTable
          title="Active and passive strategies"
          head={["Active", "Passive"]}
          aria="Active and passive strategies. Write a summary in your own words: Re-read the notes once more. Test yourself with past papers: Highlight every line. Explain a topic to a friend: Copy the textbook. Make a mind map: Wait until the night before. Revise in short sessions over days: Study for hours without a break."
          rows={[["Write a summary in your own words", "Re-read the notes once more"], ["Test yourself with past papers", "Highlight every line"], ["Explain a topic to a friend", "Copy the textbook"], ["Make a mind map", "Wait until the night before"], ["Revise in short sessions over days", "Study for hours without a break"]]}
        />
        <Worked
          steps={[
            <>You write five questions on a topic and answer them from memory, then check your notes.</>,
            <>You study for 30 minutes, rest for 5 and then continue.</>,
          ]}
        />
        <Mistake>Leaving all revision for the night before. Spread revision over days so that it stays in your memory.</Mistake>
      </>,
    ),
  },
  {
    title: "Writing an exam",
    content: slide(
      <>
        <Rule>Exam skills are part of your preparation. Read all the instructions, check how many marks each question has, plan your time and leave a few minutes at the end to check your work. A useful rule is to match your time to the marks. If a paper has 60 marks and lasts 90 minutes, you have about 1,5 minutes for each mark.</Rule>
        <KeyTable
          title="Exam skills"
          head={["Skill", "Why it helps"]}
          aria="Exam skills. Read the instructions: You answer the right number of questions. Look at the mark allocation: Longer answers for more marks. Plan your time: You finish every section. Start with a question you know: Builds confidence. Check your work: You catch careless mistakes."
          rows={[["Read the instructions", "You answer the right number of questions"], ["Look at the mark allocation", "Longer answers for more marks"], ["Plan your time", "You finish every section"], ["Start with a question you know", "Builds confidence"], ["Check your work", "You catch careless mistakes"]]}
        />
        <Worked
          steps={[
            <>A question is worth 6 marks, so you spend about 9 minutes on it (6 x 1,5 minutes).</>,
            <>You tick the questions you have answered so that you do not miss any.</>,
          ]}
        />
        <Mistake>Spending half the time on a 2 mark question. Match your time to the marks.</Mistake>
      </>,
    ),
  },
  {
    title: "Your annual study plan",
    content: slide(
      <>
        <Rule>An annual plan helps you manage time all year. Write down your test and exam dates, divide big topics into small parts, and place them on a weekly timetable with time for rest and exercise. Set goals that are specific and measurable, and review your plan every few weeks.</Rule>
        <KeyTable
          title="Building an annual plan"
          head={["Step", "What you do"]}
          aria="Building an annual plan. List dates: Tests, exams and projects for the year. Break topics down: Small parts that fit into a week. Make a weekly timetable: Study blocks, rest and exercise. Set goals: Specific and measurable, such as 3 past papers a month. Review: Check progress and adjust."
          rows={[["List dates", "Tests, exams and projects for the year"], ["Break topics down", "Small parts that fit into a week"], ["Make a weekly timetable", "Study blocks, rest and exercise"], ["Set goals", "Specific and measurable, such as 3 past papers a month"], ["Review", "Check progress and adjust"]]}
        />
        <Worked
          steps={[
            <>You put your June exam on the calendar, then work backwards to schedule revision for each subject.</>,
            <>Your goal is to complete two past papers a week in the month before the exam.</>,
          ]}
        />
        <Mistake>Making a perfect plan and never looking at it again. Review and change it when things shift.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a study style?</>,
          <>Name one active study strategy.</>,
          <>How many minutes per mark for a 60 mark, 90 minute paper?</>,
          <>What do you list first in an annual study plan?</>,
        ]}
        answers={[
          <>Your preferred way of learning.</>,
          <>Making a mind map or testing yourself.</>,
          <>1,5 minutes.</>,
          <>Your test and exam dates.</>,
        ]}
      />,
    ),
  },
];
