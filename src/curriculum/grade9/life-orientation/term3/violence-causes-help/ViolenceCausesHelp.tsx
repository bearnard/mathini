import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Acts of violence',
    content: slide(
      <>
        <Rule>Violence is the use of force or threats to hurt, control or frighten another person. It takes many forms: physical violence, emotional or verbal abuse, bullying, sexual violence, gang violence, violence at home and violence online. Violence can happen at school, at home and in the community, and it is never acceptable.</Rule>
        <FactCards
          cards={[
            { title: 'Physical', line1: 'hitting or hurting', line2: 'someone’s body' },
            { title: 'Emotional', line1: 'threats, insults', line2: 'and control' },
            { title: 'Bullying', line1: 'repeated hurtful', line2: 'behaviour' },
            { title: 'Online', line1: 'threats or shaming', line2: 'on the internet' },
          ]}
          aria="Acts of violence. Physical: hitting or hurting someone's body. Emotional: threats, insults and control. Bullying: repeated hurtful behaviour. Online: threats or shaming on the internet."
        />
        <Worked
          title="Name the type"
          steps={[
            'A learner is pushed and hit in the playground: physical violence.',
            'A group sends nasty messages about a classmate every day: online bullying.',
            'An adult shouts threats and puts down a family member: emotional abuse.',
          ]}
        />
        <Mistake>Believing that only physical harm counts. Threats, insults and online abuse are also violence.</Mistake>
      </>,
    ),
  },
  {
    title: 'Causes and impact of violence',
    content: slide(
      <>
        <Rule>Violence has many causes: unmanaged anger, peer pressure, abuse of alcohol and drugs, poverty and inequality, seeing violence at home or in the media, and weak support for young people. Violence harms people&rsquo;s bodies and feelings, makes people afraid, hurts education and trust, and damages communities. It is never the victim&rsquo;s fault.</Rule>
        <FactCards
          cards={[
            { title: 'Causes', line1: 'anger, peer pressure,', line2: 'alcohol and drugs' },
            { title: 'Conditions', line1: 'poverty, inequality', line2: 'and learned behaviour' },
            { title: 'Impact', line1: 'injury, fear and', line2: 'lost trust' },
            { title: 'Community', line1: 'fear, damage and', line2: 'less learning' },
          ]}
          aria="Causes and impact of violence. Causes: anger, peer pressure, alcohol and drugs. Conditions: poverty, inequality and learned behaviour. Impact: injury, fear and lost trust. Community: fear, damage and less learning."
        />
        <Worked
          title="Trace cause and effect"
          steps={[
            'A group of friends drink alcohol and an argument turns into a fight.',
            'One person is injured, and others feel afraid to walk home.',
            'The school sees more absences, and trust in the neighbourhood falls.',
          ]}
        />
        <Mistake>Saying that a victim caused the violence. The person who uses violence is always responsible for it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Alternatives to violence',
    content: slide(
      <>
        <Rule>You can handle conflict without violence. Calm down first, listen to the other person, say how you feel, look for a solution that suits both, and ask a teacher or mediator to help if you cannot agree. Walking away from a fight is a sign of strength. Problem-solving and managing your anger protect you and other people.</Rule>
        <StepFlow steps={['Calm down and breathe.', 'Listen and say how you feel.', 'Look for a fair solution.', 'Ask a mediator if needed.']} aria="Four alternatives to violence: calm down and breathe, listen and say how you feel, look for a fair solution, and ask a mediator if needed." />
        <Worked
          title="Choose another way"
          steps={[
            'Someone bumps into you and calls you names.',
            'You breathe, walk away and do not fight back.',
            'Later you tell a teacher, who helps the two of you to talk it out.',
          ]}
        />
        <Mistake>Believing that you must fight to be respected. Staying calm and getting help earns respect and keeps you safe.</Mistake>
      </>,
    ),
  },
  {
    title: 'Where to find help',
    content: slide(
      <>
        <Rule>If you experience or see violence, tell a trusted adult such as a parent, a teacher or a school counsellor. You can call Childline on 116 if you are under 18, the GBV Command Centre on 0800 428 428, or the police on 10111 in an emergency. Clinics and social workers also help. Reporting violence helps to keep you and other people safe.</Rule>
        <FactCards
          cards={[
            { title: 'Trusted adult', line1: 'a parent, teacher', line2: 'or school counsellor' },
            { title: 'Childline', line1: 'for children,', line2: 'call 116' },
            { title: 'GBV Command Centre', line1: 'free, call', line2: '0800 428 428' },
            { title: 'Police', line1: 'in an emergency,', line2: 'call 10111' },
          ]}
          aria="Where to find help. Trusted adult: a parent, teacher or school counsellor. Childline: for children, call 116. GBV Command Centre: free, call 0800 428 428. Police: in an emergency, call 10111."
        />
        <Worked
          title="Get help"
          steps={[
            'You see a classmate being threatened by an older learner.',
            'You do not join in. You tell a teacher straight away.',
            'If someone is in danger, call the police on 10111.',
          ]}
        />
        <Mistake>Keeping quiet because you are afraid of being called a sneak. Telling an adult about violence is brave and helps people to stay safe.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two forms of violence.</>,
          <>Give one cause of violence.</>,
          <>Name one alternative to violence.</>,
          <>Which number can a child call for Childline?</>,
        ]}
        answers={[
          <>For example physical violence and bullying.</>,
          <>For example unmanaged anger or abuse of alcohol and drugs.</>,
          <>For example walking away, listening or asking a mediator.</>,
          <>116.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is violence?",
    options: ["Playing a team sport fairly with friends", "Talking calmly about a problem together", "Using force or threats to hurt", "Helping a friend with the homework"],
    answer: "Using force or threats to hurt",
    explanation: "Violence includes physical, emotional and sexual harm.",
  },
  {
    prompt: "Which is a form of violence?",
    options: ["Bullying", "Reading a book", "Studying", "Sharing lunch"],
    answer: "Bullying",
    explanation: "Bullying is repeated hurtful behaviour.",
  },
  {
    prompt: "Which is an example of online violence?",
    options: ["Sending a thank-you note", "Sharing a school photo with permission", "Posting a recipe", "Sending nasty messages about a classmate every day"],
    answer: "Sending nasty messages about a classmate every day",
    explanation: "Cyberbullying is violence online.",
  },
  {
    prompt: "Is shouting threats at a family member violence?",
    options: ["No, only hitting counts", "Yes, it is emotional abuse", "No, it is normal", "No, it is a game"],
    answer: "Yes, it is emotional abuse",
    explanation: "Threats and insults are forms of violence.",
  },
  {
    prompt: "Which can be a cause of violence?",
    options: ["Good sleep", "Unmanaged anger", "Regular exercise", "Kind words"],
    answer: "Unmanaged anger",
    explanation: "Anger that is not managed can lead to violence.",
  },
  {
    prompt: "How can alcohol and drugs contribute to violence?",
    options: ["They always calm people down fully", "They make people wiser and kinder", "They stop all conflict for good", "They can lead to fights"],
    answer: "They can lead to fights",
    explanation: "Substance abuse is linked to violence.",
  },
  {
    prompt: "Which is an effect of violence on a community?",
    options: ["Fear and less trust", "More friendship", "More safety", "Less crime"],
    answer: "Fear and less trust",
    explanation: "Violence harms trust and learning.",
  },
  {
    prompt: "Whose fault is it when a person is hurt by violence?",
    options: ["The victim", "The victim's friends", "The person who used violence", "Nobody"],
    answer: "The person who used violence",
    explanation: "It is never the victim's fault.",
  },
  {
    prompt: "Which is an alternative to violence?",
    options: ["Hitting back harder", "Spreading rumours", "Threatening the person", "Walking away and getting help"],
    answer: "Walking away and getting help",
    explanation: "Calm problem-solving keeps everyone safe.",
  },
  {
    prompt: "What is a good first step when you feel very angry?",
    options: ["Shout at someone", "Calm down and breathe", "Hit a wall", "Send an angry message"],
    answer: "Calm down and breathe",
    explanation: "Calm down first, then talk.",
  },
  {
    prompt: "What can a mediator do?",
    options: ["Help two people to talk and agree", "Choose a winner by force", "Punish both people", "Take sides"],
    answer: "Help two people to talk and agree",
    explanation: "A mediator helps both sides to find a fair solution.",
  },
  {
    prompt: "You see a classmate being threatened. What is a good response?",
    options: ["Join in with the threats", "Film it for fun", "Tell a teacher straight away", "Ignore it"],
    answer: "Tell a teacher straight away",
    explanation: "Telling an adult helps to keep people safe.",
  },
  {
    prompt: "Which short number reaches Childline?",
    options: ["12", "160", "116", "1160"],
    answer: "116",
    explanation: "Childline is a free helpline for children on 116.",
  },
  {
    prompt: "Which number can you call in an emergency to reach the police?",
    options: ["10111", "116", "0800 428 428", "0800 012 322"],
    answer: "10111",
    explanation: "The police emergency number is 10111.",
  },
];

const ViolenceCausesHelp = () => (
  <CapsSubjectTopic
    title="Violence: Causes, Impact, Alternatives and Help"
    subtitle="Forms and causes of violence, its impact, alternatives to violence and where to find help"
    learnSteps={learnSteps}
    task="gr9-violence-causes-help-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default ViolenceCausesHelp;
