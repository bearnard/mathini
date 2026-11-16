import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '../../../../../components/subjects/AnnotatedText';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { annotate } from '../../_shared/annotate';

/** Public domain: William Wordsworth (1770-1850), "I Wandered Lonely as a Cloud" (1807), first stanza. */
export const WORDSWORTH =
  'I wandered lonely as a cloud That floats on high o\'er vales and hills, When all at once I saw a crowd, A host, of golden daffodils; Beside the lake, beneath the trees, Fluttering and dancing in the breeze.';

export const WORDSWORTH_NOTES: [string, string, string][] = [
  ['I wandered lonely as a cloud', 'simile', 'The speaker is compared to a cloud, using "as": drifting, alone and aimless.'],
  ['A host, of golden daffodils', 'imagery', '"Host" suggests a huge crowd, and "golden" adds colour: a picture of brightness and plenty.'],
  ['Fluttering and dancing in the breeze', 'personification', 'The flowers are given the human action of dancing, so the scene feels joyful and alive.'],
];

/** Public domain: William Blake (1757-1827), "The Tyger" (1794), first stanza. */
export const BLAKE =
  'Tyger Tyger, burning bright, In the forests of the night; What immortal hand or eye, Could frame thy fearful symmetry?';

export const BLAKE_NOTES: [string, string, string][] = [
  ['Tyger Tyger', 'repetition', 'The repeated word creates a chant-like rhythm and shows the speaker\'s awe.'],
  ['burning bright', 'alliteration', 'The repeated "b" sound makes the phrase strong and gives the tiger a blazing quality.'],
  ['What immortal hand or eye, Could frame thy fearful symmetry?', 'rhetorical question', 'The speaker asks about the creator, but no answer is expected: it expresses wonder and fear.'],
];

/** An original unseen poem, written for this lesson. */
export const UNSEEN_LINES = [
  'Before the first taxi, the rank is a held breath:',
  'a vendor stacks oranges into small orange suns,',
  'a guard rubs warmth into his hands,',
  'the pavement still smells of last night\'s rain.',
  'Then a horn, a door, a name called loud,',
  'and the whole street remembers how to run.',
];
export const UNSEEN = UNSEEN_LINES.join(' ');
export const UNSEEN_NOTES: [string, string, string][] = [
  ['the rank is a held breath', 'metaphor', 'The quiet rank is described as a held breath: waiting, full of expectation.'],
  ['small orange suns', 'metaphor', 'The oranges become suns, so a small stall seems to bring light to the dark morning.'],
  ['the whole street remembers how to run', 'personification', 'The street is given a human memory and movement: the day suddenly comes alive.'],
];

