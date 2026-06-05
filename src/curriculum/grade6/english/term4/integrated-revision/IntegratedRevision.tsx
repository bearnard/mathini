import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Revise the clues for each genre',
    image: {
      src: '/curriculum/grade6/eng/term4/integrated-revision/diagram.webp',
      alt: 'revision board showing poetry, fiction, media texts, and listening notes',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 revision asks you to move confidently between <strong>poetry</strong>, <strong>fiction</strong>,
          <strong> media texts</strong>, and <strong>oral recall</strong>. Look for the clues that tell you what kind of
          text you are reading or hearing.
        </p>
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-xl bg-violet-50 p-4 text-slate-700"><strong>Poetry</strong><br />stanzas, rhythm, imagery</div>
          <div className="rounded-xl bg-emerald-50 p-4 text-slate-700"><strong>Fiction</strong><br />characters, setting, plot</div>
          <div className="rounded-xl bg-amber-50 p-4 text-slate-700"><strong>Media texts</strong><br />headlines, captions, purpose</div>
          <div className="rounded-xl bg-sky-50 p-4 text-slate-700"><strong>Oral recall</strong><br />keywords, sequence, facts</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Find evidence and summarise main ideas',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In mixed revision questions, strong answers come from the text itself. Retrieve a detail, make a sensible
          inference, and reduce a longer passage to its most important ideas.
        </p>
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-slate-700"><strong>Retrieve</strong><br />quote or point to a detail</div>
          <div className="rounded-xl bg-indigo-50 p-4 text-slate-700"><strong>Infer</strong><br />read between the lines</div>
          <div className="rounded-xl bg-lime-50 p-4 text-slate-700"><strong>Summarise</strong><br />keep only main ideas</div>
          <div className="rounded-xl bg-orange-50 p-4 text-slate-700"><strong>Recall</strong><br />remember key facts in order</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Switch strategies quickly in revision',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Read the question carefully before you answer. A summary question needs short main points, while a poetry or
          fiction question may ask about mood, character, or language.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-cyan-50 p-4 text-slate-700"><strong>Step 1</strong><br />Identify the genre</div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-slate-700"><strong>Step 2</strong><br />Choose the right reading strategy</div>
          <div className="rounded-xl bg-teal-50 p-4 text-slate-700"><strong>Step 3</strong><br />Answer with evidence</div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which feature would most likely show that a text is a poem?',
    options: ['Stanzas and repeated lines', 'A price list and barcode', 'A map key and compass', 'A recipe with ingredients'],
    answer: 'Stanzas and repeated lines',
    explanation: 'Poems are often arranged in lines and stanzas and may repeat words or phrases for effect.',
  },
  {
    prompt: 'A text has a headline, a photo, and a caption. Which genre is it most likely to be?',
    options: ['A media text', 'A folktale', 'A poem', 'A play script'],
    answer: 'A media text',
    explanation: 'Headlines, photos, and captions are common features of media texts such as newspaper reports or adverts.',
  },
  {
    prompt: 'If a comprehension question asks for evidence, what should you do?',
    options: ['Use a detail from the text to support your answer', 'Write the longest answer you can think of', 'Ignore the passage and guess', 'Copy the whole text'],
    answer: 'Use a detail from the text to support your answer',
    explanation: 'Evidence means a fact, phrase, or detail from the text that proves your answer.',
  },
  {
    prompt: 'What makes a good summary?',
    options: ['It includes only the main ideas in a shorter form', 'It copies every sentence from the passage', 'It adds your own new story', 'It keeps only minor details'],
    answer: 'It includes only the main ideas in a shorter form',
    explanation: 'A summary keeps the most important points and removes extra detail.',
  },
  {
    prompt: 'Which question is most likely about fiction?',
    options: ['Why does the character decide to leave home?', 'What does the headline suggest?', 'Which words rhyme in stanza one?', 'What order were the oral instructions given in?'],
    answer: 'Why does the character decide to leave home?',
    explanation: 'Fiction questions often focus on character, plot, setting, and motivation.',
  },
  {
    prompt: 'Why might a poet repeat a line?',
    options: ['To emphasise an important idea or feeling', 'To turn the poem into a newspaper', 'To list ingredients for a meal', 'To give a map direction'],
    answer: 'To emphasise an important idea or feeling',
    explanation: 'Repetition helps a poet highlight mood, meaning, or rhythm.',
  },
  {
    prompt: 'What is the best way to prepare for oral recall?',
    options: ['Listen for keywords and sequence', 'Close your book and daydream', 'Memorise one random sentence only', 'Write your answer before listening'],
    answer: 'Listen for keywords and sequence',
    explanation: 'Keywords and order help you remember the important points in a spoken text.',
  },
  {
    prompt: 'Which skill is being used when you work out something the text suggests but does not say directly?',
    options: ['Inference', 'Copying', 'Scanning the cover only', 'Alphabetising'],
    answer: 'Inference',
    explanation: 'Inference means using clues from the text and your thinking to work out an implied meaning.',
  },
  {
    prompt: 'What should you do first when answering mixed-genre revision questions?',
    options: ['Identify the genre and what the question asks', 'Underline every word in the passage', 'Answer before reading the text', 'Skip straight to the last question'],
    answer: 'Identify the genre and what the question asks',
    explanation: 'Recognising the genre helps you choose the best strategy for answering accurately.',
  },
];

const IntegratedRevision = () => (
  <CapsSubjectTopic
    title="Integrated Revision Across Genres"
    subtitle="Revising poetry, fiction, media texts, summary, and oral recall"
    learnSteps={learnSteps}
    task="integrated-revision"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default IntegratedRevision;
