import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { Compare, Terms } from '../../../../../components/diagrams/science/ScienceBlocks';
import { FlowDiagram } from '../../../../../components/diagrams/science/SciencePictures4';
import { PAT_STEPS } from '../../../../../components/diagrams/science/steps';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Technology systems',
    content: slide(
      <>
        <Rule>
          A technology system is made of mechanical, electrical and material parts working towards a goal. Systems thinking helps you see how the different technologies interact in real-world applications.
        </Rule>
        <FlowDiagram
          id="tsys"
          title="A technology system"
          desc="Mechanical, electrical and material parts all work towards the goal of the system."
          nodes={[
            { id: 'mech', label: 'mechanical parts', x: 36, y: 24, color: '#7dd3fc' },
            { id: 'elec', label: 'electrical parts', x: 124, y: 24, color: '#fde047' },
            { id: 'mat', label: 'material parts', x: 80, y: 84, color: '#6ee7b7' },
            { id: 'goal', label: 'the goal', x: 80, y: 54, color: '#f8fafc' },
          ]}
          edges={[
            { from: 'mech', to: 'goal', label: '' },
            { from: 'elec', to: 'goal', label: '' },
            { from: 'mat', to: 'goal', label: '' },
          ]}
        />
        <Worked
          title="A bicycle-powered phone charger"
          steps={[<>Mechanical: pedals and gears turn a generator.</>, <>Electrical: the generator and wires carry the current.</>, <>Material: the metal frame and plastic case. All the parts work towards one goal: charging a phone.</>]}
        />
        <Mistake>Studying each part alone. A system works because its parts are chosen to fit together.</Mistake>
      </>,
    ),
  },
  {
    title: 'Sustainability and money',
    content: slide(
      <>
        <Rule>
          Sustainable design uses fewer resources and makes less waste and pollution. Responsible environmental choices often save money in the long run.
        </Rule>
        <Compare
          left={{ title: 'Environment', tone: 'emerald', rows: ['use fewer resources', 'make less waste and pollution', 'protects the place for the future'] }}
          right={{ title: 'Economy', tone: 'amber', rows: ['lower energy and material bills', 'less money spent on clean-up', 'product that lasts longer'] }}
        />
        <Worked
          title="A solar water heater"
          steps={[<>It uses sunlight instead of electricity: fewer resources and less pollution.</>, <>It lowers the household electricity bill over many years.</>, <>So the environmental choice also saves money in the long run.</>]}
        />
        <Mistake>Thinking green choices always cost more. Sustainable technology balances environmental protection with economic viability.</Mistake>
      </>,
    ),
  },
  {
    title: 'Safety and communication',
    content: slide(
      <>
        <Rule>
          Safety protects users from harm and makes products dependable. Clear communication helps people understand and use designs well.
        </Rule>
        <Terms
          rows={[
            ['Safety', 'find the hazards and add safeguards, such as guards, insulation and warning labels'],
            ['Communication', 'effective diagrams, instructions and specifications enable correct use'],
          ]}
        />
        <Worked
          title="A drill"
          steps={[<>Hazards: a spinning bit and a live cable.</>, <>Safeguards: a guard, insulation and a safety label.</>, <>Clear instructions and diagrams help people use the drill correctly.</>]}
        />
        <Mistake>Adding safety as an afterthought. Design must identify hazards from the start and put safeguards in place to prevent injuries.</Mistake>
      </>,
    ),
  },
  {
    title: 'PAT projects and exam answers',
    content: slide(
      <>
        <Rule>
          A complete PAT project includes a design brief, research, sketches, a model, test results and an evaluation. In exam-style responses, use neat labelled diagrams, show calculations and give reasons for choices.
        </Rule>
        <NumberedSteps steps={PAT_STEPS} tone="blue" label="What a PAT project contains" />
        <Worked
          title="Revise all four terms"
          steps={[<>Review the key ideas of each term.</>, <>Practise sums, redraw designs and do past papers.</>, <>Active revision strategies deepen understanding and prepare you for varied exam formats.</>]}
        />
        <Mistake>Giving an answer with no diagram, no working and no reasons. Structured, detailed responses earn the marks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a technology system? Why does technology need to be sustainable?</>,
          <>Why must safety be considered when designing technology? How does clear communication influence whether people adopt a technology?</>,
          <>What should be in a finished PAT project? How should technical information be presented in an exam answer?</>,
          <>What is the relationship between environmental and economic considerations? How should you approach revision of all four terms?</>,
        ]}
        answers={[
          <>Mechanical, electrical and material parts working towards a goal. Sustainable design uses fewer resources and makes less waste and pollution.</>,
          <>Safety protects users from harm and makes products dependable. Clear communication helps people understand and use designs well.</>,
          <>Design brief, research, sketches, model, test results and evaluation. Use neat labelled diagrams, show calculations and give reasons for choices.</>,
          <>Responsible environmental choices often save money in the long run. Review key ideas, practise sums, redraw designs and do past papers.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a technology system?',
    options: ['mechanical, electrical and material parts working towards a goal', 'one single tool that is used for just one task only', 'a computer program that has no parts that you can touch', 'a drawing of a product that has not been made yet'],
    answer: 'mechanical, electrical and material parts working towards a goal',
    explanation: 'Systems thinking helps understand how different technologies interact in real-world applications.',
  },
  {
    prompt: 'Why is sustainability important in technology?',
    options: ['sustainable design uses fewer resources and makes less waste and pollution', 'sustainable design always costs more and works less well', 'sustainable design uses only new materials and never reuses', 'sustainable design makes products last only a short time'],
    answer: 'sustainable design uses fewer resources and makes less waste and pollution',
    explanation: 'Sustainable technology ensures long-term environmental and economic viability.',
  },
  {
    prompt: 'What is the importance of safety in technology design?',
    options: ['safety protects users from harm and makes products dependable', 'safety makes products look more modern to buyers', 'safety is the job of the user and not the designer', 'safety is needed only when making large machines'],
    answer: 'safety protects users from harm and makes products dependable',
    explanation: 'Design must identify hazards and implement safeguards to prevent injuries.',
  },
  {
    prompt: 'How does clear communication affect technology adoption?',
    options: ['clear communication helps people understand and use designs well', 'clear communication makes designs cheaper to build', 'clear communication replaces the need to test a design', 'clear communication matters only to the designer'],
    answer: 'clear communication helps people understand and use designs well',
    explanation: 'Effective diagrams, instructions, and specifications enable correct use of technology.',
  },
  {
    prompt: 'What should a complete PAT project include?',
    options: ['design brief, research, sketches, model, test results and evaluation', 'the final product and the receipt for the materials', 'the drawings and a list of the tools used', 'a class photograph and the marks of the teacher'],
    answer: 'design brief, research, sketches, model, test results and evaluation',
    explanation: 'Comprehensive documentation demonstrates design thinking and problem-solving across the project.',
  },
  {
    prompt: 'How do you present technical information in exam-style responses?',
    options: ['use neat labelled diagrams, show calculations and give reasons for choices', 'write only the final answer so that no time is wasted', 'draw only rough sketches with no labels at all', 'copy the question and add a long list of facts'],
    answer: 'use neat labelled diagrams, show calculations and give reasons for choices',
    explanation: 'Structured, detailed responses demonstrate comprehensive understanding and earn maximum marks.',
  },
  {
    prompt: 'What is the relationship between environmental and economic considerations in sustainable technology?',
    options: ['responsible environmental choices often save money in the long run', 'environmental choices always cost more in the long run', 'environmental choices make no difference to costs', 'making money always needs more pollution to be made'],
    answer: 'responsible environmental choices often save money in the long run',
    explanation: 'Sustainable design balances environmental protection with economic viability.',
  },
  {
    prompt: 'How should you approach revision of all four terms of technology content?',
    options: ['review key ideas, practise sums, redraw designs and do past papers', 'read through the notes once and then skip past papers', 'study only the one topic that you enjoy the most', 'learn the textbook by heart without any practising'],
    answer: 'review key ideas, practise sums, redraw designs and do past papers',
    explanation: 'Active revision strategies deepen understanding and prepare you for varied exam formats.',
  },
];

const TechnologySociety = () => (
  <CapsSubjectTopic
    title="Technology in Society and Exam Consolidation"
    subtitle="Systems integration, sustainability, safety, communication of designs, PAT review, exam-style responses"
    learnSteps={learnSteps}
    task="gr9-technology-society-t4"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default TechnologySociety;