export const learnSteps: LearnStep[] = [
  {
    title: 'How to read a poem',
    content: (
      <div className="space-y-4">
        <Rule>Read a poem more than once. First work out what it says (literal meaning), then what it suggests (figurative meaning).</Rule>
        <Worked
          title="A reading routine"
          steps={[
            <>Read the title and the poem straight through. Who is the speaker, and what is happening?</>,
            <>Read again, slowly, line by line. Find the images, the repeated words and the sound patterns.</>,
            <>Note any shift: a change of mood, of tone or of subject, often at a stanza break.</>,
            <>Decide on the mood, the tone and the theme: what the poem makes you feel, how the speaker sounds, and the central idea.</>,
          ]}
        />
        <Mistake>Do not paraphrase line by line and call it analysis. Marks go to explaining <em>why</em> the poet chose a word or an image and what effect it has.</Mistake>
      </div>
    ),
  },
  {
    title: 'Imagery and figures of speech',
    content: (
      <div className="space-y-4">
        <Rule>Imagery uses words to make pictures in the mind. Figures of speech such as simile, metaphor and personification make comparisons that add meaning.</Rule>
        <AnnotatedText title="William Wordsworth, 'I Wandered Lonely as a Cloud' (1807), first stanza: public domain" text={WORDSWORTH} annotations={annotate(WORDSWORTH, WORDSWORTH_NOTES)} />
        <p className="text-left text-sm text-slate-600">The question is not &ldquo;what figure of speech is this?&rdquo; but &ldquo;why has the poet used it?&rdquo; Always give the effect.</p>
      </div>
    ),
  },
  {
    title: 'Sound, repetition and structure',
    content: (
      <div className="space-y-4">
        <Rule>Sound devices make a poem musical and underline meaning: alliteration, assonance, onomatopoeia, rhyme, rhythm and repetition.</Rule>
        <AnnotatedText title="William Blake, 'The Tyger' (1794), first stanza: public domain" text={BLAKE} annotations={annotate(BLAKE, BLAKE_NOTES)} />
        <ul className="space-y-1 text-left text-sm text-slate-700">
          <li><strong>Alliteration:</strong> repeating consonant sounds. <strong>Assonance:</strong> repeating vowel sounds. <strong>Onomatopoeia:</strong> words that imitate sounds.</li>
          <li><strong>Rhyme scheme:</strong> label each line&rsquo;s end sound with a letter. This stanza rhymes in pairs, bright with night and eye with symmetry: AABB. Lines that rhyme alternately (first with third, second with fourth) are ABAB.</li>
          <li><strong>Enjambment:</strong> a sentence runs on past the end of a line without a pause.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Tone, mood and theme: an unseen poem',
    content: (
      <div className="space-y-4">
        <Rule>An unseen poem is one you have not studied. Use your reading routine and look for what the images build up to.</Rule>
        <div className="rounded-xl bg-slate-50 p-4 text-left text-slate-800">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-600">An original poem, written for this lesson</p>
          <p className="mt-2 font-semibold">Taxi Rank at Dawn</p>
          {UNSEEN_LINES.map((l) => <p key={l} className="leading-7">{l}</p>)}
        </div>
        <AnnotatedText text={UNSEEN} annotations={annotate(UNSEEN, UNSEEN_NOTES)} />
        <Worked
          title="Read it for mood, tone and theme"
          steps={[
            <>Mood: quiet, expectant at the start, then lively when the horn sounds.</>,
            <>Tone: gentle and affectionate, as if the speaker loves the place.</>,
            <>Theme: ordinary places carry hope, and the day begins with small, human things.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Answering poetry questions',
    content: (
      <div className="space-y-4">
        <Rule>Answer exactly what is asked, quote briefly, and explain the effect.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Paper 2, poetry (30 marks):</strong> seen poems (20 marks): there are four poems and you answer questions on two of them. The unseen poem is 10 marks.</li>
          <li><strong>Poetry essay:</strong> 150 to 200 words.</li>
          <li><strong>Pattern for a short answer:</strong> name the device, quote the words, say what it makes the reader feel or understand.</li>
        </ul>
        <Worked
          title="Why has the poet used personification in the last line?"
          steps={[
            <>Name: &ldquo;the whole street remembers how to run&rdquo; gives the street a human memory.</>,
            <>Effect: it makes the street seem to wake up, so the busy day arrives with energy after the stillness.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>What is the difference between literal and figurative meaning?</>,
          <>In &ldquo;lonely as a cloud&rdquo;, what is the figure of speech, and how can you tell?</>,
          <>A poem&rsquo;s lines end with the words night, light, grow and know. What is the rhyme scheme?</>,
          <>How long is the Grade 10 poetry essay?</>,
        ]}
        answers={[
          <>Literal meaning is what the words say plainly. Figurative meaning is what they suggest through comparison or imagery.</>,
          <>A simile: it compares two things using the word &ldquo;as&rdquo; (or &ldquo;like&rdquo;).</>,
          <>AABB: night and light rhyme, and grow and know rhyme.</>,
          <>150 to 200 words.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is the difference between the literal and the figurative meaning of a line of poetry?',
    options: ['Literal is for rhyming lines; figurative is for lines that do not rhyme', 'Literal is what the words plainly say; figurative is what they suggest', 'Literal is the title of the poem; figurative is the last line', 'Literal is in verse; figurative is in prose'],
    answer: 'Literal is what the words plainly say; figurative is what they suggest',
    explanation: 'Literal meaning is the plain sense. Figurative meaning uses comparison or imagery to suggest more than the words state.',
  },
  {
    prompt: 'What is the speaker of a poem?',
    options: ['The person who reads it aloud in class', 'The person the poem is written about', 'The voice that speaks in the poem', 'The publisher who printed the poem'],
    answer: 'The voice that speaks in the poem',
    explanation: 'The speaker is the voice or persona in the poem. A poet can speak as a character who is not themselves.',
  },
  {
    prompt: 'What is a simile?',
    options: ['A comparison using "like" or "as"', 'A comparison that says one thing is another', 'A deliberate exaggeration for effect', 'A word that imitates a real sound'],
    answer: 'A comparison using "like" or "as"',
    explanation: 'A simile uses "like" or "as" to draw attention to the comparison. A metaphor says one thing is another.',
  },
  {
    prompt: 'In a poem, the wind is described as "whispering secrets". Which figure of speech is this?',
    options: ['Personification', 'Euphemism or understatement', 'Onomatopoeia', 'Oxymoron'],
    answer: 'Personification',
    explanation: 'Personification gives human qualities to non-human things. Here the wind whispers and keeps secrets.',
  },
  {
    prompt: 'Which phrase is an example of alliteration?',
    options: ['silent night', 'as cold as stone', 'burning bright', 'the hum of the engine'],
    answer: 'burning bright',
    explanation: 'The phrase "burning bright" repeats the "b" sound, which is alliteration. "As cold as stone" is a simile and "silent night" repeats no consonant sound.',
  },
  {
    prompt: 'The words "hiss" and "crackle" imitate the sounds they describe. What are such words called?',
    options: ['Alliteration', 'Onomatopoeia', 'Enjambment', 'Personification'],
    answer: 'Onomatopoeia',
    explanation: 'Onomatopoeia is the use of words that recreate the sounds they describe.',
  },
  {
    prompt: 'A poem has four lines ending with the words "day", "stone", "play" and "bone". What is its rhyme scheme?',
    options: ['AABB', 'ABBA', 'ABAB', 'ABCD'],
    answer: 'ABAB',
    explanation: 'Lines 1 and 3 rhyme (day, play) and lines 2 and 4 rhyme (stone, bone), so the pattern is ABAB.',
  },
  {
    prompt: 'What is enjambment?',
    options: ['A repeated word at the start of each line', 'The rhyme at the end of two lines', 'A question asked for dramatic effect', 'A sentence that runs on past the line end'],
    answer: 'A sentence that runs on past the line end',
    explanation: 'Enjambment carries the reader on to the next line, creating flow or urgency.',
  },
  {
    prompt: 'What effect does repeating a word or phrase in a poem usually have?',
    options: ['It makes the poem much shorter', 'It stresses an idea and builds rhythm', 'It shows that the poet ran out of ideas', 'It changes the poem into prose'],
    answer: 'It stresses an idea and builds rhythm',
    explanation: 'Repetition and refrain draw attention to a key idea and give the poem a musical pattern.',
  },
  {
    prompt: 'What is the difference between the mood and the tone of a poem?',
    options: ['Mood is the rhyme scheme; tone is the number of stanzas', 'Mood is the feeling; tone is the speaker\'s attitude', 'Mood is the title; tone is the final line', 'Mood belongs to poems; tone belongs to novels'],
    answer: 'Mood is the feeling; tone is the speaker\'s attitude',
    explanation: 'Mood is the feeling the poem creates. Tone is the attitude of the speaker, for example gentle, bitter or amused.',
  },
  {
    prompt: 'You are given an unseen poem in the exam. What is the best first step?',
    options: ['Answer the last question before reading', 'Count the number of words in it', 'Rewrite the poem in your own words', 'Read the title and the whole poem'],
    answer: 'Read the title and the whole poem',
    explanation: 'Start by reading the title and the whole poem. Work out the speaker and situation before analysing details.',
  },
  {
    prompt: 'A question asks: "Why has the poet used a simile in line 2?" Which answer earns the most marks?',
    options: ['The poet uses a simile in the second line of the poem.', 'Line 2 has a simile in it, so the poet used a simile.', 'It compares him to a cloud and shows he feels lonely.', 'It is a comparison that the poet wanted to put there.'],
    answer: 'It compares him to a cloud and shows he feels lonely.',
    explanation: '"Why" questions need the effect of the device. Naming it or repeating the question earns few marks.',
  },
  {
    prompt: 'How many words should a Grade 10 poetry essay be?',
    options: ['150 to 200 words', '300 to 350 words', '180 to 200 words', '400 to 450 words'],
    answer: '150 to 200 words',
    explanation: 'The Grade 10 poetry essay is 150 to 200 words. The novel or drama essay is longer, at 300 to 350.',
  },
];
