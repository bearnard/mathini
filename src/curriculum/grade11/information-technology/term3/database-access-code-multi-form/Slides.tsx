import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Connecting to a database from a program",
    content: slide(
      <>
        <Rule>A program can connect to a database by giving the path of the database in code. A connection and a dataset (a set of records) let the program read and change the data. In Grade 11 the database has a single table.</Rule>
        <KeyTable
          title="Parts of a connection"
          head={["Part", "Role"]}
          aria="Parts of a connection. Connection: Links the program to the database file or server. Dataset: The records that the program can read and change. Table: One table in the database. Path: Where the database is stored."
          rows={[["Connection", "Links the program to the database file or server"], ["Dataset", "The records that the program can read and change"], ["Table", "One table in the database"], ["Path", "Where the database is stored"]]}
        />
        <Worked
          steps={[
            <>The program sets the path to the database file and opens the connection when the form is created.</>,
            <>If the path is wrong, the connection fails, so the program should check and show a clear message.</>,
          ]}
        />
        <Mistake>Hard-coding a path that exists only on your computer. Use a path that works where the program will run.</Mistake>
      </>,
    ),
  },
  {
    title: "Navigating and changing records",
    content: slide(
      <>
        <Rule>A dataset has a current record. Code can move to the first, next, previous and last record, read the fields of the current record, and change them. Changes must be applied (posted) to be saved.</Rule>
        <KeyTable
          title="Working with records"
          head={["Task", "How"]}
          aria="Working with records. Move: First, Next, Prior, Last; test for the end of the dataset. Read a field: Use the field name of the current record. Edit a field: Put the record in edit mode, change it, post it. Add a record: Insert, fill the fields, post. Delete a record: Delete the current record."
          rows={[["Move", "First, Next, Prior, Last; test for the end of the dataset"], ["Read a field", "Use the field name of the current record"], ["Edit a field", "Put the record in edit mode, change it, post it"], ["Add a record", "Insert, fill the fields, post"], ["Delete a record", "Delete the current record"]]}
        />
        <Worked
          steps={[
            <>A loop moves through the records, adding each mark to a total, until the end of the dataset.</>,
            <>After you change a field you must post the change, or it is lost.</>,
          ]}
        />
        <Mistake>Forgetting to move to the next record in the loop. The loop then repeats on the same record for ever. To avoid endless looping, move to the next record each time.</Mistake>
      </>,
    ),
  },
  {
    title: "Multi-form programs and passing values",
    content: slide(
      <>
        <Rule>A program can have more than one form, for example a menu form and a data form. Each form is its own class. Values can be passed to methods as parameters, and methods can return values, so forms work together.</Rule>
        <KeyTable
          title="More than one form"
          head={["Idea", "Meaning"]}
          aria="More than one form. Multi-form: A program with several forms, each with its own controls. Show and close: Code shows one form and closes or hides another. Parameters: Pass a value to a method of the form. Return value: A function gives a value back to the caller. Test with a trace table: Check the values against expected results."
          rows={[["Multi-form", "A program with several forms, each with its own controls"], ["Show and close", "Code shows one form and closes or hides another"], ["Parameters", "Pass a value to a method of the form"], ["Return value", "A function gives a value back to the caller"], ["Test with a trace table", "Check the values against expected results"]]}
        />
        <Worked
          steps={[
            <>A login form checks the user name and then shows the main form. The main form shows the data.</>,
            <>A function on the data form returns the average mark. The menu form calls it and shows the result.</>,
          ]}
        />
        <Mistake>Putting all the code on one form. Keep each form's code on its own form and pass values between them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does a dataset hold?</>,
          <>Why must a change be posted?</>,
          <>How do you move through the records in a loop?</>,
          <>What is a multi-form program?</>,
        ]}
        answers={[
          <>The records that the program can read and change.</>,
          <>Otherwise it is not saved.</>,
          <>Move to the next record until the end of the dataset is reached.</>,
          <>A program with more than one form.</>,
        ]}
      />,
    ),
  },
];
