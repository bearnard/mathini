import type { XhLesson } from '../../../../../components/subjects/lesson/xhosaLessonData';

// isiXhosa FAL Grade 9 Term 2, Reading & Viewing. Every isiXhosa line is listed in audit/xhosa-g9-teacher-notes.md for a first-language check.
// Novel, folklore and media texts are described in English: a teacher should supply an isiXhosa text for each.
const lesson: XhLesson = {
  slides: [
    {
      title: 'Characterisation and motivation',
      rule: 'Characterisation is how an author builds a character: through actions, dialogue, thoughts and description. To find motivation, ask: why does this character act this way? Look for the cause in the text.',
      workedTitle: 'What do we learn about Sipho?',
      examples: [
        { xh: 'USipho uthule.', en: 'Sipho is quiet. (description)' },
        { xh: 'USipho uthi, “Andazi.”', en: 'Sipho says, “I do not know.” (dialogue)' },
        { xh: 'USipho uyoyika uvavanyo.', en: 'Sipho is afraid of the test. (motivation: fear)' },
      ],
      mistake: 'Do not judge a character by name, clothes or age, or by whether you like them. Use what the character does and says.',
    },
    {
      title: 'Character growth and plot sequencing',
      rule: 'Character growth means a character changes or learns through the events. Plot sequencing means arranging the events in the order they happen, so that you see how one event leads to the next. Time words help: kuqala, emva koko, ekugqibeleni.',
      workedTitle: 'Sipho before and after',
      examples: [
        { xh: 'Kuqala USipho uyoyika uvavanyo.', en: 'First Sipho is afraid of the test.' },
        { xh: 'Emva koko ufunda rhoqo.', en: 'Then he studies often.' },
        { xh: 'Ekugqibeleni uyaphumelela.', en: 'Finally he succeeds. (he has grown in confidence)' },
      ],
      mistake: 'Do not mix up the order of events or ignore cause and effect. The test comes first and the studying follows because of it.',
    },
    {
      title: 'Folklore and its message',
      rule: 'Folklore teaches cultural values and life lessons through stories passed down across generations. The message is the main lesson the author wants to share. It is deeper than the plot and often shown, not stated.',
      workedTitle: 'A folktale opening and a value (teacher to supply a full isiXhosa folktale)',
      examples: [
        { xh: 'Kwakukho inja.', en: 'There was a dog. (how a folktale can begin)' },
        { xh: 'Umntu ngumntu ngabantu.', en: 'A person is a person through other people. (a value: ubuntu)' },
        { xh: 'Isandla sihlamba esinye.', en: 'One hand washes the other. (a lesson: help one another)' },
      ],
      mistake: 'Folklore is not only facts and dates or entertainment without a lesson. Look for the value behind the story.',
    },
    {
      title: 'Media texts and visual literacy',
      rule: 'Media texts such as advertisements use words, images, colours and layout to persuade and attract attention. Visual literacy means you can read and make sense of images and designs. Every design choice serves the message.',
      workedTitle: 'Reading an advert (English description; teacher to supply an isiXhosa advert)',
      examples: [
        { xh: 'Thenga namhlanje!', en: 'Buy today! (a command that persuades)' },
        { xh: 'Khawuleza!', en: 'Hurry! (creates urgency)' },
        { xh: 'Umfanekiso', en: 'Picture: smiling people suggest the product makes you happy.' },
      ],
      mistake: 'Images are not there to fill space or hide information. Ask what each picture, colour and word wants you to feel or do.',
    },
  ],
  checks: [
    { q: 'How is characterisation developed?', a: 'Through actions, dialogue, thoughts and description.' },
    { q: 'What does character growth mean?', a: 'A character changes or learns through the events.' },
    { q: 'What question helps you find a character’s motivation?', a: 'Why does this character act this way?' },
    { q: 'Why does an advertisement use pictures and colours?', a: 'To persuade and attract attention.' },
  ],
};

export default lesson;
