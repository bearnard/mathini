import CapsSubjectTopic, { type CapsItem, type LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '@/components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '@/components/diagrams/lifesci/InfoTable';
import * as o from '@/components/diagrams/english/g9eng';

// Grade 9 English HL prose: plot, setting and conflict. The story is original (g9eng.ts STORY). General criteria; no marks.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The stages of a plot",
    content: slide(
      <>
        <Rule>The plot is the order of events in a story. It usually has five stages: the exposition (the beginning, which introduces the characters and the setting), the rising action (the problem grows), the climax (the turning point, the most tense moment), the falling action (events settle) and the resolution (the end and what has changed).</Rule>
        <FlowSteps
          aria={"The stages of a plot. Exposition is the beginning. Rising action is when trouble grows. The climax is the turning point. Then come the falling action and the resolution."}
          steps={[{ label: "Exposition: the beginning" }, { label: "Rising action: trouble grows" }, { label: "Climax: the turning point" }, { label: "Falling action, then resolution" }]}
        />
        <Worked
          title={`A short story of ${o.storyWords()} words`}
          steps={[
            <>Exposition: {o.STORY[0]} {o.STORY[1]}</>,
            <>Rising action: {o.STORY[2]} Climax: {o.STORY[3]} {o.STORY[4]}</>,
            <>Falling action: {o.STORY[5]} Resolution: {o.STORY[6]}</>,
          ]}
        />
        <Mistake>Naming the climax as the last line. The climax is the turning point, and it comes before the end.</Mistake>
      </>,
    ),
  },
  {
    title: "Setting and atmosphere",
    content: slide(
      <>
        <Rule>The setting is where and when a story takes place, with the conditions around the characters. It can be a place (a flooded road), a time (the morning of an exam) and a social situation. The mood or atmosphere is the feeling the setting gives, such as tense or hopeful. Writers show setting with details that the senses notice.</Rule>
        <InfoTable
          cols={[{ title: "Part of setting", w: 34 }, { title: "In the story", w: 66 }]}
          rows={[
            ["Place", "a flooded road and a stream"],
            ["Time", "the morning of an exam"],
            ["Mood", "tense, then hopeful"],
          ]}
          aria={"A table of the setting of the story. Place: a flooded road and a stream. Time: the morning of an exam. Mood: tense, then hopeful."}
        />
        <Worked
          title="Why the setting matters"
          steps={[
            <>The flooded road and the missing bridge cause the problem.</>,
            <>The time (eight o&apos;clock) adds pressure.</>,
            <>If the story took place on a dry road, there would be no conflict.</>,
          ]}
        />
        <Mistake>Thinking that setting is only the place. Time and mood are part of it too.</Mistake>
      </>,
    ),
  },
  {
    title: "Kinds of conflict",
    content: slide(
      <>
        <Rule>Conflict is the struggle that drives the plot. Person against person: two characters oppose each other. Person against self: a character fights fear or doubt. Person against nature: a character faces a storm, a river or an animal. Person against society: a character faces unfair rules or customs. Many stories have more than one kind.</Rule>
        <InfoTable
          cols={[{ title: "Kind", w: 34 }, { title: "Example", w: 66 }]}
          rows={[
            ["Person v. person", "two friends who disagree"],
            ["Person v. self", "fear of failing"],
            ["Person v. nature", "a flooded river"],
            ["Person v. society", "an unfair rule"],
          ]}
          aria={"A table of kinds of conflict. Person against person: two friends who disagree. Person against self: fear of failing. Person against nature: a flooded river. Person against society: an unfair rule."}
        />
        <Worked
          title="Name the conflicts in the story"
          steps={[
            <>Naledi against the river is person against nature.</>,
            <>Naledi against her fear is person against self.</>,
            <>The climax resolves both: she crosses the river and she overcomes her fear.</>,
          ]}
        />
        <Mistake>Naming only one conflict. A story can have two or more.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which stage is the turning point of a plot?</>,
          <>Name the three parts of setting.</>,
          <>What kind of conflict is a character against a flood?</>,
          <>What does the resolution show?</>,
        ]}
        answers={[
          <>The <strong>climax</strong>.</>,
          <><strong>Place, time and mood</strong>.</>,
          <>Person against <strong>nature</strong>.</>,
          <>The <strong>end</strong> and what has changed.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is the plot of a story?",
    options: ["The place of the story", "The order of events", "The writer's name", "The title page"],
    answer: "The order of events",
    explanation: "The plot is what happens, in order.",
  },
  {
    prompt: "How many stages does the plot usually have in this lesson?",
    options: ["Two", "Three", "Nine", "Five"],
    answer: "Five",
    explanation: "Exposition, rising action, climax, falling action and resolution.",
  },
  {
    prompt: "Which part of the plot presents the characters and the setting?",
    options: ["The exposition", "The climax", "The resolution", "The falling action"],
    answer: "The exposition",
    explanation: "The exposition is the beginning.",
  },
  {
    prompt: "Which stage is the most tense turning point?",
    options: ["The exposition", "The resolution", "The climax", "The title"],
    answer: "The climax",
    explanation: "The climax is the peak of the tension.",
  },
  {
    prompt: "In the story, which event is the climax?",
    options: ["The exam that starts at eight o'clock", "The neighbour ties a rope and they cross the water", "The rain that floods the road to school", "The exam that Naledi writes in the hall"],
    answer: "The neighbour ties a rope and they cross the water",
    explanation: "Crossing the water is the turning point.",
  },
  {
    prompt: "In the story, which event is part of the exposition?",
    options: ["The pull across the water on the rope", "The arrival at the hall with wet shoes", "The final exam that Naledi writes later", "The flooded road and the missing bridge"],
    answer: "The flooded road and the missing bridge",
    explanation: "The exposition tells the situation at the start.",
  },
  {
    prompt: "What does the resolution show?",
    options: ["The end and what has changed", "The first problem", "The writer's opinion", "The name of the setting"],
    answer: "The end and what has changed",
    explanation: "In the resolution, Naledi never again says that she is too small.",
  },
  {
    prompt: "What is the setting of a story?",
    options: ["Who tells the story", "What the story teaches", "Where and when it takes place", "How long it is"],
    answer: "Where and when it takes place",
    explanation: "Setting includes place, time and conditions.",
  },
  {
    prompt: "In the story, which is the time of the setting?",
    options: ["A summer holiday", "The morning of an exam", "The end of the year", "Late at night"],
    answer: "The morning of an exam",
    explanation: "The exam started at eight.",
  },
  {
    prompt: "What is the mood of a story?",
    options: ["The name of the main character", "The length of the plot", "The number of events", "The feeling that the story gives"],
    answer: "The feeling that the story gives",
    explanation: "Mood can be tense, sad or hopeful.",
  },
  {
    prompt: "What is conflict in a story?",
    options: ["The struggle that drives the plot", "The place of the story", "The last line of the story", "The name of the writer"],
    answer: "The struggle that drives the plot",
    explanation: "Without conflict, there is no plot.",
  },
  {
    prompt: "Naledi faces a flooded river. Which kind of conflict is this?",
    options: ["Person against person", "Person against society", "Person against nature", "No conflict at all"],
    answer: "Person against nature",
    explanation: "The river is a natural force.",
  },
  {
    prompt: "Naledi is afraid and unsure. Which kind of conflict is this?",
    options: ["Person against nature", "Person against self", "Person against person", "Person against society"],
    answer: "Person against self",
    explanation: "She struggles with her own fear.",
  },
  {
    prompt: "Which sentence shows person against society?",
    options: ["A boy swims across a lake.", "Two friends disagree about a game.", "A girl fears the dark.", "A girl fights an unfair rule in her town."],
    answer: "A girl fights an unfair rule in her town.",
    explanation: "The rule is part of society.",
  },
];

const ProsePlotSettingConflict = () => (
  <CapsSubjectTopic
    title="Prose: Plot, Setting and Conflict"
    subtitle="The five stages of a plot, setting and mood, and the kinds of conflict, with an original short story"
    learnSteps={learnSteps}
    task="gr9-prose-plot-setting-conflict-t3"
    bank={bank}
    apiPath="/api/caps/eng"
    grade={9}
  />
);

export default ProsePlotSettingConflict;
