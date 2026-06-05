/**
 * Spike test: validates that Gemini text-embedding-004 similarity scores
 * correctly separate paraphrased questions (same concept) from genuinely
 * different questions, confirming the 0.88 threshold for semantic dedup.
 *
 * Run: GEMINI_API_KEY=xxx npx tsx scripts/test-embedding-dedup.ts
 */

export {};  // ES module scope
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("Missing GEMINI_API_KEY");
  process.exit(1);
}

// text-embedding-004 has been renamed; gemini-embedding-001 with outputDimensionality=768
// keeps vectors at 768 dims to fit Cloudflare Vectorize 5M-dim free tier for Grade 6
const EMBED_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-001:embedContent";
const EMBED_DIMS = 768;

// 10 real Grade 6 Natural Sciences questions about mixtures
const real = [
  "What is the difference between a mixture and a pure substance?",
  "Name two methods used to separate a mixture of sand and water.",
  "What is filtration and when would you use it?",
  "Explain why salt dissolves in water but sand does not.",
  "What does the term 'soluble' mean? Give one example.",
  "How would you separate iron filings from sand? Name the method.",
  "What is a saturated solution?",
  "Describe how evaporation can be used to recover salt from salt water.",
  "What is the difference between a solute and a solvent?",
  "Give one example of a homogeneous mixture and one of a heterogeneous mixture.",
];

// 5 paraphrases of the first 5 real questions (same concept, different wording)
const paraphrases = [
  "How does a mixture differ from a pure substance?",                         // ≈ real[0]
  "List two ways to separate sand mixed with water.",                          // ≈ real[1]
  "Describe the filtration process and give a situation where it is useful.",  // ≈ real[2]
  "Why is it that salt can dissolve in water while sand cannot?",              // ≈ real[3]
  "Define 'soluble' and provide one example of a soluble substance.",          // ≈ real[4]
];

// 5 genuinely different questions from a completely different Grade 6 topic (circuits)
const different = [
  "What is the difference between a series circuit and a parallel circuit?",
  "Name the components needed to build a simple electric circuit.",
  "What does a switch do in an electric circuit?",
  "Why are metals good conductors of electricity?",
  "Explain why a bulb in a series circuit goes out when one connection is broken.",
];

type Embedding = number[];

async function embed(text: string): Promise<Embedding> {
  const res = await fetch(`${EMBED_URL}?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "models/gemini-embedding-001",
      content: { parts: [{ text }] },
      outputDimensionality: EMBED_DIMS,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Embed failed ${res.status}: ${err}`);
  }
  const data = (await res.json()) as { embedding: { values: number[] } };
  return data.embedding.values;
}

function cosine(a: Embedding, b: Embedding): number {
  let dot = 0, magA = 0, magB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    magA += a[i] * a[i];
    magB += b[i] * b[i];
  }
  return dot / (Math.sqrt(magA) * Math.sqrt(magB));
}

async function main() {
  console.log("Embedding all questions via text-embedding-004...\n");

  const allTexts = [...real, ...paraphrases, ...different];
  const embeddings: Embedding[] = [];

  for (let i = 0; i < allTexts.length; i++) {
    process.stdout.write(`  [${i + 1}/${allTexts.length}] `);
    const emb = await embed(allTexts[i]);
    embeddings.push(emb);
    console.log("done");
    // Stay well within 1500 req/min free limit
    await new Promise((r) => setTimeout(r, 50));
  }

  const realEmbs = embeddings.slice(0, 10);
  const paraphraseEmbs = embeddings.slice(10, 15);
  const differentEmbs = embeddings.slice(15, 20);

  const THRESHOLD = 0.88;
  let passCount = 0;
  let totalChecks = 0;

  console.log("\n━━━ Paraphrase scores (expect ≥ 0.88 → caught as duplicate) ━━━");
  for (let i = 0; i < paraphrases.length; i++) {
    const score = cosine(paraphraseEmbs[i], realEmbs[i]);
    const caught = score >= THRESHOLD;
    const mark = caught ? "✅ CAUGHT" : "❌ MISSED";
    console.log(`  P${i + 1} vs R${i + 1}: ${score.toFixed(4)}  ${mark}`);
    if (caught) passCount++;
    totalChecks++;
  }

  console.log("\n━━━ Different-topic scores (expect < 0.88 → not flagged as dup) ━━━");
  for (let i = 0; i < different.length; i++) {
    // Compare against all 10 real questions, take max similarity
    let maxSim = 0;
    for (const re of realEmbs) {
      const s = cosine(differentEmbs[i], re);
      if (s > maxSim) maxSim = s;
    }
    const flagged = maxSim >= THRESHOLD;
    const mark = flagged ? "❌ FALSE POSITIVE" : "✅ OK";
    console.log(`  D${i + 1} max vs real: ${maxSim.toFixed(4)}  ${mark}`);
    if (!flagged) passCount++;
    totalChecks++;
  }

  const pct = ((passCount / totalChecks) * 100).toFixed(0);
  console.log(`\n━━━ Result: ${passCount}/${totalChecks} checks passed (${pct}%) ━━━`);
  if (passCount === totalChecks) {
    console.log("✅ Threshold 0.88 is valid — proceed with Vectorize integration.");
  } else {
    console.log("⚠️  Some checks failed — review scores above and adjust threshold.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
