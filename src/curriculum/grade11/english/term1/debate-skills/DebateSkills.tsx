import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "In a school debate your team is told to argue for the statement. What is that statement called?",
    options: ["The rebuttal in a program", "The agenda on a device", "The audience in use", "The resolution"],
    answer: "The resolution",
    explanation: "The resolution is the statement that the two teams argue about.",
  },
  {
    prompt: "You are on the team that agrees with the resolution. Which team are you in?",
    options: ["The affirmative team", "The negative team", "The audience panel", "The timekeeping team"],
    answer: "The affirmative team",
    explanation: "The affirmative team supports the resolution.",
  },
  {
    prompt: "Your team must prove the resolution. Which team carries the burden of proof?",
    options: ["The affirmative team", "The negative team on a device", "The judging panel in use", "The audience at work in a lab"],
    answer: "The affirmative team",
    explanation: "The affirmative team has the burden of proof and opens and closes the debate.",
  },
  {
    prompt: "Your team opens and closes the debate. Which team are you?",
    options: ["The affirmative team", "The negative team at work", "The chairing team in a file", "The scoring team for a user"],
    answer: "The affirmative team",
    explanation: "The affirmative team begins and ends the debate.",
  },
  {
    prompt: "After the first four speeches, what do the teams do?",
    options: ["Vote at once for the winner on a system", "Break to prepare their rebuttals", "Swap sides for the next round at a school", "Leave while the judges decide for a task"],
    answer: "Break to prepare their rebuttals",
    explanation: "A break of about 5 to 10 minutes lets teams prepare rebuttals.",
  },
  {
    prompt: "You answer an argument by showing why the other team is wrong. What are you doing?",
    options: ["Stating the resolution", "Introducing a speaker", "Giving a rebuttal", "Calling a vote"],
    answer: "Giving a rebuttal",
    explanation: "A rebuttal replies to the other team’s argument.",
  },
  {
    prompt: "The negative team must give a logical case. What does the case do?",
    options: ["Repeats the resolution unchanged on a device", "Closes the debate at the end in use for a user", "Refutes the affirmative team’s case", "Thanks the audience for coming at work"],
    answer: "Refutes the affirmative team’s case",
    explanation: "The negative team presents a logical case against the affirmative.",
  },
  {
    prompt: "You are the first affirmative speaker. What must you state?",
    options: ["Only the rebuttals of the other team", "The final result of the debate", "The topic and your first argument", "A vote of thanks to the judges"],
    answer: "The topic and your first argument",
    explanation: "The first affirmative speaker states the topic and the first argument.",
  },
  {
    prompt: "How many arguments does each team make before the rebuttals?",
    options: ["One", "Five", "Ten", "Two"],
    answer: "Two",
    explanation: "Each team states two arguments, one by each speaker.",
  },
  {
    prompt: "Why should you research both sides before a debate?",
    options: ["So that you can skip your own research in a lab for a task", "So that the chairperson can be replaced on a system", "So that you can predict the other team’s points", "So that the audience can vote early at a school on a device"],
    answer: "So that you can predict the other team’s points",
    explanation: "Knowing the other side lets you prepare rebuttals.",
  },
  {
    prompt: "During the other team’s speeches you write down their main points. Why?",
    options: ["To pass them to the audience", "To give them to the chairperson", "To avoid speaking later", "To answer them in your rebuttal"],
    answer: "To answer them in your rebuttal",
    explanation: "Notes on their points let you name and answer each one.",
  },
  {
    prompt: "Which makes the strongest argument in a debate?",
    options: ["A loud voice and no reasons in use for a user", "A joke about the other team at work", "A long list of unrelated facts in a file", "A clear point supported by proof"],
    answer: "A clear point supported by proof",
    explanation: "A strong argument gives a point with proof that links to the resolution.",
  },
  {
    prompt: "Another speaker says something you disagree with. What should you attack?",
    options: ["Their appearance", "Their school", "Their accent", "Their argument"],
    answer: "Their argument",
    explanation: "A debate rewards attacking the argument, not the person.",
  },
  {
    prompt: "What does the chairperson do in a debate?",
    options: ["Keeps order and time", "Argues for the resolution", "Argues against the resolution", "Writes the resolution for the teams"],
    answer: "Keeps order and time",
    explanation: "The chairperson manages the order, time and rules.",
  },
];

const DebateSkills = () => (
  <CapsSubjectTopic
    title="Debate"
    subtitle="The resolution, the two teams, the order of speakers, rebuttals and how to prepare a case"
    learnSteps={learnSteps}
    task="gr11-debate-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={11}
  />
);

export default DebateSkills;
