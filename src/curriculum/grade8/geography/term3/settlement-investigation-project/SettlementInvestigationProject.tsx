import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { SketchMap } from '../../../../../components/diagrams/geo8/Geo8Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What the project asks you to do",
    content: slide(
      <>
        <Rule>{"The Term 3 project is an independent study of a settlement that you know, such as a village, town or suburb. You describe it, find its landmarks, explain why it is where it is, say whether it is growing or declining, discuss one social or environmental issue, and show your evidence with interviews, drawings and a sketch map."}</Rule>
        <FactCards
          cards={[
            { title: "Describe", line1: "the settlement and", line2: "its land uses" },
            { title: "Landmarks", line1: "natural and", line2: "human-made features" },
            { title: "Why here?", line1: "reasons for the", line2: "location" },
            { title: "Change", line1: "growth or decline,", line2: "and the reasons" },
          ]}
          aria={"The parts of the settlement project. Describe the settlement and its land uses. Find landmarks, natural and human-made. Explain why it is where it is. Discuss growth or decline and the reasons. The project also needs one issue, interviews, drawings and a sketch map."}
        />
        <Worked
          title={"Plan the project early"}
          steps={[
            "Choose a settlement that you can visit or ask people about.",
            "Make a list of the six parts of the project and tick each one when it is done.",
            "The project is handed in late in the term, so plan time for interviews and drawing.",
          ]}
        />
        <Mistake>{"Leaving it all to the last week. Start early and work on one part at a time."}</Mistake>
      </>,
    ),
  },
  {
    title: "Why the settlement is there, and whether it is growing",
    content: slide(
      <>
        <Rule>{"Settlements grow where people find something they need: water, fertile land, minerals, a safe harbour, a crossing of routes, or jobs. A settlement can decline when the reason for its growth ends, for example when a mine closes, when jobs are lost, or when people move away to larger towns."}</Rule>
        <FactCards
          cards={[
            { title: "Water", line1: "a river, spring", line2: "or dam nearby" },
            { title: "Land", line1: "farmland, grazing", line2: "or forest" },
            { title: "Resources", line1: "minerals or a harbour", line2: "for work and trade" },
            { title: "Routes", line1: "a crossing of roads,", line2: "rail or rivers" },
          ]}
          aria={"Reasons why settlements are where they are. Water: a river, spring or dam nearby. Land: farmland, grazing or forest. Resources: minerals or a harbour for work and trade. Routes: where roads, rail or rivers cross."}
        />
        <Worked
          title={"Link cause and effect"}
          steps={[
            "Johannesburg grew quickly after gold was found there in 1886, because mining brought jobs and people.",
            "A town that depends on one mine can shrink if the mine closes and the jobs end.",
            "For your own settlement, ask: what brought people here, and what keeps them here or makes them leave?",
          ]}
        />
        <Mistake>{"Giving only one reason for the location. Most settlements are where they are for several reasons that work together."}</Mistake>
      </>,
    ),
  },
  {
    title: "Interviews, drawings and the sketch map",
    content: slide(
      <>
        <Rule>{"Use interviews to find out how people see their settlement. Ask permission, write down open questions, and thank people. A sketch map is a simple drawing from above with a title, a north arrow, a key, labelled places and, if you can, a rough scale. Write the project in your own words and say where your information came from."}</Rule>
        <SketchMap
          title="Sketch map of an imagined settlement"
          places={['School', 'Shop', 'Clinic', 'Fields']}
          aria="A sketch map of an imagined settlement with a title, a river, a dashed road, a north arrow, and four labelled places: a school, a shop, a clinic and fields. A small key names the river and the road. It shows the parts that a good sketch map needs."
        />
        <Worked
          title={"Check your sketch map and interview"}
          steps={[
            "Does the sketch map have a title, a north arrow, a key and labels?",
            "Are the questions open, such as \"How has the settlement changed?\" rather than \"Is it a good place?\"",
            "Have you named your sources and written the work in your own words?",
          ]}
        />
        <Mistake>{"Copying text from a book or the internet. Use your own words, and give the names of the people you interviewed only if they agree."}</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          "Name three parts of the settlement project.",
          "Give two reasons why a settlement may be where it is.",
          "What must a sketch map have?",
          "Why should interview questions be open?",
        ]}
        answers={[
          "For example: describe the settlement, find landmarks and give reasons for the location.",
          "For example: water nearby and a mine that gives jobs.",
          "A title, a north arrow, a key and labelled places.",
          "Open questions give longer answers that show what people think.",
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is the Term 3 settlement project?",
    options: ["A group test about world cities", "A map of the whole of Africa", "A study of a settlement you know", "A story about a famous explorer of Africa"],
    answer: "A study of a settlement you know",
    explanation: "The project is an independent study of one settlement.",
  },
  {
    prompt: "Which of these is a part of the project?",
    options: ["Reasons for the location", "Drawing a map of the Moon", "Writing a poem about rain", "Listing the planets in order"],
    answer: "Reasons for the location",
    explanation: "The project asks you to suggest reasons for the location.",
  },
  {
    prompt: "Which of these is a natural landmark?",
    options: ["A bridge", "A church", "A shopping mall", "A river"],
    answer: "A river",
    explanation: "A river is a natural feature; the others are made by people.",
  },
  {
    prompt: "Which of these is a human-made landmark?",
    options: ["A mountain", "A school", "A waterfall", "A forest"],
    answer: "A school",
    explanation: "A school is built by people.",
  },
  {
    prompt: "Which reason helps to explain why a settlement began beside a river?",
    options: ["The river was dry", "The river blocked all roads", "The river gave water", "Rivers are made by towns"],
    answer: "The river gave water",
    explanation: "People need water to drink and to farm.",
  },
  {
    prompt: "What can make a settlement decline?",
    options: ["The jobs end", "A new school is built", "More shops are opened", "A new park is made"],
    answer: "The jobs end",
    explanation: "When the reason for growth ends, people may move away.",
  },
  {
    prompt: "What do we call a settlement that grows because gold is found nearby?",
    options: ["A fishing village", "A farming village", "A forestry camp", "A mining town"],
    answer: "A mining town",
    explanation: "Gold mining brings jobs and people.",
  },
  {
    prompt: "Which is an open interview question?",
    options: ["Do you like it here, yes or no?", "How has the place changed?", "Is the town big or small?", "Are you older than twenty?"],
    answer: "How has the place changed?",
    explanation: "Open questions invite longer answers.",
  },
  {
    prompt: "Why should you ask permission before an interview?",
    options: ["It makes the interview shorter", "It is a rule of mapmaking", "It is polite and fair", "It saves paper in the notebook"],
    answer: "It is polite and fair",
    explanation: "People have the right to agree or to say no.",
  },
  {
    prompt: "Which of these must a sketch map have?",
    options: ["A title and a north arrow", "A photograph of the mayor", "The names of all the people", "A list of prices"],
    answer: "A title and a north arrow",
    explanation: "A sketch map needs a title, a north arrow and a key.",
  },
  {
    prompt: "What does the key of a sketch map explain?",
    options: ["Who drew the map", "How long the project took", "Where the author lives", "What the symbols mean"],
    answer: "What the symbols mean",
    explanation: "The key explains the symbols used on the map.",
  },
  {
    prompt: "Why is it good to write the project in your own words?",
    options: ["It makes the project look longer", "It shows what you have learned", "It makes copying easier", "It leaves out the pictures"],
    answer: "It shows what you have learned",
    explanation: "Your own words show your own understanding.",
  },
  {
    prompt: "What should you do with information from a book or website?",
    options: ["Copy it without comment", "Change the date", "Say where it came from", "Hide the name of the book"],
    answer: "Say where it came from",
    explanation: "Name your sources.",
  },
  {
    prompt: "When should you start the settlement project?",
    options: ["Early in the term", "On the last day", "After the exams", "Never, it is optional"],
    answer: "Early in the term",
    explanation: "The project is handed in late in the term, so start early.",
  },
];

const SettlementInvestigationProject = () => (
  <CapsSubjectTopic
    title={"Investigating a Settlement"}
    subtitle={"A guide to the Term 3 project: describing, explaining, interviewing and drawing a sketch map"}
    learnSteps={learnSteps}
    task={"gr8-settlement-investigation-project-t3"}
    bank={bank}
    apiPath="/api/caps/geo"
  />
);

export default SettlementInvestigationProject;
