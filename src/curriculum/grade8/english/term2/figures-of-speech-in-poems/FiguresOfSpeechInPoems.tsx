import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PoemBox } from '../../../../../components/subjects/lesson/PoemBox';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

// Poems are either written for this lesson (and say so) or public domain (author, title and year are given). See docs/notes/g8-poetry-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Simile and metaphor",
    content: slide(
      <>
        <Rule>{"A simile compares two things using like or as. A metaphor says that one thing is another thing, without like or as. Both make the reader see the first thing in a new way."}</Rule>
        <PoemBox label={"Poem A"} provenance={"Public domain: Alfred, Lord Tennyson, \"The Eagle\", 1851."} lines={[
            "He clasps the crag with crooked hands;",
            "Close to the sun in lonely lands,",
            "Ring'd with the azure world, he stands.",
            "",
            "The wrinkled sea beneath him crawls;",
            "He watches from his mountain walls,",
            "And like a thunderbolt he falls.",
        ]} />
        <PoemBox label={"Poem B"} provenance={"Public domain: Emily Dickinson, \"Hope\" is the thing with feathers\", 1891 (first stanza; written about 1861)."} lines={[
            "\"Hope\" is the thing with feathers -",
            "That perches in the soul -",
            "And sings the tune without the words -",
            "And never stops - at all -",
        ]} />
        <FactCards
          cards={[
            { title: "Simile", line1: "uses like or as", line2: "\"like a thunderbolt\"" },
            { title: "Metaphor", line1: "says one thing is", line2: "another: \"Hope is a bird\"" },
            { title: "Compare", line1: "name the two things", line2: "being compared" },
            { title: "Effect", line1: "what does it make", line2: "us see or feel?" },
          ]}
          aria={"Simile and metaphor. A simile uses like or as, as in like a thunderbolt. A metaphor says that one thing is another thing. Name the two things being compared and say what the comparison makes us see or feel."}
        />
        <Worked
          title={"Find them in Poems A and B"}
          steps={[
            "Poem A, line 6: \"like a thunderbolt he falls\" is a simile, comparing the eagle's fall to a thunderbolt. The effect is speed and power.",
            "Poem B, line 1: \"Hope is the thing with feathers\" is a metaphor, comparing hope to a bird. The effect is that hope feels light, alive and able to stay with us.",
            "The word \"like\" in the first and the missing \"like\" in the second show the difference.",
          ]}
        />
        <Mistake>{"Calling a metaphor a simile because it makes a comparison. If there is no \"like\" or \"as\", it is a metaphor."}</Mistake>
      </>,
    ),
  },
  {
    title: "Personification and hyperbole",
    content: slide(
      <>
        <Rule>{"Personification gives human actions or feelings to something that is not human. Hyperbole is a deliberate exaggeration for effect. Both make a poem more vivid."}</Rule>
        <PoemBox label={"Poem C"} provenance={"Public domain: Christina Rossetti, \"Who Has Seen the Wind?\", 1872."} lines={[
            "Who has seen the wind?",
            "Neither I nor you:",
            "But when the leaves hang trembling,",
            "The wind is passing through.",
            "",
            "Who has seen the wind?",
            "Neither you nor I:",
            "But when the trees bow down their heads,",
            "The wind is passing by.",
        ]} />
        <FactCards
          cards={[
            { title: "Personification", line1: "a thing acts or feels", line2: "like a person" },
            { title: "Hyperbole", line1: "a deliberate", line2: "exaggeration" },
            { title: "Example 1", line1: "\"the trees bow down", line2: "their heads\"" },
            { title: "Example 2", line1: "\"I have waited", line2: "a thousand years\"" },
          ]}
          aria={"Personification and hyperbole. Personification gives human actions to something that is not human, as in the trees bow down their heads. Hyperbole is a deliberate exaggeration, as in I have waited a thousand years."}
        />
        <Worked
          title={"Find them in Poems C and A"}
          steps={[
            "Poem C, line 7: \"the trees bow down their heads\" is personification, because trees cannot bow. The effect is that the wind seems to have power over the trees.",
            "Poem A, line 1: \"He clasps the crag with crooked hands\" is personification, because the eagle's claws are called hands. The effect is that the eagle seems strong and sure.",
            "Hyperbole: \"I have waited a thousand years\" shows how long a wait felt, not how long it really was.",
          ]}
        />
        <Mistake>{"Thinking that personification is only about people in the poem. It is about a non-human thing that is given human actions or feelings."}</Mistake>
      </>,
    ),
  },
  {
    title: "Onomatopoeia and explaining the effect",
    content: slide(
      <>
        <Rule>{"Onomatopoeia is a word that sounds like the sound it names, such as honk, screech or buzz. To explain the effect of any figure of speech, name the figure, quote the words, say what is compared or imitated, and say what it makes the reader see, hear or feel."}</Rule>
        <PoemBox label={"Poem D"} provenance={"Original poem written for this lesson."} lines={[
            "Honk! Honk! The taxis roar like lions,",
            "a thousand voices shout my name,",
            "the engines cough and the brakes go screech,",
            "and the whole wide city is waiting for me.",
        ]} />
        <FactCards
          cards={[
            { title: "Onomatopoeia", line1: "words that sound", line2: "like their meaning" },
            { title: "Quote", line1: "use the exact words", line2: "from the poem" },
            { title: "Explain", line1: "say what is", line2: "compared or heard" },
            { title: "Effect", line1: "what it makes the", line2: "reader see or feel" },
          ]}
          aria={"Onomatopoeia and explaining the effect. Onomatopoeia is a word that sounds like its meaning, such as honk or screech. To explain an effect, quote the words, say what is compared or heard, and say what it makes the reader see, hear or feel."}
        />
        <Worked
          title={"Look at Poem D"}
          steps={[
            "\"Honk! Honk!\" and \"screech\" are onomatopoeia: we hear the taxis in the words.",
            "\"The taxis roar like lions\" is a simile comparing taxis to lions. The effect is loud, wild power.",
            "\"A thousand voices\" is hyperbole, showing how crowded and noisy the rank feels.",
          ]}
        />
        <Mistake>{"Naming a figure without explaining it. Always add what the figure does: \"It makes the traffic sound wild and powerful.\""}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "What is the difference between a simile and a metaphor?",
          "What is personification?",
          "What is hyperbole?",
          "Name two onomatopoeic words.",
        ]}
        answers={[
          "A simile uses like or as; a metaphor says that one thing is another.",
          "Giving human actions or feelings to something that is not human.",
          "A deliberate exaggeration for effect.",
          "For example: honk and screech.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which figure of speech is 'The night was as black as ink'?",
    options: ["A metaphor", "Personification", "A simile", "Onomatopoeia"],
    answer: "A simile",
    explanation: "It compares the night to ink and uses as.",
  },
  {
    prompt: "Which figure of speech is 'The classroom was a zoo'?",
    options: ["A metaphor", "A simile", "Hyperbole", "Onomatopoeia"],
    answer: "A metaphor",
    explanation: "It says that the classroom is a zoo, with no like or as.",
  },
  {
    prompt: "Which figure of speech is 'The old house stretched and yawned in the morning'?",
    options: ["A simile about houses", "Onomatopoeia and sound", "A metaphor in line one", "Personification"],
    answer: "Personification",
    explanation: "A house cannot groan like a person.",
  },
  {
    prompt: "Which figure of speech is 'I have told you a million times'?",
    options: ["A simile", "Hyperbole", "Personification", "A metaphor"],
    answer: "Hyperbole",
    explanation: "It exaggerates to show how often it happened.",
  },
  {
    prompt: "Which word is onomatopoeia?",
    options: ["Quiet", "Heavy", "Thud", "Floor"],
    answer: "Thud",
    explanation: "The word thud sounds like the sound it names.",
  },
  {
    prompt: "What does the metaphor 'time is a thief' suggest?",
    options: ["Time takes things from us", "Time steals objects from shops", "Clocks are made by thieves", "Time runs faster at night"],
    answer: "Time takes things from us",
    explanation: "A thief takes things; time takes moments of our lives.",
  },
  {
    prompt: "What is compared in the simile 'the wind was like a whip'?",
    options: ["A whip and a shop", "A wind and a cloud", "The poet and a storm", "The wind and a whip"],
    answer: "The wind and a whip",
    explanation: "The simile compares the wind and a whip.",
  },
  {
    prompt: "What is the effect of the simile 'she ran like the wind'?",
    options: ["It shows that she was cold", "It shows how fast she ran", "It shows that she was slow", "It shows the weather was bad"],
    answer: "It shows how fast she ran",
    explanation: "The comparison with the wind suggests speed.",
  },
  {
    prompt: "Which line contains personification?",
    options: ["The sun rose at six o'clock", "The village is in the valley", "The sun smiled down on us", "It was a warm, bright day"],
    answer: "The sun smiled down on us",
    explanation: "The sun cannot smile; the line gives it a human action.",
  },
  {
    prompt: "Which line contains a simile?",
    options: ["His voice was as rough as sandpaper", "His voice was a rough, dry sound that carried", "His voice carried across the field", "He shouted a thousand times"],
    answer: "His voice was as rough as sandpaper",
    explanation: "The word as shows a simile.",
  },
  {
    prompt: "What is hyperbole used for?",
    options: ["To tell the exact truth", "To count things carefully", "To list the facts plainly", "To stress a feeling"],
    answer: "To stress a feeling",
    explanation: "Hyperbole exaggerates for effect.",
  },
  {
    prompt: "Which line uses onomatopoeia?",
    options: ["The kettle was on the stove by the sink", "The kettle hissed and the cups clinked", "The cups were in the cupboard above", "The tea was hot and sweet to drink"],
    answer: "The kettle hissed and the cups clinked",
    explanation: "Hissed and clinked sound like their meanings.",
  },
  {
    prompt: "Which sentence explains an effect well?",
    options: ["The poet uses a metaphor in the second line", "There is a metaphor in line two", "The metaphor shows the cold around him", "It is a nice comparison to read"],
    answer: "The metaphor shows the cold around him",
    explanation: "A good answer names the figure, quotes the words and explains the effect.",
  },
  {
    prompt: "What is the difference between a simile and a metaphor?",
    options: ["A simile uses like or as, a metaphor does not", "A metaphor uses like or as, a simile does not", "A simile is longer than a metaphor", "A metaphor is about people, a simile is not"],
    answer: "A simile uses like or as, a metaphor does not",
    explanation: "Only a simile uses like or as.",
  },
];

const FiguresOfSpeechInPoems = () => (
  <CapsSubjectTopic
    title={"Figures of Speech in Poems"}
    subtitle={"Simile, metaphor, personification, hyperbole and onomatopoeia, and what they do"}
    learnSteps={learnSteps}
    task={"gr8-figures-of-speech-in-poems-t2"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default FiguresOfSpeechInPoems;
