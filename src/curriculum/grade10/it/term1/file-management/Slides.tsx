import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Files, folders and drives",
    content: slide(
      <>
        <Rule>A file holds data under a name. A folder holds files and other folders. A drive is a storage device, such as a hard drive or a flash drive, and each has a letter. Organising files makes them easy to find.</Rule>
        <KeyTable
          title="Files, folders and drives"
          head={["Item", "Description"]}
          aria="Files, folders and drives. File: Data stored under a name. Folder: A container for files and other folders. Drive: A storage device with its own letter, such as C: or D:. File manager: The program used to organise files."
          rows={[["File", "Data stored under a name"], ["Folder", "A container for files and other folders"], ["Drive", "A storage device with its own letter, such as C: or D:"], ["File manager", "The program used to organise files"]]}
        />
        <Worked
          steps={[
            <>A learner keeps all school work on the D: drive in a folder named School.</>,
            <>Inside School there are folders for each subject, so that every file has a place.</>,
          ]}
        />
        <Mistake>Saving everything on the desktop. A messy desktop makes files hard to find and slows the computer.</Mistake>
      </>,
    ),
  },
  {
    title: "The file specification",
    content: slide(
      <>
        <Rule>A file specification tells exactly where a file is and what it is: the drive, the path (the folders), the file name and the file extension. The extension, after the dot, shows the type of file.</Rule>
        <KeyTable
          title="Parts of a file specification"
          head={["Part", "Example"]}
          aria="Parts of a file specification. Drive: D:. Path: \\School\\Maths\\. File name: Homework. Extension: docx (a document) or xlsx (a spreadsheet). Full specification: D:\\School\\Maths\\Homework.docx."
          rows={[["Drive", "D:"], ["Path", "\\School\\Maths\\"], ["File name", "Homework"], ["Extension", "docx (a document) or xlsx (a spreadsheet)"], ["Full specification", "D:\\School\\Maths\\Homework.docx"]]}
        />
        <Worked
          steps={[
            <>D:\School\Maths\Homework.docx is on drive D, in the folder Maths inside the folder School, and its type is docx.</>,
            <>Two files in different folders may have the same name, because their paths differ.</>,
          ]}
        />
        <Mistake>Changing the extension to change the type. Renaming a file to .jpg does not turn a document into a picture.</Mistake>
      </>,
    ),
  },
  {
    title: "Hierarchy and working with files",
    content: slide(
      <>
        <Rule>Folders form a hierarchical structure, like a tree: a drive holds folders, which hold sub-folders. A good structure saves time and avoids loss. A file manager lets you copy, cut, paste, move and rename files and folders.</Rule>
        <KeyTable
          title="Working with files"
          head={["Action", "Result"]}
          aria="Working with files. Copy and paste: A second copy; the original stays. Cut and paste, or move: The file leaves the old place and goes to the new one. Rename: Gives the file a new name. Delete: Sends the file to the recycle bin. Why have a structure: Easier to find, back up and share files."
          rows={[["Copy and paste", "A second copy; the original stays"], ["Cut and paste, or move", "The file leaves the old place and goes to the new one"], ["Rename", "Gives the file a new name"], ["Delete", "Sends the file to the recycle bin"], ["Why have a structure", "Easier to find, back up and share files"]]}
        />
        <Worked
          steps={[
            <>Copying a file to a flash drive makes a backup, and the original stays on the computer.</>,
            <>Moving a file to another folder means it is no longer in the first folder.</>,
          ]}
        />
        <Mistake>Confusing copy with move. Copy leaves the original. Move does not.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a file extension?</>,
          <>What does a file specification include?</>,
          <>What is the difference between copy and move?</>,
          <>Why use folders?</>,
        ]}
        answers={[
          <>The letters after the dot that show the type of file.</>,
          <>The drive, the path, the file name and the extension.</>,
          <>Copy keeps the original. Move takes the file out of the old place.</>,
          <>To keep files organised and easy to find.</>,
        ]}
      />,
    ),
  },
];
