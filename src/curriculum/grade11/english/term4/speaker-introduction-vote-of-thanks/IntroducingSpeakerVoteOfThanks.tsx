import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You must introduce a guest speaker to the school. What should the introduction do?",
    options: ["Replace the speech of the guest", "Prepare the audience to listen", "Argue about the guest’s topic", "Give marks to the guest"],
    answer: "Prepare the audience to listen",
    explanation: "An introduction prepares the audience for the speaker.",
  },
  {
    prompt: "How long is a task to introduce a speaker?",
    options: ["20 to 30 minutes", "4 to 5 minutes", "45 to 60 minutes", "1 to 2 hours"],
    answer: "4 to 5 minutes",
    explanation: "Introducing a speaker or giving a vote of thanks is about 4 to 5 minutes.",
  },
  {
    prompt: "Where should you find details for the introduction?",
    options: ["From rumours at school in a lab for a task", "From the speaker, including their CV", "From the audience at the event on a system", "From a made-up list of facts at a school"],
    answer: "From the speaker, including their CV",
    explanation: "You find out from the speaker what they want used.",
  },
  {
    prompt: "When do you say the speaker’s name in your introduction?",
    options: ["In the middle", "Never in the speech", "Before the welcome", "At the end"],
    answer: "At the end",
    explanation: "Announcing the name last builds up to the speaker.",
  },
  {
    prompt: "Which language suits an introduction?",
    options: ["Slang and jokes", "Formal and respectful", "Texting abbreviations", "Rude comments"],
    answer: "Formal and respectful",
    explanation: "An introduction uses formal language and does not try to be funny.",
  },
  {
    prompt: "You mention the speaker’s hobbies. When is this appropriate?",
    options: ["Always, at the start for a user at a school", "Never, under any rule in a lab for a task", "Only if the audience asks on a system in a program", "Only if it fits the context of the talk"],
    answer: "Only if it fits the context of the talk",
    explanation: "Hobbies are mentioned only when they relate to the occasion.",
  },
  {
    prompt: "Your introduction of a guest goes on for a long time. What is wrong with that?",
    options: ["The speaker cannot be found at work in a lab", "The audience cannot listen long in a file", "The audience came to hear the speaker", "The marks are lower for long ones for a user"],
    answer: "The audience came to hear the speaker",
    explanation: "The focus should be on the guest, not on the person who introduces them.",
  },
  {
    prompt: "You explain why the speaker was invited to the function. What are you doing?",
    options: ["Writing the minutes on a device in a file", "Calling a vote in use for a user", "Linking the introduction to the theme", "Giving a rebuttal at work in a lab"],
    answer: "Linking the introduction to the theme",
    explanation: "The introduction relates the speaker to the theme of the event.",
  },
  {
    prompt: "You thank the speaker after the talk. Which task is this?",
    options: ["A vote of thanks", "An introduction", "A debate rebuttal", "A panel summary"],
    answer: "A vote of thanks",
    explanation: "A vote of thanks follows the speaker’s address.",
  },
  {
    prompt: "Why must you listen carefully to the talk before the vote of thanks?",
    options: ["To write the whole speech again", "To ask the audience to leave", "To point out some highlights", "To change the topic"],
    answer: "To point out some highlights",
    explanation: "Listening lets you name specific strong points.",
  },
  {
    prompt: "Which vote of thanks is best?",
    options: ["One that names a point you found valuable", "One that only says thanks, nice talk in a file", "One that criticises the speaker for a user at a school", "One that repeats the whole talk in a lab for a task"],
    answer: "One that names a point you found valuable",
    explanation: "A specific highlight shows you listened.",
  },
  {
    prompt: "How long should a vote of thanks be?",
    options: ["Longer than the speech", "Ten pages of notes", "Silent and long", "Short and to the point"],
    answer: "Short and to the point",
    explanation: "A vote of thanks is short and focused.",
  },
  {
    prompt: "You say we thank you rather than I thank you. Why?",
    options: ["You are afraid of speaking alone for a user", "You forgot the speaker’s name in a lab", "You speak on behalf of the audience", "You are reading the minutes on a system"],
    answer: "You speak on behalf of the audience",
    explanation: "A vote of thanks is given on behalf of the audience.",
  },
  {
    prompt: "Which statement shows the difference between the two tasks?",
    options: ["Both tasks are about the same length of time as a debate in a file", "An introduction is informal and a vote of thanks is a joke for a user", "An introduction looks forward and a vote of thanks looks back", "Only a vote of thanks has a speaker in a lab for a task"],
    answer: "An introduction looks forward and a vote of thanks looks back",
    explanation: "One prepares the audience and the other responds to what was said.",
  },
];

const IntroducingSpeakerVoteOfThanks = () => (
  <CapsSubjectTopic
    title="Introducing a Speaker and Offering a Vote of Thanks"
    subtitle="What to research, how to welcome and introduce a guest, and how to thank them with specific points"
    learnSteps={learnSteps}
    task="gr11-introducing-speaker-vote-of-thanks-t4"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={11}
  />
);

export default IntroducingSpeakerVoteOfThanks;
