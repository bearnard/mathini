import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { wallSpacing } from '../../../../../components/diagrams/arts/ca9-visual-helpers';
import { GalleryWallPicture } from '../../../../../components/diagrams/arts/Ca9VisualPictures';

// The wall measurements come from ca9-visual-helpers.ts (tested in ca9-visual-helpers.test.ts).
export const WALL = 300;
export const WIDTHS = [60, 90, 60] as const;
const hang = wallSpacing(WALL, WIDTHS);
const used = WIDTHS.reduce((a, b) => a + b, 0);
const Q = wallSpacing(200, [40, 40, 40, 40]);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Portfolio selection',
    content: slide(
      <>
        <Rule>Portfolio selection means choosing your best work to show growth and variety. Show growth in skill, idea development and creative risk-taking.</Rule>
        <Worked
          title="Choose your pieces"
          steps={['Lay out all your work from the year.', 'Sort it by technique and theme.', 'Pick the strongest piece from each group.', 'Add an early piece beside a recent one to show growth.']}
        />
        <Mistake>Choosing only your favourite style. A portfolio should show variety as well as quality.</Mistake>
      </>,
    ),
  },
  {
    title: 'Finishing and presenting',
    content: slide(
      <>
        <Rule>Finishing techniques include framing, mounting, protective spray and labelling. A good presentation has a clean display, good lighting, labels and artist statements.</Rule>
        <Worked
          title="Prepare a charcoal drawing"
          steps={['Mount it on clean card.', 'Spray with fixative outdoors or in a well-ventilated space.', 'Frame it or fit it in a clip frame.', 'Label it with title, artist and materials.']}
        />
        <Mistake>Skipping the protective spray on charcoal or pastel work. It will smudge when handled.</Mistake>
      </>,
    ),
  },
  {
    title: 'Curating an exhibition',
    content: slide(
      <>
        <Rule>Exhibition curation means planning how the artwork is displayed, arranged and shown.</Rule>
        <GalleryWallPicture wall={WALL} widths={WIDTHS} />
        <Worked
          title={`A ${WALL} cm wall with works ${WIDTHS.join(', ')} cm wide`}
          steps={[<>Total width of the works: {WIDTHS.join(' + ')} = {used} cm.</>, <>Space left: {WALL} − {used} = {WALL - used} cm.</>, <>There are {WIDTHS.length + 1} gaps, so each gap is {WALL - used} ÷ {WIDTHS.length + 1} = {String(hang.gap).replace('.', ',')} cm.</>]}
        />
        <Mistake>Crowding works close together. Give each work space so it can be seen on its own.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reflection and moderation',
    content: slide(
      <>
        <Rule>A critical reflection explains your growth, successes, challenges and lessons. Moderation checks work against standards and gives helpful feedback.</Rule>
        <Worked
          title="Write a short reflection"
          steps={['Success: "My cross-hatching is much smoother."', 'Challenge: "I found two-point perspective hard."', 'Lesson: "I should plan with light lines first."', 'Next step: one thing to try next term.']}
        />
        <Mistake>Only describing what you made. A reflection explains how you grew and what you learned.</Mistake>
      </>,
    ),
  },
  {
    title: 'Creative careers',
    content: slide(
      <>
        <Rule>Visual arts can lead to careers such as illustrator, graphic designer, art teacher and curator.</Rule>
        <Worked
          title="What each one does"
          steps={['Illustrator: makes images for books, magazines and websites.', 'Graphic designer: designs logos, posters and layouts.', 'Art teacher: teaches art skills.', 'Curator: plans exhibitions and looks after a collection.']}
        />
        <Mistake>Thinking art cannot be a career. Many jobs use drawing, design and creative thinking.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What does a good portfolio show?</li>
            <li>Name two finishing techniques.</li>
            <li>A 200 cm wall holds four works that are 40 cm wide each. How wide is each of the five gaps?</li>
            <li>Name two creative careers in visual arts.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Your best work, with growth and variety.</li>
            <li>For example framing and mounting (also protective spray, labelling).</li>
            <li>Works take 4 × 40 = 160 cm. 200 − 160 = 40 cm, and 40 ÷ 5 = {Q.gap} cm.</li>
            <li>For example illustrator and curator (also graphic designer, art teacher).</li>
          </ol>
        }
      />,
    ),
  },
];
