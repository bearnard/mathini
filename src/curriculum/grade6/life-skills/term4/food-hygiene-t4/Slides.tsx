import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/ems/Ems9dPictures';
import { HEALTH } from '../../_shared/psw6Facts';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Safe and harmful food',
    content: slide(
      <>
        <Rule>Food hygiene means keeping food clean and safe to eat. Food is safe when it is fresh, clean and in date. Food can be harmful when it is old, mouldy, dirty or not cooked enough, because germs or poisons can make us ill.</Rule>
        <StepFlow steps={['Fresh', 'Clean', 'In date']} notes={['Smells good', 'Washed', 'Check label']} aria="Three signs that food is safe: it is fresh, it is clean and washed, and it is in date." />
        <Worked
          title="Is it safe?"
          steps={[
            <><strong>Safe:</strong> fresh fruit and vegetables that are washed, milk in date, meat that is well cooked.</>,
            <><strong>Harmful:</strong> bread with mould, food that smells bad, food past its date, raw or half-cooked chicken.</>,
            <><strong>Take care with:</strong> tins that are swollen or badly dented.</>,
            <>Some people are allergic to foods such as peanuts, so ask before you share food.</>,
          ]}
        />
        <Mistake>Cutting off the mouldy part and eating the rest. Germs and poisons can be all through the food, so throw it away.</Mistake>
      </>,
    ),
  },
  {
    title: 'Preparing food safely',
    content: slide(
      <>
        <Rule>Clean hands and a clean kitchen keep food safe. Wash your hands with soap and water for about {HEALTH.handWashSeconds} seconds before you touch food, and wash fruit and vegetables.</Rule>
        <StepFlow steps={['Wash', 'Separate', 'Cook']} notes={['Hands, food', 'Raw and ready', 'Right through']} aria="Three rules for preparing food: wash your hands and the food, keep raw meat apart from other food, and cook meat right through." />
        <Worked
          title="In the kitchen"
          steps={[
            <>Wash your hands with soap and water for about {HEALTH.handWashSeconds} seconds.</>,
            <>Wash fruit and vegetables.</>,
            <>Use a different board and knife for raw meat, or wash them well afterwards.</>,
            <>Cook chicken and meat right through, with no pink inside.</>,
            <>Cover cuts, and do not prepare food when you have a tummy bug.</>,
          ]}
        />
        <Mistake>Wiping your hands on a cloth instead of washing them. Raw meat can leave germs on your hands, and the cloth spreads them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Storing food',
    content: slide(
      <>
        <Rule>Germs grow fast in warm food. Keep milk, meat and leftovers in the fridge, cover food, and keep dry foods such as rice and flour in closed containers.</Rule>
        <StepFlow steps={['Fridge', 'Cover', 'Dry store']} notes={['Cold food', 'Flies, pests', 'Rice, flour']} aria="Three ways to store food: keep cold food in the fridge, cover food to keep out flies and pests, and keep dry foods in closed containers." />
        <Worked
          title="Storing food well"
          steps={[
            <>Put milk, meat and leftovers in the fridge soon after the meal.</>,
            <>Cover food to keep out flies, which carry germs.</>,
            <>Keep rice, flour and mealie meal in closed containers in a dry, cool place.</>,
            <>Check the date on the label, and use older food first.</>,
          ]}
        />
        <Mistake>Leaving cooked food on the counter for hours in the heat. Germs grow fast, so put leftovers in the fridge.</Mistake>
      </>,
    ),
  },
  {
    title: 'Food-borne diseases',
    content: slide(
      <>
        <Rule>A food-borne disease is an illness that we get from germs or poisons in food or drink. The signs are often tummy ache, vomiting, diarrhoea and sometimes a fever. Typhoid and cholera are serious diseases that can spread through dirty water or food.</Rule>
        <StepFlow steps={['Germs', 'Food', 'Illness']} notes={['Dirty hands', 'Or water', 'Tummy, fever']} aria="How a food-borne disease happens: germs from dirty hands or dirty water get into food, and the person eats it and becomes ill with a tummy ache, vomiting or diarrhoea." />
        <Worked
          title="Prevent it, and get help"
          steps={[
            <>Wash your hands, wash food and drink safe, clean water.</>,
            <>Cook food right through and store it properly.</>,
            <>If you are ill, tell an adult and drink clean water often.</>,
            <>Go to a clinic or doctor if the illness is bad or does not get better, and tell an adult at once if someone is very weak.</>,
          ]}
        />
        <Mistake>Thinking that you can tell by looking that food is safe. Germs cannot be seen, so wash, cook and store food properly.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give two signs that food is not safe to eat.</>,
          <>For about how long must you wash your hands with soap?</>,
          <>Where must milk and leftovers be kept?</>,
          <>What are two signs of a food-borne disease?</>,
        ]}
        answers={[
          <>Any two of: mould, a bad smell, past its date, raw or half-cooked meat.</>,
          <>About {HEALTH.handWashSeconds} seconds.</>,
          <>In the fridge.</>,
          <>Any two of: tummy ache, vomiting, diarrhoea, fever.</>,
        ]}
      />,
    ),
  },
];
