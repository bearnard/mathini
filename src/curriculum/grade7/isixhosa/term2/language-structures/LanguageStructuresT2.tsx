import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Build accurate questions, negatives, and concord patterns',
    image: {
      src: '/curriculum/grade7/xho/term2/language-structures/diagram.webp',
      alt: 'Grade 7 class practising isiXhosa question forms and sentence correction',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 2 language structures focus on <strong>negatives, question forms, pronouns, subject concords,</strong>{' '}
          and adjectives for stronger sentence control.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-red-50 p-4 text-left">
            <p className="font-semibold text-red-800">Sentence building</p>
            <p className="text-slate-600">Transform statements into questions and negatives correctly.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4 text-left">
            <p className="font-semibold text-purple-800">Agreement</p>
            <p className="text-slate-600">Match pronouns and concords with the subject.</p>
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
          Practice these question and control words to strengthen negatives, question forms, and sentence accuracy.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Umbuzo"} phonetic={"[um'buːzo]"} meaning={"Question"} lang="xh" />
          <PronunciationPlayer word={"Ngubani?"} phonetic={"[ŋu'baːni]"} meaning={"Who?"} lang="xh" />
          <PronunciationPlayer word={"Phi?"} phonetic={"[pʰi]"} meaning={"Where?"} lang="xh" />
          <PronunciationPlayer word={"Nini?"} phonetic={"[ni'ni]"} meaning={"When?"} lang="xh" />
          <PronunciationPlayer word={"Kutheni?"} phonetic={"[ku'tʰɛni]"} meaning={"Why?"} lang="xh" />
          <PronunciationPlayer word={"Hayi"} phonetic={"[hayi]"} meaning={"No / not"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which sentence is a correct question form?',
    options: ['Uyaya esikolweni namhlanje?', 'Uyaya esikolweni namhlanje.', 'Uyaya esikolweni namhlanje,', 'Uyaya esikolweni namhlanje!'],
    answer: 'Uyaya esikolweni namhlanje?',
    explanation: 'The question mark signals a proper question.',
  },
  {
    prompt: 'Choose the correct negative sentence.',
    options: ['Andiyi evenkileni namhlanje.', 'Ndiyi evenkileni namhlanje.', 'Siyi evenkileni namhlanje.', 'Ndiye evenkileni namhlanje.'],
    answer: 'Andiyi evenkileni namhlanje.',
    explanation: 'Andiyi indicates a negative first-person form.',
  },
  {
    prompt: 'Which pronoun fits: “___ uyacula kakuhle.”',
    options: ['Yena', 'Mna', 'Sona', 'Nina'],
    answer: 'Yena',
    explanation: 'Yena agrees with uyacula in this context.',
  },
  {
    prompt: 'Pick the sentence with correct subject concord use.',
    options: ['Abafundi bayafunda.', 'Abafundi uyafunda.', 'Abafundi ndiyafunda.', 'Abafundi sifunda.'],
    answer: 'Abafundi bayafunda.',
    explanation: 'Plural subject abafundi matches baya-.',
  },
  {
    prompt: 'Which adjective best completes: “indlu ___” (a big house)?',
    options: ['enkulu', 'encinci', 'emdaka', 'eluhlaza'],
    answer: 'enkulu',
    explanation: 'Enkulu describes size as big.',
  },
  {
    prompt: 'What is the purpose of a question word like “phi” or “nini”?',
    options: ['to ask for specific information', 'to show punctuation only', 'to make words plural', 'to replace all verbs'],
    answer: 'to ask for specific information',
    explanation: 'Question words target place, time, person, and reason details.',
  },
  {
    prompt: 'Which sentence has correct word order for a simple question?',
    options: ['Uhlala phi umhlobo wakho?', 'Phi uhlala umhlobo wakho?', 'Umhlobo wakho phi uhlala?', 'Uhlala umhlobo wakho phi?'],
    answer: 'Uhlala phi umhlobo wakho?',
    explanation: 'This ordering is clear and natural for the question.',
  },
  {
    prompt: 'Why are concord checks important?',
    options: ['They keep sentences grammatically accurate.', 'They make sentences longer only.', 'They replace punctuation rules.', 'They remove meaning from texts.'],
    answer: 'They keep sentences grammatically accurate.',
    explanation: 'Correct agreement improves clarity and correctness.',
  },
];

const LanguageStructuresT2 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Negatives, question forms, pronouns, concords, and adjectives"
    learnSteps={learnSteps}
    task="gr7-language-structures-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT2;
