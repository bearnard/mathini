import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/eng/term2/summary-writing-technique/diagram.webp", alt: "Summary Writing Technique" },
    title: 'What summary writing requires',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A summary condenses a longer passage into a shorter text by identifying and restating <strong>only the main ideas</strong> in your own words.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">What to INCLUDE</strong>
            <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1 mt-1">
              <li>Main ideas only (topic sentences or key facts)</li>
              <li>Your own words — paraphrase, don't copy</li>
              <li>All required points (check how many are asked)</li>
              <li>Continuous prose (not bullet points)</li>
            </ul>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">What to EXCLUDE</strong>
            <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1 mt-1">
              <li>Examples, illustrations, and anecdotes</li>
              <li>Repeated or redundant information</li>
              <li>Direct quotations from the original text</li>
              <li>Your own opinions or added details</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Identifying key points and paraphrasing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Finding the main idea in a paragraph is a skill — it is usually in the <strong>topic sentence</strong> (often the first or last sentence).
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-3">
          <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Original</p>
          <p className="text-slate-600 text-sm italic">"Regular exercise has numerous health benefits. It strengthens the cardiovascular system, improves mental health, and helps maintain a healthy weight."</p>
          <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide mt-2">Paraphrase (main idea only)</p>
          <p className="text-slate-600 text-sm italic">"Physical activity contributes significantly to overall health and well-being."</p>
        </div>
        <p className="text-sm text-slate-500 mt-1">Note: Supporting details (cardiovascular, mental, weight) are dropped in the summary.</p>
      </div>
    ),
  },
  {
    title: 'Keeping to the word limit',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In CAPS, the summary word limit is strictly enforced. Writing <strong>more</strong> than the limit will result in marks being deducted for excess words.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">How to count words</strong>
            <p className="text-slate-600 text-sm">Count every word including short ones ("a", "the", "is"). Hyphenated words count as one word. Numbers count as one word.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Strategy</strong>
            <p className="text-slate-600 text-sm">Plan your points before writing. Be concise: use noun phrases instead of full clauses where possible. Cut redundant language.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Writing the summary in continuous prose',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A summary must be written as <strong>flowing paragraph(s)</strong>, not a list. Each sentence should link naturally to the next.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left space-y-2">
          <p className="font-bold text-indigo-700 text-sm">Checklist before submitting:</p>
          <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1">
            <li>All required points included</li>
            <li>Written in your own words — no direct quotes</li>
            <li>Within the specified word limit</li>
            <li>Written in continuous prose (no bullet points)</li>
            <li>Correct tense and person (usually third person)</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the golden rule of summary writing?',
    options: [
      'Copy the best sentences from the original as they are',
      'Include as many details and examples as possible to show understanding',
      'Express the main ideas in your own words, keeping within the word limit',
      'Write the summary in a different language to demonstrate comprehension',
    ],
    answer: 'Express the main ideas in your own words, keeping within the word limit',
    explanation: 'Copying from the text is penalised. A summary must paraphrase main ideas concisely within the given word limit.',
  },
  {
    prompt: 'How many points are typically required in a CAPS Grade 11 summary task?',
    options: ['Always exactly five points, whatever the question says', 'As many as you can, since there is no limit', 'It is set in the question; follow the instruction (e.g. "7 points")', 'A minimum of ten and a maximum of fifteen points'],
    answer: 'It is set in the question; follow the instruction (e.g. "7 points")',
    explanation: 'The question tells you exactly how many points are required. Including too few loses marks; you receive marks per valid point identified.',
  },
  {
    prompt: 'What does "own words" mean in a summary instruction?',
    options: ['Invent new facts that are not in the passage', 'Rewrite the text with synonyms and new structures, not copy it', 'Write the summary in your home language', 'Use only words that are found in a dictionary'],
    answer: 'Rewrite the text with synonyms and new structures, not copy it',
    explanation: 'Paraphrasing means expressing the same idea using different vocabulary and sentence construction — not lifting words directly from the text.',
  },
  {
    prompt: 'What should you NOT include in a summary?',
    options: [
      'Main ideas stated in the passage',
      'Direct quotations and supporting examples from the original text',
      'Paraphrases of the topic sentences',
      'The key facts needed to address the summary task',
    ],
    answer: 'Direct quotations and supporting examples from the original text',
    explanation: 'Quotations and examples are supporting detail, not main ideas. A summary strips these away to reveal the core information.',
  },
  {
    prompt: 'What does "paraphrase" mean?',
    options: [
      'To restate something in your own words while preserving the meaning',
      'To quote someone directly with their exact words',
      'To translate a text into another language',
      'To write a shorter version with added personal opinions',
    ],
    answer: 'To restate something in your own words while preserving the meaning',
    explanation: 'Paraphrasing keeps the meaning but changes the vocabulary and structure, demonstrating genuine understanding.',
  },
  {
    prompt: 'Why must you stick to the word limit in a CAPS summary?',
    options: [
      'Word limits are merely suggestions — exceeding them is encouraged',
      'The examiner stops reading at the word limit, and marks may be deducted for excess words',
      'Longer summaries always receive higher marks',
      'Word limits only apply to informal writing tasks',
    ],
    answer: 'The examiner stops reading at the word limit, and marks may be deducted for excess words',
    explanation: 'The word limit tests your ability to be concise. Exceeding it suggests you cannot distinguish main ideas from supporting detail.',
  },
  {
    prompt: 'What is a topic sentence?',
    options: ['The last sentence in a paragraph', "The sentence that states the paragraph's main idea, often first", 'Any sentence that has a verb in it', 'A sentence that always starts with "In conclusion"'],
    answer: "The sentence that states the paragraph's main idea, often first",
    explanation: 'In summary tasks, the topic sentence is often the most important sentence because it states the key point of the paragraph.',
  },
  {
    prompt: 'What is the difference between summarising and paraphrasing?',
    options: ['The two are exactly the same process', 'Summarising condenses a text; paraphrasing restates a passage in other words', 'Paraphrasing always makes the text longer', 'Summarising uses quotation marks and paraphrasing does not'],
    answer: 'Summarising condenses a text; paraphrasing restates a passage in other words',
    explanation: 'You may paraphrase a single sentence (same length, different words). A summary always significantly reduces the length by omitting detail.',
  },
  {
    prompt: 'How do you identify main ideas in a passage?',
    options: ['Look for the longest sentences in each paragraph', 'Look for topic sentences and ideas developed through a paragraph', 'Pick any sentences that have numbers or statistics', 'Choose the sentences with the hardest vocabulary'],
    answer: 'Look for topic sentences and ideas developed through a paragraph',
    explanation: 'Main ideas are developed and supported within the paragraph. A single passing mention is usually supporting detail.',
  },
  {
    prompt: 'What format must a CAPS summary be written in?',
    options: [
      'Bullet points for clarity',
      'A numbered list matching the question number',
      'Continuous flowing prose in paragraph form',
      'A table comparing the main ideas',
    ],
    answer: 'Continuous flowing prose in paragraph form',
    explanation: 'CAPS explicitly requires summaries to be written in continuous prose — not as bullet points or numbered lists.',
  },
];

const SummaryWritingTechnique = () => (
  <CapsSubjectTopic
    title="Summary Writing Technique"
    subtitle="Identifying main ideas, paraphrasing and writing within a word limit"
    learnSteps={learnSteps}
    task="gr11-summary-writing-technique-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default SummaryWritingTechnique;
