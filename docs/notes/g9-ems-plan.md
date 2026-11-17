# Grade 9 EMS: additions (Wave A)

Source: `audit/caps-alignment.md` (Grade 9 EMS section; CAPS EMS Senior Phase, Grade 9 Terms 1-4). Lessons to `docs/notes/lesson-standard.md`, existing folder
`src/curriculum/grade9/economic-management-sciences/termN/<topic>`; banks curated and server-markable; journals and ledgers checked by a small double-entry test
engine (every journal and ledger in a lesson or question balances; trial balance debits equal credits).

| Branch | Term | New lesson (task slug) | Slides | Questions |
|---|---|---|---|---|
| feat/g9-ems-credit | T2 | Credit Sales and the Debtors Journal (`gr9-debtors-credit-t2`): credit sales, National Credit Act basics, DJ, DAJ (debtors allowances), receipts in the CRJ | 5 | 14 |
| feat/g9-ems-credit | T3 | Debtors Ledger and General Ledger Posting (`gr9-debtors-ledger-t3`) | 4 | 14 |
| feat/g9-ems-credit | T3 | Credit Purchases: Creditors Journals (`gr9-creditors-journals-t3`): CJ, CAJ, CPJ, creditors allowance, Creditors Ledger | 5 | 14 |
| feat/g9-ems-credit | T4 | Cash and Credit Transactions with the Trial Balance (`gr9-cash-credit-trial-balance-t4`) | 5 | 14 |
| feat/g9-ems-economy | T2 | Price Theory: Demand and Supply (`gr9-price-theory-t2`): demand and supply curves, equilibrium, shifts | 5 | 14 |
| feat/g9-ems-economy | T2 | Sectors of the Economy (`gr9-sectors-economy-t2`): primary, secondary, tertiary | 4 | 14 |
| feat/g9-ems-economy | T3 | Trade Unions (`gr9-trade-unions-t3`): role, collective bargaining, strikes and rights | 4 | 14 |

About 98 questions. Existing lessons are untouched (the term move of the business plan to T4 is Wave B, not mine). Doubts to `docs/notes/g9-ems-doubts.md`; question-sync dry run; phone check 320/390/1280.

## Handoff (status when the first author stopped)

- **Done on `feat/g9-ems-credit`:** `gr9-debtors-credit-t2` (lesson in `term2/debtors-credit/`, 14 questions, registered, task prompt in `ems-gr9-term2.json`), the double-entry engine `src/components/diagrams/ems/ems9c-helpers.ts` (+ test) that already supports BOTH debtors (DJ, DAJ, CRJ) and creditors (CJ, CAJ, CPJ) ledgers and general-ledger postings, and `src/g9EmsCredit.test.ts` (shape, bank quality, independent amounts). Phone check done at 320/390/1280 (journal tables use 3 columns so they fit at 320).
- **Still to do, in this order:** `gr9-debtors-ledger-t3`, `gr9-creditors-journals-t3`, `gr9-cash-credit-trial-balance-t4` (reuse `ems9c-helpers`, `TAccount`, `JournalTable`, `TrialBalanceTable`), then branch `feat/g9-ems-economy`: price theory, sectors of the economy, trade unions. Pattern to copy: `term2/debtors-credit/` (Slides.tsx + component with the bank) and its test.
- **Doubts to record** in `docs/notes/g9-ems-doubts.md`: no VAT in the credit lessons; the National Credit Act is described in one sentence only; confirm the exact DJ/DAJ/CRJ column layout the class uses.
