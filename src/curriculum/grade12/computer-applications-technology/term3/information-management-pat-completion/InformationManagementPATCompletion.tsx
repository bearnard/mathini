import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: "Processing information into findings",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Information management does not end when sources are collected. In Grade 12 CAT, learners must process information by comparing sources, identifying patterns, calculating results and deciding which evidence is relevant to the investigation. The goal is to transform raw information into findings that can support a clear conclusion."</p>
      </div>
    ),
  },
  {
    title: "Evaluating quality and bias",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Reliable information is accurate, current, relevant and appropriately sourced. During PAT completion, learners should watch for bias, outdated information and unsupported claims. Good evaluation improves the quality of the final report because the conclusions depend on the trustworthiness of the evidence used."</p>
      </div>
    ),
  },
  {
    title: "Presenting results effectively",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"The way results are presented matters. Tables, charts, summaries and structured writing should make the main message easy to understand. CAT learners must choose presentation methods that suit the audience and the kind of data being shared. A strong presentation is organised, labelled and tied directly to the research question."</p>
      </div>
    ),
  },
  {
    title: "Completing PAT phase 3",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"PAT phase 3 is the completion and presentation stage. Learners finalise outputs, check that all required evidence is included and ensure that their files are neat, authentic and consistent. This stage rewards careful finishing: correct references, complete appendices, logical conclusions and professional formatting all matter."</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: "What is the main purpose of processing information during a PAT?",
    options: ["To turn raw information into meaningful findings", "To make the file size larger", "To avoid using any sources", "To replace the need for conclusions"],
    answer: 0,
    explanation: "Processing information helps learners derive findings instead of merely collecting data.",
  },
  {
    prompt: "Which source is likely to be the most reliable for a formal CAT investigation?",
    options: ["An unsigned social media post", "A current report from a reputable organisation with references", "A rumour shared in a chat group", "A website with no author or date"],
    answer: 1,
    explanation: "Reliable sources are credible, current and supported by identifiable authors or organisations.",
  },
  {
    prompt: "Why should charts and tables in a PAT be labelled clearly?",
    options: ["So they decorate the report only", "So the reader can understand what the data shows", "So the spreadsheet can close faster", "So the file does not need a title"],
    answer: 1,
    explanation: "Clear labels help the reader interpret the information correctly.",
  },
  {
    prompt: "What does bias in a source mean?",
    options: ["The source presents information in a one-sided or unfair way", "The source uses a table", "The source is stored in the cloud", "The source contains a heading"],
    answer: 0,
    explanation: "Bias means the information may favour one view and therefore needs careful evaluation.",
  },
  {
    prompt: "Which action best supports PAT phase 3 completion?",
    options: ["Submitting files without checking them", "Reviewing evidence, formatting and references before final submission", "Removing all headings", "Ignoring the original question"],
    answer: 1,
    explanation: "Final review ensures the PAT is complete, organised and ready for moderation.",
  },
  {
    prompt: "Why is relevance important when selecting information for a report?",
    options: ["Relevant information supports the research question directly", "Irrelevant details always earn extra marks", "Relevance changes the operating system", "Only irrelevant sources need references"],
    answer: 0,
    explanation: "Relevant information keeps the report focused on the investigation.",
  },
  {
    prompt: "Which statement about conclusions is best?",
    options: ["A conclusion should be copied from one source", "A conclusion should summarise findings and answer the original question", "A conclusion must introduce brand-new data only", "A conclusion replaces all charts"],
    answer: 1,
    explanation: "The conclusion should bring the evidence together and respond to the investigation question.",
  },
  {
    prompt: "What is an appendix in a PAT context?",
    options: ["Supporting material added at the end of the report", "A software licence file", "The home page of a website", "A network cable"],
    answer: 0,
    explanation: "Appendices contain supporting documents, data or evidence that back up the report.",
  },
];

const bank: CATItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const InformationManagementPATCompletion = () => (
  <CapsSubjectTopic
    title="Information Management and PAT Completion"
    subtitle="Analysing information, presenting findings and completing PAT requirements"
    learnSteps={learnSteps}
    task="gr12-information-management-pat-completion-t3"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default InformationManagementPATCompletion;
