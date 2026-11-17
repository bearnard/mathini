# Grade 12 History: Wave A plan (#874): the three CAPS topics we do not teach

Status: PLAN, sent to the orchestrator before any lesson is written. ADDITIVE ONLY: no existing lesson is deleted, moved, renamed or rewritten.

## Sources

1. **DBE CAPS FET History Grades 10-12** (the Afrikaans edition "Geskiedenis" of the same CAPS/KABV: `education.gov.za`, "Geskiedenis"; the English edition is not on the DBE page I could reach). Read as text.
   - Grade 12 content: section 3.3, pp. 25-31: Topic 1 The Cold War, Topic 3 Civil society protests 1950s-1970s, Topic 6 The end of the Cold War and a new world order (this plan); Topic 2 Independent Africa (Angola case study, in Topic 2) is also taken because the CAPS Topic 2 lists Angola and Cuito Cuanavale and we have no lesson on them.
   - Exam format, pp. 39-40: two papers, six questions each (three source-based, three essay, one per topic), candidates answer three per paper (one source-based, one essay, one other), 50 marks a question, 150 per paper. Paper 1: Q1 Cold War source (origins, Cold War in Europe, the Cuban Crisis), Q2 Independent Africa source (Africa in the Cold War), Q3 Civil society source (Civil Rights and Black Power), Q4 essay Cold War (China OR Vietnam, the candidate chooses), Q5 essay Congo/Tanzania, Q6 essay Civil Rights and Black Power. Paper 2: Q3 source "a new global world order", Q6 essay "the end of the Cold War and the events of 1989".
   - Essay assessment, p. 40: introduction, body that develops the argument, conclusion; "discuss, explain or evaluate the accuracy of a statement, or give an opinion".
2. `audit/caps-alignment.md` (the Grade 12 History section) for what we already teach and the gaps.
3. Facts are checked against two sources before they go in a lesson (CAPS wording + my own recall checked for dates and names); anything I am not sure of goes in `docs/notes/g12-history-doubts.md` for a teacher review pack and is left out of the question bank.

## Shape: 9 lessons, 14 questions each (126), 3 branches

Each lesson: 6 slides built from `LessonBlocks` (rule, worked source analysis, common mistake, a timeline or map-like picture drawn from fixed data, "Check yourself"), so a learner meets the **skills CAPS assesses**: reading a source for what it says and for provenance/usefulness, comparing sources, writing a structured essay paragraph (point, evidence, link). Questions are server-markable multiple choice: facts and dates, cause and consequence, "which source detail supports...", "which paragraph belongs in an essay on...". Sources used in slides and questions are **short, original or paraphrased descriptions** (no copyrighted speeches or photographs); public-domain wording is quoted only where I am sure of it and the author and date are given.

