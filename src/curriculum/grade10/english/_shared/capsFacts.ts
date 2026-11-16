// Facts about the Grade 10 English Home Language programme that the lessons quote, each from the DBE CAPS FET English HL Grades 10-12
// document (page numbers are the document's own). They live in ONE place so a lesson and its test cannot disagree: the test file
// (capsFacts.test.ts) asserts these values and checks that the lessons use them.

export const CAPS_G10 = {
  /** Test 1 (term 1), language in context: out of 35 marks (p. 77-78). */
  test1Marks: 35,
  /** Writing tasks in term 1: the essay is out of 50, the transactional text out of 25 (p. 78). */
  essayMarks: 50,
  transactionalMarks: 25,
  /** End-of-year examination, out of 300: Paper 1 (70), Paper 2 (80), Paper 3 (100), Paper 4 oral (50) (p. 78, 80-82). */
  paper1Marks: 70,
  paper2Marks: 80,
  paper3Marks: 100,
  paper4Marks: 50,
  /** Mid-year examination: 250 marks (Paper 1, 2 and 3) (p. 78). */
  midyearMarks: 250,
  /** Paper 1: A comprehension 30, B summary 10, C language structures and conventions 30 (p. 80). */
  comprehensionMarks: 30,
  summaryMarks: 10,
  languageMarks: 30,
  /** Lengths for Grade 10 (p. 29, 39, 80-82). */
  comprehensionWords: '500-600',
  summaryPassageWords: 280,
  essayWords: '300-350',
  transactionalWords: '180-200',
  poetryEssayWords: '150-200',
  novelDramaEssayWords: '300-350',
  listeningWords: 200,
  /** Prescribed poems in Grade 10 (p. 20-ish table of genres: "Grade 10 - 10 poems"). */
  poems: 10,
} as const;

/** The words in a text, the way a marker counts them: runs of characters separated by spaces (a hyphenated word is one word). */
export const wordCount = (text: string): number => text.trim().split(/\s+/).filter(Boolean).length;
