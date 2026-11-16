import type { Q } from '../../../grade10/mathematics/_shared/bank';
import { q } from './q6';
import * as t from '../../../../components/diagrams/maths/grade6Transform';

const L = 'The letters run across the top and the numbers run down the side.';

// ---------------------------------------------------------------- Term 3: transformations used to describe patterns
export const transformations: Q[] = [
  q('A pattern is made by sliding a hexagon across the page again and again, without turning or flipping it. Which transformation is this?', 'Translation', ['Reflection', 'Rotation', 'Enlargement'], 'Sliding a shape to a new place without turning or flipping it is a translation.'),
  q('A bracelet pattern is made by flipping a triangle over a line, like its image in a mirror. Which transformation is this?', 'Reflection', ['Translation', 'Rotation', 'Reduction'], 'A mirror image over a line is a reflection.'),
  q('Each blade of a windmill pattern is the blade before it turned around the centre point. Which transformation is this?', 'Rotation', ['Reflection', 'Translation', 'Enlargement'], 'Turning a shape around a fixed point is a rotation.'),
  q(`${L} A triangle has a corner at C2. The triangle is translated 3 squares right and 1 square down. Where is that corner now?`, t.corner(t.translate([[2, 1]], 3, 1)[0]), ['F2', 'C5', 'E4'], 'Moving 3 columns right from C takes you to D, E and F. Moving 1 row down makes row 2 into row 3: F3.'),
  q(`${L} A corner of a shape moves from B2 to E5 in a translation. Which move was it?`, `${4 - 1} squares right and ${4 - 1} squares down`, ['3 squares right and 3 squares up', '4 squares right and 3 squares down', '3 squares left and 3 squares down'], 'B to E is 3 columns to the right, and row 2 to row 5 is 3 rows down.'),
  q(`${L} A point at B3 is reflected in a mirror line that runs down the middle of column D. Where is its image?`, t.corner(t.reflectInVertical([[1, 2]], 3)[0]), ['D3', 'B5', 'E3'], 'B is 2 columns to the left of the mirror line in column D, so the image is 2 columns to the right: F. The row stays 3.'),
  q(`${L} A point at C2 is reflected in a mirror line along the edge between row 3 and row 4. Where is its image?`, t.corner(t.reflectInHorizontal([[2, 1]], 2.5)[0]), ['C4', 'C6', 'F2'], 'Row 2 is 1 row above row 3, which touches the mirror line. The image is the same distance below the line, in row 5.'),
  q('How many lines of symmetry does an equilateral triangle have?', '3', ['1', '2', '6'], 'An equilateral triangle can be folded onto itself in 3 ways, one for each corner.'),
  q('How many lines of symmetry does a regular hexagon have?', '6', ['3', '4', '12'], 'A regular hexagon has 6 lines of symmetry: 3 through opposite corners and 3 through the middles of opposite sides.'),
  q('How many lines of symmetry does a rectangle that is not a square have?', '2', ['1', '4', '0'], 'A rectangle that is not a square has 2 lines of symmetry: one through the middles of each pair of opposite sides.'),
  q('The pattern on a cloth looks exactly the same on both sides of a vertical line down the middle. What does this show?', 'The pattern has a line of symmetry', ['The pattern was enlarged by doubling', 'The pattern is a reduction of itself', 'The pattern has been translated'], 'When one half is the mirror image of the other half, the middle line is a line of symmetry.'),
  q('How many quarter turns make a full turn?', '4', ['2', '3', '8'], 'Four quarter turns make one full turn back to where you started: 4 × 90° = 360°.'),
];

