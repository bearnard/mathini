import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Finite and non-finite verbs",
    content: slide(
      <>
        <Rule>A finite verb has a tense and agrees with its subject: Thabo wants to swim. Wants is finite. A non-finite verb does not show tense or agree with a subject. Non-finite forms are the infinitive (to swim), the present participle (swimming), the past participle (swum) and the gerund. Every clause has a finite verb.</Rule>
        <KeyTable
          title={"Finite and non-finite"}
          head={["Kind", "Example"]}
          aria={"Finite and non-finite. finite: Thabo wants to swim.. infinitive (non-finite): to swim. present participle: swimming. past participle: swum."}
          rows={[["finite", "Thabo wants to swim."], ["infinitive (non-finite)", "to swim"], ["present participle", "swimming"], ["past participle", "swum"]]}
        />
        <Worked
          title={"Find the finite verb"}
          steps={[
            <>In They enjoyed swimming, enjoyed has a tense, so it is the finite verb.</>,
            <>Swimming does not show a tense.</>,
          ]}
        />
        <Mistake>Taking the first verb form as the finite verb. Check which verb shows the tense.</Mistake>
      </>,
    ),
  },
  {
    title: "Auxiliary verbs",
    content: slide(
      <>
        <Rule>An auxiliary verb helps the main verb to show tense, voice or mood. The main auxiliary verbs are be (am, is, are, was, were), have (has, have, had) and do (does, did), together with will, can, may and must. In She has finished, has is the auxiliary verb and finished is the main verb.</Rule>
        <KeyTable
          title={"Auxiliary verbs"}
          head={["Auxiliary", "Example"]}
          aria={"Auxiliary verbs. am, is, are, was, were: He is working.. has, have, had: They have gone.. do, does, did: Did you see it?. will, can, may, must: We will help.."}
          rows={[["am, is, are, was, were", "He is working."], ["has, have, had", "They have gone."], ["do, does, did", "Did you see it?"], ["will, can, may, must", "We will help."]]}
        />
        <Worked
          title={"Find the auxiliary verb"}
          steps={[
            <>In The tests were marked, were is the auxiliary verb.</>,
            <>Marked is the main verb.</>,
          ]}
        />
        <Mistake>Calling the main verb the auxiliary verb. The auxiliary verb comes before the main verb.</Mistake>
      </>,
    ),
  },
  {
    title: "Participles",
    content: slide(
      <>
        <Rule>The present participle ends in ing: running, singing. The past participle of regular verbs ends in ed: walked. Irregular verbs have special past participles: run, run; break, broken; sing, sung; eat, eaten. Participles are used with auxiliary verbs (is running, has broken) and can describe nouns (a broken window).</Rule>
        <KeyTable
          title={"Participles"}
          head={["Verb", "Present and past participle"]}
          aria={"Participles. run: running, run. break: breaking, broken. sing: singing, sung. eat: eating, eaten."}
          rows={[["run", "running, run"], ["break", "breaking, broken"], ["sing", "singing, sung"], ["eat", "eating, eaten"]]}
        />
        <Worked
          title={"Form the participle"}
          steps={[
            <>She has ___ her lunch: use the past participle eaten.</>,
            <>A broken window is a window that has been broken.</>,
          ]}
        />
        <Mistake>Using the simple past after has. Write has broken, not has broke.</Mistake>
      </>,
    ),
  },
  {
    title: "Gerunds",
    content: slide(
      <>
        <Rule>A gerund is the ing form of a verb that works as a noun. Swimming is good exercise (gerund as the subject). She enjoys singing (gerund as the object). A gerund is not part of a verb group: in She is singing, singing is a present participle. If the word names an activity and can be replaced by a noun, it is a gerund.</Rule>
        <KeyTable
          title={"Gerund or participle"}
          head={["Sentence", "Form"]}
          aria={"Gerund or participle. Reading improves your vocabulary.: gerund (subject). She enjoys singing.: gerund (object). She is singing.: present participle. I like to read.: infinitive."}
          rows={[["Reading improves your vocabulary.", "gerund (subject)"], ["She enjoys singing.", "gerund (object)"], ["She is singing.", "present participle"], ["I like to read.", "infinitive"]]}
        />
        <Worked
          title={"Tell them apart"}
          steps={[
            <>Swimming is fun: you can replace swimming with a noun, such as the sport, so it is a gerund.</>,
            <>He is swimming now: it is part of the verb group, so it is a participle.</>,
          ]}
        />
        <Mistake>Calling every ing word a gerund. A gerund works as a noun.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which verb in They enjoyed swimming is finite?</>,
          <>What is the past participle of break?</>,
          <>What is an ing form that works as a noun called?</>,
          <>Which verb helps the main verb?</>,
        ]}
        answers={[
          <>Enjoyed.</>,
          <>Broken.</>,
          <>A gerund.</>,
          <>The auxiliary verb.</>,
        ]}
      />,
    ),
  },
];
