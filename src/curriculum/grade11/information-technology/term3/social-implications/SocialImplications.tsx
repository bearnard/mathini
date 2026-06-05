import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Privacy and POPIA',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Protection of Personal Information Act (POPIA)</strong> is South Africa's data privacy law. It governs how organisations collect, store, process and share personal information.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Key POPIA principles</strong>
            <p className="text-slate-600">Lawful purpose; data minimisation (collect only what is needed); consent from the data subject; security safeguards; data subject rights (access, correction, deletion).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Who it protects</strong>
            <p className="text-slate-600">Any person whose personal information is processed — name, ID number, contact details, medical info, financial data, etc.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Types of cybercrime',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Cybercrime</strong> is any criminal activity carried out using a computer or the internet. Common types include:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Phishing</strong>
            <p className="text-slate-600">Fraudulent emails/websites that trick users into revealing passwords, banking details or personal info.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Ransomware</strong>
            <p className="text-slate-600">Malware that encrypts the victim's files and demands payment for the decryption key.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Identity theft</strong>
            <p className="text-slate-600">Stealing personal information to impersonate a victim for financial or criminal gain.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Cyberbullying</strong>
            <p className="text-slate-600">Repeated harassment, threats or humiliation of a person using digital platforms.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Security measures',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Protect yourself and systems with layered security measures:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">Strong passwords + 2FA</strong>
            <p className="text-slate-600">Long, unique passwords and two-factor authentication add multiple layers of access control.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Firewalls and antivirus</strong>
            <p className="text-slate-600">Firewalls filter incoming/outgoing traffic; antivirus detects and removes malware.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Encryption and VPN</strong>
            <p className="text-slate-600">Encryption scrambles data so only authorised parties can read it. VPNs encrypt internet traffic and hide your IP address.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Digital ethics and responsible use',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Responsible digital citizenship means using technology ethically, legally and safely.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Netiquette</strong>
            <p className="text-slate-600">Online etiquette: respectful communication, not spamming, crediting sources, appropriate language.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Copyright and plagiarism</strong>
            <p className="text-slate-600">All digital content is protected by copyright unless explicitly licensed. Copying without attribution is plagiarism and may be illegal.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Digital divide</strong>
            <p className="text-slate-600">The gap between those with access to technology and those without, often linked to socioeconomic inequalities.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Fake news / misinformation</strong>
            <p className="text-slate-600">Verify information using multiple credible sources before sharing. Spreading false information has real-world consequences.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'A user receives an email claiming to be from their bank, asking them to click a link and enter their password. This is an example of:',
    options: ['Ransomware', 'Phishing', 'Cyberbullying', 'Identity theft'],
    answer: 'Phishing',
    explanation: 'Phishing uses deceptive emails or websites that impersonate trusted organisations to steal credentials.',
  },
  {
    prompt: 'What does POPIA stand for?',
    options: [
      'Protection of Private Online and Internet Activity',
      'Protection of Personal Information Act',
      'Protocol for Online Privacy and Information Access',
      'Public Online Privacy and Integrity Act',
    ],
    answer: 'Protection of Personal Information Act',
    explanation: 'POPIA is South Africa\'s data protection law that regulates how personal information is collected, stored, and processed.',
  },
  {
    prompt: 'Ransomware attacks a computer by:',
    options: [
      'Deleting the operating system files',
      'Encrypting the victim\'s files and demanding payment for the decryption key',
      'Redirecting web traffic to fake websites',
      'Sending spam emails from the victim\'s account',
    ],
    answer: 'Encrypting the victim\'s files and demanding payment for the decryption key',
    explanation: 'Ransomware locks files with encryption and demands a ransom (usually cryptocurrency) to restore access.',
  },
  {
    prompt: 'Which POPIA principle states that organisations should only collect personal information that is necessary for their stated purpose?',
    options: ['Consent', 'Data minimisation', 'Security safeguards', 'Data subject rights'],
    answer: 'Data minimisation',
    explanation: 'Data minimisation (or purpose specification) means collecting only the minimum personal data needed — no excess information.',
  },
  {
    prompt: 'What is two-factor authentication (2FA)?',
    options: [
      'Using two different passwords for the same account',
      'A login process requiring two separate forms of verification (e.g. password + OTP)',
      'Encrypting data twice before storing it',
      'A firewall that checks data twice',
    ],
    answer: 'A login process requiring two separate forms of verification (e.g. password + OTP)',
    explanation: '2FA combines something you know (password) with something you have (OTP/authenticator app) or something you are (biometrics).',
  },
  {
    prompt: 'What is the digital divide?',
    options: [
      'The difference between IPv4 and IPv6',
      'The gap between people who have access to technology and those who do not',
      'The split between public and private IP addresses',
      'The separation of hardware and software components',
    ],
    answer: 'The gap between people who have access to technology and those who do not',
    explanation: 'The digital divide reflects inequalities in technology access, often linked to income, geography, and education levels.',
  },
  {
    prompt: 'A student copies paragraphs from a website into their assignment without citing the source. This is:',
    options: ['Acceptable if the website is public', 'Plagiarism and a violation of copyright', 'Only a problem if the teacher notices', 'Legal if no money is involved'],
    answer: 'Plagiarism and a violation of copyright',
    explanation: 'Using someone else\'s work without attribution is plagiarism; digital content is protected by copyright even if freely accessible online.',
  },
  {
    prompt: 'What is the primary function of a firewall?',
    options: [
      'To back up files automatically',
      'To monitor and filter incoming and outgoing network traffic based on security rules',
      'To encrypt stored data',
      'To detect and remove viruses',
    ],
    answer: 'To monitor and filter incoming and outgoing network traffic based on security rules',
    explanation: 'A firewall acts as a barrier, allowing legitimate traffic and blocking suspicious or unauthorised connections.',
  },
  {
    prompt: 'Identity theft in a cyber context means:',
    options: [
      'Changing someone\'s username on a social media platform',
      'Stealing someone\'s personal information to impersonate them for financial or criminal purposes',
      'Creating a fake online profile for entertainment',
      'Using someone else\'s computer without permission',
    ],
    answer: 'Stealing someone\'s personal information to impersonate them for financial or criminal purposes',
    explanation: 'Cybercriminals use stolen personal data (ID numbers, banking details) to take out loans, make purchases, or commit crimes in the victim\'s name.',
  },
  {
    prompt: 'Which security measure encrypts your internet traffic and hides your IP address from websites you visit?',
    options: ['Antivirus software', 'A VPN (Virtual Private Network)', 'Two-factor authentication', 'A password manager'],
    answer: 'A VPN (Virtual Private Network)',
    explanation: 'A VPN creates an encrypted tunnel for your internet traffic and masks your real IP address, improving privacy and security.',
  },
];

const SocialImplications = () => (
  <CapsSubjectTopic
    title="Social Implications of Technology"
    subtitle="Privacy, cybercrime and responsible digital citizenship"
    learnSteps={learnSteps}
    task="gr11-social-implications-t3"
    bank={bank}
    apiPath="/api/caps/it"
  />
);

export default SocialImplications;
