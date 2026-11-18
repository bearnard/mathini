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
        {
          id: 'britain-workers-and-protest',
          title: "Workers and Protest in Industrial Britain",
          description: "Town life, child labour, the Luddites, the Swing Riots and the first big trade union.",
          component: lazy(() => import('./term1/britain-workers-and-protest/BritainWorkersAndProtest')),
        },
        {
          id: 'southern-africa-1860-indentured-labour',
          title: "Southern Africa by 1860 and Indentured Labour",
          description: "Who ruled where, sugar in Natal, and workers brought from India.",
          component: lazy(() => import('./term1/southern-africa-1860-indentured-labour/SouthernAfrica1860IndenturedLabour')),
        },
        {
          id: 'kimberley-diamonds-and-monopoly',
          title: "Diamond Mining in Kimberley",
          description: "Why diamonds matter, the claims, black claimholders and the rise of De Beers.",
          component: lazy(() => import('./term1/kimberley-diamonds-and-monopoly/KimberleyDiamondsAndMonopoly')),
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
        {
          id: 'labour-control-and-land',
          title: "Controlling Workers and Taking Land",
          description: "Closed compounds, migrant labour, and the defeat of the Xhosa, the Pedi and the Zulu.",
          component: lazy(() => import('./term2/labour-control-and-land/LabourControlAndLand')),
        },
        {
          id: 'gold-randlords-and-miners',
          title: "Gold on the Witwatersrand",
          description: "Deep mining, the Randlords, the Chamber of Mines and the workers.",
          component: lazy(() => import('./term2/gold-randlords-and-miners/GoldRandlordsAndMiners')),
        },
        {
          id: 'mineral-revolution-turning-point',
          title: "The Mineral Revolution as a Turning Point",
          description: "War, new organisations, Union, the Land Act and a changed map.",
          component: lazy(() => import('./term2/mineral-revolution-turning-point/MineralRevolutionTurningPoint')),
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
        {
          id: 'ashanti-kingdom-and-the-gold-coast',
          title: "The Ashanti Kingdom and the Gold Coast",
          description: "The coast before the Europeans, early contact, British colonisation and its results.",
          component: lazy(() => import('./term3/ashanti-kingdom-and-the-gold-coast/AshantiKingdomAndTheGoldCoast')),
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
        {
          id: 'britain-home-front-world-war-i',
          title: "Britain at Home in World War I",
          description: "Conscription, propaganda, conscientious objectors, music and poetry, and women.",
          component: lazy(() => import('./term4/britain-home-front-world-war-i/BritainHomeFrontWorldWarI')),
        },
      ],
    },
  ],
};
