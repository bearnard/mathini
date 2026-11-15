import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa SAL Grade 7 Term 3. Every isiXhosa line is listed in audit/teacher-check.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Give an opinion with a reason',
      rule: 'Introduce your opinion politely with Ndicinga ukuba (I think that). Then give a clear reason with kuba (because).',
      workedTitle: 'Opinion plus reason',
      examples: [
        { xh: 'Ndicinga ukuba kufuneka sicoce indawo yethu.', en: 'I think we must clean our area.' },
        { xh: 'Ndicinga ukuba ukufunda kubalulekile kuba kunceda ikamva lam.', en: 'I think studying is important because it helps my future.' },
      ],
      mistake: 'An opinion with no reason, or a reason that has nothing to do with the opinion.',
    },
    {
      title: 'Retell a folktale in order',
      rule: 'Balisa (retell) the story from the beginning. Use order words: ekuqaleni (at the beginning), emva koko (then), ekugqibeleni (at the end).',
      workedTitle: 'Order words for a retell',
      examples: [
        { xh: 'Ekuqaleni, kwakukho inkwenkwe encinane.', en: 'At the beginning, there was a small boy.' },
        { xh: 'Emva koko, yahamba.', en: 'Then it went away.' },
        { xh: 'Ekugqibeleni, yafunda isifundo.', en: 'At the end, it learned a lesson.' },
      ],
      mistake: 'Starting with the ending. A retell begins at the beginning of the story.',
    },
    {
      title: 'Interviews and listening',
      rule: 'Ask open questions and listen. Wait for the answer, then ask a follow-up question.',
      workedTitle: 'An interview question and a follow-up',
      examples: [
        { xh: 'Yintoni oyithandayo ngendawo ohlala kuyo?', en: 'What do you like about the place where you live?' },
        { xh: 'Kutheni uyithanda?', en: 'Why do you like it?' },
      ],
      mistake: 'Talking while the other person is answering. Good listening means waiting, then asking.',
    },
    {
      title: 'Compare cultural practices',
      rule: 'Name the practice (isiko, plural amasiko) and say how two groups do it. Show respect: intlonipho.',
      workedTitle: 'Talking about customs',
      examples: [
        { xh: 'Kwikhaya lethu sigcina amasiko ngentlonipho.', en: 'In our home we keep our customs with respect.' },
        { xh: 'Amasiko ayafana kwaye ayahlukile.', en: 'Customs are alike and also different.' },
      ],
      mistake: 'Saying that one custom is better than another. Describe and compare, with respect.',
      vocab: [
        { word: 'Uluvo', meaning: 'Opinion' },
        { word: 'Intsomi', meaning: 'Folktale' },
        { word: 'Umxholo', meaning: 'Theme / main idea' },
        { word: 'Kutheni?', meaning: 'Why?' },
      ],
    },
  ],
  checks: [
    { q: 'You want to say what you think. Which words do you start with: Ndicinga ukuba or Ndiyahamba?', a: 'Ndicinga ukuba (I think that)' },
    { q: 'What comes first in a folktale retell?', a: 'The beginning of the story.' },
    { q: 'What follows a good interview answer?', a: 'A follow-up question, after waiting and listening.' },
    { q: 'What does intlonipho mean?', a: 'Respect.' },
  ],
};

export default lesson;
