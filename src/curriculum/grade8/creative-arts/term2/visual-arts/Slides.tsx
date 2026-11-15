import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { ContrastFocal, PatternStrip, PositiveNegative, PrintMirror } from '../../../../../components/diagrams/arts/Ca8VisualPictures';
import { alternate, repeatX } from '../../../../../components/diagrams/arts/ca8-visual-helpers';

// Positions and counts below come from ca8-visual-helpers.ts (tested in ca8-visual-helpers.test.ts).
const border = repeatX(7, 8, 7, 8); // seven triangles, 8 wide, 7 apart, starting at 8
const alt = alternate(4).join(' ');

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Principles of design: contrast and focal point',
    content: slide(
      <>
        <Rule>The principles of design are the ways artists arrange the elements: balance, contrast, emphasis, rhythm, pattern, unity and proportion. Contrast is a clear difference, such as big and small or light and dark.</Rule>
        <ContrastFocal />
        <Worked
          title="Make the eye go to one place"
          steps={['Draw several small, dull shapes.', 'Add one big, bright shape: it contrasts in size and colour.', 'That shape is the focal point, the area that attracts the viewer first.']}
        />
        <Mistake>Making everything equally bright and big. With no contrast there is no focal point.</Mistake>
      </>,
    ),
  },
  {
    title: 'Pattern and repetition',
    content: slide(
      <>
        <Rule>Pattern is created by repeating visual elements such as shapes, lines or colours. Even spacing makes the repeat clear, and alternating two motifs adds rhythm.</Rule>
        <PatternStrip />
        <Worked
          title="Design a triangle border for a frame"
          steps={[<>Repeat one triangle 7 times, 8 units wide with 7 units between.</>, <>The triangles start at {border.join(', ')}.</>, <>To alternate two motifs, A and B, use the order {alt} ...</>]}
        />
        <Mistake>Spacing the shapes unevenly. A pattern needs regular repetition to read as a pattern.</Mistake>
      </>,
    ),
  },
  {
    title: 'Positive and negative space',
    content: slide(
      <>
        <Rule>Positive space is the object itself. Negative space is the empty area around it. Both are part of the design.</Rule>
        <PositiveNegative />
        <Worked
          title="Look at a vase in a new way"
          steps={['The vase is the positive space.', 'Now look only at the gaps around it: that is the negative space.', 'Draw the gap shapes carefully and the vase appears.']}
        />
        <Mistake>Treating the background as nothing. The empty area has a shape too, and it affects the whole design.</Mistake>
      </>,
    ),
  },
  {
    title: 'Printmaking',
    content: slide(
      <>
        <Rule>Printmaking transfers an image from a prepared surface, such as a block, onto paper. The same block can make many prints.</Rule>
        <PrintMirror />
        <NumberedSteps
          label="Steps in a block print"
          tone="amber"
          steps={[
            { lead: 'Plan', text: ' the design.' },
            { lead: 'Cut', text: ' it into the block.' },
            { lead: 'Roll', text: ' ink on the block.' },
            { lead: 'Press', text: ' paper on it and lift.' },
          ]}
        />
        <Mistake>Expecting the print to look the same as the block. It is a mirror image, so letters must be cut backwards.</Mistake>
      </>,
    ),
  },
  {
    title: 'Collage and African visual references',
    content: slide(
      <>
        <Rule>In a collage you stick cut or torn materials onto a surface. When you use African visual references, study and respectfully use local motifs and symbols.</Rule>
        <Worked
          title="Plan a collage with a local motif"
          steps={['Research a motif and what it means, such as the bold geometric patterns painted on Ndebele houses in South Africa.', 'Sketch your layout, then test paper and fabric.', 'Write process notes: your planning, testing and improvements.']}
        />
        <Mistake>Copying a motif without learning its meaning, or skipping process notes. Notes show how your work improved.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Name a principle of design.</li>
            <li>What creates a pattern in an artwork?</li>
            <li>In a picture of a vase, which part is the negative space?</li>
            <li>Why must letters on a printing block be cut backwards?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>For example contrast, balance, emphasis or rhythm.</li>
            <li>Repeating visual elements.</li>
            <li>The empty area around the vase.</li>
            <li>The print is a mirror image of the block.</li>
          </ol>
        }
      />,
    ),
  },
];
