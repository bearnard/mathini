import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { SkimScan } from '../../../../../components/diagrams/english/g9Pictures';
import { EVIDENCE, INFERENCE, PARAGRAPHS, SUMMARY, scan, skim, totalWords, wordCount } from '../../../../../components/diagrams/english/readingStrategies';

// The passage and the strategies run on it come from readingStrategies.ts (tested in readingStrategies.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const skimmed = skim(PARAGRAPHS);
const found = scan(PARAGRAPHS, 'spinach');
const totalW = totalWords(PARAGRAPHS);

export const learnSteps: LearnStep[] = [
  {
    title: 'Skim for the idea, scan for the fact',
    content: slide(
      <>
        <Rule>Skimming means reading quickly to get the main idea. Scanning means running your eyes over the text to find one exact detail, without reading every word.</Rule>
        <SkimScan keyword="spinach" />
        <Worked
          title="A three-paragraph passage about a school garden"
          steps={[
            <>Skim: read only the first sentence of each paragraph. “{skimmed[0]}” “{skimmed[1]}” “{skimmed[2]}” Main idea: the school runs a garden.</>,
            <>Scan for “spinach”: jump to the sentences that contain it. There are {found.length}, in paragraphs {found.map((f) => f.paragraph + 1).join(' and ')}.</>,
          ]}
        />
        <Mistake>Memorising every word. Skimming is not for detail and scanning is not for understanding. Use the strategy that fits the question.</Mistake>
      </>,
    ),
  },
  {
    title: 'Inference: a conclusion from clues',
    content: slide(
      <>
        <Rule>An inference is a sound conclusion you reach from clues in the text. It uses what the text says plus logical reasoning. It is not a wild guess.</Rule>
        <Worked
          title="Read the clues"
          steps={[
            <>Text: “{INFERENCE.clue}”</>,
            <>Clues: she looks at the sky, then takes an umbrella.</>,
            <>Inference: <strong>{INFERENCE.conclusion}</strong> Every part of it is supported by the text.</>,
          ]}
        />
        <Mistake>Guessing without support, such as “{INFERENCE.wild}” Nothing in the text points to a beach. If you cannot point to a clue, it is not an inference.</Mistake>
      </>,
    ),
  },
  {
    title: 'Summary: your own words, main ideas',
    content: slide(
      <>
        <Rule>A summary paraphrases the main ideas in your own words. Leave out minor detail, copy no whole sentences and add no opinions.</Rule>
        <Worked
          title="Summarise the garden passage"
          steps={[
            <>The passage has {totalW} words. Main ideas: planting, watering, harvest.</>,
            <>Join them in your own words: “{SUMMARY.text}”</>,
            <>That is {wordCount(SUMMARY.text)} words, a fraction of the original, and it keeps the meaning.</>,
          ]}
        />
        <Mistake>Copying a sentence straight from the text, such as “{SUMMARY.copied}” That is quoting, not summarising, and it covers only one idea.</Mistake>
      </>,
    ),
  },
  {
    title: 'Choose the best evidence',
    content: slide(
      <>
        <Rule>When you select evidence, choose the most relevant quote, the one that directly supports your point. Longer is not better.</Rule>
        <Worked
          title="Match evidence to a point"
          steps={[
            <>Point: “{EVIDENCE.point}”</>,
            <>Best evidence: “{EVIDENCE.best}” It shows the garden feeding everyone.</>,
            <>Weak evidence: “{EVIDENCE.irrelevant}” It is true, but it says nothing about usefulness.</>,
          ]}
        />
        <Mistake>Quoting any line near your point, or the longest passage, because it sounds impressive. If the quote does not prove your point, it earns nothing.</Mistake>
      </>,
    ),
  },
  {
    title: 'Exam strategy for a mixed paper',
    content: slide(
      <>
        <Rule>For a paper with several genres, read all the questions first, then plan your time across the sections. Plan each answer before you write it, and keep time at the end to reread.</Rule>
        <Worked
          title="Your routine"
          steps={[
            <>Read every question and note which sections carry most marks.</>,
            <>Share your time across the sections. Do not spend it all on the one you like.</>,
            <>Plan each written answer so that it answers the whole question.</>,
            <>Reread: check grammar, spelling and logic before you hand in.</>,
          ]}
        />
        <Mistake>Skipping the proofreading to “save time”. Careless errors cost marks that checking would have saved.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which strategy finds one specific detail: skimming or scanning?</li>
            <li>What makes a good inference?</li>
            <li>How should a summary treat the sentences in the text?</li>
            <li>What do you do before answering a mixed-genre paper?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Scanning. Skimming gives the main idea.</li>
            <li>It is a conclusion supported by clues in the text, not a guess.</li>
            <li>Paraphrase the main ideas in your own words and leave out minor detail.</li>
            <li>Read all the questions first, then plan your time across the sections.</li>
          </ol>
        }
      />,
    ),
  },
];

