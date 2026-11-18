import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';

// Terms, materials and steps follow the Grade 8 visual arts plan; no named artwork or artist is used (docs/notes/g8-ca-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Fashion through the ages",
    content: slide(
      <>
        <Rule>Fashion is the style of clothes that people wear, and it changes over time. Garments have a function, such as warmth, protection or a special occasion, and they can show who you are. Fashion is part of popular culture. When you talk about fashion, listen to the opinions of others and respect them.</Rule>
        <FactCards
          cards={[
            { title: "Function", line1: "warmth, protection or an occasion" },
            { title: "Identity", line1: "shows who you are or where you are from" },
            { title: "Style", line1: "changes over time" },
            { title: "Popular culture", line1: "shared by many people" },
          ]}
          aria="Function: warmth, protection or an occasion. Identity: shows who you are or where you are from. Style: changes over time. Popular culture: shared by many people."
        />
        <Worked
          title="Compare fashion then and now"
          steps={[
            "Look at two photographs: a garment from long ago and a garment from today.",
            "Describe the shapes, lines, tones and textures of each.",
            "Say what has changed and what has stayed the same, and respect other opinions.",
          ]}
        />
        <Mistake>Saying that old fashion is bad and new fashion is good. Describe what you see and give reasons.</Mistake>
      </>,
    ),
  },
  {
    title: "Designing a garment from recyclables",
    content: slide(
      <>
        <Rule>In this project you design and make a three-dimensional garment from recyclable materials for a particular function. Use art elements and design principles in your design. You collect your resources, make preliminary drawings and choose tools and materials. Good craftsmanship includes stitching, tying, pasting and wrapping.</Rule>
        <FactCards
          cards={[
            { title: "Function", line1: "what the garment must do" },
            { title: "Materials", line1: "recyclable materials" },
            { title: "Techniques", line1: "stitching, tying, pasting, wrapping" },
            { title: "Planning", line1: "sketches before making" },
          ]}
          aria="Function: what the garment must do. Materials: recyclable materials. Techniques: stitching, tying, pasting, wrapping. Planning: sketches before making."
        />
        <NumberedSteps steps={["Choose the function of the garment", "Make preliminary drawings", "Collect recyclable materials", "Make the garment with good craftsmanship", "Evaluate how well it works"].map((text) => ({ text }))} tone="amber" label="Five steps for designing a garment" />
        <Worked
          title="Design a rain cape"
          steps={[
            "Choose the function: a cape that keeps the rain off.",
            "Sketch the shape, then collect plastic bags and a strip of cardboard for the collar.",
            "Join the pieces by tying and pasting and test whether water runs off.",
          ]}
        />
        <Mistake>Choosing materials after you start making. Plan your materials from your sketches first.</Mistake>
      </>,
    ),
  },
  {
    title: "Tools, sharing and the environment",
    content: slide(
      <>
        <Rule>Use tools safely. Cut away from your body and on a cutting surface, and keep your fingers clear of blades. Share resources fairly and think of others. Reuse materials and reduce waste, because working with recyclable materials shows concern for the environment.</Rule>
        <FactCards
          cards={[
            { title: "Cut safely", line1: "away from your body, on a cutting surface" },
            { title: "Share", line1: "tools and materials fairly" },
            { title: "Tidy", line1: "clear your workspace" },
            { title: "Reuse", line1: "turn waste into design" },
          ]}
          aria="Cut safely: away from your body, on a cutting surface. Share: tools and materials fairly. Tidy: clear your workspace. Reuse: turn waste into design."
        />
        <Worked
          title="Work safely at a shared table"
          steps={[
            "Use scissors with the blade pointing away from you and your friends.",
            "Pass tools handle first and wait for your turn with the glue.",
            "Put leftover fabric in the shared box for others to use.",
          ]}
        />
        <Mistake>Leaving craft knives open on the table. Close and put them away when you are not using them.</Mistake>
      </>,
    ),
  },
  {
    title: "Careers in fashion",
    content: slide(
      <>
        <Rule>Artists and designers have a role in society, and fashion offers many careers. A fashion designer plans garments. A pattern maker turns designs into patterns. A tailor or seamstress sews garments. A stylist chooses clothes for a look. A textile designer creates patterns for fabric. You can explore the world of work in visual arts and design.</Rule>
        <FactCards
          cards={[
            { title: "Fashion designer", line1: "plans new garments" },
            { title: "Pattern maker", line1: "turns designs into patterns" },
            { title: "Tailor or seamstress", line1: "sews garments" },
            { title: "Stylist", line1: "chooses clothes for a look" },
            { title: "Textile designer", line1: "creates fabric patterns" },
          ]}
          aria="Fashion designer: plans new garments. Pattern maker: turns designs into patterns. Tailor or seamstress: sews garments. Stylist: chooses clothes for a look. Textile designer: creates fabric patterns."
        />
        <Worked
          title="Match a person to a job"
          steps={[
            "A person draws new dress ideas: fashion designer.",
            "A person cuts paper shapes to make a dress pattern: pattern maker.",
            "A person makes patterns to print on cloth: textile designer.",
          ]}
        />
        <Mistake>Thinking that fashion is only for models. Many skilled people work behind the scenes.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What decides how a garment is designed in this project?</>,
          <>Which way do you cut with scissors?</>,
          <>Who plans new garments?</>,
          <>Which materials do you use?</>,
        ]}
        answers={[
          <>Its function.</>,
          <>Away from your body.</>,
          <>A fashion designer.</>,
          <>Recyclable materials.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "What is fashion?",
    options: ["A tool for cutting cloth", "A kind of paint", "The style of clothes that changes over time", "A place where clothes are washed"],
    answer: "The style of clothes that changes over time",
    explanation: "Fashion is a style of dress that changes with time and is part of popular culture.",
  },
  {
    prompt: "Which of these is a function of a garment?",
    options: ["Giving protection from the rain", "Being the cheapest cloth", "Being the same as a friend's", "Being kept in a cupboard"],
    answer: "Giving protection from the rain",
    explanation: "A garment can protect, keep warm or suit an occasion.",
  },
  {
    prompt: "You compare a garment from long ago with one from today. What should you do first?",
    options: ["Say which one is ugly", "Copy the older one exactly", "Throw away the newer one", "Describe what you see in each"],
    answer: "Describe what you see in each",
    explanation: "Look and describe with art elements before you give an opinion.",
  },
  {
    prompt: "Which materials do you use for the garment project?",
    options: ["Silk and expensive wool", "Recyclable materials", "Oil paint and canvas", "Clay and kiln tools"],
    answer: "Recyclable materials",
    explanation: "The project uses recyclable materials chosen by you.",
  },
  {
    prompt: "Which technique can you use to join pieces of fabric?",
    options: ["Melting", "Carving", "Stitching", "Hammering"],
    answer: "Stitching",
    explanation: "Stitching, tying, pasting and wrapping are all ways of joining.",
  },
  {
    prompt: "What should you do before you collect materials for your garment?",
    options: ["Make preliminary drawings", "Cut the cardboard", "Paint the final garment", "Show it to the class"],
    answer: "Make preliminary drawings",
    explanation: "Sketches help you to choose materials and plan the design.",
  },
  {
    prompt: "How should you hold scissors when you cut?",
    options: ["With the blade pointing at your friend", "With your fingers on the blade", "With the blade pointing at your hand", "With the blade pointing away from your body"],
    answer: "With the blade pointing away from your body",
    explanation: "Cut away from yourself and others.",
  },
  {
    prompt: "Why do you share tools and materials?",
    options: ["So that you can take more", "So that others can use them too", "So that the tools get lost", "So that nobody works"],
    answer: "So that others can use them too",
    explanation: "Sharing shows consideration for others.",
  },
  {
    prompt: "Why is using recyclable materials good for the environment?",
    options: ["You make more waste for the bin", "You use up many new forests", "You reuse materials and reduce waste", "You need bigger noisier factories"],
    answer: "You reuse materials and reduce waste",
    explanation: "Reusing waste materials shows concern for the environment.",
  },
  {
    prompt: "Who plans new garments?",
    options: ["A fashion designer", "A pattern maker", "A shop assistant", "A bus driver"],
    answer: "A fashion designer",
    explanation: "A fashion designer plans garments and a pattern maker turns the designs into patterns.",
  },
  {
    prompt: "Who creates patterns that are printed on fabric?",
    options: ["A stylist", "A tailor", "A security guard", "A textile designer"],
    answer: "A textile designer",
    explanation: "A textile designer creates fabric patterns.",
  },
  {
    prompt: "Who chooses clothes to create a look for a photo?",
    options: ["A pattern maker", "A stylist", "A teacher", "A farmer"],
    answer: "A stylist",
    explanation: "A stylist selects clothes and accessories for a look.",
  },
  {
    prompt: "What is fashion an example of?",
    options: ["A natural resource", "A kind of weather", "Popular culture", "A type of rock"],
    answer: "Popular culture",
    explanation: "Fashion is shared by many people, so it is part of popular culture.",
  },
  {
    prompt: "A classmate likes a style that you do not like. What is a good response?",
    options: ["Listen to their view and respect it", "Tell everyone they are wrong", "Copy their style", "Leave the room"],
    answer: "Listen to their view and respect it",
    explanation: "Discussing fashion helps you to respect other opinions.",
  },
];

const FashionDesignRecyclables = () => (
  <CapsSubjectTopic
    title="Fashion Design from Recyclables"
    subtitle="Fashion through the ages, designing a garment, tools and sharing, and careers in fashion"
    learnSteps={learnSteps}
    task="gr8-ca-fashion-design-t2"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default FashionDesignRecyclables;
