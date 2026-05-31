import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const naturalSciencesTechnologyGrade7: Subject = {
  id: 'nst',
  title: 'Natural Sciences & Technology',
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
        {
          id: 'design-process-and-structures',
          title: 'Design Process and Structures',
          description: 'IDMEC, structures, forces, and stability in engineering solutions.',
          component: lazy(() => import('./term1/design-process-and-structures/DesignProcessAndStructures')),
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
        {
          id: 'processing-materials-and-properties',
          title: 'Processing Materials and Properties',
          description: 'Material selection, processing, joining, and sustainability decisions.',
          component: lazy(
            () =>
              import('./term2/processing-materials-and-properties/ProcessingMaterialsAndProperties'),
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
        {
          id: 'mechanical-systems-and-control',
          title: 'Mechanical Systems and Control',
          description: 'Levers, gears, pulleys, linkages, and systems thinking.',
          component: lazy(
            () => import('./term3/mechanical-systems-and-control/MechanicalSystemsAndControl'),
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
        {
          id: 'electrical-systems-and-control',
          title: 'Electrical Systems and Control',
          description: 'Series and parallel circuits, control systems, and electrical safety.',
          component: lazy(
            () => import('./term4/electrical-systems-and-control/ElectricalSystemsAndControl'),
          ),
        },
      ],
    },
  ],
};
