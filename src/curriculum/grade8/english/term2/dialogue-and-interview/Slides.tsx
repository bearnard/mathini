import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { ModelText } from '@/curriculum/grade9/english/_shared/ModelText';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The format of a dialogue",
    content: slide(
      <>
        <Rule>A dialogue is a conversation between two or more speakers, written as the words they say. The speaker's name comes first, then a colon, then the words. Each speaker has a new line. Short directions in brackets tell the actor how to speak or act.</Rule>
        <KeyTable
          title="Dialogue conventions"
          head={["Convention", "Example"]}
          aria="Dialogue conventions. Speaker's name: Thandi:. New line for each speaker: Each person's words on a new line. Direction in brackets: (smiling) or (looks at her watch). Natural language: Short sentences like real speech. Setting: A line at the top saying where and when."
          rows={[["Speaker's name", "Thandi:"], ["New line for each speaker", "Each person's words on a new line"], ["Direction in brackets", "(smiling) or (looks at her watch)"], ["Natural language", "Short sentences like real speech"], ["Setting", "A line at the top saying where and when"]]}
        />
        <ModelText label="Model dialogue" note="An original model written for this lesson, with invented names.">
          <p>Setting: The school library, after break.</p>
          <p>Thandi: (whispering) Have you finished the book?</p>
          <p>Sipho: Almost. I have two chapters left.</p>
          <p>Thandi: (smiling) Don't tell me the ending!</p>
          <p>Sipho: I won't. But you will love it.</p>
        </ModelText>
        <Worked
          steps={[
            <>Each line starts with the speaker's name and a colon, and the directions are in brackets.</>,
            <>Real people use short sentences, so a dialogue should too.</>,
          ]}
        />
        <Mistake>Using quotation marks in a play-style dialogue. Use the name and a colon instead.</Mistake>
      </>,
    ),
  },
  {
    title: "Making a dialogue natural",
    content: slide(
      <>
        <Rule>A good dialogue sounds like real speech. People interrupt, use short answers and show feeling. Each line should move the conversation forward, and the language should fit the speakers.</Rule>
        <KeyTable
          title="What makes it natural"
          head={["Feature", "Example"]}
          aria="What makes it natural. Short sentences: I can't. Not today.. Interruptions: Wait, let me finish.. Feeling: (angrily) That is not fair!. Fits the speaker: A teacher is more formal than a friend. Moves forward: Each line adds something new."
          rows={[["Short sentences", "I can't. Not today."], ["Interruptions", "Wait, let me finish."], ["Feeling", "(angrily) That is not fair!"], ["Fits the speaker", "A teacher is more formal than a friend"], ["Moves forward", "Each line adds something new"]]}
        />
        <Worked
          steps={[
            <>Two friends use informal language. A learner and a principal use polite, formal language.</>,
            <>Do not write long speeches. Break them up with answers.</>,
          ]}
        />
        <Mistake>Having every speaker talk in the same way. Let the language fit the person.</Mistake>
      </>,
    ),
  },
  {
    title: "The written interview",
    content: slide(
      <>
        <Rule>A written interview is a set of questions and the answers to them. The interviewer's questions come first, and the person's answers follow. It begins with a short introduction of the person and ends with thanks.</Rule>
        <KeyTable
          title="Parts of a written interview"
          head={["Part", "What it contains"]}
          aria="Parts of a written interview. Introduction: Who the person is and why you are interviewing them. Questions: Open questions that need more than yes or no. Answers: The person's words, in order. Closing: Thanks to the person. Format: Q and A, or the names of the speakers."
          rows={[["Introduction", "Who the person is and why you are interviewing them"], ["Questions", "Open questions that need more than yes or no"], ["Answers", "The person's words, in order"], ["Closing", "Thanks to the person"], ["Format", "Q and A, or the names of the speakers"]]}
        />
        <ModelText label="Model interview" note="An original model written for this lesson, with invented names.">
          <p>Interview with Mrs Dlamini, the school gardener</p>
          <p>Q: How long have you worked at the school?</p>
          <p>A: Twelve years. I started when the garden was only sand.</p>
          <p>Q: What do you enjoy most about your work?</p>
          <p>A: Watching the learners eat tomatoes that they grew themselves.</p>
          <p>Q: Thank you for your time, Mrs Dlamini.</p>
        </ModelText>
        <Worked
          steps={[
            <>Questions such as What do you enjoy most? make the person say more than yes or no.</>,
            <>Plan the questions before the interview and keep them in a sensible order.</>,
          ]}
        />
        <Mistake>Asking only yes or no questions. They give very little to write.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How is a speaker's name written in a dialogue?</>,
          <>What are directions in brackets for?</>,
          <>What kind of question gives a fuller answer?</>,
          <>How does a written interview open?</>,
        ]}
        answers={[
          <>At the start of the line, followed by a colon.</>,
          <>To tell the actor how to speak or act.</>,
          <>An open question.</>,
          <>A short introduction of the person.</>,
        ]}
      />,
    ),
  },
];
