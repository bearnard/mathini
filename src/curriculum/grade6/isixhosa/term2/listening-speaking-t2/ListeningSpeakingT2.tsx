import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Talk about your daily routine and school day',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In Term 2, you practise short conversations about your <strong>daily routine</strong>, school day,
          food, and places in the community. Use time words and clear speaking to share ideas confidently.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Ekuseni</p>
            <p className="text-slate-600">morning routines before school</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Emini</p>
            <p className="text-slate-600">midday activities and lunch time</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Emva kwesikolo</p>
            <p className="text-slate-600">after-school tasks and hobbies</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Ngokuhlwa</p>
            <p className="text-slate-600">evening routines at home</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use polite requests in food and shopping conversations',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Polite speaking helps people understand and respect each other. When asking for food or shopping
          help, use friendly request forms and listen carefully to responses.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Ndicela...</p>
            <p className="text-slate-600">a polite way to ask for something</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Ndingathenga...?</p>
            <p className="text-slate-600">asking to buy an item respectfully</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Malini?</p>
            <p className="text-slate-600">asking for the price</p>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <p className="font-bold text-fuchsia-700">Enkosi</p>
            <p className="text-slate-600">showing appreciation in conversation</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Give and follow simple directions clearly',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Direction language helps you move around the community. Listen for key words, follow each step in
          order, and ask a clear question if you are unsure.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Hamba ngqo</p>
            <p className="text-slate-600">go straight ahead</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <p className="font-bold text-orange-700">Jika ngasekhohlo</p>
            <p className="text-slate-600">turn left at a landmark</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <p className="font-bold text-teal-700">Jika ngasekunene</p>
            <p className="text-slate-600">turn right when instructed</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <p className="font-bold text-yellow-700">Kufuphi / kude</p>
            <p className="text-slate-600">near or far from a place</p>
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
          Say these everyday conversation words clearly so that shopping, directions, and service talk feel natural.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Ndicela"} phonetic={"[ndi'cɛla]"} meaning={"Please / I request"} lang="xh" />
          <PronunciationPlayer word={"Nceda"} phonetic={"[ŋ'cɛda]"} meaning={"Help / Please assist"} lang="xh" />
          <PronunciationPlayer word={"Ukutya"} phonetic={"[uku'tja]"} meaning={"Food"} lang="xh" />
          <PronunciationPlayer word={"Amanzi"} phonetic={"[a'manzi]"} meaning={"Water"} lang="xh" />
          <PronunciationPlayer word={"Ivenkile"} phonetic={"[ivɛn'kile]"} meaning={"Shop / Store"} lang="xh" />
          <PronunciationPlayer word={"Indlela"} phonetic={"[in'dlɛla]"} meaning={"Way / Direction"} lang="xh" />
          <PronunciationPlayer word={"Ekhohlo"} phonetic={"[ɛ'kʰɔɬɔ]"} meaning={"Left"} lang="xh" />
          <PronunciationPlayer word={"Ekunene"} phonetic={"[ɛku'nɛːnɛ]"} meaning={"Right"} lang="xh" />
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which isiXhosa word means morning?',
    options: ['Kusasa', 'Ebusuku', 'Izolo', 'Ngoku'],
    answer: 'Kusasa',
    explanation: 'Kusasa refers to the morning part of the day.',
  },
  {
    prompt: 'Which sentence is a polite request for water?',
    options: ['Ndicela amanzi, nceda.', 'Nika amanzi ngoku!', 'Andifuni manzi!', 'Amanzi awukho!'],
    answer: 'Ndicela amanzi, nceda.',
    explanation: 'Ndicela ... nceda is a respectful way to ask for something.',
  },
  {
    prompt: 'In a shop, what does “Malini?” ask?',
    options: ['The price', 'The colour', 'The size', 'The date'],
    answer: 'The price',
    explanation: 'Malini? is used to ask how much something costs.',
  },
  {
    prompt: 'Which phrase asks politely to buy bread?',
    options: ['Ndingathenga isonka, nceda?', 'Ndinike isonka ngoku!', 'Isonka sibi kakhulu.', 'Andisayi kuthenga nto.'],
    answer: 'Ndingathenga isonka, nceda?',
    explanation: 'Ndingathenga ... nceda? is a polite shopping request form.',
  },
  {
    prompt: 'If someone says “Hamba tye kuqala,” what must you do first?',
    options: ['Walk straight first', 'Turn left immediately', 'Go back home', 'Wait without moving'],
    answer: 'Walk straight first',
    explanation: 'Hamba tye means go straight.',
  },
  {
    prompt: 'Which direction word means left?',
    options: ['Ngasekhohlo', 'Ngasekunene', 'Ngaphakathi', 'Phezulu'],
    answer: 'Ngasekhohlo',
    explanation: 'Ngasekhohlo means left, while ngasekunene means right.',
  },
  {
    prompt: '“Emva kwesikolo ndiyadlala” means the action happens...',
    options: ['after school', 'before sunrise', 'during assembly', 'at midnight'],
    answer: 'after school',
    explanation: 'Emva kwesikolo means after school.',
  },
  {
    prompt: 'Which response shows good speaking manners in a conversation?',
    options: ['Enkosi, ndiyabulela.', 'Mamela mna kuphela!', 'Hamba undiyeke!', 'Awazi nto!'],
    answer: 'Enkosi, ndiyabulela.',
    explanation: 'Thanking and speaking kindly show respectful communication.',
  },
  {
    prompt: '“Ivenkile ikufuphi nesikolo” tells you the shop is...',
    options: ['near the school', 'inside the classroom', 'far from town', 'behind the mountain'],
    answer: 'near the school',
    explanation: 'Kufuphi means near.',
  },
];

const ListeningSpeakingT2 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Daily routines, polite requests, food and shopping talk, and simple directions"
    learnSteps={learnSteps}
    task="listening-speaking-t2"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ListeningSpeakingT2;
