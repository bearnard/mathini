import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const technologyGrade7: Subject = {
  id: 'tech',
  title: 'Technology',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'mechanical-systems-and-control',
          title: 'Mechanical Systems and Control',
          description: 'Levers, gears, pulleys, linkages, and systems thinking.',
          component: lazy(
            () => import('./term1/mechanical-systems-and-control/MechanicalSystemsAndControl'),
          ),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'design-process-and-structures',
          title: 'Design Process and Structures',
          description: 'IDMEC, structures, forces, and stability in engineering solutions.',
          component: lazy(() => import('./term2/design-process-and-structures/DesignProcessAndStructures')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'electrical-systems-and-control',
          title: 'Electrical Systems and Control',
          description: 'Series and parallel circuits, control systems, and electrical safety.',
          component: lazy(
            () => import('./term3/electrical-systems-and-control/ElectricalSystemsAndControl'),
          ),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'processing-materials-and-properties',
          title: 'Processing Materials and Properties',
          description: 'Material selection, processing, joining, and sustainability decisions.',
          component: lazy(
            () =>
              import('./term4/processing-materials-and-properties/ProcessingMaterialsAndProperties'),
          ),
        },
      ],
    },
  ],
};
