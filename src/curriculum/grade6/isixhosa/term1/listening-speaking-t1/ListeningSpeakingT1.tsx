import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Use greetings and introductions confidently',
    image: {
      src: '/curriculum/grade6/xho/term1/listening-speaking-t1/diagram.webp',
      alt: 'Grade 6 learners greeting each other and introducing themselves in class',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In isiXhosa SAL, we learn to greet politely and introduce ourselves. Start with a greeting, say your name,
          and respond clearly when someone asks a simple oral question.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Greetings</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">Molo</span>
              <span className="rounded-full bg-white px-3 py-1">Molweni</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Introducing yourself</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">Ndingu…</span>
              <span className="rounded-full bg-white px-3 py-1">Igama lam ngu…</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Family words</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">umama</span>
              <span className="rounded-full bg-white px-3 py-1">utata</span>
              <span className="rounded-full bg-white px-3 py-1">usapho</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Classroom language</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">Nceda</span>
              <span className="rounded-full bg-white px-3 py-1">Enkosi</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Respond to short oral prompts',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Listen carefully to short prompts about family and school. Then answer in one clear sentence using familiar
          vocabulary.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Question starters</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">Ngubani?</span>
              <span className="rounded-full bg-white px-3 py-1">Yintoni?</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">School vocabulary</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">isikolo</span>
              <span className="rounded-full bg-white px-3 py-1">iklasi</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Family vocabulary</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">ubhuti</span>
              <span className="rounded-full bg-white px-3 py-1">udade</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Clear response</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">short sentence</span>
              <span className="rounded-full bg-white px-3 py-1">polite tone</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Speak with good pronunciation and turn-taking',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Good oral work includes clear pronunciation, listening while others speak, and taking turns during pair
          dialogue activities.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Pronunciation</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">speak clearly</span>
              <span className="rounded-full bg-white px-3 py-1">steady pace</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Listening</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">focus</span>
              <span className="rounded-full bg-white px-3 py-1">respond correctly</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Turn-taking</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">wait your turn</span>
              <span className="rounded-full bg-white px-3 py-1">respect others</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Oral recall</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">remember key words</span>
              <span className="rounded-full bg-white px-3 py-1">answer prompt</span>
            </div>
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
          Practice these introduction and classroom words aloud before completing the lesson tasks.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Molo"} phonetic={"[mɔ:lɔ]"} meaning={"Hello (to one person)"} lang="xh" />
          <PronunciationPlayer word={"Molweni"} phonetic={"[mɔl'wɛni]"} meaning={"Hello (to more than one person)"} lang="xh" />
          <PronunciationPlayer word={"Unjani?"} phonetic={"[un'dʒani]"} meaning={"How are you?"} lang="xh" />
          <PronunciationPlayer word={"Ndingu..."} phonetic={"[ndiŋ'gu]"} meaning={"I am ... / My name is ..."} lang="xh" />
          <PronunciationPlayer word={"Isikolo"} phonetic={"[isi'kɔlɔ]"} meaning={"School"} lang="xh" />
          <PronunciationPlayer word={"Ithishala"} phonetic={"[iti'ʃala]"} meaning={"Teacher"} lang="xh" />
          <PronunciationPlayer word={"Enkosi"} phonetic={"[ɛŋ'kɔsi]"} meaning={"Thank you"} lang="xh" />
          <PronunciationPlayer word={"Uxolo"} phonetic={"[u'xɔlɔ]"} meaning={"Sorry / Peace"} lang="xh" />
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which isiXhosa greeting is polite when speaking to more than one person?',
    options: ['Molweni', 'Ndingu', 'Enkosi kakhulu kakhulu', 'Iklasi'],
    answer: 'Molweni',
    explanation: 'Molweni is a common polite greeting for more than one person.',
  },
  {
    prompt: 'Which phrase is used to introduce yourself?',
    options: ['Ndingu…', 'Molo titshala', 'Nceda uvule incwadi', 'Sala kakuhle'],
    answer: 'Ndingu…',
    explanation: 'Ndingu… means “I am …” and is used for self-introduction.',
  },
  {
    prompt: 'Which word means family?',
    options: ['Usapho', 'Isikolo', 'Iklasi', 'Incwadi'],
    answer: 'Usapho',
    explanation: 'Usapho is the isiXhosa word for family.',
  },
  {
    prompt: 'Your teacher says, “Molo, bana.” What is a suitable response?',
    options: ['Molo, titshala.', 'Andazi.', 'Hayi, andifuni.', 'Ngubani igama lam?'],
    answer: 'Molo, titshala.',
    explanation: 'A polite greeting response is expected in classroom interaction.',
  },
  {
    prompt: 'Which word is linked to school language?',
    options: ['Isikolo', 'Udade', 'Umama', 'Usapho'],
    answer: 'Isikolo',
    explanation: 'Isikolo means school.',
  },
  {
    prompt: 'If you do not hear a question clearly, what should you do?',
    options: ['Ask politely for repetition', 'Ignore the speaker', 'Talk over others', 'Leave your seat immediately'],
    answer: 'Ask politely for repetition',
    explanation: 'Polite clarification helps you respond correctly.',
  },
  {
    prompt: 'Which action shows good turn-taking in a dialogue?',
    options: ['Wait, then answer when it is your turn', 'Interrupt every sentence', 'Speak without listening', 'Change the topic each time'],
    answer: 'Wait, then answer when it is your turn',
    explanation: 'Turn-taking means listening and responding at the right time.',
  },
  {
    prompt: 'Which is a short oral response about school?',
    options: ['Ndifunda eklasini.', 'Molweni ndingu utata wam no mama wam kunye no dade wam wonke umntu.', 'Andinanto yokuthetha.', 'Nanku umthi omkhulu ngasemlanjeni.'],
    answer: 'Ndifunda eklasini.',
    explanation: 'A short clear sentence is best for oral prompts.',
  },
  {
    prompt: 'What is most important during pronunciation checks?',
    options: ['Speak clearly and at a steady pace', 'Speak as fast as possible', 'Whisper all answers', 'Skip unfamiliar words'],
    answer: 'Speak clearly and at a steady pace',
    explanation: 'Clear pronunciation helps listeners understand you.',
  },
];

const ListeningSpeakingT1 = () => (
  <CapsSubjectTopic
    title="Listening and Speaking"
    subtitle="Greetings, introductions, and simple oral responses"
    learnSteps={learnSteps}
    task="listening-speaking-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ListeningSpeakingT1;
