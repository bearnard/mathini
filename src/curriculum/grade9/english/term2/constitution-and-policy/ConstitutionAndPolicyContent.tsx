import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ModelText, PartsList } from '../../_shared/ModelText';

export const learnSteps: LearnStep[] = [
  {
    title: 'What is a constitution?',
    content: (
      <div className="space-y-4">
        <Rule>A constitution is a set of fundamental principles or rules that governs an organisation, such as a country, a burial society, a youth organisation, a stokvel or a soccer club.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>The rules must be <strong>agreed</strong> by the people involved.</li>
          <li>The rules are <strong>binding</strong>: members must follow them.</li>
          <li>The rules can be <strong>amended</strong> (changed) in the way the constitution says.</li>
        </ul>
        <Mistake>A constitution is not a letter and not an essay. It is a formal document with a fixed layout, written so that every member can understand and apply it.</Mistake>
      </div>
    ),
  },
  {
    title: 'A model constitution, part by part',
    content: (
      <div className="space-y-4">
        <ModelText label="Model constitution" note="An original model written for this lesson; the club and its members are invented.">
          <p><strong>Constitution of the Sunrise Youth Soccer Club</strong></p>
          <p><strong>1. Name.</strong> The name of the club is the Sunrise Youth Soccer Club.</p>
          <p><strong>2. Aims.</strong> The club exists to give young people a place to play and to learn teamwork.</p>
          <p><strong>3. Membership.</strong> Any learner of the school between 14 and 17 may join. A member must pay the annual fee.</p>
          <p><strong>4. Meetings.</strong> The club must hold a general meeting once a year.</p>
          <p><strong>5. Amendments.</strong> This constitution may be amended by two-thirds of the members at a general meeting.</p>
          <p>Adopted on 3 February by the members present.</p>
          <p>Signed: ____________ (chairperson)</p>
        </ModelText>
        <PartsList
          parts={[
            { name: 'Name', what: 'the name of the organisation.' },
            { name: 'Aims', what: 'why the organisation exists (terms of reference).' },
            { name: 'Membership', what: 'who may join and what they must do.' },
            { name: 'Meetings', what: 'when and how members meet.' },
            { name: 'Amendments', what: 'how the rules may be changed.' },
            { name: 'Date of adoption and signature', what: 'when the members accepted it, and who signed.' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Language of a constitution',
    content: (
      <div className="space-y-4">
        <Rule>The language is formal, exact and impersonal. Each rule is a short numbered clause.</Rule>
        <Worked
          title="Informal and formal"
          steps={[
            <><strong>Informal:</strong> &ldquo;We reckon everybody should pitch up for the yearly get-together.&rdquo;</>,
            <><strong>Formal:</strong> &ldquo;The club must hold a general meeting once a year.&rdquo;</>,
            <>Use <em>must</em> for a duty and <em>may</em> for a permission. Write in the present tense and the third person, and avoid slang and personal opinions.</>,
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Constitution and policy',
    content: (
      <div className="space-y-4">
        <Rule>A policy is a statement of how an organisation will act on one matter. A constitution governs the whole organisation; a policy deals with one issue.</Rule>
        <ModelText label="Model policy" note="An original model written for this lesson.">
          <p><strong>Cellphone policy of the school</strong></p>
          <p><strong>Purpose.</strong> To make sure that cellphones help learning and do not disturb it.</p>
          <p><strong>Rule.</strong> Phones must be switched off and kept in bags during lessons.</p>
          <p><strong>Exception.</strong> A teacher may allow a phone for a lesson task.</p>
          <p>Adopted on 10 January by the governing body.</p>
        </ModelText>
        <p className="text-left text-sm text-slate-600">Like a constitution, a policy states its purpose, gives clear rules in formal language and shows who adopted it and when.</p>
      </div>
    ),
  },
  {
    title: 'Writing your own',
    content: (
      <div className="space-y-4">
        <Rule>When you write a constitution or policy for a task, plan the headings first and then write each clause.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Choose the organisation (for example a stokvel or a youth club) and its purpose.</li>
          <li>List the headings: name, aims, membership, meetings, amendments.</li>
          <li>Write each clause in one or two clear sentences, with numbers.</li>
          <li>End with the date of adoption and a place for the signature.</li>
          <li>Revise, edit and proof-read for formal language.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>What is a constitution?</>,
          <>Name three features of the rules in a constitution.</>,
          <>Name two parts that a constitution should have.</>,
          <>What makes a policy different from a constitution?</>,
        ]}
        answers={[
          <>A set of fundamental principles or rules that governs an organisation.</>,
          <>The rules are agreed, binding and can be amended.</>,
          <>Any two of: name, aims, membership, meetings, amendments, date of adoption, signature.</>,
          <>A policy deals with one matter, while a constitution governs the whole organisation.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is a constitution?',
    options: ['A letter of thanks to a club member', 'A diary of the events of a day', 'A story written about a soccer club', 'A set of rules for an organisation'],
    answer: 'A set of rules for an organisation',
    explanation: 'A constitution is a set of fundamental principles or rules that governs an organisation such as a club or a stokvel.',
  },
  {
    prompt: 'Which of these is an organisation that could have a constitution?',
    options: ['A single diary page', 'A stokvel', 'A weather report', 'A shopping list'],
    answer: 'A stokvel',
    explanation: 'Burial societies, stokvels, youth organisations and soccer clubs all use constitutions to set out their rules.',
  },
  {
    prompt: 'Why are the rules of a constitution called binding?',
    options: ['They are printed in a book', 'They are written in small print', 'They are chosen by one person', 'Members must follow them'],
    answer: 'Members must follow them',
    explanation: 'Binding means that the rules apply to every member, who must follow them.',
  },
  {
    prompt: 'What must happen to the rules before they become the constitution?',
    options: ['Members must agree to them', 'A newspaper must publish them', 'The rules must be translated', 'The rules must be memorised'],
    answer: 'Members must agree to them',
    explanation: 'The rules need to be agreed by the parties involved, which is why a date of adoption is shown.',
  },
  {
    prompt: 'What does an amendment clause explain?',
    options: ['Who may not join the club', 'Where the club must play', 'How rules may be changed', 'What the members must wear'],
    answer: 'How rules may be changed',
    explanation: 'A constitution can be amended, and the amendment clause says how this is done.',
  },
  {
    prompt: 'Which part of a constitution tells who may join?',
    options: ['Name', 'Signature', 'Membership', 'Date of adoption'],
    answer: 'Membership',
    explanation: 'The membership clause sets out who may join and what members must do, such as paying a fee.',
  },
  {
    prompt: 'Which two items show that a constitution was accepted?',
    options: ['The name and the aims of the club', 'The adoption date and signature', 'The membership list and the fees', 'The meeting times and the venue'],
    answer: 'The adoption date and signature',
    explanation: 'The date of adoption and the signature show when and by whom the constitution was accepted.',
  },
  {
    prompt: 'How should the clauses of a constitution be set out?',
    options: ['As one very long paragraph', 'As a poem with rhyming lines', 'As a long series of questions', 'As short numbered clauses'],
    answer: 'As short numbered clauses',
    explanation: 'Each rule is a short numbered clause so that members can find and apply it easily.',
  },
  {
    prompt: 'Which sentence suits a constitution?',
    options: ['We reckon everybody should pitch up for the get-together.', 'I think we should meet whenever we feel like it.', 'Dear Sir or Madam, I am writing to apply.', 'The club must hold a general meeting once a year.'],
    answer: 'The club must hold a general meeting once a year.',
    explanation: 'It is formal, exact and impersonal, and uses must for a duty.',
  },
  {
    prompt: 'Which word shows a duty in a constitution?',
    options: ['must', 'maybe', 'perhaps', 'wish'],
    answer: 'must',
    explanation: 'Use must for a duty and may for a permission in the clauses of a constitution.',
  },
  {
    prompt: 'How does a policy differ from a constitution?',
    options: ['A policy is written as a poem', 'A policy has no real rules in it', 'A policy is a private diary page', 'A policy covers just one matter'],
    answer: 'A policy covers just one matter',
    explanation: 'A constitution governs the whole organisation. A policy sets out how the organisation will act on one matter.',
  },
  {
    prompt: 'Which of these is an example of a policy?',
    options: ['A diary entry about a race', 'A letter to a friend', 'A poem about the sea', 'A school cellphone policy'],
    answer: 'A school cellphone policy',
    explanation: 'A cellphone policy states a purpose and rules for one matter, so it is a policy.',
  },
  {
    prompt: 'Which verb tense is used in the clauses?',
    options: ['The past tense', 'The future perfect', 'The present tense', 'The conditional'],
    answer: 'The present tense',
    explanation: 'Rules are stated in the present tense, in the third person and in formal language.',
  },
  {
    prompt: 'What is the first step in writing a constitution for a task?',
    options: ['Sign the document', 'Choose a date of adoption', 'Plan the headings', 'Proof-read the clauses'],
    answer: 'Plan the headings',
    explanation: 'First plan the headings (name, aims, membership and so on), then write each clause.',
  },
];
