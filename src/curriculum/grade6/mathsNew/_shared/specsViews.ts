import type { Q } from '../../../grade10/mathematics/_shared/bank';
import { q } from './q6';
import * as v from '../../../../components/diagrams/maths/grade6Views';

const row: v.Heights = [[3, 1, 2]];
const two: v.Heights = [[2, 1], [1, 3]];

// ---------------------------------------------------------------- Term 3: viewing objects
export const viewing: Q[] = [
  q('Three towers of cubes stand in a row, one cube deep. From the front they are 3, 1 and 2 cubes high from left to right. What does the front viewer see from left to right?', v.listText(v.frontView(row)), ['2, 1, 3', '1, 2, 3', '3, 2, 1'], 'From the front you see the towers in the order they stand, from left to right: 3, 1, 2.'),
  q('You stand behind a one-cube-deep row of towers that are 3, 1 and 2 cubes high when seen from the front. What do you see from left to right?', v.listText(v.backView(row)), ['3, 1, 2', '1, 3, 2', '1, 2, 3'], 'The viewer behind faces the other way, so their left is the front viewer\'s right. The towers appear in the opposite order: 2, 1, 3.'),
  q('A viewer on the right-hand side looks along a row of towers, one cube deep, with heights 3, 1 and 2 as seen from the front. How many cubes high is the view?', String(v.rightView(row)[0]), ['1', '2', '6'], 'From the side you see only one tower, because the towers are one behind the other in a line of sight. The tallest tower hides the others: 3 cubes high.'),
  q('How many cubes make up a row of towers that are 3, 1 and 2 cubes high?', String(v.totalCubes(row)), ['3', '5', '9'], 'Add the towers: 3 + 1 + 2 = 6 cubes.'),
  q('A structure has a front row of towers 2 and 1 cubes high and a back row of towers 1 and 3 cubes high, left to right from the front. What does the front viewer see?', v.listText(v.frontView(two)), ['2, 1', '1, 3', '3, 2'], 'In each column the front viewer sees the taller tower: the left column has 2 and 1, so 2; the right column has 1 and 3, so 3.'),
  q('Two rows of cubes: the front row is 2 and 1 high and the back row is 1 and 3 high, left to right from the front. A viewer on the left looks along each row. What do they see from left to right?', v.listText(v.leftView(two)), ['2, 3', '3, 3', '2, 2'], 'From the left you look along each row. The back row (tallest tower 3) is on your left and the front row (tallest tower 2) is on your right: 3, 2.'),
  q('How many cubes are in two rows where the front towers are 2 and 1 high and the back towers are 1 and 3 high?', String(v.totalCubes(two)), ['4', '6', '8'], 'Add all the towers: 2 + 1 + 1 + 3 = 7 cubes.'),
  q('A bird flies over a structure of four towers of cubes that stand on a 2 by 2 base. How many squares of the base does it see covered?', String(v.footprint(two)), ['7', '3', '2'], 'There are 4 towers, and each stands on one square, so the top view has 4 squares.'),
  q('You see towers 2, 1 and 3 cubes high from left to right. Seen from the front the same row is 3, 1 and 2. Where are you standing?', 'Behind the row', ['In front of the row', 'Above the row', 'At the side of the row'], 'The front view is 3, 1, 2. The view 2, 1, 3 is the same row seen the other way round, from behind.'),
  q('A tin of beans stands upright on a table. What shape does a viewer see when looking straight down on it?', 'A circle', ['A rectangle', 'A triangle', 'A square'], 'The top of the tin is a circle.'),
  q('A party hat is a cone standing on its flat base. What shape does a viewer see from the front?', 'A triangle', ['A circle', 'A rectangle', 'A square'], 'A cone gets narrower to a point at the top, so from the front it looks like a triangle.'),
  q('A dice is a cube. What does it look like from the front, from the side and from the top?', 'A square from every side', ['A square from the top only', 'A rectangle from the front', 'A circle from the top'], 'Every face of a cube is a square, so a cube looks like a square from the front, from the side and from above.'),
];
