import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './ExaminationWritingPracticeSlides';

const bank: CapsItem[] = [
  {
    prompt: 'What is the first step when writing an essay in an exam?',
    options: ['plan your main points and structure', 'start writing immediately without thinking', 'write the conclusion first', 'skip planning to save time'],
    answer: 'plan your main points and structure',
    explanation: 'Planning ensures your essay stays focused and organized.',
  },
  {
    prompt: 'How much time should you usually spend on exam planning?',
    options: ['5-10 minutes per essay', '30 seconds only', 'no time at all', 'half the total exam time'],
    answer: '5-10 minutes per essay',
    explanation: 'Quick planning prevents rambling and ensures you address the question.',
  },
  {
    prompt: 'What format feature is required in a formal letter?',
    options: ["sender's address, date and recipient's address at the top", 'no spacing or indentation anywhere on the page', "the writer's first name at the top of the page", 'an informal greeting such as "Hey there"'],
    answer: "sender's address, date and recipient's address at the top",
    explanation: 'Formal layout shows professionalism and follows convention.',
  },
  {
    prompt: 'Which sentence shows topic focus in an exam essay?',
    options: ['The task asks me to discuss climate change, which I will address.', 'I will write about anything I want.', 'Climate change is interesting because penguins are cute.', 'Let me talk about many unrelated topics.'],
    answer: 'The task asks me to discuss climate change, which I will address.',
    explanation: 'Clear focus ensures your essay answers the specific question.',
  },
  {
    prompt: 'What common editing error should you check in timed writing?',
    options: ['tense consistency and subject-verb agreement', 'whether the paper has neat margins on each page', 'whether the title is underlined in the right colour', 'the length of each paragraph in the answer'],
    answer: 'tense consistency and subject-verb agreement',
    explanation: 'These errors frequently affect clarity and appear in rushed writing.',
  },
  {
    prompt: 'How can you manage time across multiple exam sections?',
    options: ['give time to each section by its marks; move on if running late', 'spend all of your time on the first section', 'keep no track of time and trust your pace', 'finish each section fast whatever the quality is'],
    answer: 'give time to each section by its marks; move on if running late',
    explanation: 'Strategic time use ensures you attempt all sections.',
  },
  {
    prompt: 'Which proofreading technique is most effective under time pressure?',
    options: ['read your work aloud under your breath to catch errors fast', 'skip proofreading, since there is no time for it', 'swap the long words for short ones in every line', 'check only the first line of each paragraph'],
    answer: 'read your work aloud under your breath to catch errors fast',
    explanation: 'Reading aloud helps you hear awkward phrasing and errors faster.',
  },
  {
    prompt: 'What editing priority should you follow?',
    options: ['major errors (spelling, grammar, sense) before minor ones (style)', 'minor style points before any major error is fixed', 'only the last sentence of the whole answer', 'the word count and not the mistakes in the text'],
    answer: 'major errors (spelling, grammar, sense) before minor ones (style)',
    explanation: 'Prioritizing ensures your time corrects the most important mistakes.',
  },
];

const ExaminationWritingPractice = () => (
  <CapsSubjectTopic
    title="Examination Writing Practice"
    subtitle="Letters, essays, planning, editing, timed responses and format recall"
    learnSteps={learnSteps}
    task="gr9-examination-writing-practice-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ExaminationWritingPractice;
