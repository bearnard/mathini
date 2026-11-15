import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: "Digital communication tools",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Modern communication includes e-mail, instant messaging, collaborative platforms, browsers and social networks. Each tool has strengths depending on whether the message must be formal, fast, public or collaborative. CAT questions often require learners to choose the most suitable channel and justify that choice in terms of audience, speed and professionalism."</p>
      </div>
    ),
  },
  {
    title: "Browsers and online services",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"A browser allows users to access websites and web applications, but it also plays a role in privacy and security through saved passwords, cookies, history and extensions. Learners should understand that convenience features can also create risk if they are used carelessly on shared or public devices."</p>
      </div>
    ),
  },
  {
    title: "AI, VR and AR in context",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Artificial intelligence, virtual reality and augmented reality are important Grade 12 theory topics because they show how technology is changing work and communication. AI can automate decisions or generate content, VR creates immersive digital environments and AR adds digital information to the real world. Good answers explain a realistic use case and at least one benefit or concern."</p>
      </div>
    ),
  },
  {
    title: "Social networking and responsible use",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Social networks support communication, marketing and community building, but they also raise issues such as privacy, misinformation, addiction, cyberbullying and digital footprints. CAT learners should show balanced judgement by recognising both the value of these platforms and the responsibilities that come with using them."</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: "Which communication tool is usually the most appropriate for a formal message to a teacher?",
    options: ["A meme in a group chat", "A properly written e-mail", "A disappearing social media story", "A game comment"],
    answer: 1,
    explanation: "Formal messages are best sent by e-mail because it supports professional communication.",
  },
  {
    prompt: "What does a web browser do?",
    options: ['It edits video files and does little else', 'It allows users to access and interact with websites and web apps', 'It replaces the operating system of the computer when it is opened', 'It prints database reports on a network printer'],
    answer: 1,
    explanation: "Browsers are software applications used to view and work with online content.",
  },
  {
    prompt: "Which statement best describes artificial intelligence?",
    options: ['A system that can perform tasks that normally require human-like decision-making', 'A type of network cable that connects the computers in an office to a central switch', 'A paper filing system kept in a cabinet', 'A battery technology used in phones'],
    answer: 0,
    explanation: "AI refers to systems that simulate aspects of human reasoning or pattern recognition.",
  },
  {
    prompt: "What is the difference between VR and AR?",
    options: ['VR adds data to paper, while AR prints documents', 'VR creates a fully virtual environment, while AR overlays digital elements on the real world', 'VR is a spreadsheet function used for lookups, while AR is a database object used for reports', 'VR and AR are the same technology with different names'],
    answer: 1,
    explanation: "VR replaces the user's environment, while AR adds digital content to the existing real environment.",
  },
  {
    prompt: "Why can saved passwords in a browser be risky on a shared computer?",
    options: ["They can allow other users to access accounts", "They make websites load too slowly", "They delete browsing history automatically", "They stop Wi-Fi from working"],
    answer: 0,
    explanation: "Saved passwords are convenient, but on shared devices they can expose accounts to other users.",
  },
  {
    prompt: "Which issue is a common risk of social networking?",
    options: ['Improved printer speed in the office', 'Cyberbullying and oversharing personal information', 'Longer battery cables for laptop computers', 'Better spreadsheet formulas for calculating totals in the office'],
    answer: 1,
    explanation: "Social networking can expose users to harassment and privacy risks.",
  },
  {
    prompt: "Which is a realistic use of AR?",
    options: ['Showing navigation arrows on a live phone camera view', 'Replacing the internet cables in a school with wireless routers', 'Typing a document by using a printer', 'Encrypting the RAM of a computer for good'],
    answer: 0,
    explanation: "AR overlays digital information on top of the real-world view.",
  },
  {
    prompt: "Why is AI considered both useful and risky?",
    options: ['It gives perfect answers every time it is used', 'It can improve efficiency but may also create bias or misinformation', 'It works offline and cannot connect to the internet for new data for the user to read', 'It removes the need for data to be collected'],
    answer: 1,
    explanation: "AI offers benefits, but outputs can be biased, inaccurate or misused.",
  },
];

const bank: CATItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const DigitalCommunicationEmergingTechnologies = () => (
  <CapsSubjectTopic
    title="Digital Communication and Emerging Technologies"
    subtitle="Browsers, AI, VR, AR and the changing communication landscape"
    learnSteps={learnSteps}
    task="gr12-digital-communication-emerging-technologies-t3"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default DigitalCommunicationEmergingTechnologies;
