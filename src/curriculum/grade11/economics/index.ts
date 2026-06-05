import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const economicsGrade11: Subject = {
  id: 'economics',
  title: 'Economics',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr11-factors-of-production-t1',
          title: 'Factors of Production and Remuneration',
          description: 'The four factors (land, labour, capital, entrepreneurship), their mobility and remuneration forms (rent, wages, interest, profit) in the SA context.',
          component: lazy(() => import('./term1/factors-of-production/FactorsOfProduction')),
        },
        {
          id: 'gr11-gdp-gni-t1',
          title: 'GDP, GNI and Gross Value Added',
          description: 'Three approaches to measuring GDP, the distinction between GDP and GNI, nominal vs real GDP, and GDP per capita calculations.',
          component: lazy(() => import('./term1/gdp-gni/GdpGni')),
        },
        {
          id: 'gr11-mixed-economy-t1',
          title: "South Africa's Mixed Economy",
          description: "Features of SA's mixed economy, public and private sector roles, public/merit/demerit goods and the four-sector economic structure.",
          component: lazy(() => import('./term1/mixed-economy/MixedEconomy')),
        },
        {
          id: 'gr11-infrastructure-exclusion-t1',
          title: 'Infrastructure and Economic Exclusion',
          description: 'Types of infrastructure, the link between infrastructure and development, apartheid spatial exclusion and post-1994 policy responses.',
          component: lazy(() => import('./term1/infrastructure-exclusion/InfrastructureExclusion')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-price-elasticity-t2',
          title: 'Price Elasticity of Demand and Supply',
          description: 'PED and PES formulas, elastic/inelastic/unit elastic interpretation, factors affecting elasticity, the total revenue test and taxation policy applications.',
          component: lazy(() => import('./term2/price-elasticity/PriceElasticity')),
        },
        {
          id: 'gr11-income-cross-elasticity-t2',
          title: 'Income and Cross Elasticity of Demand',
          description: 'YED for normal, inferior and luxury goods; XED for substitutes and complements; formula calculations and SA consumer behaviour applications.',
          component: lazy(() => import('./term2/income-cross-elasticity/IncomeCrossElasticity')),
        },
        {
          id: 'gr11-market-structures-t2',
          title: 'Market Structures, Costs and Revenue',
          description: 'Perfect competition, monopolistic competition, oligopoly and monopoly; fixed/variable/marginal costs; TR, AR, MR; profit maximisation at MC = MR.',
          component: lazy(() => import('./term2/market-structures/MarketStructures')),
        },
        {
          id: 'gr11-gini-redistribution-t2',
          title: 'Gini Coefficient and Income Redistribution',
          description: "Lorenz curve, Gini coefficient calculation and interpretation, SA's extreme inequality context, and evaluation of redistribution policies.",
          component: lazy(() => import('./term2/gini-redistribution/GiniRedistribution')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr11-developing-economies-poverty-t3',
          title: 'Developing Economies and Poverty',
          description: 'Developing vs developed economy characteristics, absolute and relative poverty, HDI, poverty cycle, causes and effects in SA, and government interventions.',
          component: lazy(() => import('./term3/developing-economies-poverty/DevelopingEconomiesPoverty')),
        },
        {
          id: 'gr11-money-banking-t3',
          title: 'Money, Banking and the Central Bank',
          description: 'Functions of money, commercial banks and credit creation, SARB functions, the repo rate and how monetary policy controls inflation.',
          component: lazy(() => import('./term3/money-banking/MoneyBanking')),
        },
        {
          id: 'gr11-micro-lending-t3',
          title: 'Micro-lending and Financial Inclusion',
          description: 'Micro-lending definition, SEFA, Grameen Bank group lending, stokvels, the National Credit Act, over-indebtedness and evaluation as a poverty tool.',
          component: lazy(() => import('./term3/micro-lending/MicroLending')),
        },
        {
          id: 'gr11-south-africa-africa-t3',
          title: 'South Africa in Africa: SADC and NEPAD',
          description: "SA's economic role in Africa, SADC objectives and achievements, NEPAD principles and APRM, the African Union, BRICS and regional integration evaluation.",
          component: lazy(() => import('./term3/south-africa-africa/SouthAfricaAfrica')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr11-globalisation-north-south-t4',
          title: 'Globalisation and the North-South Divide',
          description: 'Globalisation features, WTO/BRICS/AGOA trade frameworks, advantages and disadvantages for developing countries, and the North-South development gap.',
          component: lazy(() => import('./term4/globalisation/Globalisation')),
        },
        {
          id: 'gr11-environmental-sustainability-t4',
          title: 'Environmental Deterioration and Sustainability',
          description: 'Negative externalities, market failure, climate change impacts on SA, Brundtland sustainable development, carbon tax, Paris Agreement and Kyoto Protocol.',
          component: lazy(() => import('./term4/environmental-sustainability/EnvironmentalSustainability')),
        },
        {
          id: 'gr11-current-economic-issues-t4',
          title: 'Current Economic Issues and Quantitative Skills',
          description: "SA's unemployment, load-shedding, inflation and exchange rate challenges; index numbers, nominal vs real values, GDP per capita, and structured exam technique.",
          component: lazy(() => import('./term4/current-economic-issues/CurrentEconomicIssues')),
        },
        {
          id: 'gr11-exam-revision-t4',
          title: 'Year-end Examination Revision',
          description: 'Consolidated revision of all Grade 11 Economics topics across Terms 1–4 with exam paper format guidance for Papers 1 and 2.',
          component: lazy(() => import('./term4/exam-revision/ExamRevision')),
        },
      ],
    },
  ],
};
