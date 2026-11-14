import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/cat/term4/email-management-online-risks/diagram.webp", alt: "Email Management and Online Risks" },
    title: 'Email organisation and management',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Organised email keeps communication efficient and information findable.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Folders and filters</strong>
            <p className="text-slate-600">Create folders for projects or senders. Set rules/filters to automatically sort incoming mail into folders.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Flags and categories</strong>
            <p className="text-slate-600">Flag important messages for follow-up. Use colour categories to group emails by topic or priority.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">CC vs BCC</strong>
            <p className="text-slate-600">CC (Carbon Copy): all recipients see each other. BCC (Blind Carbon Copy): other recipients are hidden from BCC recipients. Use BCC to protect privacy.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Distribution lists</strong>
            <p className="text-slate-600">A named group of email addresses. Send one email to the group name and all members receive it — ideal for teams or classes.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Web-based mail vs email client',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Email can be accessed through a browser or through dedicated client software.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">Web-based mail (webmail)</strong>
            <p className="text-slate-600">Accessed via browser (e.g. Gmail, Outlook.com). Works on any device without installation. Requires internet connection. Emails stored on server.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Email client</strong>
            <p className="text-slate-600">Installed software (e.g. Microsoft Outlook, Thunderbird). Can work offline. Downloads emails to device (POP3) or syncs with server (IMAP).</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">IMAP keeps emails on the server (accessible from multiple devices). POP3 downloads and typically removes from server.</p>
      </div>
    ),
  },
  {
    title: 'Ransomware and clickjacking',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Understanding modern online threats helps you protect yourself and others.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Ransomware</strong>
            <p className="text-slate-600">Malware that encrypts your files and demands payment (ransom) for the decryption key. Spreads via email attachments, malicious downloads. Prevention: backups, patches, antivirus.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Clickjacking</strong>
            <p className="text-slate-600">An invisible or transparent layer is placed over a website button. You click what you think is one thing but actually click something else (e.g. authorising a transaction).</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">VPN</strong>
            <p className="text-slate-600">A Virtual Private Network encrypts your internet traffic and hides your IP address. Safe for public Wi-Fi; used by businesses for remote access.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Man-in-the-middle attack</strong>
            <p className="text-slate-600">An attacker secretly intercepts and possibly alters communication between two parties. Common on unsecured Wi-Fi networks.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Safe online practices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Building safe digital habits protects you, your school, and your community.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Spam management</strong>
            <p className="text-slate-600">Mark junk as spam to train the filter. Never click links or open attachments in unsolicited emails. Use an email with a built-in spam filter.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Public Wi-Fi risks</strong>
            <p className="text-slate-600">Avoid sensitive transactions (banking, logins) on unencrypted public Wi-Fi. Use a VPN if you must connect.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'A teacher sends an exam timetable to 30 learners but wants to keep the email addresses of recipients private from each other. Which field should she use?',
    options: ['To', 'CC', 'BCC', 'Reply-all'],
    answer: 'BCC',
    explanation: 'BCC (Blind Carbon Copy) sends the email to all recipients without revealing their addresses to each other.',
  },
  {
    prompt: 'What is a distribution list in an email client?',
    options: ['A list of the emails that you have not yet read', 'A saved group of email addresses used by sending to one name', 'A history of the emails sent to one person', 'A report of the spam that was blocked this week'],
    answer: 'A saved group of email addresses used by sending to one name',
    explanation: 'A distribution list (contact group) lets you send one email to a group name, and all members of the group receive the message.',
  },
  {
    prompt: 'Ransomware attacks a school\'s network and encrypts all files. What is the BEST prior safeguard that would have minimised data loss?',
    options: ['Installing a new web browser on each computer', 'Regular, tested backups kept off-site or in the cloud', 'Using a distribution list for the staff emails', 'Turning on BCC for all of the outgoing emails'],
    answer: 'Regular, tested backups kept off-site or in the cloud',
    explanation: 'Ransomware is best countered with current backups. If files are encrypted, you can restore from a clean backup without paying the ransom.',
  },
  {
    prompt: 'What is the key difference between IMAP and POP3?',
    options: ['IMAP is faster than POP3 on any network', 'IMAP keeps mail on the server; POP3 downloads it and removes it', 'POP3 is meant for smartphones and nothing else', 'The two have no practical difference between them'],
    answer: 'IMAP keeps mail on the server; POP3 downloads it and removes it',
    explanation: 'IMAP synchronises email across all devices (phone, laptop, tablet). POP3 downloads to one device, making emails inaccessible from others.',
  },
  {
    prompt: 'A learner clicks a "Play video" button on a website but unknowingly authorises an app permission instead. This is an example of:',
    options: ['Phishing', 'Ransomware', 'Clickjacking', 'Spam'],
    answer: 'Clickjacking',
    explanation: 'Clickjacking overlays an invisible element on top of a visible button. The user thinks they are clicking one thing but are actually clicking something hidden beneath it.',
  },
  {
    prompt: 'Which protocol should an email client use to allow a learner to access the same emails on their phone AND laptop?',
    options: ['POP3', 'IMAP', 'FTP', 'SMTP'],
    answer: 'IMAP',
    explanation: 'IMAP keeps emails on the mail server and syncs the same mailbox across multiple devices — changes on one device reflect on all others.',
  },
  {
    prompt: 'What is the main advantage of using webmail over an email client application?',
    options: ['Webmail works without an internet connection', 'Webmail works on any device with a browser, with no install', 'Webmail is more secure than any email client', 'Webmail stores all the emails on the local device'],
    answer: 'Webmail works on any device with a browser, with no install',
    explanation: 'Webmail requires only a browser and internet connection — you can check your email from any computer, phone, or tablet.',
  },
  {
    prompt: 'A VPN is recommended when using public Wi-Fi because it:',
    options: ['It increases the speed of the Wi-Fi network', 'It makes the downloads that you do free of charge', 'It encrypts your traffic and hides your IP address from attackers', 'It blocks all of the advertisements on web pages'],
    answer: 'It encrypts your traffic and hides your IP address from attackers',
    explanation: 'VPNs encrypt the data tunnel between your device and the VPN server, protecting your information from man-in-the-middle attacks on public networks.',
  },
  {
    prompt: 'Which email setting automatically moves all emails from "admin@school.co.za" into a folder called "School Admin"?',
    options: ['Flag', 'BCC rule', 'Email filter/rule', 'Distribution list'],
    answer: 'Email filter/rule',
    explanation: 'Email filters (rules) automatically sort, move, delete, or flag incoming messages based on conditions like sender, subject, or keywords.',
  },
  {
    prompt: 'How does ransomware typically reach a victim\'s device?',
    options: ['Through physical USB drives and nothing else', 'Bad email attachments, infected downloads or hacked sites', 'By getting into the camera of the device', 'Through Bluetooth connections and nothing else'],
    answer: 'Bad email attachments, infected downloads or hacked sites',
    explanation: 'Ransomware is commonly delivered via phishing emails with infected attachments, drive-by downloads, or malicious links — making email vigilance critical.',
  },
];

const EmailManagementOnlineRisks = () => (
  <CapsSubjectTopic
    title="Email Management and Online Risks"
    subtitle="Email organisation, webmail vs client, ransomware, and online safety"
    learnSteps={learnSteps}
    task="gr11-email-management-online-risks-t4"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default EmailManagementOnlineRisks;
