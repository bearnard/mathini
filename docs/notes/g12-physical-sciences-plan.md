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
