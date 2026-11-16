import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';

/** An original model transactional text (a formal letter of complaint). Only the BODY counts towards the 180 to 200 words. */
export const LETTER_PARAGRAPHS = [
  'I am writing to complain about the groceries delivered to my home on 10 March, and to ask for a refund.',
  'My order, number 4471, was placed online on 8 March. When the delivery arrived, three egg boxes were broken, a bottle of cooking oil had leaked over the bread, and the milk was already warm. The driver apologised, but he said that he could not replace anything.',
  'The goods were a large part of my weekly budget, so I had to buy replacements at a local shop that evening. I have kept the receipt and the photographs that I took of the damaged items, and I can send them to you on request.',
  'I phoned your helpline twice on 11 March. Both times I was told that a manager would call me back, but nobody has done so. This is poor service for a customer who has shopped with you for six years.',
  'I therefore ask you to refund R312,50 for the damaged goods, to explain how the delivery was packed, and to confirm in writing within seven days what steps you will take.',
  'I look forward to your reply.',
];

/** An original fifty-word story: compact writing, every word with a purpose. */
export const FIFTY_WORD_STORY =
  'Thandi sold her last orange just before dusk. The rank emptied. She counted the coins twice, then a third time, hoping the number would change. It did not. Tomorrow she would start earlier. She smiled, packed the empty crate, and walked slowly home, humming softly under a darkening purple sky.';

export const SCENARIOS: [scenario: string, text: string][] = [
  ['You want a shop to refund damaged goods.', 'A formal letter of complaint'],
  ['You tell a cousin about your holiday.', 'A friendly letter'],
  ['You apply for a holiday job.', 'A CV with a covering letter'],
  ['A school committee records what it decided.', 'Minutes of the meeting'],
  ['You give your opinion on a new film.', 'A review'],
  ['You report a flooded classroom to the principal.', 'A report'],
  ['You thank a visiting guest in front of the school.', 'A speech (vote of thanks)'],
  ['You write about a town event for the local paper.', 'A newspaper article'],
];

