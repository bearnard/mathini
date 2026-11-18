import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Report or review?",
    content: slide(
      <>
        <Rule>A prepared oral report gives facts about an event, a project or a topic in an objective way. A review gives your judgement of a book, film or event, supported with evidence. Either task lasts 4 to 5 minutes and is delivered as a prepared speech.</Rule>
        <KeyTable
          title="Report and review compared"
          head={["Feature", "Report"]}
          aria="Report and review compared. Purpose: Report: inform. Review: judge. Tone: Report: objective. Review: personal but fair. Content: Report: facts and findings. Review: summary and evaluation. Evidence: Report: sources and figures. Review: examples from the work. Time: Both: 4 to 5 minutes."
          rows={[["Purpose", "Report: inform. Review: judge"], ["Tone", "Report: objective. Review: personal but fair"], ["Content", "Report: facts and findings. Review: summary and evaluation"], ["Evidence", "Report: sources and figures. Review: examples from the work"], ["Time", "Both: 4 to 5 minutes"]]}
        />
        <Worked
          steps={[
            <>You report on a school recycling project: how it began, what was collected and what was learnt.</>,
            <>You review a film: what it is about, what worked, what did not and who should see it.</>,
          ]}
        />
        <Mistake>Telling the whole plot of a film. A review gives a short summary and then your evaluation.</Mistake>
      </>,
    ),
  },
  {
    title: "Structure of an oral report",
    content: slide(
      <>
        <Rule>A good report has an introduction that says what the report covers, a body organised under clear headings and a conclusion that sums up the findings and may recommend action. Use facts and figures, and say where they came from. Speak in the third person where you can.</Rule>
        <KeyTable
          title="Structure of a report"
          head={["Part", "What it does"]}
          aria="Structure of a report. Introduction: States the topic and purpose. Body: Findings in a logical order. Evidence: Facts, figures and sources. Conclusion: Sums up and may recommend action. Language: Formal and objective."
          rows={[["Introduction", "States the topic and purpose"], ["Body", "Findings in a logical order"], ["Evidence", "Facts, figures and sources"], ["Conclusion", "Sums up and may recommend action"], ["Language", "Formal and objective"]]}
        />
        <Worked
          steps={[
            <>A report on a school clean-up opens with the aim, then covers date, helpers and results, and ends with a recommendation.</>,
            <>You mention that the figures come from the teacher’s record.</>,
          ]}
        />
        <Mistake>Mixing opinions into the facts. Keep facts and opinions apart in a report.</Mistake>
      </>,
    ),
  },
  {
    title: "Structure of an oral review",
    content: slide(
      <>
        <Rule>A review opens by naming the work and its creator, gives a short summary without spoiling the ending and then evaluates it. You explain what you liked or disliked, support each point with an example and end with a recommendation. Fair, balanced language is more convincing than extreme praise or insults.</Rule>
        <KeyTable
          title="Structure of a review"
          head={["Part", "What it does"]}
          aria="Structure of a review. Opening: Name the work and its creator. Summary: Briefly say what it is about. Evaluation: Strengths and weaknesses with examples. Recommendation: Who should read or see it. Language: Balanced and specific."
          rows={[["Opening", "Name the work and its creator"], ["Summary", "Briefly say what it is about"], ["Evaluation", "Strengths and weaknesses with examples"], ["Recommendation", "Who should read or see it"], ["Language", "Balanced and specific"]]}
        />
        <Worked
          steps={[
            <>You review a novel by naming it, summarising the first part, praising the setting with an example and saying who would enjoy it.</>,
            <>You avoid revealing the ending.</>,
          ]}
        />
        <Mistake>Saying it was good or boring with no examples. Back each opinion with evidence.</Mistake>
      </>,
    ),
  },
  {
    title: "Delivery and time",
    content: slide(
      <>
        <Rule>You deliver a prepared report or review using notes, not a full script. Speak clearly, keep eye contact and use your voice to stress key points. Use visual aids only if they help, and practise with a timer so that you finish within 4 to 5 minutes.</Rule>
        <KeyTable
          title="Delivery checklist"
          head={["Item", "Reminder"]}
          aria="Delivery checklist. Notes: Short cue cards, not a script. Voice: Clear, with stress on key points. Eye contact: Look at the audience. Aids: Only if they help the audience. Timing: Finish within 4 to 5 minutes."
          rows={[["Notes", "Short cue cards, not a script"], ["Voice", "Clear, with stress on key points"], ["Eye contact", "Look at the audience"], ["Aids", "Only if they help the audience"], ["Timing", "Finish within 4 to 5 minutes"]]}
        />
        <Worked
          steps={[
            <>You practise your review twice with a timer and cut a long summary to stay within time.</>,
            <>You glance at your cue card and then look up when you speak.</>,
          ]}
        />
        <Mistake>Going over time. Practise with a timer and cut the least important point.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does a report give?</>,
          <>What does a review give?</>,
          <>How long is each task?</>,
          <>What comes before the evaluation in a review?</>,
        ]}
        answers={[
          <>Facts about a topic, objectively.</>,
          <>A judgement supported by evidence.</>,
          <>About 4 to 5 minutes.</>,
          <>A short summary of the work.</>,
        ]}
      />,
    ),
  },
];
