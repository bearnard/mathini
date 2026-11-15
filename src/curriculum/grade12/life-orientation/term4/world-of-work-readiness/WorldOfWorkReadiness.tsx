import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'CVs and Application Documents',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">A CV should present relevant personal details, education, skills, experience and achievements clearly and honestly. Strong application documents are neat, accurate and tailored to the opportunity.</p>
      </div>
    ),
  },
  {
    title: 'Interview Preparation',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Interviews assess communication, confidence, suitability and readiness. Learners should prepare by researching the opportunity, practising common questions, dressing appropriately and answering honestly and clearly.</p>
      </div>
    ),
  },
  {
    title: 'Workplace Ethics and Professionalism',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Professional conduct includes punctuality, respect, honesty, responsibility, teamwork and appropriate communication. These habits matter because employers value reliability as much as technical skill.</p>
      </div>
    ),
  },
  {
    title: 'Contracts and Labour Rights',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Young adults entering work should understand that employment contracts explain duties, conditions and expectations. Labour rights protect workers from unfair treatment and support safe, lawful working conditions.</p>
      </div>
    ),
  },
];

const items = [
  {
    prompt: 'What is the main purpose of a CV?',
    options: [
      'To entertain employers',
      'To summarise your qualifications and suitability',
      'To replace an interview completely',
      'To list private family problems',
    ],
    answer: 1,
    explanation: 'A CV gives employers a clear overview of relevant information.',
  },
  {
    prompt: 'Which detail should always be true on a CV?',
    options: [
      'Skills and achievements',
      'References invented to impress',
      'False work experience',
      'Marks you hope to get',
    ],
    answer: 0,
    explanation: 'A CV must be honest and accurate.',
  },
  {
    prompt: 'How should a learner prepare for an interview?',
    options: [
      'Arrive without knowing the job',
      'Practise responses and research the opportunity',
      'Memorise false answers',
      'Wear anything without thinking',
    ],
    answer: 1,
    explanation: 'Preparation improves confidence and shows seriousness.',
  },
  {
    prompt: 'Which behaviour best shows professionalism?',
    options: [
      'Arriving late without explanation',
      'Communicating respectfully and meeting duties',
      'Ignoring instructions',
      'Arguing with everyone',
    ],
    answer: 1,
    explanation: 'Professionalism includes respect, reliability and responsible conduct.',
  },
  {
    prompt: 'Why is a work contract important?',
    options: [
      'It is just a formality with no value',
      'It explains duties and working conditions',
      'It only benefits the employer',
      'It removes labour rights',
    ],
    answer: 1,
    explanation: 'Contracts clarify expectations and conditions of employment.',
  },
  {
    prompt: 'What do labour rights aim to protect?',
    options: [
      'Workers against unfair treatment and unsafe conditions',
      'Employers from all questions',
      'Only permanent workers',
      'Dishonest behaviour',
    ],
    answer: 0,
    explanation: 'Labour rights help protect fairness, dignity and safety at work.',
  },
  {
    prompt: 'Which answer is strongest in an interview?',
    options: [
      'A vague answer with no example',
      'A clear, honest response linked to your skills',
      'A copied answer you do not understand',
      'A joke instead of a response',
    ],
    answer: 1,
    explanation: 'Clear, honest answers help interviewers judge suitability.',
  },
  {
    prompt: 'What should a learner do before submitting an application?',
    options: [
      'Send it without checking',
      'Review spelling, accuracy and relevance',
      'Leave contact details out',
      'Use informal slang throughout',
    ],
    answer: 1,
    explanation: 'Careful checking improves the quality and professionalism of the application.',
  },
] as const;

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.prompt,
  options: [...item.options],
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const WorldOfWorkReadiness = () => (
  <CapsSubjectTopic
    title='World of Work Readiness'
    subtitle='CVs, interviews, workplace ethics, contracts, labour rights and professional conduct.'
    learnSteps={learnSteps}
    task='gr12-world-of-work-readiness-t4'
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default WorldOfWorkReadiness;
