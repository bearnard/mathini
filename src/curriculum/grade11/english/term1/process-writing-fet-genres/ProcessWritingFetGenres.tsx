import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/eng/term1/process-writing-fet-genres/diagram.webp", alt: "Process Writing for FET Genres" },
    title: 'FET essay genres: an overview',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grade 11 Paper 3 requires you to write different essay types. Choosing the right form and maintaining it throughout is essential.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Narrative</strong>
            <p className="text-slate-600 text-sm">Tells a story with characters, setting, conflict, and resolution. Uses vivid language and dialogue.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Descriptive</strong>
            <p className="text-slate-600 text-sm">Creates a vivid picture through sensory detail. The aim is for the reader to experience the subject.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Argumentative</strong>
            <p className="text-slate-600 text-sm">Presents ONE clear position and defends it with evidence. No contradicting your own point.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Discursive</strong>
            <p className="text-slate-600 text-sm">Explores BOTH sides of an issue and reaches a balanced conclusion.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Reflective</strong>
            <p className="text-slate-600 text-sm">Explores the writer's thoughts and feelings about a personal experience or idea.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Transactional writing: formal letters, CVs and covering letters',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Transactional writing serves a real-world purpose. Format and register are heavily weighted.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Formal letter</strong>
            <p className="text-slate-600 text-sm">Includes: sender's address, date, recipient's address, salutation, body paragraphs, sign-off (Yours faithfully / sincerely).</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">CV (Curriculum Vitae)</strong>
            <p className="text-slate-600 text-sm">Organised: personal details, education, skills, work experience, references. Clear headings and bullet points.</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <strong className="text-slate-700">Covering letter</strong>
            <p className="text-slate-600 text-sm">Accompanies a CV. States the job applied for, highlights relevant skills, and requests an interview.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Argumentative vs discursive essays',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          These are commonly confused. Know the distinction for Paper 3.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Argumentative essay</strong>
            <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1">
              <li>Takes ONE strong position on an issue</li>
              <li>Uses evidence and reasoning to persuade the reader</li>
              <li>Counter-arguments are briefly acknowledged and refuted</li>
              <li>Conclusion reinforces the position</li>
            </ul>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Discursive essay</strong>
            <ul className="text-slate-600 text-sm list-disc ml-4 space-y-1">
              <li>Presents BOTH sides fairly and in depth</li>
              <li>Explores the issue from multiple perspectives</li>
              <li>Tone is balanced and objective</li>
              <li>Conclusion draws a measured judgement</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Process writing stages and editing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong writers follow a deliberate process. Even in timed exams, spending 5–10 minutes planning improves the final piece significantly.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl text-left space-y-2">
          <p><span className="font-bold text-indigo-700">1. Plan</span> <span className="text-slate-600 text-sm">— brainstorm, choose a form, create an outline.</span></p>
          <p><span className="font-bold text-indigo-700">2. Draft</span> <span className="text-slate-600 text-sm">— write your full piece following the outline.</span></p>
          <p><span className="font-bold text-indigo-700">3. Review</span> <span className="text-slate-600 text-sm">— check content, structure, and whether the purpose is achieved.</span></p>
          <p><span className="font-bold text-indigo-700">4. Revise</span> <span className="text-slate-600 text-sm">— improve weak paragraphs, add transitions, sharpen language.</span></p>
          <p><span className="font-bold text-indigo-700">5. Edit</span> <span className="text-slate-600 text-sm">— correct grammar, spelling, punctuation, and sentence variety.</span></p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a discursive essay?',
    options: [
      'An essay that argues one strong position and tries to persuade the reader',
      'An essay that tells a personal story with characters and plot',
      'An essay that explores both sides of an issue and reaches a balanced conclusion',
      'An essay that describes a place in vivid sensory detail',
    ],
    answer: 'An essay that explores both sides of an issue and reaches a balanced conclusion',
    explanation: 'A discursive essay considers multiple perspectives fairly, unlike an argumentative essay which defends one viewpoint.',
  },
  {
    prompt: 'How does a CV differ from a covering letter?',
    options: [
      'A CV is a story; a covering letter lists facts',
      'A CV summarises your qualifications and experience; a covering letter motivates your application for a specific post',
      'They are the same document formatted differently',
      'A covering letter is always longer than a CV',
    ],
    answer: 'A CV summarises your qualifications and experience; a covering letter motivates your application for a specific post',
    explanation: 'The CV is a factual record of your background. The covering letter is persuasive writing tailored to the specific job.',
  },
  {
    prompt: 'Which sign-off is correct when you do NOT know the name of the recipient in a formal letter?',
    options: ['Yours sincerely', 'Kind regards', 'Yours faithfully', 'Best wishes'],
    answer: 'Yours faithfully',
    explanation: '"Yours faithfully" is used when the letter begins "Dear Sir/Madam". "Yours sincerely" is used when you know the person\'s name.',
  },
  {
    prompt: 'What is the key difference between an argumentative and a discursive essay?',
    options: [
      'An argumentative essay has more paragraphs',
      'A discursive essay is always shorter',
      'An argumentative essay takes one clear position; a discursive essay explores multiple sides fairly',
      'A discursive essay does not require evidence',
    ],
    answer: 'An argumentative essay takes one clear position; a discursive essay explores multiple sides fairly',
    explanation: 'In an argumentative essay you persuade. In a discursive essay you explore and balance perspectives.',
  },
  {
    prompt: 'What does the introduction of a narrative essay typically establish?',
    options: [
      'The word count of the essay',
      'The dictionary definitions of key terms',
      'Setting, tone, and the beginning of the conflict or situation',
      'A list of all the characters in the story',
    ],
    answer: 'Setting, tone, and the beginning of the conflict or situation',
    explanation: 'A strong narrative introduction immerses the reader immediately by establishing where, when, and the mood of the piece.',
  },
  {
    prompt: 'What is a reflective essay?',
    options: [
      'An essay that argues for a specific political viewpoint',
      'An essay that describes a scientific process',
      'A personal piece that explores the writer\'s thoughts, feelings, and insights about an experience',
      'An essay that compares two novels',
    ],
    answer: 'A personal piece that explores the writer\'s thoughts, feelings, and insights about an experience',
    explanation: 'Reflective essays combine narration with introspection — what happened, how you felt, and what you learned from it.',
  },
  {
    prompt: 'Which register is most appropriate for a formal letter of application?',
    options: [
      'Informal and conversational, using slang for personality',
      'Formal, polite, and professional throughout',
      'Academic with technical jargon to impress the reader',
      'Very casual to show you are easy to work with',
    ],
    answer: 'Formal, polite, and professional throughout',
    explanation: 'A formal letter of application requires a formal register: correct grammar, no contractions, respectful tone, and professional vocabulary.',
  },
  {
    prompt: 'What are the five stages of process writing in the correct order?',
    options: [
      'Edit, Draft, Plan, Revise, Review',
      'Plan, Draft, Review, Revise, Edit',
      'Draft, Plan, Edit, Revise, Review',
      'Review, Edit, Plan, Draft, Revise',
    ],
    answer: 'Plan, Draft, Review, Revise, Edit',
    explanation: 'Following this order ensures you organise your ideas before writing and refine the content and language before finalising.',
  },
  {
    prompt: 'In an argumentative essay, what is the role of a counter-argument?',
    options: [
      'To show you agree with the opposing side',
      'To lengthen the essay',
      'To acknowledge the opposing view and then refute it, strengthening your own argument',
      'To confuse the reader so your position seems better',
    ],
    answer: 'To acknowledge the opposing view and then refute it, strengthening your own argument',
    explanation: 'Addressing counter-arguments shows critical thinking and makes your argument more persuasive by anticipating and dismissing objections.',
  },
  {
    prompt: 'Which feature most clearly marks a descriptive essay?',
    options: [
      'A thesis statement that argues a clear point',
      'Rich sensory detail that paints a vivid picture for the reader',
      'A chronological list of events in the writer\'s life',
      'A table comparing two different views on an issue',
    ],
    answer: 'Rich sensory detail that paints a vivid picture for the reader',
    explanation: 'Descriptive essays use sight, sound, smell, taste, and touch to create an immersive experience — the aim is for the reader to feel present.',
  },
];

const ProcessWritingFetGenres = () => (
  <CapsSubjectTopic
    title="Process Writing for FET Genres"
    subtitle="Essays, formal letters, CVs and the stages of process writing"
    learnSteps={learnSteps}
    task="gr11-process-writing-fet-genres-t1"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ProcessWritingFetGenres;
