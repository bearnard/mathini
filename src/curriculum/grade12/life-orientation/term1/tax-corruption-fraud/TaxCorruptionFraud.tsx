import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Which body collects tax in South Africa?",
    options: ["The Reserve Bank", "The Public Protector", "The Department of Basic Education", "SARS"],
    answer: "SARS",
    explanation: "The South African Revenue Service collects taxes for the government.",
  },
  {
    prompt: "What does the government use tax to pay for?",
    options: ["Birthday parties for the officials", "Holidays for the state president", "Services like schools and clinics", "Private cars for the ministers"],
    answer: "Services like schools and clinics",
    explanation: "Tax pays for public services and social grants.",
  },
  {
    prompt: "What is PAYE?",
    options: ["A bank loan for a very small new business", "Tax taken from a salary by an employer", "A fee paid at a public clinic", "A prize for good work at school"],
    answer: "Tax taken from a salary by an employer",
    explanation: "PAYE is paid to SARS by the employer on the employee's behalf.",
  },
  {
    prompt: "Who deducts PAYE from an employee's salary?",
    options: ["The employer", "The learner", "The bank manager", "The traffic officer"],
    answer: "The employer",
    explanation: "The employer deducts PAYE and pays it to SARS.",
  },
  {
    prompt: "A food-stall owner earns a profit above the tax threshold. What must the owner do?",
    options: ["Hide the profit from SARS", "Declare the profit to SARS", "Spend the profit on the same day", "Give the profit to a friend"],
    answer: "Declare the profit to SARS",
    explanation: "Self-employed people must declare their profit and pay the tax due.",
  },
  {
    prompt: "What is it called when a person deliberately does not declare income to SARS?",
    options: ["Tax relief", "Tax evasion", "A tax refund", "A tax return"],
    answer: "Tax evasion",
    explanation: "Not declaring income is tax evasion, which is a crime.",
  },
  {
    prompt: "What is a tax return?",
    options: ["A refund of the school fees you paid", "A letter that comes from the bank", "A form of income and tax for a year", "A receipt that comes from the shop"],
    answer: "A form of income and tax for a year",
    explanation: "A return lists a taxpayer's income and tax for the year.",
  },
  {
    prompt: "What is corruption?",
    options: ["Misuse of power for personal gain", "A gift between two very close friends", "A fair interview for a new job", "Paying the bus fare to town"],
    answer: "Misuse of power for personal gain",
    explanation: "Corruption is the abuse of a position of power for private gain.",
  },
  {
    prompt: "Which is an example of bribery?",
    options: ["Paying the licence fee at the front counter", "Paying an official for a quick licence", "Reading a licence form at home", "Waiting for a licence in a queue"],
    answer: "Paying an official for a quick licence",
    explanation: "A bribe is money paid to an official to get an unfair benefit.",
  },
  {
    prompt: "What is fraud?",
    options: ["A mistake in adding up a column", "An honest error made on a form", "A cheap price in a local shop", "Deliberate deception for money"],
    answer: "Deliberate deception for money",
    explanation: "Fraud involves knowingly lying or cheating for gain.",
  },
  {
    prompt: "Which is an example of fraud?",
    options: ["A clerk sends a false invoice", "A clerk pays a real invoice on time", "A clerk files the receipts in a box", "A clerk adds a column twice by mistake"],
    answer: "A clerk sends a false invoice",
    explanation: "A false invoice is deliberate deception.",
  },
  {
    prompt: "How does corruption harm a community?",
    options: ["The clinic gets more medicine", "The roads are built much faster", "The school gets many more books", "Services are poorer for people"],
    answer: "Services are poorer for people",
    explanation: "Money lost to corruption cannot pay for services.",
  },
  {
    prompt: "How does fraud harm a company?",
    options: ["It loses money, jobs and trust", "It earns a much higher profit", "It pays less tax with approval", "It gains a better reputation"],
    answer: "It loses money, jobs and trust",
    explanation: "Fraud takes money from a company and damages its reputation.",
  },
  {
    prompt: "Where can a person report corruption?",
    options: ["To the shop owner who lives in the next street", "To a friend who sits next to you", "To the police or the anti-corruption hotline", "To the weather service at the airport"],
    answer: "To the police or the anti-corruption hotline",
    explanation: "Corruption can be reported to the police or to the hotline, and the caller may stay anonymous.",
  },
];

const TaxCorruptionFraud = () => (
  <CapsSubjectTopic
    title="SARS Tax Basics, Corruption and Fraud"
    subtitle="Why tax is paid, basic tax obligations, and how corruption and fraud harm people, companies, communities and the country"
    learnSteps={learnSteps}
    task="gr12-tax-corruption-fraud-t1"
    bank={bank}
    apiPath="/api/caps/lo"
    grade={12}
  />
);

export default TaxCorruptionFraud;
