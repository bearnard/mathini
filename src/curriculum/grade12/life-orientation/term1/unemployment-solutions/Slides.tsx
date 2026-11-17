import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';
import { STALL, randNb, stallProfit, unemploymentRate } from '@/components/diagrams/lo/lo12Helpers';

// Every number below comes from lo12Helpers.ts (tested in lo12Helpers.test.ts and g12LoWaveA.test.ts).
const profit = stallProfit(STALL);
const rate = unemploymentRate(400, 2000);
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Why unemployment happens and what it costs',
    content: slide(
      <>
        <Rule>A person is unemployed when they have no work but are able and willing to work and are looking for it. The unemployment rate is the share of the labour force that is unemployed. The labour force is everyone who has a job plus everyone who is looking for one.</Rule>
        <KeyTable
          title="Reasons and impact"
          head={['Reasons for', 'Impact of']}
          aria="A table of reasons for unemployment and the impact of unemployment. Reasons: too few jobs for the number of people, a mismatch between skills and the jobs on offer, a slow economy, and a lack of work experience. Impact on the individual: poverty, stress and loss of hope. Impact on the community and country: more crime and less tax income."
          rows={[
            ['Too few jobs', 'Poverty in the home'],
            ['Skills mismatch', 'Stress and loss of hope'],
            ['Slow economy', 'More crime in the community'],
            ['No work experience', 'Less tax for the country'],
          ]}
        />
        <Worked
          steps={[
            `A town has a labour force of 2 000 people. 400 of them are looking for work and cannot find it.`,
            `Unemployment rate = 400 ÷ 2 000 = ${rate}%.`,
          ]}
        />
        <Mistake>Counting a learner who is still at school, or a person who has stopped looking, as part of the labour force. Only people who have a job or are looking for work are counted.</Mistake>
      </>,
    ),
  },
  {
    title: 'Innovative solutions to unemployment',
    content: slide(
      <>
        <Rule>When formal jobs are scarce, people can create their own opportunities. CAPS names volunteering, part-time jobs, community work, entrepreneurship and informal jobs.</Rule>
        <KeyTable
          title="Ways of working that are not a full-time job"
          head={['Option', 'What it gives']}
          aria="A table of options when jobs are scarce. Volunteering: experience and references, but no pay. Part-time job: some income and experience. Community work: skills and a link to the community. Entrepreneurship: your own business with income and risk. Informal job: quick income, but less security."
          rows={[
            ['Volunteering', 'Experience and references, no pay'],
            ['Part-time job', 'Some income and experience'],
            ['Community work', 'Skills and local links'],
            ['Entrepreneurship', 'Your own business: income and risk'],
            ['Informal job', 'Quick income, less security'],
          ]}
        />
        <Worked
          steps={[
            <>A school leaver volunteers at a clinic for three months. The clinic manager writes a reference, which helps with a later job application.</>,
            <>A person sells airtime and snacks outside the station. That is an informal job and also a very small business.</>,
          ]}
        />
        <Mistake>Thinking that unpaid work is a waste of time. Volunteering and community work build skills, experience and contacts that employers value.</Mistake>
      </>,
    ),
  },
  {
    title: 'Is a small business viable?',
    content: slide(
      <>
        <Rule>An idea is financially viable if the income is more than the costs, so that there is a profit. It is socially viable if the community needs it and benefits from it. A business owner must also know about SARS tax obligations, which the next lesson explains.</Rule>
        <KeyTable
          title="A food stall for one month"
          head={['Item', 'Amount']}
          aria={`A food stall for one month. Sales ${randNb(STALL.sales)}. Stock ${randNb(STALL.stock)}. Transport ${randNb(STALL.transport)}. Profit ${randNb(profit)}.`}
          rows={[
            ['Sales', randNb(STALL.sales)],
            ['Stock', randNb(STALL.stock)],
            ['Transport', randNb(STALL.transport)],
            ['Profit', randNb(profit)],
          ]}
        />
        <Worked
          steps={[
            `Profit = sales − stock − transport = ${randNb(STALL.sales)} − ${randNb(STALL.stock)} − ${randNb(STALL.transport)} = ${randNb(profit)}.`,
            `In twelve months at this rate: ${randNb(profit)} × 12 = ${randNb(profit * 12)}.`,
            <>The stall is socially viable if the neighbours want cheap, healthy food close to home.</>,
          ]}
        />
        <Mistake>Counting the sales as profit. Stock, transport and other costs must be subtracted first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Committing to a decision',
    content: slide(
      <>
        <Rule>A decision about a job or a course only becomes real when you act on it. Acting means finding the opportunity, checking the requirements, and handling funds, forms, accommodation and travel.</Rule>
        <KeyTable
          title="Steps from a decision to an application"
          head={['Step', 'Example']}
          aria="A table of the steps from a decision to an application. Find opportunities: newspapers, the internet, the career office. Check the requirements: marks, subjects, closing date. Plan funds: a bursary or a student loan. Complete the forms and send documents. Plan accommodation and travel."
          rows={[
            ['Find opportunities', 'Newspapers, internet, career office'],
            ['Check the requirements', 'Marks, subjects, closing date'],
            ['Plan the funds', 'Bursary, loan, savings'],
            ['Complete the forms', 'Certified copies of documents'],
            ['Plan to live and travel', 'Residence, transport costs'],
          ]}
        />
        <Worked
          steps={[
            <>A learner wants to study nursing. She finds the college, checks that her subjects and marks meet the requirements, and notes the closing date.</>,
            <>She applies for a bursary at the same time, and arranges residence and transport before the course starts.</>,
          ]}
        />
        <Mistake>Waiting until after the closing date. A late application is usually not considered.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two reasons for unemployment.</>,
          <>400 of 2 000 people in the labour force are unemployed. What is the rate?</>,
          <>A stall has sales of {randNb(STALL.sales)}, stock of {randNb(STALL.stock)} and transport of {randNb(STALL.transport)}. What is the profit?</>,
          <>Name two steps between deciding to study and being accepted.</>,
        ]}
        answers={[
          <>Any two of: too few jobs, a skills mismatch, a slow economy, no work experience.</>,
          <>400 ÷ 2 000 = <strong>{rate}%</strong>.</>,
          <>{randNb(STALL.sales)} − {randNb(STALL.stock)} − {randNb(STALL.transport)} = <strong>{randNb(profit)}</strong>.</>,
          <>Any two of: check the requirements, plan the funds, complete the forms, plan accommodation and travel.</>,
        ]}
      />,
    ),
  },
];
