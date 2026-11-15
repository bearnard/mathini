import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PronounLink, SentenceRows } from '../../../../../components/diagrams/english/Grade9Pictures';
import { TenseCheck } from '../../../../../components/diagrams/english/TenseDiagrams';
import type { Part } from '../../../../../components/diagrams/english/grammar';
import { sentenceText, sentenceType } from '../../../../../components/diagrams/english/grammar';
import { CONJUNCTION_JOB, PREPOSITIONS } from '../../../../../components/diagrams/english/grade9';

// Sentence kinds are worked out by sentenceType() in grammar.ts; grade9.test.ts and the lesson test check them.
export const sentences: Record<'simple' | 'compound' | 'complex', Part[]> = {
  simple: [{ kind: 'independent', text: 'The taxi arrived.' }],
  compound: [
    { kind: 'independent', text: 'The taxi arrived,' },
    { kind: 'conjunction', text: 'but' },
    { kind: 'independent', text: 'Lebo was not ready' },
  ],
  complex: [
    { kind: 'independent', text: 'Lebo missed the taxi' },
    { kind: 'dependent', text: 'because he packed late', lead: 'because' },
  ],
};
const combined = 'The taxi arrived, but Lebo was not ready.';
const joinedParts: Part[] = [
  { kind: 'independent', text: 'Thandi studied hard,' },
  { kind: 'conjunction', text: 'so' },
  { kind: 'independent', text: 'she passed the test' },
];

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Simple, compound and complex sentences',
    content: slide(
      <>
        <Rule>A simple sentence has one independent clause. A compound sentence joins two independent clauses. A complex sentence has one independent clause plus one or more dependent clauses.</Rule>
        <SentenceRows rows={(['simple', 'compound', 'complex'] as const).map((k) => ({ label: `${k[0].toUpperCase()}${k.slice(1)}`, parts: sentences[k] }))} />
        <Worked
          title={`Classify: ${sentenceText(sentences.complex)}.`}
          steps={[
            <>Find each clause. &ldquo;Lebo missed the taxi&rdquo; has a subject and verb and stands alone: independent.</>,
            <>&ldquo;Because he packed late&rdquo; cannot stand alone: dependent.</>,
            <>One independent plus one dependent clause makes a <strong>{sentenceType(sentences.complex)}</strong> sentence.</>,
          ]}
        />
        <Mistake>Thinking a simple sentence is always short. It is simple because it has only one clause, however many descriptive words it carries.</Mistake>
      </>,
    ),
  },
  {
    title: 'Conjunctions and combining sentences',
    content: slide(
      <>
        <Rule>A conjunction joins clauses and shows how the ideas relate. &ldquo;But&rdquo; shows contrast, &ldquo;because&rdquo; gives a reason, &ldquo;so&rdquo; shows a result, &ldquo;and&rdquo; adds an idea.</Rule>
        <SentenceRows rows={[{ label: 'Join with a result word', parts: joinedParts }]} />
        <Worked
          title="Combine: The taxi arrived. Lebo was not ready."
          steps={[
            <>Ask how the ideas relate. The taxi came, yet Lebo was not ready: a contrast.</>,
            <>Choose the conjunction for contrast: <strong>but</strong> ({CONJUNCTION_JOB.but}).</>,
            <>Join with a comma: <strong>{combined}</strong></>,
          ]}
        />
        <Mistake>Joining with &ldquo;and&rdquo; every time. &ldquo;The taxi arrived and Lebo was not ready&rdquo; hides the contrast. Combining sentences well shows how ideas relate and improves the flow.</Mistake>
      </>,
    ),
  },
  {
    title: 'Pronoun reference',
    content: slide(
      <>
        <Rule>A pronoun stands in for a noun. Pronoun reference is the link between the pronoun and the noun it replaces. That link must be clear to the reader.</Rule>
        <PronounLink names={['Maria', 'Sarah']} pronoun="she" />
        <Worked
          title="Fix: When Maria met Sarah, she felt nervous."
          steps={[
            <>Ask who &ldquo;she&rdquo; is. It could be Maria or Sarah, so the reference is <strong>ambiguous</strong>.</>,
            <>Replace the pronoun with the name you mean.</>,
            <>&ldquo;When Maria met Sarah, <strong>Maria</strong> felt nervous.&rdquo; Now the meaning is clear.</>,
          ]}
        />
        <Mistake>Using a pronoun when two people of the same gender have just been named. When in doubt, repeat the noun.</Mistake>
      </>,
    ),
  },
  {
    title: 'Prepositions',
    content: slide(
      <>
        <Rule>A preposition shows how words relate in time, space or direction. It comes before a noun or pronoun.</Rule>
        <ul className="space-y-1.5 rounded-xl bg-slate-100 p-4 text-left text-slate-800">
          {PREPOSITIONS.map((p) => (
            <li key={p.word}>
              <strong>{p.word}</strong> ({p.shows}): {p.example}
            </li>
          ))}
        </ul>
        <Worked
          title="Find the preposition: The cat jumped onto the table."
          steps={[
            <>Look for a word that links &ldquo;jumped&rdquo; to &ldquo;the table&rdquo;.</>,
            <>&ldquo;Onto&rdquo; shows the direction of the jump: it is the <strong>preposition</strong>.</>,
          ]}
        />
        <Mistake>Mixing it up with an adjective or a conjunction. An adjective describes a noun and a conjunction joins clauses. A preposition shows where, when or which way.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tense consistency',
    content: slide(
      <>
        <Rule>Keep one tense within a sentence unless the time really changes. If the first verb is in the past, the next verb joined to it must be too.</Rule>
        <TenseCheck which="revised" />
        <Worked
          title="Choose: She ___ to the store and bought milk."
          steps={[
            <>&ldquo;Bought&rdquo; is past tense.</>,
            <>The first verb must match: <strong>walked</strong>, not &ldquo;walks&rdquo; or &ldquo;walk&rdquo;.</>,
            <>&ldquo;She walked to the store and bought milk.&rdquo;</>,
          ]}
        />
        <Mistake>&ldquo;She walks to the store and bought milk.&rdquo; Present and past are mixed. Underline every verb and check they agree.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Is &ldquo;We stayed home because it rained&rdquo; simple, compound or complex?</>} answer={<>Complex: one independent clause and one dependent clause (because it rained).</>} />
        <Check question={<>Which conjunction shows contrast: but, and, because or so?</>} answer={<>But.</>} />
        <Check question={<>Why is &ldquo;When Maria met Sarah, she felt nervous&rdquo; unclear?</>} answer={<>&ldquo;She&rdquo; could refer to Maria or Sarah.</>} />
        <Check question={<>Correct the tense: &ldquo;She walked to the store and buys milk.&rdquo;</>} answer={<>She walked to the store and bought milk.</>} />
      </>,
    ),
  },
];

