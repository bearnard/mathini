import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { BrochureLayout, ClueCards } from '../../../../../components/diagrams/english/EnglishLayoutPictures';
import { strategyFor } from '../../../../../components/diagrams/english/lessonSkills';

// The strategy names shown come from lessonSkills.ts (tested).
const skim = strategyFor('gist');
const scan = strategyFor('detail');
const infer = strategyFor('implied');

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Purpose and audience',
    content: slide(
      <>
        <Rule>A brochure is a short text that informs or persuades a target audience. Before you read it, ask who it is for and what the reader should do.</Rule>
        <Worked
          title="A reading-club brochure"
          steps={[
            <>Heading: <em>Join the Holiday Reading Club!</em> The heading invites, so it wants to persuade.</>,
            <>Details: days, times and what to bring. These inform.</>,
            <>Audience: the pictures and simple words suggest primary-school children and their parents.</>,
            <>Action: the last line asks readers to sign up at the library desk.</>,
          ]}
        />
        <Mistake>Saying a brochure is for &quot;everyone&quot;. A brochure is built for one target audience, and its words, pictures and layout are chosen for that group.</Mistake>
      </>,
    ),
  },
  {
    title: 'Layout: headings, visuals and white space',
    content: slide(
      <>
        <Rule>Headings and subheadings help readers find key points quickly. Visuals support the message. White space keeps the page uncluttered and easy to read.</Rule>
        <BrochureLayout aria="A brochure page drawn as boxes. A heading across the top, an image on the left with a short text block beside it, a subhead with text below, an empty area marked as white space, and a call to action at the bottom." />
        <Worked
          title="Reading the layout"
          steps={[
            <>The heading at the top tells you the topic at a glance.</>,
            <>Subheadings split the text into short sections you can jump between.</>,
            <>The empty gaps are white space: they balance the layout and improve readability.</>,
            <>The call to action at the bottom tells the reader what to do next.</>,
          ]}
        />
        <Mistake>Thinking white space is wasted. Fill every gap and the page becomes crowded, and readers miss the key details.</Mistake>
      </>,
    ),
  },
  {
    title: 'Skim, scan and infer',
    content: slide(
      <>
        <Rule>Skim to get the gist fast. Scan to locate a specific detail. Infer by using clues to reach a reasonable conclusion.</Rule>
        <ClueCards
          cards={[
            { title: 'Skim', clue: 'Headings and pictures: what is it about?', color: '#818cf8' },
            { title: 'Scan', clue: 'Hunt for a time, price or phone number.', color: '#34d399' },
            { title: 'Infer', clue: 'Clues point to a conclusion the text never states.', color: '#fbbf24' },
          ]}
          aria="Three cards. Skim: headings and pictures show what it is about. Scan: hunt for a time, price or phone number. Infer: clues point to a conclusion the text does not state."
        />
        <Worked
          title="A tourist brochure"
          steps={[
            <>Question: <em>What is it about?</em> You {skim}: headings and photos show it is about a town.</>,
            <>Question: <em>When does the museum open?</em> You {scan}: look for the time.</>,
            <>Notice: it stresses local sights. You {infer}: it probably targets tourists.</>,
          ]}
        />
        <Mistake>Treating a guess as an inference. &quot;The brochure has three paragraphs&quot; is a fact you can see. &quot;It probably targets tourists, as it stresses local sights&quot; is an inference because it uses clues.</Mistake>
      </>,
    ),
  },
  {
    title: 'Match language and images to the audience',
    content: slide(
      <>
        <Rule>Language should suit the audience. Visuals reinforce ideas and influence how readers respond.</Rule>
        <Worked
          title="Language and image choices"
          steps={[
            <>A brochure for new parents needs clear practical language: short sentences, no jargon.</>,
            <>Complex academic words or slang would make the key information harder to understand.</>,
            <>An image of happy learners in a library supports a positive message about reading.</>,
            <>So audience, message and design should all point the same way.</>,
          ]}
        />
        <Mistake>Treating pictures as decoration. A photo, colour or bold word is a choice that shapes what the reader feels, so ask what each one is meant to do.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Why does a tourism office hand out brochures?</>,
          <>Which strategy do you use to find the price of a ticket?</>,
          <>Which is an inference: &quot;The brochure has two photos&quot; or &quot;The brochure is probably for tourists&quot;?</>,
          <>Why is white space useful?</>,
        ]}
        answers={[
          <>To inform or persuade a target audience.</>,
          <>{scan[0].toUpperCase() + scan.slice(1)}: it finds a specific detail.</>,
          <>&quot;Probably for tourists&quot; is the inference, because it is reasoned from clues.</>,
          <>It improves readability and balances the layout.</>,
        ]}
      />,
    ),
  },
];

