import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/ems/Ems9dPictures';
import { HEALTH, HELP_NUMBERS } from '../../_shared/psw6Facts';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What first aid is',
    content: slide(
      <>
        <Rule>First aid is the first help we give to a person who is hurt or ill, before a doctor or an ambulance arrives. The most important steps are to stay safe, to stay calm and to get an adult and help.</Rule>
        <StepFlow steps={['Stay safe', 'Get help', 'Help']} notes={['Look around', 'Adult, 10177', 'Calm, kind']} aria="Three first aid steps: stay safe by looking around first, get an adult and call for help, and then help the person calmly and kindly." />
        <Worked
          title="Getting help"
          steps={[
            <>Shout for an adult nearby.</>,
            <>Ambulance: phone {HELP_NUMBERS.ambulance.number}, or {HELP_NUMBERS.cellphoneEmergency.number} from a cell phone.</>,
            <>Say where you are, what happened and how many people are hurt.</>,
            <>Stay with the person and keep them calm until help comes.</>,
          ]}
        />
        <Mistake>Thinking that a child must treat a serious injury alone. For anything serious, get an adult and call for help first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cuts, bleeding and bruises',
    content: slide(
      <>
        <Rule>For a small cut, rinse it with clean water and cover it with a clean plaster. For bleeding, press firmly on the wound with a clean cloth and get an adult. For a bruise, hold something cold, wrapped in a cloth, on it for a short time.</Rule>
        <StepFlow steps={['Rinse', 'Press', 'Cover']} notes={['Clean water', 'Clean cloth', 'Plaster']} aria="Three steps for a cut: rinse it with clean water, press on it with a clean cloth if it bleeds, and cover it with a clean plaster." />
        <Worked
          title="A cut that bleeds"
          steps={[
            <>Call an adult at once.</>,
            <>Press firmly on the cut with a clean cloth.</>,
            <>If the cloth gets wet with blood, put another cloth on top and keep pressing.</>,
            <>If the bleeding is heavy or does not stop, call for emergency help.</>,
            <>Wash your hands with soap and water afterwards.</>,
          ]}
        />
        <Mistake>Touching someone else&rsquo;s blood with bare hands when a clean cloth is nearby. Use a cloth and wash your hands afterwards.</Mistake>
      </>,
    ),
  },
  {
    title: 'Burns, scalds and sunburn',
    content: slide(
      <>
        <Rule>A burn comes from fire or something hot. A scald comes from hot liquid or steam. Cool a burn or a scald under cool running water for at least {HEALTH.burnCoolMinutes} minutes, and get an adult.</Rule>
        <StepFlow steps={['Cool', 'Cover', 'Get help']} notes={[`${HEALTH.burnCoolMinutes} minutes`, 'Loosely', 'If it is big']} aria={`Three steps for a burn: cool it under cool running water for at least ${HEALTH.burnCoolMinutes} minutes, cover it loosely with a clean cloth, and get help if the burn is big or deep.`} />
        <Worked
          title="Burns and sunburn"
          steps={[
            <>Hold the burn under cool running water for at least {HEALTH.burnCoolMinutes} minutes.</>,
            <>Cover it loosely with a clean cloth.</>,
            <>Get medical help if the burn is big, deep or on the face.</>,
            <>Sunburn: get out of the sun, cool the skin with a cool wet cloth and drink water.</>,
            <>To prevent sunburn, wear a hat, use sunscreen and stay in the shade in the middle of the day.</>,
          ]}
        />
        <Mistake>Putting butter, toothpaste or ice on a burn. These can do harm. Use cool running water.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stings, bites and poisoning',
    content: slide(
      <>
        <Rule>For a sting or a bite, stay calm and get an adult. For a snake bite, keep the person still and get to a hospital. If someone swallows something poisonous, get an adult at once. Never make the person vomit.</Rule>
        <StepFlow steps={['Calm', 'Adult', 'Hospital']} notes={['Keep still', 'At once', 'Or call 10177']} aria="Three steps for a snake bite or poisoning: keep the person calm and still, get an adult at once, and get to a hospital or call the ambulance on 10177." />
        <Worked
          title="What to do"
          steps={[
            <><strong>Bee sting:</strong> an adult can scrape the sting out. Cool the place with a wet cloth.</>,
            <><strong>Serious allergy</strong> (a swollen face or trouble breathing): call {HELP_NUMBERS.ambulance.number} at once.</>,
            <><strong>Snake bite:</strong> keep the person still and calm. Do not cut the bite or suck it. Get to a hospital.</>,
            <><strong>Dog bite:</strong> wash it with soap and water and tell an adult.</>,
            <><strong>Poison:</strong> tell an adult. Keep the container. Phone the Poisons Information Helpline on {HELP_NUMBERS.poisons.number} or {HELP_NUMBERS.ambulance.number}.</>,
          ]}
        />
        <Mistake>Making a person vomit after poisoning. That can cause more harm. Get help instead.</Mistake>
      </>,
    ),
  },
  {
    title: 'Choking and when to get help',
    content: slide(
      <>
        <Rule>A person is choking when food or an object blocks the airway. If the person can cough, let them cough. If they cannot cough, speak or breathe, shout for an adult and call {HELP_NUMBERS.ambulance.number} straight away.</Rule>
        <StepFlow steps={['Coughs', 'Cannot', 'Call']} notes={['Let them cough', 'Cough or speak', 'Adult, 10177']} aria="What to do about choking: if the person can cough, let them cough; if they cannot cough, speak or breathe, shout for an adult and call 10177." />
        <Worked
          title="Always get help for"
          steps={[
            <>Heavy bleeding or a deep cut.</>,
            <>A big or deep burn.</>,
            <>A person who is choking and cannot cough or speak.</>,
            <>A person who is not awake or not breathing normally.</>,
            <>A snake bite, a poisoning or a serious allergy.</>,
          ]}
        />
        <Mistake>Waiting to see if a serious problem gets better. If you are not sure, get an adult and call for help.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the first thing to do when a person is badly hurt?</>,
          <>How long must a burn be cooled under running water?</>,
          <>What must you not do after someone swallows poison?</>,
          <>Which number do you phone for an ambulance?</>,
        ]}
        answers={[
          <>Stay safe, shout for an adult and call for help.</>,
          <>At least {HEALTH.burnCoolMinutes} minutes.</>,
          <>Make the person vomit.</>,
          <>{HELP_NUMBERS.ambulance.number}, or {HELP_NUMBERS.cellphoneEmergency.number} from a cell phone.</>,
        ]}
      />,
    ),
  },
];
