import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    title: 'Revising across genres: novel, drama and poetry',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The final exam tests all three genres. Each has unique conventions — know what to look for in each.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Novel / Folklore</strong>
            <p className="text-slate-600 text-sm">Focus on: narrative arc, characterisation, theme, setting, narrator perspective, and key chapters or scenes.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Drama</strong>
            <p className="text-slate-600 text-sm">Focus on: acts and scenes, character motivation, stagecraft, dramatic irony, soliloquies, and key turning points.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Poetry</strong>
            <p className="text-slate-600 text-sm">Focus on: all devices, tone, structure, theme, speaker, and the relationship between form and meaning.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"The Merchant of Venice\" — William Shakespeare"}
        text={"The quality of mercy is not strained. It droppeth as the gentle rain from heaven upon the place beneath."}
        annotations={[
          { start: 24, end: 36, device: "tone", note: "The calm phrasing presents mercy as natural rather than forced." },
          { start: 50, end: 68, device: "simile", note: "Mercy is compared to rain, suggesting softness and life-giving power." },
          { start: 69, end: 80, device: "symbolism", note: "Heavenly imagery makes mercy seem sacred and morally elevated." },
          { start: 57, end: 68, device: "imagery", note: "The sensory picture helps learners visualise the effect of kindness." },
        ]}
      />
    ),
  },
  {
    title: 'Thematic revision and quotation recall',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Themes run across your prescribed texts. Revising by <strong>theme</strong> rather than by plot is far more effective for exam answers.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Thematic revision strategy</strong>
            <p className="text-slate-600 text-sm">Create a theme map: each theme + 2-3 supporting quotations + explanation of how they develop the theme across the text.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Quotation recall</strong>
            <p className="text-slate-600 text-sm">Learn 3–5 versatile quotations per text that can be used across different question types. Short, precise quotes are more useful than long ones.</p>
          </div>
        </div>
        <div className="bg-amber-50 p-4 rounded-xl text-left">
          <p className="text-sm text-slate-600"><strong>Common themes in FET texts:</strong> power and oppression, identity, love and loss, belonging, resilience, justice, freedom vs constraint.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Integrated literature questions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Some exam questions require knowledge of more than one genre or text. These test whether you can synthesise your literary understanding.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left space-y-2">
          <p className="font-bold text-indigo-700 text-sm">How to tackle integrated questions:</p>
          <ol className="text-slate-600 text-sm list-decimal ml-4 space-y-1">
            <li>Identify what each text contributes to the shared theme or idea</li>
            <li>Quote from each text to show specific knowledge</li>
            <li>Compare how each writer develops the shared element differently</li>
            <li>Synthesise: what broader insight emerges from both together?</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: 'Using evidence effectively in exam answers',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A strong exam answer always uses <strong>embedded quotations</strong> — quotes that form part of your sentence, not dropped in separately.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-3">
          <p className="text-sm font-bold text-slate-700">Dropped quote (weak):</p>
          <p className="text-sm text-slate-600 italic">"The character is lonely. 'No one ever came to visit him.' He felt abandoned."</p>
          <p className="text-sm font-bold text-slate-700 mt-3">Embedded quote (strong):</p>
          <p className="text-sm text-slate-600 italic">"The writer emphasises the protagonist's isolation through the detail that 'no one ever came to visit him', suggesting a profound sense of abandonment."</p>
        </div>
        <p className="text-sm text-slate-500 mt-1">Note how the embedded quote flows naturally into the analytical sentence.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main purpose of literature revision in Term 4?',
    options: [
      'To write new creative pieces about the prescribed texts',
      'To synthesise knowledge across all three genres for the final exam',
      'To choose which texts you prefer and study only those',
      'To memorise every chapter of the prescribed novel',
    ],
    answer: 'To synthesise knowledge across all three genres for the final exam',
    explanation: 'The final exam tests novel/folklore, drama, and poetry. Effective revision integrates knowledge across all three for contextual and essay questions.',
  },
  {
    prompt: 'Which element should you always include in a literature exam answer?',
    options: [
      'A detailed summary of every scene',
      'Your personal feelings about whether you enjoyed the text',
      'A direct quotation from the text, followed by analysis',
      'The publishing year and author\'s biographical details',
    ],
    answer: 'A direct quotation from the text, followed by analysis',
    explanation: 'Textual evidence is essential in all literature answers. Quote precisely, briefly, and always follow with explanation.',
  },
  {
    prompt: 'What does "theme" mean in a literary context?',
    options: [
      'The title of the text',
      'The central idea, message, or insight about human experience that the writer explores across the text',
      'The sequence of events in the plot',
      'The name of the main character',
    ],
    answer: 'The central idea, message, or insight about human experience that the writer explores across the text',
    explanation: 'Theme is deeper than subject: "war" is the subject; "the dehumanising cost of violence" is the theme.',
  },
  {
    prompt: 'Why is memorising key quotations important for the final exam?',
    options: [
      'Quotations replace the need for any analytical writing',
      'They serve as precise textual evidence that supports your arguments in both contextual and essay answers',
      'The examiner awards extra marks for every quotation used, regardless of relevance',
      'Quotations are only required in the summary section of Paper 1',
    ],
    answer: 'They serve as precise textual evidence that supports your arguments in both contextual and essay answers',
    explanation: 'Without quotations your analysis is unsupported. Memorised quotations allow you to respond confidently and precisely in the exam.',
  },
  {
    prompt: 'What is the difference between plot and theme?',
    options: [
      'There is no difference — plot and theme are the same thing',
      'Plot is the sequence of events in the narrative; theme is the deeper idea or message the writer conveys through those events',
      'Theme refers to the setting; plot refers to the characters',
      'Plot is found only in prose; theme is found only in poetry',
    ],
    answer: 'Plot is the sequence of events in the narrative; theme is the deeper idea or message the writer conveys through those events',
    explanation: 'Plot is what happens; theme is what it means. Literature essays are about theme, not a retelling of plot.',
  },
  {
    prompt: 'How do you approach a question about characterisation in an exam?',
    options: [
      'List all the characters in the text in alphabetical order',
      'Describe the character\'s physical appearance only',
      'Analyse how the writer reveals the character through actions, dialogue, relationships, and language choices, using quotations as evidence',
      'Copy a description of the character from your notes without analysis',
    ],
    answer: 'Analyse how the writer reveals the character through actions, dialogue, relationships, and language choices, using quotations as evidence',
    explanation: 'Characterisation analysis explores HOW the writer constructs the character — not simply describing what the character does.',
  },
  {
    prompt: 'What does "imagery" include in literary analysis?',
    options: [
      'Only photographs and illustrations in the text',
      'Any figurative language that creates a mental picture, including metaphor, simile, personification, and symbolism',
      'Only descriptions of the weather in the text',
      'Imagery refers exclusively to the use of colour in a text',
    ],
    answer: 'Any figurative language that creates a mental picture, including metaphor, simile, personification, and symbolism',
    explanation: 'Imagery is broad — it encompasses any language that appeals to the senses or creates vivid mental pictures through comparison or association.',
  },
  {
    prompt: 'What is the purpose of a conclusion in a literature essay?',
    options: [
      'To introduce a new argument that was not in the body of the essay',
      'To summarise the plot of the text one final time',
      'To restate the thesis in new words, synthesise the main arguments, and offer a broader insight',
      'To quote the opening line of the text',
    ],
    answer: 'To restate the thesis in new words, synthesise the main arguments, and offer a broader insight',
    explanation: 'The conclusion reinforces what you have argued, does not introduce new evidence, and leaves the reader with a lasting impression of your interpretation.',
  },
  {
    prompt: 'What is the most significant difference between a short story and a novel?',
    options: [
      'Short stories are always more difficult to analyse than novels',
      'A novel has more extensive character development, multiple sub-plots, and a more complex structure; a short story focuses on a single event or moment with fewer characters',
      'Short stories always have happier endings than novels',
      'Novels use more literary devices than short stories',
    ],
    answer: 'A novel has more extensive character development, multiple sub-plots, and a more complex structure; a short story focuses on a single event or moment with fewer characters',
    explanation: 'The short story\'s brevity requires economy of language and tight focus. Novels allow for depth and complexity across many chapters.',
  },
  {
    prompt: 'What does "intertextuality" mean?',
    options: [
      'The use of very long sentences in a text',
      'When one text references or draws meaning from another text — creating a relationship between two or more works',
      'The way a text is divided into chapters or stanzas',
      'The practice of writing the same text in two different languages',
    ],
    answer: 'When one text references or draws meaning from another text — creating a relationship between two or more works',
    explanation: 'Intertextuality occurs when a text alludes to, echoes, or responds to another. Recognising it enriches literary analysis.',
  },
];

const LiteratureRevision = () => (
  <CapsSubjectTopic
    title="Comprehensive Literature Revision"
    subtitle="Novel, drama and poetry revision — themes, quotations and integrated questions"
    learnSteps={learnSteps}
    task="gr11-literature-revision-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LiteratureRevision;
