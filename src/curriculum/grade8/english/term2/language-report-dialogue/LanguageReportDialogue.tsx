import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use tense accurately in reporting',
    image: {
      src: '/curriculum/grade8/eng/term2/language-report-dialogue/diagram.webp',
      alt: 'learner converting direct speech to indirect speech with tense and reporting verbs',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reporting language often requires tense control. Grade 8 learners practise perfect and future forms in
          meaningful sentence contexts.
        </p>
      </div>
    ),
  },
  {
    title: 'Convert direct and indirect speech',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Speech conversion needs careful pronoun and tense changes. Punctuation and reporting verbs must also fit the
          sentence meaning.
        </p>
      </div>
    ),
  },
  {
    title: 'Build links with conjunctions and voice',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Conjunctions connect ideas logically, while active and passive voice choices shift focus in formal and
          informational writing.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which sentence is in the present perfect tense?',
    options: ['She has completed the dialogue task.', 'She completed the dialogue task yesterday.', 'She completes the dialogue task now.', 'She will complete the dialogue task.'],
    answer: 'She has completed the dialogue task.',
    explanation: 'Present perfect uses has or have plus the past participle.',
  },
  {
    prompt: 'Which sentence is in the future tense?',
    options: ['They will present their report tomorrow.', 'They present their report now.', 'They presented their report.', 'They have presented their report.'],
    answer: 'They will present their report tomorrow.',
    explanation: 'Future tense commonly uses will with the base form.',
  },
  {
    prompt: 'Direct speech: "I am tired," said Lindiwe. Which indirect form is correct?',
    options: ['Lindiwe said that she was tired.', 'Lindiwe said that I am tired.', 'Lindiwe said she is tired yesterday.', 'Lindiwe says that she tired.'],
    answer: 'Lindiwe said that she was tired.',
    explanation: 'Pronoun and tense change appropriately in reported speech.',
  },
  {
    prompt: 'Which conjunction best links cause and result?',
    options: ['because', 'although', 'unless', 'meanwhile'],
    answer: 'because',
    explanation: 'Because introduces a reason or cause.',
  },
  {
    prompt: 'Which sentence is in the passive voice?',
    options: ['The notice was written by the class monitor.', 'The class monitor wrote the notice.', 'The class monitor writes the notice.', 'The class monitor will write the notice.'],
    answer: 'The notice was written by the class monitor.',
    explanation: 'Passive voice places the action target as the sentence subject.',
  },
  {
    prompt: 'Why might a report use passive voice?',
    options: ['to focus on the action or result', 'to avoid sentence structure', 'to remove all verbs', 'to turn prose into poetry'],
    answer: 'to focus on the action or result',
    explanation: 'Passive voice highlights what happened rather than who did it.',
  },
  {
    prompt: 'Which punctuation is required around direct speech?',
    options: ['quotation marks', 'square brackets only', 'slash marks', 'hyphen pairs only'],
    answer: 'quotation marks',
    explanation: 'Direct speech is enclosed in quotation marks.',
  },
  {
    prompt: 'What is the best reason to use conjunctions in dialogue writing?',
    options: ['to link ideas into coherent sentences', 'to remove all sentence variation', 'to avoid meaning', 'to shorten every sentence to one word'],
    answer: 'to link ideas into coherent sentences',
    explanation: 'Conjunctions improve flow and logical relationships.',
  },
];

const LanguageReportDialogue = () => (
  <CapsSubjectTopic
    title="Language for Report and Dialogue"
    subtitle="Tense control, speech conversion, conjunctions and voice choices"
    learnSteps={learnSteps}
    task="gr8-language-report-dialogue-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LanguageReportDialogue;
