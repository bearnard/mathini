# Grade 11 Physical Sciences: additions (Wave A, #969)

Source: `audit/caps-alignment.md` (Grade 11 Physical Sciences, 11 HIGH gaps); CAPS fet_ps.txt Gr 11 term plans. Additive only: nothing is moved, hidden or removed. Each lesson sits in `src/curriculum/grade11/physical-sciences/termN/<topic>/` with its bank in the same file (like Grade 12), task id `gr11-<slug>-t<n>`.

| Branch | Term | New lesson (task slug) | State |
|---|---|---|---|
| feat/g11-ps-t1 | T1 | Newton's Law of Universal Gravitation (`gr11-gravitation-t1`), Atomic Combinations (`gr11-atomic-combinations-t1`), The Chemistry of Water (`gr11-chemistry-of-water-t1`) | done |
| feat/g11-ps-optics | T2 | Refraction and Snell's Law (`gr11-refraction-snell-t2`), Wavefronts and Diffraction (`gr11-diffraction-t2`) | done |
| feat/g11-ps-gases-moles | T2 | Ideal Gases (`gr11-ideal-gases-t2`), Moles, Gas Volumes and Concentration (`gr11-moles-concentration-t2`), Stoichiometry (`gr11-stoichiometry-t2`) | done (three lessons: the 12-hour quantitative topic is split in two) |
| feat/g11-ps-t3 | T3 | Electromagnetism (`gr11-electromagnetism-t3`), Energy and Chemical Change (`gr11-energy-chemical-change-t3`), Acid-Base Reactions (`gr11-acid-base-reactions-t3`) | done |
| feat/g11-ps-t4 | T4 | Mining and Mineral Processing (`gr11-mining-minerals-t4`) | done |

Constants are the NSC data-sheet values and are quoted in each question that needs them (G = 6,67 × 10⁻¹¹ N·m²·kg⁻²; R = 8,31 J·K⁻¹·mol⁻¹; Earth M = 5,98 × 10²⁴ kg, r = 6,38 × 10⁶ m).

## Wave B list (NOT done here: existing lessons that are in the wrong term or the wrong grade)

Wrong term (content is Grade 11 CAPS): Intermolecular Forces T3 (CAPS T1); Electrostatics T2 (CAPS T3); Electric Circuits T2 (CAPS T3, and the description adds internal resistance, a Grade 12 item); Redox Reactions T3 (CAPS T4).

Wrong grade (not in Grade 11 CAPS): Work, Energy and Power (Grade 10); Momentum and Impulse, Vertical Projectile Motion, Organic Chemistry, Electrochemical Cells (all Grade 12). The two consolidation lessons (Physics, Chemistry) review that non-CAPS content.

## Wave B done (branch feat/ps11-wave-b, approved by the orchestrator)

- Term moves (ids and URLs unchanged, pinned in `termMoves.test.ts`): Intermolecular Forces T3 to T1; Electrostatics T2 to T3; Electric Circuits T2 to T3; Redox Reactions T3 to T4. No term is empty.
- Hidden (308 to /grade-11/physical-sciences; code, task instructions and D1 rows kept): Work, Energy and Power (Grade 10 energy and Grade 12 work-energy), Momentum and Impulse, Vertical Projectile Motion, Organic Chemistry, Electrochemical Cells (Grade 12; all have a live Grade 12 equivalent).
- Trimmed: Electric Circuits (EMF and Internal Resistance section removed, description and subtitle updated; the terminal-voltage question replaced by a series-circuit pd question); Physics Consolidation (Projectile Motion and Graphs Review section removed and the internal-resistance formula removed from the electricity review; the projectile, momentum and terminal-voltage questions replaced by Newton's second law, resultant force and series-circuit current questions); Chemistry Consolidation (Organic Chemistry Review section and the galvanic-cell checklist removed; the IUPAC naming, ester and E°cell questions replaced by London forces, oxidation number and reducing agent questions). The seven dropped questions are retired by `audit/wave-b-ps/ps11-wave-b-retire.sql` (rollback alongside), to be applied after the deploy and before the sync.
- Left as is (not in the approved list): the motor-power question and the free-fall distance question in Physics Consolidation (power is Grade 12; free-fall kinematics is Grade 10), and the propan-1-ol versus propane boiling point question in Chemistry Consolidation (an intermolecular forces question that mentions an alcohol).
