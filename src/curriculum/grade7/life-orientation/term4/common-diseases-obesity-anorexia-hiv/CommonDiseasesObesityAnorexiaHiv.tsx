import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Obesity: a health condition, not a shame',
    content: slide(
      <>
        <Rule>Obesity is a condition in which a person has so much body fat that it harms their health. It is linked to poor eating habits, sugary drinks, little physical activity and sometimes to family and medical factors. It can raise the risk of other illnesses such as diabetes. People of every size deserve respect, and teasing or body-shaming is wrong. Healthy habits help: regular meals, vegetables and fruit, water, daily activity and enough sleep.</Rule>
        <FactCards
          cards={[
            { title: 'Causes', line1: 'eating habits, little', line2: 'activity, family factors' },
            { title: 'Risks', line1: 'can lead to diabetes', line2: 'and other illnesses' },
            { title: 'Healthy habits', line1: 'regular meals, water', line2: 'and daily activity' },
            { title: 'Respect', line1: 'no teasing or', line2: 'body-shaming' },
          ]}
          aria="Obesity. Causes: eating habits, little activity and family factors. Risks: can lead to diabetes and other illnesses. Healthy habits: regular meals, water and daily activity. Respect: no teasing or body-shaming."
        />
        <Worked
          title="Support a healthy habit"
          steps={[
            'A friend wants to be more active and eat better.',
            'You offer to walk to school together and to share fruit at break.',
            'You never tease him about his body, because respect helps more than shame.',
          ]}
        />
        <Mistake>Teasing people about their size. It hurts, and it does not help anyone to be healthier.</Mistake>
      </>,
    ),
  },
  {
    title: 'Anorexia: an eating disorder that needs help',
    content: slide(
      <>
        <Rule>Anorexia is a serious illness of the mind and body, in which a person eats far too little because of an intense fear of gaining weight or a distorted view of their body. It is not about vanity. Warning signs include skipping meals, avoiding eating with others, being very worried about food and body shape, withdrawing from friends and feeling tired or weak. With help from a clinic, a counsellor and family, people can recover.</Rule>
        <FactCards
          cards={[
            { title: 'What', line1: 'an illness with a', line2: 'fear of eating and body shape' },
            { title: 'Signs', line1: 'skipping meals, worry', line2: 'about food, withdrawing' },
            { title: 'Not vanity', line1: 'it is a health', line2: 'problem that needs help' },
            { title: 'Help', line1: 'clinic, counsellor, family', line2: 'or Childline 116' },
          ]}
          aria="Anorexia. What: an illness with a fear of eating and body shape. Signs: skipping meals, worry about food and withdrawing. Not vanity: it is a health problem that needs help. Help: clinic, counsellor, family or Childline on 116."
        />
        <Worked
          title="Notice and help"
          steps={[
            'A friend skips lunch every day, says she feels fat and avoids you at break.',
            'You tell her that you care and that you are worried, without judging her.',
            'You help her to talk to a trusted adult, the school counsellor or the clinic, and you can both call Childline on 116.',
          ]}
        />
        <Mistake>Telling a person to &ldquo;just eat&rdquo; or joking about their body. Anorexia is an illness, and kind support and professional help are needed.</Mistake>
      </>,
    ),
  },
  {
    title: 'HIV and AIDS',
    content: slide(
      <>
        <Rule>HIV is a virus that weakens the body&rsquo;s defence against infection, and AIDS is a later stage when the body is very weak. HIV is passed on through certain body fluids, such as blood, and from a mother to her baby; it is not passed on by hugging, sharing food or mosquito bites. A test at a clinic shows whether a person has HIV, and daily treatment keeps people healthy. People living with HIV must be treated with respect, and the National AIDS Helpline is 0800 012 322.</Rule>
        <FactCards
          cards={[
            { title: 'HIV', line1: 'a virus that weakens', line2: 'the defence against illness' },
            { title: 'Passed on', line1: 'through blood and other', line2: 'body fluids, mother to baby' },
            { title: 'Not passed on', line1: 'hugging, sharing food,', line2: 'mosquito bites' },
            { title: 'Treatment', line1: 'daily treatment keeps', line2: 'people healthy' },
          ]}
          aria="HIV and AIDS. HIV: a virus that weakens the defence against illness. Passed on: through blood and other body fluids, and from mother to baby. Not passed on: by hugging, sharing food or mosquito bites. Treatment: daily treatment keeps people healthy."
        />
        <Worked
          title="Respond with facts and kindness"
          steps={[
            'A classmate hears that a neighbour has HIV and wants to avoid her.',
            'You explain that HIV is not passed on by hugging or sharing food.',
            'You keep being her friend and you do not gossip, because her health is private.',
          ]}
        />
        <Mistake>Believing that you can catch HIV by being near a person who has it. Everyday contact is safe.</Mistake>
      </>,
    ),
  },
  {
    title: 'Getting health information and living well',
    content: slide(
      <>
        <Rule>Reliable health information comes from clinics, doctors and nurses, teachers and school health programmes, and national helplines, not from rumours. People living with illnesses such as TB, diabetes, epilepsy and HIV can live well if they take treatment, eat healthily, rest, stay active, go for check-ups and have the support of family and friends. Care and support from the community make a big difference.</Rule>
        <StepFlow steps={['Ask a nurse or doctor.', 'Take treatment as advised.', 'Eat well and stay active.', 'Keep your check-ups.']} aria="Four ways to live well with an illness: ask a nurse or doctor, take treatment as advised, eat well and stay active, and keep your check-ups." />
        <Worked
          title="Choose a reliable source"
          steps={[
            'A rumour on social media says that a herbal drink cures TB.',
            'You ask the clinic nurse, who explains that TB needs a full course of proper medicine.',
            'You share the correct information with your family.',
          ]}
        />
        <Mistake>Trusting a rumour more than a nurse or doctor. Check health claims with a clinic.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Why is teasing someone about their size wrong?</>,
          <>Give one warning sign of anorexia.</>,
          <>Name one way in which HIV is not passed on.</>,
          <>Where can you find reliable health information?</>,
        ]}
        answers={[
          <>It hurts, and people of every size deserve respect.</>,
          <>For example skipping meals or avoiding eating with others.</>,
          <>By hugging, sharing food or mosquito bites.</>,
          <>At a clinic, from a nurse or doctor, or from a helpline.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is obesity?",
    options: ["Being tall for your own age", "Being good at a sport", "So much body fat it harms health", "Having a big appetite once"],
    answer: "So much body fat it harms health",
    explanation: "It is a health condition, not a reason for shame.",
  },
  {
    prompt: "Which habit helps to prevent obesity?",
    options: ["Daily physical activity", "Drinking more sweet drinks", "Skipping all vegetables", "Sitting all day"],
    answer: "Daily physical activity",
    explanation: "Regular meals, water and activity help.",
  },
  {
    prompt: "How should you treat a person who is overweight?",
    options: ["By teasing them", "By laughing at them", "By ignoring them", "With respect"],
    answer: "With respect",
    explanation: "Body-shaming hurts and does not help.",
  },
  {
    prompt: "Which illness can obesity make more likely?",
    options: ["A broken arm", "Diabetes", "A sunburn", "A bruise"],
    answer: "Diabetes",
    explanation: "It raises the risk of other illnesses.",
  },
  {
    prompt: "What is anorexia?",
    options: ["A kind of cold in the winter months", "A serious illness of eating far too little", "A way to be very healthy and strong", "A diet that is set by a school"],
    answer: "A serious illness of eating far too little",
    explanation: "It involves an intense fear of gaining weight.",
  },
  {
    prompt: "Is anorexia only about vanity?",
    options: ["Yes, it is only vanity", "Yes, it is only attention-seeking", "Yes, it is a simple choice", "No, it is a health problem"],
    answer: "No, it is a health problem",
    explanation: "It is an illness of the mind and body.",
  },
  {
    prompt: "Which is a warning sign of anorexia?",
    options: ["Skipping meals and avoiding eating with others", "Enjoying lunch together with friends", "Eating a balanced plate at supper", "Drinking enough water every day"],
    answer: "Skipping meals and avoiding eating with others",
    explanation: "Worry about food and withdrawing can be signs.",
  },
  {
    prompt: "A friend skips lunch every day and says she feels fat. What can you do?",
    options: ["Tease her about it in front of others", "Tell her to just eat something", "Tell her you care and suggest an adult", "Ignore it and walk away"],
    answer: "Tell her you care and suggest an adult",
    explanation: "Support and professional help are needed.",
  },
  {
    prompt: "Who can help a person with anorexia?",
    options: ["Only the person on their own", "Only friends who they meet online", "Nobody can help the person", "A clinic, a counsellor and family"],
    answer: "A clinic, a counsellor and family",
    explanation: "People can recover with help.",
  },
  {
    prompt: "What does HIV weaken in the body?",
    options: ["The bones in the arms and legs", "The defence against infection", "The eyesight of the person", "The hair on the head"],
    answer: "The defence against infection",
    explanation: "HIV is a virus that weakens the immune system.",
  },
  {
    prompt: "Which everyday contact cannot pass on HIV?",
    options: ["Hugging or sharing food", "A mother feeding her new baby", "Blood on a shared needle", "Blood from an open wound"],
    answer: "Hugging or sharing food",
    explanation: "Everyday contact is safe.",
  },
  {
    prompt: "Which keeps people with HIV healthy?",
    options: ["Avoiding all food", "Staying alone", "Daily treatment", "Stopping medicine"],
    answer: "Daily treatment",
    explanation: "Treatment keeps the virus under control.",
  },
  {
    prompt: "Who should you ask to check a health rumour?",
    options: ["From a rumour at the school", "From an advert on the street", "At a clinic, from a nurse", "From a stranger who is online"],
    answer: "At a clinic, from a nurse",
    explanation: "Check health claims with a clinic.",
  },
  {
    prompt: "Which number is the National AIDS Helpline?",
    options: ["0800 012 322", "116", "10111", "0800 428 428"],
    answer: "0800 012 322",
    explanation: "The helpline gives information and support.",
  },
];

const CommonDiseasesObesityAnorexiaHiv = () => (
  <CapsSubjectTopic
    title="Common Diseases: Obesity, Anorexia and HIV and AIDS"
    subtitle="Obesity, anorexia, HIV and AIDS, and how to find reliable health information"
    learnSteps={learnSteps}
    task="gr7-common-diseases-obesity-anorexia-hiv-t4"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default CommonDiseasesObesityAnorexiaHiv;
