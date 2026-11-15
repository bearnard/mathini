import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { CvSketch } from '@/components/diagrams/lo/LoPictures';

export const cvSections = ['Personal details', 'Education', 'Skills', 'Experience', 'References'] as const;
export const badLine = 'hi bro, i want the job. send me the money details';
export const goodLine = 'Dear Ms Naidoo, I would like to apply for the cashier position you advertised.';
export const checklist = ['Spelling and grammar', 'Accurate details', 'Relevant to this opportunity', 'Contact details included', 'Formal, professional tone'] as const;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const text = 'text-lg leading-8 text-slate-600';

export const learnSteps: LearnStep[] = [
  {
    title: 'The CV: a clear, honest summary',
    content: slide(
      <>
        <p className={text}>A CV summarises your skills and qualifications so that an employer gets a clear overview of relevant information. It presents personal details, education, skills, experience and achievements clearly. It is not your whole life story, not a list of hobbies and family problems, and it never replaces an interview.</p>
        <CvSketch sections={cvSections} aria="A one-page CV with five labelled sections: personal details, education, skills, experience and references." />
        <Rule>A CV must be honest, accurate, neat and relevant to the opportunity.</Rule>
        <Mistake>Inventing references or false work experience, or listing marks you hope to get. Everything on a CV must be true.</Mistake>
      </>,
    ),
  },
  {
    title: 'Application documents: check before you send',
    content: slide(
      <>
        <p className={text}>Strong application documents are neat, accurate and tailored to the opportunity. Before you submit anything, review spelling, accuracy and relevance, use a formal tone and make sure your contact details are included. Send it without checking and one careless mistake can cost you the chance.</p>
        <Worked
          title="Fix the opening line"
          steps={[
            <>Weak: &ldquo;{badLine}&rdquo;. It is informal and slangy, it names no position and it asks about money.</>,
            <>Better: &ldquo;{goodLine}&rdquo;. It is formal and it names the position.</>,
            <>Then run the checklist: {checklist.join('; ').toLowerCase()}.</>,
          ]}
        />
        <Mistake>Using informal slang, leaving out contact details, or sending the application without checking it first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Interview preparation',
    content: slide(
      <>
        <p className={text}>An interview assesses communication, confidence, suitability and readiness. Prepare by researching the employer, practising answers to common questions, dressing appropriately and arriving early. Answer clearly and honestly. A strong answer is clear, honest and linked to your skills, with an example if you can.</p>
        <Rule>Prepare, practise, be honest, and link your answer to your skills.</Rule>
        <Worked
          title="Answering &ldquo;Why should we choose you?&rdquo;"
          steps={[
            <>Claim: &ldquo;I am reliable.&rdquo;</>,
            <>Example: &ldquo;I helped run a school tuck-shop for a year and was never late for my shift.&rdquo;</>,
            <>Link: &ldquo;That is why I would be dependable as a cashier.&rdquo; It is honest, specific and relevant.</>,
          ]}
        />
        <Mistake>Memorising a script, giving vague answers, joking instead of answering, or skipping preparation and relying on charm.</Mistake>
      </>,
    ),
  },
  {
    title: 'Workplace ethics and professionalism',
    content: slide(
      <>
        <p className={text}>Professional conduct includes punctuality, respect, honesty, responsibility, teamwork and appropriate communication. Employers value reliability as much as technical skill. Meeting your duties, following instructions and communicating respectfully show professionalism. Arriving late without explanation, ignoring instructions or arguing with everyone do not.</p>
        <Rule>Professionalism is respect, reliability and responsible conduct.</Rule>
        <Worked
          title="Running late for a shift"
          steps={[
            <>You will be late because a taxi broke down.</>,
            <>Professional: contact your supervisor early, explain honestly and ask how to catch up.</>,
            <>Unprofessional: arrive late and say nothing, or blame others.</>,
          ]}
        />
        <Mistake>Thinking skill is enough. Skilled workers who are rude or unreliable are hard to employ.</Mistake>
      </>,
    ),
  },
  {
    title: 'Contracts and labour rights',
    content: slide(
      <>
        <p className={text}>An employment contract explains duties, working conditions and expectations, so it is not a formality and it does not remove your labour rights. Labour rights protect workers from unfair treatment and support safe, lawful working conditions. In South Africa, laws such as the Basic Conditions of Employment Act and the Labour Relations Act set out these protections.</p>
        <Rule>Read your contract before signing. Labour rights protect workers from unfair treatment and unsafe work.</Rule>
        <Worked
          title="Before you sign a contract"
          steps={[
            <>Read what your duties and working conditions are.</>,
            <>Check that the contract matches what you were told at the interview.</>,
            <>Ask about anything unclear before you sign. Keep your copy.</>,
          ]}
        />
        <Mistake>Believing a contract only benefits the employer. It records expectations for both sides.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the main purpose of a CV, and what must be true about its content?</>,
          <>Name three things to do before submitting an application.</>,
          <>How should you prepare for an interview?</>,
          <>Why is a contract important, and what do labour rights protect?</>,
        ]}
        answers={[
          <>To summarise your skills and qualifications. Everything must be honest and accurate.</>,
          <>Review spelling, accuracy and relevance (also: formal tone, contact details).</>,
          <>Research the employer, practise answers, dress appropriately and answer honestly.</>,
          <>A contract explains duties and working conditions. Labour rights protect workers from unfair treatment and unsafe work.</>,
        ]}
      />,
    ),
  },
];

