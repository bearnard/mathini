import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/xho/term3/reading-viewing/diagram.webp", alt: "Reading & Viewing" },
    title: 'Poetry: devices and their effect',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Poems create meaning through imagery, sound, and structure.</p>
        <div className="grid gap-3 text-left md:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Imagery</strong><p className="text-slate-600">Simile, metaphor, personification.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Sound</strong><p className="text-slate-600">Alliteration, assonance, onomatopoeia.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Enjambment</strong><p className="text-slate-600">Meaning continues across lines.</p></div>
          <div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Stanza form</strong><p className="text-slate-600">Shapes rhythm and emphasis.</p></div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-5 text-left text-slate-600">
          <p><strong>isiXhosa example line:</strong> &quot;Umoya ucula phakathi kwemithi&quot; can suggest personification because the wind is given a human action.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Poetry: tone, mood and speaker',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Tone is the attitude in the poem; mood is the feeling created in the reader.</p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Speaker</strong><p className="text-slate-600">The voice inside the poem is not always the poet.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">Tone shift</strong><p className="text-slate-600">Watch for changes from hope to sorrow or anger to acceptance.</p></div>
          <div className="rounded-xl bg-rose-50 p-4"><strong className="text-rose-700">Mood</strong><p className="text-slate-600">Ask what emotional response the poem creates in the reader.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Drama: contextual and essay questions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Drama questions require evidence from dialogue, action, and stage directions.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Contextual answers</strong><p className="text-slate-600">Quote, explain, and link your answer directly to the question asked.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Stage directions</strong><p className="text-slate-600">These can reveal mood, tension, and character behaviour.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Short stories: narrative techniques',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Short stories rely on compact technique to shape meaning quickly.</p>
        <div className="grid gap-3 text-left md:grid-cols-4">
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Point of view</strong></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Pacing</strong></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Foreshadowing</strong></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Flashback & resolution</strong></div>
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

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'rv31', question: 'Which poetic device gives human qualities to a non-human thing?', options: ['Personification', 'Assonance', 'Enjambment', 'Allusion'], answer: 0, explanation: 'Personification presents an object, force, or idea as if it can act like a person.' },
  { id: 'rv32', question: 'What is enjambment?', options: ['When a sentence continues over the end of a line', 'When two poems rhyme perfectly', 'When a speaker changes language', 'When a stanza is repeated exactly'], answer: 0, explanation: 'Enjambment carries meaning forward without end punctuation at the line break.' },
  { id: 'rv33', question: 'Tone in a poem refers to:', options: ['The attitude expressed in the poem', 'The reader’s exam mark', 'The number of lines in each stanza', 'The cover illustration'], answer: 0, explanation: 'Tone reveals how the speaker or poet feels about the subject.' },
  { id: 'rv34', question: 'Mood refers to:', options: ['The feeling created in the reader', 'The poet’s surname', 'The publication date', 'The number of characters'], answer: 0, explanation: 'Mood is the emotional atmosphere the poem creates.' },
  { id: 'rv35', question: 'Which source of evidence is especially useful in drama analysis?', options: ['Stage directions', 'Page colour', 'Binding style', 'Printer logo'], answer: 0, explanation: 'Stage directions provide clues about movement, tone, and dramatic tension.' },
  { id: 'rv36', question: 'A contextual literature answer should normally include:', options: ['Textual evidence plus explanation', 'Only one-word answers', 'Personal memories only', 'No reference to the extract'], answer: 0, explanation: 'Literature responses need evidence and interpretation, not unsupported opinion.' },
  { id: 'rv37', question: 'Foreshadowing is used to:', options: ['Hint at something that will happen later', 'Explain the ending after it happens', 'Change first person into third person', 'Remove conflict from the story'], answer: 0, explanation: 'Foreshadowing plants clues about future events or outcomes.' },
  { id: 'rv38', question: 'Which narrative perspective knows the thoughts of many characters?', options: ['Third-person omniscient', 'First-person singular', 'Second-person direct address', 'Third-person limited'], answer: 0, explanation: 'An omniscient narrator can reveal the inner thoughts of multiple characters.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const ReadingViewingT3 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Poetry, drama, short stories, trial-exam revision, and contextual analysis"
    learnSteps={learnSteps}
    task="gr12-reading-viewing-t3"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default ReadingViewingT3;
