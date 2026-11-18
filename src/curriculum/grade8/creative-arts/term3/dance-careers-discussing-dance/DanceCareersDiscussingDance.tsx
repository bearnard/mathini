import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';

// Terms follow the Grade 8 dance plan; no named dance, dancer, choreographer or piece is used (docs/notes/g8-ca-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Discussing a dance you have seen",
    content: slide(
      <>
        <Rule>You can discuss a dance that you saw in your community, on television or on a stage. Say what type of dance it was, which movements the dancers used, what type of music accompanied it and which ideas or themes it showed. Give a reason for what you say.</Rule>
        <FactCards
          cards={[
            { title: "Type of dance", line1: "traditional, social or stage dance" },
            { title: "Movements", line1: "steps, jumps, turns and gestures" },
            { title: "Music", line1: "drums, singing or recorded music" },
            { title: "Idea or theme", line1: "the story or feeling shown" },
          ]}
          aria="Type of dance: traditional, social or stage dance. Movements: steps, jumps, turns and gestures. Music: drums, singing or recorded music. Idea or theme: the story or feeling shown."
        />
        <Worked
          title="Describe a wedding dance"
          steps={[
            "Say the type: a traditional dance performed at a wedding.",
            "Name the movements: stamping, wide arm swings and a circle formation.",
            "Say the music: drums and singing, and the idea: joy and welcome.",
          ]}
        />
        <Mistake>Saying only that the dance was nice. Describe the type, movements, music and theme.</Mistake>
      </>,
    ),
  },
  {
    title: "Dance words for describing space, force and relationships",
    content: slide(
      <>
        <Rule>Use the dance elements to describe what you saw. Space: symmetry means the shape is the same on both sides, asymmetry means it is different, and patterning is a repeated floor or body pattern. Force: strong movements use more energy and light movements use less. Relationships: dancers can be active, leading the movement, or passive, being moved or following.</Rule>
        <FactCards
          cards={[
            { title: "Symmetry", line1: "the same on both sides" },
            { title: "Asymmetry", line1: "different on each side" },
            { title: "Force", line1: "strong or light energy" },
            { title: "Active and passive", line1: "leading and following" },
          ]}
          aria="Symmetry: the same on both sides. Asymmetry: different on each side. Force: strong or light energy. Active and passive: leading and following."
        />
        <Worked
          title="Describe a group dance"
          steps={[
            "The dancers stand in two matching lines: symmetry.",
            "They stamp hard and then step lightly: strong force and light force.",
            "One dancer leads and the others follow: active and passive relationships.",
          ]}
        />
        <Mistake>Using the words without giving an example. Say what you saw that shows the word.</Mistake>
      </>,
    ),
  },
  {
    title: "Careers in dance",
    content: slide(
      <>
        <Rule>Dance offers many careers. A dancer performs. A choreographer creates and arranges dances. A dance teacher teaches others to dance. A dance therapist uses movement to support people's wellbeing. A costume designer makes the clothes that dancers wear. All of these need skills, training and good qualities such as discipline and teamwork.</Rule>
        <FactCards
          cards={[
            { title: "Dancer", line1: "performs dances" },
            { title: "Choreographer", line1: "creates and arranges dances" },
            { title: "Dance teacher", line1: "teaches others" },
            { title: "Dance therapist", line1: "uses movement for wellbeing" },
            { title: "Costume designer", line1: "makes dance costumes" },
          ]}
          aria="Dancer: performs dances. Choreographer: creates and arranges dances. Dance teacher: teaches others. Dance therapist: uses movement for wellbeing. Costume designer: makes dance costumes."
        />
        <Worked
          title="Match a person to a job"
          steps={[
            "A person who plans the steps and patterns for a group: choreographer.",
            "A person who teaches a class every afternoon: dance teacher.",
            "A person who makes sparkly skirts for a show: costume designer.",
          ]}
        />
        <Mistake>Thinking that only dancers work in dance. Teachers, designers and many others work with dance too.</Mistake>
      </>,
    ),
  },
  {
    title: "Researching and presenting a dance career",
    content: slide(
      <>
        <Rule>To research a dance career, choose one and find out the skills, the qualifications and the qualities that it needs, and describe what the work is. Use books, dance magazines, interviews and the internet. Then present what you learned. Skills include rhythm and technique, qualifications include training and study, and qualities include discipline, creativity and teamwork.</Rule>
        <FactCards
          cards={[
            { title: "Skills", line1: "rhythm, technique, fitness" },
            { title: "Qualifications", line1: "training and study" },
            { title: "Qualities", line1: "discipline, creativity, teamwork" },
            { title: "Description", line1: "what the work involves" },
          ]}
          aria="Skills: rhythm, technique, fitness. Qualifications: training and study. Qualities: discipline, creativity, teamwork. Description: what the work involves."
        />
        <NumberedSteps steps={["Choose a dance career", "Find information in several sources", "Fill in skills, qualifications, qualities and description", "Present it in your own words"].map((text) => ({ text }))} tone="amber" label="Four steps for researching a dance career" />
        <Worked
          title="Plan a short presentation"
          steps={[
            "Choose a career, such as choreographer, and write four headings: skills, qualifications, qualities and description.",
            "Fill in each heading from a magazine, a book and an interview with a dance teacher.",
            "Present the four headings to your class in your own words.",
          ]}
        />
        <Mistake>Copying text from one website. Use several sources and write in your own words.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two things to say about a dance you saw.</>,
          <>What does a choreographer do?</>,
          <>What does symmetry mean?</>,
          <>Name one quality a dancer needs.</>,
        ]}
        answers={[
          <>The type of dance and the music.</>,
          <>Creates and arranges dances.</>,
          <>The same on both sides.</>,
          <>Discipline or teamwork.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "You describe a dance you saw on television. Which detail tells the type of dance?",
    options: ["That the seats were soft", "That the stage was wooden", "That it was a traditional dance", "That the tickets were cheap"],
    answer: "That it was a traditional dance",
    explanation: "The type of dance is part of describing a dance.",
  },
  {
    prompt: "Which of these describes the movements in a dance?",
    options: ["Stamping and wide arm swings", "A bright red programme", "A long queue outside", "A noisy crowd"],
    answer: "Stamping and wide arm swings",
    explanation: "Movements are the steps, jumps, turns and gestures that the dancers do.",
  },
  {
    prompt: "What should you mention about the music when you discuss a dance?",
    options: ["The seat number", "The ticket price", "The name of the hall", "The type of music used"],
    answer: "The type of music used",
    explanation: "Say what music accompanied the dance, such as drums or singing.",
  },
  {
    prompt: "A dance shows the story of a harvest. What are you describing?",
    options: ["The type of music", "The idea or theme", "The size of the stage", "The colour of the costume"],
    answer: "The idea or theme",
    explanation: "The idea or theme is what the dance is about.",
  },
  {
    prompt: "Which of these is a place where you can see a dance to discuss?",
    options: ["In a recipe book", "On a bus ticket", "On television", "In a phone bill"],
    answer: "On television",
    explanation: "You can discuss a dance seen in the community, on television or on a stage.",
  },
  {
    prompt: "Dancers stand in two matching lines, one on each side of the stage. Which word describes this shape?",
    options: ["Symmetry", "Asymmetry", "Gravity", "Weight"],
    answer: "Symmetry",
    explanation: "Symmetry means the same on both sides.",
  },
  {
    prompt: "Dancers stamp hard and then step lightly. Which dance element is changing?",
    options: ["Space", "Costume", "Music type", "Force"],
    answer: "Force",
    explanation: "Force is the amount of energy a movement uses.",
  },
  {
    prompt: "In a pair, one dancer leads and the other follows. How are the relationships described?",
    options: ["Fast and slow", "Active and passive", "Near and far", "Loud and soft"],
    answer: "Active and passive",
    explanation: "The leader is active and the follower is passive.",
  },
  {
    prompt: "What does a choreographer do?",
    options: ["Sews the costumes for a show", "Sells the tickets at the door", "Creates and arranges dances", "Drives the bus to the theatre"],
    answer: "Creates and arranges dances",
    explanation: "A choreographer plans the steps and patterns of a dance.",
  },
  {
    prompt: "Which person teaches others how to dance?",
    options: ["A dance teacher", "A costume designer", "A stage cleaner", "A ticket seller"],
    answer: "A dance teacher",
    explanation: "A dance teacher leads classes and helps others to learn.",
  },
  {
    prompt: "Which quality helps a dancer in a group dance?",
    options: ["Impatience", "Boasting", "Carelessness", "Teamwork"],
    answer: "Teamwork",
    explanation: "A group dance needs dancers who work together.",
  },
  {
    prompt: "Which of these is a skill that a dancer needs?",
    options: ["Fast typing on a keyboard", "Good rhythm and technique", "Cooking meals for a crowd", "Reading a map on a trip"],
    answer: "Good rhythm and technique",
    explanation: "Rhythm, technique and fitness are skills for dancing.",
  },
  {
    prompt: "When you research a dance career, what should you find out?",
    options: ["The price of a pair of dance shoes", "The size of the largest stage", "Skills, qualifications and qualities", "The colour of the stage curtain"],
    answer: "Skills, qualifications and qualities",
    explanation: "The research looks at skills, qualifications, qualities and a description of the career.",
  },
  {
    prompt: "Which source helps you research a dance career?",
    options: ["A dance magazine or an interview", "A weather map of the region", "A phone book from last year", "A bus timetable for the week"],
    answer: "A dance magazine or an interview",
    explanation: "Books, magazines, interviews and the internet are good sources.",
  },
];

const DanceCareersDiscussingDance = () => (
  <CapsSubjectTopic
    title="Dance Careers and Discussing a Dance You Have Seen"
    subtitle="Describing a dance, space, force and relationships, careers in dance and researching a dance career"
    learnSteps={learnSteps}
    task="gr8-ca-dance-careers-t3"
    bank={bank}
    apiPath="/api/caps/ca"
  />
);

export default DanceCareersDiscussingDance;
