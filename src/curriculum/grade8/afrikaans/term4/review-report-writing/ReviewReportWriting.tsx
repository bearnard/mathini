import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What a report is for',
    content: slide(
      <>
        <Rule>The main purpose of a <Af>verslag</Af> <En>report</En> is <Af>Om feite duidelik te rapporteer</Af> <En>to report facts clearly</En>. Headings help the reader find each part.</Rule>
        <OrderTiles
          tiles={['Titel', 'Doel', 'Feite', 'Slot']}
          aria="Four parts of a report in order: Titel (title), Doel (purpose), Feite (facts), Slot (closing)."
        />
        <Worked
          title="Choose the heading"
          steps={[
            <>A report on a school event: <Af>Doel en Agtergrond</Af> <En>purpose and background</En> is a fitting heading.</>,
            <>It tells the reader why the event took place and what led to it.</>,
          ]}
        />
        <Mistake>Writing a report like a story or an opinion piece. A report gives facts under clear headings.</Mistake>
      </>,
    ),
  },
  {
    title: 'Facts, not opinions',
    content: slide(
      <>
        <Rule>A factual report is formal. Avoid <Af>Onbevestigde persoonlike menings</Af> <En>unconfirmed personal opinions</En>. State what happened.</Rule>
        <MeaningPairs
          kind="opposite"
          pairs={[['feit', 'mening'], ['formeel', 'sleng']]}
          aria="Two pairs of opposites: feit (fact) against mening (opinion), formeel (formal) against sleng (slang)."
        />
        <Worked
          title="Write it as a fact"
          steps={[
            <><Af>Die vergadering het om 14:00 begin.</Af> <En>The meeting began at 14:00.</En> <SpeakButton text="Die vergadering het om 14:00 begin." /></>,
            <>It names the event and the time. There is nothing to guess or feel.</>,
          ]}
        />
        <Mistake>Adding lines such as <Af>Ek dink dit was vervelig</Af> without proof. In a factual report leave out personal opinions that are not confirmed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Relevant detail only',
    content: slide(
      <>
        <Rule>Relevant detail matters because <Af>Dit hou die teks gefokus op die doel</Af> <En>it keeps the text focused on the purpose</En>.</Rule>
        <TaggedBoxes
          items={[{ word: 'Doel', tag: 'fokus' }, { word: 'Detail', tag: 'relevant' }]}
          aria="Two ideas that go together: the Doel (purpose) gives the focus, each Detail must be relevant to it."
        />
        <Worked
          title="Test each detail"
          steps={[
            <>Purpose: report on the sports day. Detail: the date, the events, the winners: relevant.</>,
            <>Detail: what you ate for breakfast: not relevant. Leave it out.</>,
          ]}
        />
        <Mistake>Adding every detail you know. Extra detail pulls the report away from its purpose.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reviews: opinion, then evidence',
    content: slide(
      <>
        <Rule>In a review, evidence usually comes after <Af>jou mening</Af> <En>your opinion</En>. Close with a recommendation.</Rule>
        <OrderTiles
          tiles={['Mening', 'Bewyse', 'Slot']}
          aria="Three parts of a review in order: Mening (opinion), Bewyse (evidence), Slot (closing recommendation)."
        />
        <Worked
          title="A strong closing"
          steps={[
            <>Opinion first, then a reason or example from the text.</>,
            <>Closing: <Af>Ek beveel hierdie teks aan vir leerders wat avontuur geniet.</Af> <En>I recommend this text to learners who enjoy adventure.</En> <SpeakButton text="Ek beveel hierdie teks aan vir leerders wat avontuur geniet." /></>,
          ]}
        />
        <Mistake>Giving evidence before any opinion, or ending without a recommendation. The strongest closing names who would enjoy the text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Edit: format, language, relevance',
    content: slide(
      <>
        <Rule>In term 4 writing, the best editing focus is <Af>Kontroleer formaat, taal en inhoudsrelevansie</Af> <En>check format, language and relevance of content</En>.</Rule>
        <OrderTiles
          tiles={['Formaat', 'Taal', 'Inhoud']}
          aria="Three editing checks: Formaat (format), Taal (language), Inhoud (relevant content)."
        />
        <Worked
          title="Three passes"
          steps={[
            <>Format: headings, layout and the right text type.</>,
            <>Language: spelling, punctuation and tone. Content: is every detail relevant?</>,
          ]}
        />
        <Mistake>Checking only the spelling. A report with the wrong format or off-topic detail still loses marks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>What is the main purpose of a report?</>} answer={<><Af>Om feite duidelik te rapporteer</Af>.</>} />
        <Check question={<>What must you avoid in a factual report?</>} answer={<><Af>Onbevestigde persoonlike menings</Af>.</>} />
        <Check question={<>Why is relevant detail important in a report?</>} answer={<><Af>Dit hou die teks gefokus op die doel</Af>.</>} />
        <Check question={<>In a review, evidence comes after what?</>} answer={<><Af>jou mening</Af> <En>your opinion</En>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat is die hoofdoel van 'n verslag?",
    options: ['Om feite duidelik te rapporteer', "Om 'n gedig te skryf oor 'n onderwerp", 'Om grappies te vertel aan die klas', 'Om dialoog tussen karakters te oefen'],
    answer: 'Om feite duidelik te rapporteer',
    explanation: 'Reports focus on objective information.',
  },
  {
    prompt: "Watter opskrif pas die beste in 'n verslag oor 'n skoolgeleentheid?",
    options: ['Doel en Agtergrond', 'My Gunsteling Woorde', 'Grap van die Dag', 'Versamelde Emoji'],
    answer: 'Doel en Agtergrond',
    explanation: 'Reports should include clear factual headings.',
  },
  {
    prompt: "Kies die sterkste slot vir 'n resensie.",
    options: ['Ek beveel hierdie teks aan vir leerders wat avontuur geniet.', "Die boek het papier en 'n harde omslag.", 'Daar is baie letters in die titel van die boek.', 'Ek weet nie wat om hieroor te sê nie.'],
    answer: 'Ek beveel hierdie teks aan vir leerders wat avontuur geniet.',
    explanation: 'A review closing should include recommendation.',
  },
  {
    prompt: "Waarom is relevante detail belangrik in 'n verslag?",
    options: ['Dit hou die teks gefokus op die doel', 'Dit maak die teks langer sonder rede', 'Dit verwyder alle feite', 'Dit verander die genre'],
    answer: 'Dit hou die teks gefokus op die doel',
    explanation: 'Only useful information should be included.',
  },
  {
    prompt: "Watter sin pas by formele verslagskryf?",
    options: ['Die vergadering het om 14:00 begin.', 'Dit was super cool en weird vir almal!', 'Ons het net gechill en gepraat vandag.', 'Dis mos obvious wat daar gebeur het.'],
    answer: 'Die vergadering het om 14:00 begin.',
    explanation: 'Formal reports use precise objective wording.',
  },
  {
    prompt: "Wat moet jy vermy in 'n feitlike verslag?",
    options: ['Onbevestigde persoonlike menings', 'Duidelike tydsaanduidings', 'Korrekte datums', 'Logiese volgorde'],
    answer: 'Onbevestigde persoonlike menings',
    explanation: 'Reports should prioritise verifiable facts.',
  },
  {
    prompt: "In 'n resensie moet bewyse gewoonlik kom ná ___.",
    options: ['jou mening', 'die slotgroet', 'die datum', 'die woordtelling'],
    answer: 'jou mening',
    explanation: 'Evidence supports the stated opinion.',
  },
  {
    prompt: "Kies die beste redigeringsfokus vir term 4 skryfwerk.",
    options: ['Kontroleer formaat, taal en inhoudsrelevansie', 'Verander net die kleur van die letters', 'Voeg nuwe feite by wat nie met die onderwerp verband hou nie', 'Skrap al die hoofletters in die teks'],
    answer: 'Kontroleer formaat, taal en inhoudsrelevansie',
    explanation: 'Final edits should align structure and language to purpose.',
  },
];

export { bank };

const ReviewReportWriting = () => (
  <AfrikaansTopic
    title="Resensie- en Verslagskryfwerk"
    subtitle="Structured factual reports and evidence-based reviews"
    learnSteps={learnSteps}
    task="gr8-review-report-writing-t4"
    bank={bank}
    speak="options"
  />
);

export default ReviewReportWriting;
