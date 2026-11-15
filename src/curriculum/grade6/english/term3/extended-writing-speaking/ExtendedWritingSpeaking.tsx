import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Audience and purpose',
    content: slide(
      <>
        <Rule>
          Before planning an oral or written response, think about audience and purpose. Audience awareness means choosing words and details that suit the listeners or readers.
        </Rule>
        <Worked
          title="Plan a talk about your school"
          steps={[
            <>Audience: Grade 1 learners. Purpose: tell them what to expect on their first day.</>,
            <>Choose words and details that suit young listeners: short sentences and friendly words.</>,
            <>If the audience were the school governing body, you would choose formal words and facts.</>,
          ]}
        />
        <Mistake>Starting to write before you decide who it is for. The audience and purpose guide the tone, detail and structure.</Mistake>
      </>,
    ),
  },
  {
    title: 'Openings and endings',
    content: slide(
      <>
        <Rule>
          A strong opening in an oral presentation is a hook that grabs attention and names the topic. A good ending is a clear closing that sums up the main idea.
        </Rule>
        <Worked
          title="Open and close a talk about recycling"
          steps={[
            <>Hook: “What if every tin could be used twice?” It grabs attention.</>,
            <>Name the topic: “Today I will talk about recycling at our school.”</>,
            <>Give your points in order in the middle.</>,
            <>Close clearly: “So remember, recycling saves resources.” It sums up the main idea and brings the talk to a finish.</>,
          ]}
        />
        <Mistake>Ending with “That is all” or just stopping. A clear closing sums up the main idea.</Mistake>
      </>,
    ),
  },
  {
    title: 'Narrative essays and book reviews',
    content: slide(
      <>
        <Rule>
          A narrative essay needs events organised in a logical order. A book review is stronger with specific reasons and examples from the book, because reviews need evidence from the text.
        </Rule>
        <Worked
          title="Strengthen a review"
          steps={[
            <>Weak: “It was good.” No reason is given.</>,
            <>Opening for a formal review: “This book keeps the reader interested from page one.”</>,
            <>Add a specific reason and example from the book: for instance, a surprising event in chapter 2.</>,
            <>For a narrative essay, tell events in a logical order: beginning, middle, end.</>,
          ]}
        />
        <Mistake>Giving an opinion with no example. A review needs evidence from the text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Speaking: note cards and interviews',
    content: slide(
      <>
        <Rule>
          For an oral response, use a note card with short key words instead of a full script. A useful interview question asks for meaning, such as: How did that event change the way you felt?
        </Rule>
        <Worked
          title="Prepare an oral response and an interview"
          steps={[
            <>Write key words on the card: hook, 3 points, closing.</>,
            <>Look up and speak to the audience. Key words support you without making you read every line.</>,
            <>Interview: “Did you like it?” gets a short answer. “How did that event change the way you felt?” helps the speaker give meaningful information.</>,
          ]}
        />
        <Mistake>Writing the whole speech on the card and reading it. Short key words keep you talking to the audience.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What should you think about before planning? What does audience awareness mean?</>,
          <>What makes a strong opening in a talk, and a good ending in extended writing?</>,
          <>What should a story you write for class include, and what makes a film review more convincing?</>,
          <>How should the cards for a speech look, and which question would get a guest to say the most?</>,
        ]}
        answers={[
          <>Audience and purpose. Choosing words and details that suit the listeners or readers.</>,
          <>A hook that grabs attention and names the topic. A clear closing that sums up the main idea.</>,
          <>Events organised in a logical order, with a beginning, middle and end. Specific reasons and scenes from the film.</>,
          <>Short key words instead of a full script. “What was the hardest moment, and how did you cope?”</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What should you think about before planning an oral or written response?',
    options: [
      'Audience and purpose',
      'Only your favourite colour',
      'How long the school break is',
      'The price of a bus ticket',
    ],
    answer: 'Audience and purpose',
    explanation: 'Audience and purpose guide the tone, detail, and structure of the response.',
  },
  {
    prompt: 'What makes a strong opening in an oral presentation?',
    options: ['A hook that grabs attention and names the topic', 'Reading the whole conclusion first', 'Speaking as softly as you possibly can', 'Listing facts that have no link to each other'],
    answer: 'A hook that grabs attention and names the topic',
    explanation: 'A strong opening helps the audience know what to expect and keeps them interested.',
  },
  {
    prompt: 'Which ending works best for extended writing?',
    options: [
      'A clear closing that sums up the main idea',
      'Stopping in the middle of a sentence',
      'Adding a new topic with no link',
      'Repeating the title many times only',
    ],
    answer: 'A clear closing that sums up the main idea',
    explanation: 'A good ending brings the response to a purposeful finish.',
  },
  {
    prompt: 'Which detail makes a book review stronger?',
    options: ['Specific reasons and examples from the book', 'A guess that has no support at all', 'The lunch menu of the reviewer', 'A copy of the back cover and nothing else'],
    answer: 'Specific reasons and examples from the book',
    explanation: 'Reviews need evidence from the text to support the opinion.',
  },
  {
    prompt: 'What does a narrative essay need?',
    options: [
      'Events organised in a logical order',
      'No beginning or ending',
      'Only one short sentence',
      'A list of disconnected words',
    ],
    answer: 'Events organised in a logical order',
    explanation: 'Narrative writing becomes clear when events follow a sensible sequence.',
  },
  {
    prompt: 'Which interview question is the most useful?',
    options: [
      'How did that event change the way you felt?',
      'What is your shoe size today?',
      'How many windows are in this room?',
      'What is the answer to every maths problem?',
    ],
    answer: 'How did that event change the way you felt?',
    explanation: 'Thoughtful interview questions help the speaker give meaningful information.',
  },
  {
    prompt: 'What does audience awareness mean?',
    options: [
      'Choosing words and details that suit the listeners or readers',
      'Ignoring who will hear or read the response',
      'Always using the same style for every task',
      'Writing without checking if ideas make sense',
    ],
    answer: 'Choosing words and details that suit the listeners or readers',
    explanation: 'Audience awareness helps communication feel appropriate and effective.',
  },
  {
    prompt: 'Which note card is best for an oral response?',
    options: [
      'Short key words instead of a full script',
      'A page filled with tiny unreadable writing',
      'A completely blank card',
      'A card with only the date on it',
    ],
    answer: 'Short key words instead of a full script',
    explanation: 'Key words support speaking without forcing the learner to read every line.',
  },
  {
    prompt: 'Which sentence suits a formal review opening?',
    options: ['This book keeps the reader interested from page one', 'Yo, this story is wild and stuff, right', 'I forgot what the book was about', 'There is no reason to explain my opinion'],
    answer: 'This book keeps the reader interested from page one',
    explanation: 'A formal review opening uses clear, suitable language for the audience and purpose.',
  },
];

const ExtendedWritingSpeaking = () => (
  <CapsSubjectTopic
    title="Extended Writing and Speaking"
    subtitle="Organising reviews, essays, interviews, and oral responses for an audience"
    learnSteps={learnSteps}
    task="extended-writing-speaking"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ExtendedWritingSpeaking;
