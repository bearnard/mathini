import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const historyGrade9: Subject = {
  id: 'his',
  title: 'History (Social Sciences)',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr9-rise-of-hitler-t1',
          title: 'Rise of Hitler and Nazism',
          description: 'The Weimar Republic, Hitler\'s rise to power, Nazi ideology, and establishment of fascism',
          component: lazy(() => import('./term1/rise-of-hitler/RiseOfHitler')),
        },
        {
          id: 'gr9-holocaust-genocide-t1',
          title: 'The Holocaust and Genocide',
          description: 'Systematic persecution, death camps, and the imperative to remember and prevent atrocity',
          component: lazy(() => import('./term1/holocaust-genocide/HolocaustGenocide')),
        },
        {
          id: 'gr9-world-war-2-allies-axis-t1',
          title: 'World War II: Allies and Axis',
          description: 'Global conflict: Europe, Pacific, and the path to victory; scale and consequences',
          component: lazy(() => import('./term1/world-war-2-allies-axis/WorldWar2AlliesAxis')),
        },
        {
          id: 'gr9-resistance-to-nazism-t1',
          title: 'Resistance to Nazism',
          description: 'Opposition from within Germany and occupied territories; courage under tyranny',
          component: lazy(() => import('./term1/resistance-to-nazism/ResistanceToNazism')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr9-atomic-age-nuclear-power-t2',
          title: 'The Atomic Age and Nuclear Power',
          description: 'Nuclear weapons, arms race, deterrence doctrine, and living with atomic anxiety',
          component: lazy(() => import('./term2/atomic-age-nuclear-power/AtomicAgeNuclearPower')),
        },
        {
          id: 'gr9-usa-ussr-superpowers-t2',
          title: 'USA vs Soviet Union: Superpowers',
          description: 'Ideological confrontation, NATO, Warsaw Pact, and proxy wars across the globe',
          component: lazy(() => import('./term2/usa-ussr-superpowers/USASovietSuperpowers')),
        },
        {
          id: 'gr9-space-race-berlin-wall-t2',
          title: 'Space Race and Berlin Wall',
          description: 'Competition in space, divided Berlin, and symbols of Cold War division',
          component: lazy(() => import('./term2/space-race-berlin-wall/SpaceRaceBerlinWall')),
        },
        {
          id: 'gr9-end-of-cold-war-t2',
          title: 'End of the Cold War',
          description: 'Gorbachev\'s reforms, collapse of communism, and transition to new world order',
          component: lazy(() => import('./term2/end-of-cold-war/EndOfColdWar')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr9-apartheid-system-1948-t3',
          title: 'The Apartheid System 1948',
          description: 'Institutionalized racism, pass laws, forced segregation, and dehumanization',
          component: lazy(() => import('./term3/apartheid-system-1948/ApartheidSystem1948')),
        },
        {
          id: 'gr9-sophiatown-bantustans-t3',
          title: 'Sophiatown and Bantustans',
          description: 'Forced removals, territorial control, and community resistance to displacement',
          component: lazy(() => import('./term3/sophiatown-bantustans/SophiatownBantustans')),
        },
        {
          id: 'gr9-defiance-campaign-freedom-charter-t3',
          title: 'Defiance Campaign and Freedom Charter',
          description: 'Civil disobedience, vision of freedom, and anti-apartheid leadership',
          component: lazy(() => import('./term3/defiance-campaign-freedom-charter/DefianceCampaignFreedomCharter')),
        },
        {
          id: 'gr9-womens-march-resistance-t3',
          title: 'Women\'s March and Resistance',
          description: 'Multi-racial solidarity, women\'s leadership, and continuing struggle',
          component: lazy(() => import('./term3/womens-march-resistance/WomensMarchResistance')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr9-sharpeville-1960-t4',
          title: 'Sharpeville 1960',
          description: 'Massacre, state repression, international sanctions, and turn to armed struggle',
          component: lazy(() => import('./term4/sharpeville-1960/Sharpeville1960')),
        },
        {
          id: 'gr9-soweto-uprising-1976-t4',
          title: 'Soweto Uprising 1976',
          description: 'Youth resistance, school boycotts, and nationwide uprisings',
          component: lazy(() => import('./term4/soweto-uprising-1976/SowetoUprisings1976')),
        },
        {
          id: 'gr9-mandela-release-unbanning-t4',
          title: 'Mandela\'s Release and Unbanning',
          description: 'Freedom after 27 years, reconciliation, and beginning of negotiations',
          component: lazy(() => import('./term4/mandela-release-unbanning/MandelaReleaseUnbanning')),
        },
        {
          id: 'gr9-negotiations-1994-election-t4',
          title: 'Negotiations and 1994 Election',
          description: 'Constitution, Freedom Day, and Truth and Reconciliation Commission',
          component: lazy(() => import('./term4/negotiations-1994-election/Negotiations1994Election')),
        },
      ],
    },
  ],
};
