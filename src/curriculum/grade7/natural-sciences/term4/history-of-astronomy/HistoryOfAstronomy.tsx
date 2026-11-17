import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "What was a day in the early calendars?",
    options: ["From one sunrise to the next sunrise", "From one full moon to the next full moon", "From one season to the next season", "From one new star to the next new star"],
    answer: "From one sunrise to the next sunrise",
    explanation: "A day is the time from one sunrise to the next. A month is from one full moon to the next, and a year includes the four seasons.",
  },
  {
    prompt: "What was a month in the early calendars?",
    options: ["From one sunrise to the next sunrise", "From one summer to the next summer", "From one full moon to the next full moon", "From one planting to the next harvest"],
    answer: "From one full moon to the next full moon",
    explanation: "The Moon's repeating pattern of phases gave people a natural month of about 29,5 days.",
  },
  {
    prompt: "A year is a time period that includes:",
    options: ["one full moon only", "the four seasons", "a single sunrise", "one planting season only"],
    answer: "the four seasons",
    explanation: "A year is the period that includes all four seasons.",
  },
  {
    prompt: "A month between two full moons is about 29,5 days. How many days are in 12 of these moon months?",
    options: ["365 days", "360 days", "348 days", "354 days"],
    answer: "354 days",
    explanation: "12 × 29,5 = 354 days.",
  },
  {
    prompt: "A year of seasons is 365 days and twelve moon months are 354 days. How many days short is the moon calendar?",
    options: ["9 days", "19 days", "11 days", "12 days"],
    answer: "11 days",
    explanation: "365 − 354 = 11 days, so early calendars had to be adjusted to keep up with the seasons.",
  },
  {
    prompt: "Which of these is a way in which early people used patterns in the sky?",
    options: ["To decide when to plant crops", "To make electricity for homes", "To forecast earthquakes exactly", "To measure the speed of sound"],
    answer: "To decide when to plant crops",
    explanation: "People used the sky to know the time for planting, to find direction and to choose special holy days.",
  },
  {
    prompt: "How was knowledge of the sky passed on to the next generation by many early peoples?",
    options: ["On the internet", "In textbooks only", "By telescopes", "In stories"],
    answer: "In stories",
    explanation: "Early peoples passed the knowledge on in stories, long before textbooks.",
  },
  {
    prompt: "What does the isiLimela (the Pleiades) rising in the dawn sky in about June tell farmers?",
    options: ["That the Moon is about to be full", "That it is time to prepare the land for planting", "That the rainy season has just ended", "That the Sun is due south"],
    answer: "That it is time to prepare the land for planting",
    explanation: "In isiXhosa and isiZulu isiLimela means the digging star: its return to the dawn sky tells farmers to prepare the land.",
  },
  {
    prompt: "Which star group helps you to find south in the Southern Hemisphere?",
    options: ["The Pleiades", "The Southern Cross", "The Moon", "A shooting star"],
    answer: "The Southern Cross",
    explanation: "A line along the long arm of the Southern Cross, carried on about 4½ arm lengths, points to the south.",
  },
  {
    prompt: "In 1514, which astronomer put the Sun at the centre of the Solar System?",
    options: ["Galilei", "Kepler", "Newton", "Copernicus"],
    answer: "Copernicus",
    explanation: "Copernicus suggested the Sun-centred model. Galilei, Kepler and Newton came later.",
  },
  {
    prompt: "Who used mathematics in 1609 to describe the orbits of the planets accurately?",
    options: ["Kepler", "Copernicus", "Galilei", "Newton"],
    answer: "Kepler",
    explanation: "Kepler used mathematics to describe the orbits accurately.",
  },
  {
    prompt: "Who built a telescope in 1610 and used it to see the planets and their moons?",
    options: ["Copernicus", "Kepler", "Galilei", "Newton"],
    answer: "Galilei",
    explanation: "Galilei used the telescope to observe planets and their moons.",
  },
  {
    prompt: "Who showed in 1687 that gravity holds the Solar System together?",
    options: ["Copernicus", "Kepler", "Galilei", "Newton"],
    answer: "Newton",
    explanation: "Newton showed that gravity holds the Solar System together.",
  },
  {
    prompt: "How many years passed between Copernicus (1514) and Newton (1687)?",
    options: ["95 years", "173 years", "163 years", "183 years"],
    answer: "173 years",
    explanation: "1687 − 1514 = 173 years.",
  },
];

const HistoryOfAstronomy = () => (
  <CapsSubjectTopic
    title="The History of Astronomy"
    subtitle="From early calendars to Copernicus, Kepler, Galilei and Newton"
    learnSteps={learnSteps}
    task="gr7-history-of-astronomy-t4"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default HistoryOfAstronomy;
