import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/cat/term3/system-utilities-security-performance/diagram.webp", alt: "System Utilities, Security and Performance" },
    title: "Utility software for maintenance",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Utility tools help the computer run safely and efficiently. Backup software protects files, antivirus tools detect and remove threats, compression reduces file sizes and cleanup tools remove unnecessary files. In CAT, you should know the purpose of each utility and choose the one that solves the problem in the scenario."</p>
      </div>
    ),
  },
  {
    title: "Backups and recovery planning",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Backups are essential during PAT and exam preparation because important files can be deleted, corrupted or infected by malware. A strong answer mentions regular backups, more than one copy and storing at least one copy away from the main computer. Backup planning is about recovery, not only copying files occasionally."</p>
      </div>
    ),
  },
  {
    title: "Performance and file management",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"System performance can be affected by limited storage, too many background programs, malware or neglected maintenance. Good file management supports performance because organised folders, sensible storage use and removal of redundant files reduce confusion and make recovery easier. Performance questions often require logical diagnosis rather than technical jargon."</p>
      </div>
    ),
  },
  {
    title: "Safe and efficient user behaviour",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Security and performance are also affected by user behaviour. Downloading unknown files, ignoring updates or using weak passwords creates risk. Safe users update software, scan external drives, manage storage and close unnecessary applications. In Grade 12 CAT, practical competence includes habits that protect work as well as theory knowledge about tools."</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: "What is the main purpose of backup software?",
    options: ["To recover important files after loss or damage", "To make the monitor brighter", "To connect to Wi-Fi automatically", "To format paragraphs in a report"],
    answer: 0,
    explanation: "Backups create extra copies so files can be restored if something goes wrong.",
  },
  {
    prompt: "Why should a USB drive be scanned before opening files on a school computer?",
    options: ["To change the file names automatically", "To reduce the risk of malware infection", "To add page numbers", "To improve speaker volume"],
    answer: 1,
    explanation: "Scanning removable media helps detect malware before it spreads to the computer.",
  },
  {
    prompt: "Which action is most likely to improve a slow computer that has very little free storage space?",
    options: ["Deleting unnecessary files and freeing storage", "Changing the desktop background", "Printing the files", "Turning off the keyboard"],
    answer: 0,
    explanation: "Insufficient free storage can slow performance, so removing unnecessary files may help.",
  },
  {
    prompt: "What is an antivirus program designed to do?",
    options: ["Detect and deal with malicious software", "Design websites", "Replace spreadsheets", "Create database reports"],
    answer: 0,
    explanation: "Antivirus utilities help identify, quarantine and remove malware.",
  },
  {
    prompt: "Why is it risky to rely on only one copy of a PAT file?",
    options: ["One copy is always faster to open", "If that copy is lost or corrupted, the work may be gone", "Moderators reject all single files", "One copy uses too much RAM"],
    answer: 1,
    explanation: "A single copy offers no protection if the file is accidentally deleted or damaged.",
  },
  {
    prompt: "Which user habit best supports system security?",
    options: ["Opening every attachment immediately", "Using strong passwords and keeping software updated", "Ignoring warning messages", "Sharing login details with friends"],
    answer: 1,
    explanation: "Strong passwords and updates reduce the chance of unauthorised access and exploitation.",
  },
  {
    prompt: "What is file compression useful for?",
    options: ["Reducing file size for easier storage or transfer", "Improving battery life on a mouse", "Changing a report into a query", "Sorting data alphabetically only"],
    answer: 0,
    explanation: "Compression reduces the size of files so they are easier to store or send.",
  },
  {
    prompt: "Which statement about cleanup utilities is correct?",
    options: ["They can remove temporary files and free space", "They create webpages automatically", "They replace all backups", "They make weak passwords secure"],
    answer: 0,
    explanation: "Cleanup tools remove unnecessary files and can help free storage space.",
  },
];

const bank: CATItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const SystemUtilitiesSecurityPerformance = () => (
  <CapsSubjectTopic
    title="System Utilities, Security and Performance"
    subtitle="Backup, antivirus, file management and efficient system use"
    learnSteps={learnSteps}
    task="gr12-system-utilities-security-performance-t3"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default SystemUtilitiesSecurityPerformance;
