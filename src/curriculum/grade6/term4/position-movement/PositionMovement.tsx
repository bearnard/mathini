import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { GridMap } from '../../../../components/diagrams/maths/Grade6Maths';
import * as p from '../../../../components/diagrams/maths/grade6Probability';

// Every number in the slides below comes from the tested helpers in grade6Probability.ts (grade6Probability.test.ts, g6MathsNewBank.test.ts).
// CAPS Grade 6: locate positions on a grid with alpha-numeric references and give directions to move between positions on a grid or map.
const places = [{ cell: 'B2', label: 'S' }, { cell: 'E2', label: 'L' }, { cell: 'E5', label: 'P', color: '#4ade80' }, { cell: 'C4', label: 'H', color: '#fbbf24' }];
const toLibrary = p.directions('B2', 'E2');
const toPark = p.directions('E2', 'E5');
const school = 'B2';
const route = [school, 'E2', 'E5'];
const direct = p.directions('B2', 'E5');
const north = p.compass('up');
const c = { a: p.cellName(2, 6), b: p.follow('B3', [['right', 2], ['down', 3]]), c: p.dirsText(p.directions('A1', 'D1')), d: p.stepsIn(p.directions('A1', 'D4')) };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Grid references',
    content: slide(
      <>
        <Rule>On a map with a grid, the columns have letters across the top and the rows have numbers down the side. A grid reference gives the letter first and then the number, for example D4: column D, row 4.</Rule>
        <GridMap cols={6} rows={6} marks={places} />
        <Worked
          title="Reading the map"
          steps={[
            <>The school (S) is in column B and row 2, so its grid reference is <strong>{school}</strong>.</>,
            <>The library (L) is in column E and row 2: <strong>E2</strong>. The park (P) is at <strong>E5</strong>, and the hall (H) is at <strong>C4</strong>.</>,
            <>To find D4, go along the top to D, then go down to row 4: <strong>{p.cellName(3, 4)}</strong>.</>,
            <>Always write the letter before the number: E2 is not the same square as 2E.</>,
          ]}
        />
        <Mistake>Giving the number before the letter, or reading the row from the bottom. Rows are counted from the top, down the side.</Mistake>
      </>,
    ),
  },
  {
    title: 'Giving directions',
    content: slide(
      <>
        <Rule>To tell someone how to get from one square to another, say which way to go and how many squares. Right and left change the letter. Up and down change the number: going down the page makes the row number bigger.</Rule>
        <GridMap cols={6} rows={6} marks={places} route={route} />
        <Worked
          title="From the school to the park"
          steps={[
            <>School (B2) to library (E2): {p.dirsText(toLibrary)}. From B to E you move into C, D and E, which is 3 squares.</>,
            <>Library (E2) to park (E5): {p.dirsText(toPark)}. The row goes from 2 to 5, so 5 − 2 = 3.</>,
            <>All together: {p.dirsText(direct)}, which is {p.stepsIn(direct)} squares.</>,
            <>Check by following the directions from B2: you arrive at <strong>{p.follow('B2', direct)}</strong>.</>,
          ]}
        />
        <Mistake>Counting the square you start on as one of the steps. Count the squares you move into, so B to E is 3 steps, not 4.</Mistake>
      </>,
    ),
  },
  {
    title: 'Compass directions',
    content: slide(
      <>
        <Rule>On many maps north is at the top. Then south is down, east is right and west is left. You can give directions with the compass words: 3 squares east, then 2 squares south.</Rule>
        <GridMap cols={6} rows={6} marks={[{ cell: 'D2', label: 'S' }, { cell: 'A4', label: 'F', color: '#fbbf24' }]} route={['D2', 'A2', 'A4']} />
        <Worked
          title="Using north, south, east and west"
          steps={[
            <>Up the map is <strong>{north}</strong>, down is <strong>{p.compass('down')}</strong>, right is <strong>{p.compass('right')}</strong> and left is <strong>{p.compass('left')}</strong>.</>,
            <>From the school (D2): 3 squares {p.compass('left')} gives {p.move('D2', 'left', 3)}.</>,
            <>Then 2 squares {p.compass('down')} gives <strong>{p.follow('D2', [['left', 3], ['down', 2]])}</strong>, where the farm (F) is.</>,
            <>To go back, turn round: 2 squares {north}, then 3 squares {p.compass('right')}.</>,
          ]}
        />
        <Mistake>Mixing up east and west. Remember that east is on the right of the map when north is at the top.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>What is the grid reference of the square in column C and row 6?</>,
            <>Start at B3. Move 2 squares right and then 3 squares down. Where are you?</>,
            <>Give the directions from A1 to D1.</>,
            <>How many squares do you walk from A1 to D4, going across and then down?</>,
          ]}
          answers={[
            <><strong>{c.a}</strong>: the letter first, then the row.</>,
            <>B3 → D3 → <strong>{c.b}</strong>.</>,
            <><strong>{c.c}</strong>.</>,
            <>3 squares right and 3 squares down is 3 + 3 = <strong>{c.d}</strong> squares.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
export const bank: CapsItem[] = [
  {
    prompt: "The letters run across the top and the numbers run down the side. What is the grid reference of the square in column D and row 4?",
    options: ["4D", "D4", "D3", "E4"],
    answer: "D4",
    explanation: "Give the letter of the column first, then the number of the row: D4.",
  },
  {
    prompt: "The letters run across the top and the numbers run down the side. A park is in column B and row 5. What is its grid reference?",
    options: ["B5", "5B", "B4", "C5"],
    answer: "B5",
    explanation: "Column B, row 5 is written B5.",
  },
  {
    prompt: "Which letter shows the column in the grid reference E7?",
    options: ["7", "E7", "A", "E"],
    answer: "E",
    explanation: "The letter is the column, and the number is the row. E7 is column E, row 7.",
  },
  {
    prompt: "The letters run across the top and the numbers run down the side. Start at B2 and move 3 squares right. Which square do you reach?",
    options: ["B5", "E5", "E2", "D2"],
    answer: "E2",
    explanation: "Moving right changes the letter: B, C, D, E. You stay in row 2, so you reach E2.",
  },
  {
    prompt: "The letters run across the top and the numbers run down the side. Start at E6 and move 2 squares up the page. Which square do you reach?",
    options: ["E8", "E4", "C6", "G6"],
    answer: "E4",
    explanation: "Moving up makes the row number smaller: 6, 5, 4. You stay in column E, so you reach E4.",
  },
  {
    prompt: "The letters run across the top and the numbers run down the side. What are the directions from C3 to C7?",
    options: ["4 squares down", "4 squares up", "3 squares down", "7 squares down"],
    answer: "4 squares down",
    explanation: "The column stays C. The row goes from 3 to 7, which is 4 rows further down the page.",
  },
  {
    prompt: "The letters run across the top and the numbers run down the side. What are the directions from B2 to E4?",
    options: ["2 squares right, then 3 squares down", "3 squares left, then 2 squares down", "3 squares right, then 2 squares up", "3 squares right, then 2 squares down"],
    answer: "3 squares right, then 2 squares down",
    explanation: "B to E is 3 columns to the right, and row 2 to row 4 is 2 rows down.",
  },
  {
    prompt: "The letters run across the top and the numbers run down the side. Start at A1. Move 4 squares right, then 3 squares down, then 2 squares left. Which square do you reach?",
    options: ["E4", "C6", "C4", "C3"],
    answer: "C4",
    explanation: "A1 → E1 (4 right) → E4 (3 down) → C4 (2 left).",
  },
  {
    prompt: "On a map, north is at the top. Moving up the map is going in which direction?",
    options: ["south", "north", "east", "west"],
    answer: "north",
    explanation: "North is at the top of the map, so moving up is moving north.",
  },
  {
    prompt: "The letters run across the top and the numbers run down the side. The school is at D2. Walk 3 squares west and then 2 squares south (west is left and south is down). Where do you end up?",
    options: ["A4", "G4", "D4", "A1"],
    answer: "A4",
    explanation: "D2 → A2 (3 left) → A4 (2 down).",
  },
  {
    prompt: "How many squares must you move straight down the column from F1 to F5?",
    options: ["5", "6", "1", "4"],
    answer: "4",
    explanation: "The rows go from 1 to 5, so you move 5 − 1 = 4 squares.",
  },
  {
    prompt: "The letters run across the top and the numbers run down the side. How many squares do you walk altogether if you go from B2 to E4 across and then down?",
    options: ["3", "6", "5", "2"],
    answer: "5",
    explanation: "3 squares right and 2 squares down is 3 + 2 = 5 squares.",
  },
  {
    prompt: "The letters run across the top and the numbers run down the side. Which square is directly to the right of C5?",
    options: ["B5", "D5", "C6", "C4"],
    answer: "D5",
    explanation: "Moving one square right changes the letter from C to D, and the row stays 5.",
  },
  {
    prompt: "The letters run across the top and the numbers run down the side. What are the directions from the shop at B3 to the bank at E3?",
    options: ["3 squares east", "3 squares west", "2 squares east", "3 squares north"],
    answer: "3 squares east",
    explanation: "The shop and the bank are in the same row, 3 columns apart. Going right is going east.",
  },
];
// BANK:END

const PositionMovement = () => (
  <CapsSubjectTopic
    title="Position and Movement"
    subtitle="Grid references and directions on a grid or map"
    learnSteps={learnSteps}
    task="gr6-position-movement-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PositionMovement;
