import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a drama review does",
    content: slide(
      <>
        <Rule>A drama review tells readers about a play that you have seen and gives your opinion of it. It does not retell the whole story. A review has a title, details of the play (name, place and date), a short summary of the plot, comments on the acting and the staging, your opinion with reasons, and a recommendation to the reader.</Rule>
        <KeyTable
          title={"Parts of a drama review"}
          head={["Part", "What it tells the reader"]}
          aria={"Parts of a drama review. details: the name, the place and the date. summary: a short outline, without the ending. comments: the acting, the set, the costumes, the sound. opinion: what you think and why. recommendation: whether others should see it."}
          rows={[["details", "the name, the place and the date"], ["summary", "a short outline, without the ending"], ["comments", "the acting, the set, the costumes, the sound"], ["opinion", "what you think and why"], ["recommendation", "whether others should see it"]]}
        />
        <Worked
          title={"Plan a review"}
          steps={[
            <>Title: A Night at the Market, Hillcrest Hall, 12 May.</>,
            <>Summary: Two friends try to sell their goods on a busy night.</>,
          ]}
        />
        <Mistake>Giving away the ending. A review should make readers want to see the play.</Mistake>
      </>,
    ),
  },
  {
    title: "Describing acting and staging",
    content: slide(
      <>
        <Rule>Comment on how the actors speak and move, and whether they made their characters believable. Comment on the staging: the set, costumes, lighting and sound. Use drama words such as dialogue, scene, character, set and props. Give an example for each comment: The actor playing the shopkeeper used a loud, quick voice that made him funny.</Rule>
        <KeyTable
          title={"What to comment on"}
          head={["Area", "Example comment"]}
          aria={"What to comment on. acting: The shopkeeper was funny and believable.. set: The painted stalls looked like a real market.. costumes: The bright costumes showed each character.. lighting and sound: The drum beats built tension.."}
          rows={[["acting", "The shopkeeper was funny and believable."], ["set", "The painted stalls looked like a real market."], ["costumes", "The bright costumes showed each character."], ["lighting and sound", "The drum beats built tension."]]}
        />
        <Worked
          title={"Support a comment"}
          steps={[
            <>Comment: The acting was good.</>,
            <>Better: The acting was good because the shopkeeper used a loud, quick voice that made him funny.</>,
          ]}
        />
        <Mistake>Writing only that it was good or bad. Give a reason and an example.</Mistake>
      </>,
    ),
  },
  {
    title: "Opinion and language",
    content: slide(
      <>
        <Rule>A review states an opinion and supports it. Use words such as I think, in my opinion and because. Write in the present tense for the story (the friends sell goods) and in the past tense for what you saw at the performance. Link your ideas with conjunctions such as but, although and because. Keep a balance: mention what worked well and what could be improved.</Rule>
        <KeyTable
          title={"Language of a review"}
          head={["Feature", "Example"]}
          aria={"Language of a review. opinion words: In my opinion, the play was lively.. reasons: because the actors spoke clearly. contrast: Although the set was simple, it worked well.. balance: The ending was slow, but the acting was strong.."}
          rows={[["opinion words", "In my opinion, the play was lively."], ["reasons", "because the actors spoke clearly"], ["contrast", "Although the set was simple, it worked well."], ["balance", "The ending was slow, but the acting was strong."]]}
        />
        <Worked
          title={"Balance a comment"}
          steps={[
            <>One-sided: The play was perfect.</>,
            <>Balanced: The play was lively, although the ending was slow.</>,
          ]}
        />
        <Mistake>Writing a review that only praises. A balanced review is more useful to the reader.</Mistake>
      </>,
    ),
  },
  {
    title: "Structure and finishing your review",
    content: slide(
      <>
        <Rule>Organise your review in paragraphs. Each paragraph has a topic sentence and supporting ideas in a logical order: first the details and summary, then the acting, then the staging, then your opinion and recommendation. Follow the writing process: plan, draft, revise, edit and proof-read. Finish with a clear recommendation: I recommend this play to anyone who enjoys comedy.</Rule>
        <KeyTable
          title={"Order of a review"}
          head={["Paragraph", "Content"]}
          aria={"Order of a review. 1: details and summary of the plot. 2: comments on the acting. 3: comments on the staging. 4: opinion and recommendation."}
          rows={[["1", "details and summary of the plot"], ["2", "comments on the acting"], ["3", "comments on the staging"], ["4", "opinion and recommendation"]]}
        />
        <Worked
          title={"Write the ending"}
          steps={[
            <>Weak: That is all I have to say.</>,
            <>Strong: I recommend this play to anyone who enjoys a good laugh.</>,
          ]}
        />
        <Mistake>Ending without a recommendation. Tell the reader whether to go.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Should a review give away the ending?</>,
          <>What should you give for each comment?</>,
          <>What does the last paragraph give?</>,
          <>Which tense do you use for the story of the play?</>,
        ]}
        answers={[
          <>No.</>,
          <>A reason and an example.</>,
          <>Your opinion and a recommendation.</>,
          <>The present tense.</>,
        ]}
      />,
    ),
  },
];
