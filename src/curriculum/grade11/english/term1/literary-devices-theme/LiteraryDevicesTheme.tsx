import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    title: 'Common literary devices in FET texts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          FET literature questions expect you to <strong>name, quote, and explain</strong> devices. Here are the core ones:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Simile</strong>
            <p className="text-slate-600 text-sm">Comparison using "like" or "as": <em>"brave as a lion"</em>.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Metaphor</strong>
            <p className="text-slate-600 text-sm">Direct comparison: <em>"She is a rock"</em>.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Personification</strong>
            <p className="text-slate-600 text-sm">Human qualities given to non-human things: <em>"The wind whispered"</em>.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Irony</strong>
            <p className="text-slate-600 text-sm">A contrast between what is said and what is meant.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Allusion</strong>
            <p className="text-slate-600 text-sm">A reference to a historical, literary or cultural event.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Oxymoron</strong>
            <p className="text-slate-600 text-sm">Two contradictory terms together: <em>"deafening silence"</em>.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"Because I could not stop for Death\" — Emily Dickinson"}
        text={"Because I could not stop for Death, he kindly stopped for me. The carriage held but just ourselves and Immortality."}
        annotations={[
          { start: 29, end: 34, device: "personification", note: "Death is presented as a caller who can stop and collect the speaker." },
          { start: 39, end: 60, device: "irony", note: "The gentle wording clashes with the fear people usually associate with death." },
          { start: 62, end: 74, device: "symbolism", note: "The carriage symbolises a final journey that cannot be reversed." },
          { start: 103, end: 114, device: "diction", note: "The abstract noun widens the poem from a personal moment to a timeless theme." },
        ]}
      />
    ),
  },
  {
    title: 'How devices create meaning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Identifying a device is only the first step. Examiners want you to explain its <strong>effect</strong> on the reader.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left space-y-3">
          <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Weak answer</p>
          <p className="text-slate-600 text-sm italic">"The writer uses personification."</p>
          <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide mt-3">Strong answer</p>
          <p className="text-slate-600 text-sm italic">"The writer uses personification when she writes '…'. This makes the sea seem threatening and alive, heightening the reader's sense of danger."</p>
        </div>
        <p className="text-sm text-slate-500">Always follow: <strong>Name → Quote → Explain effect.</strong></p>
      </div>
    ),
  },
  {
    title: 'Tracking theme across a text',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Theme</strong> is broader than subject. The subject of a poem might be "war"; the theme is "the dehumanising effect of conflict on individuals."
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">How to identify a theme</strong>
            <p className="text-slate-600 text-sm">Ask: What does the text ultimately say about human experience? Look for repeated ideas, symbols, and the resolution.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">How to support a theme</strong>
            <p className="text-slate-600 text-sm">Find at least two quotations from different parts of the text that together build the thematic argument.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Writing an analytical paragraph',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use the <strong>PEEL</strong> structure to write a well-organised analytical paragraph:
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left space-y-2">
          <p><strong className="text-indigo-700">P — Point:</strong> <span className="text-slate-600 text-sm">State your argument or claim.</span></p>
          <p><strong className="text-indigo-700">E — Evidence:</strong> <span className="text-slate-600 text-sm">Provide a direct quotation.</span></p>
          <p><strong className="text-indigo-700">E — Explain:</strong> <span className="text-slate-600 text-sm">Analyse the quotation using literary terms and explain the effect.</span></p>
          <p><strong className="text-indigo-700">L — Link:</strong> <span className="text-slate-600 text-sm">Connect your point back to the theme or question.</span></p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does personification achieve in a literary text?',
    options: [
      'It shows that animals can speak',
      'It gives human qualities to non-human things, making abstract ideas more vivid and relatable',
      'It measures the rhythm of a poem',
      'It describes the setting of a story',
    ],
    answer: 'It gives human qualities to non-human things, making abstract ideas more vivid and relatable',
    explanation: 'Personification (e.g., "The storm screamed") creates emotional impact by making the non-human seem alive and intentional.',
  },
  {
    prompt: 'What is an oxymoron?',
    options: [
      'A very long and complicated sentence',
      'A comparison using "like" or "as"',
      'Two contradictory words placed together for deliberate effect',
      'A reference to a historical event',
    ],
    answer: 'Two contradictory words placed together for deliberate effect',
    explanation: 'Examples include "living death", "deafening silence", and "bittersweet". The tension highlights paradox or complexity.',
  },
  {
    prompt: 'What is onomatopoeia?',
    options: [
      'A comparison that does not use "like" or "as"',
      'A word that imitates the sound it describes',
      'The emotional associations of a word',
      'The repetition of consonant sounds at the start of words',
    ],
    answer: 'A word that imitates the sound it describes',
    explanation: '"Buzz", "crash", and "hiss" are onomatopoeic — they imitate sounds, creating a more sensory reading experience.',
  },
  {
    prompt: 'Which of the following is a simile?',
    options: [
      '"Life is a journey."',
      '"The stars wept silver tears."',
      '"He ran like the wind."',
      '"The thunder crashed."',
    ],
    answer: '"He ran like the wind."',
    explanation: 'Similes use "like" or "as" to make a comparison. "He ran like the wind" compares his speed to wind using "like".',
  },
  {
    prompt: 'What is verbal irony?',
    options: [
      'When a character does the opposite of what they say',
      'When the audience knows more than a character',
      'When a speaker says the opposite of what they mean, often for humour or criticism',
      'When two events happen at the same time in a story',
    ],
    answer: 'When a speaker says the opposite of what they mean, often for humour or criticism',
    explanation: 'Verbal irony (including sarcasm) is when the literal meaning of words contradicts the intended meaning.',
  },
  {
    prompt: 'What does "motif" mean in literature?',
    options: [
      'The climax of the plot',
      'A recurring image, symbol, or idea that reinforces the text\'s themes',
      'The narrator\'s point of view',
      'The opening paragraph of a novel',
    ],
    answer: 'A recurring image, symbol, or idea that reinforces the text\'s themes',
    explanation: 'Motifs appear repeatedly throughout a text; for example, water as a motif might represent both life and danger.',
  },
  {
    prompt: 'What is an allusion?',
    options: [
      'A direct comparison between two objects',
      'An indirect reference to a person, event, or other text that the reader is expected to recognise',
      'A description of a character\'s physical appearance',
      'The repetition of a phrase at the end of each stanza',
    ],
    answer: 'An indirect reference to a person, event, or other text that the reader is expected to recognise',
    explanation: 'For example, calling someone a "Romeo" alludes to Shakespeare\'s character. Allusions add layers of meaning.',
  },
  {
    prompt: 'What is the main purpose of a rhetorical question in a text?',
    options: [
      'To get a factual answer from the reader',
      'To confuse the reader',
      'To make the reader think or feel without expecting a literal reply',
      'To describe a setting in detail',
    ],
    answer: 'To make the reader think or feel without expecting a literal reply',
    explanation: 'Rhetorical questions ("Is this the world we want?") engage the reader emotionally and are not meant to be answered literally.',
  },
  {
    prompt: 'What is enjambment in poetry?',
    options: [
      'When a poem has a strict rhyme scheme',
      'When a sentence continues beyond the end of a line without a pause',
      'When a poet uses alliteration in every stanza',
      'When a poem has exactly four lines per stanza',
    ],
    answer: 'When a sentence continues beyond the end of a line without a pause',
    explanation: 'Enjambment creates a sense of flow, urgency, or continuity, as the reader is carried forward without a pause at the line break.',
  },
  {
    prompt: 'What is the difference between "theme" and "subject" in a literary text?',
    options: [
      'They mean exactly the same thing',
      'Subject is the topic; theme is the central message or insight the writer conveys about that topic',
      'Theme is always stated in the title; subject is never stated',
      'Subject is found only in poetry; theme only in prose',
    ],
    answer: 'Subject is the topic; theme is the central message or insight the writer conveys about that topic',
    explanation: 'A poem\'s subject might be "a bird"; its theme might be "the desire for freedom". Theme is the deeper meaning.',
  },
];

const LiteraryDevicesTheme = () => (
  <CapsSubjectTopic
    title="Literary Devices and Theme"
    subtitle="Identifying, explaining and analysing devices and themes in FET texts"
    learnSteps={learnSteps}
    task="gr11-literary-devices-theme-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default LiteraryDevicesTheme;
