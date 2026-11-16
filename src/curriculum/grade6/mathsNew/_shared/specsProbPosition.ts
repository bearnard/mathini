import type { Q } from '../../../grade10/mathematics/_shared/bank';
import { q } from './q6';
import * as p from '../../../../components/diagrams/maths/grade6Probability';

const die = [7, 9, 5, 8, 11, 10]; // frequencies of 1 to 6 in 50 rolls
const sections = ['red', 'blue', 'red', 'green', 'blue', 'red'];

// ---------------------------------------------------------------- Term 4: probability experiments
export const probability: Q[] = [
  q('What are the possible outcomes when you toss a coin?', 'Heads or tails', ['1, 2, 3, 4, 5 or 6', 'Heads only', 'Heads, tails or a draw'], 'A coin lands with one of two faces up: heads or tails.'),
  q('How many possible outcomes are there when you roll a die?', String(p.DIE.length), ['5', '12', '36'], 'A die has the numbers 1, 2, 3, 4, 5 and 6, so there are 6 possible outcomes.'),
  q('A spinner has 6 equal sections coloured red, blue, red, green, blue and red. How many different outcomes can it show?', String(p.spinnerOutcomes(sections).length), ['6', '2', '4'], 'The different colours are red, blue and green, so there are 3 different outcomes.'),
  q('A spinner has 8 equal sections numbered 1 to 8. How many possible outcomes does it have?', '8', ['1', '16', '4'], 'Each numbered section is a different outcome: 1, 2, 3, 4, 5, 6, 7 and 8.'),
  q('In a tally table, a row has 2 groups of five and 3 single strokes. How many is that?', String(p.tallyGroups(13).fives * 5 + p.tallyGroups(13).rest), ['10', '23', '5'], 'Each group of five counts 5: 2 × 5 = 10. Add the 3 single strokes: 13.'),
  q('A coin is tossed 20 times. It lands heads 12 times. How many times does it land tails?', String(20 - 12), ['12', '32', '10'], 'The heads and tails add up to the 20 tosses, so tails = 20 − 12 = 8.'),
  q('A coin is tossed 30 times and lands heads 18 times. How many more heads than tails are there?', String(p.moreThan(18, 30 - 18)), ['12', '18', '3'], 'Tails = 30 − 18 = 12. Heads − tails = 18 − 12 = 6.'),
  q('Rolling a die 50 times gave these frequencies for the numbers 1 to 6: 7, 9, 5, 8, 11 and 10. Which number has the biggest frequency?', String(p.mostOften(die) + 1), ['11', '6', '1'], 'The biggest frequency is 11, and it belongs to the number 5.'),
  q('In an experiment a die is rolled 50 times and the numbers 1 to 6 come up 7, 9, 5, 8, 11 and 10 times. Which number came up the fewest times?', String(p.leastOften(die) + 1), ['5', '1', '2'], 'The smallest frequency is 5, and it belongs to the number 3.'),
  q('A die is rolled 50 times. The numbers 1, 2, 4, 5 and 6 came up 7, 9, 8, 11 and 10 times. How many times did 3 come up?', String(50 - (7 + 9 + 8 + 11 + 10)), ['3', '45', '15'], 'The frequencies must add up to 50. 7 + 9 + 8 + 11 + 10 = 45, and 50 − 45 = 5.'),
  q('A spinner is spun 40 times. It lands on red 15 times, blue 12 times and yellow 6 times, and the rest is green. How many times is it green?', String(40 - (15 + 12 + 6)), ['33', '13', '27'], 'Red, blue and yellow add up to 15 + 12 + 6 = 33. Green is the rest: 40 − 33 = 7.'),
  q('A coin experiment has 17 heads and 10 tails. How many times was the coin tossed?', String(17 + 10), ['7', '170', '37'], 'The total number of trials is all the outcomes added together: 17 + 10 = 27.'),
  q('Three groups toss a coin and write down how many tosses they did: 20, 20 and 10. They put their results together. How many tosses are there altogether?', String(20 + 20 + 10), ['40', '30', '500'], 'Collating means adding the results: 20 + 20 + 10 = 50 tosses.'),
  q('A die is rolled 20 times and the number 4 comes up 6 times. How many times does it not come up as a 4?', String(20 - 6), ['6', '26', '4'], 'The other outcomes make up the rest of the 20 rolls: 20 − 6 = 14.'),
];

