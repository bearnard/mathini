import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const geographyGrade12: Subject = {
  id: 'geo',
  title: 'Social Sciences: Geography',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr12-mid-latitude-cyclones-t1',
          title: "Mid-Latitude Cyclones",
          description: "Fronts, cyclone development, synoptic interpretation and weather changes over the south-western Cape.",
          component: lazy(() => import('./term1/mid-latitude-cyclones/MidLatitudeCyclonesT1')),
        },
        {
          id: 'gr12-tropical-cyclones-anticyclones-t1',
          title: "Tropical Cyclones and Anticyclones",
          description: "Conditions for tropical cyclones, storm structure, anticyclones and contrasting pressure systems.",
          component: lazy(() => import('./term1/tropical-cyclones-anticyclones/TropicalCyclonesAnticyclonesT1')),
        },
        {
          id: 'gr12-local-climates-t1',
          title: "Local Climates",
          description: "Microclimates in valleys and cities, inversion layers, aspect and local wind systems.",
          component: lazy(() => import('./term1/local-climates/LocalClimatesT1')),
        },
        {
          id: 'gr12-fluvial-processes-catchment-management-t1',
          title: "Fluvial Processes and Catchment Management",
          description: "Drainage systems, erosion, transport, deposition, river profiles and catchment management.",
          component: lazy(() => import('./term1/fluvial-processes-catchment-management/FluvialProcessesCatchmentManagementT1')),
        },
        {
          id: 'gr12-map-scale-distance-area-t1',
          title: "Map Scale, Distance and Area",
          description: "Scale, measuring straight and curved distance and calculating area on a 1:50 000 map.",
          component: lazy(() => import('./term1/map-scale-distance-area/MapScaleDistanceAreaT1')),
        },
        {
          id: 'gr12-bearings-declination-t1',
          title: "Direction, Bearings and Magnetic Declination",
          description: "Compass points, true and magnetic bearings, back bearings and the declination today.",
          component: lazy(() => import('./term1/bearings-declination/BearingsDeclinationT1')),
        },
        {
          id: 'gr12-contours-gradient-sections-t1',
          title: "Contours, Gradient, Cross-sections and Intervisibility",
          description: "Contours and landforms, gradient, cross-sections with vertical exaggeration and intervisibility.",
          component: lazy(() => import('./term1/contours-gradient-sections/ContoursGradientSectionsT1')),
        },
        {
          id: 'gr12-aerial-orthophoto-t1',
          title: "Aerial Photographs and Orthophoto Maps",
          description: "Vertical and oblique photographs, tone, texture and shadow, and orthophoto maps.",
          component: lazy(() => import('./term1/aerial-orthophoto/AerialOrthophotoT1')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr12-site-situation-settlement-patterns-t2',
          title: "Site, Situation and Settlement Patterns",
          description: "Site and situation, rural settlement patterns and physical factors influencing location.",
          component: lazy(() => import('./term2/site-situation-settlement-patterns/SiteSituationSettlementPatternsT2')),
        },
        {
          id: 'gr12-rural-settlement-challenges-t2',
          title: "Rural Settlement Challenges",
          description: "Rural depopulation, ageing communities, limited services and strategies for rural renewal.",
          component: lazy(() => import('./term2/rural-settlement-challenges/RuralSettlementChallengesT2')),
        },
        {
          id: 'gr12-urban-hierarchy-and-structure-t2',
          title: "Urban Hierarchy and Structure",
          description: "Settlement hierarchy, threshold and range, CBDs and South African urban land-use patterns.",
          component: lazy(() => import('./term2/urban-hierarchy-and-structure/UrbanHierarchyAndStructureT2')),
        },
        {
          id: 'gr12-urban-issues-and-planning-t2',
          title: "Urban Issues and Planning",
          description: "Rapid urbanisation, service-delivery pressures, informal settlements and GIS in planning.",
          component: lazy(() => import('./term2/urban-issues-and-planning/UrbanIssuesAndPlanningT2')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr12-economic-sectors-and-employment-t3',
          title: "Economic Sectors and Employment",
          description: "Primary to quaternary sectors, formal and informal work, and employment structure in South Africa.",
          component: lazy(() => import('./term3/economic-sectors-and-employment/EconomicSectorsAndEmploymentT3')),
        },
        {
          id: 'gr12-agriculture-and-food-security-t3',
          title: "Agriculture and Food Security",
          description: "Commercial and subsistence agriculture, production factors and dimensions of food security.",
          component: lazy(() => import('./term3/agriculture-and-food-security/AgricultureAndFoodSecurityT3')),
        },
        {
          id: 'gr12-mining-industries-and-development-corridors-t3',
          title: "Mining, Industries and Development Corridors",
          description: "Mining, industrial location factors, IDZs, SDIs and transport corridors in South Africa.",
          component: lazy(() => import('./term3/mining-industries-and-development-corridors/MiningIndustriesAndDevelopmentCorridorsT3')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr12-climate-and-geomorphology-revision-t4',
          title: "Climate and Geomorphology Revision",
          description: "Integrated revision of weather systems, local climates, drainage basins and river processes.",
          component: lazy(() => import('./term4/climate-and-geomorphology-revision/ClimateAndGeomorphologyRevisionT4')),
        },
        {
          id: 'gr12-settlements-revision-t4',
          title: "Settlements Revision",
          description: "Revision of site, situation, settlement patterns, hierarchy, urban issues and planning.",
          component: lazy(() => import('./term4/settlements-revision/SettlementsRevisionT4')),
        },
        {
          id: 'gr12-economic-geography-and-mapwork-revision-t4',
          title: "Economic Geography and Mapwork Revision",
          description: "Revision of economic sectors, agriculture, mining, industry, GIS and map-based data interpretation.",
          component: lazy(() => import('./term4/economic-geography-and-mapwork-revision/EconomicGeographyAndMapworkRevisionT4')),
        },
      ],
    },
  ],
};
