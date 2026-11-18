import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Your culture expects boys never to show feelings. What can this do to a boy?",
    options: ["Make him taller on a device in a file", "Make him better at sport in use for a user", "Make him hide feelings and avoid help", "Remove all stress at work in a lab"],
    answer: "Make him hide feelings and avoid help",
    explanation: "Hiding feelings can harm well-being.",
  },
  {
    prompt: "A family expects girls to do all the housework. What is a likely effect?",
    options: ["Girls have less time to study and rest", "Boys study less on a system in a program", "Everyone gets more sleep at a school on a device", "The chores finish sooner for all for a task"],
    answer: "Girls have less time to study and rest",
    explanation: "Unequal chores leave girls with less time for themselves.",
  },
  {
    prompt: "Which statement about gender roles is correct?",
    options: ["They are fixed for all of time on a device in a file", "They are the same everywhere in use for a user", "They differ between cultures and can change", "They are written in the Constitution at work in a lab"],
    answer: "They differ between cultures and can change",
    explanation: "Gender roles are shaped by culture and can change.",
  },
  {
    prompt: "One gender holds much more power than the other in a relationship. What can this lead to?",
    options: ["Equal sharing", "Better communication", "Abuse of power", "Fair decisions"],
    answer: "Abuse of power",
    explanation: "Unequal power makes abuse of power more likely.",
  },
  {
    prompt: "A manager pressures a worker for sexual favours. What is this?",
    options: ["A work reward on a system", "A friendly chat at a school", "A salary review for a task", "Sexual harassment"],
    answer: "Sexual harassment",
    explanation: "Unwanted sexual pressure at work is sexual harassment.",
  },
  {
    prompt: "A widow must follow stricter mourning rules than a widower. What does this show?",
    options: ["An equal tradition for a user at a school", "Unequal treatment based on gender", "A legal duty for all in a lab for a task", "A health benefit on a system in a program"],
    answer: "Unequal treatment based on gender",
    explanation: "Different rules for each gender show unequal treatment.",
  },
  {
    prompt: "A partner hits another partner. Which kind of abuse is this?",
    options: ["Economic growth", "Peer pressure", "Physical abuse", "Hygiene"],
    answer: "Physical abuse",
    explanation: "Hitting someone is physical abuse and a crime.",
  },
  {
    prompt: "Which setting is an example of abuse of power in a family?",
    options: ["Sexual abuse by a relative", "A shared meal at work in a lab", "A birthday party in a file on a system", "A family holiday for a user at a school"],
    answer: "Sexual abuse by a relative",
    explanation: "Abuse by a family member is a misuse of power and a crime.",
  },
  {
    prompt: "You are tired, anxious and cannot concentrate because of violence at home. What does this show?",
    options: ["Abuse can harm school work", "Abuse affects adults and not teenagers", "Abuse improves school marks", "Abuse is a private matter without effect"],
    answer: "Abuse can harm school work",
    explanation: "Abuse can affect concentration, health and well-being.",
  },
  {
    prompt: "Whose fault is abuse?",
    options: ["The person who was harmed in a lab", "The person who abuses power", "The neighbours on a system in a program", "The police at a school on a device"],
    answer: "The person who abuses power",
    explanation: "Responsibility lies with the person who abuses power.",
  },
  {
    prompt: "Which law protects people from abuse in the home?",
    options: ["The Mining Act in a file on a system", "The Domestic Violence Act", "The Road Traffic Act for a user", "The Tourism Act in a lab for a task"],
    answer: "The Domestic Violence Act",
    explanation: "The Domestic Violence Act protects people from abuse at home.",
  },
  {
    prompt: "Which right in the Constitution helps to address gender inequality?",
    options: ["The right to control others in use for a user", "The right to avoid school at work in a lab", "The right to equality and dignity", "The right to keep secrets in a file on a system"],
    answer: "The right to equality and dignity",
    explanation: "The Constitution protects equality and human dignity.",
  },
  {
    prompt: "A friend tells you about abuse at home. What is a helpful response?",
    options: ["Tell them to keep quiet about it at home", "Tell them it was partly their own fault", "Listen and help them to reach support", "Ignore it and change the subject to sport"],
    answer: "Listen and help them to reach support",
    explanation: "Listening and helping someone to reach support is the right step.",
  },
  {
    prompt: "Which number is the GBV Command Centre?",
    options: ["0800 428 428", "10111", "116", "0800 012 322"],
    answer: "0800 428 428",
    explanation: "The GBV Command Centre number is 0800 428 428.",
  },
];

const GenderRolesPowerAbuse = () => (
  <CapsSubjectTopic
    title="Gender Roles and Unequal Power"
    subtitle="How gender roles affect health and well-being, where power is misused, and how to address inequality"
    learnSteps={learnSteps}
    task="gr11-gender-roles-power-abuse-t4"
    bank={bank}
    apiPath="/api/caps/lo"
    grade={11}
  />
);

export default GenderRolesPowerAbuse;
