import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/xho/term1/language-structures/diagram.webp", alt: "Language Structures" },
    title: 'Concord (isivumelwano) — subject–verb agreement in isiXhosa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Concord (isivumelwano)</strong> is one of the most important grammar rules in isiXhosa. Every verb must agree with its subject's noun class.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-800 mb-2">Common concord prefixes:</p>
          <table className="w-full text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left pb-1">Noun class</th>
                <th className="text-left pb-1">Subject concord</th>
                <th className="text-left pb-1">Example</th>
              </tr>
            </thead>
            <tbody className="space-y-1">
              <tr><td>umfana (boy)</td><td>u-</td><td>Umfana <strong>uyagijima</strong></td></tr>
              <tr><td>abantwana (children)</td><td>ba-</td><td>Abantwana <strong>bayagijima</strong></td></tr>
              <tr><td>inja (dog)</td><td>i-</td><td>Inja <strong>iyagijima</strong></td></tr>
              <tr><td>izinja (dogs)</td><td>zi-</td><td>Izinja <strong>ziyagijima</strong></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    title: 'Punctuation — rules and functions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Correct punctuation ensures clarity. Know the function of each mark:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">. (full stop)</strong>
            <p className="text-slate-600">Ends a statement sentence.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">, (comma)</strong>
            <p className="text-slate-600">Separates items in a list; introduces a subordinate clause.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">? (question mark)</strong>
            <p className="text-slate-600">Ends a direct question.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">! (exclamation mark)</strong>
            <p className="text-slate-600">Expresses strong emotion or command.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">" " (quotation marks)</strong>
            <p className="text-slate-600">Encloses direct speech and titles.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">: (colon)</strong>
            <p className="text-slate-600">Introduces a list or explanation.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Vocabulary in context — inferring meaning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          You can often work out the meaning of an unfamiliar word by using <strong>context clues</strong> in the surrounding text.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-800 mb-2">Strategies:</p>
          <ul className="list-disc ml-4 text-slate-600 space-y-1">
            <li><strong>Definition clue:</strong> the sentence defines the word (e.g. "Isibhedlele, indawo abantu abagulayo baya kuyo…")</li>
            <li><strong>Example clue:</strong> examples near the word hint at its meaning.</li>
            <li><strong>Contrast clue:</strong> an antonym nearby clarifies meaning.</li>
            <li><strong>General sense:</strong> the overall topic narrows down possibilities.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Editing and style — improving written texts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When <strong>editing</strong> your own or another text, check for these common issues in isiXhosa writing:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Common errors to fix:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Incorrect concord (subject–verb mismatch)</li>
              <li>Tense inconsistency within a paragraph</li>
              <li>Missing punctuation at sentence end</li>
              <li>Repetition of the same word (vary vocabulary)</li>
            </ul>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Style improvements:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Vary sentence length (short and long)</li>
              <li>Use connecting words (connectors) for flow</li>
              <li>Replace vague words with precise ones</li>
              <li>Match register to purpose and audience</li>
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

const bank: CapsItem[] = [
  {
    prompt: 'Which subject concord is used with "abantwana" (children) in isiXhosa?',
    options: ['ba-', 'u-', 'i-', 'zi-'],
    answer: 'ba-',
    explanation: '"Abantwana" belongs to the aba- noun class. Its subject concord is "ba-", e.g. "Abantwana bayafunda."',
  },
  {
    prompt: 'Complete the sentence with the correct concord: "Inja _____ gijima."',
    options: ['iyagijima', 'bayagijima', 'uyagijima', 'ziyagijima'],
    answer: 'iyagijima',
    explanation: '"Inja" (dog) takes the "i-" subject concord, giving "Inja iyagijima."',
  },
  {
    prompt: 'Which punctuation mark ends a direct question in isiXhosa?',
    options: ['?', '.', '!', ','],
    answer: '?',
    explanation: 'A question mark (?) is placed at the end of every direct question, regardless of language.',
  },
  {
    prompt: 'A colon (:) is used to:',
    options: [
      'Introduce a list or explanation',
      'End a sentence',
      'Show possession',
      'Separate two main clauses of equal importance',
    ],
    answer: 'Introduce a list or explanation',
    explanation: 'A colon signals that what follows directly explains or lists what came before it.',
  },
  {
    prompt: 'When reading an unfamiliar word in a passage, which strategy involves looking for its opposite nearby?',
    options: ['Contrast clue', 'Definition clue', 'Example clue', 'Sound clue'],
    answer: 'Contrast clue',
    explanation: 'A contrast clue uses an antonym (opposite word) near the unfamiliar term to help the reader infer its meaning.',
  },
  {
    prompt: 'Which error does "concord" correction address?',
    options: [
      'Mismatch between the subject noun class and the verb prefix',
      'Incorrect use of question marks',
      'Using too many adjectives',
      'Writing in the wrong tense',
    ],
    answer: 'Mismatch between the subject noun class and the verb prefix',
    explanation: 'Concord (isivumelwano) requires the verb prefix to match the noun class of the subject.',
  },
  {
    prompt: 'Which style choice improves the flow of a paragraph?',
    options: [
      'Using connectors (connecting words) to link sentences',
      'Repeating the same opening phrase in every sentence',
      'Using only very short sentences throughout',
      'Avoiding all punctuation to keep the writing natural',
    ],
    answer: 'Using connectors (connecting words) to link sentences',
    explanation: 'Connectors such as "kodwa" (but), "nangona" (although), and "ngoko" (so/therefore) create cohesion and logical flow.',
  },
  {
    prompt: 'What is a "definition clue" for vocabulary in context?',
    options: [
      'The sentence or passage directly explains the meaning of the word',
      'The word sounds similar to an English word you know',
      'A picture nearby illustrates the word',
      'The word appears in bold or italics',
    ],
    answer: 'The sentence or passage directly explains the meaning of the word',
    explanation: 'Writers sometimes define difficult words immediately after using them, providing an in-text explanation.',
  },
  {
    prompt: 'Which action is part of the EDITING stage of writing?',
    options: [
      'Correcting grammar, punctuation, and concord errors in a completed draft',
      'Generating as many ideas as possible',
      'Writing the first version of the text freely',
      'Choosing the topic and audience',
    ],
    answer: 'Correcting grammar, punctuation, and concord errors in a completed draft',
    explanation: 'Editing focuses on accuracy and correctness — it takes place after the content has been drafted.',
  },
];

const LanguageStructuresT1 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Concord, punctuation, vocabulary in context, editing and style"
    learnSteps={learnSteps}
    task="gr11-xho-language-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT1;
