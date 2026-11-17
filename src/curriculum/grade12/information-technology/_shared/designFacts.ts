// Facts for the Grade 12 IT lessons on software methodologies and design tools (CAPS Term 1, Software Engineering Principles), in ONE place.
// softwareMethodologies.test.ts asserts them and the lessons render from them, so a table cannot disagree with the text.

export interface Methodology {
  name: string;
  short: string;
  idea: string;
  strength: string;
  weakness: string;
  suits: string;
}

export const METHODOLOGIES: readonly Methodology[] = [
  {
    name: 'Waterfall',
    short: 'Phases in a fixed order',
    idea: 'Each phase (requirements, design, coding, testing, maintenance) is finished before the next one starts.',
    strength: 'Clear plan, documents and deadlines.',
    weakness: 'Changes late in the project are costly, and the user sees the system only at the end.',
    suits: 'A project whose requirements are fixed and well understood.',
  },
  {
    name: 'Rapid application development (RAD)',
    short: 'Quick prototypes with the user',
    idea: 'Prototypes are built quickly and shown to the user, who gives feedback that shapes the next version.',
    strength: 'Fast results and the user is involved from the start.',
    weakness: 'Less planning, so the design can become untidy.',
    suits: 'A system that is needed quickly and where users can take part often.',
  },
  {
    name: 'Incremental',
    short: 'Built in working parts',
    idea: 'The system is built in parts (increments). Each increment is tested and delivered, and the next adds more functions.',
    strength: 'Users get a working part early, and risk is spread.',
    weakness: 'The parts must fit together, so the overall design needs care.',
    suits: 'A large system that can be released in stages.',
  },
  {
    name: 'Agile',
    short: 'Short cycles with constant feedback',
    idea: 'The team works in short cycles, delivers working software often and changes plans when feedback or needs change.',
    strength: 'Copes well with changing requirements.',
    weakness: 'Needs close contact with the user and good teamwork.',
    suits: 'A project where the requirements are likely to change.',
  },
];

export interface DesignTool {
  acronym: string;
  expansion: string;
  use: string;
}

export const DESIGN_TOOLS: readonly DesignTool[] = [
  { acronym: 'TOE', expansion: 'Task, Objects, Events', use: 'Lists what the program must do, the objects (controls) involved, and the events that trigger the code.' },
  { acronym: 'IPO', expansion: 'Input, Process, Output', use: 'Shows what goes in, what is done with it and what comes out.' },
  { acronym: 'CRC', expansion: 'Class, Responsibilities, Collaborators', use: 'A card for one class: what it knows and does, and which other classes it works with.' },
  { acronym: 'UML', expansion: 'Unified Modeling Language', use: 'A standard set of diagrams, such as the use case diagram and the basic class diagram.' },
];

/** Noun-verb analysis of a short task description. The nouns suggest classes or attributes and the verbs suggest methods. */
export const NOUN_VERB = {
  sentence: 'A member borrows a book. The librarian records the loan.',
  nouns: ['member', 'book', 'librarian', 'loan'],
  verbs: ['borrows', 'records'],
} as const;

/** An IPO diagram for a small task. */
export const IPO_EXAMPLE = {
  task: 'Calculate the average of three test marks',
  input: 'Three marks',
  process: 'Add the marks and divide the total by 3',
  output: 'The average mark',
} as const;
