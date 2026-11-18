import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Your friend follows a different religion from yours. What does the Bill of Rights say?",
    options: ["Only one religion is allowed on a device in a file", "You must follow your friend’s religion in use for a user", "Belief should be hidden at school at work in a lab", "Both of you have freedom of religion and belief"],
    answer: "Both of you have freedom of religion and belief",
    explanation: "The Bill of Rights protects freedom of religion, belief and opinion.",
  },
  {
    prompt: "Who is protected by the freedom of religion, belief and opinion in the Bill of Rights?",
    options: ["Members of the biggest religion", "People who were born here", "Everyone in South Africa", "Adults who belong to a congregation"],
    answer: "Everyone in South Africa",
    explanation: "The right covers religion, belief and opinion, for each person in the country.",
  },
  {
    prompt: "A school lets learners take time off for important religious days. What does this show?",
    options: ["A favour to one religion in use for a user", "Respect for freedom of belief", "A waste of school time at work in a lab", "A breach of the Constitution in a file"],
    answer: "Respect for freedom of belief",
    explanation: "Allowing religious days respects freedom of belief.",
  },
  {
    prompt: "Which of these is a value that many religions teach?",
    options: ["Compassion and service", "Hatred of others on a system", "Cheating for gain at a school", "Greed"],
    answer: "Compassion and service",
    explanation: "Many religions teach compassion, honesty and service.",
  },
  {
    prompt: "A faith-based group runs a soup kitchen open to everyone. What does it contribute?",
    options: ["A source of conflict", "Community service", "A ban on other groups", "A tax"],
    answer: "Community service",
    explanation: "Soup kitchens are an example of community service by religious groups.",
  },
  {
    prompt: "Leaders of different religions speak together at a peace event. What does this build?",
    options: ["Division between groups in a program", "Fear of other faiths on a device", "Harmony between communities", "Silence about the past in use for a user"],
    answer: "Harmony between communities",
    explanation: "Interfaith events bring people together.",
  },
  {
    prompt: "You decide to own up to a mistake rather than blame someone. Which action matches this value?",
    options: ["Greed", "Honesty", "Jealousy", "Revenge"],
    answer: "Honesty",
    explanation: "Owning up to a mistake shows honesty.",
  },
  {
    prompt: "You listen to a friend’s different belief without trying to change it. What is this?",
    options: ["Giving up your own beliefs for a task", "Agreeing with every view in a program", "Respecting a differing opinion", "Ignoring the friend on a device in a file"],
    answer: "Respecting a differing opinion",
    explanation: "You can respect a person’s belief without sharing it.",
  },
  {
    prompt: "Which question helps you clarify your values?",
    options: ["What matters most to me?", "What is the weather today?", "How tall are my friends?", "What is the price of bread?"],
    answer: "What matters most to me?",
    explanation: "Asking what matters to you helps you name your core values.",
  },
  {
    prompt: "A situation in which two values conflict and there is no easy answer is called what?",
    options: ["A school rule", "A moral dilemma", "A sports fixture", "A timetable"],
    answer: "A moral dilemma",
    explanation: "A moral dilemma involves a conflict of values.",
  },
  {
    prompt: "Which of these is a moral issue that people debate in South Africa?",
    options: ["Choosing a lunch in use for a user", "Picking a pen at work in a lab", "Euthanasia and the right to life", "Learning to jump in a file on a system"],
    answer: "Euthanasia and the right to life",
    explanation: "Euthanasia and the right to life are classic moral issues.",
  },
  {
    prompt: "Some people argue for euthanasia because it can relieve suffering. What is a different argument?",
    options: ["Dignity does not matter on a device in a file", "Suffering is pleasant in use for a user", "Doctors should never help at work in a lab", "Life is precious and must be protected"],
    answer: "Life is precious and must be protected",
    explanation: "Others stress the value of life and the risks of abuse.",
  },
  {
    prompt: "In a class debate on euthanasia you present your view. What should you also do?",
    options: ["Acknowledge the best point on the other side", "Insult those who disagree in a file on a system", "Refuse to listen for a user at a school", "Leave the room in a lab for a task"],
    answer: "Acknowledge the best point on the other side",
    explanation: "A good debate respects and understands other views.",
  },
  {
    prompt: "What is the first step in thinking through a dilemma?",
    options: ["Choose a side at once at a school on a device", "Ask the loudest person for a task in use", "Identify the issue and the values involved", "Ignore the facts in a program at work"],
    answer: "Identify the issue and the values involved",
    explanation: "Naming the issue and values gives your thinking a clear base.",
  },
];

const ReligionsBeliefMoralDilemmas = () => (
  <CapsSubjectTopic
    title="Religions, Beliefs and Moral Dilemmas"
    subtitle="How South Africa\u2019s religions and belief systems contribute to a harmonious society, and how to think through a dilemma respectfully"
    learnSteps={learnSteps}
    task="gr11-religions-belief-moral-dilemmas-t4"
    bank={bank}
    apiPath="/api/caps/lo"
    grade={11}
  />
);

export default ReligionsBeliefMoralDilemmas;
