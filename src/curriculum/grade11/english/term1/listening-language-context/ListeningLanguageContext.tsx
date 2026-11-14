import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Listening comprehension strategies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In a listening comprehension task, you hear a passage read aloud and answer questions on it. You <strong>cannot reread</strong> the text, so active listening is critical.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Before listening</strong>
            <p className="text-slate-600 text-sm">Read the questions quickly to know what to listen for. Underline key words in each question.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">While listening</strong>
            <p className="text-slate-600 text-sm">Take brief notes on main ideas, names, numbers, and linking words. Do not try to write everything.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">After listening</strong>
            <p className="text-slate-600 text-sm">Use your notes to answer each question. Go back to check — answers should be logically supported by what you heard.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Inference questions</strong>
            <p className="text-slate-600 text-sm">Not all answers are stated directly — you must read between the lines using context and logic.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Language in context: grammar and editing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Language Paper questions test whether you can identify and correct errors and explain language choices.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Parts of speech</strong>
            <p className="text-slate-600 text-sm">Know nouns, pronouns, adjectives, adverbs, verbs, conjunctions, prepositions, and interjections.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Subject-verb agreement</strong>
            <p className="text-slate-600 text-sm">The verb must agree with the subject in number: "The team is" not "The team are" (in formal SA English).</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Tense consistency</strong>
            <p className="text-slate-600 text-sm">Do not shift tense unnecessarily within a passage.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Punctuation</strong>
            <p className="text-slate-600 text-sm">Know: full stop, comma, semicolon, colon, apostrophe, inverted commas, ellipsis.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Unprepared speech skills',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>unprepared speech</strong> requires you to speak on a topic with minimal preparation. You are assessed on content, structure, and delivery.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left space-y-2">
          <p><strong className="text-indigo-700">Opening:</strong> <span className="text-slate-600 text-sm">Introduce the topic and your stance clearly.</span></p>
          <p><strong className="text-indigo-700">Body:</strong> <span className="text-slate-600 text-sm">Two or three main points with supporting examples.</span></p>
          <p><strong className="text-indigo-700">Conclusion:</strong> <span className="text-slate-600 text-sm">Summarise and end with a memorable closing statement.</span></p>
          <p><strong className="text-indigo-700">Delivery:</strong> <span className="text-slate-600 text-sm">Vary pace and volume, maintain eye contact, avoid filler words.</span></p>
        </div>
      </div>
    ),
  },
  {
    title: 'Inference and critical response in comprehension',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Comprehension questions range from <strong>literal</strong> (directly stated) to <strong>inferential</strong> (implied) to <strong>critical/evaluative</strong> (your opinion with justification).
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-3">
          <p className="text-sm"><strong className="text-slate-700">Literal:</strong> <span className="text-slate-600">"According to paragraph 2, what did the speaker say?" — Find and quote directly.</span></p>
          <p className="text-sm"><strong className="text-slate-700">Inferential:</strong> <span className="text-slate-600">"What can you infer about the character's feelings?" — Reason from clues in the text.</span></p>
          <p className="text-sm"><strong className="text-slate-700">Critical:</strong> <span className="text-slate-600">"Do you agree with the writer's view? Justify your answer." — Give a supported opinion.</span></p>
        </div>
        <p className="text-sm text-slate-500">For inference questions, never guess — always link your answer to specific textual evidence.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is an inference in reading comprehension?',
    options: ['A word-for-word quotation taken from the text', 'A conclusion drawn from clues, not directly stated', 'A short summary of each paragraph of the text', 'A criticism of the style that the author uses'],
    answer: 'A conclusion drawn from clues, not directly stated',
    explanation: 'Inference requires you to "read between the lines" — using evidence and logic to reach a conclusion the text implies but does not state.',
  },
  {
    prompt: 'Which of the following demonstrates correct subject-verb agreement?',
    options: [
      '"The group of learners were excited."',
      '"Each of the boys have finished their work."',
      '"The committee has made its decision."',
      '"Neither the teacher nor the learners was prepared."',
    ],
    answer: '"The committee has made its decision."',
    explanation: 'Collective nouns like "committee" take a singular verb in formal South African English: "has", not "have".',
  },
  {
    prompt: 'What is the purpose of a listening comprehension task in English HL?',
    options: ['To test whether you can write a long essay quickly', 'To assess how well you understand and recall spoken language', 'To check that you can memorise quotations from books', 'To test your spelling of difficult words in a dictation'],
    answer: 'To assess how well you understand and recall spoken language',
    explanation: 'Listening comprehension develops and assesses oral reception skills — a core part of the CAPS language programme.',
  },
  {
    prompt: 'What does "editing" focus on in the writing process?',
    options: ['Choosing the topic of your essay before you write', 'Correcting grammar, spelling, punctuation and sentence structure', 'Adding extra paragraphs to reach the word count', 'Changing the whole structure of the essay at the end'],
    answer: 'Correcting grammar, spelling, punctuation and sentence structure',
    explanation: 'Editing is the final refinement step — it focuses on correctness at the sentence level, not content restructuring (which is revision).',
  },
  {
    prompt: 'What is reported (indirect) speech?',
    options: ['Quoting the exact words of a speaker inside quotation marks', 'Telling what was said without the exact words, shifting tense and pronouns', "Describing the speaker's looks while that person is talking", 'Writing a speech to be given to an audience in a hall'],
    answer: 'Telling what was said without the exact words, shifting tense and pronouns',
    explanation: 'Direct: She said, "I am tired." Indirect: She said that she was tired. Note the tense shift and pronoun change.',
  },
  {
    prompt: 'Which part of speech modifies (describes) a verb, adjective, or another adverb?',
    options: ['Noun', 'Pronoun', 'Adverb', 'Conjunction'],
    answer: 'Adverb',
    explanation: 'Adverbs answer questions like "how?", "when?", "where?", "how often?" — for example, "She spoke softly" (softly modifies the verb "spoke").',
  },
  {
    prompt: 'What is an antonym?',
    options: [
      'A word with the same meaning as another word',
      'A word with the opposite meaning to another word',
      'A word that sounds the same as another but has a different meaning',
      'A word that has more than one meaning',
    ],
    answer: 'A word with the opposite meaning to another word',
    explanation: 'For example, the antonym of "generous" is "miserly". Recognising antonyms is key for comprehension and vocabulary questions.',
  },
  {
    prompt: 'What is the function of a conjunction?',
    options: [
      'To name a person, place, or thing',
      'To modify a noun',
      'To connect words, phrases, or clauses together',
      'To express strong emotion',
    ],
    answer: 'To connect words, phrases, or clauses together',
    explanation: 'Conjunctions like "and", "but", "although", and "because" link ideas and show relationships (addition, contrast, cause, etc.).',
  },
  {
    prompt: 'When answering an inference question in comprehension, you should:',
    options: [
      'Write your personal opinion without referring to the text',
      'Copy the question back as your answer',
      'Use evidence from the text to support a logical conclusion',
      'Summarise the entire passage instead',
    ],
    answer: 'Use evidence from the text to support a logical conclusion',
    explanation: 'Inference answers must be grounded in the text — you reason from specific words, phrases, or events to reach your conclusion.',
  },
  {
    prompt: 'In a formal unprepared speech, what should you do during the conclusion?',
    options: [
      'Introduce a brand new idea that was not in the body',
      'Repeat every point you made word for word',
      'Summarise your key points and end with a memorable closing statement',
      'Apologise for any mistakes you made',
    ],
    answer: 'Summarise your key points and end with a memorable closing statement',
    explanation: 'A strong conclusion reinforces your message and leaves a lasting impression on the audience.',
  },
];

const ListeningLanguageContext = () => (
  <CapsSubjectTopic
    title="Listening and Language in Context"
    subtitle="Listening comprehension, grammar, editing and unprepared speech"
    learnSteps={learnSteps}
    task="gr11-listening-language-context-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ListeningLanguageContext;
