import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { SummaryShrink } from '../../../../../components/diagrams/english/EnglishPictures';
import { CAPS_G10, wordCount } from '../../_shared/capsFacts';

/** Original passages written for this lesson. */
export const VAN_PASSAGE =
  'Every Tuesday, the blue library van rolls into Sibongile\'s village and parks under the jacaranda tree. Children pour out of the school gate before the engine has even stopped. Mrs Zulu, the librarian, opens the sliding door and the smell of paper drifts out. "One book each, and bring it back in two weeks," she says, smiling at the line. For many of these children, the van is the only library they will ever see. Last month, a boy named Vusi borrowed a book about aeroplanes. He read it so often that its corners went soft, and now he draws wings on everything, even his hands.';

export const READ_ALOUD_PASSAGE =
  'Reading aloud to children is one of the best gifts a family can give. First, it builds vocabulary, because children hear words they would not meet in everyday talk. For instance, a story about a farm may teach the word "harvest". Second, it develops concentration: a child who listens to a whole chapter learns to sit quietly and follow events. Third, it brings families closer. A parent who reads at bedtime shares a calm moment, and many children remember those evenings for the rest of their lives. Finally, children who are read to usually learn to read earlier and with more confidence, since they already love stories before they meet the alphabet.';

export const READ_ALOUD_SUMMARY =
  'Reading aloud to children builds their vocabulary and concentration, brings families closer, and helps them learn to read earlier and with more confidence.';

