import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 1, Language Structures. Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Present tense: habits and general truths',
      rule: 'The simple present tense describes what happens regularly or what is generally true. Subject marker + verb: ndi- (I), u- (he, she), si- (we), ba- (they). Time words such as rhoqo (often, always) fit this tense.',
      wordParts: { word: 'Ndifunda', en: 'I read (as a habit)', parts: [{ t: 'ndi', label: 'I' }, { t: 'fund', label: 'read' }, { t: 'a', label: 'ending' }] },
      workedTitle: 'Habits and general truths',
      examples: [
        { xh: 'Ndifunda incwadi namhlanje.', en: 'I read a book today.' },
        { xh: 'Ndifunda rhoqo.', en: 'I read often.' },
        { xh: 'Ilanga liphuma empuma.', en: 'The sun rises in the east. (a general truth)' },
        { xh: 'Imvula iyana ehlotyeni.', en: 'It rains in summer.' },
      ],
      mistake: 'Do not use the present tense for a finished event. Izolo (yesterday) points to the past, not the present.',
    },
    {
      title: 'Past and future: converting tenses',
      rule: 'Past (finished): change the ending -a to -ile. Future: subject marker + za + ku- + verb. To convert a sentence, keep the subject and change only the verb and the time word. The past tense shows an action already happened.',
      wordParts: { word: 'Ndiza kufunda', en: 'I will read', parts: [{ t: 'ndi', label: 'I' }, { t: 'za', label: 'will' }, { t: 'ku', label: 'to' }, { t: 'fund', label: 'read' }, { t: 'a', label: 'ending' }] },
      workedTitle: 'One sentence in three tenses',
      examples: [
        { xh: 'Ndifunda incwadi.', en: 'I read a book. (present)' },
        { xh: 'Ndifundile incwadi izolo.', en: 'I read a book yesterday. (past)' },
        { xh: 'Ndiza kufunda incwadi ngomso.', en: 'I will read a book tomorrow. (future)' },
        { xh: 'Bafundile kudala.', en: 'They read long ago.' },
      ],
      mistake: 'Do not change the time word and forget the verb. Write Ndifundile izolo, not Ndifunda izolo.',
    },
    {
      title: 'Concords: the words must agree',
      rule: 'Concord means agreement between the words in a phrase. Every noun belongs to a class, and the adjective and the verb take a marker that matches that class. Umfundi becomes abafundi in the plural, so the markers change too.',
      wordParts: { word: 'Abafundi bayafunda', en: 'The learners are reading', parts: [{ t: 'aba', label: 'class 2' }, { t: 'fundi', label: 'learner' }, { t: 'ba', label: 'they' }, { t: 'ya', label: 'now' }, { t: 'fund', label: 'read' }, { t: 'a', label: 'ending' }] },
      workedTitle: 'Same noun, matching markers',
      examples: [
        { xh: 'Umntwana omncinci uyadlala.', en: 'The small child is playing.' },
        { xh: 'Abantwana abancinci bayadlala.', en: 'The small children are playing.' },
        { xh: 'Incwadi enkulu ihle.', en: 'The big book is nice.' },
        { xh: 'Iincwadi ezinkulu zihle.', en: 'The big books are nice.' },
      ],
      mistake: 'Do not keep the singular marker with a plural noun. Write Abantwana abancinci bayadlala, not Abantwana omncinci uyadlala.',
    },
    {
      title: 'Direct and indirect speech',
      rule: 'Direct speech gives the exact words of the speaker, in quotation marks. Indirect speech reports what was said without the exact words, and no quotation marks. You adjust the pronoun (ndi- becomes u-) and the tense to fit the reporting.',
      workedTitle: 'From direct to indirect',
      examples: [
        { xh: 'UThando uthi, “Ndiyafunda.”', en: 'Thando says, “I am reading.” (direct)' },
        { xh: 'UThando uthi uyafunda.', en: 'Thando says she is reading. (indirect)' },
        { xh: 'USipho uthe, “Ndiza kufika ngomso.”', en: 'Sipho said, “I will arrive tomorrow.” (direct)' },
        { xh: 'USipho uthe uza kufika ngomso.', en: 'Sipho said he will arrive tomorrow. (indirect)' },
      ],
      mistake: 'Do not keep ndi- when you report someone else. Thando says she is reading is UThando uthi uyafunda, not uThando uthi ndiyafunda.',
    },
    {
      title: 'Idioms and punctuation',
      rule: 'An idiom is a phrase with a cultural meaning that is not literal, so never translate it word for word. For punctuation: start a sentence with a capital letter, end it with a full stop or a question mark, and write a hyphen before a number: ngo-11.',
      workedTitle: 'Two idioms and a punctuated sentence',
      examples: [
        { xh: 'Isandla sihlamba esinye.', en: 'One hand washes the other. (people help one another)' },
        { xh: 'Umntu ngumntu ngabantu.', en: 'A person is a person through other people. (ubuntu)' },
        { xh: 'Ndiya esikolweni. Ndifika ngo-7.', en: 'I go to school. I arrive at 7. (capital letters and full stops)' },
      ],
      mistake: 'Do not run sentences together without capital letters or full stops: uthethe wafika ngo-11 is hard to read.',
    },
  ],
  checks: [
    { q: 'Which tense describes habits and general truths: present, past or future?', a: 'The present tense, for example Ndifunda rhoqo.' },
    { q: 'Change to the past: Ndifunda incwadi izolo.', a: 'Ndifundile incwadi izolo.' },
    { q: 'Give the plural: Umntwana omncinci uyadlala.', a: 'Abantwana abancinci bayadlala.' },
    { q: 'Report in indirect speech: UThando uthi, “Ndiyafunda.”', a: 'UThando uthi uyafunda. (ndi- becomes u-, no quotation marks)' },
  ],
};

export default lesson;
