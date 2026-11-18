import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { NetPicture } from '../../../../../components/diagrams/tech8/Tech8b';
import { PACKAGING_RULE, RECYCLE_PAPER_STEPS, boxSurfaceArea, netFaces, netSheet, packagingFor } from '../../../../../components/diagrams/tech8/tech8bHelpers';

// Every statement and number comes from tech8bHelpers.ts (tested in tech8bHelpers.test.ts and g8TechT2.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const big = (x: number) => String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const sheet = netSheet(100, 50, 200);

export const learnSteps: LearnStep[] = [
  {
    title: 'The positive impact of technology',
    content: slide(
      <>
        <Rule>Technology has a positive impact when it solves problems. In modern times many natural materials have been replaced by new or improved materials. Some of the new materials are environmentally friendly because they are biodegradable, which means that micro-organisms can break them down.</Rule>
        <FactCards
          cards={[
            { title: 'New materials', line1: 'new or improved materials', line2: 'replace natural materials' },
            { title: 'Biodegradable', line1: 'some new materials are', line2: 'broken down by micro-organisms' },
            { title: 'Recycling', line1: 'waste paper and cardboard', line2: 'make new packaging' },
          ]}
          aria="The positive impact of technology. New or improved materials replace natural materials. Some new materials are biodegradable, which means that micro-organisms can break them down. Recycling waste paper and cardboard makes new packaging."
        />
        <Worked
          title="Recycle waste paper and cardboard"
          steps={[
            `${RECYCLE_PAPER_STEPS[0][0].toUpperCase() + RECYCLE_PAPER_STEPS[0].slice(1)}, then ${RECYCLE_PAPER_STEPS[1]}.`,
            `Then ${RECYCLE_PAPER_STEPS[2]}, and ${RECYCLE_PAPER_STEPS[3]}.`,
            `Finally ${RECYCLE_PAPER_STEPS[4]}: waste becomes a useful product for the packaging industry.`,
          ]}
        />
        <Mistake>Thinking that all new materials are bad for the environment. Some, such as biodegradable plastics, are designed to reduce the impact.</Mistake>
      </>,
    ),
  },
  {
    title: 'Negative impact and plastic bags',
    content: slide(
      <>
        <Rule>Technological products can also have a negative impact. A case study is the plastic shopping bag: bags that litter the environment can harm animals and take a long time to break down. One solution is thicker, biodegradable bags that shoppers must buy, so people reuse them. We evaluate a solution for how well it works, and we write about it objectively, fairly and accurately.</Rule>
        <FactCards
          cards={[
            { title: 'Problem', line1: 'plastic bags litter the', line2: 'environment and harm animals' },
            { title: 'Solution', line1: 'thicker biodegradable bags', line2: 'that shoppers must buy' },
            { title: 'Evaluate', line1: 'is it effective? is it fair,', line2: 'accurate and objective?' },
          ]}
          aria="Plastic bags as a case study. The problem: plastic bags litter the environment and harm animals. A solution: thicker biodegradable bags that shoppers must buy. Evaluate: is it effective, and is the evaluation fair, accurate and objective?"
        />
        <Worked
          title="Evaluate the bag charge"
          steps={[
            'Advantage: shoppers reuse the thicker bags, so fewer bags are thrown away.',
            'Disadvantage: shoppers must pay, and biodegradable bags still need the right conditions to break down.',
            'A fair evaluation lists both advantages and disadvantages and gives evidence.',
          ]}
        />
        <Mistake>Evaluating a solution with only opinions. Use facts and give both advantages and disadvantages.</Mistake>
      </>,
    ),
  },
  {
    title: 'Packaging and the net of a box',
    content: slide(
      <>
        <Rule>Packaging protects, holds and sells a product. {PACKAGING_RULE[0].toUpperCase() + PACKAGING_RULE.slice(1)}. A development (net) is the flat shape that folds up into the container. The net of an opened box has {netFaces} faces, and the area of card needed is the surface area of the box.</Rule>
        <NetPicture l={100} w={50} h={200} />
        <Worked
          title="A box 100 mm long, 50 mm wide and 200 mm high"
          steps={[
            `Surface area = 2 × (100 × 50 + 100 × 200 + 50 × 200) = ${big(boxSurfaceArea(100, 50, 200))} mm².`,
            `The cross-shaped net fits on a sheet ${sheet.width} mm by ${sheet.height} mm (not counting flaps).`,
            `Eggs need ${packagingFor('eggs')}, but a cold drink needs ${packagingFor('cold drink')}.`,
          ]}
        />
        <Mistake>Choosing packaging only for looks. The nature of the product decides the properties the packaging needs.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does biodegradable mean?</>,
          <>Name one advantage of a thicker, biodegradable plastic bag that shoppers must buy.</>,
          <>What decides the properties of the packaging for a product?</>,
          <>State the number of faces on the net of a box.</>,
        ]}
        answers={[
          <>It can be broken down by micro-organisms.</>,
          <>People reuse it, so fewer bags are thrown away.</>,
          <>The nature of the product.</>,
          <>{netFaces}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Many natural materials have been replaced by new or improved materials. What is a benefit of some of these new materials?",
    options: ["They never wear out", "They are always natural", "Some are biodegradable", "They need no energy to make"],
    answer: "Some are biodegradable",
    explanation: "Some new materials are environmentally friendly because they are biodegradable.",
  },
  {
    prompt: "What does biodegradable mean?",
    options: ["Micro-organisms can break it down", "It can never be recycled by anyone", "It is always made of metal", "It floats on water"],
    answer: "Micro-organisms can break it down",
    explanation: "Biodegradable materials are broken down by micro-organisms.",
  },
  {
    prompt: "Which material is biodegradable?",
    options: ["Steel", "Glass", "Aluminium", "Cardboard"],
    answer: "Cardboard",
    explanation: "Paper and cardboard can be broken down by micro-organisms.",
  },
  {
    prompt: "What is the first step in recycling waste paper and cardboard?",
    options: ["Press it into new sheets", "Collect and sort it", "Print it with ink", "Burn it"],
    answer: "Collect and sort it",
    explanation: "The waste is collected and sorted before it is made into pulp.",
  },
  {
    prompt: "In recycling paper, what is the pulp made by?",
    options: ["Heating it until it melts", "Breaking the paper down in water", "Cutting it into squares", "Dyeing it"],
    answer: "Breaking the paper down in water",
    explanation: "Waste paper is broken down in water to make pulp.",
  },
  {
    prompt: "Which product can be made from recycled waste paper?",
    options: ["Glass bottles", "Metal cans", "Plastic bags", "Packaging cardboard"],
    answer: "Packaging cardboard",
    explanation: "Recycled paper and cardboard produce new products for the packaging industry.",
  },
  {
    prompt: "What is a negative impact of plastic shopping bags?",
    options: ["They litter the environment", "They dissolve in water at once", "They make soil richer", "They save energy"],
    answer: "They litter the environment",
    explanation: "Plastic bags litter the environment and harm animals.",
  },
  {
    prompt: "A shop sells thicker, biodegradable plastic bags that shoppers must buy. What is the aim?",
    options: ["The shop wants to make bags weaker", "Bags are made to be used once", "People reuse the bags so fewer are thrown away", "The bags are cheaper to make"],
    answer: "People reuse the bags so fewer are thrown away",
    explanation: "The bag charge encourages shoppers to reuse the bags.",
  },
  {
    prompt: "What makes an evaluation of a solution fair?",
    options: ["It only describes the advantages", "It shows only the opinion of the writer", "It leaves out any evidence", "It lists advantages and disadvantages with evidence"],
    answer: "It lists advantages and disadvantages with evidence",
    explanation: "An evaluation should be objective, fair, accurate and thorough.",
  },
  {
    prompt: "What decides the design and properties of packaging?",
    options: ["The colour of the shop", "The nature of the product", "The age of the buyer", "The price of cardboard"],
    answer: "The nature of the product",
    explanation: "The nature of the product determines the packaging design and material.",
  },
  {
    prompt: "Which packaging suits eggs best?",
    options: ["A cushioning moulded tray", "A thin sealed plastic bag", "A solid metal can", "An open wire basket"],
    answer: "A cushioning moulded tray",
    explanation: "Eggs are fragile, so each needs cushioning.",
  },
  {
    prompt: "What is a development (net) of a container?",
    options: ["The finished container with a label", "A drawing in perspective", "The flat shape that folds up into the container", "A list of the container materials"],
    answer: "The flat shape that folds up into the container",
    explanation: "A net is the flat pattern that folds into the box.",
  },
  {
    prompt: "How many faces does the net of an opened box have?",
    options: ["Four", "Eight", "Six", "Twelve"],
    answer: "Six",
    explanation: "A box has six faces: top, bottom and four sides.",
  },
  {
    prompt: "A box is 10 mm long, 10 mm wide and 10 mm high. What area of card makes its six faces?",
    options: ["600 mm²", "100 mm²", "300 mm²", "1 000 mm²"],
    answer: "600 mm²",
    explanation: "6 × (10 × 10) = 600 mm².",
  },
];

const ImpactAndPackaging = () => (
  <CapsSubjectTopic
    title="Impact of Technology and Packaging"
    subtitle="Positive and negative impact, recycling paper, plastic bags and the net of a box"
    learnSteps={learnSteps}
    task="gr8-impact-and-packaging-t2"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default ImpactAndPackaging;
