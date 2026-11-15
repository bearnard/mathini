import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { BackshiftTable, RoleChips } from '../../../../../components/diagrams/english/Grade9Pictures';
import { TenseCheck } from '../../../../../components/diagrams/english/TenseDiagrams';
import { direct, pastDoubling, quoted, reported } from '../../../../../components/diagrams/english/grade9';

// Sentences below are built by the tested helpers in grade9.ts (grade9.test.ts).
const dSpeech = direct('She', 'am', 'happy');
const iSpeech = reported('She', 'she', 'am', 'happy');
const wrongIndirect = 'She said I am happy.';
const occurred = pastDoubling('occur');
const stopped = pastDoubling('stop');
const quotedLate = quoted('The boy', 'I will be late');

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Nouns, adjectives and verbs',
    content: slide(
      <>
        <Rule>A noun names a person, place, thing or idea. An adjective describes a noun. A verb shows an action or a state.</Rule>
        <RoleChips />
        <Worked
          title="Find the adjective in: The old car needs repair."
          steps={[
            <>Find the nouns, the naming words: <strong>car</strong> and <strong>repair</strong>.</>,
            <>Ask which word describes a noun. &ldquo;Old&rdquo; tells us what kind of car: <strong>old</strong> is the adjective.</>,
            <>&ldquo;Needs&rdquo; shows what the car does or requires, so it is the verb.</>,
          ]}
        />
        <Mistake>Judging a word by its look alone. &ldquo;Repair&rdquo; can be a verb (&ldquo;We repair it&rdquo;), but after &ldquo;needs&rdquo; it names a thing, so it is a noun. Ask what job the word does in the sentence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Keep one tense',
    content: slide(
      <>
        <Rule>Match the verb to the time words. &ldquo;Yesterday&rdquo; needs the past tense. Joined verbs in one sentence must stay in the same tense.</Rule>
        <TenseCheck which="lebo" />
        <Worked
          title="Choose the verb: She ___ to the store yesterday."
          steps={[
            <>Find the time word: <strong>yesterday</strong>, so the action is finished.</>,
            <>Use the past tense of &ldquo;go&rdquo;: <strong>went</strong> (not &ldquo;go&rdquo;, &ldquo;goes&rdquo; or &ldquo;going&rdquo;).</>,
            <>For two verbs, check both: &ldquo;He <strong>wrote</strong> the letter and <strong>sent</strong> it.&rdquo; Both are past.</>,
          ]}
        />
        <Mistake>&ldquo;He wrote the letter and sends it today.&rdquo; The tense jumps from past to present in one sentence. Reread every verb after you write.</Mistake>
      </>,
    ),
  },
  {
    title: 'Direct and indirect speech',
    content: slide(
      <>
        <Rule>Direct speech gives the exact words in speech marks. Indirect speech reports them with no speech marks, the pronoun changed and the verb stepped back.</Rule>
        <BackshiftTable />
        <Worked
          title={`Change to indirect speech: ${dSpeech}`}
          steps={[
            <>Remove the speech marks and the comma: <strong>She said</strong> ...</>,
            <>Change the pronoun: &ldquo;I&rdquo; was the speaker, so use <strong>she</strong>.</>,
            <>Step the verb back: &ldquo;am&rdquo; becomes <strong>was</strong>. Result: <strong>{iSpeech}</strong></>,
          ]}
        />
        <Mistake>Writing &ldquo;{wrongIndirect}&rdquo; Keeping &ldquo;I&rdquo; and &ldquo;am&rdquo; means nothing changed. The correct report is &ldquo;{iSpeech}&rdquo;</Mistake>
      </>,
    ),
  },
  {
    title: 'Punctuation and spelling',
    content: slide(
      <>
        <Rule>In direct speech, put a comma before the opening speech mark and the full stop inside the closing mark. Commas separate items in a list. When a verb ends in a stressed consonant-vowel-consonant, double the last letter before -ed.</Rule>
        <Worked
          title="Edit: The boy said I will be late"
          steps={[
            <>Add a comma after <em>said</em> and open the speech marks before the spoken words.</>,
            <>Close the speech marks after the full stop: <strong>{quotedLate}</strong></>,
            <>Lists: &ldquo;We bought bread, milk, eggs and apples.&rdquo; Commas separate the items clearly; &ldquo;and&rdquo; joins the last two.</>,
            <>Spelling: occur &rarr; <strong>{occurred}</strong> (double r), stop &rarr; {stopped}.</>,
          ]}
        />
        <Mistake>Spelling it &ldquo;occured&rdquo; or &ldquo;ocurred&rdquo;. Occur ends in a stressed consonant-vowel-consonant, so the r doubles: {occurred}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word is the adjective in &ldquo;The tall teacher smiled&rdquo;?</>} answer={<>&ldquo;Tall&rdquo; describes the noun teacher.</>} />
        <Check question={<>Which verb fits: &ldquo;Last week we ___ the match.&rdquo; (win)</>} answer={<>&ldquo;Won&rdquo;, the past tense, because of &ldquo;last week&rdquo;.</>} />
        <Check question={<>Change to indirect speech: He said, &ldquo;I am tired.&rdquo;</>} answer={<>{reported('He', 'he', 'am', 'tired')}</>} />
        <Check question={<>Spell the past tense of &ldquo;occur&rdquo;.</>} answer={<>{occurred}</>} />
      </>,
    ),
  },
];

