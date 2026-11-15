import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { MiningTypes } from '../../../../components/diagrams/g5/Grade5Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Minerals',
    content: slide(
      <>
        <Rule>
          A mineral is a natural substance found in rocks in the Earth’s crust. Gold, coal, diamonds and iron ore are minerals. Diamonds are the hardest natural substance, and coal is burned in power stations to make most of South Africa’s electricity.
        </Rule>
        <Worked
          title="Name the mineral and its use"
          steps={[
            <>Gold: used for jewellery and kept as wealth.</>,
            <>Coal: burned in power stations to make electricity.</>,
            <>Diamonds: very hard, rare and beautiful, used for jewellery and cutting tools.</>,
            <>Iron ore: used to make iron and steel.</>,
          ]}
        />
        <Mistake>Thinking minerals are made in factories. Minerals are natural substances that come out of the ground.</Mistake>
      </>,
    ),
  },
  {
    title: 'How we mine',
    content: slide(
      <>
        <Rule>
          In open-pit mining a big hole is dug down from the surface. In shaft mining a vertical shaft goes deep underground and tunnels lead sideways to the minerals. People who work in mines are called miners.
        </Rule>
        <MiningTypes />
        <Worked
          title="Choose the method"
          steps={[
            <>Minerals close to the surface: dig an open pit.</>,
            <>Minerals very deep: sink a shaft and dig tunnels to reach them.</>,
            <>Miners, wearing safety equipment, do the digging.</>,
            <>The picture shows the pit open to the sky and the shaft going down with tunnels.</>,
          ]}
        />
        <Mistake>Mixing up the two methods. Open-pit is a hole in the surface; shaft mining goes deep underground.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mining in South Africa',
    content: slide(
      <>
        <Rule>
          Gauteng’s name means “place of gold”, because Johannesburg grew up around the gold mines. Diamonds were mined at Kimberley in the Northern Cape. Coal is mined mostly in Mpumalanga.
        </Rule>
        <Worked
          title="Link a mineral to a place"
          steps={[
            <>Gold was found on the Witwatersrand, where Johannesburg now stands.</>,
            <>The city grew because thousands of people came to work in the mines.</>,
            <>Gauteng comes from a word meaning “place of gold”.</>,
            <>Kimberley, in the Northern Cape, is famous for its diamond mine.</>,
          ]}
        />
        <Mistake>Thinking mining only gives jobs. It also changes the land and can harm the environment.</Mistake>
      </>,
    ),
  },
  {
    title: 'The cost of mining',
    content: slide(
      <>
        <Rule>
          Mining can pollute water, create dust and destroy the habitats of plants and animals. After a mine closes, rehabilitation means repairing the land so it can be used again. We can also save minerals by recycling metal objects.
        </Rule>
        <Worked
          title="Reduce the harm"
          steps={[
            <>A mine digs up the land and may pollute a river.</>,
            <>When it closes, workers repair the land: this is rehabilitation.</>,
            <>Recycling tins and scrap metal means less new ore has to be mined.</>,
            <>Both steps protect the environment.</>,
          ]}
        />
        <Mistake>Leaving a mine as it is when it closes. The land should be rehabilitated.</Mistake>
      </>,
    ),
  },
  {
    title: 'Resources we use',
    content: slide(
      <>
        <Rule>
          A renewable resource can be used again or grows back, such as sunlight, wind, water and trees. A non-renewable resource will run out. Coal, oil and gas are fossil fuels, made over millions of years from ancient plants and animals. Water is needed by all living things and for growing food.
        </Rule>
        <Worked
          title="Sort the resources"
          steps={[
            <>Sunlight and wind: they are not used up, so they are renewable.</>,
            <>Coal: it took millions of years to form, so it is non-renewable.</>,
            <>Coal, oil and natural gas are fossil fuels made from plants and animals that lived long ago.</>,
            <>Water is a resource we must use carefully because every living thing needs it.</>,
          ]}
        />
        <Mistake>Thinking fossil fuels are renewable because there is a lot of coal. They take millions of years to form, so they will run out.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What do we call a natural substance found in rocks? Name two examples.</li>
            <li>What is the difference between open-pit and shaft mining?</li>
            <li>Why is the province Gauteng called “place of gold”?</li>
            <li>Is coal renewable? What does rehabilitation mean?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>A mineral, for example gold, coal, diamonds or iron ore.</li>
            <li>Open-pit: a big hole dug from the surface. Shaft: a vertical shaft and tunnels deep underground.</li>
            <li>Johannesburg grew up around the gold mines.</li>
            <li>No, it is a non-renewable fossil fuel. Repairing the land after mining.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which mineral is burned in power stations to make electricity in South Africa?',
    options: ['Coal', 'Gold', 'Diamond', 'Salt'],
    answer: 'Coal',
    explanation: 'Most of the country’s electricity comes from burning coal.',
  },
  {
    prompt: 'Minerals very deep underground are usually reached by…',
    options: ['shaft mining', 'open-pit mining', 'fishing', 'farming'],
    answer: 'shaft mining',
    explanation: 'A shaft and tunnels go deep underground.',
  },
  {
    prompt: 'Where were diamonds famously mined in South Africa?',
    options: ['Kimberley', 'Durban', 'Polokwane', 'Gqeberha'],
    answer: 'Kimberley',
    explanation: 'Kimberley is in the Northern Cape.',
  },
  {
    prompt: 'Which of these is a renewable resource?',
    options: ['Sunlight', 'Coal', 'Oil', 'Natural gas'],
    answer: 'Sunlight',
    explanation: 'Sunlight is not used up.',
  },
  {
    prompt: 'Recycling metal objects helps because…',
    options: ['less new ore has to be mined', 'mines have to get much bigger', 'coal runs out much faster', 'more water is wasted on land'],
    answer: 'less new ore has to be mined',
    explanation: 'Recycling saves resources.',
  },
];

const MineralsMining = () => (
  <CapsSubjectTopic
    title="Minerals and Mining"
    subtitle="Minerals, how we mine, their cost and our resources"
    learnSteps={learnSteps}
    task="gr5-geography-minerals-mining"
    bank={bank}
    apiPath="/api/caps/geo"
    grade={5}
  />
);

export default MineralsMining;
