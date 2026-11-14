import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Connectors for cohesion',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Connectors link ideas so writing flows logically.</p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Contrast</strong><p className="text-slate-600">however, although, despite</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Addition</strong><p className="text-slate-600">furthermore, moreover, in addition</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Cause and effect</strong><p className="text-slate-600">therefore, consequently, as a result</p></div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-5 text-left text-slate-600">
          <p><strong>isiXhosa examples:</strong> <em>Nangona</em> wayediniwe, waqhubeka. <em>Ngenxa yoko</em>, waphumelela.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Active and passive voice',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">In passive voice, the object becomes the focus of the sentence.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Rule</strong><p className="text-slate-600">Object + be + past participle + by + agent.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">isiXhosa clue</strong><p className="text-slate-600">The passive often uses the suffix <strong>-w-</strong>, as in <em>iyafundwa</em>.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Direct speech to indirect (reported) speech',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Reported speech usually changes tense, pronouns, and time expressions.</p>
        <div className="grid gap-3 text-left md:grid-cols-4">
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Remove quotes</strong></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Change pronouns</strong></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Shift tense</strong></div>
          <div className="rounded-xl bg-slate-50 p-3"><strong className="text-slate-700">Adjust time words</strong></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Cohesion: reference chains and substitution',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Cohesion depends on clear links between sentences and ideas.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-rose-50 p-4"><strong className="text-rose-700">Reference chains</strong><p className="text-slate-600">Pronouns and demonstratives must refer clearly to the correct noun.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Substitution and ellipsis</strong><p className="text-slate-600">Writers avoid repetition by replacing repeated words or leaving predictable words out.</p></div>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Use these advanced language words when working with reported speech, passive forms, and editing tasks.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Wathi"} phonetic={"[wa'ti]"} meaning={"He / she said"} lang="xh" />
          <PronunciationPlayer word={"Ukuba"} phonetic={"[u'kuba]"} meaning={"That"} lang="xh" />
          <PronunciationPlayer word={"Kuthiwa"} phonetic={"[ku'tiwa]"} meaning={"It is said"} lang="xh" />
          <PronunciationPlayer word={"Kwenziwa"} phonetic={"[kwɛn'ziwa]"} meaning={"It is done / made"} lang="xh" />
          <PronunciationPlayer word={"Isihlanganisi"} phonetic={"[isi.hlaŋga'niːsi]"} meaning={"Connector / conjunction"} lang="xh" />
          <PronunciationPlayer word={"Ukuhlela"} phonetic={"[uku'ɬɛla]"} meaning={"Editing / arranging"} lang="xh" />
        </div>
      </div>
    ),
  },
];

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'lang21', question: 'Which connector shows contrast?', options: ['However', 'Therefore', 'Furthermore', 'As a result'], answer: 0, explanation: '“However” introduces an opposing or contrasting idea.' },
  { id: 'lang22', question: 'Which connector best shows cause and effect?', options: ['Consequently', 'Although', 'Moreover', 'Meanwhile'], answer: 0, explanation: '“Consequently” shows that one idea follows from another.' },
  { id: 'lang23', question: 'In passive voice, what usually happens to the object of the active sentence?', options: ['It becomes the subject of the new sentence', 'It disappears completely', 'It always becomes an adverb', 'It changes into a quotation'], answer: 0, explanation: 'Passive voice shifts focus so the original object becomes the subject.' },
  { id: 'lang24', question: 'Which sentence is passive?', options: ['The book was read by the learner.', 'The learner read the book.', 'The learner is reading.', 'Read the book now.'], answer: 0, explanation: 'The sentence focuses on the book and uses “was read”.' },
  { id: 'lang25', question: 'What is the first thing you usually remove when changing direct speech to indirect speech?', options: ['Quotation marks', 'The subject', 'Every verb', 'All punctuation'], answer: 0, explanation: 'Reported speech does not keep the original quotation marks.' },
  { id: 'lang26', question: 'If a speaker says, “I will come tomorrow,” the word “tomorrow” may change to:', options: ['the next day', 'yesterday', 'today', 'now'], answer: 0, explanation: 'Time expressions usually shift in reported speech depending on context.' },
  { id: 'lang27', question: 'What is a reference chain?', options: ['A series of words that refer back to the same idea or person', 'A list of unrelated connectors', 'A rhyme pattern in poetry', 'A heading in a formal letter'], answer: 0, explanation: 'Reference chains keep writing coherent by linking nouns and pronouns clearly.' },
  { id: 'lang28', question: 'Why is cohesion important?', options: ['It helps readers follow the connection between ideas', 'It makes every sentence longer', 'It removes the need for grammar', 'It prevents paragraphing'], answer: 0, explanation: 'Cohesive devices make writing easier to follow and more logically organised.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const LanguageStructuresT2 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Connectors, passive voice, direct and indirect speech, cohesion, and editing"
    learnSteps={learnSteps}
    task="gr12-language-structures-t2"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default LanguageStructuresT2;
