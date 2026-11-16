// Small hand-built pictures for the Grade 10 English lessons. Plain SVG, server-renderable, with an aria description on each.
// At most six labels per picture; the numbers are fixed, so a picture cannot drift from its caption.

/** A story's plot as a curve: it begins, the conflict grows, there is a climax, then an ending. */
export const PlotCurve = () => (
  <svg viewBox="0 0 340 170" role="img" aria-label="A line that rises from the beginning of a story through growing conflict to a peak, the climax, then falls to the ending" className="mx-auto w-full max-w-md">
    <polyline points="20,130 110,100 190,40 265,95 325,112" fill="none" stroke="#4f46e5" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" />
    <circle cx="190" cy="40" r="6" fill="#e11d48" />
    <text x="20" y="152" fontSize="14" fill="#334155" fontWeight="600">Beginning</text>
    <text x="68" y="86" fontSize="14" fill="#334155" fontWeight="600">Conflict grows</text>
    <text x="190" y="22" fontSize="14" fill="#be123c" fontWeight="700" textAnchor="middle">Climax</text>
    <text x="324" y="138" fontSize="14" fill="#334155" fontWeight="600" textAnchor="end">Ending</text>
  </svg>
);

/** A four-line poem with its parts named: the stanza, a line, and the pair of lines that rhyme. */
export const PoemParts = ({ lines }: { lines: [string, string, string, string] }) => (
  <svg viewBox="0 0 340 214" role="img" aria-label="A four-line poem. The whole group of four lines is one stanza. Each row is a line. The second and fourth lines end with rhyming words." className="mx-auto w-full max-w-md">
    <rect x="6" y="6" width="328" height="132" rx="10" fill="#eef2ff" stroke="#6366f1" strokeWidth="2" />
    {lines.map((l, i) => (
      <text key={i} x="16" y={36 + i * 30} fontSize="13" fill="#1e293b">{l}</text>
    ))}
    <rect x="12" y={36 + 30 * 1 - 19} width="316" height="26" rx="5" fill="none" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="4 3" />
    <rect x="12" y={36 + 30 * 3 - 19} width="316" height="26" rx="5" fill="none" stroke="#e11d48" strokeWidth="1.5" strokeDasharray="4 3" />
    <text x="8" y="160" fontSize="14" fill="#4338ca" fontWeight="700">Stanza: the whole group of four lines</text>
    <text x="8" y="182" fontSize="14" fill="#4338ca" fontWeight="700">Line: one row of the poem</text>
    <text x="8" y="204" fontSize="14" fill="#be123c" fontWeight="700">Rhyme: lines 2 and 4 end with the same sound</text>
  </svg>
);

/** One paragraph taken apart: topic sentence, supporting sentences, link. */
export const ParagraphParts = () => (
  <svg viewBox="0 0 340 170" role="img" aria-label="A paragraph drawn as bars: a short bar for the topic sentence at the top, three longer bars for the supporting sentences, and a short bar at the bottom for the closing or linking sentence" className="mx-auto w-full max-w-md">
    <rect x="10" y="12" width="180" height="16" rx="4" fill="#6366f1" />
    <rect x="10" y="44" width="220" height="12" rx="4" fill="#c7d2fe" />
    <rect x="10" y="64" width="205" height="12" rx="4" fill="#c7d2fe" />
    <rect x="10" y="84" width="225" height="12" rx="4" fill="#c7d2fe" />
    <rect x="10" y="112" width="150" height="16" rx="4" fill="#e11d48" />
    <text x="200" y="26" fontSize="14" fill="#4338ca" fontWeight="700">Topic sentence</text>
    <text x="248" y="68" fontSize="14" fill="#475569" fontWeight="600">Support</text>
    <text x="248" y="86" fontSize="12" fill="#475569">proof, example</text>
    <text x="170" y="126" fontSize="14" fill="#be123c" fontWeight="700">Link or closing sentence</text>
    <text x="10" y="156" fontSize="13" fill="#475569">One paragraph, one main idea.</text>
  </svg>
);

/** The shape of a Grade 10 essay: how many words each part gets. The parts add up to the total shown. */
export const EssayPlan = ({ parts }: { parts: { label: string; words: number }[] }) => {
  const total = parts.reduce((n, p) => n + p.words, 0);
  const max = Math.max(...parts.map((p) => p.words));
  return (
    <svg viewBox="0 0 340 280" role="img" aria-label={`An essay plan of ${total} words: ${parts.map((p) => `${p.label} about ${p.words} words`).join(', ')}`} className="mx-auto w-full max-w-md">
      {parts.map((p, i) => (
        <g key={p.label}>
          <text x="8" y={20 + i * 46} fontSize="14" fill="#1e293b" fontWeight="600">{p.label}</text>
          <text x="332" y={20 + i * 46} fontSize="14" fill="#475569" textAnchor="end">about {p.words}</text>
          <rect x="8" y={26 + i * 46} width={Math.round((324 * p.words) / max)} height="14" rx="5" fill="#818cf8" />
        </g>
      ))}
      <text x="8" y="250" fontSize="14" fill="#334155" fontWeight="600">Total: about {total} words</text>
      <text x="8" y="270" fontSize="13" fill="#475569">The task asks for 300 to 350 words.</text>
    </svg>
  );
};

/** A letter's layout with its parts named, top to bottom. `kind` decides which parts are drawn. */
export const LetterLayout = ({ kind }: { kind: 'friendly' | 'formal' }) => {
  const parts = kind === 'friendly'
    ? ['Your address (only yours)', 'Date', 'Salutation: Dear Naledi,', 'Body: introduction, news, conclusion', 'Closing, then your first name']
    : ['Your address and the date', 'Name and address of the person', 'Salutation and subject line', 'Body: short, clear paragraphs', 'Yours sincerely, surname, initials'];
  const heights = [28, 28, 28, 52, 28];
  let y = 12;
  return (
    <svg viewBox="0 0 340 214" role="img" aria-label={`The layout of a ${kind} letter from top to bottom: ${parts.join('; ')}`} className="mx-auto w-full max-w-md">
      <rect x="6" y="4" width="328" height="206" rx="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
      {parts.map((p, i) => {
        const top = y;
        y += heights[i] + 8;
        return (
          <g key={p}>
            <rect x="16" y={top} width="308" height={heights[i]} rx="5" fill={i === 3 ? '#e0e7ff' : '#f1f5f9'} stroke="#c7d2fe" />
            <text x="24" y={top + (i === 3 ? 22 : 19)} fontSize="14" fill="#1e293b" fontWeight="600">{p}</text>
          </g>
        );
      })}
    </svg>
  );
};

/** A passage and its summary as two bars, drawn to scale from the real word counts. */
export const SummaryShrink = ({ passage, summary }: { passage: number; summary: number }) => {
  const w = Math.max(30, Math.round((320 * summary) / passage));
  return (
    <svg viewBox="0 0 340 130" role="img" aria-label={`A passage of ${passage} words shortened to a summary of ${summary} words`} className="mx-auto w-full max-w-md">
      <rect x="8" y="12" width="320" height="28" rx="6" fill="#c7d2fe" />
      <text x="16" y="31" fontSize="14" fill="#1e293b" fontWeight="600">Passage: {passage} words</text>
      <rect x="8" y="58" width={w} height="28" rx="6" fill="#6366f1" />
      <text x={w + 16} y="77" fontSize="14" fill="#1e293b" fontWeight="600">Summary: {summary} words</text>
      <text x="8" y="116" fontSize="13" fill="#475569">The bars are drawn to scale.</text>
    </svg>
  );
};
