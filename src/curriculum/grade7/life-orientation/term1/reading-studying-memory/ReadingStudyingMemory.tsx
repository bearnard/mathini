import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Why reading and studying matter',
    content: slide(
      <>
        <Rule>Reading is how you learn most of what you need at school and at work. Good readers understand more, remember more and write better. Studying means working with information on purpose, not just looking at it. A little reading and revision every day works better than one long session before a test.</Rule>
        <FactCards
          cards={[
            { title: 'Read often', line1: 'reading builds words', line2: 'and understanding' },
            { title: 'Little and often', line1: 'short daily sessions', line2: 'beat a late rush' },
            { title: 'Active', line1: 'ask questions and', line2: 'make notes as you read' },
            { title: 'Quiet place', line1: 'switch off distractions', line2: 'while you study' },
          ]}
          aria="Why reading and studying matter. Read often: reading builds words and understanding. Little and often: short daily sessions beat a late rush. Active: ask questions and make notes as you read. Quiet place: switch off distractions while you study."
        />
        <Worked
          title="Compare two ways to prepare"
          steps={[
            'Amahle revises 20 minutes every day for a week before a test.',
            'Sipho tries to learn everything the night before.',
            'Amahle remembers more because her brain has time to store the information.',
          ]}
        />
        <Mistake>Believing that a long session the night before is enough. The brain remembers better when you revise a little often.</Mistake>
      </>,
    ),
  },
  {
    title: 'Study habits that help',
    content: slide(
      <>
        <Rule>Plan a regular time and a quiet place, put your phone away, and keep your books together. Before you read, look at the headings and pictures. While you read, ask questions and underline key words. After you read, say or write the main points in your own words.</Rule>
        <StepFlow steps={['Look at headings and pictures.', 'Read and ask questions.', 'Underline key words.', 'Say it again in your own words.']} aria="Four study steps: look at headings and pictures, read and ask questions, underline key words, then say it again in your own words." />
        <Worked
          title="Study a page"
          steps={[
            'You look at the heading "The water cycle" and the diagram first.',
            'You read, underline the words evaporation and condensation, and ask: what happens next?',
            'You close the book and explain the cycle to your sister in your own words.',
          ]}
        />
        <Mistake>Reading a page again and again without testing yourself. Explaining it in your own words shows what you have really learned.</Mistake>
      </>,
    ),
  },
  {
    title: 'Skills to develop memory',
    content: slide(
      <>
        <Rule>You can train your memory. Repeat information at spaced times, break long lists into small chunks, link new facts to something you know, make a mind map or a picture, use a mnemonic such as a rhyme or the first letters of words, and get enough sleep. Teaching someone else is also a very good way to remember.</Rule>
        <FactCards
          cards={[
            { title: 'Chunking', line1: 'break a long list', line2: 'into small groups' },
            { title: 'Mnemonic', line1: 'a rhyme or first-letter', line2: 'trick to recall facts' },
            { title: 'Mind map', line1: 'draw links between', line2: 'ideas' },
            { title: 'Sleep', line1: 'rest helps the brain', line2: 'to store memories' },
          ]}
          aria="Memory skills. Chunking: break a long list into small groups. Mnemonic: a rhyme or first-letter trick to recall facts. Mind map: draw links between ideas. Sleep: rest helps the brain to store memories."
        />
        <Worked
          title="Use a mnemonic"
          steps={[
            'You must remember the planets in order, starting with Mercury.',
            'You make a sentence using the first letter of each name.',
            'You say the sentence each day for a week, and the order sticks.',
          ]}
        />
        <Mistake>Staying up all night to study. Sleep is when your brain stores what you learned.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Why is a little revision every day better than one long session?</>,
          <>Name one thing to do before you read a page.</>,
          <>What is a mnemonic?</>,
          <>How does sleep help your memory?</>,
        ]}
        answers={[
          <>The brain has time to store the information.</>,
          <>Look at the headings and pictures.</>,
          <>A rhyme or first-letter trick that helps you to remember.</>,
          <>It helps the brain to store what you learned.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which way of preparing for a test helps your memory most?",
    options: ["Reading everything once the night before", "Not revising at all before the test", "Revising a little every day", "Copying a friend's notes on the day"],
    answer: "Revising a little every day",
    explanation: "The brain stores information better when you revise often.",
  },
  {
    prompt: "Why is reading often a good habit?",
    options: ["It builds words and understanding", "It makes tests unnecessary for you", "It replaces all other schoolwork", "It is only useful for stories"],
    answer: "It builds words and understanding",
    explanation: "Good readers understand and remember more.",
  },
  {
    prompt: "What does studying mean?",
    options: ["Looking at the page without thinking", "Reading while you watch television", "Waiting until the exam to begin", "Working with information on purpose"],
    answer: "Working with information on purpose",
    explanation: "Studying is active, not just looking at the page.",
  },
  {
    prompt: "What is a good place to study?",
    options: ["Next to a loud radio all afternoon", "A quiet place without distractions", "In front of the television screen", "In a busy shop with friends"],
    answer: "A quiet place without distractions",
    explanation: "Quiet makes it easier to concentrate.",
  },
  {
    prompt: "What should you do with your phone while you study?",
    options: ["Keep it on loud beside you", "Put it away", "Chat with friends on it", "Play games on it for breaks"],
    answer: "Put it away",
    explanation: "Putting it away stops distractions.",
  },
  {
    prompt: "What is a good first step before you read a page?",
    options: ["Skip straight to the last line", "Close your eyes and wait", "Read the page backwards", "Look at the headings and pictures"],
    answer: "Look at the headings and pictures",
    explanation: "Headings and pictures show what the page is about.",
  },
  {
    prompt: "What should you do with key words while you read?",
    options: ["Underline them", "Cross them out", "Ignore them completely", "Hide them from yourself"],
    answer: "Underline them",
    explanation: "Underlining helps you to find the main ideas later.",
  },
  {
    prompt: "How can you check what you have learned from a page?",
    options: ["Read it ten times without stopping", "Copy it word for word without thinking", "Say it again in your own words", "Cover your eyes and guess"],
    answer: "Say it again in your own words",
    explanation: "Explaining it shows what you really know.",
  },
  {
    prompt: "What is chunking?",
    options: ["Reading a list faster and faster", "Writing a list in a very small hand", "Throwing away part of a list", "Breaking a long list into small groups"],
    answer: "Breaking a long list into small groups",
    explanation: "Small groups are easier to remember.",
  },
  {
    prompt: "What is a mnemonic?",
    options: ["A type of exam question paper", "A rhyme or letter trick to recall", "A kind of school bag to carry", "A long piece of homework"],
    answer: "A rhyme or letter trick to recall",
    explanation: "For example a sentence made from the first letters of a list.",
  },
  {
    prompt: "What is a mind map?",
    options: ["A drawing that links ideas together", "A map of your school grounds", "A map of the whole country", "A list of marks from tests"],
    answer: "A drawing that links ideas together",
    explanation: "Linking ideas helps you to see how they fit.",
  },
  {
    prompt: "Why should you sleep well before a test?",
    options: ["It erases all that you studied", "It does nothing for memory at all", "It helps the brain store facts", "It makes you forget the whole test"],
    answer: "It helps the brain store facts",
    explanation: "Rest is when your brain stores new information.",
  },
  {
    prompt: "Which is a good way to remember something for a test?",
    options: ["Stay awake all night", "Read it only once quickly", "Teach it to someone else", "Hope that you remember it"],
    answer: "Teach it to someone else",
    explanation: "Teaching others shows what you know and what you do not.",
  },
  {
    prompt: "What does spacing out your revision mean?",
    options: ["Revision at spaced times, over days", "All of the revision in a single hour", "No revision at all before the test", "Revision only on the day of the test"],
    answer: "Revision at spaced times, over days",
    explanation: "Spaced repetition helps memories to last.",
  },
];

const ReadingStudyingMemory = () => (
  <CapsSubjectTopic
    title="Reading, Studying and Memory Skills"
    subtitle="Why reading matters, good study habits and skills to improve your memory"
    learnSteps={learnSteps}
    task="gr7-reading-studying-memory-t1"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default ReadingStudyingMemory;
