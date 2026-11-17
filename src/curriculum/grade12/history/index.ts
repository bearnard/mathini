import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const historyGrade12: Subject = {
  id: 'his',
  title: 'History',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr12-black-consciousness-movement-t1',
          title: "Black Consciousness Movement",
          description: "Steve Biko, Black Consciousness, student activism, and the rebuilding of internal resistance.",
          component: lazy(() => import('./term1/black-consciousness-movement/BlackConsciousnessMovement')),
        },
        {
          id: 'gr12-soweto-uprising-t1',
          title: "Soweto Uprising",
          description: "Causes, events, and consequences of the Soweto Uprising and its national impact.",
          component: lazy(() => import('./term1/soweto-uprising/SowetoUprising')),
        },
        {
          id: 'gr12-trade-unions-and-the-udf-t1',
          title: "Trade Unions and the UDF",
          description: "Durban strikes, independent unions, UDF politics, and the rise of broad internal resistance.",
          component: lazy(() => import('./term1/trade-unions-and-the-udf/TradeUnionsAndTheUDF')),
        },
        {
          id: 'gr12-independence-in-congo-and-tanzania-t1',
          title: "Independence in Congo and Tanzania",
          description: "The Congo Crisis, Tanzanian independence, Nyerere, and the problems facing new African states.",
          component: lazy(() => import('./term1/independence-in-congo-and-tanzania/IndependenceInCongoAndTanzania')),
        },
        {
          id: 'gr12-cold-war-origins-t1',
          title: 'The Origins of the Cold War',
          description: 'Superpowers and spheres of influence, containment, Berlin, NATO and the Warsaw Pact, the Cuban Crisis and who was to blame.',
          component: lazy(() => import('./term1/cold-war-origins/ColdWarOrigins')),
        },
        {
          id: 'gr12-cold-war-china-t1',
          title: 'Case Study: China after 1949',
          description: 'The Sino-Soviet split, the Cultural Revolution, China and its neighbours, a superpower? and new links with the USA.',
          component: lazy(() => import('./term1/cold-war-china/ColdWarChina')),
        },
        {
          id: 'gr12-cold-war-vietnam-t1',
          title: 'Case Study: Vietnam 1954 to 1975',
          description: 'Division, the three phases of the war, American and Vietnamese perspectives, withdrawal and how the war is remembered.',
          component: lazy(() => import('./term1/cold-war-vietnam/ColdWarVietnam')),
        },
        {
          id: 'gr12-cold-war-angola-t1',
          title: 'Africa in the Cold War: Angola',
          description: 'Competing influence, the civil war and outside powers, the competing accounts of Cuito Cuanavale, and the settlement after 1989.',
          component: lazy(() => import('./term1/cold-war-angola/ColdWarAngola')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr12-tricameral-parliament-and-pw-botha-reforms-t2',
          title: "Tricameral Parliament and P.W. Botha Reforms",
          description: "The 1983 constitution, total strategy, and why Botha’s reforms deepened resistance.",
          component: lazy(() => import('./term2/tricameral-parliament-and-pw-botha-reforms/TricameralParliamentAndPWBothaReforms')),
        },
        {
          id: 'gr12-mass-democratic-movement-and-cosatu-t2',
          title: "Mass Democratic Movement and COSATU",
          description: "How unions, civics, youth, and churches built the Mass Democratic Movement in the 1980s.",
          component: lazy(() => import('./term2/mass-democratic-movement-and-cosatu/MassDemocraticMovementAndCosatu')),
        },
        {
          id: 'gr12-repression-and-states-of-emergency-t2',
          title: "Repression and States of Emergency",
          description: "How the apartheid state used emergency powers and why repression failed to end resistance.",
          component: lazy(() => import('./term2/repression-and-states-of-emergency/RepressionAndStatesOfEmergency')),
        },
        {
          id: 'gr12-sanctions-disinvestment-and-the-road-to-negotiations-t2',
          title: "Sanctions, Disinvestment, and the Road to Negotiations",
          description: "How sanctions, boycotts, and disinvestment combined with internal struggle to push South Africa toward talks.",
          component: lazy(() => import('./term2/sanctions-disinvestment-and-the-road-to-negotiations/SanctionsDisinvestmentAndTheRoadToNegotiations')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr12-de-klerk-reforms-and-unbanning-t3',
          title: "De Klerk Reforms and Unbanning",
          description: "F.W. de Klerk, the end of key bans, Mandela’s release, and why change became unavoidable.",
          component: lazy(() => import('./term3/de-klerk-reforms-and-unbanning/DeKlerkReformsAndUnbanning')),
        },
        {
          id: 'gr12-codesa-and-negotiated-settlement-t3',
          title: "CODESA and the Negotiated Settlement",
          description: "CODESA, the interim constitution, and the compromises that produced a democratic settlement.",
          component: lazy(() => import('./term3/codesa-and-negotiated-settlement/CodesaAndNegotiatedSettlement')),
        },
        {
          id: 'gr12-political-violence-and-transition-t3',
          title: "Political Violence and Transition",
          description: "Violence in the early 1990s, the “third force”, and why the transition nearly collapsed.",
          component: lazy(() => import('./term3/political-violence-and-transition/PoliticalViolenceAndTransition')),
        },
        {
          id: 'gr12-1994-election-and-the-trc-t3',
          title: "1994 Election and the TRC",
          description: "The first democratic election, Government of National Unity, and the work of the Truth and Reconciliation Commission.",
          component: lazy(() => import('./term3/1994-election-and-the-trc/The1994ElectionAndTheTRC')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr12-source-based-and-essay-skills-t4',
          title: "Source-based and Essay Skills",
          description: "Exam technique for source analysis, reliability, bias, chronology, and essay writing in Grade 12 History.",
          component: lazy(() => import('./term4/source-based-and-essay-skills/SourceBasedAndEssaySkills')),
        },
        {
          id: 'gr12-resistance-and-apartheid-crisis-revision-t4',
          title: "Resistance and Apartheid Crisis Revision",
          description: "Integrated revision of internal resistance and the 1980s crisis of apartheid.",
          component: lazy(() => import('./term4/resistance-and-apartheid-crisis-revision/ResistanceAndApartheidCrisisRevision')),
        },
        {
          id: 'gr12-democracy-and-cold-war-revision-t4',
          title: "Democracy and Cold War Revision",
          description: "Integrated revision of Congo, Tanzania, the end of the Cold War, negotiations, 1994, and the TRC.",
          component: lazy(() => import('./term4/democracy-and-cold-war-revision/DemocracyAndColdWarRevision')),
        },
      ],
    },
  ],
};
