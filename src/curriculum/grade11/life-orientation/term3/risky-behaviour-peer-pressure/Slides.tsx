import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Risky situations and your safety",
    content: slide(
      <>
        <Rule>Risky behaviour is behaviour that can harm you or others. It includes unsafe road use, using alcohol or other drugs, unprotected sex, poor hygiene and eating habits, and getting into unsafe situations. Many risks can be reduced by informed choices, by planning ahead and by staying with people you trust.</Rule>
        <KeyTable
          title="Common risks and safer choices"
          head={["Risk", "Safer choice"]}
          aria="Common risks and safer choices. Walking alone at night: Travel with friends or arrange a lift. Alcohol and drugs: Avoid them; ask for help if you are worried. Sex without protection or consent: Wait, or use protection and make sure there is consent. Poor hygiene: Wash your hands and keep clean. Skipping meals or poor diet: Eat balanced meals."
          rows={[["Walking alone at night", "Travel with friends or arrange a lift"], ["Alcohol and drugs", "Avoid them; ask for help if you are worried"], ["Sex without protection or consent", "Wait, or use protection and make sure there is consent"], ["Poor hygiene", "Wash your hands and keep clean"], ["Skipping meals or poor diet", "Eat balanced meals"]]}
        />
        <Worked
          steps={[
            <>You arrange with a friend to travel home together after a school event.</>,
            <>You decide to wait for a lift rather than walk across an empty field in the dark.</>,
          ]}
        />
        <Mistake>Believing that risk only happens to other people. Anyone can face a risky situation, so plan ahead.</Mistake>
      </>,
    ),
  },
  {
    title: "Substances, sex and health",
    content: slide(
      <>
        <Rule>Using alcohol and other drugs affects judgement and health, can lead to addiction and is illegal for a young person. Sex carries the risk of pregnancy and of sexually transmitted infections (STIs), including HIV. Only people who are ready, and who give clear consent, should have sex, and you may say no at any time. Condoms and regular testing protect health; clinics give advice and treatment, and the AIDS Helpline is 0800 012 322.</Rule>
        <KeyTable
          title="Protecting your health"
          head={["Topic", "What helps"]}
          aria="Protecting your health. Alcohol and drugs: Staying away from them; ask a trusted adult for help. Pregnancy: Abstaining, or protection and advice from a clinic. STIs and HIV: Protection, testing and early treatment. Consent: A clear yes from both people; you can say no at any time. Help: Clinic, school counsellor or the AIDS Helpline 0800 012 322."
          rows={[["Alcohol and drugs", "Staying away from them; ask a trusted adult for help"], ["Pregnancy", "Abstaining, or protection and advice from a clinic"], ["STIs and HIV", "Protection, testing and early treatment"], ["Consent", "A clear yes from both people; you can say no at any time"], ["Help", "Clinic, school counsellor or the AIDS Helpline 0800 012 322"]]}
        />
        <Worked
          steps={[
            <>A learner who is worried that they may have an STI goes to a clinic, where a nurse offers testing and treatment.</>,
            <>A learner who feels pressured says that they are not ready.</>,
          ]}
        />
        <Mistake>Thinking that you must have sex to be accepted. You are allowed to say no.</Mistake>
      </>,
    ),
  },
  {
    title: "Peer pressure",
    content: slide(
      <>
        <Rule>Peer pressure is the influence of people your own age. It can be positive, such as friends who encourage you to study, or negative, such as pressure to try drugs or to skip school. To handle negative pressure, say no clearly, give a short reason, suggest something else, and leave if you need to. Having supportive friends and strong values helps.</Rule>
        <KeyTable
          title="Handling pressure"
          head={["Step", "Example"]}
          aria="Handling pressure. Say no clearly: No thanks, I am not interested. Give a short reason: I have a match tomorrow. Suggest something else: Let’s go to the park instead. Leave if you need to: Walk away and go to a safe place. Tell someone: A trusted adult or counsellor can support you."
          rows={[["Say no clearly", "No thanks, I am not interested"], ["Give a short reason", "I have a match tomorrow"], ["Suggest something else", "Let’s go to the park instead"], ["Leave if you need to", "Walk away and go to a safe place"], ["Tell someone", "A trusted adult or counsellor can support you"]]}
        />
        <Worked
          steps={[
            <>A group offers you a cigarette. You say no thanks, suggest a walk and stay with other friends.</>,
            <>You tell a trusted teacher about the pressure you felt.</>,
          ]}
        />
        <Mistake>Giving in so that you are not left out. Real friends respect your choices.</Mistake>
      </>,
    ),
  },
  {
    title: "Warning signs and getting help",
    content: slide(
      <>
        <Rule>Sometimes a person feels so low that they think of ending their life. Warning signs can include talking about feeling hopeless or a burden, pulling away from friends, big changes in mood or behaviour and losing interest in things they enjoyed. If you notice these signs in a friend, or in yourself, take it seriously: talk to the person, listen, stay with them and tell a trusted adult, a school counsellor or a clinic. Childline is 116. If someone is in immediate danger, phone SAPS 10111.</Rule>
        <KeyTable
          title="Getting help"
          head={["Situation", "Where to turn"]}
          aria="Getting help. You or a friend feels hopeless: Talk to a trusted adult, school counsellor or clinic. A child needs support: Childline 116. Immediate danger: SAPS 10111. Worry about HIV or STIs: Clinic or AIDS Helpline 0800 012 322. A friend asks you to keep a worrying secret: Do not keep it; tell a trusted adult."
          rows={[["You or a friend feels hopeless", "Talk to a trusted adult, school counsellor or clinic"], ["A child needs support", "Childline 116"], ["Immediate danger", "SAPS 10111"], ["Worry about HIV or STIs", "Clinic or AIDS Helpline 0800 012 322"], ["A friend asks you to keep a worrying secret", "Do not keep it; tell a trusted adult"]]}
        />
        <Worked
          steps={[
            <>A friend says that they feel like nothing matters. You listen, stay with them and walk with them to the school counsellor.</>,
            <>You do not promise to keep it secret, because their safety matters most.</>,
          ]}
        />
        <Mistake>Ignoring the signs or promising to keep a secret. Getting help is the right thing to do.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is peer pressure?</>,
          <>Give one way to say no to pressure.</>,
          <>What number can a child phone for help?</>,
          <>Who should you tell if a friend feels hopeless?</>,
        ]}
        answers={[
          <>The influence of people your own age.</>,
          <>Say no clearly and give a short reason.</>,
          <>Childline on 116.</>,
          <>A trusted adult, a school counsellor or a clinic.</>,
        ]}
      />,
    ),
  },
];
