import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Complex sentences — main and subordinate clauses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>complex sentence</strong> contains one main (independent) clause and at least one subordinate (dependent) clause.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Main clause (igatya elizimeleyo)</strong>
            <p className="text-slate-600">Expresses a complete thought and can stand alone: "Ndiyafunda."</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Subordinate clause (igatya elincedisayo)</strong>
            <p className="text-slate-600">Cannot stand alone; depends on the main clause: "…nangona ndidiniwe." (…although I am tired.)</p>
          </div>
        </div>
        <p className="text-sm text-slate-500 mt-2">
          Complex sentence: "Ndiyafunda nangona ndidiniwe." — The subordinate clause adds information about conditions or circumstances.
        </p>
      </div>
    ),
  },
  {
    title: 'Style — formal vs informal and sentence variety',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Style</strong> refers to how you use language to create a particular effect. Grade 11 writing must show deliberate style choices.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Vary sentence types:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Simple sentences for impact</li>
              <li>Compound for equal ideas</li>
              <li>Complex for nuanced relationships</li>
            </ul>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Formal vs informal register:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Formal: no contractions, precise vocabulary</li>
              <li>Informal: contractions, conversational phrasing</li>
              <li>Match register to purpose and audience</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Punctuation mastery — commas, colons, and semicolons',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Advanced punctuation marks are used to control meaning and pace in complex sentences.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Comma (,)</strong>
            <p className="text-slate-600">Separates items in a list; introduces a subordinate clause; follows a fronted adverbial.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Colon (:)</strong>
            <p className="text-slate-600">Introduces a list, explanation, or quotation after a complete clause.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Semicolon (;)</strong>
            <p className="text-slate-600">Links two closely related independent clauses without using a conjunction.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Vocabulary refinement — precision and connotation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Vocabulary refinement</strong> means choosing the most precise and appropriate word for your purpose and audience.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-800 mb-2">Key concepts:</p>
          <ul className="list-disc ml-4 text-slate-600 space-y-1">
            <li><strong>Denotation:</strong> the literal, dictionary meaning of a word.</li>
            <li><strong>Connotation:</strong> the emotional associations a word carries (positive, negative, neutral).</li>
            <li><strong>Synonyms:</strong> words with similar meanings — choose the one whose connotation fits your purpose.</li>
          </ul>
          <p className="text-sm text-slate-500 mt-2">
            Example: "ityala" (debt) vs "imali engabuyiswanga" (money not returned) — same denotation, different register and connotation.
          </p>
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

const bank: CapsItem[] = [
  {
    prompt: 'Which sentence is a complex sentence?',
    options: [
      '"Ndiyafunda nangona ndidiniwe."',
      '"Ndiyafunda."',
      '"Ndiyafunda kwaye ndiyabonga."',
      '"Funda!"',
    ],
    answer: '"Ndiyafunda nangona ndidiniwe."',
    explanation: 'This sentence has a main clause ("Ndiyafunda") and a subordinate clause ("nangona ndidiniwe") — the hallmark of a complex sentence.',
  },
  {
    prompt: 'What is a "subordinate clause" (igatya elincedisayo)?',
    options: ['A clause that cannot stand alone and depends on the main clause', 'A clause that can stand alone as a full sentence', 'A clause that contains only a verb', 'A clause that starts a new paragraph'],
    answer: 'A clause that cannot stand alone and depends on the main clause',
    explanation: 'Subordinate clauses add conditions, reasons, or circumstances — they are dependent on the main clause.',
  },
  {
    prompt: 'Which punctuation mark is used to link two closely related independent clauses WITHOUT a conjunction?',
    options: ['Semicolon (;)', 'Comma (,)', 'Colon (:)', 'Full stop (.)'],
    answer: 'Semicolon (;)',
    explanation: 'A semicolon links related independent clauses in a way that shows their close relationship without a conjunction.',
  },
  {
    prompt: 'A colon (:) is correctly used to:',
    options: [
      'Introduce a list, explanation, or quotation after a complete clause',
      'Separate items within a list that already contains commas',
      'End every sentence in a formal document',
      'Replace a question mark in indirect questions',
    ],
    answer: 'Introduce a list, explanation, or quotation after a complete clause',
    explanation: 'The colon signals "here is what I promised" — it introduces content that follows directly from the preceding complete clause.',
  },
  {
    prompt: 'What is the "connotation" of a word?',
    options: ['The emotional associations a word carries beyond its literal meaning', 'The exact dictionary definition of the word', 'The grammatical function of the word (noun, verb)', 'The spelling of the word in another language'],
    answer: 'The emotional associations a word carries beyond its literal meaning',
    explanation: 'Connotation captures the cultural and emotional baggage of a word — important for style choices in formal writing.',
  },
  {
    prompt: 'Why is sentence variety important in Grade 11 writing?',
    options: ['It creates rhythm, keeps interest and shows language skill', 'It is required to make every sentence the same length', 'It lets the writer avoid using punctuation', 'It is only relevant in poetry and not in prose'],
    answer: 'It creates rhythm, keeps interest and shows language skill',
    explanation: 'Varied sentence structures — simple, compound, complex — are a key criterion in CAPS writing rubrics.',
  },
  {
    prompt: 'In which context is FORMAL register required in isiXhosa?',
    options: [
      'Writing a letter of complaint to a company',
      'Sending a message to a friend about weekend plans',
      'Writing a funny caption for a personal photo',
      'Chatting informally in a school corridor',
    ],
    answer: 'Writing a letter of complaint to a company',
    explanation: 'Formal contexts — business letters, academic writing, official reports — require formal register: precise vocabulary, no contractions.',
  },
  {
    prompt: 'Which strategy best helps with vocabulary refinement in an essay?',
    options: ['Choosing synonyms whose connotation fits the tone and audience', 'Using the same word again and again for emphasis', 'Replacing all of the verbs with nouns for variety', 'Avoiding all figurative language in the essay'],
    answer: 'Choosing synonyms whose connotation fits the tone and audience',
    explanation: 'Word choice is about appropriateness — the right synonym carries the right emotional weight and register for the context.',
  },
  {
    prompt: 'What does editing for "clarity" mean?',
    options: ['Reworking sentences to say ideas precisely, with no ambiguity', 'Making every sentence longer and more complex', 'Adding as many adjectives as you possibly can', 'Removing all of the subordinate clauses in the text'],
    answer: 'Reworking sentences to say ideas precisely, with no ambiguity',
    explanation: 'Clear writing communicates ideas efficiently — ambiguity and wordiness obscure meaning and lose marks.',
  },
];

const LanguageStructuresT3 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Complex sentences, style, punctuation mastery, and vocabulary refinement"
    learnSteps={learnSteps}
    task="gr11-xho-language-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT3;
