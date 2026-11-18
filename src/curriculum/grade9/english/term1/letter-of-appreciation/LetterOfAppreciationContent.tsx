import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ModelText, PartsList } from '../../_shared/ModelText';

export const learnSteps: LearnStep[] = [
  {
    title: 'What is a letter of appreciation?',
    content: (
      <div className="space-y-4">
        <Rule>A letter of appreciation thanks a person for help or advice that you received. It tells the reader exactly what they did and what difference it made to you.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Write it to someone who helped you, such as a teacher, a coach or a neighbour.</li>
          <li>The <strong>purpose</strong> is to say thank you clearly and sincerely.</li>
          <li>The register is polite and warm: friendly, but still respectful.</li>
        </ul>
        <Mistake>A letter of appreciation is not a text message and not an essay about yourself. Keep your reader and the help they gave in the middle of the letter.</Mistake>
      </div>
    ),
  },
  {
    title: 'A model letter, part by part',
    content: (
      <div className="space-y-4">
        <ModelText label="Model letter of appreciation" note="An original model written for this lesson; the writer, the teacher, the school and the street are invented.">
          <p>22 Protea Road<br />Polokwane<br />0700</p>
          <p>12 June</p>
          <p>Dear Mrs Pillay</p>
          <p>I am writing to thank you for the advice that you gave me before the Mathematics test.</p>
          <p>You showed me how to make a revision timetable, and you explained the steps for solving equations again after school. Because of your help, I started to revise a little every day instead of the night before. My mark went up from 48% to 67%, and I now feel much more confident.</p>
          <p>Thank you once more for your time and your patience. I will keep using the timetable.</p>
          <p>Yours sincerely<br />Thandi Mokoena</p>
        </ModelText>
        <PartsList
          parts={[
            { name: 'Address and date', what: 'the writer\u2019s address and the date at the top.' },
            { name: 'Salutation', what: 'Dear and the name of the person, such as Dear Mrs Pillay.' },
            { name: 'First paragraph', what: 'the main idea: what you are thanking the person for.' },
            { name: 'Middle paragraph', what: 'supporting ideas: what they did and what changed.' },
            { name: 'Closing paragraph', what: 'thanks once more, then Yours sincerely and your name.' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Main idea and supporting ideas',
    content: (
      <div className="space-y-4">
        <Rule>Put the main idea first: say what you are thanking the person for. Then add supporting ideas: what exactly they did, what changed for you, and how you feel. Put the sentences in a logical order.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li><strong>Main idea:</strong> thanks for the advice before the test.</li>
          <li><strong>Supporting ideas:</strong> the timetable, the extra explanation, the higher mark.</li>
          <li><strong>Logical order:</strong> the help first, then the result, then your thanks.</li>
        </ul>
        <Worked
          title="Weak and strong supporting ideas"
          steps={[
            <><strong>Weak:</strong> &ldquo;You helped me a lot and you are nice.&rdquo; It does not say what the help was.</>,
            <><strong>Strong:</strong> &ldquo;You showed me how to make a revision timetable, and my mark went up from 48% to 67%.&rdquo; It gives the help and its effect.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Language, register and process',
    content: (
      <div className="space-y-4">
        <Rule>Write in clear, warm and polite language. Link your ideas with conjunctions and vary your sentences so that the letter flows.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Use conjunctions such as <em>because</em>, <em>so</em>, <em>and</em> and <em>but</em> to show reasons and results.</li>
          <li>Use a variety of sentence types and lengths: statements, and a short sentence for emphasis.</li>
          <li>Follow the writing process: plan, draft, revise, edit and proof-read, then present the letter neatly.</li>
          <li>Avoid slang and exaggeration. Say what is true, in your own words.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>What is the purpose of a letter of appreciation?</>,
          <>What goes in the first paragraph?</>,
          <>Which closing follows Dear Mrs Pillay?</>,
          <>Name one conjunction that shows a reason.</>,
        ]}
        answers={[
          <>To thank someone for help or advice that you received.</>,
          <>The main idea: what you are thanking the person for.</>,
          <>Yours sincerely.</>,
          <><em>Because</em>.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Why would you write a letter of appreciation?",
    options: ["To apply for a bursary place at a school", "To report on a meeting that was held", "To thank someone for help you received", "To order goods from a shop online"],
    answer: "To thank someone for help you received",
    explanation: "A letter of appreciation thanks a person for help or advice that you received.",
  },
  {
    prompt: "Which register suits a letter of appreciation to your teacher?",
    options: ["Polite and warm", "Slang and jokes", "Cold and very short", "Rude and angry"],
    answer: "Polite and warm",
    explanation: "The register is polite and warm: friendly, but respectful.",
  },
  {
    prompt: "What should the first paragraph of a letter of appreciation say?",
    options: ["Your full life story and all your hobbies", "A list of your marks this year", "A complaint about the school hall", "What you are thanking the person for"],
    answer: "What you are thanking the person for",
    explanation: "The first paragraph states the main idea: what the thanks is for.",
  },
  {
    prompt: "Which sentence is a supporting idea?",
    options: ["I am writing to thank you for your advice.", "You showed me how to make a revision timetable.", "Yours sincerely, with my full name written below.", "22 Protea Road, Polokwane, on 12 June."],
    answer: "You showed me how to make a revision timetable.",
    explanation: "A supporting idea gives detail about what the person did or how it helped.",
  },
  {
    prompt: "Which sentence gives the effect of the help?",
    options: ["I hope that you are well and happy.", "The test was on a Monday morning.", "My mark went up from 48% to 67%.", "Dear Mrs Pillay and all my friends."],
    answer: "My mark went up from 48% to 67%.",
    explanation: "The effect says what changed for the writer.",
  },
  {
    prompt: "Which closing follows the salutation Dear Mrs Pillay?",
    options: ["Yours sincerely", "Yours faithfully", "Yours forever", "Bye for now"],
    answer: "Yours sincerely",
    explanation: "When you address the person by name, close with Yours sincerely.",
  },
  {
    prompt: "Where do the writer's address and the date go?",
    options: ["In the last paragraph of the letter", "On the back of the page", "After the closing and the name", "At the top of the letter"],
    answer: "At the top of the letter",
    explanation: "The address and date come at the top of a letter.",
  },
  {
    prompt: "Which word shows a reason in this sentence: I revise daily because I want to improve?",
    options: ["daily", "because", "revise", "improve"],
    answer: "because",
    explanation: "Because is a conjunction that shows a reason.",
  },
  {
    prompt: "Which sentence is better written for a letter of appreciation?",
    options: ["You helped me a lot and you are really very nice.", "Thanx 4 everything lol, you are the best teacher.", "You explained the steps for solving equations.", "I honestly do not know why you bothered to help."],
    answer: "You explained the steps for solving equations.",
    explanation: "A strong sentence says exactly what the help was.",
  },
  {
    prompt: "What is the correct order of the writing process?",
    options: ["Plan, draft, revise, edit, proof-read", "Draft, plan, edit, revise, proof-read", "Edit, plan, draft, proof-read, revise", "Proof-read, draft, plan, revise, edit"],
    answer: "Plan, draft, revise, edit, proof-read",
    explanation: "You plan first, then draft, revise, edit and proof-read.",
  },
  {
    prompt: "Why should the sentences of the letter follow a logical order?",
    options: ["So that the letter becomes much longer than needed", "So that the writer can hide what the help was", "So that every sentence says the same thing", "So that the reader can follow the thanks easily"],
    answer: "So that the reader can follow the thanks easily",
    explanation: "A logical order makes the letter clear, from the help to the result to the thanks.",
  },
  {
    prompt: "Which linking word shows a result?",
    options: ["but", "so", "although", "until"],
    answer: "so",
    explanation: "So shows a result: I revised daily, so my mark improved.",
  },
  {
    prompt: "Which of these should you avoid in a letter of appreciation?",
    options: ["Clear thanks", "Your address and the date", "Slang and exaggeration", "A closing paragraph"],
    answer: "Slang and exaggeration",
    explanation: "Slang and exaggeration spoil the polite, sincere register.",
  },
  {
    prompt: "How should the closing paragraph end?",
    options: ["With thanks once more and your name", "With a new complaint and no name", "With a list of wishes and a date", "With the address and the date again"],
    answer: "With thanks once more and your name",
    explanation: "The closing paragraph thanks the person once more and ends the letter.",
  },
];
