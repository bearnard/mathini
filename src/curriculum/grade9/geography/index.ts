import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const geographyGrade9: Subject = {
  id: 'geo',
  title: 'Social Sciences: Geography',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr9-contour-lines-slopes',
          title: 'Contour Lines and Slopes',
          description: 'Reading topographic maps to understand terrain relief, elevation changes, and landscape features.',
          component: lazy(() => import('./term1/contour-lines-slopes/ContourLinesSlopesT1')),
        },
        {
          id: 'gr9-orthophoto-maps-symbols',
          title: 'Orthophoto Maps and Map Symbols',
          description: 'Interpreting aerial photographs and using map legends to identify landscape features.',
          component: lazy(() => import('./term1/orthophoto-maps-symbols/OrthophotoMapsSymbolsT1')),
        },
        {
          id: 'gr9-map-scale-coordinates',
          title: 'Map Scale and Coordinates',
          description: 'Measuring distances on maps and using latitude/longitude to locate places precisely.',
          component: lazy(() => import('./term1/map-scale-coordinates/MapScaleCoordinatesT1')),
        },
        {
          id: 'gr9-land-use-interpretation',
          title: 'Land-Use Interpretation',
          description: 'Identifying and analyzing different land-use categories and urbanization patterns.',
          component: lazy(() => import('./term1/land-use-interpretation/LandUseInterpretationT1')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr9-understanding-development-hdi',
          title: 'Understanding Development and HDI',
          description: 'Measuring human development using life expectancy, education, and income indicators.',
          component: lazy(() => import('./term2/understanding-development-hdi/UnderstandingDevelopmentHDI')),
        },
        {
          id: 'gr9-colonialism-trade-imbalances',
          title: 'Colonialism and Trade Imbalances',
          description: 'Examining historical colonial impacts and contemporary unequal trade patterns.',
          component: lazy(() => import('./term2/colonialism-trade-imbalances/ColonialismTradeImbalances')),
        },
        {
          id: 'gr9-sustainable-development',
          title: 'Sustainable Development',
          description: 'Balancing environmental protection, social welfare, and economic growth.',
          component: lazy(() => import('./term2/sustainable-development/SustainableDevelopmentT2')),
        },
        {
          id: 'gr9-development-programmes-sa',
          title: 'Development Programmes in South Africa',
          description: 'Understanding national initiatives to reduce inequality and improve living standards.',
          component: lazy(() => import('./term2/development-programmes-sa/DevelopmentProgrammesSA')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr9-weathering-erosion',
          title: 'Weathering and Erosion',
          description: 'Understanding how rocks break down and are transported, reshaping landscapes.',
          component: lazy(() => import('./term3/weathering-erosion/WeatheringErosionT3')),
        },
        {
          id: 'gr9-river-coastal-landscapes',
          title: 'River and Coastal Landscapes',
          description: 'Examining how water erosion creates valleys, deltas, and coastal features.',
          component: lazy(() => import('./term3/river-coastal-landscapes/RiverCoastalLandscapesT3')),
        },
        {
          id: 'gr9-glaciation-wind-action',
          title: 'Glaciation and Wind Action',
          description: 'Studying landscape formation in cold and arid environments.',
          component: lazy(() => import('./term3/glaciation-wind-action/GlaciationWindActionT3')),
        },
        {
          id: 'gr9-soil-erosion-management',
          title: 'Soil Erosion and Management',
          description: 'Learning about soil loss causes and implementing conservation strategies.',
          component: lazy(() => import('./term3/soil-erosion-management/SoilErosionManagementT3')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr9-renewable-non-renewable-resources',
          title: 'Renewable and Non-Renewable Resources',
          description: 'Understanding resource availability and sustainable use of natural materials.',
          component: lazy(() => import('./term4/renewable-non-renewable-resources/RenewableNonRenewableResourcesT4')),
        },
        {
          id: 'gr9-overfishing-overgrazing',
          title: 'Overfishing and Overgrazing',
          description: 'Examining resource depletion and unsustainable practices affecting food security.',
          component: lazy(() => import('./term4/overfishing-overgrazing/OverfishingOvergrazingT4')),
        },
        {
          id: 'gr9-food-security-farming',
          title: 'Food Security and Sustainable Farming',
          description: 'Learning about agricultural sustainability and ensuring nutrition for all.',
          component: lazy(() => import('./term4/food-security-farming/FoodSecurityFarmingT4')),
        },
        {
          id: 'gr9-technology-sustainability',
          title: 'Technology and Sustainable Resource Use',
          description: 'Exploring innovation for environmental stewardship and agricultural improvement.',
          component: lazy(() => import('./term4/technology-sustainability/TechnologySustainabilityT4')),
        },
      ],
    },
  ],
};
