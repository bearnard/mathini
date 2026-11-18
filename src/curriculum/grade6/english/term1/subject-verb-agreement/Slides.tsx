import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Subject and verb",
    content: slide(
      <>
        <Rule>Every sentence has a subject and a verb. The subject is the person or thing that does the action or is described. The verb is the action word or the state word. In The dog barks, the subject is The dog and the verb is barks.</Rule>
        <KeyTable
          title="Subject and verb"
          head={["Sentence", "Subject and verb"]}
          aria="Subject and verb. The dog barks.: subject: The dog, verb: barks. My friends play soccer.: subject: My friends, verb: play. She is happy.: subject: She, verb: is."
          rows={[["The dog barks.", "subject: The dog, verb: barks"], ["My friends play soccer.", "subject: My friends, verb: play"], ["She is happy.", "subject: She, verb: is"]]}
        />
        <Worked
          title="Find the subject"
          steps={[
            <>Ask who or what does the action.</>,
            <>In The tall girl kicked the ball, the tall girl kicked, so the subject is The tall girl.</>,
          ]}
        />
        <Mistake>Taking the first word as the subject. The subject can be more than one word.</Mistake>
      </>,
    ),
  },
  {
    title: "Subject-verb agreement",
    content: slide(
      <>
        <Rule>The verb must agree with the subject. A singular subject takes a singular verb: The girl sings. A plural subject takes a plural verb: The girls sing. Use he, she and it with the s form (he sings), and use I, you, we and they with the plain form (they sing). A subject joined by and is plural. The verb to be changes: I am, you are, he is, we are, they are.</Rule>
        <KeyTable
          title="Agreement in the simple present"
          head={["Subject", "Verb"]}
          aria="Agreement in the simple present. I: sing, am. he, she, it: sings, is. you, we, they: sing, are. Thabo and Sipho: play, are."
          rows={[["I", "sing, am"], ["he, she, it", "sings, is"], ["you, we, they", "sing, are"], ["Thabo and Sipho", "play, are"]]}
        />
        <Worked
          title="Choose the verb"
          steps={[
            <>The boys (plural) play soccer.</>,
            <>The boy (singular) plays soccer.</>,
            <>Thabo and Sipho (plural) are friends.</>,
          ]}
        />
        <Mistake>Matching the verb to the noun that is nearest. Match it to the subject.</Mistake>
      </>,
    ),
  },
  {
    title: "Simple present, past and future",
    content: slide(
      <>
        <Rule>The simple present tense is for habits and facts: She walks to school. The simple past tense is for actions that are finished: She walked to school yesterday. Regular verbs add ed. Some verbs are irregular: go becomes went and eat becomes ate. The simple future tense uses will plus the plain verb: She will walk to school tomorrow.</Rule>
        <KeyTable
          title="Three simple tenses"
          head={["Tense", "Example"]}
          aria="Three simple tenses. simple present: We play every Friday.. simple past: We played last Friday.. simple future: We will play next Friday.. irregular past: go: went, eat: ate, see: saw."
          rows={[["simple present", "We play every Friday."], ["simple past", "We played last Friday."], ["simple future", "We will play next Friday."], ["irregular past", "go: went, eat: ate, see: saw"]]}
        />
        <Worked
          title="Change the tense"
          steps={[
            <>Present: Lerato reads a book.</>,
            <>Past: Lerato read a book yesterday.</>,
            <>Future: Lerato will read a book tomorrow.</>,
          ]}
        />
        <Mistake>Writing goed or eated. Learn the irregular forms: went and ate.</Mistake>
      </>,
    ),
  },
  {
    title: "Checking your sentences",
    content: slide(
      <>
        <Rule>To check a sentence, first find the subject. Then decide whether it is singular or plural and check that the verb agrees with it. Last, look for time words: every day and always point to the present, yesterday and last week point to the past, and tomorrow and next week point to the future.</Rule>
        <KeyTable
          title="Time words"
          head={["Time word", "Tense"]}
          aria="Time words. every day: simple present. yesterday: simple past. last week: simple past. tomorrow: simple future."
          rows={[["every day", "simple present"], ["yesterday", "simple past"], ["last week", "simple past"], ["tomorrow", "simple future"]]}
        />
        <Worked
          title="Check a sentence"
          steps={[
            <>My brother go to school by bus. The subject, My brother, is singular, so the verb must be goes.</>,
            <>Corrected: My brother goes to school by bus.</>,
          ]}
        />
        <Mistake>Changing the verb but forgetting the time word. The time word and the verb must match.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which verb agrees: The girls ___ (sing or sings)?</>,
          <>Which verb is the past tense of eat?</>,
          <>Which word shows the future tense?</>,
          <>What is the subject of Mpho kicked the ball?</>,
        ]}
        answers={[
          <>Sing.</>,
          <>Ate.</>,
          <>Will.</>,
          <>Mpho.</>,
        ]}
      />,
    ),
  },
];
