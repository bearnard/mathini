import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const naturalSciencesGrade7: Subject = {
  id: 'ns',
  title: 'Natural Sciences',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'biosphere-biodiversity-and-reproduction',
          title: 'Biosphere, Biodiversity and Reproduction',
          description: 'Habitats, classification, and sexual or asexual reproduction strategies.',
          component: lazy(
            () =>
              import(
                './term1/biosphere-biodiversity-and-reproduction/BiosphereBiodiversityAndReproduction'
              ),
          ),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'matter-mixtures-acids-and-bases',
          title: 'Matter, Mixtures, Acids and Bases',
          description: 'Particle model, indicators, separation methods, and chemical change evidence.',
          component: lazy(
            () => import('./term2/matter-mixtures-acids-and-bases/MatterMixturesAcidsAndBases'),
          ),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'energy-transfer-heat-and-motion',
          title: 'Energy Transfer, Heat and Motion',
          description: 'Kinetic and potential energy, heat transfer, insulation, and efficiency.',
          component: lazy(
            () => import('./term3/energy-transfer-heat-and-motion/EnergyTransferHeatAndMotion'),
          ),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'sun-earth-relationship-and-gravity',
          title: 'Sun-Earth Relationship and Gravity',
          description: 'Seasons, phases, tides, and gravity in the Earth-Moon-Sun system.',
          component: lazy(
            () => import('./term4/sun-earth-relationship-and-gravity/SunEarthRelationshipAndGravity'),
          ),
        },
      ],
    },
  ],
};
