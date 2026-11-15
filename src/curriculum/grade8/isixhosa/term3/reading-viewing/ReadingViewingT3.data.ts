import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 8 Term 3, Reading & Viewing. Every isiXhosa line is listed in audit/xhosa-g8-teacher-notes.md for a first-language check.
// Drama and poems are described in English where noted: a teacher should supply a longer isiXhosa scene or poem.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Drama scenes: speaker labels',
      rule: 'In a drama script, each line starts with the speaker’s name. Speaker labels tell you who is talking. Words in brackets are stage directions that tell actors what to do.',
      workedTitle: 'Read the speaker labels',
      examples: [
        { xh: 'UThando: Molo, Sipho.', en: 'Thando: Hello, Sipho.' },
        { xh: 'USipho: Molo, Thando. Unjani?', en: 'Sipho: Hello, Thando. How are you?' },
        { xh: 'UThando: Ndiphilile.', en: 'Thando: I am well.' },
      ],
      mistake: 'Do not read the label as part of the speech or mix up the speakers. The name before the colon shows who talks.',
    },
    {
      title: 'Conflict in a scene',
      rule: 'Conflict is the central tension or problem. Ask why a character says these words here, and what the character wants.',
      workedTitle: 'Find the tension',
      examples: [
        { xh: 'UThando: Ndifuna incwadi yam!', en: 'Thando: I want my book!' },
        { xh: 'USipho: Ayikho kum.', en: 'Sipho: It is not with me.' },
        { xh: 'Kutheni uThando ethetha ngolo hlobo?', en: 'Why does Thando speak like this? (she wants her book back)' },
      ],
      mistake: 'Do not answer from memory only. Re-read the lines and use the words of the scene as evidence.',
    },
    {
      title: 'Poetry: mood and imagery',
      rule: 'Mood is the feeling a poem creates for the reader. It comes from the images and the words chosen. Repeated words stress what matters.',
      workedTitle: 'Two images, two moods (teacher to supply an isiXhosa poem)',
      examples: [
        { xh: 'Ilanga liphumile.', en: 'The sun has come out. (bright, hopeful image)' },
        { xh: 'Ndonwabile.', en: 'I am happy. (the feeling confirms the mood)' },
        { xh: 'Imvula iyana.', en: 'It is raining. (read the other lines before you decide the mood)' },
      ],
      mistake: 'Mood is not the number of lines or the poet’s name. It is the feeling the words create.',
    },
    {
      title: 'Short stories and a literary response',
      rule: 'For a short story, track the character, the events and the message. A literary response gives your personal view and supports it with the text. Pictures can add clues.',
      workedTitle: 'Personal view plus evidence',
      examples: [
        { xh: 'Ndicinga ukuba uSipho unobubele.', en: 'I think that Sipho is kind.' },
        { xh: 'Kuba wanika umhlobo wakhe isonka.', en: 'Because he gave his friend bread.' },
      ],
      mistake: 'A view with no reference to the text is weak. Do not copy another learner; re-read and find your own evidence.',
    },
  ],
  checks: [
    { q: 'What do speaker labels in a drama script do?', a: 'They show who is talking.' },
    { q: 'What is conflict in a drama scene?', a: 'The central tension or problem.' },
    { q: 'What is mood in poetry?', a: 'The feeling created for the reader.' },
    { q: 'What should a literary response include?', a: 'A personal view supported by the text.' },
  ],
};

export default lesson;
