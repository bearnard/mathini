import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { TenseCheck, TenseTimeline, WordRoles } from '../../../../../components/diagrams/english/TenseDiagrams';
import { beAgrees, introSentence } from '../../../../../components/diagrams/english/lessonHelpers';

// Sentences in the slides that depend on a rule come from these tested helpers (lessonHelpers.test.ts).
export const were = beAgrees(true, 'past');
export const opener = {
  bell: introSentence('when the bell rang', 'the class started writing'),
  however: introSentence('however', 'the group completed the task on time'),
};

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Tense: past, present, future',
    content: slide(
      <>
        <Rule>Tense shows when something happens. The helping verb “will” makes the future tense. Past tense verbs show what already happened.</Rule>
        <TenseTimeline verb="write" plural={false} tenses={['past', 'present']} before="She" after="neatly." />
        <Worked
          title="Put into the future tense: They revise before the test."
          steps={[
            <>“revise” is present tense: it is happening now or happens regularly.</>,
            <>Add the helping verb “will” before the base verb.</>,
            <>Result: <strong>They will revise before the test.</strong></>,
          ]}
        />
        <Mistake>Clashing the tense with the time word: “They are revising before the test yesterday.” “Yesterday” needs the past tense, not the present.</Mistake>
      </>,
    ),
  },
  {
    title: 'Subject and verb agreement',
    content: slide(
      <>
        <Rule>The verb must agree with the subject. A plural subject such as “the learners” takes “were” in the past and “are” in the present. A singular subject takes “was” or “is”.</Rule>
        <Worked
          title="Fix: The learners was ready."
          steps={[
            <>Find the subject: “learners”. It is plural.</>,
            <>A plural subject takes “{were}” in the past tense.</>,
            <>Result: <strong>The learners {were} ready.</strong></>,
          ]}
        />
        <Mistake>Choosing “was” because it sounds fine, or forming a sentence such as “The learners ready were.” Check the subject first, then pick the verb, then keep the usual word order.</Mistake>
      </>,
    ),
  },
  {
    title: 'Adjectives and adverbs',
    content: slide(
      <>
        <Rule>An adjective describes a noun. An adverb describes a verb and often ends in “-ly”. A noun needs an adjective, so “clear” is correct before “explanation”.</Rule>
        <WordRoles />
        <Worked
          title="Choose: The speaker gave a ___ explanation."
          steps={[
            <>The missing word describes “explanation”, which is a noun.</>,
            <>A word that describes a noun is an adjective: “clear”, not “clearly”.</>,
            <>Compare: “The speaker explained clearly.” Here the word describes the verb, so the adverb is right.</>,
          ]}
        />
        <Mistake>Writing “clearly explanation”, “clearness explanation” or “clearerly”. Match the word to the job: adjective for a noun, adverb for a verb.</Mistake>
      </>,
    ),
  },
  {
    title: 'Clauses and commas',
    content: slide(
      <>
        <Rule>A clause must contain a subject and a verb. A comma follows an introductory clause such as “When the bell rang”, and also an opening connector such as “However”.</Rule>
        <Worked
          title="Punctuate: when the bell rang the class started writing"
          steps={[
            <>“When the bell rang” has a subject, “bell”, and a verb, “rang”. It is an introductory clause.</>,
            <>Put the comma straight after it.</>,
            <>Result: <strong>{opener.bell}</strong> Likewise: <strong>{opener.however}</strong></>,
          ]}
        />
        <Mistake>Using a semicolon or putting the comma inside the main clause: “When the bell rang the class, started writing.” The comma goes after the opener only.</Mistake>
      </>,
    ),
  },
  {
    title: 'Language in context',
    content: slide(
      <>
        <Rule>Language in context means using grammar choices inside meaningful reading or writing, not memorising terms alone. Keep one tense in a sentence unless the time really changes.</Rule>
        <TenseCheck which="revised" />
        <Worked
          title="Edit as you write: She read the article and writes a summary."
          steps={[
            <>Check the tense: “read” is past, but “writes” is present.</>,
            <>Make both verbs past: “wrote”.</>,
            <>Result: <strong>She read the article and wrote a summary.</strong></>,
          ]}
        />
        <Mistake>Practising grammar only in isolated drills. Marks are won by applying the rules to full sentences and paragraphs.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Put into the future tense: They revise before the test.</>,
          <>Correct: The learners was ready.</>,
          <>Which word fits: “a ___ explanation”, clear or clearly?</>,
          <>Punctuate: however the group completed the task on time</>,
        ]}
        answers={[
          <>They will revise before the test.</>,
          <>The learners {were} ready.</>,
          <>clear: it describes the noun “explanation”.</>,
          <>{opener.however}</>,
        ]}
      />,
    ),
  },
];

