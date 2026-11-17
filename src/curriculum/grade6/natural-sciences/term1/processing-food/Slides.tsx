import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { CardList, StepList } from '../../../../../components/diagrams/g6nst/G6Nst';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Why we process food',
    content: slide(
      <>
        <Rule>Food processing changes a raw material into a food product. We process food to make it edible, to make it last longer and to improve its nutrients.</Rule>
        <CardList
          cards={[
            { title: 'Make it edible', line1: 'cooking: maize meal', line2: 'becomes pap' },
            { title: 'Make it last longer', line1: 'preserving: fresh fruit', line2: 'becomes dried fruit' },
            { title: 'Improve nutrients', line1: 'fermenting: milk', line2: 'becomes maas' },
          ]}
          aria="Three reasons for processing food. To make it edible, for example cooking maize meal to make pap. To make it last longer, for example drying fresh fruit. To improve its nutrients, for example fermenting milk to make maas."
        />
        <Worked
          title="From raw material to product"
          steps={[
            'The raw material is the food as it comes from the farm or the veld, such as maize or milk.',
            'The processing is what we do to it: grinding, cooking, drying or fermenting.',
            'The product is the food we end up with, such as maize meal, pap or maas.',
          ]}
        />
        <Mistake>Thinking that processing food always spoils it. Many processed foods, such as cooked pap and bread, are safe and good to eat.</Mistake>
      </>,
    ),
  },
  {
    title: 'Combining and cooking',
    content: slide(
      <>
        <Rule>Combining means mixing ingredients together. Cooking means heating food. Both are ways to process food and make it edible.</Rule>
        <StepList
          steps={[
            { title: 'Combine', note: 'flour, water and yeast' },
            { title: 'Mix and rest', note: 'dough rises and gets soft' },
            { title: 'Cook', note: 'bake in a hot oven' },
            { title: 'Product', note: 'bread' },
          ]}
          aria="Four steps in making bread. First combine flour, water and yeast. Then mix and let the dough rest so that it rises. Then cook it by baking in a hot oven. The product is bread."
        />
        <Worked
          title="Making bread"
          steps={[
            'Combine the ingredients: flour, water and yeast.',
            'Leave the dough to rise.',
            'Bake it. The heat cooks the dough and makes it firm and safe to eat.',
          ]}
        />
        <Mistake>Eating raw dough because it is already mixed. Cooking is the step that makes many foods safe and soft enough to eat.</Mistake>
      </>,
    ),
  },
  {
    title: 'Keeping food for longer',
    content: slide(
      <>
        <Rule>Freezing, drying, salting and pickling are ways to preserve food, so that it lasts longer before it goes bad.</Rule>
        <CardList
          cards={[
            { title: 'Freezing', line1: 'cold stops germs', line2: 'growing: frozen peas' },
            { title: 'Drying', line1: 'takes out the water:', line2: 'dried fruit, biltong' },
            { title: 'Salting', line1: 'salt pulls out water:', line2: 'salted fish' },
            { title: 'Pickling', line1: 'vinegar keeps food:', line2: 'pickled cucumbers' },
          ]}
          aria="Four ways to keep food longer. Freezing, where the cold stops germs growing, for example frozen peas. Drying, which takes out the water, for example dried fruit and biltong. Salting, where salt pulls out water, for example salted fish. Pickling, where vinegar keeps the food, for example pickled cucumbers."
        />
        <Worked
          title="Biltong: an indigenous way to keep meat"
          steps={[
            'Salt is rubbed into strips of meat.',
            'The strips are hung in a dry, airy place and dry out.',
            'With the water gone, germs cannot grow easily, so the meat lasts for a long time.',
          ]}
        />
        <Mistake>Thinking that freezing kills all the germs. Freezing only stops them from growing, and they can start again when the food thaws.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fermenting, and nutrients lost',
    content: slide(
      <>
        <Rule>Fermenting is when tiny living things such as bacteria and yeast change food. It can make food last longer and improve its nutrients. During processing, many foods lose some of their nutrients.</Rule>
        <CardList
          cards={[
            { title: 'Fermenting milk', line1: 'milk becomes maas', line2: '(amasi) or yoghurt' },
            { title: 'Fermenting maize', line1: 'maize porridge becomes', line2: 'the drink mageu' },
            { title: 'Losing nutrients', line1: 'long boiling in lots of', line2: 'water washes vitamins out' },
          ]}
          aria="Fermenting and losing nutrients. Fermenting milk makes maas, also called amasi, or yoghurt. Fermenting maize porridge makes the drink mageu. Boiling vegetables for a long time in a lot of water washes some vitamins out."
        />
        <Worked
          title="Keep more nutrients when cooking vegetables"
          steps={[
            'Cook them for a short time.',
            'Use only a little water.',
            'Drink the cooking water or use it in soup, so the vitamins are not thrown away.',
          ]}
        />
        <Mistake>Thinking that all processing adds nutrients. Fermenting can improve nutrients, but long cooking and peeling can remove some.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two reasons why we process food.</>,
          <>Which ways of keeping food use salt or vinegar?</>,
          <>What do tiny living things such as bacteria do to milk when it is fermented?</>,
          <>How can you keep more vitamins when you cook vegetables?</>,
        ]}
        answers={[
          <>To make it edible, to make it last longer, or to improve its nutrients.</>,
          <>Salting uses salt and pickling uses vinegar.</>,
          <>They change it into a new food such as maas (amasi) or yoghurt.</>,
          <>Cook them for a short time in a little water, and use the cooking water.</>,
        ]}
      />,
    ),
  },
];
