import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const historyGrade11: Subject = {
  id: 'his',
  title: 'History',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr11-tsarism-1905-revolution-t1',
          title: 'Tsarism and the 1905 Revolution',
          description: 'Autocracy under Nicholas II, Bloody Sunday, the October Manifesto, and the limits of reform.',
          component: lazy(() => import('./term1/tsarism-1905-revolution/TsarismAnd1905Revolution')),
        },
        {
          id: 'gr11-1917-russian-revolution-t1',
          title: 'The 1917 Russian Revolution',
          description: 'World War I, the February Revolution, Lenin, and the Bolshevik seizure of power.',
          component: lazy(() => import('./term1/1917-russian-revolution/The1917RussianRevolution')),
        },
        {
          id: 'gr11-stalins-ussr-t1',
          title: 'Stalin\'s USSR',
          description: 'Collectivisation, industrialisation, famine, the Great Terror, and the Gulag.',
          component: lazy(() => import('./term1/stalins-ussr/StalinsUSSR')),
        },
        {
          id: 'gr11-communist-ideology-t1',
          title: 'Communist Ideology',
          description: 'Marxism, Leninism, state ownership, central planning, and communist propaganda.',
          component: lazy(() => import('./term1/communist-ideology/CommunistIdeology')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-roaring-twenties-t2',
          title: 'The Roaring Twenties',
          description: 'Mass production, consumer culture, social change, and the inequalities beneath prosperity.',
          component: lazy(() => import('./term2/roaring-twenties/RoaringTwenties')),
        },
        {
          id: 'gr11-wall-street-crash-t2',
          title: 'The Wall Street Crash and Great Depression',
          description: 'Speculation, bank failures, unemployment, Hoovervilles, and the global spread of the Depression.',
          component: lazy(() => import('./term2/wall-street-crash/WallStreetCrash')),
        },
        {
          id: 'gr11-new-deal-t2',
          title: 'Roosevelt\'s New Deal',
          description: 'The three Rs, key programmes, criticisms, and the legacy of state intervention.',
          component: lazy(() => import('./term2/new-deal/NewDeal')),
        },
        {
          id: 'gr11-capitalism-vs-communism-t2',
          title: 'Capitalism versus Communism',
          description: 'Comparing private ownership, planning, ideology, and the USA-USSR debate in the 1930s.',
          component: lazy(() => import('./term2/capitalism-vs-communism/CapitalismVsCommunism')),
        },
        {
          id: 'gr11-australia-colonisation-race-theories-t2',
          title: "Australia: Colonisation and Race Theories",
          description: "Colonisation, race theories, the White Australia policy and children sent from Britain.",
          component: lazy(() => import('./term2/australia-colonisation-race-theories/AustraliaColonisationRaceTheories')),
        },
        {
          id: 'gr11-stolen-generations-t2',
          title: "The Stolen Generations",
          description: "Assimilation, Cook and Neville, the removals, Bringing Them Home and the apology.",
          component: lazy(() => import('./term2/stolen-generations/StolenGenerations')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr11-scientific-racism-t3',
          title: 'Scientific Racism',
          description: 'Racial classification, Social Darwinism, eugenics, and how pseudo-science justified oppression.',
          component: lazy(() => import('./term3/scientific-racism/ScientificRacism')),
        },
        {
          id: 'gr11-nazism-and-race-t3',
          title: 'Nazism and Race',
          description: 'Aryan supremacy, anti-Semitism, the Holocaust, and the origins of modern human rights law.',
          component: lazy(() => import('./term3/nazism-and-race/NazismAndRace')),
        },
        {
          id: 'gr11-segregation-and-apartheid-t3',
          title: 'Segregation and Apartheid',
          description: 'Jim Crow, apartheid legislation, and a comparison of racist systems in the USA and South Africa.',
          component: lazy(() => import('./term3/segregation-and-apartheid/SegregationAndApartheid')),
        },
        {
          id: 'gr11-resistance-to-racism-t3',
          title: 'Resistance to Racism',
          description: 'Civil rights, anti-apartheid struggle, international solidarity, and the defeat of racist systems.',
          component: lazy(() => import('./term3/resistance-to-racism/ResistanceToRacism')),
        },
        {
          id: 'gr11-afrikaner-nationalism-rise-t3',
          title: "The Rise of Afrikaner Nationalism",
          description: "Background, the language movement, cultural organisations and economic upliftment.",
          component: lazy(() => import('./term3/afrikaner-nationalism-rise/AfrikanerNationalismRise')),
        },
        {
          id: 'gr11-afrikaner-nationalism-volk-power-t3',
          title: "Defining the Volk and the Power of Nationalism",
          description: "Who belonged to the Volk, class, education, labour, religion, 1948 and how historians explain it.",
          component: lazy(() => import('./term3/afrikaner-nationalism-volk-power/AfrikanerNationalismVolkPower')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr11-african-nationalism-t4',
          title: 'African Nationalism',
          description: 'The meaning of nationalism, the ANC, Pan-Africanism, and the growth of independence movements.',
          component: lazy(() => import('./term4/african-nationalism/AfricanNationalism')),
        },
        {
          id: 'gr11-decolonisation-africa-t4',
          title: 'Decolonisation in Africa',
          description: 'Post-war independence, Ghana, Kenya, Algeria, the Year of Africa, and colonial legacies.',
          component: lazy(() => import('./term4/decolonisation-africa/DecolonisationAfrica')),
        },
        {
          id: 'gr11-zionism-arab-nationalism-t4',
          title: 'Zionism and Arab Nationalism',
          description: 'Competing claims to Palestine, the 1948 war, and the Palestinian refugee crisis.',
          component: lazy(() => import('./term4/zionism-arab-nationalism/ZionismArabNationalism')),
        },
        {
          id: 'gr11-liberation-movements-t4',
          title: 'Liberation Movements',
          description: 'The ANC, MK, regional liberation struggles, and the challenges of nation-building.',
          component: lazy(() => import('./term4/liberation-movements/LiberationMovements')),
        },
      ],
    },
  ],
};
