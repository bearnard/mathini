import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StructureBlocks } from '../../../../../components/diagrams/english/Grade7EnglishPictures';
import { ESSAY_PARTS, PARAGRAPH, REVIEW_PARTS, unityFixed } from '../../../../../components/diagrams/english/grade7english';

// Frames and the paragraph example come from grade7english.ts (tested).
const off = PARAGRAPH.find((s) => s.off)!;
const fixed = unityFixed(PARAGRAPH);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Plan before you write',
    content: slide(
      <>
        <Rule>Planning comes before the first draft. Decide your <strong>purpose</strong> (why you are writing), your <strong>audience</strong> (who will read it) and your key ideas. Then choose a tone and vocabulary that suit the reader.</Rule>
        <Worked
          title="Task: write a review of your school play for the school newsletter"
          steps={[
            <>Purpose: tell readers what you thought of the play.</>,
            <>Audience: learners, parents and teachers, so the tone is friendly but polite, with no slang.</>,
            <>Key ideas: the acting, the set, and whether you recommend it. Write them as a short list.</>,
          ]}
        />
        <Mistake>Starting the first draft straight away. Without a plan the writing wanders. Planning key ideas first makes drafting faster.</Mistake>
      </>,
    ),
  },
  {
    title: 'Writing a review',
    content: slide(
      <>
        <Rule>A review gives a <strong>judgement supported by reasons</strong>. It has a short summary, your opinion with reasons, and a recommendation.</Rule>
        <StructureBlocks blocks={REVIEW_PARTS} aria="The three parts of a review in order: summary, opinion with reasons, recommendation." />
        <Worked
          title="A short review of an imagined school play"
          steps={[
            <><strong>Summary:</strong> “The Rain Drum” is a school play about a village waiting for rain.</>,
            <><strong>Opinion with reasons:</strong> I enjoyed it because the actors spoke clearly and the drums built excitement.</>,
            <><strong>Recommendation:</strong> I recommend it to anyone who likes music and stories.</>,
          ]}
        />
        <Mistake>Only retelling the story or listing names. A review must say what you think and why.</Mistake>
      </>,
    ),
  },
  {
    title: 'Essay structure and types',
    content: slide(
      <>
        <Rule>An essay has an introduction, body paragraphs and a conclusion. A <strong>narrative essay</strong> tells a story. A <strong>reflective essay</strong> asks you to think about an experience and what you learned from it.</Rule>
        <StructureBlocks blocks={ESSAY_PARTS} aria="The three parts of an essay in order: introduction, body paragraphs, conclusion." />
        <Worked
          title="Choose a conclusion for a reflective essay on a hard exam week"
          steps={[
            <>A conclusion rounds off the main ideas and leaves a final thought.</>,
            <>It should not start a new point or be about page numbers.</>,
            <>“In conclusion, this taught me to prepare and persevere.” looks back at what was learned.</>,
          ]}
        />
        <Mistake>Putting the conclusion first or leaving it out. Without one the essay stops suddenly and the reader has no final thought.</Mistake>
      </>,
    ),
  },
  {
    title: 'Paragraph unity and redrafting',
    content: slide(
      <>
        <Rule><strong>Paragraph unity</strong> means each paragraph focuses on one main point. Use linking words such as “first”, “also” and “however” to connect paragraphs. Drafting and redrafting improves clarity, detail and accuracy.</Rule>
        <Worked
          title="Spot the sentence that does not belong"
          steps={[
            <>Main point: the school play was well planned.</>,
            <>Check each sentence. “{off.text}” is not about the play.</>,
            <>Remove it. The paragraph now reads: “{fixed}”</>,
          ]}
        />
        <Mistake>Thinking paragraphs must all be the same length. Unity is about one point, not length. Readers lose track when one paragraph mixes unrelated ideas.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What should you do before writing a full first draft?</li>
            <li>What must a good book or film review contain to convince readers?</li>
            <li>What is the structure of an essay?</li>
            <li>What does a reflective essay ask you to do?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Plan your key ideas, purpose and audience.</li>
            <li>An opinion supported by reasons.</li>
            <li>Introduction, body paragraphs, conclusion.</li>
            <li>Think about an experience and what you learned from it.</li>
          </ol>
        }
      />,
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
