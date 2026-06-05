import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Report writing essentials',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reports must be factual, concise and structured for a clear purpose.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">verslag <SpeakButton text="verslag" /></span>
          <span className="inline-flex items-center">opsomming <SpeakButton text="opsomming" /></span>
          <span className="inline-flex items-center">relevante detail <SpeakButton text="relevante detail" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Balanced review responses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reviews include clear opinion, supporting evidence and recommendation.
        </p>
        <p className="text-xl text-slate-700">Avoid vague claims without examples.</p>
      </div>
    ),
  },
  {
    title: 'Format and edit carefully',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Correct headings, sequence and language accuracy improve marks in transactional writing.
        </p>
        <p className="text-slate-500">Check if every sentence supports the writing purpose.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say these literature words aloud before discussing stories, poems, characters, and themes.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"karakter"} phonetic={"[karakˈtɛr]"} meaning={"character"} lang="af" />
          <PronunciationPlayer word={"tema"} phonetic={"[ˈteːma]"} meaning={"theme"} lang="af" />
          <PronunciationPlayer word={"konflik"} phonetic={"[kɔnˈflək]"} meaning={"conflict"} lang="af" />
          <PronunciationPlayer word={"storie"} phonetic={"[ˈstoːri]"} meaning={"story"} lang="af" />
          <PronunciationPlayer word={"resensie"} phonetic={"[rɛˈsɛnsi]"} meaning={"review"} lang="af" />
          <PronunciationPlayer word={"toneel"} phonetic={"[tɔˈniəl]"} meaning={"scene / stage"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat is die hoofdoel van 'n verslag?",
    options: ['Om feite duidelik te rapporteer', "Om 'n gedig te skryf", 'Om grappies te vertel', 'Om dialoog te oefen'],
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
    options: ['Ek beveel hierdie teks aan vir leerders wat avontuur geniet.', 'Die boek het papier.', 'Daar is baie letters.', 'Ek weet nie.'],
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
    options: ['Die vergadering het om 14:00 begin en 45 minute geduur.', 'Dit was super cool en weird!', 'Ons het net gechill.', 'Dis mos obvious wat gebeur het.'],
    answer: 'Die vergadering het om 14:00 begin en 45 minute geduur.',
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
    options: ['Kontroleer formaat, taal en inhoudsrelevansie', 'Verander net letterkleur', 'Voeg willekeurige feite by', 'Skrap alle hoofletters'],
    answer: 'Kontroleer formaat, taal en inhoudsrelevansie',
    explanation: 'Final edits should align structure and language to purpose.',
  },
];

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
