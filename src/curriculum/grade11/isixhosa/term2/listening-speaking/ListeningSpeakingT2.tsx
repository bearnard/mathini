import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/xho/term2/listening-speaking/diagram.webp", alt: "Listening & Speaking" },
    title: 'Interviews — question types and formal register',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>interview</strong> is a structured conversation with a specific purpose. Understanding question types improves both asking and answering skills.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Open questions</strong>
            <p className="text-slate-600">Invite a full, detailed response. E.g. "Chaza indlela oziva ngayo ngokufundisa kwakho?" (Describe how you feel about your teaching?)</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Closed questions</strong>
            <p className="text-slate-600">Expect a short, specific answer (Yes/No or fact). E.g. "Ngaba ufundise iminyaka emithathu?" (Have you taught for three years?)</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Maintain formal register: use titles (Mnumzana / Nkosikazi), complete sentences, and respectful language throughout.</p>
      </div>
    ),
  },
  {
    title: 'Panel discussions — roles and respectful debate',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>panel discussion</strong> involves multiple speakers presenting different perspectives on an issue in a structured, formal setting.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Chairperson</strong>
            <p className="text-slate-600">Manages time, introduces speakers, and ensures orderly debate.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Panelists</strong>
            <p className="text-slate-600">Present informed, evidence-based viewpoints on the topic.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Audience</strong>
            <p className="text-slate-600">Listen critically and may ask questions at the appropriate time.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Oral summaries — main points and accuracy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>oral summary</strong> condenses a longer text into the most important points — delivered accurately and concisely.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-800 mb-2">Steps for a strong oral summary:</p>
          <ol className="list-decimal ml-4 text-slate-600 space-y-1">
            <li>Identify the main idea of each paragraph.</li>
            <li>Note 3–5 key supporting points.</li>
            <li>Use your own words — do not copy verbatim.</li>
            <li>Maintain logical order and flow.</li>
            <li>Deliver clearly in the target language.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: 'Listening for attitude and bias',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Attitude</strong> is how a speaker feels about a topic. <strong>Bias</strong> is an unfair leaning towards one view. You can identify both by noticing:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Signals of bias:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Loaded or emotive language</li>
              <li>Presenting only one side</li>
              <li>Exaggerating statistics or claims</li>
              <li>Ignoring counter-arguments</li>
            </ul>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Signals of attitude:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Tone of voice (enthusiastic, critical, sarcastic)</li>
              <li>Word choice (positive vs negative connotation)</li>
              <li>Emphasis and repetition of key ideas</li>
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
    prompt: 'Which type of interview question invites a detailed, extended response?',
    options: ['Open question', 'Closed question', 'Leading question', 'Rhetorical question'],
    answer: 'Open question',
    explanation: 'Open questions encourage the respondent to elaborate and share their thoughts fully — they cannot be answered with Yes or No.',
  },
  {
    prompt: 'What is the role of the chairperson in a panel discussion?',
    options: ['Manage time, introduce speakers and keep the debate orderly', 'Present the most persuasive argument of all', 'Ask all of the questions from the audience', 'Read out the conclusion at the end of the talk'],
    answer: 'Manage time, introduce speakers and keep the debate orderly',
    explanation: 'The chairperson is the neutral facilitator who keeps the discussion organised and fair.',
  },
  {
    prompt: 'When giving an oral summary, which practice should you AVOID?',
    options: [
      'Copying the original text word for word',
      'Identifying the main idea of each section',
      'Using your own words',
      'Maintaining logical order',
    ],
    answer: 'Copying the original text word for word',
    explanation: 'A summary must be paraphrased in your own words; verbatim copying shows no comprehension.',
  },
  {
    prompt: 'Which language feature is most likely a sign of bias in a spoken text?',
    options: [
      'Loaded or emotive language that favours one side',
      'Clearly balanced presentation of multiple views',
      'Use of statistics from different sources',
      'Polite, neutral vocabulary throughout',
    ],
    answer: 'Loaded or emotive language that favours one side',
    explanation: 'Biased texts use emotionally charged language to sway the listener rather than inform objectively.',
  },
  {
    prompt: 'What is the difference between "attitude" and "bias" in a spoken text?',
    options: [
      'Attitude is a speaker\'s overall feeling; bias is an unfair lean towards one view',
      'They mean exactly the same thing',
      'Attitude refers to factual content; bias refers to structure',
      'Bias is positive; attitude is always negative',
    ],
    answer: 'Attitude is a speaker\'s overall feeling; bias is an unfair lean towards one view',
    explanation: 'Attitude describes the speaker\'s emotional stance (positive, negative, critical); bias implies unfair partiality.',
  },
  {
    prompt: 'How many key points should a good oral summary typically include?',
    options: ['3–5 main supporting points', 'Every single detail from the original', '1 point only', '10 or more points'],
    answer: '3–5 main supporting points',
    explanation: 'A concise summary captures the essential ideas without exhaustive detail — 3–5 points maintain clarity.',
  },
  {
    prompt: 'Which register feature is required when conducting a formal interview?',
    options: [
      'Use titles (Mnumzana/Nkosikazi) and complete, respectful sentences',
      'Use slang and contractions for a relaxed atmosphere',
      'Speak only in English to seem professional',
      'Interrupt when you have a question',
    ],
    answer: 'Use titles (Mnumzana/Nkosikazi) and complete, respectful sentences',
    explanation: 'Formal register in isiXhosa interviews includes respectful forms of address and full, grammatically correct sentences.',
  },
  {
    prompt: 'What does "exaggerating statistics" indicate about a speaker?',
    options: [
      'The speaker may be showing bias to make their argument seem stronger',
      'The speaker has excellent research skills',
      'The speaker is being objective and balanced',
      'The speaker is summarising a complex issue fairly',
    ],
    answer: 'The speaker may be showing bias to make their argument seem stronger',
    explanation: 'Inflating or distorting numbers is a rhetorical technique used to mislead — a classic indicator of bias.',
  },
  {
    prompt: 'In a panel discussion, when is the audience permitted to ask questions?',
    options: [
      'At the appropriate time designated by the chairperson',
      'At any point during a panelist\'s contribution',
      'Only before the discussion begins',
      'The audience may not ask questions at all',
    ],
    answer: 'At the appropriate time designated by the chairperson',
    explanation: 'The chairperson controls the floor; audience questions are usually invited at a set point to keep order.',
  },
];

const ListeningSpeakingT2 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Interviews, panel discussions, oral summaries, and listening for attitude and bias"
    learnSteps={learnSteps}
    task="gr11-xho-listening-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT2;
