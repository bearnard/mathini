import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Categories of application software',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Application software performs specific tasks for users. Knowing the categories helps you choose the right tool.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Productivity</strong>
            <p className="text-slate-600">Word processors, spreadsheets, presentations, databases (e.g. MS Office, LibreOffice).</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Communication</strong>
            <p className="text-slate-600">Email clients (Outlook, Gmail), video conferencing (Teams, Zoom), instant messaging (WhatsApp).</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Utility</strong>
            <p className="text-slate-600">Antivirus, backup tools, disk cleaners, file compression (WinZip), file managers.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Multimedia</strong>
            <p className="text-slate-600">Video players, audio editors, image editing (GIMP, Canva), streaming apps.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Educational</strong>
            <p className="text-slate-600">Learning management systems (Moodle, Google Classroom), tutorial apps, e-books.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Web browsers</strong>
            <p className="text-slate-600">Access the WWW — Chrome, Firefox, Edge, Safari. Act as platforms for web apps.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Cloud services: SaaS, PaaS, IaaS',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Cloud computing delivers computing resources over the internet rather than locally installed software.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-sky-50 p-4">
            <strong className="text-sky-700">SaaS — Software as a Service</strong>
            <p className="text-slate-600">Fully managed apps accessed via browser. E.g. Google Docs, Outlook 365, Dropbox. No installation needed.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">PaaS — Platform as a Service</strong>
            <p className="text-slate-600">Development platform in the cloud. E.g. Google App Engine. Developers build and deploy apps without managing servers.</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4">
            <strong className="text-violet-700">IaaS — Infrastructure as a Service</strong>
            <p className="text-slate-600">Virtualised hardware (servers, storage, networking). E.g. AWS, Microsoft Azure. Organisations manage the OS and up.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Mobile internet and responsive web design',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Most South Africans access the internet via mobile devices. Websites must adapt to different screen sizes.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Mobile internet</strong>
            <p className="text-slate-600">Data connections (4G/LTE, 5G) allow smartphones and tablets to access the internet. Data costs are a significant barrier in SA.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Responsive web design</strong>
            <p className="text-slate-600">CSS media queries adjust layout for phone, tablet, and desktop screens. Content reflows so users don't need to zoom or scroll horizontally.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Software licensing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Software licensing determines how you may legally use, share, or modify software.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Commercial / Proprietary</strong>
            <p className="text-slate-600">Must be purchased. Source code is not available. E.g. Microsoft Windows, Adobe Photoshop.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Freeware</strong>
            <p className="text-slate-600">Free to use but source code is closed. E.g. Adobe Acrobat Reader, VLC (dual-licensed).</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Shareware</strong>
            <p className="text-slate-600">Free trial with limited features or time. Must pay to unlock full version. E.g. WinRAR.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Open source</strong>
            <p className="text-slate-600">Source code is freely available; can be modified and distributed. E.g. LibreOffice, Linux, Firefox.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'Google Docs is an example of which cloud service model?',
    options: ['IaaS', 'PaaS', 'SaaS', 'DaaS'],
    answer: 'SaaS',
    explanation: 'SaaS (Software as a Service) delivers a fully functional application over the internet without installation — Google Docs, Sheets, and Gmail are classic examples.',
  },
  {
    prompt: 'A school uses WinRAR for file compression. Learners notice it asks them to buy the full version after 40 days. This is an example of:',
    options: ['Freeware', 'Open source', 'Shareware', 'Public domain'],
    answer: 'Shareware',
    explanation: 'Shareware is software you can try for free for a limited time or with limited features, after which payment is required.',
  },
  {
    prompt: 'Which software category includes tools like antivirus and disk cleanup applications?',
    options: ['Multimedia', 'Productivity', 'Utility', 'Educational'],
    answer: 'Utility',
    explanation: 'Utility software maintains, optimises, and protects the computer system. Examples include antivirus, backup, and compression tools.',
  },
  {
    prompt: 'What is the main benefit of responsive web design?',
    options: ['Websites load faster, but only on fibre connections', 'The layout adapts to screen size, so content fits phones and desktops', 'It lets websites work without an internet connection', 'It stops hackers from getting into the site'],
    answer: 'The layout adapts to screen size, so content fits phones and desktops',
    explanation: 'Responsive design uses CSS media queries to rearrange content for the screen width, improving usability on all devices.',
  },
  {
    prompt: 'LibreOffice is free to download, use, modify, and distribute. Which licence type does this describe?',
    options: ['Shareware', 'Commercial', 'Freeware', 'Open source'],
    answer: 'Open source',
    explanation: 'Open source software provides access to its source code and allows modification and redistribution under licences such as GPL.',
  },
  {
    prompt: 'A company uses Microsoft Azure to rent virtualised servers and storage. This is an example of:',
    options: ['SaaS', 'PaaS', 'IaaS', 'Freeware'],
    answer: 'IaaS',
    explanation: 'IaaS (Infrastructure as a Service) provides virtualised computing resources (servers, storage, networking) over the internet. The company manages the OS and applications.',
  },
  {
    prompt: 'In South Africa, why is mobile internet particularly important?',
    options: ['Mobile internet is faster than fibre in all areas', 'Most South Africans get online mainly through smartphones', 'Computers are cheaper than smartphones in SA', 'Wi-Fi is not allowed in the rural areas of the country'],
    answer: 'Most South Africans get online mainly through smartphones',
    explanation: 'South Africa has high smartphone penetration but lower computer ownership. Mobile data (4G/5G) is the primary internet access method for many people.',
  },
  {
    prompt: 'Which application category would Zoom (video conferencing) fall under?',
    options: ['Productivity', 'Utility', 'Communication', 'Multimedia'],
    answer: 'Communication',
    explanation: 'Video conferencing tools like Zoom, Teams, and Google Meet are communication applications that facilitate real-time audio/video interaction.',
  },
  {
    prompt: 'A developer deploys their web application on Google App Engine without managing the underlying server. Which cloud model is this?',
    options: ['SaaS', 'PaaS', 'IaaS', 'On-premises'],
    answer: 'PaaS',
    explanation: 'PaaS (Platform as a Service) provides a managed development and deployment environment. Developers focus on code; the platform handles infrastructure.',
  },
  {
    prompt: 'What is the key difference between freeware and open source software?',
    options: ['Freeware must be paid for and open source is free', 'Open source shares its code and allows changes; freeware does not', 'The two terms mean exactly the same thing', 'Open source has to be paid for after 30 days of use'],
    answer: 'Open source shares its code and allows changes; freeware does not',
    explanation: 'Freeware has no cost but is closed source. Open source allows users to view, modify, and redistribute the source code.',
  },
];

const SoftwareOnlineServicesMobileInternet = () => (
  <CapsSubjectTopic
    title="Software, Online Services and Mobile Internet"
    subtitle="Application categories, cloud models, licensing, and responsive design"
    learnSteps={learnSteps}
    task="gr11-software-online-services-mobile-internet-t3"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default SoftwareOnlineServicesMobileInternet;
