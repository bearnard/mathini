import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { WordChips } from '../../../../../components/diagrams/english/LessonPictures';
import { endMark, simpleFuture, wordsOfClass } from '../../../../../components/diagrams/english/lessonSkills';

// Word classes, future forms and end marks shown below come from lessonSkills.ts (tested).
const s1 = 'The confident speaker explained clearly.';
const s1Adverb = wordsOfClass(s1, 'adverb')[0];
const s1Adjective = wordsOfClass(s1, 'adjective')[0];
const s1Noun = wordsOfClass(s1, 'noun')[0];
const s1Verb = wordsOfClass(s1, 'verb')[0];
const future = `They ${simpleFuture('present')} the report tomorrow${endMark('statement')}`;
const q = `Did you finish the report${endMark('question')}`;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Word classes in a sentence',
    content: slide(
      <>
        <Rule>A noun names a person, place, thing or idea. A verb shows action or state. An adjective describes a noun. An adverb describes a verb: how, when or where.</Rule>
        <WordChips
          sentence={s1}
          aria={`The sentence ${s1} with words labelled: confident is an adjective, speaker a noun, explained a verb, clearly an adverb.`}
        />
        <Worked
          title={`Label: ${s1}`}
          steps={[
            <>Who or what is named? <strong>{s1Noun}</strong> is the noun.</>,
            <>Which word describes the noun? <strong>{s1Adjective}</strong> is the adjective.</>,
            <>What happened? <strong>{s1Verb}</strong> is the verb.</>,
            <>How did the speaker explain? <strong>{s1Adverb}</strong> is the adverb.</>,
          ]}
        />
        <Mistake>Calling every describing word an adjective. &quot;Confident&quot; describes a noun (the speaker). &quot;Clearly&quot; describes a verb (explained), so it is an adverb.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tense and end punctuation',
    content: slide(
      <>
        <Rule>The tense shows when something happens. The future tense uses &quot;will&quot; with the verb. A direct question ends with a question mark.</Rule>
        <Worked
          title="Check the verb and the end mark"
          steps={[
            <>Sentence: <em>{future}</em></>,
            <>The verb group is &quot;will present&quot;, so it is the <strong>future tense</strong>.</>,
            <>Now: <em>{q.slice(0, -1)}</em> asks something directly, so it needs a <strong>question mark</strong>: {q}</>,
          ]}
        />
        <Mistake>Ending a direct question with a full stop. &quot;Did you finish the report.&quot; is wrong. Use {endMark('question')}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stereotypes, bias and prejudice',
    content: slide(
      <>
        <Rule>A stereotype is an oversimplified belief about a group. Prejudice is an unfair opinion formed without evidence. Bias is a one-sided view that shows in the writing.</Rule>
        <Worked
          title="Spot the bias"
          steps={[
            <>Read: <em>Those learners are always lazy.</em></>,
            <>&quot;Those learners&quot; lumps a whole group together, and &quot;always&quot; allows no exceptions.</>,
            <>No evidence is given, so this sounds the most biased.</>,
            <>Ask: who benefits from this view, and what proof supports it?</>,
          ]}
        />
        <Mistake>Believing a strong claim is true because it is stated confidently. Question stereotypes, compare perspectives, and look for evidence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Loaded language and fair editing',
    content: slide(
      <>
        <Rule>Loaded language uses emotional words to push a view. In factual reports it can distort meaning and push unfair views, so replace it with specific, evidence-based wording.</Rule>
        <Worked
          title="Edit for fairness"
          steps={[
            <>Biased: <em>Those learners are always lazy.</em></>,
            <>Remove the stereotype and name what you actually know.</>,
            <>Fairer: <em>Six learners in Grade 8B handed in their homework late this week.</em></>,
            <>Check punctuation so the message stays clear and respectful.</>,
          ]}
        />
        <Mistake>Fixing only the grammar. A sentence can be perfectly punctuated and still be unfair. Editing for fairness means changing the wording, not just the commas.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>In &quot;The learners read quietly&quot;, which word is the adverb?</li>
            <li>Which is in the future tense: &quot;They presented&quot; or &quot;They will present&quot;?</li>
            <li>What is a stereotype?</li>
            <li>How would you edit &quot;Those learners are always lazy&quot; to be fairer?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{wordsOfClass('The learners read quietly', 'adverb')[0]}</li>
            <li>&quot;They will present&quot;, because &quot;will&quot; marks the future.</li>
            <li>An oversimplified belief about a group.</li>
            <li>Replace the stereotype with specific, evidence-based wording.</li>
          </ol>
        }
      />,
    ),
  },
];

