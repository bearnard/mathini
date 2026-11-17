import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Grondwet: the rules of a club',
    content: slide(
      <>
        <Rule>A <Af>grondwet</Af> <En>constitution</En> is the set of <Af>reëls</Af> <En>rules</En> of an organisation, such as a <Af>klub</Af> <En>club</En>. The people in it are the <Af>lede</Af> <En>members</En>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['grondwet', 'constitution'], ['reël', 'rule'], ['lid', 'member']]}
          aria="Three Afrikaans words with their English meaning: grondwet is constitution, reël is rule, lid is member."
        />
        <Worked
          title="Read the sentence"
          steps={[
            <><Af>Die klub het 'n grondwet.</Af> <En>The club has a constitution.</En> <SpeakButton text="Die klub het 'n grondwet." /></>,
            <>The members must agree to the rules, and the rules bind all members.</>,
          ]}
        />
        <Mistake>Thinking that <Af>lid</Af> is a rule. <Af>Reël</Af> is rule and <Af>lid</Af> is member (plural <Af>lede</Af>).</Mistake>
      </>,
    ),
  },
  {
    title: 'The parts: Naam, Doel, Lidmaatskap',
    content: slide(
      <>
        <Rule>A grondwet has headings. Learn these three: <Af>Naam</Af> <En>name</En>, <Af>Doel</Af> <En>aim</En> and <Af>Lidmaatskap</Af> <En>membership</En>.</Rule>
        <TaggedBoxes
          items={[{ word: 'Naam', tag: 'name' }, { word: 'Doel', tag: 'aim' }, { word: 'Lidmaatskap', tag: 'membership' }]}
          aria="Three constitution headings with their English meaning: Naam is name, Doel is aim, Lidmaatskap is membership."
        />
        <Worked
          title="Write the clauses"
          steps={[
            <><Af>Die doel van die klub is om sokker te speel.</Af> <En>The aim of the club is to play soccer.</En> <SpeakButton text="Die doel van die klub is om sokker te speel." /></>,
            <>Number the clauses: <Af>1. Naam</Af>, <Af>2. Doel</Af>, <Af>3. Lidmaatskap</Af>.</>,
          ]}
        />
        <Mistake>Writing the clauses as one long paragraph. Give each heading its own number.</Mistake>
      </>,
    ),
  },
  {
    title: 'Moet and mag',
    content: slide(
      <>
        <Rule>Rules use <Af>moet</Af> <En>must</En> for a duty and <Af>mag</Af> <En>may</En> for a permission.</Rule>
        <TaggedBoxes
          items={[{ word: 'moet', tag: 'must' }, { word: 'mag', tag: 'may' }]}
          aria="Two Afrikaans rule words with their English meaning: moet is must, mag is may."
        />
        <Worked
          title="Duty or permission?"
          steps={[
            <><Af>Lede moet lidmaatskapgeld betaal.</Af> <En>Members must pay membership fees.</En> <SpeakButton text="Lede moet lidmaatskapgeld betaal." /></>,
            <><Af>Enige Graad 9-leerder mag lid word.</Af> <En>Any Grade 9 learner may become a member.</En></>,
          ]}
        />
        <Mistake>Using <Af>mag</Af> for a duty. If members have no choice, write <Af>moet</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Meetings, changes and signing',
    content: slide(
      <>
        <Rule>The grondwet says when members meet (<Af>Vergaderings</Af>) and how rules change (<Af>Wysigings</Af> <En>amendments</En>). It ends with the date it was adopted and the <Af>handtekening</Af> <En>signature</En>.</Rule>
        <OrderTiles
          tiles={['1. Naam', '2. Doel', '3. Lidmaatskap', '4. Vergaderings', 'Aangeneem op 3 Februarie', 'Handtekening']}
          aria="A constitution in order from top to bottom: 1 Naam, 2 Doel, 3 Lidmaatskap, 4 Vergaderings, the line Aangeneem op 3 Februarie, and the Handtekening."
        />
        <Worked
          title="Read the clauses"
          steps={[
            <><Af>Die klub moet een keer per jaar 'n algemene vergadering hou.</Af> <En>The club must hold a general meeting once a year.</En></>,
            <><Af>Die grondwet kan verander word.</Af> <En>The constitution can be changed.</En> <Af>Aangeneem op 3 Februarie.</Af> <En>Adopted on 3 February.</En></>,
          ]}
        />
        <Mistake>Forgetting <Af>die datum en die handtekening</Af> <En>the date and the signature</En> at the end.</Mistake>
      </>,
    ),
  },
  {
    title: 'Beleid: one matter',
    content: slide(
      <>
        <Rule>A <Af>beleid</Af> <En>policy</En> deals with one matter. A grondwet is for the whole organisation.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['grondwet', 'hele klub'], ['beleid', 'een saak']]}
          aria="Two words with their scope: a grondwet covers the whole club (hele klub), a beleid covers one matter (een saak)."
        />
        <Worked
          title="A school policy"
          steps={[
            <><Af>Selfoonbeleid van die skool</Af> <En>school cellphone policy</En>: <Af>Selfone moet gedurende lesse afgeskakel wees.</Af> <SpeakButton text="Selfone moet gedurende lesse afgeskakel wees." /></>,
            <><En>Cellphones must be switched off during lessons.</En></>,
          ]}
        />
        <Mistake>Calling a rule for one matter a grondwet. One matter, such as cellphones, is a beleid.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>constitution</em>?</>} answer={<><Af>Grondwet</Af>.</>} />
        <Check question={<>Which word means <em>must</em>?</>} answer={<><Af>Moet</Af>.</>} />
        <Check question={<>Which word means <em>policy</em>?</>} answer={<><Af>Beleid</Af>.</>} />
        <Check question={<>Which heading means <em>aim</em>?</>} answer={<><Af>Doel</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'constitution'?",
    options: ['grondwet', 'beleid', 'vergadering', 'handtekening'],
    answer: 'grondwet',
    explanation: "'Grondwet' means 'constitution': the rules of an organisation.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'member'?",
    options: ['reël', 'klub', 'doel', 'lid'],
    answer: 'lid',
    explanation: "'Lid' means 'member'. The plural is 'lede'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'rule'?",
    options: ['lid', 'naam', 'saak', 'reël'],
    answer: 'reël',
    explanation: "'Reël' means 'rule'. The plural is 'reëls'.",
  },
  {
    prompt: "Wat beteken die opskrif 'Doel' in 'n grondwet?",
    options: ['name', 'meeting', 'aim', 'signature'],
    answer: 'aim',
    explanation: "'Doel' means 'aim'. It says why the club exists.",
  },
  {
    prompt: "Watter opskrif sê wie mag aansluit?",
    options: ['Naam', 'Handtekening', 'Wysigings', 'Lidmaatskap'],
    answer: 'Lidmaatskap',
    explanation: "'Lidmaatskap' means 'membership': who may join and what they must do.",
  },
  {
    prompt: "Watter woord wys 'n plig (duty)?",
    options: ['mag', 'kan', 'moet', 'wens'],
    answer: 'moet',
    explanation: "'Moet' means 'must'. It shows a duty.",
  },
  {
    prompt: "Watter woord wys 'n toestemming (permission)?",
    options: ['moet', 'wil', 'sal', 'mag'],
    answer: 'mag',
    explanation: "'Mag' means 'may'. It shows a permission.",
  },
  {
    prompt: "Watter sin wys 'n plig?",
    options: ['Enige Graad 9-leerder mag lid word.', 'Lede moet lidmaatskapgeld betaal.', 'Die klub het vandag gespeel.', 'Ek is baie trots op die klub.'],
    answer: 'Lede moet lidmaatskapgeld betaal.',
    explanation: "'Moet' shows a duty: members must pay.",
  },
  {
    prompt: "Wat beteken 'Aangeneem op 3 Februarie'?",
    options: ['Adopted on 3 February.', 'Written on 3 February.', 'Cancelled on 3 February.', 'Read on 3 February.'],
    answer: 'Adopted on 3 February.',
    explanation: "'Aangeneem' means 'adopted': the day the members accepted the constitution.",
  },
  {
    prompt: "Watter twee dinge kom aan die einde van 'n grondwet?",
    options: ['die naam en die doel van die klub', 'die lede en die reëls van die klub', 'die klub en die skool se naam', 'die datum en die handtekening'],
    answer: 'die datum en die handtekening',
    explanation: "The end shows the date of adoption and the signature.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'policy'?",
    options: ['grondwet', 'reël', 'beleid', 'lid'],
    answer: 'beleid',
    explanation: "'Beleid' means 'policy': a plan for one matter.",
  },
  {
    prompt: "Watter voorbeeld is 'n beleid?",
    options: ['Dagboekinskrywing oor my dag', "'n Brief aan die redakteur", "'n Advertensie vir sokkerskoene", 'Selfoonbeleid van die skool'],
    answer: 'Selfoonbeleid van die skool',
    explanation: "A cellphone policy deals with one matter, so it is a 'beleid'.",
  },
];

const ConstitutionPolicy = () => (
  <AfrikaansTopic
    title="Grondwet en Beleid"
    subtitle="The parts of a constitution, moet and mag, and how a policy differs"
    learnSteps={learnSteps}
    task="gr9-afr-constitution-policy-t2"
    bank={bank}
    speak="options"
  />
);

export default ConstitutionPolicy;
