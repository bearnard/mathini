import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Debate — structure, roles, and argumentation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>formal debate</strong> is a structured argument between two opposing teams on a stated topic (motion).
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Proposition (For)</strong>
            <p className="text-slate-600">Supports the motion. Opens the debate with the strongest argument.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Opposition (Against)</strong>
            <p className="text-slate-600">Challenges the motion. Rebuts the proposition's claims with evidence.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Chairperson</strong>
            <p className="text-slate-600">Manages time, introduces speakers, and maintains order.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">A rebuttal directly challenges a specific argument made by the opposing team — it is not just a new point.</p>
      </div>
    ),
  },
  {
    title: 'Prepared speech for civic and literary topics',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grade 11 speeches often respond to <strong>social issues</strong> or <strong>literary themes</strong>. Your speech must show sustained, evidence-based argument.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-800 mb-2">Keys to a strong Grade 11 speech:</p>
          <ul className="list-disc ml-4 text-slate-600 space-y-1">
            <li>Clear position stated in the introduction</li>
            <li>Two or three well-developed arguments with evidence</li>
            <li>Acknowledgement of the opposing view (and response to it)</li>
            <li>Persuasive conclusion that reinforces your stance</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Seminar discussion — academic register and facilitation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>seminar</strong> is a focused, academic group discussion where participants share research or informed views on a topic.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Academic register features:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Formal vocabulary and complete sentences</li>
              <li>Hedging language ("It could be argued that…")</li>
              <li>Citing evidence or authors to support claims</li>
            </ul>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Facilitation skills:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Invite quieter participants to contribute</li>
              <li>Summarise points to keep discussion on track</li>
              <li>Steer conversation away from irrelevant tangents</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Oral response to social and literary issues',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When responding orally to an issue, use a structured approach to demonstrate critical thinking:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">For social issues:</strong>
            <p className="text-slate-600">State the problem → explain its causes → describe its impact → propose a solution.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">For literary issues:</strong>
            <p className="text-slate-600">State your interpretation → quote the text → explain the significance → connect to the broader theme.</p>
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

const bank: CapsItem[] = [
  {
    prompt: 'In a formal debate, the "proposition" team is the side that:',
    options: [
      'Supports and argues in favour of the motion',
      'Argues against the motion',
      'Manages time and introduces speakers',
      'Decides who wins the debate',
    ],
    answer: 'Supports and argues in favour of the motion',
    explanation: 'The proposition (affirmative side) opens by presenting arguments for the motion; the opposition challenges them.',
  },
  {
    prompt: 'What is a "rebuttal" in a debate?',
    options: [
      'A direct challenge to a specific argument made by the opposing team',
      'The opening statement of the debate',
      'A summary of all your own arguments',
      'The vote at the end of the debate',
    ],
    answer: 'A direct challenge to a specific argument made by the opposing team',
    explanation: 'A rebuttal dismantles the opponent\'s specific claim with counter-evidence — it is distinct from presenting new points.',
  },
  {
    prompt: 'Which feature is essential in a Grade 11 prepared speech on a social issue?',
    options: [
      'A clear position supported by two or three well-developed arguments',
      'Personal anecdotes only, with no factual evidence',
      'A summary of the opposing view without any response',
      'Reading directly from notes without any eye contact',
    ],
    answer: 'A clear position supported by two or three well-developed arguments',
    explanation: 'Grade 11 speeches require a sustained, evidence-based argument — not just opinions.',
  },
  {
    prompt: 'Which language feature characterises academic register in a seminar?',
    options: [
      'Formal vocabulary, complete sentences, and hedging language',
      'Slang and contractions',
      'Short, incomplete phrases',
      'Speaking only in isiXhosa idioms',
    ],
    answer: 'Formal vocabulary, complete sentences, and hedging language',
    explanation: 'Academic register uses precise language, complete grammatical structures, and hedging to convey appropriately tentative claims.',
  },
  {
    prompt: 'What does "hedging language" do in academic discussion?',
    options: [
      'Expresses a claim with appropriate tentativeness (e.g. "It could be argued that…")',
      'Makes a claim sound more aggressive',
      'Contradicts the main argument',
      'Avoids using any evidence',
    ],
    answer: 'Expresses a claim with appropriate tentativeness (e.g. "It could be argued that…")',
    explanation: 'Hedging acknowledges uncertainty or the possibility of other views — it is a hallmark of academic honesty.',
  },
  {
    prompt: 'When giving an oral response to a literary text, which step should come AFTER stating your interpretation?',
    options: [
      'Quote directly from the text to support your interpretation',
      'Summarise the entire plot',
      'Describe the setting in detail',
      'Mention the author\'s biography',
    ],
    answer: 'Quote directly from the text to support your interpretation',
    explanation: 'The P–E–E approach requires: Point (interpretation) → Evidence (quotation) → Explanation (significance).',
  },
  {
    prompt: 'Which facilitation skill helps keep a seminar discussion on track?',
    options: [
      'Summarising points periodically to refocus the group',
      'Allowing only one person to speak for the entire session',
      'Changing the topic whenever it becomes challenging',
      'Ending the discussion before everyone has contributed',
    ],
    answer: 'Summarising points periodically to refocus the group',
    explanation: 'Periodic summaries consolidate progress and signal to participants what ground has been covered and where to go next.',
  },
  {
    prompt: 'In a debate, which team typically speaks FIRST?',
    options: [
      'The proposition (for the motion)',
      'The opposition (against the motion)',
      'The chairperson',
      'The floor (audience)',
    ],
    answer: 'The proposition (for the motion)',
    explanation: 'Convention places the proposition first so they can present the case that the opposition then challenges.',
  },
  {
    prompt: 'What structured approach is recommended for an oral response to a social issue?',
    options: [
      'State the problem → explain causes → describe impact → propose a solution',
      'Read a poem → sing a song → leave the room',
      'List random facts → apologise → sit down',
      'Agree with everyone → summarise → change the topic',
    ],
    answer: 'State the problem → explain causes → describe impact → propose a solution',
    explanation: 'This four-part structure ensures a logical, complete oral response that demonstrates analytical thinking.',
  },
];

const ListeningSpeakingT3 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Debate, prepared speech, seminar discussion, and oral response to issues"
    learnSteps={learnSteps}
    task="gr11-xho-listening-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT3;
