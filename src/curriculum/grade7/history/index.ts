import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const historyGrade7: Subject = {
  id: 'his',
  title: 'History',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'mali-and-timbuktu-in-the-fourteenth-century',
          title: 'Mali and Timbuktu in the Fourteenth Century',
          description: 'Trans-Saharan trade, Mansa Musa, Timbuktu, and centres of Islamic learning.',
          component: lazy(
            () =>
              import(
                './term1/mali-and-timbuktu-in-the-fourteenth-century/MaliAndTimbuktuInTheFourteenthCentury'
              ),
          ),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'transatlantic-slave-trade',
          title: 'The Transatlantic Slave Trade',
          description: 'Causes, middle passage, resistance, abolition, and Atlantic world impacts.',
          component: lazy(() => import('./term2/transatlantic-slave-trade/TransatlanticSlaveTrade')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'colonisation-of-the-cape',
          title: 'Colonisation of the Cape',
          description: 'VOC settlement, slavery, free burghers, trekboers, and land dispossession.',
          component: lazy(() => import('./term3/colonisation-of-the-cape/ColonisationOfTheCape')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'conflict-and-cooperation-on-the-cape-frontiers',
          title: 'Conflict and Cooperation on the Cape Frontiers',
          description: 'Frontier wars, resistance, abolition, migration, and frontier trade networks.',
          component: lazy(
            () =>
              import(
                './term4/conflict-and-cooperation-on-the-cape-frontiers/ConflictAndCooperationOnTheCapeFrontiers'
              ),
          ),
        },
      ],
    },
  ],
};
