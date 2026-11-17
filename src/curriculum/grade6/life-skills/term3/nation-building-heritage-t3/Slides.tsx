import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/ems/Ems9dPictures';
import { MANDELA_MINUTES, NATIONAL_DAYS, SYMBOLS } from '../../_shared/psw6Facts';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const DaysTable = () => (
  <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-slate-900 text-left">
    <table aria-label={`The national days of the CAPS: ${NATIONAL_DAYS.map((d) => `${d.name} on ${d.day} ${d.month}`).join('; ')}.`} className="w-full border-collapse text-[12px] text-slate-100">
      <thead>
        <tr className="text-[11px] uppercase tracking-wide text-slate-400">
          <th scope="col" className="px-2 py-1.5 text-left font-bold">Day</th>
          <th scope="col" className="px-2 py-1.5 text-left font-bold">Date</th>
        </tr>
      </thead>
      <tbody>
        {NATIONAL_DAYS.map((d) => (
          <tr key={d.name} className="border-t border-slate-700">
            <td className="px-2 py-1.5 font-semibold">{d.name}</td>
            <td className="whitespace-nowrap px-2 py-1.5">{d.day} {d.month}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const learnSteps: LearnStep[] = [
  {
    title: 'Nation, heritage and nation-building',
    content: slide(
      <>
        <Rule>A nation is a large group of people who live in one country and share a government. Cultural heritage is what is passed on from the past: customs, languages, music, food, stories and places. Nation-building is when people work together to make one united country.</Rule>
        <StepFlow steps={['Heritage', 'Pride', 'Unity']} notes={['Shared past', 'We belong', 'One nation']} aria="How cultural heritage helps to build a nation: a shared heritage gives people pride, and pride helps them to feel united as one nation." />
        <Worked
          steps={[
            <>South Africa has many cultures and eleven official languages.</>,
            <>When we respect each other&rsquo;s heritage, we learn from each other.</>,
            <>Shared symbols and days help people of every culture to feel that they belong to one country.</>,
          ]}
        />
        <Mistake>Thinking that heritage belongs only to old buildings. Heritage also includes the language you speak, the songs you sing and the food your family cooks.</Mistake>
      </>,
    ),
  },
  {
    title: 'National symbols',
    content: slide(
      <>
        <Rule>National symbols stand for the whole country. The three main ones are the flag, the anthem and the coat of arms.</Rule>
        <StepFlow steps={['Flag', 'Anthem', 'Arms']} notes={[`${SYMBOLS.flag.colours} colours`, `${SYMBOLS.anthem.languages} languages`, 'Motto']} aria={`The three national symbols: the flag with ${SYMBOLS.flag.colours} colours, the anthem sung in ${SYMBOLS.anthem.languages} languages, and the coat of arms with its motto.`} />
        <Worked
          steps={[
            <><strong>Flag:</strong> first flown on {SYMBOLS.flag.adopted.day} {SYMBOLS.flag.adopted.month} {SYMBOLS.flag.adopted.year}. It has {SYMBOLS.flag.colours} colours: black, gold, green, white, red and blue.</>,
            <><strong>Anthem:</strong> it joins Nkosi Sikelel&rsquo; iAfrika and Die Stem. It is sung in {SYMBOLS.anthem.languages} languages. We stand quietly when it is played.</>,
            <><strong>Coat of arms:</strong> introduced in {SYMBOLS.coatOfArms.year}. Its motto, {SYMBOLS.coatOfArms.motto}, is in a Khoisan language and means &ldquo;{SYMBOLS.coatOfArms.meaning}&rdquo;.</>,
          ]}
        />
        <Mistake>Treating the symbols as only decoration. They remind us that people of many kinds are one country.</Mistake>
      </>,
    ),
  },
  {
    title: 'National days',
    content: slide(
      <>
        <Rule>National days are days that the whole country remembers or celebrates. Each one has a meaning.</Rule>
        <DaysTable />
        <Worked
          steps={NATIONAL_DAYS.slice(0, 4).map((d) => <><strong>{d.name} ({d.day} {d.month}):</strong> {d.what}</>)}
        />
        <Mistake>Learning the dates without the meaning. Know what each day remembers or celebrates.</Mistake>
      </>,
    ),
  },
  {
    title: 'More national days and how we take part',
    content: slide(
      <>
        <Rule>We can take part in national days by learning about them, by joining a school event and by doing something kind for others.</Rule>
        <Worked
          steps={[
            ...NATIONAL_DAYS.slice(4).map((d) => <><strong>{d.name} ({d.day} {d.month}):</strong> {d.what}</>),
            <>The CAPS also lists Children&rsquo;s Day, which celebrates children and their rights.</>,
            <>On Mandela Day, people give {MANDELA_MINUTES} minutes of their time to help others, for example by cleaning a park or visiting a neighbour.</>,
          ]}
        />
        <Mistake>Thinking that national days are only days off school. They are for remembering and for working together.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is cultural heritage? Give one example.</>,
          <>Name the three national symbols.</>,
          <>On which date is Freedom Day, and what does it remember?</>,
          <>How many minutes do people give on Mandela Day?</>,
        ]}
        answers={[
          <>What is passed on from the past, such as a language, a song or a custom.</>,
          <>The flag, the anthem and the coat of arms.</>,
          <>27 April; the first democratic election of 1994.</>,
          <>{MANDELA_MINUTES} minutes.</>,
        ]}
      />,
    ),
  },
];
