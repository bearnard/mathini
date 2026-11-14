import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    title: 'Studying drama: stagecraft and dramatic devices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Drama is written to be <strong>performed</strong>. Stagecraft elements are as important as the dialogue in creating meaning.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Stage directions</strong>
            <p className="text-slate-600 text-sm">Instructions to actors and directors. They describe movement, tone, set, and lighting to guide performance.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Soliloquy</strong>
            <p className="text-slate-600 text-sm">A character speaks their private thoughts aloud — the audience hears what no other character does.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Dramatic irony</strong>
            <p className="text-slate-600 text-sm">The audience knows something a character does not — creates suspense and emotional engagement.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Act / Scene structure</strong>
            <p className="text-slate-600 text-sm">Acts divide major sections of action. Scenes divide acts further. Scene changes often signal shifts in location or time.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Foreshadowing</strong>
            <p className="text-slate-600 text-sm">Hints about future events. Creates anticipation and reinforces themes — look for ominous imagery or warning dialogue.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Conflict</strong>
            <p className="text-slate-600 text-sm">Internal (character vs self) or external (character vs character/society). Conflict drives drama forward.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"Sonnet 18\" — William Shakespeare"}
        text={"Shall I compare thee to a summer's day? Thou art more lovely and more temperate."}
        annotations={[
          { start: 8, end: 38, device: "simile", note: "The speaker begins with an elegant comparison that invites close poetic analysis." },
          { start: 26, end: 38, device: "imagery", note: "Seasonal imagery gives the praise warmth, light, and beauty." },
          { start: 49, end: 79, device: "tone", note: "The measured compliment creates an admiring and controlled tone." },
        ]}
      />
    ),
  },
  {
    title: 'Poetry comparison: tone, motif and structure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Comparative poetry questions require you to identify <strong>how two poems are alike and different</strong> in their treatment of a theme, tone, or technique.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Tone</strong>
            <p className="text-slate-600 text-sm">Identify the speaker's attitude in each poem. Poems may share a subject but have contrasting tones (e.g., hopeful vs despairing).</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Motif</strong>
            <p className="text-slate-600 text-sm">Recurring images or symbols. Compare how each poet uses a motif differently to support their theme.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Structure</strong>
            <p className="text-slate-600 text-sm">Compare form: free verse vs rhyming, stanza length, enjambment vs end-stopped lines. Form is never accidental.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Writing analytical literature responses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An analytical response moves beyond retelling to explaining <strong>how and why</strong> the writer creates meaning.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-2">
          <p className="font-bold text-slate-700 text-sm">Weak response:</p>
          <p className="text-slate-600 text-sm italic">"The character is sad. The play shows how difficult life is."</p>
          <p className="font-bold text-slate-700 text-sm mt-3">Analytical response:</p>
          <p className="text-slate-600 text-sm italic">"The playwright uses the soliloquy in Act 2 to reveal the protagonist's inner torment. The repetition of '…' creates a tone of despair, suggesting that the character feels trapped by circumstances beyond their control. This reinforces the theme of helplessness in the face of societal pressure."</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Comparing two texts with precision',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A strong comparative thesis states <strong>both the similarity and the key difference</strong> between the two texts in relation to the question.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left space-y-2">
          <p className="font-bold text-indigo-700 text-sm">Thesis formula:</p>
          <p className="text-slate-600 text-sm italic">"While both poems deal with the theme of loss, Poem A presents grief as a destructive force through violent imagery, whereas Poem B portrays it as a process of healing through gentle, natural imagery."</p>
        </div>
        <p className="text-sm text-slate-500 mt-2">Your thesis must appear in the introduction and be defended paragraph by paragraph with evidence from both texts.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is stagecraft in drama?',
    options: ['The written dialogue that the characters speak', 'The technical elements of theatre, such as lighting, set and sound', 'The way that an actor learns and memorises lines', 'The programme that is handed out to the audience'],
    answer: 'The technical elements of theatre, such as lighting, set and sound',
    explanation: 'Stagecraft questions ask you to explain how non-verbal/performative elements create meaning — they are as important as the dialogue.',
  },
  {
    prompt: 'What is dramatic irony in a play?',
    options: ['A character tells a joke on the stage', 'The audience knows something that a character on stage does not', 'Two characters argue loudly and dramatically', 'The setting reflects the feelings of a character'],
    answer: 'The audience knows something that a character on stage does not',
    explanation: 'Dramatic irony creates tension and engagement because the audience anticipates consequences the unknowing character cannot foresee.',
  },
  {
    prompt: 'What is a motif in a poem or play?',
    options: ['The title that the writer gave to the text', 'The last line of the final stanza of the poem', 'A recurring image, symbol or idea that builds meaning', 'The character in the play who speaks the fastest'],
    answer: 'A recurring image, symbol or idea that builds meaning',
    explanation: 'A motif reappears throughout a work, accumulating meaning each time. For example, images of darkness recurring in a drama about deception.',
  },
  {
    prompt: 'What does "tone" mean when comparing two poems?',
    options: ['The sound quality of the poem when it is read aloud', 'The length of the poem measured in lines', "The speaker's emotional attitude, shown through word choice and imagery", 'The rhyme scheme that the poem follows'],
    answer: "The speaker's emotional attitude, shown through word choice and imagery",
    explanation: 'Two poems can share a subject but have entirely different tones — identifying this difference is central to comparative analysis.',
  },
  {
    prompt: 'Which structural device separates major divisions of action in a play?',
    options: ['Stanzas', 'Acts', 'Paragraphs', 'Couplets'],
    answer: 'Acts',
    explanation: 'Plays are divided into acts (major sections) and scenes (subsections of each act). Scene changes often signal time or location shifts.',
  },
  {
    prompt: 'What is a soliloquy?',
    options: [
      'A conversation between two characters in which they plan a crime',
      'A speech by a character alone on stage, revealing their private thoughts to the audience',
      'The opening speech of the play delivered by the director',
      'A scene with no dialogue, only movement',
    ],
    answer: 'A speech by a character alone on stage, revealing their private thoughts to the audience',
    explanation: 'Soliloquies give the audience privileged access to a character\'s inner world — they reveal motivation, conflict, and hidden feelings.',
  },
  {
    prompt: 'What should your thesis statement do in a comparative poetry essay?',
    options: ['Summarise the plot of both of the poems', 'State only what the two poems have in common', 'Name the point of comparison and the key difference between the poems', 'Quote the last lines of both poems one after the other'],
    answer: 'Name the point of comparison and the key difference between the poems',
    explanation: 'A strong comparative thesis names the relationship between the two texts — similarity and difference — and guides everything that follows.',
  },
  {
    prompt: 'What is blank verse in drama?',
    options: ['A page with no writing on it in a poetry book', 'Poetry that has been published without a title', 'Unrhymed verse in iambic pentameter, as in Shakespeare', 'Free verse that has an irregular rhyme pattern'],
    answer: 'Unrhymed verse in iambic pentameter, as in Shakespeare',
    explanation: 'Blank verse sounds natural but is structured rhythmically. Shakespeare used it to elevate formal speeches while maintaining the feel of speech.',
  },
  {
    prompt: 'What does "foreshadowing" mean in drama?',
    options: ['A character casts a long shadow across the stage', 'The playwright hints at events that come later in the play', 'The set design includes pictures of darkness', 'A character suddenly changes their mind in a scene'],
    answer: 'The playwright hints at events that come later in the play',
    explanation: 'Foreshadowing builds suspense and reinforces themes. It can appear in dialogue, imagery, or even the title.',
  },
  {
    prompt: 'What is the PEEL paragraph structure used for in literature essays?',
    options: ['To plan a summary of the whole novel in order', 'To build an analytical paragraph: Point, Evidence, Explain, Link', 'To memorise quotations with a lot less effort', 'To set out a formal letter correctly in an exam'],
    answer: 'To build an analytical paragraph: Point, Evidence, Explain, Link',
    explanation: 'PEEL gives your paragraph a clear argument (Point), textual support (Evidence), analysis (Explain), and connection to the broader argument (Link).',
  },
];

const DramaPoetryComparison = () => (
  <CapsSubjectTopic
    title="Drama and Poetry Comparison"
    subtitle="Stagecraft, dramatic devices, poetry comparison and analytical responses"
    learnSteps={learnSteps}
    task="gr11-drama-poetry-comparison-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default DramaPoetryComparison;
