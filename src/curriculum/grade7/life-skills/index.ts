import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const lifeSkillsGrade7: Subject = {
  id: 'lsk',
  title: 'Life Skills',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr7-personal-social-wellbeing-t1',
          title: 'Personal and Social Well-being',
          description: 'Self-concept, values, puberty, emotions, and responsible choices.',
          component: lazy(() => import('./term1/personal-social-wellbeing/PersonalSocialWellbeingT1')),
        },
        {
          id: 'gr7-physical-education-t1',
          title: 'Physical Education',
          description: 'Fitness baselines, movement patterns, coordination, and safe warm-ups.',
          component: lazy(() => import('./term1/physical-education/PhysicalEducationT1')),
        },
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
          id: 'gr7-personal-social-wellbeing-t2',
          title: 'Personal and Social Well-being',
          description: 'Peer influence, empathy, substance abuse prevention, and online safety.',
          component: lazy(() => import('./term2/personal-social-wellbeing/PersonalSocialWellbeingT2')),
        },
        {
          id: 'gr7-physical-education-t2',
          title: 'Physical Education',
          description: 'Passing and receiving, stamina, rules, leadership, and fair competition.',
          component: lazy(() => import('./term2/physical-education/PhysicalEducationT2')),
        },
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
          id: 'gr7-personal-social-wellbeing-t3',
          title: 'Personal and Social Well-being',
          description: 'Diversity, rights, stereotypes, career awareness, and social change.',
          component: lazy(() => import('./term3/personal-social-wellbeing/PersonalSocialWellbeingT3')),
        },
        {
          id: 'gr7-physical-education-t3',
          title: 'Physical Education',
          description: 'Athletics, indigenous games, flexibility, endurance, and teamwork.',
          component: lazy(() => import('./term3/physical-education/PhysicalEducationT3')),
        },
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
          id: 'gr7-personal-social-wellbeing-t4',
          title: 'Personal and Social Well-being',
          description: 'Goals, stress management, healthy routines, and future planning.',
          component: lazy(() => import('./term4/personal-social-wellbeing/PersonalSocialWellbeingT4')),
        },
        {
          id: 'gr7-physical-education-t4',
          title: 'Physical Education',
          description: 'Fitness plans, strategy, participation review, and recreation.',
          component: lazy(() => import('./term4/physical-education/PhysicalEducationT4')),
        },
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
