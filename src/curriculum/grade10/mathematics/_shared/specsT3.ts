import { q, type Q } from './bank';
import * as h from '../../../../components/diagrams/maths/grade10Helpers';
import * as g from '../../../../components/diagrams/maths/grade10Helpers2';
import * as t from '../../../../components/diagrams/maths/grade10Helpers3';

const { pt } = g;
const { rand, dec } = { rand: t.rand, dec: h.dec };
const fs = h.fracStr;
const mid = (m: [h.Frac, h.Frac]) => pt(m[0][0] / m[0][1], m[1][0] / m[1][1]);
const usd = (n: number) => rand(n).replace('R', '$');

// ---------------------------------------------------------------- Analytical Geometry
export const analyticalGeometry: Q[] = (() => {
  const dist = t.distanceExact([1, 2], [4, 6])!;
  const m = t.midpoint([-2, 3], [6, 7]);
  const gr = t.gradient([1, 2], [4, 8]);
  const end = t.endFromMidpoint([1, -2], [3, 1]);
  const perp = t.perpendicular([2, 3])!;
  const kVal = 2 + (5 - 1) * 2; // slope 2 through (1; 2)
  const par = t.parallelogramD([0, 0], [4, 1], [5, 4]);
  const o = t.distanceExact([0, 0], [-5, 12])!;
  const ab2 = t.distanceSquared([-1, 4], [3, -2]);
  return [
    q('What is the distance between A(1; 2) and B(4; 6)?', `${dist}`, ['7', '25', '2,6'], 'd = √((4 − 1)² + (6 − 2)²) = √(9 + 16) = √25 = 5.'),
    q('What are the coordinates of the midpoint of the line joining (−2; 3) and (6; 7)?', mid(m), [pt(4, 2), pt(8, 10), pt(-1, 2)], 'Add the x-coordinates and halve: (−2 + 6)/2 = 2. Add the y-coordinates and halve: (3 + 7)/2 = 5. The midpoint is (2; 5).'),
    q('What is the gradient of the line through (1; 2) and (4; 8)?', fs(gr), ['1/2', '3', '6'], 'Gradient = (8 − 2) ÷ (4 − 1) = 6 ÷ 3 = 2. Change in y over change in x.'),
    q('M(3; 1) is the midpoint of AB and A is (1; −2). What are the coordinates of B?', pt(end[0], end[1]), [pt(2, 3), pt(4, -1), pt(7, 0)],
      'The midpoint is halfway, so B is as far from M as A is, in the same direction: x: 2(3) − 1 = 5 and y: 2(1) − (−2) = 4. B is (5; 4).'),
    q('A line has gradient 2/3. What is the gradient of a line perpendicular to it?', fs(perp), ['3/2', '−2/3', '2/3'], 'Perpendicular gradients multiply to −1: (2/3) × m = −1, so m = −3/2.'),
    q('Line AB has a gradient of −3. What is the gradient of a line parallel to AB?', '−3', ['3', '1/3', '−1/3'], 'Parallel lines have equal gradients, so the gradient is also −3.'),
    q('A(1; 2), B(3; 6) and C(5; k) lie on one straight line. What is k?', String(kVal), ['8', '9', '12'], 'The gradient AB = (6 − 2) ÷ (3 − 1) = 2. For C to be on the line, the gradient AC must also be 2: (k − 2) ÷ 4 = 2, so k = 10.'),
    q('ABCD is a parallelogram with A(0; 0), B(4; 1) and C(5; 4). What are the coordinates of D?', pt(par[0], par[1]), [pt(9, 5), pt(-1, -3), pt(0, 4)],
      'The diagonals of a parallelogram bisect each other, so the midpoint of AC is the midpoint of BD. D = A + C − B = (0 + 5 − 4; 0 + 4 − 1) = (1; 3).'),
    q('Q(1; 2), R(4; 6) and S(8; 3) are the vertices of a triangle. Which angle is a right angle?', 'Angle R', ['Angle Q', 'Angle S', 'None of the angles'],
      'Gradient QR = 4/3 and gradient RS = (3 − 6) ÷ (8 − 4) = −3/4. The product is (4/3)(−3/4) = −1, so QR ⊥ RS and the right angle is at R.'),
    q('What is the distance from the origin to the point (−5; 12)?', String(o), ['7', '17', '169'], 'd = √((−5 − 0)² + (12 − 0)²) = √(25 + 144) = √169 = 13.'),
    q('Which formula gives the midpoint of the line joining (x₁; y₁) and (x₂; y₂)?', '((x₁ + x₂)/2 ; (y₁ + y₂)/2)', ['((x₂ − x₁)/2 ; (y₂ − y₁)/2)', '(x₁ + x₂ ; y₁ + y₂)', '√((x₂ − x₁)² + (y₂ − y₁)²)'],
      'The midpoint is the average of the x-coordinates and the average of the y-coordinates.'),
    q('A(−1; 4) and B(3; −2). What is AB²?', String(ab2), ['10', '100', '20'], 'AB² = (3 − (−1))² + (−2 − 4)² = 4² + (−6)² = 16 + 36 = 52.'),
    q('What is the gradient of the vertical line x = 4?', 'Undefined', ['0', '4', '1'], 'On a vertical line the change in x is 0, so the gradient (Δy ÷ Δx) would need a division by 0: it is undefined. (A horizontal line has gradient 0.)'),
    q('M(x; 4) is the midpoint of P(−1; 2) and Q(7; 6). What is x?', String((-1 + 7) / 2), ['4', '6', '2'], 'x = (−1 + 7) ÷ 2 = 3. (Check y: (2 + 6) ÷ 2 = 4 ✓.)'),
  ];
})();

