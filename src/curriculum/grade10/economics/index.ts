import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const economicsGrade10: Subject = {
  id: 'economics',
  title: 'Economics',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr10-economics-basics-scarcity-macroeconomic-flows',
          title: 'Economics Basics, Scarcity and Macroeconomic Flows',
          description: 'Cover economics as discipline, scarcity, opportunity cost, production, consumption, exchange, circular flow, GDP/GNI, business cycles.',
          component: lazy(() => import('./term1/economics-basics-scarcity-macroeconomic-flows/EconomicsBasicsScarcity')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr10-markets-production-possibilities-public-sector-intervention',
          title: 'Markets, Production Possibilities and Public-sector Intervention',
          description: 'Cover demand and supply, price formation, perfect/imperfect markets, production possibility curve, efficiency, taxes, subsidies, minimum wages.',
          component: lazy(() => import('./term2/markets-production-possibilities-public-sector-intervention/MarketsProductionPossibilities')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr10-growth-development-south-african-economic-change',
          title: 'Growth, Development and South African Economic Change',
          description: 'Cover globalisation, historical development, agriculture, mining, services, money and banking history, population, labour force, HIV/AIDS.',
          component: lazy(() => import('./term3/growth-development-south-african-economic-change/GrowthDevelopmentSouthAfricanEconomic')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr10-current-south-african-economic-issues',
          title: 'Current South African Economic Issues',
          description: 'Cover unemployment, labour relations, Labour Relations Act, economic redress, BEE, entrepreneurship support, quantitative economics.',
          component: lazy(() => import('./term4/current-south-african-economic-issues/CurrentSouthAfricanEconomicIssues')),
        },
      ],
    },
  ],
};
