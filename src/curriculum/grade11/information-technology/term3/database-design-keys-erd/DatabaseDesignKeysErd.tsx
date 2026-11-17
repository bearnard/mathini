import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is data?",
    options: ["Processed facts only", "A kind of diagram", "Raw facts", "A type of key field"],
    answer: "Raw facts",
    explanation: "Data becomes information once it is processed.",
  },
  {
    prompt: "What is information?",
    options: ["Raw facts and nothing more", "Data with meaning", "A table of the keys", "A kind of field name"],
    answer: "Data with meaning",
    explanation: "Processed data tells you something.",
  },
  {
    prompt: "What is a field?",
    options: ["One piece of data", "A whole table of records", "A key for the table", "A database file"],
    answer: "One piece of data",
    explanation: "A field is a column such as a surname.",
  },
  {
    prompt: "What is a record?",
    options: ["One surname by itself", "A whole database file kept", "A key for the table", "Fields about one thing"],
    answer: "Fields about one thing",
    explanation: "A record is one row, such as one learner.",
  },
  {
    prompt: "What is a table?",
    options: ["Records of one kind", "A single field of data", "A single key for a link", "A single diagram of a link"],
    answer: "Records of one kind",
    explanation: "A table holds many records.",
  },
  {
    prompt: "What does a primary key do?",
    options: ["Joins no tables at all", "Stores a picture file", "Deletes the old records", "Identifies each record"],
    answer: "Identifies each record",
    explanation: "It never repeats and is not empty.",
  },
  {
    prompt: "Which is a poor choice for a primary key?",
    options: ["A surname", "A learner ID", "A staff number", "An account number"],
    answer: "A surname",
    explanation: "Surnames repeat.",
  },
  {
    prompt: "What is an alternate key?",
    options: ["A key from another table", "A key used to delete rows", "Another unique field", "A password for the data"],
    answer: "Another unique field",
    explanation: "It could also have been the primary key.",
  },
  {
    prompt: "What is a foreign key?",
    options: ["Key of another table", "A key that locks a door", "A field with no data in it", "A key for the backups"],
    answer: "Key of another table",
    explanation: "It links the two tables.",
  },
  {
    prompt: "What is a composite key?",
    options: ["A key of a single letter", "A key of several fields", "A key with no fields in it", "A key used for printing"],
    answer: "A key of several fields",
    explanation: "The fields together identify a record.",
  },
  {
    prompt: "Which relationship describes one class with many learners?",
    options: ["One-to-one link", "Many-to-zero link", "Zero-to-one link", "One-to-many"],
    answer: "One-to-many",
    explanation: "One class, many learners.",
  },
  {
    prompt: "Where does the foreign key go in a one-to-many relationship?",
    options: ["In the many-side table", "In the one-side table", "In neither of the tables", "In a brand new database"],
    answer: "In the many-side table",
    explanation: "The many side points to the one side.",
  },
  {
    prompt: "What does referential integrity prevent?",
    options: ["Typing in a field", "Sorting a table", "Orphan records", "Printing a table"],
    answer: "Orphan records",
    explanation: "Foreign keys must match a primary key.",
  },
  {
    prompt: "What does an ERD show?",
    options: ["Tables and links", "A list of passwords", "A page of program code", "A network cable plan"],
    answer: "Tables and links",
    explanation: "An entity relationship diagram.",
  },
];

const DatabaseDesignKeysErd = () => (
  <CapsSubjectTopic
    title="Database Design: Keys, Relationships and ERDs"
    subtitle="Records, fields and tables, kinds of key, relationships and referential integrity, and entity relationship diagrams"
    learnSteps={learnSteps}
    task="gr11-database-design-keys-erd-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={11}
  />
);

export default DatabaseDesignKeysErd;
