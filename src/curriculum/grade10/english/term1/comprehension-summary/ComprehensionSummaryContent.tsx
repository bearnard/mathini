import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { SummaryShrink } from '../../../../../components/diagrams/english/EnglishPictures';
import { wordCount } from '../../_shared/capsFacts';

/** Original passages written for this lesson (not taken from any exam or set work). */
export const SHOP_PASSAGE =
  'Every morning, before the sun clears the hills, Mr Radebe opens his small spaza shop in Mamelodi. He sweeps the step, stacks the bread and puts a handwritten sign in the window: Fresh Vetkoek, R6. Some neighbours say the shop is too small to survive now that a large supermarket has opened down the road. Mr Radebe only shrugs. "Supermarkets sell food," he says. "I sell it and I also know whose child is sick."';

export const GARDEN_PASSAGE =
  'More and more schools are starting vegetable gardens. A garden gives learners fresh food, and for children who sometimes go hungry that matters a great deal. For example, one school harvested enough spinach last winter to add to every lunch for a month. Gardens also teach practical skills, such as how to plant, water and compost. Teachers say that learners work together and learn patience, because plants take time to grow. In addition, a garden is cheap to run, because seeds cost little and the learners provide the labour. Some schools even sell the extra vegetables to raise money for books.';

export const GARDEN_SUMMARY =
  'School vegetable gardens give learners fresh food, teach practical skills and teamwork, cost little to run and can raise money for books when extra vegetables are sold.';

