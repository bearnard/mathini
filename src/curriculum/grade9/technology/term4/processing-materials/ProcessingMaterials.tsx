import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand material processing and corrosion prevention',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Metals corrode when exposed to oxygen and moisture. Galvanising (zinc coating) and electroplating (metal transfer) 
          protect materials from corrosion. Understanding these processes helps prevent deterioration and extend product life.
        </p>
      </div>
    ),
  },
  {
    title: 'Explore food and plastic processing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Food preservation methods (freezing, canning, drying) extend shelf life and maintain nutritional value. 
          Plastics are processed through melting, moulding, and recycling. Material choice depends on properties needed.
        </p>
      </div>
    ),
  },
  {
    title: 'Evaluate environmental and economic trade-offs',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Processing decisions affect cost, performance, and environment. Selecting sustainable materials, 
          minimizing waste, and recycling reduce environmental impact while maintaining product quality and affordability.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is corrosion?',
    options: ['the chemical wearing away of metals by oxygen and moisture', 'the wearing away of a metal by rubbing against another', 'the stretching of a metal when it is pulled too hard', 'the melting of a metal when it gets too hot'],
    answer: 'the chemical wearing away of metals by oxygen and moisture',
    explanation: 'Rust (iron oxide) is the most common corrosion problem, damaging structures and equipment.',
  },
  {
    prompt: 'How does galvanising protect metal?',
    options: ['a zinc coat keeps oxygen and moisture away from the metal', 'a plastic coat keeps the metal from getting hot', 'a zinc coat makes the metal stronger inside', 'a paint coat makes the zinc harder to scratch'],
    answer: 'a zinc coat keeps oxygen and moisture away from the metal',
    explanation: 'Galvanised coatings are sacrificial, protecting the underlying metal even if the coating is scratched.',
  },
  {
    prompt: 'What is electroplating?',
    options: ['using an electric current to put a thin metal coat on a surface', 'using heat to melt a thick metal coat onto a surface', 'using a brush to paint a metal-coloured coat on a surface', 'using a magnet to pull a metal coat onto a surface'],
    answer: 'using an electric current to put a thin metal coat on a surface',
    explanation: 'Electroplating creates precise, uniform coatings for corrosion protection and decoration.',
  },
  {
    prompt: 'Why is food preservation important?',
    options: ['to make food last longer, keep its goodness, and stop it going off', 'to make all foods taste the same as fresh food does', 'to make food heavier so it can be sold for more', 'to stop food from ever needing to be cooked'],
    answer: 'to make food last longer, keep its goodness, and stop it going off',
    explanation: 'Preservation methods allow food to be stored safely for longer periods.',
  },
  {
    prompt: 'What are common food preservation methods?',
    options: ['freezing, canning, drying, salting and smoking', 'boiling, baking, frying, mixing and grating', 'chopping, peeling, blending, mashing and slicing', 'sweetening, colouring, flavouring, whipping and rolling'],
    answer: 'freezing, canning, drying, salting and smoking',
    explanation: 'Each method removes water or lowers temperature to inhibit microbial growth.',
  },
  {
    prompt: 'What is plastic processing?',
    options: ['changing raw plastic into products by melting, moulding and shaping', 'changing oil into plastic by growing it in a field', 'changing plastic into metal by heating and cooling it', 'changing plastic products into raw plastic by crushing them'],
    answer: 'changing raw plastic into products by melting, moulding and shaping',
    explanation: 'Injection moulding, extrusion, and thermoforming are common plastic processing techniques.',
  },
  {
    prompt: 'Why is recycling important for plastic materials?',
    options: ['recycling cuts waste and saves resources, so it harms the environment less', 'recycling creates more waste because plastic is cleaned', 'recycling is only worth doing for large factories', 'recycling stops plastic from ever being made again'],
    answer: 'recycling cuts waste and saves resources, so it harms the environment less',
    explanation: 'Plastic recycling addresses pollution and resource scarcity while creating secondary materials.',
  },
  {
    prompt: 'How do processing choices affect the environment?',
    options: ['energy use, emissions, waste and material choice all matter', 'only the colour of the finished product matters to nature', 'only the price of the finished product matters to nature', 'only the shop where it is sold matters to nature'],
    answer: 'energy use, emissions, waste and material choice all matter',
    explanation: 'Responsible material and processing selection minimizes environmental footprint.',
  },
];

const ProcessingMaterials = () => (
  <CapsSubjectTopic
    title="Processing of Metals, Food and Plastics"
    subtitle="Corrosion prevention, galvanising, electroplating, food preservation, plastics, recycling, processing choices"
    learnSteps={learnSteps}
    task="gr9-processing-materials-t4"
    bank={bank}
    apiPath="/api/caps/tech"
  />
);

export default ProcessingMaterials;
