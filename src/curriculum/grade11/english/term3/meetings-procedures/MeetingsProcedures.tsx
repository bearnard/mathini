import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "You are asked to chair a committee meeting. What is your main task?",
    options: ["To lead the meeting and keep order", "To record the whole discussion in the minutes", "To vote on the motions yourself", "To decide the agenda alone"],
    answer: "To lead the meeting and keep order",
    explanation: "The chairperson opens, guides and keeps order in the meeting.",
  },
  {
    prompt: "You are the secretary of a club. Which job is yours?",
    options: ["Chairing the meeting and calling votes on a system", "Proposing the motions for the meeting at a school", "Seconding the motions for the meeting for a task in use", "Preparing the agenda and recording the minutes"],
    answer: "Preparing the agenda and recording the minutes",
    explanation: "The secretary prepares the agenda and records the minutes.",
  },
  {
    prompt: "Too few members come to your meeting. What is missing?",
    options: ["A resolution", "A quorum", "A rebuttal", "A prepared speech"],
    answer: "A quorum",
    explanation: "A quorum is the number of members needed for a valid meeting.",
  },
  {
    prompt: "What does an agenda show?",
    options: ["The votes cast by each member in a program", "The mistakes in the last meeting on a device", "The items to be discussed, in order", "The names of every guest speaker in use"],
    answer: "The items to be discussed, in order",
    explanation: "The agenda lists what will be discussed and in which order.",
  },
  {
    prompt: "At the start of a meeting, absent members are noted. What is this item called?",
    options: ["The closure item and date", "The motion item to vote on", "The minutes item to read out", "The apologies item"],
    answer: "The apologies item",
    explanation: "Apologies record the members who cannot attend.",
  },
  {
    prompt: "Where do you raise a new topic that is not on the agenda?",
    options: ["Under general business", "Before the welcome", "During the vote", "After the meeting closes"],
    answer: "Under general business",
    explanation: "General business is for matters that were not on the agenda.",
  },
  {
    prompt: "A member puts forward an idea for the group to decide. What is it called?",
    options: ["A minute", "An apology", "A motion", "A quorum"],
    answer: "A motion",
    explanation: "A motion is a proposal put to the meeting for a decision.",
  },
  {
    prompt: "Another member supports your motion. What is that called?",
    options: ["Seconding", "Chairing", "Recording", "Adjourning"],
    answer: "Seconding",
    explanation: "Seconding means supporting a motion so it can be discussed.",
  },
  {
    prompt: "What happens after members have discussed a motion?",
    options: ["The secretary leaves the meeting", "The chairperson calls for a vote", "The motion is deleted from the minutes", "The agenda is written again"],
    answer: "The chairperson calls for a vote",
    explanation: "After discussion the chairperson calls for a vote.",
  },
  {
    prompt: "How is a decision usually made at a meeting?",
    options: ["By the chairperson alone", "By the secretary alone", "By the quietest member", "By a majority vote"],
    answer: "By a majority vote",
    explanation: "A majority vote decides the motion.",
  },
  {
    prompt: "The chairperson stays neutral. What does this mean?",
    options: ["The chair does not attend the meeting", "The chair does not argue one side", "The chair does not call votes", "The chair does not read the agenda"],
    answer: "The chair does not argue one side",
    explanation: "A neutral chairperson keeps the meeting fair.",
  },
  {
    prompt: "What are minutes?",
    options: ["A list of rules for a debate in use", "A speech to thank a guest at work in a lab", "The official record of a meeting", "A letter to the newspaper in a file"],
    answer: "The official record of a meeting",
    explanation: "Minutes record what was discussed and decided.",
  },
  {
    prompt: "In which tense should you write minutes?",
    options: ["The future tense", "The present continuous", "The past tense", "The imperative"],
    answer: "The past tense",
    explanation: "Minutes record what happened, so they use the past tense.",
  },
  {
    prompt: "You write minutes for the cake sale decision. What must you record about it?",
    options: ["Every joke that was told on a device", "Each personal opinion in full in use", "The colour of the room at work in a lab", "What was decided and who will act"],
    answer: "What was decided and who will act",
    explanation: "Decisions and the people responsible belong in minutes.",
  },
];

const MeetingsProcedures = () => (
  <CapsSubjectTopic
    title="Meetings and Meeting Procedures"
    subtitle="The people at a meeting, the agenda, motions and voting, and how minutes record what was decided"
    learnSteps={learnSteps}
    task="gr11-meetings-procedures-t3"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={11}
  />
);

export default MeetingsProcedures;
