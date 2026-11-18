import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
import { DAYS, dayDate } from '../../_shared/days';

const d = (name: string) => DAYS.find((x) => x.name === name)!;

export const learnSteps: LearnStep[] = [
  {
    title: 'South Africa’s national days',
    content: slide(
      <>
        <Rule>National days remind us of important events and values in our history. {d('Human Rights Day').name} ({dayDate('Human Rights Day')}) {d('Human Rights Day').meaning}. {d('Freedom Day').name} ({dayDate('Freedom Day')}) {d('Freedom Day').meaning}. {d("Workers' Day").name} ({dayDate("Workers' Day")}) {d("Workers' Day").meaning}. {d('Youth Day').name} ({dayDate('Youth Day')}) {d('Youth Day').meaning}.</Rule>
        <FactCards
          cards={[
            { title: `Human Rights Day`, line1: dayDate('Human Rights Day'), line2: 'rights in the Constitution' },
            { title: 'Freedom Day', line1: dayDate('Freedom Day'), line2: 'first democratic election' },
            { title: "Workers' Day", line1: dayDate("Workers' Day"), line2: 'rights of workers' },
            { title: 'Youth Day', line1: dayDate('Youth Day'), line2: 'Soweto uprising of 1976' },
          ]}
          aria={`National days. Human Rights Day, ${dayDate('Human Rights Day')}: rights in the Constitution. Freedom Day, ${dayDate('Freedom Day')}: the first democratic election. Workers' Day, ${dayDate("Workers' Day")}: the rights of workers. Youth Day, ${dayDate('Youth Day')}: the Soweto uprising of 1976.`}
        />
        <Worked
          title="Match the day"
          steps={[
            'A day about the first democratic election of 1994: Freedom Day, 27 April.',
            'A day that remembers the 1976 uprising of young people: Youth Day, 16 June.',
            'A day about the rights written in the Constitution: Human Rights Day, 21 March.',
          ]}
        />
        <Mistake>Treating national days as only a day off school. Each one has a meaning that we can honour by what we do.</Mistake>
      </>,
    ),
  },
  {
    title: 'More national and international days',
    content: slide(
      <>
        <Rule>{d("Women's Day").name} ({dayDate("Women's Day")}) {d("Women's Day").meaning}. {d('Heritage Day').name} ({dayDate('Heritage Day')}) {d('Heritage Day').meaning}. {d('Reconciliation Day').name} ({dayDate('Reconciliation Day')}) {d('Reconciliation Day').meaning}. {d('Africa Day').name} ({dayDate('Africa Day')}) {d('Africa Day').meaning}. {d('Nelson Mandela Day').name} ({dayDate('Nelson Mandela Day')}) {d('Nelson Mandela Day').meaning}, and {d('World Refugee Day').name} ({dayDate('World Refugee Day')}) {d('World Refugee Day').meaning}. National health days, such as World AIDS Day on 1 December, raise awareness of health.</Rule>
        <FactCards
          cards={[
            { title: "Women's Day", line1: dayDate("Women's Day"), line2: 'march of 1956' },
            { title: 'Heritage Day', line1: dayDate('Heritage Day'), line2: 'our many cultures' },
            { title: 'Reconciliation Day', line1: dayDate('Reconciliation Day'), line2: 'national unity' },
            { title: 'Mandela Day', line1: dayDate('Nelson Mandela Day'), line2: '67 minutes of service' },
          ]}
          aria={`More days. Women's Day, ${dayDate("Women's Day")}: the march of 1956. Heritage Day, ${dayDate('Heritage Day')}: our many cultures. Reconciliation Day, ${dayDate('Reconciliation Day')}: national unity. Nelson Mandela Day, ${dayDate('Nelson Mandela Day')}: 67 minutes of service.`}
        />
        <Worked
          title="Link the day to an action"
          steps={[
            'On Nelson Mandela Day you give 67 minutes to help someone, for example by reading to younger children.',
            'On Heritage Day you share food, dress or songs from your own culture and learn about another.',
            'On World Refugee Day you learn why people have to leave their homes and how to welcome them.',
          ]}
        />
        <Mistake>Mixing up Africa Day and Heritage Day. Africa Day, on 25 May, is about African unity, and Heritage Day, on 24 September, is about the cultures of South Africa.</Mistake>
      </>,
    ),
  },
  {
    title: 'Respecting the rights of people with disabilities and people affected by HIV',
    content: slide(
      <>
        <Rule>Everyone has the same rights, including people living with different disabilities and people who are infected or affected by HIV and AIDS. Respect means treating them with dignity, including them in activities, never teasing or gossiping, and making sure that places and events are accessible. A national day is a good time to show this respect.</Rule>
        <FactCards
          cards={[
            { title: 'Dignity', line1: 'treat everyone', line2: 'with respect' },
            { title: 'Include', line1: 'invite all to', line2: 'take part' },
            { title: 'Access', line1: 'ramps, clear signs', line2: 'and helpful plans' },
            { title: 'No stigma', line1: 'no teasing or', line2: 'gossip' },
          ]}
          aria="Respecting rights. Dignity: treat everyone with respect. Include: invite all to take part. Access: ramps, clear signs and helpful plans. No stigma: no teasing or gossip."
        />
        <Worked
          title="Plan an inclusive celebration"
          steps={[
            'The class plans a Heritage Day event.',
            'They choose a venue with a ramp, so that a classmate who uses a wheelchair can take part.',
            'They give each learner a task, so that no one is left out.',
          ]}
        />
        <Mistake>Planning an event without asking who might be left out. Always check that everyone can take part.</Mistake>
      </>,
    ),
  },
  {
    title: 'Planning a local celebration',
    content: slide(
      <>
        <Rule>To plan a local celebration of a national day, choose the day and a goal, decide who will do what, list what you need, set a date and place, carry out the plan and then review how it went. A good celebration teaches people about the meaning of the day.</Rule>
        <StepFlow steps={['Choose the day and goal.', 'Share the tasks.', 'Prepare the place and materials.', 'Hold the event and review it.']} aria="Four steps to plan a celebration: choose the day and goal, share the tasks, prepare the place and materials, and hold the event and review it." />
        <Worked
          title="Plan for Youth Day"
          steps={[
            'Goal: to remember the 1976 Soweto uprising and to honour young people today.',
            'Tasks: one group makes posters, one invites a speaker and one prepares a short play.',
            'After the event the class asks the audience what they learned and writes a short review.',
          ]}
        />
        <Mistake>Doing the whole plan alone. Share the tasks so that everyone takes part and learns.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>On which date is Heritage Day?</>,
          <>Which day remembers the Soweto uprising of 1976?</>,
          <>How many minutes are asked for on Nelson Mandela Day?</>,
          <>Give one way to include a classmate who uses a wheelchair.</>,
        ]}
        answers={[
          <>{dayDate('Heritage Day')}.</>,
          <>Youth Day, on {dayDate('Youth Day')}.</>,
          <>67 minutes.</>,
          <>Choose a place with a ramp.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "On which date is Human Rights Day?",
    options: ["27 April", "16 June", "21 March", "9 August"],
    answer: "21 March",
    explanation: "Human Rights Day is on 21 March.",
  },
  {
    prompt: "Freedom Day falls on which date each year?",
    options: ["27 April", "21 March", "1 May", "24 September"],
    answer: "27 April",
    explanation: "Freedom Day is on 27 April.",
  },
  {
    prompt: "Which day marks the first democratic election of 1994?",
    options: ["Workers' Day", "Heritage Day", "Africa Day", "Freedom Day"],
    answer: "Freedom Day",
    explanation: "The first democratic election was held on 27 April 1994.",
  },
  {
    prompt: "Youth Day falls on which date each year?",
    options: ["27 April", "16 June", "25 May", "16 December"],
    answer: "16 June",
    explanation: "Youth Day is on 16 June.",
  },
  {
    prompt: "Which event does Youth Day remember?",
    options: ["The 1994 election", "The 1976 Soweto uprising", "The 1956 women's march", "The signing of a trade deal"],
    answer: "The 1976 Soweto uprising",
    explanation: "Youth Day remembers the uprising of young people in 1976.",
  },
  {
    prompt: "Which day honours the rights and contribution of workers?",
    options: ["Freedom Day", "Women's Day", "Heritage Day", "Workers' Day"],
    answer: "Workers' Day",
    explanation: "Workers' Day is on 1 May.",
  },
  {
    prompt: "On which date is Women's Day?",
    options: ["9 August", "9 March", "9 September", "9 December"],
    answer: "9 August",
    explanation: "Women's Day is on 9 August.",
  },
  {
    prompt: "Which event does Women's Day remember?",
    options: ["The 1976 uprising of the youth", "The first democratic election", "The 1956 march of women", "A national sports final"],
    answer: "The 1956 march of women",
    explanation: "Women marched to the Union Buildings in 1956.",
  },
  {
    prompt: "Heritage Day falls on which date each year?",
    options: ["24 March", "24 April", "24 August", "24 September"],
    answer: "24 September",
    explanation: "Heritage Day is on 24 September.",
  },
  {
    prompt: "Which day celebrates the many cultures of South Africa?",
    options: ["Reconciliation Day", "Heritage Day", "Africa Day", "Youth Day"],
    answer: "Heritage Day",
    explanation: "Heritage Day is about culture and tradition.",
  },
  {
    prompt: "Reconciliation Day falls on which date each year?",
    options: ["16 December", "16 June", "16 March", "16 July"],
    answer: "16 December",
    explanation: "Reconciliation Day is on 16 December.",
  },
  {
    prompt: "On Nelson Mandela Day, how long are people asked to serve?",
    options: ["7 minutes", "60 minutes", "67 minutes", "90 minutes"],
    answer: "67 minutes",
    explanation: "People are asked to give 67 minutes to help others.",
  },
  {
    prompt: "On which date is Nelson Mandela Day?",
    options: ["18 June", "18 August", "18 July", "18 May"],
    answer: "18 July",
    explanation: "Nelson Mandela Day is on 18 July.",
  },
  {
    prompt: "Which day is about African unity and is on 25 May?",
    options: ["Africa Day", "Heritage Day", "Workers' Day", "Youth Day"],
    answer: "Africa Day",
    explanation: "Africa Day celebrates African unity.",
  },
];

const NationalDays = () => (
  <CapsSubjectTopic
    title="National and International Days"
    subtitle="Human Rights Day to Reconciliation Day, respect for people with disabilities and HIV, and planning a local celebration"
    learnSteps={learnSteps}
    task="gr9-national-days-t2"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default NationalDays;
