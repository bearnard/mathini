import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ShareBar, StepFlow } from '../../../../../components/diagrams/english/WritingPictures';
import { ESSAY_STRUCTURE, EXAM_STAGES, EXAM_TOTAL, splitMinutes } from '../../../../../components/diagrams/english/writing';

// The minutes in the time plan come from splitMinutes (writing.test.ts).
const mins = splitMinutes(EXAM_TOTAL, EXAM_STAGES.map((s) => s.share));
const [planMin, writeMin, editMin] = mins;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Plan before you write',
    content: slide(
      <>
        <Rule>In a timed exam, read the question and plan first. A short plan saves time and keeps your writing organised.</Rule>
        <ShareBar
          parts={EXAM_STAGES.map((s, i) => ({ label: s.label, color: s.color, value: mins[i], sub: `${mins[i]} min` }))}
          aria={`A ${EXAM_TOTAL}-minute writing task split into three bars: plan ${planMin} minutes, write ${writeMin} minutes, edit ${editMin} minutes.`}
        />
        <Worked
          title={`A ${EXAM_TOTAL}-minute writing task`}
          steps={[
            <>Plan: {planMin} minutes to read the question and jot down key points and a structure.</>,
            <>Write: {writeMin} minutes for the answer itself.</>,
            <>Edit: {editMin} minutes to check grammar, punctuation and the task.</>,
          ]}
        />
        <Mistake>Starting to write at once without reading the prompt properly. You may answer the wrong question, lose your order of ideas and have no time left to check.</Mistake>
      </>,
    ),
  },
  {
    title: 'Read the task: form, audience, purpose',
    content: slide(
      <>
        <Rule>Audience and purpose guide your tone, detail and format. Underline them in the question before you plan.</Rule>
        <Worked
          title="Write an email to the principal to complain that the library is closed at break."
          steps={[
            <>Text form: an email (transactional writing), so use email conventions.</>,
            <>Audience: the principal. Purpose: to complain.</>,
            <>Register: formal, so polite and precise, with no slang.</>,
          ]}
        />
        <Mistake>
          Writing a formal complaint in casual, slang-heavy language, or a funny, poetic piece. A formal complaint needs respectful, clear wording.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Match the structure to the text type',
    content: slide(
      <>
        <Rule>An essay needs an introduction, body paragraphs and a conclusion. A transactional text (letter, email, notice) needs the conventions of its own format.</Rule>
        <StepFlow
          steps={ESSAY_STRUCTURE.map((s, i) => ({ label: s.label, color: s.color, sub: ['opens the topic', 'one idea each', 'rounds off'][i] }))}
          aria="Three boxes in a row for an essay: Introduction, Body paragraphs, Conclusion."
        />
        <Worked
          title="The question says “Write an essay on school sport.”"
          steps={[
            <>It asks for an essay, so do not switch to a letter.</>,
            <>Introduction: say what you will discuss.</>,
            <>Body: one paragraph for each main idea. Conclusion: sum up.</>,
          ]}
        />
        <Mistake>Writing unlinked bullet points, or no paragraphs at all. Paragraphs show that your ideas develop in a logical order.</Mistake>
      </>,
    ),
  },
  {
    title: 'Edit, then check the task',
    content: slide(
      <>
        <Rule>Keep time to correct grammar and punctuation. Last of all, confirm that you answered the exact task asked.</Rule>
        <Worked
          title="Edit this sentence."
          steps={[
            <>Draft: <em>we was late for the bus and the driver didnt wait</em></>,
            <>Capital letter at the start. “We was” becomes “we were”. Add an apostrophe in “didn’t” and a full stop.</>,
            <>Edited: <strong>We were late for the bus, and the driver didn’t wait.</strong></>,
          ]}
        />
        <Mistake>Using the last minutes to add unrelated new ideas or rewrite in a different genre. Editing is for fixing errors and checking the task, not starting again.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What should you do first in a timed writing exam?" answer="Read the prompt, then plan key points and structure briefly." />
        <Check question="The task asks for a formal complaint email. Which register do you use?" answer="Polite and precise, with no slang." />
        <Check question="Which structure does an essay need?" answer="An introduction, body paragraphs and a conclusion." />
        <Check question="What is the most useful final check before you hand in?" answer="Confirm that you answered the exact task asked." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What should you do first in a timed writing exam?',
    options: ['plan key points and structure briefly', 'start writing without reading the prompt', 'memorise punctuation names', 'copy the question repeatedly'],
    answer: 'plan key points and structure briefly',
    explanation: 'Short planning saves time and improves organisation.',
  },
  {
    prompt: 'A transactional writing task usually requires...',
    options: ['specific format conventions', 'free verse line breaks', 'story climax analysis only', 'headline statistics only'],
    answer: 'specific format conventions',
    explanation: 'Transactional texts follow recognised structures for purpose.',
  },
  {
    prompt: 'Why is time management important in exam writing?',
    options: ['It ensures all sections are attempted and checked.', 'It removes the need for planning.', 'It guarantees perfect marks automatically.', 'It replaces language knowledge.'],
    answer: 'It ensures all sections are attempted and checked.',
    explanation: 'Managing time helps complete tasks and allows editing.',
  },
  {
    prompt: 'Which register suits a formal complaint email?',
    options: ['polite and precise', 'casual slang-heavy', 'comic exaggerated dialogue', 'highly poetic and abstract'],
    answer: 'polite and precise',
    explanation: 'Formal tasks require respectful, clear language.',
  },
  {
    prompt: 'What is a strong reason to leave time for editing?',
    options: ['to correct grammar and punctuation errors', 'to add unrelated new ideas', 'to rewrite in a different genre', 'to shorten every answer to one line'],
    answer: 'to correct grammar and punctuation errors',
    explanation: 'Editing improves clarity and technical accuracy.',
  },
  {
    prompt: 'If a question asks for an essay, the best approach is to...',
    options: ['use an introduction, body paragraphs and a conclusion', 'write bullet points that are not linked at all', 'switch to the format of a letter instead', 'ignore paragraphing from start to finish'],
    answer: 'use an introduction, body paragraphs and a conclusion',
    explanation: 'Essay structure supports logical development of ideas.',
  },
  {
    prompt: 'What does "audience and purpose" guide in exam writing?',
    options: ['tone, detail and format choices', 'font colour only', 'page margins only', 'word count guessing only'],
    answer: 'tone, detail and format choices',
    explanation: 'Audience and purpose shape communication decisions.',
  },
  {
    prompt: 'Which final check is most useful before handing in?',
    options: ['confirm you answered the exact task asked', 'remove every punctuation mark', 'change topic in conclusion', 'erase planning notes from memory only'],
    answer: 'confirm you answered the exact task asked',
    explanation: 'Task alignment is essential for scoring criteria.',
  },
];

const ExaminationWriting = () => (
  <CapsSubjectTopic
    title="Examination Writing"
    subtitle="Timed planning, text-type selection and fast editing for exam success"
    learnSteps={learnSteps}
    task="gr8-examination-writing-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ExaminationWriting;
