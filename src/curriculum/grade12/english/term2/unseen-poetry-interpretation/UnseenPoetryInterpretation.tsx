import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps = [
  {
    title: "Finding the speaker and situation",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"In unseen poetry, first establish who seems to be speaking, to whom, and in what situation. This prevents you from analysing isolated devices without understanding the poem's basic context. A careful first reading gives you the emotional and literal frame needed for deeper interpretation."}</p>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"The Sick Rose\" — William Blake"}
        text={"O Rose, thou art sick. The invisible worm that flies in the night, in the howling storm,"}
        annotations={[
          { start: 0, end: 6, device: "symbolism", note: "The rose can be read as a symbol of beauty, innocence, or vulnerability." },
          { start: 27, end: 41, device: "symbolism", note: "The hidden worm suggests a secret force of corruption or destruction." },
          { start: 74, end: 87, device: "personification", note: "The storm is given a human cry, which intensifies the danger." },
          { start: 8, end: 21, device: "tone", note: "The direct warning creates an urgent, ominous tone." },
        ]}
      />
    ),
  },
  {
    title: "Reading imagery and figurative language",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Images, metaphors, similes and symbols carry much of a poem's meaning. Instead of only naming the device, explain what picture or association it creates and why it matters to the speaker's message. CAPS poetry answers earn more when they move from identification to effect."}</p>
      </div>
    ),
  },
  {
    title: "Using structure as meaning",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Line length, stanza arrangement, repetition, enjambment and pauses can all shape how the poem feels. A sudden short line may create emphasis; enjambment may suggest flow, tension or lack of closure. Form is not decoration \u2014 it supports meaning."}</p>
      </div>
    ),
  },
  {
    title: "Comparing seen and unseen poems",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"When poems are compared, look for links in theme, tone or imagery before noting differences. Use comparative language such as similarly, in contrast and whereas to keep the relationship clear. Good comparison stays specific to the evidence, not general or vague."}</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What should you identify early when reading an unseen poem?",
    options: ["The poet's exam mark", "The speaker and the situation", "The author's home address", "The price of the anthology"],
    answer: "The speaker and the situation",
    explanation: "Knowing who speaks and in what context helps anchor the rest of your interpretation.",
  },
  {
    prompt: "If a poem describes hope as \"a stubborn flame\", which device is used?",
    options: ["Hyperbole", "Metaphor", "Pun", "Allusion"],
    answer: "Metaphor",
    explanation: "The poem directly compares hope to a flame without using \"like\" or \"as\", so it is a metaphor.",
  },
  {
    prompt: "What does enjambment often do?",
    options: ["Ends every idea neatly at the line break", "Carries meaning over the line to create flow or tension", "Removes all imagery from the poem", "Changes a poem into a play"],
    answer: "Carries meaning over the line to create flow or tension",
    explanation: "Enjambment runs a sentence into the next line, often affecting pace and emphasis.",
  },
  {
    prompt: "Why is naming a device alone not enough?",
    options: ["Because devices are not examined", "Because you must explain its effect on meaning or tone", "Because only rhyme matters", "Because poems have no message"],
    answer: "Because you must explain its effect on meaning or tone",
    explanation: "CAPS poetry answers need explanation of how a device contributes to the poem.",
  },
  {
    prompt: "What does tone describe in poetry?",
    options: ["The speaker's attitude", "The number of syllables", "The publication date", "The poem's title page"],
    answer: "The speaker's attitude",
    explanation: "Tone is the emotional or attitudinal quality created by the speaker's language.",
  },
  {
    prompt: "Which comparison phrase signals similarity?",
    options: ["In contrast", "Similarly", "On the other hand", "Instead"],
    answer: "Similarly",
    explanation: "Similarly helps you show that two poems share a feature or effect.",
  },
  {
    prompt: "A repeated sound pattern at the beginning of nearby words is called...",
    options: ["Assonance", "Alliteration", "Contrast", "Caesura"],
    answer: "Alliteration",
    explanation: "Alliteration repeats initial consonant sounds for emphasis or musical effect.",
  },
  {
    prompt: "What is the best evidence source in an unseen-poetry answer?",
    options: ["Your memory of another subject", "Specific words or lines from the poem", "Only the poem's title", "The examiner's comments"],
    answer: "Specific words or lines from the poem",
    explanation: "Interpretation should be supported with direct reference to the poem itself.",
  },
];

const UnseenPoetryInterpretation = () => (
  <CapsSubjectTopic
    title="Unseen Poetry Interpretation"
    subtitle="Approaching unseen poetry with method, close reading and controlled interpretation"
    learnSteps={learnSteps}
    task="gr12-unseen-poetry-interpretation-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default UnseenPoetryInterpretation;
