import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Hub } from '../../../../../components/diagrams/english/WritingPictures';
import { HUB_SKILLS, SUMMARY_BAD, SUMMARY_GOOD, SUMMARY_SOURCE, wordCount } from '../../../../../components/diagrams/english/writing';

// Word counts shown in the summary slide come from wordCount (writing.test.ts).
const srcWords = wordCount(SUMMARY_SOURCE);
const goodWords = wordCount(SUMMARY_GOOD);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'One paper, many skills',
    content: slide(
      <>
        <Rule>Consolidation means applying several English skills together. An integrated paper switches between skills in one assessment.</Rule>
        <Hub centre="Paper question" spokes={HUB_SKILLS} aria="Four boxes joined to a centre circle: Comprehension, Literature, Grammar and Summary all feed one paper question." />
        <Worked
          title="One short text, four jobs"
          steps={[
            <>Comprehension: find and explain what the text says.</>,
            <>Literature: interpret ideas such as theme, using the text.</>,
            <>Grammar: check tense, punctuation and sentence control.</>,
            <>Summary: give the key points briefly.</>,
          ]}
        />
        <Mistake>Studying one skill alone and expecting to cope. Integrated questions need you to switch quickly.</Mistake>
      </>,
    ),
  },
  {
    title: 'Support every answer with evidence',
    content: slide(
      <>
        <Rule>Evidence is a detail from the text that supports your interpretation. It shows your answer is grounded in the text.</Rule>
        <Worked
          title="Text: “Sipho checked his pencil case three times before he left for the exam.” How does he feel?"
          steps={[
            <>Interpret: he is nervous.</>,
            <>Find the detail: “checked his pencil case three times”.</>,
            <>Join them: <strong>He feels nervous, because he “checked his pencil case three times”.</strong></>,
          ]}
        />
        <Mistake>Giving an opinion with no proof, or copying a whole paragraph. Pick the short detail that fits the question.</Mistake>
      </>,
    ),
  },
  {
    title: 'Literature response: theme with support',
    content: slide(
      <>
        <Rule>Theme is the big idea behind a text. Explain it in your own words and support it with details from the text. Do not simply retell the plot.</Rule>
        <Worked
          title="Invented story: Thandi shares her lunch with a new learner who has none. The next day he helps her with maths."
          steps={[
            <>Theme: kindness comes back to the giver.</>,
            <>Support: she shared her lunch, and the next day he helped her with maths.</>,
            <>Answer: <strong>The theme is that kindness is returned, because Thandi shared her lunch and he later helped her.</strong></>,
          ]}
        />
        <Mistake>Retelling the whole story and calling it the theme. A theme is an idea, such as kindness, not a list of events.</Mistake>
      </>,
    ),
  },
  {
    title: 'Summaries: key ideas, briefly',
    content: slide(
      <>
        <Rule>A strong summary presents the key ideas briefly and clearly. Leave out minor detail, copying and your own opinions.</Rule>
        <Worked
          title={`Source (${srcWords} words): “${SUMMARY_SOURCE}”`}
          steps={[
            <>Key ideas: water shortages, and the community saving measures proposed.</>,
            <>Drop the minor details, such as how the council cut supply at night.</>,
            <>Summary ({goodWords} words): <strong>{SUMMARY_GOOD}</strong></>,
          ]}
        />
        <Mistake>
          Padding with empty words: “{SUMMARY_BAD}” It is long, says nothing about the content and adds opinion.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Grammar check: keep the tense consistent',
    content: slide(
      <>
        <Rule>Clear language improves every answer. A key check is tense consistency: do not slide between past and present without a reason.</Rule>
        <Worked
          title="Fix: “Lerato walked to the shop and buys bread.”"
          steps={[
            <>“Walked” is past tense, so the whole sentence is about the past.</>,
            <>“Buys” is present tense, so it does not match.</>,
            <>Corrected: <strong>Lerato walked to the shop and bought bread.</strong></>,
          ]}
        />
        <Mistake>Thinking grammar only matters in oral work. Errors blur your meaning in comprehension, literature and summary answers too.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is the main aim of language and literature consolidation?" answer="To apply multiple English skills together." />
        <Check question="Why do comprehension answers use evidence?" answer="To support your interpretation with details from the text." />
        <Check question="Which grammar check matters across sentences?" answer="Tense consistency." />
        <Check question="What does a strong summary do?" answer="It presents the key ideas briefly and clearly, without copying or opinion." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main aim of language and literature consolidation?',
    options: ['to apply multiple English skills together', 'to study punctuation alone', 'to avoid comprehension practice', 'to replace all writing tasks'],
    answer: 'to apply multiple English skills together',
    explanation: 'Consolidation integrates reading, writing, language and literature response.',
  },
  {
    prompt: 'A strong summary should...',
    options: ['present key ideas briefly and clearly', 'copy the source text in full', 'add unrelated opinions', 'focus only on minor details'],
    answer: 'present key ideas briefly and clearly',
    explanation: 'Summaries are concise and selective.',
  },
  {
    prompt: 'In comprehension responses, evidence is used to...',
    options: ['support interpretation with text details', 'replace reading completely', 'avoid answering the question', 'increase word count without meaning'],
    answer: 'support interpretation with text details',
    explanation: 'Evidence shows that answers are grounded in the text.',
  },
  {
    prompt: 'Which grammar check is important during consolidation?',
    options: ['tense consistency across sentences', 'changing every noun to an adjective', 'removing all conjunctions', 'using one punctuation mark only'],
    answer: 'tense consistency across sentences',
    explanation: 'Consistent tense keeps meaning clear and accurate.',
  },
  {
    prompt: 'Integrated paper-style questions usually require...',
    options: ['switching between skills in one assessment', 'one-skill tasks only', 'no interpretation of text', 'memorised responses without context'],
    answer: 'switching between skills in one assessment',
    explanation: 'Integrated tasks assess flexible use of knowledge.',
  },
  {
    prompt: 'Literature response questions often ask learners to...',
    options: ['explain ideas such as theme using textual support', 'count the punctuation marks in a passage only', 'rewrite the title page of the book', "identify the publisher's logos only"],
    answer: 'explain ideas such as theme using textual support',
    explanation: 'Literature responses require interpretation and evidence.',
  },
  {
    prompt: 'Which sentence best reflects concise summary style?',
    options: ['The report highlights water shortages and proposes community saving measures.', 'The report is extremely interesting and very amazing and incredibly important for everyone always.', 'The report has many words and a title and many paragraphs and many things.', 'The report reminds me of my weekend and favourite snacks.'],
    answer: 'The report highlights water shortages and proposes community saving measures.',
    explanation: 'The sentence captures key content without unnecessary detail.',
  },
  {
    prompt: 'Why revisit grammar during literature and comprehension revision?',
    options: ['clear language improves quality of all answers', 'grammar is only needed in oral work', 'grammar has no effect on meaning', 'grammar replaces interpretation'],
    answer: 'clear language improves quality of all answers',
    explanation: 'Accurate language helps express understanding effectively.',
  },
];

const LanguageLiteratureConsolidation = () => (
  <CapsSubjectTopic
    title="Language and Literature Consolidation"
    subtitle="Integrated comprehension, literature response, summary and grammar revision"
    learnSteps={learnSteps}
    task="gr8-language-literature-consolidation-t4"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LanguageLiteratureConsolidation;
