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
        {
          id: "equinox-solstice-seasons",
          title: "Equinox, Solstice and the Seasons",
          description: "The tilted axis, the midday sun and the length of day and night.",
          component: lazy(() => import('./term1/equinox-solstice-seasons/EquinoxSolsticeSeasons')),
        },
        {
          id: "world-time-and-sa-standard-time",
          title: "World Time and South African Standard Time",
          description: "Longitude and time, time zones, the date line and the time in South Africa.",
          component: lazy(() => import('./term1/world-time-and-sa-standard-time/WorldTimeAndSaStandardTime')),
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
        {
          id: "climate-factors-and-sa-climate",
          title: "Climate Factors and South Africa's Climate",
          description: "Latitude, the sea, altitude, ocean currents and mountains, and some South African places.",
          component: lazy(() => import('./term2/climate-factors-and-sa-climate/ClimateFactorsAndSaClimate')),
        },
        {
          id: "climate-kinds-and-climate-graphs",
          title: "Kinds of Climate and Climate Graphs",
          description: "Weather and climate, reading climate graphs, and where the kinds of climate occur.",
          component: lazy(() => import('./term2/climate-kinds-and-graphs/ClimateKindsAndGraphs')),
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
