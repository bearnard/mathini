import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { PlotCurve, PoemParts } from '../../../../../components/diagrams/english/EnglishPictures';

export const POEM_LINES: [string, string, string, string] = [
  'Rain taps the roof in the early dark,',
  'a drummer with nowhere to go.',
  'The street lamps blink, the gutters hum,',
  'and the whole town breathes below.',
];

export const learnSteps: LearnStep[] = [
  {
    title: 'Three literary genres',
    content: (
      <div className="space-y-4">
        <Rule>A genre is a type of text. In Grade 10 you study three literary genres: the novel, drama and poetry.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Novel</strong>
            <p className="mt-1 text-sm text-slate-700">A long story in prose, told by a narrator and divided into chapters.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Drama</strong>
            <p className="mt-1 text-sm text-slate-700">A play written to be performed. It is made of dialogue and stage directions, in acts and scenes.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Poetry</strong>
            <p className="mt-1 text-sm text-slate-700">Compressed language set out in lines and stanzas, full of images and rhythm.</p>
          </div>
        </div>
        <Worked
          title="Which genre is each extract?"
          steps={[
            <>Look at the layout first. <em>THABO: (looking at the door) You said you would be home by six.</em> A speaker's name, a colon and a bracketed action: this is <strong>drama</strong>.</>,
            <><em>The bus stopped at Mahikeng at dusk, and Lerato counted the coins in her palm.</em> A narrator tells what happened in a full sentence: this is <strong>prose</strong>, as in a novel or short story.</>,
            <><em>Rain on the tin roof, / a drumbeat for the dark.</em> Short lines that stop before the edge of the page: this is <strong>poetry</strong>.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The parts of a book',
    content: (
      <div className="space-y-4">
        <Rule>Books carry features that help you find your way. Knowing them saves time in an exam and in every subject.</Rule>
        <ul className="grid gap-2 text-left text-slate-700 md:grid-cols-2">
          <li className="rounded-xl bg-slate-50 p-3"><strong>Title page:</strong> the title, the author and usually the publisher.</li>
          <li className="rounded-xl bg-slate-50 p-3"><strong>Contents page:</strong> chapter titles with their page numbers, in book order.</li>
          <li className="rounded-xl bg-slate-50 p-3"><strong>Blurb:</strong> a short description on the back cover that tells you what the book is about and tempts you to read it.</li>
          <li className="rounded-xl bg-slate-50 p-3"><strong>Index:</strong> an alphabetical list of topics and names with the pages where they appear, at the back of a non-fiction book.</li>
          <li className="rounded-xl bg-slate-50 p-3"><strong>Glossary:</strong> a list of difficult words with their meanings.</li>
          <li className="rounded-xl bg-slate-50 p-3"><strong>Headings and captions:</strong> a heading names a section; a caption is a title or comment attached to a picture or photo.</li>
        </ul>
        <Worked
          title="Where do you look?"
          steps={[
            <>You want to know on which pages a person is mentioned anywhere in the book: use the <strong>index</strong>, because it lists every page for each name.</>,
            <>You want the page where Chapter 4 begins: use the <strong>contents page</strong>, because it follows the order of the book.</>,
            <>You are deciding whether to borrow the book: read the <strong>blurb</strong>.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'How a story is built',
    content: (
      <div className="space-y-4">
        <Rule>Plot is the pattern of connected events: one event causes the next. It is more than a list of what happened.</Rule>
        <PlotCurve />
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Setting:</strong> where and when the story happens.</li>
          <li><strong>Conflict:</strong> a struggle between characters, between a person and their circumstances or fate, or between opposing wishes inside one character.</li>
          <li><strong>Climax:</strong> the most exciting or important part of the story. It is not always the last page.</li>
          <li><strong>Narrator and point of view:</strong> a first-person narrator says &ldquo;I&rdquo;; a third-person narrator says &ldquo;he&rdquo;, &ldquo;she&rdquo; or &ldquo;they&rdquo;.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Theme, mood and tone',
    content: (
      <div className="space-y-4">
        <Rule>Theme is the central idea. Mood is the feeling or atmosphere. Tone is the attitude of the writer or speaker.</Rule>
        <Worked
          title="Tell them apart in one story"
          steps={[
            <>A story follows a boy who saves coins to repay a neighbour who once helped his family. Its <strong>subject</strong> is saving money.</>,
            <>Its <strong>theme</strong> is what it says about that subject, for example that kindness creates a debt of honour that money cannot fully settle.</>,
            <>The dark, quiet scenes at night make the <strong>mood</strong> tense. A warm, gently amused narrator gives it a kindly <strong>tone</strong>.</>,
          ]}
        />
        <Mistake>Mood and tone are not the same thing. Mood is what the <em>reader</em> feels in the scene; tone is how the <em>writer</em> sounds towards the subject. A theme is also not one word such as &ldquo;love&rdquo;: write it as a full idea.</Mistake>
      </div>
    ),
  },
  {
    title: 'Drama and poetry terms',
    content: (
      <div className="space-y-4">
        <Rule>Each genre has its own vocabulary. Use the right word and your answer shows you know the genre.</Rule>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-rose-50 p-4 text-sm text-slate-700">
            <strong className="text-rose-700">In a play</strong>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Act and scene: the big and small divisions of the play.</li>
              <li>Dialogue: what the characters say to each other.</li>
              <li>Stage directions: instructions for movement, sound and lighting, often in brackets.</li>
              <li>Monologue: one character speaks at length. In a soliloquy the character is alone and speaks their thoughts aloud.</li>
              <li>Dramatic irony: the audience knows more than the characters do.</li>
            </ul>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-sm text-slate-700">
            <strong className="text-emerald-700">In a poem</strong>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Line and stanza: a row of words, and a group of lines.</li>
              <li>Speaker: the voice in the poem, not always the poet.</li>
              <li>Rhyme: lines end with the same sound. Rhythm: a regular repeated pattern of sounds.</li>
              <li>Imagery: words that make pictures in the mind.</li>
            </ul>
          </div>
        </div>
        <PoemParts lines={POEM_LINES} />
        <p className="text-sm text-slate-600">
          In this original four-line poem the rain is called &ldquo;a drummer&rdquo;: a metaphor that also gives the rain a human action (personification).
        </p>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Which genre uses stage directions and dialogue, and is written to be performed?</>,
          <>Where in a non-fiction book can you find every page on which a topic appears?</>,
          <>A poem is about a drought. Another reader says its theme is &ldquo;drought&rdquo;. What is wrong with that answer?</>,
          <>A narrator says &ldquo;I walked home alone.&rdquo; Which point of view is this?</>,
        ]}
        answers={[
          <>Drama.</>,
          <>The index, at the back of the book.</>,
          <>&ldquo;Drought&rdquo; is the subject. A theme is a full idea about the subject, for example that people can endure hardship together.</>,
          <>First person.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is a genre?',
    options: ['A type of text, such as a novel or poem', 'The attitude of the writer to the subject', 'The place and time in which a story happens', 'The central idea that a text puts across'],
    answer: 'A type of text, such as a novel or poem',
    explanation: 'A genre is a category of text, such as novel, drama, poetry or business letter. The other options describe tone, setting and theme.',
  },
  {
    prompt: 'Which of the following is a feature of a drama text and not of a novel?',
    options: ['A third-person narrator', 'Chapters with headings', 'Stage directions in brackets', 'Long descriptive paragraphs of prose'],
    answer: 'Stage directions in brackets',
    explanation: 'A play is written to be performed, so it gives stage directions for movement, sound and lighting. A novel is told by a narrator in paragraphs and chapters.',
  },
  {
    prompt: 'A learner wants to find every page where a particular person is mentioned in a history textbook. Which part of the book should they use?',
    options: ['The index', 'The blurb', 'The title page', 'The contents page'],
    answer: 'The index',
    explanation: 'The index lists names and topics alphabetically with their page numbers. The contents page lists only chapters, in the order of the book.',
  },
  {
    prompt: 'What is the purpose of the blurb on the back cover of a book?',
    options: ['To list the pages on which each topic appears', 'To explain the meaning of difficult words', 'To tempt readers by describing the book', 'To name all the chapters in book order'],
    answer: 'To tempt readers by describing the book',
    explanation: 'The blurb is a short description for would-be readers. The index, glossary and contents page serve the other three purposes.',
  },
  {
    prompt: 'In literature, what does "plot" mean?',
    options: ['The place and time where the story happens', 'A pattern of connected events', 'The voice of the person who tells the story', 'The feeling that the story creates in the reader'],
    answer: 'A pattern of connected events',
    explanation: 'Plot is more than a list of events: it shows how events are linked by cause and effect. Place is setting, voice is narrator and feeling is mood.',
  },
  {
    prompt: 'Which statement about the climax of a story is correct?',
    options: ['It is always the last sentence of the story', 'It is the part that describes the setting', 'It is the high point and need not be at the end', 'It is the part where the narrator is introduced'],
    answer: 'It is the high point and need not be at the end',
    explanation: 'The climax is the high point of the story. Many stories continue after the climax to show what happens next.',
  },
  {
    prompt: 'A character wants to leave the village, but feels bound to stay and look after her grandmother. What kind of conflict is this?',
    options: ['A conflict between two different characters in the story', 'A conflict between two wishes inside one character', 'A conflict between the character and the weather', 'A conflict between the narrator and the reader'],
    answer: 'A conflict between two wishes inside one character',
    explanation: 'Conflict can arise from opposing desires or values in a character\'s own mind. Here the struggle is inside her, not with another person.',
  },
  {
    prompt: 'A short story is told as "I opened the gate and stepped into the yard." From which point of view is it told?',
    options: ['First person', 'Second person', 'Third person limited', 'Third person omniscient'],
    answer: 'First person',
    explanation: 'The narrator uses "I", so the story is told in the first person. A third-person narrator would use "he", "she" or "they".',
  },
  {
    prompt: 'What is the difference between the subject and the theme of a text?',
    options: ['The subject is the feeling; the theme is the place where it happens', 'The subject is found only in poems; the theme is found only in prose', 'The subject and the theme are two names for the same idea', 'The subject is the topic; the theme is the central idea about it'],
    answer: 'The subject is the topic; the theme is the central idea about it',
    explanation: 'A poem may be about drought (the subject) and show that people survive hard times by sharing (the theme). The theme is a full idea, not one word.',
  },
  {
    prompt: 'Which term describes the atmosphere or feeling that a scene creates?',
    options: ['Plot', 'Mood', 'Stanza', 'Blurb'],
    answer: 'Mood',
    explanation: 'Mood is the atmosphere or emotion of a text. Plot is the pattern of events, a stanza is a group of lines and a blurb is a back-cover description.',
  },
  {
    prompt: 'In a poem, what is a stanza?',
    options: ['A word that imitates a sound', 'A group of lines in a poem', 'The repeating of consonant sounds in a line', 'The person who speaks in the poem'],
    answer: 'A group of lines in a poem',
    explanation: 'Poems are divided into stanzas, which work like paragraphs. The speaker is the voice in the poem.',
  },
  {
    prompt: 'What is a soliloquy in a play?',
    options: ['A set of instructions for lighting and sound', 'A character alone, speaking their thoughts aloud', 'A short pause between two acts of a play', 'A conversation between two characters on the stage'],
    answer: 'A character alone, speaking their thoughts aloud',
    explanation: 'In a soliloquy the character speaks their thoughts aloud, so the audience learns what they feel. A monologue is also a long speech, but others may be listening.',
  },
  {
    prompt: 'What is dramatic irony?',
    options: ['A character says the opposite of what they mean', 'Two opposite words are placed together for effect', 'A character is alone and speaks their thoughts aloud', 'The audience knows more than the characters do'],
    answer: 'The audience knows more than the characters do',
    explanation: 'Dramatic irony raises tension because the audience sees danger or truth that the characters cannot. Saying the opposite of what you mean is verbal irony.',
  },
];
