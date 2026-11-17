import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Passwords and multi-layer verification',
    content: slide(
      <>
        <Rule>A strong password is long and hard to guess. Multi-layer (multi-factor) verification asks for more than one proof of identity, so a stolen password alone is not enough.</Rule>
        <KeyTable
          title="Kinds of proof"
          head={['Kind', 'Example']}
          aria="Kinds of proof of identity. Something you know: a password or PIN. Something you have: a phone that receives a one-time code, or a card. Something you are: a fingerprint or face scan. Multi-layer verification uses two or more of these."
          rows={[
            ['Something you know', 'A password or PIN'],
            ['Something you have', 'A phone that gets a one-time code'],
            ['Something you are', 'A fingerprint or face scan'],
          ]}
        />
        <Worked
          steps={[
            <>A strong password: a long phrase with letters, numbers and symbols, used for one account only.</>,
            <>A bank asks for your password and then sends a one-time code to your phone. A criminal with only your password cannot log in.</>,
          ]}
        />
        <Mistake>Using the same password everywhere. If one site leaks it, every account is at risk.</Mistake>
      </>,
    ),
  },
  {
    title: 'Encryption and blockchain',
    content: slide(
      <>
        <Rule>Encryption scrambles data so that only someone with the right key can read it. A blockchain is a shared record kept in linked blocks that is very hard to change afterwards.</Rule>
        <KeyTable
          title="Encryption and blockchain"
          head={['Idea', 'Meaning']}
          aria="Encryption and blockchain. Plain text: data that anyone can read. Encryption: scrambling data into cipher text using a key. Decryption: turning cipher text back into plain text with the right key. Blockchain: a shared record stored in linked blocks, where each block holds a fingerprint of the one before it, so changing an old block breaks the chain and is noticed."
          rows={[
            ['Encryption', 'Scrambles data with a key'],
            ['Decryption', 'Unscrambles it with the right key'],
            ['Blockchain', 'A shared record in linked blocks; hard to change'],
          ]}
        />
        <Worked
          steps={[
            <>A message is encrypted before it is sent. A criminal who copies it sees only scrambled characters.</>,
            <>On a blockchain, each new block records the fingerprint of the block before it. If someone alters an old block, the fingerprints no longer match and the change is noticed.</>,
          ]}
        />
        <Mistake>Thinking that encryption hides that data was sent. It hides what the data says.</Mistake>
      </>,
    ),
  },
  {
    title: 'SSL, keys and certificates',
    content: slide(
      <>
        <Rule>SSL (and its newer form, TLS) protects data between a browser and a website. It uses a public key to encrypt and a private key to decrypt. A certificate, issued by a trusted authority, proves that the website is who it says it is.</Rule>
        <KeyTable
          title="How SSL protects a connection"
          head={['Part', 'Job']}
          aria="How SSL protects a connection. Public key: shared openly, used to encrypt data sent to the website. Private key: kept secret by the website, used to decrypt. Certificate: issued by a trusted authority, it shows the website's identity and its public key. Padlock and https: the browser shows that the connection is protected."
          rows={[
            ['Public key', 'Shared openly; encrypts data to the site'],
            ['Private key', 'Kept secret; decrypts the data'],
            ['Certificate', 'Proves the site’s identity'],
            ['https and padlock', 'The connection is protected'],
          ]}
        />
        <Worked
          steps={[
            <>You open your bank&rsquo;s website. The browser checks the certificate. If it is valid, your data is encrypted with the public key, and only the bank&rsquo;s private key can decrypt it.</>,
            <>If the browser warns that a certificate is not valid, do not enter your details.</>,
          ]}
        />
        <Mistake>Thinking that the padlock means the site is honest. It means the connection is protected and the site&rsquo;s identity was checked, not that the owner is trustworthy.</Mistake>
      </>,
    ),
  },
  {
    title: 'Firewalls',
    content: slide(
      <>
        <Rule>A firewall checks the network traffic that comes in and goes out, and blocks what the rules do not allow. It can be software on a computer or a device on the network.</Rule>
        <KeyTable
          title="What a firewall does"
          head={['Job', 'Example']}
          aria="What a firewall does. Blocks unwanted incoming connections, for example an attempt to enter a home network from outside. Controls outgoing traffic, for example stopping a program from sending data out without permission. Follows rules set by the user or administrator. It does not remove viruses already on the computer."
          rows={[
            ['Blocks unwanted incoming traffic', 'An attempt to enter from outside'],
            ['Controls outgoing traffic', 'Stops a program sending data out'],
            ['Follows rules', 'Set by the user or administrator'],
          ]}
        />
        <Worked
          steps={[
            <>A school firewall blocks games sites and allows the learning sites that teachers choose.</>,
            <>A firewall together with anti-malware, updates and strong passwords is stronger than any one alone.</>,
          ]}
        />
        <Mistake>Believing that a firewall removes viruses. It filters traffic. Anti-malware software finds and removes malware.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is multi-layer verification?</>,
          <>What is the job of the private key in SSL?</>,
          <>What does a certificate show?</>,
          <>What does a firewall do?</>,
        ]}
        answers={[
          <>Using two or more proofs of identity, such as a password and a one-time code.</>,
          <>It decrypts data that was encrypted with the public key.</>,
          <>That the website is who it says it is.</>,
          <>It blocks network traffic that the rules do not allow.</>,
        ]}
      />,
    ),
  },
];
