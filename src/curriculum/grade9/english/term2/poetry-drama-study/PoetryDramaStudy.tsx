import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    title: 'Analyse poetic devices in poems',
    image: {
      src: '/curriculum/grade9/english/term2/poetry-drama-study/image1.jpg',
      alt: 'learner identifying rhyme scheme imagery tone and theme in a poem',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Poetry uses devices like rhyme, imagery, metaphor, and symbolism to create meaning. Close reading helps 
          identify these devices and explain how they support the poem\'s theme and emotional impact.
        </p>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"Macbeth\" — William Shakespeare"}
        text={"Out, out, brief candle! Life's but a walking shadow, a poor player that struts and frets his hour upon the stage."}
        annotations={[
          { start: 10, end: 22, device: "symbolism", note: "The candle symbolises how fragile and temporary life can be." },
          { start: 37, end: 51, device: "metaphor", note: "Life is compared to something insubstantial, deepening the tragedy." },
          { start: 55, end: 66, device: "metaphor", note: "Shakespeare turns life into a performance to stress its emptiness." },
          { start: 72, end: 88, device: "diction", note: "The verbs suggest noisy anxiety, helping the speech sound bitter and restless." },
        ]}
      />
    ),
  },
  {
    title: 'Understand drama through characterisation and dialogue',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In drama, characters reveal themselves through dialogue and action. Scene analysis looks at how conflicts 
          develop, how characters change, and what themes emerge from their interactions.
        </p>
      </div>
    ),
  },
  {
    title: 'Support responses with textual evidence',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong literary analysis uses quotations and line references as proof. Connect specific words or actions 
          to your interpretation to make your response convincing and grounded in the text.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is rhyme scheme?',
    options: ['the pattern of rhyming words in a poem', 'the rhythm of the syllables in a line of verse', 'the number of lines in each verse of a poem', 'the way that a poem is set out on a page'],
    answer: 'the pattern of rhyming words in a poem',
    explanation: 'Rhyme scheme shows which lines end with similar sounds.',
  },
  {
    prompt: 'Which literary device uses "the wind whispered"?',
    options: ['personification', 'rhyme', 'alliteration', 'dialogue'],
    answer: 'personification',
    explanation: 'Personification gives human qualities to non-human things.',
  },
  {
    prompt: 'What does imagery in poetry help a reader do?',
    options: ['picture scenes by using sensory details', 'follow the rhyme of the poem by ear', 'identify the number of syllables in each line', 'work out the rules of grammar in each line'],
    answer: 'picture scenes by using sensory details',
    explanation: 'Imagery appeals to the senses and creates vivid mental pictures.',
  },
  {
    prompt: 'In drama, characterisation is developed through...',
    options: ['dialogue, actions and what other characters say', 'stage directions about the set and lighting only', 'the mood of the audience as the play goes on', 'the number of scenes and acts in the play'],
    answer: 'dialogue, actions and what other characters say',
    explanation: 'Multiple elements combine to show what a character is like.',
  },
  {
    prompt: 'What is a theme in literature?',
    options: ['the central idea or message of the work', 'the title that the author gave to the work', 'the longest line or passage in the work', 'the funniest part of the work'],
    answer: 'the central idea or message of the work',
    explanation: 'Theme is the underlying meaning that connects plot and character.',
  },
  {
    prompt: 'When analysing a poem, which is most important?',
    options: ['using quotations to support your interpretation', 'naming the poet and the year of publication', 'counting the lines and the verses in the poem', 'retelling the poem in your own words'],
    answer: 'using quotations to support your interpretation',
    explanation: 'Evidence from the text makes your analysis credible.',
  },
  {
    prompt: 'What does tone in poetry refer to?',
    options: ['the attitude or feeling that the speaker conveys', 'the volume at which a poem is read aloud', 'the rhyming words found at the line ends', 'the colour of the paper that it is printed on'],
    answer: 'the attitude or feeling that the speaker conveys',
    explanation: 'Tone shows the speaker\'s perspective and emotional stance.',
  },
  {
    prompt: 'A scene analysis in drama should identify...',
    options: ['character conflicts, dialogue and how the scene moves the plot on', 'the funniest moments in the scene and nothing else', 'the spelling mistakes that the playwright made', 'the names of the actors who performed the scene'],
    answer: 'character conflicts, dialogue and how the scene moves the plot on',
    explanation: 'Scene analysis connects dramatic elements to overall meaning.',
  },
];

const PoetryDramaStudy = () => (
  <CapsSubjectTopic
    title="Poetry and Drama Study"
    subtitle="Literary devices, characterisation, theme, dialogue and textual evidence"
    learnSteps={learnSteps}
    task="gr9-poetry-drama-study-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default PoetryDramaStudy;
