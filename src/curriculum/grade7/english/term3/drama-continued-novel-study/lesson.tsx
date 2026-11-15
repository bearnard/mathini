import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowSteps, ScriptSample } from '../../../../../components/diagrams/english/lessonPictures';
import type { ScriptLine } from '../../../../../components/diagrams/english/lessonPictures';

// The invented scene and story used in the slides. Tests check the answers against these.
export const script: ScriptLine[] = [
  { speaker: 'Sipho', direction: 'holding a torn page behind his back', speech: 'I did not touch your book.' },
  { speaker: 'Naledi', direction: 'stepping closer', speech: 'Then why is there ink on your hands?' },
];

export const development = [
  { title: 'Start', note: 'Selfish: keeps all the prize' },
  { title: 'Event', note: 'His team helps him win' },
  { title: 'End', note: 'Shares the prize: helpful' },
];

export const conflictToTheme = [
  { title: 'Conflict', note: 'Lerato and Pule disagree on honesty' },
  { title: 'What it shows', note: 'Pule does not trust her word' },
  { title: 'Theme', note: 'Trust is hard to rebuild' },
];

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Reading a script: dialogue and stage directions',
    content: slide(
      <>
        <Rule>A drama is written to be performed. It is made of dialogue (the words spoken) and stage directions (what the characters do and feel).</Rule>
        <ScriptSample lines={script} />
        <Worked
          title="Who says “Then why is there ink on your hands?”"
          steps={[
            <>Look for the name printed at the start of the line: <strong>Naledi</strong>.</>,
            <>Read the stage direction: she is <em>stepping closer</em>, so she is pressing Sipho for the truth.</>,
            <>In a novel there are no name labels, so use clues such as “said Naledi” and the action around the speech.</>,
          ]}
        />
        <Mistake>Skipping the brackets. Stage directions are not spoken aloud, but they show movement, mood and action on stage. Sipho hides the page, which tells us he may be lying.</Mistake>
      </>,
    ),
  },
  {
    title: 'Motivation and character development',
    content: slide(
      <>
        <Rule>Motivation is the reason a character acts in a certain way. When a character changes in a meaningful way over time, that is character development.</Rule>
        <FlowSteps steps={development} aria="Three boxes from top to bottom: Start, selfish, keeps all the prize; Event, his team helps him win; End, shares the prize, helpful." />
        <Worked
          title="Kagiso keeps the whole prize, then shares it"
          steps={[
            <>Ask “Why does he act this way?” At first he wants the prize only for himself: that is his motivation.</>,
            <>Find the event that changes him: his team helped him win.</>,
            <>He is now helpful. A change from selfish to helpful shows <strong>character development</strong>.</>,
          ]}
        />
        <Mistake>Mixing up what a character does with why. “Kagiso keeps the prize” is an action. “He wants it all for himself” is the motivation.</Mistake>
      </>,
    ),
  },
  {
    title: 'Conflict and theme',
    content: slide(
      <>
        <Rule>Conflict is a meaningful struggle or opposition: two characters disagree, or a character struggles with a hard choice. A theme is the big idea the story shows, and conflict often reveals it.</Rule>
        <FlowSteps steps={conflictToTheme} aria="Three boxes from top to bottom: Conflict, Lerato and Pule disagree on honesty; What it shows, Pule does not trust her word; Theme, trust is hard to rebuild." />
        <Worked
          title="Two friends argue about honesty"
          steps={[
            <>Find the conflict: Lerato and Pule disagree about an important decision, telling the truth.</>,
            <>Ask what the argument shows: Pule will not trust Lerato’s word.</>,
            <>Link it to a big idea: <strong>the argument about honesty reveals the theme of trust</strong>.</>,
          ]}
        />
        <Mistake>Naming a theme without proof. A theme answer must point to a specific event, such as the argument, that supports the big idea. A title, a cover picture or a long chapter does not show conflict.</Mistake>
      </>,
    ),
  },
  {
    title: 'Writing a paragraph response',
    content: slide(
      <>
        <Rule>A short paragraph response has three parts: a claim (your point), textual evidence (a detail or line from the text) and an explanation of how the evidence proves the claim.</Rule>
        <Worked
          title="Question: What theme does the argument show?"
          steps={[
            <><strong>Claim:</strong> The argument between Lerato and Pule shows the theme of trust.</>,
            <><strong>Evidence:</strong> Lerato says, “I told you the truth, so why do you not believe me?”</>,
            <><strong>Explanation:</strong> Her question shows that once Pule doubted her, their friendship became hurt and tense.</>,
          ]}
        />
        <Mistake>Copying lines with no comment, or giving an opinion with no text to support it. Evidence without explanation leaves the reader to guess your point.</Mistake>
      <div className="space-y-2">
  <p className="text-slate-600">{"In a play, the lines of speech are labelled with the character's name. In a story, use clues such as who is being spoken to, what the character wants and how they usually talk to decide who is speaking."}</p>
</div>
</>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two features that are typical of a drama text.</>,
          <>A character helps others after being selfish. What does this show?</>,
          <>Which is a conflict: a title at the top of a page, or two friends disagreeing about an important decision?</>,
          <>Write the three parts of a short paragraph response.</>,
        ]}
        answers={[
          <>Dialogue and stage directions.</>,
          <>Character development: a meaningful change in behaviour over time.</>,
          <>Two friends disagreeing about an important decision: it is a struggle between people.</>,
          <>A claim, textual evidence and an explanation.</>,
        ]}
      />,
    ),
  },
];

