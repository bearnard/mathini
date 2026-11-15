import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { SpeechChange } from '../../../../../components/diagrams/english/SpeechChange';
import { StepFlow, TwoColumns } from '../../../../../components/diagrams/english/Grade8Pictures';
import { activeSentence, futureTense, passiveSentence, presentPerfect, reportStatement } from '../../../../../components/diagrams/english/grade8';

// Every sentence below is built by these tested helpers (grade8.test.ts).
const perfect = `${presentPerfect('She', 'complete')} the dialogue task.`;
const future = `${futureTense('They', 'present')} their report tomorrow.`;
const reported = reportStatement('Lindiwe', 'I am tired', { i: 'she' });
const monitor = { doer: 'the class monitor', verb: 'write', receiver: 'the notice' };
const active = activeSentence(monitor);
const passive = passiveSentence(monitor);

// "Check yourself"
const q1 = `${presentPerfect('We', 'finish')} the poster.`;
const q2 = reportStatement('Sipho', 'We will win', { we: 'they' });
const q3 = passiveSentence({ doer: 'the principal', verb: 'open', receiver: 'the library' });

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Perfect and future tenses',
    content: slide(
      <>
        <Rule>Present perfect: has or have + the past participle. Future: will + the base form of the verb.</Rule>
        <StepFlow
          items={[
            { label: 'Present perfect', note: 'has / have + past participle' },
            { label: 'Future', note: 'will + base verb' },
          ]}
          aria="Two boxes. Present perfect is has or have plus the past participle. Future is will plus the base verb."
        />
        <Worked
          title="Choose the tense that fits the sentence"
          steps={[
            <>An action that is finished but still matters now: &ldquo;{perfect}&rdquo; (has + completed).</>,
            <>An action still to come: &ldquo;{future}&rdquo; (will + present).</>,
          ]}
        />
        <Mistake>Do not use has or have with a word such as &ldquo;yesterday&rdquo;. &ldquo;She completed the dialogue task yesterday&rdquo; is simple past, not present perfect.</Mistake>
      </>,
    ),
  },
  {
    title: 'Direct and indirect speech',
    content: slide(
      <>
        <Rule>Direct speech is the speaker&apos;s exact words inside quotation marks. In indirect speech drop the marks, add &ldquo;that&rdquo;, change the pronoun and step the tense back.</Rule>
        <SpeechChange />
        <Worked
          title="&ldquo;I am tired,&rdquo; said Lindiwe."
          steps={[
            <>Drop the quotation marks and start with the speaker: Lindiwe said that&hellip;</>,
            <>Change the pronoun: I becomes she.</>,
            <>Step the tense back: am becomes was. Result: &ldquo;{reported}&rdquo;</>,
          ]}
        />
        <Mistake>Keeping the speaker&apos;s words: &ldquo;Lindiwe said that I am tired&rdquo; still has the pronoun and the tense of the direct speech.</Mistake>
      </>,
    ),
  },
  {
    title: 'Conjunctions link ideas',
    content: slide(
      <>
        <Rule>A conjunction joins two ideas and shows how they are related. Choose the one that matches the meaning.</Rule>
        <StepFlow
          items={[
            { label: 'because', note: 'gives a reason (cause)' },
            { label: 'although', note: 'shows a contrast' },
            { label: 'unless', note: 'sets a condition' },
            { label: 'while', note: 'links things at the same time' },
          ]}
          aria="Four conjunctions and their jobs: because gives a reason, although shows contrast, unless sets a condition, while links events at the same time."
        />
        <Worked
          title="Link the two ideas: the match was cancelled / it rained"
          steps={[
            <>Ask: which idea is the cause? The rain. Which is the result? The cancelled match.</>,
            <>A cause needs &ldquo;because&rdquo;: The match was cancelled because it rained.</>,
          ]}
        />
        <Mistake>&ldquo;Although&rdquo; shows contrast, so &ldquo;The match was cancelled although it rained&rdquo; changes the meaning. In dialogue writing, conjunctions turn short sentences into connected, logical ones.</Mistake>
      </>,
    ),
  },
  {
    title: 'Active and passive voice',
    content: slide(
      <>
        <Rule>Active: the doer comes first. Passive: the thing acted on is the subject, with was/were + the past participle (in the past tense; other tenses use other forms of &ldquo;be&rdquo;), and &ldquo;by&rdquo; names the doer if needed.</Rule>
        <TwoColumns
          left={{ title: 'Active', lines: ['doer first', 'wrote'] }}
          right={{ title: 'Passive', lines: ['receiver first', 'was written by'] }}
          aria="Two columns. Active puts the doer first and uses the verb wrote. Passive puts the receiver first and uses was written by."
        />
        <Worked
          title="Change to passive"
          steps={[
            <>Active: &ldquo;{active}&rdquo; The receiver is the notice.</>,
            <>Put the receiver first, add was, use the participle written, then by + the doer: &ldquo;{passive}&rdquo;</>,
            <>A report uses passive voice to focus on the action or result rather than on who did it.</>,
          ]}
        />
        <Mistake>Using the wrong verb form: &ldquo;The notice was wrote&rdquo; should be &ldquo;was written&rdquo;.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Write in the present perfect: We (finish) the poster.</li>
            <li>Turn into indirect speech: &ldquo;We will win,&rdquo; said Sipho.</li>
            <li>Which conjunction fits: He stayed home ___ he was ill?</li>
            <li>Make passive: The principal opened the library.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{q1}</li>
            <li>{q2}</li>
            <li>because (it gives the reason)</li>
            <li>{q3}</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which sentence is in the present perfect tense?',
    options: ['She has completed the dialogue task.', 'She completed the dialogue task yesterday.', 'She completes the dialogue task now.', 'She will complete the dialogue task.'],
    answer: 'She has completed the dialogue task.',
    explanation: 'Present perfect uses has or have plus the past participle.',
  },
  {
    prompt: 'Which sentence is in the future tense?',
    options: ['They will present their report tomorrow.', 'They present their report now.', 'They presented their report.', 'They have presented their report.'],
    answer: 'They will present their report tomorrow.',
    explanation: 'Future tense commonly uses will with the base form.',
  },
  {
    prompt: 'Direct speech: "I am tired," said Lindiwe. Which indirect form is correct?',
    options: ['Lindiwe said that she was tired.', 'Lindiwe said that I am tired.', 'Lindiwe said she is tired yesterday.', 'Lindiwe says that she tired.'],
    answer: 'Lindiwe said that she was tired.',
    explanation: 'Pronoun and tense change appropriately in reported speech.',
  },
  {
    prompt: 'Which conjunction best links cause and result?',
    options: ['because', 'although', 'unless', 'meanwhile'],
    answer: 'because',
    explanation: 'Because introduces a reason or cause.',
  },
  {
    prompt: 'Which sentence is in the passive voice?',
    options: ['The notice was written by the class monitor.', 'The class monitor wrote the notice.', 'The class monitor writes the notice.', 'The class monitor will write the notice.'],
    answer: 'The notice was written by the class monitor.',
    explanation: 'Passive voice places the action target as the sentence subject.',
  },
  {
    prompt: 'Why might a report use passive voice?',
    options: ['to focus on the action or result', 'to avoid sentence structure', 'to remove all verbs', 'to turn prose into poetry'],
    answer: 'to focus on the action or result',
    explanation: 'Passive voice highlights what happened rather than who did it.',
  },
  {
    prompt: 'Which punctuation is required around direct speech?',
    options: ['quotation marks', 'square brackets only', 'slash marks', 'hyphen pairs only'],
    answer: 'quotation marks',
    explanation: 'Direct speech is enclosed in quotation marks.',
  },
  {
    prompt: 'What is the best reason to use conjunctions in dialogue writing?',
    options: ['to link ideas into coherent sentences', 'to remove all sentence variation', 'to avoid meaning', 'to shorten every sentence to one word'],
    answer: 'to link ideas into coherent sentences',
    explanation: 'Conjunctions improve flow and logical relationships.',
  },
];

const LanguageReportDialogue = () => (
  <CapsSubjectTopic
    title="Language for Report and Dialogue"
    subtitle="Tense control, speech conversion, conjunctions and voice choices"
    learnSteps={learnSteps}
    task="gr8-language-report-dialogue-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LanguageReportDialogue;
