import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ElementCards, PeriodicMini, PropertyCards } from '../../../../../components/diagrams/g7ns/G7Ns';
import { FIRST_20, bySymbol, countOf, groupOf, periodOf } from '../../../../../components/diagrams/g7ns/g7nsMatterEnergy';

// Every table position and count below comes from g7nsMatterEnergy.ts (tested in g7nsMatterEnergy.test.ts and g7NsLessons2.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const names = (c: 'metal' | 'semi-metal' | 'non-metal') => FIRST_20.filter((e) => e.category === c).map((e) => e.symbol).join(', ');

export const learnSteps: LearnStep[] = [
  {
    title: 'The Periodic Table',
    content: slide(
      <>
        <Rule>The Periodic Table is a way of sorting all the elements. An element is a pure substance that cannot be broken down into anything simpler. Dmitri Mendeleev arranged the elements by their properties in the 1860s.</Rule>
        <PeriodicMini show="plain" />
        <Worked
          title="Read one square"
          steps={[
            `Every element has a name, a symbol, an atomic number and a place in the table. Take ${bySymbol('O').name}.`,
            `Its symbol is ${bySymbol('O').symbol} and its atomic number is ${bySymbol('O').z}.`,
            `Its place is period ${periodOf(bySymbol('O').z)} (row) and group ${groupOf(bySymbol('O').z)} (column).`,
            'The first 20 elements are the ones to learn by name and symbol. You need not memorise their atomic numbers.',
          ]}
        />
        <Mistake>Thinking that a symbol is always the first letter of the name. Sodium is Na and potassium is K: symbols come from the element's name in other languages too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Metals, semi-metals and non-metals',
    content: slide(
      <>
        <Rule>The elements form three main groups. Metals are on the left of the table, non-metals are on the far right, and semi-metals sit in between.</Rule>
        <PeriodicMini />
        <Worked
          title={`Count the first ${FIRST_20.length} elements`}
          steps={[
            `Metals: ${names('metal')}. That is ${countOf('metal')}.`,
            `Semi-metals: ${names('semi-metal')}. That is ${countOf('semi-metal')}.`,
            `Non-metals: ${names('non-metal')}. That is ${countOf('non-metal')}.`,
            `Check: ${countOf('metal')} + ${countOf('semi-metal')} + ${countOf('non-metal')} = ${countOf('metal') + countOf('semi-metal') + countOf('non-metal')}.`,
          ]}
        />
        <Mistake>Putting hydrogen with the metals because it is in the first column. Hydrogen is a non-metal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Properties of the three groups',
    content: slide(
      <>
        <Rule>Metals are usually shiny, ductile (can be drawn into wire) and malleable (can be hammered flat). They are solids, except mercury, with high melting and boiling points.</Rule>
        <PropertyCards />
        <Worked
          title="Which group is it?"
          steps={[
            'A shiny solid that can be hammered into a sheet: a metal, like aluminium.',
            'A gas, or a dull solid, with very different properties: a non-metal, like oxygen or sulfur.',
            'A solid with some properties of metals and some of non-metals: a semi-metal, like silicon.',
          ]}
        />
        <Mistake>Saying that all metals are solids. Mercury is a metal that is a liquid at room temperature.</Mistake>
      </>,
    ),
  },
  {
    title: 'Elements at home',
    content: slide(
      <>
        <Rule>Many elements are part of everyday life. We can name where each one sits in the table.</Rule>
        <ElementCards
          cards={[
            { symbol: 'Al', name: 'aluminium', use: 'cans', color: '#fbbf24' },
            { symbol: 'C', name: 'carbon', use: 'pencils', color: '#818cf8' },
            { symbol: 'O', name: 'oxygen', use: 'the air', color: '#818cf8' },
            { symbol: 'Si', name: 'silicon', use: 'chips', color: '#34d399' },
          ]}
        />
        <Worked
          title="Elements you use"
          steps={[
            `Aluminium (${bySymbol('Al').symbol}) in cans and foil: a metal in group ${groupOf(bySymbol('Al').z)}.`,
            `Carbon (${bySymbol('C').symbol}) in charcoal and pencils: a non-metal in group ${groupOf(bySymbol('C').z)}.`,
            `Oxygen (${bySymbol('O').symbol}) in the air we breathe: a non-metal in group ${groupOf(bySymbol('O').z)}.`,
            `Silicon (${bySymbol('Si').symbol}) in sand and computer chips: a semi-metal in group ${groupOf(bySymbol('Si').z)}.`,
          ]}
        />
        <Mistake>Mixing up a substance with an element. Table salt is not on the Periodic Table: it is made of two elements, sodium and chlorine.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is an element?</>,
          <>Which side of the Periodic Table are the metals on?</>,
          <>Name a semi-metal from the first 20 elements.</>,
          <>How many of the first 20 elements are non-metals?</>,
        ]}
        answers={[
          <>A pure substance that cannot be broken down any further.</>,
          <>The left-hand side.</>,
          <>Boron (B) or silicon (Si).</>,
          <>{countOf('non-metal')}.</>,
        ]}
      />,
    ),
  },
];
