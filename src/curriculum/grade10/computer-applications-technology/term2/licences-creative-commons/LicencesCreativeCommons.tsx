import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is copyright?",
    options: ["A kind of software at work in a lab", "The creator's legal right over a work", "A computer part in a file on a system", "A type of cable for a user at a school"],
    answer: "The creator's legal right over a work",
    explanation: "The law protects creators.",
  },
  {
    prompt: "What is a licence agreement?",
    options: ["The rules for using software", "A kind of virus at work in a lab", "A computer part in a file on a system", "A type of file for a user at a school"],
    answer: "The rules for using software",
    explanation: "It says what you may do.",
  },
  {
    prompt: "What does an end-user licence allow?",
    options: ["Use by a whole school on a device in a file", "Sale of copies in use for a user", "Changing the code at work in a lab", "Use by one person on stated devices"],
    answer: "Use by one person on stated devices",
    explanation: "It covers one user.",
  },
  {
    prompt: "What does a site licence allow?",
    options: ["Use on one phone in a lab for a task", "Use on many computers at one site", "Sale of copies on a system in a program", "Copying for friends at a school on a device"],
    answer: "Use on many computers at one site",
    explanation: "It suits schools.",
  },
  {
    prompt: "What is piracy?",
    options: ["Buying software in a program at work", "Writing software on a device in a file", "Deleting software in use for a user", "Copying software without permission"],
    answer: "Copying software without permission",
    explanation: "Piracy is against the law.",
  },
  {
    prompt: "What is creative commons?",
    options: ["A kind of virus in a program at work", "A computer part on a device in a file", "A type of cable in use for a user", "Licences that let creators share work"],
    answer: "Licences that let creators share work",
    explanation: "Creators choose freedoms.",
  },
  {
    prompt: "What does attribution mean?",
    options: ["Naming the creator", "Paying the creator", "Changing the work", "Deleting the work"],
    answer: "Naming the creator",
    explanation: "Credit must be given.",
  },
  {
    prompt: "What does non-commercial mean?",
    options: ["Used to make money for a user", "Not used to make money", "Free for all uses in a lab", "Banned"],
    answer: "Not used to make money",
    explanation: "Business use is not allowed.",
  },
  {
    prompt: "What does no derivatives mean?",
    options: ["Do not change the work", "Change it freely for a user", "Sell it", "Hide it"],
    answer: "Do not change the work",
    explanation: "The work stays as it is.",
  },
  {
    prompt: "What does share alike mean?",
    options: ["Share changes under the same licence", "Keep changes secret in use for a user", "Sell changes at work in a lab", "Delete changes in a file on a system"],
    answer: "Share changes under the same licence",
    explanation: "Changes stay open.",
  },
  {
    prompt: "How should you use a creative commons picture that asks for attribution?",
    options: ["Hide the creator", "Sell it", "Name the creator", "Change the name"],
    answer: "Name the creator",
    explanation: "Follow the licence.",
  },
  {
    prompt: "What is plagiarism?",
    options: ["Presenting others' work as your own", "Writing your own work in a file on a system", "Giving credit for a user at a school", "Reading a book in a lab for a task"],
    answer: "Presenting others' work as your own",
    explanation: "It is dishonest.",
  },
  {
    prompt: "Why read the licence?",
    options: ["It is a joke in a lab for a task", "It says what you may do", "It is a price on a system in a program", "It is a name at a school on a device"],
    answer: "It says what you may do",
    explanation: "The licence sets the rules.",
  },
  {
    prompt: "Which is a safe source of pictures?",
    options: ["A site that offers creative commons pictures", "Any picture found online in a program at work", "A friend's phone on a device in a file", "An unknown e-mail in use for a user"],
    answer: "A site that offers creative commons pictures",
    explanation: "Check the licence.",
  },
];

const LicencesCreativeCommons = () => (
  <CapsSubjectTopic
    title="Software Licences and Creative Commons"
    subtitle="End-user and site licences, copyright, and how creative commons lets creators share their work"
    learnSteps={learnSteps}
    task="gr10-licences-creative-commons-t2"
    bank={bank}
    apiPath="/api/caps/cat"
    grade={10}
  />
);

export default LicencesCreativeCommons;
