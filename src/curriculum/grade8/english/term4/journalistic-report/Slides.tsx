import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a news report is",
    content: slide(
      <>
        <Rule>A journalistic (news) report tells readers what has happened, as accurately and objectively as possible. It is based on facts that can be checked and on named sources. The writer keeps their own opinion out.</Rule>
        <KeyTable
          title="Features of a news report"
          head={["Feature", "Meaning"]}
          aria="Features of a news report. Headline: Short summary of the news. Lead: The key facts: who, what, where, when, why. Facts first: The most important facts come first. Sources: Named people, officials or documents. Objective: No personal opinion; fair to all sides. Past tense: Reports what happened."
          rows={[["Headline", "Short summary of the news"], ["Lead", "The key facts: who, what, where, when, why"], ["Facts first", "The most important facts come first"], ["Sources", "Named people, officials or documents"], ["Objective", "No personal opinion; fair to all sides"], ["Past tense", "Reports what happened"]]}
        />
        <Worked
          steps={[
            <>A report on a fire gives the place, the time, the damage and what the fire brigade said.</>,
            <>If two sides disagree, a fair report gives both sides.</>,
          ]}
        />
        <Mistake>Adding your own opinion or emotional words. Report, do not judge.</Mistake>
      </>,
    ),
  },
  {
    title: "A model news report",
    content: slide(
      <>
        <Rule>Read the model. Notice the headline, the lead with the main facts, and a named source.</Rule>
        <KeyTable
          title="Labelled parts"
          head={["Part", "In the model"]}
          aria="Labelled parts. Headline: Taxi rank closed after flooding. Lead: What closed, where, when and why. Source 1: The municipality. Source 2: Rank marshal Peter Jacobs. Outcome: Reopens on Thursday."
          rows={[["Headline", "Taxi rank closed after flooding"], ["Lead", "What closed, where, when and why"], ["Source 1", "The municipality"], ["Source 2", "Rank marshal Peter Jacobs"], ["Outcome", "Reopens on Thursday"]]}
        />
        <ModelText label="Model news report" note="An original model written for this lesson, with invented names, places and figures.">
          <p>Taxi rank closed after flooding</p>
          <p>By Mpho Khumalo</p>
          <p>The Mthatha central taxi rank was closed yesterday morning after heavy rain flooded the area, the municipality said.</p>
          <p>About 300 commuters were stranded, according to rank marshal Peter Jacobs. Buses were sent to carry them home.</p>
          <p>The municipality said that the rank would be open again on Thursday, once the water had been pumped out.</p>
        </ModelText>
        <Worked
          steps={[
            <>The report names its sources so readers can judge them.</>,
            <>Everything is in the past tense, except the future plan.</>,
          ]}
        />
        <Mistake>Giving facts with no source. Readers must know where facts came from.</Mistake>
      </>,
    ),
  },
  {
    title: "News report or article?",
    content: slide(
      <>
        <Rule>A news report sticks to facts and is objective. An article may give background, description and sometimes the writer's view, and it may be longer. Know which one the task asks for.</Rule>
        <KeyTable
          title="Report and article compared"
          head={["Feature", "Report or article"]}
          aria="Report and article compared. Purpose: Report: say what happened. Article: inform, explain or entertain. Tone: Report: objective. Article: may be personal. Opinion: Report: none from the writer. Article: may be included. Length: Report: short. Article: often longer."
          rows={[["Purpose", "Report: say what happened. Article: inform, explain or entertain"], ["Tone", "Report: objective. Article: may be personal"], ["Opinion", "Report: none from the writer. Article: may be included"], ["Length", "Report: short. Article: often longer"]]}
        />
        <Worked
          steps={[
            <>A report on a sports result gives the score and who scored. An article may describe the feeling in the stadium.</>,
            <>In an exam, the instruction tells which you must write.</>,
          ]}
        />
        <Mistake>Writing a report in the style of a story. A report gives facts first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Describe the tone of a news report.</>,
          <>What does the lead of a news report contain?</>,
          <>Why name sources?</>,
          <>In which tense is a news report written?</>,
        ]}
        answers={[
          <>Accurate and objective.</>,
          <>The key facts: who, what, where, when and why.</>,
          <>So readers know where the facts come from.</>,
          <>The past tense.</>,
        ]}
      />,
    ),
  },
];
