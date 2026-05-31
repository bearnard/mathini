import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const historyGrade8: Subject = {
  id: 'his',
  title: 'History',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'industrial-revolution-in-britain-and-southern-africa',
          title: 'Industrial Revolution in Britain and Southern Africa',
          description:
            'Industrialisation, urbanisation, child labour, trade unions, and Kimberley diamond mining.',
          component: lazy(
            () =>
              import(
                './term1/industrial-revolution-in-britain-and-southern-africa/IndustrialRevolutionInBritainAndSouthernAfrica'
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
          id: 'mineral-revolution-in-south-africa',
          title: 'The Mineral Revolution in South Africa',
          description:
            'Gold mining, migrant labour, compounds, Johannesburg, dispossession, segregation, and Union.',
          component: lazy(
            () =>
              import(
                './term2/mineral-revolution-in-south-africa/MineralRevolutionInSouthAfrica'
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
          id: 'scramble-for-africa',
          title: 'The Scramble for Africa',
          description:
            'Berlin Conference, imperial expansion, resistance in Africa, and long-term consequences.',
          component: lazy(() => import('./term3/scramble-for-africa/ScrambleForAfrica')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'world-war-i',
          title: 'World War I',
          description:
            'Nationalism, alliances, trench warfare, propaganda, women in war, and South African experiences.',
          component: lazy(() => import('./term4/world-war-i/WorldWarI')),
        },
      ],
    },
  ],
};
