import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PoemBox } from '../../../../../components/subjects/lesson/PoemBox';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';

// Poems are either written for this lesson (and say so) or public domain (author, title and year are given). See docs/notes/g9-poetry-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Imagery: poems that appeal to the senses",
    content: slide(
      <>
        <Rule>{"Imagery is language that makes the reader see, hear, touch, smell or taste something. Visual imagery appeals to sight, auditory imagery to hearing, tactile imagery to touch, and so on. Good imagery is specific, and it also suggests a feeling."}</Rule>
        <PoemBox label={"Poem A"} provenance={"Public domain: William Wordsworth, \"I Wandered Lonely as a Cloud\", 1807 (first stanza)."} lines={[
            "I wandered lonely as a cloud",
            "That floats on high o'er vales and hills,",
            "When all at once I saw a crowd,",
            "A host, of golden daffodils;",
            "Beside the lake, beneath the trees,",
            "Fluttering and dancing in the breeze.",
        ]} />
        <FactCards
          cards={[
            { title: "Visual", line1: "sight: golden,", line2: "a crowd of flowers" },
            { title: "Auditory", line1: "sound: whisper,", line2: "roar, silence" },
            { title: "Tactile", line1: "touch: rough,", line2: "cold, soft" },
            { title: "Smell and taste", line1: "the scent of rain,", line2: "a bitter taste" },
          ]}
          aria={"Imagery. Visual imagery appeals to sight. Auditory imagery appeals to hearing. Tactile imagery appeals to touch. Other images appeal to smell and taste. Good imagery is specific and suggests a feeling."}
        />
        <Worked
          title={"Look at Poem A"}
          steps={[
            "\"a host, of golden daffodils\" is visual imagery: we see a large crowd of golden flowers.",
            "\"Fluttering and dancing in the breeze\" adds movement, so the flowers seem alive and joyful.",
            "The images suggest a mood of delight, which is the feeling the speaker wants us to share.",
          ]}
        />
        <Mistake>{"Listing images without saying what they suggest. Always add the feeling or idea: the golden flowers make the scene feel bright and joyful."}</Mistake>
      </>,
    ),
  },
  {
    title: "Symbols and extended metaphor",
    content: slide(
      <>
        <Rule>{"A symbol is a thing that stands for an idea, such as a rose for love. An extended metaphor is a comparison that continues through several lines. To read a symbol, ask what the thing is, what it usually stands for, and how the poem uses it."}</Rule>
        <PoemBox label={"Poem B"} provenance={"Public domain: William Blake, \"The Sick Rose\", 1794."} lines={[
            "O Rose thou art sick!",
            "The invisible worm,",
            "That flies in the night",
            "In the howling storm:",
            "",
            "Has found out thy bed",
            "Of crimson joy:",
            "And his dark secret love",
            "Does thy life destroy.",
        ]} />
        <FactCards
          cards={[
            { title: "Symbol", line1: "a thing that stands", line2: "for an idea" },
            { title: "The rose", line1: "often stands for", line2: "love or beauty" },
            { title: "Extended metaphor", line1: "one comparison that", line2: "runs through lines" },
            { title: "Ask", line1: "what is it, and what", line2: "does it stand for?" },
          ]}
          aria={"Symbols and extended metaphor. A symbol is a thing that stands for an idea, such as a rose for love or beauty. An extended metaphor is one comparison that runs through several lines. Ask what the thing is and what it stands for."}
        />
        <Worked
          title={"Look at Poem B"}
          steps={[
            "The rose is a symbol of love, beauty or a loved person.",
            "The \"invisible worm\" that \"flies in the night\" and destroys the rose symbolises something secret that harms love.",
            "Different readers suggest different meanings, such as jealousy, a hidden illness or a secret that harms a relationship, but all are based on the same symbols.",
          ]}
        />
        <Mistake>{"Taking a symbol too literally, or inventing a meaning that the poem does not support. Use the words around the symbol to decide what it stands for."}</Mistake>
      </>,
    ),
  },
  {
    title: "Reading images and symbols together",
    content: slide(
      <>
        <Rule>{"In a poem the images work together to create a mood and to point to an idea. To write about them, quote an image, name its type, explain what it suggests, and link it to the mood or theme of the poem."}</Rule>
        <PoemBox label={"Poem C"} provenance={"Original poem written for this lesson."} lines={[
            "The platform smells of rain and oil,",
            "the clock ticks like a heart gone slow.",
            "A woman folds her coat around a child",
            "and the last train swallows all the light.",
        ]} />
        <FactCards
          cards={[
            { title: "Quote", line1: "\"smells of rain and oil\"", line2: "the exact words" },
            { title: "Type", line1: "smell: a sense", line2: "image" },
            { title: "Suggest", line1: "a cold, grey,", line2: "working place" },
            { title: "Link", line1: "to the poem's mood", line2: "of loss" },
          ]}
          aria={"Reading images together. Quote the image, such as smells of rain and oil. Name its type, such as a smell image. Say what it suggests, such as a cold, grey, working place. Link it to the mood of the poem, which is loss."}
        />
        <Worked
          title={"Look at Poem C"}
          steps={[
            "\"The platform smells of rain and oil\" is a smell image. It suggests a cold, grey, working place.",
            "\"The clock ticks like a heart gone slow\" is a simile with an auditory image. It suggests that time or life is slowing down.",
            "\"The last train swallows all the light\" is personification and a visual image, and it suggests the end of a day, or of something more. Together the images create a lonely, sad mood.",
          ]}
        />
        <Mistake>{"Saying \"the poet uses imagery\" without a quotation. An answer is not complete until it quotes the image and explains it."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "What is imagery?",
          "What is a symbol?",
          "What is an extended metaphor?",
          "What four steps help you to write about an image?",
        ]}
        answers={[
          "Language that makes the reader see, hear, touch, smell or taste something.",
          "A thing that stands for an idea.",
          "A comparison that continues through several lines.",
          "Quote it, name its type, say what it suggests, and link it to the mood or theme.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which sense does 'the cold, sharp edge of the stone' appeal to?",
    options: ["Sight", "Hearing", "Touch", "Taste"],
    answer: "Touch",
    explanation: "Cold and sharp are felt by touch.",
  },
  {
    prompt: "Which sense does 'the roar of the crowd' appeal to?",
    options: ["Hearing", "Smelling", "Touching", "Tasting"],
    answer: "Hearing",
    explanation: "A roar is heard.",
  },
  {
    prompt: "Which line contains visual imagery?",
    options: ["The sun was something people liked", "I had a day full of things", "It was a very nice time", "A red sun sank into the grey hills"],
    answer: "A red sun sank into the grey hills",
    explanation: "Red, grey and sank show what we see.",
  },
  {
    prompt: "Which line contains smell imagery?",
    options: ["The kitchen was on the left of the long hall", "The kitchen smelled of cinnamon and smoke", "The kitchen was a good room to be in on cold days", "We were in the kitchen for most of the day"],
    answer: "The kitchen smelled of cinnamon and smoke",
    explanation: "The smell of cinnamon and smoke appeals to smell.",
  },
  {
    prompt: "What does 'a white dove' usually symbolise?",
    options: ["Anger", "Hunger", "Peace", "Speed"],
    answer: "Peace",
    explanation: "The white dove is a common symbol of peace.",
  },
  {
    prompt: "What does 'a closed door' often symbolise in a poem?",
    options: ["A lost chance", "A new house", "A busy day", "A friendly visit"],
    answer: "A lost chance",
    explanation: "A closed door often stands for a barrier or a lost opportunity.",
  },
  {
    prompt: "What is a symbol?",
    options: ["A word that sounds like a noise", "A line that returns in a poem", "A comparison using like or as", "A thing that stands for an idea"],
    answer: "A thing that stands for an idea",
    explanation: "For example, a dove for peace.",
  },
  {
    prompt: "What is an extended metaphor?",
    options: ["A line that rhymes with the title", "A comparison across several lines", "A word that sounds like its meaning", "A very long poem of many pages"],
    answer: "A comparison across several lines",
    explanation: "One comparison is developed across the lines.",
  },
  {
    prompt: "In 'Life is a road with many bends, and I walk it with my grandmother's old shoes', what is compared in the extended metaphor?",
    options: ["Shoes and a grandmother's house", "Roads and shoes", "Life and a journey on a road", "Bends and old age"],
    answer: "Life and a journey on a road",
    explanation: "Life is compared to a road, and the comparison continues.",
  },
  {
    prompt: "Which sentence answers 'Explain the image' best?",
    options: ["'Rain and oil' suggests a cold place", "The poet uses a smell image in line one", "There is an image in the first line", "The line is about the rain and the oil"],
    answer: "'Rain and oil' suggests a cold place",
    explanation: "A full answer quotes, names the type and explains.",
  },
  {
    prompt: "What should you do after quoting an image?",
    options: ["Count the number of words in it", "Repeat it twice more", "Change it into prose", "Explain what it suggests"],
    answer: "Explain what it suggests",
    explanation: "The explanation is the point of the answer.",
  },
  {
    prompt: "A poem describes 'the golden light on the wet street, the soft hiss of tyres'. Which senses are used?",
    options: ["Smell and taste of food", "Sight and hearing", "Touch and taste of rain", "Sight and smell of fires"],
    answer: "Sight and hearing",
    explanation: "Golden light is seen and a hiss is heard.",
  },
  {
    prompt: "Why might a poet use a symbol instead of saying an idea directly?",
    options: ["It is easier for the reader to follow", "It makes the poem shorter on the page", "It can suggest many meanings", "It replaces the title of the poem"],
    answer: "It can suggest many meanings",
    explanation: "A symbol carries a feeling and an idea together.",
  },
  {
    prompt: "What does it mean if a poet's images are 'specific'?",
    options: ["They give clear details", "They are very long ones", "They rhyme with each other", "They are about nature alone"],
    answer: "They give clear details",
    explanation: "Specific images show particular details, not general words.",
  },
];

const ImageryAndSymbolismInPoems = () => (
  <CapsSubjectTopic
    title={"Imagery and Symbolism in Poems"}
    subtitle={"The senses in a poem, symbols, extended metaphor and how they carry meaning"}
    learnSteps={learnSteps}
    task={"gr9-imagery-and-symbolism-in-poems-t2"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ImageryAndSymbolismInPoems;
