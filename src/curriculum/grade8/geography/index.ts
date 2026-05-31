import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const geographyGrade8: Subject = {
  id: 'geo',
  title: 'Geography',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'maps-globes-and-satellite-images',
          title: 'Maps, Globes and Satellite Images',
          description: 'Atlas work, coordinates, ratio scale, time zones, seasons, and satellite imagery.',
          component: lazy(
            () => import('./term1/maps-globes-and-satellite-images/MapsGlobesAndSatelliteImages'),
          ),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'climate-regions-in-south-africa-and-the-world',
          title: 'Climate Regions in South Africa and the World',
          description: 'Climate controls, climate graphs, world climate regions, and South African patterns.',
          component: lazy(
            () =>
              import(
                './term2/climate-regions-in-south-africa-and-the-world/ClimateRegionsInSouthAfricaAndTheWorld'
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
          id: 'settlement-and-urbanisation',
          title: 'Settlement and Urbanisation',
          description: 'Settlement types, land use, migration, urban growth, and South African urban history.',
          component: lazy(
            () => import('./term3/settlement-and-urbanisation/SettlementAndUrbanisation'),
          ),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'transport-and-trade',
          title: 'Transport and Trade',
          description: 'Trade reasons, transport modes, harbours, and commuter movement in urban areas.',
          component: lazy(() => import('./term4/transport-and-trade/TransportAndTrade')),
        },
      ],
    },
  ],
};
