import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StoryArc } from '../../../../../components/diagrams/english/Grade7EnglishPictures';
import { STORY, stageHeights } from '../../../../../components/diagrams/english/grade7english';

// The story below is original. Its stages and heights come from grade7english.ts (tested).
const climax = STORY.find((s) => s.id === 'climax')!;
const heights = stageHeights(STORY);
const peakAt = heights.indexOf(Math.max(...heights)) + 1;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Character and setting',
    content: slide(
      <>
        <Rule>The <strong>setting</strong> is where and when a story happens. A <strong>character</strong> is a person in the story. We learn a character’s traits from what they say, do and feel.</Rule>
        <Worked
          title="Read: “Thandi had only one slice of bread left, but she handed it to the hungry boy.”"
          steps={[
            <>Ask what the character does: she gives away her only food.</>,
            <>Ask what that action shows: she cares about others even when it costs her.</>,
            <>Name the trait: Thandi is <strong>generous</strong>.</>,
            <>Setting: the sentence does not say where or when, so we would look for clues such as “the school gate at lunch”.</>,
          ]}
        />
        <Mistake>Naming a trait with no proof, such as “Thandi is nice”. Always point to what she does or says that shows it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Plot: the order of events',
    content: slide(
      <>
        <Rule>The <strong>plot</strong> is the sequence of main events. Each event causes the next, and the tension builds to the <strong>climax</strong>, the turning point where tension is highest. Then the story winds down.</Rule>
        <StoryArc stages={STORY} />
        <Worked
          title="“The Whistle” (a short story written for this lesson)"
          steps={STORY.map((s) => (
            <>
              <strong>{s.name}:</strong> {s.event}
            </>
          ))}
        />
        <Mistake>Retelling events in the wrong order. Sipho cannot admit the loss (climax) before he loses the whistle (rising action). Order shows cause and effect.</Mistake>
      </>,
    ),
  },
  {
    title: 'Conflict and theme',
    content: slide(
      <>
        <Rule>A <strong>conflict</strong> is a problem or struggle the character must face. The <strong>theme</strong> is the big idea the story teaches. Ask: “What big idea does this story teach?”</Rule>
        <Worked
          title="Conflict and theme in “The Whistle”"
          steps={[
            <>Conflict: Sipho has lost the whistle and is afraid to admit it.</>,
            <>Follow the ending: he tells the truth, and everything is fine.</>,
            <>Theme: it is better to be honest and take responsibility than to hide a mistake. The theme is a message, not just a topic.</>,
          ]}
        />
        <Mistake>Giving only a topic, such as “a whistle”, as the theme. A theme is a full idea about life: honesty helps us solve problems.</Mistake>
      </>,
    ),
  },
  {
    title: 'Use evidence in your answer',
    content: slide(
      <>
        <Rule>Evidence is proof from the text. Make your point, give a short quote or detail from the story, then explain how it proves the point.</Rule>
        <Worked
          title="Question: Is Sipho a responsible person?"
          steps={[
            <><strong>Point:</strong> Yes, in the end Sipho acts responsibly.</>,
            <><strong>Evidence:</strong> He “tells the coach” that he lost the whistle.</>,
            <><strong>Explain:</strong> He could have hidden the problem. Telling the coach shows he takes responsibility, and keeping a spare shows he learned from it.</>,
          ]}
        />
        <Mistake>Answering from opinion alone (“I just think so”) without a detail from the story. Evidence shows your answer is based on the text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A story takes place in a fishing village in winter in the 1950s. Which story element is this?</li>
            <li>In “The Whistle”, which stage is the climax?</li>
            <li>A character gives away food even when hungry. Which trait does this show?</li>
            <li>Why does the order of events matter?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>The setting.</li>
            <li>Stage {peakAt}: “{climax.event}” It is the highest point of tension.</li>
            <li>Generosity: the action shows she cares more about others than herself.</li>
            <li>Events cause one another, so the right order shows cause and effect.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which element tells you where and when a story happens?',
    options: ['Setting', 'Theme', 'Conflict', 'Tone'],
    answer: 'Setting',
    explanation: 'Setting gives the place and time of the story.',
  },
  {
    prompt: 'What is the plot of a short story?',
    options: [
      'The sequence of main events',
      'The list of difficult words',
      'The font style in the book',
      'The number of paragraphs only',
    ],
    answer: 'The sequence of main events',
    explanation: 'Plot is the order in which important events happen.',
  },
  {
    prompt: 'A conflict in a story is best described as...',
    options: ['a problem or struggle', 'the final sentence', 'a title page design', 'a rhyme pattern'],
    answer: 'a problem or struggle',
    explanation: 'Conflict is the challenge characters face.',
  },
  {
    prompt: 'Which question helps identify theme?',
    options: [
      'What big idea does this story teach?',
      'How many commas are in paragraph one?',
      'Which page has the shortest sentence?',
      'What colour is the book cover?',
    ],
    answer: 'What big idea does this story teach?',
    explanation: 'Theme is the deeper idea or message in a story.',
  },
  {
    prompt: 'Why should you use evidence in a literature answer?',
    options: [
      'To support your point with proof from the text',
      'To make your answer longer without meaning',
      'To avoid reading the story carefully',
      'To replace all your own thinking',
    ],
    answer: 'To support your point with proof from the text',
    explanation: 'Evidence shows that your answer is based on the story.',
  },
  {
    prompt: 'If a character gives away food even when hungry, what trait is most likely shown?',
    options: ['Generous', 'Careless', 'Silent', 'Fearful'],
    answer: 'Generous',
    explanation: 'Giving to others in a difficult moment suggests generosity.',
  },
  {
    prompt: 'Which event most likely belongs near the climax?',
    options: [
      'The main conflict reaches its highest tension',
      'The setting is introduced for the first time',
      'The title is read aloud',
      'The chapter index is printed',
    ],
    answer: 'The main conflict reaches its highest tension',
    explanation: 'The climax is the turning point where tension is greatest.',
  },
  {
    prompt: 'Why does sequencing events matter in story study?',
    options: [
      'It helps readers understand cause and effect',
      'It removes the need to read details',
      'It changes fiction into non-fiction',
      'It tells you only how long the story is',
    ],
    answer: 'It helps readers understand cause and effect',
    explanation: 'Correct order shows how one event leads to another.',
  },
];

const NovelShortStoryStudy = () => (
  <CapsSubjectTopic
    title="Novel or Short Story Study"
    subtitle="Character, plot, conflict, setting, theme and evidence-based response"
    learnSteps={learnSteps}
    task="gr7-novel-short-story-study-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default NovelShortStoryStudy;
