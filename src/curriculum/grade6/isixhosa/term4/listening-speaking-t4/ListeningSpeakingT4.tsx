import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Talk about health, feelings and celebrations',
    image: {
      src: '/curriculum/grade6/xho/term4/listening-speaking-t4/diagram.webp',
      alt: 'learners discussing health habits, emotions, and a community celebration',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          In Term 4, learners practise <strong>everyday speaking</strong> about health, feelings, and celebrations.
          Use short isiXhosa sentences, clear voice, and respectful listening.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Health</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">ukutya okusempilweni</span>
              <span className="rounded-full bg-white px-3 py-1">amanzi</span>
              <span className="rounded-full bg-white px-3 py-1">ukuzilolonga</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Feelings</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">ndonwabile</span>
              <span className="rounded-full bg-white px-3 py-1">ndidiniwe</span>
              <span className="rounded-full bg-white px-3 py-1">ndixhalabile</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Celebrations</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">umnyhadala</span>
              <span className="rounded-full bg-white px-3 py-1">usuku lokuzalwa</span>
              <span className="rounded-full bg-white px-3 py-1">inkcubeko</span>
            </div>
          </div>
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Listening</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">mamela kakuhle</span>
              <span className="rounded-full bg-white px-3 py-1">phendula ngobubele</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use revision dialogues',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Revision dialogues help learners practise question-and-answer speaking. Ask simple questions, answer in full,
          and stay on topic.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Ask</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">Ungubani?</span>
              <span className="rounded-full bg-white px-3 py-1">Uhlala phi?</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Answer</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">Ndingu...</span>
              <span className="rounded-full bg-white px-3 py-1">Ndihlala e...</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Clarify</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">Nceda uphinde</span>
              <span className="rounded-full bg-white px-3 py-1">Andiqondanga</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Respect</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">jonga umntu</span>
              <span className="rounded-full bg-white px-3 py-1">ungalekisi</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Give a short prepared talk',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          A strong short talk has a beginning, two or three clear points, and a simple ending. Speak slowly and use
          familiar vocabulary.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Opening</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">isihloko</span>
              <span className="rounded-full bg-white px-3 py-1">injongo</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Main points</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">iingcinga eziphambili</span>
              <span className="rounded-full bg-white px-3 py-1">imizekelo</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Voice</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">thetha ngokucacileyo</span>
              <span className="rounded-full bg-white px-3 py-1">isantya esifanelekileyo</span>
            </div>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <strong className="text-yellow-800">Ending</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-yellow-700">
              <span className="rounded-full bg-white px-3 py-1">isishwankathelo</span>
              <span className="rounded-full bg-white px-3 py-1">enkosi</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which response best shows a feeling in isiXhosa?',
    options: ['Ndonwabile namhlanje.', 'Itafile iphantsi.', 'Le yipensile yam.', 'Incwadi ibomvu.'],
    answer: 'Ndonwabile namhlanje.',
    explanation: '“Ndonwabile” means “I am happy,” so it clearly expresses a feeling.',
  },
  {
    prompt: 'What is a good listening behaviour during a dialogue?',
    options: ['Wait for your turn before speaking', 'Interrupt after every sentence', 'Look away and ignore the speaker', 'Shout your answer immediately'],
    answer: 'Wait for your turn before speaking',
    explanation: 'Respectful listening includes paying attention and waiting for your turn.',
  },
  {
    prompt: 'Which question is suitable for a revision conversation?',
    options: ['Uhlala phi?', 'Yintoni umbala wesibhakabhaka ebusuku xa kungekho nyanga?', 'Ngubani owakha isikolo sethu kwiminyaka eyi-100 eyadlulayo?', 'Kutheni iintaba zinemozulu etshintshayo ngequbuliso?'],
    answer: 'Uhlala phi?',
    explanation: '“Uhlala phi?” is a familiar, simple question for SAL speaking practice.',
  },
  {
    prompt: 'Which sentence best starts a short prepared oral?',
    options: ['Namhlanje ndiza kuthetha ngempilo entle.', 'Andikhumbuli nto, mhlawumbi ndiza kuhlala phantsi.', 'Masithethe nantoni na engenasihloko.', 'Andifuni kubulisa mntu.'],
    answer: 'Namhlanje ndiza kuthetha ngempilo entle.',
    explanation: 'A clear opening states the topic so listeners know what the talk is about.',
  },
  {
    prompt: 'What helps a speaker during a short presentation?',
    options: ['Using key points in a clear order', 'Speaking as fast as possible', 'Skipping all preparation', 'Changing topic every sentence'],
    answer: 'Using key points in a clear order',
    explanation: 'Ordered key points make the oral easy to follow.',
  },
  {
    prompt: 'If you do not understand a spoken sentence, what is the best response?',
    options: ['Nceda uphinde.', 'Andinamdla.', 'Yeka ukuthetha ngoku.', 'Ndiyahamba ngoku.'],
    answer: 'Nceda uphinde.',
    explanation: '“Nceda uphinde” politely asks the speaker to repeat.',
  },
  {
    prompt: 'Which topic fits Term 4 Listening & Speaking?',
    options: ['Talking about celebrations in the community', 'Solving algebra equations', 'Studying planets with telescopes', 'Drawing only geometric patterns'],
    answer: 'Talking about celebrations in the community',
    explanation: 'Celebrations are part of familiar oral themes for this term.',
  },
  {
    prompt: 'Which ending is appropriate for a short oral talk?',
    options: ['Enkosi ngokumamela.', 'Ndithetha de kuphele ixesha lonke ngaphandle kwesiphelo.', 'Niza kuphendula kamva, mna ndiyaphuma.', 'Andinanto yokuvala.'],
    answer: 'Enkosi ngokumamela.',
    explanation: 'A polite closing thanks the audience and signals the end.',
  },
  {
    prompt: 'Why do learners practise revision dialogues?',
    options: ['To build confidence in speaking and responding', 'To avoid listening activities completely', 'To memorise only one long speech', 'To replace all reading tasks'],
    answer: 'To build confidence in speaking and responding',
    explanation: 'Dialogues strengthen oral confidence, listening, and response skills.',
  },
];

const ListeningSpeakingT4 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Health, feelings, celebrations, and short oral revision"
    learnSteps={learnSteps}
    task="listening-speaking-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT4;
