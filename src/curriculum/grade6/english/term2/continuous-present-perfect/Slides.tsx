import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Auxiliary verbs",
    content: slide(
      <>
        <Rule>An auxiliary verb is a helping verb. It comes before the main verb and helps to show the tense. The auxiliary verbs in this lesson are the forms of be (am, is, are, was, were) and the forms of have (has, have). In She is reading, is is the auxiliary verb and reading is the main verb.</Rule>
        <KeyTable
          title="Auxiliary verbs"
          head={["Auxiliary", "Example"]}
          aria="Auxiliary verbs. am, is, are: He is running.. was, were: They were singing.. has, have: She has finished.. will: We will go.."
          rows={[["am, is, are", "He is running."], ["was, were", "They were singing."], ["has, have", "She has finished."], ["will", "We will go."]]}
        />
        <Worked
          title="Find the auxiliary verb"
          steps={[
            <>In The learners are playing, are is the auxiliary verb.</>,
            <>Playing is the main verb.</>,
          ]}
        />
        <Mistake>Calling the main verb the auxiliary verb. The auxiliary verb is the helper before it.</Mistake>
      </>,
    ),
  },
  {
    title: "The continuous tenses",
    content: slide(
      <>
        <Rule>The continuous tenses show an action that is, was or will be in progress. The present continuous uses am, is or are plus a verb ending in ing: She is reading. The past continuous uses was or were plus ing: They were playing when it rained. The future continuous uses will be plus ing: I will be sleeping at ten.</Rule>
        <KeyTable
          title="Continuous tenses"
          head={["Tense", "Example"]}
          aria="Continuous tenses. present continuous: am, is, are + ing: We are eating.. past continuous: was, were + ing: We were eating.. future continuous: will be + ing: We will be eating.."
          rows={[["present continuous", "am, is, are + ing: We are eating."], ["past continuous", "was, were + ing: We were eating."], ["future continuous", "will be + ing: We will be eating."]]}
        />
        <Worked
          title="Form the tenses"
          steps={[
            <>Right now: The baby is sleeping.</>,
            <>At 8 last night: The baby was sleeping.</>,
            <>At 8 tonight: The baby will be sleeping.</>,
          ]}
        />
        <Mistake>Leaving out the auxiliary verb. Write She is reading, not She reading.</Mistake>
      </>,
    ),
  },
  {
    title: "The present perfect tense",
    content: slide(
      <>
        <Rule>The present perfect tense uses has or have plus the past participle of the main verb. It shows that something has happened and that it matters now: She has finished her homework. Regular verbs add ed. Irregular verbs have special participles: eat becomes eaten, go becomes gone, see becomes seen, write becomes written. Use has with he, she and it, and have with I, you, we and they.</Rule>
        <KeyTable
          title="Present perfect"
          head={["Verb", "Past participle"]}
          aria="Present perfect. finish: finished: She has finished.. eat: eaten: He has eaten.. go: gone: They have gone.. write: written: I have written.."
          rows={[["finish", "finished: She has finished."], ["eat", "eaten: He has eaten."], ["go", "gone: They have gone."], ["write", "written: I have written."]]}
        />
        <Worked
          title="Form the present perfect"
          steps={[
            <>Use has with she: She has seen the film.</>,
            <>Use have with they: They have seen the film.</>,
          ]}
        />
        <Mistake>Using the simple past after has. Write He has eaten, not He has ate.</Mistake>
      </>,
    ),
  },
  {
    title: "Choosing the tense",
    content: slide(
      <>
        <Rule>Look at the time words to choose the tense. Now and at the moment point to the present continuous. A past time with something else happening, such as when I phoned, points to the past continuous. A future time with something in progress, such as tomorrow at ten, points to the future continuous. Already, just and yet point to the present perfect.</Rule>
        <KeyTable
          title="Time clues"
          head={["Clue", "Tense"]}
          aria="Time clues. now, at the moment: present continuous. when I phoned, while: past continuous. tomorrow at ten: future continuous. already, just, yet: present perfect."
          rows={[["now, at the moment", "present continuous"], ["when I phoned, while", "past continuous"], ["tomorrow at ten", "future continuous"], ["already, just, yet", "present perfect"]]}
        />
        <Worked
          title="Choose a tense"
          steps={[
            <>We are working now: now points to the present continuous.</>,
            <>They have already left: already points to the present perfect.</>,
          ]}
        />
        <Mistake>Ignoring the time word. The time word helps you to choose the tense.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which auxiliary verb goes with she in the present perfect?</>,
          <>What is the past participle of eat?</>,
          <>What ending does the main verb take in a continuous tense?</>,
          <>Which tense uses will be plus ing?</>,
        ]}
        answers={[
          <>Has.</>,
          <>Eaten.</>,
          <>Ing.</>,
          <>The future continuous.</>,
        ]}
      />,
    ),
  },
];
