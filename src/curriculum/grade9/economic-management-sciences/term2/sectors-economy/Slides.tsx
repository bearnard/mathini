import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/ems/Ems9dPictures';
import { SECTORS } from '../../../../../components/diagrams/ems/ems9d-helpers';

// The examples come from SECTORS in ems9d-helpers.ts (every question is checked against it in g9EmsEconomy.test.ts).
const names = (sector: 'primary' | 'secondary' | 'tertiary') => SECTORS.filter((s) => s.sector === sector).map((s) => s.activity);
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The primary sector',
    content: slide(
      <>
        <Rule>The primary sector gets its raw materials out of the land and the sea: farming, mining, fishing and forestry. The goods are usually not ready to use yet.</Rule>
        <StepFlow steps={['Land', 'Sea', 'Mine']} notes={['Farming', 'Fishing', 'Mining']} aria="Three places where the primary sector works: the land for farming, the sea for fishing and the mine for mining." />
        <Worked steps={names('primary').map((a) => `${a}: primary sector.`)} />
        <Mistake>Thinking that a shop that sells vegetables is in the primary sector. The farmer who grows them is; the shop sells them, which is a service.</Mistake>
      </>,
    ),
  },
  {
    title: 'The secondary sector',
    content: slide(
      <>
        <Rule>The secondary sector makes things from raw materials: manufacturing and construction. It turns primary products into finished goods or building work.</Rule>
        <StepFlow steps={['Wheat', 'Flour', 'Bread']} notes={['Primary', 'Secondary', 'Secondary']} aria="Wheat from a farm is ground into flour in a mill and baked into bread. The wheat is a primary product and the flour and bread are made by the secondary sector." />
        <Worked steps={names('secondary').map((a) => `${a}: secondary sector.`)} />
        <Mistake>Calling a farmer a manufacturer. The farmer grows a raw material (primary); a factory that processes it is secondary.</Mistake>
      </>,
    ),
  },
  {
    title: 'The tertiary sector',
    content: slide(
      <>
        <Rule>The tertiary sector provides services instead of goods: trade, transport, banking, education and health care. The business sells its skills or its time.</Rule>
        <StepFlow steps={['Shop', 'Bank', 'School']} notes={['Trade', 'Finance', 'Education']} aria="Three kinds of tertiary business: a shop for trade, a bank for finance and a school for education." />
        <Worked steps={names('tertiary').map((a) => `${a}: tertiary sector.`)} />
        <Mistake>Thinking that a shop makes the goods it sells. A shop only sells them, so it provides a service and belongs to the tertiary sector.</Mistake>
      </>,
    ),
  },
  {
    title: 'How the sectors depend on each other',
    content: slide(
      <>
        <Rule>The sectors form a chain. The primary sector supplies raw materials, the secondary sector makes products from them, and the tertiary sector brings them to the customer. Each sector needs the others.</Rule>
        <StepFlow steps={['Wheat farm', 'Flour mill', 'Bakery', 'Shop']} notes={['Primary', 'Secondary', 'Secondary', 'Tertiary']} aria="A chain from a wheat farm (primary) to a flour mill (secondary) to a bakery (secondary) to a shop (tertiary) that sells the bread." />
        <Worked
          steps={[
            'The farmer grows wheat (primary).',
            'The mill grinds it into flour and the bakery bakes bread (secondary).',
            'The shop sells the bread and a taxi brings the staff to work (tertiary).',
            'If the farmer has a bad harvest, the mill, the bakery and the shop are all affected.',
          ]}
        />
        <Mistake>Treating the sectors as separate. A bakery cannot make bread without a farmer, and a farmer needs the shop and the bank to reach customers and manage money.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>In which sector does a fisher who catches hake work?</>,
          <>In which sector does a factory that assembles cars work?</>,
          <>In which sector does a bank work?</>,
        ]}
        answers={[<>The primary sector.</>, <>The secondary sector.</>, <>The tertiary sector (services).</>]}
      />,
    ),
  },
];
