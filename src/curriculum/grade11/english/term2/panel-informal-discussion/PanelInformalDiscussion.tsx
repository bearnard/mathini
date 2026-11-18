import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You keep a conversation going and share your view with reasons. Which kind of oral task is this?",
    options: ["A vote of thanks on a device", "An informal discussion", "A prepared speech in use for a user", "A rebuttal at work in a lab"],
    answer: "An informal discussion",
    explanation: "An informal discussion asks you to start, sustain and defend a position.",
  },
  {
    prompt: "Two classmates disagree and you suggest a fair middle way. What are you doing?",
    options: ["Interrupting", "Negotiating", "Reading aloud", "Closing the meeting"],
    answer: "Negotiating",
    explanation: "To negotiate is to look for a compromise.",
  },
  {
    prompt: "You wait until a speaker finishes before you talk. Which convention are you using?",
    options: ["Resolution on a system", "Rebuttal at a school", "Turn-taking", "Closure"],
    answer: "Turn-taking",
    explanation: "Turn-taking means speakers talk one at a time.",
  },
  {
    prompt: "You invite a quiet member of your group to share an idea. What are you doing?",
    options: ["Encouraging participation", "Calling for a vote in use for a user", "Giving a rebuttal at work in a lab", "Introducing a speaker in a file"],
    answer: "Encouraging participation",
    explanation: "Encouraging others helps everyone take part in the conversation.",
  },
  {
    prompt: "Several speakers each talk about one aspect of a topic before an audience. What is this?",
    options: ["A prepared dialogue", "A panel discussion", "An unprepared speech", "A written interview"],
    answer: "A panel discussion",
    explanation: "A panel has speakers who each cover one part of the topic.",
  },
  {
    prompt: "About how long does a panel or group discussion usually last?",
    options: ["1 to 2 minutes", "20 to 30 minutes", "3 to 4 hours", "45 to 60 minutes"],
    answer: "20 to 30 minutes",
    explanation: "Group and panel discussions are about 20 to 30 minutes long.",
  },
  {
    prompt: "Who introduces the topic and guides a panel discussion?",
    options: ["The chairperson", "The timekeeper", "The audience", "The negative team"],
    answer: "The chairperson",
    explanation: "The chairperson introduces the speakers and manages the discussion.",
  },
  {
    prompt: "The chairperson says that one speaker has talked for too long and moves on. Which duty is this?",
    options: ["Calling a vote", "Remaining neutral", "Writing the minutes", "Managing time"],
    answer: "Managing time",
    explanation: "Managing time means making sure each speaker gets a fair turn.",
  },
  {
    prompt: "The chairperson brings the talk back when it drifts. Which duty is this?",
    options: ["Giving a personal view", "Thanking the guests", "Drafting the agenda", "Keeping to the agenda"],
    answer: "Keeping to the agenda",
    explanation: "Keeping to the agenda keeps the discussion on track.",
  },
  {
    prompt: "Which is correct about a chairperson?",
    options: ["The chairperson argues one side", "The chairperson speaks the most", "The chairperson avoids the audience", "The chairperson stays neutral"],
    answer: "The chairperson stays neutral",
    explanation: "A chairperson remains neutral and fair.",
  },
  {
    prompt: "You begin your point with Thank you, Chairperson. What is this?",
    options: ["A statistic at a school on a device", "A rebuttal for a task in use", "A resolution in a program", "A conventional phrase"],
    answer: "A conventional phrase",
    explanation: "Conventional phrases are fixed polite expressions used in panels.",
  },
  {
    prompt: "Which phrase disagrees politely?",
    options: ["I see it differently, because", "That is a silly idea on a system", "You are wrong, so be quiet at a school", "I will not listen to you for a task"],
    answer: "I see it differently, because",
    explanation: "A polite disagreement gives a reason and shows respect.",
  },
  {
    prompt: "You and two others are each given a different aspect of a topic to talk about. Why is this useful?",
    options: ["It lets the chairperson skip the introduction", "It makes the panel longer than needed", "It removes the need for an audience", "It avoids repetition between the speakers"],
    answer: "It avoids repetition between the speakers",
    explanation: "Dividing the topic means each speaker adds something new.",
  },
  {
    prompt: "During a panel, you show respect for a cultural convention. Which listening skill is this?",
    options: ["Listening for the facts only for a user at a school", "Listening for the final mark in a lab for a task", "Listening to a recording on a system in a program", "Listening for appreciation and interaction"],
    answer: "Listening for appreciation and interaction",
    explanation: "This listening respects culture, body language and good manners in conversation.",
  },
];

const PanelInformalDiscussion = () => (
  <CapsSubjectTopic
    title="Panel and Informal Discussions"
    subtitle="Conversation skills, the chairperson\u2019s duties, conventional phrases and how a panel works"
    learnSteps={learnSteps}
    task="gr11-panel-informal-discussion-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={11}
  />
);

export default PanelInformalDiscussion;
