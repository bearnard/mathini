import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { SymbolGrid, TextureContrast } from '../../../../../components/diagrams/arts/Ca8VisualPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Symbolism',
    content: slide(
      <>
        <Rule>Symbolism is using images to stand for deeper ideas. A symbol is something you can see that points to something you cannot.</Rule>
        <SymbolGrid />
        <Worked
          title="Choose a symbol for an idea"
          steps={['Name the idea: for example unity.', 'Choose an image that can stand for it: two linked rings.', 'Repeat the symbol so the viewer notices it.']}
        />
        <Mistake>Thinking a symbol has only one meaning. Meanings can change with culture and context, so ask what the artist intended.</Mistake>
      </>,
    ),
  },
  {
    title: 'Visual literacy: reading an artwork',
    content: slide(
      <>
        <Rule>Being visually literate means you can read and make sense of the messages in images. Context also matters: where and when the work was made.</Rule>
        <NumberedSteps
          label="Four steps for reading an artwork"
          heading="Read an artwork"
          tone="teal"
          steps={[
            { lead: 'Describe', text: ' what you see.' },
            { lead: 'Analyse', text: ' lines, colours, shapes.' },
            { lead: 'Interpret', text: ' what it means.' },
            { lead: 'Judge', text: ' how well it works.' },
          ]}
        />
        <Worked
          title="The same symbol appears again and again"
          steps={['Describe: the symbol is repeated across the work.', 'Ask: what idea do these symbols suggest?']}
        />
        <Mistake>Skipping describing and jumping to an opinion. Look carefully first, then interpret.</Mistake>
      </>,
    ),
  },
  {
    title: 'South African and African art',
    content: slide(
      <>
        <Rule>South African and African artworks often carry meaning in their patterns, colours and materials. To analyse one, ask who made it and where and when it was made.</Rule>
        <Worked
          title="Analyse a painted house or a beadwork piece"
          steps={['Describe the patterns, colours and materials you see.', 'Find the context: where, when and by whom it was made.', 'Interpret what the repeated patterns may say about the people and place.']}
        />
        <Mistake>Judging a work without its context. A pattern can mean different things in different places.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mixed media and texture',
    content: slide(
      <>
        <Rule>Mixed media artwork uses more than one material or technique. Combining rough paper with smooth paint creates texture contrast.</Rule>
        <TextureContrast />
        <Worked
          title="Plan a mixed-media sky"
          steps={['Tear rough paper for the clouds.', 'Paint the sky smooth around it.', 'The rough and smooth surfaces make a texture contrast.']}
        />
        <Mistake>Using many materials with no plan. Each material should help show your idea.</Mistake>
      </>,
    ),
  },
  {
    title: 'A themed artwork and artist research',
    content: slide(
      <>
        <Rule>A strong themed artwork links its visual choices to a clear idea. Artist research helps you understand style, techniques and meaning.</Rule>
        <NumberedSteps
          label="Making a themed artwork"
          heading="From idea to artwork"
          tone="violet"
          steps={[
            { lead: 'Choose', text: ' a clear idea.' },
            { lead: 'Research', text: ' artists who explore it.' },
            { lead: 'Plan', text: ' symbols, colours, materials.' },
            { lead: 'Make', text: ' and reflect.' },
          ]}
        />
        <Mistake>Picking colours and symbols because they look nice. Each choice should connect to your idea.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does symbolism mean in art?</>,
          <>Name the four steps for reading an artwork.</>,
          <>What does mixed media use?</>,
          <>Rough paper next to smooth paint creates what?</>,
        ]}
        answers={[
          <>Using images to stand for deeper ideas.</>,
          <>Describe, analyse, interpret, judge.</>,
          <>More than one material or technique.</>,
          <>Texture contrast.</>,
        ]}
      />,
    ),
  },
];
