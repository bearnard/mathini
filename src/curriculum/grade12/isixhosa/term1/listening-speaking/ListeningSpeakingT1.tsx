import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/xho/term1/listening-speaking/diagram.webp", alt: "Listening & Speaking" },
    title: 'Prepared speech structure and register',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A Grade 12 <strong>prepared speech</strong> must sound controlled, formal, and purposeful. Plan your
          speech as <strong>intshayelelo</strong> (introduction), <strong>umzimba</strong> (body), and{' '}
          <strong>isiphetho</strong> (conclusion).
        </p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Intshayelelo</strong>
            <p className="text-slate-600">Open politely, introduce the topic, and prepare the audience.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Umzimba</strong>
            <p className="text-slate-600">Develop 2–3 clear points with examples, facts, or short illustrations.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Isiphetho</strong>
            <p className="text-slate-600">Summarise the message and end with a calm, memorable closing.</p>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-5 text-left">
          <p className="font-semibold text-slate-800">Formal opening example</p>
          <p className="text-slate-600">
            &quot;Molweni, ndibulela ithuba lokuthetha...&quot; <span className="text-slate-500">(Good day, I thank you
            for the opportunity to speak...)</span>
          </p>
          <p className="mt-2 text-slate-600">Maintain eye contact, keep a steady pace, and avoid slang in an assessed speech.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Listening for main idea and inference',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong listening comprehension involves <strong>before</strong>, <strong>during</strong>, and{' '}
          <strong>after-listening</strong> strategies.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Before listening</strong>
            <p className="text-slate-600">Read the questions, predict the topic, and notice key words to expect.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">During listening</strong>
            <p className="text-slate-600">Note names, numbers, repeated ideas, signal words, and important examples.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">After listening</strong>
            <p className="text-slate-600">Check what was stated directly and infer what the speaker suggests but does not say.</p>
          </div>
        </div>
        <ul className="mx-auto max-w-2xl list-disc space-y-1 rounded-2xl bg-slate-50 p-5 text-left text-slate-600">
          <li><strong>Main idea:</strong> the central message or overall point.</li>
          <li><strong>Detail:</strong> names, places, dates, or examples supporting the main idea.</li>
          <li><strong>Inference:</strong> a meaning you work out from tone, emphasis, and context clues.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Critical discussion: register and evidence',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In a <strong>critical discussion</strong>, learners speak respectfully, build on ideas, and support claims
          with evidence rather than emotion.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Useful formal phrases</strong>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-slate-600">
              <li>&quot;I would like to add that...&quot;</li>
              <li>&quot;I respectfully disagree because...&quot;</li>
              <li>&quot;The evidence suggests that...&quot;</li>
              <li>&quot;Building on that point...&quot;</li>
            </ul>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">What to avoid</strong>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-slate-600">
              <li>Interrupting other speakers</li>
              <li>Using insults or personal attacks</li>
              <li>Switching into slang or disrespectful register</li>
              <li>Making claims without reasons or proof</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Oral response to literature: P-E-E method',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Oral literature responses become stronger when you use the <strong>P-E-E</strong> method: make a point,
          quote or paraphrase evidence, then explain the effect.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Point</strong>
            <p className="text-slate-600">State the idea clearly: what trait, theme, or message are you discussing?</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Evidence</strong>
            <p className="text-slate-600">Quote or paraphrase a line, action, or event from the text.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Explanation</strong>
            <p className="text-slate-600">Show how the evidence proves your point and why it matters.</p>
          </div>
        </div>
        <div className="rounded-2xl bg-slate-50 p-5 text-left">
          <p className="font-semibold text-slate-800">isiXhosa example</p>
          <p className="text-slate-600">
            <strong>Point:</strong> The character is determined. <strong>Evidence:</strong> &quot;Akazange anikezele naxa
            wayebandezelekile.&quot; <strong>Explanation:</strong> This shows persistence even under pressure.
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

type RawItem = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const rawItems: RawItem[] = [
  {
    id: 'ls1',
    question: 'Which order shows the correct structure of a prepared speech?',
    options: ['Intshayelelo, umzimba, isiphetho', 'Umzimba, isiphetho, intshayelelo', 'Isiphetho, intshayelelo, umzimba', 'Greeting, ending, body'],
    answer: 0,
    explanation: 'A prepared speech begins with the introduction, develops ideas in the body, and closes with the conclusion.',
  },
  {
    id: 'ls2',
    question: 'Which opening best matches a formal Grade 12 speech?',
    options: ['Molweni, ndibulela ithuba lokuthetha...', 'Hey guys, let me just say this quickly...', 'Yo friends, listen to me now...', 'What is up everyone?'],
    answer: 0,
    explanation: 'Formal oral tasks require respectful greeting and register, not slang or casual expressions.',
  },
  {
    id: 'ls3',
    question: 'What is the best strategy before listening to a comprehension passage?',
    options: ['Read the questions and predict what information may appear', 'Memorise every answer before the recording starts', 'Ignore the heading and wait for the first answer', 'Write a summary before hearing the passage'],
    answer: 0,
    explanation: 'Pre-reading the questions focuses attention on the type of information you need to identify.',
  },
  {
    id: 'ls4',
    question: 'If a speaker sounds doubtful even though they never say “I am unsure”, what skill are you using?',
    options: ['Inference', 'Copying', 'Scanning', 'Memorisation'],
    answer: 0,
    explanation: 'Inference means working out an unstated meaning from tone, context, or emphasis.',
  },
  {
    id: 'ls5',
    question: 'Which response shows good discussion etiquette?',
    options: ['I respectfully disagree because the poem gives a different idea in stanza 2.', 'That is nonsense and you are wrong.', 'I will interrupt now before you finish.', 'My opinion is enough; I do not need evidence.'],
    answer: 0,
    explanation: 'A critical discussion needs respectful language and a reason supported by evidence.',
  },
  {
    id: 'ls6',
    question: 'In an oral literature response, what should come after your point?',
    options: ['Evidence from the text', 'A new unrelated topic', 'A joke to entertain the class', 'An apology for answering'],
    answer: 0,
    explanation: 'P-E-E requires you to support your point with textual evidence before explaining it.',
  },
  {
    id: 'ls7',
    question: 'Which delivery choice usually improves a prepared speech?',
    options: ['Maintaining eye contact and pacing yourself clearly', 'Reading every line without looking up', 'Speaking as fast as possible', 'Using informal slang to sound relaxed'],
    answer: 0,
    explanation: 'Eye contact and steady pacing help the audience follow the speech and show confidence.',
  },
  {
    id: 'ls8',
    question: 'Which sentence is the best explanation part of P-E-E?',
    options: ['This quotation proves the character values honesty more than popularity.', 'The quotation is in the book.', 'I like the quotation very much.', 'The line is short and easy to read.'],
    answer: 0,
    explanation: 'The explanation must show how the evidence supports the point you made.',
  },
];

const bank: CapsItem[] = rawItems.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const ListeningSpeakingT1 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Prepared speech, listening comprehension, discussion, and oral response to literature"
    learnSteps={learnSteps}
    task="gr12-listening-speaking-t1"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default ListeningSpeakingT1;
