import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const geographyGrade11: Subject = {
  id: 'geo',
  title: 'Social Sciences: Geography',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr11-energy-balance-t1',
          title: "The Earth's Energy Balance",
          description: 'Radiation budget, albedo, the greenhouse effect and how latitude controls Africa\'s insolation.',
          component: lazy(() => import('./term1/energy-balance/EnergyBalanceT1')),
        },
        {
          id: 'gr11-pressure-belts-winds-t1',
          title: 'Pressure Belts and Global Winds',
          description: 'Atmospheric circulation cells, pressure belts, trade winds, westerlies, Coriolis effect and monsoons.',
          component: lazy(() => import('./term1/pressure-belts-winds/PressureBeltsWindsT1')),
        },
        {
          id: 'gr11-el-nino-la-nina-t1',
          title: 'El Niño and La Niña',
          description: 'The ENSO cycle, Pacific sea-surface temperature changes and impacts on southern Africa\'s rainfall.',
          component: lazy(() => import('./term1/el-nino-la-nina/ElNinoLaNinaT1')),
        },
        {
          id: 'gr11-africa-climate-gis-t1',
          title: "Africa's Climate and GIS",
          description: "Africa's climate zones, desertification in the Sahel, the Benguela Current and remote sensing.",
          component: lazy(() => import('./term1/africa-climate-gis/AfricaClimateGisT1')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-layered-rocks-karoo-t2',
          title: 'Layered Rocks and Karoo Landscapes',
          description: 'Sedimentary rock formation, the Karoo Supergroup, cuestas and hogbacks.',
          component: lazy(() => import('./term2/layered-rocks-karoo/LayeredRocksKarooT2')),
        },
        {
          id: 'gr11-igneous-landforms-t2',
          title: 'Massive Igneous Landforms',
          description: 'Intrusive bodies (dykes, sills, batholiths), dolerite koppies, inselbergs and South African examples.',
          component: lazy(() => import('./term2/igneous-landforms/IgneousLandformsT2')),
        },
        {
          id: 'gr11-slopes-mass-movement-t2',
          title: 'Slopes and Mass Movement',
          description: 'Slope components, stability factors, types of mass movement and prevention measures.',
          component: lazy(() => import('./term2/slopes-mass-movement/SlopesMassMovementT2')),
        },
        {
          id: 'gr11-geomorphology-mapwork-t2',
          title: 'Geomorphology and Topographic Mapwork',
          description: 'Reading 1:50 000 maps, identifying slope types, drawing cross-sections and locating landforms.',
          component: lazy(() => import('./term2/geomorphology-mapwork/GeomorphologyMapworkT2')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr11-development-indicators-t3',
          title: 'Development Indicators',
          description: 'GDP, HDI and its three components, social indicators and the development gap.',
          component: lazy(() => import('./term3/development-indicators/DevelopmentIndicatorsT3')),
        },
        {
          id: 'gr11-trade-globalisation-t3',
          title: 'Trade and Globalisation',
          description: 'Balance of trade, free trade vs protectionism, TNCs, globalisation and fair trade.',
          component: lazy(() => import('./term3/trade-globalisation/TradeGlobalisationT3')),
        },
        {
          id: 'gr11-aid-gender-development-t3',
          title: 'Aid, Gender and Development',
          description: 'Types of aid, aid dependency, gender equality as a development driver and the SDGs.',
          component: lazy(() => import('./term3/aid-gender-development/AidGenderDevelopmentT3')),
        },
        {
          id: 'gr11-state-business-roles-t3',
          title: 'Roles of State and Business in Development',
          description: "South Africa's NDP, FDI, Public-Private Partnerships and regional bodies (SADC, AU, BRICS).",
          component: lazy(() => import('./term3/state-business-roles/StateBusinessRolesT3')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr11-soil-formation-erosion-t4',
          title: 'Soil Formation and Erosion',
          description: 'Five soil-forming factors, soil horizons, types of erosion and conservation strategies.',
          component: lazy(() => import('./term4/soil-formation-erosion/SoilFormationErosionT4')),
        },
        {
          id: 'gr11-energy-resources-t4',
          title: 'Energy Resources',
          description: "Conventional and renewable energy sources, South Africa's energy mix and the REIPPPP.",
          component: lazy(() => import('./term4/energy-resources/EnergyResourcesT4')),
        },
        {
          id: 'gr11-greener-economies-t4',
          title: 'Greener Economies',
          description: 'Circular economy, carbon footprint, Paris Agreement, carbon tax and GIS in sustainability.',
          component: lazy(() => import('./term4/greener-economies/GreenerEconomiesT4')),
        },
        {
          id: 'gr11-resource-sustainability-t4',
          title: 'Resource Use and Sustainability',
          description: 'Renewable vs non-renewable resources, ecological footprint, Earth Overshoot Day and CBNRM.',
          component: lazy(() => import('./term4/resource-sustainability/ResourceSustainabilityT4')),
        },
      ],
    },
  ],
};
