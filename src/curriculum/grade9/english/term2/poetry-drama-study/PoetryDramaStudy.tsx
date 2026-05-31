import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

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
    options: ['the pattern of rhyming words in a poem', 'the rhythm of speech only', 'the size of the font', 'a type of dance'],
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
    options: ['visualize scenes using sensory details', 'avoid reading actively', 'ignore the poet\'s message', 'understand mathematics'],
    answer: 'visualize scenes using sensory details',
    explanation: 'Imagery appeals to the senses and creates vivid mental pictures.',
  },
  {
    prompt: 'In drama, characterisation is developed through...',
    options: ['dialogue, actions, and what other characters say', 'stage directions only', 'the audience\'s mood', 'random plot points'],
    answer: 'dialogue, actions, and what other characters say',
    explanation: 'Multiple elements combine to show what a character is like.',
  },
  {
    prompt: 'What is a theme in literature?',
    options: ['the central idea or message in the work', 'the title of the book', 'the longest line', 'only the funny parts'],
    answer: 'the central idea or message in the work',
    explanation: 'Theme is the underlying meaning that connects plot and character.',
  },
  {
    prompt: 'When analysing a poem, which is most important?',
    options: ['using quotations to support your interpretation', 'guessing the poet\'s name', 'counting the lines only', 'ignoring word choice'],
    answer: 'using quotations to support your interpretation',
    explanation: 'Evidence from the text makes your analysis credible.',
  },
  {
    prompt: 'What does tone in poetry refer to?',
    options: ['the attitude or feeling conveyed by the speaker', 'the volume of reading aloud', 'only the rhyming words', 'the page colour'],
    answer: 'the attitude or feeling conveyed by the speaker',
    explanation: 'Tone shows the speaker\'s perspective and emotional stance.',
  },
  {
    prompt: 'A scene analysis in drama should identify...',
    options: ['character conflicts, dialogue, and how the scene advances the plot', 'only funny moments', 'mistakes in spelling', 'audience member names'],
    answer: 'character conflicts, dialogue, and how the scene advances the plot',
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
