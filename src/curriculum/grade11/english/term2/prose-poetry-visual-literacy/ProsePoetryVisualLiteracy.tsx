import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import AnnotatedText from '@/components/subjects/AnnotatedText';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/eng/term2/prose-poetry-visual-literacy/diagram.webp", alt: "From \\" },
    title: 'Seen and unseen poetry: comparative reading',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 2 often includes both <strong>seen</strong> (prescribed) and <strong>unseen</strong> (new) poetry. Comparative questions ask you to find similarities and differences.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Seen poetry</strong>
            <p className="text-slate-600 text-sm">You have studied this beforehand. Use your preparation: themes, key devices, quotations.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Unseen poetry</strong>
            <p className="text-slate-600 text-sm">Read carefully. Identify tone, theme, and devices. Allow the text to guide you — don't project prior knowledge.</p>
          </div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl text-left">
          <p className="font-bold text-slate-700 text-sm">Comparative strategy:</p>
          <p className="text-slate-600 text-sm">Use linking phrases: "Both poems…", "While Poem A focuses on…, Poem B…", "In contrast to…"</p>
        </div>
      </div>
    ),
  },
  {
    title: "Annotated extract",
    content: (
      <AnnotatedText
        title={"From \"Hope is the thing with feathers\" — Emily Dickinson"}
        text={"Hope is the thing with feathers that perches in the soul, and sings the tune without the words, and never stops at all."}
        annotations={[
          { start: 12, end: 31, device: "metaphor", note: "Hope is described through the image of a small bird, making the abstraction concrete." },
          { start: 37, end: 56, device: "imagery", note: "The inner feeling is visualised as something lightly resting inside a person." },
          { start: 62, end: 94, device: "personification", note: "Hope is given a living action that suggests comfort without explanation." },
          { start: 100, end: 118, device: "tone", note: "The final claim gives the poem a steady, reassuring tone." },
        ]}
      />
    ),
  },
  {
    title: 'Prose continuation: character and plot analysis',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Prose continuation and analysis require you to engage with character motivation, plot development, and textual evidence.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Characterisation</strong>
            <p className="text-slate-600 text-sm">How does the writer reveal character? Through dialogue, actions, what others say, and internal thoughts.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Plot analysis</strong>
            <p className="text-slate-600 text-sm">Identify exposition, rising action, climax, falling action, and resolution in the text.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Visual literacy: reading images as text',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Visual texts (advertisements, cartoons, photographs, infographics) carry meaning through their composition and design choices.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Composition</strong>
            <p className="text-slate-600 text-sm">Where are elements placed? Foreground and background. What do size and position suggest about importance?</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Colour</strong>
            <p className="text-slate-600 text-sm">Bright colours suggest energy; dark tones suggest danger or seriousness. Colour conveys mood.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Body language / Gaze</strong>
            <p className="text-slate-600 text-sm">Direction of gaze, facial expression, and posture communicate emotion and power dynamics.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Comparing texts: integrating evidence',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Comparative answers must move <strong>between both texts</strong> continuously — not discuss one, then the other in separate blocks.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left space-y-2">
          <p className="font-bold text-indigo-700 text-sm">Structure for a comparative paragraph:</p>
          <ol className="text-slate-600 text-sm list-decimal ml-4 space-y-1">
            <li>State your point of comparison (e.g., "Both texts deal with isolation…")</li>
            <li>Quote from Text A and explain</li>
            <li>Quote from Text B and explain</li>
            <li>Analyse the similarity or difference and link to theme</li>
          </ol>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the purpose of a visual literacy question in English HL?',
    options: [
      'To test whether you can draw well',
      'To assess your ability to interpret meaning in images, layout, and design elements',
      'To test how many photographs you can identify',
      'To test your ability to describe colours accurately',
    ],
    answer: 'To assess your ability to interpret meaning in images, layout, and design elements',
    explanation: 'Visual literacy requires you to "read" images critically — analysing how composition, colour, and gaze create meaning.',
  },
  {
    prompt: 'When analysing an unseen poem, what should you identify first?',
    options: [
      'The rhyme scheme only',
      'The number of syllables per line',
      'The subject, tone, and any immediately striking devices',
      'Whether you like or dislike the poem',
    ],
    answer: 'The subject, tone, and any immediately striking devices',
    explanation: 'First read establishes what the poem is about and how the speaker feels. Devices support your interpretation.',
  },
  {
    prompt: 'What does "visual composition" refer to in an image?',
    options: [
      'The title written below an image',
      'The arrangement and placement of visual elements within the frame to create meaning',
      'The background music in a video',
      'The number of people in a photograph',
    ],
    answer: 'The arrangement and placement of visual elements within the frame to create meaning',
    explanation: 'Composition includes what is foregrounded, how space is used, and how placement guides the viewer\'s eye and conveys importance.',
  },
  {
    prompt: 'What is a caption in visual literacy?',
    options: [
      'The main image in an advertisement',
      'A short explanatory text accompanying an image that guides interpretation',
      'The price label on a product',
      'The colour scheme of a poster',
    ],
    answer: 'A short explanatory text accompanying an image that guides interpretation',
    explanation: 'Captions frame how viewers read images — they can reinforce, extend, or even contradict what the image shows.',
  },
  {
    prompt: 'When comparing two texts, what must you always include?',
    options: [
      'Quotations from only one text to keep the answer focused',
      'Evidence from BOTH texts with analysis of similarities and/or differences',
      'A personal opinion about which text is better',
      'A summary of the entire plot of each text',
    ],
    answer: 'Evidence from BOTH texts with analysis of similarities and/or differences',
    explanation: 'A comparative response requires you to move between both texts continuously, not discuss them in separate blocks.',
  },
  {
    prompt: 'What is the difference between a "seen" and "unseen" text?',
    options: [
      '"Seen" is in colour; "unseen" is in black and white',
      '"Seen" has been studied and prepared; "unseen" is encountered for the first time in the exam',
      '"Seen" texts are always prose; "unseen" texts are always poetry',
      'There is no difference — the terms mean the same thing',
    ],
    answer: '"Seen" has been studied and prepared; "unseen" is encountered for the first time in the exam',
    explanation: 'Seen texts allow you to apply prior knowledge. Unseen texts test your general analytical skills.',
  },
  {
    prompt: 'What does body language in a photograph typically communicate?',
    options: [
      'Only the approximate age of the subject',
      'Nothing — body language is not relevant in still images',
      'Emotion, attitude, power dynamics, and the subject\'s state of mind',
      'The location where the photograph was taken',
    ],
    answer: 'Emotion, attitude, power dynamics, and the subject\'s state of mind',
    explanation: 'Posture, facial expression, gaze direction, and gesture are all visual codes that communicate meaning beyond words.',
  },
  {
    prompt: 'In a comparative response, what does the phrase "Both texts suggest…" signal?',
    options: [
      'That you are about to discuss only one text',
      'A similarity in theme, tone, or technique between the two texts',
      'That neither text is relevant to the question',
      'That you are restating the question',
    ],
    answer: 'A similarity in theme, tone, or technique between the two texts',
    explanation: '"Both texts suggest…" introduces a point of similarity, which must then be supported with evidence from each text.',
  },
  {
    prompt: 'What is a graphical feature?',
    options: [
      'A plot summary of a novel',
      'A visual element such as a graph, table, diagram, or infographic used to present information',
      'A type of poetic device',
      'A paragraph that uses sensory language',
    ],
    answer: 'A visual element such as a graph, table, diagram, or infographic used to present information',
    explanation: 'Graphical features organise and present data visually. You may be asked to interpret what they show and how they support the text.',
  },
  {
    prompt: 'How does colour choice affect meaning in an advertisement?',
    options: [
      'Colour choice has no effect on meaning in advertisements',
      'Colours carry cultural and emotional connotations that influence the audience\'s response to the product or message',
      'Only the background colour matters — other colours are irrelevant',
      'Colour is used only to fill space in advertisements',
    ],
    answer: 'Colours carry cultural and emotional connotations that influence the audience\'s response to the product or message',
    explanation: 'Red can signal urgency or passion; blue suggests trust or calm; green evokes nature or health. Advertisers use colour deliberately.',
  },
];

const ProsePoetryVisualLiteracy = () => (
  <CapsSubjectTopic
    title="Prose, Poetry and Visual Literacy"
    subtitle="Comparative reading, visual text analysis and evidence-based responses"
    learnSteps={learnSteps}
    task="gr11-prose-poetry-visual-literacy-t2"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ProsePoetryVisualLiteracy;
