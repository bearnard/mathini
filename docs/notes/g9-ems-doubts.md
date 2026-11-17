# Grade 9 EMS (Wave A): points for a teacher to confirm

Source: `audit/caps-alignment.md` (Grade 9 EMS) and the CAPS EMS Senior Phase, Grade 9. Every journal, ledger and trial balance in the credit lessons is posted by the tested double-entry helper `ems9c-helpers.ts` and recomputed in `src/g9EmsLedgers.test.ts` (the books balance; the debtors or creditors list agrees with the control account).

## Credit lessons (debtors ledger, creditors journals, cash and credit with the trial balance)

| # | What | Why it is uncertain |
|---|---|---|
| 1 | No VAT in any of the credit lessons. | CAPS Grade 9 may include VAT in credit work; a teacher should confirm. |
| 2 | The National Credit Act is described in one sentence only (in the credit-sales lesson). | Scope. |
| 3 | The DJ, DAJ and CRJ (and CJ, CAJ, CPJ) are drawn with three columns (date, name and reference, amount) so that they fit a phone. | Classes may use more columns (for example discount and VAT columns). |
| 4 | Creditors allowances are credited to a "Creditors allowances" account and debtors allowances debited to "Debtors allowances", as in the debtors lesson. | Some schools reduce Sales and Purchases directly. |
| 5 | The cash and credit lesson uses Capital, Bank, Sales, Purchases, Debtors control, Creditors control and Rent only. | Chosen to keep one month readable; the trial balance has no inventory or drawings. |
| 6 | A balancing trial balance is taught as proof that debits equal credits, not that every amount is correct. | Standard teaching point; CAPS wording not checked. |

## Not covered on purpose
- Discounts allowed and received, VAT, adjustments and the financial statements.

## Price theory, sectors of the economy and trade unions

| # | Lesson | What | Why it is uncertain |
|---|---|---|---|
| 7 | Price theory | One linear bread market (qd = 220 - 10p, qs = 10p - 20): equilibrium R12 and 100 loaves; shifts of 40 loaves at every price. All numbers are recomputed in `ems9d-helpers.test.ts` and `g9EmsEconomy.test.ts`. | The figures are invented for teaching, not real market data. |
| 8 | Price theory | Factors that shift demand (incomes, tastes, number of buyers) and supply (costs, technology, number of sellers) are named briefly. Elasticity and price controls are not taught. | CAPS Grade 9 scope. |
| 9 | Sectors | Three sectors (primary, secondary, tertiary), with a chain example (wheat farm, mill, bakery, shop). The quaternary sector and shares of GDP are not taught. | Some textbooks add a fourth sector. |
| 10 | Trade unions | The right to join a union and to strike is attributed to the Constitution (section 23); disputes follow negotiation, conciliation, then arbitration or a strike under the Labour Relations Act, with the CCMA helping. No notice periods or day counts are taught (a test checks that none appear). | The exact legal conditions for a protected strike are not taught; a teacher should confirm the level of detail. |
| 11 | Trade unions | Both workers' and employers' views are given (a strike costs workers their pay and employers their production). | Balance. |
