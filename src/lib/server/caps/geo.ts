import type { SubjectConfig } from '../caps/types';
import geoGr7Term1 from './tasks/geo-gr7-term1.json';
import geoGr7Term2 from './tasks/geo-gr7-term2.json';
import geoGr7Term3 from './tasks/geo-gr7-term3.json';
import geoGr7Term4 from './tasks/geo-gr7-term4.json';
import geoGr8Term1 from './tasks/geo-gr8-term1.json';
import geoGr8Term2 from './tasks/geo-gr8-term2.json';
import geoGr8Term3 from './tasks/geo-gr8-term3.json';
import geoGr8Term4 from './tasks/geo-gr8-term4.json';
import geoGr9Term1 from './tasks/geo-gr9-term1.json';
import geoGr9Term2 from './tasks/geo-gr9-term2.json';
import geoGr9Term3 from './tasks/geo-gr9-term3.json';
import geoGr9Term4 from './tasks/geo-gr9-term4.json';
import geoGr11Term1 from './tasks/geo-gr11-term1.json';
import geoGr11Term2 from './tasks/geo-gr11-term2.json';
import geoGr11Term3 from './tasks/geo-gr11-term3.json';
import geoGr11Term4 from './tasks/geo-gr11-term4.json';
import geoGr12Term1 from './tasks/geo-gr12-term1.json';
import geoGr12Term2 from './tasks/geo-gr12-term2.json';
import geoGr12Term3 from './tasks/geo-gr12-term3.json';
import geoGr12Term4 from './tasks/geo-gr12-term4.json';

export const geo: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a Geography teacher creating Grade ${grade} (CAPS, South Africa) multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied items. Each item must have: a clear, simply-worded question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly English explanation. ' +
      'Keep the geography factually correct and age-appropriate. Use South African / SI units and spelling. Do not repeat items. '
    );
  },
  tasks: {
    'map-skills':
      'Topic: Map skills and the globe. Cover the globe, the Equator, the North and South Poles, the four main compass directions (north, south, east, west) and the intermediate directions, what an atlas is and how to use it, and the difference between a map and a globe. Ask about directions, the globe, or using an atlas.',
    'latitude-longitude':
      'Topic: Latitude and longitude. Cover lines of latitude (run east-west, parallel to the Equator) and lines of longitude (run north-south, meet at the poles), the Equator (0 degrees latitude), the Greenwich/Prime Meridian (0 degrees longitude), the Northern and Southern Hemispheres, and that South Africa is in the Southern Hemisphere. Ask to tell latitude from longitude or identify these lines.',
    'map-scale':
      'Topic: Map scale and distance. Cover that scale shows how distance on a map relates to real distance, small-scale maps (show a large area with little detail) versus large-scale maps (show a small area with lots of detail), line (bar) scales and word scales, and using a scale to work out real distances. Ask about scale types or what a scale tells you.',
    'locating-places':
      "Topic: Locating places. Cover using grid references and lines of latitude and longitude (coordinates) to find places on a map or atlas, reading an atlas index, and that South Africa lies in the Southern Hemisphere at the southern tip of Africa. Ask how to find a place or about South Africa's location.",
    'what-is-trade':
      'Topic: What is trade. Cover that trade is the buying and selling or exchange of goods and services, the difference between imports (goods bought from other countries) and exports (goods sold to other countries), and why countries trade (they cannot produce everything they need). Ask to tell imports from exports or why countries trade.',
    'resources-value':
      'Topic: Resources and their value. Cover natural resources, renewable resources (can be replaced, e.g. sunlight, wind, water, forests if managed) versus non-renewable resources (run out, e.g. coal, oil, gold, diamonds), and that resources have economic value and differ between countries. Ask to classify a resource or about its value.',
    'fair-trade':
      'Topic: Fair trade. Cover that fair trade means producers (such as farmers) are paid a fair price for their goods and work in fair conditions, why fair trade matters, its advantages for farmers and communities, and South African examples (e.g. fair-trade coffee, wine, rooibos, fruit). Ask what fair trade is or its benefits.',
    'trade-case-studies':
      'Topic: Trade in South Africa and the world. Cover examples of what South Africa exports (gold, platinum, fruit, wine, cars) and imports (oil, machinery, electronics), trading partners, and simple global trade ideas. Ask about a South African export or import or a trade example.',
    'climate-regions':
      'Topic: Climate regions of the world. Cover the difference between weather (day to day) and climate (average over many years), that different parts of the world have different climates, and the main world climate regions (tropical, desert, Mediterranean, temperate, polar). Ask to tell weather from climate or identify a climate region.',
    'tropical-desert':
      'Topic: Tropical rainforest and hot desert climates. Cover the tropical rainforest (hot and very wet, near the Equator, dense forest, many plants and animals) and the hot desert (very hot and dry, little rain, sparse plants like cacti, animals adapted to dryness). Ask about conditions, location, or plants and animals of these regions.',
    'temperate-polar':
      'Topic: Mediterranean, temperate and polar climates. Cover the Mediterranean climate (hot dry summers, mild wet winters - like the Western Cape), temperate climates (moderate, four seasons, grasslands and forests), and polar climates (very cold, ice and snow, few plants). Ask to match a description to one of these regions.',
    'vegetation-adaptations':
      'Topic: Vegetation and adaptations. Cover that natural vegetation depends on climate, that plants and animals adapt to survive (e.g. cactus stores water and has spines, desert animals are active at night, rainforest trees grow tall for light, polar animals have thick fur or blubber). Ask about an adaptation or which vegetation suits a climate.',
    'population-distribution':
      'Topic: Population distribution. Cover that population distribution is how people are spread out over an area, that some places are densely populated and others sparsely populated, and the physical and human factors that affect where people live (water, fertile soil, climate, jobs, transport, relief). Ask about a factor or what population distribution means.',
    'settlement-patterns':
      'Topic: Urban and rural settlements. Cover the difference between urban settlements (towns and cities, many people, many buildings and services) and rural settlements (countryside, farms, villages, fewer people), and reasons people live in each. Ask to tell urban from rural or about settlement features.',
    'migration-push-pull':
      'Topic: Migration, push and pull factors. Cover that migration is people moving from one place to live in another, types of migration (rural to urban, urban to urban), push factors (reasons people leave, e.g. no jobs, drought, conflict) and pull factors (reasons people are attracted, e.g. jobs, better schools, safety). Ask to classify a push or pull factor or define migration.',
    'migration-impact':
      'Topic: The impact of migration. Cover the effects of migration on people, families, communities and places, both positive (new opportunities, skills, money sent home) and negative (overcrowding in cities, pressure on services, families separated). Ask about an effect of migration on people or places.',
    ...geoGr7Term1.tasks,
    ...geoGr7Term2.tasks,
    ...geoGr7Term3.tasks,
    ...geoGr7Term4.tasks,
    ...geoGr8Term1.tasks,
    ...geoGr8Term2.tasks,
    ...geoGr8Term3.tasks,
    ...geoGr8Term4.tasks,
    ...geoGr9Term1.tasks,
    ...geoGr9Term2.tasks,
    ...geoGr9Term3.tasks,
    ...geoGr9Term4.tasks,
    ...geoGr11Term1.tasks,
    ...geoGr11Term2.tasks,
    ...geoGr11Term3.tasks,
    ...geoGr11Term4.tasks,
    ...geoGr12Term1.tasks,
    ...geoGr12Term2.tasks,
    ...geoGr12Term3.tasks,
    ...geoGr12Term4.tasks,
  },
};
