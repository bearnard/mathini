import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { StepFlow } from '../../../../../components/diagrams/ems/Ems9dPictures';
import { HEALTH } from '../../_shared/psw6Facts';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const DiseaseTable = () => (
  <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-slate-900 text-left">
    <table aria-label="Five communicable diseases and their causes. Colds, mumps and chickenpox are caused by viruses. Tuberculosis is caused by bacteria. Athlete's foot is caused by a fungus." className="w-full border-collapse text-[12px] text-slate-100">
      <thead>
        <tr className="text-[11px] uppercase tracking-wide text-slate-400">
          <th scope="col" className="px-2 py-1.5 text-left font-bold">Disease</th>
          <th scope="col" className="px-2 py-1.5 text-left font-bold">Caused by</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-slate-700"><td className="px-2 py-1.5 font-semibold">Colds</td><td className="px-2 py-1.5">A virus</td></tr>
        <tr className="border-t border-slate-700"><td className="px-2 py-1.5 font-semibold">Mumps</td><td className="px-2 py-1.5">A virus</td></tr>
        <tr className="border-t border-slate-700"><td className="px-2 py-1.5 font-semibold">Chickenpox</td><td className="px-2 py-1.5">A virus</td></tr>
        <tr className="border-t border-slate-700"><td className="px-2 py-1.5 font-semibold">Tuberculosis (TB)</td><td className="px-2 py-1.5">Bacteria</td></tr>
        <tr className="border-t border-slate-700"><td className="px-2 py-1.5 font-semibold">Athlete&rsquo;s foot</td><td className="px-2 py-1.5">A fungus</td></tr>
      </tbody>
    </table>
  </div>
);

export const learnSteps: LearnStep[] = [
  {
    title: 'What communicable diseases are',
    content: slide(
      <>
        <Rule>A communicable disease is an illness that can pass from one person to another. It is caused by tiny living things called germs. Some germs are viruses, some are bacteria and some are fungi.</Rule>
        <DiseaseTable />
        <Worked
          title="How germs spread"
          steps={[
            <>Through the air, when a sick person coughs or sneezes.</>,
            <>By touch, or by sharing things such as towels.</>,
            <>Through dirty food or water.</>,
            <>Most can be prevented: wash your hands, cover your cough and keep your body and things clean.</>,
          ]}
        />
        <Mistake>Thinking that you can catch a communicable disease from being cold or wet. It comes from germs, not from the weather.</Mistake>
      </>,
    ),
  },
  {
    title: 'Colds, mumps and chickenpox',
    content: slide(
      <>
        <Rule>Colds, mumps and chickenpox are caused by viruses and spread easily from person to person. A person who is ill should rest at home so that the others do not catch it.</Rule>
        <StepFlow steps={['Colds', 'Mumps', 'Chickenpox']} notes={['Runny nose', 'Swollen cheeks', 'Itchy spots']} aria="Signs of three virus diseases: a cold gives a runny nose, mumps gives swollen cheeks, and chickenpox gives itchy spots." />
        <Worked
          title="Signs and prevention"
          steps={[
            <><strong>Cold:</strong> runny nose, sneezing, sore throat. Rest and drink fluids. Wash your hands and cover your sneezes.</>,
            <><strong>Mumps:</strong> swollen cheeks and a sore jaw, with fever and headache. A vaccine from the clinic helps to prevent it.</>,
            <><strong>Chickenpox:</strong> itchy spots with blisters and fever. Do not scratch them. Stay at home until the spots dry up.</>,
            <>Tell an adult when you feel ill. A clinic or doctor can help.</>,
          ]}
        />
        <Mistake>Going to school with a fever and spots because you do not want to miss a day. You could give the illness to your friends.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tuberculosis (TB)',
    content: slide(
      <>
        <Rule>Tuberculosis, or TB, is caused by bacteria. It spreads through the air when a person who has it coughs. It usually affects the lungs. A cough that lasts more than {HEALTH.coughWeeks} weeks is a reason to go to the clinic.</Rule>
        <StepFlow steps={['Cough', 'Clinic', 'Medicine']} notes={[`${HEALTH.coughWeeks}+ weeks`, 'Test and help', 'Finish it']} aria={`What to do about a long cough: a cough that lasts more than ${HEALTH.coughWeeks} weeks means going to the clinic for a test, and then taking the medicine until the clinic says it is finished.`} />
        <Worked
          title="TB: signs and help"
          steps={[
            <>Signs: a long cough, tiredness, weight loss, night sweats and fever.</>,
            <>TB can be cured with medicine from the clinic, taken for many months.</>,
            <>The medicine must be taken until the clinic says it is finished.</>,
            <>Cover your cough, open windows for fresh air, and tell an adult if someone has a long cough.</>,
          ]}
        />
        <Mistake>Teasing or avoiding a person who has TB. Anyone can get TB, and a person who is on treatment needs kindness and support.</Mistake>
      </>,
    ),
  },
  {
    title: 'Athlete’s foot and getting help',
    content: slide(
      <>
        <Rule>Athlete&rsquo;s foot is an itchy skin infection of the feet that is caused by a fungus. The fungus grows in warm, damp places such as wet socks and shower floors.</Rule>
        <StepFlow steps={['Dry', 'Clean', 'Own towel']} notes={['Between toes', 'Socks', 'No sharing']} aria="Three ways to prevent athlete's foot: dry your feet well between the toes, wear clean socks, and use your own towel." />
        <Worked
          title="Athlete’s foot and getting help"
          steps={[
            <>Signs: itchy, peeling or cracked skin between the toes.</>,
            <>Dry your feet well, especially between the toes, and wear clean, dry socks.</>,
            <>Do not share towels or shoes. Wear sandals in a public shower.</>,
            <>A clinic, a doctor or a pharmacist can give a cream. Ask an adult to help you.</>,
          ]}
        />
        <Mistake>Hiding an itchy foot because you feel shy. It is an easy problem to treat, and it can spread if it is ignored.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is a communicable disease?</>,
          <>Name one disease that is caused by a virus.</>,
          <>How is TB spread, and when must you go to the clinic?</>,
          <>How can you prevent athlete’s foot?</>,
        ]}
        answers={[
          <>An illness that can pass from one person to another, caused by germs.</>,
          <>Any one of: a cold, mumps, chickenpox.</>,
          <>Through the air when a person coughs. Go to the clinic if a cough lasts more than {HEALTH.coughWeeks} weeks.</>,
          <>Dry your feet well, wear clean socks, do not share towels and wear sandals in a public shower.</>,
        ]}
      />,
    ),
  },
];
