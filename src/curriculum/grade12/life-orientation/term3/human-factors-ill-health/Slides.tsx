import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Human factors in ill-health',
    content: slide(
      <>
        <Rule>Ill-health is not caused by germs alone. Human factors also play a part: psychological, social, religious and cultural factors, and the different ways in which people understand health and illness.</Rule>
        <KeyTable
          title="Human factors and an example of each"
          head={['Factor', 'Example']}
          aria="A table of human factors that cause ill-health. Psychological: long-term stress that leads to high blood pressure. Social: poverty that limits healthy food. Religious: a belief that delays a person from seeking treatment. Cultural: a practice that spreads infection when tools are shared. Knowledge perspectives: a person who uses both a traditional healer and a clinic."
          rows={[
            ['Psychological', 'Long-term stress and anxiety'],
            ['Social', 'Poverty, peer pressure, gender roles'],
            ['Religious', 'A belief that delays treatment'],
            ['Cultural', 'A practice that spreads infection'],
            ['Knowledge perspectives', 'Traditional healer and clinic'],
          ]}
        />
        <Worked
          steps={[
            <>A learner is under heavy stress for months, sleeps badly and starts smoking. Stress (psychological) and peer pressure (social) both feed the ill-health.</>,
            <>Different knowledge perspectives can work together. A traditional healer may refer a very sick patient to a clinic.</>,
          ]}
        />
        <Mistake>Blaming the person only. Ill-health usually has several causes, and some of them, such as poverty, are not the person&rsquo;s choice.</Mistake>
      </>,
    ),
  },
  {
    title: 'Behaviour that harms health',
    content: slide(
      <>
        <Rule>Some behaviour raises the risk of ill-health. CAPS names five contributing factors: eating habits, lack of exercise, smoking, substance abuse and unsafe sexual behaviour.</Rule>
        <KeyTable
          title="Contributing factors and the risk they raise"
          head={['Factor', 'Raises the risk of']}
          aria="A table of contributing factors. Eating habits: obesity, diabetes and heart disease. Lack of exercise: heart disease and high blood pressure. Smoking: lung cancer and heart disease. Substance abuse: addiction, accidents and liver damage. Unsafe sexual behaviour: sexually transmitted infections, including HIV, and unplanned pregnancy."
          rows={[
            ['Eating habits', 'Obesity, diabetes, heart disease'],
            ['Lack of exercise', 'Heart disease, high blood pressure'],
            ['Smoking', 'Lung cancer, heart disease'],
            ['Substance abuse', 'Addiction, accidents, liver damage'],
            ['Unsafe sexual behaviour', 'STIs including HIV, unplanned pregnancy'],
          ]}
        />
        <Worked
          steps={[
            <>A diet high in sugar, fat and salt and little movement together raise the risk of high blood pressure.</>,
            <>Changing the behaviour lowers the risk: eat more vegetables, move daily, do not smoke, avoid drugs, and use protection or abstain.</>,
          ]}
        />
        <Mistake>Believing that one unhealthy habit is harmless because the effect is not seen at once. Many harms build up slowly over years.</Mistake>
      </>,
    ),
  },
  {
    title: 'Accidents, crises and disasters',
    content: slide(
      <>
        <Rule>Human factors also cause accidents, crises and disasters, or make their effects worse. A natural hazard such as a flood becomes a disaster when people are unprepared or live in unsafe places.</Rule>
        <KeyTable
          title="Human factors that cause or worsen harm"
          head={['Event', 'Human factor']}
          aria="A table of events and human factors. Road accident: speeding, drinking and driving, not wearing a seatbelt. Fire in an informal settlement: unsafe candles and heaters, houses built close together. Flood disaster: building in a flood plain, ignoring warnings. Crisis: a family in debt and a job loss."
          rows={[
            ['Road accident', 'Speeding, drinking and driving'],
            ['Shack fire', 'Open flames, houses close together'],
            ['Flood disaster', 'Building on a flood plain'],
            ['Family crisis', 'Debt after a job loss'],
          ]}
        />
        <Worked
          steps={[
            <>Heavy rain is a natural event. Homes built in a river bed turn it into a disaster, which is a human factor.</>,
            <>Prevention works: obey the speed limit, never drink and drive, and follow warnings. Keeping flames away from cloth and planning how to escape a fire lowers the risk of a shack fire.</>,
          ]}
        />
        <Mistake>Calling every disaster &ldquo;natural&rdquo;. People&rsquo;s choices and planning decide how much harm a hazard does.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name three human factors that can cause ill-health.</>,
          <>Name the five contributing factors that CAPS lists.</>,
          <>Give one human factor that makes a flood worse.</>,
          <>Why can a traditional healer and a clinic work together?</>,
        ]}
        answers={[
          <>Any three of: psychological, social, religious, cultural, and different knowledge perspectives.</>,
          <>Eating habits, lack of exercise, smoking, substance abuse and unsafe sexual behaviour.</>,
          <>Building homes on a flood plain, or ignoring a warning.</>,
          <>They bring different knowledge, and a healer can refer a very sick patient for medical treatment.</>,
        ]}
      />,
    ),
  },
];
