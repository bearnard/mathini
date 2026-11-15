import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Final oral SBA: evidence and self-assessment',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Final oral preparation should be guided by the rubric and by evidence from your previous tasks.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Use the mark sheet</strong><p className="text-slate-600">Check criteria such as content, pronunciation, fluency, and register.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Review evidence</strong><p className="text-slate-600">Listen to recordings, read feedback, and note what improved or still needs work.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Listening comprehension revision: recall strategies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Revision listening tasks become easier when information is organised mentally.</p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Chunking</strong><p className="text-slate-600">Group details into smaller units.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">Signal words</strong><p className="text-slate-600">Listen for firstly, however, finally, and similar markers.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Past papers</strong><p className="text-slate-600">Practise with exam-style recordings and questions.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Spoken fluency: reducing hesitation and error',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Fluency improves when you pause strategically and recover from mistakes calmly.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-rose-50 p-4"><strong className="text-rose-700">Formulaic phrases</strong><p className="text-slate-600">Use phrases like &quot;Ndiyathetha malunga ne...&quot; to begin smoothly.</p></div>
          <div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Self-correction</strong><p className="text-slate-600">Correct the error briefly and continue, rather than stopping completely.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Register control in final oral tasks',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Final oral tasks should sound formal, accurate, and appropriate to an exam setting.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Avoid</strong><p className="text-slate-600">Slang, code-switching, and unfinished sentences in assessed responses.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Aim for</strong><p className="text-slate-600">Controlled vocabulary, clear sentence structure, and accurate pronunciation.</p></div>
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

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'ls41', question: 'What is the best use of an oral assessment rubric?', options: ['To check your work against the criteria', 'To replace preparation for the oral task', 'To learn the marks the teacher gave others', 'To decide the topic of the oral task'], answer: 0, explanation: 'A rubric helps learners focus on the specific skills assessed.' },
  { id: 'ls42', question: 'Why should you review previous recordings or notes?', options: ['To spot patterns in feedback and improve', 'To compare your marks with those of classmates', 'To avoid hearing your own mistakes again', 'To replace live practice with silent reading'], answer: 0, explanation: 'Past evidence helps you improve before the final SBA task.' },
  { id: 'ls43', question: 'What does chunking help you do in listening comprehension?', options: ['Remember information in smaller parts', 'Ignore the signal words and focus on names', 'Write down each word the speaker says', 'Speak louder to be heard by the speaker'], answer: 0, explanation: 'Chunking groups information so it is easier to store and recall.' },
  { id: 'ls44', question: 'Which words often signal structure in a listening passage?', options: ['Firstly, however, finally', 'Wow, cool, nice', 'Book, desk, shoe', 'Laugh, jump, sing'], answer: 0, explanation: 'Signal words show sequence and contrast, helping listeners track the passage.' },
  { id: 'ls45', question: 'What is a useful isiXhosa starter phrase to gain fluency?', options: ['Ndiyathetha malunga ne...', 'Yo, listen up...', 'Whatever happens...', 'No comment.'], answer: 0, explanation: 'Formulaic academic phrases help you begin confidently and stay on topic.' },
  { id: 'ls46', question: 'Which behaviour best shows spoken fluency?', options: ['Pausing between ideas rather than mid-phrase', 'Restarting a sentence whenever you make an error', 'Using slang words to fill the silent gaps', 'Speaking quickly so there are no pauses'], answer: 0, explanation: 'Natural pauses support fluency and clarity better than hesitant breaks.' },
  { id: 'ls47', question: 'What should you avoid in a final oral task?', options: ['Slang and unnecessary code-switching', 'Clear pronunciation of difficult words', 'Complete sentences with correct grammar', 'Formal vocabulary for the topic'], answer: 0, explanation: 'Assessed oral tasks require appropriate formal register.' },
  { id: 'ls48', question: 'Why is register control important in the oral exam?', options: ['It shows your language suits the context', 'It makes up for weak content in the answer', 'It gives you extra time to speak', 'It decides which topic you must discuss'], answer: 0, explanation: 'Matching your register to the assessment context is part of effective communication.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const ListeningSpeakingT4 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Final oral evidence, revision, listening recall, fluency, and register control"
    learnSteps={learnSteps}
    task="gr12-listening-speaking-t4"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default ListeningSpeakingT4;
