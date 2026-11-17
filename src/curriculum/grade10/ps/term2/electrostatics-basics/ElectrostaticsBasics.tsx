import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { ChargePairs, ShareSpheres } from '../../../../../components/diagrams/charge10/Charge10';
import { QE, chargeFromElectrons, electronsFromCharge, sharedCharge } from '../../../../../components/diagrams/charge10/charge10Helpers';

// Every number comes from charge10Helpers.ts (tested in charge10Helpers.test.ts and g10PsW2T2.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const sci = (x: number) => {
  const e = Math.floor(Math.log10(Math.abs(x)));
  const m = Math.round((x / 10 ** e) * 100) / 100;
  return `${String(m).replace('.', ',')} × 10${String(e).replace(/-/g, '⁻').replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)])}`;
};
const q = chargeFromElectrons(3e10, true);

export const learnSteps: LearnStep[] = [
  {
    title: 'Two kinds of charge',
    content: slide(
      <>
        <Rule>There are two kinds of electric charge, positive and negative. Like charges repel and unlike charges attract. A neutral object has equal amounts of positive and negative charge.</Rule>
        <ChargePairs pairs={[[1, 1], [-1, -1], [1, -1]]} />
        <Worked
          title="Predict the force"
          steps={[
            'Two positively charged spheres repel each other.',
            'A positive and a negative sphere attract each other.',
            'A charged rod can also attract a neutral object, because the charges in the neutral object shift slightly.',
          ]}
        />
        <Mistake>Saying that a neutral object has no charge at all. It has equal positive and negative charge, which cancel.</Mistake>
      </>,
    ),
  },
  {
    title: 'Charging, conductors and insulators',
    content: slide(
      <>
        <Rule>Objects become charged when electrons move from one object to another, for example by rubbing. The object that gains electrons becomes negative and the one that loses them becomes positive. Protons do not move. Conductors let charge flow through them easily, and insulators do not.</Rule>
        <FactCards
          cards={[
            { title: 'Gains electrons', line1: 'the object becomes', line2: 'negatively charged' },
            { title: 'Loses electrons', line1: 'the object becomes', line2: 'positively charged' },
            { title: 'Conductor', line1: 'metals and graphite let', line2: 'charge move through them' },
            { title: 'Insulator', line1: 'plastic, glass and rubber', line2: 'hold charge in place' },
          ]}
          aria="Charging and materials. An object that gains electrons becomes negatively charged. An object that loses electrons becomes positively charged. Conductors such as metals and graphite let charge move through them. Insulators such as plastic, glass and rubber hold charge in place."
        />
        <Worked
          title="Rub a plastic ruler with cloth"
          steps={[
            'Electrons move from the cloth to the ruler.',
            'The ruler has extra electrons, so it is negative. The cloth has lost electrons, so it is positive.',
            'The ruler keeps its charge because plastic is an insulator.',
          ]}
        />
        <Mistake>Saying that protons move when an object is charged. Only electrons are free to move.</Mistake>
      </>,
    ),
  },
  {
    title: 'Conservation and quantisation of charge',
    content: slide(
      <>
        <Rule>The total charge of an isolated system stays the same: charge is conserved. Charge is quantised: any charge is a whole number of electron charges, Q = n × e, where e = 1,6 × 10⁻¹⁹ C. Two identical conducting spheres that touch share their total charge equally.</Rule>
        <ShareSpheres q1={6} q2={-2} after={sharedCharge(6, -2)} />
        <Worked
          title="Calculate with the electron charge"
          steps={[
            `A rod gains 3,00 × 10¹⁰ electrons: Q = 3,00 × 10¹⁰ × 1,6 × 10⁻¹⁹ = ${sci(Math.abs(q))} C. It gained electrons, so Q = −${sci(Math.abs(q))} C.`,
            `A charge of 3,2 × 10⁻¹⁸ C is n = 3,2 × 10⁻¹⁸ ÷ 1,6 × 10⁻¹⁹ = ${electronsFromCharge(3.2e-18)} electrons.`,
            `Spheres with 6 µC and −2 µC touch: each ends with (6 + (−2)) ÷ 2 = ${sharedCharge(6, -2)} µC.`,
          ]}
        />
        <Mistake>Forgetting the sign when two spheres share charge. Add the charges with their signs, then divide by 2.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What happens between two negative charges?</>,
          <>Which particles move when a ruler is charged by rubbing?</>,
          <>How many electrons carry a charge of 3,2 × 10⁻¹⁸ C? (e = 1,6 × 10⁻¹⁹ C)</>,
          <>Two identical spheres with 6 µC and −2 µC touch and are separated. What charge does each have?</>,
        ]}
        answers={[
          <>They repel.</>,
          <>Electrons.</>,
          <>{electronsFromCharge(3.2e-18)}.</>,
          <>{sharedCharge(6, -2)} µC. The value of e is {sci(QE)} C.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What happens between two positive charges?",
    options: ["They attract each other", "They have no effect on each other", "They repel each other", "They cancel and disappear"],
    answer: "They repel each other",
    explanation: "Like charges repel.",
  },
  {
    prompt: "What happens between a positive and a negative charge?",
    options: ["They attract each other", "They repel each other", "They have no effect on each other", "They both become neutral and fall"],
    answer: "They attract each other",
    explanation: "Unlike charges attract.",
  },
  {
    prompt: "What is the charge of an object with equal amounts of positive and negative charge?",
    options: ["It is positive", "It is negative", "It has no protons", "It is neutral"],
    answer: "It is neutral",
    explanation: "Equal and opposite charges cancel.",
  },
  {
    prompt: "Which particles move when an object is charged by rubbing?",
    options: ["Protons", "Electrons", "Neutrons", "Nuclei"],
    answer: "Electrons",
    explanation: "Only electrons are free to move between objects.",
  },
  {
    prompt: "A plastic ruler is rubbed with a cloth and becomes negative. What happened?",
    options: ["It lost electrons to the cloth", "It gained electrons from the cloth", "It gained protons from the cloth", "It lost protons to the cloth"],
    answer: "It gained electrons from the cloth",
    explanation: "Gaining electrons makes an object negative.",
  },
  {
    prompt: "What happens to the cloth that was used to charge the ruler negatively?",
    options: ["It becomes negative", "It stays neutral", "It loses all its charge", "It becomes positive"],
    answer: "It becomes positive",
    explanation: "The cloth lost electrons, so it has more positive than negative charge.",
  },
  {
    prompt: "Which of these is a good conductor of charge?",
    options: ["Copper", "Plastic", "Glass", "Rubber"],
    answer: "Copper",
    explanation: "Metals have free electrons.",
  },
  {
    prompt: "Which of these is a good insulator?",
    options: ["Copper", "Graphite", "Glass", "Aluminium"],
    answer: "Glass",
    explanation: "An insulator holds charge in place.",
  },
  {
    prompt: "What does the quantisation of charge mean?",
    options: ["Charge can have any value", "Charge is always positive", "Charge is created when an object is rubbed", "Charge comes in whole numbers of electron charges"],
    answer: "Charge comes in whole numbers of electron charges",
    explanation: "Any charge is Q = n × e, with n a whole number.",
  },
  {
    prompt: "A rod gains 3,00 × 10¹⁰ electrons. Its charge is 4,8 × 10⁻⁹ C in size. Is the charge positive or negative?",
    options: ["Positive", "Negative", "Neutral", "It depends on the number of protons"],
    answer: "Negative",
    explanation: "Gaining electrons makes the rod negative.",
  },
  {
    prompt: "How many electrons carry a charge of 3,2 × 10⁻¹⁸ C? Use e = 1,6 × 10⁻¹⁹ C.",
    options: ["20", "2", "200", "0,05"],
    answer: "20",
    explanation: "n = 3,2 × 10⁻¹⁸ ÷ 1,6 × 10⁻¹⁹ = 20.",
  },
  {
    prompt: "What is the charge of 5,0 × 10⁹ electrons? Use e = 1,6 × 10⁻¹⁹ C.",
    options: ["−3,2 × 10⁻²⁸ C", "+8,0 × 10⁻¹⁰ C", "−8,0 × 10⁻¹⁰ C", "−1,25 × 10⁻²⁹ C"],
    answer: "−8,0 × 10⁻¹⁰ C",
    explanation: "Q = 5,0 × 10⁹ × 1,6 × 10⁻¹⁹ = 8,0 × 10⁻¹⁰ C, negative because electrons are negative.",
  },
  {
    prompt: "Two identical metal spheres carry 6 µC and −2 µC. They touch and are then separated. What is the charge on each?",
    options: ["+4 µC", "−2 µC", "+2 µC", "+8 µC"],
    answer: "+2 µC",
    explanation: "The total is 6 + (−2) = 4 µC, shared equally gives 2 µC each.",
  },
  {
    prompt: "Two identical metal spheres carry −8 µC and 0 µC. They touch and are separated. What is the charge on each?",
    options: ["−4 µC", "−8 µC", "+4 µC", "0 µC"],
    answer: "−4 µC",
    explanation: "The total of −8 µC is shared equally.",
  },
];

const ElectrostaticsBasics = () => (
  <CapsSubjectTopic
    title="Electrostatics Basics"
    subtitle="Two kinds of charge, conductors and insulators, conservation and quantisation of charge"
    learnSteps={learnSteps}
    task="gr10-electrostatics-basics-t2"
    bank={bank}
    apiPath="/api/caps/ps"
  />
);

export default ElectrostaticsBasics;
