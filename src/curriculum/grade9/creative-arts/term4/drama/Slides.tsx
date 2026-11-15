import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { TermGrid } from '../../../../../components/diagrams/arts/Ca8DramaPictures';
import { ProductionTeam, RubricBars } from '../../../../../components/diagrams/arts/Ca9DramaPictures';
import { ACTING_CRITERIA, CAREERS, DESIGN_CHOICES, PRODUCTION_TEAM, REFLECTION_STEPS, TEAMWORK_CRITERIA, deadlinesMet, rubric } from '../../../../../components/diagrams/arts/ca9-drama-helpers';

// The team, the rubric totals and the deadline percentage come from ca9-drama-helpers.ts (tested).
const SCORES = [4, 3, 5, 4];
const marks = rubric(SCORES);
const deadlines = deadlinesMet(3, 4);
const Q2 = [3, 4, 4, 4];
const q2 = rubric(Q2);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Staging a full production',
    content: slide(
      <>
        <Rule>A full production brings actors and a technical team together under a director: lighting, sound, set design, costume and stage management.</Rule>
        <ProductionTeam aria={`The director in the middle guides ${PRODUCTION_TEAM.length} groups: actors, stage manager, lighting, sound, and set and costume.`} />
        <Worked
          title="One cue: the lights fade and music starts"
          steps={['The stage manager calls the cue.', 'The lighting operator fades the lights.', 'The sound operator starts the music.', 'The actors respond to the change.']}
        />
        <Mistake>Thinking only the actors matter. A late cue spoils a scene however well it is acted.</Mistake>
      </>,
    ),
  },
  {
    title: 'Design choices',
    content: slide(
      <>
        <Rule>Design choices are the costume, lighting, set and props that support the production&apos;s vision and create atmosphere.</Rule>
        <TermGrid terms={DESIGN_CHOICES} cols={2} aria="Four design choices in boxes: costume (what characters wear), lighting (brightness and colour), set (where the scene is) and props (objects performers use)." />
        <Worked
          title="Design a quiet, lonely evening scene"
          steps={['Vision: lonely and quiet.', 'Lighting: dim and cool.', 'Costume: plain, dark clothes.', 'Set and props: one chair and an empty cup.']}
        />
        <Mistake>Adding costumes and props because they look nice. Each choice should support the vision.</Mistake>
      </>,
    ),
  },
  {
    title: 'Evaluating acting',
    content: slide(
      <>
        <Rule>When you evaluate acting, consider believable character, voice, movement and engagement. Back each judgement with evidence.</Rule>
        <RubricBars criteria={ACTING_CRITERIA} scores={SCORES} aria={`Four bars marking an actor out of 5: believable character ${SCORES[0]}, voice ${SCORES[1]}, movement ${SCORES[2]} and engagement ${SCORES[3]}. The total is ${marks.total} out of ${marks.outOf}, which is ${marks.percent} percent.`} />
        <Worked
          title="Evaluate Lerato's performance"
          steps={['Mark each criterion out of 5.', `Add the marks: ${SCORES.join(' + ')} = ${marks.total} out of ${marks.outOf}, which is ${marks.percent}%.`, 'Support each mark with a moment: "her slow walk showed she was afraid".']}
        />
        <Mistake>Judging only on whether you like the performer, or only on the voice. Use all four criteria.</Mistake>
      </>,
    ),
  },
  {
    title: 'Teamwork and audience impact',
    content: slide(
      <>
        <Rule>Evaluate teamwork by communication, support for peers, meeting deadlines and sharing tasks. Audience impact is how viewers respond, in feeling and thought, to the show.</Rule>
        <TermGrid terms={TEAMWORK_CRITERIA} cols={2} aria="Four teamwork criteria in boxes: communication (clear and kind), support (helping each other), deadlines (tasks done on time) and shared tasks (everyone does a part)." />
        <Worked
          title="Rate one group's rehearsal log"
          steps={[`Deadlines: ${deadlines.met} of ${deadlines.set} tasks on time is ${deadlines.percent}%.`, 'Support: members helped each other with costumes.', 'Audience impact: ask viewers what they felt and thought.']}
        />
        <Mistake>Ignoring the audience. A show has impact only if it affects the people who watch it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reflection and careers',
    content: slide(
      <>
        <Rule>Reflecting on your production helps you judge what you learned, celebrate wins and see where to grow. Drama offers many careers.</Rule>
        <TermGrid terms={CAREERS} cols={2} aria="Five drama careers in boxes: actor (performs roles), director (guides the production), playwright (writes plays), dramaturge (advises on the script) and drama therapist (drama for wellbeing)." />
        <Worked title="Write a three-part reflection" steps={REFLECTION_STEPS.map((r) => <><strong>{r.lead}</strong>{r.text}</>)} />
        <Mistake>Listing only what went wrong. Reflection also celebrates what worked.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name three technical theatre roles.</>,
          <>An actor scores {Q2.join(', ')} out of 5 on four criteria. Give the total out of {q2.outOf}.</>,
          <>What are design choices?</>,
          <>Give two careers in drama.</>,
        ]}
        answers={[
          <>Any three of: lighting, sound, set design, costume, stage management.</>,
          <>{q2.total} out of {q2.outOf}, which is {q2.percent}%.</>,
          <>The costume, lighting, set and props that support the production&apos;s vision.</>,
          <>Any two of: actor, director, playwright, dramaturge, drama therapist.</>,
        ]}
      />,
    ),
  },
];
