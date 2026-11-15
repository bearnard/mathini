import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { LinkFlow, TaggedSentence } from '../../../../../components/diagrams/english/Grade7EnglishPictures';
import { LINKS, POSTER, REVISED, SPEAKER, linkSentence, taggedText, toAdverb } from '../../../../../components/diagrams/english/grade7english';

// Adverb forms and linked sentences come from grade7english.ts (tested).
const adverbs = ['careful', 'quick', 'happy'].map((a) => `${a} → ${toAdverb(a)}`);
const because = LINKS[0];

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Adjectives add detail',
    content: slide(
      <>
        <Rule>Cohesion means ideas connect so the text flows. Start with detail: an <strong>adjective</strong> describes a noun. It tells us what kind, so choose one that is clear, not vague.</Rule>
        <TaggedSentence tokens={POSTER} roles={['adjective', 'noun', 'verb']} />
        <Worked
          title={`“${taggedText(POSTER)}”`}
          steps={[
            <>Find the noun: “poster” names a thing.</>,
            <>Ask “what kind of poster?” The word “bright” answers, so <strong>bright</strong> is the adjective.</>,
            <>A vague version such as “The path thing led to the gate” has no detail. “The narrow path led to the library gate” does.</>,
          ]}
        />
        <Mistake>Using a vague word like “thing” or repeating one word over and over. Pick an adjective that adds useful detail.</Mistake>
      </>,
    ),
  },
  {
    title: 'Adverbs describe actions',
    content: slide(
      <>
        <Rule>An <strong>adverb</strong> tells us how, when or where an action happens. Many adverbs are made by adding -ly to an adjective: {adverbs.join('; ')}.</Rule>
        <TaggedSentence tokens={SPEAKER} roles={['noun', 'verb', 'adverb']} />
        <Worked
          title="“She explained the rule ___ so everyone understood.”"
          steps={[
            <>The blank describes how she explained, so it needs an adverb, not an adjective.</>,
            <>Take “careful” and add -ly: <strong>{toAdverb('careful')}</strong>.</>,
            <>“She explained the rule {toAdverb('careful')} so everyone understood.”</>,
          ]}
        />
        <Mistake>Using the adjective after a verb: “She explained careful.” An action needs an adverb: “carefully”. “Good” becomes “well”.</Mistake>
      </>,
    ),
  },
  {
    title: 'Conjunctions join ideas',
    content: slide(
      <>
        <Rule>A <strong>conjunction</strong> joins two ideas inside a sentence. “Because” gives a reason, “but”, “although” and “yet” show contrast, “unless” gives a condition, and “and” adds.</Rule>
        <TaggedSentence tokens={REVISED} roles={['verb', 'adverb', 'conjunction']} />
        <Worked
          title="“We revised early ___ we wanted to feel ready.”"
          steps={[
            <>Ask what the second part does: it explains why they revised early.</>,
            <>An explanation is a reason, so we need “<strong>because</strong>”.</>,
            <>“{linkSentence(because)}”</>,
          ]}
        />
        <Mistake>Choosing a conjunction that does not fit the meaning, such as “although” for a reason. Decide first: reason, contrast or condition?</Mistake>
      </>,
    ),
  },
  {
    title: 'Links between sentences',
    content: slide(
      <>
        <Rule>Words like <strong>therefore</strong> and <strong>however</strong> link whole sentences. “Therefore” shows a result. “However” shows a contrast. A good link matches the relationship between the ideas.</Rule>
        <LinkFlow />
        <Worked
          title="“The evidence was strong; ___, the class accepted the argument.”"
          steps={[
            <>Strong evidence is the cause. Accepting the argument is what followed.</>,
            <>A result needs “<strong>therefore</strong>”, not “instead”, “meanwhile” or “perhaps”.</>,
            <>“The evidence was strong; <strong>therefore</strong>, the class accepted the argument.”</>,
          ]}
        />
        <Mistake>Using a random word as a link: “Banana, their passing improved.” A link must be a real connecting word that fits the meaning.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Name the adjective: “The tall girl smiled.”</li>
            <li>Write the adverb for “quick”.</li>
            <li>Which word fits: “We stayed inside ___ it was raining.” (because / but)</li>
            <li>What is the main goal of cohesion?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>“tall” describes the noun “girl”.</li>
            <li>{toAdverb('quick')}.</li>
            <li>“because”, since the rain is the reason.</li>
            <li>To connect ideas so the text flows logically.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which word is an adjective in this sentence: "The bright poster caught our attention."',
    options: ['bright', 'caught', 'our', 'attention'],
    answer: 'bright',
    explanation: 'An adjective describes a noun, and "bright" describes "poster".',
  },
  {
    prompt: 'Which word is an adverb in this sentence: "The speaker answered clearly."',
    options: ['clearly', 'speaker', 'answered', 'the'],
    answer: 'clearly',
    explanation: 'An adverb describes how an action happens.',
  },
  {
    prompt: 'Choose the best conjunction: "We revised early ___ we wanted to feel ready."',
    options: ['because', 'although', 'unless', 'yet'],
    answer: 'because',
    explanation: 'Because introduces the reason for revising early.',
  },
  {
    prompt: 'Which option creates the most coherent pair of sentences?',
    options: [
      'The team practised daily. Therefore, their passing improved.',
      'The team practised daily. Banana, their passing improved.',
      'The team practised daily. Chair, their passing improved.',
      'The team practised daily. Quickly, their passing improved.',
    ],
    answer: 'The team practised daily. Therefore, their passing improved.',
    explanation: 'Therefore clearly links cause and result.',
  },
  {
    prompt: 'Which sentence uses a suitable adjective for detail?',
    options: [
      'The narrow path led to the library gate.',
      'The path thing led to the gate.',
      'The path was path and path.',
      'The gate path library narrow.',
    ],
    answer: 'The narrow path led to the library gate.',
    explanation: 'Narrow is a clear adjective that adds useful detail.',
  },
  {
    prompt: 'Which adverb best completes the sentence: "She explained the rule ___ so everyone understood."',
    options: ['carefully', 'careful', 'care', 'carefulness'],
    answer: 'carefully',
    explanation: 'An adverb is needed to describe how she explained.',
  },
  {
    prompt: 'Choose the best linking word: "The evidence was strong; ___, the class accepted the argument."',
    options: ['therefore', 'instead', 'meanwhile', 'perhaps'],
    answer: 'therefore',
    explanation: 'Therefore shows a logical conclusion from strong evidence.',
  },
  {
    prompt: 'What is the main goal of cohesion in writing?',
    options: [
      'to connect ideas so the text flows logically',
      'to make every sentence identical',
      'to remove all punctuation',
      'to avoid using paragraphs',
    ],
    answer: 'to connect ideas so the text flows logically',
    explanation: 'Cohesion helps readers follow meaning from sentence to sentence.',
  },
];

const GrammarCohesion = () => (
  <CapsSubjectTopic
    title="Grammar for Cohesion"
    subtitle="Adjectives, adverbs, conjunctions and sentence linking for flow"
    learnSteps={learnSteps}
    task="gr7-grammar-cohesion-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default GrammarCohesion;
