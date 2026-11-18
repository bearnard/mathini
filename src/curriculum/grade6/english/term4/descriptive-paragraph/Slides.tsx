import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a descriptive paragraph does",
    content: slide(
      <>
        <Rule>A descriptive paragraph uses words to paint a picture so that the reader can see, hear, smell, taste and feel what you describe. It has a topic sentence that names what you describe, supporting sentences with details and a closing sentence. You write in the present tense for a place that exists now, or in the past tense for something you remember.</Rule>
        <KeyTable
          title="Parts of a paragraph"
          head={["Part", "What it does"]}
          aria="Parts of a paragraph. Topic sentence: Names the place or thing. Details: Describe with the senses. Order: From far to near, or left to right. Figurative words: A simile makes a picture. Closing sentence: Ends the description."
          rows={[["Topic sentence", "Names the place or thing"], ["Details", "Describe with the senses"], ["Order", "From far to near, or left to right"], ["Figurative words", "A simile makes a picture"], ["Closing sentence", "Ends the description"]]}
        />
        <Worked
          steps={[
            <>Topic sentence: The market on Saturday morning is full of colour and noise.</>,
            <>Details follow: the smell of fresh bread, the shouts of the sellers and the bright fruit.</>,
          ]}
        />
        <Mistake>Writing a list of facts. A description paints a picture with details.</Mistake>
      </>,
    ),
  },
  {
    title: "Use your five senses",
    content: slide(
      <>
        <Rule>Think about what you see, hear, smell, taste and feel in the place that you describe. Each sense gives you new details. Not every sense must be used, but using several makes your paragraph rich and lively.</Rule>
        <KeyTable
          title="The five senses"
          head={["Sense", "Example detail"]}
          aria="The five senses. See: Red tomatoes in tall stacks. Hear: Sellers calling out their prices. Smell: Warm bread and wood smoke. Taste: Sweet oranges and salty chips. Touch: The rough cloth of a stall roof."
          rows={[["See", "Red tomatoes in tall stacks"], ["Hear", "Sellers calling out their prices"], ["Smell", "Warm bread and wood smoke"], ["Taste", "Sweet oranges and salty chips"], ["Touch", "The rough cloth of a stall roof"]]}
        />
        <Worked
          steps={[
            <>You close your eyes and list what you hear and smell at the market, and you add them to the paragraph.</>,
            <>The paragraph now includes more than what you see.</>,
          ]}
        />
        <Mistake>Using only the sense of sight. Add sounds, smells and other details.</Mistake>
      </>,
    ),
  },
  {
    title: "Adjectives, verbs and similes",
    content: slide(
      <>
        <Rule>Choose exact adjectives, such as crisp, golden and noisy, instead of general words such as nice. Use strong verbs, such as shouted or sizzled. A simile compares two things using like or as, for example the oranges glowed like small lanterns. Do not use too many; one or two are enough.</Rule>
        <KeyTable
          title="Making words stronger"
          head={["Weak", "Stronger"]}
          aria="Making words stronger. nice fruit: sweet, juicy fruit. said: shouted. a big crowd: a noisy, jostling crowd. looked pretty: glowed like small lanterns. walked: weaved through the crowd."
          rows={[["nice fruit", "sweet, juicy fruit"], ["said", "shouted"], ["a big crowd", "a noisy, jostling crowd"], ["looked pretty", "glowed like small lanterns"], ["walked", "weaved through the crowd"]]}
        />
        <ModelText label="A short model paragraph" note="An original model written for this lesson.">
          <p>The market on Saturday morning is full of colour and noise. Red tomatoes are stacked in tall piles, and the oranges glow like small lanterns. Sellers shout their prices above the hum of the crowd. The smell of warm bread and wood smoke drifts between the stalls. I love the market because every corner has something new to see.</p>
        </ModelText>
        <Worked
          steps={[
            <>You change a big crowd to a noisy, jostling crowd and said to shouted.</>,
            <>You add the simile the oranges glowed like small lanterns.</>,
          ]}
        />
        <Mistake>Using the same adjective again and again. Choose different, exact words.</Mistake>
      </>,
    ),
  },
  {
    title: "Check your description",
    content: slide(
      <>
        <Rule>Read your paragraph and ask whether the reader can picture the scene. Check that each sentence belongs to the topic, that you have used more than one sense and that your words are exact. Check the tense, spelling and punctuation, and make sure the closing sentence rounds it off.</Rule>
        <KeyTable
          title="Checklist"
          head={["Check", "Why"]}
          aria="Checklist. Topic sentence: Tells the reader what you describe. More than one sense: Makes it lively. Exact words: Paint a clear picture. One simile at most or two: Keeps it fresh. Closing sentence: Ends the description."
          rows={[["Topic sentence", "Tells the reader what you describe"], ["More than one sense", "Makes it lively"], ["Exact words", "Paint a clear picture"], ["One simile at most or two", "Keeps it fresh"], ["Closing sentence", "Ends the description"]]}
        />
        <Worked
          steps={[
            <>You remove a sentence about your sister because it is not about the market.</>,
            <>You check that every verb is in the present tense.</>,
          ]}
        />
        <Mistake>Adding sentences that are not about the topic. Keep every sentence on the topic.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does a descriptive paragraph do?</>,
          <>Name two senses.</>,
          <>What is a simile?</>,
          <>What does a topic sentence do?</>,
        ]}
        answers={[
          <>Paints a picture with details.</>,
          <>Sight and smell.</>,
          <>A comparison using like or as.</>,
          <>Names what you describe.</>,
        ]}
      />,
    ),
  },
];
