import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const lifeOrientationGrade12: Subject = {
  id: 'lo',
  title: 'Life Orientation',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr12-development-of-the-self-in-society-t1',
          title: 'Development of the Self in Society',
          description: 'Personal mission, goals, resilience, self-motivation and responsibility for final-year success.',
          component: lazy(() => import('./term1/development-of-the-self-in-society/DevelopmentOfTheSelfInSociety')),
        },
        {
          id: 'gr12-healthy-relationships-and-wellbeing-t1',
          title: 'Healthy Relationships and Wellbeing',
          description: 'Respectful relationships, reproductive health, informed choices, coping with stress and support networks.',
          component: lazy(() => import('./term1/healthy-relationships-and-wellbeing/HealthyRelationshipsAndWellbeing')),
        },
        {
          id: 'gr12-study-planning-for-exit-level-readiness-t1',
          title: 'Study Planning for Exit Level Readiness',
          description: 'Revision planning, exam discipline, time management, help-seeking and accountability before major assessments.',
          component: lazy(() => import('./term1/study-planning-for-exit-level-readiness/StudyPlanningForExitLevelReadiness')),
        },
        {
          id: 'gr12-physical-education-task-1-t1',
          title: 'Physical Education Task — Term 1',
          description: 'Fitness maintenance, conditioning, balanced routines and safe participation under academic pressure.',
          component: lazy(() => import('./term1/physical-education-task-1/PhysicalEducationTask1')),
        },
        {
          id: 'gr12-unemployment-solutions-t1',
          title: 'Unemployment and Innovative Solutions',
          description: 'Reasons for and impact of unemployment, volunteering, part-time work, entrepreneurship, informal jobs and committing to a decision.',
          component: lazy(() => import('./term1/unemployment-solutions/UnemploymentSolutions')),
        },
        {
          id: 'gr12-tax-corruption-fraud-t1',
          title: 'SARS Tax Basics, Corruption and Fraud',
          description: 'Why tax is paid, basic SARS tax obligations, and the impact of corruption and fraud on the individual, company, community and country.',
          component: lazy(() => import('./term1/tax-corruption-fraud/TaxCorruptionFraud')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr12-social-and-environmental-responsibility-t2',
          title: 'Social and Environmental Responsibility',
          description: 'Current social and environmental issues, ethics, legislation awareness and realistic interventions.',
          component: lazy(() => import('./term2/social-and-environmental-responsibility/SocialAndEnvironmentalResponsibility')),
        },
        {
          id: 'gr12-physical-education-task-2-t2',
          title: 'Physical Education Task — Term 2',
          description: 'Game participation, fitness goals, stress relief, teamwork and active lifestyle habits.',
          component: lazy(() => import('./term2/physical-education-task-2/PhysicalEducationTask2')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr12-democracy-and-human-rights-t3',
          title: 'Democracy and Human Rights',
          description: 'Human rights violations, discrimination, redress, constitutional values and accountability.',
          component: lazy(() => import('./term3/democracy-and-human-rights/DemocracyAndHumanRights')),
        },
        {
          id: 'gr12-ideologies-media-and-citizenship-t3',
          title: 'Ideologies, Media and Citizenship',
          description: 'Ideology, bias, propaganda, social movements and responsible participation in democracy.',
          component: lazy(() => import('./term3/ideologies-media-and-citizenship/IdeologiesMediaAndCitizenship')),
        },
        {
          id: 'gr12-physical-education-task-3-t3',
          title: 'Physical Education Task — Term 3',
          description: 'Fitness maintenance, teamwork, self-discipline, participation review and health responsibility.',
          component: lazy(() => import('./term3/physical-education-task-3/PhysicalEducationTask3')),
        },
        {
          id: 'gr12-human-factors-ill-health-t3',
          title: 'Human Factors in Ill-Health, Accidents and Disasters',
          description: 'Psychological, social, religious and cultural factors, behaviour that harms health, and the human side of accidents and disasters.',
          component: lazy(() => import('./term3/human-factors-ill-health/HumanFactorsIllHealth')),
        },
        {
          id: 'gr12-lifestyle-diseases-t3',
          title: 'Lifestyle Diseases and Interventions',
          description: 'Cancer, hypertension, heart disease, TB and STIs; poverty and gender imbalances; prevention, early detection, treatment, care and support.',
          component: lazy(() => import('./term3/lifestyle-diseases/LifestyleDiseases')),
        },
        {
          id: 'gr12-physical-activity-plan-t3',
          title: 'A Long-Term Physical Activity Plan',
          description: 'Long-term effects of being active, building an action plan, and benefits for lifestyle diseases.',
          component: lazy(() => import('./term3/physical-activity-plan/PhysicalActivityPlan')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr12-careers-and-career-choices-t4',
          title: 'Careers and Career Choices',
          description: 'Post-school pathways, admissions, funding, entrepreneurship and lifelong learning plans.',
          component: lazy(() => import('./term4/careers-and-career-choices/CareersAndCareerChoices')),
        },
        {
          id: 'gr12-world-of-work-readiness-t4',
          title: 'World of Work Readiness',
          description: 'CVs, interviews, workplace ethics, contracts, labour rights and professional conduct.',
          component: lazy(() => import('./term4/world-of-work-readiness/WorldOfWorkReadiness')),
        },
        {
          id: 'gr12-physical-education-task-4-t4',
          title: 'Physical Education Task — Term 4',
          description: 'Lifetime fitness, recreation choices, healthy routines and sustainable activity goals.',
          component: lazy(() => import('./term4/physical-education-task-4/PhysicalEducationTask4')),
        },
      ],
    },
  ],
};
