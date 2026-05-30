import { NextRequest, NextResponse } from 'next/server';
import { generateItems, persistItems, fallbackItems } from '../../../lib/server/gemini';

export const dynamic = 'force-dynamic';

const PREAMBLE =
  "You are an Afrikaans First Additional Language (FAL) teacher creating Grade 6 multiple-choice practice for 11-12 year-old English-speaking learners in South Africa. " +
  'Generate {count} varied items. Each item must have: a clear question (use simple language), exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short English explanation. ' +
  'Use correct, standard Afrikaans. Do not repeat items. ';

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
  const prompt = PREAMBLE.replace('{count}', String(count)) + instruction;

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
