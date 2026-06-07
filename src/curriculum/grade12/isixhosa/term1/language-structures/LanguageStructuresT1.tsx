import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/xho/term1/language-structures/diagram.webp", alt: "Language Structures" },
    title: 'isiXhosa concord (isivumelwano)',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Isivumelwano</strong> means the verb and related words must agree with the noun class of the
          subject or object.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Subject concord</strong>
            <p className="text-slate-600">Matches the subject: <em>Abantwana bayafunda</em>.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Object concord</strong>
            <p className="text-slate-600">Refers back to the object inside the verb when needed.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Noun classes</strong>
            <p className="text-slate-600">Each class takes a different agreement pattern, such as <strong>ba-</strong> for class 2.</p>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-5 text-left text-slate-600">
          <p><strong>Example:</strong> &quot;Abantwana bayafunda&quot; means &quot;The children are reading&quot; and uses the class 2 prefix <strong>ba-</strong>.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Punctuation: commas, colons, semicolons, apostrophes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Correct punctuation improves meaning, pace, and clarity in both English explanations and isiXhosa sentences.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Commas and colons</strong>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-slate-600">
              <li>Use commas to separate items or clauses.</li>
              <li>Use a colon before a list or explanation.</li>
            </ul>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Semicolons and apostrophes</strong>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-slate-600">
              <li>Use a semicolon to join closely related clauses.</li>
              <li>Use an apostrophe in contractions or possession where appropriate in English examples.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Vocabulary in context: inferring meaning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When you meet an unfamiliar word, use <strong>surrounding clues</strong> instead of guessing wildly.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-rose-50 p-4"><strong className="text-rose-700">Nearby clues</strong><p className="text-slate-600">Definitions, examples, and contrast words often reveal meaning.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Connotation</strong><p className="text-slate-600">Ask whether the word sounds positive, negative, or neutral.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Word families</strong><p className="text-slate-600">Related words can help: act, action, active, activity.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Editing for clarity and style',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Final editing improves the quality of writing by removing confusion and sharpening style.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Check for</strong>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-slate-600">
              <li>Redundant words</li>
              <li>Repeated vocabulary</li>
              <li>Concord and tense inconsistency</li>
              <li>Awkward or confusing sentences</li>
            </ul>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Improve with</strong>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-slate-600">
              <li>More precise verbs and nouns</li>
              <li>Varied sentence length</li>
              <li>Clear punctuation</li>
              <li>Consistent formal style where needed</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Repeat these grammar-and-style terms to support complex sentence control and careful editing.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Igatya"} phonetic={"[i'gaːtja]"} meaning={"Clause"} lang="xh" />
          <PronunciationPlayer word={"Isihlanganisi"} phonetic={"[isi.hlaŋga'niːsi]"} meaning={"Conjunction"} lang="xh" />
          <PronunciationPlayer word={"Isimbo"} phonetic={"[i'simbɔ]"} meaning={"Style"} lang="xh" />
          <PronunciationPlayer word={"Ukuhlela"} phonetic={"[uku'ɬɛla]"} meaning={"Editing"} lang="xh" />
          <PronunciationPlayer word={"Isivakalisi"} phonetic={"[isi.vaka'liːsi]"} meaning={"Sentence"} lang="xh" />
          <PronunciationPlayer word={"Isiphumlisi"} phonetic={"[isi.pʰum'liːsi]"} meaning={"Punctuation mark"} lang="xh" />
        </div>
      </div>
    ),
  },
];

type RawItem = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const rawItems: RawItem[] = [
  {
    id: 'lang1',
    question: 'Which subject concord matches “abantwana”?',
    options: ['ba-', 'u-', 'si-', 'li-'],
    answer: 0,
    explanation: '“Abantwana” belongs to class 2 and takes the subject concord “ba-”, as in “Abantwana bayafunda”.',
  },
  {
    id: 'lang2',
    question: 'Which sentence shows correct concord?',
    options: ['Abantwana bayafunda.', 'Abantwana uyafunda.', 'Abantwana iyafunda.', 'Abantwana sifunda.'],
    answer: 0,
    explanation: 'The plural noun “abantwana” must agree with the verb prefix “ba-”.',
  },
  {
    id: 'lang3',
    question: 'Which punctuation mark correctly introduces a list?',
    options: ['Colon', 'Comma', 'Question mark', 'Apostrophe'],
    answer: 0,
    explanation: 'A colon is commonly used before a list or explanation.',
  },
  {
    id: 'lang4',
    question: 'What is the best reason to use a semicolon?',
    options: ['To join closely related independent clauses', 'To show a direct question', 'To replace every comma in a sentence', 'To mark possession in English'],
    answer: 0,
    explanation: 'A semicolon links related clauses without using a conjunction.',
  },
  {
    id: 'lang5',
    question: 'If a passage says a speaker was “reluctant” and then explains that she hesitated to answer, which clue helps most?',
    options: ['A definition or explanation clue', 'A rhyme clue', 'A page-number clue', 'A colour clue'],
    answer: 0,
    explanation: 'The explanation in the sentence gives enough context to infer the word’s meaning.',
  },
  {
    id: 'lang6',
    question: 'What does connotation refer to?',
    options: ['The feeling or association attached to a word', 'The number of letters in a word', 'The translation of a word only', 'The part of speech alone'],
    answer: 0,
    explanation: 'Connotation is the positive, negative, or neutral feeling a word carries.',
  },
  {
    id: 'lang7',
    question: 'Which edit most improves style?',
    options: ['Replacing vague words with more precise vocabulary', 'Adding the same adjective repeatedly', 'Removing all punctuation', 'Changing every sentence into slang'],
    answer: 0,
    explanation: 'Precise vocabulary makes writing clearer, more mature, and more effective.',
  },
  {
    id: 'lang8',
    question: 'What should you check when editing for clarity?',
    options: ['Whether ideas are concise and the tense stays consistent', 'Whether every sentence has the same length', 'Whether the paragraph avoids all verbs', 'Whether the text has no full stops'],
    answer: 0,
    explanation: 'Clear writing depends on concise wording and consistent grammar, including tense control.',
  },
];

const bank: CapsItem[] = rawItems.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const LanguageStructuresT1 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Advanced editing, isiXhosa concord, punctuation, style, and vocabulary in context"
    learnSteps={learnSteps}
    task="gr12-language-structures-t1"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default LanguageStructuresT1;
