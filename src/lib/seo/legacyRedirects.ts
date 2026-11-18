// Public URLs that moved when subjects or terms were restructured (CAPS alignment, Wave B). Each one gets a permanent redirect
// (next.config.ts -> HTTP 308) so links, bookmarks and search results keep working. No imports on purpose: next.config.ts reads this file.
// legacyRedirects.test.ts checks that every source is no longer a live page and every destination is one.
// Task ids and slugs never change in a restructure, so only the page the lesson is listed under moves.

/** Grade 7 "Natural Sciences & Technology" became two subjects. */
const NST_TO_NS = ['biosphere-biodiversity-and-reproduction', 'energy-transfer-heat-and-motion', 'matter-mixtures-acids-and-bases', 'sun-earth-relationship-and-gravity'];
const NST_TO_TECH = ['design-process-and-structures', 'electrical-systems-and-control', 'mechanical-systems-and-control', 'processing-materials-and-properties'];
/** Grade 7 "Life Skills" became Life Orientation (PSW and PE) and Creative Arts. */
const LSK_TO_LO = [1, 2, 3, 4].flatMap((n) => [`personal-and-social-well-being-term-${n}`, `physical-education-term-${n}`]);
const LSK_TO_CA = [1, 2, 3, 4].map((n) => `creative-arts-term-${n}`);

/** Grade 12 Physical Sciences: the combined rate/equilibrium/acids-bases lesson was split into three; its page goes to the first of them (the task id and its questions are unchanged). */
const PS12_COMBINED = { source: '/grade-12/physical-sciences/reaction-rates-equilibrium-and-acids-bases', destination: '/grade-12/physical-sciences/chemical-equilibrium' };

/** Grade 12 IT "Advanced OOP: Inheritance and Polymorphism" is not in the Grade 12 CAPS, so the lesson is hidden (code and D1 questions kept); its page goes to the subject page. */
const IT12_HIDDEN = { source: '/grade-12/information-technology/advanced-oop-inheritance-and-polymorphism', destination: '/grade-12/information-technology' };

/** Grade 12 IT "Encapsulation, Class Design and Exception Handling" is hidden now that the CAPS-scoped "Classes in Delphi" lesson exists (code and D1 questions kept); its page goes to the new lesson. */
const IT12_ENCAPSULATION = { source: '/grade-12/information-technology/encapsulation-class-design-and-exception-handling', destination: '/grade-12/information-technology/classes-in-delphi' };

/** Grade 9 Natural Sciences "Heat and Energy Transfer" is not in the Grade 9 CAPS (the audit's one invented lesson), and the CAPS Energy and Change lessons now exist (forces, safety, generation and the grid, cost of power), so the lesson is hidden (code, task instruction and D1 questions kept); its page goes to the subject page. */
const NS9_HEAT = { source: '/grade-9/natural-sciences/heat-and-energy-transfer', destination: '/grade-9/natural-sciences' };

/** Grade 6 History: nine lessons were not in the Grade 6 CAPS (general history skills, Cape frontier and the British, "Medicine in Ancient Times") and are hidden now that the nine CAPS lessons exist (code, task instructions and D1 questions kept). Each page goes to the most relevant CAPS lesson, or to the subject page. */
const H6 = '/grade-6/history';
const HIS6_HIDDEN = [
  ['what-is-history', 'societies-in-the-limpopo-valley-k2-and-schroda'],
  ['historical-sources', 'societies-in-the-limpopo-valley-k2-and-schroda'],
  ['investigating-local-history', ''],
  ['timelines-and-change', 'east-coast-trade-and-great-zimbabwe'],
  ['the-british-take-the-cape', ''],
  ['peoples-on-the-frontier', 'dias-at-mossel-bay-and-da-gama-s-sea-route'],
  ['frontier-conflicts', ''],
  ['trekboers-and-migration', ''],
  ['medicine-in-ancient-times', 'early-and-indigenous-medicine'],
].map(([slug, to]) => ({ source: `${H6}/${slug}`, destination: to ? `${H6}/${to}` : H6 }));

/** Grade 12 Life Orientation: four lessons are not in the Grade 12 CAPS (Community and Social Action, Risk Management and Support, Active Citizenship and Leadership, Transition and Personal Planning) and are hidden now that the CAPS lessons on human factors in ill-health, lifestyle diseases, a physical activity plan, unemployment and tax, corruption and fraud exist (code, task instructions and D1 questions kept). Each page goes to the closest CAPS lesson. */
const LO12 = '/grade-12/life-orientation';
const LO12_HIDDEN = [
  ['community-and-social-action', 'social-and-environmental-responsibility'],
  ['risk-management-and-support', 'human-factors-in-ill-health-accidents-and-disasters'],
  ['active-citizenship-and-leadership', 'democracy-and-human-rights'],
  ['transition-and-personal-planning', 'careers-and-career-choices'],
].map(([slug, to]) => ({ source: `${LO12}/${slug}`, destination: `${LO12}/${to}` }));

