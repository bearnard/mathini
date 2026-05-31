import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Introduce yourself and ask for information clearly',
    image: {
      src: '/curriculum/grade7/xho/term1/listening-speaking/diagram.webp',
      alt: 'Grade 7 isiXhosa SAL learners introducing themselves and discussing hobbies in class',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In Term 1, practise longer dialogues about <strong>self, school, hobbies,</strong> and the community.
          Use polite questions and clear pronunciation.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-semibold text-sky-800">Introductions</p>
            <p className="text-slate-600">Use complete sentences: Ndingu..., Ndihlala e...</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-semibold text-emerald-800">Hobbies</p>
            <p className="text-slate-600">Talk about interests and respond to follow-up questions.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which sentence is a clear self-introduction?',
    options: ['NdinguLitha, ndifunda eGrade 7.', 'Molweni kuphela.', 'Andazi.', 'Mamela nje.'],
    answer: 'NdinguLitha, ndifunda eGrade 7.',
    explanation: 'It gives a name and school context in a full sentence.',
  },
  {
    prompt: 'Which question politely asks about a hobby?',
    options: ['Yeyiphi into othanda ukuyenza emva kwesikolo?', 'Nika impendulo ngoku!', 'Kutheni uthule?', 'Hamba ngoku.'],
    answer: 'Yeyiphi into othanda ukuyenza emva kwesikolo?',
    explanation: 'It is a respectful information question about interests.',
  },
  {
    prompt: 'What is the best response to “Unjani namhlanje?”',
    options: ['Ndiphilile, enkosi. Wena unjani?', 'Andifuni kuthetha.', 'Molo kuphela.', 'Andazi mna.'],
    answer: 'Ndiphilile, enkosi. Wena unjani?',
    explanation: 'It answers politely and keeps the dialogue going.',
  },
  {
    prompt: 'Which phrase is used when asking for help politely?',
    options: ['Nceda undincede.', 'Ndenzele ngoku!', 'Andikukhathalelanga.', 'Sukundibuza.'],
    answer: 'Nceda undincede.',
    explanation: 'Nceda marks a polite request.',
  },
  {
    prompt: 'In an oral dialogue, good turn-taking means you should...',
    options: ['listen first, then respond', 'interrupt every line', 'speak at the same time', 'ignore the speaker'],
    answer: 'listen first, then respond',
    explanation: 'Turn-taking requires listening and answering at the right time.',
  },
  {
    prompt: 'Which option names a community place?',
    options: ['Ivenkile', 'Isiphumlisi', 'Isenzi', 'Isimelabizo'],
    answer: 'Ivenkile',
    explanation: 'Ivenkile means shop, a common community location.',
  },
  {
    prompt: 'Which sentence asks for information about location?',
    options: ['Ikuphi ilayibrari?', 'Nditya isidlo sasemini.', 'Ndidlala ibhola.', 'Ndineminyaka elishumi elinesibini.'],
    answer: 'Ikuphi ilayibrari?',
    explanation: 'Ikuphi asks where a place is.',
  },
  {
    prompt: 'What helps pronunciation in oral assessment?',
    options: ['speaking clearly at a steady pace', 'speaking as fast as possible', 'whispering', 'skipping key words'],
    answer: 'speaking clearly at a steady pace',
    explanation: 'Clear pace and articulation improve understanding.',
  },
];

const ListeningSpeakingT1 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Introductions, hobbies, daily routines, and asking for information"
    learnSteps={learnSteps}
    task="gr7-listening-speaking-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT1;
