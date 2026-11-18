import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PoemBox } from '../../../../../components/subjects/lesson/PoemBox';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

// Poems are either written for this lesson (and say so) or public domain (author, title and year are given). See docs/notes/g9-poetry-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Tone and mood with evidence",
    content: slide(
      <>
        <Rule>{"The tone is the speaker's attitude, shown through word choice and sound. The mood is the atmosphere, or the feeling the poem gives the reader. Use precise words, such as bitter, tender, mocking or wistful, and prove them with words from the poem."}</Rule>
        <PoemBox label={"Poem A"} provenance={"Public domain: Percy Bysshe Shelley, \"Ozymandias\", 1818 (last six lines)."} lines={[
            "And on the pedestal, these words appear:",
            "'My name is Ozymandias, King of Kings;",
            "Look on my Works, ye Mighty, and despair!'",
            "Nothing beside remains. Round the decay",
            "Of that colossal Wreck, boundless and bare",
            "The lone and level sands stretch far away.",
        ]} />
        <FactCards
          cards={[
            { title: "Tone", line1: "the speaker's attitude,", line2: "shown by word choice" },
            { title: "Mood", line1: "the atmosphere and", line2: "the reader's feeling" },
            { title: "Precise words", line1: "mocking, tender,", line2: "bitter, wistful" },
            { title: "Proof", line1: "quote the words", line2: "that show it" },
          ]}
          aria={"Tone and mood. Tone is the speaker's attitude, shown by word choice. Mood is the atmosphere and the reader's feeling. Use precise words, such as mocking, tender, bitter or wistful, and prove them by quoting."}
        />
        <Worked
          title={"Look at Poem A"}
          steps={[
            "Mood: \"Nothing beside remains\" and \"lone and level sands\" create a mood of emptiness and loss.",
            "Tone: the speaker describes the ruined statue calmly and the shattered pride with quiet irony.",
            "Proof: \"boundless and bare\" and \"stretch far away\" suggest that nothing lasts.",
          ]}
        />
        <Mistake>{"Using vague words such as \"good\" or \"bad\". Choose an exact word, such as bleak or tender, and prove it with a quotation."}</Mistake>
      </>,
    ),
  },
  {
    title: "Irony and contrast",
    content: slide(
      <>
        <Rule>{"Irony means that what is said or what happens is different from what is expected. Verbal irony says one thing and means another. Situational irony is when events turn out opposite to what we expect. Contrast sets two things side by side to bring out the difference."}</Rule>
        <PoemBox label={"Poem A"} provenance={"Public domain: Percy Bysshe Shelley, \"Ozymandias\", 1818 (last six lines)."} lines={[
            "And on the pedestal, these words appear:",
            "'My name is Ozymandias, King of Kings;",
            "Look on my Works, ye Mighty, and despair!'",
            "Nothing beside remains. Round the decay",
            "Of that colossal Wreck, boundless and bare",
            "The lone and level sands stretch far away.",
        ]} />
        <FactCards
          cards={[
            { title: "Verbal irony", line1: "says one thing,", line2: "means another" },
            { title: "Situational irony", line1: "events turn out", line2: "opposite to plan" },
            { title: "Contrast", line1: "two things set", line2: "side by side" },
            { title: "Effect", line1: "makes a point", line2: "without saying it" },
          ]}
          aria={"Irony and contrast. Verbal irony says one thing and means another. Situational irony is when events turn out the opposite of what we expect. Contrast sets two things side by side. Irony makes a point without saying it directly."}
        />
        <Worked
          title={"Find the irony in Poem A"}
          steps={[
            "The inscription says \"Look on my Works, ye Mighty, and despair!\", meaning that the king expected people to be awed by his power.",
            "The situation is ironic: all that is left is the \"colossal Wreck\" in the empty sand, so the king's boast shows how little lasted.",
            "The contrast between the proud words and the empty sands makes the poet's point about the limits of power.",
          ]}
        />
        <Mistake>{"Calling anything surprising \"irony\". Irony needs a gap between what is expected or said and what really happens or is meant."}</Mistake>
      </>,
    ),
  },
  {
    title: "The poet's message",
    content: slide(
      <>
        <Rule>{"The message, or theme, is the main idea that the poet wants the reader to think about. To state it, put it in a full sentence, and support it with the title, the images, the tone, the structure and the ending. Different readers may word it differently, but the evidence must support it."}</Rule>
        <PoemBox label={"Poem B"} provenance={"Original poem written for this lesson."} lines={[
            "He polished the trophy every Sunday,",
            "fourteen years since the school won it,",
            "told his grandchildren how he ran",
            "and let them hold it, just for a second.",
            "",
            "The trophy is a little dull now.",
            "He is not. He is somebody's story.",
        ]} />
        <FactCards
          cards={[
            { title: "Message", line1: "the main idea in", line2: "a full sentence" },
            { title: "Evidence", line1: "title, images,", line2: "tone and structure" },
            { title: "Ending", line1: "often the strongest", line2: "clue to the message" },
            { title: "Own words", line1: "not copied", line2: "from the poem" },
          ]}
          aria={"The poet's message. State the message in a full sentence. Support it with evidence from the title, images, tone and structure. The ending is often the strongest clue. Use your own words and do not copy from the poem."}
        />
        <Worked
          title={"Look at Poem B"}
          steps={[
            "Tone: gentle and affectionate, as in \"let them hold it, just for a second\".",
            "Contrast: the trophy \"is a little dull now\" but \"He is not\": an old object loses its shine, but the man does not.",
            "Message: a person's value is in the stories and love that they pass on, not in objects or old glory.",
          ]}
        />
        <Mistake>{"Stating a topic instead of a message. \"The poem is about a trophy\" is a topic; \"People matter more than their trophies\" is a message."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "What is the difference between tone and mood?",
          "What is irony?",
          "What is contrast?",
          "Why is \"The poem is about a trophy\" not a message?",
        ]}
        answers={[
          "Tone is the speaker's attitude; mood is the atmosphere and the reader's feeling.",
          "A difference between what is said or expected and what is meant or what happens.",
          "Setting two things side by side to bring out the difference.",
          "It names a topic; a message is an idea expressed in a full sentence.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is the tone of a poem?",
    options: ["The atmosphere of the poem", "The pattern of the rhymes", "The speaker's attitude", "The number of stanzas"],
    answer: "The speaker's attitude",
    explanation: "Tone is the attitude of the speaker.",
  },
  {
    prompt: "What is the mood of a poem?",
    options: ["The atmosphere and feeling", "The speaker's attitude to it", "The rhyme scheme of it", "The title of the poem"],
    answer: "The atmosphere and feeling",
    explanation: "Mood is the feeling the poem creates.",
  },
  {
    prompt: "Which word best describes the tone of 'Oh yes, I love waiting in the rain for three hours'?",
    options: ["Delighted", "Thankful", "Fearful", "Sarcastic"],
    answer: "Sarcastic",
    explanation: "The speaker means the opposite of what is said.",
  },
  {
    prompt: "What kind of irony is 'Oh yes, I love waiting in the rain for three hours'?",
    options: ["Situational irony", "Verbal irony", "A simile", "A refrain"],
    answer: "Verbal irony",
    explanation: "The speaker says one thing and means another.",
  },
  {
    prompt: "A fire station burns down. What kind of irony is this?",
    options: ["Verbal irony of speech", "A metaphor of burning", "Situational irony", "A couplet in rhyme"],
    answer: "Situational irony",
    explanation: "The outcome is the opposite of what is expected.",
  },
  {
    prompt: "The poem lists 'the shining shop windows' and then 'the child with bare feet outside'. Which device is this?",
    options: ["Contrast", "Onomatopoeia", "Alliteration", "A refrain"],
    answer: "Contrast",
    explanation: "Two opposite things are placed side by side.",
  },
  {
    prompt: "Which words suggest a bitter tone?",
    options: ["'Warm, kind, bright, soft'", "'Soft, quiet, gentle, slow'", "'Small, green, light, young'", "'Bitter, empty, cold, hard'"],
    answer: "'Bitter, empty, cold, hard'",
    explanation: "The words laugh, empty and cold carry bitterness.",
  },
  {
    prompt: "The poem ends: 'And still the empty chair waits at the table.' What is the mood?",
    options: ["Excited", "Sad and lonely", "Angry and loud", "Proud"],
    answer: "Sad and lonely",
    explanation: "The empty chair suggests loss.",
  },
  {
    prompt: "Which is a message, not a topic?",
    options: ["A poem about friends and school life", "The poem is about the school", "True friends stay in hard times", "Friends and hard times"],
    answer: "True friends stay in hard times",
    explanation: "A message is a full idea about the subject.",
  },
  {
    prompt: "Why is the ending of a poem important for the message?",
    options: ["It is often the strongest clue", "It is the longest stanza of the poem", "It tells the poet's name", "It changes the title"],
    answer: "It is often the strongest clue",
    explanation: "The ending often draws the idea together.",
  },
  {
    prompt: "What should you do when you say that the tone is 'mocking'?",
    options: ["Repeat the word mocking", "Add that you like the poem", "Count the lines in it", "Prove it with a quotation"],
    answer: "Prove it with a quotation",
    explanation: "Evidence from the poem makes the answer complete.",
  },
  {
    prompt: "Which pair shows a contrast?",
    options: ["Two rhyming words in a row", "Wealth and poverty", "A repeated line in a stanza", "A sound word in a line"],
    answer: "Wealth and poverty",
    explanation: "Contrast shows a difference by placing opposites together.",
  },
  {
    prompt: "A speaker says 'What a lovely day!' while standing in a storm. Why is it ironic?",
    options: ["The words rhyme with the storm", "The speaker is a poet", "Words do not match the scene", "The words are in a stanza of four lines"],
    answer: "Words do not match the scene",
    explanation: "The gap between words and situation creates the irony.",
  },
  {
    prompt: "Which sentence states a theme well?",
    options: ["Time wears away proud power", "A poem about a king", "Statues and the desert sand", "The poet uses a pedestal in line one"],
    answer: "Time wears away proud power",
    explanation: "A theme is a full idea about life.",
  },
];

const ToneMoodIronyAndMessage = () => (
  <CapsSubjectTopic
    title={"Tone, Mood, Irony and the Poet's Message"}
    subtitle={"Reading the speaker's attitude, the feeling of the poem, irony and the message"}
    learnSteps={learnSteps}
    task={"gr9-tone-mood-irony-and-message-t3"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ToneMoodIronyAndMessage;
