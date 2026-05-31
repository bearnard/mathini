import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const creativeArtsGrade8: Subject = {
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
          description: 'Elements of art, observational drawing, and 2D composition.',
          component: lazy(() => import('./term1/visual-arts/VisualArts')),
        },
        {
          id: 'music',
          title: 'Music',
          description: 'Beat, rhythm, metre, pitch, dynamics, notation basics, and listening skills.',
          component: lazy(() => import('./term1/music/Music')),
        },
        {
          id: 'drama',
          title: 'Drama',
          description: 'Body warm-up, voice projection, tableaux, improvisation, and character.',
          component: lazy(() => import('./term1/drama/Drama')),
        },
        {
          id: 'dance',
          title: 'Dance',
          description: 'Locomotor and non-locomotor movement, posture, space, time, and safe stretching.',
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
          description: 'Principles of design, pattern, printmaking, collage, and African visual references.',
          component: lazy(() => import('./term2/visual-arts/VisualArts')),
        },
        {
          id: 'music',
          title: 'Music',
          description: 'South African styles, melody, texture, ensemble balance, and call-and-response.',
          component: lazy(() => import('./term2/music/Music')),
        },
        {
          id: 'drama',
          title: 'Drama',
          description: 'Storytelling, script excerpts, improvisation, focus, tension, and audience awareness.',
          component: lazy(() => import('./term2/drama/Drama')),
        },
        {
          id: 'dance',
          title: 'Dance',
          description: 'Motif development, folk or social dance, rhythm, group patterns, and coordination.',
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
          description: 'South African and African art, symbolism, mixed media, and visual literacy.',
          component: lazy(() => import('./term3/visual-arts/VisualArts')),
        },
        {
          id: 'music',
          title: 'Music',
          description: 'Binary and ternary form, composition basics, ostinato, and listening analysis.',
          component: lazy(() => import('./term3/music/Music')),
        },
        {
          id: 'drama',
          title: 'Drama',
          description: 'Characterisation, conflict, staging, scripted dialogue, and rehearsal.',
          component: lazy(() => import('./term3/drama/Drama')),
        },
        {
          id: 'dance',
          title: 'Dance',
          description: 'Space, energy, choreographic devices, cultural dance study, and performance quality.',
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
          description: 'Portfolio selection, exhibition planning, finishing techniques, and reflection.',
          component: lazy(() => import('./term4/visual-arts/VisualArts')),
        },
        {
          id: 'music',
          title: 'Music',
          description: 'Performance revision, genre comparison, aural recall, and stage etiquette.',
          component: lazy(() => import('./term4/music/Music')),
        },
        {
          id: 'drama',
          title: 'Drama',
          description: 'Scripted performance, rehearsal discipline, audience etiquette, and evaluation.',
          component: lazy(() => import('./term4/drama/Drama')),
        },
        {
          id: 'dance',
          title: 'Dance',
          description: 'Final routine, timing, expression, appreciation, and careers awareness.',
          component: lazy(() => import('./term4/dance/Dance')),
        },
      ],
    },
  ],
};
