import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Environmental health and pollution',
    content: slide(
      <>
        <Rule>Environmental health is how our surroundings affect human wellbeing. Pollution can harm people, animals and ecosystems.</Rule>
        <Hub centre="Nature" spokes={['Air', 'Water', 'Land']} aria="A circle labelled Nature with three parts around it that pollution can harm: air, water and land." />
        <Worked
          title="Litter near a school drain"
          steps={[<>Litter blocks the drain.</>, <>Dirty water collects and the area becomes unhealthy.</>, <>Animals can be harmed by what they eat or get tangled in.</>, <>Clearing the litter protects people and animals.</>]}
        />
        <Mistake>Thinking pollution only harms nature. It also affects people, because a dirty environment can make people unwell.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reducing plastic and waste',
    content: slide(
      <>
        <Rule>Cut plastic pollution with the three Rs: reduce what you use, reuse containers, and recycle correctly. Labelled bins and awareness routines are a good first step for a school that wants less litter.</Rule>
        <StepFlow steps={['Reduce: use less plastic.', 'Reuse: refill bottles and containers.', 'Recycle: sort into the right bin.']} aria="Three steps in order: reduce, reuse, recycle." />
        <Worked
          title="A plastic bottle"
          steps={[<>Reduce: bring a refillable bottle.</>, <>Reuse: refill it again and again.</>, <>Recycle: when it is worn out, put it in the recycling bin.</>]}
        />
        <Mistake>Putting every kind of waste in one bin, or thinking recycling means you can use as much plastic as you like. Reduce and reuse come first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Saving water',
    content: slide(
      <>
        <Rule>Fresh water is limited. Water conservation protects limited water resources for everyone. Conservation means protecting natural resources through responsible use.</Rule>
        <Hub centre="Save water" spokes={['Fix leaks', 'Close taps', 'Reuse water', 'Report waste']} aria="A circle labelled Save water with four actions around it: fix leaks, close taps, reuse water and report waste." />
        <Worked
          title="Saving water at school"
          steps={[<>Close taps properly after washing.</>, <>Report leaking taps to a teacher.</>, <>Reuse water, for example for the school garden.</>]}
        />
        <Mistake>Thinking water will never run out, or that you only need to save it when there is a drought. Everyone shares limited water, every day.</Mistake>
      </>,
    ),
  },
  {
    title: 'Taking action in your community',
    content: slide(
      <>
        <Rule>Learners can join clean-up activities and avoid littering. If you see illegal dumping, report it through the right school or community channel.</Rule>
        <StepFlow steps={['Spot the dumping.', 'Keep away from unknown waste.', 'Tell a teacher or report it to the municipality.', 'Check that it was cleared.']} aria="Four steps for illegal dumping in order: spot it, keep away from unknown waste, tell a teacher or report it to the municipality, check that it was cleared." />
        <Worked
          title="Rubbish dumped next to the school field"
          steps={[<>Do not touch it. It may be dangerous.</>, <>Tell a teacher where it is.</>, <>The school or community reports it through the right channel.</>, <>Join a supervised clean-up afterwards.</>]}
        />
        <Mistake>Clearing unknown waste with bare hands, or doing nothing. Report it and take part in supervised clean-ups.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is environmental health?" answer="How our surroundings affect human wellbeing." />
        <Check question="Name one action that reduces plastic pollution." answer="Reusing containers and recycling correctly, and using less plastic in the first place." />
        <Check question="Why is water conservation important?" answer="It protects limited water resources for everyone." />
        <Check question="What should you do when you see illegal dumping, and how can you keep shared spaces clean?" answer="Report it through the right school or community channel. Join clean-up activities and avoid littering." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which action helps reduce plastic pollution?',
    options: [
      'Reusing containers and recycling correctly',
      'Throwing plastic into storm drains',
      'Burning waste near homes',
      'Leaving litter after break time',
    ],
    answer: 'Reusing containers and recycling correctly',
    explanation: 'Reducing and recycling plastic lowers pollution in streets and waterways.',
  },
  {
    prompt: 'Why is water conservation important?',
    options: ['It protects limited water resources for everyone', 'It matters only on the day of the sports day', 'It is not needed in communities', 'It means that people avoid washing'],
    answer: 'It protects limited water resources for everyone',
    explanation: 'Saving water supports health, sanitation, and long-term sustainability.',
  },
  {
    prompt: 'What is environmental health?',
    options: ['How our surroundings affect human wellbeing', 'A list of the rules for an exam', 'A type of app for a smartphone', 'A forecast of the weather and nothing more'],
    answer: 'How our surroundings affect human wellbeing',
    explanation: 'Clean air, water, and spaces directly influence health outcomes.',
  },
  {
    prompt: 'A school wants less litter. What is the best first step?',
    options: [
      'Set up labelled bins and awareness routines',
      'Ignore litter until term end',
      'Close the playground permanently',
      'Remove all waste bins',
    ],
    answer: 'Set up labelled bins and awareness routines',
    explanation: 'Visible systems and habits encourage cleaner behaviour.',
  },
  {
    prompt: 'Which option is an example of conservation?',
    options: ['Protecting natural resources through responsible use', 'Using up resources as fast as possible', 'Cutting down trees for convenience', 'Wasting electricity on purpose'],
    answer: 'Protecting natural resources through responsible use',
    explanation: 'Conservation balances present needs with future needs.',
  },
  {
    prompt: 'How can you help keep shared spaces clean?',
    options: ['Join clean-up activities and avoid littering', 'Leave the rubbish for someone else to clear', 'Damage the public facilities', 'Stop others from reporting problems'],
    answer: 'Join clean-up activities and avoid littering',
    explanation: 'Participation and accountability improve community spaces.',
  },
  {
    prompt: 'Which statement about pollution is correct?',
    options: [
      'Pollution can harm people, animals, and ecosystems',
      'Pollution only affects distant countries',
      'Pollution has no link to health',
      'Pollution disappears on its own immediately',
    ],
    answer: 'Pollution can harm people, animals, and ecosystems',
    explanation: 'Pollution has physical, social, and environmental impacts.',
  },
  {
    prompt: 'What should you do when you see illegal dumping?',
    options: ['Report it through the right school or community channel', 'Ignore it every time that you see it', 'Dump more waste close by', 'Confront the people in an aggressive way'],
    answer: 'Report it through the right school or community channel',
    explanation: 'Reporting helps authorities respond safely and effectively.',
  },
];

const SocialAndEnvironmentalResponsibility = () => (
  <CapsSubjectTopic
    title="Social and Environmental Responsibility"
    subtitle="Environmental health, pollution, water, waste, conservation, and local action"
    learnSteps={learnSteps}
    task="gr8-social-and-environmental-responsibility-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default SocialAndEnvironmentalResponsibility;
