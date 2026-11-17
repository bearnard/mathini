import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "File types and extensions",
    content: slide(
      <>
        <Rule>Every file has a type, shown by its extension. The type tells the computer which program can open it. A file can be saved as another type or exported to another format.</Rule>
        <KeyTable
          title="Common file types"
          head={["Kind of file", "Examples"]}
          aria="Common file types. Text: txt, rtf, docx. Spreadsheet, presentation, database: xlsx, pptx, accdb. Graphics: jpg, png, gif. Sound, movie: mp3, mp4, wav. Compressed: zip, rar. Source code and object code: pas (Delphi source), exe (executable). Shared libraries: dll (dynamically linked library)."
          rows={[["Text", "txt, rtf, docx"], ["Spreadsheet, presentation, database", "xlsx, pptx, accdb"], ["Graphics", "jpg, png, gif"], ["Sound, movie", "mp3, mp4, wav"], ["Compressed", "zip, rar"], ["Source code and object code", "pas (Delphi source), exe (executable)"], ["Shared libraries", "dll (dynamically linked library)"]]}
        />
        <Worked
          steps={[
            <>A learner saves a report as pdf so that it looks the same on any computer, and as docx so that it can still be edited.</>,
            <>A zip file holds other files in a smaller space, and must be extracted before use.</>,
          ]}
        />
        <Mistake>Renaming the extension to change the file type. The data inside stays the same, and the file may not open.</Mistake>
      </>,
    ),
  },
  {
    title: "Housekeeping tasks",
    content: slide(
      <>
        <Rule>Housekeeping keeps a computer running well and protects data. Regular tasks include clean-up, updates, backups, compression and managing the desktop and files.</Rule>
        <KeyTable
          title="General housekeeping"
          head={["Task", "Why"]}
          aria="General housekeeping. Disk clean-up: Removes temporary files and frees space. Updating: Fixes faults and security weaknesses. Archive and backup: Keeps a copy in case of loss. Compress and decompress: Saves space or speeds up sending. File-naming conventions: Names that say what is inside make files easy to find. Manage the desktop: Keep it tidy so the computer starts and works quickly."
          rows={[["Disk clean-up", "Removes temporary files and frees space"], ["Updating", "Fixes faults and security weaknesses"], ["Archive and backup", "Keeps a copy in case of loss"], ["Compress and decompress", "Saves space or speeds up sending"], ["File-naming conventions", "Names that say what is inside make files easy to find"], ["Manage the desktop", "Keep it tidy so the computer starts and works quickly"]]}
        />
        <Worked
          steps={[
            <>A school backs up learner work every week to a second drive. When a drive fails, the files can be restored.</>,
            <>A name like Maths_Homework_2026-03-14 is clearer than New Document 3.</>,
          ]}
        />
        <Mistake>Postponing updates and backups. Problems are expensive when they happen without them.</Mistake>
      </>,
    ),
  },
  {
    title: "Security features and installing software",
    content: slide(
      <>
        <Rule>Security features protect the computer: a firewall, anti-virus software, and controls for spyware and adware. Software must be installed correctly with a licence key or activation code, and uninstalled when no longer needed.</Rule>
        <KeyTable
          title="Security and installation"
          head={["Item", "Meaning"]}
          aria="Security and installation. Firewall: Blocks unwanted network traffic. Anti-virus: Finds and removes malicious programs. Spyware, adware controls: Stop programs that watch you or show unwanted adverts. Custom install: You choose which parts to install. Full install: Everything is installed. Licence key, activation code: Proves that you have a valid copy. Uninstall: Remove a program you no longer use. System settings: Regional and language options."
          rows={[["Firewall", "Blocks unwanted network traffic"], ["Anti-virus", "Finds and removes malicious programs"], ["Spyware, adware controls", "Stop programs that watch you or show unwanted adverts"], ["Custom install", "You choose which parts to install"], ["Full install", "Everything is installed"], ["Licence key, activation code", "Proves that you have a valid copy"], ["Uninstall", "Remove a program you no longer use"], ["System settings", "Regional and language options"]]}
        />
        <Worked
          steps={[
            <>A learner installs a program using a custom installation so that only the needed parts use disk space.</>,
            <>Uninstalling programs that are no longer used frees space and lowers risk.</>,
          ]}
        />
        <Mistake>Deleting a program's folder to remove it. Use the uninstall option so that everything is removed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does a file extension show?</>,
          <>Give one housekeeping task.</>,
          <>What does a firewall do?</>,
          <>What is a licence key for?</>,
        ]}
        answers={[
          <>The type of file.</>,
          <>Disk clean-up, updates, backup or compression.</>,
          <>Blocks unwanted network traffic.</>,
          <>Proving that you have a valid copy of the software.</>,
        ]}
      />,
    ),
  },
];
