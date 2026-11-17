import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Data, information and how data is grouped",
    content: slide(
      <>
        <Rule>Data is raw facts. Information is data that has been processed so that it means something. Information, joined with understanding, becomes knowledge and leads to decisions. In a database, data is grouped into fields, records and tables.</Rule>
        <KeyTable
          title="Grouping data"
          head={["Term", "Meaning"]}
          aria="Grouping data. Field: One piece of data, such as a surname. Record: All the fields about one thing, such as one learner. Table: All the records of one kind, such as all learners. Data type: The kind of data a field holds, such as text or number."
          rows={[["Field", "One piece of data, such as a surname"], ["Record", "All the fields about one thing, such as one learner"], ["Table", "All the records of one kind, such as all learners"], ["Data type", "The kind of data a field holds, such as text or number"]]}
        />
        <Worked
          steps={[
            <>The numbers 45, 60 and 72 are data. The sentence &ldquo;the class average is 59&rdquo; is information.</>,
            <>A table of learners has one record per learner and fields such as ID, name and grade.</>,
          ]}
        />
        <Mistake>Using the words data and information as if they meant the same thing. Information is data that has been processed.</Mistake>
      </>,
    ),
  },
  {
    title: "Keys",
    content: slide(
      <>
        <Rule>Keys identify records and link tables. Every table needs a primary key. Other kinds of key support searching and relationships.</Rule>
        <KeyTable
          title="Kinds of key"
          head={["Key", "Meaning"]}
          aria="Kinds of key. Primary key: Uniquely identifies each record; never repeats or empty. Alternate key: Another field that could also identify a record. Foreign key: A field that holds a primary key of another table. Composite key: A primary key made of two or more fields."
          rows={[["Primary key", "Uniquely identifies each record; never repeats or empty"], ["Alternate key", "Another field that could also identify a record"], ["Foreign key", "A field that holds a primary key of another table"], ["Composite key", "A primary key made of two or more fields"]]}
        />
        <Worked
          steps={[
            <>In a Learner table, LearnerID is the primary key. The ID number could be an alternate key, because it is also unique.</>,
            <>In a Result table, the pair LearnerID and SubjectCode may form a composite key. LearnerID is also a foreign key to the Learner table.</>,
          ]}
        />
        <Mistake>Choosing a name as a primary key. Names repeat, so they cannot identify a record.</Mistake>
      </>,
    ),
  },
  {
    title: "Relationships, referential integrity and ERDs",
    content: slide(
      <>
        <Rule>A relationship links records in two tables through a primary key and a foreign key. Referential integrity means that every foreign key value must match an existing primary key, so there are no orphan records. An entity relationship diagram (ERD) shows the tables and their relationships.</Rule>
        <KeyTable
          title="Relationships and ERDs"
          head={["Idea", "Meaning"]}
          aria="Relationships and ERDs. One-to-many (1:M): One class has many learners. Referential integrity: A foreign key must match an existing primary key. Orphan record: A record whose foreign key matches nothing. ERD: A diagram of tables and their relationships. Master and detail: The table on the one side and the table on the many side."
          rows={[["One-to-many (1:M)", "One class has many learners"], ["Referential integrity", "A foreign key must match an existing primary key"], ["Orphan record", "A record whose foreign key matches nothing"], ["ERD", "A diagram of tables and their relationships"], ["Master and detail", "The table on the one side and the table on the many side"]]}
        />
        <Worked
          steps={[
            <>Class is the master table (one side) and Learner is the detail table (many side). ClassID in Learner is the foreign key.</>,
            <>If you delete a class that still has learners, those learners become orphans, so referential integrity stops the delete.</>,
          ]}
        />
        <Mistake>Putting the foreign key on the wrong side. The foreign key goes in the table on the many side.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a primary key?</>,
          <>What is a foreign key?</>,
          <>What does referential integrity prevent?</>,
          <>What does an ERD show?</>,
        ]}
        answers={[
          <>A field that uniquely identifies each record.</>,
          <>A field that holds the primary key of another table.</>,
          <>Orphan records: foreign keys that match nothing.</>,
          <>The tables and their relationships.</>,
        ]}
      />,
    ),
  },
];
