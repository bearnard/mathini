import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What does DBMS stand for?",
    options: ["Data backup main server", "Digital base memory system", "Database management system", "Data bus main switch"],
    answer: "Database management system",
    explanation: "A DBMS manages a database.",
  },
  {
    prompt: "What does a DBMS do?",
    options: ["Prints the pages of a report", "Cools a server in a room", "Stores data and gives access", "Draws the pictures for a site"],
    answer: "Stores data and gives access",
    explanation: "It creates, stores, protects and retrieves data.",
  },
  {
    prompt: "What does a DBMS control?",
    options: ["Who may see or change data", "The colour of the screen", "The speed of a cooling fan", "The size of the office desk"],
    answer: "Who may see or change data",
    explanation: "Access control is a DBMS function.",
  },
  {
    prompt: "Which is a proprietary DBMS?",
    options: ["PostgreSQL software", "Microsoft SQL Server", "MySQL software", "A plain text file kept"],
    answer: "Microsoft SQL Server",
    explanation: "SQL Server is owned and sold by a company.",
  },
  {
    prompt: "Which is an open-source DBMS?",
    options: ["MySQL", "Oracle", "Microsoft Access", "A paper file"],
    answer: "MySQL",
    explanation: "MySQL is open source.",
  },
  {
    prompt: "What is a desktop database?",
    options: ["A database on many sites", "A database on a satellite", "A small one-user database", "A database with no data in it"],
    answer: "A small one-user database",
    explanation: "It is a personal database.",
  },
  {
    prompt: "What is a server database?",
    options: ["A database for one person", "A database kept on paper", "A central, shared database", "A database that has no users"],
    answer: "A central, shared database",
    explanation: "It is kept on a server.",
  },
  {
    prompt: "What is a distributed database?",
    options: ["Stored on a single disk", "A database with no tables", "Stored on several sites", "A database for one phone"],
    answer: "Stored on several sites",
    explanation: "It is used as one database.",
  },
  {
    prompt: "Who keeps a database running, safe and backed up?",
    options: ["The database analyst", "A visitor to the school", "The administrator", "A printer in the office"],
    answer: "The administrator",
    explanation: "This is the DBA's job.",
  },
  {
    prompt: "Who writes code that uses a database?",
    options: ["The database administrator", "The cleaner", "The user", "The database programmer"],
    answer: "The database programmer",
    explanation: "The programmer builds the applications.",
  },
  {
    prompt: "Who studies what a database must hold?",
    options: ["The database programmer", "The driver", "The cleaner", "The database analyst"],
    answer: "The database analyst",
    explanation: "Analysts find out what the users need.",
  },
  {
    prompt: "Who plans and leads a database project?",
    options: ["The project manager", "The classroom cleaner", "The user of the system", "The printer in the lab"],
    answer: "The project manager",
    explanation: "A manager plans the project.",
  },
  {
    prompt: "Which is a difference between a database and a DBMS?",
    options: ["They are the same thing", "The database manages the DBMS", "A DBMS holds no software", "The DBMS manages the database"],
    answer: "The DBMS manages the database",
    explanation: "The database holds data. The DBMS is the software.",
  },
  {
    prompt: "Why might a chain of shops use a distributed database?",
    options: ["Data stays near shops", "It needs no data at all", "It has no users to serve", "It needs no power to run"],
    answer: "Data stays near shops",
    explanation: "Data is close to where it is used.",
  },
];

const DbmsDatabaseTypes = () => (
  <CapsSubjectTopic
    title="Database Management Systems and Database Types"
    subtitle="What a DBMS is and does, examples, desktop, server and distributed databases, and database careers"
    learnSteps={learnSteps}
    task="gr11-dbms-database-types-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={11}
  />
);

export default DbmsDatabaseTypes;
