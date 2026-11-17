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
        {
          id: 'variation',
          title: 'Variation',
          description: 'Species, variation within a species, inherited characteristics, and showing a class survey in a bar graph.',
          component: lazy(() => import('./term1/variation/Variation')),
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
          id: 'periodic-table',
          title: 'Introduction to the Periodic Table',
          description: 'Elements, symbols, and metals, semi-metals and non-metals in the first 20 elements.',
          component: lazy(() => import('./term2/periodic-table/PeriodicTable')),
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
          id: 'national-electricity-grid',
          title: 'The National Electricity Supply',
          description: 'The grid from the power station to the home, dynamos, and saving electricity.',
          component: lazy(() => import('./term3/national-electricity-grid/NationalElectricityGrid')),
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
          id: 'history-of-astronomy',
          title: 'The History of Astronomy',
          description: 'Early calendars and sky knowledge, then Copernicus, Kepler, Galilei and Newton.',
          component: lazy(() => import('./term4/history-of-astronomy/HistoryOfAstronomy')),
        },
      ],
    },
  ],
};
