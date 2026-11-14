import type { SubjectConfig } from '../caps/types';
import nstGr7Term1 from './tasks/nst-gr7-term1.json';
import nstGr7Term2 from './tasks/nst-gr7-term2.json';
import nstGr7Term3 from './tasks/nst-gr7-term3.json';
import nstGr7Term4 from './tasks/nst-gr7-term4.json';

export const nst: SubjectConfig = {
  getPreamble(grade: number): string {
    const age = grade + 5;
    return (
      `You are a Natural Sciences & Technology teacher creating Grade ${grade} (CAPS, South Africa) multiple-choice practice for ${age}-year-old learners. ` +
      'Generate {count} varied items. Each item must have: a clear, simply-worded question, exactly 4 options, exactly one correct answer that equals one option VERBATIM, and a short, friendly English explanation. ' +
      'Keep the science factually correct and age-appropriate. Use South African / SI units and spelling. Do not repeat items. '
    );
  },
  tasks: {
    photosynthesis:
      'Topic: Photosynthesis. Cover that green plants make their own food in the leaves using sunlight, water and carbon dioxide, that chlorophyll traps light, and that oxygen is released. Ask about the requirements, the products, the role of leaves/chlorophyll, or why plants are producers.',
    nutrients:
      'Topic: Nutrients in food. Cover carbohydrates (energy), proteins (growth/repair), fats (energy/storage), vitamins and minerals (health), fibre and water, and the idea of a balanced diet. Ask which nutrient a food is rich in, or what a nutrient does for the body.',
    'food-chains':
      'Topic: Food chains and food webs. Cover producers, consumers (herbivores, carnivores, omnivores) and decomposers, the direction of energy flow (arrows point to the eater), and simple South African examples (e.g. grass -> springbok -> lion). Ask to identify roles or complete a chain.',
    ecosystems:
      'Topic: Ecosystems and interdependence. Cover habitats, how living things depend on each other and on non-living things (water, air, soil, sunlight), adaptations to environments, and what happens when part of a habitat changes. Ask about habitats, adaptations or interdependence.',
    'materials-properties':
      'Topic: Properties and uses of materials. Cover properties such as strength, hardness, flexibility, waterproofing, transparency, and whether a material conducts heat/electricity, and why a material is chosen for a job (e.g. metal for pots, glass for windows). Ask which property suits a use.',
    mixtures:
      'Topic: Mixtures. Cover that a mixture is two or more materials mixed together that are not chemically joined and can usually be separated, with everyday examples (cereal, fruit salad, muddy water, air). Ask to identify a mixture or its parts.',
    'separating-mixtures':
      'Topic: Separating mixtures. Cover hand-sorting, sieving, filtration, evaporation, and using a magnet, and which method suits which mixture (e.g. filtration for sand in water, evaporation to get salt from salt water, magnet for iron filings). Ask which method separates a given mixture.',
    'solutions-dissolving':
      'Topic: Solutions and dissolving. Cover solute and solvent, that a solution is a special mixture where a solute dissolves in a solvent (water is a common solvent), factors that speed up dissolving (stirring, heat, smaller pieces), and getting the solute back by evaporation. Ask about dissolving or solutions.',
    'electric-circuits':
      'Topic: Electric circuits. Cover the parts of a simple circuit (cell/battery, bulb, switch, connecting wires), that a circuit must be complete (closed) for current to flow, the job of a switch, and a basic idea of series vs parallel. Ask what makes a bulb light or what a part does.',
    'conductors-insulators':
      'Topic: Conductors and insulators. Cover that conductors (most metals) let electricity pass and insulators (plastic, rubber, wood, glass) do not, why wires have plastic coating, and testing materials in a circuit. Ask whether a material is a conductor or insulator, or why it is used.',
    'circuit-diagrams':
      'Topic: Circuit diagrams and symbols. Cover the standard symbols for a cell, battery, bulb/lamp, switch (open/closed) and connecting wires, and reading a simple circuit diagram. Ask which symbol represents which component, or what a diagram shows.',
    'mains-electricity':
      'Topic: Mains electricity and safety. Cover how electricity reaches homes and schools (power station -> power lines -> home), that mains electricity is dangerous (much stronger than a cell), safety rules, and ways to save electricity. Ask about the path of electricity, safety, or saving energy.',
    'systems-solve-problems':
      'Topic: Systems to solve problems (Technology). Cover what a system is (input, process, output, e.g. torch, doorbell), the design process in order (investigate, design, make, evaluate, communicate), a design brief with specifications and constraints, designing a simple circuit (choosing cells, wires, switch, bulb or buzzer, using conductors for wires and insulators for covers), drawing a circuit diagram first, and testing and improving. Ask about the order of the steps, what a brief, specification or constraint is, which component or material suits a job, or how to fix a circuit that does not work.',
    'solar-system':
      'Topic: The Solar System. Cover the Sun as the central star, the eight planets in order (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune), dwarf planets, asteroids, meteors and comets, and that planets orbit the Sun. Ask about order, names or features of the Solar System.',
    'earth-moon-movement':
      'Topic: Movement of the Earth and Moon. Cover that Earth rotates (spins) on its axis once a day and revolves (orbits) the Sun once a year, that the Moon orbits the Earth, and the phases of the Moon. Ask to tell rotation from revolution, or about the Moon and orbits.',
    'day-night-seasons':
      'Topic: Day, night and seasons. Cover that day and night are caused by Earth spinning on its axis (not the Sun moving), that the side facing the Sun has day, and that the tilt of the Earth as it orbits the Sun causes the seasons. Ask about the cause of day/night or seasons.',
    'space-exploration':
      'Topic: Space exploration and technology. Cover tools for looking into space (telescopes, satellites, space probes, rockets, space stations), why we explore space, and benefits of space technology in daily life (weather, communication, GPS). Ask about a tool or a benefit of space technology.',
    ...nstGr7Term1.tasks,
    ...nstGr7Term2.tasks,
    ...nstGr7Term3.tasks,
    ...nstGr7Term4.tasks,
  },
};
