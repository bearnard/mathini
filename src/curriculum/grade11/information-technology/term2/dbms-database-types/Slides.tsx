import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a DBMS is",
    content: slide(
      <>
        <Rule>A database management system (DBMS) is software that creates, stores, protects and gives access to a database. Users and programs talk to the DBMS, not to the files directly.</Rule>
        <KeyTable
          title="Functions of a DBMS"
          head={["Function", "What it does"]}
          aria="Functions of a DBMS. Store and organise data: Keeps data in tables. Retrieve data: Answers queries. Control access: Decides who may see or change data. Keep data safe: Backup, recovery, integrity checks. Share data: Lets many users work at once."
          rows={[["Store and organise data", "Keeps data in tables"], ["Retrieve data", "Answers queries"], ["Control access", "Decides who may see or change data"], ["Keep data safe", "Backup, recovery, integrity checks"], ["Share data", "Lets many users work at once"]]}
        />
        <Worked
          steps={[
            <>A school's marks database is managed by a DBMS. A teacher can see only her own classes, and the principal can see all.</>,
            <>If the power fails while a record is saved, the DBMS can recover the data to a safe state.</>,
          ]}
        />
        <Mistake>Confusing the database with the DBMS. The database holds the data. The DBMS is the software that manages it.</Mistake>
      </>,
    ),
  },
  {
    title: "Examples and types of database",
    content: slide(
      <>
        <Rule>Some DBMS products are proprietary (owned and sold by a company) and some are open source. Databases are also grouped by size and access: desktop (personal), server (centralised) and distributed.</Rule>
        <KeyTable
          title="Examples and types"
          head={["Item", "Description"]}
          aria="Examples and types. Proprietary DBMS: Microsoft SQL Server, Oracle, Microsoft Access. Open-source DBMS: PostgreSQL, MySQL. Desktop database: One user on one computer; small. Server database: Kept on a server; many users reach it; centralised. Distributed database: Stored on several computers or sites, but used as one."
          rows={[["Proprietary DBMS", "Microsoft SQL Server, Oracle, Microsoft Access"], ["Open-source DBMS", "PostgreSQL, MySQL"], ["Desktop database", "One user on one computer; small"], ["Server database", "Kept on a server; many users reach it; centralised"], ["Distributed database", "Stored on several computers or sites, but used as one"]]}
        />
        <Worked
          steps={[
            <>A small shop keeps its stock in a desktop database. A bank uses a server database that thousands of users reach at once.</>,
            <>A chain with shops in many towns may use a distributed database, with copies near each shop.</>,
          ]}
        />
        <Mistake>Thinking that open source means unsafe. Open-source systems are widely used and are free to use.</Mistake>
      </>,
    ),
  },
  {
    title: "Database careers",
    content: slide(
      <>
        <Rule>Many people work with databases. Each role has its own job in building, running and using a database.</Rule>
        <KeyTable
          title="Roles"
          head={["Role", "Job"]}
          aria="Roles. Database administrator (DBA): Keeps the database running, safe and backed up. Database programmer: Writes code that uses the database. Database analyst: Studies needs and designs what the database must hold. Database project manager: Plans and leads the database project."
          rows={[["Database administrator (DBA)", "Keeps the database running, safe and backed up"], ["Database programmer", "Writes code that uses the database"], ["Database analyst", "Studies needs and designs what the database must hold"], ["Database project manager", "Plans and leads the database project"]]}
        />
        <Worked
          steps={[
            <>When users report that the system is slow, the DBA checks the server and tunes the database.</>,
            <>The analyst interviews staff to find out which data must be stored, before the programmer starts.</>,
          ]}
        />
        <Mistake>Treating all database roles as the same. Each has a different focus.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a DBMS?</>,
          <>Name one open-source DBMS.</>,
          <>What is a distributed database?</>,
          <>What does a DBA do?</>,
        ]}
        answers={[
          <>Software that creates, stores, protects and gives access to a database.</>,
          <>PostgreSQL or MySQL.</>,
          <>A database stored on several computers or sites but used as one.</>,
          <>Keeps the database running, safe and backed up.</>,
        ]}
      />,
    ),
  },
];
