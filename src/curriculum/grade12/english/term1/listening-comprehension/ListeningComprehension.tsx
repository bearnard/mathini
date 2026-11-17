import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is the difference between listening and hearing?",
    options: ["Hearing means thinking about the meaning", "Listening needs no attention at all", "Hearing needs a note book to be used", "Listening takes in the meaning"],
    answer: "Listening takes in the meaning",
    explanation: "Listening means taking in the message and thinking about it.",
  },
  {
    prompt: "How many phases does the listening process have?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation: "The phases are pre-listening, during listening and post-listening.",
  },
  {
    prompt: "Which is a pre-listening activity?",
    options: ["Summarising the talk once it has ended", "Asking questions at the end of the talk", "Writing a reply to the speaker", "Predicting what the speaker will say"],
    answer: "Predicting what the speaker will say",
    explanation: "Setting the context and predicting are pre-listening activities.",
  },
  {
    prompt: "Which is a post-listening activity?",
    options: ["Predicting the topic of the next talk", "Summarising what the speaker said", "Reading the title printed on the poster", "Deciding where to sit in the hall"],
    answer: "Summarising what the speaker said",
    explanation: "Summarising and evaluating come after listening.",
  },
  {
    prompt: "How long is the audio clip in the Grade 12 listening task?",
    options: ["Half an hour", "About ten minutes", "Three minutes", "One whole minute"],
    answer: "Three minutes",
    explanation: "Grade 12 uses an audio clip of about three minutes, played at least twice.",
  },
  {
    prompt: "Which kind of listening is used to follow directions?",
    options: ["Listening for appreciation in a group", "Listening for specific details", "Listening for fun and entertainment", "Listening for silence in a room"],
    answer: "Listening for specific details",
    explanation: "Directions need specific details such as turns and distances.",
  },
  {
    prompt: "A learner decides whether a speech is one-sided. Which kind of listening is this?",
    options: ["Critical analysis and evaluation", "Listening for specific information", "Listening for entertainment", "Listening for the time"],
    answer: "Critical analysis and evaluation",
    explanation: "Judging bias is critical analysis and evaluation.",
  },
  {
    prompt: "Which kind of listening is used in a group discussion?",
    options: ["Listening for specific facts only", "Listening for interaction", "Listening in silence to a recording", "Listening to a long recorded lecture"],
    answer: "Listening for interaction",
    explanation: "In a discussion you respond to what others say and to their tone and gestures.",
  },
  {
    prompt: "Which of these is a fact?",
    options: ["The council has shamefully failed us", "This is the best plan ever made", "The dam is 40% full", "Everyone dislikes the new rule"],
    answer: "The dam is 40% full",
    explanation: "A fact can be checked, for example by a measurement.",
  },
  {
    prompt: "Which of these is an opinion?",
    options: ["The new rule is unfair", "The meeting starts at nine", "The hall holds 200 people", "The school has 800 learners"],
    answer: "The new rule is unfair",
    explanation: "An opinion is a personal judgement that cannot be checked in the same way.",
  },
  {
    prompt: "Why do speakers use emotive language?",
    options: ["To give accurate measurements", "To stir the listeners' feelings", "To make the speech much shorter", "To avoid persuading anyone at all"],
    answer: "To stir the listeners' feelings",
    explanation: "Emotive words appeal to feelings and can persuade without giving evidence.",
  },
  {
    prompt: "A speaker says: \"Everyone knows this is the only fair plan.\" What does this show?",
    options: ["A balanced view of the whole issue", "A neat list of facts about the issue", "Bias, as other views are ignored", "A neutral report on the whole issue"],
    answer: "Bias, as other views are ignored",
    explanation: "Words such as everyone and only ignore other views, which shows bias.",
  },
  {
    prompt: "Why are key words better than full sentences in notes?",
    options: ["Full sentences are wrong in notes", "Teachers do not read any notes", "They are quick, so you miss less", "Key words are not useful to learners"],
    answer: "They are quick, so you miss less",
    explanation: "Short notes let you keep up with the speaker.",
  },
  {
    prompt: "Which method of making notes puts the topic in the middle with branches?",
    options: ["Mapping", "Outlining", "Summarising", "Categorising"],
    answer: "Mapping",
    explanation: "A map or mind map has the topic in the centre.",
  },
];

const ListeningComprehension = () => (
  <CapsSubjectTopic
    title="Listening for Comprehension"
    subtitle="The listening process, kinds of listening, listening critically, and making notes"
    learnSteps={learnSteps}
    task="gr12-listening-comprehension-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default ListeningComprehension;
