import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/cat/term1/systems-technologies-accessibility/diagram.webp", alt: "Systems Technologies and Accessibility" },
    title: 'The information processing cycle',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Every computer follows an <strong>information processing cycle</strong>: Input → Process → Output → Storage.
        </p>
        <div className="grid gap-3 md:grid-cols-4 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Input</strong>
            <p className="text-slate-600">Data is entered via keyboard, mouse, scanner, microphone, or camera.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Process</strong>
            <p className="text-slate-600">The CPU performs calculations and logical operations on the data.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Output</strong>
            <p className="text-slate-600">Results are displayed on a monitor, printed, or sent to speakers.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Storage</strong>
            <p className="text-slate-600">Data is saved to a hard drive, SSD, USB stick, or cloud service.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Hardware categories and choices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Choosing the right hardware depends on the task, budget, and user needs.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Desktop vs Laptop</strong>
            <p className="text-slate-600">Desktops offer more power and upgradability; laptops offer portability and battery life.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Tablet vs Smartphone</strong>
            <p className="text-slate-600">Tablets suit media and light work; smartphones combine communication with computing.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Input devices</strong>
            <p className="text-slate-600">Keyboard, mouse, touchscreen, stylus, barcode scanner, biometric reader.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Output devices</strong>
            <p className="text-slate-600">Monitor, printer (inkjet/laser), speakers, projector, braille embosser.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Accessibility options',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Accessibility features allow computers to be used by people with physical, visual, or hearing impairments.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Visual</strong>
            <p className="text-slate-600">Screen reader (e.g. NVDA), screen magnifier, high-contrast display, text-to-speech.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Motor</strong>
            <p className="text-slate-600">On-screen keyboard, sticky keys, filter keys, mouse keys, voice recognition.</p>
          </div>
          <div className="rounded-xl bg-pink-50 p-4">
            <strong className="text-pink-700">Hearing</strong>
            <p className="text-slate-600">Visual alerts instead of sounds, captions, sound-to-visual notification tools.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Hardware protection and computer management',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Protecting hardware and managing your computer keeps data safe and performance optimal.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Physical protection</strong>
            <p className="text-slate-600">Laptop locks, security cables, CCTV, access control (PINs, biometrics), asset tagging.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Computer management</strong>
            <p className="text-slate-600">Disk cleanup, defragmentation (HDD), Task Manager, device drivers, software updates.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'Which part of the information processing cycle involves the CPU calculating and manipulating data?',
    options: ['Input', 'Output', 'Storage', 'Process'],
    answer: 'Process',
    explanation: 'The CPU processes (executes) instructions and performs arithmetic/logic operations during the processing stage.',
  },
  {
    prompt: 'A visually impaired learner needs to hear what is displayed on screen. Which accessibility feature is most suitable?',
    options: ['Screen magnifier', 'High-contrast theme', 'Screen reader (text-to-speech)', 'On-screen keyboard'],
    answer: 'Screen reader (text-to-speech)',
    explanation: 'A screen reader converts on-screen text and interface elements to speech, enabling blind or visually impaired users to operate a computer.',
  },
  {
    prompt: 'Which device is classified as BOTH an input and an output device?',
    options: ['Keyboard', 'Printer', 'Touchscreen', 'Webcam'],
    answer: 'Touchscreen',
    explanation: 'A touchscreen accepts touch input and displays output, making it a dual input/output device.',
  },
  {
    prompt: 'What is the main advantage of an SSD over a traditional HDD?',
    options: ['Lower cost per GB', 'Greater storage capacity', 'Faster data access speeds and no moving parts', 'Works without electricity'],
    answer: 'Faster data access speeds and no moving parts',
    explanation: 'SSDs use flash memory, giving significantly faster read/write speeds and greater shock resistance compared to spinning hard drives.',
  },
  {
    prompt: 'A user finds their desktop computer is running slowly. Which computer-management tool should they use to see which programs are using the most CPU and RAM?',
    options: ['Disk Cleanup', 'Device Manager', 'Task Manager', 'Defragmenter'],
    answer: 'Task Manager',
    explanation: 'Task Manager shows real-time CPU, RAM, disk, and network usage per process, helping identify resource-heavy programs.',
  },
  {
    prompt: 'Which accessibility option helps a user with limited hand mobility type without a physical keyboard?',
    options: ['Screen reader', 'On-screen keyboard', 'Screen magnifier', 'Closed captions'],
    answer: 'On-screen keyboard',
    explanation: 'An on-screen keyboard displays a virtual keyboard on screen that can be operated using a mouse, touchscreen, or eye-tracking device.',
  },
  {
    prompt: 'A school laptop is stolen. Which physical security measure would have helped identify the device?',
    options: ['Disk defragmentation', 'Asset tagging with a barcode or engraving', 'Installing antivirus software', 'Using a screen saver'],
    answer: 'Asset tagging with a barcode or engraving',
    explanation: 'Asset tagging marks devices with a unique identifier, making stolen hardware easier to identify and return.',
  },
  {
    prompt: 'RAM is an example of which type of storage?',
    options: ['Secondary storage', 'Tertiary storage', 'Primary (volatile) storage', 'Cloud storage'],
    answer: 'Primary (volatile) storage',
    explanation: 'RAM is primary storage — it is fast, directly accessible by the CPU, and volatile (data is lost when power is off).',
  },
  {
    prompt: 'What does the term "ergonomics" mean in the context of computer hardware?',
    options: ['The speed of the processor', 'Designing equipment for safe, comfortable, and efficient human use', 'The amount of storage available', 'The cost of hardware components'],
    answer: 'Designing equipment for safe, comfortable, and efficient human use',
    explanation: 'Ergonomics applies principles of human physiology to hardware design (e.g. adjustable chairs, wrist rests) to reduce strain and injury.',
  },
  {
    prompt: 'Which output device would be most appropriate for a user who is hearing impaired and needs to receive computer audio as text?',
    options: ['Loudspeaker', 'Subwoofer', 'Braille embosser', 'Closed-caption display or subtitles'],
    answer: 'Closed-caption display or subtitles',
    explanation: 'Closed captions convert audio (speech, sound effects) into on-screen text, making audio content accessible to deaf or hard-of-hearing users.',
  },
];

const SystemsTechnologiesAccessibility = () => (
  <CapsSubjectTopic
    title="Systems Technologies and Accessibility"
    subtitle="Hardware, the processing cycle, and accessible computing"
    learnSteps={learnSteps}
    task="gr11-systems-technologies-accessibility-t1"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default SystemsTechnologiesAccessibility;
