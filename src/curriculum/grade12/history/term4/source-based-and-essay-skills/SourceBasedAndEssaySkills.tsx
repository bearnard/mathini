import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "21 Mar 1960", "title": "Sharpeville massacre", "description": "Police killed 69 protesters during an anti-pass demonstration at Sharpeville. It is a key turning point that learners often use to explain cause, consequence, and changing state repression."},
            {"date": "16 Jun 1976", "title": "Soweto uprising", "description": "Students in Soweto protested against Afrikaans in schools and the revolt spread nationally. In essays and source work, it is a major example of youth resistance and historical change."},
            {"date": "20 Aug 1983", "title": "UDF launched", "description": "The United Democratic Front united many internal anti-apartheid organisations. It is a useful date for showing chronology and linking local protest to national mobilisation."},
            {"date": "2 Feb 1990", "title": "Unbanning announced", "description": "De Klerk's speech legalised major liberation movements and opened the way to negotiations. It is an important marker when planning arguments about turning points."},
            {"date": "27 Apr 1994", "title": "Democratic vote held", "description": "South Africa held its first democratic election under universal suffrage. This date helps learners structure essays around transition, legitimacy, and the end of formal apartheid."},
          ]}
        />
      </div>
    ),
  },
  {
    title: "Reading sources critically",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"History exams reward careful source analysis, not copying. When you read a written or visual source, think about who produced it, when it was created, and why it was made before you decide what it can tell you."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Provenance means the origin of the source."}</li>
          <li>{"Purpose explains what the source was trying to achieve."}</li>
          <li>{"Audience matters because sources are often shaped for specific readers or viewers."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Usefulness, reliability, and bias",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"A source can be useful even if it is biased, as long as you explain what its perspective reveals. Strong answers do not simply say a source is “biased”; they explain the direction of that bias and connect it to the context."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Reliability asks how trustworthy the information is."}</li>
          <li>{"Usefulness depends on the question being asked, not only on whether a source is neutral."}</li>
          <li>{"Corroboration means checking a claim against other sources or own knowledge."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Planning a History essay",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"An essay needs a line of argument, not a random list of facts. Start by identifying what the question is asking, then organise evidence into paragraphs that each support your overall judgement."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"The introduction should define the argument and key terms clearly."}</li>
          <li>{"Body paragraphs should combine factual evidence with explanation."}</li>
          <li>{"The conclusion should answer the question directly rather than repeat facts mechanically."}</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Chronology and exam discipline",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Chronology matters in History because causes and consequences unfold over time. In exams, use dates, sequence, and command words carefully, and always link evidence back to the argument or source question."}</p>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>{"Compare means showing similarities and differences."}</li>
          <li>{"Evaluate means giving a reasoned judgement based on evidence."}</li>
          <li>{"Good time management leaves space to check wording and avoid avoidable errors."}</li>
        </ul>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What does “provenance” mean in source analysis?",
    options: ["The origin of the source", "The final exam mark", "The number of paragraphs", "The title of the textbook"],
    answer: "The origin of the source",
    explanation: "Provenance refers to who created the source, when, and in what context.",
  },
  {
    prompt: "Why is the purpose of a source important?",
    options: ["It helps explain why the source was created and how it might shape the message", "It tells you the source is always neutral", "It replaces the need for own knowledge", "It proves the source is false"],
    answer: "It helps explain why the source was created and how it might shape the message",
    explanation: "Purpose can influence tone, selection of facts, and persuasive language in a source.",
  },
  {
    prompt: "What is corroboration?",
    options: ["Comparing evidence from different sources", "Memorising one source word for word", "Ignoring contradictory evidence", "Writing only the introduction of an essay"],
    answer: "Comparing evidence from different sources",
    explanation: "Corroboration strengthens historical judgement by checking claims across multiple pieces of evidence.",
  },
  {
    prompt: "Which statement about bias is most accurate?",
    options: ["A biased source is always useless", "Bias must be explained in relation to perspective and context", "Only written sources can be biased", "Bias means the source has no author"],
    answer: "Bias must be explained in relation to perspective and context",
    explanation: "A source can still be useful if you identify whose viewpoint it represents and why.",
  },
  {
    prompt: "What should a strong essay introduction do?",
    options: ["Present a clear line of argument", "List every fact in random order", "Copy the question without change", "Avoid mentioning the topic"],
    answer: "Present a clear line of argument",
    explanation: "A good introduction tells the reader how you will answer the question.",
  },
  {
    prompt: "Why is chronology important in History writing?",
    options: ["It shows how events unfolded over time and helps explain cause and consequence", "It allows you to ignore dates completely", "It replaces all source analysis", "It means every essay must start in 1948"],
    answer: "It shows how events unfolded over time and helps explain cause and consequence",
    explanation: "Chronology helps you show sequence, turning points, and the relationship between causes and outcomes.",
  },
  {
    prompt: "In an exam question, what does “evaluate” usually require?",
    options: ["A reasoned judgement supported by evidence", "Only a summary of the source", "A drawing or cartoon", "A list of dates with no explanation"],
    answer: "A reasoned judgement supported by evidence",
    explanation: "To evaluate is to assess something and justify your conclusion.",
  },
  {
    prompt: "How should a conclusion in a History essay work?",
    options: ["It should answer the question directly and sum up the argument", "It should introduce completely new evidence only", "It should repeat the introduction word for word", "It should ignore the wording of the question"],
    answer: "It should answer the question directly and sum up the argument",
    explanation: "A conclusion should close the essay by reinforcing the overall judgement clearly.",
  },
];

const SourceBasedAndEssaySkills = () => (
  <CapsSubjectTopic
    title="Source-based and Essay Skills"
    subtitle="How to read sources, plan arguments, and write successful History answers"
    learnSteps={learnSteps}
    task="gr12-source-based-and-essay-skills-t4"
    bank={bank}
    apiPath="/api/caps/his"
    grade={12}
  />
);

export default SourceBasedAndEssaySkills;
