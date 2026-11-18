import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You describe a school project using facts and figures. What kind of oral task is this?",
    options: ["A review", "A dialogue", "A report", "A vote of thanks"],
    answer: "A report",
    explanation: "A report informs with facts, in an objective tone.",
  },
  {
    prompt: "You give your judgement of a film and support it with examples. What is this?",
    options: ["A report", "An agenda", "A minute", "A review"],
    answer: "A review",
    explanation: "A review evaluates a work and gives evidence for the judgement.",
  },
  {
    prompt: "About how long is a prepared oral report or review?",
    options: ["20 to 30 minutes", "4 to 5 minutes", "1 to 2 hours", "8 to 10 hours"],
    answer: "4 to 5 minutes",
    explanation: "Prepared speeches, reports and reviews take about 4 to 5 minutes.",
  },
  {
    prompt: "Which tone suits a report?",
    options: ["Objective", "Angry", "Jokey", "Secretive"],
    answer: "Objective",
    explanation: "A report is formal and objective.",
  },
  {
    prompt: "What should an oral report state in its introduction?",
    options: ["The topic and the purpose", "The final recommendation", "The name of every listener", "A joke about the topic"],
    answer: "The topic and the purpose",
    explanation: "The introduction says what the report is about and why.",
  },
  {
    prompt: "Where should you say your figures came from?",
    options: ["In the body of the report, naming your sources", "Nowhere, since they are obvious for a task in use", "Only in a footnote you do not read in a program at work", "In the greeting at the start on a device in a file"],
    answer: "In the body of the report, naming your sources",
    explanation: "Naming sources makes your facts credible.",
  },
  {
    prompt: "How should a report end?",
    options: ["With a new, unrelated topic for a task in use", "With a joke only in a program at work", "With a conclusion that may recommend action", "With the names of the audience on a device in a file"],
    answer: "With a conclusion that may recommend action",
    explanation: "A conclusion sums up and may recommend what to do.",
  },
  {
    prompt: "What should the opening of a review include?",
    options: ["The ending of the story for a task in use", "The name of the work and its creator", "A list of your friends in a program at work", "A vote of thanks on a device in a file"],
    answer: "The name of the work and its creator",
    explanation: "A review opens by naming what is being reviewed.",
  },
  {
    prompt: "How much of the plot should a review give?",
    options: ["A short summary without the ending", "The whole plot, scene by scene on a system", "A list of your feelings about it at a school", "The ending first, then the start for a task"],
    answer: "A short summary without the ending",
    explanation: "A review gives a brief summary and avoids spoilers.",
  },
  {
    prompt: "Which is the strongest opinion in a review?",
    options: ["It was bad and I did not enjoy it at a school on a device", "It was fine, I suppose, and quite long for a task", "I just did not like it much at all in a program", "I liked the setting, as in the market scene"],
    answer: "I liked the setting, as in the market scene",
    explanation: "A good opinion is supported by an example from the work.",
  },
  {
    prompt: "What is a good way to end a review?",
    options: ["A recommendation about who should see or read it", "A new summary of the plot in a program at work", "A complaint about the timer on a device in a file", "A silent pause for ten minutes in use for a user"],
    answer: "A recommendation about who should see or read it",
    explanation: "A recommendation tells the audience what to do with your judgement.",
  },
  {
    prompt: "Which language suits a review best?",
    options: ["Extreme and vague in a program", "Rude and short on a device", "Balanced and specific", "Silent and written in use"],
    answer: "Balanced and specific",
    explanation: "Balanced, specific language is more convincing.",
  },
  {
    prompt: "You rewrite your review as a script and read it word for word. What is wrong?",
    options: ["You lose eye contact with the audience", "You use notes during the speech in use for a user", "You practise with a timer at work in a lab", "You vary your voice in a file on a system"],
    answer: "You lose eye contact with the audience",
    explanation: "Short cue cards let you keep looking at the audience.",
  },
  {
    prompt: "Your review is too long. What should you do?",
    options: ["Cut the least important points", "Speak faster so that it all fits", "Skip the conclusion", "Ignore the timer"],
    answer: "Cut the least important points",
    explanation: "Cut the less important parts to keep to the time.",
  },
];

const ReportReviewOral = () => (
  <CapsSubjectTopic
    title="Oral Reports and Reviews"
    subtitle="Planning, structuring and delivering a 4 to 5 minute oral report or review"
    learnSteps={learnSteps}
    task="gr11-report-review-oral-t4"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={11}
  />
);

export default ReportReviewOral;
