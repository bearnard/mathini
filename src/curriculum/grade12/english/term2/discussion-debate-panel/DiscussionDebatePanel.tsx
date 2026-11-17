import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does turn-taking mean in a discussion?",
    options: ["Speaking at the same time as them", "Speaking only when you are angry", "Waiting for a speaker to finish", "Leaving the group when you disagree"],
    answer: "Waiting for a speaker to finish",
    explanation: "Turn-taking lets each person be heard.",
  },
  {
    prompt: "Which is a skill in an informal discussion?",
    options: ["Defending a position with reasons", "Staying silent for the whole time", "Insulting the other speakers", "Changing the topic at once"],
    answer: "Defending a position with reasons",
    explanation: "Defending a position means giving reasons for your view.",
  },
  {
    prompt: "What does it mean to negotiate in a discussion?",
    options: ["Look for a fair middle way", "Refuse to listen to other views", "Leave before the discussion ends", "Repeat your own view more loudly"],
    answer: "Look for a fair middle way",
    explanation: "Negotiating looks for a compromise.",
  },
  {
    prompt: "What is a resolution in a debate?",
    options: ["The vote taken at the end of the day", "The break between the two speeches", "The prize that is given to the winners", "The statement the two teams argue"],
    answer: "The statement the two teams argue",
    explanation: "The resolution is the statement that is debated.",
  },
  {
    prompt: "Which team agrees with the resolution?",
    options: ["The affirmative team", "The negative team", "The timekeeping team", "The audience members"],
    answer: "The affirmative team",
    explanation: "The affirmative team supports the resolution.",
  },
  {
    prompt: "Which team has the burden of proof?",
    options: ["The affirmative team", "The negative team", "The judging panel", "The audience members"],
    answer: "The affirmative team",
    explanation: "The affirmative team must prove the case.",
  },
  {
    prompt: "Which team begins and ends the debate?",
    options: ["The affirmative team", "The negative team", "The judging panel", "The audience members"],
    answer: "The affirmative team",
    explanation: "The affirmative team opens and closes the debate.",
  },
  {
    prompt: "What does the negative team do?",
    options: ["Agrees with the resolution as put", "Chairs the debate and keeps order", "Takes the votes from the audience", "Disagrees and refutes the case"],
    answer: "Disagrees and refutes the case",
    explanation: "The negative team presents a logical case against the affirmative.",
  },
  {
    prompt: "What is a rebuttal?",
    options: ["A summary of the whole debate", "A reply to the other team", "A thank-you to the audience", "A greeting to the chairperson"],
    answer: "A reply to the other team",
    explanation: "A rebuttal answers the other team's argument.",
  },
  {
    prompt: "How long is the break before the rebuttals in the CAPS procedure?",
    options: ["2 to 3 minutes", "20 to 30 minutes", "1 minute", "5 to 10 minutes"],
    answer: "5 to 10 minutes",
    explanation: "Teams get 5 to 10 minutes to prepare rebuttals.",
  },
  {
    prompt: "Which is a duty of the chairperson?",
    options: ["Keeping order and managing time", "Arguing for one of the two sides", "Taking part as a speaker of one team", "Deciding which team to support"],
    answer: "Keeping order and managing time",
    explanation: "The chairperson runs the session fairly.",
  },
  {
    prompt: "Why must a chairperson remain neutral?",
    options: ["To make the session shorter", "To avoid keeping time", "To be fair to every speaker", "To help one team win"],
    answer: "To be fair to every speaker",
    explanation: "A neutral chairperson treats all speakers fairly.",
  },
  {
    prompt: "Which is a conventional phrase in a panel discussion?",
    options: ["\"Thank you, Madam Chairperson.\"", "\"Hey, you over there, be quiet!\"", "\"Whatever, I do not care at all.\"", "\"Stop talking and listen to me.\""],
    answer: "\"Thank you, Madam Chairperson.\"",
    explanation: "Formal phrases suit a panel or forum.",
  },
  {
    prompt: "What is the suggested time for a debate or panel discussion?",
    options: ["10 to 15 minutes", "20 to 30 minutes", "4 to 5 minutes", "6 to 8 minutes"],
    answer: "20 to 30 minutes",
    explanation: "CAPS suggests 20 to 30 minutes for debates and discussions.",
  },
];

const DiscussionDebatePanel = () => (
  <CapsSubjectTopic
    title="Discussions, Debates and Panels"
    subtitle="Informal discussion, debate terms and procedure, panel discussions and the chairperson"
    learnSteps={learnSteps}
    task="gr12-discussion-debate-panel-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default DiscussionDebatePanel;
