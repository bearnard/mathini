import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    title: 'Engaging with prescribed prose and folklore',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Prescribed prose (novels) and folklore (oral tradition texts) are studied using <strong>mature literary terminology</strong>. You must move beyond "I like it" to analysis: how does the writer create meaning?
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Prose / Novel</strong>
            <p className="text-slate-600">Written narrative with chapters, narrator, plot, and character development. Analyse setting, conflict and resolution.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Folklore / Oral tradition</strong>
            <p className="text-slate-600">Stories passed down orally. Look for moral lessons, archetypes, repetition, and cultural values.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"Bleak House\" — Charles Dickens"}
        text={"Fog everywhere. Fog up the river, where it flows among green aits and meadows; fog down the river, where it rolls defiled among the tiers of shipping."}
        annotations={[
          { start: 0, end: 14, device: "tone", note: "The blunt repetition establishes a heavy, oppressive atmosphere immediately." },
          { start: 43, end: 77, device: "imagery", note: "The river scene is painted clearly before the city closes in around it." },
          { start: 108, end: 121, device: "personification", note: "Fog is given active movement, as if it deliberately spreads pollution." },
          { start: 132, end: 149, device: "diction", note: "The precise phrasing makes the industrial setting sound crowded and mechanical." },
        ]}
      />
    ),
  },
  {
    title: 'Poetry analysis: form, devices and tone',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When analysing a poem, work systematically through <strong>SIFT</strong>: Subject, Images, Form, Tone.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-2">
          <p><strong className="text-slate-800">Subject:</strong> <span className="text-slate-600">What is the poem literally about?</span></p>
          <p><strong className="text-slate-800">Images:</strong> <span className="text-slate-600">Which literary devices create vivid pictures or comparisons?</span></p>
          <p><strong className="text-slate-800">Form:</strong> <span className="text-slate-600">How is the poem structured — rhyme scheme, stanza length, line breaks?</span></p>
          <p><strong className="text-slate-800">Tone:</strong> <span className="text-slate-600">What is the speaker's attitude — mournful, joyful, ironic, defiant?</span></p>
        </div>
      </div>
    ),
  },
  {
    title: 'Identifying and supporting themes with evidence',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>theme</strong> is the central idea or message of a text. It is broader than the subject. Always support your theme statement with a direct quotation and explanation.
        </p>
        <div className="bg-green-50 p-6 rounded-xl text-left">
          <p className="font-bold text-green-800 mb-2">Example structure:</p>
          <p className="text-slate-700 text-sm">
            <em>"A recurring theme in the text is the loss of identity. This is evident when the protagonist says, '…', which suggests that…"</em>
          </p>
        </div>
        <p className="text-sm text-slate-500 mt-2">Never state a theme without a quote and explanation — this is the backbone of a literature answer.</p>
      </div>
    ),
  },
  {
    title: 'Writing contextual literature responses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>contextual question</strong> is based on a specific extract and asks you to respond to it in detail.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Refer to the extract</strong>
            <p className="text-slate-600 text-sm">Quote directly and explain — do not paraphrase vaguely.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Use literary terms</strong>
            <p className="text-slate-600 text-sm">Name the device (e.g., metaphor) and explain its effect.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Link to theme/character</strong>
            <p className="text-slate-600 text-sm">Show how the extract connects to the broader text.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main purpose of a contextual question in a literature exam?',
    options: [
      'To test how many chapters you have memorised',
      'To assess your ability to analyse a given extract using evidence and literary terms',
      'To summarise the entire novel in your own words',
      'To rewrite the extract in a different style',
    ],
    answer: 'To assess your ability to analyse a given extract using evidence and literary terms',
    explanation: 'Contextual questions require you to engage closely with the provided extract, quote from it, and explain how literary devices create meaning.',
  },
  {
    prompt: 'Which literary device creates an implicit (unstated) comparison between two things?',
    options: ['Simile', 'Metaphor', 'Alliteration', 'Onomatopoeia'],
    answer: 'Metaphor',
    explanation: 'A metaphor states that one thing IS another without using "like" or "as", creating an implied comparison.',
  },
  {
    prompt: 'What does "tone" refer to when analysing a poem?',
    options: [
      'The rhyme scheme of the poem',
      'The number of syllables per line',
      'The speaker\'s attitude or emotional stance toward the subject',
      'The title of the poem',
    ],
    answer: 'The speaker\'s attitude or emotional stance toward the subject',
    explanation: 'Tone reflects how the speaker feels — mournful, hopeful, sarcastic, defiant — and is identified through word choice and imagery.',
  },
  {
    prompt: 'What term describes the central idea or message that runs through an entire text?',
    options: ['Plot', 'Setting', 'Theme', 'Narrator'],
    answer: 'Theme',
    explanation: 'Theme is the overarching idea or message — such as "loss of identity" or "the power of love" — that gives a text deeper meaning beyond its events.',
  },
  {
    prompt: 'What is alliteration?',
    options: [
      'The repetition of vowel sounds within words',
      'The repetition of consonant sounds at the beginning of nearby words',
      'A comparison using "like" or "as"',
      'A reference to a well-known event or text',
    ],
    answer: 'The repetition of consonant sounds at the beginning of nearby words',
    explanation: 'Alliteration (e.g., "Peter Piper picked") creates rhythm and draws attention to key words or ideas.',
  },
  {
    prompt: 'In prose, what is a "narrator"?',
    options: [
      'The main character who solves a problem',
      'The author of the novel',
      'The voice that tells the story and shapes the reader\'s perspective',
      'A character who appears only in the final chapter',
    ],
    answer: 'The voice that tells the story and shapes the reader\'s perspective',
    explanation: 'The narrator controls point of view. A first-person narrator ("I") gives an intimate view; a third-person narrator provides more distance.',
  },
  {
    prompt: 'What is dramatic irony?',
    options: [
      'When a character says the opposite of what they mean',
      'When the audience knows something a character does not',
      'When two characters argue on stage',
      'When the setting mirrors a character\'s mood',
    ],
    answer: 'When the audience knows something a character does not',
    explanation: 'Dramatic irony creates tension and engagement because the reader/audience anticipates consequences the character cannot foresee.',
  },
  {
    prompt: 'What does "connotation" mean in literary analysis?',
    options: [
      'The dictionary definition of a word',
      'The emotional or cultural associations a word carries beyond its literal meaning',
      'The spelling of a word',
      'The number of times a word appears in a text',
    ],
    answer: 'The emotional or cultural associations a word carries beyond its literal meaning',
    explanation: 'For example, "home" denotes a building but connotes warmth, safety, and belonging. Writers choose words for their connotations.',
  },
  {
    prompt: 'What term describes a recurring symbol, image, or idea that develops meaning throughout a text?',
    options: ['Theme', 'Motif', 'Setting', 'Stanza'],
    answer: 'Motif',
    explanation: 'A motif is a repeated element that reinforces the theme — for example, the use of darkness throughout a text to reinforce themes of ignorance or danger.',
  },
  {
    prompt: 'How does folklore typically differ from a contemporary novel?',
    options: [
      'Folklore has complex sentence structures; novels use simple ones',
      'Folklore relies on oral tradition and often carries cultural or moral lessons, while novels are written narratives with developed characters',
      'Novels are always shorter than folklore texts',
      'Folklore is always written in verse',
    ],
    answer: 'Folklore relies on oral tradition and often carries cultural or moral lessons, while novels are written narratives with developed characters',
    explanation: 'Folklore conventions include stock characters, repetition, moral endings, and community values — different from the psychological depth found in modern novels.',
  },
];

const PrescribedProsePoetry = () => (
  <CapsSubjectTopic
    title="Prescribed Prose and Poetry"
    subtitle="Engaging with literary texts using mature terminology, devices and themes"
    learnSteps={learnSteps}
    task="gr11-prescribed-prose-poetry-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default PrescribedProsePoetry;
