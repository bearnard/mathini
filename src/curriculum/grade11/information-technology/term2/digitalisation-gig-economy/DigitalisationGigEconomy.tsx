import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is the gig economy?",
    options: ["One steady job for a life", "Short jobs found online", "Work done only at night", "Work that is done for no pay"],
    answer: "Short jobs found online",
    explanation: "Workers take gigs through platforms.",
  },
  {
    prompt: "Which is an example of a gig?",
    options: ["A freelance designer", "A permanent school teacher", "A full-time office clerk", "A bank branch manager"],
    answer: "A freelance designer",
    explanation: "Gig workers are paid for each job.",
  },
  {
    prompt: "Which is an online service?",
    options: ["A paper letter", "A telephone box", "Online banking", "A library card"],
    answer: "Online banking",
    explanation: "Banking can be done on a phone or computer.",
  },
  {
    prompt: "Which allows a meeting without travel?",
    options: ["A paper memo sent", "A printed road map", "Video conferencing", "A long road trip"],
    answer: "Video conferencing",
    explanation: "People meet on screen.",
  },
  {
    prompt: "What does a digital forensic investigator do?",
    options: ["Prints photographs for a firm", "Sells new computers to firms", "Finds evidence on PCs", "Repairs cars in a garage"],
    answer: "Finds evidence on PCs",
    explanation: "They investigate digital crimes.",
  },
  {
    prompt: "What does a privacy consultant do?",
    options: ["Advises on protecting data", "Draws plans of buildings", "Delivers parcels in a town", "Repairs the screens of phones"],
    answer: "Advises on protecting data",
    explanation: "They help organisations to protect personal information.",
  },
  {
    prompt: "What can a 3D printing operator make?",
    options: ["Sheets of printed paper", "Music for a radio show", "Models and parts", "E-mail for the staff"],
    answer: "Models and parts",
    explanation: "3D printing can make medical parts.",
  },
  {
    prompt: "What is a remote office?",
    options: ["A very big kind of office", "An office with no staff in it", "A branch of a bank", "Work done away from it"],
    answer: "Work done away from it",
    explanation: "Work is done from home or elsewhere.",
  },
  {
    prompt: "What is office automation?",
    options: ["Staff working a lot harder", "Machines doing routine work", "Offices that have no desks", "Paper as the main tool used"],
    answer: "Machines doing routine work",
    explanation: "Software and machines take over routine tasks.",
  },
  {
    prompt: "What is an effect of robotics in factories?",
    options: ["Fewer routine jobs", "No change to the jobs", "More paper in an office", "Less power used by factories"],
    answer: "Fewer routine jobs",
    explanation: "Machines change which skills are needed.",
  },
  {
    prompt: "What is an influencer?",
    options: ["A kind of computer virus", "A kind of connecting cable", "A person with followers", "A type of firewall tool"],
    answer: "A person with followers",
    explanation: "Influencers have large online followings.",
  },
  {
    prompt: "What is your online identity?",
    options: ["What posts say about you", "Your real name and nothing else", "Your password for a site", "Your phone number and email"],
    answer: "What posts say about you",
    explanation: "Posts and profiles build an identity.",
  },
  {
    prompt: "Which helps to protect your online identity?",
    options: ["The same password on each site", "Sharing your PIN with a friend", "Strong, different passwords", "Accepting any friend request"],
    answer: "Strong, different passwords",
    explanation: "Different passwords limit damage.",
  },
  {
    prompt: "Why think before you post?",
    options: ["Posts vanish within a minute", "Posts cost a lot of money", "Posts last and spread", "Posts stay private to a user"],
    answer: "Posts last and spread",
    explanation: "Content may be copied.",
  },
];

const DigitalisationGigEconomy = () => (
  <CapsSubjectTopic
    title="Digitalisation, the Gig Economy and Your Online Identity"
    subtitle="Online services, the gig economy, digital careers, effects on work, and protecting your online identity"
    learnSteps={learnSteps}
    task="gr11-digitalisation-gig-economy-t2"
    bank={bank}
    apiPath="/api/caps/it"
    grade={11}
  />
);

export default DigitalisationGigEconomy;
