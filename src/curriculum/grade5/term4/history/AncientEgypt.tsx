import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { NileValley, SocietyPyramid } from '../../../../components/diagrams/g5/Grade5Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'The Nile and farming',
    content: slide(
      <>
        <Rule>
          Ancient Egypt grew up along the River Nile, in the north-east corner of the continent of Africa. Very little rain falls there, so the Nile gave water for drinking and for watering crops. Each year it flooded and left rich black silt, which made the land fertile.
        </Rule>
        <NileValley />
        <Worked
          title="Why did people settle beside the river?"
          steps={[
            <>Egypt is mostly desert, with almost no rain.</>,
            <>The Nile flows through the desert and gives water to drink and to irrigate fields.</>,
            <>Every year the flood leaves fertile silt on the banks, so crops such as wheat and barley grow well.</>,
            <>Boats on the river carry people and goods, and the river also gives fish and birds to eat.</>,
          ]}
        />
        <Mistake>Thinking the desert fed the Egyptians. Almost everyone lived on the narrow green strip beside the Nile, because the river gave water and fertile soil.</Mistake>
      </>,
    ),
  },
  {
    title: 'Pharaohs and who was who',
    content: slide(
      <>
        <Rule>
          A pharaoh was the ruler (the king) of Egypt. People believed the pharaoh was a god on earth. Under the pharaoh came officials and priests, then scribes and craftspeople, and the farmers made up the largest group.
        </Rule>
        <SocietyPyramid />
        <Worked
          title="Read the pyramid of people"
          steps={[
            <>The top layer is the smallest: one pharaoh rules the whole land.</>,
            <>Officials and priests help the pharaoh run Egypt and look after the temples.</>,
            <>Scribes write things down; craftspeople make tools, jewellery and furniture.</>,
            <>The bottom layer is the widest: most people were farmers, and they grew the food for everyone.</>,
          ]}
        />
        <Mistake>Thinking a pharaoh was just a priest or a soldier. The pharaoh was the supreme ruler, the king.</Mistake>
      </>,
    ),
  },
  {
    title: 'Pyramids and the Sphinx',
    content: slide(
      <>
        <Rule>
          The Egyptians built pyramids as tombs for their pharaohs. They believed the pharaoh’s body had to be kept safe for life after death. The Great Sphinx at Giza is a huge limestone statue with the body of a lion and the head of a person.
        </Rule>
        <Worked
          title="What is inside, and what guards it?"
          steps={[
            <>A pharaoh died and his body was preserved.</>,
            <>The body was placed in a pyramid, a great stone tomb built to protect it.</>,
            <>Treasures and other things the pharaoh would need were buried with him.</>,
            <>Near the pyramids at Giza stands the Great Sphinx: a statue with a lion’s body and a human head, not a real animal.</>,
          ]}
        />
        <Mistake>Thinking pyramids were homes or forts. A pyramid was a tomb, built for a pharaoh.</Mistake>
      </>,
    ),
  },
  {
    title: 'Writing: hieroglyphs, scribes and papyrus',
    content: slide(
      <>
        <Rule>
          Egyptian writing is called hieroglyphics: it uses pictures and symbols for words and sounds. Scribes were trained for many years to read and write, and their job was writing down records such as taxes and food stores. Papyrus is a reed that grew beside the Nile, and it was made into paper.
        </Rule>
        <Worked
          title="From reed to record"
          steps={[
            <>Papyrus reeds grow along the Nile. They were also used for boats and sandals.</>,
            <>The reeds were cut, flattened and pressed to make sheets of papyrus paper.</>,
            <>A scribe, who had trained for years, wrote on the paper in hieroglyphics.</>,
            <>Because scribes recorded history and daily life, we can learn about Ancient Egypt today.</>,
          ]}
        />
        <Mistake>Thinking everybody could read and write. Only a few people, mainly scribes, learned hieroglyphics.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>On which continent is Egypt, and which river gave the Egyptians their water?</li>
            <li>What did the yearly flood leave on the land, and why did it matter?</li>
            <li>What was a pharaoh, and why were pyramids built?</li>
            <li>What is hieroglyphics, who were scribes, and what was papyrus?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Africa (the north-east). The River Nile.</li>
            <li>Rich black silt, which made the soil fertile for farming.</li>
            <li>The ruler or king. As tombs to protect a pharaoh’s body.</li>
            <li>Picture writing. People trained to read and write. A reed used to make paper.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Why did most Ancient Egyptians live close to the Nile?',
    options: ['The river gave water and fertile land', 'The desert was good for farming', 'There was a lot of rain nearby', 'It was cold beside the river'],
    answer: 'The river gave water and fertile land',
    explanation: 'Egypt has almost no rain, so people stayed close to the river for water and rich soil.',
  },
  {
    prompt: 'What did the yearly flood of the Nile leave on the land?',
    options: ['Rich black silt', 'Large rocks', 'Salt', 'Sand dunes'],
    answer: 'Rich black silt',
    explanation: 'The silt made the soil fertile, so crops could grow.',
  },
  {
    prompt: 'The Great Sphinx has the body of a lion and the head of a…',
    options: ['person', 'eagle', 'snake', 'crocodile'],
    answer: 'person',
    explanation: 'The Great Sphinx is a limestone statue with a lion’s body and a human head.',
  },
  {
    prompt: 'What was kept inside a pyramid?',
    options: ['The body of a pharaoh', 'Grain for the poor', 'Soldiers’ weapons only', 'Boats for fishing'],
    answer: 'The body of a pharaoh',
    explanation: 'A pyramid was a tomb that protected the pharaoh’s body.',
  },
  {
    prompt: 'What was the job of a scribe?',
    options: ['Writing down records such as taxes and food stores', 'Building the stone tombs for the pharaohs', 'Sailing the pharaoh’s boats along the river', 'Guarding the pharaoh’s palace at night'],
    answer: 'Writing down records such as taxes and food stores',
    explanation: 'Scribes trained for years so that they could read and write hieroglyphics.',
  },
  {
    prompt: 'Papyrus paper was made from…',
    options: ['reeds that grew beside the Nile', 'the bark of pine trees', 'cotton', 'bamboo'],
    answer: 'reeds that grew beside the Nile',
    explanation: 'Papyrus reeds were flattened and pressed into sheets.',
  },
];

const AncientEgypt = () => (
  <CapsSubjectTopic
    title="Ancient Egypt"
    subtitle="The Nile, pharaohs, pyramids and writing"
    learnSteps={learnSteps}
    task="gr5-ancient-egypt"
    bank={bank}
    apiPath="/api/caps/his"
    grade={5}
  />
);

export default AncientEgypt;
