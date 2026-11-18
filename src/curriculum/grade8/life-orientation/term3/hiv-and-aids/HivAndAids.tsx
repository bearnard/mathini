import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'What HIV and AIDS are',
    content: slide(
      <>
        <Rule>HIV is the Human Immunodeficiency Virus. It attacks the immune system, the part of the body that fights infections. AIDS is the stage when the immune system has become so weak that the body cannot fight serious infections. A person can be HIV-positive for many years without having AIDS, and with treatment can stay healthy.</Rule>
        <FactCards
          cards={[
            { title: 'HIV', line1: 'a virus that attacks', line2: 'the immune system' },
            { title: 'Immune system', line1: 'the body’s defence', line2: 'against infections' },
            { title: 'AIDS', line1: 'a very weak immune', line2: 'system, in a later stage' },
            { title: 'Treatment', line1: 'keeps people with HIV', line2: 'healthy for many years' },
          ]}
          aria="What HIV and AIDS are. HIV is a virus that attacks the immune system. The immune system is the body's defence against infections. AIDS is a later stage with a very weak immune system. Treatment keeps people with HIV healthy for many years."
        />
        <Worked
          title="HIV or AIDS?"
          steps={[
            'A person tests positive for the virus: the person has HIV.',
            'Taking treatment every day, the person stays healthy and does not develop AIDS.',
            'AIDS is the late stage that develops when HIV is untreated for a long time.',
          ]}
        />
        <Mistake>Using HIV and AIDS as if they mean the same thing. HIV is the virus and AIDS is a later stage.</Mistake>
      </>,
    ),
  },
  {
    title: 'How HIV is and is not passed on',
    content: slide(
      <>
        <Rule>HIV is passed on through certain body fluids: blood, semen, vaginal fluids and breast milk. This can happen through sex without a condom, through sharing needles or other sharp objects that have blood on them, and from a mother to her baby. HIV is not passed on by hugging, touching, shaking hands, sharing food or plates, coughing, mosquitoes, toilets or swimming pools.</Rule>
        <FactCards
          cards={[
            { title: 'Can pass on', line1: 'blood, semen, vaginal', line2: 'fluids and breast milk' },
            { title: 'Ways', line1: 'sex without a condom,', line2: 'shared needles, mother to baby' },
            { title: 'Cannot pass on', line1: 'hugging, shaking hands,', line2: 'sharing food or plates' },
            { title: 'Also not', line1: 'mosquitoes, toilets', line2: 'and swimming pools' },
          ]}
          aria="How HIV is and is not passed on. It can pass on through blood, semen, vaginal fluids and breast milk, by sex without a condom, shared needles and from mother to baby. It cannot pass on by hugging, shaking hands or sharing food or plates, or by mosquitoes, toilets or swimming pools."
        />
        <Worked
          title="True or false?"
          steps={[
            '"You can get HIV from sharing a plate": false.',
            '"You can get HIV from a mosquito bite": false.',
            '"Blood on a shared needle can pass on HIV": true, which is why needles must never be shared.',
          ]}
        />
        <Mistake>Fearing a person who is HIV-positive in class or at home. Everyday contact is safe, so there is no reason to avoid anyone.</Mistake>
      </>,
    ),
  },
  {
    title: 'Prevention, testing and treatment',
    content: slide(
      <>
        <Rule>You can prevent HIV by waiting to have sex, by using a condom correctly if you do have sex, by never sharing needles, and by wearing gloves or covering cuts when helping with blood. A test at a clinic, with counselling, shows whether a person has HIV. Antiretroviral treatment (ART), taken every day, keeps the virus under control and keeps people healthy. A healthy diet, rest, exercise and a positive attitude also help.</Rule>
        <StepFlow steps={['Know the facts.', 'Test at a clinic.', 'Take treatment every day.', 'Eat well, rest and stay active.']} aria="Four steps in managing HIV: know the facts, test at a clinic, take treatment every day, and eat well, rest and stay active." />
        <Worked
          title="Manage health with HIV"
          steps={[
            'A person tests positive at the clinic and receives counselling.',
            'The clinic provides antiretroviral treatment, which the person takes every day.',
            'With treatment, healthy food and rest, the person can work, study and live a long life.',
          ]}
        />
        <Mistake>Stopping treatment when you feel well. Treatment must be taken every day, or the virus can become active again.</Mistake>
      </>,
    ),
  },
  {
    title: 'Caring and ending stigma',
    content: slide(
      <>
        <Rule>Stigma is unfair treatment of people because of their HIV status. It is wrong, and the Constitution protects the dignity of all people. People living with HIV need kindness, support and respect, and a person&rsquo;s test result is private. You can help by sharing true facts, by not gossiping, and by supporting a friend or family member who needs care. For information you can call the National AIDS Helpline on 0800 012 322.</Rule>
        <FactCards
          cards={[
            { title: 'Stigma', line1: 'unfair treatment based', line2: 'on a person’s status' },
            { title: 'Privacy', line1: 'a result belongs to', line2: 'the person' },
            { title: 'Support', line1: 'care, kindness and', line2: 'help with treatment' },
            { title: 'Help', line1: 'National AIDS Helpline', line2: '0800 012 322' },
          ]}
          aria="Caring and ending stigma. Stigma is unfair treatment based on a person's status. Privacy: a result belongs to the person. Support: care, kindness and help with treatment. Help: the National AIDS Helpline on 0800 012 322."
        />
        <Worked
          title="Respond with care"
          steps={[
            'A classmate hears that a neighbour is HIV-positive and wants to avoid her.',
            'You explain that HIV is not passed on by everyday contact, and that gossip hurts.',
            'You continue to be her friend and respect her privacy.',
          ]}
        />
        <Mistake>Telling other people someone&rsquo;s HIV status. It is private and it is up to the person to share it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does HIV attack in the body?</>,
          <>Name one way in which HIV cannot be passed on.</>,
          <>What does antiretroviral treatment do?</>,
          <>Why is it wrong to gossip about someone&rsquo;s HIV status?</>,
        ]}
        answers={[
          <>The immune system.</>,
          <>For example by hugging, sharing food or mosquito bites.</>,
          <>It keeps the virus under control, so people stay healthy.</>,
          <>It is private, and gossip leads to stigma.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does HIV stand for?",
    options: ["Human Infection Vaccine", "High Immune Volume", "Human Immunodeficiency Virus", "Health Insurance Virus"],
    answer: "Human Immunodeficiency Virus",
    explanation: "HIV is a virus that attacks the immune system.",
  },
  {
    prompt: "Which part of the body does the HI virus weaken?",
    options: ["The immune system", "The bones", "The eyes", "The hair"],
    answer: "The immune system",
    explanation: "The immune system is the body's defence against infections.",
  },
  {
    prompt: "What is the difference between HIV and AIDS?",
    options: ["They are two names for one medicine", "AIDS is a cure for HIV", "AIDS is a kind of flu", "AIDS is a later stage when the body is very weak"],
    answer: "AIDS is a later stage when the body is very weak",
    explanation: "HIV is the virus, and AIDS is the stage of a severely weakened immune system.",
  },
  {
    prompt: "Which of these can pass on HIV?",
    options: ["A hug", "Blood on a shared needle", "Sharing a plate", "A mosquito bite"],
    answer: "Blood on a shared needle",
    explanation: "Blood can carry HIV, so needles must never be shared.",
  },
  {
    prompt: "Which of these does NOT pass on HIV?",
    options: ["Sharing needles", "Sharing food or plates", "Sex without a condom", "Birth from an untreated mother"],
    answer: "Sharing food or plates",
    explanation: "Everyday contact such as sharing food is safe.",
  },
  {
    prompt: "Can you get HIV from a mosquito?",
    options: ["Yes, from any bite", "Yes, in summer only", "Yes, in water", "No"],
    answer: "No",
    explanation: "HIV is not passed on by mosquitoes.",
  },
  {
    prompt: "Which body fluid can carry HIV?",
    options: ["Blood", "Tears", "Sweat", "Saliva from a hug"],
    answer: "Blood",
    explanation: "Blood, semen, vaginal fluids and breast milk can carry HIV.",
  },
  {
    prompt: "Which is a way to prevent HIV?",
    options: ["Sharing a toothbrush with blood", "Avoiding people who are HIV-positive", "Never sharing needles", "Skipping a clinic visit"],
    answer: "Never sharing needles",
    explanation: "Not sharing needles or sharp objects prevents contact with infected blood.",
  },
  {
    prompt: "Where can a person get an HIV test with counselling?",
    options: ["At a shop", "At a bus stop", "At a stadium", "At a clinic"],
    answer: "At a clinic",
    explanation: "Clinics provide testing with counselling.",
  },
  {
    prompt: "How does ART help a person who has HIV?",
    options: ["It cures the person for ever", "It keeps the virus under control", "It makes the person's test negative", "It is a vitamin for energy"],
    answer: "It keeps the virus under control",
    explanation: "With ART, people stay healthy and can live a long life.",
  },
  {
    prompt: "Why must treatment be taken every day?",
    options: ["Or the virus can become active again", "Because it tastes better each day", "Because of a rule at the school", "Because it is only for rainy days"],
    answer: "Or the virus can become active again",
    explanation: "Skipping treatment lets the virus multiply.",
  },
  {
    prompt: "Which of these helps a person with HIV to stay healthy?",
    options: ["Avoiding all food", "Staying awake at night", "Healthy food, rest and treatment", "Stopping medicine when well"],
    answer: "Healthy food, rest and treatment",
    explanation: "Healthy living supports treatment.",
  },
  {
    prompt: "Why should a neighbour's test result stay private?",
    options: ["It always makes the person healthier", "It is good for friendship", "It is private and leads to stigma", "It is a school duty"],
    answer: "It is private and leads to stigma",
    explanation: "A result belongs to the person.",
  },
  {
    prompt: "Which number is the National AIDS Helpline?",
    options: ["0800 012 322", "0800 428 428", "116", "10111"],
    answer: "0800 012 322",
    explanation: "The National AIDS Helpline gives information and support.",
  },
];

const HivAndAids = () => (
  <CapsSubjectTopic
    title="HIV and AIDS: Facts, Treatment and Caring"
    subtitle="What HIV and AIDS are, how HIV is and is not passed on, prevention, testing, treatment and ending stigma"
    learnSteps={learnSteps}
    task="gr8-hiv-and-aids-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default HivAndAids;
