import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '../../../../../components/subjects/AnnotatedText';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { DramaticStructure } from '../../../../../components/diagrams/english/EnglishPictures';
import { annotate } from '../../_shared/annotate';

/** Original extracts written for this lesson. Your own set work will differ; the technique is the same. */
export const PROSE_EXTRACT =
  'Nomsa did not look up when the door slammed. She went on peeling potatoes, the knife moving in short, hard strokes, while her brother\'s boots thundered up the stairs. "You could have told me," she said to the sink. Nobody answered. In the next room the clock ticked on, loud as a grudge.';

export const PROSE_NOTES: [string, string, string][] = [
  ['the knife moving in short, hard strokes', 'characterisation', 'Her actions show anger that she does not say aloud.'],
  ['"You could have told me," she said to the sink.', 'indirect characterisation', 'She speaks to the sink, not to her brother: she is hurt and avoiding him.'],
  ['loud as a grudge', 'simile', 'The ticking clock is compared to a grudge: the silence is heavy with resentment.'],
];

export const DRAMA_EXTRACT = [
  'NOMSA: (not looking up) You could have told me.',
  'THABO: (at the door, boots in hand) Told you what?',
  'NOMSA: (the knife stops) That you were leaving.',
];

export const learnSteps: LearnStep[] = [
  {
    title: 'The shape of the plot',
    content: (
      <div className="space-y-4">
        <Rule>A plot has a shape. The CAPS terms are exposition, rising action, conflict, climax, falling action and resolution (denouement).</Rule>
        <DramaticStructure />
        <ul className="space-y-1 text-left text-sm text-slate-700">
          <li><strong>Exposition:</strong> introduces the characters, the setting and the situation.</li>
          <li><strong>Rising action and conflict:</strong> events and tension build.</li>
          <li><strong>Climax:</strong> the turning point, the most intense moment.</li>
          <li><strong>Falling action and resolution:</strong> the consequences, and how things are settled.</li>
          <li><strong>Foreshadowing</strong> hints at what will happen; a <strong>flashback</strong> shows an earlier event.</li>
        </ul>
        <p className="text-left text-sm text-slate-600">Narrative asks &ldquo;what happens next?&rdquo; Plot asks &ldquo;why does it happen?&rdquo;</p>
      </div>
    ),
  },
  {
    title: 'Characterisation: how we get to know people',
    content: (
      <div className="space-y-4">
        <Rule>Characterisation is how a writer builds a character: by what is said about them, what they say and do, and how others react to them.</Rule>
        <AnnotatedText title="An original extract" text={PROSE_EXTRACT} annotations={annotate(PROSE_EXTRACT, PROSE_NOTES)} />
        <Worked
          title="What do we learn about Nomsa?"
          steps={[
            <>The writer never says &ldquo;Nomsa is angry&rdquo;. We infer it from her actions: the short, hard strokes of the knife.</>,
            <>She speaks to the sink, not to her brother. She is hurt and avoiding him.</>,
            <>In the same way, a character whose hands shake as he opens a door shows fear without the writer using the word.</>,
            <>Evidence plus explanation: <em>the knife moving in short, hard strokes shows suppressed anger.</em></>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Reading a play: stage directions and dialogue',
    content: (
      <div className="space-y-4">
        <Rule>In drama, meaning also lives in what is not said: pauses, actions and stage directions.</Rule>
        <div className="rounded-xl bg-slate-50 p-4 text-left font-mono text-sm leading-7 text-slate-800">
          {DRAMA_EXTRACT.map((l) => <p key={l}>{l}</p>)}
        </div>
        <Worked
          title="Read the stage directions"
          steps={[
            <>&ldquo;(not looking up)&rdquo; shows Nomsa avoiding her brother.</>,
            <>&ldquo;(the knife stops)&rdquo; shows that the answer to her own question matters more than the work in her hands.</>,
            <>The question &ldquo;Told you what?&rdquo; is evasive: Thabo may already know. That gap between what a character says and means creates tension.</>,
          ]}
        />
        <p className="text-left text-sm text-slate-600">If the audience knows something the characters do not, that is dramatic irony. A soliloquy lets a lone character voice their thoughts aloud.</p>
      </div>
    ),
  },
  {
    title: 'Writing about literature: point, evidence, explain, link',
    content: (
      <div className="space-y-4">
        <Rule>Every literature answer needs a point, evidence from the text, an explanation of the evidence and a link back to the question.</Rule>
        <Worked
          title="One paragraph, built in four steps"
          steps={[
            <><strong>Point:</strong> Nomsa hides her hurt behind routine tasks.</>,
            <><strong>Evidence:</strong> She goes on &ldquo;peeling potatoes, the knife moving in short, hard strokes&rdquo;.</>,
            <><strong>Explain:</strong> The harsh movement shows anger that she cannot say aloud.</>,
            <><strong>Link:</strong> This is why the family conflict feels so tense even before anyone shouts.</>,
          ]}
        />
        <Mistake>Retelling the story is not an answer. A question that asks &ldquo;Why has the writer used this?&rdquo; wants the effect of the writer&rsquo;s choice, not a list of what happened.</Mistake>
      </div>
    ),
  },
  {
    title: 'Contextual question or essay?',
    content: (
      <div className="space-y-4">
        <Rule>A contextual question asks about an extract you are given. A literary essay asks you to argue about the whole text.</Rule>
        <ul className="space-y-2 text-left text-slate-700">
          <li><strong>Term tasks:</strong> the literature task is 35 marks: contextual questions (10) and a literary essay (25).</li>
          <li><strong>Paper 2 (80 marks):</strong> poetry 30 marks, then novel or drama 50 marks, which is one essay (25) and one contextual question (25).</li>
          <li><strong>Essay length:</strong> 300 to 350 words for a novel or drama. Marked on content (60%) and language and structure (40%).</li>
        </ul>
        <Mistake>In a contextual question, refer to the extract. A general answer about the whole book that ignores the lines you were given loses marks.</Mistake>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Which part of the plot is the most intense moment?</>,
          <>A writer never says a character is nervous but shows her twisting her ring. What is this called?</>,
          <>What do stage directions such as &ldquo;(the knife stops)&rdquo; add to a scene?</>,
          <>What four steps make a good literature paragraph?</>,
        ]}
        answers={[
          <>The climax.</>,
          <>Characterisation: we learn about the character from what she does.</>,
          <>They show actions, pauses and feelings that the dialogue does not state, which builds tension.</>,
          <>Point, evidence, explain, link.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'In the structure of a plot, what happens during the exposition?',
    options: ['The most intense moment of the story occurs', 'The consequences of the climax are shown', 'The story ends with a final twist', 'Characters and setting are introduced'],
    answer: 'Characters and setting are introduced',
    explanation: 'The exposition sets the scene. The climax is the most intense moment and the resolution settles the story.',
  },
  {
    prompt: 'Which part of a plot is the turning point and most intense moment?',
    options: ['The exposition', 'The resolution', 'The climax', 'The foreshadowing'],
    answer: 'The climax',
    explanation: 'The climax is the high point. The rising action leads up to it and the falling action follows it.',
  },
  {
    prompt: 'What is the difference between a "narrative" and a "plot"?',
    options: ['A narrative tells what happens; a plot shows why', 'A narrative is in poetry; a plot is in prose', 'A narrative is a long text; a plot is a short text', 'A narrative has a setting; a plot has none'],
    answer: 'A narrative tells what happens; a plot shows why',
    explanation: 'Narrative is the sequence of events. Plot adds cause and effect: why one event leads to the next.',
  },
  {
    prompt: 'A story opens with a character seeing a storm cloud and saying, "Something is coming." What is this an example of?',
    options: ['Flashback to earlier days', 'Foreshadowing of events', 'Resolution of the plot', 'Soliloquy on the stage'],
    answer: 'Foreshadowing of events',
    explanation: 'Foreshadowing hints at later events. A flashback would show something that happened earlier.',
  },
  {
    prompt: 'A scene suddenly shows what happened to a character ten years earlier. What is this technique called?',
    options: ['Flashback', 'Foreshadowing', 'Climax', 'Exposition'],
    answer: 'Flashback',
    explanation: 'A flashback takes the story back to an earlier time. Foreshadowing looks ahead.',
  },
  {
    prompt: 'What is characterisation?',
    options: ['The place where a story happens', 'The final event of the whole story', 'How a writer builds a character', 'The use of rhyme in a poem or song'],
    answer: 'How a writer builds a character',
    explanation: 'Characterisation is how a writer builds a character through words, actions and reactions. The other options describe setting, ending and rhyme.',
  },
  {
    prompt: 'A writer never says that a character is afraid but describes his hands shaking as he opens the door. What does this show?',
    options: ['The time and place of the scene', 'The final resolution of the story', 'His fear, shown by his actions', 'The narrator\'s own point of view'],
    answer: 'His fear, shown by his actions',
    explanation: 'Showing feelings through actions is indirect characterisation. The reader infers the fear from the shaking hands.',
  },
  {
    prompt: 'In a play, what is the purpose of stage directions?',
    options: ['To list the names of the audience', 'To summarise the plot of the whole play', 'To tell actors how to move, speak and react', 'To give the writer\'s opinion of the characters'],
    answer: 'To tell actors how to move, speak and react',
    explanation: 'Stage directions, often in brackets, describe actions, tone, sound and lighting that dialogue does not give.',
  },
  {
    prompt: 'Why does a question such as "Why has the writer used this image?" need more than a description of the image?',
    options: ['It asks you to copy out the line', 'It asks for the effect on the reader', 'It asks for the page number of the image', 'It asks for a retelling of the whole story'],
    answer: 'It asks for the effect on the reader',
    explanation: '"Why" questions test understanding of purpose and effect. Naming or copying the image earns few marks.',
  },
  {
    prompt: 'Which sequence gives the four steps of a strong literature paragraph?',
    options: ['Link, point, copy, evidence', 'Evidence, evidence, evidence, point', 'Explain, summarise, retell, point', 'Point, evidence, explain, link'],
    answer: 'Point, evidence, explain, link',
    explanation: 'A strong paragraph makes a point, backs it with evidence from the text, explains the evidence and links back to the question.',
  },
  {
    prompt: 'What is a contextual question in a literature paper?',
    options: ['A question about a given extract', 'A question that asks you to write a poem', 'A question about your own life story', 'A question with no connection to a text'],
    answer: 'A question about a given extract',
    explanation: 'Contextual questions are set on a printed extract, so your answer should refer to the lines you were given.',
  },
  {
    prompt: 'How many words should the Grade 10 literary essay on a novel or drama be?',
    options: ['150 to 200 words', '180 to 200 words', '400 to 450 words', '300 to 350 words'],
    answer: '300 to 350 words',
    explanation: 'The Grade 10 novel or drama essay is 300 to 350 words. A poetry essay is shorter, at 150 to 200 words.',
  },
  {
    prompt: 'In Paper 2 (80 marks), how many marks are given to the poetry section?',
    options: ['25', '50', '30', '20'],
    answer: '30',
    explanation: 'Poetry is worth 30 marks (seen 20 and unseen 10). The novel or drama section is worth the other 50.',
  },
];
