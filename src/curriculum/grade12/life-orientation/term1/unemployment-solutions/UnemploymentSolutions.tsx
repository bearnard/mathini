import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Who is counted as unemployed?",
    options: ["A person with no work who is looking", "A learner who is still at school today", "A person who has retired from work", "A person who has chosen not to look"],
    answer: "A person with no work who is looking",
    explanation: "The unemployed have no work but are able, willing and looking.",
  },
  {
    prompt: "Who is in the labour force?",
    options: ["People with a full-time job and a car", "Learners at school in Grade 12 this year", "Those with a job and those seeking one", "People who are too young to be hired"],
    answer: "Those with a job and those seeking one",
    explanation: "The labour force is the employed plus the unemployed who are looking.",
  },
  {
    prompt: "Which is a reason for unemployment?",
    options: ["A lot of sunshine in the year", "Too few jobs for the people", "A new school building in town", "A longer school holiday each year"],
    answer: "Too few jobs for the people",
    explanation: "When jobs are fewer than job seekers, some stay unemployed.",
  },
  {
    prompt: "A skills mismatch means that",
    options: ["workers have the same skills as each other", "the jobs pay a very high salary", "the skills on offer do not fit the jobs", "workers do not want to retire at all"],
    answer: "the skills on offer do not fit the jobs",
    explanation: "Unemployed people may lack the skills that employers need.",
  },
  {
    prompt: "Which is an impact of unemployment on a family?",
    options: ["A bigger house to live in", "More holidays during the year", "Poverty and stress at home", "A higher salary every month"],
    answer: "Poverty and stress at home",
    explanation: "Without income a family may struggle to buy food and pay bills.",
  },
  {
    prompt: "Which is an impact of unemployment on a country?",
    options: ["More tax for the state", "Lower prices for every product", "Fewer people needing help", "Less tax income and more crime"],
    answer: "Less tax income and more crime",
    explanation: "Fewer people earn and pay tax, and desperation can lead to crime.",
  },
  {
    prompt: "A labour force is 2 000 people and 400 are unemployed. What is the unemployment rate?",
    options: ["40%", "4%", "20%", "2%"],
    answer: "20%",
    explanation: "400 ÷ 2 000 = 0,2, which is 20%.",
  },
  {
    prompt: "A labour force is 1 200 people and 300 are unemployed. What is the unemployment rate?",
    options: ["30%", "12%", "3%", "25%"],
    answer: "25%",
    explanation: "300 ÷ 1 200 = 0,25, which is 25%.",
  },
  {
    prompt: "A school leaver works at a clinic for three months without pay to gain experience. What is this?",
    options: ["Volunteering", "A full-time job", "Entrepreneurship", "A bursary"],
    answer: "Volunteering",
    explanation: "Unpaid work for a good cause that builds experience is volunteering.",
  },
  {
    prompt: "Which is an example of entrepreneurship?",
    options: ["Working for a large company all year", "Applying for a bursary at a university", "Joining a trade union at work", "Running your own small business"],
    answer: "Running your own small business",
    explanation: "An entrepreneur starts a business and carries the risk.",
  },
  {
    prompt: "A food stall has sales of R9 000, stock of R5 000 and transport of R1 500. What is the profit?",
    options: ["R4 000", "R2 500", "R7 500", "R3 500"],
    answer: "R2 500",
    explanation: "R9 000 − R5 000 − R1 500 = R2 500.",
  },
  {
    prompt: "A stall makes a profit of R2 500 a month. What is the profit in twelve months at the same rate?",
    options: ["R25 000", "R12 500", "R2 512", "R30 000"],
    answer: "R30 000",
    explanation: "R2 500 × 12 = R30 000.",
  },
  {
    prompt: "When is a business idea financially viable?",
    options: ["When the business has a nice name", "When income is more than the costs", "When friends say it is a good idea", "When the shop is near a school"],
    answer: "When income is more than the costs",
    explanation: "A business is viable when it earns a profit.",
  },
  {
    prompt: "Which is a step from deciding to study to making an application?",
    options: ["Wait until the closing date has passed", "Throw away the application form today", "Ignore the cost of the course", "Check the entry requirements and dates"],
    answer: "Check the entry requirements and dates",
    explanation: "Checking requirements and dates is a first step towards a good application.",
  },
];

const UnemploymentSolutions = () => (
  <CapsSubjectTopic
    title="Unemployment and Innovative Solutions"
    subtitle="Reasons for and the impact of unemployment, volunteering, part-time work, entrepreneurship, informal jobs, and committing to a decision"
    learnSteps={learnSteps}
    task="gr12-unemployment-solutions-t1"
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default UnemploymentSolutions;
