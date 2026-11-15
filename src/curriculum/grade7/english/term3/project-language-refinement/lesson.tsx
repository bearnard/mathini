import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowSteps, VoiceSwap } from '../../../../../components/diagrams/english/lessonPictures';
import { Block } from '../../../../../components/diagrams/english/SentenceBlocks';
import type { Part } from '../../../../../components/diagrams/english/grammar';
import { ACTIVE_EXAMPLES, activeParts, introSentence, partsText, passiveParts } from '../../../../../components/diagrams/english/lessonHelpers';

// Every sentence shown below is built by these tested helpers (lessonHelpers.test.ts).
const [project, speechPast, speechFuture, posters] = ACTIVE_EXAMPLES;
export const voice = {
  project: { active: partsText(activeParts(project.clause, project.tense)), passive: partsText(passiveParts(project.clause, project.tense)) },
  speech: { active: partsText(activeParts(speechPast.clause, speechPast.tense)), passive: partsText(passiveParts(speechPast.clause, speechPast.tense)) },
  future: { active: partsText(activeParts(speechFuture.clause, speechFuture.tense)), passive: partsText(passiveParts(speechFuture.clause, speechFuture.tense)) },
  posters: { active: partsText(activeParts(posters.clause, posters.tense)), passive: partsText(passiveParts(posters.clause, posters.tense)) },
};
export const comma = {
  edited: introSentence('after editing', 'we checked every paragraph carefully'),
  planned: introSentence('because we planned early', 'the project ran smoothly'),
};

export const projectPlan = [
  { title: 'Week 1: Plan', note: 'Choose the topic, list the sections' },
  { title: 'Week 2: Draft', note: 'Write each section' },
  { title: 'Week 3: Revise', note: 'Improve ideas and structure' },
  { title: 'Week 4: Edit and hand in', note: 'Check the language, then submit' },
];

export const complexParts: Part[] = [
  { kind: 'dependent', text: 'Because we planned early', lead: 'Because' },
  { kind: 'independent', text: 'the project ran smoothly.' },
];

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Plan a longer project',
    content: slide(
      <>
        <Rule>Start a project with a clear plan: list the steps and give each one a deadline. A long task becomes manageable when it is cut into small parts.</Rule>
        <FlowSteps steps={projectPlan} aria="Four boxes from top to bottom for a four-week class magazine: Week 1 plan, Week 2 draft, Week 3 revise, Week 4 edit and hand in." />
        <Worked
          title="A class magazine due in four weeks"
          steps={[
            <>Work backwards from the hand-in date and split the time into steps.</>,
            <>Give each step a deadline and write it in your plan.</>,
            <>Draft section by section, then revise, and keep the last week for editing the language.</>,
          ]}
        />
        <Mistake>Writing the conclusion first, or skipping the plan completely. Without steps and deadlines the work piles up and the language is never checked.</Mistake>
      </>,
    ),
  },
  {
    title: 'Active and passive voice',
    content: slide(
      <>
        <Rule>In the active voice the subject does the action. In the passive voice the receiver of the action comes first, followed by a form of “be”, the main verb and usually “by”.</Rule>
        <VoiceSwap
          active={activeParts(speechPast.clause, speechPast.tense)}
          passive={passiveParts(speechPast.clause, speechPast.tense)}
          />
        <Worked
          title={`Change to passive: ${voice.future.active}`}
          steps={[
            <>Find the doer, “the class”, and the receiver, “the speech”.</>,
            <>Put the receiver first and keep the tense. The future “will prepare” becomes “will be prepared”.</>,
            <>Add “by” and the doer: <strong>{voice.future.passive}</strong></>,
          ]}
        />
        <Mistake>Swapping the nouns but forgetting “be”: “The speech prepared by the class” is wrong. Say <strong>{voice.speech.passive}</strong> Also keep the tense: “The class prepares” becomes “is prepared”, not “was prepared”.</Mistake>
      </>,
    ),
  },
  {
    title: 'Clauses: subject and verb',
    content: slide(
      <>
        <Rule>A clause is a group of words with a subject and a verb. A main clause makes sense alone. A subordinate clause starts with a joining word such as “because” and cannot stand alone.</Rule>
        <div className="mx-auto flex w-full max-w-md flex-wrap items-center gap-1 rounded-2xl p-4" style={{ background: '#0f172a' }} role="group" aria-label="The sentence Because we planned early, the project ran smoothly. The first clause is subordinate, the second is a main clause.">
          {complexParts.map((p, i) => (
            <Block key={i} part={p} />
          ))}
        </div>
        <Worked
          title="Because we planned early, the project ran smoothly."
          steps={[
            <>“Because we planned early”: subject <em>we</em>, verb <em>planned</em>. It begins with “because”, so it is subordinate.</>,
            <>“the project ran smoothly”: subject <em>project</em>, verb <em>ran</em>. It makes sense alone, so it is the main clause.</>,
            <>Join them and put a comma after the subordinate clause.</>,
          ]}
        />
        <Mistake>Writing “Because we planned early.” on its own. It has a subject and a verb but it leaves the reader waiting for the result, so it is not a complete sentence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Punctuation: the comma after an opener',
    content: slide(
      <>
        <Rule>When a sentence begins with an introductory word or word group, put a comma after it. End the sentence with a full stop. Do not use a semicolon here.</Rule>
        <Worked
          title="Punctuate: after editing we checked every paragraph carefully"
          steps={[
            <>Find the opener: “after editing”.</>,
            <>Put a comma straight after it, and a capital letter at the start.</>,
            <>Close with a full stop: <strong>{comma.edited}</strong></>,
          ]}
        />
        <Mistake>Putting the comma or semicolon in the wrong place: “After editing; we checked…” or “After editing we checked, every paragraph…”. The comma belongs only after the opener.</Mistake>
      </>,
    ),
  },
  {
    title: 'Edit with a checklist',
    content: slide(
      <>
        <Rule>A revision checklist helps you check grammar, punctuation and structure one step at a time. Give each sentence one main idea and remove repeated words.</Rule>
        <Worked
          title="Edit: The group worked hard the group finished early the group was proud."
          steps={[
            <>Clarity: the words “the group” repeat. Join the ideas and use “they”.</>,
            <>Punctuation: join with “and” and add a comma and a full stop.</>,
            <>Result: <strong>The group worked hard and finished early, so they were proud.</strong></>,
          ]}
        />
        <Mistake>Thinking a checklist guarantees marks or replaces teacher feedback. It only helps you find mistakes; you still have to fix them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Change to the passive: {voice.project.active}</li>
            <li>Punctuate: because we planned early the project ran smoothly</li>
            <li>What two things must a clause have?</li>
            <li>What is the best action at the start of a project?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{voice.project.passive}</li>
            <li>{comma.planned}</li>
            <li>A subject and a verb.</li>
            <li>Make a clear plan with steps and deadlines.</li>
          </ol>
        }
      />,
    ),
  },
];

