// Appends a topic's own lesson facts to its scope text, so the generator only relies on facts the lesson states.
// The facts were extracted from src/curriculum/grade6/<subject>/**'s lessons and banks (see tasks/*-gr6-facts.json). Where the
// older scope text and the lesson differ, the lesson wins.
export const LESSON_FACTS_PRIORITY = 'Where the topic scope and these lesson facts differ, follow the lesson facts.';

export function withLessonFacts(tasks: Record<string, string>, facts: Record<string, string>): Record<string, string> {
  const out: Record<string, string> = { ...tasks };
  for (const [slug, f] of Object.entries(facts)) {
    if (!(slug in out)) continue; // never invent a task: facts only refine an existing scope
    out[slug] = `${out[slug]} ${f.trim()} ${LESSON_FACTS_PRIORITY}`;
  }
  return out;
}
