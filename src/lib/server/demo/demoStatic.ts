// The fallback for the landing page's "Try it now" demo (GET /api/demo) when D1 cannot be read: three plain, unambiguous questions for every grade,
// from three different subjects. They are DEMO questions only, written for this file (not copied from a bank, so no lesson-overlap issue), checked by
// demoStatic.test.ts (the answer is one of the options, no duplicate options, three subjects per grade). Maths uses $...$ so MathText is exercised.
export interface DemoQuestion {
  id: string;
  subject: string;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
}

type Raw = [subject: string, prompt: string, options: string[], answer: string, explanation: string];

const RAW: Record<number, Raw[]> = {
  5: [
    ['Mathematics', 'What is $6 \\times 7$?', ['36', '42', '48', '54'], '42', '6 groups of 7 make 42. Count in sevens: 7, 14, 21, 28, 35, 42.'],
    ['Geography', 'Which season comes after summer in South Africa?', ['Winter', 'Autumn', 'Spring', 'Summer'], 'Autumn', 'The seasons go summer, autumn, winter, spring. In South Africa autumn runs from March to May.'],
    ['Natural Sciences', 'Which of these is a living thing?', ['A rock', 'A sunflower', 'A bicycle', 'A cup of water'], 'A sunflower', 'Living things grow, need food and water, and reproduce. A sunflower does all three.'],
  ],
  6: [
    ['Mathematics', 'What is $\\frac{1}{2} + \\frac{1}{4}$?', ['$\\frac{2}{6}$', '$\\frac{3}{4}$', '$\\frac{1}{6}$', '$\\frac{2}{4}$'], '$\\frac{3}{4}$', 'Write one half as two quarters: $\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$.'],
    ['Natural Sciences', 'What does a bulb need to light up in a simple circuit?', ['A gap in the wires', 'A complete loop with a cell', 'Only one wire', 'No energy source'], 'A complete loop with a cell', 'Current only flows round a closed loop. The cell pushes the current and the bulb lights.'],
    ['Geography', 'In which direction does the Sun rise?', ['North', 'South', 'East', 'West'], 'East', 'The Sun appears to rise in the east and set in the west because Earth turns towards the east.'],
  ],
  7: [
    ['Mathematics', 'What is $-3 + 5$?', ['$-8$', '$-2$', '$2$', '$8$'], '$2$', 'Start at $-3$ and move 5 steps to the right on the number line. You land on $2$.'],
    ['Natural Sciences', 'Which gas makes up most of Earth\'s atmosphere?', ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'], 'Nitrogen', 'About 78% of the air is nitrogen. Oxygen is about 21%.'],
    ['History', 'Which West African empire became famous for its gold trade and the city of Timbuktu?', ['Mali', 'Zulu', 'Rome', 'Inca'], 'Mali', 'The Mali Empire grew rich from gold and salt trade, and Timbuktu became a centre of learning.'],
  ],
  8: [
    ['Mathematics', 'Solve $2x + 3 = 11$.', ['$x = 3$', '$x = 4$', '$x = 7$', '$x = 14$'], '$x = 4$', 'Take 3 from both sides: $2x = 8$. Then divide both sides by 2: $x = 4$.'],
    ['Natural Sciences', 'What is the chemical formula of water?', ['$CO_2$', '$H_2O$', '$O_2$', '$NaCl$'], '$H_2O$', 'Each water particle has two hydrogen atoms and one oxygen atom, so its formula is $H_2O$.'],
    ['Economic Management Sciences', 'Which economic sector includes farming and mining?', ['Primary sector', 'Secondary sector', 'Tertiary sector', 'Quaternary sector'], 'Primary sector', 'The primary sector takes raw materials from the earth: farming, fishing, forestry and mining.'],
  ],
  9: [
    ['Mathematics', 'What is $\\sqrt{49}$?', ['$6$', '$7$', '$8$', '$9$'], '$7$', 'The square root of 49 is the number that multiplied by itself gives 49: $7 \\times 7 = 49$.'],
    ['Technology', 'Which simple machine is a ramp?', ['Lever', 'Pulley', 'Inclined plane', 'Wheel and axle'], 'Inclined plane', 'A ramp is a sloping surface. It lets you raise a load using less force over a longer distance.'],
    ['Geography', 'What does a climate graph usually show?', ['Population and jobs', 'Average temperature and rainfall by month', 'Rivers and mountains', 'Roads and towns'], 'Average temperature and rainfall by month', 'A climate graph combines monthly temperature (a line) and rainfall (bars) for one place.'],
  ],
  10: [
    ['Mathematical Literacy', 'A shirt costs R200 and is sold with a 15% discount. What is the sale price?', ['R30', 'R170', 'R185', 'R215'], 'R170', '15% of R200 is R30. R200 - R30 = R170.'],
    ['Life Sciences', 'In which part of a plant cell does photosynthesis happen?', ['Nucleus', 'Cell wall', 'Chloroplast', 'Vacuole'], 'Chloroplast', 'Chloroplasts contain chlorophyll, which captures light energy to make glucose.'],
    ['Accounting', 'Which statement is the accounting equation?', ['Assets = Equity + Liabilities', 'Assets = Income - Expenses', 'Equity = Assets + Liabilities', 'Liabilities = Equity + Assets'], 'Assets = Equity + Liabilities', 'What a business owns (assets) is funded by its owner (equity) or by others (liabilities).'],
  ],
  11: [
    ['Mathematics', 'Simplify $\\frac{x^2 - 9}{x - 3}$ for $x \\neq 3$.', ['$x - 3$', '$x + 3$', '$x^2 - 3$', '$9$'], '$x + 3$', 'Factorise the top: $x^2 - 9 = (x - 3)(x + 3)$. Cancel $(x - 3)$ to leave $x + 3$.'],
    ['Economics', 'If demand rises and supply stays the same, what happens to the equilibrium price?', ['It falls', 'It stays the same', 'It rises', 'It disappears'], 'It rises', 'More buyers chasing the same amount of goods pushes the price up.'],
    ['Information Technology', 'What does SQL stand for?', ['Simple Question List', 'Structured Query Language', 'System Quality Logic', 'Standard Queue Link'], 'Structured Query Language', 'SQL is the language used to ask a database for data and to change it.'],
  ],
  12: [
    ['Mathematics', 'What is $\\log_2 8$?', ['$2$', '$3$', '$4$', '$16$'], '$3$', '$\\log_2 8$ asks: 2 to what power gives 8? Since $2^3 = 8$, the answer is $3$.'],
    ['Life Sciences', 'Which molecule carries the genetic code in a cell?', ['DNA', 'Glucose', 'Starch', 'Water'], 'DNA', 'DNA is a long molecule whose sequence of bases stores the instructions for making proteins.'],
    ['Life Orientation', 'Which document is the supreme law of South Africa?', ['The Constitution', 'The school rules', 'A municipal by-law', 'The national budget'], 'The Constitution', 'All other laws must follow the Constitution, which includes the Bill of Rights.'],
  ],
};

export const DEMO_GRADES = [5, 6, 7, 8, 9, 10, 11, 12] as const;

export const STATIC_DEMO: Record<number, DemoQuestion[]> = Object.fromEntries(
  Object.entries(RAW).map(([g, rows]) => [Number(g), rows.map(([subject, prompt, options, answer, explanation], i) => ({ id: `static-${g}-${i + 1}`, subject, prompt, options, answer, explanation }))]),
);
