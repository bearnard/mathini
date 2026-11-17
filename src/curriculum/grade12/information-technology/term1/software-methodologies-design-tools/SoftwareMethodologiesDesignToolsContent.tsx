import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { DESIGN_TOOLS, IPO_EXAMPLE, METHODOLOGIES, NOUN_VERB } from '../../_shared/designFacts';

export const learnSteps: LearnStep[] = [
  {
    title: 'Why methodologies?',
    content: (
      <div className="space-y-4">
        <Rule>A software development methodology is an organised way of planning and carrying out a project. Different projects need different methodologies.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>It tells the team what to do first, who is involved and how to deal with changes.</li>
          <li>You must be able to describe and compare the four methodologies in this topic: waterfall, rapid application development (RAD), incremental and agile.</li>
          <li>You also use one of them to analyse the requirements when you start the PAT (Practical Assessment Task).</li>
        </ul>
        <Mistake>No methodology is best for every project. A good answer links the choice to the situation, such as fixed or changing requirements.</Mistake>
      </div>
    ),
  },
  {
    title: 'Waterfall and RAD',
    content: (
      <div className="space-y-4">
        <Rule>These two sit at opposite ends: waterfall plans everything first, so a change made late is costly, while RAD builds and shows prototypes quickly.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          {METHODOLOGIES.slice(0, 2).map((m) => (
            <div key={m.name} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <strong>{m.name}</strong> <span className="text-slate-500">({m.short})</span>
              <p className="mt-1">{m.idea}</p>
              <p className="mt-1"><strong className="text-emerald-700">Strength:</strong> {m.strength}</p>
              <p className="mt-1"><strong className="text-amber-700">Weakness:</strong> {m.weakness}</p>
              <p className="mt-1"><strong>Suits:</strong> {m.suits}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Incremental and agile',
    content: (
      <div className="space-y-4">
        <Rule>These two deliver working software in steps. Incremental adds parts, agile works in short cycles and welcomes change.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          {METHODOLOGIES.slice(2).map((m) => (
            <div key={m.name} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <strong>{m.name}</strong> <span className="text-slate-500">({m.short})</span>
              <p className="mt-1">{m.idea}</p>
              <p className="mt-1"><strong className="text-emerald-700">Strength:</strong> {m.strength}</p>
              <p className="mt-1"><strong className="text-amber-700">Weakness:</strong> {m.weakness}</p>
              <p className="mt-1"><strong>Suits:</strong> {m.suits}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Design tools: TOE, IPO, CRC and UML',
    content: (
      <div className="space-y-4">
        <Rule>Design tools show a solution before you code it. CAPS lets you use any appropriate tool, for example a TOE chart that lists the task, the objects and the events, or a UML use case diagram that shows the actors.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          {DESIGN_TOOLS.map((t) => (
            <li key={t.acronym}><strong>{t.acronym} ({t.expansion}):</strong> {t.use}</li>
          ))}
        </ul>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-left text-sm text-slate-700">
          <strong>IPO diagram: {IPO_EXAMPLE.task}</strong>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li><strong>Input:</strong> {IPO_EXAMPLE.input}</li>
            <li><strong>Process:</strong> {IPO_EXAMPLE.process}</li>
            <li><strong>Output:</strong> {IPO_EXAMPLE.output}</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Noun-verb analysis and the PAT',
    content: (
      <div className="space-y-4">
        <Rule>Noun-verb analysis finds the parts of a program in the task description. The nouns suggest classes and attributes, and the verbs suggest methods.</Rule>
        <Worked
          title="A library task"
          steps={[
            <><strong>Description:</strong> &ldquo;{NOUN_VERB.sentence}&rdquo;</>,
            <><strong>Nouns:</strong> {NOUN_VERB.nouns.join(', ')}. These suggest the classes Member, Book, Librarian and Loan.</>,
            <><strong>Verbs:</strong> {NOUN_VERB.verbs.join(', ')}. These suggest methods such as Borrow and RecordLoan.</>,
          ]}
        />
        <p className="text-left text-sm text-slate-600">At the start of the PAT you write a task description, analyse the requirements and choose a suitable methodology and design tools.</p>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Which methodology builds a system in working parts?</>,
          <>Which methodology suits requirements that are likely to change?</>,
          <>What do the letters CRC stand for?</>,
          <>In a noun-verb analysis, what do the verbs suggest?</>,
        ]}
        answers={[
          <>Incremental.</>,
          <>Agile.</>,
          <>Class, Responsibilities, Collaborators.</>,
          <>Methods (the actions).</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which methodology finishes each phase before the next one starts?',
    options: ['Agile', 'Incremental', 'Waterfall', 'Rapid application development'],
    answer: 'Waterfall',
    explanation: 'In the waterfall methodology the phases follow each other in a fixed order.',
  },
  {
    prompt: 'What is the main weakness of the waterfall methodology?',
    options: ['Late changes are costly', 'The plan is not clear', 'It has no testing phase', 'It needs no requirements'],
    answer: 'Late changes are costly',
    explanation: 'Because the user sees the system only at the end, changes made late are costly.',
  },
  {
    prompt: 'Which methodology builds quick prototypes that the user comments on?',
    options: ['Waterfall', 'Incremental', 'Noun-verb analysis', 'RAD'],
    answer: 'RAD',
    explanation: 'Rapid application development (RAD) builds prototypes quickly and uses the feedback of the user to shape the next version.',
  },
  {
    prompt: 'Which methodology builds a system in parts that are tested and delivered one by one?',
    options: ['Waterfall', 'Agile', 'Incremental', 'Rapid application development'],
    answer: 'Incremental',
    explanation: 'Incremental development delivers a working part (an increment) first and adds functions in later increments.',
  },
  {
    prompt: 'Which methodology works in short cycles and copes with changing requirements?',
    options: ['Waterfall', 'Agile', 'Incremental', 'Rapid application development'],
    answer: 'Agile',
    explanation: 'Agile teams deliver working software often and adapt when needs or feedback change.',
  },
  {
    prompt: 'A school wants a system for exam rules that are fixed by law and will not change. Which methodology suits?',
    options: ['Agile', 'Rapid application development', 'Waterfall', 'Prototyping without a plan'],
    answer: 'Waterfall',
    explanation: 'When requirements are fixed and well understood, the careful plan of the waterfall methodology works well.',
  },
  {
    prompt: 'A start-up is unsure what its customers want and expects changes every few weeks. Which methodology suits?',
    options: ['Waterfall', 'Agile', 'A single large release', 'No methodology'],
    answer: 'Agile',
    explanation: 'Agile expects change and delivers working software in short cycles, so it suits unclear or changing needs.',
  },
  {
    prompt: 'What do the letters TOE stand for?',
    options: ['Test, Output, Error', 'Type, Object, Element', 'Task, Objects, Events', 'Table, Order, Entity'],
    answer: 'Task, Objects, Events',
    explanation: 'A TOE chart lists the task, the objects (controls) and the events that trigger the code.',
  },
  {
    prompt: 'What does an IPO diagram show?',
    options: ['Classes, methods and events', 'Input, process and output', 'Users, actions and screens', 'Tables, keys and queries'],
    answer: 'Input, process and output',
    explanation: 'IPO stands for Input, Process, Output: what goes in, what is done with it and what comes out.',
  },
  {
    prompt: 'What do the letters CRC stand for in a CRC card?',
    options: ['Code, Run, Check each small module again', 'Create, Retrieve, Change many records', 'Compile, Review, Correct the programs', 'Class, Responsibilities, Collaborators'],
    answer: 'Class, Responsibilities, Collaborators',
    explanation: 'A CRC card describes one class: its responsibilities and the other classes it collaborates with.',
  },
  {
    prompt: 'Which UML diagram shows the actors and what they can do with a system?',
    options: ['A basic class diagram', 'A UML use case diagram', 'An IPO diagram of tasks', 'A TOE chart of events'],
    answer: 'A UML use case diagram',
    explanation: 'A use case diagram shows the actors and the use cases (the things they do with the system).',
  },
  {
    prompt: 'In a noun-verb analysis, what do the nouns suggest?',
    options: ['Methods and event names', 'Loops and decision steps', 'Tables and query fields', 'Classes and attributes'],
    answer: 'Classes and attributes',
    explanation: 'The nouns in a task description suggest classes and attributes, and the verbs suggest methods.',
  },
  {
    prompt: 'In the description "A member borrows a book", which word suggests a method?',
    options: ['borrows', 'member', 'book', 'librarian'],
    answer: 'borrows',
    explanation: 'Verbs such as "borrows" suggest methods (Borrow). The nouns "member" and "book" suggest classes.',
  },
  {
    prompt: 'What does the first step of the PAT use a methodology for?',
    options: ['To write the final program code', 'To mark the work of the learner', 'To analyse the requirements', 'To install the program on a server'],
    answer: 'To analyse the requirements',
    explanation: 'At the start of the PAT you write a task description and analyse the requirements using an appropriate methodology.',
  },
];
