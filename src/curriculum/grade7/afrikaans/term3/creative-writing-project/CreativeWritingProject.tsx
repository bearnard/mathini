import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Project writing process',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A creative project goes through planning, drafting, revising and presenting.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">beplan <SpeakButton text="beplan" /></span>
          <span className="inline-flex items-center">hersien <SpeakButton text="hersien" /></span>
          <span className="inline-flex items-center">aanbied <SpeakButton text="aanbied" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Develop your draft',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Keep your topic and audience in mind while adding detail to each paragraph.
        </p>
        <p className="text-xl text-slate-700">Use feedback to improve clarity and creativity.</p>
      </div>
    ),
  },
  {
    title: 'Present confidently',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Final projects should be neat, accurate, and easy to follow.
        </p>
        <p className="text-slate-500">Check spelling, punctuation and layout before submission.</p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Practice these drafting words aloud before turning ideas into a polished creative piece.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"idees"} phonetic={"[iˈdeəs]"} meaning={"ideas"} lang="af" />
          <PronunciationPlayer word={"beplan"} phonetic={"[bəˈplan]"} meaning={"plan"} lang="af" />
          <PronunciationPlayer word={"eerste weergawe"} phonetic={"[ˈiərstə viərˌχɑːvə]"} meaning={"first draft"} lang="af" />
          <PronunciationPlayer word={"wysig"} phonetic={"[ˈvɛisəχ]"} meaning={"revise / edit"} lang="af" />
          <PronunciationPlayer word={"aanbied"} phonetic={"[ˈanbeət]"} meaning={"present"} lang="af" />
          <PronunciationPlayer word={"skryf"} phonetic={"[skrɛif]"} meaning={"write"} lang="af" />
        </div>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter stap kom eerste in 'n skryfprojek?",
    options: ['Beplanning', 'Aanbieding', 'Finale druk', 'Mondelinge refleksie'],
    answer: 'Beplanning',
    explanation: 'Planning comes before drafting and editing.',
  },
  {
    prompt: "Wat is die doel van 'n eerste konsep (draft)?",
    options: ['Om idees neer te skryf wat later verbeter kan word', 'Om die finale foutlose weergawe te wees', "Om net 'n titel te kies", 'Om beoordeling te vermy'],
    answer: 'Om idees neer te skryf wat later verbeter kan word',
    explanation: 'A draft is a working version to improve later.',
  },
  {
    prompt: "Waarom is terugvoer van 'n maat nuttig?",
    options: ['Dit wys waar die teks onduidelik of swak is', 'Dit vervang alle skryfwerk', 'Dit verander jou onderwerp outomaties', 'Dit maak redigering onnodig'],
    answer: 'Dit wys waar die teks onduidelik of swak is',
    explanation: 'Peer feedback helps improve quality.',
  },
  {
    prompt: "Kies die beste beskrywing van 'hersien'.",
    options: ['Verbeter inhoud, orde en woordkeuse', 'Net verander lettergrootte', 'Skrap alle paragrawe', "Skryf 'n nuwe onderwerp sonder rede"],
    answer: 'Verbeter inhoud, orde en woordkeuse',
    explanation: 'Revision focuses on meaning and structure.',
  },
  {
    prompt: "Wat moet jy tydens redigering fokus?",
    options: ['Spelling, leestekens en grammatika', 'Net die prentjies by die teks', 'Slegs die eerste sin van die opstel', 'Die kleur van die papier van die opstel'],
    answer: 'Spelling, leestekens en grammatika',
    explanation: 'Editing checks language accuracy.',
  },
  {
    prompt: "Watter is die beste doel vir 'n projekaanbieding?",
    options: ['Om jou werk duidelik en selfversekerd te deel', 'Om vinnig sonder voorbereiding te praat', 'Om die gehoor te verwar', 'Om slegs van die bord af te lees'],
    answer: 'Om jou werk duidelik en selfversekerd te deel',
    explanation: 'Presentations should be clear and confident.',
  },
  {
    prompt: "Kies die beste tydsbestuur-strategie vir 'n lang taak.",
    options: ['Breek die taak in kleiner sperdatums op', 'Wag tot die laaste aand voor inhandiging', "Skryf sonder 'n plan vir die taak", 'Ignoreer die assesseringsrubriek heeltemal'],
    answer: 'Breek die taak in kleiner sperdatums op',
    explanation: 'Chunking tasks improves project completion.',
  },
  {
    prompt: "Watter sin wys gepaste projekrefleksie?",
    options: ['Ek het my tweede konsep verbeter ná terugvoer.', 'Ek het geen veranderinge nodig nie ooit.', 'Ek het nie die vraag gelees nie.', 'Ek het net die titel geskryf.'],
    answer: 'Ek het my tweede konsep verbeter ná terugvoer.',
    explanation: 'Reflection shows growth through revision.',
  },
];

const CreativeWritingProject = () => (
  <AfrikaansTopic
    title="Kreatiewe Skryfprojek"
    subtitle="Planning, drafting, revising and presenting"
    learnSteps={learnSteps}
    task="gr7-creative-writing-project-t3"
    bank={bank}
    speak="options"
  />
);

export default CreativeWritingProject;
