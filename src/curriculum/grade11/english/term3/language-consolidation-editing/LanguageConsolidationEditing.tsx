import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Editing for accuracy in language tasks',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Language-in-context questions ask you to identify and correct errors. Know the most frequently tested error types.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Subject-verb agreement</strong>
            <p className="text-slate-600 text-sm">The verb must match the subject in number. "The group of learners <em>is</em>" not "<em>are</em>".</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Tense consistency</strong>
            <p className="text-slate-600 text-sm">Do not shift between past and present tense within a passage unless the shift is intentional.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Punctuation</strong>
            <p className="text-slate-600 text-sm">Apostrophes (possession vs contraction), commas, semicolons, and colons are commonly tested.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Pronoun reference</strong>
            <p className="text-slate-600 text-sm">Pronouns must clearly refer to a specific noun. Ambiguous pronoun reference is an error.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Word choice / Register</strong>
            <p className="text-slate-600 text-sm">Identify when a word is too informal for context or when the wrong word has been used (homophones, near-homophones).</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Parallel structure</strong>
            <p className="text-slate-600 text-sm">Items in a list or paired structures must use the same grammatical form: "She enjoys reading, writing, and <em>to sing</em>" → "singing".</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Active and passive voice',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Voice determines whether the subject of the sentence <strong>performs</strong> the action (active) or <strong>receives</strong> the action (passive).
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Active voice</strong>
            <p className="text-slate-600 text-sm">Subject + verb + object.<br /><em>"The teacher marked the scripts."</em><br />Clear, direct, and usually preferred in essay writing.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Passive voice</strong>
            <p className="text-slate-600 text-sm">Object + to be + past participle (+ by agent).<br /><em>"The scripts were marked by the teacher."</em><br />Used in formal/scientific writing to emphasise the action.</p>
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl text-left">
          <p className="text-sm font-bold text-slate-700">How to convert:</p>
          <p className="text-sm text-slate-600">Move the object to the start → change the verb to "to be + past participle" → add "by + original subject" if needed.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Direct and indirect (reported) speech',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Converting between direct and indirect speech requires changes to <strong>tense</strong>, <strong>pronouns</strong>, and <strong>time/place references</strong>.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-3">
          <p className="text-sm font-bold text-slate-700">Direct → Indirect:</p>
          <p className="text-sm text-slate-600 italic">"I will come tomorrow," he said. → He said that he would come the following day.</p>
          <div className="mt-3 grid gap-2 text-sm">
            <p className="text-slate-600"><strong>Tense shifts:</strong> present → past; will → would; can → could; may → might</p>
            <p className="text-slate-600"><strong>Pronoun shifts:</strong> "I" → "he/she"; "you" → "I/they" (depends on context)</p>
            <p className="text-slate-600"><strong>Time/place shifts:</strong> "today" → "that day"; "here" → "there"; "tomorrow" → "the following day"</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Oral delivery: prepared presentation skills',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>prepared oral</strong> is a formal presentation on a chosen or assigned topic. You are assessed on both content and delivery.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Content criteria</strong>
            <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1 mt-1">
              <li>Clear opening, well-developed body, strong conclusion</li>
              <li>Relevant and accurate information</li>
              <li>Logical structure and progression of ideas</li>
            </ul>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Delivery criteria</strong>
            <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1 mt-1">
              <li>Eye contact and engagement with audience</li>
              <li>Varied pace and volume for emphasis</li>
              <li>Clear pronunciation; minimal filler words ("um", "like")</li>
              <li>Appropriate use of notes — not reading verbatim</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which of the following sentences is in the passive voice?',
    options: [
      '"The learners completed the assignment."',
      '"The assignment was completed by the learners."',
      '"She reads the novel every evening."',
      '"They will announce the results tomorrow."',
    ],
    answer: '"The assignment was completed by the learners."',
    explanation: 'In passive voice, the object becomes the subject and receives the action. "The assignment" (object) is now the subject and "was completed" is the passive verb form.',
  },
  {
    prompt: 'What does editing for "coherence" involve?',
    options: ['Checking the spelling errors and nothing else', 'Making the ideas flow logically, with clear links between sentences', 'Rewriting the whole essay from the start', 'Adding more quotations to strengthen the arguments'],
    answer: 'Making the ideas flow logically, with clear links between sentences',
    explanation: 'Coherence refers to the logical connection of ideas. A coherent text flows smoothly with clear links between points.',
  },
  {
    prompt: 'How do you correctly convert "She said, \'I am tired.\'" to indirect speech?',
    options: [
      '"She said that she is tired."',
      '"She said that she was tired."',
      '"She said, she was tired."',
      '"She said that I was tired."',
    ],
    answer: '"She said that she was tired."',
    explanation: 'Tense shifts: present "am" → past "was". Pronoun shifts: "I" → "she". The reporting word "that" is added and inverted commas are removed.',
  },
  {
    prompt: 'What is the function of a relative clause?',
    options: ['To join two independent sentences with a comma only', 'To add information about a noun with "who", "which" or "that"', 'To change a sentence from active to passive voice', 'To introduce a list of items in the middle of a sentence'],
    answer: 'To add information about a noun with "who", "which" or "that"',
    explanation: 'Relative clauses modify a noun: "The teacher who marked the papers…" The relative pronoun "who" introduces the clause.',
  },
  {
    prompt: 'What is a complex sentence?',
    options: ['A sentence that is very long and hard to follow', 'A sentence with an independent clause and a dependent clause', 'Two simple sentences joined by "and" or "but"', 'A sentence with more than twenty words in it'],
    answer: 'A sentence with an independent clause and a dependent clause',
    explanation: 'Example: "Although it was raining, the match continued." "Although it was raining" is the dependent clause; "the match continued" is the independent clause.',
  },
  {
    prompt: 'Which word signals a concessive clause?',
    options: [
      '"Because"', '"Although"', '"Therefore"', '"Moreover"',
    ],
    answer: '"Although"',
    explanation: 'Concessive clauses acknowledge a contrasting point: "Although he studied hard, he did not pass." "Although", "even though", and "while" introduce concessive clauses.',
  },
  {
    prompt: 'What is the purpose of a topic sentence in a paragraph?',
    options: [
      'To list all the quotations to be used in the paragraph',
      'To close the paragraph and link to the next one',
      'To state the main idea of the paragraph, guiding everything that follows',
      'To provide a definition of key terms',
    ],
    answer: 'To state the main idea of the paragraph, guiding everything that follows',
    explanation: 'A topic sentence is usually the first sentence of a paragraph. All other sentences in the paragraph should support and develop this main idea.',
  },
  {
    prompt: 'What is parallelism in writing?',
    options: [
      'Repeating the same sentence twice for emphasis',
      'Using the same grammatical form for items in a list or paired structures',
      'Writing two paragraphs that are identical in content',
      'Using alliteration throughout an essay',
    ],
    answer: 'Using the same grammatical form for items in a list or paired structures',
    explanation: 'Parallelism ensures balance: "She likes reading, writing, and singing" — not "She likes reading, to write, and sang." Lack of parallelism is a common error.',
  },
  {
    prompt: 'Which punctuation mark correctly introduces a direct quotation within a sentence?',
    options: ['A semicolon (;), whatever the structure is', 'A colon (:) or a comma (,), depending on the structure', 'An ellipsis (…), whatever the structure is', 'A hyphen (—), whatever the structure is'],
    answer: 'A colon (:) or a comma (,), depending on the structure',
    explanation: 'Use a colon after a complete introductory clause: "She announced: \'We have won.\'" Use a comma after a verb of saying: "She said, \'We have won.\'"',
  },
  {
    prompt: 'What quality most distinguishes an effective prepared oral delivery?',
    options: [
      'Reading directly from the script without looking up',
      'Engaging the audience through eye contact, varied pace, and clear pronunciation',
      'Using as many difficult words as possible to impress listeners',
      'Speaking for as long as possible regardless of time limits',
    ],
    answer: 'Engaging the audience through eye contact, varied pace, and clear pronunciation',
    explanation: 'Effective delivery is dynamic — it uses vocal variety and audience engagement. Reading verbatim from notes is penalised in oral assessments.',
  },
];

const LanguageConsolidationEditing = () => (
  <CapsSubjectTopic
    title="Language Consolidation and Editing"
    subtitle="Editing, active and passive voice, direct and indirect speech, oral delivery"
    learnSteps={learnSteps}
    task="gr11-language-consolidation-editing-t3"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LanguageConsolidationEditing;
