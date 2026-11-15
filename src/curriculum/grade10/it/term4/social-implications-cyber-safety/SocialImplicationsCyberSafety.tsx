import dynamic from 'next/dynamic';
import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { ITItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const CodeBlock = dynamic(() => import('@/components/subjects/CodeBlock'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Social Impact of Information Technology',
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
          <h3 className="font-bold text-blue-900 mb-2">How IT Shapes Our Society</h3>
          <p className="text-slate-700 mb-3">
            Information technology has transformed how we live, work, learn, and communicate. 
            Understanding its social implications helps us use technology responsibly and ethically.
          </p>
        </div>
        <div className="bg-white border-2 border-blue-200 p-4 rounded shadow-sm">
          <h4 className="font-semibold text-blue-900 mb-3">Positive Impacts of IT</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-green-50 p-3 rounded border border-green-200">
              <h5 className="font-bold text-green-800 text-sm mb-2">Communication & Connectivity</h5>
              <ul className="text-xs text-slate-700 list-disc ml-5 space-y-1">
                <li>Instant global communication (email, video calls)</li>
                <li>Social media connecting people worldwide</li>
                <li>Remote work and virtual collaboration</li>
                <li>Access to diverse perspectives and cultures</li>
              </ul>
            </div>
            <div className="bg-green-50 p-3 rounded border border-green-200">
              <h5 className="font-bold text-green-800 text-sm mb-2">Education & Learning</h5>
              <ul className="text-xs text-slate-700 list-disc ml-5 space-y-1">
                <li>Online courses and e-learning platforms</li>
                <li>Access to vast information resources</li>
                <li>Interactive educational tools and simulations</li>
                <li>Breaking barriers of time and distance</li>
              </ul>
            </div>
            <div className="bg-green-50 p-3 rounded border border-green-200">
              <h5 className="font-bold text-green-800 text-sm mb-2">Healthcare Improvements</h5>
              <ul className="text-xs text-slate-700 list-disc ml-5 space-y-1">
                <li>Electronic health records for better care</li>
                <li>Telemedicine for remote consultations</li>
                <li>Advanced diagnostic tools and AI assistance</li>
                <li>Faster drug discovery and research</li>
              </ul>
            </div>
            <div className="bg-green-50 p-3 rounded border border-green-200">
              <h5 className="font-bold text-green-800 text-sm mb-2">Economic Growth</h5>
              <ul className="text-xs text-slate-700 list-disc ml-5 space-y-1">
                <li>E-commerce and online businesses</li>
                <li>New job opportunities in tech sector</li>
                <li>Increased productivity and efficiency</li>
                <li>Global marketplace access for entrepreneurs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded border border-red-200">
          <h4 className="font-semibold text-red-900 mb-3">Challenges and Concerns</h4>
          <div className="space-y-2">
            <div className="bg-white p-3 rounded border border-red-100">
              <p className="font-bold text-red-800 text-sm">Digital Divide</p>
              <p className="text-xs text-slate-600">Unequal access to technology creating economic and educational gaps between communities</p>
            </div>
            <div className="bg-white p-3 rounded border border-red-100">
              <p className="font-bold text-red-800 text-sm">Job Displacement</p>
              <p className="text-xs text-slate-600">Automation and AI replacing traditional jobs, requiring workers to adapt and reskill</p>
            </div>
            <div className="bg-white p-3 rounded border border-red-100">
              <p className="font-bold text-red-800 text-sm">Privacy Concerns</p>
              <p className="text-xs text-slate-600">Personal data collection, tracking, and potential misuse by companies and governments</p>
            </div>
            <div className="bg-white p-3 rounded border border-red-100">
              <p className="font-bold text-red-800 text-sm">Health Issues</p>
              <p className="text-xs text-slate-600">Screen addiction, reduced physical activity, eye strain, sleep disruption from blue light</p>
            </div>
            <div className="bg-white p-3 rounded border border-red-100">
              <p className="font-bold text-red-800 text-sm">Environmental Impact</p>
              <p className="text-xs text-slate-600">E-waste pollution, energy consumption of data centers, rare mineral extraction</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
          <h4 className="font-semibold text-yellow-900 mb-2">Responsible Technology Use</h4>
          <p className="text-sm text-slate-700">
            Balance is key. Use technology to enhance your life while being mindful of screen time, 
            protecting your privacy, and maintaining real-world relationships and activities.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Cybersecurity and Online Safety',
    content: (
      <div className="space-y-6">
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
          <h3 className="font-bold text-indigo-900 mb-2">Protecting Yourself Online</h3>
          <p className="text-slate-700 mb-3">
            Cybersecurity involves protecting devices, networks, and data from digital attacks. 
            Everyone must practice good security habits to stay safe online.
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded border border-red-300">
          <h4 className="font-semibold text-red-900 mb-3">Common Cyber Threats</h4>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded border border-red-100">
              <h5 className="font-bold text-red-800 text-sm mb-1">Malware</h5>
              <p className="text-xs text-slate-600 mb-2">
                Malicious software designed to harm or exploit devices. Types include:
              </p>
              <ul className="text-xs text-slate-700 list-disc ml-5 space-y-1">
                <li><strong>Virus:</strong> Attaches to files and spreads when opened</li>
                <li><strong>Worm:</strong> Self-replicating, spreads without user action</li>
                <li><strong>Trojan Horse:</strong> Disguised as legitimate software</li>
                <li><strong>Ransomware:</strong> Encrypts files and demands payment</li>
                <li><strong>Spyware:</strong> Secretly monitors and collects information</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded border border-red-100">
              <h5 className="font-bold text-red-800 text-sm mb-1">Phishing</h5>
              <p className="text-xs text-slate-600">
                Fraudulent emails or messages pretending to be from trusted sources to steal passwords, 
                credit card numbers, or personal information. Always verify sender identity!
              </p>
            </div>
            <div className="bg-white p-3 rounded border border-red-100">
              <h5 className="font-bold text-red-800 text-sm mb-1">Identity Theft</h5>
              <p className="text-xs text-slate-600">
                Stealing someone's personal information to commit fraud, open accounts, or make purchases 
                in their name. Protect your ID number, banking details, and passwords.
              </p>
            </div>
            <div className="bg-white p-3 rounded border border-red-100">
              <h5 className="font-bold text-red-800 text-sm mb-1">Cyberbullying</h5>
              <p className="text-xs text-slate-600">
                Using technology to harass, threaten, or embarrass others. Report and block bullies. 
                Support victims and promote kindness online.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded border border-green-200">
          <h4 className="font-semibold text-green-900 mb-3">Security Best Practices</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded border border-green-100">
              <h5 className="font-bold text-green-800 text-sm mb-2">Strong Passwords</h5>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>✓ At least 12 characters long</li>
                <li>✓ Mix uppercase, lowercase, numbers, symbols</li>
                <li>✓ Unique for each account (use password manager)</li>
                <li>✗ Don't use personal info (birthdate, name)</li>
                <li>✗ Don't reuse passwords across sites</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded border border-green-100">
              <h5 className="font-bold text-green-800 text-sm mb-2">Two-Factor Authentication (2FA)</h5>
              <p className="text-xs text-slate-700 mb-1">
                Adds extra security layer requiring both password AND a second verification 
                (SMS code, authenticator app, biometric).
              </p>
              <p className="text-xs text-green-700 font-semibold">Enable 2FA wherever available!</p>
            </div>
            <div className="bg-white p-3 rounded border border-green-100">
              <h5 className="font-bold text-green-800 text-sm mb-2">Regular Updates</h5>
              <p className="text-xs text-slate-700">
                Keep operating systems, apps, and antivirus software updated. 
                Updates patch security vulnerabilities that hackers exploit.
              </p>
            </div>
            <div className="bg-white p-3 rounded border border-green-100">
              <h5 className="font-bold text-green-800 text-sm mb-2">Safe Browsing</h5>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>✓ HTTPS (padlock) means the connection is encrypted, but it does not prove a site is trustworthy</li>
                <li>✓ Avoid suspicious links and attachments</li>
                <li>✓ Use reputable websites for downloads</li>
                <li>✓ Be skeptical of "too good to be true" offers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Digital Citizenship and Ethics',
    content: (
      <div className="space-y-6">
        <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
          <h3 className="font-bold text-teal-900 mb-2">Being a Responsible Digital Citizen</h3>
          <p className="text-slate-700 mb-3">
            Digital citizenship means using technology responsibly, ethically, and safely. 
            Our online actions have real consequences for ourselves and others.
          </p>
        </div>
        <div className="bg-blue-50 p-4 rounded border border-blue-200">
          <h4 className="font-semibold text-blue-900 mb-3">Ethical Computing Principles</h4>
          <div className="space-y-3">
            <div className="bg-white p-3 rounded border border-blue-100">
              <h5 className="font-bold text-blue-800 text-sm">Respect Intellectual Property</h5>
              <p className="text-xs text-slate-600 mb-2">
                Don't pirate software, music, movies, or books. Respect copyright and licenses. 
                Use open-source or purchase legitimate copies.
              </p>
              <p className="text-xs text-blue-700">✓ Give credit when using others' work (citations)</p>
            </div>
            <div className="bg-white p-3 rounded border border-blue-100">
              <h5 className="font-bold text-blue-800 text-sm">Protect Privacy</h5>
              <p className="text-xs text-slate-600">
                Respect others' privacy. Don't share personal information or photos of others without permission. 
                Be mindful of what you share publicly about yourself.
              </p>
            </div>
            <div className="bg-white p-3 rounded border border-blue-100">
              <h5 className="font-bold text-blue-800 text-sm">Be Honest and Authentic</h5>
              <p className="text-xs text-slate-600">
                Don't impersonate others, spread misinformation, or create fake profiles. 
                Be truthful in online communication. Think critically about information before sharing.
              </p>
            </div>
            <div className="bg-white p-3 rounded border border-blue-100">
              <h5 className="font-bold text-blue-800 text-sm">Practice Digital Courtesy (Netiquette)</h5>
              <p className="text-xs text-slate-600">
                Communicate respectfully. No hate speech, harassment, or offensive language. 
                Remember there's a real person on the other side of the screen.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
          <h4 className="font-semibold text-yellow-900 mb-3">South African Legislation</h4>
          <div className="space-y-2">
            <div className="bg-white p-3 rounded border border-yellow-100">
              <p className="font-bold text-yellow-800 text-sm">POPI Act (Protection of Personal Information Act)</p>
              <p className="text-xs text-slate-600">
                Regulates how personal information is processed. Organizations must protect your data, 
                have a lawful reason to use it (often your consent) and use it only for a stated purpose. You have rights to access and correct your information.
              </p>
            </div>
            <div className="bg-white p-3 rounded border border-yellow-100">
              <p className="font-bold text-yellow-800 text-sm">Cybercrimes Act</p>
              <p className="text-xs text-slate-600">
                Makes cybercrime illegal in South Africa. Penalties for hacking, malware distribution, 
                cyber fraud, identity theft, and online harassment. Cybercrime is serious and prosecuted!
              </p>
            </div>
            <div className="bg-white p-3 rounded border border-yellow-100">
              <p className="font-bold text-yellow-800 text-sm">Electronic Communications and Transactions Act (ECTA)</p>
              <p className="text-xs text-slate-600">
                Regulates online transactions and electronic communications. Provides legal recognition 
                for electronic contracts and signatures.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-purple-50 p-4 rounded border border-purple-200">
          <h4 className="font-semibold text-purple-900 mb-3">Digital Footprint</h4>
          <p className="text-sm text-slate-700 mb-2">
            Everything you do online leaves a trace—your digital footprint. This includes posts, 
            comments, likes, searches, and account activity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded border border-purple-100">
              <h5 className="font-bold text-purple-800 text-sm mb-1">Active Footprint</h5>
              <p className="text-xs text-slate-600">
                Data you deliberately share: posts, photos, comments, profile information. 
                You have control over this.
              </p>
            </div>
            <div className="bg-white p-3 rounded border border-purple-100">
              <h5 className="font-bold text-purple-800 text-sm mb-1">Passive Footprint</h5>
              <p className="text-xs text-slate-600">
                Data collected without your explicit knowledge: browsing history, cookies, 
                location tracking, app usage.
              </p>
            </div>
          </div>
          <p className="text-xs text-purple-700 mt-2 font-semibold">
            Think before you post! Future employers, schools, and others can see your digital history.
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded">
          <h4 className="font-semibold text-green-900 mb-2">Creating a Positive Online Presence</h4>
          <ul className="list-disc ml-6 space-y-1 text-sm text-slate-700">
            <li>Share constructive, helpful content</li>
            <li>Support and encourage others</li>
            <li>Report harmful content or behavior</li>
            <li>Stand up against cyberbullying (be an upstander, not a bystander)</li>
            <li>Verify information before sharing to combat misinformation</li>
            <li>Use technology for learning, creativity, and positive connections</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Fake messages and the second lock on your login",
    content: (
      <div className="space-y-4">
        <GapRule>{"Criminals send messages that imitate a bank or shop to trick you into handing over passwords or PINs. A second step at login, such as a one-time PIN sent to your phone, stops a stolen password from being enough."}</GapRule>
        <GapWorked title={"Handle a suspicious email"} steps={["The email looks like it is from your bank and asks you to confirm your PIN.", "Delete it and open the bank's own app or website instead.", "Switch on the extra login step so a thief with your password still cannot get in."]} />
        <GapMistake>{"Replying because the sender's logo looks right."}</GapMistake>
      </div>
    ),
  },
];

const bank: ITItem[] = [
  {
    prompt: 'What is cybersecurity?',
    options: ['Using only offline computers', 'Protecting systems from digital attacks', 'Erasing the internet', 'Avoiding technology'],
    answer: 'Protecting systems from digital attacks',
    explanation: 'Cybersecurity encompasses practices to defend systems and data from malicious attacks.',
  },
  {
    prompt: 'Which of the following is a good password practice?',
    options: ['Using the same password everywhere', 'Using a combination of characters with length', 'Writing it down', 'Sharing it with friends'],
    answer: 'Using a combination of characters with length',
    explanation: 'Strong passwords use uppercase, lowercase, numbers, and symbols to resist attacks.',
  },
  {
    prompt: 'What is phishing?',
    options: ['A type of fish that lives in a river bed', 'A trick to steal private data by posing as a trusted party', 'A programming language that is used for web pages', 'A network protocol for sending large files'],
    answer: 'A trick to steal private data by posing as a trusted party',
    explanation: 'Phishing uses fake emails or websites to trick people into revealing passwords, credit cards, or personal data.',
  },
  {
    prompt: 'What does the POPI Act in South Africa protect?',
    options: ['Computer hardware that is owned by firms', 'Personal information of individuals', 'Software licences that are sold to users', 'Internet speeds that are sold by providers'],
    answer: 'Personal information of individuals',
    explanation: 'The Protection of Personal Information Act regulates how organizations process and protect personal data.',
  },
  {
    prompt: 'What is two-factor authentication (2FA)?',
    options: ['Using two passwords at the same time', 'A login needing a password AND a second check', 'Logging in twice in a row each time', 'Having two separate user accounts'],
    answer: 'A login needing a password AND a second check',
    explanation: '2FA adds extra security by requiring both something you know (password) and something you have (phone/token).',
  },
];

const SocialImplicationsCyberSafety = () => (
  <CapsSubjectTopic
    title="Social Implications and Cyber Safety"
    subtitle="IT ethics, security, and digital citizenship"
    learnSteps={learnSteps}
    task="gr10-social-implications-cyber-safety-t4"
    bank={bank}
    apiPath="/api/caps/it"
    grade={10}
  />
);

export default SocialImplicationsCyberSafety;
