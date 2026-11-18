import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Active voice",
    content: slide(
      <>
        <Rule>In an active sentence the subject does the action. The dog chased the cat: the dog is the subject, chased is the verb, and the cat is the object. The active voice is direct and easy to read.</Rule>
        <KeyTable
          title={"Active sentences"}
          head={["Sentence", "Who does the action"]}
          aria={"Active sentences. The dog chased the cat.: the dog. Sipho kicked the ball.: Sipho. The cook baked the bread.: the cook."}
          rows={[["The dog chased the cat.", "the dog"], ["Sipho kicked the ball.", "Sipho"], ["The cook baked the bread.", "the cook"]]}
        />
        <Worked
          title={"Find the doer"}
          steps={[
            <>Ask who or what does the action.</>,
            <>In Sipho kicked the ball, Sipho is the subject and does the kicking.</>,
          ]}
        />
        <Mistake>Thinking that the first noun is always the subject. Ask who does the action.</Mistake>
      </>,
    ),
  },
  {
    title: "Passive voice",
    content: slide(
      <>
        <Rule>In a passive sentence the subject receives the action. The object of the active sentence becomes the subject: The cat was chased by the dog. The passive verb has a form of be plus the past participle, such as was chased. The doer can be added with by, or left out.</Rule>
        <KeyTable
          title={"Active and passive"}
          head={["Active", "Passive"]}
          aria={"Active and passive. The dog chased the cat.: The cat was chased by the dog.. Sipho kicked the ball.: The ball was kicked by Sipho.. The cook baked the bread.: The bread was baked by the cook.."}
          rows={[["The dog chased the cat.", "The cat was chased by the dog."], ["Sipho kicked the ball.", "The ball was kicked by Sipho."], ["The cook baked the bread.", "The bread was baked by the cook."]]}
        />
        <Worked
          title={"Make a passive sentence"}
          steps={[
            <>Take the object of the active sentence: the bread.</>,
            <>Use was plus the past participle: was baked, then add by the cook.</>,
          ]}
        />
        <Mistake>Changing the tense when you change the voice. The tense stays the same: baked becomes was baked.</Mistake>
      </>,
    ),
  },
  {
    title: "Passive in three tenses",
    content: slide(
      <>
        <Rule>The passive keeps the tense of the active verb. For the present, use am, is or are plus the past participle. For the past, use was or were. For the future, use will be. The teacher marks the tests becomes The tests are marked by the teacher. The teacher marked the tests becomes The tests were marked. The teacher will mark the tests becomes The tests will be marked.</Rule>
        <KeyTable
          title={"Tenses of the passive"}
          head={["Tense", "Example"]}
          aria={"Tenses of the passive. present: The tests are marked.. past: The tests were marked.. future: The tests will be marked.."}
          rows={[["present", "The tests are marked."], ["past", "The tests were marked."], ["future", "The tests will be marked."]]}
        />
        <Worked
          title={"Keep the tense"}
          steps={[
            <>The learners clean the hall (present).</>,
            <>The hall is cleaned by the learners (present passive).</>,
          ]}
        />
        <Mistake>Using the past participle wrongly. Write was sung, not was sang.</Mistake>
      </>,
    ),
  },
  {
    title: "When to use the passive",
    content: slide(
      <>
        <Rule>Use the active voice for most writing, because it is clear. Use the passive when the doer is not known or not important, or when the receiver of the action matters more. My bicycle was stolen does not say who stole it. The new bridge was opened in March puts the bridge first.</Rule>
        <KeyTable
          title={"Choosing the voice"}
          head={["Situation", "Voice"]}
          aria={"Choosing the voice. the doer is known and important: active. the doer is not known: passive. the receiver matters more: passive."}
          rows={[["the doer is known and important", "active"], ["the doer is not known", "passive"], ["the receiver matters more", "passive"]]}
        />
        <Worked
          title={"Choose the voice"}
          steps={[
            <>You do not know who broke the window: The window was broken.</>,
            <>You know who broke it and want to say so: Thabo broke the window.</>,
          ]}
        />
        <Mistake>Using the passive in every sentence. Too many passive sentences make writing heavy.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which part of a passive verb is the past participle in was chased?</>,
          <>How do you name the doer in a passive sentence?</>,
          <>Does the tense change when active becomes passive?</>,
          <>Is Sipho kicked the ball active or passive?</>,
        ]}
        answers={[
          <>Chased.</>,
          <>With the word by.</>,
          <>No, it stays the same.</>,
          <>Active.</>,
        ]}
      />,
    ),
  },
];