// ---------------------------------------------------------------- Finance and Growth
export const financeGrowth: Q[] = (() => {
  const hp = t.hirePurchase(9000, 10, 12, 2);
  return [
    q('R4 000 is invested at 8% p.a. simple interest for 3 years. What is the total amount?', rand(t.simpleAmount(4000, 8, 3)), [rand(960), rand(4000 * 1.08 ** 3), rand(4320)],
      'A = P(1 + in) = 4 000(1 + 0,08 × 3) = 4 000 × 1,24 = R4 960,00. (R960 is the interest only.)'),
    q('R5 000 is invested at 10% p.a. compound interest for 2 years. What is the total amount?', rand(t.compoundAmount(5000, 10, 2)), [rand(6000), rand(5500), rand(1050)],
      'A = P(1 + i)ⁿ = 5 000(1,1)² = 5 000 × 1,21 = R6 050,00.'),
    q('R12 000 is invested at 6% p.a. compounded monthly for 1 year. What is the total amount (to the nearest cent)?', rand(t.compoundMonthly(12000, 6, 1)), [rand(12720), rand(12006), rand(12360)],
      'The rate per month is 6% ÷ 12 = 0,5% and there are 12 months: A = 12 000(1,005)¹² = R12 740,13.'),
    q('A R9 000 laptop is bought on hire purchase: a 10% deposit and the balance at 12% p.a. simple interest over 2 years, paid in 24 equal monthly instalments. What is each instalment?', rand(hp.monthly), [rand(375), rand(450), rand(456)],
      'Deposit R900, balance R8 100. A = 8 100(1 + 0,12 × 2) = R10 044. Instalment = 10 044 ÷ 24 = R418,50.'),
    q('A price of R200 rises with inflation at 5% p.a. for 3 years. What is the new price?', rand(t.compoundAmount(200, 5, 3)), [rand(230), rand(210), rand(200 * 0.95 ** 3)],
      'A = 200(1,05)³ = 200 × 1,157625 = R231,53. (R171,48 would be a price that falls 5% each year.)'),
    q('The exchange rate is $1 = R18,50. How many dollars is R925?', usd(925 / 18.5), [usd(925 * 18.5), usd(925 + 18.5), usd(925 - 18.5)],
      'Divide the rand amount by the rate: 925 ÷ 18,5 = $50,00.'),
    q('A town of 20 000 people grows at 3% p.a. How many people are there after 4 years (nearest 10)?', `${Math.round(t.compoundAmount(20000, 3, 4) / 10) * 10}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' '), ['22 400', '20 600', '22 500'],
      'Population growth is compound growth: 20 000(1,03)⁴ = 22 510,2 ≈ 22 510 people.'),
    q('R1 000 is invested for 2 years at 10% p.a. one way with simple interest and another way with compound interest. What is the difference?', 'Compound interest earns R10 more', ['They earn the same', 'Simple interest earns R10 more', 'Compound interest earns R100 more'],
      'Simple: 1 000(1 + 0,1 × 2) = R1 200. Compound: 1 000(1,1)² = R1 210. Compound is R10 more, because the second year earns interest on the first year\'s interest.'),
    q('How many years does it take R1 000 to double at 10% p.a. simple interest?', String(t.simpleYearsTo(1000, 10, 2000)), ['5', '7', '20'], 'The interest must be R1 000: 1 000 × 0,1 × n = 1 000, so n = 10 years.'),
    q('What is the interest earned on R6 000 invested at 5% p.a. simple interest for 4 years?', rand(t.simpleInterest(6000, 5, 4)), [rand(t.simpleAmount(6000, 5, 4)), rand(300), rand(t.compoundAmount(6000, 5, 4) - 6000)],
      'Interest = P × i × n = 6 000 × 0,05 × 4 = R1 200,00. (R7 200 is the total amount.)'),
    q('Which decimal do you use in the formulae for an interest rate of 7,5% p.a.?', '0,075', ['0,75', '7,5', '0,0075'], 'A percentage means "per hundred", so divide by 100: 7,5 ÷ 100 = 0,075.'),
    q('After 2 years at 10% p.a. simple interest an investment is worth R3 300. How much was invested?', rand(t.simplePrincipal(3300, 10, 2)), [rand(3000), rand(2640), rand(3630)], '3 300 = P(1 + 0,1 × 2) = 1,2P, so P = 3 300 ÷ 1,2 = R2 750,00.'),
    q('Which formula calculates compound growth?', 'A = P(1 + i)ⁿ', ['A = P(1 + in)', 'A = P(1 − i)ⁿ', 'A = P + i + n'], 'Compound growth multiplies by (1 + i) once for each period, so (1 + i)ⁿ. P(1 + in) is simple interest.'),
    q('R2 000 is invested at 8% p.a. compound interest for 3 years. What is the amount?', rand(t.compoundAmount(2000, 8, 3)), [rand(2480), rand(2160), rand(2500)], 'A = 2 000(1,08)³ = 2 000 × 1,259712 = R2 519,42.'),
  ];
})();

// ---------------------------------------------------------------- Statistics
export const statistics: Q[] = (() => {
  const data = [12, 15, 11, 18, 20, 14, 17, 16];
  const f = t.fiveNumber(data);
  const data2 = [2, 4, 4, 5, 7, 8, 9, 11];
  const f2 = t.fiveNumber(data2);
  const rows = [{ from: 0, to: 10, freq: 4 }, { from: 10, to: 20, freq: 8 }, { from: 20, to: 30, freq: 10 }];
  const gm = t.groupedMean(rows);
  const mids = rows.map(t.classMidpoint);
  const uppers = t.groupedMean(rows.map((r) => ({ from: r.to, to: r.to, freq: r.freq })));
  const lowers = t.groupedMean(rows.map((r) => ({ from: r.from, to: r.from, freq: r.freq })));
  const cls = (c: { from: number; to: number }) => `${c.from} to ${c.to}`;
  const mc = t.medianClass(rows)!;
  const mod = t.modalClass(rows);
  const c = (n: number) => dec(n, 1).replace(',0', '');
  const cm = (n: number) => String(n).replace('.', ',');
  const set = `${data.join('; ')}`;
  return [
    q(`What is the median of this data: ${set}?`, cm(f.median), ['19', '15', '16'], 'Put the data in order: 11; 12; 14; 15; 16; 17; 18; 20. The two middle values are 15 and 16, so the median is (15 + 16) ÷ 2 = 15,5.'),
    q(`What is the lower quartile (Q₁) of the data: ${set} (marks of eight learners)?`, cm(f.q1), ['12', '14', '15'], 'In order: 11; 12; 14; 15; 16; 17; 18; 20. The lower half is 11; 12; 14; 15 and its median is (12 + 14) ÷ 2 = 13.'),
    q(`What is the upper quartile (Q₃) of the data: ${set} (ages of eight club members)?`, cm(f.q3), ['17', '18', '18,5'], 'The upper half is 16; 17; 18; 20 and its median is (17 + 18) ÷ 2 = 17,5.'),
    q(`What is the interquartile range of the data: ${set} (minutes taken by eight runners)?`, cm(f.iqr), ['9', '17,5', '13'], 'IQR = Q₃ − Q₁ = 17,5 − 13 = 4,5.'),
    q(`What is the range of the data: ${set} (prices in rand of eight books)?`, String(f.range), ['4,5', '31', '15,5'], 'Range = highest − lowest = 20 − 11 = 9.'),
    q('What is the five-number summary (minimum; Q₁; median; Q₃; maximum) of 2; 4; 4; 5; 7; 8; 9; 11?', `${f2.min}; ${f2.q1}; ${f2.median}; ${cm(f2.q3)}; ${f2.max}`, ['2; 4; 5; 8; 11', '2; 5; 6; 8; 11', '2; 4,5; 6; 9; 11'],
      'The median is (5 + 7) ÷ 2 = 6. Lower half 2; 4; 4; 5 has median 4. Upper half 7; 8; 9; 11 has median (8 + 9) ÷ 2 = 8,5.'),
    q('What is the mean of 2; 4; 4; 5; 7; 8; 9; 11?', cm(t.mean(data2)), ['6', '5,5', '6,5'], 'The sum is 50 and there are 8 values: 50 ÷ 8 = 6,25. (6 is the median.)'),
    q('A box-and-whisker plot has minimum 4, Q₁ = 10, median 14, Q₃ = 22 and maximum 30. What is the interquartile range?', String(22 - 10), ['26', '8', '18'], 'The IQR is the width of the box: 22 − 10 = 12.'),
    q('What percentage of the data lies between Q₁ and Q₃?', '50%', ['25%', '75%', '100%'], 'Each quarter of the data holds 25%. Between Q₁ and Q₃ there are two quarters: 50%. That is the box in a box-and-whisker plot.'),
    q('Classes 0–10, 10–20 and 20–30 have frequencies 4, 8 and 10. What is the estimated mean?', c(gm), [c(t.mean(mids)), c(uppers), c(lowers)],
      'Use the class midpoints 5, 15 and 25: (5 × 4 + 15 × 8 + 25 × 10) ÷ 22 = 390 ÷ 22 ≈ 17,7.'),
    q('A frequency table has the classes 0–10, 10–20 and 20–30 with frequencies 4, 8 and 10. Which is the modal class (the class with the highest frequency)?', cls(mod), ['0 to 10', '10 to 20', '22'], 'The modal class is the class with the highest frequency: 10 values lie in 20 to 30.'),
    q('Grouped data: classes 0–10, 10–20 and 20–30 have frequencies 4, 8 and 10 (22 values). Which class contains the median?', cls(mc), ['0 to 10', '20 to 30', '12'],
      'There are 22 values, so the median lies between the 11th and 12th. The cumulative frequencies are 4, 12 and 22, so both values are in 10 to 20.'),
    q('For a data set Q₃ = 17,5. What does this tell you?', '75% of the values are 17,5 or less', ['25% of the values are 17,5 or less', 'The mean is 17,5', '17,5% of the values are in the top quarter'], 'The upper quartile has three quarters (75%) of the data at or below it.'),
    q('Every value in a data set is increased by 5. Which statement is true?', 'The range and the interquartile range stay the same', ['The median and the mean both stay the same', 'The mean stays the same but the range goes up', 'The lower quartile and the upper quartile stay the same'],
      'Every value, the mean, the median and the quartiles all go up by 5. Differences such as the range and the IQR do not change.'),
  ];
})();

// ---------------------------------------------------------------- Measurement
export const measurement: Q[] = (() => {
  const c = (n: number) => dec(n, 1);
  return [
    q('A sphere has a radius of 3 cm. What is its volume (one decimal place)?', `${c(t.sphereVolume(3))} cm³`, [`${c(Math.PI * 27)} cm³`, `${c((4 / 3) * Math.PI * 9)} cm³`, `${c(4 * Math.PI * 27)} cm³`],
      'V = (4/3)πr³ = (4/3) × π × 27 = 36π ≈ 113,1 cm³.'),
    q('A sphere has a radius of 5 cm. What is its surface area (one decimal place)?', `${c(t.sphereArea(5))} cm²`, [`${c(t.sphereVolume(5))} cm²`, `${c(Math.PI * 25)} cm²`, `${c(2 * Math.PI * 25)} cm²`],
      'Surface area = 4πr² = 4 × π × 25 = 100π ≈ 314,2 cm².'),
    q('A cone has a base radius of 3 cm and a height of 4 cm. What is its slant height?', `${t.coneSlant(3, 4)} cm`, ['7 cm', '25 cm', `${c(Math.sqrt(7))} cm`],
      'The slant height is the hypotenuse of the right-angled triangle with sides r and h: s = √(3² + 4²) = √25 = 5 cm.'),
    q('A solid metal cone has a base radius of 3 cm and a height of 4 cm. What is its volume (one decimal place)?', `${c(t.coneVolume(3, 4))} cm³`, [`${c(Math.PI * 9 * 4)} cm³`, `${c(t.coneCurvedArea(3, 4))} cm³`, `${c(4 * Math.PI)} cm³`],
      'V = (1/3)πr²h = (1/3) × π × 9 × 4 = 12π ≈ 37,7 cm³.'),
    q('A paper party hat is a cone with a base radius of 3 cm and a height of 4 cm. What is the area of its curved surface (one decimal place)?', `${c(t.coneCurvedArea(3, 4))} cm²`, [`${c(t.coneVolume(3, 4))} cm²`, `${c(t.coneTotalArea(3, 4))} cm²`, `${c(Math.PI * 36)} cm²`],
      'Curved surface area = πrs, with slant height s = 5: π × 3 × 5 = 15π ≈ 47,1 cm².'),
    q('A cone is painted all over, including its base. Its base radius is 3 cm and its height is 4 cm. What is its total surface area (one decimal place)?', `${c(t.coneTotalArea(3, 4))} cm²`, [`${c(t.coneCurvedArea(3, 4))} cm²`, `${c(Math.PI * 9)} cm²`, `${c(Math.PI * 36)} cm²`],
      'Total = the base circle plus the curved surface: πr² + πrs = 9π + 15π = 24π ≈ 75,4 cm².'),
    q('A square-based pyramid has a base of 6 cm and a perpendicular height of 10 cm. What is its volume?', `${t.pyramidVolume(6, 10)} cm³`, ['360 cm³', '60 cm³', '100 cm³'], 'V = (1/3) × base area × height = (1/3) × 36 × 10 = 120 cm³.'),
    q('A square-based pyramid has a base of 6 cm and each triangular face has a slant height of 5 cm. What is its total surface area?', `${t.pyramidArea(6, 5)} cm²`, ['66 cm²', '60 cm²', '36 cm²'],
      'The base is 6 × 6 = 36. Each of the four triangles is ½ × 6 × 5 = 15, so 60 altogether. Total = 36 + 60 = 96 cm².'),
    q('A cylinder has a radius of 2 cm and a height of 7 cm. What is its volume (one decimal place)?', `${c(t.cylinderVolume(2, 7))} cm³`, [`${c(Math.PI * 2 * 7)} cm³`, `${c(Math.PI * 4 * 7 * 2)} cm³`, `${c(t.cylinderVolume(2, 7) / 3)} cm³`],
      'V = πr²h = π × 4 × 7 = 28π ≈ 88,0 cm³.'),
    q('A closed cylinder has a radius of 2 cm and a height of 7 cm. What is its total surface area (one decimal place)?', `${c(t.cylinderArea(2, 7))} cm²`, [`${c(2 * Math.PI * 2 * 7)} cm²`, `${c(2 * Math.PI * 4)} cm²`, `${c(2 * t.cylinderVolume(2, 7))} cm²`],
      'Total = two circles + the curved surface = 2πr² + 2πrh = 8π + 28π = 36π ≈ 113,1 cm².'),
    q('A fish tank is 50 cm long, 40 cm wide and 30 cm high. How many litres of water fill it?', `${t.cm3ToLitres(50 * 40 * 30)} ℓ`, ['6 ℓ', '600 ℓ', '60 000 ℓ'], 'V = 50 × 40 × 30 = 60 000 cm³. Since 1 000 cm³ = 1 ℓ, that is 60 ℓ.'),
    q('What is the total surface area of a solid hemisphere of radius 2 cm (one decimal place)?', `${c(t.hemisphereArea(2))} cm²`, [`${c(2 * Math.PI * 4)} cm²`, `${c(t.sphereArea(2))} cm²`, `${c(Math.PI * 4)} cm²`],
      'The curved part is half a sphere: 2πr² = 8π. The flat circle is πr² = 4π. Total = 12π ≈ 37,7 cm².'),
    q('A triangular prism has a triangular end of area 12 cm² and is 5 cm long. What is its volume?', `${t.prismVolume(12, 5)} cm³`, ['120 cm³', '30 cm³', '15 cm³'], 'Volume of a prism = area of the end × length = 12 × 5 = 60 cm³.'),
    q('A cylinder with radius 2 cm and height 7 cm has a hemisphere of radius 2 cm fixed on top. What is the total volume (one decimal place)?', `${c(t.cylinderVolume(2, 7) + t.sphereVolume(2) / 2)} cm³`, [`${c(t.cylinderVolume(2, 7) + t.sphereVolume(2))} cm³`, `${c(t.cylinderVolume(2, 7))} cm³`, `${c(t.sphereVolume(2) / 2)} cm³`],
      'Cylinder: π × 4 × 7 = 28π. Hemisphere: ½ × (4/3)π × 8 = 16π/3. Total = 28π + 16π/3 = 100π/3 ≈ 104,7 cm³.'),
  ];
})();

// ---------------------------------------------------------------- Trigonometry in two dimensions and geometry riders
export const trigGeometry: Q[] = (() => {
  const c = (n: number) => dec(n, 1);
  const tan30 = h.tanD(30);
  const two = t.towerHeight(45, 30, 20).h;
  return [
    q('You stand 20 m from the foot of a tower and the angle of elevation of the top is 35°. How high is the tower (one decimal place)?', `${c(h.oppositeFromAdj(20, 35, 3))} m`, [`${c(20 * h.cosD(35))} m`, `${c(20 * h.sinD(35))} m`, `${c(20 / h.tanD(35))} m`],
      'Height is opposite the angle and 20 m is adjacent, so use tan: height = 20 tan 35° = 14,0 m.'),
    q('From the top of a 30 m cliff the angle of depression of a boat is 25°. How far is the boat from the foot of the cliff (one decimal place)?', `${c(30 / h.tanD(25))} m`, [`${c(30 * h.tanD(25))} m`, `${c(30 * h.sinD(25))} m`, `${c(30 / h.sinD(25))} m`],
      'The angle of depression equals the angle of elevation of the top from the boat (alternate angles). tan 25° = 30 ÷ d, so d = 30 ÷ tan 25° = 64,3 m.'),
    q('A 5 m ladder makes an angle of 70° with the ground. How far is its foot from the wall (one decimal place)?', `${c(5 * h.cosD(70))} m`, [`${c(5 * h.sinD(70))} m`, `${c(5 * h.tanD(70))} m`, `${c(5 / h.cosD(70))} m`],
      'The distance along the ground is adjacent to the 70° angle and the ladder is the hypotenuse: 5 cos 70° = 1,7 m.'),
    q('A 10 m ramp rises 2 m. What angle does it make with the ground (one decimal place)?', `${c(h.angleFromSin(2, 10, 3))}°`, [`${c(h.angleFromCos(2, 10, 3))}°`, `${c(h.angleFromTan(2, 10, 3))}°`, `${c(h.angleFromSin(1, 10, 3))}°`],
      'The rise is opposite the angle and the ramp is the hypotenuse: sin θ = 2/10 = 0,2, so θ = sin⁻¹(0,2) = 11,5°.'),
    q('From A the angle of elevation of the top of a tower is 30°. From B, 20 m closer to the tower, it is 45°. How high is the tower (one decimal place)?', `${c(two)} m`, [`${c(20 * tan30)} m`, '20,0 m', `${c(20 / tan30)} m`],
      'Let the distance from B to the tower be x. Then h = x tan 45° = x and h = (x + 20) tan 30°. So x = (x + 20)(0,577…), x = 27,3 and h = 27,3 m.'),
    q('ABCD is a rectangle with AB = 8 cm and diagonal AC = 10 cm. What is angle CAB (one decimal place)?', `${c(h.angleFromCos(8, 10, 3))}°`, [`${c(h.angleFromSin(8, 10, 3))}°`, `${c(h.angleFromTan(10, 8, 3))}°`, `${c(h.angleFromSin(5, 8, 3))}°`],
      'In right-angled triangle ABC the adjacent side AB = 8 and the hypotenuse AC = 10: cos A = 8/10, so A = cos⁻¹(0,8) = 36,9°.'),
    q('An isosceles triangle has two sides of 10 cm and an angle of 40° between them. How long is the perpendicular height from that apex to the base (one decimal place)?', `${c(t.isoscelesHeight(10, 40))} cm`, [`${c(10 * h.sinD(20))} cm`, `${c(10 * h.cosD(40))} cm`, `${c(10 * h.sinD(40))} cm`],
      'The height bisects the 40° angle, giving a right-angled triangle with a 20° angle at the apex. The height is adjacent to 20°: 10 cos 20° = 9,4 cm.'),
    q('A 6 m pole casts a shadow 4 m long. What is the angle of elevation of the sun (one decimal place)?', `${c(h.angleFromTan(6, 4, 3))}°`, [`${c(h.angleFromTan(4, 6, 3))}°`, `${c(h.angleFromSin(4, 6, 3))}°`, `${c(h.angleFromCos(4, 6, 3))}°`],
      'Opposite = 6 (the pole) and adjacent = 4 (the shadow): tan θ = 6/4, so θ = tan⁻¹(1,5) = 56,3°.'),
    q('In triangle ABC, AB = AC and angle B = 65°. How big is angle A?', '50°', ['65°', '115°', '25°'], 'The base angles of an isosceles triangle are equal: C = 65°. Angle A = 180° − 65° − 65° = 50°.'),
    q('Triangle ABC has a right angle at B, with AB = 6 and BC = 8. What is angle BAC (one decimal place)?', `${c(h.angleFromTan(8, 6, 3))}°`, [`${c(h.angleFromTan(6, 8, 3))}°`, `${c(h.angleFromCos(6, 8, 3))}°`, `${c(h.angleFromSin(6, 8, 3))}°`],
      'BC is opposite angle A and AB is adjacent: tan A = 8/6, so A = tan⁻¹(1,333…) = 53,1°.'),
    q('From the top of a 12 m building the angle of depression of a car is 28°. How far is the car from the foot of the building (one decimal place)?', `${c(12 / h.tanD(28))} m`, [`${c(12 * h.tanD(28))} m`, `${c(12 * h.sinD(28))} m`, `${c(12 / h.sinD(28))} m`],
      'tan 28° = 12 ÷ d, so d = 12 ÷ tan 28° = 22,6 m.'),
    q('Which statement about the angles of elevation and depression between two points A (low) and B (high) is true?', 'The angle of elevation of B from A equals the angle of depression of A from B', ['The angle of elevation is always larger than the angle of depression', 'The two angles add up to 90° because they are complementary', 'The two angles add up to 180° because they lie on a line'],
      'The horizontal lines through A and B are parallel, so the two angles are alternate angles and are equal.'),
  ];
})();