export const learnSteps: LearnStep[] = [
  {
    title: 'Reading for comprehension',
    content: (
      <div className="space-y-4">
        <Rule>Read with a purpose. Skim to get the overview, scan to find one detail, and reread what is hard.</Rule>
        <ul className="grid gap-2 text-left text-sm text-slate-700 md:grid-cols-2">
          <li className="rounded-xl bg-slate-50 p-3"><strong>Skim:</strong> skimming is reading quickly to get the overview, for example the headings and first lines.</li>
          <li className="rounded-xl bg-slate-50 p-3"><strong>Scan:</strong> scanning is running your eyes over the text to find a specific detail, such as a name or a number.</li>
          <li className="rounded-xl bg-slate-50 p-3"><strong>Context clues:</strong> work out an unknown word from the words around it.</li>
          <li className="rounded-xl bg-slate-50 p-3"><strong>Infer:</strong> pick up what is meant but not stated, using clues in the text.</li>
        </ul>
        <p className="text-left text-sm text-slate-600">In Paper 1, Section A is a comprehension of 30 marks on a text of 500 to 600 words, and may include visual or graphic texts.</p>
      </div>
    ),
  },
  {
    title: 'Three kinds of question',
    content: (
      <div className="space-y-4">
        <Rule>Some answers are stated in the text (explicit). Others are suggested (implicit): you must infer them from clues. If a girl checks the sky, packs an umbrella and puts on boots, you infer that she expects rain.</Rule>
        <blockquote className="rounded-xl border-l-4 border-slate-300 bg-slate-50 p-3 text-left text-sm italic text-slate-700">{SHOP_PASSAGE}</blockquote>
        <Worked
          title="Answer three questions"
          steps={[
            <><strong>Literal:</strong> What does the sign in the window say? Scan for &ldquo;sign&rdquo;: <em>Fresh Vetkoek, R6.</em></>,
            <><strong>Inference:</strong> Why does the shop survive? He says he &ldquo;knows whose child is sick&rdquo;: he knows his customers personally, which a large supermarket cannot offer.</>,
            <><strong>Word in context:</strong> What does &ldquo;shrugs&rdquo; suggest? He lifts his shoulders and answers calmly: he is not worried.</>,
          ]}
        />
        <Mistake>Do not answer an inference question with a copied sentence only. Say what the clue shows, in your own words, and link it to the question.</Mistake>
      </div>
    ),
  },
  {
    title: 'Fact, opinion and loaded words',
    content: (
      <div className="space-y-4">
        <Rule>A fact can be checked. An opinion is a view that someone holds. Emotive words push you to feel a certain way.</Rule>
        <Worked
          title="Sort the statements"
          steps={[
            <><em>The school has 40 computers.</em> You can count them: a fact.</>,
            <><em>Soccer is the best sport to watch.</em> &ldquo;Best&rdquo; is a judgement: an opinion.</>,
            <><em>The greedy owner robbed the village shop.</em> &ldquo;Greedy&rdquo; and &ldquo;robbed&rdquo; are emotive: they aim to make you angry, so ask whether the writer shows proof.</>,
          ]}
        />
        <p className="text-left text-sm text-slate-600">A word&rsquo;s denotation is its literal meaning. Its connotation is the feeling it carries. Writers choose words for their connotation as well as their meaning.</p>
      </div>
    ),
  },
  {
    title: 'Summary writing',
    content: (
      <div className="space-y-4">
        <Rule>A summary gives the main points in your own words, in fewer words. Leave out examples, repetition and detail. To paraphrase is to restate an idea in your own words.</Rule>
        <SummaryShrink passage={wordCount(GARDEN_PASSAGE)} summary={wordCount(GARDEN_SUMMARY)} />
        <Worked
          title="Summarise the garden passage"
          steps={[
            <>Underline the main points: fresh food; practical skills and teamwork; cheap to run; money raised by selling vegetables.</>,
            <>Cross out what does not belong: the spinach example, the repeated &ldquo;because&rdquo; reasons.</>,
            <>Join the points in your own words: <em>{GARDEN_SUMMARY}</em></>,
            <>Count the words and stay inside the limit the question gives.</>,
          ]}
        />
        <p className="text-left text-sm text-slate-600">In Paper 1, Section B is worth 10 marks. The passage is about 280 words and does not come from the comprehension text.</p>
      </div>
    ),
  },
  {
    title: 'Language in context',
    content: (
      <div className="space-y-4">
        <Rule>Section C (30 marks) tests language in a real text: vocabulary and language use, sentence structures, and how language is used to influence a reader.</Rule>
        <Worked
          title="Correct the errors"
          steps={[
            <>Text: <em>The learners in Grade 10 is ready, and each of them have their own books.</em></>,
            <>Subject and verb must agree (concord): the subject is &ldquo;learners&rdquo; (plural), so &ldquo;is&rdquo; becomes <em>are</em>.</>,
            <>&ldquo;Each of them&rdquo; is singular: <em>each of them has</em> a book.</>,
            <>Correct: <em>The learners in Grade 10 are ready, and each of them has a book.</em></>,
            <>Watch the real subject: in <em>The group of learners is waiting outside</em>, the subject is &ldquo;group&rdquo; (one group), so the verb is singular even though &ldquo;learners&rdquo; stands next to it.</>,
          ]}
        />
        <p className="text-left text-sm text-slate-600">Test 1 of the year (35 marks, 45 to 60 minutes) usually combines comprehension, summary and language structures and conventions.</p>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>You must find the date of an event in a long article. Do you skim or scan?</>,
          <>What two kinds of detail should a summary leave out?</>,
          <>Is &ldquo;This is the finest school in the province&rdquo; a fact or an opinion?</>,
          <>Fix the concord: <em>The list of names are on the notice board.</em></>,
        ]}
        answers={[
          <>Scan: you look for one specific detail.</>,
          <>Examples and repetition (also extra description).</>,
          <>An opinion: &ldquo;finest&rdquo; is a judgement that cannot be checked in the same way as a number.</>,
          <>The subject is &ldquo;list&rdquo; (singular), so use <em>is</em>: <em>The list of names is on the notice board.</em></>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'You need to find the name of a speaker in a long newspaper article without reading all of it. Which reading strategy should you use?',
    options: ['Scanning for the name', 'Skimming for the main idea', 'Rereading every paragraph slowly', 'Reading the last sentence'],
    answer: 'Scanning for the name',
    explanation: 'Scanning means running your eyes over the text to find specific information such as a name or a number. Skimming gives only a general overview.',
  },
  {
    prompt: 'What does it mean to skim a text?',
    options: ['To read every word out loud', 'To read quickly for the overview', 'To copy it down word for word', 'To look for a single name or number'],
    answer: 'To read quickly for the overview',
    explanation: 'Skimming gives you the main idea quickly. Looking for one detail is scanning.',
  },
  {
    prompt: 'A reader meets an unknown word. Which strategy uses the words around it to work out its meaning?',
    options: ['Skipping the whole paragraph', 'Copying the word into the summary', 'Using context clues', 'Counting the letters in the word'],
    answer: 'Using context clues',
    explanation: 'Context clues are hints in the surrounding words. They often reveal the meaning without a dictionary.',
  },
  {
    prompt: 'Read: "Lindiwe checked the sky, then packed her umbrella and put on her boots." What can you infer?',
    options: ['She is going to bed', 'She has lost her umbrella', 'She is going swimming', 'She expects rain'],
    answer: 'She expects rain',
    explanation: 'The text does not say it will rain, but the umbrella, boots and checking the sky are clues. Inferring means working out what is meant but not stated.',
  },
  {
    prompt: 'Which of the following is an opinion?',
    options: ['The match started at 15:00 on Saturday.', 'Bafana Bafana play in yellow and green.', 'The stadium has a goal at each end.', 'Soccer is the best sport to watch.'],
    answer: 'Soccer is the best sport to watch.',
    explanation: '"Most exciting" is a personal judgement that cannot be checked. The other statements can be verified.',
  },
  {
    prompt: 'Which sentence uses emotive language to make the reader angry?',
    options: ['The village shop is on the corner of Main Road.', 'The owner closed the village shop on Friday.', 'The greedy owner robbed the village shop.', 'The village shop sells bread, milk and airtime.'],
    answer: 'The greedy owner robbed the village shop.',
    explanation: 'Emotive language arouses strong feelings. "Greedy" and "robbed" judge the owner harshly, while the other sentences state plain facts.',
  },
  {
    prompt: 'What is the connotation of a word?',
    options: ['The position it takes in a sentence', 'The feeling it carries', 'The home language of the person using it', 'The number of syllables it contains in total'],
    answer: 'The feeling it carries',
    explanation: 'Denotation is the literal meaning; connotation is the feeling a word carries. "Home" and "house" have the same denotation but different connotations.',
  },
  {
    prompt: 'What is the purpose of a summary?',
    options: ['To give the main points in your own words', 'To copy the most interesting sentences exactly', 'To add new ideas of your own to the text', 'To list every example the writer gives'],
    answer: 'To give the main points in your own words',
    explanation: 'A summary is short and gives only the main ideas, restated in your own words.',
  },
  {
    prompt: 'Which of the following should be left out of a summary?',
    options: ['The main points of the passage', 'The link between the main points', 'Examples and repetition', 'Your own wording of the ideas'],
    answer: 'Examples and repetition',
    explanation: 'Examples, repetition and extra detail are left out, because a summary keeps only the main points.',
  },
  {
    prompt: 'What does "paraphrase" mean?',
    options: ['To copy a sentence exactly', 'To write a longer version of the text', 'To translate a text into another language', 'To restate an idea in your own words'],
    answer: 'To restate an idea in your own words',
    explanation: 'Paraphrasing keeps the meaning but changes the wording. A summary relies on it, because copying sentences is not allowed.',
  },
  {
    prompt: 'In the Grade 10 Paper 1, how many marks is Section A, the comprehension, worth?',
    options: ['10', '70', '30', '15'],
    answer: '30',
    explanation: 'Paper 1 (70 marks) has three sections: comprehension 30, summary 10 and language structures and conventions 30.',
  },
  {
    prompt: 'Which sentence has correct concord (subject-verb agreement)?',
    options: ['The group of learners is waiting outside.', 'The group of learners are waits outside.', 'The group of learners were waiting outside the gate yesterday and is cold.', 'The group of learners am waiting outside.'],
    answer: 'The group of learners is waiting outside.',
    explanation: 'The subject is "group" (singular), so the verb is "is". The word "learners" sits inside the phrase "of learners" and does not decide the verb.',
  },
  {
    prompt: 'A reader says: "The writer calls the new law a disaster but gives no proof." Which critical language skill is the reader using?',
    options: ['Counting the syllables in every single word', 'Spotting emotive words and asking for proof', 'Rhyming the last words of each sentence', 'Memorising the whole sentence by heart'],
    answer: 'Spotting emotive words and asking for proof',
    explanation: '"Disaster" is an emotive word. Critical language awareness means asking whether a writer\'s strong words are supported by proof.',
  },
];
