import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/cat/term3/advanced-application-integration/diagram.webp", alt: "Advanced Application Integration" },
    title: "Why application integration matters",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Application integration means using more than one tool so that data is captured once, processed accurately and presented effectively. Instead of retyping information, learners should link or import data where appropriate. This reduces errors and saves time, especially in PAT tasks where the same information may appear in a database, spreadsheet and final report."</p>
      </div>
    ),
  },
  {
    title: "Linking versus embedding",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"When content is linked, it remains connected to the original source and can update when the source changes. Embedded content becomes part of the new file and no longer depends on the original in the same way. CAT questions often test whether learners understand the trade-off between automatic updates and portability."</p>
      </div>
    ),
  },
  {
    title: "Using data across applications",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"A spreadsheet may calculate totals, a database may store records and a word-processed report may present the final findings. HTML can publish information for web viewing. Strong practical work keeps the data consistent across these applications and checks that imported content remains readable, correctly formatted and relevant."</p>
      </div>
    ),
  },
  {
    title: "Checking integration carefully",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Integrated tasks can fail when links break, old data is used or formatting is lost during transfer. Learners should verify figures after import, keep source files organised and test outputs before submission. Integration is successful only when the final document is accurate, not merely when the transfer process was completed."</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: "What is a major advantage of linking data instead of retyping it manually?",
    options: ["It reduces the risk of copying errors", "It makes the file impossible to update", "It removes the need for saving", "It changes text into images"],
    answer: 0,
    explanation: "Linking or importing data can keep information consistent and reduce manual errors.",
  },
  {
    prompt: "What happens when linked content is updated in its source file?",
    options: ["The linked content can update in the destination document", "The source file is deleted", "The operating system changes", "The printer stops working"],
    answer: 0,
    explanation: "Linked content can reflect changes from the source, depending on the application settings.",
  },
  {
    prompt: "Which statement about embedded content is correct?",
    options: ["It always updates automatically from the source file", "It becomes part of the destination file", "It cannot contain charts", "It is only used on websites"],
    answer: 1,
    explanation: "Embedded objects are stored within the destination document itself.",
  },
  {
    prompt: "Why is application integration useful in CAT practical work?",
    options: ["It allows each application to do the task it is best suited for", "It forces every task into one program", "It removes the need for accuracy checks", "It prevents the use of databases"],
    answer: 0,
    explanation: "Integration is effective because each tool can contribute its strength to the final solution.",
  },
  {
    prompt: "What is the best reason to keep source files organised when using links?",
    options: ["So broken links are less likely and the correct files are easier to find", "So the keyboard types faster", "So the browser history is erased", "So every file uses the same wallpaper"],
    answer: 0,
    explanation: "Linked tasks depend on source files being stored consistently and predictably.",
  },
  {
    prompt: "Which application is best for publishing simple structured information on a web page?",
    options: ["HTML editor or web authoring tool", "Antivirus utility", "Disk cleanup tool", "Operating system settings"],
    answer: 0,
    explanation: "HTML is used to structure and present information for the web.",
  },
  {
    prompt: "After importing a chart into a report, what should be checked first?",
    options: ["Whether the data and labels are still correct", "Whether the speakers are connected", "Whether the keyboard lights are on", "Whether the desktop theme changed"],
    answer: 0,
    explanation: "Always confirm that the imported chart still displays the correct information and labels.",
  },
  {
    prompt: "Which phrase best describes good application integration?",
    options: ["Transfer data, then verify accuracy and presentation", "Copy everything as a screenshot", "Avoid using source files", "Ignore changes once a file is linked"],
    answer: 0,
    explanation: "Good integration includes both the transfer of data and checking that the result remains correct and useful.",
  },
];

const bank: CATItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const AdvancedApplicationIntegration = () => (
  <CapsSubjectTopic
    title="Advanced Application Integration"
    subtitle="Linking data, documents and design across CAT tools"
    learnSteps={learnSteps}
    task="gr12-advanced-application-integration-t3"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default AdvancedApplicationIntegration;
