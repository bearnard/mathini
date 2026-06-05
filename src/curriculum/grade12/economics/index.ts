import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const economicsGrade12: Subject = {
  id: 'economics',
  title: 'Economics',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr12-circular-flow-multiplier-t1',
          title: "Circular Flow and the Multiplier",
          description: "Open-economy circular flow, leakages and injections, equilibrium income and the multiplier in the South African context.",
          component: lazy(() => import('./term1/circular-flow-multiplier/CircularFlowMultiplier')),
        },
        {
          id: 'gr12-business-cycles-t1',
          title: "Business Cycles",
          description: "Business-cycle phases, features, indicators and policy responses used to stabilise the economy.",
          component: lazy(() => import('./term1/business-cycles/BusinessCycles')),
        },
        {
          id: 'gr12-public-sector-t1',
          title: "The Public Sector",
          description: "Roles of the public sector, budgeting, taxation and common forms of public-sector failure in Economics CAPS.",
          component: lazy(() => import('./term1/public-sector/PublicSector')),
        },
        {
          id: 'gr12-foreign-exchange-balance-of-payments-t1',
          title: "Foreign Exchange and the Balance of Payments",
          description: "Foreign exchange markets, exchange-rate changes and the balance of payments in the South African economy.",
          component: lazy(() => import('./term1/foreign-exchange-balance-of-payments/ForeignExchangeBalanceOfPayments')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr12-trade-policy-protectionism-t2',
          title: "Trade Policy and Protectionism",
          description: "Trade policy choices, protectionist tools and their effects on producers, consumers and growth.",
          component: lazy(() => import('./term2/trade-policy-protectionism/TradePolicyProtectionism')),
        },
        {
          id: 'gr12-perfect-markets-t2',
          title: "Perfect Markets",
          description: "Features of perfect competition, firm equilibrium and efficiency outcomes in perfectly competitive markets.",
          component: lazy(() => import('./term2/perfect-markets/PerfectMarkets')),
        },
        {
          id: 'gr12-imperfect-markets-t2',
          title: "Imperfect Markets",
          description: "Imperfect-market structures, market power, barriers to entry and strategic behaviour.",
          component: lazy(() => import('./term2/imperfect-markets/ImperfectMarkets')),
        },
        {
          id: 'gr12-market-failure-cost-benefit-analysis-t2',
          title: "Market Failure and Cost-Benefit Analysis",
          description: "Market failure, externalities, public goods, merit goods and the use of cost-benefit analysis.",
          component: lazy(() => import('./term2/market-failure-cost-benefit-analysis/MarketFailureCostBenefitAnalysis')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr12-growth-development-industrial-policy-t3',
          title: "Growth, Development and Industrial Policy",
          description: "Economic growth, development, industrial policy, beneficiation and structural transformation.",
          component: lazy(() => import('./term3/growth-development-industrial-policy/GrowthDevelopmentIndustrialPolicy')),
        },
        {
          id: 'gr12-economic-indicators-inflation-t3',
          title: "Economic Indicators and Inflation",
          description: "Key economic indicators, inflation types, causes, effects and anti-inflation policy.",
          component: lazy(() => import('./term3/economic-indicators-inflation/EconomicIndicatorsInflation')),
        },
        {
          id: 'gr12-tourism-environmental-sustainability-t3',
          title: "Tourism and Environmental Sustainability",
          description: "Tourism, multipliers, leakages, sustainability and environmental management in the South African economy.",
          component: lazy(() => import('./term3/tourism-environmental-sustainability/TourismEnvironmentalSustainability')),
        },
        {
          id: 'gr12-contemporary-economic-issues-t3',
          title: "Contemporary Economic Issues",
          description: "Current South African economic issues such as unemployment, energy constraints, inequality and inclusive policy responses.",
          component: lazy(() => import('./term3/contemporary-economic-issues/ContemporaryEconomicIssues')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr12-macroeconomics-revision-t4',
          title: "Macroeconomics Revision",
          description: "Revision of Grade 12 macroeconomics topics with an exam focus on definitions, data response and policy evaluation.",
          component: lazy(() => import('./term4/macroeconomics-revision/MacroeconomicsRevision')),
        },
        {
          id: 'gr12-microeconomics-revision-t4',
          title: "Microeconomics Revision",
          description: "Revision of Grade 12 microeconomics with a focus on trade policy, market structures and government intervention.",
          component: lazy(() => import('./term4/microeconomics-revision/MicroeconomicsRevision')),
        },
        {
          id: 'gr12-economic-pursuits-contemporary-revision-t4',
          title: "Economic Pursuits and Contemporary Issues Revision",
          description: "Final revision across growth and development, industrial policy, inflation, tourism and contemporary South African issues.",
          component: lazy(() => import('./term4/economic-pursuits-contemporary-revision/EconomicPursuitsContemporaryRevision')),
        },
      ],
    },
  ],
};
