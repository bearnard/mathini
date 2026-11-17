import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is a file?",
    options: ["Data under a name", "A storage device in a program", "A type of cable on a device", "A program window in use"],
    answer: "Data under a name",
    explanation: "A file holds data.",
  },
  {
    prompt: "What is a folder?",
    options: ["A kind of file type", "A web page type", "A kind of cable", "A file container"],
    answer: "A file container",
    explanation: "Folders can hold files and other folders.",
  },
  {
    prompt: "What is a drive?",
    options: ["A storage device", "A folder name", "A file extension", "A type of data"],
    answer: "A storage device",
    explanation: "For example C: or D:.",
  },
  {
    prompt: "Which program organises files?",
    options: ["A web browser", "A file manager", "A game program", "A calculator app"],
    answer: "A file manager",
    explanation: "A file manager copies, moves and renames.",
  },
  {
    prompt: "What is the file extension in Homework.docx?",
    options: ["Homework", "D:", "docx", "School"],
    answer: "docx",
    explanation: "The extension follows the dot.",
  },
  {
    prompt: "What does an extension show?",
    options: ["The size of the file", "The type of file", "The owner of the file", "The age of the file"],
    answer: "The type of file",
    explanation: "It tells which kind of file it is.",
  },
  {
    prompt: "What does the path in a file specification give?",
    options: ["The type of the file at work", "The folders to the file", "The size of the file in a file", "The owner of the file for a user"],
    answer: "The folders to the file",
    explanation: "The path names the folders.",
  },
  {
    prompt: "Which part of a file specification is the drive?",
    options: ["The letter and colon", "The name after the last slash", "The letters after the dot", "The folders in the middle"],
    answer: "The letter and colon",
    explanation: "The drive is shown as a letter, such as D:.",
  },
  {
    prompt: "Which part of a file specification is the file name?",
    options: ["The name before the dot", "The letter and colon", "The letters after the dot", "The folders in the path"],
    answer: "The name before the dot",
    explanation: "In Homework.docx the name is Homework.",
  },
  {
    prompt: "What is a hierarchical structure?",
    options: ["One folder alone at a school", "Folders inside folders", "A list with no order for a task", "A group of cables in a program"],
    answer: "Folders inside folders",
    explanation: "It looks like a tree.",
  },
  {
    prompt: "What does copy and paste do?",
    options: ["Removes the original", "Deletes the folder", "Makes another copy", "Renames the file"],
    answer: "Makes another copy",
    explanation: "The original stays.",
  },
  {
    prompt: "What does move do?",
    options: ["Makes a second copy at work", "Takes it to a new place", "Deletes it for ever in a file", "Changes its file type for a user"],
    answer: "Takes it to a new place",
    explanation: "It leaves the old place.",
  },
  {
    prompt: "Why have a folder structure?",
    options: ["Files become much larger", "Files are easier to find", "Files become much slower", "Files need no names"],
    answer: "Files are easier to find",
    explanation: "Organised files save time.",
  },
  {
    prompt: "Can two files have the same name?",
    options: ["No, not in any case", "Yes, in different folders", "Yes, on a flash drive only", "Yes, if they are empty"],
    answer: "Yes, in different folders",
    explanation: "The paths differ.",
  },
];

const FileManagement = () => (
  <CapsSubjectTopic
    title="File Management"
    subtitle="Files, folders and drives, the file specification, hierarchy, and working with a file manager"
    learnSteps={learnSteps}
    task="gr10-file-management-t1"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default FileManagement;
