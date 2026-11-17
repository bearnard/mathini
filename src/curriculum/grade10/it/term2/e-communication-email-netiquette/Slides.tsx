import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Tools for e-communication",
    content: slide(
      <>
        <Rule>Electronic communication (e-communication) sends messages by electronic means. Each tool has its own purpose and use.</Rule>
        <KeyTable
          title="E-communication tools"
          head={["Tool", "Use"]}
          aria="E-communication tools. E-mail: Written messages and files to one or many people. Instant messaging, chat room: Quick, informal conversation. Video call and VoIP: Speaking and seeing each other over the Internet. Blog, vlog: Writing or video diary for readers. Webinar: An online lecture or meeting. Cloud storage: Keep and share files online."
          rows={[["E-mail", "Written messages and files to one or many people"], ["Instant messaging, chat room", "Quick, informal conversation"], ["Video call and VoIP", "Speaking and seeing each other over the Internet"], ["Blog, vlog", "Writing or video diary for readers"], ["Webinar", "An online lecture or meeting"], ["Cloud storage", "Keep and share files online"]]}
        />
        <Worked
          steps={[
            <>A teacher holds a webinar for learners at home and shares the notes in cloud storage.</>,
            <>A friend sends you a quick message in a chat room, and you reply later.</>,
          ]}
        />
        <Mistake>Using the wrong tool. A formal request belongs in an e-mail, not in a chat message.</Mistake>
      </>,
    ),
  },
  {
    title: "Using e-mail",
    content: slide(
      <>
        <Rule>E-mail needs an address and an account (often web-based). The address has a user name, the @ sign and a domain. Use To for the main person, Cc for people who should see it, and Bcc to copy people without showing their addresses. Always add a subject.</Rule>
        <KeyTable
          title="E-mail parts"
          head={["Part", "Purpose"]}
          aria="E-mail parts. To: The person you write to. Cc: Carbon copy: others who should see it; everyone can see them. Bcc: Blind carbon copy: hidden from other recipients. Subject: A short line that says what the e-mail is about. Attachment: A file sent with the message. Reply, forward: Answer the sender, or pass the message on."
          rows={[["To", "The person you write to"], ["Cc", "Carbon copy: others who should see it; everyone can see them"], ["Bcc", "Blind carbon copy: hidden from other recipients"], ["Subject", "A short line that says what the e-mail is about"], ["Attachment", "A file sent with the message"], ["Reply, forward", "Answer the sender, or pass the message on"]]}
        />
        <Worked
          steps={[
            <>To e-mail the class without showing everyone's address, put the addresses in Bcc.</>,
            <>A message with a clear subject such as &ldquo;Homework due Friday&rdquo; is easy to find later.</>,
          ]}
        />
        <Mistake>Putting many addresses in To when privacy matters. Use Bcc.</Mistake>
      </>,
    ),
  },
  {
    title: "Netiquette and the effects of e-communication",
    content: slide(
      <>
        <Rule>Netiquette is good manners online. Be polite, clear and brief, check your spelling, and do not type in capitals, which looks like shouting. E-communication improves accuracy, saves time and distance, lowers cost and increases speed, but messages can be misread.</Rule>
        <KeyTable
          title="Netiquette"
          head={["Do", "Why"]}
          aria="Netiquette. Be polite and respectful: Others cannot see your face or hear your tone. Use a clear subject and short text: Readers save time. Check spelling and tone: Mistakes spread fast. Do not use capitals for whole messages: It looks like shouting. Think before you send: A sent message cannot be called back."
          rows={[["Be polite and respectful", "Others cannot see your face or hear your tone"], ["Use a clear subject and short text", "Readers save time"], ["Check spelling and tone", "Mistakes spread fast"], ["Do not use capitals for whole messages", "It looks like shouting"], ["Think before you send", "A sent message cannot be called back"]]}
        />
        <Worked
          steps={[
            <>A learner who replies in anger sends a message that hurts. Waiting, and rereading it first, is better.</>,
            <>E-mail reaches another country in seconds and costs almost nothing, which is faster and cheaper than post.</>,
          ]}
        />
        <Mistake>Writing an e-mail the way you write a chat message. Match the style to the reader.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between Cc and Bcc?</>,
          <>Name one e-communication tool.</>,
          <>What is netiquette?</>,
          <>Why add a subject to an e-mail?</>,
        ]}
        answers={[
          <>Cc recipients are visible to all. Bcc recipients are hidden.</>,
          <>E-mail, instant messaging, video call, blog, webinar or cloud storage.</>,
          <>Good manners when communicating online.</>,
          <>It says what the message is about.</>,
        ]}
      />,
    ),
  },
];
