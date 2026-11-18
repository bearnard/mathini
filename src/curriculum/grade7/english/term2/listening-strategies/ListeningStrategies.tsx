import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '@/components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as o from '@/components/diagrams/english/oral789';

// Grade 7 English HL oral skills: listening comprehension strategies. General skills; no recordings.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Listening with a purpose",
    content: slide(
      <>
        <Rule>Listening is more than hearing. To listen well, decide why you are listening: to learn facts, to follow instructions or to enjoy a story. Then listen for the key words, the words that carry the main ideas. Before you listen, look at the topic and think what you already know. During the listening, keep your eyes on the speaker and do not talk.</Rule>
        <FlowSteps
          aria={"The stages of listening. Before listening, think about the topic. During listening, listen for key words. After listening, check what you understood."}
          steps={[{ label: "Before: think about the topic" }, { label: "During: listen for key words" }, { label: "After: check what you understood" }]}
        />
        <Worked
          title="Purpose decides what you listen for"
          steps={[
            <>To follow instructions, listen for the order words: first, then, next and finally.</>,
            <>To find facts, listen for names, numbers and places.</>,
            <>To enjoy a story, listen for the feelings and the pictures that the words make.</>,
          ]}
        />
        <Mistake>Thinking that hearing is the same as listening. Listening means paying attention and understanding what you hear.</Mistake>
      </>,
    ),
  },
  {
    title: "Taking notes while you listen",
    content: slide(
      <>
        <Rule>You cannot write down every word. Write key words, short phrases and numbers only. Use abbreviations and arrows, and leave a space to add more later. A passage read to the class is often read only once or twice, so you must listen carefully. After the listening, read your notes and fill in the gaps while you still remember.</Rule>
        <InfoTable
          cols={[{ title: "Do", w: 50 }, { title: "Do not", w: 50 }]}
          rows={[
            ["write key words", "write whole sentences"],
            ["use short forms and arrows", "copy every word you hear"],
            ["leave space for extras", "stop listening to write"],
            ["check your notes after", "leave notes unread"],
          ]}
          aria={"A table of note-taking dos and do nots. Write key words, not whole sentences. Use short forms and arrows, and do not copy every word. Leave space for extras, and do not stop listening to write. Check your notes after, and do not leave them unread."}
        />
        <Worked
          title="A passage read aloud"
          steps={[
            <>A passage of {o.LISTEN.words} words is read at {o.LISTEN.wpm} words a minute.</>,
            <>It takes {o.LISTEN.words} ÷ {o.LISTEN.wpm} = {o.listenMinutes()} minutes, so there is little time to write.</>,
            <>Key words keep your notes short enough to keep up.</>,
          ]}
        />
        <Mistake>Trying to write every word. You will miss the next sentence, so write only the key words.</Mistake>
      </>,
    ),
  },
  {
    title: "Fact, opinion and tone",
    content: slide(
      <>
        <Rule>A fact can be checked and proved. An opinion is what someone thinks or feels, and it often uses words such as I think, best, worst or should. The speaker&apos;s tone, the feeling in the voice, can show whether the speaker is serious, joking, angry or sad. Listen for both what is said and how it is said.</Rule>
        <InfoTable
          cols={[{ title: "Kind", w: 22 }, { title: "Clue words", w: 38 }, { title: "Example", w: 40 }]}
          rows={[
            ["Fact", "numbers, dates, names", "The hall seats 200 people."],
            ["Opinion", "best, worst, I think", "The hall is the best place."],
            ["Tone", "how the voice sounds", "a bored voice, a happy voice"],
          ]}
          aria={"A table of fact, opinion and tone. A fact uses numbers, dates and names, for example the hall seats 200 people. An opinion uses words such as best, worst and I think, for example the hall is the best place. Tone is how the voice sounds, for example a bored voice or a happy voice."}
        />
        <Worked
          title="Sort what you hear"
          steps={[
            <>The match starts at 15:00: a fact, because the time can be checked.</>,
            <>It is the most exciting game ever: an opinion, because people may disagree.</>,
            <>Said in a flat voice, the same words may show that the speaker is bored.</>,
          ]}
        />
        <Mistake>Believing every opinion is a fact because the speaker sounds sure. Ask whether it can be checked.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Why must you know your purpose before you listen?</>,
          <>What should you write when you take notes?</>,
          <>How long does it take to read 300 words at 150 words a minute?</>,
          <>Is &quot;This is the worst song&quot; a fact or an opinion?</>,
        ]}
        answers={[
          <>It tells you <strong>what to listen for</strong>.</>,
          <><strong>Key words</strong> and short phrases.</>,
          <>300 ÷ 150 = <strong>{o.listenMinutes()} minutes</strong>.</>,
          <>An <strong>opinion</strong>.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does it mean to listen with a purpose?",
    options: ["You listen only to the loud parts", "You know why you are listening", "You listen without looking at anyone", "You listen while you do other work"],
    answer: "You know why you are listening",
    explanation: "The purpose decides what you listen for.",
  },
  {
    prompt: "Which words should you listen for when you follow instructions?",
    options: ["Words that rhyme with the topic", "The longest words in the speech", "Words that the speaker repeats in jokes", "Order words such as first, then and next"],
    answer: "Order words such as first, then and next",
    explanation: "Order words tell you the sequence.",
  },
  {
    prompt: "What are key words?",
    options: ["Words that carry the main ideas", "Words that open a door or box", "Words at the start of every line", "Words that are hard to spell"],
    answer: "Words that carry the main ideas",
    explanation: "Key words help you remember the main ideas.",
  },
  {
    prompt: "What should you do before you listen to a talk on a topic?",
    options: ["Close your eyes and sleep", "Write down the answers at once", "Think about what you already know", "Ask the speaker to repeat it"],
    answer: "Think about what you already know",
    explanation: "Prior knowledge helps you to follow.",
  },
  {
    prompt: "Why do you write key words and not whole sentences in your notes?",
    options: ["Whole sentences are not allowed", "You can keep up with the speaker", "The speaker will check your notes", "Key words are always longer"],
    answer: "You can keep up with the speaker",
    explanation: "Short notes let you keep listening.",
  },
  {
    prompt: "A passage of 300 words is read at 150 words a minute. How long is the reading?",
    options: ["1 minute", "3 minutes", "20 minutes", "2 minutes"],
    answer: "2 minutes",
    explanation: "300 ÷ 150 = 2 minutes.",
  },
  {
    prompt: "A passage of 450 words is read at 150 words a minute. How long is the reading?",
    options: ["3 minutes", "2 minutes", "4 minutes", "30 minutes"],
    answer: "3 minutes",
    explanation: "450 ÷ 150 = 3 minutes.",
  },
  {
    prompt: "When should you read through your notes?",
    options: ["Never, they are only for the teacher", "Only at the end of the year", "Straight after the listening", "Before the speaker begins"],
    answer: "Straight after the listening",
    explanation: "You fill in gaps while you still remember.",
  },
  {
    prompt: "Which statement is a fact?",
    options: ["The hall is the best place.", "The hall seats 200 people.", "The hall should be bigger.", "I think the hall is ugly."],
    answer: "The hall seats 200 people.",
    explanation: "A fact can be checked by counting the seats.",
  },
  {
    prompt: "Which statement is an opinion?",
    options: ["The school opened in 1990.", "The school has 20 classrooms.", "The school is in this town.", "This is the best school in town."],
    answer: "This is the best school in town.",
    explanation: "Words such as best show an opinion.",
  },
  {
    prompt: "What does the tone of a speaker show?",
    options: ["The feeling in the voice", "The number of words spoken", "The name of the speaker", "The length of the speech"],
    answer: "The feeling in the voice",
    explanation: "Tone can be happy, angry, sad or serious.",
  },
  {
    prompt: "A speaker says \"Fine\" in a flat, bored voice. What does the tone suggest?",
    options: ["The speaker is very excited", "The speaker is telling a joke", "The speaker is not really pleased", "The speaker is giving a fact"],
    answer: "The speaker is not really pleased",
    explanation: "Tone can change the meaning of words.",
  },
  {
    prompt: "Which habit helps you to listen well?",
    options: ["Chatting quietly to a friend", "Looking at the speaker and not talking", "Writing every word you hear", "Looking out of the window"],
    answer: "Looking at the speaker and not talking",
    explanation: "Good listeners give their attention.",
  },
  {
    prompt: "What can you do if you miss a point during a listening task?",
    options: ["Stop listening for a while", "Ask your friend to read aloud", "Write a different point", "Leave a gap in your notes and carry on"],
    answer: "Leave a gap in your notes and carry on",
    explanation: "A gap can be filled in later, but stopping loses more.",
  },
];

const ListeningStrategies = () => (
  <CapsSubjectTopic
    title="Listening Strategies"
    subtitle="Listening with a purpose, note-taking, fact and opinion, and tone"
    learnSteps={learnSteps}
    task="gr7-listening-strategies-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={7}
  />
);

export default ListeningStrategies;
