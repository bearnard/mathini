import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PaperMarks } from '../../../../../components/diagrams/english/EnglishPictures';
import { CAPS_G10 } from '../../_shared/capsFacts';

/** A time plan for each 2-hour paper, in minutes. Each plan adds up to 120 (a test asserts this). */
export const PAPER1_PLAN = [
  { part: 'A: Comprehension (30 marks)', minutes: 50 },
  { part: 'B: Summary (10 marks)', minutes: 20 },
  { part: 'C: Language structures and conventions (30 marks)', minutes: 40 },
  { part: 'Check your answers', minutes: 10 },
];
export const PAPER2_PLAN = [
  { part: 'A: Poetry, seen and unseen (30 marks)', minutes: 40 },
  { part: 'B or C: Novel or drama, essay and contextual question (50 marks)', minutes: 70 },
  { part: 'Check your answers', minutes: 10 },
];
export const PAPER3_PLAN = [
  { part: 'A: Essay (50 marks), including 10 minutes of planning', minutes: 60 },
  { part: 'B: Two transactional texts (2 x 25 marks)', minutes: 50 },
  { part: 'Check your answers', minutes: 10 },
];

const Plan = ({ rows }: { rows: { part: string; minutes: number }[] }) => (
  <ul className="space-y-1 text-left text-sm text-slate-700">
    {rows.map((r) => (
      <li key={r.part} className="flex justify-between gap-3 rounded-lg bg-slate-50 px-3 py-1.5"><span>{r.part}</span><strong className="shrink-0">{r.minutes} min</strong></li>
    ))}
  </ul>
);

