import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Gender equity, including in sport',
    content: slide(
      <>
        <Rule>Gender equity means treating girls and boys, women and men fairly, so that everyone has the same chances. In sport this means equal access to coaching, equipment, fields and teams, fair funding and prizes, and respect for every player. Stereotypes such as &ldquo;girls cannot play soccer&rdquo; or &ldquo;boys do not dance&rdquo; limit people and are not true.</Rule>
        <FactCards
          cards={[
            { title: 'Equity', line1: 'fair treatment and', line2: 'the same chances' },
            { title: 'In sport', line1: 'equal coaching, fields', line2: 'and funding' },
            { title: 'Stereotypes', line1: 'ideas about what boys', line2: 'and girls can do' },
            { title: 'Respect', line1: 'every player is', line2: 'treated with dignity' },
          ]}
          aria="Gender equity. Equity: fair treatment and the same chances. In sport: equal coaching, fields and funding. Stereotypes: ideas about what boys and girls can do. Respect: every player is treated with dignity."
        />
        <Worked
          title="Spot the gender issue in sport"
          steps={[
            'A school gives the boys’ soccer team new kit and the girls’ team old kit: unfair.',
            'Both teams share the field on alternate afternoons and have a coach each: fair.',
            'A boy is laughed at for joining netball: a stereotype that harms him.',
          ]}
        />
        <Mistake>Thinking that equity means that boys and girls must do exactly the same things. It means that everyone gets a fair chance to take part.</Mistake>
      </>,
    ),
  },
  {
    title: 'What is gender-based violence?',
    content: slide(
      <>
        <Rule>Gender-based violence is harm done to a person because of their gender. It can be physical, emotional or sexual, and it includes threats, control and abuse in relationships. It affects women and girls most, but men and boys can also be victims. It is never the fault of the person who is harmed.</Rule>
        <FactCards
          cards={[
            { title: 'Definition', line1: 'harm done because', line2: 'of a person’s gender' },
            { title: 'Forms', line1: 'physical, emotional', line2: 'and sexual harm' },
            { title: 'Who', line1: 'mostly women and girls,', line2: 'also men and boys' },
            { title: 'Blame', line1: 'it is never the', line2: 'victim’s fault' },
          ]}
          aria="Gender-based violence. Definition: harm done because of a person's gender. Forms: physical, emotional and sexual harm. Who: mostly women and girls, also men and boys. Blame: it is never the victim's fault."
        />
        <Worked
          title="Explain the idea"
          steps={[
            'Gender-based violence is a violation of the rights to safety and dignity.',
            'It happens at home, at school, in relationships and online.',
            'The person who does harm is responsible for it, and the person harmed is not to blame.',
          ]}
        />
        <Mistake>Asking what the victim did to cause the harm. The responsibility is always with the person who did the harm.</Mistake>
      </>,
    ),
  },
  {
    title: 'The impact of rape and gender-based violence',
    content: slide(
      <>
        <Rule>Rape and gender-based violence can harm a person emotionally, in their health and in their social life. Survivors may feel fear, shame or sadness, may have health problems, and may find it hard to trust people or to go to school. With support, such as care from a clinic, counselling and the love of family and friends, people can heal.</Rule>
        <FactCards
          cards={[
            { title: 'Emotional', line1: 'fear, sadness or', line2: 'loss of trust' },
            { title: 'Health', line1: 'injuries and health', line2: 'problems need care' },
            { title: 'Social', line1: 'trouble at school or', line2: 'with friends' },
            { title: 'Healing', line1: 'support and counselling', line2: 'help people recover' },
          ]}
          aria="The impact of gender-based violence. Emotional: fear, sadness or loss of trust. Health: injuries and health problems need care. Social: trouble at school or with friends. Healing: support and counselling help people recover."
        />
        <Worked
          title="Respond with care"
          steps={[
            'A friend tells you that she was harmed and asks you not to tell anyone.',
            'You listen, you believe her and you say: "It is not your fault."',
            'You help her to tell a trusted adult or call a helpline, because she needs support.',
          ]}
        />
        <Mistake>Telling a victim to forget about it or to keep quiet. Survivors need to be heard and supported.</Mistake>
      </>,
    ),
  },
  {
    title: 'The law and where to get help',
    content: slide(
      <>
        <Rule>South African law on sexual offences makes rape and other sexual offences crimes, and it protects children and adults. Violence against women and girls can be reported to the police. Help is available: call the GBV Command Centre on 0800 428 428 (free), Childline on 116 if you are under 18, or the police on 10111, or go to a clinic, a teacher, a social worker or a place of safety. Tell someone you trust.</Rule>
        <FactCards
          cards={[
            { title: 'GBV Command Centre', line1: 'free, call', line2: '0800 428 428' },
            { title: 'Childline', line1: 'for children,', line2: 'call 116' },
            { title: 'Police', line1: 'in an emergency,', line2: 'call 10111' },
            { title: 'Clinic, school', line1: 'a nurse, teacher or', line2: 'social worker' },
          ]}
          aria="Where to get help. GBV Command Centre: free, call 0800 428 428. Childline: for children, call 116. Police: in an emergency call 10111. Clinic and school: a nurse, teacher or social worker."
        />
        <Worked
          title="Help a friend"
          steps={[
            'A friend is afraid of someone at home and is unsafe.',
            'Help her to tell a trusted adult, or phone the GBV Command Centre or Childline together.',
            'In an emergency, call the police.',
          ]}
        />
        <Mistake>Believing that nothing can be done or that reporting will make things worse. Help and protection are available, and the law is on the side of the victim.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is gender equity?</>,
          <>What is gender-based violence?</>,
          <>Whose fault is it when someone is harmed?</>,
          <>Which free number can you call for the GBV Command Centre?</>,
        ]}
        answers={[
          <>Fair treatment of everyone, so that all have the same chances.</>,
          <>Harm done to a person because of their gender.</>,
          <>It is never the victim&rsquo;s fault.</>,
          <>0800 428 428.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is gender equity?",
    options: ["Making boys and girls do the same things", "Giving boys all the chances", "Fair treatment so that everyone has the same chances", "Giving girls all the chances"],
    answer: "Fair treatment so that everyone has the same chances",
    explanation: "Equity is fairness, not sameness.",
  },
  {
    prompt: "Which is an example of gender equity in sport?",
    options: ["Equal coaching, fields and funding", "New kit for the boys' team only", "No fields at all for the girls", "Prizes for the boys' team only"],
    answer: "Equal coaching, fields and funding",
    explanation: "Fair access is gender equity.",
  },
  {
    prompt: "A boy is laughed at for joining netball. What is this?",
    options: ["A fair rule of the sport", "A law made by the school", "A prize for taking part", "A harmful stereotype"],
    answer: "A harmful stereotype",
    explanation: "Stereotypes limit what people may do.",
  },
  {
    prompt: "What is gender-based violence?",
    options: ["A kind of injury in sports", "Harm done because of gender", "A school subject taught to girls", "A weather event in the summer"],
    answer: "Harm done because of gender",
    explanation: "It may be physical, emotional or sexual.",
  },
  {
    prompt: "Who can be a victim of gender-based violence?",
    options: ["Only adults in a family", "Mostly women, but anyone", "Only boys at a school", "Only people who live in cities"],
    answer: "Mostly women, but anyone",
    explanation: "Anyone can be harmed.",
  },
  {
    prompt: "Whose fault is it when someone is harmed by gender-based violence?",
    options: ["The fault of the victim", "The fault of the victim's family", "Nobody is ever at fault", "The person who did the harm"],
    answer: "The person who did the harm",
    explanation: "It is never the fault of the person who is harmed.",
  },
  {
    prompt: "A friend tells you she was harmed. What should you say?",
    options: ["It is not your fault; I will help", "What did you do to cause it", "Forget about it and keep quiet", "Do not tell any adult about it"],
    answer: "It is not your fault; I will help",
    explanation: "Listen, believe and help her to get support.",
  },
  {
    prompt: "Which is a possible emotional effect of gender-based violence?",
    options: ["Great happiness all of the time", "A lot more energy than before", "Fear, sadness or loss of trust", "Much better marks at school"],
    answer: "Fear, sadness or loss of trust",
    explanation: "Survivors may feel fear, shame or sadness.",
  },
  {
    prompt: "What helps a person to heal after being harmed?",
    options: ["Being blamed by other people", "Being told to forget all of it", "Being left alone for a long time", "Support, counselling and care"],
    answer: "Support, counselling and care",
    explanation: "Care and support help recovery.",
  },
  {
    prompt: "What does South African law on sexual offences do?",
    options: ["Allows such acts in some cases", "Makes rape and such acts crimes", "Applies to adults and not to children", "Has no penalties for anyone"],
    answer: "Makes rape and such acts crimes",
    explanation: "The law protects children and adults.",
  },
  {
    prompt: "Which toll-free number reaches the GBV Command Centre?",
    options: ["0800 428 428", "116", "10111", "0800 012 322"],
    answer: "0800 428 428",
    explanation: "The GBV Command Centre is a free helpline.",
  },
  {
    prompt: "Which number can a child call for Childline?",
    options: ["0800 428 428", "10111", "116", "12"],
    answer: "116",
    explanation: "Childline is a free helpline for children.",
  },
  {
    prompt: "Which number do you call for the police in an emergency?",
    options: ["116", "0800 428 428", "10111", "0800 012 322"],
    answer: "10111",
    explanation: "The police emergency number is 10111.",
  },
  {
    prompt: "Where else can a person go for help after violence?",
    options: ["A clinic, a teacher or a social worker", "Nowhere", "Only to the person who did harm", "Only to a rumour group"],
    answer: "A clinic, a teacher or a social worker",
    explanation: "Help and places of safety are available.",
  },
];

const GenderEquityAndGbv = () => (
  <CapsSubjectTopic
    title="Gender Equity and Gender-Based Violence"
    subtitle="Gender equity in sport, what gender-based violence is, its impact, the law and where to get help"
    learnSteps={learnSteps}
    task="gr8-gender-equity-and-gbv-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default GenderEquityAndGbv;
