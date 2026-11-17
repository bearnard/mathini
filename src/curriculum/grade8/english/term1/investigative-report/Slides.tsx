import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What an investigative report is",
    content: slide(
      <>
        <Rule>An investigative report presents what you found out when you looked into a question. You collect facts, for example with a questionnaire or an interview, and report them clearly and objectively.</Rule>
        <KeyTable
          title="Parts of the report"
          head={["Part", "What it contains"]}
          aria="Parts of the report. Title: Says what was investigated. Introduction: The question and why it matters. Method: How you collected the facts, such as a questionnaire. Findings: What you found, with numbers or facts. Conclusion: What the findings show. Recommendation: What should be done."
          rows={[["Title", "Says what was investigated"], ["Introduction", "The question and why it matters"], ["Method", "How you collected the facts, such as a questionnaire"], ["Findings", "What you found, with numbers or facts"], ["Conclusion", "What the findings show"], ["Recommendation", "What should be done"]]}
        />
        <Worked
          steps={[
            <>Question: How do learners travel to school? Method: a questionnaire given to 40 learners. Findings: 22 walk, 10 take a taxi, 8 use a bus.</>,
            <>Conclusion: more than half of the learners walk.</>,
          ]}
        />
        <Mistake>Mixing facts with opinions. Report what you found, and keep opinions for the recommendation.</Mistake>
      </>,
    ),
  },
  {
    title: "The questionnaire and the findings",
    content: slide(
      <>
        <Rule>A questionnaire is a list of questions that the same group of people answer, so that the answers can be compared. Good questions are short and clear, and give a choice of answers. Show the findings in a table or a short paragraph.</Rule>
        <KeyTable
          title="A questionnaire and results"
          head={["Item", "Example"]}
          aria="A questionnaire and results. Question: How do you travel to school? (walk, taxi, bus, car). Total asked: 40 learners. Walk: 22. Taxi: 10. Bus: 8. Check: 22 + 10 + 8 = 40."
          rows={[["Question", "How do you travel to school? (walk, taxi, bus, car)"], ["Total asked", "40 learners"], ["Walk", "22"], ["Taxi", "10"], ["Bus", "8"], ["Check", "22 + 10 + 8 = 40"]]}
        />
        <ModelText label="Model findings" note="An original model written for this lesson, with invented figures.">
          <p>Of the 40 learners who answered, 22 walk to school, 10 travel by taxi and 8 travel by bus. No learner is brought by car.</p>
          <p>This means that 55% of the learners walk (22 out of 40).</p>
        </ModelText>
        <Worked
          steps={[
            <>22 out of 40 is 22 / 40 = 0,55, which is 55%.</>,
            <>A table keeps the numbers clear, and a sentence explains what they mean.</>,
          ]}
        />
        <Mistake>Writing findings that do not add up. Check that the numbers give the total.</Mistake>
      </>,
    ),
  },
  {
    title: "Language, conclusion and recommendation",
    content: slide(
      <>
        <Rule>Use an impersonal style, in the third person and mostly the past tense for what was done and found. Use headings. Finish with a conclusion that follows from the findings and a recommendation that is practical.</Rule>
        <KeyTable
          title="Style and ending"
          head={["Feature", "Example"]}
          aria="Style and ending. Impersonal style: The learners were asked, not I asked the learners. Past tense for findings: Twenty-two learners walked. Headings: Introduction, Method, Findings, Conclusion. Conclusion: Most learners walk to school. Recommendation: Make the school path safer."
          rows={[["Impersonal style", "The learners were asked, not I asked the learners"], ["Past tense for findings", "Twenty-two learners walked"], ["Headings", "Introduction, Method, Findings, Conclusion"], ["Conclusion", "Most learners walk to school"], ["Recommendation", "Make the school path safer"]]}
        />
        <Worked
          steps={[
            <>Conclusion: more than half of the learners walk to school. Recommendation: the school should ask the municipality to improve the footpath.</>,
            <>The recommendation must follow from the findings.</>,
          ]}
        />
        <Mistake>Recommending something that the findings do not support.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a questionnaire?</>,
          <>What goes in the findings?</>,
          <>Which person is used in an impersonal style?</>,
          <>What must a recommendation follow from?</>,
        ]}
        answers={[
          <>A list of questions given to a group so the answers can be compared.</>,
          <>What you found, with numbers or facts.</>,
          <>The third person.</>,
          <>The findings.</>,
        ]}
      />,
    ),
  },
];
