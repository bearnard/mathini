# Grade 12 Information Technology: Wave A plan (#874): the CAPS topics we do not teach

Status: PLAN, sent to the orchestrator before any lesson is written. ADDITIVE ONLY: no existing lesson is deleted, moved, renamed or rewritten. (Wave B, the wrong-term moves and hiding the two invented OOP lessons, is separate and waits for the owner.)

## Sources

- **DBE CAPS FET Information Technology Grades 10-12** (`fet_it`), Section 3, Grade 12 Terms 1-4, pp. 40-47: Term 1 Hardware (p. 40), Software Engineering Principles (p. 42); Term 2 Software, Computer Management, 2-dim arrays (pp. 43-44); Term 3 Database Design Concepts (data collection, warehousing, mining, location-based data), Internet and WWW, Internet Services Technologies (p. 45).
- `audit/caps-alignment.md`, Grade 12 IT section.
- **Caveat:** an IT CAPS amendment (2024 Section 3) may exist; I searched and could not find it on the DBE site, so this plan uses the original CAPS (the audit flagged the same). If the owner has the amendment I will check the plan against it.

## Shape: 8 lessons, 14 questions each (112), 3 branches (one per CAPS term)

| Branch | Term | Topic id | Title | CAPS elements taught |
|---|---|---|---|---|
| feat/g12-it-term1 | 1 | `gr12-hardware-mobile-technologies-t1` | Hardware: mobile technologies and performance | smart phones, laptops, tablets, netbooks, e-book readers; advantages of mobility; constraints (battery life, size, computing power vs power consumption); factors influencing performance (CPU speed and multi-processing, cache and RAM, storage speed, network speed); motivate a system for home/personal, game and entertainment, SOHO and power users |
| | 1 | `gr12-software-methodologies-design-tools-t1` | Software methodologies and design tools | waterfall, RAD, incremental and agile compared; TOE charts, noun-verb analysis, IPO diagrams, CRC cards, UML use case and basic class diagrams; starting the PAT with a task description and analysis of requirements |
| feat/g12-it-term2 | 2 | `gr12-cloud-computing-virtualisation-t2` | Cloud computing, SaaS and virtualisation | what cloud computing is, effect on hardware needs, software as a service (advantages, who owns what), virtualisation of servers, arguments for and against |
| | 2 | `gr12-computer-management-t2` | Computer management | factors influencing management; housekeeping tasks (updates, backups, disk clean-up, defragmentation as relevant, user accounts, anti-malware) and maintaining data integrity and protecting the system |
| | 2 | `gr12-two-dimensional-arrays-t2` | Two-dimensional arrays (Delphi) | structure, declaring, stepping through rows and columns, basic operations such as row and column aggregates; code traces checked by running the same logic in tests |
| feat/g12-it-term3 | 3 | `gr12-data-collection-warehousing-mining-t3` | Data collection, data warehousing and data mining | RFID, online and "invisible" collection (credit and loyalty cards, toll passes, cellphones); data warehousing (purpose, uses); data mining (SQL, extracting, patterns, knowledge, strategy); location-based data |
| | 3 | `gr12-web3-semantic-search-t3` | Web 3.0, semantic search and online applications | trends such as Web 3.0 (the Semantic Web), Web 1.0 and 2.0 for contrast, online applications and storage, improving searching: semantic and mediated search |
| | 3 | `gr12-internet-services-technologies-t3` | Internet services technologies | storing data locally (cookies) and online (databases), the role of SQL, scripting languages (PHP, JavaScript) and XML, running instructions locally (scripts, AJAX) and on the server, formatting output with CSS |

Lessons are 6 slides each from `LessonBlocks` (rule, worked example, common mistake, a picture or code listing from fixed data, "Check yourself"). Questions are server-markable multiple choice: definitions, comparisons ("which methodology ... "), "motivate a system for this user", cause-and-effect, and for 2-D arrays and the web lessons short code or markup that the learner reads and traces. **Code answers are computed in tests** (the 2-D array trace values are produced by running the same logic in TypeScript, so a printed number cannot be wrong).

## Registration and gates

Same as Grade 10 English / Grade 12 History: `src/curriculum/grade12/information-technology/index.ts` gains topics at the end of terms 1, 2 and 3 (existing ids and order unchanged), a task-instruction JSON imported in the IT task module, lessons split into `<Name>Content.tsx` + the `CapsSubjectTopic` component (so question-sync discovery works; dry run `--grades 12` shown per branch), generated files regenerated after rebase, tests like the History ones (registration, 12-14 clean questions, answer positions, answers findable in the lesson, facts asserted), phone check 320/390 with screenshots.

## Accuracy and legal care

- Hardware facts (cache vs RAM, multi-core, SSD vs HDD speeds) are given as relative statements, not as fixed figures that go out of date.
- No real products or companies are used in model text beyond generic examples (a "cloud provider", "an online word processor"); no copyrighted screenshots.
- Delphi code is original, uses the CAPS constructs (arrays, loops, `Memo`/`ShowMessage` style output) and each traced result is asserted in a test.
- Where CAPS asks for opinion ("arguments for and against" cloud), the lesson presents both sides and does not pick one.

## Wave B interaction

When these Term 1 topics exist, Wave B can hide "Inheritance and Polymorphism" and "Encapsulation and Exception Handling" (invented, not CAPS). The 7 wrong-term moves also need the owner's go. I will not touch those in Wave A.

## Open points

1. Eight lessons rather than seven: CAPS has two separate sections (Internet and WWW; Internet Services Technologies) which I would keep as two lessons.
2. The 2024 amendment (above).
3. 2-D arrays are the most exam-relevant item: shall I start with the term 2 branch? Default is term order (term 1 first).
