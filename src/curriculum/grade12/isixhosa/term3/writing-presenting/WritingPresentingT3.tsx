import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Argumentative essay: structure and stance',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">An argumentative essay takes a clear one-sided position and defends it logically.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Core features</strong><p className="text-slate-600">Strong thesis, logical body paragraphs, evidence, and refutation of opposing views.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Conclusion</strong><p className="text-slate-600">Reinforce the stance and leave the reader with a strong final thought.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Discursive essay: balanced exploration',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">A discursive essay explores more than one side of an issue before drawing a measured conclusion.</p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Introduction</strong><p className="text-slate-600">Present the topic neutrally.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">Body</strong><p className="text-slate-600">Discuss different viewpoints fairly.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Conclusion</strong><p className="text-slate-600">Acknowledge complexity, even if you add a personal view.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Formal article: format and register',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">A formal article combines accessible structure with a controlled register.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-rose-50 p-4"><strong className="text-rose-700">Format</strong><p className="text-slate-600">Use a heading, an engaging introduction, organised paragraphs, and a thoughtful close.</p></div>
          <div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Register</strong><p className="text-slate-600">Stay formal, clear, and objective while still sounding readable.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Timed writing: planning under pressure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Timed writing needs disciplined planning and strict time control.</p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">First 5 minutes</strong><p className="text-slate-600">Plan with a quick mind map.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Main writing time</strong><p className="text-slate-600">Follow the plan and watch paragraph balance.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Final 5 minutes</strong><p className="text-slate-600">Proofread for content, grammar, and format.</p></div>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Repeat these argument-writing words before developing reasons, evidence, and a strong final position.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Isincoko"} phonetic={"[isiŋ'kɔːkɔ]"} meaning={"Essay"} lang="xh" />
          <PronunciationPlayer word={"Uluvo"} phonetic={"[u'luːvɔ]"} meaning={"Opinion"} lang="xh" />
          <PronunciationPlayer word={"Isizathu"} phonetic={"[isi'zatu]"} meaning={"Reason"} lang="xh" />
          <PronunciationPlayer word={"Ubungqina"} phonetic={"[ubungqina]"} meaning={"Evidence"} lang="xh" />
          <PronunciationPlayer word={"Isiphelo"} phonetic={"[isi'pʰɛlɔ]"} meaning={"Conclusion"} lang="xh" />
        </div>
      </div>
    ),
  },
];

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'wp31', question: 'What best describes an argumentative essay?', options: ['It defends a clear one-sided position', 'It avoids taking any position at all', 'It is always written as a dialogue', 'It only lists facts without interpretation'], answer: 0, explanation: 'Argumentative writing takes a clear stance and supports it with reasons and evidence.' },
  { id: 'wp32', question: 'Why should an argumentative essay mention a counter-argument?', options: ['To refute it and strengthen the main case', 'To replace the thesis', 'To avoid giving evidence', 'To change the essay into a review'], answer: 0, explanation: 'Acknowledging and answering a counter-argument shows depth and control.' },
  { id: 'wp33', question: 'A discursive essay is different because it:', options: ['Explores different sides of an issue more evenly', 'Must always end without a conclusion', 'Uses only bullet points', 'Never uses paragraphs'], answer: 0, explanation: 'Discursive writing presents multiple perspectives before concluding.' },
  { id: 'wp34', question: 'Which opening best suits a formal article?', options: ['A clear heading with a relevant introduction', 'A formal salutation such as “Dear Sir or Madam”', 'A fairy-tale start such as “Once upon a time”', 'A casual greeting such as “Hi everyone”'], answer: 0, explanation: 'Articles usually begin with a heading and introduction, not a letter or informal greeting.' },
  { id: 'wp35', question: 'Which register suits a formal article?', options: ['Objective and controlled', 'Slang-heavy and playful', 'Rude and sarcastic', 'Random and repetitive'], answer: 0, explanation: 'Formal articles require clear, appropriate, and measured language.' },
  { id: 'wp36', question: 'What should happen in the first 5 minutes of timed writing?', options: ['Quick planning and organising ideas', 'Writing the conclusion only', 'Adding decorative drawings', 'Ignoring the topic'], answer: 0, explanation: 'Brief planning saves time later and helps structure the whole response.' },
  { id: 'wp37', question: 'Why is proofreading important at the end of a timed task?', options: ['It helps you catch grammar and content errors', 'It gives you bonus marks for neat handwriting', 'It replaces the planning stage of the task', 'It lets you rewrite the essay from the start'], answer: 0, explanation: 'Final checking improves accuracy and presentation.' },
  { id: 'wp38', question: 'Which sentence sounds like a counter-argument acknowledgement?', options: ['Some argue social media helps learners collaborate, but it needs responsible use.', 'I strongly believe that social media distracts learners in class.', 'In conclusion I believe social media should be banned in schools across the country.', 'My second paragraph explains how learners use social media.'], answer: 0, explanation: 'The sentence recognises another view before responding to it.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const WritingPresentingT3 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Argumentative or discursive essay, formal article, portfolio evidence, and exam practice"
    learnSteps={learnSteps}
    task="gr12-writing-presenting-t3"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default WritingPresentingT3;
