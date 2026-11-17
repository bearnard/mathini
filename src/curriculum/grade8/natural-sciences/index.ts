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
          id: 'biogeochemical-cycles',
          title: 'Biogeochemical Cycles',
          description: 'Water, carbon, and nitrogen cycles with decomposers and matter recycling.',
          component: lazy(() => import('./term2/biogeochemical-cycles/BiogeochemicalCycles')),
        },
        {
          id: 'solar-system-and-gravity',
          title: 'Solar System and Gravity',
          description: 'Solar-system objects, scale ideas, and gravity as the force of attraction.',
          component: lazy(() => import('./term2/solar-system-and-gravity/SolarSystemAndGravity')),
        },
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
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
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
        {
          id: 'chemical-reactions-acids-and-bases',
          title: 'Chemical Reactions, Acids and Bases',
          description: 'Reaction evidence, indicators, neutralisation, and separating mixtures.',
          component: lazy(
            () =>
              import(
                './term3/chemical-reactions-acids-and-bases/ChemicalReactionsAcidsAndBases'
              ),
          ),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'forces-motion-and-measurement',
          title: 'Forces, Motion and Measurement',
          description: 'Distance-time-speed relationships and common contact and non-contact forces.',
          component: lazy(
            () => import('./term4/forces-motion-and-measurement/ForcesMotionAndMeasurement'),
          ),
        },
        {
          id: 'forms-and-transfer-of-energy',
          title: 'Forms and Transfer of Energy',
          description: 'Energy forms, transfer pathways, and conservation of energy in systems.',
          component: lazy(
            () => import('./term4/forms-and-transfer-of-energy/FormsAndTransferOfEnergy'),
          ),
        },
      ],
    },
  ],
};
