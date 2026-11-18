import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const naturalSciencesGrade8: Subject = {
  id: 'ns',
  title: 'Natural Sciences',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'photosynthesis-and-respiration',
          title: 'Photosynthesis and Respiration',
          description: 'Inputs and outputs, stored food, and the link between plant and cell processes.',
          component: lazy(
            () => import('./term1/photosynthesis-and-respiration/PhotosynthesisAndRespiration'),
          ),
        },
        {
          id: 'ecosystems-and-micro-organisms',
          title: 'Ecosystems and Micro-organisms',
          description: 'Biotic and abiotic factors, food webs, microbes, and ecosystem balance.',
          component: lazy(
            () => import('./term1/ecosystems-and-micro-organisms/EcosystemsAndMicroOrganisms'),
          ),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'particle-model-and-states',
          title: 'Particle Model of Matter and States',
          description: 'Arrangement and movement of particles in solids, liquids and gases, change of state and diffusion.',
          component: lazy(() => import('./term2/particle-model-and-states/ParticleModelAndStates')),
        },
        {
          id: 'density-expansion-pressure',
          title: 'Density, Expansion and Gas Pressure',
          description: 'Density and floating, expansion and contraction in terms of particles, and the pressure of a gas.',
          component: lazy(() => import('./term2/density-expansion-pressure/DensityExpansionPressure')),
        },
        {
          id: 'atoms-elements-compounds',
          title: 'Atoms, Elements, Compounds and Mixtures',
          description: 'Atoms and sub-atomic particles, elements, molecules, compounds and mixtures.',
          component: lazy(() => import('./term2/atoms-elements-compounds/AtomsElementsCompounds')),
        },
        {
          id: 'reactants-and-products',
          title: 'Chemical Reactions: Reactants and Products',
          description: 'Reactants, products, rearranged atoms and everyday chemical reactions.',
          component: lazy(() => import('./term2/reactants-and-products/ReactantsAndProducts')),
        },
        {
          id: 'classification-of-matter-and-periodic-table',
          title: 'Classification of Matter and Periodic Table',
          description: 'Elements, compounds, mixtures, and periodic-table basics.',
          component: lazy(
            () =>
              import(
                './term3/classification-of-matter-and-periodic-table/ClassificationOfMatterAndPeriodicTable'
              ),
          ),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'static-electricity',
          title: 'Static Electricity',
          description: 'Charging by friction, like and unlike charges, and discharge.',
          component: lazy(() => import('./term3/static-electricity/StaticElectricity')),
        },
        {
          id: 'electric-circuits-current',
          title: 'Electric Circuits and Current Electricity',
          description: 'Circuits, their components and the heating, magnetic and chemical effects of a current.',
          component: lazy(() => import('./term3/electric-circuits-current/ElectricCircuitsCurrent')),
        },
        {
          id: 'series-parallel-circuits',
          title: 'Series and Parallel Circuits',
          description: 'Pathways, current and bulb brightness in series and parallel circuits.',
          component: lazy(() => import('./term3/series-parallel-circuits/SeriesParallelCircuits')),
        },
        {
          id: 'visible-light',
          title: 'Visible Light',
          description: 'Light and the spectrum, opaque and transparent materials, colour, reflection and refraction.',
          component: lazy(() => import('./term3/visible-light/VisibleLight')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'solar-system-and-gravity',
          title: 'Solar System and Gravity',
          description: 'Solar-system objects, scale ideas, and gravity as the force of attraction.',
          component: lazy(() => import('./term2/solar-system-and-gravity/SolarSystemAndGravity')),
        },
        {
          id: 'beyond-the-solar-system',
          title: 'Beyond the Solar System',
          description: 'The Milky Way Galaxy, our nearest star, light years, light hours and light minutes, and the Universe.',
          component: lazy(() => import('./term4/beyond-the-solar-system/BeyondTheSolarSystem')),
        },
        {
          id: 'looking-into-space',
          title: 'Looking into Space',
          description: 'Constellations, optical and radio telescopes such as SALT and the SKA, and good places to look into space.',
          component: lazy(() => import('./term4/looking-into-space/LookingIntoSpace')),
        },
      ],
    },
  ],
};
