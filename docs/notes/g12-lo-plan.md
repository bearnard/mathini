# Grade 12 Life Orientation Wave A: plan (additive only)

CAPS source: fet_lo.txt, Grade 12 Term 3 (Development of the self in society) and Term 1 (Careers and career choices). Audit: `audit/caps-alignment.md` section "Grade 12 Life Orientation" (2 HIGH gaps).

## New lessons (5 × 14 questions = 70), task ids prefixed `gr12-`

| Id | CAPS term | CAPS content covered |
|---|---|---|
| `gr12-human-factors-ill-health-t3` | T3 wk 1-4 | Human factors that cause ill-health, accidents, crises and disasters (psychological, social, religious, cultural, different knowledge perspectives); contributing factors (eating habits, lack of exercise, smoking, substance abuse, unsafe sexual behaviour) |
| `gr12-lifestyle-diseases-t3` | T3 wk 1-4 | Lifestyle diseases (cancer, hypertension, heart and circulatory disease, TB, STIs including HIV/AIDS) as a result of poverty and gender imbalances; intervention: prevention and control, early detection, treatment, care and support |
| `gr12-physical-activity-plan-t3` | T3 wk 1-4 | Commitment to long-term physical activity: building an action plan, long-term physical, mental, social and emotional effects, value-added benefits |
| `gr12-unemployment-solutions-t1` | T1 wk 8-10 | Reasons for and impact of unemployment; innovative solutions (volunteering, part-time jobs, community work, entrepreneurship, informal jobs); financial and social viability; commitment to a decision (applications, funds, forms) |
| `gr12-tax-corruption-fraud-t1` | T1 wk 8-10 | SARS tax obligations (basics only: who registers, why tax is paid, what a tax number and return are, no rates or brackets); impact of corruption and fraud on the individual, company, community and country |

Lesson count: SARS tax and corruption share one lesson to keep it at 5; if the slide count is too high I will split it into a sixth and say so.

## Rules followed
- Additive: no existing lesson edited, none hidden. The four non-CAPS G12 LO lessons (Community and Social Action, Risk Management and Support, Active Citizenship and Leadership, Transition and Personal Planning) are only hidden after these are live, and orch is told first.
- Same pattern as the Accounting lessons: Slides + lesson component with `export const bank`, Rule / Worked / Mistake / Check blocks, pictures with descriptions; any numbers (a weekly activity plan, a small income/tax example) come from a tested helper and are recomputed in the test.
- Each lesson 4 to 6 slides, 14 validator-clean questions, key in all four positions, no edits to existing prompts.
- Sensitive content (HIV/AIDS, STIs, substance abuse): factual, health-focused, prevention and care framing; no graphic detail; points to clinics and counselling.
- Tax: no rates or brackets taught; a simple example uses a stated rate given in the question only if needed, otherwise concepts only.
- Gates: tsc, full npm test, phone check at 320/390/1280, question-sync dry run, 2 screenshots, generated files regenerated.

## Doubts for the teacher-check list
- Depth of tax content CAPS expects (it says "awareness of SARS tax obligations").
- Whether lifestyle-disease content should name specific screening tests.
