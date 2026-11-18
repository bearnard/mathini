import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import { formatRand } from '../../../../../components/diagrams/maths/mathsHelpers';
import * as b from '../../../../../components/diagrams/business10/bus10';

// Numbers come from bus10.ts (tested in bus10.test.ts and g10BsGaps.test.ts). All data are imaginary teaching data; Acts are named only as areas of law.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'SWOT analysis',
    content: slide(
      <>
        <Rule>A SWOT analysis looks at a business or an idea in four parts. Strengths and weaknesses are internal: they come from inside the business, such as skilled staff or old equipment. Opportunities and threats are external: they come from the environment, such as a new road or a new competitor. A SWOT helps an entrepreneur to build on strengths, fix weaknesses, use opportunities and prepare for threats.</Rule>
        <InfoTable
          cols={[{ title: 'Part', w: 24 }, { title: 'Source', w: 22 }, { title: 'Example', w: 54 }]}
          rows={[
            ['Strengths', 'inside', 'a skilled baker, a good name'],
            ['Weaknesses', 'inside', 'old oven, little cash'],
            ['Opportunities', 'outside', 'a new factory nearby brings customers'],
            ['Threats', 'outside', 'a big supermarket opens next door'],
          ]}
          aria="A SWOT table. Strengths: inside the business, such as a skilled baker and a good name. Weaknesses: inside, such as an old oven and little cash. Opportunities: outside, such as a new factory nearby that brings customers. Threats: outside, such as a big supermarket opening next door."
        />
        <Worked
          title="Sort the points"
          steps={[
            '"Our staff are well trained": a strength, because it is internal and helpful.',
            '"Electricity prices are rising": a threat, because it is external and harmful.',
            '"A new taxi rank opens near our shop": an opportunity, because it is external and helpful.',
          ]}
        />
        <Mistake>Putting an external point under strengths or weaknesses. If it comes from outside the business, it is an opportunity or a threat.</Mistake>
      </>,
    ),
  },
  {
    title: 'Research instruments',
    content: slide(
      <>
        <Rule>Before starting a business an entrepreneur does market research. Primary research collects new information from the people concerned, using a questionnaire, an interview or observation. Secondary research uses information that already exists, such as reports, books or the internet. Ask a fair sample of people, and follow research ethics: be honest and keep personal details private.</Rule>
        <InfoTable
          cols={[{ title: 'Instrument', w: 30 }, { title: 'How it works', w: 40 }, { title: 'Type', w: 30 }]}
          rows={[
            ['Questionnaire', 'a list of written questions', 'primary'],
            ['Interview', 'questions asked face to face', 'primary'],
            ['Observation', 'watching what people do', 'primary'],
            ['Reports, internet', 'reading existing sources', 'secondary'],
          ]}
          aria="A table of research instruments. Questionnaire: a list of written questions, primary research. Interview: questions asked face to face, primary research. Observation: watching what people do, primary research. Reports and the internet: reading existing sources, secondary research."
        />
        <Worked
          title="Read a survey"
          steps={[
            `A questionnaire asks ${b.SURVEY.asked} people if they would buy from a new bakery, and ${b.SURVEY.yes} say yes.`,
            `Percentage who say yes = ${b.SURVEY.yes} ÷ ${b.SURVEY.asked} × 100 = ${b.percentYes()}%.`,
            'This suggests that demand is strong, but a larger sample would be more reliable.',
          ]}
        />
        <Mistake>Asking only friends and family. A biased sample gives results that do not show what the real market thinks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Creative thinking techniques',
    content: slide(
      <>
        <Rule>Creative techniques help to find new ideas and solve problems. Brainstorming collects many ideas without judging them first. A mind map links ideas around a central problem. SCAMPER asks questions such as substitute, combine, adapt, modify, put to another use, eliminate and reverse. Force-field analysis lists the forces that drive a change and the forces that hold it back. Indigenous knowledge, such as local plants or crafts, can also give business ideas.</Rule>
        <InfoTable
          cols={[{ title: 'Technique', w: 30 }, { title: 'Use', w: 70 }]}
          rows={[
            ['Brainstorming', 'many ideas, no judging at first'],
            ['Mind map', 'ideas linked around one centre'],
            ['SCAMPER', 'questions to change an existing product'],
            ['Force-field', 'forces for and against a change'],
            ['Indigenous knowledge', 'local skills and resources as ideas'],
          ]}
          aria="A table of creative techniques. Brainstorming: many ideas without judging at first. Mind map: ideas linked around one centre. SCAMPER: questions to change an existing product. Force-field: forces for and against a change. Indigenous knowledge: local skills and resources as ideas."
        />
        <Worked
          title="Apply a technique"
          steps={[
            'SCAMPER "adapt": a baker adapts a traditional recipe to make gluten-free bread.',
            'Brainstorming: the team writes ten ideas for a new product before any is rejected.',
            'Indigenous knowledge: a community uses a local fruit to make jam and sells it at a market.',
          ]}
        />
        <Mistake>Rejecting ideas during brainstorming. First collect ideas, then judge them afterwards.</Mistake>
      </>,
    ),
  },
  {
    title: 'Force-field analysis and viability',
    content: slide(
      <>
        <Rule>In a force-field analysis give each driving force (helps the idea) and each restraining force (blocks it) a score from 1 to 5, then add each side. If the driving total is clearly bigger, the idea is more likely to succeed, but the numbers must be backed by evidence. A viable opportunity is one that can make a profit, that can be done with the resources available, and that has enough customers.</Rule>
        <InfoTable
          cols={[{ title: 'Driving forces', w: 50 }, { title: 'Restraining forces', w: 50 }]}
          rows={[
            [`Many customers: ${b.DRIVING[0]}`, `High rent: ${b.RESTRAINING[0]}`],
            [`Low cost of stock: ${b.DRIVING[1]}`, `Competition: ${b.RESTRAINING[1]}`],
            [`Good location: ${b.DRIVING[2]}`, ''],
            [`Total: ${b.sum(b.DRIVING)}`, `Total: ${b.sum(b.RESTRAINING)}`],
          ]}
          aria={`A force-field analysis. Driving forces: many customers ${b.DRIVING[0]}, low cost of stock ${b.DRIVING[1]} and good location ${b.DRIVING[2]}, total ${b.sum(b.DRIVING)}. Restraining forces: high rent ${b.RESTRAINING[0]} and competition ${b.RESTRAINING[1]}, total ${b.sum(b.RESTRAINING)}.`}
        />
        <Worked
          title="Weigh the forces"
          steps={[
            `Driving total = ${b.DRIVING.join(' + ')} = ${b.sum(b.DRIVING)}.`,
            `Restraining total = ${b.RESTRAINING.join(' + ')} = ${b.sum(b.RESTRAINING)}.`,
            `The driving forces are bigger by ${b.sum(b.DRIVING) - b.sum(b.RESTRAINING)}, so the idea looks promising, subject to evidence and a business plan.`,
          ]}
        />
        <Mistake>Relying on the score alone. The scores are opinions, so check them with research before you invest.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between a strength and an opportunity?</>,
          <>Name one primary research instrument.</>,
          <>Of 50 people asked, 30 say yes. What percentage is this?</>,
          <>What does SCAMPER help you to do?</>,
        ]}
        answers={[
          <>A strength is internal; an opportunity comes from outside the business.</>,
          <>For example a questionnaire, interview or observation.</>,
          <>60%.</>,
          <>Change an existing product or idea by asking questions such as adapt or combine.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "In a SWOT analysis, which two parts are internal?",
    options: ["Opportunities and threats", "Strengths and opportunities", "Strengths and weaknesses", "Weaknesses and threats"],
    answer: "Strengths and weaknesses",
    explanation: "They come from inside the business.",
  },
  {
    prompt: "In a SWOT analysis, which two parts are external?",
    options: ["Opportunities and threats", "Strengths and weaknesses", "Strengths and threats", "Weaknesses and opportunities"],
    answer: "Opportunities and threats",
    explanation: "They come from the environment.",
  },
  {
    prompt: "A big supermarket opens next door to a small shop. Which part of a SWOT is this?",
    options: ["A strength", "An opportunity", "A weakness", "A threat"],
    answer: "A threat",
    explanation: "It is external and harmful.",
  },
  {
    prompt: "A new taxi rank opens near a shop. Which part of a SWOT is this?",
    options: ["A weakness", "An opportunity", "A strength", "A threat"],
    answer: "An opportunity",
    explanation: "It is external and helpful.",
  },
  {
    prompt: "\"Our staff are well trained.\" Which part of a SWOT is this?",
    options: ["A threat", "A strength", "An opportunity", "A weakness"],
    answer: "A strength",
    explanation: "It is internal and helpful.",
  },
  {
    prompt: "What is primary research?",
    options: ["Reading only old reports", "Guessing the final answer", "Copying a competitor's sales", "Collecting new information from people"],
    answer: "Collecting new information from people",
    explanation: "Questionnaires, interviews and observation are primary.",
  },
  {
    prompt: "Which instrument is a list of written questions?",
    options: ["A questionnaire", "An interview", "Observation", "A report"],
    answer: "A questionnaire",
    explanation: "It can be given to many people.",
  },
  {
    prompt: "What is secondary research?",
    options: ["Asking brand new questions", "Watching customers in a shop", "Using information that already exists", "Interviewing your own staff"],
    answer: "Using information that already exists",
    explanation: "Reports, books and the internet are secondary sources.",
  },
  {
    prompt: "Of 50 people asked, 40 say they would buy from a new bakery. What percentage is this?",
    options: ["40%", "20%", "90%", "80%"],
    answer: "80%",
    explanation: "40 / 50 x 100 = 80%.",
  },
  {
    prompt: "Why is asking only friends and family a poor sample?",
    options: ["It is too large", "The sample is biased", "It costs too much", "It is illegal"],
    answer: "The sample is biased",
    explanation: "Results will not show the real market.",
  },
  {
    prompt: "What is brainstorming?",
    options: ["Collecting many ideas before judging", "Rejecting every idea at once", "Choosing a single idea at once", "Copying the idea of a rival"],
    answer: "Collecting many ideas before judging",
    explanation: "Judge the ideas afterwards.",
  },
  {
    prompt: "Which technique asks questions such as adapt, combine and eliminate?",
    options: ["A balance sheet", "A pie chart", "SCAMPER", "A cash book"],
    answer: "SCAMPER",
    explanation: "SCAMPER helps to change existing products.",
  },
  {
    prompt: "Driving forces add up to 9 and restraining forces to 5. What does a force-field analysis suggest?",
    options: ["The idea must be dropped", "The forces are equal", "The idea looks promising", "No decision is possible"],
    answer: "The idea looks promising",
    explanation: "The driving forces are bigger by 4.",
  },
  {
    prompt: "What makes an opportunity viable?",
    options: ["It can make a profit with its resources", "It sounds very exciting to others", "A friend of the owner likes it", "It is the cheapest one to start"],
    answer: "It can make a profit with its resources",
    explanation: "It also needs enough customers.",
  },
];

const SwotResearchCreative = () => (
  <CapsSubjectTopic
    title="SWOT, Research and Creative Techniques"
    subtitle="SWOT analysis, research instruments, creative thinking techniques and force-field analysis"
    learnSteps={learnSteps}
    task="gr10-swot-research-creative-t3"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={10}
  />
);

export default SwotResearchCreative;
