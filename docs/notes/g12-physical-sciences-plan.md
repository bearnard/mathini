# Grade 12 Physical Sciences: additions (Wave A)

Source: `audit/caps-alignment.md` (Grade 12 Physical Sciences section; CAPS fet_ps.txt Gr 12 teaching plan). Structure copies the existing
`src/curriculum/grade12/physical-sciences/termN/<topic>`; lessons to `docs/notes/lesson-standard.md`; banks written as computed specs, generated into
the topic file and re-verified independently (as for Grade 10 Maths: `scripts/gen-g10-maths-bank.ts` pattern).

| Branch | Term | New lesson (task slug) | Slides | Questions |
|---|---|---|---|---|
| feat/g12-ps-industry | T1 | Plastics and Polymers (`gr12-plastics-polymers-t1`): monomer and polymer, addition polymerisation (ethene, propene, chloroethene), basic condensation polymerisation, recycling codes, uses and environment | 5 | 14 |
| feat/g12-ps-industry | T3 | The Fertiliser Industry (`gr12-fertiliser-industry-t3`): N, P, K, NPK ratio and percentage by mass, Haber process, Ostwald process, contact process, fertiliser products, eutrophication | 5 | 14 |
| feat/g12-ps-rates | T2 | Rate and Extent of Reaction (`gr12-rate-extent-reaction-t2`): rate, collision theory, factors, activation energy, catalysts, energy profiles | 5 | 14 |
| feat/g12-ps-rates | T2 | Chemical Equilibrium (`gr12-chemical-equilibrium-t2`): dynamic equilibrium, Kc expression and calculations, Le Chatelier, industrial applications | 5 | 14 |
| feat/g12-ps-rates | T2 | Acids and Bases (`gr12-acids-bases-t2`): Arrhenius, Lowry-Brønsted, conjugate pairs, pH, Kw, salt hydrolysis, titrations | 5 | 14 |

The old combined lesson (`gr12-rates-equilibrium-acids-bases-t2`) stays listed and unchanged until the three new ones are live; hiding it with a redirect is the orchestrator's step.

Verification: every equation balanced by an atom-count test; NPK percentages, Kc, pH, titration and rate numbers recomputed in tests with an independent route; polymer repeat units checked
from the monomer formulae; doubts to `docs/notes/g12-physical-sciences-doubts.md`. Phone check at 320/390/1280 with screenshots looked at; `question-sync.ts --grades 12` dry run.

## Gap lessons beside plastics-polymers and fertiliser-industry (#1014, branch feat/g12-ps-gaps)

The audit status still listed plastics and the fertiliser industry as open, but both lessons already existed. Checked against the CAPS tables they are one lesson each for a topic CAPS gives 6 hours, with several CAPS items missing. Three additive lessons, 14 questions each, none repeating a question of the existing two:

| Term | Lesson (task slug) | CAPS items added |
|---|---|---|
| T1 | Polymers: Identifying Monomers, Uses and Recycling Numbers (`gr12-polymers-monomers-recycling-t1`) | monomer from a chain section for PVC, polystyrene, polythene and PVA (identification only); addition or condensation from the structure (polythene and PLA only); polythene uses and recycling numbers; plastics and the environment |
| T3 | Plant Nutrients: Sources, Functions and History (`gr12-plant-nutrients-t3`) | non-mineral C, H, O and mineral N, P, K; function of each; guano, bone meal and German potash; N:P:K ratio calculations including how much fertiliser per hectare |
| T3 | Making Fertilisers in Industry: Raw Materials, Sasol and Alternatives (`gr12-fertiliser-manufacture-t3`) | fractional distillation of air, hydrogen from coal and steam, ammonium nitrate, sulfate and urea from ammonia, superphosphate, potassium salts, Sasol and ammonium nitrate, advantages, harm and alternatives |

Tests (`src/g12PsGaps.test.ts`): every equation atom-balanced with an independent parser, the unbalanced distractor really is unbalanced, and the numbers (7,5 kg and 1,5 kg in a 5:1:4 (30) 50 kg bag, 18% N and 500 kg per hectare for 3:2:1 (36), 600 kg urea needs 340 kg ammonia, 26,5% P in superphosphate, K percentages in KCl, K2SO4 and KNO3, PLA 72 g/mol) recomputed by hand.
