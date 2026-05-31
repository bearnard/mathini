import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const geographyGrade7: Subject = {
  id: 'geo',
  title: 'Geography',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'map-skills-in-the-local-area',
          title: 'Map Skills in the Local Area',
          description: 'Local maps, street maps, route finding, sketch maps, and coordinate basics.',
          component: lazy(() => import('./term1/map-skills-in-the-local-area/MapSkillsInTheLocalArea')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'natural-hazards-volcanoes-earthquakes-and-floods',
          title: 'Natural Hazards: Volcanoes, Earthquakes and Floods',
          description: 'Earth structure, tectonic activity, flood risk, and disaster reduction.',
          component: lazy(
            () =>
              import(
                './term2/natural-hazards-volcanoes-earthquakes-and-floods/NaturalHazardsVolcanoesEarthquakesAndFloods'
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
          id: 'population-growth-and-change',
          title: 'Population Growth and Change',
          description: 'Birth and death rates, life expectancy, pandemics, and global patterns.',
          component: lazy(() => import('./term3/population-growth-and-change/PopulationGrowthAndChange')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'natural-resources-and-conservation-in-south-africa',
          title: 'Natural Resources and Conservation in South Africa',
          description: 'Resource use, conservation areas, eco-tourism, and water management.',
          component: lazy(
            () =>
              import(
                './term4/natural-resources-and-conservation-in-south-africa/NaturalResourcesAndConservationInSouthAfrica'
              ),
          ),
        },
      ],
    },
  ],
};
