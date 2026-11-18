import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does a drama review do?",
    options: ["Retells the whole story from beginning to end", "Lists the names of the audience", "Describes a play and gives an opinion", "Teaches the actors their lines"],
    answer: "Describes a play and gives an opinion",
    explanation: "A review informs and gives an opinion.",
  },
  {
    prompt: "Which detail belongs at the start of a drama review?",
    options: ["The name, place and date of the play", "The price of the programme and the seats", "The names of the audience", "The colour of the curtain"],
    answer: "The name, place and date of the play",
    explanation: "These details identify the play.",
  },
  {
    prompt: "What should the summary in a review leave out?",
    options: ["The setting", "The characters", "The title", "The ending"],
    answer: "The ending",
    explanation: "Do not spoil the play for the readers.",
  },
  {
    prompt: "Which comment is about staging?",
    options: ["The shopkeeper spoke loudly and quickly.", "The painted stalls looked like a real market.", "The play was written by a learner in Grade 8.", "The play lasted an hour."],
    answer: "The painted stalls looked like a real market.",
    explanation: "Staging means the set, costumes, lighting and sound.",
  },
  {
    prompt: "Which comment is about acting?",
    options: ["The bright costumes showed each character well.", "The stage was small and the lights were dim.", "The shopkeeper used a loud, quick voice.", "The painted stalls looked like a real market."],
    answer: "The shopkeeper used a loud, quick voice.",
    explanation: "Acting is how the actors speak and move.",
  },
  {
    prompt: "Which sentence gives a reason for an opinion?",
    options: ["It was lively because the actors spoke clearly.", "The play was lively and I enjoyed it very much.", "I liked it.", "The play was long."],
    answer: "It was lively because the actors spoke clearly.",
    explanation: "Because introduces the reason.",
  },
  {
    prompt: "Which is a balanced comment?",
    options: ["The play was perfect from the start to the end.", "The play was terrible.", "The play was a play.", "It was lively, although the ending was slow."],
    answer: "It was lively, although the ending was slow.",
    explanation: "It mentions both a strength and a weakness.",
  },
  {
    prompt: "Which tense is used to tell the story of the play?",
    options: ["The past tense", "The present tense", "The future tense", "The future perfect tense"],
    answer: "The present tense",
    explanation: "The plot of a play is usually told in the present tense.",
  },
  {
    prompt: "Which sentence is a recommendation?",
    options: ["The play had four actors and one narrator.", "The hall was full.", "I recommend this play to comedy fans.", "The play was on Friday."],
    answer: "I recommend this play to comedy fans.",
    explanation: "A recommendation tells the reader whether to see it.",
  },
  {
    prompt: "Which paragraph order is best?",
    options: ["Summary, acting, staging, opinion", "Opinion, summary, staging, acting", "Staging, opinion, summary, acting", "Acting, opinion, summary, staging"],
    answer: "Summary, acting, staging, opinion",
    explanation: "A logical order helps readers to follow the review.",
  },
  {
    prompt: "Which word shows contrast in a review?",
    options: ["because", "and", "therefore", "although"],
    answer: "although",
    explanation: "Although introduces a contrasting idea.",
  },
  {
    prompt: "Which of these is a drama word?",
    options: ["sentence", "scene", "stanza", "chapter"],
    answer: "scene",
    explanation: "A scene is a section of a play.",
  },
  {
    prompt: "Which sentence is a good topic sentence for a paragraph about acting?",
    options: ["The play started at six o'clock on Friday evening.", "The hall has a wooden floor.", "The actors made their characters believable.", "The ticket cost ten rand."],
    answer: "The actors made their characters believable.",
    explanation: "A topic sentence states the main idea of the paragraph.",
  },
  {
    prompt: "What should you do after you write the first draft of your review?",
    options: ["Revise it and check the spelling", "Hand it in at once", "Delete the title", "Copy it into a new book without reading it"],
    answer: "Revise it and check the spelling",
    explanation: "Revision and proof-reading are part of the writing process.",
  },
];

const DramaReview = () => (
  <CapsSubjectTopic
    title={"Writing a Drama Review"}
    subtitle={"The parts of a review, describing acting and staging, giving an opinion and ordering the paragraphs"}
    learnSteps={learnSteps}
    task={"gr7-drama-review-t2"}
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default DramaReview;
