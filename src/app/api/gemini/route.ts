import { NextRequest, NextResponse } from 'next/server';
import { generateItems, persistItems, fallbackItems } from '../../../lib/server/gemini';

export const dynamic = 'force-dynamic';

const ITEM_RULES =
  'Generate {count} varied items. Each item must have: a clear question (use simple language), exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short English explanation. ' +
  'Use correct, standard Afrikaans. Do not repeat items. ';

function getTaskGrade(task: string): number {
  const match = task.match(/^gr(\d+)-/);
  if (!match) {
    return 6;
  }
  const grade = Number(match[1]);
  if (!Number.isFinite(grade) || grade <= 0) {
    return 6;
  }
  return grade;
}

function buildPreamble(task: string, count: number): string {
  const grade = getTaskGrade(task);
  const age = grade + 5;
  return (
    `You are an Afrikaans First Additional Language (FAL) teacher creating Grade ${grade} multiple-choice practice for ${age} year-old English-speaking learners in South Africa. ` +
    ITEM_RULES.replace('{count}', String(count))
  );
}

const TASKS: Record<string, string> = {
  woordeskat:
    'Topic: everyday Afrikaans vocabulary and greetings (groete). Ask the English meaning of a common Afrikaans word or greeting, or which Afrikaans word matches an English word. Mix directions.',
  'naamwoorde-lidwoorde':
    "Topic: nouns (selfstandige naamwoorde) and the articles 'die' and \"'n\". Ask to choose the correct article, identify the noun in a sentence, or give the meaning of a common noun.",
  meervoude:
    'Topic: Afrikaans plurals (meervoude) using -e, -s and consonant doubling (kop->koppe, bus->busse) and special plurals (kind->kinders, blad->blaaie). Ask for the plural of a singular noun.',
  'teenwoordige-tyd':
    'Topic: present tense (teenwoordige tyd). Ask to complete a present-tense sentence with the correct verb, or identify the verb (werkwoord) in a sentence.',
  'verlede-tyd':
    "Topic: past tense (verlede tyd) using 'het' + ge- past participle (Ek speel -> Ek het gespeel). Ask the correct past-tense form or to rewrite a present-tense sentence in the past.",
  'byvoeglike-naamwoorde':
    "Topic: adjectives (byvoeglike naamwoorde), including attributive forms ('n mooi blom, 'n goeie boek, 'n lekker koek). Ask the correct adjective form or its meaning.",
  begripstoets:
    'Topic: reading comprehension (begripstoets). Embed a SHORT (2-3 sentence) simple Afrikaans passage inside the question prompt, then ask ONE comprehension question about it with 4 options.',
  'vriendskaplike-brief':
    "Topic: the friendly letter (vriendskaplike brief) in Afrikaans: greeting (Liewe...), the date, the closing (Jou maatjie / Groete) and structure. Ask which part or word is correct.",
  'toekomende-tyd':
    "Topic: future tense (toekomende tyd) using 'sal' + verb (Ek sal speel). Ask the correct future-tense sentence or form.",
  'trappe-van-vergelyking':
    'Topic: degrees of comparison (trappe van vergelyking): positive, comparative and superlative (mooi/mooier/mooiste, goed/beter/beste, vinnig/vinniger/vinnigste). Ask for the comparative or superlative.',
  'sinonieme-antonieme':
    'Topic: synonyms (sinonieme) and antonyms/opposites (teenoorgesteldes) of common Afrikaans words. Ask for the synonym OR the antonym of a given Afrikaans word.',
  sinsbou:
    'Topic: Afrikaans word order (sinsbou / STOMPI), verb second and inversion after a time phrase (Vandag speel ek). Ask which sentence has the correct word order.',
  voorsetsels:
    'Topic: prepositions (voorsetsels): op, in, onder, voor, agter, langs, tussen, by, oor. Ask the correct preposition for a sentence or its English meaning.',
  voegwoorde:
    'Topic: conjunctions (voegwoorde): en, maar, want, omdat, of, sodat. Ask which conjunction correctly joins two clauses.',
  'visuele-tekste':
    'Topic: visual texts (visuele tekste) such as advertisements and signs. Describe a simple Afrikaans advert or sign inside the prompt, then ask one comprehension or inference question.',
  'gemengde-hersiening':
    'Topic: mixed revision across Grade 6 Afrikaans FAL (vocabulary, present/past/future tense, plurals, adjectives, prepositions, synonyms). Vary the question type with each item.',
  'gr7-short-stories-reviews-t1':
    'Topic: Grade 7 term 1 short stories and reviews (kortverhale en resensies). Ask about character, plot, setting, conflict and theme, plus simple review conventions (opinion + reason + recommendation).',
  'gr7-extended-responses-t1':
    'Topic: Grade 7 term 1 extended responses (uitgebreide antwoorde). Ask about paragraph order, opening/closing choices, audience awareness, linking words and drafting sequence.',
  'gr7-word-sentence-grammar-t1':
    'Topic: Grade 7 term 1 word and sentence grammar. Include plurals, adjective use, present/past/future tense choices, idioms and homophone-aware vocabulary in context.',
  'gr7-poetry-text-study-t2':
    'Topic: Grade 7 term 2 poetry and text study (poësie). Ask about stanza, rhyme, imagery, mood and simple line-reference interpretation.',
  'gr7-formal-correspondence-essays-t2':
    'Topic: Grade 7 term 2 formal correspondence and essays. Ask about formal letter layout (Geagte..., Die uwe), register, essay planning and structure choices.',
  'gr7-assessment-language-practice-t2':
    'Topic: Grade 7 term 2 assessment-focused language practice. Mix comprehension recall, visual-literacy cues and language correction/editing style MCQs.',
  'gr7-visual-literacy-persuasion-t3':
    'Topic: Grade 7 term 3 visual literacy and persuasion. Use adverts/posters and ask about AIDA, slogan effect, target audience and persuasive language choices.',
  'gr7-creative-writing-project-t3':
    'Topic: Grade 7 term 3 creative writing project process. Ask about planning, drafting, revising, peer feedback, presentation and project workflow.',
  'gr7-language-reinforcement-t3':
    'Topic: Grade 7 term 3 language reinforcement. Ask editing-focused MCQs on punctuation, sentence control, vocabulary in context and grammatical accuracy.',
  'gr7-revision-genres-skills-t4':
    'Topic: Grade 7 term 4 revision of genres and skills. Mix items across stories, poetry, visual texts, letters and comprehension retrieval/summary.',
  'gr7-exam-writing-practice-t4':
    'Topic: Grade 7 term 4 exam writing practice. Ask about timed planning, choosing correct text formats, editing checklists and topic suitability.',
  'gr7-language-consolidation-t4':
    'Topic: Grade 7 term 4 language consolidation. Include tense control, parts of speech, punctuation, vocabulary and sentence-structure MCQs.',
  'gr8-visual-literacy-advertisements-t1':
    'Topic: Grade 8 term 1 visual literacy and advertisements. Ask about slogans, target audience, layout focus, persuasive language and call-to-action choices.',
  'gr8-poetry-early-literature-study-t1':
    'Topic: Grade 8 term 1 poetry and early literature study. Ask about stanza, rhyme, tone, imagery and line-reference interpretation.',
  'gr8-narrative-writing-grammar-t1':
    'Topic: Grade 8 term 1 narrative writing and grammar. Include narrative openings, conflict flow, tense consistency, adjectives and punctuation editing.',
  'gr8-electronic-communication-reviews-t2':
    'Topic: Grade 8 term 2 electronic communication and reviews. Ask about email structure, register/formality, review opinion-plus-evidence and suitable closings.',
  'gr8-folklore-youth-novel-study-t2':
    'Topic: Grade 8 term 2 folklore or youth novel study. Ask about plot sequence, character development, conflict, dialogue evidence and theme.',
  'gr8-grammar-reporting-coherence-t2':
    'Topic: Grade 8 term 2 grammar for reporting and coherence. Ask about direct/indirect speech conversion, pronoun choice, concord and linking ideas clearly.',
  'gr8-creative-writing-project-t3':
    'Topic: Grade 8 term 3 creative writing project process. Ask about planning, research use, drafting, revising, reflection and presentation criteria.',
  'gr8-short-stories-drama-t3':
    'Topic: Grade 8 term 3 short stories and drama. Ask about speaker identification, stage directions, conflict, setting, character motivation and theme.',
  'gr8-transactional-writing-language-refinement-t3':
    'Topic: Grade 8 term 3 transactional writing and language refinement. Include formal letter format, conjunction use, punctuation and reported speech editing.',
  'gr8-revision-exam-preparation-t4':
    'Topic: Grade 8 term 4 revision and exam preparation. Ask about comprehension strategy, summary selection, listening recall and time-management choices.',
  'gr8-review-report-writing-t4':
    'Topic: Grade 8 term 4 review and report writing. Ask about factual report format, concise detail selection, review structure and editing priorities.',
  'gr8-language-consolidation-t4':
    'Topic: Grade 8 term 4 language consolidation. Mix year-end grammar MCQs on tense control, punctuation, sentence structure, pronouns and vocabulary in context.',
};

export async function POST(req: NextRequest) {
  let body: { task?: string; count?: number };
  try {
    body = (await req.json()) as { task?: string; count?: number };
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const task = body.task ?? '';
  const instruction = TASKS[task];
  if (!instruction) {
    return NextResponse.json({ error: 'Unknown task' }, { status: 400 });
  }

  const count = Math.min(Math.max(body.count ?? 6, 1), 10);
  const prompt = buildPreamble(task, count) + instruction;

  try {
    const items = await generateItems(prompt);
    if (items.length > 0) {
      await persistItems(task, items);
      return NextResponse.json({ items });
    }
    const cached = await fallbackItems(task, count);
    return NextResponse.json({ items: cached });
  } catch {
    const cached = await fallbackItems(task, count);
    if (cached.length > 0) {
      return NextResponse.json({ items: cached });
    }
    return NextResponse.json({ error: 'Generation failed' }, { status: 502 });
  }
}
