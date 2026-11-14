import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/cat/term4/ai-ransomware-pat-finalisation/diagram.webp", alt: "AI, Ransomware and PAT Finalisation" },
    title: 'Artificial intelligence in everyday life',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Artificial Intelligence (AI)</strong> enables machines to perform tasks that typically require human intelligence.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Chatbots and virtual assistants</strong>
            <p className="text-slate-600">Siri, Google Assistant, customer-service bots. Use NLP to understand and respond to human language.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Recommendation systems</strong>
            <p className="text-slate-600">Netflix, Spotify, YouTube use AI to suggest content based on your viewing/listening history.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Facial recognition</strong>
            <p className="text-slate-600">Identifies people in images or video. Used for phone unlocking, security, law enforcement. Raises significant privacy concerns.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Deepfakes</strong>
            <p className="text-slate-600">AI-generated fake video or audio that makes it appear someone said or did something they did not. Significant misinformation risk.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Generative AI</strong>
            <p className="text-slate-600">Creates new content (text, images, code) from prompts. E.g. ChatGPT, DALL-E. Raises questions about academic integrity and copyright.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">AI in healthcare and education</strong>
            <p className="text-slate-600">Diagnoses from scans, personalised learning paths, automated marking, and tutoring systems.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Ransomware impact and recovery',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Understanding the full impact of ransomware helps organisations respond and recover effectively.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Consequences of a ransomware attack</strong>
            <p className="text-slate-600">Loss of critical data, financial cost (ransom or recovery), reputational damage, operational downtime, legal liability for data breaches.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Recovery steps</strong>
            <p className="text-slate-600">1. Isolate infected devices. 2. Report to authorities. 3. Restore from clean backups. 4. Patch the vulnerability. 5. Communicate with affected parties.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'PAT Phase 3: finalising and presenting',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Phase 3 requires learners to present their findings in a structured, professional report.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Report structure</strong>
            <p className="text-slate-600">Cover page, table of contents, introduction, findings (with charts), analysis, conclusion, recommendations, bibliography.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">PAT evidence requirements</strong>
            <p className="text-slate-600">Screenshots of spreadsheet/database work, raw data table, charts, queries, report outputs, and the final word-processed document.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Information presentation choices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Choosing the right format for your data makes your PAT report clearer and more persuasive.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Tables</strong>
            <p className="text-slate-600">Best for presenting raw or detailed comparative data where exact values matter.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Charts/graphs</strong>
            <p className="text-slate-600">Best for showing trends, comparisons, and proportions visually. Always label axes and include a chart title.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Written analysis</strong>
            <p className="text-slate-600">Interpret what the data means — don't just describe. Explain patterns, anomalies, and implications.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CATItem[] = [
  {
    prompt: 'Which AI application suggests movies based on your watch history?',
    options: ['Facial recognition', 'Recommendation system', 'Chatbot', 'Deepfake generator'],
    answer: 'Recommendation system',
    explanation: 'Recommendation systems (used by Netflix, YouTube, Spotify) use machine learning to suggest content based on past behaviour and similar users.',
  },
  {
    prompt: 'What is a deepfake?',
    options: ['A type of ransomware that locks all your files', 'AI-made fake video or audio of people saying false things', 'A secure backup of your most important files', 'A method of encrypting data before it is sent'],
    answer: 'AI-made fake video or audio of people saying false things',
    explanation: 'Deepfakes use AI (GANs) to create convincing but fabricated media, posing serious risks for misinformation and reputation damage.',
  },
  {
    prompt: 'After a ransomware attack, what should be the FIRST response step?',
    options: ['Pay the ransom immediately', 'Isolate infected devices from the network', 'Delete all files', 'Restore from backup immediately without disconnecting'],
    answer: 'Isolate infected devices from the network',
    explanation: 'Isolation prevents the ransomware from spreading to other devices on the network. After isolating, you can assess damage and begin recovery.',
  },
  {
    prompt: 'Which PAT phase 3 document section explains what the data means and identifies patterns?',
    options: ['The cover page of the PAT report', 'The table of contents at the front', 'Analysis / Interpretation section', 'The bibliography at the end of the report'],
    answer: 'Analysis / Interpretation section',
    explanation: 'The analysis section interprets the charts and data — it explains trends, comparisons, and what the findings mean in context of the research question.',
  },
  {
    prompt: 'A learner uses ChatGPT to write their entire PAT report and submits it as their own. This is a concern because:',
    options: ['ChatGPT costs too much for most learners to use', 'It is plagiarism and shows none of their own learning', 'ChatGPT is not able to write a report at all', 'The teacher will not notice that it was used'],
    answer: 'It is plagiarism and shows none of their own learning',
    explanation: 'Submitting AI-generated work as one\'s own is considered academic dishonesty. The PAT assesses the learner\'s personal research and analytical skills.',
  },
  {
    prompt: 'What type of AI application would be used to automatically identify faces in school security footage?',
    options: ['Recommendation system', 'Generative AI', 'Facial recognition', 'Chatbot'],
    answer: 'Facial recognition',
    explanation: 'Facial recognition AI analyses facial features in images or video to identify individuals — used in security systems, phone unlocking, and law enforcement.',
  },
  {
    prompt: 'Which element is COMPULSORY in a PAT Phase 3 final report?',
    options: ['A photo of the learner', 'A bibliography listing all sources used', 'A video presentation', 'A handwritten signature on every page'],
    answer: 'A bibliography listing all sources used',
    explanation: 'A bibliography acknowledges all sources and is a mandatory part of the PAT report. It demonstrates research skills and prevents plagiarism.',
  },
  {
    prompt: 'Facial recognition technology raises which major ethical concern?',
    options: ['It drains too much battery power from devices', 'Privacy loss, mass surveillance and bias in identifying people', 'It is too costly for firms to develop', 'It can only work indoors in good lighting'],
    answer: 'Privacy loss, mass surveillance and bias in identifying people',
    explanation: 'Facial recognition can identify people without consent, enable mass surveillance, and has shown biases against certain ethnic groups in studies.',
  },
  {
    prompt: 'After restoring files from a backup post-ransomware attack, what is the next critical step?',
    options: ['Delete all of the backup files that were used', 'Patch the weakness that let the ransomware in', 'Send the ransom note back to the attackers', 'Format the backup drive straight away'],
    answer: 'Patch the weakness that let the ransomware in',
    explanation: 'If the security gap that allowed the attack is not fixed, the system will be reinfected. Patching the vulnerability is essential before reconnecting to the network.',
  },
  {
    prompt: 'For a PAT chart to be effective, it MUST include:',
    options: ['Only the raw numbers, with no title or labels', 'A title, labelled axes (if relevant) and a legend if needed', "The learner's name placed inside the chart itself", 'At least 500 data points in the data set used'],
    answer: 'A title, labelled axes (if relevant) and a legend if needed',
    explanation: 'A well-designed chart requires a descriptive title, labelled axes with units, and a legend if multiple data series are shown — otherwise the reader cannot interpret it.',
  },
];

const AiRansomwarePatFinalisation = () => (
  <CapsSubjectTopic
    title="AI, Ransomware and PAT Finalisation"
    subtitle="Artificial intelligence applications, ransomware recovery, and PAT Phase 3"
    learnSteps={learnSteps}
    task="gr11-ai-ransomware-pat-finalisation-t4"
    bank={bank}
    apiPath="/api/caps/cat"
  />
);

export default AiRansomwarePatFinalisation;
