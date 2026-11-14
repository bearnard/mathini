import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    title: 'Theme and mood grow from story details',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A deeper literature response looks past the plot. Readers explain the <strong>theme</strong>
          {' '}or message, describe the <strong>mood</strong>, and point to details that create these ideas.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-amber-50 p-4 text-slate-700">
            <strong>Theme</strong>
            <br />
            the big idea the story grows around
          </div>
          <div className="rounded-xl bg-sky-50 p-4 text-slate-700">
            <strong>Mood</strong>
            <br />
            the feeling the reader notices
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-slate-700">
            <strong>Clues</strong>
            <br />
            words, actions, and events from the text
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"The Highwayman\" — Alfred Noyes"}
        text={"The wind was a torrent of darkness among the gusty trees. The moon was a ghostly galleon tossed upon cloudy seas."}
        annotations={[
          { start: 15, end: 34, device: "metaphor", note: "Darkness is compared to a rushing flood, making the setting feel forceful and threatening." },
          { start: 45, end: 56, device: "imagery", note: "The descriptive phrase sharpens the stormy picture in the reader’s mind." },
          { start: 73, end: 88, device: "metaphor", note: "The moon becomes a haunted ship, turning the sky into a dramatic seascape." },
          { start: 101, end: 112, device: "imagery", note: "Clouds are imagined as waves, deepening the visual effect of the line." },
        ]}
      />
    ),
  },
  {
    title: 'Character motivation explains why actions happen',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When we analyse <strong>character motivation</strong>, we ask why a character made a choice.
          Good answers connect the action to a reason and then support it with evidence from the story.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-rose-50 p-4 text-slate-700">
            <strong>Action</strong>
            <br />
            what the character does
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-slate-700">
            <strong>Motivation</strong>
            <br />
            what the character wants or fears
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-slate-700">
            <strong>Evidence</strong>
            <br />
            the moment that proves your idea
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Strong opinions are justified with textual support',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In a review, interview, or book response, do more than say what you liked. Give a clear opinion,
          support it with details, and keep events or ideas in a sensible sequence.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4 text-slate-700">
            <strong>Opinion</strong>
            <br />
            your judgement about the text
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-slate-700">
            <strong>Support</strong>
            <br />
            quote or retell a useful detail
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-slate-700">
            <strong>Sequence</strong>
            <br />
            explain ideas in a clear order
          </div>
        </div>
      </div>
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
