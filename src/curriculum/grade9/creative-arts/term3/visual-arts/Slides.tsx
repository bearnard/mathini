import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { LayerStackPicture, SymbolCards } from '../../../../../components/diagrams/arts/Ca9VisualPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Identity and environment themes',
    content: slide(
      <>
        <Rule>Identity themes explore personal, cultural or social parts of who we are. Environment themes explore natural or city settings, climate change or ecology.</Rule>
        <Worked
          title="Choosing an angle on 'my neighbourhood'"
          steps={['List words: taxi rank, spaza shop, school, litter.', 'Choose an angle: identity (where I belong) or environment (litter in the street).', 'Collect sketches and photographs for that angle.']}
        />
        <Mistake>Picking a theme but not showing it. Every part of the artwork should connect to the theme.</Mistake>
      </>,
    ),
  },
  {
    title: 'Planning a themed artwork',
    content: slide(
      <>
        <Rule>Plan before you make: research, develop ideas, choose materials and sketch. Place the elements in your composition with a purpose.</Rule>
        <NumberedSteps
          label="Planning a themed artwork"
          heading="Plan a themed work"
          tone="blue"
          steps={[
            { lead: 'Research', text: ' the theme.' },
            { lead: 'Develop', text: ' ideas.' },
            { lead: 'Choose', text: ' materials.' },
            { lead: 'Sketch', text: ' the composition.' },
          ]}
        />
        <Worked title="Theme: saving water" steps={['Idea: a dripping tap above dry cracked soil.', 'Materials: ink and torn paper.', 'Sketch: put the tap high on one side as the focal point and the soil below.']} />
        <Mistake>Scattering elements anywhere. Each should support the theme.</Mistake>
      </>,
    ),
  },
  {
    title: 'Symbolism',
    content: slide(
      <>
        <Rule>Symbolism means using images or colours to stand for ideas or feelings.</Rule>
        <SymbolCards />
        <Worked
          title="Show hope in a drawing"
          steps={['Choose the idea: hope.', 'Pick a symbol: a young plant growing through a crack.', 'Support it with warm, light colours.', 'Put the symbol where the eye goes first.']}
        />
        <Mistake>Expecting every viewer to read a symbol the same way. Explain your choices in your artist statement.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mixed media',
    content: slide(
      <>
        <Rule>Mixed media means combining several materials or techniques in one artwork.</Rule>
        <LayerStackPicture />
        <Worked
          title="Build a layered work"
          steps={['Start with a paper base.', 'Add a paint wash and let it dry.', 'Glue or stitch on pieces of fabric.', 'Check that every layer is firmly attached.']}
        />
        <Mistake>Adding materials for no reason. Each one should help say something about the theme.</Mistake>
      </>,
    ),
  },
  {
    title: 'Artist statement and critique',
    content: slide(
      <>
        <Rule>An artist statement explains the artist&apos;s aim, inspiration and meaning. Critique analyses and discusses a work&apos;s strengths and impact.</Rule>
        <Worked
          title="Write a short statement, then a critique"
          steps={['Aim: "I wanted to show how little water we have."', 'Inspiration: the dry dam near my home.', 'Meaning: the cracks stand for what we may lose.', 'Critique: name one strength and one idea to improve.']}
        />
        <Mistake>Thinking critique means only finding fault. It names strengths as well.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What does symbolism mean in art?</li>
            <li>What does mixed media mean?</li>
            <li>What does an artist statement explain?</li>
            <li>List the steps for planning a themed artwork.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Using images or colours to stand for ideas or feelings.</li>
            <li>Combining several materials or techniques in one artwork.</li>
            <li>The artist&apos;s aim, inspiration and the meaning of the work.</li>
            <li>Research, develop ideas, choose materials and sketch.</li>
          </ol>
        }
      />,
    ),
  },
];
