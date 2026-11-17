import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "How does a program connect to a database?",
    options: ["By typing a password and nothing else", "By printing out a page of text", "By giving the database path", "By closing every form of the program"],
    answer: "By giving the database path",
    explanation: "The path tells the program where the database is.",
  },
  {
    prompt: "What is a dataset?",
    options: ["A kind of network cable", "A password for a user", "Records in use", "A printer for the reports"],
    answer: "Records in use",
    explanation: "A dataset holds the records.",
  },
  {
    prompt: "What is the current record?",
    options: ["The last record in a table", "The one the program is at", "A record that was deleted", "A password for a record"],
    answer: "The one the program is at",
    explanation: "Fields are read from the current record.",
  },
  {
    prompt: "Which moves to the next record?",
    options: ["Post", "Delete", "Cancel", "Next"],
    answer: "Next",
    explanation: "Next moves forward.",
  },
  {
    prompt: "How does a loop know it has reached the end?",
    options: ["It counts the forms open", "It prints a page of text", "It tests for the end", "It closes the data file"],
    answer: "It tests for the end",
    explanation: "End of dataset is the test.",
  },
  {
    prompt: "Why must you move to the next record inside a loop?",
    options: ["To avoid endless looping", "To print the whole page", "To close the form for good", "To hide the data in a table"],
    answer: "To avoid endless looping",
    explanation: "Otherwise the loop never ends.",
  },
  {
    prompt: "What does posting do?",
    options: ["Deletes a record at once", "Saves a record change", "Opens another form", "Closes the database"],
    answer: "Saves a record change",
    explanation: "An unposted change is lost.",
  },
  {
    prompt: "Which adds a new record?",
    options: ["Delete, then cancel", "Close the form", "Move to the last", "Insert, fill, post"],
    answer: "Insert, fill, post",
    explanation: "A record must be posted to be saved.",
  },
  {
    prompt: "Which deletes the current record?",
    options: ["Delete", "Insert", "Post", "Next"],
    answer: "Delete",
    explanation: "Delete removes the current record.",
  },
  {
    prompt: "What is a multi-form program?",
    options: ["One with several forms", "One that has no forms", "One that has no code", "One that has a single button"],
    answer: "One with several forms",
    explanation: "Each form is its own class.",
  },
  {
    prompt: "Why show a main form after a login form?",
    options: ["The user has been checked", "The login form is broken", "The main form has no data", "The login form is deleted"],
    answer: "The user has been checked",
    explanation: "Login checks the user first.",
  },
  {
    prompt: "What does a function on a form return?",
    options: ["A value", "A whole form", "A database file", "A network cable"],
    answer: "A value",
    explanation: "A function gives a result back.",
  },
  {
    prompt: "How do you pass a value to a method?",
    options: ["As a parameter", "By closing the form", "By printing it", "By deleting it"],
    answer: "As a parameter",
    explanation: "Parameters carry values in.",
  },
  {
    prompt: "Why use a trace table to check a solution?",
    options: ["To print a page of text", "To close a form again", "To save a file to a disk", "To compare with expected"],
    answer: "To compare with expected",
    explanation: "Tracing finds errors.",
  },
];

const DatabaseAccessCodeMultiForm = () => (
  <CapsSubjectTopic
    title="Using a Database in Code and Multi-Form Programs"
    subtitle="Connecting to a single-table database, navigating and changing a dataset, passing values, and a program with more than one form"
    learnSteps={learnSteps}
    task="gr11-database-access-code-multi-form-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={11}
  />
);

export default DatabaseAccessCodeMultiForm;
