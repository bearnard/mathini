import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const lifeOrientationGrade7: Subject = {
  id: 'lo',
  title: 'Life Orientation',
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
      ],
    },
  ],
};
