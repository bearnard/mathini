import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const lifeOrientationGrade9: Subject = {
  id: 'lo',
  title: 'Life Orientation',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr9-development-of-self-t1',
          title: 'Development of the Self in Society',
          description: 'Understand values, self-awareness, self-motivation, goal setting, and decision-making.',
          component: lazy(() => import('./term1/development-of-self/DevelopmentOfSelf')),
        },
        {
          id: 'gr9-relationships-life-changes-t1',
          title: 'Relationships and Life Changes',
          description: 'Manage emotions, establish healthy boundaries, and communicate effectively during adolescence.',
          component: lazy(() => import('./term1/relationships-life-changes/RelationshipsLifeChanges')),
        },
        {
          id: 'gr9-study-skills-transition-t1',
          title: 'Study Skills and Transition Planning',
          description: 'Build strong study routines, understand subject demands, and prepare for Grade 10.',
          component: lazy(() => import('./term1/study-skills-transition/StudySkillsTransition')),
        },
        {
          id: 'gr9-physical-education-task-1-t1',
          title: 'Physical Education Task — Term 1',
          description: 'Develop fitness, coordination, teamwork, and safe participation in physical activity.',
          component: lazy(() => import('./term1/physical-education-task-1/PhysicalEducationTask1')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr9-social-environmental-responsibility-t2',
          title: 'Social and Environmental Responsibility',
          description: 'Investigate community health, environmental care, and responsible action for change.',
          component: lazy(() => import('./term2/social-environmental-responsibility/SocialEnvironmentalResponsibility')),
        },
        {
          id: 'gr9-sexuality-health-t2',
          title: 'Sexuality and Health',
          description: 'Understand puberty, sexual health, disease prevention, consent, and responsible choices.',
          component: lazy(() => import('./term2/sexuality-health/SexualityHealth')),
        },
        {
          id: 'gr9-substance-abuse-emotional-safety-t2',
          title: 'Substance Abuse and Emotional Safety',
          description: 'Recognise harmful behaviour, understand coping strategies, and access support services.',
          component: lazy(() => import('./term2/substance-abuse-emotional-safety/SubstanceAbuseEmotionalSafety')),
        },
        {
          id: 'gr9-physical-education-task-2-t2',
          title: 'Physical Education Task — Term 2',
          description: 'Apply sport skills in competitive and recreational contexts while maintaining fair play.',
          component: lazy(() => import('./term2/physical-education-task-2/PhysicalEducationTask2')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr9-democracy-human-rights-t3',
          title: 'Democracy and Human Rights',
          description: 'Explore democratic structures, the Constitution, rights, duties, and citizen participation.',
          component: lazy(() => import('./term3/democracy-human-rights/DemocracyHumanRights')),
        },
        {
          id: 'gr9-diversity-social-justice-t3',
          title: 'Diversity and Social Justice',
          description: 'Analyse discrimination, promote gender equity, and build inclusive communities.',
          component: lazy(() => import('./term3/diversity-social-justice/DiversitySocialJustice')),
        },
        {
          id: 'gr9-conflict-resolution-advocacy-t3',
          title: 'Conflict Resolution and Advocacy',
          description: 'Use negotiation and mediation strategies, develop leadership, and advocate for change.',
          component: lazy(() => import('./term3/conflict-resolution-advocacy/ConflictResolutionAdvocacy')),
        },
        {
          id: 'gr9-physical-education-task-3-t3',
          title: 'Physical Education Task — Term 3',
          description: 'Demonstrate athletics, leadership, and consistency in physical activity.',
          component: lazy(() => import('./term3/physical-education-task-3/PhysicalEducationTask3')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr9-careers-career-choices-t4',
          title: 'Careers and Career Choices',
          description: 'Match abilities and interests to career fields and Grade 10 subject choices.',
          component: lazy(() => import('./term4/careers-career-choices/CareersCareerChoices')),
        },
        {
          id: 'gr9-study-methods-exam-readiness-t4',
          title: 'Study Methods and Exam Readiness',
          description: 'Develop exam technique, revision schedules, and stress management for the FET phase.',
          component: lazy(() => import('./term4/study-methods-exam-readiness/StudyMethodsExamReadiness')),
        },
        {
          id: 'gr9-responsible-future-planning-t4',
          title: 'Responsible Future Planning',
          description: 'Review goals, build resilience, access support, and plan for the next school phase.',
          component: lazy(() => import('./term4/responsible-future-planning/ResponsibleFuturePlanning')),
        },
        {
          id: 'gr9-physical-education-task-4-t4',
          title: 'Physical Education Task — Term 4',
          description: 'Review fitness, set personal targets, and evaluate lifelong activity goals.',
          component: lazy(() => import('./term4/physical-education-task-4/PhysicalEducationTask4')),
        },
      ],
    },
  ],
};
