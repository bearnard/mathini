import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as p from '@/components/diagrams/english/paper1';

// Numbers come from paper1.ts (tested in paper1.test.ts and g12EngPaper1.test.ts). Every passage and sentence is an original teaching text.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Active and passive voice',
    content: slide(
      <>
        <Rule>In the active voice the subject does the action (&ldquo;The council repairs the road&rdquo;). In the passive voice the subject receives the action and the doer is moved to a &ldquo;by&rdquo; phrase or left out (&ldquo;The road is repaired&rdquo;). The passive is formed with a form of &ldquo;be&rdquo; and the past participle: present progressive passive &ldquo;is being repaired&rdquo;, present perfect passive &ldquo;has been repaired&rdquo; and future passive &ldquo;will be repaired&rdquo;. The passive is used when the doer is unknown or unimportant.</Rule>
        <InfoTable
          cols={[{ title: 'Tense', w: 28 }, { title: 'Active', w: 36 }, { title: 'Passive', w: 36 }]}
          rows={[
            ['Present\nprogressive', 'They are repairing\nthe road.', 'The road is being\nrepaired.'],
            ['Present\nperfect', 'They have repaired\nthe road.', 'The road has been\nrepaired.'],
            ['Future', 'They will repair\nthe road.', 'The road will be\nrepaired.'],
          ]}
          aria="A table of active and passive voice. Present progressive: they are repairing the road becomes the road is being repaired. Present perfect: they have repaired the road becomes the road has been repaired. Future: they will repair the road becomes the road will be repaired."
        />
        <Worked
          title="Change the voice"
          steps={[
            'Active: "The principal has announced the results." The object (the results) becomes the subject.',
            'Passive: "The results have been announced by the principal." The verb changes to has/have been + past participle.',
            'Check that the tense stays the same: present perfect in both.',
          ]}
        />
        <Mistake>Changing the tense when you change the voice. &ldquo;Has announced&rdquo; becomes &ldquo;has been announced&rdquo;, not &ldquo;was announced&rdquo;.</Mistake>
      </>,
    ),
  },
  {
    title: 'Direct and indirect speech',
    content: slide(
      <>
        <Rule>Direct speech gives the exact words in quotation marks. Indirect (reported) speech reports them without quotation marks, usually with &ldquo;that&rdquo;, and the tense moves back, pronouns change, and words of time and place change. For example &ldquo;I am tired&rdquo; becomes &ldquo;she said that she was tired&rdquo;, &ldquo;today&rdquo; becomes &ldquo;that day&rdquo;, &ldquo;tomorrow&rdquo; becomes &ldquo;the next day&rdquo; and &ldquo;here&rdquo; becomes &ldquo;there&rdquo;.</Rule>
        <InfoTable
          cols={[{ title: 'Direct', w: 36 }, { title: 'Indirect', w: 64 }]}
          rows={[
            ['"I am tired."', 'She said that she was tired.'],
            ['"We will leave tomorrow."', 'He said that they would leave the next day.'],
            ['"I have finished."', 'She said that she had finished.'],
            ['"Can you help me?"', 'He asked whether I could help him.'],
          ]}
          aria="A table of direct and indirect speech. I am tired becomes she said that she was tired. We will leave tomorrow becomes he said that they would leave the next day. I have finished becomes she said that she had finished. Can you help me becomes he asked whether I could help him."
        />
        <Worked
          title="Report a sentence"
          steps={[
            'Direct: Sipho said, "I will phone you tomorrow."',
            'Move the tense back (will to would), change the pronoun (I to he, you to me) and the time (tomorrow to the next day).',
            'Indirect: Sipho said that he would phone me the next day.',
          ]}
        />
        <Mistake>Keeping the quotation marks or the original tense. Indirect speech has no quotation marks, and the verb moves back.</Mistake>
      </>,
    ),
  },
  {
    title: 'Clauses and sentence types',
    content: slide(
      <>
        <Rule>A clause has a subject and a finite verb. A main clause makes sense alone, and a subordinate clause depends on it. A simple sentence has one clause, a compound sentence joins main clauses with a conjunction such as &ldquo;and&rdquo; or &ldquo;but&rdquo;, and a complex sentence has a main clause with one or more subordinate clauses. A relative clause starts with who, which or that and describes a noun, and a noun clause does the work of a noun. A complex-compound sentence has both.</Rule>
        <InfoTable
          cols={[{ title: 'Type', w: 24 }, { title: 'Example', w: 76 }]}
          rows={[
            ['Simple', 'The learners wrote the test.'],
            ['Compound', 'The learners wrote the test, and the teacher marked it.'],
            ['Complex', 'The learners who were prepared passed the test.'],
            ['Complex-compound', 'The learners who were prepared passed, but the others failed.'],
          ]}
          aria="A table of sentence types. Simple: the learners wrote the test. Compound: the learners wrote the test and the teacher marked it. Complex: the learners who were prepared passed the test. Complex-compound: the learners who were prepared passed, but the others failed."
        />
        <Worked
          title="Analyse a sentence"
          steps={[
            '"The man who lives next door sells fruit." The main clause is "the man sells fruit".',
            '"who lives next door" is a relative clause that describes "the man".',
            'One main clause and one subordinate clause: a complex sentence.',
          ]}
        />
        <Mistake>Calling a sentence compound because it has two verbs. Compound needs two main clauses; a subordinate clause makes it complex.</Mistake>
      </>,
    ),
  },
  {
    title: 'Concord, modals and punctuation',
    content: slide(
      <>
        <Rule>The verb agrees with its subject (concord): &ldquo;Each of the boys has a bag&rdquo;, &ldquo;The committee has made its decision&rdquo; (a group acting as one), and with &ldquo;neither ... nor&rdquo; the verb agrees with the nearer subject (&ldquo;Neither the teacher nor the learners were ready&rdquo;). Modals such as can, may, must and would show possibility, permission or obligation, and a conditional sentence has an &ldquo;if&rdquo; clause (&ldquo;If it rains, we will stay home&rdquo;). The subjunctive uses &ldquo;were&rdquo; for something unreal: &ldquo;If I were you, I would apologise&rdquo;. Learn the uses of the colon, semicolon, apostrophe, hyphen, parentheses and ellipsis.</Rule>
        <InfoTable
          cols={[{ title: 'Mark', w: 26 }, { title: 'Use', w: 44 }, { title: 'Example', w: 30 }]}
          rows={[
            ['Colon', 'introduces a list or explanation', 'Bring this: a pen.'],
            ['Semicolon', 'joins two related main clauses', 'It rained; we stayed.'],
            ['Apostrophe', 'possession or omission', "the boy's bag, don't"],
            ['Hyphen', 'joins words', 'well-known'],
            ['Ellipsis', 'shows a pause or omission', 'Well . . .'],
          ]}
          aria="A table of punctuation marks. Colon: introduces a list or an explanation. Semicolon: joins two related main clauses. Apostrophe: shows possession or omission, as in the boy's bag and don't. Hyphen: joins words, as in well-known. Ellipsis: shows a pause or an omission."
        />
        <Worked
          title="Choose the correct form"
          steps={[
            '"Each of the girls (has / have) finished." Each is singular, so has.',
            '"If I (was / were) the captain, I would change the plan." An unreal condition uses were.',
            '"The learners books / learners\' books are on the desk." Books that belong to the learners: learners\' books.',
          ]}
        />
        <Mistake>Making the verb agree with the word next to it instead of the real subject. In &ldquo;The box of apples is on the table&rdquo; the subject is &ldquo;box&rdquo;, not &ldquo;apples&rdquo;.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Change to the passive: &ldquo;The school has built a new library.&rdquo;</>,
          <>Report: She said, &ldquo;I will come tomorrow.&rdquo;</>,
          <>Is &ldquo;The learners who worked hard passed&rdquo; simple, compound or complex?</>,
          <>Choose: &ldquo;Neither the captain nor the players (was / were) late.&rdquo;</>,
        ]}
        answers={[
          <>A new library has been built by the school.</>,
          <>She said that she would come the next day.</>,
          <>Complex: it has a relative clause.</>,
          <>Were, because it agrees with the nearer subject, players.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which sentence is the passive of \"The company has launched a new phone\"?",
    options: ["A new phone was launched by the company.", "The company has been launched a new phone.", "A new phone has been launched by the company.", "A new phone is launching by the company."],
    answer: "A new phone has been launched by the company.",
    explanation: "Present perfect active becomes present perfect passive: has been launched.",
  },
  {
    prompt: "Which sentence is in the present progressive passive?",
    options: ["The fence is being painted.", "The fence was painted.", "The fence will be painted.", "The fence has been painted."],
    answer: "The fence is being painted.",
    explanation: "Is being + past participle.",
  },
  {
    prompt: "Which sentence is in the future passive?",
    options: ["The winners are announced on Friday.", "The winners have announced on Friday.", "The winners announce on Friday.", "The winners will be announced on Friday."],
    answer: "The winners will be announced on Friday.",
    explanation: "Will be + past participle.",
  },
  {
    prompt: "When is the passive voice useful?",
    options: ["When the doer is the subject", "When the doer is unknown or unimportant", "When there is no verb", "When the sentence is a question only"],
    answer: "When the doer is unknown or unimportant",
    explanation: "The passive can leave out the doer.",
  },
  {
    prompt: "Report this: Anele said, \"I am hungry.\"",
    options: ["Anele said that she is hungry.", "Anele said that she was hungry.", "Anele said that I was hungry.", "Anele said that she will be hungry."],
    answer: "Anele said that she was hungry.",
    explanation: "The verb moves back and the pronoun changes.",
  },
  {
    prompt: "Report this: He said, \"We will leave tomorrow.\"",
    options: ["He said that we will leave tomorrow.", "He said that they will leave the next day.", "He said they leave next day.", "He said that they would leave the next day."],
    answer: "He said that they would leave the next day.",
    explanation: "Will becomes would, we becomes they, tomorrow becomes the next day.",
  },
  {
    prompt: "In indirect speech, \"here\" usually becomes",
    options: ["there", "now", "then", "this"],
    answer: "there",
    explanation: "Words of place and time change.",
  },
  {
    prompt: "Which punctuation is used in direct speech but not in indirect speech?",
    options: ["Full stops", "Capital letters", "Quotation marks", "Commas"],
    answer: "Quotation marks",
    explanation: "Indirect speech reports without quotation marks.",
  },
  {
    prompt: "In \"The man who sells fruit lives here\", what is \"who sells fruit\"?",
    options: ["A main clause", "A noun phrase only", "An exclamation", "A relative clause"],
    answer: "A relative clause",
    explanation: "It describes the noun man.",
  },
  {
    prompt: "Which sentence is compound?",
    options: ["Because it rained, we stayed indoors.", "It rained, so we stayed indoors.", "Although it rained, we stayed indoors.", "We stayed indoors."],
    answer: "It rained, so we stayed indoors.",
    explanation: "Two main clauses are joined by a conjunction.",
  },
  {
    prompt: "Which sentence is complex?",
    options: ["The boy who won was proud.", "The boy won and the girl cheered.", "The boy won.", "The boy won, but she lost."],
    answer: "The boy who won was proud.",
    explanation: "It has a main clause and a subordinate clause.",
  },
  {
    prompt: "Choose the correct verb: \"Each of the players (is / are) ready.\"",
    options: ["are", "were", "is", "have been"],
    answer: "is",
    explanation: "Each is singular.",
  },
  {
    prompt: "Choose the correct verb: \"Either the manager or the clerks (was / were) late.\"",
    options: ["was", "has been", "were", "is"],
    answer: "were",
    explanation: "The verb agrees with the nearer subject, clerks.",
  },
  {
    prompt: "Which sentence uses the subjunctive correctly?",
    options: ["If I were taller, I would play basketball.", "If I was taller, I would play basketball.", "If I am taller, I would play basketball.", "If I be taller, I played basketball."],
    answer: "If I were taller, I would play basketball.",
    explanation: "An unreal condition uses were.",
  },
];

const P1SentenceStructures = () => (
  <CapsSubjectTopic
    title="Sentence Structures and Conventions"
    subtitle="Voice, direct and indirect speech, clauses, concord, modals and punctuation"
    learnSteps={learnSteps}
    task="gr12-p1-sentence-structures-t2"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default P1SentenceStructures;
