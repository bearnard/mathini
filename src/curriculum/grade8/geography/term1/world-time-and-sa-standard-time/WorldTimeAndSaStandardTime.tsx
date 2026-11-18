import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { DEGREES_PER_HOUR, SA_MERIDIAN, ZONES, clock, convertTime, meridianOffsetHours } from '../../../../../components/diagrams/geo8/grade8Geo';

// Every time and offset comes from grade8Geo (checked with Date arithmetic in grade8Geo.test.ts); g8GeographyC.test.ts checks the rendered text.
// Standard time only: South Africa is UTC+2 all year and has no daylight saving.
const jhb = ZONES.johannesburg.minutes;
const at = (zone: { minutes: number }, hour: number, minute = 0) => convertTime(hour, minute, jhb, zone.minutes);
const noon = {
  london: at(ZONES.london, 12),
  nairobi: at(ZONES.nairobi, 12),
  delhi: at(ZONES.delhi, 12),
  tokyo: at(ZONES.tokyo, 12),
};
const late = at(ZONES.tokyo, 22);
const hours = (m: number) => `${Math.floor(m / 60)} hours${m % 60 ? ` ${m % 60} minutes` : ''}`;
const saHours = meridianOffsetHours(SA_MERIDIAN);
const east45 = meridianOffsetHours(45);
const east15 = meridianOffsetHours(15);
const minutesPerDegree = 60 / DEGREES_PER_HOUR;
const capeTownLon = 18;
const capeTownMinutes = (SA_MERIDIAN - capeTownLon) * minutesPerDegree;
const durbanLon = 31;
const durbanMinutes = (durbanLon - SA_MERIDIAN) * minutesPerDegree;
const c1 = convertTime(8, 0, jhb, ZONES.nairobi.minutes);
const c2 = convertTime(8, 0, jhb, ZONES.london.minutes);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Rotation, longitude and the hour',
    content: slide(
      <>
        <Rule>{`The Earth rotates once in 24 hours, so 360° ÷ 24 = ${DEGREES_PER_HOUR}° of longitude passes the Sun every hour. The Sun seems to move from east to west, so places to the east see it first and are ahead in time. Time is measured from the Prime Meridian (0°) at Greenwich.`}</Rule>
        <FactCards
          cards={[
            { title: "Rotation", line1: "once in 24 hours", line2: "from west to east" },
            { title: "One hour", line1: "15° of longitude", line2: "360° ÷ 24" },
            { title: "East of 0°", line1: "ahead in time,", line2: "the sun comes first" },
            { title: "West of 0°", line1: "behind in time,", line2: "the sun comes later" },
          ]}
          aria={'Rotation and time. The Earth rotates once in 24 hours. One hour is 15 degrees of longitude because 360 divided by 24 is 15. Places east of 0 degrees are ahead in time. Places west of 0 degrees are behind in time.'}
        />
        <Worked
          steps={[
            `${SA_MERIDIAN}° ÷ ${DEGREES_PER_HOUR}° = ${saHours} hours, so a place on ${SA_MERIDIAN}° E is ${saHours} hours ahead of Greenwich.`,
            `A place on 15° E is ${east15} hour ahead, and a place on 45° E is ${east45} hours ahead.`,
            'A place on 15° W is 1 hour behind Greenwich.',
          ]}
        />
        <Mistake>Adding hours when you travel west. West of Greenwich the clocks are behind, so you subtract.</Mistake>
      </>,
    ),
  },
  {
    title: 'South African Standard Time',
    content: slide(
      <>
        <Rule>{`South Africa uses one time for the whole country, South African Standard Time. It is based on the ${SA_MERIDIAN}° E meridian, so it is UTC+${saHours} all year, and the country does not change its clocks in summer.`}</Rule>
        <FactCards
          cards={[
            { title: "SAST", line1: "UTC+2 all year,", line2: "no daylight saving" },
            { title: "30° E", line1: "the standard", line2: "meridian of the country" },
            { title: "Cape Town", line1: "about 18° E: the sun is", line2: "about 48 minutes later" },
            { title: "Durban", line1: "about 31° E: the sun is", line2: "about 4 minutes earlier" },
          ]}
          aria={'South African Standard Time. The country uses UTC plus 2 all year with no daylight saving. The standard meridian is 30 degrees east. Cape Town is about 18 degrees east, so the sun is about 48 minutes later. Durban is about 31 degrees east, so the sun is about 4 minutes earlier.'}
        />
        <Worked
          steps={[
            `Every degree of longitude is ${minutesPerDegree} minutes of time, because 60 minutes ÷ ${DEGREES_PER_HOUR}° = ${minutesPerDegree}.`,
            `Cape Town is about ${capeTownLon}° E, which is ${SA_MERIDIAN - capeTownLon}° west of the ${SA_MERIDIAN}° meridian: ${SA_MERIDIAN - capeTownLon} × ${minutesPerDegree} = ${capeTownMinutes} minutes later.`,
            `Durban is about ${durbanLon}° E, which is ${durbanLon - SA_MERIDIAN}° east: ${durbanLon - SA_MERIDIAN} × ${minutesPerDegree} = ${durbanMinutes} minutes earlier.`,
          ]}
        />
        <Mistake>Saying that South Africa has several time zones. The whole country uses the same time, even though the sun rises earlier in the east than in the west.</Mistake>
      </>,
    ),
  },
  {
    title: 'Time differences and the date line',
    content: slide(
      <>
        <Rule>To change the time, add the difference in hours for a place to the east and subtract it for a place to the west. The International Date Line runs near 180°. Crossing it from east to west, you move forward one day; crossing it from west to east, you go back one day.</Rule>
        <FactCards
          cards={[
            { title: "London", line1: "10:00", line2: "GMT, UTC+0" },
            { title: "Nairobi", line1: "13:00", line2: "UTC+3" },
            { title: "Delhi", line1: "15:30", line2: "UTC+5:30" },
            { title: "Tokyo", line1: "19:00", line2: "UTC+9" },
          ]}
          aria={`The time in four places when it is 12:00 in Johannesburg. London is ${clock(noon.london.hour, noon.london.minute)}. Nairobi is ${clock(noon.nairobi.hour, noon.nairobi.minute)}. Delhi is ${clock(noon.delhi.hour, noon.delhi.minute)}. Tokyo is ${clock(noon.tokyo.hour, noon.tokyo.minute)}.`}
        />
        <Worked
          title="It is 12:00 in Johannesburg (UTC+2)."
          steps={[
            `Tokyo is UTC+9, which is 9 − 2 = 7 hours ahead: ${clock(noon.tokyo.hour, noon.tokyo.minute)}.`,
            `London is UTC+0, which is 2 hours behind: ${clock(noon.london.hour, noon.london.minute)}.`,
            `Delhi is UTC+5:30, which is ${hours(ZONES.delhi.minutes - jhb)} ahead: ${clock(noon.delhi.hour, noon.delhi.minute)}.`,
            `At 22:00 in Johannesburg it is ${clock(late.hour, late.minute)} the next day in Tokyo.`,
          ]}
        />
        <Mistake>Forgetting the half hour in some places. Delhi is UTC+5:30, so it is 3 hours 30 minutes ahead of Johannesburg, not 3 hours.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          'How many degrees of longitude are equal to one hour?',
          'How many hours ahead of Greenwich is a place on 45° E?',
          'It is 08:00 in Johannesburg. What is the time in Nairobi (UTC+3)?',
          'It is 08:00 in Johannesburg. What is the time in London (GMT, UTC+0)?',
        ]}
        answers={[
          `${DEGREES_PER_HOUR}° (360° ÷ 24).`,
          `${east45} hours.`,
          `${clock(c1.hour, c1.minute)}.`,
          `${clock(c2.hour, c2.minute)}.`,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "How many degrees of longitude does the Sun appear to cross in one hour?",
    options: ["24°", "30°", "15°", "60°"],
    answer: "15°",
    explanation: "360° ÷ 24 hours = 15° an hour.",
  },
  {
    prompt: "Which meridian is the starting point for measuring world time?",
    options: ["The Prime Meridian at Greenwich", "The equator at 0°", "The 30° E meridian of South Africa", "The International Date Line near 180°"],
    answer: "The Prime Meridian at Greenwich",
    explanation: "Time is measured from the Prime Meridian, 0° longitude at Greenwich.",
  },
  {
    prompt: "Places east of Greenwich are",
    options: ["behind Greenwich time", "at the same time as Greenwich", "five hours behind Greenwich", "ahead of Greenwich time"],
    answer: "ahead of Greenwich time",
    explanation: "The Sun reaches places in the east first, so their clocks are ahead.",
  },
  {
    prompt: "Which line of longitude does the time in South Africa follow?",
    options: ["15° E", "30° E", "0°", "45° E"],
    answer: "30° E",
    explanation: "South Africa uses the 30° E meridian, 2 hours ahead of Greenwich.",
  },
  {
    prompt: "How many hours ahead of UTC is South African Standard Time?",
    options: ["1 hour", "3 hours", "2 hours", "30 minutes"],
    answer: "2 hours",
    explanation: "30° ÷ 15° = 2 hours.",
  },
  {
    prompt: "How many time zones does South Africa have?",
    options: ["One", "Two", "Three", "Four"],
    answer: "One",
    explanation: "The whole country uses South African Standard Time.",
  },
  {
    prompt: "What happens to South African clocks when summer comes?",
    options: ["They move forward one hour", "They move back two hours", "They move forward in the east", "Nothing, they stay the same"],
    answer: "Nothing, they stay the same",
    explanation: "South African Standard Time is UTC+2 all year.",
  },
  {
    prompt: "A town on 75° E is how many hours ahead of Greenwich?",
    options: ["4 hours", "5 hours", "6 hours", "75 hours"],
    answer: "5 hours",
    explanation: "75° ÷ 15° = 5 hours.",
  },
  {
    prompt: "It is 12:00 SAST. What is the time in Lagos (UTC+1)?",
    options: ["13:00", "10:00", "11:00", "12:00"],
    answer: "11:00",
    explanation: "Lagos is 1 hour behind Johannesburg (UTC+2).",
  },
  {
    prompt: "It is 09:00 SAST. What is the time in Nairobi (UTC+3)?",
    options: ["10:00", "08:00", "12:00", "07:00"],
    answer: "10:00",
    explanation: "Nairobi is 1 hour ahead of Johannesburg.",
  },
  {
    prompt: "It is 18:00 SAST. What is the time in Tokyo (UTC+9)?",
    options: ["01:00 on the same day", "11:00 on the same day", "09:00 the next day", "01:00 the next day"],
    answer: "01:00 the next day",
    explanation: "Tokyo is 7 hours ahead, so 18:00 + 7 hours = 01:00 on the next day.",
  },
  {
    prompt: "Near which line of longitude does the International Date Line mostly run?",
    options: ["The equator", "The 180° meridian", "The Prime Meridian", "The 30° E meridian"],
    answer: "The 180° meridian",
    explanation: "The International Date Line runs near 180°.",
  },
  {
    prompt: "Why do places in the east of South Africa see the Sun slightly earlier than places in the west?",
    options: ["The east lies nearer the Sun's path", "The west lies in a different time zone", "The Earth rotates towards the east", "The Sun moves faster over the east"],
    answer: "The Earth rotates towards the east",
    explanation: "Places further east reach the Sun's light first.",
  },
  {
    prompt: "Delhi is UTC+5:30. How far ahead of SAST (UTC+2) is it?",
    options: ["3 hours 30 minutes", "5 hours 30 minutes", "2 hours 30 minutes", "3 hours"],
    answer: "3 hours 30 minutes",
    explanation: "5:30 − 2:00 = 3:30.",
  },
];

const WorldTimeAndSaStandardTime = () => (
  <CapsSubjectTopic
    title="World Time and South African Standard Time"
    subtitle="Longitude and time, time zones, the date line and the time in South Africa"
    learnSteps={learnSteps}
    task="gr8-world-time-and-sa-standard-time-t1"
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default WorldTimeAndSaStandardTime;
