import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Project planning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Creative projects need a clear theme, timeline and research notes.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">beplanning <SpeakButton text="beplanning" /></span>
          <span className="inline-flex items-center">navorsing <SpeakButton text="navorsing" /></span>
          <span className="inline-flex items-center">aanbieding <SpeakButton text="aanbieding" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Draft and revise',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Build a first draft, then improve content using feedback and rubric criteria.
        </p>
        <p className="text-xl text-slate-700">Revision should improve both ideas and language accuracy.</p>
      </div>
    ),
  },
  {
    title: 'Present with confidence',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Final presentations should be organised, audible and suited to the audience.
        </p>
        <p className="text-slate-500">Use cue cards instead of reading every sentence word for word.</p>
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
    prompt: "Watter stap kom eerste in 'n kreatiewe projek?",
    options: ['Beplan die onderwerp en doel', 'Dien die finale weergawe in', 'Doen mondeling sonder voorbereiding', 'Ignoreer die rubriek'],
    answer: 'Beplan die onderwerp en doel',
    explanation: 'Planning starts the process.',
  },
  {
    prompt: "Waarom is navorsingsnotas nuttig tydens projekwerk?",
    options: ['Dit gee feite en idees vir inhoud', 'Dit vervang alle redigering', 'Dit maak die projek korter', 'Dit verander die taal outomaties'],
    answer: 'Dit gee feite en idees vir inhoud',
    explanation: 'Notes help build informed content.',
  },
  {
    prompt: "Wat is die beste beskrywing van 'n eerste konsep?",
    options: ['Werkweergawe wat later verbeter word', 'Die finale teks sonder enige foute', "Slegs 'n titel vir die opstel", "'n Mondelinge aanbieding voor die klas"],
    answer: 'Werkweergawe wat later verbeter word',
    explanation: 'A draft is not the final submission.',
  },
  {
    prompt: "Kies die sterkste gebruik van terugvoer.",
    options: ['Verbeter paragraaforde en woordkeuse', 'Verwyder alle inhoud', 'Ignoreer kommentaar heeltemal', 'Verander net die lettertipe'],
    answer: 'Verbeter paragraaforde en woordkeuse',
    explanation: 'Feedback should lead to meaningful revisions.',
  },
  {
    prompt: "Watter praktyk wys goeie tydsbestuur?",
    options: ['Stel klein sperdatums vir elke deel', 'Wag tot die laaste dag voor die sperdatum', "Skryf sonder 'n plan of volgorde", 'Dien halfklaar werk in om tyd te spaar'],
    answer: 'Stel klein sperdatums vir elke deel',
    explanation: 'Milestones keep progress on track.',
  },
  {
    prompt: "Waarom is die rubriek belangrik?",
    options: ['Dit wys presies hoe die werk geassesseer word', 'Dit vervang die onderwerp van die opdrag', 'Dit is net bedoel vir die onderwysers', 'Dit maak die taalreëls onnodig'],
    answer: 'Dit wys presies hoe die werk geassesseer word',
    explanation: 'Rubrics guide quality and focus.',
  },
  {
    prompt: "Kies die beste aanbiedingstegniek.",
    options: ['Praat duidelik en hou oogkontak', 'Lees vinnig sonder pouses', 'Kyk net na die vloer', 'Praat baie sag'],
    answer: 'Praat duidelik en hou oogkontak',
    explanation: 'Confident delivery improves communication.',
  },
  {
    prompt: "Watter sin wys gepaste refleksie ná die projek?",
    options: ['Ek het my tweede konsep verbeter ná terugvoer.', 'Ek het niks geleer nie en dit was nutteloos.', 'Ek het net die titel van die opstel verander.', 'Ek het die vraag nie mooi gelees nie.'],
    answer: 'Ek het my tweede konsep verbeter ná terugvoer.',
    explanation: 'Reflection should show growth and improvement.',
  },
];

const CreativeWritingProject = () => (
  <AfrikaansTopic
    title="Kreatiewe Skryfprojek"
    subtitle="Research, drafting, revision and presentation process"
    learnSteps={learnSteps}
    task="gr8-creative-writing-project-t3"
    bank={bank}
    speak="options"
  />
);

export default CreativeWritingProject;
