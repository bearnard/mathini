import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';

const learnSteps: LearnStep[] = [
  {
    title: 'Poetry basics',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Poems use lines and stanzas to build rhythm and meaning.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">strofe <SpeakButton text="strofe" /></span>
          <span className="inline-flex items-center">rym <SpeakButton text="rym" /></span>
          <span className="inline-flex items-center">beeldspraak <SpeakButton text="beeldspraak" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Mood and imagery',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Imagery helps us see, hear, or feel what the poet describes.
        </p>
        <p className="text-xl text-slate-700">
          Ask: “What picture does this line create in my mind?”
        </p>
      </div>
    ),
  },
  {
    title: 'Use line references',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In tests, support answers with evidence from a specific line or phrase.
        </p>
        <p className="text-slate-500">Quote short words from the poem to justify your choice.</p>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat noem ons 'n groep reëls in 'n gedig?",
    options: ['Strofe', 'Paragraaf', 'Hoofstuk', 'Titelblad'],
    answer: 'Strofe',
    explanation: 'A stanza is called a strofe in Afrikaans.',
  },
  {
    prompt: "As twee woorde dieselfde eindklank het, noem ons dit ___.",
    options: ['rym', 'tempo', 'tema', 'slot'],
    answer: 'rym',
    explanation: "Same ending sounds create rhyme ('rym').",
  },
  {
    prompt: "Watter vraag help met beeldspraak?",
    options: ['Watter beeld of gevoel skep die woorde?', 'Hoeveel letters is in elke woord?', 'Wie het die gedig gedruk?', 'Watter pen is gebruik?'],
    answer: 'Watter beeld of gevoel skep die woorde?',
    explanation: 'Imagery is about mental pictures and feelings.',
  },
  {
    prompt: "Kies die beste beskrywing van 'stemming' in 'n gedig.",
    options: ['Die gevoel wat die gedig skep', 'Die lengte van die gedig', 'Die prys van die boek', 'Die kleur van die bladsy'],
    answer: 'Die gevoel wat die gedig skep',
    explanation: 'Mood describes the emotional atmosphere.',
  },
  {
    prompt: "As 'n vraag vra vir 'reël 3', wat moet jy doen?",
    options: ['Lees en gebruik inligting uit reël 3', 'Slaan die reël oor', 'Skryf net jou naam', 'Verander die gedig se titel'],
    answer: 'Lees en gebruik inligting uit reël 3',
    explanation: 'Line-reference questions need evidence from that line.',
  },
  {
    prompt: "Watter opsie pas by poësie-analise?",
    options: ['Kyk na woordkeuse en betekenis', 'Memoriseer slegs die bladsygetal', 'Ignoreer leestekens heeltemal', 'Skryf sonder om te lees'],
    answer: 'Kyk na woordkeuse en betekenis',
    explanation: 'Poetry analysis focuses on language choices and meaning.',
  },
  {
    prompt: "Watter woord wys klankherhaling in poësie?",
    options: ['alliterasie', 'paragraaf', 'opskrif', 'uitgawe'],
    answer: 'alliterasie',
    explanation: 'Alliteration repeats initial sounds.',
  },
  {
    prompt: "Wat is die beste eerste stap by 'n onbekende gedig?",
    options: ['Lees die hele gedig stadig deur', 'Skryf antwoorde sonder lees', 'Kies lukraak opsies', 'Begin by die laaste vraag'],
    answer: 'Lees die hele gedig stadig deur',
    explanation: 'First read builds understanding before answering questions.',
  },
];

const PoetryTextStudy = () => (
  <AfrikaansTopic
    title="Poësie & Teksstudie"
    subtitle="Imagery, mood and line-reference skills"
    learnSteps={learnSteps}
    task="gr7-poetry-text-study-t2"
    bank={bank}
    speak="options"
  />
);

export default PoetryTextStudy;
