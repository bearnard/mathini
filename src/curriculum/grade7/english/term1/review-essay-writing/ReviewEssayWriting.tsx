import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Plan reviews and essays with purpose',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grade 7 writing requires clear planning. In both reviews and essays, choose a purpose, plan key points, and
          organise ideas before drafting.
        </p>
      </div>
    ),
  },
  {
    title: 'Use the right format and structure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A review usually includes a brief summary, opinion, and recommendation. Essays need a focused introduction,
          linked body paragraphs, and a strong conclusion.
        </p>
      </div>
    ),
  },
  {
    title: 'Draft, edit, and improve paragraph unity',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Good writing improves through revision. Each paragraph should stay on one main idea and use linking words for
          smooth flow.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which step should come before writing a full first draft?',
    options: ['Planning key ideas', 'Submitting the final version', 'Ignoring the topic', 'Changing the genre'],
    answer: 'Planning key ideas',
    explanation: 'Planning helps you organise content before drafting.',
  },
  {
    prompt: 'What is a key feature of a review?',
    options: [
      'An opinion supported by reasons',
      'Only a list of names',
      'No introduction or ending',
      'Random points with no purpose',
    ],
    answer: 'An opinion supported by reasons',
    explanation: 'A review gives a judgement and explains it with evidence or reasons.',
  },
  {
    prompt: 'Which structure best suits an essay?',
    options: [
      'Introduction, body paragraphs, conclusion',
      'Title only and one sentence',
      'Conclusion first and no body',
      'Dialogue lines without paragraphs',
    ],
    answer: 'Introduction, body paragraphs, conclusion',
    explanation: 'Essays are usually built with these three clear parts.',
  },
  {
    prompt: 'Paragraph unity means...',
    options: [
      'each paragraph focuses on one main point',
      'each paragraph has different unrelated ideas',
      'paragraphs must all be the same length',
      'only the first paragraph matters',
    ],
    answer: 'each paragraph focuses on one main point',
    explanation: 'Unity keeps a paragraph coherent and easy to follow.',
  },
  {
    prompt: 'A reflective essay mainly asks the writer to...',
    options: ['think about an experience and what was learned', 'copy out a poem without any changes', 'write only stage directions for a play', 'list the dictionary meanings of words'],
    answer: 'think about an experience and what was learned',
    explanation: 'Reflective writing explores personal insight and growth.',
  },
  {
    prompt: 'Which sentence is best for a conclusion in an essay?',
    options: ['In conclusion, this taught me to prepare and persevere.', 'First, I will start my introduction right now.', 'Maybe this paragraph belongs somewhere else.', 'The page number of this page is twelve.'],
    answer: 'In conclusion, this taught me to prepare and persevere.',
    explanation: 'A conclusion wraps up key ideas and leaves a final thought.',
  },
  {
    prompt: 'Why is drafting and redrafting important?',
    options: [
      'It helps improve clarity, detail, and accuracy',
      'It replaces the need for punctuation',
      'It guarantees every answer is the same',
      'It removes the purpose of planning',
    ],
    answer: 'It helps improve clarity, detail, and accuracy',
    explanation: 'Revisions strengthen writing quality before final submission.',
  },
  {
    prompt: 'Which choice shows audience awareness in writing?',
    options: [
      'Choosing tone and vocabulary that suit the reader',
      'Using unrelated slang in every sentence',
      'Ignoring the writing task instructions',
      'Changing the topic completely',
    ],
    answer: 'Choosing tone and vocabulary that suit the reader',
    explanation: 'Audience awareness means writing in an appropriate style for readers.',
  },
];

const ReviewEssayWriting = () => (
  <CapsSubjectTopic
    title="Review and Essay Writing"
    subtitle="Format, planning, drafting and coherent paragraph development"
    learnSteps={learnSteps}
    task="gr7-review-essay-writing-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ReviewEssayWriting;
