import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a character sketch is",
    content: slide(
      <>
        <Rule>A character sketch is a short piece of writing that describes a person so that the reader can picture them and understand what they are like. It can be about a real person, such as a grandparent, or a character from a story. It tells how the person looks, how they behave and what they are like inside.</Rule>
        <KeyTable
          title="Parts of a sketch"
          head={["Part", "What it tells"]}
          aria="Parts of a sketch. Appearance: How the person looks. Behaviour: What they do and say. Personality: What they are like, such as kind or shy. Feelings: What matters to them. Evidence: An example that shows the trait."
          rows={[["Appearance", "How the person looks"], ["Behaviour", "What they do and say"], ["Personality", "What they are like, such as kind or shy"], ["Feelings", "What matters to them"], ["Evidence", "An example that shows the trait"]]}
        />
        <Worked
          steps={[
            <>A sketch of Gogo describes her grey hair, her slow walk and her warm smile.</>,
            <>It also tells how she shares her food with the neighbours, which shows that she is generous.</>,
          ]}
        />
        <Mistake>Only listing looks. A sketch should also show personality.</Mistake>
      </>,
    ),
  },
  {
    title: "Show, do not only tell",
    content: slide(
      <>
        <Rule>Instead of saying that a person is kind, show a kind action. This is more interesting and more convincing. Use exact adjectives and strong verbs, and give an example for each trait. Use the present tense for a person you know now, or the past tense for a story character.</Rule>
        <KeyTable
          title="Telling and showing"
          head={["Telling", "Showing"]}
          aria="Telling and showing. She is kind: She gave her lunch to a hungry friend. He is shy: He looked at his shoes when people spoke to him. She is clever: She solved the puzzle in two minutes. He is angry: He slammed the door and clenched his fists. She is tidy: Her desk is always neat, with the pens in a row."
          rows={[["She is kind", "She gave her lunch to a hungry friend"], ["He is shy", "He looked at his shoes when people spoke to him"], ["She is clever", "She solved the puzzle in two minutes"], ["He is angry", "He slammed the door and clenched his fists"], ["She is tidy", "Her desk is always neat, with the pens in a row"]]}
        />
        <Worked
          steps={[
            <>You write that Gogo hums while she cooks, which shows that she is happy.</>,
            <>You choose strong verbs such as shuffled and beamed.</>,
          ]}
        />
        <Mistake>Using only the word nice. Choose exact adjectives, such as generous, cheerful or patient.</Mistake>
      </>,
    ),
  },
  {
    title: "Organise your sketch",
    content: slide(
      <>
        <Rule>Start with a sentence that names the person and gives a first impression. Then use one paragraph for appearance and one paragraph for personality, with an example. Finish with a sentence that shows what you feel about the person. Write in the third person.</Rule>
        <KeyTable
          title="Planning paragraphs"
          head={["Paragraph", "Content"]}
          aria="Planning paragraphs. Introduction: Who the person is and a first impression. Appearance: Face, height, clothes, how they move. Personality: Two traits, each with an example. Conclusion: What the person means to you. Tense: Present for a real person you know."
          rows={[["Introduction", "Who the person is and a first impression"], ["Appearance", "Face, height, clothes, how they move"], ["Personality", "Two traits, each with an example"], ["Conclusion", "What the person means to you"], ["Tense", "Present for a real person you know"]]}
        />
        <ModelText label="A short model sketch" note="An original model written for this lesson.">
          <p>My grandmother, Gogo Nomsa, is the heart of our family.</p>
          <p>She is small, with grey hair, a round face and a warm smile. She walks slowly, and she hums while she cooks.</p>
          <p>Gogo is generous. Every Sunday she shares her food with the neighbours, even when there is only a little to spare.</p>
          <p>I love Gogo because she makes everyone feel welcome.</p>
        </ModelText>
        <Worked
          steps={[
            <>Introduction: My grandmother, Gogo Nomsa, is the heart of our family.</>,
            <>Personality paragraph: She is generous. Every Sunday she shares her food with the neighbours.</>,
          ]}
        />
        <Mistake>Jumping between ideas. Keep each paragraph about one idea.</Mistake>
      </>,
    ),
  },
  {
    title: "Check your sketch",
    content: slide(
      <>
        <Rule>Read your sketch and ask: can I picture the person? Do I show at least two traits with examples? Are my adjectives exact? Is the tense consistent? Check your spelling and punctuation, and make sure each paragraph begins on a new line.</Rule>
        <KeyTable
          title="Checklist"
          head={["Check", "Why"]}
          aria="Checklist. Picture: The reader can see the person. Two traits with examples: Shows the personality. Exact adjectives: Avoids nice and good. Consistent tense: Keeps the sketch steady. Paragraphs: Each one has one idea."
          rows={[["Picture", "The reader can see the person"], ["Two traits with examples", "Shows the personality"], ["Exact adjectives", "Avoids nice and good"], ["Consistent tense", "Keeps the sketch steady"], ["Paragraphs", "Each one has one idea"]]}
        />
        <Worked
          steps={[
            <>You change nice to patient and add an example of Gogo waiting for you after school.</>,
            <>You check that all the verbs are in the present tense.</>,
          ]}
        />
        <Mistake>Using different tenses. Choose present or past and keep to it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does a character sketch describe?</>,
          <>Give one trait.</>,
          <>What does showing mean?</>,
          <>Which person do you use?</>,
        ]}
        answers={[
          <>A person, so that the reader can picture them.</>,
          <>Kind, shy, generous or clever.</>,
          <>Using an action or an example.</>,
          <>The third person.</>,
        ]}
      />,
    ),
  },
];
