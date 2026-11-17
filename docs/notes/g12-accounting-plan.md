# Grade 12 Accounting: Wave A plan (#938): close corporations, internal control and internal audit

Source: DBE CAPS FET Accounting Grades 10-12 (`fet_acc`), Grade 12 Term 2: "3. Financial accounting of close corporations" (week 2: close corporation, founding statement, members, loans to members, loans from members, distribution to members; and the differences in the financial statements of companies and close corporations, particularly terminology), "4. Internal control" (week 2: means of gathering audit evidence, basis for gathering audit samples, basic sampling techniques, internal audit reports, accountable management of resources; the roles of internal and external auditors), and the continuous topic "2. Internal control" (definition of internal audit; internal control against internal audit; the role of the internal auditor; division of duties, documentation and physical controls; procedures for cash, credit buying and selling, stock, debtors and creditors). `audit/caps-alignment.md` (Grade 12 Accounting): both are HIGH gaps. ADDITIVE ONLY: the 14 existing lessons are untouched (the two term moves of Wave B are already merged).

## 3 lessons, 14 questions each (42), one branch (feat/g12-acc-cc-control), all in Term 2

| Lesson (task id) | Content |
|---|---|
| Close Corporations (`gr12-close-corporations-t2`) | what a close corporation is, the founding statement, members and members' interest, **loans to members** (an asset) and **loans from members** (a liability), **distribution to members** (instead of dividends), the statements: income statement, appropriation of profit, balance sheet equity (members' contribution, retained income, members' interest) and the terminology table companies against close corporations |
| Internal Control and Division of Duties (`gr12-internal-control-t2`) | internal control against internal audit; division of duties, documentation, physical controls; procedures for cash, credit buying and selling, stock, debtors and creditors |
| Internal Audit: Evidence, Sampling and Reports (`gr12-internal-audit-t2`) | what an internal audit is, the roles of the internal and the external auditor, means of gathering audit evidence, sampling (the basis and basic techniques), internal audit reports, accountable management of resources |

## How every figure is checked

A small tested helper `ccStatements` (in `src/components/diagrams/accounting/closeCorporation.ts`, with a test) builds the close corporation's income statement, appropriation of profit and balance sheet from one set of inputs, and the test asserts: net profit = sales - cost of sales - expenses (and any interest on members' loans), retained income carried forward = opening + profit - distribution to members, **assets = members' interest + liabilities** (the balance sheet balances), and that the loans to and from members sit on the correct sides. Every figure in a slide or a question is recomputed from the helper (the same approach as the EMS ledgers and the Grade 9 EMS trial balance). The audit lesson's sampling example (a sample of invoices checked, the error rate, the extrapolated error) and the cash-count example are computed by a second small helper and asserted.

## Accuracy and doubts

- The close corporation is taught as the CAPS lists it. The Close Corporations Act of 1984 is named; **no rates or limits** (tax rates, number of members) are given, except that a close corporation has members and not shareholders. Whether the CAPS term is the "income statement" and "balance sheet" or the newer names is checked against the CAPS text (it uses Income Statement and Balance Sheet, which the lessons follow).
- Internal control and audit are taught at the CAPS level. Audit standards, assurance levels and legal detail are not. Doubts to `docs/notes/g12-accounting-doubts.md`.
- No invented real firms; invented names; rand with the South African space (R125 000).

## Offered, not planned now

A GAAP-principles lesson, a debtors age-analysis lesson and a cash-budget lesson are PARTIAL gaps in the audit; I can add them later if you want.
