import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Interview techniques: questions and responses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Interviews work best when questions are planned carefully and the speaker keeps a respectful,
          <strong> formal register</strong>.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Open questions</strong><p className="text-slate-600">Invite fuller answers: why, how, what do you think?</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Closed questions</strong><p className="text-slate-600">Useful for facts, dates, and short confirmation.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Probing follow-up</strong><p className="text-slate-600">Ask for examples or clarification after the first answer.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Oral presentations: structure and delivery',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Oral presentations need a clear beginning, organised body, and purposeful ending.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Signposting language</strong>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-slate-600">
              <li>&quot;Firstly...&quot;</li>
              <li>&quot;In addition...&quot;</li>
              <li>&quot;Finally...&quot;</li>
            </ul>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Delivery choices</strong>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-slate-600">
              <li>Use visual aids only when they support your message.</li>
              <li>Keep posture open and pace steady.</li>
              <li>Conclude with a strong summary statement.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Listening for attitude and bias',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In spoken texts, tone and word choice can reveal <strong>attitude</strong> and <strong>bias</strong>.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-rose-50 p-4"><strong className="text-rose-700">Tone markers</strong><p className="text-slate-600">Listen for sarcasm, praise, doubt, excitement, or annoyance.</p></div>
          <div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Loaded language</strong><p className="text-slate-600">Strong emotional words may push the audience toward one view.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Fact vs opinion</strong><p className="text-slate-600">Check whether the statement can be verified or is just a personal judgement.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Formal oral responses: precision and register',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Formal responses should be precise, complete, and appropriately cautious.
        </p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Useful formal language</strong>
            <p className="text-slate-600">Phrases such as &quot;It would appear that...&quot; and &quot;The speaker suggests that...&quot; show control.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Precision matters</strong>
            <p className="text-slate-600">Answer in complete sentences, avoid slang, and refer directly to the spoken text.</p>
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

type RawItem = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const rawItems: RawItem[] = [
  { id: 'ls21', question: 'Which type of question usually invites a detailed answer in an interview?', options: ['Open question', 'Closed question', 'Tag question', 'Echo question'], answer: 0, explanation: 'Open questions encourage explanation, opinion, and elaboration.' },
  { id: 'ls22', question: 'What is the purpose of a probing follow-up question?', options: ['To get more detail or clarification', 'To end the interview quickly', 'To repeat the greeting', 'To avoid listening'], answer: 0, explanation: 'A probing question extends an earlier response and seeks evidence or detail.' },
  { id: 'ls23', question: 'Which phrase is a useful signpost in an oral presentation?', options: ['Firstly, let us consider...', 'Whatever, moving on...', 'You know what I mean?', 'I forgot my next point'], answer: 0, explanation: 'Signposting helps the audience follow the structure of the presentation.' },
  { id: 'ls24', question: 'Which clue most clearly suggests speaker attitude?', options: ['Tone and word choice', 'The page number', 'The colour of the desk', 'The number of listeners'], answer: 0, explanation: 'Attitude is usually revealed through how something is said and the words selected.' },
  { id: 'ls25', question: 'If a speaker uses strongly emotional words to push one side of an issue, this may show:', options: ['Bias', 'Scanning', 'Summary writing', 'Neutrality'], answer: 0, explanation: 'Loaded language often signals that the speaker is not fully neutral.' },
  { id: 'ls26', question: 'Which statement is an opinion in an interview?', options: ['This policy is the worst solution for young people.', 'The meeting started at 9 a.m.', 'Three guests spoke.', 'The hall was built in 2018.'], answer: 0, explanation: 'Calling something “the worst” is a judgement, not a verifiable fact.' },
  { id: 'ls27', question: 'Which response best fits a formal oral task?', options: ['It would appear that the interviewee is concerned about access to education.', 'I totally vibe with what she is saying.', 'That guy is just wrong, full stop.', 'Yeah, anyway, next question.'], answer: 0, explanation: 'Formal responses avoid slang and explain ideas precisely.' },
  { id: 'ls28', question: 'Why should oral responses be given in complete sentences?', options: ['They sound clearer and more academic', 'They always earn double marks', 'They remove the need for evidence', 'They make the recording shorter'], answer: 0, explanation: 'Complete sentences improve clarity, precision, and formal presentation.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const ListeningSpeakingT2 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Interviews, oral presentations, listening for attitude, and formal spoken responses"
    learnSteps={learnSteps}
    task="gr12-listening-speaking-t2"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default ListeningSpeakingT2;