export const learnSteps: LearnStep[] = [
  {
    title: 'Paper 1 at a glance',
    content: (
      <div className="space-y-4">
        <Rule>Paper 1 is {CAPS_G10.paper1Marks} marks in two hours: comprehension ({CAPS_G10.comprehensionMarks}), summary ({CAPS_G10.summaryMarks}) and language structures and conventions ({CAPS_G10.languageMarks}).</Rule>
        <ul className="space-y-1.5 text-left text-sm text-slate-700">
          <li><strong>State, identify, name:</strong> a short, exact answer.</li>
          <li><strong>Quote:</strong> copy the exact words from the text, and only those.</li>
          <li><strong>In your own words:</strong> restate the idea. Copying earns nothing.</li>
          <li><strong>Explain, why:</strong> give the reason or the effect, one point for each mark.</li>
          <li><strong>Infer:</strong> read feelings from actions. &ldquo;She shrugged and said nothing&rdquo; suggests indifference.</li>
        </ul>
        <Worked
          title="Plan the two hours"
          steps={[
            <>Comprehension: 50 minutes. Summary: 20 minutes. Language: 40 minutes. Checking: 10 minutes.</>,
            <>That is about 1,7 minutes for each mark. Ten marks of summary deserve about 17 minutes.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Comprehension: worked answers',
    content: (
      <div className="space-y-4">
        <Rule>Read the whole text once, then read each question and look for the lines it points to.</Rule>
        <blockquote className="rounded-xl border-l-4 border-slate-300 bg-slate-50 p-3 text-left text-sm italic text-slate-700">{VAN_PASSAGE}</blockquote>
        <Worked
          title="Questions, marks and model answers"
          steps={[
            <><strong>(1 mark)</strong> Where does the van park? <em>Under the jacaranda tree.</em> A short, exact answer.</>,
            <><strong>(2 marks)</strong> What does &ldquo;pour&rdquo; suggest about how the children come? <em>They come in large numbers, quickly and eagerly.</em> Two points for two marks.</>,
            <><strong>(2 marks)</strong> Why does Mrs Zulu ask for the book back in two weeks? <em>So that other children can borrow it, and every child gets a turn.</em></>,
            <><strong>(3 marks)</strong> What does &ldquo;the only library they will ever see&rdquo; show about the village? <em>It has no library of its own; books are scarce there; the van is very important to the children.</em></>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Summary: from passage to paragraph',
    content: (
      <div className="space-y-4">
        <Rule>Find the main points, drop the examples, and join the points in your own words.</Rule>
        <blockquote className="rounded-xl border-l-4 border-slate-300 bg-slate-50 p-3 text-left text-sm italic text-slate-700">{READ_ALOUD_PASSAGE}</blockquote>
        <SummaryShrink passage={wordCount(READ_ALOUD_PASSAGE)} summary={wordCount(READ_ALOUD_SUMMARY)} />
        <Worked
          title="Main points and the summary"
          steps={[
            <>Main points: it builds vocabulary; it develops concentration; it brings families closer; children learn to read earlier and with confidence.</>,
            <>Left out: the &ldquo;harvest&rdquo; example, and the bedtime detail.</>,
            <>Summary: <em>{READ_ALOUD_SUMMARY}</em></>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Language structures: quick fixes',
    content: (
      <div className="space-y-4">
        <Rule>Section C tests grammar and language in context. Learn the changes that happen when a sentence is rewritten.</Rule>
        <Worked
          title="Three common transformations"
          steps={[
            <><strong>Direct to indirect speech.</strong> <em>&ldquo;I will help you tomorrow,&rdquo; said Lerato.</em> Change the pronouns, the tense and the time word: <em>Lerato said that she would help me the next day.</em></>,
            <><strong>Active to passive.</strong> <em>The learners cleaned the hall.</em> The object becomes the subject: <em>The hall was cleaned by the learners.</em></>,
            <><strong>Concord.</strong> <em>Neither of the boys was ready.</em> &ldquo;Neither&rdquo; is singular, so the verb is <em>was</em>.</>,
            <><strong>Persuasion.</strong> The advert headline <em>Taste the summer!</em> uses emotive language about enjoyment, not facts.</>,
          ]}
        />
        <Mistake>In indirect speech, keep the meaning but change the viewpoint: &ldquo;I&rdquo; and &ldquo;you&rdquo; shift, &ldquo;will&rdquo; becomes &ldquo;would&rdquo; and &ldquo;tomorrow&rdquo; becomes &ldquo;the next day&rdquo;.</Mistake>
      </div>
    ),
  },
  {
    title: 'Where the marks are lost',
    content: (
      <div className="space-y-4">
        <Rule>Most lost marks are avoidable. Check these before you hand in.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>You answered a different question from the one asked: underline the command word.</li>
          <li>You copied a whole sentence for a one-mark &ldquo;identify&rdquo; question: give only the key words.</li>
          <li>You gave one point for a two-mark question.</li>
          <li>Your summary kept an example or went over the word limit.</li>
          <li>Your language answer changed the meaning of the sentence.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>(1 mark) What does &ldquo;quote&rdquo; ask you to do?</>,
          <>(2 marks) A question worth 2 marks asks &ldquo;Why?&rdquo;. How many points should you give?</>,
          <>(1 mark) Change to the passive: <em>The teacher marked the tests.</em></>,
          <>(1 mark) How many minutes should you spend on the 10-mark summary?</>,
        ]}
        answers={[
          <>Copy the exact words from the text, and only those.</>,
          <>Two points.</>,
          <><em>The tests were marked by the teacher.</em></>,
          <>About 20 minutes, as in the time plan (roughly 17 minutes by the marks).</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: '(1 mark) A comprehension question says "Quote the words that show she is nervous." What must the answer contain?',
    options: ['The learner\'s own explanation only', 'A summary of the whole passage', 'The exact words from the text', 'The page number of the text'],
    answer: 'The exact words from the text',
    explanation: 'A "quote" question wants the writer\'s exact words. An explanation can come only when the question also asks for one.',
  },
  {
    prompt: '(1 mark) What does a question mean when it says "Answer in your own words"?',
    options: ['Copy the sentence from the text', 'Write a longer answer than usual', 'Answer in a different language', 'Restate the idea, not copy it'],
    answer: 'Restate the idea, not copy it',
    explanation: '"In your own words" tests understanding, so a copied sentence earns no marks.',
  },
  {
    prompt: '(2 marks) Read: "Children pour out of the school gate before the engine has stopped." What does "pour" suggest about how they come?',
    options: ['Slowly, quietly and one at a time', 'Reluctantly, silently and in a line', 'Carefully, calmly and in pairs', 'Many at once, quickly and eagerly'],
    answer: 'Many at once, quickly and eagerly',
    explanation: '"Pour" is used of a flow of liquid, so the children seem like a stream: many, fast and keen.',
  },
  {
    prompt: '(2 marks) A learner gives only one point in answer to a "Why?" question worth 2 marks. What mark is this answer likely to earn?',
    options: ['Full marks, 2 out of 2', 'About 1 out of 2', 'No marks at all', '3 out of 2'],
    answer: 'About 1 out of 2',
    explanation: 'A two-mark "why" question usually needs two points. One good point earns about one mark.',
  },
  {
    prompt: '(1 mark) Read: "She shrugged and said nothing." Which feeling does this most clearly suggest?',
    options: ['Great excitement', 'Anger shown by shouting', 'Fear of the dark', 'Indifference'],
    answer: 'Indifference',
    explanation: 'A shrug and silence suggest that she does not care or has nothing to say. The feeling is inferred from the action.',
  },
  {
    prompt: '(1 mark) Which of these is a fact and not an opinion?',
    options: ['The library van is the best thing in the village.', 'Every child should love books.', 'The van is much too small.', 'The library van visits the village every Tuesday.'],
    answer: 'The library van visits the village every Tuesday.',
    explanation: 'A fact can be checked. "Best", "should" and "too small" are judgements.',
  },
  {
    prompt: '(1 mark) Which sentence belongs in a summary of a passage about the benefits of reading aloud to children?',
    options: ['A farm story may teach the word "harvest" to a child.', 'Many children remember bedtime stories for life.', 'For instance, one child heard a new word once.', 'Reading aloud builds vocabulary and concentration.'],
    answer: 'Reading aloud builds vocabulary and concentration.',
    explanation: 'A summary keeps main points. The other options are examples and detail that a summary leaves out.',
  },
  {
    prompt: '(1 mark) Which sentence is the correct indirect speech for: "I will help you tomorrow," said Lerato?',
    options: ['Lerato said that I would help you the next day.', 'Lerato said that she will help me tomorrow instead.', 'Lerato said that she would help me the next day.', 'Lerato says that she would help me the next day.'],
    answer: 'Lerato said that she would help me the next day.',
    explanation: 'In indirect speech the pronouns shift (I to she, you to me), "will" becomes "would" and "tomorrow" becomes "the next day".',
  },
  {
    prompt: '(1 mark) Which sentence is the passive form of "The learners cleaned the hall."?',
    options: ['The learners were cleaned by the hall.', 'The hall cleaned the learners.', 'The learners had been cleaning the hall.', 'The hall was cleaned by the learners.'],
    answer: 'The hall was cleaned by the learners.',
    explanation: 'In a passive sentence the object (the hall) becomes the subject and the verb takes a form of "to be" plus the past participle.',
  },
  {
    prompt: '(1 mark) Which sentence has correct concord (subject-verb agreement)?',
    options: ['Neither of the boys was ready.', 'Neither of the boys were ready.', 'Neither of the boys are ready.', 'Neither of the boys be ready.'],
    answer: 'Neither of the boys was ready.',
    explanation: '"Neither" is singular, so it takes a singular verb: "was".',
  },
  {
    prompt: '(2 marks) An advert headline says "Taste the summer!" Which technique does it use to persuade?',
    options: ['A table of facts and figures', 'A formal list of all the ingredients', 'A passive sentence with no feeling', 'Emotive language about enjoyment'],
    answer: 'Emotive language about enjoyment',
    explanation: 'The headline appeals to feelings of summer fun rather than giving facts. That is a typical persuasive technique.',
  },
  {
    prompt: '(1 mark) Paper 1 is 70 marks in 120 minutes. About how long should you spend on the 10-mark summary?',
    options: ['About 5 minutes', 'About 40 minutes', 'About 60 minutes', 'About 17 minutes'],
    answer: 'About 17 minutes',
    explanation: '120 minutes for 70 marks is about 1,7 minutes a mark, so 10 marks take roughly 17 minutes.',
  },
  {
    prompt: '(1 mark) A learner copies a whole sentence in answer to a one-mark "identify" question. What is the main problem?',
    options: ['It earns extra marks because of the length', 'It wastes time: a key word is enough', 'It proves that the learner understood it', 'It is the best way to avoid mistakes'],
    answer: 'It wastes time: a key word is enough',
    explanation: 'Identify questions want a short, exact answer. Extra words can contradict the answer and cost the mark.',
  },
];
