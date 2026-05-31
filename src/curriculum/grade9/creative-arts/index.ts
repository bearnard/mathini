import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const creativeArtsGrade9: Subject = {
  id: 'ca',
  title: 'Creative Arts',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'visual-arts',
          title: 'Visual Arts',
          description: 'Advanced drawing, perspective, proportion, shading, and 2D/3D composition.',
          component: lazy(() => import('./term1/visual-arts/VisualArts')),
        },
        {
          id: 'music',
          title: 'Music',
          description: 'Improvisation, scales, phrasing, ensemble accuracy, and notation review.',
          component: lazy(() => import('./term1/music/Music')),
        },
        {
          id: 'drama',
          title: 'Drama',
          description: 'Devised drama, role, mood, conflict, stage space, and physical theatre.',
          component: lazy(() => import('./term1/drama/Drama')),
        },
        {
          id: 'dance',
          title: 'Dance',
          description: 'Technique, alignment, travelling steps, dynamics, and safe conditioning.',
          component: lazy(() => import('./term1/dance/Dance')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'visual-arts',
          title: 'Visual Arts',
          description: 'Design process, research, South African artists, print and craft techniques.',
          component: lazy(() => import('./term2/visual-arts/VisualArts')),
        },
        {
          id: 'music',
          title: 'Music',
          description: 'African and world music, listening analysis, harmony, texture, and ensemble work.',
          component: lazy(() => import('./term2/music/Music')),
        },
        {
          id: 'drama',
          title: 'Drama',
          description: 'South African theatre, script interpretation, voice, gesture, and stage directions.',
          component: lazy(() => import('./term2/drama/Drama')),
        },
        {
          id: 'dance',
          title: 'Dance',
          description: 'Social and cultural dance, choreographic intent, canon, repetition, and formation.',
          component: lazy(() => import('./term2/dance/Dance')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'visual-arts',
          title: 'Visual Arts',
          description: 'Identity and environment themes, mixed media, symbolism, and critique.',
          component: lazy(() => import('./term3/visual-arts/VisualArts')),
        },
        {
          id: 'music',
          title: 'Music',
          description: 'Musical form, arrangement, composition, technology awareness, and rehearsal practice.',
          component: lazy(() => import('./term3/music/Music')),
        },
        {
          id: 'drama',
          title: 'Drama',
          description: 'Script writing, character motivation, rehearsal process, and collaboration.',
          component: lazy(() => import('./term3/drama/Drama')),
        },
        {
          id: 'dance',
          title: 'Dance',
          description: 'Group choreography, transitions, expressive intent, and evaluation.',
          component: lazy(() => import('./term3/dance/Dance')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'visual-arts',
          title: 'Visual Arts',
          description: 'Portfolio moderation, exhibition curation, presentation, and arts careers.',
          component: lazy(() => import('./term4/visual-arts/VisualArts')),
        },
        {
          id: 'music',
          title: 'Music',
          description: 'Performance showcase, aural revision, score reading, and music careers.',
          component: lazy(() => import('./term4/music/Music')),
        },
        {
          id: 'drama',
          title: 'Drama',
          description: 'Final production, technical theatre, reflection, and evaluation.',
          component: lazy(() => import('./term4/drama/Drama')),
        },
        {
          id: 'dance',
          title: 'Dance',
          description: 'Final choreography, appreciation, refinement, and community performance.',
          component: lazy(() => import('./term4/dance/Dance')),
        },
      ],
    },
  ],
};