// ---------------------------------------------------------------- Term 4: position and movement
const L = 'The letters run across the top and the numbers run down the side.';
export const position: Q[] = [
  q(`${L} What is the grid reference of the square in column D and row 4?`, p.cellName(3, 4), ['4D', 'D3', 'E4'], 'Give the letter of the column first, then the number of the row: D4.'),
  q(`${L} A park is in column B and row 5. What is its grid reference?`, p.cellName(1, 5), ['5B', 'B4', 'C5'], 'Column B, row 5 is written B5.'),
  q('Which letter shows the column in the grid reference E7?', 'E', ['7', 'E7', 'A'], 'The letter is the column, and the number is the row. E7 is column E, row 7.'),
  q(`${L} Start at B2 and move 3 squares right. Which square do you reach?`, p.move('B2', 'right', 3), ['B5', 'E5', 'D2'], 'Moving right changes the letter: B, C, D, E. You stay in row 2, so you reach E2.'),
  q(`${L} Start at E6 and move 2 squares up the page. Which square do you reach?`, p.move('E6', 'up', 2), ['E8', 'C6', 'G6'], 'Moving up makes the row number smaller: 6, 5, 4. You stay in column E, so you reach E4.'),
  q(`${L} What are the directions from C3 to C7?`, p.dirsText(p.directions('C3', 'C7')), ['4 squares up', '3 squares down', '7 squares down'], 'The column stays C. The row goes from 3 to 7, which is 4 rows further down the page.'),
  q(`${L} What are the directions from B2 to E4?`, p.dirsText(p.directions('B2', 'E4')), ['2 squares right, then 3 squares down', '3 squares left, then 2 squares down', '3 squares right, then 2 squares up'], 'B to E is 3 columns to the right, and row 2 to row 4 is 2 rows down.'),
  q(`${L} Start at A1. Move 4 squares right, then 3 squares down, then 2 squares left. Which square do you reach?`, p.follow('A1', [['right', 4], ['down', 3], ['left', 2]]), ['E4', 'C6', 'C3'], 'A1 → E1 (4 right) → E4 (3 down) → C4 (2 left).'),
  q('On a map, north is at the top. Moving up the map is going in which direction?', p.compass('up'), ['south', 'east', 'west'], 'North is at the top of the map, so moving up is moving north.'),
  q(`${L} The school is at D2. Walk 3 squares west and then 2 squares south (west is left and south is down). Where do you end up?`, p.follow('D2', [['left', 3], ['down', 2]]), ['G4', 'D4', 'A1'], 'D2 → A2 (3 left) → A4 (2 down).'),
  q('How many squares must you move straight down the column from F1 to F5?', String(p.stepsIn(p.directions('F1', 'F5'))), ['5', '6', '1'], 'The rows go from 1 to 5, so you move 5 − 1 = 4 squares.'),
  q(`${L} How many squares do you walk altogether if you go from B2 to E4 across and then down?`, String(p.stepsIn(p.directions('B2', 'E4'))), ['3', '6', '2'], '3 squares right and 2 squares down is 3 + 2 = 5 squares.'),
  q(`${L} Which square is directly to the right of C5?`, p.move('C5', 'right', 1), ['B5', 'C6', 'C4'], 'Moving one square right changes the letter from C to D, and the row stays 5.'),
  q(`${L} What are the directions from the shop at B3 to the bank at E3?`, `${p.stepsIn(p.directions('B3', 'E3'))} squares ${p.compass('right')}`, ['3 squares west', '2 squares east', '3 squares north'], 'The shop and the bank are in the same row, 3 columns apart. Going right is going east.'),
];
