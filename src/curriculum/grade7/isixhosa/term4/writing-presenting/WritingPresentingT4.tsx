import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Consolidate paragraph writing and short review formats',
    image: {
      src: '/curriculum/grade7/xho/term4/writing-presenting/diagram.webp',
      alt: 'Grade 7 learner revising message writing and personal recount planning',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 writing revision includes <strong>personal recounts, short reviews, messages,</strong> and editing for
          clearer final paragraphs.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-semibold text-violet-800">Planning</p>
            <p className="text-slate-600">Plan ideas before writing to stay focused and coherent.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-semibold text-emerald-800">Editing</p>
            <p className="text-slate-600">Improve drafts by checking grammar, spelling, and punctuation.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'A personal recount should mainly describe...',
    options: ['an event you experienced', 'a price catalogue', 'a grammar table only', 'a map legend'],
    answer: 'an event you experienced',
    explanation: 'Recounts retell personal experiences in sequence.',
  },
  {
    prompt: 'Which sentence sounds like a short review opinion?',
    options: ['Le ncwadi inomdla kuba abalinganiswa bacacile.', 'Ndiyavuka kusasa.', 'Ivenkile ivaliwe ngoMvulo.', 'Ndiyafunda izenzi.'],
    answer: 'Le ncwadi inomdla kuba abalinganiswa bacacile.',
    explanation: 'A review includes evaluation with reasons.',
  },
  {
    prompt: 'What should a school message include?',
    options: ['clear purpose and key detail', 'many unrelated ideas', 'no greeting or context', 'random symbols'],
    answer: 'clear purpose and key detail',
    explanation: 'Messages should be brief but informative.',
  },
  {
    prompt: 'Which planning tool helps paragraph writing?',
    options: ['a simple outline of main points', 'guessing while writing', 'copying unrelated text', 'removing topic sentences'],
    answer: 'a simple outline of main points',
    explanation: 'Outlines help organise ideas before drafting.',
  },
  {
    prompt: 'Which edit is most useful before final submission?',
    options: ['correcting spelling errors', 'changing font colour only', 'adding random exclamation marks', 'deleting all punctuation'],
    answer: 'correcting spelling errors',
    explanation: 'Accurate spelling improves readability and marks.',
  },
  {
    prompt: 'In a recount, sequence words like “first” and “then” are used to...',
    options: ['show order of events', 'introduce a poem rhyme', 'ask questions', 'replace verbs'],
    answer: 'show order of events',
    explanation: 'Sequence words keep narrative order clear.',
  },
  {
    prompt: 'Which ending suits a reflective paragraph?',
    options: ['Ndifunde lukhulu kolu suku.', 'Yiya phaya ngoku!', 'Andazi ngokupheleleyo.', '2x + 3 = 9'],
    answer: 'Ndifunde lukhulu kolu suku.',
    explanation: 'It reflects on learning from the experience.',
  },
  {
    prompt: 'Why practise writing revision in Term 4?',
    options: ['to prepare for end-of-year tasks', 'to avoid presenting', 'to skip editing', 'to remove sentence control'],
    answer: 'to prepare for end-of-year tasks',
    explanation: 'Revision strengthens readiness for final assessment.',
  },
];

const WritingPresentingT4 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Personal recounts, short reviews, messages, and revision paragraphs"
    learnSteps={learnSteps}
    task="gr7-writing-presenting-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT4;