/** Grade 11 IT: four lessons are not in the amended Grade 11 CAPS (2024 amendment, DBE Circular S9 of 2025): the two OOP lessons (OOP is Grade 12 Term 2) and the two SQL lessons (SQL is Grade 12 Term 1). Grade 12 has Classes in Delphi and Advanced Databases and SQL. Hidden now that the Grade 11 replacements are live (code, task instructions and D1 questions kept); each page goes to the Grade 11 IT subject page. */
const IT11_HIDDEN = ['oop-classes-and-objects', 'oop-methods-and-constructors', 'databases-and-sql', 'sql-integration'].map((slug) => ({ source: `/grade-11/information-technology/${slug}`, destination: '/grade-11/information-technology' }));

/** Grade 10 IT: "Database and Introductory Object Concepts" is not in the amended Grade 10 CAPS (databases are Grade 11 Term 3, objects Grade 12 Term 2; DBE Circular S9 of 2025) and is hidden now that the Grade 10 replacements are live (code, task instruction and D1 questions kept); its page goes to the Grade 10 IT subject page. */
const IT10_HIDDEN = { source: '/grade-10/information-technology/database-and-introductory-object-concepts', destination: '/grade-10/information-technology' };

/** Grade 10 Physical Sciences "Electrostatics and Electric Circuits" teaches Coulomb's law, Ohm's law and electrical power (Grade 11/12) and is hidden now that the CAPS lessons "Electrostatics Basics" and "Electric Circuits: Series and Parallel" are live (code, task instruction and D1 rows kept); its page goes to the subject page. */
const PS10_ELECTRO_HIDDEN = { source: '/grade-10/physical-sciences/electrostatics-and-electric-circuits', destination: '/grade-10/physical-sciences' };

/** Grade 11 Physical Sciences: five lessons are not in the Grade 11 CAPS (Work, Energy and Power; Momentum and Impulse; Vertical Projectile Motion; Organic Chemistry; Electrochemical Cells: Grade 10 or 12 content, all with a live Grade 12 equivalent) and are hidden (code, task instructions and D1 rows kept); each page goes to the subject page. */
const PS11_HIDDEN = ['work-energy-and-power', 'momentum-and-impulse', 'vertical-projectile-motion', 'organic-chemistry', 'electrochemical-cells'].map((slug) => ({ source: `/grade-11/physical-sciences/${slug}`, destination: '/grade-11/physical-sciences' }));

/** Grade 11 History Wave B: Decolonisation in Africa (Kenya, Algeria, the Year of Africa), Resistance to Racism (US civil rights and the defeat of apartheid) and Liberation Movements (regional struggles, nation-building) are Grade 12 content, not Grade 11 CAPS Topic 5; the two new Term 4 lessons replace them. Code, task instructions and D1 rows stay. */
const HIS11_HIDDEN = ['decolonisation-in-africa', 'resistance-to-racism', 'liberation-movements'].map((slug) => ({ source: `/grade-11/history/${slug}`, destination: '/grade-11/history' }));

/** Grade 8 Natural Sciences, Technology and EMS: lessons that are not in the Grade 8 CAPS (biogeochemical cycles, forces and motion, energy forms, acids and bases; Grade 9 processing) and the four older EMS bundle lessons whose CAPS parts now each have their own lesson are hidden (code, task instructions and D1 questions kept). Each page goes to the closest CAPS lesson, or to the subject page. */
const G8 = '/grade-8';
const G8_HIDDEN = [
  ['natural-sciences', 'biogeochemical-cycles', ''],
  ['natural-sciences', 'forces-motion-and-measurement', ''],
  ['natural-sciences', 'forms-and-transfer-of-energy', ''],
  ['natural-sciences', 'chemical-reactions-acids-and-bases', 'chemical-reactions-reactants-and-products'],
  ['technology', 'indigenous-technology-and-processing', 'mining-technology-impact-and-bias'],
  ['economic-management-sciences', 'the-economy-government-and-accounting-foundations', 'government-and-the-national-budget'],
  ['economic-management-sciences', 'financial-literacy-and-entrepreneurship-basics', 'the-accounting-cycle-income-statement-and-balance-sheet'],
  ['economic-management-sciences', 'cash-payments-business-ownership-and-management', 'cash-payments-journal-and-the-combined-cash-journals'],
  ['economic-management-sciences', 'banking-saving-and-ems-consolidation', ''],
].map(([subject, slug, to]) => ({ source: `${G8}/${subject}/${slug}`, destination: to ? `${G8}/${subject}/${to}` : `${G8}/${subject}` }));

