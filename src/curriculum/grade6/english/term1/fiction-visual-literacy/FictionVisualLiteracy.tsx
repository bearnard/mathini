import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Fiction: setting and plot',
    content: slide(
      <>
        <Rule>
          The setting tells you where and when a story happens. The plot is the events that happen in the story. Speculative fiction is a story that imagines unusual worlds or events.
        </Rule>
        <Worked
          title="Break down one line"
          steps={[
            <>Read: “Lebo crept through the silent house.”</>,
            <>Setting: a quiet house (where). The text gives the place, so we know where Lebo is.</>,
            <>Plot: Lebo is creeping through the house. This is one event, and the next events will follow.</>,
            <>If the house were on a distant planet or the people could fly, it would be speculative fiction: an imagined, unusual world.</>,
          ]}
        />
        <Mistake>Mixing up setting and plot. The setting is the place and time; the plot is what happens.</Mistake>
      </>,
    ),
  },
  {
    title: 'Word meaning from context',
    content: slide(
      <>
        <Rule>When you meet a hard word, use the context clues around it: the words and sentences nearby help you work out its meaning.</Rule>
        <Worked
          title="What does “crept” mean?"
          steps={[
            <>Read: “Lebo crept through the silent house.”</>,
            <>Look at the clue next to the word: “silent house”.</>,
            <>A silent house suggests quiet, careful movement.</>,
            <>So “crept” most nearly means moved quietly and carefully.</>,
          ]}
        />
        <Mistake>Guessing a word from how it looks and ignoring the clues around it. “Crept” is not about creeping insects; the silent house is the clue.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reading strategies: skim, scan, visualise',
    content: slide(
      <>
        <Rule>
          Skim to get the general idea quickly. Scan to find a specific detail quickly. Visualise: make a picture in your mind of the people, place and action.
        </Rule>
        <Worked
          title="Choose the strategy"
          steps={[
            <>You want to know what a text is mostly about: skim it. Read the title and the first lines without reading every word.</>,
            <>You need one name, date or word: scan. Run your eyes over the page until you see it.</>,
            <>You are reading a story: visualise. Imagine Lebo, the dark house and the quiet steps.</>,
          ]}
        />
        <Mistake>Reading every word slowly when you only need one fact. Scan for the detail instead.</Mistake>
      </>,
    ),
  },
  {
    title: 'Visual texts: adverts and audience',
    content: slide(
      <>
        <Rule>
          Advert makers choose pictures, colours and words on purpose. Bright colours and large pictures attract attention and support the message. The style and language show the target audience.
        </Rule>
        <Worked
          title="Find the target audience"
          steps={[
            <>A shop poster for a toy uses a cartoon dinosaur and short, simple words.</>,
            <>Cartoons and simple words suit young readers.</>,
            <>So the target audience is children.</>,
            <>The bright colours and big pictures are there to attract attention and persuade.</>,
          ]}
        />
        <Mistake>Thinking pictures in an advert are only decoration. Every choice is made to catch attention and send the message.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What does the setting tell you, and what is the plot?</li>
            <li>Why do readers skim, and why do they scan?</li>
            <li>In “Lebo crept through the silent house”, what does “crept” mean?</li>
            <li>A magazine advert for retirement homes shows a calm garden and uses formal, careful wording. Who is the target audience, and why use soft colours?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The setting tells where and when the story happens. The plot is the events that happen in the story.</li>
            <li>Skim for the general idea quickly. Scan to find a specific detail quickly.</li>
            <li>Moved quietly and carefully (clue: silent house).</li>
            <li>Older adults. Soft colours create a calm, trustworthy mood that supports the message.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is speculative fiction?',
    options: ['A story that imagines unusual worlds or events', 'A list of real school rules for the year', 'A newspaper chart of the weather', 'A set of instructions for a maths task'],
    answer: 'A story that imagines unusual worlds or events',
    explanation: 'Speculative fiction uses imagination to explore ideas beyond everyday life.',
  },
  {
    prompt: 'What does the setting of a story tell you?',
    options: [
      'Where and when the story happens',
      'Only the author’s surname',
      'The price of the book',
      'How many pages are left',
    ],
    answer: 'Where and when the story happens',
    explanation: 'The setting gives the place and time of the story.',
  },
  {
    prompt: 'What is the plot of a story?',
    options: [
      'The events that happen in the story',
      'The colour of the cover only',
      'A list of difficult words',
      'The name of the library shelf',
    ],
    answer: 'The events that happen in the story',
    explanation: 'Plot is the sequence of events, including the problem and what follows.',
  },
  {
    prompt: 'Why do readers skim a text?',
    options: [
      'To get the general idea quickly',
      'To copy every word exactly',
      'To find one date only',
      'To count all the punctuation marks',
    ],
    answer: 'To get the general idea quickly',
    explanation: 'Skimming helps you understand what the text is mostly about without reading every word slowly.',
  },
  {
    prompt: 'Why do readers scan a text?',
    options: [
      'To find a specific detail quickly',
      'To guess without looking',
      'To change the ending of the story',
      'To memorise every sentence',
    ],
    answer: 'To find a specific detail quickly',
    explanation: 'Scanning is useful when you need one fact, name, or word fast.',
  },
  {
    prompt: 'What does it mean to visualise while reading?',
    options: [
      'To make a picture in your mind',
      'To draw only with a ruler',
      'To skip to the last page',
      'To read without thinking',
    ],
    answer: 'To make a picture in your mind',
    explanation: 'Visualising helps readers imagine the people, place, and action in a text.',
  },
  {
    prompt: 'Why do adverts often use bright colours and large pictures?',
    options: [
      'To attract attention and support the message',
      'To hide the main idea completely',
      'To make reading impossible',
      'To replace all words with silence',
    ],
    answer: 'To attract attention and support the message',
    explanation: 'Visual choices help an advert stand out and persuade its audience.',
  },
  {
    prompt: 'An advert for a new game uses cartoon heroes and simple language. Who is the target audience?',
    options: ['Children', 'Drivers only', 'Doctors only', 'Farm animals'],
    answer: 'Children',
    explanation: 'The style and language suggest that the advert is aimed at young readers.',
  },
  {
    prompt: 'In the sentence “Lebo crept through the silent house,” what does “crept” most nearly mean?',
    options: [
      'moved quietly and carefully',
      'sang loudly in the kitchen',
      'jumped high over the gate',
      'laughed at a funny joke',
    ],
    answer: 'moved quietly and carefully',
    explanation: 'The context clue “silent house” suggests careful, quiet movement.',
  },
];

const FictionVisualLiteracy = () => (
  <CapsSubjectTopic
    title="Fiction and Visual Literacy"
    subtitle="Understanding stories, adverts, and the clues they give"
    learnSteps={learnSteps}
    task="fiction-visual-literacy"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default FictionVisualLiteracy;
