import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Revise all major genres',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 revision combines stories, poems, letters, visual texts and comprehension.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">kortverhaal <SpeakButton text="kortverhaal" /></span>
          <span className="inline-flex items-center">gedig <SpeakButton text="gedig" /></span>
          <span className="inline-flex items-center">brief <SpeakButton text="brief" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Use retrieval and summary skills',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          First retrieve facts, then summarise the core message in your own words.
        </p>
        <p className="text-xl text-slate-700">Answer what is asked, not everything you know.</p>
      </div>
    ),
  },
  {
    title: 'Mix strategies confidently',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Switch quickly between genre conventions and language rules during revision practice.
        </p>
        <p className="text-slate-500">Balanced revision improves exam readiness.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say these visual-text words aloud before analysing advertisements, signs, and layout choices.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"advertensie"} phonetic={"[adfərˈtɛnsi]"} meaning={"advertisement"} lang="af" />
          <PronunciationPlayer word={"prys"} phonetic={"[prɛis]"} meaning={"price"} lang="af" />
          <PronunciationPlayer word={"afslag"} phonetic={"[ˈafslax]"} meaning={"discount"} lang="af" />
          <PronunciationPlayer word={"teken"} phonetic={"[ˈtɛikən]"} meaning={"sign"} lang="af" />
          <PronunciationPlayer word={"waarskuwing"} phonetic={"[ˈvɑːrskœvəŋ]"} meaning={"warning"} lang="af" />
          <PronunciationPlayer word={"uitverkoping"} phonetic={"[œitfərˈkoːpəŋ]"} meaning={"sale / clearance"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter tekssoort fokus op rym en beeldspraak?",
    options: ['Gedig', 'Formele brief', 'Advertensieverslag', 'Agenda'],
    answer: 'Gedig',
    explanation: 'Poetry often uses rhyme and imagery.',
  },
  {
    prompt: "Watter vaardigheid beteken 'haal feite direk uit die teks'?",
    options: ['Herwinning/retrieval', 'Uitvinding', 'Raaiwerk', 'Parafrasering sonder lees'],
    answer: 'Herwinning/retrieval',
    explanation: 'Retrieval questions ask for explicit information.',
  },
  {
    prompt: "Kies die beste opsomming van 'n teks.",
    options: ["'n Kort weergawe van die hoofidees in eie woorde", 'Elke detail woord vir woord herhaal', 'Slegs die titel van die teks', "'n Nuwe storie sonder enige verband"],
    answer: "'n Kort weergawe van die hoofidees in eie woorde",
    explanation: 'A summary captures only key points concisely.',
  },
  {
    prompt: "Watter genre pas by die doel 'om iemand formeel te vra'?",
    options: ['Formele brief', 'Kort gedig', 'Advertensieslagspreuk', 'Komiese dialoog'],
    answer: 'Formele brief',
    explanation: 'Formal requests are usually written as formal letters.',
  },
  {
    prompt: "In 'n visuele teks-vraag, wat moet jy altyd oorweeg?",
    options: ['Beeld, woordkeuse en teikengehoor', 'Net die bladsynommer van die teks', 'Net die lettertipe van die teks', 'Slegs die datum van publikasie'],
    answer: 'Beeld, woordkeuse en teikengehoor',
    explanation: 'Visual and language cues carry the message.',
  },
  {
    prompt: "Watter strategie help met gemengde hersiening?",
    options: ['Oefen verskillende vraagtipes in een sessie', 'Herhaal net een tipe vraag keer op keer', 'Slaan die moeilike vrae altyd oor', 'Gebruik nooit terugvoer van die onderwyser nie'],
    answer: 'Oefen verskillende vraagtipes in een sessie',
    explanation: 'Mixed practice prepares you for integrated assessments.',
  },
  {
    prompt: "Kies die beste voorbeeld van genre-bewustheid.",
    options: ["Ek gebruik 'Geagte' in 'n formele brief.", "Ek gebruik 'Liewe dagboek' in 'n advertensie.", 'Ek gebruik rym in elke toetsantwoord.', 'Ek ignoreer die formaat.'],
    answer: "Ek gebruik 'Geagte' in 'n formele brief.",
    explanation: 'Language choices should suit the genre.',
  },
  {
    prompt: "Waarom is term 4-hersiening belangrik?",
    options: ['Dit konsolideer al die jaar se vaardighede', 'Dit vervang alle assessering van die jaar', 'Dit maak leeswerk heeltemal oorbodig', 'Dit fokus net op een onderwerp van die jaar'],
    answer: 'Dit konsolideer al die jaar se vaardighede',
    explanation: 'Revision combines and strengthens prior learning.',
  },
];

const RevisionGenresSkills = () => (
  <AfrikaansTopic
    title="Hersiening van Genres en Vaardighede"
    subtitle="Integrated revision across Grade 7 Afrikaans FAL"
    learnSteps={learnSteps}
    task="gr7-revision-genres-skills-t4"
    bank={bank}
    speak="options"
  />
);

export default RevisionGenresSkills;
