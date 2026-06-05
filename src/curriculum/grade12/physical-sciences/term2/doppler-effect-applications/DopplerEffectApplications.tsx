import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { PhysicalSciencesItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import dynamic from 'next/dynamic';

const WaveInterference = dynamic(() => import('@/components/subjects/PhysicsSim/WaveInterference'), { ssr: false });

const learnSteps: LearnStep[] = [
  {
    title: 'Observed frequency changes with relative motion',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          The Doppler effect is the apparent change in observed frequency when the source and the listener move
          relative to one another. Approaching motion increases the observed frequency, while receding motion lowers it.
        </p>
        <Formula block>{String.raw`f_L = \frac{v \pm v_L}{v \mp v_s}f_s`}</Formula>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Use the sign that makes the frequency larger when source and listener move closer together.</li>
          <li>Use the sign that makes the frequency smaller when they move apart.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Approaching means higher pitch for sound',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          A higher observed frequency is heard as a higher pitch. Wavefronts are bunched together in front of an
          approaching source and spread out behind a receding source, which is why a siren changes pitch as it passes.
        </p>
        <div className="rounded-2xl bg-slate-50 p-4">
          <WaveInterference />
        </div>
      </div>
    ),
  },
  {
    title: 'Medical ultrasound uses reflected Doppler shifts',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          Doppler ultrasound sends sound into the body and measures the shift of the reflected wave. Blood cells moving
          toward the probe give a higher reflected frequency, while flow away from the probe gives a lower one.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Toward probe</strong>
            <p className="mt-2 text-slate-600">Observed reflected frequency increases.</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <strong className="text-cyan-700">Away from probe</strong>
            <p className="mt-2 text-slate-600">Observed reflected frequency decreases.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Red shift links Doppler ideas to astronomy',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">
          For light, motion away from the observer stretches the wavelength toward the red end of the spectrum.
          When many distant galaxies show red shift, it supports the idea that the universe is expanding.
        </p>
        <div className="rounded-2xl bg-rose-50 p-4 text-lg leading-8 text-slate-600">
          <span className="font-semibold text-rose-700">Red shift:</span> longer wavelength, lower observed frequency,
          source moving away.
        </div>
      </div>
    ),
  },
];

const items: PhysicalSciencesItem[] = [
  {
    "id": "doppler-effect-applications-1",
    "question": "An ambulance siren sounds higher in pitch as it approaches you because the observed frequency is:",
    "options": [
      "lower",
      "unchanged",
      "higher",
      "zero"
    ],
    "answer": 2,
    "explanation": "When the source approaches, wavefronts reach the listener more frequently, so the observed frequency is higher."
  },
  {
    "id": "doppler-effect-applications-2",
    "question": "Behind a source moving away from an observer, the sound wavefronts are:",
    "options": [
      "closer together",
      "more spread out",
      "stationary",
      "perpendicular to the motion"
    ],
    "answer": 1,
    "explanation": "A receding source leaves wavefronts further apart, which lowers observed frequency."
  },
  {
    "id": "doppler-effect-applications-3",
    "question": "A stationary source emits sound while the observer moves toward it. The observer hears a frequency that is:",
    "options": [
      "lower than the source frequency",
      "equal to the source frequency",
      "higher than the source frequency",
      "always zero"
    ],
    "answer": 2,
    "explanation": "Moving toward incoming wavefronts makes them reach the observer more often, so the observed frequency increases."
  },
  {
    "id": "doppler-effect-applications-4",
    "question": "The Doppler effect is an apparent change in observed:",
    "options": [
      "mass",
      "frequency",
      "amplitude only",
      "wave speed in vacuum"
    ],
    "answer": 1,
    "explanation": "The key Doppler change is in observed frequency and wavelength, not the wave speed in the medium."
  },
  {
    "id": "doppler-effect-applications-5",
    "question": "Medical ultrasound commonly uses the Doppler effect to measure:",
    "options": [
      "blood-flow speed",
      "water temperature",
      "mass of organs only",
      "electrical resistance"
    ],
    "answer": 0,
    "explanation": "Reflected frequency shifts are used to estimate the speed and direction of blood flow."
  },
  {
    "id": "doppler-effect-applications-6",
    "question": "A red shift in light from a galaxy indicates that the galaxy is moving:",
    "options": [
      "toward Earth",
      "away from Earth",
      "in a circle only",
      "with zero speed"
    ],
    "answer": 1,
    "explanation": "Red shift shows that the source is moving away from the observer."
  },
  {
    "id": "doppler-effect-applications-7",
    "question": "The observation that many distant galaxies are red-shifted supports the idea that the universe is:",
    "options": [
      "shrinking",
      "stationary",
      "expanding",
      "made only of stars"
    ],
    "answer": 2,
    "explanation": "Widespread red shift means many galaxies are moving away from us, which supports expansion."
  },
  {
    "id": "doppler-effect-applications-8",
    "question": "If the source and observer are not moving relative to each other, the observed frequency is:",
    "options": [
      "higher than emitted frequency",
      "lower than emitted frequency",
      "equal to emitted frequency",
      "always twice the emitted frequency"
    ],
    "answer": 2,
    "explanation": "No relative motion means no Doppler shift, so observed and emitted frequencies are equal."
  }
];

    const bank: CapsItem[] = items.map((item) => ({
      prompt: item.question,
      options: item.options,
      answer: item.options[item.answer],
      explanation: item.explanation,
    }));
const topicLearnSteps = learnSteps.map((step) => ({
  title: step.title!,
  content: step.content,
}));


    const DopplerEffectApplications = () => (
      <CapsSubjectTopic
        title="Doppler Effect and Applications"
        subtitle="Pitch changes, motion interpretation, ultrasound and red shift"
        learnSteps={topicLearnSteps}
        task="gr12-doppler-effect-applications-t2"
        bank={bank}
        apiPath="/api/caps/ps"
        grade={12}
      />
    );

    export default DopplerEffectApplications;
