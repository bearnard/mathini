import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Write short functional texts for real situations',
    image: {
      src: '/curriculum/grade6/xho/term2/writing-presenting-t2/diagram.webp',
      alt: 'learner drafting diary lines a shopping list and a short message',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In this topic, you write useful texts connected to school, home, and shopping. Keep writing short,
          clear, and suitable for the purpose.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Diary lines</p>
            <p className="text-slate-600">date plus short personal sentence</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Shopping list</p>
            <p className="text-slate-600">clear item names in neat order</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Instructions</p>
            <p className="text-slate-600">short action steps using command verbs</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Messages</p>
            <p className="text-slate-600">recipient, purpose, and sender name</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Plan and organise your writing before drafting',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Good writing begins with planning. Decide what to include, keep ideas in order, and choose simple
          words so the reader understands your message quickly.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Purpose</p>
            <p className="text-slate-600">why you are writing the text</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Audience</p>
            <p className="text-slate-600">who will read your writing</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Sequence</p>
            <p className="text-slate-600">first, next, then, finally</p>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <p className="font-bold text-fuchsia-700">Word choice</p>
            <p className="text-slate-600">simple and accurate vocabulary</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Present clearly and edit before sharing',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Presenting means your work should be readable and confident. Check spelling, punctuation, and
          layout, then read aloud to hear if your writing sounds clear.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Neat layout</p>
            <p className="text-slate-600">leave spaces and write legibly</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <p className="font-bold text-orange-700">Editing</p>
            <p className="text-slate-600">fix spelling and punctuation errors</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <p className="font-bold text-teal-700">Clarity</p>
            <p className="text-slate-600">keep sentences short and direct</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <p className="font-bold text-yellow-700">Confidence</p>
            <p className="text-slate-600">present your message with a clear voice</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which feature belongs in a diary line?',
    options: ['A date and a short personal note', 'A list of exam formulas', 'Only a drawing with no words', 'A full newspaper article'],
    answer: 'A date and a short personal note',
    explanation: 'Diary writing usually includes the date and brief personal information.',
  },
  {
    prompt: 'What is the best format for a shopping list?',
    options: ['Clear item names written one below another', 'One long paragraph with no spaces', 'Only question sentences', 'A story with many characters'],
    answer: 'Clear item names written one below another',
    explanation: 'Lists should be easy to read and use when shopping.',
  },
  {
    prompt: 'Which sentence is a clear instruction?',
    options: ['Wash the apples first.', 'Apples are very tasty.', 'I like fruit salad.', 'My basket is blue.'],
    answer: 'Wash the apples first.',
    explanation: 'Instructions use action verbs to tell the reader what to do.',
  },
  {
    prompt: 'A short message to a teacher should include...',
    options: ['who it is for, the reason, and your name', 'a long poem and three pictures', 'only your favourite colour', 'a list of random numbers'],
    answer: 'who it is for, the reason, and your name',
    explanation: 'A complete message must identify recipient, purpose, and sender.',
  },
  {
    prompt: 'Which sequence words help organise instructions?',
    options: ['First, next, then, finally', 'Yesterday, maybe, wow, because', 'Blue, green, yellow, red', 'Slowly, quickly, happily, sadly'],
    answer: 'First, next, then, finally',
    explanation: 'These sequence words show order clearly.',
  },
  {
    prompt: 'Why is planning important before drafting?',
    options: ['It helps you organise ideas clearly', 'It removes the need to write', 'It changes every task into a poem', 'It lets you skip the topic'],
    answer: 'It helps you organise ideas clearly',
    explanation: 'Planning keeps writing focused and structured.',
  },
  {
    prompt: 'Which sentence best fits a simple description?',
    options: ['The red bag is light and strong.', 'Do you want tea?', 'Please close the gate now.', 'Tomorrow is Tuesday.'],
    answer: 'The red bag is light and strong.',
    explanation: 'A description uses adjectives to show qualities of something.',
  },
  {
    prompt: 'What should you do before presenting your writing?',
    options: ['Edit spelling and punctuation', 'Delete all full stops', 'Add unrelated facts', 'Erase the title only'],
    answer: 'Edit spelling and punctuation',
    explanation: 'Editing improves accuracy and readability.',
  },
  {
    prompt: 'Which ending is suitable for a short school message?',
    options: ['Enkosi, uLindiwe', 'See you in a movie!', 'Once upon a time...', 'What is 8 × 6?'],
    answer: 'Enkosi, uLindiwe',
    explanation: 'A polite sign-off with a name is appropriate in a school message.',
  },
];

const WritingPresentingT2 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Diary lines, shopping lists, instructions, descriptions, and short messages"
    learnSteps={learnSteps}
    task="writing-presenting-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT2;
