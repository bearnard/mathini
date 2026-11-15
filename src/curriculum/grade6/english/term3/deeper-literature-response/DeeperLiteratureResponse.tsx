import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Theme and mood',
    content: slide(
      <>
        <Rule>
          A theme is the big idea or message in a story. Mood is the feeling or atmosphere created by the story. Both grow from details in the text.
        </Rule>
        <Worked
          title="Name a mood and state a theme"
          steps={[
            <>A story feels tense and frightening: the mood is suspenseful.</>,
            <>Mood answers “what feeling does the reader get?”. Look at the words that create it.</>,
            <>A theme is a broad message that applies beyond one event: “Honesty builds trust, even when the truth is hard.”</>,
            <>Compare: “Lebo hid a letter” is only an event, not a theme.</>,
          ]}
        />
        <Mistake>Giving the plot as the theme. A theme is a message that could apply to many stories, not what happens in one.</Mistake>
      </>,
    ),
  },
  {
    title: 'How description builds mood',
    content: slide(
      <>
        <Rule>Writers use metaphor and imagery to build mood. Find the device, then say what feeling it creates.</Rule>
        <AnnotatedText
          title={'From "The Highwayman" — Alfred Noyes'}
          text={"The wind was a torrent of darkness among the gusty trees. The moon was a ghostly galleon tossed upon cloudy seas."}
          annotations={[
            { start: 15, end: 34, device: 'metaphor', note: 'The wind is compared to a rushing flood of darkness, which makes the setting forceful and threatening.' },
            { start: 45, end: 56, device: 'imagery', note: 'The description sharpens the stormy picture in the reader’s mind.' },
            { start: 73, end: 88, device: 'metaphor', note: 'The moon is compared to a haunted ship.' },
            { start: 101, end: 112, device: 'imagery', note: 'Clouds are imagined as waves, deepening the picture.' },
          ]}
        />
        <Worked
          title="From device to mood"
          steps={[
            <>“The wind was a torrent of darkness”: the wind is called a flood of darkness, a metaphor.</>,
            <>“a ghostly galleon”: the moon becomes a haunted ship, another metaphor.</>,
            <>Together the dark, stormy images make the mood threatening and mysterious.</>,
          ]}
        />
        <Mistake>Saying the mood is just “the weather”. Mood is the feeling the reader gets from the details.</Mistake>
      </>,
    ),
  },
  {
    title: 'Character motivation',
    content: slide(
      <>
        <Rule>Motivation is why a character acts: what they want or fear. A good answer joins the action, the reason and the evidence from the story.</Rule>
        <Worked
          title="Explain why a character acts"
          steps={[
            <>Action: a character practises every day.</>,
            <>Motivation: she wants to make the team.</>,
            <>Evidence: the action and the reason together show what motivates her.</>,
            <>Write it: “She practises every day because she wants to make the team.”</>,
          ]}
        />
        <Mistake>Saying what the character did without saying why. An action alone is not a motivation.</Mistake>
      </>,
    ),
  },
  {
    title: 'Opinions, reviews and interviews',
    content: slide(
      <>
        <Rule>
          A review gives an opinion supported by reasons and examples. Use textual support (a clear detail from the text) and keep ideas in order, because sequencing helps explain events in a clear order.
        </Rule>
        <Worked
          title="Support an opinion and plan an interview"
          steps={[
            <>Opinion: “The hero is brave.”</>,
            <>Textual support: “because he helps his friend in chapter 3”. The detail proves the opinion.</>,
            <>Sequence your points: first, then, finally.</>,
            <>Interview question for a character: “Why did you decide to hide the letter?” It explores a choice or a motive.</>,
          ]}
        />
        <Mistake>Saying only “I liked it”. Give an opinion and prove it with a detail from the text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is a theme, and what does mood tell the reader?</li>
            <li>A story feels tense and frightening. What is the mood? Which sentence best states a theme?</li>
            <li>Which detail shows motivation: a character who practises every day to make the team?</li>
            <li>What should a review include, and which sentence uses textual support?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The big idea or message. The feeling or atmosphere created by the story.</li>
            <li>Suspenseful. “Honesty builds trust, even when the truth is hard.”</li>
            <li>Yes: the action and the reason together show motivation.</li>
            <li>An opinion supported by reasons and examples. “The hero is brave because he helps his friend in chapter 3.”</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is a theme in a story?',
    options: [
      'The big idea or message in a story',
      'The list of all the characters',
      'The place where the story happens',
      'The number of chapters in the book',
    ],
    answer: 'The big idea or message in a story',
    explanation: 'A theme is the important idea or lesson that the story develops.',
  },
  {
    prompt: 'What does mood tell the reader?',
    options: [
      'The feeling or atmosphere created by the story',
      'The author\'s home address',
      'The exact year the story was printed',
      'The order of the pages in the book',
    ],
    answer: 'The feeling or atmosphere created by the story',
    explanation: 'Mood is the emotion or atmosphere a reader feels while reading.',
  },
  {
    prompt: 'Which detail best shows character motivation?',
    options: ['A character practises every day to make the team', 'A character wears blue socks on Tuesday', 'A character sits near the window in class', 'A character owns a pencil and a ruler'],
    answer: 'A character practises every day to make the team',
    explanation: 'The action and the reason together show what motivates the character.',
  },
  {
    prompt: 'Which response uses textual support?',
    options: ['The hero is brave because he helps his friend in chapter 3', 'The hero is brave because I say that he is', 'The hero is brave and that is all I can say', 'The hero is brave because brave is a nice word'],
    answer: 'The hero is brave because he helps his friend in chapter 3',
    explanation: 'Textual support uses a clear detail from the text to prove an opinion.',
  },
  {
    prompt: 'What should a review include?',
    options: [
      'An opinion supported by reasons and examples',
      'Only the title of the book',
      'A random list of favourite foods',
      'A copy of every page in the story',
    ],
    answer: 'An opinion supported by reasons and examples',
    explanation: 'A strong review explains a judgement with evidence and detail.',
  },
  {
    prompt: 'Why is sequencing useful in a book response?',
    options: [
      'It helps explain events in a clear order',
      'It makes every answer shorter than one sentence',
      'It removes all evidence from the response',
      'It changes the story ending completely',
    ],
    answer: 'It helps explain events in a clear order',
    explanation: 'Sequencing helps the reader follow ideas and events step by step.',
  },
  {
    prompt: 'Which question fits an interview about a character?',
    options: [
      'Why did you decide to hide the letter?',
      'How many wheels are on a bicycle?',
      'What is the tallest mountain in Africa?',
      'When does the school bell ring every day?',
    ],
    answer: 'Why did you decide to hide the letter?',
    explanation: 'Interview questions about a character should explore choices, feelings, or motives.',
  },
  {
    prompt: 'If a story feels tense and frightening, what is the mood?',
    options: ['Suspenseful', 'Cheerful', 'Peaceful', 'Carefree'],
    answer: 'Suspenseful',
    explanation: 'A tense and frightening feeling creates a suspenseful mood.',
  },
  {
    prompt: 'Which sentence best states a theme?',
    options: ['Honesty builds trust, even when the truth is hard', 'The story has twelve pages and two pictures', 'The main character lives near a river', 'The book starts on a rainy morning'],
    answer: 'Honesty builds trust, even when the truth is hard',
    explanation: 'A theme statement gives a broad message that can apply beyond one event.',
  },
];

const DeeperLiteratureResponse = () => (
  <CapsSubjectTopic
    title="Deeper Literature Response"
    subtitle="Explaining theme, mood, and character motivation with evidence"
    learnSteps={learnSteps}
    task="deeper-literature-response"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default DeeperLiteratureResponse;
