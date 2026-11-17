import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/ems/Ems9dPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Acts of cruelty to animals',
    content: slide(
      <>
        <Rule>Cruelty to animals is any act that causes an animal pain, fear or suffering. In South Africa, it is against the law to be cruel to animals.</Rule>
        <StepFlow steps={['Hurting', 'Neglect', 'Abandoning']} notes={['Hitting, kicking', 'No food or water', 'Leaving it alone']} aria="Three kinds of cruelty to animals: hurting an animal, neglecting it by not giving food, water or shelter, and abandoning it." />
        <Worked
          steps={[
            <><strong>Hurting:</strong> hitting, kicking or throwing things at an animal.</>,
            <><strong>Neglect:</strong> not giving an animal food, clean water, shelter or a vet when it is sick.</>,
            <><strong>Abandoning:</strong> leaving a pet alone or dumping it on the road.</>,
            <><strong>Other cruelty:</strong> keeping an animal chained or shut in the hot sun, or making animals fight for fun.</>,
          ]}
        />
        <Mistake>Thinking that cruelty means only hitting. Not giving food, water and shelter is also cruelty.</Mistake>
      </>,
    ),
  },
  {
    title: 'Taking care of animals',
    content: slide(
      <>
        <Rule>An animal that is kept as a pet depends on people for everything it needs. Taking care of it is a responsibility.</Rule>
        <Worked
          title="What a pet needs"
          steps={[
            <>Food and clean water every day.</>,
            <>A safe, clean place to sleep that is out of the sun, wind and rain.</>,
            <>Exercise and gentle attention.</>,
            <>A visit to the vet when it is sick, and vaccinations to protect it from disease.</>,
          ]}
        />
        <Mistake>Wanting a pet only because it is cute. A pet needs care for its whole life, so ask a parent or caregiver before you choose one.</Mistake>
      </>,
    ),
  },
  {
    title: 'Protecting animals and places of safety',
    content: slide(
      <>
        <Rule>If you see an animal that is being hurt or neglected, do not try to deal with it alone. Tell a trusted adult, who can contact a place of safety.</Rule>
        <StepFlow steps={['See', 'Tell an adult', 'Report']} notes={['Cruelty or neglect', 'Parent or teacher', 'SPCA or police']} aria="Three steps to protect an animal: see the cruelty, tell a trusted adult, and the adult reports it to the SPCA or the police." />
        <Worked
          title="Places of safety"
          steps={[
            <>The <strong>SPCA</strong> (Society for the Prevention of Cruelty to Animals) takes in hurt and neglected animals and can act against cruelty.</>,
            <>Animal shelters look after stray and abandoned pets until a new home is found.</>,
            <>Wildlife rehabilitation centres and game reserves care for hurt wild animals.</>,
          ]}
        />
        <Mistake>Taking a wild animal home as a pet. Wild animals belong in the wild, and a centre should care for a hurt one.</Mistake>
      </>,
    ),
  },
  {
    title: 'Meeting strange animals safely',
    content: slide(
      <>
        <Rule>Being kind to animals also means being safe around them. An animal that is frightened, hurt or guarding its young may bite.</Rule>
        <Worked
          steps={[
            <>Do not go near a strange dog, especially one that growls or is eating.</>,
            <>Ask the owner before you pat an animal. Let it sniff you first.</>,
            <>Do not tease an animal or pull its tail or ears.</>,
            <>If an animal is hurt or acting strangely, stay away and tell an adult.</>,
          ]}
        />
        <Mistake>Running up to hug a strange animal. Move slowly and ask an adult first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give two acts of cruelty to animals.</>,
          <>Name three things that a pet dog needs.</>,
          <>Name one place of safety for animals.</>,
          <>What should you do if you see an animal being hurt?</>,
        ]}
        answers={[
          <>Any two of: hitting or kicking, not giving food or water, abandoning, or chaining it in the hot sun.</>,
          <>Any three of: food, water, shelter, exercise, attention, a vet.</>,
          <>The SPCA, an animal shelter or a wildlife centre.</>,
          <>Tell a trusted adult, who can report it to the SPCA or the police.</>,
        ]}
      />,
    ),
  },
];
