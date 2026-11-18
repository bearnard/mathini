import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You read a weather chart. What does it show for each day?",
    options: ["A story with characters in use for a user", "The weather and the temperatures", "A list of recipes at work in a lab", "A set of directions in a file on a system"],
    answer: "The weather and the temperatures",
    explanation: "A weather chart shows the weather and temperatures for each day.",
  },
  {
    prompt: "What does the symbol °C stand for?",
    options: ["Degrees Celsius", "Cold days", "Cloudy conditions", "Centimetres"],
    answer: "Degrees Celsius",
    explanation: "°C is the unit used to measure temperature.",
  },
  {
    prompt: "On a chart, Monday has a high of 28 °C and a low of 14 °C. What is the high?",
    options: ["The coolest temperature of the day", "The rain for the day", "The warmest temperature of the day", "The wind speed"],
    answer: "The warmest temperature of the day",
    explanation: "The high is the warmest temperature of the day.",
  },
  {
    prompt: "Which day has the highest temperature in the chart: Monday 28 °C, Tuesday 24 °C, Wednesday 21 °C?",
    options: ["Monday", "Tuesday", "Wednesday", "Not clear"],
    answer: "Monday",
    explanation: "28 °C is the highest of the three.",
  },
  {
    prompt: "The chart shows 8 mm for Wednesday. What does mm measure here?",
    options: ["Rainfall", "Wind speed", "Cloud cover", "Sunshine"],
    answer: "Rainfall",
    explanation: "Millimetres of rain measure how much rain fell.",
  },
  {
    prompt: "Which tense do you use for tomorrow’s weather?",
    options: ["The past tense", "The command form", "The future tense", "The question form"],
    answer: "The future tense",
    explanation: "Weather forecasts say what will happen.",
  },
  {
    prompt: "Which sentence is a fact in a weather report?",
    options: ["It will be a lovely day", "The high will be 21 °C", "I love the rain", "Rain makes everyone sad"],
    answer: "The high will be 21 °C",
    explanation: "A fact can be checked, such as a temperature.",
  },
  {
    prompt: "What does a key on a weather map show?",
    options: ["The author’s name at work", "A list of steps in a file", "A headline for a user at a school", "What each symbol means"],
    answer: "What each symbol means",
    explanation: "A key explains the symbols.",
  },
  {
    prompt: "Which words show change in a weather report?",
    options: ["Chop, mix, stir for a task in use", "Once upon a time in a program at work", "Later, in the afternoon, by evening", "Dear friend on a device in a file"],
    answer: "Later, in the afternoon, by evening",
    explanation: "Words of time show how weather changes.",
  },
  {
    prompt: "You write the report: Wednesday will be cloudy. What should you add from the chart?",
    options: ["A story with a hero at a school on a device", "The temperatures with their units", "A recipe for pancakes for a task in use", "A dialogue for two friends in a program"],
    answer: "The temperatures with their units",
    explanation: "A report should give the temperatures.",
  },
  {
    prompt: "Which headline suits a weather report?",
    options: ["Weather for Wednesday", "A Brave Hero at work in a lab", "How to Make Pancakes in a file", "Dear Diary for a user at a school"],
    answer: "Weather for Wednesday",
    explanation: "A headline names the topic of the text.",
  },
  {
    prompt: "You write 22 °C but the chart says 21 °C. What should you do?",
    options: ["Leave it alone in a lab for a task", "Correct it to match the chart", "Add an opinion on a system in a program", "Delete the units at a school on a device"],
    answer: "Correct it to match the chart",
    explanation: "Facts in an information text must be correct.",
  },
  {
    prompt: "Why do you check the units in a weather report?",
    options: ["They tell the reader what the numbers mean", "They make the report long in use for a user", "They are an opinion at work in a lab", "They add colour in a file on a system"],
    answer: "They tell the reader what the numbers mean",
    explanation: "Units such as °C and mm make numbers meaningful.",
  },
  {
    prompt: "Which sentence is an opinion that you should leave out of a weather report?",
    options: ["I think it will be lovely", "Rain is expected in the afternoon", "The low will be 12 °C", "Wednesday will be cloudy"],
    answer: "I think it will be lovely",
    explanation: "An opinion is not a fact and does not belong in the report.",
  },
];

const InformationTextWeather = () => (
  <CapsSubjectTopic
    title="Information Texts: Weather Reports and Charts"
    subtitle="Reading and writing a weather report, a weather chart and a symbol key, in present tense and with correct units"
    learnSteps={learnSteps}
    task="eng6-information-text-weather"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default InformationTextWeather;
