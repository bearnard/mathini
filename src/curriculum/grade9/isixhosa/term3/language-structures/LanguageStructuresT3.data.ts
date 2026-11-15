import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 3, Language Structures. Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Complex sentences and conjunctions',
      rule: 'A complex sentence has one independent clause (it can stand alone) and one or more dependent clauses. Subordinating conjunctions join the dependent clause to the independent one: kuba (because), nangona (although), xa (when), ukuze (so that).',
      workedTitle: 'Independent clause + dependent clause',
      examples: [
        { xh: 'Ndiyafunda kuba ndifuna ukuphumelela.', en: 'I study because I want to succeed.' },
        { xh: 'Nangona ndidiniwe, ndiyafunda.', en: 'Although I am tired, I study.' },
        { xh: 'Xa ndifika ekhaya, ndiyafunda.', en: 'When I arrive home, I study.' },
        { xh: 'Ndiya esikolweni ukuze ndifunde.', en: 'I go to school so that I may learn.' },
      ],
      mistake: 'A dependent clause cannot stand alone. “Kuba ndifuna ukuphumelela.” alone is not a full sentence.',
    },
    {
      title: 'Combining sentences',
      rule: 'When you combine sentences, use conjunctions to link related ideas clearly. Choose the conjunction that shows the true relation: reason, contrast, result or purpose. Keep the verbs correct in the new sentence.',
      workedTitle: 'Two short sentences become one',
      examples: [
        { xh: 'Ndiyafunda. Ndifuna ukuphumelela.', en: 'I study. I want to succeed. (two sentences)' },
        { xh: 'Ndiyafunda kuba ndifuna ukuphumelela.', en: 'I study because I want to succeed. (reason)' },
        { xh: 'Ndigulile. Andiyi esikolweni.', en: 'I am sick. I am not going to school.' },
        { xh: 'Ndigulile, ngoko andiyi esikolweni.', en: 'I am sick, so I am not going to school. (result)' },
      ],
      mistake: 'Do not join unrelated ideas, or choose a conjunction that changes the meaning. Kodwa (but) would be wrong here: being sick is the reason for staying home, not a contrast.',
    },
    {
      title: 'Punctuation: comma, semicolon, quotation marks',
      rule: 'Use a comma after an opening clause and between items in a list. A semicolon (;) links two related independent clauses or separates items in a list. Use quotation marks around direct speech and a hyphen before a number: ngo-7 (at 7 o’clock).',
      workedTitle: 'Marks in isiXhosa sentences',
      examples: [
        { xh: 'Ndithanda ukufunda, ukubhala nokucula.', en: 'I like reading, writing and singing. (commas in a list)' },
        { xh: 'Ndiyafunda; uThando uyabhala.', en: 'I am reading; Thando is writing. (semicolon between two clauses)' },
        { xh: 'USipho uthi, “Ndiyavuya.”', en: 'Sipho says, “I am happy.” (quotation marks)' },
      ],
      mistake: 'A semicolon does not end a sentence and does not replace a full stop before a new idea that is unrelated.',
    },
    {
      title: 'Editing: word form, parallel structure and vocabulary',
      rule: 'Editing your own work catches errors and improves clarity before you submit. Check the word form: markers are joined to the verb (ndifunda, not ndi funda). Keep items in a series in the same form. Refine vocabulary by choosing a more precise word.',
      workedTitle: 'Error and correction',
      examples: [
        { xh: 'Ndi funda incwadi. → Ndifunda incwadi.', en: 'I read a book. (join the marker to the verb)' },
        { xh: 'Ndithanda ukufunda, ukubhala nokucula.', en: 'I like to read, to write and to sing. (parallel: all start with uku-)' },
        { xh: 'Ndonwabile kakhulu.', en: 'I am very happy. (a precise feeling word, better than a vague one)' },
      ],
      mistake: 'Do not submit without checking. Do not mix forms in a series, such as ukufunda, ukubhala nabahlobo.',
    },
  ],
  checks: [
    { q: 'What does a complex sentence contain?', a: 'One independent clause and one or more dependent clauses.' },
    { q: 'Join the sentences with a conjunction: Ndiyafunda. Ndifuna ukuphumelela.', a: 'Ndiyafunda kuba ndifuna ukuphumelela.' },
    { q: 'What do semicolons do?', a: 'Link two related independent clauses or separate items in a list.' },
    { q: 'Correct this: Ndi funda incwadi.', a: 'Ndifunda incwadi. (the marker is joined to the verb)' },
  ],
};

export default lesson;
