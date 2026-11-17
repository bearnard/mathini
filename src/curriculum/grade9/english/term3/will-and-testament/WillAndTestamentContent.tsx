import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ModelText, PartsList } from '../../_shared/ModelText';

export const learnSteps: LearnStep[] = [
  {
    title: 'The will and its key words',
    content: (
      <div className="space-y-4">
        <Rule>A will and testament is a formal document in which a person says who must receive their money, property and possessions after they die.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>The person who makes the will is the <strong>testator</strong>.</li>
          <li>Everything the testator owns is the <strong>estate</strong>: money, properties and possessions.</li>
          <li>The people who receive something are the <strong>beneficiaries</strong>.</li>
          <li>The person who sees that the will is carried out is the <strong>executor</strong>. It may be a friend, a member of the family or a lawyer.</li>
        </ul>
        <Mistake>This lesson teaches the parts of a will for a school writing task. A real will must be drawn up with a lawyer or an office that deals with estates, so that it is valid.</Mistake>
      </div>
    ),
  },
  {
    title: 'A model will, part by part',
    content: (
      <div className="space-y-4">
        <ModelText label="Model will" note="An original model written for this lesson; the person and the places are invented.">
          <p><strong>Last will and testament of Nomsa Khumalo</strong></p>
          <p>I, Nomsa Khumalo, of 12 Protea Street, Kimberley, declare this to be my last will. I revoke all earlier wills.</p>
          <p><strong>1. Executor.</strong> I appoint my brother, Daniel Khumalo, as the executor of my estate.</p>
          <p><strong>2. Beneficiaries.</strong> I leave my house at 12 Protea Street to my daughter, Lerato. I leave R50 000 to my son, Thabo. I leave my jewellery to my sister, Zinzi.</p>
          <p><strong>3. The rest.</strong> Everything else that I own goes to Lerato and Thabo in equal shares.</p>
          <p>Signed at Kimberley on 5 June by the testator, and by the witnesses in the presence of the testator and of each other.</p>
        </ModelText>
        <PartsList
          parts={[
            { name: 'Title and testator', what: 'who is making the will, with full name and address.' },
            { name: 'Executor', what: 'who will carry out the will.' },
            { name: 'Beneficiaries', what: 'who receives what, from the money, properties and possessions.' },
            { name: 'The rest of the estate', what: 'who receives whatever is not named.' },
            { name: 'Date and signatures', what: 'the date, the testator and the witnesses.' },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The language of a will',
    content: (
      <div className="space-y-4">
        <Rule>A will is written in formal, exact language. The reader must know exactly who gets what, so nothing may be vague.</Rule>
        <Worked
          title="Vague and exact"
          steps={[
            <><strong>Vague:</strong> &ldquo;My stuff goes to the kids.&rdquo; Which stuff? Which children?</>,
            <><strong>Exact:</strong> &ldquo;I leave my house at 12 Protea Street to my daughter, Lerato.&rdquo; The item and the person are both named.</>,
            <>Use full names, the present tense (&ldquo;I leave&rdquo;, &ldquo;I appoint&rdquo;) and numbered clauses. Avoid slang and abbreviations.</>,
          ]}
        />
        <p className="text-left text-sm text-slate-600">The rand amount is written as R50 000, with a space for thousands, as in South African practice.</p>
      </div>
    ),
  },
  {
    title: 'Signing: the execution of the will',
    content: (
      <div className="space-y-4">
        <Rule>A will must be signed. Signing is called the execution of the will. The testator signs, and witnesses sign to show that they saw the testator sign.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>The will carries the <strong>date</strong> on which it was made.</li>
          <li>The testator signs, and witnesses also sign in the presence of the testator and of each other.</li>
          <li>A witness should not be a person who will receive something under the will.</li>
        </ul>
        <p className="text-left text-sm text-slate-600">The exact legal rules for a valid will are set by law, so a real will should be checked by a lawyer.</p>
      </div>
    ),
  },
  {
    title: 'Writing your own will for a task',
    content: (
      <div className="space-y-4">
        <Rule>Plan before you write. Follow the writing process: plan, draft, revise, edit and proof-read.</Rule>
        <ul className="space-y-1.5 text-left text-slate-700">
          <li>Invent a testator, with a full name and address.</li>
          <li>List the estate: money, properties and possessions.</li>
          <li>Choose the beneficiaries and say who gets what.</li>
          <li>Name an executor.</li>
          <li>End with the date and places for the signatures.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Check yourself',
    content: (
      <Check
        questions={[
          <>Who is the testator?</>,
          <>What is the estate?</>,
          <>What does an executor do?</>,
          <>Why must a will use exact language?</>,
        ]}
        answers={[
          <>The person who makes the will.</>,
          <>Everything the testator owns: money, properties and possessions.</>,
          <>Carries out the will, so that the beneficiaries receive what they were left.</>,
          <>So that everyone knows exactly who gets what and nothing can be misunderstood.</>,
        ]}
      />
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is a will and testament?',
    options: ['A letter that applies for a job post', 'A record of the events of a day', 'A set of rules for a stokvel', 'A document on who gets the estate'],
    answer: 'A document on who gets the estate',
    explanation: 'A will and testament says who must receive a person\'s money, property and possessions after they die.',
  },
  {
    prompt: 'Who is the testator?',
    options: ['The person who inherits a house', 'The person who makes the will', 'The person who witnesses the will', 'The person who writes the date'],
    answer: 'The person who makes the will',
    explanation: 'The testator is the person who makes the will and whose estate is divided.',
  },
  {
    prompt: 'What is the estate in a will?',
    options: ['The house of the chosen executor', 'Everything the testator owns', 'The names of the witnesses present', 'The date of the final signing'],
    answer: 'Everything the testator owns',
    explanation: 'The estate is the money, properties and possessions that the testator owns.',
  },
  {
    prompt: 'What is a beneficiary?',
    options: ['A person who types the will', 'A person who receives something', 'A person who checks the language', 'A person who signs as the testator'],
    answer: 'A person who receives something',
    explanation: 'Beneficiaries are the people who receive something from the estate.',
  },
  {
    prompt: 'What does the executor do?',
    options: ['Pays the testator\'s fees', 'Writes the title of the will', 'Carries out the will', 'Chooses new beneficiaries'],
    answer: 'Carries out the will',
    explanation: 'The executor is the person who sees that the will is carried out. It may be a friend, a family member or a lawyer.',
  },
  {
    prompt: 'Who may be named as an executor?',
    options: ['Only a witness to the will', 'A stranger chosen by the beneficiaries', 'Any person but not the family', 'A friend, a family member or a lawyer'],
    answer: 'A friend, a family member or a lawyer',
    explanation: 'The executor may be a friend, a member of the family or a lawyer.',
  },
  {
    prompt: 'Which items belong to the estate?',
    options: ['Names, titles and home addresses', 'Money, properties and possessions', 'Dates, signatures and a witness', 'Clauses, numbers and the sub-headings'],
    answer: 'Money, properties and possessions',
    explanation: 'The estate is made up of money, properties and possessions.',
  },
  {
    prompt: 'Which sentence is suitable for a will?',
    options: ['I leave my house to my daughter, Lerato.', 'My stuff goes to the kids.', 'Dear Sir or Madam, please give her the house.', 'We reckon the house is for Lerato.'],
    answer: 'I leave my house to my daughter, Lerato.',
    explanation: 'It is exact and formal, and names both the item and the person.',
  },
  {
    prompt: 'Why must the language of a will be exact?',
    options: ['So that it sounds friendly to readers', 'So the reader knows who gets what', 'So that it fits on a single page', 'So that it is easy to sing aloud'],
    answer: 'So the reader knows who gets what',
    explanation: 'The reader must know exactly who receives what, so nothing may be vague.',
  },
  {
    prompt: 'Which tense is used for the clauses of a will, such as "I leave" and "I appoint"?',
    options: ['The past tense', 'The future tense', 'The present tense', 'The passive voice'],
    answer: 'The present tense',
    explanation: 'The clauses state the testator\'s decisions in the present tense, in formal language.',
  },
  {
    prompt: 'What must be shown on the will to say when it was made?',
    options: ['The weather', 'The price', 'The title of the book', 'The date'],
    answer: 'The date',
    explanation: 'The will carries the date on which it was made.',
  },
  {
    prompt: 'What is the execution of a will?',
    options: ['The reading of the will aloud', 'The copying of the will', 'The signing of the will', 'The storing of the will'],
    answer: 'The signing of the will',
    explanation: 'Execution means signing: the testator signs and witnesses sign in the presence of the testator and of each other.',
  },
  {
    prompt: 'Why do witnesses sign a will?',
    options: ['To show they saw the testator sign', 'To receive a share of the estate', 'To decide who the beneficiaries are', 'To pay the lawyer\'s fee in advance'],
    answer: 'To show they saw the testator sign',
    explanation: 'Witnesses sign to show that they saw the testator sign. A witness should not be a person who will receive something.',
  },
  {
    prompt: 'Which sentence names an executor?',
    options: ['I leave my brother the old family house.', 'I appoint my brother as the executor.', 'I declare this to be my last will.', 'I revoke every will made earlier.'],
    answer: 'I appoint my brother as the executor.',
    explanation: 'An executor is appointed in the will. This clause names the person who will carry out the will.',
  },
];
