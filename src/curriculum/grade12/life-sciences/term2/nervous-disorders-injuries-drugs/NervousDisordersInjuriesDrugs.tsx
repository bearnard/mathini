'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as g from '../../../../../components/diagrams/lifesci/gaps12';

// Numbers come from gaps12.ts (tested in gaps12.test.ts and g12LsGaps.test.ts). All data are imaginary teaching data.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;
const avg = g.mean(g.REACTION);
const dist = g.reactionDistance(100, avg);
const distSlow = g.reactionDistance(100, g.SLOWED);

export const learnSteps: LearnStep[] = [
  {
    title: 'Disorders of the nervous system: Alzheimer’s disease and multiple sclerosis',
    content: slide(
      <>
        <Rule>Alzheimer’s disease is a disorder of the brain in which nerve cells die over time, so a person slowly loses memory, thinking and the ability to look after themselves. It mostly affects older people and has no cure; medicine and care can ease the symptoms. Multiple sclerosis (MS) is a disorder in which the body’s own immune system attacks the myelin sheath around nerve fibres, so nerve impulses travel slowly or are blocked. It causes weakness, loss of balance and problems with sight, and it has no cure, but treatment can slow it down.</Rule>
        <InfoTable
          cols={[{ title: 'Disorder', w: 24 }, { title: 'What goes wrong', w: 40 }, { title: 'Main effects', w: 36 }]}
          rows={[
            ['Alzheimer’s\ndisease', 'Nerve cells in the brain\ndie over time', 'Memory loss, confusion,\nneeds care'],
            ['Multiple\nsclerosis', 'The immune system\nattacks the myelin sheath', 'Weakness, poor balance,\nsight problems'],
          ]}
          aria="A table of two nervous system disorders. Alzheimer's disease: nerve cells in the brain die over time, causing memory loss, confusion and a need for care. Multiple sclerosis: the immune system attacks the myelin sheath, causing weakness, poor balance and sight problems."
        />
        <Worked
          title="Link the damage to the symptom"
          steps={[
            'Alzheimer’s disease damages the cerebrum, which stores memories, so memory fails first.',
            'In MS the myelin sheath is damaged, so impulses along the nerve fibre are slow, and muscles respond poorly.',
            'Neither disorder is caused by witchcraft or by infection: they are diseases of the nervous system.',
          ]}
        />
        <Mistake>Saying that MS damages the neuron’s cell body. The attack is on the myelin sheath that insulates the nerve fibre.</Mistake>
      </>,
    ),
  },
  {
    title: 'Brain and spinal injuries',
    content: slide(
      <>
        <Rule>Injuries to the brain or the spinal cord happen in road accidents, falls, sport and violence. A brain injury can affect memory, speech, movement or behaviour, depending on the part that is damaged. A spinal cord injury breaks the pathway between the brain and the body, so there can be a loss of movement and feeling below the injury. Nerve cells of the brain and spinal cord do not repair themselves easily. Stem cell research aims to repair such injuries one day, but it is still being researched.</Rule>
        <InfoTable
          cols={[{ title: 'Injury', w: 26 }, { title: 'Effect', w: 42 }, { title: 'Prevention', w: 32 }]}
          rows={[
            ['Brain\ninjury', 'Memory, speech or\nbehaviour may change', 'Seatbelts and\nhelmets'],
            ['Spinal cord\ninjury', 'Loss of movement and\nfeeling below the injury', 'Safe driving and\nsafe sport'],
            ['Repair', 'Stem cell research may\nhelp in future', 'Not yet a standard\ntreatment'],
          ]}
          aria="A table of injuries. A brain injury can change memory, speech or behaviour and is prevented by seatbelts and helmets. A spinal cord injury causes loss of movement and feeling below the injury and is prevented by safe driving and sport. Stem cell research may help repair injuries in future but is not yet a standard treatment."
        />
        <Worked
          title="Where is the injury?"
          steps={[
            'A person cannot move or feel the legs after an accident: the spinal cord was damaged in the back, so impulses between the brain and the legs are blocked.',
            'A person has trouble speaking after a head injury: an area of the brain that controls speech was damaged.',
            'Wearing a seatbelt and a helmet lowers the risk of both kinds of injury.',
          ]}
        />
        <Mistake>Saying that stem cell treatment already cures spinal cord injuries. Research is promising, but it is not yet a routine cure.</Mistake>
      </>,
    ),
  },
  {
    title: 'The effects of drugs on the nervous system',
    content: slide(
      <>
        <Rule>Drugs such as dagga (cannabis), heroin, ecstasy and tik (methamphetamine) change how the nervous system works. Depressants such as heroin slow the brain, and dagga slows reactions and spoils judgement and memory. Stimulants such as tik and ecstasy speed up the brain and heart. Drug abuse can damage nerve cells, cause addiction, harm mental health, lead to accidents and spoil schoolwork and relationships. Help is available: a trusted adult, a clinic, a school counsellor, and Childline on 116 for anyone under 18.</Rule>
        <InfoTable
          cols={[{ title: 'Drug', w: 20 }, { title: 'Effect on the nervous system', w: 46 }, { title: 'Harm', w: 34 }]}
          rows={[
            ['Dagga', 'Slower reactions, poor judgement\nand memory', 'Accidents, poor\nschool results'],
            ['Heroin', 'Slows the brain and\nbreathing', 'Addiction, overdose\nrisk'],
            ['Tik', 'Speeds up the brain and heart', 'Addiction, mental\nillness, damage'],
            ['Ecstasy', 'Speeds up the brain and heart,\nchanges mood', 'Overheating, mental\nhealth problems'],
          ]}
          aria="A table of drugs. Dagga: slower reactions, poor judgement and memory; harm is accidents and poor school results. Heroin: slows the brain and breathing; harm is addiction and overdose risk. Tik: speeds up the brain and heart; harm is addiction, mental illness and damage. Ecstasy: speeds up the brain and heart and changes mood; harm is overheating and mental health problems."
        />
        <Worked
          title="Classify the effect"
          steps={[
            'Heroin slows the brain: a depressant.',
            'Tik speeds up the brain and heart: a stimulant.',
            'A person who is addicted needs help from a clinic or counsellor, and shaming does not help.',
          ]}
        />
        <Mistake>Believing that a drug makes a person react faster or drive better. Drugs and alcohol damage judgement and slow the reaction in most cases, which makes accidents more likely.</Mistake>
      </>,
    ),
  },
  {
    title: 'Investigating reaction time and driving safely',
    content: slide(
      <>
        <Rule>A reflex is fast, but a decision takes time: the reaction time is the time between a stimulus and the response. To find a class’s average, test several learners and divide the total time by the number of learners. A car keeps moving during the reaction time, so the distance travelled is speed multiplied by time, in metres per second and seconds. Drugs, alcohol and cell phones lengthen the reaction time.</Rule>
        <InfoTable
          cols={[{ title: 'Learner', w: 30 }, { title: 'Reaction time (s)', w: 40 }, { title: 'Note', w: 30 }]}
          rows={[
            ['A', g.dec(g.REACTION[0]), ''],
            ['B', g.dec(g.REACTION[1]), ''],
            ['C', g.dec(g.REACTION[2]), ''],
            ['D', g.dec(g.REACTION[3]), ''],
            ['E', g.dec(g.REACTION[4]), `mean ${g.dec(avg)}`],
          ]}
          aria={`A table of reaction times in seconds: A ${g.REACTION[0]}, B ${g.REACTION[1]}, C ${g.REACTION[2]}, D ${g.REACTION[3]}, E ${g.REACTION[4]}. The mean is ${avg} seconds.`}
        />
        <Worked
          title="How far does a car travel before the driver reacts?"
          steps={[
            <>Mean = ({g.REACTION.map(g.dec).join(' + ')}) ÷ 5 = {g.dec(avg)} s.</>,
            <>100 km/h = 100 000 ÷ 3 600 = {g.dec(Math.round(g.mps(100) * 100) / 100)} m/s.</>,
            <>Distance = {g.dec(Math.round(g.mps(100) * 100) / 100)} × {g.dec(avg)} = <strong>{g.dec(dist)} m</strong>. With a slowed reaction of {g.dec(g.SLOWED)} s the car travels <strong>{g.dec(distSlow)} m</strong>.</>,
          ]}
        />
        <Mistake>Leaving the speed in km/h. Change it to m/s first (divide by 3,6), or the distance is wrong.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What part of the nerve does multiple sclerosis damage?</>,
          <>Why do nerve cells in the spinal cord not easily repair an injury?</>,
          <>Name one depressant and one stimulant.</>,
          <>Reaction times of 0,20 s and 0,30 s were measured. What is the mean?</>,
        ]}
        answers={[
          <>The myelin sheath.</>,
          <>Nerve cells of the brain and spinal cord do not repair themselves easily.</>,
          <>For example heroin (depressant) and tik (stimulant).</>,
          <>0,25 s.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "In Alzheimer's disease, what happens to the brain?",
    options: ["The myelin sheath is attacked by antibodies", "The spinal cord is cut across", "Nerve cells die over time", "The brain grows too large"],
    answer: "Nerve cells die over time",
    explanation: "Loss of nerve cells leads to memory loss and confusion.",
  },
  {
    prompt: "Which main symptom is typical of Alzheimer's disease?",
    options: ["Memory loss and confusion", "Loss of feeling in the legs", "A weak, slow reflex only", "Poor eyesight only"],
    answer: "Memory loss and confusion",
    explanation: "The cerebrum, which stores memories, is damaged.",
  },
  {
    prompt: "What does the immune system attack in multiple sclerosis?",
    options: ["The cell body of the neuron", "The cerebellum", "The skull", "The myelin sheath"],
    answer: "The myelin sheath",
    explanation: "Damage to myelin slows nerve impulses.",
  },
  {
    prompt: "Why do impulses travel slowly along the nerves of a person with MS?",
    options: ["The nerve fibres are too long", "The insulating myelin sheath is damaged", "The synapses are missing", "The blood is too thin"],
    answer: "The insulating myelin sheath is damaged",
    explanation: "Myelin speeds up impulse conduction, so damage slows it.",
  },
  {
    prompt: "Which statement about Alzheimer's disease and MS is correct?",
    options: ["Both are cured by antibiotics", "Neither can be cured at present", "Both spread from person to person", "Both are caused by a curse"],
    answer: "Neither can be cured at present",
    explanation: "Treatment can ease symptoms or slow the disease.",
  },
  {
    prompt: "A person cannot feel or move the legs after a spinal injury. What explains this?",
    options: ["The legs have no neurons in them", "The brain has stopped working at all", "The eyes of the person are damaged", "Impulses between brain and legs are blocked"],
    answer: "Impulses between brain and legs are blocked",
    explanation: "The spinal cord is the pathway between the brain and the body.",
  },
  {
    prompt: "Which measure lowers the risk of brain and spinal injuries in a car?",
    options: ["Wearing a seatbelt", "Driving faster", "Looking at a phone", "Driving without lights"],
    answer: "Wearing a seatbelt",
    explanation: "Seatbelts and helmets reduce injuries.",
  },
  {
    prompt: "What is the current position on stem cell research for spinal cord injury?",
    options: ["It is already a standard cure", "It has been banned all over the world", "It may help in future, but is still research", "It can never have any possible use"],
    answer: "It may help in future, but is still research",
    explanation: "Stem cells may be able to replace damaged nerve cells one day.",
  },
  {
    prompt: "Heroin slows the brain and breathing. How is it classified?",
    options: ["A stimulant", "A vitamin", "A hormone", "A depressant"],
    answer: "A depressant",
    explanation: "Depressants slow the activity of the nervous system.",
  },
  {
    prompt: "Tik and ecstasy speed up the brain and heart. How are they classified?",
    options: ["Depressants", "Stimulants", "Antibiotics", "Vaccines"],
    answer: "Stimulants",
    explanation: "Stimulants increase the activity of the nervous system.",
  },
  {
    prompt: "How does dagga affect a driver?",
    options: ["It slows reactions and judgement", "It makes the reactions much faster", "It improves the memory of the driver", "It has no effect on the driver"],
    answer: "It slows reactions and judgement",
    explanation: "Slower reactions make accidents more likely.",
  },
  {
    prompt: "Who can a teenager contact for help with drug problems?",
    options: ["Nobody, because it is shameful", "Only the friend who offered the drug", "A trusted adult, clinic or school counsellor", "Only a stranger online"],
    answer: "A trusted adult, clinic or school counsellor",
    explanation: "Childline on 116 is also available for anyone under 18.",
  },
  {
    prompt: "Reaction times of 0,21 s, 0,25 s, 0,28 s, 0,24 s and 0,27 s were measured. What is the mean?",
    options: ["0,28 s", "0,21 s", "0,25 s", "1,25 s"],
    answer: "0,25 s",
    explanation: "The total is 1,25 s, and 1,25 / 5 = 0,25 s.",
  },
  {
    prompt: "A car travels at 100 km/h and the driver's reaction time is 0,25 s. How far does it travel before the driver reacts?",
    options: ["6,94 m", "25 m", "27,78 m", "0,69 m"],
    answer: "6,94 m",
    explanation: "100 km/h = 27,78 m/s and 27,78 x 0,25 = 6,94 m.",
  },
];

const NervousDisordersInjuriesDrugs = () => (
  <CapsSubjectTopic
    title="Nervous System: Disorders, Injuries and the Effects of Drugs"
    subtitle="Alzheimer's disease and MS, brain and spinal injuries, the effects of drugs and a reaction-time investigation"
    learnSteps={learnSteps}
    task="gr12-nervous-disorders-injuries-drugs-t2"
    bank={bank}
    apiPath="/api/caps/ls"
    grade={12}
  />
);

export default NervousDisordersInjuriesDrugs;
