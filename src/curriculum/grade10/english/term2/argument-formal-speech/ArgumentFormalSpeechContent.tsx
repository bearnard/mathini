import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '../../../../../components/subjects/AnnotatedText';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { annotate } from '../../_shared/annotate';

/** An original speech excerpt written for this lesson. */
export const SPEECH =
  'Do you want a school where every voice counts? I do. We deserve a better library, we deserve safer gates, we deserve to be heard. A leader who ignores us is like a driver who ignores the road.';

export const SPEECH_NOTES: [string, string, string][] = [
  ['Do you want a school where every voice counts?', 'rhetorical question', 'It is asked for effect, not for an answer: it makes the audience agree silently.'],
  ['We deserve a better library, we deserve safer gates, we deserve to be heard', 'repetition', 'Repeating "we deserve" builds rhythm and force.'],
  ['like a driver who ignores the road', 'simile', 'A comparison that makes the leader\'s fault easy to picture.'],
];

export const learnSteps: LearnStep[] = [
  {
    title: 'Building an argument',
    content: (
      <div className="space-y-4">
        <Rule>A strong argument has a clear stance, reasons with proof, an answer to the other side and a firm ending.</Rule>
        <Worked
          title="Topic: Learners should be allowed to use cellphones for learning"
          steps={[
            <><strong>Stance (thesis):</strong> Cellphones, used with clear rules, make learning better.</>,
            <><strong>Reason and proof:</strong> a phone can hold a dictionary, a calculator and past papers, so a learner can check a word or a method at once.</>,
            <><strong>Other side:</strong> some say phones distract. <strong>Answer:</strong> the problem is how they are used, so the rules, not a ban, should decide.</>,
            <><strong>Conclusion:</strong> restate the stance and end with a strong final thought.</>,
          ]}
        />
        <Mistake>An argumentative essay is one-sided on purpose, but it is not a rant. Facts and reasons win marks; insults and shouting do not.</Mistake>
      </div>
    ),
  },
  {
    title: 'Tools of persuasion',
    content: (
      <div className="space-y-4">
        <Rule>Speakers and writers persuade with devices. A good answer says what the device is and why the writer used it.</Rule>
        <AnnotatedText title="An original speech excerpt" text={SPEECH} annotations={annotate(SPEECH, SPEECH_NOTES)} />
        <ul className="grid gap-2 text-left text-sm text-slate-700 md:grid-cols-2">
          <li className="rounded-lg bg-slate-50 p-2"><strong>Rhetorical question:</strong> asked for emphasis, not for a reply.</li>
          <li className="rounded-lg bg-slate-50 p-2"><strong>Repetition:</strong> repeating words to build force.</li>
          <li className="rounded-lg bg-slate-50 p-2"><strong>Anecdote:</strong> a short story of a small incident that makes a point.</li>
          <li className="rounded-lg bg-slate-50 p-2"><strong>Antithesis:</strong> two opposed ideas in balance: &ldquo;more haste, less speed&rdquo;.</li>
        </ul>
        <p className="text-left text-sm text-slate-600">Be alert to manipulative language: emotive words used to win you over without proof.</p>
      </div>
    ),
  },
  {
    title: 'Planning a speech',
    content: (
      <div className="space-y-4">
        <Rule>Before you write a speech, ask when, where, why, who and what.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Who?</strong> Identify the audience: it decides your style and examples.</li>
          <li><strong>Why?</strong> The purpose: to inform, persuade, thank or welcome.</li>
          <li><strong>When and where?</strong> The occasion decides the tone and length.</li>
          <li><strong>What?</strong> The few points you want the audience to remember.</li>
        </ul>
        <Worked
          title="Shape the speech"
          steps={[
            <>Open with something that attracts attention: a question, a short story or a surprising fact.</>,
            <>Use short sentences, simple ideas and familiar examples, and develop each point well. Avoid clichés.</>,
            <>Balance criticism by offering a reasonable alternative: say what is wrong and what could be done.</>,
            <>Finish strongly. The conclusion is important and is never just a summary of what you have already said.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Dialogue and interview on the page',
    content: (
      <div className="space-y-4">
        <Rule>A dialogue and an interview are spoken forms written down. Their layout shows who is speaking.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-sky-50 p-4 text-sm text-slate-700">
            <strong className="text-sky-700">Dialogue</strong>
            <p className="mt-1">Each new speaker starts a new line. Actions and tone go in brackets before the words.</p>
            <p className="mt-2 font-mono text-xs leading-6">ANELE: (smiling) Did you finish the project?<br />LUYANDA: (shaking her head) Not yet.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-sm text-slate-700">
            <strong className="text-amber-700">Interview</strong>
            <p className="mt-1">Speakers&rsquo; names go on the left and each speaker has a new line. The interviewer probes with questions.</p>
            <p className="mt-2 font-mono text-xs leading-6">Interviewer: Why did you start the garden?<br />Mrs Mokoena: To feed hungry learners.</p>
          </div>
        </div>
        <p className="text-left text-sm text-slate-600">A real interview is a transcript, so it needs careful editing to read well on the page.</p>
      </div>
    ),
  },
  {
    title: 'Prepared and unprepared speeches',
    content: (
      <div className="space-y-4">
        <Rule>In oral assessment you give prepared speeches and one unprepared speech. Both test structure, voice and conventions.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Each year a Grade 10 learner does one listening for comprehension, two prepared speeches and one unprepared speech.</li>
          <li>A prepared speech is marked out of 10 and an unprepared speech out of 15.</li>
          <li>In an unprepared speech, take a moment, choose two or three points and give them a clear beginning, middle and end.</li>
        </ul>
        <Worked
          title="A letter to the press, in short"
          steps={[
            <>Use a formal register and a clear subject.</>,
            <>Give your opinion and two reasons, each with proof.</>,
            <>End formally with your surname and initials.</>,
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
          <>What must the conclusion of a speech never be?</>,
          <>A speaker asks, &ldquo;Who will speak for the library if we do not?&rdquo; What device is this?</>,
          <>How are new speakers shown in a dialogue or an interview?</>,
          <>Why should an argument answer the other side?</>,
        ]}
        answers={[
          <>Just a summary of what has already been said.</>,
          <>A rhetorical question: it is asked for effect, not for an answer.</>,
          <>Each new speaker begins on a new line.</>,
          <>It shows that you considered the other view and still have good reasons to hold yours, which makes the argument stronger.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is a thesis statement in an argumentative essay?',
    options: ['A sentence that states your stance', 'A list of facts about the topic', 'The last sentence of the conclusion', 'A quotation from a famous speaker'],
    answer: 'A sentence that states your stance',
    explanation: 'The thesis tells the reader where the writer stands, so every paragraph can support it.',
  },
  {
    prompt: 'Why does a good argumentative essay answer the opposing view?',
    options: ['It makes the essay shorter and easier to mark', 'It proves that the writer is unsure of the topic', 'It shows the writer considered the other side', 'It replaces the need for proof and examples'],
    answer: 'It shows the writer considered the other side',
    explanation: 'Answering a counter-argument strengthens the writer\'s position. The essay is still one-sided in its conclusion.',
  },
  {
    prompt: 'What is a rhetorical question?',
    options: ['A question that has one correct answer', 'A question asked for emphasis, not a reply', 'A question that an interviewer asks a guest', 'A question that begins every paragraph'],
    answer: 'A question asked for emphasis, not a reply',
    explanation: 'A rhetorical question makes the audience think or agree. It is not meant to be answered.',
  },
  {
    prompt: 'A speaker says, "We deserve better, we demand better, we will build better." Which device is used?',
    options: ['Onomatopoeia', 'Flashback', 'Euphemism', 'Repetition'],
    answer: 'Repetition',
    explanation: 'The repeated pattern gives force and rhythm. It is a common rhetorical device in speeches.',
  },
  {
    prompt: 'What is an anecdote?',
    options: ['A list of statistics about a topic', 'A direct comparison using "like"', 'A short story of a small event', 'A summary of a long report or book'],
    answer: 'A short story of a small event',
    explanation: 'Anecdotes make a speech personal and memorable. They are told for information, humour or to reveal character.',
  },
  {
    prompt: '"More haste, less speed" shows two opposed ideas in balance. What is this device called?',
    options: ['Onomatopoeia', 'Alliteration', 'Antithesis', 'Personification'],
    answer: 'Antithesis',
    explanation: 'Antithesis places contrasting ideas side by side in a balanced phrase.',
  },
  {
    prompt: 'Before writing a speech, a learner asks "Who will be listening?" Which part of the plan is this?',
    options: ['Choosing the final conclusion', 'Identifying the audience', 'Editing the grammar of a draft', 'Counting the words in a draft'],
    answer: 'Identifying the audience',
    explanation: 'The audience decides the style, the examples and the tone of the speech.',
  },
  {
    prompt: 'Which opening is the best for a speech?',
    options: ['An apology for not being prepared at all', 'A long list of thanks to everyone present', 'A question that attracts attention', 'A repeat of the title with no new idea'],
    answer: 'A question that attracts attention',
    explanation: 'An opener should attract attention. Apologies and lists of thanks weaken the start.',
  },
  {
    prompt: 'How should the conclusion of a speech be written?',
    options: ['A word-for-word repeat of the introduction', 'A strong ending, not just a summary', 'A list of questions with no answers', 'An apology for the length of the talk'],
    answer: 'A strong ending, not just a summary',
    explanation: 'The conclusion is important and should leave the audience with a final thought, not simply repeat the body.',
  },
  {
    prompt: 'Which style of sentence suits a speech best?',
    options: ['Short, simple sentences with examples', 'Very long sentences full of technical terms', 'Sentences with no verbs at all', 'Sentences copied from a textbook'],
    answer: 'Short, simple sentences with examples',
    explanation: 'A listener cannot reread, so short, clear sentences and familiar examples are easier to follow.',
  },
  {
    prompt: 'A speaker criticises a policy. How should the criticism be balanced?',
    options: ['By offering a reasonable alternative', 'By repeating the criticism more loudly', 'By insulting the people who wrote the policy', 'By changing the topic'],
    answer: 'By offering a reasonable alternative',
    explanation: 'Balanced criticism says what is wrong and what could be done instead.',
  },
  {
    prompt: 'How is a change of speaker shown in a written dialogue?',
    options: ['The speech is written in one long paragraph', 'The speakers\' names are left out', 'Every line ends with a question mark', 'Each new speaker starts on a new line'],
    answer: 'Each new speaker starts on a new line',
    explanation: 'A new line for each speaker makes the exchange easy to follow. Actions or tone go in brackets before the words.',
  },
  {
    prompt: 'In a written interview, where are the speakers\' names placed?',
    options: ['At the bottom of the page', 'In the title only', 'On the left side of the page', 'In the middle of each sentence'],
    answer: 'On the left side of the page',
    explanation: 'An interview transcript gives each speaker\'s name on the left, with each speaker on a new line.',
  },
];
