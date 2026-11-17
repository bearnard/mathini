import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Mobile devices and apps",
    content: slide(
      <>
        <Rule>Mobile devices such as smartphones, tablets and laptops let people communicate anywhere. A mobile app is a program installed on the device. A website is opened in the mobile browser. Writing style and audience change with the channel.</Rule>
        <KeyTable
          title="Mobile e-communication"
          head={["Item", "Points"]}
          aria="Mobile e-communication. E-mail: Longer and more formal. SMS, instant message, microblog: Short and informal. Video casting, podcasting, video conferencing: Spoken or visual, for a wider audience. Mobile app: Installed on the device, can use its features. Mobile website: Opened in the browser, nothing to install."
          rows={[["E-mail", "Longer and more formal"], ["SMS, instant message, microblog", "Short and informal"], ["Video casting, podcasting, video conferencing", "Spoken or visual, for a wider audience"], ["Mobile app", "Installed on the device, can use its features"], ["Mobile website", "Opened in the browser, nothing to install"]]}
        />
        <Worked
          steps={[
            <>A learner uses a bank app for quick access, but opens the bank website in a browser on a friend's phone without installing anything.</>,
            <>A text message to a friend can be informal. An e-mail to a principal should be formal.</>,
          ]}
        />
        <Mistake>Writing every message in the same style. Match the style to the audience.</Mistake>
      </>,
    ),
  },
  {
    title: "Wireless technologies and connection speed",
    content: slide(
      <>
        <Rule>Wireless technologies link devices without cables. They differ in range and bandwidth. Shaping and throttling are ways in which a provider controls connection speed.</Rule>
        <KeyTable
          title="Wireless technologies"
          head={["Technology", "Use"]}
          aria="Wireless technologies. GPS: Finds position with satellites. 4G and 5G: Cellular data; 5G is faster. Bluetooth: Short range, such as earphones. Wi-Fi and access points: A local area, such as a home or school. Shaping: Giving some traffic priority. Throttling: Slowing a connection, for example after a data limit."
          rows={[["GPS", "Finds position with satellites"], ["4G and 5G", "Cellular data; 5G is faster"], ["Bluetooth", "Short range, such as earphones"], ["Wi-Fi and access points", "A local area, such as a home or school"], ["Shaping", "Giving some traffic priority"], ["Throttling", "Slowing a connection, for example after a data limit"]]}
        />
        <Worked
          steps={[
            <>Bluetooth reaches a few metres, Wi-Fi reaches a building, and 4G or 5G reaches a wide area.</>,
            <>After you use your data allowance, a provider may throttle your speed.</>,
          ]}
        />
        <Mistake>Thinking that Wi-Fi and mobile data are the same. Wi-Fi links to a router. Mobile data uses the cellular network.</Mistake>
      </>,
    ),
  },
  {
    title: "Protocols, blockchain and data security",
    content: slide(
      <>
        <Rule>Protocols are agreed rules for sending data. POP3, IMAP and SMTP handle e-mail, and VoIP carries voice. A blockchain is a shared record in linked blocks that is hard to change. Passwords, encryption and multi-layer verification protect data.</Rule>
        <KeyTable
          title="Protocols and security"
          head={["Item", "Function"]}
          aria="Protocols and security. SMTP: Sends e-mail. POP3, IMAP: Receive e-mail from a server. VoIP: Carries voice calls over the Internet. Blockchain: A shared record in linked blocks, hard to change. Encryption: Scrambles data so only a key holder reads it. Multi-layer verification: Two or more proofs of identity."
          rows={[["SMTP", "Sends e-mail"], ["POP3, IMAP", "Receive e-mail from a server"], ["VoIP", "Carries voice calls over the Internet"], ["Blockchain", "A shared record in linked blocks, hard to change"], ["Encryption", "Scrambles data so only a key holder reads it"], ["Multi-layer verification", "Two or more proofs of identity"]]}
        />
        <Worked
          steps={[
            <>SMTP sends your message to the mail server, and IMAP lets you read it on several devices.</>,
            <>A bank asks for a password and a one-time code: this is multi-layer verification.</>,
          ]}
        />
        <Mistake>Mixing up sending and receiving protocols. SMTP sends. POP3 and IMAP receive.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which protocol sends e-mail?</>,
          <>What is throttling?</>,
          <>What is Bluetooth used for?</>,
          <>What is multi-layer verification?</>,
        ]}
        answers={[
          <>SMTP.</>,
          <>Slowing a connection, for example after a data limit.</>,
          <>Short-range links such as earphones.</>,
          <>Using two or more proofs of identity.</>,
        ]}
      />,
    ),
  },
];
