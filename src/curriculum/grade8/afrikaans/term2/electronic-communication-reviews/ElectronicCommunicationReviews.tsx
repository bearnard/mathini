import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';

const learnSteps: LearnStep[] = [
  {
    title: 'Email conventions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Emails need a subject line, greeting, clear body and suitable closing.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xl font-bold text-indigo-600">
          <span className="inline-flex items-center">onderwerplyn <SpeakButton text="onderwerplyn" /></span>
          <span className="inline-flex items-center">groet <SpeakButton text="groet" /></span>
          <span className="inline-flex items-center">register <SpeakButton text="register" /></span>
        </div>
      </div>
    ),
  },
  {
    title: 'Review writing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A good review gives an opinion, evidence and a final recommendation.
        </p>
        <p className="text-xl text-slate-700">Match tone to purpose and audience.</p>
      </div>
    ),
  },
  {
    title: 'Choose the correct formality',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Formal writing avoids slang and uses respectful, direct wording.
        </p>
        <p className="text-slate-500">Always check if the reader is a friend, teacher or organisation.</p>
      </div>
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter deel van 'n e-pos verduidelik die onderwerp in een kort frase?",
    options: ['Onderwerplyn', 'Handtekening', 'Slotparagraaf', 'Opskrifprent'],
    answer: 'Onderwerplyn',
    explanation: 'The subject line states what the email is about.',
  },
  {
    prompt: "Kies die mees gepaste formele groet vir 'n skoolhoof.",
    options: ['Geagte Mnr. Jacobs', 'Haai ou maat', 'Yo, wat gaan aan?', 'Hallo daar vriend'],
    answer: 'Geagte Mnr. Jacobs',
    explanation: 'Formal emails use respectful greetings.',
  },
  {
    prompt: "Wat moet ná jou mening in 'n resensie volg?",
    options: ['Bewyse of rede uit die teks', 'Nog drie vrae', 'Net emojis', 'Geen verdere sin'],
    answer: 'Bewyse of rede uit die teks',
    explanation: 'Evidence supports the review opinion.',
  },
  {
    prompt: "Watter slot pas die beste in 'n formele e-pos?",
    options: ['Vriendelike groete', 'Cheers!', 'Later!', 'Totsiens maat'],
    answer: 'Vriendelike groete',
    explanation: 'Formal closings should remain polite and neutral.',
  },
  {
    prompt: "Waarom is register belangrik in elektroniese kommunikasie?",
    options: ['Dit pas taal by doel en gehoor', 'Dit maak sinne langer', 'Dit verwyder leestekens', 'Dit verander die onderwerp'],
    answer: 'Dit pas taal by doel en gehoor',
    explanation: 'Register controls tone and appropriateness.',
  },
  {
    prompt: "Kies die beste openingsin vir 'n boekresensie.",
    options: ['Hierdie roman is boeiend omdat die konflik realisties is.', 'Ek het hierdie week sokker gespeel.', 'Die boek het papierbladsye.', 'Daar is baie letters in die titel.'],
    answer: 'Hierdie roman is boeiend omdat die konflik realisties is.',
    explanation: 'It gives opinion and reason clearly.',
  },
  {
    prompt: "Watter een is 'n transaksionele teks in term 2?",
    options: ['E-pos', 'Gedig', 'Toneelstuk', 'Plakkaat'],
    answer: 'E-pos',
    explanation: 'An email is a practical transactional format.',
  },
  {
    prompt: "As jy aan 'n vriend skryf, watter register is gewoonlik gepas?",
    options: ['Informeel maar duidelik', 'Uiters formeel met titels', 'Wiskundige notasie', 'Geen groet of slot'],
    answer: 'Informeel maar duidelik',
    explanation: 'Audience determines an appropriate level of formality.',
  },
];

const ElectronicCommunicationReviews = () => (
  <AfrikaansTopic
    title="Elektroniese Kommunikasie & Resensies"
    subtitle="Email format, tone control and review-writing essentials"
    learnSteps={learnSteps}
    task="gr8-electronic-communication-reviews-t2"
    bank={bank}
    speak="options"
  />
);

export default ElectronicCommunicationReviews;
