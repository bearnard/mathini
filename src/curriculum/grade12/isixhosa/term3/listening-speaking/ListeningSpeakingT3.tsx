import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/xho/term3/listening-speaking/diagram.webp", alt: "Listening & Speaking" },
    title: 'Debate structure and roles',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Formal debate has defined roles and a clear argument sequence.</p>
        <div className="grid gap-3 text-left md:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Proposition</strong><p className="text-slate-600">Supports the motion.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Opposition</strong><p className="text-slate-600">Challenges the motion.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Chairperson</strong><p className="text-slate-600">Guides procedure and turn-taking.</p></div>
          <div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Timekeeper</strong><p className="text-slate-600">Monitors speaking time.</p></div>
        </div>
        <p className="text-slate-600">Typical stages: opening statement, rebuttal, floor contribution, and summary.</p>
      </div>
    ),
  },
  {
    title: 'Persuasive language in debate',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Debaters persuade by combining logic, evidence, and carefully chosen language.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Useful techniques</strong>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-slate-600">
              <li>Rhetorical questions</li>
              <li>Repetition for emphasis</li>
              <li>Statistics and examples</li>
              <li>Anticipating the counter-argument</li>
            </ul>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Formal language</strong>
            <p className="text-slate-600">Say, &quot;I respectfully disagree because...&quot; instead of attacking the speaker personally.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Seminar discussion: sustained argument',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">In seminar discussion, you must keep linking your ideas back to the topic.</p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Reasoned position</strong><p className="text-slate-600">State a claim and defend it with reasons.</p></div>
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Build on others</strong><p className="text-slate-600">Refer to earlier contributions instead of repeating points.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Academic register</strong><p className="text-slate-600">Use formal vocabulary and complete sentences.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Oral exam preparation: fluency and accuracy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Oral exams reward fluency, pronunciation, content control, and confidence.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Preparation habits</strong><p className="text-slate-600">Practise with a partner, time yourself, and use a self-assessment rubric.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Accuracy habits</strong><p className="text-slate-600">Pronounce isiXhosa words carefully, pause naturally, and reduce fillers.</p></div>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Repeat these higher-order discussion words when preparing for debate, seminar, and panel speaking.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Ingxoxo-mpikiswano"} phonetic={"[iŋ'xɔxɔ mpi'kiswano]"} meaning={"Debate"} lang="xh" />
          <PronunciationPlayer word={"Intetho"} phonetic={"[in'tɛːtʰɔ]"} meaning={"Speech"} lang="xh" />
          <PronunciationPlayer word={"Uluvo"} phonetic={"[u'luːvɔ]"} meaning={"Opinion"} lang="xh" />
          <PronunciationPlayer word={"Isizathu"} phonetic={"[isi'zatu]"} meaning={"Reason"} lang="xh" />
          <PronunciationPlayer word={"Phendula"} phonetic={"[pʰɛn'dula]"} meaning={"Respond / answer"} lang="xh" />
          <PronunciationPlayer word={"Ingxoxo"} phonetic={"[iŋ'xɔxɔ]"} meaning={"Discussion"} lang="xh" />
        </div>
      </div>
    ),
  },
];

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'ls31', question: 'In a debate, the proposition team must:', options: ['Support the motion', 'Attack the chairperson', 'Ignore time limits', 'Summarise the opposition first'], answer: 0, explanation: 'The proposition argues in favour of the motion.' },
  { id: 'ls32', question: 'What is the role of the chairperson?', options: ['To manage procedure and turn-taking', 'To give every speech', 'To judge spelling', 'To replace the audience'], answer: 0, explanation: 'The chairperson guides the flow of the debate and keeps order.' },
  { id: 'ls33', question: 'Which phrase is most suitable in a formal debate?', options: ['I respectfully disagree because the evidence suggests another view.', 'You are clueless and wrong.', 'That point is trash.', 'I do not need reasons.'], answer: 0, explanation: 'Formal debate language is respectful and evidence-based.' },
  { id: 'ls34', question: 'Which technique is persuasive?', options: ['Using statistics to support a claim', 'Interrupting constantly', 'Repeating insults', 'Ignoring the topic'], answer: 0, explanation: 'Statistics and evidence strengthen the credibility of an argument.' },
  { id: 'ls35', question: 'What does a rebuttal do?', options: ['Responds directly to the other side’s argument', 'Introduces an unrelated topic', 'Repeats the greeting', 'Ends the debate before the summary'], answer: 0, explanation: 'A rebuttal answers and challenges the points raised by the opposing team.' },
  { id: 'ls36', question: 'In a seminar discussion, what should you do when another learner gives a useful point?', options: ['Build on it and link it to your own argument', 'Pretend you did not hear it', 'Repeat it word for word with no comment', 'Change the subject immediately'], answer: 0, explanation: 'Seminars value connected, sustained discussion rather than isolated remarks.' },
  { id: 'ls37', question: 'Which habit best improves oral exam fluency?', options: ['Practising aloud with a partner and timing yourself', 'Memorising only one sentence', 'Speaking as quickly as possible', 'Avoiding all feedback'], answer: 0, explanation: 'Regular spoken practice improves pacing, confidence, and accuracy.' },
  { id: 'ls38', question: 'Why are natural pauses useful in oral exams?', options: ['They help you stay accurate without sounding hesitant', 'They reduce the need for preparation', 'They replace pronunciation', 'They make the answer shorter automatically'], answer: 0, explanation: 'Strategic pauses support fluency and clarity when responding under pressure.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const ListeningSpeakingT3 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Debate, prepared speech, seminar discussion, and oral exam preparation"
    learnSteps={learnSteps}
    task="gr12-listening-speaking-t3"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default ListeningSpeakingT3;
