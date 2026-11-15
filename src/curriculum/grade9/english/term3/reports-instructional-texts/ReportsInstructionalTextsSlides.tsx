import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { BoxStack } from '../../../../../components/diagrams/english/g9Pictures';
import { AUDIENCE, CHECK_ORDER, JUMBLED, REPORT_PARTS, TEA_BUNDLED, TEA_STEPS, VOICE, sortReport } from '../../../../../components/diagrams/english/reportText';

// The report parts, instruction steps and rewrites come from reportText.ts (tested in reportText.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const partLabel = (id: string) => REPORT_PARTS.find((p) => p.id === id)?.label ?? id;
const sorted = sortReport(JUMBLED).map(partLabel);
const checkSorted = sortReport(CHECK_ORDER).map(partLabel);

export const learnSteps: LearnStep[] = [
  {
    title: 'A report informs, in a set order',
    content: slide(
      <>
        <Rule>A report presents information clearly and objectively. Clear headings and a logical organisation help the reader find each fact quickly.</Rule>
        <BoxStack items={REPORT_PARTS} aria="A report from top to bottom: title, introduction, sections with headings, conclusion." />
        <Worked
          title="Put the parts in order"
          steps={[
            <>You are given the parts jumbled: {JUMBLED.map(partLabel).join(', ')}.</>,
            <>A reader needs to know the topic first, then the purpose, then the facts, then what they show.</>,
            <>Correct order: <strong>{sorted.join(' → ')}</strong>.</>,
          ]}
        />
        <Mistake>Writing a report like a story, with a surprise ending. A report is not there to entertain. The reader should never have to hunt for the facts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Third person keeps it objective',
    content: slide(
      <>
        <Rule>A report uses the third person (he, she, it, they, or the name of the thing) and states facts. This keeps the tone formal and unbiased.</Rule>
        <Worked
          title="Rewrite an opinion as a report sentence"
          steps={[
            <>Opinion in the first person: “{VOICE.first}”</>,
            <>Remove I, my and the feelings (think, hate). Keep what can be seen: where the litter was.</>,
            <>Report sentence: <strong>“{VOICE.third}”</strong></>,
          ]}
        />
        <Mistake>Using “I” and emotional words in a report. Opinions such as “I hate the litter” belong in a personal letter, not in a report.</Mistake>
      </>,
    ),
  },
  {
    title: 'Audience and purpose decide the detail',
    content: slide(
      <>
        <Rule>Before you write, ask: who will read this, and why? The audience decides how much detail, which words and what layout you use.</Rule>
        <Worked
          title="One fact, two audiences"
          steps={[
            <>Fact: recycling bins were placed at the gate.</>,
            <>For Grade 8 learners, a short command: “{AUDIENCE.learners}”</>,
            <>For the principal, a formal report line: “{AUDIENCE.principal}”</>,
            <>The purpose changed (to instruct, then to inform), so the words and the detail changed too.</>,
          ]}
        />
        <Mistake>Believing one text suits every reader. Technical terms only experts know will lose a general audience, and too little detail will fail an expert.</Mistake>
      </>,
    ),
  },
  {
    title: 'Instructions: numbered steps and command verbs',
    content: slide(
      <>
        <Rule>Instructions use numbered steps, in the order they must happen. Each step starts with an imperative verb, a command such as “Boil” or “Pour”, and holds one action.</Rule>
        <Worked
          title="How to make rooibos tea"
          steps={TEA_STEPS.map((s) => <>{s}</>)}
        />
        <Mistake>Bundling steps into one long sentence: “{TEA_BUNDLED}” The reader loses their place. Split it into steps, one action each, in the right order.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Put in order: {CHECK_ORDER.map(partLabel).join(', ')}.</>,
          <>Which point of view does a report use?</>,
          <>Which word makes “Open the box.” an instruction?</>,
          <>A Grade 8 notice and a report for the principal share a topic but not their wording. Why?</>,
        ]}
        answers={[
          <>{checkSorted.join(', ')}.</>,
          <>The third person, to stay objective.</>,
          <>“Open”, an imperative (command) verb.</>,
          <>The audience and purpose are different, so the detail and vocabulary must differ.</>,
        ]}
      />,
    ),
  },
];

