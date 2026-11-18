import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as p from '@/components/diagrams/english/paper1';

// Numbers come from paper1.ts (tested in paper1.test.ts and g12EngPaper1.test.ts). Every passage and sentence is an original teaching text.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Fact and opinion, direct and implied meaning',
    content: slide(
      <>
        <Rule>A fact can be checked and proved, and an opinion is a belief or judgement that cannot be proved. Words such as &ldquo;best&rdquo;, &ldquo;should&rdquo; and &ldquo;obviously&rdquo; often signal opinion. Direct meaning is what the words say, and implied meaning is what they suggest without saying it. To find an implied meaning, look at the word choice, tone and what is left unsaid.</Rule>
        <InfoTable
          cols={[{ title: 'Statement', w: 52 }, { title: 'Type', w: 18 }, { title: 'Why', w: 30 }]}
          rows={[
            ['The school has 600 learners.', 'fact', 'can be counted'],
            ['This is the best school in town.', 'opinion', 'a judgement'],
            ['Only a fool would miss the match.', 'opinion', 'insulting, emotive'],
            ['Entry costs R20.', 'fact', 'can be checked'],
          ]}
          aria="A table of statements. The school has 600 learners: fact, it can be counted. This is the best school in town: opinion, a judgement. Only a fool would miss the match: opinion, insulting and emotive. Entry costs R20: fact, it can be checked."
        />
        <Worked
          title="Separate fact from opinion"
          steps={[
            '"The new bus service is the most reliable in the country." This is an opinion: "most reliable" is a judgement.',
            '"The new bus service started in March." This is a fact that can be checked.',
            'Implied meaning: "He finally arrived" suggests that he was late, although the word late is not used.',
          ]}
        />
        <Mistake>Treating a statement with a number as a fact. &ldquo;Everyone knows that 90% of drivers are careless&rdquo; is an opinion presented as fact.</Mistake>
      </>,
    ),
  },
  {
    title: 'Denotation and connotation',
    content: slide(
      <>
        <Rule>The denotation of a word is its dictionary meaning, and the connotation is the feeling or association that it carries. &ldquo;Home&rdquo; denotes a place to live and connotes warmth and safety. A writer chooses words with positive or negative connotations to shape how you feel: &ldquo;slim&rdquo; sounds positive, &ldquo;skinny&rdquo; negative, and &ldquo;thin&rdquo; neutral, although all describe the same body.</Rule>
        <InfoTable
          cols={[{ title: 'Neutral', w: 30 }, { title: 'Positive', w: 34 }, { title: 'Negative', w: 36 }]}
          rows={[
            ['thin', 'slim', 'skinny'],
            ['stubborn', 'determined', 'pig-headed'],
            ['cheap', 'economical', 'stingy'],
            ['old', 'experienced', 'ancient'],
          ]}
          aria="A table of words by connotation. Neutral thin: positive slim, negative skinny. Neutral stubborn: positive determined, negative pig-headed. Neutral cheap: positive economical, negative stingy. Neutral old: positive experienced, negative ancient."
        />
        <Worked
          title="Explain the effect of a word"
          steps={[
            '"The protesters mobbed the gate." The word mobbed has a negative connotation of disorder.',
            '"The crowd gathered at the gate." Gathered is neutral.',
            'The writer who chose mobbed wants you to feel that the protest was frightening.',
          ]}
        />
        <Mistake>Giving the dictionary meaning when asked for the connotation. The connotation is the feeling that the word suggests.</Mistake>
      </>,
    ),
  },
  {
    title: 'Emotive and manipulative language',
    content: slide(
      <>
        <Rule>Emotive language uses strong words to make you feel something. Manipulative language tries to steer your opinion, for example with loaded questions, exaggeration, appeals to fear, flattery and slogans that leave out the facts. A reader who spots these devices can ask: who wants me to feel this, and what is left out?</Rule>
        <InfoTable
          cols={[{ title: 'Device', w: 28 }, { title: 'Example', w: 44 }, { title: 'Aim', w: 28 }]}
          rows={[
            ['Emotive word', 'a heartbreaking failure', 'stir feeling'],
            ['Appeal to fear', 'Do you want your family at risk?', 'frighten'],
            ['Flattery', 'A smart shopper like you', 'please the reader'],
            ['Loaded question', 'Why do you still waste money?', 'assumes guilt'],
          ]}
          aria="A table of manipulative devices. Emotive word: a heartbreaking failure, to stir feeling. Appeal to fear: do you want your family at risk, to frighten. Flattery: a smart shopper like you, to please the reader. Loaded question: why do you still waste money, which assumes guilt."
        />
        <Worked
          title="Spot the device"
          steps={[
            '"Don\'t let your children walk home in the dark. Buy our alarm today." The writer appeals to fear.',
            '"Savvy shoppers choose Brand X." The writer flatters you.',
            'Ask what is missing: the advert does not give the price or the facts.',
          ]}
        />
        <Mistake>Calling all strong language manipulation. Emotive language can be honest; it becomes manipulative when it hides facts or steers you unfairly.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bias, stereotyping and prejudice',
    content: slide(
      <>
        <Rule>Bias is a one-sided view, prejudice is an unfair opinion formed without evidence, and a stereotype is a fixed, oversimplified idea about a group. They show in word choice, in the examples that are chosen, in what is included or left out, and in whose voice is heard. Discrimination is unfair treatment that follows from prejudice. In an answer, quote the words that show bias and explain the effect.</Rule>
        <InfoTable
          cols={[{ title: 'Term', w: 26 }, { title: 'Meaning', w: 40 }, { title: 'Example', w: 34 }]}
          rows={[
            ['Bias', 'a one-sided view', 'only one side quoted'],
            ['Prejudice', 'an unfair opinion\nwithout evidence', 'Teenagers are lazy.'],
            ['Stereotype', 'a fixed idea about a group', 'All drivers of one\nbrand are reckless.'],
            ['Discrimination', 'unfair treatment', 'refusing a job'],
          ]}
          aria="A table of terms. Bias: a one-sided view, such as quoting only one side. Prejudice: an unfair opinion without evidence, such as teenagers are lazy. Stereotype: a fixed idea about a group. Discrimination: unfair treatment, such as refusing a job."
        />
        <Worked
          title="Show the bias"
          steps={[
            'A report quotes five owners of a shop and no customers: the selection of voices is biased.',
            '"Young people today have no respect" is a stereotype because it describes all young people in one way.',
            'Explain the effect: the reader may accept the unfair idea without evidence.',
          ]}
        />
        <Mistake>Saying that bias means that the writer is lying. A text can be accurate in its facts and still be one-sided in what it chooses to show.</Mistake>
      </>,
    ),
  },
  {
    title: 'Language, power, selection and purpose',
    content: slide(
      <>
        <Rule>Language and power are linked: those who control language can shape what people believe, for example in political speeches, news reports and advertisements. Selection and omission change meaning, because what a writer includes or leaves out steers the reader. Always ask about the writer&rsquo;s purpose, the audience, and the social and political background of the text before you judge it.</Rule>
        <InfoTable
          cols={[{ title: 'Ask', w: 30 }, { title: 'Why', w: 70 }]}
          rows={[
            ['Who wrote it?', 'The writer’s position shapes the message'],
            ['For whom?', 'The audience decides tone and word choice'],
            ['What is left out?', 'Omissions steer the reader'],
            ['What is the purpose?', 'To inform, persuade, entertain or sell'],
          ]}
          aria="A table of critical questions. Who wrote it: the writer's position shapes the message. For whom: the audience decides tone and word choice. What is left out: omissions steer the reader. What is the purpose: to inform, persuade, entertain or sell."
        />
        <Worked
          title="Read critically"
          steps={[
            'A council newsletter says that "services have been improved" and gives no figures: the purpose is to persuade, and the facts are left out.',
            'A headline uses the word "chaos" for a queue: the choice shapes how you see the event.',
            'Before you accept a text, ask who benefits from your belief.',
          ]}
        />
        <Mistake>Judging a text only on what it says. Also consider what it leaves out and who wrote it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Is &ldquo;This is the best bakery in town&rdquo; a fact or an opinion?</>,
          <>What is the difference between denotation and connotation?</>,
          <>Name one manipulative device that advertisers use.</>,
          <>What is a stereotype?</>,
        ]}
        answers={[
          <>An opinion, because &ldquo;best&rdquo; is a judgement.</>,
          <>Denotation is the dictionary meaning and connotation is the feeling or association.</>,
          <>For example an appeal to fear or flattery.</>,
          <>A fixed, oversimplified idea about a group.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which statement is a fact?",
    options: ["This library is the best.", "Everyone loves this library.", "The library closes at 17:00.", "The library should be bigger."],
    answer: "The library closes at 17:00.",
    explanation: "A fact can be checked.",
  },
  {
    prompt: "Which statement is an opinion?",
    options: ["This pizza is the best in town.", "The pizza costs R60 at the shop.", "The shop opens at 09:00 each day.", "The pizza is cut in eight slices."],
    answer: "This pizza is the best in town.",
    explanation: "Best is a judgement, not a fact that can be checked.",
  },
  {
    prompt: "Which word often signals an opinion?",
    options: ["Tuesday", "Seven", "Kilometre", "Obviously"],
    answer: "Obviously",
    explanation: "Words such as obviously and should signal opinion.",
  },
  {
    prompt: "What is implied meaning?",
    options: ["What the dictionary says", "What a text suggests, unsaid", "What the title of it says", "The number of its words"],
    answer: "What a text suggests, unsaid",
    explanation: "You infer it from word choice and tone.",
  },
  {
    prompt: "What is denotation?",
    options: ["The feeling a word suggests", "The dictionary meaning of a word", "The length of a word", "The sound of a word"],
    answer: "The dictionary meaning of a word",
    explanation: "Denotation is the literal meaning.",
  },
  {
    prompt: "What is connotation?",
    options: ["The dictionary meaning of it", "The spelling of the word", "The page number of it", "The feeling a word carries"],
    answer: "The feeling a word carries",
    explanation: "Words carry positive or negative feelings.",
  },
  {
    prompt: "Which word has the most negative connotation?",
    options: ["Stingy", "Thrifty", "Economical", "Careful"],
    answer: "Stingy",
    explanation: "All mean careful with money, but stingy is negative.",
  },
  {
    prompt: "Which word has a positive connotation?",
    options: ["Pig-headed", "Stubborn", "Determined", "Bossy"],
    answer: "Determined",
    explanation: "Determined sounds admirable.",
  },
  {
    prompt: "Which sentence uses an appeal to fear?",
    options: ["Our alarm costs R500 in the shops.", "Our alarm is white in colour.", "Our alarm is sold in many shops.", "Without our alarm, you are unsafe."],
    answer: "Without our alarm, you are unsafe.",
    explanation: "It frightens the reader into buying.",
  },
  {
    prompt: "What is flattery in an advert?",
    options: ["Giving the price of the goods", "Praising the reader to win favour", "Listing all of the ingredients", "Showing the shop address"],
    answer: "Praising the reader to win favour",
    explanation: "It pleases the reader.",
  },
  {
    prompt: "What is a stereotype?",
    options: ["A fixed, oversimplified idea of a group", "A true fact about one person", "A picture in a book of art", "A kind of poem with rhyme"],
    answer: "A fixed, oversimplified idea of a group",
    explanation: "Stereotypes ignore differences.",
  },
  {
    prompt: "What is bias?",
    options: ["A balanced report", "A list of facts", "A one-sided view", "A kind of punctuation"],
    answer: "A one-sided view",
    explanation: "Bias shows in what is chosen or left out.",
  },
  {
    prompt: "A news report quotes only the shop owners about a protest. What is this?",
    options: ["Balanced reporting", "A direct quotation of everyone", "Selection that shows bias", "A neutral summary"],
    answer: "Selection that shows bias",
    explanation: "The voices of others are left out.",
  },
  {
    prompt: "Why should you ask what a text leaves out?",
    options: ["Omissions can steer the reader", "Texts never leave anything out", "Omissions do not matter", "Only titles matter"],
    answer: "Omissions can steer the reader",
    explanation: "What is left out shapes meaning.",
  },
];

const P1CriticalLanguage = () => (
  <CapsSubjectTopic
    title="Critical Language Awareness"
    subtitle="Fact and opinion, denotation and connotation, emotive and manipulative language, bias and stereotyping, language and power"
    learnSteps={learnSteps}
    task="gr12-p1-critical-language-t3"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={12}
  />
);

export default P1CriticalLanguage;
