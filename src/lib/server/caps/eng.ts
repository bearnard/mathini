import type { SubjectConfig } from '../caps/types';
import engGr7Term1 from './tasks/eng-gr7-term1.json';
import engGr7Term2 from './tasks/eng-gr7-term2.json';
import engGr7Term3 from './tasks/eng-gr7-term3.json';
import engGr7Term4 from './tasks/eng-gr7-term4.json';
import engGr7Structures from './tasks/eng-gr7-structures.json';
import engGr8Term1 from './tasks/eng-gr8-term1.json';
import engGr8Term2 from './tasks/eng-gr8-term2.json';
import engGr8Term3 from './tasks/eng-gr8-term3.json';
import engGr8Term4 from './tasks/eng-gr8-term4.json';
import engGr9Term1 from './tasks/eng-gr9-term1.json';
import engGr9Term2 from './tasks/eng-gr9-term2.json';
import engGr9Term3 from './tasks/eng-gr9-term3.json';
import engGr9Term4 from './tasks/eng-gr9-term4.json';
import engGr9Transactional from './tasks/eng-gr9-transactional.json';
import engGr9Appreciation from './tasks/eng-gr9-appreciation.json';
import engGr10Term1 from './tasks/eng-gr10-term1.json';
import engGr10Term2 from './tasks/eng-gr10-term2.json';
import engGr10Term3 from './tasks/eng-gr10-term3.json';
import engGr10Term4 from './tasks/eng-gr10-term4.json';
import engGr11Term1 from './tasks/eng-gr11-term1.json';
import engGr11Term2 from './tasks/eng-gr11-term2.json';
import engGr11Term3 from './tasks/eng-gr11-term3.json';
import engGr11Term4 from './tasks/eng-gr11-term4.json';
import engGr12Term1 from './tasks/eng-gr12-term1.json';
import engGr12Term2 from './tasks/eng-gr12-term2.json';
import engGr12Term3 from './tasks/eng-gr12-term3.json';
import engGr12Term4 from './tasks/eng-gr12-term4.json';

export const eng: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are an English Home Language teacher creating Grade ${grade} (CAPS, South Africa) multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied items. Each item must have: a clear, simply-worded question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly English explanation. ' +
      'Keep language accurate, age-appropriate and South African in spelling and context. Do not repeat items. '
    );
  },
  tasks: {
    // Term 1
    'current-issues-media':
      'Topic: Current-issues media texts. Cover newspaper articles and radio reports, the difference between fact and opinion, making inferences from clues, using evidence, identifying the main idea, and discussing current issues with clear reasons. Ask learners to classify statements, identify bias or viewpoint, match evidence to a claim, or choose the best inference from a short media text.',
    'fiction-visual-literacy':
      'Topic: Fiction and visual literacy. Cover speculative fiction, advertisements, skimming, scanning, visualising, setting, plot, message, target audience, and vocabulary in context. Ask learners to identify the purpose of an advert, explain how visual clues help meaning, choose the best reading strategy, or answer questions about story setting, plot, theme, and word meaning.',
    'process-writing-grammar':
      'Topic: Process writing and core grammar. Cover summaries, narrative and descriptive essays, friendly letters, dialogue, the stages of process writing, paragraphing, punctuation, nouns, pronouns, conjunctions, and adverbs. Ask learners to identify the correct text type for a purpose, choose improvements during planning or editing, apply punctuation in dialogue, or answer grammar and sentence-transformation items.',
    // Term 2
    'literary-genres':
      'Topic: Literary genres in rotation. Cover the features of a novel or novelette, play, and poetry; theme, character, speaker, and viewpoint; and comparing literary texts across genres. Ask learners to identify a genre, describe a character, recognise a theme, match a speaker or viewpoint, notice figurative language, or answer a short contextual question from a poem or scene.',
    'creative-transactional-writing':
      'Topic: Creative and transactional writing. Cover poems, dialogues, play scripts, messages, and the full writing process from planning to drafting, revising, redrafting, and editing. Ask about audience and purpose, text-type conventions, formal or informal register, planning notes, speaker turns in dialogue, script features, and paragraph coherence.',
    'language-extension':
      'Topic: Language extension. Cover vocabulary building through synonyms, antonyms, and idioms, plus tense control, punctuation, spelling, and editing your own writing. Ask language-in-context items about word meaning, accurate word choice, tense consistency, sentence editing, punctuation marks, and checking spelling or grammar in short sentences.',
    // Term 3
    'deeper-literature-response':
      'Topic: Deeper literature response. Focus on theme, mood, character motivation, review-style questions, interview-style responses, sequencing, and book response skills. Use short reading situations and ask learners to justify opinions with textual support or choose the strongest evidence.',
    'extended-writing-speaking':
      'Topic: Extended writing and speaking. Focus on book reviews, narrative essays, interviews, oral responses, audience awareness, organisation, detail, hooks, and suitable openings and closings. Ask learners to choose structures, details, and delivery choices that fit purpose and audience.',
    'complex-sentence-work':
      'Topic: Complex sentence work. Cover phrases, clauses, conjunctions, compound sentences, and complex sentences. Include joining and splitting sentences, clause identification, correcting sentence errors, and improving sentence variety in authentic writing contexts.',
    // Term 4
    'integrated-revision':
      'Topic: Integrated revision across genres. Integrate poetry, fiction, media texts, comprehension, summary, and oral recall. Focus on identifying genre features, retrieving evidence, making simple inferences, recognising strong summaries, and switching reading strategies across mixed-genre exam questions.',
    'exam-writing-practice':
      'Topic: Exam-oriented writing practice. Cover essay planning, transactional texts, editing checklists, format recall, clarity, accuracy, and time management. Emphasise planning under pressure, organising paragraphs, matching tone to audience and purpose, and spotting common grammar or punctuation traps during editing.',
    'language-consolidation':
      'Topic: Language consolidation. Cover parts of speech, tense, direct and indirect speech, punctuation, and spelling in context. Emphasise sentence correction, error spotting, accurate grammar choices, and applying the year\'s language structures in meaningful exam-style examples.',
    // Grade 7
    ...engGr7Term1.tasks,
    ...engGr7Term2.tasks,
    ...engGr7Term3.tasks,
    ...engGr7Term4.tasks,
    ...engGr7Structures.tasks,
    // Grade 8
    ...engGr8Term1.tasks,
    ...engGr8Term2.tasks,
    ...engGr8Term3.tasks,
    ...engGr8Term4.tasks,
    // Grade 9
    ...engGr9Term1.tasks,
    ...engGr9Term2.tasks,
    ...engGr9Term3.tasks,
    ...engGr9Term4.tasks,
    ...engGr9Transactional.tasks,
    ...engGr9Appreciation.tasks,
    // Grade 10
    ...engGr10Term1.tasks,
    ...engGr10Term2.tasks,
    ...engGr10Term3.tasks,
    ...engGr10Term4.tasks,
    ...engGr11Term1.tasks,
    ...engGr11Term2.tasks,
    ...engGr11Term3.tasks,
    ...engGr11Term4.tasks,
    ...engGr12Term1.tasks,
    ...engGr12Term2.tasks,
    ...engGr12Term3.tasks,
    ...engGr12Term4.tasks,
  },
};
