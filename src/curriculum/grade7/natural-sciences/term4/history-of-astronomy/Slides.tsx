import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { AstronomyTimeline, SouthernCross, TwoModels, YearBars } from '../../../../../components/diagrams/g7ns/G7Ns';
import { DISCOVERIES, LUNAR_MONTH_DAYS, YEAR_DAYS, calendarGap, lunarYearDays, yearsBetween } from '../../../../../components/diagrams/g7ns/g7nsHelpers';

// Every number below comes from g7nsHelpers.ts (tested in g7nsHelpers.test.ts and g7NsLessons.test.ts).
const dc = (n: number) => String(n).replace('.', ',');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const by = (who: string) => DISCOVERIES.find((d) => d.who === who)!;

export const learnSteps: LearnStep[] = [
  {
    title: 'Patterns in the sky',
    content: slide(
      <>
        <Rule>The Sun, Moon and stars seem to move in predictable patterns. People watched these patterns and used them to measure time: a day, a month and a year.</Rule>
        <YearBars />
        <Worked
          title="How did early people count time?"
          steps={[
            'A day: from one sunrise to the next sunrise.',
            `A month: from one full moon to the next full moon, about ${dc(LUNAR_MONTH_DAYS)} days.`,
            `A year: the time that includes the four seasons, about ${YEAR_DAYS} days.`,
            `Twelve moons add up to 12 × ${dc(LUNAR_MONTH_DAYS)} = ${lunarYearDays()} days, which is ${calendarGap()} days short of a year. Calendars had to be adjusted.`,
          ]}
        />
        <Mistake>Thinking that a month in an early calendar was always the same length as a modern calendar month. It was the time from one full moon to the next.</Mistake>
      </>,
    ),
  },
  {
    title: 'Using the sky',
    content: slide(
      <>
        <Rule>People used the sky to know when to plant, to find direction and to choose special holy days. They passed the knowledge on in stories.</Rule>
        <SouthernCross />
        <p className="text-left text-slate-700">In isiXhosa and isiZulu the Pleiades star cluster is called isiLimela, the &quot;digging star&quot;. When it rose in the dawn sky in about June, farmers knew that it was time to prepare the land.</p>
        <Worked
          title="Finding south with the Southern Cross"
          steps={[
            'Find the Southern Cross, four bright stars in a cross shape.',
            'Imagine a line along the long arm of the cross, from the top star through the bottom star.',
            'Carry the line on for about 4½ times the length of the arm.',
            'The point on the horizon below that spot is due south.',
          ]}
        />
        <Mistake>Thinking that sky stories are only made-up tales. They carried real, repeating patterns, such as the time to plant, from one generation to the next.</Mistake>
      </>,
    ),
  },
  {
    title: 'The Sun at the centre',
    content: slide(
      <>
        <Rule>Copernicus suggested in {by('Copernicus').year} that the Sun is at the centre of the Solar System. In {by('Kepler').year} Kepler used mathematics to describe the orbits of the planets accurately.</Rule>
        <TwoModels />
        <Worked
          title="How long between the two ideas?"
          steps={[
            `Copernicus: ${by('Copernicus').year}. Kepler: ${by('Kepler').year}.`,
            `Subtract: ${by('Kepler').year} − ${by('Copernicus').year} = ${yearsBetween(by('Copernicus').year, by('Kepler').year)} years.`,
            'Before Copernicus most people believed that the Earth was at the centre and the Sun went round it.',
          ]}
        />
        <Mistake>Saying that Copernicus built a telescope. He suggested the Sun-centred idea before telescopes were used to study the sky.</Mistake>
      </>,
    ),
  },
  {
    title: 'The telescope and gravity',
    content: slide(
      <>
        <Rule>In {by('Galilei').year} Galilei built a telescope and used it to see planets and their moons. In {by('Newton').year} Newton showed that gravity holds the Solar System together.</Rule>
        <AstronomyTimeline />
        <Worked
          title="Put the discoveries in order"
          steps={DISCOVERIES.map((d) => `${d.year}: ${d.who} ${d.what}.`).concat([
            `From Copernicus to Newton is ${by('Newton').year} − ${by('Copernicus').year} = ${yearsBetween(by('Copernicus').year, by('Newton').year)} years.`,
          ])}
        />
        <Mistake>Mixing up the names. Remember the key word for each: Copernicus the Sun, Kepler the orbits, Galilei the telescope, Newton gravity.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How did early people define a day and a month?</>,
          <>Name two ways in which people used the patterns in the sky.</>,
          <>Who suggested in {by('Copernicus').year} that the Sun is at the centre of the Solar System?</>,
          <>How many years passed between {by('Kepler').year} and {by('Newton').year}?</>,
        ]}
        answers={[
          <>A day is from one sunrise to the next. A month is from one full moon to the next.</>,
          <>For example to know when to plant, to find direction, or to choose holy days.</>,
          <>Copernicus.</>,
          <>{by('Newton').year} − {by('Kepler').year} = {yearsBetween(by('Kepler').year, by('Newton').year)} years.</>,
        ]}
      />,
    ),
  },
];