| Branch | Term | # | Topic id | Title | CAPS source |
|---|---|---|---|---|---|
| feat/g12-his-cold-war | 1 | 1 | `gr12-cold-war-origins-t1` | The origins of the Cold War | Topic 1: end of WWII, spheres of influence, satellite states, containment (Truman Doctrine, Marshall Plan), the Berlin crisis 1948-61, NATO and the Warsaw Pact, brinkmanship and the Cuban Crisis, who is to blame (interpretations) |
| | 1 | 2 | `gr12-cold-war-china-t1` | Case study: China after 1949 | Topic 1 China: Cultural Revolution, relations with the USSR and the USA 1949-73, attitude to neighbours (Tibet, India, Vietnam, Taiwan), was China a superpower by Mao's death, restoring relations with the USA, economic liberalisation after Mao |
| | 1 | 3 | `gr12-cold-war-vietnam-t1` | Case study: Vietnam 1954-1975 | Topic 1 Vietnam: background, 1957-65, 1965-69, perspectives, a global issue, 1969-75 US withdrawal and anti-war movements, how the war is remembered |
| | 1 | 4 | `gr12-cold-war-angola-t1` | Africa in the Cold War: Angola | Topic 2 Angola: how Africa was drawn in, competing spheres, colonialism and independence, civil war 1974 (MPLA, UNITA), involvement of the USSR, USA, Cuba, China and South Africa, regional impact, Cuito Cuanavale 1987-88, international relations after 1989 |
| feat/g12-his-civil-society | 2 | 5 | `gr12-civil-rights-movement-t2` | Case study: the US Civil Rights Movement | Topic 3: background, Martin Luther King and Gandhi's passive resistance, Montgomery boycott, sit-ins, Lincoln Memorial march, Birmingham, Selma-Montgomery, Little Rock, short- and long-term gains |
| | 2 | 6 | `gr12-black-power-movement-t2` | Case study: the Black Power Movement | Topic 3: reasons, the Black Panthers, Stokely Carmichael and Malcolm X, short- and long-term gains, progress towards equality |
| | 2 | 7 | `gr12-women-and-peace-movements-t2` | Women's liberation, women in South Africa and peace movements | Topic 3 overview: second-wave feminism, women's identity in South Africa 1950s-1970s (the anti-pass struggle, FEDSAW, Black Sash, trade unions, the informal sector), peace and anti-war movements |
| feat/g12-his-new-world-order | 3 | 8 | `gr12-end-of-cold-war-t3` | The end of the Cold War: 1989 | Topic 6: Gorbachev's reforms, Poland and Solidarity, the Berlin Wall, the disintegration of the USSR (how far were the reforms responsible), the turning point for South Africa (Cuito Cuanavale, De Klerk, Mandela) |
| | 3 | 9 | `gr12-new-world-order-t3` | A new world order | Topic 6: globalisation, balance of power and Africa (North-South, South-South), Western capitalism (Bretton Woods, IMF, World Bank, WTO, the IT revolution, civil-society resistance), BRICS, South Africa's reconciliation and unfinished liberation, reactions to globalisation (nationalism, extremism, 9/11, environmental groups) |

CAPS Topic 1 says the China and Vietnam case studies are examined "every year as an option against each other", so **both** are taught. Placement follows CAPS (Topic 1 in term 1, Topic 3 in term 2, Topic 6 in term 3). Existing lessons stay where they are; the three wrong-term moves (BCM, Soweto, Trade Unions/UDF) are Wave B.

## Registration (copied from Grade 10 English / Grade 11 History)

`src/curriculum/grade12/history/index.ts` gains topics in terms 1, 2 and 3; task instructions in new files `src/lib/server/caps/tasks/his-gr12-coldwar.json`, `his-gr12-civilsociety.json`, `his-gr12-neworder.json` (imported in `his.ts`); generated indexes (topic names, task index, SEO content and stats) regenerated after rebasing; the lesson content is split into `<Name>Content.tsx` (slides and bank, importable by tests) and the `CapsSubjectTopic` component, so the sync discovery fix applies (the dry run `question-sync.ts --grades 12` will be shown for each branch).

## Accuracy

- Dates, names and numbers sit in one `facts.ts` per branch and are asserted in tests (for example the Berlin Wall dates, the length of the Cuban Crisis, the Paris Peace Accords date); timelines are drawn from that data so a picture cannot disagree with the text.
- Balanced coverage: the "who was to blame for the Cold War" lesson presents the orthodox, revisionist and post-revisionist interpretations and does not pick one; the Vietnam and Angola lessons give the perspectives of the different parties.
- Question stems follow the CAPS command words (explain, evaluate the usefulness of a source, to what extent).

## Open points (the doubts file will carry them)

1. The CAPS English edition could not be fetched; I read the Afrikaans edition (same policy). A teacher should confirm names of case-study elements against the English KABV.
2. CAPS Topic 6 says the unbanning of organisations and release of political prisoners took place "in 1989"; the unbanning speech was on 2 February 1990 and the main release of prisoners began in October 1989 (Sisulu) and Mandela on 11 February 1990. The lesson states each date separately.
3. Source-based questions are multiple choice here; the exam's written source questions need a teacher or the existing exam skills lesson for marking practice.
