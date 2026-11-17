import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "Which statement describes an element?",
    options: ["Any material that can be separated by filtering or by evaporation", "A pure substance that cannot be broken down into anything simpler", "A mixture of two or more substances that are joined together", "A substance that is always a solid and always shines"],
    answer: "A pure substance that cannot be broken down into anything simpler",
    explanation: "An element is a pure substance that cannot be broken down any further. The Periodic Table sorts all the elements.",
  },
  {
    prompt: "Who arranged the elements by their properties in a table in the 1860s?",
    options: ["Isaac Newton", "Galileo Galilei", "Marie Curie", "Dmitri Mendeleev"],
    answer: "Dmitri Mendeleev",
    explanation: "Dmitri Mendeleev devised the Periodic Table in the 1860s.",
  },
  {
    prompt: "Where on the Periodic Table are the metals found?",
    options: ["On the left-hand side", "On the far right-hand side", "Only in the very middle", "Only in the top row"],
    answer: "On the left-hand side",
    explanation: "Metals are arranged on the left-hand side of the table.",
  },
  {
    prompt: "Which part of the table holds the non-metals?",
    options: ["On the left-hand side", "Only in the bottom row", "On the far right-hand side", "Mixed evenly with metals"],
    answer: "On the far right-hand side",
    explanation: "Non-metals are found on the far right-hand side of the table.",
  },
  {
    prompt: "Where do the semi-metals sit on the Periodic Table?",
    options: ["On the far left, next to the metals only", "On the far right, after the non-metals", "Between the metals and the non-metals", "In a separate table below the main one"],
    answer: "Between the metals and the non-metals",
    explanation: "Semi-metals are found in the region between the metals and the non-metals.",
  },
  {
    prompt: "What is the chemical symbol for sodium?",
    options: ["Na", "S", "So", "K"],
    answer: "Na",
    explanation: "Sodium has the symbol Na. K is potassium and S is sulfur.",
  },
  {
    prompt: "What is the chemical symbol for potassium?",
    options: ["P", "Po", "Pt", "K"],
    answer: "K",
    explanation: "Potassium has the symbol K. P is phosphorus.",
  },
  {
    prompt: "Which element has the symbol Ca?",
    options: ["Carbon", "Calcium", "Chlorine", "Cadmium"],
    answer: "Calcium",
    explanation: "Ca is calcium. Carbon is C and chlorine is Cl.",
  },
  {
    prompt: "Which of these elements is a semi-metal?",
    options: ["Silicon", "Aluminium", "Carbon", "Sodium"],
    answer: "Silicon",
    explanation: "Silicon (and boron) are the semi-metals among the first 20 elements. Aluminium and sodium are metals and carbon is a non-metal.",
  },
  {
    prompt: "At room temperature, one metal is a liquid instead of a solid. Which one is it?",
    options: ["Iron", "Aluminium", "Mercury", "Copper"],
    answer: "Mercury",
    explanation: "Metals are usually solids, but mercury is a liquid at room temperature.",
  },
  {
    prompt: "In the table of the first 20 elements, how many are metals?",
    options: ["9", "7", "11", "2"],
    answer: "7",
    explanation: "The metals are Li, Be, Na, Mg, Al, K and Ca: 7 elements.",
  },
  {
    prompt: "Among the first 20 elements, how many semi-metals are there?",
    options: ["7", "3", "11", "2"],
    answer: "2",
    explanation: "Only boron and silicon are semi-metals in the first 20 elements.",
  },
  {
    prompt: "A metal is described as malleable. What does that mean?",
    options: ["It can be drawn out into a thin wire", "It melts at a very low temperature", "It dissolves quickly in water", "It can be hammered into a flat sheet"],
    answer: "It can be hammered into a flat sheet",
    explanation: "Malleable means it can be hammered into shape. Ductile means it can be drawn into a wire.",
  },
  {
    prompt: "Which property is usually true of metals?",
    options: ["They are gases", "They are shiny", "They are dull and brittle", "They have low boiling points"],
    answer: "They are shiny",
    explanation: "Metals are usually shiny, ductile and malleable solids with high melting and boiling points.",
  },
];

const PeriodicTable = () => (
  <CapsSubjectTopic
    title="Introduction to the Periodic Table"
    subtitle="Elements, symbols, and metals, semi-metals and non-metals"
    learnSteps={learnSteps}
    task="gr7-periodic-table-t2"
    bank={bank}
    apiPath="/api/caps/nst"
  />
);

export default PeriodicTable;
