import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { ReliefPrintPicture } from '../../../../../components/diagrams/arts/Ca9VisualPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The design process',
    content: slide(
      <>
        <Rule>The design process begins with research, observation and planning before making.</Rule>
        <NumberedSteps
          label="The design process in art"
          heading="From idea to finished work"
          tone="violet"
          steps={[
            { lead: 'Research', text: ' artists and your topic.' },
            { lead: 'Observe', text: ' and sketch from life.' },
            { lead: 'Plan', text: ' the composition.' },
            { lead: 'Experiment', text: ' with materials.' },
            { lead: 'Make', text: ' the artwork.' },
            { lead: 'Evaluate', text: ' the result.' },
          ]}
        />
        <Worked title="A print of a local market" steps={['Research: look at photographs and artists who show markets.', 'Observe: sketch the stalls on site.', 'Plan: choose where the biggest stall goes.']} />
        <Mistake>Starting to make straight away. Work without research and planning is usually weaker.</Mistake>
      </>,
    ),
  },
  {
    title: 'Research and experimentation',
    content: slide(
      <>
        <Rule>Research notes hold observations, references, colour studies and ideas. Experimentation means trying out materials and techniques to see what works.</Rule>
        <Worked
          title="From notes to an original work"
          steps={['Note: sketch a basket and write down its colours.', 'Try: test ink and pastel on scrap paper.', 'Keep what worked best.', 'Bring your findings together in an original artwork.']}
        />
        <Mistake>Copying a reference exactly. Use your research as ideas and make something of your own.</Mistake>
      </>,
    ),
  },
  {
    title: 'Visual analysis',
    content: slide(
      <>
        <Rule>Visual analysis means describing what you see in an artwork and how it affects the viewer.</Rule>
        <NumberedSteps
          label="Four steps of visual analysis"
          heading="Talking about an artwork"
          tone="teal"
          steps={[
            { lead: 'Describe', text: ' what you see.' },
            { lead: 'Analyse', text: ' how the elements work.' },
            { lead: 'Interpret', text: ' the meaning or mood.' },
            { lead: 'Evaluate', text: ' how well it works.' },
          ]}
        />
        <Worked
          title="A dark blue painting with one yellow window"
          steps={['Describe: dark blue shapes and a small yellow square.', 'Analyse: the yellow stands out against the blue and draws the eye.', 'Interpret: it feels lonely but hopeful.']}
        />
        <Mistake>Only saying you like it. Give reasons using the elements of art.</Mistake>
      </>,
    ),
  },
  {
    title: 'Relief printing',
    content: slide(
      <>
        <Rule>In relief printing, such as linocut, you carve or cut away material from a block. The raised surface is inked to make a repeatable image.</Rule>
        <ReliefPrintPicture />
        <Worked
          title="Make a linocut"
          steps={['Draw your design on the block. The print will be reversed.', 'Cut away the parts that must stay paper-coloured, cutting away from your hands.', 'Roll ink on the raised areas.', 'Press paper on the block to pull a print.']}
        />
        <Mistake>Cutting away the parts you want inked. The raised parts print.</Mistake>
      </>,
    ),
  },
  {
    title: 'Craft techniques and South African themes',
    content: slide(
      <>
        <Rule>Craft techniques include weaving, ceramics, metalwork and batik. South African artists often explore identity, history, community and social issues.</Rule>
        <Worked
          title="How each craft works"
          steps={['Weaving: threads or strips are interlaced.', 'Ceramics: clay is shaped and then fired.', 'Metalwork: metal is cut, bent or joined.', 'Batik: wax is painted on cloth to resist the dye.']}
        />
        <Mistake>Treating craft as lesser than painting. A crafted work needs research, design and skill too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What does the design process begin with?</li>
            <li>What should an artist&apos;s research notes include?</li>
            <li>In relief printing, which parts of the block print?</li>
            <li>Name two craft techniques.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Research, observation and planning before making.</li>
            <li>Observations, references, colour studies and ideas.</li>
            <li>The raised parts that are inked; the cut-away parts do not print.</li>
            <li>For example weaving and batik (also ceramics, metalwork).</li>
          </ol>
        }
      />,
    ),
  },
];
