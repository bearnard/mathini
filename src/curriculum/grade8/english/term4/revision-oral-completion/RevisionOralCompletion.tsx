import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { SkimScan } from '../../../../../components/diagrams/english/WritingPictures';
import { SCAN_LINES, SCAN_TITLE, findLine } from '../../../../../components/diagrams/english/writing';

// The scanned line below is found by findLine (writing.test.ts).
const target = findLine(SCAN_LINES, 'chess');
const targetLine = SCAN_LINES[target];

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Skim first, then scan',
    content: slide(
      <>
        <Rule>Skimming gives you the overall meaning quickly. Scanning finds one specific detail, such as a name, time or place.</Rule>
        <SkimScan target={target} aria="A notice titled After-school clubs with three lines. The chess club line is highlighted for scanning. Skimming covers the whole page for the gist." />
        <Worked
          title={`Notice: “${SCAN_TITLE}”. When does the chess club meet?`}
          steps={[
            <>Skim: the title shows this notice is about club times.</>,
            <>Scan for the key word “chess”.</>,
            <>Read that line only: <strong>{targetLine}</strong>. The answer is Thursday at 14:00.</>,
          ]}
        />
        <Mistake>Answering before reading, or ignoring the title. The title orients you before you look for detail.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mixed genres need different approaches',
    content: slide(
      <>
        <Rule>Revision brings all genres together. Adapt your reading strategy to each text type, because each one asks for a different focus.</Rule>
        <ul className="space-y-1.5 rounded-xl bg-slate-50 p-4 text-left text-slate-700">
          <li><strong>Poem:</strong> images, sound and tone.</li>
          <li><strong>News report:</strong> facts and who, what, where.</li>
          <li><strong>Advertisement:</strong> how it persuades.</li>
          <li><strong>Story:</strong> character, setting and plot.</li>
        </ul>
        <Worked
          title="Two questions, two strategies"
          steps={[
            <>“Who opened the new library?” Scan a news report for the name.</>,
            <>“How does the poet feel about the sea?” Read the whole poem for tone, then find an image as evidence.</>,
          ]}
        />
        <Mistake>Using one identical approach for every text. A scanning habit will not help you find tone in a poem.</Mistake>
      </>,
    ),
  },
  {
    title: 'Timed practice and exam habits',
    content: slide(
      <>
        <Rule>Practise with short deadlines and check your answers afterwards. Read the command words and the instructions before you write.</Rule>
        <Worked
          title="Two command words"
          steps={[
            <>“List two clubs”: write two names, nothing more.</>,
            <>“Explain why the notice is useful”: give a reason in a full sentence.</>,
            <>Before you hand in: review the instructions and check that every question is answered.</>,
          ]}
        />
        <Mistake>Skipping the command words, leaving questions blank on purpose, or changing answers at the last moment without a reason.</Mistake>
      </>,
    ),
  },
  {
    title: 'Oral reflection and the portfolio',
    content: slide(
      <>
        <Rule>An oral reflection gives clear points, each backed by an example from a text you studied. In Term 4 the portfolio is finalised, so all required evidence of your progress is complete.</Rule>
        <Worked
          title="Point, example, link"
          steps={[
            <>Point: a character can learn from a mistake.</>,
            <>Example: in the story about Thandi sharing her lunch, she learns that kindness is returned.</>,
            <>Link: this shows how stories teach ideas.</>,
          ]}
        />
        <Mistake>One-word answers with no preparation. Also, the portfolio does not replace the final examinations. It is evidence alongside them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="Which strategy helps first when reading a new exam text?" answer="Skimming for the overall meaning." />
        <Check question="When is scanning useful?" answer="When you need to find a specific detail quickly." />
        <Check question="What should an oral reflection include?" answer="Clear points with examples from studied texts." />
        <Check question="What should you do before submitting your answer script?" answer="Review the instructions and check that every question is answered." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main goal of integrated revision in Term 4?',
    options: ['to consolidate skills across all genres', 'to study only one poem repeatedly', 'to avoid oral practice', 'to memorise unrelated definitions only'],
    answer: 'to consolidate skills across all genres',
    explanation: 'Revision combines multiple language and literature demands.',
  },
  {
    prompt: 'Which strategy helps first when reading a new exam text?',
    options: ['skim for overall meaning', 'copy random sentences', 'ignore the title', 'answer before reading'],
    answer: 'skim for overall meaning',
    explanation: 'Skimming gives quick orientation before detailed analysis.',
  },
  {
    prompt: 'Scanning is useful when you need to...',
    options: ['find a specific detail quickly', 'analyse theme across the whole text first', 'rewrite the text from memory', 'avoid evidence in answers'],
    answer: 'find a specific detail quickly',
    explanation: 'Scanning targets precise information like names and dates.',
  },
  {
    prompt: 'Mixed-genre questions require learners to...',
    options: ['adapt reading strategies to each text type', 'use one identical approach always', 'ignore differences between genres', 'focus only on handwriting style'],
    answer: 'adapt reading strategies to each text type',
    explanation: 'Different genres demand different analytical focus.',
  },
  {
    prompt: 'An oral reflection response should include...',
    options: ['clear points with examples from studied texts', 'single-word answers and nothing more', 'no preparation and no structure', 'jokes that have no link to the text'],
    answer: 'clear points with examples from studied texts',
    explanation: 'Evidence-based oral responses show understanding and organisation.',
  },
  {
    prompt: 'Why is portfolio completion important in Term 4?',
    options: ['It finalises required evidence of progress.', 'It replaces final examinations.', 'It removes language revision.', 'It is only for attendance records.'],
    answer: 'It finalises required evidence of progress.',
    explanation: 'Portfolio evidence supports assessment requirements.',
  },
  {
    prompt: 'Which habit improves timed revision practice?',
    options: ['setting short task deadlines and checking answers', 'reading without any sense of the time', 'skipping the command words in the questions', 'using guesswork and nothing else'],
    answer: 'setting short task deadlines and checking answers',
    explanation: 'Time-managed practice builds exam readiness.',
  },
  {
    prompt: 'What should you do before submitting an answer script?',
    options: ['review the instructions and check completeness', 'leave some questions blank on purpose', 'remove all of the punctuation', 'change all the final answers at the last moment'],
    answer: 'review the instructions and check completeness',
    explanation: 'Final checks catch omissions and instruction errors.',
  },
];

const RevisionOralCompletion = () => (
  <CapsSubjectTopic
    title="Revision and Oral Completion"
    subtitle="Mixed-genre revision, exam readiness and final oral evidence"
    learnSteps={learnSteps}
    task="gr8-revision-oral-completion-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default RevisionOralCompletion;
