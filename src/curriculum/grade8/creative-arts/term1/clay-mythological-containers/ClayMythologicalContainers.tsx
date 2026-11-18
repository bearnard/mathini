import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { PINCH_STEPS } from '../../../../../components/diagrams/arts/ca8-visual-gaps';

// Terms, materials and steps follow the Grade 8 visual arts plan; no named artwork or artist is used (docs/notes/g8-ca-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Functional containers",
    content: slide(
      <>
        <Rule>A container is made to hold something, so its function decides its form. A bowl has a wide opening to hold food. A jug has a narrow spout to pour. A jar with a lid keeps its contents safe. Crafts can be functional or decorative, and many people work as potters and craft designers.</Rule>
        <FactCards
          cards={[
            { title: "Bowl", line1: "wide opening to hold food" },
            { title: "Jug", line1: "narrow spout for pouring" },
            { title: "Jar with a lid", line1: "keeps contents safe" },
            { title: "Decorative pot", line1: "made to be looked at" },
          ]}
          aria="Bowl: wide opening to hold food. Jug: narrow spout for pouring. Jar with a lid: keeps contents safe. Decorative pot: made to be looked at."
        />
        <Worked
          title="Match function to form"
          steps={[
            "You need to carry water: choose a container with a handle and a narrow neck.",
            "You need to serve soup: choose a wide bowl.",
            "You want to display flowers: a decorative pot with patterns works.",
          ]}
        />
        <Mistake>Thinking that a container only needs to look good. A functional container must also do its job.</Mistake>
      </>,
    ),
  },
  {
    title: "A pinch pot",
    content: slide(
      <>
        <Rule>A pinch pot is made from earthenware clay with your hands. You shape a ball, press in your thumb and pinch the walls up and round. Even walls make a strong pot. You can add surface decoration by scratching or pressing marks into the clay, and a lid with a small detail.</Rule>
        <FactCards
          cards={[
            { title: "Clay", line1: "earthenware clay" },
            { title: "Tools", line1: "scratching and modelling tools" },
            { title: "Skill", line1: "pinching and turning" },
            { title: "Decoration", line1: "scratched or pressed marks" },
          ]}
          aria="Clay: earthenware clay. Tools: scratching and modelling tools. Skill: pinching and turning. Decoration: scratched or pressed marks."
        />
        <NumberedSteps steps={PINCH_STEPS.map((text) => ({ text }))} tone="amber" label="The five steps for making a pinch pot" />
        <Worked
          title="Make a pinch pot"
          steps={[
            "Roll a ball of clay in your hands until it is smooth.",
            "Press your thumb into the middle and pinch and turn the clay to raise the walls.",
            "Smooth the surface, then decorate it by scratching a pattern.",
          ]}
        />
        <Mistake>Making one wall thin and one wall thick. Uneven walls dry unevenly and can crack.</Mistake>
      </>,
    ),
  },
  {
    title: "Joining and decorating clay",
    content: slide(
      <>
        <Rule>To join two pieces of clay, scratch both surfaces and join them with a little slip, which is clay mixed with water. This is how you attach a handle or a lid detail. The craft skills are rolling, pinching, scratching, joining and surface decoration. Use your art elements and design principles consciously while you model.</Rule>
        <FactCards
          cards={[
            { title: "Rolling", line1: "makes coils and slabs" },
            { title: "Pinching", line1: "raises and shapes the walls" },
            { title: "Scratching", line1: "roughens both surfaces to join" },
            { title: "Slip", line1: "clay and water that sticks pieces" },
          ]}
          aria="Rolling: makes coils and slabs. Pinching: raises and shapes the walls. Scratching: roughens both surfaces to join. Slip: clay and water that sticks pieces."
        />
        <Worked
          title="Add a lid detail"
          steps={[
            "Roll a small ball for the knob of the lid.",
            "Scratch the lid and the underside of the knob, then add a little slip.",
            "Press the knob firmly on and smooth the join.",
          ]}
        />
        <Mistake>Pressing two smooth pieces together. They will not stay joined, so scratch both surfaces first.</Mistake>
      </>,
    ),
  },
  {
    title: "A mythological container",
    content: slide(
      <>
        <Rule>A mythological container is an imaginary container from a myth or legend that you make from recyclable materials, such as fabric off-cuts, beads, cardboard, braids, ribbons and sequins. You plan with preliminary drawings, collect your materials and build with good craftsmanship. Think about depth and perspective so that your container looks three-dimensional.</Rule>
        <FactCards
          cards={[
            { title: "Idea", line1: "a container from a myth or legend" },
            { title: "Sketch", line1: "preliminary drawings" },
            { title: "Collect", line1: "recyclable materials" },
            { title: "Build", line1: "good craftsmanship and depth" },
          ]}
          aria="Idea: a container from a myth or legend. Sketch: preliminary drawings. Collect: recyclable materials. Build: good craftsmanship and depth."
        />
        <Worked
          title="Plan a magic water jar"
          steps={[
            "Choose the idea: a jar that never runs dry.",
            "Make sketches and decide on cardboard for the body and ribbons for the neck.",
            "Build it, adding beads at the front to give depth and detail.",
          ]}
        />
        <Mistake>Starting to glue before you plan. Sketches help you decide on materials and avoid mistakes.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What decides the shape of a container?</>,
          <>What is slip?</>,
          <>What do you do before joining two clay pieces?</>,
          <>What materials make a mythological container?</>,
        ]}
        answers={[
          <>Its function.</>,
          <>Clay mixed with water.</>,
          <>Scratch both surfaces.</>,
          <>Recyclable materials.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "You need a container to pour water. Which shape suits it best?",
    options: ["A flat open dish", "A bowl with a wide edge", "A jug with a narrow spout", "A tall closed box"],
    answer: "A jug with a narrow spout",
    explanation: "A narrow spout helps you to pour.",
  },
  {
    prompt: "You need a container to serve soup. Which shape suits it best?",
    options: ["A wide bowl", "A jug with a narrow neck", "A closed jar", "A flat tile"],
    answer: "A wide bowl",
    explanation: "A wide opening makes it easy to fill and serve.",
  },
  {
    prompt: "What decides the form of a functional container?",
    options: ["The weather on the day", "The colour of the table", "The age of the potter", "What the container must do"],
    answer: "What the container must do",
    explanation: "Function decides form.",
  },
  {
    prompt: "Which clay is used in the pinch pot project?",
    options: ["Modelling wax", "Earthenware clay", "Papier-mâché", "Wet sand"],
    answer: "Earthenware clay",
    explanation: "The project uses earthenware clay.",
  },
  {
    prompt: "In which order do you make a pinch pot?",
    options: ["Pinch the walls, roll a ball, press in a thumb", "Press in a thumb, decorate, roll a ball", "Roll a ball, press in a thumb, pinch the walls", "Smooth the rim, roll a ball, pinch"],
    answer: "Roll a ball, press in a thumb, pinch the walls",
    explanation: "You start with a ball, open it with your thumb and then raise the walls.",
  },
  {
    prompt: "Why should the walls of a pinch pot be even?",
    options: ["Even walls dry evenly and are less likely to crack", "Even walls make the clay lighter in colour", "Even walls remove the need to decorate", "Even walls make the pot melt"],
    answer: "Even walls dry evenly and are less likely to crack",
    explanation: "Uneven walls dry unevenly, which can cause cracks.",
  },
  {
    prompt: "What is slip?",
    options: ["A kind of paint brush", "A scratching tool", "A drying cloth", "Clay mixed with water"],
    answer: "Clay mixed with water",
    explanation: "Slip helps pieces of clay to stick together.",
  },
  {
    prompt: "What must you do to both clay surfaces before you join them?",
    options: ["Polish them", "Scratch them", "Dry them in the sun", "Paint them"],
    answer: "Scratch them",
    explanation: "Scratching roughens the surfaces so that the slip holds them.",
  },
  {
    prompt: "Which of these is a way of decorating the surface of clay?",
    options: ["Folding it like paper", "Cutting it with scissors", "Scratching a pattern into it", "Wrapping it in plastic"],
    answer: "Scratching a pattern into it",
    explanation: "Scratching or pressing marks adds surface decoration.",
  },
  {
    prompt: "Which materials could you use for a mythological container?",
    options: ["Fabric off-cuts, beads and cardboard", "Wet clay and a kiln for firing", "Newspaper and ink for printing", "Oil paint and a stretched canvas"],
    answer: "Fabric off-cuts, beads and cardboard",
    explanation: "The project uses recyclable materials such as fabric off-cuts, beads and cardboard.",
  },
  {
    prompt: "What do preliminary drawings help you to do?",
    options: ["Finish the project quickly", "Avoid using materials", "Hide mistakes from others", "Plan your design before you build"],
    answer: "Plan your design before you build",
    explanation: "Sketches help you to plan with guidance before making the final piece.",
  },
  {
    prompt: "What does adding depth and perspective do for your container?",
    options: ["It makes the container look flat", "It gives it a three-dimensional look", "It removes the need for any colour", "It makes the container much smaller"],
    answer: "It gives it a three-dimensional look",
    explanation: "Depth and perspective give the feeling of space.",
  },
  {
    prompt: "A mythological container comes from...",
    options: ["A shopping list", "A bus timetable", "A myth or legend", "A news report"],
    answer: "A myth or legend",
    explanation: "The container is imaginary and based on a myth or legend.",
  },
  {
    prompt: "Which job is connected to making functional craft containers?",
    options: ["A potter", "A lighting designer", "A news reader", "A bus driver"],
    answer: "A potter",
    explanation: "Potters make functional and decorative clay containers.",
  },
];

const ClayMythologicalContainers = () => (
  <CapsSubjectTopic
    title="Clay and Mythological Containers"
    subtitle="Functional containers, the pinch pot, joining and decorating clay, and a mythological container from recyclables"
    learnSteps={learnSteps}
    task="gr8-ca-clay-containers-t1"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default ClayMythologicalContainers;
