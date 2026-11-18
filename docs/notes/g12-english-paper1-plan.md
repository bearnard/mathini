# Grade 12 English HL Paper 1 (language in context): additive lessons (#1016)

Source: `audit/caps-status-2026-11-18.md` ("Paper 1 language-in-context reading skills after Term 1: still open") and the CAPS English HL Grades 10-12 (fet_eng_hl.txt): Paper 1 is 70 marks in 2 hours: A comprehension (30, 700 to 800 words, may include a visual or graphic text), B summary (10, about 350 words, 80 to 90 words), C language structures and conventions (30: vocabulary and language use, sentence structures, critical language awareness; Appendix 1 reference chart).

The existing lesson "Paper 1 Language Practice" (T1) is four short slides and eight questions on comprehension, summary rules, visual literacy and editing. Section C topics were absent (figures of speech, synonyms, idioms, etymology, active and passive voice, direct and indirect speech, clauses, concord, modals, punctuation, fact and opinion, denotation and connotation, emotive language, bias, stereotyping, language and power).

| Term | Lesson (task slug) | Content |
|---|---|---|
| T1 | Paper 1: Vocabulary and Figures of Speech (`gr12-p1-vocabulary-figures-t1`) | synonyms, antonyms, homophones, homonyms, one word for a phrase, figures of speech, idioms, word origins, prefixes and roots |
| T1 | Paper 1: Summary Writing (`gr12-p1-summary-writing-t1`) | the 10-mark summary: seven points, 80 to 90 words, own words, counting words |
| T2 | Paper 1: Sentence Structures and Conventions (`gr12-p1-sentence-structures-t2`) | voice, direct and indirect speech, clauses, concord, modals, conditionals, subjunctive, punctuation |
| T2 | Paper 1: Comprehension Questions and Visual Texts (`gr12-p1-comprehension-visual-t2`) | the paper layout and time per mark, question kinds, answering for the marks, advertisements and cartoons |
| T3 | Paper 1: Critical Language Awareness (`gr12-p1-critical-language-t3`) | fact and opinion, denotation and connotation, emotive and manipulative language, bias and stereotyping, language and power |

Each lesson has 4 content slides plus a check, 14 curated questions asked directly as "you", and original short sentences and passages only (no published text). Tests (`src/g12EngPaper1.test.ts`, `paper1.test.ts`) recompute the paper marks, the minutes per mark (120 / 70 = 1,7), the section times (51, 17, 51), the word counts (a hyphenated word or a contraction counts as one; the model summary has 84 words, in the 80 to 90 range) and the percentages.