export const learnSteps: LearnStep[] = [
  {
    title: 'Which text does the job?',
    content: (
      <div className="space-y-4">
        <Rule>Choose the format from the purpose and the reader. The right format earns the &ldquo;format&rdquo; marks before you write a word.</Rule>
        <ul className="space-y-1.5 text-left text-sm text-slate-700">
          {SCENARIOS.map(([s, t]) => (
            <li key={s} className="flex flex-col gap-0.5 rounded-lg bg-slate-50 px-3 py-2 sm:flex-row sm:justify-between"><span>{s}</span><strong className="text-indigo-700">{t}</strong></li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: 'Register, person and tense',
    content: (
      <div className="space-y-4">
        <Rule>Each text has a register, and often a person and a tense. Match all three to the text.</Rule>
        <ul className="space-y-1.5 text-left text-sm text-slate-700">
          <li><strong>Formal letter:</strong> formal register, first person (&ldquo;I am writing&rdquo;), clear and brief.</li>
          <li><strong>Friendly letter:</strong> informal or semi-formal, lively and simple.</li>
          <li><strong>Report:</strong> formal and impersonal, third person, usually the present tense.</li>
          <li><strong>Minutes:</strong> formal, past tense, a summary of what was proposed and agreed.</li>
          <li><strong>Newspaper article:</strong> facts first, brief and accurate, without slanting the truth.</li>
          <li><strong>Magazine article:</strong> personal and lively, speaking to the reader.</li>
        </ul>
        <Mistake>Switching register inside one text (a formal letter that suddenly says &ldquo;you guys&rdquo;) shows the marker you have lost control of the register.</Mistake>
      </div>
    ),
  },
  {
    title: 'A model: the formal letter of complaint',
    content: (
      <div className="space-y-4">
        <Rule>A strong transactional text gives all the content the task needs, in the right format, in the right register, within the word limit.</Rule>
        <div className="rounded-xl border border-slate-300 bg-white p-4 text-left text-sm leading-6 text-slate-800">
          <p className="text-slate-600">14 Marula Street, Soweto &middot; 12 March 2026</p>
          <p className="mt-1 text-slate-600">The Manager, Fresh Foods Supermarket, Vilakazi Street, Soweto</p>
          <p className="mt-2">Dear Sir or Madam</p>
          <p className="font-bold">COMPLAINT: DAMAGED GROCERIES DELIVERED ON 10 MARCH</p>
          {LETTER_PARAGRAPHS.map((p) => <p key={p} className="mt-2">{p}</p>)}
          <p className="mt-2">Yours faithfully</p>
          <p>Dlamini, N.</p>
        </div>
        <Worked
          title="Read it like a marker"
          steps={[
            <><strong>Content:</strong> what happened, when, the evidence and exactly what the writer wants, put as a clear request (a refund, an explanation, a reply in seven days).</>,
            <><strong>Format:</strong> address and date, the reader&rsquo;s address, salutation, a subject line, a formal closing and surname and initials.</>,
            <><strong>Language:</strong> formal, polite and firm. No slang, no shouting.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Imaginative writing: say more with less',
    content: (
      <div className="space-y-4">
        <Rule>Imaginative writing, whether narrative or descriptive, works by showing. Choose a few exact details and let the reader work out the feeling.</Rule>
        <div className="rounded-xl bg-amber-50 p-4 text-left text-slate-800">
          <p className="text-xs font-bold uppercase tracking-wide text-amber-700">An original fifty-word story</p>
          <p className="mt-1 leading-7">{FIFTY_WORD_STORY}</p>
        </div>
        <Worked
          title="What makes it work"
          steps={[
            <>The story never says &ldquo;Thandi was disappointed&rdquo;. It shows her counting the coins three times.</>,
            <>The ending looks ahead: &ldquo;Tomorrow she would start earlier&rdquo; shows determination.</>,
            <>Every word has a purpose: there is no filler, so the story is compact.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Plan, count and edit',
    content: (
      <div className="space-y-4">
        <Rule>Before you write: reader, purpose, format, points, register. After you write: count, then edit.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Planning in five questions:</strong> Who is the reader? What is the purpose? Which format? Which points? Which register?</li>
          <li><strong>Count:</strong> a transactional text is 180 to 200 words of content. Far too short or too long loses marks.</li>
          <li><strong>Edit:</strong> check format features, register, tense, spelling and punctuation. Read it as the person who will receive it.</li>
        </ul>
        <Mistake>Padding a text with greetings and long introductions to reach the word count wastes marks. Use the words on content the reader needs.</Mistake>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Which text records what a committee proposed and agreed?</>,
          <>In which person and tense is a report usually written?</>,
          <>How many words should a transactional text have?</>,
          <>Why does the fifty-word story not say &ldquo;Thandi was disappointed&rdquo;?</>,
        ]}
        answers={[
          <>The minutes of the meeting.</>,
          <>The third person, usually in the present tense.</>,
          <>180 to 200 words.</>,
          <>It shows her feeling through her actions, which is more effective than stating it.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'You want to ask a shop for a refund because your parcel arrived damaged. Which text should you write?',
    options: ['A formal letter of complaint', 'A friendly letter to a cousin', 'A magazine article for teens', 'A set of minutes of a meeting'],
    answer: 'A formal letter of complaint',
    explanation: 'A complaint to a business is a formal letter of complaint with a clear request. A friendly letter or magazine article does not fit the purpose.',
  },
  {
    prompt: 'A school committee wants a record of what it decided at its meeting. Which text is needed?',
    options: ['An agenda', 'A review', 'Minutes', 'A friendly letter'],
    answer: 'Minutes',
    explanation: 'Minutes record what happened and was decided. An agenda is written beforehand to list the items to be discussed.',
  },
  {
    prompt: 'You must give your honest opinion of a new film for the school newsletter. Which text is the best choice?',
    options: ['A report', 'A CV', 'A review', 'An obituary'],
    answer: 'A review',
    explanation: 'A review records an individual\'s response to a film, book or event. A report gives exact feedback on a situation.',
  },
  {
    prompt: 'In which register is a formal letter of complaint written?',
    options: ['An informal register full of slang', 'A formal, polite and firm register', 'A poetic register full of images', 'A spoken register with filler words'],
    answer: 'A formal, polite and firm register',
    explanation: 'A complaint should be polite, clear and firm. Slang and shouting weaken it.',
  },
  {
    prompt: 'In which person and tense is a formal report usually written?',
    options: ['Third person, present tense', 'First person, past tense', 'Second person, future tense', 'First person, present tense with slang'],
    answer: 'Third person, present tense',
    explanation: 'Reports use formal, impersonal language in the third person, normally in the present tense.',
  },
  {
    prompt: 'Which tense should the minutes of a meeting use?',
    options: ['The future tense', 'The past tense', 'The present tense', 'The conditional tense'],
    answer: 'The past tense',
    explanation: 'Minutes record what has happened at a meeting that is over.',
  },
  {
    prompt: 'Which part of a complaint letter tells the reader what the writer wants done?',
    options: ['The writer\'s postal address', 'The formal closing words', 'The date of the letter', 'A clear request'],
    answer: 'A clear request',
    explanation: 'The purpose of a complaint is an action. The request should be specific, so the reader knows what to do.',
  },
  {
    prompt: 'What is the purpose of the subject line in a formal letter?',
    options: ['To show what the letter is about', 'To thank the reader for their time', 'To list the writer\'s qualifications', 'To end the letter in a polite way'],
    answer: 'To show what the letter is about',
    explanation: 'A subject line sits under the salutation and names the topic, so the reader understands the purpose at once.',
  },
  {
    prompt: 'A Grade 10 transactional text should be 180 to 200 words. A learner writes 90 words. What is the likely result?',
    options: ['Full marks, because short texts are better', 'Extra marks for being fast', 'No effect on the marks', 'Marks are lost: the content is too thin'],
    answer: 'Marks are lost: the content is too thin',
    explanation: 'A text far below the length cannot cover the content the task requires, so content and planning marks are lost.',
  },
  {
    prompt: 'What does "show, don\'t tell" mean in imaginative writing?',
    options: ['Add pictures to every paragraph', 'Tell the reader the moral at the start', 'Use dialogue and leave out description', 'Let actions and details show feelings'],
    answer: 'Let actions and details show feelings',
    explanation: 'Showing a character counting coins three times conveys disappointment more powerfully than writing "she was disappointed".',
  },
  {
    prompt: 'Why is a fifty-word story a useful writing exercise?',
    options: ['It proves that every story must be short', 'It replaces the need to write an essay', 'It teaches you to cut useless words', 'It allows the writer to skip planning'],
    answer: 'It teaches you to cut useless words',
    explanation: 'In a very short story every word must work, so the writer learns to cut anything that does not add to the story.',
  },
  {
    prompt: 'Before writing a transactional text, a learner asks "Who is the reader?" and "What is the purpose?" What are these questions part of?',
    options: ['Proofreading', 'Planning', 'Presenting', 'Counting words'],
    answer: 'Planning',
    explanation: 'Good planning begins with the reader and the purpose, and then the format, points and register.',
  },
  {
    prompt: 'A learner writes a formal letter and ends it with "See you, bro!" What is the main problem?',
    options: ['The tense is not correct', 'The register does not fit', 'The letter is too long', 'The date has been left out'],
    answer: 'The register does not fit',
    explanation: 'A formal letter needs a formal closing. "See you, bro!" is an informal phrase that does not fit the register.',
  },
];
