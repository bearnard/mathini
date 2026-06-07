import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/xho/term2/language-structures/diagram.webp", alt: "Language Structures" },
    title: 'Direct and indirect speech in isiXhosa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Direct speech</strong> quotes a speaker's exact words; <strong>indirect speech</strong> (reported speech) paraphrases them.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Direct speech:</strong>
            <p className="text-slate-600 mt-1">Utitshala uthe: <em>"Fundelani izifundo zenu."</em></p>
            <p className="text-sm text-slate-500 mt-1">(The teacher said: "Study your lessons.")</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Indirect speech:</strong>
            <p className="text-slate-600 mt-1">Utitshala uthe bafundeleni izifundo zabo.</p>
            <p className="text-sm text-slate-500 mt-1">(The teacher said that they should study their lessons.)</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Key changes: remove quotation marks, adjust pronouns, apply tense back-shift where appropriate.</p>
      </div>
    ),
  },
  {
    title: 'Connectors — linking ideas for cohesion',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Connectors (cohesive devices)</strong> link sentences and paragraphs to create logical, flowing writing.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Addition</strong>
            <p className="text-slate-600">kwaye (and/also), ngaphezu koko (furthermore), ngokunjalo (likewise)</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Contrast</strong>
            <p className="text-slate-600">kodwa (but), nangona (although), nokuba (even though)</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Cause &amp; result</strong>
            <p className="text-slate-600">ngoko (therefore/so), ngenxa yoko (because of that), ngenxa yokuba (because)</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Passive voice in isiXhosa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>passive voice</strong> shifts focus from the doer to the receiver of the action. In isiXhosa, it is formed by adding the suffix <strong>-wa</strong> (or variants) to the verb stem.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Active:</strong>
            <p className="text-slate-600">Umntwana ufunda incwadi.</p>
            <p className="text-sm text-slate-500">(The child reads the book.)</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Passive:</strong>
            <p className="text-slate-600">Incwadi ifundwa ngumntwana.</p>
            <p className="text-sm text-slate-500">(The book is read by the child.)</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">The passive is common in formal and academic writing to create an impersonal, objective tone.</p>
      </div>
    ),
  },
  {
    title: 'Editing for cohesion and formal register',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Cohesion</strong> refers to how well a text holds together. Editing for cohesion and formal register involves checking:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <ul className="space-y-2 text-slate-600">
            <li>✅ Sentences are logically connected with appropriate connectors.</li>
            <li>✅ Pronouns clearly refer back to earlier nouns (no ambiguity).</li>
            <li>✅ Tense is consistent throughout the text.</li>
            <li>✅ Informal words and slang have been replaced with formal vocabulary.</li>
            <li>✅ Passive constructions used where an impersonal tone is required.</li>
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

const bank: CapsItem[] = [
  {
    prompt: 'Which sentence is in INDIRECT (reported) speech?',
    options: [
      'Utitshala uthe bafundeleni izifundo zabo.',
      'Utitshala uthe: "Fundelani izifundo zenu."',
      '"Ndiyafunda," utshilo umfundi.',
      'Umfundi uthe: "Iyiphi incwadi?"',
    ],
    answer: 'Utitshala uthe bafundeleni izifundo zabo.',
    explanation: 'Indirect speech paraphrases rather than quoting directly — no quotation marks, and pronouns shift from "zenu" (your) to "zabo" (their).',
  },
  {
    prompt: 'What happens to quotation marks when converting to indirect speech?',
    options: [
      'They are removed',
      'They are kept but moved to the end',
      'They are changed to parentheses',
      'They remain exactly as in direct speech',
    ],
    answer: 'They are removed',
    explanation: 'Indirect speech does not use quotation marks because the words are paraphrased, not quoted directly.',
  },
  {
    prompt: 'Which connector shows a CONTRAST between two ideas in isiXhosa?',
    options: ['kodwa', 'kwaye', 'ngoko', 'ngenxa yoko'],
    answer: 'kodwa',
    explanation: '"Kodwa" means "but" — it signals that the following clause contradicts or contrasts with the previous one.',
  },
  {
    prompt: 'Which connector indicates a CAUSE or RESULT?',
    options: ['ngenxa yoko', 'kwaye', 'kodwa', 'ngokunjalo'],
    answer: 'ngenxa yoko',
    explanation: '"Ngenxa yoko" means "because of that" — it signals a causal or resultant relationship between ideas.',
  },
  {
    prompt: 'How is the passive voice typically formed in isiXhosa?',
    options: [
      'By adding the suffix -wa (or a variant) to the verb stem',
      'By placing "ayi-" before the verb',
      'By using the prefix "bu-"',
      'By removing the subject concord',
    ],
    answer: 'By adding the suffix -wa (or a variant) to the verb stem',
    explanation: 'The passive suffix -wa (e.g. "fundwa" from "funda") turns the object into the grammatical subject of the sentence.',
  },
  {
    prompt: 'Convert to passive: "Umntwana ufunda incwadi." The object "incwadi" becomes:',
    options: [
      'The subject of the passive sentence',
      'Omitted from the sentence',
      'The indirect object',
      'Unchanged in position',
    ],
    answer: 'The subject of the passive sentence',
    explanation: 'In the passive, "incwadi" (the book) becomes the subject: "Incwadi ifundwa ngumntwana."',
  },
  {
    prompt: 'What is the main purpose of using the passive voice in formal writing?',
    options: [
      'To create an impersonal, objective tone by focusing on the action or receiver',
      'To make the sentence longer and more impressive',
      'To avoid mentioning any subject at all',
      'To express strong emotion',
    ],
    answer: 'To create an impersonal, objective tone by focusing on the action or receiver',
    explanation: 'Formal and academic writing uses the passive to shift emphasis away from personal agents, creating objectivity.',
  },
  {
    prompt: 'Which edit would MOST improve cohesion in a paragraph?',
    options: [
      'Adding a connector like "ngoko" to show the logical link between two sentences',
      'Replacing all verbs with nouns',
      'Removing the conclusion sentence',
      'Shortening every sentence to fewer than five words',
    ],
    answer: 'Adding a connector like "ngoko" to show the logical link between two sentences',
    explanation: 'Connectors create explicit links between ideas — without them, a paragraph reads as disconnected sentences.',
  },
  {
    prompt: 'Which change is required when converting direct to indirect speech in isiXhosa?',
    options: [
      'Adjusting pronouns so they refer to the original speaker, not the quoter',
      'Keeping all pronouns exactly as spoken',
      'Adding an exclamation mark at the end',
      'Changing the verb tense to present tense only',
    ],
    answer: 'Adjusting pronouns so they refer to the original speaker, not the quoter',
    explanation: 'Pronoun shifts are essential: first-person pronouns in direct speech become third-person in indirect speech.',
  },
];

const LanguageStructuresT2 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Direct and indirect speech, connectors, passive voice, editing, and cohesion"
    learnSteps={learnSteps}
    task="gr11-xho-language-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT2;
