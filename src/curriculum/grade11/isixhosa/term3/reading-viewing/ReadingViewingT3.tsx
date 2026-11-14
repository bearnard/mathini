import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/xho/term3/reading-viewing/diagram.webp", alt: "Reading & Viewing" },
    title: 'Drama analysis — conflict, climax, and stage directions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Analysing drama requires understanding both the literary content and the performance context.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Conflict</strong>
            <p className="text-slate-600">The central struggle — between characters (external) or within a character (internal). Conflict drives the plot.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Climax</strong>
            <p className="text-slate-600">The turning point of highest tension — the moment when the conflict reaches its peak and the outcome becomes clear.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Stage directions</strong>
            <p className="text-slate-600">Playwright's instructions (movement, tone, props) that reveal character and mood beyond dialogue.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Poetry — figures of speech and contextual analysis',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Contextual analysis</strong> means interpreting a quoted extract within the broader context of the whole poem.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Personification</strong>
            <p className="text-slate-600">Giving human qualities to non-human things to create vivid, emotional imagery.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Simile (umfanekisomsebenzi)</strong>
            <p className="text-slate-600">Comparing two things using "njenge-" (like/as) to clarify or intensify a description.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Metaphor (umfanekiso)</strong>
            <p className="text-slate-600">Stating that one thing IS another — a direct comparison for emotional impact.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Short stories — narrative techniques and theme',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Short stories use specific <strong>narrative techniques</strong> to create meaning in a compressed space.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Point of view</strong>
            <p className="text-slate-600">First person: intimate and subjective. Third person: broader, more objective. Affects how much the reader knows.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Foreshadowing</strong>
            <p className="text-slate-600">Hints placed early in the story that suggest later events — creates suspense and unity of theme.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Flashback</strong>
            <p className="text-slate-600">Interrupting the present narrative to show a past event — adds depth to character motivation.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Irony</strong>
            <p className="text-slate-600">A gap between what is said/expected and what actually happens — used to create humour or critique.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Critical reading — identifying assumptions and author\'s purpose',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Critical reading</strong> goes beyond literal meaning — you examine why and how a text was written.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-800 mb-2">Questions to ask when reading critically:</p>
          <ul className="list-disc ml-4 text-slate-600 space-y-1">
            <li>What assumptions does the author make about the reader?</li>
            <li>Whose viewpoint is privileged and whose is absent?</li>
            <li>What is the author's purpose — to inform, persuade, or entertain?</li>
            <li>What evidence does the author provide and how reliable is it?</li>
            <li>How do language choices shape the reader's response?</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Use these literary-reading words when discussing folktales, poems, drama scenes, and character response.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Intsomi"} phonetic={"[in'tsɔmi]"} meaning={"Folktale"} lang="xh" />
          <PronunciationPlayer word={"Umbongo"} phonetic={"[um'bɔŋgɔ]"} meaning={"Poem"} lang="xh" />
          <PronunciationPlayer word={"Abalinganiswa"} phonetic={"[abaliŋga'niswa]"} meaning={"Characters"} lang="xh" />
          <PronunciationPlayer word={"Umxholo"} phonetic={"[um'xɔlɔ]"} meaning={"Theme / topic"} lang="xh" />
          <PronunciationPlayer word={"Imvakalelo"} phonetic={"[im.vaka'lɛlɔ]"} meaning={"Feeling / emotion"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the "climax" of a drama?',
    options: ['The turning point of highest tension, where conflict peaks', 'The opening scene that introduces the characters', 'The final scene after all problems are resolved', 'A stage direction about the lighting'],
    answer: 'The turning point of highest tension, where conflict peaks',
    explanation: 'The climax is the dramatic high point — events leading to the resolution pivot around this moment of maximum tension.',
  },
  {
    prompt: 'What do stage directions reveal in a drama text?',
    options: ['Movement, tone and mood beyond what the dialogue shows', 'Only the name of the playwright', 'The date on which the play was written', 'The number of acts and scenes in the play'],
    answer: 'Movement, tone and mood beyond what the dialogue shows',
    explanation: 'Stage directions are the playwright\'s instructions to performers and readers — they add crucial layers of meaning.',
  },
  {
    prompt: 'In isiXhosa poetry, a simile (umfanekisomsebenzi) uses which word to make a comparison?',
    options: ['njenge- (like/as)', 'kwaye (and)', 'kodwa (but)', 'ngako (therefore)'],
    answer: 'njenge- (like/as)',
    explanation: 'Similes compare two things explicitly using a comparative word — "njenge-" signals this type of figurative language.',
  },
  {
    prompt: 'Which narrative technique plants hints that suggest later story events?',
    options: ['Foreshadowing', 'Flashback', 'Irony', 'Personification'],
    answer: 'Foreshadowing',
    explanation: 'Foreshadowing creates suspense and thematic coherence by hinting at what is to come.',
  },
  {
    prompt: 'A first-person narrator is best described as:',
    options: ['Intimate and subjective, seeing only their own thoughts and feelings', 'All-knowing, with access to the mind of every character', 'Completely objective and factual in all things', 'Always unreliable and dishonest with the reader'],
    answer: 'Intimate and subjective, seeing only their own thoughts and feelings',
    explanation: 'First-person narration creates closeness with the reader but limits the perspective to what the narrator experiences.',
  },
  {
    prompt: 'What does "irony" create in a short story?',
    options: ['A gap between what is expected and what happens', 'A repetition of the main theme three times', 'An exact description of the setting of the story', 'A comparison between two of the characters'],
    answer: 'A gap between what is expected and what happens',
    explanation: 'Irony exploits the contrast between appearance and reality — it can be satirical, tragic, or comic.',
  },
  {
    prompt: 'What does "contextual analysis" of a poem require?',
    options: [
      'Interpreting a quoted extract in relation to the whole poem\'s meaning',
      'Explaining only the literal meaning of individual words',
      'Identifying who published the poem',
      'Counting syllables in each line',
    ],
    answer: 'Interpreting a quoted extract in relation to the whole poem\'s meaning',
    explanation: 'Contextual analysis connects a specific line or image to the broader theme and purpose of the entire poem.',
  },
  {
    prompt: 'Which question is part of critical reading?',
    options: [
      'Whose viewpoint is privileged in this text and whose voice is absent?',
      'How many paragraphs are in the text?',
      'What is the font size used in the text?',
      'How many times is the main character\'s name mentioned?',
    ],
    answer: 'Whose viewpoint is privileged in this text and whose voice is absent?',
    explanation: 'Critical reading asks about power, representation, and perspective — not just literal content.',
  },
  {
    prompt: 'Which type of conflict is "internal" conflict?',
    options: [
      'A struggle within a single character\'s mind or heart',
      'A fight between two main characters',
      'A battle between a character and society',
      'A dispute between two families',
    ],
    answer: 'A struggle within a single character\'s mind or heart',
    explanation: 'Internal conflict involves a character wrestling with their own emotions, values, or decisions — a key dramatic and literary device.',
  },
];

const ReadingViewingT3 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Drama, poetry, short stories, critical reading, and contextual analysis"
    learnSteps={learnSteps}
    task="gr11-xho-reading-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT3;
