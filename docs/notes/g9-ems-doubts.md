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

## Wave A gaps: functions of a business, the business plan and the financial plan (feat/g9-ems-gaps)
- Three lessons: T3 Functions of a Business (all nine CAPS functions: administration, purchasing, marketing, finances, public relations, human resources, production, general management, risk management); T4 The Business Plan: Format and SWOT; T4 The Financial Plan: Costs, Break-even and Mark-up. They fill the gaps named in the audit (no lesson named SWOT, administration, public relations or risk management, and only a T2 lesson had break-even).
- Definitions are plain classroom wording, not quoted from a book. Public relations is described as building and protecting the image of the business with the public; marketing as finding customers and selling. Please check that this split matches how your teachers draw the line.
- Business plan format follows the CAPS list in this order: front cover, table of contents, description of the product or service, goals, the business owner, production plan, marketing plan, management plan, SWOT analysis, conclusion. The financial plan is a section of the plan and has its own lesson. A made-up candle stall is used throughout; no real business.
- SWOT: strengths and weaknesses inside the business, opportunities and threats outside it; strengths and opportunities help, weaknesses and threats harm.
- Break-even = fixed costs / (selling price minus variable cost per item), rounded up to a whole item (the orchestrator's rule). The CAPS only says "break-even points" and does not give the formula, so please confirm it is the formula your teachers teach. Candle stall: fixed costs R1 800, variable cost R18, price R30: break-even 150 candles; 200 candles give sales R6 000, total costs R5 400, profit R600.
- Mark-up: the CAPS says "mark-up on sales". The lesson works the mark-up percentage on the COST PRICE ((selling price minus cost price) / cost price x 100), as the orchestrator decided, and says so in the slides and in the question wording. Profit percentage is worked on sales (profit / sales x 100). Some textbooks work the mark-up on selling price; if your teachers do, the two lessons and their questions need changing.
- All amounts are whole rands, so no decimal comma is needed except in one explanation (R1 000 / R9 = 111,1, rounded up to 112).
- Not built: the business plan as a written project, the Term 3 project and the examination preparation.
- The older lessons gr9-budgeting-business-decisions (fixed and variable costs, break-even) and gr9-production-marketing (mark-up) are no longer the only cover of the financial plan items; hiding them is a decision for the orchestrator.
