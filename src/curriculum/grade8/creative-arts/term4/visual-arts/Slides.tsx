import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { ExhibitionWall } from '../../../../../components/diagrams/arts/Ca8VisualPictures';
import { hang, pickRange } from '../../../../../components/diagrams/arts/ca8-visual-helpers';

// Counts and measurements below come from ca8-visual-helpers.ts (tested in ca8-visual-helpers.test.ts).
const made = { drawings: 4, prints: 3, collages: 3, paintings: 2 };
const total = Object.values(made).reduce((a, b) => a + b, 0);
const chosen = pickRange(made, 6);
const WALL = 4000;
const WIDTHS = [600, 800, 600];
const wall = hang(WALL, WIDTHS);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Choosing portfolio pieces',
    content: slide(
      <>
        <Rule>A portfolio is a collection of your work. A strong selection shows range, skill development and effort.</Rule>
        <Worked
          title={`Choose 6 of your ${total} works`}
          steps={[<>You made {made.drawings} drawings, {made.prints} prints, {made.collages} collages and {made.paintings} paintings.</>, <>Take from each kind in turn: {chosen.drawings} drawings, {chosen.prints} prints, {chosen.collages} collage and {chosen.paintings} painting.</>, 'Within each kind, pick the pieces that show the most effort and improvement.']}
        />
        <Mistake>Choosing only one kind of work you like. A portfolio should show your range and how you grew.</Mistake>
      </>,
    ),
  },
  {
    title: 'Finishing and handling your work',
    content: slide(
      <>
        <Rule>Finishing techniques make work ready to show, for example cleaning edges and mounting neatly. Artworks must be handled carefully to prevent damage.</Rule>
        <NumberedSteps
          label="Getting an artwork ready to display"
          heading="Finishing checklist"
          tone="blue"
          steps={[
            { lead: 'Clean', text: ' smudges and rough edges.' },
            { lead: 'Mount', text: ' neatly on card.' },
            { lead: 'Label', text: ' with your name and title.' },
            { lead: 'Carry', text: ' it flat, by the edges.' },
          ]}
        />
        <Mistake>Rushing the finish. Smudges and torn edges take attention away from your ideas.</Mistake>
      </>,
    ),
  },
  {
    title: 'Planning an exhibition',
    content: slide(
      <>
        <Rule>Exhibition planning means arranging artworks for clear viewing and flow. Group related works to build a theme, and keep the gaps equal.</Rule>
        <ExhibitionWall wall={WALL} widths={WIDTHS} />
        <Worked
          title={`${WIDTHS.length} works on a ${WALL} mm wall`}
          steps={[<>Total width: {WIDTHS.join(' + ')} = {wall.total} mm.</>, <>Free wall: {WALL} − {wall.total} = {WALL - wall.total} mm, shared by {WIDTHS.length + 1} gaps.</>, <>Each gap: {WALL - wall.total} ÷ {WIDTHS.length + 1} = {wall.gap} mm.</>]}
        />
        <Mistake>Crowding the works together. Space lets each artwork be seen on its own.</Mistake>
      </>,
    ),
  },
  {
    title: 'The artist statement',
    content: slide(
      <>
        <Rule>An artist statement explains your ideas, your choices and the techniques you used.</Rule>
        <NumberedSteps
          label="What an artist statement says"
          heading="Write the statement"
          tone="violet"
          steps={[
            { lead: 'Ideas:', text: ' what is the work about?' },
            { lead: 'Choices:', text: ' why these colours and shapes?' },
            { lead: 'Techniques:', text: ' how did you make it?' },
          ]}
        />
        <Worked
          title="One sentence from a statement"
          steps={['"My print repeats a wave motif to show the sea at home, and I cut the block in lino."']}
        />
        <Mistake>Only saying what the work looks like. The statement must explain your ideas and choices.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reflecting on your growth',
    content: slide(
      <>
        <Rule>Reflection helps you spot strengths and set next steps. A useful end-of-year question is: how did my artistic choices improve over time?</Rule>
        <Worked
          title="Compare your first and last drawing"
          steps={['Place a Term 1 drawing next to a Term 4 drawing.', 'Name two things that improved, such as shading or composition.', 'Choose one next step to practise.']}
        />
        <Mistake>Listing only what you liked. Good reflection also names what to improve next.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What should a strong portfolio selection show?</li>
            <li>Name one finishing technique.</li>
            <li>What does exhibition planning mainly involve?</li>
            <li>What should an artist statement explain?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Range, skill development and effort.</li>
            <li>Cleaning edges or mounting neatly.</li>
            <li>Arranging artworks for clear viewing and flow.</li>
            <li>Your ideas, choices and techniques.</li>
          </ol>
        }
      />,
    ),
  },
];
