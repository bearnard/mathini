import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const creativeArtsGrade7: Subject = {
  id: 'ca',
  title: 'Creative Arts',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr7-creative-arts-t1',
          title: 'Creative Arts',
          description: 'Observational drawing, texture, rhythm patterns, and improvisation.',
          component: lazy(() => import('./term1/creative-arts/CreativeArtsT1')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr7-creative-arts-t2',
          title: 'Creative Arts',
          description: 'Poster design, characterisation, song structure, and movement motifs.',
          component: lazy(() => import('./term2/creative-arts/CreativeArtsT2')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr7-creative-arts-t3',
          title: 'Creative Arts',
          description: 'South African heritage, mixed media, choreography, and evaluation.',
          component: lazy(() => import('./term3/creative-arts/CreativeArtsT3')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr7-creative-arts-t4',
          title: 'Creative Arts',
          description: 'Portfolio curation, rehearsal discipline, showcase, and self-evaluation.',
          component: lazy(() => import('./term4/creative-arts/CreativeArtsT4')),
        },
      ],
    },
  ],
};
