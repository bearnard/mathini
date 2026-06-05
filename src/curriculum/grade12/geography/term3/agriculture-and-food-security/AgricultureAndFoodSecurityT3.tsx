import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import DataChart from '@/components/subjects/DataChart';


const learnSteps = [
  {
    title: "What controls agricultural production",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Agriculture depends on rainfall, temperature, soil fertility, relief, water supply, capital, labour, technology and market access. These factors differ across South Africa, helping to explain why some regions specialise in maize, fruit, livestock or sugarcane."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Farmers must also manage risk from drought, pests, disease, fluctuating prices and climate variability. Decisions about irrigation, mechanisation and crop choice are therefore crucial."}</p>
      </div>
    ),
  },
  {
    title: "Different farming systems",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Commercial farming is aimed at the market and usually uses more capital, technology and specialised labour. Subsistence farming mainly produces food for household use and often has lower capital inputs."}</p>
        <p className="text-lg leading-8 text-slate-600">{"Intensive farming produces high output per unit of land, while extensive farming uses larger areas with lower input per hectare. Both systems can be viable depending on climate, land and market conditions."}</p>
      </div>
    ),
  },
  {
    title: "Understanding food security",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Food security means that people have physical and economic access to safe, nutritious food at all times. It depends on availability, affordability, access and stability of supply."}</p>
        <p className="text-lg leading-8 text-slate-600">{"A country can produce enough food overall and still have food insecurity if households cannot afford food, transport is poor or drought disrupts supply in vulnerable communities."}</p>
      </div>
    ),
  },
  {
    title: "Making agriculture more sustainable",
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">{"Sustainable agriculture protects soil, water and biodiversity while maintaining productivity. Examples include contour ploughing, crop rotation, mulching, efficient irrigation, drought-resistant crops and careful grazing management."}</p>
        <p className="text-lg leading-8 text-slate-600">{"In exam answers, learners should link food security to both natural and socio-economic factors, then explain how better farming practice, infrastructure and policy support can improve outcomes."}</p>
      </div>
    ),
  },
  {
    title: 'Agriculture Data — South African Food Production',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Food security depends partly on how much food a country can produce. This chart compares major South African crops by annual production.</p>
        <DataChart
          data={[
                        { crop: 'Maize', production: 16.4 },
                        { crop: 'Sugar cane', production: 17.8 },
                        { crop: 'Potatoes', production: 2.7 },
                        { crop: 'Wheat', production: 2.1 },
                        { crop: 'Apples', production: 1.0 },
                      ]}
          xKey="crop"
          series={[
                        { key: 'production', label: 'Production (million tonnes)', type: 'bar', color: '#16a34a' },
                      ]}
          yLabel="Million tonnes"
          height={240}
        />

        <p className="text-sm text-slate-500">Production still depends on rainfall, irrigation, inputs, transport, and access to markets.</p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which factor is a physical factor affecting agriculture?",
    options: [
      "Market advertising",
      "Soil fertility",
      "Tax policy only",
      "Share prices",
    ],
    answer: "Soil fertility",
    explanation: "Soil fertility is a natural factor that strongly affects crop growth and yields.",
  },
  {
    prompt: "Commercial farming is mainly aimed at:",
    options: [
      "Household consumption only",
      "Producing for the market",
      "Reducing all technology use",
      "Avoiding any profit",
    ],
    answer: "Producing for the market",
    explanation: "Commercial farms produce goods for sale and usually use more capital and technology.",
  },
  {
    prompt: "Subsistence farming mainly focuses on:",
    options: [
      "Exporting cash crops only",
      "Meeting household food needs",
      "Operating a CBD",
      "Providing banking services",
    ],
    answer: "Meeting household food needs",
    explanation: "Subsistence farms mostly produce food for the farmer’s family or local household use.",
  },
  {
    prompt: "What does food security require?",
    options: [
      "Food being available only in cities",
      "Reliable access to safe and nutritious food",
      "Only high national GDP",
      "No use of irrigation",
    ],
    answer: "Reliable access to safe and nutritious food",
    explanation: "Food security includes availability, access, affordability and stability of food supply.",
  },
  {
    prompt: "Why can households still face food insecurity even if national harvests are good?",
    options: [
      "People may lack money to buy food",
      "Rainfall stops mattering",
      "Transport becomes unnecessary",
      "Food becomes non-perishable",
    ],
    answer: "People may lack money to buy food",
    explanation: "Good national supply does not guarantee that every household can afford or access food.",
  },
  {
    prompt: "Which practice helps conserve soil on slopes?",
    options: [
      "Contour ploughing",
      "Removing all vegetation",
      "Over-irrigating the field",
      "Burning crop residue every season",
    ],
    answer: "Contour ploughing",
    explanation: "Contour ploughing slows runoff and helps reduce soil erosion on slopes.",
  },
  {
    prompt: "Intensive farming usually means:",
    options: [
      "Low output from a small area",
      "High output from a relatively small area",
      "No labour or capital input",
      "Only livestock roaming over vast land",
    ],
    answer: "High output from a relatively small area",
    explanation: "Intensive systems use greater inputs to produce more from less land.",
  },
  {
    prompt: "A major climatic threat to South African agriculture is:",
    options: [
      "Regular polar storms",
      "Drought",
      "Daily snow in Durban",
      "Permanent monsoons",
    ],
    answer: "Drought",
    explanation: "South Africa’s variable rainfall makes drought a major risk to crops, grazing and water supply.",
  },
];

const AgricultureAndFoodSecurityT3 = () => (
  <CapsSubjectTopic
    title={"Agriculture and Food Security"}
    subtitle={"Farming systems, production factors and feeding the population"}
    learnSteps={learnSteps}
    task={"gr12-agriculture-and-food-security-t3"}
    bank={bank}
    apiPath="/api/caps/geo"
    grade={12}
  />
);

export default AgricultureAndFoodSecurityT3;
