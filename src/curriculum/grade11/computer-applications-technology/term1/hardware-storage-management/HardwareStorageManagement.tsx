import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/cat/term1/hardware-storage-management/diagram.webp", alt: "Hardware and Storage Management" },
    title: 'Storage types: primary vs secondary',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Computer storage is divided into <strong>primary</strong> (fast, temporary) and <strong>secondary</strong> (slower, permanent) storage.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Primary storage</strong>
            <p className="text-slate-600">RAM: fast, volatile (data lost on shutdown). ROM: non-volatile firmware (BIOS). Cache: ultra-fast CPU-level storage.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Secondary storage</strong>
            <p className="text-slate-600">HDD, SSD, USB flash drive, SD card, optical disc (DVD/Blu-ray). All are non-volatile — data persists without power.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Storage capacity units',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Data size is measured in bytes. Knowing the units helps you compare storage options.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left">
          <table className="text-slate-700 text-sm w-full">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="pr-6 py-1">Unit</th>
                <th className="pr-6 py-1">Abbreviation</th>
                <th className="py-1">Approximate size</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="pr-6 py-1">Kilobyte</td><td className="pr-6 py-1">KB</td><td>1 000 bytes</td></tr>
              <tr><td className="pr-6 py-1">Megabyte</td><td className="pr-6 py-1">MB</td><td>1 000 KB</td></tr>
              <tr><td className="pr-6 py-1">Gigabyte</td><td className="pr-6 py-1">GB</td><td>1 000 MB</td></tr>
              <tr><td className="pr-6 py-1">Terabyte</td><td className="pr-6 py-1">TB</td><td>1 000 GB</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    title: 'Cloud storage and removable media',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Modern users combine local storage with <strong>cloud storage</strong> and <strong>removable media</strong> for flexibility and backup.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">Cloud storage</strong>
            <p className="text-slate-600">Files stored on remote servers (e.g. Google Drive, OneDrive). Accessible anywhere with internet. Requires data connection.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Removable media</strong>
            <p className="text-slate-600">USB flash drives, external HDDs/SSDs, SD cards. Portable but can be lost, stolen, or infected with malware.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'File management and access control',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Good file management and access control keep data organised and secure.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">File management best practices</strong>
            <p className="text-slate-600">Logical folder hierarchy, meaningful file names, consistent naming conventions, regular backups (3-2-1 rule).</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Access control</strong>
            <p className="text-slate-600">User accounts (administrator vs standard), passwords, biometric login, file permissions (read, write, execute).</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'Which type of storage retains data when the computer is switched off?',
    options: ['RAM, the main working memory of the computer', 'Cache memory that sits next to the processor', 'Non-volatile (secondary) storage', 'CPU registers inside the processor itself'],
    answer: 'Non-volatile (secondary) storage',
    explanation: 'Non-volatile storage (HDD, SSD, USB flash) retains data without power, unlike RAM which is volatile.',
  },
  {
    prompt: 'A learner has a 4 GB USB drive and wants to copy 3 500 MB of data. Will it fit?',
    options: ['No — 3 500 MB is larger than 4 GB', 'Yes — 3 500 MB is less than 4 000 MB (≈ 4 GB)', 'Only if the USB is formatted as NTFS', 'It depends on the file types'],
    answer: 'Yes — 3 500 MB is less than 4 000 MB (≈ 4 GB)',
    explanation: '4 GB ≈ 4 000 MB. Since 3 500 MB < 4 000 MB, the data fits on the 4 GB drive.',
  },
  {
    prompt: 'What is the main disadvantage of cloud storage compared to local storage?',
    options: ['It always costs more to buy than local storage', 'It needs an internet connection to open the files', 'Files stored in the cloud cannot be shared', 'It has less total capacity than a local drive'],
    answer: 'It needs an internet connection to open the files',
    explanation: 'Cloud storage depends on internet connectivity. Without a connection, you cannot access your files.',
  },
  {
    prompt: 'Which storage device has no moving parts and is therefore more shock-resistant?',
    options: ['Hard Disk Drive (HDD)', 'Optical disc drive', 'Solid State Drive (SSD)', 'Magnetic tape'],
    answer: 'Solid State Drive (SSD)',
    explanation: 'SSDs use flash memory chips with no mechanical components, making them far more resilient to physical shock than HDDs.',
  },
  {
    prompt: 'A user account set as "standard user" in Windows cannot:',
    options: ['Save files to Documents', 'Browse the internet', 'Install system-wide software', 'Open applications already installed'],
    answer: 'Install system-wide software',
    explanation: 'Standard accounts have limited permissions; installing software system-wide requires administrator privileges.',
  },
  {
    prompt: 'What does ROM contain in a computer?',
    options: ['The operating system files of the computer', 'The documents that the user has saved', 'The firmware needed to start the computer (BIOS/UEFI)', 'The data of the applications that are running now'],
    answer: 'The firmware needed to start the computer (BIOS/UEFI)',
    explanation: 'ROM (Read-Only Memory) stores the BIOS or UEFI firmware, which initialises hardware during startup. It is non-volatile and cannot be easily changed.',
  },
  {
    prompt: 'According to the 3-2-1 backup rule, how should backups be stored?',
    options: ['3 copies, all of them kept on the same drive', '3 copies on 2 types of media, with 1 copy kept off-site', '3 copies, all of them kept in the cloud', '1 copy kept on a USB drive and no other copy'],
    answer: '3 copies on 2 types of media, with 1 copy kept off-site',
    explanation: 'The 3-2-1 rule: 3 total copies, on 2 different media (e.g. HDD + USB), with at least 1 copy stored off-site (e.g. cloud) to protect against local disasters.',
  },
  {
    prompt: 'Which file permission allows a user to view a file but not change its contents?',
    options: ['Execute', 'Write', 'Read', 'Delete'],
    answer: 'Read',
    explanation: 'Read permission lets users open and view a file without modifying it.',
  },
  {
    prompt: 'Which unit of storage is the LARGEST?',
    options: ['Gigabyte (GB)', 'Megabyte (MB)', 'Terabyte (TB)', 'Kilobyte (KB)'],
    answer: 'Terabyte (TB)',
    explanation: 'TB > GB > MB > KB. A terabyte is approximately 1 000 gigabytes.',
  },
  {
    prompt: 'A learner copies files to a USB flash drive rather than emailing them. What is a risk of this method?',
    options: ['The files may lose their formatting on the drive', 'The USB drive could be lost, stolen or infected with malware', 'The files will be deleted automatically from the drive', 'Email is slower than a USB drive for sending files'],
    answer: 'The USB drive could be lost, stolen or infected with malware',
    explanation: 'Removable media can physically be lost or stolen, and can spread malware when plugged into different machines.',
  },
];

const HardwareStorageManagement = () => (
  <CapsSubjectTopic
    title="Hardware and Storage Management"
    subtitle="Storage types, capacity, file management, and access control"
    learnSteps={learnSteps}
    task="gr11-hardware-storage-management-t1"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default HardwareStorageManagement;
