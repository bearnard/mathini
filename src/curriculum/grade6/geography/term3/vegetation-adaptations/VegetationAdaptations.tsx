import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';
import ClimateGraph from '@/components/subjects/ClimateGraph';


const learnSteps: LearnStep[] = [
  {
    title: 'Adaptations help living things survive',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>adaptation</strong> is a feature or behaviour that helps a plant or animal survive
          in its environment. Climate affects which adaptations are useful.
        </p>
        <div className="bg-lime-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>climate</span>
          <span className="text-slate-400">→</span>
          <span>vegetation</span>
          <span className="text-slate-400">→</span>
          <span className="text-lime-700">adaptations</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Plants adapt to water and temperature',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Desert plants may store water in <strong>thick stems</strong> and use <strong>spines</strong>
          instead of leaves. Rainforest plants may have broad leaves and drip tips to cope with heavy rain.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-amber-50 p-4"><strong>Cactus</strong><br />stores water</div>
          <div className="rounded-xl bg-stone-100 p-4"><strong>Spines</strong><br />reduce water loss</div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Broad leaves</strong><br />catch light in forests</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Animals adapt too',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Animals also have adaptations. A camel can store fat and conserve water, polar animals may have
          thick fur or blubber, and some desert animals are <strong>nocturnal</strong> to avoid daytime heat.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-yellow-50 p-4"><strong>Desert</strong><br />save water</div>
          <div className="rounded-xl bg-blue-50 p-4"><strong>Polar</strong><br />keep warm</div>
          <div className="rounded-xl bg-purple-50 p-4"><strong>Night activity</strong><br />avoid heat</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Climate Data — Desert vs Humid Vegetation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">These graphs show why vegetation has to adapt differently in a very dry desert climate and a warm humid coastal climate.</p>
        <div className="grid gap-4 lg:grid-cols-2">
          <ClimateGraph
            station="Cairo"
            data={[
                      { month: 'Jan', rainfall: 5, temp: 14 },
                      { month: 'Feb', rainfall: 4, temp: 15 },
                      { month: 'Mar', rainfall: 4, temp: 18 },
                      { month: 'Apr', rainfall: 2, temp: 23 },
                      { month: 'May', rainfall: 1, temp: 28 },
                      { month: 'Jun', rainfall: 0, temp: 31 },
                      { month: 'Jul', rainfall: 0, temp: 32 },
                      { month: 'Aug', rainfall: 0, temp: 32 },
                      { month: 'Sep', rainfall: 0, temp: 29 },
                      { month: 'Oct', rainfall: 1, temp: 26 },
                      { month: 'Nov', rainfall: 4, temp: 20 },
                      { month: 'Dec', rainfall: 6, temp: 15 },
                    ]}
          />

          <ClimateGraph
            station="Durban"
            data={[
                      { month: 'Jan', rainfall: 130, temp: 27 },
                      { month: 'Feb', rainfall: 130, temp: 27 },
                      { month: 'Mar', rainfall: 120, temp: 27 },
                      { month: 'Apr', rainfall: 80, temp: 25 },
                      { month: 'May', rainfall: 50, temp: 23 },
                      { month: 'Jun', rainfall: 40, temp: 21 },
                      { month: 'Jul', rainfall: 30, temp: 21 },
                      { month: 'Aug', rainfall: 40, temp: 22 },
                      { month: 'Sep', rainfall: 60, temp: 23 },
                      { month: 'Oct', rainfall: 90, temp: 24 },
                      { month: 'Nov', rainfall: 110, temp: 25 },
                      { month: 'Dec', rainfall: 120, temp: 26 },
                    ]}
          />
        </div>

        <p className="text-sm text-slate-500">Sparse desert plants conserve water, while humid subtropical plants can support broad leaves and denser growth.</p>
      </div>
    ),
  },
];

export const bank: GeoItem[] = [
  { prompt: 'What is an adaptation?', options: ['A feature or behaviour that helps survival', 'A change in the weather that lasts for many years', 'A place where an animal makes its home', 'A food that gives living things energy'], answer: 'A feature or behaviour that helps survival', explanation: 'Adaptations help living things survive in their environments.' },
  { prompt: 'How do cactus spines help the plant?', options: ['They reduce water loss and protect the plant', 'They collect snow all year', 'They make the plant need more water', 'They turn the cactus into an animal'], answer: 'They reduce water loss and protect the plant', explanation: 'Spines lose less water than leaves and can stop animals from eating the cactus.' },
  { prompt: 'Why do many desert plants have thick stems?', options: ['To store water', 'To breathe underwater', 'To melt ice', 'To block all sunlight'], answer: 'To store water', explanation: 'Stored water helps desert plants survive long dry periods.' },
  { prompt: 'What does nocturnal mean?', options: ['Active at night', 'Active only during snowstorms', 'Unable to move', 'Living only in trees'], answer: 'Active at night', explanation: 'Nocturnal desert animals avoid the hottest part of the day.' },
  { prompt: 'Which adaptation helps polar animals keep warm?', options: ['Thick fur or blubber', 'Very thin skin with no fat', 'Large flat leaves', 'Spines instead of teeth'], answer: 'Thick fur or blubber', explanation: 'Insulation such as fur or blubber reduces heat loss in cold climates.' },
  { prompt: 'Why might rainforest plants have broad leaves?', options: ['To catch light in the shaded forest', 'To store sand', 'To survive without any rain', 'To become colder than ice'], answer: 'To catch light in the shaded forest', explanation: 'Broad leaves can collect light below the rainforest canopy.' },
  { prompt: 'Which plant adaptation is useful in a dry climate?', options: ['Deep roots that reach underground water', 'Soft leaves that lose water quickly', 'Roots that never grow', 'Leaves that cannot photosynthesise'], answer: 'Deep roots that reach underground water', explanation: 'Deep roots can reach water that is far below the surface.' },
  { prompt: 'Which animal adaptation helps in hot deserts?', options: ['Conserving water and resting in shade', 'Growing rainforest drip tips', 'Needing icy water every hour', 'Living only on floating ice'], answer: 'Conserving water and resting in shade', explanation: 'Desert animals must avoid heat and use water carefully.' },
  { prompt: 'Why are adaptations different in different climate regions?', options: ['Each climate has different challenges for survival', 'Animals copy the features of the other animals around them', 'Plants and animals change at the same speed', 'Animals have adaptations but plants do not'], answer: 'Each climate has different challenges for survival', explanation: 'Wet, dry, hot, and cold places require different survival features.' },
  { prompt: 'Which pair is correctly matched?', options: ['Cactus: thick water-storing stem', 'Polar bear: broad green leaves', 'Rainforest tree: cactus spines only', 'Camel: blubber for swimming under polar ice'], answer: 'Cactus: thick water-storing stem', explanation: 'Cacti are desert plants adapted to store water.' },
];

const VegetationAdaptations = () => (
  <GeoTopic
    title="Vegetation & Adaptations"
    subtitle="How plants and animals survive in their climates"
    learnSteps={learnSteps}
    task="vegetation-adaptations"
    bank={bank}
  />
);

export default VegetationAdaptations;
