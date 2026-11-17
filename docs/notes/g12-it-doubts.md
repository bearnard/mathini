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

## Not covered on purpose
- Dynamic arrays (`SetLength`) and arrays of records.
