import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Plan before you draft',
    image: {
      src: '/curriculum/grade6/eng/term4/exam-writing-practice/diagram.webp',
      alt: 'learner planning an essay and transactional writing task with a checklist and timer',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In exam writing, a short plan saves time. Jot down your <strong>purpose</strong>, <strong>audience</strong>,
          and the main ideas you want in each paragraph before you start writing.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-amber-50 p-4 text-slate-700"><strong>Purpose</strong><br />Why are you writing?</div>
          <div className="rounded-xl bg-sky-50 p-4 text-slate-700"><strong>Audience</strong><br />Who will read it?</div>
          <div className="rounded-xl bg-emerald-50 p-4 text-slate-700"><strong>Structure</strong><br />What comes first, next, last?</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Match the format to the task',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Essays and transactional texts need different layouts. Use the correct opening, paragraphing, and ending so
          the examiner can see that you know the format.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-violet-50 p-4 text-slate-700"><strong>Essay</strong><br />clear introduction, body, conclusion</div>
          <div className="rounded-xl bg-rose-50 p-4 text-slate-700"><strong>Letter or email</strong><br />greeting, message, sign-off</div>
          <div className="rounded-xl bg-lime-50 p-4 text-slate-700"><strong>Notice or review</strong><br />key details in the right format</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Leave time to edit for accuracy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Save the last few minutes for an editing checklist. Check spelling, punctuation, grammar, and whether every
          sentence is clear and linked to the topic.
        </p>
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-xl bg-cyan-50 p-4 text-slate-700"><strong>Spelling</strong><br />correct tricky words</div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-slate-700"><strong>Punctuation</strong><br />full stops and commas</div>
          <div className="rounded-xl bg-orange-50 p-4 text-slate-700"><strong>Grammar</strong><br />tense and agreement</div>
          <div className="rounded-xl bg-indigo-50 p-4 text-slate-700"><strong>Clarity</strong><br />one idea per sentence</div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the best first step before writing under exam conditions?',
    options: ['Plan your ideas and structure quickly', 'Write the conclusion first without reading the task', 'Use every minute on one sentence', 'Skip the question and choose your own topic'],
    answer: 'Plan your ideas and structure quickly',
    explanation: 'A quick plan helps you stay on topic and organise your writing clearly.',
  },
  {
    prompt: 'Why is time management important in an exam writing task?',
    options: ['It gives you time to plan, write, and edit', 'It lets you ignore the instructions', 'It means you never need paragraphs', 'It allows you to leave the task unfinished'],
    answer: 'It gives you time to plan, write, and edit',
    explanation: 'Good time management helps you complete all parts of the task carefully.',
  },
  {
    prompt: 'Which text is a transactional piece of writing?',
    options: ['A formal letter to the principal', 'A stanza from a poem', 'A list of rhyming words', 'A chapter from a novel'],
    answer: 'A formal letter to the principal',
    explanation: 'Transactional texts are written for a practical purpose, such as requesting or informing.',
  },
  {
    prompt: 'What should a strong introduction do?',
    options: ['Introduce the topic clearly', 'Repeat the title three times', 'Add unrelated jokes', 'List every idea in random order'],
    answer: 'Introduce the topic clearly',
    explanation: 'The introduction shows the reader what the piece will be about.',
  },
  {
    prompt: 'Why should each paragraph focus on one main idea?',
    options: ['It makes the writing easier to follow', 'It makes the writing longer without meaning', 'It prevents any detail from being used', 'It removes the need for punctuation'],
    answer: 'It makes the writing easier to follow',
    explanation: 'One clear focus per paragraph improves organisation and clarity.',
  },
  {
    prompt: 'What is the purpose of an editing checklist?',
    options: ['To spot and fix mistakes before handing in', 'To add a new topic at the end', 'To avoid reading your work again', 'To copy another learner’s answer'],
    answer: 'To spot and fix mistakes before handing in',
    explanation: 'Editing helps improve accuracy in spelling, punctuation, grammar, and meaning.',
  },
  {
    prompt: 'If the task asks you to write to a specific audience, what must you remember?',
    options: ['Choose the tone and format that suit that reader', 'Use any style you want', 'Ignore who will read it', 'Write only single-word answers'],
    answer: 'Choose the tone and format that suit that reader',
    explanation: 'Audience affects word choice, tone, and the structure of the writing.',
  },
  {
    prompt: 'Which sentence would be best to check during editing?',
    options: ['A sentence with missing punctuation', 'A sentence that is already perfect', 'A title written exactly as given', 'A blank line between paragraphs'],
    answer: 'A sentence with missing punctuation',
    explanation: 'Editing is for noticing and correcting errors that affect meaning and accuracy.',
  },
  {
    prompt: 'What is the safest strategy if you feel under pressure in a writing exam?',
    options: ['Follow your plan and tick off the checklist step by step', 'Rush so fast that you cannot reread', 'Change the topic halfway through', 'Leave out the ending to save time'],
    answer: 'Follow your plan and tick off the checklist step by step',
    explanation: 'A calm routine helps you manage pressure and produce a complete response.',
  },
];

const ExamWritingPractice = () => (
  <CapsSubjectTopic
    title="Exam-Oriented Writing Practice"
    subtitle="Planning, format recall, editing, and time management"
    learnSteps={learnSteps}
    task="exam-writing-practice"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ExamWritingPractice;
