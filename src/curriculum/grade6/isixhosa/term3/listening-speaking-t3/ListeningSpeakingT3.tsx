import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Listening and speaking about familiar Term 3 themes',
    image: {
      src: '/curriculum/grade6/xho/term3/listening-speaking-t3/diagram.webp',
      alt: 'learners discussing weather, transport, and animals in an isiXhosa SAL class',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In Term 3, learners listen and speak about <strong>weather</strong>, <strong>transport</strong>,
          <strong> animals</strong>, and <strong>culture</strong>. They practise clear pronunciation and short
          supported responses.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Imozulu (Weather)</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">amaxesha onyaka</span>
              <span className="rounded-full bg-white px-3 py-1">inkcazo emfutshane</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Ezothutho (Transport)</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">ibhasi</span>
              <span className="rounded-full bg-white px-3 py-1">itaxi</span>
              <span className="rounded-full bg-white px-3 py-1">ukhuseleko</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Izilwanyana (Animals)</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">inkcazelo</span>
              <span className="rounded-full bg-white px-3 py-1">indawo yokuhlala</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Inkcubeko (Culture)</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">amasiko</span>
              <span className="rounded-full bg-white px-3 py-1">intsomi</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Retelling stories in clear sequence',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          When retelling a folktale, keep the order clear: beginning, middle, and end. Mention who was in the
          story, where events happened, and what changed.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Beginning</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">introduce characters</span>
              <span className="rounded-full bg-white px-3 py-1">set the place</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Middle</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">problem</span>
              <span className="rounded-full bg-white px-3 py-1">important events</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">End</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">solution</span>
              <span className="rounded-full bg-white px-3 py-1">lesson</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Sequence words</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">first</span>
              <span className="rounded-full bg-white px-3 py-1">then</span>
              <span className="rounded-full bg-white px-3 py-1">finally</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Giving supported opinions respectfully',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Good speaking includes opinions with reasons. Good listening means waiting your turn, following
          instructions, and responding to what others said.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Opinion</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">I think...</span>
              <span className="rounded-full bg-white px-3 py-1">In my view...</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Reason</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">because</span>
              <span className="rounded-full bg-white px-3 py-1">for example</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Listening task</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">follow order</span>
              <span className="rounded-full bg-white px-3 py-1">remember details</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Respectful speaking</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">take turns</span>
              <span className="rounded-full bg-white px-3 py-1">clear voice</span>
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
          Use these oral-storytelling and discussion words when retelling events or giving reasons for an opinion.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Balisa"} phonetic={"[ba'liːsa]"} meaning={"Retell / narrate"} lang="xh" />
          <PronunciationPlayer word={"Uluvo"} phonetic={"[u'luːvɔ]"} meaning={"Opinion"} lang="xh" />
          <PronunciationPlayer word={"Kutheni?"} phonetic={"[ku'tʰɛni]"} meaning={"Why?"} lang="xh" />
          <PronunciationPlayer word={"Ngoko"} phonetic={"[ŋɔ'kɔ]"} meaning={"So / therefore"} lang="xh" />
          <PronunciationPlayer word={"Intsomi"} phonetic={"[in'tsɔmi]"} meaning={"Folktale"} lang="xh" />
          <PronunciationPlayer word={"Umxholo"} phonetic={"[um'xɔlɔ]"} meaning={"Theme / main idea"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the best way to begin retelling a folktale?',
    options: [
      'Introduce who is in the story and where it happens',
      'Give only the final sentence',
      'List random words from the story',
      'Skip the setting and start with the moral',
    ],
    answer: 'Introduce who is in the story and where it happens',
    explanation: 'A clear retell starts by naming characters and setting before events unfold.',
  },
  {
    prompt: 'Which phrase shows an opinion in a class discussion?',
    options: ['In my view, summer is better for travel', 'The bus leaves at 7:00', 'There are four seasons', 'The story has three characters'],
    answer: 'In my view, summer is better for travel',
    explanation: '“In my view” signals a personal opinion, not a checkable fact.',
  },
  {
    prompt: 'A listening task says: first draw a sun, then a cloud. What should you do?',
    options: [
      'Follow the instruction order exactly',
      'Draw the cloud first and ignore the rest',
      'Ask a different question and stop working',
      'Draw anything because order does not matter',
    ],
    answer: 'Follow the instruction order exactly',
    explanation: 'Listening sequence tasks assess whether you can follow steps in order.',
  },
  {
    prompt: 'Which response gives a supported opinion about transport?',
    options: [
      'I prefer the train because it is reliable for long trips',
      'Train',
      'All transport is exactly the same',
      'I have no reason and no choice',
    ],
    answer: 'I prefer the train because it is reliable for long trips',
    explanation: 'A supported opinion includes both a viewpoint and a reason.',
  },
  {
    prompt: 'What helps your audience understand your retell?',
    options: ['Using sequence words like first, then, finally', 'Speaking as fast as possible', 'Changing topic every sentence', 'Skipping the ending'],
    answer: 'Using sequence words like first, then, finally',
    explanation: 'Sequence words guide listeners through events clearly.',
  },
  {
    prompt: 'Which classroom behaviour shows respectful listening?',
    options: ['Waiting for your turn before speaking', 'Interrupting after every sentence', 'Talking while another learner presents', 'Ignoring the speaker completely'],
    answer: 'Waiting for your turn before speaking',
    explanation: 'Respectful listening includes turn-taking and attention to the speaker.',
  },
  {
    prompt: 'If a speaker says, “It is windy and cold today,” which topic is being discussed?',
    options: ['Weather', 'Mathematics', 'Food recipes', 'Computer coding'],
    answer: 'Weather',
    explanation: 'Words like windy and cold are weather descriptions.',
  },
  {
    prompt: 'In a story retell rubric, what is usually assessed?',
    options: ['Sequence, clarity, and key details', 'Only handwriting style', 'Only how long the learner stands', 'The colour of the classroom wall'],
    answer: 'Sequence, clarity, and key details',
    explanation: 'Retelling focuses on correct order, understandable delivery, and relevant details.',
  },
  {
    prompt: 'Which sentence best links an opinion to a reason?',
    options: [
      'I enjoy stories about animals because they teach a lesson',
      'I enjoy stories about animals maybe',
      'Stories are animals lesson because',
      'Animals stories because and because',
    ],
    answer: 'I enjoy stories about animals because they teach a lesson',
    explanation: 'It clearly states both a personal opinion and a sensible reason.',
  },
];

const ListeningSpeakingT3 = () => (
  <CapsSubjectTopic
    title="Listening and Speaking"
    subtitle="Retelling stories, discussing familiar themes, and giving supported opinions"
    learnSteps={learnSteps}
    task="listening-speaking-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ListeningSpeakingT3;
