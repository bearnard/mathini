import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What a debate is",
    content: slide(
      <>
        <Rule>A debate is a formal discussion in which two teams argue for and against a statement called the resolution. You do not choose the side you believe in; you argue the side you are given. The aim is to present a clear, logical case and to answer the other team.</Rule>
        <KeyTable
          title="Debate vocabulary"
          head={["Term", "Meaning"]}
          aria="Debate vocabulary. Resolution: The statement the two teams argue about. Affirmative team: Agrees with the resolution and must prove it. Negative team: Disagrees and tries to refute the case. Rebuttal: A reply that shows why the other team is wrong. Chairperson: Keeps order and time."
          rows={[["Resolution", "The statement the two teams argue about"], ["Affirmative team", "Agrees with the resolution and must prove it"], ["Negative team", "Disagrees and tries to refute the case"], ["Rebuttal", "A reply that shows why the other team is wrong"], ["Chairperson", "Keeps order and time"]]}
        />
        <Worked
          steps={[
            <>The resolution is Cellphones should be allowed in class. The affirmative team argues for it and the negative team argues against it.</>,
            <>Even if you dislike the resolution, you must argue your side with reasons.</>,
          ]}
        />
        <Mistake>Thinking that the negative team wins by saying no. It must give a logical case with reasons of its own.</Mistake>
      </>,
    ),
  },
  {
    title: "Who speaks when",
    content: slide(
      <>
        <Rule>Each team has two speakers. The first affirmative speaker states the topic and the first argument, and the first negative speaker answers with the first negative argument. The second speakers follow. After a short break to plan, each team gives rebuttals. The affirmative team begins and ends the debate.</Rule>
        <KeyTable
          title="Order of a debate"
          head={["Step", "Who speaks"]}
          aria="Order of a debate. 1: First affirmative: topic and first argument. 2: First negative: first argument. 3: Second affirmative: second argument. 4: Second negative: second argument. 5: Break of 5 to 10 minutes to prepare rebuttals. 6: Negative rebuttals, then affirmative rebuttals."
          rows={[["1", "First affirmative: topic and first argument"], ["2", "First negative: first argument"], ["3", "Second affirmative: second argument"], ["4", "Second negative: second argument"], ["5", "Break of 5 to 10 minutes to prepare rebuttals"], ["6", "Negative rebuttals, then affirmative rebuttals"]]}
        />
        <Worked
          steps={[
            <>The affirmative team opens by stating the resolution and giving its first reason.</>,
            <>After the break, each team answers the two arguments of the other team and restates its own two reasons.</>,
          ]}
        />
        <Mistake>Starting a rebuttal with a new argument. A rebuttal answers what the other team has already said.</Mistake>
      </>,
    ),
  },
  {
    title: "Prepare your case",
    content: slide(
      <>
        <Rule>Good preparation wins debates. Research facts and examples for both sides, so that you know what the other team will say. Plan two strong arguments, write each with a clear point, proof and link back to the resolution, and practise answering questions.</Rule>
        <KeyTable
          title="Preparing a case"
          head={["Task", "Why it matters"]}
          aria="Preparing a case. Research both sides: You can predict the other team. Two clear arguments: A short debate has room for two strong points. Proof for each: Facts and examples are more persuasive than opinions. Plan rebuttals: You can answer quickly after the break. Practise delivery: Voice, pace and eye contact count."
          rows={[["Research both sides", "You can predict the other team"], ["Two clear arguments", "A short debate has room for two strong points"], ["Proof for each", "Facts and examples are more persuasive than opinions"], ["Plan rebuttals", "You can answer quickly after the break"], ["Practise delivery", "Voice, pace and eye contact count"]]}
        />
        <Worked
          steps={[
            <>You expect the negative team to say that phones are a distraction, so you prepare a reply about using them for research.</>,
            <>You write each argument as point, proof and link.</>,
          ]}
        />
        <Mistake>Preparing only your own arguments. You also need to be ready to answer the other team.</Mistake>
      </>,
    ),
  },
  {
    title: "Rebuttal and conduct",
    content: slide(
      <>
        <Rule>A good rebuttal names the argument it answers, explains what is wrong with it and then rebuilds your own case. Listen carefully, take notes and stay polite: you attack the argument, not the person. Use turn-taking and address the chairperson.</Rule>
        <KeyTable
          title="Rebuttal and conduct"
          head={["Skill", "What to do"]}
          aria="Rebuttal and conduct. Listen and note: Write the other team’s main points. Name the point: Say which argument you are answering. Explain the flaw: Show a missing fact or weak reasoning. Rebuild: Return to your own two reasons. Stay polite: Argue against the idea, not the speaker."
          rows={[["Listen and note", "Write the other team’s main points"], ["Name the point", "Say which argument you are answering"], ["Explain the flaw", "Show a missing fact or weak reasoning"], ["Rebuild", "Return to your own two reasons"], ["Stay polite", "Argue against the idea, not the speaker"]]}
        />
        <Worked
          steps={[
            <>Your note says the other team claimed phones cause cheating. You reply that tests are supervised, and then repeat your own reasons.</>,
            <>You thank the chairperson before you begin.</>,
          ]}
        />
        <Mistake>Insulting the other speaker. Marks go to clear reasoning and good manners.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the resolution?</>,
          <>Which team begins and ends the debate?</>,
          <>What happens after the first four speeches?</>,
          <>What does a rebuttal do?</>,
        ]}
        answers={[
          <>The statement that the two teams argue about.</>,
          <>The affirmative team.</>,
          <>A short break to prepare rebuttals.</>,
          <>Answers the other team’s argument and rebuilds your own.</>,
        ]}
      />,
    ),
  },
];
