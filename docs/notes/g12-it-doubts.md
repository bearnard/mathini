# Grade 12 Information Technology (Wave A): points for a teacher to confirm

Source: DBE CAPS FET Information Technology Grades 10-12 (the original document, Section 3, Grade 12, pp. 40-47). **The 2024 IT CAPS amendment (Section 3) could not be found online and is not checked.** If it changes the Grade 12 content, the lessons below should be compared against it.

## Two-dimensional arrays (Term 2)

| # | What | Why it is uncertain |
|---|---|---|
| 1 | The lesson uses `array[1..4, 1..3] of Integer` and `arr[r, c]`. Delphi also allows `arr[r][c]` and arrays declared from 0. | NSC papers use the `[r, c]` form with bounds from 1; a teacher may prefer to show both. |
| 2 | "Delphi does not set a local variable to 0 for you." | True for local variables of simple types; global variables are cleared. A teacher should confirm the wording for the classroom. |
| 3 | The loops output with `redOut.Lines.Add` and `#9` (a tab). | A teacher may use a Memo, a RichEdit or a ListBox; the output control is only an example. |
| 4 | Every printed number is recomputed in `twoDimensionalArrays.test.ts` from one data table with Delphi semantics (1-based bounds, `div` and `mod`). | None. |
| 5 | The lesson does not teach reading the array from a text file, or arrays of strings, although the NSC practical paper often does. | CAPS lists structure, stepping through the items and basic operations such as row and column aggregates; a teacher may want a follow-up. |

## Term 1: hardware, methodologies and design tools

| # | Lesson | What | Why it is uncertain |
|---|---|---|---|
| 6 | Hardware | Performance facts are relative (an SSD is usually faster than an HDD; cache is faster than RAM); no fixed speeds or sizes are given. | Specifications change quickly; a teacher may add current figures. |
| 7 | Hardware | The system motivations for home, games, SOHO and power users are typical examples, not fixed specifications. A graphics card is mentioned for games although CAPS lists only CPU, memory, storage and network speed as performance factors. | A teacher should confirm that a graphics card is acceptable in the classroom answer. |
| 8 | Methodologies | The four methodologies are summarised in one idea, strength, weakness and situation each. Names such as Scrum are not taught. | CAPS says "overview and comparison"; textbooks differ in emphasis. |
| 9 | Methodologies | Noun-verb analysis is shown on a library example (nouns suggest classes and attributes, verbs suggest methods). | A teacher may prefer an example from the PAT. |
| 10 | Design tools | TOE, IPO, CRC and UML are each given one example or description; drawing a UML diagram is not assessed by multiple choice. | CAPS says "any appropriate tools". |

## Term 2: cloud computing and computer management

| # | Lesson | What | Why it is uncertain |
|---|---|---|---|
| 11 | Cloud | "Who owns what?": the provider owns the servers and the software, the customer has the right to use the software and the data stays the customer's but is stored by the provider ("read the terms of use"). | CAPS lists the question without an answer; contracts differ. A teacher should confirm the expected answer. |
| 12 | Cloud | The lesson says nothing about IaaS/PaaS, private or hybrid clouds. | Not in CAPS Grade 12. |
| 13 | Cloud | The arguments for and against are presented as a balanced pair and a situation (a school with a poor connection) is used to show that the weight depends on the case. | CAPS asks for arguments for and against. |
| 14 | Computer management | Defragmenting is taught for a hard disk drive and not for an SSD. | Modern operating systems schedule this themselves; a teacher may want to say so. |
| 15 | Computer management | A UPS and load-shedding are used as the power-failure example; the advice to keep one backup copy away from the building is a common rule, not CAPS wording. | South African context added by the author. |

## Term 3: data, Web 3.0 and internet services

| # | Lesson | What | Why it is uncertain |
|---|---|---|---|
| 16 | Data | "Invisible" collection is taught as data the person does not type in (card swipes, toll passes, cellphones), and the lesson says that it is not by itself secret or illegal. | CAPS lists the examples without a definition. |
| 17 | Data | The mining example (baby food and nappies) is a simple illustration, not a claim about a real shop. Mining is taught in four steps following the CAPS list (SQL, extracting, patterns, knowledge, strategy). | CAPS gives a list, not a process. |
| 18 | Web 3.0 | Web 3.0 is taught as the Semantic Web, as CAPS says. The wider popular meaning of the word (decentralised web, blockchain) is not taught. | Terminology differs outside CAPS. |
| 19 | Web 3.0 | **Mediated search** is described generally: a search helped by an intermediary such as a person or a specialised search service. | The CAPS gives only the name. Textbook definitions differ; a teacher should confirm the expected answer. One question depends on it. |
| 20 | Internet services | The XML and CSS examples are simple and are checked in the test (the XML is well formed, the CSS rule is the one the question describes). JavaScript is described as running in the browser, PHP on the server. | JavaScript can also run on a server; the lesson follows CAPS (locally: scripts, AJAX; online: server-side scripts). |

## Not covered on purpose
- Dynamic arrays (`SetLength`) and arrays of records.
