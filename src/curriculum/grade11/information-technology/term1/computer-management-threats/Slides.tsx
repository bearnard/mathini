import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Human error and physical threats",
    content: slide(
      <>
        <Rule>Many losses come from people, not criminals. GIGO (garbage in, garbage out) means that wrong input gives wrong output. Physical threats include theft and loss of portable media, and hardware can also fail.</Rule>
        <KeyTable
          title="Human, physical and hardware threats"
          head={["Threat", "Example"]}
          aria="Human, physical and hardware threats. Human error: Typing the wrong figure, deleting a file by accident. GIGO: Wrong data in gives wrong results out. Theft: A laptop or flash drive is stolen. Portable media: A lost flash drive that holds private files. Hardware failure: A storage drive fails, or the power goes off."
          rows={[["Human error", "Typing the wrong figure, deleting a file by accident"], ["GIGO", "Wrong data in gives wrong results out"], ["Theft", "A laptop or flash drive is stolen"], ["Portable media", "A lost flash drive that holds private files"], ["Hardware failure", "A storage drive fails, or the power goes off"]]}
        />
        <Worked
          steps={[
            <>A clerk types a price as 1000 instead of 100. The report is wrong. This is GIGO.</>,
            <>A load-shedding power cut can damage data that was not saved. A UPS gives time to save and shut down.</>,
          ]}
        />
        <Mistake>Blaming the computer for a wrong result. Often the input was wrong.</Mistake>
      </>,
    ),
  },
  {
    title: "Malware and social engineering",
    content: slide(
      <>
        <Rule>Malware is software that is made to harm. Social engineering tricks people into giving away details or access. Each needs a different defence.</Rule>
        <KeyTable
          title="Malware and tricks"
          head={["Term", "Meaning"]}
          aria="Malware and tricks. Virus: Attaches to a file and spreads when it is opened. Worm: Spreads by itself over a network. Trojan: Looks useful but hides harmful code. Ransomware: Locks files until money is paid. Spyware, keylogger: Secretly watches you or records your typing. Rootkit, bot: Hides its presence, or lets a criminal control the computer. Spoofing, phishing, pharming: Fake sender, fake message, fake website."
          rows={[["Virus", "Attaches to a file and spreads when it is opened"], ["Worm", "Spreads by itself over a network"], ["Trojan", "Looks useful but hides harmful code"], ["Ransomware", "Locks files until money is paid"], ["Spyware, keylogger", "Secretly watches you or records your typing"], ["Rootkit, bot", "Hides its presence, or lets a criminal control the computer"], ["Spoofing, phishing, pharming", "Fake sender, fake message, fake website"]]}
        />
        <Worked
          steps={[
            <>A free game that also installs spyware is a Trojan. A fake bank page reached through a poisoned link is pharming.</>,
            <>A keylogger can record your password as you type it.</>,
          ]}
        />
        <Mistake>Thinking that malware always shows itself. Much of it hides.</Mistake>
      </>,
    ),
  },
  {
    title: "Remedies and good practice",
    content: slide(
      <>
        <Rule>Use several protections together. Train people, restrict access, back up, and use software that blocks threats.</Rule>
        <KeyTable
          title="Remedies"
          head={["Remedy", "Protects against"]}
          aria="Remedies. Awareness training: Phishing and human error. Locked rooms and alarms: Theft and physical access. Backups, including online: Data loss. UPS: Power failure. Usernames, strong passwords, access rights: Unauthorised access. Firewall, anti-virus: Network threats and malware. Validation, CAPTCHA: Bad input and automated bots."
          rows={[["Awareness training", "Phishing and human error"], ["Locked rooms and alarms", "Theft and physical access"], ["Backups, including online", "Data loss"], ["UPS", "Power failure"], ["Usernames, strong passwords, access rights", "Unauthorised access"], ["Firewall, anti-virus", "Network threats and malware"], ["Validation, CAPTCHA", "Bad input and automated bots"]]}
        />
        <Worked
          steps={[
            <>A school keeps the server room locked, backs up each night to online storage, and teaches staff to spot phishing.</>,
            <>A CAPTCHA asks you to prove that you are a person, which blocks many bots.</>,
          ]}
        />
        <Mistake>Relying on one protection. A single weak point can undo the rest.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does GIGO mean?</>,
          <>What is ransomware?</>,
          <>What is a keylogger?</>,
          <>Give one remedy against power failure.</>,
        ]}
        answers={[
          <>Garbage in, garbage out: wrong input gives wrong output.</>,
          <>Malware that locks files until money is paid.</>,
          <>Software that records what you type.</>,
          <>A UPS.</>,
        ]}
      />,
    ),
  },
];
