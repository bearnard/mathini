import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Prepared speeches — structure and purpose',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>prepared speech</strong> requires planning. Every effective speech has three clear sections:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Introduction (Intshayelelo)</strong>
            <p className="text-slate-600">Greet the audience, state your topic clearly, and capture attention.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Body (Umzimba)</strong>
            <p className="text-slate-600">Present 2–3 main points with supporting examples or evidence.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Conclusion (Isiphetho)</strong>
            <p className="text-slate-600">Summarise your argument and end with a memorable closing statement.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Practise aloud, maintain eye contact, and speak at a steady pace.</p>
      </div>
    ),
  },
  {
    title: 'Critical discussions — engaging with different views',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In a <strong>critical discussion</strong> you listen carefully, analyse arguments, and respond with evidence.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Do:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Wait for your turn to speak</li>
              <li>Support your view with reasons</li>
              <li>Acknowledge strong points from others</li>
              <li>Use formal, respectful language</li>
            </ul>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Avoid:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Interrupting the speaker</li>
              <li>Making personal attacks</li>
              <li>Stating opinions without reasons</li>
              <li>Dismissing other views without argument</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Listening comprehension — strategies for detail and inference',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective listening involves <strong>active engagement</strong> before, during, and after hearing a text.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Before listening</strong>
            <p className="text-slate-600">Read the questions so you know what to listen for.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">While listening</strong>
            <p className="text-slate-600">Note key words, names, numbers, and main ideas.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">After listening</strong>
            <p className="text-slate-600">Check your notes against the questions; infer from context where needed.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Oral response to literature — using evidence',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          When responding to a literary text orally, you must <strong>link your point to specific evidence</strong> from the text.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-800">P–E–E structure:</p>
          <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
            <li><strong>Point:</strong> State your argument clearly.</li>
            <li><strong>Evidence:</strong> Quote or paraphrase directly from the text.</li>
            <li><strong>Explanation:</strong> Explain how the evidence supports your point.</li>
          </ul>
        </div>
        <p className="text-sm text-slate-500 mt-2">
          Example: "The character is brave (Point) — 'Akoyiki nto' (Evidence) — showing he acts without fear even in danger (Explanation)."
        </p>
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
    prompt: 'In which order should the three parts of a prepared speech appear?',
    options: [
      'Introduction, body, conclusion',
      'Conclusion, body, introduction',
      'Body, introduction, conclusion',
      'Introduction, conclusion, body',
    ],
    answer: 'Introduction, body, conclusion',
    explanation: 'A well-structured speech always moves from greeting/context (introduction) through main ideas (body) to a summary and closing (conclusion).',
  },
  {
    prompt: 'What is the main purpose of the introduction (intshayelelo) of a speech?',
    options: [
      'Greet the audience and state the topic clearly',
      'Summarise all the main points',
      'Present detailed evidence',
      'End with a memorable statement',
    ],
    answer: 'Greet the audience and state the topic clearly',
    explanation: 'The introduction establishes context, captures attention, and signals the direction of the speech.',
  },
  {
    prompt: 'During a critical discussion, which behaviour is most appropriate?',
    options: [
      'Wait for your turn and support views with reasons',
      'Interrupt as soon as you disagree',
      'State your opinion without any evidence',
      'Ignore points made by other speakers',
    ],
    answer: 'Wait for your turn and support views with reasons',
    explanation: 'Respectful turn-taking and evidence-based arguments are hallmarks of a critical discussion.',
  },
  {
    prompt: 'Which listening strategy should you use BEFORE hearing a passage?',
    options: [
      'Read the questions so you know what to listen for',
      'Write a full essay about what you expect',
      'Close your eyes and relax',
      'Discuss the topic with a friend',
    ],
    answer: 'Read the questions so you know what to listen for',
    explanation: 'Pre-reading the questions focuses your attention on the information you need to identify while listening.',
  },
  {
    prompt: 'What does "inference" mean in listening comprehension?',
    options: [
      'Deducing meaning that is not directly stated, using context clues',
      'Writing down every single word spoken',
      'Answering only factual questions',
      'Asking the speaker to repeat themselves',
    ],
    answer: 'Deducing meaning that is not directly stated, using context clues',
    explanation: 'Inference means using what IS said to work out what is implied — a higher-order listening skill assessed in CAPS.',
  },
  {
    prompt: 'The P–E–E structure in an oral response stands for:',
    options: [
      'Point, Evidence, Explanation',
      'Paragraph, Example, Edit',
      'Purpose, Emotion, Effect',
      'Present, Engage, Express',
    ],
    answer: 'Point, Evidence, Explanation',
    explanation: 'P–E–E guides you to state a claim, support it with textual evidence, and then explain the connection.',
  },
  {
    prompt: 'Which delivery feature is MOST important when presenting a prepared speech?',
    options: [
      'Maintaining eye contact with the audience',
      'Reading every word directly from notes',
      'Speaking as quickly as possible',
      'Using the most difficult vocabulary available',
    ],
    answer: 'Maintaining eye contact with the audience',
    explanation: 'Eye contact builds audience trust and shows confidence; it is a key criterion on oral rubrics.',
  },
  {
    prompt: 'When listening for attitude in a spoken text, what should you pay attention to?',
    options: [
      'Tone of voice, word choice, and emphasis',
      'Only the facts mentioned',
      'Background noise',
      'The length of each sentence',
    ],
    answer: 'Tone of voice, word choice, and emphasis',
    explanation: 'Attitude is conveyed through how something is said (tone, stress) and which words the speaker chooses.',
  },
  {
    prompt: 'How many main points should a well-structured speech body (umzimba) typically contain?',
    options: [
      '2–3 well-developed points with supporting examples',
      'As many points as possible, with no limit',
      'Exactly one very long point',
      'No points — only questions for the audience',
    ],
    answer: '2–3 well-developed points with supporting examples',
    explanation: 'Focusing on 2–3 developed points prevents the speech from becoming scattered and keeps the audience engaged.',
  },
];

const ListeningSpeakingT1 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Prepared speeches, critical discussions, listening comprehension, and oral response to literature"
    learnSteps={learnSteps}
    task="gr11-xho-listening-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT1;
