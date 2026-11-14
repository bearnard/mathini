import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';
import ClimateGraph from '@/components/subjects/ClimateGraph';


const learnSteps: LearnStep[] = [
  {
    title: 'Tropical rainforests are hot and wet',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Tropical rainforests</strong> are found near the Equator. They are hot and receive
          heavy rainfall, so many tall trees, vines, insects, birds, and animals can live there.
        </p>
        <div className="bg-emerald-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>hot</span>
          <span className="text-slate-400">+</span>
          <span>wet</span>
          <span className="text-slate-400">→</span>
          <span className="text-emerald-700">dense forest</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Hot deserts are dry',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Hot deserts</strong> have very little rainfall. Days can be extremely hot, nights may be cool,
          and plants and animals must save water to survive.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-amber-50 p-4"><strong>Low rainfall</strong><br />water is scarce</div>
          <div className="rounded-xl bg-orange-50 p-4"><strong>Hot days</strong><br />strong sunshine</div>
          <div className="rounded-xl bg-yellow-50 p-4"><strong>Sparse plants</strong><br />adapted to drought</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Vegetation matches the climate',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Rainforest plants often have <strong>broad leaves</strong> to catch light under the canopy.
          Desert plants may have <strong>spines</strong>, thick stems, or deep roots to reduce water loss.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4"><strong>Rainforest</strong><br />many layers of leafy plants</div>
          <div className="rounded-xl bg-stone-100 p-4"><strong>Desert</strong><br />few plants that conserve water</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Climate Data — Cairo vs Manaus',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Cairo is a hot desert: almost no rain. Manaus, in the Amazon rainforest, is hot and wet all year.</p>
        <div className="grid gap-4 lg:grid-cols-2">
          <ClimateGraph
            station="Cairo"
            rainDomain={[0, 350]}
            tempDomain={[0, 35]}
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

          {/*
            Manaus, Brazil (Amazon rainforest). Monthly mean temperature and precipitation,
            INMET 1991-2020 normals, as tabulated at https://en.wikipedia.org/wiki/Manaus
            (climate data table, "Source 1: INMET"). Not read from INMET directly. A second site
            (climatsetvoyages.com, 1991-2020, no source named) differs slightly (e.g. Jan 285 mm vs 305.6),
            so treat as approximate; the shape (wet all year, a drier Jun-Oct) agrees in both.
            Same axis scale as Cairo so the bars compare fairly.
          */}
          <ClimateGraph
            station="Manaus"
            rainDomain={[0, 350]}
            tempDomain={[0, 35]}
            data={[
                      { month: 'Jan', rainfall: 306, temp: 26.6 },
                      { month: 'Feb', rainfall: 297, temp: 26.6 },
                      { month: 'Mar', rainfall: 321, temp: 26.6 },
                      { month: 'Apr', rainfall: 331, temp: 26.7 },
                      { month: 'May', rainfall: 233, temp: 27.0 },
                      { month: 'Jun', rainfall: 117, temp: 27.3 },
                      { month: 'Jul', rainfall: 67, temp: 27.5 },
                      { month: 'Aug', rainfall: 56, temp: 28.2 },
                      { month: 'Sep', rainfall: 79, temp: 28.6 },
                      { month: 'Oct', rainfall: 114, temp: 28.5 },
                      { month: 'Nov', rainfall: 188, temp: 28.0 },
                      { month: 'Dec', rainfall: 254, temp: 27.2 },
                    ]}
          />
        </div>

        <p className="text-sm text-slate-500">The contrast between dry desert conditions and wetter tropical conditions helps explain why plants, animals, and farming differ so much.</p>
      </div>
    ),
  },
];

export const bank: GeoItem[] = [
  { prompt: 'Where are tropical rainforests usually found?', options: ['Near the Equator', 'Only at the poles', 'On every mountain top', 'Deep under the ocean'], answer: 'Near the Equator', explanation: 'Rainforests are common in hot, wet tropical regions near the Equator.' },
  { prompt: 'Which words best describe a tropical rainforest climate?', options: ['Hot and wet', 'Cold and dry', 'Mild and snowy', 'Windy and icy'], answer: 'Hot and wet', explanation: 'Rainforests receive high rainfall and warm temperatures.' },
  { prompt: 'Why do rainforests have dense vegetation?', options: ['Warmth and heavy rainfall support plant growth', 'Strong winds spread seeds across the forest floor', 'The trees shed all their leaves each winter', 'Cool dry weather helps plants grow quickly'], answer: 'Warmth and heavy rainfall support plant growth', explanation: 'Plants grow quickly when there is enough warmth, water, and light.' },
  { prompt: 'Which words best describe a hot desert climate?', options: ['Very dry with little rainfall', 'Wet every day of the year', 'Cold with permanent ice', 'Mild with winter rain only'], answer: 'Very dry with little rainfall', explanation: 'Deserts are defined by low rainfall.' },
  { prompt: 'Which plant feature helps many desert plants save water?', options: ['Spines instead of broad leaves', 'Huge soft leaves that lose water fast', 'Thin stems with no water storage', 'Flowers that need daily rain'], answer: 'Spines instead of broad leaves', explanation: 'Spines reduce water loss and can protect the plant from animals.' },
  { prompt: 'What is a rainforest canopy?', options: ['The leafy upper layer formed by tree crowns', 'The soft layer of leaves on the forest floor', 'The tallest trees that stand alone in a clearing', 'The roots of trees spreading under the ground'], answer: 'The leafy upper layer formed by tree crowns', explanation: 'Tall rainforest trees form a canopy that shades lower plants.' },
  { prompt: 'Why is water especially important in a hot desert?', options: ['There is very little rainfall', 'The sea covers all deserts', 'Plants there use no water', 'It rains all afternoon every day'], answer: 'There is very little rainfall', explanation: 'Desert organisms must survive with scarce water.' },
  { prompt: 'Which animal adaptation would help in a hot desert?', options: ['Being active at night to avoid heat', 'Growing broad leaves', 'Needing constant shade from tall rainforest trees', 'Breathing only underwater'], answer: 'Being active at night to avoid heat', explanation: 'Some desert animals avoid daytime heat by being nocturnal.' },
  { prompt: 'Which vegetation is most likely in a tropical rainforest?', options: ['Tall trees, vines, and many leafy plants', 'Only moss on frozen ground', 'A few cactus plants far apart', 'No plants at all'], answer: 'Tall trees, vines, and many leafy plants', explanation: 'Rainforests have many plant layers because the climate is hot and wet.' },
  { prompt: 'Which vegetation is most likely in a hot desert?', options: ['Cacti, thorny shrubs, and grasses spaced far apart', 'Tall trees growing close together in thick dark layers', 'Short mosses and lichens growing on bare ice', 'Wide grasslands with many scattered fruit trees'], answer: 'Cacti, thorny shrubs, and grasses spaced far apart', explanation: 'Desert plants are usually sparse and adapted to dry conditions.' },
];

const TropicalDesert = () => (
  <GeoTopic
    title="Tropical Rainforest & Hot Desert"
    subtitle="Comparing wet forests and dry deserts"
    learnSteps={learnSteps}
    task="tropical-desert"
    bank={bank}
  />
);

export default TropicalDesert;
