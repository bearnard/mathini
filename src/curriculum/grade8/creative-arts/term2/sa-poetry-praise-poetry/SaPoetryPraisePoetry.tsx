import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { CallResponse } from '../../../../../components/diagrams/arts/Ca8MusicPictures';

// All terms and meanings follow the Grade 8 drama plan; no play, poem or praise poem is quoted (docs/notes/g8-ca-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Interpreting a poem",
    content: slide(
      <>
        <Rule>To interpret a poem, first say what it means in your own words. This is text analysis. Then use your voice: speak clearly so every word is heard, change your pitch (how high or low), your pace (how fast or slow) and your tone (the feeling in your voice), and use a pause or extra emphasis where a line matters.</Rule>
        <FactCards
          cards={[
            { title: "Pitch", line1: "how high or low the voice is" },
            { title: "Pace", line1: "how fast or slow you speak" },
            { title: "Tone", line1: "the feeling in your voice" },
            { title: "Pause", line1: "a stop that gives a line weight" },
          ]}
          aria="Pitch: how high or low the voice is. Pace: how fast or slow you speak. Tone: the feeling in your voice. Pause: a stop that gives a line weight."
        />
        <Worked
          title="Plan a line about a storm"
          steps={[
            "Say in your own words what the line describes: wind and rain growing stronger.",
            "Speak faster and louder as the storm builds, and lower your pitch for the thunder.",
            "Pause before the last word so that the audience waits for it.",
          ]}
        />
        <Mistake>Reading the whole poem at one speed and one volume. Change your voice to match the meaning.</Mistake>
      </>,
    ),
  },
  {
    title: "Mood, movement and stillness",
    content: slide(
      <>
        <Rule>You create the mood of a poem with your voice and your body. Use movement that fits the words, and use stillness when you want the audience to focus. Connect with the feeling in the poem so that the audience believes it, and look at the audience as you speak.</Rule>
        <FactCards
          cards={[
            { title: "Voice", line1: "slow and soft for sadness, quick and bright for joy" },
            { title: "Movement", line1: "a gesture that matches the words" },
            { title: "Stillness", line1: "holding still for a strong moment" },
            { title: "Audience contact", line1: "looking at the audience" },
          ]}
          aria="Voice: slow and soft for sadness, quick and bright for joy. Movement: a gesture that matches the words. Stillness: holding still for a strong moment. Audience contact: looking at the audience."
        />
        <Worked
          title="Show a calm morning"
          steps={[
            "Speak slowly and softly, because a calm morning is quiet.",
            "Open your arms slowly when you say the word sunrise.",
            "Hold still for a moment at the end, and look at the audience as you finish.",
          ]}
        />
        <Mistake>Moving all the time. Too much movement hides the words, so use stillness on purpose.</Mistake>
      </>,
    ),
  },
  {
    title: "What is praise poetry?",
    content: slide(
      <>
        <Rule>Praise poetry is performed to praise a person, a group or a place. The praise poet (the imbongi in isiXhosa and isiZulu) uses descriptive naming phrases that describe the qualities of the person, repetition and a strong rhythm. The praise poet also has a role in the community, such as welcoming and honouring people and speaking about the life of the community.</Rule>
        <FactCards
          cards={[
            { title: "Naming phrases", line1: "describe the qualities of a person" },
            { title: "Repetition", line1: "brings back words and lines" },
            { title: "Rhythm", line1: "a strong beat to the words" },
            { title: "Praise poet", line1: "performs for the community" },
          ]}
          aria="Naming phrases: describe the qualities of a person. Repetition: brings back words and lines. Rhythm: a strong beat to the words. Praise poet: performs for the community."
        />
        <Worked
          title="Praise a friend"
          steps={[
            "Think of qualities that a friend has: fast on the field and kind to everyone.",
            "Turn the qualities into naming phrases, such as Runner of the Long Field and Keeper of the Open Gate.",
            "Repeat the naming phrase between lines to build the rhythm.",
          ]}
        />
        <Mistake>Thinking that praise poetry only flatters. A praise poet also names how people behave and speaks about what matters to the community.</Mistake>
      </>,
    ),
  },
  {
    title: "Performing praise poetry",
    content: slide(
      <>
        <Rule>Praise poetry is performed with the audience. In call and response the poet calls a line and the audience answers. Build the performance with rhythm, pace and volume, use gestures and body language, and keep contact with the audience. Costume and the style of delivery can show the role of the praise poet.</Rule>
        <FactCards
          cards={[
            { title: "Call and response", line1: "the audience answers the poet" },
            { title: "Build", line1: "pace and volume grow" },
            { title: "Body language", line1: "gestures that support the words" },
            { title: "Costume", line1: "shows the role of the poet" },
          ]}
          aria="Call and response: the audience answers the poet. Build: pace and volume grow. Body language: gestures that support the words. Costume: shows the role of the poet."
        />
        <CallResponse sequence={['call', 'response', 'call', 'response']} aria="A call and response pattern: the poet calls, the audience responds, the poet calls and the audience responds again." />
        <Worked
          title="Build a performance"
          steps={[
            "Start with a calm, clear call to the audience.",
            "Let the audience answer, and raise your pace and volume a little with each round.",
            "Finish with a strong gesture and a full-volume line, then hold still.",
          ]}
        />
        <Mistake>Starting at full volume. If you start loud there is nowhere to build to.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is text analysis?</>,
          <>Which voice tool means how fast you speak?</>,
          <>What are descriptive naming phrases?</>,
          <>What does the audience do in call and response?</>,
        ]}
        answers={[
          <>Saying what a poem means in your own words.</>,
          <>Pace.</>,
          <>Phrases that describe the qualities of a person.</>,
          <>They answer the poet.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which skill means saying what a poem means in your own words?",
    options: ["Audience contact", "Call and response", "Text analysis", "Stage lighting"],
    answer: "Text analysis",
    explanation: "Text analysis is understanding a poem well enough to say it in your own words.",
  },
  {
    prompt: "Which voice skill do you use when you speed up or slow down your reading?",
    options: ["Pace", "Pitch", "Tone", "Posture"],
    answer: "Pace",
    explanation: "Pace is how fast or slow you speak.",
  },
  {
    prompt: "What does pitch mean when you perform a poem?",
    options: ["How fast you speak", "How many words you say", "How loud the audience claps", "How high or low your voice sounds"],
    answer: "How high or low your voice sounds",
    explanation: "Pitch is the highness or lowness of your voice.",
  },
  {
    prompt: "Why might you pause before an important line?",
    options: ["To forget the next word", "To give the line extra emphasis", "To let the audience leave", "To change the title"],
    answer: "To give the line extra emphasis",
    explanation: "A justified pause makes the audience listen to the next words.",
  },
  {
    prompt: "A poem describes a sad memory. Which way of speaking suits it best?",
    options: ["Quick and cheerful", "Loud and joking", "Slow and soft", "Fast and shouting"],
    answer: "Slow and soft",
    explanation: "Your voice should match the mood of the poem.",
  },
  {
    prompt: "What is praise poetry?",
    options: ["Poetry that praises a person", "A poem that rhymes in English", "A song sung without any words", "A play performed with puppets"],
    answer: "Poetry that praises a person",
    explanation: "Praise poetry praises a person or group and uses descriptive naming phrases.",
  },
  {
    prompt: "What are descriptive naming phrases in praise poetry?",
    options: ["Phrases that list the rules", "Phrases that count the lines", "Phrases that give stage directions", "Phrases that describe a person's qualities"],
    answer: "Phrases that describe a person's qualities",
    explanation: "A naming phrase describes the qualities of the person being praised.",
  },
  {
    prompt: "Who performs praise poetry for a community?",
    options: ["The lighting designer", "The praise poet", "The set painter", "The ticket seller"],
    answer: "The praise poet",
    explanation: "The praise poet (imbongi) performs for the community.",
  },
  {
    prompt: "In call and response, what does the audience do?",
    options: ["They stay silent until the end", "They copy the poet's costume", "They answer the poet's call", "They read the poem silently"],
    answer: "They answer the poet's call",
    explanation: "Call and response is a shared performance between the poet and the audience.",
  },
  {
    prompt: "Which features make a praise poem easy to remember?",
    options: ["Repetition and rhythm", "Long silences between words", "Whispering from start to end", "A new topic in every line"],
    answer: "Repetition and rhythm",
    explanation: "Repetition and a strong rhythm help the audience to remember the poem.",
  },
  {
    prompt: "How can you build a praise poem towards its ending?",
    options: ["Fade your voice to a whisper", "Stop moving and look away", "Read each line at one speed", "Build up pace and volume"],
    answer: "Build up pace and volume",
    explanation: "Building pace and volume gives the performance a strong finish.",
  },
  {
    prompt: "Which of these helps to create the mood of a poem?",
    options: ["The price of the ticket", "Your voice and your movement", "The colour of the programme", "The size of the hall"],
    answer: "Your voice and your movement",
    explanation: "Voice and movement create mood.",
  },
  {
    prompt: "A performer holds completely still for a moment during a poem. What can this show?",
    options: ["That the words were forgotten", "That the poem has finished", "A strong feeling or a tense moment", "That the audience must leave"],
    answer: "A strong feeling or a tense moment",
    explanation: "Stillness used on purpose draws the audience in.",
  },
  {
    prompt: "What is audience contact?",
    options: ["Looking at and connecting with the audience", "Reading from the page without looking up", "Standing with your back to them", "Whispering to the person next to you"],
    answer: "Looking at and connecting with the audience",
    explanation: "Good audience contact makes the performance engaging.",
  },
];

const SaPoetryPraisePoetry = () => (
  <CapsSubjectTopic
    title="South African Poetry and Praise Poetry"
    subtitle="Interpreting a poem, mood, praise poetry, call and response and the role of the praise poet"
    learnSteps={learnSteps}
    task="gr8-ca-poetry-praise-t2"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default SaPoetryPraisePoetry;
