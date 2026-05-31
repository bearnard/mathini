import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const lifeOrientationGrade8: Subject = {
  id: 'lo',
  title: 'Life Orientation',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'development-of-the-self-in-society',
          title: 'Development of the Self in Society',
          description: 'Self-image, self-motivation, support systems, and personal goal setting.',
          component: lazy(
            () =>
              import(
                './term1/development-of-the-self-in-society/DevelopmentOfTheSelfInSociety'
              ),
          ),
        },
        {
          id: 'relationships-and-emotional-wellbeing',
          title: 'Relationships and Emotional Wellbeing',
          description: 'Peer pressure, bullying, abuse awareness, communication, and help-seeking.',
          component: lazy(
            () =>
              import(
                './term1/relationships-and-emotional-wellbeing/RelationshipsAndEmotionalWellbeing'
              ),
          ),
        },
        {
          id: 'study-skills-and-personal-organisation',
          title: 'Study Skills and Personal Organisation',
          description: 'Time management, homework routines, concentration, and planning habits.',
          component: lazy(
            () =>
              import(
                './term1/study-skills-and-personal-organisation/StudySkillsAndPersonalOrganisation'
              ),
          ),
        },
        {
          id: 'physical-education-task',
          title: 'Physical Education Task',
          description: 'Warm-ups, basic fitness, invasion-game skills, safety, and fair play.',
          component: lazy(() => import('./term1/physical-education-task/PhysicalEducationTask')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'social-and-environmental-responsibility',
          title: 'Social and Environmental Responsibility',
          description: 'Environmental health, pollution, water use, waste management, and conservation.',
          component: lazy(
            () =>
              import(
                './term2/social-and-environmental-responsibility/SocialAndEnvironmentalResponsibility'
              ),
          ),
        },
        {
          id: 'health-and-risk-behaviour',
          title: 'Health and Risk Behaviour',
          description: 'Substance abuse awareness, personal safety, refusal skills, and resilience.',
          component: lazy(
            () => import('./term2/health-and-risk-behaviour/HealthAndRiskBehaviour'),
          ),
        },
        {
          id: 'community-responsibility',
          title: 'Community Responsibility',
          description: 'Community services, empathy, shared spaces, reporting, and volunteering.',
          component: lazy(() => import('./term2/community-responsibility/CommunityResponsibility')),
        },
        {
          id: 'physical-education-task',
          title: 'Physical Education Task',
          description: 'Net or wall games, agility, endurance, coordination, and teamwork.',
          component: lazy(() => import('./term2/physical-education-task/PhysicalEducationTask')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'democracy-and-human-rights',
          title: 'Democracy and Human Rights',
          description: 'Rights, responsibilities, equality, dignity, respect, and constitutional values.',
          component: lazy(() => import('./term3/democracy-and-human-rights/DemocracyAndHumanRights')),
        },
        {
          id: 'diversity-and-nation-building',
          title: 'Diversity and Nation-building',
          description: 'Culture, prejudice, inclusion, ubuntu, and social cohesion.',
          component: lazy(() => import('./term3/diversity-and-nation-building/DiversityAndNationBuilding')),
        },
        {
          id: 'conflict-management-and-communication',
          title: 'Conflict Management and Communication',
          description: 'Mediation, assertiveness, listening, compromise, and problem solving.',
          component: lazy(
            () =>
              import(
                './term3/conflict-management-and-communication/ConflictManagementAndCommunication'
              ),
          ),
        },
        {
          id: 'physical-education-task',
          title: 'Physical Education Task',
          description: 'Athletics, relays, indigenous games, flexibility, and teamwork.',
          component: lazy(() => import('./term3/physical-education-task/PhysicalEducationTask')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'careers-and-career-choices',
          title: 'Careers and Career Choices',
          description: 'Interests, abilities, occupations, and aspiration mapping.',
          component: lazy(() => import('./term4/careers-and-career-choices/CareersAndCareerChoices')),
        },
        {
          id: 'learning-styles-and-exam-readiness',
          title: 'Learning Styles and Exam Readiness',
          description: 'Revision plans, memory strategies, note-making, and stress management.',
          component: lazy(
            () =>
              import(
                './term4/learning-styles-and-exam-readiness/LearningStylesAndExamReadiness'
              ),
          ),
        },
        {
          id: 'responsible-decision-making',
          title: 'Responsible Decision-making',
          description: 'Goal setting, consequences, influence, resilience, and healthy routines.',
          component: lazy(() => import('./term4/responsible-decision-making/ResponsibleDecisionMaking')),
        },
        {
          id: 'physical-education-task',
          title: 'Physical Education Task',
          description: 'Games application, personal fitness review, participation, and recreation.',
          component: lazy(() => import('./term4/physical-education-task/PhysicalEducationTask')),
        },
      ],
    },
  ],
};
