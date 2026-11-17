import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { DURATIONS, rangeText } from '@/components/diagrams/english/oralHelpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const interview = DURATIONS.find((d) => d.text.startsWith('Interview'))!;
const dialogue = DURATIONS.find((d) => d.text.startsWith('Dialogue'))!;

export const learnSteps: LearnStep[] = [
  {
    title: 'Planning an interview',
    content: slide(
      <>
        <Rule>An interview is a planned conversation in which one person asks questions and another answers. Plan it first: decide the goal, find background information, write an outline and questions, and choose the time, place and order of the questions. An interview takes about {rangeText(interview)}.</Rule>
        <KeyTable
          title="Planning checklist"
          head={['Step', 'Example']}
          aria="A planning checklist for an interview. Goal: find out how a local nurse chose her career. Background: read about the clinic and the nurse. Questions: write general and then specific questions. Time and place: agree a quiet place and a time. Order: arrange the questions in a logical order."
          rows={[
            ['Goal', 'How a local nurse chose her career'],
            ['Background', 'Read about the clinic and the nurse'],
            ['Questions', 'General first, then specific'],
            ['Time and place', 'A quiet place, an agreed time'],
          ]}
        />
        <Worked
          steps={[
            <>Goal: a feature for the school magazine on a local nurse.</>,
            <>Before the day, read about the clinic, write ten questions, and arrange them from general to specific.</>,
          ]}
        />
        <Mistake>Arriving without questions and hoping to think of them on the spot. Plan and prepare first.</Mistake>
      </>,
    ),
  },
  {
    title: 'The five phases of an interview',
    content: slide(
      <>
        <Rule>An interview has five phases: introduction, rapport, questions, summary and closure. Each phase has its own job.</Rule>
        <KeyTable
          title="The five phases"
          head={['Phase', 'What the interviewer does']}
          aria="The five phases of an interview. Introduction: identify yourself and state the purpose. Rapport: create an atmosphere of trust. Questions: ask relevant questions from general to specific and listen actively. Summary: record the answers and put them in a logical order. Closure: thank the interviewee and give contact details."
          rows={[
            ['1. Introduction', 'Identify yourself, state the purpose'],
            ['2. Rapport', 'Build an atmosphere of trust'],
            ['3. Questions', 'General to specific, listen actively'],
            ['4. Summary', 'Record and sequence the answers'],
            ['5. Closure', 'Thank the interviewee, give contact details'],
          ]}
        />
        <Worked
          steps={[
            <>&ldquo;Good morning, Sister Dlamini. I am Thandi from the school magazine, and I would like to ask about your work.&rdquo; (introduction)</>,
            <>&ldquo;Thank you for your time. Here is my number if you want to read the article first.&rdquo; (closure)</>,
          ]}
        />
        <Mistake>Skipping rapport and starting with difficult questions. The interviewee needs to feel comfortable first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Asking questions and listening',
    content: slide(
      <>
        <Rule>Good interview questions are relevant, respectful and move from general to specific. Open questions invite a full answer. Listen actively and ask a follow-up question when an answer is interesting or unclear. Take notes, then summarise.</Rule>
        <KeyTable
          title="Types of question"
          head={['Type', 'Example']}
          aria="Types of question. Closed: Do you enjoy your work? gives a yes or no answer. Open: What do you enjoy most about your work? invites a full answer. Follow-up: What happened next? picks up on an answer. Specific: How many patients do you see in a day? asks for a detail."
          rows={[
            ['Closed', 'Do you enjoy your work?'],
            ['Open', 'What do you enjoy most about your work?'],
            ['Follow-up', 'What happened next?'],
            ['Specific', 'How many patients do you see in a day?'],
          ]}
        />
        <Worked
          steps={[
            <>Start general: &ldquo;Tell me about your job.&rdquo; Then go specific: &ldquo;What is the hardest part of a night shift?&rdquo;</>,
            <>Use respectful language and do not interrupt. Nod and keep eye contact to show that you listen.</>,
          ]}
        />
        <Mistake>Asking only closed questions. A yes or no answer gives you very little to write about.</Mistake>
      </>,
    ),
  },
  {
    title: 'Dialogue',
    content: slide(
      <>
        <Rule>A dialogue is a conversation between two speakers, often acted from a script. It uses natural language, turn-taking and the register that suits the speakers and the setting. A dialogue is about {rangeText(dialogue)}.</Rule>
        <KeyTable
          title="Interview and dialogue compared"
          head={['Text', 'Features']}
          aria={`Interview and dialogue compared. Interview: one person asks planned questions, with five phases, about ${rangeText(interview)}. Dialogue: two speakers share the conversation in natural language with turn-taking, about ${rangeText(dialogue)}.`}
          rows={[
            ['Interview', `Planned questions, five phases, ${rangeText(interview)}`],
            ['Dialogue', `Two speakers, turn-taking, ${rangeText(dialogue)}`],
          ]}
        />
        <Worked
          steps={[
            <>In a dialogue between a customer and a shop owner, each speaker takes a turn, uses polite words, and responds to what the other says.</>,
            <>When you write a dialogue, use the speaker&rsquo;s name at the start of each line.</>,
          ]}
        />
        <Mistake>Making one speaker talk and the other only say &ldquo;yes&rdquo;. A dialogue is shared between the speakers.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the five phases of an interview in order.</>,
          <>What is the aim of the rapport phase?</>,
          <>Why is an open question better than a closed question?</>,
          <>How long is a dialogue suggested to be?</>,
        ]}
        answers={[
          <>Introduction, rapport, questions, summary and closure.</>,
          <>To create an atmosphere of trust.</>,
          <>It invites a full answer, while a closed question gives only yes or no.</>,
          <>{rangeText(dialogue)}.</>,
        ]}
      />,
    ),
  },
];
