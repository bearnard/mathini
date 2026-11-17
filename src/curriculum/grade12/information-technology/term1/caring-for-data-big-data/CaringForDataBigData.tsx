import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is metadata?",
    options: ["The content of a file", "A type of cable", "Data about other data", "A backup disk"],
    answer: "Data about other data",
    explanation: "Metadata describes a file or record without being its content.",
  },
  {
    prompt: "Which is an example of metadata?",
    options: ["The picture inside the photo", "The date a photo was taken", "The frame of the photo at home", "The paper of a printed photo"],
    answer: "The date a photo was taken",
    explanation: "The date and place are data about the photo.",
  },
  {
    prompt: "Why does data have value?",
    options: ["It becomes useful information", "It fills up a hard disk drive", "It makes a screen look brighter", "It cools the processor of a PC"],
    answer: "It becomes useful information",
    explanation: "Information helps people to make decisions.",
  },
  {
    prompt: "What does validation do?",
    options: ["Copies data to another disk", "Deletes old data from a file", "Prints data on a page", "Checks data is sensible"],
    answer: "Checks data is sensible",
    explanation: "Validation rejects data such as a date that does not exist.",
  },
  {
    prompt: "Which is an example of verification?",
    options: ["Typing an ID twice and comparing", "Rejecting a date of 31 February", "Locking the door of a server room", "Printing a report for the office"],
    answer: "Typing an ID twice and comparing",
    explanation: "Verification checks that data matches the source.",
  },
  {
    prompt: "Which rejects an age of 250?",
    options: ["Verification", "Validation", "Warehousing", "Logging"],
    answer: "Validation",
    explanation: "A range check is a form of validation.",
  },
  {
    prompt: "What does data integrity mean?",
    options: ["Data takes up a very large space", "Data stays accurate and consistent", "Data is kept hidden from all users", "Data is printed on a regular basis"],
    answer: "Data stays accurate and consistent",
    explanation: "Integrity means data is correct and unchanged by accident.",
  },
  {
    prompt: "What does a log of changes record?",
    options: ["Who changed what, and when", "How big a file has become", "Which cable the office uses", "How loud the fan has become"],
    answer: "Who changed what, and when",
    explanation: "A log lets a mistake be traced.",
  },
  {
    prompt: "Why keep parallel data sets?",
    options: ["To make the files a lot smaller", "To slow the whole system down", "A copy remains if one is lost", "To hide the passwords of users"],
    answer: "A copy remains if one is lost",
    explanation: "Copies protect against loss.",
  },
  {
    prompt: "What does controlling access do?",
    options: ["Speeds up the Internet connection", "Prints the data a bit faster", "Makes a file very much smaller", "Decides who sees or changes data"],
    answer: "Decides who sees or changes data",
    explanation: "Passwords and user rights limit access.",
  },
  {
    prompt: "Which controls access to data?",
    options: ["A larger monitor on a desk", "A faster printer in an office", "A longer cable on the floor", "Passwords and user rights"],
    answer: "Passwords and user rights",
    explanation: "Only authorised users get in.",
  },
  {
    prompt: "Which is a privacy risk of data mining?",
    options: ["Data collected without consent", "Faster printing of the reports", "Brighter screens for all users", "Quieter fans inside computers"],
    answer: "Data collected without consent",
    explanation: "Mining can build a picture of a person's life.",
  },
  {
    prompt: "Why is a large data warehouse a security risk?",
    options: ["It attracts criminals", "It runs a little slower", "It uses a little less power", "It needs no password at all"],
    answer: "It attracts criminals",
    explanation: "A large store of data is a valuable target.",
  },
  {
    prompt: "Which can a phone record that affects privacy?",
    options: ["The room temperature", "Your location", "The colour of the case", "The length of the cable"],
    answer: "Your location",
    explanation: "Phones record location and activity data.",
  },
];

const CaringForDataBigData = () => (
  <CapsSubjectTopic
    title="Caring for Data, Big Data and Privacy"
    subtitle="The value of data and metadata, protecting data, and the social implications of big data, mining and mobile technology"
    learnSteps={learnSteps}
    task="gr12-caring-for-data-big-data-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default CaringForDataBigData;
