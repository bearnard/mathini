import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/xho/term4/listening-speaking/diagram.webp", alt: "Listening & Speaking" },
    title: 'Revising speech structure and delivery',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Consolidate your understanding of speech components for final assessment readiness.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Structure</strong>
            <p className="text-slate-600">Introduction (intshayelelo) → Body (umzimba) → Conclusion (isiphetho)</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Delivery</strong>
            <p className="text-slate-600">Eye contact, clear pronunciation, appropriate pace, voice projection, natural gestures.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Content</strong>
            <p className="text-slate-600">Clear position or theme, organised points, relevant examples, persuasive or engaging language.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Listening comprehension strategies for examinations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Apply a systematic approach to listening comprehension under exam conditions.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <ol className="list-decimal ml-4 text-slate-600 space-y-1">
            <li><strong>Before:</strong> Read all questions carefully. Identify question types (detail, inference, attitude).</li>
            <li><strong>During:</strong> Jot key words, names, numbers, and signpost phrases.</li>
            <li><strong>After:</strong> Review notes against questions; use context to fill any gaps.</li>
          </ol>
        </div>
        <p className="text-sm text-slate-500">Common question types: literal (what was said?), inferential (what does it imply?), evaluative (why did the speaker say this?).</p>
      </div>
    ),
  },
  {
    title: 'Reading fluency — pace, pronunciation, and expression',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Reading fluency</strong> is measured across three dimensions in CAPS oral assessments:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Pace (isantya)</strong>
            <p className="text-slate-600">Read at a steady, comfortable speed — not too fast or too slow. Pause at punctuation marks.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Pronunciation (ukuthetha)</strong>
            <p className="text-slate-600">Articulate each word clearly — especially isiXhosa click consonants (c, q, x) and vowel lengths.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Expression (ukubonisa)</strong>
            <p className="text-slate-600">Use voice tone to convey emotion and meaning — vary pitch for questions, exclamations, and emphasis.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Final oral presentation review — self-evaluation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Self-evaluation strengthens future performance. Use these criteria to review your oral presentations:
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-800 mb-2">Self-evaluation checklist:</p>
          <ul className="space-y-1 text-slate-600">
            <li>✅ Was the structure clear (intro, body, conclusion)?</li>
            <li>✅ Did I maintain eye contact with the audience?</li>
            <li>✅ Was my pace appropriate?</li>
            <li>✅ Did I pronounce isiXhosa click sounds correctly?</li>
            <li>✅ Did I use appropriate register for the context?</li>
            <li>✅ Was my content supported by evidence or examples?</li>
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
          Practice these formal oral-task words before speeches, interviews, summaries, or discussions.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Intetho"} phonetic={"[in'tɛːtʰɔ]"} meaning={"Speech"} lang="xh" />
          <PronunciationPlayer word={"Ingxoxo"} phonetic={"[iŋ'xɔxɔ]"} meaning={"Discussion"} lang="xh" />
          <PronunciationPlayer word={"Udliwano-ndlebe"} phonetic={"[udli'wanɔ ndlɛbɛ]"} meaning={"Interview"} lang="xh" />
          <PronunciationPlayer word={"Phulaphula"} phonetic={"[pʰula'pʰula]"} meaning={"Listen"} lang="xh" />
          <PronunciationPlayer word={"Thetha"} phonetic={"[tɛta]"} meaning={"Speak"} lang="xh" />
          <PronunciationPlayer word={"Isishwankathelo"} phonetic={"[isiʃwaŋka'tʰeːlɔ]"} meaning={"Summary"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which three parts make up the structure of a prepared speech in isiXhosa?',
    options: ['Intshayelelo, umzimba, isiphetho', 'Umbuzo, impendulo, isicatshulwa', 'Igatya, intetho, isivumelwano', 'Umdlalo, imvumi, ingoma'],
    answer: 'Intshayelelo, umzimba, isiphetho',
    explanation: 'These three sections structure every prepared speech — from establishing context to delivering a memorable closing.',
  },
  {
    prompt: 'What should you do BEFORE the oral passage is played in a listening comprehension exam?',
    options: [
      'Read all the questions carefully to know what information to listen for',
      'Write a detailed summary of what you expect to hear',
      'Close your notebook and listen without any preparation',
      'Ask a classmate to summarise the passage for you',
    ],
    answer: 'Read all the questions carefully to know what information to listen for',
    explanation: 'Pre-reading the questions focuses your attention and improves both literal and inferential comprehension.',
  },
  {
    prompt: 'Which type of listening comprehension question requires you to READ BETWEEN THE LINES?',
    options: [
      'Inferential question',
      'Literal question',
      'Recall question',
      'Format question',
    ],
    answer: 'Inferential question',
    explanation: 'Inferential questions test whether you can deduce implied meaning — they go beyond what is directly stated.',
  },
  {
    prompt: 'In reading fluency, why is it important to pause at punctuation marks?',
    options: ['Punctuation signals meaning breaks; pausing helps the listener', 'To give the listener time to write down every word', 'To show that you are reading slowly on purpose', 'Punctuation marks are silent in isiXhosa reading'],
    answer: 'Punctuation signals meaning breaks; pausing helps the listener',
    explanation: 'Reading through punctuation creates a continuous rush of sound that obscures meaning; pausing at marks aids understanding.',
  },
  {
    prompt: 'Which isiXhosa phonological feature is important for correct pronunciation in oral reading?',
    options: [
      'Click consonants (c, q, x) and vowel lengths',
      'Whispering at the end of each sentence',
      'Using English pronunciation for all borrowed words',
      'Avoiding any aspirated sounds',
    ],
    answer: 'Click consonants (c, q, x) and vowel lengths',
    explanation: 'isiXhosa has three click consonant types (dental c, alveolar q, lateral x) and vowel length — both are assessed in oral performance.',
  },
  {
    prompt: 'Why is self-evaluation after an oral presentation valuable?',
    options: ['It shows specific weaknesses to improve before the next time', 'It takes the place of teacher feedback', 'It gives you a grade before the teacher marks', 'It is only required for written tasks, not oral ones'],
    answer: 'It shows specific weaknesses to improve before the next time',
    explanation: 'Reflective self-evaluation is a metacognitive skill that promotes targeted improvement in oral performance.',
  },
  {
    prompt: 'What does "expression" in oral reading involve?',
    options: [
      'Varying pitch and tone to convey emotion and meaning',
      'Speaking only in a monotone voice throughout',
      'Reading as fast as possible',
      'Avoiding all pauses',
    ],
    answer: 'Varying pitch and tone to convey emotion and meaning',
    explanation: 'Expressive reading brings the text to life — different tones signal questions, emphasis, surprise, or sadness.',
  },
  {
    prompt: 'Which delivery feature shows audience awareness during a speech?',
    options: ['Steady eye contact with different parts of the audience', 'Looking only at the ceiling while you are speaking', 'Reading every word from a script in front of you', 'Standing completely still with no movement at all'],
    answer: 'Steady eye contact with different parts of the audience',
    explanation: 'Scanning the audience with eye contact creates connection, signals confidence, and holds audience attention.',
  },
];

const ListeningSpeakingT4 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Revision of speeches, listening comprehension, reading fluency, and presentation review"
    learnSteps={learnSteps}
    task="gr11-xho-listening-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT4;