/** Grade 8 Creative Arts: four lessons that are not in the Grade 8 CAPS (Visual Arts Term 2 pattern, printmaking and collage; Visual Arts Term 4 portfolio and exhibition planning; Music Term 3 binary and ternary form; Music Term 4 genre comparison and stage etiquette) are hidden now that the CAPS lessons for those terms exist (code, task instructions and D1 questions kept). Each page goes to the new lesson of the same art form and term. */
const CA8 = '/grade-8/creative-arts';
const CA8_HIDDEN = [
  ['visual-arts-term-2', 'fashion-design-from-recyclables'],
  ['visual-arts-term-4', 'scraperboard-etching'],
  ['music-term-3', 'melodic-ostinato-riffs-and-the-jingle'],
  ['music-term-4', '6-8-d-major-tempo-and-articulation'],
].map(([slug, to]) => ({ source: `${CA8}/${slug}`, destination: `${CA8}/${to}` }));

/** Invented lessons that are not in the CAPS are hidden (code, task instructions and D1 questions kept). Grade 6 Geography: Mediterranean, Temperate and Polar (the CAPS has coniferous forests), Vegetation and Adaptations (taught inside each region lesson), Impact of Migration. Grade 6 Natural Sciences and Technology: Day, Night and Seasons (seasons are not Grade 6 CAPS; day and night are in Earth and Moon Movement). Grade 9 EMS: Entrepreneurship and Financial Planning, Business Responsibility and Integration. Grade 9 English: Reports and Instructional Texts. Grade 9 Afrikaans: Formal Correspondence. Each page goes to the closest live lesson, or to the subject page. */
const INVENTED_HIDDEN = [
  ['/grade-6/geography/mediterranean-temperate-and-polar', '/grade-6/geography/coniferous-forests'],
  ['/grade-6/geography/vegetation-and-adaptations', '/grade-6/geography/tropical-rainforest-and-hot-desert'],
  ['/grade-6/geography/impact-of-migration', '/grade-6/geography/migration-push-and-pull'],
  ['/grade-6/natural-sciences-and-technology/day-night-and-seasons', '/grade-6/natural-sciences-and-technology/earth-and-moon-movement'],
  ['/grade-9/economic-management-sciences/entrepreneurship-and-financial-planning', '/grade-9/economic-management-sciences/sectors-of-the-economy'],
  ['/grade-9/economic-management-sciences/business-responsibility-and-integration', '/grade-9/economic-management-sciences'],
  ['/grade-9/english-hl/reports-and-instructional-texts', '/grade-9/english-hl'],
  ['/grade-9/afrikaans-fal/formele-korrespondensie', '/grade-9/afrikaans-fal'],
].map(([source, destination]) => ({ source, destination }));

export interface LegacyRedirect { source: string; destination: string }

const moved = (fromSubject: string, toSubject: string, slugs: string[]): LegacyRedirect[] => [
  { source: fromSubject, destination: toSubject },
  ...slugs.map((slug) => ({ source: `${fromSubject}/${slug}`, destination: `${toSubject}/${slug}` })),
];

export const LEGACY_REDIRECTS: LegacyRedirect[] = [
  // The old subject page goes to Natural Sciences (the first half of the old name); its Technology topics go to /grade-7/technology.
  ...moved('/grade-7/natural-sciences-and-technology', '/grade-7/natural-sciences', NST_TO_NS),
  ...NST_TO_TECH.map((slug) => ({ source: `/grade-7/natural-sciences-and-technology/${slug}`, destination: `/grade-7/technology/${slug}` })),
  ...moved('/grade-7/life-skills', '/grade-7/life-orientation', LSK_TO_LO),
  ...LSK_TO_CA.map((slug) => ({ source: `/grade-7/life-skills/${slug}`, destination: `/grade-7/creative-arts/${slug}` })),
  PS12_COMBINED,
  IT12_HIDDEN,
  IT12_ENCAPSULATION,
  NS9_HEAT,
  ...HIS6_HIDDEN,
  ...LO12_HIDDEN,
  ...IT11_HIDDEN,
  IT10_HIDDEN,
  PS10_ELECTRO_HIDDEN,
  ...PS11_HIDDEN,
  ...HIS11_HIDDEN,
  ...G8_HIDDEN,
  ...CA8_HIDDEN,
  ...INVENTED_HIDDEN,
];

/** The shape next.config.ts `redirects()` wants: permanent: true answers 308. */
export function nextRedirects() {
  return LEGACY_REDIRECTS.map((r) => ({ source: r.source, destination: r.destination, permanent: true as const }));
}
