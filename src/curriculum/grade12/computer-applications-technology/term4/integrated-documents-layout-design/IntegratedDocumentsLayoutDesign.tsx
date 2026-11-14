import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CATItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: "Bringing text, graphics and data together",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Integrated documents combine information from different sources into one polished output. In CAT, this may include text explanations, tables, charts, screenshots and images. The challenge is not only to include the elements, but to arrange them so that the document remains readable, relevant and visually balanced."</p>
      </div>
    ),
  },
  {
    title: "Layout and design principles",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Good layout uses alignment, spacing, proximity, contrast and repetition to guide the reader. A strong document makes it easy to see what belongs together and what matters most. Design principles are practical tools for communication, not decoration added after the content is finished."</p>
      </div>
    ),
  },
  {
    title: "Using templates and consistency",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Templates support consistency in headings, fonts, spacing and page structure. In final revision tasks, templates save time and help maintain a professional standard across multiple pages or related documents. Consistency is especially important when a document includes imported charts, tables and images from other applications."</p>
      </div>
    ),
  },
  {
    title: "Final practical consolidation",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">"Term 4 practical consolidation is about pulling earlier skills together. Learners should check integration, layout, captions, page numbering and the overall message of the document. The final product should look deliberate and exam-ready, with every element serving a clear purpose."</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: "What is the main aim of an integrated document?",
    options: ["To combine different types of content into one useful output", "To remove all graphics from a report", "To replace the need for data", "To avoid using headings"],
    answer: 0,
    explanation: "Integrated documents bring together text, graphics and data to communicate clearly.",
  },
  {
    prompt: "Which design principle helps the reader see which items belong together?",
    options: ["Proximity", "Random colour changes", "Animation only", "Compression"],
    answer: 0,
    explanation: "Proximity groups related items and helps the reader understand structure.",
  },
  {
    prompt: "Why are templates useful in document production?",
    options: ["They support consistent layout and formatting", "They prevent the document from being edited", "They remove all images automatically", "They work only in databases"],
    answer: 0,
    explanation: "Templates help maintain a consistent professional structure.",
  },
  {
    prompt: "What should be checked after inserting a chart into a final report?",
    options: ["That the chart is accurate, labelled and fits the layout", "That the keyboard volume increased", "That the Wi-Fi password changed", "That the operating system restarted"],
    answer: 0,
    explanation: "Integrated elements must remain accurate and visually suitable in the document.",
  },
  {
    prompt: "Which action improves readability the most?",
    options: ["Using clear headings and enough white space", "Placing text in random positions", "Mixing many unrelated fonts", "Adding unnecessary clip art"],
    answer: 0,
    explanation: "Clear headings and white space make the document easier to read and navigate.",
  },
  {
    prompt: "Why is alignment important in a professional document?",
    options: ["It creates visual order and a neat appearance", "It increases storage space", "It changes formula logic", "It stops backups from running"],
    answer: 0,
    explanation: "Consistent alignment makes the page look organised and easier to follow.",
  },
  {
    prompt: "What is the best reason to include captions with images or figures?",
    options: ["They help explain the purpose of the visual", "They make the file impossible to print", "They replace headings completely", "They prevent the use of templates"],
    answer: 0,
    explanation: "Captions clarify what the visual shows and how it relates to the content.",
  },
  {
    prompt: "Which statement about final practical revision is best?",
    options: ["It focuses on combining earlier CAT skills into polished outputs", "It only covers hardware theory", "It avoids layout decisions completely", "It requires no proofreading"],
    answer: 0,
    explanation: "Term 4 practical revision consolidates skills from across the year into final-quality work.",
  },
];

const bank: CATItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const IntegratedDocumentsLayoutDesign = () => (
  <CapsSubjectTopic
    title="Integrated Documents, Layout and Design"
    subtitle="Polished outputs that combine text, graphics and data effectively"
    learnSteps={learnSteps}
    task="gr12-integrated-documents-layout-design-t4"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={12}
  />
);

export default IntegratedDocumentsLayoutDesign;
