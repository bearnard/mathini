import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ParagraphParts } from '../../../../../components/diagrams/english/EnglishPictures';

export const learnSteps: LearnStep[] = [
  {
    title: 'Register: the right voice for the reader',
    content: (
      <div className="space-y-4">
        <Rule>Register is the choice of words, style and grammar that suits the situation. Official documents use a formal register; a note to a friend uses an informal one.</Rule>
        <Worked
          title="Move a message from informal to formal"
          steps={[
            <>Informal, to a friend: <em>Hi Sipho, can u send me the form asap? Thx!</em></>,
            <>Name the reader and the purpose: a school secretary, a request for a form.</>,
            <>Remove abbreviations and text-speak: &ldquo;u&rdquo;, &ldquo;asap&rdquo; and &ldquo;thx&rdquo; become full words.</>,
            <>Formal: <em>Dear Mr Dlamini, Could you please send me the application form as soon as possible? Thank you for your help.</em></>,
            <>Another formal request: <em>Please confirm the date of the meeting at your convenience.</em></>,
          ]}
        />
        <Mistake>Formal does not mean long and difficult. Using more words than you need (verbosity) makes writing worse. Keep formal writing clear, direct and polite. Slang such as &ldquo;cool&rdquo; belongs in informal speech; a colloquialism is everyday language that is accepted in conversation but is still not used in formal writing.</Mistake>
      </div>
    ),
  },
  {
    title: 'Word choice: meaning and feeling',
    content: (
      <div className="space-y-4">
        <Rule>A word has a literal meaning (denotation) and the feelings that gather around it (connotation). Choose the word whose feeling fits your purpose.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-slate-700"><strong>slim</strong><br />thin, with a positive feeling: healthy, graceful.</div>
          <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700"><strong>thin</strong><br />the plain, neutral word.</div>
          <div className="rounded-xl bg-rose-50 p-4 text-sm text-slate-700"><strong>skinny</strong><br />thin, with a negative feeling: too thin, unhealthy.</div>
        </div>
        <Worked
          title="Choose the word"
          steps={[
            <>A shop calls its jeans &ldquo;affordable&rdquo;. Another writer, annoyed, calls the same jeans &ldquo;cheap&rdquo;.</>,
            <>Both words mean &ldquo;low in price&rdquo; (denotation), but &ldquo;cheap&rdquo; suggests poor quality (connotation).</>,
            <>Choose &ldquo;affordable&rdquo; for an advert and &ldquo;cheap&rdquo; when you want to criticise.</>,
          ]}
        />
        <Mistake>Synonyms are not always interchangeable. Words with nearly the same meaning can carry very different feelings, so check the connotation before you swap one for another.</Mistake>
      </div>
    ),
  },
  {
    title: 'Sentence construction',
    content: (
      <div className="space-y-4">
        <Rule>A clause has its own verb. A main clause can stand alone; a subordinate clause cannot, and begins with a conjunction (when, because, although) or a relative pronoun (who, which).</Rule>
        <Worked
          title="Build three kinds of sentence"
          steps={[
            <>Simple, one clause: <em>Sipho studied hard.</em></>,
            <>Compound, two main clauses joined by <em>and</em>, <em>but</em> or <em>so</em>: <em>Sipho studied hard, but he was nervous.</em></>,
            <>Complex, a main and a subordinate clause: <em>Although Sipho studied hard, he was nervous.</em> The words &ldquo;Although Sipho studied hard&rdquo; cannot stand alone. More subordinate clauses: <em>because the taxi was late</em>; <em>when the bell rang</em>.</>,
            <>A phrase has no complete verb: in <em>The man wearing a red shirt ran away</em>, &ldquo;wearing a red shirt&rdquo; is a phrase, while in <em>The man who was wearing a red shirt ran away</em> &ldquo;who was wearing a red shirt&rdquo; is a clause.</>,
          ]}
        />
        <Mistake>A comma cannot join two main clauses. <em>It was late, we went home.</em> is a comma splice. Use a full stop, a conjunction (<em>It was late, so we went home.</em>) or a semicolon (<em>It was late; we went home.</em>).</Mistake>
      </div>
    ),
  },
  {
    title: 'Paragraphs that hold together',
    content: (
      <div className="space-y-4">
        <Rule>A paragraph has one main idea. Start with a topic sentence, support it, then link to the next idea.</Rule>
        <ParagraphParts />
        <p className="text-left text-slate-700">Linking words show how sentences relate. They give the text cohesion:</p>
        <ul className="grid gap-1.5 text-left text-sm text-slate-700 md:grid-cols-2">
          <li className="rounded-lg bg-slate-50 p-2"><strong>Order:</strong> first, next, afterwards, finally</li>
          <li className="rounded-lg bg-slate-50 p-2"><strong>Cause and effect:</strong> because, therefore, as a result</li>
          <li className="rounded-lg bg-slate-50 p-2"><strong>Contrast:</strong> however, but</li>
          <li className="rounded-lg bg-slate-50 p-2"><strong>Concluding:</strong> to conclude, in summary</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Punctuation and spelling',
    content: (
      <div className="space-y-4">
        <Rule>An apostrophe shows that letters are missing (<em>it&rsquo;s</em> = it is) or that something belongs to someone (<em>the learner&rsquo;s book</em>).</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>its / it&rsquo;s:</strong> <em>its</em> is possessive (the dog wagged its tail); <em>it&rsquo;s</em> means &ldquo;it is&rdquo; or &ldquo;it has&rdquo;.</li>
          <li><strong>One owner or many:</strong> <em>the learner&rsquo;s book</em> (one learner) and <em>the learners&rsquo; books</em> (several learners).</li>
          <li><strong>Colon:</strong> introduces a list or an explanation. <strong>Semicolon:</strong> joins two closely related main clauses.</li>
          <li><strong>Homophones</strong> sound the same but are spelt differently: there, their and they&rsquo;re.</li>
        </ul>
        <Worked
          title="Correct the sentence"
          steps={[
            <>Wrong: <em>Its a pity the learners dont know there marks.</em></>,
            <>&ldquo;Its&rdquo; means &ldquo;it is&rdquo;, so it needs an apostrophe: <em>It&rsquo;s</em>.</>,
            <>&ldquo;dont&rdquo; is a contraction of &ldquo;do not&rdquo;: <em>don&rsquo;t</em>.</>,
            <>&ldquo;there&rdquo; shows place; the marks belong to the learners, so use <em>their</em>.</>,
            <>Correct: <em>It&rsquo;s a pity the learners don&rsquo;t know their marks.</em></>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Which register would you use for a letter asking a principal for a school visit?</>,
          <>&ldquo;She was <em>slim</em>&rdquo; and &ldquo;She was <em>skinny</em>&rdquo; describe the same body. What is different?</>,
          <>Why is <em>The bell rang, the learners ran out.</em> a mistake, and how can you fix it?</>,
          <>Choose the correct form: <em>The (learners / learners&rsquo; / learner&rsquo;s)</em> bags were piled outside the hall.</>,
        ]}
        answers={[
          <>A formal register: polite, clear, no abbreviations or slang.</>,
          <>The connotation. &ldquo;Slim&rdquo; has a positive feeling; &ldquo;skinny&rdquo; has a negative one.</>,
          <>A comma splice: a comma cannot join two main clauses. Use a full stop, a conjunction such as &ldquo;and&rdquo;, or a semicolon.</>,
          <><em>learners&rsquo;</em>, because the bags belong to several learners.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What does "register" mean when you write or speak?',
    options: ['A list of the learners present in a class', 'The pattern of rhythm in the lines of a poem', 'The language style that suits the situation', 'The order in which events happen in a story'],
    answer: 'The language style that suits the situation',
    explanation: 'Register changes with context: a formal letter and a message to a friend are written in different registers.',
  },
  {
    prompt: 'Which sentence is written in a formal register?',
    options: ['Hey, tell me when the meeting is, okay? Cheers, thanks a lot!', 'Can u let me know the meeting date pls? I need it asap thx', 'Please confirm the date of the meeting at your convenience.', 'So when is that meeting thing again? Just let me know soon'],
    answer: 'Please confirm the date of the meeting at your convenience.',
    explanation: 'The formal version is polite and complete, with no abbreviations or slang. The other options use casual or text-message language.',
  },
  {
    prompt: 'What is the difference between a colloquialism and slang?',
    options: ['Colloquial words are rude and offensive, but slang is polite and respectful in tone', 'Colloquial words are accepted in conversation, but slang is not accepted formally', 'Colloquial words are found in poems, while slang is found in novels and plays', 'The two terms have the same meaning and teachers use them for any informal text'],
    answer: 'Colloquial words are accepted in conversation, but slang is not accepted formally',
    explanation: 'Both are informal, but a colloquialism is accepted in everyday talk, while slang (such as teen terms) has not yet been accepted in formal conversation.',
  },
  {
    prompt: 'A word has a neutral literal meaning and also carries feelings and associations for the reader. What are these feelings and associations called?',
    options: ['Denotation', 'Synonym', 'Connotation', 'Personification'],
    answer: 'Connotation',
    explanation: 'Denotation is the literal meaning. Connotation is the positive or negative association a word collects through use.',
  },
  {
    prompt: 'A writer wants to praise a school\'s new fees as reasonable. Which word choice best suits that purpose?',
    options: ['cheap', 'stingy', 'affordable', 'bargain-basement'],
    answer: 'affordable',
    explanation: '"Affordable" suggests value without poor quality. "Cheap" and "stingy" carry negative connotations of poor quality or meanness.',
  },
  {
    prompt: 'Which of the following is a subordinate clause?',
    options: ['The taxi arrived very late', 'the slow taxi at the rank', 'because the taxi was late', 'the taxi driver of that rank'],
    answer: 'because the taxi was late',
    explanation: 'A subordinate clause has its own verb but starts with a conjunction, as in "because the taxi was late", so it cannot stand alone. "The taxi arrived very late" could stand alone.',
  },
  {
    prompt: 'How does a phrase differ from a clause?',
    options: ['A phrase is longer than a clause; a clause is shorter', 'A phrase begins with a conjunction; a clause does not', 'A phrase can stand alone as a sentence; a clause cannot', 'A phrase has no complete verb; a clause has its own'],
    answer: 'A phrase has no complete verb; a clause has its own',
    explanation: 'In "The man wearing a red shirt ran away", "wearing a red shirt" is a phrase because its verb is only a participle. "Who was wearing a red shirt" would be a clause.',
  },
  {
    prompt: 'Which is the best correction of "Thandi was tired, she went to bed early."?',
    options: ['Thandi was tired she went to bed early after supper.', 'Thandi, was tired, she went to bed early.', 'Thandi was tired; so, she went to bed early.', 'Thandi was tired, so she went to bed early.'],
    answer: 'Thandi was tired, so she went to bed early.',
    explanation: 'The original is a comma splice. A comma plus a conjunction such as "so" correctly joins the two main clauses.',
  },
  {
    prompt: 'Which linking word shows a result?',
    options: ['however', 'as a result', 'for example', 'meanwhile'],
    answer: 'as a result',
    explanation: '"As a result" introduces a consequence. "However" shows contrast, "for example" introduces an illustration and "meanwhile" shows time.',
  },
  {
    prompt: 'What is the job of the topic sentence in a paragraph?',
    options: ['To end the essay with a summary', 'To list every point in the whole essay', 'To name the main idea of the paragraph', 'To repeat the heading of the essay word for word'],
    answer: 'To name the main idea of the paragraph',
    explanation: 'The topic sentence names the paragraph\'s one main idea; the next sentences give proof and examples.',
  },
  {
    prompt: 'Which sentence uses the apostrophe correctly?',
    options: ['It\'s time to hand in the learners\' books.', 'Its time to hand in the learner\'s\' books.', 'It\'s time to hand in the learners book\'s.', 'Its\' time to hand in the learners books.'],
    answer: 'It\'s time to hand in the learners\' books.',
    explanation: '"It\'s" is a contraction of "it is", and "learners\'" shows that the books belong to several learners.',
  },
  {
    prompt: 'What does a semicolon usually join?',
    options: ['Two words that mean the same thing', 'Two quotations from different texts', 'Two names in a list of authors', 'Two closely related main clauses'],
    answer: 'Two closely related main clauses',
    explanation: 'A semicolon links main clauses that belong together, such as "It was late; we went home." It is stronger than a comma and lighter than a full stop.',
  },
  {
    prompt: 'Which word completes the sentence correctly: "The learners packed ___ bags and left."?',
    options: ['there', 'their', 'they\'re', 'thair'],
    answer: 'their',
    explanation: '"Their" shows that the bags belong to the learners. "There" shows place and "they\'re" means "they are". These words are homophones.',
  },
];
