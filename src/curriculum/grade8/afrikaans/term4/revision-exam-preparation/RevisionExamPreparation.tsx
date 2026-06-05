import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Exam strategy basics',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Revision combines comprehension, summary and language editing under time limits.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">hersiening <SpeakButton text="hersiening" /></span>
          <span className="inline-flex items-center">opsomming <SpeakButton text="opsomming" /></span>
          <span className="inline-flex items-center">begrip <SpeakButton text="begrip" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Apply reading techniques',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Skim for main ideas first, then scan for details needed by each question.
        </p>
        <p className="text-xl text-slate-700">Underline keywords before selecting an answer.</p>
      </div>
    ),
  },
  {
    title: 'Practise timed responses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Allocate time per section and leave minutes for a final accuracy check.
        </p>
        <p className="text-slate-500">Consistent practice improves confidence in final exams.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practice these comprehension words aloud so question terms are familiar during reading tasks.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"vraag"} phonetic={"[frɑːχ]"} meaning={"question"} lang="af" />
          <PronunciationPlayer word={"antwoord"} phonetic={"[ˈantvɔrt]"} meaning={"answer"} lang="af" />
          <PronunciationPlayer word={"paragraaf"} phonetic={"[paraˈχrɑːf]"} meaning={"paragraph"} lang="af" />
          <PronunciationPlayer word={"hoofgedagte"} phonetic={"[ˈhoəfχədaχtə]"} meaning={"main idea"} lang="af" />
          <PronunciationPlayer word={"detail"} phonetic={"[diˈtœil]"} meaning={"detail"} lang="af" />
          <PronunciationPlayer word={"opsomming"} phonetic={"[ˈɔpsɔməŋ]"} meaning={"summary"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter leesstrategie help die meeste by 'n nuwe begripstoets?",
    options: ['Lees eers vir hoofidee en doel', 'Skryf antwoorde sonder lees', 'Begin by die moeilikste vraag net', 'Ignoreer die teks'],
    answer: 'Lees eers vir hoofidee en doel',
    explanation: 'Main idea first gives context for details.',
  },
  {
    prompt: "Wat is die doel van 'n opsomming?",
    options: ['Gee kernpunte kort en duidelik', 'Kopieer die hele teks', 'Voeg nuwe stories by', 'Gebruik slegs vrae'],
    answer: 'Gee kernpunte kort en duidelik',
    explanation: 'Summaries condense essential information.',
  },
  {
    prompt: "Waarom is tydsbeplanning belangrik in eksamens?",
    options: ['Dit help jou om alle afdelings te voltooi', 'Dit maak antwoorde langer', 'Dit vervang studie', 'Dit verwyder moeilike vrae'],
    answer: 'Dit help jou om alle afdelings te voltooi',
    explanation: 'Time management prevents unfinished sections.',
  },
  {
    prompt: "Kies die beste laaste stap voor inhandiging.",
    options: ['Kontroleer spelling, leestekens en instruksies', 'Begin nuwe antwoorde', 'Skryf alles weer oor', 'Slaan die laaste bladsy oor'],
    answer: 'Kontroleer spelling, leestekens en instruksies',
    explanation: 'Final checks catch preventable errors.',
  },
  {
    prompt: "In luister-aktiwiteite moet jy veral fokus op ___.",
    options: ['sleutelwoorde en feite', 'die klankvolume alleen', 'die lengte van die opname', 'die spreker se skoene'],
    answer: 'sleutelwoorde en feite',
    explanation: 'Keywords help recall accurate details.',
  },
  {
    prompt: "Watter antwoord toon goeie eksamentegniek?",
    options: ['Ek lees elke instruksie twee keer.', 'Ek raai voordat ek lees.', 'Ek antwoord in enige taal.', 'Ek slaan maklike vrae oor.'],
    answer: 'Ek lees elke instruksie twee keer.',
    explanation: 'Careful instruction reading reduces mistakes.',
  },
  {
    prompt: "As 'n vraag vra vir twee punte, wat moet jy doen?",
    options: ['Gee twee duidelike antwoorde', 'Gee een lang storie', 'Los dit oop', "Skryf net 'ja'"],
    answer: 'Gee twee duidelike antwoorde',
    explanation: 'Mark allocation guides expected response length.',
  },
  {
    prompt: "Wat is die beste houding tydens hersiening?",
    options: ['Werk gereeld met gemengde oefeninge', 'Studeer net die aand voor', 'Herhaal net een onderwerp', 'Moenie foute regmaak nie'],
    answer: 'Werk gereeld met gemengde oefeninge',
    explanation: 'Regular mixed practice builds retention.',
  },
];

const RevisionExamPreparation = () => (
  <AfrikaansTopic
    title="Hersiening & Eksamenvoorbereiding"
    subtitle="Comprehension, summary and timed exam strategy practice"
    learnSteps={learnSteps}
    task="gr8-revision-exam-preparation-t4"
    bank={bank}
    speak="options"
  />
);

export default RevisionExamPreparation;