// ---------------------------------------------------------------- Term 4: enlargements and reductions
const tri = [3, 4, 5];
export const enlargements: Q[] = [
  q('A triangle has sides of 3 cm, 4 cm and 5 cm. All the sides are doubled to make an enlargement. How long is the side that was 5 cm?', `${t.scaleLengths(tri, 2, 1)[2]} cm`, ['7 cm', '2,5 cm', '25 cm'], 'Doubling means multiplying by 2: 5 × 2 = 10 cm.'),
  q('A triangle has sides of 3 cm, 4 cm and 5 cm. All the sides are doubled. What is the perimeter of the enlarged triangle?', `${t.perimeter(t.scaleLengths(tri, 2, 1))} cm`, ['12 cm', '17 cm', '48 cm'], 'The new sides are 6, 8 and 10 cm: 6 + 8 + 10 = 24 cm.'),
  q('A triangle has sides of 2 cm, 3 cm and 4 cm. All the sides are made 3 times as long. What are the new sides?', t.scaleLengths([2, 3, 4], 3, 1).map((n) => `${n} cm`).join(', '), ['5 cm, 6 cm, 7 cm', '2 cm, 3 cm, 12 cm', '6 cm, 3 cm, 4 cm'], 'Multiply every side by 3: 2 × 3 = 6, 3 × 3 = 9 and 4 × 3 = 12.'),
  q('A triangle has sides of 12 cm, 16 cm and 20 cm. A reduction halves all the sides. How long is the side that was 16 cm?', `${t.scaleLengths([12, 16, 20], 1, 2)[1]} cm`, ['32 cm', '4 cm', '14 cm'], 'Halving means dividing by 2: 16 ÷ 2 = 8 cm.'),
  q('What stays the same when a triangle is enlarged by multiplying all its sides by 2?', 'The size of its angles', ['The length of its sides', 'Its perimeter', 'Its area'], 'The shape stays the same, so the angles are the same. The sides, the perimeter and the area all change.'),
  q('What changes when a shape is reduced by halving all its sides?', 'Its size', ['Its shape', 'Its angles', 'The order of its sides'], 'A reduction makes a smaller copy of the same shape. The size changes, but the shape and the angles do not.'),
  q('A rectangle is 4 cm long and 3 cm wide. Both sides are doubled. What are the sides of the enlarged rectangle?', `${t.scaleLengths([4, 3], 2, 1)[0]} cm by ${t.scaleLengths([4, 3], 2, 1)[1]} cm`, ['6 cm by 5 cm', '8 cm by 3 cm', '4 cm by 6 cm'], 'Doubling both sides gives 4 × 2 = 8 cm and 3 × 2 = 6 cm.'),
  q('A rectangle is 3 cm by 5 cm. Both sides are doubled to 6 cm by 10 cm. What is the area of the enlarged rectangle?', `${t.rectArea(6, 10)} cm²`, ['30 cm²', '15 cm²', '16 cm²'], 'Area = length × breadth = 6 × 10 = 60 cm².'),
  q('The area of a rectangle is 15 cm². Both of its sides are doubled. How many times bigger is the area of the new rectangle?', `${t.areaFactor(2)} times`, ['2 times', '3 times', '8 times'], 'The old area is 3 × 5 = 15 and the new area is 6 × 10 = 60. 60 ÷ 15 = 4, so the area is 4 times bigger.'),
  q('A rectangle 12 cm by 8 cm is reduced by halving all its sides. What is the perimeter of the smaller rectangle?', `${t.perimeter([6, 4, 6, 4])} cm`, ['40 cm', '10 cm', '24 cm'], 'The new sides are 6 cm and 4 cm: 6 + 4 + 6 + 4 = 20 cm.'),
  q('Halve every side of a 12 cm by 8 cm rectangle. What area does the smaller rectangle have?', `${t.rectArea(6, 4)} cm²`, ['48 cm²', '96 cm²', '12 cm²'], 'The new sides are 6 cm and 4 cm: 6 × 4 = 24 cm².'),
  q('A rectangle is 4 cm by 3 cm. Only the length is doubled to 8 cm and the breadth stays 3 cm. Is the new rectangle an enlargement of the first one?', 'No, because its shape has changed', ['Yes, because the length is bigger', 'Yes, because the area is bigger', 'No, because its perimeter is smaller'], 'In an enlargement every side is multiplied by the same number. Here only one pair of sides changes, so the shape changes too.'),
];
