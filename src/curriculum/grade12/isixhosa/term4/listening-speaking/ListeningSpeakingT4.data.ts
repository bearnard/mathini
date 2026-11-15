import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 12 Term 4, Listening & Speaking. Every isiXhosa line is listed in audit/xhosa-g11-12-teacher-notes.md for a first-language check.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Final oral: rubric and evidence',
      rule: 'Use the mark sheet (rubric) to see the criteria: content, pronunciation, fluency and register. Review your recordings and feedback from earlier tasks, note what improved and what still needs work, then practise those parts.',
      workedTitle: 'Self-assessment sentences',
      examples: [
        { xh: 'Ndiyathetha kakuhle.', en: 'I speak well. (a strength)' },
        { xh: 'Ndifuna ukuphucula ukuthetha kwam.', en: 'I want to improve my speaking. (a weakness)' },
        { xh: 'Ndiyaphulaphula kwakhona.', en: 'I listen again. (reviewing a recording)' },
      ],
      mistake: 'A rubric does not replace practice. Use it to find your weak areas, then work on them.',
      vocab: [
        { word: 'Phulaphula', phonetic: "[pʰula'pʰula]", meaning: 'Listen' },
        { word: 'Thetha', phonetic: "[tɛta]", meaning: 'Speak' },
      ],
    },
    {
      title: 'Listening recall: chunking and signal words',
      rule: 'Chunking means grouping details into small units so they are easier to remember. Signal words show the structure: sequence (first, finally) and contrast (however). Listen for them and note each chunk as you hear it.',
      workedTitle: 'Chunk a short announcement',
      examples: [
        { xh: 'Intlanganiso iza kubakho ngoLwesihlanu.', en: 'The meeting will be on Friday. (chunk 1: day)' },
        { xh: 'Iza kuqala ngentsimbi yesithoba.', en: 'It will start at nine o\'clock. (chunk 2: time)' },
        { xh: 'Iza kuba kwiholo.', en: 'It will be in the hall. (chunk 3: place)' },
        { xh: 'Kuqala, ... Nangona kunjalo, ... Ekugqibeleni, ...', en: 'Firstly, ... However, ... Finally, ... (signal words)' },
      ],
      mistake: 'Words like "wow" or "cool" are not signal words. Signal words show order or contrast.',
    },
    {
      title: 'Spoken fluency: starters and self-correction',
      rule: 'Fluency grows when you pause between ideas, not in the middle of a phrase. A formulaic starter helps you begin smoothly. If you make an error, correct it briefly and carry on without stopping.',
      workedTitle: 'Starters and repairs',
      examples: [
        { xh: 'Ndiyathetha malunga nemfundo.', en: 'I am speaking about education. (starter: Ndiyathetha malunga ne...)' },
        { xh: 'Ndiza kuthetha ngemfundo.', en: 'I will speak about education.' },
        { xh: 'Uxolo, mandiphinde.', en: 'Sorry, let me say that again. (self-correction)' },
      ],
      mistake: 'Do not restart every sentence from the beginning, fill pauses with slang, or speak so fast that meaning is lost.',
    },
    {
      title: 'Register control in the oral exam',
      rule: 'The exam is a formal setting. Aim for formal vocabulary, complete sentences and clear pronunciation. Avoid slang, unnecessary code-switching and unfinished sentences. Matching your register to the context is part of good communication.',
      workedTitle: 'Formal choices',
      examples: [
        { xh: 'Molweni, mhlekazi.', en: 'Hello, sir. (formal)' },
        { xh: 'Ndicela ukuthetha.', en: 'May I speak? (formal request)' },
        { xh: 'Ndicinga ukuba imfundo ibalulekile.', en: 'I think that education is important. (isiXhosa word imfundo)' },
        { xh: 'Ndiyabulela, mhlekazi.', en: 'Thank you, sir. (formal thanks)' },
      ],
      mistake: 'Mixing English into a sentence, such as "education" in place of imfundo, counts as code-switching. Use the isiXhosa word in an assessed task.',
    },
  ],
  checks: [
    { q: 'How should you use an oral rubric?', a: 'To check your strengths and weaknesses against the criteria, then practise the weak areas.' },
    { q: 'What does chunking help you do? Name one signal word in isiXhosa.', a: 'Remember information in small, manageable parts. For example: kuqala (firstly) or ekugqibeleni (finally).' },
    { q: 'Give an isiXhosa starter phrase for fluency.', a: 'Ndiyathetha malunga ne... (I am speaking about ...)' },
    { q: 'What should you avoid in a final oral task, and why?', a: 'Slang and unnecessary code-switching, because the exam needs a formal register.' },
  ],
};

export default lesson;
