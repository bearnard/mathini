import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Evaluating websites and understanding URLs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Not all websites are reliable. Evaluate websites using the <strong>CRAAP test</strong> criteria.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">URL structure</strong>
            <p className="text-slate-600">https://www.example.co.za — protocol / subdomain / domain / country code / path.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Trust indicators</strong>
            <p className="text-slate-600">HTTPS padlock, known domain (.gov.za, .ac.za, .org), recent publication date, named author.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Warning signs</strong>
            <p className="text-slate-600">No author, outdated content, excessive ads, sensational headlines, HTTP only (no padlock).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Online threats: phishing, identity theft, and social engineering',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Cybercriminals use deception to steal personal data and money.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Phishing</strong>
            <p className="text-slate-600">Fake emails or websites that trick users into revealing passwords or banking details. Spear phishing targets specific individuals.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Identity theft</strong>
            <p className="text-slate-600">Criminals steal personal info (ID number, bank details) to open accounts or make purchases in your name.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Social engineering</strong>
            <p className="text-slate-600">Manipulating people psychologically (pretexting, baiting, quid pro quo) rather than hacking systems directly.</p>
          </div>
          <div className="rounded-xl bg-pink-50 p-4">
            <strong className="text-pink-700">Cookies and privacy</strong>
            <p className="text-slate-600">Cookies track browsing behaviour. Session cookies expire; persistent cookies stay on your device and can be used for profiling.</p>
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
          Protecting yourself online requires multiple layers of security.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Strong passwords</strong>
            <p className="text-slate-600">At least 12 characters, mix of uppercase, lowercase, numbers, and symbols. Use a password manager. Never reuse passwords.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Two-factor authentication (2FA)</strong>
            <p className="text-slate-600">Requires a second verification (SMS code, authenticator app) in addition to a password.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Antivirus and firewalls</strong>
            <p className="text-slate-600">Antivirus detects and removes malware. Firewalls block unauthorised network access.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Software updates</strong>
            <p className="text-slate-600">Updates patch security vulnerabilities. Delaying updates leaves systems exposed to known exploits.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Cryptocurrency, big data, and POPIA',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Modern digital society involves new economic systems, massive data sets, and legal protections.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Cryptocurrency</strong>
            <p className="text-slate-600">Digital currency using cryptography (e.g. Bitcoin). Decentralised — not controlled by any bank or government. High volatility and scam risk.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Big data</strong>
            <p className="text-slate-600">Extremely large datasets (volume, velocity, variety) analysed for patterns. Used by businesses, governments, healthcare.</p>
          </div>
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">POPIA (South Africa)</strong>
            <p className="text-slate-600">Protection of Personal Information Act. Organisations must collect only necessary data, protect it, and inform users of its use.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'A learner receives an email claiming to be from their bank, asking them to click a link and confirm their password. This is an example of:',
    options: ['Spam', 'Phishing', 'Cookies', 'BYOD policy'],
    answer: 'Phishing',
    explanation: 'Phishing uses deceptive emails or websites to trick users into revealing sensitive information like passwords or banking details.',
  },
  {
    prompt: 'What does the padlock icon and "https" in a browser address bar indicate?',
    options: ['The website is government-owned', 'The connection is encrypted and more secure', 'The website has been verified as accurate', 'The website is the fastest available'],
    answer: 'The connection is encrypted and more secure',
    explanation: 'HTTPS uses TLS/SSL encryption to protect data sent between your browser and the server, indicated by the padlock icon.',
  },
  {
    prompt: 'Which of the following is the BEST practice for creating a secure password?',
    options: ['Using your date of birth', 'Using the same password on all sites for convenience', 'Using at least 12 characters with a mix of letters, numbers, and symbols', 'Using your pet\'s name followed by "123"'],
    answer: 'Using at least 12 characters with a mix of letters, numbers, and symbols',
    explanation: 'Long, complex, unique passwords are far harder to crack. Avoid personal information and never reuse passwords across sites.',
  },
  {
    prompt: 'What is social engineering in cybersecurity?',
    options: ['Building social media platforms', 'Manipulating people psychologically to reveal confidential information', 'Programming social apps', 'Networking with professional contacts online'],
    answer: 'Manipulating people psychologically to reveal confidential information',
    explanation: 'Social engineering exploits human trust rather than technical vulnerabilities — attackers pretend to be IT support, colleagues, or authority figures.',
  },
  {
    prompt: 'According to South Africa\'s POPIA, an organisation that collects personal data must:',
    options: ['Share it freely with other companies', 'Sell it to marketers', 'Collect only necessary data, protect it, and inform users how it will be used', 'Store it indefinitely without restriction'],
    answer: 'Collect only necessary data, protect it, and inform users how it will be used',
    explanation: 'POPIA (Protection of Personal Information Act) requires organisations to process personal data lawfully, minimally, and transparently.',
  },
  {
    prompt: 'Two-factor authentication (2FA) improves security by:',
    options: ['Requiring two usernames', 'Asking for a password twice', 'Requiring a second verification step (e.g. SMS code) beyond the password', 'Blocking all login attempts'],
    answer: 'Requiring a second verification step (e.g. SMS code) beyond the password',
    explanation: '2FA means even if someone steals your password, they cannot log in without also having the second factor (phone, authenticator app, fingerprint).',
  },
  {
    prompt: 'Big data is characterised by three "V"s. Which option correctly lists them?',
    options: ['Volume, Velocity, Variety', 'Value, Vision, Voice', 'Validation, Volume, Velocity', 'Variety, Value, Verification'],
    answer: 'Volume, Velocity, Variety',
    explanation: 'Big data is defined by Volume (massive size), Velocity (high speed of generation), and Variety (multiple formats: structured, unstructured, semi-structured).',
  },
  {
    prompt: 'A website charges users R50 to access study notes but the site has no visible author, no date, and many pop-up ads. What should a learner conclude?',
    options: ['The site is reliable because it charges a fee', 'The site should be treated with caution — it lacks credibility indicators', 'The fee proves the content is accurate', 'Pop-up ads mean the site is popular'],
    answer: 'The site should be treated with caution — it lacks credibility indicators',
    explanation: 'Credible websites have named authors, recent dates, and reputable domains. Missing these indicators (plus intrusive ads) suggest low reliability.',
  },
  {
    prompt: 'What is the main risk of using cryptocurrency for transactions in South Africa?',
    options: ['It is illegal in South Africa', 'High price volatility and the prevalence of investment scams', 'It can only be used internationally', 'It requires a special computer to spend'],
    answer: 'High price volatility and the prevalence of investment scams',
    explanation: 'Cryptocurrency values fluctuate wildly, and scam schemes ("get rich quick") target inexperienced users.',
  },
  {
    prompt: 'What is the purpose of cookies on a website?',
    options: ['To protect the website from hackers', 'To store small pieces of data on the user\'s device (e.g. login status, preferences, browsing behaviour)', 'To display images faster', 'To enable HTTPS encryption'],
    answer: 'To store small pieces of data on the user\'s device (e.g. login status, preferences, browsing behaviour)',
    explanation: 'Cookies allow websites to remember users (session cookies) or track long-term behaviour (persistent cookies) for personalisation and analytics.',
  },
];

const WebsitesIoTSecurityPrivacy = () => (
  <CapsSubjectTopic
    title="Websites, IoT, Security and Privacy"
    subtitle="Website evaluation, online threats, POPIA, cryptocurrency, and big data"
    learnSteps={learnSteps}
    task="gr11-websites-iot-security-privacy-t2"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default WebsitesIoTSecurityPrivacy;
