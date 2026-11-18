// Grades 7 to 9 English HL oral lessons: the numbers printed in the lessons are computed here (tested in oral789.test.ts). Imaginary teaching data.

const exact = (num: number, den: number): number => {
  if (!Number.isInteger(num) || !Number.isInteger(den) || den <= 0 || num % den !== 0) throw new Error(`${num}/${den} is not a whole number`);
  return num / den;
};

/** Words a speaker says in a number of minutes at a pace in words a minute. */
export const wordsFor = (minutes: number, wpm: number): number => minutes * wpm;
/** Minutes needed to say a number of words at a pace (whole minutes only). */
export const minutesFor = (words: number, wpm: number): number => exact(words, wpm);

// Grade 7: reading aloud and listening
export const READ = { words: 240, wpm: 120 } as const; // a passage and a steady reading pace
export const readMinutes = (): number => minutesFor(READ.words, READ.wpm);
export const LISTEN = { words: 300, wpm: 150 } as const; // a passage read to the class
export const listenMinutes = (): number => minutesFor(LISTEN.words, LISTEN.wpm);

// Grade 7: a debate with three speakers a side
export const DEBATE7 = { speakersPerSide: 3, minutesEach: 2, rebuttalMinutes: 1 } as const;
export const sideMinutes = (d: { speakersPerSide: number; minutesEach: number } = DEBATE7): number => d.speakersPerSide * d.minutesEach;
export const debateMinutes = (d: typeof DEBATE7 = DEBATE7): number => 2 * sideMinutes(d) + 2 * d.rebuttalMinutes;

// Grade 8: prepared speech, interview, listening for detail
export const SPEECH8 = { minutes: 3, wpm: 120, openingWords: 45, closingWords: 45 } as const;
export const speech8Words = (): number => wordsFor(SPEECH8.minutes, SPEECH8.wpm);
export const speech8BodyWords = (): number => speech8Words() - SPEECH8.openingWords - SPEECH8.closingWords;
export const INTERVIEW8 = { questions: 10, minutesEach: 1, introMinutes: 2 } as const;
export const interviewMinutes = (i: typeof INTERVIEW8 = INTERVIEW8): number => i.questions * i.minutesEach + i.introMinutes;
export const DETAIL8 = { words: 360, wpm: 120, notesWords: 30 } as const;
export const detailMinutes = (): number => minutesFor(DETAIL8.words, DETAIL8.wpm);

// Grade 9: prepared speech, meetings, panel
export const SPEECH9 = { minutes: 4, wpm: 130, cards: 5 } as const;
export const speech9Words = (): number => wordsFor(SPEECH9.minutes, SPEECH9.wpm);
export const speech9WordsPerCard = (): number => exact(speech9Words(), SPEECH9.cards);
export const MEETING9 = { items: 6, minutesEach: 5 } as const;
export const meetingMinutes = (m: typeof MEETING9 = MEETING9): number => m.items * m.minutesEach;
export const VOTE9 = { forVotes: 12, against: 7, abstain: 3 } as const;
export const votesCast = (v: typeof VOTE9 = VOTE9): number => v.forVotes + v.against;
export const present = (v: typeof VOTE9 = VOTE9): number => votesCast(v) + v.abstain;
export const carried = (v: typeof VOTE9 = VOTE9): boolean => v.forVotes > v.against;
export const PANEL9 = { speakers: 4, minutesEach: 3, chairMinutes: 2, questionMinutes: 10 } as const;
export const panelMinutes = (p: typeof PANEL9 = PANEL9): number => p.speakers * p.minutesEach + p.chairMinutes + p.questionMinutes;
