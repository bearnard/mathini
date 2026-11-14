import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    title: 'Genres help us read in different ways',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In Term 2 you read different <strong>literary genres</strong> in rotation. A
          <strong> novel or novelette</strong> tells a longer story, a <strong>play</strong> is written
          for performance, and <strong>poetry</strong> uses carefully chosen words, rhythm, and
          images.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-sky-50 p-4">
            <p className="font-bold text-sky-700">Novel / novelette</p>
            <p className="text-slate-600">longer story with chapters and plot</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <p className="font-bold text-rose-700">Play</p>
            <p className="text-slate-600">dialogue, scenes, and stage directions</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <p className="font-bold text-emerald-700">Poetry</p>
            <p className="text-slate-600">speaker, rhythm, images, and feeling</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"As You Like It\" — William Shakespeare"}
        text={"All the world's a stage, and all the men and women merely players; they have their exits and their entrances."}
        annotations={[
          { start: 8, end: 23, device: "metaphor", note: "Human life is compared directly to a play, helping learners recognise a key dramatic metaphor." },
          { start: 51, end: 65, device: "symbolism", note: "People become symbols of the roles they perform in society." },
          { start: 83, end: 108, device: "imagery", note: "Stage directions turn the abstract idea of life into a scene the reader can imagine." },
        ]}
      />
    ),
  },
  {
    title: 'Compare theme, character, and viewpoint',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          When you compare texts, look at the <strong>theme</strong> (the big idea), the
          <strong> characters</strong>, and the <strong>viewpoint</strong> or position from which the
          story or poem is told.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-amber-50 p-4">
            <p className="font-bold text-amber-700">Theme</p>
            <p className="text-slate-600">friendship, courage, loss, hope</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <p className="font-bold text-violet-700">Character</p>
            <p className="text-slate-600">what a person says, does, and feels</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <p className="font-bold text-cyan-700">Viewpoint</p>
            <p className="text-slate-600">who is speaking or seeing the events</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use clues when you respond to poems and scenes',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Good responses use evidence from the text. In poems, notice the <strong>speaker</strong>
          and any <strong>figurative language</strong>. In plays, notice what the dialogue and
          scene details show about the action.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4">
            <p className="font-bold text-indigo-700">Speaker</p>
            <p className="text-slate-600">Who is talking in the poem?</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4">
            <p className="font-bold text-lime-700">Figurative language</p>
            <p className="text-slate-600">similes and images add meaning</p>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4">
            <p className="font-bold text-fuchsia-700">Context clues</p>
            <p className="text-slate-600">use lines, scenes, and actions as proof</p>
          </div>
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which genre is usually written in lines and may use rhyme or rhythm?',
    options: ['Poetry', 'Play', 'Novel', 'Diary'],
    answer: 'Poetry',
    explanation: 'Poems are often arranged in lines and may use rhythm, rhyme, and imagery.',
  },
  {
    prompt: 'What is the theme of a literary text?',
    options: ['The main idea or message', 'The list of characters only', 'The front cover design', 'The order of page numbers'],
    answer: 'The main idea or message',
    explanation: 'A theme is the big idea a reader can learn from the text.',
  },
  {
    prompt: 'Which feature helps you recognise a play?',
    options: ['Dialogue and stage directions', 'Paragraphs with chapter numbers only', 'A map and a key', 'Recipes and measurements'],
    answer: 'Dialogue and stage directions',
    explanation: 'Plays are written for performance, so they include spoken lines and directions for the stage.',
  },
  {
    prompt: 'What does viewpoint tell the reader?',
    options: ['Who is telling or seeing the events', 'How many pages the book has', 'Which colour the cover is', 'Where the book was printed'],
    answer: 'Who is telling or seeing the events',
    explanation: 'Viewpoint helps you understand whose eyes or voice guide the text.',
  },
  {
    prompt: 'Why might a learner compare a poem and a play scene?',
    options: ['To notice similarities and differences in ideas and presentation', 'To count how many desks are in the class', 'To check whether both texts are the same length', 'To replace every difficult word with a new one'],
    answer: 'To notice similarities and differences in ideas and presentation',
    explanation: 'Comparing texts helps you think about how different genres present similar ideas.',
  },
  {
    prompt: 'In a poem, the speaker is usually the...',
    options: ['voice that speaks the poem', 'person who printed the page', 'reader holding the book', 'teacher marking the work'],
    answer: 'voice that speaks the poem',
    explanation: 'The speaker is the voice inside the poem, not automatically the poet.',
  },
  {
    prompt: 'Which expression is an example of figurative language?',
    options: ['Her smile was as bright as the sun', 'The bell rang at break', 'We opened the classroom door', 'The team played on Friday'],
    answer: 'Her smile was as bright as the sun',
    explanation: 'This simile compares a smile to the sun to create a picture in the reader’s mind.',
  },
  {
    prompt: 'What is the best way to describe a character?',
    options: ['By using what they say, do and feel', 'By looking only at the title of the book', 'By skipping all of the dialogue', 'By choosing the longest answer on the page'],
    answer: 'By using what they say, do and feel',
    explanation: 'Character clues come from actions, words, thoughts, and feelings in the text.',
  },
  {
    prompt: 'Why should you use evidence when answering a contextual question?',
    options: ['It shows that your answer comes from the text', 'It makes the question disappear', 'It means you never have to read again', 'It changes the genre of the text'],
    answer: 'It shows that your answer comes from the text',
    explanation: 'Text evidence supports your answer and makes it more accurate.',
  },
];

const LiteraryGenres = () => (
  <CapsSubjectTopic
    title="Literary Genres in Rotation"
    subtitle="Comparing novels, plays, and poems through theme, character, and viewpoint"
    learnSteps={learnSteps}
    task="literary-genres"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default LiteraryGenres;
