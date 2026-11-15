import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Novels, plays and poetry',
    content: slide(
      <>
        <Rule>
          Poems are set out in short lines, often with rhyme or a steady beat. A play is written for performance, so it has dialogue and stage directions. A novel or novelette tells a longer story.
        </Rule>
        <Worked
          title="Name the genre"
          steps={[
            <>A text is set out in short lines with rhythm and images: poetry.</>,
            <>A text has speakers’ names, spoken lines and directions such as (She opens the door): a play.</>,
            <>A long story told in chapters with a plot: a novel or novelette.</>,
            <>The features you can see on the page tell you the genre.</>,
          ]}
        />
        <Mistake>Calling any text with a few lines a poem. Check the features: dialogue and stage directions mean a play.</Mistake>
      </>,
    ),
  },
  {
    title: 'Poems: the speaker and figurative language',
    content: slide(
      <>
        <Rule>
          The speaker is the voice that speaks the poem, not automatically the poet. Figurative language, such as a simile, compares one thing to another to make a picture in the reader’s mind.
        </Rule>
        <Worked
          title="Read a simile"
          steps={[
            <>Read: “Her smile was as bright as the sun.”</>,
            <>The word “as” shows a comparison: a smile is compared to the sun.</>,
            <>So it is a simile, an example of figurative language.</>,
            <>The picture it makes: a smile that is warm and shining.</>,
            <>Ask who is saying it: that voice is the speaker of the poem.</>,
          ]}
        />
        <Mistake>Taking figurative language literally. The smile is not really a ball of fire in the sky.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reading an extract closely',
    content: slide(
      <>
        <Rule>A metaphor says one thing is another. Look at the devices in the words, then say what they show.</Rule>
        <AnnotatedText
          title={'From "As You Like It" — William Shakespeare'}
          text={"All the world's a stage, and all the men and women merely players; they have their exits and their entrances."}
          annotations={[
            { start: 8, end: 23, device: 'metaphor', note: 'Life is compared directly to a play.' },
            { start: 51, end: 65, device: 'metaphor', note: 'People are compared to actors: “merely players”.' },
            { start: 83, end: 108, device: 'metaphor', note: 'Coming into the world and leaving it are compared to an actor’s entrances and exits.' },
          ]}
        />
        <Worked
          title="Explain the line"
          steps={[
            <>“All the world’s a stage” does not use “like” or “as”: the world is said to be a stage. That is a metaphor.</>,
            <>“men and women merely players” continues the idea: people are actors.</>,
            <>“exits and entrances” keeps the stage picture going (an extended metaphor).</>,
            <>Together they say that life is like a play and each person plays a part.</>,
          ]}
        />
        <Mistake>Calling a metaphor a simile. A simile uses “like” or “as”; a metaphor says one thing is the other.</Mistake>
      </>,
    ),
  },
  {
    title: 'Compare theme, character and viewpoint',
    content: slide(
      <>
        <Rule>
          The theme is the main idea or message. Describe a character by using what they say, do and feel. Viewpoint tells who is telling or seeing the events. Use evidence from the text, because it shows your answer comes from the text.
        </Rule>
        <Worked
          title="Compare a poem and a play scene"
          steps={[
            <>Theme: ask what big idea each text is about (for example friendship or hope).</>,
            <>Character: note what each person says, does and feels.</>,
            <>Viewpoint: ask whose eyes or voice guide the text.</>,
            <>Compare: to notice similarities and differences in ideas and presentation, as each genre presents similar ideas in its own way.</>,
          ]}
        />
        <Mistake>Answering from memory or opinion alone. Give evidence from the text so your answer is accurate.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which genre is written in lines and may use rhyme, and which has dialogue and stage directions?</>,
          <>In a poem, who is the speaker? “Her smile was as bright as the sun” is what kind of expression?</>,
          <>What do we call the main message of a story, and what does the narrator’s viewpoint show?</>,
          <>How do you describe a character, and why use evidence from the text?</>,
        ]}
        answers={[
          <>Poetry; a play.</>,
          <>The voice that speaks the poem. A simile (figurative language).</>,
          <>The theme: the main idea or message. Who is telling or seeing the events.</>,
          <>By what they say, do and feel. It shows that your answer comes from the text.</>,
        ]}
      />,
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
