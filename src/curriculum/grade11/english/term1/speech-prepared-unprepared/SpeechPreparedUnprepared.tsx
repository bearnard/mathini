import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You must give a speech to your school governing body. What should you decide before you start to write?",
    options: ["The font you will use on your notes at a school on a device", "Who your audience is and why you are speaking", "The colour of the shirt you will wear for a task", "The room in which the speech will be marked in a program"],
    answer: "Who your audience is and why you are speaking",
    explanation: "A speech is planned around the audience and purpose, so register and content follow from them.",
  },
  {
    prompt: "You find a statistic and a quote from an expert for your speech. What are these called?",
    options: ["Introductions that open the speech", "Conclusions that close the speech", "Gestures that help your delivery", "Evidence that supports your points"],
    answer: "Evidence that supports your points",
    explanation: "Statistics, testimony and specific instances are the kinds of proof that back a claim.",
  },
  {
    prompt: "Your speech is meant to last about 4 to 5 minutes. What should you do to check this?",
    options: ["Count the pages of your notes for a task", "Ask a friend how tall you are in a program", "Rehearse aloud and time yourself", "Write the speech out in full on a device"],
    answer: "Rehearse aloud and time yourself",
    explanation: "Rehearsing aloud with a clock shows whether your speech fits the time.",
  },
  {
    prompt: "Your speech describes a problem and then a way to fix it. Which organising pattern is this?",
    options: ["Cause and effect", "Compare and contrast", "Problem and solution", "Chronological order"],
    answer: "Problem and solution",
    explanation: "A problem-and-solution pattern states a difficulty and then proposes how to solve it.",
  },
  {
    prompt: "You begin your speech with a short, surprising question. What is it meant to do?",
    options: ["Give the final conclusion at once", "Thank the teacher for marking", "Win the attention of the audience", "Hand out copies of your notes"],
    answer: "Win the attention of the audience",
    explanation: "A striking introduction catches interest before you state the topic.",
  },
  {
    prompt: "Which ending is strongest for a prepared speech?",
    options: ["Adding a new argument at the last second at work", "Apologising for taking up their time in a file", "Reading out the names of the sources for a user", "Repeating your main idea in a powerful line"],
    answer: "Repeating your main idea in a powerful line",
    explanation: "A powerful conclusion leaves the audience with one clear idea.",
  },
  {
    prompt: "You say that everybody agrees with you but give no reasons. What is missing from the speech?",
    options: ["A bigger voice at the end on a system", "Another greeting to the audience at a school", "A shorter title on the page for a task", "Proof such as a fact or an example"],
    answer: "Proof such as a fact or an example",
    explanation: "A claim needs credible, valid and relevant proof to persuade.",
  },
  {
    prompt: "You use phrases such as Ladies and gentlemen and I want to stress that. What are these?",
    options: ["Statistics taken from a report in use for a user", "Gestures that accompany your words at work in a lab", "Questions asked of a panel in a file on a system", "Forms of address and signals of emphasis"],
    answer: "Forms of address and signals of emphasis",
    explanation: "Such phrases speak directly to the audience and mark important points.",
  },
  {
    prompt: "Your voice is too soft for the back of the room. Which skill must you improve?",
    options: ["Eye contact", "Posture and gestures", "Spelling and punctuation", "Voice projection"],
    answer: "Voice projection",
    explanation: "Projection means speaking loudly and clearly enough for everyone to hear.",
  },
  {
    prompt: "You pause after your most important sentence. Why is this effective?",
    options: ["It shows you forgot your next line at work in a lab", "It gives the audience time to take in the point", "It lets you read the next page silently in a file on a system", "It makes the speech longer than needed for a user at a school"],
    answer: "It gives the audience time to take in the point",
    explanation: "A pause lets a key point sink in and controls your pace.",
  },
  {
    prompt: "You are given a topic and two minutes to prepare. What kind of speech is this?",
    options: ["An unprepared speech", "A prepared speech at work", "A vote of thanks in a file", "A panel discussion for a user"],
    answer: "An unprepared speech",
    explanation: "With only a short time to think, the speech is unprepared.",
  },
  {
    prompt: "You have a minute to plan an unprepared speech. What is the best use of it?",
    options: ["Write the whole speech in full", "Ask the audience to choose a new topic", "Write three key words to speak about", "Learn the speech from memory"],
    answer: "Write three key words to speak about",
    explanation: "Three key words give you a simple structure to follow.",
  },
  {
    prompt: "Which gives the unprepared speech a clear shape in a short time?",
    options: ["An opening, a few points and a conclusion", "A long list of quotations to recite for a task", "A story that has no end in a program at work", "A silence of two minutes on a device in a file"],
    answer: "An opening, a few points and a conclusion",
    explanation: "Even a short speech needs an opening, points and a conclusion.",
  },
  {
    prompt: "Your speech is 2 to 3 minutes and you had a minute to prepare. Which speech did you give?",
    options: ["An unprepared speech", "A prepared speech", "A dialogue with a friend", "A formal debate"],
    answer: "An unprepared speech",
    explanation: "Unprepared speeches are short and given with very little preparation.",
  },
];

const SpeechPreparedUnprepared = () => (
  <CapsSubjectTopic
    title="Prepared and Unprepared Speeches"
    subtitle="Planning, structure, evidence, delivery, and what changes when you have no time to prepare"
    learnSteps={learnSteps}
    task="gr11-prepared-unprepared-speech-t1"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={11}
  />
);

export default SpeechPreparedUnprepared;
