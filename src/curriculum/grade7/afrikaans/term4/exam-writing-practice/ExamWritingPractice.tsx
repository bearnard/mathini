import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';

const learnSteps: LearnStep[] = [
  {
    title: 'Write under time pressure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Exam writing needs quick planning, correct format and steady time management.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">beplan <SpeakButton text="beplan" /></span>
          <span className="inline-flex items-center">tydbestuur <SpeakButton text="tydbestuur" /></span>
          <span className="inline-flex items-center">kontrolelys <SpeakButton text="kontrolelys" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Follow format rules',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Different tasks need different structures: essay, formal text or informal response.
        </p>
        <p className="text-xl text-slate-700">Choose the format that matches the question.</p>
      </div>
    ),
  },
  {
    title: 'Use an editing checklist',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reserve a few minutes to check spelling, punctuation and sentence flow.
        </p>
        <p className="text-slate-500">Small corrections can improve marks quickly.</p>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat is die beste eerste stap in 'n eksamenskryftaak?",
    options: ['Lees die vraag en beplan kortliks', 'Skryf onmiddellik sonder lees', "Kies eers 'n slot", 'Ignoreer die onderwerp'],
    answer: 'Lees die vraag en beplan kortliks',
    explanation: 'Quick planning improves relevance and structure.',
  },
  {
    prompt: "Watter praktyk wys goeie tydbestuur?",
    options: ['Verdeel tyd tussen beplanning, skryf en redigering', 'Gebruik al die tyd op die inleiding', 'Slaan redigering oor', 'Skryf net bullet points'],
    answer: 'Verdeel tyd tussen beplanning, skryf en redigering',
    explanation: 'Balanced timing helps complete all sections well.',
  },
  {
    prompt: "Kies die beste rede om 'n kontrolelys te gebruik.",
    options: ['Dit help jou om algemene foute op te spoor', 'Dit maak beplanning onnodig', 'Dit vervang inhoud', 'Dit verander die vraag'],
    answer: 'Dit help jou om algemene foute op te spoor',
    explanation: 'Checklists improve technical accuracy.',
  },
  {
    prompt: "Watter antwoord pas by 'n formele eksamenvraag?",
    options: ['Nette, formele taal met duidelike paragrawe', 'Baie sleng en afkortings', 'Slegs los notas', 'Emojis as hoofinhoud'],
    answer: 'Nette, formele taal met duidelike paragrawe',
    explanation: 'Formal tasks need formal style and structure.',
  },
  {
    prompt: "As die onderwerp vra vir 'n narratiewe opstel, wat moet jy doen?",
    options: ["Vertel 'n samehangende storie met begin, middel en einde", 'Skryf net feite in lysvorm', 'Gebruik brief-formaat', 'Gee net definisies'],
    answer: "Vertel 'n samehangende storie met begin, middel en einde",
    explanation: 'Narrative essays require clear storyline structure.',
  },
  {
    prompt: "Watter fout kom dikwels voor onder tydsdruk?",
    options: ['Vergeet van leestekens', 'Te veel beplanning', 'Te veel hersiening', 'Te netjiese handskrif'],
    answer: 'Vergeet van leestekens',
    explanation: 'Punctuation errors increase when learners rush.',
  },
  {
    prompt: "Kies die beste afsluiting vir 'n opstel.",
    options: ['Laastens bevestig hierdie ervaring waarom deursettingsvermoë belangrik is.', 'En toe stop ek sommer daar.', 'My pen is swart.', 'Einde van vraagpapier.'],
    answer: 'Laastens bevestig hierdie ervaring waarom deursettingsvermoë belangrik is.',
    explanation: 'A conclusion should wrap up the main idea meaningfully.',
  },
  {
    prompt: "Waarom is format-herroeping belangrik in eksamens?",
    options: ['Verkeerde formaat kan punte kos al is taal goed', 'Formaat tel nooit nie', 'Formaat is net vir kuns', 'Formaat vervang inhoud heeltemal'],
    answer: 'Verkeerde formaat kan punte kos al is taal goed',
    explanation: 'Assessment rubrics include format requirements.',
  },
];

const ExamWritingPractice = () => (
  <AfrikaansTopic
    title="Eksamen-skryf Oefening"
    subtitle="Timed writing, format recall and editing"
    learnSteps={learnSteps}
    task="gr7-exam-writing-practice-t4"
    bank={bank}
    speak="options"
  />
);

export default ExamWritingPractice;