export const learnSteps: LearnStep[] = [
  {
    title: 'The mid-year examination',
    content: (
      <div className="space-y-4">
        <Rule>The mid-year examination is out of {CAPS_G10.midyearMarks} marks: Paper 1 ({CAPS_G10.paper1Marks}), Paper 2 ({CAPS_G10.paper2Marks}) and Paper 3 ({CAPS_G10.paper3Marks}).</Rule>
        <PaperMarks papers={[{ label: 'Paper 1: Language in context', marks: CAPS_G10.paper1Marks }, { label: 'Paper 2: Literature', marks: CAPS_G10.paper2Marks }, { label: 'Paper 3: Writing', marks: CAPS_G10.paper3Marks }]} />
        <p className="text-left text-sm text-slate-600">Each Grade 10 paper is two hours long. Paper 3 may be written in May or June. At the end of the year there is a fourth part, the oral (Paper 4, {CAPS_G10.paper4Marks} marks), which makes the year-end total 300.</p>
        <Worked
          title="Marks tell you how long to spend"
          steps={[
            <>Paper 1 has {CAPS_G10.paper1Marks} marks in 120 minutes: about 1,7 minutes for each mark.</>,
            <>A 2-mark question should take about 3 or 4 minutes, not 10.</>,
            <>Check the mark allocation of every question before you decide how much to write.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Paper 1: Language in context',
    content: (
      <div className="space-y-4">
        <Rule>Paper 1 has three sections: comprehension (30), summary (10) and language structures and conventions (30).</Rule>
        <Plan rows={PAPER1_PLAN} />
        <ul className="space-y-1 text-left text-sm text-slate-700">
          <li>The comprehension text is 500 to 600 words and may include a visual or graphic text.</li>
          <li>The summary passage is about 280 words and does not come from the comprehension text.</li>
          <li>Section C tests vocabulary, sentence structures and critical language awareness in a real text.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Paper 2: Literature',
    content: (
      <div className="space-y-4">
        <Rule>Paper 2 has poetry ({CAPS_G10.poetryMarks} marks) and then a novel or a drama ({CAPS_G10.novelDramaEssayMarks + CAPS_G10.novelDramaContextualMarks} marks).</Rule>
        <Plan rows={PAPER2_PLAN} />
        <ul className="space-y-1 text-left text-sm text-slate-700">
          <li><strong>Poetry:</strong> seen poems ({CAPS_G10.seenPoetryMarks} marks; you choose from four poems and answer two) and an unseen poem ({CAPS_G10.unseenPoetryMarks} marks).</li>
          <li><strong>Novel or drama:</strong> one essay question ({CAPS_G10.novelDramaEssayMarks} marks, 300 to 350 words) and one contextual question ({CAPS_G10.novelDramaContextualMarks} marks), from the same section.</li>
        </ul>
        <Mistake>Do not answer both the essay and the contextual question from different texts. Both must be from Section B (novel) or both from Section C (drama).</Mistake>
      </div>
    ),
  },
  {
    title: 'Paper 3: Writing',
    content: (
      <div className="space-y-4">
        <Rule>Paper 3 has one essay ({CAPS_G10.essayMarks} marks) and two transactional texts ({CAPS_G10.transactionalMarks} marks each): {CAPS_G10.paper3Marks} marks in all.</Rule>
        <Plan rows={PAPER3_PLAN} />
        <ul className="space-y-1 text-left text-sm text-slate-700">
          <li>The essay is 300 to 350 words: narrative, descriptive or argumentative.</li>
          <li>Each transactional text is 180 to 200 words, marked on content, planning and format (60%) and language, style and editing (40%).</li>
          <li>The essay is marked on content and planning (60%), language, style and editing (30%) and structure (10%).</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Common exam mistakes',
    content: (
      <div className="space-y-4">
        <Rule>Most lost marks come from habits you can fix before the exam.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Not reading the question:</strong> underline the command word (&ldquo;explain&rdquo;, &ldquo;compare&rdquo;, &ldquo;why&rdquo;).</li>
          <li><strong>Ignoring the marks:</strong> one point for each mark is a useful guide for short answers.</li>
          <li><strong>No plan:</strong> a two-minute plan keeps an essay on the topic.</li>
          <li><strong>Copying from the extract:</strong> quote briefly and explain in your own words.</li>
          <li><strong>Wrong format or length:</strong> a transactional text with the wrong layout or far too long or short loses marks.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>How many marks is Paper 3, and how are they shared?</>,
          <>How many marks does the poetry section of Paper 2 carry?</>,
          <>Which paper includes a summary, and how many marks is it worth?</>,
          <>A comprehension question is worth 2 marks. How many points should your answer give?</>,
        ]}
        answers={[
          <>100 marks: the essay is 50 and the two transactional texts are 25 each.</>,
          <>30 marks (seen 20 and unseen 10).</>,
          <>Paper 1, Section B: 10 marks.</>,
          <>Two clear points, one for each mark.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'The mid-year examination for Grade 10 English HL is made up of three papers. How many marks is it out of in total?',
    options: ['250', '300', '100', '150'],
    answer: '250',
    explanation: 'Paper 1 (70) + Paper 2 (80) + Paper 3 (100) = 250 marks. The year-end examination adds the oral, making 300.',
  },
  {
    prompt: 'How many marks is Paper 1, Language in context, worth?',
    options: ['80', '100', '50', '70'],
    answer: '70',
    explanation: 'Paper 1 is worth 70 marks: comprehension 30, summary 10 and language structures and conventions 30.',
  },
  {
    prompt: 'In Paper 1, Section B asks for a summary of a passage. How many marks is the summary worth?',
    options: ['30', '10', '20', '5'],
    answer: '10',
    explanation: 'The summary is worth 10 marks. Sections A and C are worth 30 each.',
  },
  {
    prompt: 'Paper 1 is 70 marks in 120 minutes. Roughly how long should you give to a question worth 2 marks?',
    options: ['About 15 minutes', 'About 30 minutes', 'Less than 30 seconds', 'About 3 to 4 minutes'],
    answer: 'About 3 to 4 minutes',
    explanation: '120 minutes for 70 marks is about 1,7 minutes per mark, so a 2-mark question takes about 3 or 4 minutes.',
  },
  {
    prompt: 'How many marks is Paper 2, Literature, worth?',
    options: ['80', '70', '100', '50'],
    answer: '80',
    explanation: 'Paper 2 is out of 80: poetry is 30 and the novel or drama section is 50.',
  },
  {
    prompt: 'In Paper 2, how are the 30 marks for poetry shared?',
    options: ['10 for seen poems and 20 for an unseen poem', '20 for seen poems and 10 for an unseen poem', '15 for each of two seen poems', '30 for one unseen poem'],
    answer: '20 for seen poems and 10 for an unseen poem',
    explanation: 'The seen poems carry 20 marks and the unseen poem carries 10.',
  },
  {
    prompt: 'In Paper 2, a learner must answer the essay and the contextual question on a novel or drama. Which choice is allowed?',
    options: ['The essay from the novel and the contextual question from the drama', 'Two essays and no contextual question', 'Both questions from Section B, the novel', 'Neither: the learner answers only poetry'],
    answer: 'Both questions from Section B, the novel',
    explanation: 'One essay and one contextual question must be answered, both from the same section: novel or drama.',
  },
  {
    prompt: 'How many marks is the contextual question on a novel or drama worth in Paper 2?',
    options: ['10', '50', '25', '30'],
    answer: '25',
    explanation: 'The novel or drama section is worth 50: the essay carries 25 marks and the contextual question carries 25.',
  },
  {
    prompt: 'How many marks is Paper 3, Writing, worth?',
    options: ['150', '100', '120', '110'],
    answer: '100',
    explanation: 'Paper 3 is out of 100: an essay of 50 marks and two transactional texts of 25 marks each.',
  },
  {
    prompt: 'How long should each transactional text in Paper 3 be?',
    options: ['300 to 350 words', '180 to 200 words', '100 to 120 words', '400 to 450 words'],
    answer: '180 to 200 words',
    explanation: 'Each transactional text is 180 to 200 words. The essay is the longer text at 300 to 350 words.',
  },
  {
    prompt: 'In the exam, an essay question is worth 50 marks. Which is the best use of the first minutes?',
    options: ['Write a short plan for the essay', 'Start writing without a plan', 'Copy out the topic three times', 'Write the conclusion first and skip the rest'],
    answer: 'Write a short plan for the essay',
    explanation: 'Content and planning carry 60% of the marks, so a short plan keeps the essay on the topic and well organised.',
  },
  {
    prompt: 'A question says "Explain why the writer uses a rhetorical question here" and is worth 2 marks. Which answer is the best?',
    options: ['It makes the reader think and stresses the writer\'s view.', 'It is a rhetorical question, used on line six of the text.', 'The writer asks a question because he wants to know.', 'The question shows that the writer is asking the reader.'],
    answer: 'It makes the reader think and stresses the writer\'s view.',
    explanation: 'An "explain why" question needs the effect of the device, and two marks need two points. Naming the device or giving the line number earns little.',
  },
  {
    prompt: 'A learner copies a whole paragraph from the extract in a contextual answer. What is the best advice?',
    options: ['Copy even more of the extract text', 'Quote key words and explain them', 'Leave the extract out and answer from memory', 'Write the answer in the form of a poem'],
    answer: 'Quote key words and explain them',
    explanation: 'Short quotations support a point, but the explanation earns the marks.',
  },
];
