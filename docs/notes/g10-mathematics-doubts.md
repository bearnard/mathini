# Grade 10 Mathematics: doubts for teacher review

Scope or wording points I could not settle from the repo's CAPS summary (`syllabus/grade10/mathematics`) alone. They are written up here for the teacher review
pack. Where the item is in the bank or a lesson, it is marked; a teacher can cut it without touching anything else.

## Term 1

1. **Algebraic fractions with binomial denominators** (lesson "Algebraic Expressions", slide 4; bank: `(x² − 9) ÷ (x² + x − 6)`). The summary says "algebraic fractions"
   without limits. I believe CAPS Gr 10 restricts addition and subtraction to monomial denominators and simplification to fractions that factorise, but I could not confirm
   the exact limit. Simplifying with trinomial factors is in; adding fractions is only done with monomial denominators (2/x + 3/(2x)).
2. **Sum and difference of cubes** (slide 3; bank: `x³ − 27`). The summary says "factorisation including grouping and cubes", so cubes are in scope; a teacher should
   confirm the depth (here only a³ ± b³ with a perfect cube and a single x).
3. **Non-monic trinomials** (`2x² + 7x + 3`, `2x² − 5x − 3`). Assumed in scope ("quadratic factorisation").
4. **Exponential equations whose answer is a fraction** (lesson "Exponents", slide 4: `9ˣ = 27`, x = 3/2). The bank only uses integer answers (2ˣ = 32, 3^(x+1) = 27, 5ˣ = 1/25); the
   fractional answer is in the lesson as a stretch example. Teacher to confirm or cut.
5. **Reciprocal ratios** (cosec, sec, cot): the summary lists "reciprocal ratios" for Gr 10, so they are taught and one bank item uses cosec. Confirm the expected notation.
6. **Rational and irrational numbers / surds**: the lesson only classifies and estimates (between integers, rounding). Simplifying surds (√50 = 5√2) is left out as Grade 11.
7. **Literal equations**: one formula item (`v = u + at`) and the lesson's `A = ½bh`. Confirm the level of manipulation expected (e.g. square-root subjects are not used).
8. **Number patterns**: linear only (the summary says "linear number patterns and general terms"). Quadratic patterns are Grade 11.
9. **Simultaneous equations**: both equations linear (elimination and substitution). Non-linear simultaneous equations are Grade 11.

## How the numbers were checked

Every key and every wrong option was checked a second time by independent evaluation (`src/g10MathsBank.test.ts`): algebra items by evaluating the prompt
expression and every option at 15 points; equations by searching for the real solutions; inequalities and intervals on a grid; simultaneous equations by
substitution; patterns and trigonometry recomputed term by term with `Math`.

## Term 2

10. **Exam time and marks.** The mid-year lesson only says to allow "about a minute per mark" as a rough guide; I did not state the number of papers, their marks or length for Grade 10, because
    I could not confirm the current CAPS paper structure from the repo. A teacher should give the real structure and I will add it.
11. **Mid-year exam topic list.** The practice questions mix Term 1 and Term 2 content (algebra, exponents, patterns, equations, trigonometry, functions, geometry). Euclidean geometry riders with formal proofs
    are not in the bank (they are not auto-markable as multiple choice); the lesson covers the reasons only.
12. **Functions: form of the graphs.** Parabolas are y = ax² + q (and y = a·x² only), hyperbolas y = a/x + q, exponentials y = a·bˣ + q, trigonometric graphs y = a sin x + q (and cos, tan) with q only.
    CAPS Gr 10 may also include horizontal shifts of the trig graphs (e.g. sin(x + 30°)); I left them out as Grade 11. Confirm.
13. **Midpoint theorem and its converse** are taught as theorems with algebra applications. Proving them is not asked. Confirm that learners are only expected to use them.
14. **Quadrilateral properties:** the kite statement "the diagonals meet at right angles" is used; "one diagonal bisects the other" is stated only as a property of the kite's diagonal of symmetry.
15. **Reciprocal graphs:** the tangent graph lesson shows asymptotes at 90° and 270° for 0° ≤ x ≤ 360° (no negative angles). Confirm the interval used in class.
