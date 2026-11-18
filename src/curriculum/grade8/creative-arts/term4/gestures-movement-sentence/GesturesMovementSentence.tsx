import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';

// Terms follow the Grade 8 dance plan; no named dance, dancer, choreographer or piece is used (docs/notes/g8-ca-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Gestures and literal movement",
    content: slide(
      <>
        <Rule>A gesture is a movement of a part of the body that communicates something. A literal gesture shows an everyday action as it really looks, such as waving hello, pushing a door or wiping your forehead. Everyone can understand a literal gesture straight away.</Rule>
        <FactCards
          cards={[
            { title: "Wave", line1: "saying hello or goodbye" },
            { title: "Push", line1: "pushing a door or a heavy box" },
            { title: "Wipe", line1: "wiping the forehead after a hot day" },
            { title: "Reach", line1: "taking something from a high shelf" },
          ]}
          aria="Wave: saying hello or goodbye. Push: pushing a door or a heavy box. Wipe: wiping the forehead after a hot day. Reach: taking something from a high shelf."
        />
        <Worked
          title="Find the literal gestures in a morning"
          steps={[
            "Think of three things that you do in the morning: wave, reach and wipe.",
            "Show each one exactly as it looks in daily life.",
            "Each of these is a literal gesture because it copies a real action.",
          ]}
        />
        <Mistake>Thinking that gestures are only for the hands. You can use the arms, head, shoulders, back or the whole body.</Mistake>
      </>,
    ),
  },
  {
    title: "From literal to abstract",
    content: slide(
      <>
        <Rule>You can change a literal gesture into an abstract one. Make it bigger or smaller, slower or faster, use a different body part, change its level or direction, repeat it or stretch it. An abstract gesture no longer looks like an everyday action, but it still expresses the idea or feeling behind it.</Rule>
        <FactCards
          cards={[
            { title: "Size", line1: "bigger or smaller" },
            { title: "Speed", line1: "slower or faster" },
            { title: "Body part", line1: "use a different part" },
            { title: "Level and direction", line1: "high, low, forward, back" },
            { title: "Repeat or stretch", line1: "repeat it or make it longer" },
          ]}
          aria="Size: bigger or smaller. Speed: slower or faster. Body part: use a different part. Level and direction: high, low, forward, back. Repeat or stretch: repeat it or make it longer."
        />
        <Worked
          title="Change a wave"
          steps={[
            "Start with a wave of one hand: a literal gesture.",
            "Make it slower and let it sweep with the whole arm and the body.",
            "Now it no longer looks like saying hello, but it still shows a farewell.",
          ]}
        />
        <Mistake>Changing nothing. If the gesture still copies the everyday action exactly, it is still literal.</Mistake>
      </>,
    ),
  },
  {
    title: "The movement sentence",
    content: slide(
      <>
        <Rule>A movement sentence joins several gestures together, like words in a sentence. Each gesture takes a number of counts. Put the gestures in an order that has a beginning, a middle and an end, and keep the rhythm steady. Four gestures of two counts each make a sentence of eight counts.</Rule>
        <FactCards
          cards={[
            { title: "Gestures", line1: "the words of the sentence" },
            { title: "Counts", line1: "how long each gesture lasts" },
            { title: "Order", line1: "beginning, middle and end" },
            { title: "Rhythm", line1: "a steady count" },
          ]}
          aria="Gestures: the words of the sentence. Counts: how long each gesture lasts. Order: beginning, middle and end. Rhythm: a steady count."
        />
        <Worked
          title="Count a movement sentence"
          steps={[
            "You choose 4 gestures and give each one 2 counts.",
            "4 gestures × 2 counts = 8 counts for the sentence.",
            "If you repeat the sentence twice, you dance 8 gestures in 16 counts.",
          ]}
        />
        <Mistake>Forgetting to count. If you do not keep to the counts, the group will not move together.</Mistake>
      </>,
    ),
  },
  {
    title: "Composing a sequence about an idea, mood or thought",
    content: slide(
      <>
        <Rule>You can compose a movement sequence that uses gestures to explore an idea, a mood or a thought, such as joy, rain or a worry. For joy you could start with arms opening wide and rising. Choose the idea, find literal gestures for it, change some of them to abstract gestures, put them in order, rehearse and revise. Afterwards reflect on what you learned from your own dance experience.</Rule>
        <FactCards
          cards={[
            { title: "Idea", line1: "for example rain" },
            { title: "Mood", line1: "for example joy or worry" },
            { title: "Thought", line1: "for example freedom" },
          ]}
          aria="Idea: for example rain. Mood: for example joy or worry. Thought: for example freedom."
        />
        <NumberedSteps steps={["Choose an idea, mood or thought", "Find literal gestures", "Change some to abstract gestures", "Put them in order with counts", "Rehearse, revise and reflect"].map((text) => ({ text }))} tone="amber" label="Five steps for composing a movement sequence" />
        <Worked
          title="Compose a sequence about rain"
          steps={[
            "Choose the idea: rain falling and then stopping.",
            "Find literal gestures such as fingers falling and arms covering the head, and make some of them abstract.",
            "Order them, rehearse with a count and revise the parts that are unclear.",
          ]}
        />
        <Mistake>Starting to dance before choosing an idea. A clear idea tells you which gestures to choose.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a literal gesture?</>,
          <>How can you make a gesture abstract?</>,
          <>How many counts are 3 gestures of 2 counts each?</>,
          <>Name one idea or mood for a sequence.</>,
        ]}
        answers={[
          <>A gesture that shows an everyday action as it is.</>,
          <>Change its size, speed or body part.</>,
          <>6 counts.</>,
          <>Rain, joy or a worry.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "You wave your hand to say hello. What kind of gesture is this?",
    options: ["An abstract gesture", "A jump", "A literal gesture", "A turn"],
    answer: "A literal gesture",
    explanation: "A literal gesture shows an everyday action as it really looks.",
  },
  {
    prompt: "What does a literal gesture show?",
    options: ["An everyday action as it looks", "A shape that has no meaning", "A sound that comes from music", "A pattern drawn on the floor"],
    answer: "An everyday action as it looks",
    explanation: "Literal gestures copy real actions such as waving or pushing.",
  },
  {
    prompt: "Which change helps to make a gesture abstract?",
    options: ["Doing it as in daily life", "Stopping the movement", "Copying a friend exactly", "Making it bigger and slower"],
    answer: "Making it bigger and slower",
    explanation: "Changing size, speed or body part moves a gesture away from the everyday action.",
  },
  {
    prompt: "You turn a quick wave into a slow sweep of your whole arm. What have you done?",
    options: ["Made the gesture more literal", "Made the gesture more abstract", "Made the gesture into a jump", "Made the gesture into a turn"],
    answer: "Made the gesture more abstract",
    explanation: "The gesture no longer looks like a plain wave but still shows the feeling.",
  },
  {
    prompt: "What is a movement sentence?",
    options: ["A sentence written about dance", "A single high jump in the air", "Several gestures joined together", "A pair of dance shoes for class"],
    answer: "Several gestures joined together",
    explanation: "A movement sentence joins gestures like words in a sentence.",
  },
  {
    prompt: "A movement sentence has 4 gestures of 2 counts each. How many counts is it?",
    options: ["8", "6", "4", "10"],
    answer: "8",
    explanation: "4 gestures × 2 counts = 8 counts.",
  },
  {
    prompt: "You repeat a sentence of 3 gestures twice. How many gestures do you dance?",
    options: ["3", "5", "9", "6"],
    answer: "6",
    explanation: "3 gestures twice is 3 × 2 = 6 gestures.",
  },
  {
    prompt: "You compose a sequence about joy. Which gesture could you start from?",
    options: ["Hands pressed over the ears", "Arms opening wide and rising", "Head hanging down", "Arms folded tightly"],
    answer: "Arms opening wide and rising",
    explanation: "Wide, rising arms can express a joyful mood.",
  },
  {
    prompt: "Which of these could the gestures in your sequence express?",
    options: ["A bus route to the theatre", "A recipe for a tasty meal", "An idea, a mood or a thought", "A phone number on a card"],
    answer: "An idea, a mood or a thought",
    explanation: "A sequence uses gestures to explore an idea, a mood or a thought.",
  },
  {
    prompt: "What is the first step when you compose a sequence about an idea?",
    options: ["Choose the idea or mood", "Perform for the class", "Take a bow", "Choose the costume"],
    answer: "Choose the idea or mood",
    explanation: "The idea tells you which gestures to look for.",
  },
  {
    prompt: "After you have found your literal gestures, what should you do next?",
    options: ["Delete the idea at once", "Stop rehearsing for good", "Teach the music to others", "Make some of them abstract"],
    answer: "Make some of them abstract",
    explanation: "Moving from literal to abstract is part of composing.",
  },
  {
    prompt: "Why do you rehearse and revise your sequence?",
    options: ["To make it twice as long", "To improve it and make it clear", "To avoid performing at all", "To change the idea each time"],
    answer: "To improve it and make it clear",
    explanation: "Rehearsing and revising makes the sequence clearer.",
  },
  {
    prompt: "How can you tell that a gesture is abstract?",
    options: ["It copies a daily action exactly", "It has no movement in it", "It no longer looks like daily life", "It is made with the feet"],
    answer: "It no longer looks like daily life",
    explanation: "An abstract gesture still expresses an idea but no longer looks like a daily action.",
  },
  {
    prompt: "Which of these joins to make a movement sentence?",
    options: ["Several gestures", "Several costumes", "Several tickets", "Several shoes"],
    answer: "Several gestures",
    explanation: "Gestures are the words of a movement sentence.",
  },
];

const GesturesMovementSentence = () => (
  <CapsSubjectTopic
    title="Gestures and the Movement Sentence"
    subtitle="Literal and abstract gestures, the movement sentence with counts, and composing a sequence about an idea or mood"
    learnSteps={learnSteps}
    task="gr8-ca-gestures-movement-t4"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default GesturesMovementSentence;
