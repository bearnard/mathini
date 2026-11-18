import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Gender roles",
    content: slide(
      <>
        <Rule>Gender roles are the behaviours, jobs and responsibilities that a society expects from men and women. They come from culture, family and the media, and they can change. Fixed roles can limit what people feel free to do and can harm health and well-being, for example when boys are told never to show feelings or when girls are told that they cannot lead.</Rule>
        <KeyTable
          title="Gender roles and their effects"
          head={["Role expectation", "Possible effect"]}
          aria="Gender roles and their effects. Boys must be tough and never cry: Boys hide feelings and avoid help. Girls must do all the housework: Girls have less time to study or rest. Men must be the only earners: Pressure and stress on men; women’s work undervalued. Girls cannot lead: Girls’ talents are wasted. Fixed roles in a family: Less sharing of care and responsibility."
          rows={[["Boys must be tough and never cry", "Boys hide feelings and avoid help"], ["Girls must do all the housework", "Girls have less time to study or rest"], ["Men must be the only earners", "Pressure and stress on men; women’s work undervalued"], ["Girls cannot lead", "Girls’ talents are wasted"], ["Fixed roles in a family", "Less sharing of care and responsibility"]]}
        />
        <Worked
          steps={[
            <>A boy hides how sad he feels about a loss because he was told that boys do not cry. This can harm his well-being.</>,
            <>A family decides that all children, boys and girls, will share the chores.</>,
          ]}
        />
        <Mistake>Believing that gender roles never change. Roles differ between cultures and change over time.</Mistake>
      </>,
    ),
  },
  {
    title: "Unequal power and abuse of power",
    content: slide(
      <>
        <Rule>When one gender holds more power than the other, the unequal power relationship can lead to abuse of power. This can happen to an individual (physical abuse), in a family, in a culture (for example, different mourning rules for men and women), in society (domestic violence and sexual violence) and at work (sexual harassment). Anyone can be harmed, but women and girls are most often affected.</Rule>
        <KeyTable
          title="Where power is misused"
          head={["Setting", "Example"]}
          aria="Where power is misused. Individual: Physical abuse by a partner. Family: Sexual abuse by a relative. Culture: Different mourning rules for widows and widowers. Society: Domestic violence and sexual violence. Work: Sexual harassment by a manager or colleague."
          rows={[["Individual", "Physical abuse by a partner"], ["Family", "Sexual abuse by a relative"], ["Culture", "Different mourning rules for widows and widowers"], ["Society", "Domestic violence and sexual violence"], ["Work", "Sexual harassment by a manager or colleague"]]}
        />
        <Worked
          steps={[
            <>A worker is pressured by her manager for sexual favours. This is sexual harassment and it is wrong.</>,
            <>A widow is made to follow stricter mourning rules than a widower. This is an example of unequal treatment.</>,
          ]}
        />
        <Mistake>Saying that abuse is a private family matter. Abuse is a crime and it harms health.</Mistake>
      </>,
    ),
  },
  {
    title: "Effects on health and well-being",
    content: slide(
      <>
        <Rule>Abuse of power harms the body, the mind and the community. Effects include injuries, stress, depression, loss of self-esteem, problems at school or work and poor relationships. Children who see violence at home can also suffer. Abuse is never the fault of the person who is harmed.</Rule>
        <KeyTable
          title="Effects of abuse of power"
          head={["Area", "Possible effect"]}
          aria="Effects of abuse of power. Physical: Injuries and long-term health problems. Emotional: Fear, shame and loss of self-esteem. Social: Isolation and difficulty trusting people. Education and work: Poor concentration, missed school or work. Family and community: Cycle of violence passed on to children."
          rows={[["Physical", "Injuries and long-term health problems"], ["Emotional", "Fear, shame and loss of self-esteem"], ["Social", "Isolation and difficulty trusting people"], ["Education and work", "Poor concentration, missed school or work"], ["Family and community", "Cycle of violence passed on to children"]]}
        />
        <Worked
          steps={[
            <>A learner who is being abused at home may be tired, anxious and struggle to concentrate in class.</>,
            <>A support group helps a survivor to rebuild trust and confidence.</>,
          ]}
        />
        <Mistake>Blaming the person who was harmed. The responsibility lies with the person who abuses power.</Mistake>
      </>,
    ),
  },
  {
    title: "Addressing inequality",
    content: slide(
      <>
        <Rule>Inequality can be reduced when people know their rights, speak up and support each other. The Constitution gives everyone equality and dignity, and laws such as the Domestic Violence Act protect people from abuse. You can challenge stereotypes, share chores, support friends and report abuse. For help, a trusted adult, a school counsellor or a clinic can help. The GBV Command Centre is 0800 428 428, Childline is 116 and the police are on 10111.</Rule>
        <KeyTable
          title="What you can do"
          head={["Action", "Example"]}
          aria="What you can do. Know your rights: Equality and dignity are in the Constitution. Challenge stereotypes: Speak up when someone says that girls cannot lead. Share responsibilities: Boys and girls share chores. Support others: Listen and help a friend to get help. Report abuse: GBV Command Centre 0800 428 428; Childline 116; SAPS 10111."
          rows={[["Know your rights", "Equality and dignity are in the Constitution"], ["Challenge stereotypes", "Speak up when someone says that girls cannot lead"], ["Share responsibilities", "Boys and girls share chores"], ["Support others", "Listen and help a friend to get help"], ["Report abuse", "GBV Command Centre 0800 428 428; Childline 116; SAPS 10111"]]}
        />
        <Worked
          steps={[
            <>You tell a classmate who is teasing a girl for joining the soccer team that anyone may play.</>,
            <>A friend tells you about abuse. You listen, say it is not their fault and help them to phone a helpline.</>,
          ]}
        />
        <Mistake>Staying silent because it is not your business. Speaking up and getting help can protect someone.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What are gender roles?</>,
          <>Give one example of abuse of power at work.</>,
          <>Whose fault is abuse?</>,
          <>Which number is the GBV Command Centre?</>,
        ]}
        answers={[
          <>The behaviours and jobs that a society expects from men and women.</>,
          <>Sexual harassment.</>,
          <>The person who abuses power, not the person who is harmed.</>,
          <>0800 428 428.</>,
        ]}
      />,
    ),
  },
];
