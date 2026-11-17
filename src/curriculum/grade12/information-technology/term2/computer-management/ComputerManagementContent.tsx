import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

export const learnSteps: LearnStep[] = [
  {
    title: 'What is computer management?',
    content: (
      <div className="space-y-4">
        <Rule>Computer management means looking after computers so that they keep working well, the data stays correct and the system stays protected. The routine jobs are called housekeeping.</Rule>
        <p className="text-left text-slate-700">The tasks that are right for a computer depend on several factors:</p>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>The users:</strong> one person at home, or hundreds in a company.</li>
          <li><strong>The value of the data:</strong> school marks and customer records need more care than a game.</li>
          <li><strong>The threats:</strong> viruses, theft, power failures and mistakes by users.</li>
          <li><strong>The budget and skills:</strong> what the owner can afford and the person who looks after the system can do.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'General housekeeping tasks',
    content: (
      <div className="space-y-4">
        <Rule>Housekeeping keeps a computer fast, tidy and safe. Do these jobs regularly.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Clean up:</strong> delete temporary files and uninstall programs that are not used, to free storage space.</li>
          <li><strong>Defragment a hard disk drive (HDD):</strong> this puts the pieces of files together so that they load faster. A solid-state drive (SSD) does not need it.</li>
          <li><strong>Update:</strong> install updates for the operating system and programs, because they fix errors and security holes.</li>
          <li><strong>Check for errors:</strong> use the disk checking tool to find and repair problems with the drive.</li>
          <li><strong>Organise and archive:</strong> keep files in folders and move old files you rarely use to an archive.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Protecting the system',
    content: (
      <div className="space-y-4">
        <Rule>A system must be protected from malware, from unauthorised users and from physical damage.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Anti-malware:</strong> install it, keep it updated and run regular scans.</li>
          <li><strong>Firewall:</strong> it checks the data that enters and leaves the computer and blocks what is not allowed.</li>
          <li><strong>User accounts and passwords:</strong> give each user an account with only the access rights that the job needs. This limits the damage that mistakes and misuse can do.</li>
          <li><strong>A UPS (uninterruptible power supply):</strong> it keeps the computer running for a short time when there is a sudden power failure, for example during load-shedding, so that files can be saved and the computer shut down properly.</li>
        </ul>
        <Mistake>A password alone is not protection. Passwords must be strong, kept private and changed when they may be known to others.</Mistake>
      </div>
    ),
  },
  {
    title: 'Keeping data correct: data integrity',
    content: (
      <div className="space-y-4">
        <Rule>Data integrity means that data stays accurate, complete and consistent. Several management tasks protect it.</Rule>
        <Worked
          title="A school keeps learner marks on a computer"
          steps={[
            <><strong>Backup:</strong> copy the data regularly to a second place, such as an external drive or the cloud. Keep one copy away from the building, and test the backup to confirm that it can be restored.</>,
            <><strong>Access control:</strong> only teachers may change marks, and each change is recorded in a log.</>,
            <><strong>Validation:</strong> the program checks the input and rejects impossible marks, such as 150 out of 100.</>,
            <><strong>Power protection:</strong> a UPS prevents a file from being damaged when the power fails while it is being saved.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Recommending management tasks',
    content: (
      <div className="space-y-4">
        <Rule>When the exam asks you to recommend tasks, choose the tasks that suit the situation and give a reason for each.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"><strong>A home user</strong><p className="mt-1">Run updates and anti-malware scans, clean up temporary files and keep a backup of photos and school work.</p></div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"><strong>A small business</strong><p className="mt-1">Set up user accounts and a firewall, back up customer records every day to a second place, and use a UPS on the server.</p></div>
        </div>
        <p className="text-left text-sm text-slate-600">A good recommendation always says why: &ldquo;Back up daily because customer records cannot be replaced.&rdquo;</p>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Which drive type benefits from defragmenting?</>,
          <>Why should a copy of a backup be kept away from the building?</>,
          <>What does a UPS protect against?</>,
          <>Name two factors that influence which management tasks are needed.</>,
        ]}
        answers={[
          <>A hard disk drive (HDD).</>,
          <>So that a fire or theft does not destroy the data and its backup together.</>,
          <>A power failure, such as load-shedding, which can damage files and hardware.</>,
          <>Any two of: the users, the value of the data, the threats, the budget and skills.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What are housekeeping tasks?',
    options: ['Routine jobs to keep a computer working', 'Jobs that only the manufacturer may do', 'Rules about the layout of an office', 'Programs written by a database designer'],
    answer: 'Routine jobs to keep a computer working',
    explanation: 'Housekeeping is the routine care of a computer, such as cleaning up files, updating and backing up.',
  },
  {
    prompt: 'Which drive type benefits from defragmenting?',
    options: ['A hard disk drive', 'A solid-state drive', 'A memory card', 'A cloud account'],
    answer: 'A hard disk drive',
    explanation: 'Defragmenting puts the pieces of files together on a hard disk drive. An SSD does not need it.',
  },
  {
    prompt: 'Why should operating system updates be installed?',
    options: ['They delete all the old files', 'They make the screen larger', 'They fix errors and security holes', 'They remove the need for passwords'],
    answer: 'They fix errors and security holes',
    explanation: 'Updates repair errors and close security holes that malware could use.',
  },
  {
    prompt: 'What is the purpose of deleting temporary files?',
    options: ['To increase the screen size', 'To remove the firewall', 'To change the password', 'To free storage space'],
    answer: 'To free storage space',
    explanation: 'Temporary files that are no longer used take up space, so deleting them frees storage.',
  },
  {
    prompt: 'What does a firewall do?',
    options: ['Copies files to a second drive', 'Cleans the temporary files up', 'Blocks data that is not allowed', 'Supplies power during an outage'],
    answer: 'Blocks data that is not allowed',
    explanation: 'A firewall checks the data that enters and leaves the computer and blocks what is not allowed.',
  },
  {
    prompt: 'What does a UPS protect a computer against?',
    options: ['A sudden power failure', 'A slow internet connection', 'A forgotten password', 'A full hard drive'],
    answer: 'A sudden power failure',
    explanation: 'A UPS gives a few minutes of power, for example during load-shedding, so work can be saved and the computer shut down.',
  },
  {
    prompt: 'What does data integrity mean?',
    options: ['The data stays accurate and complete', 'The data is made as large as possible', 'The data is open to every user online', 'The data is stored in a single place'],
    answer: 'The data stays accurate and complete',
    explanation: 'Data integrity means that data is accurate, complete and consistent.',
  },
  {
    prompt: 'Why should a backup be tested?',
    options: ['To confirm it can be restored', 'To make the original file smaller', 'To delete the old programs too', 'To speed up the internet again'],
    answer: 'To confirm it can be restored',
    explanation: 'A backup is only useful if the data can be restored from it, so it should be tested.',
  },
  {
    prompt: 'Why keep a copy of a backup away from the building?',
    options: ['It makes the backup run much faster', 'A fire or theft cannot destroy both', 'It reduces the size of the files a lot', 'It stops the need for strong passwords'],
    answer: 'A fire or theft cannot destroy both',
    explanation: 'If a copy is kept in another place, a fire, flood or theft at the office will not destroy both the data and its backup.',
  },
  {
    prompt: 'Why are user accounts given only the access rights that the job needs?',
    options: ['To make the computer run faster', 'To save electricity at night', 'To limit damage from mistakes', 'To stop the system from updating'],
    answer: 'To limit damage from mistakes',
    explanation: 'Giving each user only the access they need limits what a mistake or a misuse can change.',
  },
  {
    prompt: 'Which task helps to keep data correct when a user types a mark?',
    options: ['Validation of the input', 'Defragmenting the drive', 'Installing a UPS', 'Archiving old files'],
    answer: 'Validation of the input',
    explanation: 'Validation rejects impossible values, such as a mark above the maximum, so incorrect data is not stored.',
  },
  {
    prompt: 'A small shop keeps customer records on one computer. Which recommendation is best?',
    options: ['Skip the updates for a year', 'Back up daily to a second place', 'Share one password among the staff', 'Keep one copy on the desktop'],
    answer: 'Back up daily to a second place',
    explanation: 'Customer records cannot be replaced, so a regular backup to a second place protects them.',
  },
  {
    prompt: 'Which factor influences the management tasks that a computer needs?',
    options: ['The colour of the case', 'The value of the data', 'The brand of the keyboard', 'The size of the desk'],
    answer: 'The value of the data',
    explanation: 'The more valuable and the more sensitive the data, the more protection and care the system needs.',
  },
  {
    prompt: 'What is the benefit of archiving old files?',
    options: ['It frees space and keeps files tidy', 'It speeds up the processor of the PC now', 'It removes viruses from the system', 'It replaces the need for backups too'],
    answer: 'It frees space and keeps files tidy',
    explanation: 'Moving files that are rarely used to an archive keeps the working folders tidy and frees space.',
  },
];
