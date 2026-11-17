import type { LearnStep } from '@/components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { KeyTable } from '@/components/diagrams/lo/Lo12Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Lifestyle diseases',
    content: slide(
      <>
        <Rule>A lifestyle disease is an illness that is made more likely by the way people live: what they eat, how much they move, and whether they smoke, abuse substances or have unsafe sex. CAPS names cancer, hypertension, diseases of the heart and circulatory system, tuberculosis (TB) and sexually transmitted infections (STIs), including HIV and AIDS.</Rule>
        <KeyTable
          title="The diseases named in the CAPS"
          head={['Disease', 'A contributing factor']}
          aria="A table of the diseases named in the CAPS and a contributing factor for each. Cancer: smoking. Hypertension, which is high blood pressure: too much salt and no exercise. Heart disease: a diet high in fat and smoking. Tuberculosis: crowded, poorly ventilated housing and poverty. Sexually transmitted infections including HIV: unsafe sexual behaviour."
          rows={[
            ['Cancer', 'Smoking'],
            ['Hypertension', 'Too much salt, little exercise'],
            ['Heart and circulatory disease', 'Fatty diet, smoking'],
            ['Tuberculosis (TB)', 'Crowded housing, poverty'],
            ['STIs including HIV and AIDS', 'Unsafe sexual behaviour'],
          ]}
        />
        <Worked
          steps={[
            <>Hypertension is often called a silent disease because a person can feel well while the pressure is high. Only a check shows it.</>,
            <>TB spreads through the air when a sick person coughs. Crowded, badly ventilated rooms make it spread more easily.</>,
          ]}
        />
        <Mistake>Thinking that these diseases are only for old people. The habits that cause them often start in the teenage years.</Mistake>
      </>,
    ),
  },
  {
    title: 'Poverty and gender imbalances',
    content: slide(
      <>
        <Rule>Poverty and gender imbalances make lifestyle diseases more likely, because they limit a person&rsquo;s choices about food, safety, information and health care.</Rule>
        <KeyTable
          title="How poverty and gender imbalances raise the risk"
          head={['Cause', 'Effect on health']}
          aria="A table of how poverty and gender imbalances raise health risk. Poverty: little money for healthy food, crowded homes, a clinic that is far away. Gender imbalances: a girl or woman who cannot insist on safe sex, and a man who is pressured not to ask for help. Both: late diagnosis and poor treatment."
          rows={[
            ['Poverty', 'Cheap unhealthy food, crowded homes, far clinics'],
            ['Gender imbalance', 'A partner who cannot insist on protection'],
            ['Gender expectations', 'Men told not to seek help'],
            ['Both', 'Late diagnosis, poor treatment'],
          ]}
        />
        <Worked
          steps={[
            <>A family that can only afford cheap, fatty and sugary food is at greater risk of heart disease and diabetes.</>,
            <>When a young woman has less power in a relationship, she may not be able to insist on a condom. That raises her risk of an STI, including HIV.</>,
          ]}
        />
        <Mistake>Saying the person simply chose the illness. Poverty and unequal power limit choices, so prevention must also fix these conditions.</Mistake>
      </>,
    ),
  },
  {
    title: 'Prevention, early detection, treatment and care',
    content: slide(
      <>
        <Rule>CAPS names four kinds of intervention: prevention and control, early detection, treatment, and care and support. Each stage lowers the harm of a disease.</Rule>
        <KeyTable
          title="Interventions with an example"
          head={['Stage', 'Example']}
          aria="A table of interventions. Prevention and control: eating healthy food, exercising and not smoking, and using condoms. Early detection: a blood pressure check, a clinic test for TB or HIV, and checking for lumps. Treatment: taking the full course of TB medicine and antiretroviral treatment for HIV. Care and support: family, a support group and home-based care."
          rows={[
            ['Prevention and control', 'Healthy food, exercise, no smoking, condoms'],
            ['Early detection', 'Blood pressure check, TB and HIV tests'],
            ['Treatment', 'Full course of TB medicine, ARVs for HIV'],
            ['Care and support', 'Family, support groups, home-based care'],
          ]}
        />
        <Worked
          steps={[
            <>Early detection helps: a cancer found early is usually easier to treat than one found late.</>,
            <>In South Africa, public clinics test for HIV and TB and give treatment free of charge. Knowing your status early lets a person start treatment early.</>,
            <>TB is curable if the patient takes the full course of medicine. Stopping early can make the TB harder to treat.</>,
            <>A person on HIV treatment can stay healthy and can lower the chance of passing HIV on. Care and support from family and a support group help the person to keep taking treatment.</>,
          ]}
        />
        <Mistake>Stopping medicine as soon as you feel better. TB and HIV treatment must be taken as the clinic says.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name three diseases that CAPS lists as lifestyle diseases.</>,
          <>Give one way in which poverty raises the risk of ill-health.</>,
          <>What are the four kinds of intervention that CAPS names?</>,
          <>Why must TB medicine be taken for the full course?</>,
        ]}
        answers={[
          <>Any three of: cancer, hypertension, heart and circulatory diseases, tuberculosis, and sexually transmitted infections including HIV and AIDS.</>,
          <>For example: little money for healthy food, crowded homes, or a clinic that is far away.</>,
          <>Prevention and control, early detection, treatment, and care and support.</>,
          <>So that all the TB germs are killed and the TB does not become harder to treat.</>,
        ]}
      />,
    ),
  },
];
