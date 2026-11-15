import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Identify the genre first',
    content: slide(
      <>
        <Rule>
          When you meet a mixed-genre question, identify the genre and what the question asks. Poems have stanzas and repeated lines; a media text has a headline, a photo and a caption.
        </Rule>
        <Worked
          title="Name the genre from its features"
          steps={[
            <>Stanzas and repeated lines: a poem.</>,
            <>A headline, a photo and a caption: a media text, such as a newspaper report or an advert.</>,
            <>“Why does the character decide to leave home?” asks about character and motivation: a question about fiction.</>,
            <>Now you know which strategy to use.</>,
          ]}
        />
        <Mistake>Starting to answer before you know the genre and what is asked. Identify both first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Evidence and inference',
    content: slide(
      <>
        <Rule>
          If a question asks for evidence, use a detail from the text to support your answer. Inference is working out what the text suggests but does not say directly.
        </Rule>
        <Worked
          title="Use evidence and infer"
          steps={[
            <>Question: “How does Lebo feel? Give evidence.”</>,
            <>Find a detail in the text, such as “Lebo crept through the silent house”.</>,
            <>Quote it to support your answer.</>,
            <>The text never says “afraid”, but the clues suggest it: that is inference, using clues and your thinking.</>,
          ]}
        />
        <Mistake>Answering from memory with no detail. Evidence means a fact, phrase or detail from the text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Summaries and oral recall',
    content: slide(
      <>
        <Rule>
          A good summary includes only the main ideas in a shorter form. To prepare for oral recall, listen for keywords and sequence.
        </Rule>
        <Worked
          title="Summarise and recall"
          steps={[
            <>Read a long paragraph about a school garden.</>,
            <>Keep the main ideas only and leave out extra detail.</>,
            <>When listening to a spoken text, note keywords and the order (first, next, last).</>,
            <>Use your keywords and sequence to retell the important points.</>,
          ]}
        />
        <Mistake>Copying most of the text into your summary. A summary is shorter and keeps only the main ideas.</Mistake>
      </>,
    ),
  },
  {
    title: 'Poems and repetition',
    content: slide(
      <>
        <Rule>A poet may repeat a line to emphasise an important idea or feeling. Repetition helps a poet highlight mood, meaning or rhythm.</Rule>
        <Worked
          title="Explain a repeated line"
          steps={[
            <>Spot the repeated line in the poem.</>,
            <>Ask: which idea or feeling does it stress?</>,
            <>Answer: it is repeated to emphasise that important idea or feeling, and it adds rhythm.</>,
          ]}
        />
        <Mistake>Thinking repetition is a mistake or filler. In a poem it is chosen on purpose.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which feature shows a poem? Which genre has a headline, a photo and a caption?</>,
          <>What do you do when a question asks for evidence? Which skill works out what is not said directly?</>,
          <>What makes a good summary? How do you prepare for oral recall?</>,
          <>Why might a song writer repeat a chorus? What should you do first with a mixed-genre question?</>,
        ]}
        answers={[
          <>Stanzas and repeated lines. A media text.</>,
          <>Use a detail from the text to support your answer. Inference.</>,
          <>It includes only the main ideas in a shorter form. Listen for keywords and sequence.</>,
          <>To stress an important idea or feeling. Identify the genre and what the question asks.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
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
