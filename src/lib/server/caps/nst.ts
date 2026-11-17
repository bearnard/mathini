import type { SubjectConfig } from '../caps/types';
import nstGr6Term1 from './tasks/nst-gr6-term1.json';
import nstGr6Term2 from './tasks/nst-gr6-term2.json';
import nstGr6Term3 from './tasks/nst-gr6-term3.json';
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
      'Keep the science factually correct and age-appropriate. Use South African / SI units and spelling. Do not repeat items. ' +
      'Distractor quality: every wrong option must be a plausible misconception that a learner of this age could genuinely believe. Never use joke, silly or absurd options. ' +
      'The correct option must not be the longest option and must not repeat the wording of the question. If options are lists, give every option the same number of items. '
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
      'Topic: Electric circuits. Cover the parts of a simple circuit (cell/battery, bulb, switch, connecting wires) and what each does, that a circuit must be complete (closed) for current to flow, energy transfer (chemical energy in the cell -> electrical energy -> light and heat in the bulb), series vs parallel (one path vs more than one path; in series a broken bulb stops all, in parallel the other bulbs stay lit), brightness rules (more cells in series = brighter bulb; more bulbs in series = dimmer bulbs), and troubleshooting a circuit that does not work (open switch, loose wire, flat cell, broken bulb). Include predict-the-bulb questions. Ask what makes a bulb light, what a part does, or how to fix a faulty circuit.',
    'conductors-insulators':
      'Topic: Conductors and insulators. Cover that conductors (most metals such as copper, iron, aluminium, steel; also graphite and tap water) let electricity pass and insulators (plastic, rubber, dry wood, glass, dry cloth) do not, why wires are metal inside and plastic outside, why plugs and electricians\' gloves use insulators, testing a material in a gap in a circuit (bulb lights = conductor), a fair test (change only the material), and that shiny or heavy does not mean conductor. Ask whether a material is a conductor or insulator, how to test it, or why it is used.',
    'circuit-diagrams':
      'Topic: Circuit diagrams and symbols. Cover the standard symbols for a cell (one long thin line and one short thick line), battery (two or more cells), lamp (circle with a cross), switch (open = gap, closed = joined) and wires (straight lines), drawing neat diagrams as a complete loop with a ruler, and reading a diagram to predict whether the lamp will light (no cell, open switch, or a gap means it will not). Ask which symbol is which, what a diagram shows, or whether the lamp will light.',
    'mains-electricity':
      'Topic: Mains electricity, power stations and safety. Cover how a coal power station makes electricity (coal burns -> heat -> water boils to steam -> steam turns a turbine -> generator -> electricity -> pylons and power lines (the grid) -> homes and schools), non-renewable sources (coal, oil, gas) vs renewable sources (sun, wind, moving water), that burning coal pollutes the air, why electricity costs money (building and running power stations and lines, prepaid meters, more appliances for longer costs more), illegal connections (dangerous and stealing), safety rules (never touch fallen power lines or damaged cords, keep water away from plugs, mains is much stronger than a cell) and ways to save electricity. Ask about the chain, source types, cost, illegal connections, safety or saving energy.',
    'systems-solve-problems':
      'Topic: Systems to solve problems (Technology). Cover what a system is (input, process, output, e.g. torch, doorbell), the design process in order (investigate, design, make, evaluate, communicate), a design brief with specifications and constraints, designing a simple circuit (choosing cells, wires, switch, bulb or buzzer, using conductors for wires and insulators for covers), drawing a circuit diagram first, and testing and improving. Ask about the order of the steps, what a brief, specification or constraint is, which component or material suits a job, or how to fix a circuit that does not work.',
    'solar-system':
      'Topic: The Solar System. Cover the Sun as a star that makes its own light, planets that only reflect sunlight, gravity keeping planets in orbit, the eight planets in order (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune), inner rocky planets vs outer gas giants, the asteroid belt between Mars and Jupiter, standout facts (Jupiter is the largest; Venus is the hottest because its thick atmosphere traps heat, even though Mercury is closer; Mars is red because of rust in its soil; Saturn has rings of ice and rock; Neptune is the farthest planet), that planets farther from the Sun are colder and have longer years, and dwarf planets (Pluto), asteroids, meteors and comets. Ask about order, features, comparisons or why a planet has a property.',
    'earth-moon-movement':
      'Topic: Movement of the Earth and Moon. Cover that Earth rotates on its axis once in 24 hours (giving day and night, and the Sun rising in the east and setting in the west), revolves around the Sun once in about 365 and a quarter days (leap year every four years), that the Moon orbits Earth in about a month and reflects sunlight (it makes no light of its own), and the eight phases of the Moon in order: New Moon, Waxing Crescent, First Quarter, Waxing Gibbous, Full Moon, Waning Gibbous, Last Quarter (also called Third Quarter), Waning Crescent. Cover waxing/waning and crescent/gibbous. Moon phases are NOT caused by Earth\'s shadow. Ask to tell rotation from revolution, to order phases, or what a phase name means.',
    'day-night-seasons':
      'Topic: Day, night and seasons. Cover day and night first: Earth\'s rotation (24 hours), the side facing the Sun has day, the Sun does not move around Earth, sunrise in the east and sunset in the west, shadows (long in the morning and late afternoon, shortest at midday), and that the Moon does not cause night. Then, as extension only, seasons: caused by the tilt of Earth\'s axis as it orbits the Sun, not by distance from the Sun; opposite seasons in the northern and southern hemispheres (South African summer is about December to February, winter about June to August). Use the \'closer to the Sun\' idea only as a wrong option. Ask about the cause of day/night, shadows, or seasons.',
    'space-exploration':
      'Topic: Space exploration and technology. Cover tools for exploring space (satellites, space probes, rockets, space stations), optical telescopes (visible light, need dark clear skies) vs radio telescopes (radio waves, work day and night and through cloud), South African telescopes (SALT near Sutherland in the Northern Cape, the largest single optical telescope in the southern hemisphere; MeerKAT, a radio telescope of 64 dishes in the Karoo, part of the SKA, the Square Kilometre Array in South Africa and Australia), how rockets work (hot gas pushed down, they carry their own oxygen), exploring the Moon (people first walked on it in 1969) and Mars (rovers such as Curiosity and Perseverance), spacesuits (oxygen, pressure, protection from extreme temperatures), and everyday benefits (weather forecasts, TV and phone signals, GPS). Ask about a tool, a telescope, an exploration fact or a benefit.',
    ...nstGr6Term1.tasks,
    ...nstGr6Term2.tasks,
    ...nstGr6Term3.tasks,
    ...nstGr7Term1.tasks,
    ...nstGr7Term2.tasks,
    ...nstGr7Term3.tasks,
    ...nstGr7Term4.tasks,
  },
};
