import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';

// Terms, materials and steps follow the Grade 8 visual arts plan; no named artwork or artist is used (docs/notes/g8-ca-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Careers in the arts and design",
    content: slide(
      <>
        <Rule>Artists and designers have a role in society, and the arts and design fields offer many careers. A graphic designer plans posters and logos. An illustrator draws pictures for books and adverts. A photographer takes pictures for people and publications. An interior designer plans the look of rooms. An art teacher helps others to learn.</Rule>
        <FactCards
          cards={[
            { title: "Graphic designer", line1: "posters, logos and layouts" },
            { title: "Illustrator", line1: "pictures for books and adverts" },
            { title: "Photographer", line1: "pictures for people and news" },
            { title: "Interior designer", line1: "the look of rooms" },
            { title: "Art teacher", line1: "helps others learn art" },
          ]}
          aria="Graphic designer: posters, logos and layouts. Illustrator: pictures for books and adverts. Photographer: pictures for people and news. Interior designer: the look of rooms. Art teacher: helps others learn art."
        />
        <Worked
          title="Match a person to a job"
          steps={[
            "A person designs a logo for a new shop: graphic designer.",
            "A person plans the colours and furniture of a restaurant: interior designer.",
            "A person draws the pictures in a children's book: illustrator.",
          ]}
        />
        <Mistake>Thinking that artists cannot earn a living. Many careers use art and design skills.</Mistake>
      </>,
    ),
  },
  {
    title: "Researching a career",
    content: slide(
      <>
        <Rule>You can research a career in visual arts and design using many sources, such as books, the library, people you interview and the internet. Collect information, then present it as a formal written response or a class presentation, which can be done in a group.</Rule>
        <FactCards
          cards={[
            { title: "Books", line1: "information on careers" },
            { title: "Library", line1: "a place to find sources" },
            { title: "Interviews", line1: "ask a person who works in design" },
            { title: "Internet", line1: "use reliable websites" },
          ]}
          aria="Books: information on careers. Library: a place to find sources. Interviews: ask a person who works in design. Internet: use reliable websites."
        />
        <NumberedSteps steps={["Choose a career and write questions", "Find information in several sources", "Make notes in your own words", "Write a report or give a presentation"].map((text) => ({ text }))} tone="amber" label="Four steps for researching a career" />
        <Worked
          title="Research a graphic designer"
          steps={[
            "Choose the career and write three questions, for example what skills are needed.",
            "Find answers in a library book, on a reliable website and by interviewing a person who works in design.",
            "Write your findings or present them to the class.",
          ]}
        />
        <Mistake>Using only one website and copying from it. Use several sources and write in your own words.</Mistake>
      </>,
    ),
  },
  {
    title: "Surface decoration",
    content: slide(
      <>
        <Rule>Surface decoration is adding pattern, colour or texture to the surface of an object. You can decorate fabric in fashion design, walls and floors in interior design, and packaging in corporate design, where a business uses colours and a logo to look the same everywhere. In your design project you experiment with art elements and design principles.</Rule>
        <FactCards
          cards={[
            { title: "Fashion design", line1: "a pattern printed on cloth" },
            { title: "Interior design", line1: "a design for a wall or floor" },
            { title: "Corporate design", line1: "logo and colours on packaging" },
          ]}
          aria="Fashion design: a pattern printed on cloth. Interior design: a design for a wall or floor. Corporate design: logo and colours on packaging."
        />
        <Worked
          title="Decorate a school bag"
          steps={[
            "Choose a theme, such as the sea, and sketch a repeating pattern of waves.",
            "Colour the pattern with two colours that contrast with the bag.",
            "Use repetition and unity so that the whole surface looks designed.",
          ]}
        />
        <Mistake>Filling the surface with different patterns that do not belong together. Choose one idea and repeat it.</Mistake>
      </>,
    ),
  },
  {
    title: "Making 2D and 3D designs",
    content: slide(
      <>
        <Rule>In 2D work you draw and paint with a variety of media. In 3D work you build from recyclable materials such as fabric off-cuts, beads, cardboard, braids, ribbons and sequins. Familiar and unfamiliar techniques include pasting, cutting, modelling, wrapping, tying, stitching, joining and scoring. Use tools safely and share resources.</Rule>
        <FactCards
          cards={[
            { title: "Pasting", line1: "sticking pieces together" },
            { title: "Wrapping and tying", line1: "covering and fastening" },
            { title: "Stitching and joining", line1: "fixing with thread or glue" },
            { title: "Scoring", line1: "scratching a line to bend or join" },
          ]}
          aria="Pasting: sticking pieces together. Wrapping and tying: covering and fastening. Stitching and joining: fixing with thread or glue. Scoring: scratching a line to bend or join."
        />
        <Worked
          title="Plan a 3D design"
          steps={[
            "Choose a product from the world of work, such as a gift box with decoration.",
            "Score and fold cardboard to build the box and paste on fabric off-cuts.",
            "Tie a ribbon and add beads, using scissors safely and sharing materials.",
          ]}
        />
        <Mistake>Skipping the test of a technique. Try it on a scrap first, especially one that is new to you.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Who designs posters and logos?</>,
          <>Name two sources for researching a career.</>,
          <>What is surface decoration?</>,
          <>What does scoring mean?</>,
        ]}
        answers={[
          <>A graphic designer.</>,
          <>A library book and the internet.</>,
          <>Adding pattern, colour or texture to a surface.</>,
          <>Scratching a line to bend or join.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Who designs posters and logos?",
    options: ["An interior designer", "A photographer", "A graphic designer", "An art teacher"],
    answer: "A graphic designer",
    explanation: "A graphic designer plans visual communication such as posters and logos.",
  },
  {
    prompt: "Who plans the colours and furniture of a room?",
    options: ["An interior designer", "An illustrator", "A graphic designer", "A tailor"],
    answer: "An interior designer",
    explanation: "Interior designers plan how rooms look.",
  },
  {
    prompt: "Who draws the pictures in a children's book?",
    options: ["A photographer", "An interior designer", "A plumber", "An illustrator"],
    answer: "An illustrator",
    explanation: "An illustrator draws pictures for books and adverts.",
  },
  {
    prompt: "Which of these is a good source for researching a career in design?",
    options: ["A single rumour from a friend", "A library book and an interview", "A guess made from memory", "A picture that has no words"],
    answer: "A library book and an interview",
    explanation: "Use many sources such as books, the library, interviews and the internet.",
  },
  {
    prompt: "How can you present your career research?",
    options: ["As a secret note to a friend", "As a drawing without words", "In writing or in a class talk", "As a joke at break time"],
    answer: "In writing or in a class talk",
    explanation: "Both a formal written response and a presentation are suitable.",
  },
  {
    prompt: "Why should you use more than one source when you research a career?",
    options: ["To check the information", "To make the report longer", "To avoid having to write", "To copy a lot more words"],
    answer: "To check the information",
    explanation: "Several sources help you to check that the information is correct.",
  },
  {
    prompt: "What is surface decoration?",
    options: ["Cutting a surface into pieces", "Building a frame for a wall", "Taking a photograph of it", "Adding a pattern to a surface"],
    answer: "Adding a pattern to a surface",
    explanation: "Surface decoration changes how a surface looks.",
  },
  {
    prompt: "A business uses the same logo and colours on every box. Which kind of design is this?",
    options: ["Interior design", "Corporate design", "Fashion design", "Life drawing"],
    answer: "Corporate design",
    explanation: "Corporate design makes a business look the same everywhere.",
  },
  {
    prompt: "A pattern is printed on cloth for a dress. Which field is this?",
    options: ["Corporate design", "Interior design", "Fashion design", "Photography"],
    answer: "Fashion design",
    explanation: "Decorating fabric is part of fashion design.",
  },
  {
    prompt: "A design for a wall in a restaurant belongs to which field?",
    options: ["Interior design", "Fashion design", "Corporate design", "Illustration"],
    answer: "Interior design",
    explanation: "Interior design plans walls, floors and rooms.",
  },
  {
    prompt: "What does scoring mean in 3D construction?",
    options: ["Painting a stripe on card", "Adding up the game points", "Tying a ribbon around it", "Scratching a line on card"],
    answer: "Scratching a line on card",
    explanation: "Scoring a line makes it easier to fold or join card.",
  },
  {
    prompt: "Which of these is a technique for 3D design?",
    options: ["Whispering", "Wrapping", "Rinsing", "Dusting"],
    answer: "Wrapping",
    explanation: "Pasting, cutting, wrapping, tying, stitching, joining and scoring are construction techniques.",
  },
  {
    prompt: "Why should you try a new technique on a scrap first?",
    options: ["To waste the spare materials", "To skip the planning stage", "To check that it works first", "To avoid sharing the tools"],
    answer: "To check that it works first",
    explanation: "Testing on a scrap saves the final piece from mistakes.",
  },
  {
    prompt: "Which materials could you use in a 3D design from recyclables?",
    options: ["Fabric off-cuts, beads and ribbons", "Wet clay and a kiln for firing", "Oil paint and a stretched canvas", "Ink and a feather quill pen"],
    answer: "Fabric off-cuts, beads and ribbons",
    explanation: "The 3D projects use recyclable materials such as off-cuts, beads and ribbons.",
  },
];

const CareersSurfaceDecoration = () => (
  <CapsSubjectTopic
    title="Careers in Arts and Design and Surface Decoration"
    subtitle="Careers in the arts and design, researching a career, surface decoration and making 2D and 3D designs"
    learnSteps={learnSteps}
    task="gr8-ca-careers-decoration-t3"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default CareersSurfaceDecoration;
