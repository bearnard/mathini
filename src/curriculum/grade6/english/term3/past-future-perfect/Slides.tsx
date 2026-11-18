import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The past perfect tense",
    content: slide(
      <>
        <Rule>The past perfect tense uses had plus the past participle. It shows that one action was finished before another action in the past. When I arrived, the bus had left. The bus left first, and then I arrived.</Rule>
        <KeyTable
          title={"Past perfect"}
          head={["Verb", "Past perfect"]}
          aria={"Past perfect. finish: had finished. eat: had eaten. go: had gone. see: had seen."}
          rows={[["finish", "had finished"], ["eat", "had eaten"], ["go", "had gone"], ["see", "had seen"]]}
        />
        <Worked
          title={"Order two past actions"}
          steps={[
            <>First the film ended, then we reached the cinema.</>,
            <>We say: When we reached the cinema, the film had ended.</>,
          ]}
        />
        <Mistake>Using the simple past for both actions. Use had for the action that happened first.</Mistake>
      </>,
    ),
  },
  {
    title: "The future perfect tense",
    content: slide(
      <>
        <Rule>The future perfect tense uses will have plus the past participle. It shows that something will be finished by a certain time in the future. By Friday I will have finished my project. The phrase by Friday is a clue.</Rule>
        <KeyTable
          title={"Future perfect"}
          head={["Verb", "Future perfect"]}
          aria={"Future perfect. finish: will have finished. write: will have written. paint: will have painted. read: will have read."}
          rows={[["finish", "will have finished"], ["write", "will have written"], ["paint", "will have painted"], ["read", "will have read"]]}
        />
        <Worked
          title={"Plan a deadline"}
          steps={[
            <>The painter starts today and ends on Wednesday.</>,
            <>By Wednesday he will have painted the house.</>,
          ]}
        />
        <Mistake>Using the simple future for something that will be finished by a time. Use will have plus the participle.</Mistake>
      </>,
    ),
  },
  {
    title: "Comparing the perfect tenses",
    content: slide(
      <>
        <Rule>The present perfect uses has or have: She has finished. The past perfect uses had: She had finished before I came. The future perfect uses will have: She will have finished by noon. All three use the past participle.</Rule>
        <KeyTable
          title={"Three perfect tenses"}
          head={["Tense", "Example"]}
          aria={"Three perfect tenses. present perfect: has or have: He has left.. past perfect: had: He had left before noon.. future perfect: will have: He will have left by noon.."}
          rows={[["present perfect", "has or have: He has left."], ["past perfect", "had: He had left before noon."], ["future perfect", "will have: He will have left by noon."]]}
        />
        <Worked
          title={"Choose the tense"}
          steps={[
            <>A clue such as by tomorrow points to the future perfect.</>,
            <>A past action before another past action points to the past perfect.</>,
          ]}
        />
        <Mistake>Mixing up had and will have. Had is for the past, and will have is for the future.</Mistake>
      </>,
    ),
  },
  {
    title: "Time clues for the perfect tenses",
    content: slide(
      <>
        <Rule>Use time words to choose the tense. By tomorrow, by Friday and by the end of the year point to the future perfect. Before, already and by the time with a past action point to the past perfect. Just, already and yet with the present point to the present perfect.</Rule>
        <KeyTable
          title={"Clues"}
          head={["Clue", "Tense"]}
          aria={"Clues. by tomorrow, by Friday: future perfect. by the time + past action: past perfect. just, yet (now): present perfect."}
          rows={[["by tomorrow, by Friday", "future perfect"], ["by the time + past action", "past perfect"], ["just, yet (now)", "present perfect"]]}
        />
        <Worked
          title={"Use a clue"}
          steps={[
            <>By the time the guests came, we had prepared the food.</>,
            <>By next week they will have finished the painting.</>,
          ]}
        />
        <Mistake>Ignoring the clue words. They show which tense to use.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does the past perfect use before the past participle?</>,
          <>Which words form the future perfect?</>,
          <>What is the past participle of see?</>,
          <>Which clue points to the future perfect?</>,
        ]}
        answers={[
          <>Had.</>,
          <>Will have.</>,
          <>Seen.</>,
          <>By Friday.</>,
        ]}
      />,
    ),
  },
];
