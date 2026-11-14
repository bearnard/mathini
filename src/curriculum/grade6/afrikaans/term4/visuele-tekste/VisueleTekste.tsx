import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Look for key words',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Visual texts use short words, pictures and prices. Read the most important words first.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-2xl font-bold text-indigo-600">
          <span className="inline-flex items-center">vars <SpeakButton text="vars" /></span>
          <span className="inline-flex items-center">gratis <SpeakButton text="gratis" /></span>
          <span className="inline-flex items-center">oop <SpeakButton text="oop" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Understand signs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Signs often give instructions. Words like <strong>moenie</strong>, <strong>stilte</strong> and <strong>gevaar</strong> tell you what to do.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-2xl font-bold text-indigo-600">
          <span className="inline-flex items-center">moenie <SpeakButton text="moenie" /></span>
          <span className="inline-flex items-center">stilte <SpeakButton text="stilte" /></span>
          <span className="inline-flex items-center">gevaar <SpeakButton text="gevaar" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Make an inference',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Ask: What is being advertised? Who is it for? What action should the reader take?
        </p>
        <p className="text-xl text-slate-700">
          <strong>Net R10</strong> tells you the price is low or special.
        </p>
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

export const bank: AfrikaansItem[] = [
  {
    prompt: "'n Advertensie sê: 'Vars brood — net R10!' Wat word verkoop?",
    options: ['brood', 'melk', 'koek', 'sap'],
    answer: 'brood',
    explanation: "The advert says 'vars brood', so it sells bread.",
  },
  {
    prompt: "'n Bord sê: 'Stilte asseblief — Eksamen.' Wat moet jy doen?",
    options: ['stil wees', 'hard praat', 'hardloop', 'eet'],
    answer: 'stil wees',
    explanation: "'Stilte asseblief' asks you to be quiet.",
  },
  {
    prompt: "'n Winkelvenster sê: 'Koop 2, kry 1 gratis.' Wat kry jy sonder betaling?",
    options: ['een item', 'twee items', 'geld', 'water'],
    answer: 'een item',
    explanation: "'kry 1 gratis' means you get one item free.",
  },
  {
    prompt: "'n Teken by 'n hek sê: 'Moenie ingaan nie.' Wat beteken dit?",
    options: ['bly buite', 'kom binne', 'sing saam', 'koop nou'],
    answer: 'bly buite',
    explanation: "'Moenie ingaan nie' means do not enter.",
  },
  {
    prompt: "'n Plakkaat sê: 'Skoolkonsert Vrydag 18:00.' Wanneer is die konsert?",
    options: ['Vrydag', 'Maandag', 'Saterdag', 'Sondag'],
    answer: 'Vrydag',
    explanation: "The poster gives Friday as the day.",
  },
  {
    prompt: "'n Advertensie sê: 'Koue sap vir warm dae.' Watter produk word bemark?",
    options: ['sap', 'sop', 'skoene', 'boeke'],
    answer: 'sap',
    explanation: "The key product word is 'sap'.",
  },
  {
    prompt: "'n Padteken sê: 'Gevaar: nat vloer.' Wat moet jy doen?",
    options: ['versigtig loop', 'vinnig gly', 'hard skree', 'water mors'],
    answer: 'versigtig loop',
    explanation: "A danger sign tells you to be careful.",
  },
  {
    prompt: "'n Biblioteekbord sê: 'Boeke terug teen Maandag.' Wat moet teruggaan?",
    options: ['boeke', 'fietse', 'brood', 'kaartjies'],
    answer: 'boeke',
    explanation: "The sign says the books must be returned.",
  },
  {
    prompt: "'n Advertensie sê: 'Nuwe rugsakke — sterk en lig.' Watter beskrywing pas by die rugsakke?",
    options: ['Stewig en liggewig', 'Oud en swaar', 'Nat en koud', 'Hard en sout'],
    answer: 'Stewig en liggewig',
    explanation: "The advert describes the bags as strong and light.",
  },
];

const VisueleTekste = () => (
  <AfrikaansTopic title="Visuele Tekste" subtitle="Adverts, signs & visual texts" learnSteps={learnSteps} task="visuele-tekste" bank={bank} speak="both" />
);

export default VisueleTekste;
