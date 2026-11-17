import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Computer criminals',
    content: slide(
      <>
        <Rule>Cybercrime is crime that is carried out with computers or against computers. The people behind it include hackers, crackers, cyber gangs and virus authors.</Rule>
        <KeyTable
          title="Who they are"
          head={['Person or group', 'Description']}
          aria="Computer criminals and related people. Hacker, also called a threat actor: a person who gets into a system without permission. Cracker, in the CAPS an ethical hacker: a person who tests a system with the owner's permission to find weaknesses. Cyber gang: an organised group that commits cybercrime for money. Virus author: a person who writes malicious software."
          rows={[
            ['Hacker (threat actor)', 'Enters a system without permission'],
            ['Cracker (ethical hacker)', 'Tests a system with permission to find weaknesses'],
            ['Cyber gang', 'An organised group that commits cybercrime for money'],
            ['Virus author', 'Writes malicious software'],
          ]}
        />
        <Worked
          steps={[
            <>A company hires a cracker, an ethical hacker, to test its network. The cracker reports the weaknesses, and the company fixes them.</>,
            <>A hacker who enters the same network without permission is breaking the law.</>,
          ]}
        />
        <Mistake>Assuming that all hacking is illegal. Testing with the owner&rsquo;s permission is ethical hacking. Entering without permission is a crime.</Mistake>
      </>,
    ),
  },
  {
    title: 'Types and effects of cybercrime',
    content: slide(
      <>
        <Rule>Cybercrime takes many forms. Some steal things (information, identity, services), some damage systems, and some trick people. The effects are financial loss, loss of privacy, damaged reputation and loss of trust.</Rule>
        <KeyTable
          title="Kinds of computer crime"
          head={['Crime', 'What it is']}
          aria="Kinds of computer crime. Hardware theft: stealing computer equipment. Software theft: copying or using software without a licence. Information theft: stealing data. Identity theft: using another person's personal details to pretend to be them. Bandwidth theft: using someone else's internet capacity without permission. Theft of time and services: using an employer's computers for private work. Internet fraud scams: tricking people out of money online."
          rows={[
            ['Hardware theft', 'Stealing equipment'],
            ['Software theft', 'Using software without a licence'],
            ['Information theft', 'Stealing data'],
            ['Identity theft', 'Using another person’s details'],
            ['Bandwidth theft', 'Using someone else’s connection'],
            ['Theft of time and services', 'Private use of work computers'],
            ['Internet fraud scams', 'Tricking people out of money'],
          ]}
        />
        <Worked
          steps={[
            <>A person&rsquo;s identity is stolen. A criminal opens an account in their name, and the victim finds a debt they never made.</>,
            <>A neighbour who uses your Wi-Fi without permission is stealing bandwidth, and may slow your connection.</>,
          ]}
        />
        <Mistake>Thinking that only big companies are targets. Individuals are attacked too, often through scams.</Mistake>
      </>,
    ),
  },
  {
    title: 'Internet attacks and tricks',
    content: slide(
      <>
        <Rule>Criminals use malicious software and tricks. Learn what each is and how it harms, so that you can recognise and guard against it.</Rule>
        <KeyTable
          title="Attacks, described"
          head={['Term', 'Meaning']}
          aria="Attacks described. Worm: malware that spreads by itself across a network. Malware: any software meant to cause harm. Denial of service: flooding a service with requests so that real users cannot use it. Back door: a hidden way into a system that skips the normal login. Phishing: a fake message that tricks a person into giving away details. Botnet: a group of infected computers, called zombies, controlled remotely by a criminal."
          rows={[
            ['Worm', 'Malware that spreads by itself across a network'],
            ['Malware', 'Any software meant to cause harm'],
            ['Denial of service', 'Flooding a service so real users cannot use it'],
            ['Back door', 'A hidden way in that skips the login'],
            ['Phishing', 'A fake message that tricks you into giving details'],
            ['Botnet', 'Infected computers (zombies) controlled remotely'],
          ]}
        />
        <Worked
          steps={[
            <>An email that looks like it is from your bank asks you to &ldquo;confirm your password&rdquo; on a link. It is phishing. A real bank does not ask for this by email.</>,
            <>A computer in a botnet may seem normal to its owner, while a criminal uses it to help attack another service.</>,
          ]}
        />
        <Mistake>Clicking a link because the message looks official. Check the sender and go to the website yourself.</Mistake>
      </>,
    ),
  },
  {
    title: 'Safeguards and the right to privacy',
    content: slide(
      <>
        <Rule>Safeguards reduce the risk. People also have a right to access information and a right to privacy, and the two can conflict when personal information is misused.</Rule>
        <KeyTable
          title="Safeguards"
          head={['Safeguard', 'Protects against']}
          aria="Safeguards against cybercrime. Strong passwords and multi-layer verification: unauthorised access. Anti-malware software and updates: viruses, worms and other malware. A firewall: unwanted connections. Backups: loss of data. Awareness and caution: phishing and scams. Laws and reporting: criminals who are not stopped by technology alone."
          rows={[
            ['Strong passwords, extra verification', 'Unauthorised access'],
            ['Anti-malware and updates', 'Viruses, worms, malware'],
            ['Firewall', 'Unwanted connections'],
            ['Backups', 'Loss of data'],
            ['Awareness', 'Phishing and scams'],
          ]}
        />
        <Worked
          steps={[
            <>The right to access information lets people find facts. The right to privacy protects personal details. Misuse of personal information, such as selling someone&rsquo;s details without consent, breaks the second right.</>,
            <>Report cybercrime to the police and to the service concerned, and keep the evidence, such as the message.</>,
          ]}
        />
        <Mistake>Relying on one safeguard only. Use several, because each stops a different kind of attack.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between a hacker and a cracker (ethical hacker)?</>,
          <>What is identity theft?</>,
          <>What is a denial-of-service attack?</>,
          <>Give two safeguards against cybercrime.</>,
        ]}
        answers={[
          <>A hacker enters a system without permission. A cracker tests a system with the owner&rsquo;s permission.</>,
          <>Using another person&rsquo;s personal details to pretend to be them.</>,
          <>Flooding a service with requests so that real users cannot use it.</>,
          <>Any two of: strong passwords, anti-malware, a firewall, backups, awareness.</>,
        ]}
      />,
    ),
  },
];
