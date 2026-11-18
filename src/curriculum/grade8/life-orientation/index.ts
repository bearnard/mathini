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
          id: 'gr8-sexuality-feelings-values-t1',
          title: "Sexuality: Feelings, Values, Pressure and Respect",
          description: "Normal feelings, what influences you, respect and consent, saying no and where to get help.",
          component: lazy(() => import('./term1/sexuality-feelings-values/SexualityFeelingsValues')),
        },
        {
          id: 'gr8-relationships-friendships-t1',
          title: "Relationships and Friendships: Starting, Keeping and Ending",
          description: "Starting a friendship, healthy friendships, constructive disagreement and ending an unhealthy friendship.",
          component: lazy(() => import('./term1/relationships-friendships/RelationshipsFriendships')),
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
          id: 'gr8-career-categories-t2',
          title: "The Six Career Categories and the Role of Work",
          description: "Realistic, investigative, artistic, social, enterprising and conventional careers, and how work meets needs.",
          component: lazy(() => import('./term2/career-categories/CareerCategories')),
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
          id: 'gr8-hiv-and-aids-t3',
          title: "HIV and AIDS: Facts, Treatment and Caring",
          description: "What HIV and AIDS are, how HIV is and is not passed on, prevention, testing, treatment and ending stigma.",
          component: lazy(() => import('./term3/hiv-and-aids/HivAndAids')),
        },
        {
          id: 'gr8-environmental-health-t3',
          title: "Environmental Health: Laws, Earth Day and Programmes",
          description: "Environmental health, laws that protect the environment, Earth Day and planning a programme.",
          component: lazy(() => import('./term3/environmental-health/EnvironmentalHealth')),
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
          id: 'gr8-human-rights-violations-t4',
          title: "Human Rights Violations and Counter-Strategies",
          description: "Types of human rights violations and peaceful, lawful ways to respond.",
          component: lazy(() => import('./term4/human-rights-violations/HumanRightsViolations')),
        },
        {
          id: 'gr8-gender-equity-and-gbv-t4',
          title: "Gender Equity and Gender-Based Violence",
          description: "Gender equity in sport, gender-based violence, its impact, the law and where to get help.",
          component: lazy(() => import('./term4/gender-equity-and-gbv/GenderEquityAndGbv')),
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
