import { lazy } from 'react';
import type { Subject } from '../../../types/curriculum';

export const lifeOrientationGrade11: Subject = {
  id: 'lo',
  title: 'Life Orientation',
  terms: [
    {
      id: 1,
      title: 'Term 1',
      topics: [
        {
          id: 'gr11-development-of-self-t1',
          title: 'Development of the Self in Society',
          description: 'Life roles, values, self-management and intentional personal growth.',
          component: lazy(() => import('./term1/development-of-self-in-society/DevelopmentOfSelfInSociety')),
        },
        {
          id: 'gr11-relationships-sexuality-health-t1',
          title: 'Relationships, Sexuality and Health',
          description: 'Healthy relationships, consent, reproductive health and responsible communication.',
          component: lazy(() => import('./term1/relationships-sexuality-health/RelationshipsSexualityHealth')),
        },
        {
          id: 'gr11-study-skills-coping-t1',
          title: 'Study Skills and Coping Strategies',
          description: 'Exam strategies, workload management, stress resilience and support systems.',
          component: lazy(() => import('./term1/study-skills-coping-strategies/StudySkillsCopingStrategies')),
        },
        {
          id: 'gr11-physical-education-task-1-t1',
          title: 'Physical Education Task — Term 1',
          description: 'Fitness components, technique, personal activity programming and health benefits.',
          component: lazy(() => import('./term1/physical-education-task-1/PhysicalEducationTask1')),
        },
        {
          id: 'gr11-sport-nation-building-t1',
          title: "Sport and Nation Building",
          description: "How players and spectators behave, what triggers poor behaviour, and how sport can support or harm nation building.",
          component: lazy(() => import('./term1/sport-nation-building/SportNationBuilding')),
        },
        {
          id: 'gr11-media-relationship-values-t1',
          title: "The Media and Your Beliefs about Relationships",
          description: "How films, adverts and social media shape what you expect from relationships, and how to think about them critically.",
          component: lazy(() => import('./term1/media-relationship-values/MediaRelationshipValues')),
        },
      ],
    },
    {
      id: 2,
      title: 'Term 2',
      topics: [
        {
          id: 'gr11-social-environmental-responsibility-t2',
          title: 'Social and Environmental Responsibility',
          description: 'Environmental justice, sustainability, accountability and ethical civic responses.',
          component: lazy(() => import('./term2/social-environmental-responsibility/SocialEnvironmentalResponsibility')),
        },
        {
          id: 'gr11-community-participation-t2',
          title: 'Community Participation',
          description: 'Volunteering, leadership, project planning and collaboration for community change.',
          component: lazy(() => import('./term2/community-participation/CommunityParticipation')),
        },
        {
          id: 'gr11-risk-and-wellbeing-t2',
          title: 'Risk and Wellbeing',
          description: 'Substance abuse, trauma, protective factors, coping strategies and support services.',
          component: lazy(() => import('./term2/risk-and-wellbeing/RiskAndWellbeing')),
        },
        {
          id: 'gr11-physical-education-task-2-t2',
          title: 'Physical Education Task — Term 2',
          description: 'Team sports, strategy, leadership, fair play and wellness tracking.',
          component: lazy(() => import('./term2/physical-education-task-2/PhysicalEducationTask2')),
        },
        {
          id: 'gr11-study-styles-annual-plan-t2',
          title: "Study Styles, Strategies and Your Annual Study Plan",
          description: "Study skills, styles and strategies, exam skills, and building an annual study plan with goals.",
          component: lazy(() => import('./term2/study-styles-annual-plan/StudyStylesAnnualPlan')),
        },
      ],
    },
    {
      id: 3,
      title: 'Term 3',
      topics: [
        {
          id: 'gr11-democracy-human-rights-t3',
          title: 'Democracy and Human Rights',
          description: 'The Bill of Rights, discrimination, inclusivity, social justice and advocacy.',
          component: lazy(() => import('./term3/democracy-human-rights/DemocracyHumanRights')),
        },
        {
          id: 'gr11-democratic-structures-participation-t3',
          title: 'Democratic Structures and Participation',
          description: 'Branches of government, elections, public participation, accountability and the rule of law.',
          component: lazy(() => import('./term3/democratic-structures-participation/DemocraticStructuresParticipation')),
        },
        {
          id: 'gr11-media-ideology-citizenship-t3',
          title: 'Media, Ideology and Active Citizenship',
          description: 'Media influence, propaganda, critical literacy and evidence-based civic engagement.',
          component: lazy(() => import('./term3/media-ideology-citizenship/MediaIdeologyCitizenship')),
        },
        {
          id: 'gr11-physical-education-task-3-t3',
          title: 'Physical Education Task — Term 3',
          description: 'Athletics skills, conditioning, inclusive leadership, safe practice and sustained effort.',
          component: lazy(() => import('./term3/physical-education-task-3/PhysicalEducationTask3')),
        },
        {
          id: 'gr11-healthy-lifestyle-accidents-nutrition-t3',
          title: "A Healthy Balanced Lifestyle: Accidents and Nutrition",
          description: "The facets of a balanced lifestyle, the causes and prevention of accidents, and the role of nutrition in health and activity.",
          component: lazy(() => import('./term3/healthy-lifestyle-accidents-nutrition/HealthyLifestyleAccidentsNutrition')),
        },
        {
          id: 'gr11-risky-behaviour-peer-pressure-t3',
          title: "Risky Behaviour, Peer Pressure and Getting Help",
          description: "Risky behaviour, substances, sexual health and consent, handling peer pressure, and where to get help.",
          component: lazy(() => import('./term3/risky-behaviour-peer-pressure/RiskyBehaviourPeerPressure')),
        },
      ],
    },
    {
      id: 4,
      title: 'Term 4',
      topics: [
        {
          id: 'gr11-careers-career-choices-t4',
          title: 'Careers and Career Choices',
          description: 'Post-school pathways, funding options, entry requirements and matching strengths to careers.',
          component: lazy(() => import('./term4/careers-career-choices/CareersCareerChoices')),
        },
        {
          id: 'gr11-world-of-work-entrepreneurship-t4',
          title: 'World of Work and Entrepreneurship',
          description: 'Work ethics, labour market realities, employment pathways and entrepreneurial qualities.',
          component: lazy(() => import('./term4/world-of-work-entrepreneurship/WorldOfWorkEntrepreneurship')),
        },
        {
          id: 'gr11-application-documents-planning-t4',
          title: 'Application Documents and Planning',
          description: 'Formal letters, CV writing, portfolios, references and interview preparation.',
          component: lazy(() => import('./term4/application-documents-planning/ApplicationDocumentsPlanning')),
        },
        {
          id: 'gr11-physical-education-task-4-t4',
          title: 'Physical Education Task — Term 4',
          description: 'Fitness reflection, lifelong physical activity, sustainable goals and participation habits.',
          component: lazy(() => import('./term4/physical-education-task-4/PhysicalEducationTask4')),
        },
        {
          id: 'gr11-gender-roles-power-abuse-t4',
          title: "Gender Roles and Unequal Power",
          description: "Gender roles, unequal power and abuse of power, the effects on well-being, and how to address inequality.",
          component: lazy(() => import('./term4/gender-roles-power-abuse/GenderRolesPowerAbuse')),
        },
        {
          id: 'gr11-religions-belief-moral-dilemmas-t4',
          title: "Religions, Beliefs and Moral Dilemmas",
          description: "South Africa's religions and belief systems, clarifying your own values, and thinking through moral dilemmas respectfully.",
          component: lazy(() => import('./term4/religions-belief-moral-dilemmas/ReligionsBeliefMoralDilemmas')),
        },
      ],
    },
  ],
};
