import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: "Matching devices to tasks",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"CAT often tests whether you can select the right device for a realistic task. Input devices such as scanners, barcode readers and microphones are chosen for the way data is captured, while output devices such as projectors, printers and speakers are chosen for the way results are presented. The best answer usually depends on efficiency, accuracy and the working environment."</p>
      </div>
    ),
  },
  {
    title: "Operating systems and utility software",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"The operating system manages hardware, files, memory and the user interface. Utility software improves maintenance through tools such as backup, antivirus, compression, file recovery and disk-clean-up features. In Grade 12, you should be able to explain what each tool does and when it would be appropriate to use it in a school or business setting."</p>
      </div>
    ),
  },
  {
    title: "Application software and licensing",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Application software is selected according to the user's job: spreadsheets for calculations, word processors for professional documents, databases for storing structured records and browsers for web access. Licensing matters too. Proprietary, freeware, shareware and open-source software each have different cost and usage rules, and these choices affect budgets, updates and legal compliance."</p>
      </div>
    ),
  },
  {
    title: "Accessibility in practice",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Accessibility features are not add-ons that are used only rarely. Screen readers assist visually impaired users, closed captions support hearing-impaired users, and on-screen keyboards or speech recognition help users with motor difficulties. In exam questions, explain how the feature solves the barrier the user faces rather than just naming the feature."</p>
      </div>
    ),
  },
  {
    title: "Open-source software and accessibility answers",
    content: (
      <div className="space-y-4">
        <GapRule>{"Open-source programs come with their code and usually need no licence fee, which suits schools with tight budgets. When answering on accessibility, name the user's exact difficulty first, because each feature solves a specific barrier."}</GapRule>
        <GapWorked title={"Match the feature to the barrier"} steps={["Open source: the code is available and licence fees are usually avoided.", "A learner who cannot see the screen well: screen reader or magnifier.", "A learner who cannot use a mouse: keyboard navigation or voice input."]} />
        <GapMistake>{"Naming a feature without saying which barrier it solves."}</GapMistake>
      </div>
    ),
  },
];

const items = [
  {
    prompt: "Which device is best suited to capture printed text so that it can be edited in a document?",
    options: ['Projector that displays the screen on a wall', 'Scanner with OCR software', 'Plotter that prints large technical drawings', 'Speaker that plays audio from the computer'],
    answer: 1,
    explanation: "A scanner together with optical character recognition can capture printed text and convert it to editable text.",
  },
  {
    prompt: "What is the main purpose of an operating system?",
    options: ['To create spreadsheets and nothing else on the computer', 'To manage hardware resources and provide a user interface', 'To replace all application software on the computer', 'To connect the computer to the internet and do little else'],
    answer: 1,
    explanation: "The operating system controls the computer's resources and allows the user to interact with the device.",
  },
  {
    prompt: "Which option is an example of utility software?",
    options: ["Antivirus program", "Presentation theme", "Desktop background image", "Social media app"],
    answer: 0,
    explanation: "Antivirus software is a utility because it helps maintain and protect the computer system.",
  },
  {
    prompt: "Why might a school choose open-source software?",
    options: ['It cannot be updated once the school has installed it on its computers by the staff', 'It is usually available with source code and often without licence fees', 'It has no source code and always needs licence fees', 'It cannot be customised to suit the school\'s needs'],
    answer: 1,
    explanation: "Open-source software is often cheaper and may be customised or audited because the source code is available.",
  },
  {
    prompt: "Which accessibility tool would best help a learner who struggles to read small on-screen text?",
    options: ["Screen magnifier", "Barcode reader", "QR code scanner", "Trackball only"],
    answer: 0,
    explanation: "A screen magnifier enlarges text and interface elements so they are easier to read.",
  },
  {
    prompt: "A business needs to print large technical drawings. Which output device is most suitable?",
    options: ["Inkjet photo printer", "Plotter", "Data projector", "Headset"],
    answer: 1,
    explanation: "A plotter is designed for precise large-format drawings such as maps and technical plans.",
  },
  {
    prompt: "Which licensing type normally allows a user to test software before buying the full version?",
    options: ["Firmware", "Shareware", "Malware", "Public-domain hardware"],
    answer: 1,
    explanation: "Shareware is commonly distributed as a trial or limited version before payment is required.",
  },
  {
    prompt: "Why is it useful to explain the user's barrier in an accessibility answer?",
    options: ['Because every accessibility feature helps every user in the same way', 'Because the correct feature depends on the exact challenge the user experiences', 'Because accessibility is a concern for eyesight problems alone', 'Because the software licence decides which accessibility features exist for users'],
    answer: 1,
    explanation: "CAT expects you to match the accessibility feature to the barrier, such as reading, hearing or motor control.",
  },
];

const bank: CATItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const HardwareSoftwareAccessibility = () => (
  <CapsSubjectTopic
    title="Hardware, Software and Accessibility"
    subtitle="Device categories, software choices and support for different users"
    learnSteps={learnSteps}
    task="gr12-hardware-software-accessibility-t1"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default HardwareSoftwareAccessibility;
